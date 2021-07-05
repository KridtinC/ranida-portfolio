import { Switch, Route } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import Info from "../../pages/info/Info";
import './AppRouter.css'
import logo from '../../assets/logo.png'

const bodyPadding = {
    paddingTop: "115px"
}


function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-light fixed-top navbar-expand-sm navbar-size app-router-bg" data-aos="fade-down">
                    <a href="/">
                        <img className="logo-properties" alt="" src={logo}></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mynavbar-link-container">
                        <ul className="nav navbar-nav ml-auto">
                            <Link className="navbar-brand navbar-link-item" to="/branding">BRANDING</Link>
                            <Link className="navbar-brand navbar-link-item" to="/illustration">ILLUSTRATION</Link>
                            <Link className="navbar-brand navbar-link-item" to="/advertising">ADVERTISING</Link>
                            <Link className="navbar-brand navbar-link-item" to="/uxui" >UX/UI DESIGN</Link>
                            <Link className="navbar-brand navbar-link-item" to="/others" >OTHERS</Link>
                            <Link className="navbar-brand navbar-link-item-last" to="/info">INFO</Link>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <div style={bodyPadding}>
                            <Home />
                        </div>
                    </Route>
                    <Route path="/branding">
                        <div style={bodyPadding}>
                            {/* <Works /> */}
                        </div>
                    </Route>
                    <Route path="/illustration">
                        <div style={bodyPadding}>
                            {/* <About /> */}
                        </div>
                    </Route>
                    <Route path="/advertising">
                        <div style={bodyPadding}>
                            {/* <About /> */}
                        </div>
                    </Route>
                    <Route path="/uxui">
                        <div style={bodyPadding}>
                            {/* <About /> */}
                        </div>
                    </Route>
                    <Route path="/others">
                        <div style={bodyPadding}>
                            {/* <About /> */}
                        </div>
                    </Route>
                    <Route path="/info">
                        <div style={bodyPadding}>
                            <Info />
                        </div>
                    </Route>
                </Switch>
            </div>

        </BrowserRouter>


    );
}

export default AppRouter;