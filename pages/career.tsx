import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Template from '../components/template'
import CareerBlock from '../components/careerblock'
const inter = Inter({ subsets: ['latin'] })
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"


export default function Career() {
    return (
        <Template pagename="career">
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
                    <p className={inter.className}>Career</p>
                </h2>
                <CareerBlock
                    title="Software Engineer"
                    company="Google Inc. - Intern"
                    date="Jul. 2023 - Nov. 2023"
                    skills="C++ · Go"
                    delay={0}>
                    <ul>
                    <li>Assigned to Google Japan&apos;s ChromeOS department as an intern, successfully implemented a new touch screen UI, resulting in a feature launch within a 4-month period.</li>
                    <li>Contributed to the Chromium repository, a complex codebase involving VMs and hardware, completing the challenging project ahead of schedule.</li>
                    <li>Managed and successfully completed two additional projects during the internship.</li>
                    <li>Engaged in various development stages: understanding the code base, documenting, collaborating with UI/UX teams and PMs, conducting code reviews, and implementing unit and end-to-end testing.</li>
                    <li>Ensured quality control by managing tests for different boards, bug identification and resolution, while also focusing on system development, safety verification, user support certification, and presenting results.</li>
                    </ul>
                    List of all the code that I have contributed:
                    <ul>
                    <li><a href="https://chromium-review.googlesource.com/q/owner:massan@google.com" target="_blank" className={styles.careerLink}>Chromium Gerrit (page 1)<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a></li>
                    <li><a href="https://chromium-review.googlesource.com/q/owner:massan@google.com,25" target="_blank" className={styles.careerLink}>Chromium Gerrit (page 2)<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a></li>
                    </ul> 
                </CareerBlock>

                <CareerBlock
                    title="Application Engineer"
                    company={
                        <p>Rakuten Summmer Short Internship - Internship  <span><b>1st place</b></span></p>
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
                </CareerBlock>

                <CareerBlock
                    title="AI Academic Affairs Researchers"
                    company="Nagase Brothers Inc. - Part Time"
                    date="Jan. 2022 - Present"
                    skills="Python · Microsoft Azure · Amazon Web Services · Google Cloud Platform"
                    delay={0.1}>
                    <ul>
                    <li>Managed a software development team and streamlined operations by creating and maintaining automation methods</li>
                    <li>Spearheaded ML integration for 100,000+ user app by leading product development</li>
                    </ul>
                </CareerBlock>

               
                <CareerBlock
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
                </CareerBlock>
            </motion.div>
        </Template >
    )
}