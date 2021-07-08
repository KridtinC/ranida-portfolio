import './Branding.css'

import b1 from '../../assets/branding/b1.png'
import b2 from '../../assets/branding/b2.png'
import b3 from '../../assets/branding/b3.png'
import bgrey from '../../assets/decorations/bgrey.png'
import bdarkgrey from '../../assets/decorations/bdarkgrey.png'
import Images from '../../components/Images'

const sources: string[][] = [[b1, b2], [b3, bgrey], [bgrey, bdarkgrey]]

function Branding() {
    return (
        <div>
            <div className="header-container" data-aos="fade-down">
                BRANDING
            </div>
            <Images sources={sources}></Images>
        </div>
    )
}

export default Branding