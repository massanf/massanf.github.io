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
                    <OtherBlock delay={0.2} title={
                        <a href="https://github.com/massanf/todai-denkikei-titlepage" target="_blank">
                            EEIC Thesis LaTeX Template <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    }>
                        Unofficial LuaLaTeX template that matches example given by the department.
                    </OtherBlock>
                    <OtherBlock delay={0.2} title={
                        <a href="/guitar" target="_blank">
                            Guitar Utils<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    }>
                        Guitar utils, made in like 15 mins :P
                    </OtherBlock>

                </div>
            </div>
        </Template>
    )
}