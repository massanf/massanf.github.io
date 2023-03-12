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
                    skills="Python, Microsoft Azure, Amazon Web Services, Google Cloud Platform"
                    delay={0.1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis metus dui. Vivamus facilisis felis ipsum, et dictum arcu maximus non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quis urna felis. Aenean ultricies lacus sed luctus vehicula.
                </CarrerBlock>

                <CarrerBlock
                    title="Application Engineer"
                    company={
                        <p>Rakuten Summmer Short Internship - Internship  <span>1st place</span></p>
                    }
                    date="Aug 2021"
                    skills="Python, AWS, Microsoft Azure, Amazon Web Services, Google Cloud Platform"
                    delay={0.3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis metus dui. Vivamus facilisis felis ipsum, et dictum arcu maximus non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quis urna felis. Aenean ultricies lacus sed luctus vehicula.
                </CarrerBlock>

                <CarrerBlock
                    title={
                        <p>Teaching Assistant <span>&</span> Material Development</p>
                    }
                    company="University of Tokyo - Part-time"
                    date="Apr 2022 - Present"
                    skills="Unity · C# · Teaching · Technical Writing · Coaching"
                    delay={0.5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis metus dui. Vivamus facilisis felis ipsum, et dictum arcu maximus non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quis urna felis. Aenean ultricies lacus sed luctus vehicula.
                </CarrerBlock>
            </motion.div>
        </Template >
    )
}