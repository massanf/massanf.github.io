import Link from 'next/link'
import Head from 'next/head'
import { Inter } from 'next/font/google'
// import SidebarContent from '../components/sidebarcontent'
import titleSidebarStyle from '../styles/TitleSidebar.module.css'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })


export default function Sidebar() {
    return (
        // <SidebarContent sidebarStyle={titleSidebarStyle} />
        <div className={styles.contentArea}>
            <div className={titleSidebarStyle.sidebar}>
                <Link href="/">- Home</Link>
                <Link href="/education">- Education</Link>
                <Link href="/experience">- Experience</Link>
                <Link href="/works">- Works</Link>
                <Link href="/">- Qualifications</Link>
                <Link href="/">- Fun</Link>
            </div>
        </div>
    )
}

