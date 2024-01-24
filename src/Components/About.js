import React from 'react'
import '../CSS/content.css'
import '../CSS/services.css'
import myPic from '../Images/test3.jpg'
import star2 from '../Images/star-2.png'
import icon2 from '../Images/icon2.png'
import icon from '../Images/icon.svg'
import Sign from "../Images/sign.png";
import gfonts from '../Images/gfonts.png'
import { BsDribbble } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


function About() {
    const navigate = useNavigate();
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
                            <h1>Zain Ul Abideen</h1>
                            <p>I'm an indie software developer and tech enthusiast. All coding projects are built from the ground up, from planning and designing to solving real-life problems with code.
                                Love to work on new technologies and am always eager to learn new ones. Interested in Development, Web, System Designs and Databases.<br /><br />
                                Each project I undertake is a unique opportunity to grow as a developer and to make a positive impact.
                                Whether it's creating intuitive user interfaces, optimizing database queries for better performance, or designing scalable and secure systems, I pour my heart and soul into every line of code.
                            </p>
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
                                    <p className="date">2022 - 2023</p>
                                    <div style={{ display: 'flex' }}>
                                        <h2 style={{ padding: 'unset', margin: 'unset' }}>Web Developer</h2>
                                        <h3 style={{ fontSize: '14px', marginRight: 'unset' }}>RIC, Islamabad</h3>
                                    </div>
                                    <p className="type">ReactJS, PHP, LARAVEL</p>
                                </li>
                                <li>
                                    <p className="date">2022 - 2023</p>
                                    <div style={{ display: 'flex' }}>
                                        <h2 style={{ padding: 'unset', margin: 'unset' }}>Front-End Developer</h2>
                                        <h3 style={{ fontSize: '14px', marginRight: 'unset' }} >Intern in SEECS</h3>
                                    </div>
                                    <p className="type">NEXTjs, TailWind CSS, ReactJS</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
                        <div className="about-edc-exp about-education shadow-box" style={{ padding: '41px' }}>
                            {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                            <h3>EDUCATION</h3>
                            <ul>
                                <li>
                                    <p className="date">2019 - 2023</p>
                                    <h2>Bachelor Degree in Computer Science(BSCS)</h2>
                                    <p className="type">National University of Science and Technologies, NUST</p>
                                </li>
                                <li>
                                    <p className="date">2017 - 2019</p>
                                    <h2>Intermediate</h2>
                                    <p className="type">Punjab Group of Colleges</p>
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
                                <div className="about-profile-box info-box shadow-box h-full" >
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
                                            style={{ margin: "unset", cursor: 'pointer' }}
                                            onClick={() => { navigate('/contact') }}
                                        >
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="hello flex-1 aos-init aos-animate">
                                <div className="about-contact-box info-box shadow-box" style={{ cursor: 'pointer' }} onClick={() => { navigate('/contact') }}>
                                    <a className="overlay-link" href=""></a>
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img"> */}
                                    <img src={icon2} alt="Icon" className="star-icon" />
                                    <h1>Let's <br />work <span>together.</span></h1>
                                    <a className="about-btn" href=""><img src={icon} alt="Button" /></a>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="h-full aos-init aos-animate">
                                <div className="about-crenditials-box info-box shadow-box"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => { navigate('/credentials') }}>
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