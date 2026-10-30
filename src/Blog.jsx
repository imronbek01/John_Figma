import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css';
import FaceBook from './assets/fb.png'
import Instagram from './assets/insta.png'
import Twitter from './assets/Group.png'
import Linkedin from './assets/Linkedin.png'

function Blog() {
    return (
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/works">Works</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <section>
                    <div className="h1">
                        <h1>Blog</h1>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h1>UI Interactions of the week</h1>
                            <div className="soz">
                                <h2>12 Feb 2019</h2>
                                <span> | </span>
                                <h3>Express, Handlebars</h3>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className="card">
                            <h1>UI Interactions of the week</h1>
                            <div className="soz">
                                <h2>12 Feb 2019</h2>
                                <span> | </span>
                                <h3>Express, Handlebars</h3>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className="card">
                            <h1>UI Interactions of the week</h1>
                            <div className="soz">
                                <h2>12 Feb 2019</h2>
                                <span> | </span>
                                <h3>Express, Handlebars</h3>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className="card" id='card'>
                            <h1>UI Interactions of the week</h1>
                            <div className="soz">
                                <h2>12 Feb 2019</h2>
                                <span> | </span>
                                <h3>Express, Handlebars</h3>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
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
            </header>
        </div>
    )
}

export default Blog
