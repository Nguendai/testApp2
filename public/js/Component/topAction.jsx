var React= require('react');
var TopActionsComponent = React.createClass({
    render: function(){
        return (
            <div>
                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal1">Open Modal</button>
                <div className="modal fade" id="myModal1" role="dialog">
                    <div className="modal-dialog"> 
                        <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title">Register</h4>
                            </div>
                            <div className="modal-body">
                                 <div className="col-lg-12">
                                    <form action="" method="POST">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control"  placeholder="Please Enter Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Age</label>
                                            <input className="form-control" type="number" min="3" max="150" placeholder="Please Enter Age" />
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input className="form-control" type="text"  placeholder="Please Enter Address" />
                                        </div>
                                        <div className="form-group">
                                            <label>Images</label>
                                            <input type="file" />
                                        </div>
                                        <button type="submit" className="btn btn-default">Save</button>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>

        );
    }
});
module.exports =TopActionsComponent;