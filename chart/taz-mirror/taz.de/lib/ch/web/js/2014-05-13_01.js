/* combined javascript for web channel */
/* ----- filOtaz_de.conf.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )       window.filOtaz_de = new Object;
if( ! window.filOtaz_de.conf )        //don't interfere!
window.filOtaz_de.conf = {
	
	canonical :	new function() {	var c = this;
		this.protocol =	'http';
		this.sub =	'www';
		this.domain =	'taz.de';
		this.path =	'/';
		this.host =	{  toString : function(){ return c.sub +'.'+ c.domain; }  };
		this.base =	{  toString : function(){ return c.protocol +'://'+ c.host; }  };
		this.toString =	function(){  return c.base + c.path;  };
		} ,


	flattr : {

		common : {		
			uid		: '10338' ,					// flatter user ID
			button		: 'compact' ,					// button style: 'compact' or none for the default
			url		: 'http://www.taz.de' ,
			title		: 'taz.de' ,					
			description	: 'taz, die tageszeitung - online News' ,
			tags		: 'News' ,
			category	: 'text' ,	// content type: text / images, ... see https://flattr.com/support/api
			language	: 'de_DE' ,
			hidden		: '0'		// '1' to hide things on flattr.com
			} ,

		api	: {
			protocol	: document.location.protocol ,
			domain		: 'api.flattr.com' ,
			base		: '/js/' ,
			version		: '0.5.0' ,
			file		: 'load.js' ,
			toString	: function(){  return this.protocol +'//'+ this.domain + this.base + this.version +'/'+ this.file;  }
			}

		} ,

	banking : {
		bridge    : 'Sch&ouml;n, dass Ihnen unsere Seite gef&auml;llt.',
		caption		:	'Um unsere Arbeit zu honorieren, k&ouml;nnen Sie folgende Bankverbindung verwenden:' ,
		domestic	:	'die tageszeitung | Kto-Nr 100700104<br />BLZ 43060967 GLS Bank' ,
		reference	:	'Verwendungszweck "taz-zahl-ich"' ,
		abroad		:	'IBAN DE81430609670100700104<br />BIC GENODEM1GLS'
		}


        }; //window.filOtaz_de.conf




/* ----- jquery-1.4.2.min.js ------------------------------------------------------------------- */

/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);


/* ----- jquery.cookie.js ------------------------------------------------------------------- */

/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			if (decode(parts.shift()) === key) {
				var cookie = decode(parts.join('='));
				return config.json ? JSON.parse(cookie) : cookie;
			}
		}

		return null;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);


/* ----- jquery.filOtaz_de_hashchange.js ------------------------------------------------------------------- */

/*	inspired and in parts copied from "Cowboy" Ben Alman's (c) 2010
	https://raw.github.com/cowboy/jquery-hashchange/v1.3/jquery.ba-hashchange.js
	dual licensed under the MIT and GPL licenses: http://benalman.com/about/license/
*/
(function(){

	// +++ "shortcut" binding and triggering, jQuery-style
	if( $.hashchange ) return;	// don't interfere

	$.fn[ 'hashchange' ] = function( fn ) {
		return fn ? this.bind( 'hashchange', fn ) : this.trigger( 'hashchange' );
		};


	// +++ hashchange event
	if( $.event.special[ 'hashchange' ] ) return;	// don't interfere

	// stop here if natively supported
	if ( 'onhashchange' in window && ( document.documentMode === undefined || document.documentMode > 7 ) ) return;
		// IE8 running in IE7 compatibility mode reports true for 'onhashchange' in window, even
		// though the event isn't supported, so also test document.documentMode

	// polling loop for legacy browsers
	var timeout_id, hash;
	var poll = function() {
		if( window.location.hash != hash ) {
			hash = window.location.hash;
			$(window).trigger( 'hashchange' );
			}
		timeout_id = setTimeout( poll, 50 );
		};
	$.event.special[ 'hashchange' ] = {
		setup		: function() {		// Called only when the first 'hashchange' event is bound
			timeout_id || poll();
			},
		teardown	: function() {		// Called only when the last 'hashchange' event is unbound
			timeout_id && clearTimeout( timeout_id );
			timeout_id = undefined;
			}
		};

	})();


/* ----- jquery.overlay.js ------------------------------------------------------------------- */

/*
 * jQuery Simple Overlay
 * A jQuery Plugin for creating a simple, customizable overlay. Supports multiple instances,
 * custom callbacks, hide on click, glossy effect, and more.
 *
 * Copyright 2011 Tom McFarlin, http://tommcfarlin.com, @moretom
 * Released under the MIT License
 *
 * http://moreco.de/simple-overlay
 */

(function($) {

	$.fn.overlay = function(options) {

    var opts = $.extend({}, $.fn.overlay.defaults, options);
		return this.each(function(evt) {
      if(!$(this).hasClass('overlay-trigger')) {
        show(create($(this), opts), opts);
      }
		});
    
	}; // end overlay

  /*--------------------------------------------------*
   * helper functions
   *--------------------------------------------------*/
  
  /**
   * Creates the overlay element, applies the styles as specified in the 
   * options, and sets up the event handlers for closing the overlay.
   *
   * opts The plugin's array options.
   */
  function create($src, opts) {
  
    // prevents adding multiple overlays to a container
    $src.addClass('overlay-trigger');
  
    // create the overlay and add it to the dom
    var iTop = 0;
    if($.browser.mozilla && opts.container.toString() === 'body') { 
      iTop = $('html').scrollTop();
    } else {
      iTop = $(opts.container).scrollTop();
    } // end if/else
    
    var overlay = $('<div></div>')
      .addClass('overlay')
      .css({
        background: opts.color,
        opacity: opts.opacity,
        top: opts.container.toString() === 'body' ? iTop : $(opts.container).offset().top,
        left: $(opts.container).offset().left,
        width: opts.container === 'body' ? '100%' : $(opts.container).width(),
        height: opts.container === 'body' ? '100%' : $(opts.container).height(),
	position: opts.show == 'viewport' ? 'absolute' : 'fixed',
        /* position: 'fixed', */
        zIndex: 1000,
        display: 'none',
	overflow: opts.show == 'viewport' ? 'hidden' : 'visible'
        /*overflow: 'hidden'*/
      });

    // if specified, apply the gloss
    if(opts.glossy) {
      applyGloss(opts, overlay);     
    } // end if
    
    // setup the event handlers for closing the overlay
    if(opts.closeOnClick) {
      $(overlay).click(function() {
        close(overlay, opts);
        $src.removeClass('overlay-trigger');
      });
    } // end if

    
    // finally add the overlay
    $(opts.container).append(overlay);
   
    return overlay;
    
  } // end createOverlay
  
  /**
   * Displays the overlay using the effect specified in the options. Optionally
   * triggers the onShow callback function.
   *
   * opts The plugin's array options.
   */
  function show(overlay, opts) {
    
    switch(opts.effect.toString().toLowerCase()) {
    
      case 'fade':
        $(overlay).fadeIn('fast', opts.onShow);
        break;
      
      case 'slide':
        $(overlay).slideDown('fast', opts.onShow);
        break;
        
      default:
        $(overlay).show(opts.onShow);
        break;
    
    } // end switch/case
    
   $(opts.container).css('overflow', 'hidden');
   if (opts.show == 'viewport') { 
   	$(opts.container).css('overflow', 'hidden');
   } else { 
   	$(opts.container).css('overflow', 'scroll');
   }
    
  } // end show
  
  /**
   * Hides the overlay using the effect specified in the options. Optionally
   * triggers the onHide callback function.
   *
   * opts The plugin's array options.
   */
  function close(overlay, opts) {
    
    switch(opts.effect.toString().toLowerCase()) {
        
      case 'fade':
        $(overlay).fadeOut('fast', function() {
          if(opts.onHide) {
            opts.onHide();
          }
          $(this).remove();
        });
        break;
            
      case 'slide':
        $(overlay).slideUp('fast', function() {
          if(opts.onHide) {
            opts.onHide();
          }
          $(this).remove();
        });
        break;
            
      default:
        $(overlay).hide();
        if(opts.onHide) {
          opts.onHide();
        }
        $(overlay).remove();
        break;
            
    } // end switch/case
    
    $(opts.container).css('overflow', 'auto');
    
  } // end close
  
  /**
   * Adds the gloss effect to the overlay.
   *
   * opts     The plugin's options array
   * overlay  The overlay on which the gloss will be applied
   */
  function applyGloss(opts, overlay) {
  
    var gloss = $('<div></div>');
    $(gloss).css({
      background: '#fff',
      opacity: 0.2,
      width: '200%',
      height: '100%',
      position: 'absolute',
      zIndex: 1001,
      msTransform: 'rotate(45deg)',
      webkitTransform: 'rotate(45deg)',
      oTransform: 'rotate(45deg)'
    });
      
    // at the time of development, mozTransform didn't work with >= jQuery 1.5
    if($.browser.mozilla) {
     $(gloss).css('-moz-transform', 'rotate(45deg');
    } // end if
     
    $(overlay).append(gloss);
    
  } // end applyGloss
 
  /*--------------------------------------------------*
   * default settings
   *--------------------------------------------------*/
   
	$.fn.overlay.defaults = {
    color: '#000',
    opacity: 0.5,
    effect: 'none',
    onShow: null,
    onHide: null,
    closeOnClick: false,
    glossy: false,
    container: 'body'
	}; // end defaults

})(jQuery);


/* ----- jquery.qtip.min.js ------------------------------------------------------------------- */

/*
* qTip2 - Pretty powerful tooltips
* http://craigsworks.com/projects/qtip2/
*
* Version: 2.0.0pre
* Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Fri Jan 28 11:38:45 2011 +0000
*/

"use strict"; // Enable ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
/*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global window: false, jQuery: false */

