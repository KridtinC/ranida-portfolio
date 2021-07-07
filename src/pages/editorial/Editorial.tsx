import './Editorial.css'
import '../common.css'

import e1 from '../../assets/editorial/e1.png'
import e2 from '../../assets/editorial/e2.png'
import e3 from '../../assets/editorial/e3.png'
import e4 from '../../assets/editorial/e4.png'
import e5 from '../../assets/editorial/e5.png'
import e6 from '../../assets/editorial/e6.png'

const sources: string[][] = [[e1, e2], [e3, e4], [e5, e6]]

function Editorial() {
    return (
        <div>
            <div className="header-container">
                EDITORIAL
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

export default Editorial