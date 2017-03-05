var React=require('react');

var PanelSides=React.createClass({
    
    //The render function is the most important function because in a way it tells the browser what to render
    render: function()
    {
        var bodyStyle={
            height:65,
            color:"white"
        }
        
        var footerStyle={
            height:50,
            backgroundColor:"white"
        }
        
        var paraStyle={
            fontSize:10
        }
        
        if(this.props.colorcode)
            {
                bodyStyle.backgroundColor=this.props.colorcode
            }
        
                return ( <div className="col-sm-12">
                <div className="panel panel-default">
                <div style={bodyStyle} className="panel-body">
                    <p style={paraStyle}>{this.props.heading}</p>
                    <h4><b> {this.props.desc} </b></h4>
                </div>
                <div style={footerStyle} className="panel-footer">
                </div>
                    </div>
                </div>
        );
    }
    
});

module.exports=PanelSides;