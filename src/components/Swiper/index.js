import React, {Component} from 'react';
import ReactSwipe from 'react-swipe'
import './index.less'
export default class Swiper extends Component {
    constructor(){
        super();
        this.state={index:0};
    }
    render() {
        let ops = {
            continuous: false,
            callback: (index) => {
                console.log(index);
                this.setState({index:index});
            }
        };
        return (
            <div className="swiper">
                {this.props.data.length ?
                    <ReactSwipe className="carousel" swipeOptions={ops}>
                        {this.props.data.map((item, index) => (
                            <div key={index}>
                                <img src={item}/>
                            </div>
                        ))}
                    </ReactSwipe> : <div>正在加载</div>}
                <div className="dots">
                    {this.props.data.map((item, index) => (
                        <span key={index} className={index===this.state.index?'active':''}></span>
                    ))}

                </div>
            </div>

        )
    }
}