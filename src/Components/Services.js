import React from 'react'
import "../CSS/services.css";
import icon from "../Images/icon.svg";
import star2 from "../Images/star-2.png";
import Sign from "../Images/sign.png";
import icon2 from "../Images/icon2.png";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

import { Icon } from '@iconify/react';


function Services() {
    const navigate = useNavigate();

    return (
        <section class="service-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="service-sidebar aos-init aos-animate" data-aos="fade-right">
                            <div class="service-sidebar-inner shadow-box">
                                <ul>

                                    <li><i class="iconoir-design-pencil icon"><Icon icon="iconoir:camera" /></i>PHOTOGRAPHY</li>
                                    <li><i class="iconoir-design-pencil icon"><Icon icon="ph:pencil-circle" /></i>WEB DESIGNING</li>
                                    <li><i class="iconoir-color-filter icon" style={{ margin: '3.73px' }}><Icon icon="ion:color-filter-outline" /></i>BRANDING</li>
                                    <li><i class="iconoir-dev-mode-phone icon"><Icon icon="iconoir:dev-mode-phone" /></i>DEVELOPMENT</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h1 class="section-heading aos-init aos-animate" data-aos="fade-up">
                            <img src={star2} alt="Star" /> My Offerings <img src={star2} alt="Star" />
                        </h1>
                        <div class="service-content-wrap aos-init aos-animate" data-aos="zoom-in">
                            <div class="service-content-inner shadow-box">
                                <div class="service-items">
                                    <div class="service-item">
                                        <h3>Development</h3>
                                        <p>
                                            In era of development, I thrive on crafting efficient software solutions that cater to real-world problems.
                                            I make web applications and databases that deliver seamless user experiences.
                                        </p>
                                    </div>
                                    <div class="service-item">
                                        <h3>Web Designing</h3>
                                        <p>
                                            Dedicated web designer focused on creating visually stunning websites with responsive design.
                                            Combining creativity and technical expertise to leave a lasting impression on your audience.
                                        </p>
                                    </div>
                                    <div class="service-item">
                                        <h3>Testing</h3>
                                        <p>
                                            Meticulous web application tester with expertise in bug identification and user interaction validation.
                                            Ensuring robust and reliable web applications through comprehensive testing methodologies.
                                        </p>
                                    </div>
                                    <div class="service-item">
                                        <h3>Deployment</h3>
                                        <p>
                                            Seamless deployment of MERN stack applications to diverse hosting platforms.
                                            Expertise in server configurations, database setup, and deployment optimizations.
                                        </p>
                                    </div>

                                </div>
                            </div>
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
                                        <a href="https://www.linkedin.com/in/zainulabideen131/">
                                            <AiOutlineLinkedin style={{ fontSize: "2.2rem" }} />
                                        </a>
                                        <a href="https://github.com/ZainUlAbideen-2000">
                                            <AiFillGithub style={{ fontSize: "2.2rem" }} />
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
                                            href="/contact"
                                            style={{ margin: "unset" }}
                                        >
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" class="hello flex-1 aos-init aos-animate">
                                <div class="about-contact-box info-box shadow-box"
                                    onClick={() => { navigate('/contact') }}
                                    style={{ cursor: 'pointer' }}>
                                    <img src={icon2} alt="Icon" class="star-icon" />
                                    <h1>Let's <br />work <span>together.</span></h1>
                                    <a class="about-btn" href="/contact"><img src={icon} alt="Button" /></a>
                                </div>
                            </div>
                            <div data-aos="zoom-in" class="h-full aos-init aos-animate">
                                <div class="about-crenditials-box info-box shadow-box"
                                onClick={() => { navigate('/credentials') }}
                                style={{ cursor: 'pointer' }}>
                                    <img src={Sign} alt="Sign" />
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="infos">
                                            <h4>more about me</h4>
                                            <h1>Credentials</h1>
                                        </div>
                                        <a class="about-btn" href="credentials"><img src={icon} alt="Button" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Services