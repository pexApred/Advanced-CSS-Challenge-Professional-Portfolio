import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
    return (
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
    );
}

export default Navigation;