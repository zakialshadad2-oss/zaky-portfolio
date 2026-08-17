import "react";
import styles from "../assets/css/Projects.module.css";

function Projects() {
    return (
        <>
            <section className={styles["projects"]}>
                <div className={styles["projects-container"]}>
                    <div className={styles["projects-container-menu"]}>
                        <a href="/" className={styles["projects-button"]}>Home</a>
                        <a href="/About" className={styles["projects-button"]}>About Me</a>
                    </div>
                </div>
                <div className={styles["projects-card"]}>
                    <h3 className={styles["projects-card-title"]}>Personal Portofolio</h3>
                    <img src={null} alt="thumbnail" className={styles["projects-card-thumbnail"]} />
                    <p className={styles["projects-card-description"]}>Deskripsi: Simple portfolio berbasis website dengan menggunakan bahasa React.</p>
                    <p className={styles["projects-card-tech"]}>Tech Stack: React.JS, JavaScript, Vanilla CSS, HTML5</p>
                    <a href="www.example.com" className={styles["projects-card-live"]}>Live</a>
                    <a href="www.example.com" className={styles["projects-card-github"]}>Github</a>
                </div>
                <div className={styles["projects-card"]}>
                    <h3 className={styles["projects-card-title"]}>Personal Portofolio</h3>
                    <img src={null} alt="thumbnail" className={styles["projects-card-thumbnail"]} />
                    <p className={styles["projects-card-description"]}>Deskripsi: Simple portfolio berbasis website dengan menggunakan bahasa React.</p>
                    <p className={styles["projects-card-tech"]}>Tech Stack: React.JS, JavaScript, Vanilla CSS, HTML5</p>
                    <a href="www.example.com" className={styles["projects-card-live"]}>Live</a>
                    <a href="www.example.com" className={styles["projects-card-github"]}>Github</a>
                </div>
                <div className={styles["projects-card"]}>
                    <h3 className={styles["projects-card-title"]}>Personal Portofolio</h3>
                    <img src={null} alt="thumbnail" className={styles["projects-card-thumbnail"]} />
                    <p className={styles["projects-card-description"]}>Deskripsi: Simple portfolio berbasis website dengan menggunakan bahasa React.</p>
                    <p className={styles["projects-card-tech"]}>Tech Stack: React.JS, JavaScript, Vanilla CSS, HTML5</p>
                    <a href="www.example.com" className={styles["projects-card-live"]}>Live</a>
                    <a href="www.example.com" className={styles["projects-card-github"]}>Github</a>
                </div>
                <div className={styles["projects-card"]}>
                    <h3 className={styles["projects-card-title"]}>Personal Portofolio</h3>
                    <img src={null} alt="thumbnail" className={styles["projects-card-thumbnail"]} />
                    <p className={styles["projects-card-description"]}>Deskripsi: Simple portfolio berbasis website dengan menggunakan bahasa React.</p>
                    <p className={styles["projects-card-tech"]}>Tech Stack: React.JS, JavaScript, Vanilla CSS, HTML5</p>
                    <a href="www.example.com" className={styles["projects-card-live"]}>Live</a>
                    <a href="www.example.com" className={styles["projects-card-github"]}>Github</a>
                </div>
                <a href="#learning" className={styles["projects-button"]}>↓</a>
            </section>

            <section className={styles["learning"]} id="learning">
                <h3>Learning Log</h3>
                <div className={styles["learning-container"]}>
                    <div className={styles["inProgress"]}>
                        <h4>In Progress</h4>
                        <ul className={styles["learning-inProgress"]}>
                            <li>Belajar React.JS</li>
                            <p>Sumber: Dokumentasi resmi React, AI, & YouTube</p>
                            <p>Output: Membuat portofolio dengan React.JS</p>
                            <li>Vanilla CSS</li>
                            <p>Sumber: Dokumentasi CSS, AI, & YouTube</p>
                            <p>Output: Membuat layout sederhana</p>
                        </ul>
                    </div>
                    <div className={styles["completed"]}>
                        <h4>Completed</h4>
                        <ul className={styles["learning-completed"]}>
                            <li>Dasar HTML5</li>
                            <li>Dasar Vanilla JavaScript</li>
                        </ul>
                    </div>
                    <div className={styles["sertificate"]}>
                        <h4>Sertifikat</h4>
                        <p className={styles["learning-sertificate"]}>None</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;