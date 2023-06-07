import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Template from '../components/template'
import CarrerBlock from '../components/carrerblock'
const inter = Inter({ subsets: ['latin'] })
import { motion } from 'framer-motion';


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
                    title="AI Academic Affairs Researchers"
                    company="Nagase Brothers Inc. - Part Time"
                    date="Jan. 2022 - Present"
                    skills="Python · Microsoft Azure · Amazon Web Services · Google Cloud Platform"
                    delay={0}>
                    At Nagase Brothers Inc, I served as an AI Academic Affairs Researcher, assisting the company in making well-informed technological decisions. As part of product development teams and in a software engineering capacity, I contributed to multiple projects by introducing and refining automation methods. These improvements increased the efficiency of our employees&apos; work, leading to enhancements in the company&apos;s operational processes. My involvement in these projects demonstrated my commitment to teamwork and practical problem-solving in order to achieve tangible progress.
                </CarrerBlock>

                <CarrerBlock
                    title="Application Engineer"
                    company={
                        <p>Rakuten Summmer Short Internship - Internship  <span>1st place</span></p>
                    }
                    date="Aug 2021"
                    skills="React Native · Firebase · Python · Machine Learning"
                    delay={0.3}>
                    During a summer internship at Rakuten, I assumed the role of an Application Engineer and was an integral member of a four-person team. My primary focus was on developing the front-end of a mobile application, where I applied my skills in user interface design and programming. As a cohesive unit, our team demonstrated exceptional performance and collaboration, ultimately securing first place among more than a dozen competing teams. This accomplishment highlights my ability to contribute effectively within a team environment and deliver high-quality results under time-sensitive conditions.
                </CarrerBlock>

                <CarrerBlock
                    title={
                        <p>Teaching Assistant <span>&</span> Material Development</p>
                    }
                    company="University of Tokyo - Part-time"
                    date="Apr 2022 - Present"
                    skills="Unity · C# · Teaching · Technical Writing · Coaching"
                    delay={0.1}>
                    As a Teaching Assistant at the University of Tokyo, I was instrumental in instructing undergraduate students on genetic programming, evolutionary computation, algorithms, and Unity fundamentals. I actively maintained and improved the base projects to facilitate a deeper understanding of the subject matter. My expertise in genetic programming contributed to the publication of written works, showcasing my commitment to knowledge-sharing and ongoing growth in the field of computer science. My experience in this role highlights my dedication to fostering academic excellence and nurturing future talent.
                </CarrerBlock>
            </motion.div>
        </Template >
    )
}