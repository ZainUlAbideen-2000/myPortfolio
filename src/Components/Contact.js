import React from 'react'
import "../CSS/contact.css";
import { Icon } from '@iconify/react';
import icon2 from "../Images/icon2.png";

function Contact() {
    return (
        <section className="contact-area">
            <div className="container">
                <div className="gx-row d-flex justify-content-between gap-24">
                    <div className="contact-infos">
                        <h3 data-aos="fade-up" className="aos-init aos-animate">Contact Info</h3>
                        <ul className="contact-details">
                            <li className="d-flex align-items-center aos-init aos-animate" data-aos="zoom-in">
                                <div className="icon-box shadow-box"><i className="iconoir-mail"><Icon icon="iconoir:mail"  style={{marginBottom:'6px'}}/></i></div>
                                <div className="right">
                                    <span>MAIL us</span>
                                    <h4>info@bluebase.com</h4>
                                    <h4>info@bluebase2.com</h4>
                                </div>
                            </li>
                            <li className="d-flex align-items-center aos-init" data-aos="zoom-in">
                                <div className="icon-box shadow-box"><i className="iconoir-phone"><Icon icon="iconoir:phone"  style={{marginBottom:'6px'}}/></i></div>
                                <div className="right">
                                    <span>Contact Us</span>
                                    <h4>+1 504-899-8221</h4>
                                    <h4>+1 504-749-5456</h4>
                                </div>
                            </li>
                            <li className="d-flex align-items-center aos-init" data-aos="zoom-in">
                                <div className="icon-box shadow-box"><i className="iconoir-pin-alt"><Icon icon="bx:map" style={{marginBottom:'6px'}} /></i></div>
                                <div className="right">
                                    <span>Location</span>
                                    <h4>22 Baker Street, Texas <br />United States <br />W1U 3BW</h4>
                                </div>
                            </li>
                        </ul>
                        <h3 data-aos="fade-up" className="aos-init">Social Info</h3>
                        <ul className="social-links d-flex align-center aos-init" data-aos="zoom-in">
                            <li><a className="shadow-box" href=""><i className="iconoir-dribbble"><Icon icon="ri:dribbble-fill" style={{height:'1.5em', marginBottom:'15px',width:'1.2em'}}/></i></a></li>
                            <li><a className="shadow-box" href=""><i className="iconoir-twitter"><Icon icon="iconoir:twitter" style={{height:'1.5em', marginBottom:'15px',width:'1.2em'}}/></i></a></li>
                            <li><a className="shadow-box" href=""><i className="iconoir-instagram"><Icon icon="uil:instagram" style={{height:'1.5em', marginBottom:'15px',width:'1.2em'}}/></i></a></li>
                        </ul>
                    </div>
                    <div data-aos="zoom-in" className="contact-form aos-init aos-animate" style={{margin:'unset'}}>
                        <div className="shadow-box">
                            {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                            <img src={icon2} alt="Icon" />
                            <h1>Let's work <span>together.</span></h1>
                            <form>  
                                {/* <div className="alert alert-success messenger-box-contact__msg" role="alert" >Your message was sent successfully.</div> */}
                                <div className="input-group">
                                    <input type="text" name="full-name" id="full-name" placeholder="Name *" />
                                </div>
                                <div className="input-group">
                                    <input type="email" name="email" id="email" placeholder="Email *" />
                                </div>
                                <div className="input-group">
                                    <input type="text" name="subject" id="subject" placeholder="Your Subject *" />
                                </div>
                                <div className="input-group">
                                    <textarea name="message" id="message" placeholder="Your Message *"></textarea>
                                </div>
                                <div className="input-group">
                                    <button className="theme-btn submit-btn" name="submit" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact