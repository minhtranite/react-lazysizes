'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

if (process.env.BROWSER) {
  require('lazysizes');
}

var LazySizes = (function (_React$Component) {
  _inherits(LazySizes, _React$Component);

  function LazySizes() {
    var _this = this;

    _classCallCheck(this, LazySizes);

    _get(Object.getPrototypeOf(LazySizes.prototype), 'constructor', this).apply(this, arguments);

    this.componentWillMount = function () {
      if (_this.props.iframe && !_this.props.dataSrc) {
        (0, _invariant2['default'])(false, 'Prop dataSrc is required on iframe.');
      }
    };

    this.componentWillUpdate = function (nextProps) {
      var propsChanged = false;
      var _arr = ['src', 'dataSizes', 'dataSrc', 'dataSrcSet', 'className', 'iframe', 'width', 'height'];
      for (var _i = 0; _i < _arr.length; _i++) {
        var propName = _arr[_i];
        if (_this.props[propName] !== nextProps[propName]) {
          propsChanged = true;
          break;
        }
      }
      if (propsChanged) {
        var lazyElement = _reactDom2['default'].findDOMNode(_this.refs.lazyElement);
        if (lazyElement.classList.contains('lazyloaded')) {
          lazyElement.classList.remove('lazyloaded');
        }
      }
    };

    this.componentDidUpdate = function () {
      var lazyElement = _reactDom2['default'].findDOMNode(_this.refs.lazyElement);
      if (!lazyElement.classList.contains('lazyloaded') && !lazyElement.classList.contains('lazyload')) {
        lazyElement.classList.add('lazyload');
      }
    };
  }

  _createClass(LazySizes, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var src = _props.src;
      var dataSizes = _props.dataSizes;
      var dataSrc = _props.dataSrc;
      var dataSrcSet = _props.dataSrcSet;
      var className = _props.className;
      var iframe = _props.iframe;
      var width = _props.width;
      var height = _props.height;

      if (iframe) {
        return _react2['default'].createElement('iframe', _extends({}, this.props, { src: dataSrc ? '' : src, 'data-src': dataSrc,
          width: width, height: height, className: 'lazyload ' + className,
          ref: 'lazyElement' }));
      }
      return _react2['default'].createElement('img', _extends({}, this.props, { src: src, 'data-src': dataSrc,
        'data-sizes': dataSizes, 'data-srcset': dataSrcSet, width: width,
        height: height, className: 'lazyload ' + className,
        ref: 'lazyElement' }));
    }
  }], [{
    key: 'propTypes',
    value: {
      src: _react2['default'].PropTypes.string,
      dataSizes: _react2['default'].PropTypes.string,
      dataSrc: _react2['default'].PropTypes.string,
      dataSrcSet: _react2['default'].PropTypes.string,
      className: _react2['default'].PropTypes.string,
      iframe: _react2['default'].PropTypes.bool,
      width: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]).isRequired,
      height: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]).isRequired
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      src: 'data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==',
      dataSizes: 'auto',
      className: '',
      iframe: false
    },
    enumerable: true
  }]);

  return LazySizes;
})(_react2['default'].Component);

exports['default'] = LazySizes;
module.exports = exports['default'];