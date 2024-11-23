import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
    return (
        <div className={styles["about-container"]}>
            <div className={styles["about-section"]}>
                <h2>Introduction</h2>
                <div className={styles["about-section-body"]}>
                    <p className={styles["introduction"]}>I am Shah Faisal, a Mechatronics Engineer learning Generative AI from <abbr title="Governer Sindh Initiative for Artificial Intelligence and Cloud Computing">GIAIC</abbr>.</p>
                    <Image src="/world.svg" alt="World" width={300} height={300} />
                </div>
            </div>
            <div className={styles["about-section"]}>
                <h2>Education</h2>
                <div className={styles["education-list"]}>
                    <div>
                        <h3 className={styles["about-subsection-heading"]}>Primary and Secondary Education</h3>
                        <div className={styles["about-section-body"]}>
                            <p>My primary and secondary education took place in KSA, culminating in Cambridge IGCSE and Cambridge GCE A Levels.</p>
                            <div className={styles["cambridge-container"]}>
                                <Image src="/cie.svg" alt="Cambridge" width={290} height={61} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles["about-subsection-heading"]}>Higher Education</h3>
                        <div className={styles["about-section-body"]}>
                            <p>I went on to study at <abbr title="National University of Sciences and Technology">NUST</abbr> in Pakistan, and obtained my Bachelors degree in Mechatronics Engineering.</p>
                            <div className={styles["nust-container"]}>
                                <Image src="/nust.png" width={200} height={180} alt="NUST" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles["about-subsection-heading"]}>Governor Sindh Initiative for Artificial Intelligence</h3>
                        <div className={styles["about-section-body"]}>
                            <div>
                                <p>I am currently undergoing a course offered by Governor Kamran Khan Tessori, with an extremely dynamic syllabus.</p>
                                <p>The roadmap of the course is currently as follows:</p>
                                <ol className={styles["course-outline"]}>
                                    <li>TypeScript</li>
                                    <li>Frontend with NextJS</li>
                                    <li>Backend with Python</li>
                                    <li>Generative AI</li>
                                </ol>
                            </div>
                            <div className={styles["giaic-container"]}>
                                <Image src="/giaic.webp" alt="GIAIC" width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["about-section"]}>
                <h2>Current Employment</h2>
                <div className={styles["about-section-body"]}>
                    <p>I am currently the head of research and development in <Link href="https://www.7gfuse.com">7GFuse</Link></p>
                    <Image src="/7gfuse.webp" width={300} height={205} alt="7GFuse" />
                </div>
            </div>
        </div>
    );
}