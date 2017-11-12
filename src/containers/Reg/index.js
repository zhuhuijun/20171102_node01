import React, {Component} from 'react';
import './index.less';
import profile from '../../common/images/profile.png';
import MHeader from "../../components/MHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';

class Reg extends Component {
    reg = () => {
        // console.info(this.username.value);
        //console.info(this.password.value);
        this.props.reg({
            username:this.username.value,
            password:this.password.value
        });
    };

    render() {
        return (
            <div className="login">
                <MHeader title="注册"/>
                <img src={profile} width={"60px"}/>
                <ul>
                    <li>
                        <input type="text" placeholder="用户名" ref={(element) => {
                            this.username = element;
                        }}/>
                    </li>
                    <li>
                        <input type="text" placeholder="密码" ref={(element) => {
                            this.password = element;
                        }}/>
                    </li>
                    <li>
                        <a  onClick={this.reg} className="reg_btn">注册</a>
                    </li>
                    <li>
                        {this.props.user.error}
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect(state => ({...state}), action)(Reg);