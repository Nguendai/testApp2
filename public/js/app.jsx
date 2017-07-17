var React=require('react');
var ReactDOM=require('react-dom');
var ListProduct=require('./Component/listProduct.jsx');
var Nav=React.createClass({
	render(){
		return(
			<nav className="navbar navbar-default">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">Brand</a>
			    </div>
			  </div>
			</nav>
			
			)

	}});



ReactDOM.render(
	<div>
	<Nav/>
	<ListProduct/>
	</div>
	, document.getElementById('app'));