(function(a,M,T){function $(){var c=M.console;return c&&(c.error||c.log||a.noop).apply(c,arguments)}function W(c){var b;if(!c||"object"!==typeof c)return o;if("object"!==typeof c.metadata)c.metadata={type:c.metadata};if("content"in c){if("object"!==typeof c.content||c.content.jquery)c.content={text:c.content};b=c.content.text||o;if(!a.isFunction(b)&&(!b&&!b.attr||b.length<1||"object"===typeof b&&!b.jquery))c.content.text=o;if("title"in c.content){if("object"!==typeof c.content.title)c.content.title=
{text:c.content.title};b=c.content.title.text||o;if(!a.isFunction(b)&&(!b&&!b.attr||b.length<1||"object"===typeof b&&!b.jquery))c.content.title.text=o}}if("position"in c)if("object"!==typeof c.position)c.position={my:c.position,at:c.position};if("show"in c)if("object"!==typeof c.show)c.show=c.show.jquery?{target:c.show}:{event:c.show};if("hide"in c)if("object"!==typeof c.hide)c.hide=c.hide.jquery?{target:c.hide}:{event:c.hide};if("style"in c)if("object"!==typeof c.style)c.style={classes:c.style};
a.each(a.fn.qtip.plugins,function(){this.sanitize&&this.sanitize(c)});return c}function aa(c,b,i,k){function q(e){var f,j=e.split("."),s=b[j[0]];for(e=1;e<j.length;e+=1){f=s[j[e]];if(typeof f==="object"&&!f.jquery&&!f.precedance)s=s[j[e]];else break}return j[e]!==T?[s,j[e]]:[b,j[0]]}function h(e,f){var j={left:0,top:0},s=!a.fn.qtip.plugins.iOS,p,u;if(f){if(f.offsetParent!==v){j=h(f);j.left*=-1;j.top*=-1;j.left+=parseInt(a.css(f,"margin-left"),10)||0;j.top+=parseInt(a.css(f,"margin-top"),10)||0}else{j.left+=
v.scrollLeft;j.top+=v.scrollTop}if(f!==v)if(a.css(f,"overflow")!=="visible"){j.left-=f.scrollLeft;j.top-=f.scrollTop}}if(e.offsetParent){do{p=e.offsetParent;u=p===f;j.left+=e.offsetLeft-(s&&p&&!u?p.scrollLeft:0);j.top+=e.offsetTop-(s&&p&&!u?p.scrollTop:0)}while(e=p)}return j}function m(){return g.css("left")!==ba&&g.css("visibility")!=="hidden"}function x(){var e=d.elements,f=b.style.widget;g.toggleClass(Z,f);e.content.toggleClass(Z+"-content",f);e.titlebar&&e.titlebar.toggleClass(Z+"-header",f);
e.button&&e.button.toggleClass(N+"-icon",!f)}function n(){var e=d.elements;if(e.title){e.titlebar.remove();e.titlebar=e.title=e.button=E;d.reposition()}}function z(){var e=d.elements,f=b.content.title.button;e.button&&e.button.remove();e.button=f.jquery?f:a("<a />",{"class":"ui-state-default "+(b.style.widget?"":N+"-icon"),title:"Close tooltip","aria-label":"Close tooltip"}).prepend(a("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"}));e.button.appendTo(e.titlebar).attr("role","button").hover(function(j){a(this).toggleClass("ui-state-hover",
j.type==="mouseenter")}).click(function(j){g.hasClass(S)||d.hide(j);return o}).bind("mousedown keydown mouseup keyup mouseout",function(j){a(this).toggleClass("ui-state-active ui-state-focus",j.type.substr(-4)==="down")});d.redraw()}function y(){var e=d.elements,f=C+"-title";e.titlebar&&n();e.titlebar=a("<div />",{"class":N+"-titlebar "+(b.style.widget?"ui-widget-header":"")}).append(e.title=a("<div />",{id:f,"class":N+"-title","aria-atomic":w})).insertBefore(e.content);if(b.content.title.button)z();
else d.rendered===w&&d.redraw()}function A(e){var f=d.elements.title;if(!d.rendered||!e)return o;if(a.isFunction(e))e=e.call(c,d)||"";e.jquery&&e.length>0?f.empty().append(e.css({display:"block"})):f.html(e);d.redraw();d.rendered===w&&d.reposition(d.cache.event)}function O(e){var f=d.elements.content;if(!d.rendered||!e)return o;if(a.isFunction(e))e=e.call(c,d)||"";e.jquery&&e.length>0?f.empty().append(e.css({display:"block"})):f.html(e);g.queue("fx",function(j){function s(u){p=p.not(u);if(p.length===
0){d.redraw();d.rendered===w&&d.reposition(d.cache.event);j()}}var p=f.find("img:not([height]):not([width])");p.each(function(u,G){var K=["abort","error","load","unload",""].join(".qtip-image ");a(this).bind(K,function(){clearTimeout(d.timers.img[u]);s(this)});(function B(){if(G.height)return s(G);d.timers.img[u]=setTimeout(B,20)})();return w});p.length===0&&s(p)});return d}function l(e,f,j,s){function p(t){if(g.hasClass(S))return o;F.show.trigger("qtip-"+i+"-inactive");clearTimeout(d.timers.show);
clearTimeout(d.timers.hide);var H=function(){d.show(t)};if(b.show.delay>0)d.timers.show=setTimeout(H,b.show.delay);else H()}function u(t){if(g.hasClass(S))return o;var H=a(t.relatedTarget||t.target),J=H.closest(X)[0]===g[0];H=H[0]===F.show[0];clearTimeout(d.timers.show);clearTimeout(d.timers.hide);if(D.target==="mouse"&&J||b.hide.fixed&&/mouse(out|leave|move)/.test(t.type)&&(J||H)){t.stopPropagation();t.preventDefault();return o}g.stop(1,1);if(b.hide.delay>0)d.timers.hide=setTimeout(function(){d.hide(t)},
b.hide.delay);else d.hide(t)}function G(t){if(g.hasClass(S))return o;clearTimeout(d.timers.inactive);d.timers.inactive=setTimeout(function(){d.hide(t)},b.hide.inactive)}function K(t){if(!d.cache.processing){d.cache.processing=1;m()&&d.reposition(t);d.cache.processing=0}}var B=".qtip-"+i,D=b.position,F={show:b.show.target,hide:b.hide.target,container:D.container[0]===v?document:D.container},Q={show:String(b.show.event).split(" "),hide:String(b.hide.event).split(" ")},R=a(document),I=a.browser.msie&&
parseInt(a.browser.version,10)===6;if(j){if(b.hide.fixed){F.hide=F.hide.add(g);g.bind("mouseover"+B,function(){g.hasClass(S)||clearTimeout(d.timers.hide)})}g.bind("mouseenter"+B+" mouseleave"+B,function(t){d[t.type==="mouseenter"?"focus":"blur"](t)})}if(f){if("number"===typeof b.hide.inactive){F.show.bind("qtip-"+i+"-inactive",G);a.each(a.fn.qtip.inactiveEvents,function(t,H){F.hide.add(d.elements.tooltip).bind(H+B+"-inactive",G)})}a.each(Q.hide,function(t,H){var J=a.inArray(H,Q.show),L=a(F.hide);
if(J>-1&&L.add(F.show).length===L.length||H==="unfocus"){F.show.bind(H+B,function(P){m()?u(P):p(P)});delete Q.show[J]}else F.hide.bind(H+B,u)})}e&&a.each(Q.show,function(t,H){F.show.bind(H+B,p)});if(s){if(D.adjust.resize||D.viewport)a(a.event.special.resize?D.viewport:M).bind("resize"+B,K);if(D.viewport||I&&g.css("position")==="fixed")a(D.viewport).bind("scroll"+B,K);/unfocus/i.test(b.hide.event)&&R.bind("mousedown"+B,function(t){var H=a(t.target);H.parents(X).length===0&&H.add(c).length>1&&m()&&
!g.hasClass(S)&&d.hide(t)});D.target==="mouse"&&R.bind("mousemove"+B,function(t){if(D.adjust.mouse&&!g.hasClass(S)&&m())d.reposition(t||a.fn.qtip.mouse)})}}function r(e,f,j,s){s=parseInt(s,10)!==0;var p=".qtip-"+i;f={show:e?b.show.target:E,hide:f?b.hide.target:E,tooltip:j?d.elements.tooltip:E,content:j?d.elements.content:E,container:s?b.position.container[0]===v?document:b.position.container:E,window:s?M:E};if(d.rendered)a([]).pushStack(a.grep([f.show,f.hide,f.tooltip,f.container,f.content,f.window],
function(){return this!==null})).unbind(p);else e&&f.show.unbind(p+"-create")}var d=this,v=document.body,C=N+"-"+i,g;d.id=i;d.rendered=o;d.elements={target:c};d.timers={img:[]};d.options=b;d.plugins={};d.cache={event:{},target:E,disabled:o,lastFocus:v,attr:k};a.extend(d,{render:function(e){if(d.rendered)return o;var f=d.elements,j=b.content.text,s=b.content.title.text,p=a.Event("tooltiprender");a.attr(c[0],"aria-describedby",C);g=f.tooltip=a("<div/>").attr({id:C,"class":N+" qtip ui-helper-reset "+
b.style.classes,role:"alert","aria-live":"polite","aria-atomic":o,"aria-describedby":C+"-content","aria-hidden":w}).toggleClass(S,d.cache.disabled).data("qtip",d).appendTo(b.position.container).append(f.content=a("<div />",{"class":N+"-content",id:C+"-content","aria-atomic":w}));d.rendered=w;if(s){y();A(s)}O(j);x();a.each(a.fn.qtip.plugins,function(){this.initialize==="render"&&this(d)});l(1,1,1,1);a.each(b.events,function(u,G){if(G)g.bind(u==="toggle"?"tooltipshow tooltiphide":"tooltip"+u,G)});g.css("visibility",
"hidden").queue("fx",function(u){p.originalEvent=d.cache.event;g.trigger(p,[d]);if(b.show.ready||e)d.show(d.cache.event);u()});return d},get:function(e){switch(e.toLowerCase()){case "dimensions":e={height:g.outerHeight(),width:g.outerWidth()};break;case "offset":e=h(g[0],b.position.container[0]);break;default:e=q(e.toLowerCase());e=e[0].precedance?e[0].string():e[0].jquery?e[0]:e[0][e[1]];break}return e},set:function(e,f){e=e.toLowerCase();var j=q(e),s=d.elements,p,u,G,K={builtin:{"^id$":function(){var B=
f===w?a.fn.qtip.nextid:f,D=N+"-"+B;if(B!==o&&B.length>0&&!a("#"+D).length){g[0].id=D;s.content[0].id=D+"-content";s.title[0].id=D+"-title"}},"^content.text$":function(){O(f)},"^content.title.text$":function(){if(!f)return n();!d.elements.title&&f&&y();A(f)},"^content.title.button$":function(){var B=d.elements.button,D=d.elements.title;if(d.rendered)if(f){D||y();z()}else B.remove()},"^position.(my|at)$":function(){var B=/my$/i.test(e)?"my":"at";if("string"===typeof f)b.position[B]=new a.fn.qtip.plugins.Corner(f)},
"^position.container$":function(){d.rendered===w&&g.appendTo(f)},"^(show|hide).(event|target|fixed|delay|inactive)$":function(B,D,F,Q){var R=e.search(/fixed/i)>-1?[0,[0,1,1,1]]:[e.substr(0,3),e.charAt(0)==="s"?[1,0,0,0]:[0,1,0,0]];if(R[0])B[D]=Q;r.apply(d,R[1]);if(R[0])B[D]=F;l.apply(d,R[1])},"^show.ready$":function(){d.rendered===o&&d.show()},"^style.classes$":function(){a.attr(g[0],"class",N+" qtip ui-helper-reset "+f)},"^style.widget|content.title":x,"^events.(render|show|move|hide|focus|blur)$":function(B,
D,F){s.tooltip[(a.isFunction(f)?"":"un")+"bind"]("tooltip"+D,F)},"^position.(my|at|adjust|target|container)|style|content":function(){d.reposition()}}};a.each(d.plugins,function(B){if("object"===typeof this.checks)K[B]=this.checks});p=j[0][j[1]];j[0][j[1]]=f.nodeType?a(f):f;W(b);for(u in K)for(G in K[u])RegExp(G,"i").test(e)&&K[u][G].call(d,j[0],j[1],f,p);return d},toggle:function(e,f){function j(){if(e)a.browser.msie&&g[0].style.removeAttribute("filter");else g.css({display:"",visibility:"hidden",
width:"",opacity:"",left:"",top:""})}if(d.rendered===o)return o;var s=e?"show":"hide",p=b[s],u=m();if((typeof e).search("boolean|number"))e=!u;if(u===e)return d;if(f){if(/over|enter/.test(f.type)&&/out|leave/.test(d.cache.event.type)&&f.target===b.show.target[0]&&g.has(f.relatedTarget).length)return d;d.cache.event=a.extend({},f)}u=a.Event("tooltip"+s);u.originalEvent=f?d.cache.event:E;g.trigger(u,[d,90]);if(u.isDefaultPrevented())return d;a.attr(g[0],"aria-hidden",!!!e);if(e){g.hide().css({visibility:""});
d.focus(f);d.reposition(f,0);p.solo&&a(X).not(g).qtip("hide")}else{clearTimeout(d.timers.show);d.blur(f)}g.stop(1,1);if(a.isFunction(p.effect)){p.effect.call(g,d);g.queue("fx",function(G){j.call(this,G);G()})}else if(p.effect===o){g[s]();j.call(g)}else g.fadeTo(90,e?1:0,j);e&&p.target.trigger("qtip-"+i+"-inactive");return a.fn.qtip.lastShown=d},show:function(e){d.toggle(w,e)},hide:function(e){d.toggle(o,e)},focus:function(e){if(d.rendered===o)return o;var f=a(X),j=parseInt(g[0].style.zIndex,10),s=
a.fn.qtip.zindex+f.length;e=a.extend({},e);if(!g.hasClass(Y)){if(j!==s){f.each(function(){if(this.style.zIndex>j)this.style.zIndex-=1});f.filter("."+Y).qtip("blur",e)}d.cache.lastFocus=document.activeElement;f=a.Event("tooltipfocus");f.originalEvent=e;g.trigger(f,[d,s]);if(!f.isDefaultPrevented())g.addClass(Y)[0].style.zIndex=s}return d},blur:function(e){e=a.extend({},e);var f;g.removeClass(Y);f=a.Event("tooltipblur");f.originalEvent=e;g.trigger(f,[d])},reposition:function(e,f){if(d.rendered===o)return o;
var j=b.position.target,s=b.position,p=s.my,u=s.at,G=s.adjust,K=g.outerWidth(),B=g.outerHeight(),D=0,F=0,Q=a.Event("tooltipmove"),R=g.css("position")==="fixed",I=s.viewport.jquery?s.viewport:a(M),t={left:0,top:0},H={left:function(J){var L=I.scrollLeft,P=u.x==="left"?D:u.x==="right"?-D:-D/2,U=L-J;L=J+K-I.width-L;P=(p.x==="left"?K:p.x==="right"?-K:-K/2)-(p.precedance==="x"||p.x===p.y?P:0);if(U>0&&(p.x!=="left"||L>0))t.left-=P;else if(L>0&&(p.x!=="right"||U>0))t.left-=(p.x==="center"?-1:1)*P+2*G.x;if(t.left<
0&&-t.left>L)t.left=J;return t.left-J},top:function(J){var L=I.scrollTop,P=u.y==="top"?F:u.y==="bottom"?-F:-F/2,U=L-J;L=J+B-I.height-L;P=(p.y==="top"?B:p.y==="bottom"?-B:-B/2)-(p.precedance==="y"||p.x===p.y?P:0);if(U>0&&(p.y!=="top"||L>0))t.top-=P;else if(L>0&&(p.y!=="bottom"||U>0))t.top-=(p.y==="center"?-1:1)*P+2*G.y;if(t.top<0&&-t.top>L)t.top=J;return t.top-J}};f=f===T||!!f||o;I=!I?o:{elem:I,height:I[(I[0]===M?"h":"outerH")+"eight"](),width:I[(I[0]===M?"w":"outerW")+"idth"](),scrollLeft:I.scrollLeft(),
scrollTop:I.scrollTop()};if(j==="mouse"){u={x:"left",y:"top"};e=e&&(e.type==="resize"||e.type==="scroll")?d.cache.event:G.mouse||!e||!e.pageX?a.extend({},a.fn.qtip.mouse):e;t={top:e.pageY,left:e.pageX}}else{if(j==="event")j=e&&e.target&&e.type!=="scroll"&&e.type!=="resize"?d.cache.target=a(e.target):d.cache.target;j=a(j).eq(0);if(j.length===0)return d;else if(j[0]===document||j[0]===M){D=j.width();F=j.height();if(j[0]===M)t={top:R?0:I.scrollTop,left:R?0:I.scrollLeft}}else if(j.is("area")&&a.fn.qtip.plugins.imagemap){t=
a.fn.qtip.plugins.imagemap(j,u);D=t.width;F=t.height;t=t.offset}else if(j[0].namespaceURI=="http://www.w3.org/2000/svg"&&a.fn.qtip.plugins.svg){t=a.fn.qtip.plugins.svg(j,u);D=t.width;F=t.height;t=t.offset}else{D=j.outerWidth();F=j.outerHeight();t=h(j[0],s.container[0])}t.left+=u.x==="right"?D:u.x==="center"?D/2:0;t.top+=u.y==="bottom"?F:u.y==="center"?F/2:0}t.left+=G.x+(p.x==="right"?-K:p.x==="center"?-K/2:0);t.top+=G.y+(p.y==="bottom"?-B:p.y==="center"?-B/2:0);t.adjusted=s.viewport.jquery&&j[0]!==
M&&j[0]!==v?{left:H.left(t.left),top:H.top(t.top)}:{left:0,top:0};g.attr("class",function(){return a.attr(this,"class").replace(/ui-tooltip-pos-\w+/i,"")}).addClass(N+"-pos-"+p.abbreviation());Q.originalEvent=a.extend({},e);g.trigger(Q,[d,t,I.elem]);if(Q.isDefaultPrevented())return d;delete t.adjusted;if(!f||!isNaN(t.left,t.top))g.css(t);else if(m()&&a.isFunction(s.effect)){s.effect.call(g,d,t);g.queue(function(J){a(this).css({opacity:"",height:""});a.browser.msie&&this.style&&this.style.removeAttribute("filter");
J()})}return d},redraw:function(){if(!d.rendered||!(a.browser.msie&&a.browser.version<8))return o;var e=N+"-fluid",f;g.css({width:"auto",height:"auto"}).addClass(e);f={height:g.outerHeight(),width:g.outerWidth()};a.each(["width","height"],function(j,s){var p=parseInt(g.css("max-"+s),10)||0,u=parseInt(g.css("min-"+s),10)||0;f[s]=p+u?Math.min(Math.max(f[s],u),p):f[s]});g.css(f).removeClass(e)},disable:function(e){var f=S;if("boolean"!==typeof e)e=!(g.hasClass(f)||d.cache.disabled);if(d.rendered){g.toggleClass(f,
e);a.attr(g[0],"aria-disabled",e)}else d.cache.disabled=!!e;return d},destroy:function(){var e=c[0],f=a.data(e,V);if(d.rendered){g.remove();a.each(d.plugins,function(){this.initialize==="render"&&this.destroy()})}clearTimeout(d.timers.show);clearTimeout(d.timers.hide);r(1,1,1,1);a.removeData(e,"qtip");f&&a.attr(e,"title",f);c.removeAttr("aria-describedby");return c}})}function ca(c,b){var i,k,q,h,m=a(this),x=a(document.body),n=this===document?x:m;k=m.metadata?m.metadata(b.metadata):E;h=b.metadata.type===
"html5"&&k?k[b.metadata.name]:E;var z=m.data(b.metadata.name||"qtipopts");try{z=typeof z==="string"?(new Function("return "+z))():z}catch(y){$("Unable to parse HTML5 attribute data: "+z)}h=a.extend(w,{},a.fn.qtip.defaults,b,typeof z==="object"?W(z):E,W(h||k));k&&a.removeData(this,"metadata");k=h.position;if("boolean"===typeof h.content.text){q=m.attr(h.content.attr);if(h.content.attr!==o&&q)h.content.text=q;else return o}if(k.container===o)k.container=x;if(k.target===o)k.target=n;if(h.show.target===
o)h.show.target=n;if(h.hide.target===o)h.hide.target=n;if(h.position.viewport===w)h.position.viewport=k.container;k.at=new a.fn.qtip.plugins.Corner(k.at);k.my=new a.fn.qtip.plugins.Corner(k.my);if(a.data(this,"qtip"))if(h.overwrite)m.qtip("destroy");else if(h.overwrite===o)return o;if(a.attr(this,"title")){a.data(this,V,a.attr(this,"title"));m.removeAttr("title")}i=new aa(m,h,c,!!q);a.data(this,"qtip",i);m.bind("remove.qtip",function(){i.destroy()});return i}function da(c){var b=this,i=c.elements.tooltip,
k=c.options.content.ajax,q=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;b.checks={"^content.ajax":function(h,m){if(m==="once")b.once();else k&&k.url&&b.load()}};a.extend(b,{init:function(){if(k&&k.url){b.load();i.one("tooltipshow",b.once)}},once:function(){k.once?b.destroy():i.bind("tooltipshow.qtip-ajax",b.load)},load:function(){var h=k.url.indexOf(" "),m=k.url,x;if(h>-1){x=m.substr(h);m=m.substr(0,h)}a.ajax(a.extend({success:function(n){if(x)n=a("<div/>").append(n.replace(q,"")).find(x);
c.set("content.text",n)},error:function(n,z,y){c.set("content.text",z+": "+y)},context:c},k,{url:m}));return b},destroy:function(){i.unbind(".qtip-ajax")}});b.init()}function ea(c,b,i){var k=Math.ceil(b/2),q=Math.ceil(i/2);b={bottomright:[[0,0],[b,i],[b,0]],bottomleft:[[0,0],[b,0],[0,i]],topright:[[0,i],[b,0],[b,i]],topleft:[[0,0],[0,i],[b,i]],topcenter:[[0,i],[k,0],[b,i]],bottomcenter:[[0,0],[b,0],[k,i]],rightcenter:[[0,0],[b,q],[0,i]],leftcenter:[[b,0],[b,i],[0,q]]};b.lefttop=b.bottomright;b.righttop=
b.bottomleft;b.leftbottom=b.topright;b.rightbottom=b.topleft;return b[c.string()]}function fa(c){function b(l,r,d){if(m.tip){l=a.extend({},q.corner);r=d.adjusted;var v;if(q.corner.fixed!==w){if(r.left)l.x=l.x==="center"?r.left>0?"left":"right":l.x==="left"?"right":"left";if(r.top)l.y=l.y==="center"?r.top>0?"top":"bottom":l.y==="top"?"bottom":"top";if(l.string()!==n.corner&&(n.top!==r.top||n.left!==r.left))v=q.update(l)}v||(v=q.position(l,0));if(v.right!==T)v.left=v.right;if(v.bottom!==T)v.top=v.bottom;
v.option=Math.max(0,h.offset);d.left-=v.left.charAt?v.option:(v.right?-1:1)*v.left;d.top-=v.top.charAt?v.option:(v.bottom?-1:1)*v.top;n.left=r.left;n.top=r.top;n.corner=l.string()}}function i(l,r,d){r=!r?l[l.precedance]:r;r="border-"+r+"-width";l=parseInt((m.titlebar&&l.y==="top"?m.titlebar:m.content).css(r),10);return(d?l||parseInt(x.css(r),10):l)||0}function k(l){var r=l.precedance==="y",d=z[r?"width":"height"],v=z[r?"height":"width"],C=l.string().indexOf("center")>-1,g=d*(C?0.5:1),e=Math.pow;l=
Math.round;var f=Math.sqrt(e(g,2)+e(v,2));g=[A/g*f,A/v*f];g[2]=Math.sqrt(e(g[0],2)-e(A,2));g[3]=Math.sqrt(e(g[1],2)-e(A,2));C=(f+g[2]+g[3]+(C?0:g[0]))/f;d=[l(C*v),l(C*d)];return{height:d[r?0:1],width:d[r?1:0]}}var q=this,h=c.options.style.tip,m=c.elements,x=m.tooltip,n={top:0,left:0,corner:""},z={width:h.width,height:h.height},y={},A=h.border||0,O=a("<canvas />")[0].getContext;q.corner=E;q.mimic=E;q.checks={"^position.my|style.tip.(corner|mimic|border)$":function(){q.init()||q.destroy();c.reposition()},
"^style.tip.(height|width)$":function(){z={width:h.width,height:h.height};q.create();q.update();c.reposition()},"^content.title.text|style.(classes|widget)$":function(){m.tip&&q.update()}};a.extend(q,{init:function(){var l=q.detectCorner()&&(O||a.browser.msie);if(l){q.create();q.update();x.unbind(".qtip-tip").bind("tooltipmove.qtip-tip",b)}return l},detectCorner:function(){var l=h.corner,r=c.options.position,d=r.at;r=r.my.string?r.my.string():r.my;if(l===o||r===o&&d===o)return o;else if(l===w)q.corner=
new a.fn.qtip.plugins.Corner(r);else if(!l.string){q.corner=new a.fn.qtip.plugins.Corner(l);q.corner.fixed=w}return q.corner.string()!=="centercenter"},detectColours:function(){var l=m.tip.css({backgroundColor:"",border:""}),r=q.corner,d=r[r.precedance],v="border-"+d+"-color";d="border"+d.charAt(0)+d.substr(1)+"Color";var C=/rgba?\(0, 0, 0(, 0)?\)|transparent/i;r=m.titlebar&&(r.y==="top"||r.y==="center"&&l.position().top+z.height/2+h.offset<m.titlebar.outerHeight(1))?m.titlebar:m.content;y.fill=l.css("background-color")||
"transparent";y.border=l[0].style[d];if(!y.fill||C.test(y.fill)){y.fill=r.css("background-color");if(C.test(y.fill))y.fill=x.css("background-color")}if(!y.border||C.test(y.border)){y.border=x.css(v);if(C.test(y.border)||y.border===a(document.body).css("color"))y.border=r.css(v)!==a(c.elements.content).css("color")?r.css(v):"transparent"}a("*",l).add(l).css("background-color","transparent").css("border","0px dashed transparent")},create:function(){var l=z.width,r=z.height;m.tip&&m.tip.remove();m.tip=
a("<div />",{"class":"ui-tooltip-tip"}).css({width:l,height:r}).prependTo(x);if(O)a("<canvas />").appendTo(m.tip)[0].getContext("2d").save();else{l='<vml:shape coordorigin="0,0" style="display:block; position:absolute; behavior:url(#default#VML);"></vml:shape>';m.tip.html(A?l+=l:l)}},update:function(l){var r=m.tip,d=r.children(),v=z.width,C=z.height,g=h.mimic,e=Math.round,f,j,s;if(!l)l=q.corner;if(g===o)g=l;else{g=new a.fn.qtip.plugins.Corner(g);g.precedance=l.precedance;if(g.x==="inherit")g.x=l.x;
else if(g.y==="inherit")g.y=l.y;else if(g.x===g.y)g[l.precedance]=l[l.precedance]}f=g.precedance;q.detectColours();A=y.border==="transparent"||y.border==="#123456"?0:h.border===w?i(l,E,w):h.border;j=ea(g,v,C);s=k(l);r.css(s);r=l.precedance==="y"?[e(g.x==="left"?A:g.x==="right"?s.width-v-A:(s.width-v)/2),e(g.y==="top"?s.height-C:0)]:[e(g.x==="left"?s.width-v:0),e(g.y==="top"?A:g.y==="bottom"?s.height-C-A:(s.height-C)/2)];if(O){d.attr(s);d=d[0].getContext("2d");d.restore();d.save();d.clearRect(0,0,
3E3,3E3);d.translate(r[0],r[1]);d.beginPath();d.moveTo(j[0][0],j[0][1]);d.lineTo(j[1][0],j[1][1]);d.lineTo(j[2][0],j[2][1]);d.closePath();d.fillStyle=y.fill;d.strokeStyle=y.border;d.lineWidth=A*2;d.lineJoin="miter";d.miterLimit=100;d.stroke();d.fill()}else{j="m"+j[0][0]+","+j[0][1]+" l"+j[1][0]+","+j[1][1]+" "+j[2][0]+","+j[2][1]+" xe";r[2]=A&&/^(r|b)/i.test(l.string())?1:0;d.css({antialias:""+(g.string().indexOf("center")>-1),left:r[0]-r[2]*Number(f==="x"),top:r[1]-r[2]*Number(f==="y"),width:v+A,
height:C+A}).each(function(p){var u=a(this);u.attr({coordsize:v+A+" "+(C+A),path:j,fillcolor:y.fill,filled:!!p,stroked:!!!p}).css({display:A||p?"block":"none"});!p&&A>0&&u.html()===""&&u.html('<vml:stroke weight="'+A*2+'px" color="'+y.border+'" miterlimit="1000" joinstyle="miter"  style="behavior:url(#default#VML); display:block;" />')})}return q.position(l,1)},position:function(l,r){var d=m.tip,v={},C=Math.max(0,h.offset),g,e,f;if(h.corner===o||!d)return o;l=l||q.corner;g=l.precedance;e=k(l);f=a.browser.msie&&
A&&/^(b|r)/i.test(l.string())?1:0;a.each(g==="y"?[l.x,l.y]:[l.y,l.x],function(j,s){var p,u;if(s==="center"){p=g==="y"?"left":"top";v[p]="50%";v["margin-"+p]=-Math.round(e[g==="y"?"width":"height"]/2)+C}else{p=i(l,s,w);u=a.browser.mozilla;var G=l.y+(u?"":"-")+l.x;u=(u?"-moz-":a.browser.webkit?"-webkit-":"")+(u?"border-radius-"+G:"border-"+G+"-radius");u=parseInt((m.titlebar&&l.y==="top"?m.titlebar:m.content).css(u),10)||parseInt(x.css(u),10)||0;v[s]=j||!A?i(l,s):C+(u>p?u:0)}});v[l[g]]-=e[g==="x"?"width":
"height"]+f;r&&d.css({top:"",bottom:"",left:"",right:"",margin:""}).css(v);return v},destroy:function(){m.tip&&m.tip.remove();x.unbind(".qtip-tip")}});q.init()}function ga(c){var b=this,i=c.options.show.modal,k=c.elements,q=k.tooltip;b.checks={"^show.modal.(on|blur)$":function(){b.init();k.overlay.toggle(q.is(":visible"))}};a.extend(b,{init:function(){if(i.on){q.unbind(".qtipmodal").bind("tooltipshow.qtipmodal tooltiphide.qtipmodal",function(h,m,x){h=h.type.replace("tooltip","");a.isFunction(i[h])?
i[h].call(k.overlay,x,m):b[h](x)});b.create();i.blur===w&&k.overlay.unbind(".qtipmodal"+c.id).bind("click.qtipmodal"+c.id,function(){c.hide.call(c)})}},create:function(){var h=a("#qtip-overlay");if(h.length)k.overlay=h;else{k.overlay=a("<div />",{id:"#qtip-overlay".substr(1),css:{position:"absolute",top:0,left:0,display:"none",zIndex:parseInt(q.css("z-index"),10)-1}}).appendTo(document.body);a(M).bind("resize.qtipmodal",function(){k.overlay.css({height:Math.max(a(M).height(),a(document).height()),
width:Math.max(a(M).width(),a(document).width())})}).trigger("resize")}},toggle:function(h){var m=k.overlay,x=c.options.show.modal.effect,n=h?"show":"hide";m.stop(w,o);if(a.isFunction(x))x.call(m,h);else x===o?m[n]():m.fadeTo(90,h?0.7:0,function(){h||a(this).hide()})},show:function(){b.toggle(w)},hide:function(){b.toggle(o)},destroy:function(){var h=w;a("*").each(function(){var m=a(this).data("qtip");if(m&&m.id!==c.id&&m.options.show.modal)return h=o});if(h){k.overlay.remove();a(M).unbind(".qtipmodal")}else k.overlay.unbind(".qtipmodal"+
c.id);q.unbind("tooltipshow.qtipmodal tooltiphide.qtipmodal")}});b.init()}function ha(c){var b=this,i=c.elements,k=i.tooltip,q=".bgiframe-"+c.id,h="tooltipmove"+q+" tooltipshow"+q;a.extend(b,{init:function(){i.bgiframe=a('<iframe class="ui-tooltip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0);"></iframe>');i.bgiframe.appendTo(k);k.bind(h,b.adjust)},adjust:function(){var m=c.get("dimensions"),x=c.plugins.tip,
n=c.elements.tip,z;z=parseInt(k.css("border-left-width"),10)||0;z={left:-z,top:-z};if(x&&n){x=x.corner.precedance==="x"?["width","left"]:["height","top"];z[x[1]]-=n[x[0]]()}i.bgiframe.css(z).css(m)},destroy:function(){b.iframe.remove();k.unbind(h)}});b.init()}var w=true,o=false,E=null,N="ui-tooltip",Z="ui-widget",S="ui-state-disabled",X="div.qtip."+N,Y=N+"-focus",ba="-31000px",V="oldtitle";a.fn.qtip=function(c,b,i){var k=String(c).toLowerCase(),q=E,h=k==="disable"?[w]:a.makeArray(arguments).slice(1,
10),m=h[h.length-1],x=this[0]?a.data(this[0],"qtip"):E;if(!arguments.length&&x||k==="api")return x;else if("string"===typeof c){this.each(function(){var n=a.data(this,"qtip");if(!n)return w;if(/option|set/.test(k)&&b)if(i!==T)n.set(b,i);else q=n.get(b);else{if(!n.rendered&&(k==="show"||k==="toggle")){if(m&&m.timeStamp)n.cache.event=m;n.render(1)}else if(k==="enable"){k="disable";h=[o]}n[k]&&n[k].apply(n[k],h)}});return q!==E?q:this}else if("object"===typeof c||!arguments.length){x=W(a.extend(w,{},
c));return a.fn.qtip.bind.call(this,x,m)}};a.fn.qtip.bind=function(c,b){return this.each(function(){function i(z){function y(){n.render(typeof z==="object"||k.show.ready);q.show.unbind(h.show);q.hide.unbind(h.hide)}if(n.cache.disabled)return o;n.cache.event=a.extend({},z);if(k.show.delay>0){clearTimeout(n.timers.show);n.timers.show=setTimeout(y,k.show.delay);h.show!==h.hide&&q.hide.bind(h.hide,function(){clearTimeout(n.timers.show)})}else y()}var k,q,h,m=c.id=!c.id||c.id===o||c.id.length<1||a("#"+
N+"-"+c.id).length?a.fn.qtip.nextid++:c.id,x=".qtip-"+m+"-create",n=ca.call(this,m,c);if(n===o)return w;k=n.options;a.each(a.fn.qtip.plugins,function(){this.initialize==="initialize"&&this(n)});q={show:k.show.target,hide:k.hide.target};h={show:String(k.show.event).replace(" ",x+" ")+x,hide:String(k.hide.event).replace(" ",x+" ")+x};q.show.bind(h.show,i);if(k.show.ready||k.prerender)i(b)})};a.each({attr:function(c,b){if(this.length){var i=this[0],k=a.data(i,"qtip");if(c==="title")if(arguments.length<
2)return a.data(i,V);else if(typeof k==="object"){k&&k.rendered&&k.options.content.attr==="title"&&k.cache.attr&&k.set("content.text",b);a.fn.attr_replacedByqTip.apply(this,arguments);a.data(i,V,a.attr(i,"title"));return this.removeAttr("title")}}},clone:function(){var c=a([]),b;a("*",this).add(this).each(function(){var i=a.data(this,V);if(i){a.attr(this,"title",i);c=c.add(this)}});b=a.fn.clone_replacedByqTip.apply(this,arguments);c.removeAttr("title");return b},remove:a.ui?E:function(c,b){a(this).each(function(){if(!b)if(!c||
a.filter(c,[this]).length)a("*",this).add(this).each(function(){a(this).triggerHandler("remove")})})}},function(c,b){if(!b)return w;var i=a.fn[c+"_replacedByqTip"]=a.fn[c];a.fn[c]=function(){return b.apply(this,arguments)||i.apply(this,arguments)}});a(M).load(function(){var c=document,b=c.body;a(c).bind("mousemove.qtip",function(i){a.fn.qtip.mouse={pageX:i.pageX,pageY:i.pageY}});c.activeElement===T&&c.addEventListener("focus",function(i){if(i&&i.target)c.activeElement=i.target===c?b:i.target},true)});
a.fn.qtip.version="2.0.0pre";a.fn.qtip.nextid=0;a.fn.qtip.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" ");a.fn.qtip.zindex=15E3;a.fn.qtip.plugins={Corner:function(c){c=String(c).replace(/([A-Z])/," $1").replace(/middle/gi,"center").toLowerCase();this.x=(c.match(/left|right/i)||c.match(/center/)||["inherit"])[0].toLowerCase();this.y=(c.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();this.precedance=c.charAt(0).search(/^(t|b)/)>-1?"y":"x";this.string=
function(){return this.precedance==="y"?this.y+this.x:this.x+this.y};this.abbreviation=function(){var b=this.x.substr(0,1),i=this.y.substr(0,1);return b===i?b:b==="c"||b!=="c"&&i!=="c"?i+b:b+i}},iOS:parseFloat((/CPU.+OS ([0-9_]{3}).*AppleWebkit.*Mobile/i.exec(navigator.userAgent)||[0,"4_2"])[1].replace("_","."))<4.1};a.fn.qtip.defaults={prerender:o,id:o,overwrite:w,content:{text:w,attr:"title",title:{text:o,button:o}},position:{my:"top left",at:"bottom right",target:o,container:o,viewport:o,adjust:{x:0,
y:0,mouse:w,resize:w},effect:w},show:{target:o,event:"mouseenter",effect:w,delay:90,solo:o,ready:o},hide:{target:o,event:"mouseleave",effect:w,delay:0,fixed:o,inactive:o},style:{classes:"",widget:o},events:{render:E,move:E,show:E,hide:E,toggle:E,focus:E,blur:E}};a.fn.qtip.plugins.ajax=function(c){var b=c.plugins.ajax;return"object"===typeof b?b:c.plugins.ajax=new da(c)};a.fn.qtip.plugins.ajax.initialize="render";a.fn.qtip.plugins.ajax.sanitize=function(c){var b=c.content;if(b&&"ajax"in b){b=b.ajax;
if(typeof b!=="object")b=c.content.ajax={url:b};if("boolean"!==typeof b.once&&b.once)b.once=!!b.once}};a.extend(w,a.fn.qtip.defaults,{content:{ajax:{once:w}}});a.fn.qtip.plugins.tip=function(c){var b=c.plugins.tip;return"object"===typeof b?b:c.plugins.tip=new fa(c)};a.fn.qtip.plugins.tip.initialize="render";a.fn.qtip.plugins.tip.sanitize=function(c){var b=c.style;if(b&&"tip"in b){b=c.style.tip;if(typeof b!=="object")c.style.tip={corner:b};if(!/string|boolean/i.test(typeof b.corner))b.corner=w;typeof b.width!==
"number"&&delete b.width;typeof b.height!=="number"&&delete b.height;typeof b.border!=="number"&&b.border!==w&&delete b.border;typeof b.offset!=="number"&&delete b.offset}};a.extend(w,a.fn.qtip.defaults,{style:{tip:{corner:w,mimic:o,width:6,height:6,border:w,offset:0}}});a.fn.qtip.plugins.imagemap=function(c,b){function i(A,O){for(var l=0,r=1,d=1,v=0,C=0,g=A.width,e=A.height;g>0&&e>0&&r>0&&d>0;){g=Math.floor(g/2);e=Math.floor(e/2);if(b.x==="left")r=g;else if(b.x==="right")r=A.width-g;else r+=Math.floor(g/
2);if(b.y==="top")d=e;else if(b.y==="bottom")d=A.height-e;else d+=Math.floor(e/2);for(l=O.length;l--;){if(O.length<2)break;v=O[l][0]-A.offset.left;C=O[l][1]-A.offset.top;if(b.x==="left"&&v>=r||b.x==="right"&&v<=r||b.x==="center"&&(v<r||v>A.width-r)||b.y==="top"&&C>=d||b.y==="bottom"&&C<=d||b.y==="center"&&(C<d||C>A.height-d))O.splice(l,1)}}return{left:O[0][0],top:O[0][1]}}var k=c.attr("shape").toLowerCase(),q=c.attr("coords").split(","),h=[],m=a('img[usemap="#'+c.parent("map").attr("name")+'"]'),
x=m.offset(),n={width:0,height:0,offset:{top:1E10,right:0,bottom:0,left:1E10}},z=0,y=0;x.left+=Math.ceil((m.outerWidth()-m.width())/2);x.top+=Math.ceil((m.outerHeight()-m.height())/2);if(k==="poly")for(z=q.length;z--;){y=[parseInt(q[--z],10),parseInt(q[z+1],10)];if(y[0]>n.offset.right)n.offset.right=y[0];if(y[0]<n.offset.left)n.offset.left=y[0];if(y[1]>n.offset.bottom)n.offset.bottom=y[1];if(y[1]<n.offset.top)n.offset.top=y[1];h.push(y)}else h=a.map(q,function(A){return parseInt(A,10)});switch(k){case "rect":n=
{width:Math.abs(h[2]-h[0]),height:Math.abs(h[3]-h[1]),offset:{left:h[0],top:h[1]}};break;case "circle":n={width:h[2]+2,height:h[2]+2,offset:{left:h[0],top:h[1]}};break;case "poly":a.extend(n,{width:Math.abs(n.offset.right-n.offset.left),height:Math.abs(n.offset.bottom-n.offset.top)});n.offset=b.string()==="centercenter"?{left:n.offset.left+n.width/2,top:n.offset.top+n.height/2}:i(n,h.slice());n.width=n.height=0;break}n.offset.left+=x.left;n.offset.top+=x.top;return n};a.fn.qtip.plugins.svg=function(c){var b=
a(document),i=c[0];c={width:0,height:0,offset:{top:1E10,left:1E10}};var k,q,h;if(i.getBBox){k=i.getBBox();q=i.getScreenCTM();i=i.farthestViewportElement||i;if(!i.createSVGPoint)return c;i=i.createSVGPoint();i.x=k.x;i.y=k.y;h=i.matrixTransform(q);c.offset.left=h.x;c.offset.top=h.y;i.x+=k.width;i.y+=k.height;h=i.matrixTransform(q);c.width=h.x-c.offset.left;c.height=h.y-c.offset.top;c.offset.left+=b.scrollLeft();c.offset.top+=b.scrollTop()}return c};a.fn.qtip.plugins.modal=function(c){var b=c.plugins.modal;
return"object"===typeof b?b:c.plugins.modal=new ga(c)};a.fn.qtip.plugins.modal.initialize="render";a.fn.qtip.plugins.modal.sanitize=function(c){if(c.show)if(typeof c.show.modal!=="object")c.show.modal={on:!!c.show.modal};else if(typeof c.show.modal.on==="undefined")c.show.modal.on=w};a.extend(w,a.fn.qtip.defaults,{show:{modal:{on:o,effect:w,blur:w}}});a.fn.qtip.plugins.bgiframe=function(c){if(!(a.browser.msie&&/^6\.[0-9]/.test(a.browser.version)&&a("select, object").length))return o;var b=c.plugins.bgiframe;
if(b)return b;else{c.plugins.bgiframe=new ha(c);return c.plugins.bgiframe}};a.fn.qtip.plugins.bgiframe.initialize="render"})(jQuery,window);


