var React=require('react');

var PanelItem=React.createClass({
    
    //The render function is the most important function because in a way it tells the browser what to render
    render: function()
    {   
        
        var customStyle={
            textAlign:"center",
            backgroundColor:"orange",
            color:"white",
            height:110
        }
        
        if(this.props.page)
        {
        return (
            <div className="col-md-12">
                  <div style={customStyle}  className="panel panel-default">
                <div className="panel-body">
                    <h4><b>{this.props.heading}</b></h4>
                    <p> {this.props.desc} </p>
                </div>
            </div> 
            </div>
        )}
        
            return (
            <div className="col-md-4">
            <div className="panel panel-default">
                <div className="panel-body">
                    <h4><b>{this.props.heading}</b></h4>
                    <p> {this.props.desc} </p>
                </div>
            </div> 
        </div>
            );
        
    }
    
});

module.exports=PanelItem;