import React from "react";
import { Switch, Route } from "react-router-dom";
import Authenticate from "./component/Authenticate";
import Panel from "./component/Panel";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Authenticate />
                </Route>
                <Route path="/dashboard">
                    <Panel />
                </Route>
            </Switch>
        </>
    );
}

export default App;
