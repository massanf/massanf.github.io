import Image from 'next/image'
import { StaticImageData } from "next/image"
import { Inter } from 'next/font/google'
import workStyles from '@/styles/Work.module.css'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })


export default function WorkBlock(props: { img: string | StaticImageData; title: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; children: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; links: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; delay: number;}) {
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
            }} className={workStyles.workBlock}>
                <div className={workStyles.imageWrap}>
                    <Image className={workStyles.coverImage} src={props.img} alt="lookout screenshot" fill />
                </div>
                <div className={workStyles.text}>
                    <h2 className={inter.className}>
                        {props.title}
                    </h2>
                    <div className={inter.className}>
                        {props.children}
                        <div>
                            {props.links}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}