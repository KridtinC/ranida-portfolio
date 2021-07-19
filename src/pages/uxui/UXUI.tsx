import './UXUI.css'
import '../common.css'
import { DataMap } from '../../components/Sources'
import { Image } from '../../components/Image'
import { Link } from 'react-router-dom'
import path from 'path'

const work: string[][] = [["k-bank-line-points", "line-horoscope2"], ["agnostic-ui", "line-points-back"], ["line-points-awareness"]]

function UXUI() {
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                UX/UI
            </div>
            {
                work.map((row, key) => {
                    return <div className="row" key={key}>
                        {
                            row.map((col, key) => {
                                return <div className="col" key={key}>
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

export default UXUI