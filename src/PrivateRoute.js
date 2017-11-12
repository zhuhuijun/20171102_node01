import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import util from './common/utils';

export default class PrivateRoute extends Component {
    render() {
        let {component: Component, ...rest} = this.props;
       // console.info(Component, rest);
        return (
            <Route {...rest} render={(props) => (
                util.get("user").username ? <Component {...props}/> :
                    <Redirect to={'/login'}/>
            )}>
            </Route>
        )
    }
}