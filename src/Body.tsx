import { Switch, Route } from "react-router"
import Branding from "./pages/branding/Branding"
import Editorial from "./pages/editorial/Editorial"
import Home from "./pages/home/Home"
import Illustration from "./pages/illustration/Illustration"
import Info from "./pages/info/Info"
import Others from "./pages/others/Others"
import UXUI from "./pages/uxui/UXUI"
import WorkDetail from "./pages/work-detail/WorkDetail"

const Body = () => {
    return <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path={`/works/:workURL`} component={WorkDetail} />
        <Route path="/branding" component={Branding} />
        <Route path="/illustration" component={Illustration} />
        <Route path="/editorial" component={Editorial} />
        <Route path="/uxui" component={UXUI} />
        <Route path="/others" component={Others} />
        <Route path="/info" component={Info} />
    </Switch>
}

export default Body