/* ----- filOtaz_de.goMobile.js ------------------------------------------------------------------- */

if( ! filOtaz_de )      filOtaz_de = new Object;
(function(){
	if( filOtaz_de.goMobile )  return; //don't interfere!

filOtaz_de.goMobile = function(){
	var width = screen.width;
	if( width >= 1536 )	// big enough to ignore even w/ retina
		return;
	if( window.devicePixelRatio && devicePixelRatio >1 && width >768 )	// iOS tells dips not phys, keep iPad out
		width /= devicePixelRatio;
	if( width >=768 )	// Just low enough to keep out iPad
		return;
	// we will miss a non-iOS device w/ devicePixelRatio>1 and phys width exactly 768
	// iOS, dips >768 <1536 (eg Macbook Pro 15" Retina: 1440) gives false positives, so
	if( screen.width >768 && screen.width > screen.height )
		return;

	// not for corp pages
	if( $('#pages').is('.corp') )
		return;

	var goMobile = function() {
		if( window.location.pathname =='/' )
			window.location = window.location.protocol +'//m.taz.de/';
		var	path = window.location.pathname.split('!');
		var	decoration = path[0], 
			ressource  = path[1];
		ressource = ressource.split(';')[0];
		ressource = ressource.split('/')[0];
		window.location = window.location.protocol +'//m.taz.de'+ decoration +'!'+ ressource +';m/';
		}

	if( $.cookie('go_mobile') == 'no' ) {		// user did not want mobile
		return;
		}
	else if( $.cookie('go_mobile') == 'yes' ) {	// user chose to keep with mobile
		// should have been redirected by server, however ...
		goMobile();
		}
	else if( $.cookie('go_mobile') == 'test' ) {	// user test drives mobile
		// as she's back here on www, ask twice ...
		if( confirm('Ab jetzt immer die mobile Version m.taz.de nutzen?') ) {
			$.cookie('go_mobile', 'yes', { domain:'taz.de', path:'/', expires: 100*365 });
			goMobile();
			}
		else {
			if( confirm('Ab jetzt immer die mobile Version von taz.de nutzen?') ) {
				goMobile();
				}
			else {	$.cookie('go_mobile', 'no', { domain:'taz.de', path:'/', expires: 100*365 });
				alert('Die mobile Version ist jederzeit unter m.taz.de zu erreichen.');
				}
			}
		}
	else {	// have not asked user before
		if( confirm('Möchten Sie zur mobilen Version von taz.de wechseln?') ) {
			$.cookie('go_mobile', 'test', { domain:'taz.de', path:'/', expires: 100*365 });
			goMobile();
			}
		else {	$.cookie('go_mobile', 'no', { domain:'taz.de', path:'/', expires: 100*365 });
			alert('Die mobile Version ist jederzeit unter m.taz.de zu erreichen.');
			}
		}

	};	//filOtaz_de.goMobile
	})();


/* ----- filOtaz_de.types.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )       window.filOtaz_de = new Object;
(function(){
var f = window.filOtaz_de;


if( ! f.URL )        //don't interfere!
f.URL = function(arg) {
	var u = this;
	
	var mydefault = {
		protocol	: ''+ f.conf.canonical.protocol +':',
		hostname	: ''+ f.conf.canonical.host,
		port		: '',
		dir		: ''+ f.conf.canonical.path,
		file		: ''
		};

	// defaults
	this.protocol	= mydefault.protocol;
	this.hostname	= mydefault.hostname;
	this.port	= mydefault.port; 
	this.dir	= mydefault.dir;
	this.file	= mydefault.file;
	this.search	= '';
	this.hash	= '';
	this.valid	= true;

	// argument?
	if( arg ) (function(){
		var a,e,p;

		if( arg instanceof f.URL ) {
			if( arg.protocol )  u.protocol	= arg.protocol;
			if( arg.hostname )  u.hostname	= arg.hostname;
			if( arg.port     )  u.port	= arg.port;
			e = arg.pathname.split('/'); 
			u.file		= e.pop();
			u.dir		= e.join('/') +'/';
			u.search	= arg.search;
			u.hash		= arg.hash;
			u.valid 	= true;
			}	
		else {
			e = arg.toString();
	
			// regard everything from the first '#' as anchor string
			a = e.split('#');
			e = a.shift();		// e has no more '#'
			u.hash   =  a.length>0 ? '#'+ a.join('#') : '';		// >1 times '#' valid ???

			// regard everything from first '?' to first '#' as query string
			a = e.split('?');
			e = a.shift();		// e has no more '?'
			u.search = a.length>0 ? '?'+ a.join('?') : '';		// >1 times '?' valid ???
		
			// regard everything before '://' as protocol name
			a = e.split('://');
			p = a.length>1;
			u.protocol = p ? a.shift()+':' : window.location.protocol;		// empty protocol valid ???
			e = a.join('://');				// >1 times '://' valid ???

			// path components
			a = e.split('/');
			e = p ? a.shift() : '';		// regard first path component as host if we have a protocol
			if( p )  a.unshift( '' );	// make path absolute
			u.file = a.pop();		// regard everything from last '/' as file
			var dir = '';
			if( !p ) if( a.length==0 || a[0] ) dir += (new f.URL( window.location )).dir;		// no dir or relative dir
			if( p || a.length>0 )  dir += a.join('/') +'/';
			u.dir  = dir;

			// regard everything after the first ':' as port if numeric
			a = e.split(':');
			u.hostname = p ? a.shift() : window.location.hostname;
			e = a.join(':');
			if( p ) if( e ) if( u.valid = e>0 )  u.port = e;	// port is positive numeric
			if( !p ) u.port = window.location.port;
			}
		})();

	this.host = 	{  toString : function(){ if( !u.hostname ) return ''; return ''+ u.hostname + ( u.port ? ':'+ u.port : '' ); }  };
	this.pathname =	{  toString : function(){ return ''+ u.dir + u.file; }  };
	this.href =	{  toString : function(){ return u.toString(); }  };

	this.toString = function() {
		if( !this.valid ) return undefined;
		var ph = '';
		if( this.protocol && this.host )  ph = this.protocol +'//' + this.host;
		return ph + this.pathname + this.search + this.hash;
		};

	this.canonicalize = function() {
/*		var C = new Function; C.prototype = this;
		var c = new C;
*/		var c = this;
		if( f.conf.canonical.protocol )  c.protocol = ''+ f.conf.canonical.protocol +':';
		if( f.conf.canonical.host     )  c.hostname = ''+ f.conf.canonical.host;
		if( f.conf.canonical.port     )  c.port     = ''+ f.conf.canonical.port;
		return c;
		};


        }; //f.URL


if( ! f.LegacyArticle )        //don't interfere!
f.LegacyArticle = function() {
        var a = this;

	this.defined = false;
	this.url =
	this.kicker = 
	this.headline =
	this.lead =
	this.author = '';

	this.fromNode = function( node ) {  
		var containerN = $( node ).first();
		if( containerN.length<1 ) return undefined;

		var urlN = $('a#articleURL');
		var isArticlePage = urlN.length>0;
		if( !isArticlePage ) urlN = $('a.objlink',containerN);

		var urlPath = urlN.first().attr('href');
		if( !urlPath ) return undefined;
		this.url = (new f.URL( urlPath )).canonicalize();
		if( !this.url.valid ) return undefined;

		var articleN    = isArticlePage ? $('.sectbody', containerN) : urlN;
		var kickerN     = $( 'h4'                            , articleN).first();
		var headlineN   = $( isArticlePage ? 'h1'      : 'h3', articleN).first();
		var introN      = $( isArticlePage ? 'p.intro' : 'p' , articleN).first();
		var authorN	= $( '.author'                       , introN  ).first();
		
		if(   kickerN.length>0 )  this.kicker   =   kickerN.text();
		if( headlineN.length>0 )  this.headline = headlineN.text();
		if(    introN.length>0 )  this.lead     =    introN.text();
		if(   authorN.length>0 )  this.author	=   authorN.text();

		this.defined = true;
		return this;
		};

	// this.fromURL = function( url  ) {}

	this.toThing = function() {
		var t = new f.Thing(this);
		t.title = this.kicker;
		if( this.kicker.length>0 && this.headline.length>0 ) t.title += ': ';
		t.title += this.headline;
		t.descr = this.lead;
		t.defined = true;
		return t;
		}
	
	}; //f.LegacyArticle


if( ! f.Picture )        //don't interfere!
f.Picture = function() {
	
	this.defined = false;
	this.url =
	this.src =
	this.title =
	this.caption =
	this.credit = '';

	}; //f.Picture


if( ! f.Tom )        //don't interfere!
f.Tom = function() {
	
	this.defined = false;
	this.url =
	this.src =
	this.published = '';

	this.fromNode = function( node ) {
		if( !node ) return undefined;

		var containerN = $( node ).first().parent();
		if( containerN.length<1 ) return undefined;

		var tomN = $('#popup_content_tom', containerN).first();
		if( tomN.length<1 ) return undefined;

		this.url = (new f.URL( window.location )).canonicalize();
		if( !this.url.valid ) return undefined;

		var imgsrc = $('.tom_content img', tomN).attr('src');
		if( !imgsrc ) return undefined;

		this.src = (new f.URL( imgsrc )).canonicalize();
		if( !this.src.valid ) return undefined;

		var tomdate = $('.form_big_left_popup', tomN).text().split(' ').pop().split('.');
		this.published = new Date( tomdate[2], tomdate[1]-1, tomdate[0] );

		this.defined = true;
		return this;
		}

	this.toThing = function() {
		var t = new f.Thing(this);
		t.title = 'ToUCHE vom '+ this.published.getDate() +'.'+ (this.published.getMonth()+1) +'.'+ this.published.getFullYear();
		t.descr = 'by (c)Tom';
		t.defined = true;
		return t;
		}
	
	}; //f.Tom



if( ! f.Thing )        //don't interfere!
f.Thing = function(obj) {

	if( !obj ) return undefined;

	this.defined = false;
	this.obj = obj;
	if( obj.id    ) this.id    = obj.id;
	if( obj.url && obj.url.valid ) this.url = obj.url;
	if( obj.title ) this.title = obj.title;
	if( obj.descr ) this.descr = obj.descr;
	
	if( obj instanceof f.LegacyArticle ) {	var a=obj;
		this.title = a.kicker + ( a.kicker ?': ' :'' ) + a.headline;
		this.descr = a.lead;
		}

	if( obj instanceof f.Picture ) {	var p=obj;
		this.title = p.title ? p.title : p.caption;
		this.descr = p.descr ? p.descr : p.caption;
		}

	if( this.url && this.title ) this.defined = true;
	}; //f.Thing


})()


/* ----- filOtaz_de.Article.js ------------------------------------------------------------------- */

if( ! filOtaz_de )	filOtaz_de = new Object;

(function(){
	if( filOtaz_de.Cxml )	return;	//don't interfere!


	// parser functions (to be generalized)

	var dom2obj = function( n, opt ){  var node = $(n);
		if( opt.handler && opt.handler[ n.tagName ] && opt.handler[ n.tagName ] instanceof Function )
			return opt.handler[ n.tagName ]( n, opt );
		var Node = function( text ) {
			this.toString = function(){ return text; }
			};
		var children = node.children();
		var obj = new Node;
		if( children.length )	children.each( function( i, n ){
			if( opt.ignore && opt.ignore[ n.tagName ] )
				return;
			if( typeof obj[ n.tagName ] === 'undefined' ) 
				obj[ n.tagName ] = dom2obj( n, opt )
			else	{	// some children share tag name
				if( !( obj[ n.tagName ] instanceof Array ) )
					obj[ n.tagName ] = [ obj[ n.tagName ] ];
				obj[ n.tagName ].push( dom2obj( n, opt ) );
				}
			} )
		else	obj = new Node( node.text() );
		$( node[0].attributes ).each( function( i, a ){
			obj['_'+ a.name ] = a.value;
			} );
		return obj;
		}

	var valXmlDomEl = function( xmlDomEl ) {
		var xmlDomEl = $( xmlDomEl )[0];	// unwrap jQ
//		if( ! xmlDomEl.ownerDocument instanceof window.XMLDocument )	//breaks in IE
		if( !xmlDomEl.firstChild )
			return undefined;
		return xmlDomEl;
		}

	var xmlDom2obj = function( xmlDomEl, opt ) {
		var xmlDomEl = valXmlDomEl( xmlDomEl );
		return	xmlDomEl
			? dom2obj( xmlDomEl, opt )
			: undefined
			;
		}

	var cXmlDom2Date = function( cXmlDomEl, opt ) {
		var cXmlDomEl = valXmlDomEl( cXmlDomEl );
		var ts = $( cXmlDomEl  ).find('>ts');
		if( ts.length !=1 )	return undefined;
		return new Date( parseInt( ts.text(), 10 ) *1000 );
		}

	var cXmlDom2obj = function( cXmlDomEl, opt ) {
		if( !opt )		var opt		= {};
		if( !opt.handler )	opt.handler	= {};
		opt.handler.published
			= opt.handler.modified
			= opt.handler.generated
			= cXmlDom2Date;
		return xmlDom2obj( cXmlDomEl, opt );
		}


	filOtaz_de.Cxml = function( cXmlDomEl, options ) {

		this.toObj = function() {
			return cXmlDom2obj( cXmlDomEl, options );
			}

		}; //Cxml constructor


	})(); //filOtaz_de.Cxml


