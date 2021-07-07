import './Others.css'
import '../common.css'

import o1 from '../../assets/others/o1.png'
import o2 from '../../assets/others/o2.png'
import o3 from '../../assets/others/o3.png'
import bdarkgrey from '../../assets/decorations/bdarkgrey.png'

const sources: string[][] = [[o1, o2], [o3, bdarkgrey]]

function Others() {
    return (
        <div>
            <div className="header-container">
                OTHERS
            </div>
            {
                sources.map((row, idx) => {
                    return (
                        <div className="image-row" key={idx}>
                            {
                                row.map((col, idx) => {
                                    return (
                                        <div className="image-col" key={idx}>
                                            <img src={col} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Others