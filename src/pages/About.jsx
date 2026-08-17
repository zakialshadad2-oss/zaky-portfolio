import React from "react";
import { Link } from "react-router-dom";
import aboutFoto1 from "../assets/images/foto2.png"
import style from "../assets/css/About.module.css";

function About() {
  const [language, setLanguage] = React.useState(true);
  return(
    <div className={style["about-container"]}>
      <div className={style["about-container-menu"]}>
        <Link to={"/"} className={style["about-button"]}>Home</Link>
        <Link to={"/projects"} className={style["about-button"]}>Projects</Link>
      </div>
      <div className={style["about-foto"]}>
        <img src={aboutFoto1} alt="foto saya about" />
      </div>
      <div className={style["languange"]}>
        <button onClick={() => setLanguage(!language)} className={style["language-button"]}>
          <p>{language ? "English" : "Indonesia"}</p>
        </button>
      </div>
      <div className={style["about-text"]}>
        <h1>About Me</h1>
        <p>{language ? "Hello, my name is Zaki. I am a junior web developer who is passionate about creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React. I am always eager to learn new technologies and improve my skills." : "Halo, nama saya Zaki. Saya adalah seorang pengembang web yang memiliki minat dalam menciptakan situs web yang indah dan fungsional. Saya memiliki pengalaman dalam HTML, CSS, JavaScript, dan React. Saya selalu bersemangat untuk mempelajari teknologi baru dan meningkatkan keterampilan saya."}</p>
      </div>
      <p className={style["contact-text"]}>Contact Me:</p>
      <div className={style["contact"]}>
        <a href="mailto:zakialshadad11@gmail.com" className={style["contact-button"]}>zakialshadad11@gmail.com</a>
        <a href="https://wa.me/62881012114043?text=Hallo, saya ingin menggunakan jasa anda" className={style["contact-button"]}>+62 881-0121-14043</a>
      </div>
    </div>
  );
}

export default About; 