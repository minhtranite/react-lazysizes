var React = require('react');
var isEmpty = require('lodash.isempty');

require('lazysizes');

var LazySizes = React.createClass({
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
  getDefaultProps: function () {
    return {
      src: 'data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==',
      dataSizes: 'auto',
      className: '',
      iframe: false
    };
  },
  componentWillMount: function () {
    if (this.props.iframe && isEmpty(this.props.dataSrc)) {
      console.log('Error: ', 'Prop dataSrc is required.');
    }
  },
  render: function () {
    var {src, dataSrc, dataSizes, dataSrcSet, className, iframe, width, height} = this.props;
    className = 'lazyload ' + className;
    if (iframe) {
      if (isEmpty(dataSrc)) {
        return null;
      }
      return (
        <iframe {...this.props} className={className} data-src={dataSrc}
          width={width} height={height}></iframe>
      );
    } else {
      dataSrc = (isEmpty(dataSrc) && isEmpty(dataSrcSet)) ? src : dataSrc;
      return (
        <img {...this.props} className={className} src={src} data-src={dataSrc}
          data-sizes={dataSizes} data-srcset={dataSrcSet} width={width}
          height={height}></img>
      );
    }
  }
});

module.exports = LazySizes;
