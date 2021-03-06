import React, {Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import Swiper from "../../components/Swiper/index";
import './index.less'
import ScrollList from "../../components/ScrollList/index";
import util from '../../common/utils';
import {Link} from 'react-router-dom';

class Home extends Component {
    choseLesson = (type) => {
        console.info(type);
        ///只改变了类型没有改变数据
        this.props.setCurrentLesson(type);
        this.props.getLesson();
    }

    componentDidMount() {
        if (this.props.home.lesson.lessonList.length === 0) {
            this.props.getSlider();
            this.props.getLesson();
        }
        //让组件强制更新
        if (this.props.home.lesson.lessonList.length > 0) {
            this.forceUpdate();
            //将记录好的滚动条状态付给elelment元素

            this.refs.scroll.scrollTop = util.get('homeLocation');
        }

    }

    //组件将要销毁，记住滚动条的状态
    componentWillUnmount() {
        let scrollTop = this.refs.scroll.scrollTop;
        util.set('homeLocation', scrollTop);
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
                    <ScrollList element={this.refs.scroll}
                                isLoading={isLoading} hasMore={hasMore}
                                loadMore={this.loadMore}>
                        <Swiper data={this.props.home.sliders}/>

                        {/*获得课程列表*/}
                        <div className="lesson-list">
                            <h3><i className="iconfont icon-kecheng-copy"></i>全部课程</h3>
                            {lessonList.length ? lessonList.map((item, index) => (
                                <div key={index}>
                                    {/*跳转详情页并且带上数据*/}
                                    <Link to={{pathname:'/detail',state:item}}>
                                        <div className="lesson-list-item">
                                            <img src={item.url}/>
                                            <p>{item.lesson}</p>
                                            <span>{item.price}</span>
                                        </div>
                                    </Link>
                                </div>
                            )) : <div>正在加载</div>}
                        </div>
                      {/*  <button onClick={this.loadMore}>获取更多</button>*/}
                    </ScrollList>
                </div>

            </div>
        )
    }
}

//mapStateToProps,将redux的数据变成属性
//mapDispatchToProps 可以直接传一个函数对象
export default connect(state => ({...state}), action)(Home);