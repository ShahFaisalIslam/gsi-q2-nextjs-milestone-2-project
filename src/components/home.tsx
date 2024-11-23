import Link from "next/link";
import styles from "./home.module.css"
export default function HomeComponent () {
    return (
        <div className={styles["hc-container"]}>
            <h2 className={styles["project-list-title"]}>My Projects</h2>
            <div className={styles["project-list"]}>
                <div className={styles["project-body"]}>
                    <h3 className={styles["project-title"]}>Interactive Resume Builder</h3>
                    <p>Enter your details, and generate your resume on the fly!</p>
                    <Link href="https://interactive-resume-builder-mu.vercel.app/">&gt; Go to Interactive Resume Builder</Link>
                </div>
                <div className={styles["project-body"]}>
                    <h3 className={styles["project-title"]}>Everyday Life Blog</h3>
                    <p>Check out AI-generated articles on different aspects of everyday life!</p>
                    <Link href="https://giaicquarter2assignment4and5.vercel.app/">&gt; Go to Everyday Life</Link>
                </div>
            </div>
        </div>
    );
}