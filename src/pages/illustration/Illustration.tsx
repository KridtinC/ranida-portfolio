import './Illustration.css'
import '../common.css'

import i1 from '../../assets/illustration/i1.png'
import i2 from '../../assets/illustration/i2.png'
import i3 from '../../assets/illustration/i3.png'
import bgrey from '../../assets/decorations/bgrey.png'
import bdarkgrey from '../../assets/decorations/bdarkgrey.png'

const sources: string[][] = [[i1, i2], [i3, bgrey], [bgrey, bdarkgrey]]

function Illustration() {
    return (
        <div>
            <div className="header-container">
                ILLUSTRATION
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

export default Illustration