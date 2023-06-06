// import Image from 'next/image'
import ExportedImage from "next-image-export-optimizer";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import qualificationsStyles from '@/styles/Qualifications.module.css'
import QualificationsBlock from '../components/qualificationsblock'
import Template from '../components/template'
import atcoder from '../imgs/logos/atcoder.svg'
import cf from '../imgs/logos/cf.png'
import eiken from '../imgs/logos/eiken.png'
import toeic from '../imgs/logos/toeic.png'
import toefl from '../imgs/logos/toefl.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion';
import { propTypes } from "react-bootstrap/esm/Image";


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <Template>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: 1,
                    y: 50
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        ease: "easeOut",
                        duration: 0.2
                    },
                    y: 0
                }
            }} className={styles.mainArea}>
                <h2 className={styles.heading}>
                    <p className={inter.className}>Qualifications</p>
                </h2>
                <QualificationsBlock delay={0.1} title="Coding Competitions">
                    <div className={qualificationsStyles.quality}>
                        <ExportedImage src={atcoder} height={40} width={40} alt="atcoder logo" className={qualificationsStyles.logo} />
                        <div>
                            <div>
                                <a href="https://www.atcoder.jp/user/trombiano1" target="_blank" style={{ color: "#45a6c6" }}>trombiano1</a>
                                <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                                <div>
                                    Rating <span style={{ color: "#45a6c6" }}>1344</span> as of Mar. 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </QualificationsBlock>

                <QualificationsBlock delay={0.3} title="English">
                    <div className={qualificationsStyles.quality}>
                        <ExportedImage src={eiken} height={35} width={40} alt="atcoder logo" className={qualificationsStyles.logo} />
                        <div>
                            <div>
                                <div>
                                    Grade 1  - 2015
                                </div>
                                <div className={qualificationsStyles.qualityName}>The EIKEN Test in Practical English Proficiency
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={qualificationsStyles.quality}>
                        <ExportedImage src={toeic} height={30} width={40} alt="toeic logo" className={qualificationsStyles.logo} />
                        <div>
                            <div>
                                <div>
                                    980 (R: 495, L: 485) - 2021
                                </div>
                                <div  className={qualificationsStyles.qualityName}>TOEIC® L & R
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
                </QualificationsBlock>
            </motion.div>
        </Template>
    )
}
