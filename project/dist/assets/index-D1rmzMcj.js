function Rg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Og(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pm={exports:{}},fs={},Rm={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),Bg=Symbol.for("react.portal"),Tg=Symbol.for("react.fragment"),Mg=Symbol.for("react.strict_mode"),Fg=Symbol.for("react.profiler"),zg=Symbol.for("react.provider"),Dg=Symbol.for("react.context"),Ug=Symbol.for("react.forward_ref"),qg=Symbol.for("react.suspense"),$g=Symbol.for("react.memo"),Wg=Symbol.for("react.lazy"),gu=Symbol.iterator;function Vg(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var Om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bm=Object.assign,Tm={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Tm,this.updater=n||Om}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mm(){}Mm.prototype=Cr.prototype;function ec(e,t,n){this.props=e,this.context=t,this.refs=Tm,this.updater=n||Om}var tc=ec.prototype=new Mm;tc.constructor=ec;Bm(tc,Cr.prototype);tc.isPureReactComponent=!0;var vu=Array.isArray,Fm=Object.prototype.hasOwnProperty,nc={current:null},zm={key:!0,ref:!0,__self:!0,__source:!0};function Dm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Fm.call(t,r)&&!zm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ni,type:e,key:o,ref:s,props:i,_owner:nc.current}}function Hg(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function Kg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _u=/\/+/g;function Xs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kg(""+e.key):t.toString(36)}function ao(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ni:case Bg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Xs(s,0):r,vu(i)?(n="",e!=null&&(n=e.replace(_u,"$&/")+"/"),ao(i,t,n,"",function(u){return u})):i!=null&&(rc(i)&&(i=Hg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_u,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",vu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Xs(o,l);s+=ao(o,t,n,c,i)}else if(c=Vg(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Xs(o,l++),s+=ao(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ui(e,t,n){if(e==null)return e;var r=[],i=0;return ao(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Gg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},lo={transition:null},Xg={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:lo,ReactCurrentOwner:nc};function Um(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Ui,forEach:function(e,t,n){Ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ui(e,function(){t++}),t},toArray:function(e){return Ui(e,function(t){return t})||[]},only:function(e){if(!rc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Cr;z.Fragment=Tg;z.Profiler=Fg;z.PureComponent=ec;z.StrictMode=Mg;z.Suspense=qg;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg;z.act=Um;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=nc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Fm.call(t,c)&&!zm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ni,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:Dg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zg,_context:e},e.Consumer=e};z.createElement=Dm;z.createFactory=function(e){var t=Dm.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Ug,render:e}};z.isValidElement=rc;z.lazy=function(e){return{$$typeof:Wg,_payload:{_status:-1,_result:e},_init:Gg}};z.memo=function(e,t){return{$$typeof:$g,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=lo.transition;lo.transition={};try{e()}finally{lo.transition=t}};z.unstable_act=Um;z.useCallback=function(e,t){return Le.current.useCallback(e,t)};z.useContext=function(e){return Le.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};z.useEffect=function(e,t){return Le.current.useEffect(e,t)};z.useId=function(){return Le.current.useId()};z.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Le.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};z.useRef=function(e){return Le.current.useRef(e)};z.useState=function(e){return Le.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Le.current.useTransition()};z.version="18.3.1";Rm.exports=z;var C=Rm.exports;const pe=Og(C),Ta=Rg({__proto__:null,default:pe},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=C,Qg=Symbol.for("react.element"),Jg=Symbol.for("react.fragment"),Zg=Object.prototype.hasOwnProperty,ev=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tv={key:!0,ref:!0,__self:!0,__source:!0};function qm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Zg.call(t,r)&&!tv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qg,type:e,key:o,ref:s,props:i,_owner:ev.current}}fs.Fragment=Jg;fs.jsx=qm;fs.jsxs=qm;Pm.exports=fs;var a=Pm.exports,$m={exports:{}},Ye={},Wm={exports:{}},Vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var R=E.length;E.push(L);e:for(;0<R;){var U=R-1>>>1,H=E[U];if(0<i(H,L))E[U]=L,E[R]=H,R=U;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],R=E.pop();if(R!==L){E[0]=R;e:for(var U=0,H=E.length,_n=H>>>1;U<_n;){var st=2*(U+1)-1,$t=E[st],De=st+1,Et=E[De];if(0>i($t,R))De<H&&0>i(Et,$t)?(E[U]=Et,E[De]=R,U=De):(E[U]=$t,E[st]=R,U=st);else if(De<H&&0>i(Et,R))E[U]=Et,E[De]=R,U=De;else break e}}return L}function i(E,L){var R=E.sortIndex-L.sortIndex;return R!==0?R:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,m=null,g=3,_=!1,v=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=E)r(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(u)}}function b(E){if(w=!1,h(E),!v)if(n(c)!==null)v=!0,qt(S);else{var L=n(u);L!==null&&wt(b,L.startTime-E)}}function S(E,L){v=!1,w&&(w=!1,p(k),k=-1),_=!0;var R=g;try{for(h(L),m=n(c);m!==null&&(!(m.expirationTime>L)||E&&!J());){var U=m.callback;if(typeof U=="function"){m.callback=null,g=m.priorityLevel;var H=U(m.expirationTime<=L);L=e.unstable_now(),typeof H=="function"?m.callback=H:m===n(c)&&r(c),h(L)}else r(c);m=n(c)}if(m!==null)var _n=!0;else{var st=n(u);st!==null&&wt(b,st.startTime-L),_n=!1}return _n}finally{m=null,g=R,_=!1}}var j=!1,x=null,k=-1,B=5,O=-1;function J(){return!(e.unstable_now()-O<B)}function ot(){if(x!==null){var E=e.unstable_now();O=E;var L=!0;try{L=x(!0,E)}finally{L?be():(j=!1,x=null)}}else j=!1}var be;if(typeof f=="function")be=function(){f(ot)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Ut=xe.port2;xe.port1.onmessage=ot,be=function(){Ut.postMessage(null)}}else be=function(){y(ot,0)};function qt(E){x=E,j||(j=!0,be())}function wt(E,L){k=y(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||_||(v=!0,qt(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var R=g;g=L;try{return E()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=g;g=E;try{return L()}finally{g=R}},e.unstable_scheduleCallback=function(E,L,R){var U=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?U+R:U):R=U,E){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=R+H,E={id:d++,callback:L,priorityLevel:E,startTime:R,expirationTime:H,sortIndex:-1},R>U?(E.sortIndex=R,t(u,E),n(c)===null&&E===n(u)&&(w?(p(k),k=-1):w=!0,wt(b,R-U))):(E.sortIndex=H,t(c,E),v||_||(v=!0,qt(S))),E},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(E){var L=g;return function(){var R=g;g=L;try{return E.apply(this,arguments)}finally{g=R}}}})(Vm);Wm.exports=Vm;var nv=Wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=C,Ke=nv;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,ii={};function Un(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(ii[e]=t,e=0;e<t.length;e++)Hm.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yu={},wu={};function ov(e){return Ma.call(wu,e)?!0:Ma.call(yu,e)?!1:iv.test(e)?wu[e]=!0:(yu[e]=!0,!1)}function sv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function av(e,t,n,r){if(t===null||typeof t>"u"||sv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var ic=/[\-:]([a-z])/g;function oc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ic,oc);we[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ic,oc);we[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ic,oc);we[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function sc(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(av(t,n,i,r)&&(n=null),r||i===null?ov(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Dt=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qi=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),Km=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),lc=Symbol.for("react.forward_ref"),za=Symbol.for("react.suspense"),Da=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),bu=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Ys;function Ur(e){if(Ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ys=t&&t[1]||""}return`
`+Ys+e}var Qs=!1;function Js(e,t){if(!e||Qs)return"";Qs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Qs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ur(e):""}function lv(e){switch(e.tag){case 5:return Ur(e.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 2:case 15:return e=Js(e.type,!1),e;case 11:return e=Js(e.type.render,!1),e;case 1:return e=Js(e.type,!0),e;default:return""}}function Ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Kn:return"Portal";case Fa:return"Profiler";case ac:return"StrictMode";case za:return"Suspense";case Da:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gm:return(e.displayName||"Context")+".Consumer";case Km:return(e._context.displayName||"Context")+".Provider";case lc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cc:return t=e.displayName||null,t!==null?t:Ua(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return Ua(e(t))}catch{}}return null}function cv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ua(t);case 8:return t===ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uv(e){var t=Ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $i(e){e._valueTracker||(e._valueTracker=uv(e))}function Qm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ym(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qa(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jm(e,t){t=t.checked,t!=null&&sc(e,"checked",t,!1)}function $a(e,t){Jm(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wa(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Au(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wa(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(qr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function Zm(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ef(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ha(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ef(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wi,tf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dv=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){dv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function nf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function rf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var mv=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ka(e,t){if(t){if(mv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,ar=null,lr=null;function ku(e){if(e=Pi(e)){if(typeof Ya!="function")throw Error(N(280));var t=e.stateNode;t&&(t=_s(t),Ya(e.stateNode,e.type,t))}}function of(e){ar?lr?lr.push(e):lr=[e]:ar=e}function sf(){if(ar){var e=ar,t=lr;if(lr=ar=null,ku(e),t)for(e=0;e<t.length;e++)ku(t[e])}}function af(e,t){return e(t)}function lf(){}var Zs=!1;function cf(e,t,n){if(Zs)return e(t,n);Zs=!0;try{return af(e,t,n)}finally{Zs=!1,(ar!==null||lr!==null)&&(lf(),sf())}}function si(e,t){var n=e.stateNode;if(n===null)return null;var r=_s(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Qa=!1;if(Bt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{Qa=!1}function fv(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Gr=!1,Eo=null,No=!1,Ja=null,hv={onError:function(e){Gr=!0,Eo=e}};function pv(e,t,n,r,i,o,s,l,c){Gr=!1,Eo=null,fv.apply(hv,arguments)}function gv(e,t,n,r,i,o,s,l,c){if(pv.apply(this,arguments),Gr){if(Gr){var u=Eo;Gr=!1,Eo=null}else throw Error(N(198));No||(No=!0,Ja=u)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ju(e){if(qn(e)!==e)throw Error(N(188))}function vv(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ju(i),e;if(o===r)return ju(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function df(e){return e=vv(e),e!==null?mf(e):null}function mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mf(e);if(t!==null)return t;e=e.sibling}return null}var ff=Ke.unstable_scheduleCallback,Eu=Ke.unstable_cancelCallback,_v=Ke.unstable_shouldYield,yv=Ke.unstable_requestPaint,se=Ke.unstable_now,wv=Ke.unstable_getCurrentPriorityLevel,dc=Ke.unstable_ImmediatePriority,hf=Ke.unstable_UserBlockingPriority,Lo=Ke.unstable_NormalPriority,bv=Ke.unstable_LowPriority,pf=Ke.unstable_IdlePriority,hs=null,Ct=null;function xv(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(hs,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Cv,Av=Math.log,Sv=Math.LN2;function Cv(e){return e>>>=0,e===0?32:31-(Av(e)/Sv|0)|0}var Vi=64,Hi=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Io(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=$r(l):(o&=s,o!==0&&(r=$r(o)))}else s=n&~i,s!==0?r=$r(s):o!==0&&(r=$r(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function kv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ft(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=kv(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gf(){var e=Vi;return Vi<<=1,!(Vi&4194240)&&(Vi=64),e}function ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function Ev(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function mc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function vf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _f,fc,yf,wf,bf,el=!1,Ki=[],tn=null,nn=null,rn=null,ai=new Map,li=new Map,Yt=[],Nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(t.pointerId)}}function Or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&fc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lv(e,t,n,r,i){switch(t){case"focusin":return tn=Or(tn,e,t,n,r,i),!0;case"dragenter":return nn=Or(nn,e,t,n,r,i),!0;case"mouseover":return rn=Or(rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ai.set(o,Or(ai.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,li.set(o,Or(li.get(o)||null,e,t,n,r,i)),!0}return!1}function xf(e){var t=An(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=uf(n),t!==null){e.blockedOn=t,bf(e.priority,function(){yf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xa=r,n.target.dispatchEvent(r),Xa=null}else return t=Pi(n),t!==null&&fc(t),e.blockedOn=n,!1;t.shift()}return!0}function Lu(e,t,n){co(e)&&n.delete(t)}function Iv(){el=!1,tn!==null&&co(tn)&&(tn=null),nn!==null&&co(nn)&&(nn=null),rn!==null&&co(rn)&&(rn=null),ai.forEach(Lu),li.forEach(Lu)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,el||(el=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Iv)))}function ci(e){function t(i){return Br(i,e)}if(0<Ki.length){Br(Ki[0],e);for(var n=1;n<Ki.length;n++){var r=Ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&Br(tn,e),nn!==null&&Br(nn,e),rn!==null&&Br(rn,e),ai.forEach(t),li.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)xf(n),n.blockedOn===null&&Yt.shift()}var cr=Dt.ReactCurrentBatchConfig,Po=!0;function Pv(e,t,n,r){var i=V,o=cr.transition;cr.transition=null;try{V=1,hc(e,t,n,r)}finally{V=i,cr.transition=o}}function Rv(e,t,n,r){var i=V,o=cr.transition;cr.transition=null;try{V=4,hc(e,t,n,r)}finally{V=i,cr.transition=o}}function hc(e,t,n,r){if(Po){var i=tl(e,t,n,r);if(i===null)ua(e,t,r,Ro,n),Nu(e,r);else if(Lv(i,e,t,n,r))r.stopPropagation();else if(Nu(e,r),t&4&&-1<Nv.indexOf(e)){for(;i!==null;){var o=Pi(i);if(o!==null&&_f(o),o=tl(e,t,n,r),o===null&&ua(e,t,r,Ro,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ua(e,t,r,null,n)}}var Ro=null;function tl(e,t,n,r){if(Ro=null,e=uc(r),e=An(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ro=e,null}function Af(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wv()){case dc:return 1;case hf:return 4;case Lo:case bv:return 16;case pf:return 536870912;default:return 16}default:return 16}}var Jt=null,pc=null,uo=null;function Sf(){if(uo)return uo;var e,t=pc,n=t.length,r,i="value"in Jt?Jt.value:Jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return uo=i.slice(e,1<r?1-r:void 0)}function mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function Iu(){return!1}function Qe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gi:Iu,this.isPropagationStopped=Iu,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=Qe(kr),Ii=ie({},kr,{view:0,detail:0}),Ov=Qe(Ii),ta,na,Tr,ps=ie({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(ta=e.screenX-Tr.screenX,na=e.screenY-Tr.screenY):na=ta=0,Tr=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),Pu=Qe(ps),Bv=ie({},ps,{dataTransfer:0}),Tv=Qe(Bv),Mv=ie({},Ii,{relatedTarget:0}),ra=Qe(Mv),Fv=ie({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=Qe(Fv),Dv=ie({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uv=Qe(Dv),qv=ie({},kr,{data:0}),Ru=Qe(qv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vv[e])?!!t[e]:!1}function vc(){return Hv}var Kv=ie({},Ii,{key:function(e){if(e.key){var t=$v[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gv=Qe(Kv),Xv=ie({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=Qe(Xv),Yv=ie({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),Qv=Qe(Yv),Jv=ie({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Qe(Jv),e_=ie({},ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t_=Qe(e_),n_=[9,13,27,32],_c=Bt&&"CompositionEvent"in window,Xr=null;Bt&&"documentMode"in document&&(Xr=document.documentMode);var r_=Bt&&"TextEvent"in window&&!Xr,Cf=Bt&&(!_c||Xr&&8<Xr&&11>=Xr),Bu=" ",Tu=!1;function kf(e,t){switch(e){case"keyup":return n_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function i_(e,t){switch(e){case"compositionend":return jf(t);case"keypress":return t.which!==32?null:(Tu=!0,Bu);case"textInput":return e=t.data,e===Bu&&Tu?null:e;default:return null}}function o_(e,t){if(Xn)return e==="compositionend"||!_c&&kf(e,t)?(e=Sf(),uo=pc=Jt=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cf&&t.locale!=="ko"?null:t.data;default:return null}}var s_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s_[e.type]:t==="textarea"}function Ef(e,t,n,r){of(r),t=Oo(t,"onChange"),0<t.length&&(n=new gc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,ui=null;function a_(e){zf(e,0)}function gs(e){var t=Jn(e);if(Qm(t))return e}function l_(e,t){if(e==="change")return t}var Nf=!1;if(Bt){var ia;if(Bt){var oa="oninput"in document;if(!oa){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),oa=typeof Fu.oninput=="function"}ia=oa}else ia=!1;Nf=ia&&(!document.documentMode||9<document.documentMode)}function zu(){Yr&&(Yr.detachEvent("onpropertychange",Lf),ui=Yr=null)}function Lf(e){if(e.propertyName==="value"&&gs(ui)){var t=[];Ef(t,ui,e,uc(e)),cf(a_,t)}}function c_(e,t,n){e==="focusin"?(zu(),Yr=t,ui=n,Yr.attachEvent("onpropertychange",Lf)):e==="focusout"&&zu()}function u_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gs(ui)}function d_(e,t){if(e==="click")return gs(t)}function m_(e,t){if(e==="input"||e==="change")return gs(t)}function f_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:f_;function di(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ma.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var n=Du(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Du(n)}}function If(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?If(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h_(e){var t=Pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&If(n.ownerDocument.documentElement,n)){if(r!==null&&yc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Uu(n,o);var s=Uu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p_=Bt&&"documentMode"in document&&11>=document.documentMode,Yn=null,nl=null,Qr=null,rl=!1;function qu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rl||Yn==null||Yn!==jo(r)||(r=Yn,"selectionStart"in r&&yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&di(Qr,r)||(Qr=r,r=Oo(nl,"onSelect"),0<r.length&&(t=new gc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function Xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},sa={},Rf={};Bt&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function vs(e){if(sa[e])return sa[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rf)return sa[e]=t[n];return e}var Of=vs("animationend"),Bf=vs("animationiteration"),Tf=vs("animationstart"),Mf=vs("transitionend"),Ff=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){Ff.set(e,t),Un(t,[e])}for(var aa=0;aa<$u.length;aa++){var la=$u[aa],g_=la.toLowerCase(),v_=la[0].toUpperCase()+la.slice(1);hn(g_,"on"+v_)}hn(Of,"onAnimationEnd");hn(Bf,"onAnimationIteration");hn(Tf,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Mf,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),__=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gv(r,t,void 0,e),e.currentTarget=null}function zf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Wu(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Wu(i,l,u),o=c}}}if(No)throw e=Ja,No=!1,Ja=null,e}function X(e,t){var n=t[ll];n===void 0&&(n=t[ll]=new Set);var r=e+"__bubble";n.has(r)||(Df(t,e,2,!1),n.add(r))}function ca(e,t,n){var r=0;t&&(r|=4),Df(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[Yi]){e[Yi]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(__.has(n)||ca(n,!1,e),ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,ca("selectionchange",!1,t))}}function Df(e,t,n,r){switch(Af(t)){case 1:var i=Pv;break;case 4:i=Rv;break;default:i=hc}n=i.bind(null,t,n,e),i=void 0,!Qa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ua(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=An(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}cf(function(){var u=o,d=uc(n),m=[];e:{var g=Ff.get(e);if(g!==void 0){var _=gc,v=e;switch(e){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":_=Gv;break;case"focusin":v="focus",_=ra;break;case"focusout":v="blur",_=ra;break;case"beforeblur":case"afterblur":_=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Qv;break;case Of:case Bf:case Tf:_=zv;break;case Mf:_=Zv;break;case"scroll":_=Ov;break;case"wheel":_=t_;break;case"copy":case"cut":case"paste":_=Uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ou}var w=(t&4)!==0,y=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var f=u,h;f!==null;){h=f;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,p!==null&&(b=si(f,p),b!=null&&w.push(fi(f,b,h)))),y)break;f=f.return}0<w.length&&(g=new _(g,v,null,n,d),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",g&&n!==Xa&&(v=n.relatedTarget||n.fromElement)&&(An(v)||v[Tt]))break e;if((_||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?An(v):null,v!==null&&(y=qn(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(w=Pu,b="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ou,b="onPointerLeave",p="onPointerEnter",f="pointer"),y=_==null?g:Jn(_),h=v==null?g:Jn(v),g=new w(b,f+"leave",_,n,d),g.target=y,g.relatedTarget=h,b=null,An(d)===u&&(w=new w(p,f+"enter",v,n,d),w.target=h,w.relatedTarget=y,b=w),y=b,_&&v)t:{for(w=_,p=v,f=0,h=w;h;h=Vn(h))f++;for(h=0,b=p;b;b=Vn(b))h++;for(;0<f-h;)w=Vn(w),f--;for(;0<h-f;)p=Vn(p),h--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Vn(w),p=Vn(p)}w=null}else w=null;_!==null&&Vu(m,g,_,w,!1),v!==null&&y!==null&&Vu(m,y,v,w,!0)}}e:{if(g=u?Jn(u):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var S=l_;else if(Mu(g))if(Nf)S=m_;else{S=u_;var j=c_}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=d_);if(S&&(S=S(e,u))){Ef(m,S,n,d);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Wa(g,"number",g.value)}switch(j=u?Jn(u):window,e){case"focusin":(Mu(j)||j.contentEditable==="true")&&(Yn=j,nl=u,Qr=null);break;case"focusout":Qr=nl=Yn=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,qu(m,n,d);break;case"selectionchange":if(p_)break;case"keydown":case"keyup":qu(m,n,d)}var x;if(_c)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Xn?kf(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Cf&&n.locale!=="ko"&&(Xn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Xn&&(x=Sf()):(Jt=d,pc="value"in Jt?Jt.value:Jt.textContent,Xn=!0)),j=Oo(u,k),0<j.length&&(k=new Ru(k,e,null,n,d),m.push({event:k,listeners:j}),x?k.data=x:(x=jf(n),x!==null&&(k.data=x)))),(x=r_?i_(e,n):o_(e,n))&&(u=Oo(u,"onBeforeInput"),0<u.length&&(d=new Ru("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=x))}zf(m,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=si(e,n),o!=null&&r.unshift(fi(e,o,i)),o=si(e,t),o!=null&&r.push(fi(e,o,i))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=si(n,o),c!=null&&s.unshift(fi(n,c,l))):i||(c=si(n,o),c!=null&&s.push(fi(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var y_=/\r\n?/g,w_=/\u0000|\uFFFD/g;function Hu(e){return(typeof e=="string"?e:""+e).replace(y_,`
`).replace(w_,"")}function Qi(e,t,n){if(t=Hu(t),Hu(e)!==t&&n)throw Error(N(425))}function Bo(){}var il=null,ol=null;function sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,b_=typeof clearTimeout=="function"?clearTimeout:void 0,Ku=typeof Promise=="function"?Promise:void 0,x_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ku<"u"?function(e){return Ku.resolve(null).then(e).catch(A_)}:al;function A_(e){setTimeout(function(){throw e})}function da(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ci(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),St="__reactFiber$"+jr,hi="__reactProps$"+jr,Tt="__reactContainer$"+jr,ll="__reactEvents$"+jr,S_="__reactListeners$"+jr,C_="__reactHandles$"+jr;function An(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gu(e);e!==null;){if(n=e[St])return n;e=Gu(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[St]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function _s(e){return e[hi]||null}var cl=[],Zn=-1;function pn(e){return{current:e}}function Q(e){0>Zn||(e.current=cl[Zn],cl[Zn]=null,Zn--)}function G(e,t){Zn++,cl[Zn]=e.current,e.current=t}var mn={},je=pn(mn),Be=pn(!1),Rn=mn;function fr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function To(){Q(Be),Q(je)}function Xu(e,t,n){if(je.current!==mn)throw Error(N(168));G(je,t),G(Be,n)}function Uf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,cv(e)||"Unknown",i));return ie({},n,r)}function Mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Rn=je.current,G(je,e),G(Be,Be.current),!0}function Yu(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Uf(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,Q(Be),Q(je),G(je,e)):Q(Be),G(Be,n)}var It=null,ys=!1,ma=!1;function qf(e){It===null?It=[e]:It.push(e)}function k_(e){ys=!0,qf(e)}function gn(){if(!ma&&It!==null){ma=!0;var e=0,t=V;try{var n=It;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,ys=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),ff(dc,gn),i}finally{V=t,ma=!1}}return null}var er=[],tr=0,Fo=null,zo=0,Je=[],Ze=0,On=null,Pt=1,Rt="";function wn(e,t){er[tr++]=zo,er[tr++]=Fo,Fo=e,zo=t}function $f(e,t,n){Je[Ze++]=Pt,Je[Ze++]=Rt,Je[Ze++]=On,On=e;var r=Pt;e=Rt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var o=32-ft(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Pt=1<<32-ft(t)+i|n<<i|r,Rt=o+e}else Pt=1<<o|n<<i|r,Rt=e}function wc(e){e.return!==null&&(wn(e,1),$f(e,1,0))}function bc(e){for(;e===Fo;)Fo=er[--tr],er[tr]=null,zo=er[--tr],er[tr]=null;for(;e===On;)On=Je[--Ze],Je[Ze]=null,Rt=Je[--Ze],Je[Ze]=null,Pt=Je[--Ze],Je[Ze]=null}var Ve=null,$e=null,ee=!1,ut=null;function Wf(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,$e=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=On!==null?{id:Pt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,$e=null,!0):!1;default:return!1}}function ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dl(e){if(ee){var t=$e;if(t){var n=t;if(!Qu(e,t)){if(ul(e))throw Error(N(418));t=on(n.nextSibling);var r=Ve;t&&Qu(e,t)?Wf(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ve=e)}}else{if(ul(e))throw Error(N(418));e.flags=e.flags&-4097|2,ee=!1,Ve=e}}}function Ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Ji(e){if(e!==Ve)return!1;if(!ee)return Ju(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sl(e.type,e.memoizedProps)),t&&(t=$e)){if(ul(e))throw Vf(),Error(N(418));for(;t;)Wf(e,t),t=on(t.nextSibling)}if(Ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ve?on(e.stateNode.nextSibling):null;return!0}function Vf(){for(var e=$e;e;)e=on(e.nextSibling)}function hr(){$e=Ve=null,ee=!1}function xc(e){ut===null?ut=[e]:ut.push(e)}var j_=Dt.ReactCurrentBatchConfig;function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zu(e){var t=e._init;return t(e._payload)}function Hf(e){function t(p,f){if(e){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=cn(p,f),p.index=0,p.sibling=null,p}function o(p,f,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,h,b){return f===null||f.tag!==6?(f=ya(h,p.mode,b),f.return=p,f):(f=i(f,h),f.return=p,f)}function c(p,f,h,b){var S=h.type;return S===Gn?d(p,f,h.props.children,b,h.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&Zu(S)===f.type)?(b=i(f,h.props),b.ref=Mr(p,f,h),b.return=p,b):(b=yo(h.type,h.key,h.props,null,p.mode,b),b.ref=Mr(p,f,h),b.return=p,b)}function u(p,f,h,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=wa(h,p.mode,b),f.return=p,f):(f=i(f,h.children||[]),f.return=p,f)}function d(p,f,h,b,S){return f===null||f.tag!==7?(f=Nn(h,p.mode,b,S),f.return=p,f):(f=i(f,h),f.return=p,f)}function m(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ya(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qi:return h=yo(f.type,f.key,f.props,null,p.mode,h),h.ref=Mr(p,null,f),h.return=p,h;case Kn:return f=wa(f,p.mode,h),f.return=p,f;case Gt:var b=f._init;return m(p,b(f._payload),h)}if(qr(f)||Pr(f))return f=Nn(f,p.mode,h,null),f.return=p,f;Zi(p,f)}return null}function g(p,f,h,b){var S=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(p,f,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qi:return h.key===S?c(p,f,h,b):null;case Kn:return h.key===S?u(p,f,h,b):null;case Gt:return S=h._init,g(p,f,S(h._payload),b)}if(qr(h)||Pr(h))return S!==null?null:d(p,f,h,b,null);Zi(p,h)}return null}function _(p,f,h,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(h)||null,l(f,p,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case qi:return p=p.get(b.key===null?h:b.key)||null,c(f,p,b,S);case Kn:return p=p.get(b.key===null?h:b.key)||null,u(f,p,b,S);case Gt:var j=b._init;return _(p,f,h,j(b._payload),S)}if(qr(b)||Pr(b))return p=p.get(h)||null,d(f,p,b,S,null);Zi(f,b)}return null}function v(p,f,h,b){for(var S=null,j=null,x=f,k=f=0,B=null;x!==null&&k<h.length;k++){x.index>k?(B=x,x=null):B=x.sibling;var O=g(p,x,h[k],b);if(O===null){x===null&&(x=B);break}e&&x&&O.alternate===null&&t(p,x),f=o(O,f,k),j===null?S=O:j.sibling=O,j=O,x=B}if(k===h.length)return n(p,x),ee&&wn(p,k),S;if(x===null){for(;k<h.length;k++)x=m(p,h[k],b),x!==null&&(f=o(x,f,k),j===null?S=x:j.sibling=x,j=x);return ee&&wn(p,k),S}for(x=r(p,x);k<h.length;k++)B=_(x,p,k,h[k],b),B!==null&&(e&&B.alternate!==null&&x.delete(B.key===null?k:B.key),f=o(B,f,k),j===null?S=B:j.sibling=B,j=B);return e&&x.forEach(function(J){return t(p,J)}),ee&&wn(p,k),S}function w(p,f,h,b){var S=Pr(h);if(typeof S!="function")throw Error(N(150));if(h=S.call(h),h==null)throw Error(N(151));for(var j=S=null,x=f,k=f=0,B=null,O=h.next();x!==null&&!O.done;k++,O=h.next()){x.index>k?(B=x,x=null):B=x.sibling;var J=g(p,x,O.value,b);if(J===null){x===null&&(x=B);break}e&&x&&J.alternate===null&&t(p,x),f=o(J,f,k),j===null?S=J:j.sibling=J,j=J,x=B}if(O.done)return n(p,x),ee&&wn(p,k),S;if(x===null){for(;!O.done;k++,O=h.next())O=m(p,O.value,b),O!==null&&(f=o(O,f,k),j===null?S=O:j.sibling=O,j=O);return ee&&wn(p,k),S}for(x=r(p,x);!O.done;k++,O=h.next())O=_(x,p,k,O.value,b),O!==null&&(e&&O.alternate!==null&&x.delete(O.key===null?k:O.key),f=o(O,f,k),j===null?S=O:j.sibling=O,j=O);return e&&x.forEach(function(ot){return t(p,ot)}),ee&&wn(p,k),S}function y(p,f,h,b){if(typeof h=="object"&&h!==null&&h.type===Gn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case qi:e:{for(var S=h.key,j=f;j!==null;){if(j.key===S){if(S=h.type,S===Gn){if(j.tag===7){n(p,j.sibling),f=i(j,h.props.children),f.return=p,p=f;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&Zu(S)===j.type){n(p,j.sibling),f=i(j,h.props),f.ref=Mr(p,j,h),f.return=p,p=f;break e}n(p,j);break}else t(p,j);j=j.sibling}h.type===Gn?(f=Nn(h.props.children,p.mode,b,h.key),f.return=p,p=f):(b=yo(h.type,h.key,h.props,null,p.mode,b),b.ref=Mr(p,f,h),b.return=p,p=b)}return s(p);case Kn:e:{for(j=h.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(p,f.sibling),f=i(f,h.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=wa(h,p.mode,b),f.return=p,p=f}return s(p);case Gt:return j=h._init,y(p,f,j(h._payload),b)}if(qr(h))return v(p,f,h,b);if(Pr(h))return w(p,f,h,b);Zi(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,h),f.return=p,p=f):(n(p,f),f=ya(h,p.mode,b),f.return=p,p=f),s(p)):n(p,f)}return y}var pr=Hf(!0),Kf=Hf(!1),Do=pn(null),Uo=null,nr=null,Ac=null;function Sc(){Ac=nr=Uo=null}function Cc(e){var t=Do.current;Q(Do),e._currentValue=t}function ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ur(e,t){Uo=e,Ac=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ac!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Uo===null)throw Error(N(308));nr=e,Uo.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Sn=null;function kc(e){Sn===null?Sn=[e]:Sn.push(e)}function Gf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mt(e,n)}return i=r.interleaved,i===null?(t.next=t,kc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mt(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mc(e,n)}}function ed(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qo(e,t,n,r){var i=e.updateQueue;Xt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var m=i.baseState;s=0,d=u=c=null,l=o;do{var g=l.lane,_=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(g=t,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(_,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(_,m,g):v,g==null)break e;m=ie({},m,g);break e;case 2:Xt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,c=m):d=d.next=_,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tn|=s,e.lanes=s,e.memoizedState=m}}function td(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Ri={},kt=pn(Ri),pi=pn(Ri),gi=pn(Ri);function Cn(e){if(e===Ri)throw Error(N(174));return e}function Ec(e,t){switch(G(gi,t),G(pi,e),G(kt,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ha(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ha(t,e)}Q(kt),G(kt,t)}function gr(){Q(kt),Q(pi),Q(gi)}function Yf(e){Cn(gi.current);var t=Cn(kt.current),n=Ha(t,e.type);t!==n&&(G(pi,e),G(kt,n))}function Nc(e){pi.current===e&&(Q(kt),Q(pi))}var ne=pn(0);function $o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fa=[];function Lc(){for(var e=0;e<fa.length;e++)fa[e]._workInProgressVersionPrimary=null;fa.length=0}var ho=Dt.ReactCurrentDispatcher,ha=Dt.ReactCurrentBatchConfig,Bn=0,re=null,ue=null,fe=null,Wo=!1,Jr=!1,vi=0,E_=0;function Ae(){throw Error(N(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Pc(e,t,n,r,i,o){if(Bn=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ho.current=e===null||e.memoizedState===null?P_:R_,e=n(r,i),Jr){o=0;do{if(Jr=!1,vi=0,25<=o)throw Error(N(301));o+=1,fe=ue=null,t.updateQueue=null,ho.current=O_,e=n(r,i)}while(Jr)}if(ho.current=Vo,t=ue!==null&&ue.next!==null,Bn=0,fe=ue=re=null,Wo=!1,t)throw Error(N(300));return e}function Rc(){var e=vi!==0;return vi=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?re.memoizedState=fe=e:fe=fe.next=e,fe}function rt(){if(ue===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?re.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error(N(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?re.memoizedState=fe=e:fe=fe.next=e}return fe}function _i(e,t){return typeof t=="function"?t(e):t}function pa(e){var t=rt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((Bn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,s=r):c=c.next=m,re.lanes|=d,Tn|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,gt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,re.lanes|=o,Tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ga(e){var t=rt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);gt(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qf(){}function Jf(e,t){var n=re,r=rt(),i=t(),o=!gt(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,Oc(th.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,yi(9,eh.bind(null,n,r,i,t),void 0,null),ge===null)throw Error(N(349));Bn&30||Zf(n,t,i)}return i}function Zf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eh(e,t,n,r){t.value=n,t.getSnapshot=r,nh(t)&&rh(e)}function th(e,t,n){return n(function(){nh(t)&&rh(e)})}function nh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function rh(e){var t=Mt(e,1);t!==null&&ht(t,e,1,-1)}function nd(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},t.queue=e,e=e.dispatch=I_.bind(null,re,e),[t.memoizedState,e]}function yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ih(){return rt().memoizedState}function po(e,t,n,r){var i=xt();re.flags|=e,i.memoizedState=yi(1|t,n,void 0,r===void 0?null:r)}function ws(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&Ic(r,s.deps)){i.memoizedState=yi(t,n,o,r);return}}re.flags|=e,i.memoizedState=yi(1|t,n,o,r)}function rd(e,t){return po(8390656,8,e,t)}function Oc(e,t){return ws(2048,8,e,t)}function oh(e,t){return ws(4,2,e,t)}function sh(e,t){return ws(4,4,e,t)}function ah(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lh(e,t,n){return n=n!=null?n.concat([e]):null,ws(4,4,ah.bind(null,t,e),n)}function Bc(){}function ch(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uh(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dh(e,t,n){return Bn&21?(gt(n,t)||(n=gf(),re.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function N_(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=ha.transition;ha.transition={};try{e(!1),t()}finally{V=n,ha.transition=r}}function mh(){return rt().memoizedState}function L_(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fh(e))hh(t,n);else if(n=Gf(e,t,n,r),n!==null){var i=Ne();ht(n,e,r,i),ph(n,t,r)}}function I_(e,t,n){var r=ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fh(e))hh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,gt(l,s)){var c=t.interleaved;c===null?(i.next=i,kc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Gf(e,t,i,r),n!==null&&(i=Ne(),ht(n,e,r,i),ph(n,t,r))}}function fh(e){var t=e.alternate;return e===re||t!==null&&t===re}function hh(e,t){Jr=Wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ph(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mc(e,n)}}var Vo={readContext:nt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},P_={readContext:nt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:rd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,po(4194308,4,ah.bind(null,t,e),n)},useLayoutEffect:function(e,t){return po(4194308,4,e,t)},useInsertionEffect:function(e,t){return po(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=L_.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:nd,useDebugValue:Bc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=nd(!1),t=e[0];return e=N_.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=xt();if(ee){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ge===null)throw Error(N(349));Bn&30||Zf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,rd(th.bind(null,r,o,e),[e]),r.flags|=2048,yi(9,eh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=ge.identifierPrefix;if(ee){var n=Rt,r=Pt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=E_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},R_={readContext:nt,useCallback:ch,useContext:nt,useEffect:Oc,useImperativeHandle:lh,useInsertionEffect:oh,useLayoutEffect:sh,useMemo:uh,useReducer:pa,useRef:ih,useState:function(){return pa(_i)},useDebugValue:Bc,useDeferredValue:function(e){var t=rt();return dh(t,ue.memoizedState,e)},useTransition:function(){var e=pa(_i)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Jf,useId:mh,unstable_isNewReconciler:!1},O_={readContext:nt,useCallback:ch,useContext:nt,useEffect:Oc,useImperativeHandle:lh,useInsertionEffect:oh,useLayoutEffect:sh,useMemo:uh,useReducer:ga,useRef:ih,useState:function(){return ga(_i)},useDebugValue:Bc,useDeferredValue:function(e){var t=rt();return ue===null?t.memoizedState=e:dh(t,ue.memoizedState,e)},useTransition:function(){var e=ga(_i)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Jf,useId:mh,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=ln(e),o=Ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=sn(e,o,i),t!==null&&(ht(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=ln(e),o=Ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=sn(e,o,i),t!==null&&(ht(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=ln(e),i=Ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=sn(e,i,r),t!==null&&(ht(t,e,r,n),fo(t,e,r))}};function id(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!di(n,r)||!di(i,o):!0}function gh(e,t,n){var r=!1,i=mn,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=Te(t)?Rn:je.current,r=t.contextTypes,o=(r=r!=null)?fr(e,i):mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function od(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},jc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=Te(t)?Rn:je.current,i.context=fr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bs.enqueueReplaceState(i,i.state,null),qo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t){try{var n="",r=t;do n+=lv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function va(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B_=typeof WeakMap=="function"?WeakMap:Map;function vh(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,Cl=r),pl(e,t)},n}function _h(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){pl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){pl(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=X_.bind(null,e,t,n),t.then(e,e))}function ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ld(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var T_=Dt.ReactCurrentOwner,Oe=!1;function Ee(e,t,n,r){t.child=e===null?Kf(t,null,n,r):pr(t,e.child,n,r)}function cd(e,t,n,r,i){n=n.render;var o=t.ref;return ur(t,i),r=Pc(e,t,n,r,o,i),n=Rc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ee&&n&&wc(t),t.flags|=1,Ee(e,t,r,i),t.child)}function ud(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,yh(e,t,o,r,i)):(e=yo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(s,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=cn(o,r),e.ref=t.ref,e.return=t,t.child=e}function yh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(di(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return gl(e,t,n,r,i)}function wh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ir,qe),qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(ir,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(ir,qe),qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(ir,qe),qe|=r;return Ee(e,t,i,n),t.child}function bh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gl(e,t,n,r,i){var o=Te(n)?Rn:je.current;return o=fr(t,o),ur(t,i),n=Pc(e,t,n,r,o,i),r=Rc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ee&&r&&wc(t),t.flags|=1,Ee(e,t,n,i),t.child)}function dd(e,t,n,r,i){if(Te(n)){var o=!0;Mo(t)}else o=!1;if(ur(t,i),t.stateNode===null)go(e,t),gh(t,n,r),hl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Te(n)?Rn:je.current,u=fr(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&od(t,s,r,u),Xt=!1;var g=t.memoizedState;s.state=g,qo(t,r,s,i),c=t.memoizedState,l!==r||g!==c||Be.current||Xt?(typeof d=="function"&&(fl(t,n,d,r),c=t.memoizedState),(l=Xt||id(t,n,l,r,g,c,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Xf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:lt(t.type,l),s.props=u,m=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=nt(c):(c=Te(n)?Rn:je.current,c=fr(t,c));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||g!==c)&&od(t,s,r,c),Xt=!1,g=t.memoizedState,s.state=g,qo(t,r,s,i);var v=t.memoizedState;l!==m||g!==v||Be.current||Xt?(typeof _=="function"&&(fl(t,n,_,r),v=t.memoizedState),(u=Xt||id(t,n,u,r,g,v,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return vl(e,t,n,r,o,i)}function vl(e,t,n,r,i,o){bh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Yu(t,n,!1),Ft(e,t,o);r=t.stateNode,T_.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=pr(t,e.child,null,o),t.child=pr(t,null,l,o)):Ee(e,t,l,o),t.memoizedState=r.state,i&&Yu(t,n,!0),t.child}function xh(e){var t=e.stateNode;t.pendingContext?Xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xu(e,t.context,!1),Ec(e,t.containerInfo)}function md(e,t,n,r,i){return hr(),xc(i),t.flags|=256,Ee(e,t,n,r),t.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ah(e,t,n){var r=t.pendingProps,i=ne.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(ne,i&1),e===null)return dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ss(s,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=yl(n),t.memoizedState=_l,e):Tc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return M_(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=cn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=cn(l,o):(o=Nn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?yl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=_l,r}return o=e.child,e=o.sibling,r=cn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tc(e,t){return t=Ss({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&xc(r),pr(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M_(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=va(Error(N(422))),eo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ss({mode:"visible",children:r.children},i,0,null),o=Nn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pr(t,e.child,null,s),t.child.memoizedState=yl(s),t.memoizedState=_l,o);if(!(t.mode&1))return eo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(N(419)),r=va(o,r,void 0),eo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Oe||l){if(r=ge,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mt(e,i),ht(r,e,i,-1))}return qc(),r=va(Error(N(421))),eo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Y_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$e=on(i.nextSibling),Ve=t,ee=!0,ut=null,e!==null&&(Je[Ze++]=Pt,Je[Ze++]=Rt,Je[Ze++]=On,Pt=e.id,Rt=e.overflow,On=t),t=Tc(t,r.children),t.flags|=4096,t)}function fd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ml(e.return,t,n)}function _a(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ee(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fd(e,n,t);else if(e.tag===19)fd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_a(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_a(t,!0,n,null,o);break;case"together":_a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function F_(e,t,n){switch(t.tag){case 3:xh(t),hr();break;case 5:Yf(t);break;case 1:Te(t.type)&&Mo(t);break;case 4:Ec(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(Do,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Ah(e,t,n):(G(ne,ne.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);G(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,wh(e,t,n)}return Ft(e,t,n)}var Ch,wl,kh,jh;Ch=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wl=function(){};kh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Cn(kt.current);var o=null;switch(n){case"input":i=qa(e,i),r=qa(e,r),o=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":i=Va(e,i),r=Va(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}Ka(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ii.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ii.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&X("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};jh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z_(e,t,n){var r=t.pendingProps;switch(bc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Te(t.type)&&To(),Se(t),null;case 3:return r=t.stateNode,gr(),Q(Be),Q(je),Lc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(El(ut),ut=null))),wl(e,t),Se(t),null;case 5:Nc(t);var i=Cn(gi.current);if(n=t.type,e!==null&&t.stateNode!=null)kh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Se(t),null}if(e=Cn(kt.current),Ji(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[hi]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Wr.length;i++)X(Wr[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":xu(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":Su(r,o),X("invalid",r)}Ka(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,l,e),i=["children",""+l]):ii.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":$i(r),Au(r,o,!0);break;case"textarea":$i(r),Cu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ef(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[hi]=r,Ch(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ga(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wr.length;i++)X(Wr[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":xu(e,r),i=qa(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),X("invalid",e);break;case"textarea":Su(e,r),i=Va(e,r),X("invalid",e);break;default:i=r}Ka(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?rf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&tf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&oi(e,c):typeof c=="number"&&oi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ii.hasOwnProperty(o)?c!=null&&o==="onScroll"&&X("scroll",e):c!=null&&sc(e,o,c,s))}switch(n){case"input":$i(e),Au(e,r,!1);break;case"textarea":$i(e),Cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sr(e,!!r.multiple,o,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)jh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Cn(gi.current),Cn(kt.current),Ji(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Qi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Se(t),null;case 13:if(Q(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&$e!==null&&t.mode&1&&!(t.flags&128))Vf(),hr(),t.flags|=98560,o=!1;else if(o=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[St]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else ut!==null&&(El(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?de===0&&(de=3):qc())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return gr(),wl(e,t),e===null&&mi(t.stateNode.containerInfo),Se(t),null;case 10:return Cc(t.type._context),Se(t),null;case 17:return Te(t.type)&&To(),Se(t),null;case 19:if(Q(ne),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Fr(o,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=$o(e),s!==null){for(t.flags|=128,Fr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>_r&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=$o(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ee)return Se(t),null}else 2*se()-o.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=ne.current,G(ne,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return Uc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function D_(e,t){switch(bc(t),t.tag){case 1:return Te(t.type)&&To(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),Q(Be),Q(je),Lc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nc(t),null;case 13:if(Q(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(ne),null;case 4:return gr(),null;case 10:return Cc(t.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var to=!1,Ce=!1,U_=typeof WeakSet=="function"?WeakSet:Set,I=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function bl(e,t,n){try{n()}catch(r){oe(e,t,r)}}var hd=!1;function q_(e,t){if(il=Po,e=Pf(),yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,m=e,g=null;t:for(;;){for(var _;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(c=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===e)break t;if(g===n&&++u===i&&(l=s),g===o&&++d===r&&(c=s),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ol={focusedElem:e,selectionRange:n},Po=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,y=v.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:lt(t.type,w),y);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(b){oe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=hd,hd=!1,v}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&bl(t,n,o)}i=i.next}while(i!==r)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Eh(e){var t=e.alternate;t!==null&&(e.alternate=null,Eh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[hi],delete t[ll],delete t[S_],delete t[C_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nh(e){return e.tag===5||e.tag===3||e.tag===4}function pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var _e=null,ct=!1;function Vt(e,t,n){for(n=n.child;n!==null;)Lh(e,t,n),n=n.sibling}function Lh(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(hs,n)}catch{}switch(n.tag){case 5:Ce||rr(n,t);case 6:var r=_e,i=ct;_e=null,Vt(e,t,n),_e=r,ct=i,_e!==null&&(ct?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(ct?(e=_e,n=n.stateNode,e.nodeType===8?da(e.parentNode,n):e.nodeType===1&&da(e,n),ci(e)):da(_e,n.stateNode));break;case 4:r=_e,i=ct,_e=n.stateNode.containerInfo,ct=!0,Vt(e,t,n),_e=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&bl(n,t,s),i=i.next}while(i!==r)}Vt(e,t,n);break;case 1:if(!Ce&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,t,l)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Vt(e,t,n),Ce=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function gd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new U_),t.forEach(function(r){var i=Q_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,ct=!1;break e;case 3:_e=l.stateNode.containerInfo,ct=!0;break e;case 4:_e=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(_e===null)throw Error(N(160));Lh(o,s,i),_e=null,ct=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ih(t,e),t=t.sibling}function Ih(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),bt(e),r&4){try{Zr(3,e,e.return),xs(3,e)}catch(w){oe(e,e.return,w)}try{Zr(5,e,e.return)}catch(w){oe(e,e.return,w)}}break;case 1:at(t,e),bt(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(at(t,e),bt(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var i=e.stateNode;try{oi(i,"")}catch(w){oe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Jm(i,o),Ga(l,s);var u=Ga(l,o);for(s=0;s<c.length;s+=2){var d=c[s],m=c[s+1];d==="style"?rf(i,m):d==="dangerouslySetInnerHTML"?tf(i,m):d==="children"?oi(i,m):sc(i,d,m,u)}switch(l){case"input":$a(i,o);break;case"textarea":Zm(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?sr(i,!!o.multiple,_,!1):g!==!!o.multiple&&(o.defaultValue!=null?sr(i,!!o.multiple,o.defaultValue,!0):sr(i,!!o.multiple,o.multiple?[]:"",!1))}i[hi]=o}catch(w){oe(e,e.return,w)}}break;case 6:if(at(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){oe(e,e.return,w)}}break;case 3:if(at(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ci(t.containerInfo)}catch(w){oe(e,e.return,w)}break;case 4:at(t,e),bt(e);break;case 13:at(t,e),bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zc=se())),r&4&&gd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||d,at(t,e),Ce=u):at(t,e),bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(m=I=d;I!==null;){switch(g=I,_=g.child,g.tag){case 0:case 11:case 14:case 15:Zr(4,g,g.return);break;case 1:rr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){oe(r,n,w)}}break;case 5:rr(g,g.return);break;case 22:if(g.memoizedState!==null){_d(m);continue}}_!==null?(_.return=g,I=_):_d(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,c=m.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=nf("display",s))}catch(w){oe(e,e.return,w)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){oe(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:at(t,e),bt(e),r&4&&gd(e);break;case 21:break;default:at(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nh(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oi(i,""),r.flags&=-33);var o=pd(e);Sl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=pd(e);Al(e,l,s);break;default:throw Error(N(161))}}catch(c){oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $_(e,t,n){I=e,Ph(e)}function Ph(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||to;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ce;l=to;var u=Ce;if(to=s,(Ce=c)&&!u)for(I=i;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?yd(i):c!==null?(c.return=s,I=c):yd(i);for(;o!==null;)I=o,Ph(o),o=o.sibling;I=i,to=l,Ce=u}vd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):vd(e)}}function vd(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&td(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}td(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&ci(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ce||t.flags&512&&xl(t)}catch(g){oe(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function _d(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function yd(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xs(4,t)}catch(c){oe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){oe(t,i,c)}}var o=t.return;try{xl(t)}catch(c){oe(t,o,c)}break;case 5:var s=t.return;try{xl(t)}catch(c){oe(t,s,c)}}}catch(c){oe(t,t.return,c)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var W_=Math.ceil,Ho=Dt.ReactCurrentDispatcher,Mc=Dt.ReactCurrentOwner,tt=Dt.ReactCurrentBatchConfig,q=0,ge=null,le=null,ye=0,qe=0,ir=pn(0),de=0,wi=null,Tn=0,As=0,Fc=0,ei=null,Pe=null,zc=0,_r=1/0,Nt=null,Ko=!1,Cl=null,an=null,no=!1,Zt=null,Go=0,ti=0,kl=null,vo=-1,_o=0;function Ne(){return q&6?se():vo!==-1?vo:vo=se()}function ln(e){return e.mode&1?q&2&&ye!==0?ye&-ye:j_.transition!==null?(_o===0&&(_o=gf()),_o):(e=V,e!==0||(e=window.event,e=e===void 0?16:Af(e.type)),e):1}function ht(e,t,n,r){if(50<ti)throw ti=0,kl=null,Error(N(185));Li(e,n,r),(!(q&2)||e!==ge)&&(e===ge&&(!(q&2)&&(As|=n),de===4&&Qt(e,ye)),Me(e,r),n===1&&q===0&&!(t.mode&1)&&(_r=se()+500,ys&&gn()))}function Me(e,t){var n=e.callbackNode;jv(e,t);var r=Io(e,e===ge?ye:0);if(r===0)n!==null&&Eu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eu(n),t===1)e.tag===0?k_(wd.bind(null,e)):qf(wd.bind(null,e)),x_(function(){!(q&6)&&gn()}),n=null;else{switch(vf(r)){case 1:n=dc;break;case 4:n=hf;break;case 16:n=Lo;break;case 536870912:n=pf;break;default:n=Lo}n=Dh(n,Rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rh(e,t){if(vo=-1,_o=0,q&6)throw Error(N(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=Io(e,e===ge?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xo(e,r);else{t=r;var i=q;q|=2;var o=Bh();(ge!==e||ye!==t)&&(Nt=null,_r=se()+500,En(e,t));do try{K_();break}catch(l){Oh(e,l)}while(!0);Sc(),Ho.current=o,q=i,le!==null?t=0:(ge=null,ye=0,t=de)}if(t!==0){if(t===2&&(i=Za(e),i!==0&&(r=i,t=jl(e,i))),t===1)throw n=wi,En(e,0),Qt(e,r),Me(e,se()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!V_(i)&&(t=Xo(e,r),t===2&&(o=Za(e),o!==0&&(r=o,t=jl(e,o))),t===1))throw n=wi,En(e,0),Qt(e,r),Me(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:bn(e,Pe,Nt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=zc+500-se(),10<t)){if(Io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=al(bn.bind(null,e,Pe,Nt),t);break}bn(e,Pe,Nt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ft(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W_(r/1960))-r,10<r){e.timeoutHandle=al(bn.bind(null,e,Pe,Nt),r);break}bn(e,Pe,Nt);break;case 5:bn(e,Pe,Nt);break;default:throw Error(N(329))}}}return Me(e,se()),e.callbackNode===n?Rh.bind(null,e):null}function jl(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=Xo(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&El(t)),e}function El(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function V_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~Fc,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function wd(e){if(q&6)throw Error(N(327));dr();var t=Io(e,0);if(!(t&1))return Me(e,se()),null;var n=Xo(e,t);if(e.tag!==0&&n===2){var r=Za(e);r!==0&&(t=r,n=jl(e,r))}if(n===1)throw n=wi,En(e,0),Qt(e,t),Me(e,se()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Pe,Nt),Me(e,se()),null}function Dc(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(_r=se()+500,ys&&gn())}}function Mn(e){Zt!==null&&Zt.tag===0&&!(q&6)&&dr();var t=q;q|=1;var n=tt.transition,r=V;try{if(tt.transition=null,V=1,e)return e()}finally{V=r,tt.transition=n,q=t,!(q&6)&&gn()}}function Uc(){qe=ir.current,Q(ir)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,b_(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(bc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&To();break;case 3:gr(),Q(Be),Q(je),Lc();break;case 5:Nc(r);break;case 4:gr();break;case 13:Q(ne);break;case 19:Q(ne);break;case 10:Cc(r.type._context);break;case 22:case 23:Uc()}n=n.return}if(ge=e,le=e=cn(e.current,null),ye=qe=t,de=0,wi=null,Fc=As=Tn=0,Pe=ei=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Sn=null}return e}function Oh(e,t){do{var n=le;try{if(Sc(),ho.current=Vo,Wo){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wo=!1}if(Bn=0,fe=ue=re=null,Jr=!1,vi=0,Mc.current=null,n===null||n.return===null){de=1,wi=t,le=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=ad(s);if(_!==null){_.flags&=-257,ld(_,s,l,o,t),_.mode&1&&sd(o,u,t),t=_,c=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){sd(o,u,t),qc();break e}c=Error(N(426))}}else if(ee&&l.mode&1){var y=ad(s);if(y!==null){!(y.flags&65536)&&(y.flags|=256),ld(y,s,l,o,t),xc(vr(c,l));break e}}o=c=vr(c,l),de!==4&&(de=2),ei===null?ei=[o]:ei.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=vh(o,c,t);ed(o,p);break e;case 1:l=c;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(an===null||!an.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=_h(o,l,t);ed(o,b);break e}}o=o.return}while(o!==null)}Mh(n)}catch(S){t=S,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Bh(){var e=Ho.current;return Ho.current=Vo,e===null?Vo:e}function qc(){(de===0||de===3||de===2)&&(de=4),ge===null||!(Tn&268435455)&&!(As&268435455)||Qt(ge,ye)}function Xo(e,t){var n=q;q|=2;var r=Bh();(ge!==e||ye!==t)&&(Nt=null,En(e,t));do try{H_();break}catch(i){Oh(e,i)}while(!0);if(Sc(),q=n,Ho.current=r,le!==null)throw Error(N(261));return ge=null,ye=0,de}function H_(){for(;le!==null;)Th(le)}function K_(){for(;le!==null&&!_v();)Th(le)}function Th(e){var t=zh(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Mh(e):le=t,Mc.current=null}function Mh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=D_(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,le=null;return}}else if(n=z_(n,t,qe),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);de===0&&(de=5)}function bn(e,t,n){var r=V,i=tt.transition;try{tt.transition=null,V=1,G_(e,t,n,r)}finally{tt.transition=i,V=r}return null}function G_(e,t,n,r){do dr();while(Zt!==null);if(q&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ev(e,o),e===ge&&(le=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,Dh(Lo,function(){return dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var s=V;V=1;var l=q;q|=4,Mc.current=null,q_(e,n),Ih(n,e),h_(ol),Po=!!il,ol=il=null,e.current=n,$_(n),yv(),q=l,V=s,tt.transition=o}else e.current=n;if(no&&(no=!1,Zt=e,Go=i),o=e.pendingLanes,o===0&&(an=null),xv(n.stateNode),Me(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ko)throw Ko=!1,e=Cl,Cl=null,e;return Go&1&&e.tag!==0&&dr(),o=e.pendingLanes,o&1?e===kl?ti++:(ti=0,kl=e):ti=0,gn(),null}function dr(){if(Zt!==null){var e=vf(Go),t=tt.transition,n=V;try{if(tt.transition=null,V=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Go=0,q&6)throw Error(N(331));var i=q;for(q|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Zr(8,d,o)}var m=d.child;if(m!==null)m.return=d,I=m;else for(;I!==null;){d=I;var g=d.sibling,_=d.return;if(Eh(d),d===u){I=null;break}if(g!==null){g.return=_,I=g;break}I=_}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var y=w.sibling;w.sibling=null,w=y}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,I=p;break e}I=o.return}}var f=e.current;for(I=f;I!==null;){s=I;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,I=h;else e:for(s=f;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xs(9,l)}}catch(S){oe(l,l.return,S)}if(l===s){I=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,I=b;break e}I=l.return}}if(q=i,gn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(hs,e)}catch{}r=!0}return r}finally{V=n,tt.transition=t}}return!1}function bd(e,t,n){t=vr(n,t),t=vh(e,t,1),e=sn(e,t,1),t=Ne(),e!==null&&(Li(e,1,t),Me(e,t))}function oe(e,t,n){if(e.tag===3)bd(e,e,n);else for(;t!==null;){if(t.tag===3){bd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=vr(n,e),e=_h(t,e,1),t=sn(t,e,1),e=Ne(),t!==null&&(Li(t,1,e),Me(t,e));break}}t=t.return}}function X_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ye&n)===n&&(de===4||de===3&&(ye&130023424)===ye&&500>se()-zc?En(e,0):Fc|=n),Me(e,t)}function Fh(e,t){t===0&&(e.mode&1?(t=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):t=1);var n=Ne();e=Mt(e,t),e!==null&&(Li(e,t,n),Me(e,n))}function Y_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fh(e,n)}function Q_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Fh(e,n)}var zh;zh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,F_(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,ee&&t.flags&1048576&&$f(t,zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;go(e,t),e=t.pendingProps;var i=fr(t,je.current);ur(t,n),i=Pc(null,t,r,e,i,n);var o=Rc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(o=!0,Mo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jc(t),i.updater=bs,t.stateNode=i,i._reactInternals=t,hl(t,r,e,n),t=vl(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&wc(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(go(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Z_(r),e=lt(r,e),i){case 0:t=gl(null,t,r,e,n);break e;case 1:t=dd(null,t,r,e,n);break e;case 11:t=cd(null,t,r,e,n);break e;case 14:t=ud(null,t,r,lt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),gl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),dd(e,t,r,i,n);case 3:e:{if(xh(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Xf(e,t),qo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=vr(Error(N(423)),t),t=md(e,t,r,n,i);break e}else if(r!==i){i=vr(Error(N(424)),t),t=md(e,t,r,n,i);break e}else for($e=on(t.stateNode.containerInfo.firstChild),Ve=t,ee=!0,ut=null,n=Kf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),r===i){t=Ft(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Yf(t),e===null&&dl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,sl(r,i)?s=null:o!==null&&sl(r,o)&&(t.flags|=32),bh(e,t),Ee(e,t,s,n),t.child;case 6:return e===null&&dl(t),null;case 13:return Ah(e,t,n);case 4:return Ec(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),cd(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,G(Do,r._currentValue),r._currentValue=s,o!==null)if(gt(o.value,s)){if(o.children===i.children&&!Be.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ot(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ml(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ml(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ur(t,n),i=nt(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),ud(e,t,r,i,n);case 15:return yh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),go(e,t),t.tag=1,Te(r)?(e=!0,Mo(t)):e=!1,ur(t,n),gh(t,r,i),hl(t,r,i,n),vl(null,t,r,!0,e,n);case 19:return Sh(e,t,n);case 22:return wh(e,t,n)}throw Error(N(156,t.tag))};function Dh(e,t){return ff(e,t)}function J_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new J_(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Z_(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lc)return 11;if(e===cc)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")$c(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gn:return Nn(n.children,i,o,t);case ac:s=8,i|=8;break;case Fa:return e=et(12,n,t,i|2),e.elementType=Fa,e.lanes=o,e;case za:return e=et(13,n,t,i),e.elementType=za,e.lanes=o,e;case Da:return e=et(19,n,t,i),e.elementType=Da,e.lanes=o,e;case Xm:return Ss(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Km:s=10;break e;case Gm:s=9;break e;case lc:s=11;break e;case cc:s=14;break e;case Gt:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=et(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Ss(e,t,n,r){return e=et(22,e,r,t),e.elementType=Xm,e.lanes=n,e.stateNode={isHidden:!1},e}function ya(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function wa(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function e0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wc(e,t,n,r,i,o,s,l,c){return e=new e0(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(o),e}function t0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uh(e){if(!e)return mn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Te(n))return Uf(e,n,t)}return t}function qh(e,t,n,r,i,o,s,l,c){return e=Wc(n,r,!0,e,i,o,s,l,c),e.context=Uh(null),n=e.current,r=Ne(),i=ln(n),o=Ot(r,i),o.callback=t??null,sn(n,o,i),e.current.lanes=i,Li(e,i,r),Me(e,r),e}function Cs(e,t,n,r){var i=t.current,o=Ne(),s=ln(i);return n=Uh(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(i,t,s),e!==null&&(ht(e,i,s,o),fo(e,i,s)),s}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vc(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function n0(){return null}var $h=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}ks.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Cs(e,t,null,null)};ks.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){Cs(null,e,null,null)}),t[Tt]=null}};function ks(e){this._internalRoot=e}ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&xf(e)}};function Kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ad(){}function r0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Yo(s);o.call(u)}}var s=qh(t,r,e,0,null,!1,!1,"",Ad);return e._reactRootContainer=s,e[Tt]=s.current,mi(e.nodeType===8?e.parentNode:e),Mn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Yo(c);l.call(u)}}var c=Wc(e,0,!1,null,null,!1,!1,"",Ad);return e._reactRootContainer=c,e[Tt]=c.current,mi(e.nodeType===8?e.parentNode:e),Mn(function(){Cs(t,c,n,r)}),c}function Es(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Yo(s);l.call(c)}}Cs(t,s,e,i)}else s=r0(n,t,e,i,r);return Yo(s)}_f=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$r(t.pendingLanes);n!==0&&(mc(t,n|1),Me(t,se()),!(q&6)&&(_r=se()+500,gn()))}break;case 13:Mn(function(){var r=Mt(e,1);if(r!==null){var i=Ne();ht(r,e,1,i)}}),Vc(e,1)}};fc=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Ne();ht(t,e,134217728,n)}Vc(e,134217728)}};yf=function(e){if(e.tag===13){var t=ln(e),n=Mt(e,t);if(n!==null){var r=Ne();ht(n,e,t,r)}Vc(e,t)}};wf=function(){return V};bf=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Ya=function(e,t,n){switch(t){case"input":if($a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_s(r);if(!i)throw Error(N(90));Qm(r),$a(r,i)}}}break;case"textarea":Zm(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};af=Dc;lf=Mn;var i0={usingClientEntryPoint:!1,Events:[Pi,Jn,_s,of,sf,Dc]},zr={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o0={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=df(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||n0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{hs=ro.inject(o0),Ct=ro}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i0;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(t))throw Error(N(200));return t0(e,t,null,n)};Ye.createRoot=function(e,t){if(!Kc(e))throw Error(N(299));var n=!1,r="",i=$h;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wc(e,1,!1,null,null,n,!1,r,i),e[Tt]=t.current,mi(e.nodeType===8?e.parentNode:e),new Hc(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=df(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Mn(e)};Ye.hydrate=function(e,t,n){if(!js(t))throw Error(N(200));return Es(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Kc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=$h;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=qh(t,null,e,1,n??null,i,!1,o,s),e[Tt]=t.current,mi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ks(t)};Ye.render=function(e,t,n){if(!js(t))throw Error(N(200));return Es(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!js(e))throw Error(N(40));return e._reactRootContainer?(Mn(function(){Es(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Dc;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!js(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Es(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function Wh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wh)}catch(e){console.error(e)}}Wh(),$m.exports=Ye;var s0=$m.exports,Vh,Sd=s0;Vh=Sd.createRoot,Sd.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bi.apply(this,arguments)}var en;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(en||(en={}));const Cd="popstate";function a0(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:l="",hash:c=""}=$n(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Nl("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof o=="string"?o:Hh(o))}function r(i,o){Gc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return c0(t,n,r,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function l0(){return Math.random().toString(36).substr(2,8)}function kd(e,t){return{usr:e.state,key:e.key,idx:t}}function Nl(e,t,n,r){return n===void 0&&(n=null),bi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$n(t):t,{state:n,key:t&&t.key||r||l0()})}function Hh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $n(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function c0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=en.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(bi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function m(){l=en.Pop;let y=d(),p=y==null?null:y-u;u=y,c&&c({action:l,location:w.location,delta:p})}function g(y,p){l=en.Push;let f=Nl(w.location,y,p);n&&n(f,y),u=d()+1;let h=kd(f,u),b=w.createHref(f);try{s.pushState(h,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(b)}o&&c&&c({action:l,location:w.location,delta:1})}function _(y,p){l=en.Replace;let f=Nl(w.location,y,p);n&&n(f,y),u=d();let h=kd(f,u),b=w.createHref(f);s.replaceState(h,"",b),o&&c&&c({action:l,location:w.location,delta:0})}function v(y){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof y=="string"?y:Hh(y);return f=f.replace(/ $/,"%20"),me(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return l},get location(){return e(i,s)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Cd,m),c=y,()=>{i.removeEventListener(Cd,m),c=null}},createHref(y){return t(i,y)},createURL:v,encodeLocation(y){let p=v(y);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:_,go(y){return s.go(y)}};return w}var jd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jd||(jd={}));function u0(e,t,n){return n===void 0&&(n="/"),d0(e,t,n,!1)}function d0(e,t,n,r){let i=typeof t=="string"?$n(t):t,o=Xh(i.pathname||"/",n);if(o==null)return null;let s=Kh(e);m0(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=A0(o);l=b0(s[c],u,r)}return l}function Kh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(me(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ln([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:y0(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of Gh(o.path))i(o,s,c)}),t}function Gh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Gh(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function m0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:w0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const f0=/^:[\w-]+$/,h0=3,p0=2,g0=1,v0=10,_0=-2,Ed=e=>e==="*";function y0(e,t){let n=e.split("/"),r=n.length;return n.some(Ed)&&(r+=_0),t&&(r+=p0),n.filter(i=>!Ed(i)).reduce((i,o)=>i+(f0.test(o)?h0:o===""?g0:v0),r)}function w0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function b0(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",m=Nd({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),g=c.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=Nd({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:Ln([o,m.pathname]),pathnameBase:N0(Ln([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=Ln([o,m.pathnameBase]))}return s}function Nd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=x0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,m)=>{let{paramName:g,isOptional:_}=d;if(g==="*"){let w=l[m]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[m];return _&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function x0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Gc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function A0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function S0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?$n(e):e;return{pathname:n?n.startsWith("/")?n:C0(n,t):t,search:L0(r),hash:I0(i)}}function C0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ba(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function k0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function j0(e,t){let n=k0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function E0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=$n(e):(i=bi({},e),me(!i.pathname||!i.pathname.includes("?"),ba("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),ba("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),ba("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let m=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?t[m]:"/"}let c=S0(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),N0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),L0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function P0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yh=["post","put","patch","delete"];new Set(Yh);const R0=["get",...Yh];new Set(R0);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}const Xc=C.createContext(null),O0=C.createContext(null),Ns=C.createContext(null),Ls=C.createContext(null),vn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Qh=C.createContext(null);function Is(){return C.useContext(Ls)!=null}function Oi(){return Is()||me(!1),C.useContext(Ls).location}function Jh(e){C.useContext(Ns).static||C.useLayoutEffect(e)}function $(){let{isDataRoute:e}=C.useContext(vn);return e?X0():B0()}function B0(){Is()||me(!1);let e=C.useContext(Xc),{basename:t,future:n,navigator:r}=C.useContext(Ns),{matches:i}=C.useContext(vn),{pathname:o}=Oi(),s=JSON.stringify(j0(i,n.v7_relativeSplatPath)),l=C.useRef(!1);return Jh(()=>{l.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let m=E0(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ln([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,s,o,e])}const T0=C.createContext(null);function M0(e){let t=C.useContext(vn).outlet;return t&&C.createElement(T0.Provider,{value:e},t)}function _t(){let{matches:e}=C.useContext(vn),t=e[e.length-1];return t?t.params:{}}function F0(e,t){return z0(e,t)}function z0(e,t,n,r){Is()||me(!1);let{navigator:i}=C.useContext(Ns),{matches:o}=C.useContext(vn),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Oi(),d;if(t){var m;let y=typeof t=="string"?$n(t):t;c==="/"||(m=y.pathname)!=null&&m.startsWith(c)||me(!1),d=y}else d=u;let g=d.pathname||"/",_=g;if(c!=="/"){let y=c.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let v=u0(e,{pathname:_}),w=W0(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Ln([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Ln([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,r);return t&&w?C.createElement(Ls.Provider,{value:{location:xi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:en.Pop}},w):w}function D0(){let e=G0(),t=P0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const U0=C.createElement(D0,null);class q0 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(vn.Provider,{value:this.props.routeContext},C.createElement(Qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $0(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Xc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(vn.Provider,{value:t},r)}function W0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);d>=0||me(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let m=s[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:g,errors:_}=n,v=m.route.loader&&g[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||v){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,m,g)=>{let _,v=!1,w=null,y=null;n&&(_=l&&m.route.id?l[m.route.id]:void 0,w=m.route.errorElement||U0,c&&(u<0&&g===0?(v=!0,y=null):u===g&&(v=!0,y=m.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,g+1)),f=()=>{let h;return _?h=w:v?h=y:m.route.Component?h=C.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=d,C.createElement($0,{match:m,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:h})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?C.createElement(q0,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Zh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zh||{}),Qo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qo||{});function V0(e){let t=C.useContext(Xc);return t||me(!1),t}function H0(e){let t=C.useContext(O0);return t||me(!1),t}function K0(e){let t=C.useContext(vn);return t||me(!1),t}function ep(e){let t=K0(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function G0(){var e;let t=C.useContext(Qh),n=H0(Qo.UseRouteError),r=ep(Qo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function X0(){let{router:e}=V0(Zh.UseNavigateStable),t=ep(Qo.UseNavigateStable),n=C.useRef(!1);return Jh(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xi({fromRouteId:t},o)))},[e,t])}function tp(e){return M0(e.context)}function K(e){me(!1)}function Y0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=en.Pop,navigator:o,static:s=!1,future:l}=e;Is()&&me(!1);let c=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:c,navigator:o,static:s,future:xi({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=$n(r));let{pathname:d="/",search:m="",hash:g="",state:_=null,key:v="default"}=r,w=C.useMemo(()=>{let y=Xh(d,c);return y==null?null:{location:{pathname:y,search:m,hash:g,state:_,key:v},navigationType:i}},[c,d,m,g,_,v,i]);return w==null?null:C.createElement(Ns.Provider,{value:u},C.createElement(Ls.Provider,{children:n,value:w}))}function Q0(e){let{children:t,location:n}=e;return F0(Ll(t),n)}new Promise(()=>{});function Ll(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Ll(r.props.children,o));return}r.type!==K&&me(!1),!r.props.index||!r.props.children||me(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ll(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const J0="6";try{window.__reactRouterVersion=J0}catch{}const Z0="startTransition",Ld=Ta[Z0];function ey(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=a0({window:i,v5Compat:!0}));let s=o.current,[l,c]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=C.useCallback(m=>{u&&Ld?Ld(()=>c(m)):c(m)},[c,u]);return C.useLayoutEffect(()=>s.listen(d),[s,d]),C.createElement(Y0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var Id;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Id||(Id={}));var Pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pd||(Pd={}));var ke=function(){return ke=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ke.apply(this,arguments)};function Ai(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Y="-ms-",ni="-moz-",W="-webkit-",np="comm",Ps="rule",Yc="decl",ty="@import",rp="@keyframes",ny="@layer",ip=Math.abs,Qc=String.fromCharCode,Il=Object.assign;function ry(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function op(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function wo(e,t,n){return e.indexOf(t,n)}function he(e,t){return e.charCodeAt(t)|0}function yr(e,t,n){return e.slice(t,n)}function At(e){return e.length}function sp(e){return e.length}function Vr(e,t){return t.push(e),e}function iy(e,t){return e.map(t).join("")}function Rd(e,t){return e.filter(function(n){return!Lt(n,t)})}var Rs=1,wr=1,ap=0,it=0,ae=0,Er="";function Os(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Rs,column:wr,length:s,return:"",siblings:l}}function Kt(e,t){return Il(Os("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Hn(e){for(;e.root;)e=Kt(e.root,{children:[e]});Vr(e,e.siblings)}function oy(){return ae}function sy(){return ae=it>0?he(Er,--it):0,wr--,ae===10&&(wr=1,Rs--),ae}function pt(){return ae=it<ap?he(Er,it++):0,wr++,ae===10&&(wr=1,Rs++),ae}function In(){return he(Er,it)}function bo(){return it}function Bs(e,t){return yr(Er,e,t)}function Pl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ay(e){return Rs=wr=1,ap=At(Er=e),it=0,[]}function ly(e){return Er="",e}function xa(e){return op(Bs(it-1,Rl(e===91?e+2:e===40?e+1:e)))}function cy(e){for(;(ae=In())&&ae<33;)pt();return Pl(e)>2||Pl(ae)>3?"":" "}function uy(e,t){for(;--t&&pt()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return Bs(e,bo()+(t<6&&In()==32&&pt()==32))}function Rl(e){for(;pt();)switch(ae){case e:return it;case 34:case 39:e!==34&&e!==39&&Rl(ae);break;case 40:e===41&&Rl(e);break;case 92:pt();break}return it}function dy(e,t){for(;pt()&&e+ae!==57;)if(e+ae===84&&In()===47)break;return"/*"+Bs(t,it-1)+"*"+Qc(e===47?e:pt())}function my(e){for(;!Pl(In());)pt();return Bs(e,it)}function fy(e){return ly(xo("",null,null,null,[""],e=ay(e),0,[0],e))}function xo(e,t,n,r,i,o,s,l,c){for(var u=0,d=0,m=s,g=0,_=0,v=0,w=1,y=1,p=1,f=0,h="",b=i,S=o,j=r,x=h;y;)switch(v=f,f=pt()){case 40:if(v!=108&&he(x,m-1)==58){wo(x+=F(xa(f),"&","&\f"),"&\f",ip(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:x+=xa(f);break;case 9:case 10:case 13:case 32:x+=cy(v);break;case 92:x+=uy(bo()-1,7);continue;case 47:switch(In()){case 42:case 47:Vr(hy(dy(pt(),bo()),t,n,c),c);break;default:x+="/"}break;case 123*w:l[u++]=At(x)*p;case 125*w:case 59:case 0:switch(f){case 0:case 125:y=0;case 59+d:p==-1&&(x=F(x,/\f/g,"")),_>0&&At(x)-m&&Vr(_>32?Bd(x+";",r,n,m-1,c):Bd(F(x," ","")+";",r,n,m-2,c),c);break;case 59:x+=";";default:if(Vr(j=Od(x,t,n,u,d,i,l,h,b=[],S=[],m,o),o),f===123)if(d===0)xo(x,t,j,j,b,o,m,l,S);else switch(g===99&&he(x,3)===110?100:g){case 100:case 108:case 109:case 115:xo(e,j,j,r&&Vr(Od(e,j,j,0,0,i,l,h,i,b=[],m,S),S),i,S,m,l,r?b:S);break;default:xo(x,j,j,j,[""],S,0,l,S)}}u=d=_=0,w=p=1,h=x="",m=s;break;case 58:m=1+At(x),_=v;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&sy()==125)continue}switch(x+=Qc(f),f*w){case 38:p=d>0?1:(x+="\f",-1);break;case 44:l[u++]=(At(x)-1)*p,p=1;break;case 64:In()===45&&(x+=xa(pt())),g=In(),d=m=At(h=x+=my(bo())),f++;break;case 45:v===45&&At(x)==2&&(w=0)}}return o}function Od(e,t,n,r,i,o,s,l,c,u,d,m){for(var g=i-1,_=i===0?o:[""],v=sp(_),w=0,y=0,p=0;w<r;++w)for(var f=0,h=yr(e,g+1,g=ip(y=s[w])),b=e;f<v;++f)(b=op(y>0?_[f]+" "+h:F(h,/&\f/g,_[f])))&&(c[p++]=b);return Os(e,t,n,i===0?Ps:l,c,u,d,m)}function hy(e,t,n,r){return Os(e,t,n,np,Qc(oy()),yr(e,2,-2),0,r)}function Bd(e,t,n,r,i){return Os(e,t,n,Yc,yr(e,0,r),yr(e,r+1,-1),r,i)}function lp(e,t,n){switch(ry(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return ni+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+ni+e+Y+e+e;case 5936:switch(he(e,t+11)){case 114:return W+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+Y+e+e;case 6165:return W+e+Y+"flex-"+e+e;case 5187:return W+e+F(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return W+e+Y+"flex-item-"+F(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":Y+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return W+e+Y+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+Y+F(e,"shrink","negative")+e;case 5292:return W+e+Y+F(e,"basis","preferred-size")+e;case 6060:return W+"box-"+F(e,"-grow","")+W+e+Y+F(e,"grow","positive")+e;case 4554:return W+F(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return Y+"grid-column-align"+yr(e,t)+e;break;case 2592:case 3360:return Y+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Lt(r.props,/grid-\w+-end/)})?~wo(e+(n=n[t].value),"span",0)?e:Y+F(e,"-start","")+e+Y+"grid-row-span:"+(~wo(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":Y+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:Y+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+ni+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wo(e,"stretch",0)?lp(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,c,u){return Y+i+":"+o+u+(s?Y+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(he(e,t+6)===121)return F(e,":",":"+W)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(he(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Y+"$2box$3")+e;case 100:return F(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Jo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function py(e,t,n,r){switch(e.type){case ny:if(e.children.length)break;case ty:case Yc:return e.return=e.return||e.value;case np:return"";case rp:return e.return=e.value+"{"+Jo(e.children,r)+"}";case Ps:if(!At(e.value=e.props.join(",")))return""}return At(n=Jo(e.children,r))?e.return=e.value+"{"+n+"}":""}function gy(e){var t=sp(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function vy(e){return function(t){t.root||(t=t.return)&&e(t)}}function _y(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Yc:e.return=lp(e.value,e.length,n);return;case rp:return Jo([Kt(e,{value:F(e.value,"@","@"+W)})],r);case Ps:if(e.length)return iy(n=e.props,function(i){switch(Lt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hn(Kt(e,{props:[F(i,/:(read-\w+)/,":"+ni+"$1")]})),Hn(Kt(e,{props:[i]})),Il(e,{props:Rd(n,r)});break;case"::placeholder":Hn(Kt(e,{props:[F(i,/:(plac\w+)/,":"+W+"input-$1")]})),Hn(Kt(e,{props:[F(i,/:(plac\w+)/,":"+ni+"$1")]})),Hn(Kt(e,{props:[F(i,/:(plac\w+)/,Y+"input-$1")]})),Hn(Kt(e,{props:[i]})),Il(e,{props:Rd(n,r)});break}return""})}}var yy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},br=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",cp="active",up="data-styled-version",Ts="6.1.13",Jc=`/*!sc*/
`,Zo=typeof window<"u"&&"HTMLElement"in window,wy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),by={},Ms=Object.freeze([]),xr=Object.freeze({});function dp(e,t,n){return n===void 0&&(n=xr),e.theme!==n.theme&&e.theme||t||n.theme}var mp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ay=/(^-|-$)/g;function Td(e){return e.replace(xy,"-").replace(Ay,"")}var Sy=/(a)(d)/gi,io=52,Md=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ol(e){var t,n="";for(t=Math.abs(e);t>io;t=t/io|0)n=Md(t%io)+n;return(Md(t%io)+n).replace(Sy,"$1-$2")}var Aa,fp=5381,or=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hp=function(e){return or(fp,e)};function pp(e){return Ol(hp(e)>>>0)}function Cy(e){return e.displayName||e.name||"Component"}function Sa(e){return typeof e=="string"&&!0}var gp=typeof Symbol=="function"&&Symbol.for,vp=gp?Symbol.for("react.memo"):60115,ky=gp?Symbol.for("react.forward_ref"):60112,jy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ey={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_p={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ny=((Aa={})[ky]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Aa[vp]=_p,Aa);function Fd(e){return("type"in(t=e)&&t.type.$$typeof)===vp?_p:"$$typeof"in e?Ny[e.$$typeof]:jy;var t}var Ly=Object.defineProperty,Iy=Object.getOwnPropertyNames,zd=Object.getOwnPropertySymbols,Py=Object.getOwnPropertyDescriptor,Ry=Object.getPrototypeOf,Dd=Object.prototype;function yp(e,t,n){if(typeof t!="string"){if(Dd){var r=Ry(t);r&&r!==Dd&&yp(e,r,n)}var i=Iy(t);zd&&(i=i.concat(zd(t)));for(var o=Fd(e),s=Fd(t),l=0;l<i.length;++l){var c=i[l];if(!(c in Ey||n&&n[c]||s&&c in s||o&&c in o)){var u=Py(t,c);try{Ly(e,c,u)}catch{}}}}return e}function Ar(e){return typeof e=="function"}function Zc(e){return typeof e=="object"&&"styledComponentId"in e}function kn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Si(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Tl(e,t,n){if(n===void 0&&(n=!1),!n&&!Si(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Tl(e[r],t[r]);else if(Si(t))for(var r in t)e[r]=Tl(e[r],t[r]);return e}function eu(e,t){Object.defineProperty(e,"toString",{value:t})}function Bi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Oy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Bi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Jc);return n},e}(),Ao=new Map,es=new Map,So=1,oo=function(e){if(Ao.has(e))return Ao.get(e);for(;es.has(So);)So++;var t=So++;return Ao.set(e,t),es.set(t,e),t},By=function(e,t){So=t+1,Ao.set(e,t),es.set(t,e)},Ty="style[".concat(br,"][").concat(up,'="').concat(Ts,'"]'),My=new RegExp("^".concat(br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fy=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},zy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Jc),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var c=l.match(My);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(By(d,u),Fy(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Ud=function(e){for(var t=document.querySelectorAll(Ty),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(br)!==cp&&(zy(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Dy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(br,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(br,cp),r.setAttribute(up,Ts);var s=Dy();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Uy=function(){function e(t){this.element=wp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Bi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),qy=function(){function e(t){this.element=wp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$y=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),qd=Zo,Wy={isServer:!Zo,useCSSOMInjection:!wy},ts=function(){function e(t,n,r){t===void 0&&(t=xr),n===void 0&&(n={});var i=this;this.options=ke(ke({},Wy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zo&&qd&&(qd=!1,Ud(this)),eu(this,function(){return function(o){for(var s=o.getTag(),l=s.length,c="",u=function(m){var g=function(p){return es.get(p)}(m);if(g===void 0)return"continue";var _=o.names.get(g),v=s.getGroup(m);if(_===void 0||!_.size||v.length===0)return"continue";var w="".concat(br,".g").concat(m,'[id="').concat(g,'"]'),y="";_!==void 0&&_.forEach(function(p){p.length>0&&(y+="".concat(p,","))}),c+="".concat(v).concat(w,'{content:"').concat(y,'"}').concat(Jc)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return oo(t)},e.prototype.rehydrate=function(){!this.server&&Zo&&Ud(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ke(ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new $y(i):r?new Uy(i):new qy(i)}(this.options),new Oy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(oo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(oo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(oo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Vy=/&/g,Hy=/^\s*\/\/.*$/gm;function bp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=bp(n.children,t)),n})}function Ky(e){var t,n,r,i=xr,o=i.options,s=o===void 0?xr:o,l=i.plugins,c=l===void 0?Ms:l,u=function(g,_,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},d=c.slice();d.push(function(g){g.type===Ps&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Vy,n).replace(r,u))}),s.prefix&&d.push(_y),d.push(py);var m=function(g,_,v,w){_===void 0&&(_=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var y=g.replace(Hy,""),p=fy(v||_?"".concat(v," ").concat(_," { ").concat(y," }"):y);s.namespace&&(p=bp(p,s.namespace));var f=[];return Jo(p,gy(d.concat(vy(function(h){return f.push(h)})))),f};return m.hash=c.length?c.reduce(function(g,_){return _.name||Bi(15),or(g,_.name)},fp).toString():"",m}var Gy=new ts,Ml=Ky(),xp=pe.createContext({shouldForwardProp:void 0,styleSheet:Gy,stylis:Ml});xp.Consumer;pe.createContext(void 0);function Fl(){return C.useContext(xp)}var Xy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ml);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,eu(this,function(){throw Bi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ml),this.name+t.hash},e}(),Yy=function(e){return e>="A"&&e<="Z"};function $d(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Yy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ap=function(e){return e==null||e===!1||e===""},Sp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ap(o)&&(Array.isArray(o)&&o.isCss||Ar(o)?r.push("".concat($d(i),":"),o,";"):Si(o)?r.push.apply(r,Ai(Ai(["".concat(i," {")],Sp(o),!1),["}"],!1)):r.push("".concat($d(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in yy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function un(e,t,n,r){if(Ap(e))return[];if(Zc(e))return[".".concat(e.styledComponentId)];if(Ar(e)){if(!Ar(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return un(i,t,n,r)}var o;return e instanceof Xy?n?(e.inject(n,r),[e.getName(r)]):[e]:Si(e)?Sp(e):Array.isArray(e)?Array.prototype.concat.apply(Ms,e.map(function(s){return un(s,t,n,r)})):[e.toString()]}function Cp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ar(n)&&!Zc(n))return!1}return!0}var Qy=hp(Ts),Jy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cp(t),this.componentId=n,this.baseHash=or(Qy,n),this.baseStyle=r,ts.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=kn(i,this.staticRulesId);else{var o=Bl(un(this.rules,t,n,r)),s=Ol(or(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=kn(i,s),this.staticRulesId=s}else{for(var c=or(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")u+=m;else if(m){var g=Bl(un(m,t,n,r));c=or(c,g+d),u+=g}}if(u){var _=Ol(c>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(u,".".concat(_),void 0,this.componentId)),i=kn(i,_)}}return i},e}(),tu=pe.createContext(void 0);tu.Consumer;var Ca={};function Zy(e,t,n){var r=Zc(e),i=e,o=!Sa(e),s=t.attrs,l=s===void 0?Ms:s,c=t.componentId,u=c===void 0?function(b,S){var j=typeof b!="string"?"sc":Td(b);Ca[j]=(Ca[j]||0)+1;var x="".concat(j,"-").concat(pp(Ts+j+Ca[j]));return S?"".concat(S,"-").concat(x):x}(t.displayName,t.parentComponentId):c,d=t.displayName,m=d===void 0?function(b){return Sa(b)?"styled.".concat(b):"Styled(".concat(Cy(b),")")}(e):d,g=t.displayName&&t.componentId?"".concat(Td(t.displayName),"-").concat(t.componentId):t.componentId||u,_=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;v=function(b,S){return w(b,S)&&y(b,S)}}else v=w}var p=new Jy(n,g,r?i.componentStyle:void 0);function f(b,S){return function(j,x,k){var B=j.attrs,O=j.componentStyle,J=j.defaultProps,ot=j.foldedComponentIds,be=j.styledComponentId,xe=j.target,Ut=pe.useContext(tu),qt=Fl(),wt=j.shouldForwardProp||qt.shouldForwardProp,E=dp(x,Ut,J)||xr,L=function($t,De,Et){for(var Ir,yn=ke(ke({},De),{className:void 0,theme:Et}),Gs=0;Gs<$t.length;Gs+=1){var Di=Ar(Ir=$t[Gs])?Ir(yn):Ir;for(var Wt in Di)yn[Wt]=Wt==="className"?kn(yn[Wt],Di[Wt]):Wt==="style"?ke(ke({},yn[Wt]),Di[Wt]):Di[Wt]}return De.className&&(yn.className=kn(yn.className,De.className)),yn}(B,x,E),R=L.as||xe,U={};for(var H in L)L[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&L.theme===E||(H==="forwardedAs"?U.as=L.forwardedAs:wt&&!wt(H,R)||(U[H]=L[H]));var _n=function($t,De){var Et=Fl(),Ir=$t.generateAndInjectStyles(De,Et.styleSheet,Et.stylis);return Ir}(O,L),st=kn(ot,be);return _n&&(st+=" "+_n),L.className&&(st+=" "+L.className),U[Sa(R)&&!mp.has(R)?"class":"className"]=st,U.ref=k,C.createElement(R,U)}(h,b,S)}f.displayName=m;var h=pe.forwardRef(f);return h.attrs=_,h.componentStyle=p,h.displayName=m,h.shouldForwardProp=v,h.foldedComponentIds=r?kn(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=g,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(S){for(var j=[],x=1;x<arguments.length;x++)j[x-1]=arguments[x];for(var k=0,B=j;k<B.length;k++)Tl(S,B[k],!0);return S}({},i.defaultProps,b):b}}),eu(h,function(){return".".concat(h.styledComponentId)}),o&&yp(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Wd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Vd=function(e){return Object.assign(e,{isCss:!0})};function nu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ar(e)||Si(e))return Vd(un(Wd(Ms,Ai([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?un(r):Vd(un(Wd(r,t)))}function zl(e,t,n){if(n===void 0&&(n=xr),!t)throw Bi(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,nu.apply(void 0,Ai([i],o,!1)))};return r.attrs=function(i){return zl(e,t,ke(ke({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return zl(e,t,ke(ke({},n),i))},r}var kp=function(e){return zl(Zy,e)},T=kp;mp.forEach(function(e){T[e]=kp(e)});var e1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Cp(t),ts.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Bl(un(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ts.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function jp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=nu.apply(void 0,Ai([e],t,!1)),i="sc-global-".concat(pp(JSON.stringify(r))),o=new e1(r,i),s=function(c){var u=Fl(),d=pe.useContext(tu),m=pe.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(m,c,u.styleSheet,d,u.stylis),pe.useLayoutEffect(function(){if(!u.styleSheet.server)return l(m,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(m,u.styleSheet)}},[m,c,u.styleSheet,d,u.stylis]),null};function l(c,u,d,m,g){if(o.isStatic)o.renderStyles(c,by,d,g);else{var _=ke(ke({},u),{theme:dp(u,m,s.defaultProps)});o.renderStyles(c,_,d,g)}}return pe.memo(s)}const ka={mobile:"600px",tablet:"1023px",desktop:"1024px"},D={mobile:`(max-width: ${ka.mobile})`,tablet:`(max-width: ${ka.tablet})`,desktop:`(max-width: ${ka.desktop})`},t1=T.header`
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
            @media ${D.mobile} {
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
    @media ${D.mobile} {
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
`,Ep=T.div`
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
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
            img {
                height: 100%;
                transition: all 0.3s;
            }
            .edit-img {
                opacity: 0;
                transition: all 0.3s;
                z-index: 99;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                img {
                    width: 4rem;
                }
            }
            &:hover {
                background-color: #fff;
                .edit-img {
                    opacity: 1;
                }
                > img {
                    opacity: 0.4;
                }
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
        margin-bottom: 20rem;
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
`,n1=T.div`
    .content-wrap {
        display: flex;
        width: 100%;
        position: relative;
        .scroll_up {
            position: fixed;
            bottom: 3rem;
            right: 3rem;
            .scroll_up_btn {
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                cursor: pointer;
                border: none;
                background-color: rgba(0, 0, 0, 0);
                img {
                    width: 100%;
                }
            }
        }
    }
    @media ${D.mobile} {
        margin-bottom: 9rem;
        .content-wrap {
            .scroll_up {
                bottom: 10rem;
                .scroll_up_btn {
                    width: 7rem;
                }
            }
        }
    }
`,r1=T.div`
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
`,i1=T.div`
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
`,o1=T.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 10%;
    .not {
        text-align: center;
        font-size: 2rem;
    }
`,s1=T.div`
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
`;var Np={exports:{}},Lp={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=C;function a1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var l1=typeof Object.is=="function"?Object.is:a1,c1=Ti.useSyncExternalStore,u1=Ti.useRef,d1=Ti.useEffect,m1=Ti.useMemo,f1=Ti.useDebugValue;Lp.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=u1(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=m1(function(){function c(_){if(!u){if(u=!0,d=_,_=r(_),i!==void 0&&s.hasValue){var v=s.value;if(i(v,_))return m=v}return m=_}if(v=m,l1(d,_))return v;var w=r(_);return i!==void 0&&i(v,w)?v:(d=_,m=w)}var u=!1,d,m,g=n===void 0?null:n;return[function(){return c(t())},g===null?void 0:function(){return c(g())}]},[t,n,r,i]);var l=c1(e,o[0],o[1]);return d1(function(){s.hasValue=!0,s.value=l},[l]),f1(l),l};Np.exports=Lp;var h1=Np.exports,We="default"in Ta?pe:Ta,Hd=Symbol.for("react-redux-context"),Kd=typeof globalThis<"u"?globalThis:{};function p1(){if(!We.createContext)return{};const e=Kd[Hd]??(Kd[Hd]=new Map);let t=e.get(We.createContext);return t||(t=We.createContext(null),e.set(We.createContext,t)),t}var fn=p1(),g1=()=>{throw new Error("uSES not initialized!")};function ru(e=fn){return function(){return We.useContext(e)}}var Ip=ru(),Pp=g1,v1=e=>{Pp=e},_1=(e,t)=>e===t;function y1(e=fn){const t=e===fn?Ip:ru(e),n=(r,i={})=>{const{equalityFn:o=_1,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:c,getServerState:u,stabilityCheck:d,identityFunctionCheck:m}=t();We.useRef(!0);const g=We.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,s.stabilityCheck]),_=Pp(c.addNestedSub,l.getState,u||l.getState,g,o);return We.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var P=y1();function w1(e){e()}function b1(){let e=null,t=null;return{clear(){e=null,t=null},notify(){w1(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Gd={notify(){},get:()=>[]};function x1(e,t){let n,r=Gd,i=0,o=!1;function s(w){d();const y=r.subscribe(w);let p=!1;return()=>{p||(p=!0,y(),m())}}function l(){r.notify()}function c(){v.onStateChange&&v.onStateChange()}function u(){return o}function d(){i++,n||(n=e.subscribe(c),r=b1())}function m(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Gd)}function g(){o||(o=!0,d())}function _(){o&&(o=!1,m())}const v={addNestedSub:s,notifyNestedSubs:l,handleChangeWrapper:c,isSubscribed:u,trySubscribe:g,tryUnsubscribe:_,getListeners:()=>r};return v}var A1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S1=typeof navigator<"u"&&navigator.product==="ReactNative",C1=A1||S1?We.useLayoutEffect:We.useEffect;function k1({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=We.useMemo(()=>{const u=x1(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[e,r,i,o]),l=We.useMemo(()=>e.getState(),[e]);C1(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,l]);const c=t||fn;return We.createElement(c.Provider,{value:s},n)}var j1=k1;function Rp(e=fn){const t=e===fn?Ip:ru(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var E1=Rp();function N1(e=fn){const t=e===fn?E1:Rp(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var te=N1();v1(h1.useSyncExternalStoreWithSelector);function ve(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var L1=typeof Symbol=="function"&&Symbol.observable||"@@observable",Xd=L1,ja=()=>Math.random().toString(36).substring(7).split("").join("."),I1={INIT:`@@redux/INIT${ja()}`,REPLACE:`@@redux/REPLACE${ja()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ja()}`},ns=I1;function iu(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Op(e,t,n){if(typeof e!="function")throw new Error(ve(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ve(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ve(1));return n(Op)(e,t)}let r=e,i=t,o=new Map,s=o,l=0,c=!1;function u(){s===o&&(s=new Map,o.forEach((y,p)=>{s.set(p,y)}))}function d(){if(c)throw new Error(ve(3));return i}function m(y){if(typeof y!="function")throw new Error(ve(4));if(c)throw new Error(ve(5));let p=!0;u();const f=l++;return s.set(f,y),function(){if(p){if(c)throw new Error(ve(6));p=!1,u(),s.delete(f),o=null}}}function g(y){if(!iu(y))throw new Error(ve(7));if(typeof y.type>"u")throw new Error(ve(8));if(typeof y.type!="string")throw new Error(ve(17));if(c)throw new Error(ve(9));try{c=!0,i=r(i,y)}finally{c=!1}return(o=s).forEach(f=>{f()}),y}function _(y){if(typeof y!="function")throw new Error(ve(10));r=y,g({type:ns.REPLACE})}function v(){const y=m;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ve(11));function f(){const b=p;b.next&&b.next(d())}return f(),{unsubscribe:y(f)}},[Xd](){return this}}}return g({type:ns.INIT}),{dispatch:g,subscribe:m,getState:d,replaceReducer:_,[Xd]:v}}function P1(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:ns.INIT})>"u")throw new Error(ve(12));if(typeof n(void 0,{type:ns.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ve(13))})}function R1(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let i;try{P1(n)}catch(o){i=o}return function(s={},l){if(i)throw i;let c=!1;const u={};for(let d=0;d<r.length;d++){const m=r[d],g=n[m],_=s[m],v=g(_,l);if(typeof v>"u")throw l&&l.type,new Error(ve(14));u[m]=v,c=c||v!==_}return c=c||r.length!==Object.keys(s).length,c?u:s}}function rs(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function O1(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(ve(15))};const s={getState:i.getState,dispatch:(c,...u)=>o(c,...u)},l=e.map(c=>c(s));return o=rs(...l)(i.dispatch),{...i,dispatch:o}}}function B1(e){return iu(e)&&"type"in e&&typeof e.type=="string"}var Bp=Symbol.for("immer-nothing"),Yd=Symbol.for("immer-draftable"),Ge=Symbol.for("immer-state");function dt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Sr=Object.getPrototypeOf;function Fn(e){return!!e&&!!e[Ge]}function zt(e){var t;return e?Tp(e)||Array.isArray(e)||!!e[Yd]||!!((t=e.constructor)!=null&&t[Yd])||zs(e)||Ds(e):!1}var T1=Object.prototype.constructor.toString();function Tp(e){if(!e||typeof e!="object")return!1;const t=Sr(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===T1}function is(e,t){Fs(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Fs(e){const t=e[Ge];return t?t.type_:Array.isArray(e)?1:zs(e)?2:Ds(e)?3:0}function Dl(e,t){return Fs(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Mp(e,t,n){const r=Fs(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function M1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function zs(e){return e instanceof Map}function Ds(e){return e instanceof Set}function xn(e){return e.copy_||e.base_}function Ul(e,t){if(zs(e))return new Map(e);if(Ds(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Tp(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[Ge];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const s=i[o],l=r[s];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(r[s]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[s]})}return Object.create(Sr(e),r)}else{const r=Sr(e);if(r!==null&&n)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function ou(e,t=!1){return Us(e)||Fn(e)||!zt(e)||(Fs(e)>1&&(e.set=e.add=e.clear=e.delete=F1),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>ou(r,!0))),e}function F1(){dt(2)}function Us(e){return Object.isFrozen(e)}var z1={};function zn(e){const t=z1[e];return t||dt(0,e),t}var Ci;function Fp(){return Ci}function D1(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Qd(e,t){t&&(zn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ql(e){$l(e),e.drafts_.forEach(U1),e.drafts_=null}function $l(e){e===Ci&&(Ci=e.parent_)}function Jd(e){return Ci=D1(Ci,e)}function U1(e){const t=e[Ge];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Zd(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Ge].modified_&&(ql(t),dt(4)),zt(e)&&(e=os(t,e),t.parent_||ss(t,e)),t.patches_&&zn("Patches").generateReplacementPatches_(n[Ge].base_,e,t.patches_,t.inversePatches_)):e=os(t,n,[]),ql(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Bp?e:void 0}function os(e,t,n){if(Us(t))return t;const r=t[Ge];if(!r)return is(t,(i,o)=>em(e,r,t,i,o,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return ss(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,s=!1;r.type_===3&&(o=new Set(i),i.clear(),s=!0),is(o,(l,c)=>em(e,r,i,l,c,n,s)),ss(e,i,!1),n&&e.patches_&&zn("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function em(e,t,n,r,i,o,s){if(Fn(i)){const l=o&&t&&t.type_!==3&&!Dl(t.assigned_,r)?o.concat(r):void 0,c=os(e,i,l);if(Mp(n,r,c),Fn(c))e.canAutoFreeze_=!1;else return}else s&&n.add(i);if(zt(i)&&!Us(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;os(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&ss(e,i)}}function ss(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ou(t,n)}function q1(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Fp(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=su;n&&(i=[r],o=ki);const{revoke:s,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=s,l}var su={get(e,t){if(t===Ge)return e;const n=xn(e);if(!Dl(n,t))return $1(e,n,t);const r=n[t];return e.finalized_||!zt(r)?r:r===Ea(e.base_,t)?(Na(e),e.copy_[t]=Vl(r,e)):r},has(e,t){return t in xn(e)},ownKeys(e){return Reflect.ownKeys(xn(e))},set(e,t,n){const r=zp(xn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Ea(xn(e),t),o=i==null?void 0:i[Ge];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(M1(n,i)&&(n!==void 0||Dl(e.base_,t)))return!0;Na(e),Wl(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Ea(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Na(e),Wl(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=xn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){dt(11)},getPrototypeOf(e){return Sr(e.base_)},setPrototypeOf(){dt(12)}},ki={};is(su,(e,t)=>{ki[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});ki.deleteProperty=function(e,t){return ki.set.call(this,e,t,void 0)};ki.set=function(e,t,n){return su.set.call(this,e[0],t,n,e[0])};function Ea(e,t){const n=e[Ge];return(n?xn(n):e)[t]}function $1(e,t,n){var i;const r=zp(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function zp(e,t){if(!(t in e))return;let n=Sr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Sr(n)}}function Wl(e){e.modified_||(e.modified_=!0,e.parent_&&Wl(e.parent_))}function Na(e){e.copy_||(e.copy_=Ul(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var W1=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const s=this;return function(c=o,...u){return s.produce(c,d=>n.call(this,d,...u))}}typeof n!="function"&&dt(6),r!==void 0&&typeof r!="function"&&dt(7);let i;if(zt(t)){const o=Jd(this),s=Vl(t,void 0);let l=!0;try{i=n(s),l=!1}finally{l?ql(o):$l(o)}return Qd(o,r),Zd(i,o)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===Bp&&(i=void 0),this.autoFreeze_&&ou(i,!0),r){const o=[],s=[];zn("Patches").generateReplacementPatches_(t,i,o,s),r(o,s)}return i}else dt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...l)=>this.produceWithPatches(s,c=>t(c,...l));let r,i;return[this.produce(t,n,(s,l)=>{r=s,i=l}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){zt(e)||dt(8),Fn(e)&&(e=V1(e));const t=Jd(this),n=Vl(e,void 0);return n[Ge].isManual_=!0,$l(t),n}finishDraft(e,t){const n=e&&e[Ge];(!n||!n.isManual_)&&dt(9);const{scope_:r}=n;return Qd(r,t),Zd(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=zn("Patches").applyPatches_;return Fn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Vl(e,t){const n=zs(e)?zn("MapSet").proxyMap_(e,t):Ds(e)?zn("MapSet").proxySet_(e,t):q1(e,t);return(t?t.scope_:Fp()).drafts_.push(n),n}function V1(e){return Fn(e)||dt(10,e),Dp(e)}function Dp(e){if(!zt(e)||Us(e))return e;const t=e[Ge];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ul(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Ul(e,!0);return is(n,(r,i)=>{Mp(n,r,Dp(i))}),t&&(t.finalized_=!1),n}var Xe=new W1,Up=Xe.produce;Xe.produceWithPatches.bind(Xe);Xe.setAutoFreeze.bind(Xe);Xe.setUseStrictShallowCopy.bind(Xe);Xe.applyPatches.bind(Xe);Xe.createDraft.bind(Xe);Xe.finishDraft.bind(Xe);function qp(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var H1=qp(),K1=qp,G1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?rs:rs.apply(null,arguments)};function tm(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(jt(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>B1(r)&&r.type===e,n}var $p=class Hr extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Hr.prototype)}static get[Symbol.species](){return Hr}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Hr(...t[0].concat(this)):new Hr(...t.concat(this))}};function nm(e){return zt(e)?Up(e,()=>{}):e}function rm(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(jt(10));const r=n.insert(t,e);return e.set(t,r),r}function X1(e){return typeof e=="boolean"}var Y1=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new $p;return n&&(X1(n)?s.push(H1):s.push(K1(n.extraArgument))),s},Q1="RTK_autoBatch",Wp=e=>t=>{setTimeout(t,e)},J1=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Wp(10),Z1=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,s=!1;const l=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?J1:e.type==="callback"?e.queueNotification:Wp(e.timeout),u=()=>{s=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const m=()=>i&&d(),g=r.subscribe(m);return l.add(d),()=>{g(),l.delete(d)}},dispatch(d){var m;try{return i=!((m=d==null?void 0:d.meta)!=null&&m[Q1]),o=!i,o&&(s||(s=!0,c(u))),r.dispatch(d)}finally{i=!0}}})},ew=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new $p(e);return r&&i.push(Z1(typeof r=="object"?r:void 0)),i};function tw(e){const t=Y1(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let l;if(typeof n=="function")l=n;else if(iu(n))l=R1(n);else throw new Error(jt(1));let c;typeof r=="function"?c=r(t):c=t();let u=rs;i&&(u=G1({trace:!1,...typeof i=="object"&&i}));const d=O1(...c),m=ew(d);let g=typeof s=="function"?s(m):m();const _=u(...g);return Op(l,o,_)}function Vp(e){const t={},n=[];let r;const i={addCase(o,s){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(jt(28));if(l in t)throw new Error(jt(29));return t[l]=s,i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function nw(e){return typeof e=="function"}function rw(e,t){let[n,r,i]=Vp(t),o;if(nw(e))o=()=>nm(e());else{const l=nm(e);o=()=>l}function s(l=o(),c){let u=[n[c.type],...r.filter(({matcher:d})=>d(c)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,m)=>{if(m)if(Fn(d)){const _=m(d,c);return _===void 0?d:_}else{if(zt(d))return Up(d,g=>m(g,c));{const g=m(d,c);if(g===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return d},l)}return s.getInitialState=o,s}var iw=Symbol.for("rtk-slice-createasyncthunk");function ow(e,t){return`${e}/${t}`}function sw({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[iw];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(jt(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(lw()):i.reducers)||{},c=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(h,b){const S=typeof h=="string"?h:h.type;if(!S)throw new Error(jt(12));if(S in u.sliceCaseReducersByType)throw new Error(jt(13));return u.sliceCaseReducersByType[S]=b,d},addMatcher(h,b){return u.sliceMatchers.push({matcher:h,reducer:b}),d},exposeAction(h,b){return u.actionCreators[h]=b,d},exposeCaseReducer(h,b){return u.sliceCaseReducersByName[h]=b,d}};c.forEach(h=>{const b=l[h],S={reducerName:h,type:ow(o,h),createNotation:typeof i.reducers=="function"};uw(b)?mw(S,b,d,t):cw(S,b,d)});function m(){const[h={},b=[],S=void 0]=typeof i.extraReducers=="function"?Vp(i.extraReducers):[i.extraReducers],j={...h,...u.sliceCaseReducersByType};return rw(i.initialState,x=>{for(let k in j)x.addCase(k,j[k]);for(let k of u.sliceMatchers)x.addMatcher(k.matcher,k.reducer);for(let k of b)x.addMatcher(k.matcher,k.reducer);S&&x.addDefaultCase(S)})}const g=h=>h,_=new Map;let v;function w(h,b){return v||(v=m()),v(h,b)}function y(){return v||(v=m()),v.getInitialState()}function p(h,b=!1){function S(x){let k=x[h];return typeof k>"u"&&b&&(k=y()),k}function j(x=g){const k=rm(_,b,{insert:()=>new WeakMap});return rm(k,x,{insert:()=>{const B={};for(const[O,J]of Object.entries(i.selectors??{}))B[O]=aw(J,x,y,b);return B}})}return{reducerPath:h,getSelectors:j,get selectors(){return j(S)},selectSlice:S}}const f={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:y,...p(s),injectInto(h,{reducerPath:b,...S}={}){const j=b??s;return h.inject({reducerPath:j,reducer:w},S),{...f,...p(j,!0)}}};return f}}function aw(e,t,n,r){function i(o,...s){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...s)}return i.unwrapped=e,i}var Mi=sw();function lw(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function cw({type:e,reducerName:t,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!dw(r))throw new Error(jt(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?tm(e,s):tm(e))}function uw(e){return e._reducerDefinitionType==="asyncThunk"}function dw(e){return e._reducerDefinitionType==="reducerWithPrepare"}function mw({type:e,reducerName:t},n,r,i){if(!i)throw new Error(jt(18));const{payloadCreator:o,fulfilled:s,pending:l,rejected:c,settled:u,options:d}=n,m=i(e,o,d);r.exposeAction(t,m),s&&r.addCase(m.fulfilled,s),l&&r.addCase(m.pending,l),c&&r.addCase(m.rejected,c),u&&r.addMatcher(m.settled,u),r.exposeCaseReducer(t,{fulfilled:s||so,pending:l||so,rejected:c||so,settled:u||so})}function so(){}function jt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const fw={isSideMenu:!0},Hp=Mi({name:"headerSlice",initialState:fw,reducers:{SideMenuChange(e){e.isSideMenu=!e.isSideMenu}}}),{SideMenuChange:au}=Hp.actions,hw=Hp.reducer,pw=()=>{const e=te(),t=()=>{e(au())};return a.jsx("div",{className:"all-menu pc",onClick:t,children:a.jsx("div",{className:"icon",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/All_menu.svg",alt:"menu"})})})},gw=()=>{const e=$(),[t,n]=C.useState(!0);return C.useEffect(()=>{setTimeout(()=>{n(!1)},12e3)},[]),a.jsx(a.Fragment,{children:t?a.jsx("div",{className:"logo-gif",onClick:()=>e("/"),children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/refs/heads/main/Icon/YouTube_logo.webp",alt:"Youtube"})}):a.jsx("div",{className:"logo",onClick:()=>e("/"),children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_logo.svg",alt:"Youtube"})})})},vw=[{user_id:798311,user_name:"진돗개 이레",user_age:20,user_tel:"010-5305-9524",user_email:"jindoEre@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[660495]},{user_id:660495,user_name:"쇼핑맘",user_age:29,user_tel:"010-0652-9305",user_email:"shoppingMom@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[798311]},{user_id:201864,user_name:"mamu마므",user_age:20,user_tel:"010-4505-9420",user_email:"mamu_vlog@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[904206]},{user_id:904206,user_name:"무찌",user_age:35,user_tel:"010-0654-7051",user_email:"moozzi@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[201864]},{user_id:806540,user_name:"아가리어터",user_age:27,user_tel:"010-5305-9524",user_email:"Or7r2l@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[56165156]},{user_id:56165156,user_name:"radiohead",user_age:20,user_tel:"010-1234-1234",user_email:"radiohead@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[806540]},{user_id:6546654,user_name:"ultraTasteDiary",user_age:30,user_tel:"010-3481-1745",user_email:"ultraTasteDiary@naver.com",user_password:"8761",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[96745102]},{user_id:96745102,user_name:"suede",user_age:27,user_tel:"010-4912-9012",user_email:"suede@naver.com",user_password:"1568",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[41846541]},{user_id:41846541,user_name:"woowakgood",user_age:35,user_tel:"010-4975-6179",user_email:"woowakgood@naver.com",user_password:"3715",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:81372931,user_name:"goodboykris",user_age:26,user_tel:"010-1546-4891",user_email:"goodboykris@naver.com",user_password:"8154",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:741852,user_name:"KBS_Joy",user_age:34,user_tel:"010-1234-1234",user_email:"KBS_Joy@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:458963,user_name:"LIJULIKE",user_age:25,user_tel:"010-5647-7894",user_email:"LIJULIKE@naver.com",user_password:"2222",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:641322,user_name:"Highfiction",user_age:21,user_tel:"010-5648-0057",user_email:"Highfiction@naver.com",user_password:"3333",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:984562,user_name:"Beginagain",user_age:34,user_tel:"010-7489-5587",user_email:"Beginagain@naver.com",user_password:"4444",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:859641,user_name:"G_Movie",user_age:37,user_tel:"010-1122-3344",user_email:"G_Movie@naver.com",user_password:"5555",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:452454,user_name:"workman",user_age:30,user_tel:"010-1546-4780",user_email:"workman@naver.com",user_password:"1234",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:775460,user_name:"sbs_dali",user_age:30,user_tel:"010-1226-4905",user_email:"sbs_dali@naver.com",user_password:"1434",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:125424,user_name:"ootbstudio",user_age:38,user_tel:"010-1226-4905",user_email:"ootbstudio@naver.com",user_password:"8834",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:2250024,user_name:"SBSKPOP",user_age:25,user_tel:"010-4872-1655",user_email:"SBSKPOP@naver.com",user_password:"8204",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:2215544,user_name:"SBSANIMAL",user_age:33,user_tel:"010-3264-2585",user_email:"SBSANIMAL@naver.com",user_password:"1212",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]}],_w={LoginUser:JSON.parse(localStorage.getItem("YoutubeLoginUser"))||vw,isLoginUser:JSON.parse(localStorage.getItem("YoutubeIsLoginUser"))||{},isAuth:JSON.parse(localStorage.getItem("YoutubeIsAuth"))||!1},Kp=Mi({name:"authSlice",initialState:_w,reducers:{UserLogin(e,t){const{user_email:n,user_password:r}=t.payload,i=e.LoginUser.find(o=>o.user_email===n&&o.user_password===r);i?(e.isAuth=!0,e.isLoginUser=i,localStorage.setItem("YoutubeIsAuth",JSON.stringify(!0)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(i))):(e.isAuth=!1,e.isLoginUser={},localStorage.removeItem("YoutubeIsAuth"),localStorage.removeItem("YoutubeIsLoginUser"))},UserLogout(e){e.isAuth=!1,e.isLoginUser=null,localStorage.removeItem("YoutubeIsAuth"),localStorage.removeItem("YoutubeIsLoginUser")},AddNewUser(e,t){if(t.payload.ip){const n=e.LoginUser.find(r=>r.user_id===t.payload.ip);if(n)e.isLoginUser=n;else{const r={user_id:t.payload.ip,user_search_list:[],Viewing_Record:[]};e.LoginUser.push(r),e.isLoginUser=r}}else{const n={user_id:Math.floor(Math.random()*1e6),...t.payload,user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]};e.LoginUser.push(n),e.isLoginUser=n,e.isAuth=!0}localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)),localStorage.setItem("YoutubeIsAuth",JSON.stringify(e.isAuth)),localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser))},IsAddList(e,t){const{user_id:n,type:r,movie:i}=t.payload,o=e.LoginUser.find(s=>s.user_id===n);if(o&&o[r]){const s=o[r].findIndex(l=>l.movie_id===i.movie_id);s!==-1&&o[r].splice(s,1),o[r].push(i),o[r].sort((l,c)=>new Date(c.movie_date.year,c.movie_date.month-1,c.movie_date.day)-new Date(l.movie_date.year,l.movie_date.month-1,l.movie_date.day)),e.isLoginUser=o}localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},IsDelList(e,t){const{user_id:n,type:r,movie:i}=t.payload,o=e.LoginUser.find(s=>s.user_id===n);o&&(o[r]=o[r].filter(s=>s.movie_id!==i.movie_id)),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},AllDelList(e,t){const{user_id:n,type:r}=t.payload,i=e.LoginUser.find(o=>o.user_id===n);i&&(i[r]=[]),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},AddNewSearchList(e,t){const{user_id:n,search:r}=t.payload,i=e.LoginUser.find(o=>o.user_id===n);if(i&&!i.user_search_list.some(s=>s.search===r)){const s={search_id:Math.floor(Math.random()*1e6),search:r};i.user_search_list.unshift(s),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))}},DelSearchList(e,t){const{user_id:n,search:r}=t.payload,i=e.LoginUser.find(o=>o.user_id===n);i&&(i.user_search_list=i.user_search_list.filter(o=>o.search!==r),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)))},AddNewSubscription(e,t){var o;const{user_id:n,channel_id:r}=t.payload,i=e.LoginUser.find(s=>s.user_id===n);i&&((o=i.Subscription_Id)!=null&&o.includes(r)||i.Subscription_Id.push(r),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)))},DelSubscription(e,t){const{user_id:n,channel_id:r}=t.payload,i=e.LoginUser.find(o=>o.user_id===n);i.Subscription_Id=i.Subscription_Id.filter(o=>o!==r),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))}}}),{UserLogin:Gp,UserLogout:Xp,AddNewUser:Yp,IsAddList:lu,AllDelList:yw,IsDelList:ri,AddNewSearchList:ww,DelSearchList:bw,AddNewSubscription:xw,DelSubscription:Aw}=Kp.actions,Sw=Kp.reducer,Cw=({setIsShown:e,isShown:t,search:n,setSearch:r})=>{const i=$(),o=te(),s=P(c=>c.auth.isLoginUser),l=c=>{c.preventDefault(),n&&(o(ww({user_id:s.user_id,search:n})),i(`/movies/${n}`),r(""))};return a.jsxs("form",{onSubmit:l,className:"search-box",onClick:()=>e(!t),children:[a.jsx("input",{type:"text",name:"search",id:"search",placeholder:"검색",value:n,onChange:c=>{r(c.target.value)}}),a.jsx("button",{type:"submit",className:"search-btn",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg",alt:"search"})})]})},kw=T.div`
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
    @media ${D.mobile} {
        min-width: 10rem;
    }
`,jw=T.ul`
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
`,Ew={isSavePop:!1,popMsg:null},Qp=Mi({name:"savepopSlice",initialState:Ew,reducers:{isSavePopTrue(e,t){e.isSavePop=!0,e.popMsg=t.payload},isSavePopFalse(e){e.isSavePop=!1,e.popMsg=null}}}),{isSavePopTrue:vt,isSavePopFalse:Nw}=Qp.actions,Lw=Qp.reducer,Iw=()=>{const{isAuth:e,isLoginUser:t}=P(o=>o.auth),n=$(),r=te(),i=o=>{e&&(o==="logout"?(r(Xp()),n("/"),r(vt(`${t.user_name}님 로그아웃`))):o==="studio"?n(`/studio/${t.user_id}/dashboard`):alert("error"))};if(e&&t)return a.jsxs(jw,{children:[a.jsxs("li",{onClick:()=>i("logout"),className:"log-out",children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/logout.svg",alt:"logout"}),"로그아웃"]}),a.jsxs("li",{onClick:()=>i("studio"),className:"studio",children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/119e28bfa00f6df905130034043fd7183cdfc9f3/Icon/YouTube_studio.svg",alt:"studio"}),"Youtube 스튜디오"]})]})},Wn=e=>{const t=C.useRef(null),n=r=>{t.current&&!t.current.contains(r.target)&&e()};return C.useEffect(()=>(document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}),[]),t},Pw=()=>{var o;const{isLoginUser:e}=P(s=>s.auth),[t,n]=C.useState(!1),r=Wn(()=>n(!1)),i=$();return a.jsxs("div",{className:"user-menu pc",children:[a.jsx("a",{href:"#",onClick:s=>{s.preventDefault(),i(`/studio/${e.user_id}/dashboard`)},children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Making_video.svg",alt:"MakingVideo"})}),a.jsx("a",{href:"#",onClick:()=>n(!t),ref:r,children:a.jsxs("span",{className:"user-profile",children:[(o=e==null?void 0:e.user_name)==null?void 0:o.charAt(0),t&&a.jsx(Iw,{})]})})]})},cu=()=>{const e=$();return a.jsxs(kw,{className:"login-menu",onClick:()=>e("/login"),children:[a.jsx("div",{className:"account-wrap ",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/Account.svg",alt:"Account"})}),a.jsx("p",{className:"login-btn",children:"로그인"})]})},Rw=({isShown:e,setSearch:t,setIsShown:n})=>{const r=$(),i=te(),o=P(u=>u.auth.isLoginUser),s=(o==null?void 0:o.user_search_list)||[],l=u=>{t(u),n(!0),r(`/movies/${u}`)},c=u=>{i(bw({user_id:o.user_id,search:u}))};return s.length>0&&!e&&a.jsx("ul",{className:"search-history",children:s.map(u=>a.jsxs("li",{className:"search-item",onClick:()=>l(u.search),children:[a.jsxs("p",{className:"search-keyword",children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg",alt:"search"}),u.search]}),a.jsx("button",{className:"history-btn",onClick:d=>{d.stopPropagation(),c(u.search)},children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Close_Btn.svg",alt:"close-btn",className:"close-btn"})})]},u.search_id))})},Jp=()=>{const{isAuth:e}=P(l=>l.auth),[t,n]=C.useState(!0),[r,i]=C.useState(""),{Search:o}=_t(),s=Wn(()=>n(!0));return a.jsx(t1,{id:"header",ref:s,children:a.jsxs("div",{className:"top",children:[a.jsxs("div",{className:"first-box",children:[a.jsx(pw,{}),a.jsx(gw,{})]}),a.jsx(Cw,{isShown:t,setIsShown:n,search:r,setSearch:i}),a.jsx(Rw,{Search:o,isShown:t,setSearch:i,setIsShown:n}),e?a.jsx(Pw,{}):a.jsx(cu,{})]})})},as={Home:[{id:1029844,name:"홈",type:"Home",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Home_menu.svg"},{id:46089394,name:"구독",type:"Subscription",nav:"/subscription",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Subscription_menu.svg"}],MyPage:[{id:35329104,name:"시청 기록",type:"Viewing_Record",nav:"/feed/Viewing_Record",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/viewing_record.svg"},{id:3290384132,name:"재생 목록",type:"Playlist",nav:"/feed/Playlist",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Play_list.svg"},{id:4390684386,name:"내 동영상",type:"MyVideo",nav:"/dashboard",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/My_video.svg"},{id:56905630,name:"나중에 볼 동영상",type:"Later_Watch",nav:"/feed/Later_Watch",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/later_on.svg"},{id:3249320423,name:"좋아요 표시한 동영상",type:"like_Movie_List",nav:"/feed/like_Movie_List",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Like_list.svg"},{id:896773,name:"오프라인 저장 동영상",type:"Download_List",nav:"/feed/Download_List",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Download.svg"}],SearchCategory:[{id:43968339,name:"쇼핑",type:"shopping",nav:"/movies/shopping",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Shopping.svg"},{id:54907840,name:"음악",type:"music",nav:"/movies/music",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Music.svg"},{id:5604365436,name:"영화",type:"movies",nav:"/movies/movie",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Movies.svg"},{id:592122126,name:"실시간",type:"realtime",nav:"/movies/live",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Real-time.svg"},{id:89065962,name:"학습 프로그램",type:"learningprogram",nav:"/movies/challenge",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/learning_program.svg"}]},ji=({id:e,name:t,type:n,nav:r,icon:i})=>{const o=$(),{isLoginUser:s}=P(c=>c.auth),l=()=>{o(n==="MyVideo"||n==="Dashboard"||n==="Content"||n==="Comment"||n==="VideoUpload"?`/studio/${s.user_id}${r}`:r)};return a.jsxs("li",{onClick:l,children:[a.jsx("img",{src:i,alt:n}),a.jsx("span",{className:"name",children:t})]})},Ow=()=>a.jsx("ul",{children:as.Home.map(e=>a.jsx(ji,{...e},e.id))}),Bw=()=>{const{isAuth:e}=P(t=>t.auth);return a.jsxs("ul",{children:[a.jsxs("p",{className:"menu-title",children:["내 페이지"," ",a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Right.svg",alt:"right"})]}),e?as.MyPage.map(t=>a.jsx(ji,{...t},t.id)):as.MyPage.filter(t=>t.type!=="Download_List"&&t.type!=="like_Movie_List"&&t.type!=="Playlist"&&t.type!=="Later_Watch").map(t=>a.jsx(ji,{...t},t.id))]})},Tw=()=>a.jsxs("ul",{children:[a.jsx("p",{className:"menu-title",children:"탐색"}),as.SearchCategory.map(e=>a.jsx(ji,{...e},e.id))]}),Mw=()=>{const{Channel:e}=P(o=>o.channel),{isAuth:t,isLoginUser:n}=P(o=>o.auth),r=$(),i=Object.values(e).filter(o=>{var s;return(s=n==null?void 0:n.Subscription_Id)==null?void 0:s.includes(o.channel_id)});return a.jsxs("ul",{className:"subscription-wrap",children:[a.jsx("p",{className:"menu-title",children:"구독"}),t?i.map(o=>a.jsxs("li",{className:"thisChannel-item",onClick:()=>{var s;return r(`/channel/${((s=o.Movies[0])==null?void 0:s.movie_channel)||o.channel_nav}`)},children:[a.jsx("img",{src:o.channel_image,alt:o.channel_name}),a.jsx("span",{className:"name",children:o.channel_name})]},o.channel_id)):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"not-login-span",children:"로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다."}),a.jsx(cu,{})]})]})},Fw=()=>a.jsxs(Ep,{className:"pc",children:[a.jsx(Ow,{}),a.jsx(Bw,{}),a.jsx(Mw,{}),a.jsx(Tw,{}),a.jsx("ul",{children:a.jsx("p",{className:"footer",children:"© 2024 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다."})})]}),zw=T.ul`
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
    @media ${D.mobile} {
        width: 24rem;
        .save-item {
            font-size: 1.5rem;
            img {
                width: 3rem;
            }
        }
    }
`,Dw=T.div`
    border: 1px solid #000;
    position: fixed;
    bottom: 5rem;
    left: ${e=>e.left};
    padding: 1rem 1.6rem;
    border-radius: 1rem;
    background: #000;
    color: #fff;
    /* 11/15 김혜림 추가 */
    @media ${D.mobile} {
        left: 1rem;
        bottom: 10rem;
    }
`,Uw=({left:e})=>{const{popMsg:t}=P(n=>n.savepop);return a.jsx(Dw,{left:e,children:a.jsxs("p",{children:[t," 이(가) 되었습니다."]})})},qw=T.dialog`
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
`,$w={KBS_Joy:{channel_id:741852,channel_name:"KBS Joy",channel_nav:"KBS_Joy",channel_banner:"https://yt3.googleusercontent.com/mB8n4aqavnr5nGV5P7UH67hZd2qRYTJ5sCnXVqNIxFMX8NNQ26iyoztz-zfpUj7Nx6Vtp7_WEg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/wNoNXmOpkCgBiPmx8pusWVLDeXIADKo1MhiYz22JBdpVxzCFII7kbZ9g8ihRh1oRszvrvwetgw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"KBS Joy 공식 채널입니다.",channel_subscribers:117e4,Movies:[{movie_id:5961259,movie_title:"피할 수 없는 운명.. 귀신(鬼神) 보는 남자👻 (소름주의) [무엇이든 물어보살]",movie_body:"그의 눈앞에 시도 때도 없이 나타난다는 귀신들!독실한 크리스천이지만 신묘한 능력 덕분에 모르는 사람들까지 점 봐달라고 찾아온다는데..",movie_image:"https://i.ytimg.com/vi/j-rZqBXHIic/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc5a2AFFlDSZ1NnUBbw6obVrfkKw",movie_video:"https://www.youtube.com/embed/j-rZqBXHIic?si=m8lX6Aec3_QXyyZh&autoplay=1&mute=1",movie_like_count:91e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:11,day:18},movie_comments:[{comment_id:943854943,comment_body:"공부안하고 딴짓할때 수호령이 뒤통수 때려줬음 좋겠다..",comment_user_id:"test",comment_user_name:"ino-zk3go"}]},{movie_id:58709456945,movie_title:"유명한 엄마를 둔 딸의 흔한 고민 [무엇이든 물어보살]",movie_body:"엄마가 유명해서 불편해요 SNS 중독 엄마와 팩트폭격기 딸의 한 치 양보 없는 썰전! ",movie_image:"https://i.ytimg.com/vi/pxPADFCRFY4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNtOffVDGsBO3Z0_nOhVcFH7FQoA",movie_video:"https://www.youtube.com/embed/pxPADFCRFY4?si=IeVxx9gJUd6fQE-p&autoplay=1&mute=1",movie_like_count:48e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:5,day:28},movie_comments:[{comment_id:456852,comment_body:"부모님이 유명해서 고민돼요라고 나오려면 철구 딸은 돼야할 것 같은데 ㅋㅋㅋ 이쯤되면 ㄹㅇ 인생이 고민될만하지",comment_user_id:"test",comment_user_name:"Frog27beat"}]},{movie_id:32905203,movie_title:"행복한 삶을 꿈꾸는 투렛 증후군 환자, '인생을 어떻게 살아가야 할까요..' [무엇이든 물어보살]",movie_body:"행복한 삶을 꿈꾸는 #투렛증후군 환자의 고백",movie_image:"https://i.ytimg.com/vi/eAXN1C0dLe8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_AOTsQpOpjh0Wu_JfwMY1jKFaw",movie_video:"https://www.youtube.com/embed/eAXN1C0dLe8?si=K1gkasXQmkbjj42S&autoplay=1&mute=1",movie_like_count:14e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2020,month:3,day:23},movie_comments:[{comment_id:748569,comment_body:"현대의학으로 안된다면 우리의 눈이 달라지면됩니다",comment_user_id:"test",comment_user_name:"전현주-j4c"}]},{movie_id:932848,movie_title:"스스로도 풀지 못한.. 진짜 무속인의 마음속 고민 [무엇이든 물어보살]",movie_body:"신빨 최고 신입 보살이 물어보살에 찾아왔다! 스스로도 못 푼 그녀의 마음 속 고민을 풀어 줄 아기동자의 공감 100배 특급 조언!",movie_image:"https://i.ytimg.com/vi/HBpxhWhWpuw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9XoUoh6LstlgHZzMo74_h2zmJSw",movie_video:"https://www.youtube.com/embed/HBpxhWhWpuw?si=rveNvcv3_Qq9D2n8&autoplay=1&mute=1",movie_like_count:53e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:9,day:18},movie_comments:[{comment_id:125869,comment_body:"",comment_user_id:"test",comment_user_name:""}]},{movie_id:8862923,movie_title:"(역대급 고민) '잘못된 만남' 현실판🤦‍♂️ '아내가 20년지기 절친과 바람났습니다...' [무엇이든 물어보살]",movie_body:"'아내가 제 절친과 바람났습니다..' 초보 싱글 대디의 안타까운 고민🤦‍♂️",movie_image:"https://i.ytimg.com/vi/rxIiCI-5hsc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8RrMxr0wxcF8b9PZ61VG5aj5k4g",movie_video:"https://www.youtube.com/embed/rxIiCI-5hsc?si=TBIulhyWK7n7yBDO&autoplay=1&mute=1",movie_like_count:67e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2020,month:3,day:9},movie_comments:[{comment_id:165265,comment_body:"좀 잔인한 얘기지만 아기도 유전자 검사 한번 해 보길..",comment_user_id:"test",comment_user_name:"신사임니당-w2y"}]}]},LIJULIKE:{channel_id:458963,channel_name:"리쥬라이크",channel_nav:"LIJULIKE",channel_banner:"https://yt3.googleusercontent.com/LPYJH3KwfkCifSwsUuVaVFuKi1Uz09HpDLOi11ddXHlVOBh3XwlYSZfJ7UHjiudY3YAWseAU0q4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/pcFLVUDQVSlOjqLjCr3K34RiAvvtj0DGTxbdOzYYqmBnmfKN0vfVRv4FSSJo0X9UnTGEoRcg97U=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"유혜주Vlog",channel_subscribers:85e4,Movies:[{movie_id:586412,movie_title:"[VLOG] 벌써 나온다고??😱 남편 없이 갑작스런 출산!! 생전 처음 겪는 엄청난 고통💦",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/cQb-6mQV-KQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB31OYLvG7ZcTDySJTy1hMsOm2fsA",movie_video:"https://www.youtube.com/embed/cQb-6mQV-KQ?si=jccwNpyuj6FWpXLa&autoplay=1&mute=1",movie_like_count:66e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:3,day:3},movie_comments:[{comment_id:567894,comment_body:"볼때마다 눈물이 주륵주륵…평생 잘할게요",comment_user_id:"test",comment_user_name:"@조땡-r8b"}]},{movie_id:789321,movie_title:"드디어 동생과 내친구의 결혼식 공개해요! (제 축사도..)",movie_body:"드디어 제 동생 현주와 제 친구 태성이의 결혼식을 공개해요 !",movie_image:"https://i.ytimg.com/vi/lWwyGT1BJMA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVHK7saocl61XDD-xZOHlNnf3Byg",movie_video:"https://www.youtube.com/embed/lWwyGT1BJMA?si=ZamdeYRmluFQ4nC7&autoplay=1&mute=1",movie_like_count:17e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2022,month:5,day:9},movie_comments:[{comment_id:853121,comment_body:"경찬님 개웃기다.. 영상 볼때마다 한시도 가만히 있질 않으시네요",comment_user_id:"test",comment_user_name:"user-is7du8lu6x"}]},{movie_id:168997,movie_title:"[VLOG] 처음으로 손자를 보는 어머니, 첫조카를 본 가족의 반응은? l 대가족 특집",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/YaxocJPDMDY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDizKIGKdh_cb5Wc6y6lvY3yUTMQ",movie_video:"https://www.youtube.com/embed/YaxocJPDMDY?si=GvxkGOgBrYlgbQ-q&autoplay=1&mute=1",movie_like_count:26e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:4,day:29},movie_comments:[{comment_id:842112,comment_body:"가족이 많다는 건 정말 행복한 일 같아요 정 넘치는 모습 보기 좋아요 🥰",comment_user_id:"test",comment_user_name:"@옹글몽글-e7j"}]},{movie_id:211666,movie_title:"[드디어 공개] 동생과 내친구가 연애하게된 스토리 ep.1",movie_body:"드디어 제 동생 현주와 제 친구 태성이의 연애스토리를 공개합니다❤️ 오랫동안 기다려주셔서 감사해요☺️",movie_image:"https://i.ytimg.com/vi/nyMZxK2Kvhs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdY3151EqR0c7ZBkdJ17MBXgys7Q",movie_video:"https://www.youtube.com/embed/nyMZxK2Kvhs?si=iJT0KA3RWRV3v5Af&autoplay=1&mute=1",movie_like_count:16e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2021,month:10,day:30},movie_comments:[{comment_id:673212,comment_body:"개재밌다...남의 연애사....",comment_user_id:"test",comment_user_name:"@hermit__crab"}]},{movie_id:167556,movie_title:"[VLOG] 남편과 조리원 첫 입소! 처음으로 안아보는 아들👩‍🍼 (모유수유/회음부통증/출산지원금)",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/MiBlImCwkso/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdLe_OzNOXirgKX86KNW2tM-x8Hw",movie_video:"https://www.youtube.com/embed/gB1EonLy5lQ?si=laMZ9Xj6HLVMjQi6&autoplay=1&mute=1",movie_like_count:29e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:3,day:12},movie_comments:[{comment_id:296747,comment_body:"남편분 든든하다.. 옆에서 저렇게 서류 처리할거나 신청 할것들 알아서 착착해주기만 해도 맘 놓을 수 있을듯..",comment_user_id:"test",comment_user_name:"@_nyong_"}]}]},Highfiction:{channel_id:641322,channel_name:"하이픽션",channel_nav:"Highfiction",channel_banner:"https://yt3.googleusercontent.com/w8XfHLFzmciL0QYoAEwv_CP5qvVRRN5wzIkLfAdgtMNuaNtMrJhkTLX0dC46f5gVHWFaoY4YMg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/TJo2vsrvi2HtumSu8qU9OGvRTM6SOPpNZ9lXxC0vLKasedPX-cMOMJgWpY2rkdTxr_f7k5TIpw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"더 높은 재미를 추구하는 하이픽션 입니다",channel_subscribers:756e3,Movies:[{movie_id:567732,movie_title:"(ep.1~10) 조폭여친과 함께하는 연애스토리",movie_body:"조폭여친 몰아보기편!!! 재밌게 봐주세요~!",movie_image:"https://i.ytimg.com/vi/0WZGu5-gwYY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOMsvUKKlWP9t7Xmg-ifXaViTa2A",movie_video:"https://www.youtube.com/embed/0WZGu5-gwYY?si=S6y8EncMYiq64k_c&autoplay=1&mute=1",movie_like_count:29e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2024,month:3,day:21},movie_comments:[{comment_id:247855,comment_body:"그냥 이쁘기만한게 아니라 볼수록 매력있는 시연님!! 계속 매력적인 작품 기대해봅니다. 화이팅!!",comment_user_id:"test",comment_user_name:"arden-white"}]},{movie_id:135276,movie_title:"나 꼬시고 싶어? [거짓말 없는 세상]",movie_body:"안녕하세요 스톡커입니다 재밌게 봐주세요~!",movie_image:"https://i.ytimg.com/vi/I2so7rnoDEM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUmB5blGdntffbfTHpi4XLhIt7rw",movie_video:"https://www.youtube.com/embed/I2so7rnoDEM?si=rQi-dvnPIdToyATH&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2022,month:7,day:2},movie_comments:[{comment_id:851144,comment_body:"문 열리니까 괜히 와보는 고양이 존나 귀엽다",comment_user_id:"test",comment_user_name:"김김-t2h"}]},{movie_id:875312,movie_title:"숏박스 구독 안 한 새끼 누구냐??",movie_body:"안녕하세요 오늘은 유튜버 똥군기입니다 재밌게 만든 픽션이니까 오해하지말고 재미로 봐주세요~!!",movie_image:"https://i.ytimg.com/vi/MgdXR4vTtxQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEVsOphJ1wTY1BEwoPnqP7_8T1hQ",movie_video:"https://www.youtube.com/embed/MgdXR4vTtxQ?si=GwxbT8ZznAtF1Kxm&autoplay=1&mute=1",movie_like_count:37e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2023,month:6,day:17},movie_comments:[{comment_id:342532,comment_body:"안녕하세요 루키치입니다!!! 말씀 하신대로 채널명 바꿨습니다 선배님…",comment_user_id:"test",comment_user_name:"rookitsch"}]},{movie_id:653112,movie_title:"도망가면 뒤진다?",movie_body:"안녕하세요 하이픽션입니다 오늘도 재밌게 봐주세요!!",movie_image:"https://i.ytimg.com/vi/KpV430uiUkY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7VbGVys7By0hxajhDNZhvqLKVQQ",movie_video:"https://www.youtube.com/embed/KpV430uiUkY?si=F2mGpsPg0Vk6Pt7x&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:"641322",movie_date:{year:2023,month:12,day:5},movie_comments:[{comment_id:642323,comment_body:"그래도 세번 도망칠 용기라도 있네 친구는 ㅋㅋㅋㅋㅋㅋㅋ 이쁜사랑 하세요 ㅋㅋㅋㅋㅋ",comment_user_id:"test",comment_user_name:"AKI-___"}]},{movie_id:325464,movie_title:"또 쳐다보세요 [거짓말 없는 세상]",movie_body:"안녕하세요 스톡커입니다 다시 돌아온 헬스장편 재밌게 봐주세요~!!",movie_image:"https://i.ytimg.com/vi/0cEMl3j2cAU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYsI-7LoLfSCZ6yPl6w-Fwd-ol7Q",movie_video:"https://www.youtube.com/embed/0cEMl3j2cAU?si=kz2G69MhCdpzC4bM&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2022,month:6,day:22},movie_comments:[{comment_id:564223,comment_body:"이거 헬스장에 대형 티비로 틀어나야  한다",comment_user_id:"test",comment_user_name:"짱코씨"}]}]},Beginagain:{channel_id:984562,channel_name:"@begin_again",channel_nav:"Beginagain",channel_banner:"https://yt3.googleusercontent.com/SgYk8-S4UrUAxgTx4Y0wB64PNsENZK0raxLYEiN800OiRSwh6eMozF0Z9YZoday7cZpII8SV=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/FmxZkGyu8p9bBT774Owjr3A2GNfBQofKZi_yBss5bFMvyhP9RJlFTYCrwcvONxQZ6sVvvJjriQ=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"JTBC의 힐링 음악 예능 [비긴어게인] 공식 채널입니다🎵",channel_subscribers:183e4,Movies:[{movie_id:259877,movie_title:"🎤언제 들어도 소름 돋는 이하이(Lee Hi)의 ′Rose🌹♪ 〈비긴어게인 코리아(beginagainkorea)〉 4회",movie_body:"🎤언제 들어도 소름 돋는 이하이의 ′Rose🌹♪",movie_image:"https://i.ytimg.com/vi/cq-A2RJC7fg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHvwfqHd1X24KLdrxSJUYL25xDFg",movie_video:"https://www.youtube.com/embed/cq-A2RJC7fg?si=V1LgeIM39vh5OAml&autoplay=1&mute=1",movie_like_count:26e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:28},movie_comments:[{comment_id:894448,comment_body:"하이는 본인을 이기는구나,, 라이브가 음원을 압살해버리네",comment_user_id:"test",comment_user_name:"조은교-y1g"}]},{movie_id:423411,movie_title:"[ENG] 수현(Su-hyun)x정승환(Jung Seung-hwan)의 ′어떻게 이별까지 사랑하겠어， 널 사랑하는 거지′♪ 〈비긴어게인 코리아(beginagainkorea)〉 1회",movie_body:"이수현x정승환의 ′어떻게 이별까지 사랑하겠어， 널 사랑하는 거지′♪",movie_image:"https://i.ytimg.com/vi/XNGoOqB8380/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyocU3z6aYqzs-BCnoS0vhThrQ_A",movie_video:"https://www.youtube.com/embed/XNGoOqB8380?si=5RsOiKM5D9N9dFNz&autoplay=1&mute=1",movie_like_count:12e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:7},movie_comments:[{comment_id:564221,comment_body:"오빠랑 안불러서 더 감정이 들어가 완벽해졌다는 전설의 라이브 영상",comment_user_id:"test",comment_user_name:"관동이관동이"}]},{movie_id:876543,movie_title:"[ENG] (반전의 반전↗) 이수현x헨리x크러쉬x정승환 ′All For You′♬ 〈비긴어게인 코리아(beginagainkorea)〉 1회",movie_body:"(반전의 반전↗) 이수현x헨리x크러쉬x정승환 ′All For You′♬",movie_image:"https://i.ytimg.com/vi/wEgvCBcfFLI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-Z584pH-XHi9wlU2NMG62MHXYwA",movie_video:"https://www.youtube.com/embed/wEgvCBcfFLI?si=q1O96MbHz3GbFUe5&autoplay=1&mute=1",movie_like_count:24e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:7},movie_comments:[{comment_id:534121,comment_body:"진짜 정승환 목소리가 이수현 목소리 싹 감싸주는 그런느낌 받음",comment_user_id:"test",comment_user_name:"뭐봐일"}]},{movie_id:452431,movie_title:"🎧이수현 Playlist🎧 '심신 안정 보이스' 이수현 노래 모음 ｜ 비긴어게인 모아듣기",movie_body:"🎧비긴어게인 이수현 Playlist🎧",movie_image:"https://i.ytimg.com/vi/STwHSJSA86c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCftOY5ZUPTPthjULKeF-K1kPjTIA",movie_video:"https://www.youtube.com/embed/STwHSJSA86c?si=W3U9NoS5ERACOGH7&autoplay=1&mute=1",movie_like_count:11e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:8,day:6},movie_comments:[{comment_id:98491202,comment_body:"편집자 상줘라",comment_user_id:"test",comment_user_name:"tuna3298"}]},{movie_id:642431,movie_title:"[ENG｜단독 풀버전] 비긴어게인 코리아 '길' ｜ 눈물바다가 된 비긴코 버스킹 현장😢",movie_body:"비긴어게인 코리아 '길' 풀버전 버스킹 현장이 눈물바다가 된 사연은?!",movie_image:"https://i.ytimg.com/vi/YS10Cdaz2Kk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8bhQuomv7G42p44l1WG1TuPsoeg",movie_video:"https://www.youtube.com/embed/YS10Cdaz2Kk?si=1tV2bLLnE1IUEmNN&autoplay=1&mute=1",movie_like_count:29e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2024,month:10,day:28},movie_comments:[{comment_id:432165,comment_body:"저도 한 번만 응원해주세요 죄송합니다..",comment_user_id:"test",comment_user_name:"민석-z4n"}]}]},G_Movie:{channel_id:859641,channel_name:"@지무비",channel_nav:"G_Movie",channel_banner:"https://yt3.googleusercontent.com/YZSsAoZix0DCd0figFc81fktZHrOmvpWg0Se4bspLVD4BLbZH1hsBaPmoG3hlGqlRUxgDovyqg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ytc/AIdro_nLr4j1MqKUus9uB2RADncMRaC__c2D6MKj4x4YbA4IwcU=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"영화&드라마&예능&패션&게임&전자제품&광고를 더 G리게.. 모든 걸 영화처럼..",channel_subscribers:358e4,Movies:[{movie_id:98384321,movie_title:"수갑채워놨는데 남편이 심장마비로 사망하면 벌어지는 대참사",movie_body:"영화 제럴드의게임(2017)입니다",movie_image:"https://i.ytimg.com/vi/2EahotHTVpc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3sfFbsdOHoyNxdvJ0GIg7RiJ6pw",movie_video:"https://www.youtube.com/embed/2EahotHTVpc?si=fng9erydx2hVg_bq&autoplay=1&mute=1",movie_like_count:27e4,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2019,month:3,day:2},movie_comments:[{comment_id:378765,comment_body:"이거 영상 초반만 보고 바로 넷플릭스 드가서 봤는데 진짜 긴장감 쩔고 후반부 소름 장난 아니에요 개무서워요ㅠ퓨 그리고 폰 배터리 없는 설정이라 시리 부르는것두 안댐",comment_user_id:"test",comment_user_name:"cuddly0"}]},{movie_id:989831,movie_title:"'수임료 1000원'인데 '승률 100%'인 전설의 변호사가 주차장 갑질남 차 박살내버린 뒤, 참교육하는 역대 최고로 신박한 방법 ㅋㅋㅋ 《천원짜리 변호사》",movie_body:"드라마 ≪천원짜리 변호사≫, 1화~2화의 내용입니다. 채널 SBS에서 매주 금,토 밤 10시 방영됩니다.",movie_image:"https://i.ytimg.com/vi/yyiox2536C0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnAyfSOlqWJGhw2eRAMWp2MzsOAg",movie_video:"https://www.youtube.com/embed/yyiox2536C0?si=PALxhnFQEsTxm9hi&autoplay=1&mute=1",movie_like_count:11e4,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:9,day:25},movie_comments:[{comment_id:892585,comment_body:"어느 순간부터 남궁민하면 그냥 믿고 보게 됨 작품선정이나 특유의 딕션이랑 연기력이 드라마쪽에선 ㄹㅇ독보적 존재",comment_user_id:"test",comment_user_name:"standstill8152"}]},{movie_id:907429,movie_title:"제목 따위 필요 없는, 내 인생 최고의 드라마 《이태원클라쓰》",movie_body:"드라마, 《이태원클라쓰》 1-4화 소개 영상입니다.",movie_image:"https://i.ytimg.com/vi/P0ikE6tFbas/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1V4ANcuPOrDvWuF3pf0LuZCZ-Ow",movie_video:"https://www.youtube.com/embed/P0ikE6tFbas?si=Dn3uKDy6SES_t03P&autoplay=1&mute=1",movie_like_count:91e3,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:4,day:9},movie_comments:[{comment_id:985234,comment_body:"이태원클라쓰 보고 진짜 아직도 피가 끓는 기분... 열심히 살고자 하는 의지를 계속 일깨워주는 드라마,  진짜 명작이다",comment_user_id:"test",comment_user_name:"vvs7530"}]},{movie_id:215464,movie_title:"퍼스트 클래스탔다고 승무원한테 온갖 진상 다 부리던 손님 옆에 하필 절대 불의를 못참는 자산 3000억 천재 CEO 조승우가 타고 있으면 벌어지는 일 ㅠㅠ",movie_body:"드라마 ≪시지프스≫, 1화~4화의 내용입니다.",movie_image:"https://i.ytimg.com/vi/RIj9IdZvg6M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDtlVjX8Kfc1lGqlbJXNvGZ1T4Og",movie_video:"https://www.youtube.com/embed/RIj9IdZvg6M?si=hPbUY9_bnY3y4BRX&autoplay=1&mute=1",movie_like_count:78e3,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:9,day:24},movie_comments:[{comment_id:214644,comment_body:"세상에서 가장 무서운게'후회' 인데 후회 하기 싫으면 열심히 잘해해주 잘챙겨주면 되는데 현실에서도 그러지를 못함",comment_user_id:"test",comment_user_name:"꼬꼬마-v4h"}]},{movie_id:4809634,movie_title:"하필이면..힘숨찐도 아닌 초숨찐을 건드린 일진들의 최후ㅠ",movie_body:"OCN 오리지널 드라마, ‘경이로운 소문’ 1-2화 내용입니다. 매주 토,일 밤 10시 30분 채널 OCN에서 방영합니다.",movie_image:"https://i.ytimg.com/vi/eJ5U0tuDxKk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzeIKOpDmmjPBJKv_wSjR_CpMd5Q",movie_video:"https://www.youtube.com/embed/eJ5U0tuDxKk?si=Qj0oDz0Rl92Lp-0V&autoplay=1&mute=1",movie_like_count:1e5,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2020,month:12,day:5},movie_comments:[{comment_id:865412,comment_body:"유준상 배우는 나이가 몇인데자기관리 진짜 엄청나신거같음....비쥬얼이나 체력이나 액션씬 같은거보면 30대라고 해도 믿으실듯;;; 레전드",comment_user_id:"test",comment_user_name:"__Uz"}]}]},radiohead:{channel_id:56165156,channel_name:"라디오헤드",channel_nav:"radiohead",channel_banner:"https://yt3.googleusercontent.com/7YJU_BnlYUPHGI1abV2FfjhgizivH6UZpPaMjAdjKWbuy_o_nspoIOhoa82lDA_c38Jfubve=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/iGWTxAf6tokq9e2cVapQL6D1qgbtD-oFkVLqcUGF24WjUwX68qCm-iN4mMqqJEz_4eRSi-EyEQ=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"radiohead.com",channel_subscribers:404e4,Movies:[{movie_id:556151,movie_title:"라디오헤드 - Fake Plastic Trees",movie_body:"‘Fake Plastic Trees’ is taken from ‘The Bends’ out on XL Recordings. Director: Jake Scott Producer: Ellen JacobsonCinematography: Salvatore Totino Production",movie_image:"https://i.ytimg.com/vi/EzcJhJt_vQY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXCg5MA8=&rs=AOn4CLDSe2Z3YNdtCuBYnvoVdDAZTymL3g",movie_video:"https://www.youtube.com/embed/EzcJhJt_vQY?autoplay=1&mute=1",movie_like_count:49e4,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2015,month:1,day:23},movie_comments:[{comment_id:136551,comment_body:`"why did you take so long to buy groceries?" 
                                            me:`,comment_user_id:"miguelrodriguez-pineroriva6713",comment_user_name:"산미구엘"}]},{movie_id:556152,movie_title:"이쯤에서 돌아보는 그들의 발자취 라디오헤드 이야기",movie_body:"‘Lotus Flower’ is taken from ‘The King of Limbs’ out on XL Recordings Director of Photograph: Nick Wood",movie_image:"https://i.ytimg.com/vi/f2fjTisiUDI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/f2fjTisiUDI?autoplay=1&mute=1",movie_like_count:44e4,movie_category:"music",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2023,month:10,day:6},movie_comments:[{comment_id:136552,comment_body:"Hi, my name's Thom Yorke and I'll be your freestyle dance teacher",comment_user_id:"pulllak",comment_user_name:"돼지와함께춤을"}]},{movie_id:556153,movie_title:"라디오헤드 - creep",movie_body:"라디오헤드는 Creep 말고도 좋은 노래가 많다 #라디오헤드 56165156#creep #okcomputer #오아시스 #톰요크 #thesmile #더스마일",movie_image:"https://i.ytimg.com/vi/XFkzRNyygfk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCkbazk73In3wUcMpWdiSNFURE3A",movie_video:"https://www.youtube.com/embed/bthufxQepAk?autoplay=1&mute=1",movie_like_count:57e4,movie_category:"music",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2008,month:10,day:15},movie_comments:[{comment_id:136553,comment_body:"Nice dream을 너무 좋아해요 신비한곡인듯",comment_user_id:"Pre_lude",comment_user_name:"레코너"}]},{movie_id:556154,movie_title:"라디오헤드 라이브 - 2 + 2 = 5",movie_body:"'2 + 2 = 5' is taken from 'Hail to the Thief' out on XL Recordings.",movie_image:"https://i.ytimg.com/vi/11oAXmVdEyQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgKAAvABigIMCAAQARgTICsofzAP&rs=AOn4CLB6QlCofl8Rnkm-zzX0EjscePbHdA",movie_video:"https://www.youtube.com/embed/c6GO7c-zO6E?autoplay=1&mute=1",movie_like_count:9400,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2015,month:1,day:23},movie_comments:[{comment_id:136554,comment_body:"2 + 2 = 140p",comment_user_id:"andreylucass",comment_user_name:"앤디"}]},{movie_id:556155,movie_title:"라디오헤드 라이브 - No Surprises",movie_body:"‘No Surprises’ is taken from ‘OK Computer’ out on XL Recordings",movie_image:"https://i.ytimg.com/vi/u5CVsCnxyXg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSo72rG7nC88JI6Ez5InNKRYqhMw",movie_video:"https://www.youtube.com/embed/a8Yh0mNTBuo?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2021,month:11,day:1},movie_comments:[{comment_id:136555,comment_body:`Thom: drowns
                                           His face: (            -_-             )`,comment_user_id:"mushfiqahmad1783",comment_user_name:"독버섯"}]}]},ultraTasteDiary:{channel_id:6546654,channel_name:"최강록 Ultra Taste Diary",channel_nav:"ultraTasteDiary",channel_banner:"https://yt3.googleusercontent.com/nVk2CWFo_sMLATnX4kvDakcFI7vuAsBKGBEh-V9MzclW1j8HfYKIz-Xowx_UuOdM2bZn2DJ7aw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/vIc-veEiaMx4XJLekuHNtgzM4DiBTXXhHIGRB9JxZHw_WA_tS3qb16Z-FmaYKpjQtU8YUcmK=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"귀찮음과 시간이 만들어내는 예술 비즈니스 : utdcook@gmail.com",channel_subscribers:57e4,Movies:[{movie_id:794541,movie_title:"제모옥은.......고추장…닭날개 쪼림으로 하겠습니다 근데 이제.. 바지를 겨뜨린",movie_body:"8년 이상 지난 이 음식을 기억하고 계신분들께 감사를 드립니다. 진심은... 그냥 그 때 그 순간에 남은 영상으로 떠돌아 다니는게 이 음식을 돋보이게 하는거라 생각했어요. ",movie_image:"https://i.ytimg.com/vi/JdD3OqGRB_Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnkmCZnxlQxrPCSb-PLyPLDsbt8Q",movie_video:"https://www.youtube.com/embed/JdD3OqGRB_Y?autoplay=1&mute=1",movie_like_count:3500,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2021,month:4,day:30},movie_comments:[{comment_id:348941,comment_body:"미소메시드뭐꼬뭐시라카노'도 꼭 만들어주세요ㅠㅠ",comment_user_id:"Mushirakano",comment_user_name:"김소희"}]},{movie_id:794542,movie_title:"최강록이 최강록을 시작하는 이야기",movie_body:"첫편부터 길고 긴 요리영상을 올리기가 좀 그래서 만든 영상. 근데 이제 주성치 팬심을 곁들인.. 휴...",movie_image:"https://i.ytimg.com/vi/ysLaz2YJ2c4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFw5rw__2RGVNup0KFKjUqJXoSqw",movie_video:"https://www.youtube.com/embed/ysLaz2YJ2c4?autoplay=1&mute=1",movie_like_count:9600,movie_category:"talk",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2020,month:9,day:1},movie_comments:[{comment_id:348942,comment_body:"와...조렸다....",comment_user_id:"acdc",comment_user_name:"암참차"}]},{movie_id:794543,movie_title:"Miso Mashed... Mushirakano(미소 매쉬드 포테이토)",movie_body:"#최강록 #UltraTasteDiary #미소 김소희님 헌정",movie_image:"https://i.ytimg.com/vi/A0t58bjx00s/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/A0t58bjx00s?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2021,month:6,day:25},movie_comments:[{comment_id:348943,comment_body:"결국 흑백요리사에도 등장해버린 미소 매쉬드 머시라카노..",comment_user_id:"strongB",comment_user_name:"강한비-s9x"}]},{movie_id:794544,movie_title:"MBTI 무료 성격유형 검사",movie_body:"#최강록 #UTD #mbti",movie_image:"https://i.ytimg.com/vi/deq3zoLUc_U/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/deq3zoLUc_U?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"comedy",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2022,month:9,day:2},movie_comments:[{comment_id:348944,comment_body:"아니 내향형 100프로 처음 봄 ㅋㅋㅋㅋ",comment_user_id:"kimsbl6n",comment_user_name:"김상부-l6n"}]},{movie_id:794545,movie_title:"지금 만나러 갑니다 / 수빙고(하이브리드 아이스)",movie_body:"#최강록 #강레오 #수빙고 #하이브리드아이스 오랜만에 그 분을 만나러 갔습니다.",movie_image:"https://i.ytimg.com/vi/6o4vGCjZ3WI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/6o4vGCjZ3WI?autoplay=1&mute=1",movie_like_count:7600,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2023,month:2,day:3},movie_comments:[{comment_id:348945,comment_body:"강레오..셰프님의 그 쏘는 눈빛 거기에 마주치면 한..6개월씩 늙어요...",comment_user_id:"peterparker",comment_user_name:"파커-u7d"}]}]},suede:{channel_id:96745102,channel_name:"스웨이드",channel_nav:"suede",channel_banner:"https://yt3.googleusercontent.com/iZpbhbFb_GrB1aO_JWSE8-j1tTAP19jxAngN_VSTADyuuqW7UmfMhA_zScznzBTboMN2c8vqV5M=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/UX1nAVaOk_ARxZXQu5uknwTP2JJ3C54dcSWKNjTwoB4Ft8B2v1v4nIVeJCuYWHAYDFd6AxtVjw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"Welcome to the official Suede Youtube channel, the Hub of all of your favourite Suede video's featuring Brett Anderson - such as, 'Beautiful Ones' 'Trash' and 'Animal Nitrate'. Subscribe for stay updates on the latest Music Videos, Interviews and Live footage from Suede.",channel_subscribers:157e3,Movies:[{movie_id:738161,movie_title:"스웨이드 - Life Is Golden (Official Video)",movie_body:"Official video for Life Is Golden, from Suede's 8th studio album 'The Blue Hour'. Filmed on location in Pripyat, Ukraine, near Chernobyl. Directed by Mike Christie.",movie_image:"https://i.ytimg.com/vi/pEJfWrfN15k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6L984WNodmomrig1dFx2SVi2Q7g",movie_video:"https://www.youtube.com/embed/Q9wbVPmUlOw?autoplay=1&mute=1",movie_like_count:17e3,movie_category:"music",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2018,month:8,day:16},movie_comments:[{comment_id:317891,comment_body:"This song is golden",comment_user_id:"hessehessen4334",comment_user_name:"헤헤"}]},{movie_id:738162,movie_title:"스웨이드 - 'She Still Leads Me On' (Live Streamed from Cirque Royal, Brussels)",movie_body:"Suede debut their brand new single ‘She Still Leads Me On’, streaming live on stage at a headline performance in Belgium at Brussels’ Cirque Royal.",movie_image:"https://i.ytimg.com/vi/tfDgLym55Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKy3j6bVSAWAffzphdYR0V3MhkmA",movie_video:"https://www.youtube.com/embed/VvDxY0kInV0?autoplay=1&mute=1",movie_like_count:21e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2022,month:5,day:25},movie_comments:[{comment_id:317892,comment_body:"Great lyrics Brett has definitely wrote this song for his mother who past away when he was just a young man",comment_user_id:"sunstar9709",comment_user_name:"해달별"}]},{movie_id:738163,movie_title:"브렛 앤더슨 93년 스웨덴 인터뷰 (Brett Anderson Interview Sweden, 1993 Kor sub cc)",movie_body:"오랜만에 올리네요 펄프 커먼피플은 계속 번역중인데 제가 게을러서 시간이 꽤 걸릴듯",movie_image:"https://i.ytimg.com/vi/PX6L65xgOzY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5mtz-M8xCkrnltxlGQccViokC-g",movie_video:"https://www.youtube.com/embed/939_uYyZa1A?autoplay=1&mute=1",movie_like_count:1018,movie_category:"interview",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2016,month:12,day:21},movie_comments:[{comment_id:317893,comment_body:"He's so Handsome",comment_user_id:"yorkellic",comment_user_name:"톰요크"}]},{movie_id:738164,movie_title:"스웨이드, 사상 첫 단독 내한 공연 개최🇬🇧 [#위클리팝]",movie_body:"브릿팝의 주역, 스웨이드(Suede)가 8년 만에 한국을 찾습니다. '녹슬지 않는 록 스피릿' 관록이 느껴지는 베테랑 밴드 스웨이드의 내한 공연에 대한 자세한 내용은 영상을 통해 만나보세요🤟",movie_image:"https://i.ytimg.com/vi/Z4J2D9ZNpvI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/Z4J2D9ZNpvI?autoplay=1&mute=1",movie_like_count:3e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2024,month:6,day:13},movie_comments:[{comment_id:317894,comment_body:"저에겐 최고의 공연 이었습니다. 한국에 또 온다는 약속 기다리고 있겠습니다.",comment_user_id:"fajinchan",comment_user_name:"김길환"}]},{movie_id:738165,movie_title:"스웨이드 - she 내한 공연",movie_body:"Suede 스웨이드 - She @ LIVE 라이브 @2013 INCHEON PENTAPORT ROCK FESTIVAl",movie_image:"https://i.ytimg.com/vi/twoO3xYRsz0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVNcO5wAtTuHBa3jadFUsnlzK57A",movie_video:"https://www.youtube.com/embed/V3T6NDalQeU?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2010,month:6,day:16},movie_comments:[{comment_id:317895,comment_body:"우와",comment_user_id:"hippieswave",comment_user_name:"히피"}]}]},woowakgood:{channel_id:41846541,channel_name:"우왁굳",channel_nav:"woowakgood",channel_banner:"https://yt3.googleusercontent.com/eYI-CDr4AXjjnzZv8ERzW-P2u1AQPNNCNDRLxBw1mlIwEjA-BIKUHpdd6dFDD7pjGF7urPZTrA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/vhOEy7Ode6Y8ZN3noHKZua0LMt2n2Z7xfEyfWmzTXwQ6oq59BFyTXnN9AcnksHTYAM1YCzdY=s160-c-k-c0x00ffffff-no-rj",channel_introduction:`아프리카 TV에서 게임방송을 하고 있는 "우왁굳"의 유튜브 채널입니다.
                                   방송에서 재밌었던 장면들, 편집영상, 녹화영상등이 올라옵니다.
                                   영상 업로드 시간 : 매일 새벽중
                                   우왁굳 카카오톡 친구추가 하기 : @우왁굳`,channel_subscribers:172e4,Movies:[{movie_id:314511,movie_title:"편의점 알바하면 찾아오는 진상들이 한 번에 다 온다면? ㅋㅋㅋ",movie_body:"편의점 알바하면 찾아오는 진상들이 한 번에 다 온다면? ㅋㅋㅋ - VR챗 상황극",movie_image:"https://i1.ytimg.com/vi/BxzPDQzux40/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/BxzPDQzux40?autoplay=1&mute=1",movie_like_count:12e4,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2020,month:9,day:5},movie_comments:[{comment_id:635171,comment_body:"진짜 소름끼치는 것은 담배 사는 할아버지는 고시원과 관련이 없는 그냥 진상이라는 것이다.",comment_user_id:"rice_thief",comment_user_name:"밥도둑"}]},{movie_id:314512,movie_title:"폭력적인 중국인에게 대처하는 법 : 중국인에게 타이완 넘버원을 외쳐보았다",movie_body:"TAIWAN #1 (conan exiles)",movie_image:"https://i1.ytimg.com/vi/Hkg6Vu2Um5k/sddefault.jpg",movie_video:"https://www.youtube.com/embed/Hkg6Vu2Um5k?autoplay=1&mute=1",movie_like_count:4e4,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2017,month:2,day:2},movie_comments:[{comment_id:635172,comment_body:"이영상 해외에서도 유명함.. 특히 대만에서 엽기영상으로 인기많음",comment_user_id:"dongjoo87",comment_user_name:"윤동주"}]},{movie_id:314513,movie_title:"몸으로 말해요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",movie_body:"※ E-Mail : ecvhao@naver.com",movie_image:"https://i.ytimg.com/vi/wKyoYzpDEEM/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/wKyoYzpDEEM?autoplay=1&mute=1",movie_like_count:35e3,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2022,month:12,day:12},movie_comments:[{comment_id:635173,comment_body:"이장면들 왜케 웃기고 귀엽짘ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",comment_user_id:"koreatownrunner",comment_user_name:"하니"}]},{movie_id:314514,movie_title:"시청자가 사는 역대급 쓰레기 방",movie_body:"0:00 컨텐츠 설명 0:17 미션놀이 시작 5:56 썸네일 7:26 미션놀이",movie_image:"https://i.ytimg.com/vi/cKi4E_nXQNE/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/cKi4E_nXQNE?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"challenge",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2024,month:10,day:24},movie_comments:[{comment_id:635174,comment_body:"TMI) 방 주인분 결국 업체불러서 정상화 완료함",comment_user_id:"videotape",comment_user_name:"영상업로드용계정"}]},{movie_id:314515,movie_title:"아빠가 되었습니다",movie_body:"우왁굳 핫클립 광고 문의 : marketing@parable-asia.com",movie_image:"https://i.ytimg.com/vi/O7TeGzypNrg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIahTkMd7jwYIMT5Q8lXtVbJqIIA",movie_video:"https://www.youtube.com/embed/O7TeGzypNrg?autoplay=1&mute=1",movie_like_count:32e3,movie_category:"comedy",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2023,month:4,day:14},movie_comments:[{comment_id:635175,comment_body:'이 형 아직 애기 나오기 전에는 막 본인 애기한테 "초면","그 분", "외계인", 이랬었는데 막상 그 분 태어나시니깐 누구보다 딸 바보 된 거 개귀여움 ㅋㅋㅋㅋㅋ',comment_user_id:"wakmulwon",comment_user_name:"침팬치"}]}]},goodboykris:{channel_id:81372931,channel_name:"소련 여자",channel_nav:"goodboykris",channel_banner:"https://yt3.googleusercontent.com/FB29DrRZRBPzHTH5kb8yEanNdWrQaF76lnobBdlqUTNC-1mkg-btjUeJn6KNq6l0OIS0JB6fAw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ytc/AIdro_nUV1fdUmCnAo_V1c9CPjrJjGJOyy8e6ASnbhDOI9G-vsw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"개소리에도 철학이 있다, 대한민국 1타 개소리 예술가 국뽕이란 무엇인가? 대한민국 1타 국뽕 기술자 크리스 교수입니다.",channel_subscribers:105e4,Movies:[{movie_id:119751,movie_title:"던질까 말까 100시간 춤 추기 (세계 최초)",movie_body:"대한민국 유튜브 algorithm 매우 이해 힘든 것 이상한 유행의 Origin : 트니트니 '던질까 말까'",movie_image:"https://i1.ytimg.com/vi/JsISM29qgC0/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/JsISM29qgC0?autoplay=1&mute=1",movie_like_count:91e3,movie_category:"comedy",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2019,month:12,day:19},movie_comments:[{comment_id:319481,comment_body:"한 달에 만원씩 바쳐서 광고 지웠더니 그런 나를 위해 또 광고를 넣어줬구나",comment_user_id:"undertale",comment_user_name:"전래동화"}]},{movie_id:119752,movie_title:"한국인들은 백인이 길바닥에 똥을 싸도 칭찬해줄까?",movie_body:"#똥 #한국 #백인 🇰🇷🤔👩🏼💩👏🏻?",movie_image:"https://i1.ytimg.com/vi/WG5aX86i3rs/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/WG5aX86i3rs?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"challenge",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2021,month:3,day:19},movie_comments:[{comment_id:319482,comment_body:"근데 진짜 소련여자 영상들 보다보면 현실들을 제대로 비판하는 풍자 영상들을 많이 올리는거 같다. 맨날 영상들 보면 웃긴 대사들이나 편집들이 많아서 남들이 보기엔 생각없이 찍은거 같아보여도 다 무언가 찝어서 비판하는게 있음.",comment_user_id:"namenickr9p",comment_user_name:"네임닉-r9p"}]},{movie_id:119753,movie_title:"러시아어 왕초보 강의(‘스파시바’ 절대 쓰지 마세요)",movie_body:"특별 출연하신 일리야 선생님 고맙습니다. 🎁 댓글에 메일 주소 적으면 ‘가벼운 러시아어 학습지 스타트팩'을 선물세트 자동 응모! 🎁",movie_image:"https://i.ytimg.com/vi_webp/UtljPnhHPJY/maxresdefault.webp",movie_video:"https://www.youtube.com/embed/UtljPnhHPJY?autoplay=1&mute=1",movie_like_count:14e3,movie_category:"challenge",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2021,month:6,day:11},movie_comments:[{comment_id:319483,comment_body:"설마했는데 진짜 한국인인 척 하는 스파이였을 줄이야... 가짜 소련여자인 스파이 크리스를 몰아내고 원조 소련여자인 샌즈님을 구해냅시다 여러분",comment_user_id:"tiramisu",comment_user_name:"티라미수"}]},{movie_id:119754,movie_title:"죄송해서 거짓말합니다.",movie_body:"#나는행복합니다 #죄송합니다 #해명합니다 ㅈㅅㅈㅅ~ ㅋ",movie_image:"https://i.ytimg.com/vi_webp/v7i62-5BHeQ/maxresdefault.webp",movie_video:"https://www.youtube.com/embed/v7i62-5BHeQ?autoplay=1&mute=1",movie_like_count:53e3,movie_category:"comedy",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2020,month:8,day:21},movie_comments:[{comment_id:319484,comment_body:"사과는 꼭 죄송한일이 있어야 해야하는걸까? 죄송해야 사과할 수 있다는 고정관념에 우리 스스로를 가둔건 아닐까",comment_user_id:"nohandle",comment_user_name:"핸들좀없애라"}]},{movie_id:119755,movie_title:"북한 러시아 동맹 해명합니다.",movie_body:"#지드래곤 #북한 #러시아 북한이랑 친해라는데 어쩌라고요~ #북한, #러시아, #지드래곤, #해명, #북한풍선, #스타게이저, #버튜버",movie_image:"https://i.ytimg.com/vi/SL_sPoo5OuU/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/SL_sPoo5OuU?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"talk",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2024,month:7,day:12},movie_comments:[{comment_id:319484,comment_body:"와 북한에서 몰래보고있는 오물풍선 알바생인데;; ㅠㅠ 구독합니다 힘내세요!",comment_user_id:"protect1108",comment_user_name:"알바생"}]}]},workman:{channel_id:452454,channel_name:"워크맨-Workman",channel_nav:"workman",channel_banner:"https://yt3.googleusercontent.com/YSzNgAfL46tAd9qCJDyBKxIXVzfJUzq4ic8dY9LbGCsnGEuZ3S6QZkcY6zPZG_GIuuNaa9f1=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ihi8LdmSNfcp96-gaHBE1Av3-PLotF9rOhUxTy_pY-CeHYCAkDzE1ktxfe4gbhtYR0CIYjUPba0=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"🐜🐜워크맨 인력소 강남점🐜🐜",channel_subscribers:415e4,Movies:[{movie_id:165984,movie_title:"카페 경력 짬바가 뭔지 보여주..“주문 안 받고요, 키오스크에서 알아서 해주세요!!”😵‍💫 | 팀홀튼 카페 알바 | 대니구 | 워크맨2",movie_body:"Job것들아~~~~~~,,, 인력소장이다,,, ",movie_image:"https://i.ytimg.com/vi/9jl-oxM0FxU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwsc8KHtBS9lVn_A-u-KtT-Gy3OQ",movie_video:"https://www.youtube.com/embed/7eJajoei--0?si=3bJI0gFwv_BWGsfg&autoplay=1&mute=1",movie_like_count:15e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:10,day:18},movie_comments:[{comment_id:88437539,comment_body:"진짜  5년 했으면 직업 찾기 힘들건디.. 정말 대단하네요..오늘도 재밌게 봅니다",comment_user_id:"test",comment_user_name:"욀량"}]},{movie_id:165977,movie_title:"[SUB] 뽀시래기들 놀아주다 멘탈 뿌시래기(?) 됨😇 | 키즈카페 | 월간워크맨 범규 | 투모로우바이투게더 | TXT | 워크맨2",movie_body:"오늘은,, 성규,, 아니고 범규가,,,키즈카페 알바를 하고 왔다,,,~ ",movie_image:"https://i.ytimg.com/vi/SOSJ-q-7CRA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyKHdIb-ChBXO1W-wEdDxipdeXmw",movie_video:"https://www.youtube.com/embed/SOSJ-q-7CRA?si=4rN5-WJcFSEz_bpX&autoplay=1&mute=1",movie_like_count:16e4,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2023,month:11,day:3},movie_comments:[{comment_id:451089,comment_body:"아니 애기들 가르치는 입장으로 범규 너무 적성에 맞는 듯 너무 잘 가르침",comment_user_id:"test",comment_user_name:"힛콩"}]},{movie_id:194984,movie_title:"반갑습니다! 올리브영입니다~☺️ 도움 필요하셔도 말씀하지마ㅅ... | 올리브영 알바 | 브링그린 | 지예은 | 워크맨2",movie_body:"오늘은,,,울 잡것덜이,,,많이 추천해준,,,올리브영 다녀왔다,,,~~",movie_image:"https://i.ytimg.com/vi/G_W9pXqnheY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBDxsU7nAsTGRYTlbF0KMQytaNUw",movie_video:"https://www.youtube.com/embed/G_W9pXqnheY?si=_oA8nuXGuR4qASvk&autoplay=1&mute=1",movie_like_count:18e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:9,day:13},movie_comments:[{comment_id:456879,comment_body:"예으니 넘 귀엽다ㅠ",comment_user_id:"test",comment_user_name:"happy123"}]},{movie_id:160084,movie_title:'"고객님 잠시 후에 뵙겠습니다,,,😄" 정신 차려보니 전국일주? 철도 승무원 알바 | 해랑열차 | 승무원 | 아일릿(ILLIT) | 워크맨2',movie_body:"오늘은 해랑열차 알바하고 왔다,,,정말 너무 좋더라고~,,나중에 꼭 가족들과 한번 가보는 거 추천혀~,,,~~!!",movie_image:"https://i.ytimg.com/vi/NCma_qnVu-4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-nlwkuC3KKAdWCGnd99CpNnJj9A",movie_video:"https://www.youtube.com/embed/NCma_qnVu-4?si=9d3llszhrs_lJVXJ&autoplay=1&mute=1",movie_like_count:16e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:10,day:11},movie_comments:[{comment_id:414519,comment_body:"아 보는 내내 너무 행복해서 입꼬리가 내려가질 않네…",comment_user_id:"test",comment_user_name:"xrospo"}]},{movie_id:160978,movie_title:"앞으로 안경 벗는 거 유죄! 살짝 얹기만 했을 뿐인데 갓경 등극😍 | 안경점 알바 | 브리즘 | 보이넥스트도어 이한X운학 | 워크맨2",movie_body:"오늘은,,, 안경점 알바하고 왔다,,,우리 보이넥스트도어,,, 친구들 안경을 얹기만 했는데도 참 멋지더라고,,,,",movie_image:"https://i.ytimg.com/vi/g64d5UPLjFo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDfkOXiFasHnykeFYkAc5ynRSPnGQ",movie_video:"https://www.youtube.com/embed/g64d5UPLjFo?si=QZL7J5gq56Hg-Z4-&autoplay=1&mute=1",movie_like_count:32e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:8,day:30},movie_comments:[{comment_id:410309,comment_body:"아육대 안 나오고 워크맨 찍었다 들었는데 그게 드디어 나왔구만ㅋㅋ",comment_user_id:"test",comment_user_name:"riririr"}]}]},sbs_dali:{channel_id:775460,channel_name:"달리 [SBS DALI] - SBS 공식 교양 채널",channel_nav:"sbs_dali",channel_banner:"https://yt3.googleusercontent.com/sMSp7eIV0sktjQTpjflRyf3q4zDAC1A8UJhz_c9oSdWJGMdg88k6TlxOCS63GyK4WpToo7oX=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/M7XGfxQMxEFeZ5GnnlEEbeuEzeCLs-CGYAtFQQ_I-IsPLttj8P01QJMxXFGKwpuL4eNgiA9F0g=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"SBS 교양 공식채널 달리입니다.",channel_subscribers:108e4,Movies:[{movie_id:100846,movie_title:"[꼬꼬무 148회 요약] 강남역에서 사라지는 청년들, 그들이 빨려들어간 다단계라는 지옥 | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #다단계 #SMK #이광남",movie_image:"https://i.ytimg.com/vi/PQ6eDFLyn4E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD69dTl0SYq9Ls62Q2BZoUAuUKc2A",movie_video:"https://www.youtube.com/embed/PQ6eDFLyn4E?si=vKLy81wGZPPt6WSl&autoplay=1&mute=1",movie_like_count:4700,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:466679,comment_body:"사회초년생 친구들 이 영상 보시고 전형적인 다단계 구조 알아두시면 좋겠네요.",comment_user_id:"test",comment_user_name:"denden"}]},{movie_id:161117,movie_title:"[꼬꼬무 147회 요약] 131명의 사상자, 충분히 막을 수 있었다. 2003 태풍 매미 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송) ",movie_body:"#꼬꼬무 #꼬꼬무요약 #태풍매미",movie_image:"https://i.ytimg.com/vi/aPY7KS0K5NY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBWilX4clPSTGFQS9Ujzmqf5F2ipg",movie_video:"https://www.youtube.com/embed/aPY7KS0K5NY?si=WhJVFOK9_bMl5RK0&autoplay=1&mute=1",movie_like_count:8100,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:18},movie_comments:[{comment_id:93285329,comment_body:"지금까지 살면서 매미가 태풍 중에서 젤 기억에 남음",comment_user_id:"test",comment_user_name:"뎅뎅"}]},{movie_id:194747,movie_title:"[꼬꼬무 146회 요약] 100조 원과 함께 사라진 비트코인의 창시자 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #비트코인 #사토시나카모토",movie_image:"https://i.ytimg.com/vi/42VIq8EW0wU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDEWCHAwhORr80kArOeGZEOP3C6yQ",movie_video:"https://www.youtube.com/embed/42VIq8EW0wU?si=kRlQrubOZqxSEt5t&autoplay=1&mute=1",movie_like_count:6400,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:11},movie_comments:[{comment_id:452229,comment_body:"비트코인은 우리 생활에 자연스럽게 스며들 것입니다.",comment_user_id:"test",comment_user_name:"동동"}]},{movie_id:870084,movie_title:"[꼬꼬무 145회 요약] “형사님, 제가 계급장 한 번 달아 드릴까요?” 허세 속 숨겨진 연쇄살인의 단서 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #의정부연쇄살인사건 #뻥식이사건",movie_image:"https://i.ytimg.com/vi/GAqV_mkqJhU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvDUfeX9mMWvQfdJk9XGe7r0m9SA",movie_video:"https://www.youtube.com/embed/GAqV_mkqJhU?si=Qt2iuH4iTnUd5m8r&autoplay=1&mute=1",movie_like_count:7200,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:4},movie_comments:[{comment_id:784235,comment_body:"꼬꼬무가 끝날 일은 없겟다 ... 하도 많은 사건이 나와서...",comment_user_id:"test",comment_user_name:"popo"}]},{movie_id:333578,movie_title:"[꼬꼬무 144회 요약] 조국의 운명을 짊어진 3인의 특사가 헤이그로 향한 그 날 | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #헤이그특사",movie_image:"https://i.ytimg.com/vi/cS4M7OBprBc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA97bKQ8M3gFRUSRmOXTKtt29xCZg",movie_video:"https://www.youtube.com/embed/cS4M7OBprBc?si=LRN60vPzFQhAIsnE&autoplay=1&mute=1",movie_like_count:2700,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:9,day:27},movie_comments:[{comment_id:958923,comment_body:"헤이그특사라는게 교과서 한줄정도로만기억에남아있는데 이야기로 들으니까 너무 좋네요",comment_user_id:"test",comment_user_name:"lucky12"}]}]},ootbstudio:{channel_id:125424,channel_name:"ootb STUDIO",channel_nav:"ootbstudio",channel_banner:"https://yt3.googleusercontent.com/7K01zQCZpweun9YtKU0wNM9rBotE8TSUE1r3WLMX98AhZ9YeCBApWyHvQbr75uytLWsCrY-uPQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/K74Og8dqtK72UXy-ySJsXMZuMV4M71dCNQmIIOcPkzYHfdHvsUndE31Lbm1znSNVWcffJ_RP=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"Out of the Box! ootb STUDIO (오오티비 스튜디오) 틀을 깨는 시각으로 누구도 경험해보지 못한 신선한 콘텐츠를 만듭니다",channel_subscribers:162e4,Movies:[{movie_id:104216,movie_title:"포항공대 vs 카이스트 맞짱 뜬 썰 푼다 [포항공대 컴퓨터공학과] | 전과자 ep.70 [EN]",movie_body:"코딩 알못 전과자의 코딩 도전🧑‍💻오늘은 포항공대 컴퓨터공학과 다녀옴!",movie_image:"https://i.ytimg.com/vi/-k_Q9Svr7j4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCJu_IUJQ6Y34U-K2FQ8mPHvjrnoA",movie_video:"https://www.youtube.com/embed/-k_Q9Svr7j4?si=BFFkS3KTBcvHcFAY&autoplay=1&mute=1",movie_like_count:19e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:24},movie_comments:[{comment_id:400059,comment_body:"볶음밥 먹는 걸로 코딩 비유한 거 완전 이해 잘 된당",comment_user_id:"test",comment_user_name:"may"}]},{movie_id:162399,movie_title:"동심파괴하는 역대급 동화 발표 [단국대 문예창작과] | 전과자 ep.69 [EN] ",movie_body:"동화 작가 데뷔한 전과자?!✏️ 오늘은 단국대학교 문예창작과 다녀옴!",movie_image:"https://i.ytimg.com/vi/D-xlw07rGEM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAzWam2-YPnpvnms1gKLAQsZCAGcw",movie_video:"https://www.youtube.com/embed/D-xlw07rGEM?si=BgTdxkt5gWSxRT3c&autoplay=1&mute=1",movie_like_count:23e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:17},movie_comments:[{comment_id:488829,comment_body:"동화 진심 천재아님...? 20분도 안되는 시간이 저렇게 구성했다고??????",comment_user_id:"test",comment_user_name:"hannna"}]},{movie_id:177207,movie_title:"식빵언니 김연경이 새내기인 학과 [한국방송통신대 생활체육지도과] | 전과자 ep.68 [EN/ID]",movie_body:"김연경 선수 실물 영접하고 왔습니다..🤭",movie_image:"https://i.ytimg.com/vi/X8COuUKz2K0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHQ38xhEbHipBtK_zQafMJCXmj3w",movie_video:"https://www.youtube.com/embed/X8COuUKz2K0?si=6xtzyaJ1CfJw2szG&autoplay=1&mute=1",movie_like_count:26e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:10},movie_comments:[{comment_id:306429,comment_body:"배움엔 끝이 없다고, 정말 40대 50대. 90대가 되어서도 하려고 하는 거 보니 뭉클합니다",comment_user_id:"test",comment_user_name:"소소한소"}]},{movie_id:8974284,movie_title:"미안하면 씨X 하는 학과 [한국외대 아랍어과] | 전과자 ep.67 [EN]",movie_body:"아랍어 1도 모르는 전과자가 한국외대 아랍어과 다녀옴!",movie_image:"https://i.ytimg.com/vi/Gzs1qNmTcYY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCfIfUsPcPqH92WaJxO8pEXZwPjPQ",movie_video:"https://www.youtube.com/embed/Gzs1qNmTcYY?si=vx02u1zbiOhO0baG&autoplay=1&mute=1",movie_like_count:32e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:3},movie_comments:[{comment_id:781122,comment_body:"아랍어 학생 멘토한 림입니다~이런 멋진 기회를 주셔서 감사합니다! 정말 즐거운 시간이었어요~♡♡",comment_user_id:"test",comment_user_name:"reem"}]},{movie_id:333888,movie_title:"연기 괜찮아요? 많이 놀랐죠? [경희대 연극영화학과] | 전과자 ep.66 [EN]",movie_body:"드디어 전과자도 2학기 개강 완!🏫 오늘은 경희대학교 연극영화학과 다녀옴!",movie_image:"https://i.ytimg.com/vi/sQknHM8unPM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBP-qcUyVxiAqEg2GimMuzqnjDGUg",movie_video:"https://www.youtube.com/embed/sQknHM8unPM?si=Brwk4oDoDT4E0v_h&autoplay=1&mute=1",movie_like_count:33e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:9,day:26},movie_comments:[{comment_id:121114,comment_body:"ㅋㅋㅋㅋㅋㅋㅋ겁나 웃기네 진짜",comment_user_id:"test",comment_user_name:"child22"}]}]},SBSKPOP:{channel_id:2250024,channel_name:"SBSKPOP X INKIGAYO",channel_nav:"SBSKPOP",channel_banner:"https://yt3.googleusercontent.com/oOQHsiZrRMv3jYKY4M7kJsqcBjlXfwf1Wq1X96qsUuYWxY5TdFiNHUewkl8XWmVDvL9uMucUoOc=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/Uxpz5J0EcsFJRbqh4Ip7i3TTNsxTh5jVUxfZmV1DTrCQM_ihfzBGMmkfSRGWoFK9M0anhIie=s160-c-k-c0x00ffffff-no-rj",channel_introduction:" 기존의  Inkigayo인기가요 채널의 확장 버전으로 새롭게 태어난 SBS 공식 디지털 KPOP채널입니다.",channel_subscribers:815e4,Movies:[{movie_id:541236,movie_title:"aespa (에스파) – Whiplash @인기가요 inkigayo 20241027",movie_body:"에스파 - Whiplash #aespa #Whiplash",movie_image:"https://i.ytimg.com/vi/p3kJOuNnkJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw9oGNHqbtjkBlRI0hQU85fe9LCg",movie_video:"https://www.youtube.com/embed/p3kJOuNnkJg?si=fF2ky_2of1fliP6G&autoplay=1&mute=1",movie_like_count:55e3,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:415059,comment_body:"닝닝 너무 예쁘다",comment_user_id:"test",comment_user_name:"fnksif"}]},{movie_id:148399,movie_title:"ITZY (있지) – GOLD @인기가요 inkigayo 20241027",movie_body:"있지 - GOLD #ITZY #GOLD",movie_image:"https://i.ytimg.com/vi/2WNIGv1r5d4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDihD8KUyOdVjxXngpjYFB6KJ4Npg",movie_video:"https://www.youtube.com/embed/2WNIGv1r5d4?si=IU51kHkPu9mZle0s&autoplay=1&mute=1",movie_like_count:12e3,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:487829,comment_body:"So beautiul LIA",comment_user_id:"test",comment_user_name:"hpa012"}]},{movie_id:100680,movie_title:"Billlie (빌리) – Remembrance Candy (기억사탕) @인기가요 inkigayo 20241027",movie_body:"빌리 - 기억사탕 #Billlie #Remembrance_Candy",movie_image:"https://i.ytimg.com/vi/zyzRypp6dbQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9daqmRFj7s35yyO_4dbbctPcyGA",movie_video:"https://www.youtube.com/embed/zyzRypp6dbQ?si=zu-9x2jdhW_w3NDP&autoplay=1&mute=1",movie_like_count:1200,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:302153,comment_body:"이번 컴백무대중에 가장 헤메코 좋다.",comment_user_id:"test",comment_user_name:"딴딴"}]},{movie_id:897124,movie_title:"[단독샷캠4K] 아이브 After LIKE 단독샷 별도녹화│IVE ONE TAKE STAGE @SBS Inkigayo 220828",movie_body:"[단독샷캠4K] 아이브 After LIKE 단독샷 별도녹화│IVE ONE TAKE STAGE @SBS Inkigayo 220828",movie_image:"https://i.ytimg.com/vi/fdzojloPlFA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArt4d22OllBmd1Gfxovdb_lcNuKg",movie_video:"https://www.youtube.com/embed/fdzojloPlFA?si=nQwDPXBvL1pmSExl&autoplay=1&mute=1",movie_like_count:21e4,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2022,month:9,day:1},movie_comments:[{comment_id:125452,comment_body:"I love her voice at 2:25",comment_user_id:"test",comment_user_name:"sias"}]},{movie_id:49386439,movie_title:"[단독샷캠4K] 뉴진스 Ditto 단독샷 별도녹화│NewJeans ONE TAKE STAGE @SBS Inkigayo 230115",movie_body:"[단독샷캠4K] 뉴진스 Ditto 단독샷 별도녹화│NewJeans ONE TAKE STAGE @SBS Inkigayo 230115",movie_image:"https://i.ytimg.com/vi/jUNz-uTF--E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO7YFNY9buWMwRPfy6vHYJkTkWow",movie_video:"https://www.youtube.com/embed/jUNz-uTF--E?si=UDI5QuZOMAiPeC17&autoplay=1&mute=1",movie_like_count:21e4,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2023,month:1,day:19},movie_comments:[{comment_id:184314,comment_body:"뉴진스 곡중에 ditto 진짜 최고야...😢❤",comment_user_id:"test",comment_user_name:"celds22"}]}]},SBSANIMAL:{channel_id:2215544,channel_name:"SBS TV동물농장x애니멀봐 공식 유튜브 채널입니다!",channel_nav:"SBSANIMAL",channel_banner:"https://yt3.googleusercontent.com/jJb9nRaO1XSX7cCyUCWlddsO4VEMAfmKkpUfCKsWSco9VOi0QdUvFeTjUSpt669Xs85CIWp9lw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_profile.jpg?raw=true",channel_introduction:"SBS 동물농장 x 애니멀봐 공식 유튜브 채널입니다! ",channel_subscribers:492e4,Movies:[{movie_id:512236,movie_title:"해외여행 후 빈대걱정 개코가 다 잡아드림 ㅣDo Not Worry About Bedbug After A Trip Anymore",movie_body:"개코개코했지만 빈대냄새까지 찾아내는 검역탐지견들....☆",movie_image:"https://i.ytimg.com/vi/HOGfNYten8c/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCtbjNXF9VEL1nMlZoqVwPY9QJQUA",movie_video:"https://www.youtube.com/embed/HOGfNYten8c?si=k6-fUSnQNNAnXJ4v&autoplay=1&mute=1",movie_like_count:1500,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:10,day:28},movie_comments:[{comment_id:9318122,comment_body:"너무너무 기엽고 눈빛이 영특해욥",comment_user_id:"test",comment_user_name:"bunnie"}]},{movie_id:990159,movie_title:"나는 태어난 지 30일 된 먼치킨 새끼다 [애니멀봐 나새끼 26호]",movie_body:"[나는 새끼다] 26호 새끼 - 먼치킨 - 우리는 태어난 지 30일 된 먼치킨 고양이를 밀착취재 해보았다.",movie_image:"https://i.ytimg.com/vi/E8V02ArInjY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2x9N9Np1o4crItzsX1yA2dek_HQ",movie_video:"https://www.youtube.com/embed/E8V02ArInjY?si=-gZ7rSEfkdHYv1lH&autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2023,month:5,day:16},movie_comments:[{comment_id:464659,comment_body:"심장뿌셔짐",comment_user_id:"test",comment_user_name:"stsgj"}]},{movie_id:100470,movie_title:"쪼꼬미 동물병원 시즌3 1화 (내원환자 : 드워프햄스터 콩콩님)ㅣAnimal Hospital for Tiny Animals 3 Ep 1 (Patient: Dwarf Hamster)",movie_body:"동물농장 전설의 수의사와 함께하는 –쪼꼬미 동물병원- 시즌3 첫번째 내원환자 드워프 햄스터 콩콩이님 들어오실게요",movie_image:"https://i.ytimg.com/vi/d-PV-ScWtB8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDCai2kKXqHqIpaCi-if-Il1SpFQg",movie_video:"https://www.youtube.com/embed/d-PV-ScWtB8?si=fXQ_wjNh_U0VDBRm&autoplay=1&mute=1",movie_like_count:6800,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2023,month:3,day:8},movie_comments:[{comment_id:32948239,comment_body:"햄찌 진짜 순하다 귀여워ㅋㅋㅋ",comment_user_id:"test",comment_user_name:"얌얌"}]},{movie_id:815444,movie_title:"서울 한복판에서 너굴맨 만난 썰 푼다;;ㅣHow I Met Raccoon Man In City Center",movie_body:"서울 한복판에서 산책하다 너굴맨을 만났다?",movie_image:"https://i.ytimg.com/vi/Tkw5NKyCpeU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaQmyb0JA9lGuJehEKCea8snH1Qg",movie_video:"https://www.youtube.com/embed/Tkw5NKyCpeU?si=uG5O3Z2WJPAqR9CJ&autoplay=1&mute=1",movie_like_count:500,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:10,day:7},movie_comments:[{comment_id:106652,comment_body:"썸넬이 너무 귀여워요 ㅠㅠ",comment_user_id:"test",comment_user_name:"bobo"}]},{movie_id:399998,movie_title:"푸바오의 조상님 그때 그 시절 판다들(장꾸력 만렙ㅋㅋ)ㅣFu Bao’s Ancestors. Pandas Back In The Day",movie_body:"판다 덕후 주목! 우유라떼 마시며 들려주는 그때 그 시절 핫한 판다들의 이야기..⭐️ ",movie_image:"https://i.ytimg.com/vi/MlKFeqBIZJs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArU-vHn5ofD3InGBgEJcZGvgZB4w",movie_video:"https://www.youtube.com/embed/MlKFeqBIZJs?si=2twwrn3h4FCtmZRB&autoplay=1&mute=1",movie_like_count:2100,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:9,day:14},movie_comments:[{comment_id:912932,comment_body:"인공수정 너무 잔인하고, 판다가 너무 불쌍하네요..",comment_user_id:"test",comment_user_name:"simsim"}]}]},jindoEre:{channel_id:798311,channel_name:"진돗개 이레",channel_nav:"jindoEre",channel_banner:"https://yt3.googleusercontent.com/byG9tgzrpnpoM2Zu20_WMqX4QjqYX-bxbhPCoJZhFYkPqOtqW1IJPD0FwtoAQMl3dVwlw7ULlg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/UFRAIo6roqbUtvBQuoZ-euDsf5xGnlrUIpKdkLgTk5wzEYPu4ekHgNMjlkC7sGdLp_th0ZB9KUw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"바다건너 돌아와보니, 이레네🐾❤️",channel_subscribers:84700,Movies:[{movie_id:78494,movie_title:"임시보호하는 아기 고양이들, 집이 7번이나 바뀐 이유",movie_body:"#캣타워 #아기고양이 #고양이 #고양이 #아기고양이 #캣타워",movie_image:"https://i.ytimg.com/vi/1qrH9H8GN_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRLzIkZj4Cw7c4wvmFDc_Z3wUKDg",movie_video:"https://www.youtube.com/embed/1qrH9H8GN_s?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:78619,comment_body:"이정도면 임시보호가 아니라 지극히 사심채우기 같은뎈ㅋㅋㄱㅋㄱㅋ",comment_user_id:"test",comment_user_name:"정성희"}]},{movie_id:15965,movie_title:"새끼 고양이와 병원 간 진돗개가 보인 반응",movie_body:" #진돗개 #동물병원 #새끼고양이 #진돗개 #새끼고양이 #동물병원",movie_image:"https://i.ytimg.com/vi/v-vg-2TqDf8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7es255msmnPG80ROxdJmbsCANww",movie_video:"https://www.youtube.com/embed/v-vg-2TqDf8?autoplay=1&mute=1",movie_like_count:2700,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:10,day:9},movie_comments:[{comment_id:11568,comment_body:"엄빠보다 더 초조한 이레보호자💕",comment_user_id:"test",comment_user_name:"god123"}]},{movie_id:156234,movie_title:"강아지 빗질을 못해주면 이렇게 됩니다..😶‍🌫️ #진돗개털갈이",movie_body:"산 운동장에 다녀왔다가 돌아온 날이에요-!⛰️ 아이들도 저희도 일정이 워낙 빠듯해서 일주일 정도 빗질을 못했던 상황인데다 여름에서 가을로 넘어가는 시기여서 털갈이 성수기였던 게 한몫한 영상인 점 꼭 기억해주세요!ㅎ",movie_image:"https://i.ytimg.com/vi/UxT7nY1p7V0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTLwAAkXE8jWXlTvQ-CsKmBJVHyg",movie_video:"https://www.youtube.com/embed/UxT7nY1p7V0?autoplay=1&mute=1",movie_like_count:2500,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:1,day:19},movie_comments:[{comment_id:654935,comment_body:"어쩜 아이들이 서로 싸우지도 않으면서 각자 편안한 자세로 꿈나라로 고고~~",comment_user_id:"test",comment_user_name:"반야심"}]},{movie_id:357416,movie_title:"유기견이 스스로 우리집에 들어왔다.🐕‍🦺 구조자를 직접 고른 버려진 개의 이야기",movie_body:"곱슬이는 빠삐용의 ’삐용‘이란 이름을 갖게 되었어요. 그리곤 심장사상충 치료를 시작했었답니다.",movie_image:"https://i.ytimg.com/vi/hbxzkJ62zVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAwiqLlDqC2LaXQMB35ZKzVdj4aQ",movie_video:"https://www.youtube.com/embed/hbxzkJ62zVI?autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2023,month:12,day:26},movie_comments:[{comment_id:152722,comment_body:"삐용이 입양하신 이웃분도 너무 멋지셔요. ",comment_user_id:"test",comment_user_name:"애옹이사랑"}]},{movie_id:220045,movie_title:"얘들아.. 아빠 생일이라구ㅠㅋㅋㅋ (진돗개)",movie_body:"이레아빠의 생일파티는 어때보이나요?ㅠㅎ '다견가정'스럽게(?) 보낸 개아빠의 생일파티(?)...😂",movie_image:"https://i.ytimg.com/vi/nRV6SKGq3lQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD855jOPKms3gDj2S5aQdFaAejN0Q",movie_video:"https://www.youtube.com/embed/nRV6SKGq3lQ?autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2023,month:10,day:18},movie_comments:[{comment_id:448861,comment_body:"아가들 완전 귀요미들~~~ 대환장파티~~ 아빠 생일인데 아가들이 더 신났네요~ 개귀엽당",comment_user_id:"test",comment_user_name:"김지혜"}]}]},shoppingMom:{channel_id:660495,channel_name:"쇼핑맘",channel_nav:"shoppingMom",channel_banner:"https://yt3.googleusercontent.com/DTgCPAH4K8MxbMYGrLtQVum6D_1Ys3iU868mDeH_CalsqdGKL9Ou99teL7z7V8g1Y8p3-mAfZL8=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/xGX7RIjkTR3P1BMX24icwwHiJJ6WYK-BJpb5tTHMecKalm2fsGjAc2xTQA3davbeUVIFW6wR=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"⬇️⬇️⬇️영상 속 제품 링크🩷⬇️⬇️⬇️ 진지하게 살림을 합니다. 리뷰 영상에 진심을 담습니다 :)",channel_subscribers:10600,Movies:[{movie_id:6738049,movie_title:"쿠팡에서 내가 꿈꾸던 실용적인 팬트리 셋업 17가지ㅣ쿠팡에서 살 수 있는 가성비 최고의 정리 제품ㅣ주방투어ㅣ주방 꾸미기ㅣ최저가ㅣ가성비다모았다ㅣ좁은주방ㅣ앵글활용100%ㅣ설치방법",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/clvV6sG6i1Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD83S70mJQ-shHwJlR3ef4BJ3VT2w",movie_video:"https://www.youtube.com/embed/clvV6sG6i1Y?autoplay=1&mute=1",movie_like_count:544,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2023,month:9,day:21},movie_comments:[{comment_id:116101,comment_body:"좋았어! 이제 집만 넓어지면 되겠어요!!😂ㅋㅋㅋㅋㅋㅋㅋ",comment_user_id:"test",comment_user_name:"golldd_d"}]},{movie_id:167205,movie_title:"쿠팡 정리 추천템 | 살림이 행복해지는 수납 정리 아이템 | 주방정리 꿀템 | 잡동사니 정리 꿀팁 | 분리수거 방법 꿀팁",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/VD33utJraE0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE97KxtNBTDfX8fqCp1XYRAGf5Hw",movie_video:"https://www.youtube.com/embed/VD33utJraE0?autoplay=1&mute=1",movie_like_count:2500,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:3,day:9},movie_comments:[{comment_id:7046458,comment_body:"저 오늘 이사가기전에 집 정리한다고 절반 정도 집 엎었는데 너무 제 모습을 보는 것 같아요😂😂😂",comment_user_id:"test",comment_user_name:"yshans"}]},{movie_id:106478,movie_title:"리뷰 수천개씩 보는 주부가 직접 검증한 쿠팡 추천템 | 내 손으로 검증한 찐 추천템 | 품절되기전 사야템 | 삶의질 수직상승 | 재재구매 꿀템 | 청소 정리 꿀템 | 알리공구예고",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/SObd7CMcp3c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2VdiYZb211K5gz3R6nBkVEzj1sg",movie_video:"https://www.youtube.com/embed/SObd7CMcp3c?autoplay=1&mute=1",movie_like_count:376,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:5,day:25},movie_comments:[{comment_id:7945154,comment_body:"이염방지시트는 세탁시에만 넣나요? 세탁과 건조기에도 넣어도 되나요?",comment_user_id:"test",comment_user_name:"장뽕뽕"}]},{movie_id:478513,movie_title:"리뷰 몇천개씩 보는 주부가 고른 쿠팡 살림 추천템 13가지 | 요즘 SNS 난리난 바로 그 제품! | 입고후 즉시품절 | 품절대란 생활 꿀템 | 삶의질 수직상승 | 내돈내산",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/A7NzGlfUtYc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcn9tdUw1T0ZstSZCjjrxnYK9yWQ",movie_video:"https://www.youtube.com/embed/A7NzGlfUtYc?autoplay=1&mute=1",movie_like_count:2100,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:2,day:9},movie_comments:[{comment_id:516151,comment_body:"설명 꼼꼼하게, 듣기 편하게 잘하시네요~ 개인적으로 꿀템 소개영상 중 제일 보기 좋은 영상이었음",comment_user_id:"test",comment_user_name:"flying_witch6527"}]},{movie_id:1583085,movie_title:"쿠팡 품절되기 전에 구매하세요!! | 완벽한 삶의 질 상승템 | 디자인부터 기능까지 다 갖췄다 | 예쁘고 실속있는 쿠팡 살림템  | 내돈내산템",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/iaOjF9aCcK0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsemOpqXLzAgFhU4E_fEAJiQ7Rsw",movie_video:"https://www.youtube.com/embed/iaOjF9aCcK0?autoplay=1&mute=1",movie_like_count:757,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:3,day:16},movie_comments:[{comment_id:111504,comment_body:"유익한정보감사해요 거실카펫.건식욕조러그두추천해주셈",comment_user_id:"test",comment_user_name:"신나라신나라"}]}]},mamu_vlog:{channel_id:201864,channel_name:"mamu마므",channel_nav:"mamu_vlog",channel_banner:"https://yt3.googleusercontent.com/lArY9lbEFU12URnCHfvsQ8d1KaktdkJ5AbCSL0FnyRWws8GMkTBIFlWRzzQAGpyZxXFDpV9Iew=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/B9AkXHC7chFdQHNhcOhBCXObehilWrpfB_ysDi1cyvj7C9GLkkJcuBlwSMol6KpPu7Jw0LsEjoc=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"instagram | @mma_muu email | morningood9922@gmail.com",channel_subscribers:35900,Movies:[{movie_id:4506901,movie_title:"5평 방을 호텔처럼 꾸미기‧₊˚☁️ 셀프인테리어 | 타일카페트 시공✂️ | 모듈 가구 | 6단 북선반 | 책꽂이 | 미니 다육이",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/HxCRe7uDyAM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXHa2B_7ErgdIARsosiKMleOWuvw",movie_video:"https://www.youtube.com/embed/HxCRe7uDyAM?autoplay=1&mute=1",movie_like_count:21e3,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2023,month:12,day:31},movie_comments:[{comment_id:101054,comment_body:"저도 이사할때  회색 타일 카페트를 깔았는데요 퇴근하고 청소기 + 돌돌이해도 먼지가 날리고 비염이 생겼어여. 비염이 있으시면 좋았을텐데 봐도바도이뿌녀요 ㅠㅡㅠ",comment_user_id:"test",comment_user_name:"왕왕우왕"}]},{movie_id:412321,movie_title:"vlog. 일만 하는 브이로그🔥, 쇼핑몰 사장의 일상 | 피곤하지만 재밌어 | 매일 시장가다가 삼촌 써봄 | 필인더블랭크 가방 | 달라진 사무실 | 바디스크럽 추천",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/1_35QO9UVYk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWCnBcp3_BQyr5qfYReTl24QLGcg",movie_video:"https://www.youtube.com/embed/1_35QO9UVYk?autoplay=1&mute=1",movie_like_count:1600,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:8,day:19},movie_comments:[{comment_id:794861,comment_body:"하 마므님 기다리다가 기린 목 됐어요.. 목 빠지는 줄 알았어요 ♥",comment_user_id:"test",comment_user_name:"콩시크릿쥬쥬"}]},{movie_id:575156,movie_title:"vlog. 일상 브이로그, 포장지옥📦 | 용산 데이트 (브런치, 키보드 구경, 닭한마리 맛집) | 롯데백화점 라운지 5초 체험기",movie_body:"✧outer 누이어 - 리프 스웨이드 하프 자켓",movie_image:"https://i.ytimg.com/vi/cYhMT9pX4xU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhPCxa09mVABS-h_j1igycOjKY8A",movie_video:"https://www.youtube.com/embed/cYhMT9pX4xU?autoplay=1&mute=1",movie_like_count:6200,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:8940984,comment_body:"요거트에 토마토 맛나 보여요 🤍",comment_user_id:"test",comment_user_name:"나는야 분노핑"}]},{movie_id:360324,movie_title:"vlog. 일상 브이로그, 쇼핑몰 열심히 해나가기🔥 | 썸웨어버터 선물&아디다스 스페지알 언박싱 | 네일하고 혼밥과 카공 | 메디힐 당근패드로 피부 정리하기",movie_body:"메디힐 당근 수분 진정 패드",movie_image:"https://i.ytimg.com/vi/HE89T9XNew0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACaE1cGETg6z4yENTleWBsaq1opg",movie_video:"https://www.youtube.com/embed/HE89T9XNew0?autoplay=1&mute=1",movie_like_count:1600,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:8,day:19},movie_comments:[{comment_id:491304,comment_body:"실버 가방 취저에요! 아디다스 스페지알 탐나요 🤍",comment_user_id:"test",comment_user_name:"vlog8852"}]},{movie_id:242685,movie_title:"vlog. 오픈 2주차 일상 브이로그, 초보사장 냄새난다 | 구독자분께서 주신 선물 | 아디다스 신발 언박싱 | 매일 가는 동대문 시장 | 포장검수하고 촬영하기",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/WNBeisZs5xk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfkivid92jAq4QOyFIkfYDXKnY3w",movie_video:"https://www.youtube.com/embed/WNBeisZs5xk?autoplay=1&mute=1",movie_like_count:1800,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:3,day:22},movie_comments:[{comment_id:404658,comment_body:"마므님이라면 조립하는거 올릴거 같아서기다리고 있었어요 ! 영상 꾸준히 올려주셔서 감사합니당 트롤리 보면서 제 생각도 1년에 한번씩 해주세여",comment_user_id:"test",comment_user_name:"김민정하튜"}]}]},moozzi:{channel_id:904206,channel_name:"무찌",channel_nav:"moozzi",channel_banner:"https://yt3.googleusercontent.com/_c2vXh4oFCHaqxOTehNhs-WLCTuzATSHTJ5fiQDz4E4tbBFsXwliKoXo00K_Xmyt_YmpZZCPYQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/lK7Y9eC82RAXumtR3OPo2HKuHKbJ3obt-WPpAh9sxfo2oPfu55qveLKBSwHva4wRSOEOWwJcK9A=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"무쌍 뷰티의 모든 것💜 🔗@mo.ojji_",channel_subscribers:164e3,Movies:[{movie_id:760806,movie_title:"메이크업 아티스트 쌤들이 만든 제품으로 샵 퀄리티 메이크업 따라해보면?!🤔 과연 좋을까..? / 애교살 꿀템",movie_body:"오늘은 최근에 업로드 했던 릴스&쇼츠에서 가장 예쁘다고 해줬던 쿨톤메이크업 버전 들고왔지롱 ,, ✩",movie_image:"https://i.ytimg.com/vi/wwX_ObHl3pc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBqgUdn0sDe0Vr2p_nFYBEJ6Kv3g",movie_video:"https://www.youtube.com/embed/wwX_ObHl3pc?autoplay=1&mute=1",movie_like_count:711,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:9,day:22},movie_comments:[{comment_id:354605,comment_body:"얼굴이 이뻐서 다 커버되는 언니…😍",comment_user_id:"test",comment_user_name:"Woosigke"}]},{movie_id:1026381,movie_title:"추천템에 진심인;; 사람이 추천하는 쿠팡&올영 올타임 레전드 템 모음집💰(다이어트템, 여름 겨드랑이 관리템)",movie_body:"무찌픽 향수인 슈가 플로럴이 지금 #올리브영에서 할인 중이니 얼른 달려가봐 🍑",movie_image:"https://i.ytimg.com/vi/h0PMQw54tWA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvfvIMDZazcOFUyWSEaKWuOZwbKA",movie_video:"https://www.youtube.com/embed/h0PMQw54tWA?autoplay=1&mute=1",movie_like_count:1800,movie_category:"shopping",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:6,day:10},movie_comments:[{comment_id:451054,comment_body:"!!헉 카메라 두개쓰셔서 실제색상 보여주셔서 감사해욤❤무찌 정성 무쳣다!!",comment_user_id:"test",comment_user_name:"__daebbanggg"}]},{movie_id:659056,movie_title:"No 마스카라‼️ 요청 폭발한 내추럴 아이 메이크업 (진짜 10분컷)",movie_body:"영상에 나온 네이밍 레이어드 핏 쿠션 리필 기획과 색감 뽀용한 플러피 파우더 블러쉬가 할인하니 궁금하신 분들은 아래 링크에서 확인 해주세요(✿◡‿◡)",movie_image:"https://i.ytimg.com/vi/jUZlsfv6XwI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArcAArMUXvWKVjTV_xxvqdDKIAsA",movie_video:"https://www.youtube.com/embed/jUZlsfv6XwI?autoplay=1&mute=1",movie_like_count:1100,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:1,day:28},movie_comments:[{comment_id:113155,comment_body:"근데 에스쁘아 오트라떼 단종소식...ㅜㅜㅜ😢😢",comment_user_id:"test",comment_user_name:"@jyeon."}]},{movie_id:1054604,movie_title:"서핑 이렇게 재밌다고? 🌊양양으로 떠난 데이뉴 소속사 네트워킹 | 여름 휴가☀️",movie_body:"무찌에용💖 오늘은 제 소속사 데이뉴에서 1박 2일 네트워킹을 양양으로 다녀왔어요!!",movie_image:"https://i.ytimg.com/vi/rBEzFMUk1G4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1WHvPnLlJur92nREN1ZQ-KCRN1Q",movie_video:"https://www.youtube.com/embed/rBEzFMUk1G4?autoplay=1&mute=1",movie_like_count:243,movie_category:"vlog",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2023,month:7,day:22},movie_comments:[{comment_id:546515,comment_body:"헐 웅니 찐으로 웃는 거 처음 보는 것 같은데 넘짱짱 귀여운 거 아닌가여 😭😍",comment_user_id:"test",comment_user_name:"usekadns"}]},{movie_id:305135,movie_title:"무쌍이 따라해보는 카즈하,아린님 st 토끼상🐰 메이크업 (신상템 가득🔥)",movie_body:"원래 제목은 '얼굴에 토끼 1도 없는데 저도 토끼가 될 수 있나요..? ' 이였던 메이크업 영상...",movie_image:"https://i.ytimg.com/vi/hKtoxxWf5cE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9iAguipmx4W7NvR4ZXdrLkyLQjg",movie_video:"https://www.youtube.com/embed/hKtoxxWf5cE?autoplay=1&mute=1",movie_like_count:498,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2023,month:2,day:23},movie_comments:[{comment_id:4604648,comment_body:"무찌님 덕에 누드밀크티 사고 인생 메이크업 완성했습니다..❤️‍🔥 ",comment_user_id:"test",comment_user_name:"minio_oi"}]}]},Or7r2l:{channel_id:806540,channel_name:"아가리어터",channel_nav:"Or7r2l",channel_banner:"https://yt3.googleusercontent.com/LlkjnLTQEfDyOSWelXnV_4XJb-EethG3Dfc92JvZJnLlnaHufmM6QVx_y9GLyf9Qc3As9QlpngA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/pjlMeWVK6071iovFtndMKIZk3mSZ5fV8YYZJcNx0_3YmXPmr0a2oPYjv3Z8EIFbfkHc2fFRxog=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"[노말] 말이 안 되다",channel_subscribers:38e4,Movies:[{movie_id:446545,movie_title:"인팁걸 공주걸과 세부에서 살아남기",movie_body:"안녕 얘들아 나는 아가리어터야 ",movie_image:"https://i.ytimg.com/vi/JMcR6_-O92M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD41hQEZ2q94T492JrTGiBIbd3ISg",movie_video:"https://www.youtube.com/embed/JMcR6_-O92M?autoplay=1&mute=1",movie_like_count:3400,movie_category:"travel",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:10,day:21},movie_comments:[{comment_id:848484,comment_body:"가리걸 무서워도 도전 해보는 용기 너무 멋잇잔아~~ 가리업 가리업~",comment_user_id:"test",comment_user_name:"ttoiiiiii"}]},{movie_id:651654,movie_title:"인생썰 풀면서 겟레디윗미",movie_body:"(최대 혜택가) 25,000원에 5G 무제한 놓치지 마세요😘 ",movie_image:"https://i.ytimg.com/vi/ohi235S5-yU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAySptXPFI04GhWZ9tqsJHsIdneXw",movie_video:"https://www.youtube.com/embed/ohi235S5-yU?autoplay=1&mute=1",movie_like_count:3900,movie_category:"makeup",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:10,day:16},movie_comments:[{comment_id:198315,comment_body:"아니 썸넬 미쳤냐고요 깜이가 놀이;;; 미모베리 미가 쳤어요;;;",comment_user_id:"test",comment_user_name:"내인생이거든"}]},{movie_id:440845,movie_title:"혼자 급발진으로 떠난 대만여행",movie_body:"🌎호텔스컴바인 대만 타이베이 최.저.가. 기획전🌎 ",movie_image:"https://i.ytimg.com/vi/qf42eT5OIPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLA5mZrnz7iaaJi7nNK3DOz7z2Bw",movie_video:"https://www.youtube.com/embed/qf42eT5OIPs?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"travel",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:6,day:6},movie_comments:[{comment_id:8751516,comment_body:"언니 피부관리 루틴 당장 공개해조요 제발",comment_user_id:"test",comment_user_name:"rlarladd"}]},{movie_id:684156,movie_title:"먹고 마시고 깔깔대다가 아침이야..",movie_body:"💚시카지우개패드 단품 9,900원💚 가성비가 걍 미치셨어요",movie_image:"https://i.ytimg.com/vi/5BKkxdp8NqU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbJJdL1emlgUB3HjvFzdV2zpCWcg",movie_video:"https://www.youtube.com/embed/5BKkxdp8NqU?autoplay=1&mute=1",movie_like_count:2500,movie_category:"vlog",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:2,day:16},movie_comments:[{comment_id:110002,comment_body:"빨리 보고 싶어서 사회적 체면 포기하고 버스에서 웃참쇼 미쳐버려~~",comment_user_id:"test",comment_user_name:"Moall_al"}]},{movie_id:200235,movie_title:"퇴사하고 에버랜드 가기",movie_body:"👄인스타 놀러오세요👄",movie_image:"https://i.ytimg.com/vi/OTNFiUeq7u0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-k1Px3ZJYHZmrs3Ss2XXsAhkWMA",movie_video:"https://www.youtube.com/embed/OTNFiUeq7u0?autoplay=1&mute=1",movie_like_count:3e3,movie_category:"vlog",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2023,month:3,day:22},movie_comments:[{comment_id:3304558,comment_body:"환장의 나라 에버랜드에 오신걸 환영합니다. 팬입니다.",comment_user_id:"test",comment_user_name:"모르는지idontknowji"}]}]}},Ww={Channel:JSON.parse(localStorage.getItem("YoutubeChannel"))||$w,allMovies:JSON.parse(localStorage.getItem("YoutubeAllMovies"))||[]},Zp=Mi({name:"channelSlice",initialState:Ww,reducers:{ChangeChannelInfo(e,t){localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewChannel(e,t){const{user_id:n,user_name:r,user_email:i}=t.payload,o=i.split("@")[0],s={channel_id:n,channel_name:r,channel_banner:"https://via.placeholder.com/1280x200",channel_image:"https://via.placeholder.com/160x160",channel_introduction:`안녕하세요 ${r} 채널 입니다.`,channel_subscribers:0,channel_nav:o,Movies:[]};e.Channel[o]=s,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewMovies(e,t){const n={movie_id:Math.floor(Math.random()*999999),...t.payload};e.Channel[t.payload.movie_channel].Movies.push(n),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},DelMovies(e,t){const{channel_name:n,movie_id:r}=t.payload,i=e.Channel[n];i.Movies=i.Movies.filter(o=>!r.includes(o.movie_id)),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewMoviesComment(e,t){const{movie_id:n,movie_channel:r,comment_body:i,comment_user_id:o,comment_user_name:s}=t.payload,l={comment_id:Math.floor(Math.random()*99999),comment_body:i,comment_user_id:o,comment_user_name:s};e.Channel[r].Movies.find(u=>u.movie_id===n).movie_comments.push(l),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},DelMoviesComment(e,t){const{movie_id:n,movie_channel:r,comment_id:i}=t.payload,s=e.Channel[r].Movies.find(l=>l.movie_id===n);s&&(s.movie_comments=s.movie_comments.filter(l=>l.comment_id!==i)),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},IsMovieChangeLike(e,t){const{channel_name:n,type:r,movie_id:i}=t.payload,s=e.Channel[n].Movies.find(l=>l.movie_id===i);r==="plus"?s.movie_like_count+=1:s.movie_like_count-=1,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},IsMovieChangeSubscriber(e,t){const{channel_name:n,type:r}=t.payload,i=e.Channel[n];r==="plus"?i.channel_subscribers+=1:i.channel_subscribers-=1,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},getAllMovies(e){e.allMovies=[],Object.keys(e.Channel).forEach(t=>{e.allMovies.push(...e.Channel[t].Movies)}),localStorage.setItem("YoutubeAllMovies",JSON.stringify(e.allMovies))}}}),{ChangeChannelInfo:f2,AddNewChannel:Vw,AddNewMovies:Hw,DelMovies:Kw,AddNewMoviesComment:Gw,DelMoviesComment:Xw,IsMovieChangeLike:La,getAllMovies:mt,IsMovieChangeSubscriber:eg}=Zp.actions,Yw=Zp.reducer,Qw={isSubscribers:!1,thisChannel:null},tg=Mi({name:"subscribersSlice",initialState:Qw,reducers:{isSubscribersTrue(e,t){e.isSubscribers=!0,e.thisChannel=t.payload},isSubscribersFalse(e){e.isSubscribers=!1,e.thisChannel=null}}}),{isSubscribersTrue:Jw,isSubscribersFalse:Ia}=tg.actions,Zw=tg.reducer,eb=()=>{const e=te(),{isLoginUser:t}=P(i=>i.auth),{thisChannel:n}=P(i=>i.subscribers),r=Wn(()=>e(Ia()));if(n)return a.jsxs(qw,{id:"subscript-popup",className:"popup-box",children:[a.jsxs("p",{className:"popup-title",children:[n==null?void 0:n.channel_name," 구독을 취소하시겠습니까?"]}),a.jsxs("div",{className:"popup-btns",ref:r,children:[a.jsx("button",{className:"popup-close",onClick:()=>e(Ia()),children:"취소"}),a.jsx("button",{className:"popup-subscript-end",onClick:i=>{i.stopPropagation(),e(Ia()),e(vt(`${n.channel_name} 채널 구독 취소`)),e(Aw({user_id:t.user_id,channel_id:n==null?void 0:n.channel_id})),e(eg({channel_name:n==null?void 0:n.channel_nav,type:"minus"}))},children:"구독 취소"})]})]})},ng=()=>{const{isSideMenu:e}=P(i=>i.header),{isSubscribers:t}=P(i=>i.subscribers),{isSavePop:n}=P(i=>i.savepop),r=te();return C.useEffect(()=>{t&&document.querySelector("#subscript-popup").showModal()},[t]),C.useEffect(()=>{const i=setTimeout(()=>{r(Nw())},1e3);return()=>clearTimeout(i)},[n]),a.jsxs(a.Fragment,{children:[a.jsx(eb,{}),n&&a.jsx(Uw,{left:e?"28rem":"4rem"})]})},tb=()=>{const e=$();return a.jsxs("ul",{className:"menu-list",children:[a.jsxs("li",{className:"btn-item",onClick:()=>e("/"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Home_menu.svg",alt:"Home"}),a.jsx("p",{className:"btn-name",children:"홈"})]}),a.jsxs("li",{className:"btn-item",onClick:()=>e("/feed/Playlist"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Play_list.svg",alt:"Playlist"}),a.jsx("p",{className:"btn-name",children:"재생목록"})]}),a.jsxs("li",{className:"btn-item",onClick:()=>e("/subscription"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Subscription_menu.svg",alt:"Subscription"}),a.jsx("p",{className:"btn-name",children:"구독"})]}),a.jsxs("li",{className:"btn-item",onClick:()=>e("/mypage"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/Account.svg",alt:"myPage"}),a.jsx("p",{className:"btn-name",children:"내페이지"})]})]})},nb=()=>a.jsx(s1,{className:"mobile",children:a.jsx(tb,{})}),rb=()=>{const e=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return a.jsx("div",{className:"scroll_up",onClick:e,children:a.jsx("button",{className:"scroll_up_btn",children:a.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUZJREFUaEPtllEOwjAMQ7ObwcmAk8HNgEibNI2usZdkaBB+JtE29bNDxiAH/wwH1y8F8O0EK4FKwOnAX7bQ02madZwyldo83lwARgSUqdTmX0nA6uFd17cksKtA67ICMBy6juvT0zKUXs9MQEVfRkW39zMFIgtgLn5yNQUiA6AlPg0iGqAnPgUiEgARHw4RBcCID4WIANgiPgzCC7AmXifONELnYpff6ZprOnkAeuJ1bfm3W++yzuz2IkOEtABUIHIWBtmSACpgDSAUggVAxavIHkAYBANwEpF7I9u1H6EF0IM4i8gD6SMGoHVhb4IgAGzNDyYWYH6hNf5QAKZmCIAW0XayImYA0JphAEh7sgBIzQJgXKoEELe2TCGkLvIiQ+t09xVAx576DSA9ltlCyP3uPQXgttBZoBJwGug+Xgm4LXQWOHwCL424RTGF/pxQAAAAAElFTkSuQmCC",alt:""})})})},ib=()=>{const{isSideMenu:e}=P(n=>n.header),{pathname:t}=Oi();return C.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),a.jsxs(n1,{children:[a.jsx(Jp,{}),a.jsxs("div",{className:"content-wrap",children:[e&&a.jsx(Fw,{}),a.jsx(tp,{}),a.jsx(rb,{})]}),a.jsx(ng,{}),a.jsx(nb,{})]})},ob=[{id:350982352,name:"대시보드",type:"Dashboard",nav:"/dashboard",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAPpJREFUaEPtWEEOwjAM834GL0O8DH4GFAkJlWpRwDHr5F56WOfFTpy2WzD5WCaPHybw7ww6A1vOwAHACUCbM+MK4Px4r83vg433xF4rocsXwb8CbsEfOwJsvJDALSP7YG0vDhvPBKIEOQOdQkO/rpmYXbNsPHvAHogUsAeSCvXLd9dGpz9KyA9zJX37x7L8eF25kbFjl29kJjBSQHmhkZuY/UF5G2XXbElXU/5WMYGsiacvIbaJ5SXE7hpyAuwPsvHkRwkTyHYhtmJsPJdQtE/s7k7sEsqamL2RsfFCE7OPEmy8kEBk0k08V94HSgibQImsCVBnICFWydI7IJtYMWeTFLgAAAAASUVORK5CYII="},{id:51294102,name:"동영상 업로드",type:"VideoUpload",nav:"/videoupload",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAU1JREFUaEPtWNsNwjAMdDeDyYDJYDPoSbXUVnm5jpsaOV9I1I7vzo8kEzlfk/P4KQCMVjAUCAWUDEQKKQlUm/+tAjcieiz04Lf1es0bPI9sklPge8RZB5s7EX0kflIAwASzL/HV41sEDxDNKwVgFPsI2gSAdaHvCSvth+zY1EqLAlcB8J4VQkPZxNMTgITJdY7X7Lgjcjd0BQBBg/n1cgMg1w1dACi18ssDQCstTf/LA6gNMTUA7aDbdz6pvwAgZWyfEqFAdigsf9QmY67IetmZF7E1AFxuSsd5dRFbA0CArgcZM+z6KMEqp0C4SKF1mp52nK51D23tsBpmClgDgP+mKyVf3Y4GpLUTXWFTH48EIH7gSgFIXeO0rLbai9iH09oTxhkPXPwSB/ZFr3I1AK2sDf1OLNnQaBObB4DRioQCoYCSgUghJYFqc/cK/ABFEVUxJ47WSgAAAABJRU5ErkJggg=="},{id:2092345023,name:"콘텐츠",type:"Content",nav:"/content",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAATlJREFUaEPtmGEOwjAIhdnN9GTqyfRmWpJtce0qhQm0Sn+ZtA6+91rWMcHgYxo8fwgAbwelDpwA4DInj7+1xy0FuO4FkQI8tTOuPP8MAI/3OQkAKrGob82BySPEOiQAXupj0ioAEhE4zuWCbeJJgn98ICezxrUBkAv1tw5IwbvZQgEw72W3KmTmABWImq9VR5X/7b0HqEDU/PAAR68auajsKkQpzJ1vfOFW72cBwLI0XbWH30LDH+IAyBQwP8ThQDiQKcAto9wXF7W+mzNAJSo6O5aXuQBo/aChLmv31GCy6IfWHCO/yHoGKJq8kjOA6qMLHqPIVwKwJG7V5F260aj+pjONiRwB8HCgiBkA3jb8pAPWdV7S4q92AHBieADrOv91B6zrvBqAd4Fpin+IvimC8qIAUBaYfPwLQhdrMcO6YW4AAAAASUVORK5CYII="},{id:2305932021,name:"댓글",type:"Comment",nav:"/comment",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAS5JREFUaEPtWdEOgjAMLH+mX6b+GX+mNnEGRkfadaRdcnsykY273u0GZaHJxzI5fgKBaAVbCtyI6PEDx7+jx+sL4CmBaBF4RyNu3P9OROv2P4kAMy3Vz8aDwTOJ/5AIZK0+g+4iEJ1UdUF3eDQKgIBzI0EBWCirhUbHrfZQHZZCIFBZCwqUgpzmrnND9kzHOYBzoMc3mzmXWag3Rq2KgoA2n7VOgQLWV0prxbRKaK+7bA9oAXivAwFYyOkhWKi2UHTnzvVGFg3+0OTVNrZKtzq6U33AqyHArCObvaUbzTh2nWkOBw0BKUR4IXFBZ+KYp/cQaH5sMN99wAQrgVTgLRZKY5laNI0C6apueZxODf7MQmkto7EQn7biJ80BoTF8iehHZTchEHCX0LnA9Ap8AFRvXTEkWgnRAAAAAElFTkSuQmCC"}],sb=()=>a.jsx("ul",{className:"studiomenu-list",children:ob.map(e=>a.jsx(ji,{...e},e.id))}),ab=({setEdit:e})=>{const{Channel:t}=P(i=>i.channel),{isLoginUser:n}=P(i=>i.auth),r=Object.values(t).find(i=>i.channel_id===Number(n.user_id));return a.jsxs(Ep,{children:[r&&a.jsxs("div",{className:"channel",children:[a.jsxs("div",{className:"channel-img-wrap",onClick:()=>e(!0),children:[a.jsx("img",{src:r.channel_image,alt:r.channel_name}),a.jsx("div",{className:"edit-img",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/12f918aeb4b87634ed4832e8b8f7679b31e3e53a/Icon/edit.svg",alt:"edit"})})]}),a.jsxs("div",{className:"channel-name",children:[a.jsx("p",{className:"my-channel",children:"내 채널"}),a.jsx("p",{className:"my-channel-name",children:r.channel_name})]})]}),a.jsx(sb,{})]})},lb=T.ul`
    max-height: 24rem;
    .subscribers {
        font-size: 1.4rem;
        color: #666;
    }
    .subscribers-count {
        font-size: 4rem;
    }
`,cb=T.ul`
    max-height: 46rem;
`,ub=T.li`
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
`,db=T.ul`
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
`,mb=T.div`
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
`,fb=T.div`
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
`,hb=T.div`
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
`,pb=T.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        border-radius: 2rem;
        width: 70%;
        min-height: 50rem;
        background-color: #fff;
        input {
            display: block;
            margin-bottom: 1rem;
            width: 100%;
            box-sizing: border-box;
        }
        input[type='text'] {
            height: 4rem;
            padding: 1rem;
        }
        .btn-wrap {
            display: flex;
            button {
                &:nth-child(1) {
                    margin-right: 1rem;
                }
            }
        }
    }
`,Z=T.button`
    background-color: #eeeeee;
    border-radius: 2rem;
    border: none;
    padding: 1.2rem 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #e0e0e0;
    }
    @media ${D.mobile} {
        /* width: 100%; */
        padding: 1.5rem 2rem;
        font-size: 100%;
    }
`,gb=({setEdit:e})=>{const{User_ID:t}=_t(),{Channel:n}=P(c=>c.channel);P(c=>c.auth),$(),te();const r=Object.values(n).find(c=>c.channel_id===Number(t)),[i,o]=C.useState({channel_name:r.channel_name,channel_banner:r.channel_banner,channel_image:r.channel_image,channel_introduction:r.channel_introduction}),s=c=>{const{name:u,value:d}=c.target;o({...i,[u]:d})},l=c=>{c.preventDefault()};if(r)return a.jsx(pb,{children:a.jsxs("form",{className:"inner",onSubmit:l,children:[a.jsxs("p",{children:[a.jsx("label",{htmlFor:"channel_name",children:"채널명"}),a.jsx("input",{type:"text",name:"channel_name",id:"channel_name",value:i.channel_name,onChange:s})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"channel_introduction",children:"채널 설명"}),a.jsx("input",{type:"text",name:"channel_introduction",id:"channel_introduction",value:i.channel_introduction,onChange:s})]}),a.jsxs("p",{children:[a.jsx("input",{type:"file",name:"channel_banner",id:"channel_banner"}),a.jsx("img",{src:i.channel_banner,alt:"channel_banner"})]}),a.jsxs("p",{children:[a.jsx("input",{type:"file",name:"channel_image",id:"channel_image"}),a.jsx("img",{src:i.channel_image,alt:"channel_image"})]}),a.jsxs("p",{className:"btn-wrap",children:[a.jsx(Z,{type:"submit",children:"업로드"}),a.jsx(Z,{onClick:()=>e(!1),children:"취소"})]})]})})},vb=()=>{const{isSideMenu:e}=P(o=>o.header),{isAuth:t}=P(o=>o.auth),[n,r]=C.useState(!1),i=$();if(C.useEffect(()=>{t||i("/login")},[]),t)return a.jsxs(r1,{children:[a.jsx(Jp,{}),a.jsxs("div",{className:"content-wrap",children:[e&&a.jsx(ab,{setEdit:r}),a.jsx(tp,{})]}),a.jsx(ng,{}),n&&a.jsx(gb,{setEdit:r})]})},ls=()=>a.jsx(i1,{children:a.jsx("div",{className:"spinner","aria-label":"spinner-icon",children:a.jsx("div",{className:"spinner-circle"})})}),_b=()=>{const e=$();return C.useEffect(()=>{setTimeout(()=>{e("/")},3e3)},[]),a.jsxs(o1,{children:[a.jsx("p",{className:"not",children:"잘못된 접근 입니다."}),a.jsx(ls,{})]})},rg=({comment:e,thisChannel:t})=>{const n=t.Movies.find(s=>s.movie_comments.find(l=>l.comment_id===e.comment_id)),r=$(),i=["var(--youtube-red)","skyblue","green","orange","pink"],o=i[Math.floor(Math.random()*i.length)];return a.jsxs(ub,{className:"comment-item",onClick:()=>r(`/watch/${n.movie_id}`),userColor:o,children:[a.jsxs("div",{className:"comment-text-wrap",children:[a.jsxs("div",{className:"user",children:[a.jsx("span",{className:"user-profile",children:e.comment_user_name.charAt(0)}),a.jsxs("span",{className:"comment_user_name",children:["@",e.comment_user_name]})]}),a.jsx("p",{className:"comment_body",children:e.comment_body})]}),a.jsx("div",{className:"comment-img-wrap",children:a.jsx("img",{src:n.movie_image,alt:"Movie-image"})}),a.jsx("div",{className:"comment_title-wrap",children:n.movie_title})]})},yb=()=>{const{User_ID:e}=_t(),{Channel:t}=P(s=>s.channel),{isAuth:n}=P(s=>s.auth),r=Object.values(t).find(s=>s.channel_id===Number(e)),i=r.Movies.flatMap(s=>s.movie_comments),o=$();return C.useEffect(()=>{n||o("/")},[n]),a.jsx(mb,{children:a.jsxs("div",{className:"inner",children:[a.jsx("h2",{className:"studio-title",children:"채널 댓글"}),a.jsx("div",{className:"comment-nav-bar",children:a.jsx("p",{className:"comment-tab",children:"댓글"})}),a.jsx("ul",{className:"comment-list",children:i.map(s=>a.jsx(rg,{comment:s,thisChannel:r},s.comment_id))})]})})},wb=T.li`
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
    @media ${D.mobile} {
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
                    font-size: 2.6rem;
                }
                .mobile {
                    width: 100%;
                    display: flex;
                    color: #666;
                    font-size: 2rem;
                    .mobile_movie_like_count {
                        display: block;
                        margin-right: 1rem;
                        position: relative;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
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
                        /* 11/15 김혜림 부분 수정 */
                        max-width: 25rem;

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
`,bb=[{id:76165159843,falseName:"나중에 볼 동영상 저장",trueName:"나중에 볼 동영상 삭제",type:"Later_Watch",img:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/later_on.svg"},{id:23165165165,falseName:"재생목록 저장",trueName:"재생목록 삭제",type:"Playlist",img:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/save.svg.svg"},{id:86651890151,falseName:"오프라인 저장",trueName:"오프라인 동영상 삭제",type:"Download_List",SaveType:!1,falseImg:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Download.svg",trueImg:"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg"}],xb=({save:e,movie:t})=>{const{type:n,img:r,falseName:i,trueName:o,falseImg:s,trueImg:l}=e,{isLoginUser:c,isAuth:u}=P(y=>y.auth),{isSavePop:d}=P(y=>y.savepop),m=te(),g=$(),[_,v]=C.useState(!1),w=y=>{y.preventDefault(),u||g("/login"),_?(m(ri({user_id:c.user_id,type:n,movie:t})),m(vt(o))):(m(lu({user_id:c.user_id,type:n,movie:t})),m(vt(i)))};return C.useEffect(()=>{var y;(y=c[n])!=null&&y.find(p=>p.movie_id===t.movie_id)?v(!0):v(!1)},[n,m,w]),n!=="Download_List"?a.jsxs("li",{className:"save-item",onClick:w,style:{pointerEvents:d&&"none"},children:[a.jsx("img",{src:r,alt:_?o:i}),_?o:i]}):a.jsxs("li",{className:"save-item",onClick:w,style:{pointerEvents:d&&"none"},children:[a.jsx("img",{src:_?l:s,alt:_?o:i}),_?o:i]})},Ab=({movie:e})=>a.jsx(zw,{className:"save-list",onClick:t=>t.stopPropagation(),children:bb.map(t=>a.jsx(xb,{save:t,movie:e},t.id))}),Re=({movie:e,type:t})=>{const{movie_id:n,movie_title:r,movie_image:i,movie_video:o,movie_like_count:s,movie_date:l,movie_channel:c,movie_video_type:u,movie_body:d}=e,{Channel:m}=P(k=>k.channel),{isSideMenu:g}=P(k=>k.header),{isLoginUser:_}=P(k=>k.auth),[v,w]=C.useState(!1),y=te(),p=k=>{if(k>=1e4)return Math.floor(k/1e4)+"만회";if(k>=1e3)return Math.floor(k/1e3)+"천회";if(k<=1e3)return k+"회"},f=k=>{k.stopPropagation(),y(ri({user_id:_.user_id,type:t,movie:e}))},h=$(),[b,S]=C.useState(!1),j=k=>{k.stopPropagation(),S(!b)},x=Wn(()=>S(!1));return a.jsxs(wb,{onClick:()=>{h(`/watch/${n}`),g&&y(au())},className:"video-loder",children:[a.jsx("div",{className:"video-wrap",onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:v?u!=="video"?a.jsx("iframe",{src:o+"&controls=0",title:r,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",autoPlay:"1"}):a.jsx("video",{autoPlay:!0,muted:!0,src:o}):a.jsx("img",{src:i,alt:r})}),a.jsxs("div",{className:"text-wrap",children:[a.jsx("div",{className:"channel-logo",children:a.jsx("img",{src:m[c].channel_image,alt:""})}),a.jsxs("div",{className:"movie_info",children:[a.jsx("p",{className:"movie_title",children:r}),a.jsx("p",{className:"channel_name",children:m[c].channel_name}),a.jsxs("div",{className:"mobile",children:[a.jsx("p",{className:"mobile_channel_name",children:m[c].channel_name}),a.jsxs("p",{className:"mobile_movie_like_count",children:["조회수 ",p(s),a.jsxs("span",{className:"mobile_movie_date",children:[l.year,".",l.month,".",l.day]})]})]}),a.jsxs("p",{className:"movie_like_count",children:["조회수 ",p(s),a.jsxs("span",{className:"movie_date",children:[l.year,".",l.month,".",l.day]})]}),a.jsx("p",{className:"movie_body",children:d})]}),a.jsx("div",{className:"close-menu",onClick:f,children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Close_Btn.svg",alt:"close-menu"})}),a.jsxs("div",{className:"plus-menu",ref:x,children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/See_more.svg",alt:"pluse-menu",onClick:j}),b&&a.jsx(Ab,{movie:e})]})]})]})},Sb=()=>{const{Channel:e}=P(m=>m.channel),{isLoginUser:t,isAuth:n}=P(m=>m.auth),r=te(),i=$(),o=Object.values(e).find(m=>m.channel_id===Number(t.user_id)),[s,l]=C.useState([]),c=m=>{if(m.target.checked){const g=o.Movies.map(_=>_.movie_id);l(g)}else l([])},u=m=>{l(g=>g.includes(m)?g.filter(_=>_!==m):[...g,m])},d=()=>{r(Kw({channel_name:o.Movies[0].movie_channel,movie_id:s})),l([]),r(mt()),r(vt(`${s.length}개의 영상 삭제`))};return C.useEffect(()=>{n||i("/")},[n]),a.jsx(fb,{children:a.jsxs("div",{className:"inner",children:[a.jsx("h2",{className:"studio-title",children:"채널 콘텐츠"}),a.jsxs("div",{className:s.length>0?"del-menu active":"del-menu",children:[a.jsxs("p",{className:"selectedMovies-length",children:[s.length,"개 선택됨"]}),a.jsx("p",{className:"del-btn",onClick:d,children:"삭제"})]}),a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:a.jsx("input",{type:"checkbox",onChange:c,checked:s.length===o.Movies.length})}),a.jsx("th",{children:"동영상"}),a.jsx("th",{children:"제목"}),a.jsx("th",{children:"공개 상태"}),a.jsx("th",{children:"제한사항"}),a.jsx("th",{children:"날짜"}),a.jsx("th",{children:"조회수"}),a.jsx("th",{children:"댓글"}),a.jsx("th",{children:"좋아요"})]})}),a.jsx("tbody",{children:o.Movies.map(m=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("input",{type:"checkbox",checked:s.includes(m.movie_id),onChange:()=>u(m.movie_id)})}),a.jsx("td",{className:"movie_video",children:a.jsx(Re,{movie:m})}),a.jsxs("td",{className:"movie_info",children:[a.jsx("p",{className:"movie_title",children:m.movie_title}),a.jsx("p",{className:"movie_body",children:m.movie_body})]}),a.jsx("td",{children:"공개"}),a.jsx("td",{className:"limited-text",children:"저작권"}),a.jsxs("td",{className:"movie_date",children:[m.movie_date.year,".",m.movie_date.month,".",m.movie_date.day]}),a.jsx("td",{children:m.movie_like_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),a.jsx("td",{children:m.movie_comments.length}),a.jsx("td",{children:m.movie_like_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]},m.movie_id))})]})]})})},Cb=()=>{const{isLoginUser:e}=P(y=>y.auth),[t,n]=C.useState(null),[r,i]=C.useState(null),o=new Date,[s,l]=C.useState({movie_title:"",movie_body:"",movie_category:"",movie_image:null,movie_video:null}),c=te(),u=$(),d=y=>{const{name:p,value:f}=y.target;l(h=>({...h,[p]:f}))},m=y=>{const p=y.target.files[0];p&&(l(f=>({...f,movie_image:p})),i(URL.createObjectURL(p)),v(p))},g=y=>{const p=y.target.files[0];p&&(l(f=>({...f,movie_video:p})),n(URL.createObjectURL(p)),_(p))},_=y=>{const p=indexedDB.open("videoDB",1);p.onupgradeneeded=f=>{const h=f.target.result;h.objectStoreNames.contains("videos")||h.createObjectStore("videos",{keyPath:"id",autoIncrement:!0})},p.onsuccess=f=>{f.target.result.transaction("videos","readwrite").objectStore("videos").add({video:y})},p.onerror=f=>{console.error("IndexedDB 에러:",f)}},v=y=>{const p=indexedDB.open("imageDB",1);p.onupgradeneeded=f=>{const h=f.target.result;h.objectStoreNames.contains("images")||h.createObjectStore("images",{keyPath:"id",autoIncrement:!0})},p.onsuccess=f=>{f.target.result.transaction("images","readwrite").objectStore("images").add({image:y})},p.onerror=f=>{console.error("IndexedDB 에러:",f)}},w=y=>{y.preventDefault(),!s.movie_title||!s.movie_body||!s.movie_image||!s.movie_video?alert("누락된 정보가 있습니다."):(c(vt(`${s.movie_title} 추가`)),c(Hw({movie_title:s.movie_title,movie_body:s.movie_body,movie_category:s.movie_category,movie_image:r,movie_video:t,movie_like_count:0,movie_channel:e.user_email.split("@")[0],movie_channel_id:e.user_id,movie_date:{year:o.getFullYear(),month:o.getMonth()+1,day:o.getDate()},movie_comments:[],movie_video_type:"video"})),u(`/studio/${e.user_id}/content`),c(mt()))};return a.jsx(hb,{children:a.jsxs("div",{className:"inner",children:[a.jsx("h2",{className:"studio-title",children:"동영상 업로드"}),a.jsxs("form",{className:"upload-form",onSubmit:w,children:[a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_title",children:"제목"}),a.jsx("input",{type:"text",name:"movie_title",id:"movie_title",className:"movie_title",value:s.movie_title,onChange:d,placeholder:"영상 제목을 작성해 주세요"})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_body",children:"설명"}),a.jsx("textarea",{name:"movie_body",id:"movie_body",className:"movie_body",value:s.movie_body,onChange:d,placeholder:"영상 소개글을 작성해 주세요"})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_category",children:"카테고리"}),a.jsx("input",{type:"text",name:"movie_category",id:"movie_category",className:"movie_category",value:s.movie_category,onChange:d,placeholder:"카테고리는 영문으로 작성해 주세요 ex) vloog"})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_image",children:"썸네일"}),a.jsx("input",{type:"file",name:"movie_image",id:"movie_image",className:"movie_image",onChange:m}),a.jsxs("div",{className:"img-wrap",children:[a.jsx("p",{children:"미리보기"}),r&&a.jsx("img",{src:r,alt:"썸네일 미리보기"})]})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_video",children:"동영상"}),a.jsx("input",{type:"file",name:"movie_video",id:"movie_video",className:"movie_video",onChange:g}),a.jsxs("div",{className:"video-wrap",children:[a.jsx("p",{children:"미리보기"}),t&&a.jsx("video",{controls:!0,width:"500",src:t})]})]}),a.jsx("p",{children:a.jsx(Z,{type:"submit",children:"업로드"})})]})]})})},kb=T.div`
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
    @media ${D.mobile} {
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
`,im=({name:e,category:t,thisMenu:n,setThisMenu:r})=>a.jsx("li",{className:`top-menu-li ${n===t?" active":""}`,onClick:()=>r(t),children:a.jsx(Z,{className:"top-menu-button",children:e})}),jb=[{id:16545641,name:"전체",category:"all"},{id:153,name:"이야기",category:"talk"},{id:513,name:"브이로그",category:"vlog"},{id:165,name:"코미디",category:"Comedy"},{id:955,name:"음악",category:"music"},{id:562,name:"영화감상",category:"movie_review"},{id:464,name:"라이브",category:"live"},{id:161,name:"음식",category:"food"},{id:164,name:"인터뷰",category:"interview"},{id:478,name:"게임",category:"gaming"},{id:654,name:"챌린지",category:"challenge"},{id:789,name:"엔터테인먼트",category:"entertainment"},{id:879,name:"다큐멘터리",category:"documentary"},{id:963,name:"동물",category:"animal"},{id:844,name:"쇼핑",category:"shopping"},{id:951,name:"메이크업",category:"makeup"},{id:351,name:"여행",category:"travel"}],Eb=T.div`
    height: 100%;
    margin: 2% auto;
    min-height: 100vh;
`,om=T.ul`
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
            button {
                width: 6vw;
                letter-spacing: -0.15rem;
            }
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
    @media ${D.mobile} {
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
                button {
                    width: 20vw;
                    font-size: 90%;
                    margin-top: 5%;
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
`,Nb=T.div`
    width: 100%;
    display: flex;
    @media ${D.mobile} {
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
`,ig=()=>a.jsx(Nb,{children:a.jsxs("div",{className:"no-search",children:[a.jsx("h2",{className:"no-search-title",children:"검색하여 시작하기"}),a.jsxs("p",{className:"no-search-desc",children:["내가 좋아할 만한 동영상 피드를 받을 수 있도록",a.jsx("br",{}),"동영상 시청을 시작해 보세요"]})]})});function og(e,t){return function(){return e.apply(t,arguments)}}const{toString:Lb}=Object.prototype,{getPrototypeOf:uu}=Object,qs=(e=>t=>{const n=Lb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yt=e=>(e=e.toLowerCase(),t=>qs(t)===e),$s=e=>t=>typeof t===e,{isArray:Nr}=Array,Ei=$s("undefined");function Ib(e){return e!==null&&!Ei(e)&&e.constructor!==null&&!Ei(e.constructor)&&He(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const sg=yt("ArrayBuffer");function Pb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&sg(e.buffer),t}const Rb=$s("string"),He=$s("function"),ag=$s("number"),Ws=e=>e!==null&&typeof e=="object",Ob=e=>e===!0||e===!1,Co=e=>{if(qs(e)!=="object")return!1;const t=uu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Bb=yt("Date"),Tb=yt("File"),Mb=yt("Blob"),Fb=yt("FileList"),zb=e=>Ws(e)&&He(e.pipe),Db=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||He(e.append)&&((t=qs(e))==="formdata"||t==="object"&&He(e.toString)&&e.toString()==="[object FormData]"))},Ub=yt("URLSearchParams"),[qb,$b,Wb,Vb]=["ReadableStream","Request","Response","Headers"].map(yt),Hb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Nr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function lg(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const jn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,cg=e=>!Ei(e)&&e!==jn;function Hl(){const{caseless:e}=cg(this)&&this||{},t={},n=(r,i)=>{const o=e&&lg(t,i)||i;Co(t[o])&&Co(r)?t[o]=Hl(t[o],r):Co(r)?t[o]=Hl({},r):Nr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Fi(arguments[r],n);return t}const Kb=(e,t,n,{allOwnKeys:r}={})=>(Fi(t,(i,o)=>{n&&He(i)?e[o]=og(i,n):e[o]=i},{allOwnKeys:r}),e),Gb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Xb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Yb=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&uu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Qb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Jb=e=>{if(!e)return null;if(Nr(e))return e;let t=e.length;if(!ag(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Zb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&uu(Uint8Array)),ex=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},tx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},nx=yt("HTMLFormElement"),rx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),sm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ix=yt("RegExp"),ug=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Fi(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},ox=e=>{ug(e,(t,n)=>{if(He(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(He(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},sx=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Nr(e)?r(e):r(String(e).split(t)),n},ax=()=>{},lx=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Pa="abcdefghijklmnopqrstuvwxyz",am="0123456789",dg={DIGIT:am,ALPHA:Pa,ALPHA_DIGIT:Pa+Pa.toUpperCase()+am},cx=(e=16,t=dg.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ux(e){return!!(e&&He(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const dx=e=>{const t=new Array(10),n=(r,i)=>{if(Ws(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Nr(r)?[]:{};return Fi(r,(s,l)=>{const c=n(s,i+1);!Ei(c)&&(o[l]=c)}),t[i]=void 0,o}}return r};return n(e,0)},mx=yt("AsyncFunction"),fx=e=>e&&(Ws(e)||He(e))&&He(e.then)&&He(e.catch),mg=((e,t)=>e?setImmediate:t?((n,r)=>(jn.addEventListener("message",({source:i,data:o})=>{i===jn&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),jn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",He(jn.postMessage)),hx=typeof queueMicrotask<"u"?queueMicrotask.bind(jn):typeof process<"u"&&process.nextTick||mg,A={isArray:Nr,isArrayBuffer:sg,isBuffer:Ib,isFormData:Db,isArrayBufferView:Pb,isString:Rb,isNumber:ag,isBoolean:Ob,isObject:Ws,isPlainObject:Co,isReadableStream:qb,isRequest:$b,isResponse:Wb,isHeaders:Vb,isUndefined:Ei,isDate:Bb,isFile:Tb,isBlob:Mb,isRegExp:ix,isFunction:He,isStream:zb,isURLSearchParams:Ub,isTypedArray:Zb,isFileList:Fb,forEach:Fi,merge:Hl,extend:Kb,trim:Hb,stripBOM:Gb,inherits:Xb,toFlatObject:Yb,kindOf:qs,kindOfTest:yt,endsWith:Qb,toArray:Jb,forEachEntry:ex,matchAll:tx,isHTMLForm:nx,hasOwnProperty:sm,hasOwnProp:sm,reduceDescriptors:ug,freezeMethods:ox,toObjectSet:sx,toCamelCase:rx,noop:ax,toFiniteNumber:lx,findKey:lg,global:jn,isContextDefined:cg,ALPHABET:dg,generateString:cx,isSpecCompliantForm:ux,toJSONObject:dx,isAsyncFn:mx,isThenable:fx,setImmediate:mg,asap:hx};function M(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}A.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.status}}});const fg=M.prototype,hg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{hg[e]={value:e}});Object.defineProperties(M,hg);Object.defineProperty(fg,"isAxiosError",{value:!0});M.from=(e,t,n,r,i,o)=>{const s=Object.create(fg);return A.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),M.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const px=null;function Kl(e){return A.isPlainObject(e)||A.isArray(e)}function pg(e){return A.endsWith(e,"[]")?e.slice(0,-2):e}function lm(e,t,n){return e?e.concat(t).map(function(i,o){return i=pg(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function gx(e){return A.isArray(e)&&!e.some(Kl)}const vx=A.toFlatObject(A,{},null,function(t){return/^is[A-Z]/.test(t)});function Vs(e,t,n){if(!A.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=A.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,y){return!A.isUndefined(y[w])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(t);if(!A.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(A.isDate(v))return v.toISOString();if(!c&&A.isBlob(v))throw new M("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(v)||A.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,w,y){let p=v;if(v&&!y&&typeof v=="object"){if(A.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(A.isArray(v)&&gx(v)||(A.isFileList(v)||A.endsWith(w,"[]"))&&(p=A.toArray(v)))return w=pg(w),p.forEach(function(h,b){!(A.isUndefined(h)||h===null)&&t.append(s===!0?lm([w],b,o):s===null?w:w+"[]",u(h))}),!1}return Kl(v)?!0:(t.append(lm(y,w,o),u(v)),!1)}const m=[],g=Object.assign(vx,{defaultVisitor:d,convertValue:u,isVisitable:Kl});function _(v,w){if(!A.isUndefined(v)){if(m.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(v),A.forEach(v,function(p,f){(!(A.isUndefined(p)||p===null)&&i.call(t,p,A.isString(f)?f.trim():f,w,g))===!0&&_(p,w?w.concat(f):[f])}),m.pop()}}if(!A.isObject(e))throw new TypeError("data must be an object");return _(e),t}function cm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function du(e,t){this._pairs=[],e&&Vs(e,this,t)}const gg=du.prototype;gg.append=function(t,n){this._pairs.push([t,n])};gg.toString=function(t){const n=t?function(r){return t.call(this,r,cm)}:cm;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function _x(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vg(e,t,n){if(!t)return e;const r=n&&n.encode||_x,i=n&&n.serialize;let o;if(i?o=i(t,n):o=A.isURLSearchParams(t)?t.toString():new du(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class um{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){A.forEach(this.handlers,function(r){r!==null&&t(r)})}}const _g={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yx=typeof URLSearchParams<"u"?URLSearchParams:du,wx=typeof FormData<"u"?FormData:null,bx=typeof Blob<"u"?Blob:null,xx={isBrowser:!0,classes:{URLSearchParams:yx,FormData:wx,Blob:bx},protocols:["http","https","file","blob","url","data"]},mu=typeof window<"u"&&typeof document<"u",Gl=typeof navigator=="object"&&navigator||void 0,Ax=mu&&(!Gl||["ReactNative","NativeScript","NS"].indexOf(Gl.product)<0),Sx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Cx=mu&&window.location.href||"http://localhost",kx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:mu,hasStandardBrowserEnv:Ax,hasStandardBrowserWebWorkerEnv:Sx,navigator:Gl,origin:Cx},Symbol.toStringTag,{value:"Module"})),Fe={...kx,...xx};function jx(e,t){return Vs(e,new Fe.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Fe.isNode&&A.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ex(e){return A.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Nx(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function yg(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=n.length;return s=!s&&A.isArray(i)?i.length:s,c?(A.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!A.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&A.isArray(i[s])&&(i[s]=Nx(i[s])),!l)}if(A.isFormData(e)&&A.isFunction(e.entries)){const n={};return A.forEachEntry(e,(r,i)=>{t(Ex(r),i,n,0)}),n}return null}function Lx(e,t,n){if(A.isString(e))try{return(t||JSON.parse)(e),A.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const zi={transitional:_g,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=A.isObject(t);if(o&&A.isHTMLForm(t)&&(t=new FormData(t)),A.isFormData(t))return i?JSON.stringify(yg(t)):t;if(A.isArrayBuffer(t)||A.isBuffer(t)||A.isStream(t)||A.isFile(t)||A.isBlob(t)||A.isReadableStream(t))return t;if(A.isArrayBufferView(t))return t.buffer;if(A.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return jx(t,this.formSerializer).toString();if((l=A.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Vs(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Lx(t)):t}],transformResponse:[function(t){const n=this.transitional||zi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(A.isResponse(t)||A.isReadableStream(t))return t;if(t&&A.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?M.from(l,M.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Fe.classes.FormData,Blob:Fe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};A.forEach(["delete","get","head","post","put","patch"],e=>{zi.headers[e]={}});const Ix=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Px=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&Ix[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},dm=Symbol("internals");function Dr(e){return e&&String(e).trim().toLowerCase()}function ko(e){return e===!1||e==null?e:A.isArray(e)?e.map(ko):String(e)}function Rx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ox=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ra(e,t,n,r,i){if(A.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!A.isString(t)){if(A.isString(r))return t.indexOf(r)!==-1;if(A.isRegExp(r))return r.test(t)}}function Bx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Tx(e,t){const n=A.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class ze{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,c,u){const d=Dr(c);if(!d)throw new Error("header name must be a non-empty string");const m=A.findKey(i,d);(!m||i[m]===void 0||u===!0||u===void 0&&i[m]!==!1)&&(i[m||c]=ko(l))}const s=(l,c)=>A.forEach(l,(u,d)=>o(u,d,c));if(A.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(A.isString(t)&&(t=t.trim())&&!Ox(t))s(Px(t),n);else if(A.isHeaders(t))for(const[l,c]of t.entries())o(c,l,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=Dr(t),t){const r=A.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Rx(i);if(A.isFunction(n))return n.call(this,i,r);if(A.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Dr(t),t){const r=A.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ra(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Dr(s),s){const l=A.findKey(r,s);l&&(!n||Ra(r,r[l],l,n))&&(delete r[l],i=!0)}}return A.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ra(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return A.forEach(this,(i,o)=>{const s=A.findKey(r,o);if(s){n[s]=ko(i),delete n[o];return}const l=t?Bx(o):String(o).trim();l!==o&&delete n[o],n[l]=ko(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return A.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&A.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[dm]=this[dm]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=Dr(s);r[l]||(Tx(i,s),r[l]=!0)}return A.isArray(t)?t.forEach(o):o(t),this}}ze.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.reduceDescriptors(ze.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});A.freezeMethods(ze);function Oa(e,t){const n=this||zi,r=t||n,i=ze.from(r.headers);let o=r.data;return A.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function wg(e){return!!(e&&e.__CANCEL__)}function Lr(e,t,n){M.call(this,e??"canceled",M.ERR_CANCELED,t,n),this.name="CanceledError"}A.inherits(Lr,M,{__CANCEL__:!0});function bg(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Mx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Fx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[o];s||(s=u),n[i]=c,r[i]=u;let m=o,g=0;for(;m!==i;)g+=n[m++],m=m%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const _=d&&u-d;return _?Math.round(g*1e3/_):void 0}}function zx(e,t){let n=0,r=1e3/t,i,o;const s=(u,d=Date.now())=>{n=d,i=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),m=d-n;m>=r?s(u,d):(i=u,o||(o=setTimeout(()=>{o=null,s(i)},r-m)))},()=>i&&s(i)]}const cs=(e,t,n=3)=>{let r=0;const i=Fx(50,250);return zx(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,c=s-r,u=i(c),d=s<=l;r=s;const m={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-s)/u:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(m)},n)},mm=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},fm=e=>(...t)=>A.asap(()=>e(...t)),Dx=Fe.hasStandardBrowserEnv?function(){const t=Fe.navigator&&/(msie|trident)/i.test(Fe.navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=A.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),Ux=Fe.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];A.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),A.isString(r)&&s.push("path="+r),A.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function qx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function $x(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function xg(e,t){return e&&!qx(t)?$x(e,t):t}const hm=e=>e instanceof ze?{...e}:e;function Dn(e,t){t=t||{};const n={};function r(u,d,m){return A.isPlainObject(u)&&A.isPlainObject(d)?A.merge.call({caseless:m},u,d):A.isPlainObject(d)?A.merge({},d):A.isArray(d)?d.slice():d}function i(u,d,m){if(A.isUndefined(d)){if(!A.isUndefined(u))return r(void 0,u,m)}else return r(u,d,m)}function o(u,d){if(!A.isUndefined(d))return r(void 0,d)}function s(u,d){if(A.isUndefined(d)){if(!A.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,m){if(m in t)return r(u,d);if(m in e)return r(void 0,u)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,d)=>i(hm(u),hm(d),!0)};return A.forEach(Object.keys(Object.assign({},e,t)),function(d){const m=c[d]||i,g=m(e[d],t[d],d);A.isUndefined(g)&&m!==l||(n[d]=g)}),n}const Ag=e=>{const t=Dn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=t;t.headers=s=ze.from(s),t.url=vg(xg(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(A.isFormData(n)){if(Fe.hasStandardBrowserEnv||Fe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[u,...d]=c?c.split(";").map(m=>m.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...d].join("; "))}}if(Fe.hasStandardBrowserEnv&&(r&&A.isFunction(r)&&(r=r(t)),r||r!==!1&&Dx(t.url))){const u=i&&o&&Ux.read(o);u&&s.set(i,u)}return t},Wx=typeof XMLHttpRequest<"u",Vx=Wx&&function(e){return new Promise(function(n,r){const i=Ag(e);let o=i.data;const s=ze.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=i,d,m,g,_,v;function w(){_&&_(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let y=new XMLHttpRequest;y.open(i.method.toUpperCase(),i.url,!0),y.timeout=i.timeout;function p(){if(!y)return;const h=ze.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),S={data:!l||l==="text"||l==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:h,config:e,request:y};bg(function(x){n(x),w()},function(x){r(x),w()},S),y=null}"onloadend"in y?y.onloadend=p:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(p)},y.onabort=function(){y&&(r(new M("Request aborted",M.ECONNABORTED,e,y)),y=null)},y.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,e,y)),y=null},y.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const S=i.transitional||_g;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),r(new M(b,S.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,y)),y=null},o===void 0&&s.setContentType(null),"setRequestHeader"in y&&A.forEach(s.toJSON(),function(b,S){y.setRequestHeader(S,b)}),A.isUndefined(i.withCredentials)||(y.withCredentials=!!i.withCredentials),l&&l!=="json"&&(y.responseType=i.responseType),u&&([g,v]=cs(u,!0),y.addEventListener("progress",g)),c&&y.upload&&([m,_]=cs(c),y.upload.addEventListener("progress",m),y.upload.addEventListener("loadend",_)),(i.cancelToken||i.signal)&&(d=h=>{y&&(r(!h||h.type?new Lr(null,e,y):h),y.abort(),y=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const f=Mx(i.url);if(f&&Fe.protocols.indexOf(f)===-1){r(new M("Unsupported protocol "+f+":",M.ERR_BAD_REQUEST,e));return}y.send(o||null)})},Hx=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(u){if(!i){i=!0,l();const d=u instanceof Error?u:this.reason;r.abort(d instanceof M?d:new Lr(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,o(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:c}=r;return c.unsubscribe=()=>A.asap(l),c}},Kx=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Gx=async function*(e,t){for await(const n of Xx(e))yield*Kx(n,t)},Xx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},pm=(e,t,n,r)=>{const i=Gx(e,t);let o=0,s,l=c=>{s||(s=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await i.next();if(u){l(),c.close();return}let m=d.byteLength;if(n){let g=o+=m;n(g)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},Hs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Sg=Hs&&typeof ReadableStream=="function",Yx=Hs&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Cg=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Qx=Sg&&Cg(()=>{let e=!1;const t=new Request(Fe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),gm=64*1024,Xl=Sg&&Cg(()=>A.isReadableStream(new Response("").body)),us={stream:Xl&&(e=>e.body)};Hs&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!us[t]&&(us[t]=A.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new M(`Response type '${t}' is not supported`,M.ERR_NOT_SUPPORT,r)})})})(new Response);const Jx=async e=>{if(e==null)return 0;if(A.isBlob(e))return e.size;if(A.isSpecCompliantForm(e))return(await new Request(Fe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(A.isArrayBufferView(e)||A.isArrayBuffer(e))return e.byteLength;if(A.isURLSearchParams(e)&&(e=e+""),A.isString(e))return(await Yx(e)).byteLength},Zx=async(e,t)=>{const n=A.toFiniteNumber(e.getContentLength());return n??Jx(t)},e4=Hs&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:c,responseType:u,headers:d,withCredentials:m="same-origin",fetchOptions:g}=Ag(e);u=u?(u+"").toLowerCase():"text";let _=Hx([i,o&&o.toAbortSignal()],s),v;const w=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let y;try{if(c&&Qx&&n!=="get"&&n!=="head"&&(y=await Zx(d,r))!==0){let S=new Request(t,{method:"POST",body:r,duplex:"half"}),j;if(A.isFormData(r)&&(j=S.headers.get("content-type"))&&d.setContentType(j),S.body){const[x,k]=mm(y,cs(fm(c)));r=pm(S.body,gm,x,k)}}A.isString(m)||(m=m?"include":"omit");const p="credentials"in Request.prototype;v=new Request(t,{...g,signal:_,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:p?m:void 0});let f=await fetch(v);const h=Xl&&(u==="stream"||u==="response");if(Xl&&(l||h&&w)){const S={};["status","statusText","headers"].forEach(B=>{S[B]=f[B]});const j=A.toFiniteNumber(f.headers.get("content-length")),[x,k]=l&&mm(j,cs(fm(l),!0))||[];f=new Response(pm(f.body,gm,x,()=>{k&&k(),w&&w()}),S)}u=u||"text";let b=await us[A.findKey(us,u)||"text"](f,e);return!h&&w&&w(),await new Promise((S,j)=>{bg(S,j,{data:b,headers:ze.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:v})})}catch(p){throw w&&w(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,e,v),{cause:p.cause||p}):M.from(p,p&&p.code,e,v)}}),Yl={http:px,xhr:Vx,fetch:e4};A.forEach(Yl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const vm=e=>`- ${e}`,t4=e=>A.isFunction(e)||e===null||e===!1,kg={getAdapter:e=>{e=A.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!t4(n)&&(r=Yl[(s=String(n)).toLowerCase()],r===void 0))throw new M(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(vm).join(`
`):" "+vm(o[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Yl};function Ba(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Lr(null,e)}function _m(e){return Ba(e),e.headers=ze.from(e.headers),e.data=Oa.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),kg.getAdapter(e.adapter||zi.adapter)(e).then(function(r){return Ba(e),r.data=Oa.call(e,e.transformResponse,r),r.headers=ze.from(r.headers),r},function(r){return wg(r)||(Ba(e),r&&r.response&&(r.response.data=Oa.call(e,e.transformResponse,r.response),r.response.headers=ze.from(r.response.headers))),Promise.reject(r)})}const jg="1.7.7",fu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ym={};fu.transitional=function(t,n,r){function i(o,s){return"[Axios v"+jg+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new M(i(s," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!ym[s]&&(ym[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function n4(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new M("option "+o+" must be "+c,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+o,M.ERR_BAD_OPTION)}}const Ql={assertOptions:n4,validators:fu},Ht=Ql.validators;class Pn{constructor(t){this.defaults=t,this.interceptors={request:new um,response:new um}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Dn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Ql.assertOptions(r,{silentJSONParsing:Ht.transitional(Ht.boolean),forcedJSONParsing:Ht.transitional(Ht.boolean),clarifyTimeoutError:Ht.transitional(Ht.boolean)},!1),i!=null&&(A.isFunction(i)?n.paramsSerializer={serialize:i}:Ql.assertOptions(i,{encode:Ht.function,serialize:Ht.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&A.merge(o.common,o[n.method]);o&&A.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=ze.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,m=0,g;if(!c){const v=[_m.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,u),g=v.length,d=Promise.resolve(n);m<g;)d=d.then(v[m++],v[m++]);return d}g=l.length;let _=n;for(m=0;m<g;){const v=l[m++],w=l[m++];try{_=v(_)}catch(y){w.call(this,y);break}}try{d=_m.call(this,_)}catch(v){return Promise.reject(v)}for(m=0,g=u.length;m<g;)d=d.then(u[m++],u[m++]);return d}getUri(t){t=Dn(this.defaults,t);const n=xg(t.baseURL,t.url);return vg(n,t.params,t.paramsSerializer)}}A.forEach(["delete","get","head","options"],function(t){Pn.prototype[t]=function(n,r){return this.request(Dn(r||{},{method:t,url:n,data:(r||{}).data}))}});A.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Dn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Pn.prototype[t]=n(),Pn.prototype[t+"Form"]=n(!0)});class hu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new Lr(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new hu(function(i){t=i}),cancel:t}}}function r4(e){return function(n){return e.apply(null,n)}}function i4(e){return A.isObject(e)&&e.isAxiosError===!0}const Jl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jl).forEach(([e,t])=>{Jl[t]=e});function Eg(e){const t=new Pn(e),n=og(Pn.prototype.request,t);return A.extend(n,Pn.prototype,t,{allOwnKeys:!0}),A.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Eg(Dn(e,i))},n}const ce=Eg(zi);ce.Axios=Pn;ce.CanceledError=Lr;ce.CancelToken=hu;ce.isCancel=wg;ce.VERSION=jg;ce.toFormData=Vs;ce.AxiosError=M;ce.Cancel=ce.CanceledError;ce.all=function(t){return Promise.all(t)};ce.spread=r4;ce.isAxiosError=i4;ce.mergeConfig=Dn;ce.AxiosHeaders=ze;ce.formToJSON=e=>yg(A.isHTMLForm(e)?new FormData(e):e);ce.getAdapter=kg.getAdapter;ce.HttpStatusCode=Jl;ce.default=ce;const o4=()=>{var S,j;const{allMovies:e}=P(x=>x.channel),{isAuth:t,isLoginUser:n}=P(x=>x.auth),{isSideMenu:r}=P(x=>x.header),i=te(),o=C.useRef(),s=C.useRef(),[l]=C.useState(jb.filter(x=>x.category!=="all").sort(()=>Math.random()-.5).slice(0,7)),[c,u]=C.useState("all"),[d,m]=C.useState(8),[g,_]=C.useState([]),[v,w]=C.useState([]),[y,p]=C.useState([]),f=()=>{m(x=>x+(r?8:10))},[h,b]=C.useState({});if(C.useEffect(()=>{e.length===0&&i(mt()),document.title="YouTube",d>=e.length&&m(e.length+10)},[i,e.length,d]),C.useEffect(()=>{if(e.length>0){const x=e.slice().sort(()=>Math.random()-.5),k=[],B=[];for(let O=0;O<x.length;O+=10)k.push(x.slice(O,O+10));for(let O=0;O<x.length;O+=8)B.push(x.slice(O,O+8));_(k),w(B),m(r?8:10)}},[e]),C.useEffect(()=>{},[r]),C.useEffect(()=>(o.current&&o.current.disconnect(),o.current=new IntersectionObserver(x=>{x.forEach(k=>{k.isIntersecting&&f()})},{threshold:1}),s.current&&o.current.observe(s.current),()=>{o.current&&s.current&&o.current.unobserve(s.current)}),[]),C.useEffect(()=>{if(t)return;(async()=>{try{const B=(await ce.get("https://geolocation-db.com/json/")).data.IPv4;!t&&B&&i(Yp({ip:B}))}catch(k){console.log(k)}})()},[t]),C.useEffect(()=>{var B,O;if(!n)return;const x=Array.from(new Set((B=n==null?void 0:n.Viewing_Record)==null?void 0:B.map(J=>J.movie_category))),k=Array.from(new Set((O=n==null?void 0:n.user_search_list)==null?void 0:O.map(J=>J.search)));b({...h,movieCategory:x,searchList:k})},[n==null?void 0:n.Viewing_Record,n==null?void 0:n.user_search_list]),C.useEffect(()=>{const x=xe=>xe[Math.floor(Math.random()*xe.length)],k=h!=null&&h.movieCategory?x(h==null?void 0:h.movieCategory):null,B=h!=null&&h.searchList?x(h==null?void 0:h.searchList):null,O=k?e.filter(xe=>xe.movie_category.includes(k)):[],J=B?e.filter(xe=>xe.movie_title.includes(B)):[],be=(O||J).sort(()=>Math.random()-.5).slice(0,10);if(be.length<10){const xe=e.filter(Ut=>!be.includes(Ut)).sort(()=>Math.random()-.5).slice(0,10-be.length);p([...be,...xe])}else p(be)},[h]),!e)return a.jsx(ls,{});if(e)return a.jsx(kb,{width:r?"24.25%":"19.2%",$not:r?4:5,children:((S=h==null?void 0:h.movieCategory)==null?void 0:S.length)!==0||((j=h==null?void 0:h.searchList)==null?void 0:j.length)!==0?a.jsxs(a.Fragment,{children:[a.jsxs("ul",{className:"top-category",children:[a.jsx(im,{name:"전체",category:"all",thisMenu:c,setThisMenu:u},"16545641"),l&&l.map(x=>a.jsx(im,{name:x.name,category:x.category,thisMenu:c,setThisMenu:u},x.id))]}),a.jsx("ul",{className:"main-video-wrap",children:c==="all"?(y==null?void 0:y.length)===0&&g.length!==0?g[0].slice(0,r?8:10).map(x=>a.jsx(Re,{movie:x},x.movie_id)):y.slice(0,r?8:10).map(x=>a.jsx(Re,{movie:x},x.movie_id)):e.filter(x=>x.movie_category.includes(c)).sort(()=>Math.random()-.5).slice(0,r?8:10).map(x=>a.jsx(Re,{movie:x},x.movie_id))}),a.jsx("div",{className:"main-banner",children:a.jsx("img",{className:"main-banner-img",src:"https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_banner.jpg?raw=true",alt:"Main Banner"})}),r?v.slice(0,Math.ceil(d/8)).map((x,k)=>a.jsx("ul",{className:"main-video-wrap",children:x.map(B=>a.jsx(Re,{movie:B},B.movie_id))},`video-chunk-${k}`)):g.slice(0,Math.ceil(d/10)).map((x,k)=>a.jsx("ul",{className:"main-video-wrap",children:x.map(B=>a.jsx(Re,{movie:B},B.movie_id))},`video-chunk-${k}`)),a.jsx("div",{id:"scroll-anchor",ref:s,children:d!==(e==null?void 0:e.length)+10&&a.jsx(ls,{})})]}):a.jsx("div",{className:"no-login",children:a.jsx(ig,{})})})},wm=T.div`
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
    @media ${D.mobile} {
        .subscribers-btn {
            .img {
                width: 35%;
            }
        }
    }
`,Ks=({channel_id:e,channel_name:t,thisChannel:n})=>{var g;const{isLoginUser:r,isAuth:i}=P(_=>_.auth),o=e===(r==null?void 0:r.user_id),s=(g=r==null?void 0:r.Subscription_Id)==null?void 0:g.includes(e),l=te(),c=$(),u=_=>{_.stopPropagation(),i?r.user_id!==e?(l(xw({user_id:r.user_id,channel_id:e})),l(eg({channel_name:t,type:"plus"})),l(vt(`${n.channel_name} 채널 구독`))):alert("error"):c("/login")},d=_=>{i||c("/login"),_.stopPropagation(),l(Jw(n))},m=_=>{_.stopPropagation(),i&&c(`/studio/${e}/dashboard`)};if(o)return a.jsxs(wm,{children:[a.jsx(Z,{onClick:m,className:"channel-btn",children:"채널 맞춤설정"}),a.jsx(Z,{onClick:m,className:"video-btn",children:"동영상 관리"})]});if(!o)return a.jsx(wm,{children:s?a.jsxs(Z,{className:"subscribers-btn",onClick:d,children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Notification.svg",alt:"구독 중",className:"img"}),"구독중"]}):a.jsx(Z,{className:"not-subscribers-btn",onClick:u,children:"구독"})})},s4=({channel:e})=>{var u;const t=$(),{channel_image:n,channel_name:r,channel_subscribers:i,Movies:o,channel_id:s,channel_nav:l}=e,c=d=>{if(d>=1e4)return Math.floor(d/1e4)+"만명";if(d>=1e3)return Math.floor(d/1e3)+"천명";if(d<=1e3)return d+"명"};return a.jsxs("li",{className:"channel-item",onClick:()=>{var d;return t(`/channel/${((d=o[0])==null?void 0:d.movie_channel)||l}`)},children:[a.jsx("div",{className:"channel-profile",children:a.jsx("img",{src:n,alt:r,className:"channel-logo"})}),a.jsxs("div",{className:"channel-info",children:[a.jsxs("div",{className:"info-text",children:[a.jsx("h3",{className:"name",children:r}),a.jsxs("p",{className:"info",children:[a.jsxs("span",{className:"username",children:["@",((u=o[0])==null?void 0:u.movie_channel)||l]}),a.jsxs("span",{className:"sub-count",children:["구독자 ",c(i)]})]})]}),a.jsx(Ks,{channel_id:s,channel_name:l,thisChannel:e})]})]})},a4=({filteredMovies:e})=>{if(e)return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(Re,{movie:t},t.movie_id))})},l4=({Search:e,allMovies:t})=>{const{Channel:n}=P(s=>s.channel),i=Object.keys(n).map(s=>n[s]).filter(s=>s.channel_name.toLowerCase().includes(e.toLowerCase())),o=t.filter(s=>s.movie_title.toLowerCase().includes(e.toLowerCase())||s.movie_category.toLowerCase().includes(e.toLowerCase()));if(i.length===0&&o.length===0)return a.jsx(om,{children:a.jsxs("p",{className:"not-search",children:['"',e,'" 찾으시는 검색 결과가 없습니다.']})});if(i.length>0||o.length>0)return a.jsxs(om,{children:[i.map(s=>a.jsx(s4,{channel:s},s.channel_id)),a.jsx(a4,{Search:e,filteredMovies:o})]})},bm=()=>{const{Search:e}=_t(),{allMovies:t}=P(r=>r.channel),n=te();return C.useEffect(()=>{n(mt())},[]),a.jsx(Eb,{children:e?a.jsx(l4,{Search:e,allMovies:t}):a.jsx(ig,{})})},xm=T.div`
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
    @media ${D.mobile} {
        display: block;
        padding: 0;
        margin-top: -0.9rem;
        .video-wrap {
            width: 100%;
            .videoInner {
                border-radius: 0;
            }
        }
    }
`,c4=T.div`
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

            .channel-logo {
                display: none;
            }
            .movie_info {
                margin-left: 1rem;
                .movie_title {
                    font-size: 1.4rem;
                    word-break: break-all;
                }
                .mobile {
                    display: block;
                }
                .channel_name,
                .movie_like_count {
                    font-size: 1.2rem;
                }
            }
        }
    }
    @media ${D.mobile} {
        display: block;
        width: 100%;

        .movie_title {
            display: block;
        }
        .video-loder {
            .video-wrap {
                .movie_title {
                    padding-right: 5rem;
                }
            }
        }
        .text-wrap {
            max-width: 30rem;
        }
        .save-list {
            right: -100%;
        }
    }
    @media ${D.tablet} {
        display: block;
        width: 100%;

        .movie_title {
            display: block;
        }
        .video-loder {
            .video-wrap {
                border-radius: 2rem;
                .movie_title {
                }
            }
        }
        .text-wrap {
        }
        .save-list {
            right: -100%;
        }
    }
`,u4=T.div`
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
                flex-basis: auto;
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
    .more1 {
        display: block;
    }

    .more2 {
        display: none;
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

    @media ${D.tablet} {
        height: auto;
        .report-text {
            right: -2rem;
        }
    }
    @media ${D.mobile} {
        .Comment_items {
            right: -2rem;
        }
        .Comment_img {
            width: 30%;
        }
        .report-text {
            right: 0;
        }
        .more1 {
            display: none;
        }
        .more2 {
            display: block;
        }
        .save {
            display: none;
        }
        .mobile_save {
            width: auto;
            background: transparent;
        }
        @media ${D.mobile} {
            .subscribers-btn {
                width: 17vw;
            }
        }
    }
`,d4=T.div`
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
`,m4=T.div`
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
`;var Ng={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Am=pe.createContext&&pe.createContext(Ng),f4=["attr","size","title"];function h4(e,t){if(e==null)return{};var n=p4(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function p4(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ds.apply(this,arguments)}function Sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ms(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sm(Object(n),!0).forEach(function(r){g4(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g4(e,t,n){return t=v4(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v4(e){var t=_4(e,"string");return typeof t=="symbol"?t:t+""}function _4(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lg(e){return e&&e.map((t,n)=>pe.createElement(t.tag,ms({key:n},t.attr),Lg(t.child)))}function pu(e){return t=>pe.createElement(y4,ds({attr:ms({},e.attr)},t),Lg(e.child))}function y4(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=h4(e,f4),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),pe.createElement("svg",ds({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:ms(ms({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&pe.createElement("title",null,o),e.children)};return Am!==void 0?pe.createElement(Am.Consumer,null,n=>t(n)):t(Ng)}function Cm(e){return pu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(e)}const w4=({movieBody:e,channelName:t,movie_date:n,movieLikeCount:r,channelSubscribers:i,channelImage:o,channel_name:s})=>{const{year:l,month:c,day:u}=n,d=$(),[m,g]=C.useState(!1),_=()=>{g(v=>!v)};return a.jsx(d4,{children:a.jsxs("div",{className:"detail_inner",children:[a.jsxs("p",{className:"info",children:[a.jsxs("span",{children:["조회수 ",r,"회"]}),a.jsxs("span",{className:"desc",children:["최초 공개: ",l,". ",c,". ",u,"."]})]}),a.jsx("div",{className:"hidden",children:m?a.jsxs(a.Fragment,{children:[a.jsx("span",{children:e}),a.jsxs("div",{className:"script",children:[a.jsx("h2",{className:"script_title",children:"스크립트"}),a.jsx("p",{className:"script_desc",children:"스크립트를 보면서 시청하세요"}),a.jsx("button",{className:"script_btn",children:"스크립트 표시"})]}),a.jsxs("div",{className:"channel",children:[a.jsx("div",{children:a.jsx("img",{className:"channelImg",src:o,alt:""})}),a.jsxs("div",{className:"channel_detail",children:[a.jsx("h2",{className:"channel_name",children:t}),a.jsxs("p",{className:"channel_subscribers",children:["구독자 ",i]})]})]}),a.jsxs("div",{className:"but_container",children:[a.jsxs("button",{className:"channel_btn",onClick:()=>d(`/channel/${s}`),children:[a.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/play.svg.svg",alt:""}),"동영상"]}),a.jsxs("button",{className:"channel_btn",onClick:()=>d(`/channel/${s}`),children:[a.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/user.svg.svg",alt:""}),"정보"]})]}),a.jsx("div",{className:"briefly",onClick:_,children:"간략히"})]}):a.jsx(a.Fragment,{children:a.jsx("span",{className:"more",onClick:_,children:"...더보기"})})})]})})};function b4(e){return pu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.382 3C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3H12.382ZM11.7639 5H5V14H13.2361L14.2361 16H19V7H12.7639L11.7639 5Z"},child:[]}]})(e)}const x4=({movie_id:e,movie_channel:t})=>{var v;const{isAuth:n,isLoginUser:r}=P(w=>w.auth),[i,o]=C.useState(!1),[s,l]=C.useState(""),c=$(),u=te(),d=()=>{o(!1),l("")},m=()=>{n?o(!0):(alert("로그인이 필요합니다."),c("/login"))},g=w=>{l(w.target.value)},_=w=>{if(w.preventDefault(),!n){alert("로그인이 필요합니다."),c("/login");return}u(Gw({movie_id:e,movie_channel:t,comment_body:s,comment_user_id:r.user_id,comment_user_name:r.user_name})),l(""),u(mt())};return a.jsx("div",{className:"comment",children:a.jsxs("div",{className:"comment_inner",children:[a.jsx("div",{children:a.jsx("span",{className:"user-profile",children:(v=r==null?void 0:r.user_name)==null?void 0:v.charAt(0)})}),a.jsxs("form",{className:"comment_edit",onSubmit:_,children:[a.jsx("input",{type:"text",className:"comment_edit_input",placeholder:"댓글 추가...",onFocus:m,onChange:g,value:s}),i&&a.jsxs("div",{className:"comment_footer",children:[a.jsx("div",{className:"emoji",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/emoji.svg.svg",alt:"emoji"})}),a.jsxs("div",{className:"btns",children:[a.jsx("button",{className:"btn cancel",onClick:d,children:"취소"}),a.jsx("button",{className:"btn btn_comment",type:"submit",style:{backgroundColor:s?"#007BFF":"",color:s?"#fff":""},disabled:!s,children:"댓글"})]})]})]})]})})};function A4(e){return pu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"},child:[]}]})(e)}const S4=({item:e,movie_id:t,movie_channel:n})=>{const{comment_user_name:r,comment_body:i,comment_user_id:o,comment_id:s}=e,[l,c]=C.useState(!1),{isLoginUser:u}=P(v=>v.auth),d=te(),m=Wn(()=>c(!1)),g=()=>{c(v=>!v)},_=()=>{d(Xw({movie_id:t,movie_channel:n,comment_id:s,comment_user_id:o})),d(mt())};return a.jsxs("li",{className:"CommentList",children:[a.jsx("div",{children:a.jsx("span",{className:"user-profile",children:r.charAt(0)})}),a.jsxs("div",{className:"comment_userId",children:[a.jsxs("p",{className:"userId",children:["@",r]}),a.jsx("p",{children:i})]}),a.jsx("button",{className:"BelowBtn Comment",onClick:g,children:a.jsx(A4,{})}),l&&a.jsx("div",{className:"Comment_items",ref:m,children:(u==null?void 0:u.user_id)===o?a.jsx(a.Fragment,{children:a.jsxs("p",{onClick:_,children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/trash.svg",alt:"삭제"}),a.jsx("span",{className:"Comment_item",children:"삭제"})]})}):a.jsxs("p",{children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/complaint.svg",alt:"신고"}),a.jsx("span",{className:"Comment_item",children:"신고"})]})})]})},C4=({moviesComment:e,movie_id:t,movie_channel:n})=>a.jsx("ul",{className:"user_comment",children:e.map(r=>a.jsx(S4,{item:r,movie_id:t,movie_channel:n,moviesComment:e},r.comment_id))}),k4=({moviesComment:e,movie_id:t,movie_channel:n})=>{const[r,i]=C.useState(!1),[o,s]=C.useState(e),l=u=>{const d=[...e].sort((m,g)=>u==="oldest"?new Date(m.date)-new Date(g.date):u==="newest"?new Date(g.date)-new Date(m.date):0);s(d),i(!1)},c=()=>{i(u=>!u)};return a.jsx(m4,{children:a.jsxs("div",{className:"section",children:[a.jsxs("div",{className:"comment_top",children:[a.jsxs("h2",{className:"total_comment",children:["댓글 ",e.length," 개"]}),a.jsxs("button",{className:"label",onClick:c,children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/menu.svg.svg",alt:""}),a.jsx("span",{className:"label_title",children:"정렬 기준"})]}),r&&a.jsxs("div",{className:"text",children:[a.jsx("div",{className:"label_comment",onClick:()=>l("popular"),children:a.jsx("p",{children:"인기 댓글순"})}),a.jsx("div",{className:"label_comment",onClick:()=>l("newest"),children:a.jsx("p",{children:"최신순"})})]})]}),a.jsx(x4,{movie_id:t,movie_channel:n}),a.jsx(C4,{moviesComment:e,movie_id:t,movie_channel:n})]})})},j4=({movie:e,title:t,channelName:n,channelSubscribers:r,movieLikeCount:i,channelImage:o,movieBody:s,movie_date:l,channelId:c,moviesComment:u,movie_id:d,channel_name:m,movie_channel:g,thisChannel:_})=>{var O,J,ot,be,xe,Ut,qt,wt;const[v,w]=C.useState(!1),[y,p]=C.useState(!1),f=te(),{isLoginUser:h,isAuth:b}=P(E=>E.auth),S=$(),j=Wn(()=>w(!1)),x=(E,L,R)=>{E.preventDefault(),h&&b?h[L].find(U=>U.movie_id===d)?(f(ri({user_id:h.user_id,type:L,movie:e})),f(vt(R)),L==="like_Movie_List"&&(f(La({channel_name:m,movie_id:d,type:"minus"})),f(mt()))):(f(lu({user_id:h.user_id,type:L,movie:e})),f(vt(R)),L==="like_Movie_List"&&(h.dislike_Movie_List.find(U=>U.movie_id===d)&&(f(ri({user_id:h.user_id,type:"dislike_Movie_List",movie:e})),f(mt())),f(La({channel_name:m,movie_id:d,type:"plus"})),f(mt())),L==="dislike_Movie_List"&&h.like_Movie_List.find(U=>U.movie_id===d)&&(f(ri({user_id:h.user_id,type:"like_Movie_List",movie:e})),f(La({channel_name:m,movie_id:d,type:"minus"})),f(mt()))):(alert("로그인이 필요합니다."),S("/login"))},k=()=>{w(E=>!E)},B=()=>{p(E=>!E)};return a.jsxs(u4,{children:[a.jsx("h2",{className:"title",children:t}),a.jsxs("div",{className:"top",children:[a.jsxs("div",{className:"channel",children:[a.jsx("div",{onClick:()=>S(`/channel/${m}`),children:a.jsx("img",{className:"channelImg",src:o,alt:""})}),a.jsxs("div",{className:"channel_detail",onClick:()=>S(`/channel/${m}`),children:[a.jsx("h2",{className:"channel_name",children:n}),a.jsxs("p",{className:"channel_subscribers",children:[r,"명"]})]}),a.jsx("div",{className:"subscribers",children:a.jsx(Ks,{channel_id:c,channel_name:m,thisChannel:_})})]}),a.jsxs("div",{className:"action",children:[a.jsxs("span",{className:"Like",children:[a.jsxs("button",{className:"BelowBtn like",onClick:E=>{var L;return x(E,"like_Movie_List",(L=h.like_Movie_List)!=null&&L.find(R=>R.movie_id===d)?"좋아요 목록에 삭제":"좋아요 목록에 추가")},children:[a.jsx("img",{className:"img",src:(O=h.like_Movie_List)!=null&&O.find(E=>E.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/disLike_black.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/ee727f8dfb7bcd0c51e97b02fc6c584acdb7cd2f/Icon/like.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:i})]}),a.jsx("button",{className:"BelowBtn",onClick:E=>{var L;return x(E,"dislike_Movie_List",(L=h.dislike_Movie_List)!=null&&L.find(R=>R.movie_id===d)?"싫어요 취소":"싫어요")},children:a.jsx("img",{className:"img",src:(J=h.dislike_Movie_List)!=null&&J.find(E=>E.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/DisLike_black.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/dislike.svg.svg",alt:""})})]}),a.jsxs(Z,{className:"BelowBtn pc",onClick:E=>{var L;return x(E,"Download_List",(L=h.Download_List)!=null&&L.find(R=>R.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장")},children:[a.jsx("img",{className:"img",src:(ot=h.Download_List)!=null&&ot.find(E=>E.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:(be=h.Download_List)!=null&&be.find(E=>E.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장"})]}),a.jsxs(Z,{className:"BelowBtn pc",onClick:E=>{var L;return x(E,"Playlist",(L=h.Playlist)!=null&&L.find(R=>R.movie_id===d)?"재생목록 삭제":"재생목록 저장")},children:[a.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:(xe=h.Playlist)!=null&&xe.find(E=>E.movie_id===d)?"재생목록 삭제":"재생목록 저장"})]}),a.jsx(Z,{className:"BelowBtn pc",onClick:k,children:a.jsx(Cm,{className:"icons"})}),v&&a.jsxs("div",{className:"report-text",ref:j,children:[a.jsx(b4,{})," 신고"]}),a.jsx(Z,{className:"BelowBtn more2",onClick:B,ref:j,children:a.jsx(Cm,{className:"icons"})}),y&&a.jsxs("div",{className:"report-text",children:[a.jsxs(Z,{className:"mobile_save",children:[a.jsx("img",{className:"img",src:`https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/complaint.svg\r
               `,alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:"신고"})]}),a.jsxs(Z,{className:"mobile_save",onClick:E=>{var L;return x(E,"Download_List",(L=h.Download_List)!=null&&L.find(R=>R.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장")},children:[a.jsx("img",{className:"img",src:(Ut=h.Download_List)!=null&&Ut.find(E=>E.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:(qt=h.Download_List)!=null&&qt.find(E=>E.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장"})]}),a.jsxs(Z,{className:"mobile_save",onClick:E=>{var L;return x(E,"Playlist",(L=h.Playlist)!=null&&L.find(R=>R.movie_id===d)?"재생목록 삭제":"재생목록 저장")},children:[a.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:(wt=h.Playlist)!=null&&wt.find(E=>E.movie_id===d)?"재생목록 삭제":"재생목록 저장"})]})]})]})]}),a.jsx(w4,{movieBody:s,channelName:n,movie_date:l,movieLikeCount:i,channelSubscribers:r,channelImage:o,channel_name:m}),a.jsx(k4,{moviesComment:u,movie_id:d,movie_channel:g})]})},E4=({currentVideoCategory:e,currentVideoId:t})=>{const{allMovies:n}=P(i=>i.channel),r=n.filter(i=>i.movie_category===e).filter(i=>i.movie_id!==t);return a.jsx("ul",{className:"sub_video_wrap",children:r.slice().sort(()=>Math.random()-.5).slice(0,15).map(i=>a.jsx(Re,{movie:i},i.movie_id))})},N4=()=>{var u;const{isSideMenu:e}=P(d=>d.header),{allMovies:t}=P(d=>d.channel),{isLoginUser:n}=P(d=>d.auth),{Channel:r}=P(d=>d.channel),{Movie_ID:i}=_t(),o=te(),s=t.find(d=>d.movie_id===Number(i)),l=s?r[s.movie_channel]:null;if(C.useEffect(()=>{s||o(mt()),e&&o(au()),s&&(document.title=s.movie_title,o(lu({user_id:n.user_id,type:"Viewing_Record",movie:s})))},[i,t,s,o]),!i||!s)return a.jsx(xm,{children:a.jsx("p",{children:"찾으시는 동영상이 없습니다."})});const c=d=>d>=1e4?Math.floor(d/1e4)+"만":d>=1e3?Math.floor(d/1e3)+"천":d<=1e3?d:d.toString();if(t)return a.jsxs(xm,{children:[a.jsxs("div",{className:"video-wrap",children:[a.jsx("div",{className:"videoInner",children:s.movie_video_type!=="video"?a.jsx("iframe",{src:s.movie_video,title:s.movie_title,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",autoPlay:!0}):a.jsx("video",{controls:!0,autoPlay:!0,muted:!0,src:s.movie_video})}),a.jsx(j4,{title:s.movie_title,movie_date:s.movie_date,movieBody:s.movie_body,channelName:l?l.channel_name:"알 수 없음",channelSubscribers:l?c(l.channel_subscribers):"알 수 없음",movieLikeCount:c(s.movie_like_count),channelImage:l?l.channel_image:"",moviesComment:s.movie_comments,movie_id:s.movie_id,movie_channel:s.movie_channel,channel_name:((u=l==null?void 0:l.Movies[0])==null?void 0:u.movie_channel)||thisChannel_channel_nav,channelId:l.channel_id,movie:s,thisChannel:l})]}),a.jsx(c4,{children:a.jsx(E4,{currentVideoCategory:s.movie_category,currentVideoId:s.movie_id})})]})},km=T.div`
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
`,L4=({subscribers:e,channel:t})=>{const n=$();return a.jsxs(lb,{children:[a.jsx("h3",{className:"title-h3",children:"채널 분석"}),a.jsx("p",{className:"subscribers",children:"현재 구독자수"}),a.jsx("p",{className:"subscribers-count",children:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),a.jsx(Z,{onClick:()=>n(`/channel/${t}`),children:"채널 이동"})]})},I4=({comment:e,thisChannel:t})=>{const n=$(),{isLoginUser:r}=P(i=>i.auth);return a.jsxs(cb,{children:[a.jsxs("h3",{className:"title-h3",children:["최신 댓글 (",e.length,")"]}),a.jsx("ul",{children:e.map(i=>a.jsx(rg,{comment:i,thisChannel:t},i.comment_id))}),a.jsx(Z,{onClick:()=>n(`/studio/${r.user_id}/comment`),children:"더 보기"})]})},P4=({movies:e})=>{const t=$(),{isLoginUser:n}=P(r=>r.auth);return a.jsxs(db,{children:[a.jsx("h3",{className:"title-h3",children:"영상 콘텐츠"}),a.jsx("ul",{className:"movie-list",children:e.slice().sort(()=>Math.random()-.5).slice(0,4).map(r=>a.jsx(Re,{movie:r},r.movie_id))}),a.jsx(Z,{onClick:()=>t(`/studio/${n.user_id}/content`),children:"콘텐츠 더 보기"})]})},R4=()=>{var l;const{User_ID:e}=_t(),{Channel:t}=P(c=>c.channel),{isAuth:n,isLoginUser:r}=P(c=>c.auth),i=$(),o=te(),s=Object.values(t).find(c=>c.channel_id===Number(e));if(C.useEffect(()=>{n||i("/login"),s||o(Vw(r))},[n,s,e,t]),!s)return a.jsx(km,{children:a.jsx(ls,{})});if(s)return a.jsx(km,{children:a.jsxs("div",{className:"inner",children:[a.jsx("h2",{className:"studio-title",children:"채널 대시보드"}),a.jsxs("div",{className:"content-box",children:[a.jsx(L4,{subscribers:s.channel_subscribers,channel:((l=s.Movies[0])==null?void 0:l.movie_channel)||r.user_email.split("@")[0]}),a.jsx(P4,{movies:s.Movies}),a.jsx(I4,{comment:s.Movies.flatMap(c=>c.movie_comments),thisChannel:s})]})]})})},O4=T.div`
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
    @media ${D.mobile} {
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
`,B4=T.form`
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
                border: 1px solid #ddd;
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
    @media ${D.mobile} {
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
`,T4=T.ul`
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
    @media ${D.mobile} {
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
`,M4=T.form`
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
    @media ${D.mobile} {
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
`,F4=({loginCheck:e,setLoginCheck:t,setPageType:n})=>{const{LoginUser:r}=P(v=>v.auth),[i,o]=C.useState({user_email:"",user_password:""}),[s,l]=C.useState(!1),c=te(),u=$(),d=Oi(),m=v=>{const{name:w,value:y}=v.target;o({...i,[w]:y})},g=v=>{if(v.preventDefault(),r.find(w=>w.user_email===i.user_email&&w.user_password===i.user_password))c(Gp(i)),c(vt(`${i.user_email}님 로그인`)),d.pathname.startsWith("/studio")||d.pathname.startsWith("/login")||d.pathname.startsWith("/join")?u("/"):u(-1);else{t(!0);return}},_=v=>{v.preventDefault(),i.user_email?l(!s):alert("아이디를 입력해 주세요")};return a.jsxs(B4,{className:"login-box",onSubmit:g,children:[e?a.jsxs("p",{className:"failed-input",children:[a.jsx("label",{htmlFor:"",children:"이메일 또는 비밀번호가 잘못 입력되었습니다."}),a.jsx("input",{type:"email",name:"user_email",placeholder:"이메일",onChange:m}),a.jsx("input",{type:"password",name:"user_password",placeholder:"비밀번호",onChange:m,className:s?"password active":"password"})]}):a.jsxs("p",{className:"login-input",children:[a.jsx("input",{type:"email",name:"user_email",placeholder:"이메일",onChange:m}),a.jsx("input",{type:"password",name:"user_password",placeholder:"비밀번호",onChange:m,className:s?"password active":"password"})]}),a.jsxs("div",{className:"btn-wrap",children:[s?a.jsx(Z,{className:"login-btn",type:"submit",children:"로그인"}):a.jsx(Z,{className:"login-btn",onClick:_,children:"다음"}),a.jsx(Z,{className:"join-btn",onClick:v=>{v.preventDefault(),n("join")},children:"계정 만들기"})]})]})},z4=({setPageType:e})=>{const{LoginUser:t}=P(l=>l.auth),n=t.filter(l=>typeof l.user_id=="number").slice().sort(()=>Math.random()-.5).slice(0,3),r=te(),i=$(),o=Oi(),s=l=>{alert(`${l.user_name}님 로그인`),r(Gp({user_email:l.user_email,user_password:l.user_password})),r(vt(`${l.user_name}님 로그인`)),o.pathname.startsWith("/studio")||o.pathname.startsWith("/login")||o.pathname.startsWith("/join")?i("/"):i(-1)};return a.jsxs(T4,{children:[n.map(l=>a.jsxs("li",{className:"login-item",onClick:()=>s(l),children:[a.jsx("div",{className:"profile-wrap",children:a.jsx("span",{className:"user-profile",children:l.user_name.charAt(0)})}),a.jsxs("div",{className:"text-wrap",children:[a.jsx("p",{className:"user-name",children:l.user_name}),a.jsx("p",{className:"user-email",children:l.user_email})]})]},l.user_id)),a.jsxs("li",{className:"login-item",onClick:()=>e("login"),children:[a.jsx("div",{className:"account-wrap",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Account.svg",alt:"Account"})}),a.jsx("div",{className:"text-wrap",children:a.jsx("p",{children:"다른 계정 사용"})})]})]})},D4=({setPageType:e})=>{const[t,n]=C.useState({user_name:"",user_age:"",user_tel:"",user_email:"",user_password:""}),[r,i]=C.useState(!1),o=te(),{LoginUser:s}=P(d=>d.auth),l=d=>{d.preventDefault(),t.user_name&&t.user_age&&t.user_tel&&i(!0)},c=d=>{const{name:m,value:g}=d.target;n({...t,[m]:g})},u=d=>{d.preventDefault(),s.find(m=>m.user_email===t.user_email)?alert("중복되는 아이디가 있습니다."):o(Yp(t))};return a.jsxs(M4,{onSubmit:u,children:[a.jsxs("p",{className:"join-wrap",children:[a.jsx("input",{type:"text",name:"user_name",id:"user_name",placeholder:"이름",className:"active",onChange:c}),a.jsx("input",{type:"age",name:"user_age",id:"user_age",placeholder:"나이",className:"active",onChange:c}),a.jsx("input",{type:"tel",name:"user_tel",id:"user_tel",placeholder:"전화번호",className:"active",onChange:c}),a.jsx("input",{type:"email",name:"user_email",id:"user_email",placeholder:"이메일",className:r&&"active",onChange:c}),a.jsx("input",{type:"password",name:"user_password",id:"user_password",placeholder:"비밀번호",className:r&&"active",onChange:c})]}),a.jsx("div",{className:"btn-wrap",children:r?a.jsx(Z,{type:"submit",className:"join-btn",children:"회원가입"}):a.jsxs(a.Fragment,{children:[a.jsx(Z,{onClick:l,className:"next-btn",children:"다음"}),a.jsx(Z,{onClick:d=>{d.preventDefault(),e("login")},className:"cancel-btn",children:"취소"})]})})]})},U4=()=>{const{isAuth:e}=P(s=>s.auth),[t,n]=C.useState("quickLogin"),[r,i]=C.useState(!1),o=$();if(C.useEffect(()=>{e&&o("/")},[e]),!e)return a.jsx(O4,{children:a.jsxs("div",{className:"login-container",children:[a.jsxs("div",{className:"left-con-box",children:[a.jsx("div",{className:"logo-wrap",children:a.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg"})}),a.jsxs("h2",{className:"title",children:[t==="quickLogin"&&"계정 선택",t==="login"&&"로그인",t==="join"&&"계정 생성"]}),a.jsx("p",{className:"nav-youtube",onClick:()=>o("/"),children:"YouTube로 이동"})]}),a.jsxs("div",{className:"right-con-box",children:[t==="quickLogin"&&a.jsx(z4,{setPageType:n}),t==="login"&&a.jsx(F4,{loginCheck:r,setLoginCheck:i,setPageType:n}),t==="join"&&a.jsx(D4,{setPageType:n})]})]})})},q4=T.div``,$4=()=>a.jsx(q4,{children:a.jsx("h2",{children:"Join"})}),jm=T.div`
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
    @media ${D.mobile} {
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
`;T.div``;const Zl=({category:e})=>{var l,c,u;const{Category:t}=_t(),{isLoginUser:n}=P(d=>d.auth),[r,i]=C.useState(""),o=te(),s=()=>{switch(t||e){case"Viewing_Record":return"시청 기록";case"Playlist":return"재생 목록";case"Later_Watch":return"나중에 볼 동영상";case"like_Movie_List":return"좋아요 표시한 동영상";case"Download_List":return"오프라인 저장 동영상";default:return"피드"}};if(((l=n[t||e])==null?void 0:l.length)===0)return a.jsx(jm,{className:"feed-wrap",children:a.jsx("div",{className:"inner",children:a.jsxs("p",{className:"not-list",children:[s(),"이 없습니다."]})})});if(((c=n[t||e])==null?void 0:c.length)>0)return a.jsxs(jm,{className:"feed-wrap",children:[a.jsx("div",{className:"hearder",children:a.jsx("div",{className:"inner",children:a.jsx("h2",{children:s()})})}),a.jsx("div",{className:"viewing_content",children:a.jsx("div",{className:"inner",children:a.jsx("ul",{className:"video-list",children:(u=n[t||e])==null?void 0:u.filter(d=>d.movie_title.toLowerCase().includes(r==null?void 0:r.toLowerCase())||d.movie_category.toLowerCase().includes(r.toLowerCase())).map(d=>a.jsx(Re,{movie:d,type:t},d.movie_id))})})}),a.jsx("div",{className:"page_menu",children:a.jsxs("div",{className:"search_wrap",children:[a.jsxs("div",{className:"search",children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Search.svg",alt:`${s()} 검색`}),a.jsx("input",{type:"text",value:r,onChange:d=>i(d.target.value),placeholder:`${s()} 검색`})]}),a.jsxs("div",{className:"content",onClick:()=>o(yw({user_id:n.user_id,type:t})),children:[a.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC"}),a.jsxs("p",{children:[s()," 지우기 "]})]})]})})]})},Em=T.div`
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

    @media ${D.mobile} {
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
                    align-items: center;
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
                li {
                    line-height: 6rem;
                }
                .channel_search {
                    button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0;
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
    }
`,W4=T.div`
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
    @media ${D.mobile} {
        .search_results-wrap {
            flex-direction: column;
            .video-loder {
                display: flex;
                width: 100%;
                .video-wrap {
                    width: 45%;
                    padding-bottom: 28%;
                    border-radius: 1rem;
                    overflow: hidden;
                }
                .text-wrap {
                    width: 55%;
                    overflow: hidden;
                    .channel-logo {
                        display: none;
                    }
                    .movie_info {
                        width: 100%;
                        .movie_title {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                            white-space: wrap;
                            text-overflow: ellipsis;
                            font-size: 2rem;
                            line-height: 2.5rem;
                            margin-bottom: 1%;
                            word-break: break-all;
                            padding-right: 4rem;
                        }
                        .mobile {
                            .mobile_channel_name {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
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
`,V4=T.div`
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
    @media ${D.mobile} {
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
                        .movie_info {
                            display: inline-block;
                            width: 100%;
                            .movie_title {
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 3; /* 원하는 줄 수 설정 */
                                overflow: hidden;
                                white-space: wrap;
                                text-overflow: ellipsis;
                                font-size: 2rem;
                                line-height: 2.5rem;
                                margin-bottom: 1%;
                                word-break: break-all; /* 글자 단위로 줄바꿈 */
                                padding-right: 4rem;
                            }
                            .mobile_channel_name {
                                display: none;
                            }
                        }
                        .plus-menu {
                            right: 0;
                        }
                    }
                }
            }
        }
    }
`;T.div`
    /* padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem); */
    @media ${D.mobile} {
        h2 {
            font-size: 150%;
            font-weight: 700;
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
                    .movie_info {
                        display: inline-block;
                        width: 100%;
                        .mobile {
                            display: flex;
                            flex-direction: column;
                            .mobile_channel_name {
                                line-height: 2.2rem;
                            }
                            .mobile_movie_like_count {
                            }
                        }

                        .movie_title {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                            white-space: wrap;
                            text-overflow: ellipsis;
                            font-size: 2rem;
                            line-height: 2.5rem;
                            margin-bottom: 1%;
                            word-break: break-all;
                            padding-right: 4rem;
                        }
                    }
                    .plus-menu {
                        right: 0;
                    }
                }
            }
        }
    }
`;const H4=T.div`
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
    @media ${D.mobile} {
        margin-top: 10px;
        .search_results {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0%;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
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
                    .movie_info {
                        display: inline-block;
                        width: 100%;
                        .movie_title {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                            white-space: wrap;
                            text-overflow: ellipsis;
                            font-size: 2rem;
                            line-height: 2.5rem;
                            margin-bottom: 1%;
                            word-break: break-all;
                            padding-right: 4rem;
                        }
                        .mobile_channel_name {
                            display: none;
                        }
                    }
                    .plus-menu {
                        right: 0;
                    }
                }
            }
        }
    }
`,K4=()=>{const{Channel_name:e}=_t(),{Channel:t}=P(n=>n.channel);return a.jsx(a.Fragment,{children:a.jsxs(W4,{children:[a.jsx("div",{className:"channel_home_inner",children:a.jsx("div",{className:"channel_main",children:a.jsx("div",{className:"channel_mainvideo",children:t[e].Movies&&t[e].Movies.length>0&&a.jsx(Re,{movie:t[e].Movies[0]},t[e].Movies[0].movie_id)})})}),a.jsxs("div",{className:"channel_home",children:[a.jsx("h2",{children:"추천"}),a.jsx("ul",{className:"search_results-wrap",children:t[e].Movies.map(n=>a.jsx(Re,{movie:n},n.movie_id))})]})]})})},G4=()=>{const{Channel_name:e}=_t(),{Channel:t}=P(c=>c.channel),[n,r]=C.useState("latest"),i=t[e].Movies,o=c=>{const{year:u,month:d,day:m}=c.movie_date;return new Date(u,d-1,m)},l=(()=>{switch(n){case"latest":return[...i].sort((c,u)=>o(u)-o(c));case"popular":return[...i].sort((c,u)=>u.movie_like_count-c.movie_like_count);case"date":return[...i].sort((c,u)=>o(c)-o(u));default:return i}})();return a.jsxs(V4,{children:[a.jsxs("div",{className:"channel_video_tab",children:[a.jsxs("button",{className:`sort_btn ${n==="latest"?"active":""}`,onClick:()=>r("latest"),children:[" ","최신순"," "]}),a.jsxs("button",{className:`sort_btn ${n==="popular"?"active":""}`,onClick:()=>r("popular"),children:[" ","인기순"," "]}),a.jsxs("button",{className:`sort_btn ${n==="date"?"active":""}`,onClick:()=>r("date"),children:[" ","날짜순"," "]})]}),a.jsx("div",{className:"channel_videolist",children:a.jsx("div",{className:"search_results-wrap",children:l.map(c=>a.jsx(Re,{movie:c},c.movie_id))})})]})},X4=({searchTerm:e})=>{var i;const{Channel_name:t}=_t(),{Channel:n}=P(o=>o.channel),r=((i=n[t])==null?void 0:i.Movies.filter(o=>o.movie_title.includes(e)||o.movie_body.includes(e)))||[];return a.jsx(H4,{children:a.jsx("div",{className:"search_results",children:a.jsx("ul",{className:"search_results-wrap",children:r.length>0?r.map(o=>a.jsx(Re,{movie:o},o.movie_id)):a.jsxs("p",{children:["이 채널에 ‘",e,"’와(과) 일치하는 콘텐츠가 없습니다."]})})})})},Y4=()=>{const{Channel_name:e}=_t(),{Channel:t}=P(u=>u.channel),[n,r]=C.useState("home"),[i,o]=C.useState(""),s=t[e],l=s==null?void 0:s.Movies.length,c=u=>u>=1e4?`${Math.floor(u/1e4)}만명`:`${u}명`;if(!s)return a.jsx(Em,{children:a.jsxs("p",{children:['"',e,'" 찾으시는 채널이 없습니다.']})});if(s)return a.jsxs(Em,{children:[a.jsx("div",{className:"header_banner",children:a.jsx("div",{className:"channel_banner",children:a.jsx("img",{src:s.channel_banner,alt:s})})}),a.jsx("div",{className:"page_header",children:a.jsxs("div",{className:"page_header_profile",children:[a.jsx("div",{className:"header_left",children:a.jsx("img",{className:"channel_img",src:s.channel_image,alt:s})}),a.jsxs("div",{className:"header_right",children:[a.jsx("div",{className:"channel_name",children:s.channel_name}),a.jsxs("div",{className:"channel_info",children:["@",e," • 구독자"," ",c(s.channel_subscribers)," • 동영상"," ",l,"개",a.jsxs("div",{className:"channel_desc",children:[" ",s.channel_introduction]}),a.jsx(Ks,{thisChannel:s,channel_id:s.channel_id,channel_name:s.channel_nav})]})]})]})}),a.jsx("div",{className:"channel_navbar",children:a.jsxs("ul",{className:"inner",children:[a.jsx("li",{className:n==="home"?"nav_active":"",onClick:()=>r("home"),children:"홈"}),a.jsx("li",{className:n==="video"?"nav_active":"",onClick:()=>r("video"),children:"동영상"}),a.jsxs("li",{className:"channel_search",children:[a.jsx("button",{children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Search.svg",alt:"영상검색"})}),a.jsx("input",{className:"search_input",type:"text",value:i,onChange:u=>o(u.target.value),placeholder:"검색"})]})]})}),a.jsx("div",{className:"channel_content",children:i?a.jsx(X4,{searchTerm:i}):n==="home"?a.jsx(K4,{}):a.jsx(G4,{})})]})},Q4=T.div`
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
  @media ${D.mobile} {
    .subscript-select {
      width: 13rem;
      padding: 1rem;
      font-size: 2rem;
    }
  }
`,J4=T.ul`
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
          content: "";
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
  @media ${D.mobile} {
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
`,Z4=T.div`
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
    width: 10rem;
    margin: auto;
  }

  /* 11/15 김혜림 추가 */
  @media ${D.mobile} {
    .login_button {
      width: 15rem;
      .login-menu {
        .login-btn {
          font-size: 2rem;
        }
      }
    }
  }
`,e2=({channel:e})=>{var u;const{channel_id:t,channel_name:n,channel_image:r,channel_introduction:i,channel_subscribers:o,channel_nav:s,Movies:l}=e,c=$();return a.jsxs("li",{className:"subscript-li",onClick:()=>{var d;return c(`/channel/${((d=e.Movies[0])==null?void 0:d.movie_channel)||s}`)},children:[a.jsx("img",{className:"subscript-li-img",src:r,alt:n}),a.jsxs("div",{className:"subscript-channel-content",children:[a.jsx("strong",{className:"content-channel-name",children:n}),a.jsxs("span",{className:"content-channel-engName",children:["@",((u=l[0])==null?void 0:u.movie_channel)||s]}),a.jsxs("span",{className:"content-channel-subscribers",children:["구독자 ",o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"명"]}),a.jsx("p",{className:"content-channel-introduction",children:i})]}),a.jsx("div",{className:"subscript-icon",children:a.jsx(Ks,{channel_id:t,channel_name:n,thisChannel:e})})]})},t2=({sortData:e,setThisSortType:t,thisSortType:n})=>{const[r,i]=C.useState(!1),o=Wn(()=>i(!1));return a.jsx("div",{ref:o,children:a.jsxs(Q4,{className:"subscript-sort",children:[a.jsxs("p",{className:"subscript-select",onClick:()=>i(!r),children:[n.name,a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/b26aaeebc663db109b629ff9f3eba7500b8fc6f3/Icon/Down_B.svg",alt:""})]}),a.jsx("ul",{className:"subscript-ul",style:{display:r?"block":"none"},children:e.map(s=>a.jsx("li",{className:s.type,onClick:()=>{t(s),i(!r)},children:s.name},s.id))})]})})},Nm=[{id:0x580cafab62fb5,name:"가나다순",type:"channel_name"},{id:6546165164451165,name:"구독자순",type:"channel_subscribers"}],n2=()=>{const{Channel:e}=P(s=>s.channel),t=Object.keys(e).map(s=>e[s]),[n,r]=C.useState(Nm[0]),{isLoginUser:i}=P(s=>s.auth),o=t.filter(s=>{var l;return(l=i==null?void 0:i.Subscription_Id)==null?void 0:l.includes(s.channel_id)});return a.jsxs(J4,{children:[a.jsx(t2,{sortData:Nm,setThisSortType:r,thisSortType:n}),o.sort((s,l)=>n.type==="channel_name"?s[n.type]>l[n.type]?1:s[n.type]<l[n.type]?-1:0:l[n.type]>s[n.type]?1:l[n.type]<s[n.type]?-1:0).map(s=>a.jsx(e2,{channel:s},s.channel_id))]})},r2=T.div`
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
    @media ${D.mobile} {
        .subscriptInner {
            width: 100%;
            padding: 0 2rem;
        }
    }
`,i2=()=>a.jsxs(Z4,{children:[a.jsx("img",{src:"https://github.com/React-Project-Team1/data-center/blob/main/Subscription_logout.png?raw=true",alt:"icon",className:"Not_login_subscription_img"}),a.jsx("strong",{className:"Not_login_subscription_title",children:"새로운 동영상을 놓치지 마세요."}),a.jsx("p",{className:"Not_login_subscription_desc",children:"즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요."}),a.jsx("div",{className:"login_button",children:a.jsx(cu,{})})]}),o2=()=>{const{isAuth:e}=P(t=>t.auth);return a.jsx(r2,{children:e?a.jsxs("div",{className:"subscriptInner",children:[a.jsx("h2",{className:"subscriptH2",children:"모든 구독 채널"}),a.jsx("div",{className:"subscription-content-box",children:a.jsx(n2,{})})]}):a.jsx(i2,{})})},s2=T.div`
    @media ${D.mobile} {
        width: 100%;
        min-height: 100vh;
        .feed-wrap {
            min-height: 0;
        }
    }
`,a2=T.ul`
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
`,l2=()=>{const e=te(),t=$();return a.jsxs(a2,{children:[a.jsxs("li",{className:"menu-item",onClick:()=>t("/feed/Download_List"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Download.svg",alt:"Download"}),a.jsx("p",{className:"name",children:"오프라인 저장 동영상"})]}),a.jsxs("li",{className:"menu-item",onClick:()=>t("/feed/like_Movie_List"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Like_list.svg",alt:"Like_list"}),a.jsx("p",{className:"name",children:"좋아요 표시한 동영상"})]}),a.jsxs("li",{className:"menu-item",onClick:()=>e(Xp()),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/logout.svg",alt:"logout"}),a.jsx("p",{className:"name",children:"로그아웃"})]})]})},c2=()=>{const{isAuth:e}=P(n=>n.auth),t=$();if(C.useEffect(()=>{e||t("/login")},[e]),e)return a.jsxs(s2,{children:[a.jsx(Zl,{category:"Viewing_Record"}),a.jsx(Zl,{category:"Later_Watch"}),a.jsx(l2,{})]})};var Ig=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Pg=nu(Lm||(Lm=Ig([`
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
`])));jp(Im||(Im=Ig(["",""],["",""])),Pg);var Lm,Im;const u2=jp`
  ${Pg}
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

  @media ${D.tablet} {
    html{
      font-size: 8px;
    }
  }
  @media ${D.mobile} {
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
`,d2=()=>a.jsx(a.Fragment,{children:a.jsxs(ey,{children:[a.jsx(u2,{}),a.jsxs(Q0,{children:[a.jsxs(K,{path:"/",element:a.jsx(ib,{}),children:[a.jsx(K,{index:!0,element:a.jsx(o4,{})}),a.jsxs(K,{path:"/movies",children:[a.jsx(K,{index:!0,element:a.jsx(bm,{})}),a.jsx(K,{path:":Search",element:a.jsx(bm,{})})]}),a.jsx(K,{path:"/watch",children:a.jsx(K,{path:":Movie_ID",element:a.jsx(N4,{})})}),a.jsx(K,{path:"/channel",children:a.jsx(K,{path:":Channel_name",element:a.jsx(Y4,{})})}),a.jsx(K,{path:"/feed",children:a.jsx(K,{path:":Category",element:a.jsx(Zl,{})})}),a.jsx(K,{path:"/subscription",children:a.jsx(K,{index:!0,element:a.jsx(o2,{})})}),a.jsx(K,{path:"/mypage",children:a.jsx(K,{index:!0,element:a.jsx(c2,{})})}),a.jsx(K,{path:"*",element:a.jsx(_b,{})})]}),a.jsx(K,{path:"/login",children:a.jsx(K,{index:!0,element:a.jsx(U4,{})})}),a.jsx(K,{path:"/join",children:a.jsx(K,{index:!0,element:a.jsx($4,{})})}),a.jsxs(K,{path:"/studio",element:a.jsx(vb,{}),children:[a.jsx(K,{path:":User_ID/videoupload",element:a.jsx(Cb,{})}),a.jsx(K,{path:":User_ID/dashboard",element:a.jsx(R4,{})}),a.jsx(K,{path:":User_ID/content",element:a.jsx(Sb,{})}),a.jsx(K,{path:":User_ID/comment",element:a.jsx(yb,{})})]})]})]})}),m2=tw({reducer:{auth:Sw,channel:Yw,header:hw,subscribers:Zw,savepop:Lw}});Vh(document.getElementById("root")).render(a.jsx(C.StrictMode,{children:a.jsx(j1,{store:m2,children:a.jsx(d2,{})})}));