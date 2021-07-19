import './Info.css'
import profilePic from '../../assets/pic.png'
import info1 from '../../assets/decorations/info-1.jpg'
import { Image } from '../../components/Image'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { EducationsInfo, ExperiencesInfo, SkillsInfo } from '../../components/InfoSources';

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
                    <p className="title-edu-exp-font-size" data-aos="fade-up"><b>EDUCATIONS</b></p>
                    {
                        EducationsInfo.map((edu, key) => {
                            return <YearDetail years={edu.years} title={edu.title} description={edu.description} key={key} />
                        })
                    }
                </div>
                <div className="profile-exp-container">
                    <p className="title-edu-exp-font-size" data-aos="fade-up"><b>EXPERIENCES</b></p>
                    {
                        ExperiencesInfo.map((exp, key) => {
                            return <YearDetail years={exp.years} title={exp.title} description={exp.description} key={key} />
                        })
                    }
                </div>
            </div>
            <div className="skill-background">
                <div className="skill-container">
                    {
                        SkillsInfo.map((skill, key) => {
                            return <SkillDetail title={skill.title} skillList={skill.skillList} key={key} />
                        })
                    }
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
                        <div className="contact-item-button">
                            <button className="contact-form-button" data-toggle="modal" data-target=".contact-popup">SUBMIT</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

interface YearDetailProps {
    years: string
    title: string
    description?: string
}

interface SkillDetailProps {
    title: string
    skillList: string[]
}

const YearDetail = (props: YearDetailProps) => {
    return (
        <div className="edu-exp-container" data-aos="fade-up">
            <b className="year-font-size edu-exp-year">{props.years}</b>
            <div className="desc-font-size edu-exp-info">
                <p style={{ margin: "0px" }}>{props.title}</p>
                <p className="edu-exp-info-desc">{props.description}</p>
            </div>

        </div>
    )
}

const SkillDetail = (props: SkillDetailProps) => {
    return (
        <div className="skill-info" data-aos="fade-up">
            <b className="title-font-size">{props.title}</b>
            <ul className="desc-font-size edu-exp-info-list">
                {
                    props.skillList.map((skill, key) => {
                        return <li style={{ whiteSpace: "nowrap" }} key={key}>{skill}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Info

export type {
    YearDetailProps,
    SkillDetailProps
}