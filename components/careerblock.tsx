import { Inter } from 'next/font/google'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'
import { motion } from 'framer-motion';
import careerStyles from '@/styles/Career.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function CareerBlock(props: { delay: any; title: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; company: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; date: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; children: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; skills: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined }) {
    return (
        <>
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} className={careerStyles.careerBlock} variants={{
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
                <div className={careerStyles.header}>
                    <h3>
                        {props.title}
                    </h3>
                    <div>
                        {props.company}
                    </div>
                    <div className={careerStyles.date}>
                        {props.date}
                    </div>
                </div>
                <div className={careerStyles.text}>
                    {props.children}
                </div>
                <div className={careerStyles.skills}>
                    Skills: {props.skills}
                </div>
            </motion.div>
        </>
    )
}