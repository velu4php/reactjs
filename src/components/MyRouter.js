import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Learn from "./Learn";
import LearnAnother from "./LearnAnother";
import App from "../App";
class MyRouter extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <App />
                    </Route>
                    <Route path="/learn">
                        <Learn />
                    </Route>
                    <Route path="/learn/Another">
                        <LearnAnother />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default MyRouter;