import React, {Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import Swiper from "../../components/Swiper/index";
import './index.less'
import ScrollList from "../../components/ScrollList/index";

class Home extends Component {
    choseLesson = (type) => {
        console.info(type);
        this.props.setCurrentLesson(type);
    }

    componentDidMount() {
        this.props.getSlider();
        this.props.getLesson();
    }

    loadMore = () => {
        this.props.getLesson();
    }

    render() {
        let {hasMore, isLoading, lessonList} = this.props.home.lesson;
        return (
            <div>
                {/*让HomeHeader中选择的值在home中获取到,把父亲级别的函数传给子级*/}
                <HomeHeader choseLesson={this.choseLesson}/>
                {/*{this.props.home.currentLesson}*/}
                <div className="content" ref="scroll">
                    <ScrollList element={this.refs.scroll}>
                        <Swiper data={this.props.home.sliders}/>

                        {/*获得课程列表*/}
                        <div className="lesson-list">
                            <h3><i className="iconfont icon-kecheng-copy"></i>全部课程</h3>
                            {lessonList.length ? lessonList.map((item, index) => (
                                <div key={index}>
                                    <div className="lesson-list-item">
                                        <img src={item.url}/>
                                        <p>{item.lesson}</p>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                            )) : <div>正在加载</div>}
                        </div>
                        <button onClick={this.loadMore}>获取更多</button>
                    </ScrollList>
                </div>

            </div>
        )
    }
}

//mapStateToProps,将redux的数据变成属性
//mapDispatchToProps 可以直接传一个函数对象
export default connect(state => ({...state}), action)(Home);