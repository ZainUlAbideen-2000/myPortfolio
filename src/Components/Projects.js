import React from 'react'
import "../CSS/project.css";
import project1 from "../Images/project1.jpeg";
import project2 from "../Images/project2.jpeg";
import project3 from "../Images/project3.jpeg";
import project4 from "../Images/project4.jpeg";
import project5 from "../Images/project5.jpeg";
import project6 from "../Images/project6.jpeg";
import star2 from "../Images/star-2.png";
import icon from "../Images/icon.svg";

function Projects() {
    return (
        <section className="projects-area">
            <div className="container">

                <div className="row">
                    <div className="col-md-4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                        <div data-aos="zoom-in" className="aos-init aos-animate">
                            <div className="project-item shadow-box">
                                <a className="overlay-link" href="https://collaborate.nust.edu.pk" target='_blank' rel="noopener noreferrer"></a>
                                {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                <div className="project-img">
                                    <img src={project1} alt="Project" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="project-info">
                                        <p>Dynamic</p>
                                        <h1>Research Portal</h1>
                                    </div>
                                    <a className="project-btn" href="https://collaborate.nust.edu.pk">
                                        <img src={icon} alt="Button" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="aos-init">
                            <div className="project-item shadow-box">
                                <a className="overlay-link" href="https://mentalhealthscreening.netlify.app" target='_blank' rel="noopener noreferrer"></a>
                                {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                <div className="project-img">
                                    <img src={project2} alt="Project" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="project-info">
                                        <p>Screening Survey Bots</p>
                                        <h1>Hosla Bot</h1>
                                    </div>
                                    <a className="project-btn" href="https://mentalhealthscreening.netlify.app">
                                        <img src={icon} alt="Button" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                        <h1 className="section-heading aos-init aos-animate" data-aos="fade-up">
                            <img src={star2} alt="Star" /> All Projects <img src={star2} alt="Star" />
                        </h1>
                        <div className="d-flex align-items-start gap-24">
                            <div data-aos="zoom-in" className="flex-1 aos-init aos-animate">
                                <div className="project-item shadow-box">
                                    <a className="overlay-link" href="https://c3a.nust.edu.pk" target='_blank' rel="noopener noreferrer"></a>
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <div className="project-img">
                                        <img src={project3} alt="Project" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>Integrated Survey ChatBots</p>
                                            <h1>C3a Website</h1>
                                        </div>
                                        <a className="project-btn" href="https://c3a.nust.edu.pk">
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="flex-1 aos-init aos-animate">
                                <div className="project-item shadow-box">
                                    <a className="overlay-link" href="/project/4"></a>
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <div className="project-img">
                                        <img src={project4} alt="Project" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>Branding</p>
                                            <h1>Universes</h1>
                                        </div>
                                        <a className="project-btn" href="/project/4">
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-24">
                            <div data-aos="zoom-in" className="flex-1 aos-init">
                                <div className="project-item shadow-box">
                                    <a className="overlay-link" href="/project/5"></a>
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <div className="project-img">
                                        <img src={project5} alt="Project" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>Gaming</p>
                                            <h1>Hypothetical</h1>
                                        </div>
                                        <a className="project-btn" href="/project/5">
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="flex-1 aos-init">
                                <div className="project-item shadow-box">
                                    <a className="overlay-link" href="/project/6"></a>
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <div className="project-img">
                                        <img src={project6} alt="Project" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>Tech</p>
                                            <h1>Stanford</h1>
                                        </div>
                                        <a className="project-btn" href="/project/6">
                                            <img src={icon} alt="Button" />
                                        </a>
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

export default Projects