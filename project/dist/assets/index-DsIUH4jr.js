function Pg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Rg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Im={exports:{}},ms={},Pm={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),Og=Symbol.for("react.portal"),Bg=Symbol.for("react.fragment"),Tg=Symbol.for("react.strict_mode"),Mg=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),Dg=Symbol.for("react.forward_ref"),Ug=Symbol.for("react.suspense"),qg=Symbol.for("react.memo"),$g=Symbol.for("react.lazy"),pu=Symbol.iterator;function Wg(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,Bm={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=Bm,this.updater=n||Rm}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tm(){}Tm.prototype=Ar.prototype;function Ql(e,t,n){this.props=e,this.context=t,this.refs=Bm,this.updater=n||Rm}var Zl=Ql.prototype=new Tm;Zl.constructor=Ql;Om(Zl,Ar.prototype);Zl.isPureReactComponent=!0;var gu=Array.isArray,Mm=Object.prototype.hasOwnProperty,ec={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function zm(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Mm.call(t,r)&&!Fm.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:No,type:e,key:i,ref:s,props:o,_owner:ec.current}}function Vg(e,t){return{$$typeof:No,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===No}function Hg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vu=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hg(""+e.key):t.toString(36)}function ai(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case No:case Og:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Gs(s,0):r,gu(o)?(n="",e!=null&&(n=e.replace(vu,"$&/")+"/"),ai(o,t,n,"",function(u){return u})):o!=null&&(tc(o)&&(o=Vg(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(vu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",gu(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+Gs(i,a);s+=ai(i,t,n,c,o)}else if(c=Wg(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+Gs(i,a++),s+=ai(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Uo(e,t,n){if(e==null)return e;var r=[],o=0;return ai(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Kg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},li={transition:null},Gg={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:li,ReactCurrentOwner:ec};function Dm(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Uo,forEach:function(e,t,n){Uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Uo(e,function(){t++}),t},toArray:function(e){return Uo(e,function(t){return t})||[]},only:function(e){if(!tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Ar;z.Fragment=Bg;z.Profiler=Mg;z.PureComponent=Ql;z.StrictMode=Tg;z.Suspense=Ug;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gg;z.act=Dm;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Om({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ec.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Mm.call(t,c)&&!Fm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:No,type:e.type,key:o,ref:i,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:zg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fg,_context:e},e.Consumer=e};z.createElement=zm;z.createFactory=function(e){var t=zm.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Dg,render:e}};z.isValidElement=tc;z.lazy=function(e){return{$$typeof:$g,_payload:{_status:-1,_result:e},_init:Kg}};z.memo=function(e,t){return{$$typeof:qg,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=li.transition;li.transition={};try{e()}finally{li.transition=t}};z.unstable_act=Dm;z.useCallback=function(e,t){return Ie.current.useCallback(e,t)};z.useContext=function(e){return Ie.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ie.current.useEffect(e,t)};z.useId=function(){return Ie.current.useId()};z.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ie.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};z.useRef=function(e){return Ie.current.useRef(e)};z.useState=function(e){return Ie.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ie.current.useTransition()};z.version="18.3.1";Pm.exports=z;var C=Pm.exports;const ve=Rg(C),Oa=Pg({__proto__:null,default:ve},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=C,Xg=Symbol.for("react.element"),Jg=Symbol.for("react.fragment"),Qg=Object.prototype.hasOwnProperty,Zg=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ev={key:!0,ref:!0,__self:!0,__source:!0};function Um(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Qg.call(t,r)&&!ev.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Xg,type:e,key:i,ref:s,props:o,_owner:Zg.current}}ms.Fragment=Jg;ms.jsx=Um;ms.jsxs=Um;Im.exports=ms;var l=Im.exports,qm={exports:{}},Je={},$m={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,O){var T=N.length;N.push(O);e:for(;0<T;){var K=T-1>>>1,G=N[K];if(0<o(G,O))N[K]=O,N[T]=G,T=K;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],T=N.pop();if(T!==O){N[0]=T;e:for(var K=0,G=N.length,vn=G>>>1;K<vn;){var st=2*(K+1)-1,Dt=N[st],Ue=st+1,kt=N[Ue];if(0>o(Dt,T))Ue<G&&0>o(kt,Dt)?(N[K]=kt,N[Ue]=T,K=Ue):(N[K]=Dt,N[st]=T,K=st);else if(Ue<G&&0>o(kt,T))N[K]=kt,N[Ue]=T,K=Ue;else break e}}return O}function o(N,O){var T=N.sortIndex-O.sortIndex;return T!==0?T:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,m=null,g=3,_=!1,v=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=N)r(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(u)}}function b(N){if(w=!1,p(N),!v)if(n(c)!==null)v=!0,Lr(A);else{var O=n(u);O!==null&&gn(b,O.startTime-N)}}function A(N,O){v=!1,w&&(w=!1,h(k),k=-1),_=!0;var T=g;try{for(p(O),m=n(c);m!==null&&(!(m.expirationTime>O)||N&&!ee());){var K=m.callback;if(typeof K=="function"){m.callback=null,g=m.priorityLevel;var G=K(m.expirationTime<=O);O=e.unstable_now(),typeof G=="function"?m.callback=G:m===n(c)&&r(c),p(O)}else r(c);m=n(c)}if(m!==null)var vn=!0;else{var st=n(u);st!==null&&gn(b,st.startTime-O),vn=!1}return vn}finally{m=null,g=T,_=!1}}var j=!1,x=null,k=-1,R=5,P=-1;function ee(){return!(e.unstable_now()-P<R)}function U(){if(x!==null){var N=e.unstable_now();P=N;var O=!0;try{O=x(!0,N)}finally{O?q():(j=!1,x=null)}}else j=!1}var q;if(typeof f=="function")q=function(){f(U)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,pn=te.port2;te.port1.onmessage=U,q=function(){pn.postMessage(null)}}else q=function(){y(U,0)};function Lr(N){x=N,j||(j=!0,q())}function gn(N,O){k=y(function(){N(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||_||(v=!0,Lr(A))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var T=g;g=O;try{return N()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=g;g=N;try{return O()}finally{g=T}},e.unstable_scheduleCallback=function(N,O,T){var K=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=T+G,N={id:d++,callback:O,priorityLevel:N,startTime:T,expirationTime:G,sortIndex:-1},T>K?(N.sortIndex=T,t(u,N),n(c)===null&&N===n(u)&&(w?(h(k),k=-1):w=!0,gn(b,T-K))):(N.sortIndex=G,t(c,N),v||_||(v=!0,Lr(A))),N},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(N){var O=g;return function(){var T=g;g=O;try{return N.apply(this,arguments)}finally{g=T}}}})(Wm);$m.exports=Wm;var tv=$m.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=C,Ge=tv;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,ro={};function Dn(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(ro[e]=t,e=0;e<t.length;e++)Vm.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ba=Object.prototype.hasOwnProperty,rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_u={},yu={};function ov(e){return Ba.call(yu,e)?!0:Ba.call(_u,e)?!1:rv.test(e)?yu[e]=!0:(_u[e]=!0,!1)}function iv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sv(e,t,n,r){if(t===null||typeof t>"u"||iv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nc,rc);Se[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nc,rc);Se[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nc,rc);Se[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function oc(e,t,n,r){var o=Se.hasOwnProperty(t)?Se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sv(t,n,o,r)&&(n=null),r||o===null?ov(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),Ta=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Km=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),ac=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Gm=Symbol.for("react.offscreen"),wu=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Ys;function Ur(e){if(Ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ys=t&&t[1]||""}return`
`+Ys+e}var Xs=!1;function Js(e,t){if(!e||Xs)return"";Xs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Xs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ur(e):""}function av(e){switch(e.tag){case 5:return Ur(e.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 2:case 15:return e=Js(e.type,!1),e;case 11:return e=Js(e.type.render,!1),e;case 1:return e=Js(e.type,!0),e;default:return""}}function za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Hn:return"Portal";case Ta:return"Profiler";case ic:return"StrictMode";case Ma:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Km:return(e.displayName||"Context")+".Consumer";case Hm:return(e._context.displayName||"Context")+".Provider";case sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ac:return t=e.displayName||null,t!==null?t:za(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return za(e(t))}catch{}}return null}function lv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(t);case 8:return t===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cv(e){var t=Ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $o(e){e._valueTracker||(e._valueTracker=cv(e))}function Xm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ym(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jm(e,t){t=t.checked,t!=null&&oc(e,"checked",t,!1)}function Ua(e,t){Jm(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qa(e,t.type,n):t.hasOwnProperty("defaultValue")&&qa(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qa(e,t,n){(t!=="number"||ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function $a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(qr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function Qm(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wo,ef=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uv=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){uv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function tf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=tf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var dv=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(dv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ga=null,sr=null,ar=null;function Cu(e){if(e=Po(e)){if(typeof Ga!="function")throw Error(E(280));var t=e.stateNode;t&&(t=vs(t),Ga(e.stateNode,e.type,t))}}function rf(e){sr?ar?ar.push(e):ar=[e]:sr=e}function of(){if(sr){var e=sr,t=ar;if(ar=sr=null,Cu(e),t)for(e=0;e<t.length;e++)Cu(t[e])}}function sf(e,t){return e(t)}function af(){}var Qs=!1;function lf(e,t,n){if(Qs)return e(t,n);Qs=!0;try{return sf(e,t,n)}finally{Qs=!1,(sr!==null||ar!==null)&&(af(),of())}}function io(e,t){var n=e.stateNode;if(n===null)return null;var r=vs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Ya=!1;if(Rt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){Ya=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{Ya=!1}function mv(e,t,n,r,o,i,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Gr=!1,ji=null,Ei=!1,Xa=null,fv={onError:function(e){Gr=!0,ji=e}};function hv(e,t,n,r,o,i,s,a,c){Gr=!1,ji=null,mv.apply(fv,arguments)}function pv(e,t,n,r,o,i,s,a,c){if(hv.apply(this,arguments),Gr){if(Gr){var u=ji;Gr=!1,ji=null}else throw Error(E(198));Ei||(Ei=!0,Xa=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ku(e){if(Un(e)!==e)throw Error(E(188))}function gv(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ku(o),e;if(i===r)return ku(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function uf(e){return e=gv(e),e!==null?df(e):null}function df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=df(e);if(t!==null)return t;e=e.sibling}return null}var mf=Ge.unstable_scheduleCallback,ju=Ge.unstable_cancelCallback,vv=Ge.unstable_shouldYield,_v=Ge.unstable_requestPaint,le=Ge.unstable_now,yv=Ge.unstable_getCurrentPriorityLevel,cc=Ge.unstable_ImmediatePriority,ff=Ge.unstable_UserBlockingPriority,Ni=Ge.unstable_NormalPriority,wv=Ge.unstable_LowPriority,hf=Ge.unstable_IdlePriority,fs=null,xt=null;function bv(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(fs,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Av,xv=Math.log,Sv=Math.LN2;function Av(e){return e>>>=0,e===0?32:31-(xv(e)/Sv|0)|0}var Vo=64,Ho=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=$r(a):(i&=s,i!==0&&(r=$r(i)))}else s=n&~o,s!==0?r=$r(s):i!==0&&(r=$r(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),o=1<<n,r|=e[n],t&=~o;return r}function Cv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-mt(i),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=Cv(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function Ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pf(){var e=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),e}function Zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function jv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-mt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function uc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function gf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vf,dc,_f,yf,wf,Qa=!1,Ko=[],Qt=null,Zt=null,en=null,so=new Map,ao=new Map,Kt=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":so.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(t.pointerId)}}function Or(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Po(t),t!==null&&dc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Nv(e,t,n,r,o){switch(t){case"focusin":return Qt=Or(Qt,e,t,n,r,o),!0;case"dragenter":return Zt=Or(Zt,e,t,n,r,o),!0;case"mouseover":return en=Or(en,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return so.set(i,Or(so.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ao.set(i,Or(ao.get(i)||null,e,t,n,r,o)),!0}return!1}function bf(e){var t=xn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=cf(n),t!==null){e.blockedOn=t,wf(e.priority,function(){_f(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ka=r,n.target.dispatchEvent(r),Ka=null}else return t=Po(n),t!==null&&dc(t),e.blockedOn=n,!1;t.shift()}return!0}function Nu(e,t,n){ci(e)&&n.delete(t)}function Lv(){Qa=!1,Qt!==null&&ci(Qt)&&(Qt=null),Zt!==null&&ci(Zt)&&(Zt=null),en!==null&&ci(en)&&(en=null),so.forEach(Nu),ao.forEach(Nu)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Qa||(Qa=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Lv)))}function lo(e){function t(o){return Br(o,e)}if(0<Ko.length){Br(Ko[0],e);for(var n=1;n<Ko.length;n++){var r=Ko[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Br(Qt,e),Zt!==null&&Br(Zt,e),en!==null&&Br(en,e),so.forEach(t),ao.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)bf(n),n.blockedOn===null&&Kt.shift()}var lr=zt.ReactCurrentBatchConfig,Ii=!0;function Iv(e,t,n,r){var o=H,i=lr.transition;lr.transition=null;try{H=1,mc(e,t,n,r)}finally{H=o,lr.transition=i}}function Pv(e,t,n,r){var o=H,i=lr.transition;lr.transition=null;try{H=4,mc(e,t,n,r)}finally{H=o,lr.transition=i}}function mc(e,t,n,r){if(Ii){var o=Za(e,t,n,r);if(o===null)ca(e,t,r,Pi,n),Eu(e,r);else if(Nv(o,e,t,n,r))r.stopPropagation();else if(Eu(e,r),t&4&&-1<Ev.indexOf(e)){for(;o!==null;){var i=Po(o);if(i!==null&&vf(i),i=Za(e,t,n,r),i===null&&ca(e,t,r,Pi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ca(e,t,r,null,n)}}var Pi=null;function Za(e,t,n,r){if(Pi=null,e=lc(r),e=xn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yv()){case cc:return 1;case ff:return 4;case Ni:case wv:return 16;case hf:return 536870912;default:return 16}default:return 16}}var Yt=null,fc=null,ui=null;function Sf(){if(ui)return ui;var e,t=fc,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ui=o.slice(e,1<r?1-r:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function Lu(){return!1}function Qe(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Go:Lu,this.isPropagationStopped=Lu,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Qe(Cr),Io=ie({},Cr,{view:0,detail:0}),Rv=Qe(Io),ea,ta,Tr,hs=ie({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(ea=e.screenX-Tr.screenX,ta=e.screenY-Tr.screenY):ta=ea=0,Tr=e),ea)},movementY:function(e){return"movementY"in e?e.movementY:ta}}),Iu=Qe(hs),Ov=ie({},hs,{dataTransfer:0}),Bv=Qe(Ov),Tv=ie({},Io,{relatedTarget:0}),na=Qe(Tv),Mv=ie({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=Qe(Mv),zv=ie({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=Qe(zv),Uv=ie({},Cr,{data:0}),Pu=Qe(Uv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wv[e])?!!t[e]:!1}function pc(){return Vv}var Hv=ie({},Io,{key:function(e){if(e.key){var t=qv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kv=Qe(Hv),Gv=ie({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=Qe(Gv),Yv=ie({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),Xv=Qe(Yv),Jv=ie({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Qe(Jv),Zv=ie({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e_=Qe(Zv),t_=[9,13,27,32],gc=Rt&&"CompositionEvent"in window,Yr=null;Rt&&"documentMode"in document&&(Yr=document.documentMode);var n_=Rt&&"TextEvent"in window&&!Yr,Af=Rt&&(!gc||Yr&&8<Yr&&11>=Yr),Ou=" ",Bu=!1;function Cf(e,t){switch(e){case"keyup":return t_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function r_(e,t){switch(e){case"compositionend":return kf(t);case"keypress":return t.which!==32?null:(Bu=!0,Ou);case"textInput":return e=t.data,e===Ou&&Bu?null:e;default:return null}}function o_(e,t){if(Gn)return e==="compositionend"||!gc&&Cf(e,t)?(e=Sf(),ui=fc=Yt=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Af&&t.locale!=="ko"?null:t.data;default:return null}}var i_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i_[e.type]:t==="textarea"}function jf(e,t,n,r){rf(r),t=Ri(t,"onChange"),0<t.length&&(n=new hc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,co=null;function s_(e){Ff(e,0)}function ps(e){var t=Jn(e);if(Xm(t))return e}function a_(e,t){if(e==="change")return t}var Ef=!1;if(Rt){var ra;if(Rt){var oa="oninput"in document;if(!oa){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),oa=typeof Mu.oninput=="function"}ra=oa}else ra=!1;Ef=ra&&(!document.documentMode||9<document.documentMode)}function Fu(){Xr&&(Xr.detachEvent("onpropertychange",Nf),co=Xr=null)}function Nf(e){if(e.propertyName==="value"&&ps(co)){var t=[];jf(t,co,e,lc(e)),lf(s_,t)}}function l_(e,t,n){e==="focusin"?(Fu(),Xr=t,co=n,Xr.attachEvent("onpropertychange",Nf)):e==="focusout"&&Fu()}function c_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(co)}function u_(e,t){if(e==="click")return ps(t)}function d_(e,t){if(e==="input"||e==="change")return ps(t)}function m_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:m_;function uo(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ba.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var n=zu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zu(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function If(){for(var e=window,t=ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ki(e.document)}return t}function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function f_(e){var t=If(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lf(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Du(n,i);var s=Du(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var h_=Rt&&"documentMode"in document&&11>=document.documentMode,Yn=null,el=null,Jr=null,tl=!1;function Uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||Yn==null||Yn!==ki(r)||(r=Yn,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&uo(Jr,r)||(Jr=r,r=Ri(el,"onSelect"),0<r.length&&(t=new hc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function Yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},ia={},Pf={};Rt&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function gs(e){if(ia[e])return ia[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pf)return ia[e]=t[n];return e}var Rf=gs("animationend"),Of=gs("animationiteration"),Bf=gs("animationstart"),Tf=gs("transitionend"),Mf=new Map,qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Mf.set(e,t),Dn(t,[e])}for(var sa=0;sa<qu.length;sa++){var aa=qu[sa],p_=aa.toLowerCase(),g_=aa[0].toUpperCase()+aa.slice(1);dn(p_,"on"+g_)}dn(Rf,"onAnimationEnd");dn(Of,"onAnimationIteration");dn(Bf,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Tf,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function $u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pv(r,t,void 0,e),e.currentTarget=null}function Ff(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;$u(o,a,u),i=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;$u(o,a,u),i=c}}}if(Ei)throw e=Xa,Ei=!1,Xa=null,e}function J(e,t){var n=t[sl];n===void 0&&(n=t[sl]=new Set);var r=e+"__bubble";n.has(r)||(zf(t,e,2,!1),n.add(r))}function la(e,t,n){var r=0;t&&(r|=4),zf(n,e,r,t)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[Xo]){e[Xo]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(v_.has(n)||la(n,!1,e),la(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xo]||(t[Xo]=!0,la("selectionchange",!1,t))}}function zf(e,t,n,r){switch(xf(t)){case 1:var o=Iv;break;case 4:o=Pv;break;default:o=mc}n=o.bind(null,t,n,e),o=void 0,!Ya||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ca(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=xn(a),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}a=a.parentNode}}r=r.return}lf(function(){var u=i,d=lc(n),m=[];e:{var g=Mf.get(e);if(g!==void 0){var _=hc,v=e;switch(e){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":_=Kv;break;case"focusin":v="focus",_=na;break;case"focusout":v="blur",_=na;break;case"beforeblur":case"afterblur":_=na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Xv;break;case Rf:case Of:case Bf:_=Fv;break;case Tf:_=Qv;break;case"scroll":_=Rv;break;case"wheel":_=e_;break;case"copy":case"cut":case"paste":_=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ru}var w=(t&4)!==0,y=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var f=u,p;f!==null;){p=f;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,h!==null&&(b=io(f,h),b!=null&&w.push(fo(f,b,p)))),y)break;f=f.return}0<w.length&&(g=new _(g,v,null,n,d),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",g&&n!==Ka&&(v=n.relatedTarget||n.fromElement)&&(xn(v)||v[Ot]))break e;if((_||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?xn(v):null,v!==null&&(y=Un(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(w=Iu,b="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ru,b="onPointerLeave",h="onPointerEnter",f="pointer"),y=_==null?g:Jn(_),p=v==null?g:Jn(v),g=new w(b,f+"leave",_,n,d),g.target=y,g.relatedTarget=p,b=null,xn(d)===u&&(w=new w(h,f+"enter",v,n,d),w.target=p,w.relatedTarget=y,b=w),y=b,_&&v)t:{for(w=_,h=v,f=0,p=w;p;p=Wn(p))f++;for(p=0,b=h;b;b=Wn(b))p++;for(;0<f-p;)w=Wn(w),f--;for(;0<p-f;)h=Wn(h),p--;for(;f--;){if(w===h||h!==null&&w===h.alternate)break t;w=Wn(w),h=Wn(h)}w=null}else w=null;_!==null&&Wu(m,g,_,w,!1),v!==null&&y!==null&&Wu(m,y,v,w,!0)}}e:{if(g=u?Jn(u):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var A=a_;else if(Tu(g))if(Ef)A=d_;else{A=c_;var j=l_}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=u_);if(A&&(A=A(e,u))){jf(m,A,n,d);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&qa(g,"number",g.value)}switch(j=u?Jn(u):window,e){case"focusin":(Tu(j)||j.contentEditable==="true")&&(Yn=j,el=u,Jr=null);break;case"focusout":Jr=el=Yn=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,Uu(m,n,d);break;case"selectionchange":if(h_)break;case"keydown":case"keyup":Uu(m,n,d)}var x;if(gc)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Gn?Cf(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Af&&n.locale!=="ko"&&(Gn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Gn&&(x=Sf()):(Yt=d,fc="value"in Yt?Yt.value:Yt.textContent,Gn=!0)),j=Ri(u,k),0<j.length&&(k=new Pu(k,e,null,n,d),m.push({event:k,listeners:j}),x?k.data=x:(x=kf(n),x!==null&&(k.data=x)))),(x=n_?r_(e,n):o_(e,n))&&(u=Ri(u,"onBeforeInput"),0<u.length&&(d=new Pu("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=x))}Ff(m,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=io(e,n),i!=null&&r.unshift(fo(e,i,o)),i=io(e,t),i!=null&&r.push(fo(e,i,o))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,o?(c=io(n,i),c!=null&&s.unshift(fo(n,c,a))):o||(c=io(n,i),c!=null&&s.push(fo(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var __=/\r\n?/g,y_=/\u0000|\uFFFD/g;function Vu(e){return(typeof e=="string"?e:""+e).replace(__,`
`).replace(y_,"")}function Jo(e,t,n){if(t=Vu(t),Vu(e)!==t&&n)throw Error(E(425))}function Oi(){}var nl=null,rl=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,w_=typeof clearTimeout=="function"?clearTimeout:void 0,Hu=typeof Promise=="function"?Promise:void 0,b_=typeof queueMicrotask=="function"?queueMicrotask:typeof Hu<"u"?function(e){return Hu.resolve(null).then(e).catch(x_)}:il;function x_(e){setTimeout(function(){throw e})}function ua(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),lo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);lo(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),bt="__reactFiber$"+kr,ho="__reactProps$"+kr,Ot="__reactContainer$"+kr,sl="__reactEvents$"+kr,S_="__reactListeners$"+kr,A_="__reactHandles$"+kr;function xn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ku(e);e!==null;){if(n=e[bt])return n;e=Ku(e)}return t}e=n,n=e.parentNode}return null}function Po(e){return e=e[bt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function vs(e){return e[ho]||null}var al=[],Qn=-1;function mn(e){return{current:e}}function Z(e){0>Qn||(e.current=al[Qn],al[Qn]=null,Qn--)}function X(e,t){Qn++,al[Qn]=e.current,e.current=t}var cn={},Ee=mn(cn),Te=mn(!1),Pn=cn;function mr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function Bi(){Z(Te),Z(Ee)}function Gu(e,t,n){if(Ee.current!==cn)throw Error(E(168));X(Ee,t),X(Te,n)}function Df(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,lv(e)||"Unknown",o));return ie({},n,r)}function Ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,Pn=Ee.current,X(Ee,e),X(Te,Te.current),!0}function Yu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Df(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,Z(Te),Z(Ee),X(Ee,e)):Z(Te),X(Te,n)}var Nt=null,_s=!1,da=!1;function Uf(e){Nt===null?Nt=[e]:Nt.push(e)}function C_(e){_s=!0,Uf(e)}function fn(){if(!da&&Nt!==null){da=!0;var e=0,t=H;try{var n=Nt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,_s=!1}catch(o){throw Nt!==null&&(Nt=Nt.slice(e+1)),mf(cc,fn),o}finally{H=t,da=!1}}return null}var Zn=[],er=0,Mi=null,Fi=0,Ze=[],et=0,Rn=null,Lt=1,It="";function yn(e,t){Zn[er++]=Fi,Zn[er++]=Mi,Mi=e,Fi=t}function qf(e,t,n){Ze[et++]=Lt,Ze[et++]=It,Ze[et++]=Rn,Rn=e;var r=Lt;e=It;var o=32-mt(r)-1;r&=~(1<<o),n+=1;var i=32-mt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Lt=1<<32-mt(t)+o|n<<o|r,It=i+e}else Lt=1<<i|n<<o|r,It=e}function _c(e){e.return!==null&&(yn(e,1),qf(e,1,0))}function yc(e){for(;e===Mi;)Mi=Zn[--er],Zn[er]=null,Fi=Zn[--er],Zn[er]=null;for(;e===Rn;)Rn=Ze[--et],Ze[et]=null,It=Ze[--et],Ze[et]=null,Lt=Ze[--et],Ze[et]=null}var He=null,We=null,ne=!1,ut=null;function $f(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,We=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:Lt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,We=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cl(e){if(ne){var t=We;if(t){var n=t;if(!Xu(e,t)){if(ll(e))throw Error(E(418));t=tn(n.nextSibling);var r=He;t&&Xu(e,t)?$f(r,n):(e.flags=e.flags&-4097|2,ne=!1,He=e)}}else{if(ll(e))throw Error(E(418));e.flags=e.flags&-4097|2,ne=!1,He=e}}}function Ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Qo(e){if(e!==He)return!1;if(!ne)return Ju(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=We)){if(ll(e))throw Wf(),Error(E(418));for(;t;)$f(e,t),t=tn(t.nextSibling)}if(Ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=He?tn(e.stateNode.nextSibling):null;return!0}function Wf(){for(var e=We;e;)e=tn(e.nextSibling)}function fr(){We=He=null,ne=!1}function wc(e){ut===null?ut=[e]:ut.push(e)}var k_=zt.ReactCurrentBatchConfig;function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Zo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qu(e){var t=e._init;return t(e._payload)}function Vf(e){function t(h,f){if(e){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=sn(h,f),h.index=0,h.sibling=null,h}function i(h,f,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=2,f):p):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,p,b){return f===null||f.tag!==6?(f=_a(p,h.mode,b),f.return=h,f):(f=o(f,p),f.return=h,f)}function c(h,f,p,b){var A=p.type;return A===Kn?d(h,f,p.props.children,b,p.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vt&&Qu(A)===f.type)?(b=o(f,p.props),b.ref=Mr(h,f,p),b.return=h,b):(b=_i(p.type,p.key,p.props,null,h.mode,b),b.ref=Mr(h,f,p),b.return=h,b)}function u(h,f,p,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=ya(p,h.mode,b),f.return=h,f):(f=o(f,p.children||[]),f.return=h,f)}function d(h,f,p,b,A){return f===null||f.tag!==7?(f=En(p,h.mode,b,A),f.return=h,f):(f=o(f,p),f.return=h,f)}function m(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=_a(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qo:return p=_i(f.type,f.key,f.props,null,h.mode,p),p.ref=Mr(h,null,f),p.return=h,p;case Hn:return f=ya(f,h.mode,p),f.return=h,f;case Vt:var b=f._init;return m(h,b(f._payload),p)}if(qr(f)||Pr(f))return f=En(f,h.mode,p,null),f.return=h,f;Zo(h,f)}return null}function g(h,f,p,b){var A=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return A!==null?null:a(h,f,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qo:return p.key===A?c(h,f,p,b):null;case Hn:return p.key===A?u(h,f,p,b):null;case Vt:return A=p._init,g(h,f,A(p._payload),b)}if(qr(p)||Pr(p))return A!==null?null:d(h,f,p,b,null);Zo(h,p)}return null}function _(h,f,p,b,A){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(p)||null,a(f,h,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case qo:return h=h.get(b.key===null?p:b.key)||null,c(f,h,b,A);case Hn:return h=h.get(b.key===null?p:b.key)||null,u(f,h,b,A);case Vt:var j=b._init;return _(h,f,p,j(b._payload),A)}if(qr(b)||Pr(b))return h=h.get(p)||null,d(f,h,b,A,null);Zo(f,b)}return null}function v(h,f,p,b){for(var A=null,j=null,x=f,k=f=0,R=null;x!==null&&k<p.length;k++){x.index>k?(R=x,x=null):R=x.sibling;var P=g(h,x,p[k],b);if(P===null){x===null&&(x=R);break}e&&x&&P.alternate===null&&t(h,x),f=i(P,f,k),j===null?A=P:j.sibling=P,j=P,x=R}if(k===p.length)return n(h,x),ne&&yn(h,k),A;if(x===null){for(;k<p.length;k++)x=m(h,p[k],b),x!==null&&(f=i(x,f,k),j===null?A=x:j.sibling=x,j=x);return ne&&yn(h,k),A}for(x=r(h,x);k<p.length;k++)R=_(x,h,k,p[k],b),R!==null&&(e&&R.alternate!==null&&x.delete(R.key===null?k:R.key),f=i(R,f,k),j===null?A=R:j.sibling=R,j=R);return e&&x.forEach(function(ee){return t(h,ee)}),ne&&yn(h,k),A}function w(h,f,p,b){var A=Pr(p);if(typeof A!="function")throw Error(E(150));if(p=A.call(p),p==null)throw Error(E(151));for(var j=A=null,x=f,k=f=0,R=null,P=p.next();x!==null&&!P.done;k++,P=p.next()){x.index>k?(R=x,x=null):R=x.sibling;var ee=g(h,x,P.value,b);if(ee===null){x===null&&(x=R);break}e&&x&&ee.alternate===null&&t(h,x),f=i(ee,f,k),j===null?A=ee:j.sibling=ee,j=ee,x=R}if(P.done)return n(h,x),ne&&yn(h,k),A;if(x===null){for(;!P.done;k++,P=p.next())P=m(h,P.value,b),P!==null&&(f=i(P,f,k),j===null?A=P:j.sibling=P,j=P);return ne&&yn(h,k),A}for(x=r(h,x);!P.done;k++,P=p.next())P=_(x,h,k,P.value,b),P!==null&&(e&&P.alternate!==null&&x.delete(P.key===null?k:P.key),f=i(P,f,k),j===null?A=P:j.sibling=P,j=P);return e&&x.forEach(function(U){return t(h,U)}),ne&&yn(h,k),A}function y(h,f,p,b){if(typeof p=="object"&&p!==null&&p.type===Kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case qo:e:{for(var A=p.key,j=f;j!==null;){if(j.key===A){if(A=p.type,A===Kn){if(j.tag===7){n(h,j.sibling),f=o(j,p.props.children),f.return=h,h=f;break e}}else if(j.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vt&&Qu(A)===j.type){n(h,j.sibling),f=o(j,p.props),f.ref=Mr(h,j,p),f.return=h,h=f;break e}n(h,j);break}else t(h,j);j=j.sibling}p.type===Kn?(f=En(p.props.children,h.mode,b,p.key),f.return=h,h=f):(b=_i(p.type,p.key,p.props,null,h.mode,b),b.ref=Mr(h,f,p),b.return=h,h=b)}return s(h);case Hn:e:{for(j=p.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(h,f.sibling),f=o(f,p.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=ya(p,h.mode,b),f.return=h,h=f}return s(h);case Vt:return j=p._init,y(h,f,j(p._payload),b)}if(qr(p))return v(h,f,p,b);if(Pr(p))return w(h,f,p,b);Zo(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(h,f.sibling),f=o(f,p),f.return=h,h=f):(n(h,f),f=_a(p,h.mode,b),f.return=h,h=f),s(h)):n(h,f)}return y}var hr=Vf(!0),Hf=Vf(!1),zi=mn(null),Di=null,tr=null,bc=null;function xc(){bc=tr=Di=null}function Sc(e){var t=zi.current;Z(zi),e._currentValue=t}function ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){Di=e,bc=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(bc!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(Di===null)throw Error(E(308));tr=e,Di.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var Sn=null;function Ac(e){Sn===null?Sn=[e]:Sn.push(e)}function Kf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ac(t)):(n.next=o.next,o.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function Cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Bt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ac(r)):(t.next=o.next,o.next=t),r.interleaved=t,Bt(e,n)}function mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}function Zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var o=e.updateQueue;Ht=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(i!==null){var m=o.baseState;s=0,d=u=c=null,a=i;do{var g=a.lane,_=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(g=t,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(_,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(_,m,g):v,g==null)break e;m=ie({},m,g);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else _={eventTime:_,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=_,c=m):d=d.next=_,s|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(d===null&&(c=m),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Bn|=s,e.lanes=s,e.memoizedState=m}}function ed(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Ro={},St=mn(Ro),po=mn(Ro),go=mn(Ro);function An(e){if(e===Ro)throw Error(E(174));return e}function kc(e,t){switch(X(go,t),X(po,e),X(St,Ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wa(t,e)}Z(St),X(St,t)}function pr(){Z(St),Z(po),Z(go)}function Yf(e){An(go.current);var t=An(St.current),n=Wa(t,e.type);t!==n&&(X(po,e),X(St,n))}function jc(e){po.current===e&&(Z(St),Z(po))}var re=mn(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function Ec(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var fi=zt.ReactCurrentDispatcher,fa=zt.ReactCurrentBatchConfig,On=0,oe=null,me=null,pe=null,$i=!1,Qr=!1,vo=0,j_=0;function Ae(){throw Error(E(321))}function Nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Lc(e,t,n,r,o,i){if(On=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?I_:P_,e=n(r,o),Qr){i=0;do{if(Qr=!1,vo=0,25<=i)throw Error(E(301));i+=1,pe=me=null,t.updateQueue=null,fi.current=R_,e=n(r,o)}while(Qr)}if(fi.current=Wi,t=me!==null&&me.next!==null,On=0,pe=me=oe=null,$i=!1,t)throw Error(E(300));return e}function Ic(){var e=vo!==0;return vo=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?oe.memoizedState=pe=e:pe=pe.next=e,pe}function ot(){if(me===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=pe===null?oe.memoizedState:pe.next;if(t!==null)pe=t,me=e;else{if(e===null)throw Error(E(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},pe===null?oe.memoizedState=pe=e:pe=pe.next=e}return pe}function _o(e,t){return typeof t=="function"?t(e):t}function ha(e){var t=ot(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,c=null,u=i;do{var d=u.lane;if((On&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=m,s=r):c=c.next=m,oe.lanes|=d,Bn|=d}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=a,pt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,Bn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pa(e){var t=ot(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);pt(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Xf(){}function Jf(e,t){var n=oe,r=ot(),o=t(),i=!pt(r.memoizedState,o);if(i&&(r.memoizedState=o,Be=!0),r=r.queue,Pc(eh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,yo(9,Zf.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(E(349));On&30||Qf(n,t,o)}return o}function Qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zf(e,t,n,r){t.value=n,t.getSnapshot=r,th(t)&&nh(e)}function eh(e,t,n){return n(function(){th(t)&&nh(e)})}function th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function nh(e){var t=Bt(e,1);t!==null&&ft(t,e,1,-1)}function td(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:e},t.queue=e,e=e.dispatch=L_.bind(null,oe,e),[t.memoizedState,e]}function yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rh(){return ot().memoizedState}function hi(e,t,n,r){var o=yt();oe.flags|=e,o.memoizedState=yo(1|t,n,void 0,r===void 0?null:r)}function ys(e,t,n,r){var o=ot();r=r===void 0?null:r;var i=void 0;if(me!==null){var s=me.memoizedState;if(i=s.destroy,r!==null&&Nc(r,s.deps)){o.memoizedState=yo(t,n,i,r);return}}oe.flags|=e,o.memoizedState=yo(1|t,n,i,r)}function nd(e,t){return hi(8390656,8,e,t)}function Pc(e,t){return ys(2048,8,e,t)}function oh(e,t){return ys(4,2,e,t)}function ih(e,t){return ys(4,4,e,t)}function sh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ah(e,t,n){return n=n!=null?n.concat([e]):null,ys(4,4,sh.bind(null,t,e),n)}function Rc(){}function lh(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ch(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uh(e,t,n){return On&21?(pt(n,t)||(n=pf(),oe.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function E_(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=fa.transition;fa.transition={};try{e(!1),t()}finally{H=n,fa.transition=r}}function dh(){return ot().memoizedState}function N_(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mh(e))fh(t,n);else if(n=Kf(e,t,n,r),n!==null){var o=Le();ft(n,e,r,o),hh(n,t,r)}}function L_(e,t,n){var r=on(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mh(e))fh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,pt(a,s)){var c=t.interleaved;c===null?(o.next=o,Ac(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Kf(e,t,o,r),n!==null&&(o=Le(),ft(n,e,r,o),hh(n,t,r))}}function mh(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function fh(e,t){Qr=$i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}var Wi={readContext:rt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},I_={readContext:rt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:nd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hi(4194308,4,sh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return hi(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=N_.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:td,useDebugValue:Rc,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=td(!1),t=e[0];return e=E_.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=yt();if(ne){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ye===null)throw Error(E(349));On&30||Qf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,nd(eh.bind(null,r,i,e),[e]),r.flags|=2048,yo(9,Zf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yt(),t=ye.identifierPrefix;if(ne){var n=It,r=Lt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=j_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},P_={readContext:rt,useCallback:lh,useContext:rt,useEffect:Pc,useImperativeHandle:ah,useInsertionEffect:oh,useLayoutEffect:ih,useMemo:ch,useReducer:ha,useRef:rh,useState:function(){return ha(_o)},useDebugValue:Rc,useDeferredValue:function(e){var t=ot();return uh(t,me.memoizedState,e)},useTransition:function(){var e=ha(_o)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Xf,useSyncExternalStore:Jf,useId:dh,unstable_isNewReconciler:!1},R_={readContext:rt,useCallback:lh,useContext:rt,useEffect:Pc,useImperativeHandle:ah,useInsertionEffect:oh,useLayoutEffect:ih,useMemo:ch,useReducer:pa,useRef:rh,useState:function(){return pa(_o)},useDebugValue:Rc,useDeferredValue:function(e){var t=ot();return me===null?t.memoizedState=e:uh(t,me.memoizedState,e)},useTransition:function(){var e=pa(_o)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Xf,useSyncExternalStore:Jf,useId:dh,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),o=on(e),i=Pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=nn(e,i,o),t!==null&&(ft(t,e,o,r),mi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),o=on(e),i=Pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=nn(e,i,o),t!==null&&(ft(t,e,o,r),mi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=on(e),o=Pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=nn(e,o,r),t!==null&&(ft(t,e,r,n),mi(t,e,r))}};function rd(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(o,i):!0}function ph(e,t,n){var r=!1,o=cn,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=Me(t)?Pn:Ee.current,r=t.contextTypes,i=(r=r!=null)?mr(e,o):cn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function od(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function ml(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Cc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=Me(t)?Pn:Ee.current,o.context=mr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(dl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ws.enqueueReplaceState(o,o.state,null),Ui(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var n="",r=t;do n+=av(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ga(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var O_=typeof WeakMap=="function"?WeakMap:Map;function gh(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hi||(Hi=!0,Sl=r),fl(e,t)},n}function vh(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){fl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){fl(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new O_;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=G_.bind(null,e,t,n),t.then(e,e))}function sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ad(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var B_=zt.ReactCurrentOwner,Be=!1;function Ne(e,t,n,r){t.child=e===null?Hf(t,null,n,r):hr(t,e.child,n,r)}function ld(e,t,n,r,o){n=n.render;var i=t.ref;return cr(t,o),r=Lc(e,t,n,r,i,o),n=Ic(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(ne&&n&&_c(t),t.flags|=1,Ne(e,t,r,o),t.child)}function cd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Uc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,_h(e,t,i,r,o)):(e=_i(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(s,r)&&e.ref===t.ref)return Tt(e,t,o)}return t.flags|=1,e=sn(i,r),e.ref=t.ref,e.return=t,t.child=e}function _h(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(uo(i,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,Tt(e,t,o)}return hl(e,t,n,r,o)}function yh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(rr,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(rr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(rr,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(rr,$e),$e|=r;return Ne(e,t,o,n),t.child}function wh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hl(e,t,n,r,o){var i=Me(n)?Pn:Ee.current;return i=mr(t,i),cr(t,o),n=Lc(e,t,n,r,i,o),r=Ic(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(ne&&r&&_c(t),t.flags|=1,Ne(e,t,n,o),t.child)}function ud(e,t,n,r,o){if(Me(n)){var i=!0;Ti(t)}else i=!1;if(cr(t,o),t.stateNode===null)pi(e,t),ph(t,n,r),ml(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Me(n)?Pn:Ee.current,u=mr(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&od(t,s,r,u),Ht=!1;var g=t.memoizedState;s.state=g,Ui(t,r,s,o),c=t.memoizedState,a!==r||g!==c||Te.current||Ht?(typeof d=="function"&&(dl(t,n,d,r),c=t.memoizedState),(a=Ht||rd(t,n,a,r,g,c,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Gf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:lt(t.type,a),s.props=u,m=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=rt(c):(c=Me(n)?Pn:Ee.current,c=mr(t,c));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||g!==c)&&od(t,s,r,c),Ht=!1,g=t.memoizedState,s.state=g,Ui(t,r,s,o);var v=t.memoizedState;a!==m||g!==v||Te.current||Ht?(typeof _=="function"&&(dl(t,n,_,r),v=t.memoizedState),(u=Ht||rd(t,n,u,r,g,v,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return pl(e,t,n,r,i,o)}function pl(e,t,n,r,o,i){wh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Yu(t,n,!1),Tt(e,t,i);r=t.stateNode,B_.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=hr(t,e.child,null,i),t.child=hr(t,null,a,i)):Ne(e,t,a,i),t.memoizedState=r.state,o&&Yu(t,n,!0),t.child}function bh(e){var t=e.stateNode;t.pendingContext?Gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gu(e,t.context,!1),kc(e,t.containerInfo)}function dd(e,t,n,r,o){return fr(),wc(o),t.flags|=256,Ne(e,t,n,r),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function xh(e,t,n){var r=t.pendingProps,o=re.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(re,o&1),e===null)return cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ss(s,r,0,null),e=En(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=vl(n),t.memoizedState=gl,e):Oc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return T_(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=sn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=sn(a,i):(i=En(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?vl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=gl,r}return i=e.child,e=i.sibling,r=sn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oc(e,t){return t=Ss({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ei(e,t,n,r){return r!==null&&wc(r),hr(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T_(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=ga(Error(E(422))),ei(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ss({mode:"visible",children:r.children},o,0,null),i=En(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hr(t,e.child,null,s),t.child.memoizedState=vl(s),t.memoizedState=gl,i);if(!(t.mode&1))return ei(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=ga(i,r,void 0),ei(e,t,s,r)}if(a=(s&e.childLanes)!==0,Be||a){if(r=ye,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Bt(e,o),ft(r,e,o,-1))}return Dc(),r=ga(Error(E(421))),ei(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Y_.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=tn(o.nextSibling),He=t,ne=!0,ut=null,e!==null&&(Ze[et++]=Lt,Ze[et++]=It,Ze[et++]=Rn,Lt=e.id,It=e.overflow,Rn=t),t=Oc(t,r.children),t.flags|=4096,t)}function md(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ul(e.return,t,n)}function va(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ne(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&md(e,n,t);else if(e.tag===19)md(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&qi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),va(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&qi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}va(t,!0,n,null,i);break;case"together":va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function M_(e,t,n){switch(t.tag){case 3:bh(t),fr();break;case 5:Yf(t);break;case 1:Me(t.type)&&Ti(t);break;case 4:kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(zi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?xh(e,t,n):(X(re,re.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,yh(e,t,n)}return Tt(e,t,n)}var Ah,_l,Ch,kh;Ah=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_l=function(){};Ch=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,An(St.current);var i=null;switch(n){case"input":o=Da(e,o),r=Da(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=$a(e,o),r=$a(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oi)}Va(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ro.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ro.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&J("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};kh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F_(e,t,n){var r=t.pendingProps;switch(yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Me(t.type)&&Bi(),Ce(t),null;case 3:return r=t.stateNode,pr(),Z(Te),Z(Ee),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(kl(ut),ut=null))),_l(e,t),Ce(t),null;case 5:jc(t);var o=An(go.current);if(n=t.type,e!==null&&t.stateNode!=null)Ch(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Ce(t),null}if(e=An(St.current),Qo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[bt]=t,r[ho]=i,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<Wr.length;o++)J(Wr[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":bu(r,i),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},J("invalid",r);break;case"textarea":Su(r,i),J("invalid",r)}Va(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Jo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Jo(r.textContent,a,e),o=["children",""+a]):ro.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&J("scroll",r)}switch(n){case"input":$o(r),xu(r,i,!0);break;case"textarea":$o(r),Au(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Oi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[bt]=t,e[ho]=r,Ah(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ha(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wr.length;o++)J(Wr[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":bu(e,r),o=Da(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),J("invalid",e);break;case"textarea":Su(e,r),o=$a(e,r),J("invalid",e);break;default:o=r}Va(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?nf(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ef(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&oo(e,c):typeof c=="number"&&oo(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ro.hasOwnProperty(i)?c!=null&&i==="onScroll"&&J("scroll",e):c!=null&&oc(e,i,c,s))}switch(n){case"input":$o(e),xu(e,r,!1);break;case"textarea":$o(e),Au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ir(e,!!r.multiple,i,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)kh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=An(go.current),An(St.current),Qo(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(i=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:Jo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Ce(t),null;case 13:if(Z(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&We!==null&&t.mode&1&&!(t.flags&128))Wf(),fr(),t.flags|=98560,i=!1;else if(i=Qo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[bt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else ut!==null&&(kl(ut),ut=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?fe===0&&(fe=3):Dc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return pr(),_l(e,t),e===null&&mo(t.stateNode.containerInfo),Ce(t),null;case 10:return Sc(t.type._context),Ce(t),null;case 17:return Me(t.type)&&Bi(),Ce(t),null;case 19:if(Z(re),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Fr(i,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=qi(e),s!==null){for(t.flags|=128,Fr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>vr&&(t.flags|=128,r=!0,Fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=qi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ne)return Ce(t),null}else 2*le()-i.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,Fr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return zc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function z_(e,t){switch(yc(t),t.tag){case 1:return Me(t.type)&&Bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),Z(Te),Z(Ee),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jc(t),null;case 13:if(Z(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(re),null;case 4:return pr(),null;case 10:return Sc(t.type._context),null;case 22:case 23:return zc(),null;case 24:return null;default:return null}}var ti=!1,ke=!1,D_=typeof WeakSet=="function"?WeakSet:Set,L=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function yl(e,t,n){try{n()}catch(r){ae(e,t,r)}}var fd=!1;function U_(e,t){if(nl=Ii,e=If(),vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,m=e,g=null;t:for(;;){for(var _;m!==n||o!==0&&m.nodeType!==3||(a=s+o),m!==i||r!==0&&m.nodeType!==3||(c=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===e)break t;if(g===n&&++u===o&&(a=s),g===i&&++d===r&&(c=s),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},Ii=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,y=v.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:lt(t.type,w),y);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(b){ae(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=fd,fd=!1,v}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&yl(t,n,i)}o=o.next}while(o!==r)}}function bs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jh(e){var t=e.alternate;t!==null&&(e.alternate=null,jh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[ho],delete t[sl],delete t[S_],delete t[A_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Eh(e){return e.tag===5||e.tag===3||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}var be=null,ct=!1;function qt(e,t,n){for(n=n.child;n!==null;)Nh(e,t,n),n=n.sibling}function Nh(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(fs,n)}catch{}switch(n.tag){case 5:ke||nr(n,t);case 6:var r=be,o=ct;be=null,qt(e,t,n),be=r,ct=o,be!==null&&(ct?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ct?(e=be,n=n.stateNode,e.nodeType===8?ua(e.parentNode,n):e.nodeType===1&&ua(e,n),lo(e)):ua(be,n.stateNode));break;case 4:r=be,o=ct,be=n.stateNode.containerInfo,ct=!0,qt(e,t,n),be=r,ct=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&yl(n,t,s),o=o.next}while(o!==r)}qt(e,t,n);break;case 1:if(!ke&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,qt(e,t,n),ke=r):qt(e,t,n);break;default:qt(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new D_),t.forEach(function(r){var o=X_.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,ct=!1;break e;case 3:be=a.stateNode.containerInfo,ct=!0;break e;case 4:be=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(be===null)throw Error(E(160));Nh(i,s,o),be=null,ct=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ae(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lh(t,e),t=t.sibling}function Lh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),_t(e),r&4){try{Zr(3,e,e.return),bs(3,e)}catch(w){ae(e,e.return,w)}try{Zr(5,e,e.return)}catch(w){ae(e,e.return,w)}}break;case 1:at(t,e),_t(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(at(t,e),_t(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var o=e.stateNode;try{oo(o,"")}catch(w){ae(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Jm(o,i),Ha(a,s);var u=Ha(a,i);for(s=0;s<c.length;s+=2){var d=c[s],m=c[s+1];d==="style"?nf(o,m):d==="dangerouslySetInnerHTML"?ef(o,m):d==="children"?oo(o,m):oc(o,d,m,u)}switch(a){case"input":Ua(o,i);break;case"textarea":Qm(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?ir(o,!!i.multiple,_,!1):g!==!!i.multiple&&(i.defaultValue!=null?ir(o,!!i.multiple,i.defaultValue,!0):ir(o,!!i.multiple,i.multiple?[]:"",!1))}o[ho]=i}catch(w){ae(e,e.return,w)}}break;case 6:if(at(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ae(e,e.return,w)}}break;case 3:if(at(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(t.containerInfo)}catch(w){ae(e,e.return,w)}break;case 4:at(t,e),_t(e);break;case 13:at(t,e),_t(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Mc=le())),r&4&&pd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(u=ke)||d,at(t,e),ke=u):at(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(m=L=d;L!==null;){switch(g=L,_=g.child,g.tag){case 0:case 11:case 14:case 15:Zr(4,g,g.return);break;case 1:nr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ae(r,n,w)}}break;case 5:nr(g,g.return);break;case 22:if(g.memoizedState!==null){vd(m);continue}}_!==null?(_.return=g,L=_):vd(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,c=m.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=tf("display",s))}catch(w){ae(e,e.return,w)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){ae(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:at(t,e),_t(e),r&4&&pd(e);break;case 21:break;default:at(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Eh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(oo(o,""),r.flags&=-33);var i=hd(e);xl(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=hd(e);bl(e,a,s);break;default:throw Error(E(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q_(e,t,n){L=e,Ih(e)}function Ih(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||ti;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||ke;a=ti;var u=ke;if(ti=s,(ke=c)&&!u)for(L=o;L!==null;)s=L,c=s.child,s.tag===22&&s.memoizedState!==null?_d(o):c!==null?(c.return=s,L=c):_d(o);for(;i!==null;)L=i,Ih(i),i=i.sibling;L=o,ti=a,ke=u}gd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):gd(e)}}function gd(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||bs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ed(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ed(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&lo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ke||t.flags&512&&wl(t)}catch(g){ae(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function vd(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function _d(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bs(4,t)}catch(c){ae(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ae(t,o,c)}}var i=t.return;try{wl(t)}catch(c){ae(t,i,c)}break;case 5:var s=t.return;try{wl(t)}catch(c){ae(t,s,c)}}}catch(c){ae(t,t.return,c)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var $_=Math.ceil,Vi=zt.ReactCurrentDispatcher,Bc=zt.ReactCurrentOwner,nt=zt.ReactCurrentBatchConfig,D=0,ye=null,ue=null,xe=0,$e=0,rr=mn(0),fe=0,wo=null,Bn=0,xs=0,Tc=0,eo=null,Re=null,Mc=0,vr=1/0,jt=null,Hi=!1,Sl=null,rn=null,ni=!1,Xt=null,Ki=0,to=0,Al=null,gi=-1,vi=0;function Le(){return D&6?le():gi!==-1?gi:gi=le()}function on(e){return e.mode&1?D&2&&xe!==0?xe&-xe:k_.transition!==null?(vi===0&&(vi=pf()),vi):(e=H,e!==0||(e=window.event,e=e===void 0?16:xf(e.type)),e):1}function ft(e,t,n,r){if(50<to)throw to=0,Al=null,Error(E(185));Lo(e,n,r),(!(D&2)||e!==ye)&&(e===ye&&(!(D&2)&&(xs|=n),fe===4&&Gt(e,xe)),Fe(e,r),n===1&&D===0&&!(t.mode&1)&&(vr=le()+500,_s&&fn()))}function Fe(e,t){var n=e.callbackNode;kv(e,t);var r=Li(e,e===ye?xe:0);if(r===0)n!==null&&ju(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ju(n),t===1)e.tag===0?C_(yd.bind(null,e)):Uf(yd.bind(null,e)),b_(function(){!(D&6)&&fn()}),n=null;else{switch(gf(r)){case 1:n=cc;break;case 4:n=ff;break;case 16:n=Ni;break;case 536870912:n=hf;break;default:n=Ni}n=zh(n,Ph.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ph(e,t){if(gi=-1,vi=0,D&6)throw Error(E(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=Li(e,e===ye?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gi(e,r);else{t=r;var o=D;D|=2;var i=Oh();(ye!==e||xe!==t)&&(jt=null,vr=le()+500,jn(e,t));do try{H_();break}catch(a){Rh(e,a)}while(!0);xc(),Vi.current=i,D=o,ue!==null?t=0:(ye=null,xe=0,t=fe)}if(t!==0){if(t===2&&(o=Ja(e),o!==0&&(r=o,t=Cl(e,o))),t===1)throw n=wo,jn(e,0),Gt(e,r),Fe(e,le()),n;if(t===6)Gt(e,r);else{if(o=e.current.alternate,!(r&30)&&!W_(o)&&(t=Gi(e,r),t===2&&(i=Ja(e),i!==0&&(r=i,t=Cl(e,i))),t===1))throw n=wo,jn(e,0),Gt(e,r),Fe(e,le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:wn(e,Re,jt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=Mc+500-le(),10<t)){if(Li(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=il(wn.bind(null,e,Re,jt),t);break}wn(e,Re,jt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-mt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$_(r/1960))-r,10<r){e.timeoutHandle=il(wn.bind(null,e,Re,jt),r);break}wn(e,Re,jt);break;case 5:wn(e,Re,jt);break;default:throw Error(E(329))}}}return Fe(e,le()),e.callbackNode===n?Ph.bind(null,e):null}function Cl(e,t){var n=eo;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=Gi(e,t),e!==2&&(t=Re,Re=n,t!==null&&kl(t)),e}function kl(e){Re===null?Re=e:Re.push.apply(Re,e)}function W_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!pt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~Tc,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function yd(e){if(D&6)throw Error(E(327));ur();var t=Li(e,0);if(!(t&1))return Fe(e,le()),null;var n=Gi(e,t);if(e.tag!==0&&n===2){var r=Ja(e);r!==0&&(t=r,n=Cl(e,r))}if(n===1)throw n=wo,jn(e,0),Gt(e,t),Fe(e,le()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Re,jt),Fe(e,le()),null}function Fc(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(vr=le()+500,_s&&fn())}}function Tn(e){Xt!==null&&Xt.tag===0&&!(D&6)&&ur();var t=D;D|=1;var n=nt.transition,r=H;try{if(nt.transition=null,H=1,e)return e()}finally{H=r,nt.transition=n,D=t,!(D&6)&&fn()}}function zc(){$e=rr.current,Z(rr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,w_(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bi();break;case 3:pr(),Z(Te),Z(Ee),Ec();break;case 5:jc(r);break;case 4:pr();break;case 13:Z(re);break;case 19:Z(re);break;case 10:Sc(r.type._context);break;case 22:case 23:zc()}n=n.return}if(ye=e,ue=e=sn(e.current,null),xe=$e=t,fe=0,wo=null,Tc=xs=Bn=0,Re=eo=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Sn=null}return e}function Rh(e,t){do{var n=ue;try{if(xc(),fi.current=Wi,$i){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}$i=!1}if(On=0,pe=me=oe=null,Qr=!1,vo=0,Bc.current=null,n===null||n.return===null){fe=1,wo=t,ue=null;break}e:{var i=e,s=n.return,a=n,c=t;if(t=xe,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=sd(s);if(_!==null){_.flags&=-257,ad(_,s,a,i,t),_.mode&1&&id(i,u,t),t=_,c=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){id(i,u,t),Dc();break e}c=Error(E(426))}}else if(ne&&a.mode&1){var y=sd(s);if(y!==null){!(y.flags&65536)&&(y.flags|=256),ad(y,s,a,i,t),wc(gr(c,a));break e}}i=c=gr(c,a),fe!==4&&(fe=2),eo===null?eo=[i]:eo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=gh(i,c,t);Zu(i,h);break e;case 1:a=c;var f=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(rn===null||!rn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=vh(i,a,t);Zu(i,b);break e}}i=i.return}while(i!==null)}Th(n)}catch(A){t=A,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function Oh(){var e=Vi.current;return Vi.current=Wi,e===null?Wi:e}function Dc(){(fe===0||fe===3||fe===2)&&(fe=4),ye===null||!(Bn&268435455)&&!(xs&268435455)||Gt(ye,xe)}function Gi(e,t){var n=D;D|=2;var r=Oh();(ye!==e||xe!==t)&&(jt=null,jn(e,t));do try{V_();break}catch(o){Rh(e,o)}while(!0);if(xc(),D=n,Vi.current=r,ue!==null)throw Error(E(261));return ye=null,xe=0,fe}function V_(){for(;ue!==null;)Bh(ue)}function H_(){for(;ue!==null&&!vv();)Bh(ue)}function Bh(e){var t=Fh(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Th(e):ue=t,Bc.current=null}function Th(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z_(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ue=null;return}}else if(n=F_(n,t,$e),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);fe===0&&(fe=5)}function wn(e,t,n){var r=H,o=nt.transition;try{nt.transition=null,H=1,K_(e,t,n,r)}finally{nt.transition=o,H=r}return null}function K_(e,t,n,r){do ur();while(Xt!==null);if(D&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(jv(e,i),e===ye&&(ue=ye=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ni||(ni=!0,zh(Ni,function(){return ur(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nt.transition,nt.transition=null;var s=H;H=1;var a=D;D|=4,Bc.current=null,U_(e,n),Lh(n,e),f_(rl),Ii=!!nl,rl=nl=null,e.current=n,q_(n),_v(),D=a,H=s,nt.transition=i}else e.current=n;if(ni&&(ni=!1,Xt=e,Ki=o),i=e.pendingLanes,i===0&&(rn=null),bv(n.stateNode),Fe(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Hi)throw Hi=!1,e=Sl,Sl=null,e;return Ki&1&&e.tag!==0&&ur(),i=e.pendingLanes,i&1?e===Al?to++:(to=0,Al=e):to=0,fn(),null}function ur(){if(Xt!==null){var e=gf(Ki),t=nt.transition,n=H;try{if(nt.transition=null,H=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Ki=0,D&6)throw Error(E(331));var o=D;for(D|=4,L=e.current;L!==null;){var i=L,s=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:Zr(8,d,i)}var m=d.child;if(m!==null)m.return=d,L=m;else for(;L!==null;){d=L;var g=d.sibling,_=d.return;if(jh(d),d===u){L=null;break}if(g!==null){g.return=_,L=g;break}L=_}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var y=w.sibling;w.sibling=null,w=y}while(w!==null)}}L=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,L=s;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,L=h;break e}L=i.return}}var f=e.current;for(L=f;L!==null;){s=L;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,L=p;else e:for(s=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bs(9,a)}}catch(A){ae(a,a.return,A)}if(a===s){L=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,L=b;break e}L=a.return}}if(D=o,fn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(fs,e)}catch{}r=!0}return r}finally{H=n,nt.transition=t}}return!1}function wd(e,t,n){t=gr(n,t),t=gh(e,t,1),e=nn(e,t,1),t=Le(),e!==null&&(Lo(e,1,t),Fe(e,t))}function ae(e,t,n){if(e.tag===3)wd(e,e,n);else for(;t!==null;){if(t.tag===3){wd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=gr(n,e),e=vh(t,e,1),t=nn(t,e,1),e=Le(),t!==null&&(Lo(t,1,e),Fe(t,e));break}}t=t.return}}function G_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(xe&n)===n&&(fe===4||fe===3&&(xe&130023424)===xe&&500>le()-Mc?jn(e,0):Tc|=n),Fe(e,t)}function Mh(e,t){t===0&&(e.mode&1?(t=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):t=1);var n=Le();e=Bt(e,t),e!==null&&(Lo(e,t,n),Fe(e,n))}function Y_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mh(e,n)}function X_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Mh(e,n)}var Fh;Fh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,M_(e,t,n);Be=!!(e.flags&131072)}else Be=!1,ne&&t.flags&1048576&&qf(t,Fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pi(e,t),e=t.pendingProps;var o=mr(t,Ee.current);cr(t,n),o=Lc(null,t,r,e,o,n);var i=Ic();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Ti(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Cc(t),o.updater=ws,t.stateNode=o,o._reactInternals=t,ml(t,r,e,n),t=pl(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&_c(t),Ne(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Q_(r),e=lt(r,e),o){case 0:t=hl(null,t,r,e,n);break e;case 1:t=ud(null,t,r,e,n);break e;case 11:t=ld(null,t,r,e,n);break e;case 14:t=cd(null,t,r,lt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),hl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),ud(e,t,r,o,n);case 3:e:{if(bh(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Gf(e,t),Ui(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=gr(Error(E(423)),t),t=dd(e,t,r,n,o);break e}else if(r!==o){o=gr(Error(E(424)),t),t=dd(e,t,r,n,o);break e}else for(We=tn(t.stateNode.containerInfo.firstChild),He=t,ne=!0,ut=null,n=Hf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===o){t=Tt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return Yf(t),e===null&&cl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,ol(r,o)?s=null:i!==null&&ol(r,i)&&(t.flags|=32),wh(e,t),Ne(e,t,s,n),t.child;case 6:return e===null&&cl(t),null;case 13:return xh(e,t,n);case 4:return kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),ld(e,t,r,o,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,X(zi,r._currentValue),r._currentValue=s,i!==null)if(pt(i.value,s)){if(i.children===o.children&&!Te.current){t=Tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Pt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),ul(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ul(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ne(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,cr(t,n),o=rt(o),r=r(o),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),cd(e,t,r,o,n);case 15:return _h(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),pi(e,t),t.tag=1,Me(r)?(e=!0,Ti(t)):e=!1,cr(t,n),ph(t,r,o),ml(t,r,o,n),pl(null,t,r,!0,e,n);case 19:return Sh(e,t,n);case 22:return yh(e,t,n)}throw Error(E(156,t.tag))};function zh(e,t){return mf(e,t)}function J_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new J_(e,t,n,r)}function Uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q_(e){if(typeof e=="function")return Uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sc)return 11;if(e===ac)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Uc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Kn:return En(n.children,o,i,t);case ic:s=8,o|=8;break;case Ta:return e=tt(12,n,t,o|2),e.elementType=Ta,e.lanes=i,e;case Ma:return e=tt(13,n,t,o),e.elementType=Ma,e.lanes=i,e;case Fa:return e=tt(19,n,t,o),e.elementType=Fa,e.lanes=i,e;case Gm:return Ss(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hm:s=10;break e;case Km:s=9;break e;case sc:s=11;break e;case ac:s=14;break e;case Vt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=tt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function En(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Ss(e,t,n,r){return e=tt(22,e,r,t),e.elementType=Gm,e.lanes=n,e.stateNode={isHidden:!1},e}function _a(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function ya(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z_(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qc(e,t,n,r,o,i,s,a,c){return e=new Z_(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(i),e}function e0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dh(e){if(!e)return cn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Me(n))return Df(e,n,t)}return t}function Uh(e,t,n,r,o,i,s,a,c){return e=qc(n,r,!0,e,o,i,s,a,c),e.context=Dh(null),n=e.current,r=Le(),o=on(n),i=Pt(r,o),i.callback=t??null,nn(n,i,o),e.current.lanes=o,Lo(e,o,r),Fe(e,r),e}function As(e,t,n,r){var o=t.current,i=Le(),s=on(o);return n=Dh(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(o,t,s),e!==null&&(ft(e,o,s,i),mi(e,o,s)),s}function Yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function t0(){return null}var qh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wc(e){this._internalRoot=e}Cs.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));As(e,t,null,null)};Cs.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){As(null,e,null,null)}),t[Ot]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&bf(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function n0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Yi(s);i.call(u)}}var s=Uh(t,r,e,0,null,!1,!1,"",xd);return e._reactRootContainer=s,e[Ot]=s.current,mo(e.nodeType===8?e.parentNode:e),Tn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Yi(c);a.call(u)}}var c=qc(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=c,e[Ot]=c.current,mo(e.nodeType===8?e.parentNode:e),Tn(function(){As(t,c,n,r)}),c}function js(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var c=Yi(s);a.call(c)}}As(t,s,e,o)}else s=n0(n,t,e,o,r);return Yi(s)}vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$r(t.pendingLanes);n!==0&&(uc(t,n|1),Fe(t,le()),!(D&6)&&(vr=le()+500,fn()))}break;case 13:Tn(function(){var r=Bt(e,1);if(r!==null){var o=Le();ft(r,e,1,o)}}),$c(e,1)}};dc=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Le();ft(t,e,134217728,n)}$c(e,134217728)}};_f=function(e){if(e.tag===13){var t=on(e),n=Bt(e,t);if(n!==null){var r=Le();ft(n,e,t,r)}$c(e,t)}};yf=function(){return H};wf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Ga=function(e,t,n){switch(t){case"input":if(Ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=vs(r);if(!o)throw Error(E(90));Xm(r),Ua(r,o)}}}break;case"textarea":Qm(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};sf=Fc;af=Tn;var r0={usingClientEntryPoint:!1,Events:[Po,Jn,vs,rf,of,Fc]},zr={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o0={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uf(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||t0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{fs=ri.inject(o0),xt=ri}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(E(200));return e0(e,t,null,n)};Je.createRoot=function(e,t){if(!Vc(e))throw Error(E(299));var n=!1,r="",o=qh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qc(e,1,!1,null,null,n,!1,r,o),e[Ot]=t.current,mo(e.nodeType===8?e.parentNode:e),new Wc(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=uf(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Tn(e)};Je.hydrate=function(e,t,n){if(!ks(t))throw Error(E(200));return js(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Vc(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=qh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Uh(t,null,e,1,n??null,o,!1,i,s),e[Ot]=t.current,mo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Cs(t)};Je.render=function(e,t,n){if(!ks(t))throw Error(E(200));return js(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!ks(e))throw Error(E(40));return e._reactRootContainer?(Tn(function(){js(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Je.unstable_batchedUpdates=Fc;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ks(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return js(e,t,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function $h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($h)}catch(e){console.error(e)}}$h(),qm.exports=Je;var i0=qm.exports,Wh,Sd=i0;Wh=Sd.createRoot,Sd.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bo.apply(this,arguments)}var Jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Jt||(Jt={}));const Ad="popstate";function s0(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:c=""}=qn(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),jl("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let c=o.location.href,u=c.indexOf("#");a=u===-1?c:c.slice(0,u)}return a+"#"+(typeof i=="string"?i:Vh(i))}function r(o,i){Hc(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return l0(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Hc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function a0(){return Math.random().toString(36).substr(2,8)}function Cd(e,t){return{usr:e.state,key:e.key,idx:t}}function jl(e,t,n,r){return n===void 0&&(n=null),bo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qn(t):t,{state:n,key:t&&t.key||r||a0()})}function Vh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function l0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Jt.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(bo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function m(){a=Jt.Pop;let y=d(),h=y==null?null:y-u;u=y,c&&c({action:a,location:w.location,delta:h})}function g(y,h){a=Jt.Push;let f=jl(w.location,y,h);n&&n(f,y),u=d()+1;let p=Cd(f,u),b=w.createHref(f);try{s.pushState(p,"",b)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(b)}i&&c&&c({action:a,location:w.location,delta:1})}function _(y,h){a=Jt.Replace;let f=jl(w.location,y,h);n&&n(f,y),u=d();let p=Cd(f,u),b=w.createHref(f);s.replaceState(p,"",b),i&&c&&c({action:a,location:w.location,delta:0})}function v(y){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof y=="string"?y:Vh(y);return f=f.replace(/ $/,"%20"),he(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let w={get action(){return a},get location(){return e(o,s)},listen(y){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Ad,m),c=y,()=>{o.removeEventListener(Ad,m),c=null}},createHref(y){return t(o,y)},createURL:v,encodeLocation(y){let h=v(y);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:_,go(y){return s.go(y)}};return w}var kd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kd||(kd={}));function c0(e,t,n){return n===void 0&&(n="/"),u0(e,t,n,!1)}function u0(e,t,n,r){let o=typeof t=="string"?qn(t):t,i=Gh(o.pathname||"/",n);if(i==null)return null;let s=Hh(e);d0(s);let a=null;for(let c=0;a==null&&c<s.length;++c){let u=x0(i);a=w0(s[c],u,r)}return a}function Hh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Nn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hh(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:_0(u,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let c of Kh(i.path))o(i,s,c)}),t}function Kh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Kh(r.join("/")),a=[];return a.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function d0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const m0=/^:[\w-]+$/,f0=3,h0=2,p0=1,g0=10,v0=-2,jd=e=>e==="*";function _0(e,t){let n=e.split("/"),r=n.length;return n.some(jd)&&(r+=v0),t&&(r+=h0),n.filter(o=>!jd(o)).reduce((o,i)=>o+(m0.test(i)?f0:i===""?p0:g0),r)}function y0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function w0(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",m=Ed({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),g=c.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=Ed({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!m)return null;Object.assign(o,m.params),s.push({params:o,pathname:Nn([i,m.pathname]),pathnameBase:E0(Nn([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=Nn([i,m.pathnameBase]))}return s}function Ed(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=b0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,m)=>{let{paramName:g,isOptional:_}=d;if(g==="*"){let w=a[m]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[m];return _&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function b0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function x0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Hc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function S0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?qn(e):e;return{pathname:n?n.startsWith("/")?n:A0(n,t):t,search:N0(r),hash:L0(o)}}function A0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function wa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function C0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function k0(e,t){let n=C0(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function j0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=qn(e):(o=bo({},e),he(!o.pathname||!o.pathname.includes("?"),wa("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),wa("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),wa("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let m=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}a=m>=0?t[m]:"/"}let c=S0(o,a),u=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),E0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,L0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function I0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yh=["post","put","patch","delete"];new Set(Yh);const P0=["get",...Yh];new Set(P0);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xo.apply(this,arguments)}const Kc=C.createContext(null),R0=C.createContext(null),Es=C.createContext(null),Ns=C.createContext(null),hn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Xh=C.createContext(null);function Ls(){return C.useContext(Ns)!=null}function Oo(){return Ls()||he(!1),C.useContext(Ns).location}function Jh(e){C.useContext(Es).static||C.useLayoutEffect(e)}function $(){let{isDataRoute:e}=C.useContext(hn);return e?G0():O0()}function O0(){Ls()||he(!1);let e=C.useContext(Kc),{basename:t,future:n,navigator:r}=C.useContext(Es),{matches:o}=C.useContext(hn),{pathname:i}=Oo(),s=JSON.stringify(k0(o,n.v7_relativeSplatPath)),a=C.useRef(!1);return Jh(()=>{a.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let m=j0(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Nn([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,s,i,e])}const B0=C.createContext(null);function T0(e){let t=C.useContext(hn).outlet;return t&&C.createElement(B0.Provider,{value:e},t)}function Ct(){let{matches:e}=C.useContext(hn),t=e[e.length-1];return t?t.params:{}}function M0(e,t){return F0(e,t)}function F0(e,t,n,r){Ls()||he(!1);let{navigator:o}=C.useContext(Es),{matches:i}=C.useContext(hn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Oo(),d;if(t){var m;let y=typeof t=="string"?qn(t):t;c==="/"||(m=y.pathname)!=null&&m.startsWith(c)||he(!1),d=y}else d=u;let g=d.pathname||"/",_=g;if(c!=="/"){let y=c.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let v=c0(e,{pathname:_}),w=$0(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:Nn([c,o.encodeLocation?o.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Nn([c,o.encodeLocation?o.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n,r);return t&&w?C.createElement(Ns.Provider,{value:{location:xo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Jt.Pop}},w):w}function z0(){let e=K0(),t=I0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,null)}const D0=C.createElement(z0,null);class U0 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(hn.Provider,{value:this.props.routeContext},C.createElement(Xh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q0(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(Kc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(hn.Provider,{value:t},r)}function $0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);d>=0||he(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let m=s[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:g,errors:_}=n,v=m.route.loader&&g[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||v){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,m,g)=>{let _,v=!1,w=null,y=null;n&&(_=a&&m.route.id?a[m.route.id]:void 0,w=m.route.errorElement||D0,c&&(u<0&&g===0?(v=!0,y=null):u===g&&(v=!0,y=m.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,g+1)),f=()=>{let p;return _?p=w:v?p=y:m.route.Component?p=C.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=d,C.createElement(q0,{match:m,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?C.createElement(U0,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Qh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qh||{}),Xi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xi||{});function W0(e){let t=C.useContext(Kc);return t||he(!1),t}function V0(e){let t=C.useContext(R0);return t||he(!1),t}function H0(e){let t=C.useContext(hn);return t||he(!1),t}function Zh(e){let t=H0(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function K0(){var e;let t=C.useContext(Xh),n=V0(Xi.UseRouteError),r=Zh(Xi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function G0(){let{router:e}=W0(Qh.UseNavigateStable),t=Zh(Xi.UseNavigateStable),n=C.useRef(!1);return Jh(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,xo({fromRouteId:t},i)))},[e,t])}function ep(e){return T0(e.context)}function Y(e){he(!1)}function Y0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Jt.Pop,navigator:i,static:s=!1,future:a}=e;Ls()&&he(!1);let c=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:c,navigator:i,static:s,future:xo({v7_relativeSplatPath:!1},a)}),[c,a,i,s]);typeof r=="string"&&(r=qn(r));let{pathname:d="/",search:m="",hash:g="",state:_=null,key:v="default"}=r,w=C.useMemo(()=>{let y=Gh(d,c);return y==null?null:{location:{pathname:y,search:m,hash:g,state:_,key:v},navigationType:o}},[c,d,m,g,_,v,o]);return w==null?null:C.createElement(Es.Provider,{value:u},C.createElement(Ns.Provider,{children:n,value:w}))}function X0(e){let{children:t,location:n}=e;return M0(El(t),n)}new Promise(()=>{});function El(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let i=[...t,o];if(r.type===C.Fragment){n.push.apply(n,El(r.props.children,i));return}r.type!==Y&&he(!1),!r.props.index||!r.props.children||he(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=El(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const J0="6";try{window.__reactRouterVersion=J0}catch{}const Q0="startTransition",Nd=Oa[Q0];function Z0(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=s0({window:o,v5Compat:!0}));let s=i.current,[a,c]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=C.useCallback(m=>{u&&Nd?Nd(()=>c(m)):c(m)},[c,u]);return C.useLayoutEffect(()=>s.listen(d),[s,d]),C.createElement(Y0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var Ld;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ld||(Ld={}));var Id;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Id||(Id={}));var je=function(){return je=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},je.apply(this,arguments)};function So(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Q="-ms-",no="-moz-",W="-webkit-",tp="comm",Is="rule",Gc="decl",ey="@import",np="@keyframes",ty="@layer",rp=Math.abs,Yc=String.fromCharCode,Nl=Object.assign;function ny(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function op(e){return e.trim()}function Et(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function yi(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function _r(e,t,n){return e.slice(t,n)}function wt(e){return e.length}function ip(e){return e.length}function Vr(e,t){return t.push(e),e}function ry(e,t){return e.map(t).join("")}function Pd(e,t){return e.filter(function(n){return!Et(n,t)})}var Ps=1,yr=1,sp=0,it=0,ce=0,jr="";function Rs(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ps,column:yr,length:s,return:"",siblings:a}}function Wt(e,t){return Nl(Rs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vn(e){for(;e.root;)e=Wt(e.root,{children:[e]});Vr(e,e.siblings)}function oy(){return ce}function iy(){return ce=it>0?ge(jr,--it):0,yr--,ce===10&&(yr=1,Ps--),ce}function ht(){return ce=it<sp?ge(jr,it++):0,yr++,ce===10&&(yr=1,Ps++),ce}function Ln(){return ge(jr,it)}function wi(){return it}function Os(e,t){return _r(jr,e,t)}function Ll(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sy(e){return Ps=yr=1,sp=wt(jr=e),it=0,[]}function ay(e){return jr="",e}function ba(e){return op(Os(it-1,Il(e===91?e+2:e===40?e+1:e)))}function ly(e){for(;(ce=Ln())&&ce<33;)ht();return Ll(e)>2||Ll(ce)>3?"":" "}function cy(e,t){for(;--t&&ht()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Os(e,wi()+(t<6&&Ln()==32&&ht()==32))}function Il(e){for(;ht();)switch(ce){case e:return it;case 34:case 39:e!==34&&e!==39&&Il(ce);break;case 40:e===41&&Il(e);break;case 92:ht();break}return it}function uy(e,t){for(;ht()&&e+ce!==57;)if(e+ce===84&&Ln()===47)break;return"/*"+Os(t,it-1)+"*"+Yc(e===47?e:ht())}function dy(e){for(;!Ll(Ln());)ht();return Os(e,it)}function my(e){return ay(bi("",null,null,null,[""],e=sy(e),0,[0],e))}function bi(e,t,n,r,o,i,s,a,c){for(var u=0,d=0,m=s,g=0,_=0,v=0,w=1,y=1,h=1,f=0,p="",b=o,A=i,j=r,x=p;y;)switch(v=f,f=ht()){case 40:if(v!=108&&ge(x,m-1)==58){yi(x+=F(ba(f),"&","&\f"),"&\f",rp(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:x+=ba(f);break;case 9:case 10:case 13:case 32:x+=ly(v);break;case 92:x+=cy(wi()-1,7);continue;case 47:switch(Ln()){case 42:case 47:Vr(fy(uy(ht(),wi()),t,n,c),c);break;default:x+="/"}break;case 123*w:a[u++]=wt(x)*h;case 125*w:case 59:case 0:switch(f){case 0:case 125:y=0;case 59+d:h==-1&&(x=F(x,/\f/g,"")),_>0&&wt(x)-m&&Vr(_>32?Od(x+";",r,n,m-1,c):Od(F(x," ","")+";",r,n,m-2,c),c);break;case 59:x+=";";default:if(Vr(j=Rd(x,t,n,u,d,o,a,p,b=[],A=[],m,i),i),f===123)if(d===0)bi(x,t,j,j,b,i,m,a,A);else switch(g===99&&ge(x,3)===110?100:g){case 100:case 108:case 109:case 115:bi(e,j,j,r&&Vr(Rd(e,j,j,0,0,o,a,p,o,b=[],m,A),A),o,A,m,a,r?b:A);break;default:bi(x,j,j,j,[""],A,0,a,A)}}u=d=_=0,w=h=1,p=x="",m=s;break;case 58:m=1+wt(x),_=v;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&iy()==125)continue}switch(x+=Yc(f),f*w){case 38:h=d>0?1:(x+="\f",-1);break;case 44:a[u++]=(wt(x)-1)*h,h=1;break;case 64:Ln()===45&&(x+=ba(ht())),g=Ln(),d=m=wt(p=x+=dy(wi())),f++;break;case 45:v===45&&wt(x)==2&&(w=0)}}return i}function Rd(e,t,n,r,o,i,s,a,c,u,d,m){for(var g=o-1,_=o===0?i:[""],v=ip(_),w=0,y=0,h=0;w<r;++w)for(var f=0,p=_r(e,g+1,g=rp(y=s[w])),b=e;f<v;++f)(b=op(y>0?_[f]+" "+p:F(p,/&\f/g,_[f])))&&(c[h++]=b);return Rs(e,t,n,o===0?Is:a,c,u,d,m)}function fy(e,t,n,r){return Rs(e,t,n,tp,Yc(oy()),_r(e,2,-2),0,r)}function Od(e,t,n,r,o){return Rs(e,t,n,Gc,_r(e,0,r),_r(e,r+1,-1),r,o)}function ap(e,t,n){switch(ny(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return no+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+no+e+Q+e+e;case 5936:switch(ge(e,t+11)){case 114:return W+e+Q+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Q+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Q+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+Q+e+e;case 6165:return W+e+Q+"flex-"+e+e;case 5187:return W+e+F(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return W+e+Q+"flex-item-"+F(e,/flex-|-self/g,"")+(Et(e,/flex-|baseline/)?"":Q+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return W+e+Q+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+Q+F(e,"shrink","negative")+e;case 5292:return W+e+Q+F(e,"basis","preferred-size")+e;case 6060:return W+"box-"+F(e,"-grow","")+W+e+Q+F(e,"grow","positive")+e;case 4554:return W+F(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!Et(e,/flex-|baseline/))return Q+"grid-column-align"+_r(e,t)+e;break;case 2592:case 3360:return Q+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Et(r.props,/grid-\w+-end/)})?~yi(e+(n=n[t].value),"span",0)?e:Q+F(e,"-start","")+e+Q+"grid-row-span:"+(~yi(n,"span",0)?Et(n,/\d+/):+Et(n,/\d+/)-+Et(e,/\d+/))+";":Q+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Et(r.props,/grid-\w+-start/)})?e:Q+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+no+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yi(e,"stretch",0)?ap(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,c,u){return Q+o+":"+i+u+(s?Q+o+"-span:"+(a?c:+c-+i)+u:"")+e});case 4949:if(ge(e,t+6)===121)return F(e,":",":"+W)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(ge(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Q+"$2box$3")+e;case 100:return F(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Ji(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function hy(e,t,n,r){switch(e.type){case ty:if(e.children.length)break;case ey:case Gc:return e.return=e.return||e.value;case tp:return"";case np:return e.return=e.value+"{"+Ji(e.children,r)+"}";case Is:if(!wt(e.value=e.props.join(",")))return""}return wt(n=Ji(e.children,r))?e.return=e.value+"{"+n+"}":""}function py(e){var t=ip(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function gy(e){return function(t){t.root||(t=t.return)&&e(t)}}function vy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Gc:e.return=ap(e.value,e.length,n);return;case np:return Ji([Wt(e,{value:F(e.value,"@","@"+W)})],r);case Is:if(e.length)return ry(n=e.props,function(o){switch(Et(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vn(Wt(e,{props:[F(o,/:(read-\w+)/,":"+no+"$1")]})),Vn(Wt(e,{props:[o]})),Nl(e,{props:Pd(n,r)});break;case"::placeholder":Vn(Wt(e,{props:[F(o,/:(plac\w+)/,":"+W+"input-$1")]})),Vn(Wt(e,{props:[F(o,/:(plac\w+)/,":"+no+"$1")]})),Vn(Wt(e,{props:[F(o,/:(plac\w+)/,Q+"input-$1")]})),Vn(Wt(e,{props:[o]})),Nl(e,{props:Pd(n,r)});break}return""})}}var _y={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe={},wr=typeof process<"u"&&qe!==void 0&&(qe.REACT_APP_SC_ATTR||qe.SC_ATTR)||"data-styled",lp="active",cp="data-styled-version",Bs="6.1.13",Xc=`/*!sc*/
`,Qi=typeof window<"u"&&"HTMLElement"in window,yy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==""?qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.SC_DISABLE_SPEEDY!==void 0&&qe.SC_DISABLE_SPEEDY!==""&&qe.SC_DISABLE_SPEEDY!=="false"&&qe.SC_DISABLE_SPEEDY),wy={},Ts=Object.freeze([]),br=Object.freeze({});function up(e,t,n){return n===void 0&&(n=br),e.theme!==n.theme&&e.theme||t||n.theme}var dp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),by=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xy=/(^-|-$)/g;function Bd(e){return e.replace(by,"-").replace(xy,"")}var Sy=/(a)(d)/gi,oi=52,Td=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pl(e){var t,n="";for(t=Math.abs(e);t>oi;t=t/oi|0)n=Td(t%oi)+n;return(Td(t%oi)+n).replace(Sy,"$1-$2")}var xa,mp=5381,or=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fp=function(e){return or(mp,e)};function hp(e){return Pl(fp(e)>>>0)}function Ay(e){return e.displayName||e.name||"Component"}function Sa(e){return typeof e=="string"&&!0}var pp=typeof Symbol=="function"&&Symbol.for,gp=pp?Symbol.for("react.memo"):60115,Cy=pp?Symbol.for("react.forward_ref"):60112,ky={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ey=((xa={})[Cy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xa[gp]=vp,xa);function Md(e){return("type"in(t=e)&&t.type.$$typeof)===gp?vp:"$$typeof"in e?Ey[e.$$typeof]:ky;var t}var Ny=Object.defineProperty,Ly=Object.getOwnPropertyNames,Fd=Object.getOwnPropertySymbols,Iy=Object.getOwnPropertyDescriptor,Py=Object.getPrototypeOf,zd=Object.prototype;function _p(e,t,n){if(typeof t!="string"){if(zd){var r=Py(t);r&&r!==zd&&_p(e,r,n)}var o=Ly(t);Fd&&(o=o.concat(Fd(t)));for(var i=Md(e),s=Md(t),a=0;a<o.length;++a){var c=o[a];if(!(c in jy||n&&n[c]||s&&c in s||i&&c in i)){var u=Iy(t,c);try{Ny(e,c,u)}catch{}}}}return e}function xr(e){return typeof e=="function"}function Jc(e){return typeof e=="object"&&"styledComponentId"in e}function Cn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Rl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ao(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ol(e,t,n){if(n===void 0&&(n=!1),!n&&!Ao(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ol(e[r],t[r]);else if(Ao(t))for(var r in t)e[r]=Ol(e[r],t[r]);return e}function Qc(e,t){Object.defineProperty(e,"toString",{value:t})}function Bo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ry=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Bo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Xc);return n},e}(),xi=new Map,Zi=new Map,Si=1,ii=function(e){if(xi.has(e))return xi.get(e);for(;Zi.has(Si);)Si++;var t=Si++;return xi.set(e,t),Zi.set(t,e),t},Oy=function(e,t){Si=t+1,xi.set(e,t),Zi.set(t,e)},By="style[".concat(wr,"][").concat(cp,'="').concat(Bs,'"]'),Ty=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),My=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Fy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Xc),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var c=a.match(Ty);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(Oy(d,u),My(e,d,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Dd=function(e){for(var t=document.querySelectorAll(By),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(wr)!==lp&&(Fy(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function zy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var c=Array.from(a.querySelectorAll("style[".concat(wr,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(wr,lp),r.setAttribute(cp,Bs);var s=zy();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Dy=function(){function e(t){this.element=yp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Bo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Uy=function(){function e(t){this.element=yp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ud=Qi,$y={isServer:!Qi,useCSSOMInjection:!yy},es=function(){function e(t,n,r){t===void 0&&(t=br),n===void 0&&(n={});var o=this;this.options=je(je({},$y),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qi&&Ud&&(Ud=!1,Dd(this)),Qc(this,function(){return function(i){for(var s=i.getTag(),a=s.length,c="",u=function(m){var g=function(h){return Zi.get(h)}(m);if(g===void 0)return"continue";var _=i.names.get(g),v=s.getGroup(m);if(_===void 0||!_.size||v.length===0)return"continue";var w="".concat(wr,".g").concat(m,'[id="').concat(g,'"]'),y="";_!==void 0&&_.forEach(function(h){h.length>0&&(y+="".concat(h,","))}),c+="".concat(v).concat(w,'{content:"').concat(y,'"}').concat(Xc)},d=0;d<a;d++)u(d);return c}(o)})}return e.registerId=function(t){return ii(t)},e.prototype.rehydrate=function(){!this.server&&Qi&&Dd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new qy(o):r?new Dy(o):new Uy(o)}(this.options),new Ry(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ii(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ii(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ii(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wy=/&/g,Vy=/^\s*\/\/.*$/gm;function wp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wp(n.children,t)),n})}function Hy(e){var t,n,r,o=br,i=o.options,s=i===void 0?br:i,a=o.plugins,c=a===void 0?Ts:a,u=function(g,_,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},d=c.slice();d.push(function(g){g.type===Is&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Wy,n).replace(r,u))}),s.prefix&&d.push(vy),d.push(hy);var m=function(g,_,v,w){_===void 0&&(_=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var y=g.replace(Vy,""),h=my(v||_?"".concat(v," ").concat(_," { ").concat(y," }"):y);s.namespace&&(h=wp(h,s.namespace));var f=[];return Ji(h,py(d.concat(gy(function(p){return f.push(p)})))),f};return m.hash=c.length?c.reduce(function(g,_){return _.name||Bo(15),or(g,_.name)},mp).toString():"",m}var Ky=new es,Bl=Hy(),bp=ve.createContext({shouldForwardProp:void 0,styleSheet:Ky,stylis:Bl});bp.Consumer;ve.createContext(void 0);function Tl(){return C.useContext(bp)}var Gy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Bl);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Qc(this,function(){throw Bo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Bl),this.name+t.hash},e}(),Yy=function(e){return e>="A"&&e<="Z"};function qd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Yy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xp=function(e){return e==null||e===!1||e===""},Sp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!xp(i)&&(Array.isArray(i)&&i.isCss||xr(i)?r.push("".concat(qd(o),":"),i,";"):Ao(i)?r.push.apply(r,So(So(["".concat(o," {")],Sp(i),!1),["}"],!1)):r.push("".concat(qd(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _y||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function an(e,t,n,r){if(xp(e))return[];if(Jc(e))return[".".concat(e.styledComponentId)];if(xr(e)){if(!xr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return an(o,t,n,r)}var i;return e instanceof Gy?n?(e.inject(n,r),[e.getName(r)]):[e]:Ao(e)?Sp(e):Array.isArray(e)?Array.prototype.concat.apply(Ts,e.map(function(s){return an(s,t,n,r)})):[e.toString()]}function Ap(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xr(n)&&!Jc(n))return!1}return!0}var Xy=fp(Bs),Jy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ap(t),this.componentId=n,this.baseHash=or(Xy,n),this.baseStyle=r,es.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Cn(o,this.staticRulesId);else{var i=Rl(an(this.rules,t,n,r)),s=Pl(or(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Cn(o,s),this.staticRulesId=s}else{for(var c=or(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")u+=m;else if(m){var g=Rl(an(m,t,n,r));c=or(c,g+d),u+=g}}if(u){var _=Pl(c>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(u,".".concat(_),void 0,this.componentId)),o=Cn(o,_)}}return o},e}(),Zc=ve.createContext(void 0);Zc.Consumer;var Aa={};function Qy(e,t,n){var r=Jc(e),o=e,i=!Sa(e),s=t.attrs,a=s===void 0?Ts:s,c=t.componentId,u=c===void 0?function(b,A){var j=typeof b!="string"?"sc":Bd(b);Aa[j]=(Aa[j]||0)+1;var x="".concat(j,"-").concat(hp(Bs+j+Aa[j]));return A?"".concat(A,"-").concat(x):x}(t.displayName,t.parentComponentId):c,d=t.displayName,m=d===void 0?function(b){return Sa(b)?"styled.".concat(b):"Styled(".concat(Ay(b),")")}(e):d,g=t.displayName&&t.componentId?"".concat(Bd(t.displayName),"-").concat(t.componentId):t.componentId||u,_=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;v=function(b,A){return w(b,A)&&y(b,A)}}else v=w}var h=new Jy(n,g,r?o.componentStyle:void 0);function f(b,A){return function(j,x,k){var R=j.attrs,P=j.componentStyle,ee=j.defaultProps,U=j.foldedComponentIds,q=j.styledComponentId,te=j.target,pn=ve.useContext(Zc),Lr=Tl(),gn=j.shouldForwardProp||Lr.shouldForwardProp,N=up(x,pn,ee)||br,O=function(Dt,Ue,kt){for(var Ir,_n=je(je({},Ue),{className:void 0,theme:kt}),Ks=0;Ks<Dt.length;Ks+=1){var Do=xr(Ir=Dt[Ks])?Ir(_n):Ir;for(var Ut in Do)_n[Ut]=Ut==="className"?Cn(_n[Ut],Do[Ut]):Ut==="style"?je(je({},_n[Ut]),Do[Ut]):Do[Ut]}return Ue.className&&(_n.className=Cn(_n.className,Ue.className)),_n}(R,x,N),T=O.as||te,K={};for(var G in O)O[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&O.theme===N||(G==="forwardedAs"?K.as=O.forwardedAs:gn&&!gn(G,T)||(K[G]=O[G]));var vn=function(Dt,Ue){var kt=Tl(),Ir=Dt.generateAndInjectStyles(Ue,kt.styleSheet,kt.stylis);return Ir}(P,O),st=Cn(U,q);return vn&&(st+=" "+vn),O.className&&(st+=" "+O.className),K[Sa(T)&&!dp.has(T)?"class":"className"]=st,K.ref=k,C.createElement(T,K)}(p,b,A)}f.displayName=m;var p=ve.forwardRef(f);return p.attrs=_,p.componentStyle=h,p.displayName=m,p.shouldForwardProp=v,p.foldedComponentIds=r?Cn(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=g,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(A){for(var j=[],x=1;x<arguments.length;x++)j[x-1]=arguments[x];for(var k=0,R=j;k<R.length;k++)Ol(A,R[k],!0);return A}({},o.defaultProps,b):b}}),Qc(p,function(){return".".concat(p.styledComponentId)}),i&&_p(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function $d(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Wd=function(e){return Object.assign(e,{isCss:!0})};function eu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xr(e)||Ao(e))return Wd(an($d(Ts,So([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?an(r):Wd(an($d(r,t)))}function Ml(e,t,n){if(n===void 0&&(n=br),!t)throw Bo(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,eu.apply(void 0,So([o],i,!1)))};return r.attrs=function(o){return Ml(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Ml(e,t,je(je({},n),o))},r}var Cp=function(e){return Ml(Qy,e)},B=Cp;dp.forEach(function(e){B[e]=Cp(e)});var Zy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ap(t),es.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Rl(an(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&es.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function kp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=eu.apply(void 0,So([e],t,!1)),o="sc-global-".concat(hp(JSON.stringify(r))),i=new Zy(r,o),s=function(c){var u=Tl(),d=ve.useContext(Zc),m=ve.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(m,c,u.styleSheet,d,u.stylis),ve.useLayoutEffect(function(){if(!u.styleSheet.server)return a(m,c,u.styleSheet,d,u.stylis),function(){return i.removeStyles(m,u.styleSheet)}},[m,c,u.styleSheet,d,u.stylis]),null};function a(c,u,d,m,g){if(i.isStatic)i.renderStyles(c,wy,d,g);else{var _=je(je({},u),{theme:up(u,m,s.defaultProps)});i.renderStyles(c,_,d,g)}}return ve.memo(s)}const Ca={mobile:"600px",tablet:"1023px",desktop:"1024px"},V={mobile:`(max-width: ${Ca.mobile})`,tablet:`(max-width: ${Ca.tablet})`,desktop:`(max-width: ${Ca.desktop})`},e1=B.header`
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 999;
    width: 100%;
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
            @media ${V.mobile} {
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
    @media ${V.mobile} {
        box-shadow: #00000050 0px 1px 3px;
        margin-bottom: 1rem;
        .login-menu {
            display: none;
        }
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
`,jp=B.div`
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
`,t1=B.div`
    .content-wrap {
        display: flex;
        width: 100%;
        position: relative;
        .scroll_up {
            position: fixed;
            bottom: 10rem;
            right: 3rem;
            .scroll_up_btn {
                width: 8rem;
                height: 8rem;
                border-radius: 50%;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-image: url('https://github.com/React-Project-Team1/data-center/blob/main/Icon/up.jpg?raw=true');
                background-size: cover;
                cursor: pointer;
                border: none;
            }
        }
    }
    @media ${V.mobile} {
        margin-bottom: 9rem;
    }
`,n1=B.div`
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
`,r1=B.div`
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
`,o1=B.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 10%;
    .not {
        text-align: center;
        font-size: 2rem;
    }
`,i1=B.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    .menu-list {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 2%;
    }
    .btn-item {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;var Ep={exports:{}},Np={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=C;function s1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var a1=typeof Object.is=="function"?Object.is:s1,l1=To.useSyncExternalStore,c1=To.useRef,u1=To.useEffect,d1=To.useMemo,m1=To.useDebugValue;Np.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=c1(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=d1(function(){function c(_){if(!u){if(u=!0,d=_,_=r(_),o!==void 0&&s.hasValue){var v=s.value;if(o(v,_))return m=v}return m=_}if(v=m,a1(d,_))return v;var w=r(_);return o!==void 0&&o(v,w)?v:(d=_,m=w)}var u=!1,d,m,g=n===void 0?null:n;return[function(){return c(t())},g===null?void 0:function(){return c(g())}]},[t,n,r,o]);var a=l1(e,i[0],i[1]);return u1(function(){s.hasValue=!0,s.value=a},[a]),m1(a),a};Ep.exports=Np;var f1=Ep.exports,Ve="default"in Oa?ve:Oa,Vd=Symbol.for("react-redux-context"),Hd=typeof globalThis<"u"?globalThis:{};function h1(){if(!Ve.createContext)return{};const e=Hd[Vd]??(Hd[Vd]=new Map);let t=e.get(Ve.createContext);return t||(t=Ve.createContext(null),e.set(Ve.createContext,t)),t}var un=h1(),p1=()=>{throw new Error("uSES not initialized!")};function tu(e=un){return function(){return Ve.useContext(e)}}var Lp=tu(),Ip=p1,g1=e=>{Ip=e},v1=(e,t)=>e===t;function _1(e=un){const t=e===un?Lp:tu(e),n=(r,o={})=>{const{equalityFn:i=v1,devModeChecks:s={}}=typeof o=="function"?{equalityFn:o}:o,{store:a,subscription:c,getServerState:u,stabilityCheck:d,identityFunctionCheck:m}=t();Ve.useRef(!0);const g=Ve.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,s.stabilityCheck]),_=Ip(c.addNestedSub,a.getState,u||a.getState,g,i);return Ve.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var I=_1();function y1(e){e()}function w1(){let e=null,t=null;return{clear(){e=null,t=null},notify(){y1(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!r||e===null||(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Kd={notify(){},get:()=>[]};function b1(e,t){let n,r=Kd,o=0,i=!1;function s(w){d();const y=r.subscribe(w);let h=!1;return()=>{h||(h=!0,y(),m())}}function a(){r.notify()}function c(){v.onStateChange&&v.onStateChange()}function u(){return i}function d(){o++,n||(n=e.subscribe(c),r=w1())}function m(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=Kd)}function g(){i||(i=!0,d())}function _(){i&&(i=!1,m())}const v={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:c,isSubscribed:u,trySubscribe:g,tryUnsubscribe:_,getListeners:()=>r};return v}var x1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S1=typeof navigator<"u"&&navigator.product==="ReactNative",A1=x1||S1?Ve.useLayoutEffect:Ve.useEffect;function C1({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",identityFunctionCheck:i="once"}){const s=Ve.useMemo(()=>{const u=b1(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,identityFunctionCheck:i}},[e,r,o,i]),a=Ve.useMemo(()=>e.getState(),[e]);A1(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const c=t||un;return Ve.createElement(c.Provider,{value:s},n)}var k1=C1;function Pp(e=un){const t=e===un?Lp:tu(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var j1=Pp();function E1(e=un){const t=e===un?j1:Pp(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var se=E1();g1(f1.useSyncExternalStoreWithSelector);function we(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var N1=typeof Symbol=="function"&&Symbol.observable||"@@observable",Gd=N1,ka=()=>Math.random().toString(36).substring(7).split("").join("."),L1={INIT:`@@redux/INIT${ka()}`,REPLACE:`@@redux/REPLACE${ka()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ka()}`},ts=L1;function nu(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Rp(e,t,n){if(typeof e!="function")throw new Error(we(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(we(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(we(1));return n(Rp)(e,t)}let r=e,o=t,i=new Map,s=i,a=0,c=!1;function u(){s===i&&(s=new Map,i.forEach((y,h)=>{s.set(h,y)}))}function d(){if(c)throw new Error(we(3));return o}function m(y){if(typeof y!="function")throw new Error(we(4));if(c)throw new Error(we(5));let h=!0;u();const f=a++;return s.set(f,y),function(){if(h){if(c)throw new Error(we(6));h=!1,u(),s.delete(f),i=null}}}function g(y){if(!nu(y))throw new Error(we(7));if(typeof y.type>"u")throw new Error(we(8));if(typeof y.type!="string")throw new Error(we(17));if(c)throw new Error(we(9));try{c=!0,o=r(o,y)}finally{c=!1}return(i=s).forEach(f=>{f()}),y}function _(y){if(typeof y!="function")throw new Error(we(10));r=y,g({type:ts.REPLACE})}function v(){const y=m;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(we(11));function f(){const b=h;b.next&&b.next(d())}return f(),{unsubscribe:y(f)}},[Gd](){return this}}}return g({type:ts.INIT}),{dispatch:g,subscribe:m,getState:d,replaceReducer:_,[Gd]:v}}function I1(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:ts.INIT})>"u")throw new Error(we(12));if(typeof n(void 0,{type:ts.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(we(13))})}function P1(e){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const s=t[i];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let o;try{I1(n)}catch(i){o=i}return function(s={},a){if(o)throw o;let c=!1;const u={};for(let d=0;d<r.length;d++){const m=r[d],g=n[m],_=s[m],v=g(_,a);if(typeof v>"u")throw a&&a.type,new Error(we(14));u[m]=v,c=c||v!==_}return c=c||r.length!==Object.keys(s).length,c?u:s}}function ns(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function R1(...e){return t=>(n,r)=>{const o=t(n,r);let i=()=>{throw new Error(we(15))};const s={getState:o.getState,dispatch:(c,...u)=>i(c,...u)},a=e.map(c=>c(s));return i=ns(...a)(o.dispatch),{...o,dispatch:i}}}function O1(e){return nu(e)&&"type"in e&&typeof e.type=="string"}var Op=Symbol.for("immer-nothing"),Yd=Symbol.for("immer-draftable"),Ye=Symbol.for("immer-state");function dt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Sr=Object.getPrototypeOf;function Mn(e){return!!e&&!!e[Ye]}function Mt(e){var t;return e?Bp(e)||Array.isArray(e)||!!e[Yd]||!!((t=e.constructor)!=null&&t[Yd])||Fs(e)||zs(e):!1}var B1=Object.prototype.constructor.toString();function Bp(e){if(!e||typeof e!="object")return!1;const t=Sr(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===B1}function rs(e,t){Ms(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Ms(e){const t=e[Ye];return t?t.type_:Array.isArray(e)?1:Fs(e)?2:zs(e)?3:0}function Fl(e,t){return Ms(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Tp(e,t,n){const r=Ms(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function T1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Fs(e){return e instanceof Map}function zs(e){return e instanceof Set}function bn(e){return e.copy_||e.base_}function zl(e,t){if(Fs(e))return new Map(e);if(zs(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Bp(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[Ye];let o=Reflect.ownKeys(r);for(let i=0;i<o.length;i++){const s=o[i],a=r[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[s]})}return Object.create(Sr(e),r)}else{const r=Sr(e);if(r!==null&&n)return{...e};const o=Object.create(r);return Object.assign(o,e)}}function ru(e,t=!1){return Ds(e)||Mn(e)||!Mt(e)||(Ms(e)>1&&(e.set=e.add=e.clear=e.delete=M1),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>ru(r,!0))),e}function M1(){dt(2)}function Ds(e){return Object.isFrozen(e)}var F1={};function Fn(e){const t=F1[e];return t||dt(0,e),t}var Co;function Mp(){return Co}function z1(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Xd(e,t){t&&(Fn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Dl(e){Ul(e),e.drafts_.forEach(D1),e.drafts_=null}function Ul(e){e===Co&&(Co=e.parent_)}function Jd(e){return Co=z1(Co,e)}function D1(e){const t=e[Ye];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Qd(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Ye].modified_&&(Dl(t),dt(4)),Mt(e)&&(e=os(t,e),t.parent_||is(t,e)),t.patches_&&Fn("Patches").generateReplacementPatches_(n[Ye].base_,e,t.patches_,t.inversePatches_)):e=os(t,n,[]),Dl(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Op?e:void 0}function os(e,t,n){if(Ds(t))return t;const r=t[Ye];if(!r)return rs(t,(o,i)=>Zd(e,r,t,o,i,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return is(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let i=o,s=!1;r.type_===3&&(i=new Set(o),o.clear(),s=!0),rs(i,(a,c)=>Zd(e,r,o,a,c,n,s)),is(e,o,!1),n&&e.patches_&&Fn("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Zd(e,t,n,r,o,i,s){if(Mn(o)){const a=i&&t&&t.type_!==3&&!Fl(t.assigned_,r)?i.concat(r):void 0,c=os(e,o,a);if(Tp(n,r,c),Mn(c))e.canAutoFreeze_=!1;else return}else s&&n.add(o);if(Mt(o)&&!Ds(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;os(e,o),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&is(e,o)}}function is(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ru(t,n)}function U1(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Mp(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=ou;n&&(o=[r],i=ko);const{revoke:s,proxy:a}=Proxy.revocable(o,i);return r.draft_=a,r.revoke_=s,a}var ou={get(e,t){if(t===Ye)return e;const n=bn(e);if(!Fl(n,t))return q1(e,n,t);const r=n[t];return e.finalized_||!Mt(r)?r:r===ja(e.base_,t)?(Ea(e),e.copy_[t]=$l(r,e)):r},has(e,t){return t in bn(e)},ownKeys(e){return Reflect.ownKeys(bn(e))},set(e,t,n){const r=Fp(bn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const o=ja(bn(e),t),i=o==null?void 0:o[Ye];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(T1(n,o)&&(n!==void 0||Fl(e.base_,t)))return!0;Ea(e),ql(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return ja(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Ea(e),ql(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=bn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){dt(11)},getPrototypeOf(e){return Sr(e.base_)},setPrototypeOf(){dt(12)}},ko={};rs(ou,(e,t)=>{ko[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});ko.deleteProperty=function(e,t){return ko.set.call(this,e,t,void 0)};ko.set=function(e,t,n){return ou.set.call(this,e[0],t,n,e[0])};function ja(e,t){const n=e[Ye];return(n?bn(n):e)[t]}function q1(e,t,n){var o;const r=Fp(t,n);return r?"value"in r?r.value:(o=r.get)==null?void 0:o.call(e.draft_):void 0}function Fp(e,t){if(!(t in e))return;let n=Sr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Sr(n)}}function ql(e){e.modified_||(e.modified_=!0,e.parent_&&ql(e.parent_))}function Ea(e){e.copy_||(e.copy_=zl(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var $1=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const i=n;n=t;const s=this;return function(c=i,...u){return s.produce(c,d=>n.call(this,d,...u))}}typeof n!="function"&&dt(6),r!==void 0&&typeof r!="function"&&dt(7);let o;if(Mt(t)){const i=Jd(this),s=$l(t,void 0);let a=!0;try{o=n(s),a=!1}finally{a?Dl(i):Ul(i)}return Xd(i,r),Qd(o,i)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===Op&&(o=void 0),this.autoFreeze_&&ru(o,!0),r){const i=[],s=[];Fn("Patches").generateReplacementPatches_(t,o,i,s),r(i,s)}return o}else dt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,c=>t(c,...a));let r,o;return[this.produce(t,n,(s,a)=>{r=s,o=a}),r,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Mt(e)||dt(8),Mn(e)&&(e=W1(e));const t=Jd(this),n=$l(e,void 0);return n[Ye].isManual_=!0,Ul(t),n}finishDraft(e,t){const n=e&&e[Ye];(!n||!n.isManual_)&&dt(9);const{scope_:r}=n;return Xd(r,t),Qd(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const r=Fn("Patches").applyPatches_;return Mn(e)?r(e,t):this.produce(e,o=>r(o,t))}};function $l(e,t){const n=Fs(e)?Fn("MapSet").proxyMap_(e,t):zs(e)?Fn("MapSet").proxySet_(e,t):U1(e,t);return(t?t.scope_:Mp()).drafts_.push(n),n}function W1(e){return Mn(e)||dt(10,e),zp(e)}function zp(e){if(!Mt(e)||Ds(e))return e;const t=e[Ye];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=zl(e,t.scope_.immer_.useStrictShallowCopy_)}else n=zl(e,!0);return rs(n,(r,o)=>{Tp(n,r,zp(o))}),t&&(t.finalized_=!1),n}var Xe=new $1,Dp=Xe.produce;Xe.produceWithPatches.bind(Xe);Xe.setAutoFreeze.bind(Xe);Xe.setUseStrictShallowCopy.bind(Xe);Xe.applyPatches.bind(Xe);Xe.createDraft.bind(Xe);Xe.finishDraft.bind(Xe);function Up(e){return({dispatch:n,getState:r})=>o=>i=>typeof i=="function"?i(n,r,e):o(i)}var V1=Up(),H1=Up,K1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ns:ns.apply(null,arguments)};function em(e,t){function n(...r){if(t){let o=t(...r);if(!o)throw new Error(At(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>O1(r)&&r.type===e,n}var qp=class Hr extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Hr.prototype)}static get[Symbol.species](){return Hr}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Hr(...t[0].concat(this)):new Hr(...t.concat(this))}};function tm(e){return Mt(e)?Dp(e,()=>{}):e}function nm(e,t,n){if(e.has(t)){let o=e.get(t);return n.update&&(o=n.update(o,t,e),e.set(t,o)),o}if(!n.insert)throw new Error(At(10));const r=n.insert(t,e);return e.set(t,r),r}function G1(e){return typeof e=="boolean"}var Y1=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{};let s=new qp;return n&&(G1(n)?s.push(V1):s.push(H1(n.extraArgument))),s},X1="RTK_autoBatch",$p=e=>t=>{setTimeout(t,e)},J1=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:$p(10),Q1=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let o=!0,i=!1,s=!1;const a=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?J1:e.type==="callback"?e.queueNotification:$p(e.timeout),u=()=>{s=!1,i&&(i=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const m=()=>o&&d(),g=r.subscribe(m);return a.add(d),()=>{g(),a.delete(d)}},dispatch(d){var m;try{return o=!((m=d==null?void 0:d.meta)!=null&&m[X1]),i=!o,i&&(s||(s=!0,c(u))),r.dispatch(d)}finally{o=!0}}})},Z1=e=>function(n){const{autoBatch:r=!0}=n??{};let o=new qp(e);return r&&o.push(Q1(typeof r=="object"?r:void 0)),o};function ew(e){const t=Y1(),{reducer:n=void 0,middleware:r,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(nu(n))a=P1(n);else throw new Error(At(1));let c;typeof r=="function"?c=r(t):c=t();let u=ns;o&&(u=K1({trace:!1,...typeof o=="object"&&o}));const d=R1(...c),m=Z1(d);let g=typeof s=="function"?s(m):m();const _=u(...g);return Rp(a,i,_)}function Wp(e){const t={},n=[];let r;const o={addCase(i,s){const a=typeof i=="string"?i:i.type;if(!a)throw new Error(At(28));if(a in t)throw new Error(At(29));return t[a]=s,o},addMatcher(i,s){return n.push({matcher:i,reducer:s}),o},addDefaultCase(i){return r=i,o}};return e(o),[t,n,r]}function tw(e){return typeof e=="function"}function nw(e,t){let[n,r,o]=Wp(t),i;if(tw(e))i=()=>tm(e());else{const a=tm(e);i=()=>a}function s(a=i(),c){let u=[n[c.type],...r.filter(({matcher:d})=>d(c)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[o]),u.reduce((d,m)=>{if(m)if(Mn(d)){const _=m(d,c);return _===void 0?d:_}else{if(Mt(d))return Dp(d,g=>m(g,c));{const g=m(d,c);if(g===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return d},a)}return s.getInitialState=i,s}var rw=Symbol.for("rtk-slice-createasyncthunk");function ow(e,t){return`${e}/${t}`}function iw({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[rw];return function(o){const{name:i,reducerPath:s=i}=o;if(!i)throw new Error(At(11));typeof process<"u";const a=(typeof o.reducers=="function"?o.reducers(aw()):o.reducers)||{},c=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(p,b){const A=typeof p=="string"?p:p.type;if(!A)throw new Error(At(12));if(A in u.sliceCaseReducersByType)throw new Error(At(13));return u.sliceCaseReducersByType[A]=b,d},addMatcher(p,b){return u.sliceMatchers.push({matcher:p,reducer:b}),d},exposeAction(p,b){return u.actionCreators[p]=b,d},exposeCaseReducer(p,b){return u.sliceCaseReducersByName[p]=b,d}};c.forEach(p=>{const b=a[p],A={reducerName:p,type:ow(i,p),createNotation:typeof o.reducers=="function"};cw(b)?dw(A,b,d,t):lw(A,b,d)});function m(){const[p={},b=[],A=void 0]=typeof o.extraReducers=="function"?Wp(o.extraReducers):[o.extraReducers],j={...p,...u.sliceCaseReducersByType};return nw(o.initialState,x=>{for(let k in j)x.addCase(k,j[k]);for(let k of u.sliceMatchers)x.addMatcher(k.matcher,k.reducer);for(let k of b)x.addMatcher(k.matcher,k.reducer);A&&x.addDefaultCase(A)})}const g=p=>p,_=new Map;let v;function w(p,b){return v||(v=m()),v(p,b)}function y(){return v||(v=m()),v.getInitialState()}function h(p,b=!1){function A(x){let k=x[p];return typeof k>"u"&&b&&(k=y()),k}function j(x=g){const k=nm(_,b,{insert:()=>new WeakMap});return nm(k,x,{insert:()=>{const R={};for(const[P,ee]of Object.entries(o.selectors??{}))R[P]=sw(ee,x,y,b);return R}})}return{reducerPath:p,getSelectors:j,get selectors(){return j(A)},selectSlice:A}}const f={name:i,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:y,...h(s),injectInto(p,{reducerPath:b,...A}={}){const j=b??s;return p.inject({reducerPath:j,reducer:w},A),{...f,...h(j,!0)}}};return f}}function sw(e,t,n,r){function o(i,...s){let a=t(i);return typeof a>"u"&&r&&(a=n()),e(a,...s)}return o.unwrapped=e,o}var Mo=iw();function aw(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function lw({type:e,reducerName:t,createNotation:n},r,o){let i,s;if("reducer"in r){if(n&&!uw(r))throw new Error(At(17));i=r.reducer,s=r.prepare}else i=r;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?em(e,s):em(e))}function cw(e){return e._reducerDefinitionType==="asyncThunk"}function uw(e){return e._reducerDefinitionType==="reducerWithPrepare"}function dw({type:e,reducerName:t},n,r,o){if(!o)throw new Error(At(18));const{payloadCreator:i,fulfilled:s,pending:a,rejected:c,settled:u,options:d}=n,m=o(e,i,d);r.exposeAction(t,m),s&&r.addCase(m.fulfilled,s),a&&r.addCase(m.pending,a),c&&r.addCase(m.rejected,c),u&&r.addMatcher(m.settled,u),r.exposeCaseReducer(t,{fulfilled:s||si,pending:a||si,rejected:c||si,settled:u||si})}function si(){}function At(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const mw={isSideMenu:!0},Vp=Mo({name:"headerSlice",initialState:mw,reducers:{SideMenuChange(e){e.isSideMenu=!e.isSideMenu}}}),{SideMenuChange:iu}=Vp.actions,fw=Vp.reducer,hw=()=>{const e=se(),t=()=>{e(iu())};return l.jsx("div",{className:"all-menu pc",onClick:t,children:l.jsx("div",{className:"icon",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/All_menu.svg",alt:"menu"})})})},pw=()=>{const e=$(),[t,n]=C.useState(!0);return C.useEffect(()=>{setTimeout(()=>{n(!1)},12e3)},[]),l.jsx(l.Fragment,{children:t?l.jsx("div",{className:"logo-gif",onClick:()=>e("/"),children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/refs/heads/main/Icon/YouTube_logo.webp",alt:"Youtube"})}):l.jsx("div",{className:"logo",onClick:()=>e("/"),children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_logo.svg",alt:"Youtube"})})})},gw=[{user_id:798311,user_name:"진돗개 이레",user_age:20,user_tel:"010-5305-9524",user_email:"jindoEre@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[660495]},{user_id:660495,user_name:"쇼핑맘",user_age:29,user_tel:"010-0652-9305",user_email:"shoppingMom@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[798311]},{user_id:201864,user_name:"mamu마므",user_age:20,user_tel:"010-4505-9420",user_email:"mamu_vlog@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[904206]},{user_id:904206,user_name:"무찌",user_age:35,user_tel:"010-0654-7051",user_email:"moozzi@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[201864]},{user_id:806540,user_name:"아가리어터",user_age:27,user_tel:"010-5305-9524",user_email:"Or7r2l@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[56165156]},{user_id:56165156,user_name:"radiohead",user_age:20,user_tel:"010-1234-1234",user_email:"radiohead@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[806540]},{user_id:6546654,user_name:"ultraTasteDiary",user_age:30,user_tel:"010-3481-1745",user_email:"ultraTasteDiary@naver.com",user_password:"8761",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[96745102]},{user_id:96745102,user_name:"suede",user_age:27,user_tel:"010-4912-9012",user_email:"suede@naver.com",user_password:"1568",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[41846541]},{user_id:41846541,user_name:"woowakgood",user_age:35,user_tel:"010-4975-6179",user_email:"woowakgood@naver.com",user_password:"3715",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:81372931,user_name:"goodboykris",user_age:26,user_tel:"010-1546-4891",user_email:"goodboykris@naver.com",user_password:"8154",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:741852,user_name:"KBS_Joy",user_age:34,user_tel:"010-1234-1234",user_email:"KBS_Joy@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:458963,user_name:"LIJULIKE",user_age:25,user_tel:"010-5647-7894",user_email:"LIJULIKE@naver.com",user_password:"2222",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:641322,user_name:"Highfiction",user_age:21,user_tel:"010-5648-0057",user_email:"Highfiction@naver.com",user_password:"3333",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:984562,user_name:"Beginagain",user_age:34,user_tel:"010-7489-5587",user_email:"Beginagain@naver.com",user_password:"4444",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:859641,user_name:"G_Movie",user_age:37,user_tel:"010-1122-3344",user_email:"G_Movie@naver.com",user_password:"5555",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:452454,user_name:"workman",user_age:30,user_tel:"010-1546-4780",user_email:"workman@naver.com",user_password:"1234",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:775460,user_name:"sbs_dali",user_age:30,user_tel:"010-1226-4905",user_email:"sbs_dali@naver.com",user_password:"1434",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:125424,user_name:"ootbstudio",user_age:38,user_tel:"010-1226-4905",user_email:"ootbstudio@naver.com",user_password:"8834",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:2250024,user_name:"SBSKPOP",user_age:25,user_tel:"010-4872-1655",user_email:"SBSKPOP@naver.com",user_password:"8204",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:2215544,user_name:"SBSANIMAL",user_age:33,user_tel:"010-3264-2585",user_email:"SBSANIMAL@naver.com",user_password:"1212",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]}],vw={LoginUser:JSON.parse(localStorage.getItem("YoutubeLoginUser"))||gw,isLoginUser:JSON.parse(localStorage.getItem("YoutubeIsLoginUser"))||{},isAuth:JSON.parse(localStorage.getItem("YoutubeIsAuth"))||!1},Hp=Mo({name:"authSlice",initialState:vw,reducers:{UserLogin(e,t){const{user_email:n,user_password:r}=t.payload,o=e.LoginUser.find(i=>i.user_email===n&&i.user_password===r);o?(e.isAuth=!0,e.isLoginUser=o,localStorage.setItem("YoutubeIsAuth",JSON.stringify(!0)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(o))):(e.isAuth=!1,e.isLoginUser={},localStorage.removeItem("YoutubeIsAuth"),localStorage.removeItem("YoutubeIsLoginUser"))},UserLogout(e){e.isAuth=!1,e.isLoginUser=null,localStorage.removeItem("YoutubeIsAuth"),localStorage.removeItem("YoutubeIsLoginUser")},AddNewUser(e,t){if(t.payload.ip){const n=e.LoginUser.find(r=>r.user_id===t.payload.ip);if(n)e.isLoginUser=n;else{const r={user_id:t.payload.ip,user_search_list:[],Viewing_Record:[]};e.LoginUser.push(r),e.isLoginUser=r}}else{const n={user_id:Math.floor(Math.random()*1e6),...t.payload,user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]};e.LoginUser.push(n),e.isLoginUser=n,e.isAuth=!0}localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)),localStorage.setItem("YoutubeIsAuth",JSON.stringify(e.isAuth)),localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser))},IsAddList(e,t){const{user_id:n,type:r,movie:o}=t.payload,i=e.LoginUser.find(s=>s.user_id===n);if(i&&i[r]){const s=i[r].findIndex(a=>a.movie_id===o.movie_id);s!==-1&&i[r].splice(s,1),i[r].push(o),i[r].sort((a,c)=>new Date(c.movie_date.year,c.movie_date.month-1,c.movie_date.day)-new Date(a.movie_date.year,a.movie_date.month-1,a.movie_date.day)),e.isLoginUser=i}localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},IsDelList(e,t){const{user_id:n,type:r,movie:o}=t.payload,i=e.LoginUser.find(s=>s.user_id===n);i&&(i[r]=i[r].filter(s=>s.movie_id!==o.movie_id)),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},AllDelList(e,t){const{user_id:n,type:r}=t.payload,o=e.LoginUser.find(i=>i.user_id===n);o&&(o[r]=[]),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},AddNewSearchList(e,t){const{user_id:n,search:r}=t.payload,o=e.LoginUser.find(i=>i.user_id===n);if(o&&!o.user_search_list.some(s=>s.search===r)){const s={search_id:Math.floor(Math.random()*1e6),search:r};o.user_search_list.unshift(s),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))}},DelSearchList(e,t){const{user_id:n,search:r}=t.payload,o=e.LoginUser.find(i=>i.user_id===n);o&&(o.user_search_list=o.user_search_list.filter(i=>i.search!==r),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)))},AddNewSubscription(e,t){var i;const{user_id:n,channel_id:r}=t.payload,o=e.LoginUser.find(s=>s.user_id===n);o&&((i=o.Subscription_Id)!=null&&i.includes(r)||o.Subscription_Id.push(r),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)))},DelSubscription(e,t){const{user_id:n,channel_id:r}=t.payload,o=e.LoginUser.find(i=>i.user_id===n);o.Subscription_Id=o.Subscription_Id.filter(i=>i!==r),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))}}}),{UserLogin:Kp,UserLogout:Gp,AddNewUser:Yp,IsAddList:su,AllDelList:_w,IsDelList:au,AddNewSearchList:yw,DelSearchList:ww,AddNewSubscription:bw,DelSubscription:xw}=Hp.actions,Sw=Hp.reducer,Aw=({setIsShown:e,isShown:t,search:n,setSearch:r})=>{const o=$(),i=se(),s=I(c=>c.auth.isLoginUser),a=c=>{c.preventDefault(),n&&(i(yw({user_id:s.user_id,search:n})),o(`/movies/${n}`),r(""))};return l.jsxs("form",{onSubmit:a,className:"search-box",onClick:()=>e(!t),children:[l.jsx("input",{type:"text",name:"search",id:"search",placeholder:"검색",value:n,onChange:c=>{r(c.target.value)}}),l.jsx("button",{type:"submit",className:"search-btn",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg",alt:"search"})})]})},Cw=B.div`
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
    @media ${V.mobile} {
        min-width: 10rem;
    }
`,kw=B.ul`
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
`,jw={isSavePop:!1,popMsg:null},Xp=Mo({name:"savepopSlice",initialState:jw,reducers:{isSavePopTrue(e,t){e.isSavePop=!0,e.popMsg=t.payload},isSavePopFalse(e){e.isSavePop=!1,e.popMsg=null}}}),{isSavePopTrue:gt,isSavePopFalse:Ew}=Xp.actions,Nw=Xp.reducer,Lw=()=>{const{isAuth:e,isLoginUser:t}=I(i=>i.auth),n=$(),r=se(),o=i=>{e&&(i==="logout"?(r(Gp()),n("/"),r(gt(`${t.user_name}님 로그아웃`))):i==="studio"?n(`/studio/${t.user_id}/dashboard`):alert("error"))};if(e&&t)return l.jsxs(kw,{children:[l.jsxs("li",{onClick:()=>o("logout"),className:"log-out",children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/logout.svg",alt:"logout"}),"로그아웃"]}),l.jsxs("li",{onClick:()=>o("studio"),className:"studio",children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/119e28bfa00f6df905130034043fd7183cdfc9f3/Icon/YouTube_studio.svg",alt:"studio"}),"Youtube 스튜디오"]})]})},$n=e=>{const t=C.useRef(null),n=r=>{t.current&&!t.current.contains(r.target)&&e()};return C.useEffect(()=>(document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}),[]),t},Iw=()=>{var o;const{isLoginUser:e}=I(i=>i.auth),[t,n]=C.useState(!1),r=$n(()=>n(!1));return l.jsxs("div",{className:"user-menu pc",children:[l.jsx("a",{href:"#",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Making_video.svg",alt:"MakingVideo"})}),l.jsx("a",{href:"#",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Notification.svg",alt:"Notification"})}),l.jsx("a",{href:"#",onClick:()=>n(!t),ref:r,children:l.jsxs("span",{className:"user-profile",children:[(o=e==null?void 0:e.user_name)==null?void 0:o.charAt(0),t&&l.jsx(Lw,{})]})})]})},lu=()=>{const e=$();return l.jsxs(Cw,{className:"login-menu",onClick:()=>e("/login"),children:[l.jsx("div",{className:"account-wrap ",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/Account.svg",alt:"Account"})}),l.jsx("p",{className:"login-btn",children:"로그인"})]})},Pw=({isShown:e,setSearch:t,setIsShown:n})=>{const r=$(),o=se(),i=I(u=>u.auth.isLoginUser),s=(i==null?void 0:i.user_search_list)||[],a=u=>{t(u),n(!0),r(`/movies/${u}`)},c=u=>{o(ww({user_id:i.user_id,search:u}))};return s.length>0&&!e&&l.jsx("ul",{className:"search-history",children:s.map(u=>l.jsxs("li",{className:"search-item",onClick:()=>a(u.search),children:[l.jsxs("p",{className:"search-keyword",children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg",alt:"search"}),u.search]}),l.jsx("button",{className:"history-btn",onClick:d=>{d.stopPropagation(),c(u.search)},children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Close_Btn.svg",alt:"close-btn",className:"close-btn"})})]},u.search_id))})},Jp=()=>{const{isAuth:e}=I(a=>a.auth),[t,n]=C.useState(!0),[r,o]=C.useState(""),{Search:i}=Ct(),s=$n(()=>n(!0));return l.jsx(e1,{id:"header",ref:s,children:l.jsxs("div",{className:"top",children:[l.jsxs("div",{className:"first-box",children:[l.jsx(hw,{}),l.jsx(pw,{})]}),l.jsx(Aw,{isShown:t,setIsShown:n,search:r,setSearch:o}),l.jsx(Pw,{Search:i,isShown:t,setSearch:o,setIsShown:n}),e?l.jsx(Iw,{}):l.jsx(lu,{})]})})},ss={Home:[{id:1029844,name:"홈",type:"Home",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Home_menu.svg"},{id:74589232,name:"Shorts",type:"Shorts",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Shorts_menu.svg"},{id:46089394,name:"구독",type:"Subscription",nav:"/subscription",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Subscription_menu.svg"},{id:480234704,name:"YouTube Music",type:"Music",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_Music_menu.svg"}],MyPage:[{id:35329104,name:"시청 기록",type:"Viewing_Record",nav:"/feed/Viewing_Record",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/viewing_record.svg"},{id:3290384132,name:"재생 목록",type:"Playlist",nav:"/feed/Playlist",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Play_list.svg"},{id:4390684386,name:"내 동영상",type:"MyVideo",nav:"/dashboard",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/My_video.svg"},{id:56905630,name:"나중에 볼 동영상",type:"Later_Watch",nav:"/feed/Later_Watch",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/later_on.svg"},{id:3249320423,name:"좋아요 표시한 동영상",type:"like_Movie_List",nav:"/feed/like_Movie_List",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Like_list.svg"},{id:896773,name:"오프라인 저장 동영상",type:"Download_List",nav:"/feed/Download_List",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Download.svg"}],SearchCategory:[{id:2252043583,name:"인기 급상승",type:"popularity",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/popularity.svg"},{id:43968339,name:"쇼핑",type:"shopping",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Shopping.svg"},{id:54907840,name:"음악",type:"music",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Music.svg"},{id:5604365436,name:"영화",type:"movies",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Movies.svg"},{id:592122126,name:"실시간",type:"realtime",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Real-time.svg"},{id:3683823,name:"게임",type:"game",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Game.svg"},{id:694684594,name:"스포츠",type:"Sports",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Sports.svg"},{id:89065962,name:"학습 프로그램",type:"learningprogram",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/learning_program.svg"},{id:8054963,name:"팟캐스트",type:"podcasts",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Podcasts.svg"}]},jo=({id:e,name:t,type:n,nav:r,icon:o})=>{const i=$(),{isLoginUser:s}=I(c=>c.auth),a=()=>{i(n==="MyVideo"||n==="Dashboard"||n==="Content"||n==="Comment"||n==="VideoUpload"?`/studio/${s.user_id}${r}`:r)};return l.jsxs("li",{onClick:a,children:[l.jsx("img",{src:o,alt:n}),l.jsx("span",{className:"name",children:t})]})},Rw=()=>l.jsx("ul",{children:ss.Home.map(e=>l.jsx(jo,{...e},e.id))}),Ow=()=>{const{isAuth:e}=I(t=>t.auth);return l.jsxs("ul",{children:[l.jsxs("p",{className:"menu-title",children:["내 페이지"," ",l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Right.svg",alt:"right"})]}),e?ss.MyPage.map(t=>l.jsx(jo,{...t},t.id)):ss.MyPage.filter(t=>t.type!=="Download_List"&&t.type!=="like_Movie_List"&&t.type!=="Playlist"&&t.type!=="Later_Watch").map(t=>l.jsx(jo,{...t},t.id))]})},Bw=()=>l.jsxs("ul",{children:[l.jsx("p",{className:"menu-title",children:"탐색"}),ss.SearchCategory.map(e=>l.jsx(jo,{...e},e.id))]}),Tw=()=>{const{Channel:e}=I(i=>i.channel),{isAuth:t,isLoginUser:n}=I(i=>i.auth),r=$(),o=Object.values(e).filter(i=>{var s;return(s=n==null?void 0:n.Subscription_Id)==null?void 0:s.includes(i.channel_id)});return l.jsxs("ul",{className:"subscription-wrap",children:[l.jsx("p",{className:"menu-title",children:"구독"}),t?o.map(i=>l.jsxs("li",{className:"thisChannel-item",onClick:()=>{var s;return r(`/channel/${((s=i.Movies[0])==null?void 0:s.movie_channel)||i.channel_nav}`)},children:[l.jsx("img",{src:i.channel_image,alt:i.channel_name}),l.jsx("span",{className:"name",children:i.channel_name})]},i.channel_id)):l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"not-login-span",children:"로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다."}),l.jsx(lu,{})]})]})},Mw=()=>l.jsxs(jp,{className:"pc",children:[l.jsx(Rw,{}),l.jsx(Ow,{}),l.jsx(Tw,{}),l.jsx(Bw,{}),l.jsx("ul",{children:l.jsx("p",{className:"footer",children:"© 2024 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다."})})]}),Fw=B.ul`
    padding: 1rem 0;
    position: absolute;
    top: 3rem;
    right: -400%;
    z-index: 500;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    width: 100%;
    min-width: 22rem;
    overflow: hidden;
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
    /* 11/12 김혜림 전체 추가 */
    @media ${V.mobile} {
        width: 24rem;
        .save-item {
            font-size: 1.5rem;
            img {
                width: 3rem;
            }
        }
    }
`,zw=B.div`
    border: 1px solid #000;
    position: fixed;
    bottom: 5rem;
    left: ${e=>e.left};
    padding: 1rem 1.6rem;
    border-radius: 1rem;
    background: #000;
    color: #fff;
`,Dw=({left:e})=>{const{popMsg:t}=I(n=>n.savepop);return l.jsx(zw,{left:e,children:l.jsxs("p",{children:[t," 이(가) 되었습니다."]})})},Uw=B.dialog`
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
`,qw={KBS_Joy:{channel_id:741852,channel_name:"KBS Joy",channel_nav:"KBS_Joy",channel_banner:"https://yt3.googleusercontent.com/mB8n4aqavnr5nGV5P7UH67hZd2qRYTJ5sCnXVqNIxFMX8NNQ26iyoztz-zfpUj7Nx6Vtp7_WEg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/wNoNXmOpkCgBiPmx8pusWVLDeXIADKo1MhiYz22JBdpVxzCFII7kbZ9g8ihRh1oRszvrvwetgw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"KBS Joy 공식 채널입니다.",channel_subscribers:117e4,Movies:[{movie_id:5961259,movie_title:"피할 수 없는 운명.. 귀신(鬼神) 보는 남자👻 (소름주의) [무엇이든 물어보살]",movie_body:"그의 눈앞에 시도 때도 없이 나타난다는 귀신들!독실한 크리스천이지만 신묘한 능력 덕분에 모르는 사람들까지 점 봐달라고 찾아온다는데..",movie_image:"https://i.ytimg.com/vi/j-rZqBXHIic/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc5a2AFFlDSZ1NnUBbw6obVrfkKw",movie_video:"https://www.youtube.com/embed/j-rZqBXHIic?si=m8lX6Aec3_QXyyZh&autoplay=1&mute=1",movie_like_count:91e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:11,day:18},movie_comments:[{comment_id:943854943,comment_body:"공부안하고 딴짓할때 수호령이 뒤통수 때려줬음 좋겠다..",comment_user_id:"test",comment_user_name:"ino-zk3go"}]},{movie_id:58709456945,movie_title:"유명한 엄마를 둔 딸의 흔한 고민 [무엇이든 물어보살]",movie_body:"엄마가 유명해서 불편해요 SNS 중독 엄마와 팩트폭격기 딸의 한 치 양보 없는 썰전! ",movie_image:"https://i.ytimg.com/vi/pxPADFCRFY4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNtOffVDGsBO3Z0_nOhVcFH7FQoA",movie_video:"https://www.youtube.com/embed/pxPADFCRFY4?si=IeVxx9gJUd6fQE-p&autoplay=1&mute=1",movie_like_count:48e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:5,day:28},movie_comments:[{comment_id:456852,comment_body:"부모님이 유명해서 고민돼요라고 나오려면 철구 딸은 돼야할 것 같은데 ㅋㅋㅋ 이쯤되면 ㄹㅇ 인생이 고민될만하지",comment_user_id:"test",comment_user_name:"Frog27beat"}]},{movie_id:32905203,movie_title:"행복한 삶을 꿈꾸는 투렛 증후군 환자, '인생을 어떻게 살아가야 할까요..' [무엇이든 물어보살]",movie_body:"행복한 삶을 꿈꾸는 #투렛증후군 환자의 고백",movie_image:"https://i.ytimg.com/vi/eAXN1C0dLe8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_AOTsQpOpjh0Wu_JfwMY1jKFaw",movie_video:"https://www.youtube.com/embed/eAXN1C0dLe8?si=K1gkasXQmkbjj42S&autoplay=1&mute=1",movie_like_count:14e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2020,month:3,day:23},movie_comments:[{comment_id:748569,comment_body:"현대의학으로 안된다면 우리의 눈이 달라지면됩니다",comment_user_id:"test",comment_user_name:"전현주-j4c"}]},{movie_id:932848,movie_title:"스스로도 풀지 못한.. 진짜 무속인의 마음속 고민 [무엇이든 물어보살]",movie_body:"신빨 최고 신입 보살이 물어보살에 찾아왔다! 스스로도 못 푼 그녀의 마음 속 고민을 풀어 줄 아기동자의 공감 100배 특급 조언!",movie_image:"https://i.ytimg.com/vi/HBpxhWhWpuw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9XoUoh6LstlgHZzMo74_h2zmJSw",movie_video:"https://www.youtube.com/embed/HBpxhWhWpuw?si=rveNvcv3_Qq9D2n8&autoplay=1&mute=1",movie_like_count:53e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:9,day:18},movie_comments:[{comment_id:125869,comment_body:"",comment_user_id:"test",comment_user_name:""}]},{movie_id:8862923,movie_title:"(역대급 고민) '잘못된 만남' 현실판🤦‍♂️ '아내가 20년지기 절친과 바람났습니다...' [무엇이든 물어보살]",movie_body:"'아내가 제 절친과 바람났습니다..' 초보 싱글 대디의 안타까운 고민🤦‍♂️",movie_image:"https://i.ytimg.com/vi/rxIiCI-5hsc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8RrMxr0wxcF8b9PZ61VG5aj5k4g",movie_video:"https://www.youtube.com/embed/rxIiCI-5hsc?si=TBIulhyWK7n7yBDO&autoplay=1&mute=1",movie_like_count:67e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2020,month:3,day:9},movie_comments:[{comment_id:165265,comment_body:"좀 잔인한 얘기지만 아기도 유전자 검사 한번 해 보길..",comment_user_id:"test",comment_user_name:"신사임니당-w2y"}]}]},LIJULIKE:{channel_id:458963,channel_name:"리쥬라이크",channel_nav:"LIJULIKE",channel_banner:"https://yt3.googleusercontent.com/LPYJH3KwfkCifSwsUuVaVFuKi1Uz09HpDLOi11ddXHlVOBh3XwlYSZfJ7UHjiudY3YAWseAU0q4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/pcFLVUDQVSlOjqLjCr3K34RiAvvtj0DGTxbdOzYYqmBnmfKN0vfVRv4FSSJo0X9UnTGEoRcg97U=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"유혜주Vlog",channel_subscribers:85e4,Movies:[{movie_id:586412,movie_title:"[VLOG] 벌써 나온다고??😱 남편 없이 갑작스런 출산!! 생전 처음 겪는 엄청난 고통💦",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/cQb-6mQV-KQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB31OYLvG7ZcTDySJTy1hMsOm2fsA",movie_video:"https://www.youtube.com/embed/cQb-6mQV-KQ?si=jccwNpyuj6FWpXLa&autoplay=1&mute=1",movie_like_count:66e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:3,day:3},movie_comments:[{comment_id:567894,comment_body:"볼때마다 눈물이 주륵주륵…평생 잘할게요",comment_user_id:"test",comment_user_name:"@조땡-r8b"}]},{movie_id:789321,movie_title:"드디어 동생과 내친구의 결혼식 공개해요! (제 축사도..)",movie_body:"드디어 제 동생 현주와 제 친구 태성이의 결혼식을 공개해요 !",movie_image:"https://i.ytimg.com/vi/lWwyGT1BJMA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVHK7saocl61XDD-xZOHlNnf3Byg",movie_video:"https://www.youtube.com/embed/lWwyGT1BJMA?si=ZamdeYRmluFQ4nC7&autoplay=1&mute=1",movie_like_count:17e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2022,month:5,day:9},movie_comments:[{comment_id:853121,comment_body:"경찬님 개웃기다.. 영상 볼때마다 한시도 가만히 있질 않으시네요",comment_user_id:"test",comment_user_name:"user-is7du8lu6x"}]},{movie_id:168997,movie_title:"[VLOG] 처음으로 손자를 보는 어머니, 첫조카를 본 가족의 반응은? l 대가족 특집",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/YaxocJPDMDY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDizKIGKdh_cb5Wc6y6lvY3yUTMQ",movie_video:"https://www.youtube.com/embed/YaxocJPDMDY?si=GvxkGOgBrYlgbQ-q&autoplay=1&mute=1",movie_like_count:26e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:4,day:29},movie_comments:[{comment_id:842112,comment_body:"가족이 많다는 건 정말 행복한 일 같아요 정 넘치는 모습 보기 좋아요 🥰",comment_user_id:"test",comment_user_name:"@옹글몽글-e7j"}]},{movie_id:211666,movie_title:"[드디어 공개] 동생과 내친구가 연애하게된 스토리 ep.1",movie_body:"드디어 제 동생 현주와 제 친구 태성이의 연애스토리를 공개합니다❤️ 오랫동안 기다려주셔서 감사해요☺️",movie_image:"https://i.ytimg.com/vi/nyMZxK2Kvhs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdY3151EqR0c7ZBkdJ17MBXgys7Q",movie_video:"https://www.youtube.com/embed/nyMZxK2Kvhs?si=iJT0KA3RWRV3v5Af&autoplay=1&mute=1",movie_like_count:16e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2021,month:10,day:30},movie_comments:[{comment_id:673212,comment_body:"개재밌다...남의 연애사....",comment_user_id:"test",comment_user_name:"@hermit__crab"}]},{movie_id:167556,movie_title:"[VLOG] 남편과 조리원 첫 입소! 처음으로 안아보는 아들👩‍🍼 (모유수유/회음부통증/출산지원금)",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/MiBlImCwkso/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdLe_OzNOXirgKX86KNW2tM-x8Hw",movie_video:"https://www.youtube.com/embed/gB1EonLy5lQ?si=laMZ9Xj6HLVMjQi6&autoplay=1&mute=1",movie_like_count:29e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:3,day:12},movie_comments:[{comment_id:296747,comment_body:"남편분 든든하다.. 옆에서 저렇게 서류 처리할거나 신청 할것들 알아서 착착해주기만 해도 맘 놓을 수 있을듯..",comment_user_id:"test",comment_user_name:"@_nyong_"}]}]},Highfiction:{channel_id:641322,channel_name:"하이픽션",channel_nav:"Highfiction",channel_banner:"https://yt3.googleusercontent.com/w8XfHLFzmciL0QYoAEwv_CP5qvVRRN5wzIkLfAdgtMNuaNtMrJhkTLX0dC46f5gVHWFaoY4YMg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/TJo2vsrvi2HtumSu8qU9OGvRTM6SOPpNZ9lXxC0vLKasedPX-cMOMJgWpY2rkdTxr_f7k5TIpw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"더 높은 재미를 추구하는 하이픽션 입니다",channel_subscribers:756e3,Movies:[{movie_id:567732,movie_title:"(ep.1~10) 조폭여친과 함께하는 연애스토리",movie_body:"조폭여친 몰아보기편!!! 재밌게 봐주세요~!",movie_image:"https://i.ytimg.com/vi/0WZGu5-gwYY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOMsvUKKlWP9t7Xmg-ifXaViTa2A",movie_video:"https://www.youtube.com/embed/0WZGu5-gwYY?si=S6y8EncMYiq64k_c&autoplay=1&mute=1",movie_like_count:29e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2024,month:3,day:21},movie_comments:[{comment_id:247855,comment_body:"그냥 이쁘기만한게 아니라 볼수록 매력있는 시연님!! 계속 매력적인 작품 기대해봅니다. 화이팅!!",comment_user_id:"test",comment_user_name:"arden-white"}]},{movie_id:135276,movie_title:"나 꼬시고 싶어? [거짓말 없는 세상]",movie_body:"안녕하세요 스톡커입니다 재밌게 봐주세요~!",movie_image:"https://i.ytimg.com/vi/I2so7rnoDEM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUmB5blGdntffbfTHpi4XLhIt7rw",movie_video:"https://www.youtube.com/embed/I2so7rnoDEM?si=rQi-dvnPIdToyATH&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2022,month:7,day:2},movie_comments:[{comment_id:851144,comment_body:"문 열리니까 괜히 와보는 고양이 존나 귀엽다",comment_user_id:"test",comment_user_name:"김김-t2h"}]},{movie_id:875312,movie_title:"숏박스 구독 안 한 새끼 누구냐??",movie_body:"안녕하세요 오늘은 유튜버 똥군기입니다 재밌게 만든 픽션이니까 오해하지말고 재미로 봐주세요~!!",movie_image:"https://i.ytimg.com/vi/MgdXR4vTtxQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEVsOphJ1wTY1BEwoPnqP7_8T1hQ",movie_video:"https://www.youtube.com/embed/MgdXR4vTtxQ?si=GwxbT8ZznAtF1Kxm&autoplay=1&mute=1",movie_like_count:37e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2023,month:6,day:17},movie_comments:[{comment_id:342532,comment_body:"안녕하세요 루키치입니다!!! 말씀 하신대로 채널명 바꿨습니다 선배님…",comment_user_id:"test",comment_user_name:"rookitsch"}]},{movie_id:653112,movie_title:"도망가면 뒤진다?",movie_body:"안녕하세요 하이픽션입니다 오늘도 재밌게 봐주세요!!",movie_image:"https://i.ytimg.com/vi/KpV430uiUkY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7VbGVys7By0hxajhDNZhvqLKVQQ",movie_video:"https://www.youtube.com/embed/KpV430uiUkY?si=F2mGpsPg0Vk6Pt7x&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:"641322",movie_date:{year:2023,month:12,day:5},movie_comments:[{comment_id:642323,comment_body:"그래도 세번 도망칠 용기라도 있네 친구는 ㅋㅋㅋㅋㅋㅋㅋ 이쁜사랑 하세요 ㅋㅋㅋㅋㅋ",comment_user_id:"test",comment_user_name:"AKI-___"}]},{movie_id:325464,movie_title:"또 쳐다보세요 [거짓말 없는 세상]",movie_body:"안녕하세요 스톡커입니다 다시 돌아온 헬스장편 재밌게 봐주세요~!!",movie_image:"https://i.ytimg.com/vi/0cEMl3j2cAU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYsI-7LoLfSCZ6yPl6w-Fwd-ol7Q",movie_video:"https://www.youtube.com/embed/0cEMl3j2cAU?si=kz2G69MhCdpzC4bM&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2022,month:6,day:22},movie_comments:[{comment_id:564223,comment_body:"이거 헬스장에 대형 티비로 틀어나야  한다",comment_user_id:"test",comment_user_name:"짱코씨"}]}]},Beginagain:{channel_id:984562,channel_name:"@begin_again",channel_nav:"Beginagain",channel_banner:"https://yt3.googleusercontent.com/SgYk8-S4UrUAxgTx4Y0wB64PNsENZK0raxLYEiN800OiRSwh6eMozF0Z9YZoday7cZpII8SV=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/FmxZkGyu8p9bBT774Owjr3A2GNfBQofKZi_yBss5bFMvyhP9RJlFTYCrwcvONxQZ6sVvvJjriQ=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"JTBC의 힐링 음악 예능 [비긴어게인] 공식 채널입니다🎵",channel_subscribers:183e4,Movies:[{movie_id:259877,movie_title:"🎤언제 들어도 소름 돋는 이하이(Lee Hi)의 ′Rose🌹♪ 〈비긴어게인 코리아(beginagainkorea)〉 4회",movie_body:"🎤언제 들어도 소름 돋는 이하이의 ′Rose🌹♪",movie_image:"https://i.ytimg.com/vi/cq-A2RJC7fg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHvwfqHd1X24KLdrxSJUYL25xDFg",movie_video:"https://www.youtube.com/embed/cq-A2RJC7fg?si=V1LgeIM39vh5OAml&autoplay=1&mute=1",movie_like_count:26e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:28},movie_comments:[{comment_id:894448,comment_body:"하이는 본인을 이기는구나,, 라이브가 음원을 압살해버리네",comment_user_id:"test",comment_user_name:"조은교-y1g"}]},{movie_id:423411,movie_title:"[ENG] 수현(Su-hyun)x정승환(Jung Seung-hwan)의 ′어떻게 이별까지 사랑하겠어， 널 사랑하는 거지′♪ 〈비긴어게인 코리아(beginagainkorea)〉 1회",movie_body:"이수현x정승환의 ′어떻게 이별까지 사랑하겠어， 널 사랑하는 거지′♪",movie_image:"https://i.ytimg.com/vi/XNGoOqB8380/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyocU3z6aYqzs-BCnoS0vhThrQ_A",movie_video:"https://www.youtube.com/embed/XNGoOqB8380?si=5RsOiKM5D9N9dFNz&autoplay=1&mute=1",movie_like_count:12e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:7},movie_comments:[{comment_id:564221,comment_body:"오빠랑 안불러서 더 감정이 들어가 완벽해졌다는 전설의 라이브 영상",comment_user_id:"test",comment_user_name:"관동이관동이"}]},{movie_id:876543,movie_title:"[ENG] (반전의 반전↗) 이수현x헨리x크러쉬x정승환 ′All For You′♬ 〈비긴어게인 코리아(beginagainkorea)〉 1회",movie_body:"(반전의 반전↗) 이수현x헨리x크러쉬x정승환 ′All For You′♬",movie_image:"https://i.ytimg.com/vi/wEgvCBcfFLI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-Z584pH-XHi9wlU2NMG62MHXYwA",movie_video:"https://www.youtube.com/embed/wEgvCBcfFLI?si=q1O96MbHz3GbFUe5&autoplay=1&mute=1",movie_like_count:24e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:7},movie_comments:[{comment_id:534121,comment_body:"진짜 정승환 목소리가 이수현 목소리 싹 감싸주는 그런느낌 받음",comment_user_id:"test",comment_user_name:"뭐봐일"}]},{movie_id:452431,movie_title:"🎧이수현 Playlist🎧 '심신 안정 보이스' 이수현 노래 모음 ｜ 비긴어게인 모아듣기",movie_body:"🎧비긴어게인 이수현 Playlist🎧",movie_image:"https://i.ytimg.com/vi/STwHSJSA86c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCftOY5ZUPTPthjULKeF-K1kPjTIA",movie_video:"https://www.youtube.com/embed/STwHSJSA86c?si=W3U9NoS5ERACOGH7&autoplay=1&mute=1",movie_like_count:11e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:8,day:6},movie_comments:[{comment_id:98491202,comment_body:"편집자 상줘라",comment_user_id:"test",comment_user_name:"tuna3298"}]},{movie_id:642431,movie_title:"[ENG｜단독 풀버전] 비긴어게인 코리아 '길' ｜ 눈물바다가 된 비긴코 버스킹 현장😢",movie_body:"비긴어게인 코리아 '길' 풀버전 버스킹 현장이 눈물바다가 된 사연은?!",movie_image:"https://i.ytimg.com/vi/YS10Cdaz2Kk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8bhQuomv7G42p44l1WG1TuPsoeg",movie_video:"https://www.youtube.com/embed/YS10Cdaz2Kk?si=1tV2bLLnE1IUEmNN&autoplay=1&mute=1",movie_like_count:29e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2024,month:10,day:28},movie_comments:[{comment_id:432165,comment_body:"저도 한 번만 응원해주세요 죄송합니다..",comment_user_id:"test",comment_user_name:"민석-z4n"}]}]},G_Movie:{channel_id:859641,channel_name:"@지무비",channel_nav:"G_Movie",channel_banner:"https://yt3.googleusercontent.com/YZSsAoZix0DCd0figFc81fktZHrOmvpWg0Se4bspLVD4BLbZH1hsBaPmoG3hlGqlRUxgDovyqg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ytc/AIdro_nLr4j1MqKUus9uB2RADncMRaC__c2D6MKj4x4YbA4IwcU=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"영화&드라마&예능&패션&게임&전자제품&광고를 더 G리게.. 모든 걸 영화처럼..",channel_subscribers:358e4,Movies:[{movie_id:98384321,movie_title:"수갑채워놨는데 남편이 심장마비로 사망하면 벌어지는 대참사",movie_body:"영화 제럴드의게임(2017)입니다",movie_image:"https://i.ytimg.com/vi/2EahotHTVpc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3sfFbsdOHoyNxdvJ0GIg7RiJ6pw",movie_video:"https://www.youtube.com/embed/2EahotHTVpc?si=fng9erydx2hVg_bq&autoplay=1&mute=1",movie_like_count:27e4,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2019,month:3,day:2},movie_comments:[{comment_id:378765,comment_body:"이거 영상 초반만 보고 바로 넷플릭스 드가서 봤는데 진짜 긴장감 쩔고 후반부 소름 장난 아니에요 개무서워요ㅠ퓨 그리고 폰 배터리 없는 설정이라 시리 부르는것두 안댐",comment_user_id:"test",comment_user_name:"cuddly0"}]},{movie_id:989831,movie_title:"'수임료 1000원'인데 '승률 100%'인 전설의 변호사가 주차장 갑질남 차 박살내버린 뒤, 참교육하는 역대 최고로 신박한 방법 ㅋㅋㅋ 《천원짜리 변호사》",movie_body:"드라마 ≪천원짜리 변호사≫, 1화~2화의 내용입니다. 채널 SBS에서 매주 금,토 밤 10시 방영됩니다.",movie_image:"https://i.ytimg.com/vi/yyiox2536C0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnAyfSOlqWJGhw2eRAMWp2MzsOAg",movie_video:"https://www.youtube.com/embed/yyiox2536C0?si=PALxhnFQEsTxm9hi&autoplay=1&mute=1",movie_like_count:11e4,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:9,day:25},movie_comments:[{comment_id:892585,comment_body:"어느 순간부터 남궁민하면 그냥 믿고 보게 됨 작품선정이나 특유의 딕션이랑 연기력이 드라마쪽에선 ㄹㅇ독보적 존재",comment_user_id:"test",comment_user_name:"standstill8152"}]},{movie_id:907429,movie_title:"제목 따위 필요 없는, 내 인생 최고의 드라마 《이태원클라쓰》",movie_body:"드라마, 《이태원클라쓰》 1-4화 소개 영상입니다.",movie_image:"https://i.ytimg.com/vi/P0ikE6tFbas/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1V4ANcuPOrDvWuF3pf0LuZCZ-Ow",movie_video:"https://www.youtube.com/embed/P0ikE6tFbas?si=Dn3uKDy6SES_t03P&autoplay=1&mute=1",movie_like_count:91e3,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:4,day:9},movie_comments:[{comment_id:985234,comment_body:"이태원클라쓰 보고 진짜 아직도 피가 끓는 기분... 열심히 살고자 하는 의지를 계속 일깨워주는 드라마,  진짜 명작이다",comment_user_id:"test",comment_user_name:"vvs7530"}]},{movie_id:215464,movie_title:"퍼스트 클래스탔다고 승무원한테 온갖 진상 다 부리던 손님 옆에 하필 절대 불의를 못참는 자산 3000억 천재 CEO 조승우가 타고 있으면 벌어지는 일 ㅠㅠ",movie_body:"드라마 ≪시지프스≫, 1화~4화의 내용입니다.",movie_image:"https://i.ytimg.com/vi/RIj9IdZvg6M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDtlVjX8Kfc1lGqlbJXNvGZ1T4Og",movie_video:"https://www.youtube.com/embed/RIj9IdZvg6M?si=hPbUY9_bnY3y4BRX&autoplay=1&mute=1",movie_like_count:78e3,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:9,day:24},movie_comments:[{comment_id:214644,comment_body:"세상에서 가장 무서운게'후회' 인데 후회 하기 싫으면 열심히 잘해해주 잘챙겨주면 되는데 현실에서도 그러지를 못함",comment_user_id:"test",comment_user_name:"꼬꼬마-v4h"}]},{movie_id:4809634,movie_title:"하필이면..힘숨찐도 아닌 초숨찐을 건드린 일진들의 최후ㅠ",movie_body:"OCN 오리지널 드라마, ‘경이로운 소문’ 1-2화 내용입니다. 매주 토,일 밤 10시 30분 채널 OCN에서 방영합니다.",movie_image:"https://i.ytimg.com/vi/eJ5U0tuDxKk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzeIKOpDmmjPBJKv_wSjR_CpMd5Q",movie_video:"https://www.youtube.com/embed/eJ5U0tuDxKk?si=Qj0oDz0Rl92Lp-0V&autoplay=1&mute=1",movie_like_count:1e5,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2020,month:12,day:5},movie_comments:[{comment_id:865412,comment_body:"유준상 배우는 나이가 몇인데자기관리 진짜 엄청나신거같음....비쥬얼이나 체력이나 액션씬 같은거보면 30대라고 해도 믿으실듯;;; 레전드",comment_user_id:"test",comment_user_name:"__Uz"}]}]},radiohead:{channel_id:56165156,channel_name:"라디오헤드",channel_nav:"radiohead",channel_banner:"https://yt3.googleusercontent.com/7YJU_BnlYUPHGI1abV2FfjhgizivH6UZpPaMjAdjKWbuy_o_nspoIOhoa82lDA_c38Jfubve=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/iGWTxAf6tokq9e2cVapQL6D1qgbtD-oFkVLqcUGF24WjUwX68qCm-iN4mMqqJEz_4eRSi-EyEQ=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"radiohead.com",channel_subscribers:404e4,Movies:[{movie_id:556151,movie_title:"라디오헤드 - Fake Plastic Trees",movie_body:"‘Fake Plastic Trees’ is taken from ‘The Bends’ out on XL Recordings. Director: Jake Scott Producer: Ellen JacobsonCinematography: Salvatore Totino Production",movie_image:"https://i.ytimg.com/vi/EzcJhJt_vQY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXCg5MA8=&rs=AOn4CLDSe2Z3YNdtCuBYnvoVdDAZTymL3g",movie_video:"https://www.youtube.com/embed/EzcJhJt_vQY?autoplay=1&mute=1",movie_like_count:49e4,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2015,month:1,day:23},movie_comments:[{comment_id:136551,comment_body:`"why did you take so long to buy groceries?" 
                                            me:`,comment_user_id:"miguelrodriguez-pineroriva6713",comment_user_name:"산미구엘"}]},{movie_id:556152,movie_title:"이쯤에서 돌아보는 그들의 발자취 라디오헤드 이야기",movie_body:"‘Lotus Flower’ is taken from ‘The King of Limbs’ out on XL Recordings Director of Photograph: Nick Wood",movie_image:"https://i.ytimg.com/vi/f2fjTisiUDI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/f2fjTisiUDI?autoplay=1&mute=1",movie_like_count:44e4,movie_category:"music",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2023,month:10,day:6},movie_comments:[{comment_id:136552,comment_body:"Hi, my name's Thom Yorke and I'll be your freestyle dance teacher",comment_user_id:"pulllak",comment_user_name:"돼지와함께춤을"}]},{movie_id:556153,movie_title:"라디오헤드 - creep",movie_body:"라디오헤드는 Creep 말고도 좋은 노래가 많다 #라디오헤드 56165156#creep #okcomputer #오아시스 #톰요크 #thesmile #더스마일",movie_image:"https://i.ytimg.com/vi/XFkzRNyygfk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCkbazk73In3wUcMpWdiSNFURE3A",movie_video:"https://www.youtube.com/embed/bthufxQepAk?autoplay=1&mute=1",movie_like_count:57e4,movie_category:"music",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2008,month:10,day:15},movie_comments:[{comment_id:136553,comment_body:"Nice dream을 너무 좋아해요 신비한곡인듯",comment_user_id:"Pre_lude",comment_user_name:"레코너"}]},{movie_id:556154,movie_title:"라디오헤드 라이브 - 2 + 2 = 5",movie_body:"'2 + 2 = 5' is taken from 'Hail to the Thief' out on XL Recordings.",movie_image:"https://i.ytimg.com/vi/11oAXmVdEyQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgKAAvABigIMCAAQARgTICsofzAP&rs=AOn4CLB6QlCofl8Rnkm-zzX0EjscePbHdA",movie_video:"https://www.youtube.com/embed/c6GO7c-zO6E?autoplay=1&mute=1",movie_like_count:9400,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2015,month:1,day:23},movie_comments:[{comment_id:136554,comment_body:"2 + 2 = 140p",comment_user_id:"andreylucass",comment_user_name:"앤디"}]},{movie_id:556155,movie_title:"라디오헤드 라이브 - No Surprises",movie_body:"‘No Surprises’ is taken from ‘OK Computer’ out on XL Recordings",movie_image:"https://i.ytimg.com/vi/u5CVsCnxyXg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSo72rG7nC88JI6Ez5InNKRYqhMw",movie_video:"https://www.youtube.com/embed/a8Yh0mNTBuo?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2021,month:11,day:1},movie_comments:[{comment_id:136555,comment_body:`Thom: drowns
                                           His face: (            -_-             )`,comment_user_id:"mushfiqahmad1783",comment_user_name:"독버섯"}]}]},ultraTasteDiary:{channel_id:6546654,channel_name:"최강록 Ultra Taste Diary",channel_nav:"ultraTasteDiary",channel_banner:"https://yt3.googleusercontent.com/nVk2CWFo_sMLATnX4kvDakcFI7vuAsBKGBEh-V9MzclW1j8HfYKIz-Xowx_UuOdM2bZn2DJ7aw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/vIc-veEiaMx4XJLekuHNtgzM4DiBTXXhHIGRB9JxZHw_WA_tS3qb16Z-FmaYKpjQtU8YUcmK=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"귀찮음과 시간이 만들어내는 예술 비즈니스 : utdcook@gmail.com",channel_subscribers:57e4,Movies:[{movie_id:794541,movie_title:"제모옥은.......고추장…닭날개 쪼림으로 하겠습니다 근데 이제.. 바지를 겨뜨린",movie_body:"8년 이상 지난 이 음식을 기억하고 계신분들께 감사를 드립니다. 진심은... 그냥 그 때 그 순간에 남은 영상으로 떠돌아 다니는게 이 음식을 돋보이게 하는거라 생각했어요. ",movie_image:"https://i.ytimg.com/vi/JdD3OqGRB_Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnkmCZnxlQxrPCSb-PLyPLDsbt8Q",movie_video:"https://www.youtube.com/embed/JdD3OqGRB_Y?autoplay=1&mute=1",movie_like_count:3500,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2021,month:4,day:30},movie_comments:[{comment_id:348941,comment_body:"미소메시드뭐꼬뭐시라카노'도 꼭 만들어주세요ㅠㅠ",comment_user_id:"Mushirakano",comment_user_name:"김소희"}]},{movie_id:794542,movie_title:"최강록이 최강록을 시작하는 이야기",movie_body:"첫편부터 길고 긴 요리영상을 올리기가 좀 그래서 만든 영상. 근데 이제 주성치 팬심을 곁들인.. 휴...",movie_image:"https://i.ytimg.com/vi/ysLaz2YJ2c4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFw5rw__2RGVNup0KFKjUqJXoSqw",movie_video:"https://www.youtube.com/embed/ysLaz2YJ2c4?autoplay=1&mute=1",movie_like_count:9600,movie_category:"talk",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2020,month:9,day:1},movie_comments:[{comment_id:348942,comment_body:"와...조렸다....",comment_user_id:"acdc",comment_user_name:"암참차"}]},{movie_id:794543,movie_title:"Miso Mashed... Mushirakano(미소 매쉬드 포테이토)",movie_body:"#최강록 #UltraTasteDiary #미소 김소희님 헌정",movie_image:"https://i.ytimg.com/vi/A0t58bjx00s/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/A0t58bjx00s?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2021,month:6,day:25},movie_comments:[{comment_id:348943,comment_body:"결국 흑백요리사에도 등장해버린 미소 매쉬드 머시라카노..",comment_user_id:"strongB",comment_user_name:"강한비-s9x"}]},{movie_id:794544,movie_title:"MBTI 무료 성격유형 검사",movie_body:"#최강록 #UTD #mbti",movie_image:"https://i.ytimg.com/vi/deq3zoLUc_U/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/deq3zoLUc_U?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"comedy",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2022,month:9,day:2},movie_comments:[{comment_id:348944,comment_body:"아니 내향형 100프로 처음 봄 ㅋㅋㅋㅋ",comment_user_id:"kimsbl6n",comment_user_name:"김상부-l6n"}]},{movie_id:794545,movie_title:"지금 만나러 갑니다 / 수빙고(하이브리드 아이스)",movie_body:"#최강록 #강레오 #수빙고 #하이브리드아이스 오랜만에 그 분을 만나러 갔습니다.",movie_image:"https://i.ytimg.com/vi/6o4vGCjZ3WI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/6o4vGCjZ3WI?autoplay=1&mute=1",movie_like_count:7600,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2023,month:2,day:3},movie_comments:[{comment_id:348945,comment_body:"강레오..셰프님의 그 쏘는 눈빛 거기에 마주치면 한..6개월씩 늙어요...",comment_user_id:"peterparker",comment_user_name:"파커-u7d"}]}]},suede:{channel_id:96745102,channel_name:"스웨이드",channel_nav:"suede",channel_banner:"https://yt3.googleusercontent.com/iZpbhbFb_GrB1aO_JWSE8-j1tTAP19jxAngN_VSTADyuuqW7UmfMhA_zScznzBTboMN2c8vqV5M=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/UX1nAVaOk_ARxZXQu5uknwTP2JJ3C54dcSWKNjTwoB4Ft8B2v1v4nIVeJCuYWHAYDFd6AxtVjw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"Welcome to the official Suede Youtube channel, the Hub of all of your favourite Suede video's featuring Brett Anderson - such as, 'Beautiful Ones' 'Trash' and 'Animal Nitrate'. Subscribe for stay updates on the latest Music Videos, Interviews and Live footage from Suede.",channel_subscribers:157e3,Movies:[{movie_id:738161,movie_title:"스웨이드 - Life Is Golden (Official Video)",movie_body:"Official video for Life Is Golden, from Suede's 8th studio album 'The Blue Hour'. Filmed on location in Pripyat, Ukraine, near Chernobyl. Directed by Mike Christie.",movie_image:"https://i.ytimg.com/vi/pEJfWrfN15k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6L984WNodmomrig1dFx2SVi2Q7g",movie_video:"https://www.youtube.com/embed/Q9wbVPmUlOw?autoplay=1&mute=1",movie_like_count:17e3,movie_category:"music",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2018,month:8,day:16},movie_comments:[{comment_id:317891,comment_body:"This song is golden",comment_user_id:"hessehessen4334",comment_user_name:"헤헤"}]},{movie_id:738162,movie_title:"스웨이드 - 'She Still Leads Me On' (Live Streamed from Cirque Royal, Brussels)",movie_body:"Suede debut their brand new single ‘She Still Leads Me On’, streaming live on stage at a headline performance in Belgium at Brussels’ Cirque Royal.",movie_image:"https://i.ytimg.com/vi/tfDgLym55Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKy3j6bVSAWAffzphdYR0V3MhkmA",movie_video:"https://www.youtube.com/embed/VvDxY0kInV0?autoplay=1&mute=1",movie_like_count:21e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2022,month:5,day:25},movie_comments:[{comment_id:317892,comment_body:"Great lyrics Brett has definitely wrote this song for his mother who past away when he was just a young man",comment_user_id:"sunstar9709",comment_user_name:"해달별"}]},{movie_id:738163,movie_title:"브렛 앤더슨 93년 스웨덴 인터뷰 (Brett Anderson Interview Sweden, 1993 Kor sub cc)",movie_body:"오랜만에 올리네요 펄프 커먼피플은 계속 번역중인데 제가 게을러서 시간이 꽤 걸릴듯",movie_image:"https://i.ytimg.com/vi/PX6L65xgOzY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5mtz-M8xCkrnltxlGQccViokC-g",movie_video:"https://www.youtube.com/embed/939_uYyZa1A?autoplay=1&mute=1",movie_like_count:1018,movie_category:"interview",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2016,month:12,day:21},movie_comments:[{comment_id:317893,comment_body:"He's so Handsome",comment_user_id:"yorkellic",comment_user_name:"톰요크"}]},{movie_id:738164,movie_title:"스웨이드, 사상 첫 단독 내한 공연 개최🇬🇧 [#위클리팝]",movie_body:"브릿팝의 주역, 스웨이드(Suede)가 8년 만에 한국을 찾습니다. '녹슬지 않는 록 스피릿' 관록이 느껴지는 베테랑 밴드 스웨이드의 내한 공연에 대한 자세한 내용은 영상을 통해 만나보세요🤟",movie_image:"https://i.ytimg.com/vi/Z4J2D9ZNpvI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/Z4J2D9ZNpvI?autoplay=1&mute=1",movie_like_count:3e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2024,month:6,day:13},movie_comments:[{comment_id:317894,comment_body:"저에겐 최고의 공연 이었습니다. 한국에 또 온다는 약속 기다리고 있겠습니다.",comment_user_id:"fajinchan",comment_user_name:"김길환"}]},{movie_id:738165,movie_title:"스웨이드 - she 내한 공연",movie_body:"Suede 스웨이드 - She @ LIVE 라이브 @2013 INCHEON PENTAPORT ROCK FESTIVAl",movie_image:"https://i.ytimg.com/vi/twoO3xYRsz0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVNcO5wAtTuHBa3jadFUsnlzK57A",movie_video:"https://www.youtube.com/embed/V3T6NDalQeU?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2010,month:6,day:16},movie_comments:[{comment_id:317895,comment_body:"우와",comment_user_id:"hippieswave",comment_user_name:"히피"}]}]},woowakgood:{channel_id:41846541,channel_name:"우왁굳",channel_nav:"woowakgood",channel_banner:"https://yt3.googleusercontent.com/eYI-CDr4AXjjnzZv8ERzW-P2u1AQPNNCNDRLxBw1mlIwEjA-BIKUHpdd6dFDD7pjGF7urPZTrA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/vhOEy7Ode6Y8ZN3noHKZua0LMt2n2Z7xfEyfWmzTXwQ6oq59BFyTXnN9AcnksHTYAM1YCzdY=s160-c-k-c0x00ffffff-no-rj",channel_introduction:`아프리카 TV에서 게임방송을 하고 있는 "우왁굳"의 유튜브 채널입니다.
                                   방송에서 재밌었던 장면들, 편집영상, 녹화영상등이 올라옵니다.
                                   영상 업로드 시간 : 매일 새벽중
                                   우왁굳 카카오톡 친구추가 하기 : @우왁굳`,channel_subscribers:172e4,Movies:[{movie_id:314511,movie_title:"편의점 알바하면 찾아오는 진상들이 한 번에 다 온다면? ㅋㅋㅋ",movie_body:"편의점 알바하면 찾아오는 진상들이 한 번에 다 온다면? ㅋㅋㅋ - VR챗 상황극",movie_image:"https://i1.ytimg.com/vi/BxzPDQzux40/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/BxzPDQzux40?autoplay=1&mute=1",movie_like_count:12e4,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2020,month:9,day:5},movie_comments:[{comment_id:635171,comment_body:"진짜 소름끼치는 것은 담배 사는 할아버지는 고시원과 관련이 없는 그냥 진상이라는 것이다.",comment_user_id:"rice_thief",comment_user_name:"밥도둑"}]},{movie_id:314512,movie_title:"폭력적인 중국인에게 대처하는 법 : 중국인에게 타이완 넘버원을 외쳐보았다",movie_body:"TAIWAN #1 (conan exiles)",movie_image:"https://i1.ytimg.com/vi/Hkg6Vu2Um5k/sddefault.jpg",movie_video:"https://www.youtube.com/embed/Hkg6Vu2Um5k?autoplay=1&mute=1",movie_like_count:4e4,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2017,month:2,day:2},movie_comments:[{comment_id:635172,comment_body:"이영상 해외에서도 유명함.. 특히 대만에서 엽기영상으로 인기많음",comment_user_id:"dongjoo87",comment_user_name:"윤동주"}]},{movie_id:314513,movie_title:"몸으로 말해요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",movie_body:"※ E-Mail : ecvhao@naver.com",movie_image:"https://i.ytimg.com/vi/wKyoYzpDEEM/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/wKyoYzpDEEM?autoplay=1&mute=1",movie_like_count:35e3,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2022,month:12,day:12},movie_comments:[{comment_id:635173,comment_body:"이장면들 왜케 웃기고 귀엽짘ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",comment_user_id:"koreatownrunner",comment_user_name:"하니"}]},{movie_id:314514,movie_title:"시청자가 사는 역대급 쓰레기 방",movie_body:"0:00 컨텐츠 설명 0:17 미션놀이 시작 5:56 썸네일 7:26 미션놀이",movie_image:"https://i.ytimg.com/vi/cKi4E_nXQNE/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/cKi4E_nXQNE?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"challenge",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2024,month:10,day:24},movie_comments:[{comment_id:635174,comment_body:"TMI) 방 주인분 결국 업체불러서 정상화 완료함",comment_user_id:"videotape",comment_user_name:"영상업로드용계정"}]},{movie_id:314515,movie_title:"아빠가 되었습니다",movie_body:"우왁굳 핫클립 광고 문의 : marketing@parable-asia.com",movie_image:"https://i.ytimg.com/vi/O7TeGzypNrg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIahTkMd7jwYIMT5Q8lXtVbJqIIA",movie_video:"https://www.youtube.com/embed/O7TeGzypNrg?autoplay=1&mute=1",movie_like_count:32e3,movie_category:"comedy",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2023,month:4,day:14},movie_comments:[{comment_id:635175,comment_body:'이 형 아직 애기 나오기 전에는 막 본인 애기한테 "초면","그 분", "외계인", 이랬었는데 막상 그 분 태어나시니깐 누구보다 딸 바보 된 거 개귀여움 ㅋㅋㅋㅋㅋ',comment_user_id:"wakmulwon",comment_user_name:"침팬치"}]}]},goodboykris:{channel_id:81372931,channel_name:"소련 여자",channel_nav:"goodboykris",channel_banner:"https://yt3.googleusercontent.com/FB29DrRZRBPzHTH5kb8yEanNdWrQaF76lnobBdlqUTNC-1mkg-btjUeJn6KNq6l0OIS0JB6fAw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ytc/AIdro_nUV1fdUmCnAo_V1c9CPjrJjGJOyy8e6ASnbhDOI9G-vsw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"개소리에도 철학이 있다, 대한민국 1타 개소리 예술가 국뽕이란 무엇인가? 대한민국 1타 국뽕 기술자 크리스 교수입니다.",channel_subscribers:105e4,Movies:[{movie_id:119751,movie_title:"던질까 말까 100시간 춤 추기 (세계 최초)",movie_body:"대한민국 유튜브 algorithm 매우 이해 힘든 것 이상한 유행의 Origin : 트니트니 '던질까 말까'",movie_image:"https://i1.ytimg.com/vi/JsISM29qgC0/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/JsISM29qgC0?autoplay=1&mute=1",movie_like_count:91e3,movie_category:"comedy",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2019,month:12,day:19},movie_comments:[{comment_id:319481,comment_body:"한 달에 만원씩 바쳐서 광고 지웠더니 그런 나를 위해 또 광고를 넣어줬구나",comment_user_id:"undertale",comment_user_name:"전래동화"}]},{movie_id:119752,movie_title:"한국인들은 백인이 길바닥에 똥을 싸도 칭찬해줄까?",movie_body:"#똥 #한국 #백인 🇰🇷🤔👩🏼💩👏🏻?",movie_image:"https://i1.ytimg.com/vi/WG5aX86i3rs/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/WG5aX86i3rs?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"challenge",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2021,month:3,day:19},movie_comments:[{comment_id:319482,comment_body:"근데 진짜 소련여자 영상들 보다보면 현실들을 제대로 비판하는 풍자 영상들을 많이 올리는거 같다. 맨날 영상들 보면 웃긴 대사들이나 편집들이 많아서 남들이 보기엔 생각없이 찍은거 같아보여도 다 무언가 찝어서 비판하는게 있음.",comment_user_id:"namenickr9p",comment_user_name:"네임닉-r9p"}]},{movie_id:119753,movie_title:"러시아어 왕초보 강의(‘스파시바’ 절대 쓰지 마세요)",movie_body:"특별 출연하신 일리야 선생님 고맙습니다. 🎁 댓글에 메일 주소 적으면 ‘가벼운 러시아어 학습지 스타트팩'을 선물세트 자동 응모! 🎁",movie_image:"https://i.ytimg.com/vi_webp/UtljPnhHPJY/maxresdefault.webp",movie_video:"https://www.youtube.com/embed/UtljPnhHPJY?autoplay=1&mute=1",movie_like_count:14e3,movie_category:"challenge",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2021,month:6,day:11},movie_comments:[{comment_id:319483,comment_body:"설마했는데 진짜 한국인인 척 하는 스파이였을 줄이야... 가짜 소련여자인 스파이 크리스를 몰아내고 원조 소련여자인 샌즈님을 구해냅시다 여러분",comment_user_id:"tiramisu",comment_user_name:"티라미수"}]},{movie_id:119754,movie_title:"죄송해서 거짓말합니다.",movie_body:"#나는행복합니다 #죄송합니다 #해명합니다 ㅈㅅㅈㅅ~ ㅋ",movie_image:"https://i.ytimg.com/vi_webp/v7i62-5BHeQ/maxresdefault.webp",movie_video:"https://www.youtube.com/embed/v7i62-5BHeQ?autoplay=1&mute=1",movie_like_count:53e3,movie_category:"comedy",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2020,month:8,day:21},movie_comments:[{comment_id:319484,comment_body:"사과는 꼭 죄송한일이 있어야 해야하는걸까? 죄송해야 사과할 수 있다는 고정관념에 우리 스스로를 가둔건 아닐까",comment_user_id:"nohandle",comment_user_name:"핸들좀없애라"}]},{movie_id:119755,movie_title:"북한 러시아 동맹 해명합니다.",movie_body:"#지드래곤 #북한 #러시아 북한이랑 친해라는데 어쩌라고요~ #북한, #러시아, #지드래곤, #해명, #북한풍선, #스타게이저, #버튜버",movie_image:"https://i.ytimg.com/vi/SL_sPoo5OuU/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/SL_sPoo5OuU?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"talk",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2024,month:7,day:12},movie_comments:[{comment_id:319484,comment_body:"와 북한에서 몰래보고있는 오물풍선 알바생인데;; ㅠㅠ 구독합니다 힘내세요!",comment_user_id:"protect1108",comment_user_name:"알바생"}]}]},workman:{channel_id:452454,channel_name:"워크맨-Workman",channel_nav:"workman",channel_banner:"https://yt3.googleusercontent.com/YSzNgAfL46tAd9qCJDyBKxIXVzfJUzq4ic8dY9LbGCsnGEuZ3S6QZkcY6zPZG_GIuuNaa9f1=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ihi8LdmSNfcp96-gaHBE1Av3-PLotF9rOhUxTy_pY-CeHYCAkDzE1ktxfe4gbhtYR0CIYjUPba0=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"🐜🐜워크맨 인력소 강남점🐜🐜",channel_subscribers:415e4,Movies:[{movie_id:165984,movie_title:"카페 경력 짬바가 뭔지 보여주..“주문 안 받고요, 키오스크에서 알아서 해주세요!!”😵‍💫 | 팀홀튼 카페 알바 | 대니구 | 워크맨2",movie_body:"Job것들아~~~~~~,,, 인력소장이다,,, ",movie_image:"https://i.ytimg.com/vi/9jl-oxM0FxU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwsc8KHtBS9lVn_A-u-KtT-Gy3OQ",movie_video:"https://www.youtube.com/embed/7eJajoei--0?si=3bJI0gFwv_BWGsfg&autoplay=1&mute=1",movie_like_count:15e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:10,day:18},movie_comments:[{comment_id:88437539,comment_body:"진짜  5년 했으면 직업 찾기 힘들건디.. 정말 대단하네요..오늘도 재밌게 봅니다",comment_user_id:"test",comment_user_name:"욀량"}]},{movie_id:165977,movie_title:"[SUB] 뽀시래기들 놀아주다 멘탈 뿌시래기(?) 됨😇 | 키즈카페 | 월간워크맨 범규 | 투모로우바이투게더 | TXT | 워크맨2",movie_body:"오늘은,, 성규,, 아니고 범규가,,,키즈카페 알바를 하고 왔다,,,~ ",movie_image:"https://i.ytimg.com/vi/SOSJ-q-7CRA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyKHdIb-ChBXO1W-wEdDxipdeXmw",movie_video:"https://www.youtube.com/embed/SOSJ-q-7CRA?si=4rN5-WJcFSEz_bpX&autoplay=1&mute=1",movie_like_count:16e4,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2023,month:11,day:3},movie_comments:[{comment_id:451089,comment_body:"아니 애기들 가르치는 입장으로 범규 너무 적성에 맞는 듯 너무 잘 가르침",comment_user_id:"test",comment_user_name:"힛콩"}]},{movie_id:194984,movie_title:"반갑습니다! 올리브영입니다~☺️ 도움 필요하셔도 말씀하지마ㅅ... | 올리브영 알바 | 브링그린 | 지예은 | 워크맨2",movie_body:"오늘은,,,울 잡것덜이,,,많이 추천해준,,,올리브영 다녀왔다,,,~~",movie_image:"https://i.ytimg.com/vi/G_W9pXqnheY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBDxsU7nAsTGRYTlbF0KMQytaNUw",movie_video:"https://www.youtube.com/embed/G_W9pXqnheY?si=_oA8nuXGuR4qASvk&autoplay=1&mute=1",movie_like_count:18e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:9,day:13},movie_comments:[{comment_id:456879,comment_body:"예으니 넘 귀엽다ㅠ",comment_user_id:"test",comment_user_name:"happy123"}]},{movie_id:160084,movie_title:'"고객님 잠시 후에 뵙겠습니다,,,😄" 정신 차려보니 전국일주? 철도 승무원 알바 | 해랑열차 | 승무원 | 아일릿(ILLIT) | 워크맨2',movie_body:"오늘은 해랑열차 알바하고 왔다,,,정말 너무 좋더라고~,,나중에 꼭 가족들과 한번 가보는 거 추천혀~,,,~~!!",movie_image:"https://i.ytimg.com/vi/NCma_qnVu-4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-nlwkuC3KKAdWCGnd99CpNnJj9A",movie_video:"https://www.youtube.com/embed/NCma_qnVu-4?si=9d3llszhrs_lJVXJ&autoplay=1&mute=1",movie_like_count:16e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:10,day:11},movie_comments:[{comment_id:414519,comment_body:"아 보는 내내 너무 행복해서 입꼬리가 내려가질 않네…",comment_user_id:"test",comment_user_name:"xrospo"}]},{movie_id:160978,movie_title:"앞으로 안경 벗는 거 유죄! 살짝 얹기만 했을 뿐인데 갓경 등극😍 | 안경점 알바 | 브리즘 | 보이넥스트도어 이한X운학 | 워크맨2",movie_body:"오늘은,,, 안경점 알바하고 왔다,,,우리 보이넥스트도어,,, 친구들 안경을 얹기만 했는데도 참 멋지더라고,,,,",movie_image:"https://i.ytimg.com/vi/g64d5UPLjFo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDfkOXiFasHnykeFYkAc5ynRSPnGQ",movie_video:"https://www.youtube.com/embed/g64d5UPLjFo?si=QZL7J5gq56Hg-Z4-&autoplay=1&mute=1",movie_like_count:32e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:8,day:30},movie_comments:[{comment_id:410309,comment_body:"아육대 안 나오고 워크맨 찍었다 들었는데 그게 드디어 나왔구만ㅋㅋ",comment_user_id:"test",comment_user_name:"riririr"}]}]},sbs_dali:{channel_id:775460,channel_name:"달리 [SBS DALI] - SBS 공식 교양 채널",channel_nav:"sbs_dali",channel_banner:"https://yt3.googleusercontent.com/sMSp7eIV0sktjQTpjflRyf3q4zDAC1A8UJhz_c9oSdWJGMdg88k6TlxOCS63GyK4WpToo7oX=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/M7XGfxQMxEFeZ5GnnlEEbeuEzeCLs-CGYAtFQQ_I-IsPLttj8P01QJMxXFGKwpuL4eNgiA9F0g=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"SBS 교양 공식채널 달리입니다.",channel_subscribers:108e4,Movies:[{movie_id:100846,movie_title:"[꼬꼬무 148회 요약] 강남역에서 사라지는 청년들, 그들이 빨려들어간 다단계라는 지옥 | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #다단계 #SMK #이광남",movie_image:"https://i.ytimg.com/vi/PQ6eDFLyn4E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD69dTl0SYq9Ls62Q2BZoUAuUKc2A",movie_video:"https://www.youtube.com/embed/PQ6eDFLyn4E?si=vKLy81wGZPPt6WSl&autoplay=1&mute=1",movie_like_count:4700,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:466679,comment_body:"사회초년생 친구들 이 영상 보시고 전형적인 다단계 구조 알아두시면 좋겠네요.",comment_user_id:"test",comment_user_name:"denden"}]},{movie_id:161117,movie_title:"[꼬꼬무 147회 요약] 131명의 사상자, 충분히 막을 수 있었다. 2003 태풍 매미 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송) ",movie_body:"#꼬꼬무 #꼬꼬무요약 #태풍매미",movie_image:"https://i.ytimg.com/vi/aPY7KS0K5NY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBWilX4clPSTGFQS9Ujzmqf5F2ipg",movie_video:"https://www.youtube.com/embed/aPY7KS0K5NY?si=WhJVFOK9_bMl5RK0&autoplay=1&mute=1",movie_like_count:8100,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:18},movie_comments:[{comment_id:93285329,comment_body:"지금까지 살면서 매미가 태풍 중에서 젤 기억에 남음",comment_user_id:"test",comment_user_name:"뎅뎅"}]},{movie_id:194747,movie_title:"[꼬꼬무 146회 요약] 100조 원과 함께 사라진 비트코인의 창시자 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #비트코인 #사토시나카모토",movie_image:"https://i.ytimg.com/vi/42VIq8EW0wU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDEWCHAwhORr80kArOeGZEOP3C6yQ",movie_video:"https://www.youtube.com/embed/42VIq8EW0wU?si=kRlQrubOZqxSEt5t&autoplay=1&mute=1",movie_like_count:6400,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:11},movie_comments:[{comment_id:452229,comment_body:"비트코인은 우리 생활에 자연스럽게 스며들 것입니다.",comment_user_id:"test",comment_user_name:"동동"}]},{movie_id:870084,movie_title:"[꼬꼬무 145회 요약] “형사님, 제가 계급장 한 번 달아 드릴까요?” 허세 속 숨겨진 연쇄살인의 단서 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #의정부연쇄살인사건 #뻥식이사건",movie_image:"https://i.ytimg.com/vi/GAqV_mkqJhU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvDUfeX9mMWvQfdJk9XGe7r0m9SA",movie_video:"https://www.youtube.com/embed/GAqV_mkqJhU?si=Qt2iuH4iTnUd5m8r&autoplay=1&mute=1",movie_like_count:7200,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:4},movie_comments:[{comment_id:784235,comment_body:"꼬꼬무가 끝날 일은 없겟다 ... 하도 많은 사건이 나와서...",comment_user_id:"test",comment_user_name:"popo"}]},{movie_id:333578,movie_title:"[꼬꼬무 144회 요약] 조국의 운명을 짊어진 3인의 특사가 헤이그로 향한 그 날 | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #헤이그특사",movie_image:"https://i.ytimg.com/vi/cS4M7OBprBc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA97bKQ8M3gFRUSRmOXTKtt29xCZg",movie_video:"https://www.youtube.com/embed/cS4M7OBprBc?si=LRN60vPzFQhAIsnE&autoplay=1&mute=1",movie_like_count:2700,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:9,day:27},movie_comments:[{comment_id:958923,comment_body:"헤이그특사라는게 교과서 한줄정도로만기억에남아있는데 이야기로 들으니까 너무 좋네요",comment_user_id:"test",comment_user_name:"lucky12"}]}]},ootbstudio:{channel_id:125424,channel_name:"ootb STUDIO",channel_nav:"ootbstudio",channel_banner:"https://yt3.googleusercontent.com/7K01zQCZpweun9YtKU0wNM9rBotE8TSUE1r3WLMX98AhZ9YeCBApWyHvQbr75uytLWsCrY-uPQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/K74Og8dqtK72UXy-ySJsXMZuMV4M71dCNQmIIOcPkzYHfdHvsUndE31Lbm1znSNVWcffJ_RP=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"Out of the Box! ootb STUDIO (오오티비 스튜디오) 틀을 깨는 시각으로 누구도 경험해보지 못한 신선한 콘텐츠를 만듭니다",channel_subscribers:162e4,Movies:[{movie_id:104216,movie_title:"포항공대 vs 카이스트 맞짱 뜬 썰 푼다 [포항공대 컴퓨터공학과] | 전과자 ep.70 [EN]",movie_body:"코딩 알못 전과자의 코딩 도전🧑‍💻오늘은 포항공대 컴퓨터공학과 다녀옴!",movie_image:"https://i.ytimg.com/vi/-k_Q9Svr7j4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCJu_IUJQ6Y34U-K2FQ8mPHvjrnoA",movie_video:"https://www.youtube.com/embed/-k_Q9Svr7j4?si=BFFkS3KTBcvHcFAY&autoplay=1&mute=1",movie_like_count:19e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:24},movie_comments:[{comment_id:400059,comment_body:"볶음밥 먹는 걸로 코딩 비유한 거 완전 이해 잘 된당",comment_user_id:"test",comment_user_name:"may"}]},{movie_id:162399,movie_title:"동심파괴하는 역대급 동화 발표 [단국대 문예창작과] | 전과자 ep.69 [EN] ",movie_body:"동화 작가 데뷔한 전과자?!✏️ 오늘은 단국대학교 문예창작과 다녀옴!",movie_image:"https://i.ytimg.com/vi/D-xlw07rGEM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAzWam2-YPnpvnms1gKLAQsZCAGcw",movie_video:"https://www.youtube.com/embed/D-xlw07rGEM?si=BgTdxkt5gWSxRT3c&autoplay=1&mute=1",movie_like_count:23e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:17},movie_comments:[{comment_id:488829,comment_body:"동화 진심 천재아님...? 20분도 안되는 시간이 저렇게 구성했다고??????",comment_user_id:"test",comment_user_name:"hannna"}]},{movie_id:177207,movie_title:"식빵언니 김연경이 새내기인 학과 [한국방송통신대 생활체육지도과] | 전과자 ep.68 [EN/ID]",movie_body:"김연경 선수 실물 영접하고 왔습니다..🤭",movie_image:"https://i.ytimg.com/vi/X8COuUKz2K0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHQ38xhEbHipBtK_zQafMJCXmj3w",movie_video:"https://www.youtube.com/embed/X8COuUKz2K0?si=6xtzyaJ1CfJw2szG&autoplay=1&mute=1",movie_like_count:26e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:10},movie_comments:[{comment_id:306429,comment_body:"배움엔 끝이 없다고, 정말 40대 50대. 90대가 되어서도 하려고 하는 거 보니 뭉클합니다",comment_user_id:"test",comment_user_name:"소소한소"}]},{movie_id:8974284,movie_title:"미안하면 씨X 하는 학과 [한국외대 아랍어과] | 전과자 ep.67 [EN]",movie_body:"아랍어 1도 모르는 전과자가 한국외대 아랍어과 다녀옴!",movie_image:"https://i.ytimg.com/vi/Gzs1qNmTcYY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCfIfUsPcPqH92WaJxO8pEXZwPjPQ",movie_video:"https://www.youtube.com/embed/Gzs1qNmTcYY?si=vx02u1zbiOhO0baG&autoplay=1&mute=1",movie_like_count:32e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:3},movie_comments:[{comment_id:781122,comment_body:"아랍어 학생 멘토한 림입니다~이런 멋진 기회를 주셔서 감사합니다! 정말 즐거운 시간이었어요~♡♡",comment_user_id:"test",comment_user_name:"reem"}]},{movie_id:333888,movie_title:"연기 괜찮아요? 많이 놀랐죠? [경희대 연극영화학과] | 전과자 ep.66 [EN]",movie_body:"드디어 전과자도 2학기 개강 완!🏫 오늘은 경희대학교 연극영화학과 다녀옴!",movie_image:"https://i.ytimg.com/vi/sQknHM8unPM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBP-qcUyVxiAqEg2GimMuzqnjDGUg",movie_video:"https://www.youtube.com/embed/sQknHM8unPM?si=Brwk4oDoDT4E0v_h&autoplay=1&mute=1",movie_like_count:33e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:9,day:26},movie_comments:[{comment_id:121114,comment_body:"ㅋㅋㅋㅋㅋㅋㅋ겁나 웃기네 진짜",comment_user_id:"test",comment_user_name:"child22"}]}]},SBSKPOP:{channel_id:2250024,channel_name:"SBSKPOP X INKIGAYO",channel_nav:"SBSKPOP",channel_banner:"https://yt3.googleusercontent.com/oOQHsiZrRMv3jYKY4M7kJsqcBjlXfwf1Wq1X96qsUuYWxY5TdFiNHUewkl8XWmVDvL9uMucUoOc=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/Uxpz5J0EcsFJRbqh4Ip7i3TTNsxTh5jVUxfZmV1DTrCQM_ihfzBGMmkfSRGWoFK9M0anhIie=s160-c-k-c0x00ffffff-no-rj",channel_introduction:" 기존의  Inkigayo인기가요 채널의 확장 버전으로 새롭게 태어난 SBS 공식 디지털 KPOP채널입니다.",channel_subscribers:815e4,Movies:[{movie_id:541236,movie_title:"aespa (에스파) – Whiplash @인기가요 inkigayo 20241027",movie_body:"에스파 - Whiplash #aespa #Whiplash",movie_image:"https://i.ytimg.com/vi/p3kJOuNnkJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw9oGNHqbtjkBlRI0hQU85fe9LCg",movie_video:"https://www.youtube.com/embed/p3kJOuNnkJg?si=fF2ky_2of1fliP6G&autoplay=1&mute=1",movie_like_count:55e3,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:415059,comment_body:"닝닝 너무 예쁘다",comment_user_id:"test",comment_user_name:"fnksif"}]},{movie_id:148399,movie_title:"ITZY (있지) – GOLD @인기가요 inkigayo 20241027",movie_body:"있지 - GOLD #ITZY #GOLD",movie_image:"https://i.ytimg.com/vi/2WNIGv1r5d4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDihD8KUyOdVjxXngpjYFB6KJ4Npg",movie_video:"https://www.youtube.com/embed/2WNIGv1r5d4?si=IU51kHkPu9mZle0s&autoplay=1&mute=1",movie_like_count:12e3,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:487829,comment_body:"So beautiul LIA",comment_user_id:"test",comment_user_name:"hpa012"}]},{movie_id:100680,movie_title:"Billlie (빌리) – Remembrance Candy (기억사탕) @인기가요 inkigayo 20241027",movie_body:"빌리 - 기억사탕 #Billlie #Remembrance_Candy",movie_image:"https://i.ytimg.com/vi/zyzRypp6dbQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9daqmRFj7s35yyO_4dbbctPcyGA",movie_video:"https://www.youtube.com/embed/zyzRypp6dbQ?si=zu-9x2jdhW_w3NDP&autoplay=1&mute=1",movie_like_count:1200,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:302153,comment_body:"이번 컴백무대중에 가장 헤메코 좋다.",comment_user_id:"test",comment_user_name:"딴딴"}]},{movie_id:897124,movie_title:"[단독샷캠4K] 아이브 After LIKE 단독샷 별도녹화│IVE ONE TAKE STAGE @SBS Inkigayo 220828",movie_body:"[단독샷캠4K] 아이브 After LIKE 단독샷 별도녹화│IVE ONE TAKE STAGE @SBS Inkigayo 220828",movie_image:"https://i.ytimg.com/vi/fdzojloPlFA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArt4d22OllBmd1Gfxovdb_lcNuKg",movie_video:"https://www.youtube.com/embed/fdzojloPlFA?si=nQwDPXBvL1pmSExl&autoplay=1&mute=1",movie_like_count:21e4,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2022,month:9,day:1},movie_comments:[{comment_id:125452,comment_body:"I love her voice at 2:25",comment_user_id:"test",comment_user_name:"sias"}]},{movie_id:49386439,movie_title:"[단독샷캠4K] 뉴진스 Ditto 단독샷 별도녹화│NewJeans ONE TAKE STAGE @SBS Inkigayo 230115",movie_body:"[단독샷캠4K] 뉴진스 Ditto 단독샷 별도녹화│NewJeans ONE TAKE STAGE @SBS Inkigayo 230115",movie_image:"https://i.ytimg.com/vi/jUNz-uTF--E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO7YFNY9buWMwRPfy6vHYJkTkWow",movie_video:"https://www.youtube.com/embed/jUNz-uTF--E?si=UDI5QuZOMAiPeC17&autoplay=1&mute=1",movie_like_count:21e4,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2023,month:1,day:19},movie_comments:[{comment_id:184314,comment_body:"뉴진스 곡중에 ditto 진짜 최고야...😢❤",comment_user_id:"test",comment_user_name:"celds22"}]}]},SBSANIMAL:{channel_id:2215544,channel_name:"SBS TV동물농장x애니멀봐 공식 유튜브 채널입니다!",channel_nav:"SBSANIMAL",channel_banner:"https://yt3.googleusercontent.com/jJb9nRaO1XSX7cCyUCWlddsO4VEMAfmKkpUfCKsWSco9VOi0QdUvFeTjUSpt669Xs85CIWp9lw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_profile.jpg?raw=true",channel_introduction:"SBS 동물농장 x 애니멀봐 공식 유튜브 채널입니다! ",channel_subscribers:492e4,Movies:[{movie_id:512236,movie_title:"해외여행 후 빈대걱정 개코가 다 잡아드림 ㅣDo Not Worry About Bedbug After A Trip Anymore",movie_body:"개코개코했지만 빈대냄새까지 찾아내는 검역탐지견들....☆",movie_image:"https://i.ytimg.com/vi/HOGfNYten8c/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCtbjNXF9VEL1nMlZoqVwPY9QJQUA",movie_video:"https://www.youtube.com/embed/HOGfNYten8c?si=k6-fUSnQNNAnXJ4v&autoplay=1&mute=1",movie_like_count:1500,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:10,day:28},movie_comments:[{comment_id:9318122,comment_body:"너무너무 기엽고 눈빛이 영특해욥",comment_user_id:"test",comment_user_name:"bunnie"}]},{movie_id:990159,movie_title:"나는 태어난 지 30일 된 먼치킨 새끼다 [애니멀봐 나새끼 26호]",movie_body:"[나는 새끼다] 26호 새끼 - 먼치킨 - 우리는 태어난 지 30일 된 먼치킨 고양이를 밀착취재 해보았다.",movie_image:"https://i.ytimg.com/vi/E8V02ArInjY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2x9N9Np1o4crItzsX1yA2dek_HQ",movie_video:"https://www.youtube.com/embed/E8V02ArInjY?si=-gZ7rSEfkdHYv1lH&autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2023,month:5,day:16},movie_comments:[{comment_id:464659,comment_body:"심장뿌셔짐",comment_user_id:"test",comment_user_name:"stsgj"}]},{movie_id:100470,movie_title:"쪼꼬미 동물병원 시즌3 1화 (내원환자 : 드워프햄스터 콩콩님)ㅣAnimal Hospital for Tiny Animals 3 Ep 1 (Patient: Dwarf Hamster)",movie_body:"동물농장 전설의 수의사와 함께하는 –쪼꼬미 동물병원- 시즌3 첫번째 내원환자 드워프 햄스터 콩콩이님 들어오실게요",movie_image:"https://i.ytimg.com/vi/d-PV-ScWtB8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDCai2kKXqHqIpaCi-if-Il1SpFQg",movie_video:"https://www.youtube.com/embed/d-PV-ScWtB8?si=fXQ_wjNh_U0VDBRm&autoplay=1&mute=1",movie_like_count:6800,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2023,month:3,day:8},movie_comments:[{comment_id:32948239,comment_body:"햄찌 진짜 순하다 귀여워ㅋㅋㅋ",comment_user_id:"test",comment_user_name:"얌얌"}]},{movie_id:815444,movie_title:"서울 한복판에서 너굴맨 만난 썰 푼다;;ㅣHow I Met Raccoon Man In City Center",movie_body:"서울 한복판에서 산책하다 너굴맨을 만났다?",movie_image:"https://i.ytimg.com/vi/Tkw5NKyCpeU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaQmyb0JA9lGuJehEKCea8snH1Qg",movie_video:"https://www.youtube.com/embed/Tkw5NKyCpeU?si=uG5O3Z2WJPAqR9CJ&autoplay=1&mute=1",movie_like_count:500,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:10,day:7},movie_comments:[{comment_id:106652,comment_body:"썸넬이 너무 귀여워요 ㅠㅠ",comment_user_id:"test",comment_user_name:"bobo"}]},{movie_id:399998,movie_title:"푸바오의 조상님 그때 그 시절 판다들(장꾸력 만렙ㅋㅋ)ㅣFu Bao’s Ancestors. Pandas Back In The Day",movie_body:"판다 덕후 주목! 우유라떼 마시며 들려주는 그때 그 시절 핫한 판다들의 이야기..⭐️ ",movie_image:"https://i.ytimg.com/vi/MlKFeqBIZJs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArU-vHn5ofD3InGBgEJcZGvgZB4w",movie_video:"https://www.youtube.com/embed/MlKFeqBIZJs?si=2twwrn3h4FCtmZRB&autoplay=1&mute=1",movie_like_count:2100,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:9,day:14},movie_comments:[{comment_id:912932,comment_body:"인공수정 너무 잔인하고, 판다가 너무 불쌍하네요..",comment_user_id:"test",comment_user_name:"simsim"}]}]},jindoEre:{channel_id:798311,channel_name:"진돗개 이레",channel_nav:"jindoEre",channel_banner:"https://yt3.googleusercontent.com/byG9tgzrpnpoM2Zu20_WMqX4QjqYX-bxbhPCoJZhFYkPqOtqW1IJPD0FwtoAQMl3dVwlw7ULlg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/UFRAIo6roqbUtvBQuoZ-euDsf5xGnlrUIpKdkLgTk5wzEYPu4ekHgNMjlkC7sGdLp_th0ZB9KUw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"바다건너 돌아와보니, 이레네🐾❤️",channel_subscribers:84700,Movies:[{movie_id:78494,movie_title:"임시보호하는 아기 고양이들, 집이 7번이나 바뀐 이유",movie_body:"#캣타워 #아기고양이 #고양이 #고양이 #아기고양이 #캣타워",movie_image:"https://i.ytimg.com/vi/1qrH9H8GN_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRLzIkZj4Cw7c4wvmFDc_Z3wUKDg",movie_video:"https://www.youtube.com/embed/1qrH9H8GN_s?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:78619,comment_body:"이정도면 임시보호가 아니라 지극히 사심채우기 같은뎈ㅋㅋㄱㅋㄱㅋ",comment_user_id:"test",comment_user_name:"정성희"}]},{movie_id:15965,movie_title:"새끼 고양이와 병원 간 진돗개가 보인 반응",movie_body:" #진돗개 #동물병원 #새끼고양이 #진돗개 #새끼고양이 #동물병원",movie_image:"https://i.ytimg.com/vi/v-vg-2TqDf8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7es255msmnPG80ROxdJmbsCANww",movie_video:"https://www.youtube.com/embed/v-vg-2TqDf8?autoplay=1&mute=1",movie_like_count:2700,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:10,day:9},movie_comments:[{comment_id:11568,comment_body:"엄빠보다 더 초조한 이레보호자💕",comment_user_id:"test",comment_user_name:"god123"}]},{movie_id:156234,movie_title:"강아지 빗질을 못해주면 이렇게 됩니다..😶‍🌫️ #진돗개털갈이",movie_body:"산 운동장에 다녀왔다가 돌아온 날이에요-!⛰️ 아이들도 저희도 일정이 워낙 빠듯해서 일주일 정도 빗질을 못했던 상황인데다 여름에서 가을로 넘어가는 시기여서 털갈이 성수기였던 게 한몫한 영상인 점 꼭 기억해주세요!ㅎ",movie_image:"https://i.ytimg.com/vi/UxT7nY1p7V0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTLwAAkXE8jWXlTvQ-CsKmBJVHyg",movie_video:"https://www.youtube.com/embed/UxT7nY1p7V0?autoplay=1&mute=1",movie_like_count:2500,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:1,day:19},movie_comments:[{comment_id:654935,comment_body:"어쩜 아이들이 서로 싸우지도 않으면서 각자 편안한 자세로 꿈나라로 고고~~",comment_user_id:"test",comment_user_name:"반야심"}]},{movie_id:357416,movie_title:"유기견이 스스로 우리집에 들어왔다.🐕‍🦺 구조자를 직접 고른 버려진 개의 이야기",movie_body:"곱슬이는 빠삐용의 ’삐용‘이란 이름을 갖게 되었어요. 그리곤 심장사상충 치료를 시작했었답니다.",movie_image:"https://i.ytimg.com/vi/hbxzkJ62zVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAwiqLlDqC2LaXQMB35ZKzVdj4aQ",movie_video:"https://www.youtube.com/embed/hbxzkJ62zVI?autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2023,month:12,day:26},movie_comments:[{comment_id:152722,comment_body:"삐용이 입양하신 이웃분도 너무 멋지셔요. ",comment_user_id:"test",comment_user_name:"애옹이사랑"}]},{movie_id:220045,movie_title:"얘들아.. 아빠 생일이라구ㅠㅋㅋㅋ (진돗개)",movie_body:"이레아빠의 생일파티는 어때보이나요?ㅠㅎ '다견가정'스럽게(?) 보낸 개아빠의 생일파티(?)...😂",movie_image:"https://i.ytimg.com/vi/nRV6SKGq3lQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD855jOPKms3gDj2S5aQdFaAejN0Q",movie_video:"https://www.youtube.com/embed/nRV6SKGq3lQ?autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2023,month:10,day:18},movie_comments:[{comment_id:448861,comment_body:"아가들 완전 귀요미들~~~ 대환장파티~~ 아빠 생일인데 아가들이 더 신났네요~ 개귀엽당",comment_user_id:"test",comment_user_name:"김지혜"}]}]},shoppingMom:{channel_id:660495,channel_name:"쇼핑맘",channel_nav:"shoppingMom",channel_banner:"https://yt3.googleusercontent.com/DTgCPAH4K8MxbMYGrLtQVum6D_1Ys3iU868mDeH_CalsqdGKL9Ou99teL7z7V8g1Y8p3-mAfZL8=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/xGX7RIjkTR3P1BMX24icwwHiJJ6WYK-BJpb5tTHMecKalm2fsGjAc2xTQA3davbeUVIFW6wR=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"⬇️⬇️⬇️영상 속 제품 링크🩷⬇️⬇️⬇️ 진지하게 살림을 합니다. 리뷰 영상에 진심을 담습니다 :)",channel_subscribers:10600,Movies:[{movie_id:6738049,movie_title:"쿠팡에서 내가 꿈꾸던 실용적인 팬트리 셋업 17가지ㅣ쿠팡에서 살 수 있는 가성비 최고의 정리 제품ㅣ주방투어ㅣ주방 꾸미기ㅣ최저가ㅣ가성비다모았다ㅣ좁은주방ㅣ앵글활용100%ㅣ설치방법",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/clvV6sG6i1Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD83S70mJQ-shHwJlR3ef4BJ3VT2w",movie_video:"https://www.youtube.com/embed/clvV6sG6i1Y?autoplay=1&mute=1",movie_like_count:544,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2023,month:9,day:21},movie_comments:[{comment_id:116101,comment_body:"좋았어! 이제 집만 넓어지면 되겠어요!!😂ㅋㅋㅋㅋㅋㅋㅋ",comment_user_id:"test",comment_user_name:"golldd_d"}]},{movie_id:167205,movie_title:"쿠팡 정리 추천템 | 살림이 행복해지는 수납 정리 아이템 | 주방정리 꿀템 | 잡동사니 정리 꿀팁 | 분리수거 방법 꿀팁",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/VD33utJraE0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE97KxtNBTDfX8fqCp1XYRAGf5Hw",movie_video:"https://www.youtube.com/embed/VD33utJraE0?autoplay=1&mute=1",movie_like_count:2500,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:3,day:9},movie_comments:[{comment_id:7046458,comment_body:"저 오늘 이사가기전에 집 정리한다고 절반 정도 집 엎었는데 너무 제 모습을 보는 것 같아요😂😂😂",comment_user_id:"test",comment_user_name:"yshans"}]},{movie_id:106478,movie_title:"리뷰 수천개씩 보는 주부가 직접 검증한 쿠팡 추천템 | 내 손으로 검증한 찐 추천템 | 품절되기전 사야템 | 삶의질 수직상승 | 재재구매 꿀템 | 청소 정리 꿀템 | 알리공구예고",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/SObd7CMcp3c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2VdiYZb211K5gz3R6nBkVEzj1sg",movie_video:"https://www.youtube.com/embed/SObd7CMcp3c?autoplay=1&mute=1",movie_like_count:376,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:5,day:25},movie_comments:[{comment_id:7945154,comment_body:"이염방지시트는 세탁시에만 넣나요? 세탁과 건조기에도 넣어도 되나요?",comment_user_id:"test",comment_user_name:"장뽕뽕"}]},{movie_id:478513,movie_title:"리뷰 몇천개씩 보는 주부가 고른 쿠팡 살림 추천템 13가지 | 요즘 SNS 난리난 바로 그 제품! | 입고후 즉시품절 | 품절대란 생활 꿀템 | 삶의질 수직상승 | 내돈내산",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/A7NzGlfUtYc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcn9tdUw1T0ZstSZCjjrxnYK9yWQ",movie_video:"https://www.youtube.com/embed/A7NzGlfUtYc?autoplay=1&mute=1",movie_like_count:2100,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:2,day:9},movie_comments:[{comment_id:516151,comment_body:"설명 꼼꼼하게, 듣기 편하게 잘하시네요~ 개인적으로 꿀템 소개영상 중 제일 보기 좋은 영상이었음",comment_user_id:"test",comment_user_name:"flying_witch6527"}]},{movie_id:1583085,movie_title:"쿠팡 품절되기 전에 구매하세요!! | 완벽한 삶의 질 상승템 | 디자인부터 기능까지 다 갖췄다 | 예쁘고 실속있는 쿠팡 살림템  | 내돈내산템",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/iaOjF9aCcK0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsemOpqXLzAgFhU4E_fEAJiQ7Rsw",movie_video:"https://www.youtube.com/embed/iaOjF9aCcK0?autoplay=1&mute=1",movie_like_count:757,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:3,day:16},movie_comments:[{comment_id:111504,comment_body:"유익한정보감사해요 거실카펫.건식욕조러그두추천해주셈",comment_user_id:"test",comment_user_name:"신나라신나라"}]}]},mamu_vlog:{channel_id:201864,channel_name:"mamu마므",channel_nav:"mamu_vlog",channel_banner:"https://yt3.googleusercontent.com/lArY9lbEFU12URnCHfvsQ8d1KaktdkJ5AbCSL0FnyRWws8GMkTBIFlWRzzQAGpyZxXFDpV9Iew=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/B9AkXHC7chFdQHNhcOhBCXObehilWrpfB_ysDi1cyvj7C9GLkkJcuBlwSMol6KpPu7Jw0LsEjoc=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"instagram | @mma_muu email | morningood9922@gmail.com",channel_subscribers:35900,Movies:[{movie_id:4506901,movie_title:"5평 방을 호텔처럼 꾸미기‧₊˚☁️ 셀프인테리어 | 타일카페트 시공✂️ | 모듈 가구 | 6단 북선반 | 책꽂이 | 미니 다육이",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/HxCRe7uDyAM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXHa2B_7ErgdIARsosiKMleOWuvw",movie_video:"https://www.youtube.com/embed/HxCRe7uDyAM?autoplay=1&mute=1",movie_like_count:21e3,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2023,month:12,day:31},movie_comments:[{comment_id:101054,comment_body:"저도 이사할때  회색 타일 카페트를 깔았는데요 퇴근하고 청소기 + 돌돌이해도 먼지가 날리고 비염이 생겼어여. 비염이 있으시면 좋았을텐데 봐도바도이뿌녀요 ㅠㅡㅠ",comment_user_id:"test",comment_user_name:"왕왕우왕"}]},{movie_id:412321,movie_title:"vlog. 일만 하는 브이로그🔥, 쇼핑몰 사장의 일상 | 피곤하지만 재밌어 | 매일 시장가다가 삼촌 써봄 | 필인더블랭크 가방 | 달라진 사무실 | 바디스크럽 추천",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/1_35QO9UVYk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWCnBcp3_BQyr5qfYReTl24QLGcg",movie_video:"https://www.youtube.com/embed/1_35QO9UVYk?autoplay=1&mute=1",movie_like_count:1600,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:8,day:19},movie_comments:[{comment_id:794861,comment_body:"하 마므님 기다리다가 기린 목 됐어요.. 목 빠지는 줄 알았어요 ♥",comment_user_id:"test",comment_user_name:"콩시크릿쥬쥬"}]},{movie_id:575156,movie_title:"vlog. 일상 브이로그, 포장지옥📦 | 용산 데이트 (브런치, 키보드 구경, 닭한마리 맛집) | 롯데백화점 라운지 5초 체험기",movie_body:"✧outer 누이어 - 리프 스웨이드 하프 자켓",movie_image:"https://i.ytimg.com/vi/cYhMT9pX4xU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhPCxa09mVABS-h_j1igycOjKY8A",movie_video:"https://www.youtube.com/embed/cYhMT9pX4xU?autoplay=1&mute=1",movie_like_count:6200,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:8940984,comment_body:"요거트에 토마토 맛나 보여요 🤍",comment_user_id:"test",comment_user_name:"나는야 분노핑"}]},{movie_id:360324,movie_title:"vlog. 일상 브이로그, 쇼핑몰 열심히 해나가기🔥 | 썸웨어버터 선물&아디다스 스페지알 언박싱 | 네일하고 혼밥과 카공 | 메디힐 당근패드로 피부 정리하기",movie_body:"메디힐 당근 수분 진정 패드",movie_image:"https://i.ytimg.com/vi/HE89T9XNew0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACaE1cGETg6z4yENTleWBsaq1opg",movie_video:"https://www.youtube.com/embed/HE89T9XNew0?autoplay=1&mute=1",movie_like_count:1600,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:8,day:19},movie_comments:[{comment_id:491304,comment_body:"실버 가방 취저에요! 아디다스 스페지알 탐나요 🤍",comment_user_id:"test",comment_user_name:"vlog8852"}]},{movie_id:242685,movie_title:"vlog. 오픈 2주차 일상 브이로그, 초보사장 냄새난다 | 구독자분께서 주신 선물 | 아디다스 신발 언박싱 | 매일 가는 동대문 시장 | 포장검수하고 촬영하기",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/WNBeisZs5xk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfkivid92jAq4QOyFIkfYDXKnY3w",movie_video:"https://www.youtube.com/embed/WNBeisZs5xk?autoplay=1&mute=1",movie_like_count:1800,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:3,day:22},movie_comments:[{comment_id:404658,comment_body:"마므님이라면 조립하는거 올릴거 같아서기다리고 있었어요 ! 영상 꾸준히 올려주셔서 감사합니당 트롤리 보면서 제 생각도 1년에 한번씩 해주세여",comment_user_id:"test",comment_user_name:"김민정하튜"}]}]},moozzi:{channel_id:904206,channel_name:"무찌",channel_nav:"moozzi",channel_banner:"https://yt3.googleusercontent.com/_c2vXh4oFCHaqxOTehNhs-WLCTuzATSHTJ5fiQDz4E4tbBFsXwliKoXo00K_Xmyt_YmpZZCPYQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/lK7Y9eC82RAXumtR3OPo2HKuHKbJ3obt-WPpAh9sxfo2oPfu55qveLKBSwHva4wRSOEOWwJcK9A=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"무쌍 뷰티의 모든 것💜 🔗@mo.ojji_",channel_subscribers:164e3,Movies:[{movie_id:760806,movie_title:"메이크업 아티스트 쌤들이 만든 제품으로 샵 퀄리티 메이크업 따라해보면?!🤔 과연 좋을까..? / 애교살 꿀템",movie_body:"오늘은 최근에 업로드 했던 릴스&쇼츠에서 가장 예쁘다고 해줬던 쿨톤메이크업 버전 들고왔지롱 ,, ✩",movie_image:"https://i.ytimg.com/vi/wwX_ObHl3pc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBqgUdn0sDe0Vr2p_nFYBEJ6Kv3g",movie_video:"https://www.youtube.com/embed/wwX_ObHl3pc?autoplay=1&mute=1",movie_like_count:711,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:9,day:22},movie_comments:[{comment_id:354605,comment_body:"얼굴이 이뻐서 다 커버되는 언니…😍",comment_user_id:"test",comment_user_name:"Woosigke"}]},{movie_id:1026381,movie_title:"추천템에 진심인;; 사람이 추천하는 쿠팡&올영 올타임 레전드 템 모음집💰(다이어트템, 여름 겨드랑이 관리템)",movie_body:"무찌픽 향수인 슈가 플로럴이 지금 #올리브영에서 할인 중이니 얼른 달려가봐 🍑",movie_image:"https://i.ytimg.com/vi/h0PMQw54tWA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvfvIMDZazcOFUyWSEaKWuOZwbKA",movie_video:"https://www.youtube.com/embed/h0PMQw54tWA?autoplay=1&mute=1",movie_like_count:1800,movie_category:"shopping",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:6,day:10},movie_comments:[{comment_id:451054,comment_body:"!!헉 카메라 두개쓰셔서 실제색상 보여주셔서 감사해욤❤무찌 정성 무쳣다!!",comment_user_id:"test",comment_user_name:"__daebbanggg"}]},{movie_id:659056,movie_title:"No 마스카라‼️ 요청 폭발한 내추럴 아이 메이크업 (진짜 10분컷)",movie_body:"영상에 나온 네이밍 레이어드 핏 쿠션 리필 기획과 색감 뽀용한 플러피 파우더 블러쉬가 할인하니 궁금하신 분들은 아래 링크에서 확인 해주세요(✿◡‿◡)",movie_image:"https://i.ytimg.com/vi/jUZlsfv6XwI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArcAArMUXvWKVjTV_xxvqdDKIAsA",movie_video:"https://www.youtube.com/embed/jUZlsfv6XwI?autoplay=1&mute=1",movie_like_count:1100,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:1,day:28},movie_comments:[{comment_id:113155,comment_body:"근데 에스쁘아 오트라떼 단종소식...ㅜㅜㅜ😢😢",comment_user_id:"test",comment_user_name:"@jyeon."}]},{movie_id:1054604,movie_title:"서핑 이렇게 재밌다고? 🌊양양으로 떠난 데이뉴 소속사 네트워킹 | 여름 휴가☀️",movie_body:"무찌에용💖 오늘은 제 소속사 데이뉴에서 1박 2일 네트워킹을 양양으로 다녀왔어요!!",movie_image:"https://i.ytimg.com/vi/rBEzFMUk1G4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1WHvPnLlJur92nREN1ZQ-KCRN1Q",movie_video:"https://www.youtube.com/embed/rBEzFMUk1G4?autoplay=1&mute=1",movie_like_count:243,movie_category:"vlog",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2023,month:7,day:22},movie_comments:[{comment_id:546515,comment_body:"헐 웅니 찐으로 웃는 거 처음 보는 것 같은데 넘짱짱 귀여운 거 아닌가여 😭😍",comment_user_id:"test",comment_user_name:"usekadns"}]},{movie_id:305135,movie_title:"무쌍이 따라해보는 카즈하,아린님 st 토끼상🐰 메이크업 (신상템 가득🔥)",movie_body:"원래 제목은 '얼굴에 토끼 1도 없는데 저도 토끼가 될 수 있나요..? ' 이였던 메이크업 영상...",movie_image:"https://i.ytimg.com/vi/hKtoxxWf5cE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9iAguipmx4W7NvR4ZXdrLkyLQjg",movie_video:"https://www.youtube.com/embed/hKtoxxWf5cE?autoplay=1&mute=1",movie_like_count:498,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2023,month:2,day:23},movie_comments:[{comment_id:4604648,comment_body:"무찌님 덕에 누드밀크티 사고 인생 메이크업 완성했습니다..❤️‍🔥 ",comment_user_id:"test",comment_user_name:"minio_oi"}]}]},Or7r2l:{channel_id:806540,channel_name:"아가리어터",channel_nav:"Or7r2l",channel_banner:"https://yt3.googleusercontent.com/LlkjnLTQEfDyOSWelXnV_4XJb-EethG3Dfc92JvZJnLlnaHufmM6QVx_y9GLyf9Qc3As9QlpngA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/pjlMeWVK6071iovFtndMKIZk3mSZ5fV8YYZJcNx0_3YmXPmr0a2oPYjv3Z8EIFbfkHc2fFRxog=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"[노말] 말이 안 되다",channel_subscribers:38e4,Movies:[{movie_id:446545,movie_title:"인팁걸 공주걸과 세부에서 살아남기",movie_body:"안녕 얘들아 나는 아가리어터야 ",movie_image:"https://i.ytimg.com/vi/JMcR6_-O92M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD41hQEZ2q94T492JrTGiBIbd3ISg",movie_video:"https://www.youtube.com/embed/JMcR6_-O92M?autoplay=1&mute=1",movie_like_count:3400,movie_category:"travel",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:10,day:21},movie_comments:[{comment_id:848484,comment_body:"가리걸 무서워도 도전 해보는 용기 너무 멋잇잔아~~ 가리업 가리업~",comment_user_id:"test",comment_user_name:"ttoiiiiii"}]},{movie_id:651654,movie_title:"인생썰 풀면서 겟레디윗미",movie_body:"(최대 혜택가) 25,000원에 5G 무제한 놓치지 마세요😘 ",movie_image:"https://i.ytimg.com/vi/ohi235S5-yU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAySptXPFI04GhWZ9tqsJHsIdneXw",movie_video:"https://www.youtube.com/embed/ohi235S5-yU?autoplay=1&mute=1",movie_like_count:3900,movie_category:"makeup",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:10,day:16},movie_comments:[{comment_id:198315,comment_body:"아니 썸넬 미쳤냐고요 깜이가 놀이;;; 미모베리 미가 쳤어요;;;",comment_user_id:"test",comment_user_name:"내인생이거든"}]},{movie_id:440845,movie_title:"혼자 급발진으로 떠난 대만여행",movie_body:"🌎호텔스컴바인 대만 타이베이 최.저.가. 기획전🌎 ",movie_image:"https://i.ytimg.com/vi/qf42eT5OIPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLA5mZrnz7iaaJi7nNK3DOz7z2Bw",movie_video:"https://www.youtube.com/embed/qf42eT5OIPs?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"travel",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:6,day:6},movie_comments:[{comment_id:8751516,comment_body:"언니 피부관리 루틴 당장 공개해조요 제발",comment_user_id:"test",comment_user_name:"rlarladd"}]},{movie_id:684156,movie_title:"먹고 마시고 깔깔대다가 아침이야..",movie_body:"💚시카지우개패드 단품 9,900원💚 가성비가 걍 미치셨어요",movie_image:"https://i.ytimg.com/vi/5BKkxdp8NqU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbJJdL1emlgUB3HjvFzdV2zpCWcg",movie_video:"https://www.youtube.com/embed/5BKkxdp8NqU?autoplay=1&mute=1",movie_like_count:2500,movie_category:"vlog",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:2,day:16},movie_comments:[{comment_id:110002,comment_body:"빨리 보고 싶어서 사회적 체면 포기하고 버스에서 웃참쇼 미쳐버려~~",comment_user_id:"test",comment_user_name:"Moall_al"}]},{movie_id:200235,movie_title:"퇴사하고 에버랜드 가기",movie_body:"👄인스타 놀러오세요👄",movie_image:"https://i.ytimg.com/vi/OTNFiUeq7u0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-k1Px3ZJYHZmrs3Ss2XXsAhkWMA",movie_video:"https://www.youtube.com/embed/OTNFiUeq7u0?autoplay=1&mute=1",movie_like_count:3e3,movie_category:"vlog",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2023,month:3,day:22},movie_comments:[{comment_id:3304558,comment_body:"환장의 나라 에버랜드에 오신걸 환영합니다. 팬입니다.",comment_user_id:"test",comment_user_name:"모르는지idontknowji"}]}]}},$w={Channel:JSON.parse(localStorage.getItem("YoutubeChannel"))||qw,allMovies:JSON.parse(localStorage.getItem("YoutubeAllMovies"))||[]},Qp=Mo({name:"channelSlice",initialState:$w,reducers:{ChangeChannelInfo(e,t){localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewChannel(e,t){const{user_id:n,user_name:r,user_email:o}=t.payload,i=o.split("@")[0],s={channel_id:n,channel_name:r,channel_banner:"https://via.placeholder.com/1280x200",channel_image:"https://via.placeholder.com/160x160",channel_introduction:`안녕하세요 ${r} 채널 입니다.`,channel_subscribers:0,channel_nav:i,Movies:[]};e.Channel[i]=s,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewMovies(e,t){const n={movie_id:Math.floor(Math.random()*999999),...t.payload};e.Channel[t.payload.movie_channel].Movies.push(n),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},DelMovies(e,t){const{channel_name:n,movie_id:r}=t.payload,o=e.Channel[n];o.Movies=o.Movies.filter(i=>!r.includes(i.movie_id)),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},ChangeMovies(e,t){localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewMoviesComment(e,t){const{movie_id:n,movie_channel:r,comment_body:o,comment_user_id:i,comment_user_name:s}=t.payload,a={comment_id:Math.floor(Math.random()*99999),comment_body:o,comment_user_id:i,comment_user_name:s};e.Channel[r].Movies.find(u=>u.movie_id===n).movie_comments.push(a),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},DelMoviesComment(e,t){const{movie_id:n,movie_channel:r,comment_id:o}=t.payload,s=e.Channel[r].Movies.find(a=>a.movie_id===n);s&&(s.movie_comments=s.movie_comments.filter(a=>a.comment_id!==o)),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},IsMovieChangeLike(e,t){const{channel_name:n,type:r,movie_id:o}=t.payload,s=e.Channel[n].Movies.find(a=>a.movie_id===o);r==="plus"?s.movie_like_count+=1:s.movie_like_count-=1,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},IsMovieChangeSubscriber(e,t){const{channel_name:n,type:r}=t.payload,o=e.Channel[n];r==="plus"?o.channel_subscribers+=1:o.channel_subscribers-=1,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},getAllMovies(e){e.allMovies=[],Object.keys(e.Channel).forEach(t=>{e.allMovies.push(...e.Channel[t].Movies)}),localStorage.setItem("YoutubeAllMovies",JSON.stringify(e.allMovies))}}}),{ChangeChannelInfo:d2,AddNewChannel:Ww,AddNewMovies:Vw,DelMovies:Hw,ChangeMovies:m2,AddNewMoviesComment:Kw,DelMoviesComment:Gw,IsMovieChangeLike:rm,getAllMovies:Ft,IsMovieChangeSubscriber:Zp}=Qp.actions,Yw=Qp.reducer,Xw={isSubscribers:!1,thisChannel:null},eg=Mo({name:"subscribersSlice",initialState:Xw,reducers:{isSubscribersTrue(e,t){e.isSubscribers=!0,e.thisChannel=t.payload},isSubscribersFalse(e){e.isSubscribers=!1,e.thisChannel=null}}}),{isSubscribersTrue:Jw,isSubscribersFalse:Na}=eg.actions,Qw=eg.reducer,Zw=()=>{const e=se(),{isLoginUser:t}=I(o=>o.auth),{thisChannel:n}=I(o=>o.subscribers),r=$n(()=>e(Na()));if(n)return l.jsxs(Uw,{id:"subscript-popup",className:"popup-box",children:[l.jsxs("p",{className:"popup-title",children:[n==null?void 0:n.channel_name," 구독을 취소하시겠습니까?"]}),l.jsxs("div",{className:"popup-btns",ref:r,children:[l.jsx("button",{className:"popup-close",onClick:()=>e(Na()),children:"취소"}),l.jsx("button",{className:"popup-subscript-end",onClick:o=>{o.stopPropagation(),e(Na()),e(gt(`${n.channel_name} 채널 구독 취소`)),e(xw({user_id:t.user_id,channel_id:n==null?void 0:n.channel_id})),e(Zp({channel_name:n==null?void 0:n.channel_nav,type:"minus"}))},children:"구독 취소"})]})]})},tg=()=>{const{isSideMenu:e}=I(o=>o.header),{isSubscribers:t}=I(o=>o.subscribers),{isSavePop:n}=I(o=>o.savepop),r=se();return C.useEffect(()=>{t&&document.querySelector("#subscript-popup").showModal()},[t]),C.useEffect(()=>{const o=setTimeout(()=>{r(Ew())},1e3);return()=>clearInterval(o)},[n]),l.jsxs(l.Fragment,{children:[l.jsx(Zw,{}),n&&l.jsx(Dw,{left:e?"28rem":"4rem"})]})},eb=()=>{const e=$();return l.jsxs("ul",{className:"menu-list",children:[l.jsxs("li",{className:"btn-item",onClick:()=>e("/"),children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Home_menu.svg",alt:"Home"}),l.jsx("p",{className:"btn-name",children:"홈"})]}),l.jsxs("li",{className:"btn-item",onClick:()=>e("/feed/Playlist"),children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Play_list.svg",alt:"Playlist"}),l.jsx("p",{className:"btn-name",children:"재생목록"})]}),l.jsxs("li",{className:"btn-item",onClick:()=>e("/subscription"),children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Subscription_menu.svg",alt:"Subscription"}),l.jsx("p",{className:"btn-name",children:"구독"})]}),l.jsxs("li",{className:"btn-item",onClick:()=>e("/mypage"),children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/Account.svg",alt:"myPage"}),l.jsx("p",{className:"btn-name",children:"내페이지"})]})]})},tb=()=>l.jsx(i1,{className:"mobile",children:l.jsx(eb,{})}),nb=()=>{const e=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return l.jsx("div",{className:"scroll_up",onClick:e,children:l.jsx("button",{className:"scroll_up_btn"})})},rb=()=>{const{isSideMenu:e}=I(n=>n.header),{pathname:t}=Oo();return C.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),l.jsxs(t1,{children:[l.jsx(Jp,{}),l.jsxs("div",{className:"content-wrap",children:[e&&l.jsx(Mw,{}),l.jsx(ep,{}),l.jsx(nb,{})]}),l.jsx(tg,{}),l.jsx(tb,{})]})},ob=[{id:350982352,name:"대시보드",type:"Dashboard",nav:"/dashboard",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAPpJREFUaEPtWEEOwjAM834GL0O8DH4GFAkJlWpRwDHr5F56WOfFTpy2WzD5WCaPHybw7ww6A1vOwAHACUCbM+MK4Px4r83vg433xF4rocsXwb8CbsEfOwJsvJDALSP7YG0vDhvPBKIEOQOdQkO/rpmYXbNsPHvAHogUsAeSCvXLd9dGpz9KyA9zJX37x7L8eF25kbFjl29kJjBSQHmhkZuY/UF5G2XXbElXU/5WMYGsiacvIbaJ5SXE7hpyAuwPsvHkRwkTyHYhtmJsPJdQtE/s7k7sEsqamL2RsfFCE7OPEmy8kEBk0k08V94HSgibQImsCVBnICFWydI7IJtYMWeTFLgAAAAASUVORK5CYII="},{id:51294102,name:"동영상 업로드",type:"VideoUpload",nav:"/videoupload",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAU1JREFUaEPtWNsNwjAMdDeDyYDJYDPoSbXUVnm5jpsaOV9I1I7vzo8kEzlfk/P4KQCMVjAUCAWUDEQKKQlUm/+tAjcieiz04Lf1es0bPI9sklPge8RZB5s7EX0kflIAwASzL/HV41sEDxDNKwVgFPsI2gSAdaHvCSvth+zY1EqLAlcB8J4VQkPZxNMTgITJdY7X7Lgjcjd0BQBBg/n1cgMg1w1dACi18ssDQCstTf/LA6gNMTUA7aDbdz6pvwAgZWyfEqFAdigsf9QmY67IetmZF7E1AFxuSsd5dRFbA0CArgcZM+z6KMEqp0C4SKF1mp52nK51D23tsBpmClgDgP+mKyVf3Y4GpLUTXWFTH48EIH7gSgFIXeO0rLbai9iH09oTxhkPXPwSB/ZFr3I1AK2sDf1OLNnQaBObB4DRioQCoYCSgUghJYFqc/cK/ABFEVUxJ47WSgAAAABJRU5ErkJggg=="},{id:2092345023,name:"콘텐츠",type:"Content",nav:"/content",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAATlJREFUaEPtmGEOwjAIhdnN9GTqyfRmWpJtce0qhQm0Sn+ZtA6+91rWMcHgYxo8fwgAbwelDpwA4DInj7+1xy0FuO4FkQI8tTOuPP8MAI/3OQkAKrGob82BySPEOiQAXupj0ioAEhE4zuWCbeJJgn98ICezxrUBkAv1tw5IwbvZQgEw72W3KmTmABWImq9VR5X/7b0HqEDU/PAAR68auajsKkQpzJ1vfOFW72cBwLI0XbWH30LDH+IAyBQwP8ThQDiQKcAto9wXF7W+mzNAJSo6O5aXuQBo/aChLmv31GCy6IfWHCO/yHoGKJq8kjOA6qMLHqPIVwKwJG7V5F260aj+pjONiRwB8HCgiBkA3jb8pAPWdV7S4q92AHBieADrOv91B6zrvBqAd4Fpin+IvimC8qIAUBaYfPwLQhdrMcO6YW4AAAAASUVORK5CYII="},{id:2305932021,name:"댓글",type:"Comment",nav:"/comment",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAS5JREFUaEPtWdEOgjAMLH+mX6b+GX+mNnEGRkfadaRdcnsykY273u0GZaHJxzI5fgKBaAVbCtyI6PEDx7+jx+sL4CmBaBF4RyNu3P9OROv2P4kAMy3Vz8aDwTOJ/5AIZK0+g+4iEJ1UdUF3eDQKgIBzI0EBWCirhUbHrfZQHZZCIFBZCwqUgpzmrnND9kzHOYBzoMc3mzmXWag3Rq2KgoA2n7VOgQLWV0prxbRKaK+7bA9oAXivAwFYyOkhWKi2UHTnzvVGFg3+0OTVNrZKtzq6U33AqyHArCObvaUbzTh2nWkOBw0BKUR4IXFBZ+KYp/cQaH5sMN99wAQrgVTgLRZKY5laNI0C6apueZxODf7MQmkto7EQn7biJ80BoTF8iehHZTchEHCX0LnA9Ap8AFRvXTEkWgnRAAAAAElFTkSuQmCC"}],ib=()=>l.jsx("ul",{className:"studiomenu-list",children:ob.map(e=>l.jsx(jo,{...e},e.id))}),sb=()=>{const{Channel:e}=I(r=>r.channel),{isLoginUser:t}=I(r=>r.auth),n=Object.values(e).find(r=>r.channel_id===Number(t.user_id));return l.jsxs(jp,{children:[n&&l.jsxs("div",{className:"channel",children:[l.jsx("div",{className:"channel-img-wrap",children:l.jsx("img",{src:n.channel_image,alt:n.channel_name})}),l.jsxs("div",{className:"channel-name",children:[l.jsx("p",{className:"my-channel",children:"내 채널"}),l.jsx("p",{className:"my-channel-name",children:n.channel_name})]})]}),l.jsx(ib,{})]})},ab=()=>{const{isSideMenu:e}=I(r=>r.header),{isAuth:t}=I(r=>r.auth),n=$();if(C.useEffect(()=>{t||n("/login")},[]),t)return l.jsxs(n1,{children:[l.jsx(Jp,{}),l.jsxs("div",{className:"content-wrap",children:[e&&l.jsx(sb,{}),l.jsx(ep,{})]}),l.jsx(tg,{})]})},as=()=>l.jsx(r1,{children:l.jsx("div",{className:"spinner","aria-label":"spinner-icon",children:l.jsx("div",{className:"spinner-circle"})})}),lb=()=>{const e=$();return C.useEffect(()=>{setTimeout(()=>{e("/")},3e3)},[]),l.jsxs(o1,{children:[l.jsx("p",{className:"not",children:"잘못된 접근 입니다."}),l.jsx(as,{})]})},cb=B.ul`
    max-height: 24rem;
    .subscribers {
        font-size: 1.4rem;
        color: #666;
    }
    .subscribers-count {
        font-size: 4rem;
    }
`,ub=B.ul`
    max-height: 46rem;
`,db=B.li`
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
`,mb=B.ul`
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
`,fb=B.div`
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
`,hb=B.div`
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
`,pb=B.div`
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
`,ng=({comment:e,thisChannel:t})=>{const n=t.Movies.find(s=>s.movie_comments.find(a=>a.comment_id===e.comment_id)),r=$(),o=["var(--youtube-red)","skyblue","green","orange","pink"],i=o[Math.floor(Math.random()*o.length)];return l.jsxs(db,{className:"comment-item",onClick:()=>r(`/watch/${n.movie_id}`),userColor:i,children:[l.jsxs("div",{className:"comment-text-wrap",children:[l.jsxs("div",{className:"user",children:[l.jsx("span",{className:"user-profile",children:e.comment_user_name.charAt(0)}),l.jsxs("span",{className:"comment_user_name",children:["@",e.comment_user_name]})]}),l.jsx("p",{className:"comment_body",children:e.comment_body})]}),l.jsx("div",{className:"comment-img-wrap",children:l.jsx("img",{src:n.movie_image,alt:"Movie-image"})}),l.jsx("div",{className:"comment_title-wrap",children:n.movie_title})]})},gb=()=>{const{User_ID:e}=Ct(),{Channel:t}=I(s=>s.channel),{isAuth:n}=I(s=>s.auth),r=Object.values(t).find(s=>s.channel_id===Number(e)),o=r.Movies.flatMap(s=>s.movie_comments),i=$();return C.useEffect(()=>{n||i("/")},[n]),l.jsx(fb,{children:l.jsxs("div",{className:"inner",children:[l.jsx("h2",{className:"studio-title",children:"채널 댓글"}),l.jsx("div",{className:"comment-nav-bar",children:l.jsx("p",{className:"comment-tab",children:"댓글"})}),l.jsx("ul",{className:"comment-list",children:o.map(s=>l.jsx(ng,{comment:s,thisChannel:r},s.comment_id))})]})})},vb=B.li`
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
        min-width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        margin-right: 1rem;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .movie_title {
        /* 11/12 김혜림 부분 수정 */
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
    @media ${V.mobile} {
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
                    /* 11/13 오후 김혜림 부분 수정 */
                    font-size: 2.6rem;
                }
                .mobile {
                    width: 100%;
                    display: flex;
                    color: #666;
                    /* 11/13 오후 김혜림 부분 수정 */
                    font-size: 2rem;

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
                        max-width: 28rem;
                        text-overflow: ellipsis;
                        word-break: keep-all;
                        display: inline-block;
                        white-space: nowrap;
                        margin-right: 1rem;
                        position: relative;
                        overflow: hidden;
                        padding-right: 1rem;
                        &::after {
                            content: '';
                            display: block;
                            position: absolute;
                            right: 0rem;
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
            .plus-menu {
                right: 1rem;
            }
        }
    }
`,_b=[{id:76165159843,falseName:"나중에 볼 동영상 저장",trueName:"나중에 볼 동영상 삭제",type:"Later_Watch",img:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/later_on.svg"},{id:23165165165,falseName:"재생목록 저장",trueName:"재생목록 삭제",type:"Playlist",img:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/save.svg.svg"},{id:86651890151,falseName:"오프라인 저장",trueName:"오프라인 동영상 삭제",type:"Download_List",SaveType:!1,falseImg:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Download.svg",trueImg:"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg"}],yb=({save:e,movie:t})=>{const{type:n,img:r,falseName:o,trueName:i,falseImg:s,trueImg:a}=e,{isLoginUser:c,isAuth:u}=I(y=>y.auth),{isSavePop:d}=I(y=>y.savepop),m=se(),g=$(),[_,v]=C.useState(!1),w=y=>{y.preventDefault(),u||g("/login"),_?(m(au({user_id:c.user_id,type:n,movie:t})),m(gt(i))):(m(su({user_id:c.user_id,type:n,movie:t})),m(gt(o)))};return C.useEffect(()=>{var y;(y=c[n])!=null&&y.find(h=>h.movie_id===t.movie_id)?v(!0):v(!1)},[n,m,w]),n!=="Download_List"?l.jsxs("li",{className:"save-item",onClick:w,style:{pointerEvents:d&&"none"},children:[l.jsx("img",{src:r,alt:_?i:o}),_?i:o]}):l.jsxs("li",{className:"save-item",onClick:w,style:{pointerEvents:d&&"none"},children:[l.jsx("img",{src:_?a:s,alt:_?i:o}),_?i:o]})},wb=({movie:e})=>l.jsx(Fw,{className:"save-list",onClick:t=>t.stopPropagation(),children:_b.map(t=>l.jsx(yb,{save:t,movie:e},t.id))}),Oe=({movie:e,type:t})=>{const{movie_id:n,movie_title:r,movie_image:o,movie_video:i,movie_like_count:s,movie_date:a,movie_channel:c,movie_video_type:u,movie_body:d}=e,{Channel:m}=I(k=>k.channel),{isSideMenu:g}=I(k=>k.header),{isLoginUser:_}=I(k=>k.auth),[v,w]=C.useState(!1),y=se(),h=k=>{if(k>=1e4)return Math.floor(k/1e4)+"만회";if(k>=1e3)return Math.floor(k/1e3)+"천회";if(k<=1e3)return k+"회"},f=k=>{k.stopPropagation(),y(au({user_id:_.user_id,type:t,movie:e}))},p=$(),[b,A]=C.useState(!1),j=k=>{k.stopPropagation(),A(!b)},x=$n(()=>A(!1));return l.jsxs(vb,{onClick:()=>{p(`/watch/${n}`),g&&y(iu())},className:"video-loder",children:[l.jsx("div",{className:"video-wrap",onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:v?u!=="video"?l.jsx("iframe",{src:i+"&controls=0",title:r,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",autoPlay:"1"}):l.jsx("video",{autoPlay:!0,muted:!0,src:i}):l.jsx("img",{src:o,alt:r})}),l.jsxs("div",{className:"text-wrap",children:[l.jsx("div",{className:"channel-logo",children:l.jsx("img",{src:m[c].channel_image,alt:""})}),l.jsxs("div",{className:"movie_info",children:[l.jsx("p",{className:"movie_title",children:r}),l.jsx("p",{className:"channel_name",children:m[c].channel_name}),l.jsxs("div",{className:"mobile",children:[l.jsx("p",{className:"mobile_channel_name",children:m[c].channel_name}),l.jsxs("p",{className:"mobile_movie_like_count",children:["조회수 ",h(s),l.jsxs("span",{className:"mobile_movie_date",children:[a.year,".",a.month,".",a.day]})]})]}),l.jsxs("p",{className:"movie_like_count",children:["조회수 ",h(s),l.jsxs("span",{className:"movie_date",children:[a.year,".",a.month,".",a.day]})]}),l.jsx("p",{className:"movie_body",children:d})]}),l.jsx("div",{className:"close-menu",onClick:f,children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Close_Btn.svg",alt:"close-menu"})}),l.jsxs("div",{className:"plus-menu",ref:x,children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/See_more.svg",alt:"pluse-menu",onClick:j}),b&&l.jsx(wb,{movie:e})]})]})]})},bb=()=>{const{Channel:e}=I(m=>m.channel),{isLoginUser:t,isAuth:n}=I(m=>m.auth),r=se(),o=$(),i=Object.values(e).find(m=>m.channel_id===Number(t.user_id)),[s,a]=C.useState([]),c=m=>{if(m.target.checked){const g=i.Movies.map(_=>_.movie_id);a(g)}else a([])},u=m=>{a(g=>g.includes(m)?g.filter(_=>_!==m):[...g,m])},d=()=>{r(Hw({channel_name:i.Movies[0].movie_channel,movie_id:s})),a([]),r(Ft()),r(gt(`${s.length}개의 영상 삭제`))};return C.useEffect(()=>{n||o("/")},[n]),l.jsx(hb,{children:l.jsxs("div",{className:"inner",children:[l.jsx("h2",{className:"studio-title",children:"채널 콘텐츠"}),l.jsxs("div",{className:s.length>0?"del-menu active":"del-menu",children:[l.jsxs("p",{className:"selectedMovies-length",children:[s.length,"개 선택됨"]}),l.jsx("p",{className:"del-btn",onClick:d,children:"삭제"})]}),l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:l.jsx("input",{type:"checkbox",onChange:c,checked:s.length===i.Movies.length})}),l.jsx("th",{children:"동영상"}),l.jsx("th",{children:"제목"}),l.jsx("th",{children:"공개 상태"}),l.jsx("th",{children:"제한사항"}),l.jsx("th",{children:"날짜"}),l.jsx("th",{children:"조회수"}),l.jsx("th",{children:"댓글"}),l.jsx("th",{children:"좋아요"})]})}),l.jsx("tbody",{children:i.Movies.map(m=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("input",{type:"checkbox",checked:s.includes(m.movie_id),onChange:()=>u(m.movie_id)})}),l.jsx("td",{className:"movie_video",children:l.jsx(Oe,{movie:m})}),l.jsxs("td",{className:"movie_info",children:[l.jsx("p",{className:"movie_title",children:m.movie_title}),l.jsx("p",{className:"movie_body",children:m.movie_body})]}),l.jsx("td",{children:"공개"}),l.jsx("td",{className:"limited-text",children:"저작권"}),l.jsxs("td",{className:"movie_date",children:[m.movie_date.year,".",m.movie_date.month,".",m.movie_date.day]}),l.jsx("td",{children:m.movie_like_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),l.jsx("td",{children:m.movie_comments.length}),l.jsx("td",{children:m.movie_like_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]},m.movie_id))})]})]})})},_e=B.button`
    background-color: #eeeeee;
    border-radius: 2rem;
    border: none;
    padding: 1.5rem 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #e0e0e0;
    }
    @media ${V.mobile} {
        /* width: 100%; */
        font-size: 100%;
    }
`,xb=()=>{const{isLoginUser:e}=I(y=>y.auth),[t,n]=C.useState(null),[r,o]=C.useState(null),i=new Date,[s,a]=C.useState({movie_title:"",movie_body:"",movie_category:"",movie_image:null,movie_video:null}),c=se(),u=$(),d=y=>{const{name:h,value:f}=y.target;a(p=>({...p,[h]:f}))},m=y=>{const h=y.target.files[0];h&&(a(f=>({...f,movie_image:h})),o(URL.createObjectURL(h)),v(h))},g=y=>{const h=y.target.files[0];h&&(a(f=>({...f,movie_video:h})),n(URL.createObjectURL(h)),_(h))},_=y=>{const h=indexedDB.open("videoDB",1);h.onupgradeneeded=f=>{const p=f.target.result;p.objectStoreNames.contains("videos")||p.createObjectStore("videos",{keyPath:"id",autoIncrement:!0})},h.onsuccess=f=>{f.target.result.transaction("videos","readwrite").objectStore("videos").add({video:y})},h.onerror=f=>{console.error("IndexedDB 에러:",f)}},v=y=>{const h=indexedDB.open("imageDB",1);h.onupgradeneeded=f=>{const p=f.target.result;p.objectStoreNames.contains("images")||p.createObjectStore("images",{keyPath:"id",autoIncrement:!0})},h.onsuccess=f=>{f.target.result.transaction("images","readwrite").objectStore("images").add({image:y})},h.onerror=f=>{console.error("IndexedDB 에러:",f)}},w=y=>{y.preventDefault(),!s.movie_title||!s.movie_body||!s.movie_image||!s.movie_video?alert("누락된 정보가 있습니다."):(c(gt(`${s.movie_title} 추가`)),c(Vw({movie_title:s.movie_title,movie_body:s.movie_body,movie_category:s.movie_category,movie_image:r,movie_video:t,movie_like_count:0,movie_channel:e.user_email.split("@")[0],movie_channel_id:e.user_id,movie_date:{year:i.getFullYear(),month:i.getMonth()+1,day:i.getDate()},movie_comments:[],movie_video_type:"video"})),u(`/studio/${e.user_id}/content`),c(Ft()))};return l.jsx(pb,{children:l.jsxs("div",{className:"inner",children:[l.jsx("h2",{className:"studio-title",children:"동영상 업로드"}),l.jsxs("form",{className:"upload-form",onSubmit:w,children:[l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_title",children:"제목"}),l.jsx("input",{type:"text",name:"movie_title",id:"movie_title",className:"movie_title",value:s.movie_title,onChange:d,placeholder:"영상 제목을 작성해 주세요"})]}),l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_body",children:"설명"}),l.jsx("textarea",{name:"movie_body",id:"movie_body",className:"movie_body",value:s.movie_body,onChange:d,placeholder:"영상 소개글을 작성해 주세요"})]}),l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_category",children:"카테고리"}),l.jsx("input",{type:"text",name:"movie_category",id:"movie_category",className:"movie_category",value:s.movie_category,onChange:d,placeholder:"카테고리는 영문으로 작성해 주세요 ex) vloog"})]}),l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_image",children:"썸네일"}),l.jsx("input",{type:"file",name:"movie_image",id:"movie_image",className:"movie_image",onChange:m}),l.jsxs("div",{className:"img-wrap",children:[l.jsx("p",{children:"미리보기"}),r&&l.jsx("img",{src:r,alt:"썸네일 미리보기"})]})]}),l.jsxs("p",{children:[l.jsx("label",{htmlFor:"movie_video",children:"동영상"}),l.jsx("input",{type:"file",name:"movie_video",id:"movie_video",className:"movie_video",onChange:g}),l.jsxs("div",{className:"video-wrap",children:[l.jsx("p",{children:"미리보기"}),t&&l.jsx("video",{controls:!0,width:"500",src:t})]})]}),l.jsx("p",{children:l.jsx(_e,{type:"submit",children:"업로드"})})]})]})})},Sb=B.div`
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
            margin-right: 1rem;
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
            &:nth-child(${e=>e.$not}n) {
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
    @media ${V.mobile} {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        width: 100%;
        .top-category {
            overflow-x: scroll;
            white-space: nowrap;
            padding: 1rem;
            .top-menu-li {
                button {
                    display: inline-block;
                    width: fit-content;
                    padding: 0.6rem 1rem;
                    /* 11/13 오후 김헤림 부분 수정 */
                    font-size: 2.4rem;
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
`,om=({name:e,category:t,thisMenu:n,setThisMenu:r})=>l.jsx("li",{className:`top-menu-li ${n===t?" active":""}`,onClick:()=>r(t),children:l.jsx(_e,{className:"top-menu-button",children:e})}),Ab=[{id:16545641,name:"전체",category:"all"},{id:153,name:"이야기",category:"talk"},{id:513,name:"브이로그",category:"vlog"},{id:165,name:"코미디",category:"Comedy"},{id:955,name:"음악",category:"music"},{id:562,name:"영화감상",category:"movie_review"},{id:464,name:"라이브",category:"live"},{id:161,name:"음식",category:"food"},{id:164,name:"인터뷰",category:"interview"},{id:478,name:"게임",category:"gaming"},{id:654,name:"챌린지",category:"challenge"},{id:789,name:"엔터테인먼트",category:"entertainment"},{id:879,name:"다큐멘터리",category:"documentary"},{id:963,name:"동물",category:"animal"},{id:844,name:"쇼핑",category:"shopping"},{id:951,name:"메이크업",category:"makeup"},{id:351,name:"여행",category:"travel"}],Cb=B.div`
    height: 100%;
    margin: 2% auto;
    min-height: 100vh;
`,im=B.ul`
    width: 100rem;
    min-height: 100vh;
    .not-search {
    }
    .channel-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5%;
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
                    .username {
                        margin-right: 1.4rem;
                    }
                    .sub-count {
                        position: relative;
                        &::before {
                            content: '';
                            width: 0.4rem;
                            height: 0.4rem;
                            background: #777;
                            border-radius: 50%;
                            position: absolute;
                            top: 50%;
                            left: -12%;
                        }
                    }
                }
            }
        }
    }
    .movie-item {
        margin-top: 2.5%;
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
    @media ${V.mobile} {
        width: 100vw;
        margin-bottom: 2%;
        overflow: hidden;
        .channel-item {
            display: flex;
            align-items: center;
            padding: 5% 0;
            border-bottom: 1px solid #eee;
            margin-bottom: 0;
            &:last-child {
            }
            .channel-profile {
                .channel-logo {
                    width: 40%;
                }
            }
            .channel-info {
                display: flex;
                flex-direction: column;
                align-items: start;
                width: 60%;
                .info {
                    color: #777;
                    display: flex;
                    flex-direction: column;
                    .sub-count {
                        &::before {
                            display: none;
                        }
                    }
                }
            }
        }

        .video-loder {
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 7%;
            .video-wrap {
                width: 100%;
                iframe,
                img {
                    height: 100%;
                    border-radius: 0%;
                }
            }
            .text-wrap {
                width: 100%;
                display: flex;
                .channel-logo {
                    display: flex;
                    width: 10%;
                    height: auto;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .movie_info {
                    width: 80%;
                    position: absolute;
                    left: 13%;
                    top: 20%;
                    .movie_title {
                        -webkit-line-clamp: 2;
                    }
                    .movie_body {
                        display: none;
                    }
                }
                .plus-menu {
                    top: 25%;
                    right: 5%;
                }
            }
        }
    }
`,kb=B.div`
    width: 100%;
    display: flex;
    @media ${V.mobile} {
        margin-top: 50%;
    }
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
`,rg=()=>l.jsx(kb,{children:l.jsxs("div",{className:"no-search",children:[l.jsx("h2",{className:"no-search-title",children:"검색하여 시작하기"}),l.jsxs("p",{className:"no-search-desc",children:["내가 좋아할 만한 동영상 피드를 받을 수 있도록",l.jsx("br",{}),"동영상 시청을 시작해 보세요"]})]})});function og(e,t){return function(){return e.apply(t,arguments)}}const{toString:jb}=Object.prototype,{getPrototypeOf:cu}=Object,Us=(e=>t=>{const n=jb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vt=e=>(e=e.toLowerCase(),t=>Us(t)===e),qs=e=>t=>typeof t===e,{isArray:Er}=Array,Eo=qs("undefined");function Eb(e){return e!==null&&!Eo(e)&&e.constructor!==null&&!Eo(e.constructor)&&Ke(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ig=vt("ArrayBuffer");function Nb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ig(e.buffer),t}const Lb=qs("string"),Ke=qs("function"),sg=qs("number"),$s=e=>e!==null&&typeof e=="object",Ib=e=>e===!0||e===!1,Ai=e=>{if(Us(e)!=="object")return!1;const t=cu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Pb=vt("Date"),Rb=vt("File"),Ob=vt("Blob"),Bb=vt("FileList"),Tb=e=>$s(e)&&Ke(e.pipe),Mb=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ke(e.append)&&((t=Us(e))==="formdata"||t==="object"&&Ke(e.toString)&&e.toString()==="[object FormData]"))},Fb=vt("URLSearchParams"),[zb,Db,Ub,qb]=["ReadableStream","Request","Response","Headers"].map(vt),$b=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Er(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function ag(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const kn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lg=e=>!Eo(e)&&e!==kn;function Wl(){const{caseless:e}=lg(this)&&this||{},t={},n=(r,o)=>{const i=e&&ag(t,o)||o;Ai(t[i])&&Ai(r)?t[i]=Wl(t[i],r):Ai(r)?t[i]=Wl({},r):Er(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Fo(arguments[r],n);return t}const Wb=(e,t,n,{allOwnKeys:r}={})=>(Fo(t,(o,i)=>{n&&Ke(o)?e[i]=og(o,n):e[i]=o},{allOwnKeys:r}),e),Vb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Hb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Kb=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&cu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Gb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Yb=e=>{if(!e)return null;if(Er(e))return e;let t=e.length;if(!sg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Xb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cu(Uint8Array)),Jb=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Qb=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Zb=vt("HTMLFormElement"),ex=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),sm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),tx=vt("RegExp"),cg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Fo(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},nx=e=>{cg(e,(t,n)=>{if(Ke(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ke(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rx=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Er(e)?r(e):r(String(e).split(t)),n},ox=()=>{},ix=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,La="abcdefghijklmnopqrstuvwxyz",am="0123456789",ug={DIGIT:am,ALPHA:La,ALPHA_DIGIT:La+La.toUpperCase()+am},sx=(e=16,t=ug.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ax(e){return!!(e&&Ke(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const lx=e=>{const t=new Array(10),n=(r,o)=>{if($s(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Er(r)?[]:{};return Fo(r,(s,a)=>{const c=n(s,o+1);!Eo(c)&&(i[a]=c)}),t[o]=void 0,i}}return r};return n(e,0)},cx=vt("AsyncFunction"),ux=e=>e&&($s(e)||Ke(e))&&Ke(e.then)&&Ke(e.catch),dg=((e,t)=>e?setImmediate:t?((n,r)=>(kn.addEventListener("message",({source:o,data:i})=>{o===kn&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),kn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ke(kn.postMessage)),dx=typeof queueMicrotask<"u"?queueMicrotask.bind(kn):typeof process<"u"&&process.nextTick||dg,S={isArray:Er,isArrayBuffer:ig,isBuffer:Eb,isFormData:Mb,isArrayBufferView:Nb,isString:Lb,isNumber:sg,isBoolean:Ib,isObject:$s,isPlainObject:Ai,isReadableStream:zb,isRequest:Db,isResponse:Ub,isHeaders:qb,isUndefined:Eo,isDate:Pb,isFile:Rb,isBlob:Ob,isRegExp:tx,isFunction:Ke,isStream:Tb,isURLSearchParams:Fb,isTypedArray:Xb,isFileList:Bb,forEach:Fo,merge:Wl,extend:Wb,trim:$b,stripBOM:Vb,inherits:Hb,toFlatObject:Kb,kindOf:Us,kindOfTest:vt,endsWith:Gb,toArray:Yb,forEachEntry:Jb,matchAll:Qb,isHTMLForm:Zb,hasOwnProperty:sm,hasOwnProp:sm,reduceDescriptors:cg,freezeMethods:nx,toObjectSet:rx,toCamelCase:ex,noop:ox,toFiniteNumber:ix,findKey:ag,global:kn,isContextDefined:lg,ALPHABET:ug,generateString:sx,isSpecCompliantForm:ax,toJSONObject:lx,isAsyncFn:cx,isThenable:ux,setImmediate:dg,asap:dx};function M(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}S.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.status}}});const mg=M.prototype,fg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{fg[e]={value:e}});Object.defineProperties(M,fg);Object.defineProperty(mg,"isAxiosError",{value:!0});M.from=(e,t,n,r,o,i)=>{const s=Object.create(mg);return S.toFlatObject(e,s,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),M.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const mx=null;function Vl(e){return S.isPlainObject(e)||S.isArray(e)}function hg(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function lm(e,t,n){return e?e.concat(t).map(function(o,i){return o=hg(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function fx(e){return S.isArray(e)&&!e.some(Vl)}const hx=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function Ws(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,y){return!S.isUndefined(y[w])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(o))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(S.isDate(v))return v.toISOString();if(!c&&S.isBlob(v))throw new M("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(v)||S.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,w,y){let h=v;if(v&&!y&&typeof v=="object"){if(S.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(S.isArray(v)&&fx(v)||(S.isFileList(v)||S.endsWith(w,"[]"))&&(h=S.toArray(v)))return w=hg(w),h.forEach(function(p,b){!(S.isUndefined(p)||p===null)&&t.append(s===!0?lm([w],b,i):s===null?w:w+"[]",u(p))}),!1}return Vl(v)?!0:(t.append(lm(y,w,i),u(v)),!1)}const m=[],g=Object.assign(hx,{defaultVisitor:d,convertValue:u,isVisitable:Vl});function _(v,w){if(!S.isUndefined(v)){if(m.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(v),S.forEach(v,function(h,f){(!(S.isUndefined(h)||h===null)&&o.call(t,h,S.isString(f)?f.trim():f,w,g))===!0&&_(h,w?w.concat(f):[f])}),m.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return _(e),t}function cm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function uu(e,t){this._pairs=[],e&&Ws(e,this,t)}const pg=uu.prototype;pg.append=function(t,n){this._pairs.push([t,n])};pg.toString=function(t){const n=t?function(r){return t.call(this,r,cm)}:cm;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function px(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gg(e,t,n){if(!t)return e;const r=n&&n.encode||px,o=n&&n.serialize;let i;if(o?i=o(t,n):i=S.isURLSearchParams(t)?t.toString():new uu(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class um{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const vg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gx=typeof URLSearchParams<"u"?URLSearchParams:uu,vx=typeof FormData<"u"?FormData:null,_x=typeof Blob<"u"?Blob:null,yx={isBrowser:!0,classes:{URLSearchParams:gx,FormData:vx,Blob:_x},protocols:["http","https","file","blob","url","data"]},du=typeof window<"u"&&typeof document<"u",Hl=typeof navigator=="object"&&navigator||void 0,wx=du&&(!Hl||["ReactNative","NativeScript","NS"].indexOf(Hl.product)<0),bx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xx=du&&window.location.href||"http://localhost",Sx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:du,hasStandardBrowserEnv:wx,hasStandardBrowserWebWorkerEnv:bx,navigator:Hl,origin:xx},Symbol.toStringTag,{value:"Module"})),ze={...Sx,...yx};function Ax(e,t){return Ws(e,new ze.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return ze.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Cx(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kx(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function _g(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),c=i>=n.length;return s=!s&&S.isArray(o)?o.length:s,c?(S.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!S.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&S.isArray(o[s])&&(o[s]=kx(o[s])),!a)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,o)=>{t(Cx(r),o,n,0)}),n}return null}function jx(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const zo={transitional:vg,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=S.isObject(t);if(i&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return o?JSON.stringify(_g(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t)||S.isReadableStream(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ax(t,this.formSerializer).toString();if((a=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ws(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),jx(t)):t}],transformResponse:[function(t){const n=this.transitional||zo.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(S.isResponse(t)||S.isReadableStream(t))return t;if(t&&S.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?M.from(a,M.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],e=>{zo.headers[e]={}});const Ex=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Nx=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&Ex[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},dm=Symbol("internals");function Dr(e){return e&&String(e).trim().toLowerCase()}function Ci(e){return e===!1||e==null?e:S.isArray(e)?e.map(Ci):String(e)}function Lx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ix=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ia(e,t,n,r,o){if(S.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function Px(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Rx(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class De{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,c,u){const d=Dr(c);if(!d)throw new Error("header name must be a non-empty string");const m=S.findKey(o,d);(!m||o[m]===void 0||u===!0||u===void 0&&o[m]!==!1)&&(o[m||c]=Ci(a))}const s=(a,c)=>S.forEach(a,(u,d)=>i(u,d,c));if(S.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(S.isString(t)&&(t=t.trim())&&!Ix(t))s(Nx(t),n);else if(S.isHeaders(t))for(const[a,c]of t.entries())i(c,a,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Dr(t),t){const r=S.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Lx(o);if(S.isFunction(n))return n.call(this,o,r);if(S.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Dr(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ia(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Dr(s),s){const a=S.findKey(r,s);a&&(!n||Ia(r,r[a],a,n))&&(delete r[a],o=!0)}}return S.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Ia(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return S.forEach(this,(o,i)=>{const s=S.findKey(r,i);if(s){n[s]=Ci(o),delete n[i];return}const a=t?Px(i):String(i).trim();a!==i&&delete n[i],n[a]=Ci(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return S.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[dm]=this[dm]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Dr(s);r[a]||(Rx(o,s),r[a]=!0)}return S.isArray(t)?t.forEach(i):i(t),this}}De.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(De.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});S.freezeMethods(De);function Pa(e,t){const n=this||zo,r=t||n,o=De.from(r.headers);let i=r.data;return S.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function yg(e){return!!(e&&e.__CANCEL__)}function Nr(e,t,n){M.call(this,e??"canceled",M.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(Nr,M,{__CANCEL__:!0});function wg(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ox(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Bx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[i];s||(s=u),n[o]=c,r[o]=u;let m=i,g=0;for(;m!==o;)g+=n[m++],m=m%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const _=d&&u-d;return _?Math.round(g*1e3/_):void 0}}function Tx(e,t){let n=0,r=1e3/t,o,i;const s=(u,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),m=d-n;m>=r?s(u,d):(o=u,i||(i=setTimeout(()=>{i=null,s(o)},r-m)))},()=>o&&s(o)]}const ls=(e,t,n=3)=>{let r=0;const o=Bx(50,250);return Tx(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,c=s-r,u=o(c),d=s<=a;r=s;const m={loaded:s,total:a,progress:a?s/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a&&d?(a-s)/u:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(m)},n)},mm=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},fm=e=>(...t)=>S.asap(()=>e(...t)),Mx=ze.hasStandardBrowserEnv?function(){const t=ze.navigator&&/(msie|trident)/i.test(ze.navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const a=S.isString(s)?o(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),Fx=ze.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];S.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),S.isString(r)&&s.push("path="+r),S.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function zx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Dx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function bg(e,t){return e&&!zx(t)?Dx(e,t):t}const hm=e=>e instanceof De?{...e}:e;function zn(e,t){t=t||{};const n={};function r(u,d,m){return S.isPlainObject(u)&&S.isPlainObject(d)?S.merge.call({caseless:m},u,d):S.isPlainObject(d)?S.merge({},d):S.isArray(d)?d.slice():d}function o(u,d,m){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u,m)}else return r(u,d,m)}function i(u,d){if(!S.isUndefined(d))return r(void 0,d)}function s(u,d){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,m){if(m in t)return r(u,d);if(m in e)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d)=>o(hm(u),hm(d),!0)};return S.forEach(Object.keys(Object.assign({},e,t)),function(d){const m=c[d]||o,g=m(e[d],t[d],d);S.isUndefined(g)&&m!==a||(n[d]=g)}),n}const xg=e=>{const t=zn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;t.headers=s=De.from(s),t.url=gg(bg(t.baseURL,t.url),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(S.isFormData(n)){if(ze.hasStandardBrowserEnv||ze.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[u,...d]=c?c.split(";").map(m=>m.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...d].join("; "))}}if(ze.hasStandardBrowserEnv&&(r&&S.isFunction(r)&&(r=r(t)),r||r!==!1&&Mx(t.url))){const u=o&&i&&Fx.read(i);u&&s.set(o,u)}return t},Ux=typeof XMLHttpRequest<"u",qx=Ux&&function(e){return new Promise(function(n,r){const o=xg(e);let i=o.data;const s=De.from(o.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:u}=o,d,m,g,_,v;function w(){_&&_(),v&&v(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function h(){if(!y)return;const p=De.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:p,config:e,request:y};wg(function(x){n(x),w()},function(x){r(x),w()},A),y=null}"onloadend"in y?y.onloadend=h:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(h)},y.onabort=function(){y&&(r(new M("Request aborted",M.ECONNABORTED,e,y)),y=null)},y.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,e,y)),y=null},y.ontimeout=function(){let b=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const A=o.transitional||vg;o.timeoutErrorMessage&&(b=o.timeoutErrorMessage),r(new M(b,A.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,y)),y=null},i===void 0&&s.setContentType(null),"setRequestHeader"in y&&S.forEach(s.toJSON(),function(b,A){y.setRequestHeader(A,b)}),S.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),a&&a!=="json"&&(y.responseType=o.responseType),u&&([g,v]=ls(u,!0),y.addEventListener("progress",g)),c&&y.upload&&([m,_]=ls(c),y.upload.addEventListener("progress",m),y.upload.addEventListener("loadend",_)),(o.cancelToken||o.signal)&&(d=p=>{y&&(r(!p||p.type?new Nr(null,e,y):p),y.abort(),y=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const f=Ox(o.url);if(f&&ze.protocols.indexOf(f)===-1){r(new M("Unsupported protocol "+f+":",M.ERR_BAD_REQUEST,e));return}y.send(i||null)})},$x=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,a();const d=u instanceof Error?u:this.reason;r.abort(d instanceof M?d:new Nr(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>S.asap(a),c}},Wx=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Vx=async function*(e,t){for await(const n of Hx(e))yield*Wx(n,t)},Hx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},pm=(e,t,n,r)=>{const o=Vx(e,t);let i=0,s,a=c=>{s||(s=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await o.next();if(u){a(),c.close();return}let m=d.byteLength;if(n){let g=i+=m;n(g)}c.enqueue(new Uint8Array(d))}catch(u){throw a(u),u}},cancel(c){return a(c),o.return()}},{highWaterMark:2})},Vs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Sg=Vs&&typeof ReadableStream=="function",Kx=Vs&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ag=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Gx=Sg&&Ag(()=>{let e=!1;const t=new Request(ze.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),gm=64*1024,Kl=Sg&&Ag(()=>S.isReadableStream(new Response("").body)),cs={stream:Kl&&(e=>e.body)};Vs&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!cs[t]&&(cs[t]=S.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new M(`Response type '${t}' is not supported`,M.ERR_NOT_SUPPORT,r)})})})(new Response);const Yx=async e=>{if(e==null)return 0;if(S.isBlob(e))return e.size;if(S.isSpecCompliantForm(e))return(await new Request(ze.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(S.isArrayBufferView(e)||S.isArrayBuffer(e))return e.byteLength;if(S.isURLSearchParams(e)&&(e=e+""),S.isString(e))return(await Kx(e)).byteLength},Xx=async(e,t)=>{const n=S.toFiniteNumber(e.getContentLength());return n??Yx(t)},Jx=Vs&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:d,withCredentials:m="same-origin",fetchOptions:g}=xg(e);u=u?(u+"").toLowerCase():"text";let _=$x([o,i&&i.toAbortSignal()],s),v;const w=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let y;try{if(c&&Gx&&n!=="get"&&n!=="head"&&(y=await Xx(d,r))!==0){let A=new Request(t,{method:"POST",body:r,duplex:"half"}),j;if(S.isFormData(r)&&(j=A.headers.get("content-type"))&&d.setContentType(j),A.body){const[x,k]=mm(y,ls(fm(c)));r=pm(A.body,gm,x,k)}}S.isString(m)||(m=m?"include":"omit");const h="credentials"in Request.prototype;v=new Request(t,{...g,signal:_,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:h?m:void 0});let f=await fetch(v);const p=Kl&&(u==="stream"||u==="response");if(Kl&&(a||p&&w)){const A={};["status","statusText","headers"].forEach(R=>{A[R]=f[R]});const j=S.toFiniteNumber(f.headers.get("content-length")),[x,k]=a&&mm(j,ls(fm(a),!0))||[];f=new Response(pm(f.body,gm,x,()=>{k&&k(),w&&w()}),A)}u=u||"text";let b=await cs[S.findKey(cs,u)||"text"](f,e);return!p&&w&&w(),await new Promise((A,j)=>{wg(A,j,{data:b,headers:De.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:v})})}catch(h){throw w&&w(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,e,v),{cause:h.cause||h}):M.from(h,h&&h.code,e,v)}}),Gl={http:mx,xhr:qx,fetch:Jx};S.forEach(Gl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const vm=e=>`- ${e}`,Qx=e=>S.isFunction(e)||e===null||e===!1,Cg={getAdapter:e=>{e=S.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!Qx(n)&&(r=Gl[(s=String(n)).toLowerCase()],r===void 0))throw new M(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(vm).join(`
`):" "+vm(i[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Gl};function Ra(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Nr(null,e)}function _m(e){return Ra(e),e.headers=De.from(e.headers),e.data=Pa.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Cg.getAdapter(e.adapter||zo.adapter)(e).then(function(r){return Ra(e),r.data=Pa.call(e,e.transformResponse,r),r.headers=De.from(r.headers),r},function(r){return yg(r)||(Ra(e),r&&r.response&&(r.response.data=Pa.call(e,e.transformResponse,r.response),r.response.headers=De.from(r.response.headers))),Promise.reject(r)})}const kg="1.7.7",mu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{mu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ym={};mu.transitional=function(t,n,r){function o(i,s){return"[Axios v"+kg+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new M(o(s," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!ym[s]&&(ym[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};function Zx(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],c=a===void 0||s(a,i,e);if(c!==!0)throw new M("option "+i+" must be "+c,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+i,M.ERR_BAD_OPTION)}}const Yl={assertOptions:Zx,validators:mu},$t=Yl.validators;class In{constructor(t){this.defaults=t,this.interceptors={request:new um,response:new um}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=zn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Yl.assertOptions(r,{silentJSONParsing:$t.transitional($t.boolean),forcedJSONParsing:$t.transitional($t.boolean),clarifyTimeoutError:$t.transitional($t.boolean)},!1),o!=null&&(S.isFunction(o)?n.paramsSerializer={serialize:o}:Yl.assertOptions(o,{encode:$t.function,serialize:$t.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&S.merge(i.common,i[n.method]);i&&S.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=De.concat(s,i);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,m=0,g;if(!c){const v=[_m.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,u),g=v.length,d=Promise.resolve(n);m<g;)d=d.then(v[m++],v[m++]);return d}g=a.length;let _=n;for(m=0;m<g;){const v=a[m++],w=a[m++];try{_=v(_)}catch(y){w.call(this,y);break}}try{d=_m.call(this,_)}catch(v){return Promise.reject(v)}for(m=0,g=u.length;m<g;)d=d.then(u[m++],u[m++]);return d}getUri(t){t=zn(this.defaults,t);const n=bg(t.baseURL,t.url);return gg(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){In.prototype[t]=function(n,r){return this.request(zn(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(zn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}In.prototype[t]=n(),In.prototype[t+"Form"]=n(!0)});class fu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new Nr(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new fu(function(o){t=o}),cancel:t}}}function e4(e){return function(n){return e.apply(null,n)}}function t4(e){return S.isObject(e)&&e.isAxiosError===!0}const Xl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xl).forEach(([e,t])=>{Xl[t]=e});function jg(e){const t=new In(e),n=og(In.prototype.request,t);return S.extend(n,In.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return jg(zn(e,o))},n}const de=jg(zo);de.Axios=In;de.CanceledError=Nr;de.CancelToken=fu;de.isCancel=yg;de.VERSION=kg;de.toFormData=Ws;de.AxiosError=M;de.Cancel=de.CanceledError;de.all=function(t){return Promise.all(t)};de.spread=e4;de.isAxiosError=t4;de.mergeConfig=zn;de.AxiosHeaders=De;de.formToJSON=e=>_g(S.isHTMLForm(e)?new FormData(e):e);de.getAdapter=Cg.getAdapter;de.HttpStatusCode=Xl;de.default=de;const n4=()=>{var A,j;const{allMovies:e}=I(x=>x.channel),{isAuth:t,isLoginUser:n}=I(x=>x.auth),{isSideMenu:r}=I(x=>x.header),o=se(),i=C.useRef(),s=C.useRef(),[a]=C.useState(Ab.filter(x=>x.category!=="all").sort(()=>Math.random()-.5).slice(0,7)),[c,u]=C.useState("all"),[d,m]=C.useState(8),[g,_]=C.useState([]),[v,w]=C.useState([]),[y,h]=C.useState([]),f=()=>{m(x=>x+(r?8:10))},[p,b]=C.useState({});if(C.useEffect(()=>{e.length===0&&o(Ft()),document.title="YouTube",d>=e.length&&m(e.length+10)},[o,e.length,d]),C.useEffect(()=>{if(e.length>0){const x=e.slice().sort(()=>Math.random()-.5),k=[],R=[];for(let P=0;P<x.length;P+=10)k.push(x.slice(P,P+10));for(let P=0;P<x.length;P+=8)R.push(x.slice(P,P+8));_(k),w(R),m(r?8:10)}},[e]),C.useEffect(()=>{},[r]),C.useEffect(()=>(i.current&&i.current.disconnect(),i.current=new IntersectionObserver(x=>{x.forEach(k=>{k.isIntersecting&&f()})},{threshold:1}),s.current&&i.current.observe(s.current),()=>{i.current&&s.current&&i.current.unobserve(s.current)}),[]),C.useEffect(()=>{if(t)return;(async()=>{try{const R=(await de.get("https://geolocation-db.com/json/")).data.IPv4;!t&&R&&o(Yp({ip:R}))}catch(k){console.log(k)}})()},[t]),C.useEffect(()=>{var R,P;if(!n)return;const x=Array.from(new Set((R=n==null?void 0:n.Viewing_Record)==null?void 0:R.map(ee=>ee.movie_category))),k=Array.from(new Set((P=n==null?void 0:n.user_search_list)==null?void 0:P.map(ee=>ee.search)));b({...p,movieCategory:x,searchList:k})},[n==null?void 0:n.Viewing_Record,n==null?void 0:n.user_search_list]),C.useEffect(()=>{const x=te=>te[Math.floor(Math.random()*te.length)],k=p!=null&&p.movieCategory?x(p==null?void 0:p.movieCategory):null,R=p!=null&&p.searchList?x(p==null?void 0:p.searchList):null,P=k?e.filter(te=>te.movie_category.includes(k)):[],ee=R?e.filter(te=>te.movie_title.includes(R)):[],q=(P||ee).sort(()=>Math.random()-.5).slice(0,10);if(q.length<10){const te=e.filter(pn=>!q.includes(pn)).sort(()=>Math.random()-.5).slice(0,10-q.length);h([...q,...te])}else h(q)},[p]),!e)return l.jsx(as,{});if(e)return l.jsx(Sb,{width:r?"24.25%":"19.2%",$not:r?4:5,children:((A=p==null?void 0:p.movieCategory)==null?void 0:A.length)!==0||((j=p==null?void 0:p.searchList)==null?void 0:j.length)!==0?l.jsxs(l.Fragment,{children:[l.jsxs("ul",{className:"top-category",children:[l.jsx(om,{name:"전체",category:"all",thisMenu:c,setThisMenu:u},"16545641"),a&&a.map(x=>l.jsx(om,{name:x.name,category:x.category,thisMenu:c,setThisMenu:u},x.id))]}),l.jsx("ul",{className:"main-video-wrap",children:c==="all"?(y==null?void 0:y.length)===0&&g.length!==0?g[0].slice(0,r?8:10).map(x=>l.jsx(Oe,{movie:x},x.movie_id)):y.slice(0,r?8:10).map(x=>l.jsx(Oe,{movie:x},x.movie_id)):e.filter(x=>x.movie_category.includes(c)).sort(()=>Math.random()-.5).slice(0,r?8:10).map(x=>l.jsx(Oe,{movie:x},x.movie_id))}),l.jsx("div",{className:"main-banner",children:l.jsx("img",{className:"main-banner-img",src:"https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_banner.jpg?raw=true",alt:"Main Banner"})}),r?v.slice(0,Math.ceil(d/8)).map((x,k)=>l.jsx("ul",{className:"main-video-wrap",children:x.map(R=>l.jsx(Oe,{movie:R},R.movie_id))},`video-chunk-${k}`)):g.slice(0,Math.ceil(d/10)).map((x,k)=>l.jsx("ul",{className:"main-video-wrap",children:x.map(R=>l.jsx(Oe,{movie:R},R.movie_id))},`video-chunk-${k}`)),l.jsx("div",{id:"scroll-anchor",ref:s,children:d!==(e==null?void 0:e.length)+10&&l.jsx(as,{})})]}):l.jsx("div",{className:"no-login",children:l.jsx(rg,{})})})},wm=B.div`
    display: flex;
    button {
        /* 11/13 오후 김혜림 부분 수정  */
        max-height: 4rem;
    }
    .subscribers-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        /* 11/13 오후 김혜림 부분 추가 */
        white-space: nowrap;

        img {
            width: 2.4rem;
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
    /* 11/13 오후 김혜림 부분 추가 */
    @media ${V.mobile} {
        .subscribers-btn {
            .img {
                width: 35%;
            }
        }
    }
`,Hs=({channel_id:e,channel_name:t,thisChannel:n})=>{var g;const{isLoginUser:r,isAuth:o}=I(_=>_.auth),i=e===(r==null?void 0:r.user_id),s=(g=r==null?void 0:r.Subscription_Id)==null?void 0:g.includes(e),a=se(),c=$(),u=_=>{_.stopPropagation(),o?r.user_id!==e?(a(bw({user_id:r.user_id,channel_id:e})),a(Zp({channel_name:t,type:"plus"})),a(gt(`${n.channel_name} 채널 구독`))):alert("error"):c("/login")},d=_=>{o||c("/login"),_.stopPropagation(),a(Jw(n))},m=_=>{_.stopPropagation(),o&&c(`/studio/${e}/dashboard`)};if(i)return l.jsxs(wm,{children:[l.jsx(_e,{onClick:m,className:"channel-btn",children:"채널 맞춤설정"}),l.jsx(_e,{onClick:m,className:"video-btn",children:"동영상 관리"})]});if(!i)return l.jsx(wm,{children:s?l.jsxs(_e,{className:"subscribers-btn",onClick:d,children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Notification.svg",alt:"구독 중",className:"img"}),"구독중"]}):l.jsx(_e,{className:"not-subscribers-btn",onClick:u,children:"구독"})})},r4=({channel:e})=>{var u;const t=$(),{channel_image:n,channel_name:r,channel_subscribers:o,Movies:i,channel_id:s,channel_nav:a}=e,c=d=>{if(d>=1e4)return Math.floor(d/1e4)+"만명";if(d>=1e3)return Math.floor(d/1e3)+"천명";if(d<=1e3)return d+"명"};return l.jsxs("li",{className:"channel-item",onClick:()=>{var d;return t(`/channel/${((d=i[0])==null?void 0:d.movie_channel)||a}`)},children:[l.jsx("div",{className:"channel-profile",children:l.jsx("img",{src:n,alt:r,className:"channel-logo"})}),l.jsxs("div",{className:"channel-info",children:[l.jsxs("div",{className:"info-text",children:[l.jsx("h3",{className:"name",children:r}),l.jsxs("p",{className:"info",children:[l.jsxs("span",{className:"username",children:["@",((u=i[0])==null?void 0:u.movie_channel)||a]}),l.jsxs("span",{className:"sub-count",children:["구독자 ",c(o)]})]})]}),l.jsx(Hs,{channel_id:s,channel_name:a,thisChannel:e})]})]})},o4=({filteredMovies:e})=>{if(e)return l.jsx(l.Fragment,{children:e.map(t=>l.jsx(Oe,{movie:t},t.movie_id))})},i4=({Search:e,allMovies:t})=>{const{Channel:n}=I(s=>s.channel),o=Object.keys(n).map(s=>n[s]).filter(s=>s.channel_name.toLowerCase().includes(e.toLowerCase())),i=t.filter(s=>s.movie_title.toLowerCase().includes(e.toLowerCase())||s.movie_category.toLowerCase().includes(e.toLowerCase()));if(o.length===0&&i.length===0)return l.jsx(im,{children:l.jsxs("p",{className:"not-search",children:['"',e,'" 찾으시는 검색 결과가 없습니다.']})});if(o.length>0||i.length>0)return l.jsxs(im,{children:[o.map(s=>l.jsx(r4,{channel:s},s.channel_id)),l.jsx(o4,{Search:e,filteredMovies:i})]})},bm=()=>{const{Search:e}=Ct(),{allMovies:t}=I(r=>r.channel),n=se();return C.useEffect(()=>{n(Ft())},[]),l.jsx(Cb,{children:e?l.jsx(i4,{Search:e,allMovies:t}):l.jsx(rg,{})})},xm=B.div`
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
    @media ${V.tablet} {
        display: block;
        .video-wrap {
            width: 100%;
        }
    }
`,s4=B.div`
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
    @media ${V.mobile} {
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
    @media ${V.tablet} {
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
`,a4=B.div`
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
    @media ${V.tablet} {
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
`,l4=B.div`
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
`,c4=B.div`
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
`;var Eg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sm=ve.createContext&&ve.createContext(Eg),u4=["attr","size","title"];function d4(e,t){if(e==null)return{};var n=m4(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function m4(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}function Am(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ds(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Am(Object(n),!0).forEach(function(r){f4(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Am(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function f4(e,t,n){return t=h4(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h4(e){var t=p4(e,"string");return typeof t=="symbol"?t:t+""}function p4(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ng(e){return e&&e.map((t,n)=>ve.createElement(t.tag,ds({key:n},t.attr),Ng(t.child)))}function hu(e){return t=>ve.createElement(g4,us({attr:ds({},e.attr)},t),Ng(e.child))}function g4(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=d4(e,u4),a=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),ve.createElement("svg",us({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:ds(ds({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&ve.createElement("title",null,i),e.children)};return Sm!==void 0?ve.createElement(Sm.Consumer,null,n=>t(n)):t(Eg)}function v4(e){return hu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(e)}const _4=({movieBody:e,channelName:t,movie_date:n,movieLikeCount:r,channelSubscribers:o,channelImage:i,channel_name:s})=>{const{year:a,month:c,day:u}=n,d=$(),[m,g]=C.useState(!1),_=()=>{g(v=>!v)};return l.jsx(l4,{children:l.jsxs("div",{className:"detail_inner",children:[l.jsxs("p",{className:"info",children:[l.jsxs("span",{children:["조회수 ",r,"회"]}),l.jsxs("span",{className:"desc",children:["최초 공개: ",a,". ",c,". ",u,"."]})]}),l.jsx("div",{className:"hidden",children:m?l.jsxs(l.Fragment,{children:[l.jsx("span",{children:e}),l.jsxs("div",{className:"script",children:[l.jsx("h2",{className:"script_title",children:"스크립트"}),l.jsx("p",{className:"script_desc",children:"스크립트를 보면서 시청하세요"}),l.jsx("button",{className:"script_btn",children:"스크립트 표시"})]}),l.jsxs("div",{className:"channel",children:[l.jsx("div",{children:l.jsx("img",{className:"channelImg",src:i,alt:""})}),l.jsxs("div",{className:"channel_detail",children:[l.jsx("h2",{className:"channel_name",children:t}),l.jsxs("p",{className:"channel_subscribers",children:["구독자 ",o]})]})]}),l.jsxs("div",{className:"but_container",children:[l.jsxs("button",{className:"channel_btn",onClick:()=>d(`/channel/${s}`),children:[l.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/play.svg.svg",alt:""}),"동영상"]}),l.jsxs("button",{className:"channel_btn",onClick:()=>d(`/channel/${s}`),children:[l.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/user.svg.svg",alt:""}),"정보"]})]}),l.jsx("div",{className:"briefly",onClick:_,children:"간략히"})]}):l.jsx(l.Fragment,{children:l.jsx("span",{className:"more",onClick:_,children:"...더보기"})})})]})})};function y4(e){return hu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.382 3C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3H12.382ZM11.7639 5H5V14H13.2361L14.2361 16H19V7H12.7639L11.7639 5Z"},child:[]}]})(e)}const w4=({movie_id:e,movie_channel:t})=>{var v;const{isAuth:n,isLoginUser:r}=I(w=>w.auth),[o,i]=C.useState(!1),[s,a]=C.useState(""),c=$(),u=se(),d=()=>{i(!1),a("")},m=()=>{n?i(!0):(alert("로그인이 필요합니다."),c("/login"))},g=w=>{a(w.target.value)},_=w=>{if(w.preventDefault(),!n){alert("로그인이 필요합니다."),c("/login");return}u(Kw({movie_id:e,movie_channel:t,comment_body:s,comment_user_id:r.user_id,comment_user_name:r.user_name})),a(""),u(Ft())};return l.jsx("div",{className:"comment",children:l.jsxs("div",{className:"comment_inner",children:[l.jsx("div",{children:l.jsx("span",{className:"user-profile",children:(v=r==null?void 0:r.user_name)==null?void 0:v.charAt(0)})}),l.jsxs("form",{className:"comment_edit",onSubmit:_,children:[l.jsx("input",{type:"text",className:"comment_edit_input",placeholder:"댓글 추가...",onFocus:m,onChange:g,value:s}),o&&l.jsxs("div",{className:"comment_footer",children:[l.jsx("div",{className:"emoji",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/emoji.svg.svg",alt:"emoji"})}),l.jsxs("div",{className:"btns",children:[l.jsx("button",{className:"btn cancel",onClick:d,children:"취소"}),l.jsx("button",{className:"btn btn_comment",type:"submit",style:{backgroundColor:s?"#007BFF":"",color:s?"#fff":""},disabled:!s,children:"댓글"})]})]})]})]})})};function b4(e){return hu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"},child:[]}]})(e)}const x4=({item:e,movie_id:t,movie_channel:n})=>{const{comment_user_name:r,comment_body:o,comment_user_id:i,comment_id:s}=e,[a,c]=C.useState(!1),{isLoginUser:u}=I(v=>v.auth),d=se(),m=$n(()=>c(!1)),g=()=>{c(v=>!v)},_=()=>{d(Gw({movie_id:t,movie_channel:n,comment_id:s,comment_user_id:i})),d(Ft())};return l.jsxs("li",{className:"CommentList",children:[l.jsx("div",{children:l.jsx("span",{className:"user-profile",children:r.charAt(0)})}),l.jsxs("div",{className:"comment_userId",children:[l.jsxs("p",{className:"userId",children:["@",r]}),l.jsx("p",{children:o})]}),l.jsx("button",{className:"BelowBtn Comment",onClick:g,children:l.jsx(b4,{})}),a&&l.jsx("div",{className:"Comment_items",ref:m,children:(u==null?void 0:u.user_id)===i?l.jsx(l.Fragment,{children:l.jsxs("p",{onClick:_,children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/trash.svg",alt:"삭제"}),l.jsx("span",{className:"Comment_item",children:"삭제"})]})}):l.jsxs("p",{children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/complaint.svg",alt:"신고"}),l.jsx("span",{className:"Comment_item",children:"신고"})]})})]})},S4=({moviesComment:e,movie_id:t,movie_channel:n})=>l.jsx("ul",{className:"user_comment",children:e.map(r=>l.jsx(x4,{item:r,movie_id:t,movie_channel:n,moviesComment:e},r.comment_id))}),A4=({moviesComment:e,movie_id:t,movie_channel:n})=>{const[r,o]=C.useState(!1),[i,s]=C.useState(e),a=u=>{const d=[...e].sort((m,g)=>u==="oldest"?new Date(m.date)-new Date(g.date):u==="newest"?new Date(g.date)-new Date(m.date):0);s(d),o(!1)},c=()=>{o(u=>!u)};return l.jsx(c4,{children:l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"comment_top",children:[l.jsxs("h2",{className:"total_comment",children:["댓글 ",e.length," 개"]}),l.jsxs("button",{className:"label",onClick:c,children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/menu.svg.svg",alt:""}),l.jsx("span",{className:"label_title",children:"정렬 기준"})]}),r&&l.jsxs("div",{className:"text",children:[l.jsx("div",{className:"label_comment",onClick:()=>a("popular"),children:l.jsx("p",{children:"인기 댓글순"})}),l.jsx("div",{className:"label_comment",onClick:()=>a("newest"),children:l.jsx("p",{children:"최신순"})})]})]}),l.jsx(w4,{movie_id:t,movie_channel:n}),l.jsx(S4,{moviesComment:e,movie_id:t,movie_channel:n})]})})},C4=({movie:e,title:t,channelName:n,channelSubscribers:r,movieLikeCount:o,channelImage:i,movieBody:s,movie_date:a,channelId:c,moviesComment:u,movie_id:d,channel_name:m,movie_channel:g,thisChannel:_})=>{var x,k,R,P,ee;const[v,w]=C.useState(!1),y=se(),{isLoginUser:h,isAuth:f}=I(U=>U.auth),p=$(),b=$n(()=>w(!1)),A=(U,q,te)=>{U.preventDefault(),h&&f?h[q].find(pn=>pn.movie_id===d)?(y(au({user_id:h.user_id,type:q,movie:e})),y(gt(te)),q==="like_Movie_List"&&(y(rm({channel_name:m,movie_id:d,type:"minus"})),y(Ft()))):(y(su({user_id:h.user_id,type:q,movie:e})),y(gt(te)),q==="like_Movie_List"&&(y(rm({channel_name:m,movie_id:d,type:"plus"})),y(Ft()))):(alert("로그인이 필요합니다."),p("/login"))},j=()=>{w(U=>!U)};return l.jsxs(a4,{children:[l.jsx("h2",{className:"title",children:t}),l.jsxs("div",{className:"top",children:[l.jsxs("div",{className:"channel",children:[l.jsx("div",{onClick:()=>p(`/channel/${m}`),children:l.jsx("img",{className:"channelImg",src:i,alt:""})}),l.jsxs("div",{className:"channel_detail",onClick:()=>p(`/channel/${m}`),children:[l.jsx("h2",{className:"channel_name",children:n}),l.jsxs("p",{className:"channel_subscribers",children:[r,"명"]})]}),l.jsx("div",{className:"subscribers",children:l.jsx(Hs,{channel_id:c,channel_name:m,thisChannel:_})})]}),l.jsxs("div",{className:"action",children:[l.jsxs("span",{className:"Like",children:[l.jsxs("button",{className:"BelowBtn like",onClick:U=>{var q;return A(U,"like_Movie_List",(q=h.like_Movie_List)!=null&&q.find(te=>te.movie_id===d)?"좋아요 목록에 삭제":"좋아요 목록에 추가")},children:[l.jsx("img",{className:"img",src:(x=h.like_Movie_List)!=null&&x.find(U=>U.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/disLike_black.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/ee727f8dfb7bcd0c51e97b02fc6c584acdb7cd2f/Icon/like.svg.svg",alt:""}),l.jsx("span",{className:"BelowBtn_comment",children:o})]}),l.jsx("button",{className:"BelowBtn",onClick:U=>{var q;return A(U,"dislike_Movie_List",(q=h.dislike_Movie_List)!=null&&q.find(te=>te.movie_id===d)?"싫어요 취소":"싫어요")},children:l.jsx("img",{className:"img",src:(k=h.dislike_Movie_List)!=null&&k.find(U=>U.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/DisLike_black.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/dislike.svg.svg",alt:""})})]}),l.jsxs(_e,{className:"BelowBtn",onClick:U=>{var q;return A(U,"Download_List",(q=h.Download_List)!=null&&q.find(te=>te.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장")},children:[l.jsx("img",{className:"img",src:(R=h.Download_List)!=null&&R.find(U=>U.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg",alt:""}),l.jsx("span",{className:"BelowBtn_comment",children:(P=h.Download_List)!=null&&P.find(U=>U.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장"})]}),l.jsxs(_e,{className:"BelowBtn",onClick:U=>{var q;return A(U,"Playlist",(q=h.Playlist)!=null&&q.find(te=>te.movie_id===d)?"재생목록 삭제":"재생목록 저장")},children:[l.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg",alt:""}),l.jsx("span",{className:"BelowBtn_comment",children:(ee=h.Playlist)!=null&&ee.find(U=>U.movie_id===d)?"재생목록 삭제":"재생목록 저장"})]}),l.jsx(_e,{className:"BelowBtn",onClick:j,children:l.jsx(v4,{className:"icons"})}),v&&l.jsxs("div",{className:"report-text",ref:b,children:[l.jsx(y4,{})," 신고"]})]})]}),l.jsx(_4,{movieBody:s,channelName:n,movie_date:a,movieLikeCount:o,channelSubscribers:r,channelImage:i,channel_name:m}),l.jsx(A4,{moviesComment:u,movie_id:d,movie_channel:g})]})},k4=({currentVideoCategory:e,currentVideoId:t})=>{const{allMovies:n}=I(o=>o.channel),r=n.filter(o=>o.movie_category===e).filter(o=>o.movie_id!==t);return l.jsx("ul",{className:"sub_video_wrap",children:r.slice().sort(()=>Math.random()-.5).slice(0,15).map(o=>l.jsx(Oe,{movie:o},o.movie_id))})},j4=()=>{var u;const{isSideMenu:e}=I(d=>d.header),{allMovies:t}=I(d=>d.channel),{isLoginUser:n}=I(d=>d.auth),{Channel:r}=I(d=>d.channel),{Movie_ID:o}=Ct(),i=se(),s=t.find(d=>d.movie_id===Number(o)),a=s?r[s.movie_channel]:null;if(C.useEffect(()=>{s||i(Ft()),e&&i(iu()),s&&(document.title=s.movie_title,i(su({user_id:n.user_id,type:"Viewing_Record",movie:s})))},[o,t,s,i]),!o||!s)return l.jsx(xm,{children:l.jsx("p",{children:"찾으시는 동영상이 없습니다."})});const c=d=>d>=1e4?Math.floor(d/1e4)+"만":d>=1e3?Math.floor(d/1e3)+"천":d<=1e3?d:d.toString();if(t)return l.jsxs(xm,{children:[l.jsxs("div",{className:"video-wrap",children:[l.jsx("div",{className:"videoInner",children:s.movie_video_type!=="video"?l.jsx("iframe",{src:s.movie_video,title:s.movie_title,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",autoPlay:!0}):l.jsx("video",{controls:!0,autoPlay:!0,muted:!0,src:s.movie_video})}),l.jsx(C4,{title:s.movie_title,movie_date:s.movie_date,movieBody:s.movie_body,channelName:a?a.channel_name:"알 수 없음",channelSubscribers:a?c(a.channel_subscribers):"알 수 없음",movieLikeCount:c(s.movie_like_count),channelImage:a?a.channel_image:"",moviesComment:s.movie_comments,movie_id:s.movie_id,movie_channel:s.movie_channel,channel_name:((u=a==null?void 0:a.Movies[0])==null?void 0:u.movie_channel)||thisChannel_channel_nav,channelId:a.channel_id,movie:s,thisChannel:a})]}),l.jsx(s4,{children:l.jsx(k4,{currentVideoCategory:s.movie_category,currentVideoId:s.movie_id})})]})},Cm=B.div`
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
`,E4=({subscribers:e,channel:t})=>{const n=$();return l.jsxs(cb,{children:[l.jsx("h3",{className:"title-h3",children:"채널 분석"}),l.jsx("p",{className:"subscribers",children:"현재 구독자수"}),l.jsx("p",{className:"subscribers-count",children:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),l.jsx(_e,{onClick:()=>n(`/channel/${t}`),children:"채널 이동"})]})},N4=({comment:e,thisChannel:t})=>{const n=$(),{isLoginUser:r}=I(o=>o.auth);return l.jsxs(ub,{children:[l.jsxs("h3",{className:"title-h3",children:["최신 댓글 (",e.length,")"]}),l.jsx("ul",{children:e.map(o=>l.jsx(ng,{comment:o,thisChannel:t},o.comment_id))}),l.jsx(_e,{onClick:()=>n(`/studio/${r.user_id}/comment`),children:"더 보기"})]})},L4=({movies:e})=>{const t=$(),{isLoginUser:n}=I(r=>r.auth);return l.jsxs(mb,{children:[l.jsx("h3",{className:"title-h3",children:"영상 콘텐츠"}),l.jsx("ul",{className:"movie-list",children:e.slice().sort(()=>Math.random()-.5).slice(0,4).map(r=>l.jsx(Oe,{movie:r},r.movie_id))}),l.jsx(_e,{onClick:()=>t(`/studio/${n.user_id}/content`),children:"콘텐츠 더 보기"})]})},I4=()=>{var a;const{User_ID:e}=Ct(),{Channel:t}=I(c=>c.channel),{isAuth:n,isLoginUser:r}=I(c=>c.auth),o=$(),i=se(),s=Object.values(t).find(c=>c.channel_id===Number(e));if(C.useEffect(()=>{n||o("/login"),s||i(Ww(r))},[n,s,e,t]),!s)return l.jsx(Cm,{children:l.jsx(as,{})});if(s)return l.jsx(Cm,{children:l.jsxs("div",{className:"inner",children:[l.jsx("h2",{className:"studio-title",children:"채널 대시보드"}),l.jsxs("div",{className:"content-box",children:[l.jsx(E4,{subscribers:s.channel_subscribers,channel:((a=s.Movies[0])==null?void 0:a.movie_channel)||r.user_email.split("@")[0]}),l.jsx(L4,{movies:s.Movies}),l.jsx(N4,{comment:s.Movies.flatMap(c=>c.movie_comments),thisChannel:s})]})]})})},P4=B.div`
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
    @media ${V.mobile} {
        background: #fff;
        .left-con-box,
        .right-con-box {
            width: 100%;
        }
        .login-container {
            flex-direction: column;
            padding: 5.5%;
            width: 100%;
            .left-con-box {
                padding: 0;
                .title {
                    font-size: 4.5rem;
                }
                .nav-youtube {
                    font-size: 160%;
                    margin: 1% 0;
                }
            }
        }
    }
`,R4=B.form`
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
                border: 1px solid #777;
                border-radius: 0.9rem;
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
    @media ${V.mobile} {
        &.login-box {
            display: flex;
            align-items: end;
            .login-input,
            .failed-input {
                width: 100%;
                margin: 0;
                align-items: start;
                input {
                    width: 100%;
                    height: 10rem;
                    font-size: 150%;
                    margin-bottom: 3%;
                }
                label {
                    font-size: 100%;
                }
            }
            .btn-wrap {
                width: 50%;
                button {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    font-size: 100%;
                }
            }
        }
    }
`,O4=B.ul`
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
    @media ${V.mobile} {
        padding: 0;
        .login-item {
            padding: 8% 0;
            height: 6vh;
            .profile-wrap {
                width: 5rem;
                height: 5rem;
                font-size: 140%;
            }
            .text-wrap {
                font-size: 150%;
                margin-left: 5px;
                .user-email {
                    font-size: 80%;
                }
            }
            .account-wrap {
                width: 4rem;
                height: 4rem;
            }
        }
    }
`,B4=B.form`
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
        border-radius: 0.9rem;
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
        .cancel-btn {
            margin-left: 1rem;
            background-color: #212121;
            color: #fff;
            &:hover {
                background-color: #424242;
            }
        }
    }
    @media ${V.mobile} {
        display: flex;
        align-items: end;
        .join-wrap {
            width: 100%;
            input {
                width: 100%;
                height: 10rem;
                font-size: 150%;
                margin-bottom: 3%;
            }
        }
        .btn-wrap {
            width: 45%;
            button {
                width: 100%;
                font-size: 100%;
            }
            .join-btn {
                width: 45%;
            }
        }
    }
`,T4=({loginCheck:e,setLoginCheck:t,setPageType:n})=>{const{LoginUser:r}=I(v=>v.auth),[o,i]=C.useState({user_email:"",user_password:""}),[s,a]=C.useState(!1),c=se(),u=$(),d=Oo(),m=v=>{const{name:w,value:y}=v.target;i({...o,[w]:y})},g=v=>{if(v.preventDefault(),r.find(w=>w.user_email===o.user_email&&w.user_password===o.user_password))c(Kp(o)),c(gt(`${o.user_email}님 로그인`)),d.pathname.startsWith("/studio")||d.pathname.startsWith("/login")||d.pathname.startsWith("/join")?u("/"):u(-1);else{t(!0);return}},_=v=>{v.preventDefault(),o.user_email?a(!s):alert("아이디를 입력해 주세요")};return l.jsxs(R4,{className:"login-box",onSubmit:g,children:[e?l.jsxs("p",{className:"failed-input",children:[l.jsx("label",{htmlFor:"",children:"이메일 또는 비밀번호가 잘못 입력되었습니다."}),l.jsx("input",{type:"email",name:"user_email",placeholder:"이메일",onChange:m}),l.jsx("input",{type:"password",name:"user_password",placeholder:"비밀번호",onChange:m,className:s?"password active":"password"})]}):l.jsxs("p",{className:"login-input",children:[l.jsx("input",{type:"email",name:"user_email",placeholder:"이메일",onChange:m}),l.jsx("input",{type:"password",name:"user_password",placeholder:"비밀번호",onChange:m,className:s?"password active":"password"})]}),l.jsxs("div",{className:"btn-wrap",children:[s?l.jsx(_e,{className:"login-btn",type:"submit",children:"로그인"}):l.jsx(_e,{className:"login-btn",onClick:_,children:"다음"}),l.jsx(_e,{className:"join-btn",onClick:v=>{v.preventDefault(),n("join")},children:"계정 만들기"})]})]})},M4=({setPageType:e})=>{const{LoginUser:t}=I(a=>a.auth),n=t.filter(a=>typeof a.user_id=="number").slice().sort(()=>Math.random()-.5).slice(0,3),r=se(),o=$(),i=Oo(),s=a=>{alert(`${a.user_name}님 로그인`),r(Kp({user_email:a.user_email,user_password:a.user_password})),r(gt(`${a.user_name}님 로그인`)),i.pathname.startsWith("/studio")||i.pathname.startsWith("/login")||i.pathname.startsWith("/join")?o("/"):o(-1)};return l.jsxs(O4,{children:[n.map(a=>l.jsxs("li",{className:"login-item",onClick:()=>s(a),children:[l.jsx("div",{className:"profile-wrap",children:l.jsx("span",{className:"user-profile",children:a.user_name.charAt(0)})}),l.jsxs("div",{className:"text-wrap",children:[l.jsx("p",{className:"user-name",children:a.user_name}),l.jsx("p",{className:"user-email",children:a.user_email})]})]},a.user_id)),l.jsxs("li",{className:"login-item",onClick:()=>e("login"),children:[l.jsx("div",{className:"account-wrap",children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Account.svg",alt:"Account"})}),l.jsx("div",{className:"text-wrap",children:l.jsx("p",{children:"다른 계정 사용"})})]})]})},F4=({setPageType:e})=>{const[t,n]=C.useState({user_name:"",user_age:"",user_tel:"",user_email:"",user_password:""}),[r,o]=C.useState(!1),i=se(),{LoginUser:s}=I(d=>d.auth),a=d=>{d.preventDefault(),t.user_name&&t.user_age&&t.user_tel&&o(!0)},c=d=>{const{name:m,value:g}=d.target;n({...t,[m]:g})},u=d=>{d.preventDefault(),s.find(m=>m.user_email===t.user_email)?alert("중복되는 아이디가 있습니다."):i(Yp(t))};return l.jsxs(B4,{onSubmit:u,children:[l.jsxs("p",{className:"join-wrap",children:[l.jsx("input",{type:"text",name:"user_name",id:"user_name",placeholder:"이름",className:"active",onChange:c}),l.jsx("input",{type:"age",name:"user_age",id:"user_age",placeholder:"나이",className:"active",onChange:c}),l.jsx("input",{type:"tel",name:"user_tel",id:"user_tel",placeholder:"전화번호",className:"active",onChange:c}),l.jsx("input",{type:"email",name:"user_email",id:"user_email",placeholder:"이메일",className:r&&"active",onChange:c}),l.jsx("input",{type:"password",name:"user_password",id:"user_password",placeholder:"비밀번호",className:r&&"active",onChange:c})]}),l.jsx("div",{className:"btn-wrap",children:r?l.jsx(_e,{type:"submit",className:"join-btn",children:"회원가입"}):l.jsxs(l.Fragment,{children:[l.jsx(_e,{onClick:a,className:"next-btn",children:"다음"}),l.jsx(_e,{onClick:d=>{d.preventDefault(),e("login")},className:"cancel-btn",children:"취소"})]})})]})},z4=()=>{const{isAuth:e}=I(s=>s.auth),[t,n]=C.useState("quickLogin"),[r,o]=C.useState(!1),i=$();if(C.useEffect(()=>{e&&i("/")},[e]),!e)return l.jsx(P4,{children:l.jsxs("div",{className:"login-container",children:[l.jsxs("div",{className:"left-con-box",children:[l.jsx("div",{className:"logo-wrap",children:l.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg"})}),l.jsxs("h2",{className:"title",children:[t==="quickLogin"&&"계정 선택",t==="login"&&"로그인",t==="join"&&"계정 생성"]}),l.jsx("p",{className:"nav-youtube",onClick:()=>i("/"),children:"YouTube로 이동"})]}),l.jsxs("div",{className:"right-con-box",children:[t==="quickLogin"&&l.jsx(M4,{setPageType:n}),t==="login"&&l.jsx(T4,{loginCheck:r,setLoginCheck:o,setPageType:n}),t==="join"&&l.jsx(F4,{setPageType:n})]})]})})},D4=B.div``,U4=()=>l.jsx(D4,{children:l.jsx("h2",{children:"Join"})}),km=B.div`
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
    @media ${V.mobile} {
        .hearder {
            .inner {
                padding: 2%;
            }
        }
        .viewing_content {
            .inner {
                padding: 2%;
                .video-list {
                    width: 100%;
                    overflow: hidden;
                    .video-loder {
                        width: 100%;
                        .video-wrap {
                            width: 30%;
                            img {
                                width: 100%;
                                height: 100%;
                                border-radius: 1rem;
                            }
                        }
                        .text-wrap {
                            /* width: 60%; */
                            width: 220px;
                            padding-left: 0;
                            .channel-logo {
                            }
                            .movie_info {
                                .movie_title {
                                    padding-right: 10%;
                                    word-break: keep-all;
                                }
                                .channel_name {
                                }
                                .movie_body {
                                    padding-right: 10%;
                                    word-break: keep-all;
                                }
                            }
                        }
                        .close-menu {
                            /* position: absolute;
                        right:0; */
                            display: none;
                        }
                        .plus-menu {
                            position: absolute;
                            right: 0;
                        }
                    }
                }
            }
        }
    }
    .page_menu {
        display: none;
    }
`;B.div``;const Jl=({category:e})=>{var a,c,u;const{Category:t}=Ct(),{isLoginUser:n}=I(d=>d.auth),[r,o]=C.useState(""),i=se(),s=()=>{switch(t||e){case"Viewing_Record":return"시청 기록";case"Playlist":return"재생 목록";case"Later_Watch":return"나중에 볼 동영상";case"like_Movie_List":return"좋아요 표시한 동영상";case"Download_List":return"오프라인 저장 동영상";default:return"피드"}};if(((a=n[t||e])==null?void 0:a.length)===0)return l.jsx(km,{className:"feed-wrap",children:l.jsx("div",{className:"inner",children:l.jsxs("p",{className:"not-list",children:[s(),"이 없습니다."]})})});if(((c=n[t||e])==null?void 0:c.length)>0)return l.jsxs(km,{className:"feed-wrap",children:[l.jsx("div",{className:"hearder",children:l.jsx("div",{className:"inner",children:l.jsx("h2",{children:s()})})}),l.jsx("div",{className:"viewing_content",children:l.jsx("div",{className:"inner",children:l.jsx("ul",{className:"video-list",children:(u=n[t||e])==null?void 0:u.filter(d=>d.movie_title.toLowerCase().includes(r==null?void 0:r.toLowerCase())||d.movie_category.toLowerCase().includes(r.toLowerCase())).map(d=>l.jsx(Oe,{movie:d,type:t},d.movie_id))})})}),l.jsx("div",{className:"page_menu",children:l.jsxs("div",{className:"search_wrap",children:[l.jsxs("div",{className:"search",children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Search.svg",alt:`${s()} 검색`}),l.jsx("input",{type:"text",value:r,onChange:d=>o(d.target.value),placeholder:`${s()} 검색`})]}),l.jsxs("div",{className:"content",onClick:()=>i(_w({user_id:n.user_id,type:t})),children:[l.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC"}),l.jsxs("p",{children:[s()," 지우기 "]})]})]})})]})},jm=B.div`
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
        /* height: 21.21%; */
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
   
    @media ${V.mobile} {
        .header_banner {
            /* height: 13%; */
            /* height: 100px; */
            height: 15rem;
            .channel_banner {
               width: 100%;
               height: 100%;
               overflow: hidden;
                img { 
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
            }
        }
        .page_header {
            .page_header_profile {
                .header_left {
                    display: flex;
                    align-items:center;
                    margin-right: 16px;
                    .channel_img {
                         width: 12.5rem;
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
        .channel_navbar {
            .inner {
                li {line-height: 6rem;}
                .channel_search {
                    button{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding : 0;
                        img {
                            width: 3rem;

                        }
                    }
                    .search_input {
                        width: 100px;
                    }
                    .search_input::placeholder {
                        font-size: 70%;
                }
            }
        }
    }
`,q4=B.div`
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
    @media ${V.mobile} {
        .channel_mainvideo {
            .video-loder {
                display: flex;
                flex-direction: column;
                width: 60rem;

                .video-wrap {
                    width: 100%;
                    height: 33rem;
                    img,
                    iframe {
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                    }
                }
                .text-wrap {
                    .channel-logo {
                        display: none;
                    }
                }
            }
        }
    }
`,$4=B.div`
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
    @media ${V.mobile} {
        .channel_video_tab {
            padding: 0;
            margin: 1.5rem 0;
        }
        .channel_videolist {
            .search_results-wrap {
                width: 100%;
                display: flex;
                flex-direction: column;
                .video-loder {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    .video-wrap {
                        width: 45%;
                        height: 15rem;
                        padding-bottom: 0%;
                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 1rem;
                        }
                    }
                    .text-wrap {
                        width: 55%;
                        padding: 0;
                        margin-left: 1.5rem;
                        .channel-logo {
                            display: none;
                        }
                    }
                }
            }
        }
    }
`;B.div`
@media ${V.mobile} {
    h2 {
        font-size:150%;
        font-weight:700;
    }
        .search_results-wrap {
            width: 100%;
            display: flex;
            flex-direction: column;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row; 
justify-content: space-between;

                .video-wrap {
                    width: 45%;
                    height: 15rem;
                    padding-bottom : 0%;
                    img {
                        width:100%;
                        height: 100%;
                        border-radius: 1rem;
                    }
                }
                .text-wrap {
                    width: 55%;
                    padding:0;
                    margin-left: 1.5rem;
                    .channel-logo {
                        display: none;
                    }
                    
                }
            }
        }
    }
    
}
`;const W4=B.div`
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
`,V4=()=>{const{Channel_name:e}=Ct(),{Channel:t}=I(n=>n.channel);return l.jsxs(l.Fragment,{children:[l.jsx(q4,{children:l.jsx("div",{className:"channel_home_inner",children:l.jsx("div",{className:"channel_main",children:l.jsx("div",{className:"channel_mainvideo",children:t[e].Movies&&t[e].Movies.length>0&&l.jsx(Oe,{movie:t[e].Movies[0]},t[e].Movies[0].movie_id)})})})}),l.jsxs("div",{className:"channel_home",children:[l.jsx("h2",{children:"추천"}),l.jsx("ul",{className:"search_results-wrap",children:t[e].Movies.map(n=>l.jsx(Oe,{movie:n},n.movie_id))})]})]})},H4=()=>{const{Channel_name:e}=Ct(),{Channel:t}=I(c=>c.channel),[n,r]=C.useState("latest"),o=t[e].Movies,i=c=>{const{year:u,month:d,day:m}=c.movie_date;return new Date(u,d-1,m)},a=(()=>{switch(n){case"latest":return[...o].sort((c,u)=>i(u)-i(c));case"popular":return[...o].sort((c,u)=>u.movie_like_count-c.movie_like_count);case"date":return[...o].sort((c,u)=>i(c)-i(u));default:return o}})();return l.jsxs($4,{children:[l.jsxs("div",{className:"channel_video_tab",children:[l.jsxs("button",{className:`sort_btn ${n==="latest"?"active":""}`,onClick:()=>r("latest"),children:[" ","최신순"," "]}),l.jsxs("button",{className:`sort_btn ${n==="popular"?"active":""}`,onClick:()=>r("popular"),children:[" ","인기순"," "]}),l.jsxs("button",{className:`sort_btn ${n==="date"?"active":""}`,onClick:()=>r("date"),children:[" ","날짜순"," "]})]}),l.jsx("div",{className:"channel_videolist",children:l.jsx("div",{className:"search_results-wrap",children:a.map(c=>l.jsx(Oe,{movie:c},c.movie_id))})})]})},K4=({searchTerm:e})=>{var o;const{Channel_name:t}=Ct(),{Channel:n}=I(i=>i.channel),r=((o=n[t])==null?void 0:o.Movies.filter(i=>i.movie_title.includes(e)||i.movie_body.includes(e)))||[];return l.jsx(W4,{children:l.jsx("div",{className:"search_results",children:l.jsx("ul",{className:"search_results-wrap",children:r.length>0?r.map(i=>l.jsx(Oe,{movie:i},i.movie_id)):l.jsxs("p",{children:["이 채널에 ‘",e,"’와(과) 일치하는 콘텐츠가 없습니다."]})})})})},G4=()=>{const{Channel_name:e}=Ct(),{Channel:t}=I(u=>u.channel),[n,r]=C.useState("home"),[o,i]=C.useState(""),s=t[e],a=s==null?void 0:s.Movies.length,c=u=>u>=1e4?`${Math.floor(u/1e4)}만명`:`${u}명`;if(!s)return l.jsx(jm,{children:l.jsxs("p",{children:['"',e,'" 찾으시는 채널이 없습니다.']})});if(s)return l.jsxs(jm,{children:[l.jsx("div",{className:"header_banner",children:l.jsx("div",{className:"channel_banner",children:l.jsx("img",{src:s.channel_banner,alt:s})})}),l.jsx("div",{className:"page_header",children:l.jsxs("div",{className:"page_header_profile",children:[l.jsx("div",{className:"header_left",children:l.jsx("img",{className:"channel_img",src:s.channel_image,alt:s})}),l.jsxs("div",{className:"header_right",children:[l.jsx("div",{className:"channel_name",children:s.channel_name}),l.jsxs("div",{className:"channel_info",children:["@",e," • 구독자"," ",c(s.channel_subscribers)," • 동영상"," ",a,"개",l.jsxs("div",{className:"channel_desc",children:[" ",s.channel_introduction]}),l.jsx(Hs,{thisChannel:s,channel_id:s.channel_id,channel_name:s.channel_nav})]})]})]})}),l.jsx("div",{className:"channel_navbar",children:l.jsxs("ul",{className:"inner",children:[l.jsx("li",{className:n==="home"?"nav_active":"",onClick:()=>r("home"),children:"홈"}),l.jsx("li",{className:n==="video"?"nav_active":"",onClick:()=>r("video"),children:"동영상"}),l.jsxs("li",{className:"channel_search",children:[l.jsx("button",{children:l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Search.svg",alt:"영상검색"})}),l.jsx("input",{className:"search_input",type:"text",value:o,onChange:u=>i(u.target.value),placeholder:"검색"})]})]})}),l.jsx("div",{className:"channel_content",children:o?l.jsx(K4,{searchTerm:o}):n==="home"?l.jsx(V4,{}):l.jsx(H4,{})})]})},Y4=B.div`
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
    /* 11/13 오후 김혜림 전체 추가 */
    @media ${V.mobile} {
        .subscript-select {
            width: 13rem;
            padding: 1rem;
            font-size: 2rem;
        }
    }
`,X4=B.ul`
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
    /* 11/13 오후 김혜림 추가 */
    @media ${V.mobile} {
        .subscript-li {
            .subscript-li-img {
                width: 8rem;
                height: 8rem;
                margin-right: 1.6rem;
            }
            .subscript-channel-content {
                width: 63%;
                .content-channel-name {
                    margin-bottom: 0;
                }
                .content-channel-engName,
                .content-channel-subscribers,
                .content-channel-introduction {
                    font-size: 1.6rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: keep-all;
                }
            }
            .subscript-icon {
                .subscribers-btn {
                    width: 100%;
                    font-size: 1.6rem;
                    .img {
                        width: 30%;
                    }
                }
            }
        }
    }
`,J4=B.div`
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
`,Q4=({channel:e})=>{var u;const{channel_id:t,channel_name:n,channel_image:r,channel_introduction:o,channel_subscribers:i,channel_nav:s,Movies:a}=e,c=$();return l.jsxs("li",{className:"subscript-li",onClick:()=>{var d;return c(`/channel/${((d=e.Movies[0])==null?void 0:d.movie_channel)||s}`)},children:[l.jsx("img",{className:"subscript-li-img",src:r,alt:n}),l.jsxs("div",{className:"subscript-channel-content",children:[l.jsx("strong",{className:"content-channel-name",children:n}),l.jsxs("span",{className:"content-channel-engName",children:["@",((u=a[0])==null?void 0:u.movie_channel)||s]}),l.jsxs("span",{className:"content-channel-subscribers",children:["구독자 ",i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"명"]}),l.jsx("p",{className:"content-channel-introduction",children:o})]}),l.jsx("div",{className:"subscript-icon",children:l.jsx(Hs,{channel_id:t,channel_name:n,thisChannel:e})})]})},Z4=({sortData:e,setThisSortType:t,thisSortType:n})=>{const[r,o]=C.useState(!1),i=$n(()=>o(!1));return l.jsx("div",{ref:i,children:l.jsxs(Y4,{className:"subscript-sort",children:[l.jsxs("p",{className:"subscript-select",onClick:()=>o(!r),children:[n.name,l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/b26aaeebc663db109b629ff9f3eba7500b8fc6f3/Icon/Down_B.svg",alt:""})]}),l.jsx("ul",{className:"subscript-ul",style:{display:r?"block":"none"},children:e.map(s=>l.jsx("li",{className:s.type,onClick:()=>{t(s),o(!r)},children:s.name},s.id))})]})})},Em=[{id:0x580cafab62fb5,name:"가나다순",type:"channel_name"},{id:6546165164451165,name:"구독자순",type:"channel_subscribers"}],e2=()=>{const{Channel:e}=I(s=>s.channel),t=Object.keys(e).map(s=>e[s]),[n,r]=C.useState(Em[0]),{isLoginUser:o}=I(s=>s.auth),i=t.filter(s=>{var a;return(a=o==null?void 0:o.Subscription_Id)==null?void 0:a.includes(s.channel_id)});return l.jsxs(X4,{children:[l.jsx(Z4,{sortData:Em,setThisSortType:r,thisSortType:n}),i.sort((s,a)=>n.type==="channel_name"?s[n.type]>a[n.type]?1:s[n.type]<a[n.type]?-1:0:a[n.type]>s[n.type]?1:a[n.type]<s[n.type]?-1:0).map(s=>l.jsx(Q4,{channel:s},s.channel_id))]})},t2=B.div`
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
    /* 11/13 김혜림 전체 추가 */
    @media ${V.mobile} {
        .subscriptInner {
            width: 100%;
            padding: 0 2rem;
        }
    }
`,n2=()=>l.jsxs(J4,{children:[l.jsx("img",{src:"https://github.com/React-Project-Team1/data-center/blob/main/Subscription_logout.png?raw=true",alt:"icon",className:"Not_login_subscription_img"}),l.jsx("strong",{className:"Not_login_subscription_title",children:"새로운 동영상을 놓치지 마세요."}),l.jsx("p",{className:"Not_login_subscription_desc",children:"즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요."}),l.jsx("div",{className:"login_button",children:l.jsx(lu,{})})]}),r2=()=>{const{isAuth:e}=I(t=>t.auth);return l.jsx(t2,{children:e?l.jsxs("div",{className:"subscriptInner",children:[l.jsx("h2",{className:"subscriptH2",children:"모든 구독 채널"}),l.jsx("div",{className:"subscription-content-box",children:l.jsx(e2,{})})]}):l.jsx(n2,{})})},o2=B.div`
    @media ${V.mobile} {
        width: 100%;
        min-height: 100vh;
        .feed-wrap {
            min-height: 0;
        }
    }
`,i2=B.ul`
    width: 100%;
    .menu-item {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 2rem;
        border-bottom: 1px solid #dfdfdf;
        img {
            margin-right: 2rem;
        }
        .name {
            font-size: 2.4rem;
        }
    }
`,s2=()=>{const e=se(),t=$();return l.jsxs(i2,{children:[l.jsxs("li",{className:"menu-item",onClick:()=>t("/feed/Download_List"),children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Download.svg",alt:"Download"}),l.jsx("p",{className:"name",children:"오프라인 저장 동영상"})]}),l.jsxs("li",{className:"menu-item",onClick:()=>t("/feed/like_Movie_List"),children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Like_list.svg",alt:"Like_list"}),l.jsx("p",{className:"name",children:"좋아요 표시한 동영상"})]}),l.jsxs("li",{className:"menu-item",onClick:()=>e(Gp()),children:[l.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/logout.svg",alt:"logout"}),l.jsx("p",{className:"name",children:"로그아웃"})]})]})},a2=()=>{const{isAuth:e}=I(n=>n.auth),t=$();if(C.useEffect(()=>{e||t("/login")},[e]),e)return l.jsxs(o2,{children:[l.jsx(Jl,{category:"Viewing_Record"}),l.jsx(Jl,{category:"Later_Watch"}),l.jsx(s2,{})]})};var Lg=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ig=eu(Nm||(Nm=Lg([`
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
`])));kp(Lm||(Lm=Lg(["",""],["",""])),Ig);var Nm,Lm;const l2=kp`
  ${Ig}
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

  @media ${V.tablet} {
    html{
      font-size: 8px;
    }
  }
  @media ${V.mobile} {
    html{
      font-size: 6px;
    }
    .pc{
      display: none;
    }
    .mobile{
      display: block;
    }
    p,div,form,ul,li,span,input,button{
      box-sizing: border-box;
    }
    
  }
`,c2=()=>l.jsx(l.Fragment,{children:l.jsxs(Z0,{children:[l.jsx(l2,{}),l.jsxs(X0,{children:[l.jsxs(Y,{path:"/",element:l.jsx(rb,{}),children:[l.jsx(Y,{index:!0,element:l.jsx(n4,{})}),l.jsxs(Y,{path:"/movies",children:[l.jsx(Y,{index:!0,element:l.jsx(bm,{})}),l.jsx(Y,{path:":Search",element:l.jsx(bm,{})})]}),l.jsx(Y,{path:"/watch",children:l.jsx(Y,{path:":Movie_ID",element:l.jsx(j4,{})})}),l.jsx(Y,{path:"/channel",children:l.jsx(Y,{path:":Channel_name",element:l.jsx(G4,{})})}),l.jsx(Y,{path:"/feed",children:l.jsx(Y,{path:":Category",element:l.jsx(Jl,{})})}),l.jsx(Y,{path:"/subscription",children:l.jsx(Y,{index:!0,element:l.jsx(r2,{})})}),l.jsx(Y,{path:"/mypage",children:l.jsx(Y,{index:!0,element:l.jsx(a2,{})})}),l.jsx(Y,{path:"*",element:l.jsx(lb,{})})]}),l.jsx(Y,{path:"/login",children:l.jsx(Y,{index:!0,element:l.jsx(z4,{})})}),l.jsx(Y,{path:"/join",children:l.jsx(Y,{index:!0,element:l.jsx(U4,{})})}),l.jsxs(Y,{path:"/studio",element:l.jsx(ab,{}),children:[l.jsx(Y,{path:":User_ID/videoupload",element:l.jsx(xb,{})}),l.jsx(Y,{path:":User_ID/dashboard",element:l.jsx(I4,{})}),l.jsx(Y,{path:":User_ID/content",element:l.jsx(bb,{})}),l.jsx(Y,{path:":User_ID/comment",element:l.jsx(gb,{})})]})]})]})}),u2=ew({reducer:{auth:Sw,channel:Yw,header:fw,subscribers:Qw,savepop:Nw}});Wh(document.getElementById("root")).render(l.jsx(C.StrictMode,{children:l.jsx(k1,{store:u2,children:l.jsx(c2,{})})}));
