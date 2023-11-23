import { Inter } from 'next/font/google'
import academiaStyles from '@/styles/Academia.module.css'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function ShortEducationBlock(props: { date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; country: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
    return (
        <>
            <div className={academiaStyles .educationBlockWrap}>
                <div className={academiaStyles .educationBlockShort}>
                    <div className={academiaStyles .date}>
                        <p>{props.date}</p>
                    </div>
                    <div className={academiaStyles .header}>
                        <div className={academiaStyles .logo} id={academiaStyles .transparent}>
                        </div>
                        <div className={academiaStyles .schoolName}>
                            {/* <p className={inter.className}> */}
                                {props.children}
                            {/* </p> */}
                            <span className={academiaStyles .countryName}>
                                {props.country}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

