var React=require('react');

var ListItem=React.createClass({
    
    //The render function is the most important function because in a way it tells the browser what to render
    render: function()
    {
        return (
        <li>
        <h4>{this.props.ingredient}</h4>
        </li>
        );
    }
    
});

module.exports=ListItem;