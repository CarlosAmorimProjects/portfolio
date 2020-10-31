import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main/main';
import Portfolio from "./pages/portfolio/App";
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Main} />
                <Route path = "/portfolio" component = {Portfolio} />
                <Route exact path = "/about" component = {About} />
                <Route exact path = "/contacts" component = {Contacts} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
