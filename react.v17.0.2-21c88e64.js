/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(o,u){for(var a,c,i=n(o),f=1;f<arguments.length;f++){for(var s in a=Object(arguments[f]))t.call(a,s)&&(i[s]=a[s]);if(e){c=e(a);for(var l=0;l<c.length;l++)r.call(a,c[l])&&(i[c[l]]=a[c[l]])}}return i};function u(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}var a=u((function(e,t){var r=60103,n=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,a=60110,c=60112;t.Suspense=60113;var i=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;r=s("react.element"),n=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),u=s("react.provider"),a=s("react.context"),c=s("react.forward_ref"),t.Suspense=s("react.suspense"),i=s("react.memo"),f=s("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function v(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}function h(){}function m(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var _=m.prototype=new h;_.constructor=m,o(_,v.prototype),_.isPureReactComponent=!0;var b={current:null},g=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,u={},a=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)g.call(t,o)&&!E.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var f=Array(i),s=0;s<i;s++)f[s]=arguments[s+2];u.children=f}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:r,type:e,key:a,ref:c,props:u,_owner:b.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return a=a(i=e),e=""===u?"."+j(i,0):u,Array.isArray(a)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),C(a,t,o,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(i=0,u=""===u?".":u+":",Array.isArray(e))for(var f=0;f<e.length;f++){var s=u+j(c=e[f],f);i+=C(c,t,o,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),f=0;!(c=e.next()).done;)i+=C(c=c.value,t,o,s=u+j(c,f++),a);else if("object"===c)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function R(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function k(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function P(){var e=$.current;if(null===e)throw Error(p(321));return e}var x={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:R,forEach:function(e,t,r){R(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},t.Component=v,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var u=o({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=b.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in t)g.call(t,s)&&!E.hasOwnProperty(s)&&(u[s]=void 0===t[s]&&void 0!==f?f[s]:t[s])}var s=arguments.length-2;if(1===s)u.children=n;else if(1<s){f=Array(s);for(var l=0;l<s;l++)f[l]=arguments[l+2];u.children=f}return{$$typeof:r,type:e.type,key:a,ref:c,props:u,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:k}},t.memo=function(e,t){return{$$typeof:i,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"})),c=u((function(e){e.exports=a}));c.Children,c.Component,c.Fragment,c.Profiler,c.PureComponent,c.StrictMode,c.Suspense,c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,c.cloneElement,c.createContext;var i=c.createElement;c.createFactory,c.createRef,c.forwardRef,c.isValidElement,c.lazy,c.memo,c.useCallback,c.useContext,c.useDebugValue,c.useEffect,c.useImperativeHandle,c.useLayoutEffect,c.useMemo,c.useReducer,c.useRef;var f=c.useState;c.version;export{i as a,u as c,o,c as r,f as u};
