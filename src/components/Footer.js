import React from "react";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>

            <ul className="ftul">
                <h1>Contact Me</h1>
                <div> | </div>
                <li><a href="tel:843.439.0946"><i className="fa-solid fa-phone"></i> 843.439.0946</a></li>
                <li><a href="mailto:manolilakis@gmail.com"><i className="fa-regular fa-paper-plane"></i>
                    manolilakis@gmail.com</a></li>
                <li><a href="https://github.com/pexApred"><i className="fa-brands fa-github"></i> GitHub</a></li>
                <li><a href="https://open.spotify.com/user/1245989088?si=da5fcd47e1554a6e"><i
                    className="fa-brands fa-spotify"></i> Spotify</a></li>
                <li><a href="https://linkedin.com/in/emmanuellakis"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
            </ul>
        </footer>
    );
}

export default Footer;