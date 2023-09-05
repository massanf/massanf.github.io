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
                    <p className={inter.className}>Publications</p>
                </h2>
                <div>
                    <motion.div className={backgroundStyles.publication} initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: 1,
                            opacity: 0,
                            y: 25
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 0,
                                ease: "easeOut",
                                duration: 0.4
                            },
                            y: 0
                        }
                    }}>
                    {/* <div className={backgroundStyles.publication}> */}
                        <h3>CT Reconstruction from X-ray Videos with Conditional GAN Image Translation</h3>
                        <i>Masayuki Fujita, Hitoshi Iba</i>
                        <div className={backgroundStyles.abstract}>
                            &nbsp; <i>Abstract</i> — Advancements in medical imaging technology have led to the emergence of rotatable X-ray scanning devices, which can capture multiple X-ray images from various angles (X-ray videos) with reduced radiation exposure and subsequent burden compared to computed tomography (CT) scans. However, the potential utility of X-ray videos remain underexplored. This study introduces a novel CT reconstruction technique that combines the Filtered Back Projection method (FBP) with image-to-image translation using a conditional Generative Adversarial Network (conditional GAN). While conventional FBP from X-ray videos produces CT images marred by artifacts and noise due to perspective distortion, our results demonstrate that the Pix2Pix image translation network can effectively mitigate these artifacts, yielding CT scans of superior qualitative and quantitative value.
                        </div>
                        <div className={backgroundStyles.footnote}>
                            Accepted for oral presentation on 13th International Conference on Smart Computing and Artificial Intelligence (SCAI 2023) <br />
                            Selected as the <span>Best Paper</span> out of more than 300 submissions
                        </div>
                    </motion.div>
                </div>
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
                                <span className={styles.dark}>@</span> Dept. of Information & Communication Engineering, Graduate School of Information Science and Technology, The University of Tokyo
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
                        Tokyo Gakugei University Senior High School
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

                    <ShortEducationBlock date="1999" country="🇯🇵Japan">
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
