function Cv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function kv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jm={exports:{}},cs={},Em={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),jv=Symbol.for("react.portal"),Ev=Symbol.for("react.fragment"),Nv=Symbol.for("react.strict_mode"),Lv=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),Rv=Symbol.for("react.forward_ref"),Ov=Symbol.for("react.suspense"),Bv=Symbol.for("react.memo"),Tv=Symbol.for("react.lazy"),du=Symbol.iterator;function Mv(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var Nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Im={};function br(e,t,n){this.props=e,this.context=t,this.refs=Im,this.updater=n||Nm}br.prototype.isReactComponent={};br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pm(){}Pm.prototype=br.prototype;function Hl(e,t,n){this.props=e,this.context=t,this.refs=Im,this.updater=n||Nm}var Kl=Hl.prototype=new Pm;Kl.constructor=Hl;Lm(Kl,br.prototype);Kl.isPureReactComponent=!0;var mu=Array.isArray,Rm=Object.prototype.hasOwnProperty,Gl={current:null},Om={key:!0,ref:!0,__self:!0,__source:!0};function Bm(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Rm.call(t,r)&&!Om.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:jo,type:e,key:i,ref:s,props:o,_owner:Gl.current}}function Fv(e,t){return{$$typeof:jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yl(e){return typeof e=="object"&&e!==null&&e.$$typeof===jo}function Dv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fu=/\/+/g;function Vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dv(""+e.key):t.toString(36)}function oi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case jo:case jv:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Vs(s,0):r,mu(o)?(n="",e!=null&&(n=e.replace(fu,"$&/")+"/"),oi(o,t,n,"",function(u){return u})):o!=null&&(Yl(o)&&(o=Fv(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(fu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",mu(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+Vs(i,a);s+=oi(i,t,n,c,o)}else if(c=Mv(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+Vs(i,a++),s+=oi(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Fo(e,t,n){if(e==null)return e;var r=[],o=0;return oi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Uv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},ii={transition:null},zv={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:ii,ReactCurrentOwner:Gl};function Tm(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Fo,forEach:function(e,t,n){Fo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fo(e,function(){t++}),t},toArray:function(e){return Fo(e,function(t){return t})||[]},only:function(e){if(!Yl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=br;D.Fragment=Ev;D.Profiler=Lv;D.PureComponent=Hl;D.StrictMode=Nv;D.Suspense=Ov;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zv;D.act=Tm;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lm({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Gl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Rm.call(t,c)&&!Om.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:jo,type:e.type,key:o,ref:i,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:Pv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Iv,_context:e},e.Consumer=e};D.createElement=Bm;D.createFactory=function(e){var t=Bm.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Rv,render:e}};D.isValidElement=Yl;D.lazy=function(e){return{$$typeof:Tv,_payload:{_status:-1,_result:e},_init:Uv}};D.memo=function(e,t){return{$$typeof:Bv,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=ii.transition;ii.transition={};try{e()}finally{ii.transition=t}};D.unstable_act=Tm;D.useCallback=function(e,t){return Ee.current.useCallback(e,t)};D.useContext=function(e){return Ee.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};D.useEffect=function(e,t){return Ee.current.useEffect(e,t)};D.useId=function(){return Ee.current.useId()};D.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Ee.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};D.useRef=function(e){return Ee.current.useRef(e)};D.useState=function(e){return Ee.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Ee.current.useTransition()};D.version="18.3.1";Em.exports=D;var A=Em.exports;const he=kv(A),Na=Cv({__proto__:null,default:he},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=A,Wv=Symbol.for("react.element"),Vv=Symbol.for("react.fragment"),$v=Object.prototype.hasOwnProperty,Hv=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kv={key:!0,ref:!0,__self:!0,__source:!0};function Mm(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)$v.call(t,r)&&!Kv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Wv,type:e,key:i,ref:s,props:o,_owner:Hv.current}}cs.Fragment=Vv;cs.jsx=Mm;cs.jsxs=Mm;jm.exports=cs;var l=jm.exports,Fm={exports:{}},Xe={},Dm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,O){var T=I.length;I.push(O);e:for(;0<T;){var $=T-1>>>1,H=I[$];if(0<o(H,O))I[$]=O,I[T]=H,T=$;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var O=I[0],T=I.pop();if(T!==O){I[0]=T;e:for(var $=0,H=I.length,pn=H>>>1;$<pn;){var it=2*($+1)-1,Dt=I[it],Ue=it+1,Ct=I[Ue];if(0>o(Dt,T))Ue<H&&0>o(Ct,Dt)?(I[$]=Ct,I[Ue]=T,$=Ue):(I[$]=Dt,I[it]=T,$=it);else if(Ue<H&&0>o(Ct,T))I[$]=Ct,I[Ue]=T,$=Ue;else break e}}return O}function o(I,O){var T=I.sortIndex-O.sortIndex;return T!==0?T:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,m=null,v=3,_=!1,g=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=I)r(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(u)}}function b(I){if(y=!1,h(I),!g)if(n(c)!==null)g=!0,Er(C);else{var O=n(u);O!==null&&hn(b,O.startTime-I)}}function C(I,O){g=!1,y&&(y=!1,p(j),j=-1),_=!0;var T=v;try{for(h(O),m=n(c);m!==null&&(!(m.expirationTime>O)||I&&!V());){var $=m.callback;if(typeof $=="function"){m.callback=null,v=m.priorityLevel;var H=$(m.expirationTime<=O);O=e.unstable_now(),typeof H=="function"?m.callback=H:m===n(c)&&r(c),h(O)}else r(c);m=n(c)}if(m!==null)var pn=!0;else{var it=n(u);it!==null&&hn(b,it.startTime-O),pn=!1}return pn}finally{m=null,v=T,_=!1}}var k=!1,x=null,j=-1,L=5,N=-1;function V(){return!(e.unstable_now()-N<L)}function vt(){if(x!==null){var I=e.unstable_now();N=I;var O=!0;try{O=x(!0,I)}finally{O?Fe():(k=!1,x=null)}}else k=!1}var Fe;if(typeof f=="function")Fe=function(){f(vt)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,jr=De.port2;De.port1.onmessage=vt,Fe=function(){jr.postMessage(null)}}else Fe=function(){w(vt,0)};function Er(I){x=I,k||(k=!0,Fe())}function hn(I,O){j=w(function(){I(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){g||_||(g=!0,Er(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(v){case 1:case 2:case 3:var O=3;break;default:O=v}var T=v;v=O;try{return I()}finally{v=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var T=v;v=I;try{return O()}finally{v=T}},e.unstable_scheduleCallback=function(I,O,T){var $=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?$+T:$):T=$,I){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=T+H,I={id:d++,callback:O,priorityLevel:I,startTime:T,expirationTime:H,sortIndex:-1},T>$?(I.sortIndex=T,t(u,I),n(c)===null&&I===n(u)&&(y?(p(j),j=-1):y=!0,hn(b,T-$))):(I.sortIndex=H,t(c,I),g||_||(g=!0,Er(C))),I},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(I){var O=v;return function(){var T=v;v=O;try{return I.apply(this,arguments)}finally{v=T}}}})(Um);Dm.exports=Um;var Gv=Dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv=A,Ke=Gv;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zm=new Set,to={};function Fn(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(to[e]=t,e=0;e<t.length;e++)zm.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),La=Object.prototype.hasOwnProperty,Xv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hu={},pu={};function Jv(e){return La.call(pu,e)?!0:La.call(hu,e)?!1:Xv.test(e)?pu[e]=!0:(hu[e]=!0,!1)}function Qv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zv(e,t,n,r){if(t===null||typeof t>"u"||Qv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xl,Jl);ye[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xl,Jl);ye[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xl,Jl);ye[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zv(t,n,o,r)&&(n=null),r||o===null?Jv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),qm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),ec=Symbol.for("react.forward_ref"),Pa=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),tc=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Vm=Symbol.for("react.offscreen"),vu=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,$s;function Dr(e){if($s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$s=t&&t[1]||""}return`
`+$s+e}var Hs=!1;function Ks(e,t){if(!e||Hs)return"";Hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Hs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function eg(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Ks(e.type,!1),e;case 11:return e=Ks(e.type.render,!1),e;case 1:return e=Ks(e.type,!0),e;default:return""}}function Oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Wn:return"Portal";case Ia:return"Profiler";case Zl:return"StrictMode";case Pa:return"Suspense";case Ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wm:return(e.displayName||"Context")+".Consumer";case qm:return(e._context.displayName||"Context")+".Provider";case ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tc:return t=e.displayName||null,t!==null?t:Oa(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}function tg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oa(t);case 8:return t===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $m(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ng(e){var t=$m(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){e._valueTracker||(e._valueTracker=ng(e))}function Hm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$m(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ba(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Km(e,t){t=t.checked,t!=null&&Ql(e,"checked",t,!1)}function Ta(e,t){Km(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ma(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ma(e,t,n){(t!=="number"||Si(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ur=Array.isArray;function nr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Fa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Ur(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function Gm(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ym(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Da(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ym(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zo,Xm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function no(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rg=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){rg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$r[t]=$r[e]})});function Jm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$r.hasOwnProperty(e)&&$r[e]?(""+t).trim():t+"px"}function Qm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Jm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var og=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(e,t){if(t){if(og[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function za(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qa=null;function nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,rr=null,or=null;function bu(e){if(e=Lo(e)){if(typeof Wa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=hs(t),Wa(e.stateNode,e.type,t))}}function Zm(e){rr?or?or.push(e):or=[e]:rr=e}function ef(){if(rr){var e=rr,t=or;if(or=rr=null,bu(e),t)for(e=0;e<t.length;e++)bu(t[e])}}function tf(e,t){return e(t)}function nf(){}var Gs=!1;function rf(e,t,n){if(Gs)return e(t,n);Gs=!0;try{return tf(e,t,n)}finally{Gs=!1,(rr!==null||or!==null)&&(nf(),ef())}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var r=hs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Va=!1;if(Pt)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Va=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Va=!1}function ig(e,t,n,r,o,i,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Hr=!1,Ai=null,Ci=!1,$a=null,sg={onError:function(e){Hr=!0,Ai=e}};function ag(e,t,n,r,o,i,s,a,c){Hr=!1,Ai=null,ig.apply(sg,arguments)}function lg(e,t,n,r,o,i,s,a,c){if(ag.apply(this,arguments),Hr){if(Hr){var u=Ai;Hr=!1,Ai=null}else throw Error(E(198));Ci||(Ci=!0,$a=u)}}function Dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function of(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xu(e){if(Dn(e)!==e)throw Error(E(188))}function cg(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return xu(o),e;if(i===r)return xu(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function sf(e){return e=cg(e),e!==null?af(e):null}function af(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=af(e);if(t!==null)return t;e=e.sibling}return null}var lf=Ke.unstable_scheduleCallback,Su=Ke.unstable_cancelCallback,ug=Ke.unstable_shouldYield,dg=Ke.unstable_requestPaint,oe=Ke.unstable_now,mg=Ke.unstable_getCurrentPriorityLevel,rc=Ke.unstable_ImmediatePriority,cf=Ke.unstable_UserBlockingPriority,ki=Ke.unstable_NormalPriority,fg=Ke.unstable_LowPriority,uf=Ke.unstable_IdlePriority,us=null,bt=null;function hg(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(us,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:gg,pg=Math.log,vg=Math.LN2;function gg(e){return e>>>=0,e===0?32:31-(pg(e)/vg|0)|0}var qo=64,Wo=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=zr(a):(i&=s,i!==0&&(r=zr(i)))}else s=n&~o,s!==0?r=zr(s):i!==0&&(r=zr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),o=1<<n,r|=e[n],t&=~o;return r}function _g(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-dt(i),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=_g(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function Ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function df(){var e=qo;return qo<<=1,!(qo&4194240)&&(qo=64),e}function Ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function wg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var q=0;function mf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ff,ic,hf,pf,vf,Ka=!1,Vo=[],Jt=null,Qt=null,Zt=null,oo=new Map,io=new Map,Ht=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function Pr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Lo(t),t!==null&&ic(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xg(e,t,n,r,o){switch(t){case"focusin":return Jt=Pr(Jt,e,t,n,r,o),!0;case"dragenter":return Qt=Pr(Qt,e,t,n,r,o),!0;case"mouseover":return Zt=Pr(Zt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return oo.set(i,Pr(oo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,io.set(i,Pr(io.get(i)||null,e,t,n,r,o)),!0}return!1}function gf(e){var t=wn(e.target);if(t!==null){var n=Dn(t);if(n!==null){if(t=n.tag,t===13){if(t=of(n),t!==null){e.blockedOn=t,vf(e.priority,function(){hf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function si(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qa=r,n.target.dispatchEvent(r),qa=null}else return t=Lo(n),t!==null&&ic(t),e.blockedOn=n,!1;t.shift()}return!0}function Cu(e,t,n){si(e)&&n.delete(t)}function Sg(){Ka=!1,Jt!==null&&si(Jt)&&(Jt=null),Qt!==null&&si(Qt)&&(Qt=null),Zt!==null&&si(Zt)&&(Zt=null),oo.forEach(Cu),io.forEach(Cu)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ka||(Ka=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Sg)))}function so(e){function t(o){return Rr(o,e)}if(0<Vo.length){Rr(Vo[0],e);for(var n=1;n<Vo.length;n++){var r=Vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Rr(Jt,e),Qt!==null&&Rr(Qt,e),Zt!==null&&Rr(Zt,e),oo.forEach(t),io.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)gf(n),n.blockedOn===null&&Ht.shift()}var ir=Ft.ReactCurrentBatchConfig,Ei=!0;function Ag(e,t,n,r){var o=q,i=ir.transition;ir.transition=null;try{q=1,sc(e,t,n,r)}finally{q=o,ir.transition=i}}function Cg(e,t,n,r){var o=q,i=ir.transition;ir.transition=null;try{q=4,sc(e,t,n,r)}finally{q=o,ir.transition=i}}function sc(e,t,n,r){if(Ei){var o=Ga(e,t,n,r);if(o===null)ia(e,t,r,Ni,n),Au(e,r);else if(xg(o,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<bg.indexOf(e)){for(;o!==null;){var i=Lo(o);if(i!==null&&ff(i),i=Ga(e,t,n,r),i===null&&ia(e,t,r,Ni,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ia(e,t,r,null,n)}}var Ni=null;function Ga(e,t,n,r){if(Ni=null,e=nc(r),e=wn(e),e!==null)if(t=Dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=of(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ni=e,null}function _f(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mg()){case rc:return 1;case cf:return 4;case ki:case fg:return 16;case uf:return 536870912;default:return 16}default:return 16}}var Gt=null,ac=null,ai=null;function yf(){if(ai)return ai;var e,t=ac,n=t.length,r,o="value"in Gt?Gt.value:Gt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ai=o.slice(e,1<r?1-r:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function ku(){return!1}function Je(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$o:ku,this.isPropagationStopped=ku,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Je(xr),No=te({},xr,{view:0,detail:0}),kg=Je(No),Xs,Js,Or,ds=te({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(Xs=e.screenX-Or.screenX,Js=e.screenY-Or.screenY):Js=Xs=0,Or=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:Js}}),ju=Je(ds),jg=te({},ds,{dataTransfer:0}),Eg=Je(jg),Ng=te({},No,{relatedTarget:0}),Qs=Je(Ng),Lg=te({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=Je(Lg),Pg=te({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rg=Je(Pg),Og=te({},xr,{data:0}),Eu=Je(Og),Bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mg[e])?!!t[e]:!1}function cc(){return Fg}var Dg=te({},No,{key:function(e){if(e.key){var t=Bg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ug=Je(Dg),zg=te({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=Je(zg),qg=te({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),Wg=Je(qg),Vg=te({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$g=Je(Vg),Hg=te({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=Je(Hg),Gg=[9,13,27,32],uc=Pt&&"CompositionEvent"in window,Kr=null;Pt&&"documentMode"in document&&(Kr=document.documentMode);var Yg=Pt&&"TextEvent"in window&&!Kr,wf=Pt&&(!uc||Kr&&8<Kr&&11>=Kr),Lu=" ",Iu=!1;function bf(e,t){switch(e){case"keyup":return Gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Xg(e,t){switch(e){case"compositionend":return xf(t);case"keypress":return t.which!==32?null:(Iu=!0,Lu);case"textInput":return e=t.data,e===Lu&&Iu?null:e;default:return null}}function Jg(e,t){if($n)return e==="compositionend"||!uc&&bf(e,t)?(e=yf(),ai=ac=Gt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wf&&t.locale!=="ko"?null:t.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qg[e.type]:t==="textarea"}function Sf(e,t,n,r){Zm(r),t=Li(t,"onChange"),0<t.length&&(n=new lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,ao=null;function Zg(e){Of(e,0)}function ms(e){var t=Gn(e);if(Hm(t))return e}function e_(e,t){if(e==="change")return t}var Af=!1;if(Pt){var Zs;if(Pt){var ea="oninput"in document;if(!ea){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),ea=typeof Ru.oninput=="function"}Zs=ea}else Zs=!1;Af=Zs&&(!document.documentMode||9<document.documentMode)}function Ou(){Gr&&(Gr.detachEvent("onpropertychange",Cf),ao=Gr=null)}function Cf(e){if(e.propertyName==="value"&&ms(ao)){var t=[];Sf(t,ao,e,nc(e)),rf(Zg,t)}}function t_(e,t,n){e==="focusin"?(Ou(),Gr=t,ao=n,Gr.attachEvent("onpropertychange",Cf)):e==="focusout"&&Ou()}function n_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ms(ao)}function r_(e,t){if(e==="click")return ms(t)}function o_(e,t){if(e==="input"||e==="change")return ms(t)}function i_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:i_;function lo(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!La.call(t,o)||!ht(e[o],t[o]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tu(e,t){var n=Bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bu(n)}}function kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jf(){for(var e=window,t=Si();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Si(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s_(e){var t=jf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kf(n.ownerDocument.documentElement,n)){if(r!==null&&dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Tu(n,i);var s=Tu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var a_=Pt&&"documentMode"in document&&11>=document.documentMode,Hn=null,Ya=null,Yr=null,Xa=!1;function Mu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xa||Hn==null||Hn!==Si(r)||(r=Hn,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&lo(Yr,r)||(Yr=r,r=Li(Ya,"onSelect"),0<r.length&&(t=new lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function Ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},ta={},Ef={};Pt&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function fs(e){if(ta[e])return ta[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ef)return ta[e]=t[n];return e}var Nf=fs("animationend"),Lf=fs("animationiteration"),If=fs("animationstart"),Pf=fs("transitionend"),Rf=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Rf.set(e,t),Fn(t,[e])}for(var na=0;na<Fu.length;na++){var ra=Fu[na],l_=ra.toLowerCase(),c_=ra[0].toUpperCase()+ra.slice(1);un(l_,"on"+c_)}un(Nf,"onAnimationEnd");un(Lf,"onAnimationIteration");un(If,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Pf,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u_=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lg(r,t,void 0,e),e.currentTarget=null}function Of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;Du(o,a,u),i=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;Du(o,a,u),i=c}}}if(Ci)throw e=$a,Ci=!1,$a=null,e}function G(e,t){var n=t[tl];n===void 0&&(n=t[tl]=new Set);var r=e+"__bubble";n.has(r)||(Bf(t,e,2,!1),n.add(r))}function oa(e,t,n){var r=0;t&&(r|=4),Bf(n,e,r,t)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[Ko]){e[Ko]=!0,zm.forEach(function(n){n!=="selectionchange"&&(u_.has(n)||oa(n,!1,e),oa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ko]||(t[Ko]=!0,oa("selectionchange",!1,t))}}function Bf(e,t,n,r){switch(_f(t)){case 1:var o=Ag;break;case 4:o=Cg;break;default:o=sc}n=o.bind(null,t,n,e),o=void 0,!Va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ia(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=wn(a),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}a=a.parentNode}}r=r.return}rf(function(){var u=i,d=nc(n),m=[];e:{var v=Rf.get(e);if(v!==void 0){var _=lc,g=e;switch(e){case"keypress":if(li(n)===0)break e;case"keydown":case"keyup":_=Ug;break;case"focusin":g="focus",_=Qs;break;case"focusout":g="blur",_=Qs;break;case"beforeblur":case"afterblur":_=Qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Wg;break;case Nf:case Lf:case If:_=Ig;break;case Pf:_=$g;break;case"scroll":_=kg;break;case"wheel":_=Kg;break;case"copy":case"cut":case"paste":_=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Nu}var y=(t&4)!==0,w=!y&&e==="scroll",p=y?v!==null?v+"Capture":null:v;y=[];for(var f=u,h;f!==null;){h=f;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,p!==null&&(b=ro(f,p),b!=null&&y.push(uo(f,b,h)))),w)break;f=f.return}0<y.length&&(v=new _(v,g,null,n,d),m.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",v&&n!==qa&&(g=n.relatedTarget||n.fromElement)&&(wn(g)||g[Rt]))break e;if((_||v)&&(v=d.window===d?d:(v=d.ownerDocument)?v.defaultView||v.parentWindow:window,_?(g=n.relatedTarget||n.toElement,_=u,g=g?wn(g):null,g!==null&&(w=Dn(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(_=null,g=u),_!==g)){if(y=ju,b="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Nu,b="onPointerLeave",p="onPointerEnter",f="pointer"),w=_==null?v:Gn(_),h=g==null?v:Gn(g),v=new y(b,f+"leave",_,n,d),v.target=w,v.relatedTarget=h,b=null,wn(d)===u&&(y=new y(p,f+"enter",g,n,d),y.target=h,y.relatedTarget=w,b=y),w=b,_&&g)t:{for(y=_,p=g,f=0,h=y;h;h=zn(h))f++;for(h=0,b=p;b;b=zn(b))h++;for(;0<f-h;)y=zn(y),f--;for(;0<h-f;)p=zn(p),h--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=zn(y),p=zn(p)}y=null}else y=null;_!==null&&Uu(m,v,_,y,!1),g!==null&&w!==null&&Uu(m,w,g,y,!0)}}e:{if(v=u?Gn(u):window,_=v.nodeName&&v.nodeName.toLowerCase(),_==="select"||_==="input"&&v.type==="file")var C=e_;else if(Pu(v))if(Af)C=o_;else{C=n_;var k=t_}else(_=v.nodeName)&&_.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(C=r_);if(C&&(C=C(e,u))){Sf(m,C,n,d);break e}k&&k(e,v,u),e==="focusout"&&(k=v._wrapperState)&&k.controlled&&v.type==="number"&&Ma(v,"number",v.value)}switch(k=u?Gn(u):window,e){case"focusin":(Pu(k)||k.contentEditable==="true")&&(Hn=k,Ya=u,Yr=null);break;case"focusout":Yr=Ya=Hn=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Mu(m,n,d);break;case"selectionchange":if(a_)break;case"keydown":case"keyup":Mu(m,n,d)}var x;if(uc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else $n?bf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(wf&&n.locale!=="ko"&&($n||j!=="onCompositionStart"?j==="onCompositionEnd"&&$n&&(x=yf()):(Gt=d,ac="value"in Gt?Gt.value:Gt.textContent,$n=!0)),k=Li(u,j),0<k.length&&(j=new Eu(j,e,null,n,d),m.push({event:j,listeners:k}),x?j.data=x:(x=xf(n),x!==null&&(j.data=x)))),(x=Yg?Xg(e,n):Jg(e,n))&&(u=Li(u,"onBeforeInput"),0<u.length&&(d=new Eu("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=x))}Of(m,t)})}function uo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Li(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ro(e,n),i!=null&&r.unshift(uo(e,i,o)),i=ro(e,t),i!=null&&r.push(uo(e,i,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uu(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,o?(c=ro(n,i),c!=null&&s.unshift(uo(n,c,a))):o||(c=ro(n,i),c!=null&&s.push(uo(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var d_=/\r\n?/g,m_=/\u0000|\uFFFD/g;function zu(e){return(typeof e=="string"?e:""+e).replace(d_,`
`).replace(m_,"")}function Go(e,t,n){if(t=zu(t),zu(e)!==t&&n)throw Error(E(425))}function Ii(){}var Ja=null,Qa=null;function Za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var el=typeof setTimeout=="function"?setTimeout:void 0,f_=typeof clearTimeout=="function"?clearTimeout:void 0,qu=typeof Promise=="function"?Promise:void 0,h_=typeof queueMicrotask=="function"?queueMicrotask:typeof qu<"u"?function(e){return qu.resolve(null).then(e).catch(p_)}:el;function p_(e){setTimeout(function(){throw e})}function sa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),so(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);so(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),wt="__reactFiber$"+Sr,mo="__reactProps$"+Sr,Rt="__reactContainer$"+Sr,tl="__reactEvents$"+Sr,v_="__reactListeners$"+Sr,g_="__reactHandles$"+Sr;function wn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wu(e);e!==null;){if(n=e[wt])return n;e=Wu(e)}return t}e=n,n=e.parentNode}return null}function Lo(e){return e=e[wt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function hs(e){return e[mo]||null}var nl=[],Yn=-1;function dn(e){return{current:e}}function X(e){0>Yn||(e.current=nl[Yn],nl[Yn]=null,Yn--)}function K(e,t){Yn++,nl[Yn]=e.current,e.current=t}var ln={},Ae=dn(ln),Re=dn(!1),Ln=ln;function cr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function Pi(){X(Re),X(Ae)}function Vu(e,t,n){if(Ae.current!==ln)throw Error(E(168));K(Ae,t),K(Re,n)}function Tf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,tg(e)||"Unknown",o));return te({},n,r)}function Ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Ln=Ae.current,K(Ae,e),K(Re,Re.current),!0}function $u(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Tf(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,X(Re),X(Ae),K(Ae,e)):X(Re),K(Re,n)}var Et=null,ps=!1,aa=!1;function Mf(e){Et===null?Et=[e]:Et.push(e)}function __(e){ps=!0,Mf(e)}function mn(){if(!aa&&Et!==null){aa=!0;var e=0,t=q;try{var n=Et;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,ps=!1}catch(o){throw Et!==null&&(Et=Et.slice(e+1)),lf(rc,mn),o}finally{q=t,aa=!1}}return null}var Xn=[],Jn=0,Oi=null,Bi=0,Qe=[],Ze=0,In=null,Nt=1,Lt="";function gn(e,t){Xn[Jn++]=Bi,Xn[Jn++]=Oi,Oi=e,Bi=t}function Ff(e,t,n){Qe[Ze++]=Nt,Qe[Ze++]=Lt,Qe[Ze++]=In,In=e;var r=Nt;e=Lt;var o=32-dt(r)-1;r&=~(1<<o),n+=1;var i=32-dt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Nt=1<<32-dt(t)+o|n<<o|r,Lt=i+e}else Nt=1<<i|n<<o|r,Lt=e}function mc(e){e.return!==null&&(gn(e,1),Ff(e,1,0))}function fc(e){for(;e===Oi;)Oi=Xn[--Jn],Xn[Jn]=null,Bi=Xn[--Jn],Xn[Jn]=null;for(;e===In;)In=Qe[--Ze],Qe[Ze]=null,Lt=Qe[--Ze],Qe[Ze]=null,Nt=Qe[--Ze],Qe[Ze]=null}var $e=null,We=null,Q=!1,ct=null;function Df(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,We=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Nt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,We=null,!0):!1;default:return!1}}function rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if(Q){var t=We;if(t){var n=t;if(!Hu(e,t)){if(rl(e))throw Error(E(418));t=en(n.nextSibling);var r=$e;t&&Hu(e,t)?Df(r,n):(e.flags=e.flags&-4097|2,Q=!1,$e=e)}}else{if(rl(e))throw Error(E(418));e.flags=e.flags&-4097|2,Q=!1,$e=e}}}function Ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Yo(e){if(e!==$e)return!1;if(!Q)return Ku(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Za(e.type,e.memoizedProps)),t&&(t=We)){if(rl(e))throw Uf(),Error(E(418));for(;t;)Df(e,t),t=en(t.nextSibling)}if(Ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=$e?en(e.stateNode.nextSibling):null;return!0}function Uf(){for(var e=We;e;)e=en(e.nextSibling)}function ur(){We=$e=null,Q=!1}function hc(e){ct===null?ct=[e]:ct.push(e)}var y_=Ft.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Xo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gu(e){var t=e._init;return t(e._payload)}function zf(e){function t(p,f){if(e){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function o(p,f){return p=on(p,f),p.index=0,p.sibling=null,p}function i(p,f,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,h,b){return f===null||f.tag!==6?(f=ha(h,p.mode,b),f.return=p,f):(f=o(f,h),f.return=p,f)}function c(p,f,h,b){var C=h.type;return C===Vn?d(p,f,h.props.children,b,h.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&Gu(C)===f.type)?(b=o(f,h.props),b.ref=Br(p,f,h),b.return=p,b):(b=pi(h.type,h.key,h.props,null,p.mode,b),b.ref=Br(p,f,h),b.return=p,b)}function u(p,f,h,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=pa(h,p.mode,b),f.return=p,f):(f=o(f,h.children||[]),f.return=p,f)}function d(p,f,h,b,C){return f===null||f.tag!==7?(f=kn(h,p.mode,b,C),f.return=p,f):(f=o(f,h),f.return=p,f)}function m(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ha(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Do:return h=pi(f.type,f.key,f.props,null,p.mode,h),h.ref=Br(p,null,f),h.return=p,h;case Wn:return f=pa(f,p.mode,h),f.return=p,f;case Vt:var b=f._init;return m(p,b(f._payload),h)}if(Ur(f)||Lr(f))return f=kn(f,p.mode,h,null),f.return=p,f;Xo(p,f)}return null}function v(p,f,h,b){var C=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:a(p,f,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Do:return h.key===C?c(p,f,h,b):null;case Wn:return h.key===C?u(p,f,h,b):null;case Vt:return C=h._init,v(p,f,C(h._payload),b)}if(Ur(h)||Lr(h))return C!==null?null:d(p,f,h,b,null);Xo(p,h)}return null}function _(p,f,h,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(h)||null,a(f,p,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Do:return p=p.get(b.key===null?h:b.key)||null,c(f,p,b,C);case Wn:return p=p.get(b.key===null?h:b.key)||null,u(f,p,b,C);case Vt:var k=b._init;return _(p,f,h,k(b._payload),C)}if(Ur(b)||Lr(b))return p=p.get(h)||null,d(f,p,b,C,null);Xo(f,b)}return null}function g(p,f,h,b){for(var C=null,k=null,x=f,j=f=0,L=null;x!==null&&j<h.length;j++){x.index>j?(L=x,x=null):L=x.sibling;var N=v(p,x,h[j],b);if(N===null){x===null&&(x=L);break}e&&x&&N.alternate===null&&t(p,x),f=i(N,f,j),k===null?C=N:k.sibling=N,k=N,x=L}if(j===h.length)return n(p,x),Q&&gn(p,j),C;if(x===null){for(;j<h.length;j++)x=m(p,h[j],b),x!==null&&(f=i(x,f,j),k===null?C=x:k.sibling=x,k=x);return Q&&gn(p,j),C}for(x=r(p,x);j<h.length;j++)L=_(x,p,j,h[j],b),L!==null&&(e&&L.alternate!==null&&x.delete(L.key===null?j:L.key),f=i(L,f,j),k===null?C=L:k.sibling=L,k=L);return e&&x.forEach(function(V){return t(p,V)}),Q&&gn(p,j),C}function y(p,f,h,b){var C=Lr(h);if(typeof C!="function")throw Error(E(150));if(h=C.call(h),h==null)throw Error(E(151));for(var k=C=null,x=f,j=f=0,L=null,N=h.next();x!==null&&!N.done;j++,N=h.next()){x.index>j?(L=x,x=null):L=x.sibling;var V=v(p,x,N.value,b);if(V===null){x===null&&(x=L);break}e&&x&&V.alternate===null&&t(p,x),f=i(V,f,j),k===null?C=V:k.sibling=V,k=V,x=L}if(N.done)return n(p,x),Q&&gn(p,j),C;if(x===null){for(;!N.done;j++,N=h.next())N=m(p,N.value,b),N!==null&&(f=i(N,f,j),k===null?C=N:k.sibling=N,k=N);return Q&&gn(p,j),C}for(x=r(p,x);!N.done;j++,N=h.next())N=_(x,p,j,N.value,b),N!==null&&(e&&N.alternate!==null&&x.delete(N.key===null?j:N.key),f=i(N,f,j),k===null?C=N:k.sibling=N,k=N);return e&&x.forEach(function(vt){return t(p,vt)}),Q&&gn(p,j),C}function w(p,f,h,b){if(typeof h=="object"&&h!==null&&h.type===Vn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Do:e:{for(var C=h.key,k=f;k!==null;){if(k.key===C){if(C=h.type,C===Vn){if(k.tag===7){n(p,k.sibling),f=o(k,h.props.children),f.return=p,p=f;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&Gu(C)===k.type){n(p,k.sibling),f=o(k,h.props),f.ref=Br(p,k,h),f.return=p,p=f;break e}n(p,k);break}else t(p,k);k=k.sibling}h.type===Vn?(f=kn(h.props.children,p.mode,b,h.key),f.return=p,p=f):(b=pi(h.type,h.key,h.props,null,p.mode,b),b.ref=Br(p,f,h),b.return=p,p=b)}return s(p);case Wn:e:{for(k=h.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(p,f.sibling),f=o(f,h.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=pa(h,p.mode,b),f.return=p,p=f}return s(p);case Vt:return k=h._init,w(p,f,k(h._payload),b)}if(Ur(h))return g(p,f,h,b);if(Lr(h))return y(p,f,h,b);Xo(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(p,f.sibling),f=o(f,h),f.return=p,p=f):(n(p,f),f=ha(h,p.mode,b),f.return=p,p=f),s(p)):n(p,f)}return w}var dr=zf(!0),qf=zf(!1),Ti=dn(null),Mi=null,Qn=null,pc=null;function vc(){pc=Qn=Mi=null}function gc(e){var t=Ti.current;X(Ti),e._currentValue=t}function il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){Mi=e,pc=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(pc!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(Mi===null)throw Error(E(308));Qn=e,Mi.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var bn=null;function _c(e){bn===null?bn=[e]:bn.push(e)}function Wf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_c(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ot(e,n)}return o=r.interleaved,o===null?(t.next=t,_c(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ot(e,n)}function ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}function Yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fi(e,t,n,r){var o=e.updateQueue;$t=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(i!==null){var m=o.baseState;s=0,d=u=c=null,a=i;do{var v=a.lane,_=a.eventTime;if((r&v)===v){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(v=t,_=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){m=g.call(_,m,v);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,v=typeof g=="function"?g.call(_,m,v):g,v==null)break e;m=te({},m,v);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else _={eventTime:_,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=_,c=m):d=d.next=_,s|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(d===null&&(c=m),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Rn|=s,e.lanes=s,e.memoizedState=m}}function Xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Io={},xt=dn(Io),fo=dn(Io),ho=dn(Io);function xn(e){if(e===Io)throw Error(E(174));return e}function wc(e,t){switch(K(ho,t),K(fo,e),K(xt,Io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Da(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Da(t,e)}X(xt),K(xt,t)}function mr(){X(xt),X(fo),X(ho)}function $f(e){xn(ho.current);var t=xn(xt.current),n=Da(t,e.type);t!==n&&(K(fo,e),K(xt,n))}function bc(e){fo.current===e&&(X(xt),X(fo))}var Z=dn(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=[];function xc(){for(var e=0;e<la.length;e++)la[e]._workInProgressVersionPrimary=null;la.length=0}var ui=Ft.ReactCurrentDispatcher,ca=Ft.ReactCurrentBatchConfig,Pn=0,ee=null,le=null,me=null,Ui=!1,Xr=!1,po=0,w_=0;function we(){throw Error(E(321))}function Sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Ac(e,t,n,r,o,i){if(Pn=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ui.current=e===null||e.memoizedState===null?A_:C_,e=n(r,o),Xr){i=0;do{if(Xr=!1,po=0,25<=i)throw Error(E(301));i+=1,me=le=null,t.updateQueue=null,ui.current=k_,e=n(r,o)}while(Xr)}if(ui.current=zi,t=le!==null&&le.next!==null,Pn=0,me=le=ee=null,Ui=!1,t)throw Error(E(300));return e}function Cc(){var e=po!==0;return po=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ee.memoizedState=me=e:me=me.next=e,me}function rt(){if(le===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=me===null?ee.memoizedState:me.next;if(t!==null)me=t,le=e;else{if(e===null)throw Error(E(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},me===null?ee.memoizedState=me=e:me=me.next=e}return me}function vo(e,t){return typeof t=="function"?t(e):t}function ua(e){var t=rt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,c=null,u=i;do{var d=u.lane;if((Pn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=m,s=r):c=c.next=m,ee.lanes|=d,Rn|=d}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=a,ht(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,Rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function da(e){var t=rt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);ht(i,t.memoizedState)||(Pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Hf(){}function Kf(e,t){var n=ee,r=rt(),o=t(),i=!ht(r.memoizedState,o);if(i&&(r.memoizedState=o,Pe=!0),r=r.queue,kc(Xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,go(9,Yf.bind(null,n,r,o,t),void 0,null),pe===null)throw Error(E(349));Pn&30||Gf(n,t,o)}return o}function Gf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yf(e,t,n,r){t.value=n,t.getSnapshot=r,Jf(t)&&Qf(e)}function Xf(e,t,n){return n(function(){Jf(t)&&Qf(e)})}function Jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Qf(e){var t=Ot(e,1);t!==null&&mt(t,e,1,-1)}function Ju(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=S_.bind(null,ee,e),[t.memoizedState,e]}function go(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zf(){return rt().memoizedState}function di(e,t,n,r){var o=_t();ee.flags|=e,o.memoizedState=go(1|t,n,void 0,r===void 0?null:r)}function vs(e,t,n,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(le!==null){var s=le.memoizedState;if(i=s.destroy,r!==null&&Sc(r,s.deps)){o.memoizedState=go(t,n,i,r);return}}ee.flags|=e,o.memoizedState=go(1|t,n,i,r)}function Qu(e,t){return di(8390656,8,e,t)}function kc(e,t){return vs(2048,8,e,t)}function eh(e,t){return vs(4,2,e,t)}function th(e,t){return vs(4,4,e,t)}function nh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rh(e,t,n){return n=n!=null?n.concat([e]):null,vs(4,4,nh.bind(null,t,e),n)}function jc(){}function oh(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ih(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sh(e,t,n){return Pn&21?(ht(n,t)||(n=df(),ee.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function b_(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=ca.transition;ca.transition={};try{e(!1),t()}finally{q=n,ca.transition=r}}function ah(){return rt().memoizedState}function x_(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lh(e))ch(t,n);else if(n=Wf(e,t,n,r),n!==null){var o=je();mt(n,e,r,o),uh(n,t,r)}}function S_(e,t,n){var r=rn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lh(e))ch(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,ht(a,s)){var c=t.interleaved;c===null?(o.next=o,_c(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Wf(e,t,o,r),n!==null&&(o=je(),mt(n,e,r,o),uh(n,t,r))}}function lh(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function ch(e,t){Xr=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}var zi={readContext:nt,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},A_={readContext:nt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Qu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,di(4194308,4,nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return di(4194308,4,e,t)},useInsertionEffect:function(e,t){return di(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=x_.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:Ju,useDebugValue:jc,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=Ju(!1),t=e[0];return e=b_.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=_t();if(Q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),pe===null)throw Error(E(349));Pn&30||Gf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Qu(Xf.bind(null,r,i,e),[e]),r.flags|=2048,go(9,Yf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=_t(),t=pe.identifierPrefix;if(Q){var n=Lt,r=Nt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=po++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=w_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C_={readContext:nt,useCallback:oh,useContext:nt,useEffect:kc,useImperativeHandle:rh,useInsertionEffect:eh,useLayoutEffect:th,useMemo:ih,useReducer:ua,useRef:Zf,useState:function(){return ua(vo)},useDebugValue:jc,useDeferredValue:function(e){var t=rt();return sh(t,le.memoizedState,e)},useTransition:function(){var e=ua(vo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Kf,useId:ah,unstable_isNewReconciler:!1},k_={readContext:nt,useCallback:oh,useContext:nt,useEffect:kc,useImperativeHandle:rh,useInsertionEffect:eh,useLayoutEffect:th,useMemo:ih,useReducer:da,useRef:Zf,useState:function(){return da(vo)},useDebugValue:jc,useDeferredValue:function(e){var t=rt();return le===null?t.memoizedState=e:sh(t,le.memoizedState,e)},useTransition:function(){var e=da(vo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Kf,useId:ah,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function sl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gs={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),o=rn(e),i=It(r,o);i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(mt(t,e,o,r),ci(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),o=rn(e),i=It(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(mt(t,e,o,r),ci(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=rn(e),o=It(n,r);o.tag=2,t!=null&&(o.callback=t),t=tn(e,o,r),t!==null&&(mt(t,e,r,n),ci(t,e,r))}};function Zu(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!lo(n,r)||!lo(o,i):!0}function dh(e,t,n){var r=!1,o=ln,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(o=Oe(t)?Ln:Ae.current,r=t.contextTypes,i=(r=r!=null)?cr(e,o):ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gs.enqueueReplaceState(t,t.state,null)}function al(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},yc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nt(i):(i=Oe(t)?Ln:Ae.current,o.context=cr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(sl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&gs.enqueueReplaceState(o,o.state,null),Fi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",r=t;do n+=eg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ma(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ll(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var j_=typeof WeakMap=="function"?WeakMap:Map;function mh(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wi||(Wi=!0,_l=r),ll(e,t)},n}function fh(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ll(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ll(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new j_;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=z_.bind(null,e,t,n),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var E_=Ft.ReactCurrentOwner,Pe=!1;function ke(e,t,n,r){t.child=e===null?qf(t,null,n,r):dr(t,e.child,n,r)}function od(e,t,n,r,o){n=n.render;var i=t.ref;return sr(t,o),r=Ac(e,t,n,r,i,o),n=Cc(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Q&&n&&mc(t),t.flags|=1,ke(e,t,r,o),t.child)}function id(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Bc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hh(e,t,i,r,o)):(e=pi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(s,r)&&e.ref===t.ref)return Bt(e,t,o)}return t.flags|=1,e=on(i,r),e.ref=t.ref,e.return=t,t.child=e}function hh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(lo(i,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,Bt(e,t,o)}return cl(e,t,n,r,o)}function ph(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(er,qe),qe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(er,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(er,qe),qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(er,qe),qe|=r;return ke(e,t,o,n),t.child}function vh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cl(e,t,n,r,o){var i=Oe(n)?Ln:Ae.current;return i=cr(t,i),sr(t,o),n=Ac(e,t,n,r,i,o),r=Cc(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Q&&r&&mc(t),t.flags|=1,ke(e,t,n,o),t.child)}function sd(e,t,n,r,o){if(Oe(n)){var i=!0;Ri(t)}else i=!1;if(sr(t,o),t.stateNode===null)mi(e,t),dh(t,n,r),al(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Oe(n)?Ln:Ae.current,u=cr(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&ed(t,s,r,u),$t=!1;var v=t.memoizedState;s.state=v,Fi(t,r,s,o),c=t.memoizedState,a!==r||v!==c||Re.current||$t?(typeof d=="function"&&(sl(t,n,d,r),c=t.memoizedState),(a=$t||Zu(t,n,a,r,v,c,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Vf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:at(t.type,a),s.props=u,m=t.pendingProps,v=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=nt(c):(c=Oe(n)?Ln:Ae.current,c=cr(t,c));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||v!==c)&&ed(t,s,r,c),$t=!1,v=t.memoizedState,s.state=v,Fi(t,r,s,o);var g=t.memoizedState;a!==m||v!==g||Re.current||$t?(typeof _=="function"&&(sl(t,n,_,r),g=t.memoizedState),(u=$t||Zu(t,n,u,r,v,g,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return ul(e,t,n,r,i,o)}function ul(e,t,n,r,o,i){vh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&$u(t,n,!1),Bt(e,t,i);r=t.stateNode,E_.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=dr(t,e.child,null,i),t.child=dr(t,null,a,i)):ke(e,t,a,i),t.memoizedState=r.state,o&&$u(t,n,!0),t.child}function gh(e){var t=e.stateNode;t.pendingContext?Vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vu(e,t.context,!1),wc(e,t.containerInfo)}function ad(e,t,n,r,o){return ur(),hc(o),t.flags|=256,ke(e,t,n,r),t.child}var dl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function _h(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(Z,o&1),e===null)return ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=ws(s,r,0,null),e=kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ml(n),t.memoizedState=dl,e):Ec(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return N_(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=on(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=on(a,i):(i=kn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?ml(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=dl,r}return i=e.child,e=i.sibling,r=on(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ec(e,t){return t=ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jo(e,t,n,r){return r!==null&&hc(r),dr(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function N_(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=ma(Error(E(422))),Jo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ws({mode:"visible",children:r.children},o,0,null),i=kn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dr(t,e.child,null,s),t.child.memoizedState=ml(s),t.memoizedState=dl,i);if(!(t.mode&1))return Jo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=ma(i,r,void 0),Jo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Pe||a){if(r=pe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ot(e,o),mt(r,e,o,-1))}return Oc(),r=ma(Error(E(421))),Jo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=q_.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=en(o.nextSibling),$e=t,Q=!0,ct=null,e!==null&&(Qe[Ze++]=Nt,Qe[Ze++]=Lt,Qe[Ze++]=In,Nt=e.id,Lt=e.overflow,In=t),t=Ec(t,r.children),t.flags|=4096,t)}function ld(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),il(e.return,t,n)}function fa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function yh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,n,t);else if(e.tag===19)ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Di(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Di(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fa(t,!0,n,null,i);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function L_(e,t,n){switch(t.tag){case 3:gh(t),ur();break;case 5:$f(t);break;case 1:Oe(t.type)&&Ri(t);break;case 4:wc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(Ti,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?_h(e,t,n):(K(Z,Z.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);K(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,ph(e,t,n)}return Bt(e,t,n)}var wh,fl,bh,xh;wh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fl=function(){};bh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,xn(xt.current);var i=null;switch(n){case"input":o=Ba(e,o),r=Ba(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=Fa(e,o),r=Fa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ii)}Ua(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(to.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(to.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&G("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};xh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function I_(e,t,n){var r=t.pendingProps;switch(fc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Oe(t.type)&&Pi(),be(t),null;case 3:return r=t.stateNode,mr(),X(Re),X(Ae),xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(bl(ct),ct=null))),fl(e,t),be(t),null;case 5:bc(t);var o=xn(ho.current);if(n=t.type,e!==null&&t.stateNode!=null)bh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return be(t),null}if(e=xn(xt.current),Yo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[wt]=t,r[mo]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<qr.length;o++)G(qr[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":gu(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":yu(r,i),G("invalid",r)}Ua(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Go(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Go(r.textContent,a,e),o=["children",""+a]):to.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":Uo(r),_u(r,i,!0);break;case"textarea":Uo(r),wu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ii)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ym(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[wt]=t,e[mo]=r,wh(e,t,!1,!1),t.stateNode=e;e:{switch(s=za(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<qr.length;o++)G(qr[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":gu(e,r),o=Ba(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),G("invalid",e);break;case"textarea":yu(e,r),o=Fa(e,r),G("invalid",e);break;default:o=r}Ua(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Qm(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Xm(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&no(e,c):typeof c=="number"&&no(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(to.hasOwnProperty(i)?c!=null&&i==="onScroll"&&G("scroll",e):c!=null&&Ql(e,i,c,s))}switch(n){case"input":Uo(e),_u(e,r,!1);break;case"textarea":Uo(e),wu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?nr(e,!!r.multiple,i,!1):r.defaultValue!=null&&nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ii)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)xh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=xn(ho.current),xn(xt.current),Yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Go(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return be(t),null;case 13:if(X(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&We!==null&&t.mode&1&&!(t.flags&128))Uf(),ur(),t.flags|=98560,i=!1;else if(i=Yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[wt]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),i=!1}else ct!==null&&(bl(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ce===0&&(ce=3):Oc())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return mr(),fl(e,t),e===null&&co(t.stateNode.containerInfo),be(t),null;case 10:return gc(t.type._context),be(t),null;case 17:return Oe(t.type)&&Pi(),be(t),null;case 19:if(X(Z),i=t.memoizedState,i===null)return be(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Tr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Di(e),s!==null){for(t.flags|=128,Tr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&oe()>hr&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Di(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Q)return be(t),null}else 2*oe()-i.renderingStartTime>hr&&n!==1073741824&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,n=Z.current,K(Z,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return Rc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function P_(e,t){switch(fc(t),t.tag){case 1:return Oe(t.type)&&Pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),X(Re),X(Ae),xc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bc(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return mr(),null;case 10:return gc(t.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var Qo=!1,xe=!1,R_=typeof WeakSet=="function"?WeakSet:Set,P=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function hl(e,t,n){try{n()}catch(r){ne(e,t,r)}}var cd=!1;function O_(e,t){if(Ja=Ei,e=jf(),dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,m=e,v=null;t:for(;;){for(var _;m!==n||o!==0&&m.nodeType!==3||(a=s+o),m!==i||r!==0&&m.nodeType!==3||(c=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(_=m.firstChild)!==null;)v=m,m=_;for(;;){if(m===e)break t;if(v===n&&++u===o&&(a=s),v===i&&++d===r&&(c=s),(_=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=_}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qa={focusedElem:e,selectionRange:n},Ei=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,w=g.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:at(t.type,y),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(b){ne(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=cd,cd=!1,g}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&hl(t,n,i)}o=o.next}while(o!==r)}}function _s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sh(e){var t=e.alternate;t!==null&&(e.alternate=null,Sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[mo],delete t[tl],delete t[v_],delete t[g_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ah(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ii));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}var ge=null,lt=!1;function zt(e,t,n){for(n=n.child;n!==null;)Ch(e,t,n),n=n.sibling}function Ch(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(us,n)}catch{}switch(n.tag){case 5:xe||Zn(n,t);case 6:var r=ge,o=lt;ge=null,zt(e,t,n),ge=r,lt=o,ge!==null&&(lt?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(lt?(e=ge,n=n.stateNode,e.nodeType===8?sa(e.parentNode,n):e.nodeType===1&&sa(e,n),so(e)):sa(ge,n.stateNode));break;case 4:r=ge,o=lt,ge=n.stateNode.containerInfo,lt=!0,zt(e,t,n),ge=r,lt=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&hl(n,t,s),o=o.next}while(o!==r)}zt(e,t,n);break;case 1:if(!xe&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,zt(e,t,n),xe=r):zt(e,t,n);break;default:zt(e,t,n)}}function dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new R_),t.forEach(function(r){var o=W_.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ge=a.stateNode,lt=!1;break e;case 3:ge=a.stateNode.containerInfo,lt=!0;break e;case 4:ge=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(ge===null)throw Error(E(160));Ch(i,s,o),ge=null,lt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ne(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kh(t,e),t=t.sibling}function kh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),gt(e),r&4){try{Jr(3,e,e.return),_s(3,e)}catch(y){ne(e,e.return,y)}try{Jr(5,e,e.return)}catch(y){ne(e,e.return,y)}}break;case 1:st(t,e),gt(e),r&512&&n!==null&&Zn(n,n.return);break;case 5:if(st(t,e),gt(e),r&512&&n!==null&&Zn(n,n.return),e.flags&32){var o=e.stateNode;try{no(o,"")}catch(y){ne(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Km(o,i),za(a,s);var u=za(a,i);for(s=0;s<c.length;s+=2){var d=c[s],m=c[s+1];d==="style"?Qm(o,m):d==="dangerouslySetInnerHTML"?Xm(o,m):d==="children"?no(o,m):Ql(o,d,m,u)}switch(a){case"input":Ta(o,i);break;case"textarea":Gm(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?nr(o,!!i.multiple,_,!1):v!==!!i.multiple&&(i.defaultValue!=null?nr(o,!!i.multiple,i.defaultValue,!0):nr(o,!!i.multiple,i.multiple?[]:"",!1))}o[mo]=i}catch(y){ne(e,e.return,y)}}break;case 6:if(st(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ne(e,e.return,y)}}break;case 3:if(st(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(y){ne(e,e.return,y)}break;case 4:st(t,e),gt(e);break;case 13:st(t,e),gt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ic=oe())),r&4&&dd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,st(t,e),xe=u):st(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(m=P=d;P!==null;){switch(v=P,_=v.child,v.tag){case 0:case 11:case 14:case 15:Jr(4,v,v.return);break;case 1:Zn(v,v.return);var g=v.stateNode;if(typeof g.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:Zn(v,v.return);break;case 22:if(v.memoizedState!==null){fd(m);continue}}_!==null?(_.return=v,P=_):fd(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,c=m.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Jm("display",s))}catch(y){ne(e,e.return,y)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(y){ne(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:st(t,e),gt(e),r&4&&dd(e);break;case 21:break;default:st(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ah(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(no(o,""),r.flags&=-33);var i=ud(e);gl(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ud(e);vl(e,a,s);break;default:throw Error(E(161))}}catch(c){ne(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function B_(e,t,n){P=e,jh(e)}function jh(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Qo;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||xe;a=Qo;var u=xe;if(Qo=s,(xe=c)&&!u)for(P=o;P!==null;)s=P,c=s.child,s.tag===22&&s.memoizedState!==null?hd(o):c!==null?(c.return=s,P=c):hd(o);for(;i!==null;)P=i,jh(i),i=i.sibling;P=o,Qo=a,xe=u}md(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):md(e)}}function md(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||_s(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xu(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&so(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}xe||t.flags&512&&pl(t)}catch(v){ne(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function fd(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function hd(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_s(4,t)}catch(c){ne(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ne(t,o,c)}}var i=t.return;try{pl(t)}catch(c){ne(t,i,c)}break;case 5:var s=t.return;try{pl(t)}catch(c){ne(t,s,c)}}}catch(c){ne(t,t.return,c)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var T_=Math.ceil,qi=Ft.ReactCurrentDispatcher,Nc=Ft.ReactCurrentOwner,tt=Ft.ReactCurrentBatchConfig,U=0,pe=null,se=null,_e=0,qe=0,er=dn(0),ce=0,_o=null,Rn=0,ys=0,Lc=0,Qr=null,Le=null,Ic=0,hr=1/0,kt=null,Wi=!1,_l=null,nn=null,Zo=!1,Yt=null,Vi=0,Zr=0,yl=null,fi=-1,hi=0;function je(){return U&6?oe():fi!==-1?fi:fi=oe()}function rn(e){return e.mode&1?U&2&&_e!==0?_e&-_e:y_.transition!==null?(hi===0&&(hi=df()),hi):(e=q,e!==0||(e=window.event,e=e===void 0?16:_f(e.type)),e):1}function mt(e,t,n,r){if(50<Zr)throw Zr=0,yl=null,Error(E(185));Eo(e,n,r),(!(U&2)||e!==pe)&&(e===pe&&(!(U&2)&&(ys|=n),ce===4&&Kt(e,_e)),Be(e,r),n===1&&U===0&&!(t.mode&1)&&(hr=oe()+500,ps&&mn()))}function Be(e,t){var n=e.callbackNode;yg(e,t);var r=ji(e,e===pe?_e:0);if(r===0)n!==null&&Su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Su(n),t===1)e.tag===0?__(pd.bind(null,e)):Mf(pd.bind(null,e)),h_(function(){!(U&6)&&mn()}),n=null;else{switch(mf(r)){case 1:n=rc;break;case 4:n=cf;break;case 16:n=ki;break;case 536870912:n=uf;break;default:n=ki}n=Bh(n,Eh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Eh(e,t){if(fi=-1,hi=0,U&6)throw Error(E(327));var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var r=ji(e,e===pe?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$i(e,r);else{t=r;var o=U;U|=2;var i=Lh();(pe!==e||_e!==t)&&(kt=null,hr=oe()+500,Cn(e,t));do try{D_();break}catch(a){Nh(e,a)}while(!0);vc(),qi.current=i,U=o,se!==null?t=0:(pe=null,_e=0,t=ce)}if(t!==0){if(t===2&&(o=Ha(e),o!==0&&(r=o,t=wl(e,o))),t===1)throw n=_o,Cn(e,0),Kt(e,r),Be(e,oe()),n;if(t===6)Kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!M_(o)&&(t=$i(e,r),t===2&&(i=Ha(e),i!==0&&(r=i,t=wl(e,i))),t===1))throw n=_o,Cn(e,0),Kt(e,r),Be(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:_n(e,Le,kt);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=Ic+500-oe(),10<t)){if(ji(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=el(_n.bind(null,e,Le,kt),t);break}_n(e,Le,kt);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-dt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T_(r/1960))-r,10<r){e.timeoutHandle=el(_n.bind(null,e,Le,kt),r);break}_n(e,Le,kt);break;case 5:_n(e,Le,kt);break;default:throw Error(E(329))}}}return Be(e,oe()),e.callbackNode===n?Eh.bind(null,e):null}function wl(e,t){var n=Qr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=$i(e,t),e!==2&&(t=Le,Le=n,t!==null&&bl(t)),e}function bl(e){Le===null?Le=e:Le.push.apply(Le,e)}function M_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ht(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~Lc,t&=~ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function pd(e){if(U&6)throw Error(E(327));ar();var t=ji(e,0);if(!(t&1))return Be(e,oe()),null;var n=$i(e,t);if(e.tag!==0&&n===2){var r=Ha(e);r!==0&&(t=r,n=wl(e,r))}if(n===1)throw n=_o,Cn(e,0),Kt(e,t),Be(e,oe()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Le,kt),Be(e,oe()),null}function Pc(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(hr=oe()+500,ps&&mn())}}function On(e){Yt!==null&&Yt.tag===0&&!(U&6)&&ar();var t=U;U|=1;var n=tt.transition,r=q;try{if(tt.transition=null,q=1,e)return e()}finally{q=r,tt.transition=n,U=t,!(U&6)&&mn()}}function Rc(){qe=er.current,X(er)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,f_(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pi();break;case 3:mr(),X(Re),X(Ae),xc();break;case 5:bc(r);break;case 4:mr();break;case 13:X(Z);break;case 19:X(Z);break;case 10:gc(r.type._context);break;case 22:case 23:Rc()}n=n.return}if(pe=e,se=e=on(e.current,null),_e=qe=t,ce=0,_o=null,Lc=ys=Rn=0,Le=Qr=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}bn=null}return e}function Nh(e,t){do{var n=se;try{if(vc(),ui.current=zi,Ui){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ui=!1}if(Pn=0,me=le=ee=null,Xr=!1,po=0,Nc.current=null,n===null||n.return===null){ce=1,_o=t,se=null;break}e:{var i=e,s=n.return,a=n,c=t;if(t=_e,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var v=d.alternate;v?(d.updateQueue=v.updateQueue,d.memoizedState=v.memoizedState,d.lanes=v.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=nd(s);if(_!==null){_.flags&=-257,rd(_,s,a,i,t),_.mode&1&&td(i,u,t),t=_,c=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(c),t.updateQueue=y}else g.add(c);break e}else{if(!(t&1)){td(i,u,t),Oc();break e}c=Error(E(426))}}else if(Q&&a.mode&1){var w=nd(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),rd(w,s,a,i,t),hc(fr(c,a));break e}}i=c=fr(c,a),ce!==4&&(ce=2),Qr===null?Qr=[i]:Qr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=mh(i,c,t);Yu(i,p);break e;case 1:a=c;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(nn===null||!nn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=fh(i,a,t);Yu(i,b);break e}}i=i.return}while(i!==null)}Ph(n)}catch(C){t=C,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Lh(){var e=qi.current;return qi.current=zi,e===null?zi:e}function Oc(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(Rn&268435455)&&!(ys&268435455)||Kt(pe,_e)}function $i(e,t){var n=U;U|=2;var r=Lh();(pe!==e||_e!==t)&&(kt=null,Cn(e,t));do try{F_();break}catch(o){Nh(e,o)}while(!0);if(vc(),U=n,qi.current=r,se!==null)throw Error(E(261));return pe=null,_e=0,ce}function F_(){for(;se!==null;)Ih(se)}function D_(){for(;se!==null&&!ug();)Ih(se)}function Ih(e){var t=Oh(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Ph(e):se=t,Nc.current=null}function Ph(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=P_(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=I_(n,t,qe),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function _n(e,t,n){var r=q,o=tt.transition;try{tt.transition=null,q=1,U_(e,t,n,r)}finally{tt.transition=o,q=r}return null}function U_(e,t,n,r){do ar();while(Yt!==null);if(U&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(wg(e,i),e===pe&&(se=pe=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,Bh(ki,function(){return ar(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tt.transition,tt.transition=null;var s=q;q=1;var a=U;U|=4,Nc.current=null,O_(e,n),kh(n,e),s_(Qa),Ei=!!Ja,Qa=Ja=null,e.current=n,B_(n),dg(),U=a,q=s,tt.transition=i}else e.current=n;if(Zo&&(Zo=!1,Yt=e,Vi=o),i=e.pendingLanes,i===0&&(nn=null),hg(n.stateNode),Be(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Wi)throw Wi=!1,e=_l,_l=null,e;return Vi&1&&e.tag!==0&&ar(),i=e.pendingLanes,i&1?e===yl?Zr++:(Zr=0,yl=e):Zr=0,mn(),null}function ar(){if(Yt!==null){var e=mf(Vi),t=tt.transition,n=q;try{if(tt.transition=null,q=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,Vi=0,U&6)throw Error(E(331));var o=U;for(U|=4,P=e.current;P!==null;){var i=P,s=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Jr(8,d,i)}var m=d.child;if(m!==null)m.return=d,P=m;else for(;P!==null;){d=P;var v=d.sibling,_=d.return;if(Sh(d),d===u){P=null;break}if(v!==null){v.return=_,P=v;break}P=_}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,P=s;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Jr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,P=p;break e}P=i.return}}var f=e.current;for(P=f;P!==null;){s=P;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,P=h;else e:for(s=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_s(9,a)}}catch(C){ne(a,a.return,C)}if(a===s){P=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,P=b;break e}P=a.return}}if(U=o,mn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(us,e)}catch{}r=!0}return r}finally{q=n,tt.transition=t}}return!1}function vd(e,t,n){t=fr(n,t),t=mh(e,t,1),e=tn(e,t,1),t=je(),e!==null&&(Eo(e,1,t),Be(e,t))}function ne(e,t,n){if(e.tag===3)vd(e,e,n);else for(;t!==null;){if(t.tag===3){vd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=fr(n,e),e=fh(t,e,1),t=tn(t,e,1),e=je(),t!==null&&(Eo(t,1,e),Be(t,e));break}}t=t.return}}function z_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(_e&n)===n&&(ce===4||ce===3&&(_e&130023424)===_e&&500>oe()-Ic?Cn(e,0):Lc|=n),Be(e,t)}function Rh(e,t){t===0&&(e.mode&1?(t=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):t=1);var n=je();e=Ot(e,t),e!==null&&(Eo(e,t,n),Be(e,n))}function q_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rh(e,n)}function W_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Rh(e,n)}var Oh;Oh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,L_(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,Q&&t.flags&1048576&&Ff(t,Bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mi(e,t),e=t.pendingProps;var o=cr(t,Ae.current);sr(t,n),o=Ac(null,t,r,e,o,n);var i=Cc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(i=!0,Ri(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,yc(t),o.updater=gs,t.stateNode=o,o._reactInternals=t,al(t,r,e,n),t=ul(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&mc(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=$_(r),e=at(r,e),o){case 0:t=cl(null,t,r,e,n);break e;case 1:t=sd(null,t,r,e,n);break e;case 11:t=od(null,t,r,e,n);break e;case 14:t=id(null,t,r,at(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),cl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),sd(e,t,r,o,n);case 3:e:{if(gh(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Vf(e,t),Fi(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=fr(Error(E(423)),t),t=ad(e,t,r,n,o);break e}else if(r!==o){o=fr(Error(E(424)),t),t=ad(e,t,r,n,o);break e}else for(We=en(t.stateNode.containerInfo.firstChild),$e=t,Q=!0,ct=null,n=qf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===o){t=Bt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return $f(t),e===null&&ol(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Za(r,o)?s=null:i!==null&&Za(r,i)&&(t.flags|=32),vh(e,t),ke(e,t,s,n),t.child;case 6:return e===null&&ol(t),null;case 13:return _h(e,t,n);case 4:return wc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),od(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,K(Ti,r._currentValue),r._currentValue=s,i!==null)if(ht(i.value,s)){if(i.children===o.children&&!Re.current){t=Bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=It(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),il(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),il(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sr(t,n),o=nt(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=at(r,t.pendingProps),o=at(r.type,o),id(e,t,r,o,n);case 15:return hh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),mi(e,t),t.tag=1,Oe(r)?(e=!0,Ri(t)):e=!1,sr(t,n),dh(t,r,o),al(t,r,o,n),ul(null,t,r,!0,e,n);case 19:return yh(e,t,n);case 22:return ph(e,t,n)}throw Error(E(156,t.tag))};function Bh(e,t){return lf(e,t)}function V_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new V_(e,t,n,r)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $_(e){if(typeof e=="function")return Bc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ec)return 11;if(e===tc)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function pi(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Bc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Vn:return kn(n.children,o,i,t);case Zl:s=8,o|=8;break;case Ia:return e=et(12,n,t,o|2),e.elementType=Ia,e.lanes=i,e;case Pa:return e=et(13,n,t,o),e.elementType=Pa,e.lanes=i,e;case Ra:return e=et(19,n,t,o),e.elementType=Ra,e.lanes=i,e;case Vm:return ws(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qm:s=10;break e;case Wm:s=9;break e;case ec:s=11;break e;case tc:s=14;break e;case Vt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=et(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function kn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function ws(e,t,n,r){return e=et(22,e,r,t),e.elementType=Vm,e.lanes=n,e.stateNode={isHidden:!1},e}function ha(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function pa(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H_(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ys(0),this.expirationTimes=Ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Tc(e,t,n,r,o,i,s,a,c){return e=new H_(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(i),e}function K_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Th(e){if(!e)return ln;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Oe(n))return Tf(e,n,t)}return t}function Mh(e,t,n,r,o,i,s,a,c){return e=Tc(n,r,!0,e,o,i,s,a,c),e.context=Th(null),n=e.current,r=je(),o=rn(n),i=It(r,o),i.callback=t??null,tn(n,i,o),e.current.lanes=o,Eo(e,o,r),Be(e,r),e}function bs(e,t,n,r){var o=t.current,i=je(),s=rn(o);return n=Th(n),t.context===null?t.context=n:t.pendingContext=n,t=It(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(o,t,s),e!==null&&(mt(e,o,s,i),ci(e,o,s)),s}function Hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mc(e,t){gd(e,t),(e=e.alternate)&&gd(e,t)}function G_(){return null}var Fh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fc(e){this._internalRoot=e}xs.prototype.render=Fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));bs(e,t,null,null)};xs.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){bs(null,e,null,null)}),t[Rt]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=pf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&gf(e)}};function Dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function Y_(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Hi(s);i.call(u)}}var s=Mh(t,r,e,0,null,!1,!1,"",_d);return e._reactRootContainer=s,e[Rt]=s.current,co(e.nodeType===8?e.parentNode:e),On(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Hi(c);a.call(u)}}var c=Tc(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=c,e[Rt]=c.current,co(e.nodeType===8?e.parentNode:e),On(function(){bs(t,c,n,r)}),c}function As(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var c=Hi(s);a.call(c)}}bs(t,s,e,o)}else s=Y_(n,t,e,o,r);return Hi(s)}ff=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(oc(t,n|1),Be(t,oe()),!(U&6)&&(hr=oe()+500,mn()))}break;case 13:On(function(){var r=Ot(e,1);if(r!==null){var o=je();mt(r,e,1,o)}}),Mc(e,1)}};ic=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=je();mt(t,e,134217728,n)}Mc(e,134217728)}};hf=function(e){if(e.tag===13){var t=rn(e),n=Ot(e,t);if(n!==null){var r=je();mt(n,e,t,r)}Mc(e,t)}};pf=function(){return q};vf=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Wa=function(e,t,n){switch(t){case"input":if(Ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=hs(r);if(!o)throw Error(E(90));Hm(r),Ta(r,o)}}}break;case"textarea":Gm(e,n);break;case"select":t=n.value,t!=null&&nr(e,!!n.multiple,t,!1)}};tf=Pc;nf=On;var X_={usingClientEntryPoint:!1,Events:[Lo,Gn,hs,Zm,ef,Pc]},Mr={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J_={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sf(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||G_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{us=ei.inject(J_),bt=ei}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X_;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(t))throw Error(E(200));return K_(e,t,null,n)};Xe.createRoot=function(e,t){if(!Dc(e))throw Error(E(299));var n=!1,r="",o=Fh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Tc(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,co(e.nodeType===8?e.parentNode:e),new Fc(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=sf(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return On(e)};Xe.hydrate=function(e,t,n){if(!Ss(t))throw Error(E(200));return As(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!Dc(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Fh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Mh(t,null,e,1,n??null,o,!1,i,s),e[Rt]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new xs(t)};Xe.render=function(e,t,n){if(!Ss(t))throw Error(E(200));return As(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!Ss(e))throw Error(E(40));return e._reactRootContainer?(On(function(){As(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Pc;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ss(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return As(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Dh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dh)}catch(e){console.error(e)}}Dh(),Fm.exports=Xe;var Q_=Fm.exports,Uh,yd=Q_;Uh=yd.createRoot,yd.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));const wd="popstate";function Z_(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:c=""}=Un(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),xl("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let c=o.location.href,u=c.indexOf("#");a=u===-1?c:c.slice(0,u)}return a+"#"+(typeof i=="string"?i:zh(i))}function r(o,i){Uc(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return t0(t,n,r,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Uc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function e0(){return Math.random().toString(36).substr(2,8)}function bd(e,t){return{usr:e.state,key:e.key,idx:t}}function xl(e,t,n,r){return n===void 0&&(n=null),yo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Un(t):t,{state:n,key:t&&t.key||r||e0()})}function zh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function t0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Xt.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(yo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function m(){a=Xt.Pop;let w=d(),p=w==null?null:w-u;u=w,c&&c({action:a,location:y.location,delta:p})}function v(w,p){a=Xt.Push;let f=xl(y.location,w,p);n&&n(f,w),u=d()+1;let h=bd(f,u),b=y.createHref(f);try{s.pushState(h,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(b)}i&&c&&c({action:a,location:y.location,delta:1})}function _(w,p){a=Xt.Replace;let f=xl(y.location,w,p);n&&n(f,w),u=d();let h=bd(f,u),b=y.createHref(f);s.replaceState(h,"",b),i&&c&&c({action:a,location:y.location,delta:0})}function g(w){let p=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof w=="string"?w:zh(w);return f=f.replace(/ $/,"%20"),de(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return a},get location(){return e(o,s)},listen(w){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(wd,m),c=w,()=>{o.removeEventListener(wd,m),c=null}},createHref(w){return t(o,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:v,replace:_,go(w){return s.go(w)}};return y}var xd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xd||(xd={}));function n0(e,t,n){return n===void 0&&(n="/"),r0(e,t,n,!1)}function r0(e,t,n,r){let o=typeof t=="string"?Un(t):t,i=Vh(o.pathname||"/",n);if(i==null)return null;let s=qh(e);o0(s);let a=null;for(let c=0;a==null&&c<s.length;++c){let u=p0(i);a=f0(s[c],u,r)}return a}function qh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(de(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=jn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(de(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qh(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:d0(u,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let c of Wh(i.path))o(i,s,c)}),t}function Wh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Wh(r.join("/")),a=[];return a.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function o0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:m0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const i0=/^:[\w-]+$/,s0=3,a0=2,l0=1,c0=10,u0=-2,Sd=e=>e==="*";function d0(e,t){let n=e.split("/"),r=n.length;return n.some(Sd)&&(r+=u0),t&&(r+=a0),n.filter(o=>!Sd(o)).reduce((o,i)=>o+(i0.test(i)?s0:i===""?l0:c0),r)}function m0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function f0(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",m=Ad({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),v=c.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=Ad({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!m)return null;Object.assign(o,m.params),s.push({params:o,pathname:jn([i,m.pathname]),pathnameBase:b0(jn([i,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(i=jn([i,m.pathnameBase]))}return s}function Ad(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=h0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,m)=>{let{paramName:v,isOptional:_}=d;if(v==="*"){let y=a[m]||"";s=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const g=a[m];return _&&!g?u[v]=void 0:u[v]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function h0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Uc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function p0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Uc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function v0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Un(e):e;return{pathname:n?n.startsWith("/")?n:g0(n,t):t,search:x0(r),hash:S0(o)}}function g0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function va(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function y0(e,t){let n=_0(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function w0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Un(e):(o=yo({},e),de(!o.pathname||!o.pathname.includes("?"),va("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),va("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),va("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let m=t.length-1;if(!r&&s.startsWith("..")){let v=s.split("/");for(;v[0]==="..";)v.shift(),m-=1;o.pathname=v.join("/")}a=m>=0?t[m]:"/"}let c=v0(o,a),u=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),b0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),x0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,S0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function A0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $h=["post","put","patch","delete"];new Set($h);const C0=["get",...$h];new Set(C0);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}const zc=A.createContext(null),k0=A.createContext(null),Cs=A.createContext(null),ks=A.createContext(null),fn=A.createContext({outlet:null,matches:[],isDataRoute:!1}),Hh=A.createContext(null);function js(){return A.useContext(ks)!=null}function Po(){return js()||de(!1),A.useContext(ks).location}function Kh(e){A.useContext(Cs).static||A.useLayoutEffect(e)}function W(){let{isDataRoute:e}=A.useContext(fn);return e?z0():j0()}function j0(){js()||de(!1);let e=A.useContext(zc),{basename:t,future:n,navigator:r}=A.useContext(Cs),{matches:o}=A.useContext(fn),{pathname:i}=Po(),s=JSON.stringify(y0(o,n.v7_relativeSplatPath)),a=A.useRef(!1);return Kh(()=>{a.current=!0}),A.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let m=w0(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:jn([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,s,i,e])}const E0=A.createContext(null);function N0(e){let t=A.useContext(fn).outlet;return t&&A.createElement(E0.Provider,{value:e},t)}function At(){let{matches:e}=A.useContext(fn),t=e[e.length-1];return t?t.params:{}}function L0(e,t){return I0(e,t)}function I0(e,t,n,r){js()||de(!1);let{navigator:o}=A.useContext(Cs),{matches:i}=A.useContext(fn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Po(),d;if(t){var m;let w=typeof t=="string"?Un(t):t;c==="/"||(m=w.pathname)!=null&&m.startsWith(c)||de(!1),d=w}else d=u;let v=d.pathname||"/",_=v;if(c!=="/"){let w=c.replace(/^\//,"").split("/");_="/"+v.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=n0(e,{pathname:_}),y=T0(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:jn([c,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:jn([c,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&y?A.createElement(ks.Provider,{value:{location:wo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xt.Pop}},y):y}function P0(){let e=U0(),t=A0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),n?A.createElement("pre",{style:o},n):null,null)}const R0=A.createElement(P0,null);class O0 extends A.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?A.createElement(fn.Provider,{value:this.props.routeContext},A.createElement(Hh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function B0(e){let{routeContext:t,match:n,children:r}=e,o=A.useContext(zc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(fn.Provider,{value:t},r)}function T0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);d>=0||de(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let m=s[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:v,errors:_}=n,g=m.route.loader&&v[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||g){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,m,v)=>{let _,g=!1,y=null,w=null;n&&(_=a&&m.route.id?a[m.route.id]:void 0,y=m.route.errorElement||R0,c&&(u<0&&v===0?(g=!0,w=null):u===v&&(g=!0,w=m.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,v+1)),f=()=>{let h;return _?h=y:g?h=w:m.route.Component?h=A.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=d,A.createElement(B0,{match:m,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:h})};return n&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?A.createElement(O0,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Gh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gh||{}),Ki=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ki||{});function M0(e){let t=A.useContext(zc);return t||de(!1),t}function F0(e){let t=A.useContext(k0);return t||de(!1),t}function D0(e){let t=A.useContext(fn);return t||de(!1),t}function Yh(e){let t=D0(),n=t.matches[t.matches.length-1];return n.route.id||de(!1),n.route.id}function U0(){var e;let t=A.useContext(Hh),n=F0(Ki.UseRouteError),r=Yh(Ki.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function z0(){let{router:e}=M0(Gh.UseNavigateStable),t=Yh(Ki.UseNavigateStable),n=A.useRef(!1);return Kh(()=>{n.current=!0}),A.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,wo({fromRouteId:t},i)))},[e,t])}function Xh(e){return N0(e.context)}function J(e){de(!1)}function q0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Xt.Pop,navigator:i,static:s=!1,future:a}=e;js()&&de(!1);let c=t.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:c,navigator:i,static:s,future:wo({v7_relativeSplatPath:!1},a)}),[c,a,i,s]);typeof r=="string"&&(r=Un(r));let{pathname:d="/",search:m="",hash:v="",state:_=null,key:g="default"}=r,y=A.useMemo(()=>{let w=Vh(d,c);return w==null?null:{location:{pathname:w,search:m,hash:v,state:_,key:g},navigationType:o}},[c,d,m,v,_,g,o]);return y==null?null:A.createElement(Cs.Provider,{value:u},A.createElement(ks.Provider,{children:n,value:y}))}function W0(e){let{children:t,location:n}=e;return L0(Sl(t),n)}new Promise(()=>{});function Sl(e,t){t===void 0&&(t=[]);let n=[];return A.Children.forEach(e,(r,o)=>{if(!A.isValidElement(r))return;let i=[...t,o];if(r.type===A.Fragment){n.push.apply(n,Sl(r.props.children,i));return}r.type!==J&&de(!1),!r.props.index||!r.props.children||de(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Sl(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const V0="6";try{window.__reactRouterVersion=V0}catch{}const $0="startTransition",Cd=Na[$0];function H0(e){let{basename:t,children:n,future:r,window:o}=e,i=A.useRef();i.current==null&&(i.current=Z_({window:o,v5Compat:!0}));let s=i.current,[a,c]=A.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=A.useCallback(m=>{u&&Cd?Cd(()=>c(m)):c(m)},[c,u]);return A.useLayoutEffect(()=>s.listen(d),[s,d]),A.createElement(q0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var kd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kd||(kd={}));var jd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jd||(jd={}));var Se=function(){return Se=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Se.apply(this,arguments)};function bo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Y="-ms-",eo="-moz-",z="-webkit-",Jh="comm",Es="rule",qc="decl",K0="@import",Qh="@keyframes",G0="@layer",Zh=Math.abs,Wc=String.fromCharCode,Al=Object.assign;function Y0(e,t){return fe(e,0)^45?(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function ep(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function vi(e,t,n){return e.indexOf(t,n)}function fe(e,t){return e.charCodeAt(t)|0}function pr(e,t,n){return e.slice(t,n)}function yt(e){return e.length}function tp(e){return e.length}function Wr(e,t){return t.push(e),e}function X0(e,t){return e.map(t).join("")}function Ed(e,t){return e.filter(function(n){return!jt(n,t)})}var Ns=1,vr=1,np=0,ot=0,ie=0,Ar="";function Ls(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ns,column:vr,length:s,return:"",siblings:a}}function Wt(e,t){return Al(Ls("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=Wt(e.root,{children:[e]});Wr(e,e.siblings)}function J0(){return ie}function Q0(){return ie=ot>0?fe(Ar,--ot):0,vr--,ie===10&&(vr=1,Ns--),ie}function ft(){return ie=ot<np?fe(Ar,ot++):0,vr++,ie===10&&(vr=1,Ns++),ie}function En(){return fe(Ar,ot)}function gi(){return ot}function Is(e,t){return pr(Ar,e,t)}function Cl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z0(e){return Ns=vr=1,np=yt(Ar=e),ot=0,[]}function ey(e){return Ar="",e}function ga(e){return ep(Is(ot-1,kl(e===91?e+2:e===40?e+1:e)))}function ty(e){for(;(ie=En())&&ie<33;)ft();return Cl(e)>2||Cl(ie)>3?"":" "}function ny(e,t){for(;--t&&ft()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return Is(e,gi()+(t<6&&En()==32&&ft()==32))}function kl(e){for(;ft();)switch(ie){case e:return ot;case 34:case 39:e!==34&&e!==39&&kl(ie);break;case 40:e===41&&kl(e);break;case 92:ft();break}return ot}function ry(e,t){for(;ft()&&e+ie!==57;)if(e+ie===84&&En()===47)break;return"/*"+Is(t,ot-1)+"*"+Wc(e===47?e:ft())}function oy(e){for(;!Cl(En());)ft();return Is(e,ot)}function iy(e){return ey(_i("",null,null,null,[""],e=Z0(e),0,[0],e))}function _i(e,t,n,r,o,i,s,a,c){for(var u=0,d=0,m=s,v=0,_=0,g=0,y=1,w=1,p=1,f=0,h="",b=o,C=i,k=r,x=h;w;)switch(g=f,f=ft()){case 40:if(g!=108&&fe(x,m-1)==58){vi(x+=F(ga(f),"&","&\f"),"&\f",Zh(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:x+=ga(f);break;case 9:case 10:case 13:case 32:x+=ty(g);break;case 92:x+=ny(gi()-1,7);continue;case 47:switch(En()){case 42:case 47:Wr(sy(ry(ft(),gi()),t,n,c),c);break;default:x+="/"}break;case 123*y:a[u++]=yt(x)*p;case 125*y:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+d:p==-1&&(x=F(x,/\f/g,"")),_>0&&yt(x)-m&&Wr(_>32?Ld(x+";",r,n,m-1,c):Ld(F(x," ","")+";",r,n,m-2,c),c);break;case 59:x+=";";default:if(Wr(k=Nd(x,t,n,u,d,o,a,h,b=[],C=[],m,i),i),f===123)if(d===0)_i(x,t,k,k,b,i,m,a,C);else switch(v===99&&fe(x,3)===110?100:v){case 100:case 108:case 109:case 115:_i(e,k,k,r&&Wr(Nd(e,k,k,0,0,o,a,h,o,b=[],m,C),C),o,C,m,a,r?b:C);break;default:_i(x,k,k,k,[""],C,0,a,C)}}u=d=_=0,y=p=1,h=x="",m=s;break;case 58:m=1+yt(x),_=g;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Q0()==125)continue}switch(x+=Wc(f),f*y){case 38:p=d>0?1:(x+="\f",-1);break;case 44:a[u++]=(yt(x)-1)*p,p=1;break;case 64:En()===45&&(x+=ga(ft())),v=En(),d=m=yt(h=x+=oy(gi())),f++;break;case 45:g===45&&yt(x)==2&&(y=0)}}return i}function Nd(e,t,n,r,o,i,s,a,c,u,d,m){for(var v=o-1,_=o===0?i:[""],g=tp(_),y=0,w=0,p=0;y<r;++y)for(var f=0,h=pr(e,v+1,v=Zh(w=s[y])),b=e;f<g;++f)(b=ep(w>0?_[f]+" "+h:F(h,/&\f/g,_[f])))&&(c[p++]=b);return Ls(e,t,n,o===0?Es:a,c,u,d,m)}function sy(e,t,n,r){return Ls(e,t,n,Jh,Wc(J0()),pr(e,2,-2),0,r)}function Ld(e,t,n,r,o){return Ls(e,t,n,qc,pr(e,0,r),pr(e,r+1,-1),r,o)}function rp(e,t,n){switch(Y0(e,t)){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 4789:return eo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+eo+e+Y+e+e;case 5936:switch(fe(e,t+11)){case 114:return z+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return z+e+Y+e+e;case 6165:return z+e+Y+"flex-"+e+e;case 5187:return z+e+F(e,/(\w+).+(:[^]+)/,z+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return z+e+Y+"flex-item-"+F(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":Y+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return z+e+Y+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return z+e+Y+F(e,"shrink","negative")+e;case 5292:return z+e+Y+F(e,"basis","preferred-size")+e;case 6060:return z+"box-"+F(e,"-grow","")+z+e+Y+F(e,"grow","positive")+e;case 4554:return z+F(e,/([^-])(transform)/g,"$1"+z+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4200:if(!jt(e,/flex-|baseline/))return Y+"grid-column-align"+pr(e,t)+e;break;case 2592:case 3360:return Y+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,jt(r.props,/grid-\w+-end/)})?~vi(e+(n=n[t].value),"span",0)?e:Y+F(e,"-start","")+e+Y+"grid-row-span:"+(~vi(n,"span",0)?jt(n,/\d+/):+jt(n,/\d+/)-+jt(e,/\d+/))+";":Y+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:Y+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yt(e)-1-t>6)switch(fe(e,t+1)){case 109:if(fe(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+eo+(fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vi(e,"stretch",0)?rp(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,c,u){return Y+o+":"+i+u+(s?Y+o+"-span:"+(a?c:+c-+i)+u:"")+e});case 4949:if(fe(e,t+6)===121)return F(e,":",":"+z)+e;break;case 6444:switch(fe(e,fe(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+z+(fe(e,14)===45?"inline-":"")+"box$3$1"+z+"$2$3$1"+Y+"$2box$3")+e;case 100:return F(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Gi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ay(e,t,n,r){switch(e.type){case G0:if(e.children.length)break;case K0:case qc:return e.return=e.return||e.value;case Jh:return"";case Qh:return e.return=e.value+"{"+Gi(e.children,r)+"}";case Es:if(!yt(e.value=e.props.join(",")))return""}return yt(n=Gi(e.children,r))?e.return=e.value+"{"+n+"}":""}function ly(e){var t=tp(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function cy(e){return function(t){t.root||(t=t.return)&&e(t)}}function uy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case qc:e.return=rp(e.value,e.length,n);return;case Qh:return Gi([Wt(e,{value:F(e.value,"@","@"+z)})],r);case Es:if(e.length)return X0(n=e.props,function(o){switch(jt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(Wt(e,{props:[F(o,/:(read-\w+)/,":"+eo+"$1")]})),qn(Wt(e,{props:[o]})),Al(e,{props:Ed(n,r)});break;case"::placeholder":qn(Wt(e,{props:[F(o,/:(plac\w+)/,":"+z+"input-$1")]})),qn(Wt(e,{props:[F(o,/:(plac\w+)/,":"+eo+"$1")]})),qn(Wt(e,{props:[F(o,/:(plac\w+)/,Y+"input-$1")]})),qn(Wt(e,{props:[o]})),Al(e,{props:Ed(n,r)});break}return""})}}var dy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze={},gr=typeof process<"u"&&ze!==void 0&&(ze.REACT_APP_SC_ATTR||ze.SC_ATTR)||"data-styled",op="active",ip="data-styled-version",Ps="6.1.13",Vc=`/*!sc*/
`,Yi=typeof window<"u"&&"HTMLElement"in window,my=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==""?ze.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ze.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.SC_DISABLE_SPEEDY!==void 0&&ze.SC_DISABLE_SPEEDY!==""&&ze.SC_DISABLE_SPEEDY!=="false"&&ze.SC_DISABLE_SPEEDY),fy={},Rs=Object.freeze([]),_r=Object.freeze({});function sp(e,t,n){return n===void 0&&(n=_r),e.theme!==n.theme&&e.theme||t||n.theme}var ap=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,py=/(^-|-$)/g;function Id(e){return e.replace(hy,"-").replace(py,"")}var vy=/(a)(d)/gi,ti=52,Pd=function(e){return String.fromCharCode(e+(e>25?39:97))};function jl(e){var t,n="";for(t=Math.abs(e);t>ti;t=t/ti|0)n=Pd(t%ti)+n;return(Pd(t%ti)+n).replace(vy,"$1-$2")}var _a,lp=5381,tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cp=function(e){return tr(lp,e)};function up(e){return jl(cp(e)>>>0)}function gy(e){return e.displayName||e.name||"Component"}function ya(e){return typeof e=="string"&&!0}var dp=typeof Symbol=="function"&&Symbol.for,mp=dp?Symbol.for("react.memo"):60115,_y=dp?Symbol.for("react.forward_ref"):60112,yy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},by=((_a={})[_y]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_a[mp]=fp,_a);function Rd(e){return("type"in(t=e)&&t.type.$$typeof)===mp?fp:"$$typeof"in e?by[e.$$typeof]:yy;var t}var xy=Object.defineProperty,Sy=Object.getOwnPropertyNames,Od=Object.getOwnPropertySymbols,Ay=Object.getOwnPropertyDescriptor,Cy=Object.getPrototypeOf,Bd=Object.prototype;function hp(e,t,n){if(typeof t!="string"){if(Bd){var r=Cy(t);r&&r!==Bd&&hp(e,r,n)}var o=Sy(t);Od&&(o=o.concat(Od(t)));for(var i=Rd(e),s=Rd(t),a=0;a<o.length;++a){var c=o[a];if(!(c in wy||n&&n[c]||s&&c in s||i&&c in i)){var u=Ay(t,c);try{xy(e,c,u)}catch{}}}}return e}function yr(e){return typeof e=="function"}function $c(e){return typeof e=="object"&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function El(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function xo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nl(e,t,n){if(n===void 0&&(n=!1),!n&&!xo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Nl(e[r],t[r]);else if(xo(t))for(var r in t)e[r]=Nl(e[r],t[r]);return e}function Hc(e,t){Object.defineProperty(e,"toString",{value:t})}function Ro(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ky=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ro(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Vc);return n},e}(),yi=new Map,Xi=new Map,wi=1,ni=function(e){if(yi.has(e))return yi.get(e);for(;Xi.has(wi);)wi++;var t=wi++;return yi.set(e,t),Xi.set(t,e),t},jy=function(e,t){wi=t+1,yi.set(e,t),Xi.set(t,e)},Ey="style[".concat(gr,"][").concat(ip,'="').concat(Ps,'"]'),Ny=new RegExp("^".concat(gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ly=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Iy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Vc),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var c=a.match(Ny);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(jy(d,u),Ly(e,d,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Td=function(e){for(var t=document.querySelectorAll(Ey),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(gr)!==op&&(Iy(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Py(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var c=Array.from(a.querySelectorAll("style[".concat(gr,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(gr,op),r.setAttribute(ip,Ps);var s=Py();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Ry=function(){function e(t){this.element=pp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Ro(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Oy=function(){function e(t){this.element=pp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),By=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Md=Yi,Ty={isServer:!Yi,useCSSOMInjection:!my},Ji=function(){function e(t,n,r){t===void 0&&(t=_r),n===void 0&&(n={});var o=this;this.options=Se(Se({},Ty),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Yi&&Md&&(Md=!1,Td(this)),Hc(this,function(){return function(i){for(var s=i.getTag(),a=s.length,c="",u=function(m){var v=function(p){return Xi.get(p)}(m);if(v===void 0)return"continue";var _=i.names.get(v),g=s.getGroup(m);if(_===void 0||!_.size||g.length===0)return"continue";var y="".concat(gr,".g").concat(m,'[id="').concat(v,'"]'),w="";_!==void 0&&_.forEach(function(p){p.length>0&&(w+="".concat(p,","))}),c+="".concat(g).concat(y,'{content:"').concat(w,'"}').concat(Vc)},d=0;d<a;d++)u(d);return c}(o)})}return e.registerId=function(t){return ni(t)},e.prototype.rehydrate=function(){!this.server&&Yi&&Td(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Se(Se({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new By(o):r?new Ry(o):new Oy(o)}(this.options),new ky(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ni(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ni(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ni(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),My=/&/g,Fy=/^\s*\/\/.*$/gm;function vp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vp(n.children,t)),n})}function Dy(e){var t,n,r,o=_r,i=o.options,s=i===void 0?_r:i,a=o.plugins,c=a===void 0?Rs:a,u=function(v,_,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):v},d=c.slice();d.push(function(v){v.type===Es&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(My,n).replace(r,u))}),s.prefix&&d.push(uy),d.push(ay);var m=function(v,_,g,y){_===void 0&&(_=""),g===void 0&&(g=""),y===void 0&&(y="&"),t=y,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var w=v.replace(Fy,""),p=iy(g||_?"".concat(g," ").concat(_," { ").concat(w," }"):w);s.namespace&&(p=vp(p,s.namespace));var f=[];return Gi(p,ly(d.concat(cy(function(h){return f.push(h)})))),f};return m.hash=c.length?c.reduce(function(v,_){return _.name||Ro(15),tr(v,_.name)},lp).toString():"",m}var Uy=new Ji,Ll=Dy(),gp=he.createContext({shouldForwardProp:void 0,styleSheet:Uy,stylis:Ll});gp.Consumer;he.createContext(void 0);function Il(){return A.useContext(gp)}var zy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ll);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Hc(this,function(){throw Ro(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ll),this.name+t.hash},e}(),qy=function(e){return e>="A"&&e<="Z"};function Fd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;qy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _p=function(e){return e==null||e===!1||e===""},yp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!_p(i)&&(Array.isArray(i)&&i.isCss||yr(i)?r.push("".concat(Fd(o),":"),i,";"):xo(i)?r.push.apply(r,bo(bo(["".concat(o," {")],yp(i),!1),["}"],!1)):r.push("".concat(Fd(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in dy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function sn(e,t,n,r){if(_p(e))return[];if($c(e))return[".".concat(e.styledComponentId)];if(yr(e)){if(!yr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return sn(o,t,n,r)}var i;return e instanceof zy?n?(e.inject(n,r),[e.getName(r)]):[e]:xo(e)?yp(e):Array.isArray(e)?Array.prototype.concat.apply(Rs,e.map(function(s){return sn(s,t,n,r)})):[e.toString()]}function wp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yr(n)&&!$c(n))return!1}return!0}var Wy=cp(Ps),Vy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wp(t),this.componentId=n,this.baseHash=tr(Wy,n),this.baseStyle=r,Ji.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Sn(o,this.staticRulesId);else{var i=El(sn(this.rules,t,n,r)),s=jl(tr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Sn(o,s),this.staticRulesId=s}else{for(var c=tr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")u+=m;else if(m){var v=El(sn(m,t,n,r));c=tr(c,v+d),u+=v}}if(u){var _=jl(c>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(u,".".concat(_),void 0,this.componentId)),o=Sn(o,_)}}return o},e}(),Kc=he.createContext(void 0);Kc.Consumer;var wa={};function $y(e,t,n){var r=$c(e),o=e,i=!ya(e),s=t.attrs,a=s===void 0?Rs:s,c=t.componentId,u=c===void 0?function(b,C){var k=typeof b!="string"?"sc":Id(b);wa[k]=(wa[k]||0)+1;var x="".concat(k,"-").concat(up(Ps+k+wa[k]));return C?"".concat(C,"-").concat(x):x}(t.displayName,t.parentComponentId):c,d=t.displayName,m=d===void 0?function(b){return ya(b)?"styled.".concat(b):"Styled(".concat(gy(b),")")}(e):d,v=t.displayName&&t.componentId?"".concat(Id(t.displayName),"-").concat(t.componentId):t.componentId||u,_=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;g=function(b,C){return y(b,C)&&w(b,C)}}else g=y}var p=new Vy(n,v,r?o.componentStyle:void 0);function f(b,C){return function(k,x,j){var L=k.attrs,N=k.componentStyle,V=k.defaultProps,vt=k.foldedComponentIds,Fe=k.styledComponentId,De=k.target,jr=he.useContext(Kc),Er=Il(),hn=k.shouldForwardProp||Er.shouldForwardProp,I=sp(x,jr,V)||_r,O=function(Dt,Ue,Ct){for(var Nr,vn=Se(Se({},Ue),{className:void 0,theme:Ct}),Ws=0;Ws<Dt.length;Ws+=1){var Mo=yr(Nr=Dt[Ws])?Nr(vn):Nr;for(var Ut in Mo)vn[Ut]=Ut==="className"?Sn(vn[Ut],Mo[Ut]):Ut==="style"?Se(Se({},vn[Ut]),Mo[Ut]):Mo[Ut]}return Ue.className&&(vn.className=Sn(vn.className,Ue.className)),vn}(L,x,I),T=O.as||De,$={};for(var H in O)O[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&O.theme===I||(H==="forwardedAs"?$.as=O.forwardedAs:hn&&!hn(H,T)||($[H]=O[H]));var pn=function(Dt,Ue){var Ct=Il(),Nr=Dt.generateAndInjectStyles(Ue,Ct.styleSheet,Ct.stylis);return Nr}(N,O),it=Sn(vt,Fe);return pn&&(it+=" "+pn),O.className&&(it+=" "+O.className),$[ya(T)&&!ap.has(T)?"class":"className"]=it,$.ref=j,A.createElement(T,$)}(h,b,C)}f.displayName=m;var h=he.forwardRef(f);return h.attrs=_,h.componentStyle=p,h.displayName=m,h.shouldForwardProp=g,h.foldedComponentIds=r?Sn(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=v,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(C){for(var k=[],x=1;x<arguments.length;x++)k[x-1]=arguments[x];for(var j=0,L=k;j<L.length;j++)Nl(C,L[j],!0);return C}({},o.defaultProps,b):b}}),Hc(h,function(){return".".concat(h.styledComponentId)}),i&&hp(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Dd(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ud=function(e){return Object.assign(e,{isCss:!0})};function Gc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yr(e)||xo(e))return Ud(sn(Dd(Rs,bo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?sn(r):Ud(sn(Dd(r,t)))}function Pl(e,t,n){if(n===void 0&&(n=_r),!t)throw Ro(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Gc.apply(void 0,bo([o],i,!1)))};return r.attrs=function(o){return Pl(e,t,Se(Se({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Pl(e,t,Se(Se({},n),o))},r}var bp=function(e){return Pl($y,e)},B=bp;ap.forEach(function(e){B[e]=bp(e)});var Hy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=wp(t),Ji.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(El(sn(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ji.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function xp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Gc.apply(void 0,bo([e],t,!1)),o="sc-global-".concat(up(JSON.stringify(r))),i=new Hy(r,o),s=function(c){var u=Il(),d=he.useContext(Kc),m=he.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(m,c,u.styleSheet,d,u.stylis),he.useLayoutEffect(function(){if(!u.styleSheet.server)return a(m,c,u.styleSheet,d,u.stylis),function(){return i.removeStyles(m,u.styleSheet)}},[m,c,u.styleSheet,d,u.stylis]),null};function a(c,u,d,m,v){if(i.isStatic)i.renderStyles(c,fy,d,v);else{var _=Se(Se({},u),{theme:sp(u,m,s.defaultProps)});i.renderStyles(c,_,d,v)}}return he.memo(s)}const ba={mobile:"600px",tablet:"1023px",desktop:"1024px"},Ce={mobile:`(max-width: ${ba.mobile})`,tablet:`(max-width: ${ba.tablet})`,desktop:`(max-width: ${ba.desktop})`},Ky=B.header`
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 999;
    div {
        box-sizing: border-box;
    }
    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 2rem;
        .first-box {
            display: flex;
            align-items: center;
        }
        .logo-gif {
            max-width: 10rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                width: 100%;
            }
        }
        .logo {
            cursor: pointer;
        }
        .all-menu {
            .icon {
                margin-right: 2.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                padding: 0.8rem;
                border-radius: 50%;
                &:hover {
                    background-color: #f5f5f5;
                }
            }
        }
        .search-box {
            border: 1px solid #dcdcdc;
            box-sizing: border-box;
            border-radius: 2rem;
            overflow: hidden;
            width: 60rem;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: invert;
            input {
                width: 90%;
                height: 4rem;
                border: none;
                outline: none;
                text-indent: 2rem;
                font-size: 1.6rem;
            }
            .search-btn {
                width: 10%;
                height: 4rem;
                border: none;
                border-left: 1px solid #dcdcdc;
                cursor: pointer;
                background-color: #efefef;
                transition: all 0.3s;
                &:hover {
                    background-color: #dddd;
                }
            }
        }

        .search-history {
            position: absolute;
            background: #fff;
            border-radius: 1rem;
            min-width: 50rem;
            max-width: 56rem;
            padding: 1.5rem;
            box-shadow: #00000050 0px 1px 3px;
            top: 100%;
            left: 35%;
            z-index: 999;
            .search-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 2%;
                &:last-child {
                    margin-bottom: 0%;
                }
                &:hover {
                    background: #fafafa;
                }
                .search-keyword {
                    display: flex;
                    align-items: center;
                    width: 90%;
                    img {
                        margin-right: 3%;
                    }
                }
                .history-btn {
                    border: none;
                    background: none;
                    display: flex;
                    .close-btn {
                        width: 70%;
                    }
                }
            }
            @media ${Ce.mobile} {
                left: 17%;
                min-width: 45vw;
                max-width: 51vw;
                img {
                    width: 8%;
                }
                .history-btn {
                    width: 14%;
                    margin-right: -5%;
                }
            }
        }
        .user-menu {
            display: flex;
            justify-content: center;
            align-items: center;
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.8rem;
                border-radius: 50%;
                &:not(:last-of-type) {
                    margin-right: 1rem;
                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
                .user-profile {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background-color: var(--youtube-red);
                    box-sizing: border-box;
                    font-size: 1.4rem;
                    color: #fff;
                    width: 3rem;
                    height: 3rem;
                    position: relative;
                }
            }
        }
    }
    @media ${Ce.mobile} {
        .top {
            min-height: 8rem;
            .user-menu {
                display: none;
            }
            .search-box {
                width: 40rem;
                border: none;
                &:hover {
                    border: 1px solid #dcdcdc;
                    input {
                        transform: scaleX(1);
                    }
                    .search-btn {
                        width: 10%;
                        height: 4rem;
                        border: none;
                        border-left: 1px solid #dcdcdc;
                        cursor: pointer;
                        background-color: #efefef;
                        transition: all 0.3s;
                        &:hover {
                            background-color: #dddd;
                        }
                        img {
                            width: 2.6rem;
                        }
                    }
                }
                input {
                    transition: all 0.3s;
                    transform: scaleX(0);
                    transform-origin: right;
                }
                .search-btn {
                    background-color: #fff;
                    border: none;
                    position: relative;
                    img {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 3rem;
                    }
                }
            }
        }
    }
`,Sp=B.div`
    min-width: 25rem;
    z-index: 10;
    height: 100vh;
    overflow: scroll;
    position: sticky;
    top: 5.6rem;
    .channel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 10% 0;
        .channel-img-wrap {
            border-radius: 50%;
            overflow: hidden;
            width: 12rem;
            height: 12rem;
            margin-bottom: 6%;
            img {
                height: 100%;
            }
        }
        .channel-name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .my-channel-name {
                font-size: 1.2rem;
                color: #666;
                max-width: 16rem;
            }
        }
    }
    ul {
        border-bottom: 1px solid #dcdcdc;
        box-sizing: border-box;
        padding: 1.5rem 1rem;
        .menu-title {
            font-size: 1.6rem;
            margin-bottom: 1rem;
            padding: 0rem 1rem;
            display: flex;
            align-items: center;
            user-select: none;
            img {
                margin-left: 1rem;
            }
        }
        li {
            display: flex;
            width: 22rem;
            box-sizing: border-box;
            align-items: center;
            cursor: pointer;
            padding: 0.8rem 1rem;
            border-radius: 1rem;
            font-size: 1.4rem;
            &:hover {
                background-color: #dddd;
            }
            img {
                margin-right: 2rem;
            }
        }
    }
    .studiomenu-list {
        li {
            min-height: 5rem;
            color: #666;
            img {
                max-width: 2.6rem;
                max-height: 2.6rem;
            }
        }
    }
    .footer {
        width: 18rem;
        word-break: keep-all;
        font-size: 1rem;
    }
    .not-login-span {
        display: block;
        width: 20rem;
        font-size: 1.4rem;
        box-sizing: border-box;
        padding: 0 1rem;
        margin-bottom: 1rem;
    }
    .login-menu {
        width: 10rem;
    }
    .thisChannel-item {
        img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
        }
        .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`,Gy=B.div`
    .content-wrap {
        display: flex;
        width: 100%;
    }
`,Yy=B.div`
    width: 100%;
    min-height: 100vh;
    header {
        box-shadow: rgba(0, 0, 0, 0.03) 0px 1rem 2.5rem -0.5rem,
            rgba(0, 0, 0, 0.04) 0rem 1rem 1rem -0.5rem;
    }
    .content-wrap {
        display: flex;
    }
    .studio-title {
        font-size: 2.6rem;
        font-weight: 500;
        margin-bottom: 3rem;
    }
    .inner {
        padding: 2%;
        box-sizing: border-box;
        width: 100%;
    }
`,Xy=B.div`
    .spinner {
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .spinner-circle {
        width: 100%;
        height: 100%;
        background: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
        padding: 0.5rem 1rem;
    }

    .spinner-circle:before {
        z-index: 5;
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed #333;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s linear infinite;
    }

    .spinner-circle:after {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed #333;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s ease infinite;
        z-index: 10;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,Jy=B.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 10%;
    .not {
        text-align: center;
        font-size: 2rem;
    }
`;var Ap={exports:{}},Cp={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=A;function Qy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zy=typeof Object.is=="function"?Object.is:Qy,e1=Oo.useSyncExternalStore,t1=Oo.useRef,n1=Oo.useEffect,r1=Oo.useMemo,o1=Oo.useDebugValue;Cp.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=t1(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=r1(function(){function c(_){if(!u){if(u=!0,d=_,_=r(_),o!==void 0&&s.hasValue){var g=s.value;if(o(g,_))return m=g}return m=_}if(g=m,Zy(d,_))return g;var y=r(_);return o!==void 0&&o(g,y)?g:(d=_,m=y)}var u=!1,d,m,v=n===void 0?null:n;return[function(){return c(t())},v===null?void 0:function(){return c(v())}]},[t,n,r,o]);var a=e1(e,i[0],i[1]);return n1(function(){s.hasValue=!0,s.value=a},[a]),o1(a),a};Ap.exports=Cp;var i1=Ap.exports,Ve="default"in Na?he:Na,zd=Symbol.for("react-redux-context"),qd=typeof globalThis<"u"?globalThis:{};function s1(){if(!Ve.createContext)return{};const e=qd[zd]??(qd[zd]=new Map);let t=e.get(Ve.createContext);return t||(t=Ve.createContext(null),e.set(Ve.createContext,t)),t}var cn=s1(),a1=()=>{throw new Error("uSES not initialized!")};function Yc(e=cn){return function(){return Ve.useContext(e)}}var kp=Yc(),jp=a1,l1=e=>{jp=e},c1=(e,t)=>e===t;function u1(e=cn){const t=e===cn?kp:Yc(e),n=(r,o={})=>{const{equalityFn:i=c1,devModeChecks:s={}}=typeof o=="function"?{equalityFn:o}:o,{store:a,subscription:c,getServerState:u,stabilityCheck:d,identityFunctionCheck:m}=t();Ve.useRef(!0);const v=Ve.useCallback({[r.name](g){return r(g)}}[r.name],[r,d,s.stabilityCheck]),_=jp(c.addNestedSub,a.getState,u||a.getState,v,i);return Ve.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var R=u1();function d1(e){e()}function m1(){let e=null,t=null;return{clear(){e=null,t=null},notify(){d1(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!r||e===null||(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Wd={notify(){},get:()=>[]};function f1(e,t){let n,r=Wd,o=0,i=!1;function s(y){d();const w=r.subscribe(y);let p=!1;return()=>{p||(p=!0,w(),m())}}function a(){r.notify()}function c(){g.onStateChange&&g.onStateChange()}function u(){return i}function d(){o++,n||(n=e.subscribe(c),r=m1())}function m(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=Wd)}function v(){i||(i=!0,d())}function _(){i&&(i=!1,m())}const g={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:c,isSubscribed:u,trySubscribe:v,tryUnsubscribe:_,getListeners:()=>r};return g}var h1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p1=typeof navigator<"u"&&navigator.product==="ReactNative",v1=h1||p1?Ve.useLayoutEffect:Ve.useEffect;function g1({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",identityFunctionCheck:i="once"}){const s=Ve.useMemo(()=>{const u=f1(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,identityFunctionCheck:i}},[e,r,o,i]),a=Ve.useMemo(()=>e.getState(),[e]);v1(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const c=t||cn;return Ve.createElement(c.Provider,{value:s},n)}var _1=g1;function Ep(e=cn){const t=e===cn?kp:Yc(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var y1=Ep();function w1(e=cn){const t=e===cn?y1:Ep(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var re=w1();l1(i1.useSyncExternalStoreWithSelector);function ve(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var b1=typeof Symbol=="function"&&Symbol.observable||"@@observable",Vd=b1,xa=()=>Math.random().toString(36).substring(7).split("").join("."),x1={INIT:`@@redux/INIT${xa()}`,REPLACE:`@@redux/REPLACE${xa()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${xa()}`},Qi=x1;function Xc(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Np(e,t,n){if(typeof e!="function")throw new Error(ve(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ve(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ve(1));return n(Np)(e,t)}let r=e,o=t,i=new Map,s=i,a=0,c=!1;function u(){s===i&&(s=new Map,i.forEach((w,p)=>{s.set(p,w)}))}function d(){if(c)throw new Error(ve(3));return o}function m(w){if(typeof w!="function")throw new Error(ve(4));if(c)throw new Error(ve(5));let p=!0;u();const f=a++;return s.set(f,w),function(){if(p){if(c)throw new Error(ve(6));p=!1,u(),s.delete(f),i=null}}}function v(w){if(!Xc(w))throw new Error(ve(7));if(typeof w.type>"u")throw new Error(ve(8));if(typeof w.type!="string")throw new Error(ve(17));if(c)throw new Error(ve(9));try{c=!0,o=r(o,w)}finally{c=!1}return(i=s).forEach(f=>{f()}),w}function _(w){if(typeof w!="function")throw new Error(ve(10));r=w,v({type:Qi.REPLACE})}function g(){const w=m;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ve(11));function f(){const b=p;b.next&&b.next(d())}return f(),{unsubscribe:w(f)}},[Vd](){return this}}}return v({type:Qi.INIT}),{dispatch:v,subscribe:m,getState:d,replaceReducer:_,[Vd]:g}}function S1(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Qi.INIT})>"u")throw new Error(ve(12));if(typeof n(void 0,{type:Qi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ve(13))})}function A1(e){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const s=t[i];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let o;try{S1(n)}catch(i){o=i}return function(s={},a){if(o)throw o;let c=!1;const u={};for(let d=0;d<r.length;d++){const m=r[d],v=n[m],_=s[m],g=v(_,a);if(typeof g>"u")throw a&&a.type,new Error(ve(14));u[m]=g,c=c||g!==_}return c=c||r.length!==Object.keys(s).length,c?u:s}}function Zi(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function C1(...e){return t=>(n,r)=>{const o=t(n,r);let i=()=>{throw new Error(ve(15))};const s={getState:o.getState,dispatch:(c,...u)=>i(c,...u)},a=e.map(c=>c(s));return i=Zi(...a)(o.dispatch),{...o,dispatch:i}}}function k1(e){return Xc(e)&&"type"in e&&typeof e.type=="string"}var Lp=Symbol.for("immer-nothing"),$d=Symbol.for("immer-draftable"),Ge=Symbol.for("immer-state");function ut(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var wr=Object.getPrototypeOf;function Bn(e){return!!e&&!!e[Ge]}function Tt(e){var t;return e?Ip(e)||Array.isArray(e)||!!e[$d]||!!((t=e.constructor)!=null&&t[$d])||Bs(e)||Ts(e):!1}var j1=Object.prototype.constructor.toString();function Ip(e){if(!e||typeof e!="object")return!1;const t=wr(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===j1}function es(e,t){Os(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Os(e){const t=e[Ge];return t?t.type_:Array.isArray(e)?1:Bs(e)?2:Ts(e)?3:0}function Rl(e,t){return Os(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Pp(e,t,n){const r=Os(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function E1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Bs(e){return e instanceof Map}function Ts(e){return e instanceof Set}function yn(e){return e.copy_||e.base_}function Ol(e,t){if(Bs(e))return new Map(e);if(Ts(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Ip(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[Ge];let o=Reflect.ownKeys(r);for(let i=0;i<o.length;i++){const s=o[i],a=r[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[s]})}return Object.create(wr(e),r)}else{const r=wr(e);if(r!==null&&n)return{...e};const o=Object.create(r);return Object.assign(o,e)}}function Jc(e,t=!1){return Ms(e)||Bn(e)||!Tt(e)||(Os(e)>1&&(e.set=e.add=e.clear=e.delete=N1),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>Jc(r,!0))),e}function N1(){ut(2)}function Ms(e){return Object.isFrozen(e)}var L1={};function Tn(e){const t=L1[e];return t||ut(0,e),t}var So;function Rp(){return So}function I1(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Hd(e,t){t&&(Tn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Bl(e){Tl(e),e.drafts_.forEach(P1),e.drafts_=null}function Tl(e){e===So&&(So=e.parent_)}function Kd(e){return So=I1(So,e)}function P1(e){const t=e[Ge];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Gd(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Ge].modified_&&(Bl(t),ut(4)),Tt(e)&&(e=ts(t,e),t.parent_||ns(t,e)),t.patches_&&Tn("Patches").generateReplacementPatches_(n[Ge].base_,e,t.patches_,t.inversePatches_)):e=ts(t,n,[]),Bl(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Lp?e:void 0}function ts(e,t,n){if(Ms(t))return t;const r=t[Ge];if(!r)return es(t,(o,i)=>Yd(e,r,t,o,i,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return ns(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let i=o,s=!1;r.type_===3&&(i=new Set(o),o.clear(),s=!0),es(i,(a,c)=>Yd(e,r,o,a,c,n,s)),ns(e,o,!1),n&&e.patches_&&Tn("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Yd(e,t,n,r,o,i,s){if(Bn(o)){const a=i&&t&&t.type_!==3&&!Rl(t.assigned_,r)?i.concat(r):void 0,c=ts(e,o,a);if(Pp(n,r,c),Bn(c))e.canAutoFreeze_=!1;else return}else s&&n.add(o);if(Tt(o)&&!Ms(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ts(e,o),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&ns(e,o)}}function ns(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Jc(t,n)}function R1(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Rp(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=Qc;n&&(o=[r],i=Ao);const{revoke:s,proxy:a}=Proxy.revocable(o,i);return r.draft_=a,r.revoke_=s,a}var Qc={get(e,t){if(t===Ge)return e;const n=yn(e);if(!Rl(n,t))return O1(e,n,t);const r=n[t];return e.finalized_||!Tt(r)?r:r===Sa(e.base_,t)?(Aa(e),e.copy_[t]=Fl(r,e)):r},has(e,t){return t in yn(e)},ownKeys(e){return Reflect.ownKeys(yn(e))},set(e,t,n){const r=Op(yn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const o=Sa(yn(e),t),i=o==null?void 0:o[Ge];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(E1(n,o)&&(n!==void 0||Rl(e.base_,t)))return!0;Aa(e),Ml(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Sa(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Aa(e),Ml(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=yn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){ut(11)},getPrototypeOf(e){return wr(e.base_)},setPrototypeOf(){ut(12)}},Ao={};es(Qc,(e,t)=>{Ao[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Ao.deleteProperty=function(e,t){return Ao.set.call(this,e,t,void 0)};Ao.set=function(e,t,n){return Qc.set.call(this,e[0],t,n,e[0])};function Sa(e,t){const n=e[Ge];return(n?yn(n):e)[t]}function O1(e,t,n){var o;const r=Op(t,n);return r?"value"in r?r.value:(o=r.get)==null?void 0:o.call(e.draft_):void 0}function Op(e,t){if(!(t in e))return;let n=wr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=wr(n)}}function Ml(e){e.modified_||(e.modified_=!0,e.parent_&&Ml(e.parent_))}function Aa(e){e.copy_||(e.copy_=Ol(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var B1=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const i=n;n=t;const s=this;return function(c=i,...u){return s.produce(c,d=>n.call(this,d,...u))}}typeof n!="function"&&ut(6),r!==void 0&&typeof r!="function"&&ut(7);let o;if(Tt(t)){const i=Kd(this),s=Fl(t,void 0);let a=!0;try{o=n(s),a=!1}finally{a?Bl(i):Tl(i)}return Hd(i,r),Gd(o,i)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===Lp&&(o=void 0),this.autoFreeze_&&Jc(o,!0),r){const i=[],s=[];Tn("Patches").generateReplacementPatches_(t,o,i,s),r(i,s)}return o}else ut(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,c=>t(c,...a));let r,o;return[this.produce(t,n,(s,a)=>{r=s,o=a}),r,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Tt(e)||ut(8),Bn(e)&&(e=T1(e));const t=Kd(this),n=Fl(e,void 0);return n[Ge].isManual_=!0,Tl(t),n}finishDraft(e,t){const n=e&&e[Ge];(!n||!n.isManual_)&&ut(9);const{scope_:r}=n;return Hd(r,t),Gd(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const r=Tn("Patches").applyPatches_;return Bn(e)?r(e,t):this.produce(e,o=>r(o,t))}};function Fl(e,t){const n=Bs(e)?Tn("MapSet").proxyMap_(e,t):Ts(e)?Tn("MapSet").proxySet_(e,t):R1(e,t);return(t?t.scope_:Rp()).drafts_.push(n),n}function T1(e){return Bn(e)||ut(10,e),Bp(e)}function Bp(e){if(!Tt(e)||Ms(e))return e;const t=e[Ge];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ol(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Ol(e,!0);return es(n,(r,o)=>{Pp(n,r,Bp(o))}),t&&(t.finalized_=!1),n}var Ye=new B1,Tp=Ye.produce;Ye.produceWithPatches.bind(Ye);Ye.setAutoFreeze.bind(Ye);Ye.setUseStrictShallowCopy.bind(Ye);Ye.applyPatches.bind(Ye);Ye.createDraft.bind(Ye);Ye.finishDraft.bind(Ye);function Mp(e){return({dispatch:n,getState:r})=>o=>i=>typeof i=="function"?i(n,r,e):o(i)}var M1=Mp(),F1=Mp,D1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Zi:Zi.apply(null,arguments)};function Xd(e,t){function n(...r){if(t){let o=t(...r);if(!o)throw new Error(St(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>k1(r)&&r.type===e,n}var Fp=class Vr extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Vr.prototype)}static get[Symbol.species](){return Vr}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Vr(...t[0].concat(this)):new Vr(...t.concat(this))}};function Jd(e){return Tt(e)?Tp(e,()=>{}):e}function Qd(e,t,n){if(e.has(t)){let o=e.get(t);return n.update&&(o=n.update(o,t,e),e.set(t,o)),o}if(!n.insert)throw new Error(St(10));const r=n.insert(t,e);return e.set(t,r),r}function U1(e){return typeof e=="boolean"}var z1=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{};let s=new Fp;return n&&(U1(n)?s.push(M1):s.push(F1(n.extraArgument))),s},q1="RTK_autoBatch",Dp=e=>t=>{setTimeout(t,e)},W1=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Dp(10),V1=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let o=!0,i=!1,s=!1;const a=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?W1:e.type==="callback"?e.queueNotification:Dp(e.timeout),u=()=>{s=!1,i&&(i=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const m=()=>o&&d(),v=r.subscribe(m);return a.add(d),()=>{v(),a.delete(d)}},dispatch(d){var m;try{return o=!((m=d==null?void 0:d.meta)!=null&&m[q1]),i=!o,i&&(s||(s=!0,c(u))),r.dispatch(d)}finally{o=!0}}})},$1=e=>function(n){const{autoBatch:r=!0}=n??{};let o=new Fp(e);return r&&o.push(V1(typeof r=="object"?r:void 0)),o};function H1(e){const t=z1(),{reducer:n=void 0,middleware:r,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(Xc(n))a=A1(n);else throw new Error(St(1));let c;typeof r=="function"?c=r(t):c=t();let u=Zi;o&&(u=D1({trace:!1,...typeof o=="object"&&o}));const d=C1(...c),m=$1(d);let v=typeof s=="function"?s(m):m();const _=u(...v);return Np(a,i,_)}function Up(e){const t={},n=[];let r;const o={addCase(i,s){const a=typeof i=="string"?i:i.type;if(!a)throw new Error(St(28));if(a in t)throw new Error(St(29));return t[a]=s,o},addMatcher(i,s){return n.push({matcher:i,reducer:s}),o},addDefaultCase(i){return r=i,o}};return e(o),[t,n,r]}function K1(e){return typeof e=="function"}function G1(e,t){let[n,r,o]=Up(t),i;if(K1(e))i=()=>Jd(e());else{const a=Jd(e);i=()=>a}function s(a=i(),c){let u=[n[c.type],...r.filter(({matcher:d})=>d(c)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[o]),u.reduce((d,m)=>{if(m)if(Bn(d)){const _=m(d,c);return _===void 0?d:_}else{if(Tt(d))return Tp(d,v=>m(v,c));{const v=m(d,c);if(v===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return d},a)}return s.getInitialState=i,s}var Y1=Symbol.for("rtk-slice-createasyncthunk");function X1(e,t){return`${e}/${t}`}function J1({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[Y1];return function(o){const{name:i,reducerPath:s=i}=o;if(!i)throw new Error(St(11));typeof process<"u";const a=(typeof o.reducers=="function"?o.reducers(Z1()):o.reducers)||{},c=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(h,b){const C=typeof h=="string"?h:h.type;if(!C)throw new Error(St(12));if(C in u.sliceCaseReducersByType)throw new Error(St(13));return u.sliceCaseReducersByType[C]=b,d},addMatcher(h,b){return u.sliceMatchers.push({matcher:h,reducer:b}),d},exposeAction(h,b){return u.actionCreators[h]=b,d},exposeCaseReducer(h,b){return u.sliceCaseReducersByName[h]=b,d}};c.forEach(h=>{const b=a[h],C={reducerName:h,type:X1(i,h),createNotation:typeof o.reducers=="function"};tw(b)?rw(C,b,d,t):ew(C,b,d)});function m(){const[h={},b=[],C=void 0]=typeof o.extraReducers=="function"?Up(o.extraReducers):[o.extraReducers],k={...h,...u.sliceCaseReducersByType};return G1(o.initialState,x=>{for(let j in k)x.addCase(j,k[j]);for(let j of u.sliceMatchers)x.addMatcher(j.matcher,j.reducer);for(let j of b)x.addMatcher(j.matcher,j.reducer);C&&x.addDefaultCase(C)})}const v=h=>h,_=new Map;let g;function y(h,b){return g||(g=m()),g(h,b)}function w(){return g||(g=m()),g.getInitialState()}function p(h,b=!1){function C(x){let j=x[h];return typeof j>"u"&&b&&(j=w()),j}function k(x=v){const j=Qd(_,b,{insert:()=>new WeakMap});return Qd(j,x,{insert:()=>{const L={};for(const[N,V]of Object.entries(o.selectors??{}))L[N]=Q1(V,x,w,b);return L}})}return{reducerPath:h,getSelectors:k,get selectors(){return k(C)},selectSlice:C}}const f={name:i,reducer:y,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,...p(s),injectInto(h,{reducerPath:b,...C}={}){const k=b??s;return h.inject({reducerPath:k,reducer:y},C),{...f,...p(k,!0)}}};return f}}function Q1(e,t,n,r){function o(i,...s){let a=t(i);return typeof a>"u"&&r&&(a=n()),e(a,...s)}return o.unwrapped=e,o}var Zc=J1();function Z1(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function ew({type:e,reducerName:t,createNotation:n},r,o){let i,s;if("reducer"in r){if(n&&!nw(r))throw new Error(St(17));i=r.reducer,s=r.prepare}else i=r;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?Xd(e,s):Xd(e))}function tw(e){return e._reducerDefinitionType==="asyncThunk"}function nw(e){return e._reducerDefinitionType==="reducerWithPrepare"}function rw({type:e,reducerName:t},n,r,o){if(!o)throw new Error(St(18));const{payloadCreator:i,fulfilled:s,pending:a,rejected:c,settled:u,options:d}=n,m=o(e,i,d);r.exposeAction(t,m),s&&r.addCase(m.fulfilled,s),a&&r.addCase(m.pending,a),c&&r.addCase(m.rejected,c),u&&r.addMatcher(m.settled,u),r.exposeCaseReducer(t,{fulfilled:s||ri,pending:a||ri,rejected:c||ri,settled:u||ri})}function ri(){}function St(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const ow={isSideMenu:!0},zp=Zc({name:"headerSlice",initialState:ow,reducers:{SideMenuChange(e){e.isSideMenu=!e.isSideMenu}}}),{SideMenuChange:eu}=zp.actions,iw=zp.reducer,sw=()=>{const e=re(),t=()=>{e(eu())};return l.jsx("div",{className:"all-menu pc",onClick:t,children:l.jsx("div",{className:"icon",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/All_menu.svg",alt:"menu"})})})},aw=()=>{const e=W(),[t,n]=A.useState(!0);return A.useEffect(()=>{setTimeout(()=>{n(!1)},12e3)},[]),l.jsx(l.Fragment,{children:t?l.jsx("div",{className:"logo-gif",onClick:()=>e("/"),children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/refs/heads/main/Icon/YouTube_logo.webp",alt:"Youtube"})}):l.jsx("div",{className:"logo",onClick:()=>e("/"),children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_logo.svg",alt:"Youtube"})})})},lw=[{user_id:798311,user_name:"진돗개 이레",user_age:20,user_tel:"010-5305-9524",user_email:"jindoEre@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[660495]},{user_id:660495,user_name:"쇼핑맘",user_age:29,user_tel:"010-0652-9305",user_email:"shoppingMom@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[798311]},{user_id:201864,user_name:"mamu마므",user_age:20,user_tel:"010-4505-9420",user_email:"mamu_vlog@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[904206]},{user_id:904206,user_name:"무찌",user_age:35,user_tel:"010-0654-7051",user_email:"moozzi@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[201864]},{user_id:806540,user_name:"아가리어터",user_age:27,user_tel:"010-5305-9524",user_email:"Or7r2l@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[56165156]},{user_id:56165156,user_name:"radiohead",user_age:20,user_tel:"010-1234-1234",user_email:"radiohead@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[806540]},{user_id:6546654,user_name:"ultraTasteDiary",user_age:30,user_tel:"010-3481-1745",user_email:"ultraTasteDiary@naver.com",user_password:"8761",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[96745102]},{user_id:96745102,user_name:"suede",user_age:27,user_tel:"010-4912-9012",user_email:"suede@naver.com",user_password:"1568",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[41846541]},{user_id:41846541,user_name:"woowakgood",user_age:35,user_tel:"010-4975-6179",user_email:"woowakgood@naver.com",user_password:"3715",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:81372931,user_name:"goodboykris",user_age:26,user_tel:"010-1546-4891",user_email:"goodboykris@naver.com",user_password:"8154",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:741852,user_name:"KBS_Joy",user_age:34,user_tel:"010-1234-1234",user_email:"KBS_Joy@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:458963,user_name:"LIJULIKE",user_age:25,user_tel:"010-5647-7894",user_email:"LIJULIKE@naver.com",user_password:"2222",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:641322,user_name:"Highfiction",user_age:21,user_tel:"010-5648-0057",user_email:"Highfiction@naver.com",user_password:"3333",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:984562,user_name:"Beginagain",user_age:34,user_tel:"010-7489-5587",user_email:"Beginagain@naver.com",user_password:"4444",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:859641,user_name:"G_Movie",user_age:37,user_tel:"010-1122-3344",user_email:"G_Movie@naver.com",user_password:"5555",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:452454,user_name:"workman",user_age:30,user_tel:"010-1546-4780",user_email:"workman@naver.com",user_password:"1234",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:775460,user_name:"sbs_dali",user_age:30,user_tel:"010-1226-4905",user_email:"sbs_dali@naver.com",user_password:"1434",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:125424,user_name:"ootbstudio",user_age:38,user_tel:"010-1226-4905",user_email:"ootbstudio@naver.com",user_password:"8834",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:225002,user_name:"SBSKPOP",user_age:25,user_tel:"010-4872-1655",user_email:"SBSKPOP@naver.com",user_password:"8204",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:2215544,user_name:"SBSANIMAL",user_age:33,user_tel:"010-3264-2585",user_email:"SBSANIMAL@naver.com",user_password:"1212",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]}],cw={LoginUser:JSON.parse(localStorage.getItem("YoutubeLoginUser"))||lw,isLoginUser:JSON.parse(localStorage.getItem("YoutubeIsLoginUser"))||{},isAuth:JSON.parse(localStorage.getItem("YoutubeIsAuth"))||!1},qp=Zc({name:"authSlice",initialState:cw,reducers:{UserLogin(e,t){const{user_email:n,user_password:r}=t.payload,o=e.LoginUser.find(i=>i.user_email===n&&i.user_password===r);o?(e.isAuth=!0,e.isLoginUser=o,localStorage.setItem("YoutubeIsAuth",JSON.stringify(!0)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(o))):(e.isAuth=!1,e.isLoginUser={},localStorage.removeItem("YoutubeIsAuth"),localStorage.removeItem("YoutubeIsLoginUser"))},UserLogout(e){e.isAuth=!1,e.isLoginUser=null,localStorage.removeItem("YoutubeIsAuth"),localStorage.removeItem("YoutubeIsLoginUser")},AddNewUser(e,t){if(t.payload.ip){const n=e.LoginUser.find(r=>r.user_id===t.payload.ip);if(n)e.isLoginUser=n;else{const r={user_id:t.payload.ip,user_search_list:[],Viewing_Record:[]};e.LoginUser.push(r),e.isLoginUser=r}}else{const n={user_id:Math.floor(Math.random()*1e6),...t.payload,user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]};e.LoginUser.push(n),e.isLoginUser=n,e.isAuth=!0}localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)),localStorage.setItem("YoutubeIsAuth",JSON.stringify(e.isAuth)),localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser))},IsAddList(e,t){const{user_id:n,type:r,movie:o}=t.payload,i=e.LoginUser.find(s=>s.user_id===n);if(i&&i[r]){const s=i[r].findIndex(a=>a.movie_id===o.movie_id);s!==-1&&i[r].splice(s,1),i[r].push(o),i[r].sort((a,c)=>new Date(c.movie_date.year,c.movie_date.month-1,c.movie_date.day)-new Date(a.movie_date.year,a.movie_date.month-1,a.movie_date.day)),e.isLoginUser=i}localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},IsDelList(e,t){const{user_id:n,type:r,movie:o}=t.payload,i=e.LoginUser.find(s=>s.user_id===n);i&&(i[r]=i[r].filter(s=>s.movie_id!==o.movie_id)),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},AllDelList(e,t){const{user_id:n,type:r}=t.payload,o=e.LoginUser.find(i=>i.user_id===n);o&&(o[r]=[]),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},AddNewSearchList(e,t){const{user_id:n,search:r}=t.payload,o=e.LoginUser.find(i=>i.user_id===n);if(o&&!o.user_search_list.some(s=>s.search===r)){const s={search_id:Math.floor(Math.random()*1e6),search:r};o.user_search_list.unshift(s),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))}},DelSearchList(e,t){const{user_id:n,search:r}=t.payload,o=e.LoginUser.find(i=>i.user_id===n);o&&(o.user_search_list=o.user_search_list.filter(i=>i.search!==r),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)))},AddNewSubscription(e,t){var i;const{user_id:n,channel_id:r}=t.payload,o=e.LoginUser.find(s=>s.user_id===n);o&&((i=o.Subscription_Id)!=null&&i.includes(r)||o.Subscription_Id.push(r),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)))},DelSubscription(e,t){const{user_id:n,channel_id:r}=t.payload,o=e.LoginUser.find(i=>i.user_id===n);o.Subscription_Id=o.Subscription_Id.filter(i=>i!==r),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))}}}),{UserLogin:Wp,UserLogout:uw,AddNewUser:Vp,IsAddList:tu,AllDelList:dw,IsDelList:nu,AddNewSearchList:mw,DelSearchList:fw,AddNewSubscription:hw,DelSubscription:pw}=qp.actions,vw=qp.reducer,gw=({setIsShown:e,isShown:t,search:n,setSearch:r})=>{const o=W(),i=re(),s=R(c=>c.auth.isLoginUser),a=c=>{c.preventDefault(),n&&(i(mw({user_id:s.user_id,search:n})),o(`/movies/${n}`),r(""))};return l.jsxs("form",{onSubmit:a,className:"search-box",onClick:()=>e(!t),children:[l.jsx("input",{type:"text",name:"search",id:"search",placeholder:"검색",value:n,onChange:c=>{r(c.target.value)}}),l.jsx("button",{type:"submit",className:"search-btn",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg",alt:"search"})})]})},_w=B.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    padding: 0.6rem 0.8%;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: #dddd;
    }
    .account-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1rem;
    }
    .login-btn {
        font-size: 1.4rem;
    }
    @media ${Ce.mobile} {
        display: none;
    }
`,yw=B.ul`
    position: absolute;
    left: -18rem;
    top: 4rem;
    padding: 1rem 0;
    z-index: 999;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    width: 100%;
    min-width: 22rem;
    overflow: hidden;
    li {
        display: flex;
        align-items: center;
        padding: 0.6rem 1.6rem;
        cursor: pointer;
        font-size: 1.4rem;
        color: #333;
        &:hover {
            background-color: #f0f0f0;
        }
        img {
            margin-right: 0.8rem;
        }
    }
`,ww=()=>{const{isAuth:e,isLoginUser:t}=R(i=>i.auth),n=W(),r=re(),o=i=>{e&&(i==="logout"?(r(uw()),n("/")):i==="studio"?n(`/studio/${t.user_id}/dashboard`):alert("error"))};if(e&&t)return l.jsxs(yw,{children:[l.jsxs("li",{onClick:()=>o("logout"),className:"log-out",children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/logout.svg",alt:"logout"}),"로그아웃"]}),l.jsxs("li",{onClick:()=>o("studio"),className:"studio",children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/119e28bfa00f6df905130034043fd7183cdfc9f3/Icon/YouTube_studio.svg",alt:"studio"}),"Youtube 스튜디오"]})]})},bw=()=>{var i;const{isLoginUser:e}=R(s=>s.auth),[t,n]=A.useState(!1),r=A.useRef(null),o=s=>{r.current&&!r.current.contains(s.target)&&n(!1)};return A.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[]),l.jsxs("div",{className:"user-menu pc",children:[l.jsx("a",{href:"#",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Making_video.svg",alt:"MakingVideo"})}),l.jsx("a",{href:"#",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Notification.svg",alt:"Notification"})}),l.jsx("a",{href:"#",onClick:()=>n(!t),ref:r,children:l.jsxs("span",{className:"user-profile",children:[(i=e==null?void 0:e.user_name)==null?void 0:i.charAt(0),t&&l.jsx(ww,{})]})})]})},ru=()=>{const e=W();return l.jsxs(_w,{className:"login-menu",onClick:()=>e("/login"),children:[l.jsx("div",{className:"account-wrap ",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/Account.svg",alt:"Account"})}),l.jsx("p",{className:"login-btn",children:"로그인"})]})},xw=({isShown:e,setSearch:t,setIsShown:n})=>{const r=W(),o=re(),i=R(u=>u.auth.isLoginUser),s=(i==null?void 0:i.user_search_list)||[],a=u=>{t(u),n(!0),r(`/movies/${u}`)},c=u=>{o(fw({user_id:i.user_id,search:u}))};return s.length>0&&!e&&l.jsx("ul",{className:"search-history",children:s.map(u=>l.jsxs("li",{className:"search-item",onClick:()=>a(u.search),children:[l.jsxs("p",{className:"search-keyword",children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg",alt:"search"}),u.search]}),l.jsx("button",{className:"history-btn",onClick:d=>{d.stopPropagation(),c(u.search)},children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Close_Btn.svg",alt:"close-btn",className:"close-btn"})})]},u.search_id))})},$p=()=>{const{isAuth:e}=R(c=>c.auth),[t,n]=A.useState(!0),[r,o]=A.useState(""),{Search:i}=At(),s=A.useRef(null),a=c=>{s.current&&!s.current.contains(c.target)&&n(!0)};return A.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[]),l.jsx(Ky,{id:"header",ref:s,children:l.jsxs("div",{className:"top",children:[l.jsxs("div",{className:"first-box",children:[l.jsx(sw,{}),l.jsx(aw,{})]}),l.jsx(gw,{isShown:t,setIsShown:n,search:r,setSearch:o}),l.jsx(xw,{Search:i,isShown:t,setSearch:o,setIsShown:n}),e?l.jsx(bw,{}):l.jsx(ru,{})]})})},rs={Home:[{id:1029844,name:"홈",type:"Home",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Home_menu.svg"},{id:74589232,name:"Shorts",type:"Shorts",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Shorts_menu.svg"},{id:46089394,name:"구독",type:"Subscription",nav:"/subscription",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Subscription_menu.svg"},{id:480234704,name:"YouTube Music",type:"Music",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_Music_menu.svg"}],MyPage:[{id:35329104,name:"시청 기록",type:"Viewing_Record",nav:"/feed/Viewing_Record",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/viewing_record.svg"},{id:3290384132,name:"재생 목록",type:"Playlist",nav:"/feed/Playlist",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Play_list.svg"},{id:4390684386,name:"내 동영상",type:"MyVideo",nav:"/dashboard",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/My_video.svg"},{id:56905630,name:"나중에 볼 동영상",type:"Later_Watch",nav:"/feed/Later_Watch",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/later_on.svg"},{id:3249320423,name:"좋아요 표시한 동영상",type:"like_Movie_List",nav:"/feed/like_Movie_List",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Like_list.svg"},{id:896773,name:"오프라인 저장 동영상",type:"Download_List",nav:"/feed/Download_List",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Download.svg"}],SearchCategory:[{id:2252043583,name:"인기 급상승",type:"popularity",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/popularity.svg"},{id:43968339,name:"쇼핑",type:"shopping",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Shopping.svg"},{id:54907840,name:"음악",type:"music",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Music.svg"},{id:5604365436,name:"영화",type:"movies",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Movies.svg"},{id:592122126,name:"실시간",type:"realtime",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Real-time.svg"},{id:3683823,name:"게임",type:"game",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Game.svg"},{id:694684594,name:"스포츠",type:"Sports",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Sports.svg"},{id:89065962,name:"학습 프로그램",type:"learningprogram",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/learning_program.svg"},{id:8054963,name:"팟캐스트",type:"podcasts",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Podcasts.svg"}]},Co=({id:e,name:t,type:n,nav:r,icon:o})=>{const i=W(),{isLoginUser:s}=R(c=>c.auth),a=()=>{i(n==="MyVideo"||n==="Dashboard"||n==="Content"||n==="Comment"||n==="VideoUpload"?`/studio/${s.user_id}${r}`:r)};return l.jsxs("li",{onClick:a,children:[l.jsx("img",{src:o,alt:n}),l.jsx("span",{className:"name",children:t})]})},Sw=()=>l.jsx("ul",{children:rs.Home.map(e=>l.jsx(Co,{...e},e.id))}),Aw=()=>{const{isAuth:e}=R(t=>t.auth);return l.jsxs("ul",{children:[l.jsxs("p",{className:"menu-title",children:["내 페이지"," ",l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Right.svg",alt:"right"})]}),e?rs.MyPage.map(t=>l.jsx(Co,{...t},t.id)):rs.MyPage.filter(t=>t.type!=="Download_List"&&t.type!=="like_Movie_List"&&t.type!=="Playlist"&&t.type!=="Later_Watch").map(t=>l.jsx(Co,{...t},t.id))]})},Cw=()=>l.jsxs("ul",{children:[l.jsx("p",{className:"menu-title",children:"탐색"}),rs.SearchCategory.map(e=>l.jsx(Co,{...e},e.id))]}),kw=()=>{const{Channel:e}=R(i=>i.channel),{isAuth:t,isLoginUser:n}=R(i=>i.auth),r=W(),o=Object.values(e).filter(i=>{var s;return(s=n==null?void 0:n.Subscription_Id)==null?void 0:s.includes(i.channel_id)});return l.jsxs("ul",{className:"subscription-wrap",children:[l.jsx("p",{className:"menu-title",children:"구독"}),t?o.map(i=>l.jsxs("li",{className:"thisChannel-item",onClick:()=>{var s;return r(`/channel/${((s=i.Movies[0])==null?void 0:s.movie_channel)||i.channel_nav}`)},children:[l.jsx("img",{src:i.channel_image,alt:i.channel_name}),l.jsx("span",{className:"name",children:i.channel_name})]},i.channel_id)):l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"not-login-span",children:"로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다."}),l.jsx(ru,{})]})]})},jw=()=>l.jsxs(Sp,{className:"pc",children:[l.jsx(Sw,{}),l.jsx(Aw,{}),l.jsx(kw,{}),l.jsx(Cw,{}),l.jsx("ul",{children:l.jsx("p",{className:"footer",children:"© 2024 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다."})})]}),Ew=()=>{const{isSideMenu:e}=R(n=>n.header),{pathname:t}=Po();return A.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),l.jsxs(Gy,{children:[l.jsx($p,{}),l.jsxs("div",{className:"content-wrap",children:[e&&l.jsx(jw,{}),l.jsx(Xh,{})]})]})},Nw=[{id:350982352,name:"대시보드",type:"Dashboard",nav:"/dashboard",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAPpJREFUaEPtWEEOwjAM834GL0O8DH4GFAkJlWpRwDHr5F56WOfFTpy2WzD5WCaPHybw7ww6A1vOwAHACUCbM+MK4Px4r83vg433xF4rocsXwb8CbsEfOwJsvJDALSP7YG0vDhvPBKIEOQOdQkO/rpmYXbNsPHvAHogUsAeSCvXLd9dGpz9KyA9zJX37x7L8eF25kbFjl29kJjBSQHmhkZuY/UF5G2XXbElXU/5WMYGsiacvIbaJ5SXE7hpyAuwPsvHkRwkTyHYhtmJsPJdQtE/s7k7sEsqamL2RsfFCE7OPEmy8kEBk0k08V94HSgibQImsCVBnICFWydI7IJtYMWeTFLgAAAAASUVORK5CYII="},{id:51294102,name:"동영상 업로드",type:"VideoUpload",nav:"/videoupload",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAU1JREFUaEPtWNsNwjAMdDeDyYDJYDPoSbXUVnm5jpsaOV9I1I7vzo8kEzlfk/P4KQCMVjAUCAWUDEQKKQlUm/+tAjcieiz04Lf1es0bPI9sklPge8RZB5s7EX0kflIAwASzL/HV41sEDxDNKwVgFPsI2gSAdaHvCSvth+zY1EqLAlcB8J4VQkPZxNMTgITJdY7X7Lgjcjd0BQBBg/n1cgMg1w1dACi18ssDQCstTf/LA6gNMTUA7aDbdz6pvwAgZWyfEqFAdigsf9QmY67IetmZF7E1AFxuSsd5dRFbA0CArgcZM+z6KMEqp0C4SKF1mp52nK51D23tsBpmClgDgP+mKyVf3Y4GpLUTXWFTH48EIH7gSgFIXeO0rLbai9iH09oTxhkPXPwSB/ZFr3I1AK2sDf1OLNnQaBObB4DRioQCoYCSgUghJYFqc/cK/ABFEVUxJ47WSgAAAABJRU5ErkJggg=="},{id:2092345023,name:"콘텐츠",type:"Content",nav:"/content",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAATlJREFUaEPtmGEOwjAIhdnN9GTqyfRmWpJtce0qhQm0Sn+ZtA6+91rWMcHgYxo8fwgAbwelDpwA4DInj7+1xy0FuO4FkQI8tTOuPP8MAI/3OQkAKrGob82BySPEOiQAXupj0ioAEhE4zuWCbeJJgn98ICezxrUBkAv1tw5IwbvZQgEw72W3KmTmABWImq9VR5X/7b0HqEDU/PAAR68auajsKkQpzJ1vfOFW72cBwLI0XbWH30LDH+IAyBQwP8ThQDiQKcAto9wXF7W+mzNAJSo6O5aXuQBo/aChLmv31GCy6IfWHCO/yHoGKJq8kjOA6qMLHqPIVwKwJG7V5F260aj+pjONiRwB8HCgiBkA3jb8pAPWdV7S4q92AHBieADrOv91B6zrvBqAd4Fpin+IvimC8qIAUBaYfPwLQhdrMcO6YW4AAAAASUVORK5CYII="},{id:2305932021,name:"댓글",type:"Comment",nav:"/comment",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAS5JREFUaEPtWdEOgjAMLH+mX6b+GX+mNnEGRkfadaRdcnsykY273u0GZaHJxzI5fgKBaAVbCtyI6PEDx7+jx+sL4CmBaBF4RyNu3P9OROv2P4kAMy3Vz8aDwTOJ/5AIZK0+g+4iEJ1UdUF3eDQKgIBzI0EBWCirhUbHrfZQHZZCIFBZCwqUgpzmrnND9kzHOYBzoMc3mzmXWag3Rq2KgoA2n7VOgQLWV0prxbRKaK+7bA9oAXivAwFYyOkhWKi2UHTnzvVGFg3+0OTVNrZKtzq6U33AqyHArCObvaUbzTh2nWkOBw0BKUR4IXFBZ+KYp/cQaH5sMN99wAQrgVTgLRZKY5laNI0C6apueZxODf7MQmkto7EQn7biJ80BoTF8iehHZTchEHCX0LnA9Ap8AFRvXTEkWgnRAAAAAElFTkSuQmCC"}],Lw=()=>l.jsx("ul",{className:"studiomenu-list",children:Nw.map(e=>l.jsx(Co,{...e},e.id))}),Iw=()=>{const{Channel:e}=R(r=>r.channel),{isLoginUser:t}=R(r=>r.auth),n=Object.values(e).find(r=>r.channel_id===Number(t.user_id));return l.jsxs(Sp,{children:[n&&l.jsxs("div",{className:"channel",children:[l.jsx("div",{className:"channel-img-wrap",children:l.jsx("img",{src:n.channel_image,alt:n.channel_name})}),l.jsxs("div",{className:"channel-name",children:[l.jsx("p",{className:"my-channel",children:"내 채널"}),l.jsx("p",{className:"my-channel-name",children:n.channel_name})]})]}),l.jsx(Lw,{})]})},Pw=()=>{const{isSideMenu:e}=R(r=>r.header),{isAuth:t}=R(r=>r.auth),n=W();if(A.useEffect(()=>{t||n("/login")},[]),t)return l.jsxs(Yy,{children:[l.jsx($p,{}),l.jsxs("div",{className:"content-wrap",children:[e&&l.jsx(Iw,{}),l.jsx(Xh,{})]})]})},os=()=>l.jsx(Xy,{children:l.jsx("div",{className:"spinner","aria-label":"spinner-icon",children:l.jsx("div",{className:"spinner-circle"})})}),Rw=()=>{const e=W();return A.useEffect(()=>{setTimeout(()=>{e("/")},3e3)},[]),l.jsxs(Jy,{children:[l.jsx("p",{className:"not",children:"잘못된 접근 입니다."}),l.jsx(os,{})]})},Ow=B.ul`
    max-height: 24rem;
    .subscribers {
        font-size: 1.4rem;
        color: #666;
    }
    .subscribers-count {
        font-size: 4rem;
    }
`,Bw=B.ul`
    max-height: 46rem;
`,Tw=B.li`
    display: flex;
    max-width: 40rem;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 2%;
    .comment-text-wrap {
        width: 75%;
        margin-right: 5%;
    }
    .comment-img-wrap {
        width: 20%;
        img {
            width: 100%;
        }
    }
    .user-profile {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2%;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        font-size: 1.2rem;
        background-color: ${({userColor:e})=>e||"var(--youtube-red)"};
        color: #fff;
    }
    .comment_body {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 1.4rem;
        max-width: 80rem;
    }
    .user {
        display: flex;
        align-items: center;
        margin-bottom: 1%;
        color: #666;
        font-size: 1.2rem;
    }
    .comment_title-wrap {
        display: none;
        font-size: 1.2rem;
        width: 20rem;
        margin-left: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.6rem; /* 한 줄의 높이 설정 */
        max-height: 3.2rem; /* 두 줄의 높이에 맞추어 설정 */
    }
`,Mw=B.ul`
    .movie-list {
        width: 100%;
        min-width: 46rem;
        .video-loder {
            width: 100%;
            display: flex;
            .video-wrap {
                width: 100%;
                max-width: 20rem;
                padding-bottom: 24%;
                margin-right: 5%;
            }
            .channel-logo {
                display: none;
            }
            .plus-menu {
                display: none;
            }
            .movie_title {
                padding-right: 0;
                max-width: 30rem;
            }
            .text-wrap {
                max-width: 22rem;
            }
        }
    }
`,Fw=B.div`
    width: 100%;
    .comment-nav-bar {
        width: 100%;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        padding: 0 4rem;
        .comment-tab {
            padding: 1.4rem;
            display: inline-block;
            cursor: pointer;
            position: relative;
            &::after {
                content: '';
                width: 100%;
                height: 0.2rem;
                background-color: #000;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
    }
    .comment-list {
        width: 100%;
        .comment-item {
            max-width: 100%;
            border-bottom: 1px solid #ddd;
            margin-bottom: 0;
            box-sizing: border-box;
            padding: 1%;
            .user-profile {
                margin-right: 1rem;
            }
            .comment-img-wrap {
                max-width: 16rem;
                img {
                    height: 100%;
                }
            }
            .comment_title-wrap {
                display: -webkit-box;
            }
        }
    }
`,Dw=B.div`
    width: 100%;
    .del-menu {
        background-color: #212121;
        width: 100%;
        height: 0;
        display: flex;
        align-items: center;
        color: #fafafa;
        box-sizing: border-box;
        padding: 0 4rem;
        p {
            font-weight: 400;
            font-size: 1.4rem;
        }
        .selectedMovies-length {
            margin-right: 4rem;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                width: 0.1rem;
                height: 100%;
                right: -2rem;
                top: 0;
                background-color: #fafafa;
                opacity: 0.2;
            }
        }
        .del-btn {
            cursor: pointer;
            padding: 0 1rem;
            text-align: center;
            transition: all 0.2s;
            &:hover {
                background-color: #424242;
            }
        }
        overflow: hidden;
        transition: all 0.2s;
        &.active {
            height: 6rem;
        }
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 1.2rem;
    }
    thead th {
        color: #666;
        font-weight: bold;
        padding: 1.2rem;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        text-align: left;
    }
    tbody td {
        padding: 1rem;
        border-bottom: 1px solid #ddd;
        color: #555;
        vertical-align: top;
        &:first-child {
            width: 3rem;
        }
        &.movie_video {
            min-width: 8rem;
        }
        &.movie_info {
            max-width: 24rem;
        }
        .movie_body {
            max-width: 40rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #999;
        }
    }
    .video-loder {
        .video-wrap {
            margin: 0;
        }
        .text-wrap {
            display: none;
        }
    }
`,Uw=B.div`
    width: 100%;
    min-height: 100vh;
    .upload-form {
        max-width: 140rem;
        box-sizing: border-box;
        padding: 0 2%;
        > p {
            margin-bottom: 2%;
        }
        label {
            display: block;
            font-size: 1.4rem;
            color: #999;
        }
        .movie_title,
        .movie_body,
        .movie_category {
            width: 100%;
            padding: 1rem;
            box-sizing: border-box;
            border-radius: 1rem;
            border: 1px solid #333;
            font-size: 1.6rem;
            color: #666;
        }
        .movie_category {
            max-width: 40rem;
        }
        .video-wrap,
        .img-wrap {
            margin: 1% 0;
            img {
                max-height: 40rem;
            }
            video {
                max-height: 40rem;
            }
        }
        button {
            background-color: #000;
            color: #fafafa;
            &:hover {
                background-color: #212121;
            }
        }
    }
`,Hp=({comment:e,thisChannel:t})=>{const n=t.Movies.find(s=>s.movie_comments.find(a=>a.comment_id===e.comment_id)),r=W(),o=["var(--youtube-red)","skyblue","green","orange","pink"],i=o[Math.floor(Math.random()*o.length)];return l.jsxs(Tw,{className:"comment-item",onClick:()=>r(`/watch/${n.movie_id}`),userColor:i,children:[l.jsxs("div",{className:"comment-text-wrap",children:[l.jsxs("div",{className:"user",children:[l.jsx("span",{className:"user-profile",children:e.comment_user_name.charAt(0)}),l.jsxs("span",{className:"comment_user_name",children:["@",e.comment_user_name]})]}),l.jsx("p",{className:"comment_body",children:e.comment_body})]}),l.jsx("div",{className:"comment-img-wrap",children:l.jsx("img",{src:n.movie_image,alt:"Movie-image"})}),l.jsx("div",{className:"comment_title-wrap",children:n.movie_title})]})},zw=()=>{const{User_ID:e}=At(),{Channel:t}=R(s=>s.channel),{isAuth:n}=R(s=>s.auth),r=Object.values(t).find(s=>s.channel_id===Number(e)),o=r.Movies.flatMap(s=>s.movie_comments),i=W();return A.useEffect(()=>{n||i("/")},[n]),l.jsx(Fw,{children:l.jsxs("div",{className:"inner",children:[l.jsx("h2",{className:"studio-title",children:"채널 댓글"}),l.jsx("div",{className:"comment-nav-bar",children:l.jsx("p",{className:"comment-tab",children:"댓글"})}),l.jsx("ul",{className:"comment-list",children:o.map(s=>l.jsx(Hp,{comment:s,thisChannel:r},s.comment_id))})]})})},qw=B.li`
    cursor: pointer;
    width: 100%;
    .video-wrap {
        width: 100%;
        padding-bottom: 56%;
        position: relative;
        margin-bottom: 1rem;
        border-radius: 1rem;
        overflow: hidden;
        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        iframe,
        video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
    .text-wrap {
        position: relative;
        display: flex;
    }
    .channel-logo {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-right: 1rem;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .movie_title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        box-sizing: border-box;
        padding-right: 2.5rem;
    }
    .movie_body {
        display: none;
        font-size: 1.2rem;
        color: #999;
    }
    .movie_like_count,
    .channel_name {
        font-size: 1.4rem;
        color: #666;
    }
    .channel_name {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 70%;
    }
    .movie_date {
        margin-left: 1rem;
    }
    .movie_info {
        width: 100%;
        margin-bottom: 1%;
    }
    .close-menu {
        display: none;
        cursor: pointer;
    }
    .plus-menu {
        position: absolute;
        top: 0;
        right: 0;

        img {
            position: relative;
        }
    }
    .mobile_movie_like_count,
    .mobile_movie_date,
    .mobile_channel_name {
        display: none;
    }
    @media ${Ce.mobile} {
        .video-wrap {
            border-radius: 0;
        }
        .text-wrap {
            padding: 0 1.6rem;
            .channel-logo {
                margin-top: 0.6rem;
                width: 4rem;
                height: 4rem;
                margin-right: 2rem;
            }
            .movie_info {
                .movie_title {
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-bottom: -1rem;
                    font-size: 2rem;
                }
                .mobile {
                    width: 100%;
                    display: flex;
                    color: #666;
                    .mobile_movie_like_count {
                        display: block;
                        margin-right: 1rem;
                        position: relative;
                        .mobile_movie_date {
                            display: inline-block;
                            margin-left: 1rem;
                            position: relative;
                            &::after {
                                content: '';
                                display: block;
                                position: absolute;
                                left: -0.6rem;
                                top: 50%;
                                transform: translateY(-50%);
                                width: 0.2rem;
                                height: 0.2rem;
                                border-radius: 50%;
                                background: #666;
                            }
                        }
                    }
                    .mobile_channel_name {
                        display: block;
                        margin-right: 1rem;
                        position: relative;
                        &::after {
                            content: '';
                            display: block;
                            position: absolute;
                            right: -0.5rem;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 0.2rem;
                            height: 0.2rem;
                            border-radius: 50%;
                            background: #666;
                        }
                    }
                }
                .channel_name,
                .movie_like_count {
                    display: none;
                }
            }
        }
    }
`,Ww=[{id:76165159843,falseName:"나중에 볼 동영상 저장",trueName:"나중에 볼 동영상 삭제",type:"Later_Watch",img:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/later_on.svg"},{id:23165165165,falseName:"재생목록 저장",trueName:"재생목록 삭제",type:"Playlist",img:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/save.svg.svg"},{id:86651890151,falseName:"오프라인 저장",trueName:"오프라인 동영상 삭제",type:"Download_List",SaveType:!1,falseImg:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Download.svg",trueImg:"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg"}],Vw=B.ul`
  padding: 1rem 0;
  position: absolute;
  top: 3rem;
  right: -400%;
  z-index: 500;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  width: 100%;
  min-width: 22rem;
  overflow: hidden;
  &:nth-of-type(5) {
    right: 0;
  }
  .save-item {
    display: flex;
    align-items: center;
    padding: 0.6rem 1.6rem;
    cursor: pointer;
    font-size: 1.4rem;
    &:hover {
      background-color: #f0f0f0;
    }
    img {
      margin-right: 0.8rem;
    }
  }
`,$w=B.div`
  border: 1px solid #000;
  position: fixed;
  bottom: 5rem;
  left: ${e=>e.left};
  padding: 1rem 1.6rem;
  border-radius: 1rem;
  background: #000;
  color: #fff;
`,Zd=({title:e,left:t})=>l.jsx($w,{left:t,children:l.jsxs("p",{children:[e,"되었습니다."]})}),Hw=({save:e,movie:t})=>{const{type:n,img:r,falseName:o,trueName:i,falseImg:s,trueImg:a}=e,{isSideMenu:c}=R(b=>b.header),{isLoginUser:u,isAuth:d}=R(b=>b.auth),[m,v]=A.useState(!1),[_,g]=A.useState(null),y=re(),w=W(),[p,f]=A.useState(!1),h=b=>{b.stopPropagation(),b.preventDefault(),d||w("/login"),p?(y(nu({user_id:u.user_id,type:n,movie:t})),g(i),v(!0)):(y(tu({user_id:u.user_id,type:n,movie:t})),g(o),v(!0))};return A.useEffect(()=>{var b;(b=u[n])!=null&&b.find(C=>C.movie_id===t.movie_id)?f(!0):f(!1)},[n,y,h]),A.useEffect(()=>{setTimeout(()=>{v(!1)},3e3)},[m]),n!=="Download_List"?l.jsxs("li",{className:"save-item",onClick:h,style:{},children:[l.jsx("img",{src:r,alt:p?i:o}),p?i:o,m?l.jsx(Zd,{title:_,left:c?"28rem":" 5rem"}):null]}):l.jsxs("li",{className:"save-item",onClick:h,children:[l.jsx("img",{src:p?a:s,alt:p?i:o}),p?i:o,m?l.jsx(Zd,{title:_,left:c?"28rem":" 5rem"}):null]})},Kw=({movie:e})=>l.jsx(Vw,{className:"save-list",children:Ww.map(t=>l.jsx(Hw,{save:t,movie:e},t.id))}),Ie=({movie:e,type:t})=>{const{movie_id:n,movie_title:r,movie_image:o,movie_video:i,movie_like_count:s,movie_date:a,movie_channel:c,movie_video_type:u,movie_body:d}=e,{Channel:m}=R(L=>L.channel),{isSideMenu:v}=R(L=>L.header),{isLoginUser:_}=R(L=>L.auth),[g,y]=A.useState(!1),w=re(),p=L=>{if(L>=1e4)return Math.floor(L/1e4)+"만회";if(L>=1e3)return Math.floor(L/1e3)+"천회";if(L<=1e3)return L+"회"},f=L=>{L.stopPropagation(),w(nu({user_id:_.user_id,type:t,movie:e}))},h=W(),[b,C]=A.useState(!1),k=L=>{L.stopPropagation(),C(!b)},x=A.useRef(null),j=L=>{x.current&&!x.current.contains(L.target)&&C(!1)};return A.useEffect(()=>(document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}),[]),l.jsxs(qw,{onClick:()=>{h(`/watch/${n}`),v&&w(eu())},className:"video-loder",children:[l.jsx("div",{className:"video-wrap",onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:g?u!=="video"?l.jsx("iframe",{src:i+"&controls=0",title:r,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",autoPlay:"1"}):l.jsx("video",{autoPlay:!0,muted:!0,src:i}):l.jsx("img",{src:o,alt:r})}),l.jsxs("div",{className:"text-wrap",children:[l.jsx("div",{className:"channel-logo",children:l.jsx("img",{src:m[c].channel_image,alt:""})}),l.jsxs("div",{className:"movie_info",children:[l.jsx("p",{className:"movie_title",children:r}),l.jsx("p",{className:"channel_name",children:m[c].channel_name}),l.jsxs("div",{className:"mobile",children:[l.jsx("p",{className:"mobile_channel_name",children:m[c].channel_name}),l.jsxs("p",{className:"mobile_movie_like_count",children:["조회수 ",p(s),l.jsxs("span",{className:"mobile_movie_date",children:[a.year,".",a.month,".",a.day]})]})]}),l.jsxs("p",{className:"movie_like_count",children:["조회수 ",p(s),l.jsxs("span",{className:"movie_date",children:[a.year,".",a.month,".",a.day]})]}),l.jsx("p",{className:"movie_body",children:d})]}),l.jsx("div",{className:"close-menu",onClick:f,children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Close_Btn.svg",alt:"close-menu"})}),l.jsxs("div",{className:"plus-menu",ref:x,children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/See_more.svg",alt:"pluse-menu",onClick:k}),b&&l.jsx(Kw,{movie:e})]})]})]})},Gw={KBS_Joy:{channel_id:741852,channel_name:"KBS Joy",channel_nav:"KBS_Joy",channel_banner:"https://yt3.googleusercontent.com/mB8n4aqavnr5nGV5P7UH67hZd2qRYTJ5sCnXVqNIxFMX8NNQ26iyoztz-zfpUj7Nx6Vtp7_WEg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/wNoNXmOpkCgBiPmx8pusWVLDeXIADKo1MhiYz22JBdpVxzCFII7kbZ9g8ihRh1oRszvrvwetgw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"KBS Joy 공식 채널입니다.",channel_subscribers:117e4,Movies:[{movie_id:5961259,movie_title:"피할 수 없는 운명.. 귀신(鬼神) 보는 남자👻 (소름주의) [무엇이든 물어보살]",movie_body:"그의 눈앞에 시도 때도 없이 나타난다는 귀신들!독실한 크리스천이지만 신묘한 능력 덕분에 모르는 사람들까지 점 봐달라고 찾아온다는데..",movie_image:"https://i.ytimg.com/vi/j-rZqBXHIic/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc5a2AFFlDSZ1NnUBbw6obVrfkKw",movie_video:"https://www.youtube.com/embed/j-rZqBXHIic?si=m8lX6Aec3_QXyyZh&autoplay=1&mute=1",movie_like_count:91e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:11,day:18},movie_comments:[{comment_id:943854943,comment_body:"공부안하고 딴짓할때 수호령이 뒤통수 때려줬음 좋겠다..",comment_user_id:"test",comment_user_name:"ino-zk3go"}]},{movie_id:58709456945,movie_title:"유명한 엄마를 둔 딸의 흔한 고민 [무엇이든 물어보살]",movie_body:"엄마가 유명해서 불편해요 SNS 중독 엄마와 팩트폭격기 딸의 한 치 양보 없는 썰전! ",movie_image:"https://i.ytimg.com/vi/pxPADFCRFY4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNtOffVDGsBO3Z0_nOhVcFH7FQoA",movie_video:"https://www.youtube.com/embed/pxPADFCRFY4?si=IeVxx9gJUd6fQE-p&autoplay=1&mute=1",movie_like_count:48e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:5,day:28},movie_comments:[{comment_id:456852,comment_body:"부모님이 유명해서 고민돼요라고 나오려면 철구 딸은 돼야할 것 같은데 ㅋㅋㅋ 이쯤되면 ㄹㅇ 인생이 고민될만하지",comment_user_id:"test",comment_user_name:"Frog27beat"}]},{movie_id:32905203,movie_title:"행복한 삶을 꿈꾸는 투렛 증후군 환자, '인생을 어떻게 살아가야 할까요..' [무엇이든 물어보살]",movie_body:"행복한 삶을 꿈꾸는 #투렛증후군 환자의 고백",movie_image:"https://i.ytimg.com/vi/eAXN1C0dLe8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_AOTsQpOpjh0Wu_JfwMY1jKFaw",movie_video:"https://www.youtube.com/embed/eAXN1C0dLe8?si=K1gkasXQmkbjj42S&autoplay=1&mute=1",movie_like_count:14e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2020,month:3,day:23},movie_comments:[{comment_id:748569,comment_body:"현대의학으로 안된다면 우리의 눈이 달라지면됩니다",comment_user_id:"test",comment_user_name:"전현주-j4c"}]},{movie_id:932848,movie_title:"스스로도 풀지 못한.. 진짜 무속인의 마음속 고민 [무엇이든 물어보살]",movie_body:"신빨 최고 신입 보살이 물어보살에 찾아왔다! 스스로도 못 푼 그녀의 마음 속 고민을 풀어 줄 아기동자의 공감 100배 특급 조언!",movie_image:"https://i.ytimg.com/vi/HBpxhWhWpuw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9XoUoh6LstlgHZzMo74_h2zmJSw",movie_video:"https://www.youtube.com/embed/HBpxhWhWpuw?si=rveNvcv3_Qq9D2n8&autoplay=1&mute=1",movie_like_count:53e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:9,day:18},movie_comments:[{comment_id:125869,comment_body:"",comment_user_id:"test",comment_user_name:""}]},{movie_id:8862923,movie_title:"(역대급 고민) '잘못된 만남' 현실판🤦‍♂️ '아내가 20년지기 절친과 바람났습니다...' [무엇이든 물어보살]",movie_body:"'아내가 제 절친과 바람났습니다..' 초보 싱글 대디의 안타까운 고민🤦‍♂️",movie_image:"https://i.ytimg.com/vi/rxIiCI-5hsc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8RrMxr0wxcF8b9PZ61VG5aj5k4g",movie_video:"https://www.youtube.com/embed/rxIiCI-5hsc?si=TBIulhyWK7n7yBDO&autoplay=1&mute=1",movie_like_count:67e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2020,month:3,day:9},movie_comments:[{comment_id:165265,comment_body:"좀 잔인한 얘기지만 아기도 유전자 검사 한번 해 보길..",comment_user_id:"test",comment_user_name:"신사임니당-w2y"}]}]},LIJULIKE:{channel_id:458963,channel_name:"리쥬라이크",channel_nav:"LIJULIKE",channel_banner:"https://yt3.googleusercontent.com/LPYJH3KwfkCifSwsUuVaVFuKi1Uz09HpDLOi11ddXHlVOBh3XwlYSZfJ7UHjiudY3YAWseAU0q4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/pcFLVUDQVSlOjqLjCr3K34RiAvvtj0DGTxbdOzYYqmBnmfKN0vfVRv4FSSJo0X9UnTGEoRcg97U=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"유혜주Vlog",channel_subscribers:85e4,Movies:[{movie_id:586412,movie_title:"[VLOG] 벌써 나온다고??😱 남편 없이 갑작스런 출산!! 생전 처음 겪는 엄청난 고통💦",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/cQb-6mQV-KQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB31OYLvG7ZcTDySJTy1hMsOm2fsA",movie_video:"https://www.youtube.com/embed/cQb-6mQV-KQ?si=jccwNpyuj6FWpXLa&autoplay=1&mute=1",movie_like_count:66e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:3,day:3},movie_comments:[{comment_id:567894,comment_body:"볼때마다 눈물이 주륵주륵…평생 잘할게요",comment_user_id:"test",comment_user_name:"@조땡-r8b"}]},{movie_id:789321,movie_title:"드디어 동생과 내친구의 결혼식 공개해요! (제 축사도..)",movie_body:"드디어 제 동생 현주와 제 친구 태성이의 결혼식을 공개해요 !",movie_image:"https://i.ytimg.com/vi/lWwyGT1BJMA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVHK7saocl61XDD-xZOHlNnf3Byg",movie_video:"https://www.youtube.com/embed/lWwyGT1BJMA?si=ZamdeYRmluFQ4nC7&autoplay=1&mute=1",movie_like_count:17e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2022,month:5,day:9},movie_comments:[{comment_id:853121,comment_body:"경찬님 개웃기다.. 영상 볼때마다 한시도 가만히 있질 않으시네요",comment_user_id:"test",comment_user_name:"user-is7du8lu6x"}]},{movie_id:168997,movie_title:"[VLOG] 처음으로 손자를 보는 어머니, 첫조카를 본 가족의 반응은? l 대가족 특집",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/YaxocJPDMDY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDizKIGKdh_cb5Wc6y6lvY3yUTMQ",movie_video:"https://www.youtube.com/embed/YaxocJPDMDY?si=GvxkGOgBrYlgbQ-q&autoplay=1&mute=1",movie_like_count:26e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:4,day:29},movie_comments:[{comment_id:842112,comment_body:"가족이 많다는 건 정말 행복한 일 같아요 정 넘치는 모습 보기 좋아요 🥰",comment_user_id:"test",comment_user_name:"@옹글몽글-e7j"}]},{movie_id:211666,movie_title:"[드디어 공개] 동생과 내친구가 연애하게된 스토리 ep.1",movie_body:"드디어 제 동생 현주와 제 친구 태성이의 연애스토리를 공개합니다❤️ 오랫동안 기다려주셔서 감사해요☺️",movie_image:"https://i.ytimg.com/vi/nyMZxK2Kvhs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdY3151EqR0c7ZBkdJ17MBXgys7Q",movie_video:"https://www.youtube.com/embed/nyMZxK2Kvhs?si=iJT0KA3RWRV3v5Af&autoplay=1&mute=1",movie_like_count:16e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2021,month:10,day:30},movie_comments:[{comment_id:673212,comment_body:"개재밌다...남의 연애사....",comment_user_id:"test",comment_user_name:"@hermit__crab"}]},{movie_id:167556,movie_title:"[VLOG] 남편과 조리원 첫 입소! 처음으로 안아보는 아들👩‍🍼 (모유수유/회음부통증/출산지원금)",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/MiBlImCwkso/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdLe_OzNOXirgKX86KNW2tM-x8Hw",movie_video:"https://www.youtube.com/embed/gB1EonLy5lQ?si=laMZ9Xj6HLVMjQi6&autoplay=1&mute=1",movie_like_count:29e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:3,day:12},movie_comments:[{comment_id:296747,comment_body:"남편분 든든하다.. 옆에서 저렇게 서류 처리할거나 신청 할것들 알아서 착착해주기만 해도 맘 놓을 수 있을듯..",comment_user_id:"test",comment_user_name:"@_nyong_"}]}]},Highfiction:{channel_id:641322,channel_name:"하이픽션",channel_nav:"Highfiction",channel_banner:"https://yt3.googleusercontent.com/w8XfHLFzmciL0QYoAEwv_CP5qvVRRN5wzIkLfAdgtMNuaNtMrJhkTLX0dC46f5gVHWFaoY4YMg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/TJo2vsrvi2HtumSu8qU9OGvRTM6SOPpNZ9lXxC0vLKasedPX-cMOMJgWpY2rkdTxr_f7k5TIpw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"더 높은 재미를 추구하는 하이픽션 입니다",channel_subscribers:756e3,Movies:[{movie_id:567732,movie_title:"(ep.1~10) 조폭여친과 함께하는 연애스토리",movie_body:"조폭여친 몰아보기편!!! 재밌게 봐주세요~!",movie_image:"https://i.ytimg.com/vi/0WZGu5-gwYY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOMsvUKKlWP9t7Xmg-ifXaViTa2A",movie_video:"https://www.youtube.com/embed/0WZGu5-gwYY?si=S6y8EncMYiq64k_c&autoplay=1&mute=1",movie_like_count:29e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2024,month:3,day:21},movie_comments:[{comment_id:247855,comment_body:"그냥 이쁘기만한게 아니라 볼수록 매력있는 시연님!! 계속 매력적인 작품 기대해봅니다. 화이팅!!",comment_user_id:"test",comment_user_name:"arden-white"}]},{movie_id:135276,movie_title:"나 꼬시고 싶어? [거짓말 없는 세상]",movie_body:"안녕하세요 스톡커입니다 재밌게 봐주세요~!",movie_image:"https://i.ytimg.com/vi/I2so7rnoDEM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUmB5blGdntffbfTHpi4XLhIt7rw",movie_video:"https://www.youtube.com/embed/I2so7rnoDEM?si=rQi-dvnPIdToyATH&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2022,month:7,day:2},movie_comments:[{comment_id:851144,comment_body:"문 열리니까 괜히 와보는 고양이 존나 귀엽다",comment_user_id:"test",comment_user_name:"김김-t2h"}]},{movie_id:875312,movie_title:"숏박스 구독 안 한 새끼 누구냐??",movie_body:"안녕하세요 오늘은 유튜버 똥군기입니다 재밌게 만든 픽션이니까 오해하지말고 재미로 봐주세요~!!",movie_image:"https://i.ytimg.com/vi/MgdXR4vTtxQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEVsOphJ1wTY1BEwoPnqP7_8T1hQ",movie_video:"https://www.youtube.com/embed/MgdXR4vTtxQ?si=GwxbT8ZznAtF1Kxm&autoplay=1&mute=1",movie_like_count:37e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2023,month:6,day:17},movie_comments:[{comment_id:342532,comment_body:"안녕하세요 루키치입니다!!! 말씀 하신대로 채널명 바꿨습니다 선배님…",comment_user_id:"test",comment_user_name:"rookitsch"}]},{movie_id:653112,movie_title:"도망가면 뒤진다?",movie_body:"안녕하세요 하이픽션입니다 오늘도 재밌게 봐주세요!!",movie_image:"https://i.ytimg.com/vi/KpV430uiUkY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7VbGVys7By0hxajhDNZhvqLKVQQ",movie_video:"https://www.youtube.com/embed/KpV430uiUkY?si=F2mGpsPg0Vk6Pt7x&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:"641322",movie_date:{year:2023,month:12,day:5},movie_comments:[{comment_id:642323,comment_body:"그래도 세번 도망칠 용기라도 있네 친구는 ㅋㅋㅋㅋㅋㅋㅋ 이쁜사랑 하세요 ㅋㅋㅋㅋㅋ",comment_user_id:"test",comment_user_name:"AKI-___"}]},{movie_id:325464,movie_title:"또 쳐다보세요 [거짓말 없는 세상]",movie_body:"안녕하세요 스톡커입니다 다시 돌아온 헬스장편 재밌게 봐주세요~!!",movie_image:"https://i.ytimg.com/vi/0cEMl3j2cAU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYsI-7LoLfSCZ6yPl6w-Fwd-ol7Q",movie_video:"https://www.youtube.com/embed/0cEMl3j2cAU?si=kz2G69MhCdpzC4bM&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2022,month:6,day:22},movie_comments:[{comment_id:564223,comment_body:"이거 헬스장에 대형 티비로 틀어나야  한다",comment_user_id:"test",comment_user_name:"짱코씨"}]}]},Beginagain:{channel_id:984562,channel_name:"@begin_again",channel_nav:"Beginagain",channel_banner:"https://yt3.googleusercontent.com/SgYk8-S4UrUAxgTx4Y0wB64PNsENZK0raxLYEiN800OiRSwh6eMozF0Z9YZoday7cZpII8SV=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/FmxZkGyu8p9bBT774Owjr3A2GNfBQofKZi_yBss5bFMvyhP9RJlFTYCrwcvONxQZ6sVvvJjriQ=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"JTBC의 힐링 음악 예능 [비긴어게인] 공식 채널입니다🎵",channel_subscribers:183e4,Movies:[{movie_id:259877,movie_title:"🎤언제 들어도 소름 돋는 이하이(Lee Hi)의 ′Rose🌹♪ 〈비긴어게인 코리아(beginagainkorea)〉 4회",movie_body:"🎤언제 들어도 소름 돋는 이하이의 ′Rose🌹♪",movie_image:"https://i.ytimg.com/vi/cq-A2RJC7fg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHvwfqHd1X24KLdrxSJUYL25xDFg",movie_video:"https://www.youtube.com/embed/cq-A2RJC7fg?si=V1LgeIM39vh5OAml&autoplay=1&mute=1",movie_like_count:26e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:28},movie_comments:[{comment_id:894448,comment_body:"하이는 본인을 이기는구나,, 라이브가 음원을 압살해버리네",comment_user_id:"test",comment_user_name:"조은교-y1g"}]},{movie_id:423411,movie_title:"[ENG] 수현(Su-hyun)x정승환(Jung Seung-hwan)의 ′어떻게 이별까지 사랑하겠어， 널 사랑하는 거지′♪ 〈비긴어게인 코리아(beginagainkorea)〉 1회",movie_body:"이수현x정승환의 ′어떻게 이별까지 사랑하겠어， 널 사랑하는 거지′♪",movie_image:"https://i.ytimg.com/vi/XNGoOqB8380/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyocU3z6aYqzs-BCnoS0vhThrQ_A",movie_video:"https://www.youtube.com/embed/XNGoOqB8380?si=5RsOiKM5D9N9dFNz&autoplay=1&mute=1",movie_like_count:12e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:7},movie_comments:[{comment_id:564221,comment_body:"오빠랑 안불러서 더 감정이 들어가 완벽해졌다는 전설의 라이브 영상",comment_user_id:"test",comment_user_name:"관동이관동이"}]},{movie_id:876543,movie_title:"[ENG] (반전의 반전↗) 이수현x헨리x크러쉬x정승환 ′All For You′♬ 〈비긴어게인 코리아(beginagainkorea)〉 1회",movie_body:"(반전의 반전↗) 이수현x헨리x크러쉬x정승환 ′All For You′♬",movie_image:"https://i.ytimg.com/vi/wEgvCBcfFLI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-Z584pH-XHi9wlU2NMG62MHXYwA",movie_video:"https://www.youtube.com/embed/wEgvCBcfFLI?si=q1O96MbHz3GbFUe5&autoplay=1&mute=1",movie_like_count:24e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:7},movie_comments:[{comment_id:534121,comment_body:"진짜 정승환 목소리가 이수현 목소리 싹 감싸주는 그런느낌 받음",comment_user_id:"test",comment_user_name:"뭐봐일"}]},{movie_id:452431,movie_title:"🎧이수현 Playlist🎧 '심신 안정 보이스' 이수현 노래 모음 ｜ 비긴어게인 모아듣기",movie_body:"🎧비긴어게인 이수현 Playlist🎧",movie_image:"https://i.ytimg.com/vi/STwHSJSA86c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCftOY5ZUPTPthjULKeF-K1kPjTIA",movie_video:"https://www.youtube.com/embed/STwHSJSA86c?si=W3U9NoS5ERACOGH7&autoplay=1&mute=1",movie_like_count:11e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:8,day:6},movie_comments:[{comment_id:98491202,comment_body:"편집자 상줘라",comment_user_id:"test",comment_user_name:"tuna3298"}]},{movie_id:642431,movie_title:"[ENG｜단독 풀버전] 비긴어게인 코리아 '길' ｜ 눈물바다가 된 비긴코 버스킹 현장😢",movie_body:"비긴어게인 코리아 '길' 풀버전 버스킹 현장이 눈물바다가 된 사연은?!",movie_image:"https://i.ytimg.com/vi/YS10Cdaz2Kk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8bhQuomv7G42p44l1WG1TuPsoeg",movie_video:"https://www.youtube.com/embed/YS10Cdaz2Kk?si=1tV2bLLnE1IUEmNN&autoplay=1&mute=1",movie_like_count:29e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2024,month:10,day:28},movie_comments:[{comment_id:432165,comment_body:"저도 한 번만 응원해주세요 죄송합니다..",comment_user_id:"test",comment_user_name:"민석-z4n"}]}]},G_Movie:{channel_id:859641,channel_name:"@지무비",channel_nav:"G_Movie",channel_banner:"https://yt3.googleusercontent.com/YZSsAoZix0DCd0figFc81fktZHrOmvpWg0Se4bspLVD4BLbZH1hsBaPmoG3hlGqlRUxgDovyqg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ytc/AIdro_nLr4j1MqKUus9uB2RADncMRaC__c2D6MKj4x4YbA4IwcU=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"영화&드라마&예능&패션&게임&전자제품&광고를 더 G리게.. 모든 걸 영화처럼..",channel_subscribers:358e4,Movies:[{movie_id:98384321,movie_title:"수갑채워놨는데 남편이 심장마비로 사망하면 벌어지는 대참사",movie_body:"영화 제럴드의게임(2017)입니다",movie_image:"https://i.ytimg.com/vi/2EahotHTVpc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3sfFbsdOHoyNxdvJ0GIg7RiJ6pw",movie_video:"https://www.youtube.com/embed/2EahotHTVpc?si=fng9erydx2hVg_bq&autoplay=1&mute=1",movie_like_count:27e4,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2019,month:3,day:2},movie_comments:[{comment_id:378765,comment_body:"이거 영상 초반만 보고 바로 넷플릭스 드가서 봤는데 진짜 긴장감 쩔고 후반부 소름 장난 아니에요 개무서워요ㅠ퓨 그리고 폰 배터리 없는 설정이라 시리 부르는것두 안댐",comment_user_id:"test",comment_user_name:"cuddly0"}]},{movie_id:989831,movie_title:"'수임료 1000원'인데 '승률 100%'인 전설의 변호사가 주차장 갑질남 차 박살내버린 뒤, 참교육하는 역대 최고로 신박한 방법 ㅋㅋㅋ 《천원짜리 변호사》",movie_body:"드라마 ≪천원짜리 변호사≫, 1화~2화의 내용입니다. 채널 SBS에서 매주 금,토 밤 10시 방영됩니다.",movie_image:"https://i.ytimg.com/vi/yyiox2536C0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnAyfSOlqWJGhw2eRAMWp2MzsOAg",movie_video:"https://www.youtube.com/embed/yyiox2536C0?si=PALxhnFQEsTxm9hi&autoplay=1&mute=1",movie_like_count:11e4,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:9,day:25},movie_comments:[{comment_id:892585,comment_body:"어느 순간부터 남궁민하면 그냥 믿고 보게 됨 작품선정이나 특유의 딕션이랑 연기력이 드라마쪽에선 ㄹㅇ독보적 존재",comment_user_id:"test",comment_user_name:"standstill8152"}]},{movie_id:907429,movie_title:"제목 따위 필요 없는, 내 인생 최고의 드라마 《이태원클라쓰》",movie_body:"드라마, 《이태원클라쓰》 1-4화 소개 영상입니다.",movie_image:"https://i.ytimg.com/vi/P0ikE6tFbas/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1V4ANcuPOrDvWuF3pf0LuZCZ-Ow",movie_video:"https://www.youtube.com/embed/P0ikE6tFbas?si=Dn3uKDy6SES_t03P&autoplay=1&mute=1",movie_like_count:91e3,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:4,day:9},movie_comments:[{comment_id:985234,comment_body:"이태원클라쓰 보고 진짜 아직도 피가 끓는 기분... 열심히 살고자 하는 의지를 계속 일깨워주는 드라마,  진짜 명작이다",comment_user_id:"test",comment_user_name:"vvs7530"}]},{movie_id:215464,movie_title:"퍼스트 클래스탔다고 승무원한테 온갖 진상 다 부리던 손님 옆에 하필 절대 불의를 못참는 자산 3000억 천재 CEO 조승우가 타고 있으면 벌어지는 일 ㅠㅠ",movie_body:"드라마 ≪시지프스≫, 1화~4화의 내용입니다.",movie_image:"https://i.ytimg.com/vi/RIj9IdZvg6M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDtlVjX8Kfc1lGqlbJXNvGZ1T4Og",movie_video:"https://www.youtube.com/embed/RIj9IdZvg6M?si=hPbUY9_bnY3y4BRX&autoplay=1&mute=1",movie_like_count:78e3,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:9,day:24},movie_comments:[{comment_id:214644,comment_body:"세상에서 가장 무서운게'후회' 인데 후회 하기 싫으면 열심히 잘해해주 잘챙겨주면 되는데 현실에서도 그러지를 못함",comment_user_id:"test",comment_user_name:"꼬꼬마-v4h"}]},{movie_id:4809634,movie_title:"하필이면..힘숨찐도 아닌 초숨찐을 건드린 일진들의 최후ㅠ",movie_body:"OCN 오리지널 드라마, ‘경이로운 소문’ 1-2화 내용입니다. 매주 토,일 밤 10시 30분 채널 OCN에서 방영합니다.",movie_image:"https://i.ytimg.com/vi/eJ5U0tuDxKk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzeIKOpDmmjPBJKv_wSjR_CpMd5Q",movie_video:"https://www.youtube.com/embed/eJ5U0tuDxKk?si=Qj0oDz0Rl92Lp-0V&autoplay=1&mute=1",movie_like_count:1e5,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2020,month:12,day:5},movie_comments:[{comment_id:865412,comment_body:"유준상 배우는 나이가 몇인데자기관리 진짜 엄청나신거같음....비쥬얼이나 체력이나 액션씬 같은거보면 30대라고 해도 믿으실듯;;; 레전드",comment_user_id:"test",comment_user_name:"__Uz"}]}]},radiohead:{channel_id:56165156,channel_name:"라디오헤드",channel_nav:"radiohead",channel_banner:"https://yt3.googleusercontent.com/7YJU_BnlYUPHGI1abV2FfjhgizivH6UZpPaMjAdjKWbuy_o_nspoIOhoa82lDA_c38Jfubve=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/iGWTxAf6tokq9e2cVapQL6D1qgbtD-oFkVLqcUGF24WjUwX68qCm-iN4mMqqJEz_4eRSi-EyEQ=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"radiohead.com",channel_subscribers:404e4,Movies:[{movie_id:556151,movie_title:"라디오헤드 - Fake Plastic Trees",movie_body:"‘Fake Plastic Trees’ is taken from ‘The Bends’ out on XL Recordings. Director: Jake Scott Producer: Ellen JacobsonCinematography: Salvatore Totino Production",movie_image:"https://i.ytimg.com/vi/EzcJhJt_vQY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXCg5MA8=&rs=AOn4CLDSe2Z3YNdtCuBYnvoVdDAZTymL3g",movie_video:"https://www.youtube.com/embed/EzcJhJt_vQY?autoplay=1&mute=1",movie_like_count:49e4,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2015,month:1,day:23},movie_comments:[{comment_id:136551,comment_body:`"why did you take so long to buy groceries?" 
                                            me:`,comment_user_id:"miguelrodriguez-pineroriva6713",comment_user_name:"산미구엘"}]},{movie_id:556152,movie_title:"이쯤에서 돌아보는 그들의 발자취 라디오헤드 이야기",movie_body:"‘Lotus Flower’ is taken from ‘The King of Limbs’ out on XL Recordings Director of Photograph: Nick Wood",movie_image:"https://i.ytimg.com/vi/f2fjTisiUDI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/f2fjTisiUDI?autoplay=1&mute=1",movie_like_count:44e4,movie_category:"music",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2023,month:10,day:6},movie_comments:[{comment_id:136552,comment_body:"Hi, my name's Thom Yorke and I'll be your freestyle dance teacher",comment_user_id:"pulllak",comment_user_name:"돼지와함께춤을"}]},{movie_id:556153,movie_title:"라디오헤드 - creep",movie_body:"라디오헤드는 Creep 말고도 좋은 노래가 많다 #라디오헤드 56165156#creep #okcomputer #오아시스 #톰요크 #thesmile #더스마일",movie_image:"https://i.ytimg.com/vi/XFkzRNyygfk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCkbazk73In3wUcMpWdiSNFURE3A",movie_video:"https://www.youtube.com/embed/bthufxQepAk?autoplay=1&mute=1",movie_like_count:57e4,movie_category:"music",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2008,month:10,day:15},movie_comments:[{comment_id:136553,comment_body:"Nice dream을 너무 좋아해요 신비한곡인듯",comment_user_id:"Pre_lude",comment_user_name:"레코너"}]},{movie_id:556154,movie_title:"라디오헤드 라이브 - 2 + 2 = 5",movie_body:"'2 + 2 = 5' is taken from 'Hail to the Thief' out on XL Recordings.",movie_image:"https://i.ytimg.com/vi/11oAXmVdEyQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgKAAvABigIMCAAQARgTICsofzAP&rs=AOn4CLB6QlCofl8Rnkm-zzX0EjscePbHdA",movie_video:"https://www.youtube.com/embed/c6GO7c-zO6E?autoplay=1&mute=1",movie_like_count:9400,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2015,month:1,day:23},movie_comments:[{comment_id:136554,comment_body:"2 + 2 = 140p",comment_user_id:"andreylucass",comment_user_name:"앤디"}]},{movie_id:556155,movie_title:"라디오헤드 라이브 - No Surprises",movie_body:"‘No Surprises’ is taken from ‘OK Computer’ out on XL Recordings",movie_image:"https://i.ytimg.com/vi/u5CVsCnxyXg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSo72rG7nC88JI6Ez5InNKRYqhMw",movie_video:"https://www.youtube.com/embed/a8Yh0mNTBuo?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2021,month:11,day:1},movie_comments:[{comment_id:136555,comment_body:`Thom: drowns
                                           His face: (            -_-             )`,comment_user_id:"mushfiqahmad1783",comment_user_name:"독버섯"}]}]},ultraTasteDiary:{channel_id:6546654,channel_name:"최강록 Ultra Taste Diary",channel_nav:"ultraTasteDiary",channel_banner:"https://yt3.googleusercontent.com/nVk2CWFo_sMLATnX4kvDakcFI7vuAsBKGBEh-V9MzclW1j8HfYKIz-Xowx_UuOdM2bZn2DJ7aw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/vIc-veEiaMx4XJLekuHNtgzM4DiBTXXhHIGRB9JxZHw_WA_tS3qb16Z-FmaYKpjQtU8YUcmK=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"귀찮음과 시간이 만들어내는 예술 비즈니스 : utdcook@gmail.com",channel_subscribers:57e4,Movies:[{movie_id:794541,movie_title:"제모옥은.......고추장…닭날개 쪼림으로 하겠습니다 근데 이제.. 바지를 겨뜨린",movie_body:"8년 이상 지난 이 음식을 기억하고 계신분들께 감사를 드립니다. 진심은... 그냥 그 때 그 순간에 남은 영상으로 떠돌아 다니는게 이 음식을 돋보이게 하는거라 생각했어요. ",movie_image:"https://i.ytimg.com/vi/JdD3OqGRB_Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnkmCZnxlQxrPCSb-PLyPLDsbt8Q",movie_video:"https://www.youtube.com/embed/JdD3OqGRB_Y?autoplay=1&mute=1",movie_like_count:3500,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2021,month:4,day:30},movie_comments:[{comment_id:348941,comment_body:"미소메시드뭐꼬뭐시라카노'도 꼭 만들어주세요ㅠㅠ",comment_user_id:"Mushirakano",comment_user_name:"김소희"}]},{movie_id:794542,movie_title:"최강록이 최강록을 시작하는 이야기",movie_body:"첫편부터 길고 긴 요리영상을 올리기가 좀 그래서 만든 영상. 근데 이제 주성치 팬심을 곁들인.. 휴...",movie_image:"https://i.ytimg.com/vi/ysLaz2YJ2c4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFw5rw__2RGVNup0KFKjUqJXoSqw",movie_video:"https://www.youtube.com/embed/ysLaz2YJ2c4?autoplay=1&mute=1",movie_like_count:9600,movie_category:"talk",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2020,month:9,day:1},movie_comments:[{comment_id:348942,comment_body:"와...조렸다....",comment_user_id:"acdc",comment_user_name:"암참차"}]},{movie_id:794543,movie_title:"Miso Mashed... Mushirakano(미소 매쉬드 포테이토)",movie_body:"#최강록 #UltraTasteDiary #미소 김소희님 헌정",movie_image:"https://i.ytimg.com/vi/A0t58bjx00s/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/A0t58bjx00s?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2021,month:6,day:25},movie_comments:[{comment_id:348943,comment_body:"결국 흑백요리사에도 등장해버린 미소 매쉬드 머시라카노..",comment_user_id:"strongB",comment_user_name:"강한비-s9x"}]},{movie_id:794544,movie_title:"MBTI 무료 성격유형 검사",movie_body:"#최강록 #UTD #mbti",movie_image:"https://i.ytimg.com/vi/deq3zoLUc_U/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/deq3zoLUc_U?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"comedy",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2022,month:9,day:2},movie_comments:[{comment_id:348944,comment_body:"아니 내향형 100프로 처음 봄 ㅋㅋㅋㅋ",comment_user_id:"kimsbl6n",comment_user_name:"김상부-l6n"}]},{movie_id:794545,movie_title:"지금 만나러 갑니다 / 수빙고(하이브리드 아이스)",movie_body:"#최강록 #강레오 #수빙고 #하이브리드아이스 오랜만에 그 분을 만나러 갔습니다.",movie_image:"https://i.ytimg.com/vi/6o4vGCjZ3WI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/6o4vGCjZ3WI?autoplay=1&mute=1",movie_like_count:7600,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2023,month:2,day:3},movie_comments:[{comment_id:348945,comment_body:"강레오..셰프님의 그 쏘는 눈빛 거기에 마주치면 한..6개월씩 늙어요...",comment_user_id:"peterparker",comment_user_name:"파커-u7d"}]}]},suede:{channel_id:96745102,channel_name:"스웨이드",channel_nav:"suede",channel_banner:"https://yt3.googleusercontent.com/iZpbhbFb_GrB1aO_JWSE8-j1tTAP19jxAngN_VSTADyuuqW7UmfMhA_zScznzBTboMN2c8vqV5M=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/UX1nAVaOk_ARxZXQu5uknwTP2JJ3C54dcSWKNjTwoB4Ft8B2v1v4nIVeJCuYWHAYDFd6AxtVjw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"Welcome to the official Suede Youtube channel, the Hub of all of your favourite Suede video's featuring Brett Anderson - such as, 'Beautiful Ones' 'Trash' and 'Animal Nitrate'. Subscribe for stay updates on the latest Music Videos, Interviews and Live footage from Suede.",channel_subscribers:157e3,Movies:[{movie_id:738161,movie_title:"스웨이드 - Life Is Golden (Official Video)",movie_body:"Official video for Life Is Golden, from Suede's 8th studio album 'The Blue Hour'. Filmed on location in Pripyat, Ukraine, near Chernobyl. Directed by Mike Christie.",movie_image:"https://i.ytimg.com/vi/pEJfWrfN15k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6L984WNodmomrig1dFx2SVi2Q7g",movie_video:"https://www.youtube.com/embed/Q9wbVPmUlOw?autoplay=1&mute=1",movie_like_count:17e3,movie_category:"music",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2018,month:8,day:16},movie_comments:[{comment_id:317891,comment_body:"This song is golden",comment_user_id:"hessehessen4334",comment_user_name:"헤헤"}]},{movie_id:738162,movie_title:"스웨이드 - 'She Still Leads Me On' (Live Streamed from Cirque Royal, Brussels)",movie_body:"Suede debut their brand new single ‘She Still Leads Me On’, streaming live on stage at a headline performance in Belgium at Brussels’ Cirque Royal.",movie_image:"https://i.ytimg.com/vi/tfDgLym55Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKy3j6bVSAWAffzphdYR0V3MhkmA",movie_video:"https://www.youtube.com/embed/VvDxY0kInV0?autoplay=1&mute=1",movie_like_count:21e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2022,month:5,day:25},movie_comments:[{comment_id:317892,comment_body:"Great lyrics Brett has definitely wrote this song for his mother who past away when he was just a young man",comment_user_id:"sunstar9709",comment_user_name:"해달별"}]},{movie_id:738163,movie_title:"브렛 앤더슨 93년 스웨덴 인터뷰 (Brett Anderson Interview Sweden, 1993 Kor sub cc)",movie_body:"오랜만에 올리네요 펄프 커먼피플은 계속 번역중인데 제가 게을러서 시간이 꽤 걸릴듯",movie_image:"https://i.ytimg.com/vi/PX6L65xgOzY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5mtz-M8xCkrnltxlGQccViokC-g",movie_video:"https://www.youtube.com/embed/939_uYyZa1A?autoplay=1&mute=1",movie_like_count:1018,movie_category:"interview",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2016,month:12,day:21},movie_comments:[{comment_id:317893,comment_body:"He's so Handsome",comment_user_id:"yorkellic",comment_user_name:"톰요크"}]},{movie_id:738164,movie_title:"스웨이드, 사상 첫 단독 내한 공연 개최🇬🇧 [#위클리팝]",movie_body:"브릿팝의 주역, 스웨이드(Suede)가 8년 만에 한국을 찾습니다. '녹슬지 않는 록 스피릿' 관록이 느껴지는 베테랑 밴드 스웨이드의 내한 공연에 대한 자세한 내용은 영상을 통해 만나보세요🤟",movie_image:"https://i.ytimg.com/vi/Z4J2D9ZNpvI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/Z4J2D9ZNpvI?autoplay=1&mute=1",movie_like_count:3e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2024,month:6,day:13},movie_comments:[{comment_id:317894,comment_body:"저에겐 최고의 공연 이었습니다. 한국에 또 온다는 약속 기다리고 있겠습니다.",comment_user_id:"fajinchan",comment_user_name:"김길환"}]},{movie_id:738165,movie_title:"스웨이드 - she 내한 공연",movie_body:"Suede 스웨이드 - She @ LIVE 라이브 @2013 INCHEON PENTAPORT ROCK FESTIVAl",movie_image:"https://i.ytimg.com/vi/twoO3xYRsz0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVNcO5wAtTuHBa3jadFUsnlzK57A",movie_video:"https://www.youtube.com/embed/V3T6NDalQeU?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2010,month:6,day:16},movie_comments:[{comment_id:317895,comment_body:"우와",comment_user_id:"hippieswave",comment_user_name:"히피"}]}]},woowakgood:{channel_id:41846541,channel_name:"우왁굳",channel_nav:"woowakgood",channel_banner:"https://yt3.googleusercontent.com/eYI-CDr4AXjjnzZv8ERzW-P2u1AQPNNCNDRLxBw1mlIwEjA-BIKUHpdd6dFDD7pjGF7urPZTrA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/vhOEy7Ode6Y8ZN3noHKZua0LMt2n2Z7xfEyfWmzTXwQ6oq59BFyTXnN9AcnksHTYAM1YCzdY=s160-c-k-c0x00ffffff-no-rj",channel_introduction:`아프리카 TV에서 게임방송을 하고 있는 "우왁굳"의 유튜브 채널입니다.
                                   방송에서 재밌었던 장면들, 편집영상, 녹화영상등이 올라옵니다.
                                   영상 업로드 시간 : 매일 새벽중
                                   우왁굳 카카오톡 친구추가 하기 : @우왁굳`,channel_subscribers:172e4,Movies:[{movie_id:314511,movie_title:"편의점 알바하면 찾아오는 진상들이 한 번에 다 온다면? ㅋㅋㅋ",movie_body:"편의점 알바하면 찾아오는 진상들이 한 번에 다 온다면? ㅋㅋㅋ - VR챗 상황극",movie_image:"https://i1.ytimg.com/vi/BxzPDQzux40/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/BxzPDQzux40?autoplay=1&mute=1",movie_like_count:12e4,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2020,month:9,day:5},movie_comments:[{comment_id:635171,comment_body:"진짜 소름끼치는 것은 담배 사는 할아버지는 고시원과 관련이 없는 그냥 진상이라는 것이다.",comment_user_id:"rice_thief",comment_user_name:"밥도둑"}]},{movie_id:314512,movie_title:"폭력적인 중국인에게 대처하는 법 : 중국인에게 타이완 넘버원을 외쳐보았다",movie_body:"TAIWAN #1 (conan exiles)",movie_image:"https://i1.ytimg.com/vi/Hkg6Vu2Um5k/sddefault.jpg",movie_video:"https://www.youtube.com/embed/Hkg6Vu2Um5k?autoplay=1&mute=1",movie_like_count:4e4,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2017,month:2,day:2},movie_comments:[{comment_id:635172,comment_body:"이영상 해외에서도 유명함.. 특히 대만에서 엽기영상으로 인기많음",comment_user_id:"dongjoo87",comment_user_name:"윤동주"}]},{movie_id:314513,movie_title:"몸으로 말해요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",movie_body:"※ E-Mail : ecvhao@naver.com",movie_image:"https://i.ytimg.com/vi/wKyoYzpDEEM/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/wKyoYzpDEEM?autoplay=1&mute=1",movie_like_count:35e3,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2022,month:12,day:12},movie_comments:[{comment_id:635173,comment_body:"이장면들 왜케 웃기고 귀엽짘ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",comment_user_id:"koreatownrunner",comment_user_name:"하니"}]},{movie_id:314514,movie_title:"시청자가 사는 역대급 쓰레기 방",movie_body:"0:00 컨텐츠 설명 0:17 미션놀이 시작 5:56 썸네일 7:26 미션놀이",movie_image:"https://i.ytimg.com/vi/cKi4E_nXQNE/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/cKi4E_nXQNE?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"challenge",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2024,month:10,day:24},movie_comments:[{comment_id:635174,comment_body:"TMI) 방 주인분 결국 업체불러서 정상화 완료함",comment_user_id:"videotape",comment_user_name:"영상업로드용계정"}]},{movie_id:314515,movie_title:"아빠가 되었습니다",movie_body:"우왁굳 핫클립 광고 문의 : marketing@parable-asia.com",movie_image:"https://i.ytimg.com/vi/O7TeGzypNrg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIahTkMd7jwYIMT5Q8lXtVbJqIIA",movie_video:"https://www.youtube.com/embed/O7TeGzypNrg?autoplay=1&mute=1",movie_like_count:32e3,movie_category:"comedy",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2023,month:4,day:14},movie_comments:[{comment_id:635175,comment_body:'이 형 아직 애기 나오기 전에는 막 본인 애기한테 "초면","그 분", "외계인", 이랬었는데 막상 그 분 태어나시니깐 누구보다 딸 바보 된 거 개귀여움 ㅋㅋㅋㅋㅋ',comment_user_id:"wakmulwon",comment_user_name:"침팬치"}]}]},goodboykris:{channel_id:81372931,channel_name:"소련 여자",channel_nav:"goodboykris",channel_banner:"https://yt3.googleusercontent.com/FB29DrRZRBPzHTH5kb8yEanNdWrQaF76lnobBdlqUTNC-1mkg-btjUeJn6KNq6l0OIS0JB6fAw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ytc/AIdro_nUV1fdUmCnAo_V1c9CPjrJjGJOyy8e6ASnbhDOI9G-vsw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"개소리에도 철학이 있다, 대한민국 1타 개소리 예술가 국뽕이란 무엇인가? 대한민국 1타 국뽕 기술자 크리스 교수입니다.",channel_subscribers:105e4,Movies:[{movie_id:119751,movie_title:"던질까 말까 100시간 춤 추기 (세계 최초)",movie_body:"대한민국 유튜브 algorithm 매우 이해 힘든 것 이상한 유행의 Origin : 트니트니 '던질까 말까'",movie_image:"https://i1.ytimg.com/vi/JsISM29qgC0/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/JsISM29qgC0?autoplay=1&mute=1",movie_like_count:91e3,movie_category:"comedy",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2019,month:12,day:19},movie_comments:[{comment_id:319481,comment_body:"한 달에 만원씩 바쳐서 광고 지웠더니 그런 나를 위해 또 광고를 넣어줬구나",comment_user_id:"undertale",comment_user_name:"전래동화"}]},{movie_id:119752,movie_title:"한국인들은 백인이 길바닥에 똥을 싸도 칭찬해줄까?",movie_body:"#똥 #한국 #백인 🇰🇷🤔👩🏼💩👏🏻?",movie_image:"https://i1.ytimg.com/vi/WG5aX86i3rs/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/WG5aX86i3rs?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"challenge",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2021,month:3,day:19},movie_comments:[{comment_id:319482,comment_body:"근데 진짜 소련여자 영상들 보다보면 현실들을 제대로 비판하는 풍자 영상들을 많이 올리는거 같다. 맨날 영상들 보면 웃긴 대사들이나 편집들이 많아서 남들이 보기엔 생각없이 찍은거 같아보여도 다 무언가 찝어서 비판하는게 있음.",comment_user_id:"namenickr9p",comment_user_name:"네임닉-r9p"}]},{movie_id:119753,movie_title:"러시아어 왕초보 강의(‘스파시바’ 절대 쓰지 마세요)",movie_body:"특별 출연하신 일리야 선생님 고맙습니다. 🎁 댓글에 메일 주소 적으면 ‘가벼운 러시아어 학습지 스타트팩'을 선물세트 자동 응모! 🎁",movie_image:"https://i.ytimg.com/vi_webp/UtljPnhHPJY/maxresdefault.webp",movie_video:"https://www.youtube.com/embed/UtljPnhHPJY?autoplay=1&mute=1",movie_like_count:14e3,movie_category:"challenge",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2021,month:6,day:11},movie_comments:[{comment_id:319483,comment_body:"설마했는데 진짜 한국인인 척 하는 스파이였을 줄이야... 가짜 소련여자인 스파이 크리스를 몰아내고 원조 소련여자인 샌즈님을 구해냅시다 여러분",comment_user_id:"tiramisu",comment_user_name:"티라미수"}]},{movie_id:119754,movie_title:"죄송해서 거짓말합니다.",movie_body:"#나는행복합니다 #죄송합니다 #해명합니다 ㅈㅅㅈㅅ~ ㅋ",movie_image:"https://i.ytimg.com/vi_webp/v7i62-5BHeQ/maxresdefault.webp",movie_video:"https://www.youtube.com/embed/v7i62-5BHeQ?autoplay=1&mute=1",movie_like_count:53e3,movie_category:"comedy",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2020,month:8,day:21},movie_comments:[{comment_id:319484,comment_body:"사과는 꼭 죄송한일이 있어야 해야하는걸까? 죄송해야 사과할 수 있다는 고정관념에 우리 스스로를 가둔건 아닐까",comment_user_id:"nohandle",comment_user_name:"핸들좀없애라"}]},{movie_id:119755,movie_title:"북한 러시아 동맹 해명합니다.",movie_body:"#지드래곤 #북한 #러시아 북한이랑 친해라는데 어쩌라고요~ #북한, #러시아, #지드래곤, #해명, #북한풍선, #스타게이저, #버튜버",movie_image:"https://i.ytimg.com/vi/SL_sPoo5OuU/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/SL_sPoo5OuU?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"talk",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2024,month:7,day:12},movie_comments:[{comment_id:319484,comment_body:"와 북한에서 몰래보고있는 오물풍선 알바생인데;; ㅠㅠ 구독합니다 힘내세요!",comment_user_id:"protect1108",comment_user_name:"알바생"}]}]},workman:{channel_id:452454,channel_name:"워크맨-Workman",channel_nav:"workman",channel_banner:"https://yt3.googleusercontent.com/YSzNgAfL46tAd9qCJDyBKxIXVzfJUzq4ic8dY9LbGCsnGEuZ3S6QZkcY6zPZG_GIuuNaa9f1=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ihi8LdmSNfcp96-gaHBE1Av3-PLotF9rOhUxTy_pY-CeHYCAkDzE1ktxfe4gbhtYR0CIYjUPba0=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"🐜🐜워크맨 인력소 강남점🐜🐜",channel_subscribers:415e4,Movies:[{movie_id:165984,movie_title:"카페 경력 짬바가 뭔지 보여주..“주문 안 받고요, 키오스크에서 알아서 해주세요!!”😵‍💫 | 팀홀튼 카페 알바 | 대니구 | 워크맨2",movie_body:"Job것들아~~~~~~,,, 인력소장이다,,, ",movie_image:"https://i.ytimg.com/vi/9jl-oxM0FxU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwsc8KHtBS9lVn_A-u-KtT-Gy3OQ",movie_video:"https://www.youtube.com/embed/7eJajoei--0?si=3bJI0gFwv_BWGsfg&autoplay=1&mute=1",movie_like_count:15e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:10,day:18},movie_comments:[{comment_id:88437539,comment_body:"진짜  5년 했으면 직업 찾기 힘들건디.. 정말 대단하네요..오늘도 재밌게 봅니다",comment_user_id:"test",comment_user_name:"욀량"}]},{movie_id:165977,movie_title:"[SUB] 뽀시래기들 놀아주다 멘탈 뿌시래기(?) 됨😇 | 키즈카페 | 월간워크맨 범규 | 투모로우바이투게더 | TXT | 워크맨2",movie_body:"오늘은,, 성규,, 아니고 범규가,,,키즈카페 알바를 하고 왔다,,,~ ",movie_image:"https://i.ytimg.com/vi/SOSJ-q-7CRA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyKHdIb-ChBXO1W-wEdDxipdeXmw",movie_video:"https://www.youtube.com/embed/SOSJ-q-7CRA?si=4rN5-WJcFSEz_bpX&autoplay=1&mute=1",movie_like_count:16e4,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2023,month:11,day:3},movie_comments:[{comment_id:451089,comment_body:"아니 애기들 가르치는 입장으로 범규 너무 적성에 맞는 듯 너무 잘 가르침",comment_user_id:"test",comment_user_name:"힛콩"}]},{movie_id:194984,movie_title:"반갑습니다! 올리브영입니다~☺️ 도움 필요하셔도 말씀하지마ㅅ... | 올리브영 알바 | 브링그린 | 지예은 | 워크맨2",movie_body:"오늘은,,,울 잡것덜이,,,많이 추천해준,,,올리브영 다녀왔다,,,~~",movie_image:"https://i.ytimg.com/vi/G_W9pXqnheY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBDxsU7nAsTGRYTlbF0KMQytaNUw",movie_video:"https://www.youtube.com/embed/G_W9pXqnheY?si=_oA8nuXGuR4qASvk&autoplay=1&mute=1",movie_like_count:18e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:9,day:13},movie_comments:[{comment_id:456879,comment_body:"예으니 넘 귀엽다ㅠ",comment_user_id:"test",comment_user_name:"happy123"}]},{movie_id:160084,movie_title:'"고객님 잠시 후에 뵙겠습니다,,,😄" 정신 차려보니 전국일주? 철도 승무원 알바 | 해랑열차 | 승무원 | 아일릿(ILLIT) | 워크맨2',movie_body:"오늘은 해랑열차 알바하고 왔다,,,정말 너무 좋더라고~,,나중에 꼭 가족들과 한번 가보는 거 추천혀~,,,~~!!",movie_image:"https://i.ytimg.com/vi/NCma_qnVu-4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-nlwkuC3KKAdWCGnd99CpNnJj9A",movie_video:"https://www.youtube.com/embed/NCma_qnVu-4?si=9d3llszhrs_lJVXJ&autoplay=1&mute=1",movie_like_count:16e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:10,day:11},movie_comments:[{comment_id:414519,comment_body:"아 보는 내내 너무 행복해서 입꼬리가 내려가질 않네…",comment_user_id:"test",comment_user_name:"xrospo"}]},{movie_id:160978,movie_title:"앞으로 안경 벗는 거 유죄! 살짝 얹기만 했을 뿐인데 갓경 등극😍 | 안경점 알바 | 브리즘 | 보이넥스트도어 이한X운학 | 워크맨2",movie_body:"오늘은,,, 안경점 알바하고 왔다,,,우리 보이넥스트도어,,, 친구들 안경을 얹기만 했는데도 참 멋지더라고,,,,",movie_image:"https://i.ytimg.com/vi/g64d5UPLjFo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDfkOXiFasHnykeFYkAc5ynRSPnGQ",movie_video:"https://www.youtube.com/embed/g64d5UPLjFo?si=QZL7J5gq56Hg-Z4-&autoplay=1&mute=1",movie_like_count:32e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:8,day:30},movie_comments:[{comment_id:410309,comment_body:"아육대 안 나오고 워크맨 찍었다 들었는데 그게 드디어 나왔구만ㅋㅋ",comment_user_id:"test",comment_user_name:"riririr"}]}]},sbs_dali:{channel_id:775460,channel_name:"달리 [SBS DALI] - SBS 공식 교양 채널",channel_nav:"sbs_dali",channel_banner:"https://yt3.googleusercontent.com/sMSp7eIV0sktjQTpjflRyf3q4zDAC1A8UJhz_c9oSdWJGMdg88k6TlxOCS63GyK4WpToo7oX=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/M7XGfxQMxEFeZ5GnnlEEbeuEzeCLs-CGYAtFQQ_I-IsPLttj8P01QJMxXFGKwpuL4eNgiA9F0g=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"SBS 교양 공식채널 달리입니다.",channel_subscribers:108e4,Movies:[{movie_id:100846,movie_title:"[꼬꼬무 148회 요약] 강남역에서 사라지는 청년들, 그들이 빨려들어간 다단계라는 지옥 | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #다단계 #SMK #이광남",movie_image:"https://i.ytimg.com/vi/PQ6eDFLyn4E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD69dTl0SYq9Ls62Q2BZoUAuUKc2A",movie_video:"https://www.youtube.com/embed/PQ6eDFLyn4E?si=vKLy81wGZPPt6WSl&autoplay=1&mute=1",movie_like_count:4700,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:466679,comment_body:"사회초년생 친구들 이 영상 보시고 전형적인 다단계 구조 알아두시면 좋겠네요.",comment_user_id:"test",comment_user_name:"denden"}]},{movie_id:161117,movie_title:"[꼬꼬무 147회 요약] 131명의 사상자, 충분히 막을 수 있었다. 2003 태풍 매미 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송) ",movie_body:"#꼬꼬무 #꼬꼬무요약 #태풍매미",movie_image:"https://i.ytimg.com/vi/aPY7KS0K5NY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBWilX4clPSTGFQS9Ujzmqf5F2ipg",movie_video:"https://www.youtube.com/embed/aPY7KS0K5NY?si=WhJVFOK9_bMl5RK0&autoplay=1&mute=1",movie_like_count:8100,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:18},movie_comments:[{comment_id:93285329,comment_body:"지금까지 살면서 매미가 태풍 중에서 젤 기억에 남음",comment_user_id:"test",comment_user_name:"뎅뎅"}]},{movie_id:194747,movie_title:"[꼬꼬무 146회 요약] 100조 원과 함께 사라진 비트코인의 창시자 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #비트코인 #사토시나카모토",movie_image:"https://i.ytimg.com/vi/42VIq8EW0wU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDEWCHAwhORr80kArOeGZEOP3C6yQ",movie_video:"https://www.youtube.com/embed/42VIq8EW0wU?si=kRlQrubOZqxSEt5t&autoplay=1&mute=1",movie_like_count:6400,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:11},movie_comments:[{comment_id:452229,comment_body:"비트코인은 우리 생활에 자연스럽게 스며들 것입니다.",comment_user_id:"test",comment_user_name:"동동"}]},{movie_id:870084,movie_title:"[꼬꼬무 145회 요약] “형사님, 제가 계급장 한 번 달아 드릴까요?” 허세 속 숨겨진 연쇄살인의 단서 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #의정부연쇄살인사건 #뻥식이사건",movie_image:"https://i.ytimg.com/vi/GAqV_mkqJhU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvDUfeX9mMWvQfdJk9XGe7r0m9SA",movie_video:"https://www.youtube.com/embed/GAqV_mkqJhU?si=Qt2iuH4iTnUd5m8r&autoplay=1&mute=1",movie_like_count:7200,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:4},movie_comments:[{comment_id:784235,comment_body:"꼬꼬무가 끝날 일은 없겟다 ... 하도 많은 사건이 나와서...",comment_user_id:"test",comment_user_name:"popo"}]},{movie_id:333578,movie_title:"[꼬꼬무 144회 요약] 조국의 운명을 짊어진 3인의 특사가 헤이그로 향한 그 날 | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #헤이그특사",movie_image:"https://i.ytimg.com/vi/cS4M7OBprBc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA97bKQ8M3gFRUSRmOXTKtt29xCZg",movie_video:"https://www.youtube.com/embed/cS4M7OBprBc?si=LRN60vPzFQhAIsnE&autoplay=1&mute=1",movie_like_count:2700,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:9,day:27},movie_comments:[{comment_id:958923,comment_body:"헤이그특사라는게 교과서 한줄정도로만기억에남아있는데 이야기로 들으니까 너무 좋네요",comment_user_id:"test",comment_user_name:"lucky12"}]}]},ootbstudio:{channel_id:125424,channel_name:"ootb STUDIO",channel_nav:"ootbstudio",channel_banner:"https://yt3.googleusercontent.com/7K01zQCZpweun9YtKU0wNM9rBotE8TSUE1r3WLMX98AhZ9YeCBApWyHvQbr75uytLWsCrY-uPQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/K74Og8dqtK72UXy-ySJsXMZuMV4M71dCNQmIIOcPkzYHfdHvsUndE31Lbm1znSNVWcffJ_RP=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"Out of the Box! ootb STUDIO (오오티비 스튜디오) 틀을 깨는 시각으로 누구도 경험해보지 못한 신선한 콘텐츠를 만듭니다",channel_subscribers:162e4,Movies:[{movie_id:104216,movie_title:"포항공대 vs 카이스트 맞짱 뜬 썰 푼다 [포항공대 컴퓨터공학과] | 전과자 ep.70 [EN]",movie_body:"코딩 알못 전과자의 코딩 도전🧑‍💻오늘은 포항공대 컴퓨터공학과 다녀옴!",movie_image:"https://i.ytimg.com/vi/-k_Q9Svr7j4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCJu_IUJQ6Y34U-K2FQ8mPHvjrnoA",movie_video:"https://www.youtube.com/embed/-k_Q9Svr7j4?si=BFFkS3KTBcvHcFAY&autoplay=1&mute=1",movie_like_count:19e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:24},movie_comments:[{comment_id:400059,comment_body:"볶음밥 먹는 걸로 코딩 비유한 거 완전 이해 잘 된당",comment_user_id:"test",comment_user_name:"may"}]},{movie_id:162399,movie_title:"동심파괴하는 역대급 동화 발표 [단국대 문예창작과] | 전과자 ep.69 [EN] ",movie_body:"동화 작가 데뷔한 전과자?!✏️ 오늘은 단국대학교 문예창작과 다녀옴!",movie_image:"https://i.ytimg.com/vi/D-xlw07rGEM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAzWam2-YPnpvnms1gKLAQsZCAGcw",movie_video:"https://www.youtube.com/embed/D-xlw07rGEM?si=BgTdxkt5gWSxRT3c&autoplay=1&mute=1",movie_like_count:23e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:17},movie_comments:[{comment_id:488829,comment_body:"동화 진심 천재아님...? 20분도 안되는 시간이 저렇게 구성했다고??????",comment_user_id:"test",comment_user_name:"hannna"}]},{movie_id:177207,movie_title:"식빵언니 김연경이 새내기인 학과 [한국방송통신대 생활체육지도과] | 전과자 ep.68 [EN/ID]",movie_body:"김연경 선수 실물 영접하고 왔습니다..🤭",movie_image:"https://i.ytimg.com/vi/X8COuUKz2K0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHQ38xhEbHipBtK_zQafMJCXmj3w",movie_video:"https://www.youtube.com/embed/X8COuUKz2K0?si=6xtzyaJ1CfJw2szG&autoplay=1&mute=1",movie_like_count:26e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:10},movie_comments:[{comment_id:306429,comment_body:"배움엔 끝이 없다고, 정말 40대 50대. 90대가 되어서도 하려고 하는 거 보니 뭉클합니다",comment_user_id:"test",comment_user_name:"소소한소"}]},{movie_id:8974284,movie_title:"미안하면 씨X 하는 학과 [한국외대 아랍어과] | 전과자 ep.67 [EN]",movie_body:"아랍어 1도 모르는 전과자가 한국외대 아랍어과 다녀옴!",movie_image:"https://i.ytimg.com/vi/Gzs1qNmTcYY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCfIfUsPcPqH92WaJxO8pEXZwPjPQ",movie_video:"https://www.youtube.com/embed/Gzs1qNmTcYY?si=vx02u1zbiOhO0baG&autoplay=1&mute=1",movie_like_count:32e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:3},movie_comments:[{comment_id:781122,comment_body:"아랍어 학생 멘토한 림입니다~이런 멋진 기회를 주셔서 감사합니다! 정말 즐거운 시간이었어요~♡♡",comment_user_id:"test",comment_user_name:"reem"}]},{movie_id:333888,movie_title:"연기 괜찮아요? 많이 놀랐죠? [경희대 연극영화학과] | 전과자 ep.66 [EN]",movie_body:"드디어 전과자도 2학기 개강 완!🏫 오늘은 경희대학교 연극영화학과 다녀옴!",movie_image:"https://i.ytimg.com/vi/sQknHM8unPM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBP-qcUyVxiAqEg2GimMuzqnjDGUg",movie_video:"https://www.youtube.com/embed/sQknHM8unPM?si=Brwk4oDoDT4E0v_h&autoplay=1&mute=1",movie_like_count:33e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:9,day:26},movie_comments:[{comment_id:121114,comment_body:"ㅋㅋㅋㅋㅋㅋㅋ겁나 웃기네 진짜",comment_user_id:"test",comment_user_name:"child22"}]}]},SBSKPOP:{channel_id:2250024,channel_name:"SBSKPOP X INKIGAYO",channel_nav:"SBSKPOP",channel_banner:"https://yt3.googleusercontent.com/oOQHsiZrRMv3jYKY4M7kJsqcBjlXfwf1Wq1X96qsUuYWxY5TdFiNHUewkl8XWmVDvL9uMucUoOc=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/Uxpz5J0EcsFJRbqh4Ip7i3TTNsxTh5jVUxfZmV1DTrCQM_ihfzBGMmkfSRGWoFK9M0anhIie=s160-c-k-c0x00ffffff-no-rj",channel_introduction:" 기존의  Inkigayo인기가요 채널의 확장 버전으로 새롭게 태어난 SBS 공식 디지털 KPOP채널입니다.",channel_subscribers:815e4,Movies:[{movie_id:541236,movie_title:"aespa (에스파) – Whiplash @인기가요 inkigayo 20241027",movie_body:"에스파 - Whiplash #aespa #Whiplash",movie_image:"https://i.ytimg.com/vi/p3kJOuNnkJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw9oGNHqbtjkBlRI0hQU85fe9LCg",movie_video:"https://www.youtube.com/embed/p3kJOuNnkJg?si=fF2ky_2of1fliP6G&autoplay=1&mute=1",movie_like_count:55e3,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:415059,comment_body:"닝닝 너무 예쁘다",comment_user_id:"test",comment_user_name:"fnksif"}]},{movie_id:148399,movie_title:"ITZY (있지) – GOLD @인기가요 inkigayo 20241027",movie_body:"있지 - GOLD #ITZY #GOLD",movie_image:"https://i.ytimg.com/vi/2WNIGv1r5d4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDihD8KUyOdVjxXngpjYFB6KJ4Npg",movie_video:"https://www.youtube.com/embed/2WNIGv1r5d4?si=IU51kHkPu9mZle0s&autoplay=1&mute=1",movie_like_count:12e3,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:487829,comment_body:"So beautiul LIA",comment_user_id:"test",comment_user_name:"hpa012"}]},{movie_id:100680,movie_title:"Billlie (빌리) – Remembrance Candy (기억사탕) @인기가요 inkigayo 20241027",movie_body:"빌리 - 기억사탕 #Billlie #Remembrance_Candy",movie_image:"https://i.ytimg.com/vi/zyzRypp6dbQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9daqmRFj7s35yyO_4dbbctPcyGA",movie_video:"https://www.youtube.com/embed/zyzRypp6dbQ?si=zu-9x2jdhW_w3NDP&autoplay=1&mute=1",movie_like_count:1200,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:302153,comment_body:"이번 컴백무대중에 가장 헤메코 좋다.",comment_user_id:"test",comment_user_name:"딴딴"}]},{movie_id:897124,movie_title:"[단독샷캠4K] 아이브 After LIKE 단독샷 별도녹화│IVE ONE TAKE STAGE @SBS Inkigayo 220828",movie_body:"[단독샷캠4K] 아이브 After LIKE 단독샷 별도녹화│IVE ONE TAKE STAGE @SBS Inkigayo 220828",movie_image:"https://i.ytimg.com/vi/fdzojloPlFA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArt4d22OllBmd1Gfxovdb_lcNuKg",movie_video:"https://www.youtube.com/embed/fdzojloPlFA?si=nQwDPXBvL1pmSExl&autoplay=1&mute=1",movie_like_count:21e4,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2022,month:9,day:1},movie_comments:[{comment_id:125452,comment_body:"I love her voice at 2:25",comment_user_id:"test",comment_user_name:"sias"}]},{movie_id:49386439,movie_title:"[단독샷캠4K] 뉴진스 Ditto 단독샷 별도녹화│NewJeans ONE TAKE STAGE @SBS Inkigayo 230115",movie_body:"[단독샷캠4K] 뉴진스 Ditto 단독샷 별도녹화│NewJeans ONE TAKE STAGE @SBS Inkigayo 230115",movie_image:"https://i.ytimg.com/vi/jUNz-uTF--E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO7YFNY9buWMwRPfy6vHYJkTkWow",movie_video:"https://www.youtube.com/embed/jUNz-uTF--E?si=UDI5QuZOMAiPeC17&autoplay=1&mute=1",movie_like_count:21e4,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2023,month:1,day:19},movie_comments:[{comment_id:184314,comment_body:"뉴진스 곡중에 ditto 진짜 최고야...😢❤",comment_user_id:"test",comment_user_name:"celds22"}]}]},SBSANIMAL:{channel_id:2215544,channel_name:"SBS TV동물농장x애니멀봐 공식 유튜브 채널입니다!",channel_nav:"SBSANIMAL",channel_banner:"https://yt3.googleusercontent.com/jJb9nRaO1XSX7cCyUCWlddsO4VEMAfmKkpUfCKsWSco9VOi0QdUvFeTjUSpt669Xs85CIWp9lw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_profile.jpg?raw=true",channel_introduction:"SBS 동물농장 x 애니멀봐 공식 유튜브 채널입니다! ",channel_subscribers:492e4,Movies:[{movie_id:512236,movie_title:"해외여행 후 빈대걱정 개코가 다 잡아드림 ㅣDo Not Worry About Bedbug After A Trip Anymore",movie_body:"개코개코했지만 빈대냄새까지 찾아내는 검역탐지견들....☆",movie_image:"https://i.ytimg.com/vi/HOGfNYten8c/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCtbjNXF9VEL1nMlZoqVwPY9QJQUA",movie_video:"https://www.youtube.com/embed/HOGfNYten8c?si=k6-fUSnQNNAnXJ4v&autoplay=1&mute=1",movie_like_count:1500,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:10,day:28},movie_comments:[{comment_id:9318122,comment_body:"너무너무 기엽고 눈빛이 영특해욥",comment_user_id:"test",comment_user_name:"bunnie"}]},{movie_id:990159,movie_title:"나는 태어난 지 30일 된 먼치킨 새끼다 [애니멀봐 나새끼 26호]",movie_body:"[나는 새끼다] 26호 새끼 - 먼치킨 - 우리는 태어난 지 30일 된 먼치킨 고양이를 밀착취재 해보았다.",movie_image:"https://i.ytimg.com/vi/E8V02ArInjY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2x9N9Np1o4crItzsX1yA2dek_HQ",movie_video:"https://www.youtube.com/embed/E8V02ArInjY?si=-gZ7rSEfkdHYv1lH&autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2023,month:5,day:16},movie_comments:[{comment_id:464659,comment_body:"심장뿌셔짐",comment_user_id:"test",comment_user_name:"stsgj"}]},{movie_id:100470,movie_title:"쪼꼬미 동물병원 시즌3 1화 (내원환자 : 드워프햄스터 콩콩님)ㅣAnimal Hospital for Tiny Animals 3 Ep 1 (Patient: Dwarf Hamster)",movie_body:"동물농장 전설의 수의사와 함께하는 –쪼꼬미 동물병원- 시즌3 첫번째 내원환자 드워프 햄스터 콩콩이님 들어오실게요",movie_image:"https://i.ytimg.com/vi/d-PV-ScWtB8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDCai2kKXqHqIpaCi-if-Il1SpFQg",movie_video:"https://www.youtube.com/embed/d-PV-ScWtB8?si=fXQ_wjNh_U0VDBRm&autoplay=1&mute=1",movie_like_count:6800,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2023,month:3,day:8},movie_comments:[{comment_id:32948239,comment_body:"햄찌 진짜 순하다 귀여워ㅋㅋㅋ",comment_user_id:"test",comment_user_name:"얌얌"}]},{movie_id:815444,movie_title:"서울 한복판에서 너굴맨 만난 썰 푼다;;ㅣHow I Met Raccoon Man In City Center",movie_body:"서울 한복판에서 산책하다 너굴맨을 만났다?",movie_image:"https://i.ytimg.com/vi/Tkw5NKyCpeU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaQmyb0JA9lGuJehEKCea8snH1Qg",movie_video:"https://www.youtube.com/embed/Tkw5NKyCpeU?si=uG5O3Z2WJPAqR9CJ&autoplay=1&mute=1",movie_like_count:500,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:10,day:7},movie_comments:[{comment_id:106652,comment_body:"썸넬이 너무 귀여워요 ㅠㅠ",comment_user_id:"test",comment_user_name:"bobo"}]},{movie_id:399998,movie_title:"푸바오의 조상님 그때 그 시절 판다들(장꾸력 만렙ㅋㅋ)ㅣFu Bao’s Ancestors. Pandas Back In The Day",movie_body:"판다 덕후 주목! 우유라떼 마시며 들려주는 그때 그 시절 핫한 판다들의 이야기..⭐️ ",movie_image:"https://i.ytimg.com/vi/MlKFeqBIZJs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArU-vHn5ofD3InGBgEJcZGvgZB4w",movie_video:"https://www.youtube.com/embed/MlKFeqBIZJs?si=2twwrn3h4FCtmZRB&autoplay=1&mute=1",movie_like_count:2100,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:9,day:14},movie_comments:[{comment_id:912932,comment_body:"인공수정 너무 잔인하고, 판다가 너무 불쌍하네요..",comment_user_id:"test",comment_user_name:"simsim"}]}]},jindoEre:{channel_id:798311,channel_name:"진돗개 이레",channel_nav:"jindoEre",channel_banner:"https://yt3.googleusercontent.com/byG9tgzrpnpoM2Zu20_WMqX4QjqYX-bxbhPCoJZhFYkPqOtqW1IJPD0FwtoAQMl3dVwlw7ULlg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/UFRAIo6roqbUtvBQuoZ-euDsf5xGnlrUIpKdkLgTk5wzEYPu4ekHgNMjlkC7sGdLp_th0ZB9KUw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"바다건너 돌아와보니, 이레네🐾❤️",channel_subscribers:84700,Movies:[{movie_id:78494,movie_title:"임시보호하는 아기 고양이들, 집이 7번이나 바뀐 이유",movie_body:"#캣타워 #아기고양이 #고양이 #고양이 #아기고양이 #캣타워",movie_image:"https://i.ytimg.com/vi/1qrH9H8GN_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRLzIkZj4Cw7c4wvmFDc_Z3wUKDg",movie_video:"https://www.youtube.com/embed/1qrH9H8GN_s?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:78619,comment_body:"이정도면 임시보호가 아니라 지극히 사심채우기 같은뎈ㅋㅋㄱㅋㄱㅋ",comment_user_id:"test",comment_user_name:"정성희"}]},{movie_id:15965,movie_title:"새끼 고양이와 병원 간 진돗개가 보인 반응",movie_body:" #진돗개 #동물병원 #새끼고양이 #진돗개 #새끼고양이 #동물병원",movie_image:"https://i.ytimg.com/vi/v-vg-2TqDf8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7es255msmnPG80ROxdJmbsCANww",movie_video:"https://www.youtube.com/embed/v-vg-2TqDf8?autoplay=1&mute=1",movie_like_count:2700,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:10,day:9},movie_comments:[{comment_id:11568,comment_body:"엄빠보다 더 초조한 이레보호자💕",comment_user_id:"test",comment_user_name:"god123"}]},{movie_id:156234,movie_title:"강아지 빗질을 못해주면 이렇게 됩니다..😶‍🌫️ #진돗개털갈이",movie_body:"산 운동장에 다녀왔다가 돌아온 날이에요-!⛰️ 아이들도 저희도 일정이 워낙 빠듯해서 일주일 정도 빗질을 못했던 상황인데다 여름에서 가을로 넘어가는 시기여서 털갈이 성수기였던 게 한몫한 영상인 점 꼭 기억해주세요!ㅎ",movie_image:"https://i.ytimg.com/vi/UxT7nY1p7V0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTLwAAkXE8jWXlTvQ-CsKmBJVHyg",movie_video:"https://www.youtube.com/embed/UxT7nY1p7V0?autoplay=1&mute=1",movie_like_count:2500,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:1,day:19},movie_comments:[{comment_id:654935,comment_body:"어쩜 아이들이 서로 싸우지도 않으면서 각자 편안한 자세로 꿈나라로 고고~~",comment_user_id:"test",comment_user_name:"반야심"}]},{movie_id:357416,movie_title:"유기견이 스스로 우리집에 들어왔다.🐕‍🦺 구조자를 직접 고른 버려진 개의 이야기",movie_body:"곱슬이는 빠삐용의 ’삐용‘이란 이름을 갖게 되었어요. 그리곤 심장사상충 치료를 시작했었답니다.",movie_image:"https://i.ytimg.com/vi/hbxzkJ62zVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAwiqLlDqC2LaXQMB35ZKzVdj4aQ",movie_video:"https://www.youtube.com/embed/hbxzkJ62zVI?autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2023,month:12,day:26},movie_comments:[{comment_id:152722,comment_body:"삐용이 입양하신 이웃분도 너무 멋지셔요. ",comment_user_id:"test",comment_user_name:"애옹이사랑"}]},{movie_id:220045,movie_title:"얘들아.. 아빠 생일이라구ㅠㅋㅋㅋ (진돗개)",movie_body:"이레아빠의 생일파티는 어때보이나요?ㅠㅎ '다견가정'스럽게(?) 보낸 개아빠의 생일파티(?)...😂",movie_image:"https://i.ytimg.com/vi/nRV6SKGq3lQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD855jOPKms3gDj2S5aQdFaAejN0Q",movie_video:"https://www.youtube.com/embed/nRV6SKGq3lQ?autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2023,month:10,day:18},movie_comments:[{comment_id:448861,comment_body:"아가들 완전 귀요미들~~~ 대환장파티~~ 아빠 생일인데 아가들이 더 신났네요~ 개귀엽당",comment_user_id:"test",comment_user_name:"김지혜"}]}]},shoppingMom:{channel_id:660495,channel_name:"쇼핑맘",channel_nav:"shoppingMom",channel_banner:"https://yt3.googleusercontent.com/DTgCPAH4K8MxbMYGrLtQVum6D_1Ys3iU868mDeH_CalsqdGKL9Ou99teL7z7V8g1Y8p3-mAfZL8=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/xGX7RIjkTR3P1BMX24icwwHiJJ6WYK-BJpb5tTHMecKalm2fsGjAc2xTQA3davbeUVIFW6wR=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"⬇️⬇️⬇️영상 속 제품 링크🩷⬇️⬇️⬇️ 진지하게 살림을 합니다. 리뷰 영상에 진심을 담습니다 :)",channel_subscribers:10600,Movies:[{movie_id:6738049,movie_title:"쿠팡에서 내가 꿈꾸던 실용적인 팬트리 셋업 17가지ㅣ쿠팡에서 살 수 있는 가성비 최고의 정리 제품ㅣ주방투어ㅣ주방 꾸미기ㅣ최저가ㅣ가성비다모았다ㅣ좁은주방ㅣ앵글활용100%ㅣ설치방법",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/clvV6sG6i1Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD83S70mJQ-shHwJlR3ef4BJ3VT2w",movie_video:"https://www.youtube.com/embed/clvV6sG6i1Y?autoplay=1&mute=1",movie_like_count:544,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2023,month:9,day:21},movie_comments:[{comment_id:116101,comment_body:"좋았어! 이제 집만 넓어지면 되겠어요!!😂ㅋㅋㅋㅋㅋㅋㅋ",comment_user_id:"test",comment_user_name:"golldd_d"}]},{movie_id:167205,movie_title:"쿠팡 정리 추천템 | 살림이 행복해지는 수납 정리 아이템 | 주방정리 꿀템 | 잡동사니 정리 꿀팁 | 분리수거 방법 꿀팁",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/VD33utJraE0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE97KxtNBTDfX8fqCp1XYRAGf5Hw",movie_video:"https://www.youtube.com/embed/VD33utJraE0?autoplay=1&mute=1",movie_like_count:2500,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:3,day:9},movie_comments:[{comment_id:7046458,comment_body:"저 오늘 이사가기전에 집 정리한다고 절반 정도 집 엎었는데 너무 제 모습을 보는 것 같아요😂😂😂",comment_user_id:"test",comment_user_name:"yshans"}]},{movie_id:106478,movie_title:"리뷰 수천개씩 보는 주부가 직접 검증한 쿠팡 추천템 | 내 손으로 검증한 찐 추천템 | 품절되기전 사야템 | 삶의질 수직상승 | 재재구매 꿀템 | 청소 정리 꿀템 | 알리공구예고",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/SObd7CMcp3c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2VdiYZb211K5gz3R6nBkVEzj1sg",movie_video:"https://www.youtube.com/embed/SObd7CMcp3c?autoplay=1&mute=1",movie_like_count:376,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:5,day:25},movie_comments:[{comment_id:7945154,comment_body:"이염방지시트는 세탁시에만 넣나요? 세탁과 건조기에도 넣어도 되나요?",comment_user_id:"test",comment_user_name:"장뽕뽕"}]},{movie_id:478513,movie_title:"리뷰 몇천개씩 보는 주부가 고른 쿠팡 살림 추천템 13가지 | 요즘 SNS 난리난 바로 그 제품! | 입고후 즉시품절 | 품절대란 생활 꿀템 | 삶의질 수직상승 | 내돈내산",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/A7NzGlfUtYc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcn9tdUw1T0ZstSZCjjrxnYK9yWQ",movie_video:"https://www.youtube.com/embed/A7NzGlfUtYc?autoplay=1&mute=1",movie_like_count:2100,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:2,day:9},movie_comments:[{comment_id:516151,comment_body:"설명 꼼꼼하게, 듣기 편하게 잘하시네요~ 개인적으로 꿀템 소개영상 중 제일 보기 좋은 영상이었음",comment_user_id:"test",comment_user_name:"flying_witch6527"}]},{movie_id:1583085,movie_title:"쿠팡 품절되기 전에 구매하세요!! | 완벽한 삶의 질 상승템 | 디자인부터 기능까지 다 갖췄다 | 예쁘고 실속있는 쿠팡 살림템  | 내돈내산템",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/iaOjF9aCcK0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsemOpqXLzAgFhU4E_fEAJiQ7Rsw",movie_video:"https://www.youtube.com/embed/iaOjF9aCcK0?autoplay=1&mute=1",movie_like_count:757,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:3,day:16},movie_comments:[{comment_id:111504,comment_body:"유익한정보감사해요 거실카펫.건식욕조러그두추천해주셈",comment_user_id:"test",comment_user_name:"신나라신나라"}]}]},mamu_vlog:{channel_id:201864,channel_name:"mamu마므",channel_nav:"mamu_vlog",channel_banner:"https://yt3.googleusercontent.com/lArY9lbEFU12URnCHfvsQ8d1KaktdkJ5AbCSL0FnyRWws8GMkTBIFlWRzzQAGpyZxXFDpV9Iew=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/B9AkXHC7chFdQHNhcOhBCXObehilWrpfB_ysDi1cyvj7C9GLkkJcuBlwSMol6KpPu7Jw0LsEjoc=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"instagram | @mma_muu email | morningood9922@gmail.com",channel_subscribers:35900,Movies:[{movie_id:4506901,movie_title:"5평 방을 호텔처럼 꾸미기‧₊˚☁️ 셀프인테리어 | 타일카페트 시공✂️ | 모듈 가구 | 6단 북선반 | 책꽂이 | 미니 다육이",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/HxCRe7uDyAM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXHa2B_7ErgdIARsosiKMleOWuvw",movie_video:"https://www.youtube.com/embed/HxCRe7uDyAM?autoplay=1&mute=1",movie_like_count:21e3,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2023,month:12,day:31},movie_comments:[{comment_id:101054,comment_body:"저도 이사할때  회색 타일 카페트를 깔았는데요 퇴근하고 청소기 + 돌돌이해도 먼지가 날리고 비염이 생겼어여. 비염이 있으시면 좋았을텐데 봐도바도이뿌녀요 ㅠㅡㅠ",comment_user_id:"test",comment_user_name:"왕왕우왕"}]},{movie_id:412321,movie_title:"vlog. 일만 하는 브이로그🔥, 쇼핑몰 사장의 일상 | 피곤하지만 재밌어 | 매일 시장가다가 삼촌 써봄 | 필인더블랭크 가방 | 달라진 사무실 | 바디스크럽 추천",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/1_35QO9UVYk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWCnBcp3_BQyr5qfYReTl24QLGcg",movie_video:"https://www.youtube.com/embed/1_35QO9UVYk?autoplay=1&mute=1",movie_like_count:1600,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:8,day:19},movie_comments:[{comment_id:794861,comment_body:"하 마므님 기다리다가 기린 목 됐어요.. 목 빠지는 줄 알았어요 ♥",comment_user_id:"test",comment_user_name:"콩시크릿쥬쥬"}]},{movie_id:575156,movie_title:"vlog. 일상 브이로그, 포장지옥📦 | 용산 데이트 (브런치, 키보드 구경, 닭한마리 맛집) | 롯데백화점 라운지 5초 체험기",movie_body:"✧outer 누이어 - 리프 스웨이드 하프 자켓",movie_image:"https://i.ytimg.com/vi/cYhMT9pX4xU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhPCxa09mVABS-h_j1igycOjKY8A",movie_video:"https://www.youtube.com/embed/cYhMT9pX4xU?autoplay=1&mute=1",movie_like_count:6200,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:8940984,comment_body:"요거트에 토마토 맛나 보여요 🤍",comment_user_id:"test",comment_user_name:"나는야 분노핑"}]},{movie_id:360324,movie_title:"vlog. 일상 브이로그, 쇼핑몰 열심히 해나가기🔥 | 썸웨어버터 선물&아디다스 스페지알 언박싱 | 네일하고 혼밥과 카공 | 메디힐 당근패드로 피부 정리하기",movie_body:"메디힐 당근 수분 진정 패드",movie_image:"https://i.ytimg.com/vi/HE89T9XNew0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACaE1cGETg6z4yENTleWBsaq1opg",movie_video:"https://www.youtube.com/embed/HE89T9XNew0?autoplay=1&mute=1",movie_like_count:1600,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:8,day:19},movie_comments:[{comment_id:491304,comment_body:"실버 가방 취저에요! 아디다스 스페지알 탐나요 🤍",comment_user_id:"test",comment_user_name:"vlog8852"}]},{movie_id:242685,movie_title:"vlog. 오픈 2주차 일상 브이로그, 초보사장 냄새난다 | 구독자분께서 주신 선물 | 아디다스 신발 언박싱 | 매일 가는 동대문 시장 | 포장검수하고 촬영하기",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/WNBeisZs5xk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfkivid92jAq4QOyFIkfYDXKnY3w",movie_video:"https://www.youtube.com/embed/WNBeisZs5xk?autoplay=1&mute=1",movie_like_count:1800,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:3,day:22},movie_comments:[{comment_id:404658,comment_body:"마므님이라면 조립하는거 올릴거 같아서기다리고 있었어요 ! 영상 꾸준히 올려주셔서 감사합니당 트롤리 보면서 제 생각도 1년에 한번씩 해주세여",comment_user_id:"test",comment_user_name:"김민정하튜"}]}]},moozzi:{channel_id:904206,channel_name:"무찌",channel_nav:"moozzi",channel_banner:"https://yt3.googleusercontent.com/_c2vXh4oFCHaqxOTehNhs-WLCTuzATSHTJ5fiQDz4E4tbBFsXwliKoXo00K_Xmyt_YmpZZCPYQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/lK7Y9eC82RAXumtR3OPo2HKuHKbJ3obt-WPpAh9sxfo2oPfu55qveLKBSwHva4wRSOEOWwJcK9A=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"무쌍 뷰티의 모든 것💜 🔗@mo.ojji_",channel_subscribers:164e3,Movies:[{movie_id:760806,movie_title:"메이크업 아티스트 쌤들이 만든 제품으로 샵 퀄리티 메이크업 따라해보면?!🤔 과연 좋을까..? / 애교살 꿀템",movie_body:"오늘은 최근에 업로드 했던 릴스&쇼츠에서 가장 예쁘다고 해줬던 쿨톤메이크업 버전 들고왔지롱 ,, ✩",movie_image:"https://i.ytimg.com/vi/wwX_ObHl3pc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBqgUdn0sDe0Vr2p_nFYBEJ6Kv3g",movie_video:"https://www.youtube.com/embed/wwX_ObHl3pc?autoplay=1&mute=1",movie_like_count:711,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:9,day:22},movie_comments:[{comment_id:354605,comment_body:"얼굴이 이뻐서 다 커버되는 언니…😍",comment_user_id:"test",comment_user_name:"Woosigke"}]},{movie_id:1026381,movie_title:"추천템에 진심인;; 사람이 추천하는 쿠팡&올영 올타임 레전드 템 모음집💰(다이어트템, 여름 겨드랑이 관리템)",movie_body:"무찌픽 향수인 슈가 플로럴이 지금 #올리브영에서 할인 중이니 얼른 달려가봐 🍑",movie_image:"https://i.ytimg.com/vi/h0PMQw54tWA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvfvIMDZazcOFUyWSEaKWuOZwbKA",movie_video:"https://www.youtube.com/embed/h0PMQw54tWA?autoplay=1&mute=1",movie_like_count:1800,movie_category:"shopping",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:6,day:10},movie_comments:[{comment_id:451054,comment_body:"!!헉 카메라 두개쓰셔서 실제색상 보여주셔서 감사해욤❤무찌 정성 무쳣다!!",comment_user_id:"test",comment_user_name:"__daebbanggg"}]},{movie_id:659056,movie_title:"No 마스카라‼️ 요청 폭발한 내추럴 아이 메이크업 (진짜 10분컷)",movie_body:"영상에 나온 네이밍 레이어드 핏 쿠션 리필 기획과 색감 뽀용한 플러피 파우더 블러쉬가 할인하니 궁금하신 분들은 아래 링크에서 확인 해주세요(✿◡‿◡)",movie_image:"https://i.ytimg.com/vi/jUZlsfv6XwI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArcAArMUXvWKVjTV_xxvqdDKIAsA",movie_video:"https://www.youtube.com/embed/jUZlsfv6XwI?autoplay=1&mute=1",movie_like_count:1100,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:1,day:28},movie_comments:[{comment_id:113155,comment_body:"근데 에스쁘아 오트라떼 단종소식...ㅜㅜㅜ😢😢",comment_user_id:"test",comment_user_name:"@jyeon."}]},{movie_id:1054604,movie_title:"서핑 이렇게 재밌다고? 🌊양양으로 떠난 데이뉴 소속사 네트워킹 | 여름 휴가☀️",movie_body:"무찌에용💖 오늘은 제 소속사 데이뉴에서 1박 2일 네트워킹을 양양으로 다녀왔어요!!",movie_image:"https://i.ytimg.com/vi/rBEzFMUk1G4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1WHvPnLlJur92nREN1ZQ-KCRN1Q",movie_video:"https://www.youtube.com/embed/rBEzFMUk1G4?autoplay=1&mute=1",movie_like_count:243,movie_category:"vlog",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2023,month:7,day:22},movie_comments:[{comment_id:546515,comment_body:"헐 웅니 찐으로 웃는 거 처음 보는 것 같은데 넘짱짱 귀여운 거 아닌가여 😭😍",comment_user_id:"test",comment_user_name:"usekadns"}]},{movie_id:305135,movie_title:"무쌍이 따라해보는 카즈하,아린님 st 토끼상🐰 메이크업 (신상템 가득🔥)",movie_body:"원래 제목은 '얼굴에 토끼 1도 없는데 저도 토끼가 될 수 있나요..? ' 이였던 메이크업 영상...",movie_image:"https://i.ytimg.com/vi/hKtoxxWf5cE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9iAguipmx4W7NvR4ZXdrLkyLQjg",movie_video:"https://www.youtube.com/embed/hKtoxxWf5cE?autoplay=1&mute=1",movie_like_count:498,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2023,month:2,day:23},movie_comments:[{comment_id:4604648,comment_body:"무찌님 덕에 누드밀크티 사고 인생 메이크업 완성했습니다..❤️‍🔥 ",comment_user_id:"test",comment_user_name:"minio_oi"}]}]},Or7r2l:{channel_id:806540,channel_name:"아가리어터",channel_nav:"Or7r2l",channel_banner:"https://yt3.googleusercontent.com/LlkjnLTQEfDyOSWelXnV_4XJb-EethG3Dfc92JvZJnLlnaHufmM6QVx_y9GLyf9Qc3As9QlpngA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/pjlMeWVK6071iovFtndMKIZk3mSZ5fV8YYZJcNx0_3YmXPmr0a2oPYjv3Z8EIFbfkHc2fFRxog=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"[노말] 말이 안 되다",channel_subscribers:38e4,Movies:[{movie_id:446545,movie_title:"인팁걸 공주걸과 세부에서 살아남기",movie_body:"안녕 얘들아 나는 아가리어터야 ",movie_image:"https://i.ytimg.com/vi/JMcR6_-O92M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD41hQEZ2q94T492JrTGiBIbd3ISg",movie_video:"https://www.youtube.com/embed/JMcR6_-O92M?autoplay=1&mute=1",movie_like_count:3400,movie_category:"travel",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:10,day:21},movie_comments:[{comment_id:848484,comment_body:"가리걸 무서워도 도전 해보는 용기 너무 멋잇잔아~~ 가리업 가리업~",comment_user_id:"test",comment_user_name:"ttoiiiiii"}]},{movie_id:651654,movie_title:"인생썰 풀면서 겟레디윗미",movie_body:"(최대 혜택가) 25,000원에 5G 무제한 놓치지 마세요😘 ",movie_image:"https://i.ytimg.com/vi/ohi235S5-yU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAySptXPFI04GhWZ9tqsJHsIdneXw",movie_video:"https://www.youtube.com/embed/ohi235S5-yU?autoplay=1&mute=1",movie_like_count:3900,movie_category:"makeup",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:10,day:16},movie_comments:[{comment_id:198315,comment_body:"아니 썸넬 미쳤냐고요 깜이가 놀이;;; 미모베리 미가 쳤어요;;;",comment_user_id:"test",comment_user_name:"내인생이거든"}]},{movie_id:440845,movie_title:"혼자 급발진으로 떠난 대만여행",movie_body:"🌎호텔스컴바인 대만 타이베이 최.저.가. 기획전🌎 ",movie_image:"https://i.ytimg.com/vi/qf42eT5OIPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLA5mZrnz7iaaJi7nNK3DOz7z2Bw",movie_video:"https://www.youtube.com/embed/qf42eT5OIPs?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"travel",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:6,day:6},movie_comments:[{comment_id:8751516,comment_body:"언니 피부관리 루틴 당장 공개해조요 제발",comment_user_id:"test",comment_user_name:"rlarladd"}]},{movie_id:684156,movie_title:"먹고 마시고 깔깔대다가 아침이야..",movie_body:"💚시카지우개패드 단품 9,900원💚 가성비가 걍 미치셨어요",movie_image:"https://i.ytimg.com/vi/5BKkxdp8NqU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbJJdL1emlgUB3HjvFzdV2zpCWcg",movie_video:"https://www.youtube.com/embed/5BKkxdp8NqU?autoplay=1&mute=1",movie_like_count:2500,movie_category:"vlog",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:2,day:16},movie_comments:[{comment_id:110002,comment_body:"빨리 보고 싶어서 사회적 체면 포기하고 버스에서 웃참쇼 미쳐버려~~",comment_user_id:"test",comment_user_name:"Moall_al"}]},{movie_id:200235,movie_title:"퇴사하고 에버랜드 가기",movie_body:"👄인스타 놀러오세요👄",movie_image:"https://i.ytimg.com/vi/OTNFiUeq7u0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-k1Px3ZJYHZmrs3Ss2XXsAhkWMA",movie_video:"https://www.youtube.com/embed/OTNFiUeq7u0?autoplay=1&mute=1",movie_like_count:3e3,movie_category:"vlog",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2023,month:3,day:22},movie_comments:[{comment_id:3304558,comment_body:"환장의 나라 에버랜드에 오신걸 환영합니다. 팬입니다.",comment_user_id:"test",comment_user_name:"모르는지idontknowji"}]}]}},Yw={Channel:JSON.parse(localStorage.getItem("YoutubeChannel"))||Gw,allMovies:JSON.parse(localStorage.getItem("YoutubeAllMovies"))||[]},Kp=Zc({name:"channelSlice",initialState:Yw,reducers:{ChangeChannelInfo(e,t){localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewChannel(e,t){const{user_id:n,user_name:r,user_email:o}=t.payload,i=o.split("@")[0],s={channel_id:n,channel_name:r,channel_banner:"https://via.placeholder.com/1280x200",channel_image:"https://via.placeholder.com/160x160",channel_introduction:`안녕하세요 ${r} 채널 입니다.`,channel_subscribers:0,channel_nav:i,Movies:[]};e.Channel[i]=s,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewMovies(e,t){const n={movie_id:Math.floor(Math.random()*999999),...t.payload};e.Channel[t.payload.movie_channel].Movies.push(n),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},DelMovies(e,t){const{channel_name:n,movie_id:r}=t.payload,o=e.Channel[n];o.Movies=o.Movies.filter(i=>!r.includes(i.movie_id)),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},ChangeMovies(e,t){localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewMoviesComment(e,t){const{movie_id:n,movie_channel:r,comment_body:o,comment_user_id:i,comment_user_name:s}=t.payload,a={comment_id:Math.floor(Math.random()*99999),comment_body:o,comment_user_id:i,comment_user_name:s};e.Channel[r].Movies.find(u=>u.movie_id===n).movie_comments.push(a),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},DelMoviesComment(e,t){const{movie_id:n,movie_channel:r,comment_id:o}=t.payload,s=e.Channel[r].Movies.find(a=>a.movie_id===n);s&&(s.movie_comments=s.movie_comments.filter(a=>a.comment_id!==o)),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},IsMovieChangeLike(e,t){const{channel_name:n,type:r,movie_id:o}=t.payload,s=e.Channel[n].Movies.find(a=>a.movie_id===o);r==="plus"?s.movie_like_count+=1:s.movie_like_count-=1,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},IsMovieChangeSubscriber(e,t){const{channel_name:n,type:r}=t.payload,o=e.Channel[n];r==="plus"?o.channel_subscribers+=1:o.channel_subscribers-=1,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},getAllMovies(e){e.allMovies=[],Object.keys(e.Channel).forEach(t=>{e.allMovies.push(...e.Channel[t].Movies)}),localStorage.setItem("YoutubeAllMovies",JSON.stringify(e.allMovies))}}}),{ChangeChannelInfo:$4,AddNewChannel:Xw,AddNewMovies:Jw,DelMovies:Qw,ChangeMovies:H4,AddNewMoviesComment:Zw,DelMoviesComment:eb,IsMovieChangeLike:em,getAllMovies:Mt,IsMovieChangeSubscriber:Gp}=Kp.actions,tb=Kp.reducer,nb=()=>{const{Channel:e}=R(m=>m.channel),{isLoginUser:t,isAuth:n}=R(m=>m.auth),r=re(),o=W(),i=Object.values(e).find(m=>m.channel_id===Number(t.user_id)),[s,a]=A.useState([]),c=m=>{if(m.target.checked){const v=i.Movies.map(_=>_.movie_id);a(v)}else a([])},u=m=>{a(v=>v.includes(m)?v.filter(_=>_!==m):[...v,m])},d=()=>{r(Qw({channel_name:i.Movies[0].movie_channel,movie_id:s})),a([]),r(Mt())};return A.useEffect(()=>{n||o("/")},[n]),l.jsx(Dw,{children:l.jsxs("div",{className:"inner",children:[l.jsx("h2",{className:"studio-title",children:"채널 콘텐츠"}),l.jsxs("div",{className:s.length>0?"del-menu active":"del-menu",children:[l.jsxs("p",{className:"selectedMovies-length",children:[s.length,"개 선택됨"]}),l.jsx("p",{className:"del-btn",onClick:d,children:"삭제"})]}),l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:l.jsx("input",{type:"checkbox",onChange:c,checked:s.length===i.Movies.length})}),l.jsx("th",{children:"동영상"}),l.jsx("th",{children:"제목"}),l.jsx("th",{children:"공개 상태"}),l.jsx("th",{children:"제한사항"}),l.jsx("th",{children:"날짜"}),l.jsx("th",{children:"조회수"}),l.jsx("th",{children:"댓글"}),l.jsx("th",{children:"좋아요"})]})}),l.jsx("tbody",{children:i.Movies.map(m=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("input",{type:"checkbox",checked:s.includes(m.movie_id),onChange:()=>u(m.movie_id)})}),l.jsx("td",{className:"movie_video",children:l.jsx(Ie,{movie:m})}),l.jsxs("td",{className:"movie_info",children:[l.jsx("p",{className:"movie_title",children:m.movie_title}),l.jsx("p",{className:"movie_body",children:m.movie_body})]}),l.jsx("td",{children:"공개"}),l.jsx("td",{className:"limited-text",children:"저작권"}),l.jsxs("td",{className:"movie_date",children:[m.movie_date.year,".",m.movie_date.month,".",m.movie_date.day]}),l.jsx("td",{children:m.movie_like_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),l.jsx("td",{children:m.movie_comments.length}),l.jsx("td",{children:m.movie_like_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]},m.movie_id))})]})]})})},ue=B.button`
    background-color: #eeeeee;
    border-radius: 2rem;
    border: none;
    padding: 1.5rem 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #e0e0e0;
    }
    @media ${Ce.mobile} {
        width: 10vw;
        font-size: 70%;
    }
`,rb=()=>{const{isLoginUser:e}=R(w=>w.auth),[t,n]=A.useState(null),[r,o]=A.useState(null),i=new Date,[s,a]=A.useState({movie_title:"",movie_body:"",movie_category:"",movie_image:null,movie_video:null}),c=re(),u=W(),d=w=>{const{name:p,value:f}=w.target;a(h=>({...h,[p]:f}))},m=w=>{const p=w.target.files[0];p&&(a(f=>({...f,movie_image:p})),o(URL.createObjectURL(p)),g(p))},v=w=>{const p=w.target.files[0];p&&(a(f=>({...f,movie_video:p})),n(URL.createObjectURL(p)),_(p))},_=w=>{const p=indexedDB.open("videoDB",1);p.onupgradeneeded=f=>{const h=f.target.result;h.objectStoreNames.contains("videos")||h.createObjectStore("videos",{keyPath:"id",autoIncrement:!0})},p.onsuccess=f=>{f.target.result.transaction("videos","readwrite").objectStore("videos").add({video:w})},p.onerror=f=>{console.error("IndexedDB 에러:",f)}},g=w=>{const p=indexedDB.open("imageDB",1);p.onupgradeneeded=f=>{const h=f.target.result;h.objectStoreNames.contains("images")||h.createObjectStore("images",{keyPath:"id",autoIncrement:!0})},p.onsuccess=f=>{f.target.result.transaction("images","readwrite").objectStore("images").add({image:w})},p.onerror=f=>{console.error("IndexedDB 에러:",f)}},y=w=>{w.preventDefault(),!s.movie_title||!s.movie_body||!s.movie_image||!s.movie_video?alert("누락된 정보가 있습니다."):(c(Jw({movie_title:s.movie_title,movie_body:s.movie_body,movie_category:s.movie_category,movie_image:r,movie_video:t,movie_like_count:0,movie_channel:e.user_email.split("@")[0],movie_channel_id:e.user_id,movie_date:{year:i.getFullYear(),month:i.getMonth()+1,day:i.getDate()},movie_comments:[],movie_video_type:"video"})),u(`/studio/${e.user_id}/content`),c(Mt()))};return l.jsx(Uw,{children:l.jsxs("div",{className:"inner",children:[l.jsx("h2",{className:"studio-title",children:"동영상 업로드"}),l.jsxs("form",{className:"upload-form",onSubmit:y,children:[l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_title",children:"제목"}),l.jsx("input",{type:"text",name:"movie_title",id:"movie_title",className:"movie_title",value:s.movie_title,onChange:d,placeholder:"영상 제목을 작성해 주세요"})]}),l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_body",children:"설명"}),l.jsx("textarea",{name:"movie_body",id:"movie_body",className:"movie_body",value:s.movie_body,onChange:d,placeholder:"영상 소개글을 작성해 주세요"})]}),l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_category",children:"카테고리"}),l.jsx("input",{type:"text",name:"movie_category",id:"movie_category",className:"movie_category",value:s.movie_category,onChange:d,placeholder:"카테고리는 영문으로 작성해 주세요 ex) vloog"})]}),l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_image",children:"썸네일"}),l.jsx("input",{type:"file",name:"movie_image",id:"movie_image",className:"movie_image",onChange:m}),l.jsxs("div",{className:"img-wrap",children:[l.jsx("p",{children:"미리보기"}),r&&l.jsx("img",{src:r,alt:"썸네일 미리보기"})]})]}),l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_video",children:"동영상"}),l.jsx("input",{type:"file",name:"movie_video",id:"movie_video",className:"movie_video",onChange:v}),l.jsxs("div",{className:"video-wrap",children:[l.jsx("p",{children:"미리보기"}),t&&l.jsx("video",{controls:!0,width:"500",src:t})]})]}),l.jsx("p",{children:l.jsx(ue,{type:"submit",children:"업로드"})})]})]})})},ob=B.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
    .top-category {
        display: flex;
        flex-direction: row; /* 가로 정렬 */
        flex-wrap: nowrap; /* 줄 바꿈 방지 */
        overflow-x: auto; /* 가로 스크롤 활성화 */
        white-space: nowrap; /* 항목들이 한 줄로 나오게 설정 */
        margin-bottom: 2.6rem;
        .top-menu-li {
            margin-right: 1.6rem;
            &.active {
                .top-menu-button {
                    background-color: #000;
                    color: #fff;
                }
            }
            .top-menu-button {
                padding: 0.8rem 1.6rem;
                border-radius: 1rem;
                overflow: hidden;
                white-space: nowrap; /* 버튼 텍스트가 줄 바꿈 되지 않도록 설정 */
            }
        }
    }
    .main-video-wrap {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .video-loder {
            width: ${e=>e.width};
            &:not(:nth-child(${e=>e.$not}n)) {
                margin-right: 1%;
            }
            &:nth-child(5n) {
                .plus-menu {
                    .save-list {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        left: -20rem;
                    }
                }
            }
            margin-bottom: 2.2%;
            .text-wrap {
                .movie_info {
                    max-width: 28rem;
                }
            }
            .plus-menu {
                .save-list {
                    right: -750%;
                }
            }
        }
    }
    .main-banner {
        width: 100%;
        margin-bottom: 5rem;
        .main-banner-img {
            width: 100%;
        }
    }
    #scroll-anchor {
        min-height: 1rem;
        position: relative;
        width: 100%;
    }
    @media ${Ce.mobile} {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        width: 100%;
        .top-category {
            padding: 0 1rem;
            overflow: hidden;
            .top-menu-li {
                button {
                    display: inline-block;
                    width: fit-content;
                    padding: 0.5rem 1rem;
                }
            }
        }

        .main-video-wrap {
            display: flex;
            flex-direction: column;
            width: 100%;
            .video-loder {
                width: 100%;
                margin-right: 0;
                .plus-menu {
                    .save-list {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        left: -20rem;
                    }
                }
                margin-bottom: 4%;
                .text-wrap {
                    .movie_info {
                        max-width: 50rem;
                    }
                }
            }
        }
    }
`,tm=({name:e,category:t,thisMenu:n,setThisMenu:r})=>l.jsx("li",{className:`top-menu-li ${n===t?" active":""}`,onClick:()=>r(t),children:l.jsx(ue,{className:"top-menu-button",children:e})}),ib=[{id:16545641,name:"전체",category:"all"},{id:153,name:"이야기",category:"talk"},{id:513,name:"브이로그",category:"vlog"},{id:165,name:"코미디",category:"Comedy"},{id:955,name:"음악",category:"music"},{id:562,name:"영화감상",category:"movie_review"},{id:464,name:"라이브",category:"live"},{id:161,name:"음식",category:"food"},{id:164,name:"인터뷰",category:"interview"},{id:478,name:"게임",category:"gaming"},{id:654,name:"챌린지",category:"challenge"},{id:789,name:"엔터테인먼트",category:"entertainment"},{id:879,name:"다큐멘터리",category:"documentary"},{id:963,name:"동물",category:"animal"},{id:844,name:"쇼핑",category:"shopping"},{id:951,name:"메이크업",category:"makeup"},{id:351,name:"여행",category:"travel"}],sb=B.div`
    height: 100%;
    margin: 2% auto;
    min-height: 100vh;
`,nm=B.ul`
    width: 100rem;
    min-height: 100vh;
    .not-search {
    }
    .channel-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2%;
        .channel-profile {
            width: 50%;
            display: flex;
            justify-content: center;
            .channel-logo {
                border-radius: 50%;
            }
        }
        .channel-info {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 3%;
            .info-text {
                width: 75%;
                .name {
                    font-size: 2rem;
                }
                .info {
                    font-size: 1.4rem;
                    color: #777;
                }
            }
        }
    }
    .movie-item {
        .video-loder {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 30rem;
            .video-wrap {
                width: 50%;
                overflow: unset;
                img,
                iframe,
                video {
                    height: 50%;
                    border-radius: 1rem;
                }
            }
            .text-wrap {
                width: 50%;
                margin-left: 2%;
                height: 100%;
                padding: 0.2rem 0;
                .movie_info {
                    .movie_title {
                        font-size: 2rem;
                        font-weight: 500;
                    }
                    .movie_body {
                        display: block;
                        margin-top: 1rem;
                    }
                }
            }
        }
    }
    @media ${Ce.mobile} {
        width: 95vw;
        .channel-item {
            height: 11vh;
            .channel-profile {
                .channel-logo {
                    width: 50%;
                }
            }
            .channel-info {
                margin-right: 2%;
                width: 46%;
                .info-text {
                    width: 50vw;
                    .name {
                        letter-spacing: -0.19rem;
                    }
                }
                .channel-btn {
                    margin-left: -10%;
                }
            }
        }
        .movie-item {
            .video-loder {
                height: 13vh;
                .text-wrap {
                }
            }
        }
    }
`,ab=B.div`
    width: 100%;
    display: flex;
    .no-search {
        margin: auto;
        box-shadow: #00000024 0.2rem 0.4rem 2rem;
        width: 50rem;
        border-radius: 1rem;
        padding: 2rem;
        box-sizing: border-box;
        text-align: center;
        .no-search-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        .no-search-desc {
            font-size: 1.4rem;
            color: #777;
        }
    }
`,Yp=()=>l.jsx(ab,{children:l.jsxs("div",{className:"no-search",children:[l.jsx("h2",{className:"no-search-title",children:"검색하여 시작하기"}),l.jsxs("p",{className:"no-search-desc",children:["내가 좋아할 만한 동영상 피드를 받을 수 있도록",l.jsx("br",{}),"동영상 시청을 시작해 보세요"]})]})});function Xp(e,t){return function(){return e.apply(t,arguments)}}const{toString:lb}=Object.prototype,{getPrototypeOf:ou}=Object,Fs=(e=>t=>{const n=lb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pt=e=>(e=e.toLowerCase(),t=>Fs(t)===e),Ds=e=>t=>typeof t===e,{isArray:Cr}=Array,ko=Ds("undefined");function cb(e){return e!==null&&!ko(e)&&e.constructor!==null&&!ko(e.constructor)&&He(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Jp=pt("ArrayBuffer");function ub(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Jp(e.buffer),t}const db=Ds("string"),He=Ds("function"),Qp=Ds("number"),Us=e=>e!==null&&typeof e=="object",mb=e=>e===!0||e===!1,bi=e=>{if(Fs(e)!=="object")return!1;const t=ou(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},fb=pt("Date"),hb=pt("File"),pb=pt("Blob"),vb=pt("FileList"),gb=e=>Us(e)&&He(e.pipe),_b=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||He(e.append)&&((t=Fs(e))==="formdata"||t==="object"&&He(e.toString)&&e.toString()==="[object FormData]"))},yb=pt("URLSearchParams"),[wb,bb,xb,Sb]=["ReadableStream","Request","Response","Headers"].map(pt),Ab=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Cr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function Zp(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const An=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ev=e=>!ko(e)&&e!==An;function Dl(){const{caseless:e}=ev(this)&&this||{},t={},n=(r,o)=>{const i=e&&Zp(t,o)||o;bi(t[i])&&bi(r)?t[i]=Dl(t[i],r):bi(r)?t[i]=Dl({},r):Cr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Bo(arguments[r],n);return t}const Cb=(e,t,n,{allOwnKeys:r}={})=>(Bo(t,(o,i)=>{n&&He(o)?e[i]=Xp(o,n):e[i]=o},{allOwnKeys:r}),e),kb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),jb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Eb=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&ou(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Nb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Lb=e=>{if(!e)return null;if(Cr(e))return e;let t=e.length;if(!Qp(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ib=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ou(Uint8Array)),Pb=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Rb=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ob=pt("HTMLFormElement"),Bb=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),rm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Tb=pt("RegExp"),tv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Bo(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},Mb=e=>{tv(e,(t,n)=>{if(He(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(He(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Fb=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Cr(e)?r(e):r(String(e).split(t)),n},Db=()=>{},Ub=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Ca="abcdefghijklmnopqrstuvwxyz",om="0123456789",nv={DIGIT:om,ALPHA:Ca,ALPHA_DIGIT:Ca+Ca.toUpperCase()+om},zb=(e=16,t=nv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function qb(e){return!!(e&&He(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Wb=e=>{const t=new Array(10),n=(r,o)=>{if(Us(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Cr(r)?[]:{};return Bo(r,(s,a)=>{const c=n(s,o+1);!ko(c)&&(i[a]=c)}),t[o]=void 0,i}}return r};return n(e,0)},Vb=pt("AsyncFunction"),$b=e=>e&&(Us(e)||He(e))&&He(e.then)&&He(e.catch),rv=((e,t)=>e?setImmediate:t?((n,r)=>(An.addEventListener("message",({source:o,data:i})=>{o===An&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),An.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",He(An.postMessage)),Hb=typeof queueMicrotask<"u"?queueMicrotask.bind(An):typeof process<"u"&&process.nextTick||rv,S={isArray:Cr,isArrayBuffer:Jp,isBuffer:cb,isFormData:_b,isArrayBufferView:ub,isString:db,isNumber:Qp,isBoolean:mb,isObject:Us,isPlainObject:bi,isReadableStream:wb,isRequest:bb,isResponse:xb,isHeaders:Sb,isUndefined:ko,isDate:fb,isFile:hb,isBlob:pb,isRegExp:Tb,isFunction:He,isStream:gb,isURLSearchParams:yb,isTypedArray:Ib,isFileList:vb,forEach:Bo,merge:Dl,extend:Cb,trim:Ab,stripBOM:kb,inherits:jb,toFlatObject:Eb,kindOf:Fs,kindOfTest:pt,endsWith:Nb,toArray:Lb,forEachEntry:Pb,matchAll:Rb,isHTMLForm:Ob,hasOwnProperty:rm,hasOwnProp:rm,reduceDescriptors:tv,freezeMethods:Mb,toObjectSet:Fb,toCamelCase:Bb,noop:Db,toFiniteNumber:Ub,findKey:Zp,global:An,isContextDefined:ev,ALPHABET:nv,generateString:zb,isSpecCompliantForm:qb,toJSONObject:Wb,isAsyncFn:Vb,isThenable:$b,setImmediate:rv,asap:Hb};function M(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}S.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.status}}});const ov=M.prototype,iv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{iv[e]={value:e}});Object.defineProperties(M,iv);Object.defineProperty(ov,"isAxiosError",{value:!0});M.from=(e,t,n,r,o,i)=>{const s=Object.create(ov);return S.toFlatObject(e,s,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),M.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Kb=null;function Ul(e){return S.isPlainObject(e)||S.isArray(e)}function sv(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function im(e,t,n){return e?e.concat(t).map(function(o,i){return o=sv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Gb(e){return S.isArray(e)&&!e.some(Ul)}const Yb=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function zs(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,w){return!S.isUndefined(w[y])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(S.isDate(g))return g.toISOString();if(!c&&S.isBlob(g))throw new M("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(g)||S.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,y,w){let p=g;if(g&&!w&&typeof g=="object"){if(S.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(S.isArray(g)&&Gb(g)||(S.isFileList(g)||S.endsWith(y,"[]"))&&(p=S.toArray(g)))return y=sv(y),p.forEach(function(h,b){!(S.isUndefined(h)||h===null)&&t.append(s===!0?im([y],b,i):s===null?y:y+"[]",u(h))}),!1}return Ul(g)?!0:(t.append(im(w,y,i),u(g)),!1)}const m=[],v=Object.assign(Yb,{defaultVisitor:d,convertValue:u,isVisitable:Ul});function _(g,y){if(!S.isUndefined(g)){if(m.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));m.push(g),S.forEach(g,function(p,f){(!(S.isUndefined(p)||p===null)&&o.call(t,p,S.isString(f)?f.trim():f,y,v))===!0&&_(p,y?y.concat(f):[f])}),m.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return _(e),t}function sm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function iu(e,t){this._pairs=[],e&&zs(e,this,t)}const av=iu.prototype;av.append=function(t,n){this._pairs.push([t,n])};av.toString=function(t){const n=t?function(r){return t.call(this,r,sm)}:sm;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Xb(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lv(e,t,n){if(!t)return e;const r=n&&n.encode||Xb,o=n&&n.serialize;let i;if(o?i=o(t,n):i=S.isURLSearchParams(t)?t.toString():new iu(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class am{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const cv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jb=typeof URLSearchParams<"u"?URLSearchParams:iu,Qb=typeof FormData<"u"?FormData:null,Zb=typeof Blob<"u"?Blob:null,ex={isBrowser:!0,classes:{URLSearchParams:Jb,FormData:Qb,Blob:Zb},protocols:["http","https","file","blob","url","data"]},su=typeof window<"u"&&typeof document<"u",zl=typeof navigator=="object"&&navigator||void 0,tx=su&&(!zl||["ReactNative","NativeScript","NS"].indexOf(zl.product)<0),nx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rx=su&&window.location.href||"http://localhost",ox=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:su,hasStandardBrowserEnv:tx,hasStandardBrowserWebWorkerEnv:nx,navigator:zl,origin:rx},Symbol.toStringTag,{value:"Module"})),Te={...ox,...ex};function ix(e,t){return zs(e,new Te.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Te.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function sx(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ax(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function uv(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),c=i>=n.length;return s=!s&&S.isArray(o)?o.length:s,c?(S.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!S.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&S.isArray(o[s])&&(o[s]=ax(o[s])),!a)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,o)=>{t(sx(r),o,n,0)}),n}return null}function lx(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const To={transitional:cv,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=S.isObject(t);if(i&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return o?JSON.stringify(uv(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t)||S.isReadableStream(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ix(t,this.formSerializer).toString();if((a=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return zs(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),lx(t)):t}],transformResponse:[function(t){const n=this.transitional||To.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(S.isResponse(t)||S.isReadableStream(t))return t;if(t&&S.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?M.from(a,M.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Te.classes.FormData,Blob:Te.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],e=>{To.headers[e]={}});const cx=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ux=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&cx[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},lm=Symbol("internals");function Fr(e){return e&&String(e).trim().toLowerCase()}function xi(e){return e===!1||e==null?e:S.isArray(e)?e.map(xi):String(e)}function dx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const mx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ka(e,t,n,r,o){if(S.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function fx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function hx(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class Me{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,c,u){const d=Fr(c);if(!d)throw new Error("header name must be a non-empty string");const m=S.findKey(o,d);(!m||o[m]===void 0||u===!0||u===void 0&&o[m]!==!1)&&(o[m||c]=xi(a))}const s=(a,c)=>S.forEach(a,(u,d)=>i(u,d,c));if(S.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(S.isString(t)&&(t=t.trim())&&!mx(t))s(ux(t),n);else if(S.isHeaders(t))for(const[a,c]of t.entries())i(c,a,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Fr(t),t){const r=S.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return dx(o);if(S.isFunction(n))return n.call(this,o,r);if(S.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Fr(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ka(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Fr(s),s){const a=S.findKey(r,s);a&&(!n||ka(r,r[a],a,n))&&(delete r[a],o=!0)}}return S.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||ka(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return S.forEach(this,(o,i)=>{const s=S.findKey(r,i);if(s){n[s]=xi(o),delete n[i];return}const a=t?fx(i):String(i).trim();a!==i&&delete n[i],n[a]=xi(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return S.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[lm]=this[lm]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Fr(s);r[a]||(hx(o,s),r[a]=!0)}return S.isArray(t)?t.forEach(i):i(t),this}}Me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(Me.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});S.freezeMethods(Me);function ja(e,t){const n=this||To,r=t||n,o=Me.from(r.headers);let i=r.data;return S.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function dv(e){return!!(e&&e.__CANCEL__)}function kr(e,t,n){M.call(this,e??"canceled",M.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(kr,M,{__CANCEL__:!0});function mv(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function px(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function vx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[i];s||(s=u),n[o]=c,r[o]=u;let m=i,v=0;for(;m!==o;)v+=n[m++],m=m%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const _=d&&u-d;return _?Math.round(v*1e3/_):void 0}}function gx(e,t){let n=0,r=1e3/t,o,i;const s=(u,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),m=d-n;m>=r?s(u,d):(o=u,i||(i=setTimeout(()=>{i=null,s(o)},r-m)))},()=>o&&s(o)]}const is=(e,t,n=3)=>{let r=0;const o=vx(50,250);return gx(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,c=s-r,u=o(c),d=s<=a;r=s;const m={loaded:s,total:a,progress:a?s/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a&&d?(a-s)/u:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(m)},n)},cm=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},um=e=>(...t)=>S.asap(()=>e(...t)),_x=Te.hasStandardBrowserEnv?function(){const t=Te.navigator&&/(msie|trident)/i.test(Te.navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const a=S.isString(s)?o(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),yx=Te.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];S.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),S.isString(r)&&s.push("path="+r),S.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function fv(e,t){return e&&!wx(t)?bx(e,t):t}const dm=e=>e instanceof Me?{...e}:e;function Mn(e,t){t=t||{};const n={};function r(u,d,m){return S.isPlainObject(u)&&S.isPlainObject(d)?S.merge.call({caseless:m},u,d):S.isPlainObject(d)?S.merge({},d):S.isArray(d)?d.slice():d}function o(u,d,m){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u,m)}else return r(u,d,m)}function i(u,d){if(!S.isUndefined(d))return r(void 0,d)}function s(u,d){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,m){if(m in t)return r(u,d);if(m in e)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d)=>o(dm(u),dm(d),!0)};return S.forEach(Object.keys(Object.assign({},e,t)),function(d){const m=c[d]||o,v=m(e[d],t[d],d);S.isUndefined(v)&&m!==a||(n[d]=v)}),n}const hv=e=>{const t=Mn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;t.headers=s=Me.from(s),t.url=lv(fv(t.baseURL,t.url),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(S.isFormData(n)){if(Te.hasStandardBrowserEnv||Te.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[u,...d]=c?c.split(";").map(m=>m.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...d].join("; "))}}if(Te.hasStandardBrowserEnv&&(r&&S.isFunction(r)&&(r=r(t)),r||r!==!1&&_x(t.url))){const u=o&&i&&yx.read(i);u&&s.set(o,u)}return t},xx=typeof XMLHttpRequest<"u",Sx=xx&&function(e){return new Promise(function(n,r){const o=hv(e);let i=o.data;const s=Me.from(o.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:u}=o,d,m,v,_,g;function y(){_&&_(),g&&g(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let w=new XMLHttpRequest;w.open(o.method.toUpperCase(),o.url,!0),w.timeout=o.timeout;function p(){if(!w)return;const h=Me.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:h,config:e,request:w};mv(function(x){n(x),y()},function(x){r(x),y()},C),w=null}"onloadend"in w?w.onloadend=p:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(p)},w.onabort=function(){w&&(r(new M("Request aborted",M.ECONNABORTED,e,w)),w=null)},w.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let b=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const C=o.transitional||cv;o.timeoutErrorMessage&&(b=o.timeoutErrorMessage),r(new M(b,C.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,w)),w=null},i===void 0&&s.setContentType(null),"setRequestHeader"in w&&S.forEach(s.toJSON(),function(b,C){w.setRequestHeader(C,b)}),S.isUndefined(o.withCredentials)||(w.withCredentials=!!o.withCredentials),a&&a!=="json"&&(w.responseType=o.responseType),u&&([v,g]=is(u,!0),w.addEventListener("progress",v)),c&&w.upload&&([m,_]=is(c),w.upload.addEventListener("progress",m),w.upload.addEventListener("loadend",_)),(o.cancelToken||o.signal)&&(d=h=>{w&&(r(!h||h.type?new kr(null,e,w):h),w.abort(),w=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const f=px(o.url);if(f&&Te.protocols.indexOf(f)===-1){r(new M("Unsupported protocol "+f+":",M.ERR_BAD_REQUEST,e));return}w.send(i||null)})},Ax=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,a();const d=u instanceof Error?u:this.reason;r.abort(d instanceof M?d:new kr(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>S.asap(a),c}},Cx=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},kx=async function*(e,t){for await(const n of jx(e))yield*Cx(n,t)},jx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},mm=(e,t,n,r)=>{const o=kx(e,t);let i=0,s,a=c=>{s||(s=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await o.next();if(u){a(),c.close();return}let m=d.byteLength;if(n){let v=i+=m;n(v)}c.enqueue(new Uint8Array(d))}catch(u){throw a(u),u}},cancel(c){return a(c),o.return()}},{highWaterMark:2})},qs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",pv=qs&&typeof ReadableStream=="function",Ex=qs&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),vv=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Nx=pv&&vv(()=>{let e=!1;const t=new Request(Te.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),fm=64*1024,ql=pv&&vv(()=>S.isReadableStream(new Response("").body)),ss={stream:ql&&(e=>e.body)};qs&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!ss[t]&&(ss[t]=S.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new M(`Response type '${t}' is not supported`,M.ERR_NOT_SUPPORT,r)})})})(new Response);const Lx=async e=>{if(e==null)return 0;if(S.isBlob(e))return e.size;if(S.isSpecCompliantForm(e))return(await new Request(Te.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(S.isArrayBufferView(e)||S.isArrayBuffer(e))return e.byteLength;if(S.isURLSearchParams(e)&&(e=e+""),S.isString(e))return(await Ex(e)).byteLength},Ix=async(e,t)=>{const n=S.toFiniteNumber(e.getContentLength());return n??Lx(t)},Px=qs&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:d,withCredentials:m="same-origin",fetchOptions:v}=hv(e);u=u?(u+"").toLowerCase():"text";let _=Ax([o,i&&i.toAbortSignal()],s),g;const y=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let w;try{if(c&&Nx&&n!=="get"&&n!=="head"&&(w=await Ix(d,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),k;if(S.isFormData(r)&&(k=C.headers.get("content-type"))&&d.setContentType(k),C.body){const[x,j]=cm(w,is(um(c)));r=mm(C.body,fm,x,j)}}S.isString(m)||(m=m?"include":"omit");const p="credentials"in Request.prototype;g=new Request(t,{...v,signal:_,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:p?m:void 0});let f=await fetch(g);const h=ql&&(u==="stream"||u==="response");if(ql&&(a||h&&y)){const C={};["status","statusText","headers"].forEach(L=>{C[L]=f[L]});const k=S.toFiniteNumber(f.headers.get("content-length")),[x,j]=a&&cm(k,is(um(a),!0))||[];f=new Response(mm(f.body,fm,x,()=>{j&&j(),y&&y()}),C)}u=u||"text";let b=await ss[S.findKey(ss,u)||"text"](f,e);return!h&&y&&y(),await new Promise((C,k)=>{mv(C,k,{data:b,headers:Me.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:g})})}catch(p){throw y&&y(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,e,g),{cause:p.cause||p}):M.from(p,p&&p.code,e,g)}}),Wl={http:Kb,xhr:Sx,fetch:Px};S.forEach(Wl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const hm=e=>`- ${e}`,Rx=e=>S.isFunction(e)||e===null||e===!1,gv={getAdapter:e=>{e=S.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!Rx(n)&&(r=Wl[(s=String(n)).toLowerCase()],r===void 0))throw new M(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(hm).join(`
`):" "+hm(i[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Wl};function Ea(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new kr(null,e)}function pm(e){return Ea(e),e.headers=Me.from(e.headers),e.data=ja.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),gv.getAdapter(e.adapter||To.adapter)(e).then(function(r){return Ea(e),r.data=ja.call(e,e.transformResponse,r),r.headers=Me.from(r.headers),r},function(r){return dv(r)||(Ea(e),r&&r.response&&(r.response.data=ja.call(e,e.transformResponse,r.response),r.response.headers=Me.from(r.response.headers))),Promise.reject(r)})}const _v="1.7.7",au={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{au[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const vm={};au.transitional=function(t,n,r){function o(i,s){return"[Axios v"+_v+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new M(o(s," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!vm[s]&&(vm[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};function Ox(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],c=a===void 0||s(a,i,e);if(c!==!0)throw new M("option "+i+" must be "+c,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+i,M.ERR_BAD_OPTION)}}const Vl={assertOptions:Ox,validators:au},qt=Vl.validators;class Nn{constructor(t){this.defaults=t,this.interceptors={request:new am,response:new am}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Mn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Vl.assertOptions(r,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean)},!1),o!=null&&(S.isFunction(o)?n.paramsSerializer={serialize:o}:Vl.assertOptions(o,{encode:qt.function,serialize:qt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&S.merge(i.common,i[n.method]);i&&S.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=Me.concat(s,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,m=0,v;if(!c){const g=[pm.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),v=g.length,d=Promise.resolve(n);m<v;)d=d.then(g[m++],g[m++]);return d}v=a.length;let _=n;for(m=0;m<v;){const g=a[m++],y=a[m++];try{_=g(_)}catch(w){y.call(this,w);break}}try{d=pm.call(this,_)}catch(g){return Promise.reject(g)}for(m=0,v=u.length;m<v;)d=d.then(u[m++],u[m++]);return d}getUri(t){t=Mn(this.defaults,t);const n=fv(t.baseURL,t.url);return lv(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){Nn.prototype[t]=function(n,r){return this.request(Mn(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(Mn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Nn.prototype[t]=n(),Nn.prototype[t+"Form"]=n(!0)});class lu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new kr(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new lu(function(o){t=o}),cancel:t}}}function Bx(e){return function(n){return e.apply(null,n)}}function Tx(e){return S.isObject(e)&&e.isAxiosError===!0}const $l={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($l).forEach(([e,t])=>{$l[t]=e});function yv(e){const t=new Nn(e),n=Xp(Nn.prototype.request,t);return S.extend(n,Nn.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return yv(Mn(e,o))},n}const ae=yv(To);ae.Axios=Nn;ae.CanceledError=kr;ae.CancelToken=lu;ae.isCancel=dv;ae.VERSION=_v;ae.toFormData=zs;ae.AxiosError=M;ae.Cancel=ae.CanceledError;ae.all=function(t){return Promise.all(t)};ae.spread=Bx;ae.isAxiosError=Tx;ae.mergeConfig=Mn;ae.AxiosHeaders=Me;ae.formToJSON=e=>uv(S.isHTMLForm(e)?new FormData(e):e);ae.getAdapter=gv.getAdapter;ae.HttpStatusCode=$l;ae.default=ae;const Mx=()=>{var C,k;const{allMovies:e}=R(x=>x.channel),{isAuth:t,isLoginUser:n}=R(x=>x.auth),{isSideMenu:r}=R(x=>x.header),o=re(),i=A.useRef(),s=A.useRef(),[a]=A.useState(ib.filter(x=>x.category!=="all").sort(()=>Math.random()-.5).slice(0,7)),[c,u]=A.useState("all"),[d,m]=A.useState(8),[v,_]=A.useState([]),[g,y]=A.useState([]),[w,p]=A.useState([]),f=()=>{m(x=>x+(r?8:10))},[h,b]=A.useState({});if(A.useEffect(()=>{e.length===0&&o(Mt()),document.title="YouTube",d>=e.length&&m(e.length+10)},[o,e.length,d]),A.useEffect(()=>{if(e.length>0){const x=e.slice().sort(()=>Math.random()-.5),j=[],L=[];for(let N=0;N<x.length;N+=10)j.push(x.slice(N,N+10));for(let N=0;N<x.length;N+=8)L.push(x.slice(N,N+8));_(j),y(L),m(r?8:10)}},[e]),A.useEffect(()=>{},[r]),A.useEffect(()=>(i.current&&i.current.disconnect(),i.current=new IntersectionObserver(x=>{x.forEach(j=>{j.isIntersecting&&f()})},{threshold:1}),s.current&&i.current.observe(s.current),()=>{i.current&&s.current&&i.current.unobserve(s.current)}),[]),A.useEffect(()=>{if(t)return;(async()=>{try{const L=(await ae.get("https://geolocation-db.com/json/")).data.IPv4;!t&&L&&o(Vp({ip:L}))}catch(j){console.log(j)}})()},[t]),A.useEffect(()=>{var L,N;if(!n)return;const x=Array.from(new Set((L=n==null?void 0:n.Viewing_Record)==null?void 0:L.map(V=>V.movie_category))),j=Array.from(new Set((N=n==null?void 0:n.user_search_list)==null?void 0:N.map(V=>V.search)));b({...h,movieCategory:x,searchList:j})},[n==null?void 0:n.Viewing_Record,n==null?void 0:n.user_search_list]),A.useEffect(()=>{const x=De=>De[Math.floor(Math.random()*De.length)],j=h!=null&&h.movieCategory?x(h==null?void 0:h.movieCategory):null,L=h!=null&&h.searchList?x(h==null?void 0:h.searchList):null,N=j?e.filter(De=>De.movie_category.includes(j)):[],V=L?e.filter(De=>De.movie_title.includes(L)):[],Fe=(N||V).sort(()=>Math.random()-.5).slice(0,10);if(Fe.length<10){const De=e.filter(jr=>!Fe.includes(jr)).sort(()=>Math.random()-.5).slice(0,10-Fe.length);p([...Fe,...De])}else p(Fe)},[h]),!e)return l.jsx(os,{});if(e)return l.jsx(ob,{width:r?"24.25%":"19.2%",$not:r?4:5,children:((C=h==null?void 0:h.movieCategory)==null?void 0:C.length)!==0||((k=h==null?void 0:h.searchList)==null?void 0:k.length)!==0?l.jsxs(l.Fragment,{children:[l.jsxs("ul",{className:"top-category",children:[l.jsx(tm,{name:"전체",category:"all",thisMenu:c,setThisMenu:u},"16545641"),a&&a.map(x=>l.jsx(tm,{name:x.name,category:x.category,thisMenu:c,setThisMenu:u},x.id))]}),l.jsx("ul",{className:"main-video-wrap",children:c==="all"?(w==null?void 0:w.length)===0&&v.length!==0?v[0].slice(0,r?8:10).map(x=>l.jsx(Ie,{movie:x},x.movie_id)):w.slice(0,r?8:10).map(x=>l.jsx(Ie,{movie:x},x.movie_id)):e.filter(x=>x.movie_category.includes(c)).sort(()=>Math.random()-.5).slice(0,r?8:10).map(x=>l.jsx(Ie,{movie:x},x.movie_id))}),l.jsx("div",{className:"main-banner",children:l.jsx("img",{className:"main-banner-img",src:"https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_banner.jpg?raw=true",alt:"Main Banner"})}),r?g.slice(0,Math.ceil(d/8)).map((x,j)=>l.jsx("ul",{className:"main-video-wrap",children:x.map(L=>l.jsx(Ie,{movie:L},L.movie_id))},`video-chunk-${j}`)):v.slice(0,Math.ceil(d/10)).map((x,j)=>l.jsx("ul",{className:"main-video-wrap",children:x.map(L=>l.jsx(Ie,{movie:L},L.movie_id))},`video-chunk-${j}`)),l.jsx("div",{id:"scroll-anchor",ref:s,children:d!==(e==null?void 0:e.length)+10?l.jsx(os,{}):null})]}):l.jsx("div",{className:"no-login",children:l.jsx(Yp,{})})})},Fx=B.dialog`
  &.popup-box {
    max-width: 60rem;
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 0.6rem 5rem rgba(0, 0, 0, 0.4);
    border: none;
    background: #fff;
    .popup-title {
      margin-bottom: 3rem;
      color: #606060;
      font-size: 1.4rem;
    }
    .popup-btns {
      display: flex;
      justify-content: end;
      button {
        z-index: 10;
        cursor: pointer;
        background: none;
        border: none;
      }
      .popup-subscript-end {
        color: #065fd4;
        margin-left: 1rem;
      }
    }
  }
`,wv=({handleClosePopup:e,channel_name:t,thisChannelID:n})=>{const r=re(),{isLoginUser:o}=R(i=>i.auth);return l.jsxs(Fx,{id:"subscript-popup",className:"popup-box",children:[l.jsxs("p",{className:"popup-title",children:[t," 구독을 취소하시겠습니까?"]}),l.jsxs("div",{className:"popup-btns",children:[l.jsx("button",{className:"popup-close",onClick:e,children:"취소"}),l.jsx("button",{className:"popup-subscript-end",onClick:i=>{i.stopPropagation(),r(pw({user_id:o.user_id,channel_id:n})),r(Gp({channel_name:t,type:"minus"})),e()},children:"구독 취소"})]})]})},gm=B.div`
    button {
        max-height: 3.6rem;
    }
    .subscribers-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 1000%;
            margin-right: 0.4rem;
        }
    }
    .not-subscribers-btn {
        color: #fff;
        background-color: #212121;
        &:hover {
            background-color: #424242;
        }
    }
    .channel-btn {
        margin-right: 1rem;
    }
    @media ${Ce.mobile} {
        .subscribers-btn {
            width: 14vw;
            .img {
                width: 35%;
            }
        }
    }
`,cu=({channel_id:e,channel_name:t})=>{var v;const{isLoginUser:n,isAuth:r}=R(_=>_.auth),o=e===(n==null?void 0:n.user_id),i=(v=n==null?void 0:n.Subscription_Id)==null?void 0:v.includes(e),s=re(),a=W(),c=_=>{_.stopPropagation(),r?n.user_id!==e?(s(hw({user_id:n.user_id,channel_id:e})),s(Gp({channel_name:t,type:"plus"}))):alert("error"):a("/login")},u=_=>{r||a("/login"),_.stopPropagation(),document.querySelector("#subscript-popup").showModal()},d=()=>{document.querySelector("#subscript-popup").close()},m=_=>{_.stopPropagation(),r&&a(`/studio/${e}/dashboard`)};if(o)return l.jsxs(gm,{children:[l.jsx(ue,{onClick:m,className:"channel-btn",children:"채널 맞춤설정"}),l.jsx(ue,{onClick:m,className:"video-btn",children:"동영상 관리"})]});if(!o)return l.jsxs(gm,{children:[i?l.jsxs(ue,{className:"subscribers-btn",onClick:u,children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Notification.svg",alt:"구독 중",className:"img"}),"구독중"]}):l.jsx(ue,{className:"not-subscribers-btn",onClick:c,children:"구독"}),l.jsx(wv,{handleClosePopup:d,channel_name:t,thisChannelID:e})]})},Dx=({channel:e})=>{var u;const t=W(),{channel_image:n,channel_name:r,channel_subscribers:o,Movies:i,channel_id:s,channel_nav:a}=e,c=d=>{if(d>=1e4)return Math.floor(d/1e4)+"만명";if(d>=1e3)return Math.floor(d/1e3)+"천명";if(d<=1e3)return d+"명"};return l.jsxs("li",{className:"channel-item",onClick:()=>{var d;return t(`/channel/${((d=i[0])==null?void 0:d.movie_channel)||a}`)},children:[l.jsx("div",{className:"channel-profile",children:l.jsx("img",{src:n,alt:r,className:"channel-logo"})}),l.jsxs("div",{className:"channel-info",children:[l.jsxs("div",{className:"into-text",children:[l.jsx("h3",{className:"name",children:r}),l.jsxs("p",{className:"info",children:["@",((u=i[0])==null?void 0:u.movie_channel)||a," • 구독자",c(o)]})]}),l.jsx(cu,{channel_id:s,channel_name:a})]})]})},Ux=({filteredMovies:e})=>{if(e)return l.jsx("li",{className:"movie-item",children:l.jsx("ul",{children:e.map(t=>l.jsx(Ie,{movie:t},t.movie_id))})})},zx=({Search:e,allMovies:t})=>{const{Channel:n}=R(s=>s.channel),o=Object.keys(n).map(s=>n[s]).filter(s=>s.channel_name.toLowerCase().includes(e.toLowerCase())),i=t.filter(s=>s.movie_title.toLowerCase().includes(e.toLowerCase())||s.movie_category.toLowerCase().includes(e.toLowerCase()));if(o.length===0&&i.length===0)return l.jsx(nm,{children:l.jsxs("p",{className:"not-search",children:['"',e,'" 찾으시는 검색 결과가 없습니다.']})});if(o.length>0||i.length>0)return l.jsxs(nm,{children:[o.map(s=>l.jsx(Dx,{channel:s},s.channel_id)),l.jsx(Ux,{Search:e,filteredMovies:i})]})},_m=()=>{const{Search:e}=At(),{allMovies:t}=R(r=>r.channel),n=re();return A.useEffect(()=>{n(Mt())},[]),l.jsx(sb,{children:e?l.jsx(zx,{Search:e,allMovies:t}):l.jsx(Yp,{})})},ym=B.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2% 3.5%;
    display: flex;

    > .video-wrap {
        position: relative;
        width: 70%;
        margin: 0 2rem 0 0;
        .videoInner {
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
            position: relative;
            border-radius: 2rem;
            overflow: hidden;
        }
        iframe,
        video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
    }
    @media ${Ce.tablet} {
        display: block;
        .video-wrap {
            width: 100%;
        }
    }
`,qx=B.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    .sub_video_wrap {
        width: 100%;
    }
    .video-loder {
        display: flex;
        width: 100%;

        .video-wrap {
            max-width: 22rem;
            overflow: hidden;
            padding-bottom: 24%;
        }
        .text-wrap {
            width: 100%;
            /* max-width: 25rem; */
            .channel-logo {
                display: none;
            }
            .movie_info {
                margin-left: 1rem;
                .movie_title {
                    font-size: 1.4rem;
                    word-break: break-all;
                }
                .channel_name,
                .movie_like_count {
                    font-size: 1.2rem;
                }
            }
        }

        .save-list {
            right: -5rem;
        }
    }
    @media ${Ce.mobile} {
        display: block;
        width: 70%;
        .movie_title {
            display: block;
        }
        .video-loder {
            .video-wrap {
                max-width: 30rem;
                .movie_title {
                }
            }
        }
        .text-wrap {
        }
        .save-list {
        }
    }
    @media ${Ce.tablet} {
        display: block;
        width: 100%;
        .movie_title {
            display: block;
        }
        .video-loder {
            .video-wrap {
                max-width: 40rem;
                .movie_title {
                }
            }
        }
        .text-wrap {
        }
    }
`,Wx=B.div`
    height: 4rem;
    padding: 1% 0;
    position: relative;
    .title {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.8rem;
    }

    .top {
        padding: 1% 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .channel {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            overflow: hidden;
            .channelImg {
                width: 4rem;
                margin-top: 0.5rem;
                border-radius: 2.5rem;
            }
            .channel_detail {
                margin-left: 1.2rem;
                margin-right: 2.4rem;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                white-space: nowrap;
                user-select: none;
                cursor: pointer;
                .channel_name {
                    font-size: 1.7rem;
                    font-weight: 600;
                    max-width: 200px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .channel_subscribers {
                    font-size: 1.4rem;
                    color: #606060;
                    max-width: 200px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }

        .subscribers {
            margin-left: 1.5rem;
        }

        .action {
            display: flex;
            flex-wrap: nowrap;
            gap: 1rem;
            .Like {
                .BelowBtn {
                    position: relative;
                    margin-left: 0;
                    border-radius: 3rem 0 0 3rem;
                    &:last-child {
                        border-radius: 0 3rem 3rem 0;
                        padding-left: 15px;
                        &::after {
                            content: '';
                            height: 1.7rem;
                            background: rgba(0, 0, 0, 0.1);
                            position: absolute;
                            left: 0;
                            top: 1rem;
                            width: 0.1rem;
                        }
                    }
                    &:hover {
                        background: rgba(0, 0, 0, 0.1);
                    }
                }
            }

            .BelowBtn {
                height: 3.8rem;
                font-size: 1.4rem;
                background: rgba(0, 0, 0, 0.05);
                border: none;
                border-radius: 3rem;
                padding: 0.8rem 1.2rem;
                &:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
            }
        }
    }

    .BelowBtn_comment {
        margin-left: 0.9rem;
        vertical-align: top;
        font-size: 1.4rem;
        &.comment {
        }
    }
    .img {
        width: 2.2rem;
    }

    .report-text {
        width: auto;
        position: absolute;
        right: -4rem;
        top: 10rem;
        background: #fff;
        padding: 1%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 15px;
        z-index: 1;
    }
    .CommentList {
        position: relative;
    }
    .Comment_items {
        width: auto;
        position: absolute;
        right: -5rem;
        top: 3.5rem;
        background: #fff;
        padding: 1%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 15px;
        z-index: 1;
        .Comment_item {
            vertical-align: top;
            margin-left: 0.3rem;
        }
    }
    @media ${Ce.tablet} {
        height: auto;
        .BelowBtn_comment {
            font-size: 1.4rem;
            margin: 0;
        }
        .subscribers-btn {
            font-size: 1.4rem;
        }
        .not-subscribers-btn {
            font-size: 1.4rem;
        }
    }
`,Vx=B.div`
    min-width: min(450px, 100%);
    background: rgba(0, 0, 0, 0.05);
    border-radius: 2rem;
    padding: 1%;
    font-size: 1.5rem;
    .info {
        .desc {
            margin-left: 1rem;
        }
    }
    .more {
        cursor: pointer;
    }

    .script {
        margin-top: 5rem;

        .script_title {
            font-size: 2rem;
            font-weight: 600;
        }

        .script_desc {
            font-size: 1.4rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            color: #7d7d7d;
        }
    }
    .script_btn {
        font-size: 1.6rem;
        height: 3.8rem;
        color: #065fd4;
        border-radius: 3rem;
        border: 1px solid #d4d4d4;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        &:hover {
            background: #dceafe;
            border: none;
        }
    }
    .channel {
        display: flex;
        align-items: center;
        margin-top: 5rem;

        .channelImg {
            width: 4rem;
            margin-top: 0.5rem;
            border-radius: 2.5rem;
        }

        .channel_detail {
            margin-left: 1.2rem;
            margin-right: 2.4rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .channel_name {
                font-size: 1.8rem;
                font-weight: 600;
            }

            .channel_subscribers {
                font-size: 1.3rem;
                color: #606060;
                max-width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    .channel_btn {
        font-size: 1.5rem;
        height: 3.8rem;
        border-radius: 3rem;
        border: 1px solid #d4d4d4;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }
    .but_container {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
        .icons {
            font-size: 1.8rem;
            margin-right: 1rem;
        }
    }
    .briefly {
        margin-top: 6rem;
        cursor: pointer;
    }
    .img {
        margin-right: 1rem;
    }
`,$x=B.div`
    .section {
        margin-bottom: 5rem;
        min-height: 30rem;
    }
    .comment_top {
        margin-top: 2rem;
        display: flex;
        margin-bottom: 2rem;
        position: relative;
        .total_comment {
            font-size: 2rem;
            line-height: 2.8rem;
            font-weight: 700;
            margin-right: 2.5rem;
        }
    }

    .text {
        width: 12rem;
        position: absolute;
        left: 12rem;
        top: 2.5rem;
        background: #fff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 15px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        z-index: 1;
    }
    .user_profile {
        width: 4rem;
        margin-top: 0.5rem;
    }
    .label_comment {
        cursor: pointer;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }

    .label {
        border: none;
        background: none;
        display: flex;
        vertical-align: bottom;
        text-align: center;
        cursor: pointer;
        .label_title {
            margin-left: 1.2rem;
            font-size: 1.4rem;
        }
    }
    .label_comment {
        padding: 1.5rem 1.8rem;
        text-align: left;
        font-size: 1.5rem;
    }
    .comment_inner {
        display: flex;
        vertical-align: middle;
        align-items: center;
        .comment_edit {
            width: 100%;
            margin-left: 2rem;
            margin-bottom: 1.3rem;
        }
        .comment_edit_input {
            border: none;
            border-bottom: 1px solid #d4d4d4;
            width: 100%;
            outline: none;
            height: 3.2rem;
            font-size: 1.4rem;
            transition: 250ms ease-in-out;
        }

        .comment_edit_input:focus {
            border-bottom: 2px solid #000;
        }
    }
    .comment_footer {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }
    .btn {
        border-radius: 5rem;
        padding: 0.7rem 1.2rem;
        border: none;
        background: none;
        font-size: 1.4rem;
    }
    .cancel {
        margin-right: 1.5rem;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }
    .btn_comment {
        background: rgba(0, 0, 0, 0.08);
        color: #646464;
    }
    .user_comment {
        margin-top: 2rem;
        display: flex;
        height: auto;
        position: relative;
        flex-direction: column;
        li {
            display: flex;
            margin-bottom: 2rem;
        }
    }
    .user-profile {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: var(--youtube-red);
        box-sizing: border-box;
        font-size: 1.6rem;
        color: #fff;
        width: 4rem;
        height: 4rem;
    }
    .CommentBtn {
        height: 8rem;
        font-size: 2rem;
    }
    .CommentDel {
        width: 5rem;
    }
    .comment_user {
        margin-bottom: 5rem;
    }
    .Like {
        display: block;
        width: 10rem;
        display: flex;
        justify-content: space-between;
        margin-left: -0.8rem;
        margin-top: 0.5rem;
    }
    .BelowBtn {
        border: none;
        background: none;
        margin-top: 0.5rem;
    }
    .BelowBtn_comment {
        text-align: center;
        vertical-align: 40%;
    }
    .comment_userId {
        margin-left: 1.5rem;
        width: 100%;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2rem;
        .userId {
            font-size: 1.3rem;
            font-weight: 600;
            line-height: 1.8rem;
            margin-bottom: 0.3rem;
        }
    }
`;var bv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wm=he.createContext&&he.createContext(bv),Hx=["attr","size","title"];function Kx(e,t){if(e==null)return{};var n=Gx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gx(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}function bm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ls(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bm(Object(n),!0).forEach(function(r){Yx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yx(e,t,n){return t=Xx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xx(e){var t=Jx(e,"string");return typeof t=="symbol"?t:t+""}function Jx(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xv(e){return e&&e.map((t,n)=>he.createElement(t.tag,ls({key:n},t.attr),xv(t.child)))}function uu(e){return t=>he.createElement(Qx,as({attr:ls({},e.attr)},t),xv(e.child))}function Qx(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=Kx(e,Hx),a=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),he.createElement("svg",as({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:ls(ls({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&he.createElement("title",null,i),e.children)};return wm!==void 0?he.createElement(wm.Consumer,null,n=>t(n)):t(bv)}function Zx(e){return uu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(e)}const e4=({movieBody:e,channelName:t,movie_date:n,movieLikeCount:r,channelSubscribers:o,channelImage:i,channel_name:s})=>{const{year:a,month:c,day:u}=n,d=W(),[m,v]=A.useState(!1),_=()=>{v(g=>!g)};return l.jsx(Vx,{children:l.jsxs("div",{className:"detail_inner",children:[l.jsxs("p",{className:"info",children:[l.jsxs("span",{children:["조회수 ",r,"회"]}),l.jsxs("span",{className:"desc",children:["최초 공개: ",a,". ",c,". ",u,"."]})]}),l.jsx("div",{className:"hidden",children:m?l.jsxs(l.Fragment,{children:[l.jsx("span",{children:e}),l.jsxs("div",{className:"script",children:[l.jsx("h2",{className:"script_title",children:"스크립트"}),l.jsx("p",{className:"script_desc",children:"스크립트를 보면서 시청하세요"}),l.jsx("button",{className:"script_btn",children:"스크립트 표시"})]}),l.jsxs("div",{className:"channel",children:[l.jsx("div",{children:l.jsx("img",{className:"channelImg",src:i,alt:""})}),l.jsxs("div",{className:"channel_detail",children:[l.jsx("h2",{className:"channel_name",children:t}),l.jsxs("p",{className:"channel_subscribers",children:["구독자 ",o]})]})]}),l.jsxs("div",{className:"but_container",children:[l.jsxs("button",{className:"channel_btn",onClick:()=>d(`/channel/${s}`),children:[l.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/play.svg.svg",alt:""}),"동영상"]}),l.jsxs("button",{className:"channel_btn",onClick:()=>d(`/channel/${s}`),children:[l.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/user.svg.svg",alt:""}),"정보"]})]}),l.jsx("div",{className:"briefly",onClick:_,children:"간략히"})]}):l.jsx(l.Fragment,{children:l.jsx("span",{className:"more",onClick:_,children:"...더보기"})})})]})})};function t4(e){return uu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.382 3C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3H12.382ZM11.7639 5H5V14H13.2361L14.2361 16H19V7H12.7639L11.7639 5Z"},child:[]}]})(e)}const n4=({movie_id:e,movie_channel:t})=>{var g;const{isAuth:n,isLoginUser:r}=R(y=>y.auth),[o,i]=A.useState(!1),[s,a]=A.useState(""),c=W(),u=re(),d=()=>{i(!1),a("")},m=()=>{n?i(!0):(alert("로그인이 필요합니다."),c("/login"))},v=y=>{a(y.target.value)},_=y=>{if(y.preventDefault(),!n){alert("로그인이 필요합니다."),c("/login");return}u(Zw({movie_id:e,movie_channel:t,comment_body:s,comment_user_id:r.user_id,comment_user_name:r.user_name})),a(""),u(Mt())};return l.jsx("div",{className:"comment",children:l.jsxs("div",{className:"comment_inner",children:[l.jsx("div",{children:l.jsx("span",{className:"user-profile",children:(g=r==null?void 0:r.user_name)==null?void 0:g.charAt(0)})}),l.jsxs("form",{className:"comment_edit",onSubmit:_,children:[l.jsx("input",{type:"text",className:"comment_edit_input",placeholder:"댓글 추가...",onFocus:m,onChange:v,value:s}),o&&l.jsxs("div",{className:"comment_footer",children:[l.jsx("div",{className:"emoji",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/emoji.svg.svg",alt:"emoji"})}),l.jsxs("div",{className:"btns",children:[l.jsx("button",{className:"btn cancel",onClick:d,children:"취소"}),l.jsx("button",{className:"btn btn_comment",type:"submit",style:{backgroundColor:s?"#007BFF":"",color:s?"#fff":""},disabled:!s,children:"댓글"})]})]})]})]})})};function r4(e){return uu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"},child:[]}]})(e)}const o4=({item:e,movie_id:t,movie_channel:n})=>{const{comment_user_name:r,comment_body:o,comment_user_id:i,comment_id:s}=e,[a,c]=A.useState(!1),{isLoginUser:u}=R(_=>_.auth),d=re(),m=()=>{c(_=>!_)},v=()=>{d(eb({movie_id:t,movie_channel:n,comment_id:s,comment_user_id:i})),d(Mt())};return l.jsxs("li",{className:"CommentList",children:[l.jsx("div",{children:l.jsx("span",{className:"user-profile",children:r.charAt(0)})}),l.jsxs("div",{className:"comment_userId",children:[l.jsxs("p",{className:"userId",children:["@",r]}),l.jsx("p",{children:o})]}),l.jsx("button",{className:"BelowBtn Comment",onClick:m,children:l.jsx(r4,{})}),a&&l.jsx("div",{className:"Comment_items",children:(u==null?void 0:u.user_id)===i?l.jsx(l.Fragment,{children:l.jsxs("p",{onClick:v,children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/trash.svg",alt:"삭제"}),l.jsx("span",{className:"Comment_item",children:"삭제"})]})}):l.jsxs("p",{children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/complaint.svg",alt:"신고"}),l.jsx("span",{className:"Comment_item",children:"신고"})]})})]})},i4=({moviesComment:e,movie_id:t,movie_channel:n})=>l.jsx("ul",{className:"user_comment",children:e.map(r=>l.jsx(o4,{item:r,movie_id:t,movie_channel:n,moviesComment:e},r.comment_id))}),s4=({moviesComment:e,movie_id:t,movie_channel:n})=>{const[r,o]=A.useState(!1),[i,s]=A.useState(e),a=u=>{const d=[...e].sort((m,v)=>u==="oldest"?new Date(m.date)-new Date(v.date):u==="newest"?new Date(v.date)-new Date(m.date):0);s(d),o(!1)},c=()=>{o(u=>!u)};return l.jsx($x,{children:l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"comment_top",children:[l.jsxs("h2",{className:"total_comment",children:["댓글 ",e.length," 개"]}),l.jsxs("button",{className:"label",onClick:c,children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/menu.svg.svg",alt:""}),l.jsx("span",{className:"label_title",children:"정렬 기준"})]}),r&&l.jsxs("div",{className:"text",children:[l.jsx("div",{className:"label_comment",onClick:()=>a("popular"),children:l.jsx("p",{children:"인기 댓글순"})}),l.jsx("div",{className:"label_comment",onClick:()=>a("newest"),children:l.jsx("p",{children:"최신순"})})]})]}),l.jsx(n4,{movie_id:t,movie_channel:n}),l.jsx(i4,{moviesComment:e,movie_id:t,movie_channel:n})]})})},a4=({movie:e,title:t,channelName:n,channelSubscribers:r,movieLikeCount:o,channelImage:i,movieBody:s,movie_date:a,channelId:c,moviesComment:u,movie_id:d,channel_name:m,movie_channel:v})=>{var C,k,x,j,L;const[_,g]=A.useState(!1),y=re(),{isLoginUser:w,isAuth:p}=R(N=>N.auth),f=W(),h=(N,V)=>{N.preventDefault(),w&&p?w[V].find(vt=>vt.movie_id===d)?(y(nu({user_id:w.user_id,type:V,movie:e})),V==="like_Movie_List"&&(y(em({channel_name:m,movie_id:d,type:"minus"})),y(Mt()))):(y(tu({user_id:w.user_id,type:V,movie:e})),V==="like_Movie_List"&&(y(em({channel_name:m,movie_id:d,type:"plus"})),y(Mt()))):(alert("로그인이 필요합니다."),f("/login"))},b=()=>{g(N=>!N)};return l.jsxs(Wx,{children:[l.jsx("h2",{className:"title",children:t}),l.jsxs("div",{className:"top",children:[l.jsxs("div",{className:"channel",children:[l.jsx("div",{onClick:()=>f(`/channel/${m}`),children:l.jsx("img",{className:"channelImg",src:i,alt:""})}),l.jsxs("div",{className:"channel_detail",onClick:()=>f(`/channel/${m}`),children:[l.jsx("h2",{className:"channel_name",children:n}),l.jsxs("p",{className:"channel_subscribers",children:[r,"명"]})]}),l.jsx("div",{className:"subscribers",children:l.jsx(cu,{channel_id:c,channel_name:m})})]}),l.jsxs("div",{className:"action",children:[l.jsxs("span",{className:"Like",children:[l.jsxs("button",{className:"BelowBtn like",onClick:N=>h(N,"like_Movie_List"),children:[l.jsx("img",{className:"img",src:(C=w.like_Movie_List)!=null&&C.find(N=>N.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/disLike_black.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/ee727f8dfb7bcd0c51e97b02fc6c584acdb7cd2f/Icon/like.svg.svg",alt:""}),l.jsx("span",{className:"BelowBtn_comment",children:o})]}),l.jsx("button",{className:"BelowBtn",onClick:N=>h(N,"dislike_Movie_List"),children:l.jsx("img",{className:"img",src:(k=w.dislike_Movie_List)!=null&&k.find(N=>N.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/DisLike_black.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/dislike.svg.svg",alt:""})})]}),l.jsxs(ue,{className:"BelowBtn",onClick:N=>h(N,"Download_List"),children:[l.jsx("img",{className:"img",src:(x=w.Download_List)!=null&&x.find(N=>N.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg",alt:""}),l.jsx("span",{className:"BelowBtn_comment",children:(j=w.Download_List)!=null&&j.find(N=>N.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장"})]}),l.jsxs(ue,{className:"BelowBtn",onClick:N=>h(N,"Playlist"),children:[l.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg",alt:""}),l.jsx("span",{className:"BelowBtn_comment",children:(L=w.Playlist)!=null&&L.find(N=>N.movie_id===d)?"재생목록 삭제":"재생목록 저장"})]}),l.jsx(ue,{className:"BelowBtn",onClick:b,children:l.jsx(Zx,{className:"icons"})}),_&&l.jsxs("div",{className:"report-text",children:[l.jsx(t4,{})," 신고"]})]})]}),l.jsx(e4,{movieBody:s,channelName:n,movie_date:a,movieLikeCount:o,channelSubscribers:r,channelImage:i,channel_name:m}),l.jsx(s4,{moviesComment:u,movie_id:d,movie_channel:v})]})},l4=({currentVideoCategory:e,currentVideoId:t})=>{const{allMovies:n}=R(o=>o.channel),r=n.filter(o=>o.movie_category===e).filter(o=>o.movie_id!==t);return l.jsx("ul",{className:"sub_video_wrap",children:r.slice().sort(()=>Math.random()-.5).slice(0,15).map(o=>l.jsx(Ie,{movie:o},o.movie_id))})},c4=()=>{var u;const{isSideMenu:e}=R(d=>d.header),{allMovies:t}=R(d=>d.channel),{isLoginUser:n}=R(d=>d.auth),{Channel:r}=R(d=>d.channel),{Movie_ID:o}=At(),i=re(),s=t.find(d=>d.movie_id===Number(o)),a=s?r[s.movie_channel]:null;if(A.useEffect(()=>{s||i(Mt()),e&&i(eu()),s&&(document.title=s.movie_title,i(tu({user_id:n.user_id,type:"Viewing_Record",movie:s})))},[o,t,s,i]),!o||!s)return l.jsx(ym,{children:l.jsx("p",{children:"찾으시는 동영상이 없습니다."})});const c=d=>d>=1e4?Math.floor(d/1e4)+"만":d>=1e3?Math.floor(d/1e3)+"천":d<=1e3?d:d.toString();if(t)return l.jsxs(ym,{children:[l.jsxs("div",{className:"video-wrap",children:[l.jsx("div",{className:"videoInner",children:s.movie_video_type!=="video"?l.jsx("iframe",{src:s.movie_video,title:s.movie_title,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",autoPlay:!0}):l.jsx("video",{controls:!0,autoPlay:!0,muted:!0,src:s.movie_video})}),l.jsx(a4,{title:s.movie_title,movie_date:s.movie_date,movieBody:s.movie_body,channelName:a?a.channel_name:"알 수 없음",channelSubscribers:a?c(a.channel_subscribers):"알 수 없음",movieLikeCount:c(s.movie_like_count),channelImage:a?a.channel_image:"",moviesComment:s.movie_comments,movie_id:s.movie_id,movie_channel:s.movie_channel,channel_name:((u=a==null?void 0:a.Movies[0])==null?void 0:u.movie_channel)||thisChannel_channel_nav,channelId:a.channel_id,movie:s})]}),l.jsx(qx,{children:l.jsx(l4,{currentVideoCategory:s.movie_category,currentVideoId:s.movie_id})})]})},xm=B.div`
    width: 100%;
    .content-box {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        > ul {
            box-sizing: border-box;
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid #dcdcdc;
            min-height: 20rem;
            min-width: 26%;
            margin: 0 2% 2% 0;
            button {
                margin-top: 1.6rem;
            }
        }
    }
    .title-h3 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
`,u4=({subscribers:e,channel:t})=>{const n=W();return l.jsxs(Ow,{children:[l.jsx("h3",{className:"title-h3",children:"채널 분석"}),l.jsx("p",{className:"subscribers",children:"현재 구독자수"}),l.jsx("p",{className:"subscribers-count",children:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),l.jsx(ue,{onClick:()=>n(`/channel/${t}`),children:"채널 이동"})]})},d4=({comment:e,thisChannel:t})=>{const n=W(),{isLoginUser:r}=R(o=>o.auth);return l.jsxs(Bw,{children:[l.jsxs("h3",{className:"title-h3",children:["최신 댓글 (",e.length,")"]}),l.jsx("ul",{children:e.map(o=>l.jsx(Hp,{comment:o,thisChannel:t},o.comment_id))}),l.jsx(ue,{onClick:()=>n(`/studio/${r.user_id}/comment`),children:"더 보기"})]})},m4=({movies:e})=>{const t=W(),{isLoginUser:n}=R(r=>r.auth);return l.jsxs(Mw,{children:[l.jsx("h3",{className:"title-h3",children:"영상 콘텐츠"}),l.jsx("ul",{className:"movie-list",children:e.slice().sort(()=>Math.random()-.5).slice(0,4).map(r=>l.jsx(Ie,{movie:r},r.movie_id))}),l.jsx(ue,{onClick:()=>t(`/studio/${n.user_id}/content`),children:"콘텐츠 더 보기"})]})},f4=()=>{var a;const{User_ID:e}=At(),{Channel:t}=R(c=>c.channel),{isAuth:n,isLoginUser:r}=R(c=>c.auth),o=W(),i=re(),s=Object.values(t).find(c=>c.channel_id===Number(e));if(A.useEffect(()=>{n||o("/login"),s||i(Xw(r))},[n,s,e,t]),!s)return l.jsx(xm,{children:l.jsx(os,{})});if(s)return l.jsx(xm,{children:l.jsxs("div",{className:"inner",children:[l.jsx("h2",{className:"studio-title",children:"채널 대시보드"}),l.jsxs("div",{className:"content-box",children:[l.jsx(u4,{subscribers:s.channel_subscribers,channel:((a=s.Movies[0])==null?void 0:a.movie_channel)||r.user_email.split("@")[0]}),l.jsx(m4,{movies:s.Movies}),l.jsx(d4,{comment:s.Movies.flatMap(c=>c.movie_comments),thisChannel:s})]})]})})},h4=B.div`
    background: #e0e0e0;
    min-height: 100vh;
    display: flex;
    .login-container {
        box-sizing: border-box;
        width: 60%;
        margin: auto;
        border-radius: 4rem;
        background-color: #fff;
        display: flex;
        overflow: hidden;
        min-height: 40rem;
    }
    .left-con-box,
    .right-con-box {
        box-sizing: border-box;
        width: 50%;
        padding: 8% 0;
    }
    .left-con-box {
        padding: 4% 5rem;
        .logo-wrap {
            width: 6rem;
            height: 6rem;
            margin-bottom: 2rem;
            img {
                width: 100%;
            }
        }
        .title {
            color: #333;
            font-size: 4rem;
            font-weight: 500;
        }
    }
    .nav-youtube {
        display: inline-block;
        border-bottom: 1px solid #000;
        user-select: none;
        cursor: pointer;
        font-size: 1.4rem;
    }
`,p4=B.form`
    &.login-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        .login-input,
        .failed-input {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 5%;
            input {
                border: 1px solid #dcdcdc;
                outline: invert;
                text-indent: 2rem;
                font-size: 1.6rem;
                height: 5rem;
                margin-bottom: 5%;
                width: 40rem;
            }
        }
        .failed-input {
            label {
                font-size: 1.4rem;
                text-align: left;
                margin-bottom: 1rem;
                color: #ed1d24;
            }
            input {
                border: 1px solid #ed1d24;
            }
        }
        .btn-wrap {
            margin-top: 2rem;
            width: 40rem;
            display: flex;
            justify-content: end;
            align-items: center;
            .join-btn {
                margin-left: 1rem;
                background-color: #212121;
                color: #fff;
                &:hover {
                    background-color: #424242;
                }
            }
        }
        input {
            &.password {
                transition: all 0.5s;
                height: 0;
                opacity: 0;
            }
            &.active {
                height: 5rem;
                opacity: 1;
            }
        }
    }
`,v4=B.ul`
    box-sizing: border-box;
    padding: 0 2rem;
    .login-item {
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #dcdcdc;
        padding: 1%;
        box-sizing: border-box;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
            background-color: #eeeeee;
        }
    }
    .profile-wrap {
        background-color: var(--youtube-red);
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fafafa;
        font-size: 1.2rem;
        margin-right: 1.2rem;
    }
    .account-wrap {
        width: 3rem;
        height: 3rem;
        margin-right: 1.2rem;
        padding: 1.4% 1%;
        img {
            width: 100%;
        }
    }
`,g4=B.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .join-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    input {
        border: 1px solid #dcdcdc;
        outline: invert;
        text-indent: 2rem;
        font-size: 1.6rem;
        height: 0;
        opacity: 0;
        margin-bottom: 2%;
        width: 40rem;
        transition: all 0.5s;
        &.active {
            height: 5rem;
            opacity: 1;
        }
    }
    .btn-wrap {
        margin-top: 2rem;
        width: 40rem;
        display: flex;
        justify-content: end;
        align-items: center;
        .cancle-btn {
            margin-left: 1rem;
            background-color: #212121;
            color: #fff;
            &:hover {
                background-color: #424242;
            }
        }
    }
`,_4=({loginCheck:e,setLoginCheck:t,setPageType:n})=>{const{LoginUser:r}=R(g=>g.auth),[o,i]=A.useState({user_email:"",user_password:""}),[s,a]=A.useState(!1),c=re(),u=W(),d=Po(),m=g=>{const{name:y,value:w}=g.target;i({...o,[y]:w})},v=g=>{if(g.preventDefault(),r.find(y=>y.user_email===o.user_email&&y.user_password===o.user_password))c(Wp(o)),d.pathname.startsWith("/studio")||d.pathname.startsWith("/login")||d.pathname.startsWith("/join")?u("/"):u(-1);else{t(!0);return}},_=g=>{g.preventDefault(),o.user_email?a(!s):alert("아이디를 입력해 주세요")};return l.jsxs(p4,{className:"login-box",onSubmit:v,children:[e?l.jsxs("p",{className:"failed-input",children:[l.jsx("label",{htmlFor:"",children:"이메일 또는 비밀번호가 잘못 입력되었습니다."}),l.jsx("input",{type:"email",name:"user_email",placeholder:"이메일",onChange:m}),l.jsx("input",{type:"password",name:"user_password",placeholder:"비밀번호",onChange:m,className:s?"password active":"password"})]}):l.jsxs("p",{className:"login-input",children:[l.jsx("input",{type:"email",name:"user_email",placeholder:"이메일",onChange:m}),l.jsx("input",{type:"password",name:"user_password",placeholder:"비밀번호",onChange:m,className:s?"password active":"password"})]}),l.jsxs("div",{className:"btn-wrap",children:[s?l.jsx(ue,{className:"login-btn",type:"submit",children:"로그인"}):l.jsx(ue,{className:"login-btn",onClick:_,children:"다음"}),l.jsx(ue,{className:"join-btn",onClick:g=>{g.preventDefault(),n("join")},children:"계정 만들기"})]})]})},y4=({setPageType:e})=>{const{LoginUser:t}=R(a=>a.auth),n=t.filter(a=>typeof a.user_id=="number").slice().sort(()=>Math.random()-.5).slice(0,3),r=re(),o=W(),i=Po(),s=a=>{alert(`${a.user_name} 로그인`),r(Wp({user_email:a.user_email,user_password:a.user_password})),i.pathname.startsWith("/studio")||i.pathname.startsWith("/login")||i.pathname.startsWith("/join")?o("/"):o(-1)};return l.jsxs(v4,{children:[n.map(a=>l.jsxs("li",{className:"login-item",onClick:()=>s(a),children:[l.jsx("div",{className:"profile-wrap",children:l.jsx("span",{className:"user-profile",children:a.user_name.charAt(0)})}),l.jsxs("div",{className:"text-wrap",children:[l.jsx("p",{className:"user-name",children:a.user_name}),l.jsx("p",{className:"user-email",children:a.user_email})]})]},a.user_id)),l.jsxs("li",{className:"login-item",onClick:()=>e("login"),children:[l.jsx("div",{className:"account-wrap",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Account.svg",alt:"Account"})}),l.jsx("div",{className:"text-wrap",children:l.jsx("p",{children:"다른 계정 사용"})})]})]})},w4=({setPageType:e})=>{const[t,n]=A.useState({user_name:"",user_age:"",user_tel:"",user_email:"",user_password:""}),[r,o]=A.useState(!1),i=re(),{LoginUser:s}=R(d=>d.auth),a=d=>{d.preventDefault(),t.user_name&&t.user_age&&t.user_tel&&o(!0)},c=d=>{const{name:m,value:v}=d.target;n({...t,[m]:v})},u=d=>{d.preventDefault(),s.find(m=>m.user_email===t.user_email)?alert("중복되는 아이디가 있습니다."):i(Vp(t))};return l.jsxs(g4,{onSubmit:u,children:[l.jsxs("p",{className:"join-wrap",children:[l.jsx("input",{type:"email",name:"user_email",id:"user_email",placeholder:"이메일",className:r&&"active",onChange:c}),l.jsx("input",{type:"password",name:"user_password",id:"user_password",placeholder:"비밀번호",className:r&&"active",onChange:c}),l.jsx("input",{type:"text",name:"user_name",id:"user_name",placeholder:"이름",className:"active",onChange:c}),l.jsx("input",{type:"age",name:"user_age",id:"user_age",placeholder:"나이",className:"active",onChange:c}),l.jsx("input",{type:"tel",name:"user_tel",id:"user_tel",placeholder:"전화번호",className:"active",onChange:c})]}),l.jsx("div",{className:"btn-wrap",children:r?l.jsx(ue,{type:"submit",children:"회원가입"}):l.jsxs(l.Fragment,{children:[l.jsx(ue,{onClick:a,className:"next-btn",children:"다음"}),l.jsx(ue,{onClick:d=>{d.preventDefault(),e("login")},className:"cancle-btn",children:"취소"})]})})]})},b4=()=>{const{isAuth:e}=R(s=>s.auth),[t,n]=A.useState("quickLogin"),[r,o]=A.useState(!1),i=W();if(A.useEffect(()=>{e&&i("/")},[e]),!e)return l.jsx(h4,{children:l.jsxs("div",{className:"login-container",children:[l.jsxs("div",{className:"left-con-box",children:[l.jsx("div",{className:"logo-wrap",children:l.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg"})}),l.jsxs("h2",{className:"title",children:[t==="quickLogin"&&"계정 선택",t==="login"&&"로그인",t==="join"&&"계정 생성"]}),l.jsx("p",{className:"nav-youtube",onClick:()=>i("/"),children:"YouTube로 이동"})]}),l.jsxs("div",{className:"right-con-box",children:[t==="quickLogin"&&l.jsx(y4,{setPageType:n}),t==="login"&&l.jsx(_4,{loginCheck:r,setLoginCheck:o,setPageType:n}),t==="join"&&l.jsx(w4,{setPageType:n})]})]})})},x4=B.div``,S4=()=>l.jsx(x4,{children:l.jsx("h2",{children:"Join"})}),A4=B.div`
    width: 100%;
    min-height: 100vh;
    /* display: flex; */
    .inner {
        padding-top: 2.4rem;
        padding-right: 35%;
        padding-left: calc(50% - 64.2rem);
        h2 {
            font-size: 3.5rem;
            line-height: 5rem;
            font-weight: 700;
        }
        .video-list {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-top: 1.5%;
            margin-top: 0;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                .video-wrap {
                    flex: 1 1 auto;
                    max-width: 24.6rem; /* 최대 너비 설정 */
                    aspect-ratio: 16 / 9; /* 16:9 비율 */
                    padding-bottom: 0%;
                    margin-right: 1.5%;
                    margin-bottom: 2%;
                    img,
                    iframe,
                    video {
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                    }
                }
            }
            .text-wrap {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .movie_title {
                    font-size: 1.8rem;
                    line-height: 2.6rem;
                    font-weight: 400;
                    word-break: break-all;
                    padding: 0;
                }
                .channel-logo {
                    display: none;
                }
                .movie_info {
                    .movie_title {
                    }
                    .channel_name {
                    }
                    .movie_like_count {
                        .movie_date {
                            display: none;
                        }
                    }
                    .movie_body {
                        display: block;
                        margin-top: 0.4rem;
                        max-width: 50rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                .close-menu,
                .plus-menu {
                    padding: 0 1rem;
                    img {
                        width: 2.4rem;
                        height: 2.4rem;
                    }
                    position: relative;
                    text-align: center;
                }
                .close-menu {
                    display: inline-block;
                }
            }
        }
    }
    .page_menu {
        position: fixed;
        background-color: white;
        top: 20rem;
        right: 15%;
        .search_wrap {
            display: flex; /* Flex 컨테이너로 설정 */
            flex-direction: column;
            min-width: 23.5rem;
            .search {
                display: flex;
                margin-bottom: 1rem;
                border-bottom: 1px solid #000;
                img {
                    width: 3rem;
                    height: 3rem;
                    padding: 1rem;
                    border-radius: 50%;
                }
                input {
                    border: none;
                    outline: none;
                }
            }
            .content {
                width: 100%;
                margin: 1rem 0;
                padding: 1rem;
                border-radius: 5rem;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                cursor: pointer;
                font-size: 1.4rem;
                img {
                    display: flex;
                    margin-right: 3%;
                }
            }
            .content:hover {
                background-color: #e5e5e5;
            }
        }
    }
`;B.div``;const C4=()=>{var s;const{Category:e}=At(),{isLoginUser:t}=R(a=>a.auth),[n,r]=A.useState(""),o=re(),i=()=>{switch(e){case"Viewing_Record":return"시청 기록";case"Playlist":return"재생 목록";case"Later_Watch":return"나중에 볼 동영상";case"like_Movie_List":return"좋아요 표시한 동영상";case"Download_List":return"오프라인 저장 동영상";default:return"피드"}};return l.jsxs(A4,{children:[l.jsx("div",{className:"hearder",children:l.jsx("div",{className:"inner",children:l.jsx("h2",{children:i()})})}),l.jsx("div",{className:"viewing_content",children:l.jsx("div",{className:"inner",children:l.jsx("ul",{className:"video-list",children:(s=t[e])==null?void 0:s.filter(a=>a.movie_title.toLowerCase().includes(n==null?void 0:n.toLowerCase())||a.movie_category.toLowerCase().includes(n.toLowerCase())).map(a=>l.jsx(Ie,{movie:a,type:e},a.movie_id))})})}),l.jsx("div",{className:"page_menu",children:l.jsxs("div",{className:"search_wrap",children:[l.jsxs("div",{className:"search",children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Search.svg",alt:`${i()} 검색`}),l.jsx("input",{type:"text",value:n,onChange:a=>r(a.target.value),placeholder:`${i()} 검색`})]}),l.jsxs("div",{className:"content",onClick:()=>o(dw({user_id:t.user_id,type:e})),children:[l.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC"}),l.jsxs("p",{children:[i()," 지우기 "]})]})]})})]})},Sm=B.div`
    /* background-color: black; */
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    padding: 2%;
    .channel_home {
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        h2 {
            margin-top: 1%;
            font-weight: 600;
            font-size: 150%;
        }
    }
    .search_results-wrap {
        display: flex;
        width: 100%;
        margin-top: 1%;
        flex-wrap: wrap;
        .video-loder {
            width: 19.2%;
            margin-bottom: 2%;
            &:not(:nth-child(5n)) {
                margin-right: 1%;
            }
        }
    }
    .header_banner {
        display: block;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        height: 21.2109rem;
        /* background-color: #dddddd; */
        .channel_banner {
            height: 100%;
            img {
                display: inline-block;
                object-fit: cover;
                width: 100%;
                border-radius: 1.5rem;
                min-height: 1px;
                min-width: 1px;
            }
        }
    }
    .page_header {
        padding-top: 1.6rem;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        margin-bottom: 1rem;
        /* border: 1px solid #000; */
        .page_header_profile {
            display: flex;
            /* border: 1px solid red; */
            .header_left {
                margin-right: 16px;
                .channel_img {
                    border-radius: 50%;
                }
            }
            .header_right {
                .channel_name {
                    font-size: 2em;
                    font-weight: bold;
                }
                .channel_info {
                    color: #555;
                }
                .channel_desc {
                    max-width: 80rem;
                    margin-bottom: 1.2rem;
                    font-size: 1.4rem;
                    word-break: keep-all;
                }
            }
        }
    }

    .channel_navbar {
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        border-bottom: 1px solid #e4e4e4;
        .inner {
            display: flex;
            line-height: 4.8rem;
            align-items: center;
            li {
                padding: 0 2% 0 2%;
                position: relative;
                cursor: pointer;
                display: flex;
                justify-content: center;
            }
            li::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: 100%;
                opacity: 0;
                transform: scaleX(0);
                background-color: black;
                height: 2px;
                transition: opacity 0.3s ease, transform 0.3s ease-in-out;
            }
            li:hover::after {
                opacity: 0.5;
            }
            li.nav_active::after {
                opacity: 1;
                transform: scaleX(1);
            }
            //검색버튼
            .channel_search {
                padding-left: 1rem;
                padding-right: 0;
            }
            button {
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                border: none;
                padding: none;
                background-color: white;
                img {
                }
            }
            .search_input {
                outline: none;
                margin-left: 0.5rem;
                border-width: 0;
                border-bottom: 0.1rem solid #000;
            }
        }
    }
    button {
        max-height: 3.6rem;
    }
    @media ${Ce.mobile} {
        .page_header {
            .page_header_profile {
                display: flex;
                justify-content: flex-start;
                .header_left {
                    margin-right: 16px;
                    .channel_img {
                        width: 55%;
                    }
                }
                .header-right {
                    .channel_name {
                        font-size: 26px;
                    }
                    .channel_info {
                        .channel_desc {
                        }
                    }
                }
            }
        }
    }
`,k4=B.div`
    border-bottom: 0.1rem solid #e4e4e4;
    padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem);
    /* overflow: hidden; */
    .channel_home_inner {
        display: flex;
        /* border: 1px solid blue; */
    }
    .channel_mainvideo {
        width: 100%;
        padding: 2.4rem 0;
        .video-loder {
            display: flex;

            .channel-logo {
                display: none;
            }
            .video-wrap {
                width: 42.4rem;
                height: 23.8rem;
                padding-bottom: 0%;
                margin-right: 1%;
                img,
                iframe {
                    width: 42.4rem;
                    height: 23.8rem;
                }
            }
            .text-wrap {
                padding-left: 1%;
            }
        }
        .movie_info {
        }
        .channel_name,
        .pluse-menu {
            display: none;
        }
    }
`,j4=B.div`
    padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem);
    .channel_video_tab {
        padding-top: 1%;
        .sort_btn {
            border-radius: 0.5rem;
            background-color: #f2f2f2;
            border: none;
            padding: 0.5rem 1rem;
            margin-right: 1rem;
            font-size: 1.4rem;
            line-height: 2rem;
            font-weight: 500;
        }
        .sort_btn.active {
            background-color: black;
            color: white;
        }
        .channel_videolist {
        }
    }
    @media ${Ce.mobile} {
        .channel_videolist {
            .search_results-wrap {
                width: 100%;
                display: flex;
                flex-direction: column;
                .video-loder {
                    width: 100%;
                    .video-wrap {
                    }
                    .text-wrap {
                    }
                }
            }
        }
    }
`,E4=B.div`
    .search_results {
        /* padding-right: calc(50% - 64.2rem); */
        padding-left: calc(50% - 64.2rem);
        padding-right: 30%;
        flex-direction: column;
        .search_results-wrap {
            flex-direction: column;
            width: 100%;
            padding-top: 1.5%;
            margin-top: 0;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                border-bottom: 0.1rem solid #e4e4e4;
                margin: 0 1.5% 1.5% 0;
                .video-wrap {
                    width: 24.6rem;
                    height: 13.8rem;
                    padding-bottom: 0%;
                    margin-right: 1%;
                    margin-bottom: 1.5%;
                    img,
                    iframe {
                        width: 24.6rem;
                        height: 13.8rem;
                    }
                }
            }
            .text-wrap {
                width: 80%;
                display: flex;
                justify-content: space-between;
                .channel-logo {
                    display: none;
                }
                .movie_info {
                    .movie_title {
                    }
                    .channel_name {
                    }
                    .movie_like_count {
                        .movie_date {
                        }
                    }
                }
            }
        }
    }
`,N4=()=>{const{Channel_name:e}=At(),{Channel:t}=R(n=>n.channel);return l.jsxs(l.Fragment,{children:[l.jsx(k4,{children:l.jsx("div",{className:"channel_home_inner",children:l.jsx("div",{className:"channel_main",children:l.jsx("div",{className:"channel_mainvideo",children:t[e].Movies&&t[e].Movies.length>0&&l.jsx(Ie,{movie:t[e].Movies[0]},t[e].Movies[0].movie_id)})})})}),l.jsxs("div",{className:"channel_home",children:[l.jsx("h2",{children:"추천"}),l.jsx("ul",{className:"search_results-wrap",children:t[e].Movies.map(n=>l.jsx(Ie,{movie:n},n.movie_id))})]})]})},L4=()=>{const{Channel_name:e}=At(),{Channel:t}=R(c=>c.channel),[n,r]=A.useState("latest"),o=t[e].Movies,i=c=>{const{year:u,month:d,day:m}=c.movie_date;return new Date(u,d-1,m)},a=(()=>{switch(n){case"latest":return[...o].sort((c,u)=>i(u)-i(c));case"popular":return[...o].sort((c,u)=>u.movie_like_count-c.movie_like_count);case"date":return[...o].sort((c,u)=>i(c)-i(u));default:return o}})();return l.jsxs(j4,{children:[l.jsxs("div",{className:"channel_video_tab",children:[l.jsxs("button",{className:`sort_btn ${n==="latest"?"active":""}`,onClick:()=>r("latest"),children:[" ","최신순"," "]}),l.jsxs("button",{className:`sort_btn ${n==="popular"?"active":""}`,onClick:()=>r("popular"),children:[" ","인기순"," "]}),l.jsxs("button",{className:`sort_btn ${n==="date"?"active":""}`,onClick:()=>r("date"),children:[" ","날짜순"," "]})]}),l.jsx("div",{className:"channel_videolist",children:l.jsx("div",{className:"search_results-wrap",children:a.map(c=>l.jsx(Ie,{movie:c},c.movie_id))})})]})},I4=({searchTerm:e})=>{var o;const{Channel_name:t}=At(),{Channel:n}=R(i=>i.channel),r=((o=n[t])==null?void 0:o.Movies.filter(i=>i.movie_title.includes(e)||i.movie_body.includes(e)))||[];return l.jsx(E4,{children:l.jsx("div",{className:"search_results",children:l.jsx("ul",{className:"search_results-wrap",children:r.length>0?r.map(i=>l.jsx(Ie,{movie:i},i.movie_id)):l.jsxs("p",{children:["이 채널에 ‘",e,"’와(과) 일치하는 콘텐츠가 없습니다."]})})})})},P4=()=>{const{Channel_name:e}=At(),{Channel:t}=R(u=>u.channel),[n,r]=A.useState("home"),[o,i]=A.useState(""),s=t[e],a=s==null?void 0:s.Movies.length,c=u=>u>=1e4?`${Math.floor(u/1e4)}만명`:`${u}명`;if(!s)return l.jsx(Sm,{children:l.jsxs("p",{children:['"',e,'" 찾으시는 채널이 없습니다.']})});if(s)return l.jsxs(Sm,{children:[l.jsx("div",{className:"header_banner",children:l.jsx("div",{className:"channel_banner",children:l.jsx("img",{src:s.channel_banner,alt:s})})}),l.jsx("div",{className:"page_header",children:l.jsxs("div",{className:"page_header_profile",children:[l.jsx("div",{className:"header_left",children:l.jsx("img",{className:"channel_img",src:s.channel_image,alt:s})}),l.jsxs("div",{className:"header_right",children:[l.jsx("div",{className:"channel_name",children:s.channel_name}),l.jsxs("div",{className:"channel_info",children:["@",e," • 구독자"," ",c(s.channel_subscribers)," • 동영상"," ",a,"개",l.jsxs("div",{className:"channel_desc",children:[" ",s.channel_introduction]}),l.jsx(cu,{channel_id:s.channel_id,channel_name:s.channel_nav})]})]})]})}),l.jsx("div",{className:"channel_navbar",children:l.jsxs("ul",{className:"inner",children:[l.jsx("li",{className:n==="home"?"nav_active":"",onClick:()=>r("home"),children:"홈"}),l.jsx("li",{className:n==="video"?"nav_active":"",onClick:()=>r("video"),children:"동영상"}),l.jsxs("li",{className:"channel_search",children:[l.jsx("button",{children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Search.svg",alt:"영상검색"})}),l.jsx("input",{className:"search_input",type:"text",value:o,onChange:u=>i(u.target.value),placeholder:"검색"})]})]})}),l.jsx("div",{className:"channel_content",children:o?l.jsx(I4,{searchTerm:o}):n==="home"?l.jsx(N4,{}):l.jsx(L4,{})})]})},R4=B.div`
    width: 100%;
    position: relative;
    .subscript-select {
        width: 9rem;
        background-color: rgba(0, 0, 0, 0.05);
        color: #0f0f0f;
        border-radius: 1rem;
        padding: 0.4rem 0.5rem.4rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 1.6rem;
        img {
            width: 1.8rem;
            margin-left: 0.5rem;
        }
    }
    .subscript-ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        border-radius: 1rem;
        box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.1);
        overflow: hidden;
        .simple-shadow {
            cursor: pointer;
        }
        li {
            background: #fff;
            padding: 1rem 16rem 1rem 1.2rem;
            font-size: 1.4rem;
            &:hover {
                background: #ececec;
            }
        }
    }
`,O4=B.ul`
    width: 100%;
    .subscript-li {
        margin: 3rem 0;
        display: flex;
        justify-content: start;
        align-items: center;
        cursor: pointer;
        .subscript-li-img {
            width: 13.6rem;
            height: 13.6rem;
            border-radius: 50%;
            margin-right: 3rem;
        }
        .subscript-channel-content {
            width: 70%;
            .content-channel-name {
                display: block;
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            .content-channel-engName,
            .content-channel-subscribers,
            .content-channel-introduction {
                font-size: 1.2rem;
                padding-right: 1rem;
                color: #606060;
            }
            .content-channel-engName {
                position: relative;
                &::before {
                    content: '';
                    border-radius: 50%;
                    border: 1px solid #606060;
                    width: 0.05rem;
                    height: 0.05rem;
                    position: absolute;
                    top: 50%;
                    right: 0.4rem;
                }
            }
        }
        .subscript-icon {
            width: 20%;
            .icon-notification {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.6rem 1.6rem;
                font-size: 1.4rem;
                color: #333;
                &:hover {
                    background-color: #b3b3b3;
                }
                .button-icon-notification {
                    margin-right: 0.6rem;
                    width: 2.6rem;
                }
            }
        }
    }
`,B4=B.div`
    width: 100%;
    margin: 10rem 0;
    text-align: center;
    .Not_login_subscription_img {
        width: 18%;
    }
    .Not_login_subscription_title {
        display: block;
        font-size: 2.8rem;
        margin-bottom: 1.6rem;
    }
    .Not_login_subscription_desc {
        margin-bottom: 3rem;
    }
    .login_button {
        width: 8%;
        margin: auto;
    }
`,T4=({channel:e,handleChangeThisId:t,thisChannelID:n})=>{var _;const{channel_id:r,channel_name:o,channel_image:i,channel_introduction:s,channel_subscribers:a,channel_nav:c,Movies:u}=e,d=W();A.useEffect(()=>{const g=document.querySelector("#subscript-popup");n===r&&g.showModal()},[n,r]);const m=g=>{g.stopPropagation(),t(r),document.querySelector("#subscript-popup").showModal()},v=g=>{g.stopPropagation(),document.querySelector("#subscript-popup").close()};return l.jsxs("li",{className:"subscript-li",onClick:()=>{var g;return d(`/channel/${((g=e.Movies[0])==null?void 0:g.movie_channel)||c}`)},children:[l.jsx("img",{className:"subscript-li-img",src:i,alt:o}),l.jsxs("div",{className:"subscript-channel-content",children:[l.jsx("strong",{className:"content-channel-name",children:o}),l.jsxs("span",{className:"content-channel-engName",children:["@",((_=u[0])==null?void 0:_.movie_channel)||c]}),l.jsxs("span",{className:"content-channel-subscribers",children:["구독자 ",a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"명"]}),l.jsx("p",{className:"content-channel-introduction",children:s})]}),l.jsx("div",{className:"subscript-icon",children:l.jsxs(ue,{className:"icon-notification",onClick:m,children:[l.jsx("img",{className:"button-icon-notification",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Notification.svg",alt:"notificaion"}),"구독중"]})}),n===r&&l.jsx(wv,{channel_name:o,handleClosePopup:v,channel_id:r,thisChannelID:n})]})},M4=({sortData:e,setThisSortType:t,thisSortType:n})=>{const[r,o]=A.useState(!1);re();const i=A.useRef(null),s=a=>{i.current&&!i.current.contains(a.target)&&o(!1)};return A.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]),l.jsx("div",{ref:i,children:l.jsxs(R4,{className:"subscript-sort",children:[l.jsxs("p",{className:"subscript-select",onClick:()=>o(!r),children:[n.name,l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/b26aaeebc663db109b629ff9f3eba7500b8fc6f3/Icon/Down_B.svg",alt:""})]}),l.jsx("ul",{className:"subscript-ul",style:{display:r?"block":"none"},children:e.map(a=>l.jsx("li",{className:a.type,onClick:()=>{t(a),o(!r)},children:a.name},a.id))})]})})},Am=[{id:0x580cafab62fb5,name:"가나다순",type:"channel_name"},{id:6546165164451165,name:"구독자순",type:"channel_subscribers"}],F4=()=>{const{Channel:e}=R(u=>u.channel),t=Object.keys(e).map(u=>e[u]),[n,r]=A.useState(null),[o,i]=A.useState(Am[0]),s=u=>{r(u)},{isLoginUser:a}=R(u=>u.auth),c=t.filter(u=>{var d;return(d=a==null?void 0:a.Subscription_Id)==null?void 0:d.includes(u.channel_id)});return l.jsxs(O4,{children:[l.jsx(M4,{sortData:Am,setThisSortType:i,thisSortType:o}),c.sort((u,d)=>o.type==="channel_name"?u[o.type]>d[o.type]?1:u[o.type]<d[o.type]?-1:0:d[o.type]>u[o.type]?1:d[o.type]<u[o.type]?-1:0).map(u=>l.jsx(T4,{channel:u,thisChannelID:n,handleChangeThisId:s},u.channel_id))]})},D4=B.div`
  width: 100%;
  .subscriptInner {
    width: 60%;
    margin: 2rem auto;
    .subscriptH2 {
      font-size: 3.6rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
  }
`,U4=()=>l.jsxs(B4,{children:[l.jsx("img",{src:"https://github.com/React-Project-Team1/data-center/blob/main/Subscription_logout.png?raw=true",alt:"icon",className:"Not_login_subscription_img"}),l.jsx("strong",{className:"Not_login_subscription_title",children:"새로운 동영상을 놓치지 마세요."}),l.jsx("p",{className:"Not_login_subscription_desc",children:"즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요."}),l.jsx("div",{className:"login_button",children:l.jsx(ru,{})})]}),z4=()=>{const{isAuth:e}=R(t=>t.auth);return l.jsx(D4,{children:e?l.jsxs("div",{className:"subscriptInner",children:[l.jsx("h2",{className:"subscriptH2",children:"모든 구독 채널"}),l.jsx("div",{className:"subscription-content-box",children:l.jsx(F4,{})})]}):l.jsx(U4,{})})};var Sv=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Av=Gc(Cm||(Cm=Sv([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));xp(km||(km=Sv(["",""],["",""])),Av);var Cm,km;const q4=xp`
  ${Av}
  :root{
    --youtube-red:#f00
  }
  html{
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: "Noto Sans KR";    
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  table {
    width: 100%;
  }
  input{
    box-sizing: border-box;
  }
  p,
  span{
    user-select: none;
  }
  .pc{
    display: block;
  }
  .mobile{
    display: none;
  }

  @media ${Ce.tablet} {
    html{
      font-size: 8px;
    }
  }
  @media ${Ce.mobile} {
    html{
      font-size: 6px;
    }
    .pc{
      display: none;
    }
    .mobile{
      display: block;
    }
  }
`,W4=()=>l.jsx(l.Fragment,{children:l.jsxs(H0,{children:[l.jsx(q4,{}),l.jsxs(W0,{children:[l.jsxs(J,{path:"/",element:l.jsx(Ew,{}),children:[l.jsx(J,{index:!0,element:l.jsx(Mx,{})}),l.jsxs(J,{path:"/movies",children:[l.jsx(J,{index:!0,element:l.jsx(_m,{})}),l.jsx(J,{path:":Search",element:l.jsx(_m,{})})]}),l.jsx(J,{path:"/watch",children:l.jsx(J,{path:":Movie_ID",element:l.jsx(c4,{})})}),l.jsx(J,{path:"/channel",children:l.jsx(J,{path:":Channel_name",element:l.jsx(P4,{})})}),l.jsx(J,{path:"/feed",children:l.jsx(J,{path:":Category",element:l.jsx(C4,{})})}),l.jsx(J,{path:"/subscription",children:l.jsx(J,{index:!0,element:l.jsx(z4,{})})}),l.jsx(J,{path:"*",element:l.jsx(Rw,{})})]}),l.jsx(J,{path:"/login",children:l.jsx(J,{index:!0,element:l.jsx(b4,{})})}),l.jsx(J,{path:"/join",children:l.jsx(J,{index:!0,element:l.jsx(S4,{})})}),l.jsxs(J,{path:"/studio",element:l.jsx(Pw,{}),children:[l.jsx(J,{path:":User_ID/videoupload",element:l.jsx(rb,{})}),l.jsx(J,{path:":User_ID/dashboard",element:l.jsx(f4,{})}),l.jsx(J,{path:":User_ID/content",element:l.jsx(nb,{})}),l.jsx(J,{path:":User_ID/comment",element:l.jsx(zw,{})})]})]})]})}),V4=H1({reducer:{auth:vw,channel:tb,header:iw}});Uh(document.getElementById("root")).render(l.jsx(A.StrictMode,{children:l.jsx(_1,{store:V4,children:l.jsx(W4,{})})}));
