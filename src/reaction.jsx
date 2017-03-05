var React = require('react');
var ReactDOM = require('react-dom');
var Panel = require('./components/Panels.jsx');
var PanelBottom = require('./components/PanelBottom.jsx');
var PanelRight = require('./components/PanelRight.jsx');

ReactDOM.render(<Panel/>, document.getElementById('panelrow1'));
ReactDOM.render(<PanelBottom colorcode="blue"/>, document.getElementById('panelrow2'));
ReactDOM.render(<PanelBottom colorcode="purple"/>, document.getElementById('panelrow3'));
ReactDOM.render(<PanelRight/>, document.getElementById('panelrow4'));