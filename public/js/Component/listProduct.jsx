var React= require('react');
var TopActionsComponent=require('./topAction.jsx');
var ProductsTable=require('./product.jsx');


var ListProduct=React.createClass({
	getInitialState: function() {
        return {
            products: []
        };
    },
 
    // on mount, fetch all products and stored them as this component's state
    componentDidMount: function() {
 
        this.serverRequest = $.get("http://localhost/reactDemo/api/product/read.php", function (products) {
            this.setState({
                products: products.records
            });
        }.bind(this));
    },
 
    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
 
    // render component on the page
    render: function() {
        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');
 
        return (
            <div className='overflow-hidden container'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
 
                <ProductsTable
                    products={filteredProducts}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});
module.exports=ListProduct;