var React=require('react');
var PanelItem=require('./PanelItem.jsx');

var properties = [{"id":1,"heading":"20","desc":"New followers added for the month"},{"id":2,"heading":"$1250","desc":"Average Monthly Income"},{"id":3,"heading":"$13865","desc":"Yearly Income Goal"}];

var Panel=React.createClass({
    
    //The render function is the most important function because in a way it tells the browser what to render
    render: function()
    {
        
    var customStyle=
    {
    marginTop:50
    }
        
        var panelItems = properties.map(function(data) {
        return (
            <PanelItem key={data.id} heading={data.heading} desc={data.desc}/>)
        });
                                        
        return (<div>{panelItems}</div>); 
    }
    
});

module.exports=Panel;