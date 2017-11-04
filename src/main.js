import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import  Home from "./containers/home/index";
import  Lesson from "./containers/lesson/index";
import  Profile from "./containers/profile/index";

render(<Router>
    <Switch>
        <Route exact path={'/'} component={Home}></Route>
        <Route path={'/Lesson'} component={Lesson}></Route>
        <Route path={'/Profile'} component={Profile}></Route>


    </Switch>
</Router>, document.getElementById('app'));