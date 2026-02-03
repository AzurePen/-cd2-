(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))f(j);new MutationObserver(j=>{for(const M of j)if(M.type==="childList")for(const v of M.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function N(j){const M={};return j.integrity&&(M.integrity=j.integrity),j.referrerPolicy&&(M.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?M.credentials="include":j.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function f(j){if(j.ep)return;j.ep=!0;const M=N(j);fetch(j.href,M)}})();var du={exports:{}},Tn={};var Df;function v0(){if(Df)return Tn;Df=1;var A=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function N(f,j,M){var v=null;if(M!==void 0&&(v=""+M),j.key!==void 0&&(v=""+j.key),"key"in j){M={};for(var V in j)V!=="key"&&(M[V]=j[V])}else M=j;return j=M.ref,{$$typeof:A,type:f,key:v,ref:j!==void 0?j:null,props:M}}return Tn.Fragment=z,Tn.jsx=N,Tn.jsxs=N,Tn}var Nf;function b0(){return Nf||(Nf=1,du.exports=v0()),du.exports}var s=b0(),fu={exports:{}},L={};var jf;function E0(){if(jf)return L;jf=1;var A=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),v=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),he=Symbol.iterator;function q(d){return d===null||typeof d!="object"?null:(d=he&&d[he]||d["@@iterator"],typeof d=="function"?d:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},je=Object.assign,ot={};function qe(d,D,B){this.props=d,this.context=D,this.refs=ot,this.updater=B||ae}qe.prototype.isReactComponent={},qe.prototype.setState=function(d,D){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,D,"setState")},qe.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Dt(){}Dt.prototype=qe.prototype;function He(d,D,B){this.props=d,this.context=D,this.refs=ot,this.updater=B||ae}var rt=He.prototype=new Dt;rt.constructor=He,je(rt,qe.prototype),rt.isPureReactComponent=!0;var Nt=Array.isArray;function Le(){}var ee={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function jt(d,D,B){var w=B.ref;return{$$typeof:A,type:d,key:D,ref:w!==void 0?w:null,props:B}}function Qa(d,D){return jt(d.type,D,d.props)}function Ct(d){return typeof d=="object"&&d!==null&&d.$$typeof===A}function Ye(d){var D={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(B){return D[B]})}var Ta=/\/+/g;function wt(d,D){return typeof d=="object"&&d!==null&&d.key!=null?Ye(""+d.key):D.toString(36)}function Et(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Le,Le):(d.status="pending",d.then(function(D){d.status==="pending"&&(d.status="fulfilled",d.value=D)},function(D){d.status==="pending"&&(d.status="rejected",d.reason=D)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function E(d,D,B,w,Y){var Z=typeof d;(Z==="undefined"||Z==="boolean")&&(d=null);var se=!1;if(d===null)se=!0;else switch(Z){case"bigint":case"string":case"number":se=!0;break;case"object":switch(d.$$typeof){case A:case z:se=!0;break;case k:return se=d._init,E(se(d._payload),D,B,w,Y)}}if(se)return Y=Y(d),se=w===""?"."+wt(d,0):w,Nt(Y)?(B="",se!=null&&(B=se.replace(Ta,"$&/")+"/"),E(Y,D,B,"",function(Bl){return Bl})):Y!=null&&(Ct(Y)&&(Y=Qa(Y,B+(Y.key==null||d&&d.key===Y.key?"":(""+Y.key).replace(Ta,"$&/")+"/")+se)),D.push(Y)),1;se=0;var Fe=w===""?".":w+":";if(Nt(d))for(var be=0;be<d.length;be++)w=d[be],Z=Fe+wt(w,be),se+=E(w,D,B,Z,Y);else if(be=q(d),typeof be=="function")for(d=be.call(d),be=0;!(w=d.next()).done;)w=w.value,Z=Fe+wt(w,be++),se+=E(w,D,B,Z,Y);else if(Z==="object"){if(typeof d.then=="function")return E(Et(d),D,B,w,Y);throw D=String(d),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return se}function C(d,D,B){if(d==null)return d;var w=[],Y=0;return E(d,w,"","",function(Z){return D.call(B,Z,Y++)}),w}function G(d){if(d._status===-1){var D=d._result;D=D(),D.then(function(B){(d._status===0||d._status===-1)&&(d._status=1,d._result=B)},function(B){(d._status===0||d._status===-1)&&(d._status=2,d._result=B)}),d._status===-1&&(d._status=0,d._result=D)}if(d._status===1)return d._result.default;throw d._result}var oe=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},me={map:C,forEach:function(d,D,B){C(d,function(){D.apply(this,arguments)},B)},count:function(d){var D=0;return C(d,function(){D++}),D},toArray:function(d){return C(d,function(D){return D})||[]},only:function(d){if(!Ct(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return L.Activity=H,L.Children=me,L.Component=qe,L.Fragment=N,L.Profiler=j,L.PureComponent=He,L.StrictMode=f,L.Suspense=m,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,L.__COMPILER_RUNTIME={__proto__:null,c:function(d){return ee.H.useMemoCache(d)}},L.cache=function(d){return function(){return d.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(d,D,B){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var w=je({},d.props),Y=d.key;if(D!=null)for(Z in D.key!==void 0&&(Y=""+D.key),D)!ke.call(D,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&D.ref===void 0||(w[Z]=D[Z]);var Z=arguments.length-2;if(Z===1)w.children=B;else if(1<Z){for(var se=Array(Z),Fe=0;Fe<Z;Fe++)se[Fe]=arguments[Fe+2];w.children=se}return jt(d.type,Y,w)},L.createContext=function(d){return d={$$typeof:v,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:M,_context:d},d},L.createElement=function(d,D,B){var w,Y={},Z=null;if(D!=null)for(w in D.key!==void 0&&(Z=""+D.key),D)ke.call(D,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&(Y[w]=D[w]);var se=arguments.length-2;if(se===1)Y.children=B;else if(1<se){for(var Fe=Array(se),be=0;be<se;be++)Fe[be]=arguments[be+2];Y.children=Fe}if(d&&d.defaultProps)for(w in se=d.defaultProps,se)Y[w]===void 0&&(Y[w]=se[w]);return jt(d,Z,Y)},L.createRef=function(){return{current:null}},L.forwardRef=function(d){return{$$typeof:V,render:d}},L.isValidElement=Ct,L.lazy=function(d){return{$$typeof:k,_payload:{_status:-1,_result:d},_init:G}},L.memo=function(d,D){return{$$typeof:g,type:d,compare:D===void 0?null:D}},L.startTransition=function(d){var D=ee.T,B={};ee.T=B;try{var w=d(),Y=ee.S;Y!==null&&Y(B,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(Le,oe)}catch(Z){oe(Z)}finally{D!==null&&B.types!==null&&(D.types=B.types),ee.T=D}},L.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},L.use=function(d){return ee.H.use(d)},L.useActionState=function(d,D,B){return ee.H.useActionState(d,D,B)},L.useCallback=function(d,D){return ee.H.useCallback(d,D)},L.useContext=function(d){return ee.H.useContext(d)},L.useDebugValue=function(){},L.useDeferredValue=function(d,D){return ee.H.useDeferredValue(d,D)},L.useEffect=function(d,D){return ee.H.useEffect(d,D)},L.useEffectEvent=function(d){return ee.H.useEffectEvent(d)},L.useId=function(){return ee.H.useId()},L.useImperativeHandle=function(d,D,B){return ee.H.useImperativeHandle(d,D,B)},L.useInsertionEffect=function(d,D){return ee.H.useInsertionEffect(d,D)},L.useLayoutEffect=function(d,D){return ee.H.useLayoutEffect(d,D)},L.useMemo=function(d,D){return ee.H.useMemo(d,D)},L.useOptimistic=function(d,D){return ee.H.useOptimistic(d,D)},L.useReducer=function(d,D,B){return ee.H.useReducer(d,D,B)},L.useRef=function(d){return ee.H.useRef(d)},L.useState=function(d){return ee.H.useState(d)},L.useSyncExternalStore=function(d,D,B){return ee.H.useSyncExternalStore(d,D,B)},L.useTransition=function(){return ee.H.useTransition()},L.version="19.2.3",L}var Cf;function Eu(){return Cf||(Cf=1,fu.exports=E0()),fu.exports}var I=Eu(),mu={exports:{}},An={},pu={exports:{}},hu={};var Bf;function M0(){return Bf||(Bf=1,(function(A){function z(E,C){var G=E.length;E.push(C);e:for(;0<G;){var oe=G-1>>>1,me=E[oe];if(0<j(me,C))E[oe]=C,E[G]=me,G=oe;else break e}}function N(E){return E.length===0?null:E[0]}function f(E){if(E.length===0)return null;var C=E[0],G=E.pop();if(G!==C){E[0]=G;e:for(var oe=0,me=E.length,d=me>>>1;oe<d;){var D=2*(oe+1)-1,B=E[D],w=D+1,Y=E[w];if(0>j(B,G))w<me&&0>j(Y,B)?(E[oe]=Y,E[w]=G,oe=w):(E[oe]=B,E[D]=G,oe=D);else if(w<me&&0>j(Y,G))E[oe]=Y,E[w]=G,oe=w;else break e}}return C}function j(E,C){var G=E.sortIndex-C.sortIndex;return G!==0?G:E.id-C.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;A.unstable_now=function(){return M.now()}}else{var v=Date,V=v.now();A.unstable_now=function(){return v.now()-V}}var m=[],g=[],k=1,H=null,he=3,q=!1,ae=!1,je=!1,ot=!1,qe=typeof setTimeout=="function"?setTimeout:null,Dt=typeof clearTimeout=="function"?clearTimeout:null,He=typeof setImmediate<"u"?setImmediate:null;function rt(E){for(var C=N(g);C!==null;){if(C.callback===null)f(g);else if(C.startTime<=E)f(g),C.sortIndex=C.expirationTime,z(m,C);else break;C=N(g)}}function Nt(E){if(je=!1,rt(E),!ae)if(N(m)!==null)ae=!0,Le||(Le=!0,Ye());else{var C=N(g);C!==null&&Et(Nt,C.startTime-E)}}var Le=!1,ee=-1,ke=5,jt=-1;function Qa(){return ot?!0:!(A.unstable_now()-jt<ke)}function Ct(){if(ot=!1,Le){var E=A.unstable_now();jt=E;var C=!0;try{e:{ae=!1,je&&(je=!1,Dt(ee),ee=-1),q=!0;var G=he;try{t:{for(rt(E),H=N(m);H!==null&&!(H.expirationTime>E&&Qa());){var oe=H.callback;if(typeof oe=="function"){H.callback=null,he=H.priorityLevel;var me=oe(H.expirationTime<=E);if(E=A.unstable_now(),typeof me=="function"){H.callback=me,rt(E),C=!0;break t}H===N(m)&&f(m),rt(E)}else f(m);H=N(m)}if(H!==null)C=!0;else{var d=N(g);d!==null&&Et(Nt,d.startTime-E),C=!1}}break e}finally{H=null,he=G,q=!1}C=void 0}}finally{C?Ye():Le=!1}}}var Ye;if(typeof He=="function")Ye=function(){He(Ct)};else if(typeof MessageChannel<"u"){var Ta=new MessageChannel,wt=Ta.port2;Ta.port1.onmessage=Ct,Ye=function(){wt.postMessage(null)}}else Ye=function(){qe(Ct,0)};function Et(E,C){ee=qe(function(){E(A.unstable_now())},C)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(E){E.callback=null},A.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<E?Math.floor(1e3/E):5},A.unstable_getCurrentPriorityLevel=function(){return he},A.unstable_next=function(E){switch(he){case 1:case 2:case 3:var C=3;break;default:C=he}var G=he;he=C;try{return E()}finally{he=G}},A.unstable_requestPaint=function(){ot=!0},A.unstable_runWithPriority=function(E,C){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var G=he;he=E;try{return C()}finally{he=G}},A.unstable_scheduleCallback=function(E,C,G){var oe=A.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?oe+G:oe):G=oe,E){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=G+me,E={id:k++,callback:C,priorityLevel:E,startTime:G,expirationTime:me,sortIndex:-1},G>oe?(E.sortIndex=G,z(g,E),N(m)===null&&E===N(g)&&(je?(Dt(ee),ee=-1):je=!0,Et(Nt,G-oe))):(E.sortIndex=me,z(m,E),ae||q||(ae=!0,Le||(Le=!0,Ye()))),E},A.unstable_shouldYield=Qa,A.unstable_wrapCallback=function(E){var C=he;return function(){var G=he;he=C;try{return E.apply(this,arguments)}finally{he=G}}}})(hu)),hu}var Vf;function _0(){return Vf||(Vf=1,pu.exports=M0()),pu.exports}var xu={exports:{}},Ue={};var zf;function T0(){if(zf)return Ue;zf=1;var A=Eu();function z(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)g+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(){}var f={d:{f:N,r:function(){throw Error(z(522))},D:N,C:N,L:N,m:N,X:N,S:N,M:N},p:0,findDOMNode:null},j=Symbol.for("react.portal");function M(m,g,k){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:H==null?null:""+H,children:m,containerInfo:g,implementation:k}}var v=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Ue.createPortal=function(m,g){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(z(299));return M(m,g,null,k)},Ue.flushSync=function(m){var g=v.T,k=f.p;try{if(v.T=null,f.p=2,m)return m()}finally{v.T=g,f.p=k,f.d.f()}},Ue.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,f.d.C(m,g))},Ue.prefetchDNS=function(m){typeof m=="string"&&f.d.D(m)},Ue.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var k=g.as,H=V(k,g.crossOrigin),he=typeof g.integrity=="string"?g.integrity:void 0,q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;k==="style"?f.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:H,integrity:he,fetchPriority:q}):k==="script"&&f.d.X(m,{crossOrigin:H,integrity:he,fetchPriority:q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ue.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var k=V(g.as,g.crossOrigin);f.d.M(m,{crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&f.d.M(m)},Ue.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var k=g.as,H=V(k,g.crossOrigin);f.d.L(m,k,{crossOrigin:H,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ue.preloadModule=function(m,g){if(typeof m=="string")if(g){var k=V(g.as,g.crossOrigin);f.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else f.d.m(m)},Ue.requestFormReset=function(m){f.d.r(m)},Ue.unstable_batchedUpdates=function(m,g){return m(g)},Ue.useFormState=function(m,g,k){return v.H.useFormState(m,g,k)},Ue.useFormStatus=function(){return v.H.useHostTransitionStatus()},Ue.version="19.2.3",Ue}var Rf;function A0(){if(Rf)return xu.exports;Rf=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(z){console.error(z)}}return A(),xu.exports=T0(),xu.exports}var wf;function D0(){if(wf)return An;wf=1;var A=_0(),z=Eu(),N=A0();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function V(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(M(e)!==e)throw Error(f(188))}function g(e){var t=e.alternate;if(!t){if(t=M(e),t===null)throw Error(f(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return m(n),e;if(i===l)return m(n),t;i=i.sibling}throw Error(f(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,u=n.child;u;){if(u===a){c=!0,a=n,l=i;break}if(u===l){c=!0,l=n,a=i;break}u=u.sibling}if(!c){for(u=i.child;u;){if(u===a){c=!0,a=i,l=n;break}if(u===l){c=!0,l=i,a=n;break}u=u.sibling}if(!c)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var H=Object.assign,he=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),ae=Symbol.for("react.portal"),je=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),qe=Symbol.for("react.profiler"),Dt=Symbol.for("react.consumer"),He=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),Nt=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),jt=Symbol.for("react.activity"),Qa=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=Ct&&e[Ct]||e["@@iterator"],typeof e=="function"?e:null)}var Ta=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ta?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case je:return"Fragment";case qe:return"Profiler";case ot:return"StrictMode";case Nt:return"Suspense";case Le:return"SuspenseList";case jt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ae:return"Portal";case He:return e.displayName||"Context";case Dt:return(e._context.displayName||"Context")+".Consumer";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var Et=Array.isArray,E=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},oe=[],me=-1;function d(e){return{current:e}}function D(e){0>me||(e.current=oe[me],oe[me]=null,me--)}function B(e,t){me++,oe[me]=e.current,e.current=t}var w=d(null),Y=d(null),Z=d(null),se=d(null);function Fe(e,t){switch(B(Z,t),B(Y,e),B(w,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kd(t),e=Wd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(w),B(w,e)}function be(){D(w),D(Y),D(Z)}function Bl(e){e.memoizedState!==null&&B(se,e);var t=w.current,a=Wd(t,e.type);t!==a&&(B(Y,e),B(w,a))}function Dn(e){Y.current===e&&(D(w),D(Y)),se.current===e&&(D(se),bn._currentValue=G)}var Ji,_u;function Aa(e){if(Ji===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ji=t&&t[1]||"",_u=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ji+e+_u}var Zi=!1;function Ki(e,t){if(!e||Zi)return"";Zi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(S){var y=S}Reflect.construct(e,[],T)}else{try{T.call()}catch(S){y=S}e.call(T.prototype)}}else{try{throw Error()}catch(S){y=S}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],u=i[1];if(c&&u){var o=c.split(`
`),x=u.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===x.length)for(l=o.length-1,n=x.length-1;1<=l&&0<=n&&o[l]!==x[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==x[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==x[n]){var b=`
`+o[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=l&&0<=n);break}}}finally{Zi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Aa(a):""}function If(e,t){switch(e.tag){case 26:case 27:case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return e.child!==t&&t!==null?Aa("Suspense Fallback"):Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 15:return Ki(e.type,!1);case 11:return Ki(e.type.render,!1);case 1:return Ki(e.type,!0);case 31:return Aa("Activity");default:return""}}function Tu(e){try{var t="",a=null;do t+=If(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Wi=Object.prototype.hasOwnProperty,Ii=A.unstable_scheduleCallback,$i=A.unstable_cancelCallback,$f=A.unstable_shouldYield,Pf=A.unstable_requestPaint,$e=A.unstable_now,em=A.unstable_getCurrentPriorityLevel,Au=A.unstable_ImmediatePriority,Du=A.unstable_UserBlockingPriority,Nn=A.unstable_NormalPriority,tm=A.unstable_LowPriority,Nu=A.unstable_IdlePriority,am=A.log,lm=A.unstable_setDisableYieldValue,Vl=null,Pe=null;function ea(e){if(typeof am=="function"&&lm(e),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(Vl,e)}catch{}}var et=Math.clz32?Math.clz32:sm,nm=Math.log,im=Math.LN2;function sm(e){return e>>>=0,e===0?32:31-(nm(e)/im|0)|0}var jn=256,Cn=262144,Bn=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=Da(l):(c&=u,c!==0?n=Da(c):a||(a=u&~e,a!==0&&(n=Da(a))))):(u=l&~i,u!==0?n=Da(u):c!==0?n=Da(c):a||(a=l&~e,a!==0&&(n=Da(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ju(){var e=Bn;return Bn<<=1,(Bn&62914560)===0&&(Bn=4194304),e}function Pi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Rl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function um(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,o=e.expirationTimes,x=e.hiddenUpdates;for(a=c&~a;0<a;){var b=31-et(a),T=1<<b;u[b]=0,o[b]=-1;var y=x[b];if(y!==null)for(x[b]=null,b=0;b<y.length;b++){var S=y[b];S!==null&&(S.lane&=-536870913)}a&=~T}l!==0&&Cu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Cu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-et(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Bu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-et(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Vu(e,t){var a=t&-t;return a=(a&42)!==0?1:es(a),(a&(e.suspendedLanes|t))!==0?0:a}function es(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zu(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:vf(e.type))}function Ru(e,t){var a=C.p;try{return C.p=e,t()}finally{C.p=a}}var ta=Math.random().toString(36).slice(2),Ve="__reactFiber$"+ta,Xe="__reactProps$"+ta,Ja="__reactContainer$"+ta,as="__reactEvents$"+ta,om="__reactListeners$"+ta,rm="__reactHandles$"+ta,wu="__reactResources$"+ta,wl="__reactMarker$"+ta;function ls(e){delete e[Ve],delete e[Xe],delete e[as],delete e[om],delete e[rm]}function Za(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ja]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=lf(e);e!==null;){if(a=e[Ve])return a;e=lf(e)}return t}e=a,a=e.parentNode}return null}function Ka(e){if(e=e[Ve]||e[Ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ol(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function Wa(e){var t=e[wu];return t||(t=e[wu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[wl]=!0}var Ou=new Set,Hu={};function Na(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(Hu[e]=t,e=0;e<t.length;e++)Ou.add(t[e])}var dm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uu={},qu={};function fm(e){return Wi.call(qu,e)?!0:Wi.call(Uu,e)?!1:dm.test(e)?qu[e]=!0:(Uu[e]=!0,!1)}function zn(e,t,a){if(fm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Rn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ot(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ns(e){if(!e._valueTracker){var t=Fu(e)?"checked":"value";e._valueTracker=mm(e,t,""+e[t])}}function Gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Fu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pm=/[\n"\\]/g;function ft(e){return e.replace(pm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function is(e,t,a,l,n,i,c,u){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ss(e,c,dt(t)):a!=null?ss(e,c,dt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+dt(u):e.removeAttribute("name")}function Lu(e,t,a,l,n,i,c,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ns(e);return}a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),ns(e)}function ss(e,t,a){t==="number"&&wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ku(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function Yu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(f(92));if(Et(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ns(e)}function Pa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var hm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||hm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Qu(e,t,a){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Xu(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Xu(e,i,t[i])}function cs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function On(e){return gm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ht(){}var us=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,tl=null;function Ju(e){var t=Ka(e);if(t&&(e=t.stateNode)){var a=e[Xe]||null;e:switch(e=t.stateNode,t.type){case"input":if(is(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Xe]||null;if(!n)throw Error(f(90));is(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Gu(l)}break e;case"textarea":ku(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var rs=!1;function Zu(e,t,a){if(rs)return e(t,a);rs=!0;try{var l=e(t);return l}finally{if(rs=!1,(el!==null||tl!==null)&&(Mi(),el&&(t=el,e=tl,tl=el=null,Ju(t),e)))for(t=0;t<e.length;t++)Ju(e[t])}}function Hl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Xe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(f(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ds=!1;if(Ut)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{ds=!1}var aa=null,fs=null,Hn=null;function Ku(){if(Hn)return Hn;var e,t=fs,a=t.length,l,n="value"in aa?aa.value:aa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Hn=n.slice(e,1<l?1-l:void 0)}function Un(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Wu(){return!1}function Qe(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qn:Wu,this.isPropagationStopped=Wu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=Qe(ja),ql=H({},ja,{view:0,detail:0}),ym=Qe(ql),ms,ps,Fl,Gn=H({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(ms=e.screenX-Fl.screenX,ps=e.screenY-Fl.screenY):ps=ms=0,Fl=e),ms)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),Iu=Qe(Gn),Sm=H({},Gn,{dataTransfer:0}),vm=Qe(Sm),bm=H({},ql,{relatedTarget:0}),hs=Qe(bm),Em=H({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Mm=Qe(Em),_m=H({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tm=Qe(_m),Am=H({},ja,{data:0}),$u=Qe(Am),Dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jm[e])?!!t[e]:!1}function xs(){return Cm}var Bm=H({},ql,{key:function(e){if(e.key){var t=Dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Un(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?Un(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Un(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vm=Qe(Bm),zm=H({},Gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=Qe(zm),Rm=H({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),wm=Qe(Rm),Om=H({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hm=Qe(Om),Um=H({},Gn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qm=Qe(Um),Fm=H({},ja,{newState:0,oldState:0}),Gm=Qe(Fm),Lm=[9,13,27,32],gs=Ut&&"CompositionEvent"in window,Gl=null;Ut&&"documentMode"in document&&(Gl=document.documentMode);var km=Ut&&"TextEvent"in window&&!Gl,eo=Ut&&(!gs||Gl&&8<Gl&&11>=Gl),to=" ",ao=!1;function lo(e,t){switch(e){case"keyup":return Lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function no(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var al=!1;function Ym(e,t){switch(e){case"compositionend":return no(t);case"keypress":return t.which!==32?null:(ao=!0,to);case"textInput":return e=t.data,e===to&&ao?null:e;default:return null}}function Xm(e,t){if(al)return e==="compositionend"||!gs&&lo(e,t)?(e=Ku(),Hn=fs=aa=null,al=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eo&&t.locale!=="ko"?null:t.data;default:return null}}var Qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qm[e.type]:t==="textarea"}function so(e,t,a,l){el?tl?tl.push(l):tl=[l]:el=l,t=Ci(t,"onChange"),0<t.length&&(a=new Fn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Ll=null,kl=null;function Jm(e){kd(e,0)}function Ln(e){var t=Ol(e);if(Gu(t))return e}function co(e,t){if(e==="change")return t}var uo=!1;if(Ut){var ys;if(Ut){var Ss="oninput"in document;if(!Ss){var oo=document.createElement("div");oo.setAttribute("oninput","return;"),Ss=typeof oo.oninput=="function"}ys=Ss}else ys=!1;uo=ys&&(!document.documentMode||9<document.documentMode)}function ro(){Ll&&(Ll.detachEvent("onpropertychange",fo),kl=Ll=null)}function fo(e){if(e.propertyName==="value"&&Ln(kl)){var t=[];so(t,kl,e,os(e)),Zu(Jm,t)}}function Zm(e,t,a){e==="focusin"?(ro(),Ll=t,kl=a,Ll.attachEvent("onpropertychange",fo)):e==="focusout"&&ro()}function Km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ln(kl)}function Wm(e,t){if(e==="click")return Ln(t)}function Im(e,t){if(e==="input"||e==="change")return Ln(t)}function $m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:$m;function Yl(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Wi.call(t,n)||!tt(e[n],t[n]))return!1}return!0}function mo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function po(e,t){var a=mo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mo(a)}}function ho(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ho(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=wn(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Pm=Ut&&"documentMode"in document&&11>=document.documentMode,ll=null,bs=null,Xl=null,Es=!1;function go(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Es||ll==null||ll!==wn(l)||(l=ll,"selectionStart"in l&&vs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xl&&Yl(Xl,l)||(Xl=l,l=Ci(bs,"onSelect"),0<l.length&&(t=new Fn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ll)))}function Ca(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var nl={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Ms={},yo={};Ut&&(yo=document.createElement("div").style,"AnimationEvent"in window||(delete nl.animationend.animation,delete nl.animationiteration.animation,delete nl.animationstart.animation),"TransitionEvent"in window||delete nl.transitionend.transition);function Ba(e){if(Ms[e])return Ms[e];if(!nl[e])return e;var t=nl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in yo)return Ms[e]=t[a];return e}var So=Ba("animationend"),vo=Ba("animationiteration"),bo=Ba("animationstart"),ep=Ba("transitionrun"),tp=Ba("transitionstart"),ap=Ba("transitioncancel"),Eo=Ba("transitionend"),Mo=new Map,_s="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_s.push("scrollEnd");function Mt(e,t){Mo.set(e,t),Na(t,[e])}var kn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mt=[],il=0,Ts=0;function Yn(){for(var e=il,t=Ts=il=0;t<e;){var a=mt[t];mt[t++]=null;var l=mt[t];mt[t++]=null;var n=mt[t];mt[t++]=null;var i=mt[t];if(mt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&_o(a,n,i)}}function Xn(e,t,a,l){mt[il++]=e,mt[il++]=t,mt[il++]=a,mt[il++]=l,Ts|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function As(e,t,a,l){return Xn(e,t,a,l),Qn(e)}function Va(e,t){return Xn(e,null,null,t),Qn(e)}function _o(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-et(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Qn(e){if(50<pn)throw pn=0,wc=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={};function lp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,a,l){return new lp(e,t,a,l)}function Ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,t){var a=e.alternate;return a===null?(a=at(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function To(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Jn(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")Ds(e)&&(c=1);else if(typeof e=="string")c=u0(e,a,w.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case jt:return e=at(31,a,t,n),e.elementType=jt,e.lanes=i,e;case je:return za(a.children,n,i,t);case ot:c=8,n|=24;break;case qe:return e=at(12,a,t,n|2),e.elementType=qe,e.lanes=i,e;case Nt:return e=at(13,a,t,n),e.elementType=Nt,e.lanes=i,e;case Le:return e=at(19,a,t,n),e.elementType=Le,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case He:c=10;break e;case Dt:c=9;break e;case rt:c=11;break e;case ee:c=14;break e;case ke:c=16,l=null;break e}c=29,a=Error(f(130,e===null?"null":typeof e,"")),l=null}return t=at(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function za(e,t,a,l){return e=at(7,e,l,t),e.lanes=a,e}function Ns(e,t,a){return e=at(6,e,null,t),e.lanes=a,e}function Ao(e){var t=at(18,null,null,0);return t.stateNode=e,t}function js(e,t,a){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Do=new WeakMap;function pt(e,t){if(typeof e=="object"&&e!==null){var a=Do.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Tu(t)},Do.set(e,t),t)}return{value:e,source:t,stack:Tu(t)}}var cl=[],ul=0,Zn=null,Ql=0,ht=[],xt=0,la=null,Bt=1,Vt="";function Ft(e,t){cl[ul++]=Ql,cl[ul++]=Zn,Zn=e,Ql=t}function No(e,t,a){ht[xt++]=Bt,ht[xt++]=Vt,ht[xt++]=la,la=e;var l=Bt;e=Vt;var n=32-et(l)-1;l&=~(1<<n),a+=1;var i=32-et(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Bt=1<<32-et(t)+n|a<<n|l,Vt=i+e}else Bt=1<<i|a<<n|l,Vt=e}function Cs(e){e.return!==null&&(Ft(e,1),No(e,1,0))}function Bs(e){for(;e===Zn;)Zn=cl[--ul],cl[ul]=null,Ql=cl[--ul],cl[ul]=null;for(;e===la;)la=ht[--xt],ht[xt]=null,Vt=ht[--xt],ht[xt]=null,Bt=ht[--xt],ht[xt]=null}function jo(e,t){ht[xt++]=Bt,ht[xt++]=Vt,ht[xt++]=la,Bt=t.id,Vt=t.overflow,la=e}var ze=null,xe=null,te=!1,na=null,gt=!1,Vs=Error(f(519));function ia(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jl(pt(t,e)),Vs}function Co(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ve]=e,t[Xe]=l,a){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(a=0;a<xn.length;a++)W(xn[a],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Lu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Yu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Jd(t.textContent,a)?(l.popover!=null&&(W("beforetoggle",t),W("toggle",t)),l.onScroll!=null&&W("scroll",t),l.onScrollEnd!=null&&W("scrollend",t),l.onClick!=null&&(t.onclick=Ht),t=!0):t=!1,t||ia(e,!0)}function Bo(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:ze=ze.return}}function ol(e){if(e!==ze)return!1;if(!te)return Bo(e),te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wc(e.type,e.memoizedProps)),a=!a),a&&xe&&ia(e),Bo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));xe=af(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));xe=af(e)}else t===27?(t=xe,Sa(e.type)?(e=tu,tu=null,xe=e):xe=t):xe=ze?St(e.stateNode.nextSibling):null;return!0}function Ra(){xe=ze=null,te=!1}function zs(){var e=na;return e!==null&&(We===null?We=e:We.push.apply(We,e),na=null),e}function Jl(e){na===null?na=[e]:na.push(e)}var Rs=d(null),wa=null,Gt=null;function sa(e,t,a){B(Rs,t._currentValue),t._currentValue=a}function Lt(e){e._currentValue=Rs.current,D(Rs)}function ws(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Os(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var o=0;o<t.length;o++)if(u.context===t[o]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),ws(i.return,a,e),l||(c=null);break e}i=u.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(f(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),ws(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function rl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(f(387));if(c=c.memoizedProps,c!==null){var u=n.type;tt(n.pendingProps.value,c.value)||(e!==null?e.push(u):e=[u])}}else if(n===se.current){if(c=n.alternate,c===null)throw Error(f(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(bn):e=[bn])}n=n.return}e!==null&&Os(t,e,a,l),t.flags|=262144}function Kn(e){for(e=e.firstContext;e!==null;){if(!tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){wa=e,Gt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Re(e){return Vo(wa,e)}function Wn(e,t){return wa===null&&Oa(e),Vo(e,t)}function Vo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Gt===null){if(e===null)throw Error(f(308));Gt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gt=Gt.next=t;return a}var np=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ip=A.unstable_scheduleCallback,sp=A.unstable_NormalPriority,_e={$$typeof:He,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hs(){return{controller:new np,data:new Map,refCount:0}}function Zl(e){e.refCount--,e.refCount===0&&ip(sp,function(){e.controller.abort()})}var Kl=null,Us=0,dl=0,fl=null;function cp(e,t){if(Kl===null){var a=Kl=[];Us=0,dl=Gc(),fl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Us++,t.then(zo,zo),t}function zo(){if(--Us===0&&Kl!==null){fl!==null&&(fl.status="fulfilled");var e=Kl;Kl=null,dl=0,fl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function up(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ro=E.S;E.S=function(e,t){gd=$e(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&cp(e,t),Ro!==null&&Ro(e,t)};var Ha=d(null);function qs(){var e=Ha.current;return e!==null?e:pe.pooledCache}function In(e,t){t===null?B(Ha,Ha.current):B(Ha,t.pool)}function wo(){var e=qs();return e===null?null:{parent:_e._currentValue,pool:e}}var ml=Error(f(460)),Fs=Error(f(474)),$n=Error(f(542)),Pn={then:function(){}};function Oo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ho(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ht,Ht),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qo(e),e;default:if(typeof t.status=="string")t.then(Ht,Ht);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qo(e),e}throw qa=t,ml}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qa=a,ml):a}}var qa=null;function Uo(){if(qa===null)throw Error(f(459));var e=qa;return qa=null,e}function qo(e){if(e===ml||e===$n)throw Error(f(483))}var pl=null,Wl=0;function ei(e){var t=Wl;return Wl+=1,pl===null&&(pl=[]),Ho(pl,e,t)}function Il(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ti(e,t){throw t.$$typeof===he?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fo(e){function t(p,r){if(e){var h=p.deletions;h===null?(p.deletions=[r],p.flags|=16):h.push(r)}}function a(p,r){if(!e)return null;for(;r!==null;)t(p,r),r=r.sibling;return null}function l(p){for(var r=new Map;p!==null;)p.key!==null?r.set(p.key,p):r.set(p.index,p),p=p.sibling;return r}function n(p,r){return p=qt(p,r),p.index=0,p.sibling=null,p}function i(p,r,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<r?(p.flags|=67108866,r):h):(p.flags|=67108866,r)):(p.flags|=1048576,r)}function c(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function u(p,r,h,_){return r===null||r.tag!==6?(r=Ns(h,p.mode,_),r.return=p,r):(r=n(r,h),r.return=p,r)}function o(p,r,h,_){var U=h.type;return U===je?b(p,r,h.props.children,_,h.key):r!==null&&(r.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ke&&Ua(U)===r.type)?(r=n(r,h.props),Il(r,h),r.return=p,r):(r=Jn(h.type,h.key,h.props,null,p.mode,_),Il(r,h),r.return=p,r)}function x(p,r,h,_){return r===null||r.tag!==4||r.stateNode.containerInfo!==h.containerInfo||r.stateNode.implementation!==h.implementation?(r=js(h,p.mode,_),r.return=p,r):(r=n(r,h.children||[]),r.return=p,r)}function b(p,r,h,_,U){return r===null||r.tag!==7?(r=za(h,p.mode,_,U),r.return=p,r):(r=n(r,h),r.return=p,r)}function T(p,r,h){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Ns(""+r,p.mode,h),r.return=p,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case q:return h=Jn(r.type,r.key,r.props,null,p.mode,h),Il(h,r),h.return=p,h;case ae:return r=js(r,p.mode,h),r.return=p,r;case ke:return r=Ua(r),T(p,r,h)}if(Et(r)||Ye(r))return r=za(r,p.mode,h,null),r.return=p,r;if(typeof r.then=="function")return T(p,ei(r),h);if(r.$$typeof===He)return T(p,Wn(p,r),h);ti(p,r)}return null}function y(p,r,h,_){var U=r!==null?r.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return U!==null?null:u(p,r,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case q:return h.key===U?o(p,r,h,_):null;case ae:return h.key===U?x(p,r,h,_):null;case ke:return h=Ua(h),y(p,r,h,_)}if(Et(h)||Ye(h))return U!==null?null:b(p,r,h,_,null);if(typeof h.then=="function")return y(p,r,ei(h),_);if(h.$$typeof===He)return y(p,r,Wn(p,h),_);ti(p,h)}return null}function S(p,r,h,_,U){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return p=p.get(h)||null,u(r,p,""+_,U);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case q:return p=p.get(_.key===null?h:_.key)||null,o(r,p,_,U);case ae:return p=p.get(_.key===null?h:_.key)||null,x(r,p,_,U);case ke:return _=Ua(_),S(p,r,h,_,U)}if(Et(_)||Ye(_))return p=p.get(h)||null,b(r,p,_,U,null);if(typeof _.then=="function")return S(p,r,h,ei(_),U);if(_.$$typeof===He)return S(p,r,h,Wn(r,_),U);ti(r,_)}return null}function R(p,r,h,_){for(var U=null,le=null,O=r,Q=r=0,P=null;O!==null&&Q<h.length;Q++){O.index>Q?(P=O,O=null):P=O.sibling;var ne=y(p,O,h[Q],_);if(ne===null){O===null&&(O=P);break}e&&O&&ne.alternate===null&&t(p,O),r=i(ne,r,Q),le===null?U=ne:le.sibling=ne,le=ne,O=P}if(Q===h.length)return a(p,O),te&&Ft(p,Q),U;if(O===null){for(;Q<h.length;Q++)O=T(p,h[Q],_),O!==null&&(r=i(O,r,Q),le===null?U=O:le.sibling=O,le=O);return te&&Ft(p,Q),U}for(O=l(O);Q<h.length;Q++)P=S(O,p,Q,h[Q],_),P!==null&&(e&&P.alternate!==null&&O.delete(P.key===null?Q:P.key),r=i(P,r,Q),le===null?U=P:le.sibling=P,le=P);return e&&O.forEach(function(_a){return t(p,_a)}),te&&Ft(p,Q),U}function F(p,r,h,_){if(h==null)throw Error(f(151));for(var U=null,le=null,O=r,Q=r=0,P=null,ne=h.next();O!==null&&!ne.done;Q++,ne=h.next()){O.index>Q?(P=O,O=null):P=O.sibling;var _a=y(p,O,ne.value,_);if(_a===null){O===null&&(O=P);break}e&&O&&_a.alternate===null&&t(p,O),r=i(_a,r,Q),le===null?U=_a:le.sibling=_a,le=_a,O=P}if(ne.done)return a(p,O),te&&Ft(p,Q),U;if(O===null){for(;!ne.done;Q++,ne=h.next())ne=T(p,ne.value,_),ne!==null&&(r=i(ne,r,Q),le===null?U=ne:le.sibling=ne,le=ne);return te&&Ft(p,Q),U}for(O=l(O);!ne.done;Q++,ne=h.next())ne=S(O,p,Q,ne.value,_),ne!==null&&(e&&ne.alternate!==null&&O.delete(ne.key===null?Q:ne.key),r=i(ne,r,Q),le===null?U=ne:le.sibling=ne,le=ne);return e&&O.forEach(function(S0){return t(p,S0)}),te&&Ft(p,Q),U}function fe(p,r,h,_){if(typeof h=="object"&&h!==null&&h.type===je&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case q:e:{for(var U=h.key;r!==null;){if(r.key===U){if(U=h.type,U===je){if(r.tag===7){a(p,r.sibling),_=n(r,h.props.children),_.return=p,p=_;break e}}else if(r.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ke&&Ua(U)===r.type){a(p,r.sibling),_=n(r,h.props),Il(_,h),_.return=p,p=_;break e}a(p,r);break}else t(p,r);r=r.sibling}h.type===je?(_=za(h.props.children,p.mode,_,h.key),_.return=p,p=_):(_=Jn(h.type,h.key,h.props,null,p.mode,_),Il(_,h),_.return=p,p=_)}return c(p);case ae:e:{for(U=h.key;r!==null;){if(r.key===U)if(r.tag===4&&r.stateNode.containerInfo===h.containerInfo&&r.stateNode.implementation===h.implementation){a(p,r.sibling),_=n(r,h.children||[]),_.return=p,p=_;break e}else{a(p,r);break}else t(p,r);r=r.sibling}_=js(h,p.mode,_),_.return=p,p=_}return c(p);case ke:return h=Ua(h),fe(p,r,h,_)}if(Et(h))return R(p,r,h,_);if(Ye(h)){if(U=Ye(h),typeof U!="function")throw Error(f(150));return h=U.call(h),F(p,r,h,_)}if(typeof h.then=="function")return fe(p,r,ei(h),_);if(h.$$typeof===He)return fe(p,r,Wn(p,h),_);ti(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,r!==null&&r.tag===6?(a(p,r.sibling),_=n(r,h),_.return=p,p=_):(a(p,r),_=Ns(h,p.mode,_),_.return=p,p=_),c(p)):a(p,r)}return function(p,r,h,_){try{Wl=0;var U=fe(p,r,h,_);return pl=null,U}catch(O){if(O===ml||O===$n)throw O;var le=at(29,O,null,p.mode);return le.lanes=_,le.return=p,le}}}var Fa=Fo(!0),Go=Fo(!1),ca=!1;function Gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ls(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ie&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Qn(e),_o(e,null,a),t}return Xn(e,l,t,a),Qn(e)}function $l(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bu(e,a)}}function ks(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ys=!1;function Pl(){if(Ys){var e=fl;if(e!==null)throw e}}function en(e,t,a,l){Ys=!1;var n=e.updateQueue;ca=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var o=u,x=o.next;o.next=null,c===null?i=x:c.next=x,c=o;var b=e.alternate;b!==null&&(b=b.updateQueue,u=b.lastBaseUpdate,u!==c&&(u===null?b.firstBaseUpdate=x:u.next=x,b.lastBaseUpdate=o))}if(i!==null){var T=n.baseState;c=0,b=x=o=null,u=i;do{var y=u.lane&-536870913,S=y!==u.lane;if(S?($&y)===y:(l&y)===y){y!==0&&y===dl&&(Ys=!0),b!==null&&(b=b.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var R=e,F=u;y=t;var fe=a;switch(F.tag){case 1:if(R=F.payload,typeof R=="function"){T=R.call(fe,T,y);break e}T=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=F.payload,y=typeof R=="function"?R.call(fe,T,y):R,y==null)break e;T=H({},T,y);break e;case 2:ca=!0}}y=u.callback,y!==null&&(e.flags|=64,S&&(e.flags|=8192),S=n.callbacks,S===null?n.callbacks=[y]:S.push(y))}else S={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},b===null?(x=b=S,o=T):b=b.next=S,c|=y;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;S=u,u=S.next,S.next=null,n.lastBaseUpdate=S,n.shared.pending=null}}while(!0);b===null&&(o=T),n.baseState=o,n.firstBaseUpdate=x,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),pa|=c,e.lanes=c,e.memoizedState=T}}function Lo(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function ko(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Lo(a[e],t)}var hl=d(null),ai=d(0);function Yo(e,t){e=It,B(ai,e),B(hl,t),It=e|t.baseLanes}function Xs(){B(ai,It),B(hl,hl.current)}function Qs(){It=ai.current,D(hl),D(ai)}var lt=d(null),yt=null;function ra(e){var t=e.alternate;B(Ee,Ee.current&1),B(lt,e),yt===null&&(t===null||hl.current!==null||t.memoizedState!==null)&&(yt=e)}function Js(e){B(Ee,Ee.current),B(lt,e),yt===null&&(yt=e)}function Xo(e){e.tag===22?(B(Ee,Ee.current),B(lt,e),yt===null&&(yt=e)):da()}function da(){B(Ee,Ee.current),B(lt,lt.current)}function nt(e){D(lt),yt===e&&(yt=null),D(Ee)}var Ee=d(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pc(a)||eu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kt=0,X=null,re=null,Te=null,ni=!1,xl=!1,Ga=!1,ii=0,tn=0,gl=null,op=0;function Se(){throw Error(f(321))}function Zs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!tt(e[a],t[a]))return!1;return!0}function Ks(e,t,a,l,n,i){return kt=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Nr:rc,Ga=!1,i=a(l,n),Ga=!1,xl&&(i=Jo(t,a,l,n)),Qo(e),i}function Qo(e){E.H=nn;var t=re!==null&&re.next!==null;if(kt=0,Te=re=X=null,ni=!1,tn=0,gl=null,t)throw Error(f(300));e===null||Ae||(e=e.dependencies,e!==null&&Kn(e)&&(Ae=!0))}function Jo(e,t,a,l){X=e;var n=0;do{if(xl&&(gl=null),tn=0,xl=!1,25<=n)throw Error(f(301));if(n+=1,Te=re=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}E.H=jr,i=t(a,l)}while(xl);return i}function rp(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?an(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(X.flags|=1024),t}function Ws(){var e=ii!==0;return ii=0,e}function Is(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function $s(e){if(ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ni=!1}kt=0,Te=re=X=null,xl=!1,tn=ii=0,gl=null}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?X.memoizedState=Te=e:Te=Te.next=e,Te}function Me(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Te===null?X.memoizedState:Te.next;if(t!==null)Te=t,re=e;else{if(e===null)throw X.alternate===null?Error(f(467)):Error(f(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Te===null?X.memoizedState=Te=e:Te=Te.next=e}return Te}function si(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var t=tn;return tn+=1,gl===null&&(gl=[]),e=Ho(gl,e,t),t=X,(Te===null?t.memoizedState:Te.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Nr:rc),e}function ci(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===He)return Re(e)}throw Error(f(438,String(e)))}function Ps(e){var t=null,a=X.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=X.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=si(),X.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Qa;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=Me();return ec(t,re,e)}function ec(e,t,a){var l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=c=null,o=null,x=t,b=!1;do{var T=x.lane&-536870913;if(T!==x.lane?($&T)===T:(kt&T)===T){var y=x.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),T===dl&&(b=!0);else if((kt&y)===y){x=x.next,y===dl&&(b=!0);continue}else T={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},o===null?(u=o=T,c=i):o=o.next=T,X.lanes|=y,pa|=y;T=x.action,Ga&&a(i,T),i=x.hasEagerState?x.eagerState:a(i,T)}else y={lane:T,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},o===null?(u=o=y,c=i):o=o.next=y,X.lanes|=T,pa|=T;x=x.next}while(x!==null&&x!==t);if(o===null?c=i:o.next=u,!tt(i,e.memoizedState)&&(Ae=!0,b&&(a=fl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function tc(e){var t=Me(),a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);tt(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Zo(e,t,a){var l=X,n=Me(),i=te;if(i){if(a===void 0)throw Error(f(407));a=a()}else a=t();var c=!tt((re||n).memoizedState,a);if(c&&(n.memoizedState=a,Ae=!0),n=n.queue,nc(Io.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||Te!==null&&Te.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},Wo.bind(null,l,n,a,t),null),pe===null)throw Error(f(349));i||(kt&127)!==0||Ko(l,t,a)}return a}function Ko(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=X.updateQueue,t===null?(t=si(),X.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Wo(e,t,a,l){t.value=a,t.getSnapshot=l,$o(t)&&Po(e)}function Io(e,t,a){return a(function(){$o(t)&&Po(e)})}function $o(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!tt(e,a)}catch{return!0}}function Po(e){var t=Va(e,2);t!==null&&Ie(t,e,2)}function ac(e){var t=Ge();if(typeof e=="function"){var a=e;if(e=a(),Ga){ea(!0);try{a()}finally{ea(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function er(e,t,a,l){return e.baseState=a,ec(e,re,typeof l=="function"?l:Yt)}function dp(e,t,a,l,n){if(di(e))throw Error(f(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};E.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,tr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function tr(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=E.T,c={};E.T=c;try{var u=a(n,l),o=E.S;o!==null&&o(c,u),ar(e,t,u)}catch(x){lc(e,t,x)}finally{i!==null&&c.types!==null&&(i.types=c.types),E.T=i}}else try{i=a(n,l),ar(e,t,i)}catch(x){lc(e,t,x)}}function ar(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){lr(e,t,l)},function(l){return lc(e,t,l)}):lr(e,t,a)}function lr(e,t,a){t.status="fulfilled",t.value=a,nr(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,tr(e,a)))}function lc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,nr(t),t=t.next;while(t!==l)}e.action=null}function nr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ir(e,t){return t}function sr(e,t){if(te){var a=pe.formState;if(a!==null){e:{var l=X;if(te){if(xe){t:{for(var n=xe,i=gt;n.nodeType!==8;){if(!i){n=null;break t}if(n=St(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){xe=St(n.nextSibling),l=n.data==="F!";break e}}ia(l)}l=!1}l&&(t=a[0])}}return a=Ge(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:t},a.queue=l,a=Tr.bind(null,X,l),l.dispatch=a,l=ac(!1),i=oc.bind(null,X,!1,l.queue),l=Ge(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=dp.bind(null,X,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function cr(e){var t=Me();return ur(t,re,e)}function ur(e,t,a){if(t=ec(e,t,ir)[0],e=ui(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=an(t)}catch(c){throw c===ml?$n:c}else l=t;t=Me();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(X.flags|=2048,yl(9,{destroy:void 0},fp.bind(null,n,a),null)),[l,i,e]}function fp(e,t){e.action=t}function or(e){var t=Me(),a=re;if(a!==null)return ur(t,a,e);Me(),t=t.memoizedState,a=Me();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function yl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=X.updateQueue,t===null&&(t=si(),X.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function rr(){return Me().memoizedState}function oi(e,t,a,l){var n=Ge();X.flags|=e,n.memoizedState=yl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ri(e,t,a,l){var n=Me();l=l===void 0?null:l;var i=n.memoizedState.inst;re!==null&&l!==null&&Zs(l,re.memoizedState.deps)?n.memoizedState=yl(t,i,a,l):(X.flags|=e,n.memoizedState=yl(1|t,i,a,l))}function dr(e,t){oi(8390656,8,e,t)}function nc(e,t){ri(2048,8,e,t)}function mp(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=si(),X.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function fr(e){var t=Me().memoizedState;return mp({ref:t,nextImpl:e}),function(){if((ie&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function mr(e,t){return ri(4,2,e,t)}function pr(e,t){return ri(4,4,e,t)}function hr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xr(e,t,a){a=a!=null?a.concat([e]):null,ri(4,4,hr.bind(null,t,e),a)}function ic(){}function gr(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Zs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function yr(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Zs(t,l[1]))return l[0];if(l=e(),Ga){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l}function sc(e,t,a){return a===void 0||(kt&1073741824)!==0&&($&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Sd(),X.lanes|=e,pa|=e,a)}function Sr(e,t,a,l){return tt(a,t)?a:hl.current!==null?(e=sc(e,a,l),tt(e,t)||(Ae=!0),e):(kt&42)===0||(kt&1073741824)!==0&&($&261930)===0?(Ae=!0,e.memoizedState=a):(e=Sd(),X.lanes|=e,pa|=e,t)}function vr(e,t,a,l,n){var i=C.p;C.p=i!==0&&8>i?i:8;var c=E.T,u={};E.T=u,oc(e,!1,t,a);try{var o=n(),x=E.S;if(x!==null&&x(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var b=up(o,l);ln(e,t,b,ct(e))}else ln(e,t,l,ct(e))}catch(T){ln(e,t,{then:function(){},status:"rejected",reason:T},ct())}finally{C.p=i,c!==null&&u.types!==null&&(c.types=u.types),E.T=c}}function pp(){}function cc(e,t,a,l){if(e.tag!==5)throw Error(f(476));var n=br(e).queue;vr(e,n,t,G,a===null?pp:function(){return Er(e),a(l)})}function br(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:G},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Er(e){var t=br(e);t.next===null&&(t=e.alternate.memoizedState),ln(e,t.next.queue,{},ct())}function uc(){return Re(bn)}function Mr(){return Me().memoizedState}function _r(){return Me().memoizedState}function hp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ct();e=ua(a);var l=oa(t,e,a);l!==null&&(Ie(l,t,a),$l(l,t,a)),t={cache:Hs()},e.payload=t;return}t=t.return}}function xp(e,t,a){var l=ct();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},di(e)?Ar(t,a):(a=As(e,t,a,l),a!==null&&(Ie(a,e,l),Dr(a,t,l)))}function Tr(e,t,a){var l=ct();ln(e,t,a,l)}function ln(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(di(e))Ar(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,u=i(c,a);if(n.hasEagerState=!0,n.eagerState=u,tt(u,c))return Xn(e,t,n,0),pe===null&&Yn(),!1}catch{}if(a=As(e,t,n,l),a!==null)return Ie(a,e,l),Dr(a,t,l),!0}return!1}function oc(e,t,a,l){if(l={lane:2,revertLane:Gc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},di(e)){if(t)throw Error(f(479))}else t=As(e,a,l,2),t!==null&&Ie(t,e,2)}function di(e){var t=e.alternate;return e===X||t!==null&&t===X}function Ar(e,t){xl=ni=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Dr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bu(e,a)}}var nn={readContext:Re,use:ci,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};nn.useEffectEvent=Se;var Nr={readContext:Re,use:ci,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:dr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,oi(4194308,4,hr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){oi(4,2,e,t)},useMemo:function(e,t){var a=Ge();t=t===void 0?null:t;var l=e();if(Ga){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ge();if(a!==void 0){var n=a(t);if(Ga){ea(!0);try{a(t)}finally{ea(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=xp.bind(null,X,e),[l.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:function(e){e=ac(e);var t=e.queue,a=Tr.bind(null,X,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ic,useDeferredValue:function(e,t){var a=Ge();return sc(a,e,t)},useTransition:function(){var e=ac(!1);return e=vr.bind(null,X,e.queue,!0,!1),Ge().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=X,n=Ge();if(te){if(a===void 0)throw Error(f(407));a=a()}else{if(a=t(),pe===null)throw Error(f(349));($&127)!==0||Ko(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,dr(Io.bind(null,l,i,e),[e]),l.flags|=2048,yl(9,{destroy:void 0},Wo.bind(null,l,i,a,t),null),a},useId:function(){var e=Ge(),t=pe.identifierPrefix;if(te){var a=Vt,l=Bt;a=(l&~(1<<32-et(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ii++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=op++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:uc,useFormState:sr,useActionState:sr,useOptimistic:function(e){var t=Ge();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=oc.bind(null,X,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ps,useCacheRefresh:function(){return Ge().memoizedState=hp.bind(null,X)},useEffectEvent:function(e){var t=Ge(),a={impl:e};return t.memoizedState=a,function(){if((ie&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},rc={readContext:Re,use:ci,useCallback:gr,useContext:Re,useEffect:nc,useImperativeHandle:xr,useInsertionEffect:mr,useLayoutEffect:pr,useMemo:yr,useReducer:ui,useRef:rr,useState:function(){return ui(Yt)},useDebugValue:ic,useDeferredValue:function(e,t){var a=Me();return Sr(a,re.memoizedState,e,t)},useTransition:function(){var e=ui(Yt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Zo,useId:Mr,useHostTransitionStatus:uc,useFormState:cr,useActionState:cr,useOptimistic:function(e,t){var a=Me();return er(a,re,e,t)},useMemoCache:Ps,useCacheRefresh:_r};rc.useEffectEvent=fr;var jr={readContext:Re,use:ci,useCallback:gr,useContext:Re,useEffect:nc,useImperativeHandle:xr,useInsertionEffect:mr,useLayoutEffect:pr,useMemo:yr,useReducer:tc,useRef:rr,useState:function(){return tc(Yt)},useDebugValue:ic,useDeferredValue:function(e,t){var a=Me();return re===null?sc(a,e,t):Sr(a,re.memoizedState,e,t)},useTransition:function(){var e=tc(Yt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Zo,useId:Mr,useHostTransitionStatus:uc,useFormState:or,useActionState:or,useOptimistic:function(e,t){var a=Me();return re!==null?er(a,re,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ps,useCacheRefresh:_r};jr.useEffectEvent=fr;function dc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:H({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var fc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ct(),n=ua(l);n.payload=t,a!=null&&(n.callback=a),t=oa(e,n,l),t!==null&&(Ie(t,e,l),$l(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ct(),n=ua(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=oa(e,n,l),t!==null&&(Ie(t,e,l),$l(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ct(),l=ua(a);l.tag=2,t!=null&&(l.callback=t),t=oa(e,l,a),t!==null&&(Ie(t,e,a),$l(t,e,a))}};function Cr(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Yl(a,l)||!Yl(n,i):!0}function Br(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function La(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=H({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Vr(e){kn(e)}function zr(e){console.error(e)}function Rr(e){kn(e)}function fi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function wr(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function mc(e,t,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){fi(e,t)},a}function Or(e){return e=ua(e),e.tag=3,e}function Hr(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){wr(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){wr(t,a,l),typeof n!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function gp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&rl(t,a,n,!0),a=lt.current,a!==null){switch(a.tag){case 31:case 13:return yt===null?_i():a.alternate===null&&ve===0&&(ve=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Pn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Uc(e,l,n)),!1;case 22:return a.flags|=65536,l===Pn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Uc(e,l,n)),!1}throw Error(f(435,a.tag))}return Uc(e,l,n),_i(),!1}if(te)return t=lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Vs&&(e=Error(f(422),{cause:l}),Jl(pt(e,a)))):(l!==Vs&&(t=Error(f(423),{cause:l}),Jl(pt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=pt(l,a),n=mc(e.stateNode,l,n),ks(e,n),ve!==4&&(ve=2)),!1;var i=Error(f(520),{cause:l});if(i=pt(i,a),mn===null?mn=[i]:mn.push(i),ve!==4&&(ve=2),t===null)return!0;l=pt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=mc(a.stateNode,l,e),ks(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ha===null||!ha.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Or(n),Hr(n,e,a,l),ks(a,n),!1}a=a.return}while(a!==null);return!1}var pc=Error(f(461)),Ae=!1;function we(e,t,a,l){t.child=e===null?Go(t,null,a,l):Fa(t,e.child,a,l)}function Ur(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var u in l)u!=="ref"&&(c[u]=l[u])}else c=l;return Oa(t),l=Ks(e,t,a,c,i,n),u=Ws(),e!==null&&!Ae?(Is(e,t,n),Xt(e,t,n)):(te&&u&&Cs(t),t.flags|=1,we(e,t,l,n),t.child)}function qr(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Ds(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Fr(e,t,i,l,n)):(e=Jn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ec(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Yl,a(c,l)&&e.ref===t.ref)return Xt(e,t,n)}return t.flags|=1,e=qt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Fr(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Yl(i,l)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=l=i,Ec(e,n))(e.flags&131072)!==0&&(Ae=!0);else return t.lanes=e.lanes,Xt(e,t,n)}return hc(e,t,a,l,n)}function Gr(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Lr(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&In(t,i!==null?i.cachePool:null),i!==null?Yo(t,i):Xs(),Xo(t);else return l=t.lanes=536870912,Lr(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(In(t,i.cachePool),Yo(t,i),da(),t.memoizedState=null):(e!==null&&In(t,null),Xs(),da());return we(e,t,n,a),t.child}function sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lr(e,t,a,l,n){var i=qs();return i=i===null?null:{parent:_e._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&In(t,null),Xs(),Xo(t),e!==null&&rl(e,t,l,!0),t.childLanes=n,null}function mi(e,t){return t=hi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function kr(e,t,a){return Fa(t,e.child,null,a),e=mi(t,t.pendingProps),e.flags|=2,nt(t),t.memoizedState=null,e}function yp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(l.mode==="hidden")return e=mi(t,l),t.lanes=536870912,sn(null,e);if(Js(t),(e=xe)?(e=tf(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:Bt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=Ao(e),a.return=t,t.child=a,ze=t,xe=null)):e=null,e===null)throw ia(t);return t.lanes=536870912,null}return mi(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Js(t),n)if(t.flags&256)t.flags&=-257,t=kr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(Ae||rl(e,t,a,!1),n=(a&e.childLanes)!==0,Ae||n){if(l=pe,l!==null&&(c=Vu(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Va(e,c),Ie(l,e,c),pc;_i(),t=kr(e,t,a)}else e=i.treeContext,xe=St(c.nextSibling),ze=t,te=!0,na=null,gt=!1,e!==null&&jo(t,e),t=mi(t,l),t.flags|=4096;return t}return e=qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function hc(e,t,a,l,n){return Oa(t),a=Ks(e,t,a,l,void 0,n),l=Ws(),e!==null&&!Ae?(Is(e,t,n),Xt(e,t,n)):(te&&l&&Cs(t),t.flags|=1,we(e,t,a,n),t.child)}function Yr(e,t,a,l,n,i){return Oa(t),t.updateQueue=null,a=Jo(t,l,a,n),Qo(e),l=Ws(),e!==null&&!Ae?(Is(e,t,i),Xt(e,t,i)):(te&&l&&Cs(t),t.flags|=1,we(e,t,a,i),t.child)}function Xr(e,t,a,l,n){if(Oa(t),t.stateNode===null){var i=sl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Re(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Gs(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Re(c):sl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(dc(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&fc.enqueueReplaceState(i,i.state,null),en(t,l,i,n),Pl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,o=La(a,u);i.props=o;var x=i.context,b=a.contextType;c=sl,typeof b=="object"&&b!==null&&(c=Re(b));var T=a.getDerivedStateFromProps;b=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||x!==c)&&Br(t,i,l,c),ca=!1;var y=t.memoizedState;i.state=y,en(t,l,i,n),Pl(),x=t.memoizedState,u||y!==x||ca?(typeof T=="function"&&(dc(t,a,T,l),x=t.memoizedState),(o=ca||Cr(t,a,o,l,y,x,c))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=x),i.props=l,i.state=x,i.context=c,l=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Ls(e,t),c=t.memoizedProps,b=La(a,c),i.props=b,T=t.pendingProps,y=i.context,x=a.contextType,o=sl,typeof x=="object"&&x!==null&&(o=Re(x)),u=a.getDerivedStateFromProps,(x=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==T||y!==o)&&Br(t,i,l,o),ca=!1,y=t.memoizedState,i.state=y,en(t,l,i,n),Pl();var S=t.memoizedState;c!==T||y!==S||ca||e!==null&&e.dependencies!==null&&Kn(e.dependencies)?(typeof u=="function"&&(dc(t,a,u,l),S=t.memoizedState),(b=ca||Cr(t,a,b,l,y,S,o)||e!==null&&e.dependencies!==null&&Kn(e.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,S,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,S,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=S),i.props=l,i.state=S,i.context=o,l=b):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,pi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Fa(t,e.child,null,n),t.child=Fa(t,null,a,n)):we(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Xt(e,t,n),e}function Qr(e,t,a,l){return Ra(),t.flags|=256,we(e,t,a,l),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gc(e){return{baseLanes:e,cachePool:wo()}}function yc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=st),e}function Jr(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ee.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(n?ra(t):da(),(e=xe)?(e=tf(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:Bt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=Ao(e),a.return=t,t.child=a,ze=t,xe=null)):e=null,e===null)throw ia(t);return eu(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(da(),n=t.mode,u=hi({mode:"hidden",children:u},n),l=za(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=gc(a),l.childLanes=yc(e,c,a),t.memoizedState=xc,sn(null,l)):(ra(t),Sc(t,u))}var o=e.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(i)t.flags&256?(ra(t),t.flags&=-257,t=vc(e,t,a)):t.memoizedState!==null?(da(),t.child=e.child,t.flags|=128,t=null):(da(),u=l.fallback,n=t.mode,l=hi({mode:"visible",children:l.children},n),u=za(u,n,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Fa(t,e.child,null,a),l=t.child,l.memoizedState=gc(a),l.childLanes=yc(e,c,a),t.memoizedState=xc,t=sn(null,l));else if(ra(t),eu(u)){if(c=u.nextSibling&&u.nextSibling.dataset,c)var x=c.dgst;c=x,l=Error(f(419)),l.stack="",l.digest=c,Jl({value:l,source:null,stack:null}),t=vc(e,t,a)}else if(Ae||rl(e,t,a,!1),c=(a&e.childLanes)!==0,Ae||c){if(c=pe,c!==null&&(l=Vu(c,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,Va(e,l),Ie(c,e,l),pc;Pc(u)||_i(),t=vc(e,t,a)}else Pc(u)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,xe=St(u.nextSibling),ze=t,te=!0,na=null,gt=!1,e!==null&&jo(t,e),t=Sc(t,l.children),t.flags|=4096);return t}return n?(da(),u=l.fallback,n=t.mode,o=e.child,x=o.sibling,l=qt(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,x!==null?u=qt(x,u):(u=za(u,n,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,sn(null,l),l=t.child,u=e.child.memoizedState,u===null?u=gc(a):(n=u.cachePool,n!==null?(o=_e._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=wo(),u={baseLanes:u.baseLanes|a,cachePool:n}),l.memoizedState=u,l.childLanes=yc(e,c,a),t.memoizedState=xc,sn(e.child,l)):(ra(t),a=e.child,e=a.sibling,a=qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Sc(e,t){return t=hi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hi(e,t){return e=at(22,e,null,t),e.lanes=0,e}function vc(e,t,a){return Fa(t,e.child,null,a),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zr(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ws(e.return,t,a)}function bc(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function Kr(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=Ee.current,u=(c&2)!==0;if(u?(c=c&1|2,t.flags|=128):c&=1,B(Ee,c),we(e,t,l,a),l=te?Ql:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zr(e,a,t);else if(e.tag===19)Zr(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&li(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),bc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&li(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}bc(t,!0,a,null,i,l);break;case"together":bc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Xt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(rl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,a=qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kn(e)))}function Sp(e,t,a){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),sa(t,_e,e.memoizedState.cache),Ra();break;case 27:case 5:Bl(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Js(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Jr(e,t,a):(ra(t),e=Xt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(rl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Kr(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(Ee,Ee.current),l)break;return null;case 22:return t.lanes=0,Gr(e,t,a,t.pendingProps);case 24:sa(t,_e,e.memoizedState.cache)}return Xt(e,t,a)}function Wr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ae=!0;else{if(!Ec(e,a)&&(t.flags&128)===0)return Ae=!1,Sp(e,t,a);Ae=(e.flags&131072)!==0}else Ae=!1,te&&(t.flags&1048576)!==0&&No(t,Ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e=="function")Ds(e)?(l=La(e,l),t.tag=1,t=Xr(null,t,e,l,a)):(t.tag=0,t=hc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===rt){t.tag=11,t=Ur(null,t,e,l,a);break e}else if(n===ee){t.tag=14,t=qr(null,t,e,l,a);break e}}throw t=wt(e)||e,Error(f(306,t,""))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=La(l,t.pendingProps),Xr(e,t,l,n,a);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(f(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Ls(e,t),en(t,l,null,a);var c=t.memoizedState;if(l=c.cache,sa(t,_e,l),l!==i.cache&&Os(t,[_e],a,!0),Pl(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Qr(e,t,l,a);break e}else if(l!==n){n=pt(Error(f(424)),t),Jl(n),t=Qr(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,xe=St(e.firstChild),ze=t,te=!0,na=null,gt=!0,a=Go(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ra(),l===n){t=Xt(e,t,a);break e}we(e,t,l,a)}t=t.child}return t;case 26:return pi(e,t),e===null?(a=uf(t.type,null,t.pendingProps,null))?t.memoizedState=a:te||(a=t.type,e=t.pendingProps,l=Bi(Z.current).createElement(a),l[Ve]=t,l[Xe]=e,Oe(l,a,e),Ce(l),t.stateNode=l):t.memoizedState=uf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bl(t),e===null&&te&&(l=t.stateNode=nf(t.type,t.pendingProps,Z.current),ze=t,gt=!0,n=xe,Sa(t.type)?(tu=n,xe=St(l.firstChild)):xe=n),we(e,t,t.pendingProps.children,a),pi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((n=l=xe)&&(l=Kp(l,t.type,t.pendingProps,gt),l!==null?(t.stateNode=l,ze=t,xe=St(l.firstChild),gt=!1,n=!0):n=!1),n||ia(t)),Bl(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Wc(n,i)?l=null:c!==null&&Wc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Ks(e,t,rp,null,null,a),bn._currentValue=n),pi(e,t),we(e,t,l,a),t.child;case 6:return e===null&&te&&((e=a=xe)&&(a=Wp(a,t.pendingProps,gt),a!==null?(t.stateNode=a,ze=t,xe=null,e=!0):e=!1),e||ia(t)),null;case 13:return Jr(e,t,a);case 4:return Fe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Fa(t,null,l,a):we(e,t,l,a),t.child;case 11:return Ur(e,t,t.type,t.pendingProps,a);case 7:return we(e,t,t.pendingProps,a),t.child;case 8:return we(e,t,t.pendingProps.children,a),t.child;case 12:return we(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,sa(t,t.type,l.value),we(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Oa(t),n=Re(n),l=l(n),t.flags|=1,we(e,t,l,a),t.child;case 14:return qr(e,t,t.type,t.pendingProps,a);case 15:return Fr(e,t,t.type,t.pendingProps,a);case 19:return Kr(e,t,a);case 31:return yp(e,t,a);case 22:return Gr(e,t,a,t.pendingProps);case 24:return Oa(t),l=Re(_e),e===null?(n=qs(),n===null&&(n=pe,i=Hs(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Gs(t),sa(t,_e,n)):((e.lanes&a)!==0&&(Ls(e,t),en(t,null,null,a),Pl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),sa(t,_e,l)):(l=i.cache,sa(t,_e,l),l!==n.cache&&Os(t,[_e],a,!0))),we(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function Qt(e){e.flags|=4}function Mc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Md())e.flags|=8192;else throw qa=Pn,Fs}else e.flags&=-16777217}function Ir(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mf(t))if(Md())e.flags|=8192;else throw qa=Pn,Fs}function xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ju():536870912,e.lanes|=t,El|=t)}function cn(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function vp(e,t,a){var l=t.pendingProps;switch(Bs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ge(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Lt(_e),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ol(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zs())),ge(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Qt(t),i!==null?(ge(t),Ir(t,i)):(ge(t),Mc(t,n,null,l,a))):i?i!==e.memoizedState?(Qt(t),ge(t),Ir(t,i)):(ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Qt(t),ge(t),Mc(t,n,e,l,a)),null;case 27:if(Dn(t),a=Z.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return ge(t),null}e=w.current,ol(t)?Co(t):(e=nf(n,l,a),t.stateNode=e,Qt(t))}return ge(t),null;case 5:if(Dn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return ge(t),null}if(i=w.current,ol(t))Co(t);else{var c=Bi(Z.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Ve]=t,i[Xe]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Oe(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Qt(t)}}return ge(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(f(166));if(e=Z.current,ol(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=ze,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Jd(e.nodeValue,a)),e||ia(t,!0)}else e=Bi(e).createTextNode(l),e[Ve]=t,t.stateNode=e}return ge(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ol(t),a!==null){if(e===null){if(!l)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[Ve]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),e=!1}else a=zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(nt(t),t):(nt(t),null);if((t.flags&128)!==0)throw Error(f(558))}return ge(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ol(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(f(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[Ve]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),n=!1}else n=zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(nt(t),t):(nt(t),null)}return nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),xi(t,t.updateQueue),ge(t),null);case 4:return be(),e===null&&Xc(t.stateNode.containerInfo),ge(t),null;case 10:return Lt(t.type),ge(t),null;case 19:if(D(Ee),l=t.memoizedState,l===null)return ge(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)cn(l,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=li(e),i!==null){for(t.flags|=128,cn(l,!1),e=i.updateQueue,t.updateQueue=e,xi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)To(a,e),a=a.sibling;return B(Ee,Ee.current&1|2),te&&Ft(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&$e()>bi&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304)}else{if(!n)if(e=li(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,xi(t,e),cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!te)return ge(t),null}else 2*$e()-l.renderingStartTime>bi&&a!==536870912&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=$e(),e.sibling=null,a=Ee.current,B(Ee,n?a&1|2:a&1),te&&Ft(t,l.treeForkCount),e):(ge(t),null);case 22:case 23:return nt(t),Qs(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),a=t.updateQueue,a!==null&&xi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&D(Ha),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(_e),ge(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function bp(e,t){switch(Bs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(_e),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Dn(t),null;case 31:if(t.memoizedState!==null){if(nt(t),t.alternate===null)throw Error(f(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Ee),null;case 4:return be(),null;case 10:return Lt(t.type),null;case 22:case 23:return nt(t),Qs(),e!==null&&D(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(_e),null;case 25:return null;default:return null}}function $r(e,t){switch(Bs(t),t.tag){case 3:Lt(_e),be();break;case 26:case 27:case 5:Dn(t);break;case 4:be();break;case 31:t.memoizedState!==null&&nt(t);break;case 13:nt(t);break;case 19:D(Ee);break;case 10:Lt(t.type);break;case 22:case 23:nt(t),Qs(),e!==null&&D(Ha);break;case 24:Lt(_e)}}function un(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(u){ue(t,t.return,u)}}function fa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,u=c.destroy;if(u!==void 0){c.destroy=void 0,n=t;var o=a,x=u;try{x()}catch(b){ue(n,o,b)}}}l=l.next}while(l!==i)}}catch(b){ue(t,t.return,b)}}function Pr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ko(t,a)}catch(l){ue(e,e.return,l)}}}function ed(e,t,a){a.props=La(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ue(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ue(e,t,n)}}function zt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ue(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ue(e,t,n)}else a.current=null}function td(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ue(e,e.return,n)}}function _c(e,t,a){try{var l=e.stateNode;kp(l,e.type,a,t),l[Xe]=t}catch(n){ue(e,e.return,n)}}function ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ht));else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ac(e,t,a),e=e.sibling;e!==null;)Ac(e,t,a),e=e.sibling}function gi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gi(e,t,a),e=e.sibling;e!==null;)gi(e,t,a),e=e.sibling}function ld(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Oe(t,l,a),t[Ve]=e,t[Xe]=a}catch(i){ue(e,e.return,i)}}var Jt=!1,De=!1,Dc=!1,nd=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ep(e,t){if(e=e.containerInfo,Zc=Ui,e=xo(e),vs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,u=-1,o=-1,x=0,b=0,T=e,y=null;t:for(;;){for(var S;T!==a||n!==0&&T.nodeType!==3||(u=c+n),T!==i||l!==0&&T.nodeType!==3||(o=c+l),T.nodeType===3&&(c+=T.nodeValue.length),(S=T.firstChild)!==null;)y=T,T=S;for(;;){if(T===e)break t;if(y===a&&++x===n&&(u=c),y===i&&++b===l&&(o=c),(S=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=S}a=u===-1||o===-1?null:{start:u,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kc={focusedElem:e,selectionRange:a},Ui=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var R=La(a.type,n);e=l.getSnapshotBeforeUpdate(R,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){ue(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)$c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}}function id(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Kt(e,a),l&4&&un(5,a);break;case 1:if(Kt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ue(a,a.return,c)}else{var n=La(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ue(a,a.return,c)}}l&64&&Pr(a),l&512&&on(a,a.return);break;case 3:if(Kt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ko(e,t)}catch(c){ue(a,a.return,c)}}break;case 27:t===null&&l&4&&ld(a);case 26:case 5:Kt(e,a),t===null&&l&4&&td(a),l&512&&on(a,a.return);break;case 12:Kt(e,a);break;case 31:Kt(e,a),l&4&&ud(e,a);break;case 13:Kt(e,a),l&4&&od(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bp.bind(null,a),Ip(e,a))));break;case 22:if(l=a.memoizedState!==null||Jt,!l){t=t!==null&&t.memoizedState!==null||De,n=Jt;var i=De;Jt=l,(De=t)&&!i?Wt(e,a,(a.subtreeFlags&8772)!==0):Kt(e,a),Jt=n,De=i}break;case 30:break;default:Kt(e,a)}}function sd(e){var t=e.alternate;t!==null&&(e.alternate=null,sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ls(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,Je=!1;function Zt(e,t,a){for(a=a.child;a!==null;)cd(e,t,a),a=a.sibling}function cd(e,t,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(Vl,a)}catch{}switch(a.tag){case 26:De||zt(a,t),Zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:De||zt(a,t);var l=ye,n=Je;Sa(a.type)&&(ye=a.stateNode,Je=!1),Zt(e,t,a),yn(a.stateNode),ye=l,Je=n;break;case 5:De||zt(a,t);case 6:if(l=ye,n=Je,ye=null,Zt(e,t,a),ye=l,Je=n,ye!==null)if(Je)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(a.stateNode)}catch(i){ue(a,t,i)}else try{ye.removeChild(a.stateNode)}catch(i){ue(a,t,i)}break;case 18:ye!==null&&(Je?(e=ye,Pd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cl(e)):Pd(ye,a.stateNode));break;case 4:l=ye,n=Je,ye=a.stateNode.containerInfo,Je=!0,Zt(e,t,a),ye=l,Je=n;break;case 0:case 11:case 14:case 15:fa(2,a,t),De||fa(4,a,t),Zt(e,t,a);break;case 1:De||(zt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ed(a,t,l)),Zt(e,t,a);break;case 21:Zt(e,t,a);break;case 22:De=(l=De)||a.memoizedState!==null,Zt(e,t,a),De=l;break;default:Zt(e,t,a)}}function ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(a){ue(t,t.return,a)}}}function od(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(a){ue(t,t.return,a)}}function Mp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nd),t;default:throw Error(f(435,e.tag))}}function yi(e,t){var a=Mp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Vp.bind(null,e,l);l.then(n,n)}})}function Ze(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,u=c;e:for(;u!==null;){switch(u.tag){case 27:if(Sa(u.type)){ye=u.stateNode,Je=!1;break e}break;case 5:ye=u.stateNode,Je=!1;break e;case 3:case 4:ye=u.stateNode.containerInfo,Je=!0;break e}u=u.return}if(ye===null)throw Error(f(160));cd(i,c,n),ye=null,Je=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rd(t,e),t=t.sibling}var _t=null;function rd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ze(t,e),Ke(e),l&4&&(fa(3,e,e.return),un(3,e),fa(5,e,e.return));break;case 1:Ze(t,e),Ke(e),l&512&&(De||a===null||zt(a,a.return)),l&64&&Jt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=_t;if(Ze(t,e),Ke(e),l&512&&(De||a===null||zt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[wl]||i[Ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Oe(i,l,a),i[Ve]=e,Ce(i),l=i;break e;case"link":var c=df("link","href",n).get(l+(a.href||""));if(c){for(var u=0;u<c.length;u++)if(i=c[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(u,1);break t}}i=n.createElement(l),Oe(i,l,a),n.head.appendChild(i);break;case"meta":if(c=df("meta","content",n).get(l+(a.content||""))){for(u=0;u<c.length;u++)if(i=c[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(u,1);break t}}i=n.createElement(l),Oe(i,l,a),n.head.appendChild(i);break;default:throw Error(f(468,l))}i[Ve]=e,Ce(i),l=i}e.stateNode=l}else ff(n,e.type,e.stateNode);else e.stateNode=rf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?ff(n,e.type,e.stateNode):rf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&_c(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ze(t,e),Ke(e),l&512&&(De||a===null||zt(a,a.return)),a!==null&&l&4&&_c(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ze(t,e),Ke(e),l&512&&(De||a===null||zt(a,a.return)),e.flags&32){n=e.stateNode;try{Pa(n,"")}catch(R){ue(e,e.return,R)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,_c(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Dc=!0);break;case 6:if(Ze(t,e),Ke(e),l&4){if(e.stateNode===null)throw Error(f(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(R){ue(e,e.return,R)}}break;case 3:if(Ri=null,n=_t,_t=Vi(t.containerInfo),Ze(t,e),_t=n,Ke(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(R){ue(e,e.return,R)}Dc&&(Dc=!1,dd(e));break;case 4:l=_t,_t=Vi(e.stateNode.containerInfo),Ze(t,e),Ke(e),_t=l;break;case 12:Ze(t,e),Ke(e);break;case 31:Ze(t,e),Ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yi(e,l)));break;case 13:Ze(t,e),Ke(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vi=$e()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yi(e,l)));break;case 22:n=e.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,x=Jt,b=De;if(Jt=x||n,De=b||o,Ze(t,e),De=b,Jt=x,Ke(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||o||Jt||De||ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(i=o.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{u=o.stateNode;var T=o.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(R){ue(o,o.return,R)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(R){ue(o,o.return,R)}}}else if(t.tag===18){if(a===null){o=t;try{var S=o.stateNode;n?ef(S,!0):ef(o.stateNode,!1)}catch(R){ue(o,o.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,yi(e,a))));break;case 19:Ze(t,e),Ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yi(e,l)));break;case 30:break;case 21:break;default:Ze(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(ad(l)){a=l;break}l=l.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var n=a.stateNode,i=Tc(e);gi(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(Pa(c,""),a.flags&=-33);var u=Tc(e);gi(e,u,c);break;case 3:case 4:var o=a.stateNode.containerInfo,x=Tc(e);Ac(e,x,o);break;default:throw Error(f(161))}}catch(b){ue(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)id(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:fa(4,t,t.return),ka(t);break;case 1:zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ed(t,t.return,a),ka(t);break;case 27:yn(t.stateNode);case 26:case 5:zt(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function Wt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:Wt(n,i,a),un(4,i);break;case 1:if(Wt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(x){ue(l,l.return,x)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Lo(o[n],u)}catch(x){ue(l,l.return,x)}}a&&c&64&&Pr(i),on(i,i.return);break;case 27:ld(i);case 26:case 5:Wt(n,i,a),a&&l===null&&c&4&&td(i),on(i,i.return);break;case 12:Wt(n,i,a);break;case 31:Wt(n,i,a),a&&c&4&&ud(n,i);break;case 13:Wt(n,i,a),a&&c&4&&od(n,i);break;case 22:i.memoizedState===null&&Wt(n,i,a),on(i,i.return);break;case 30:break;default:Wt(n,i,a)}t=t.sibling}}function Nc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zl(a))}function jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e))}function Tt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fd(e,t,a,l),t=t.sibling}function fd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Tt(e,t,a,l),n&2048&&un(9,t);break;case 1:Tt(e,t,a,l);break;case 3:Tt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e)));break;case 12:if(n&2048){Tt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,u=i.onPostCommit;typeof u=="function"&&u(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ue(t,t.return,o)}}else Tt(e,t,a,l);break;case 31:Tt(e,t,a,l);break;case 13:Tt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Tt(e,t,a,l):rn(e,t):i._visibility&2?Tt(e,t,a,l):(i._visibility|=2,Sl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Nc(c,t);break;case 24:Tt(e,t,a,l),n&2048&&jc(t.alternate,t);break;default:Tt(e,t,a,l)}}function Sl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,u=a,o=l,x=c.flags;switch(c.tag){case 0:case 11:case 15:Sl(i,c,u,o,n),un(8,c);break;case 23:break;case 22:var b=c.stateNode;c.memoizedState!==null?b._visibility&2?Sl(i,c,u,o,n):rn(i,c):(b._visibility|=2,Sl(i,c,u,o,n)),n&&x&2048&&Nc(c.alternate,c);break;case 24:Sl(i,c,u,o,n),n&&x&2048&&jc(c.alternate,c);break;default:Sl(i,c,u,o,n)}t=t.sibling}}function rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:rn(a,l),n&2048&&Nc(l.alternate,l);break;case 24:rn(a,l),n&2048&&jc(l.alternate,l);break;default:rn(a,l)}t=t.sibling}}var dn=8192;function vl(e,t,a){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)md(e,t,a),e=e.sibling}function md(e,t,a){switch(e.tag){case 26:vl(e,t,a),e.flags&dn&&e.memoizedState!==null&&o0(a,_t,e.memoizedState,e.memoizedProps);break;case 5:vl(e,t,a);break;case 3:case 4:var l=_t;_t=Vi(e.stateNode.containerInfo),vl(e,t,a),_t=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=dn,dn=16777216,vl(e,t,a),dn=l):vl(e,t,a));break;default:vl(e,t,a)}}function pd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Be=l,xd(l,e)}pd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hd(e),e=e.sibling}function hd(e){switch(e.tag){case 0:case 11:case 15:fn(e),e.flags&2048&&fa(9,e,e.return);break;case 3:fn(e);break;case 12:fn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Si(e)):fn(e);break;default:fn(e)}}function Si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Be=l,xd(l,e)}pd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:fa(8,t,t.return),Si(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Si(t));break;default:Si(t)}e=e.sibling}}function xd(e,t){for(;Be!==null;){var a=Be;switch(a.tag){case 0:case 11:case 15:fa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Be=l;else e:for(a=e;Be!==null;){l=Be;var n=l.sibling,i=l.return;if(sd(l),l===a){Be=null;break e}if(n!==null){n.return=i,Be=n;break e}Be=i}}}var _p={getCacheForType:function(e){var t=Re(_e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Re(_e).controller.signal}},Tp=typeof WeakMap=="function"?WeakMap:Map,ie=0,pe=null,K=null,$=0,ce=0,it=null,ma=!1,bl=!1,Cc=!1,It=0,ve=0,pa=0,Ya=0,Bc=0,st=0,El=0,mn=null,We=null,Vc=!1,vi=0,gd=0,bi=1/0,Ei=null,ha=null,Ne=0,xa=null,Ml=null,$t=0,zc=0,Rc=null,yd=null,pn=0,wc=null;function ct(){return(ie&2)!==0&&$!==0?$&-$:E.T!==null?Gc():zu()}function Sd(){if(st===0)if(($&536870912)===0||te){var e=Cn;Cn<<=1,(Cn&3932160)===0&&(Cn=262144),st=e}else st=536870912;return e=lt.current,e!==null&&(e.flags|=32),st}function Ie(e,t,a){(e===pe&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(_l(e,0),ga(e,$,st,!1)),Rl(e,a),((ie&2)===0||e!==pe)&&(e===pe&&((ie&2)===0&&(Ya|=a),ve===4&&ga(e,$,st,!1)),Rt(e))}function vd(e,t,a){if((ie&6)!==0)throw Error(f(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||zl(e,t),n=l?Np(e,t):Hc(e,t,!0),i=l;do{if(n===0){bl&&!l&&ga(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Ap(a)){n=Hc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var u=e;n=mn;var o=u.current.memoizedState.isDehydrated;if(o&&(_l(u,c).flags|=256),c=Hc(u,c,!1),c!==2){if(Cc&&!o){u.errorRecoveryDisabledLanes|=i,Ya|=i,n=4;break e}i=We,We=n,i!==null&&(We===null?We=i:We.push.apply(We,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){_l(e,0),ga(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:ga(l,t,st,!ma);break e;case 2:We=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(n=vi+300-$e(),10<n)){if(ga(l,t,st,!ma),Vn(l,0,!0)!==0)break e;$t=t,l.timeoutHandle=Id(bd.bind(null,l,a,We,Ei,Vc,t,st,Ya,El,ma,i,"Throttled",-0,0),n);break e}bd(l,a,We,Ei,Vc,t,st,Ya,El,ma,i,null,-0,0)}}break}while(!0);Rt(e)}function bd(e,t,a,l,n,i,c,u,o,x,b,T,y,S){if(e.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ht},md(t,i,T);var R=(i&62914560)===i?vi-$e():(i&4194048)===i?gd-$e():0;if(R=r0(T,R),R!==null){$t=i,e.cancelPendingCommit=R(jd.bind(null,e,t,i,a,l,n,c,u,o,b,T,null,y,S)),ga(e,i,c,!x);return}}jd(e,t,i,a,l,n,c,u,o)}function Ap(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!tt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,a,l){t&=~Bc,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-et(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Cu(e,a,t)}function Mi(){return(ie&6)===0?(hn(0),!1):!0}function Oc(){if(K!==null){if(ce===0)var e=K.return;else e=K,Gt=wa=null,$s(e),pl=null,Wl=0,e=K;for(;e!==null;)$r(e.alternate,e),e=e.return;K=null}}function _l(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$t=0,Oc(),pe=e,K=a=qt(e.current,null),$=t,ce=0,it=null,ma=!1,bl=zl(e,t),Cc=!1,El=st=Bc=Ya=pa=ve=0,We=mn=null,Vc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-et(l),i=1<<n;t|=e[n],l&=~i}return It=t,Yn(),a}function Ed(e,t){X=null,E.H=nn,t===ml||t===$n?(t=Uo(),ce=3):t===Fs?(t=Uo(),ce=4):ce=t===pc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,it=t,K===null&&(ve=1,fi(e,pt(t,e.current)))}function Md(){var e=lt.current;return e===null?!0:($&4194048)===$?yt===null:($&62914560)===$||($&536870912)!==0?e===yt:!1}function _d(){var e=E.H;return E.H=nn,e===null?nn:e}function Td(){var e=E.A;return E.A=_p,e}function _i(){ve=4,ma||($&4194048)!==$&&lt.current!==null||(bl=!0),(pa&134217727)===0&&(Ya&134217727)===0||pe===null||ga(pe,$,st,!1)}function Hc(e,t,a){var l=ie;ie|=2;var n=_d(),i=Td();(pe!==e||$!==t)&&(Ei=null,_l(e,t)),t=!1;var c=ve;e:do try{if(ce!==0&&K!==null){var u=K,o=it;switch(ce){case 8:Oc(),c=6;break e;case 3:case 2:case 9:case 6:lt.current===null&&(t=!0);var x=ce;if(ce=0,it=null,Tl(e,u,o,x),a&&bl){c=0;break e}break;default:x=ce,ce=0,it=null,Tl(e,u,o,x)}}Dp(),c=ve;break}catch(b){Ed(e,b)}while(!0);return t&&e.shellSuspendCounter++,Gt=wa=null,ie=l,E.H=n,E.A=i,K===null&&(pe=null,$=0,Yn()),c}function Dp(){for(;K!==null;)Ad(K)}function Np(e,t){var a=ie;ie|=2;var l=_d(),n=Td();pe!==e||$!==t?(Ei=null,bi=$e()+500,_l(e,t)):bl=zl(e,t);e:do try{if(ce!==0&&K!==null){t=K;var i=it;t:switch(ce){case 1:ce=0,it=null,Tl(e,t,i,1);break;case 2:case 9:if(Oo(i)){ce=0,it=null,Dd(t);break}t=function(){ce!==2&&ce!==9||pe!==e||(ce=7),Rt(e)},i.then(t,t);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:Oo(i)?(ce=0,it=null,Dd(t)):(ce=0,it=null,Tl(e,t,i,7));break;case 5:var c=null;switch(K.tag){case 26:c=K.memoizedState;case 5:case 27:var u=K;if(c?mf(c):u.stateNode.complete){ce=0,it=null;var o=u.sibling;if(o!==null)K=o;else{var x=u.return;x!==null?(K=x,Ti(x)):K=null}break t}}ce=0,it=null,Tl(e,t,i,5);break;case 6:ce=0,it=null,Tl(e,t,i,6);break;case 8:Oc(),ve=6;break e;default:throw Error(f(462))}}jp();break}catch(b){Ed(e,b)}while(!0);return Gt=wa=null,E.H=l,E.A=n,ie=a,K!==null?0:(pe=null,$=0,Yn(),ve)}function jp(){for(;K!==null&&!$f();)Ad(K)}function Ad(e){var t=Wr(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Ti(e):K=t}function Dd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Yr(a,t,t.pendingProps,t.type,void 0,$);break;case 11:t=Yr(a,t,t.pendingProps,t.type.render,t.ref,$);break;case 5:$s(t);default:$r(a,t),t=K=To(t,It),t=Wr(a,t,It)}e.memoizedProps=e.pendingProps,t===null?Ti(e):K=t}function Tl(e,t,a,l){Gt=wa=null,$s(t),pl=null,Wl=0;var n=t.return;try{if(gp(e,n,t,a,$)){ve=1,fi(e,pt(a,e.current)),K=null;return}}catch(i){if(n!==null)throw K=n,i;ve=1,fi(e,pt(a,e.current)),K=null;return}t.flags&32768?(te||l===1?e=!0:bl||($&536870912)!==0?e=!1:(ma=e=!0,(l===2||l===9||l===3||l===6)&&(l=lt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Nd(t,e)):Ti(t)}function Ti(e){var t=e;do{if((t.flags&32768)!==0){Nd(t,ma);return}e=t.return;var a=vp(t.alternate,t,It);if(a!==null){K=a;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);ve===0&&(ve=5)}function Nd(e,t){do{var a=bp(e.alternate,e);if(a!==null){a.flags&=32767,K=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=a}while(e!==null);ve=6,K=null}function jd(e,t,a,l,n,i,c,u,o){e.cancelPendingCommit=null;do Ai();while(Ne!==0);if((ie&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(i=t.lanes|t.childLanes,i|=Ts,um(e,a,i,c,u,o),e===pe&&(K=pe=null,$=0),Ml=t,xa=e,$t=a,zc=i,Rc=n,yd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zp(Nn,function(){return Rd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=E.T,E.T=null,n=C.p,C.p=2,c=ie,ie|=4;try{Ep(e,t,a)}finally{ie=c,C.p=n,E.T=l}}Ne=1,Cd(),Bd(),Vd()}}function Cd(){if(Ne===1){Ne=0;var e=xa,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var l=C.p;C.p=2;var n=ie;ie|=4;try{rd(t,e);var i=Kc,c=xo(e.containerInfo),u=i.focusedElem,o=i.selectionRange;if(c!==u&&u&&u.ownerDocument&&ho(u.ownerDocument.documentElement,u)){if(o!==null&&vs(u)){var x=o.start,b=o.end;if(b===void 0&&(b=x),"selectionStart"in u)u.selectionStart=x,u.selectionEnd=Math.min(b,u.value.length);else{var T=u.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var S=y.getSelection(),R=u.textContent.length,F=Math.min(o.start,R),fe=o.end===void 0?F:Math.min(o.end,R);!S.extend&&F>fe&&(c=fe,fe=F,F=c);var p=po(u,F),r=po(u,fe);if(p&&r&&(S.rangeCount!==1||S.anchorNode!==p.node||S.anchorOffset!==p.offset||S.focusNode!==r.node||S.focusOffset!==r.offset)){var h=T.createRange();h.setStart(p.node,p.offset),S.removeAllRanges(),F>fe?(S.addRange(h),S.extend(r.node,r.offset)):(h.setEnd(r.node,r.offset),S.addRange(h))}}}}for(T=[],S=u;S=S.parentNode;)S.nodeType===1&&T.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<T.length;u++){var _=T[u];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Ui=!!Zc,Kc=Zc=null}finally{ie=n,C.p=l,E.T=a}}e.current=t,Ne=2}}function Bd(){if(Ne===2){Ne=0;var e=xa,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var l=C.p;C.p=2;var n=ie;ie|=4;try{id(e,t.alternate,t)}finally{ie=n,C.p=l,E.T=a}}Ne=3}}function Vd(){if(Ne===4||Ne===3){Ne=0,Pf();var e=xa,t=Ml,a=$t,l=yd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ne=5:(Ne=0,Ml=xa=null,zd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ha=null),ts(a),t=t.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=E.T,n=C.p,C.p=2,E.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var u=l[c];i(u.value,{componentStack:u.stack})}}finally{E.T=t,C.p=n}}($t&3)!==0&&Ai(),Rt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===wc?pn++:(pn=0,wc=e):pn=0,hn(0)}}function zd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zl(t)))}function Ai(){return Cd(),Bd(),Vd(),Rd()}function Rd(){if(Ne!==5)return!1;var e=xa,t=zc;zc=0;var a=ts($t),l=E.T,n=C.p;try{C.p=32>a?32:a,E.T=null,a=Rc,Rc=null;var i=xa,c=$t;if(Ne=0,Ml=xa=null,$t=0,(ie&6)!==0)throw Error(f(331));var u=ie;if(ie|=4,hd(i.current),fd(i,i.current,c,a),ie=u,hn(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(Vl,i)}catch{}return!0}finally{C.p=n,E.T=l,zd(e,t)}}function wd(e,t,a){t=pt(a,t),t=mc(e.stateNode,t,2),e=oa(e,t,2),e!==null&&(Rl(e,2),Rt(e))}function ue(e,t,a){if(e.tag===3)wd(e,e,a);else for(;t!==null;){if(t.tag===3){wd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ha===null||!ha.has(l))){e=pt(a,e),a=Or(2),l=oa(t,a,2),l!==null&&(Hr(a,l,t,e),Rl(l,2),Rt(l));break}}t=t.return}}function Uc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Tp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Cc=!0,n.add(a),e=Cp.bind(null,e,t,a),t.then(e,e))}function Cp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,pe===e&&($&a)===a&&(ve===4||ve===3&&($&62914560)===$&&300>$e()-vi?(ie&2)===0&&_l(e,0):Bc|=a,El===$&&(El=0)),Rt(e)}function Od(e,t){t===0&&(t=ju()),e=Va(e,t),e!==null&&(Rl(e,t),Rt(e))}function Bp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Od(e,a)}function Vp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(t),Od(e,a)}function zp(e,t){return Ii(e,t)}var Di=null,Al=null,qc=!1,Ni=!1,Fc=!1,ya=0;function Rt(e){e!==Al&&e.next===null&&(Al===null?Di=Al=e:Al=Al.next=e),Ni=!0,qc||(qc=!0,wp())}function hn(e,t){if(!Fc&&Ni){Fc=!0;do for(var a=!1,l=Di;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-et(42|e)+1)-1,i&=n&~(c&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Fd(l,i))}else i=$,i=Vn(l,l===pe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||zl(l,i)||(a=!0,Fd(l,i));l=l.next}while(a);Fc=!1}}function Rp(){Hd()}function Hd(){Ni=qc=!1;var e=0;ya!==0&&Xp()&&(e=ya);for(var t=$e(),a=null,l=Di;l!==null;){var n=l.next,i=Ud(l,t);i===0?(l.next=null,a===null?Di=n:a.next=n,n===null&&(Al=a)):(a=l,(e!==0||(i&3)!==0)&&(Ni=!0)),l=n}Ne!==0&&Ne!==5||hn(e),ya!==0&&(ya=0)}function Ud(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-et(i),u=1<<c,o=n[c];o===-1?((u&a)===0||(u&l)!==0)&&(n[c]=cm(u,t)):o<=t&&(e.expiredLanes|=u),i&=~u}if(t=pe,a=$,a=Vn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&$i(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&$i(l),ts(a)){case 2:case 8:a=Du;break;case 32:a=Nn;break;case 268435456:a=Nu;break;default:a=Nn}return l=qd.bind(null,e),a=Ii(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&$i(l),e.callbackPriority=2,e.callbackNode=null,2}function qd(e,t){if(Ne!==0&&Ne!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ai()&&e.callbackNode!==a)return null;var l=$;return l=Vn(e,e===pe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(vd(e,l,t),Ud(e,$e()),e.callbackNode!=null&&e.callbackNode===a?qd.bind(null,e):null)}function Fd(e,t){if(Ai())return null;vd(e,t,!0)}function wp(){Jp(function(){(ie&6)!==0?Ii(Au,Rp):Hd()})}function Gc(){if(ya===0){var e=dl;e===0&&(e=jn,jn<<=1,(jn&261888)===0&&(jn=256)),ya=e}return ya}function Gd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:On(""+e)}function Ld(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Op(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Gd((n[Xe]||null).action),c=l.submitter;c&&(t=(t=c[Xe]||null)?Gd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var u=new Fn("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ya!==0){var o=c?Ld(n,c):new FormData(n);cc(a,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(u.preventDefault(),o=c?Ld(n,c):new FormData(n),cc(a,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Lc=0;Lc<_s.length;Lc++){var kc=_s[Lc],Hp=kc.toLowerCase(),Up=kc[0].toUpperCase()+kc.slice(1);Mt(Hp,"on"+Up)}Mt(So,"onAnimationEnd"),Mt(vo,"onAnimationIteration"),Mt(bo,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(ep,"onTransitionRun"),Mt(tp,"onTransitionStart"),Mt(ap,"onTransitionCancel"),Mt(Eo,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),Na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Na("onBeforeInput",["compositionend","keypress","textInput","paste"]),Na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn));function kd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var u=l[c],o=u.instance,x=u.currentTarget;if(u=u.listener,o!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=x;try{i(n)}catch(b){kn(b)}n.currentTarget=null,i=o}else for(c=0;c<l.length;c++){if(u=l[c],o=u.instance,x=u.currentTarget,u=u.listener,o!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=x;try{i(n)}catch(b){kn(b)}n.currentTarget=null,i=o}}}}function W(e,t){var a=t[as];a===void 0&&(a=t[as]=new Set);var l=e+"__bubble";a.has(l)||(Yd(t,e,2,!1),a.add(l))}function Yc(e,t,a){var l=0;t&&(l|=4),Yd(a,e,l,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Xc(e){if(!e[ji]){e[ji]=!0,Ou.forEach(function(a){a!=="selectionchange"&&(qp.has(a)||Yc(a,!1,e),Yc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,Yc("selectionchange",!1,t))}}function Yd(e,t,a,l){switch(vf(t)){case 2:var n=m0;break;case 8:n=p0;break;default:n=su}a=n.bind(null,t,a,e),n=void 0,!ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Qc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var u=l.stateNode.containerInfo;if(u===n)break;if(c===4)for(c=l.return;c!==null;){var o=c.tag;if((o===3||o===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;u!==null;){if(c=Za(u),c===null)return;if(o=c.tag,o===5||o===6||o===26||o===27){l=i=c;continue e}u=u.parentNode}}l=l.return}Zu(function(){var x=i,b=os(a),T=[];e:{var y=Mo.get(e);if(y!==void 0){var S=Fn,R=e;switch(e){case"keypress":if(Un(a)===0)break e;case"keydown":case"keyup":S=Vm;break;case"focusin":R="focus",S=hs;break;case"focusout":R="blur",S=hs;break;case"beforeblur":case"afterblur":S=hs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=wm;break;case So:case vo:case bo:S=Mm;break;case Eo:S=Hm;break;case"scroll":case"scrollend":S=ym;break;case"wheel":S=qm;break;case"copy":case"cut":case"paste":S=Tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Pu;break;case"toggle":case"beforetoggle":S=Gm}var F=(t&4)!==0,fe=!F&&(e==="scroll"||e==="scrollend"),p=F?y!==null?y+"Capture":null:y;F=[];for(var r=x,h;r!==null;){var _=r;if(h=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||h===null||p===null||(_=Hl(r,p),_!=null&&F.push(gn(r,_,h))),fe)break;r=r.return}0<F.length&&(y=new S(y,R,null,a,b),T.push({event:y,listeners:F}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",y&&a!==us&&(R=a.relatedTarget||a.fromElement)&&(Za(R)||R[Ja]))break e;if((S||y)&&(y=b.window===b?b:(y=b.ownerDocument)?y.defaultView||y.parentWindow:window,S?(R=a.relatedTarget||a.toElement,S=x,R=R?Za(R):null,R!==null&&(fe=M(R),F=R.tag,R!==fe||F!==5&&F!==27&&F!==6)&&(R=null)):(S=null,R=x),S!==R)){if(F=Iu,_="onMouseLeave",p="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(F=Pu,_="onPointerLeave",p="onPointerEnter",r="pointer"),fe=S==null?y:Ol(S),h=R==null?y:Ol(R),y=new F(_,r+"leave",S,a,b),y.target=fe,y.relatedTarget=h,_=null,Za(b)===x&&(F=new F(p,r+"enter",R,a,b),F.target=h,F.relatedTarget=fe,_=F),fe=_,S&&R)t:{for(F=Fp,p=S,r=R,h=0,_=p;_;_=F(_))h++;_=0;for(var U=r;U;U=F(U))_++;for(;0<h-_;)p=F(p),h--;for(;0<_-h;)r=F(r),_--;for(;h--;){if(p===r||r!==null&&p===r.alternate){F=p;break t}p=F(p),r=F(r)}F=null}else F=null;S!==null&&Xd(T,y,S,F,!1),R!==null&&fe!==null&&Xd(T,fe,R,F,!0)}}e:{if(y=x?Ol(x):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var le=co;else if(io(y))if(uo)le=Im;else{le=Km;var O=Zm}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?x&&cs(x.elementType)&&(le=co):le=Wm;if(le&&(le=le(e,x))){so(T,le,a,b);break e}O&&O(e,y,x),e==="focusout"&&x&&y.type==="number"&&x.memoizedProps.value!=null&&ss(y,"number",y.value)}switch(O=x?Ol(x):window,e){case"focusin":(io(O)||O.contentEditable==="true")&&(ll=O,bs=x,Xl=null);break;case"focusout":Xl=bs=ll=null;break;case"mousedown":Es=!0;break;case"contextmenu":case"mouseup":case"dragend":Es=!1,go(T,a,b);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":go(T,a,b)}var Q;if(gs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else al?lo(e,a)&&(P="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(eo&&a.locale!=="ko"&&(al||P!=="onCompositionStart"?P==="onCompositionEnd"&&al&&(Q=Ku()):(aa=b,fs="value"in aa?aa.value:aa.textContent,al=!0)),O=Ci(x,P),0<O.length&&(P=new $u(P,e,null,a,b),T.push({event:P,listeners:O}),Q?P.data=Q:(Q=no(a),Q!==null&&(P.data=Q)))),(Q=km?Ym(e,a):Xm(e,a))&&(P=Ci(x,"onBeforeInput"),0<P.length&&(O=new $u("onBeforeInput","beforeinput",null,a,b),T.push({event:O,listeners:P}),O.data=Q)),Op(T,e,x,a,b)}kd(T,t)})}function gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ci(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Hl(e,a),n!=null&&l.unshift(gn(e,n,i)),n=Hl(e,t),n!=null&&l.push(gn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Fp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xd(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var u=a,o=u.alternate,x=u.stateNode;if(u=u.tag,o!==null&&o===l)break;u!==5&&u!==26&&u!==27||x===null||(o=x,n?(x=Hl(a,i),x!=null&&c.unshift(gn(a,x,o))):n||(x=Hl(a,i),x!=null&&c.push(gn(a,x,o)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Gp=/\r\n?/g,Lp=/\u0000|\uFFFD/g;function Qd(e){return(typeof e=="string"?e:""+e).replace(Gp,`
`).replace(Lp,"")}function Jd(e,t){return t=Qd(t),Qd(e)===t}function de(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Pa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Pa(e,""+l);break;case"className":Rn(e,"class",l);break;case"tabIndex":Rn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(e,a,l);break;case"style":Qu(e,l,i);break;case"data":if(t!=="object"){Rn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=On(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&de(e,t,"name",n.name,n,null),de(e,t,"formEncType",n.formEncType,n,null),de(e,t,"formMethod",n.formMethod,n,null),de(e,t,"formTarget",n.formTarget,n,null)):(de(e,t,"encType",n.encType,n,null),de(e,t,"method",n.method,n,null),de(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=On(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ht);break;case"onScroll":l!=null&&W("scroll",e);break;case"onScrollEnd":l!=null&&W("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=On(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":W("beforetoggle",e),W("toggle",e),zn(e,"popover",l);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xm.get(a)||a,zn(e,a,l))}}function Jc(e,t,a,l,n,i){switch(a){case"style":Qu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Pa(e,l):(typeof l=="number"||typeof l=="bigint")&&Pa(e,""+l);break;case"onScroll":l!=null&&W("scroll",e);break;case"onScrollEnd":l!=null&&W("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ht);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Xe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):zn(e,a,l)}}}function Oe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",e),W("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:de(e,t,i,c,a,null)}}n&&de(e,t,"srcSet",a.srcSet,a,null),l&&de(e,t,"src",a.src,a,null);return;case"input":W("invalid",e);var u=i=c=n=null,o=null,x=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":n=b;break;case"type":c=b;break;case"checked":o=b;break;case"defaultChecked":x=b;break;case"value":i=b;break;case"defaultValue":u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,t));break;default:de(e,t,l,b,a,null)}}Lu(e,i,u,o,x,c,n,!1);return;case"select":W("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":c=u;break;case"multiple":l=u;default:de(e,t,n,u,a,null)}t=i,a=c,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":W("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(u=a[c],u!=null))switch(c){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(f(91));break;default:de(e,t,c,u,a,null)}Yu(e,l,n,i);return;case"option":for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null)&&(o==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":de(e,t,o,l,a,null));return;case"dialog":W("beforetoggle",e),W("toggle",e),W("cancel",e),W("close",e);break;case"iframe":case"object":W("load",e);break;case"video":case"audio":for(l=0;l<xn.length;l++)W(xn[l],e);break;case"image":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"embed":case"source":case"link":W("error",e),W("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:de(e,t,x,l,a,null)}return;default:if(cs(t)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Jc(e,t,b,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&de(e,t,u,l,a,null))}function kp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,u=null,o=null,x=null,b=null;for(S in a){var T=a[S];if(a.hasOwnProperty(S)&&T!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":o=T;default:l.hasOwnProperty(S)||de(e,t,S,null,l,T)}}for(var y in l){var S=l[y];if(T=a[y],l.hasOwnProperty(y)&&(S!=null||T!=null))switch(y){case"type":i=S;break;case"name":n=S;break;case"checked":x=S;break;case"defaultChecked":b=S;break;case"value":c=S;break;case"defaultValue":u=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(f(137,t));break;default:S!==T&&de(e,t,y,S,l,T)}}is(e,c,u,o,x,b,i,n);return;case"select":S=c=u=y=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":S=o;default:l.hasOwnProperty(i)||de(e,t,i,null,l,o)}for(n in l)if(i=l[n],o=a[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":y=i;break;case"defaultValue":u=i;break;case"multiple":c=i;default:i!==o&&de(e,t,n,i,l,o)}t=u,a=c,l=S,y!=null?$a(e,!!a,y,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":S=y=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:de(e,t,u,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":y=n;break;case"defaultValue":S=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&de(e,t,c,n,l,i)}ku(e,y,S);return;case"option":for(var R in a)y=a[R],a.hasOwnProperty(R)&&y!=null&&!l.hasOwnProperty(R)&&(R==="selected"?e.selected=!1:de(e,t,R,null,l,y));for(o in l)y=l[o],S=a[o],l.hasOwnProperty(o)&&y!==S&&(y!=null||S!=null)&&(o==="selected"?e.selected=y&&typeof y!="function"&&typeof y!="symbol":de(e,t,o,y,l,S));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)y=a[F],a.hasOwnProperty(F)&&y!=null&&!l.hasOwnProperty(F)&&de(e,t,F,null,l,y);for(x in l)if(y=l[x],S=a[x],l.hasOwnProperty(x)&&y!==S&&(y!=null||S!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,t));break;default:de(e,t,x,y,l,S)}return;default:if(cs(t)){for(var fe in a)y=a[fe],a.hasOwnProperty(fe)&&y!==void 0&&!l.hasOwnProperty(fe)&&Jc(e,t,fe,void 0,l,y);for(b in l)y=l[b],S=a[b],!l.hasOwnProperty(b)||y===S||y===void 0&&S===void 0||Jc(e,t,b,y,l,S);return}}for(var p in a)y=a[p],a.hasOwnProperty(p)&&y!=null&&!l.hasOwnProperty(p)&&de(e,t,p,null,l,y);for(T in l)y=l[T],S=a[T],!l.hasOwnProperty(T)||y===S||y==null&&S==null||de(e,t,T,y,l,S)}function Zd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,u=n.duration;if(i&&u&&Zd(c)){for(c=0,u=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],x=o.startTime;if(x>u)break;var b=o.transferSize,T=o.initiatorType;b&&Zd(T)&&(o=o.responseEnd,c+=b*(o<u?1:(u-x)/(o-x)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zc=null,Kc=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function Kd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ic=null;function Xp(){var e=window.event;return e&&e.type==="popstate"?e===Ic?!1:(Ic=e,!0):(Ic=null,!1)}var Id=typeof setTimeout=="function"?setTimeout:void 0,Qp=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,Jp=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(e){return $d.resolve(null).then(e).catch(Zp)}:Id;function Zp(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function Pd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Cl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")yn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,u=i.nodeName;i[wl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&yn(e.ownerDocument.body);a=n}while(a);Cl(t)}function ef(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function $c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$c(a),ls(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Kp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function Wp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=St(e.nextSibling),e===null))return null;return e}function tf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=St(e.nextSibling),e===null))return null;return e}function Pc(e){return e.data==="$?"||e.data==="$~"}function eu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ip(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var tu=null;function af(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return St(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function lf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function nf(e,t,a){switch(t=Bi(a),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ls(e)}var vt=new Map,sf=new Set;function Vi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pt=C.d;C.d={f:$p,r:Pp,D:e0,C:t0,L:a0,m:l0,X:i0,S:n0,M:s0};function $p(){var e=Pt.f(),t=Mi();return e||t}function Pp(e){var t=Ka(e);t!==null&&t.tag===5&&t.type==="form"?Er(t):Pt.r(e)}var Dl=typeof document>"u"?null:document;function cf(e,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var n=ft(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),sf.has(n)||(sf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Oe(t,"link",e),Ce(t),l.head.appendChild(t)))}}function e0(e){Pt.D(e),cf("dns-prefetch",e,null)}function t0(e,t){Pt.C(e,t),cf("preconnect",e,t)}function a0(e,t,a){Pt.L(e,t,a);var l=Dl;if(l&&e&&t){var n='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ft(a.imageSizes)+'"]')):n+='[href="'+ft(e)+'"]';var i=n;switch(t){case"style":i=Nl(e);break;case"script":i=jl(e)}vt.has(i)||(e=H({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Sn(i))||t==="script"&&l.querySelector(vn(i))||(t=l.createElement("link"),Oe(t,"link",e),Ce(t),l.head.appendChild(t)))}}function l0(e,t){Pt.m(e,t);var a=Dl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ft(l)+'"][href="'+ft(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=jl(e)}if(!vt.has(i)&&(e=H({rel:"modulepreload",href:e},t),vt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vn(i)))return}l=a.createElement("link"),Oe(l,"link",e),Ce(l),a.head.appendChild(l)}}}function n0(e,t,a){Pt.S(e,t,a);var l=Dl;if(l&&e){var n=Wa(l).hoistableStyles,i=Nl(e);t=t||"default";var c=n.get(i);if(!c){var u={loading:0,preload:null};if(c=l.querySelector(Sn(i)))u.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(i))&&au(e,a);var o=c=l.createElement("link");Ce(o),Oe(o,"link",e),o._p=new Promise(function(x,b){o.onload=x,o.onerror=b}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,zi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:u},n.set(i,c)}}}function i0(e,t){Pt.X(e,t);var a=Dl;if(a&&e){var l=Wa(a).hoistableScripts,n=jl(e),i=l.get(n);i||(i=a.querySelector(vn(n)),i||(e=H({src:e,async:!0},t),(t=vt.get(n))&&lu(e,t),i=a.createElement("script"),Ce(i),Oe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function s0(e,t){Pt.M(e,t);var a=Dl;if(a&&e){var l=Wa(a).hoistableScripts,n=jl(e),i=l.get(n);i||(i=a.querySelector(vn(n)),i||(e=H({src:e,async:!0,type:"module"},t),(t=vt.get(n))&&lu(e,t),i=a.createElement("script"),Ce(i),Oe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function uf(e,t,a,l){var n=(n=Z.current)?Vi(n):null;if(!n)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Nl(a.href),a=Wa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Nl(a.href);var i=Wa(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Sn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),i||c0(n,e,a,c.state))),t&&l===null)throw Error(f(528,""));return c}if(t&&l!==null)throw Error(f(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=jl(a),a=Wa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Nl(e){return'href="'+ft(e)+'"'}function Sn(e){return'link[rel="stylesheet"]['+e+"]"}function of(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function c0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Oe(t,"link",a),Ce(t),e.head.appendChild(t))}function jl(e){return'[src="'+ft(e)+'"]'}function vn(e){return"script[async]"+e}function rf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ft(a.href)+'"]');if(l)return t.instance=l,Ce(l),l;var n=H({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ce(l),Oe(l,"style",n),zi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Nl(a.href);var i=e.querySelector(Sn(n));if(i)return t.state.loading|=4,t.instance=i,Ce(i),i;l=of(a),(n=vt.get(n))&&au(l,n),i=(e.ownerDocument||e).createElement("link"),Ce(i);var c=i;return c._p=new Promise(function(u,o){c.onload=u,c.onerror=o}),Oe(i,"link",l),t.state.loading|=4,zi(i,a.precedence,e),t.instance=i;case"script":return i=jl(a.src),(n=e.querySelector(vn(i)))?(t.instance=n,Ce(n),n):(l=a,(n=vt.get(i))&&(l=H({},a),lu(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),Oe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,zi(l,a.precedence,e));return t.instance}function zi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var u=l[c];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ri=null;function df(e,t,a){if(Ri===null){var l=new Map,n=Ri=new Map;n.set(a,l)}else n=Ri,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[wl]||i[Ve]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var u=l.get(c);u?u.push(i):l.set(c,[i])}}return l}function ff(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function u0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function mf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function o0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Nl(l.href),i=t.querySelector(Sn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ce(i);return}i=t.ownerDocument||t,l=of(l),(n=vt.get(n))&&au(l,n),i=i.createElement("link"),Ce(i);var c=i;c._p=new Promise(function(u,o){c.onload=u,c.onerror=o}),Oe(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var nu=0;function r0(e,t){return e.stylesheets&&e.count===0&&Hi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&nu===0&&(nu=62500*Yp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>nu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function wi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oi=null;function Hi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oi=new Map,t.forEach(d0,e),Oi=null,wi.call(e))}function d0(e,t){if(!(t.state.loading&4)){var a=Oi.get(e);if(a)var l=a.get(null);else{a=new Map,Oi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=wi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var bn={$$typeof:He,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function f0(e,t,a,l,n,i,c,u,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.hiddenUpdates=Pi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function pf(e,t,a,l,n,i,c,u,o,x,b,T){return e=new f0(e,t,a,c,o,x,b,T,u),t=1,i===!0&&(t|=24),i=at(3,null,null,t),e.current=i,i.stateNode=e,t=Hs(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Gs(i),e}function hf(e){return e?(e=sl,e):sl}function xf(e,t,a,l,n,i){n=hf(n),l.context===null?l.context=n:l.pendingContext=n,l=ua(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=oa(e,l,t),a!==null&&(Ie(a,e,t),$l(a,e,t))}function gf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function iu(e,t){gf(e,t),(e=e.alternate)&&gf(e,t)}function yf(e){if(e.tag===13||e.tag===31){var t=Va(e,67108864);t!==null&&Ie(t,e,67108864),iu(e,67108864)}}function Sf(e){if(e.tag===13||e.tag===31){var t=ct();t=es(t);var a=Va(e,t);a!==null&&Ie(a,e,t),iu(e,t)}}var Ui=!0;function m0(e,t,a,l){var n=E.T;E.T=null;var i=C.p;try{C.p=2,su(e,t,a,l)}finally{C.p=i,E.T=n}}function p0(e,t,a,l){var n=E.T;E.T=null;var i=C.p;try{C.p=8,su(e,t,a,l)}finally{C.p=i,E.T=n}}function su(e,t,a,l){if(Ui){var n=cu(l);if(n===null)Qc(e,t,l,qi,a),bf(e,l);else if(x0(n,e,t,a,l))l.stopPropagation();else if(bf(e,l),t&4&&-1<h0.indexOf(e)){for(;n!==null;){var i=Ka(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Da(i.pendingLanes);if(c!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var o=1<<31-et(c);u.entanglements[1]|=o,c&=~o}Rt(i),(ie&6)===0&&(bi=$e()+500,hn(0))}}break;case 31:case 13:u=Va(i,2),u!==null&&Ie(u,i,2),Mi(),iu(i,2)}if(i=cu(l),i===null&&Qc(e,t,l,qi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Qc(e,t,l,null,a)}}function cu(e){return e=os(e),uu(e)}var qi=null;function uu(e){if(qi=null,e=Za(e),e!==null){var t=M(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=V(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qi=e,null}function vf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(em()){case Au:return 2;case Du:return 8;case Nn:case tm:return 32;case Nu:return 268435456;default:return 32}default:return 32}}var ou=!1,va=null,ba=null,Ea=null,En=new Map,Mn=new Map,Ma=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bf(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":En.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function _n(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ka(t),t!==null&&yf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function x0(e,t,a,l,n){switch(t){case"focusin":return va=_n(va,e,t,a,l,n),!0;case"dragenter":return ba=_n(ba,e,t,a,l,n),!0;case"mouseover":return Ea=_n(Ea,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return En.set(i,_n(En.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Mn.set(i,_n(Mn.get(i)||null,e,t,a,l,n)),!0}return!1}function Ef(e){var t=Za(e.target);if(t!==null){var a=M(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,Ru(e.priority,function(){Sf(a)});return}}else if(t===31){if(t=V(a),t!==null){e.blockedOn=t,Ru(e.priority,function(){Sf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=cu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);us=l,a.target.dispatchEvent(l),us=null}else return t=Ka(a),t!==null&&yf(t),e.blockedOn=a,!1;t.shift()}return!0}function Mf(e,t,a){Fi(e)&&a.delete(t)}function g0(){ou=!1,va!==null&&Fi(va)&&(va=null),ba!==null&&Fi(ba)&&(ba=null),Ea!==null&&Fi(Ea)&&(Ea=null),En.forEach(Mf),Mn.forEach(Mf)}function Gi(e,t){e.blockedOn===t&&(e.blockedOn=null,ou||(ou=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,g0)))}var Li=null;function _f(e){Li!==e&&(Li=e,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Li===e&&(Li=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(uu(l||a)===null)continue;break}var i=Ka(a);i!==null&&(e.splice(t,3),t-=3,cc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Cl(e){function t(o){return Gi(o,e)}va!==null&&Gi(va,e),ba!==null&&Gi(ba,e),Ea!==null&&Gi(Ea,e),En.forEach(t),Mn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Ef(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Xe]||null;if(typeof i=="function")c||_f(a);else if(c){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Xe]||null)u=c.formAction;else if(uu(n)!==null)continue}else u=c.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),_f(a)}}}function Tf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ru(e){this._internalRoot=e}ki.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var a=t.current,l=ct();xf(a,l,e,t,null,null)},ki.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xf(e.current,2,null,e,null,null),Mi(),t[Ja]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=zu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&Ef(e)}};var Af=z.version;if(Af!=="19.2.3")throw Error(f(527,Af,"19.2.3"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=g(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var y0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{Vl=Yi.inject(y0),Pe=Yi}catch{}}return An.createRoot=function(e,t){if(!j(e))throw Error(f(299));var a=!1,l="",n=Vr,i=zr,c=Rr;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=pf(e,1,!1,null,null,a,l,null,n,i,c,Tf),e[Ja]=t.current,Xc(e),new ru(t)},An.hydrateRoot=function(e,t,a){if(!j(e))throw Error(f(299));var l=!1,n="",i=Vr,c=zr,u=Rr,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=pf(e,1,!0,t,a??null,l,n,o,i,c,u,Tf),t.context=hf(null),a=t.current,l=ct(),l=es(l),n=ua(l),n.callback=null,oa(a,n,l),a=l,t.current.lanes=a,Rl(t,a),Rt(t),e[Ja]=t.current,Xc(e),new ki(t)},An.version="19.2.3",An}var Of;function N0(){if(Of)return mu.exports;Of=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(z){console.error(z)}}return A(),mu.exports=D0(),mu.exports}var j0=N0();const C0=A=>A.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B0=A=>A.replace(/^([A-Z])|[\s-_]+(\w)/g,(z,N,f)=>f?f.toUpperCase():N.toLowerCase()),Hf=A=>{const z=B0(A);return z.charAt(0).toUpperCase()+z.slice(1)},Xf=(...A)=>A.filter((z,N,f)=>!!z&&z.trim()!==""&&f.indexOf(z)===N).join(" ").trim(),V0=A=>{for(const z in A)if(z.startsWith("aria-")||z==="role"||z==="title")return!0};var z0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const R0=I.forwardRef(({color:A="currentColor",size:z=24,strokeWidth:N=2,absoluteStrokeWidth:f,className:j="",children:M,iconNode:v,...V},m)=>I.createElement("svg",{ref:m,...z0,width:z,height:z,stroke:A,strokeWidth:f?Number(N)*24/Number(z):N,className:Xf("lucide",j),...!M&&!V0(V)&&{"aria-hidden":"true"},...V},[...v.map(([g,k])=>I.createElement(g,k)),...Array.isArray(M)?M:[M]]));const J=(A,z)=>{const N=I.forwardRef(({className:f,...j},M)=>I.createElement(R0,{ref:M,iconNode:z,className:Xf(`lucide-${C0(Hf(A))}`,`lucide-${A}`,f),...j}));return N.displayName=Hf(A),N};const w0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],O0=J("activity",w0);const H0=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],U0=J("arrow-up",H0);const q0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Xi=J("book-open",q0);const F0=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],G0=J("bug",F0);const L0=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],gu=J("calculator",L0);const k0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Y0=J("check",k0);const X0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ut=J("chevron-down",X0);const Q0=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],At=J("chevron-up",Q0);const J0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Z0=J("circle-alert",J0);const K0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],yu=J("circle-check-big",K0);const W0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],I0=J("circle-check",W0);const $0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],P0=J("circle-question-mark",$0);const e1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Qf=J("circle-x",e1);const t1=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Qi=J("code-xml",t1);const a1=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],l1=J("code",a1);const n1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],i1=J("copy",n1);const s1=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Uf=J("database",s1);const c1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],u1=J("download",c1);const o1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Xa=J("external-link",o1);const r1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],d1=J("file-code",r1);const f1=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],m1=J("folder-open",f1);const p1=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],h1=J("git-branch",p1);const x1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],g1=J("github",x1);const y1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],S1=J("heart",y1);const v1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],b1=J("layers",v1);const E1=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],M1=J("layout-template",E1);const _1=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Mu=J("lightbulb",_1);const T1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],A1=J("menu",T1);const D1=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],qf=J("message-square",D1);const N1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Jf=J("palette",N1);const j1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],C1=J("rocket",j1);const B1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Zf=J("search",B1);const V1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],z1=J("target",V1);const R1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],w1=J("terminal",R1);const O1=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Ff=J("thermometer",O1);const H1=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Su=J("triangle-alert",H1);const U1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Kf=J("users",U1);const q1=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],Gf=J("waves",q1);const F1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wf=J("x",F1);const G1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],vu=J("zap",G1),L1=[{id:"basic",name:"基础运算",nameEn:"Basic Operations"},{id:"math",name:"数学运算",nameEn:"Math Operations"},{id:"condition",name:"条件判断",nameEn:"Conditionals"},{id:"trigger",name:"触发器系统",nameEn:"Triggers"},{id:"gamestate",name:"游戏状态获取",nameEn:"Game State"},{id:"mission",name:"任务相关",nameEn:"Mission"},{id:"advanced",name:"高级功能",nameEn:"Advanced"}],bu=[{name:"Accumulate",nameEn:"Accumulate",description:"累加器。可以从Initial指定的初始值上开始累加，以跟踪其它Mutators的变化。此外，还可通过使用Min和Max对累计值进行范围限定。若与常数值配合使用，即可实现一个简单的计数器。",example:`{
    "Mutate": "Accumulate",
    "Initial": 0,
    "Value": 1,
    "Min": 0,
    "Max": 10
}`,category:"basic",subFields:[{name:"Initial",description:"初始值",required:!0},{name:"Value",description:"每次累加的值",required:!0},{name:"Min",description:"最小值限制"},{name:"Max",description:"最大值限制"}]},{name:"Add / Subtract / Multiply / Divide",nameEn:"Arithmetic Operations",description:"基础数学运算（加/减/乘/除）。A和B可以是数字，也可以是嵌套的Mutate表达式。",example:`"SpeedModifier": {
      "Mutate": "Add",
      "A": 1.35,
      "B": {
        "Mutate": "Multiply",
        "A": { "Mutate": "ResuppliesCalled" },
        "B": 0.1
      }
}
      //以上内容表示：速度乘数=1.35+（0.1*呼叫补给次数），这样，玩家呼叫补给次数越多，敌人的移动速度就越快`,category:"basic",subFields:[{name:"A",description:"第一个操作数",required:!0},{name:"B",description:"第二个操作数",required:!0}]},{name:"Clamp",nameEn:"Clamp",description:"限制。将一个浮点数限制在一个范围内，这个范围包括边界值（min/max）。如果只指定最小值或最大值，则只在对应方向进行限制。",example:`{
    "Mutate": "Clamp",
    "Value": 90,
    "Min": 0,
    "Max": 100
}`,category:"basic",subFields:[{name:"Value",description:"要限制的值",required:!0},{name:"Min",description:"最小值"},{name:"Max",description:"最大值"}]},{name:"Pow",nameEn:"Power",description:"幂运算。计算A的B次方。",example:`{
    "Mutate": "Pow",
    "A": 2,
    "B": 3
}
    //2的3次方，最终输出的值为8`,category:"math",subFields:[{name:"A",description:"底数",required:!0},{name:"B",description:"指数",required:!0}]},{name:"Round / Ceil / Floor",nameEn:"Rounding",description:"四舍五入/向上取整/向下取整。",example:`{
    "Mutate": "Floor",
    "Value": 3.7
}
    //这里的值虽然填的3.7，但由于受到floor的控制，最终输出到游戏内的值为3`,category:"math",subFields:[{name:"Value",description:"要取整的值",required:!0}]},{name:"Max / Min",nameEn:"Max / Min",description:"返回给定数值中的最大值/最小值。",example:`{
    "Mutate": "Max",
    "Values": [10, 20, 5, 30]
}
    //数组中30最大，因此最终输出的值为30`,category:"math",subFields:[{name:"Values",description:"数值数组",required:!0}]},{name:"Random",nameEn:"Random",description:"在Min和Max之间持续生成均匀分布的随机浮点数。",example:`{
    "Mutate": "Random",
    "Min": 40,
    "Max": 60
}`,category:"math",subFields:[{name:"Min",description:"最小值",required:!0},{name:"Max",description:"最大值",required:!0}]},{name:"If",nameEn:"If",description:"条件判断。检查一个布尔条件是否触发，并据此在Then或Else之间选择。",example:`{
    "Mutate": "If",
    "Condition": { "Mutate": "DuringDefend" },
    "Then": ["ED_Spider_Tank_Boss"],
    "Else": []
}
    //这段意为：如果在防守（黑匣子、上传、加油）中，则选中无畏，如果不在，则什么都不选
    //这段代码常常配合wavespawn模块实现这样的机制：进入防守则立刻（或延迟）刷出无畏，给矮人们上点强度
    //若不明白可以继续往后面看，wavespawn板块和练习题板块有详解`,category:"condition",subFields:[{name:"Condition",description:"条件表达式",required:!0},{name:"Then",description:"条件为真时的值",required:!0},{name:"Else",description:"条件为假时的值",required:!0}]},{name:"IfFloat",nameEn:"IfFloat",description:"浮点数条件判断。根据两个浮点数值的比较结果选择返回值。支持的运算符包括：==, >=, >, <=, <。",example:`{
    "Mutate": "IfFloat",
    "Value": { "Mutate": "ResuppliesCalled" },
    "<": 2,
    "Then": 40,
    "Else": 80
}
    //以上代码表示：若呼叫补给次数小于2次，则取值40，否则取值80
    //这段代码可以套到任何有数字的地方，比如：
{
  "EnemyCountModifier: ": 3
}
  //EnemyCountModifier意为虫群倍数，你可以将这里的3，替换为上面的结构，就像这样：
{
  "EnemyCountModifier: ": {
    "Mutate": "IfFloat",
    "Value": {
      "Mutate": "ResuppliesCalled"
    },
    "<": 2,
    "Then": 3,
    "Else": 6
  }
}
  //这样，就实现了“虫群倍数”与“呼叫补给次数”的绑定，在呼叫补给次数小于2时，倍数为3，呼叫2次补给后，倍数变成6,`,category:"condition",subFields:[{name:"Value",description:"要比较的值",required:!0},{name:"== / >= / > / <= / <",description:"比较运算符和比较值",required:!0},{name:"Then",description:"条件为真时的值",required:!0},{name:"Else",description:"条件为假时的值",required:!0}]},{name:"And / Or / Not",nameEn:"Logical Operators",description:"布尔逻辑运算。And和Or接受A和B两个布尔值，Not接受一个布尔值。",example:`{
  "Mutate": "And",
  "A": {
    "Mutate": "DuringMission",
    "StartingAt": 300
  },
  "B": {
    "Mutate": "IfFloat",
    "Value": {
      "Mutate": "EnemyCount"
    },
    "<": 50,
    "Then": true,
    "Else": false
  }
}
  //A条件：任务开始300秒后
  //B条件：所有敌人数量小于50
  //and表示：A和B两个条件同时满足，则输出true，任何一个不满足，则输出false
  //以下给出916t1（beta3-d8）代码中的一段作为例子：
{
  "Name": "副任务维度空间触发",
  "Enabled": ture,
  "Enemies": [
    "ED_Dimensional_Space_II"
  ],
  "Interval": 0,
  "Difficulty": 1,
  "Distance": 5000,
  "Locations": 1
}
  //这里的Enabled为true，也就是无论任何情况，都会触发维度空间，这显然是不平衡的
  //那么我们需要对“何时触发”下具体的定义，还记得刚才的and条件么？没错，我们把true替换为上面的整个结构！
  //就像这样：
{
  "Name": "副任务维度空间触发",
  "Enabled": {
    "Mutate": "TriggerOnce",
    "In": {
      "Mutate": "And",
      "A": {
        "var": "Secondary_Reward_Stage_I"
      },
      "B": {
        "Mutate": "IfFloat",
        "Value": {
          "Mutate": "DwarfCount"
        },
        "==": 4,
        "Then": {
          "Mutate": "IfFloat",
          "Value": {
            "Mutate": "DwarvesDown"
          },
          "==": 3,
          "Then": true,
          "Else": false
        },
        "Else": false
      }
    }
  },
  "Enemies": [
    "ED_Dimensional_Space_II"
  ],
  "Interval": 0,
  "Difficulty": 1,
  "Distance": 5000,
  "Locations": 1
}
  //这样，首先需要满足A条件："var": "Secondary_Reward_Stage_I"。这一行看不懂没事，后面会讲，你先当做一个条件就行，这里主要是理解代码结构！
  //B条件：玩家为4人，且3人倒地
  //A和B同时满足，则生成ED_Dimensional_Space_II（触发维度空间II）`,category:"condition",subFields:[{name:"A",description:"第一个布尔值",required:!0},{name:"B",description:"第二个布尔值（Not不需要）",required:!1}]},{name:"Select",nameEn:"Select",description:"类似于编程语言中的switch语句，根据一个字符串值选择不同的配置选项。配合Vars模块使用非常有用。",example:`{
  "Mutate": "Select",
  "Select": "条件值",           // 根据这个值选择
  "Default": "默认值",         // 没有匹配条件时的默认值
  "选项1": "结果1",           // 如果Select等于"选项1"
  "选项2": "结果2",           // 如果Select等于"选项2"
  "选项3": "结果3"            // 如果Select等于"选项3"
}
  //以下给出一个示例：
{
  "FriendlyFireModifier": {
    "Mutate": "Select",
    "Select": {
      "Mutate": "If",
      "Condition": {
        "Mutate": "SecondaryFinished"
      },
      "Then": "完成副任务",
      "Else": "未完成"
    },
    "Default": 1,
    "完成副任务": 0.5,
    "未完成": 1
  }
}
  //还记得之前的if字段的例子么？将其填入select的数值中
  //FriendlyFireModifier意为友伤系数，这样，就完成了：副任务未完成，友伤系数为1，副任务完成，友伤减半（系数0.5）
  //另外：在select字段中，选项的【名称】是支持中文的，也是可以自定义的，比如，同样的功能，你也可以写成这样：
{
  "FriendlyFireModifier": {
    "Mutate": "Select",
    "Select": {
      "Mutate": "If",
      "Condition": {
        "Mutate": "SecondaryFinished"
      },
      "Then": "副任务已完成",
      "Else": "副任务未完成"
    },
    "Default": 1,
    "副任务已完成": 0.5,
    "副任务未完成": 1
  }
}
  //只需要你在select里面定义的【选项名】，和后面的【选项名】一致即可，而这样的【选项名】也可以是数字！
  //例如：
{
  "Enemies": {
    "Mutate": "Select",
    "Select": {
      "Mutate": "Floor",
      "Value": {
        "Mutate": "Divide",
        "A": {
          "Mutate": "ByTime"
        },
        "B": 300
      }
    },
    "Default": [
      "战士"
    ]
    "0": [
      "禁卫"
    ],
    "1": [
      "暴君"
    ],
    "2": [
      "无畏"
    ],
    "3": [
      "巢主"
    ],
  }
}
  //这里select部分的值，被一大串运算替换，这段运算中，ByTime获取游戏时间，Divide负责让游戏时间除以300，floor则对商取整数
  //经过floor的取整，select的值最终会根据游戏时间，逐渐从0变成1，变成2...
  //300的单位是秒，也就是说，每五分钟，select的值就会+1
  //default下方的0、1、2、3则刚好保持与select输出的数字一致！
  //这样就完成了如此机制：默认生成战士，5分钟前生成禁卫，5-10分钟生成暴君，10-15分钟生成无畏，15-20分钟生成巢主
  //以上是select功能的初级用法，事实上，这个模块能实现更强大的功能，在vars和例题练习中有示例，请对照观看`,category:"condition",subFields:[{name:"Select",description:"要选择的变量",required:!0},{name:"Default",description:"默认值",required:!0},{name:"[自定义选项]",description:"其他选项值"}]},{name:"TriggerOnce",nameEn:"TriggerOnce",description:"单次触发。仅在输入In首次由False→True时触发一次，此后不再响应。适用于需在每个任务中恰好执行一次的逻辑。",example:`{
    "Mutate": "TriggerOnce",
    "In": { "Mutate": "SecondaryFinished" }
}
    //以上意思是：在副任务完成时触发一次，且全局只有一次
    //这样的结构可以插入到任何需要判断【触发】的代码中，例如：
    {
      "Send": {
        "Mutate": "TriggerOnce",
        "In": {
          "Mutate": "IfFloat",
          "Value": {
            "Mutate": "TotalResource",
            "Resource": "Morkite"
          },
          ">=": 220,
          "Then": true,
          "Else": false
        }
      },
      "Type": "Developer",
      "Sender": "采矿警告",
      "Message": "【您已获得220墨棱石，距离触发虫潮还剩60点墨棱石，请做好接潮准备！】"
    }
    //send为发送（后面message模块有讲）
    //IfFloat为获取数值，TotalResource为获取矿物数值，Morkite为墨棱石，很显然，我将这段结构插入到in（触发条件中）
    //以上代码意思是：在墨棱石数量超过220时，发送一条消息，提醒玩家即将触发虫潮
    //下面再给一个916t1（beta3-d8）中的一段实例：
{
  "Name": "搜救行动-超维度地形摧毁者",  // 波次名称
  "Enabled": {                           // 启用条件（关键！）
    "Mutate": "BySalvagePhase",          // 根据搜救阶段判断
    "Default": false,                    // 默认不启用
    "Refuel": {                          // 只在"加油阶段"（最后防御阶段）
      "Mutate": "TriggerOnce",           // 只触发一次
      "In": {
        "Mutate": "IfFloat",
        "Value": {
          "Mutate": "DistanceToDroppod",  // 检查到撤离舱的距离
          "Default": 7777,                // 默认值7777（很远的距离）
          "IncludeDowned": false          // 不包括倒地的矮人
        },
        "<=": 2200,                       // 距离≤2200单位时
        "Then": true,                     // 条件成立
        "Else": false
      }
    }
  },
  "Enemies": ["ED_Terrain_Destroyer"],   // 生成"地形摧毁者"敌人
  "Interval": 0,                         // 间隔0秒（立即生成）
  "Difficulty": 1,                       // 难度1（很低，只是触发器）
  "Distance": 1,                         // 距离1单位（在玩家旁边生成）
  "Locations": 1                         // 生成位置：1个
}
  //这一整段的意思：撤离舱加油阶段时，若矮人在空降仓2200范围内（或者远离到刚好7777范围）时，就触发一次地形破坏
  //这里TriggerOnce就起到了触发【地形摧毁者】的作用，且确保只触发一次（如果用别的触发字段，可能会多次触发，地形反复摧毁，玩着就不平衡了！）`,category:"trigger",subFields:[{name:"In",description:"触发条件",required:!0},{name:"Reset",description:"重置触发器（可选）"}]},{name:"TriggerNTimes",nameEn:"TriggerNTimes",description:"触发N次。最多允许N次输入In从False→True的转换，此后不再响应。",example:`{
    "Mutate": "TriggerNTimes",
    "N": 3,
    "In": { "Mutate": "DuringMission", "StartingAt": 600 }
}`,category:"trigger",subFields:[{name:"N",description:"触发次数",required:!0},{name:"In",description:"触发条件",required:!0}]},{name:"TriggerSometimes",nameEn:"TriggerSometimes",description:"概率触发。当In从False→True时，仅以设定的概率P触发。",example:`{
    "Mutate": "TriggerSometimes",
    "P": 0.3,
    "In": { "Mutate": "ResuppliesCalled" }
}`,category:"trigger",subFields:[{name:"P",description:"触发概率(0-1)",required:!0},{name:"In",description:"触发条件",required:!0}]},{name:"TriggerDelay",nameEn:"TriggerDelay",description:"延迟触发。将输入In的布尔值字段变化延迟N秒后输出。",example:`{
    "Mutate": "TriggerDelay",
    "N": 15,
    "In": { "Mutate": "ResuppliesCalled" }
}`,category:"trigger",subFields:[{name:"N",description:"延迟秒数",required:!0},{name:"In",description:"触发条件",required:!0}]},{name:"TriggerFixedDuration",nameEn:"TriggerFixedDuration",description:"固定持续时间触发。无论输入布尔值字段如何变化，该触发器都会保持True状态N秒，之后才变回False。",example:`{
    "Mutate": "TriggerFixedDuration",
    "N": 20,
    "In": { "Mutate": "TriggerOnce", "In": { "Mutate": "ResuppliesCalled" } }
}`,category:"trigger",subFields:[{name:"N",description:"持续秒数",required:!0},{name:"In",description:"触发条件",required:!0},{name:"Reset",description:"是否允许重置"}]},{name:"TriggerOnChange",nameEn:"TriggerOnChange",description:"变化触发。接受一个浮点数输入In，当输入值发生变化时，该触发器会瞬间返回True。支持RiseOnly和FallOnly。",example:`{
    "Mutate": "TriggerOnChange",
    "RiseOnly": true,
    "In": { "Mutate": "ResuppliesCalled" }
}`,category:"trigger",subFields:[{name:"In",description:"要监视的值",required:!0},{name:"RiseOnly",description:"仅在值上升时触发"},{name:"FallOnly",description:"仅在值下降时触发"}]},{name:"TriggerCooldown",nameEn:"TriggerCooldown",description:"冷却触发。当In从True→False后，在接下来的N秒内无法再次变为True。",example:`{
    "Mutate": "TriggerCooldown",
    "N": 60,
    "In": { "Mutate": "DuringGenericSwarm" }
}`,category:"trigger",subFields:[{name:"N",description:"冷却秒数",required:!0},{name:"In",description:"触发条件",required:!0}]},{name:"EnemyCount",nameEn:"EnemyCount",description:"当前敌人计数。统计当前地图上存活的敌人总数。可选地，也可仅统计某一特定敌人描述符的存活数量。",example:`{
    "Mutate": "EnemyCount"
}
// 或
{
    "Mutate": "EnemyCount",
    "ED": "ED_Spider_Grunt"
}
// 或
{
    "Mutate": "EnemyCount",
    "EDs": ["ED_Spider_Grunt", "ED_Spider_Tank"]
}
    //以上三种的区别是：获取全部敌人数量/获取ED_Spider_Grunt敌人的数量/获取"ED_Spider_Grunt", "ED_Spider_Tank"这两种敌人的数量
    //这应该是使用率最高的mutate字段了，接下来我举几个例子
    //Hazard 9-HawkesWorkSpring-EX中的一段：
      "Heal": {
        "Mutate": "IfFloat",
        "Value": {
          "Mutate": "EnemyCount",
          "ED": "Heavy_Dead"
        },
        ">=": 1,
        "Then": -9999999,
        "Else": 0
      },
      //heal意为治疗量，这段意思显然是，当Heavy_Dead数量大于等于1是，治疗量为-99999（相当于立刻杀死该怪物），否则为0
      //Hazard 9 《年轮-零式》（beta v1.16 cd2）中的一段：
      "TimeDilation": {
        "Mutate": "IfFloat",
        "Value": {
          "Mutate": "EnemyCount",
          "ED": "ED_Time_Stop"
        },
        ">=": 1,
        "Then": 0.2,
        "Else": 1
      },
      //TimeDilation意为时间流速，这段意思是，当ED_Time_Stop数量大于等于1时，时间流速为0.2（相当于时间停止慢动作），否则为1（正常速度）
      //Hazard 9-Polar-Night(beta1) 中的一段：
    {
      "Enabled": {
        "Mutate": "IfFloat",
        "Value": {
          "Mutate": "EnemyCount",
          "ED": "_Resupply_Event_"
        },
        ">": 1,
        "Then": true,
        "Else": false
      },
      "Enemies": [
        "_Resupply_Event_Addition"
      ],
      "Difficulty": 80,
      "Locations": 5,
      "Interval": 0,
      "Distance": 500,
      "SpawnOnEnable": true
    }
      //Enabled意为控制启动条件，条件为：当_Resupply_Event_数量大于1时，立刻召唤一只_Resupply_Event_Addition`,category:"gamestate",subFields:[{name:"ED",description:"单个敌人描述符"},{name:"EDs",description:"多个敌人描述符数组"}]},{name:"EnemiesKilled",nameEn:"EnemiesKilled",description:"已击杀敌人数量。统计本次任务中死亡的敌人总量。可选地，也可以统计某一特定敌人的死亡数量。",example:`{
    "Mutate": "EnemiesKilled"
}
// 或
{
    "Mutate": "EnemiesKilled",
    "ED": "ED_Spider_Grunt"
}`,category:"gamestate",subFields:[{name:"ED",description:"单个敌人描述符"},{name:"EDs",description:"多个敌人描述符数组"}]},{name:"DwarvesHealth / DwarvesShield",nameEn:"DwarvesHealth / DwarvesShield",description:"团队生命值/护盾值比例。返回团队生命值或护盾值的平均比例，全员满血/满护盾时为1，全员倒地/无护盾时为0。",example:`{
    "Mutate": "DwarvesHealth"
}`,category:"gamestate",subFields:[]},{name:"DwarvesDown",nameEn:"DwarvesDown",description:"倒地矮人数量。返回当前倒地矮人的数量，无人倒地为0，四人全部倒地为4。",example:`{
    "Mutate": "DwarvesDown"
}`,category:"gamestate",subFields:[]},{name:"DwarvesAmmo",nameEn:"DwarvesAmmo",description:"团队弹药量比例。返回团队剩余弹药的平均百分比，全员弹药满载时为1，全部耗尽为0。",example:`{
    "Mutate": "DwarvesAmmo"
}`,category:"gamestate",subFields:[]},{name:"ResuppliesCalled",nameEn:"ResuppliesCalled",description:"已呼叫补给次数。任务过程中团队呼叫补给的次数。",example:`{
    "Mutate": "ResuppliesCalled"
}`,category:"gamestate",subFields:[]},{name:"ByTime / TimeDelta",nameEn:"ByTime / TimeDelta",description:"根据时间推移改变数值。时间与游戏内Esc菜单内的任务计时一致。数值由公式计算: InitialValue + RateOfChange * Max(0, Time - StartDelay)",example:`{
    "Mutate": "ByTime",
    "InitialValue": 3.1,
    "RateOfChange": 0.0033,
    "StartDelay": 400
}`,category:"gamestate",subFields:[{name:"InitialValue",description:"初始值",required:!0},{name:"RateOfChange",description:"每秒变化量",required:!0},{name:"StartDelay",description:"开始变化前的延迟"}]},{name:"ByMissionType",nameEn:"ByMissionType",description:"根据任务类型改变数值。如果某个任务类型未设置对应数值，则采用Default值。",example:`{
    "Mutate": "ByMissionType",
    "Default": 60,
    "Egg": 70,
    "PE": 80,
    "Mining": 90,
    "Elimination": 100,
    "Escort": 110,
    "Refinery": 120,
    "Salvage": 130,
    "Sabotage": 140
}
    //以下是任务类型的中文翻译对照：
         DeepScan 深层扫描
         Egg 虫蛋收集
         Elimination 消灭任务
         Escort 执勤护送
         Mining 采矿探险
         PE 定点提取
         Refinery 就地精炼
         Sabotage 设施破坏
         Salvage 搜救行动`,category:"mission",subFields:[{name:"Default",description:"默认值",required:!0},{name:"[任务类型]",description:"Mining, Egg, Elimination, Escort, PE, Refinery, Sabotage, Salvage, DeepScan等"}]},{name:"ByDNA",nameEn:"ByDNA",description:"允许CD2根据任务类型、长度、复杂度来设定数值。匹配的最多的条件会被优先采用，任务类型的匹配优先级高于任务长度，而长度的匹配优先级又高于复杂度。x指代任意值。",example:`{
    "Mutate": "ByDNA",
      "Default": 360,
      "Egg,1,1": 240,
      "Egg,1,2": 270,
      "Egg,1,3": 300,
      "Egg,2,1": 330,
      "Egg,2,2": 360,
      "Egg,2,3": 390,
      "Egg,3,1": 420,
      "Egg,3,2": 450,
      "Egg,3,3": 480
}
      //以上意思是，默认值为360，虫蛋任务中，1长度，1复杂度时为240...
      //当然，也可以如下这么写：
{
    "Mutate": "ByDNA",
        "Default": 75,
        "x,1,1": 50,
        "x,1,2": 55,
        "x,1,3": 60,
        "x,2,1": 65,
        "x,2,2": 65,
        "x,2,3": 70,
        "x,3,1": 75,
        "x,3,2": 85,
        "x,3,3": 100
}
        //当你把egg换成x，就代表全部任务
        //如果你写“Egg,x,1”，就代表，虫蛋任务中，任何长度，1复杂度`,category:"mission",subFields:[{name:"Default",description:"默认值",required:!0},{name:"[任务,DNA]",description:"格式: 任务类型,长度,复杂度"}]},{name:"ByPlayerCount",nameEn:"ByPlayerCount",description:"根据游戏中玩家的数量来改变值。单人游戏使用列表中的第一个值，两个玩家则使用第二个值，以此类推。如果玩家数量超出列表定义值数量，则使用最后那个数值。",example:`{
    "Mutate": "ByPlayerCount",
    "Values": [80, 120, 180, 180]
}`,category:"mission",subFields:[{name:"Values",description:"数值数组",required:!0}]},{name:"ByRefineryPhase",nameEn:"ByRefineryPhase",description:"根据炼油阶段改变数值。用于检测炼油任务的不同阶段。",example:`{
    "Mutate": "ByRefineryPhase",
    "Default": 0,
    "Landing": 1,
    "ConnectingPipes": 2,
    "PipesConnected": 3,
    "Refining": 4,
    "RefiningStalled": 5,
    "RefiningComplete": 6,
    "RocketLaunched": 7
}`,category:"mission",subFields:[{name:"Default",description:"默认值",required:!0},{name:"Landing",description:"着陆阶段"},{name:"ConnectingPipes",description:"连接管道阶段"},{name:"PipesConnected",description:"管道连接完成"},{name:"Refining",description:"正式炼油"},{name:"RefiningStalled",description:"管道损坏"},{name:"RefiningComplete",description:"管道修复"},{name:"RocketLaunched",description:"火箭发射"}]},{name:"ByEscortPhase",nameEn:"ByEscortPhase",description:"根据护送任务阶段改变数值。用于检测护送任务的不同阶段。",example:`{
    "Mutate": "ByEscortPhase",
    "Default": 0,
    "InGarage": 0.1,
    "Stationary": 2,
    "Moving": 30,
    "WaitingForFuel": 400,
    "FinalEventA": 5,
    "FinalEventB": 0.6,
    "FinalEventC": 70,
    "FinalEventD": 8,
    "Finished": 900
}`,category:"mission",subFields:[{name:"Default",description:"默认值",required:!0},{name:"InGarage",description:"未拆封"},{name:"Stationary",description:"拆封后未发车"},{name:"Moving",description:"移动中"},{name:"WaitingForFuel",description:"加油"},{name:"FinalEventA/B/C/D",description:"心石阶段"},{name:"Finished",description:"完成"}]},{name:"BySalvagePhase",nameEn:"BySalvagePhase",description:"根据搜救行动阶段改变数值。用于检测搜救行动的不同阶段。",example:`{
    "Mutate": "BySalvagePhase",
    "Default": "Default Value",
    "Mules": "Value until all mules repaired",
    "PreUplink": "Value while mules finished but uplink not started",
    "Uplink": "Value during the uplink event",
    "PreRefuel": "Value between defense events",
    "Refuel": "Value during the refuel event",
    "Finished": "Value for the remainder of the mission"
}`,category:"mission",subFields:[{name:"Default",description:"默认值",required:!0},{name:"Mules",description:"修骡子阶段"},{name:"PreUplink",description:"上传前阶段"},{name:"Uplink",description:"上传阶段"},{name:"PreRefuel",description:"加油前阶段"},{name:"Refuel",description:"加油阶段"},{name:"Finished",description:"完成"}]},{name:"BySaboPhase",nameEn:"BySaboPhase",description:"根据设施破坏阶段改变数值。用于检测设施破坏任务的不同阶段。",example:`{
    "Mutate": "BySaboPhase",
    "Default": "Default Value",
    "Hacking": "Hacking Value",
    "BetweenHacks": "BetweenHacks Value",
    "Phase1Vent": "Phase1VentValue",
    "Phase1Eye": "Value for Phase1Eye",
    "Phase2Vent": "Value for Phase2Vent",
    "Phase2Eye": "Value for Phase2Eye",
    "Phase3Vent": "Phase3Vent Value",
    "Phase3Eye": "Value to use during Phase3Eye",
    "Finished": "Value for Finished"
}`,category:"mission",subFields:[{name:"Default",description:"默认值",required:!0},{name:"Hacking",description:"骇入阶段"},{name:"Phase1/2/3Vent",description:"黄盾阶段"},{name:"Phase1/2/3Eye",description:"开眼阶段"},{name:"Finished",description:"完成"}]},{name:"DuringMission",nameEn:"DuringMission",description:"在任务期间为true，或者在指定时间参数后的一个特定的时间窗口为true。若指定了StartingAt，则表示从任务开始经过多少秒变为true；同理，若指定了StoppingAfter，则表示从任务开始经过多少秒后变为false。",example:`{
    "Mutate": "DuringMission",
    "StartingAt": 240
}
// 或
{
    "Mutate": "DuringMission",
    "StartingAt": 300,
    "StoppingAfter": 600
}`,category:"mission",subFields:[{name:"StartingAt",description:"开始时间（秒）"},{name:"StoppingAfter",description:"结束时间（秒）"}]},{name:"DuringGenericSwarm",nameEn:"DuringGenericSwarm",description:"当处于宣告潮时，变为True。",example:`{
    "Mutate": "DuringGenericSwarm"
}`,category:"mission",subFields:[]},{name:"DuringDefend",nameEn:"DuringDefend",description:"当防守类事件（回收黑匣子、上传、加油）被激活时，变为True。",example:`{
    "Mutate": "DuringDefend"
}`,category:"mission",subFields:[]},{name:"DuringDread",nameEn:"DuringDread",description:"当任务中存在任意无畏异虫时，变为True。",example:`{
    "Mutate": "DuringDread"
}`,category:"mission",subFields:[]},{name:"SecondaryFinished",nameEn:"SecondaryFinished",description:"当所有次要目标均完成，或者当前任务中不存在次要目标时，返回true。",example:`{
    "Mutate": "SecondaryFinished"
}`,category:"mission",subFields:[]},{name:"BySecondary",nameEn:"BySecondary",description:"根据完成的次要目标改变数值。可以用于检测普通任务/深潜任务中的次要目标完成情况。",example:`{
    "Mutate": "BySecondary",
    "OBJ_DD_Elimination_Eggs": 1.2,
    "OBJ_DD_Defense": 1.2
}
    //所有的次要目标（副任务）对应代码和翻译如下：
       OBJ_2nd_Mine_Dystrum 异镝
       OBJ_2nd_Mine_Hollomite 容和石
       OBJ_2nd_KillFleas 消灭脓虱
       OBJ_2nd_Find_Gunkseed 收集粘液种子
       OBJ_2nd_Find_Fossil 收集化石
       OBJ_2nd_Find_Ebonut 收集硬胶果实
       OBJ_2nd_Find_BooloCap 收集布洛蘑菇
       OBJ_2nd_Find_ApocaBloom 收集彼岸花
       OBJ_2nd_DestroyEggs 消灭异虫蛋
       OBJ_2nd_DestroyBhaBarnacles 消灭巴氏藤壶
       OBJ_DD_RepairMinimules 修好迷你矿骡
       OBJ_DD_Defense 回收黑匣子
       OBJ_DD_DeepScan 扫描共振水晶
       OBJ_DD_Morkite 收集墨棱石
       OBJ_DD_Elimination_Eggs 击杀无畏异虫
       OBJ_DD_AlienEggs 收集外星虫蛋
       OBJ_DD_MorkiteWell 精炼墨棱油`,category:"mission",subFields:[{name:"[次要目标]",description:"OBJ_2nd_xxx 或 OBJ_DD_xxx"}]},{name:"Countdown",nameEn:"Countdown",description:"倒计时。从Start倒数到Stop的mutator，通常与Int2String一起使用，用于在聊天框输出倒计时信息。",example:`{
    "Mutate": "Countdown",
    "Start": 16,
    "Enable": true
}`,category:"advanced",subFields:[{name:"Start",description:"开始数值",required:!0},{name:"Stop",description:"结束数值"},{name:"Enable",description:"是否启用",required:!0},{name:"Default",description:"未启用时的默认值"}]},{name:"Int2String / Float2String",nameEn:"Int2String / Float2String",description:"将整数/浮点数转换为字符串，以便在Message模块中使用。",example:`{
    "Mutate": "Int2String",
    "Value": { "Mutate": "Countdown", "Start": 10, "Enable": true }
}`,category:"advanced",subFields:[{name:"Value",description:"要转换的值",required:!0}]},{name:"Join",nameEn:"Join",description:"字符串拼接。将多个字符串拼接为一个，可与Int2String和Float2String配合使用。",example:`{
    "Mutate": "Join",
    "Values": ["距离开始还有：", { "Mutate": "Int2String", "Value": { "Mutate": "Countdown", "Start": 10, "Enable": true } }, "秒"]
}`,category:"advanced",subFields:[{name:"Values",description:"要拼接的字符串数组",required:!0}]},{name:"RandomChoice",nameEn:"RandomChoice",description:"随机选择。给定一个选项列表，从中随机选择一项。可接受一个权重列表，用于对选项进行加权随机采样。",example:`{
    "Mutate": "RandomChoice",
    "Choices": ["ED_Spider_Tank", "ED_Spider_Stinger"],
    "Weights": [0.6, 0.4]
}`,category:"advanced",subFields:[{name:"Choices",description:"选项数组",required:!0},{name:"Weights",description:"权重数组"}]},{name:"RandomChoicePerMission",nameEn:"RandomChoicePerMission",description:"每个任务随机选择一次。该选择由任务的随机种子决定，因此使用相同种子的任务将始终返回相同的结果。",example:`{
    "Mutate": "RandomChoicePerMission",
    "Choices": ["bedrock", "hotrock", "dirt"]
}`,category:"advanced",subFields:[{name:"Choices",description:"选项数组",required:!0},{name:"Weights",description:"权重数组"}]},{name:"Delta",nameEn:"Delta",description:"变量变化检测。可以用于检测其他变量/Mutators的变化，通常与Accumulate一起使用。",example:`{
    "Mutate": "Delta",
    "Value": { "Mutate": "DwarvesHealth" }
}`,category:"advanced",subFields:[{name:"Value",description:"要监视的值",required:!0}]},{name:"LockFloat",nameEn:"LockFloat",description:"锁定浮点数。在特定条件满足后'冻结'变量值，用于记录特定时刻的值。",example:`{
    "Mutate": "LockFloat",
    "Update": { "Mutate": "TriggerOnChange", "In": { "Mutate": "SecondaryFinished" } },
    "Value": { "Mutate": "EnemiesKilled" }
}`,category:"advanced",subFields:[{name:"Update",description:"更新触发条件",required:!0},{name:"Value",description:"要锁定的值",required:!0}]},{name:"TotalResource / DepositedResource / HeldResource",nameEn:"Resource Counters",description:"资源统计。TotalResource统计玩家背包和存入矿骡中某种资源的总量；DepositedResource统计已存入矿骡的资源；HeldResource统计玩家背包中尚未存入矿骡的资源。",example:`{
    "Mutate": "TotalResource",
    "Resource": "Morkite"
}`,category:"advanced",subFields:[{name:"Resource",description:"资源名称",required:!0}]},{name:"ByBiome",nameEn:"ByBiome",description:"根据任务所在群系来改变数值。如果某个群系没有设置对应参数，则使用Default值。",example:`{
    "Mutate": "ByBiome",
    "Default": 1,
    "CrystallineCaverns": 1.2,
    "MagmaCore": 1.5,
    "GlacialStrata": 0.8
}
    //以下是所有的群系名称和中文对照：
        BIOME_AzureWeald蔚蓝花甸
        BIOME_CrystalCaves水晶洞穴
        BIOME_DenseBiozone密林丛原
        BIOME_FungusBogs霉菌沼泽		
        BIOME_HollowBough藤络树洞	
        BIOME_IceCaves冰封岩层	
        BIOME_MagmaCaves熔岩之心	
        BIOME_RadioactiveZone放射性禁区
        BIOME_SaltCaves盐坑	
        BIOME_SandblastedCorridors飞沙走廊`,category:"advanced",subFields:[{name:"Default",description:"默认值",required:!0},{name:"[群系名称]",description:"AzureWeald, CrystalCaves, DenseBiozone, FungusBogs, HollowBough, IceCaves, MagmaCaves, RadioactiveZone, SaltCaves, SandblastedCorridors"}]},{name:"SquareWave",nameEn:"SquareWave",description:"轮切。在给定周期内在两个数值之间交替切换。",example:`{
    "Mutate": "SquareWave",
    "Period": 250,
    "High": 1,
    "Low": 0
}`,category:"advanced",subFields:[{name:"Period",description:"周期（秒）",required:!0},{name:"High",description:"高值",required:!0},{name:"Low",description:"低值",required:!0}]}];function k1({isOpen:A,onClose:z}){const[N,f]=I.useState(""),j=I.useMemo(()=>{if(!N.trim())return[];const v=[],V=N.toLowerCase();for(const m of bu)(m.name.toLowerCase().includes(V)||m.description.toLowerCase().includes(V))&&v.push({type:"Mutate",title:m.name,description:m.description.slice(0,100)+"...",category:m.category,sectionId:"mutate"});return v.slice(0,10)},[N]),M=v=>{const V=document.getElementById(v);V&&(V.scrollIntoView({behavior:"smooth"}),z())};return I.useEffect(()=>{const v=V=>{V.key==="Escape"&&z()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[z]),A?s.jsx("div",{"code-path":"src\\components\\SearchModal.tsx:66:5",className:"fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/60 backdrop-blur-sm",children:s.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:67:7",className:"w-full max-w-2xl bg-[#141414] border border-[#30363d] rounded-xl shadow-2xl overflow-hidden",children:[s.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:69:9",className:"flex items-center gap-3 px-4 py-3 border-b border-[#30363d]",children:[s.jsx(Zf,{"code-path":"src\\components\\SearchModal.tsx:70:11",className:"w-5 h-5 text-[#8b949e]"}),s.jsx("input",{"code-path":"src\\components\\SearchModal.tsx:71:11",type:"text",value:N,onChange:v=>f(v.target.value),placeholder:"搜索Mutate指令、字段、示例...",className:"flex-1 bg-transparent text-[#e6edf3] placeholder-[#484f58] outline-none",autoFocus:!0}),s.jsx("button",{"code-path":"src\\components\\SearchModal.tsx:79:11",onClick:z,className:"p-1 hover:bg-[#30363d] rounded transition-colors",children:s.jsx(Wf,{"code-path":"src\\components\\SearchModal.tsx:83:13",className:"w-5 h-5 text-[#8b949e]"})})]}),s.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:88:9",className:"max-h-[60vh] overflow-y-auto",children:[N.trim()&&j.length===0&&s.jsx("div",{"code-path":"src\\components\\SearchModal.tsx:90:13",className:"px-4 py-8 text-center text-[#8b949e]",children:"未找到相关结果"}),j.map((v,V)=>s.jsxs("button",{"code-path":"src\\components\\SearchModal.tsx:96:13",onClick:()=>M(v.sectionId),className:"w-full text-left px-4 py-3 hover:bg-[#1f242c] cursor-pointer border-b border-[#21262d] last:border-b-0",children:[s.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:101:15",className:"flex items-center gap-2 mb-1",children:[s.jsx("span",{"code-path":"src\\components\\SearchModal.tsx:102:17",className:"text-xs px-2 py-0.5 bg-[#ffd700]/20 text-[#ffd700] rounded",children:v.type}),s.jsx("span",{"code-path":"src\\components\\SearchModal.tsx:105:17",className:"text-xs text-[#8b949e]",children:v.category})]}),s.jsx("h4",{"code-path":"src\\components\\SearchModal.tsx:107:15",className:"text-[#e6edf3] font-medium",children:v.title}),s.jsx("p",{"code-path":"src\\components\\SearchModal.tsx:108:15",className:"text-sm text-[#8b949e] mt-1",children:v.description})]},V)),!N.trim()&&s.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:113:13",className:"px-4 py-6",children:[s.jsx("p",{"code-path":"src\\components\\SearchModal.tsx:114:15",className:"text-sm text-[#8b949e] mb-3",children:"热门搜索"}),s.jsx("div",{"code-path":"src\\components\\SearchModal.tsx:115:15",className:"flex flex-wrap gap-2",children:["EnemyCount","IfFloat","TriggerOnce","ByTime","Clamp"].map(v=>s.jsx("button",{"code-path":"src\\components\\SearchModal.tsx:117:19",onClick:()=>f(v),className:"px-3 py-1.5 text-sm bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#30363d] rounded-full transition-colors",children:v},v))})]})]}),s.jsx("div",{"code-path":"src\\components\\SearchModal.tsx:131:9",className:"px-4 py-2 bg-[#161b22] border-t border-[#30363d] text-xs text-[#484f58]",children:"按 ESC 关闭 · 点击结果跳转到对应位置"})]})}):null}const Lf=[{id:"hero",label:"首页"},{id:"mutate",label:"Mutate"},{id:"wavespawners",label:"WaveSpawners"},{id:"vars",label:"Vars"},{id:"messages",label:"Messages"},{id:"exercises",label:"练习题"},{id:"feedback",label:"特性反馈"},{id:"appendix",label:"附录"}];function Y1({activeSection:A}){const[z,N]=I.useState(!1),[f,j]=I.useState(!1),[M,v]=I.useState(!1);I.useEffect(()=>{const m=()=>{N(window.scrollY>100)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const V=m=>{const g=document.getElementById(m);g&&g.scrollIntoView({behavior:"smooth"}),j(!1)};return s.jsxs(s.Fragment,{children:[s.jsxs("nav",{"code-path":"src\\components\\Navigation.tsx:43:7",className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${z?"bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#30363d]/50":"bg-transparent"}`,children:[s.jsx("div",{"code-path":"src\\components\\Navigation.tsx:50:9",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{"code-path":"src\\components\\Navigation.tsx:51:11",className:"flex items-center justify-between h-16",children:[s.jsxs("button",{"code-path":"src\\components\\Navigation.tsx:53:13",onClick:()=>V("hero"),className:"flex items-center gap-2 text-[#ffd700] font-bold text-lg",children:[s.jsx("span",{"code-path":"src\\components\\Navigation.tsx:57:15",className:"w-8 h-8 bg-[#ffd700] rounded flex items-center justify-center text-black text-sm",children:"CD2"}),s.jsx("span",{"code-path":"src\\components\\Navigation.tsx:58:15",className:"hidden sm:inline",children:"进阶教程"})]}),s.jsx("div",{"code-path":"src\\components\\Navigation.tsx:62:13",className:"hidden md:flex items-center gap-1",children:Lf.map(m=>s.jsx("button",{"code-path":"src\\components\\Navigation.tsx:64:17",onClick:()=>V(m.id),className:`px-3 py-2 text-sm rounded-lg transition-all ${A===m.id?"text-[#ffd700] bg-[#ffd700]/10":"text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d]"}`,children:m.label},m.id))}),s.jsxs("div",{"code-path":"src\\components\\Navigation.tsx:79:13",className:"flex items-center gap-2",children:[s.jsx("button",{"code-path":"src\\components\\Navigation.tsx:80:15",onClick:()=>v(!0),className:"p-2 text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] rounded-lg transition-colors",children:s.jsx(Zf,{"code-path":"src\\components\\Navigation.tsx:84:17",className:"w-5 h-5"})}),s.jsx("button",{"code-path":"src\\components\\Navigation.tsx:88:15",onClick:()=>j(!f),className:"md:hidden p-2 text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] rounded-lg transition-colors",children:f?s.jsx(Wf,{"code-path":"src\\components\\Navigation.tsx:92:37",className:"w-5 h-5"}):s.jsx(A1,{"code-path":"src\\components\\Navigation.tsx:92:65",className:"w-5 h-5"})})]})]})}),f&&s.jsx("div",{"code-path":"src\\components\\Navigation.tsx:100:11",className:"md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#30363d]/50",children:s.jsx("div",{"code-path":"src\\components\\Navigation.tsx:101:13",className:"px-4 py-3 space-y-1",children:Lf.map(m=>s.jsx("button",{"code-path":"src\\components\\Navigation.tsx:103:17",onClick:()=>V(m.id),className:`block w-full text-left px-4 py-3 rounded-lg transition-colors ${A===m.id?"text-[#ffd700] bg-[#ffd700]/10":"text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d]"}`,children:m.label},m.id))})})]}),s.jsx(k1,{"code-path":"src\\components\\Navigation.tsx:120:7",isOpen:M,onClose:()=>v(!1)})]})}function X1(){const A=I.useRef(null);I.useEffect(()=>{const N=f=>{if(!A.current)return;const{clientX:j,clientY:M}=f,{innerWidth:v,innerHeight:V}=window,m=(j-v/2)/v,g=(M-V/2)/V;A.current.style.setProperty("--parallax-x",`${m*20}px`),A.current.style.setProperty("--parallax-y",`${g*20}px`)};return window.addEventListener("mousemove",N),()=>window.removeEventListener("mousemove",N)},[]);const z=()=>{document.getElementById("mutate")?.scrollIntoView({behavior:"smooth"})};return s.jsxs("section",{"code-path":"src\\sections\\HeroSection.tsx:30:5",id:"hero",ref:A,className:"relative min-h-screen flex items-center justify-center overflow-hidden",style:{perspective:"1000px"},children:[s.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:37:7",className:"absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]",children:[s.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:39:9",className:"absolute inset-0 opacity-20",style:{backgroundImage:`
              linear-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px)
            `,backgroundSize:"50px 50px",transform:"translate(var(--parallax-x, 0), var(--parallax-y, 0))"}}),s.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:52:9",className:"absolute top-1/4 left-1/4 w-96 h-96 bg-[#ffd700]/5 rounded-full blur-[120px]"}),s.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:53:9",className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffd700]/3 rounded-full blur-[120px]"})]}),s.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:57:7",className:"relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[s.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:59:7",className:"inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-full",children:[s.jsx(vu,{"code-path":"src\\sections\\HeroSection.tsx:60:11",className:"w-4 h-4 text-[#ffd700]"}),s.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:61:11",className:"text-sm text-[#ffd700]",children:"CD2 进阶教学详解"})]}),s.jsxs("h1",{"code-path":"src\\sections\\HeroSection.tsx:65:9",className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6",children:[s.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:66:11",className:"text-[#e6edf3]",children:"深岩银河"}),s.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:67:11",className:"text-[#ffd700]",children:"CD2"}),s.jsx("br",{"code-path":"src\\sections\\HeroSection.tsx:68:11"}),s.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:69:11",className:"text-[#e6edf3]",children:"进阶教程"})]}),s.jsxs("p",{"code-path":"src\\sections\\HeroSection.tsx:73:9",className:"text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-8",children:["从零开始学习的《深岩银河》第二代自定义难度开发",s.jsx("br",{"code-path":"src\\sections\\HeroSection.tsx:75:11"}),s.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:76:11",className:"text-sm",children:"本教程基于《星の綺麗な夜 v1.91γ》代码实例"})]}),s.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:80:9",className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto",children:[{icon:l1,label:"Mutate",desc:"核心机制"},{icon:w1,label:"WaveSpawners",desc:"波次生成"},{icon:Xi,label:"Vars",desc:"变量系统"},{icon:vu,label:"Messages",desc:"消息系统"}].map((N,f)=>s.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:87:13",className:"p-4 bg-[#161b22]/80 border border-[#30363d] rounded-lg hover:border-[#ffd700]/50 transition-colors",children:[s.jsx(N.icon,{"code-path":"src\\sections\\HeroSection.tsx:91:15",className:"w-6 h-6 text-[#ffd700] mx-auto mb-2"}),s.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:92:15",className:"text-[#e6edf3] font-medium text-sm",children:N.label}),s.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:93:15",className:"text-[#8b949e] text-xs",children:N.desc})]},f))}),s.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:99:9",className:"mb-8 p-4 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg max-w-2xl mx-auto",children:s.jsxs("p",{"code-path":"src\\sections\\HeroSection.tsx:100:11",className:"text-sm text-[#8b949e]",children:[s.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:101:13",className:"text-[#ffd700]",children:"提示："}),"最好拥有CD1的开发经验，再来看CD2进阶教程，否则会云里雾里"]})}),s.jsxs("button",{"code-path":"src\\sections\\HeroSection.tsx:107:9",onClick:z,className:"group inline-flex items-center gap-2 px-8 py-4 bg-[#ffd700] text-black font-bold rounded-lg hover:bg-[#ffec8b] transition-all hover:scale-105",children:["开始探索",s.jsx(ut,{"code-path":"src\\sections\\HeroSection.tsx:112:11",className:"w-5 h-5 group-hover:translate-y-1 transition-transform"})]}),s.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:116:9",className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",children:s.jsx(ut,{"code-path":"src\\sections\\HeroSection.tsx:117:11",className:"w-6 h-6 text-[#484f58]"})})]})]})}function bt({code:A,language:z="json",showLineNumbers:N=!0,className:f=""}){const[j,M]=I.useState(!1),v=async()=>{try{await navigator.clipboard.writeText(A),M(!0),setTimeout(()=>M(!1),2e3)}catch(m){console.error("Failed to copy:",m)}},V=A.split(`
`);return s.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:27:5",className:`relative group rounded-lg overflow-hidden bg-[#0d1117] border border-[#30363d] ${f}`,children:[s.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:29:7",className:"flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]",children:[s.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:30:9",className:"flex items-center gap-2",children:[s.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:31:11",className:"flex gap-1.5",children:[s.jsx("div",{"code-path":"src\\components\\CodeBlock.tsx:32:13",className:"w-3 h-3 rounded-full bg-[#ff5f56]"}),s.jsx("div",{"code-path":"src\\components\\CodeBlock.tsx:33:13",className:"w-3 h-3 rounded-full bg-[#ffbd2e]"}),s.jsx("div",{"code-path":"src\\components\\CodeBlock.tsx:34:13",className:"w-3 h-3 rounded-full bg-[#27ca40]"})]}),s.jsx("span",{"code-path":"src\\components\\CodeBlock.tsx:36:11",className:"ml-3 text-xs text-[#8b949e] font-mono",children:z})]}),s.jsx("button",{"code-path":"src\\components\\CodeBlock.tsx:38:9",onClick:v,className:"flex items-center gap-1.5 px-2 py-1 text-xs text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#30363d] rounded transition-colors",children:j?s.jsxs(s.Fragment,{children:[s.jsx(Y0,{"code-path":"src\\components\\CodeBlock.tsx:44:15",className:"w-3.5 h-3.5 text-[#3fb950]"}),s.jsx("span",{"code-path":"src\\components\\CodeBlock.tsx:45:15",className:"text-[#3fb950]",children:"已复制"})]}):s.jsxs(s.Fragment,{children:[s.jsx(i1,{"code-path":"src\\components\\CodeBlock.tsx:49:15",className:"w-3.5 h-3.5"}),s.jsx("span",{"code-path":"src\\components\\CodeBlock.tsx:50:15",children:"复制"})]})})]}),s.jsx("div",{"code-path":"src\\components\\CodeBlock.tsx:57:7",className:"overflow-x-auto p-4",children:s.jsx("pre",{"code-path":"src\\components\\CodeBlock.tsx:58:9",className:"font-mono text-sm leading-relaxed text-[#e6edf3]",children:V.map((m,g)=>s.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:60:13",className:"flex",children:[N&&s.jsx("span",{"code-path":"src\\components\\CodeBlock.tsx:62:17",className:"select-none w-8 text-right pr-4 text-[#484f58] text-xs",children:g+1}),s.jsx("code",{"code-path":"src\\components\\CodeBlock.tsx:66:15",className:"whitespace-pre",children:m||" "})]},g))})})]})}const kf={basic:gu,math:gu,condition:h1,trigger:vu,gamestate:O0,mission:z1,advanced:b1},Q1={basic:"基础运算",math:"数学运算",condition:"条件判断",trigger:"触发器系统",gamestate:"游戏状态获取",mission:"任务相关",advanced:"高级功能"};function J1(){const[A,z]=I.useState(new Set),[N,f]=I.useState(null),j=v=>{const V=new Set(A);V.has(v)?V.delete(v):V.add(v),z(V)},M=N?bu.filter(v=>v.category===N):bu;return s.jsx("section",{"code-path":"src\\sections\\MutateSection.tsx:45:5",id:"mutate",className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:46:7",className:"max-w-6xl mx-auto",children:[s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:48:9",className:"mb-12",children:[s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:49:11",className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:50:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:s.jsx(gu,{"code-path":"src\\sections\\MutateSection.tsx:51:15",className:"w-5 h-5 text-[#ffd700]"})}),s.jsx("h2",{"code-path":"src\\sections\\MutateSection.tsx:53:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"Mutate 模块"})]}),s.jsxs("p",{"code-path":"src\\sections\\MutateSection.tsx:57:11",className:"text-[#8b949e] text-lg max-w-3xl",children:["CD2核心机制。几乎所有的数据、状态获取，以及逻辑和数值的判断运算，全都要依靠Mutate进行运作。",s.jsx("span",{"code-path":"src\\sections\\MutateSection.tsx:59:13",className:"text-[#ffd700]",children:"如果没有理解Mutate，那么在CD2进阶写作中将寸步难行！"})]})]}),s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:64:9",className:"flex flex-wrap gap-2 mb-8",children:[s.jsx("button",{"code-path":"src\\sections\\MutateSection.tsx:65:11",onClick:()=>f(null),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${N===null?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:"全部"}),L1.map(v=>{const V=kf[v.id];return s.jsxs("button",{"code-path":"src\\sections\\MutateSection.tsx:78:15",onClick:()=>f(N===v.id?null:v.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${N===v.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[s.jsx(V,{"code-path":"src\\sections\\MutateSection.tsx:87:17",className:"w-4 h-4"}),v.name]},v.id)})]}),s.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:95:9",className:"space-y-4",children:M.map(v=>{const V=A.has(v.name),m=kf[v.category];return s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:101:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[s.jsxs("button",{"code-path":"src\\sections\\MutateSection.tsx:106:17",onClick:()=>j(v.name),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:110:19",className:"flex items-center gap-4",children:[s.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:111:21",className:"w-10 h-10 bg-[#21262d] rounded-lg flex items-center justify-center",children:s.jsx(m,{"code-path":"src\\sections\\MutateSection.tsx:112:23",className:"w-5 h-5 text-[#ffd700]"})}),s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:114:21",children:[s.jsx("h3",{"code-path":"src\\sections\\MutateSection.tsx:115:23",className:"text-lg font-semibold text-[#e6edf3]",children:v.name}),s.jsx("p",{"code-path":"src\\sections\\MutateSection.tsx:116:23",className:"text-sm text-[#8b949e]",children:Q1[v.category]})]})]}),V?s.jsx(At,{"code-path":"src\\sections\\MutateSection.tsx:120:21",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\MutateSection.tsx:122:21",className:"w-5 h-5 text-[#8b949e]"})]}),V&&s.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:128:19",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:129:21",className:"pt-4 space-y-4",children:[s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:131:23",children:[s.jsx("h4",{"code-path":"src\\sections\\MutateSection.tsx:132:25",className:"text-sm font-medium text-[#ffd700] mb-2",children:"描述"}),s.jsx("p",{"code-path":"src\\sections\\MutateSection.tsx:133:25",className:"text-[#8b949e]",children:v.description})]}),v.subFields&&v.subFields.length>0&&s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:138:25",children:[s.jsx("h4",{"code-path":"src\\sections\\MutateSection.tsx:139:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"字段说明"}),s.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:140:27",className:"grid gap-2",children:v.subFields.map(g=>s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:142:31",className:"flex items-start gap-3 p-3 bg-[#0d1117] rounded-lg",children:[s.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:146:33",className:"text-[#a5d6ff] font-mono text-sm",children:g.name}),s.jsx("span",{"code-path":"src\\sections\\MutateSection.tsx:147:33",className:"text-[#8b949e] text-sm",children:g.description}),g.required&&s.jsx("span",{"code-path":"src\\sections\\MutateSection.tsx:149:35",className:"text-xs px-2 py-0.5 bg-[#ffd700]/20 text-[#ffd700] rounded",children:"必需"})]},g.name))})]}),s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:160:23",children:[s.jsx("h4",{"code-path":"src\\sections\\MutateSection.tsx:161:25",className:"text-sm font-medium text-[#ffd700] mb-2",children:"示例"}),s.jsx(bt,{"code-path":"src\\sections\\MutateSection.tsx:162:25",code:v.example})]})]})})]},v.name)})}),s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:173:9",className:"mt-12 p-6 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-xl",children:[s.jsx("h3",{"code-path":"src\\sections\\MutateSection.tsx:174:11",className:"text-lg font-semibold text-[#ffd700] mb-3",children:"常用嵌套模式"}),s.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:175:11",className:"space-y-4 text-[#8b949e]",children:[s.jsx("p",{"code-path":"src\\sections\\MutateSection.tsx:176:13",children:"Mutate的强大之处在于可以无限嵌套。以下是一些常见的嵌套模式："}),s.jsxs("ul",{"code-path":"src\\sections\\MutateSection.tsx:177:13",className:"list-disc list-inside space-y-2 ml-4",children:[s.jsxs("li",{"code-path":"src\\sections\\MutateSection.tsx:178:15",children:[s.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:178:19",className:"text-[#a5d6ff]",children:"If → IfFloat → EnemyCount"})," - 条件嵌套判断"]}),s.jsxs("li",{"code-path":"src\\sections\\MutateSection.tsx:179:15",children:[s.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:179:19",className:"text-[#a5d6ff]",children:"Clamp → Add → Multiply"})," - 数学运算后限制范围"]}),s.jsxs("li",{"code-path":"src\\sections\\MutateSection.tsx:180:15",children:[s.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:180:19",className:"text-[#a5d6ff]",children:"TriggerOnce → And → DuringMission"})," - 触发器组合"]}),s.jsxs("li",{"code-path":"src\\sections\\MutateSection.tsx:181:15",children:[s.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:181:19",className:"text-[#a5d6ff]",children:"Select → Var → ByPlayerCount"})," - 动态选择配置"]})]})]})]})]})})}const Z1=[{name:"Enabled",type:"布尔值(Boolean)或带Mutate的表达式",description:"控制波次生成器是否激活。这是最重要的字段，决定了波次何时触发。可以配合各种Mutate指令实现复杂的触发逻辑。",defaultValue:"true"},{name:"Name",type:"字符串(String)",description:"波次生成器的描述性名称。仅用于代码可读性，不影响游戏功能。",required:!1},{name:"Interval",type:"浮点数(Float)或带Mutate的表达式",description:"波次生成的时间间隔（秒）。启用后，经过Interval秒生成第一批敌人，之后每隔Interval秒重复生成。",required:!0},{name:"Enemies",type:"字符串数组(String Array)或带Mutate的表达式",description:"指定生成哪些类型的敌人。可以指定一个或多个敌人标识符（ED）。如果留空则不生成任何敌人。"},{name:"Difficulty",type:"浮点数(Float)或带Mutate的表达式",description:"分配给波次的难度点数。点数会根据列表中敌人的DifficultyRating分配到各个敌人，决定生成数量。点数越高，生成的敌人越多。",required:!0},{name:"Distance",type:"浮点数(Float)或带Mutate的表达式",description:"敌人生成点与玩家的距离（码）。控制敌人在距离玩家多远的位置生成。距离越大，敌人出现位置越远。",required:!0},{name:"Diversity",type:"整数(Integer)或带Mutate的表达式",description:"每次生成时从Enemies列表中选取的敌人种类数量。如果设置为2，每次波次会从Enemies列表中随机选取2种敌人生成。",defaultValue:"使用任务设置的默认多样性"},{name:"Locations",type:"整数(Integer)或带Mutate的表达式",description:"敌人生成点的数量。生成点越多，敌人出现的位置越分散。一般设置1方便工程核弹，设置2以上就是变相削弱工程。",required:!0},{name:"SpawnOnEnable",type:"布尔值(Boolean)",description:"波次生成器启用时是否立即生成第一批敌人。如果为true，波次启用后会跳过第一个Interval间隔立即生成敌人。",defaultValue:"false"},{name:"UnlockInterval",type:"布尔值(Boolean)",description:"是否允许动态改变Interval值。如果为true，改变Interval值会影响当前的倒计时；如果为false，Interval只在每次生成后重新计算。",defaultValue:"false"},{name:"PauseOnDisable",type:"布尔值(Boolean)",description:"波次生成器禁用时是否暂停倒计时。如果为true，禁用时计时暂停，重新启用后继续；如果为false，重新启用时计时重置。",defaultValue:"false"},{name:"Alert",type:"布尔值(Boolean)",description:"生成的敌人是否立即警觉并攻击玩家。如果为true，敌人生成后立即进入攻击状态；如果为false，敌人会保持平静直到被惊动。",defaultValue:"true"}],K1=[{title:"基础定时波次（恒压潮）",description:"每2分钟生成一次，在距离玩家15米的2个位置生成总难度150点的战士和护卫混合波次。",code:`{
  "WaveSpawners": [
    {
      "Enabled": true,
      "Name": "基础巡逻波次（恒压潮）",
      "Interval": 120,
      "Enemies": ["ED_Spider_Grunt", "ED_Spider_Grunt_Guard"],
      "Difficulty": 150,
      "Distance": 1500,
      "Locations": 2,
      "SpawnOnEnable": false,
      "Alert": true
    }
  ]
}`,explanation:["Enabled: true - 永远保持触发状态","Interval: 120 - 每120秒（2分钟）生成一次","Enemies: 生成战士异虫和护卫异虫的混合波次","Difficulty: 150 - 分配150点难度值","Distance: 1500 - 在距离玩家1500码（约15米）处生成","Locations: 2 - 在2个不同位置生成"]},{title:"条件触发波次",description:"当有队友倒地时，有50%概率立即在玩家附近生成小自爆和抱抱的救援干扰波次。",code:`{
  "WaveSpawners": [
    {
      "Enabled": {
        "Mutate": "And",
        "A": {
          "Mutate": "IfFloat",
          "Value": { "Mutate": "DwarvesDown" },
          ">": 0,
          "Then": true,
          "Else": false
        },
        "B": {
          "Mutate": "TriggerSometimes",
          "P": 0.5,
          "In": true
        }
      },
      "Name": "队友倒地，干扰救援的波次",
      "Interval": 0,
      "Enemies": ["ED_Spider_Exploder", "ED_Grabber"],
      "Difficulty": 200,
      "Distance": 800,
      "Locations": 1,
      "SpawnOnEnable": true,
      "Alert": true
    }
  ]
}`,explanation:["Enabled: 使用And组合两个条件","条件A: DwarvesDown > 0（有队友倒地）","条件B: TriggerSometimes P=0.5（50%概率触发）","Interval: 0 - 立即生成，无间隔","SpawnOnEnable: true - 启用时立即生成"]},{title:"动态难度波次",description:"任务开始5分钟后激活，每5分钟波次间隔减少2秒，难度增加50点，实现随时间越来越频繁、越来越强的精英波次。",code:`{
  "WaveSpawners": [
    {
      "Enabled": {
        "Mutate": "DuringMission",
        "StartingAt": 300
      },
      "Name": "随时间增强的精英波次",
      "Interval": {
        "Mutate": "Subtract",
        "A": 180,
        "B": {
          "Mutate": "Multiply",
          "A": 2,
          "B": {
            "Mutate": "Floor",
            "Value": {
              "Mutate": "Divide",
              "A": { "Mutate": "ByTime" },
              "B": 300
            }
          }
        }
      },
      "Enemies": ["ED_Spider_Tank", "ED_Spider_Stinger", "ED_Mactera_TripleShooter"],
      "Difficulty": {
        "Mutate": "Add",
        "A": 200,
        "B": {
          "Mutate": "Multiply",
          "A": 50,
          "B": {
            "Mutate": "Floor",
            "Value": {
              "Mutate": "Divide",
              "A": { "Mutate": "ByTime" },
              "B": 300
            }
          }
        }
      },
      "Distance": 2000,
      "Locations": 3,
      "SpawnOnEnable": true
    }
  ]
}`,explanation:["Enabled: DuringMission StartingAt: 300 - 任务开始5分钟后激活","Interval: 180 - 2*Floor(Time/300) - 每5分钟减少2秒","Difficulty: 200 + 50*Floor(Time/300) - 每5分钟增加50点","Enemies: 禁卫、蛭尾、三颚蝇的精英混合波次"]},{title:"BOSS召唤波次",description:"任务开始10分钟后，如果没有无畏在场，每10分钟召唤一只无畏，最多召唤3次。",code:`{
  "WaveSpawners": [
    {
      "Enabled": {
        "Mutate": "TriggerNTimes",
        "N": 3,
        "In": {
          "Mutate": "And",
          "A": { "Mutate": "DuringMission", "StartingAt": 600 },
          "B": {
            "Mutate": "IfFloat",
            "Value": { "Mutate": "EnemyCount", "ED": "ED_Spider_Tank_Boss" },
            "==": 0,
            "Then": true,
            "Else": false
          }
        }
      },
      "Name": "无畏召唤波次",
      "Interval": 600,
      "Enemies": ["ED_Spider_Tank_Boss"],
      "Difficulty": 500,
      "Distance": 3000,
      "Locations": 1,
      "SpawnOnEnable": true,
      "Alert": true
    }
  ]
}`,explanation:["Enabled: TriggerNTimes N=3 - 最多触发3次","条件A: DuringMission StartingAt: 600 - 任务开始10分钟后","条件B: EnemyCount ED_Spider_Tank_Boss == 0 - 没有无畏在场","Interval: 600 - 每10分钟尝试一次","Difficulty: 500 - 高难度确保生成无畏"]},{title:"多波次协同工作",description:"主波次每3分钟生成一次，每杀死一个战士，立即在附近补充蜂拥虫。",code:`{
  "WaveSpawners": [
    {
      "Enabled": { "Mutate": "DuringMission", "StartingAt": 180 },
      "Name": "主波次",
      "Interval": 180,
      "Enemies": ["ED_Spider_Grunt", "ED_Spider_Grunt_Guard"],
      "Difficulty": 200,
      "Distance": 1500,
      "Locations": 2
    },
    {
      "Enabled": {
        "Mutate": "TriggerOnChange",
        "In": { "Mutate": "EnemiesKilled", "ED": "ED_Spider_Grunt" }
      },
      "Name": "蜂拥补充波次",
      "Interval": 0,
      "Enemies": ["ED_Spider_Swarmer"],
      "Difficulty": 50,
      "Distance": 500,
      "Locations": 1,
      "SpawnOnEnable": true
    }
  ]
}`,explanation:["主波次: 每3分钟生成战士和护卫","补充波次: 使用TriggerOnChange监视战士击杀数","每当战士被击杀，立即生成蜂拥虫补充"]},{title:"动态敌人生成列表",description:"每4分钟从3种不同的精英组合中随机选择一种生成。",code:`{
  "WaveSpawners": [
    {
      "Enabled": { "Mutate": "DuringMission", "StartingAt": 240 },
      "Name": "随机精英波次",
      "Interval": 240,
      "Enemies": {
        "Mutate": "RandomChoice",
        "Choices": [
          ["ED_Spider_Tank", "ED_Spider_Stinger"],
          ["ED_Bomber", "ED_Grabber", "ED_Mactera_TripleShooter"],
          ["ED_Spider_Exploder", "ED_Spider_ExploderTank"]
        ]
      },
      "Difficulty": 300,
      "Distance": 1800,
      "Locations": 2,
      "SpawnOnEnable": true
    }
  ]
}`,explanation:["Enemies: 使用RandomChoice从3个选项中随机选择","选项1: 禁卫+蛭尾","选项2: 轰炸机+捕手蝇+三颚蝇","选项3: 小自爆+大自爆"]},{title:"玩家响应式波次",description:"每次呼叫补给时，有30%概率在补给舱附近生成干扰敌人。",code:`{
  "WaveSpawners": [
    {
      "Enabled": {
        "Mutate": "TriggerSometimes",
        "P": 0.3,
        "In": {
          "Mutate": "TriggerOnChange",
          "In": { "Mutate": "ResuppliesCalled" }
        }
      },
      "Name": "补给干扰波次",
      "Interval": 0,
      "Enemies": ["ED_Spider_Exploder", "ED_Grabber"],
      "Difficulty": 150,
      "Distance": 1000,
      "Locations": 1,
      "SpawnOnEnable": true,
      "Alert": true
    }
  ]
}`,explanation:["TriggerOnChange: 检测ResuppliesCalled变化","TriggerSometimes P=0.3: 30%概率触发","生成小自爆和捕手蝇干扰玩家补给"]}],W1=[{question:"为什么我的WaveSpawner没有生成敌人？",answer:`检查以下可能原因：
1. Enabled字段不为true
2. Difficulty或Distance未设置或为0
3. Enemies列表为空
4. 场上的敌人数量已达到Caps模块（虫限）限制`},{question:"如何让波次只在特定任务类型中生效？",answer:`使用ByMissionType Mutate：
"Enabled": {
  "Mutate": "And",
  "A": { "Mutate": "ByMissionType", "Default": false, "Elimination": true },
  "B": true
}`},{question:"如何让波次在任务后期才激活？",answer:`使用DuringMission指定时间：
"Enabled": { "Mutate": "DuringMission", "StartingAt": 600 }
// 任务开始10分钟后激活`},{question:"如何控制波次的生成频率？",answer:`使用Interval配合各种Mutate：
"Interval": {
  "Mutate": "Add",
  "A": 60,
  "B": { "Mutate": "Multiply", "A": 10, "B": { "Mutate": "EnemyCount" } }
}
// 场上每多一个敌人，间隔增加10秒`}],I1=[{title:"三层嵌套示例",description:"检测补给呼叫，延迟15秒后，以30%概率触发",code:`{
  "Enabled": {
    "Mutate": "TriggerSometimes",
    "P": 0.3,
    "In": {
      "Mutate": "TriggerDelay",
      "N": 15,
      "In": {
        "Mutate": "TriggerOnChange",
        "In": { "Mutate": "ResuppliesCalled" }
      }
    }
  }
}`,level:3},{title:"四层嵌套示例",description:"检测补给呼叫，延迟15秒，以30%概率触发，持续20秒",code:`{
  "Enabled": {
    "Mutate": "TriggerFixedDuration",
    "N": 20,
    "In": {
      "Mutate": "TriggerSometimes",
      "P": 0.3,
      "In": {
        "Mutate": "TriggerDelay",
        "N": 15,
        "In": {
          "Mutate": "TriggerOnChange",
          "In": { "Mutate": "ResuppliesCalled" }
        }
      }
    }
  }
}`,level:4},{title:"复杂条件嵌套",description:"任务5分钟后，且场上敌人少于50，且不是守点阶段",code:`{
  "Enabled": {
    "Mutate": "And",
    "A": {
      "Mutate": "And",
      "A": { "Mutate": "DuringMission", "StartingAt": 300 },
      "B": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "EnemyCount" },
        "<": 50,
        "Then": true,
        "Else": false
      }
    },
    "B": {
      "Mutate": "Not",
      "A": { "Mutate": "DuringDefend" }
    }
  }
}`,level:4}];function $1(){const[A,z]=I.useState(new Set),[N,f]=I.useState(new Set(["基础定时波次（恒压潮）"])),[j,M]=I.useState("fields"),v=m=>{const g=new Set(A);g.has(m)?g.delete(m):g.add(m),z(g)},V=m=>{const g=new Set(N);g.has(m)?g.delete(m):g.add(m),f(g)};return s.jsx("section",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:32:5",id:"wavespawners",className:"py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]",children:s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:33:7",className:"max-w-6xl mx-auto",children:[s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:35:9",className:"mb-12",children:[s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:36:11",className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:37:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:s.jsx(Gf,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:38:15",className:"w-5 h-5 text-[#ffd700]"})}),s.jsx("h2",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:40:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"WaveSpawners 模块"})]}),s.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:44:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"波次生成器。设定自定义虫潮，控制刷潮数量、时间、间隔、距离、条件等。 可以刷出单个敌人（如BOSS），也可以刷出多样性虫群。"})]}),s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:51:9",className:"flex flex-wrap gap-2 mb-8",children:[{id:"fields",label:"字段说明",icon:Qi},{id:"examples",label:"实战示例",icon:Gf},{id:"nested",label:"嵌套教程",icon:Qi},{id:"faq",label:"常见问题",icon:P0}].map(m=>s.jsxs("button",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:58:13",onClick:()=>M(m.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${j===m.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[s.jsx(m.icon,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:67:15",className:"w-4 h-4"}),m.label]},m.id))}),j==="fields"&&s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:75:11",className:"space-y-4",children:Z1.map(m=>{const g=A.has(m.name);return s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:80:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[s.jsxs("button",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:84:19",onClick:()=>v(m.name),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:88:21",className:"flex items-center gap-4",children:[s.jsx("code",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:89:23",className:"px-3 py-1.5 bg-[#21262d] text-[#a5d6ff] rounded-lg font-mono text-sm",children:m.name}),s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:92:23",className:"flex items-center gap-2",children:[m.required&&s.jsx("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:94:27",className:"text-xs px-2 py-0.5 bg-[#ffd700]/20 text-[#ffd700] rounded",children:"必需"}),m.defaultValue&&s.jsxs("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:99:27",className:"text-xs text-[#8b949e]",children:["默认: ",m.defaultValue]})]})]}),g?s.jsx(At,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:106:23",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:108:23",className:"w-5 h-5 text-[#8b949e]"})]}),g&&s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:113:21",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:114:23",className:"pt-4 space-y-3",children:[s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:115:25",children:[s.jsx("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:116:27",className:"text-sm text-[#ffd700]",children:"类型: "}),s.jsx("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:117:27",className:"text-sm text-[#8b949e]",children:m.type})]}),s.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:119:25",className:"text-[#8b949e]",children:m.description})]})})]},m.name)})}),j==="examples"&&s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:131:11",className:"space-y-4",children:K1.map(m=>{const g=N.has(m.title);return s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:136:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[s.jsxs("button",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:140:19",onClick:()=>V(m.title),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:144:21",children:[s.jsx("h3",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:145:23",className:"text-lg font-semibold text-[#e6edf3]",children:m.title}),s.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:146:23",className:"text-sm text-[#8b949e] mt-1",children:m.description})]}),g?s.jsx(At,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:149:23",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:151:23",className:"w-5 h-5 text-[#8b949e]"})]}),g&&s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:156:21",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:157:23",className:"pt-4 space-y-4",children:[s.jsx(bt,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:158:25",code:m.code}),s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:159:25",className:"p-4 bg-[#0d1117] rounded-lg",children:[s.jsx("h4",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:160:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"代码解析"}),s.jsx("ul",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:161:27",className:"space-y-1 text-sm text-[#8b949e]",children:m.explanation.map((k,H)=>s.jsxs("li",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:163:31",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:164:33",className:"text-[#ffd700]",children:"•"}),k]},H))})]})]})})]},m.title)})}),j==="nested"&&s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:181:11",className:"space-y-6",children:[s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:182:13",className:"p-4 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg",children:s.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:183:15",className:"text-[#8b949e]",children:"WaveSpawners的进阶模块会大量依赖Mutate的使用。以下是常见的嵌套示例，从三层到四层嵌套："})}),s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:188:13",className:"space-y-4",children:I1.map(m=>s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:190:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden",children:s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:194:19",className:"p-5",children:[s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:195:21",className:"flex items-center gap-3 mb-3",children:[s.jsxs("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:196:23",className:"px-2 py-1 bg-[#ffd700]/20 text-[#ffd700] text-xs rounded",children:[m.level,"层嵌套"]}),s.jsx("h3",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:199:23",className:"text-lg font-semibold text-[#e6edf3]",children:m.title})]}),s.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:201:21",className:"text-[#8b949e] mb-4",children:m.description}),s.jsx(bt,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:202:21",code:m.code})]})},m.title))})]}),j==="faq"&&s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:212:11",className:"space-y-4",children:W1.map((m,g)=>s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:214:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:218:17",className:"flex items-start gap-3",children:[s.jsx(Su,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:219:19",className:"w-5 h-5 text-[#ffd700] flex-shrink-0 mt-0.5"}),s.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:220:19",children:[s.jsx("h3",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:221:21",className:"text-lg font-semibold text-[#e6edf3] mb-2",children:m.question}),s.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:222:21",className:"text-[#8b949e] whitespace-pre-line",children:m.answer})]})]})},g))})]})})}const P1=[{title:"固定值变量",description:"数值变量，用于存储一个固定的数值。",code:`"Vars": {
  "我的变量": {
    "Type": "Float",
    "Value": 100,
    "Watch": false
  }
}`,explanation:["Type: Float - 变量类型为浮点数","Value: 100 - 变量值为100","Watch: false - 不在控制台监视此变量"]},{title:"动态值变量",description:"数值变量，但基于游戏状态改变，例如根据玩家数量改变数值。",code:`"Vars": {
  "动态难度系数": {
    "Type": "Float",
    "Value": {
      "Mutate": "ByPlayerCount",
      "Values": [1.0, 1.2, 1.5, 1.8]
    },
    "Watch": true
  }
}`,explanation:["使用ByPlayerCount根据玩家数量返回不同值","1人: 1.0, 2人: 1.2, 3人: 1.5, 4人: 1.8","Watch: true - 在控制台监视此变量变化"]},{title:"布尔值变量",description:"和上面两种数值变量不同，布尔变量不输出数字，而是输出逻辑判断（是true、否false），例如是否处于高虫量状态。",code:`"Vars": {
  "是否高虫量状态": {
    "Type": "Boolean",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Mutate": "EnemyCount" },
      ">": 100,
      "Then": true,
      "Else": false
    },
    "Watch": false
  }
}
  //这样的变量可以插入到任何需要“是、否”判断的mutate中，例如：
"EnemyCountModifier": {
  "Mutate": "If",  // If为布尔判断（是、否）
  "Condition": { "Var": "是否高虫量状态" },  // mutate获取判断条件→根据【是否高虫量状态】变量决定
  "Then": 3,  // 高虫量时的倍数
  "Else": 6   // 正常倍数
}`,explanation:["Type: Boolean - 变量类型为布尔值","当场上敌人数量超过100时返回true","可用于控制其他机制的开关，例如上面的例子，当变量【是否高虫量状态】变为true，则降低虫群倍数，避免游戏卡顿"]},{title:"带锁定的变量（LockFloat）",description:"创建一个在特定条件满足后不再变化的变量，用于记录特定时刻的值。",code:`"Vars": {
  "上次播报潮时间": {
    "Type": "Float",
    "Value": {
      "Mutate": "LockFloat",
      "Update": {
        "Mutate": "TriggerOnChange",
        "In": { "Mutate": "DuringGenericSwarm" }
      },
      "Value": {
        "Mutate": "ByTime",  //获取游戏时间
        "InitialValue": 0,  //从0开始
        "RateOfChange": 1,  //每秒增加1
        "StartDelay": 0  //无延迟计时
      }
    },
    "Watch": false
  }
}`,explanation:["LockFloat: 锁定变量值，一旦触发锁定条件，就不再改变，除非再次触发锁定条件","Update: 更新条件（在上例中，条件为：播报潮刷新时）","Value: 你定义的变量值，通常是动态数值（如果不是动态的，那还有什么锁定的必要呢？比如上例，变量值为游戏时间，而时间是在增长的，是动态的）","以上例子的效果：每次播报潮发生时，就储存一次播报潮时间（至于你需要用这个时间值去做什么，那就要看你的游戏设计了，例如：用当前游戏时间-上次播报潮时间，得到一个差值，差值为120s时刷新无畏，这样就完成了【播报潮120s后刷新无畏】的效果。当然要实现这样的效果，你需要先定义【当前游戏时间】变量，以及定义【差值】变量，最后在wavespawn的虫潮触发器里，引用【差值】变量，具体代码实现可以见后文练习题）"]},{title:"字符串选择变量",description:"创建一个用于Select的字符串变量，实现动态配置切换。",code:`"Vars": {
  "当前难度等级": {
    "Type": "String",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Mutate": "ByTime" },
      "<": 300,
      "Then": "Easy",
      "Else": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "ByTime" },
        "<": 600,
        "Then": "Normal",
        "Else": "Hard"
      }
    },
    "Watch": true
  }
}`,explanation:["Type: String - 变量类型为字符串","前5分钟为Easy，5-10分钟为Normal，10分钟后为Hard","可在DifficultySetting中使用Select引用此变量（由于是字符串变量，结合前面讲过select的用法，因此value的值是支持输入中文的！你完全可以把normal换成“简单”，hard换成“困难”，这样方便自己阅读代码）"]},{title:"复杂计算变量-例一",description:"变量内支持mutate的复杂嵌套，支持数值运算与布尔逻辑判断",code:`"Vars": {
  "矿石价格加成": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": {
        "Mutate": "TotalResource",
        "Resource": "Gold"
      },
      ">=": 100,
      "Then": {
        "Mutate": "Clamp",
        "Value": {
          "Mutate": "Multiply",
          "A": 1.5,
          "B": {
            "Mutate": "Floor",
            "Value": {
              "Mutate": "Divide",
              "A": {
                "Mutate": "TotalResource",
                "Resource": "Gold"
              },
              "B": 100
            }
          }
        },
        "Min": 1,
        "Max": 3
      },
      "Else": 1
    },
    "Watch": false
  }
}
// 这个变量实现了：
// 1. 判断黄金是否≥100（条件判断）
// 2. 黄金÷100并向下取整（除法+取整）
// 3. 结果×1.5（乘法）
// 4. 限制在1-3之间（范围限制）
// 5. 黄金不足100时默认为1（默认值）
// 作用：每挖100黄金，该变量值提升1.5倍，最高3倍`,explanation:["首先获取黄金数量","根据黄金数量判断、计算变量值","该变量值可以应用到别的地方，比如：补给所需硝石（黄金越多，减免越多），虫群数量（黄金越多，虫子越多）等等..."]},{title:"复杂计算变量-例二",description:"变量不止支持mutate的复杂运算，甚至支持变量与变量之间的相互引用，好比设小明运动速度为x，小明运动时间为k，那么小明运动距离就能表示为y=kx，这里y就同时引用了k和x的值",code:`"Vars": {
  "挖矿数量": {
    "Type": "Float",
    "Value": {
      "Mutate": "TotalResource",
      "Resource": "Morkite"
    },
    "Watch": false
  },
  // 变量A：记录挖了多少墨棱石
  
  "挖矿等级": {
    "Type": "Float",
    "Value": {
      "Mutate": "Floor",
      "Value": {
        "Mutate": "Divide",
        "A": { "Var": "挖矿数量" },
        "B": 50
      }
    },
    "Watch": false
  },
  // 变量B：引用变量A，计算等级（每50矿石升1级）
  
  "矿工加成": {
    "Type": "Float",
    "Value": {
      "Mutate": "Multiply",
      "A": 0.1,
      "B": { "Var": "挖矿等级" }
    },
    "Watch": false
  },
  // 变量C：引用变量B，每级增加10%挖掘速度
  // 逻辑链条：挖矿数量 → 挖矿等级 → 矿工加成
}`,explanation:["【挖矿数量】 = Mutate获取基础数据 ","【挖矿等级】 = 【挖矿数量】 ÷ 50  ","【矿工加成】 = 【挖矿等级】  × 0.1","最终，【矿工加成】就能直接应用到别的地方，诸如敌人的伤害，速度，数量，或者玩家的回血速度等等，可以实现很多机制，代码数值平衡也方便调整，你只需要修改vars的内容，就能修改游戏平衡了，而不是去那些代表伤害、速度等等的字段去一个个修改"]}],eh=[{title:"免费补给系统",description:"完成副任务获得免费补给，击杀季节怪物也获得免费补给，且要求免费补给次数可储存，多种获得方式之间不能使次数覆盖",code:`"Vars": {
  // ==============================
  // 【第一步】统计总共获得的免费补给次数
  // ==============================
  
  "总获得免费补给次数": {
    "Type": "Float",
    "Value": {
      "Mutate": "EnemiesKilled",  // 统计“免费信用”死亡次数
      "ED": "免费信用"            // 每次“免费信用”死亡 = 获得1次免费机会
    },
    "Watch": false
  },
  // “免费信用”是一个隐藏标记怪，出生即死，仅用于计数
  
  // ==============================
  // 【第二步】统计已使用的免费补给次数
  // ==============================
  
  "已使用免费补给次数": {
    "Type": "Float",
    "Value": {
      "Mutate": "EnemiesKilled",  // 统计“免费信用消耗标记”死亡次数
      "ED": "免费信用消耗标记"    // 每次消耗 = 生成并杀死一个消耗标记
    },
    "Watch": false
  },
  
  // ==============================
  // 【第三步】计算剩余免费次数
  // ==============================
  
  "剩余免费补给次数": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Var": "总获得免费补给次数" },
      "B": { "Var": "已使用免费补给次数" }   //剩余免费补给次数 = 总获得免费补给次数 - 已使用免费补给次数
    },
    "Watch": true  // 实时显示当前可用免费次数
  },
  
  // ==============================
  // 【第四步】动态决定本次补给是否消耗硝石
  // ==============================
  
  "补给消耗硝石": {
    "Type": "Float",
    "Value": {
      "Value": { "Var": "剩余免费补给次数" },
      ">": 0,
      "Then": 0,   // 有剩余免费次数 → 不消耗硝石
      "Else": 80   // 无剩余 → 正常消耗80硝石
    },
    "Watch": false
  }
}

// ==============================
// 【附：WaveSpawners - 免费信用发放】
// ==============================

//  {
//    "Enabled": {
//      "Mutate": "TriggerOnce",
//      "In": {
//        "Mutate": "SecondaryFinished"
//      }
//    },
//    "Enemies": [
//      "ED_Time_Start"      //完成副任务时，生成ED_Time_Star实体，该实体立刻死亡
//    ],
//    "Interval": 0,
//    "Difficulty": 1,
//    "Distance": 5000,
//    "Locations": 1,
//    "SpawnOnEnable": true
//  },

// {
//   "Enabled": {
//     "Mutate": "TriggerOnChange",
//     "In": { "Mutate": "EnemiesKilled", "ED": "ED_Time_Start" } // ED_Time_Star标记死亡时触发生成“免费信用”
//   },
//   "Enemies": [ "免费信用" ],
//   "Interval": 0,
//   "Difficulty": 1,
//   "Distance": 5000,
//   "Locations": 1,
//   "SpawnOnEnable": true
// }

// ==============================
// 【附：WaveSpawners - 免费信用消耗】
// ==============================

// {
//   "Enabled": {
//     "Mutate": "And",
//     "A": { "Mutate": "TriggerOnChange", "In": { "Mutate": "ResuppliesCalled" } }, // 每次呼叫补给
//     "B": {
//       "Mutate": "IfFloat",
//       "Value": {
//         "Mutate": "Subtract",
//         "A": { "Mutate": "EnemiesKilled", "ED": "免费信用" },
//         "B": { "Mutate": "EnemiesKilled", "ED": "免费信用消耗标记" }
//       },
//       ">": 0,
//       "Then": true,  // 仅当还有剩余免费次数时，才允许生成消耗标记
//       "Else": false
//     }
//   },
//   "Enemies": [ "免费信用消耗标记" ],
//   "Interval": 0,
//   "Difficulty": 1,
//   "Distance": 5000,
//   "Locations": 1,
//   "SpawnOnEnable": true
// }

// ==============================
// 【附：隐藏实体定义】
// ==============================

//  "ED_Nisse": {
//    "Base": "ED_Nisse",
//    "DisplayName": "圣诞小精灵",
//    "AttackDamageMultiplier": 0,
//    "IsBossFight": false,
//    "Scale": 1,
//    "ShowHealthBar": true,
//    "Spawner": {
//      "ED": "ED_Time_Start",
//      "OnSpawnDelay": 0,
//      "OnSpawnCount": 0,
//      "IntervalSpawnCount": 0,
//      "Interval": 30,
//      "OnDeathCount": 1,      //死亡时生成ED_Time_Start实体，
//      "MaxSpawns": 1,
//      "OnlySpawnOnAlert": false,
//      "OnDeathKillSpawns": false
//   }
// },

//  "ED_Time_Start": {
//    "Base": "ED_Spider_Grunt_Attacker",
//    "DisplayName": "时停准备中...",
//    "Significance": "时停启动器（任务完成标记）",
//    "AttackDamageMultiplier": 0,
//    "IsBossFight": false,
//    "HealthRaw": 2000,
//    "Heal": -4000,       //该实体立刻死亡，死亡触发“免费信用”实体（通过wavespawn触发）
//    "Scale": 0,
//    "ShowHealthBar": false,
//    "Resistances": {...},     //考虑到方便教学，这里和该系统无关的几项定义就省略了，后面不再赘述
//    "Temperature": {...},
//    "Movement": {...}
//  },

// "免费信用": {
//   "Base": "ED_Spider_Grunt_Attacker",
//   "AttackDamageMultiplier": 0,
//   "HealthRaw": 2000,
//   "Heal": -4000,      // 该实体立刻死亡，死亡使【免费信用】变量+1，至此完成逻辑闭环
//   "Scale": 0,
//   "ShowHealthBar": false,
//   "Resistances": {...},       
//   "Temperature": {...},
//   "Movement": {...}
// },

// "免费信用消耗标记": {
//   "Base": "ED_Spider_Grunt_Attacker",
//   "AttackDamageMultiplier": 0,
//   "HealthRaw": 2000,
//   "Heal": -4000,      // 出生即死
//   "Scale": 0,
//   "ShowHealthBar": false,
//   "Resistances": {...},  
//   "Temperature": {...},
//   "Movement": {...}
// }

//下面附上设计思路的完整逻辑链：

【玩家完成副任务（SecondaryFinished）】 ↓
【WaveSpawner 触发一次 → 生成隐藏实体：ED_Time_Start】 ↓
【ED_Time_Start 出生即死（Heal = -4000）】 ↓
【其死亡事件被 TriggerOnChange 捕获 → 生成“免费信用”实体】 ↓
【“免费信用”出生即死 → EnemiesKilled 统计其死亡 → 【总获得免费补给次数】+1】 ↓
（此时玩家拥有 1 次免费补给额度）

【玩家按下补给键 → 系统检测 ResuppliesCalled 变化】 ↓
【WaveSpawner 检查：是否【剩余免费补给次数 > 0】？】
  → 是：生成“免费信用消耗标记”实体
  → 否：跳过，正常扣硝石 ↓
【“免费信用消耗标记”出生即死 → EnemiesKilled 统计其死亡 → 【已使用免费补给次数】+1】 ↓
【【剩余免费补给次数】 = 总获得 - 已使用 → 实时更新】 ↓
【【补给消耗硝石】变量判断：若剩余 > 0 → 返回 0；否则返回 80】 ↓
【游戏底层根据该值决定是否扣除硝石资源】 ↓
【游戏表现：若有免费额度，矮人呼叫补给，不消耗硝石；否则提示“需要80硝石”】`,explanation:["发放端：副任务完成 或者 季节小精灵死亡 → ED_Time_Start 死亡 → 触发“免费信用” → 计入总获得。","消费端：呼叫补给 + 有余额 → 生成“免费信用消耗标记” → 计入已使用。","状态同步：通过两个 EnemiesKilled 变量相减，实时得出可用额度。","资源控制：补给消耗硝石 变量直接驱动经济系统，实现“有则免，无则付”。"]},{title:"冰焰系统（一）--冰焰等级",description:"冰焰初始lv0，每获取25特殊矿石，提升lv，每lv提升延长持续时间，减少冷却时间",code:`"Vars": {
  // ==============================
  // 【第一步】特殊矿石总量计算
  // ==============================
  
  "特殊矿石总量": {
    "Type": "Float",
    "Value": {
      "Mutate": "Add", // 加法：特殊矿石总量 = A + B
      "A": {   
        "Mutate": "TotalResource", // A = 吸铁石数量
        "Resource": "Magnite"   
      },                      
      "B": {                 
        "Mutate": "Add",      // B = （新A + 新B）
        "A": {
          "Mutate": "TotalResource",  // 新A = 蜂母石数量
          "Resource": "Bismor"
        },
        "B": {
          "Mutate": "Add",      // 新B = （新新A + 新新B）
          "A": {
            "Mutate": "TotalResource", // 新新A = 乌玛石数量
            "Resource": "Umanite"
          },
          "B": {
            "Mutate": "Add",  // 新新B = （新新新A + 新新新B）
            "A": {
              "Mutate": "TotalResource", // 新新新A = 铜矿数量
              "Resource": "Croppa"
            },
            "B": {
              "Mutate": "Add", // 继续加法嵌套
              "A": {
                "Mutate": "TotalResource", // 玉石数量
                "Resource": "Jadiz"
              },
              "B": {
                "Mutate": "TotalResource", // 妙绝珠数量
                "Resource": "Enor Pearl"
              }
            }
          }
        }
      }
    },
    "Watch": false
  },
  // 这个多层嵌套加法，得到了蜂母石、吸铁石、乌玛石、铜矿、玉石、妙绝珠的总和数量
  // 那么这个【特殊矿石总量】是用来做什么的呢？请看下面：
  
  // ==============================
  // 【第二步】冰焰等级计算
  // ==============================
  
  "冰焰等级": {
    "Type": "Float",
    "Value": {
      "Mutate": "Clamp", // 限制最大最小值
      "Value": {
        "Mutate": "Floor",  // 获取对数值向下取整
        "Value": {
          "Mutate": "Divide", // 获取除法
          "A": { "Var": "特殊矿石总量" }, // 引用上述的特殊矿石总和数量
          "B": 25 // 特殊矿石总量 ÷ 25
        }
      },
      "Min": 0, // 最小为0，代表lv0
      "Max": 4  // 最大为4，代表lv4
    },
    "Watch": true
  },
  // 这样，我们就定义了：冰焰等级 = (特殊矿物总量 ÷ 25) 向下取整
  // 换句话说，每满25矿石升一级，不满不升级，最低0级，最高4级
  // 那么【冰焰等级】又是用来做什么的？请看下面：
  
  // ==============================
  // 【第三步】冰焰持续时间计算
  // ==============================
  
  "冰焰基础持续时间": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",  // 条件判断：如果满足条件则执行Then，否则执行Else
      "Value": {
        "Var": "冰焰等级"  // 引用冰焰等级变量的值
      },
      "==": 4,  // 判断条件：冰焰等级是否等于4
      "Then": 30,  // 如果等级为4，则基础持续时间为30秒
      "Else": {  // 如果等级不为4，则执行以下计算
        "Mutate": "Add",  // 加法运算
        "A": 15,  // 基础值15秒
        "B": {
          "Mutate": "Multiply",  // 乘法运算
          "A": {
            "Var": "冰焰等级"  // 冰焰等级的值
          },
          "B": 5  // 乘数5
        }
      }
    },
    "Watch": false  
  }
  // 由此可见，我们就定义了：冰焰持续时间 = 15 + (冰焰等级 × 5)
  // 等级0: 15 + (0×5) = 15秒
  // 等级1: 15 + (1×5) = 20秒
  // 等级2: 15 + (2×5) = 25秒
  // 等级3: 15 + (3×5) = 30秒
  // 等级4: 在Then中直接返回30秒
  // 同理，我们还能得到【冰焰冷却时间】
  
  // ==============================
  // 【第四步】冰焰冷却时间计算
  // ==============================
  
    "冰焰冷却时间": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": {
        "Var": "冰焰等级"
      },
      "==": 4,
      "Then": 60,
      "Else": {
        "Mutate": "Subtract",
        "A": 120,
        "B": {
          "Mutate": "Multiply",
          "A": {
            "Var": "冰焰等级"
          },
          "B": 20
        }
      }
    },
    "Watch": false
  },
  // 冰焰冷却时间=120 - (等级 × 20)
  // 等级0：120秒
  // 等级1：100秒
  // 等级2：80秒
  // 等级3：60秒
  // 等级4: 60秒
  // 这样就和持续时间的升级保持一致了
  // 以上是【冰焰系统】的复杂变量计算链条：【特殊矿石总量】→【冰焰等级】→【冰焰持续时间】
                                                            ↓→【冰焰冷却时间】
}`,explanation:["首先计算所有特殊矿石的总量","总量除以25并向下取整，得到冰焰等级，使用Clamp限制在0-4级之间","冰焰持续时间=15 + (冰焰等级 × 5)，冰焰冷却时间=120 - (等级 × 20)","Lv0: 0-24矿石，持续15秒, 冷却120秒，Lv1: 25-49矿石，20秒, 冷却100秒，Lv2: 50-74矿石, 25秒，冷却80秒，Lv3: 75-99矿石, 30秒，冷却60秒，Lv4: 100+矿石，30秒，冷却60秒"]},{title:"冰焰系统（二）--冰焰触发、冷却",description:"每次呼叫补给触发冰焰，但冷却中不触发，触发后，动态改变怪物温度值，实现冰火二重天的效果",code:`"Vars": {
  // ==============================
  // 【第四步】冰焰触发判断
  // ==============================
  
  "冰焰是否已触发过": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": {
        "Mutate": "EnemiesKilled",  //获取敌人死亡数量
        "ED": "ED_Ice_Fire_Trigger" //指明ED_Ice_Fire_Trigger敌人
      },
      ">=": 1,
      "Then": 1, //ED_Ice_Fire_Trigger只要死过，则变量【冰焰是否已触发过】为1
      "Else": 0  //否则为0
    },
    "Watch": false
  },
  // 这个变量的作用是：判断冰焰是否已经被触发过
  // 当"ED_Ice_Fire_Trigger"这个敌人被"击杀"时，就代表冰焰被触发了
  
  "冰焰死亡时间点": {
    "Type": "Float",
    "Value": {
      "Mutate": "LockFloat",  //锁定变量值，在update的条件下更新
      "Update": { 
        "Mutate": "TriggerOnChange", //TriggerOnChange意为每次ED_Ice_Fire_Trigger每次死亡都触发update，使变量更新
        "In": {
          "Mutate": "EnemiesKilled",
          "ED": "ED_Ice_Fire_Trigger" //mutate获取ED_Ice_Fire_Trigger死亡数量
        }
      },
      "Value": {
        "Mutate": "ByTime", //变量值为游戏时间（前面讲过）
        "InitialValue": 0,
        "RateOfChange": 1,
        "StartDelay": 0
      }
    },
    "Watch": false
  },
  // 这个变量的作用是：记录冰焰被触发的【时间点】
  // LockFloat：锁定一个值，一旦锁定就不再变化（这里锁定的值为时间点，比如我在游戏开始后83秒触发了ED_Ice_Fire_Trigger死亡，那么值在下次触发前，将一直保持83）
  // Update：当"ED_Ice_Fire_Trigger"被击杀时触发值的更新，并在更新后立刻锁定不再变动，除非等到下次"ED_Ice_Fire_Trigger"被击杀
  // Value：被锁定的值就是当时的游戏时间（bytime）
  
  "冰焰经过秒数": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": {
        "Var": "冰焰是否已触发过"
      },
      "==": 1,
      "Then": {
        "Mutate": "Subtract",
        "A": {
          "Var": "当前游戏时间"
        },
        "B": {
          "Var": "冰焰死亡时间点"
        }
      },
      "Else": -1
    },
    "Watch": false
  },
  // 这个变量的作用是：计算从冰焰触发到现在经过了多少秒
  // 计算方式：当前游戏时间 - 冰焰触发的时间点
  // 如果冰焰还没触发过（值为-1），方便后续判断
  
  // ==============================
  // 【第五步】冰焰状态判断
  // ==============================
  
  "是否冰焰激活中": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": {
        "Var": "冰焰经过秒数"
      },
      ">": 0,
      "Then": {
        "Mutate": "IfFloat",
        "Value": {
          "Var": "冰焰经过秒数"
        },
        "<=": {
          "Var": "冰焰基础持续时间"
        },
        "Then": 1,
        "Else": 0
      },
      "Else": 0
    },
    "Watch": false
  },
  // 这个变量的作用是：判断冰焰是否处于【激活】状态
  // 条件1：冰焰触发过（经过秒数>0）还记得上一个变量为什么要设置-1么？其实就是为了否决这里的条件1，防止在冰焰从未触发过的情况下自动触发（比如刚开局，下空降仓自己触发冰焰了）
  // 条件2：经过的时间 ≤ 冰焰持续时间
  // 两个条件都满足 → 返回1（激活中）
  // 否则 → 返回0（未激活）
  
  "是否冰焰冷却中": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": {
        "Var": "冰焰经过秒数"
      },
      ">": {
        "Var": "冰焰基础持续时间"
      },
      "Then": {
        "Mutate": "IfFloat",
        "Value": {
          "Var": "冰焰经过秒数"
        },
        "<=": {
          "Mutate": "Add",
          "A": {
            "Var": "冰焰基础持续时间"
          },
          "B": {
            "Var": "冰焰冷却时间"
          }
        },
        "Then": 1,
        "Else": 0
      },
      "Else": 0
    },
    "Watch": true
  },
  // 这个变量的作用是：判断冰焰是否处于【冷却】状态
  // 条件1：经过的时间 > 冰焰持续时间（激活时间已结束）
  // 条件2：经过的时间 ≤ (持续时间 + 冷却时间)
  // 举例：
  // 若冰焰达到了lv4，持续时间30秒，冷却60秒
  // 经过40秒：激活结束，冷却中 → 返回1
  // 经过100秒：冷却也结束了 → 返回0
  
  "冰焰剩余冷却秒数": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": {
        "Var": "是否冰焰冷却中"
      },
      "==": 1,
      "Then": {
        "Mutate": "Clamp",
        "Value": {
          "Mutate": "Subtract",
          "A": {
            "Var": "冰焰冷却时间"
          },
          "B": {
            "Mutate": "Subtract",
            "A": {
              "Var": "冰焰经过秒数"
            },
            "B": {
              "Var": "冰焰基础持续时间"
            }
          }
        },
        "Min": 0,
        "Max": {
          "Var": "冰焰冷却时间"
        }
      },
      "Else": 0
    },
    "Watch": false
  },
  // 这个变量的作用是：计算还剩下多少秒冷却结束
  // 计算公式：冷却时间 - (已经经过的时间 - 持续时间)
  // 举例：持续时间30秒，冷却60秒，经过40秒
  // 计算：60 - (40 - 30) = 50秒剩余冷却
  // 当不再冷却时，返回0
}
    
  // ==============================
  // 【第六步】触发机制
  // ==============================

    "WaveSpawners": [
    {
      "Enabled": {
        "Mutate": "And",  //获取and条件，A与B同时为true时才触发
        "A": {
          "Mutate": "TriggerOnChange",  //当“某个值”改变时触发
          "In": {
            "Mutate": "ResuppliesCalled"  //“某个值”为“呼叫补给次数”（相当于，每次呼叫补给时触发，触发什么呢，触发A条件转变为true！）
          }
        },
        "B": {
          "Mutate": "IfFloat",
          "Value": {
            "Var": "冰焰是否已触发过"
          },
          "==": 0,
          "Then": true,  //引用上面的变量【冰焰是否已触发过】=0为true（相当于，全局第一次冰焰没有触发过--值为0，才是true），这里是为了防止第一次冰焰不触发
          "Else": {    //当第一次冰焰被触发后，就进入else分支，此时开始正常冷却计时，判断流程如下：
            "Mutate": "IfFloat",
            "Value": {
              "Var": "冰焰经过秒数"
            },
            ">": {
              "Var": "冰焰冷却时间"
            },
            "Then": true,  //当【冰焰经过秒数】＞【冰焰冷却时间】时为true (相当于，过了冷却时间了，才能触发，防止在冷却中触发)
            "Else": false  //当【冰焰经过秒数】＞【冰焰冷却时间】时为false（冷却中不触发）
          }
        }
      },
      "Enemies": [
        "ED_Ice_Fire_Trigger"  //触发了什么？当然是生成这个名为“ED_Ice_Fire_Trigger”的敌人！这个敌人作为一个实体标记，用来指示上面的变量系统运作
      ],
      "Interval": 0,
      "Difficulty": 1,
      "Distance": 2000,
      "Locations": 1,
      "SpawnOnEnable": true,
      "PauseOnDisable": true
    },
    
      // ==============================
      // 【第七步】敌人实体定义
      // ==============================

      "EnemiesNoSync": {
      "ED_Ice_Fire_Trigger": {
      "Base": "ED_Spider_Grunt_Attacker", //基于刀锋异虫（为什么选刀锋异虫，后面tips会讲）
      "DisplayName": "冰焰触发器",  //写给作者自己看的名称
      "AttackDamageMultiplier": 0, //没有攻击力，防止这个机制标记伤害到玩家
      "HealthRaw": 5000,
      "Heal": -10000,  //该怪物刚出生就得-10000血量，相当于立刻死亡（由于前面变量中引用的是该怪物的死亡数量，因此我们需要让这个怪物立刻死亡）
      "Scale": 0,  //体型为0，让玩家们见不到这个怪物，这个怪物只作为机制标记使用
      "ShowHealthBar": false, //不显示血量，防止画面中出现浮空血量
      "Resistances": {
        "ColdDamageMultiplier": 0,
        "CorrosiveDamageMultiplier": 0,
        "ElectricDamageMultiplier": 0,
        "ExplosionDamageMultiplier": 0,
        "FireDamageMultiplier": 0,
        "InternalDamageMultiplier": 0,
        "KineticDamageMultiplier": 0,
        "PhysicalDamageMultiplier": 0,
        "PiercingDamageMultiplier": 0,
        "PoisonDamageMultiplier": 0,
        "RadiationDamageMultiplier": 0
      },
      "Temperature": {
        "BurnTemperature": 1000,
        "FreezeTemperature": -3000  //防止该怪物被钻机意外冰冻，而导致整个冰焰系统失效
      },
      "Movement": {
        "MaxPawnSpeed": 0,
        "MaxAcceleration": 0  //该怪物移速为0,
      }
    },

      // ==============================
      // 【第八步】修改敌人的动态温度值，最终实现冰焰效果
      // ==============================


      "ED_Spider_ShieldTank": {
      "Base": "ED_Spider_ShieldTank", //这里是暴君，就是修改暴君的
      "Temperature": {  //Temperature意为温度属性
        "BurnTemperature": {
          "Mutate": "IfFloat",
          "Value": {
            "Var": "是否冰焰激活中"
          },
          "==": 1,
          "Then": 50,
          "Else": 100
        },                        //当【是否冰焰激活中】为1，则BurnTemperature的值为50，否则为100（也就是说，当冰焰触发时，50热量就能点燃）
        "DouseFireTemperature": {
          "Mutate": "IfFloat",
          "Value": {
            "Var": "是否冰焰激活中"
          },
          "==": 1,
          "Then": -100,
          "Else": 40
        },                       //当【是否冰焰激活中】为1，则DouseFireTemperature的值为-100，否则为40（也就是说，当冰焰触发时，-100热量才能灭火，相当于冰冻不灭火）
        "CoolingRate": {
          "Mutate": "IfFloat",
          "Value": {
            "Var": "是否冰焰激活中"
          },
          "==": 1,
          "Then": 0,
          "Else": 10
        },
        "FozenDamageBonusScale": 1.5,
        "FreezeTemperature": {
          "Mutate": "IfFloat",
          "Value": {
            "Var": "是否冰焰激活中"
          },
          "==": 1,
          "Then": 100,
          "Else": -198
        },                     //当【是否冰焰激活中】为1，则FreezeTemperature的值为100，否则为-198（也就是说，当冰焰触发时，只要低于100热量就能冰冻，相当于燃烧秒冻）
        "UnfreezeTemperature": {
          "Mutate": "IfFloat",
          "Value": {
            "Var": "是否冰焰激活中"
          },
          "==": 1,
          "Then": 150,
          "Else": -50
        },                    //当【是否冰焰激活中】为1，则UnfreezeTemperature的值为150，否则为-50（也就是说，当冰焰触发时，只要高于150热量就能解冻，相当于永不解冻）
        "WarmingRate": {
          "Mutate": "IfFloat",
          "Value": {
            "Var": "是否冰焰激活中"
          },
          "==": 1,
          "Then": 0,
          "Else": 50
        }
      }
    },
  }
    //以上是基于vars的冰焰系统的完整解析，下面给出逻辑链示意图：

【玩家呼叫补给】 ↓
【TriggerOnChange检测呼叫事件】 ↓
┌─首次触发 → 【允许生成标记怪】
└─非首次 → 【判断冷却状态】 → 冷却中则阻塞，已冷却则允许 ↓
【生成隐藏标记怪：ED_Ice_Fire_Trigger】 ↓
【标记怪立即死亡】 ↓
【LockFloat锁定死亡时间点】 ↓
【实时计算：当前时间 - 死亡时间 = 冰焰经过秒数】 ↓
┌─经过秒数 ≤ 持续时间 → 【激活状态 = 1】 → 应用到怪物温度
├─持续时间 < 经过秒数 ≤ (持续时间+冷却时间) → 【冷却状态 = 1】
└─经过秒数 > (持续时间+冷却时间) → 【可再次触发】 ↓
【激活状态 = 1】 ↓
【怪物温度属性动态修改】 ↓
【游戏表现：点燃立刻冰冻，冰冻立刻点燃】`,explanation:["wavespawn作为触发层，负责触发ED_Ice_Fire_Trigger这样的实体标记","mutate获取实体标记的现在数量（或者死亡数量），以及bytime游戏时间等等变量...将这些量输入到vars的自定义变量中","自定义变量vars经过mutate进行加成乘除等逻辑运算，最后得出“是”、“否”或者“1”、“0”的判断","将vars的判断填入实体怪物（如暴君、禁卫等...）的温度代码里","完成代码构建：玩家呼叫补给→触发标记→vars虚拟层运算比对→允许触发→改变敌人温度值→效果实现"]},{title:"威胁值系统（一）--威胁值的累积、清零与循环",description:"玩家杀敌，挖矿都会增长威胁值，威胁值超过50后归0",code:`"Vars": {

  // ==============================
  // 【第一步】各类行为转换为威胁标记
  // ==============================

    "DNA基础数值": {
      "Type": "Float",
      "Value": {
        "Mutate": "Multiply",
        "A": {
          "Mutate": "ByDNA",
          "Default": 75,
          "x,1,1": 55,
          "x,1,2": 60,
          "x,1,3": 65,
          "x,2,1": 70,
          "x,2,2": 75,
          "x,2,3": 80,
          "x,3,1": 75,
          "x,3,2": 80,
          "x,3,3": 85
        },
        "B": 1.5
      },
      "Watch": false
    },                 //根据任务类型，决定某个值，我们暂时称这个值为X

  "KillMarks": {
    "Type": "Float",
    "Value": {
      "Mutate": "Floor",
      "Value": {
        "Mutate": "Divide",
        "A": { "Mutate": "EnemiesKilled" },
        "B": { "Var": "DNA基础数值" }  // 每X个敌人 = 1点杀敌威胁（比如，在x,2,2，也就是2长度，2复杂度时，每杀死75*1.5=112.5个敌人，就增长1点杀敌威胁）
      }
    },
    "Watch": false
  },

  "NitraMarks": { "Value": { "Mutate": "Floor", "Value": { "Mutate": "Divide", "A": { "Mutate": "TotalResource", "Resource": "Nitra" }, "B": 80 } } },
  "GoldMarks": { "Value": { "Mutate": "Floor", "Value": { "Mutate": "Divide", "A": { "Mutate": "TotalResource", "Resource": "Gold" }, "B": 80 } } },
  "MagniteMarks": { "Value": { "Mutate": "Floor", "Value": { "Mutate": "Divide", "A": { "Mutate": "TotalResource", "Resource": "Magnite" }, "B": 10 } } },
  "BismorMarks": { "Value": { "Mutate": "Floor", "Value": { "Mutate": "Divide", "A": { "Mutate": "TotalResource", "Resource": "Bismor" }, "B": 10 } } },
  "UmaniteMarks": { "Value": { "Mutate": "Floor", "Value": { "Mutate": "Divide", "A": { "Mutate": "TotalResource", "Resource": "Umanite" }, "B": 10 } } },
  "CroppaMarks": { "Value": { "Mutate": "Floor", "Value": { "Mutate": "Divide", "A": { "Mutate": "TotalResource", "Resource": "Croppa" }, "B": 10 } } },
  "Enor PearlMarks": { "Value": { "Mutate": "Floor", "Value": { "Mutate": "Divide", "A": { "Mutate": "TotalResource", "Resource": "Enor Pearl" }, "B": 5 } } },
  "JadizMarks": { "Value": { "Mutate": "Floor", "Value": { "Mutate": "Divide", "A": { "Mutate": "TotalResource", "Resource": "Jadiz" }, "B": 5 } } },
  "AquarqMarks": { "Value": { "Mutate": "Floor", "Value": { "Mutate": "Divide", "A": { "Mutate": "TotalResource", "Resource": "Aquarq" }, "B": 0.2 } } },
  "GlyphidEggsMarks": { "Value": { "Mutate": "Multiply", "A": 3, "B": { "Mutate": "TotalResource", "Resource": "GlyphidEggs" } } },

  //以上这一串，分别是：80硝石增长1点威胁/80黄金增长1点威胁/10吸铁石增长1点威胁/...后面不再赘述，总之就是采矿增加威胁值的数据

  // ==============================
  // 【第二步】汇总所有威胁标记 → 总威胁值
  // ==============================

  "ThreatValue": {
    "Type": "Float",
    "Value": {
      "Mutate": "Add",
      "A": { "Var": "KillMarks" },
      "B": {
        "Mutate": "Add",
        "A": { "Var": "NitraMarks" },
        "B": {
          "Mutate": "Add",
          "A": { "Var": "GoldMarks" },
          "B": {
            "Mutate": "Add",
            "A": { "Var": "MagniteMarks" },
            "B": {
              "Mutate": "Add",
              "A": { "Var": "BismorMarks" },
              "B": {
                "Mutate": "Add",
                "A": { "Var": "UmaniteMarks" },
                "B": {
                  "Mutate": "Add",
                  "A": { "Var": "CroppaMarks" },
                  "B": {
                    "Mutate": "Add",
                    "A": { "Var": "Enor PearlMarks" },
                    "B": {
                      "Mutate": "Add",
                      "A": { "Var": "JadizMarks" },
                      "B": {
                        "Mutate": "Add",
                        "A": { "Var": "AquarqMarks" },
                        "B": { "Var": "GlyphidEggsMarks" }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "Watch": false
  },

  // 把刚才的所有变量，全部通过mutate的add加法，都加起来，得到新变量【ThreatValue】，这个就是总的威胁值
  // 由于游戏中的杀敌数不会回退，除了硝石以外的矿石也不会硝石，那么【ThreatValue】的值就只会越来越大，这样的话，该如何实现归0的操作呢？

  // ==============================
  // 【第三步】威胁值分段：循环归档 + 当前段位
  // ==============================

  "威胁循环次数": {
    "Type": "Float",
    "Value": {
      "Mutate": "Floor",
      "Value": {
        "Mutate": "Divide",
        "A": { "Var": "ThreatValue" },
        "B": 51 // 每51点威胁 = 1次完整进化循环
      }
    },
    "Watch": false
  },

  // 这里我们让【总威胁值】也就是【ThreatValue】，去除以51，得到一个商，再对商向下取整（floor），就能得到循环次数了
  // 例如：总威胁值为30，30÷51，商的整数为0，就代表还没有发生循环。如果总威胁值为52，那么52÷51，商的整数部分为1，就代表发生了第一次循环
  // 为什么是51而不是50？很显然，如果除数设置为50，那么威胁值将会从49变到50的瞬间归0，只有除数为51时，才会让威胁值出现50这个数字，在50变到51的瞬间归0
  // 这个循环次数有什么用→→→作用有两个：
  // 一是用于计算归零后的威胁值。
  // 二是用mutate的Triggeronchange检测变化，一旦循环次数改变，则生成一个无畏，达到威胁值满级后召唤无畏的效果

  "实际威胁值": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Var": "ThreatValue" },
      "B": {
        "Mutate": "Multiply",
        "A": { "Var": "威胁循环次数" },
        "B": 51
      }
    },
    "Watch": true // 实时显示当前段位内的威胁进度（0～50）
  }

  //实际威胁值=总威胁值-威胁循环次数*51
  //例如：当总威胁值为60，那么实际威胁值=60-1*51=9，很显然，此时是第一次循环归零后，又重新来到了9点威胁值的水平

}`,explanation:["系统将击杀、各类矿物采集等行为统一折算为‘威胁标记’，如每80硝石=1点，每10吸铁石=1点等","所有标记相加得到总威胁值（ThreatValue），作为虫群进化的唯一依据","通过‘威胁循环次数 = floor(总威胁 / 51)’实现版本归档，确保每次进化只读取最新段位","‘实际威胁值 = 总威胁÷51’用于实时判断是否达到下一进化阈值（5/10/20/35）"]},{title:"威胁值系统（二）--虫群进化的累积、清零与循环",description:"威胁值累积诱发虫群进化（数量、速度..等），且威胁值归零后，虫群进化数值也清零",code:`"Vars": {
  // ==============================
  // 【第四步】虫量进化：依赖“虫量标记怪”实体
  // ==============================

  // 【核心逻辑】每当威胁值跨过进化阈值（5/10/20/35），系统生成一次“ED_Threat_Count”敌人
  // 该敌人无模型、无伤害、出生即死，仅作为“虫量进化+1”的计数信号

  "虫量总数": {
    "Type": "Float",
    "Value": {
      "Mutate": "EnemiesKilled",
      "ED": "ED_Threat_Count"  // ← 关键：统计名为 ED_Threat_Count 的敌人死亡次数
    },
    "Watch": false
  },

  // 【锁定本轮起点】当“威胁循环次数”变化时（即进入新51点周期），锁定当前已有的进化次数
  "虫量已锁定": {
    "Type": "Float",
    "Value": {
      "Mutate": "LockFloat",
      "Update": {
        "Mutate": "TriggerOnChange",
        "In": { "Var": "威胁循环次数" }  // 每当 ThreatValue 跨过 51/102/153... 时触发
      },
      "Value": {
        "Mutate": "EnemiesKilled",
        "ED": "ED_Threat_Count"
      }
    },
    "Watch": false
  },

  // 【本轮新增进化次数】= 当前总数 - 上轮锁定值
  "虫量监视": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Var": "虫量总数" },
      "B": { "Var": "虫量已锁定" }
    },
    "Watch": true  // 显示当前循环内已激活的虫量进化层数（由于每次循环时更新【虫量已锁定】，因此循环更新时，【虫量总数】-【虫量已锁定】=0，这样就实现了循环归零）
  },

    // 同理定义：虫攻监视、虫速监视、虫抗监视、蜂拥寄生、共生战士等等一切会随着循环归零的进化相关属性...
    // 由于这些属性全部采用了相同的结构，这里就只以“虫量”作为例子，避免文本过长影响理解

  // ==============================
  // 【第五步】应用到游戏难度参数
  // ==============================

  "EnemyCountModifier": {
    "Mutate": "Clamp",
    "Value": {
      "Mutate": "Add",
      "A": 3,  // 基础虫量倍率3倍
      "B": {
        "Mutate": "Multiply",
        "A": { "Var": "虫量监视" },  // 每进化1层虫量 则虫量+1倍（公式为：最终虫量倍率EnemyCountModifier=3+虫量监视*1）
        "B": 1
      }
    },
    "Min": 1.5,
    "Max": 6
  }                   //事实上，在星夜代码中，虫量的计算远比这复杂的多，这里简化成上述模样，主要是为了方便理解vars的应用

  // ==============================
  // 【附：WaveSpawners 中的触发逻辑】
  // ==============================
  // WaveSpawners: [
    {
      "Enabled": {
        "Mutate": "And",
        "A": {
          "Mutate": "DuringMission",
          "StartingAt": 30
        },
        "B": {
          "Mutate": "TriggerOnChange",
          "RiseOnly": true,
          "In": {
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "Mutate": "Select",
            "Select": {
              "Mutate": "IfFloat",
              "Value": {
                "Var": "实际威胁值"
              },
              ">=": 50,
              "Then": "5",
              "Else": {
                "Mutate": "IfFloat",
                "Value": {
                  "Var": "实际威胁值"
                },
                ">=": 35,
                "Then": "4",
                "Else": {
                  "Mutate": "IfFloat",
                  "Value": {
                    "Var": "实际威胁值"
                  },
                  ">=": 20,
                  "Then": "3",
                  "Else": {
                    "Mutate": "IfFloat",
                    "Value": {
                      "Var": "实际威胁值"
                    },
                    ">=": 10,
                    "Then": "2",
                    "Else": {
                      "Mutate": "IfFloat",
                      "Value": {
                        "Var": "实际威胁值"
                      },
                      ">=": 5,
                      "Then": "1",
                      "Else": "0"
                    }
                  }
                }
              }
            },
            "Default": 0
          }
        }
      },                  //以上逻辑表示，5/10/15/25/35每个威胁值档位，分别对应0/1/2/3/4五个数值
      "Enemies": {
        "Mutate": "Select",
        "Select": {
          "Mutate": "IfFloat",
          "Value": {
            "Var": "实际威胁值"
          },
          ">=": 50,
          "Then": "Level5",
          "Else": {
            "Mutate": "IfFloat",
            "Value": {
              "Var": "实际威胁值"
            },
            ">=": 35,
            "Then": "Level4",
            "Else": {
              "Mutate": "IfFloat",
              "Value": {
                "Var": "实际威胁值"
              },
              ">=": 20,
              "Then": "Level3",
              "Else": {
                "Mutate": "IfFloat",
                "Value": {
                  "Var": "实际威胁值"
                },
                ">=": 10,
                "Then": "Level2",
                "Else": "Level1"
              }
            }
          }
        },                             //以上表示，0/1/2/3/4五个数值分别对应“ED_Threat_1/ED_Threat_2/ED_Threat_3/ED_Threat_4/空白”这5个实体敌人
        "Default": [],
        "Level1": [
          "ED_Threat_1"
        ],
        "Level2": [
          "ED_Threat_2"
        ],
        "Level3": [
          "ED_Threat_3"
        ],
        "Level4": [
          "ED_Threat_4"
        ],
        "Level5": []
      },                           
      "Interval": 0,
      "Difficulty": 1,
      "Distance": 5000,
      "Locations": 1,
      "SpawnOnEnable": true,
      "PauseOnDisable": true
    },
    //这样，我们就搭建好了，每当威胁值来到5/10/15/25/35时，总会对应生成“ED_Threat_1/ED_Threat_2/ED_Threat_3/ED_Threat_4/空白”这几个敌人，空白为不生成
    //这几个敌人生成后，有什么作用？往下看！
  // ]

  // ==============================
  // 【附：ED_Threat_1 实体定义】
  // ==============================
  // "EnemiesNoSync": {
    "ED_Threat_1": {
      "Base": "ED_Spider_Grunt_Attacker",
      "DisplayName": "一级威胁触发",
      "AttackDamageMultiplier": 0,
      "HealthRaw": 5000,
      "Heal": -10000,                   // Heal值为-10000，该实体出生就立刻死亡，死亡有什么用？往下看！
      "Scale": 0,
      "ShowHealthBar": false,
      "Resistances": {...},
      "Temperature": {...},
      "Movement": {...},    
      "Spawner": {
        "ED": "ED_Swarm_Buff",
        "OnSpawnDelay": 0,
        "OnSpawnCount": 0,
        "IntervalSpawnCount": 0,
        "Interval": 77,
        "OnDeathCount": 3,            //注意看这里！！！OnDeathCount意为死亡召唤，这里表示：只要ED_Threat_1死亡，就立刻召唤3个ED_Swarm_Buff！
        "MaxSpawns": 12,              //那么ED_Swarm_Buff又有什么用？往下看！
        "OnDeathKillSpawns": false
      }
    },
  // }

  // ==============================
  // 【附：ED_Swarm_Buff 实体定义】
  // ==============================
  // "EnemiesNoSync": {
    "ED_Swarm_Buff": {
      "Base": "ED_Spider_Grunt_Attacker",
      "Significance": "随机变成虫量、虫攻、虫速、虫抗、进化",
      "DisplayName": "虫群增益器",
      "AttackDamageMultiplier": 0,
      "HealthRaw": 5000,
      "Heal": 0,
      "Scale": 0,
      "ShowHealthBar": false,
      "Resistances": {...},
      "Temperature": {...},
      "Movement": {...}, 
      "CustomVeterans": {
        "虫量": 1
        "虫速": 1
        "虫攻": 1
        "虫抗": 1
        "进化": 1   //这里表示，ED_Swarm_Buff将会随机突变为“虫量/虫速/虫攻/虫抗/进化”中的其中一个，机会均等（权重全都是1，实际代码不是1，而是更复杂的式子，这里简化为1方便教学）
    }              //显然，由于我们在这里指定了ED_Swarm_Buff会突变为“虫量/虫速/虫攻/虫抗/进化”，因此我们要对“虫量/虫速/虫攻/虫抗/进化”全部进行定义，如下
  }
    //以下是【虫量】的定义
      "虫量": {
      "Base": "ED_Spider_Grunt_Attacker",
      "DisplayName": "虫量增益",
      "AttackDamageMultiplier": 0,
      "HealthRaw": 5000,
      "Heal": -10000,     //依旧是立刻死亡
      "Scale": 0,
      "ShowHealthBar": false,
      "Resistances": {...},
      "Temperature": {...},
      "Movement": {...}
    },
  }

    //到这里，就已经和上面的闭环了，立刻死亡的“虫量”实体，将会被计入【虫量总数】变量，而实际的【虫量加成】=【虫量总数】-【虫量已锁定】
    //至于虫攻监视、虫速监视、虫抗监视、蜂拥寄生、共生战士等等一切会随着循环归零的进化相关属性，依旧像“虫量”那样补齐一个立刻死亡的实体定义，整个系统就大功告成了
`,explanation:["【虫量总数】并非直接来自玩家击杀或资源，而是统计特殊标记怪‘ED_Threat_Count’的死亡次数","每当【实际威胁值】达到预设阈值（5/10/20/35），WaveSpawners 就会生成一次 ED_Threat_Count","该标记怪出生即死，其死亡事件被 EnemiesKilled 捕获，使【虫量总数】+1","通过 LockFloat 在‘威胁循环次数’变化时锁定旧值，【虫量监视】= 新总数 - 旧锁定值，即为本轮新增进化层数","最终，【虫量监视】值线性放大 EnemyCountModifier，实现虫群数量倍率提升（基础3倍 + 每层+1倍，上限6倍）","其他进化方向（虫攻、虫速、虫抗、蜂拥寄生等）均采用相同结构：专属标记怪 + EnemiesKilled 计数 + LockFloat 差值"]},{title:"威胁值系统（三）--威胁值归零（每次循环时）召唤无畏",description:"威胁值循环归零时，召唤无畏异虫。但需要保证，威胁值在50附近反复横跳时，不能重复召唤无畏，避免破坏游戏平衡",code:`

  // ==============================
  // 【第六步】高威胁检测 → 触发无畏生成
  // ==============================

  // 在 WaveSpawners 中定义：
    {
      "Enabled": {
        "Mutate": "And",
        "A": {
          "Mutate": "DuringMission",
          "StartingAt": 30           //任务开始30秒后启用
        },
        "B": {
          "Mutate": "TriggerOnChange",
          "RiseOnly": true,           //只在循环次数增加时触发，防止循环次数来回蹦迪，导致额外生成无畏
          "In": {
            "Var": "威胁循环次数"      //检测到威胁循环次数变化→等效于威胁值从50跨越到51→归零
          }                           //这里呼应了前面的代码中，为何50威胁值对应生成的是空白，因为作者不想让威胁值刚好50时召唤无畏，而是在威胁值归零时召唤
        },
        "C": {
          "Mutate": "IfFloat",
          "Value": {
            "Mutate": "EnemyCount",
            "EDs": [
              "ED_Spider_Tank_Boss",
              "ED_Spider_Boss_Heavy",
              "ED_Spider_Boss_TwinA",
              "ED_Spider_Boss_TwinB"    
            ]
          },
          "==": 0,
          "Then": true,              //只在场上不存在无畏boss时生成无畏，防止循环次数来回蹦迪，多次生成一堆无畏
          "Else": false
        }
      },
      "Enemies": [
        "ED_Threat_5"                //归零时立刻召唤"ED_Threat_5"实体
      ],
      "Interval": 0,
      "Difficulty": 1,
      "Distance": 5000,
      "Locations": 1,
      "SpawnOnEnable": true,
      "PauseOnDisable": true
    },
    
  // ==============================
  // 【第七步】定义ED_Threat_5实体
  // ==============================

"EnemiesNoSync": {
    "ED_Threat_5": {
      "Base": "ED_Spider_Grunt_Attacker",
      "DisplayName": "一级威胁触发",
      "AttackDamageMultiplier": 0,
      "HealthRaw": 5000,
      "Heal": -10000,       // Heal值为-10000，该实体出生就立刻死亡
      "Scale": 0,
      "ShowHealthBar": false,
      "Resistances": {...},
      "Temperature": {...},
      "Movement": {...},   
      "Spawner": {
        "ED": "无畏选择器",
        "OnSpawnDelay": 0,
        "OnSpawnCount": 0,
        "IntervalSpawnCount": 0,
        "Interval": 77,
        "OnDeathCount": 3,          //死亡时召唤3个无畏选择器（这里填3就是召唤3个无畏，填5就是召唤5个无畏）
        "MaxSpawns": 12,              
        "OnDeathKillSpawns": false
      }
    },
    "无畏选择器": {
      "Base": "ED_Spider_Tank_Boss",
      "Significance": "变成众多无畏的其中一个",
      "DisplayName": "无畏选择器",
      "CustomVeterans": {
        "ED_Spider_Tank_Boss": 0.25,
        "ED_Spider_Boss_Heavy": 0.25,
        "ED_Spider_Boss_TwinA": 0.25,
        "ED_Spider_Boss_TwinB": 0.25  //这里四种无畏，无畏选择器会随机变成其中一个，机会均等都是25%（全部填1也是一样的，等效25%）
      }
    },

// 这样，威胁值系统的全部工程（不含消息系统）就全部完成了！
//=========
// 这里再补充个【威胁值系统】完整逻辑链条（不含消息系统）：

【玩家行为：击杀敌人 / 挖掘矿物 / 上交资源】 ↓
【各类行为按权重折算为【威胁标记】】 ↓
【所有标记求和 → 得到【总威胁值】】 ↓
【总威胁值 ÷ 51 → 【威胁循环次数】（整数归档）】
【总威胁值 - 51*【威胁循环次数】 → 【实际威胁值】（0～50，当前段进度）】 ↓
┌─【实际威胁值】 ≥ 5 → 【生成标记怪：ED_Threat_1】
├─≥ 10（且未达20）→ 再次生成 ED_Threat_2
├─≥ 20（且未达35）→ 再次生成 ED_Threat_3
└─≥ 35（且未达51）→ 再次生成 ED_Threat_4 ↓
【ED_Threat_1/2/3/4 出生即死（隐藏实体）】 → 【死亡召唤 ED_Swarm_Buff】↓
【ED_Swarm_Buff 出生即死（隐藏实体）】 → 【死亡召唤 虫量/虫速...等实体】
【EnemiesKilled 统计 【虫量/虫速...等实体】 死亡次数 → 【虫量/虫速...等进化数值总数】+1】 ↓
【LockFloat 在【威胁循环次数】变化时锁定旧总数】 ↓
【虫量监视 = 当前总数 - 已锁定值（本轮新增进化层数）】 ↓
┌─虫量监视 = 0 → 虫群数量 ×3（基础）
├─= 1 → ×4
├─= 2 → ×5
├─= 3 → ×6
└─= 4 → ×6（已达上限） ↓
【EnemyCountModifier 实时应用至所有波次生成逻辑】 ↓
【游戏表现：虫潮密度显著提升，小怪如潮水般涌来】 ↓
【若威胁循环次数 ≥ 1 且场上无Boss】 → → 再次生成 ED_Threat_5 → → ED_Threat_5立即死亡 → 死亡生成 【无畏选择器】 ↓
【无畏选择器】 → 随机突变为 【无畏、双子、巢主】
【无畏降临 → 全队高压战斗】 ↓
┌─威胁值清零 
└─所有虫群进化清零↓
【虫群回归基础强度，团队获得喘息窗口】 ↓
【后续威胁重置后继续增长】 ↓
【新一轮资源/击杀 → 威胁重新累积 → 进化重启】`,explanation:["当‘威胁循环次数’增加时（即威胁值跨过51的整数倍）且场上无Boss时，系统生成（ED_Threat_5）--这样确保无畏不会反复生成","ED_Threat_5 立刻死亡，死亡生成 【无畏选择器】 ","【无畏选择器】 随机变成 四种无畏中的一个（通过CustomVeterans字段实现）"]}],th=[{title:"命名规范",description:"使用有意义的名称，建议使用中文描述变量用途",good:`"当前威胁等级"
"是否高压状态"
"冰焰等级"
"时间停止经过秒数"`,bad:`"var1"
"x"
"flag"
"temp"`},{title:"模块化设计",description:"将相关变量组织在一起，形成完整的功能模块",example:`// 时间停止模块
"时间停止死亡时间点"
"时间停止经过秒数"
"是否时间停止中"
"持续时间倍率"

// 冰焰模块
"冰焰等级"
"冰焰基础持续时间"
"冰焰冷却时间"
"是否冰焰激活中"
"是否冰焰冷却中"`},{title:"使用Watch调试",description:"开发时将Watch设为true，在控制台观察变量变化",tip:"💡 正式发布时建议关闭Watch以提高性能"},{title:"避免循环依赖",description:"确保变量之间不会形成循环引用",warning:`⚠️ 错误示例:
变量A依赖变量B
变量B依赖变量C
变量C又依赖变量A

这会导致错误！`},{title:"利用LockFloat创建快照",description:"使用LockFloat在特定时刻'冻结'变量值",examples:["记录副任务完成时的击杀数","记录首次触发时间","记录每次进化时的基准值"]}],ah=[{title:"Vars的本质",content:"在Vars里面自定义的变量，是可以用规定的字段格式直接替代数值里的数字的。本质上就是把某个数字设为x，然后我们再在Vars模块里去定义x被什么因素决定。"},{title:"不支持Vars的字段",content:"游戏里的某些值是不支持替换成Vars的。目前测试发现所有敌人的heal值不支持将Vars填进去，游戏会报错。Heal支持动态改变，但不支持将Vars填进去。还有哪些不支持呢？作者现在也不知道，需要大家自行测试。"},{title:"变量类型",content:"Float（浮点数）用于数值计算，Boolean（布尔值）用于条件判断，String（字符串）用于Select选择。选择正确的类型很重要。"},{title:"性能考虑",content:"复杂的Vars计算每帧都会执行，过多的嵌套可能会影响性能。建议将复杂计算拆分成多个中间变量，并使用Watch调试用完后关闭。"}];function lh(){const[A,z]=I.useState(new Set(["基础变量定义"])),[N,f]=I.useState(new Set),[j,M]=I.useState("examples"),v=m=>{const g=new Set(A);g.has(m)?g.delete(m):g.add(m),z(g)},V=m=>{const g=new Set(N);g.has(m)?g.delete(m):g.add(m),f(g)};return s.jsx("section",{"code-path":"src\\sections\\VarsSection.tsx:32:5",id:"vars",className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:33:7",className:"max-w-6xl mx-auto",children:[s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:35:9",className:"mb-12",children:[s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:36:11",className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:37:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:s.jsx(Uf,{"code-path":"src\\sections\\VarsSection.tsx:38:15",className:"w-5 h-5 text-[#ffd700]"})}),s.jsx("h2",{"code-path":"src\\sections\\VarsSection.tsx:40:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"Vars 模块"})]}),s.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:44:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"变量系统。在Vars里面自定义的变量，可以用规定的字段格式直接替代数值里的数字。 本质上就是把某个数字设为x，然后我们再在Vars模块里去定义x被什么因素决定。"})]}),s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:51:9",className:"mb-8 p-4 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-xl",children:s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:52:11",className:"flex items-start gap-3",children:[s.jsx(Su,{"code-path":"src\\sections\\VarsSection.tsx:53:13",className:"w-5 h-5 text-[#ffd700] flex-shrink-0 mt-0.5"}),s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:54:13",children:[s.jsx("h4",{"code-path":"src\\sections\\VarsSection.tsx:55:15",className:"font-semibold text-[#ffd700] mb-1",children:"重要提示"}),s.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:56:15",className:"text-[#8b949e] text-sm",children:"游戏里的某些值是不支持替换成Vars的。目前测试发现所有敌人的heal值不支持将Vars填进去，游戏会报错。 Heal支持动态改变，但不支持将Vars填进去。还有哪些不支持呢？作者现在也不知道，需要大家自行测试。"})]})]})}),s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:65:9",className:"flex flex-wrap gap-2 mb-8",children:[{id:"examples",label:"基础示例",icon:Uf},{id:"mechanisms",label:"游戏机制",icon:Mu},{id:"practices",label:"最佳实践",icon:yu},{id:"notes",label:"注意事项",icon:Su}].map(m=>s.jsxs("button",{"code-path":"src\\sections\\VarsSection.tsx:72:13",onClick:()=>M(m.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${j===m.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[s.jsx(m.icon,{"code-path":"src\\sections\\VarsSection.tsx:81:15",className:"w-4 h-4"}),m.label]},m.id))}),j==="examples"&&s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:89:11",className:"space-y-4",children:P1.map(m=>{const g=A.has(m.title);return s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:94:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[s.jsxs("button",{"code-path":"src\\sections\\VarsSection.tsx:98:19",onClick:()=>v(m.title),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:102:21",children:[s.jsx("h3",{"code-path":"src\\sections\\VarsSection.tsx:103:23",className:"text-lg font-semibold text-[#e6edf3]",children:m.title}),s.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:104:23",className:"text-sm text-[#8b949e] mt-1",children:m.description})]}),g?s.jsx(At,{"code-path":"src\\sections\\VarsSection.tsx:107:23",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\VarsSection.tsx:109:23",className:"w-5 h-5 text-[#8b949e]"})]}),g&&s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:114:21",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:115:23",className:"pt-4 space-y-4",children:[s.jsx(bt,{"code-path":"src\\sections\\VarsSection.tsx:116:25",code:m.code}),s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:117:25",className:"p-4 bg-[#0d1117] rounded-lg",children:[s.jsx("h4",{"code-path":"src\\sections\\VarsSection.tsx:118:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"代码解析"}),s.jsx("ul",{"code-path":"src\\sections\\VarsSection.tsx:119:27",className:"space-y-1 text-sm text-[#8b949e]",children:m.explanation.map((k,H)=>s.jsxs("li",{"code-path":"src\\sections\\VarsSection.tsx:121:31",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:122:33",className:"text-[#ffd700]",children:"•"}),k]},H))})]})]})})]},m.title)})}),j==="mechanisms"&&s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:139:11",className:"space-y-4",children:eh.map(m=>{const g=N.has(m.title);return s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:144:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[s.jsxs("button",{"code-path":"src\\sections\\VarsSection.tsx:148:19",onClick:()=>V(m.title),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:152:21",children:[s.jsx("h3",{"code-path":"src\\sections\\VarsSection.tsx:153:23",className:"text-lg font-semibold text-[#e6edf3]",children:m.title}),s.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:154:23",className:"text-sm text-[#8b949e] mt-1",children:m.description})]}),g?s.jsx(At,{"code-path":"src\\sections\\VarsSection.tsx:157:23",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\VarsSection.tsx:159:23",className:"w-5 h-5 text-[#8b949e]"})]}),g&&s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:164:21",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:165:23",className:"pt-4 space-y-4",children:[s.jsx(bt,{"code-path":"src\\sections\\VarsSection.tsx:166:25",code:m.code}),s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:167:25",className:"p-4 bg-[#0d1117] rounded-lg",children:[s.jsx("h4",{"code-path":"src\\sections\\VarsSection.tsx:168:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"实现原理"}),s.jsx("ul",{"code-path":"src\\sections\\VarsSection.tsx:169:27",className:"space-y-1 text-sm text-[#8b949e]",children:m.explanation.map((k,H)=>s.jsxs("li",{"code-path":"src\\sections\\VarsSection.tsx:171:31",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:172:33",className:"text-[#ffd700]",children:"•"}),k]},H))})]})]})})]},m.title)})}),j==="practices"&&s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:189:11",className:"space-y-6",children:th.map((m,g)=>s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:191:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-6",children:[s.jsx("h3",{"code-path":"src\\sections\\VarsSection.tsx:192:17",className:"text-lg font-semibold text-[#e6edf3] mb-3",children:m.title}),s.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:193:17",className:"text-[#8b949e] mb-4",children:m.description}),"good"in m&&s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:196:19",className:"grid md:grid-cols-2 gap-4",children:[s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:197:21",className:"p-4 bg-[#0d1117] rounded-lg border border-[#238636]/30",children:[s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:198:23",className:"flex items-center gap-2 mb-2",children:[s.jsx(yu,{"code-path":"src\\sections\\VarsSection.tsx:199:25",className:"w-4 h-4 text-[#238636]"}),s.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:200:25",className:"text-sm font-medium text-[#238636]",children:"推荐"})]}),s.jsx("pre",{"code-path":"src\\sections\\VarsSection.tsx:202:23",className:"text-sm text-[#8b949e] whitespace-pre-wrap",children:m.good})]}),"bad"in m&&s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:205:23",className:"p-4 bg-[#0d1117] rounded-lg border border-[#da3633]/30",children:[s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:206:25",className:"flex items-center gap-2 mb-2",children:[s.jsx(Qf,{"code-path":"src\\sections\\VarsSection.tsx:207:27",className:"w-4 h-4 text-[#da3633]"}),s.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:208:27",className:"text-sm font-medium text-[#da3633]",children:"不推荐"})]}),s.jsx("pre",{"code-path":"src\\sections\\VarsSection.tsx:210:25",className:"text-sm text-[#8b949e] whitespace-pre-wrap",children:m.bad})]})]}),"example"in m&&s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:217:19",className:"p-4 bg-[#0d1117] rounded-lg",children:s.jsx("pre",{"code-path":"src\\sections\\VarsSection.tsx:218:21",className:"text-sm text-[#8b949e] whitespace-pre-wrap",children:m.example})}),"tip"in m&&s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:223:19",className:"p-3 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg",children:s.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:224:21",className:"text-sm text-[#ffd700]",children:m.tip})}),"warning"in m&&s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:229:19",className:"p-3 bg-[#da3633]/5 border border-[#da3633]/20 rounded-lg",children:s.jsx("pre",{"code-path":"src\\sections\\VarsSection.tsx:230:21",className:"text-sm text-[#da3633] whitespace-pre-wrap",children:m.warning})}),"examples"in m&&s.jsx("ul",{"code-path":"src\\sections\\VarsSection.tsx:235:19",className:"space-y-2",children:m.examples?.map((k,H)=>s.jsxs("li",{"code-path":"src\\sections\\VarsSection.tsx:237:23",className:"flex items-start gap-2 text-sm text-[#8b949e]",children:[s.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:238:25",className:"text-[#ffd700]",children:"•"}),k]},H))})]},g))}),j==="notes"&&s.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:251:11",className:"space-y-4",children:ah.map((m,g)=>s.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:253:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[s.jsx("h3",{"code-path":"src\\sections\\VarsSection.tsx:257:17",className:"text-lg font-semibold text-[#ffd700] mb-2",children:m.title}),s.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:258:17",className:"text-[#8b949e]",children:m.content})]},g))})]})})}const nh=[{name:"Game",color:"#FFFFFF",description:"游戏消息（白色）"},{name:"Normal",color:"#808080",description:"普通消息（灰色）"},{name:"Delux",color:"#FFD700",description:"支持者消息（金色）"},{name:"Developer",color:"#00FF00",description:"开发者消息（绿色）"},{name:"Streamer",color:"#0080FF",description:"主播消息（蓝色）"},{name:"Modder",color:"#FF69B4",description:"Modder消息（跟随玩家实际颜色，且会显示：[启用mod]）"}],ih=[{name:"Send",type:"布尔值(Boolean)或带Mutate的表达式",description:"发送条件。当此值为true时发送消息。",required:!0},{name:"SendOnChange",type:"布尔值(Boolean)",description:"当另一个值发生变化时发送消息（例如：倒计时性质的消息）。",defaultValue:"false"},{name:"Type",type:"字符串(String)",description:"消息类型，决定消息颜色。",defaultValue:"Game"},{name:"Sender",type:"字符串(String)",description:"发送人名称，显示在消息前面。",defaultValue:"CD2"},{name:"Message",type:"字符串(String)或带Mutate的表达式",description:"要发送的消息内容。",required:!0}],sh=[{title:"倒计时消息",description:"使用Countdown Mutator实现倒计时，每秒更新显示。",code:`{
  "Messages": [
    {
      "Send": { "Mutate": "DuringMission", "StartingAt": 0 },
      "SendOnChange": true,
      "Type": "Developer",
      "Sender": "倒计时",
      "Message": {
        "Mutate": "Join",
        "Values": [
          "距离开始还有：",
          {
            "Mutate": "Int2String",
            "Value": {
              "Mutate": "Countdown",
              "Start": 10,
              "Enable": true
            }
          },
          "秒"
        ]
      }
    }
  ]
}`,explanation:["Countdown: 从Start值开始倒计时","SendOnChange: true - 数值变化时重新发送","Int2String: 将数字转换为字符串","Join: 将多个字符串拼接在一起","实现每秒更新的倒计时显示"]},{title:"动态数值消息",description:"显示当前敌人数量和威胁等级。",code:`{
  "Messages": [
    {
      "Send": {
        "Mutate": "TriggerOnChange",
        "In": { "Mutate": "EnemyCount" }
      },
      "Type": "Developer",
      "Sender": "状态监控",
      "Message": {
        "Mutate": "Join",
        "Values": [
          "当前敌人数量：",
          {
            "Mutate": "Int2String",
            "Value": { "Mutate": "EnemyCount" }
          },
          "，威胁等级：",
          {
            "Mutate": "Int2String",
            "Value": { "Var": "实际威胁值" }
          }
        ]
      }
    }
  ]
}`,explanation:["TriggerOnChange: 敌人数量变化时触发","EnemyCount: 获取当前敌人数量","Var: 引用自定义变量","实时显示游戏状态变化"]},{title:"条件分支消息",description:"根据条件发送不同的消息内容。",code:`{
  "Messages": [
    {
      "Send": { "Mutate": "DuringGenericSwarm" },
      "Type": "Delux",
      "Sender": "虫潮警告",
      "Message": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "EnemyCount" },
        ">": 100,
        "Then": "⚠️ 高压虫潮！敌人数量超过100！",
        "Else": "🐛 普通虫潮来袭，做好准备！"
      }
    }
  ]
}`,explanation:["DuringGenericSwarm: 宣告潮期间发送","IfFloat: 根据敌人数量选择不同消息","> 100: 高压警告","<= 100: 普通提示"]},{title:"击杀反馈消息",description:"当特定敌人被击杀时发送反馈消息。",code:`{
  "Messages": [
    {
      "Send": {
        "Mutate": "TriggerOnChange",
        "RiseOnly": true,
        "In": {
          "Mutate": "EnemiesKilled",
          "ED": "ED_Spider_Tank_Boss"
        }
      },
      "Type": "Delux",
      "Sender": "BOSS击杀",
      "Message": "🎉 恭喜！无畏异虫已被消灭！"
    }
  ]
}`,explanation:["TriggerOnChange RiseOnly: 仅在值上升时触发（击杀增加）","EnemiesKilled ED: 监视特定敌人的击杀数","当无畏被击杀时发送祝贺消息"]},{title:"任务阶段消息",description:"在任务不同阶段发送提示消息。",code:`{
  "Messages": [
    {
      "Send": {
        "Mutate": "TriggerOnce",
        "In": { "Mutate": "DuringMission", "StartingAt": 300 }
      },
      "Type": "Streamer",
      "Sender": "任务进度",
      "Message": "⏱️ 任务已开始5分钟，难度即将提升！"
    },
    {
      "Send": {
        "Mutate": "TriggerOnce",
        "In": { "Mutate": "DuringMission", "StartingAt": 600 }
      },
      "Type": "Streamer",
      "Sender": "任务进度",
      "Message": "⏱️ 任务已开始10分钟，进入高压阶段！"
    }
  ]
}`,explanation:["TriggerOnce: 只触发一次","DuringMission StartingAt: 在指定时间触发","在5分钟和10分钟时分别发送进度提醒"]},{title:"随机消息",description:"从多个消息中随机选择一条发送。",code:`{
  "Messages": [
    {
      "Send": {
        "Mutate": "TriggerOnChange",
        "RiseOnly": true,
        "In": { "Mutate": "DwarvesDown" }
      },
      "Type": "Normal",
      "Sender": "系统",
      "Message": {
        "Mutate": "RandomChoice",
        "Choices": [
          "有队友倒地了，快救援！",
          "注意！队友需要支援！",
          "救援信号 detected！",
          "别让他等太久，快去拉人！"
        ]
      }
    }
  ]
}`,explanation:["RandomChoice: 从选项中随机选择","DwarvesDown: 有队友倒地时触发","每次倒地随机显示不同的救援提示"]}],ch=[{name:"状态监控模板",description:"实时监控并显示游戏状态",code:`{
  "Messages": [
    {
      "SendOnChange": true,
      "Type": "Developer",
      "Sender": "监控",
      "Message": {
        "Mutate": "Join",
        "Values": [
          "敌人:", { "Mutate": "Int2String", "Value": { "Mutate": "EnemyCount" } },
          " 击杀:", { "Mutate": "Int2String", "Value": { "Mutate": "EnemiesKilled" } },
          " 威胁:", { "Mutate": "Int2String", "Value": { "Var": "实际威胁值" } }
        ]
      }
    }
  ]
}`},{name:"警告提示模板",description:"高压状态下的警告消息",code:`{
  "Messages": [
    {
      "Send": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "EnemyCount" },
        ">": 150,
        "Then": true,
        "Else": false
      },
      "Type": "Warning",
      "Sender": "⚠️ 警告",
      "Message": "敌人数量过多！请立即清理！"
    }
  ]
}`},{name:"阶段切换模板",description:"任务阶段切换时的提示",code:`{
  "Messages": [
    {
      "Send": {
        "Mutate": "TriggerOnChange",
        "In": { "Mutate": "ByRefineryPhase" }
      },
      "Type": "Delux",
      "Sender": "炼油阶段",
      "Message": "阶段发生变化！"
    }
  ]
}`}],uh=[{name:"触发-响应模式",description:"当某事件发生时发送消息",pattern:`{
  "Send": {
    "Mutate": "TriggerOnChange",
    "In": { "Mutate": "[事件源]" }
  },
  "Type": "[消息类型]",
  "Sender": "[发送者]",
  "Message": "[消息内容]"
}`},{name:"条件判断模式",description:"根据条件发送不同消息",pattern:`{
  "Send": { "Mutate": "[条件]" },
  "Type": "[消息类型]",
  "Sender": "[发送者]",
  "Message": {
    "Mutate": "IfFloat",
    "Value": { "Mutate": "[判断值]" },
    "[运算符]": [阈值],
    "Then": "[真消息]",
    "Else": "[假消息]"
  }
}`},{name:"动态数值模式",description:"显示动态变化的数值",pattern:`{
  "SendOnChange": true,
  "Type": "[消息类型]",
  "Sender": "[发送者]",
  "Message": {
    "Mutate": "Join",
    "Values": [
      "[前缀]",
      { "Mutate": "Int2String", "Value": { "Mutate": "[数值源]" } },
      "[后缀]"
    ]
  }
}`}];function oh(){const[A,z]=I.useState(new Set(["倒计时消息"])),[N,f]=I.useState("types"),j=M=>{const v=new Set(A);v.has(M)?v.delete(M):v.add(M),z(v)};return s.jsx("section",{"code-path":"src\\sections\\MessagesSection.tsx:21:5",id:"messages",className:"py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]",children:s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:22:7",className:"max-w-6xl mx-auto",children:[s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:24:9",className:"mb-12",children:[s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:25:11",className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:26:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:s.jsx(qf,{"code-path":"src\\sections\\MessagesSection.tsx:27:15",className:"w-5 h-5 text-[#ffd700]"})}),s.jsx("h2",{"code-path":"src\\sections\\MessagesSection.tsx:29:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"Messages 模块"})]}),s.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:33:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"消息系统。用于在游戏中发送各种提示消息，支持动态数值、条件分支、倒计时等功能。"})]}),s.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:39:9",className:"flex flex-wrap gap-2 mb-8",children:[{id:"types",label:"消息类型",icon:Jf},{id:"fields",label:"字段说明",icon:d1},{id:"examples",label:"实战示例",icon:qf},{id:"templates",label:"常用模板",icon:M1}].map(M=>s.jsxs("button",{"code-path":"src\\sections\\MessagesSection.tsx:46:13",onClick:()=>f(M.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${N===M.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[s.jsx(M.icon,{"code-path":"src\\sections\\MessagesSection.tsx:55:15",className:"w-4 h-4"}),M.label]},M.id))}),N==="types"&&s.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:63:11",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:nh.map(M=>s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:65:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#ffd700]/30 transition-colors",children:[s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:69:17",className:"flex items-center gap-3 mb-3",children:[s.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:70:19",className:"w-6 h-6 rounded",style:{backgroundColor:M.color}}),s.jsx("code",{"code-path":"src\\sections\\MessagesSection.tsx:74:19",className:"text-[#a5d6ff] font-mono",children:M.name})]}),s.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:76:17",className:"text-[#8b949e] text-sm",children:M.description})]},M.name))}),N==="fields"&&s.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:84:11",className:"space-y-4",children:ih.map(M=>s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:86:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:90:17",className:"flex items-center gap-3 mb-3",children:[s.jsx("code",{"code-path":"src\\sections\\MessagesSection.tsx:91:19",className:"px-3 py-1.5 bg-[#21262d] text-[#a5d6ff] rounded-lg font-mono text-sm",children:M.name}),M.required&&s.jsx("span",{"code-path":"src\\sections\\MessagesSection.tsx:95:21",className:"text-xs px-2 py-0.5 bg-[#ffd700]/20 text-[#ffd700] rounded",children:"必需"}),M.defaultValue&&s.jsxs("span",{"code-path":"src\\sections\\MessagesSection.tsx:100:21",className:"text-xs text-[#8b949e]",children:["默认: ",M.defaultValue]})]}),s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:105:17",className:"mb-2",children:[s.jsx("span",{"code-path":"src\\sections\\MessagesSection.tsx:106:19",className:"text-sm text-[#ffd700]",children:"类型: "}),s.jsx("span",{"code-path":"src\\sections\\MessagesSection.tsx:107:19",className:"text-sm text-[#8b949e]",children:M.type})]}),s.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:109:17",className:"text-[#8b949e]",children:M.description})]},M.name))}),N==="examples"&&s.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:117:11",className:"space-y-4",children:sh.map(M=>{const v=A.has(M.title);return s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:122:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[s.jsxs("button",{"code-path":"src\\sections\\MessagesSection.tsx:126:19",onClick:()=>j(M.title),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:130:21",children:[s.jsx("h3",{"code-path":"src\\sections\\MessagesSection.tsx:131:23",className:"text-lg font-semibold text-[#e6edf3]",children:M.title}),s.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:132:23",className:"text-sm text-[#8b949e] mt-1",children:M.description})]}),v?s.jsx(At,{"code-path":"src\\sections\\MessagesSection.tsx:135:23",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\MessagesSection.tsx:137:23",className:"w-5 h-5 text-[#8b949e]"})]}),v&&s.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:142:21",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:143:23",className:"pt-4 space-y-4",children:[s.jsx(bt,{"code-path":"src\\sections\\MessagesSection.tsx:144:25",code:M.code}),s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:145:25",className:"p-4 bg-[#0d1117] rounded-lg",children:[s.jsx("h4",{"code-path":"src\\sections\\MessagesSection.tsx:146:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"代码解析"}),s.jsx("ul",{"code-path":"src\\sections\\MessagesSection.tsx:147:27",className:"space-y-1 text-sm text-[#8b949e]",children:M.explanation.map((V,m)=>s.jsxs("li",{"code-path":"src\\sections\\MessagesSection.tsx:149:31",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\MessagesSection.tsx:150:33",className:"text-[#ffd700]",children:"•"}),V]},m))})]})]})})]},M.title)})}),N==="templates"&&s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:167:11",className:"space-y-8",children:[s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:169:13",children:[s.jsx("h3",{"code-path":"src\\sections\\MessagesSection.tsx:170:15",className:"text-lg font-semibold text-[#e6edf3] mb-4",children:"常用模板"}),s.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:171:15",className:"space-y-4",children:ch.map((M,v)=>s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:173:19",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[s.jsx("h4",{"code-path":"src\\sections\\MessagesSection.tsx:174:21",className:"text-[#ffd700] font-medium mb-2",children:M.name}),s.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:175:21",className:"text-[#8b949e] text-sm mb-4",children:M.description}),s.jsx(bt,{"code-path":"src\\sections\\MessagesSection.tsx:176:21",code:M.code})]},v))})]}),s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:183:13",children:[s.jsx("h3",{"code-path":"src\\sections\\MessagesSection.tsx:184:15",className:"text-lg font-semibold text-[#e6edf3] mb-4",children:"常用模式"}),s.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:185:15",className:"space-y-4",children:uh.map((M,v)=>s.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:187:19",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[s.jsx("h4",{"code-path":"src\\sections\\MessagesSection.tsx:188:21",className:"text-[#ffd700] font-medium mb-2",children:M.name}),s.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:189:21",className:"text-[#8b949e] text-sm mb-4",children:M.description}),s.jsx(bt,{"code-path":"src\\sections\\MessagesSection.tsx:190:21",code:M.pattern})]},v))})]})]})]})})}const Yf=[{id:1,title:"基础变量定义",difficulty:1,difficultyLabel:"⭐ 入门",description:"创建一个名为'当前波次'的变量，使用ByTime追踪任务经过的时间，每300秒（5分钟）增加1点波次数。",hint:"使用Floor和Divide组合，将时间除以300后向下取整。",answer:`"Vars": {
  "当前波次": {
    "Type": "Float",
    "Value": {
      "Mutate": "Floor",
      "Value": {
        "Mutate": "Divide",
        "A": { "Mutate": "ByTime" },
        "B": 300
      }
    },
    "Watch": true
  }
}`,explanation:["ByTime: 获取当前游戏时间（秒）","Divide: 将时间除以300，得到理论波次数","Floor: 向下取整，得到整数波次","Watch: true 用于调试时观察变量变化"]},{id:2,title:"简单的条件判断",difficulty:1,difficultyLabel:"⭐ 入门",description:"创建一个布尔变量'是否需要支援'，当场上敌人数量超过80时返回true，否则返回false。",hint:"使用IfFloat判断EnemyCount是否大于80。",answer:`"Vars": {
  "是否需要支援": {
    "Type": "Boolean",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Mutate": "EnemyCount" },
      ">": 80,
      "Then": true,
      "Else": false
    },
    "Watch": false
  }
}`,explanation:["EnemyCount: 获取当前场上敌人数量","IfFloat: 进行数值比较","> 80: 判断敌人是否超过80","返回布尔值true或false"]},{id:3,title:"基础数学运算",difficulty:1,difficultyLabel:"⭐ 入门",description:"创建一个变量'动态难度'，基础值为1.0，每呼叫1次补给增加0.1。",hint:"使用Add组合基础值和补给次数的倍数。",answer:`"Vars": {
  "动态难度": {
    "Type": "Float",
    "Value": {
      "Mutate": "Add",
      "A": 1.0,
      "B": {
        "Mutate": "Multiply",
        "A": { "Mutate": "ResuppliesCalled" },
        "B": 0.1
      }
    },
    "Watch": false
  }
}`,explanation:["ResuppliesCalled: 获取已呼叫补给次数","Multiply: 补给次数 × 0.1","Add: 基础值1.0 + 补给增益","难度随补给次数线性增长"]},{id:4,title:"Clamp限制数值范围",difficulty:1,difficultyLabel:"⭐ 入门",description:"创建一个变量'动态速度'，基础值为1.0，每击杀10个敌人增加0.05，但最高不超过1.5，最低不低于0.8。",hint:"使用Clamp限制最终值在0.8到1.5之间。",answer:`"Vars": {
  "动态速度": {
    "Type": "Float",
    "Value": {
      "Mutate": "Clamp",
      "Value": {
        "Mutate": "Add",
        "A": 1.0,
        "B": {
          "Mutate": "Multiply",
          "A": {
            "Mutate": "Floor",
            "Value": {
              "Mutate": "Divide",
              "A": { "Mutate": "EnemiesKilled" },
              "B": 10
            }
          },
          "B": 0.05
        }
      },
      "Min": 0.8,
      "Max": 1.5
    },
    "Watch": true
  }
}`,explanation:["EnemiesKilled / 10: 计算10人一组的数量","Floor: 向下取整","Multiply: 组数 × 0.05 = 速度增益","Add: 基础值 + 增益","Clamp: 限制在0.8-1.5之间"]},{id:5,title:"使用ByPlayerCount",difficulty:1,difficultyLabel:"⭐ 入门",description:"创建一个变量'基础虫量'，1人时为100，2人150，3人200，4人250，5人300，6人350。",hint:"使用ByPlayerCount的Values数组设置不同人数对应的值。",answer:`"Vars": {
  "基础虫量": {
    "Type": "Float",
    "Value": {
      "Mutate": "ByPlayerCount",
      "Values": [100, 150, 200, 250, 300, 350]
    },
    "Watch": false
  }
}`,explanation:["ByPlayerCount: 根据玩家数量返回对应值","Values数组: [1人, 2人, 3人, 4人, 5人, 6人]","超过6人使用最后一个值"]},{id:6,title:"消灭任务双子复活机制",difficulty:2,difficultyLabel:"⭐⭐ 简单",description:"在消灭任务中，实现双子的相互复活机制：当其中一个死亡时，10秒后复活另一个。",hint:"使用IfFloat判断场上双子数量，当只剩1个时启用WaveSpawner复活另一个。",answer:`{
  "Enabled": {
    "Mutate": "IfFloat",
    "Value": {
      "Mutate": "EnemyCount",
      "EDs": [
        "ED_Spider_Boss_TwinA",
        "ED_Spider_Boss_TwinB"
      ]
    },
    "==": 1,
    "Then": true,
    "Else": false
  },
  "Enemies": {
    "Mutate": "IfFloat",
    "Value": {
      "Mutate": "EnemyCount",
      "ED": "ED_Spider_Boss_TwinA"
    },
    ">=": 1,
    "Then": ["ED_Spider_Boss_TwinB"],
    "Else": ["ED_Spider_Boss_TwinA"]
  },
  "Interval": 10,
  "Difficulty": 1,
  "Distance": 1000,
  "Locations": 1,
  "PauseOnDisable": true
}`,explanation:["Enabled: 检测场上双子总数是否为1（死了一个）","Enemies: 判断哪个双子还活着，复活另一个","Interval: 10 - 10秒后复活","PauseOnDisable: true - 停止触发时暂停计时","实现双子互相复活的机制"]},{id:7,title:"动态虫潮间隔",difficulty:2,difficultyLabel:"⭐⭐ 简单",description:"创建一个WaveSpawner，基础间隔为180秒，场上每多10个敌人，间隔减少5秒，最低不低于90秒。",hint:"使用Clamp限制最小值，用EnemyCount计算间隔减少量。",answer:`{
  "Enabled": true,
  "Interval": {
    "Mutate": "Clamp",
    "Value": {
      "Mutate": "Subtract",
      "A": 180,
      "B": {
        "Mutate": "Multiply",
        "A": {
          "Mutate": "Floor",
          "Value": {
            "Mutate": "Divide",
            "A": { "Mutate": "EnemyCount" },
            "B": 10
          }
        },
        "B": 5
      }
    },
    "Min": 90,
    "Max": 180
  },
  "Enemies": ["ED_Spider_Grunt", "ED_Spider_Grunt_Guard"],
  "Difficulty": 200,
  "Distance": 1500,
  "Locations": 2
}`,explanation:["EnemyCount / 10: 计算10人一组的数量","Floor: 向下取整得到组数","Multiply: 组数 × 5秒 = 总减少量","Subtract: 基础180秒 - 减少量","Clamp: 限制在90-180秒之间"]},{id:8,title:"任务类型差异化配置",difficulty:2,difficultyLabel:"⭐⭐ 简单",description:"使用ByMissionType创建一个变量，在采矿任务返回2.0，在消灭任务返回3.0，其他任务返回1.5。",hint:"使用ByMissionType设置不同任务类型的返回值。",answer:`"Vars": {
  "任务难度系数": {
    "Type": "Float",
    "Value": {
      "Mutate": "ByMissionType",
      "Default": 1.5,
      "Mining": 2.0,
      "Elimination": 3.0
    },
    "Watch": false
  }
}`,explanation:["ByMissionType: 根据任务类型返回不同值","Default: 1.5 - 默认难度系数","Mining: 2.0 - 采矿任务难度","Elimination: 3.0 - 消灭任务难度","其他任务使用默认值"]},{id:9,title:"TriggerOnce触发器",difficulty:2,difficultyLabel:"⭐⭐ 简单",description:"创建一个WaveSpawner，在副任务完成时触发一次，生成一个春季兔兔作为奖励。",hint:"使用TriggerOnce配合SecondaryFinished检测副任务完成。",answer:`{
  "Enabled": {
    "Mutate": "TriggerOnce",
    "In": { "Mutate": "SecondaryFinished" }
  },
  "Name": "副任务奖励-春季兔兔",
  "Interval": 0,
  "Enemies": ["ED_GreatEggHunt_SpringBunny"],
  "Difficulty": 1,
  "Distance": 500,
  "Locations": 1,
  "SpawnOnEnable": true,
  "Alert": false
}`,explanation:["TriggerOnce: 只触发一次","SecondaryFinished: 检测副任务是否完成","Interval: 0 - 立即生成","SpawnOnEnable: true - 启用时立即生成","实现副任务完成奖励"]},{id:10,title:"随机选择敌人组合",difficulty:2,difficultyLabel:"⭐⭐ 简单",description:"创建一个WaveSpawner，每次从三组敌人中随机选择一组生成：组1（战士+护卫）、组2（禁卫+蛭尾）、组3（小自爆+大自爆）。",hint:"使用RandomChoice的Choices数组设置多组敌人。",answer:`{
  "Enabled": true,
  "Interval": 120,
  "Enemies": {
    "Mutate": "RandomChoice",
    "Choices": [
      ["ED_Spider_Grunt", "ED_Spider_Grunt_Guard"],
      ["ED_Spider_Tank", "ED_Spider_Stinger"],
      ["ED_Spider_Exploder", "ED_Spider_ExploderTank"]
    ]
  },
  "Difficulty": 200,
  "Distance": 1500,
  "Locations": 2
}`,explanation:["RandomChoice: 从Choices中随机选择一组","Choices: 包含三组敌人数组","每次生成时随机选择一组","实现随机敌人组合"]},{id:11,title:"动态虫群倍数（星夜实现）",difficulty:3,difficultyLabel:"⭐⭐⭐ 中等",description:"创建一个动态虫群倍数系统：基础3倍，根据场上无畏数量增加倍数（每只无畏+0.5倍），最高6倍。",hint:"使用EnemyCount检测无畏数量，用Clamp限制最大值。",answer:`"EnemyCountModifier": {
  "Mutate": "Clamp",
  "Value": {
    "Mutate": "Add",
    "A": 3,
    "B": {
      "Mutate": "Multiply",
      "A": {
        "Mutate": "Add",
        "A": {
          "Mutate": "EnemyCount",
          "ED": "ED_Spider_Tank_Boss"
        },
        "B": {
          "Mutate": "EnemyCount",
          "ED": "ED_Spider_Boss_Heavy"
        }
      },
      "B": 0.5
    }
  },
  "Min": 3,
  "Max": 6
}`,explanation:["EnemyCount: 分别获取巢主和暴君的数量","Add: 计算总BOSS数量","Multiply: BOSS数量 × 0.5 = 额外倍数","Add: 基础3倍 + 额外倍数","Clamp: 限制在3-6倍之间"]},{id:12,title:"炼油阶段动态难度",difficulty:3,difficultyLabel:"⭐⭐⭐ 中等",description:"使用ByRefineryPhase实现：着陆和连接管道时虫群倍数为3，连好管子后3.5，管子损坏时2，修好管子恢复3.5。",hint:"使用ByRefineryPhase的不同阶段设置不同的倍数。",answer:`"EnemyCountModifier": {
  "Mutate": "ByRefineryPhase",
  "Default": 3,
  "Landing": 3,
  "ConnectingPipes": 3,
  "PipesConnected": 3.5,
  "Refining": 3.5,
  "RefiningStalled": 2,
  "RefiningComplete": 3.5,
  "RocketLaunched": 5
}`,explanation:["ByRefineryPhase: 根据炼油阶段返回不同值","Landing/ConnectingPipes: 开局阶段3倍","PipesConnected/Refining: 正常炼油3.5倍","RefiningStalled: 管道损坏降至2倍","RefiningComplete: 修好恢复3.5倍","RocketLaunched: 发射时5倍高潮"]},{id:13,title:"墨棱石进度动态难度（采矿任务）",difficulty:3,difficultyLabel:"⭐⭐⭐ 中等",description:"创建一个Difficulty系统：6人时基础1350点，根据玩家挖到的墨棱石数量减少点数，播报潮中根据当前敌人数量减少的点数乘以2。",hint:"参考星夜代码，使用Subtract嵌套多个条件。",answer:`"Difficulty": {
  "Mutate": "Clamp",
  "Value": {
    "Mutate": "Subtract",
    "A": {
      "Mutate": "ByPlayerCount",
      "Values": [600, 750, 900, 1050, 1200, 1350]
    },
    "B": {
      "Mutate": "Add",
      "A": {
        "Mutate": "Multiply",
        "A": { "Mutate": "EnemyCount" },
        "B": {
          "Mutate": "If",
          "Condition": { "Mutate": "DuringGenericSwarm" },
          "Then": 2,
          "Else": 1
        }
      },
      "B": {
        "Mutate": "Multiply",
        "A": {
          "Mutate": "TotalResource",
          "Resource": "Morkite"
        },
        "B": {
          "Mutate": "ByPlayerCount",
          "Values": [1.25, 1.15, 1, 0.95, 0.90, 0.85]
        }
      }
    }
  },
  "Min": 100,
  "Max": 1350
}`,explanation:["ByPlayerCount: 6人时基础1350点","Subtract A: 基础点数 - 各种减量","Subtract B第一部分: 当前敌人数量 × 系数（播报潮中×2）","Subtract B第二部分: 墨棱石数量 × 玩家系数","Clamp: 限制在100-1350之间","实现动态难度平衡"]},{id:14,title:"护送任务阶段检测",difficulty:3,difficultyLabel:"⭐⭐⭐ 中等",description:"使用ByEscortPhase创建一个变量：未拆封时0.5，移动中1.0，加油时2.0，心石阶段3.0，完成时0。",hint:"使用ByEscortPhase的不同阶段设置不同的值。",answer:`"Vars": {
  "护送阶段系数": {
    "Type": "Float",
    "Value": {
      "Mutate": "ByEscortPhase",
      "Default": 0,
      "InGarage": 0.5,
      "Stationary": 0.5,
      "Moving": 1.0,
      "WaitingForFuel": 2.0,
      "FinalEventA": 3.0,
      "FinalEventB": 3.0,
      "FinalEventC": 3.0,
      "FinalEventD": 3.0,
      "Finished": 0
    },
    "Watch": true
  }
}`,explanation:["ByEscortPhase: 根据护送任务阶段返回不同值","InGarage/Stationary: 未拆封/拆封后未发车","Moving: 移动中","WaitingForFuel: 加油阶段","FinalEventA/B/C/D: 心石阶段","Finished: 完成"]},{id:15,title:"设施破坏阶段检测",difficulty:3,difficultyLabel:"⭐⭐⭐ 中等",description:"使用BySaboPhase创建一个变量：骇入阶段1.0，黄盾阶段2.0，开眼阶段3.0，完成时0。",hint:"使用BySaboPhase的不同阶段设置不同的值。",answer:`"Vars": {
  "设施破坏阶段系数": {
    "Type": "Float",
    "Value": {
      "Mutate": "BySaboPhase",
      "Default": 0,
      "Hacking": 1.0,
      "Phase1Vent": 2.0,
      "Phase2Vent": 2.0,
      "Phase3Vent": 2.0,
      "Phase1Eye": 3.0,
      "Phase2Eye": 3.0,
      "Phase3Eye": 3.0,
      "Finished": 0
    },
    "Watch": true
  }
}`,explanation:["BySaboPhase: 根据设施破坏任务阶段返回不同值","Hacking: 骇入阶段","Phase1/2/3Vent: 黄盾阶段","Phase1/2/3Eye: 开眼阶段","Finished: 完成"]},{id:16,title:"蜂拥寄生机制（星夜实现）",difficulty:4,difficultyLabel:"⭐⭐⭐⭐ 困难",description:"实现蜂拥寄生机制：所有虫子死亡时爆出蜂拥，一段进化爆出少量，二段进化爆出更多且移速提升。",hint:"使用Spawner模块，在敌人描述符中配置OnDeathCount。",answer:`{
  "Enemies": {
    "ED_Spider_Grunt": {
      "Base": "ED_Spider_Grunt",
      "Spawner": {
        "ED": "ED_Spider_Swarmer",
        "OnDeathCount": {
          "Mutate": "IfFloat",
          "Value": { "Var": "蜂拥寄生" },
          ">=": 2,
          "Then": {
            "Mutate": "ByPlayerCount",
            "Values": [5, 8, 12, 15]
          },
          "Else": {
            "Mutate": "IfFloat",
            "Value": { "Var": "蜂拥寄生" },
            ">=": 1,
            "Then": {
              "Mutate": "ByPlayerCount",
              "Values": [3, 5, 7, 9]
            },
            "Else": 0
          }
        }
      }
    }
  }
}`,explanation:["Spawner: 在敌人死亡时生成其他敌人","ED: 生成的敌人类型（蜂拥）","OnDeathCount: 死亡时生成的数量","IfFloat嵌套: 判断进化等级",">=2: 二段进化，更多蜂拥",">=1: 一段进化，少量蜂拥","0: 未进化，不生成"]},{id:17,title:"威胁值循环系统",difficulty:4,difficultyLabel:"⭐⭐⭐⭐ 困难",description:"实现威胁值系统：威胁值达到51后归零并重新累积，同时触发虫群进化。需要记录循环次数和当前实际威胁值。",hint:"使用Floor和Divide计算循环次数，用Subtract计算实际威胁值。",answer:`"Vars": {
  "威胁循环次数": {
    "Type": "Float",
    "Value": {
      "Mutate": "Floor",
      "Value": {
        "Mutate": "Divide",
        "A": { "Var": "ThreatValue" },
        "B": 51
      }
    },
    "Watch": false
  },
  "实际威胁值": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Var": "ThreatValue" },
      "B": {
        "Mutate": "Multiply",
        "A": { "Var": "威胁循环次数" },
        "B": 51
      }
    },
    "Watch": true
  }
}`,explanation:["威胁循环次数: 总威胁值 / 51，向下取整","实际威胁值: 总威胁值 - (循环次数 × 51)","实际威胁值范围始终在0-50之间","每次满51就触发一次进化","循环次数表示已触发的进化次数"]},{id:18,title:"多条件触发器组合",difficulty:4,difficultyLabel:"⭐⭐⭐⭐ 困难",description:"创建一个WaveSpawner：任务开始5分钟后激活，仅在非守点期间，且场上敌人少于100时触发，每次触发后有60秒冷却。",hint:"使用And组合多个条件，配合TriggerCooldown实现冷却。",answer:`{
  "Enabled": {
    "Mutate": "TriggerCooldown",
    "N": 60,
    "In": {
      "Mutate": "And",
      "A": {
        "Mutate": "And",
        "A": { "Mutate": "DuringMission", "StartingAt": 300 },
        "B": {
          "Mutate": "Not",
          "A": { "Mutate": "DuringDefend" }
        }
      },
      "B": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "EnemyCount" },
        "<": 100,
        "Then": true,
        "Else": false
      }
    }
  },
  "Interval": 30,
  "Enemies": ["ED_Spider_Grunt", "ED_Spider_Grunt_Guard"],
  "Difficulty": 250,
  "Distance": 1500,
  "Locations": 2
}`,explanation:["TriggerCooldown N=60: 60秒冷却","条件A: DuringMission StartingAt=300 - 5分钟后","条件B: Not DuringDefend - 非守点期间","条件C: EnemyCount < 100 - 敌人少于100","三个条件同时满足时才触发","触发后进入60秒冷却"]},{id:19,title:"TriggerDelay延迟触发",difficulty:4,difficultyLabel:"⭐⭐⭐⭐ 困难",description:"创建一个系统：当队友倒地时，延迟15秒后在玩家附近生成救援干扰敌人（小自爆+捕手蝇）。",hint:"使用TriggerDelay将触发延迟15秒。",answer:`{
  "Enabled": {
    "Mutate": "TriggerDelay",
    "N": 15,
    "In": {
      "Mutate": "TriggerOnChange",
      "RiseOnly": true,
      "In": { "Mutate": "DwarvesDown" }
    }
  },
  "Name": "倒地救援干扰",
  "Interval": 0,
  "Enemies": ["ED_Spider_Exploder", "ED_Grabber"],
  "Difficulty": 150,
  "Distance": 800,
  "Locations": 1,
  "SpawnOnEnable": true,
  "Alert": true
}`,explanation:["TriggerOnChange RiseOnly: 检测倒地人数增加","TriggerDelay N=15: 延迟15秒触发","Interval: 0 - 立即生成","SpawnOnEnable: true - 启用时立即生成","实现延迟救援干扰"]},{id:20,title:"TriggerFixedDuration固定持续时间",difficulty:4,difficultyLabel:"⭐⭐⭐⭐ 困难",description:"创建一个系统：当宣告潮开始时，触发一个持续30秒的增益效果（虫群倍数降低为2倍），30秒后自动恢复。",hint:"使用TriggerFixedDuration保持30秒的激活状态。",answer:`{
  "Enabled": {
    "Mutate": "TriggerFixedDuration",
    "N": 30,
    "In": {
      "Mutate": "TriggerOnChange",
      "RiseOnly": true,
      "In": { "Mutate": "DuringGenericSwarm" }
    }
  },
  "Name": "宣告潮增益",
  "Interval": 0,
  "Enemies": ["ED_Buff_Trigger"],
  "Difficulty": 1,
  "Distance": 1,
  "Locations": 1,
  "SpawnOnEnable": true
}`,explanation:["TriggerOnChange RiseOnly: 检测宣告潮开始","TriggerFixedDuration N=30: 保持30秒激活状态","即使宣告潮提前结束，增益也会持续30秒","用于实现固定持续时间的增益效果"]},{id:21,title:"冰焰完整系统实现",difficulty:5,difficultyLabel:"⭐⭐⭐⭐⭐ 专家",description:"实现完整的冰焰系统：呼叫补给触发，有持续时间和冷却时间，等级越高持续越久冷却越短，需要追踪触发时间、判断是否激活中、计算剩余冷却。",hint:"参考星夜代码，使用LockFloat记录触发时间，多个变量协同工作。",answer:`"Vars": {
  "冰焰死亡时间点": {
    "Type": "Float",
    "Value": {
      "Mutate": "LockFloat",
      "Update": {
        "Mutate": "TriggerOnChange",
        "In": { "Mutate": "EnemiesKilled", "ED": "ED_Ice_Fire_Trigger" }
      },
      "Value": { "Mutate": "ByTime" }
    },
    "Watch": false
  },
  "冰焰经过秒数": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Mutate": "ByTime" },
      "B": { "Var": "冰焰死亡时间点" }
    },
    "Watch": false
  },
  "是否冰焰激活中": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Var": "冰焰经过秒数" },
      ">": 0,
      "Then": {
        "Mutate": "IfFloat",
        "Value": { "Var": "冰焰经过秒数" },
        "<=": { "Var": "冰焰基础持续时间" },
        "Then": 1,
        "Else": 0
      },
      "Else": 0
    },
    "Watch": true
  },
  "是否冰焰冷却中": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Var": "冰焰经过秒数" },
      ">": { "Var": "冰焰基础持续时间" },
      "Then": {
        "Mutate": "IfFloat",
        "Value": { "Var": "冰焰经过秒数" },
        "<=": { "Var": "冰焰冷却时间" },
        "Then": 1,
        "Else": 0
      },
      "Else": 0
    },
    "Watch": true
  }
}`,explanation:["冰焰死亡时间点: LockFloat锁定触发时刻","冰焰经过秒数: 当前时间 - 触发时间","是否冰焰激活中: 经过秒数在0到持续时间之间","是否冰焰冷却中: 经过秒数在持续时间到冷却时间之间","冰焰基础持续时间/冷却时间: 根据等级计算","完整的状态追踪系统"]},{id:22,title:"免费补给+时停/秒杀组合系统",difficulty:5,difficultyLabel:"⭐⭐⭐⭐⭐ 专家",description:"实现完整系统：完成副任务获得免费补给次数，呼叫免费补给时50%概率触发时停或无敌秒杀，时停/秒杀持续时间随触发次数增加。",hint:"需要多个ED标记不同状态，使用时间追踪和概率判断。",answer:`"Vars": {
  "总获得免费补给次数": {
    "Type": "Float",
    "Value": {
      "Mutate": "EnemiesKilled",
      "ED": "免费信用"
    },
    "Watch": false
  },
  "已使用免费补给次数": {
    "Type": "Float",
    "Value": {
      "Mutate": "EnemiesKilled",
      "ED": "免费信用消耗标记"
    },
    "Watch": false
  },
  "剩余免费补给次数": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Var": "总获得免费补给次数" },
      "B": { "Var": "已使用免费补给次数" }
    },
    "Watch": true
  },
  "补给消耗硝石": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": {
        "Mutate": "Subtract",
        "A": { "Var": "总获得免费补给次数" },
        "B": { "Var": "已使用免费补给次数" }
      },
      ">": 0,
      "Then": 0,
      "Else": { "Mutate": "ByResuppliesCalled", "Values": [40, 50, 60] }
    },
    "Watch": false
  },
  "持续时间倍率": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Var": "已使用免费补给次数" },
      "==": 1,
      "Then": 1,
      "Else": {
        "Mutate": "IfFloat",
        "Value": { "Var": "已使用免费补给次数" },
        "==": 2,
        "Then": 1.5,
        "Else": 2
      }
    },
    "Watch": false
  }
}`,explanation:["免费信用: ED标记，击杀表示获得免费补给","免费信用消耗标记: ED标记，击杀表示使用了免费补给","剩余次数 = 总获得 - 已使用","补给消耗硝石: 有剩余次数时为0，否则正常消耗","持续时间倍率: 第一次1x, 第二次1.5x, 第三次及以后2x","时停/秒杀通过不同ED触发，各50%概率"]},{id:23,title:"虫群进化完整系统",difficulty:5,difficultyLabel:"⭐⭐⭐⭐⭐ 专家",description:"实现完整虫群进化系统：挖矿杀敌产生威胁值，威胁值达5/10/20/35时触发进化，进化包括数值进化（虫量+1倍、抗性+10%、速度+5%、攻击+10%）和机制进化（自爆聚合、蜂拥寄生、典狱长者、共生战士、怪异速射）。",hint:"参考星夜完整代码，需要Vars、WaveSpawners、Enemies、Messages多个模块配合。",answer:`// 核心Vars部分
"Vars": {
  "ThreatValue": {
    "Type": "Float",
    "Value": {
      "Mutate": "Add",
      "A": { "Var": "KillMarks" },
      "B": { "Var": "NitraMarks" }
    },
    "Watch": false
  },
  "威胁循环次数": {
    "Type": "Float",
    "Value": {
      "Mutate": "Floor",
      "Value": {
        "Mutate": "Divide",
        "A": { "Var": "ThreatValue" },
        "B": 51
      }
    },
    "Watch": false
  },
  "实际威胁值": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Var": "ThreatValue" },
      "B": {
        "Mutate": "Multiply",
        "A": { "Var": "威胁循环次数" },
        "B": 51
      }
    },
    "Watch": true
  },
  "进化监视": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Var": "进化总数" },
      "B": { "Var": "进化已锁定" }
    },
    "Watch": true
  }
}

// WaveSpawner触发进化敌人
{
  "Enabled": {
    "Mutate": "TriggerOnChange",
    "In": { "Var": "威胁循环次数" }
  },
  "Interval": 0,
  "Enemies": ["ED_Evolution_Trigger"],
  "Difficulty": 1,
  "Distance": 1,
  "Locations": 1,
  "SpawnOnEnable": true
}`,explanation:["ThreatValue: 击杀+资源产生威胁值","威胁循环次数: 每满51触发一次进化","实际威胁值: 用于判断当前进度（5/10/20/35阈值）","进化监视: 使用LockFloat记录每次进化时的基准","WaveSpawner: 威胁循环次数变化时触发进化敌人","进化敌人被击杀后触发Messages通知和效果应用","数值进化通过Vars应用到DifficultySetting","机制进化通过Enemies的Spawner实现"]},{id:24,title:"时间停止完整系统",difficulty:5,difficultyLabel:"⭐⭐⭐⭐⭐ 专家",description:"实现完整时间停止系统：击杀特定敌人触发时停，时停持续时间内所有敌人速度降低，时停结束后进入冷却，冷却期间无法再次触发。",hint:"需要多个变量协同：触发时间点、经过秒数、是否时停中、是否冷却中。",answer:`"Vars": {
  "时停触发时间点": {
    "Type": "Float",
    "Value": {
      "Mutate": "LockFloat",
      "Update": {
        "Mutate": "TriggerOnChange",
        "In": { "Mutate": "EnemiesKilled", "ED": "ED_Time_Stop_Trigger" }
      },
      "Value": { "Mutate": "ByTime" }
    },
    "Watch": false
  },
  "时停经过秒数": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Mutate": "ByTime" },
      "B": { "Var": "时停触发时间点" }
    },
    "Watch": false
  },
  "时停持续时间": {
    "Type": "Float",
    "Value": {
      "Mutate": "Multiply",
      "A": 20,
      "B": { "Var": "持续时间倍率" }
    },
    "Watch": false
  },
  "时停冷却时间": {
    "Type": "Float",
    "Value": 120,
    "Watch": false
  },
  "是否时停中": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Var": "时停经过秒数" },
      ">": 0,
      "Then": {
        "Mutate": "IfFloat",
        "Value": { "Var": "时停经过秒数" },
        "<=": { "Var": "时停持续时间" },
        "Then": 1,
        "Else": 0
      },
      "Else": 0
    },
    "Watch": true
  },
  "时间膨胀系数": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Var": "是否时停中" },
      ">=": 1,
      "Then": 0.25,
      "Else": 1
    },
    "Watch": false
  }
}`,explanation:["时停触发时间点: LockFloat锁定触发时刻","时停经过秒数: 当前时间 - 触发时间","时停持续时间: 基础20秒 × 倍率","是否时停中: 判断是否在持续时间内","时间膨胀系数: 时停中为0.25（25%速度）","将时间膨胀系数应用到Enemy的TimeDilation"]},{id:25,title:"威胁值+进化等级联动系统",difficulty:5,difficultyLabel:"⭐⭐⭐⭐⭐ 专家",description:"实现完整系统：威胁值满51触发进化，进化等级影响虫群倍数（每级+1倍）、敌人抗性（每级+10%）、敌人速度（每级+5%），同时Messages播报进化信息。",hint:"需要Vars计算进化等级，WaveSpawner触发进化，Messages播报，DifficultySetting应用数值。",answer:`// Vars部分
"Vars": {
  "进化等级": {
    "Type": "Float",
    "Value": {
      "Mutate": "Clamp",
      "Value": { "Var": "威胁循环次数" },
      "Min": 0,
      "Max": 10
    },
    "Watch": true
  },
  "动态虫群倍数": {
    "Type": "Float",
    "Value": {
      "Mutate": "Add",
      "A": 3,
      "B": { "Var": "进化等级" }
    },
    "Watch": false
  },
  "动态敌人抗性": {
    "Type": "Float",
    "Value": {
      "Mutate": "Add",
      "A": 1,
      "B": {
        "Mutate": "Multiply",
        "A": { "Var": "进化等级" },
        "B": 0.1
      }
    },
    "Watch": false
  }
}

// Messages播报
{
  "Send": {
    "Mutate": "TriggerOnChange",
    "RiseOnly": true,
    "In": { "Var": "威胁循环次数" }
  },
  "Type": "Delux",
  "Sender": "虫群进化",
  "Message": {
    "Mutate": "Join",
    "Values": [
      "⚠️ 虫群进化了！当前等级：",
      { "Mutate": "Int2String", "Value": { "Var": "进化等级" } }
    ]
  }
}`,explanation:["进化等级: 使用Clamp限制最大10级","动态虫群倍数: 基础3倍 + 进化等级","动态敌人抗性: 基础1 + 等级×0.1","Messages: 进化时播报当前等级","数值通过Vars应用到DifficultySetting","实现完整的进化联动系统"]}];function rh(){const[A,z]=I.useState(new Set),[N,f]=I.useState(new Set),[j,M]=I.useState(new Set),[v,V]=I.useState(null),m=q=>{const ae=new Set(A);ae.has(q)?ae.delete(q):ae.add(q),z(ae)},g=q=>{const ae=new Set(N);ae.has(q)?ae.delete(q):ae.add(q),f(ae)},k=q=>{const ae=new Set(j);ae.has(q)?ae.delete(q):ae.add(q),M(ae)},H=v?Yf.filter(q=>q.difficulty===v):Yf,he=q=>{switch(q){case 1:return"text-[#3fb950]";case 2:return"text-[#79c0ff]";case 3:return"text-[#ffd700]";case 4:return"text-[#f0883e]";case 5:return"text-[#da3633]";default:return"text-[#8b949e]"}};return s.jsx("section",{"code-path":"src\\sections\\ExercisesSection.tsx:58:5",id:"exercises",className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:59:7",className:"max-w-6xl mx-auto",children:[s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:61:9",className:"mb-12",children:[s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:62:11",className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{"code-path":"src\\sections\\ExercisesSection.tsx:63:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:s.jsx(Xi,{"code-path":"src\\sections\\ExercisesSection.tsx:64:15",className:"w-5 h-5 text-[#ffd700]"})}),s.jsx("h2",{"code-path":"src\\sections\\ExercisesSection.tsx:66:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"机制设计 - 例题练习"})]}),s.jsx("p",{"code-path":"src\\sections\\ExercisesSection.tsx:70:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"基于《星の綺麗な夜 v1.91γ》代码实例，从基础到困难，分为5个星级，每个星级三道练习题。 从直接调用Mutate修改动态值，到嵌套组合出复杂公式，逐步提升你的CD2开发能力。"})]}),s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:77:9",className:"flex flex-wrap gap-2 mb-8",children:[s.jsx("button",{"code-path":"src\\sections\\ExercisesSection.tsx:78:11",onClick:()=>V(null),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${v===null?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:"全部题目"}),[1,2,3,4,5].map(q=>s.jsx("button",{"code-path":"src\\sections\\ExercisesSection.tsx:89:13",onClick:()=>V(v===q?null:q),className:`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${v===q?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:"⭐".repeat(q)},q))]}),s.jsx("div",{"code-path":"src\\sections\\ExercisesSection.tsx:104:9",className:"space-y-4",children:H.map(q=>{const ae=A.has(q.id),je=N.has(q.id),ot=j.has(q.id);return s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:111:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[s.jsxs("button",{"code-path":"src\\sections\\ExercisesSection.tsx:116:17",onClick:()=>m(q.id),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:120:19",className:"flex items-center gap-4",children:[s.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:121:21",className:`text-lg ${he(q.difficulty)}`,children:q.difficultyLabel}),s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:124:21",children:[s.jsxs("h3",{"code-path":"src\\sections\\ExercisesSection.tsx:125:23",className:"text-lg font-semibold text-[#e6edf3]",children:["练习题 ",q.id,": ",q.title]}),q.relatedMechanism&&s.jsxs("p",{"code-path":"src\\sections\\ExercisesSection.tsx:129:25",className:"text-sm text-[#8b949e] mt-1",children:["相关机制: ",q.relatedMechanism]})]})]}),ae?s.jsx(At,{"code-path":"src\\sections\\ExercisesSection.tsx:136:21",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\ExercisesSection.tsx:138:21",className:"w-5 h-5 text-[#8b949e]"})]}),ae&&s.jsx("div",{"code-path":"src\\sections\\ExercisesSection.tsx:144:19",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:145:21",className:"pt-4 space-y-4",children:[s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:147:23",className:"p-4 bg-[#0d1117] rounded-lg",children:[s.jsx("h4",{"code-path":"src\\sections\\ExercisesSection.tsx:148:25",className:"text-sm font-medium text-[#ffd700] mb-2",children:"题目描述"}),s.jsx("p",{"code-path":"src\\sections\\ExercisesSection.tsx:149:25",className:"text-[#8b949e]",children:q.description})]}),s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:153:23",className:"flex gap-3",children:[s.jsxs("button",{"code-path":"src\\sections\\ExercisesSection.tsx:154:25",onClick:()=>g(q.id),className:"flex items-center gap-2 px-4 py-2 bg-[#21262d] text-[#8b949e] hover:text-[#ffd700] rounded-lg transition-colors",children:[s.jsx(Mu,{"code-path":"src\\sections\\ExercisesSection.tsx:158:27",className:"w-4 h-4"}),je?"隐藏提示":"显示提示"]}),s.jsxs("button",{"code-path":"src\\sections\\ExercisesSection.tsx:161:25",onClick:()=>k(q.id),className:"flex items-center gap-2 px-4 py-2 bg-[#21262d] text-[#8b949e] hover:text-[#3fb950] rounded-lg transition-colors",children:[s.jsx(yu,{"code-path":"src\\sections\\ExercisesSection.tsx:165:27",className:"w-4 h-4"}),ot?"隐藏答案":"显示答案"]})]}),je&&s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:172:25",className:"p-4 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg",children:[s.jsx("h4",{"code-path":"src\\sections\\ExercisesSection.tsx:173:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"提示"}),s.jsx("p",{"code-path":"src\\sections\\ExercisesSection.tsx:174:27",className:"text-[#8b949e]",children:q.hint})]}),ot&&s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:180:25",className:"space-y-4",children:[s.jsx(bt,{"code-path":"src\\sections\\ExercisesSection.tsx:181:27",code:q.answer}),s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:182:27",className:"p-4 bg-[#0d1117] rounded-lg",children:[s.jsx("h4",{"code-path":"src\\sections\\ExercisesSection.tsx:183:29",className:"text-sm font-medium text-[#ffd700] mb-2",children:"答案解析"}),s.jsx("ul",{"code-path":"src\\sections\\ExercisesSection.tsx:184:29",className:"space-y-1 text-sm text-[#8b949e]",children:q.explanation.map((qe,Dt)=>s.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:186:33",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:187:35",className:"text-[#ffd700]",children:"•"}),qe]},Dt))})]})]})]})})]},q.id)})}),s.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:204:9",className:"mt-12 p-6 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-xl",children:[s.jsx("h3",{"code-path":"src\\sections\\ExercisesSection.tsx:205:11",className:"text-lg font-semibold text-[#ffd700] mb-3",children:"学习建议"}),s.jsxs("ul",{"code-path":"src\\sections\\ExercisesSection.tsx:206:11",className:"space-y-2 text-[#8b949e]",children:[s.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:207:13",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:208:15",className:"text-[#ffd700]",children:"1."}),"建议按顺序完成题目，从⭐入门开始，逐步提升到⭐⭐⭐⭐⭐专家"]}),s.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:211:13",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:212:15",className:"text-[#ffd700]",children:"2."}),"先尝试独立思考，遇到困难再看提示，最后再看答案（有可能你的代码和答案不一样，也许你的行数更少，更优秀！）"]}),s.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:215:13",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:216:15",className:"text-[#ffd700]",children:"3."}),"理解答案后，尝试修改参数，观察效果变化"]}),s.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:219:13",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:220:15",className:"text-[#ffd700]",children:"4."}),"四星和五星题目可以直接参考《星の綺麗な夜》完整代码"]})]})]})]})})}const dh=[{id:1,title:"巢主ENE死亡后仍会刷出导致绑定问题",description:"巢主的ENE（巢主召唤的小怪）在巢主死亡后还会继续刷出，如果WaveSpawner绑定了巢主数量作为触发条件，会导致逻辑错误。",wrongCode:`{
  "Enabled": {
    "Mutate": "IfFloat",
    "Value": {
      "Mutate": "EnemyCount",
      "ED": "ED_Spider_Tank_Boss"
    },
    "==": 0,
    "Then": true,
    "Else": false
  }
}`,correctCode:`{
  "Enabled": {
    "Mutate": "And",
    "A": {
      "Mutate": "IfFloat",
      "Value": {
        "Mutate": "EnemyCount",
        "ED": "ED_Spider_Tank_Boss"
      },
      "==": 0,
      "Then": true,
      "Else": false
    },
    "B": {
      "Mutate": "IfFloat",
      "Value": {
        "Mutate": "EnemyCount",
        "ED": "ED_Spider_Tank_Boss_ENE"
      },
      "==": 0,
      "Then": true,
      "Else": false
    }
  }
}`,analysis:["巢主死亡后，其召唤的ENE可能仍然存活","仅检测巢主数量会导致ENE还在场时就触发后续逻辑","需要同时检测巢主和其ENE的数量","或者使用TriggerOnChange检测击杀事件而非实时数量"]},{id:2,title:"多个自定义变量之间不能循环依赖",description:"A变量依赖B，B依赖C，C依赖A，会导致循环错误，轻则变量无法检测，重则游戏崩溃！",wrongCode:`{
  "Enabled": {
    "Mutate": "TriggerOnChange",
    "In": { "Mutate": "DuringGenericSwarm" }
  },
  "Interval": 0,
  "Enemies": ["ED_Bonus"]
}`,correctCode:`{
  "Enabled": {
    "Mutate": "TriggerOnChange",
    "RiseOnly": true,
    "In": { "Mutate": "DuringGenericSwarm" }
  },
  "Interval": 0,
  "Enemies": ["ED_Bonus"],
  "SpawnOnEnable": true
}`,analysis:["TriggerOnChange默认在值变化时触发（上升和下降都会触发）","使用RiseOnly或FallOnly可以限制只在一侧触发","如果需要每次进入状态都触发，考虑使用TriggerOnce配合状态变量","SpawnOnEnable: true确保启用时立即执行"]},{id:3,title:"Vars不支持所有字段，heal值会导致报错",description:"游戏里的某些值不支持替换成Vars，目前测试发现所有敌人的heal值不支持将Vars填进去。",wrongCode:`{
  "ED_Spider_Grunt": {
    "Base": "ED_Spider_Grunt",
    "Heal": { "Var": "动态治疗量" }
  }
}`,correctCode:`{
  "Vars": {
    "动态治疗量": {
      "Type": "Float",
      "Value": 0
    }
  },
  "ED_Spider_Grunt": {
    "Base": "ED_Spider_Grunt",
    "Heal": 0
  }
}`,analysis:["Heal字段支持动态改变，但不支持将Vars填进去","尝试使用Var会导致游戏报错","目前只测试到heal不支持，其他字段需要自行测试","建议先用固定值测试，确认支持后再尝试动态化"]}],fh=[{id:1,content:"冰冻增伤能够改成负数，且在负数时能增强一点点冰冻抗性。利用这个特性可以制作'冰冻护盾'效果。"},{id:2,content:"Countdown的Enable参数可以动态控制，配合Trigger可以实现复杂的倒计时逻辑。"},{id:3,content:"RandomChoice的Weights参数是可选的，如果不填则所有选项等概率。"},{id:4,content:"ByTime的StartDelay可以延迟开始计时，适合制作阶段性难度提升。"},{id:5,content:"EnemyCount的EDs参数（CD2 v15+）可以同时统计多个敌人类型，比多次调用更高效。"},{id:6,content:"LockFloat的Update触发后，Value会被锁定，直到游戏重启才会重置。"},{id:7,content:"WaveSpawner的PauseOnDisable: true可以在禁用后暂停计时，重新启用后继续。"},{id:8,content:"Messages的SendOnChange: true可以实现数值变化时实时更新显示（如倒计时）。"}],mh=["立志成为gal糕手","超蓝大人驾到"];function ph(){const[A,z]=I.useState(new Set),[N,f]=I.useState(!0),j=M=>{const v=new Set(A);v.has(M)?v.delete(M):v.add(M),z(v)};return s.jsx("section",{"code-path":"src\\sections\\FeedbackSection.tsx:21:5",id:"feedback",className:"py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]",children:s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:22:7",className:"max-w-6xl mx-auto",children:[s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:24:9",className:"mb-12",children:[s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:25:11",className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:26:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:s.jsx(G0,{"code-path":"src\\sections\\FeedbackSection.tsx:27:15",className:"w-5 h-5 text-[#ffd700]"})}),s.jsx("h2",{"code-path":"src\\sections\\FeedbackSection.tsx:29:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"CD2特性反馈"})]}),s.jsx("p",{"code-path":"src\\sections\\FeedbackSection.tsx:33:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"CD2作者们在写作过程中发现的问题和小技巧，帮助你避免踩坑。"})]}),s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:39:9",className:"mb-12",children:[s.jsxs("h3",{"code-path":"src\\sections\\FeedbackSection.tsx:40:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[s.jsx(Z0,{"code-path":"src\\sections\\FeedbackSection.tsx:41:13",className:"w-5 h-5 text-[#da3633]"}),"复杂问题"]}),s.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:45:11",className:"space-y-4",children:dh.map(M=>{const v=A.has(M.id);return s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:50:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#da3633]/30 transition-colors",children:[s.jsxs("button",{"code-path":"src\\sections\\FeedbackSection.tsx:54:19",onClick:()=>j(M.id),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:58:21",className:"flex items-center gap-3",children:[s.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:59:23",className:"flex-shrink-0 w-8 h-8 bg-[#da3633]/20 text-[#da3633] rounded-lg flex items-center justify-center text-sm font-bold",children:M.id}),s.jsx("h4",{"code-path":"src\\sections\\FeedbackSection.tsx:62:23",className:"text-lg font-semibold text-[#e6edf3]",children:M.title})]}),v?s.jsx(At,{"code-path":"src\\sections\\FeedbackSection.tsx:65:23",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\FeedbackSection.tsx:67:23",className:"w-5 h-5 text-[#8b949e]"})]}),v&&s.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:72:21",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:73:23",className:"pt-4 space-y-4",children:[s.jsx("p",{"code-path":"src\\sections\\FeedbackSection.tsx:75:25",className:"text-[#8b949e]",children:M.description}),s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:78:25",className:"grid md:grid-cols-2 gap-4",children:[s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:79:27",children:[s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:80:29",className:"flex items-center gap-2 mb-2",children:[s.jsx(Qf,{"code-path":"src\\sections\\FeedbackSection.tsx:81:31",className:"w-4 h-4 text-[#da3633]"}),s.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:82:31",className:"text-sm font-medium text-[#da3633]",children:"错误代码"})]}),s.jsx(bt,{"code-path":"src\\sections\\FeedbackSection.tsx:84:29",code:M.wrongCode})]}),s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:86:27",children:[s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:87:29",className:"flex items-center gap-2 mb-2",children:[s.jsx(I0,{"code-path":"src\\sections\\FeedbackSection.tsx:88:31",className:"w-4 h-4 text-[#238636]"}),s.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:89:31",className:"text-sm font-medium text-[#238636]",children:"正确代码"})]}),s.jsx(bt,{"code-path":"src\\sections\\FeedbackSection.tsx:91:29",code:M.correctCode})]})]}),s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:96:25",className:"p-4 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg",children:[s.jsx("h5",{"code-path":"src\\sections\\FeedbackSection.tsx:97:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"问题解析"}),s.jsx("ul",{"code-path":"src\\sections\\FeedbackSection.tsx:98:27",className:"space-y-1 text-sm text-[#8b949e]",children:M.analysis.map((V,m)=>s.jsxs("li",{"code-path":"src\\sections\\FeedbackSection.tsx:100:31",className:"flex items-start gap-2",children:[s.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:101:33",className:"text-[#ffd700]",children:"•"}),V]},m))})]})]})})]},M.id)})})]}),s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:117:9",className:"mb-12",children:[s.jsxs("h3",{"code-path":"src\\sections\\FeedbackSection.tsx:118:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[s.jsx(Mu,{"code-path":"src\\sections\\FeedbackSection.tsx:119:13",className:"w-5 h-5 text-[#ffd700]"}),"小技巧"]}),s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:123:11",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden",children:[s.jsxs("button",{"code-path":"src\\sections\\FeedbackSection.tsx:124:13",onClick:()=>f(!N),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:128:15",className:"text-[#8b949e]",children:"点击查看CD2写作小技巧"}),N?s.jsx(At,{"code-path":"src\\sections\\FeedbackSection.tsx:130:17",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\FeedbackSection.tsx:132:17",className:"w-5 h-5 text-[#8b949e]"})]}),N&&s.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:137:15",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:138:17",className:"pt-4",children:s.jsx("ol",{"code-path":"src\\sections\\FeedbackSection.tsx:139:19",className:"space-y-3",children:fh.map(M=>s.jsxs("li",{"code-path":"src\\sections\\FeedbackSection.tsx:141:23",className:"flex items-start gap-3 p-3 bg-[#0d1117] rounded-lg",children:[s.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:145:25",className:"flex-shrink-0 w-6 h-6 bg-[#ffd700]/20 text-[#ffd700] rounded flex items-center justify-center text-sm font-bold",children:M.id}),s.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:148:25",className:"text-[#e6edf3]",children:M.content})]},M.id))})})})]})]}),s.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:159:9",className:"p-6 bg-[#161b22] border border-[#30363d] rounded-xl",children:[s.jsxs("h3",{"code-path":"src\\sections\\FeedbackSection.tsx:160:11",className:"flex items-center gap-2 text-lg font-semibold text-[#e6edf3] mb-4",children:[s.jsx(Kf,{"code-path":"src\\sections\\FeedbackSection.tsx:161:13",className:"w-5 h-5 text-[#ffd700]"}),"感谢名单"]}),s.jsx("p",{"code-path":"src\\sections\\FeedbackSection.tsx:164:11",className:"text-[#8b949e] mb-4",children:"感谢以下人员对CD2特性测试的贡献："}),s.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:167:11",className:"flex flex-wrap gap-2",children:mh.map(M=>s.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:169:15",className:"px-3 py-1.5 bg-[#21262d] text-[#e6edf3] rounded-full text-sm",children:M},M))})]})]})})}const hh=[{name:"战士异虫",edName:"ED_Spider_Grunt",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-30,unfreezeTemp:0,warmingRate:6},{name:"冰封岩层的战士异虫",edName:"ED_Spider_Grunt_Ice",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-30,unfreezeTemp:0,warmingRate:6},{name:"放射性禁区的战士异虫",edName:"ED_Spider_Grunt_Mutated",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-30,unfreezeTemp:0,warmingRate:6},{name:"典狱长召唤的战士异虫",edName:"ED_Spider_GruntTutorial",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-30,unfreezeTemp:0,warmingRate:6},{name:"护卫异虫",edName:"ED_Spider_Grunt_Guard",burnTemp:60,douseTemp:40,coolingRate:6,freezeTemp:-80,unfreezeTemp:-40,warmingRate:6},{name:"刀锋异虫",edName:"ED_Spider_Grunt_Attacker",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-30,unfreezeTemp:0,warmingRate:6},{name:"典狱长",edName:"ED_Spider_Buffer",burnTemp:50,douseTemp:25,coolingRate:6,freezeTemp:-70,unfreezeTemp:-30,warmingRate:6},{name:"蛭尾异虫",edName:"ED_Spider_Stinger",burnTemp:75,douseTemp:40,coolingRate:7,freezeTemp:-100,unfreezeTemp:-30,warmingRate:7},{name:"禁卫异虫",edName:"ED_Spider_Tank",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"氪化禁卫异虫",edName:"ED_Spider_Tank_Amber",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"寒霜禁卫异虫",edName:"ED_Spider_Tank_Ice",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"放射性禁卫异虫",edName:"ED_Spider_Tank_Mutated",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"暴君异虫",edName:"ED_Spider_ShieldTank",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-198,unfreezeTemp:-50,warmingRate:50},{name:"吐酸异虫",edName:"ED_Spider_Shooter",burnTemp:35,douseTemp:5,coolingRate:6,freezeTemp:-50,unfreezeTemp:0,warmingRate:6},{name:"吐丝异虫",edName:"ED_Spider_Spitter",burnTemp:30,douseTemp:0,coolingRate:6,freezeTemp:-75,unfreezeTemp:0,warmingRate:10},{name:"脓毒异虫",edName:"ED_Spider_Lobber",burnTemp:35,douseTemp:5,coolingRate:6,freezeTemp:-50,unfreezeTemp:0,warmingRate:6},{name:"速射酸虫",edName:"ED_Spider_RapidShooter",burnTemp:35,douseTemp:5,coolingRate:6,freezeTemp:-50,unfreezeTemp:0,warmingRate:6},{name:"吐刺蝇",edName:"ED_Mactera_Shooter_Normal",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-100,unfreezeTemp:0,warmingRate:40},{name:"氪化吐刺蝇",edName:"ED_Mactera_Shooter_Amber",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-100,unfreezeTemp:0,warmingRate:40},{name:"坚甲蝇",edName:"ED_Mactera_Shooter_HeavyVeteran",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-200,unfreezeTemp:0,warmingRate:40},{name:"三颚蝇",edName:"ED_Mactera_TripleShooter",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-100,unfreezeTemp:0,warmingRate:40},{name:"粘液轰炸蝇",edName:"ED_Bomber",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-320,unfreezeTemp:0,warmingRate:50},{name:"冰霜轰炸蝇",edName:"ED_Bomber_Ice",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-320,unfreezeTemp:0,warmingRate:50},{name:"捕手蝇",edName:"ED_Grabber",burnTemp:30,douseTemp:0,coolingRate:10,freezeTemp:-180,unfreezeTemp:0,warmingRate:40},{name:"岩痘禁卫异虫",edName:"ED_Spider_Tank_RockpoxPlague",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"匍行核岩孽生兽",edName:"ED_Crawler",burnTemp:60,douseTemp:40,coolingRate:6,freezeTemp:-150,unfreezeTemp:-100,warmingRate:6},{name:"连射炮塔",edName:"ED_FacilityTurret_Burst",burnTemp:100,douseTemp:80,coolingRate:20,freezeTemp:-198,unfreezeTemp:-100,warmingRate:50},{name:"狙击炮塔",edName:"ED_FacilityTurret_Sniper",burnTemp:100,douseTemp:80,coolingRate:20,freezeTemp:-198,unfreezeTemp:-100,warmingRate:50},{name:"推斥炮塔",edName:"ED_FacilityTurret_Barrier",burnTemp:100,douseTemp:80,coolingRate:20,freezeTemp:-198,unfreezeTemp:-100,warmingRate:50},{name:"隐刀",edName:"ED_Spider_Stalker",burnTemp:50,douseTemp:20,coolingRate:2,freezeTemp:-60,unfreezeTemp:-20,warmingRate:20}],xh=[{name:"M_Vanity_Headwear_Bavarian_Green",description:"迷彩绿（马桶专用）"},{name:"M_ScratchedPaint_DarkGreen01",description:"迷彩绿"},{name:"M_SpaceRig_MetalRed01_WS",description:"金属红"},{name:"M_ScratchedPaint_Yellow01",description:"迷彩黄"},{name:"M_RustedMetal_White01",description:"迷彩白"},{name:"M_Biome_AzureWeald_Flower_OrkidWhite",description:"典狱长的粉白色"},{name:"M_LushDownpour_LightPlant_Bulb",description:"黄绿渐变（偏淡）"},{name:"M_Mug_Metalic_Cyan",description:"蓝黄撞色"},{name:"M_BeachParty_Ball_Red",description:"火红色（熔岩主题）"},{name:"M_Facility_Vault_ShieldFailing",description:"淡黄幻影"},{name:"M_Facility_Vault_Shield",description:"棕色幻影"},{name:"M_DrillDozer_Wheels",description:"土黄色"},{name:"M_Biome_MagmaCaves_Rock01_Hot_Terrain",description:"熔岩色"},{name:"M_SwarmerTunnelsDirt_Particles",description:"核心岩暗紫"},{name:"M_CoreGem_Rock_Particles",description:"核心岩材质"},{name:"M_Biome_Azure_MagicRock",description:"守护石材质（光效蓝白，好看）"},{name:"M_Hydra_Weed_Heart_Body",description:"王草核心绿（有动效）"},{name:"M_Doretta_Flashing_Eye",description:"多蕾塔眼睛（黄色亮光闪烁）"},{name:"M_CoreGem_Rock",description:"另一种核心岩材质"},{name:"M_Light_BlueX20",description:"蓝色亮光"},{name:"M_Forge_EnergyLightRed",description:"黄色亮光"},{name:"M_BalancingBoard_Red",description:"橙色亮光（更通透）"},{name:"M_Facility_Light_PhasingPower",description:"暗金闪烁（条纹动效）"},{name:"M_RockCracksGlowing_Inst",description:"熔岩色（很亮）"},{name:"M_Lunar_LampRedPattern",description:"橙白（mc里的熔岩色）"},{name:"M_Facility_Metal02",description:"机器人的黑色纹路"},{name:"M_Bosco_PJ_AbyssalFrost",description:"蓝色石头"},{name:"M_Arcade_StaticLightRed",description:"发光黄色"},{name:"M_Flier_BomberRockpox_PlagueWobble40",description:"落叶黄（有动效，源自病毒轰炸机）"},{name:"M_Goal_Hologram_Blue",description:"蓝色科幻条纹"}],gh=[{name:"PRJ_AcidDrop_C",description:"黏液轰炸机的屎"},{name:"PRJ_AcidDrop_Ice_C",description:"冰霜轰炸机的屎"},{name:"PRJ_BaseBigGooProjectile_C",description:"钻机的泥巴"},{name:"PRJ_Base_Spider_Lobber_Projectile_C",description:"番茄"},{name:"PRJ_BigGooProjectile_C",description:"钻机的分裂泥巴"},{name:"PRJ_BigGooProjectile_Trail_C",description:"钻机的直线泥巴"},{name:"BP_Bosco_Rocket_Ice_C",description:"bosc的冰冻火箭"},{name:"BP_ClusterFragment_MicroMissileLauncher_C",description:"枪手集束炸弹的分裂物"},{name:"PRJ_BomberGoo_C",description:"轰炸机的绿球"},{name:"PRJ_BomberIce_C",description:"轰炸机的冰球"},{name:"PRJ_Bomber_Fire_C",description:"轰炸机的火球"},{name:"PRJ_Boss_Twin_Stomp_C",description:"无畏的地裂波"},{name:"PRJ_Crossbow_IceProjectile_C",description:"冰箭"},{name:"PRJ_CactusSpike_C",description:"仙人掌的刺"},{name:"PRJ_CaretakerBarrier_C",description:"护盾"},{name:"PRJ_ChargedBlasterShot_C",description:"钻机的离子枪（蓄力）"},{name:"PRJ_Crawler_DeathProjectile2_C",description:"马喽的死亡掉落物"},{name:"PRJ_Crye_SnowBall_C",description:"钻机的雪球"},{name:"PRJ_Cryocannon_C",description:"钻机的冰锥"},{name:"PRJ_ExploderTankClusterBomb_C",description:"大自爆的死亡爆炸球"},{name:"PRJ_FacilityTentacleProjectile_C",description:"看守者的触手激光"},{name:"PRJ_FacilityTurretLaser_Sniper_C",description:"狙击炮塔的子弹"},{name:"PRJ_FlameWall_C",description:"无畏的散射火球"},{name:"PRJ_FlyingSmartRock_C",description:"心石"},{name:"PRJ_Foam_C",description:"泡沫枪（像打胶，但没伤害，可以整活）"},{name:"PRJ_FriendlyInfectedMuleGrenade_C",description:"betc的相位炸弹"},{name:"PRJ_GrenadeAxe_C",description:"斧头"},{name:"PRJ_GrenadeLauncher_C",description:"钻机的高爆手雷（秒人，范围21米）"},{name:"PRJ_Grenade_HackeShredder_C",description:"工程的蜂群（不伤害矮人）"},{name:"PRJ_Grenade_StickySmall_C",description:"枪手黏性雷（12米）"},{name:"PRJ_GuntowerLineProjectile_C",description:"除虫器的等离子射线"},{name:"PRJ_HomingDrone_C",description:"除虫器的自杀无人机"},{name:"PRJ_LineCutter2_C",description:"工程的等离子射线（16米）"},{name:"PRJ_MicroMissile_Buck_C",description:"枪手的火箭（末端加速）"},{name:"PRJ_MicroMissile_C",description:"枪手的火箭（匀速）"},{name:"PRJ_MicroMissile_PlasmaBurster_C",description:"贯穿爆破的子弹"},{name:"PRJ_Mortar_Autocannon_C",description:"迫击炮（17米）"},{name:"PRJ_NormalBlasterShot_C",description:"钻机的离子枪（小）"},{name:"PRJ_OmmoranEnergySprite_C",description:"黄色绕圈圈的东西，带追踪"},{name:"PRJ_PatrolBotLaser_Flying_C",description:"蓝色激光子弹"},{name:"PRJ_PatrolBotLaser_Flying_Hacked_C",description:"蓝色激光子弹更快"},{name:"PRJ_PatrolBotLaser_Hacked_C",description:"红色激光子弹"},{name:"PRJ_PatrolBotLaser_New_C",description:"红色激光子弹更慢"},{name:"PRJ_PatrolBotRocket_C",description:"很慢的石头，带追踪，伤害低"},{name:"PRJ_PlasmaCarbineShot_Big_C",description:"侦查的电浆枪（秒人）"},{name:"PRJ_PlasmaCarbineShot_C",description:"侦查的电浆枪（一般伤害）"},{name:"PRJ_PlatformMaker_C",description:"工程的板子（没伤害，整活专用）"},{name:"PRJ_PowerupSphere_C",description:"矿化爆发的重击药剂（能吃，就离谱）"},{name:"PRJ_ProjectileBarf_C",description:"小岩痘种子（飞得慢，没伤害，没啥用）"},{name:"PRJ_RockpoxBomber_PlagueDrop_C",description:"病毒轰炸机的屎"},{name:"PRJ_Rockpox_PlagueGlob_C",description:"岩痘怪物吐的岩痘子弹"},{name:"PRJ_SentryOvercharge_Projectile_C",description:"炮塔鞭策的绿色激光（秒人）"},{name:"PRJ_ShootingPlant_C",description:"普通吐珠的东西"},{name:"PRJ_Spider_Boss_Twin_Mine_C",description:"强弩双子的延迟地裂爆弹"},{name:"PRJ_Spider_Boss_Twin_Multifireball_C",description:"小无畏的慢速火球"},{name:"PRJ_Spider_Lobber_Projectile_C",description:"番茄酸液（13米）"},{name:"PRJ_Spider_Lobber_Projectile_Fragment_C",description:"番茄酸液（6米）"},{name:"PRJ_Spider_RapidShooter_C",description:"速射的子弹"},{name:"PRJ_Spider_Shooter_C",description:"吐酸的子弹"},{name:"PRJ_Spider_Shooter_Ground_C",description:"吐酸的抛物线子弹"},{name:"PRJ_Spider_Shooter_Queen_C",description:"吐酸皇后的子弹"},{name:"PRJ_Spider_Shooter_Rockpox_Plague_C",description:"病毒吐酸的子弹"},{name:"PRJ_Spider_Spitter_C",description:"吐丝"},{name:"PRJ_Spider_Tank_Boss_C",description:"无畏的火球"},{name:"PRJ_Spider_Tank_Boss_Eggshot_C",description:"无畏信息素"},{name:"PRJ_StaticBomber_C",description:"马桶的爆炸种子"},{name:"PRJ_TentaclePlant_New_C",description:"小王草子弹"},{name:"PRJ_Terminator_Barrier_C",description:"娃娃机的护盾（横）"},{name:"PRJ_Turret_Barrier_C",description:"护盾炮塔的护盾（竖，窄）"},{name:"PRJ_WoodlouseAttack_C",description:"滚滚的酸液"}],yh=[{name:"Hazard 5《 星の綺麗な夜》 v1.91γ-Normal平衡版",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"星夜标准版本"},{name:"Hazard 5《 星の綺麗な夜》 v1.91γ-OverLock超频版",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-OverLock%E8%B6%85%E9%A2%91%E7%89%88.txt",description:"星夜超频版本，难度更高"},{name:"Hazard 9-Seven Lab-1.6-Tier 1(beta3-d8)",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"待补充"},{name:"Hazard 9-Polar-Night(beta1)",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"待补充"},{name:"Hazard 9-HawkesWorkSpring-EX",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"待补充"},{name:"Hazard8 Diversity-powerful current-1.3-V1.0-CD2",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"待补充"},{name:"Hazard 9 Refuge(0402update1)xt",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"待补充"},{name:"Hazard 占位1",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"预留位置"},{name:"Hazard 占位2",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"预留位置"},{name:"Hazard 占位3",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"预留位置"},{name:"Hazard 占位4",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"预留位置"},{name:"Hazard 占位5",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"预留位置"},{name:"Hazard 占位6",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"预留位置"},{name:"Hazard 占位7",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"预留位置"},{name:"Hazard 占位8",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"预留位置"}],Sh=`{
  "Name": "超蓝的cd2代码模板 Beta v1.0",
  "Description": "一个动态难度模板。本模板已删除了以下字段：1.UsesBiomeVariants（与CustomVeterans冲突，二选一），2.HealthRaw（与HealthMultiplier冲突，二选一），3.Projectile（需要正确的Mutator格式，为避免错误先删除）。",
  "Caps": {
    "MaxActiveCritters": 40,
    "MaxActiveSwarmers": 120,
    "MaxActiveEnemies": 180
  },
  "Messages": [],
  "Vars": {},
  "Resupply": {
    "Cost": 40
  },
  "DifficultySetting": {
    "ExtraLargeEnemyDamageResistance": 0.75,
    "ExtraLargeEnemyDamageResistanceB": 0.1,
    "ExtraLargeEnemyDamageResistanceC": 0.6,
    "ExtraLargeEnemyDamageResistanceD": 1.3,
    "EnemyDamageResistance": 1.2,
    "SmallEnemyDamageResistance": 1.2,
    "EnemyDamageModifier": 2.8,
    "EnemyCountModifier": 2.55,
    "EncounterDifficulty": [
      {
        "weight": 1,
        "min": 100,
        "max": 200
      },
      {
        "weight": 6,
        "min": 300,
        "max": 400
      },
      {
        "weight": 1,
        "min": 400,
        "max": 500
      }
    ],
    "StationaryDifficulty": [
      {
        "weight": 1,
        "min": 0,
        "max": 0
      },
      {
        "weight": 1,
        "min": 150,
        "max": 200
      },
      {
        "weight": 1,
        "min": 250,
        "max": 350
      }
    ],
    "EnemyWaveInterval": [
      {
        "weight": 2,
        "min": 160,
        "max": 180
      },
      {
        "weight": 7.5,
        "min": 230,
        "max": 280
      },
      {
        "weight": 0.5,
        "min": 299,
        "max": 299
      }
    ],
    "EnemyNormalWaveInterval": [
      {
        "weight": 4,
        "min": 120,
        "max": 150
      },
      {
        "weight": 2,
        "min": 180,
        "max": 250
      }
    ],
    "EnemyNormalWaveDifficulty": [
      {
        "weight": 1,
        "min": 350,
        "max": 450
      }
    ],
    "EnemyDiversity": [
      {
        "weight": 2,
        "min": 1,
        "max": 2
      },
      {
        "weight": 8,
        "min": 3,
        "max": 4
      },
      {
        "weight": 1,
        "min": 5,
        "max": 6
      }
    ],
    "StationaryEnemyDiversity": [
      {
        "weight": 1,
        "min": 2,
        "max": 4
      }
    ],
    "VeteranNormal": [
      {
        "weight": 3,
        "min": 0,
        "max": 0
      },
      {
        "weight": 9,
        "min": 0.15,
        "max": 0.3
      },
      {
        "weight": 2,
        "min": 0.4,
        "max": 0.6
      },
      {
        "weight": 0.5,
        "min": 1,
        "max": 1
      }
    ],
    "VeteranLarge": [
      {
        "weight": 1,
        "min": 0.175,
        "max": 0.175
      }
    ],
    "EnvironmentalDamageModifier": 1.1,
    "PointExtractionScalar": 1.1,
    "FriendlyFireModifier": 0.7,
    "WaveStartDelayScale": 0,
    "SpeedModifier": 1.15,
    "AttackCooldownModifier": 1.5,
    "ProjectileSpeedModifier": 1.7,
    "HealthRegenerationMax": 0.1,
    "ReviveHealthRatio": 0.1
  },
  "Dwarves": {
    "FallDamageModifier": 0.175,
    "FallDamageStartVelocity": 1000,
    "Scale": 1,
    "RegenHealthPerSecond": 0,
    "RegenDelayAfterDamage": 5
  },
  "WaveSpawners": [],
  "Darkness": {
    "FlashlightStrength": 1,
    "PlayerIllumination": 1,
    "FlareMax": 4,
    "FlareStrength": 1,
    "FlareDuration": 60,
    "FlareProductionTime": 12,
    "EnvironmentalLight": 1,
    "DisableFog": false,
    "FlareGunStrength": 999,
    "FlareGunDuration": 999
  },
  "Salvage": {
    "MiniMules": {
      "ScanUsable": {
        "ResetOnFail": false,
        "UseText": "修理矿骡"
      },
      "RepairUsable": {
        "CoopUse": true,
        "CoopUseMultiplier": 1,
        "Priority": 0,
        "ResetOnFail": false,
        "UseText": "修复",
        "UseCooldown": 0,
        "UseDuration": 10
      },
      "LegsPerMule": 4,
      "LegDistance": 1500,
      "Count": 2,
      "NitraToGive": 50
    },
    "Uplink": {
      "RepairUsable": {
        "CoopUse": true,
        "CoopUseMultiplier": 1,
        "Priority": 0,
        "ResetOnFail": false,
        "UseText": "激活",
        "UseCooldown": 0,
        "UseDuration": 10
      },
      "Scale": 1,
      "Duration": 80,
      "DisableLeaveShout": false,
      "LeavePenaltyMultiplier": 0
    },
    "Refuel": {
      "RepairUsable": {
        "CoopUse": true,
        "CoopUseMultiplier": 1,
        "Priority": 0,
        "ResetOnFail": false,
        "UseText": "加油",
        "UseCooldown": 0,
        "UseDuration": 10
      },
      "Scale": 1,
      "Duration": 100,
      "DisableLeaveShout": false,
      "LeavePenaltyMultiplier": 0
    }
  },
  "Enemies": {
    "ED_Spider_Exploder": {
      "Base": "ED_Spider_Exploder",
      "Significance": "Normal",
      "DisplayName": "",
      "DifficultyRating": 1,
      "MaxSpawnCount": 1,
      "MinSpawnCount": 1,
      "Rarity": 1,
      "SpawnAmountModifier": 1,
      "SpawnSpread": 1,
      "UsesSpawnRarityModifiers": false,
      "CanBeUsedForConstantPressure": true,
      "CanBeUsedInEncounters": true,
      "CustomVeterans": {},
      "Alert": true,
      "AttackDamageMultiplier": 1,
      "CanPlayerStandOn": false,
      "Courage": -1,
      "Direct": {},
      "Elite": 0,
      "EnemyHealthScaling": "Normal",
      "ForceEliteBase": "",
      "IsBossFight": false,
      "Heal": 0,
      "HealthMultiplier": 1,
      "Materials": [],
      "Movement": {
        "MaxPawnSpeed": 1,
        "StrafeSpeed": 1,
        "MinSlowdownAngle": 1,
        "MaxSlowdownAngle": 1,
        "MaxStrafeDistance": 1,
        "AlignDirectionSpeed": 1,
        "FleeSpeedBoostMultiplier": 1,
        "MaxAcceleration": 1,
        "MaxBrakingDeceleration": 1,
        "AlignToTargetMinRequiredAngle": 1
      },
      "NoSpawnWithin": 0,
      "Outline": {
        "Enabled": false,
        "Type": "Enemy"
      },
      "PST_CritBonusDamage": 1,
      "PST_CritChance": 0,
      "PST_DamageFromPlayers": 1,
      "PST_ExplodeOnDeath": 0,
      "PST_MovementSpeed": 1,
      "Resistances": {
        "InvulnerableToNonDefinedResistances": false,
        "DamageMultiplier": 1,
        "FireDamageMultiplier": 1,
        "CorrosiveDamageMultiplier": 1,
        "ElectricDamageMultiplier": 1,
        "ColdDamageMultiplier": 1,
        "KineticDamageMultiplier": 1,
        "PhysicalDamageMultiplier": 1,
        "ExplosionDamageMultiplier": 1,
        "InternalDamageMultiplier": 1,
        "RadiationDamageMultiplier": 1,
        "PoisonDamageMultiplier": 1,
        "PiercingDamageMultiplier": 1
      },
      "Scale": 1,
      "Spawner": {
        "OnSpawnDelay": 2,
        "OnSpawnCount": 0,
        "OnDeathCount": 0,
        "IntervalSpawnCount": 0,
        "Interval": 2,
        "ED": "",
        "MaxSpawns": 200,
        "OnDeathKillSpawns": false,
        "OnlySpawnOnAlert": true
      },
      "ShowHealthBar": false,
      "StaggerImmunityWindow": 1,
      "StaggerDurationMultiplier": 1,
      "Temperature": {
        "DieIfFrozen": false,
        "DieIfBurning": false,
        "IsHeatsourceWhenOnFire": false,
        "OnFireHeatRange": 1,
        "BurnTemperature": 1,
        "DouseFireTemperature": 1,
        "FreezeTemperature": 1,
        "UnfreezeTemperature": 1,
        "WarmingRate": 1,
        "CoolingRate": 1,
        "TemperatureChangeScale": 1,
        "FozenDamageBonusScale": 1,
        "MaxColdSlowdown": 1
      },
      "TimeDilation": 1,
      "WeakpointHP": 0
    }
  },
  "Pools": {
    "MinPoolSize": 8,
    "DisruptiveEnemyPoolCount": {
      "min": 3,
      "max": 3
    },
    "StationaryEnemyCount": {
      "Min": 10,
      "Max": 10
    },
    "EnemyPool": {
      "clear": false,
      "Add": [],
      "Remove": []
    },
    "CommonEnemies": {
      "Add": []
    },
    "SpecialEnemies": {
      "clear": false,
      "Add": [],
      "Remove": []
    },
    "DisruptiveEnemies": {
      "Add": []
    },
    "StationaryPool": {
      "clear": false,
      "Add": [],
      "Remove": []
    }
  },
  "EscortMule": {
    "FriendlyFireModifier": 0.1,
    "NeutralDamageModifier": 0.1,
    "BigHitDamageModifier": 0.85,
    "BigHitDamageReductionThreshold": 6
  },
  "SoundCues": [],
  "SpecialEncounters": [],
  "NitraMultiplier": 1,
  "MaxPlayers": 4,
  "NextDifficulty": "",
  "Warnings": {}
}`;function vh(){const[A,z]=I.useState(!0),[N,f]=I.useState(!1),[j,M]=I.useState("temperature");return s.jsx("section",{"code-path":"src\\sections\\AppendixSection.tsx:384:5",id:"appendix",className:"py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]",children:s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:385:7",className:"max-w-6xl mx-auto",children:[s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:387:9",className:"mb-12",children:[s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:388:11",className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:389:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:s.jsx(m1,{"code-path":"src\\sections\\AppendixSection.tsx:390:15",className:"w-5 h-5 text-[#ffd700]"})}),s.jsx("h2",{"code-path":"src\\sections\\AppendixSection.tsx:392:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"附录工具"})]}),s.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:396:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"代码模板、社区代码下载、对照表查询、外部资源链接。"})]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:402:9",className:"mb-8",children:[s.jsxs("h3",{"code-path":"src\\sections\\AppendixSection.tsx:403:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[s.jsx(Qi,{"code-path":"src\\sections\\AppendixSection.tsx:404:13",className:"w-5 h-5 text-[#ffd700]"}),"代码模板"]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:409:11",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden mb-4",children:[s.jsxs("button",{"code-path":"src\\sections\\AppendixSection.tsx:410:13",onClick:()=>z(!A),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:414:15",className:"flex items-center gap-3",children:[s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:415:17",className:"w-10 h-10 bg-[#79c0ff]/20 rounded-lg flex items-center justify-center",children:s.jsx(Qi,{"code-path":"src\\sections\\AppendixSection.tsx:416:19",className:"w-5 h-5 text-[#79c0ff]"})}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:418:17",children:[s.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:419:19",className:"text-lg font-semibold text-[#e6edf3]",children:"超蓝的CD2代码模板 Beta v1.0"}),s.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:422:19",className:"text-sm text-[#8b949e]",children:"完整基础框架模板"})]})]}),A?s.jsx(At,{"code-path":"src\\sections\\AppendixSection.tsx:426:17",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\AppendixSection.tsx:428:17",className:"w-5 h-5 text-[#8b949e]"})]}),A&&s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:433:15",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:434:17",className:"pt-4",children:s.jsx(bt,{"code-path":"src\\sections\\AppendixSection.tsx:435:19",code:Sh})})})]})]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:443:9",className:"mb-12",children:[s.jsxs("h3",{"code-path":"src\\sections\\AppendixSection.tsx:444:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[s.jsx(u1,{"code-path":"src\\sections\\AppendixSection.tsx:445:13",className:"w-5 h-5 text-[#ffd700]"}),"目前中文社区的cd2代码"]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:449:11",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden",children:[s.jsxs("button",{"code-path":"src\\sections\\AppendixSection.tsx:450:13",onClick:()=>f(!N),className:"w-full flex items-center justify-between p-5 text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:454:15",className:"flex items-center gap-3",children:[s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:455:17",className:"w-10 h-10 bg-[#238636]/20 rounded-lg flex items-center justify-center",children:s.jsx(g1,{"code-path":"src\\sections\\AppendixSection.tsx:456:19",className:"w-5 h-5 text-[#238636]"})}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:458:17",children:[s.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:459:19",className:"text-lg font-semibold text-[#e6edf3]",children:"GitHub代码仓库"}),s.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:462:19",className:"text-sm text-[#8b949e]",children:"点击查看下载链接"})]})]}),N?s.jsx(At,{"code-path":"src\\sections\\AppendixSection.tsx:466:17",className:"w-5 h-5 text-[#8b949e]"}):s.jsx(ut,{"code-path":"src\\sections\\AppendixSection.tsx:468:17",className:"w-5 h-5 text-[#8b949e]"})]}),N&&s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:473:15",className:"px-5 pb-5 border-t border-[#30363d]",children:s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:474:17",className:"pt-4 space-y-2",children:yh.map((v,V)=>s.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:476:21",href:v.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-3 bg-[#0d1117] hover:bg-[#21262d] rounded-lg transition-colors group",children:[s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:483:23",className:"flex items-center gap-3",children:[s.jsxs("span",{"code-path":"src\\sections\\AppendixSection.tsx:484:25",className:"text-[#8b949e] text-sm",children:[V+1,"."]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:485:25",children:[s.jsx("span",{"code-path":"src\\sections\\AppendixSection.tsx:486:27",className:"text-[#e6edf3] group-hover:text-[#79c0ff] transition-colors",children:v.name}),v.description&&s.jsxs("span",{"code-path":"src\\sections\\AppendixSection.tsx:490:29",className:"text-sm text-[#8b949e] ml-2",children:["(",v.description,")"]})]})]}),s.jsx(Xa,{"code-path":"src\\sections\\AppendixSection.tsx:496:23",className:"w-4 h-4 text-[#8b949e] group-hover:text-[#79c0ff]"})]},V))})})]})]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:506:9",className:"mb-12",children:[s.jsxs("h3",{"code-path":"src\\sections\\AppendixSection.tsx:507:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[s.jsx(Ff,{"code-path":"src\\sections\\AppendixSection.tsx:508:13",className:"w-5 h-5 text-[#ffd700]"}),"对照表查询"]}),s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:513:11",className:"flex flex-wrap gap-2 mb-6",children:[{id:"temperature",label:"温度对照表",icon:Ff},{id:"material",label:"材质对照表",icon:Jf},{id:"projectile",label:"发射物对照表",icon:C1}].map(v=>s.jsxs("button",{"code-path":"src\\sections\\AppendixSection.tsx:519:15",onClick:()=>M(v.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${j===v.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[s.jsx(v.icon,{"code-path":"src\\sections\\AppendixSection.tsx:528:17",className:"w-4 h-4"}),v.label]},v.id))}),j==="temperature"&&s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:536:13",className:"overflow-x-auto",children:s.jsxs("table",{"code-path":"src\\sections\\AppendixSection.tsx:537:15",className:"w-full text-sm",children:[s.jsx("thead",{"code-path":"src\\sections\\AppendixSection.tsx:538:17",children:s.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:539:19",className:"bg-[#21262d]",children:[s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:540:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"敌人名称"}),s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:541:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"ED名称"}),s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:542:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"燃烧温度"}),s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:543:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"熄灭温度"}),s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:544:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"冷却速率"}),s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:545:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"冰冻温度"}),s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:546:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"解冻温度"}),s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:547:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"升温速率"})]})}),s.jsx("tbody",{"code-path":"src\\sections\\AppendixSection.tsx:550:17",children:hh.map((v,V)=>s.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:552:21",className:"border-b border-[#30363d] hover:bg-[#1f242c]",children:[s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:556:23",className:"px-4 py-3 text-[#e6edf3]",children:v.name}),s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:557:23",className:"px-4 py-3 text-[#a5d6ff] font-mono",children:v.edName}),s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:558:23",className:"px-4 py-3 text-[#f0883e]",children:v.burnTemp}),s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:559:23",className:"px-4 py-3 text-[#79c0ff]",children:v.douseTemp}),s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:560:23",className:"px-4 py-3 text-[#8b949e]",children:v.coolingRate}),s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:561:23",className:"px-4 py-3 text-[#79c0ff]",children:v.freezeTemp}),s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:562:23",className:"px-4 py-3 text-[#8b949e]",children:v.unfreezeTemp}),s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:563:23",className:"px-4 py-3 text-[#f0883e]",children:v.warmingRate})]},V))})]})}),j==="material"&&s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:573:13",className:"overflow-x-auto",children:s.jsxs("table",{"code-path":"src\\sections\\AppendixSection.tsx:574:15",className:"w-full text-sm",children:[s.jsx("thead",{"code-path":"src\\sections\\AppendixSection.tsx:575:17",children:s.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:576:19",className:"bg-[#21262d]",children:[s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:577:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"材质名称"}),s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:578:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"描述/用途"})]})}),s.jsx("tbody",{"code-path":"src\\sections\\AppendixSection.tsx:581:17",children:xh.map((v,V)=>s.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:583:21",className:"border-b border-[#30363d] hover:bg-[#1f242c]",children:[s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:587:23",className:"px-4 py-3 text-[#a5d6ff] font-mono",children:v.name}),s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:588:23",className:"px-4 py-3 text-[#e6edf3]",children:v.description})]},V))})]})}),j==="projectile"&&s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:598:13",className:"overflow-x-auto",children:s.jsxs("table",{"code-path":"src\\sections\\AppendixSection.tsx:599:15",className:"w-full text-sm",children:[s.jsx("thead",{"code-path":"src\\sections\\AppendixSection.tsx:600:17",children:s.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:601:19",className:"bg-[#21262d]",children:[s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:602:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"发射物名称"}),s.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:603:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"描述/效果"})]})}),s.jsx("tbody",{"code-path":"src\\sections\\AppendixSection.tsx:606:17",children:gh.map((v,V)=>s.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:608:21",className:"border-b border-[#30363d] hover:bg-[#1f242c]",children:[s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:612:23",className:"px-4 py-3 text-[#a5d6ff] font-mono",children:v.name}),s.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:613:23",className:"px-4 py-3 text-[#e6edf3]",children:v.description})]},V))})]})})]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:623:9",className:"space-y-6",children:[s.jsxs("h3",{"code-path":"src\\sections\\AppendixSection.tsx:624:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2",children:[s.jsx(Xa,{"code-path":"src\\sections\\AppendixSection.tsx:625:13",className:"w-5 h-5 text-[#ffd700]"}),"外部资源"]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:629:11",className:"grid md:grid-cols-2 gap-4",children:[s.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:630:13",href:"https://seasonsc.github.io/CD2-reference-cn/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-4 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-[#ffd700]/30 transition-colors",children:[s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:636:15",className:"w-10 h-10 bg-[#238636]/20 rounded-lg flex items-center justify-center",children:s.jsx(Xi,{"code-path":"src\\sections\\AppendixSection.tsx:637:17",className:"w-5 h-5 text-[#238636]"})}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:639:15",children:[s.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:640:17",className:"font-medium text-[#e6edf3]",children:"在线版中文教程"}),s.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:641:17",className:"text-sm text-[#8b949e]",children:"seasonsc.github.io/CD2-reference-cn"})]}),s.jsx(Xa,{"code-path":"src\\sections\\AppendixSection.tsx:643:15",className:"w-4 h-4 text-[#8b949e] ml-auto"})]}),s.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:646:13",href:"https://vonacht.github.io/cd2reference/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-4 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-[#ffd700]/30 transition-colors",children:[s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:652:15",className:"w-10 h-10 bg-[#79c0ff]/20 rounded-lg flex items-center justify-center",children:s.jsx(Xi,{"code-path":"src\\sections\\AppendixSection.tsx:653:17",className:"w-5 h-5 text-[#79c0ff]"})}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:655:15",children:[s.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:656:17",className:"font-medium text-[#e6edf3]",children:"在线版英文教程"}),s.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:657:17",className:"text-sm text-[#8b949e]",children:"vonacht.github.io/cd2reference"})]}),s.jsx(Xa,{"code-path":"src\\sections\\AppendixSection.tsx:659:15",className:"w-4 h-4 text-[#8b949e] ml-auto"})]})]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:664:11",className:"p-6 bg-[#161b22] border border-[#30363d] rounded-xl",children:[s.jsxs("h4",{"code-path":"src\\sections\\AppendixSection.tsx:665:13",className:"flex items-center gap-2 text-lg font-semibold text-[#e6edf3] mb-4",children:[s.jsx(Kf,{"code-path":"src\\sections\\AppendixSection.tsx:666:15",className:"w-5 h-5 text-[#ffd700]"}),"鸣谢"]}),s.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:669:13",className:"text-[#8b949e] mb-4",children:"感谢以下CD2创作人员和文档翻译人员对社区的贡献："}),s.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:672:13",className:"flex flex-wrap gap-2",children:["Brain","vonacht","carrot","spy","noskill","Elema4","苦瓜"].map(v=>s.jsx("span",{"code-path":"src\\sections\\AppendixSection.tsx:674:17",className:"px-3 py-1.5 bg-[#21262d] text-[#e6edf3] rounded-full text-sm",children:v},v))})]}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:685:11",className:"p-6 bg-[#161b22] border border-[#30363d] rounded-xl",children:[s.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:686:13",className:"text-lg font-semibold text-[#e6edf3] mb-4",children:"相关教程"}),s.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:687:13",className:"space-y-3",children:[s.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:688:15",href:"https://www.bilibili.com/video/BV1Jk4y1h7La",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[s.jsx(Xa,{"code-path":"src\\sections\\AppendixSection.tsx:694:17",className:"w-4 h-4"}),"lcyf166的CD1教程（上）"]}),s.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:697:15",href:"https://www.bilibili.com/video/BV1r34y1w7SX",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[s.jsx(Xa,{"code-path":"src\\sections\\AppendixSection.tsx:703:17",className:"w-4 h-4"}),"lcyf166的CD1教程（下）"]}),s.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:706:15",href:"https://www.bilibili.com/video/BV1eBrPBMECW",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[s.jsx(Xa,{"code-path":"src\\sections\\AppendixSection.tsx:712:17",className:"w-4 h-4"}),"九五和希诺的mod管理器安装教程"]})]})]})]})]})})}function bh(){const A=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsx("footer",{"code-path":"src\\sections\\FooterSection.tsx:9:5",className:"py-12 px-4 sm:px-6 lg:px-8 border-t border-[#30363d]",children:s.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:10:7",className:"max-w-6xl mx-auto",children:[s.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:11:9",className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[s.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:13:11",className:"text-center md:text-left",children:[s.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:14:13",className:"flex items-center justify-center md:justify-start gap-2 mb-2",children:[s.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:15:15",className:"w-8 h-8 bg-[#ffd700] rounded flex items-center justify-center text-black text-sm font-bold",children:"CD2"}),s.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:16:15",className:"text-[#e6edf3] font-bold",children:"深岩银河CD2进阶教程"})]}),s.jsx("p",{"code-path":"src\\sections\\FooterSection.tsx:18:13",className:"text-sm text-[#8b949e]",children:"基于《星の綺麗な夜 v1.91γ》代码实例"})]}),s.jsxs("button",{"code-path":"src\\sections\\FooterSection.tsx:24:11",onClick:A,className:"group flex items-center gap-2 px-6 py-3 bg-[#21262d] hover:bg-[#ffd700] text-[#8b949e] hover:text-black rounded-lg transition-all",children:[s.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:28:13",className:"text-sm font-medium",children:"返回顶部"}),s.jsx(U0,{"code-path":"src\\sections\\FooterSection.tsx:29:13",className:"w-4 h-4 group-hover:-translate-y-1 transition-transform"})]})]}),s.jsx("div",{"code-path":"src\\sections\\FooterSection.tsx:34:9",className:"my-8 border-t border-[#30363d]"}),s.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:37:9",className:"flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8b949e]",children:[s.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:38:11",className:"flex items-center gap-1",children:[s.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:39:13",children:"Made with"}),s.jsx(S1,{"code-path":"src\\sections\\FooterSection.tsx:40:13",className:"w-4 h-4 text-[#da3633] fill-[#da3633]"}),s.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:41:13",children:"for Deep Rock Galactic community"})]}),s.jsx("div",{"code-path":"src\\sections\\FooterSection.tsx:44:11",className:"flex items-center gap-4",children:s.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:45:13",children:"作者: 超蓝大人驾到"})})]}),s.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:50:9",className:"mt-6 text-center text-xs text-[#484f58]",children:[s.jsx("p",{"code-path":"src\\sections\\FooterSection.tsx:51:11",children:"本教程仅供学习交流使用，所有代码示例基于《深岩银河》CD2系统。"}),s.jsx("p",{"code-path":"src\\sections\\FooterSection.tsx:54:11",className:"mt-1",children:"星夜是基于CD2的自定义代码，CD2是官方mod系统。"})]})]})})}function Eh(){const[A,z]=I.useState("hero");return I.useEffect(()=>{const N=()=>{const f=["hero","mutate","wavespawners","vars","messages","exercises","feedback","appendix"],j=window.scrollY+200;for(const M of f){const v=document.getElementById(M);if(v){const{offsetTop:V,offsetHeight:m}=v;if(j>=V&&j<V+m){z(M);break}}}};return window.addEventListener("scroll",N),()=>window.removeEventListener("scroll",N)},[]),s.jsxs("div",{"code-path":"src\\App.tsx:39:5",className:"min-h-screen bg-[#0a0a0a] text-[#e6edf3]",children:[s.jsx(Y1,{"code-path":"src\\App.tsx:40:7",activeSection:A}),s.jsxs("main",{"code-path":"src\\App.tsx:42:7",children:[s.jsx(X1,{"code-path":"src\\App.tsx:43:9"}),s.jsx(J1,{"code-path":"src\\App.tsx:44:9"}),s.jsx($1,{"code-path":"src\\App.tsx:45:9"}),s.jsx(lh,{"code-path":"src\\App.tsx:46:9"}),s.jsx(oh,{"code-path":"src\\App.tsx:47:9"}),s.jsx(rh,{"code-path":"src\\App.tsx:48:9"}),s.jsx(ph,{"code-path":"src\\App.tsx:49:9"}),s.jsx(vh,{"code-path":"src\\App.tsx:50:9"})]}),s.jsx(bh,{"code-path":"src\\App.tsx:53:7"})]})}j0.createRoot(document.getElementById("root")).render(s.jsx(I.StrictMode,{"code-path":"src\\main.tsx:7:3",children:s.jsx(Eh,{"code-path":"src\\main.tsx:8:5"})}));
