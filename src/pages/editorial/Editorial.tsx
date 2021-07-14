import './Editorial.css'
import '../common.css'
import { Image } from '../../components/Image'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { DataMap } from '../../components/Sources'

const work: string[][] = [["creed", "sani-system"], ["thon-thong-time", "fibonacci"], ["kor-kong-sai", "type-founder"]]

function Editorial() {
    let { url } = useRouteMatch();
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                EDITORIAL
            </div>
            {
                work.map((row) => {
                    return <div className="row">
                        {
                            row.map((col) => {
                                return <div className="col">
                                    <Link to={`${url}${DataMap.get(col)!!.url}`}>
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

export default Editorial