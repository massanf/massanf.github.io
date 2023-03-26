import Link from 'next/link'
import { Inter } from 'next/font/google'
import sidebarStyle from '../styles/Sidebar.module.css'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })


export default function Sidebar() {
    return (
        // <SidebarContent sidebarStyle={sidebarStyle} />
        <div className={styles.contentArea}>
            <div className={sidebarStyle.sidebar}>
                <Link href="/">- Home</Link>
                <Link href="/hello">- Hello</Link>
                <Link href="/works">- Open-source Works</Link>
                <Link href="/education">- Education</Link>
                <Link href="/carrer">- Carrer</Link>
                <Link href="/qualifications">- Qualifications</Link>
            </div>
        </div>
    )
}
