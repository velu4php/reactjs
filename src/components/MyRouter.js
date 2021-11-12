import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import App from "../App";
class MyRouter extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <App />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default MyRouter;