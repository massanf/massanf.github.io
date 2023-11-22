// import Image from 'next/image
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Template from '../components/template'
import OtherBlock from '../components/otherblock'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <Template pagename="other">
            <div className={styles.mainAreaTransparent}>
                <div>
                    <OtherBlock delay={0} title={
                        <a href="http://進捗.com/" target="_blank">
                            進捗.com<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    }>
                        For when you&apos;ve made absolutely no progress.
                    </OtherBlock>

                    <OtherBlock delay={0.2} title={
                        <a href="https://github.com/trombiano1/todai-denkikei-titlepage" target="_blank">
                            EEIC Thesis LaTeX Template <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    }>
                        Unofficial LuaLaTeX template that matches example given by the department.
                    </OtherBlock>
                </div>
            </div>
        </Template>
    )
}