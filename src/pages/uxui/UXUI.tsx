import './UXUI.css'
import '../common.css'

import u1 from '../../assets/uxui/u1.png'
import u2 from '../../assets/uxui/u2.png'
import u3 from '../../assets/uxui/u3.png'
import u4 from '../../assets/uxui/u4.png'

const sources: string[][] = [[u1, u2], [u3, u4]]

function UXUI() {
    return (
        <div>
            <div className="header-container">
                UX/UI
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

export default UXUI