import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import backgroundStyles from '@/styles/Background.module.css'
import Template from '../components/template'
import EducationBlock from '../components/educationblock'
import ShortEducationBlock from '../components/educationblockshort'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <Template>
            <motion.div  initial="hidden" animate="visible" variants={{
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
                    <p className={inter.className}>Education & Background</p>
                </h2>
                <div>
                    <EducationBlock date="Apr. 2023" country="🇯🇵Japan" logotype={backgroundStyles.ist}>
                        <div>
                            <a href="http://www.iba.t.u-tokyo.ac.jp/index-e.html" target="_blank">
                                Iba Laboratory
                                <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.i.u-tokyo.ac.jp" target="_blank">
                                <span className={styles.dark}>@</span> Graduate School of Information Science and Technology, The University of Tokyo
                                <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                            </a>
                        </div>
                    </EducationBlock>

                    <EducationBlock date="Oct. 2021" logotype={backgroundStyles.eeic} country="🇯🇵Japan">
                        <div>
                            <a href="http://www.iba.t.u-tokyo.ac.jp/index-e.html" target="_blank">
                                Iba Laboratory
                                <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.ee.t.u-tokyo.ac.jp" target="_blank">
                                <span className={styles.dark}>@</span> Dept. of Electrical and Electronic Engineering, Faculty of Engineering, The University of Tokyo <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                            </a>
                        </div>
                    </EducationBlock>

                    <EducationBlock date="Apr. 2019" logotype={backgroundStyles.utokyo} country="🇯🇵Japan">
                        <a href="https://www.u-tokyo.ac.jp/ja/index.html" target="_blank">
                            Natural Sciences I, College of Arts and Sciences, The University of Tokyo <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    </EducationBlock>

                    <EducationBlock date="Apr. 2015" logotype={backgroundStyles.highschool} country="🇯🇵Japan">
                        <p className={inter.className}>
                            Tokyo Gakugei University Senior High School
                        </p>
                    </EducationBlock>

                    <EducationBlock date="Apr. 2014" logotype={backgroundStyles.nido} country="🇨🇱Chile">
                        The International School Nido de Aguilas, High School
                    </EducationBlock>

                    <EducationBlock date="Aug. 2013" logotype={backgroundStyles.cty} country="🇺🇸U.S.">
                        <a href="https://cty.jhu.edu" target="_blank">
                            Mechanical Engineering (2013) <span className={styles.dark}>&</span> Computer Science (2014), Center for Talented Youths, Johns Hopkins University <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    </EducationBlock>

                    <EducationBlock date="Oct. 2011" logotype={backgroundStyles.nido} country="🇨🇱Chile">
                        The International School Nido de Aguilas, Middle School
                    </EducationBlock>

                    <div className={backgroundStyles.educationBlockWrap} id={backgroundStyles.time}>
                        <p>. . .</p>
                    </div>

                    <ShortEducationBlock date="Dec. 1999" country="🇯🇵Japan">
                        Born
                    </ShortEducationBlock>

                    <div className={backgroundStyles.educationBlockWrap} id={backgroundStyles.time}>
                        <p>. . .</p>
                    </div>

                    <ShortEducationBlock date="-2.45e8" country="🌎Earth">
                        Dinosaurs 🦖
                    </ShortEducationBlock>

                    <div className={backgroundStyles.educationBlockWrap} id={backgroundStyles.time}>
                        <p>. . .</p>
                    </div>

                    <ShortEducationBlock date="-1.38e13" country="Everywhere">
                        Big bang 💥
                    </ShortEducationBlock>
                </div>
            </motion.div>
        </Template>
    )
}
