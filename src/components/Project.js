import React from "react";
import '../styles/Project.css';

function Project() {
    return (
        <section className="work" id="work">
            <h2>My Work</h2>
            <div className="card-container">
                <div className="card">
                    <img src="assets/images/Screenshot 2023-05-09 at 9.04.11 PM.png" className="card-img-top"
                        alt="Literacy Lane Website link">
                    <div className="card-body">
                        <a href="https://pexapred.github.io/P1-G7-Literacy-Lane/index.html"
                            className="btn btn-warning card-text" type="submit" id="code">
                            <i className="fa-solid fa-book"></i> Literacy Lane: Interactive Front-End
                        </a>
                    </div>
                </div>
            </div>
            <div className="card-container1">
                <div className="card">
                    <img src="assets/images/Screenshot 2023-05-09 at 8.44.44 PM.png" className="card-img-top"
                        alt="Literacy Lane Website link">
                    <div className="card-body">
                        <a href="https://pacific-inlet-31648.herokuapp.com/" className="btn btn-warning card-text"
                            type="submit" id="code">
                            <i className="fa-solid fa-shirt"></i> codeThread: Interactive Full-Stack
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;