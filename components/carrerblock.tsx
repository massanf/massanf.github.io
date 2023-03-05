import { Inter } from 'next/font/google'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'
import { motion } from 'framer-motion';
import carrerStyles from '@/styles/Carrer.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function CarrerBlock(props: { delay: any; title: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; company: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; date: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; children: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; skills: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined }) {
    return (
        <>
            <motion.div className={carrerStyles.carrerBlock} initial="hidden" animate="visible" variants={{
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
                <div className={carrerStyles.header}>
                    <h3>
                        {props.title}
                    </h3>
                    <div>
                        {props.company}
                    </div>
                    <div className={carrerStyles.date}>
                        {props.date}
                    </div>
                </div>
                <div className={carrerStyles.text}>
                    {props.children}
                </div>
                <div className={carrerStyles.skills}>
                    Skills: {props.skills}
                </div>
            </motion.div>
        </>
    )
}