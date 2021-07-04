import './Info.css'
import tmpPic from '../../assets/tmp_pic.jpg'

function Info() {
    return (
        <div className="profile-container">
            <div className="profile-title-container">
                <p className="profile-title">HELLO!<br></br>I AM <b>RANIDA</b></p>
                <p className="profile-info">My name is Ranida Pithinattadet. I am a Thai Designer based in Thailand. The personality test shows that I am a kind of INFJ. I like to find various ways for facing creative challenges. I hope the information below help you know me better!</p>
            </div>
            <div className="profile-pic-container">
                <div className="profile-pic-border">
                    <img src={tmpPic} alt="" className="profile-pic-properties" />
                </div>
            </div>

        </div>
    )
}

export default Info