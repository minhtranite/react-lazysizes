'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var isEmpty = require('lodash.isempty');

require('lazysizes');

var LazySizes = React.createClass({
  displayName: 'LazySizes',

  propTypes: {
    src: React.PropTypes.string,
    dataSrc: React.PropTypes.string,
    dataSizes: React.PropTypes.string,
    dataSrcSet: React.PropTypes.string,
    className: React.PropTypes.string,
    iframe: React.PropTypes.bool,
    width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
    height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      src: 'data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==',
      dataSizes: 'auto',
      className: '',
      iframe: false
    };
  },
  componentWillMount: function componentWillMount() {
    if (this.props.iframe && isEmpty(this.props.dataSrc)) {
      console.log('Error: ', 'Prop dataSrc is required.');
    }
  },
  componentWillUpdate: function componentWillUpdate() {
    var lazyElement = React.findDOMNode(this.refs.lazyElement);
    if (lazyElement.classList.contains('lazyloaded')) {
      lazyElement.classList.remove('lazyloaded');
    }
  },
  componentDidUpdate: function componentDidUpdate() {
    var lazyElement = React.findDOMNode(this.refs.lazyElement);
    if (!lazyElement.classList.contains('lazyload')) {
      lazyElement.classList.add('lazyload');
    }
  },
  render: function render() {
    var _props = this.props;
    var src = _props.src;
    var dataSrc = _props.dataSrc;
    var dataSizes = _props.dataSizes;
    var dataSrcSet = _props.dataSrcSet;
    var className = _props.className;
    var iframe = _props.iframe;
    var width = _props.width;
    var height = _props.height;

    className = 'lazyload ' + className;
    if (iframe) {
      if (isEmpty(dataSrc)) {
        return null;
      }
      return React.createElement('iframe', _extends({}, this.props, { className: className, 'data-src': dataSrc,
        width: width, height: height, ref: 'lazyElement' }));
    } else {
      dataSrc = isEmpty(dataSrc) && isEmpty(dataSrcSet) ? src : dataSrc;
      return React.createElement('img', _extends({}, this.props, { className: className, src: src, 'data-src': dataSrc,
        'data-sizes': dataSizes, 'data-srcset': dataSrcSet, width: width,
        height: height, ref: 'lazyElement' }));
    }
  }
});

module.exports = LazySizes;