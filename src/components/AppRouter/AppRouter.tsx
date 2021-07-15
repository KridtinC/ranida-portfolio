import { Link } from "react-router-dom";
import './AppRouter.css'
import logo from '../../assets/logo.png'

function AppRouter() {
    return (
        <nav className="navbar navbar-light fixed-top navbar-expand-xl navbar-size navbar-bg" data-aos="fade-down">
            <Link to="/">
                <img className="logo-properties" alt="" src={logo}></img>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-bg" data-toggle="collapse" data-target=".navbar-collapse">
                <ul className="nav navbar-nav mx-auto">
                    <Link className="navbar-brand navbar-link-item" to="/branding">BRANDING</Link>
                    <Link className="navbar-brand navbar-link-item" to="/illustration">ILLUSTRATION</Link>
                    <Link className="navbar-brand navbar-link-item" to="/editorial">EDITORIAL</Link>
                    <Link className="navbar-brand navbar-link-item" to="/uxui" >UX / UI DESIGN</Link>
                    <Link className="navbar-brand navbar-link-item" to="/others" >OTHERS</Link>
                    <Link className="navbar-brand navbar-link-item" to="/info">INFO</Link>
                </ul>
            </div>
        </nav>
    );
}

export default AppRouter;