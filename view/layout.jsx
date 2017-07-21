var React = require('react');
var Link = require('react-router').Link;
var connect = require('react-redux').connect;

var layout = React.createClass({
	_handleClick: function() {
		alert('lalalal');
	},
	render: function () {
		var custom = this.props.custom;
		return (
			<html>
				<head>
					<title>ssr</title>
					<link rel='stylesheet' href='/style.css' />
				</head>
				<body>
					<h1>{custom.title}</h1>
					<p>just for test</p>
					<button onClick={this._handleClick}>click!</button>
					{this.props.children}
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>

						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
					<script dangerouslySetInnerHTML={{
						__html: 'window.PROPS=' + JSON.stringify(custom)
					}} />
					<script src='/bundle.js' />
				</body>
			</html>
		)
	}
})

var wrapper = connect(
	function(state) {
		return {custom: state};
	}
)

module.exports = wrapper(layout);