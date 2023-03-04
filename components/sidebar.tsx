import Link from 'next/link'
import { Inter } from 'next/font/google'
// import SidebarContent from '../components/sidebarcontent'
import sidebarStyle from '../styles/Sidebar.module.css'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })


export default function Sidebar() {
    return (
        // <SidebarContent sidebarStyle={sidebarStyle} />
        <div className={styles.contentArea}>
            <div className={sidebarStyle.sidebar}>
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
