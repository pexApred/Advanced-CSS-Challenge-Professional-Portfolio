import React from "react";
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div class="icons">
            <i class="devicon-javascript-plain"></i>

            <i class="devicon-nodejs-plain"></i>

            <i class="devicon-mysql-plain-wordmark"></i>

            <i class="devicon-css3-plain"></i>

            <i class="devicon-html5-plain"></i>

            <i class="devicon-handlebars-plain-wordmark"></i>

            <i class="devicon-express-original"></i>

            <i class="devicon-eslint-original"></i>

            <i class="devicon-git-plain"></i>

            <i class="devicon-jest-plain"></i>

            <i class="devicon-npm-original-wordmark"></i>

            <i class="devicon-npm-original-wordmark"></i>

            <i class="devicon-react-original-wordmark"></i>

            <i class="devicon-sequelize-plain"></i>

            <i class="devicon-vscode-plain"></i>

            <i class="devicon-bulma-plain"></i>

            <i class="devicon-canva-original"></i>

        </div>

        <nav>
            <h1><span href="#page-top" class="name">Emmanuel Lakis </span></h1>

            <ul class="nav-group" role="navigation">
                <li><a href="#page-top" class="nav-link">Home</a></li>
                <li><a href="#life" class="nav-link">About</a></li>
                <li><a href="#work" class="nav-link">Work</a></li>
                <li><a href="#contact-me" class="nav-link">Contact</a></li>
                <li><a href="#resume" class="nav-link">Resume</a></li>
            </ul>

        </nav>
        </header>
    );
}

export default Header;