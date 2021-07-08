import './Editorial.css'

import e1 from '../../assets/editorial/e1.png'
import e2 from '../../assets/editorial/e2.png'
import e3 from '../../assets/editorial/e3.png'
import e4 from '../../assets/editorial/e4.png'
import e5 from '../../assets/editorial/e5.png'
import e6 from '../../assets/editorial/e6.png'
import Images from '../../components/Images'

const sources: string[][] = [[e1, e2], [e3, e4], [e5, e6]]

function Editorial() {
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                EDITORIAL
            </div>
            <Images sources={sources}></Images>
        </div>
    )
}

export default Editorial