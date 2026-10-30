import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import myImage from './assets/Ellipse 1.png'
import myImageone from './assets/Rectangle 30.png'
import myImagetwo from './assets/Rectangle 32.png'
import myImagethree from './assets/Rectangle 34.png'
import FaceBook from './assets/fb.png'
import Instagram from './assets/insta.png'
import Twitter from './assets/Group.png'
import Linkedin from './assets/Linkedin.png'

function Home() {
    return (
        <div className="container">
            <div className="bir">
                <nav>
                    <ul>
                        <li><Link id='links' to="/works">Works</Link></li>
                        <li><Link id='links' to="/blog">Blog</Link></li>
                        <li><Link id='links' to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <section>
                    <div className="cards">
                        <div className="card-one">
                            <h1>Hi, I am John, <br />Creative Technologist</h1>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <button>Download Resume</button>
                        </div>
                        <div className="card-two">
                            <img src={myImage} alt="" />
                        </div>
                    </div>
                </section>
            </div>
            <main>
                <div className="soz">
                    <h1>Recent posts</h1>
                    <span>View all</span>
                </div>
                <div className="cards">
                    <div className="card-one">
                        <h1>Making a design system from scratch</h1>
                        <h2>12 Feb 2020  |  Design, Pattern</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="card-one">
                        <h1>Creating pixel perfect icons in Figma</h1>
                        <h2>12 Feb 2020    |    Figma, Icon Design</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </main>
            <div className="oz">
                <section>
                    <div className="h1">
                        <h1>Featured works</h1>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="img">
                                <img src={myImageone} alt="" />
                            </div>
                            <div className="soz">
                                <h1>Designing Dashboards</h1>
                                <div className="one">
                                    <h2>2020</h2>
                                    <h3>Dashboard</h3>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src={myImagetwo} alt="" />
                            </div>
                            <div className="soz">
                                <h1>Vibrant Portraits of 2020</h1>
                                <div className="one">
                                    <h2>2018</h2>
                                    <h3>Illustration</h3>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src={myImagethree} alt="" />
                            </div>
                            <div className="soz">
                                <h1>36 Days of Malayalam type</h1>
                                <div className="one">
                                    <h2>2018</h2>
                                    <h3>Typography</h3>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ohir">
                    <div className="icons">
                        <img src={FaceBook} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                    <h1>Copyright ©2020 All rights reserved </h1>
                </div>
            </div>
        </div>)
}

export default Home