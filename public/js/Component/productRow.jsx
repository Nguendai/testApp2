var React= require('react');
var ProductRow = React.createClass({
    render: function() {
    return (
        <tr>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.description}</td>
            <td>${parseFloat(this.props.product.price).toFixed(2)}</td>
            <td>{this.props.product.category_name}</td>
            <td>
                <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#myModal">Open Modal</button>
                 <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog"> 
                        <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title">Edit Member</h4>
                            </div>
                            <div className="modal-body">
                              
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>    
                </div>
                <a
                    onClick={() => this.props.changeAppMode('delete', this.props.product.id)}
                    className='btn btn-danger'> Delete
                </a>
            </td>
        </tr>
        )
    }
});
module.exports=ProductRow;