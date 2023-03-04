import Image from 'next/image'
import { StaticImageData } from "next/image"
import { Inter } from 'next/font/google'
import backgroundStyles from '@/styles/Background.module.css'
import workStyles from '@/styles/Work.module.css'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'
import { motion } from 'framer-motion';
import experienceStyles from '@/styles/Experience.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function ExperienceBlock(props: { delay: any; title: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; company: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; date: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; children: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; skills: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined }) {
    return (
        <>
            <motion.div className={experienceStyles.experienceBlock} initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: 1,
                    opacity: 0,
                    y: 25
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: props.delay,
                        ease: "easeOut",
                        duration: 0.4
                    },
                    y: 0
                }
            }}>
                <div className={experienceStyles.header}>
                    <h3>
                        {props.title}
                    </h3>
                    <div>
                        {props.company}
                    </div>
                    <div className={experienceStyles.date}>
                        {props.date}
                    </div>
                </div>
                <div className={experienceStyles.text}>
                    {props.children}
                </div>
                <div className={experienceStyles.skills}>
                    Skills: {props.skills}
                </div>
            </motion.div>
        </>
    )
}