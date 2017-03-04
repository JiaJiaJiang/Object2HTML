/*
Copyright luojia@luojia.me
LGPL license
*/

function Object2HTML(obj,func){
	let ele,o,e;
	if(typeof obj==='string')return document.createTextNode(obj);//text node
	if('_' in obj === false)return;//if it dont have a _ prop to specify a tag
	if(typeof obj._ !== 'string' || obj._=='')return;
	ele=document.createElement(obj._);
	//attributes
	if(typeof obj.attr === 'object'){
		for(o in obj.attr){
			ele.setAttribute(o,obj.attr[o]);
		}
	}
	//properties
	if(typeof obj.prop === 'object'){
		for(o in obj.prop){
			ele[o]=obj.prop[o];
		}
	}
	//events
	if(typeof obj.event === 'object'){
		for(o in obj.event){
			ele.addEventListener(o,obj.event[o]);
		}
	}
	//childNodes
	if(typeof obj.child === 'object' && obj.child.length>0){
		for(o of obj.child){
			e=(o instanceof Node)?o:Object2HTML(o,func);
			(e instanceof Node)&&ele.appendChild(e);
		}
	}
	func&&func(ele);
	return ele;
}

export default Object2HTML;
export {Object2HTML}