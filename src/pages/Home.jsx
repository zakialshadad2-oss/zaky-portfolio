import "react";
import { Link } from "react-router-dom";
import style from "../assets/css/Home.module.css";
import homeFoto1 from "../assets/images/foto2.png"

function Home() {
    return(
        <>
            <div className={style["home-container"]}>
                <div className={style["home-text"]}>
                    <h2>Hi, My name is Zaki Al Shadad</h2>
                    <p>I'am a junior web developer</p>
                </div>
                <div className={style["home-container-menu"]}>
                    <Link to={"/about"} className={style["home-button"]}>About Me</Link>
                    <Link to={"/projects"} className={style["home-button"]}>Projects</Link>
                </div>
                <div className={style["home-foto"]}>
                    <img src={homeFoto1} alt="foto saya home" />
                </div>
            </div>
        </>
    )
}

export default Home;