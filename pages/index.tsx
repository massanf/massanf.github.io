import Head from 'next/head'
import TitleSidebar from '../components/titlesidebar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import titleStyles from '@/styles/Title.module.css'
import bg from '../imgs/bg-masthead.webp'
import dark_bg from '../imgs/dark-bg-masthead.webp'

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
            </Head>
            <main className={titleStyles.main} style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
            }}>
                <div className={titleStyles.maincontainer}>
                    <div className={titleStyles.contentArea}>
                        <TitleSidebar title="index"/>
                        <div className={titleStyles.name}>
                            <div className={titleStyles.titleWrapper}>
                                <span>Welcome to the page of</span>
                                <h1 className={inter.className}>
                                    <b>Masa</b> Fujita
                                </h1>

                                <div className={titleStyles.iconsWrap}>
                                    <a href="https://www.linkedin.com/in/masayuki-fujita-1509a821b/" target="_blank" aria-label="linkedin"><FontAwesomeIcon icon={faLinkedin} className={titleStyles.linkedIn} id="linkedInIcon" /></a>
                                    <a href="https://www.github.com/trombiano1" target="_blank" aria-label="github"><FontAwesomeIcon icon={faGithub} className={titleStyles.github} /></a>
                                    <a href="https://www.youtube.com/channel/UC0ftq_FkXueNKpLYeKmfIaA" target="_blank" aria-label="youtube"><FontAwesomeIcon icon={faYoutube} className={titleStyles.youtube} /></a>
                                    <a href="https://www.twitter.com/sudocaffeine" target="_blank" aria-label="twitter"><FontAwesomeIcon icon={faTwitter} className={titleStyles.twitter} /></a>
                                    <a href="mailto:mfujitadev@gmail.com" aria-label="email"><FontAwesomeIcon icon={faEnvelope} className={titleStyles.email} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
