import './Illustration.css'
import '../common.css'
import { DataMap } from '../../components/Sources'
import { Image } from '../../components/Image'
import { Link } from 'react-router-dom'
import path from 'path'

const work: string[][] = [["the-writer-project", "synphaet"], ["ikura", "art-history"], ["nice-to-meet-you", "riceit"]]

function Illustration() {
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                ILLUSTRATION
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

export default Illustration