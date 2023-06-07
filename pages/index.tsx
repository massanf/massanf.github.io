import Head from 'next/head'
import TitleSidebar from '../components/titlesidebar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import titleStyles from '@/styles/Title.module.css'
import bg from '../imgs/bg-masthead.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <>
            <Head>
                <title>Masayuki Fujita</title>
                <meta name="theme-color" content="#280000" />
                <meta name="description" content="Introductory page of me." />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={titleStyles.main} style={{
                backgroundImage: `url(${bg.src})`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
            }}>
                <div className={titleStyles.maincontainer}>
                    <div className={titleStyles.contentArea}>
                        <TitleSidebar />
                        <div className={titleStyles.name}>
                            <div className={titleStyles.titleWrapper}>
                                <span>Welcome to the page of</span>
                                <h1 className={inter.className}>
                                    Masayuki Fujita
                                </h1>
                                <div className={titleStyles.iconsWrap}>
                                    <a href="https://www.linkedin.com/in/masayuki-fujita-1509a821b/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{ color: "00A0DC" }} className={titleStyles.icons} /></a>
                                    <a href="https://www.github.com/trombiano1" target="_blank"><FontAwesomeIcon icon={faGithub} style={{ color: "#aaa" }} className={titleStyles.icons} /></a>
                                    <a href="https://www.youtube.com/channel/UC0ftq_FkXueNKpLYeKmfIaA" target="_blank"><FontAwesomeIcon icon={faYoutube} style={{ color: "#FF0000" }} className={titleStyles.icons} /></a>
                                    <a href="https://www.twitter.com/sudocaffeine" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} className={titleStyles.icons} /></a>
                                    <a href="mailto:mfujitadev@gmail.com" style={{ color: "#bbb" }}><FontAwesomeIcon icon={faEnvelope} className={titleStyles.icons} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