(function(){
	if( filOtaz_de.Article )	return;	//don't interfere!


	// ratioURL handling to be generalized
	var ratio_channel = document.location.pathname.replace(/^.*(;[A-z0-9_-]+).*$/, "$1");


	// class functions: input

	var cXmlDom2Article = function( xmlDomEl ) {

//		var article = cXmlDom2obj( xmlDomEl );
		var article = (new filOtaz_de.Cxml( xmlDomEl ) ).toObj();

		if( !( article && article._type == 'article' && article.meta && article.meta.id ) )
			return undefined;

		// data normalization / extrapolation
		article.category = article.category || ( article.meta && article.meta.category );
		if( article.category && article.category._id && !article.category._token ) (function() {
			var i = article.category._id;
			article.category._token =
				i==11 || i==15 || i==17			? 'product'	:
				i==12 || i==13 || i==14 || i==16	? 'story'	:
				'report'
				;
			})();
		$( article.related ).each( function( i, rel ){
			if( rel._rel == 'department' && rel.directory && rel.directory.title )
				article.department = rel.directory;
			} );

		return article;
		};


	// class functions: output

	var article2htmlTeaser = function( article, def ) {
		if( ! article )	return undefined;
		if( ! def )	var def = { kicker: true, headline: true };

		if( def.compact ) {
			if( article.category._token == 'product' ) {
				def.kicker	= false;
				def.headline	= false;
				def.picture	= true;
				def.teaser	= true;
				}
			if( article.category._token == 'story' ) {
				def.picture	= true;
				def.teaser	= true;
				}
			}
		if( def.teaser && article.teaser && article.teaser.lead )
				def.lead	= false;
		if( def.picture && ! article.picture ) {
				def.lead	= true;
				def.teaser	= false;
				}
		def.hint = true;

		var pictured = def.picture && article.picture ? 'pictured' :'';

		return (	def.department	&& article.department
					? $('<a class="dept" />')
						.attr('href', article.department.meta.url.path[0]._href + ratio_channel )
						.text(''+ article.department.title )
					: $()
			).add( $('<a class="objlink" />')
				// .attr('href', article.meta.url.path[0]._href + ratio_channel )
				.attr('href', article.meta.url.path[0]._href)
				.addClass( pictured )
				.addClass( article.category && article.category._token	? article.category._token	:'' )
				.append(
					def.kicker	&& article.kicker
						? $('<h4 />').text(''+ article.kicker )				:'',
					def.headline	&& article.headline
						? $('<h3 />').text(''+ article.headline )			:'',
					def.lead	&& article.lead
						? $('<p  />').text(''+ article.lead )				:'',
					def.teaser	&& article.teaser	&& article.teaser.lead
						? $('<p  />').text(''+ article.teaser.lead )			:'',
					pictured
						? $('<img />').attr('src', article.picture.pixmap[9]._src )	:'',
					def.hint	&& article.teaser	&& article.teaser.hint
						? $('<div class="hint" />').text(''+ article.teaser.hint )	:''
					)
				)
			;
		}; // article2htmlTeaser


filOtaz_de.Article = function( arg ) {	// arg : c.XML

	if( typeof arg === 'undefined' ) {
		// backward compatibility
		if( filOtaz_de.LegacyArticle instanceof Function )
			return new filOtaz_de.LegacyArticle;
		return undefined;
		}

	// private
	var article;

	// argument interpretation
	article =	cXmlDom2Article( arg );		// try c.xml DOM interpretation

	if( ! article && this.fromHtmlDom instanceof Function )
		article = this.fromHtmlDom( arg );	// try html DOM interpretation

	if( !article ) return undefined;


	// output
	this.teaser = function( def ) {
		return article2htmlTeaser( article, def );
		}; //this.teaser

	}; //Article constructor



})();


/* ----- filOtaz_de.HtmlList.js ------------------------------------------------------------------- */

(function(){	// "class" filOtaz_de.HtmlList
	if( filOtaz_de.HtmlList )	return;	// don't interfere!



// constructor
filOtaz_de.HtmlList = function( def ) {	//{ class, role }

		// private
		var node = $('<ul />')
			.addClass( def.className )
			.addClass( def.role )
			.attr('role', def.role )
			;
		var count = 0;
		var last = $();

		// publish
		this.definition	= function(){ return def; };
		this.length	= function(){ return node.find('>li').length; };


		// they may expand us
		this.append = function( inner ){
			count++;
			last.removeClass('last');
			last = $('<li />')
				.addClass( 
					( count==1 ? 'first ' : '' )
					+ 'last '
					+ ( count % 2 ? 'odd' : 'even' )
					+ ( count % 3 ? ' by3' : '' )
					)
				.append( inner )
				.appendTo( node )
				;
			return this;
			};

		// they may add classes
		this.addClass = function( cl ){
			node.addClass( cl );
			return this;
			};

		// they may put us somewhere
		this.appendTo = function( o ){
			node.appendTo( o );
			return this;
			};
		this.prependTo = function( o ){
			node.prependTo( o );
			return this;
			};
/*
		// they may remove us
		this.remove = function() {
			node.remove();
			};
*/

		}; //filOtaz_de.HtmlList constructor



})(); // "class" filOtaz_de.HtmlList


/* ----- patOtaz_de.ivw.js ------------------------------------------------------------------- */

window.patOtaz_de     = window.patOtaz_de     || new Object;
window.patOtaz_de.ivw = window.patOtaz_de.ivw || function (settings) {

try {
  
  var setup = settings || { name: 'NN', gig: 'web', agof: false };
  var st, sv; // ivw params
  
  // our identifier
  if (setup.gig == 'mobile') {
    st = 'mobtaz'; // mobile channel
  } else if (setup.gig == 'web') {
    st = 'taz';    // web channel
  } else {
    st = 'taz';    // web channel (default)
  }
  
  // agof (frabo) playout
  if (setup.agof) {
    sv = 'i2'; // playout with method appendChild()
  } else {
    sv = 'ke'; // no playout (default)
  }
  
  
  // szm version 1.5 (http only / w/o https)
  if (location.href.match(/http:/) == 'http:') {
    var ivw_url = 'http://taz.ivwbox.de/cgi-bin/ivw/CP/' + setup.name;
    var ivw_img = $('<img src="'+ ivw_url +'?r='+ escape(document.referrer) +'&d='+ (Math.random()*100000) +'" width="1" height="1" />');
  }
  
  
  // szm version 2.0 (http and https)
  var iam_data = {
    "st": st,
    "cp": setup.name,
    "sv": sv
  };
  iom.c (iam_data,1); // with method appendChild()

} catch (e) {
}

}; // patOtaz_de.ivw



/* ----- filOtaz_de.bugfix.js ------------------------------------------------------------------- */


$(document).ready(function(){

	// https://bugzilla.mozilla.org/show_bug.cgi?id=356558
	//	seems to hit only ff <v4, aka gecko <v2
	if( $.browser.mozilla && parseInt( $.browser.version ) <2 )
		$('iframe').each(function(){
			this.contentWindow.location.href=this.src;
			});
		
	});


/* ----- jkOtaz_de.ajaxBugfix.js ------------------------------------------------------------------- */

// monkey patching jQuerys $.ajax to remove dtd refrences in xml responses and replace them with the most common html entities 
// @see https://bugs.webkit.org/show_bug.cgi?id=5888
(function($) {
	if (typeof $.browser.supportsExternalEntityReferences == 'undefined') {
	    $.browser.supportsExternalEntityReferences = (function() {
	        var testXml = '<?xml version="1.0" encoding="UTF-8" ?><!DOCTYPE t [<!ENTITY % xhtml PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" >%xhtml;]><t>&auml;</t>',
        	    parser = new DOMParser()
	            ;

        	try {
	            var dom = parser.parseFromString( testXml, "text/xml" );
        	    return dom.documentElement.tagName === 't';
	        } catch (e) {
        	    return false;
	        }
	    })();
	}

	if (!$.browser.supportsExternalEntityReferences) {
		// all html entities found in our xml sources
		var docTypeWithEntites = '<!DOCTYPE taz-content [<!ENTITY aacute "&#225;"><!ENTITY Aacute "&#193;"><!ENTITY acirc "&#226;"><!ENTITY agrave "&#224;"><!ENTITY Agrave "&#192;"><!ENTITY aring "&#229;"><!ENTITY Aring "&#197;"><!ENTITY atilde "&#227;"><!ENTITY Atilde "&#195;"><!ENTITY auml "&#228;"><!ENTITY Auml "&#196;"><!ENTITY ccedil "&#231;"><!ENTITY Ccedil "&#199;"><!ENTITY copy "&#169;"><!ENTITY deg "&#176;"><!ENTITY eacute "&#233;"><!ENTITY Eacute "&#201;"><!ENTITY ecirc "&#234;"><!ENTITY egrave "&#232;"><!ENTITY euml "&#235;"><!ENTITY euro "&#8364;"><!ENTITY hellip "&#8230;"><!ENTITY iacute "&#237;"><!ENTITY icirc "&#238;"><!ENTITY Icirc "&#206;"><!ENTITY iuml "&#239;"><!ENTITY laquo "&#171;"><!ENTITY mdash "&#8212;"><!ENTITY nbsp "&#160;"><!ENTITY ndash "&#8211;"><!ENTITY ntilde "&#241;"><!ENTITY oacute "&#243;"><!ENTITY Oacute "&#211;"><!ENTITY ocirc "&#244;"><!ENTITY ograve "&#242;"><!ENTITY oslash "&#248;"><!ENTITY Oslash "&#216;"><!ENTITY otilde "&#245;"><!ENTITY ouml "&#246;"><!ENTITY Ouml "&#214;"><!ENTITY raquo "&#187;"><!ENTITY reg "&#174;"><!ENTITY sect "&#167;"><!ENTITY shy "&#173;"><!ENTITY szlig "&#223;"><!ENTITY trade "&#8482;"><!ENTITY uacute "&#250;"><!ENTITY ugrave "&#249;"><!ENTITY uuml "&#252;"><!ENTITY Uuml "&#220;">]>';
		// modified version of
		// @see https://raw.github.com/jquery/jquery/master/src/ajax/parseXML.js
		// that strips DOCTYPE
		var parseXml = function(data) {			
			var xml, tmp;
			if ( !data || typeof data !== "string" ) {
				return null;
			}
			try {
				tmp = new DOMParser();
				// exchage DOCTYPE declaration with a DOCTYPE declaration with embbed entities
				data = data.replace(/<\!DOCTYPE[^\>\[]+(\[[^\]]+)?]>/g, docTypeWithEntites);
				xml = tmp.parseFromString( data, "text/xml" );
			} catch ( e ) {
				xml = undefined;
			}

			if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
				jQuery.error( "Invalid XML: " + data );
			}
			return xml;	
		}


		var originalAjax = $.ajax;

		$.ajax = function (settings) {
			if (settings.dataType === 'xml') {
				settings.dataType = 'text';
				// Patching the callbacks
				if (typeof settings.success === 'function') {
					var origSuccess = settings.success;
					settings.success = function(data, status, jqx) {
						var xmlResponse = parseXml(jqx.response);
						settings.dataType = 'xml';
						jqx.response = xmlResponse;
						return origSuccess(xmlResponse, status, jqx);
					}
				}
				if (typeof settings.error === 'function') {
					var origError = settings.error;
					settings.error = function(jqx, statusText, errorThrown) {
						jqx.response = parseXml(jqx.response);
						settings.dataType = 'xml';
						return origError(jqx, statusText, errorThrown);
					}
				}
			} 
			return originalAjax(settings);
		}
	}
})(jQuery);


/* ----- filOtaz_de.float.js ------------------------------------------------------------------- */

$(document).ready(function(){
/* ToDo be early (-ier than DomContentLoaded) - seperate into load phases: 
	* handle each page directly after loading.
	* main menu after 1st page
	*/

/*
	var console = $('<div class="console"></div>')
		.css({ position:'fixed', bottom:'0px', right:'0px', width:'180px', background:'rgba(0,0,0,0.2)' })
		.appendTo( $('body') );
*/

	var win = $(window);


	// context for float()
	var f;

	var scroll;	// dynamically represent actual scroll position
	f = function(){  scroll = { x: win.scrollLeft() , y: win.scrollTop() };  };
	win.scroll( f ); f();

	var viewport;	// dynamically represent actual viewport size
	f = function(){  viewport = { w: win.width(), h: win.height() };  };
	win.resize( f ); f();

	var float = function( e ){	// add float to page element e

		var conf = {
			runin  : viewport.h * 0.7,
			runout : 30,
			offset : { top:0, bottom:0 }
			}

		var runout = false; 
		(function(){
			var setRunout = false;
			var wing = $('>.wing',e);
			if( !setRunout && $(e).filter('.news.article').length )
				setRunout = function() {  runout = wing.height() + $('>.tail',e).outerHeight() + conf.runout;  };
/*
			if( !setRunout && $(e).filter('.first.news').length )
				setRunout = function() {  runout = wing.height() + conf.runout;  };
*/
			if( !setRunout  )
				setRunout = function() {  runout = wing.outerHeight() + conf.runout;  };
			setRunout(); wing.bind('TAZadInserted', setRunout );
			})();


		var f;

		var page = {
			N: $(e),
			overTheTop: function(){  return page.vp.y < conf.offset.top;  },
			overTheBot: function(){  return page.vp.y + page.N.height() < viewport.h + conf.offset.bottom;  },
			present :   function(){  return page.vp.y + conf.runin < viewport.h;  },
			runout :    function(){  return page.vp.y + page.N.height() < runout;  }
			}
		f = function(){
			var offset = page.N.offset();
			page.vp = { x: offset.left - scroll.x , y: offset.top - scroll.y };  
			};  win.scroll( f );  f();
/*
		f = function(){  
			page.w = page.N.width();  
			page.h = page.N.height();  
			};  page.N.bind('DOMSubtreeModified', f );  f();
*/

		var float = {
			N : $('<div class="float" />').css({ position:'absolute', left:'0px', top:'0px', bottom:'0px', width:'0px' })
				.appendTo( page.N ),
			min: { h:464 },
			isMin: { h: function(){  return float.N.height() <= float.min.h;  }  }
			}
/*
		f = function(){
			float.w = float.N.width();
			float.h = float.N.height();
			};  page.N.bind('DOMSubtreeModified', f );  f();
*/
		conf.offset = { top: -parseInt(float.N.css('margin-top')), bottom: parseInt(float.N.css('margin-bottom')) };
			

		var mode = {
			num : 0,
			handler : function(){},
			stable : function(){
				float.N.css({ 
					position:'absolute', left:'0px', top:'0px', bottom:'0px', 
					width:'0px', height:'', margin:'' 
					});
				},
			fixX : function(){
				float.N.css({ left:''+ page.vp.x +'px' });
				},
			go1 : function(){ // mode 1 "night": float matches page, at most marginally visible
				var lastmode = mode.num;
				if( mode.num == 10 ) return; mode.num = 10;
//console.log('go1');
				mode.handler = function(){
					//if( page.seeMin.h() )  mode.go2();	// fix bottom to viewport bottom
					}; mode.handler();
				mode.stable();
				if( lastmode >10 ) page.N.trigger('TAZdusk');
				},
			go2 : function(){ // mode 2 "morning": page rules view, top visible, float bottom aligned w/ viewport
				var lastmode = mode.num;
				if( mode.num == 20 ) return; mode.num = 20;
//console.log('go2');
				mode.handler = function(){
					//if( page.overTheTop() ){ mode.go3a(); return; }	// fix top to viewport top
					//if( page.overTheBot() ){ mode.go3b(); return; }	// fix bottom to page bottom
					//if( float.isMin.h()   ){ mode.go1();  return; }	// back to page aligned
					float.N.height( viewport.h - page.vp.y + conf.offset.top );	// update height
					}; mode.handler();
				float.N.css({ position:'absolute', left:'0px', top:'0px', bottom:'', width:'0px', margin:'' });
				if( lastmode <20 ) page.N.trigger('TAZdawn');
				if( lastmode >30 ) page.N.trigger('TAZunfix'); 
				},
			go3a : function(){ // mode 3a "summer day": clipped page fills view, float matches viewport 
				var lastmode = mode.num;
				if( mode.num == 35 ) return; mode.num = 35;
//console.log('go3a');
				mode.handler = function(){
					//if(  page.overTheBot() ){ mode.go4(); return; }	// fix bottom to page bottom
					//if( !page.overTheTop() ){ mode.go2(); return; }	// fix top to page top
					mode.fixX();
					}; mode.handler();
				float.N.css({ position:'fixed', top:'0px', bottom:'0px', width:'0px', height:'', marginTop:'0px' });
				if( lastmode <30 ) page.N.trigger('TAZfix');
				},
			go3b : function(){ // mode 3b: "winter day": page fully visible, float matches page
				var lastmode = mode.num;
				if( mode.num == 30 ) return; mode.num = 30;
//console.log('go3b');
				mode.handler = function(){
					//if(  page.overTheTop() ){ mode.go4(); return; }	// fix top to viewport top
					//if( !page.overTheBot() ){ mode.go2(); return; }	// fix bottom to viewport bottom
					}; mode.handler();
				mode.stable();
				if( lastmode >30 ) page.N.trigger('TAZunfix'); 
				},
			go4 : function(){ // mode 4: "evening": page rules view, bottom visible, float top aligned w/ viewport
				var lastmode = mode.num;
				if( mode.num == 40 ) return; mode.num = 40;
//console.log('go4');
				float.N.css({ position:'fixed', top:'0px', bottom:'', width:'0px', marginTop:'0px' });
				mode.handler = function(){
					float.N.height( page.N.height() + page.vp.y - conf.offset.bottom );	// update height
					//if(  float.isMin.h()   ){ mode.go5();  return; }	// free top from viewport top
					//if( !page.overTheTop() ){ mode.go3b(); return; }	// fix top to page top
					//if( !page.overTheBot() ){ mode.go3a(); return; }	// fix bottom to viewport bottom
					mode.fixX();
					}; mode.handler();
				if( lastmode <=30 ) page.N.trigger('TAZfix');
				if( lastmode >40 ) page.N.trigger('TAZback');
				},
			go5 : function(){ // mode 5: "tonight": float following page, at most marginally visible
				var lastmode = mode.num;
				if( mode.num == 50 ) return; mode.num = 50;
//console.log('go5');
				mode.handler = function(){
					//if( float.N.offset().top > scroll.y ) mode.go4();	// fix top to viewport top
					}; mode.handler();
				//var top = ''+ float.N.position().top +'px';
				//var top = ''+ ( float.N.offset().top - page.N.offset().top ) +'px';
				//float.N.css({ position:'absolute', left:'0px', top: top, bottom:'0px', width:'0px', height:'', margin:'' });
				//var height = ''+ float.N.height() +'px';
				var height = ''+ ( runout - conf.offset.bottom ) +'px';
				float.N.css({ position:'absolute', left:'0px', top:'', bottom:'0px', width:'0px', height:height, margin:'' });
				if( lastmode <50 ) page.N.trigger('TAZpast');
				}
			};
		if( page.N.height() > float.min.h ) {
			win.scroll(function(){  
				if( 			! page.present()  )	mode.go1();
				else	if( 		page.runout()     )	mode.go5();
				else {	if(		page.overTheTop() )	{
						if(	page.overTheBot() )	mode.go4();
						else				mode.go3a();
						}
					else					{
						if(	page.overTheBot() )	mode.go3b();
						else				mode.go2();
						}
					}
				mode.handler();  
				});
			mode.go1(); // document reload ?!?
			}


//		$('>.head', page.N).appendTo( float.N ).css({ zIndex:0 });
		

/*
		$('<div>x</div>').css({ position:'absolute',    top:'0px', left:'0px'  , background:'blue' }).appendTo( float.N );
		$('<div>x</div>').css({ position:'absolute',    top:'0px', left:'940px', background:'blue' }).appendTo( float.N );
		$('<div>x</div>').css({ position:'absolute', bottom:'0px', left:'0px'  , background:'blue' }).appendTo( float.N );
		$('<div>x</div>').css({ position:'absolute', bottom:'0px', left:'940px', background:'blue' }).appendTo( float.N );
*/

		return float.N;
		}; // function float


	var mainmenu;
	var pages = $('#pages >.page');
	pages.each(function(i,e){
		var page = $(e);
		if( page.hasClass('corp') ) return;
		var fl = float( e );

		page.bind('TAZdawn TAZfix TAZpast TAZback TAZunfix TAZdusk', function(ev){
//console.log('' + ev.type + i);
			});

		var marge = $('<div class="rightbar" />').appendTo( fl );
		var nose = page.find('>.head >.nose').appendTo( marge ).css({ zIndex:0 });
		page.find('>.wing')
			.addClass('floating')
			.appendTo( marge )
			.trigger('filOtaz_de_float_mounted')
			;
		//page.bind('TAZpast', function(){  marge.fadeOut();  });
		//page.bind('TAZback', function(){  marge.fadeIn();  });

		var head = $('>.head', page);
		var menu = $('>ul.newsnavigation', head);
		if( i>0 && $('>li',menu).length >1 ) {
			menu.removeClass('newsnavigation').addClass('subnavigation');
			$('>li.home',menu).remove();
			page.bind('TAZfix TAZback', function(){
//				mainmenu.prepend( menu.hide().fadeIn(100) );
				mainmenu.prepend( menu );
				});
			page.bind('TAZunfix', function(){
				head.prepend( menu );
				});
			page.bind('TAZpast', function(){
				menu.fadeOut(function(){ head.prepend( menu.show() ); });
				});
			page.bind('TAZback', function(){
				mainmenu.prepend( menu.hide().fadeIn() );
				});
			}
		});
	
	(function(){
		var page = $('#pages');
		var fl = float( page );
		mainmenu = page.find('>.page.first >.head').appendTo( fl );

		// shrink logo
		var homeN = $('>ul.newsnavigation >li.home', mainmenu);
		var home = {
			width:	parseInt(homeN.css('width')),
			height:	parseInt(homeN.css('height')),
			bgImg:	homeN.css('background-image'),
			bgPos:	homeN.css('background-position').split(' '),
			bgSize:	homeN.css('background-size').split(' ')
			};
		home.bgPos   = {  x: parseInt(home.bgPos[0]),  y:	parseInt(home.bgPos[1])  };
//		home.bgWidth = parseInt(home.bgSize[0]);
		home.bgWidth = 64;
		home.small = 	{
				height: '34px',
				backgroundImage: 'url("/lib/ch/web/pix/tazze33.png")',
				backgroundPosition: '-2px 0px',
				backgroundSize: 'auto auto'
				}; 
		var logoN = $('<div />')
			.css({	backgroundImage:'url("/lib/ch/web/pix/tazde63.png")',
				position:'absolute', bottom:'0px', left:'20px', right:'0px',
				backgroundRepeat: 'no-repeat',
				height: '34px',
				display: 'none'
				})
			.appendTo( homeN.find('>a') );
/*
		var logoN = $('>a', homeN );
		var logo = {
			small:	{
				backgroundImage: 'url("/lib/ch/web/pix/tazde63.png")',
				backgroundPosition: '20px 0px',
				backgroundRepeat: 'no-repeat'
//				backgroundSize: '64px auto',
//				marginLeft: '26px',
//				width: '77px'
				},
			none:	{
				backgroundImage: null
				}
			};
*/

		var blocked;
		var dynCss;
		var shrink = function(){
			var height = home.height - ( win.scrollTop() - mainmenu.offset().top );
			var factor = height / home.height;
			if( win.scrollTop() < mainmenu.offset().top ) {
				win.unbind('scroll', shrink );
				win.bind('scroll', start );
				factor = 1;
				}
			dynCss = {
				width:			''+ Math.round( home.width +10*(1-factor)	) +'px',
				height:			''+ Math.round( factor* home.height	) +'px',
				backgroundPosition:	''+ Math.round( factor* home.bgPos.x	) +'px '
							  + Math.round( factor* home.bgPos.y	) +'px',
				backgroundSize:		''+ Math.round( factor* home.bgWidth	) +'px auto',
				toString: function(){
					return   '{ width:'+	this.width 
						+', height:'+	this.height
						+', backgroundPosition: '+	this.backgroundPosition
						+', backgroundSize: '+		this.backgroundSize
						+' }';
					}
				};
			if( !blocked ) homeN.css( dynCss );
			};
		var restart = function(ev){
			if( ev.target != page[0] ) return;
			page.unbind('TAZunfix', restart );
			logoN.fadeOut(50);
			homeN.css( dynCss ).css({ backgroundImage: home.bgImg });
			blocked=false;
			win.bind('scroll', shrink );
			}
		var stop = function(ev){
			if( ev.target != page[0] ) return;
			blocked=true;
			win.unbind('scroll', shrink );
			page.unbind('TAZfix', stop );
			page.bind('TAZunfix', restart );
			homeN.css( home.small );
			logoN.fadeIn(200);
			};
		var start = function(ev){
			if( win.scrollTop() < mainmenu.offset().top )  return;
			win.bind('scroll', shrink );
			page.bind('TAZfix', stop );
			win.unbind('scroll', start );
			};
		win.bind('scroll', start );
		


		})();
	


/*
			f = function(){  console.log('TAZdawn: '+ $('.nose >h2',fl).text() );  };
			win.scroll( f ); f();
*/

	});


