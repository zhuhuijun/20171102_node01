import React, {Component} from 'react';
//可以接受几个元素，
//element：标识滚动元素
//isLoading:是否正在加载
//hasMore:更多
//loadMore:加载的方法

export default class ScrollList extends Component {
    constructor() {
        super();
        this.state = {flag: false};
    }

    componentWillReceiveProps(nextProps) {//父组件刷新数据会触发子组件的数据更新
        //副组件没有发生变化不会触发子组件的这个钩子
        //console.log(this.props);
        if (nextProps.element && !this.state.flag) {

            nextProps.element.addEventListener('scroll', () => {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    let {scrollTop, offsetHeight, scrollHeight} = nextProps.element;
                    console.log(scrollTop, offsetHeight, scrollHeight);
                    if (scrollTop + offsetHeight + 30 > scrollHeight
                        && this.props.hasMore && !this.props.isLoading) {
                        this.props.loadMore();
                    }
                }, 50);
            });
            this.setState({flag: true});

        }
    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}