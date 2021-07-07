import { Switch, Route } from "react-router";
import { HashRouter, Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import Info from "../../pages/info/Info";
import './AppRouter.css'
import logo from '../../assets/logo.png'
import Branding from "../../pages/branding/Branding";
import Illustration from "../../pages/illustration/Illustration";
import Editorial from "../../pages/editorial/Editorial";
import UXUI from "../../pages/uxui/UXUI";
import Others from "../../pages/others/Others";

const bodyPadding = {
    paddingTop: "115px"
}


function AppRouter() {
    return (
        <HashRouter>
            <div>
                <nav className="navbar navbar-light fixed-top navbar-expand-xl navbar-size navbar-bg" data-aos="fade-down">
                    <Link to="/">
                        <img className="logo-properties" alt="" src={logo}></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mynavbar-link-container navbar-bg" data-toggle="collapse" data-target=".navbar-collapse">
                        <ul className="nav navbar-nav mx-auto">
                            <Link className="navbar-brand navbar-link-item" to="/branding">BRANDING</Link>
                            <Link className="navbar-brand navbar-link-item" to="/illustration">ILLUSTRATION</Link>
                            <Link className="navbar-brand navbar-link-item" to="/editorial">EDITORIAL</Link>
                            <Link className="navbar-brand navbar-link-item" to="/uxui" >UX/UI DESIGN</Link>
                            <Link className="navbar-brand navbar-link-item" to="/others" >OTHERS</Link>
                            <Link className="navbar-brand navbar-link-item" to="/info">INFO</Link>
                        </ul>
                    </div>
                </nav>
                <div style={bodyPadding}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/branding">
                            <Branding />
                        </Route>
                        <Route path="/illustration">
                            <Illustration />
                        </Route>
                        <Route path="/editorial">
                            <Editorial />
                        </Route>
                        <Route path="/uxui">
                            <UXUI />
                        </Route>
                        <Route path="/others">
                            <Others />
                        </Route>
                        <Route path="/info">
                            <Info />
                        </Route>
                    </Switch>
                </div>

            </div>

        </HashRouter>


    );
}

export default AppRouter;