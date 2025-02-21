// import Image from 'next/image
import ExportedImage from "next-image-export-optimizer";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import workStyles from '@/styles/Work.module.css'
import Template from '../components/template'
import concerthall from '../imgs/works/concerthall.webp'
import lookout from '../imgs/works/lookout.webp'
import chromium from '../imgs/works/chromium.png'
import competitive from '../imgs/works/competitive.webp'
import qiita from '../imgs/logos/qiita.webp'
import WorkBlock from '../components/workblock'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faMedium } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
const inter = Inter({ subsets: ['latin'] })


export default function Works() {
    return (
        <Template pagename="works">
            <div className={styles.mainAreaTransparent}>
                <div>
                    <WorkBlock delay={0} img={chromium} title={
                        <a href="https://www.chromium.org/chromium-projects/" target="_blank">
                            Chromium<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    } color={"#ebebeb"} links={<></>}>
                    Contributed to the Chromium project, a large-scale open-source browser codebase, implementing features across UI and system components, optimizing performance, and ensuring compatibility with various platforms, while collaborating with engineers, conducting rigorous testing, and reviewing code to maintain stability and security.
                        </WorkBlock>


                    <WorkBlock delay={0} img={lookout} title={
                        <a href="https://pypi.org/project/lookout-python/" target="_blank">
                            Lookout Notifier<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    } color={"#186db6"} links={
                        <div>
                            <span className={workStyles.projectLinks}>
                                <a href="https://pypi.org/project/lookout-python/" target="_blank">pypi.org</a>
                            </span>
                            <span className={workStyles.projectLinks}>
                                <FontAwesomeIcon icon={faMedium} className={workStyles.brandIcon} /><a href="https://medium.com/p/aa449a45e1c1" target="_blank">
                                    Medium
                                </a>
                            </span>
                            <span className={workStyles.projectLinks}>
                                <div>
                                    <ExportedImage src={qiita} height={20} width={20} alt="qiita logo" />
                                </div>
                                <a href="https://qiita.com/trombiano1/items/f54f67dd90e7ec8e3709" target="_blank">Qiita</a>
                            </span>
                            <span className={workStyles.projectLinks}>
                                <FontAwesomeIcon icon={faGithub} className={workStyles.brandIcon} /><a href="https://github.com/massanf/lookout" target="_blank">
                                    GitHub
                                </a>
                            </span>
                        </div>
                    }>
                        Lookout is a simple yet powerful CLI app that sends a slack notification when your program completes successfully,
                        or terminates with an error. You can also use regex to customize. Available for download via <span className={workStyles.mono}>pip</span>.
                    </WorkBlock>

                    <WorkBlock delay={0.1} img={concerthall} title={
                        <a href="https://www.concerthall.info" target="_blank">
                            concerthall.info<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    } color={"#ea2200"} links={
                        <div>
                            <span className={workStyles.projectLinks}>
                                concerthall.info
                                <FontAwesomeIcon icon={faTwitter} className={workStyles.brandIcon} /><a href="https://www.twitter.com/concerthallinfo" target="_blank">
                                    twitter
                                </a>
                                <FontAwesomeIcon icon={faGithub} className={workStyles.brandIcon} /><a href="https://github.com/massanf/applemusicconcerthall" target="_blank">
                                    GitHub
                                </a>
                            </span>
                        </div>
                    }>
                        <span className={workStyles.mono}>concerthall.info</span> <i>was</i> a small project I created to make it easier to find numerous classical music performances using Apple Music API and open-source API project Open Opus with Node.js, Express, SQL and Bootstrap 5. Some of my friends used to use it until the much better Apple Music Classical came out.
                    </WorkBlock>

                    <WorkBlock delay={0.1} img={competitive} title={
                        <a href="https://marketplace.visualstudio.com/items?itemName=trombiano1.vscode-compcalc" target="_blank">
                            Competitive Calculator<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} />
                        </a>
                    } color={"#ffffff"} links={
                        <div>
                            <span className={workStyles.projectLinks}>
                                <FontAwesomeIcon icon={faMicrosoft} className={workStyles.brandIcon} /><a href="https://marketplace.visualstudio.com/items?itemName=trombiano1.vscode-compcalc" target="_blank">
                                    Marketplace
                                </a>
                            </span>
                            <span className={workStyles.projectLinks}>
                                <div>
                                    <ExportedImage src={qiita} height={20} width={20} alt="qiita logo" />
                                </div>
                                <a href="https://qiita.com/trombiano1/items/aacee3c576e0fd19d417" target="_blank">Qiita</a>
                            </span>
                            <span className={workStyles.projectLinks}>
                                <FontAwesomeIcon icon={faGithub} className={workStyles.brandIcon} /><a href="https://github.com/massanf/vscode-compcalc" target="_blank">
                                    GitHub
                                </a>
                            </span>
                        </div>
                    }>
                        This is a Visual Studio Code Exntension of a small calculator designed for estimating the computational complexity of a problem during programming competitions. It parses mathematical equations using <a href="https://en.wikipedia.org/wiki/Shunting_yard_algorithm" target="_blank">Shunting yard algorithm<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.externalLinkIcon} /></a>.
                    </WorkBlock>
                </div>
            </div>
        </Template>
    )
}