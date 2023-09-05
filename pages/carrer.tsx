import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Template from '../components/template'
import CarrerBlock from '../components/carrerblock'
const inter = Inter({ subsets: ['latin'] })
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"


export default function Home() {
    return (
        <Template>
            <motion.div className={styles.mainArea} initial="hidden" animate="visible" variants={{
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
            }}>

                <h2 className={styles.heading}>
                    <p className={inter.className}>Carrer</p>
                </h2>
                <CarrerBlock
                    title="Software Engineer"
                    company="Google Inc. - Intern"
                    date="Jul. 2023 - Present"
                    skills="C++ · Go"
                    delay={0}>
                    Worked on ChromeOS frontend development, contributing multiple UI enhancements to the codebase.<br />
                    <ul>
                    <li><a href="https://chromium-review.googlesource.com/c/chromium/src/+/4777021" target="_blank" className={styles.carrerLink}>4777021<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a></li>
                    <li><a href="https://chromium-review.googlesource.com/c/chromium/src/+/4713908" target="_blank" className={styles.carrerLink}>4713908<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a></li>
                    <li><a href="https://chromium-review.googlesource.com/c/chromium/src/+/4833011" target="_blank" className={styles.carrerLink}>4833011<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a></li>
                    </ul> 
                </CarrerBlock>

                <CarrerBlock
                    title="AI Academic Affairs Researchers"
                    company="Nagase Brothers Inc. - Part Time"
                    date="Jan. 2022 - Present"
                    skills="Python · Microsoft Azure · Amazon Web Services · Google Cloud Platform"
                    delay={0.1}>
                    <ul>
                    <li>Managed a software development team and streamlined operations by creating and maintaining automation methods</li>
                    <li>Spearheaded ML integration for 100,000+ user app by leading product development</li>
                    </ul>
                </CarrerBlock>

                <CarrerBlock
                    title="Application Engineer"
                    company={
                        <p>Rakuten Summmer Short Internship - Internship  <span>1st place</span></p>
                    }
                    date="Aug 2021"
                    skills="React Native · Firebase · Python · Machine Learning"
                    delay={0.1}>
                    <ul>
                        <li>
                        Focused on front-end mobile application development in a team of four developers
                        </li>
                        <li>
                        Collaborated effectively, securing first place among over a dozen teams
                        </li>
                        <li>
                        Demonstrated ability to deliver high-quality results in time-sensitive conditions.
                        </li>
                    </ul>
                </CarrerBlock>

                <CarrerBlock
                    title={
                        <p>Teaching Assistant <span>&</span> Material Development</p>
                    }
                    company="University of Tokyo - Part-time"
                    date="Apr 2022 - Present"
                    skills="Unity · C# · Teaching · Technical Writing · Coaching"
                    delay={0.1}>
                    <ul>
                    <li>
                    Instructed undergraduates on genetic programming, evolutionary computation, algorithms, and Unity fundamentals
                    </li>
                    <li>
                    Maintained and improved base projects for enhanced understanding
                    </li>
                    <li>
                    Expertise in genetic programming led to publication contributions
                    </li>
                    <li>
                    Demonstrated commitment to knowledge-sharing and growth in computer science
                    </li>
                    <li>
                    Dedicated to fostering academic excellence and nurturing upcoming talent
                    </li>
                    </ul>
                </CarrerBlock>
            </motion.div>
        </Template >
    )
}