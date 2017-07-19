'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var lazySizes = null;

if (canUseDOM) {
  lazySizes = require('lazysizes');
}

var LazySizes = (function (_React$Component) {
  _inherits(LazySizes, _React$Component);

  function LazySizes() {
    var _this = this;

    _classCallCheck(this, LazySizes);

    _get(Object.getPrototypeOf(LazySizes.prototype), 'constructor', this).apply(this, arguments);

    this.componentWillMount = function () {
      var _props = _this.props;
      var iframe = _props.iframe;
      var dataSrc = _props.dataSrc;

      if (iframe && !dataSrc) {
        (0, _invariant2['default'])(false, 'Prop dataSrc is required on iframe.');
      }
    };

    this.componentWillUpdate = function (nextProps) {
      var propsChanged = false;
      var _arr = ['src', 'dataSizes', 'dataSrc', 'dataSrcSet', 'className', 'iframe'];
      for (var _i = 0; _i < _arr.length; _i++) {
        var propName = _arr[_i];
        var prop = propName === 'dataSrcSet' ? _this.handleSrcSet(_this.props[propName]) : _this.props[propName];
        var nextProp = propName === 'dataSrcSet' ? _this.handleSrcSet(nextProps[propName]) : nextProps[propName];
        if (prop !== nextProp) {
          propsChanged = true;
          break;
        }
      }
      if (propsChanged && lazySizes) {
        var lazyElement = _reactDom2['default'].findDOMNode(_this);
        if (lazySizes.hC(lazyElement, 'lazyloaded')) {
          lazySizes.rC(lazyElement, 'lazyloaded');
        }
      }
    };

    this.componentDidUpdate = function () {
      if (!lazySizes) {
        return;
      }
      var lazyElement = _reactDom2['default'].findDOMNode(_this);
      if (!lazySizes.hC(lazyElement, 'lazyloaded') && !lazySizes.hC(lazyElement, 'lazyload')) {
        lazySizes.aC(lazyElement, 'lazyload');
      }
    };

    this.handleSrcSet = function (srcSet) {
      var result = srcSet;
      if (typeof srcSet === 'object') {
        if (!Array.isArray(srcSet)) {
          result = [];
          for (var variant in srcSet) {
            if (srcSet.hasOwnProperty(variant)) {
              result.push({
                variant: variant,
                src: srcSet[variant]
              });
            }
          }
        }
        result = result.map(function (item) {
          return item.src + ' ' + item.variant;
        }).join(', ');
      }
      return result;
    };
  }

  _createClass(LazySizes, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var src = _props2.src;
      var dataSizes = _props2.dataSizes;
      var dataSrc = _props2.dataSrc;
      var dataSrcSet = _props2.dataSrcSet;
      var className = _props2.className;
      var iframe = _props2.iframe;

      var other = _objectWithoutProperties(_props2, ['src', 'dataSizes', 'dataSrc', 'dataSrcSet', 'className', 'iframe']);

      dataSrcSet = this.handleSrcSet(dataSrcSet);
      className = (0, _classnames2['default'])(['lazyload', className]).trim();
      if (iframe) {
        return _react2['default'].createElement('iframe', _extends({}, other, {
          src: dataSrc ? '' : src,
          'data-src': dataSrc,
          className: className }));
      }
      return _react2['default'].createElement('img', _extends({}, other, {
        src: src,
        'data-src': dataSrc,
        'data-sizes': dataSizes,
        'data-srcset': dataSrcSet,
        className: className }));
    }
  }], [{
    key: 'propTypes',
    value: {
      src: _propTypes2['default'].string,
      dataSizes: _propTypes2['default'].string,
      dataSrc: _propTypes2['default'].string,
      dataSrcSet: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object, _propTypes2['default'].array]),
      className: _propTypes2['default'].string,
      iframe: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      src: 'data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==',
      dataSizes: 'auto',
      iframe: false
    },
    enumerable: true
  }]);

  return LazySizes;
})(_react2['default'].Component);

exports['default'] = LazySizes;
module.exports = exports['default'];