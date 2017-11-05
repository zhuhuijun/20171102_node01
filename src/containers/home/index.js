import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
 class Home extends Component {
    choseLesson=(type)=>{
        console.info(type);
        this.props.setCurrentLesson(type);
    }
    render() {
        return (
            <div>
                {/*让homeheader中选择的值在home中获取到,把父亲级别的函数传给子级*/}
                <HomeHeader choseLesson ={this.choseLesson}/>
                {this.props.home.currentLesson}
                <div className="content"></div>
            </div>
        )
    }
}
//mapStateToProps,将redux的数据变成属性
//mapDispatchToProps 可以直接传一个函数对象
export default connect(state=>({...state}),action)(Home);