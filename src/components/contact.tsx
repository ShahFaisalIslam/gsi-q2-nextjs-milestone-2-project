"use client";
import styles from "./contact.module.css"
export default function Contact() {
    return (
        <>
            <form className={styles["contact-container"]} onSubmit={() => { alert("Thank you for contacting!"); return false; }}>
                <div className={styles["contact-form"]}>
                    <div className={styles["contact-form-element"]}>
                        <label htmlFor="name">Name</label>
                        <input required type="text" id="name" placeholder="Your Name" />
                    </div>

                    <div className={styles["contact-form-element"]}>
                        <label htmlFor="email">Email</label>
                        <input required type="email" id="email" placeholder="Your Email" />
                    </div>

                    <div className={styles["contact-form-element"]}>
                        <label htmlFor="message">Message (Optional)</label>
                        <textarea cols={50} rows={4} id="message" placeholder="Your Message"></textarea>
                    </div>
                </div>
                <input className={styles["contact-form-submit"]} type="submit" />
            </form>
        </>
    );
}