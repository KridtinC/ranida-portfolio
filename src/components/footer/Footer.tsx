import { useLocation } from 'react-router';
import './Footer.css'

interface FooterProps {
    backgroundColor: string
}

function Footer(props: FooterProps) {
    var { backgroundColor } = props
    var color = ""

    const location = useLocation();
    if (location.pathname === "/info") {
        backgroundColor = "#091F2C"
        color = "#FFF";
    }
    return (
        <div className="footer-text-container" style={{ backgroundColor, color: color }}><hr style={{ marginTop: "0px" }} />© RANIDA PITH., 2021</div>
    )
}

export default Footer