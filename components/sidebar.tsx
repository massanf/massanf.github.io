import Link from 'next/link'
import { Inter } from 'next/font/google'
import sidebarStyle from '../styles/Sidebar.module.css'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })


export default function Sidebar( props : { title : string }) {
    return (
        // <SidebarContent sidebarStyle={sidebarStyle} />
        <div className={styles.contentArea}>
            <div className={sidebarStyle.sidebar}>
                <Link href="/">{props.title == "home" ? "+" : "-"} Home</Link>
                <Link href="/hello">{props.title == "hello" ? "+" : "-"} Hello</Link>
                <Link href="/works">{props.title == "works" ? "+" : "-"} Open-source Works</Link>
                <Link href="/academia">{props.title == "academia" ? "+" : "-"}  Academia</Link>
                <Link href="/carrer">{props.title == "carrer" ? "+" : "-"} Carrer</Link>
                <Link href="/qualifications">{props.title == "qualifications" ? "+" : "-"} Qualifications</Link>
                <Link href="/other">{props.title == "other" ? "+" : "-"} Other</Link>
            </div>
        </div>
    )
}
