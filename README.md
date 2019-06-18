# Object2HTML

![logo](https://jiajiajiang.github.io/staticRepo/Object2HTML/logo.png)

Convert the following formated object to a HTMLElement

``````
{_:'tagname',
	attr:{},//attributes
	prop:{},//properties
	event:{},//events
	child:[/*other objects*/]//childNodes
}
``````

## Usage

```shell
npm i object2html
```

Then import or require it in your code depends on your environment:

```javascrip
import {Object2HTML} from 'path/to/object2html';
//or
const {Object2HTML} = require('object2html');
```



## Object2HTML(object[,func]);

* object : The object to be converted to dom element, or a string(will be converted to a text node).
* func : (optional) A function to be called after every element created, the parameter is the element.

Return the dom element.
