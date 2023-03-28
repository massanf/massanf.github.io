import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Template from '../components/template'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <Template>
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
                    My name is Masayuki Fujita. Thank you for taking your time to visit my webpage. On this particular page, I&apos;m going to write a little bit about myself, along with some of my favorite music pieces. This page won&apos;t have much practical information; instead this page is more about who I am as a person, mainly about my passion for engineering and music. So feel free to skip it if you are in a hurry.
                </p>

                <hr></hr>

                <p className={styles.homep}>
                    Ever since I can remember, I have always loved making things. In kindergarten, my parents would keep old cardbord boxes, toiletpaper cores, milk cartons for me to repurpose into imaginative objects like bookshelves and my &ldquo;automatic sushi deployer&rdquo; (which, admittedly, was neither automatic nor a &ldquo;sushi deployer&rdquo;).
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
                    My passion for creation continued. At age ten, I won an award by Japan Institute of Invention and Innovation for creating automatic page-turner for piano. Around this time is also when I discovered a <a href="https://www.amazon.co.jp/パソコンを遊ぶ簡単プログラミング―コンピュータを自由に操る「十進BASIC」入門-CD-ROM付-ブルーバックス-木村-良夫/dp/4062573989" target="_blank">2003 book about programming and mathematics<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a> in my family&apos;s bookshelf. It was bought by my father, who, to this day still has not read it despite my continued endorsement. I vividly remember flipping through the book and typing in the BASIC code printed in the book, being electrified to realize all the possiblilities of this new tool called programming that I had just came into contact with.
                </p>

                <hr></hr>

                <p className={styles.homep}>
                    As I grew older, my fascination with music deepened as well. Learning the trombone alongside piano, I was exposed to more orchestral and chamber pieces as well. The experience of listening to and performing classical music is something I wouldn&apos;t trade for anything. I was fortunate enough to hold leadership roles within my orchestra, guiding them musically.
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
                    Whether it&apos;s music or software or cardboard projects, the common thread that transpires throughout all my life experiences is that I really enjoy making something nice. I&apos;ve come to realize that making music is not that different from engineering. You make something, improve it to the best of your abilities, make it as nice as possible, and make people&apos;s day a little bit better along the way. That&apos;s what I want to do with my life. I am so incredibly excited to see what I can bring into existence.
                </p>
                <hr></hr>

                <p className={styles.homep}>
                    Thank you so much for reading till the end. If you are interested in my music taste, I have also written a <a href="https://note.com/trombiano1/n/n9820bb11f739" target="_blank">small article about BGM for programming<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a> (in Japanese).
                </p>

            </motion.div>
        </Template>
    )
}
