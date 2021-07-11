import './Illustration.css'
import '../common.css'
import { DataMap } from '../../components/Sources'
import { Image } from '../../components/Image'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'

const work: string[][] = [["the-writer-project", "shell-eco-marathon"], ["synphaet", "blankgrey"], ["blankgrey", "blankdgrey"]]

function Illustration() {
    let { url } = useRouteMatch();
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                ILLUSTRATION
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

export default Illustration