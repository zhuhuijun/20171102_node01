import React, {Component} from 'react';
import './index.less'

export default class Detail extends Component {
    componentWillMount() {
        if (!this.props.location.state) {
            this.props.history.push('/');
        }
    }

    render() {
        //console.info(this.props.location.state);
        //没有此属性默认是undefined会报空
        let {price, url, lesson} = this.props.location.state||{};
        return (

            <div>
                <img src={url} alt=""/>
                <p>{lesson}</p>
                <strong>{price}</strong>
            </div>


        )
    }
}
