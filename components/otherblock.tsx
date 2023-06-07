// import Image from 'next/image'
import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image"
import { Inter } from 'next/font/google'
import otherStyles from '@/styles/Other.module.css'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })


export default function OtherBlock(props: { title: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; children: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; delay: number;}) {
    return (
        <>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .95,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: props.delay + 0.2,
                        ease: "easeOut",
                        duration: 0.5
                    },
                }
            }} className={otherStyles.workBlock}>
                <div className={otherStyles.text}>
                    <h2 className={inter.className}>
                        {props.title}
                    </h2>
                    <div className={inter.className}>
                        {props.children}
                    </div>
                </div>
            </motion.div>
        </>
    )
}