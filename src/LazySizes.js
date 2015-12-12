import React from 'react';
import ReactDOM from 'react-dom';
import Invariant from 'invariant';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

if (canUseDOM) {
  require('lazysizes');
}

class LazySizes extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
    dataSizes: React.PropTypes.string,
    dataSrc: React.PropTypes.string,
    dataSrcSet: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object, React.PropTypes.array]),
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
      Invariant(false, 'Prop dataSrc is required on iframe.');
    }
  };

  componentWillUpdate = (nextProps) => {
    let propsChanged = false;
    for (let propName of ['src', 'dataSizes', 'dataSrc', 'dataSrcSet', 'className', 'iframe', 'width', 'height']) {
      let prop = propName === 'dataSrcSet' ? this.handleSrcSet(this.props[propName]) : this.props[propName];
      let nextProp = propName === 'dataSrcSet' ? this.handleSrcSet(nextProps[propName]) : nextProps[propName];
      if (prop !== nextProp) {
        propsChanged = true;
        break;
      }
    }
    if (propsChanged) {
      let lazyElement = ReactDOM.findDOMNode((this.refs.lazyElement));
      if (lazyElement.classList.contains('lazyloaded')) {
        lazyElement.classList.remove('lazyloaded');
      }
    }
  };

  componentDidUpdate = () => {
    let lazyElement = ReactDOM.findDOMNode((this.refs.lazyElement));
    if (!lazyElement.classList.contains('lazyloaded') && !lazyElement.classList.contains('lazyload')) {
      lazyElement.classList.add('lazyload');
    }
  };

  handleSrcSet = (srcSet) => {
    let result = srcSet;
    if (typeof srcSet === 'object') {
      if (!Array.isArray(srcSet)) {
        result = [];
        for (let variant in srcSet) {
          result.push({
            variant: variant,
            src: srcSet[variant]
          });
        }
      }
      result = result.map(item => {
        return `${item.src} ${item.variant}`;
      }).join(', ');
    }
    return result;
  };

  render() {
    let {src, dataSizes, dataSrc, dataSrcSet, className, iframe, width, height} = this.props;
    dataSrcSet = this.handleSrcSet(dataSrcSet);
    if (iframe) {
      return (
        <iframe {...this.props} src={dataSrc ? '' : src}
          data-src={dataSrc}
          width={width}
          height={height}
          className={'lazyload ' + className}
          ref='lazyElement'></iframe>
      );
    }
    return (
      <img {...this.props} src={src}
        data-src={dataSrc}
        data-sizes={dataSizes}
        data-srcset={dataSrcSet}
        width={width}
        height={height}
        className={'lazyload ' + className}
        ref='lazyElement'/>
    );
  }
}

export default LazySizes;
