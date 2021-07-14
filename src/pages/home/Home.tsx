import './Home.css'
import { Image } from '../../components/Image'
import { Link } from 'react-router-dom'
import { DataMap } from '../../components/Sources'
import path from 'path'

const firstWork: string = "line-horoscope"
const work: string[][] = [["t-time-featured", "riceit-featured"], ["a-cup-of-chiangrai-featured", "creed-featured"]]

function Home() {
    return (
        <div className="home-container">
            <div className="welcome-container" data-aos="fade-down">
                <p className="welcome-title">HELLO!</p>
                <p className="welcome-title">THIS IS <b className="welcome-title-name">RANIDA</b></p>
                <p className="welcome-title-desc">and here is <span className="welcome-title-desc-font">my portfolio!</span></p>
            </div>
            <div className="featured-container" data-aos="fade-down">
                <div className="main-feature-container">
                    <Link to={path.join('works', DataMap.get(firstWork)!!.url)}>
                        <Image source={DataMap.get(firstWork)!!.coverImgURL}></Image>
                    </Link>
                    <div className="overlapped-text" data-aos="fade-right">
                        <p className="overlapped-title">2021 </p>
                        <p className="overlapped-detail">Lastest work, LINE ดูดวง </p><p className="overlapped-detail">Brand Identity, UI Design</p>
                    </div>
                </div>
                {
                    work.map((row) => {
                        return <div className="row">
                            {
                                row.map((col) => {
                                    return <div className="col">
                                        <Link to={path.join('works', DataMap.get(col)!!.url)}>
                                            <Image source={DataMap.get(col)!!.coverImgURL}></Image>
                                        </Link>
                                    </div>

                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Home