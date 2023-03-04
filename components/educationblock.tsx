import { Inter } from 'next/font/google'
import backgroundStyles from '@/styles/Background.module.css'
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function EducationBlock(props: { date: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; logotype: string | undefined; children: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; country: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined }) {
    return (
        <>
            <div className={backgroundStyles.educationBlockWrap}>
                <div className={backgroundStyles.educationBlock}>
                    <div className={backgroundStyles.date}>
                        <p>{props.date}</p>
                    </div>
                    <div className={backgroundStyles.header}>
                        <div className={backgroundStyles.logo} id={props.logotype}>
                        </div>
                        <div className={backgroundStyles.schoolName}>
                            <div className={inter.className}>
                                {props.children}
                            </div>
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

