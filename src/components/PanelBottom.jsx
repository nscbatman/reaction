var React=require('react');
var PanelFooter=require('./PanelFooter.jsx');

var PanelBottom=React.createClass({
    
    //The render function is the most important function because in a way it tells the browser what to render
    render: function()
    {
        
        var bodyStyle={
        height:150    
        }
        
        var footerStyle={
        backgroundColor:"black"    
        }
        
        if(this.props.colorcode)
            {
                bodyStyle.backgroundColor=this.props.colorcode
            }
        
        return ( <div className="col-sm-12">
                <div className="panel panel-default">
                <div style={bodyStyle} className="panel-body">
                </div>
                <div style={footerStyle} className="panel-footer">
            <PanelFooter/>
                </div>
                    </div>
                </div>
        );
    }
    
});

module.exports=PanelBottom;