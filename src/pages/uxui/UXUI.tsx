import './UXUI.css'

import u1 from '../../assets/uxui/u1.png'
import u2 from '../../assets/uxui/u2.png'
import u3 from '../../assets/uxui/u3.png'
import u4 from '../../assets/uxui/u4.png'
import Images from '../../components/Images'

const sources: string[][] = [[u1, u2], [u3, u4]]

function UXUI() {
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                UX/UI
            </div>
            <Images sources={sources}></Images>
        </div>
    )
}

export default UXUI