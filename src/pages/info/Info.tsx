import './Info.css'
import profilePic from '../../assets/pic.png'
import info1 from '../../assets/decorations/info-1.png'
import { Image } from '../../components/Image'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Modal } from '../../components/Modal';

function Info() {
    var [showPopup, setShowPopup] = useState(false);
    var [err, setErr] = useState("Default");
    var onSubmit = (event: any) => {
        event.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID!!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!!, event.target, process.env.REACT_APP_EMAILJS_USER_ID!!)
            .then((result) => {
                console.log(result.text);
                setErr("Send success.");
            }, (error) => {
                console.log(error.text);
                setErr("Cannot send email. Please try again later.");
            });
        setShowPopup(true);
        return (
            <Modal isShow={showPopup} err={err}></Modal>
        )
    }

    return (
        <div className="info-container">
            <div className="profile-container">
                <div className="profile-title-container" data-aos="fade-up">
                    <p className="profile-title">HELLO!<br></br>I AM <b className="profile-title-name">RANIDA</b></p>
                    <p className="desc-font-size">My name is Ranida Pithinattadet. I am a Thai Designer based in Thailand. The personality test shows that I am a kind of INFJ. I like to find various ways for facing creative challenges. I hope the information below help you know me better!</p>
                </div>
                <div className="profile-pic-container">
                    <div className="profile-pic-border">
                        <Image className="profile-pic-properties" source={profilePic}></Image>
                    </div>
                </div>
            </div>
            <div className="profile-edu-exp-container">
                <div className="profile-edu-container">
                    <p className="title-font-size" data-aos="fade-up"><b>EDUCATIONS</b></p>
                    <div className="edu-exp-container" data-aos="fade-up">
                        <b className="title-font-size edu-exp-year">2016-2019</b>
                        <div className="desc-font-size edu-exp-info">B.F.A Media Arts, 1st class honors
                            (Graphic Design Major)
                            GPA 3.78<br />
                            <p className="desc-font-size edu-exp-info-desc">King Mongkut’s University of
                                Technology Thonburi</p></div>
                    </div>
                    <div className="edu-exp-container" data-aos="fade-up">
                        <b className="title-font-size edu-exp-year">2013-2015</b>
                        <div className="desc-font-size edu-exp-info">Senior high school
                            Sciences-Mathematics (Computer)<br />
                            <p className="desc-font-size edu-exp-info-desc">Horwang School</p></div>
                    </div>
                    <div className="edu-exp-container" data-aos="fade-up">
                        <b className="title-font-size edu-exp-year">2009-2012</b>
                        <p className="desc-font-size edu-exp-info">Junior high school
                            Phraharuthai Donmueang School,</p>
                    </div>

                </div>
                <div className="profile-exp-container">
                    <p className="title-font-size" data-aos="fade-up"><b>EXPERIENCES</b></p>
                    <div className="edu-exp-container" data-aos="fade-up">
                        <b className="title-font-size edu-exp-year">2021</b>
                        <div className="desc-font-size edu-exp-info">Art director<br />
                            <p className="desc-font-size edu-exp-info-desc">Rise Creative Space, Advertising Agency</p></div>
                    </div>
                    <div className="edu-exp-container" data-aos="fade-up">
                        <b className="title-font-size edu-exp-year">2020-2021</b>
                        <div className="desc-font-size edu-exp-info">Graphic Designer<br />
                            <p className="desc-font-size edu-exp-info-desc">Calm Outdoors, Clothing Brand</p></div>
                    </div>
                    <div className="edu-exp-container" data-aos="fade-up">
                        <b className="title-font-size edu-exp-year">2019</b>
                        <div className="desc-font-size edu-exp-info">Graphic Designer (Internship)<br />
                            <p className="desc-font-size edu-exp-info-desc">Practical Design Studio, Graphic Studio</p></div>
                    </div>
                    <div className="edu-exp-container" data-aos="fade-up">
                        <b className="title-font-size edu-exp-year">2019</b>
                        <div className="desc-font-size edu-exp-info">Graphic Designer<br />
                            <p className="desc-font-size edu-exp-info-desc">Haroon Mosque Shop Makeover Project</p></div>
                    </div>
                    <div className="edu-exp-container" data-aos="fade-up">
                        <b className="title-font-size edu-exp-year">2018</b>
                        <div className="desc-font-size edu-exp-info">Graphic Designer and Administrator<br />
                            <p className="desc-font-size edu-exp-info-desc">Readery, Online Bookstore</p></div>
                    </div>
                </div>
            </div>
            <div className="skill-background">
                <div className="skill-container">
                    <div className="skill-info" data-aos="fade-up">
                        <b className="title-font-size">CREATIVE SKILLS</b>
                        <ul className="desc-font-size edu-exp-info">
                            <li>BRANDING</li>
                            <li>ILLUSTRATION</li>
                            <li>ADVERTISING</li>
                            <li>UX/UI DESIGN</li>
                        </ul>
                    </div>
                    <div className="skill-info" data-aos="fade-up">
                        <b className="title-font-size">SOFTWARE SKILLS</b>
                        <ul className="desc-font-size edu-exp-info">
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe InDesign</li>
                            <li>Adobe Lightroom</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <div className="skill-info" data-aos="fade-up">
                        <b className="title-font-size">LANGUAGE</b>
                        <ul className="desc-font-size edu-exp-info">
                            <li>Thai (Mother Tongue)</li>
                            <li>English (Upper Intermediate)</li>
                            <li>Japanese (Beginner)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact-zigzag">
                <img src={info1} alt="" />
            </div>
            <div className="contact-bg">
                <div className="contact-container" data-aos="fade-up">
                    <div className="contact-header">
                        <p className="title-font-size contact-title">CONTACT ME</p>
                    </div>
                    <form className="contact-form" onSubmit={onSubmit}>
                        <div className="contact-name-email">
                            <div className="contact-item">
                                <span className="contact-form-label">Name<p style={{ color: "red" }}>*</p></span>
                                <input className="contact-form-input" type="text" name="from_name" />
                            </div>
                            <div className="contact-item">
                                <span className="contact-form-label">Email<p style={{ color: "red" }}>*</p></span>
                                <input className="contact-form-input" type="email" name="email" />
                            </div>
                        </div>
                        <div className="contact-item-full">
                            <span className="contact-form-label">Subject<p style={{ color: "red" }}>*</p></span>
                            <input className="contact-form-input" type="text" name="subject" />
                        </div>
                        <div className="contact-item-full">
                            <textarea className="contact-item-full contact-form-textarea" name="detail" placeholder="Leave your message" rows={7} />
                        </div>
                        <div className="contact-item-full">
                            <button className="contact-form-input" data-toggle="modal" data-target=".contact-popup">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Info