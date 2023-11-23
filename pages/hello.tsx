import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Template from '../components/template'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <Template pagename="hello">
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: 1,
                    y: 50
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        ease: "easeOut",
                        duration: 0.2
                    },
                    y: 0
                }
            }} className={styles.mainArea}>
                <h1 className={styles.heading}>
                    <p className={inter.className}>👋 Hello!</p>
                </h1>

                <p className={styles.homep}>
                    Thank you for visiting my website! I&apos;m Masayuki Fujita. Here, I will write a little bit about myself, accompanied by some of my favorite music. This page won&apos;t contain much practical information; instead, it&apos;s more about who I am as a person, mainly about my passion for engineering and music.
                </p>

                <hr></hr>

                <p className={styles.homep}>
                    Ever since I can remember I&apos;ve always loved making things. In kindergarten, my parents would collect stuff like old cardbord boxes, toiletpaper cores or milk cartons for me to repurpose into imaginative objects like train models.
                </p>

                <hr></hr>

                <p className={styles.homep}>
                    Even as I grew older, my passion for creation continued. At age ten, I won an award by Japan Institute of Invention and Innovation for creating automatic page-turner for piano. Around this time is also when I stumbled upon <a href="https://www.amazon.co.jp/パソコンを遊ぶ簡単プログラミング―コンピュータを自由に操る「十進BASIC」入門-CD-ROM付-ブルーバックス-木村-良夫/dp/4062573989" target="_blank">this<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a> 2003 book about programming and mathematics collecting dust in my father&apos;s bookshelf. I vividly remember flipping through the book and copying the BASIC code, being electrified to realize all the possiblilities of this new tool called programming that I had just came into contact with.
                </p>
                
                <hr></hr>

                <div className={styles.youtube}>
                    <div className={styles.youtubeTitle}>
                        <p>Debussy:  Suite bergamasque<br />IV. Passepied</p>
                    </div>
                    <iframe width="150" height="150" src="https://www.youtube.com/embed/O0GuQ1CNFa8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <hr></hr>

                <p className={styles.homep}>
                    Another important element of my life is my love for music. Learning to play the piano alongside the trombone, I was exposed to orchestral and chamber pieces as well as piano pieces from a very young age. The experience of listening to and performing classical music has since become essential to my life. I was fortunate enough to have  the experience of holding leadership roles within my orchestra, guiding them musically.
                </p>

                <hr></hr>
                
                <p className={styles.homep}>
                    Whether it&apos;s music or software or cardboard projects, I&apos;ve come to realize that the common thread  - <i>I really enjoy making nice things</i>. Whether that something is music or code. Making music is not that different from software engineering. You make something, improve it to the best of your abilities, make it as nice as possible, and make people&apos;s day a little bit better along the way. So I am so incredibly excited to see what I can bring into existence.
                </p>
                
                <hr></hr>
                
                <div className={styles.youtube}>
                    <div className={styles.youtubeTitle}>
                        <p>Tchaikovsky: Symphony No. 6<br />I. Adagio</p>
                    </div>
                    <iframe width="150" height="150" src="https://www.youtube.com/embed/mi_6jis8x8g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <hr></hr>

                <p className={styles.homep}>
                    So that&apos;s it! Thank you so much for reading till the end. I&apos;m excited to see what I can learn. If you are interested in my music taste, I have written a <a href="https://note.com/trombiano1/n/n9820bb11f739" target="_blank">small article about BGM for programming<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a> (in Japanese).
                </p>

            </motion.div>
        </Template>
    )
}