/* ----- filOtaz_de.Flyout.js ------------------------------------------------------------------- */

(function(){	// "class" filOtaz_de.Flyout
	if( filOtaz_de.Flyout )	return;	// don't interfere!


// private "class" data

// single "main" flyout, to be shared
var flyoutN = $('<div />')
	.attr('id','mainFlyout')
	.addClass('flyout')
	.hide()
	;

var triggers = $();	// will hold show/hide triggering elements
var triggerSwap = null;	// will hold swapping countdown
var current = null;	// will hold active containerN



// the Flyout constructor
filOtaz_de.Flyout = function( def ) {
	var flyout = this;
	if( !( def && def.trigger ) ) return undefined;


	// private

	var containerN = $('<div class="container" />')
		.addClass( def.className );

	var lists = {};


	// public

	// they may add content
	this.appendList = function( name, def ) {
		return lists[name] = new filOtaz_de.HtmlList( def ).appendTo( containerN );
		}
	this.prependList = function( name, def ) {
		return lists[name] = new filOtaz_de.HtmlList( def ).prependTo( containerN );
		}


	// construction

	// register triggers
	triggers = triggers.add( def.trigger );

	// activate swapping
	def.trigger
		.mouseenter( function(){
			if( triggerSwap ) clearTimeout( triggerSwap );
			triggerSwap = setTimeout( function(){
				if( !containerN.is(':hidden') ) return;
				flyoutN.height( flyoutN.height() );	// explicitly set implicit height
				if( current ) current
					.css({ position:'absolute' })
					.removeClass('active')
					.fadeOut('fast', function(){  $(this).detach(); })
					;
				current = containerN
					.addClass('active')
					.appendTo( flyoutN )
					.hide().fadeIn('fast')
					;
				flyoutN.animate({ height : containerN.height() }, 'fast' );
				}, 222 );
			} )
		.mouseleave( function(){
			if( triggerSwap ) clearTimeout( triggerSwap );
			} )
		;

	// ToDo: automatically activate show/hiding


	}; // filOtaz_de.Flyout contructor



// public "class" methods

// activate shared "main" flyout"
var triggerHide;	// will hold hiding countdown
var primedTriggers;
filOtaz_de.Flyout.primeTriggers = function() {

		var off = function() {
			if( ! triggerHide  )
				triggerHide = setTimeout( function(){ 
					flyoutN.fadeOut('slow', function(){  
						if( current )	current.detach(); 
						current = null; 
						flyoutN.height(0);
						});
					}, 111 )
				;
			};
		var on = function() {
			if( triggerHide ) {
				clearTimeout( triggerHide );
				triggerHide = null;
				}
			if( flyoutN.is(':hidden') )
				flyoutN.fadeIn('fast')
			else {
				var level = flyoutN.css('opacity');
				if( level > 0.5 ) {
					flyoutN	.stop()
						.fadeTo( 100* (1.0-level), 1.0 )
						;
					}
				}
			};

		if( primedTriggers ) primedTriggers
			.unbind('mouseenter', on )
			.unbind('mouseleave', off )
			;
		primedTriggers = triggers.add( flyoutN )
			.mouseenter( on )
			.mouseleave( off )
			;

		}; //filOtaz_de.Flyout.primeTriggers


// mount flyout common outer container
filOtaz_de.Flyout.mount = function( mountTo ){
		$('<div />')
			.addClass('pin')
			.append( flyoutN )
			.appendTo( mountTo )
			;
		};




})(); // filOtaz_de.Flyout "class" container


/* ----- filOtaz_de.Form.js ------------------------------------------------------------------- */

(function(){	// "class" filOtaz_de.Form
	if( filOtaz_de.Form )	return;	// don't interfere!

// === private "class" data
var formsList = [];
var formsById = {};


// === the Form constructor
filOtaz_de.Form = function( id_or_node ) {  var form = this;
	var formN = ( typeof id_or_node == 'string' || id_or_node instanceof String )
		? $('#'+ id_or_node )
		: $( id_or_node )
		;
	if( !formN[0] ) return;
	if( formN[0].filOtaz_de_Form && formN[0].filOtaz_de_Form instanceof filOtaz_de.Form )	// already initialized
		return formN[0].filOtaz_de_Form;

	formN.addClass('js');
	formN.find('>.sectbody >span').each( function(i,e){	// ToDo: generalize for <label for="…" …>
		var n = $(e);
		var inputN = n.find('>input,>textarea').first();
		var hintN  = n.find('>p').first();
		n.addClass('field'); hintN.addClass('label');	// normalize
		var preset = function(){
			n.addClass('preset');
			hintN.show();	// Todo: let CSS handle hiding?
			};
		var clear = function(){
			hintN.hide();	// Todo: let CSS handle hiding?
			n.removeClass('preset');
			};
		var checkset = function(){
			if( inputN.val() )
				clear();
			else	preset();
			};
		checkset();
		inputN.focus( clear );
		inputN.blur( checkset );
		hintN.click( function(){  inputN.focus();  } );
		});

	var submitN = formN.find('>.sectbody >input:submit');

	// register
	formsList.push( this );
	var id = formN.attr('id'); if( id ) formsById[ id ] = this;
	formN[0].filOtaz_de_Form = this;  // register ourselfes on DOM node

	var cancelN, cancel;
	var resetCancel = function() {
		formN.unbind('filOtaz_de.Form.done', resetCancel );
		if( cancelN ) cancelN.remove(); cancelN = null;
		};
	this.cancel = function( callback ) {
		if( callback && callback instanceof Function ) {
			cancel = function() {
				resetCancel();
				callback();
				formN.trigger('filOtaz_de.Form.cancel');
				};
			if( cancelN ) cancelN.remove();
			cancelN = $('<input type="button" class="button" name="cancel" value="abbrechen" />')
				.insertAfter( submitN )
				.click( function(){  cancel(); return false;  } )
				;
			formN.bind('filOtaz_de.Form.done', resetCancel );
			}
		else	cancel();
		};

	}; // filOtaz_de.Form contructor

// === public "class" methods



})(); // filOtaz_de.Form "class" container


/* ----- filOtaz_de.Overlay.js ------------------------------------------------------------------- */

(function(){	// "class" filOtaz_de.Overlay
	if( !window.filOtaz_de )  window.filOtaz_de = new Object;
	if(  window.filOtaz_de.Overlay )  return; // don't interfere!


// === private "class" data

// anchor nodes
var node = {
	doc		: $( document )
	};
var ready;
$(document).ready(function(){
	node.outer	= $('#background');			// to contain page background, frost and overlay
	node.inner	= node.outer.find('>#centered');	// page main content, to be background
	node.pages	= node.inner.find('>#pages');		// pages of main content
	ready = true;
	});

// state
var current;	// currently visible overlay

// all overlays use common fixation
var fixed;


// === private class methods

var fix = function() {
	if( fixed ) return;

	var minScroll = node.pages.find('>.float').offset().top;
	if( node.doc.scrollTop() < minScroll )  window.scrollTo( node.doc.scrollLeft(), minScroll );	// animate?

	fixed = {
		scroll	: { top: node.doc.scrollTop(), left: node.doc.scrollLeft() },
		inner	: node.inner.offset(),
//		pages	: node.pages.offset()
		pages	: node.pages.children('ul#globalnavigation').first().offset()
		};

	node.inner.css({  position:'fixed',
		top  : ''+( fixed.inner.top  - fixed.scroll.top  )+'px',
		left : ''+( fixed.inner.left - fixed.scroll.left )+'px'
		});
	window.scrollTo( 0, 0 );

	};

var unfix = function() {
	if( !fixed ) return;

//	node.inner.css({  position: null, top: null, left: null  });	// IE won't fall back to central css
	node.inner.css({  position: 'relative', top: null, left: null  });
	window.scrollTo( fixed.scroll.left, fixed.scroll.top );

	fixed = false;
	};


var close = function() {
	if( current ) current.unpop();
	return false;
	}


// === the Overlay constructor

window.filOtaz_de.Overlay = function( conf ) {

	var conf = conf || {};
	conf.animation	= conf.animation || 300;

	// === private state

	var last;	// optionally chain overlays

	var win = $('<div class="overlay" />').append( $('<a class="close">schließen</a>').click( close ) );	// will be my "self" object

	var popped = false;
	var beforeOpen = function(){};
	win.beforeOpen = function( fn ){  beforeOpen = fn;  };
	win.pop = function( callback ) {
		if( popped ) return false; popped = true;

		var draw = function() {
			if( !ready ) {	// DOM not ready - delay our call
				$(document).ready(function(){  draw();  });
				return;
				}

			// create dom fragements late
			if( ! node.frost )  node.frost = $('<div id="frost"><div /></div>')
				.click( close )
				.appendTo( node.outer );
			if( ! win.isMounted ) {
				win.appendTo( node.outer );
				win.isMounted = true;
				}

			fix();

			if( conf.black )  node.outer.addClass('black')
				else	  node.outer.removeClass('black');

			node.frost.fadeIn( conf.animation /2, function(){
				node.outer.addClass('frosted');
				beforeOpen();
				win.css({  marginLeft:''+ fixed.pages.left +'px'  }).fadeIn( conf.animation, function(){
					if( callback ) callback();
					});
				});
			}

		if( current ) {
			last = current;
			current.unpop( draw );
			}
		else draw();
		current = win;

		return win;
		};	//win.pop


	var beforeClose = function(){};
	win.beforeClose = function( fn ){  beforeClose = fn;  };
	win.unpop = function(callback) {
		if( !popped ) return false;

		beforeClose();
		current = false;
		win.fadeOut( conf.animation, function(){
			window.location.hash = '';
			});
		node.frost.fadeOut( conf.animation *1.5, function(){
			node.outer.removeClass('frosted');
			if( conf.black )  node.outer.removeClass('black');
			if( last ) last.pop()
				else unfix();
			last = false;
			popped = false;
			if( callback ) callback();
			});

		return win;
		}	//win.unpop

	win.flip = function() {
		if( win == current ) win.unpop()
			else    win.pop();
		}

	return win;
	}; // Overlay constructor
			

})(); // filOtaz_de.Overlay "class" container


/* ----- filOtaz_de.accordion.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )	window.filOtaz_de = new Object;
if( ! window.filOtaz_de.accordion ) 	//don't interfere!
window.filOtaz_de.accordion = function( id, show ) {

	/*	
		should be called inline after each accordions's html to ensure early processing
	*/

	var me = $('#'+ id ).addClass('js');
	var drawers = me.find('>.sect');


	var active, shown;
	drawers.each(function(i,n){
		var me = $( n );
		var trigger = me.find('>.secthead');
		var drawer = me.find('>.sectbody');

		if( i+1 == show ) {
			active = me.addClass('active');
			shown = drawer;
			}

		trigger.click(function(){
			if( active ) {
				active.removeClass('active');
				shown.slideUp('linear');
				}
			
			if( me == active ) {
				active = shown = undefined;
				}
			else	{
				active = me.addClass('active');
				shown = drawer.slideDown('linear');
				}
			return false;
			});

		
		});


}; // window.filOtaz_de.accordion


/* ----- filOtaz_de.carousel.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )	window.filOtaz_de = new Object;
if( ! window.filOtaz_de.carousel ) 	//don't interfere!
window.filOtaz_de.carousel = function( id ) {

	/*	
		should be called inline after each carousels's html to ensure early processing
	*/

	var me = $('#'+ id ).addClass('js');
	var slider = me.find('>ul.directory');
	var cars = slider.find('>li');

	var pos = Math.floor( slider.position().left /-516 );

	var active, activeIsProduct;
	var activate = function( pos ) {
		if( active ) active.removeClass('active');
		active = cars.eq( pos );
		activeIsProduct = active.hasClass('product');
		active.addClass('active');
		};
	activate( pos );

	var stepWidth = function() {
		return activeIsProduct ? 516 : 624;
		};

/*
	var roll = function( steps ) {
		if( steps >0 ) active.find('>a.objlink').animate({ padding-right: 0 });
		pos += steps; activate( pos );
		if( steps >0 ) active.find('>a.objlink').css({ padding-right: 116 });
		slider.animate({ left: pos *-516 }, function(){
			
			});
		}
*/


	var left, right;

	var rollR = function() {
		if( left && pos == 0 )  left.fadeIn();
		if( activeIsProduct )  active.find('>a.objlink').animate({ paddingRight: 0 });
		slider.animate({ left: slider.position().left - stepWidth() });
		pos +=1; activate( pos );
		if( right && pos+1 >= cars.length )  right.fadeOut();
		};
	var rollL = function() {
		if( right && pos+1 == cars.length )  right.fadeIn();
		pos -=1; activate( pos );
		slider.animate({ left: slider.position().left + stepWidth() });
		if( activeIsProduct )  active.find('>a.objlink').animate({ paddingRight: 116 });
		if( left && pos <= 0 )  left.fadeOut();
		};

	left = $('<div class="left cursor"></div>')
		.click(function(){ rollL(); });
	if( pos <= 0 )  left.hide();
	left.appendTo( me );

	right = $('<div class="right cursor"></div>')
		.click(function(){ rollR(); });
	if( pos+1 >= cars.length ) right.hide();
	right.appendTo( me );


/*
	$('#'+ id ).each(function(){	if( this.racked ) return;	// already processed
	
		var boxes = $('.box, .plugin_rechts', this);
		boxes.eq(0).addClass('first_box');
		boxes.eq( boxes.length-1 ).addClass('last_box');
	
		this.racked = true;	// mark this done
		});
*/

}; // window.filOtaz_de.carousel


/* ----- filOtaz_de.flyouts.js ------------------------------------------------------------------- */

$(document).ready(function(){	// instantiate flyouts

	// my triggering DOM elements
	var newsMenu = $('#pages >.float >.head >.newsnavigation');
	var homeLogo = newsMenu.find('>li.home');
	var newsDepts = newsMenu.find('>li').not('li.home').find('>a');

	// my tree.xml whereabouts
	var newsRootID = 4608;
	var corpRootID = 4205;

	// ToDo: replace with more general URL handling
	var ratio_channel = document.location.pathname.replace(/^.*(;[A-z0-9_-]+).*$/, "$1");


	// mount flyout(s) to DOM ( shows up below given element usually -> details in CSS )
	filOtaz_de.Flyout.mount('#pages >.float >.head');



	// define flyouts synchronously, so we can prime triggers en bloc

	// create my home logo flyout
	var homeLogoFlyout = {
		flyout	: new filOtaz_de.Flyout({
			trigger		: homeLogo,	// triggering element
			className		: 'home',	// to be additionally set on #mainFlyout>div.container
			}),
		navigation	: {		// my content definition 
			id	: 4205,
			list	: [ { id : newsRootID }, { parentId : corpRootID } ]	// 
			},
		directory	: {		// my content definition
			id		: 4533,
			url		: '/!p4533/',
			length		: 1,
			leads		: 0,
			picts		: 1,
			depts		: 1,
			compact		: 1
			},
		
		};
//console.log( homeLogoFlyout.flyout );
	homeLogoFlyout.directory.obj = homeLogoFlyout.flyout.appendList( 'directory', { role : 'directory' } );

	// create my news departmens' flyouts
	var newsDeptsFlyouts = newsDepts.map( function( i, e ){
		var dept = $( e );
		var deptUrl = dept.attr('href');
	//	var deptId = parseInt( deptUrl.replace( /^[^!]*!p([0-9]+).*$/,'$1'), 10 ); 
		var deptId = parseInt( dept.attr('id').replace( /^menu_p([0-9]+)$/, '$1' ), 10 );

		var flyout = {
			flyout	: new filOtaz_de.Flyout({
				trigger		: dept,		// triggering element
				}),
			navigation	: {		// my content definition
				list	: [ { id : deptId }, { parentId : deptId } ],
				id 	: deptId, 
				url 	: deptUrl 
				},
			directory	: {		// my content definition
				id	: deptId, 
				url	: deptUrl,
				length	: 4,
				leads	: 0,
				picts	: 1,
				leads	: 0,
				compact : 1
				}
			};
		flyout.directory.obj = flyout.flyout.appendList( 'directory', { role : 'directory' } );
		return flyout;
		} ); //newsDepts.map

	// activate Triggers after they are all defined (within their flyouts)
	filOtaz_de.Flyout.primeTriggers();



	// asynchronously fill flyouts

	// get my tree hierarchy to fill my flyouts' navigation lists
	$.get('/!/tree.xml', function( data, status, jqx ) {
		//var tree = $( data ).find('tree:first');	// !!! IE9 doesn't like :first
		var tree = $( data ).find('tree').first();
		$()	.add([ homeLogoFlyout ])
			.add( newsDeptsFlyouts )
			.each( function( i, flyout ){
				// get flyout's content definitions
				var def = flyout.navigation;

				// collect my navi nodes according to definition
				var nodes = $();
				var defList = def.list || [ { parentId : def.id } ];
				$( defList ).each( function( i, def ){
					if( def.id )
						//nodes = nodes.add( tree.find('node#'+ def.id       +':first      ') );	// !!! IE9 doesn't like :first
						nodes = nodes.add( tree.find('node#'+ def.id       ).first() );
					if( def.parentId ) {
						//nodes = nodes.add( tree.find('node#'+ def.parentId +':first >node') );	// !!! IE9 doesn't like :first
						nodes = nodes.add( tree.find('node#'+ def.parentId ).first().find('>node') );
						}
					} );
				nodes = nodes.not('[hidden]');

				if( nodes.length ) {
					flyout.navigation.obj = flyout.flyout.prependList( 'navigation', { role : 'navigation' } );
					nodes.each( function( i, n ){
						// append each node's html to navigation list
						var node = $( n );
						var url = node.attr('href');
						// ToDo: replace with generalized ratioURL object
						if( /^\//.test( url ) || /^https?:\/\/(www\.)?taz\.de/.test( url ) )
							if( /!/.test( url ) )
								// url = url.replace(/\/+$/, "") + ratio_channel +'/';
								url = url.replace(/\/+$/, "") + "";
						flyout.navigation.obj.append( $('<a href="'+ url +'" />')	// append navigation list
							.append( $('<span />')
								.text( node.attr('name') )
								)
							);
						} );
					}
				else {	flyout.directory.obj.addClass('solo');
					};

				// mark my contents' according to lineage
				$([ flyout.navigation, flyout.directory ]).each(function( i, list ) {
					//var node = tree.find('node#'+ list.id +':first');	// !!! IE9 doesn't like :first
					var node = tree.find('node#'+ list.id ).first();
					var lineage = node.parents().add( node );
					lineage =
						lineage.is('#'+ newsRootID ) ? 'news' : 'corp';
					if( list.obj ) list.obj.addClass( lineage );				// mark content
					} );
				} )
			;
		}, 'xml' ); //get tree.xml


	// get my contents to fill my flyouts' directory lists
	$().add([ homeLogoFlyout ]).add( newsDeptsFlyouts ).each(function( i, flyout ) {
		var def = flyout.directory;
		var url = def.url; if( !url ) return;

		// fetch xml and display directories' contents
		$.get( url + '/c.xml', function( data, status, jqx ){
			var xml = $( data ).find('content >directory').first();
			if( xml.length )	// got a directory
				var items = xml.find('>list>item').slice( 0, def.length );
				//var items = xml.find('>list>item:lt('+ def.length +')');	// // !!! IE9 doesn't like :lt()
			else {	xml = $( data ).find('content >item').first();	// look for article
				var items = xml.add( 
					xml	.find('>extra[name="tx_newspaper_extra_combolinkbox"] >linklist >list >item')
						.slice(0, def.length -1 )
					);	// use article and related
				}

			if( ! items.length ) return;
			items.each( function( i, n ){ var item = $( n );
				flyout.directory.obj.append( (new filOtaz_de.Article( item ) ).teaser({
					kicker		: true,
					headline	: true,
					lead		: ( i < def.leads ),
					picture		: ( i < def.picts ),
					compact		: ( i < def.compact ),
					department	: ( i < def.depts )
					}) );
				} );

			}, 'xml' );
		} );



	});// instantiate news menu's flyouts






$(document).ready(function(){
/* ToDo be early (-ier than DomContentLoaded) - seperate into load phases: 
	* create flyouts as early as possible while loading header menus.
	*/


	/* corp menu dropdown */

	var corpMenu = $('ul#globalnavigation');
	var corpMenuItems = $('>li', corpMenu );

	var corpMenuDropdown = $('<ul />')
		.addClass('flyout')
		.hide()
		;
	var dropdownItems = corpMenuItems.slice(7)
		.appendTo( corpMenuDropdown )
		;
	corpMenu.css({ overflow:'visible' });

	var corpMenuDropdownTrigger = $('<li><a><span>weitere</span></a></li>')
		.addClass('more')
		.click( function(){
			if( corpMenuDropdown.shown ) {
				corpMenuDropdown.slideUp('fast');
				corpMenuDropdown.shown = false;
				}
			else	{
				corpMenuDropdown.slideDown('fast');
				corpMenuDropdown.shown = true;
				}
			} )
		.append( corpMenuDropdown )
		.appendTo( corpMenu )
		;
	dropdownItems.slice(-1)
		.addClass('right')
		.appendTo( corpMenu )
		;

	});// corp menu dropdown





/* ----- filOtaz_de.Gallery.js ------------------------------------------------------------------- */

/*	makes and opens an image gallery from href string
	to be used from gallery teasers or hash-links or hashed URLs
*/
(function(){	// "class" filOtaz_de.Gallery
	if( filOtaz_de.Gallery )	return;	// don't interfere!

// === private "class" data

var galleries = {};


// === private methods


// === the Gallery constructor

filOtaz_de.Gallery = function( href ) {
	if( href.search(/\/$/) ==-1 )	href = href +'/';

	// only one gallery per identical href
	if( galleries[ href ] ) {
		if( galleries[ href ].ready )	galleries[ href ].pop();
		return galleries[ href ];
		}
	galleries[ href ] = this;


	// === private data

	var gal = this;

	var	picts	// input data
	var 	pos;	// state
	var	ol, rackN, sectN, titleN, bodyN, imgN;	// output nodes


	// === public interface

	this.show = function( toPos ) {	// show picture at position toPos
		if( !picts ) return;
		pos	= toPos || 0;

		if( pos == 0 )			sectN.addClass('first'); else sectN.removeClass('first');
		if( pos == picts.length-1 )	sectN.addClass('last' ); else sectN.removeClass('last' );

		var 	pict	= picts.eq( pos ),
			src	= pict.find('>pixmap').attr('src'),
			alt	= pict.find('>descr[rel="alternate"]').text(),
			caption	= pict.find('>caption').text(),
			credit	= pict.find('>credit').text();

		var newBodyN = $('<div />').hide().append(
			imgN = $('<img src="'+ src +'" alt="'+ alt +'" title="nächstes Bild" />')
			.bind('load', function() {
				newBodyN.addClass('sectbody').fadeIn( 300, function(){
					bodyN.remove();
					bodyN = $(this);
					});
				}),
			'<p class="caption">'+ caption +' <span class="credit">Bild: '+ credit +'</span></p>'
			)
		.click( gal.next )
		.insertAfter( bodyN );
    
    patOtaz_de.ivw({ gig: 'web', agof: false, name: 'gallery' });
		};

	this.back = function(){		// show previous picture
		if( pos >0 )
			gal.show( pos -1 );
		return false;	// to be used as event handler
		};

	this.next = function(){		// show next picture
		if( pos < picts.length-1 )
			gal.show( pos +1 );
		return false;   // to be used as event handler
		};

	this.pop = function(){  ol.pop(); return this;  };


	// === initialize

	ol = new filOtaz_de.Overlay({  black : true  }).addClass('page');
	rackN = $('<div class="rack" />').append(
		sectN = $('<div class="sect sect_gallery" />').append(
			$('<div class="left cursor" />').click(  gal.back ),
			$('<div class="right cursor" />').click( gal.next ),
			titleN	= $('<span>Bildergalerie</span>'),
			bodyN	= $('<div class="sectbody" />')
			)
		)
	.appendTo( ol );
	titleN.wrap('<div class="secthead" role="heading"><h2><a/></h2></div>');

	$.get( href +'c.xml', function( data ) {
		var	content	= $( data ).find('content >collection'),
			title	= content.find('>title >lead').first().text();
		picts	= content.find('>list >item >picture');
		titleN.text( title );
		gal.show();
		}, 'xml' ); //$.get

	this.pop();

	this.ready = true;


	}; // filOtaz_de.Gallery contructor


// === public "class" methods



})(); // filOtaz_de.Gallery "class" container


/* ----- filOtaz_de.rack.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )	window.filOtaz_de = new Object;
if( ! window.filOtaz_de.rack ) 	//don't interfere!
window.filOtaz_de.rack = function() {

	/*	make all (not yet working) racks correctly styleable
		should be called inline after each racks's html to ensure early processing
		expects in DOM:	.rack { .box, ... }
	*/

	$('.rack').each(function(){	if( this.racked ) return;	// already processed
	
		var boxes = $('.box, .plugin_rechts', this);
		boxes.eq(0).addClass('first_box');
		boxes.eq( boxes.length-1 ).addClass('last_box');
	
		this.racked = true;	// mark this done
		});

}; // window.filOtaz_de.rack


