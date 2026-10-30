import React from 'react';
import { Link } from 'react-router-dom';
import './Work.css';
import myImageone from './assets/Rectangle 30.png';
import myImagetwo from './assets/Rectangle 32.png';
import myImagethree from './assets/Rectangle 34.png';
import myImagefour from './assets/Rectangle 40.png';
import FaceBook from './assets/fb.png';
import Instagram from './assets/insta.png';
import Twitter from './assets/Group.png';
import Linkedin from './assets/Linkedin.png';

function Work() {
    return (
        <div className="container">
                <nav>
                    <ul>
                        <li><Link id='link' to="/works">Works</Link></li>
                        <li><Link id='link' to="/blog">Blog</Link></li>
                        <li><Link id='link' to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            <footer>
                <section className="featured-works">
                    <div className="h1">
                        <h1>Work</h1>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="img">
                                <img src={myImageone} alt="Designing Dashboards" />
                            </div>
                            <div className="soz">
                                <h1>Designing Dashboards</h1>
                                <div className="one">
                                    <h2>2020</h2>
                                    <h3>Dashboard</h3>
                                </div>
                                <p>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
                                    consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src={myImagetwo} alt="Vibrant Portraits" />
                            </div>
                            <div className="soz">
                                <h1>Vibrant Portraits of 2020</h1>
                                <div className="one">
                                    <h2>2018</h2>
                                    <h3>Illustration</h3>
                                </div>
                                <p>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
                                    consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src={myImagethree} alt="Malayalam type" />
                            </div>
                            <div className="soz">
                                <h1>36 Days of Malayalam type</h1>
                                <div className="one">
                                    <h2>2018</h2>
                                    <h3>Typography</h3>
                                </div>
                                <p>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
                                    consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src={myImagefour} alt="Malayalam type" />
                            </div>
                            <div className="soz">
                                <h1>Components</h1>
                                <div className="one">
                                    <h2>2018</h2>
                                    <h3>Components, Design</h3>
                                </div>
                                <p>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
                                    consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="ohir">
                    <div className="icons">
                        <img src={FaceBook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Linkedin} alt="Linkedin" />
                    </div>
                    <h1>Copyright ©2020 All rights reserved</h1>
                </div>
            </footer>
        </div>
    );
}

export default Work;