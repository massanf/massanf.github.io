// import Image from 'next/image
import ExportedImage from "next-image-export-optimizer";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import otherStyles from '@/styles/Other.module.css'
import Template from '../components/template'
import concerthall from '../imgs/works/concerthall.png'
import lookout from '../imgs/works/lookout.png'
import competitive from '../imgs/works/competitive.png'
import qiita from '../imgs/logos/qiita.png'
import OtherBlock from '../components/otherblock'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faMedium } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <Template>
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