/* ----- filOtaz_de.searchslot.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )       window.filOtaz_de = new Object;
if( ! window.filOtaz_de.searchslot )      //don't interfere!
window.filOtaz_de.searchslot = function( selector, message ) {
	
	/* be a nice search input field */

	var inputs = $( selector ? selector : 'form.search input.text' );	// backward compatible by default

	if ($(this).val()=='suchen ...' ) inputs.addClass( 'preset' );

	if ( message && inputs.val()=='' ) {
		inputs.val( message )
		inputs.addClass( 'preset' );
	/*	 else	var message = inputs.val();*/
	}
	
	inputs.focus(function(){
			$(this).removeClass( 'preset' );
			if( ( message && $(this).val()==message ) || $(this).val()=='suchen ...' )
			$(this).val( '' );
		});

/*
        if ( message ) {
                inputs.val( message );
                inputs.focus(function(){ if ($(this).val()==message)
$(this).val( '' ).removeClass( 'preset' );  });
        } else {
                inputs.focus(function(){
$(this).val( '' ).removeClass( 'preset' );  });
        }
*/

} // window.filOtaz_de.searchslot


/* ----- filOtaz_de.tabbox.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )	window.filOtaz_de = new Object;

(function(){	if( window.filOtaz_de.tabbrowser ) return;	//don't interfere!
window.filOtaz_de.tabbrowser = function( width ) {

	/*	make all (not yet working) tabboxes functional
		should be called inline after each tabbox's html to ensure early processing
		expects in DOM:	.tabbox { .tab { .secthead { img, a }, .sectbody }, ... }
	*/

	$('.tabbox').each(function(){	if( this.tabbed ) return;	// already processed

		var tabs = $('.tab', this);
		var twidth = Math.floor(width/tabs.length);
		var selected;

		tabs.each(function(i,el){	var tab = $(el);
			tab.find('.secthead')
			.css({
				left: (i*twidth) +'px',
				width: (twidth-28)+'px',
				display:'block' 
				})
			.click(function(){	if( selected === tab ) return; //already selected
				selected.find('.sectbody').css({ display:'none' });
				selected = tab;
				selected.find('.sectbody').css({ display:'block' });
				})
			.hover(function(){	if( selected === tab ) return; //already active
					selected.removeClass('active_tab');
					tab.addClass('active_tab');
				}, function(){	if( selected === tab ) return; //already active
					tab.removeClass('active_tab');
					selected.addClass('active_tab');
				});
				
			if( i == 0 ) {	// default
				selected = tab;
				selected.addClass('active_tab');
				}
				
			});	//tabs.each
		
		this.tabbed = true;	// mark this done
		});
	
	
} })(); // window.filOtaz_de.tabbrowser

/* ----- filOtaz_de.TomOL.js ------------------------------------------------------------------- */

/*	makes and opens "Tom" overlay from special id string, date string or url
	to be used from "Tom" teasers or hash-links or hashed URLs
*/
(function(){	// "class" filOtaz_de.TomOL
	if( filOtaz_de.TomOL )	return; // don't interfere!

// === private "class" data

var tom;

// === private methods


// === the TomOL constructor

filOtaz_de.TomOL = function( tomid ) {

	// only one Tom window at all
	if( tom ) {
		if( tom.ready )	tom.pop();
		tom.show( tomid );
		return tom;
		}
	tom = this;


	// === private data

	var	ol, rack, sect, titleN, body;	// output nodes

	// === public interface

	this.pop = function(){  ol.pop(); return this;  };

	this.load = function( href ) {
		$.get( href, function( data ) {
			
			var content	= $( data ).find('#popup_content_tom');
			var title	= content.find('>p').first().text();
			var strip	= content.find('>.tom_content >a');
			var img		= strip.find('>img');
      
      patOtaz_de.ivw({ gig: 'web', agof: false, name: 'tom' });
						
			strip.hide()
				.click( function(){
					if( window.location.hash == '#!tom=tomshuffle' )
						$(window).trigger('hashchange');
					else	window.location.hash = '!tom=tomshuffle';
					return false;  
					})
				.insertAfter( body );
						
			img.bind('load', function() {
				titleN.text( title );
				strip.addClass('sectbody')
					.append('<p class="caption">Shuffle den Tom!</p>')
					.fadeIn( 300, function(){
						body.remove();
						body = $(this)
						});
				});
						
			}, 'html' ); //$.get
		}; //tom.load

	this.show = function( tomid ) {
		var href = '/digitaz/.tom/';
		var date = new Date( tomid );
		try {	date = date.toISOString();
			}
		catch(e) {
			if( tomid =='tomdestages' || tomid =='tomshuffle' )
				tom.load( href + tomid )
			else
				tom.load( href = tomid );
			return;
			}
		if( date instanceof String || (typeof date) =='string'  )
			tom.load( href +'tomdestages?day='+ date.substr(0,10).replace(/-/g,'/') )
		else	console.log('filOtaz.de.TomOL.show error: could not handle argument "'+ tomid +'"');
		};


	// === initialize
	ol = new filOtaz_de.Overlay().addClass('body');
				
	rack = $('<div class="rack" />').append(
		sect = $('<div class="sect sect_touche" />').append(
			titleN	= $('<span>Tom des Tages</span>'),
			body	= $('<div class="sectbody" />')
			),
		'<div class="sect sect_tomlinks"><ul class="sectbody directory">' 
			+'<li class="first"><a href="/bei_tom/!t11462/" target="_blank"><span>Zu Hause „bei TOM“</span></a></li>'
			+'<li class="last" ><a href="/zeitung/tazshop/tom/" target="_blank"><span>TOM im taz.shop</span></a></li>'
			+'</ul></div>'
		)
		.appendTo( ol );
	titleN.wrap('<div class="secthead" role="heading"><h2><a/></h2></div>');

	this.show( tomid ); this.pop();
	this.ready = true;

}; //window.filOtaz_de.TomOL
		
})();


/* ----- filOtaz_de.Video.js ------------------------------------------------------------------- */

/*	makes and opens a video overlay
	to be used from video teasers
*/
(function(){    // "class" filOtaz_de.Video
	if( filOtaz_de.Video )	return; // don't interfere!

// === private "class" data

var videos = {};


// === private methods


// === the Video constructor

filOtaz_de.Video = function( html, identifier ) {

	var html = $( html );
	var identifier = identifier || html.text().trim().substr(0,128);
console.log( identifier );

	// only one video per identifier
	if( videos[ identifier ] ) {
console.log('found');
		if( videos[ identifier ].ready )	videos[ identifier ].pop();
		return videos[ identifier ];
		}
	videos[ identifier ] = this;


	// === private data

	var vid = this;

	var ol, rackN, sectN;


	// === public interface

	this.pop = function(){
    ol.pop();
    patOtaz_de.ivw({ gig: 'web', agof: false, name: 'video' });
    return this;
    };

	this.beforeClose = function( fn ){  ol.beforeClose( fn );  };
	this.beforeOpen = function( fn ){  ol.beforeOpen( fn );  };

	// === initialize

	ol = new filOtaz_de.Overlay({  black : true  }).addClass('page');
	rackN = $('<div class="rack" />')
	.append( html )
	.appendTo( ol );

	this.pop();

	this.ready = true;

	}; // filOtaz_de.Video contructor


// === public "class" methods


})(); // filOtaz_de.Video "class" container


/* ----- filOtaz_de.VimeoVideo.js ------------------------------------------------------------------- */

(function(){	// "class" filOtaz_de.VimeoVideo
	if( filOtaz_de.VimeoVideo )	return;	// don't interfere!


// === private "class" data

var videos = {};


// === private methods


// === the VimeoVideo constructor

filOtaz_de.VimeoVideo = function( href ) {
console.log('filOtaz_de.VimeoVideo');
	if( href.search(/\/$/) ==-1 )   var href = href +'/';

	// only one video per identical href
	if( videos[ href ] ) {
		if( videos[ href ].ready )	videos[ href ].pop();
		return videos[ href ];
		}


	// === private data

	var vid, sectN, titleN, bodyN, vidN, descrN;

	// === public interface

	// === initialize

	sectN =	$('<div class="first last odd sect sect_video" role="region" />').append(
		titleN	= $('<span>Vimeo-Video</span>'),
		bodyN	= $('<div class="sectbody" />').append(
			descrN	= $('<p class="caption" />')
			)
		);
	titleN.wrap('<div class="secthead" role="heading"><h2><a/></h2></div>');

	vid = new filOtaz_de.Video( sectN, href );
	vid.beforeClose( function(){
		vidN.remove();
		} );
	vid.beforeOpen( function(){
		if( vidN ) bodyN.prepend( vidN );
		} );
	videos[ href ] = vid;

	$.get( href +'c.xml?maxwidth=948&autoplay=true', function( data ) {
		var	content	= $( data ).find('content >item'),
			title	= content.find('>title').first().text(),
			corpus	= content.find('>corpus').first(),
			descr	= content.find('>descr').first().text();
		titleN.text( title );
		bodyN.prepend( vidN = corpus.children() );
		descrN.text( descr );
		}, 'xml' ); //$.get

	return vid;

	}; // filOtaz_de.VimeoVideo contructor


// === public "class" methods



})(); // filOtaz_de.VimeoVideo "class" container


/* ----- patOtaz_de.Berlinfolgen.js ------------------------------------------------------------------- */

(function () { // class container patOtaz_de.Berlinfolgen
  
  
  if( !window.patOtaz_de ) window.patOtaz_de = new Object;
  if(  window.patOtaz_de.Berlinfolgen ) return; // don't interfere!
  
  
  // === private class data
  var src  = '//taz.berlinfolgen.de/';
  var hash = 'berlinfolgen';
  
  
  // === constructor
  window.patOtaz_de.Berlinfolgen = function( episode ) {
    var args         = episode.split('.');
    var berlinfolgen = {};
    
    if ( args[0]==hash && args[1]>0 ) {
      src += 'p/'+ [ args[1], args[2] ].join('.');
    }
    
    if ( !berlinfolgen.win ) {
      berlinfolgen.win = new filOtaz_de.Overlay({ black: true })
        .append('<div class="sect sect_berlinfolgen"><div class="sectbody"><iframe frameborder="0" src="' +src+ '"style="overflow: hidden; width: 935px; height: 752px;"></iframe></div></div>')
        ;
    }
    
    berlinfolgen.win.pop();
    
    return false;
    
  } // window.patOtaz_de.Berlinfolgen
  
  
}) (); // class container patOtaz_de.Berlinfolgen


/* ----- filOtaz_de.tzi.js ------------------------------------------------------------------- */

