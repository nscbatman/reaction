var React=require('react');
var PanelSides=require('./PanelSides.jsx');
var PanelItem=require('./PanelItem.jsx');

var properties = [{"id":1,"heading":"New Visitors","desc":"1.5K","colors":"blue"},{"id":2,"heading":"Bounce Rate","desc":"50%","colors":"purple"},{"id":3,"heading":"Searches","desc":"28%","colors":"red"},{"id":4,"heading":"Traffic","desc":"140.5Kb","colors":"green"}];

var PanelRight=React.createClass({
    
    //The render function is the most important function because in a way it tells the browser what to render
    render: function()
    {
        
    var customStyle=
    {
    marginTop:50
    }
        
        var panelright = properties.map(function(data) {
        return (
            <PanelSides key={data.id} heading={data.heading} desc={data.desc} colorcode={data.colors}/>)
        });
                                        
        return (
            <div>
            <PanelItem heading="18 Degrees" desc="Paris" page="Right"/>
            {panelright}
            </div>
            );
    }
    
});

module.exports=PanelRight;