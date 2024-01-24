import React from 'react'
import '../CSS/credentials.css'
import myPic from "../Images/test.jpg";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import { BsFileCode, BsDribbble } from "react-icons/bs";
import { IoIosColorFilter } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";

function Credentials() {
    return (
        <section className="credential-area">
            <div className="container">
                <div className="gx-row d-flex">
                    <div className="credential-sidebar-wrap aos-init aos-animate" data-aos="zoom-in">
                        <div className="credential-sidebar text-center">
                            <div className="shadow-box">
                                {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                <div className="img-box">
                                    <img src={myPic} alt="About Me" />
                                </div>
                                <h2>Zain Ul Abideen</h2>
                                <p>zainarshad131@gamil.com</p>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "30px",
                                        marginBottom: "36px",
                                        color: "white",
                                        paddingLeft: "48px",
                                        paddingRight: "38px",
                                    }}
                                >
                                    <FaGithub style={{ fontSize: "2.5rem" }} />
                                    <AiOutlineCamera style={{ fontSize: "2.5rem" }} />
                                    <BsFileCode style={{ fontSize: "2.5rem" }} />
                                    <IoIosColorFilter style={{ fontSize: "2.5rem" }} />
                                </div>
                                <a className="theme-btn" href="">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="credential-content flex-1">
                        <div className="credential-about aos-init aos-animate" data-aos="zoom-in">
                            <h2>About Me</h2>
                            <p>
                                Welcome to my portfolio! I am an enthusiastic indie software developer and tech aficionado, with a passion for creating projects from the ground up.
                                From ideation and design to practical implementation, I thrive on using code to solve real-life problems.
                            </p>
                            <p>
                                My journey as a developer has been fueled by a genuine love for exploring and working with cutting-edge technologies.
                                I am always on the lookout for opportunities to learn and master new tools and frameworks, as they enable me to continually enhance my skills and deliver innovative solutions.
                            </p>
                        </div>
                        <div className="credential-edc-exp credential-experience">
                            <h2 data-aos="fade-up" className="aos-init">Experience</h2>
                            <div className="credential-edc-exp-item aos-init" data-aos="zoom-in">
                                <h4>2022 - 2023</h4>
                                <h3>Full Stack Developer</h3>
                                <h5>ReactJS, PHP, LARAVEL, NodeJs, MSSQL</h5>
                                <p>
                                    As a Developer, I was responsible for designing, developing, and optimizing a website to enhance its performance and user experience,
                                    while working closely with the team to ensure its alignment with the lab's
                                    goals and objectives. I was also responsible for depeloying and maintaining the website on the NUST server.
                                </p>
                            </div>
                            <div className="credential-edc-exp-item aos-init" data-aos="zoom-in">
                                <h4 style={{ marginTop: '20px' }}>2017 - 2023</h4>
                                <h3>Front-End Developer</h3>
                                <h5>NEXTjs, TailWind CSS, ReactJS</h5>
                                <p>
                                    At C3A, NUST, I successfully integrated survey chat-bots into the website, providing users with an interactive and user-friendly experience.
                                    To ensure data integrity and efficient management, I designed and implemented a robust MSSQL database to store user scores and information securely.
                                    Leveraging ASP.NET for the backend, I ensured seamless communication between the chat-bots and the database,
                                    resulting in a streamlined and effective survey system.
                                </p>
                            </div>
                        </div>
                        <div className="credential-edc-exp credential-education">
                            <h2 data-aos="fade-up" className="aos-init">Education</h2>
                            <div className="credential-edc-exp-item aos-init" data-aos="zoom-in">
                                <h4>2019 - 2023</h4>
                                <h3>Bachelor Degree in Computer Science(BSCS)</h3>
                                <h5>National University of Science and Technologies, NUST</h5>
                                <p>I am proud to have completed my Bachelor's Degree in Computer Science (BSCS) from the esteemed National University of Science and Technology (NUST) from 2019 to 2023.
                                    Throughout my academic journey, I delved deep into the world of computer science, honing my skills in programming, algorithms, and software development.
                                    This enriching experience has equipped me with a strong foundation to pursue my passion for technology and embark on a rewarding career as a software developer.
                                </p>
                            </div>
                        </div>
                        <div className="skills-wrap">
                            <h2 data-aos="fade-up" className="aos-init">Skills</h2>
                            <div className="d-grid skill-items gap-24 flex-wrap">
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">85%</span>
                                    <h3 className="name">JavaScript</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">78%</span>
                                    <h3 className="name">ReactJS</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">62%</span>
                                    <h3 className="name">NEXTjs</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">80%</span>
                                    <h3 className="name">MongoDB</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">81%</span>
                                    <h3 className="name">C/C++</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">87%</span>
                                    <h3 className="name">Java</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">87%</span>
                                    <h3 className="name">Python</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">87%</span>
                                    <h3 className="name">Git/GitHub</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">87%</span>
                                    <h3 className="name">MongoDB</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">87%</span>
                                    <h3 className="name">Express</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">87%</span>
                                    <h3 className="name">Redux</h3>
                                    <p>Non enim praesent</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">87%</span>
                                    <h3 className="name">SQL</h3>
                                    <p>Non enim praesent</p>
                                </div>

                            </div>
                        </div>
                        <div className="skills-wrap awards-wrap">
                            <h2 data-aos="fade-up" className="aos-init">Awards</h2>
                            <div className="d-grid skill-items gap-24 flex-wrap">
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">14 May 2020</span>
                                    <h3 className="name">Java OOP</h3>
                                    <p>Best semester project award in Object Oriented Programming Course</p>
                                </div>
                                <div className="skill-item aos-init" data-aos="zoom-in">
                                    <span className="percent">26 June 2023</span>
                                    <h3 className="name">Research Portal</h3>
                                    <p>Received award from Pro-Rector on completion of Research Portal for NUST.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Credentials