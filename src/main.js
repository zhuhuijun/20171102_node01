import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./containers/home/index";
import Lesson from "./containers/lesson/index";
import Profile from "./containers/profile/index";
import App from "./containers/App";
import './common/index.less';
import store from './redux/store';
import Detail from "./containers/Detail/index";

window._store = store;
import {Provider} from 'react-redux';

render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path={'/'} component={Home}></Route>
                    <Route path={'/Lesson'} component={Lesson}></Route>
                    <Route path={'/Profile'} component={Profile}></Route>
                    <Route path={'/Detail'} component={Detail}></Route>

                </Switch>
            </App>
        </Router></Provider>, document.getElementById('app'));