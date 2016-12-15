# cursor-direction
> cursor-direction on a DOM element.


## Install

```
$ npm install --save cursor-direction
```

## Demo

![demo](./demo.gif)

## Usage

```js
const cursorDirection = require('cursor-direction');

// Example
element.addEventListener('mouseover', function (event) {
    cursorDirection(event, this); //=> 'TOP | RIGHT | BOTTOM | LEFT'
}, false);
```


## API

### cursorDirection(event, domElement)

#### event

Type: `Event`

MouseEvent

#### domElement

Type: `DOMElement`<br>

Element of interest.


## License

MIT © [Hemanth.HM](https://h3manth.com)
