import { Inter } from 'next/font/google'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'
import { motion } from 'framer-motion';
import qualificationsStyles from '@/styles/Qualifications.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function CarrerBlock(props: { delay: any; title: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; children: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined;  }) {
    return (
        <>
            <motion.div className={qualificationsStyles.block} initial="hidden" animate="visible" variants={{
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
                <h3>{props.title}</h3>
                {props.children}
            </motion.div>
        </>
    )
}