filOtaz_de		= filOtaz_de		|| new Object;
filOtaz_de.flattr	= filOtaz_de.flattr	|| new function() {		//don't interfere!

	var	T = filOtaz_de ,
		F = filOtaz_de.conf.flattr ,
		B = filOtaz_de.conf.banking
		;

	$(document).ready(function(){	// DOM is complete
		
		// find and define URLs
		var url_protocol = window.location.protocol;
		var url_host     = window.location.host;
		var url_path     = window.location.pathname;
		var url_channel  = url_path.replace (/[^;]*(;[^\/]*).*/, '$1');
		var url_abo  = 'https://taz.de/!115932';
		var info_page = '/!p4697';
		//var url_info  = url_protocol + '//' + url_host + info_page + url_channel;
		var url_info  = url_protocol + '//' + url_host + info_page;

		// where am I?
		var pagetype = $(document.body).hasClass('homepage') ? 'home' : 'article';
		
		// find content
		var contentN;
		var             content = (new T.Article).fromNode( contentN = $('#thing')	);
		if( !content )	content = (new T.Article).fromNode( contentN = $('#hauptspalte .sect_article') );
		if( !content )	content = (new T.Article).fromNode( contentN = $('#pages >.page.first >.body >.sect_article') );
		if( !content )  content = (new T.Tom    ).fromNode( contentN = $('#popup_content_tom')         );

		var thing;
		if( content ) {
			// construct thing from page content
			thing = content.toThing();
			var idNcms = $('#cmsArticleID');
			if( idNcms.length >0 ) thing.articleid = idNcms.first().text();
			var idN = $('#articleID');
			if( idN.length >0 )	 thing.id = idN.first().text();
			}
		else {
			// construct default thing
			thing = new T.Thing({
				id:	'taz_online_0' ,
				//url:	new T.URL('http://www.taz.de/') ,
				url:	new T.URL('https://flattr.com/profile/taz.de') ,
				title:	'taz.de - online News'
				});
			}


		// define bank account text
		var bridge;
		if( content instanceof T.Tom || content instanceof T.Article )
			bridge = 'Unser '+ (content instanceof T.Tom ? 'Comic' : 'Artikel') +' hat Ihnen gefallen?';
		else	bridge = 'Unsere Arbeit gef&auml;llt Ihnen?';
		var bankingHtml = [
			B.caption, '<div class="taz_kto">'+ B.domestic,
			B.reference + (content instanceof T.Tom ? ' touche' :''),
			B.abroad +'</div>'
			].join('<br />');



		// build dom
		var anchorN = $( 'a#reward' ).last();	// wenn vorhanden Anker in der rechten Spalte bevorzugen
		var racked = anchorN.parents().is('.rack');
		var claim = anchorN.text();
		var containerN, listN, expanderN;
		anchorN.replaceWith(
			containerN = $('<div id="reward" class="reward" />')
			);
		if( claim && claim.length >0 )	containerN.append( $('<h6>'+ claim +'</h6>') );
		containerN
			.append(
				listN = $('<ul role="toolbar" class="toolbar" />')
				);
		expanderN = $('\
<form id="micropay" style="display:none;" name="micropay" action="https://www.taz.de/scripts/taz_zahl_ich/pay_check.php" method="POST" >	\
	<input type="submit" disabled="disabled" style="display:none;" />	\
	<input type="hidden" size="6" id="ppaid" name="aid" value="'+ thing.id +'"/>	\
	<input type="hidden" size="6" id="articleid" name="articleid" value="'+ thing.articleid +'"/>	\
	<input type="hidden" name="atitle" value="'+ thing.title +'"/>	\
\
	<div><select id="amount" name="amount">	\
			<option value="">Eingabe</option>	\
			<option value="30">0,30 &euro;</option>	\
			<option value="50" '+(  content ? ' selected="true"' :'' )+'>0,50 &euro;</option>	\
			<option value="100"'+( !content ? ' selected="true"' :'' )+'>1,- &euro;</option>	\
			<option value="200">2,- &euro;</option>	\
			<option value="500">5,- &euro;</option>	\
		</select>	\
\
	<span>oder</span> \
	<input type="text" size="6" id="amtman" name="amtman" value=""/> \
	<span>&euro;</span> \
	</div> \
\
	<div>	<input type="hidden" id="pay_way" name="pay_way" value="" />	\
		<ul role="toolbar" class="toolbar">	\
			<li><a id="pay_mbe"	   name="pay_mbe"         >per Handy</a         ></li>	\
			<li><a id="pay_paypal" name="pay_paypal"      >PayPal</a            ></li>	\
			<li><a id="pay_ls"	   name="pay_ls"          >Lastschrift</a       ></li>	\
			<li><a id="pay_cc"	   name="pay_cc"          >Kreditkarte</a       ></li>	\
			<li><a id="pay_kto"	   name="pay_kto"         >&Uuml;berweisung</a  ></li> \
		</ul>	\
	</div>	\
</form>'		);
		if( !racked )	expanderN.addClass('box sectbody');

		containerN.append( !racked	? $('<div class="rack style_taz"></div>').append( expanderN )	: expanderN	);

		var tzi_sect = $('\
<div id="tzi_abo" style="display:none;" role="region" class="sect sect_tziabo box">\
    <!-- <div role="heading" class="secthead"><h2>taz zahl ich Abo</h2></div> -->\
</div>'			);
		if( !racked )	tzi_sect.addClass('style_taz');

		var sectN =  !racked ? expanderN : containerN.parents('.sect').first();
	        sectN.after( tzi_sect );
		
		var tziabo_text1 = '<p class="brief">taz zahl ich Abo: <span>Regelm&auml;&szlig;ig zahlen per Bankeinzug.</span></p>';
		tzi_sect.append ($ ('<a class="sectbody" href="' + url_abo + '" target="_blank">' + tziabo_text1 + '</a>'));

		if (pagetype == 'article') {
			$.ajax({
				url: '/fileadmin/php/php_verlagsformulare_neu/tziabo/images/last50.txt',
				success: function(data) {
	                var tziimages_array=data.split("\n");
        	        var tmp_array=tziimages_array;
                	var tzi_imgs;
									var tziabo_text2 = '<p class="tziabonnement">Wir haben uns ' + (racked?'bereits ':'') + 'entschieden taz.de auf Dauer zu honorieren.</p>';
									$ ('a', tzi_sect).append ($ (tziabo_text2));
									tzi_sect.append( tzi_imgs = $('<div role="body" class="sectbody"/>') );
									tzi_imgs.append( tzi_imglink = $('<a class="modal-trigger" href="javascript:;" style="outline: 0;"></a>') );
									tzi_imglink.append ( img_list = $('<ul/>') );
									var imgcount = racked ? 3 : 6;
	                for (var i=1; i<=imgcount; i++) {
        	        	var rand_max=tziimages_array.length-2;
                	  var rand_id=parseInt( Math.random() * ( rand_max+1 ) );
	                  $('<li><img src="/fileadmin/php/php_verlagsformulare_neu/tziabo/images/thumbnail_images/'+ tziimages_array[rand_id] +'"/></li>')
        	          	.addClass(function(x,c){ 
                	            		var r = i % 2 ? 'odd' : 'even';
                        	    		if( i==1 ) r += ' first';
	                            		if( i==imgcount ) r += ' last';
        	                    		return r; 
                	            	})
	                    .appendTo( img_list );
        	            tziimages_array.splice(rand_id,1);
                	}
				},
        async: false,
			});
		} // if (pagetype == 'article') { $.ajax({ ... }) }
		
		var tziButtonN;
		listN	.append(
				$( '<li class="tzi"></li>' )
					.prepend( tziButtonN = $('<a><img src="/lib/icons/service/taz_zahl_ich.gif"/></a>') )
				)
			;

		var flattrButtonN;
		listN	.append(
				$( '<li class="flattr"></li>' )
					.prepend( flattrButtonN = $('<a />') )
				)
			;

		listN	.append( 
				$( '<li class="help"><a class="txtbutton" target="_blank" href="' + url_info + '">' + (pagetype == 'article' ? 'mehr erfahren' : 'info') + '</a></li>' )
				)
			;



		// ======= taz zahl ich functionality =======

		var red  = "#961D2A";
		var grey = "#888888";

		// how to show/hide bank account
		var expander2N = $();
		var expanded2=false;

		var kto_fkt = function(){
			$(this).blur();
			if( !expanded2 ) {	
					expander2N = $('<div class="expander2" />')
						.html( bankingHtml )
						.hide()
						.appendTo( expanderN )
					if( $.browser.msie && parseFloat( $.browser.version ) <8 )
						expander2N.show();
					else	expander2N.slideDown();
					expanded2=true;
					}
			else	{	
					expander2N.slideUp(function(){
						expander2N.remove();
						});
					expanded2=false;
					}
			};

		var cc_fkt = function(){
               window.open( '','popup_cc','height=520,width=500');
               document.getElementsByName('micropay')[0].target = 'popup_cc';
               $('#pay_way').val("cc");
               document.micropay.submit();
               return false;
    					};
		var ls_fkt = function(){
               window.open( '','popup_ls','height=520,width=500');
               document.getElementsByName('micropay')[0].target = 'popup_ls';
               $('#pay_way').val("ls");
               document.micropay.submit();
               return false;
             };
		var pay_mbe_fkt = function(){ 
               window.open( '','popup_mbe','height=600,width=500');
               document.getElementsByName('micropay')[0].target = 'popup_mbe';
               $('<input type="hidden" name="pay_mbe" value="1" />')
               $('#pay_way').val("mbe");
               document.micropay.submit();
               return false;
             };
		var pay_paypal_fkt = function(){
               window.open( '','popup_pp','height=610,width=800,scrollbars=1');
               document.getElementsByName('micropay')[0].target = 'popup_pp';
               $('#pay_way').val("paypal");
               document.micropay.submit();
               return false;
             };

		// pay amount vs method selection
		var amountN = $('#amount',containerN);
		var amtmanN = $('#amtman',containerN);

		function ausgrau(){
			var amount = amountN.val();
			if( amtmanN.val() ) 
				amount = parseFloat( amtmanN.val().replace(/,/g, ".") ) * 100;
			if( ! amount>0 ) amount=0;

			$('#pay_kto').unbind('click', kto_fkt );
			$('#pay_ls').unbind('click',  ls_fkt  );
			$('#pay_cc').unbind('click',  kto_fkt );

			if (amount<30) {

            $('#pay_kto').css({ 'color': grey });
            $('#pay_kto').qtip({
                 content: "Bitte geben Sie einen Betrag von mindestens 30 Cent ein."
            });

            $('#pay_ls').css({ 'color': grey});
            $('#pay_ls').qtip({
                  content: "Bitte geben Sie einen Betrag von mindestens 30 Cent ein."
             });

            $('#pay_cc').css({ 'color': grey});
            $('#pay_cc').qtip({
                  content: "Bitte geben Sie einen Betrag von mindestens 30 Cent ein."
             });

			} else {

		        $('#pay_kto').css({ 'color': red });
			      if( $('#pay_kto').qtip() )  $('#pay_kto').qtip('destroy');
							$( '#pay_kto', containerN ).click( kto_fkt );
						
            $('#pay_ls').css({ 'color': red});
            if ($('#pay_ls').qtip()) {$('#pay_ls').qtip('destroy');}
            $('#pay_ls').click( ls_fkt );

            $('#pay_cc').css({ 'color': red});
            if ($('#pay_cc').qtip()) {$('#pay_cc').qtip('destroy');}
            $('#pay_cc').click( cc_fkt );
			}


			$('#pay_mbe').unbind('click', pay_mbe_fkt);
			if (amount<30 || amount>1500) {

            $('#pay_mbe').css({ 'color': grey});
            if (amount<30) {
               $('#pay_mbe').qtip({
                  content: "Bitte geben Sie einen Betrag von mindestens 30 Cent ein."
               });
            }
            if (amount>1500) {
               $('#pay_mbe').qtip({
                  content: "Bitte bezahlen Sie Betr&auml;ge &uuml;ber 15 Euro per Lastschrift, Kreditkarte, Paypal oder &Uuml;berweisung."
               });
            }

			} else {

            $('#pay_mbe').css({ 'color': red});
            if ($('#pay_mbe').qtip()) {$('#pay_mbe').qtip('destroy');}
            $('#pay_mbe').click( pay_mbe_fkt );
			}


			$('#pay_paypal').unbind('click', pay_paypal_fkt);
			if (amount<100) {

             $('#pay_paypal').qtip({
                  content: "Betr&auml;ge unter 1 &euro; sind derzeit mit Paypal leider nicht m&ouml;glich."
             });

            $('#pay_paypal').css({ 'color': grey});

			} else {

            $('#pay_paypal').css({ 'color': red});
            if ($('#pay_paypal').qtip()) {$('#pay_paypal').qtip('destroy');}
            $('#pay_paypal').click( pay_paypal_fkt );
			}

		}//ausgrau


		amountN.change(function(){
			amtmanN.val("");
			ausgrau();
			});

		amtmanN.keyup(function() {
			$("#amount option:eq(2)").attr("selected",false);
			$("#amount option:eq(0)").attr("selected","selected");
			$('#pay_mbe').qtip("destroy");
			ausgrau();
			});

		ausgrau();



        // actually show stuff

		var toExpand = expanderN.add( tzi_sect );
		tziButtonN.toggle( function(){
					$(this).addClass('active');
					if( sectN.hasClass('last_box') || !racked ) {
						sectN.removeClass('last_box');
						tzi_sect.addClass('last_box');
						}
					if( $.browser.msie && parseFloat( $.browser.version ) <8 )
						toExpand.show();
					else	toExpand.slideDown();
				}, function(){
					$(this).removeClass('active');
					var after = function(){  
						if( tzi_sect.hasClass('last_box') && racked ) {
							tzi_sect.removeClass('last_box');
							sectN.addClass('last_box');  
							}
						};
					if( $.browser.msie && parseFloat( $.browser.version ) <8 ) {
						toExpand.hide(); after(); }
					else	toExpand.slideUp( after );
				});

		//if( Math.random()*4 <1 )    tziButtonN.trigger('click');

		containerN.show();



	
		// load flattr api
		if( !(thing && thing.url) )  return;
		$.getScript( F.api, function(){  // place the button(s)  
			// not fired in FF4, see filOtaz_de.xbrowser.js
			FlattrLoader.render(
				$.extend( {}, F.common, {
					url		: ''+ thing.url ,
					title		: ''+ thing.title ,
					description	: ''+ thing.descr ,
					tags		: thing.obj instanceof T.Tom ? 'tom, comic, webcomic'	: F.common.tags ,
					category	: thing.obj instanceof T.Tom ? 'images'			: F.common.category
					} ),
				flattrButtonN.get(0), 
				'replace' 
				);
			} );

		}); //$(document).ready	


        }; //filOtaz_de.flattr



/* ----- ulfOtaz_de.tzioverlay.js ------------------------------------------------------------------- */

$(document).ready(function(){
$('.modal-trigger').click(function(evt) {
  evt.preventDefault();


        var tzi_imgs='';
	var rows=2;
	var cols=4;

/*$.get('/fileadmin/php/php_verlagsformulare_neu/tziabo/images/gallery.txt', function(data) { */

$.ajax({
	url: '/fileadmin/php/php_verlagsformulare_neu/tziabo/images/gallery.txt',
	success: function(data) {

        var tziimages_array=data.split("\n");
        var imgcount = tziimages_array.length-1;
        var tmp_array=tziimages_array;
        for (var i=1; i<=imgcount; i++) {
                var rand_max=tziimages_array.length-2;
                var rand_id=parseInt( Math.random() * ( rand_max+1 ) );
		var chunk_array=tziimages_array[rand_id].split("\t");
		page = Math.ceil(i/(rows*cols));
		pages = Math.ceil(imgcount/(rows*cols));
		// row = Math.floor((i-1)/cols)+1-((page-1)*rows);
		row = (Math.floor ((i-1)/cols) % rows) + 1;
		col = i -((page-1)*rows*cols) - ((row-1)*cols);
		/* alert(row+', '+col+' i: '+i+' rows: '+rows+' page: '+page); */
		if (row==1 && col==1 && rand_max >=0) {
			tzi_imgs=tzi_imgs+'<div id="page'+page+'" style="position:absolute; left:50%; margin-left:-447px; ';
			if (page > 1) { tzi_imgs=tzi_imgs+'display:none;'; }
			tzi_imgs=tzi_imgs+'">';
			tzi_imgs=tzi_imgs+'<h1>zahl ich</h1><h3 style="float:left;width:800px;">Wir haben uns entschieden, taz.de auf Dauer zu honorieren.</h3><div align="right" style="position:relative;left:-5px;height:84px;"><div class="tzioverlay_nav back">';
			// zurueck ...  if (page > 1) { tzi_imgs=tzi_imgs+'<a href="javascript:void(0)" onClick="javascript:$(\'#page'+page+'\').hide();$(\'#page'+(page-1)+'\').show();"><img src="/fileadmin/templates/neu/images/prev19x19bw.gif" border="0" style="float:left;"></a>'; }
			if (page > 1) {
				tzi_imgs = tzi_imgs + '<a href="javascript:void(0)" onClick="javascript:$(\'#page'+page+'\').hide(); $(\'#page'+(page-1)+'\').show();" class="tzioverlay_navi">zur&uuml;ck</a>';
			}
			/*alert (tzi_imgs); */
			// tzi_imgs = tzi_imgs + '</div><div style="width:19px;height:19px;margin-right:5px;float:left;">';
			tzi_imgs = tzi_imgs + '</div><div class="tzioverlay_nav next">';
			// vor ...  if (page < pages) { tzi_imgs=tzi_imgs+'<a href="javascript:void(0)" onClick="javascript:$(\'#page'+page+'\').hide();$(\'#page'+(page+1)+'\').show();"><img src="/fileadmin/templates/neu/images/next19x19bw.gif" border="0" style="float:left;"></a>'; }
			if (page < pages) {
				tzi_imgs = tzi_imgs + '<a href="javascript:void(0)" onClick="javascript:$(\'#page'+page+'\').hide(); $(\'#page'+(page+1)+'\').show();" class="tzioverlay_navi">vor</a>';
			}
			// schliessen ...  tzi_imgs=tzi_imgs+'</div> <a style="" href="javascript:;" onClick="javascript:$(\'.overlay\').remove();$(\'#modal\').remove();$(\'body\').css(\'overflow\', \'auto\');"><img src="/fileadmin/templates/neu/images/schliessen19x19bw.gif" border="0" style="float:left;"></a></div><div style="clear:both;"></div>';
			tzi_imgs = tzi_imgs + '</div><a class="tzioverlay_nav close" style="" href="javascript:;" onClick="javascript:$(\'.overlay\').remove();$(\'#modal\').remove();$(\'body\').css(\'overflow\', \'auto\').css(\'width\', \'1661px\');" class="tzioverlay_navi">schlie&szlig;en</a></div>';
			/*tzi_imgs=tzi_imgs+'</div> <a style="" href="javascript:;" onClick="javascript:$(\'.overlay\').remove();$(\'#modal\').remove();"><img src="/fileadmin/templates/neu/images/schliessen19x19bw.gif" border="0" style="float:left;"></a></div><div style="clear:both;"></div>';*/
		} // if (row==1 && col==1 && rand_max >=0) { ... }
                /* tzi_imgs=tzi_imgs+'<img src="/fileadmin/php/php_verlagsformulare_neu/tziabo/images/gallery_images/'+ tziimages_array[rand_id] +'" width="180" height="180" style="margin-bottom:30px;'; */
                if (chunk_array[0]!="") {
			tzi_imgs=tzi_imgs+'<img id="'+ chunk_array[0] +'" src="/fileadmin/php/php_verlagsformulare_neu/tziabo/images/gallery_images/'+ chunk_array[0] +'" width="180" height="180" style="margin-bottom:30px;';
			if (col<cols) {tzi_imgs=tzi_imgs+'float:left;margin-right:45px;';}
			tzi_imgs=tzi_imgs+'"';
			if (typeof (chunk_array[1])!="undefined") {tzi_imgs=tzi_imgs+' title="'+ chunk_array[1] +'"';}
			tzi_imgs=tzi_imgs+'/>';
		}
                tziimages_array.splice(rand_id,1);
		if (i == imgcount || (row==rows && col==cols)) {
			tzi_imgs=tzi_imgs+'</div>';
		}
        } // for

var $modal = $('<div>' + tzi_imgs + '</div>')
  .attr('id', 'modal')
  .css({
    'background'    : 'transparent',
  	'zIndex'        : '3000',
  	'padding'       : '0',
  	'width'         : '100%',
  	'height'        : '100%',
  	'margin'        : '0',
  	'opacity'       : '1',
  	'position'      : 'fixed',
  	'top'           : '32px',
  	'left'          : '0'
	});

if (typeof $(this).overlay !== 'function') throw ReferenceError ();
  $(this).overlay({
    color: '#FFFFFF',
    effect: 'fade',
    opacity: 0.85,
    closeOnClick: true,
    show: 'viewport',
    onShow: function() {
      $('body').append($modal);
    },
    onHide: function() {
      $modal.remove();
    },
  })

        /*});*/
	},
	async: false,
});

        });

});


/* ----- filOtaz_de.reward.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )       window.filOtaz_de = new Object;
if( ! window.filOtaz_de.reward )        //don't interfere!
window.filOtaz_de.reward = function() {

        var articleNode = $('#hauptspalte .uplinks');
        if( articleNode.length<1 ) return;      // only regard pages w/ articles

        var myNode = $('.likeit', articleNode).first();
        var expanderNode;
        var expanded = false;

        var button = $('<a class="txtbutton" href="." />')
	.css({ marginLeft:'7px' })
        .text(' [ taz-Konto ]')
        .toggle(function(){
                        button.blur();
                        if( expanded ) return false; expanded = true;
			button.addClass('active');
                        expanderNode = $('<div class="expander" />')
			.css({ marginTop:'8px', width:'460px' })
                        .append( '<em>Schön, dass Ihnen der Artikel gefällt.<br /> Um unsere Arbeit zu honorieren, können Sie diese Bankverbindung verwenden:</em>' )
			.append( $('<div><em>die tageszeitung</em> | Kto-Nr <em>39316106</em> | BLZ <em>10010010</em> Postbank Berlin<br /> Verwendungszweck <em>taz.de</em><br /> IBAN <em>DE27 1001 0010 0039 3161 06</em> | BIC <em>PBNKDEFF</em></div>')
				.css({ borderWidth:'1px 0px', borderStyle:'solid', padding:'2px 0px', marginTop:'3px' })
				)
                        .appendTo(myNode);
                        return false;   // cancel default action (ie href)
                        },
                function(){
                        button.blur();
                        if( !expanded ) return false; expanded = false;
			button.removeClass('active');
                        expanderNode.remove();
                        }
                )
        .appendTo(myNode);

        }; //window.filOtaz_de.reward


/* ----- heise_de.socialshareprivacy-1.4.js ------------------------------------------------------------------- */

/*
 * jquery.socialshareprivacy.js | 2 Klicks fuer mehr Datenschutz
 *
 * http://www.heise.de/extras/socialshareprivacy/
 * http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html
 *
 * Copyright (c) 2011 Hilko Holweg, Sebastian Hilbig, Nicolas Heiringhoff, Juergen Schmidt,
 * Heise Zeitschriften Verlag GmbH & Co. KG, http://www.heise.de
 *
 * is released under the MIT License http://www.opensource.org/licenses/mit-license.php
 *
 * Spread the word, link to us if you can.
 */
