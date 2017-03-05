var React=require('react');

var properties = [{"id":1,"heading":"15080","desc":"Shot Views"},{"id":2,"heading":"12000","desc":"Likes"},{"id":3,"heading":"5100","desc":"Comments"}];

var PanelFooter=React.createClass({
    
    //The render function is the most important function because in a way it tells the browser what to render
    render: function()
    {
        var customfooter={
            color:"white",
            textAlign:"center",
            backgroundColor:"black",
            border:"none",
            height:50
        }
        
        var customPanel={
            padding:5
        }
        
        var panelfooter = properties.map(function(data) {
        return (
            <div className="col-md-4 col-xs-4 col-sm-4">
                <div id={data.id} style={customfooter}  className="panel panel-default">
                    <div style={customPanel} className="panel-body">
                    <h4><b>{data.heading}</b></h4>
                    <p> {data.desc} </p>
                    </div>
            </div>
            </div>
        )});
        
            return (<div className="row">{panelfooter}</div>);
    }
    
});

module.exports=PanelFooter;