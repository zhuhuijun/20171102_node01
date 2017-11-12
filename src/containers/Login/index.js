import React, {Component} from 'react';
import './index.less';
import profile from '../../common/images/profile.png';
import MHeader from "../../components/MHeader/index";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';

class Login extends Component {
    constructor() {
        super();
        this.state = {username: '', password: ''};
    }

    componentWillMount() {
        this.props.validate();
    }

    login = () => {
        this.props.login(this.state);
    }

    render() {
        return (
            <div className="login">
                <MHeader title="登录"/>
                <img src={profile} width={"60px"}/>
                <ul>
                    <li>
                        <input type="text" placeholder="用户名" value={this.state.username}
                               onChange={(e) => {
                                   this.setState({username: e.target.value})
                               }}/>
                    </li>
                    <li>
                        <input type="text" placeholder="密码" value={this.state.password}
                               onChange={(e) => {
                                   this.setState({password: e.target.value})
                               }}/>
                    </li>
                    <li>
                        <Link to={'./reg'}>前往注册</Link>
                    </li>
                    <li>
                        <a className="login_btn" onClick={this.login}>登录</a>
                    </li>
                    <li>
                        {this.props.user.error}
                    </li>
                </ul>
            </div>
        )
    }
};
export default connect(state => ({...state}), action)(Login);