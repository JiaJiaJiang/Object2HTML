# Object2HTML

![logo](https://jiajiajiang.github.io/staticRepo/Object2HTML/logo.png)

用于把以下格式的对象转换成HTML元素

Convert the following formated object to a HTMLElement

``````
{_:'tagname',
	attr:{},//attributes
	prop:{},//properties
	event:{},//events
	child:[/*other object*/]//childNodes
}
``````

## Usage


## Object2HTML(object[,func]);

* object : the object to convert to HTML,or a string(will be convert to a text node)
* func : (optional)a function to be called after every HTMLElement created,the parameter is the element.

return the HTMLElement converted from the object.
