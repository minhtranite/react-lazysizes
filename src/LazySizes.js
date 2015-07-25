import React from 'react';

require('lazysizes');

class LazySizes extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
    dataSizes: React.PropTypes.string,
    dataSrc: React.PropTypes.string,
    dataSrcSet: React.PropTypes.string,
    className: React.PropTypes.string,
    iframe: React.PropTypes.bool,
    width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
    height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
  };
  static defaultProps = {
    src: 'data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==',
    dataSizes: 'auto',
    className: '',
    iframe: false
  };
  componentWillMount = () => {
    if (this.props.iframe && !this.props.dataSrc) {
      console.log('Warning: Prop dataSrc is required on iframe.');
    }
  };
  componentWillUpdate = () => {
    let lazyElement = React.findDOMNode(this.refs.lazyElement);
    if (lazyElement.classList.contains('lazyloaded')) {
      lazyElement.classList.remove('lazyloaded');
    }
  };
  componentDidUpdate = () => {
    let lazyElement = React.findDOMNode(this.refs.lazyElement);
    if (!lazyElement.classList.contains('lazyload')) {
      lazyElement.classList.add('lazyload');
    }
  };

  render() {
    let {src, dataSizes, dataSrc, dataSrcSet, className, iframe, width, height} = this.props;
    if (iframe) {
      return (
        <iframe {...this.props} src={dataSrc ? '' : src} data-src={dataSrc}
          width={width} height={height} className={'lazyload ' + className}
          ref='lazyElement'></iframe>
      );
    } else {
      return (
        <img {...this.props} src={src} data-src={dataSrc}
          data-sizes={dataSizes} data-srcset={dataSrcSet} width={width}
          height={height} className={'lazyload ' + className}
          ref='lazyElement'></img>
      );
    }
  }
}

export default LazySizes;
