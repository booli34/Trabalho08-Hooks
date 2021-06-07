
import React from "react";
import "./Content.css";

import { Switch, Route } from "react-router-dom";
import Hooks from "../../views/Contents/Hooks";
import UseState from "../../views/Contents/UseState";
import NotFound from "../../views/Contents/NotFound";

const Content = (props) => (
    <main className='Content'>
        <Switch>
            <Route exact path="/">
                <Hooks />
            </Route>

            <Route path="/UseState">
                <UseState />
            </Route>

            <Route path='*'>
                <NotFound />
            </Route>
        </Switch>
    </main>
);

export default Content;