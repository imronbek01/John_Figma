import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import myImageone from './assets/Rectangle 4.png'
import myImagetwo from './assets/Rectangle 5.png'
import myImagethree from './assets/Rectangle 6.png'
import FaceBook from './assets/fb.png';
import Instagram from './assets/insta.png';
import Twitter from './assets/Group.png';
import Linkedin from './assets/Linkedin.png';

function Contact() {
    return (
        <div className="container">
            <div className="salom">
                <nav>
                    <ul>
                        <li><Link id='Link' to="/works">Works</Link></li>
                        <li><Link id='Link' to="/blog">Blog</Link></li>
                        <li><Link id='Link' to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <section>
                    <h1>Designing Dashboards with <br /> usability in mind</h1>
                    <div className="cards">
                        <h1>2020</h1>
                        <span>Dashboard, User Experience Design</span>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <img src={myImageone} alt="" />
                    <h3>Heading 1</h3>
                    <h4>Heading 2</h4>
                    <p id='p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <img id='img-one' src={myImagetwo} alt="" />
                    <img id='img-one' src={myImagethree} alt="" />
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
            </div>
        </div>
    )
}

export default Contact
