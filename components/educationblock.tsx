import { Inter } from 'next/font/google'
import academiaStyles from '@/styles/Academia.module.css'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function EducationBlock(props: { date: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; logotype: string | undefined; children: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; country: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined }) {
    return (
        <>
            <div className={academiaStyles .educationBlockWrap}>
                <div className={academiaStyles .educationBlock}>
                    <div className={academiaStyles .date}>
                        <p>{props.date}</p>
                    </div>
                    <div className={academiaStyles .header}>
                        <div className={academiaStyles .logo} id={props.logotype}>
                        </div>
                        <div className={academiaStyles .schoolName}>
                            <div className={inter.className}>
                                {props.children}
                            </div>
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

