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
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";
//私有
import PrivateRoute from './PrivateRoute';
window._store = store;
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Switch>
                    <Route exact path={'/'} component={Home}></Route>
                    <PrivateRoute path={'/Lesson'} component={Lesson}></PrivateRoute>
                    <Route path={'/Profile'} component={Profile} />
                    <Route path={'/Detail'} component={Detail}></Route>
                    <Route path={'/Login'} component={Login}></Route>
                    <Route path={'/Reg'} component={Reg}></Route>
                </Switch>
            </App>
        </ConnectedRouter>
    </Provider>, document.getElementById('app'));