(function ($) {

    "use strict";

	/*
	 * helper functions
	 */ 

    // abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
    function abbreviateText(text, length) {
        var abbreviated = decodeURIComponent(text);
        if (abbreviated.length <= length) {
            return text;
        }

        var lastWhitespaceIndex = abbreviated.substring(0, length - 1).lastIndexOf(' ');
        abbreviated = encodeURIComponent(abbreviated.substring(0, lastWhitespaceIndex)) + "\u2026";

        return abbreviated;
    }

    // returns content of <meta name="" content=""> tags or '' if empty/non existant
    function getMeta(name) {
        var metaContent = $('meta[name="' + name + '"]').attr('content');
        return metaContent || '';
    }
    
    // create tweet text from content of <meta name="DC.title"> and <meta name="DC.creator">
    // fallback to content of <title> tag
    function getTweetText() {
        var title = getMeta('DC.title');
        var creator = getMeta('DC.creator');

        if (title.length > 0 && creator.length > 0) {
            title += ' - ' + creator;
        } else {
            title = $('title').text();
        }

        return encodeURIComponent(title);
    }

    // build URI from rel="canonical" or document.location
    function getURI() {
        var uri = document.location.href;
        var canonical = $("link[rel=canonical]").attr("href");

        if (canonical && canonical.length > 0) {
            if (canonical.indexOf("http") < 0) {
                canonical = document.location.protocol + "//" + document.location.host + canonical;
            }
            uri = canonical;
        }

        return uri;
    }

    function cookieSet(name, value, days, path, domain) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + '=' + value + '; expires=' + expires.toUTCString() + '; path=' + path + '; domain=' + domain;
    }
    function cookieDel(name, value, path, domain) {
        var expires = new Date();
        expires.setTime(expires.getTime() - 100);
        document.cookie = name + '=' + value + '; expires=' + expires.toUTCString() + '; path=' + path + '; domain=' + domain;
    }

    // extend jquery with our plugin function
    $.fn.socialSharePrivacy = function (settings) {
        var defaults = {
            'services' : {
                'facebook' : {
                    'status'            : 'on',
                    'dummy_img'         : 'socialshareprivacy/images/dummy_facebook.png',
                    'txt_info'          : '2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Facebook senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.',
                    'txt_fb_off'        : 'nicht mit Facebook verbunden',
                    'txt_fb_on'         : 'mit Facebook verbunden',
                    'perma_option'      : 'on',
                    'display_name'      : 'Facebook',
                    'referrer_track'    : '',
                    'language'          : 'de_DE',
                    'action'            : 'recommend'
                }, 
                'twitter' : {
                    'status'            : 'on', 
                    'dummy_img'         : 'socialshareprivacy/images/dummy_twitter.png',
                    'txt_info'          : '2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Twitter senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.',
                    'txt_twitter_off'   : 'nicht mit Twitter verbunden',
                    'txt_twitter_on'    : 'mit Twitter verbunden',
                    'perma_option'      : 'on',
                    'display_name'      : 'Twitter',
                    'referrer_track'    : '', 
                    'tweet_text'        : getTweetText,
                    'language'          : 'en'
                },
                'gplus' : {
                    'status'            : 'on',
                    'dummy_img'         : 'socialshareprivacy/images/dummy_gplus.png',
                    'txt_info'          : '2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Google+ senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.',
                    'txt_gplus_off'     : 'nicht mit Google+ verbunden',
                    'txt_gplus_on'      : 'mit Google+ verbunden',
                    'perma_option'      : 'on',
                    'display_name'      : 'Google+',
                    'referrer_track'    : '',
                    'language'          : 'de'
                }
            },
            'info_link'         : 'http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html',
            'txt_help'          : 'Wenn Sie diese Felder durch einen Klick aktivieren, werden Informationen an Facebook, Twitter oder Google in die USA &uuml;bertragen und unter Umst&auml;nden auch dort gespeichert. N&auml;heres erfahren Sie durch einen Klick auf das <em>i</em>.',
            'settings_perma'    : 'Dauerhaft aktivieren und Daten&uuml;ber&shy;tragung zustimmen:',
            'cookie_path'       : '/',
            'cookie_domain'     : document.location.host,
            'cookie_expires'    : '365',
            'css_path'          : 'socialshareprivacy/socialshareprivacy.css',
            'uri'               : getURI
        };

        // Standardwerte des Plug-Ings mit den vom User angegebenen Optionen ueberschreiben
        var options = $.extend(true, defaults, settings);

        var facebook_on = (options.services.facebook.status === 'on');
        var twitter_on  = (options.services.twitter.status  === 'on');
        var gplus_on    = (options.services.gplus.status    === 'on');

        // check if at least one service is "on"
        if (!facebook_on && !twitter_on && !gplus_on) {
            return;
        }

        // insert stylesheet into document and prepend target element
        if (options.css_path.length > 0) {
            // IE fix (noetig fuer IE < 9 - wird hier aber fuer alle IE gemacht)
            if (document.createStyleSheet) {
                document.createStyleSheet(options.css_path);
            } else {
                $('head').append('<link rel="stylesheet" type="text/css" href="' + options.css_path + '" />');
            }
        }

        return this.each(function () {

            $(this).prepend('<ul class="social_share_privacy_area"></ul>');
            var context = $('.social_share_privacy_area', this);

            // canonical uri that will be shared
            var uri = options.uri;
            if (typeof uri === 'function') {
                uri = uri(context);
            }

            //
            // Facebook
            //
            if (facebook_on) {
                var fb_enc_uri = encodeURIComponent(uri + options.services.facebook.referrer_track);
                var fb_code = '<iframe src="http://www.facebook.com/plugins/like.php?locale=' + options.services.facebook.language + '&amp;href=' + fb_enc_uri + '&amp;send=false&amp;layout=button_count&amp;width=120&amp;show_faces=false&amp;action=' + options.services.facebook.action + '&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:145px; height:21px;" allowTransparency="true"></iframe>';
                var fb_dummy_btn = '<img src="' + options.services.facebook.dummy_img + '" alt="Facebook &quot;Like&quot;-Dummy" class="fb_like_privacy_dummy" />';

                context.append('<li class="facebook help_info"><span class="info">' + options.services.facebook.txt_info + '</span><span class="switch off">' + options.services.facebook.txt_fb_off + '</span><div class="fb_like dummy_btn">' + fb_dummy_btn + '</div></li>');

                var $container_fb = $('li.facebook', context);

                $('li.facebook div.fb_like img.fb_like_privacy_dummy,li.facebook span.switch', context).live('click', function () {
                    if ($container_fb.find('span.switch').hasClass('off')) {
                        $container_fb.addClass('info_off');
                        $container_fb.find('span.switch').addClass('on').removeClass('off').html(options.services.facebook.txt_fb_on);
                        $container_fb.find('img.fb_like_privacy_dummy').replaceWith(fb_code);
                    } else {
                        $container_fb.removeClass('info_off');
                        $container_fb.find('span.switch').addClass('off').removeClass('on').html(options.services.facebook.txt_fb_off);
                        $container_fb.find('.fb_like').html(fb_dummy_btn);
                    }
                });
            }

            //
            // Twitter
            //
            if (twitter_on) {
                var text = options.services.twitter.tweet_text;
                if (typeof text === 'function') {
                    text = text();
                }
                // 120 is the max character count left after twitters automatic url shortening with t.co
                text = abbreviateText(text, '120');

                var twitter_enc_uri = encodeURIComponent(uri + options.services.twitter.referrer_track);
                var twitter_count_url = encodeURIComponent(uri);
                var twitter_code = '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/tweet_button.html?url=' + twitter_enc_uri + '&amp;counturl=' + twitter_count_url + '&amp;text=' + text + '&amp;count=horizontal&amp;lang=' + options.services.twitter.language + '" style="width:130px; height:25px;"></iframe>';
                var twitter_dummy_btn = '<img src="' + options.services.twitter.dummy_img + '" alt="&quot;Tweet this&quot;-Dummy" class="tweet_this_dummy" />';

                context.append('<li class="twitter help_info"><span class="info">' + options.services.twitter.txt_info + '</span><span class="switch off">' + options.services.twitter.txt_twitter_off + '</span><div class="tweet dummy_btn">' + twitter_dummy_btn + '</div></li>');

                var $container_tw = $('li.twitter', context);

                $('li.twitter div.tweet img,li.twitter span.switch', context).live('click', function () {
                    if ($container_tw.find('span.switch').hasClass('off')) {
                        $container_tw.addClass('info_off');
                        $container_tw.find('span.switch').addClass('on').removeClass('off').html(options.services.twitter.txt_twitter_on);
                        $container_tw.find('img.tweet_this_dummy').replaceWith(twitter_code);
                    } else {
                        $container_tw.removeClass('info_off');
                        $container_tw.find('span.switch').addClass('off').removeClass('on').html(options.services.twitter.txt_twitter_off);
                        $container_tw.find('.tweet').html(twitter_dummy_btn);
                    }
                });
            }

            //
            // Google+
            //
            if (gplus_on) {
                // fuer G+ wird die URL nicht encoded, da das zu einem Fehler fuehrt
                var gplus_uri = uri + options.services.gplus.referrer_track;
                
                // we use the Google+ "asynchronous" code, standard code is flaky if inserted into dom after load
                var gplus_code = '<div class="g-plusone" data-size="medium" data-href="' + gplus_uri + '"></div><script type="text/javascript">window.___gcfg = {lang: "' + options.services.gplus.language + '"}; (function() { var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/plusone.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s); })(); </script>';
                var gplus_dummy_btn = '<img src="' + options.services.gplus.dummy_img + '" alt="&quot;Google+1&quot;-Dummy" class="gplus_one_dummy" />';

                context.append('<li class="gplus help_info"><span class="info">' + options.services.gplus.txt_info + '</span><span class="switch off">' + options.services.gplus.txt_gplus_off + '</span><div class="gplusone dummy_btn">' + gplus_dummy_btn + '</div></li>');

                var $container_gplus = $('li.gplus', context);

                $('li.gplus div.gplusone img,li.gplus span.switch', context).live('click', function () {
                    if ($container_gplus.find('span.switch').hasClass('off')) {
                        $container_gplus.addClass('info_off');
                        $container_gplus.find('span.switch').addClass('on').removeClass('off').html(options.services.gplus.txt_gplus_on);
                        $container_gplus.find('img.gplus_one_dummy').replaceWith(gplus_code);
                    } else {
                        $container_gplus.removeClass('info_off');
                        $container_gplus.find('span.switch').addClass('off').removeClass('on').html(options.services.gplus.txt_gplus_off);
                        $container_gplus.find('.gplusone').html(gplus_dummy_btn);
                    }
                });
            }

            //
            // Der Info/Settings-Bereich wird eingebunden
            //
            context.append('<li class="settings_info"><div class="settings_info_menu off perma_option_off"><a href="' + options.info_link + '"><span class="help_info icon"><span class="info">' + options.txt_help + '</span></span></a></div></li>');

            // Info-Overlays mit leichter Verzoegerung einblenden
            $('.help_info:not(.info_off)', context).live('mouseenter', function () {
                var $info_wrapper = $(this);
                var timeout_id = window.setTimeout(function () { $($info_wrapper).addClass('display'); }, 500);
                $(this).data('timeout_id', timeout_id);
            });
            $('.help_info', context).live('mouseleave', function () {
                var timeout_id = $(this).data('timeout_id');
                window.clearTimeout(timeout_id);
                if ($(this).hasClass('display')) {
                    $(this).removeClass('display');
                }
            });

            var facebook_perma = (options.services.facebook.perma_option === 'on');
            var twitter_perma  = (options.services.twitter.perma_option  === 'on');
            var gplus_perma    = (options.services.gplus.perma_option    === 'on');

            // Menue zum dauerhaften Einblenden der aktiven Dienste via Cookie einbinden
            // Die IE7 wird hier ausgenommen, da er kein JSON kann und die Cookies hier ueber JSON-Struktur abgebildet werden
            if (((facebook_on && facebook_perma)
                || (twitter_on && twitter_perma)
                || (gplus_on && gplus_perma))
                    && (!$.browser.msie || ($.browser.msie && $.browser.version > 7.0))) {

                // Cookies abrufen
                var cookie_list = document.cookie.split(';');
                var cookies = '{';
                var i = 0;
                for (; i < cookie_list.length; i += 1) {
                    var foo = cookie_list[i].split('=');
                    cookies += '"' + $.trim(foo[0]) + '":"' + $.trim(foo[1]) + '"';
                    if (i < cookie_list.length - 1) {
                        cookies += ',';
                    }
                }
                cookies += '}';
                cookies = JSON.parse(cookies);

                // Container definieren
                var $container_settings_info = $('li.settings_info', context);

                // Klasse entfernen, die das i-Icon alleine formatiert, da Perma-Optionen eingeblendet werden
                $container_settings_info.find('.settings_info_menu').removeClass('perma_option_off');

                // Perma-Optionen-Icon (.settings) und Formular (noch versteckt) einbinden
                $container_settings_info.find('.settings_info_menu').append('<span class="settings">Einstellungen</span><form><fieldset><legend>' + options.settings_perma + '</legend></fieldset></form>');


                // Die Dienste mit <input> und <label>, sowie checked-Status laut Cookie, schreiben
                var checked = ' checked="checked"';
                if (facebook_on && facebook_perma) {
                    var perma_status_facebook = cookies.socialSharePrivacy_facebook === 'perma_on' ? checked : '';
                    $container_settings_info.find('form fieldset').append(
                        '<input type="checkbox" name="perma_status_facebook" id="perma_status_facebook"'
                            + perma_status_facebook + ' /><label for="perma_status_facebook">'
                            + options.services.facebook.display_name + '</label>'
                    );
                }

                if (twitter_on && twitter_perma) {
                    var perma_status_twitter = cookies.socialSharePrivacy_twitter === 'perma_on' ? checked : '';
                    $container_settings_info.find('form fieldset').append(
                        '<input type="checkbox" name="perma_status_twitter" id="perma_status_twitter"'
                            + perma_status_twitter + ' /><label for="perma_status_twitter">'
                            + options.services.twitter.display_name + '</label>'
                    );
                }

                if (gplus_on && gplus_perma) {
                    var perma_status_gplus = cookies.socialSharePrivacy_gplus === 'perma_on' ? checked : '';
                    $container_settings_info.find('form fieldset').append(
                        '<input type="checkbox" name="perma_status_gplus" id="perma_status_gplus"'
                            + perma_status_gplus + ' /><label for="perma_status_gplus">'
                            + options.services.gplus.display_name + '</label>'
                    );
                }

                // Cursor auf Pointer setzen fuer das Zahnrad
                $container_settings_info.find('span.settings').css('cursor', 'pointer');

                // Einstellungs-Menue bei mouseover ein-/ausblenden
                $($container_settings_info.find('span.settings'), context).live('mouseenter', function () {
                    var timeout_id = window.setTimeout(function () { $container_settings_info.find('.settings_info_menu').removeClass('off').addClass('on'); }, 500);
                    $(this).data('timeout_id', timeout_id);
                }); 
                $($container_settings_info, context).live('mouseleave', function () {
                    var timeout_id = $(this).data('timeout_id');
                    window.clearTimeout(timeout_id);
                    $container_settings_info.find('.settings_info_menu').removeClass('on').addClass('off');
                });

                // Klick-Interaktion auf <input> um Dienste dauerhaft ein- oder auszuschalten (Cookie wird gesetzt oder geloescht)
                $($container_settings_info.find('fieldset input')).live('click', function (event) {
                    var click = event.target.id;
                    var service = click.substr(click.lastIndexOf('_') + 1, click.length);
                    var cookie_name = 'socialSharePrivacy_' + service;

                    if ($('#' + event.target.id + ':checked').length) {
                        cookieSet(cookie_name, 'perma_on', options.cookie_expires, options.cookie_path, options.cookie_domain);
                        $('form fieldset label[for=' + click + ']', context).addClass('checked');
                    } else {
                        cookieDel(cookie_name, 'perma_on', options.cookie_path, options.cookie_domain);
                        $('form fieldset label[for=' + click + ']', context).removeClass('checked');
                    }
                });

                // Dienste automatisch einbinden, wenn entsprechendes Cookie vorhanden ist
                if (facebook_on && facebook_perma && cookies.socialSharePrivacy_facebook === 'perma_on') {
                    $('li.facebook span.switch', context).click();
                }
                if (twitter_on && twitter_perma && cookies.socialSharePrivacy_twitter === 'perma_on') {
                    $('li.twitter span.switch', context).click();
                }
                if (gplus_on && gplus_perma && cookies.socialSharePrivacy_gplus === 'perma_on') {
                    $('li.gplus span.switch', context).click();
                }
            }
        }); // this.each(function ()
    };      // $.fn.socialSharePrivacy = function (settings) {
}(jQuery));



/* ----- patOtaz_de.tzi-paywall.js ------------------------------------------------------------------- */

window.patOtaz_de             = window.patOtaz_de             || new Object;
window.patOtaz_de.tzi_paywall = window.patOtaz_de.tzi_paywall || function (settings) {


// Use params setup if exists instead of defaults.
setup = settings || setup;


//console.log("setup.campaign  = "+ setup.campaign);
//console.log("cookie.campaign = "+ $.cookie('tzi_paywall_campaign'));
// new campaign?
if ( !$.cookie('tzi_paywall_campaign') || $.cookie('tzi_paywall_campaign') != setup.campaign ) {
  console.log("tzi_paywall_campaign");
  $.cookie('tzi_paywall_campaign',     setup.campaign, { domain:'taz.de', path:'/', expires:365 });
	$.cookie('tzi_paywall_payed',        'new',          { domain:'taz.de', path:'/', expires:3   });
  $.cookie('tzi_paywall_seen_home',    0,              { domain:'taz.de', path:'/', expires:30  });
  $.cookie('tzi_paywall_seen_article', 0,              { domain:'taz.de', path:'/', expires:30  });
}
// play paywall or not?
if ( $.cookie('tzi_paywall_payed') == 'yes' ) {
	return;
}


// Variables definitions
var pagetype  = $(document.body).hasClass('homepage') ? 'home' : 'article';
var container = $('#tzi_paywall');


// Call this function only once.
if (pagetype == 'home') {
	if (!container[0].patOtaz_de_tzi_paywall) {
		// When first called, this property does not exist.
		container[0].patOtaz_de_tzi_paywall = true;
		return;
	}
}


// play paywall or not?
var seen = $.cookie('tzi_paywall_seen_'+ pagetype );
seen = seen ? parseInt( seen ) : 0;
if ( Math.random()*(seen+1) < seen ) {
	return;
}
$.cookie('tzi_paywall_seen_'+ pagetype, seen+1, { domain:'taz.de', path:'/', expires:30 });


// Variables definitions
var url_protocol = window.location.protocol;
var url_host     = window.location.host;
var url_path     = window.location.pathname;
var channel_char = url_path.replace (/[^;]*;([^\/]+).*/, '$1');
var url_channel  = ';' + ( channel_char ? channel_char : 'web' );
var url_abo      = 'https//taz.de/!115932';


// How many themes?
var theme_max = Object.keys (setup['theme']).length;


// Select a theme.
var theme_no  = (theme_max == 1) ? 1 : (Math.floor( Math.random() * theme_max ) + 1);


// Content to HTML.
$ ('.frost >.rack', container)
	.addClass (setup.theme[theme_no]['modus'])
	;
$ ('.frost >.rack >h2', container)
	.empty ()
	.addClass (setup.theme[theme_no]['modus'])
	.append (setup.theme[theme_no]['kicker'])
	.css ({'top': setup.theme[theme_no]['kicker_css_top']})
	;
$ ('.frost >.rack >.sect >.sectbody >p.tzi_paywall_text', container)
	.empty ()
	.append (setup.theme[theme_no]['text1'])
	.append ('<br />')
	.append ('<span>' + setup.theme[theme_no]['text2'] + '</span>')
	;
$ ('.frost >.rack >p.tzi_paywall_credit', container)
	.empty ()
	.css ({'color': setup.theme[theme_no]['caption-color']})
	.addClass (setup.theme[theme_no]['modus'])
	.append (setup.theme[theme_no]['credit'])
	;
$ ('.frost >.rack >.sect', container)
	.addClass (setup.theme[theme_no]['modus'])
	;
$ ('.background', container)
	.css ({'background': 'url("' + setup.theme[theme_no]['pic'] + '")'})
	;


var frost = $('#tzi_paywall .frost');
var payment;


// Viewport sizes:
var viewport_width = Math.floor( $(window).width() );
var centered_left  = Math.floor( $('#centered').offset().left + parseInt ($('#centered').css('padding-left').replace(/px/, "")) );
var main_col_left = centered_left + 600 + 50;


// Move containter to top of the HTML stack.
$(container).parent().prepend('<div id="tzi_paywall_origin" />');
$(container).parents('body').append(container);
$('.frost', container).css({
	'left' : '0px',
	'width' : viewport_width +'px',
});
$('.frost >.frost', container).css({'width': viewport_width +'px'});
$ ('.frost >.rack',       container).css({'margin': '0 0 0 '+ centered_left +'px', 'left': '0px'});
$ ('.frost >.background', container).css({'margin': '0 0 0 '+ centered_left +'px', 'left': '0px'});


if (pagetype == 'home') {
	if (!$('#pg461236_hd')) {
		$('#tzi_paywall').css({'display': 'none'});
	} else {
		var body_height = $('body').height();
		var tzi_origin  = $('#tzi_paywall_origin').offset().top;
		var tzi_top     = Math.floor( body_height - tzi_origin );
		$('#tzi_paywall').css({'display': 'block'});
		$('.frost', container).css({'top': '-'+ tzi_top +'px'});
	}
} else {
	if (!$('#pages >.first.page >.body >.sect >.sectbody >p.first.article').position().top) {
		$('#tzi_paywall').css({'display': 'none'});
	} else {
		$('.frost', container).css({
			'top'   : function () {
				var body_height        = $('body').height();
				var first_p_offset     = $('#pages >.first.page >.body >.sect >.sectbody >p.first.article').position().top;
				var tzi_paywall_offset = Math.floor( body_height ) - Math.floor( first_p_offset ) - Math.floor( 100 );
				return '-'+ tzi_paywall_offset +'px';
			}
		});
	}
}



/*
if (pagetype == 'home') {
	$(container).parent().append('<div id="tzi_paywall_origin" />');
	// Transfer containter to get out of the 'overflow:hidden'-area.
	$(container).parents('div.float').append(container);
  // Position of frost with the same height as TZI.
	$(frost).css('top', function () {
		return '130px';
	});
} else {
	$(container).parent().append('<div id="tzi_paywall_origin" />');
	// Move containter to top of the HTML stack.
	$(container).parents('body').append(container);
	$('#tzi_paywall >.frost').css({
		'left' : '-896px',
		'top'  : function () {
			var body_height        = $('body').height();
			var first_p_offset     = $('#pages >.first.page >.body >.sect >.sectbody >p.first.article').position().top;
			var tzi_paywall_offset = Math.floor( body_height ) - Math.floor( first_p_offset ) - Math.floor( 100 );
			return '-'+ tzi_paywall_offset +'px';
		}
	});
}
*/





// Payment objects
var ok_on_pay_kto = false;
var close_on_pay_kto = function() {
	if (ok_on_pay_kto) {
		ok_on_pay_kto.remove();
		ok_on_pay_kto = false;
	} else {
		ok_on_pay_kto = $('<ul class="corp directory"><li><a class="leaded product"><div class="hint">OK </div></a></li></li>')
		.css({ 'position': 'absolute',
					 'bottom'  : '0',
					 'right'   : '0', 
					 'display' : 'none',
				})
		.click( payed )
		.appendTo('#micropay')
		.fadeIn(2000)
		;
	}
};
var payed = function () {
	close();
	$('#reward >ul >li.tzi').click ();
	$.cookie('tzi_paywall_payed', 'yes', { domain:'taz.de', path:'/', expires:3 });
};


// Close function
var close = function () {
	if (payment && payment.length > 0) {
		$('#micropay >p' ).show();
		$('#micropay #amtman, #micropay .toolbar, #micropay li+li').removeAttr('style');
		$('#pay_mbe, #pay_paypal, #pay_ls, #pay_cc').unbind('click', payed );
		$('#pay_kto').unbind('click', close_on_pay_kto );
		$('#reward >.rack').append( payment );
	}
	if (ok_on_pay_kto) {
		ok_on_pay_kto.remove();
		ok_on_pay_kto = false;
	}
	if (pagetype == 'article') {
		$('#reward >.toolbar >.tzi >a >img').click(); // toggle payment
		$ ('#tzi_abo >div.sectbody').show ();
		$ ('#tzi_abo >a.sectbody').show ();
		$ ('#tzi_paywall_tziabo').remove ();
	} else {
		$('#reward >.toolbar >.tzi >a >img').click();
	}
	$('#tzi_paywall').find('>*').fadeOut();
};


container.show();


// Choice YES
$('#tzi_paywall_choice_yes_input').click (function () {
	if (pagetype == 'article') {
		var rack = $('.rack', container );
		payment = $('#reward >.rack >*');
		rack.append( payment );
		$ ('#micropay')
			.css ({'background':'none repeat scroll 0 0 rgba(255, 255, 255, 0.85)', 'padding':'10px'})
			.addClass ('lhs');
		$ ('#tzi_abo >div.sectbody').hide ();
		$ ('#tzi_abo >a.sectbody').hide ();
		$ ('>.sect', rack ).first().removeClass('last_box');
		$ ('>.sect', rack ).last().addClass('last_box');
		if ( $('#tzi_paywall_tziabo').length == 0 ) {
			var tziabo_text = '<p class="brief">taz zahl ich Abo: <span>Regelm&auml;&szlig;ig zahlen per Bankeinzug.</span></p>';
			//$ ('<a href="' + url_abo + '" target="_blank" id="tzi_paywall_tziabo">' + tziabo_text + '</a>').appendTo ('#micropay');
			$ ('<a href="https://taz.de/!115932" target="_blank" id="tzi_paywall_tziabo">' + tziabo_text + '</a>').appendTo ('#micropay');
		}
		$('#micropay >a#tzi_paywall_tziabo').click( close_on_pay_kto );
		$ ('#reward >.toolbar >.tzi >a >img').click(); // show payment
	} else {
		var open = false;
		frost.animate({ 'width': main_col_left +'px'}, function(){
			if (open) return;
			open = true;
			$ ('#reward >.toolbar >.tzi >a >img').click(); // show payment
		});
	}

	$('#pay_mbe, #pay_paypal, #pay_ls, #pay_cc, #tzi_abo >a.sectbody').click( payed );
	$('#pay_kto').click( close_on_pay_kto );
});


// Choice NO
$('#tzi_paywall_choice_no_input').click (function () {
	if (pagetype == 'article') {
		close();
	} else {  // toRefactor: duplicate Code here
		var open = false;
		frost.animate({ 'width': main_col_left +'px'}, function(){
			if (open) return;
			open = true;
			$('#reward >.toolbar >.tzi >a >img').click();   // show payment
			close();
		});
	}
});


// Choice ABO
$('#tzi_paywall_choice_abo_input').click (function () {
	$.cookie('tzi_paywall_payed', 'yes', { domain:'taz.de', path:'/', expires:365 });
	$('<div><h1 style="color: white;">Vielen Dank!</h1></div>')
		.css({ 'position': 'absolute', 'left': '0', 'top': '42px', 'padding-left': main_col_left +'px' })
		.hide()
		.appendTo( frost )
		.fadeIn(100, function(){
			frost.animate({ opacity:1.0 }, 500, close );
		})
		;
});


}; // patOtaz_de.tzi_paywall



