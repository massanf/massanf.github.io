import { useState, useEffect, useRef } from "react";
import { Inter } from 'next/font/google';
import guitarStyles from '@/styles/Guitar.module.css';
import GuitarBlock from '../components/guitarblock';
import styles from '@/styles/Home.module.css';
import Template from '../components/template';
import { motion } from 'framer-motion';
import { Button, Slider, Typography, Checkbox, FormControlLabel, Switch, Box } from "@mui/material";

const inter = Inter({ subsets: ['latin'] });

const NOTES = [
    "C♭", "C", "C♯",
    "D♭", "D", "D♯",
    "E♭", "E", "E♯",
    "F♭", "F", "F♯",
    "G♭", "G", "G♯",
    "A♭", "A", "A♯",
    "B♭", "B", "B♯",
];
const STRINGS = [1, 2, 3, 4, 5, 6];

export default function Home() {
    const [note, setNote] = useState(NOTES[0]);
    const [currentString, setCurrentString] = useState(1);
    const [running, setRunning] = useState(false);
    const [bpm, setBpm] = useState(20);
    const [clickEnabled, setClickEnabled] = useState(true);
    const [useStrings, setUseStrings] = useState(false);
    const [selectedStrings, setSelectedStrings] = useState([4, 5, 6]);

    const audioCtxRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        const setNewNote = () => {
            let newNote: string;
            let newString: number;
            if (useStrings && selectedStrings.length > 0) {
                do {
                    newString = selectedStrings[Math.floor(Math.random() * selectedStrings.length)];
                    newNote = NOTES[Math.floor(Math.random() * NOTES.length)];
                } while (newNote === note && newString === currentString);
                setNote(newNote);
                setCurrentString(newString);
            } else {
                do {
                    newNote = NOTES[Math.floor(Math.random() * NOTES.length)];
                } while (newNote === note);
                setNote(newNote);
            }
        };

        let interval: NodeJS.Timeout;
        if (running) {
            interval = setInterval(() => {
                setNewNote();
                if (clickEnabled) {
                    playClick();
                }
            }, (60 / bpm) * 1000);
        }
        return () => clearInterval(interval);
    }, [running, bpm, clickEnabled, useStrings, selectedStrings, note, currentString]);

    const playClick = () => {
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
    };

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
            audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
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
                        <span style={{ fontSize: "48px", fontWeight: "bold" }}>{note}</span>
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
                            control={<Switch checked={useStrings} onChange={() => setUseStrings(!useStrings)} />}
                            label="Specify string"
                        />
                        {useStrings && (
                            <Box display="wrap" gap={1} my={2}>
                                {STRINGS.map((string) => (
                                    <FormControlLabel
                                        key={string}
                                        control={
                                            <Checkbox
                                                checked={selectedStrings.includes(string)}
                                                onChange={() => toggleString(string)}
                                            />
                                        }
                                        label={`String ${string}`}
                                    />
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
