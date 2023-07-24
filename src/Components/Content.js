import React from "react";
import "../CSS/content.css";
import myPic from "../Images/me.png";
import BG from "../Images/bg1.png";
import Sign from "../Images/sign.png";
import myworks from "../Images/my-works.png";
import gfonts from "../Images/gfonts.png";
import icon2 from "../Images/icon2.png";
import icon from "../Images/icon.svg";
import star1 from "../Images/star1.svg";
import star2 from "../Images/star-2.png";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import { BsFileCode, BsDribbble } from "react-icons/bs";
import { IoIosColorFilter } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'

function Content() {
  // const [showContent, setShowContent] = useState(true);

  const navigate = useNavigate();



  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 aos-init aos-animate"
            data-aos="zoom-in"
            style={{
              paddingLeft: "12px",
              paddingRight: "12px",
              cursor: "pointer",
            }}
          >
            <div
              className="about-me-box shadow-box"
              style={{ height: "330px", paddingLeft: "20px" }}
              onClick={() => { navigate('/about') }}
            >
              <a className="overlay-link" href=""></a>
              <div className="img-box">
                <img src={myPic} alt="About Me" />
              </div>
              <div className="infos">
                <h4>A WEB DESIGNER</h4>
                <h1>David Henderson.</h1>
                <p>I am a Web Designer based in San Francisco.</p>
                <a className="about-btn" href="">
                  <img src={icon} alt="Button" />
                </a>
              </div>
            </div>
          </div>
          {/* <Link to="/credentials"> */}
          <div
            className="col-md-6"
            style={{ paddingLeft: "12px", paddingRight: "12px" }}
          >
            <div className="about-credentials-wrap">
              <div data-aos="zoom-in" className="aos-init aos-animate">
                <div className="banner shadow-box">
                  <div className="marquee">
                    <div>
                      <span style={{ color: "#bcbcbc" }}>
                        LATEST WORK AND <b>FEATURED</b>{" "}
                        <img src={star1} alt="Star" />
                        LATEST WORK AND <b>FEATURED</b>{" "}
                        <img src={star1} alt="Star" />
                        LATEST WORK AND <b>FEATURED</b>{" "}
                        <img src={star1} alt="Star" />
                        LATEST WORK AND <b>FEATURED</b> LATEST WORK AND{" "}
                        <img src={star1} alt="Star" />
                        LATEST WORK AND <b>FEATURED</b> LATEST WORK AND{" "}
                        <img src={star1} alt="Star" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gx-row d-flex"
                style={{ padding: "0px", gap: "24px" }}
              >
                <div
                  data-aos="zoom-in"
                  className="aos-init aos-animate"
                  style={{ margin: "unset", cursor: "pointer" }}
                  onClick={() => { navigate('/credentials') }}
                >
                  <div className="about-crenditials-box info-box shadow-box h-full" onClick={() => { navigate('/credentials') }}>
                    <a className="overlay-link" href=""></a>
                    <img src={Sign} alt="Sign" />

                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos" style={{ margin: "unset" }}>
                        <h4>more about me</h4>
                        <h1>Credentials</h1>
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
                <div
                  data-aos="zoom-in"
                  className="aos-init aos-animate"
                  style={{ margin: "unset" }}
                >
                  <div
                    className="about-project-box info-box shadow-box h-full"
                    onClick={() => { navigate('/projects') }}
                    style={{ cursor: "pointer" }}
                  >
                    <a className="overlay-link" href=""></a>
                    <img src={myworks} alt="My Works" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos" style={{ margin: "unset" }}>
                        <h4>SHOWCASE</h4>
                        <h1>Projects</h1>
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
              </div>
            </div>
          </div>
          {/* </Link> */}
        </div>

        <div className="row" style={{ marginTop: "24px" }}>
          <div
            className="col-md-12"
            style={{ paddingLeft: "12px", paddingRight: "12px" }}
          >
            <div className="blog-service-profile-wrap d-flex gap-24">
              <div
                data-aos="zoom-in"
                className="aos-init"
                style={{ margin: "unset" }}
              >
                <div className="about-blog-box info-box shadow-box h-full">
                  <a className="overlay-link" href=""></a>
                  {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                  <img src={gfonts} alt="GFonts" />
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ margin: "unset" }}
                  >
                    <div className="infos" style={{ margin: "unset" }}>
                      <h4>Blog</h4>
                      <h1>GFonts</h1>
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
              <div
                data-aos="zoom-in"
                className="flex-1 aos-init"
                style={{ margin: "unset" }}
              >
                <div className="about-services-box info-box shadow-box h-full"
                  onClick={() => { navigate('/services') }}
                  style={{ cursor: "pointer" }}>
                  {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "80px",
                      marginBottom: "56px",
                      marginTop: "46px",
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
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ margin: "unset" }}
                  >
                    <div className="infos" style={{ margin: "unset" }}>
                      <h4>specialization</h4>
                      <h1>Services Offering</h1>
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
              <div
                data-aos="zoom-in"
                className="aos-init"
                style={{ margin: "unset" }}
              >
                <div className="about-profile-box info-box shadow-box h-full"
                  onClick={() => { navigate('/contact') }}
                  style={{ cursor: "pointer" }}
                  >
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
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "24px" }}>
          <div
            className="col-md-6 aos-init aos-animate"
            data-aos="zoom-in"
            style={{ paddingLeft: "12px", paddingRight: "12px" }}
          >
            <div className="about-client-box info-box shadow-box">
              {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
              <div className="clients d-flex align-items-start gap-24 justify-content-center">
                <div className="client-item">
                  <h1>07</h1>
                  <p>
                    Years <br />
                    Experience
                  </p>
                </div>
                <div className="client-item">
                  <h1>+125</h1>
                  <p>
                    CLIENTS <br />
                    WORLDWIDE
                  </p>
                </div>
                <div className="client-item">
                  <h1>+210</h1>
                  <p>
                    Total <br />
                    Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 aos-init aos-animate"
            data-aos="zoom-in"
            style={{ paddingLeft: "12px", paddingRight: "12px" }}
          >
            <div className="about-contact-box info-box shadow-box" 
            onClick={() => { navigate('/contact') }}
            style={{ cursor: "pointer" }}>
              <a className="overlay-link" href=""></a>
              {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
              <img src={icon2} alt="Icon" className="star-icon" />
              <h1>
                Let's <br />
                work <span>together.</span>
              </h1>
              <a className="about-btn" href="">
                <img src={icon} alt="Button" />

              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
