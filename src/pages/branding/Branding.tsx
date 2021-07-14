import './Branding.css'
import '../common.css'
import { DataMap } from '../../components/Sources'
import { Image } from '../../components/Image'
import { Link } from 'react-router-dom'
import path from 'path'

const work: string[][] = [["line-horoscope", "t-time"], ["agnostic", "book-blind-date"], ["a-cup-of-chiangrai", "haroon"]]

function Branding() {
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                BRANDING
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
    )
}

export default Branding