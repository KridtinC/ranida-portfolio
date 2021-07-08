import './Illustration.css'

import i1 from '../../assets/illustration/i1.png'
import i2 from '../../assets/illustration/i2.png'
import i3 from '../../assets/illustration/i3.png'
import bgrey from '../../assets/decorations/bgrey.png'
import bdarkgrey from '../../assets/decorations/bdarkgrey.png'
import Images from '../../components/Images'

const sources: string[][] = [[i1, i2], [i3, bgrey], [bgrey, bdarkgrey]]

function Illustration() {
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                ILLUSTRATION
            </div>
            <Images sources={sources}></Images>
        </div>
    )
}

export default Illustration