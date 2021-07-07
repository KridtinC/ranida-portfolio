import { Switch, Route } from "react-router";
import { HashRouter, Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import Info from "../../pages/info/Info";
import './AppRouter.css'
import logo from '../../assets/logo.png'

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
                    <div className="collapse navbar-collapse mynavbar-link-container navbar-bg">
                        <ul className="nav navbar-nav mx-auto">
                            <Link className="navbar-brand navbar-link-item" to="/branding">BRANDING</Link>
                            <Link className="navbar-brand navbar-link-item" to="/illustration">ILLUSTRATION</Link>
                            <Link className="navbar-brand navbar-link-item" to="/advertising">ADVERTISING</Link>
                            <Link className="navbar-brand navbar-link-item" to="/uxui" >UX/UI DESIGN</Link>
                            <Link className="navbar-brand navbar-link-item" to="/others" >OTHERS</Link>
                            <Link className="navbar-brand navbar-link-item" to="/info">INFO</Link>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <div style={bodyPadding}>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/branding">
                        </Route>
                        <Route path="/illustration">
                        </Route>
                        <Route path="/advertising">
                        </Route>
                        <Route path="/uxui">
                        </Route>
                        <Route path="/others">
                        </Route>
                        <Route path="/info">
                            <Info />
                        </Route>
                    </div>
                </Switch>
            </div>

        </HashRouter>


    );
}

export default AppRouter;