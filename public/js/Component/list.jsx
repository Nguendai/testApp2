var React=require('react');
var Node=require('./node.jsx');
var NodeForm= require('./nodeform.jsx');
var List =React.createClass({
	del(index){
		this.state.mang.splice(index,1);
		this.setState(this.state);
	},
	add(text){
		this.state.mang.push(text);
		this.setState(this.state.mang);
	},
	getInitialState(){
		return{mang:["Androi","ios","node js"]}
	},
	render(){
		return (
			<div>
				<NodeForm addNode={this.add}/>
				{this.state.mang.map((e,i)  =>{
					return <Node key={i} remove={this.del} index={i} >{e}</Node>
				})}
			</div>
			)
	}
});
module.exports=List;