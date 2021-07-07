import './Branding.css'
import '../common.css'

import b1 from '../../assets/branding/b1.png'
import b2 from '../../assets/branding/b2.png'
import b3 from '../../assets/branding/b3.png'
import bgrey from '../../assets/decorations/bgrey.png'
import bdarkgrey from '../../assets/decorations/bdarkgrey.png'

const sources: string[][] = [[b1, b2], [b3, bgrey], [bgrey, bdarkgrey]]

function Branding() {
    return (
        <div>
            <div className="header-container">
                BRANDING
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

export default Branding