import React, {Component} from 'react';
//可以接受几个元素，
//element：标识滚动元素
//isLoading:是否正在加载
//hasMore:更多
//loadMore:加载的方法

export default class ScrollList extends Component {
    render() {
        return (
          <div>{this.props.children}</div>
        )
    }
}