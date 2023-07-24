import React from 'react'
import '../CSS/content.css'
import '../CSS/services.css'
import myPic from '../Images/me.png'
import star2 from '../Images/star-2.png'
import icon2 from '../Images/icon2.png'
import icon from '../Images/icon.svg'
import Sign from "../Images/sign.png";
import gfonts from '../Images/gfonts.png'
import {BsDribbble } from 'react-icons/bs' 
import { FiTwitter } from 'react-icons/fi'



function About() {
    return (
        <section className="about-area">
            <div className="container">
                <div className="d-flex about-me-wrap align-items-start gap-24">
                    <div data-aos="zoom-in" className="aos-init aos-animate">
                        <div className="about-image-box shadow-box">
                            {/* <img src={myPic} alt="BG" className="bg-img" /> */}
                            <div className="image-inner">
                                <img src={myPic} alt="About Me" />
                            </div>
                        </div>
                    </div>
                    <div className="about-details aos-init aos-animate" data-aos="zoom-in">
                        <h1 className="section-heading aos-init aos-animate" data-aos="fade-up" >
                            <img src={star2} alt="Star" />
                            Self-summary
                            <img src={star2} alt="Star" />
                        </h1><div className="about-details-inner shadow-box">
                            <img src={icon2} alt="Star" />
                            <h1>David Henderson</h1>
                            <p>I am a San francisco-based product designer with a focus on web design,
                                illustration, a visual development.
                                I have a diverse range of experience having worked across various fields and industries.</p>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: '24px' }}>
                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
                        <div className="about-edc-exp about-experience shadow-box">
                            {/* <img src={star1} alt="BG" className="bg-img" /> */}
                            <h3>EXPERIENCE</h3>
                            <ul>
                                <li>
                                    <p className="date">2007 - 2017</p>
                                    <h2>Framer Designer  Developer</h2>
                                    <p className="type">Bluebase Designs</p>
                                </li><li><p className="date">2017 - 2023</p>
                                    <h2>Front-End Developer</h2>
                                    <p className="type">Larsen  Toubro</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
                        <div className="about-edc-exp about-education shadow-box">
                            {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                            <h3>EDUCATION</h3>
                            <ul>
                                <li>
                                    <p className="date">2004 - 2007</p>
                                    <h2>Bachelor Degree in Psychology</h2>
                                    <p className="type">University of California</p>
                                </li>
                                <li>
                                    <p className="date">2007 - 2009</p>
                                    <h2>Master Degree in Designing</h2>
                                    <p className="type">University of Texas</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "24px" }}>
                    <div
                        className="col-md-12"
                    >
                        <div className='d-flex profile-contact-credentials-wrap gap-24'>

                            <div
                                data-aos="zoom-in"
                                className="aos-init"
                                style={{ margin: "unset" }}
                            >
                                <div className="about-profile-box info-box shadow-box h-full">
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}

                                    <div className="inner-profile-icons">
                                        <a href="">
                                            <BsDribbble style={{ fontSize: "2.5rem" }} />
                                        </a>
                                        <a href="">
                                            <FiTwitter style={{ fontSize: "2.5rem" }} />
                                        </a>
                                    </div>
                                    <div
                                        className="d-flex align-items-center justify-content-between"
                                        style={{ margin: "unset" }}
                                    >
                                        <div className="infos" style={{ margin: "unset" }}>
                                            <h4>Stay with me</h4>
                                            <h1>Profiles</h1>
                                        </div>
                                        <a
                                            className="about-btn"
                                            href=""
                                            style={{ margin: "unset" }}
                                        >
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="hello flex-1 aos-init aos-animate">
                                <div className="about-contact-box info-box shadow-box" >
                                    <a className="overlay-link" href=""></a>
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img"> */}
                                    <img src={icon2} alt="Icon" className="star-icon" />
                                    <h1>Let's <br />work <span>together.</span></h1>
                                    <a className="about-btn" href=""><img src={icon} alt="Button" /></a>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="h-full aos-init aos-animate">
                                <div className="about-crenditials-box info-box shadow-box">
                                    <a className="overlay-link" href=""></a>
                                    <img src={Sign} alt="Sign" />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="infos">
                                            <h4>more about me</h4>
                                            <h1>Credentials</h1>
                                        </div>
                                        <a className="about-btn" href=""><img src={icon} alt="Button" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section >

    )
}

export default About