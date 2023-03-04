import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import qualificationsStyles from '@/styles/Qualifications.module.css'
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
                    <p className={inter.className}>Qualifications</p>
                </h2>
                <div className={qualificationsStyles.block}>
                    <h3>- Coding Copetitions</h3>
                    <div className={qualificationsStyles.quality}>
                        AtCoder 水色
                    </div>
                </div>
                <div className={qualificationsStyles.block}>
                    <h3>- English</h3>
                    <div className={qualificationsStyles.quality}>
                        Eiken® 1st grade
                    </div>
                    <div className={qualificationsStyles.quality}>
                        TOEIC980
                    </div>
                </div>
                <div className={qualificationsStyles.block}>
                    <h3>- Car</h3>
                    <div className={qualificationsStyles.quality}>
                        drives stick & likes driving stick 🚙💨
                    </div>
                </div>
            </motion.div>
        </Template>
    )
}
