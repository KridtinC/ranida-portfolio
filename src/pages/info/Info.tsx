import './Info.css'
import tmpPic from '../../assets/pic.png'

function Info() {
    return (
        <div className="info-container">
            <div className="profile-container">
                <div className="profile-title-container">
                    <p className="profile-title">HELLO!<br></br>I AM <b className="profile-title-name">RANIDA</b></p>
                    <p className="profile-info">My name is Ranida Pithinattadet. I am a Thai Designer based in Thailand. The personality test shows that I am a kind of INFJ. I like to find various ways for facing creative challenges. I hope the information below help you know me better!</p>
                </div>
                <div className="profile-pic-container">
                    <div className="profile-pic-border">
                        <img src={tmpPic} alt="" className="profile-pic-properties" />
                    </div>
                </div>
            </div>
            <div className="profile-edu-exp-container">
                <div className="profile-edu-container">
                    <p className="edu-exp-title"><b>EDUCATIONS</b></p>
                    <div className="edu-exp-container">
                        <b className="edu-exp-year">2016-2019</b>
                        <p className="edu-exp-info">B.F.A Media Arts, 1st class honors
                            (Graphic Design Major)
                            GPA 3.78<br />
                            <p className="edu-exp-info-desc">King Mongkut’s University of
                                Technology Thonburi</p></p>
                    </div>
                    <div className="edu-exp-container">
                        <b className="edu-exp-year">2013-2015</b>
                        <p className="edu-exp-info">Senior high school
                            Sciences-Mathematics (Computer)<br />
                            <p className="edu-exp-info-desc">Horwang School</p></p>
                    </div>
                    <div className="edu-exp-container">
                        <b className="edu-exp-year">2009-2012</b>
                        <p className="edu-exp-info">Junior high school
                            Phraharuthai Donmueang School,</p>
                    </div>

                </div>
                <div className="profile-exp-container">
                    <p className="edu-exp-title"><b>EXPERIENCES</b></p>
                    <div className="edu-exp-container">
                        <b className="edu-exp-year">2021</b>
                        <p className="edu-exp-info">Art director<br />
                            <p className="edu-exp-info-desc">Rise Creative Space, Advertising Agency</p></p>
                    </div>
                    <div className="edu-exp-container">
                        <b className="edu-exp-year">2020-2021</b>
                        <p className="edu-exp-info">Graphic Designer<br />
                            <p className="edu-exp-info-desc">Calm Outdoors, Clothing Brand</p></p>
                    </div>
                    <div className="edu-exp-container">
                        <b className="edu-exp-year">2019</b>
                        <p className="edu-exp-info">Graphic Designer (Internship)<br />
                            <p className="edu-exp-info-desc">Practical Design Studio, Graphic Studio</p></p>
                    </div>
                    <div className="edu-exp-container">
                        <b className="edu-exp-year">2019</b>
                        <p className="edu-exp-info">Graphic Designer<br />
                            <p className="edu-exp-info-desc">Haroon Mosque Shop Makeover Project</p></p>
                    </div>
                    <div className="edu-exp-container">
                        <b className="edu-exp-year">2018</b>
                        <p className="edu-exp-info">Graphic Designer and Administrator<br />
                            <p className="edu-exp-info-desc">Readery, Online Bookstore</p></p>
                    </div>
                </div>
            </div>
            <div className="skill-container">
                <div className="skill-info">
                    <b className="edu-exp-title">CREATIVE SKILLS</b>
                    <p className="edu-exp-info">BRANDING
                        ILLUSTRATION
                        ADVERTISING
                        UX/UI DESIGN</p>
                </div>
                <div className="skill-info">
                    <b className="edu-exp-title">SOFTWARE SKILLS</b>
                    <p className="edu-exp-info">Adobe Illustrator
                        Adobe Photoshop
                        Adobe InDesign
                        Adobe Lightroom
                        Figma</p>
                </div>
                <div className="skill-info">
                    <b className="edu-exp-title">LANGUAGE</b>
                    <p className="edu-exp-info">Thai (Mother Tongue)
                        English (Upper Intermediate)
                        Japanese (Beginner)</p>
                </div>
            </div>
        </div>
    )
}

export default Info