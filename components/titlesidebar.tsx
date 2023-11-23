import Link from 'next/link'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import titleSidebarStyle from '../styles/TitleSidebar.module.css'
import styles from '@/styles/Home.module.css'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import { useTheme } from "@/lib/theme";


const inter = Inter({ subsets: ['latin'] })


export default function Sidebar(props: { title: string }) {
    const { theme, toggleTheme } = useTheme();
    return (
        // <SidebarContent sidebarStyle={titleSidebarStyle} />
        <div className={styles.contentArea}>
            <div className={titleSidebarStyle.sidebar}>
                {/* <Link href="/">- Home</Link> */}
                <Link href="/">+ Home </Link>
                <Link href="/hello">- Hello</Link>
                <Link href="/academia">- Academia</Link>
                <Link href="/carrer">- Carrer</Link>
                <Link href="/works">- Open-source Works</Link>
                <Link href="/qualifications">- Qualifications</Link>
                <Link href="/other">- Other</Link>
                <button onClick={ toggleTheme } className={styles.darkModeButtonWrap}>
                </button>
            </div>
        </div>
    )
}

