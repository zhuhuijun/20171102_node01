/**
 * Created by Lenovo on 2017/11/5.
 */
import React,{Component} from 'react';
import Tab from "../components/Tab/index";

export default class  App extends Component{
   render(){
	return (
	<nav>
		{this.props.children}
		<Tab/>
	</nav>
	)
   }
}