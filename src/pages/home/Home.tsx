import './Home.css'
import featured1 from '../../assets/home/featured1.png'
import featured2 from '../../assets/home/featured2.png'

function Home() {
    return (
        <div className="home-container">
            <div className="welcome-container" data-aos="fade-down">
                <p className="welcome-title">HELLO!</p>
                <p className="welcome-title">THIS IS <b className="welcome-title-name">RANIDA</b></p>
                <p className="welcome-title-desc">and here is my portfolio!</p>
            </div>
            <div className="featured-container" data-aos="fade-down">
                <div className="main-feature-container">
                    <img src={featured1} alt="" />
                    <div className="overlapped-text" data-aos="fade-right">
                        <p className="overlapped-title">2021 </p>
                        <p className="overlapped-detail">Lastest work, LINE ดูดวง </p><p className="overlapped-detail">Brand Identity, UI Design</p>
                    </div>
                </div>
                <img src={featured2} alt="" />
            </div>
        </div>
    )
}

export default Home