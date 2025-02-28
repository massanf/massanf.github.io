import { useState, useEffect, useRef } from "react";
import { Inter } from 'next/font/google';
import guitarStyles from '@/styles/Guitar.module.css';
import GuitarBlock from '../components/guitarblock';
import styles from '@/styles/Home.module.css';
import Template from '../components/template';
import { motion } from 'framer-motion';
import { Button, Slider, Typography, Checkbox, FormControlLabel, Switch, Box } from "@mui/material";

const inter = Inter({ subsets: ['latin'] });

// Notes are represented as numbers 0-11, where 0 = C, 1 = C#/Db, etc.
const NOTES = Array.from({length: 12}, (_, i) => i);

type DualNoteMap = {
    [key: number]: [string, string];
};

type SingleNoteMap = {
    [key: number]: string;
};

// Convert note number to name
const getNoteText = (noteNum: number): string => {
    // Notes that can be represented as either sharp or flat
    const dualNoteNames: DualNoteMap = {
        1: ["C♯", "D♭"],
        3: ["D♯", "E♭"],
        6: ["F♯", "G♭"],
        8: ["G♯", "A♭"],
        10: ["A♯", "B♭"]
    };
    
    // Fixed notes that only have one representation
    const singleNoteNames: SingleNoteMap = {
        0: "C",
        2: "D",
        4: "E",
        5: "F",
        7: "G",
        9: "A",
        11: "B"
    };

    if (noteNum in dualNoteNames) {
        // Randomly choose between sharp and flat notation
        return dualNoteNames[noteNum][Math.random() < 0.5 ? 0 : 1];
    }
    return singleNoteNames[noteNum];
};
const STRINGS = [1, 2, 3, 4, 5, 6];

export default function Home() {
    const [note, setNote] = useState<number>(0);
    const [currentString, setCurrentString] = useState(1);
    const [running, setRunning] = useState(false);
    const [bpm, setBpm] = useState(20);
    const [clickEnabled, setClickEnabled] = useState(true);
    const [useStrings, setUseStrings] = useState(false);
    const [selectedStrings, setSelectedStrings] = useState([4, 5, 6]);
    const [markedNotes, setMarkedNotes] = useState(false);

    // Standard tuning (E A D G B E)
    const stringTuning: { [key: number]: number } = {
        1: 4,  // E4 (64)
        2: 11, // B3
        3: 7,  // G3
        4: 2,  // D3
        5: 9,  // A2
        6: 4   // E2
    };

    // Get available notes for a string at marked fret positions
    type StringNumber = 1 | 2 | 3 | 4 | 5 | 6;
    
    const getMarkedNotes = useRef((stringNumber: StringNumber) => {
        const baseTuning = stringTuning[stringNumber];
        const fretPositions = [0, 3, 5, 7, 9];
        return fretPositions.map(fret => (baseTuning + fret) % 12);
    }).current;

    const audioCtxRef = useRef<AudioContext | null>(null);

    const playClick = useRef(() => {
        if (!audioCtxRef.current) return;

        const audioCtx = audioCtxRef.current;
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(500, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        setTimeout(() => {
            oscillator.stop();
        }, 50);
    }).current;

    useEffect(() => {
        const setNewNote = () => {
            let newNote: number;
            let newString: number;
            if (useStrings && selectedStrings.length > 0) {
                do {
                    newString = selectedStrings[Math.floor(Math.random() * selectedStrings.length)];
                    if (markedNotes) {
                        const availableNotes = getMarkedNotes(newString as StringNumber);
                        newNote = availableNotes[Math.floor(Math.random() * availableNotes.length)];
                    } else {
                        newNote = Math.floor(Math.random() * NOTES.length);
                    }
                } while (newNote === note && newString === currentString);
                setNote(newNote);
                setCurrentString(newString);
            } else {
                do {
                    newNote = Math.floor(Math.random() * NOTES.length);
                } while (newNote === note);
                setNote(newNote);
            }
        };

        let interval: NodeJS.Timeout;
        if (running) {
            interval = setInterval(() => {
                setNewNote();
                if (clickEnabled) {
                    playClick && playClick();
                }
            }, (60 / bpm) * 1000);
        }
        return () => clearInterval(interval);
    }, [running, bpm, clickEnabled, useStrings, selectedStrings, note, currentString, markedNotes, getMarkedNotes, playClick]);

    // Toggle string selection
    const toggleString = (stringNumber: number) => {
        setSelectedStrings((prev) =>
            prev.includes(stringNumber)
                ? prev.filter((s) => s !== stringNumber)
                : [...prev, stringNumber]
        );
    };

    const handleStart = async () => {
        if (!audioCtxRef.current) {
            const AudioContextClass = window.AudioContext || ((window as any).webkitAudioContext as typeof AudioContext);
            audioCtxRef.current = new AudioContextClass();
        }
        if (audioCtxRef.current.state === "suspended") {
            await audioCtxRef.current.resume();
        }
        setRunning(true);
    };

    return (
        <Template pagename="guitar">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { scale: 1, y: 50 },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: { ease: "easeOut", duration: 0.2 },
                        y: 0,
                    },
                }}
                className={styles.mainArea}
            >
                <h2 className={styles.heading}>
                    <p className={inter.className}>Guitar Utils</p>
                </h2>

                <GuitarBlock delay={0.1} title="Random Note Generator">
                    <p>
                        For note finding exercise on guitar / bass.
                    </p>

                    <p>
                        <span style={{ fontSize: "48px", fontWeight: "bold" }}>{getNoteText(note)}</span>
                        {useStrings &&
                            <>
                                <span style={{ fontSize: "36px" }}> on </span>
                                <span style={{ fontSize: "48px" }}>{currentString}</span>
                            </>}
                    </p>
                    <Typography gutterBottom>BPM: {bpm}</Typography>
                    <Slider
                        value={bpm}
                        min={10}
                        max={60}
                        step={1}
                        onChange={(_, newValue) => setBpm(newValue as number)}
                        valueLabelDisplay="auto"
                        sx={{ width: "300px" }}
                    />
                    <div>
                        <FormControlLabel
                            control={<Switch checked={clickEnabled} onChange={(e) => setClickEnabled(e.target.checked)} />}
                            label="Enable click"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={<Switch checked={useStrings} onChange={(e) => {
                                setUseStrings(e.target.checked);
                                if (!e.target.checked) setMarkedNotes(false);
                            }} />}
                            label="Specify string"
                        />
                        {useStrings && (
                            <Box 
                                display="wrap" 
                                gap={1} 
                                my={2}
                                ml={1}
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                                    borderRadius: '4px',
                                    padding: 2
                                }}
                            >
                                <div><FormControlLabel
                                    control={
                                        <Switch
                                            checked={markedNotes}
                                            onChange={(e) => setMarkedNotes(e.target.checked)}
                                        />
                                    }
                                    label="Marked notes"
                                /></div>
                                {STRINGS.map((string) => (
                                    <div key={string}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={selectedStrings.includes(string)}
                                                    onChange={() => toggleString(string)}
                                                />
                                            }
                                            label={`String ${string}`}
                                        />
                                    </div>
                                ))}
                            </Box>
                        )}
                    </div>
                    <Button
                        variant={running ? "outlined" : "contained"}
                        color={running ? "primary" : "error"}
                        onClick={() => {
                            if (!running) {
                                handleStart();
                            } else {
                                setRunning(false);
                            }
                        }}
                        sx={{ mt: 2 }}
                    >
                        {running ? "Stop" : "Start"}
                    </Button>
                </GuitarBlock>
            </motion.div>
        </Template >
    );
}
