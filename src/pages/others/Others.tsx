import './Others.css'

import o1 from '../../assets/others/o1.png'
import o2 from '../../assets/others/o2.png'
import o3 from '../../assets/others/o3.png'
import bdarkgrey from '../../assets/decorations/bdarkgrey.png'
import Images from '../../components/Images'

const sources: string[][] = [[o1, o2], [o3, bdarkgrey]]

function Others() {
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                OTHERS
            </div>
            <Images sources={sources}></Images>
        </div>
    )
}

export default Others