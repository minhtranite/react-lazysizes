# React LazySizes

LazySizes component for ReactJS base on [lazysizes](https://github.com/aFarkas/lazysizes)

**Note:** If you're still using React 0.13, please continue to use `react-lazysizes@0.2.x`.

## Installation

### NPM

```bash
npm install --save react-lazysizes
```

### Bower

```bash
bower install --save react-lazysizes
```

## Usage

### JS

```js
var LazySizes = require('react-lazysizes');

<LazySizes width='1920' height='1024' dataSrc='http://lorempixel.com/1920/1024/sports/1'/>
```

### UMD

```html
<script src="path/to/react-lazysizes/dist/react-lazysizes.js"></script>
```

```js
//...
var LazySizes = window.ReactLazysizes;
//...
```

Example [here](http://codepen.io/vn38minhtran/pen/YyLZLe/)

## Props

| Name | Type | Default |
|------|------|---------|
| src | string | 'data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==' |
| dataSrc | string | |
| dataSizes | string | 'auto' |
| dataSrcSet | [string, object, array] |  |
| className | string | '' |
| iframe | bool | false |
| width | string or number | |
| height | string or number |  |

More info see [lazysizes](https://github.com/aFarkas/lazysizes) api.

## Example

View [demo](http://vn38minhtran.github.io/react-lazysizes) or example folder.

