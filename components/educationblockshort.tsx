import { Inter } from 'next/font/google'
import backgroundStyles from '@/styles/Background.module.css'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function ShortEducationBlock(props: { date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; country: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
    return (
        <>
            <div className={backgroundStyles.educationBlockWrap}>
                <div className={backgroundStyles.educationBlockShort}>
                    <div className={backgroundStyles.date}>
                        <p>{props.date}</p>
                    </div>
                    <div className={backgroundStyles.header}>
                        <div className={backgroundStyles.logo} id={backgroundStyles.transparent}>
                        </div>
                        <div className={backgroundStyles.schoolName}>
                            <p className={inter.className}>
                                {props.children}
                            </p>
                            <span className={backgroundStyles.countryName}>
                                {props.country}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

