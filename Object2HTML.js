/*
Copyright luojia@luojia.me
LGPL license
*/
function _Obj(t){return (typeof t == 'object');}

function Object2HTML(obj,func){
	let ele,o,e;
	if(typeof obj==='string' ||typeof obj==='number')return document.createTextNode(obj);//text node
	if(obj===null || typeof obj !=='object' || '_' in obj === false || typeof obj._ !== 'string' || obj._=='')return;//if it dont have a _ prop to specify a tag
	ele=document.createElement(obj._);
	//attributes
	if(_Obj(obj.attr))for(o in obj.attr)ele.setAttribute(o,obj.attr[o]);
	//properties
	if(_Obj(obj.prop))for(o in obj.prop)ele[o]=obj.prop[o];
	//events
	if(_Obj(obj.event))for(o in obj.event)ele.addEventListener(o,obj.event[o]);
	//childNodes
	if(_Obj(obj.child)&&obj.child.length>0)
		obj.child.forEach(o=>{
			e=(o instanceof Node)?o:Object2HTML(o,func);
			(e instanceof Node)&&ele.appendChild(e);
		});
	func&&func(ele);
	return ele;
}

export default Object2HTML;
export {Object2HTML}