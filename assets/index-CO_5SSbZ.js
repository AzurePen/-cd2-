(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))f(j);new MutationObserver(j=>{for(const M of j)if(M.type==="childList")for(const v of M.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function A(j){const M={};return j.integrity&&(M.integrity=j.integrity),j.referrerPolicy&&(M.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?M.credentials="include":j.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function f(j){if(j.ep)return;j.ep=!0;const M=A(j);fetch(j.href,M)}})();var du={exports:{}},Dn={};var Nf;function v1(){if(Nf)return Dn;Nf=1;var T=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function A(f,j,M){var v=null;if(M!==void 0&&(v=""+M),j.key!==void 0&&(v=""+j.key),"key"in j){M={};for(var w in j)w!=="key"&&(M[w]=j[w])}else M=j;return j=M.ref,{$$typeof:T,type:f,key:v,ref:j!==void 0?j:null,props:M}}return Dn.Fragment=z,Dn.jsx=A,Dn.jsxs=A,Dn}var Af;function b1(){return Af||(Af=1,du.exports=v1()),du.exports}var i=b1(),fu={exports:{}},F={};var jf;function _1(){if(jf)return F;jf=1;var T=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),v=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),he=Symbol.iterator;function q(d){return d===null||typeof d!="object"?null:(d=he&&d[he]||d["@@iterator"],typeof d=="function"?d:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},je=Object.assign,ot={};function qe(d,N,B){this.props=d,this.context=N,this.refs=ot,this.updater=B||ae}qe.prototype.isReactComponent={},qe.prototype.setState=function(d,N){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,N,"setState")},qe.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function At(){}At.prototype=qe.prototype;function He(d,N,B){this.props=d,this.context=N,this.refs=ot,this.updater=B||ae}var rt=He.prototype=new At;rt.constructor=He,je(rt,qe.prototype),rt.isPureReactComponent=!0;var jt=Array.isArray;function Fe(){}var ee={H:null,A:null,T:null,S:null},Le=Object.prototype.hasOwnProperty;function Ct(d,N,B){var V=B.ref;return{$$typeof:T,type:d,key:N,ref:V!==void 0?V:null,props:B}}function Qa(d,N){return Ct(d.type,N,d.props)}function Bt(d){return typeof d=="object"&&d!==null&&d.$$typeof===T}function Ye(d){var N={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(B){return N[B]})}var Ta=/\/+/g;function Ot(d,N){return typeof d=="object"&&d!==null&&d.key!=null?Ye(""+d.key):N.toString(36)}function _t(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Fe,Fe):(d.status="pending",d.then(function(N){d.status==="pending"&&(d.status="fulfilled",d.value=N)},function(N){d.status==="pending"&&(d.status="rejected",d.reason=N)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function _(d,N,B,V,Y){var Z=typeof d;(Z==="undefined"||Z==="boolean")&&(d=null);var ie=!1;if(d===null)ie=!0;else switch(Z){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(d.$$typeof){case T:case z:ie=!0;break;case L:return ie=d._init,_(ie(d._payload),N,B,V,Y)}}if(ie)return Y=Y(d),ie=V===""?"."+Ot(d,0):V,jt(Y)?(B="",ie!=null&&(B=ie.replace(Ta,"$&/")+"/"),_(Y,N,B,"",function(Bl){return Bl})):Y!=null&&(Bt(Y)&&(Y=Qa(Y,B+(Y.key==null||d&&d.key===Y.key?"":(""+Y.key).replace(Ta,"$&/")+"/")+ie)),N.push(Y)),1;ie=0;var Ge=V===""?".":V+":";if(jt(d))for(var be=0;be<d.length;be++)V=d[be],Z=Ge+Ot(V,be),ie+=_(V,N,B,Z,Y);else if(be=q(d),typeof be=="function")for(d=be.call(d),be=0;!(V=d.next()).done;)V=V.value,Z=Ge+Ot(V,be++),ie+=_(V,N,B,Z,Y);else if(Z==="object"){if(typeof d.then=="function")return _(_t(d),N,B,V,Y);throw N=String(d),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ie}function C(d,N,B){if(d==null)return d;var V=[],Y=0;return _(d,V,"","",function(Z){return N.call(B,Z,Y++)}),V}function k(d){if(d._status===-1){var N=d._result;N=N(),N.then(function(B){(d._status===0||d._status===-1)&&(d._status=1,d._result=B)},function(B){(d._status===0||d._status===-1)&&(d._status=2,d._result=B)}),d._status===-1&&(d._status=0,d._result=N)}if(d._status===1)return d._result.default;throw d._result}var oe=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},me={map:C,forEach:function(d,N,B){C(d,function(){N.apply(this,arguments)},B)},count:function(d){var N=0;return C(d,function(){N++}),N},toArray:function(d){return C(d,function(N){return N})||[]},only:function(d){if(!Bt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return F.Activity=H,F.Children=me,F.Component=qe,F.Fragment=A,F.Profiler=j,F.PureComponent=He,F.StrictMode=f,F.Suspense=m,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,F.__COMPILER_RUNTIME={__proto__:null,c:function(d){return ee.H.useMemoCache(d)}},F.cache=function(d){return function(){return d.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(d,N,B){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var V=je({},d.props),Y=d.key;if(N!=null)for(Z in N.key!==void 0&&(Y=""+N.key),N)!Le.call(N,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&N.ref===void 0||(V[Z]=N[Z]);var Z=arguments.length-2;if(Z===1)V.children=B;else if(1<Z){for(var ie=Array(Z),Ge=0;Ge<Z;Ge++)ie[Ge]=arguments[Ge+2];V.children=ie}return Ct(d.type,Y,V)},F.createContext=function(d){return d={$$typeof:v,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:M,_context:d},d},F.createElement=function(d,N,B){var V,Y={},Z=null;if(N!=null)for(V in N.key!==void 0&&(Z=""+N.key),N)Le.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(Y[V]=N[V]);var ie=arguments.length-2;if(ie===1)Y.children=B;else if(1<ie){for(var Ge=Array(ie),be=0;be<ie;be++)Ge[be]=arguments[be+2];Y.children=Ge}if(d&&d.defaultProps)for(V in ie=d.defaultProps,ie)Y[V]===void 0&&(Y[V]=ie[V]);return Ct(d,Z,Y)},F.createRef=function(){return{current:null}},F.forwardRef=function(d){return{$$typeof:w,render:d}},F.isValidElement=Bt,F.lazy=function(d){return{$$typeof:L,_payload:{_status:-1,_result:d},_init:k}},F.memo=function(d,N){return{$$typeof:S,type:d,compare:N===void 0?null:N}},F.startTransition=function(d){var N=ee.T,B={};ee.T=B;try{var V=d(),Y=ee.S;Y!==null&&Y(B,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(Fe,oe)}catch(Z){oe(Z)}finally{N!==null&&B.types!==null&&(N.types=B.types),ee.T=N}},F.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},F.use=function(d){return ee.H.use(d)},F.useActionState=function(d,N,B){return ee.H.useActionState(d,N,B)},F.useCallback=function(d,N){return ee.H.useCallback(d,N)},F.useContext=function(d){return ee.H.useContext(d)},F.useDebugValue=function(){},F.useDeferredValue=function(d,N){return ee.H.useDeferredValue(d,N)},F.useEffect=function(d,N){return ee.H.useEffect(d,N)},F.useEffectEvent=function(d){return ee.H.useEffectEvent(d)},F.useId=function(){return ee.H.useId()},F.useImperativeHandle=function(d,N,B){return ee.H.useImperativeHandle(d,N,B)},F.useInsertionEffect=function(d,N){return ee.H.useInsertionEffect(d,N)},F.useLayoutEffect=function(d,N){return ee.H.useLayoutEffect(d,N)},F.useMemo=function(d,N){return ee.H.useMemo(d,N)},F.useOptimistic=function(d,N){return ee.H.useOptimistic(d,N)},F.useReducer=function(d,N,B){return ee.H.useReducer(d,N,B)},F.useRef=function(d){return ee.H.useRef(d)},F.useState=function(d){return ee.H.useState(d)},F.useSyncExternalStore=function(d,N,B){return ee.H.useSyncExternalStore(d,N,B)},F.useTransition=function(){return ee.H.useTransition()},F.version="19.2.3",F}var Cf;function _u(){return Cf||(Cf=1,fu.exports=_1()),fu.exports}var I=_u(),mu={exports:{}},Tn={},pu={exports:{}},hu={};var Bf;function M1(){return Bf||(Bf=1,(function(T){function z(_,C){var k=_.length;_.push(C);e:for(;0<k;){var oe=k-1>>>1,me=_[oe];if(0<j(me,C))_[oe]=C,_[k]=me,k=oe;else break e}}function A(_){return _.length===0?null:_[0]}function f(_){if(_.length===0)return null;var C=_[0],k=_.pop();if(k!==C){_[0]=k;e:for(var oe=0,me=_.length,d=me>>>1;oe<d;){var N=2*(oe+1)-1,B=_[N],V=N+1,Y=_[V];if(0>j(B,k))V<me&&0>j(Y,B)?(_[oe]=Y,_[V]=k,oe=V):(_[oe]=B,_[N]=k,oe=N);else if(V<me&&0>j(Y,k))_[oe]=Y,_[V]=k,oe=V;else break e}}return C}function j(_,C){var k=_.sortIndex-C.sortIndex;return k!==0?k:_.id-C.id}if(T.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;T.unstable_now=function(){return M.now()}}else{var v=Date,w=v.now();T.unstable_now=function(){return v.now()-w}}var m=[],S=[],L=1,H=null,he=3,q=!1,ae=!1,je=!1,ot=!1,qe=typeof setTimeout=="function"?setTimeout:null,At=typeof clearTimeout=="function"?clearTimeout:null,He=typeof setImmediate<"u"?setImmediate:null;function rt(_){for(var C=A(S);C!==null;){if(C.callback===null)f(S);else if(C.startTime<=_)f(S),C.sortIndex=C.expirationTime,z(m,C);else break;C=A(S)}}function jt(_){if(je=!1,rt(_),!ae)if(A(m)!==null)ae=!0,Fe||(Fe=!0,Ye());else{var C=A(S);C!==null&&_t(jt,C.startTime-_)}}var Fe=!1,ee=-1,Le=5,Ct=-1;function Qa(){return ot?!0:!(T.unstable_now()-Ct<Le)}function Bt(){if(ot=!1,Fe){var _=T.unstable_now();Ct=_;var C=!0;try{e:{ae=!1,je&&(je=!1,At(ee),ee=-1),q=!0;var k=he;try{t:{for(rt(_),H=A(m);H!==null&&!(H.expirationTime>_&&Qa());){var oe=H.callback;if(typeof oe=="function"){H.callback=null,he=H.priorityLevel;var me=oe(H.expirationTime<=_);if(_=T.unstable_now(),typeof me=="function"){H.callback=me,rt(_),C=!0;break t}H===A(m)&&f(m),rt(_)}else f(m);H=A(m)}if(H!==null)C=!0;else{var d=A(S);d!==null&&_t(jt,d.startTime-_),C=!1}}break e}finally{H=null,he=k,q=!1}C=void 0}}finally{C?Ye():Fe=!1}}}var Ye;if(typeof He=="function")Ye=function(){He(Bt)};else if(typeof MessageChannel<"u"){var Ta=new MessageChannel,Ot=Ta.port2;Ta.port1.onmessage=Bt,Ye=function(){Ot.postMessage(null)}}else Ye=function(){qe(Bt,0)};function _t(_,C){ee=qe(function(){_(T.unstable_now())},C)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(_){_.callback=null},T.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<_?Math.floor(1e3/_):5},T.unstable_getCurrentPriorityLevel=function(){return he},T.unstable_next=function(_){switch(he){case 1:case 2:case 3:var C=3;break;default:C=he}var k=he;he=C;try{return _()}finally{he=k}},T.unstable_requestPaint=function(){ot=!0},T.unstable_runWithPriority=function(_,C){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var k=he;he=_;try{return C()}finally{he=k}},T.unstable_scheduleCallback=function(_,C,k){var oe=T.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?oe+k:oe):k=oe,_){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=k+me,_={id:L++,callback:C,priorityLevel:_,startTime:k,expirationTime:me,sortIndex:-1},k>oe?(_.sortIndex=k,z(S,_),A(m)===null&&_===A(S)&&(je?(At(ee),ee=-1):je=!0,_t(jt,k-oe))):(_.sortIndex=me,z(m,_),ae||q||(ae=!0,Fe||(Fe=!0,Ye()))),_},T.unstable_shouldYield=Qa,T.unstable_wrapCallback=function(_){var C=he;return function(){var k=he;he=C;try{return _.apply(this,arguments)}finally{he=k}}}})(hu)),hu}var wf;function E1(){return wf||(wf=1,pu.exports=M1()),pu.exports}var xu={exports:{}},Ue={};var zf;function D1(){if(zf)return Ue;zf=1;var T=_u();function z(m){var S="https://react.dev/errors/"+m;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)S+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+m+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(){}var f={d:{f:A,r:function(){throw Error(z(522))},D:A,C:A,L:A,m:A,X:A,S:A,M:A},p:0,findDOMNode:null},j=Symbol.for("react.portal");function M(m,S,L){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:H==null?null:""+H,children:m,containerInfo:S,implementation:L}}var v=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(m,S){if(m==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Ue.createPortal=function(m,S){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(z(299));return M(m,S,null,L)},Ue.flushSync=function(m){var S=v.T,L=f.p;try{if(v.T=null,f.p=2,m)return m()}finally{v.T=S,f.p=L,f.d.f()}},Ue.preconnect=function(m,S){typeof m=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,f.d.C(m,S))},Ue.prefetchDNS=function(m){typeof m=="string"&&f.d.D(m)},Ue.preinit=function(m,S){if(typeof m=="string"&&S&&typeof S.as=="string"){var L=S.as,H=w(L,S.crossOrigin),he=typeof S.integrity=="string"?S.integrity:void 0,q=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;L==="style"?f.d.S(m,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:H,integrity:he,fetchPriority:q}):L==="script"&&f.d.X(m,{crossOrigin:H,integrity:he,fetchPriority:q,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Ue.preinitModule=function(m,S){if(typeof m=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var L=w(S.as,S.crossOrigin);f.d.M(m,{crossOrigin:L,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&f.d.M(m)},Ue.preload=function(m,S){if(typeof m=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var L=S.as,H=w(L,S.crossOrigin);f.d.L(m,L,{crossOrigin:H,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Ue.preloadModule=function(m,S){if(typeof m=="string")if(S){var L=w(S.as,S.crossOrigin);f.d.m(m,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:L,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else f.d.m(m)},Ue.requestFormReset=function(m){f.d.r(m)},Ue.unstable_batchedUpdates=function(m,S){return m(S)},Ue.useFormState=function(m,S,L){return v.H.useFormState(m,S,L)},Ue.useFormStatus=function(){return v.H.useHostTransitionStatus()},Ue.version="19.2.3",Ue}var Rf;function T1(){if(Rf)return xu.exports;Rf=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(z){console.error(z)}}return T(),xu.exports=D1(),xu.exports}var Vf;function N1(){if(Vf)return Tn;Vf=1;var T=E1(),z=_u(),A=T1();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(M(e)!==e)throw Error(f(188))}function S(e){var t=e.alternate;if(!t){if(t=M(e),t===null)throw Error(f(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var s=n.alternate;if(s===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===a)return m(n),e;if(s===l)return m(n),t;s=s.sibling}throw Error(f(188))}if(a.return!==l.return)a=n,l=s;else{for(var c=!1,u=n.child;u;){if(u===a){c=!0,a=n,l=s;break}if(u===l){c=!0,l=n,a=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===a){c=!0,a=s,l=n;break}if(u===l){c=!0,l=s,a=n;break}u=u.sibling}if(!c)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var H=Object.assign,he=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),ae=Symbol.for("react.portal"),je=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),qe=Symbol.for("react.profiler"),At=Symbol.for("react.consumer"),He=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),jt=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),Ct=Symbol.for("react.activity"),Qa=Symbol.for("react.memo_cache_sentinel"),Bt=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=Bt&&e[Bt]||e["@@iterator"],typeof e=="function"?e:null)}var Ta=Symbol.for("react.client.reference");function Ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ta?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case je:return"Fragment";case qe:return"Profiler";case ot:return"StrictMode";case jt:return"Suspense";case Fe:return"SuspenseList";case Ct:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ae:return"Portal";case He:return e.displayName||"Context";case At:return(e._context.displayName||"Context")+".Consumer";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Ot(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return Ot(e(t))}catch{}}return null}var _t=Array.isArray,_=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},oe=[],me=-1;function d(e){return{current:e}}function N(e){0>me||(e.current=oe[me],oe[me]=null,me--)}function B(e,t){me++,oe[me]=e.current,e.current=t}var V=d(null),Y=d(null),Z=d(null),ie=d(null);function Ge(e,t){switch(B(Z,t),B(Y,e),B(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kd(t),e=Wd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(V),B(V,e)}function be(){N(V),N(Y),N(Z)}function Bl(e){e.memoizedState!==null&&B(ie,e);var t=V.current,a=Wd(t,e.type);t!==a&&(B(Y,e),B(V,a))}function Nn(e){Y.current===e&&(N(V),N(Y)),ie.current===e&&(N(ie),bn._currentValue=k)}var Js,Eu;function Na(e){if(Js===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Js=t&&t[1]||"",Eu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Js+e+Eu}var Zs=!1;function Ks(e,t){if(!e||Zs)return"";Zs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(y){var g=y}Reflect.construct(e,[],D)}else{try{D.call()}catch(y){g=y}e.call(D.prototype)}}else{try{throw Error()}catch(y){g=y}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),c=s[0],u=s[1];if(c&&u){var o=c.split(`
`),x=u.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===x.length)for(l=o.length-1,n=x.length-1;1<=l&&0<=n&&o[l]!==x[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==x[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==x[n]){var b=`
`+o[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=l&&0<=n);break}}}finally{Zs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Na(a):""}function If(e,t){switch(e.tag){case 26:case 27:case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return e.child!==t&&t!==null?Na("Suspense Fallback"):Na("Suspense");case 19:return Na("SuspenseList");case 0:case 15:return Ks(e.type,!1);case 11:return Ks(e.type.render,!1);case 1:return Ks(e.type,!0);case 31:return Na("Activity");default:return""}}function Du(e){try{var t="",a=null;do t+=If(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ws=Object.prototype.hasOwnProperty,Is=T.unstable_scheduleCallback,$s=T.unstable_cancelCallback,$f=T.unstable_shouldYield,Pf=T.unstable_requestPaint,$e=T.unstable_now,em=T.unstable_getCurrentPriorityLevel,Tu=T.unstable_ImmediatePriority,Nu=T.unstable_UserBlockingPriority,An=T.unstable_NormalPriority,tm=T.unstable_LowPriority,Au=T.unstable_IdlePriority,am=T.log,lm=T.unstable_setDisableYieldValue,wl=null,Pe=null;function ta(e){if(typeof am=="function"&&lm(e),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(wl,e)}catch{}}var et=Math.clz32?Math.clz32:im,nm=Math.log,sm=Math.LN2;function im(e){return e>>>=0,e===0?32:31-(nm(e)/sm|0)|0}var jn=256,Cn=262144,Bn=4194304;function Aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~s,l!==0?n=Aa(l):(c&=u,c!==0?n=Aa(c):a||(a=u&~e,a!==0&&(n=Aa(a))))):(u=l&~s,u!==0?n=Aa(u):c!==0?n=Aa(c):a||(a=l&~e,a!==0&&(n=Aa(a)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:n}function zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ju(){var e=Bn;return Bn<<=1,(Bn&62914560)===0&&(Bn=4194304),e}function Ps(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Rl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function um(e,t,a,l,n,s){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,o=e.expirationTimes,x=e.hiddenUpdates;for(a=c&~a;0<a;){var b=31-et(a),D=1<<b;u[b]=0,o[b]=-1;var g=x[b];if(g!==null)for(x[b]=null,b=0;b<g.length;b++){var y=g[b];y!==null&&(y.lane&=-536870913)}a&=~D}l!==0&&Cu(e,l,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~t))}function Cu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-et(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Bu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-et(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function wu(e,t){var a=t&-t;return a=(a&42)!==0?1:ei(a),(a&(e.suspendedLanes|t))!==0?0:a}function ei(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ti(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zu(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:vf(e.type))}function Ru(e,t){var a=C.p;try{return C.p=e,t()}finally{C.p=a}}var aa=Math.random().toString(36).slice(2),we="__reactFiber$"+aa,Xe="__reactProps$"+aa,Ja="__reactContainer$"+aa,ai="__reactEvents$"+aa,om="__reactListeners$"+aa,rm="__reactHandles$"+aa,Vu="__reactResources$"+aa,Vl="__reactMarker$"+aa;function li(e){delete e[we],delete e[Xe],delete e[ai],delete e[om],delete e[rm]}function Za(e){var t=e[we];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ja]||a[we]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=lf(e);e!==null;){if(a=e[we])return a;e=lf(e)}return t}e=a,a=e.parentNode}return null}function Ka(e){if(e=e[we]||e[Ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ol(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function Wa(e){var t=e[Vu];return t||(t=e[Vu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[Vl]=!0}var Ou=new Set,Hu={};function ja(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(Hu[e]=t,e=0;e<t.length;e++)Ou.add(t[e])}var dm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uu={},qu={};function fm(e){return Ws.call(qu,e)?!0:Ws.call(Uu,e)?!1:dm.test(e)?qu[e]=!0:(Uu[e]=!0,!1)}function zn(e,t,a){if(fm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Rn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ht(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ni(e){if(!e._valueTracker){var t=Gu(e)?"checked":"value";e._valueTracker=mm(e,t,""+e[t])}}function ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Gu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pm=/[\n"\\]/g;function ft(e){return e.replace(pm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function si(e,t,a,l,n,s,c,u){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ii(e,c,dt(t)):a!=null?ii(e,c,dt(a)):l!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+dt(u):e.removeAttribute("name")}function Fu(e,t,a,l,n,s,c,u){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ni(e);return}a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),ni(e)}function ii(e,t,a){t==="number"&&Vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Lu(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function Yu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(f(92));if(_t(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ni(e)}function Pa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var hm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||hm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Qu(e,t,a){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Xu(e,n,l)}else for(var s in t)t.hasOwnProperty(s)&&Xu(e,s,t[s])}function ci(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function On(e){return Sm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ut(){}var ui=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,tl=null;function Ju(e){var t=Ka(e);if(t&&(e=t.stateNode)){var a=e[Xe]||null;e:switch(e=t.stateNode,t.type){case"input":if(si(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Xe]||null;if(!n)throw Error(f(90));si(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&ku(l)}break e;case"textarea":Lu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var ri=!1;function Zu(e,t,a){if(ri)return e(t,a);ri=!0;try{var l=e(t);return l}finally{if(ri=!1,(el!==null||tl!==null)&&(Ms(),el&&(t=el,e=tl,tl=el=null,Ju(t),e)))for(t=0;t<e.length;t++)Ju(e[t])}}function Hl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Xe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(f(231,t,typeof a));return a}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=!1;if(qt)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){di=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{di=!1}var la=null,fi=null,Hn=null;function Ku(){if(Hn)return Hn;var e,t=fi,a=t.length,l,n="value"in la?la.value:la.textContent,s=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[s-l];l++);return Hn=n.slice(e,1<l?1-l:void 0)}function Un(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Wu(){return!1}function Qe(e){function t(a,l,n,s,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qn:Wu,this.isPropagationStopped=Wu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gn=Qe(Ca),ql=H({},Ca,{view:0,detail:0}),gm=Qe(ql),mi,pi,Gl,kn=H({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gl&&(Gl&&e.type==="mousemove"?(mi=e.screenX-Gl.screenX,pi=e.screenY-Gl.screenY):pi=mi=0,Gl=e),mi)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),Iu=Qe(kn),ym=H({},kn,{dataTransfer:0}),vm=Qe(ym),bm=H({},ql,{relatedTarget:0}),hi=Qe(bm),_m=H({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),Mm=Qe(_m),Em=H({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dm=Qe(Em),Tm=H({},Ca,{data:0}),$u=Qe(Tm),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jm[e])?!!t[e]:!1}function xi(){return Cm}var Bm=H({},ql,{key:function(e){if(e.key){var t=Nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Un(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xi,charCode:function(e){return e.type==="keypress"?Un(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Un(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wm=Qe(Bm),zm=H({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=Qe(zm),Rm=H({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xi}),Vm=Qe(Rm),Om=H({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hm=Qe(Om),Um=H({},kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qm=Qe(Um),Gm=H({},Ca,{newState:0,oldState:0}),km=Qe(Gm),Fm=[9,13,27,32],Si=qt&&"CompositionEvent"in window,kl=null;qt&&"documentMode"in document&&(kl=document.documentMode);var Lm=qt&&"TextEvent"in window&&!kl,eo=qt&&(!Si||kl&&8<kl&&11>=kl),to=" ",ao=!1;function lo(e,t){switch(e){case"keyup":return Fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function no(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var al=!1;function Ym(e,t){switch(e){case"compositionend":return no(t);case"keypress":return t.which!==32?null:(ao=!0,to);case"textInput":return e=t.data,e===to&&ao?null:e;default:return null}}function Xm(e,t){if(al)return e==="compositionend"||!Si&&lo(e,t)?(e=Ku(),Hn=fi=la=null,al=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eo&&t.locale!=="ko"?null:t.data;default:return null}}var Qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qm[e.type]:t==="textarea"}function io(e,t,a,l){el?tl?tl.push(l):tl=[l]:el=l,t=Cs(t,"onChange"),0<t.length&&(a=new Gn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Fl=null,Ll=null;function Jm(e){Ld(e,0)}function Fn(e){var t=Ol(e);if(ku(t))return e}function co(e,t){if(e==="change")return t}var uo=!1;if(qt){var gi;if(qt){var yi="oninput"in document;if(!yi){var oo=document.createElement("div");oo.setAttribute("oninput","return;"),yi=typeof oo.oninput=="function"}gi=yi}else gi=!1;uo=gi&&(!document.documentMode||9<document.documentMode)}function ro(){Fl&&(Fl.detachEvent("onpropertychange",fo),Ll=Fl=null)}function fo(e){if(e.propertyName==="value"&&Fn(Ll)){var t=[];io(t,Ll,e,oi(e)),Zu(Jm,t)}}function Zm(e,t,a){e==="focusin"?(ro(),Fl=t,Ll=a,Fl.attachEvent("onpropertychange",fo)):e==="focusout"&&ro()}function Km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fn(Ll)}function Wm(e,t){if(e==="click")return Fn(t)}function Im(e,t){if(e==="input"||e==="change")return Fn(t)}function $m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:$m;function Yl(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ws.call(t,n)||!tt(e[n],t[n]))return!1}return!0}function mo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function po(e,t){var a=mo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mo(a)}}function ho(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ho(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Vn(e.document)}return t}function vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Pm=qt&&"documentMode"in document&&11>=document.documentMode,ll=null,bi=null,Xl=null,_i=!1;function So(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_i||ll==null||ll!==Vn(l)||(l=ll,"selectionStart"in l&&vi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xl&&Yl(Xl,l)||(Xl=l,l=Cs(bi,"onSelect"),0<l.length&&(t=new Gn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ll)))}function Ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var nl={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Mi={},go={};qt&&(go=document.createElement("div").style,"AnimationEvent"in window||(delete nl.animationend.animation,delete nl.animationiteration.animation,delete nl.animationstart.animation),"TransitionEvent"in window||delete nl.transitionend.transition);function wa(e){if(Mi[e])return Mi[e];if(!nl[e])return e;var t=nl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in go)return Mi[e]=t[a];return e}var yo=wa("animationend"),vo=wa("animationiteration"),bo=wa("animationstart"),ep=wa("transitionrun"),tp=wa("transitionstart"),ap=wa("transitioncancel"),_o=wa("transitionend"),Mo=new Map,Ei="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ei.push("scrollEnd");function Mt(e,t){Mo.set(e,t),ja(t,[e])}var Ln=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mt=[],sl=0,Di=0;function Yn(){for(var e=sl,t=Di=sl=0;t<e;){var a=mt[t];mt[t++]=null;var l=mt[t];mt[t++]=null;var n=mt[t];mt[t++]=null;var s=mt[t];if(mt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}s!==0&&Eo(a,n,s)}}function Xn(e,t,a,l){mt[sl++]=e,mt[sl++]=t,mt[sl++]=a,mt[sl++]=l,Di|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ti(e,t,a,l){return Xn(e,t,a,l),Qn(e)}function za(e,t){return Xn(e,null,null,t),Qn(e)}function Eo(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,s=e.return;s!==null;)s.childLanes|=a,l=s.alternate,l!==null&&(l.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-et(a),e=s.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),s):null}function Qn(e){if(50<pn)throw pn=0,Vc=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var il={};function lp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,a,l){return new lp(e,t,a,l)}function Ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=at(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Do(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Jn(e,t,a,l,n,s){var c=0;if(l=e,typeof e=="function")Ni(e)&&(c=1);else if(typeof e=="string")c=u1(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ct:return e=at(31,a,t,n),e.elementType=Ct,e.lanes=s,e;case je:return Ra(a.children,n,s,t);case ot:c=8,n|=24;break;case qe:return e=at(12,a,t,n|2),e.elementType=qe,e.lanes=s,e;case jt:return e=at(13,a,t,n),e.elementType=jt,e.lanes=s,e;case Fe:return e=at(19,a,t,n),e.elementType=Fe,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case He:c=10;break e;case At:c=9;break e;case rt:c=11;break e;case ee:c=14;break e;case Le:c=16,l=null;break e}c=29,a=Error(f(130,e===null?"null":typeof e,"")),l=null}return t=at(c,a,t,n),t.elementType=e,t.type=l,t.lanes=s,t}function Ra(e,t,a,l){return e=at(7,e,l,t),e.lanes=a,e}function Ai(e,t,a){return e=at(6,e,null,t),e.lanes=a,e}function To(e){var t=at(18,null,null,0);return t.stateNode=e,t}function ji(e,t,a){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var No=new WeakMap;function pt(e,t){if(typeof e=="object"&&e!==null){var a=No.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Du(t)},No.set(e,t),t)}return{value:e,source:t,stack:Du(t)}}var cl=[],ul=0,Zn=null,Ql=0,ht=[],xt=0,na=null,wt=1,zt="";function kt(e,t){cl[ul++]=Ql,cl[ul++]=Zn,Zn=e,Ql=t}function Ao(e,t,a){ht[xt++]=wt,ht[xt++]=zt,ht[xt++]=na,na=e;var l=wt;e=zt;var n=32-et(l)-1;l&=~(1<<n),a+=1;var s=32-et(t)+n;if(30<s){var c=n-n%5;s=(l&(1<<c)-1).toString(32),l>>=c,n-=c,wt=1<<32-et(t)+n|a<<n|l,zt=s+e}else wt=1<<s|a<<n|l,zt=e}function Ci(e){e.return!==null&&(kt(e,1),Ao(e,1,0))}function Bi(e){for(;e===Zn;)Zn=cl[--ul],cl[ul]=null,Ql=cl[--ul],cl[ul]=null;for(;e===na;)na=ht[--xt],ht[xt]=null,zt=ht[--xt],ht[xt]=null,wt=ht[--xt],ht[xt]=null}function jo(e,t){ht[xt++]=wt,ht[xt++]=zt,ht[xt++]=na,wt=t.id,zt=t.overflow,na=e}var ze=null,xe=null,te=!1,sa=null,St=!1,wi=Error(f(519));function ia(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jl(pt(t,e)),wi}function Co(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[we]=e,t[Xe]=l,a){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(a=0;a<xn.length;a++)W(xn[a],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Fu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Yu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Jd(t.textContent,a)?(l.popover!=null&&(W("beforetoggle",t),W("toggle",t)),l.onScroll!=null&&W("scroll",t),l.onScrollEnd!=null&&W("scrollend",t),l.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ia(e,!0)}function Bo(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:ze=ze.return}}function ol(e){if(e!==ze)return!1;if(!te)return Bo(e),te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wc(e.type,e.memoizedProps)),a=!a),a&&xe&&ia(e),Bo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));xe=af(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));xe=af(e)}else t===27?(t=xe,va(e.type)?(e=tu,tu=null,xe=e):xe=t):xe=ze?yt(e.stateNode.nextSibling):null;return!0}function Va(){xe=ze=null,te=!1}function zi(){var e=sa;return e!==null&&(We===null?We=e:We.push.apply(We,e),sa=null),e}function Jl(e){sa===null?sa=[e]:sa.push(e)}var Ri=d(null),Oa=null,Ft=null;function ca(e,t,a){B(Ri,t._currentValue),t._currentValue=a}function Lt(e){e._currentValue=Ri.current,N(Ri)}function Vi(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Oi(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var c=n.child;s=s.firstContext;e:for(;s!==null;){var u=s;s=n;for(var o=0;o<t.length;o++)if(u.context===t[o]){s.lanes|=a,u=s.alternate,u!==null&&(u.lanes|=a),Vi(s.return,a,e),l||(c=null);break e}s=u.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(f(341));c.lanes|=a,s=c.alternate,s!==null&&(s.lanes|=a),Vi(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function rl(e,t,a,l){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(f(387));if(c=c.memoizedProps,c!==null){var u=n.type;tt(n.pendingProps.value,c.value)||(e!==null?e.push(u):e=[u])}}else if(n===ie.current){if(c=n.alternate,c===null)throw Error(f(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(bn):e=[bn])}n=n.return}e!==null&&Oi(t,e,a,l),t.flags|=262144}function Kn(e){for(e=e.firstContext;e!==null;){if(!tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Oa=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Re(e){return wo(Oa,e)}function Wn(e,t){return Oa===null&&Ha(e),wo(e,t)}function wo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ft===null){if(e===null)throw Error(f(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return a}var np=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},sp=T.unstable_scheduleCallback,ip=T.unstable_NormalPriority,Ee={$$typeof:He,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hi(){return{controller:new np,data:new Map,refCount:0}}function Zl(e){e.refCount--,e.refCount===0&&sp(ip,function(){e.controller.abort()})}var Kl=null,Ui=0,dl=0,fl=null;function cp(e,t){if(Kl===null){var a=Kl=[];Ui=0,dl=kc(),fl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ui++,t.then(zo,zo),t}function zo(){if(--Ui===0&&Kl!==null){fl!==null&&(fl.status="fulfilled");var e=Kl;Kl=null,dl=0,fl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function up(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ro=_.S;_.S=function(e,t){Sd=$e(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&cp(e,t),Ro!==null&&Ro(e,t)};var Ua=d(null);function qi(){var e=Ua.current;return e!==null?e:pe.pooledCache}function In(e,t){t===null?B(Ua,Ua.current):B(Ua,t.pool)}function Vo(){var e=qi();return e===null?null:{parent:Ee._currentValue,pool:e}}var ml=Error(f(460)),Gi=Error(f(474)),$n=Error(f(542)),Pn={then:function(){}};function Oo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ho(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ut,Ut),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qo(e),e;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qo(e),e}throw Ga=t,ml}}function qa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ga=a,ml):a}}var Ga=null;function Uo(){if(Ga===null)throw Error(f(459));var e=Ga;return Ga=null,e}function qo(e){if(e===ml||e===$n)throw Error(f(483))}var pl=null,Wl=0;function es(e){var t=Wl;return Wl+=1,pl===null&&(pl=[]),Ho(pl,e,t)}function Il(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ts(e,t){throw t.$$typeof===he?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Go(e){function t(p,r){if(e){var h=p.deletions;h===null?(p.deletions=[r],p.flags|=16):h.push(r)}}function a(p,r){if(!e)return null;for(;r!==null;)t(p,r),r=r.sibling;return null}function l(p){for(var r=new Map;p!==null;)p.key!==null?r.set(p.key,p):r.set(p.index,p),p=p.sibling;return r}function n(p,r){return p=Gt(p,r),p.index=0,p.sibling=null,p}function s(p,r,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<r?(p.flags|=67108866,r):h):(p.flags|=67108866,r)):(p.flags|=1048576,r)}function c(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function u(p,r,h,E){return r===null||r.tag!==6?(r=Ai(h,p.mode,E),r.return=p,r):(r=n(r,h),r.return=p,r)}function o(p,r,h,E){var U=h.type;return U===je?b(p,r,h.props.children,E,h.key):r!==null&&(r.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Le&&qa(U)===r.type)?(r=n(r,h.props),Il(r,h),r.return=p,r):(r=Jn(h.type,h.key,h.props,null,p.mode,E),Il(r,h),r.return=p,r)}function x(p,r,h,E){return r===null||r.tag!==4||r.stateNode.containerInfo!==h.containerInfo||r.stateNode.implementation!==h.implementation?(r=ji(h,p.mode,E),r.return=p,r):(r=n(r,h.children||[]),r.return=p,r)}function b(p,r,h,E,U){return r===null||r.tag!==7?(r=Ra(h,p.mode,E,U),r.return=p,r):(r=n(r,h),r.return=p,r)}function D(p,r,h){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Ai(""+r,p.mode,h),r.return=p,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case q:return h=Jn(r.type,r.key,r.props,null,p.mode,h),Il(h,r),h.return=p,h;case ae:return r=ji(r,p.mode,h),r.return=p,r;case Le:return r=qa(r),D(p,r,h)}if(_t(r)||Ye(r))return r=Ra(r,p.mode,h,null),r.return=p,r;if(typeof r.then=="function")return D(p,es(r),h);if(r.$$typeof===He)return D(p,Wn(p,r),h);ts(p,r)}return null}function g(p,r,h,E){var U=r!==null?r.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return U!==null?null:u(p,r,""+h,E);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case q:return h.key===U?o(p,r,h,E):null;case ae:return h.key===U?x(p,r,h,E):null;case Le:return h=qa(h),g(p,r,h,E)}if(_t(h)||Ye(h))return U!==null?null:b(p,r,h,E,null);if(typeof h.then=="function")return g(p,r,es(h),E);if(h.$$typeof===He)return g(p,r,Wn(p,h),E);ts(p,h)}return null}function y(p,r,h,E,U){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return p=p.get(h)||null,u(r,p,""+E,U);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case q:return p=p.get(E.key===null?h:E.key)||null,o(r,p,E,U);case ae:return p=p.get(E.key===null?h:E.key)||null,x(r,p,E,U);case Le:return E=qa(E),y(p,r,h,E,U)}if(_t(E)||Ye(E))return p=p.get(h)||null,b(r,p,E,U,null);if(typeof E.then=="function")return y(p,r,h,es(E),U);if(E.$$typeof===He)return y(p,r,h,Wn(r,E),U);ts(r,E)}return null}function R(p,r,h,E){for(var U=null,le=null,O=r,Q=r=0,P=null;O!==null&&Q<h.length;Q++){O.index>Q?(P=O,O=null):P=O.sibling;var ne=g(p,O,h[Q],E);if(ne===null){O===null&&(O=P);break}e&&O&&ne.alternate===null&&t(p,O),r=s(ne,r,Q),le===null?U=ne:le.sibling=ne,le=ne,O=P}if(Q===h.length)return a(p,O),te&&kt(p,Q),U;if(O===null){for(;Q<h.length;Q++)O=D(p,h[Q],E),O!==null&&(r=s(O,r,Q),le===null?U=O:le.sibling=O,le=O);return te&&kt(p,Q),U}for(O=l(O);Q<h.length;Q++)P=y(O,p,Q,h[Q],E),P!==null&&(e&&P.alternate!==null&&O.delete(P.key===null?Q:P.key),r=s(P,r,Q),le===null?U=P:le.sibling=P,le=P);return e&&O.forEach(function(Da){return t(p,Da)}),te&&kt(p,Q),U}function G(p,r,h,E){if(h==null)throw Error(f(151));for(var U=null,le=null,O=r,Q=r=0,P=null,ne=h.next();O!==null&&!ne.done;Q++,ne=h.next()){O.index>Q?(P=O,O=null):P=O.sibling;var Da=g(p,O,ne.value,E);if(Da===null){O===null&&(O=P);break}e&&O&&Da.alternate===null&&t(p,O),r=s(Da,r,Q),le===null?U=Da:le.sibling=Da,le=Da,O=P}if(ne.done)return a(p,O),te&&kt(p,Q),U;if(O===null){for(;!ne.done;Q++,ne=h.next())ne=D(p,ne.value,E),ne!==null&&(r=s(ne,r,Q),le===null?U=ne:le.sibling=ne,le=ne);return te&&kt(p,Q),U}for(O=l(O);!ne.done;Q++,ne=h.next())ne=y(O,p,Q,ne.value,E),ne!==null&&(e&&ne.alternate!==null&&O.delete(ne.key===null?Q:ne.key),r=s(ne,r,Q),le===null?U=ne:le.sibling=ne,le=ne);return e&&O.forEach(function(y1){return t(p,y1)}),te&&kt(p,Q),U}function fe(p,r,h,E){if(typeof h=="object"&&h!==null&&h.type===je&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case q:e:{for(var U=h.key;r!==null;){if(r.key===U){if(U=h.type,U===je){if(r.tag===7){a(p,r.sibling),E=n(r,h.props.children),E.return=p,p=E;break e}}else if(r.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Le&&qa(U)===r.type){a(p,r.sibling),E=n(r,h.props),Il(E,h),E.return=p,p=E;break e}a(p,r);break}else t(p,r);r=r.sibling}h.type===je?(E=Ra(h.props.children,p.mode,E,h.key),E.return=p,p=E):(E=Jn(h.type,h.key,h.props,null,p.mode,E),Il(E,h),E.return=p,p=E)}return c(p);case ae:e:{for(U=h.key;r!==null;){if(r.key===U)if(r.tag===4&&r.stateNode.containerInfo===h.containerInfo&&r.stateNode.implementation===h.implementation){a(p,r.sibling),E=n(r,h.children||[]),E.return=p,p=E;break e}else{a(p,r);break}else t(p,r);r=r.sibling}E=ji(h,p.mode,E),E.return=p,p=E}return c(p);case Le:return h=qa(h),fe(p,r,h,E)}if(_t(h))return R(p,r,h,E);if(Ye(h)){if(U=Ye(h),typeof U!="function")throw Error(f(150));return h=U.call(h),G(p,r,h,E)}if(typeof h.then=="function")return fe(p,r,es(h),E);if(h.$$typeof===He)return fe(p,r,Wn(p,h),E);ts(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,r!==null&&r.tag===6?(a(p,r.sibling),E=n(r,h),E.return=p,p=E):(a(p,r),E=Ai(h,p.mode,E),E.return=p,p=E),c(p)):a(p,r)}return function(p,r,h,E){try{Wl=0;var U=fe(p,r,h,E);return pl=null,U}catch(O){if(O===ml||O===$n)throw O;var le=at(29,O,null,p.mode);return le.lanes=E,le.return=p,le}}}var ka=Go(!0),ko=Go(!1),ua=!1;function ki(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(se&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Qn(e),Eo(e,null,a),t}return Xn(e,l,t,a),Qn(e)}function $l(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bu(e,a)}}function Li(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?n=s=c:s=s.next=c,a=a.next}while(a!==null);s===null?n=s=t:s=s.next=t}else n=s=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Yi=!1;function Pl(){if(Yi){var e=fl;if(e!==null)throw e}}function en(e,t,a,l){Yi=!1;var n=e.updateQueue;ua=!1;var s=n.firstBaseUpdate,c=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var o=u,x=o.next;o.next=null,c===null?s=x:c.next=x,c=o;var b=e.alternate;b!==null&&(b=b.updateQueue,u=b.lastBaseUpdate,u!==c&&(u===null?b.firstBaseUpdate=x:u.next=x,b.lastBaseUpdate=o))}if(s!==null){var D=n.baseState;c=0,b=x=o=null,u=s;do{var g=u.lane&-536870913,y=g!==u.lane;if(y?($&g)===g:(l&g)===g){g!==0&&g===dl&&(Yi=!0),b!==null&&(b=b.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var R=e,G=u;g=t;var fe=a;switch(G.tag){case 1:if(R=G.payload,typeof R=="function"){D=R.call(fe,D,g);break e}D=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=G.payload,g=typeof R=="function"?R.call(fe,D,g):R,g==null)break e;D=H({},D,g);break e;case 2:ua=!0}}g=u.callback,g!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[g]:y.push(g))}else y={lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},b===null?(x=b=y,o=D):b=b.next=y,c|=g;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;y=u,u=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);b===null&&(o=D),n.baseState=o,n.firstBaseUpdate=x,n.lastBaseUpdate=b,s===null&&(n.shared.lanes=0),ha|=c,e.lanes=c,e.memoizedState=D}}function Fo(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function Lo(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fo(a[e],t)}var hl=d(null),as=d(0);function Yo(e,t){e=$t,B(as,e),B(hl,t),$t=e|t.baseLanes}function Xi(){B(as,$t),B(hl,hl.current)}function Qi(){$t=as.current,N(hl),N(as)}var lt=d(null),gt=null;function da(e){var t=e.alternate;B(_e,_e.current&1),B(lt,e),gt===null&&(t===null||hl.current!==null||t.memoizedState!==null)&&(gt=e)}function Ji(e){B(_e,_e.current),B(lt,e),gt===null&&(gt=e)}function Xo(e){e.tag===22?(B(_e,_e.current),B(lt,e),gt===null&&(gt=e)):fa()}function fa(){B(_e,_e.current),B(lt,lt.current)}function nt(e){N(lt),gt===e&&(gt=null),N(_e)}var _e=d(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pc(a)||eu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yt=0,X=null,re=null,De=null,ns=!1,xl=!1,Fa=!1,ss=0,tn=0,Sl=null,op=0;function ye(){throw Error(f(321))}function Zi(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!tt(e[a],t[a]))return!1;return!0}function Ki(e,t,a,l,n,s){return Yt=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Ar:rc,Fa=!1,s=a(l,n),Fa=!1,xl&&(s=Jo(t,a,l,n)),Qo(e),s}function Qo(e){_.H=nn;var t=re!==null&&re.next!==null;if(Yt=0,De=re=X=null,ns=!1,tn=0,Sl=null,t)throw Error(f(300));e===null||Te||(e=e.dependencies,e!==null&&Kn(e)&&(Te=!0))}function Jo(e,t,a,l){X=e;var n=0;do{if(xl&&(Sl=null),tn=0,xl=!1,25<=n)throw Error(f(301));if(n+=1,De=re=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=jr,s=t(a,l)}while(xl);return s}function rp(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?an(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(X.flags|=1024),t}function Wi(){var e=ss!==0;return ss=0,e}function Ii(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function $i(e){if(ns){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ns=!1}Yt=0,De=re=X=null,xl=!1,tn=ss=0,Sl=null}function ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?X.memoizedState=De=e:De=De.next=e,De}function Me(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=De===null?X.memoizedState:De.next;if(t!==null)De=t,re=e;else{if(e===null)throw X.alternate===null?Error(f(467)):Error(f(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},De===null?X.memoizedState=De=e:De=De.next=e}return De}function is(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var t=tn;return tn+=1,Sl===null&&(Sl=[]),e=Ho(Sl,e,t),t=X,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Ar:rc),e}function cs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===He)return Re(e)}throw Error(f(438,String(e)))}function Pi(e){var t=null,a=X.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=X.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=is(),X.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Qa;return t.index++,a}function Xt(e,t){return typeof t=="function"?t(e):t}function us(e){var t=Me();return ec(t,re,e)}function ec(e,t,a){var l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var n=e.baseQueue,s=l.pending;if(s!==null){if(n!==null){var c=n.next;n.next=s.next,s.next=c}t.baseQueue=n=s,l.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var u=c=null,o=null,x=t,b=!1;do{var D=x.lane&-536870913;if(D!==x.lane?($&D)===D:(Yt&D)===D){var g=x.revertLane;if(g===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),D===dl&&(b=!0);else if((Yt&g)===g){x=x.next,g===dl&&(b=!0);continue}else D={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},o===null?(u=o=D,c=s):o=o.next=D,X.lanes|=g,ha|=g;D=x.action,Fa&&a(s,D),s=x.hasEagerState?x.eagerState:a(s,D)}else g={lane:D,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},o===null?(u=o=g,c=s):o=o.next=g,X.lanes|=D,ha|=D;x=x.next}while(x!==null&&x!==t);if(o===null?c=s:o.next=u,!tt(s,e.memoizedState)&&(Te=!0,b&&(a=fl,a!==null)))throw a;e.memoizedState=s,e.baseState=c,e.baseQueue=o,l.lastRenderedState=s}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function tc(e){var t=Me(),a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,s=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do s=e(s,c.action),c=c.next;while(c!==n);tt(s,t.memoizedState)||(Te=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,l]}function Zo(e,t,a){var l=X,n=Me(),s=te;if(s){if(a===void 0)throw Error(f(407));a=a()}else a=t();var c=!tt((re||n).memoizedState,a);if(c&&(n.memoizedState=a,Te=!0),n=n.queue,nc(Io.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||De!==null&&De.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},Wo.bind(null,l,n,a,t),null),pe===null)throw Error(f(349));s||(Yt&127)!==0||Ko(l,t,a)}return a}function Ko(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=X.updateQueue,t===null?(t=is(),X.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Wo(e,t,a,l){t.value=a,t.getSnapshot=l,$o(t)&&Po(e)}function Io(e,t,a){return a(function(){$o(t)&&Po(e)})}function $o(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!tt(e,a)}catch{return!0}}function Po(e){var t=za(e,2);t!==null&&Ie(t,e,2)}function ac(e){var t=ke();if(typeof e=="function"){var a=e;if(e=a(),Fa){ta(!0);try{a()}finally{ta(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function er(e,t,a,l){return e.baseState=a,ec(e,re,typeof l=="function"?l:Xt)}function dp(e,t,a,l,n){if(ds(e))throw Error(f(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};_.T!==null?a(!0):s.isTransition=!1,l(s),a=t.pending,a===null?(s.next=t.pending=s,tr(t,s)):(s.next=a.next,t.pending=a.next=s)}}function tr(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var s=_.T,c={};_.T=c;try{var u=a(n,l),o=_.S;o!==null&&o(c,u),ar(e,t,u)}catch(x){lc(e,t,x)}finally{s!==null&&c.types!==null&&(s.types=c.types),_.T=s}}else try{s=a(n,l),ar(e,t,s)}catch(x){lc(e,t,x)}}function ar(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){lr(e,t,l)},function(l){return lc(e,t,l)}):lr(e,t,a)}function lr(e,t,a){t.status="fulfilled",t.value=a,nr(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,tr(e,a)))}function lc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,nr(t),t=t.next;while(t!==l)}e.action=null}function nr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sr(e,t){return t}function ir(e,t){if(te){var a=pe.formState;if(a!==null){e:{var l=X;if(te){if(xe){t:{for(var n=xe,s=St;n.nodeType!==8;){if(!s){n=null;break t}if(n=yt(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){xe=yt(n.nextSibling),l=n.data==="F!";break e}}ia(l)}l=!1}l&&(t=a[0])}}return a=ke(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:t},a.queue=l,a=Dr.bind(null,X,l),l.dispatch=a,l=ac(!1),s=oc.bind(null,X,!1,l.queue),l=ke(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=dp.bind(null,X,n,s,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function cr(e){var t=Me();return ur(t,re,e)}function ur(e,t,a){if(t=ec(e,t,sr)[0],e=us(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=an(t)}catch(c){throw c===ml?$n:c}else l=t;t=Me();var n=t.queue,s=n.dispatch;return a!==t.memoizedState&&(X.flags|=2048,gl(9,{destroy:void 0},fp.bind(null,n,a),null)),[l,s,e]}function fp(e,t){e.action=t}function or(e){var t=Me(),a=re;if(a!==null)return ur(t,a,e);Me(),t=t.memoizedState,a=Me();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function gl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=X.updateQueue,t===null&&(t=is(),X.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function rr(){return Me().memoizedState}function os(e,t,a,l){var n=ke();X.flags|=e,n.memoizedState=gl(1|t,{destroy:void 0},a,l===void 0?null:l)}function rs(e,t,a,l){var n=Me();l=l===void 0?null:l;var s=n.memoizedState.inst;re!==null&&l!==null&&Zi(l,re.memoizedState.deps)?n.memoizedState=gl(t,s,a,l):(X.flags|=e,n.memoizedState=gl(1|t,s,a,l))}function dr(e,t){os(8390656,8,e,t)}function nc(e,t){rs(2048,8,e,t)}function mp(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=is(),X.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function fr(e){var t=Me().memoizedState;return mp({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function mr(e,t){return rs(4,2,e,t)}function pr(e,t){return rs(4,4,e,t)}function hr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xr(e,t,a){a=a!=null?a.concat([e]):null,rs(4,4,hr.bind(null,t,e),a)}function sc(){}function Sr(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Zi(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function gr(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Zi(t,l[1]))return l[0];if(l=e(),Fa){ta(!0);try{e()}finally{ta(!1)}}return a.memoizedState=[l,t],l}function ic(e,t,a){return a===void 0||(Yt&1073741824)!==0&&($&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=yd(),X.lanes|=e,ha|=e,a)}function yr(e,t,a,l){return tt(a,t)?a:hl.current!==null?(e=ic(e,a,l),tt(e,t)||(Te=!0),e):(Yt&42)===0||(Yt&1073741824)!==0&&($&261930)===0?(Te=!0,e.memoizedState=a):(e=yd(),X.lanes|=e,ha|=e,t)}function vr(e,t,a,l,n){var s=C.p;C.p=s!==0&&8>s?s:8;var c=_.T,u={};_.T=u,oc(e,!1,t,a);try{var o=n(),x=_.S;if(x!==null&&x(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var b=up(o,l);ln(e,t,b,ct(e))}else ln(e,t,l,ct(e))}catch(D){ln(e,t,{then:function(){},status:"rejected",reason:D},ct())}finally{C.p=s,c!==null&&u.types!==null&&(c.types=u.types),_.T=c}}function pp(){}function cc(e,t,a,l){if(e.tag!==5)throw Error(f(476));var n=br(e).queue;vr(e,n,t,k,a===null?pp:function(){return _r(e),a(l)})}function br(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:k},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _r(e){var t=br(e);t.next===null&&(t=e.alternate.memoizedState),ln(e,t.next.queue,{},ct())}function uc(){return Re(bn)}function Mr(){return Me().memoizedState}function Er(){return Me().memoizedState}function hp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ct();e=oa(a);var l=ra(t,e,a);l!==null&&(Ie(l,t,a),$l(l,t,a)),t={cache:Hi()},e.payload=t;return}t=t.return}}function xp(e,t,a){var l=ct();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ds(e)?Tr(t,a):(a=Ti(e,t,a,l),a!==null&&(Ie(a,e,l),Nr(a,t,l)))}function Dr(e,t,a){var l=ct();ln(e,t,a,l)}function ln(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ds(e))Tr(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,u=s(c,a);if(n.hasEagerState=!0,n.eagerState=u,tt(u,c))return Xn(e,t,n,0),pe===null&&Yn(),!1}catch{}if(a=Ti(e,t,n,l),a!==null)return Ie(a,e,l),Nr(a,t,l),!0}return!1}function oc(e,t,a,l){if(l={lane:2,revertLane:kc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ds(e)){if(t)throw Error(f(479))}else t=Ti(e,a,l,2),t!==null&&Ie(t,e,2)}function ds(e){var t=e.alternate;return e===X||t!==null&&t===X}function Tr(e,t){xl=ns=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Nr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bu(e,a)}}var nn={readContext:Re,use:cs,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};nn.useEffectEvent=ye;var Ar={readContext:Re,use:cs,useCallback:function(e,t){return ke().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:dr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,os(4194308,4,hr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var a=ke();t=t===void 0?null:t;var l=e();if(Fa){ta(!0);try{e()}finally{ta(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ke();if(a!==void 0){var n=a(t);if(Fa){ta(!0);try{a(t)}finally{ta(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=xp.bind(null,X,e),[l.memoizedState,e]},useRef:function(e){var t=ke();return e={current:e},t.memoizedState=e},useState:function(e){e=ac(e);var t=e.queue,a=Dr.bind(null,X,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:sc,useDeferredValue:function(e,t){var a=ke();return ic(a,e,t)},useTransition:function(){var e=ac(!1);return e=vr.bind(null,X,e.queue,!0,!1),ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=X,n=ke();if(te){if(a===void 0)throw Error(f(407));a=a()}else{if(a=t(),pe===null)throw Error(f(349));($&127)!==0||Ko(l,t,a)}n.memoizedState=a;var s={value:a,getSnapshot:t};return n.queue=s,dr(Io.bind(null,l,s,e),[e]),l.flags|=2048,gl(9,{destroy:void 0},Wo.bind(null,l,s,a,t),null),a},useId:function(){var e=ke(),t=pe.identifierPrefix;if(te){var a=zt,l=wt;a=(l&~(1<<32-et(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ss++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=op++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:uc,useFormState:ir,useActionState:ir,useOptimistic:function(e){var t=ke();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=oc.bind(null,X,!0,a),a.dispatch=t,[e,t]},useMemoCache:Pi,useCacheRefresh:function(){return ke().memoizedState=hp.bind(null,X)},useEffectEvent:function(e){var t=ke(),a={impl:e};return t.memoizedState=a,function(){if((se&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},rc={readContext:Re,use:cs,useCallback:Sr,useContext:Re,useEffect:nc,useImperativeHandle:xr,useInsertionEffect:mr,useLayoutEffect:pr,useMemo:gr,useReducer:us,useRef:rr,useState:function(){return us(Xt)},useDebugValue:sc,useDeferredValue:function(e,t){var a=Me();return yr(a,re.memoizedState,e,t)},useTransition:function(){var e=us(Xt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Zo,useId:Mr,useHostTransitionStatus:uc,useFormState:cr,useActionState:cr,useOptimistic:function(e,t){var a=Me();return er(a,re,e,t)},useMemoCache:Pi,useCacheRefresh:Er};rc.useEffectEvent=fr;var jr={readContext:Re,use:cs,useCallback:Sr,useContext:Re,useEffect:nc,useImperativeHandle:xr,useInsertionEffect:mr,useLayoutEffect:pr,useMemo:gr,useReducer:tc,useRef:rr,useState:function(){return tc(Xt)},useDebugValue:sc,useDeferredValue:function(e,t){var a=Me();return re===null?ic(a,e,t):yr(a,re.memoizedState,e,t)},useTransition:function(){var e=tc(Xt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Zo,useId:Mr,useHostTransitionStatus:uc,useFormState:or,useActionState:or,useOptimistic:function(e,t){var a=Me();return re!==null?er(a,re,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Pi,useCacheRefresh:Er};jr.useEffectEvent=fr;function dc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:H({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var fc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ct(),n=oa(l);n.payload=t,a!=null&&(n.callback=a),t=ra(e,n,l),t!==null&&(Ie(t,e,l),$l(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ct(),n=oa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ra(e,n,l),t!==null&&(Ie(t,e,l),$l(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ct(),l=oa(a);l.tag=2,t!=null&&(l.callback=t),t=ra(e,l,a),t!==null&&(Ie(t,e,a),$l(t,e,a))}};function Cr(e,t,a,l,n,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,c):t.prototype&&t.prototype.isPureReactComponent?!Yl(a,l)||!Yl(n,s):!0}function Br(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function La(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=H({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function wr(e){Ln(e)}function zr(e){console.error(e)}function Rr(e){Ln(e)}function fs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Vr(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function mc(e,t,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){fs(e,t)},a}function Or(e){return e=oa(e),e.tag=3,e}function Hr(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var s=l.value;e.payload=function(){return n(s)},e.callback=function(){Vr(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Vr(t,a,l),typeof n!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Sp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&rl(t,a,n,!0),a=lt.current,a!==null){switch(a.tag){case 31:case 13:return gt===null?Es():a.alternate===null&&ve===0&&(ve=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Pn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Uc(e,l,n)),!1;case 22:return a.flags|=65536,l===Pn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Uc(e,l,n)),!1}throw Error(f(435,a.tag))}return Uc(e,l,n),Es(),!1}if(te)return t=lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==wi&&(e=Error(f(422),{cause:l}),Jl(pt(e,a)))):(l!==wi&&(t=Error(f(423),{cause:l}),Jl(pt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=pt(l,a),n=mc(e.stateNode,l,n),Li(e,n),ve!==4&&(ve=2)),!1;var s=Error(f(520),{cause:l});if(s=pt(s,a),mn===null?mn=[s]:mn.push(s),ve!==4&&(ve=2),t===null)return!0;l=pt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=mc(a.stateNode,l,e),Li(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Or(n),Hr(n,e,a,l),Li(a,n),!1}a=a.return}while(a!==null);return!1}var pc=Error(f(461)),Te=!1;function Ve(e,t,a,l){t.child=e===null?ko(t,null,a,l):ka(t,e.child,a,l)}function Ur(e,t,a,l,n){a=a.render;var s=t.ref;if("ref"in l){var c={};for(var u in l)u!=="ref"&&(c[u]=l[u])}else c=l;return Ha(t),l=Ki(e,t,a,c,s,n),u=Wi(),e!==null&&!Te?(Ii(e,t,n),Qt(e,t,n)):(te&&u&&Ci(t),t.flags|=1,Ve(e,t,l,n),t.child)}function qr(e,t,a,l,n){if(e===null){var s=a.type;return typeof s=="function"&&!Ni(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Gr(e,t,s,l,n)):(e=Jn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!_c(e,n)){var c=s.memoizedProps;if(a=a.compare,a=a!==null?a:Yl,a(c,l)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=Gt(s,l),e.ref=t.ref,e.return=t,t.child=e}function Gr(e,t,a,l,n){if(e!==null){var s=e.memoizedProps;if(Yl(s,l)&&e.ref===t.ref)if(Te=!1,t.pendingProps=l=s,_c(e,n))(e.flags&131072)!==0&&(Te=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return hc(e,t,a,l,n)}function kr(e,t,a,l){var n=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~s}else l=0,t.child=null;return Fr(e,t,s,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&In(t,s!==null?s.cachePool:null),s!==null?Yo(t,s):Xi(),Xo(t);else return l=t.lanes=536870912,Fr(e,t,s!==null?s.baseLanes|a:a,a,l)}else s!==null?(In(t,s.cachePool),Yo(t,s),fa(),t.memoizedState=null):(e!==null&&In(t,null),Xi(),fa());return Ve(e,t,n,a),t.child}function sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fr(e,t,a,l,n){var s=qi();return s=s===null?null:{parent:Ee._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&In(t,null),Xi(),Xo(t),e!==null&&rl(e,t,l,!0),t.childLanes=n,null}function ms(e,t){return t=hs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lr(e,t,a){return ka(t,e.child,null,a),e=ms(t,t.pendingProps),e.flags|=2,nt(t),t.memoizedState=null,e}function gp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(l.mode==="hidden")return e=ms(t,l),t.lanes=536870912,sn(null,e);if(Ji(t),(e=xe)?(e=tf(e,St),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},a=To(e),a.return=t,t.child=a,ze=t,xe=null)):e=null,e===null)throw ia(t);return t.lanes=536870912,null}return ms(t,l)}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(Ji(t),n)if(t.flags&256)t.flags&=-257,t=Lr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(Te||rl(e,t,a,!1),n=(a&e.childLanes)!==0,Te||n){if(l=pe,l!==null&&(c=wu(l,a),c!==0&&c!==s.retryLane))throw s.retryLane=c,za(e,c),Ie(l,e,c),pc;Es(),t=Lr(e,t,a)}else e=s.treeContext,xe=yt(c.nextSibling),ze=t,te=!0,sa=null,St=!1,e!==null&&jo(t,e),t=ms(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ps(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function hc(e,t,a,l,n){return Ha(t),a=Ki(e,t,a,l,void 0,n),l=Wi(),e!==null&&!Te?(Ii(e,t,n),Qt(e,t,n)):(te&&l&&Ci(t),t.flags|=1,Ve(e,t,a,n),t.child)}function Yr(e,t,a,l,n,s){return Ha(t),t.updateQueue=null,a=Jo(t,l,a,n),Qo(e),l=Wi(),e!==null&&!Te?(Ii(e,t,s),Qt(e,t,s)):(te&&l&&Ci(t),t.flags|=1,Ve(e,t,a,s),t.child)}function Xr(e,t,a,l,n){if(Ha(t),t.stateNode===null){var s=il,c=a.contextType;typeof c=="object"&&c!==null&&(s=Re(c)),s=new a(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=fc,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},ki(t),c=a.contextType,s.context=typeof c=="object"&&c!==null?Re(c):il,s.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(dc(t,a,c,l),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&fc.enqueueReplaceState(s,s.state,null),en(t,l,s,n),Pl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var u=t.memoizedProps,o=La(a,u);s.props=o;var x=s.context,b=a.contextType;c=il,typeof b=="object"&&b!==null&&(c=Re(b));var D=a.getDerivedStateFromProps;b=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,b||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u||x!==c)&&Br(t,s,l,c),ua=!1;var g=t.memoizedState;s.state=g,en(t,l,s,n),Pl(),x=t.memoizedState,u||g!==x||ua?(typeof D=="function"&&(dc(t,a,D,l),x=t.memoizedState),(o=ua||Cr(t,a,o,l,g,x,c))?(b||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=x),s.props=l,s.state=x,s.context=c,l=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,Fi(e,t),c=t.memoizedProps,b=La(a,c),s.props=b,D=t.pendingProps,g=s.context,x=a.contextType,o=il,typeof x=="object"&&x!==null&&(o=Re(x)),u=a.getDerivedStateFromProps,(x=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==D||g!==o)&&Br(t,s,l,o),ua=!1,g=t.memoizedState,s.state=g,en(t,l,s,n),Pl();var y=t.memoizedState;c!==D||g!==y||ua||e!==null&&e.dependencies!==null&&Kn(e.dependencies)?(typeof u=="function"&&(dc(t,a,u,l),y=t.memoizedState),(b=ua||Cr(t,a,b,l,g,y,o)||e!==null&&e.dependencies!==null&&Kn(e.dependencies))?(x||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,y,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,y,o)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),s.props=l,s.state=y,s.context=o,l=b):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,ps(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=ka(t,e.child,null,n),t.child=ka(t,null,a,n)):Ve(e,t,a,n),t.memoizedState=s.state,e=t.child):e=Qt(e,t,n),e}function Qr(e,t,a,l){return Va(),t.flags|=256,Ve(e,t,a,l),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Vo()}}function gc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=it),e}function Jr(e,t,a){var l=t.pendingProps,n=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(n?da(t):fa(),(e=xe)?(e=tf(e,St),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},a=To(e),a.return=t,t.child=a,ze=t,xe=null)):e=null,e===null)throw ia(t);return eu(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(fa(),n=t.mode,u=hs({mode:"hidden",children:u},n),l=Ra(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=Sc(a),l.childLanes=gc(e,c,a),t.memoizedState=xc,sn(null,l)):(da(t),yc(t,u))}var o=e.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(s)t.flags&256?(da(t),t.flags&=-257,t=vc(e,t,a)):t.memoizedState!==null?(fa(),t.child=e.child,t.flags|=128,t=null):(fa(),u=l.fallback,n=t.mode,l=hs({mode:"visible",children:l.children},n),u=Ra(u,n,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,ka(t,e.child,null,a),l=t.child,l.memoizedState=Sc(a),l.childLanes=gc(e,c,a),t.memoizedState=xc,t=sn(null,l));else if(da(t),eu(u)){if(c=u.nextSibling&&u.nextSibling.dataset,c)var x=c.dgst;c=x,l=Error(f(419)),l.stack="",l.digest=c,Jl({value:l,source:null,stack:null}),t=vc(e,t,a)}else if(Te||rl(e,t,a,!1),c=(a&e.childLanes)!==0,Te||c){if(c=pe,c!==null&&(l=wu(c,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,za(e,l),Ie(c,e,l),pc;Pc(u)||Es(),t=vc(e,t,a)}else Pc(u)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,xe=yt(u.nextSibling),ze=t,te=!0,sa=null,St=!1,e!==null&&jo(t,e),t=yc(t,l.children),t.flags|=4096);return t}return n?(fa(),u=l.fallback,n=t.mode,o=e.child,x=o.sibling,l=Gt(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,x!==null?u=Gt(x,u):(u=Ra(u,n,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,sn(null,l),l=t.child,u=e.child.memoizedState,u===null?u=Sc(a):(n=u.cachePool,n!==null?(o=Ee._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Vo(),u={baseLanes:u.baseLanes|a,cachePool:n}),l.memoizedState=u,l.childLanes=gc(e,c,a),t.memoizedState=xc,sn(e.child,l)):(da(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function yc(e,t){return t=hs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hs(e,t){return e=at(22,e,null,t),e.lanes=0,e}function vc(e,t,a){return ka(t,e.child,null,a),e=yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zr(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Vi(e.return,t,a)}function bc(e,t,a,l,n,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=s)}function Kr(e,t,a){var l=t.pendingProps,n=l.revealOrder,s=l.tail;l=l.children;var c=_e.current,u=(c&2)!==0;if(u?(c=c&1|2,t.flags|=128):c&=1,B(_e,c),Ve(e,t,l,a),l=te?Ql:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zr(e,a,t);else if(e.tag===19)Zr(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ls(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),bc(t,!1,n,a,s,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ls(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}bc(t,!0,a,null,s,l);break;case"together":bc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(rl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function _c(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kn(e)))}function yp(e,t,a){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),ca(t,Ee,e.memoizedState.cache),Va();break;case 27:case 5:Bl(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:ca(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ji(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(da(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Jr(e,t,a):(da(t),e=Qt(e,t,a),e!==null?e.sibling:null);da(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(rl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Kr(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(_e,_e.current),l)break;return null;case 22:return t.lanes=0,kr(e,t,a,t.pendingProps);case 24:ca(t,Ee,e.memoizedState.cache)}return Qt(e,t,a)}function Wr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Te=!0;else{if(!_c(e,a)&&(t.flags&128)===0)return Te=!1,yp(e,t,a);Te=(e.flags&131072)!==0}else Te=!1,te&&(t.flags&1048576)!==0&&Ao(t,Ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e=="function")Ni(e)?(l=La(e,l),t.tag=1,t=Xr(null,t,e,l,a)):(t.tag=0,t=hc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===rt){t.tag=11,t=Ur(null,t,e,l,a);break e}else if(n===ee){t.tag=14,t=qr(null,t,e,l,a);break e}}throw t=Ot(e)||e,Error(f(306,t,""))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=La(l,t.pendingProps),Xr(e,t,l,n,a);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(f(387));l=t.pendingProps;var s=t.memoizedState;n=s.element,Fi(e,t),en(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ca(t,Ee,l),l!==s.cache&&Oi(t,[Ee],a,!0),Pl(),l=c.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Qr(e,t,l,a);break e}else if(l!==n){n=pt(Error(f(424)),t),Jl(n),t=Qr(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,xe=yt(e.firstChild),ze=t,te=!0,sa=null,St=!0,a=ko(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Va(),l===n){t=Qt(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return ps(e,t),e===null?(a=uf(t.type,null,t.pendingProps,null))?t.memoizedState=a:te||(a=t.type,e=t.pendingProps,l=Bs(Z.current).createElement(a),l[we]=t,l[Xe]=e,Oe(l,a,e),Ce(l),t.stateNode=l):t.memoizedState=uf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bl(t),e===null&&te&&(l=t.stateNode=nf(t.type,t.pendingProps,Z.current),ze=t,St=!0,n=xe,va(t.type)?(tu=n,xe=yt(l.firstChild)):xe=n),Ve(e,t,t.pendingProps.children,a),ps(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((n=l=xe)&&(l=Kp(l,t.type,t.pendingProps,St),l!==null?(t.stateNode=l,ze=t,xe=yt(l.firstChild),St=!1,n=!0):n=!1),n||ia(t)),Bl(t),n=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,l=s.children,Wc(n,s)?l=null:c!==null&&Wc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Ki(e,t,rp,null,null,a),bn._currentValue=n),ps(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&te&&((e=a=xe)&&(a=Wp(a,t.pendingProps,St),a!==null?(t.stateNode=a,ze=t,xe=null,e=!0):e=!1),e||ia(t)),null;case 13:return Jr(e,t,a);case 4:return Ge(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ka(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return Ur(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ca(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ha(t),n=Re(n),l=l(n),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return qr(e,t,t.type,t.pendingProps,a);case 15:return Gr(e,t,t.type,t.pendingProps,a);case 19:return Kr(e,t,a);case 31:return gp(e,t,a);case 22:return kr(e,t,a,t.pendingProps);case 24:return Ha(t),l=Re(Ee),e===null?(n=qi(),n===null&&(n=pe,s=Hi(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=a),n=s),t.memoizedState={parent:l,cache:n},ki(t),ca(t,Ee,n)):((e.lanes&a)!==0&&(Fi(e,t),en(t,null,null,a),Pl()),n=e.memoizedState,s=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ca(t,Ee,l)):(l=s.cache,ca(t,Ee,l),l!==n.cache&&Oi(t,[Ee],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function Jt(e){e.flags|=4}function Mc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Md())e.flags|=8192;else throw Ga=Pn,Gi}else e.flags&=-16777217}function Ir(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mf(t))if(Md())e.flags|=8192;else throw Ga=Pn,Gi}function xs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ju():536870912,e.lanes|=t,_l|=t)}function cn(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function vp(e,t,a){var l=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Lt(Ee),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ol(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zi())),Se(t),null;case 26:var n=t.type,s=t.memoizedState;return e===null?(Jt(t),s!==null?(Se(t),Ir(t,s)):(Se(t),Mc(t,n,null,l,a))):s?s!==e.memoizedState?(Jt(t),Se(t),Ir(t,s)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Jt(t),Se(t),Mc(t,n,e,l,a)),null;case 27:if(Nn(t),a=Z.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return Se(t),null}e=V.current,ol(t)?Co(t):(e=nf(n,l,a),t.stateNode=e,Jt(t))}return Se(t),null;case 5:if(Nn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return Se(t),null}if(s=V.current,ol(t))Co(t);else{var c=Bs(Z.current);switch(s){case 1:s=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:s=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":s=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":s=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":s=c.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}s[we]=t,s[Xe]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=s;e:switch(Oe(s,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Jt(t)}}return Se(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(f(166));if(e=Z.current,ol(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=ze,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[we]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Jd(e.nodeValue,a)),e||ia(t,!0)}else e=Bs(e).createTextNode(l),e[we]=t,t.stateNode=e}return Se(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ol(t),a!==null){if(e===null){if(!l)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[we]=t}else Va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(nt(t),t):(nt(t),null);if((t.flags&128)!==0)throw Error(f(558))}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ol(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(f(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[we]=t}else Va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),n=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(nt(t),t):(nt(t),null)}return nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),xs(t,t.updateQueue),Se(t),null);case 4:return be(),e===null&&Xc(t.stateNode.containerInfo),Se(t),null;case 10:return Lt(t.type),Se(t),null;case 19:if(N(_e),l=t.memoizedState,l===null)return Se(t),null;if(n=(t.flags&128)!==0,s=l.rendering,s===null)if(n)cn(l,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ls(e),s!==null){for(t.flags|=128,cn(l,!1),e=s.updateQueue,t.updateQueue=e,xs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Do(a,e),a=a.sibling;return B(_e,_e.current&1|2),te&&kt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&$e()>bs&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304)}else{if(!n)if(e=ls(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,xs(t,e),cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!te)return Se(t),null}else 2*$e()-l.renderingStartTime>bs&&a!==536870912&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=$e(),e.sibling=null,a=_e.current,B(_e,n?a&1|2:a&1),te&&kt(t,l.treeForkCount),e):(Se(t),null);case 22:case 23:return nt(t),Qi(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&xs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&N(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(Ee),Se(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function bp(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(Ee),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nn(t),null;case 31:if(t.memoizedState!==null){if(nt(t),t.alternate===null)throw Error(f(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(_e),null;case 4:return be(),null;case 10:return Lt(t.type),null;case 22:case 23:return nt(t),Qi(),e!==null&&N(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(Ee),null;case 25:return null;default:return null}}function $r(e,t){switch(Bi(t),t.tag){case 3:Lt(Ee),be();break;case 26:case 27:case 5:Nn(t);break;case 4:be();break;case 31:t.memoizedState!==null&&nt(t);break;case 13:nt(t);break;case 19:N(_e);break;case 10:Lt(t.type);break;case 22:case 23:nt(t),Qi(),e!==null&&N(Ua);break;case 24:Lt(Ee)}}function un(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var s=a.create,c=a.inst;l=s(),c.destroy=l}a=a.next}while(a!==n)}}catch(u){ue(t,t.return,u)}}function ma(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var s=n.next;l=s;do{if((l.tag&e)===e){var c=l.inst,u=c.destroy;if(u!==void 0){c.destroy=void 0,n=t;var o=a,x=u;try{x()}catch(b){ue(n,o,b)}}}l=l.next}while(l!==s)}}catch(b){ue(t,t.return,b)}}function Pr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Lo(t,a)}catch(l){ue(e,e.return,l)}}}function ed(e,t,a){a.props=La(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ue(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ue(e,t,n)}}function Rt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ue(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ue(e,t,n)}else a.current=null}function td(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ue(e,e.return,n)}}function Ec(e,t,a){try{var l=e.stateNode;Lp(l,e.type,a,t),l[Xe]=t}catch(n){ue(e,e.return,n)}}function ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&va(e.type)||e.tag===4}function Dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ut));else if(l!==4&&(l===27&&va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Tc(e,t,a),e=e.sibling;e!==null;)Tc(e,t,a),e=e.sibling}function Ss(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ss(e,t,a),e=e.sibling;e!==null;)Ss(e,t,a),e=e.sibling}function ld(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Oe(t,l,a),t[we]=e,t[Xe]=a}catch(s){ue(e,e.return,s)}}var Zt=!1,Ne=!1,Nc=!1,nd=typeof WeakSet=="function"?WeakSet:Set,Be=null;function _p(e,t){if(e=e.containerInfo,Zc=Us,e=xo(e),vi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var c=0,u=-1,o=-1,x=0,b=0,D=e,g=null;t:for(;;){for(var y;D!==a||n!==0&&D.nodeType!==3||(u=c+n),D!==s||l!==0&&D.nodeType!==3||(o=c+l),D.nodeType===3&&(c+=D.nodeValue.length),(y=D.firstChild)!==null;)g=D,D=y;for(;;){if(D===e)break t;if(g===a&&++x===n&&(u=c),g===s&&++b===l&&(o=c),(y=D.nextSibling)!==null)break;D=g,g=D.parentNode}D=y}a=u===-1||o===-1?null:{start:u,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kc={focusedElem:e,selectionRange:a},Us=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,n=s.memoizedProps,s=s.memoizedState,l=a.stateNode;try{var R=La(a.type,n);e=l.getSnapshotBeforeUpdate(R,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(G){ue(a,a.return,G)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)$c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}}function sd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wt(e,a),l&4&&un(5,a);break;case 1:if(Wt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ue(a,a.return,c)}else{var n=La(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ue(a,a.return,c)}}l&64&&Pr(a),l&512&&on(a,a.return);break;case 3:if(Wt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Lo(e,t)}catch(c){ue(a,a.return,c)}}break;case 27:t===null&&l&4&&ld(a);case 26:case 5:Wt(e,a),t===null&&l&4&&td(a),l&512&&on(a,a.return);break;case 12:Wt(e,a);break;case 31:Wt(e,a),l&4&&ud(e,a);break;case 13:Wt(e,a),l&4&&od(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bp.bind(null,a),Ip(e,a))));break;case 22:if(l=a.memoizedState!==null||Zt,!l){t=t!==null&&t.memoizedState!==null||Ne,n=Zt;var s=Ne;Zt=l,(Ne=t)&&!s?It(e,a,(a.subtreeFlags&8772)!==0):Wt(e,a),Zt=n,Ne=s}break;case 30:break;default:Wt(e,a)}}function id(e){var t=e.alternate;t!==null&&(e.alternate=null,id(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&li(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Je=!1;function Kt(e,t,a){for(a=a.child;a!==null;)cd(e,t,a),a=a.sibling}function cd(e,t,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(wl,a)}catch{}switch(a.tag){case 26:Ne||Rt(a,t),Kt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ne||Rt(a,t);var l=ge,n=Je;va(a.type)&&(ge=a.stateNode,Je=!1),Kt(e,t,a),gn(a.stateNode),ge=l,Je=n;break;case 5:Ne||Rt(a,t);case 6:if(l=ge,n=Je,ge=null,Kt(e,t,a),ge=l,Je=n,ge!==null)if(Je)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(a.stateNode)}catch(s){ue(a,t,s)}else try{ge.removeChild(a.stateNode)}catch(s){ue(a,t,s)}break;case 18:ge!==null&&(Je?(e=ge,Pd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cl(e)):Pd(ge,a.stateNode));break;case 4:l=ge,n=Je,ge=a.stateNode.containerInfo,Je=!0,Kt(e,t,a),ge=l,Je=n;break;case 0:case 11:case 14:case 15:ma(2,a,t),Ne||ma(4,a,t),Kt(e,t,a);break;case 1:Ne||(Rt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ed(a,t,l)),Kt(e,t,a);break;case 21:Kt(e,t,a);break;case 22:Ne=(l=Ne)||a.memoizedState!==null,Kt(e,t,a),Ne=l;break;default:Kt(e,t,a)}}function ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(a){ue(t,t.return,a)}}}function od(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(a){ue(t,t.return,a)}}function Mp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nd),t;default:throw Error(f(435,e.tag))}}function gs(e,t){var a=Mp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=wp.bind(null,e,l);l.then(n,n)}})}function Ze(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],s=e,c=t,u=c;e:for(;u!==null;){switch(u.tag){case 27:if(va(u.type)){ge=u.stateNode,Je=!1;break e}break;case 5:ge=u.stateNode,Je=!1;break e;case 3:case 4:ge=u.stateNode.containerInfo,Je=!0;break e}u=u.return}if(ge===null)throw Error(f(160));cd(s,c,n),ge=null,Je=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rd(t,e),t=t.sibling}var Et=null;function rd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ze(t,e),Ke(e),l&4&&(ma(3,e,e.return),un(3,e),ma(5,e,e.return));break;case 1:Ze(t,e),Ke(e),l&512&&(Ne||a===null||Rt(a,a.return)),l&64&&Zt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Et;if(Ze(t,e),Ke(e),l&512&&(Ne||a===null||Rt(a,a.return)),l&4){var s=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":s=n.getElementsByTagName("title")[0],(!s||s[Vl]||s[we]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(l),n.head.insertBefore(s,n.querySelector("head > title"))),Oe(s,l,a),s[we]=e,Ce(s),l=s;break e;case"link":var c=df("link","href",n).get(l+(a.href||""));if(c){for(var u=0;u<c.length;u++)if(s=c[u],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(u,1);break t}}s=n.createElement(l),Oe(s,l,a),n.head.appendChild(s);break;case"meta":if(c=df("meta","content",n).get(l+(a.content||""))){for(u=0;u<c.length;u++)if(s=c[u],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(u,1);break t}}s=n.createElement(l),Oe(s,l,a),n.head.appendChild(s);break;default:throw Error(f(468,l))}s[we]=e,Ce(s),l=s}e.stateNode=l}else ff(n,e.type,e.stateNode);else e.stateNode=rf(n,l,e.memoizedProps);else s!==l?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,l===null?ff(n,e.type,e.stateNode):rf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ec(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ze(t,e),Ke(e),l&512&&(Ne||a===null||Rt(a,a.return)),a!==null&&l&4&&Ec(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ze(t,e),Ke(e),l&512&&(Ne||a===null||Rt(a,a.return)),e.flags&32){n=e.stateNode;try{Pa(n,"")}catch(R){ue(e,e.return,R)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Ec(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Nc=!0);break;case 6:if(Ze(t,e),Ke(e),l&4){if(e.stateNode===null)throw Error(f(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(R){ue(e,e.return,R)}}break;case 3:if(Rs=null,n=Et,Et=ws(t.containerInfo),Ze(t,e),Et=n,Ke(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(R){ue(e,e.return,R)}Nc&&(Nc=!1,dd(e));break;case 4:l=Et,Et=ws(e.stateNode.containerInfo),Ze(t,e),Ke(e),Et=l;break;case 12:Ze(t,e),Ke(e);break;case 31:Ze(t,e),Ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gs(e,l)));break;case 13:Ze(t,e),Ke(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vs=$e()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gs(e,l)));break;case 22:n=e.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,x=Zt,b=Ne;if(Zt=x||n,Ne=b||o,Ze(t,e),Ne=b,Zt=x,Ke(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||o||Zt||Ne||Ya(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(s=o.stateNode,n)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{u=o.stateNode;var D=o.memoizedProps.style,g=D!=null&&D.hasOwnProperty("display")?D.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(R){ue(o,o.return,R)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(R){ue(o,o.return,R)}}}else if(t.tag===18){if(a===null){o=t;try{var y=o.stateNode;n?ef(y,!0):ef(o.stateNode,!1)}catch(R){ue(o,o.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,gs(e,a))));break;case 19:Ze(t,e),Ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gs(e,l)));break;case 30:break;case 21:break;default:Ze(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(ad(l)){a=l;break}l=l.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var n=a.stateNode,s=Dc(e);Ss(e,s,n);break;case 5:var c=a.stateNode;a.flags&32&&(Pa(c,""),a.flags&=-33);var u=Dc(e);Ss(e,u,c);break;case 3:case 4:var o=a.stateNode.containerInfo,x=Dc(e);Tc(e,x,o);break;default:throw Error(f(161))}}catch(b){ue(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sd(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ma(4,t,t.return),Ya(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ed(t,t.return,a),Ya(t);break;case 27:gn(t.stateNode);case 26:case 5:Rt(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function It(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,s=t,c=s.flags;switch(s.tag){case 0:case 11:case 15:It(n,s,a),un(4,s);break;case 1:if(It(n,s,a),l=s,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(x){ue(l,l.return,x)}if(l=s,n=l.updateQueue,n!==null){var u=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Fo(o[n],u)}catch(x){ue(l,l.return,x)}}a&&c&64&&Pr(s),on(s,s.return);break;case 27:ld(s);case 26:case 5:It(n,s,a),a&&l===null&&c&4&&td(s),on(s,s.return);break;case 12:It(n,s,a);break;case 31:It(n,s,a),a&&c&4&&ud(n,s);break;case 13:It(n,s,a),a&&c&4&&od(n,s);break;case 22:s.memoizedState===null&&It(n,s,a),on(s,s.return);break;case 30:break;default:It(n,s,a)}t=t.sibling}}function Ac(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zl(a))}function jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fd(e,t,a,l),t=t.sibling}function fd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),n&2048&&un(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e)));break;case 12:if(n&2048){Dt(e,t,a,l),e=t.stateNode;try{var s=t.memoizedProps,c=s.id,u=s.onPostCommit;typeof u=="function"&&u(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ue(t,t.return,o)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:s=t.stateNode,c=t.alternate,t.memoizedState!==null?s._visibility&2?Dt(e,t,a,l):rn(e,t):s._visibility&2?Dt(e,t,a,l):(s._visibility|=2,yl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ac(c,t);break;case 24:Dt(e,t,a,l),n&2048&&jc(t.alternate,t);break;default:Dt(e,t,a,l)}}function yl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,c=t,u=a,o=l,x=c.flags;switch(c.tag){case 0:case 11:case 15:yl(s,c,u,o,n),un(8,c);break;case 23:break;case 22:var b=c.stateNode;c.memoizedState!==null?b._visibility&2?yl(s,c,u,o,n):rn(s,c):(b._visibility|=2,yl(s,c,u,o,n)),n&&x&2048&&Ac(c.alternate,c);break;case 24:yl(s,c,u,o,n),n&&x&2048&&jc(c.alternate,c);break;default:yl(s,c,u,o,n)}t=t.sibling}}function rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:rn(a,l),n&2048&&Ac(l.alternate,l);break;case 24:rn(a,l),n&2048&&jc(l.alternate,l);break;default:rn(a,l)}t=t.sibling}}var dn=8192;function vl(e,t,a){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)md(e,t,a),e=e.sibling}function md(e,t,a){switch(e.tag){case 26:vl(e,t,a),e.flags&dn&&e.memoizedState!==null&&o1(a,Et,e.memoizedState,e.memoizedProps);break;case 5:vl(e,t,a);break;case 3:case 4:var l=Et;Et=ws(e.stateNode.containerInfo),vl(e,t,a),Et=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=dn,dn=16777216,vl(e,t,a),dn=l):vl(e,t,a));break;default:vl(e,t,a)}}function pd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Be=l,xd(l,e)}pd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hd(e),e=e.sibling}function hd(e){switch(e.tag){case 0:case 11:case 15:fn(e),e.flags&2048&&ma(9,e,e.return);break;case 3:fn(e);break;case 12:fn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ys(e)):fn(e);break;default:fn(e)}}function ys(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Be=l,xd(l,e)}pd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),ys(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ys(t));break;default:ys(t)}e=e.sibling}}function xd(e,t){for(;Be!==null;){var a=Be;switch(a.tag){case 0:case 11:case 15:ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Be=l;else e:for(a=e;Be!==null;){l=Be;var n=l.sibling,s=l.return;if(id(l),l===a){Be=null;break e}if(n!==null){n.return=s,Be=n;break e}Be=s}}}var Ep={getCacheForType:function(e){var t=Re(Ee),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Re(Ee).controller.signal}},Dp=typeof WeakMap=="function"?WeakMap:Map,se=0,pe=null,K=null,$=0,ce=0,st=null,pa=!1,bl=!1,Cc=!1,$t=0,ve=0,ha=0,Xa=0,Bc=0,it=0,_l=0,mn=null,We=null,wc=!1,vs=0,Sd=0,bs=1/0,_s=null,xa=null,Ae=0,Sa=null,Ml=null,Pt=0,zc=0,Rc=null,gd=null,pn=0,Vc=null;function ct(){return(se&2)!==0&&$!==0?$&-$:_.T!==null?kc():zu()}function yd(){if(it===0)if(($&536870912)===0||te){var e=Cn;Cn<<=1,(Cn&3932160)===0&&(Cn=262144),it=e}else it=536870912;return e=lt.current,e!==null&&(e.flags|=32),it}function Ie(e,t,a){(e===pe&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(El(e,0),ga(e,$,it,!1)),Rl(e,a),((se&2)===0||e!==pe)&&(e===pe&&((se&2)===0&&(Xa|=a),ve===4&&ga(e,$,it,!1)),Vt(e))}function vd(e,t,a){if((se&6)!==0)throw Error(f(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||zl(e,t),n=l?Ap(e,t):Hc(e,t,!0),s=l;do{if(n===0){bl&&!l&&ga(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!Tp(a)){n=Hc(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var u=e;n=mn;var o=u.current.memoizedState.isDehydrated;if(o&&(El(u,c).flags|=256),c=Hc(u,c,!1),c!==2){if(Cc&&!o){u.errorRecoveryDisabledLanes|=s,Xa|=s,n=4;break e}s=We,We=n,s!==null&&(We===null?We=s:We.push.apply(We,s))}n=c}if(s=!1,n!==2)continue}}if(n===1){El(e,0),ga(e,t,0,!0);break}e:{switch(l=e,s=n,s){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:ga(l,t,it,!pa);break e;case 2:We=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(n=vs+300-$e(),10<n)){if(ga(l,t,it,!pa),wn(l,0,!0)!==0)break e;Pt=t,l.timeoutHandle=Id(bd.bind(null,l,a,We,_s,wc,t,it,Xa,_l,pa,s,"Throttled",-0,0),n);break e}bd(l,a,We,_s,wc,t,it,Xa,_l,pa,s,null,-0,0)}}break}while(!0);Vt(e)}function bd(e,t,a,l,n,s,c,u,o,x,b,D,g,y){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},md(t,s,D);var R=(s&62914560)===s?vs-$e():(s&4194048)===s?Sd-$e():0;if(R=r1(D,R),R!==null){Pt=s,e.cancelPendingCommit=R(jd.bind(null,e,t,s,a,l,n,c,u,o,b,D,null,g,y)),ga(e,s,c,!x);return}}jd(e,t,s,a,l,n,c,u,o)}function Tp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],s=n.getSnapshot;n=n.value;try{if(!tt(s(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,a,l){t&=~Bc,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var s=31-et(n),c=1<<s;l[s]=-1,n&=~c}a!==0&&Cu(e,a,t)}function Ms(){return(se&6)===0?(hn(0),!1):!0}function Oc(){if(K!==null){if(ce===0)var e=K.return;else e=K,Ft=Oa=null,$i(e),pl=null,Wl=0,e=K;for(;e!==null;)$r(e.alternate,e),e=e.return;K=null}}function El(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Pt=0,Oc(),pe=e,K=a=Gt(e.current,null),$=t,ce=0,st=null,pa=!1,bl=zl(e,t),Cc=!1,_l=it=Bc=Xa=ha=ve=0,We=mn=null,wc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-et(l),s=1<<n;t|=e[n],l&=~s}return $t=t,Yn(),a}function _d(e,t){X=null,_.H=nn,t===ml||t===$n?(t=Uo(),ce=3):t===Gi?(t=Uo(),ce=4):ce=t===pc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,K===null&&(ve=1,fs(e,pt(t,e.current)))}function Md(){var e=lt.current;return e===null?!0:($&4194048)===$?gt===null:($&62914560)===$||($&536870912)!==0?e===gt:!1}function Ed(){var e=_.H;return _.H=nn,e===null?nn:e}function Dd(){var e=_.A;return _.A=Ep,e}function Es(){ve=4,pa||($&4194048)!==$&&lt.current!==null||(bl=!0),(ha&134217727)===0&&(Xa&134217727)===0||pe===null||ga(pe,$,it,!1)}function Hc(e,t,a){var l=se;se|=2;var n=Ed(),s=Dd();(pe!==e||$!==t)&&(_s=null,El(e,t)),t=!1;var c=ve;e:do try{if(ce!==0&&K!==null){var u=K,o=st;switch(ce){case 8:Oc(),c=6;break e;case 3:case 2:case 9:case 6:lt.current===null&&(t=!0);var x=ce;if(ce=0,st=null,Dl(e,u,o,x),a&&bl){c=0;break e}break;default:x=ce,ce=0,st=null,Dl(e,u,o,x)}}Np(),c=ve;break}catch(b){_d(e,b)}while(!0);return t&&e.shellSuspendCounter++,Ft=Oa=null,se=l,_.H=n,_.A=s,K===null&&(pe=null,$=0,Yn()),c}function Np(){for(;K!==null;)Td(K)}function Ap(e,t){var a=se;se|=2;var l=Ed(),n=Dd();pe!==e||$!==t?(_s=null,bs=$e()+500,El(e,t)):bl=zl(e,t);e:do try{if(ce!==0&&K!==null){t=K;var s=st;t:switch(ce){case 1:ce=0,st=null,Dl(e,t,s,1);break;case 2:case 9:if(Oo(s)){ce=0,st=null,Nd(t);break}t=function(){ce!==2&&ce!==9||pe!==e||(ce=7),Vt(e)},s.then(t,t);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:Oo(s)?(ce=0,st=null,Nd(t)):(ce=0,st=null,Dl(e,t,s,7));break;case 5:var c=null;switch(K.tag){case 26:c=K.memoizedState;case 5:case 27:var u=K;if(c?mf(c):u.stateNode.complete){ce=0,st=null;var o=u.sibling;if(o!==null)K=o;else{var x=u.return;x!==null?(K=x,Ds(x)):K=null}break t}}ce=0,st=null,Dl(e,t,s,5);break;case 6:ce=0,st=null,Dl(e,t,s,6);break;case 8:Oc(),ve=6;break e;default:throw Error(f(462))}}jp();break}catch(b){_d(e,b)}while(!0);return Ft=Oa=null,_.H=l,_.A=n,se=a,K!==null?0:(pe=null,$=0,Yn(),ve)}function jp(){for(;K!==null&&!$f();)Td(K)}function Td(e){var t=Wr(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?Ds(e):K=t}function Nd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Yr(a,t,t.pendingProps,t.type,void 0,$);break;case 11:t=Yr(a,t,t.pendingProps,t.type.render,t.ref,$);break;case 5:$i(t);default:$r(a,t),t=K=Do(t,$t),t=Wr(a,t,$t)}e.memoizedProps=e.pendingProps,t===null?Ds(e):K=t}function Dl(e,t,a,l){Ft=Oa=null,$i(t),pl=null,Wl=0;var n=t.return;try{if(Sp(e,n,t,a,$)){ve=1,fs(e,pt(a,e.current)),K=null;return}}catch(s){if(n!==null)throw K=n,s;ve=1,fs(e,pt(a,e.current)),K=null;return}t.flags&32768?(te||l===1?e=!0:bl||($&536870912)!==0?e=!1:(pa=e=!0,(l===2||l===9||l===3||l===6)&&(l=lt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ad(t,e)):Ds(t)}function Ds(e){var t=e;do{if((t.flags&32768)!==0){Ad(t,pa);return}e=t.return;var a=vp(t.alternate,t,$t);if(a!==null){K=a;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);ve===0&&(ve=5)}function Ad(e,t){do{var a=bp(e.alternate,e);if(a!==null){a.flags&=32767,K=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=a}while(e!==null);ve=6,K=null}function jd(e,t,a,l,n,s,c,u,o){e.cancelPendingCommit=null;do Ts();while(Ae!==0);if((se&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(s=t.lanes|t.childLanes,s|=Di,um(e,a,s,c,u,o),e===pe&&(K=pe=null,$=0),Ml=t,Sa=e,Pt=a,zc=s,Rc=n,gd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zp(An,function(){return Rd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,n=C.p,C.p=2,c=se,se|=4;try{_p(e,t,a)}finally{se=c,C.p=n,_.T=l}}Ae=1,Cd(),Bd(),wd()}}function Cd(){if(Ae===1){Ae=0;var e=Sa,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var l=C.p;C.p=2;var n=se;se|=4;try{rd(t,e);var s=Kc,c=xo(e.containerInfo),u=s.focusedElem,o=s.selectionRange;if(c!==u&&u&&u.ownerDocument&&ho(u.ownerDocument.documentElement,u)){if(o!==null&&vi(u)){var x=o.start,b=o.end;if(b===void 0&&(b=x),"selectionStart"in u)u.selectionStart=x,u.selectionEnd=Math.min(b,u.value.length);else{var D=u.ownerDocument||document,g=D&&D.defaultView||window;if(g.getSelection){var y=g.getSelection(),R=u.textContent.length,G=Math.min(o.start,R),fe=o.end===void 0?G:Math.min(o.end,R);!y.extend&&G>fe&&(c=fe,fe=G,G=c);var p=po(u,G),r=po(u,fe);if(p&&r&&(y.rangeCount!==1||y.anchorNode!==p.node||y.anchorOffset!==p.offset||y.focusNode!==r.node||y.focusOffset!==r.offset)){var h=D.createRange();h.setStart(p.node,p.offset),y.removeAllRanges(),G>fe?(y.addRange(h),y.extend(r.node,r.offset)):(h.setEnd(r.node,r.offset),y.addRange(h))}}}}for(D=[],y=u;y=y.parentNode;)y.nodeType===1&&D.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<D.length;u++){var E=D[u];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}Us=!!Zc,Kc=Zc=null}finally{se=n,C.p=l,_.T=a}}e.current=t,Ae=2}}function Bd(){if(Ae===2){Ae=0;var e=Sa,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var l=C.p;C.p=2;var n=se;se|=4;try{sd(e,t.alternate,t)}finally{se=n,C.p=l,_.T=a}}Ae=3}}function wd(){if(Ae===4||Ae===3){Ae=0,Pf();var e=Sa,t=Ml,a=Pt,l=gd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ae=5:(Ae=0,Ml=Sa=null,zd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(xa=null),ti(a),t=t.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,n=C.p,C.p=2,_.T=null;try{for(var s=e.onRecoverableError,c=0;c<l.length;c++){var u=l[c];s(u.value,{componentStack:u.stack})}}finally{_.T=t,C.p=n}}(Pt&3)!==0&&Ts(),Vt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Vc?pn++:(pn=0,Vc=e):pn=0,hn(0)}}function zd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zl(t)))}function Ts(){return Cd(),Bd(),wd(),Rd()}function Rd(){if(Ae!==5)return!1;var e=Sa,t=zc;zc=0;var a=ti(Pt),l=_.T,n=C.p;try{C.p=32>a?32:a,_.T=null,a=Rc,Rc=null;var s=Sa,c=Pt;if(Ae=0,Ml=Sa=null,Pt=0,(se&6)!==0)throw Error(f(331));var u=se;if(se|=4,hd(s.current),fd(s,s.current,c,a),se=u,hn(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(wl,s)}catch{}return!0}finally{C.p=n,_.T=l,zd(e,t)}}function Vd(e,t,a){t=pt(a,t),t=mc(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Rl(e,2),Vt(e))}function ue(e,t,a){if(e.tag===3)Vd(e,e,a);else for(;t!==null;){if(t.tag===3){Vd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xa===null||!xa.has(l))){e=pt(a,e),a=Or(2),l=ra(t,a,2),l!==null&&(Hr(a,l,t,e),Rl(l,2),Vt(l));break}}t=t.return}}function Uc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Dp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Cc=!0,n.add(a),e=Cp.bind(null,e,t,a),t.then(e,e))}function Cp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,pe===e&&($&a)===a&&(ve===4||ve===3&&($&62914560)===$&&300>$e()-vs?(se&2)===0&&El(e,0):Bc|=a,_l===$&&(_l=0)),Vt(e)}function Od(e,t){t===0&&(t=ju()),e=za(e,t),e!==null&&(Rl(e,t),Vt(e))}function Bp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Od(e,a)}function wp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(t),Od(e,a)}function zp(e,t){return Is(e,t)}var Ns=null,Tl=null,qc=!1,As=!1,Gc=!1,ya=0;function Vt(e){e!==Tl&&e.next===null&&(Tl===null?Ns=Tl=e:Tl=Tl.next=e),As=!0,qc||(qc=!0,Vp())}function hn(e,t){if(!Gc&&As){Gc=!0;do for(var a=!1,l=Ns;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var s=0;else{var c=l.suspendedLanes,u=l.pingedLanes;s=(1<<31-et(42|e)+1)-1,s&=n&~(c&~u),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Gd(l,s))}else s=$,s=wn(l,l===pe?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||zl(l,s)||(a=!0,Gd(l,s));l=l.next}while(a);Gc=!1}}function Rp(){Hd()}function Hd(){As=qc=!1;var e=0;ya!==0&&Xp()&&(e=ya);for(var t=$e(),a=null,l=Ns;l!==null;){var n=l.next,s=Ud(l,t);s===0?(l.next=null,a===null?Ns=n:a.next=n,n===null&&(Tl=a)):(a=l,(e!==0||(s&3)!==0)&&(As=!0)),l=n}Ae!==0&&Ae!==5||hn(e),ya!==0&&(ya=0)}function Ud(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-et(s),u=1<<c,o=n[c];o===-1?((u&a)===0||(u&l)!==0)&&(n[c]=cm(u,t)):o<=t&&(e.expiredLanes|=u),s&=~u}if(t=pe,a=$,a=wn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&$s(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&$s(l),ti(a)){case 2:case 8:a=Nu;break;case 32:a=An;break;case 268435456:a=Au;break;default:a=An}return l=qd.bind(null,e),a=Is(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&$s(l),e.callbackPriority=2,e.callbackNode=null,2}function qd(e,t){if(Ae!==0&&Ae!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ts()&&e.callbackNode!==a)return null;var l=$;return l=wn(e,e===pe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(vd(e,l,t),Ud(e,$e()),e.callbackNode!=null&&e.callbackNode===a?qd.bind(null,e):null)}function Gd(e,t){if(Ts())return null;vd(e,t,!0)}function Vp(){Jp(function(){(se&6)!==0?Is(Tu,Rp):Hd()})}function kc(){if(ya===0){var e=dl;e===0&&(e=jn,jn<<=1,(jn&261888)===0&&(jn=256)),ya=e}return ya}function kd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:On(""+e)}function Fd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Op(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var s=kd((n[Xe]||null).action),c=l.submitter;c&&(t=(t=c[Xe]||null)?kd(t.formAction):c.getAttribute("formAction"),t!==null&&(s=t,c=null));var u=new Gn("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ya!==0){var o=c?Fd(n,c):new FormData(n);cc(a,{pending:!0,data:o,method:n.method,action:s},null,o)}}else typeof s=="function"&&(u.preventDefault(),o=c?Fd(n,c):new FormData(n),cc(a,{pending:!0,data:o,method:n.method,action:s},s,o))},currentTarget:n}]})}}for(var Fc=0;Fc<Ei.length;Fc++){var Lc=Ei[Fc],Hp=Lc.toLowerCase(),Up=Lc[0].toUpperCase()+Lc.slice(1);Mt(Hp,"on"+Up)}Mt(yo,"onAnimationEnd"),Mt(vo,"onAnimationIteration"),Mt(bo,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(ep,"onTransitionRun"),Mt(tp,"onTransitionStart"),Mt(ap,"onTransitionCancel"),Mt(_o,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),ja("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ja("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ja("onBeforeInput",["compositionend","keypress","textInput","paste"]),ja("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn));function Ld(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var c=l.length-1;0<=c;c--){var u=l[c],o=u.instance,x=u.currentTarget;if(u=u.listener,o!==s&&n.isPropagationStopped())break e;s=u,n.currentTarget=x;try{s(n)}catch(b){Ln(b)}n.currentTarget=null,s=o}else for(c=0;c<l.length;c++){if(u=l[c],o=u.instance,x=u.currentTarget,u=u.listener,o!==s&&n.isPropagationStopped())break e;s=u,n.currentTarget=x;try{s(n)}catch(b){Ln(b)}n.currentTarget=null,s=o}}}}function W(e,t){var a=t[ai];a===void 0&&(a=t[ai]=new Set);var l=e+"__bubble";a.has(l)||(Yd(t,e,2,!1),a.add(l))}function Yc(e,t,a){var l=0;t&&(l|=4),Yd(a,e,l,t)}var js="_reactListening"+Math.random().toString(36).slice(2);function Xc(e){if(!e[js]){e[js]=!0,Ou.forEach(function(a){a!=="selectionchange"&&(qp.has(a)||Yc(a,!1,e),Yc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[js]||(t[js]=!0,Yc("selectionchange",!1,t))}}function Yd(e,t,a,l){switch(vf(t)){case 2:var n=m1;break;case 8:n=p1;break;default:n=iu}a=n.bind(null,t,a,e),n=void 0,!di||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Qc(e,t,a,l,n){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var u=l.stateNode.containerInfo;if(u===n)break;if(c===4)for(c=l.return;c!==null;){var o=c.tag;if((o===3||o===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;u!==null;){if(c=Za(u),c===null)return;if(o=c.tag,o===5||o===6||o===26||o===27){l=s=c;continue e}u=u.parentNode}}l=l.return}Zu(function(){var x=s,b=oi(a),D=[];e:{var g=Mo.get(e);if(g!==void 0){var y=Gn,R=e;switch(e){case"keypress":if(Un(a)===0)break e;case"keydown":case"keyup":y=wm;break;case"focusin":R="focus",y=hi;break;case"focusout":R="blur",y=hi;break;case"beforeblur":case"afterblur":y=hi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Vm;break;case yo:case vo:case bo:y=Mm;break;case _o:y=Hm;break;case"scroll":case"scrollend":y=gm;break;case"wheel":y=qm;break;case"copy":case"cut":case"paste":y=Dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Pu;break;case"toggle":case"beforetoggle":y=km}var G=(t&4)!==0,fe=!G&&(e==="scroll"||e==="scrollend"),p=G?g!==null?g+"Capture":null:g;G=[];for(var r=x,h;r!==null;){var E=r;if(h=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||h===null||p===null||(E=Hl(r,p),E!=null&&G.push(Sn(r,E,h))),fe)break;r=r.return}0<G.length&&(g=new y(g,R,null,a,b),D.push({event:g,listeners:G}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&a!==ui&&(R=a.relatedTarget||a.fromElement)&&(Za(R)||R[Ja]))break e;if((y||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,y?(R=a.relatedTarget||a.toElement,y=x,R=R?Za(R):null,R!==null&&(fe=M(R),G=R.tag,R!==fe||G!==5&&G!==27&&G!==6)&&(R=null)):(y=null,R=x),y!==R)){if(G=Iu,E="onMouseLeave",p="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(G=Pu,E="onPointerLeave",p="onPointerEnter",r="pointer"),fe=y==null?g:Ol(y),h=R==null?g:Ol(R),g=new G(E,r+"leave",y,a,b),g.target=fe,g.relatedTarget=h,E=null,Za(b)===x&&(G=new G(p,r+"enter",R,a,b),G.target=h,G.relatedTarget=fe,E=G),fe=E,y&&R)t:{for(G=Gp,p=y,r=R,h=0,E=p;E;E=G(E))h++;E=0;for(var U=r;U;U=G(U))E++;for(;0<h-E;)p=G(p),h--;for(;0<E-h;)r=G(r),E--;for(;h--;){if(p===r||r!==null&&p===r.alternate){G=p;break t}p=G(p),r=G(r)}G=null}else G=null;y!==null&&Xd(D,g,y,G,!1),R!==null&&fe!==null&&Xd(D,fe,R,G,!0)}}e:{if(g=x?Ol(x):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var le=co;else if(so(g))if(uo)le=Im;else{le=Km;var O=Zm}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?x&&ci(x.elementType)&&(le=co):le=Wm;if(le&&(le=le(e,x))){io(D,le,a,b);break e}O&&O(e,g,x),e==="focusout"&&x&&g.type==="number"&&x.memoizedProps.value!=null&&ii(g,"number",g.value)}switch(O=x?Ol(x):window,e){case"focusin":(so(O)||O.contentEditable==="true")&&(ll=O,bi=x,Xl=null);break;case"focusout":Xl=bi=ll=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,So(D,a,b);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":So(D,a,b)}var Q;if(Si)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else al?lo(e,a)&&(P="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(eo&&a.locale!=="ko"&&(al||P!=="onCompositionStart"?P==="onCompositionEnd"&&al&&(Q=Ku()):(la=b,fi="value"in la?la.value:la.textContent,al=!0)),O=Cs(x,P),0<O.length&&(P=new $u(P,e,null,a,b),D.push({event:P,listeners:O}),Q?P.data=Q:(Q=no(a),Q!==null&&(P.data=Q)))),(Q=Lm?Ym(e,a):Xm(e,a))&&(P=Cs(x,"onBeforeInput"),0<P.length&&(O=new $u("onBeforeInput","beforeinput",null,a,b),D.push({event:O,listeners:P}),O.data=Q)),Op(D,e,x,a,b)}Ld(D,t)})}function Sn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Cs(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=Hl(e,a),n!=null&&l.unshift(Sn(e,n,s)),n=Hl(e,t),n!=null&&l.push(Sn(e,n,s))),e.tag===3)return l;e=e.return}return[]}function Gp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xd(e,t,a,l,n){for(var s=t._reactName,c=[];a!==null&&a!==l;){var u=a,o=u.alternate,x=u.stateNode;if(u=u.tag,o!==null&&o===l)break;u!==5&&u!==26&&u!==27||x===null||(o=x,n?(x=Hl(a,s),x!=null&&c.unshift(Sn(a,x,o))):n||(x=Hl(a,s),x!=null&&c.push(Sn(a,x,o)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var kp=/\r\n?/g,Fp=/\u0000|\uFFFD/g;function Qd(e){return(typeof e=="string"?e:""+e).replace(kp,`
`).replace(Fp,"")}function Jd(e,t){return t=Qd(t),Qd(e)===t}function de(e,t,a,l,n,s){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Pa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Pa(e,""+l);break;case"className":Rn(e,"class",l);break;case"tabIndex":Rn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(e,a,l);break;case"style":Qu(e,l,s);break;case"data":if(t!=="object"){Rn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=On(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&de(e,t,"name",n.name,n,null),de(e,t,"formEncType",n.formEncType,n,null),de(e,t,"formMethod",n.formMethod,n,null),de(e,t,"formTarget",n.formTarget,n,null)):(de(e,t,"encType",n.encType,n,null),de(e,t,"method",n.method,n,null),de(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=On(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ut);break;case"onScroll":l!=null&&W("scroll",e);break;case"onScrollEnd":l!=null&&W("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=On(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":W("beforetoggle",e),W("toggle",e),zn(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xm.get(a)||a,zn(e,a,l))}}function Jc(e,t,a,l,n,s){switch(a){case"style":Qu(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Pa(e,l):(typeof l=="number"||typeof l=="bigint")&&Pa(e,""+l);break;case"onScroll":l!=null&&W("scroll",e);break;case"onScrollEnd":l!=null&&W("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),s=e[Xe]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof l=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):zn(e,a,l)}}}function Oe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",e),W("load",e);var l=!1,n=!1,s;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];if(c!=null)switch(s){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:de(e,t,s,c,a,null)}}n&&de(e,t,"srcSet",a.srcSet,a,null),l&&de(e,t,"src",a.src,a,null);return;case"input":W("invalid",e);var u=s=c=n=null,o=null,x=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":n=b;break;case"type":c=b;break;case"checked":o=b;break;case"defaultChecked":x=b;break;case"value":s=b;break;case"defaultValue":u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,t));break;default:de(e,t,l,b,a,null)}}Fu(e,s,u,o,x,c,n,!1);return;case"select":W("invalid",e),l=c=s=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":s=u;break;case"defaultValue":c=u;break;case"multiple":l=u;default:de(e,t,n,u,a,null)}t=s,a=c,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":W("invalid",e),s=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(u=a[c],u!=null))switch(c){case"value":l=u;break;case"defaultValue":n=u;break;case"children":s=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(f(91));break;default:de(e,t,c,u,a,null)}Yu(e,l,n,s);return;case"option":for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null)&&(o==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":de(e,t,o,l,a,null));return;case"dialog":W("beforetoggle",e),W("toggle",e),W("cancel",e),W("close",e);break;case"iframe":case"object":W("load",e);break;case"video":case"audio":for(l=0;l<xn.length;l++)W(xn[l],e);break;case"image":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"embed":case"source":case"link":W("error",e),W("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:de(e,t,x,l,a,null)}return;default:if(ci(t)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Jc(e,t,b,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&de(e,t,u,l,a,null))}function Lp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,c=null,u=null,o=null,x=null,b=null;for(y in a){var D=a[y];if(a.hasOwnProperty(y)&&D!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":o=D;default:l.hasOwnProperty(y)||de(e,t,y,null,l,D)}}for(var g in l){var y=l[g];if(D=a[g],l.hasOwnProperty(g)&&(y!=null||D!=null))switch(g){case"type":s=y;break;case"name":n=y;break;case"checked":x=y;break;case"defaultChecked":b=y;break;case"value":c=y;break;case"defaultValue":u=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,t));break;default:y!==D&&de(e,t,g,y,l,D)}}si(e,c,u,o,x,b,s,n);return;case"select":y=c=u=g=null;for(s in a)if(o=a[s],a.hasOwnProperty(s)&&o!=null)switch(s){case"value":break;case"multiple":y=o;default:l.hasOwnProperty(s)||de(e,t,s,null,l,o)}for(n in l)if(s=l[n],o=a[n],l.hasOwnProperty(n)&&(s!=null||o!=null))switch(n){case"value":g=s;break;case"defaultValue":u=s;break;case"multiple":c=s;default:s!==o&&de(e,t,n,s,l,o)}t=u,a=c,l=y,g!=null?$a(e,!!a,g,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":y=g=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:de(e,t,u,null,l,n)}for(c in l)if(n=l[c],s=a[c],l.hasOwnProperty(c)&&(n!=null||s!=null))switch(c){case"value":g=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==s&&de(e,t,c,n,l,s)}Lu(e,g,y);return;case"option":for(var R in a)g=a[R],a.hasOwnProperty(R)&&g!=null&&!l.hasOwnProperty(R)&&(R==="selected"?e.selected=!1:de(e,t,R,null,l,g));for(o in l)g=l[o],y=a[o],l.hasOwnProperty(o)&&g!==y&&(g!=null||y!=null)&&(o==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":de(e,t,o,g,l,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in a)g=a[G],a.hasOwnProperty(G)&&g!=null&&!l.hasOwnProperty(G)&&de(e,t,G,null,l,g);for(x in l)if(g=l[x],y=a[x],l.hasOwnProperty(x)&&g!==y&&(g!=null||y!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,t));break;default:de(e,t,x,g,l,y)}return;default:if(ci(t)){for(var fe in a)g=a[fe],a.hasOwnProperty(fe)&&g!==void 0&&!l.hasOwnProperty(fe)&&Jc(e,t,fe,void 0,l,g);for(b in l)g=l[b],y=a[b],!l.hasOwnProperty(b)||g===y||g===void 0&&y===void 0||Jc(e,t,b,g,l,y);return}}for(var p in a)g=a[p],a.hasOwnProperty(p)&&g!=null&&!l.hasOwnProperty(p)&&de(e,t,p,null,l,g);for(D in l)g=l[D],y=a[D],!l.hasOwnProperty(D)||g===y||g==null&&y==null||de(e,t,D,g,l,y)}function Zd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],s=n.transferSize,c=n.initiatorType,u=n.duration;if(s&&u&&Zd(c)){for(c=0,u=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],x=o.startTime;if(x>u)break;var b=o.transferSize,D=o.initiatorType;b&&Zd(D)&&(o=o.responseEnd,c+=b*(o<u?1:(u-x)/(o-x)))}if(--l,t+=8*(s+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zc=null,Kc=null;function Bs(e){return e.nodeType===9?e:e.ownerDocument}function Kd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ic=null;function Xp(){var e=window.event;return e&&e.type==="popstate"?e===Ic?!1:(Ic=e,!0):(Ic=null,!1)}var Id=typeof setTimeout=="function"?setTimeout:void 0,Qp=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,Jp=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(e){return $d.resolve(null).then(e).catch(Zp)}:Id;function Zp(e){setTimeout(function(){throw e})}function va(e){return e==="head"}function Pd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Cl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")gn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,gn(a);for(var s=a.firstChild;s;){var c=s.nextSibling,u=s.nodeName;s[Vl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=c}}else a==="body"&&gn(e.ownerDocument.body);a=n}while(a);Cl(t)}function ef(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function $c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$c(a),li(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Kp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=yt(e.nextSibling),e===null)break}return null}function Wp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yt(e.nextSibling),e===null))return null;return e}function tf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=yt(e.nextSibling),e===null))return null;return e}function Pc(e){return e.data==="$?"||e.data==="$~"}function eu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ip(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var tu=null;function af(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return yt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function lf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function nf(e,t,a){switch(t=Bs(a),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function gn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);li(e)}var vt=new Map,sf=new Set;function ws(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=C.d;C.d={f:$p,r:Pp,D:e1,C:t1,L:a1,m:l1,X:s1,S:n1,M:i1};function $p(){var e=ea.f(),t=Ms();return e||t}function Pp(e){var t=Ka(e);t!==null&&t.tag===5&&t.type==="form"?_r(t):ea.r(e)}var Nl=typeof document>"u"?null:document;function cf(e,t,a){var l=Nl;if(l&&typeof t=="string"&&t){var n=ft(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),sf.has(n)||(sf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Oe(t,"link",e),Ce(t),l.head.appendChild(t)))}}function e1(e){ea.D(e),cf("dns-prefetch",e,null)}function t1(e,t){ea.C(e,t),cf("preconnect",e,t)}function a1(e,t,a){ea.L(e,t,a);var l=Nl;if(l&&e&&t){var n='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ft(a.imageSizes)+'"]')):n+='[href="'+ft(e)+'"]';var s=n;switch(t){case"style":s=Al(e);break;case"script":s=jl(e)}vt.has(s)||(e=H({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(s,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(yn(s))||t==="script"&&l.querySelector(vn(s))||(t=l.createElement("link"),Oe(t,"link",e),Ce(t),l.head.appendChild(t)))}}function l1(e,t){ea.m(e,t);var a=Nl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ft(l)+'"][href="'+ft(e)+'"]',s=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=jl(e)}if(!vt.has(s)&&(e=H({rel:"modulepreload",href:e},t),vt.set(s,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vn(s)))return}l=a.createElement("link"),Oe(l,"link",e),Ce(l),a.head.appendChild(l)}}}function n1(e,t,a){ea.S(e,t,a);var l=Nl;if(l&&e){var n=Wa(l).hoistableStyles,s=Al(e);t=t||"default";var c=n.get(s);if(!c){var u={loading:0,preload:null};if(c=l.querySelector(yn(s)))u.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(s))&&au(e,a);var o=c=l.createElement("link");Ce(o),Oe(o,"link",e),o._p=new Promise(function(x,b){o.onload=x,o.onerror=b}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,zs(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:u},n.set(s,c)}}}function s1(e,t){ea.X(e,t);var a=Nl;if(a&&e){var l=Wa(a).hoistableScripts,n=jl(e),s=l.get(n);s||(s=a.querySelector(vn(n)),s||(e=H({src:e,async:!0},t),(t=vt.get(n))&&lu(e,t),s=a.createElement("script"),Ce(s),Oe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function i1(e,t){ea.M(e,t);var a=Nl;if(a&&e){var l=Wa(a).hoistableScripts,n=jl(e),s=l.get(n);s||(s=a.querySelector(vn(n)),s||(e=H({src:e,async:!0,type:"module"},t),(t=vt.get(n))&&lu(e,t),s=a.createElement("script"),Ce(s),Oe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function uf(e,t,a,l){var n=(n=Z.current)?ws(n):null;if(!n)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Al(a.href),a=Wa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Al(a.href);var s=Wa(n).hoistableStyles,c=s.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=n.querySelector(yn(e)))&&!s._p&&(c.instance=s,c.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),s||c1(n,e,a,c.state))),t&&l===null)throw Error(f(528,""));return c}if(t&&l!==null)throw Error(f(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=jl(a),a=Wa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Al(e){return'href="'+ft(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function of(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function c1(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Oe(t,"link",a),Ce(t),e.head.appendChild(t))}function jl(e){return'[src="'+ft(e)+'"]'}function vn(e){return"script[async]"+e}function rf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ft(a.href)+'"]');if(l)return t.instance=l,Ce(l),l;var n=H({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ce(l),Oe(l,"style",n),zs(l,a.precedence,e),t.instance=l;case"stylesheet":n=Al(a.href);var s=e.querySelector(yn(n));if(s)return t.state.loading|=4,t.instance=s,Ce(s),s;l=of(a),(n=vt.get(n))&&au(l,n),s=(e.ownerDocument||e).createElement("link"),Ce(s);var c=s;return c._p=new Promise(function(u,o){c.onload=u,c.onerror=o}),Oe(s,"link",l),t.state.loading|=4,zs(s,a.precedence,e),t.instance=s;case"script":return s=jl(a.src),(n=e.querySelector(vn(s)))?(t.instance=n,Ce(n),n):(l=a,(n=vt.get(s))&&(l=H({},a),lu(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),Oe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,zs(l,a.precedence,e));return t.instance}function zs(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,s=n,c=0;c<l.length;c++){var u=l[c];if(u.dataset.precedence===t)s=u;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rs=null;function df(e,t,a){if(Rs===null){var l=new Map,n=Rs=new Map;n.set(a,l)}else n=Rs,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var s=a[n];if(!(s[Vl]||s[we]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(t)||"";c=e+c;var u=l.get(c);u?u.push(s):l.set(c,[s])}}return l}function ff(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function u1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function mf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function o1(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Al(l.href),s=t.querySelector(yn(n));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Ce(s);return}s=t.ownerDocument||t,l=of(l),(n=vt.get(n))&&au(l,n),s=s.createElement("link"),Ce(s);var c=s;c._p=new Promise(function(u,o){c.onload=u,c.onerror=o}),Oe(s,"link",l),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var nu=0;function r1(e,t){return e.stylesheets&&e.count===0&&Hs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Hs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&nu===0&&(nu=62500*Yp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>nu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Vs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Os=null;function Hs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Os=new Map,t.forEach(d1,e),Os=null,Vs.call(e))}function d1(e,t){if(!(t.state.loading&4)){var a=Os.get(e);if(a)var l=a.get(null);else{a=new Map,Os.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var c=n[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),s=a.get(c)||l,s===l&&a.set(null,n),a.set(c,n),this.count++,l=Vs.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var bn={$$typeof:He,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function f1(e,t,a,l,n,s,c,u,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ps(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ps(0),this.hiddenUpdates=Ps(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function pf(e,t,a,l,n,s,c,u,o,x,b,D){return e=new f1(e,t,a,c,o,x,b,D,u),t=1,s===!0&&(t|=24),s=at(3,null,null,t),e.current=s,s.stateNode=e,t=Hi(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:a,cache:t},ki(s),e}function hf(e){return e?(e=il,e):il}function xf(e,t,a,l,n,s){n=hf(n),l.context===null?l.context=n:l.pendingContext=n,l=oa(t),l.payload={element:a},s=s===void 0?null:s,s!==null&&(l.callback=s),a=ra(e,l,t),a!==null&&(Ie(a,e,t),$l(a,e,t))}function Sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function su(e,t){Sf(e,t),(e=e.alternate)&&Sf(e,t)}function gf(e){if(e.tag===13||e.tag===31){var t=za(e,67108864);t!==null&&Ie(t,e,67108864),su(e,67108864)}}function yf(e){if(e.tag===13||e.tag===31){var t=ct();t=ei(t);var a=za(e,t);a!==null&&Ie(a,e,t),su(e,t)}}var Us=!0;function m1(e,t,a,l){var n=_.T;_.T=null;var s=C.p;try{C.p=2,iu(e,t,a,l)}finally{C.p=s,_.T=n}}function p1(e,t,a,l){var n=_.T;_.T=null;var s=C.p;try{C.p=8,iu(e,t,a,l)}finally{C.p=s,_.T=n}}function iu(e,t,a,l){if(Us){var n=cu(l);if(n===null)Qc(e,t,l,qs,a),bf(e,l);else if(x1(n,e,t,a,l))l.stopPropagation();else if(bf(e,l),t&4&&-1<h1.indexOf(e)){for(;n!==null;){var s=Ka(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=Aa(s.pendingLanes);if(c!==0){var u=s;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var o=1<<31-et(c);u.entanglements[1]|=o,c&=~o}Vt(s),(se&6)===0&&(bs=$e()+500,hn(0))}}break;case 31:case 13:u=za(s,2),u!==null&&Ie(u,s,2),Ms(),su(s,2)}if(s=cu(l),s===null&&Qc(e,t,l,qs,a),s===n)break;n=s}n!==null&&l.stopPropagation()}else Qc(e,t,l,null,a)}}function cu(e){return e=oi(e),uu(e)}var qs=null;function uu(e){if(qs=null,e=Za(e),e!==null){var t=M(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qs=e,null}function vf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(em()){case Tu:return 2;case Nu:return 8;case An:case tm:return 32;case Au:return 268435456;default:return 32}default:return 32}}var ou=!1,ba=null,_a=null,Ma=null,_n=new Map,Mn=new Map,Ea=[],h1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bf(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":_n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function En(e,t,a,l,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:s,targetContainers:[n]},t!==null&&(t=Ka(t),t!==null&&gf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function x1(e,t,a,l,n){switch(t){case"focusin":return ba=En(ba,e,t,a,l,n),!0;case"dragenter":return _a=En(_a,e,t,a,l,n),!0;case"mouseover":return Ma=En(Ma,e,t,a,l,n),!0;case"pointerover":var s=n.pointerId;return _n.set(s,En(_n.get(s)||null,e,t,a,l,n)),!0;case"gotpointercapture":return s=n.pointerId,Mn.set(s,En(Mn.get(s)||null,e,t,a,l,n)),!0}return!1}function _f(e){var t=Za(e.target);if(t!==null){var a=M(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,Ru(e.priority,function(){yf(a)});return}}else if(t===31){if(t=w(a),t!==null){e.blockedOn=t,Ru(e.priority,function(){yf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=cu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ui=l,a.target.dispatchEvent(l),ui=null}else return t=Ka(a),t!==null&&gf(t),e.blockedOn=a,!1;t.shift()}return!0}function Mf(e,t,a){Gs(e)&&a.delete(t)}function S1(){ou=!1,ba!==null&&Gs(ba)&&(ba=null),_a!==null&&Gs(_a)&&(_a=null),Ma!==null&&Gs(Ma)&&(Ma=null),_n.forEach(Mf),Mn.forEach(Mf)}function ks(e,t){e.blockedOn===t&&(e.blockedOn=null,ou||(ou=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,S1)))}var Fs=null;function Ef(e){Fs!==e&&(Fs=e,T.unstable_scheduleCallback(T.unstable_NormalPriority,function(){Fs===e&&(Fs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(uu(l||a)===null)continue;break}var s=Ka(a);s!==null&&(e.splice(t,3),t-=3,cc(s,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Cl(e){function t(o){return ks(o,e)}ba!==null&&ks(ba,e),_a!==null&&ks(_a,e),Ma!==null&&ks(Ma,e),_n.forEach(t),Mn.forEach(t);for(var a=0;a<Ea.length;a++){var l=Ea[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)_f(a),a.blockedOn===null&&Ea.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],s=a[l+1],c=n[Xe]||null;if(typeof s=="function")c||Ef(a);else if(c){var u=null;if(s&&s.hasAttribute("formAction")){if(n=s,c=s[Xe]||null)u=c.formAction;else if(uu(n)!==null)continue}else u=c.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Ef(a)}}}function Df(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ru(e){this._internalRoot=e}Ls.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var a=t.current,l=ct();xf(a,l,e,t,null,null)},Ls.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xf(e.current,2,null,e,null,null),Ms(),t[Ja]=null}};function Ls(e){this._internalRoot=e}Ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=zu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ea.length&&t!==0&&t<Ea[a].priority;a++);Ea.splice(a,0,e),a===0&&_f(e)}};var Tf=z.version;if(Tf!=="19.2.3")throw Error(f(527,Tf,"19.2.3"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=S(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var g1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{wl=Ys.inject(g1),Pe=Ys}catch{}}return Tn.createRoot=function(e,t){if(!j(e))throw Error(f(299));var a=!1,l="",n=wr,s=zr,c=Rr;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=pf(e,1,!1,null,null,a,l,null,n,s,c,Df),e[Ja]=t.current,Xc(e),new ru(t)},Tn.hydrateRoot=function(e,t,a){if(!j(e))throw Error(f(299));var l=!1,n="",s=wr,c=zr,u=Rr,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=pf(e,1,!0,t,a??null,l,n,o,s,c,u,Df),t.context=hf(null),a=t.current,l=ct(),l=ei(l),n=oa(l),n.callback=null,ra(a,n,l),a=l,t.current.lanes=a,Rl(t,a),Vt(t),e[Ja]=t.current,Xc(e),new Ls(t)},Tn.version="19.2.3",Tn}var Of;function A1(){if(Of)return mu.exports;Of=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(z){console.error(z)}}return T(),mu.exports=N1(),mu.exports}var j1=A1();const C1=T=>T.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B1=T=>T.replace(/^([A-Z])|[\s-_]+(\w)/g,(z,A,f)=>f?f.toUpperCase():A.toLowerCase()),Hf=T=>{const z=B1(T);return z.charAt(0).toUpperCase()+z.slice(1)},Xf=(...T)=>T.filter((z,A,f)=>!!z&&z.trim()!==""&&f.indexOf(z)===A).join(" ").trim(),w1=T=>{for(const z in T)if(z.startsWith("aria-")||z==="role"||z==="title")return!0};var z1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const R1=I.forwardRef(({color:T="currentColor",size:z=24,strokeWidth:A=2,absoluteStrokeWidth:f,className:j="",children:M,iconNode:v,...w},m)=>I.createElement("svg",{ref:m,...z1,width:z,height:z,stroke:T,strokeWidth:f?Number(A)*24/Number(z):A,className:Xf("lucide",j),...!M&&!w1(w)&&{"aria-hidden":"true"},...w},[...v.map(([S,L])=>I.createElement(S,L)),...Array.isArray(M)?M:[M]]));const J=(T,z)=>{const A=I.forwardRef(({className:f,...j},M)=>I.createElement(R1,{ref:M,iconNode:z,className:Xf(`lucide-${C1(Hf(T))}`,`lucide-${T}`,f),...j}));return A.displayName=Hf(T),A};const V1=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],O1=J("activity",V1);const H1=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],U1=J("arrow-up",H1);const q1=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Xs=J("book-open",q1);const G1=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],k1=J("bug",G1);const F1=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Su=J("calculator",F1);const L1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Y1=J("check",L1);const X1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ut=J("chevron-down",X1);const Q1=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Nt=J("chevron-up",Q1);const J1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Z1=J("circle-alert",J1);const K1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],gu=J("circle-check-big",K1);const W1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],I1=J("circle-check",W1);const $1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],P1=J("circle-question-mark",$1);const e0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Qf=J("circle-x",e0);const t0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Qs=J("code-xml",t0);const a0=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],l0=J("code",a0);const n0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],s0=J("copy",n0);const i0=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Uf=J("database",i0);const c0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],u0=J("download",c0);const o0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Tt=J("external-link",o0);const r0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],d0=J("file-code",r0);const f0=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],m0=J("folder-open",f0);const p0=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],h0=J("git-branch",p0);const x0=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],S0=J("github",x0);const g0=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],y0=J("heart",g0);const v0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],b0=J("layers",v0);const _0=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],M0=J("layout-template",_0);const E0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Mu=J("lightbulb",E0);const D0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],T0=J("menu",D0);const N0=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],qf=J("message-square",N0);const A0=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Jf=J("palette",A0);const j0=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],C0=J("rocket",j0);const B0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Zf=J("search",B0);const w0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],z0=J("target",w0);const R0=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],V0=J("terminal",R0);const O0=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Gf=J("thermometer",O0);const H0=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],yu=J("triangle-alert",H0);const U0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Kf=J("users",U0);const q0=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],kf=J("waves",q0);const G0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wf=J("x",G0);const k0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],vu=J("zap",k0),F0=[{id:"basic",name:"基础运算",nameEn:"Basic Operations"},{id:"math",name:"数学运算",nameEn:"Math Operations"},{id:"condition",name:"条件判断",nameEn:"Conditionals"},{id:"trigger",name:"触发器系统",nameEn:"Triggers"},{id:"gamestate",name:"游戏状态获取",nameEn:"Game State"},{id:"mission",name:"任务相关",nameEn:"Mission"},{id:"advanced",name:"高级功能",nameEn:"Advanced"}],bu=[{name:"Accumulate",nameEn:"Accumulate",description:"累加器。可以从Initial指定的初始值上开始累加，以跟踪其它Mutators的变化。此外，还可通过使用Min和Max对累计值进行范围限定。若与常数值配合使用，即可实现一个简单的计数器。",example:`{
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
    "Default": 1, 
    "Mules": 2, 
    "PreUplink": 3, 
    "Uplink": 4, 
    "PreRefuel": 5,
    "Refuel": 6, 
    "Finished": 7 
}`,category:"mission",subFields:[{name:"Default",description:"默认值",required:!0},{name:"Mules",description:"修骡子阶段"},{name:"PreUplink",description:"上传前阶段"},{name:"Uplink",description:"上传阶段"},{name:"PreRefuel",description:"加油前阶段"},{name:"Refuel",description:"加油阶段"},{name:"Finished",description:"加完油撤离阶段"}]},{name:"BySaboPhase",nameEn:"BySaboPhase",description:"根据设施破坏阶段改变数值。用于检测设施破坏任务的不同阶段。",example:`{
    "Mutate": "BySaboPhase",
    "Default": 1,
    "Hacking": 2,
    "BetweenHacks": 3,
    "Phase1Vent": 4,
    "Phase1Eye": 5,
    "Phase2Vent": 6,
    "Phase2Eye": 7,
    "Phase3Vent": 8,
    "Phase3Eye": 9,
    "Finished": 10
}`,category:"mission",subFields:[{name:"Default",description:"默认值",required:!0},{name:"Hacking",description:"骇入阶段"},{name:"Phase1/2/3Vent",description:"黄盾阶段"},{name:"Phase1/2/3Eye",description:"开眼阶段"},{name:"Finished",description:"完成后阶段包括撤离"}]},{name:"DuringMission",nameEn:"DuringMission",description:"在任务期间为true，或者在指定时间参数后的一个特定的时间窗口为true。若指定了StartingAt，则表示从任务开始经过多少秒变为true；同理，若指定了StoppingAfter，则表示从任务开始经过多少秒后变为false。",example:`{
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
}`,category:"advanced",subFields:[{name:"Period",description:"周期（秒）",required:!0},{name:"High",description:"高值",required:!0},{name:"Low",description:"低值",required:!0}]}];function L0({isOpen:T,onClose:z}){const[A,f]=I.useState(""),j=I.useMemo(()=>{if(!A.trim())return[];const v=[],w=A.toLowerCase();for(const m of bu)(m.name.toLowerCase().includes(w)||m.description.toLowerCase().includes(w))&&v.push({type:"Mutate",title:m.name,description:m.description.slice(0,100)+"...",category:m.category,sectionId:"mutate"});return v.slice(0,10)},[A]),M=v=>{const w=document.getElementById(v);w&&(w.scrollIntoView({behavior:"smooth"}),z())};return I.useEffect(()=>{const v=w=>{w.key==="Escape"&&z()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[z]),T?i.jsx("div",{"code-path":"src\\components\\SearchModal.tsx:66:5",className:"fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/60 backdrop-blur-sm",children:i.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:67:7",className:"w-full max-w-2xl bg-[#141414] border border-[#30363d] rounded-xl shadow-2xl overflow-hidden",children:[i.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:69:9",className:"flex items-center gap-3 px-4 py-3 border-b border-[#30363d]",children:[i.jsx(Zf,{"code-path":"src\\components\\SearchModal.tsx:70:11",className:"w-5 h-5 text-[#8b949e]"}),i.jsx("input",{"code-path":"src\\components\\SearchModal.tsx:71:11",type:"text",value:A,onChange:v=>f(v.target.value),placeholder:"搜索Mutate指令、字段、示例...",className:"flex-1 bg-transparent text-[#e6edf3] placeholder-[#484f58] outline-none",autoFocus:!0}),i.jsx("button",{"code-path":"src\\components\\SearchModal.tsx:79:11",onClick:z,className:"p-1 hover:bg-[#30363d] rounded transition-colors",children:i.jsx(Wf,{"code-path":"src\\components\\SearchModal.tsx:83:13",className:"w-5 h-5 text-[#8b949e]"})})]}),i.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:88:9",className:"max-h-[60vh] overflow-y-auto",children:[A.trim()&&j.length===0&&i.jsx("div",{"code-path":"src\\components\\SearchModal.tsx:90:13",className:"px-4 py-8 text-center text-[#8b949e]",children:"未找到相关结果"}),j.map((v,w)=>i.jsxs("button",{"code-path":"src\\components\\SearchModal.tsx:96:13",onClick:()=>M(v.sectionId),className:"w-full text-left px-4 py-3 hover:bg-[#1f242c] cursor-pointer border-b border-[#21262d] last:border-b-0",children:[i.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:101:15",className:"flex items-center gap-2 mb-1",children:[i.jsx("span",{"code-path":"src\\components\\SearchModal.tsx:102:17",className:"text-xs px-2 py-0.5 bg-[#ffd700]/20 text-[#ffd700] rounded",children:v.type}),i.jsx("span",{"code-path":"src\\components\\SearchModal.tsx:105:17",className:"text-xs text-[#8b949e]",children:v.category})]}),i.jsx("h4",{"code-path":"src\\components\\SearchModal.tsx:107:15",className:"text-[#e6edf3] font-medium",children:v.title}),i.jsx("p",{"code-path":"src\\components\\SearchModal.tsx:108:15",className:"text-sm text-[#8b949e] mt-1",children:v.description})]},w)),!A.trim()&&i.jsxs("div",{"code-path":"src\\components\\SearchModal.tsx:113:13",className:"px-4 py-6",children:[i.jsx("p",{"code-path":"src\\components\\SearchModal.tsx:114:15",className:"text-sm text-[#8b949e] mb-3",children:"热门搜索"}),i.jsx("div",{"code-path":"src\\components\\SearchModal.tsx:115:15",className:"flex flex-wrap gap-2",children:["EnemyCount","IfFloat","TriggerOnce","ByTime","Clamp"].map(v=>i.jsx("button",{"code-path":"src\\components\\SearchModal.tsx:117:19",onClick:()=>f(v),className:"px-3 py-1.5 text-sm bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#30363d] rounded-full transition-colors",children:v},v))})]})]}),i.jsx("div",{"code-path":"src\\components\\SearchModal.tsx:131:9",className:"px-4 py-2 bg-[#161b22] border-t border-[#30363d] text-xs text-[#484f58]",children:"按 ESC 关闭 · 点击结果跳转到对应位置"})]})}):null}const Ff=[{id:"hero",label:"首页"},{id:"mutate",label:"Mutate"},{id:"wavespawners",label:"WaveSpawners"},{id:"vars",label:"Vars"},{id:"messages",label:"Messages"},{id:"exercises",label:"练习题"},{id:"feedback",label:"特性反馈"},{id:"appendix",label:"附录"}];function Y0({activeSection:T}){const[z,A]=I.useState(!1),[f,j]=I.useState(!1),[M,v]=I.useState(!1);I.useEffect(()=>{const m=()=>{A(window.scrollY>100)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const w=m=>{const S=document.getElementById(m);S&&S.scrollIntoView({behavior:"smooth"}),j(!1)};return i.jsxs(i.Fragment,{children:[i.jsxs("nav",{"code-path":"src\\components\\Navigation.tsx:43:7",className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${z?"bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#30363d]/50":"bg-transparent"}`,children:[i.jsx("div",{"code-path":"src\\components\\Navigation.tsx:50:9",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{"code-path":"src\\components\\Navigation.tsx:51:11",className:"flex items-center justify-between h-16",children:[i.jsxs("button",{"code-path":"src\\components\\Navigation.tsx:53:13",onClick:()=>w("hero"),className:"flex items-center gap-2 text-[#ffd700] font-bold text-lg",children:[i.jsx("span",{"code-path":"src\\components\\Navigation.tsx:57:15",className:"w-8 h-8 bg-[#ffd700] rounded flex items-center justify-center text-black text-sm",children:"CD2"}),i.jsx("span",{"code-path":"src\\components\\Navigation.tsx:58:15",className:"hidden sm:inline",children:"进阶教程"})]}),i.jsx("div",{"code-path":"src\\components\\Navigation.tsx:62:13",className:"hidden md:flex items-center gap-1",children:Ff.map(m=>i.jsx("button",{"code-path":"src\\components\\Navigation.tsx:64:17",onClick:()=>w(m.id),className:`px-3 py-2 text-sm rounded-lg transition-all ${T===m.id?"text-[#ffd700] bg-[#ffd700]/10":"text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d]"}`,children:m.label},m.id))}),i.jsxs("div",{"code-path":"src\\components\\Navigation.tsx:79:13",className:"flex items-center gap-2",children:[i.jsx("button",{"code-path":"src\\components\\Navigation.tsx:80:15",onClick:()=>v(!0),className:"p-2 text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] rounded-lg transition-colors",children:i.jsx(Zf,{"code-path":"src\\components\\Navigation.tsx:84:17",className:"w-5 h-5"})}),i.jsx("button",{"code-path":"src\\components\\Navigation.tsx:88:15",onClick:()=>j(!f),className:"md:hidden p-2 text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] rounded-lg transition-colors",children:f?i.jsx(Wf,{"code-path":"src\\components\\Navigation.tsx:92:37",className:"w-5 h-5"}):i.jsx(T0,{"code-path":"src\\components\\Navigation.tsx:92:65",className:"w-5 h-5"})})]})]})}),f&&i.jsx("div",{"code-path":"src\\components\\Navigation.tsx:100:11",className:"md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#30363d]/50",children:i.jsx("div",{"code-path":"src\\components\\Navigation.tsx:101:13",className:"px-4 py-3 space-y-1",children:Ff.map(m=>i.jsx("button",{"code-path":"src\\components\\Navigation.tsx:103:17",onClick:()=>w(m.id),className:`block w-full text-left px-4 py-3 rounded-lg transition-colors ${T===m.id?"text-[#ffd700] bg-[#ffd700]/10":"text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d]"}`,children:m.label},m.id))})})]}),i.jsx(L0,{"code-path":"src\\components\\Navigation.tsx:120:7",isOpen:M,onClose:()=>v(!1)})]})}function X0(){const T=I.useRef(null);I.useEffect(()=>{const A=f=>{if(!T.current)return;const{clientX:j,clientY:M}=f,{innerWidth:v,innerHeight:w}=window,m=(j-v/2)/v,S=(M-w/2)/w;T.current.style.setProperty("--parallax-x",`${m*20}px`),T.current.style.setProperty("--parallax-y",`${S*20}px`)};return window.addEventListener("mousemove",A),()=>window.removeEventListener("mousemove",A)},[]);const z=()=>{document.getElementById("mutate")?.scrollIntoView({behavior:"smooth"})};return i.jsxs("section",{"code-path":"src\\sections\\HeroSection.tsx:30:5",id:"hero",ref:T,className:"relative min-h-screen flex items-center justify-center overflow-hidden",style:{perspective:"1000px"},children:[i.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:37:7",className:"absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]",children:[i.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:39:9",className:"absolute inset-0 opacity-20",style:{backgroundImage:`
              linear-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px)
            `,backgroundSize:"50px 50px",transform:"translate(var(--parallax-x, 0), var(--parallax-y, 0))"}}),i.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:52:9",className:"absolute top-1/4 left-1/4 w-96 h-96 bg-[#ffd700]/5 rounded-full blur-[120px]"}),i.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:53:9",className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffd700]/3 rounded-full blur-[120px]"})]}),i.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:57:7",className:"relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[i.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:59:7",className:"inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-full",children:[i.jsx(vu,{"code-path":"src\\sections\\HeroSection.tsx:60:11",className:"w-4 h-4 text-[#ffd700]"}),i.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:61:11",className:"text-sm text-[#ffd700]",children:"CD2 进阶教学详解"})]}),i.jsxs("h1",{"code-path":"src\\sections\\HeroSection.tsx:65:9",className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6",children:[i.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:66:11",className:"text-[#e6edf3]",children:"深岩银河"}),i.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:67:11",className:"text-[#ffd700]",children:"CD2"}),i.jsx("br",{"code-path":"src\\sections\\HeroSection.tsx:68:11"}),i.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:69:11",className:"text-[#e6edf3]",children:"进阶教程"})]}),i.jsxs("p",{"code-path":"src\\sections\\HeroSection.tsx:73:9",className:"text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-8",children:["从零开始学习的《深岩银河》第二代自定义难度开发",i.jsx("br",{"code-path":"src\\sections\\HeroSection.tsx:75:11"}),i.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:76:11",className:"text-sm",children:"本教程基于《星の綺麗な夜 v1.91γ》等中文社区已有的cd2代码实例"})]}),i.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:80:9",className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto",children:[{icon:l0,label:"Mutate",desc:"核心机制"},{icon:V0,label:"WaveSpawners",desc:"波次生成"},{icon:Xs,label:"Vars",desc:"变量系统"},{icon:vu,label:"Messages",desc:"消息系统"}].map((A,f)=>i.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:87:13",className:"p-4 bg-[#161b22]/80 border border-[#30363d] rounded-lg hover:border-[#ffd700]/50 transition-colors",children:[i.jsx(A.icon,{"code-path":"src\\sections\\HeroSection.tsx:91:15",className:"w-6 h-6 text-[#ffd700] mx-auto mb-2"}),i.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:92:15",className:"text-[#e6edf3] font-medium text-sm",children:A.label}),i.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:93:15",className:"text-[#8b949e] text-xs",children:A.desc})]},f))}),i.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:99:9",className:"mb-8 p-4 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg max-w-2xl mx-auto",children:i.jsxs("p",{"code-path":"src\\sections\\HeroSection.tsx:100:11",className:"text-sm text-[#8b949e]",children:[i.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:101:13",className:"text-[#ffd700]",children:"提示："}),"最好拥有CD1的开发经验，再来看CD2进阶教程"]})}),i.jsxs("button",{"code-path":"src\\sections\\HeroSection.tsx:107:9",onClick:z,className:"group inline-flex items-center gap-2 px-8 py-4 bg-[#ffd700] text-black font-bold rounded-lg hover:bg-[#ffec8b] transition-all hover:scale-105",children:["开始探索",i.jsx(ut,{"code-path":"src\\sections\\HeroSection.tsx:112:11",className:"w-5 h-5 group-hover:translate-y-1 transition-transform"})]}),i.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:116:9",className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",children:i.jsx(ut,{"code-path":"src\\sections\\HeroSection.tsx:117:11",className:"w-6 h-6 text-[#484f58]"})})]})]})}function bt({code:T,language:z="json",showLineNumbers:A=!0,className:f=""}){const[j,M]=I.useState(!1),v=async()=>{try{await navigator.clipboard.writeText(T),M(!0),setTimeout(()=>M(!1),2e3)}catch(m){console.error("Failed to copy:",m)}},w=T.split(`
`);return i.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:27:5",className:`relative group rounded-lg overflow-hidden bg-[#0d1117] border border-[#30363d] ${f}`,children:[i.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:29:7",className:"flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]",children:[i.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:30:9",className:"flex items-center gap-2",children:[i.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:31:11",className:"flex gap-1.5",children:[i.jsx("div",{"code-path":"src\\components\\CodeBlock.tsx:32:13",className:"w-3 h-3 rounded-full bg-[#ff5f56]"}),i.jsx("div",{"code-path":"src\\components\\CodeBlock.tsx:33:13",className:"w-3 h-3 rounded-full bg-[#ffbd2e]"}),i.jsx("div",{"code-path":"src\\components\\CodeBlock.tsx:34:13",className:"w-3 h-3 rounded-full bg-[#27ca40]"})]}),i.jsx("span",{"code-path":"src\\components\\CodeBlock.tsx:36:11",className:"ml-3 text-xs text-[#8b949e] font-mono",children:z})]}),i.jsx("button",{"code-path":"src\\components\\CodeBlock.tsx:38:9",onClick:v,className:"flex items-center gap-1.5 px-2 py-1 text-xs text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#30363d] rounded transition-colors",children:j?i.jsxs(i.Fragment,{children:[i.jsx(Y1,{"code-path":"src\\components\\CodeBlock.tsx:44:15",className:"w-3.5 h-3.5 text-[#3fb950]"}),i.jsx("span",{"code-path":"src\\components\\CodeBlock.tsx:45:15",className:"text-[#3fb950]",children:"已复制"})]}):i.jsxs(i.Fragment,{children:[i.jsx(s0,{"code-path":"src\\components\\CodeBlock.tsx:49:15",className:"w-3.5 h-3.5"}),i.jsx("span",{"code-path":"src\\components\\CodeBlock.tsx:50:15",children:"复制"})]})})]}),i.jsx("div",{"code-path":"src\\components\\CodeBlock.tsx:57:7",className:"overflow-x-auto p-4",children:i.jsx("pre",{"code-path":"src\\components\\CodeBlock.tsx:58:9",className:"font-mono text-sm leading-relaxed text-[#e6edf3]",children:w.map((m,S)=>i.jsxs("div",{"code-path":"src\\components\\CodeBlock.tsx:60:13",className:"flex",children:[A&&i.jsx("span",{"code-path":"src\\components\\CodeBlock.tsx:62:17",className:"select-none w-8 text-right pr-4 text-[#484f58] text-xs",children:S+1}),i.jsx("code",{"code-path":"src\\components\\CodeBlock.tsx:66:15",className:"whitespace-pre",children:m||" "})]},S))})})]})}const Lf={basic:Su,math:Su,condition:h0,trigger:vu,gamestate:O1,mission:z0,advanced:b0},Q0={basic:"基础运算",math:"数学运算",condition:"条件判断",trigger:"触发器系统",gamestate:"游戏状态获取",mission:"任务相关",advanced:"高级功能"};function J0(){const[T,z]=I.useState(new Set),[A,f]=I.useState(null),j=v=>{const w=new Set(T);w.has(v)?w.delete(v):w.add(v),z(w)},M=A?bu.filter(v=>v.category===A):bu;return i.jsx("section",{"code-path":"src\\sections\\MutateSection.tsx:45:5",id:"mutate",className:"py-20 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:46:7",className:"max-w-6xl mx-auto",children:[i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:48:9",className:"mb-12",children:[i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:49:11",className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:50:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:i.jsx(Su,{"code-path":"src\\sections\\MutateSection.tsx:51:15",className:"w-5 h-5 text-[#ffd700]"})}),i.jsx("h2",{"code-path":"src\\sections\\MutateSection.tsx:53:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"Mutate 模块"})]}),i.jsxs("p",{"code-path":"src\\sections\\MutateSection.tsx:57:11",className:"text-[#8b949e] text-lg max-w-3xl",children:["CD2核心机制。几乎所有的数据、状态获取，以及逻辑和数值的判断运算，全都要依靠Mutate进行运作。",i.jsx("span",{"code-path":"src\\sections\\MutateSection.tsx:59:13",className:"text-[#ffd700]",children:"如果没有理解Mutate，那么在CD2进阶写作中将寸步难行！"})]})]}),i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:64:9",className:"flex flex-wrap gap-2 mb-8",children:[i.jsx("button",{"code-path":"src\\sections\\MutateSection.tsx:65:11",onClick:()=>f(null),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${A===null?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:"全部"}),F0.map(v=>{const w=Lf[v.id];return i.jsxs("button",{"code-path":"src\\sections\\MutateSection.tsx:78:15",onClick:()=>f(A===v.id?null:v.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${A===v.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[i.jsx(w,{"code-path":"src\\sections\\MutateSection.tsx:87:17",className:"w-4 h-4"}),v.name]},v.id)})]}),i.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:95:9",className:"space-y-4",children:M.map(v=>{const w=T.has(v.name),m=Lf[v.category];return i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:101:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[i.jsxs("button",{"code-path":"src\\sections\\MutateSection.tsx:106:17",onClick:()=>j(v.name),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:110:19",className:"flex items-center gap-4",children:[i.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:111:21",className:"w-10 h-10 bg-[#21262d] rounded-lg flex items-center justify-center",children:i.jsx(m,{"code-path":"src\\sections\\MutateSection.tsx:112:23",className:"w-5 h-5 text-[#ffd700]"})}),i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:114:21",children:[i.jsx("h3",{"code-path":"src\\sections\\MutateSection.tsx:115:23",className:"text-lg font-semibold text-[#e6edf3]",children:v.name}),i.jsx("p",{"code-path":"src\\sections\\MutateSection.tsx:116:23",className:"text-sm text-[#8b949e]",children:Q0[v.category]})]})]}),w?i.jsx(Nt,{"code-path":"src\\sections\\MutateSection.tsx:120:21",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\MutateSection.tsx:122:21",className:"w-5 h-5 text-[#8b949e]"})]}),w&&i.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:128:19",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:129:21",className:"pt-4 space-y-4",children:[i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:131:23",children:[i.jsx("h4",{"code-path":"src\\sections\\MutateSection.tsx:132:25",className:"text-sm font-medium text-[#ffd700] mb-2",children:"描述"}),i.jsx("p",{"code-path":"src\\sections\\MutateSection.tsx:133:25",className:"text-[#8b949e]",children:v.description})]}),v.subFields&&v.subFields.length>0&&i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:138:25",children:[i.jsx("h4",{"code-path":"src\\sections\\MutateSection.tsx:139:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"字段说明"}),i.jsx("div",{"code-path":"src\\sections\\MutateSection.tsx:140:27",className:"grid gap-2",children:v.subFields.map(S=>i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:142:31",className:"flex items-start gap-3 p-3 bg-[#0d1117] rounded-lg",children:[i.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:146:33",className:"text-[#a5d6ff] font-mono text-sm",children:S.name}),i.jsx("span",{"code-path":"src\\sections\\MutateSection.tsx:147:33",className:"text-[#8b949e] text-sm",children:S.description}),S.required&&i.jsx("span",{"code-path":"src\\sections\\MutateSection.tsx:149:35",className:"text-xs px-2 py-0.5 bg-[#ffd700]/20 text-[#ffd700] rounded",children:"必需"})]},S.name))})]}),i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:160:23",children:[i.jsx("h4",{"code-path":"src\\sections\\MutateSection.tsx:161:25",className:"text-sm font-medium text-[#ffd700] mb-2",children:"示例"}),i.jsx(bt,{"code-path":"src\\sections\\MutateSection.tsx:162:25",code:v.example})]})]})})]},v.name)})}),i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:173:9",className:"mt-12 p-6 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-xl",children:[i.jsx("h3",{"code-path":"src\\sections\\MutateSection.tsx:174:11",className:"text-lg font-semibold text-[#ffd700] mb-3",children:"常用嵌套模式"}),i.jsxs("div",{"code-path":"src\\sections\\MutateSection.tsx:175:11",className:"space-y-4 text-[#8b949e]",children:[i.jsx("p",{"code-path":"src\\sections\\MutateSection.tsx:176:13",children:"Mutate的强大之处在于可以无限嵌套。以下是一些常见的嵌套模式："}),i.jsxs("ul",{"code-path":"src\\sections\\MutateSection.tsx:177:13",className:"list-disc list-inside space-y-2 ml-4",children:[i.jsxs("li",{"code-path":"src\\sections\\MutateSection.tsx:178:15",children:[i.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:178:19",className:"text-[#a5d6ff]",children:"If → IfFloat → EnemyCount"})," - 条件嵌套判断"]}),i.jsxs("li",{"code-path":"src\\sections\\MutateSection.tsx:179:15",children:[i.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:179:19",className:"text-[#a5d6ff]",children:"Clamp → Add → Multiply"})," - 数学运算后限制范围"]}),i.jsxs("li",{"code-path":"src\\sections\\MutateSection.tsx:180:15",children:[i.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:180:19",className:"text-[#a5d6ff]",children:"TriggerOnce → And → DuringMission"})," - 触发器组合"]}),i.jsxs("li",{"code-path":"src\\sections\\MutateSection.tsx:181:15",children:[i.jsx("code",{"code-path":"src\\sections\\MutateSection.tsx:181:19",className:"text-[#a5d6ff]",children:"Select → Var → ByPlayerCount"})," - 动态选择配置"]})]})]})]})]})})}const Z0=[{name:"Enabled",type:"布尔值(Boolean)或带Mutate的表达式",description:"控制波次生成器是否激活。这是最重要的字段，决定了波次何时触发。可以配合各种Mutate指令实现复杂的触发逻辑。",defaultValue:"true"},{name:"Name",type:"字符串(String)",description:"波次生成器的描述性名称。仅用于代码可读性，不影响游戏功能。",required:!1},{name:"Interval",type:"浮点数(Float)或带Mutate的表达式",description:"波次生成的时间间隔（秒）。启用后，经过Interval秒生成第一批敌人，之后每隔Interval秒重复生成。",required:!0},{name:"Enemies",type:"字符串数组(String Array)或带Mutate的表达式",description:"指定生成哪些类型的敌人。可以指定一个或多个敌人标识符（ED）。如果留空则不生成任何敌人。"},{name:"Difficulty",type:"浮点数(Float)或带Mutate的表达式",description:"分配给波次的难度点数。点数会根据列表中敌人的DifficultyRating分配到各个敌人，决定生成数量。点数越高，生成的敌人越多。",required:!0},{name:"Distance",type:"浮点数(Float)或带Mutate的表达式",description:"敌人生成点与玩家的距离（码）。控制敌人在距离玩家多远的位置生成。距离越大，敌人出现位置越远。",required:!0},{name:"Diversity",type:"整数(Integer)或带Mutate的表达式",description:"每次生成时从Enemies列表中选取的敌人种类数量。如果设置为2，每次波次会从Enemies列表中随机选取2种敌人生成。",defaultValue:"使用任务设置的默认多样性"},{name:"Locations",type:"整数(Integer)或带Mutate的表达式",description:"敌人生成点的数量。生成点越多，敌人出现的位置越分散。一般设置1方便工程核弹，设置2以上就是变相削弱工程。",required:!0},{name:"SpawnOnEnable",type:"布尔值(Boolean)",description:"波次生成器启用时是否立即生成第一批敌人。如果为true，波次启用后会跳过第一个Interval间隔立即生成敌人。",defaultValue:"false"},{name:"UnlockInterval",type:"布尔值(Boolean)",description:"是否允许动态改变Interval值。如果为true，改变Interval值会影响当前的倒计时；如果为false，Interval只在每次生成后重新计算。",defaultValue:"false"},{name:"PauseOnDisable",type:"布尔值(Boolean)",description:"波次生成器禁用时是否暂停倒计时。如果为true，禁用时计时暂停，重新启用后继续；如果为false，重新启用时计时重置。",defaultValue:"false"},{name:"Alert",type:"布尔值(Boolean)",description:"生成的敌人是否立即警觉并攻击玩家。如果为true，敌人生成后立即进入攻击状态；如果为false，敌人会保持平静直到被惊动。",defaultValue:"true"}],K0=[{title:"基础定时波次（恒压潮）",description:"每2分钟生成一次，在距离玩家15米的2个位置生成总难度150点的战士和护卫混合波次。",code:`{
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
}`,explanation:["TriggerOnChange: 检测ResuppliesCalled变化","TriggerSometimes P=0.3: 30%概率触发","生成小自爆和捕手蝇干扰玩家补给"]}],W0=[{question:"为什么我的WaveSpawner没有生成敌人？",answer:`检查以下可能原因：
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
// 场上每多一个敌人，间隔增加10秒`}],I0=[{title:"三层嵌套示例",description:"检测补给呼叫，延迟15秒后，以30%概率触发",code:`{
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
}`,level:4}];function $0(){const[T,z]=I.useState(new Set),[A,f]=I.useState(new Set(["基础定时波次（恒压潮）"])),[j,M]=I.useState("fields"),v=m=>{const S=new Set(T);S.has(m)?S.delete(m):S.add(m),z(S)},w=m=>{const S=new Set(A);S.has(m)?S.delete(m):S.add(m),f(S)};return i.jsx("section",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:32:5",id:"wavespawners",className:"py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]",children:i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:33:7",className:"max-w-6xl mx-auto",children:[i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:35:9",className:"mb-12",children:[i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:36:11",className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:37:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:i.jsx(kf,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:38:15",className:"w-5 h-5 text-[#ffd700]"})}),i.jsx("h2",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:40:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"WaveSpawners 模块"})]}),i.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:44:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"波次生成器。设定自定义虫潮，控制刷潮数量、时间、间隔、距离、条件等。 可以刷出单个敌人（如BOSS），也可以刷出多样性虫群。"})]}),i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:51:9",className:"flex flex-wrap gap-2 mb-8",children:[{id:"fields",label:"字段说明",icon:Qs},{id:"examples",label:"实战示例",icon:kf},{id:"nested",label:"嵌套教程",icon:Qs},{id:"faq",label:"常见问题",icon:P1}].map(m=>i.jsxs("button",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:58:13",onClick:()=>M(m.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${j===m.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[i.jsx(m.icon,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:67:15",className:"w-4 h-4"}),m.label]},m.id))}),j==="fields"&&i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:75:11",className:"space-y-4",children:Z0.map(m=>{const S=T.has(m.name);return i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:80:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[i.jsxs("button",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:84:19",onClick:()=>v(m.name),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:88:21",className:"flex items-center gap-4",children:[i.jsx("code",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:89:23",className:"px-3 py-1.5 bg-[#21262d] text-[#a5d6ff] rounded-lg font-mono text-sm",children:m.name}),i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:92:23",className:"flex items-center gap-2",children:[m.required&&i.jsx("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:94:27",className:"text-xs px-2 py-0.5 bg-[#ffd700]/20 text-[#ffd700] rounded",children:"必需"}),m.defaultValue&&i.jsxs("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:99:27",className:"text-xs text-[#8b949e]",children:["默认: ",m.defaultValue]})]})]}),S?i.jsx(Nt,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:106:23",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:108:23",className:"w-5 h-5 text-[#8b949e]"})]}),S&&i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:113:21",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:114:23",className:"pt-4 space-y-3",children:[i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:115:25",children:[i.jsx("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:116:27",className:"text-sm text-[#ffd700]",children:"类型: "}),i.jsx("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:117:27",className:"text-sm text-[#8b949e]",children:m.type})]}),i.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:119:25",className:"text-[#8b949e]",children:m.description})]})})]},m.name)})}),j==="examples"&&i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:131:11",className:"space-y-4",children:K0.map(m=>{const S=A.has(m.title);return i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:136:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[i.jsxs("button",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:140:19",onClick:()=>w(m.title),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:144:21",children:[i.jsx("h3",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:145:23",className:"text-lg font-semibold text-[#e6edf3]",children:m.title}),i.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:146:23",className:"text-sm text-[#8b949e] mt-1",children:m.description})]}),S?i.jsx(Nt,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:149:23",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:151:23",className:"w-5 h-5 text-[#8b949e]"})]}),S&&i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:156:21",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:157:23",className:"pt-4 space-y-4",children:[i.jsx(bt,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:158:25",code:m.code}),i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:159:25",className:"p-4 bg-[#0d1117] rounded-lg",children:[i.jsx("h4",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:160:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"代码解析"}),i.jsx("ul",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:161:27",className:"space-y-1 text-sm text-[#8b949e]",children:m.explanation.map((L,H)=>i.jsxs("li",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:163:31",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:164:33",className:"text-[#ffd700]",children:"•"}),L]},H))})]})]})})]},m.title)})}),j==="nested"&&i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:181:11",className:"space-y-6",children:[i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:182:13",className:"p-4 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg",children:i.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:183:15",className:"text-[#8b949e]",children:"WaveSpawners的进阶模块会大量依赖Mutate的使用。以下是常见的嵌套示例，从三层到四层嵌套："})}),i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:188:13",className:"space-y-4",children:I0.map(m=>i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:190:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden",children:i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:194:19",className:"p-5",children:[i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:195:21",className:"flex items-center gap-3 mb-3",children:[i.jsxs("span",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:196:23",className:"px-2 py-1 bg-[#ffd700]/20 text-[#ffd700] text-xs rounded",children:[m.level,"层嵌套"]}),i.jsx("h3",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:199:23",className:"text-lg font-semibold text-[#e6edf3]",children:m.title})]}),i.jsx("p",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:201:21",className:"text-[#8b949e] mb-4",children:m.description}),i.jsx(bt,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:202:21",code:m.code})]})},m.title))})]}),j==="faq"&&i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:212:11",className:"space-y-4",children:W0.map((m,S)=>i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:214:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:218:17",className:"flex items-start gap-3",children:[i.jsx(yu,{"code-path":"src\\sections\\WaveSpawnerSection.tsx:219:19",className:"w-5 h-5 text-[#ffd700] flex-shrink-0 mt-0.5"}),i.jsxs("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:220:19",children:[i.jsx("h3",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:221:21",className:"text-lg font-semibold text-[#e6edf3] mb-2",children:m.question}),i.jsx("div",{"code-path":"src\\sections\\WaveSpawnerSection.tsx:222:21",className:"text-[#8b949e] whitespace-pre-line",children:m.answer})]})]})},S))})]})})}const P0=[{title:"固定值变量",description:"数值变量，用于存储一个固定的数值。",code:`"Vars": {
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

这会导致错误！`},{title:"利用LockFloat创建快照",description:"使用LockFloat在特定时刻'冻结'变量值",examples:["记录副任务完成时的击杀数","记录首次触发时间","记录每次进化时的基准值"]}],ah=[{title:"Vars的本质",content:"在Vars里面自定义的变量，是可以用规定的字段格式直接替代数值里的数字的。本质上就是把某个数字设为x，然后我们再在Vars模块里去定义x被什么因素决定。"},{title:"不支持Vars的字段",content:"游戏里的某些值是不支持替换成Vars的。目前测试发现所有敌人的heal值不支持将Vars填进去，游戏会报错。Heal支持动态改变，但不支持将Vars填进去。还有哪些不支持呢？作者现在也不知道，需要大家自行测试。"},{title:"变量类型",content:"Float（浮点数）用于数值计算，Boolean（布尔值）用于条件判断，String（字符串）用于Select选择。选择正确的类型很重要。"},{title:"性能考虑",content:"复杂的Vars计算每帧都会执行，过多的嵌套可能会影响性能。建议将复杂计算拆分成多个中间变量，并使用Watch调试用完后关闭。"}];function lh(){const[T,z]=I.useState(new Set(["基础变量定义"])),[A,f]=I.useState(new Set),[j,M]=I.useState("examples"),v=m=>{const S=new Set(T);S.has(m)?S.delete(m):S.add(m),z(S)},w=m=>{const S=new Set(A);S.has(m)?S.delete(m):S.add(m),f(S)};return i.jsx("section",{"code-path":"src\\sections\\VarsSection.tsx:32:5",id:"vars",className:"py-20 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:33:7",className:"max-w-6xl mx-auto",children:[i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:35:9",className:"mb-12",children:[i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:36:11",className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:37:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:i.jsx(Uf,{"code-path":"src\\sections\\VarsSection.tsx:38:15",className:"w-5 h-5 text-[#ffd700]"})}),i.jsx("h2",{"code-path":"src\\sections\\VarsSection.tsx:40:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"Vars 模块"})]}),i.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:44:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"变量系统。在Vars里面自定义的变量，可以用规定的字段格式直接替代数值里的数字。 本质上就是把某个数字设为x，然后我们再在Vars模块里去定义x被什么因素决定。"})]}),i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:51:9",className:"mb-8 p-4 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-xl",children:i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:52:11",className:"flex items-start gap-3",children:[i.jsx(yu,{"code-path":"src\\sections\\VarsSection.tsx:53:13",className:"w-5 h-5 text-[#ffd700] flex-shrink-0 mt-0.5"}),i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:54:13",children:[i.jsx("h4",{"code-path":"src\\sections\\VarsSection.tsx:55:15",className:"font-semibold text-[#ffd700] mb-1",children:"重要提示"}),i.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:56:15",className:"text-[#8b949e] text-sm",children:"游戏里的某些值是不支持替换成Vars的。目前测试发现所有敌人的heal值不支持将Vars填进去，游戏会报错。 Heal支持动态改变，但不支持将Vars填进去。还有哪些不支持呢？作者现在也不知道，需要大家自行测试。"})]})]})}),i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:65:9",className:"flex flex-wrap gap-2 mb-8",children:[{id:"examples",label:"基础示例",icon:Uf},{id:"mechanisms",label:"游戏机制",icon:Mu},{id:"practices",label:"最佳实践",icon:gu},{id:"notes",label:"注意事项",icon:yu}].map(m=>i.jsxs("button",{"code-path":"src\\sections\\VarsSection.tsx:72:13",onClick:()=>M(m.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${j===m.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[i.jsx(m.icon,{"code-path":"src\\sections\\VarsSection.tsx:81:15",className:"w-4 h-4"}),m.label]},m.id))}),j==="examples"&&i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:89:11",className:"space-y-4",children:P0.map(m=>{const S=T.has(m.title);return i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:94:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[i.jsxs("button",{"code-path":"src\\sections\\VarsSection.tsx:98:19",onClick:()=>v(m.title),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:102:21",children:[i.jsx("h3",{"code-path":"src\\sections\\VarsSection.tsx:103:23",className:"text-lg font-semibold text-[#e6edf3]",children:m.title}),i.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:104:23",className:"text-sm text-[#8b949e] mt-1",children:m.description})]}),S?i.jsx(Nt,{"code-path":"src\\sections\\VarsSection.tsx:107:23",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\VarsSection.tsx:109:23",className:"w-5 h-5 text-[#8b949e]"})]}),S&&i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:114:21",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:115:23",className:"pt-4 space-y-4",children:[i.jsx(bt,{"code-path":"src\\sections\\VarsSection.tsx:116:25",code:m.code}),i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:117:25",className:"p-4 bg-[#0d1117] rounded-lg",children:[i.jsx("h4",{"code-path":"src\\sections\\VarsSection.tsx:118:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"代码解析"}),i.jsx("ul",{"code-path":"src\\sections\\VarsSection.tsx:119:27",className:"space-y-1 text-sm text-[#8b949e]",children:m.explanation.map((L,H)=>i.jsxs("li",{"code-path":"src\\sections\\VarsSection.tsx:121:31",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:122:33",className:"text-[#ffd700]",children:"•"}),L]},H))})]})]})})]},m.title)})}),j==="mechanisms"&&i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:139:11",className:"space-y-4",children:eh.map(m=>{const S=A.has(m.title);return i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:144:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[i.jsxs("button",{"code-path":"src\\sections\\VarsSection.tsx:148:19",onClick:()=>w(m.title),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:152:21",children:[i.jsx("h3",{"code-path":"src\\sections\\VarsSection.tsx:153:23",className:"text-lg font-semibold text-[#e6edf3]",children:m.title}),i.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:154:23",className:"text-sm text-[#8b949e] mt-1",children:m.description})]}),S?i.jsx(Nt,{"code-path":"src\\sections\\VarsSection.tsx:157:23",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\VarsSection.tsx:159:23",className:"w-5 h-5 text-[#8b949e]"})]}),S&&i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:164:21",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:165:23",className:"pt-4 space-y-4",children:[i.jsx(bt,{"code-path":"src\\sections\\VarsSection.tsx:166:25",code:m.code}),i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:167:25",className:"p-4 bg-[#0d1117] rounded-lg",children:[i.jsx("h4",{"code-path":"src\\sections\\VarsSection.tsx:168:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"实现原理"}),i.jsx("ul",{"code-path":"src\\sections\\VarsSection.tsx:169:27",className:"space-y-1 text-sm text-[#8b949e]",children:m.explanation.map((L,H)=>i.jsxs("li",{"code-path":"src\\sections\\VarsSection.tsx:171:31",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:172:33",className:"text-[#ffd700]",children:"•"}),L]},H))})]})]})})]},m.title)})}),j==="practices"&&i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:189:11",className:"space-y-6",children:th.map((m,S)=>i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:191:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-6",children:[i.jsx("h3",{"code-path":"src\\sections\\VarsSection.tsx:192:17",className:"text-lg font-semibold text-[#e6edf3] mb-3",children:m.title}),i.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:193:17",className:"text-[#8b949e] mb-4",children:m.description}),"good"in m&&i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:196:19",className:"grid md:grid-cols-2 gap-4",children:[i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:197:21",className:"p-4 bg-[#0d1117] rounded-lg border border-[#238636]/30",children:[i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:198:23",className:"flex items-center gap-2 mb-2",children:[i.jsx(gu,{"code-path":"src\\sections\\VarsSection.tsx:199:25",className:"w-4 h-4 text-[#238636]"}),i.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:200:25",className:"text-sm font-medium text-[#238636]",children:"推荐"})]}),i.jsx("pre",{"code-path":"src\\sections\\VarsSection.tsx:202:23",className:"text-sm text-[#8b949e] whitespace-pre-wrap",children:m.good})]}),"bad"in m&&i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:205:23",className:"p-4 bg-[#0d1117] rounded-lg border border-[#da3633]/30",children:[i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:206:25",className:"flex items-center gap-2 mb-2",children:[i.jsx(Qf,{"code-path":"src\\sections\\VarsSection.tsx:207:27",className:"w-4 h-4 text-[#da3633]"}),i.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:208:27",className:"text-sm font-medium text-[#da3633]",children:"不推荐"})]}),i.jsx("pre",{"code-path":"src\\sections\\VarsSection.tsx:210:25",className:"text-sm text-[#8b949e] whitespace-pre-wrap",children:m.bad})]})]}),"example"in m&&i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:217:19",className:"p-4 bg-[#0d1117] rounded-lg",children:i.jsx("pre",{"code-path":"src\\sections\\VarsSection.tsx:218:21",className:"text-sm text-[#8b949e] whitespace-pre-wrap",children:m.example})}),"tip"in m&&i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:223:19",className:"p-3 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg",children:i.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:224:21",className:"text-sm text-[#ffd700]",children:m.tip})}),"warning"in m&&i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:229:19",className:"p-3 bg-[#da3633]/5 border border-[#da3633]/20 rounded-lg",children:i.jsx("pre",{"code-path":"src\\sections\\VarsSection.tsx:230:21",className:"text-sm text-[#da3633] whitespace-pre-wrap",children:m.warning})}),"examples"in m&&i.jsx("ul",{"code-path":"src\\sections\\VarsSection.tsx:235:19",className:"space-y-2",children:m.examples?.map((L,H)=>i.jsxs("li",{"code-path":"src\\sections\\VarsSection.tsx:237:23",className:"flex items-start gap-2 text-sm text-[#8b949e]",children:[i.jsx("span",{"code-path":"src\\sections\\VarsSection.tsx:238:25",className:"text-[#ffd700]",children:"•"}),L]},H))})]},S))}),j==="notes"&&i.jsx("div",{"code-path":"src\\sections\\VarsSection.tsx:251:11",className:"space-y-4",children:ah.map((m,S)=>i.jsxs("div",{"code-path":"src\\sections\\VarsSection.tsx:253:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[i.jsx("h3",{"code-path":"src\\sections\\VarsSection.tsx:257:17",className:"text-lg font-semibold text-[#ffd700] mb-2",children:m.title}),i.jsx("p",{"code-path":"src\\sections\\VarsSection.tsx:258:17",className:"text-[#8b949e]",children:m.content})]},S))})]})})}const nh=[{name:"Game",color:"#FFFFFF",description:"游戏消息（白色）"},{name:"Normal",color:"#808080",description:"普通消息（灰色）"},{name:"Delux",color:"#FFD700",description:"支持者消息（金色）"},{name:"Developer",color:"#00FF00",description:"开发者消息（绿色）"},{name:"Streamer",color:"#0080FF",description:"主播消息（蓝色）"},{name:"Modder",color:"#FF69B4",description:"Modder消息（跟随玩家实际颜色，且会显示：[启用mod]）"}],sh=[{name:"Send",type:"布尔值(Boolean)或带Mutate的表达式",description:"发送条件。当此值为true时发送消息。",required:!0},{name:"SendOnChange",type:"布尔值(Boolean)",description:"当另一个值发生变化时发送消息（例如：倒计时性质的消息）。",defaultValue:"false"},{name:"Type",type:"字符串(String)",description:"消息类型，决定消息颜色。",defaultValue:"Game"},{name:"Sender",type:"字符串(String)",description:"发送人名称，显示在消息前面。",defaultValue:"CD2"},{name:"Message",type:"字符串(String)或带Mutate的表达式",description:"要发送的消息内容。",required:!0}],ih=[{title:"倒计时消息",description:"使用Countdown Mutator实现倒计时，每秒更新显示。",code:`{
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
        "Then": "高压虫潮！敌人数量超过100！",
        "Else": "普通虫潮来袭，做好准备！"
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
      "Message": "无畏异虫已被消灭！"
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
      "Message": "任务已开始5分钟，难度即将提升！"
    },
    {
      "Send": {
        "Mutate": "TriggerOnce",
        "In": { "Mutate": "DuringMission", "StartingAt": 600 }
      },
      "Type": "Streamer",
      "Sender": "任务进度",
      "Message": "任务已开始10分钟，进入高压阶段！"
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
          "有队友倒地了，快拉人",
          "还逛街呢？",
          "再不拉人我真要狂按X了",
          "别拉我，我要睡觉"
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
      "Sender": "警告",
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
}`}];function oh(){const[T,z]=I.useState(new Set(["倒计时消息"])),[A,f]=I.useState("types"),j=M=>{const v=new Set(T);v.has(M)?v.delete(M):v.add(M),z(v)};return i.jsx("section",{"code-path":"src\\sections\\MessagesSection.tsx:21:5",id:"messages",className:"py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]",children:i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:22:7",className:"max-w-6xl mx-auto",children:[i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:24:9",className:"mb-12",children:[i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:25:11",className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:26:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:i.jsx(qf,{"code-path":"src\\sections\\MessagesSection.tsx:27:15",className:"w-5 h-5 text-[#ffd700]"})}),i.jsx("h2",{"code-path":"src\\sections\\MessagesSection.tsx:29:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"Messages 模块"})]}),i.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:33:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"消息系统。用于在游戏中发送各种提示消息，支持动态数值、条件分支、倒计时等功能。"})]}),i.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:39:9",className:"flex flex-wrap gap-2 mb-8",children:[{id:"types",label:"消息类型",icon:Jf},{id:"fields",label:"字段说明",icon:d0},{id:"examples",label:"实战示例",icon:qf},{id:"templates",label:"常用模板",icon:M0}].map(M=>i.jsxs("button",{"code-path":"src\\sections\\MessagesSection.tsx:46:13",onClick:()=>f(M.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${A===M.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[i.jsx(M.icon,{"code-path":"src\\sections\\MessagesSection.tsx:55:15",className:"w-4 h-4"}),M.label]},M.id))}),A==="types"&&i.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:63:11",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:nh.map(M=>i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:65:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#ffd700]/30 transition-colors",children:[i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:69:17",className:"flex items-center gap-3 mb-3",children:[i.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:70:19",className:"w-6 h-6 rounded",style:{backgroundColor:M.color}}),i.jsx("code",{"code-path":"src\\sections\\MessagesSection.tsx:74:19",className:"text-[#a5d6ff] font-mono",children:M.name})]}),i.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:76:17",className:"text-[#8b949e] text-sm",children:M.description})]},M.name))}),A==="fields"&&i.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:84:11",className:"space-y-4",children:sh.map(M=>i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:86:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:90:17",className:"flex items-center gap-3 mb-3",children:[i.jsx("code",{"code-path":"src\\sections\\MessagesSection.tsx:91:19",className:"px-3 py-1.5 bg-[#21262d] text-[#a5d6ff] rounded-lg font-mono text-sm",children:M.name}),M.required&&i.jsx("span",{"code-path":"src\\sections\\MessagesSection.tsx:95:21",className:"text-xs px-2 py-0.5 bg-[#ffd700]/20 text-[#ffd700] rounded",children:"必需"}),M.defaultValue&&i.jsxs("span",{"code-path":"src\\sections\\MessagesSection.tsx:100:21",className:"text-xs text-[#8b949e]",children:["默认: ",M.defaultValue]})]}),i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:105:17",className:"mb-2",children:[i.jsx("span",{"code-path":"src\\sections\\MessagesSection.tsx:106:19",className:"text-sm text-[#ffd700]",children:"类型: "}),i.jsx("span",{"code-path":"src\\sections\\MessagesSection.tsx:107:19",className:"text-sm text-[#8b949e]",children:M.type})]}),i.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:109:17",className:"text-[#8b949e]",children:M.description})]},M.name))}),A==="examples"&&i.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:117:11",className:"space-y-4",children:ih.map(M=>{const v=T.has(M.title);return i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:122:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[i.jsxs("button",{"code-path":"src\\sections\\MessagesSection.tsx:126:19",onClick:()=>j(M.title),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:130:21",children:[i.jsx("h3",{"code-path":"src\\sections\\MessagesSection.tsx:131:23",className:"text-lg font-semibold text-[#e6edf3]",children:M.title}),i.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:132:23",className:"text-sm text-[#8b949e] mt-1",children:M.description})]}),v?i.jsx(Nt,{"code-path":"src\\sections\\MessagesSection.tsx:135:23",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\MessagesSection.tsx:137:23",className:"w-5 h-5 text-[#8b949e]"})]}),v&&i.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:142:21",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:143:23",className:"pt-4 space-y-4",children:[i.jsx(bt,{"code-path":"src\\sections\\MessagesSection.tsx:144:25",code:M.code}),i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:145:25",className:"p-4 bg-[#0d1117] rounded-lg",children:[i.jsx("h4",{"code-path":"src\\sections\\MessagesSection.tsx:146:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"代码解析"}),i.jsx("ul",{"code-path":"src\\sections\\MessagesSection.tsx:147:27",className:"space-y-1 text-sm text-[#8b949e]",children:M.explanation.map((w,m)=>i.jsxs("li",{"code-path":"src\\sections\\MessagesSection.tsx:149:31",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\MessagesSection.tsx:150:33",className:"text-[#ffd700]",children:"•"}),w]},m))})]})]})})]},M.title)})}),A==="templates"&&i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:167:11",className:"space-y-8",children:[i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:169:13",children:[i.jsx("h3",{"code-path":"src\\sections\\MessagesSection.tsx:170:15",className:"text-lg font-semibold text-[#e6edf3] mb-4",children:"常用模板"}),i.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:171:15",className:"space-y-4",children:ch.map((M,v)=>i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:173:19",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[i.jsx("h4",{"code-path":"src\\sections\\MessagesSection.tsx:174:21",className:"text-[#ffd700] font-medium mb-2",children:M.name}),i.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:175:21",className:"text-[#8b949e] text-sm mb-4",children:M.description}),i.jsx(bt,{"code-path":"src\\sections\\MessagesSection.tsx:176:21",code:M.code})]},v))})]}),i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:183:13",children:[i.jsx("h3",{"code-path":"src\\sections\\MessagesSection.tsx:184:15",className:"text-lg font-semibold text-[#e6edf3] mb-4",children:"常用模式"}),i.jsx("div",{"code-path":"src\\sections\\MessagesSection.tsx:185:15",className:"space-y-4",children:uh.map((M,v)=>i.jsxs("div",{"code-path":"src\\sections\\MessagesSection.tsx:187:19",className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[i.jsx("h4",{"code-path":"src\\sections\\MessagesSection.tsx:188:21",className:"text-[#ffd700] font-medium mb-2",children:M.name}),i.jsx("p",{"code-path":"src\\sections\\MessagesSection.tsx:189:21",className:"text-[#8b949e] text-sm mb-4",children:M.description}),i.jsx(bt,{"code-path":"src\\sections\\MessagesSection.tsx:190:21",code:M.pattern})]},v))})]})]})]})})}const Yf=[{id:1,title:"改硝石",difficulty:1,difficultyLabel:"⭐ 入门",description:"根据玩家人数调整补给消耗，1人80硝石，2人60硝石，3人50硝石，4人40硝石，5人30硝石，6人20硝石",hint:"使用ByPlayerCount直接返回对应数值",answer:`"Resupply": {
  "Cost": {
    "Mutate": "ByPlayerCount",
    "Values": [80, 60, 50, 40, 30, 20]
  }
}`,explanation:["Resupply：补给词条","Cost: Resupply词条下的子词条，意为花费","ByPlayerCount: 用mutate获取数据→→根据玩家人数决定","Values: 具体决定的数值，用[]数组表示，括号内从左至右依次是1~n人"]},{id:2,title:"改发射物",difficulty:1,difficultyLabel:"⭐ 入门",description:"矮人弹药低于50%时，速射酸虫发射物替换为钻机雪球",hint:"使用IfFloat判断DwarvesAmmo < 0.5，在then和else下选择不同的输出类型",answer:`"EnemiesNoSync": {
  "ED_Spider_RapidShooter": {
    "Base": "ED_Spider_RapidShooter",
    "Projectile": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "DwarvesAmmo" }, 
        "<": 0.5,                            
        "Then": "PRJ_Crye_SnowBall_C",       // 钻机雪球代码
        "Else": "PRJ_Spider_RapidShooter_C"  // 速射原版子弹代码
      },
  }
}`,explanation:["首先去附录表格查询发射物代码对照表","在EnemiesNoSync字段下添加ED_Spider_RapidShooter子字段（速射酸虫）","在ED_Spider_RapidShooter字段下添加子字段Projectile（发射物）","使用Mutate做条件判断，满足条件→输出then的内容，不满足条件→输出else的内容"]},{id:3,title:"控制虫群死亡-1",difficulty:1,difficultyLabel:"⭐ 入门",description:"无畏出现时，杀死在场所有禁卫",hint:"使用IfFloat判断ED_Spider_Tank_Boss状态，在heal下直接修改输出数值",answer:`
    "EnemiesNoSync": {
      "ED_Spider_Tank": {
      "Base": "ED_Spider_Tank",
      "Heal": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "EnemyCount", "ED": "ED_Spider_Tank_Boss" },  // EnemyCount获取ED_Spider_Tank_Boss数量
        ">=": 1,        // ED_Spider_Tank_Boss数量大于1（即存在），则输出then，否则输出else
        "Then": -10000,
        "Else": 0
    }
  }
}`,explanation:["用Mutate下的IfFloat字段替换Heal值的数据","在Value下定义数据","用Mutate下的EnemyCount获取 无畏 数量","判断是否 ≥ 1，是则输出 then=-10000 杀死禁卫 ，否则输出 else=0 不作修改"]},{id:4,title:"控制虫群死亡-2",difficulty:2,difficultyLabel:"⭐⭐ 简单",description:"当无畏死亡时，杀死在场所有禁卫",hint:"给禁卫异虫的Heal字段设置负值使其立即死亡，用IfFloat判断无畏状态，或者用spawn字段里的OnDeathKillSpawns子字段",answer:`

  // ====================================
  // 解法一（直接使用IfFloat判断）
  // ====================================

    "EnemiesNoSync": {
    "ED_Spider_Tank": {
      "Base": "ED_Spider_Tank",
      "Heal": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "EnemiesKilled", "ED": "ED_Spider_Tank_Boss" },  // EnemiesKilled获取ED_Spider_Tank_Boss死亡数量
        ">=": 1,        // ED_Spider_Tank_Boss死亡数量大于1，则输出then，否则输出else
        "Then": -10000,
        "Else": 0
    }
  }
}  
  // 很显然，解法一是有缺陷的！根据这段代码的逻辑，只要无畏死过一次，该局游戏内的所有禁卫的heal值将会永远保持-10000（相当于这局你将不再见到任何禁卫）
  // 该如何避免这种情况呢？请看解法二！

  // =========================================
  // 解法二（使用IfFloat嵌套Delta判断）--最佳解法
  // =========================================

    "EnemiesNoSync": {
      "ED_Spider_Tank": {
        "Base": "ED_Spider_Tank",
        "Heal": {
          "Mutate": "IfFloat",
          "Value": {
            "Mutate": "Delta",    // Delta检测数值变化量
            "Value": { "Mutate": "EnemiesKilled", "ED": "ED_Spider_Tank_Boss" }   // EnemiesKilled检测ED_Spider_Tank_Boss死亡数量
          },
          ">": 0,         // ED_Spider_Tank_Boss死亡数量增加，则输出then，否则输出else
          "Then": -10000,
          "Else": 0
    }
  }
}
    // 由于Delta字段（">": 0）只检测死亡数字变化增量，而不是死亡数字有多少，因此在新的无畏死亡之前，Heal值将会走入else=0，不会杀死禁卫
    // 当然，你也可以把">": 0改成">": 2，这样的效果是：每当无畏死亡2个时，才会使Heal值走入then=-10000，进而杀死所有禁卫
    // 那么，还有没有别的解法？当然有，请看解法三！

  // ===================================================
  // 解法三（利用Spawn字段中的OnDeathKillSpawns字段）
  // ===================================================
  
    "EnemiesNoSync": {
    "ED_Spider_Tank_Boss": {
      "Base": "ED_Spider_Tank_Boss",   // 定义无畏异虫
      "Spawner": {
        "ED": "ED_Spider_Tank",        // 在无畏异虫的spawn字段里定义禁卫，使无畏召唤禁卫
        "OnSpawnDelay": 0,
        "OnSpawnCount": 1,
        "IntervalSpawnCount": 1,
        "Interval": 30,
        "OnDeathCount": 0,
        "MaxSpawns": 3, 
        "OnDeathKillSpawns": true      // 改成true，使用OnDeathKillSpawns字段直接控制，无畏死亡→禁卫立刻死亡（仅限无畏召唤出来的禁卫）
    }
  }
}
  // 这三种解法有什么区别？
  // 第一种：全局监听，监听无畏死亡数量的绝对值，只要无畏死亡过，则进入then分支，否则进入else分支
  // 第二种：全局监听，但只监听无畏死亡数量的增量，无畏死亡数量必须达到你指定的增量，才进入then分支，否则进入else分支
                                          ↓
                                          →（如果你填的＜0，那就是减量，当然，死亡数量只能为增量，减量不能用在这里，应该用在别的地方）
  // 第三种：局部监听，只有ED_Spider_Tank_Boss召唤出来的ED_Spider_Tank，才会随之一起死亡，其他的ED_Spider_Tank不会受到影响`,explanation:["最佳解法思路（解法二）","Delta：用mutate获取数据→→获取数值的变化量（本次与上次的差值）","EnemiesKilled：用mutate获取数据→→获取指定敌人的累计死亡数量","> 0：判断变化量是否大于0（是否刚刚有新增死亡）","Then: -10000：当无畏死亡时，禁卫每秒受到10000伤害（立即死亡）","Else: 0：无畏没有新死亡时，禁卫不受额外伤害"]},{id:5,title:"控制虫群生成-1",difficulty:2,difficultyLabel:"⭐⭐ 简单",description:"当双子中的一个死亡时，另一个会在10秒内复活它",hint:"使用spawn字段，或者wavespawn触发器，结合IfFloat判断EnemyCount",answer:`

  // ===================================================
  // 解法一（利用spawn控制循环生成）
  // ===================================================

  // 思路：双子A → → → Spawn 双子B  → → → Spawn 双子A → → → Spawn 双子B...实现相互复活循环

    "EnemiesNoSync": {
      "ED_Spider_Boss_TwinA": {                // 定义双子A
      "Base": "ED_Spider_Boss_TwinA",
      "Spawner": {
        "ED": "ED_Spider_Boss_TwinB",          // 生成双子B     
        "OnSpawnDelay": 0,                 
        "OnSpawnCount": 0,                   
        "IntervalSpawnCount": 1,               // 间隔生成1个
        "Interval": 10,                        // 间隔 10 秒                 
        "OnDeathCount": 0,                 
        "MaxSpawns": 1,                        
        "OnDeathKillSpawns": false              
    }
  },
      "ED_Spider_Boss_TwinB": {                // 定义双子B
      "Base": "ED_Spider_Boss_TwinB",
      "Spawner": {
        "ED": "ED_Spider_Boss_TwinA",          // 生成双子A
        "OnSpawnDelay": 0,                 
        "OnSpawnCount": 0,                   
        "IntervalSpawnCount": 1,               // 间隔生成1个
        "Interval": 10,                        // 间隔 10 秒                 
        "OnDeathCount": 0,                 
        "MaxSpawns": 1,          
        "OnDeathKillSpawns": false
    }
  }
}
  // 缺点：占用双子的Spawn槽位
  // 还有更好的方式吗？
  // 请看解法二！

  // ===================================================
  // 解法二（利用wavespawn多层嵌套，实现复杂逻辑判断）
  // ===================================================
 
    {
      "Enabled": {
        "Mutate": "IfFloat",
        "Value": {
          "Mutate": "EnemyCount",
          "EDs": [
            "ED_Spider_Boss_TwinA",
            "ED_Spider_Boss_TwinB"
          ]
        },
        "==": 1,                  // 检测 双子A+双子B 的数量是否等于 1 （相当于，双子中是否有任意一个存活）
        "Then": true,             // 有 则输出true，允许触发（有双子活着就生成）
        "Else": false             // 没有 则输出false，不允许触发（相当于，双子都死了，就不生成新的双子了）
      },
      "Enemies": {                // 触发生成 Enemies 
        "Mutate": "IfFloat",                    ↓
        "Value": {                              ↓
          "Mutate": "EnemyCount",               ↓
          "ED": "ED_Spider_Boss_TwinA"   // 检测 ED_Spider_Boss_TwinA（双子A） 的数量
        },                                      ↓
        ">=": 1,                         // 双子A 的数量是否 ≥1 ？（即 双子A 存在）
        "Then": [                               ↓
          "ED_Spider_Boss_TwinB"         // 是 输出then 生成 双子B （存在 双子A 就生成 双子B）
        ],                                      ↓
        "Else": [                               ↓
          "ED_Spider_Boss_TwinA"         // 否 输出else 生成 双子A （不存在 双子A 说明存在 双子B 因此生成 双子A）
        ]
      },
      "Interval": 10,
      "Difficulty": 1,
      "Distance": 1000,
      "Locations": 1,
      "PauseOnDisable": true
    },`,explanation:["最佳解法思路（解法二）","== 1：当 双子A 与 双子B 总数等于 1 时触发（只剩一个）","如果有A，就生成B","如果没A，就生成A（等效于 如果有B，就生成A）"]},{id:6,title:"控制虫群生成-2",difficulty:2,difficultyLabel:"⭐⭐ 简单",description:"当无畏出现时，立刻生成禁卫",hint:"使用WaveSpawners的Enabled配合TriggerOnChange监听无畏出现，也可以用spawn字段实现",answer:`

  // ===================================================
  // 解法一（利用wavespawn控制虫群生成）
  // ===================================================
  
    "WaveSpawners": [
  {
    "Enabled": {
      "Mutate": "TriggerOnChange", // TriggerOnChange结合EnemyCount：监听ED_Spider_Tank_Boss当前数量的变化，一旦改变即视为触发
      "In": {                                 ↓             ↓ 
        "Mutate": "EnemyCount",               ↓             ↓ → → 改成EnemiesKilled，就是监听死亡数量的变化
        "ED": "ED_Spider_Tank_Boss"           ↓              
      }                                       ↓ → → 改成TriggerOnce，就是只全局触发一次，而不是每次改变数量都触发
    },
    "Enemies": ["ED_Spider_Tank"],   // Enemies 指明生成 ED_Spider_Tank
    "Interval": 0,
    "Difficulty": 1, // 生成价值 1 点数的虫潮，若设置过高比如1000，可能会导致出现大量ED_Spider_Tank
    "Distance": 500, // 玩家为圆心，半径500码上生成                        ↓ → → → 如果你只想刷出一个，那么建议就填 1                              
    "Locations": 1,    // 随机选取 Distance 指明半径的圆周上的 1 个位置生成     ↓ → → → 要刚好刷出指定的2/3/4...个怎么办？请看解法二 和 解法三！            
    "SpawnOnEnable": true  // 触发立即生成，跳过 Interval 指明的延迟时间  
  }
]
                                                                                                   （以上注释后面不再赘述）

  // ===================================================
  // 解法二（利用spawn控制虫群生成）
  // ===================================================
    
  "EnemiesNoSync": {
    "ED_Spider_Tank_Boss": {
      "Base": "ED_Spider_Tank_Boss",   // 定义无畏异虫
      "Spawner": {
        "ED": "ED_Spider_Tank",        // 在无畏异虫的spawn字段里定义 ED_Spider_Tank 使无畏召唤禁卫
        "OnSpawnDelay": 0,             // 无畏 出现后，第一次生成 禁卫 的延迟时间，0表示不延迟直接生成
        "OnSpawnCount": 1,             // 无畏 出现后，第一次生成 禁卫 的数量为 1
        "IntervalSpawnCount": 1,       // 第一次生成 禁卫 后，间隔生成 禁卫 的数量为 1
        "Interval": 30,                // 间隔时间为 30 秒
        "OnDeathCount": 0,             // 无畏 死亡是生成 0 个
        "MaxSpawns": 3,                // 生成满 3 个后，不再继续生成
        "OnDeathKillSpawns": false     // 无畏 死亡时，不杀死 禁卫（特指无畏生出的禁卫）  
    }
  }
}
                                                                                                   （以上注释后面不再赘述）

  // 由此可见，用spawn控制的虫潮生成，能够【精确控制】生成指定敌人的数量！
  // 那么，代价是什么呢？
  // 那就是要占用 无畏异虫 的Spawner字段位置
                               ↓
                               ↓ → → 在这局游戏里，无畏异虫 只能生成禁卫，而不能生成其他的了（"ED": "ED_Spider_Tank"该字段不接受动态值）
  //有没有改进方法呢？请看解法三！

  // ===================================================
  // 解法三（利用wavespawn结合spawn控制虫群生成）
  // ===================================================

    "WaveSpawners": [
  {
    "Enabled": {
      "Mutate": "TriggerOnChange", 
      "In": {                           
        "Mutate": "EnemyCount",               
        "ED": "ED_Spider_Tank_Boss"                       
      }                               
    },
    "Enemies": ["禁卫生成器"],   // Enemies 指明生成 禁卫生成器
    "Interval": 0,                                     ↓
    "Difficulty": 1,                                   ↓
    "Distance": 500,                          ↓ ← ← ← ←
    "Locations": 1,                           ↓
    "SpawnOnEnable": true                     ↓
  }                                           ↓
]                                             ↓
                                              ↓
  "EnemiesNoSync": {                          ↓
    "禁卫生成器": {                         // 定义禁卫生成器
      "Base": "ED_Spider_Grunt_Attacker",  // 将 禁卫生成器 定义为 刀锋异虫 （为什么选刀锋？去查特性反馈板块吧，这里空间小就不说了）
      "Scale": 0,        // 体型为 0 不可见
      "Heal": -10000     // 禁卫生成器 立刻死亡
      "Spawner": {
        "ED": "ED_Spider_Tank",       
        "OnSpawnDelay": 0,          
        "OnSpawnCount": 0,             
        "IntervalSpawnCount": 0,      
        "Interval": 30,            
        "OnDeathCount": 3,      // 死亡生成 3个 禁卫    
        "MaxSpawns": 100,                
        "OnDeathKillSpawns": false     
    }
  }
}
  // 这样，我们就通过wavespawn和spawn词条的联动系统，达成【无畏 出现→指定数量的禁卫 出现】的效果，且不占用 无畏 的spawn槽位`,explanation:["最佳解法思路（解法三）","WaveSpawner监听 无畏 出现 → 生成 禁卫生成器 ","禁卫生成器 死亡 → 通过 OnDeathCount: 3 生成 3只 禁卫"]},{id:7,title:"心石击破机制（在916的新自然潮体系下简化）",difficulty:3,difficultyLabel:"⭐⭐⭐ 中等",description:"游戏开始后每隔45秒刷出一个心石，摧毁刷小潮，不摧毁累积到3个后召唤大潮并提升怪物攻击力",hint:"连续应用wavespawn，写出生成链，用mutate检测enemycount嵌套修改攻击力",answer:`"WaveSpawners": [

  // ===================================================
  // 每45秒刷新一个心石
  // ===================================================

  {
    "Enabled": {
      "Mutate": "DuringMission",
      "StartingAt": 45
    },
    "Enemies": ["心石"],         
    "Interval": 45,
    "Difficulty": 1,
    "Distance": 2000,
    "Locations": 1
  },
  
  // ===================================================
  // 心石每次死亡，都触发一次虫潮
  // ===================================================
    
  {
    "Enabled": {
      "Mutate": "TriggerOnChange",
      "In": {
        "Mutate": "EnemiesKilled",
        "ED": "心石"
      }
    },
    "Enemies": ["ED_Spider_Grunt", "ED_Spider_Grunt_Guard"], // 这里触发的是战士
    "Interval": 0,
    "Difficulty": 100,
    "Distance": 1000,
    "Locations": 2,
    "SpawnOnEnable": true
  },

    // ===================================================
    // 心石超过3个，立刻触发大型虫群
    // ===================================================

  {
    "Enabled": {
      "Mutate": "IfFloat",
      "Value": {
        "Mutate": "EnemyCount",
        "ED": "心石"
      },
      ">=": 3,
      "Then": true,
      "Else": false
    },
    "Enemies": [
      "ED_Spider_Tank", "ED_Spider_Stinger", "ED_Spider_Buffer",
      "ED_Mactera_TripleShooter", "ED_Bomber"
    ],
    "Interval": 0,
    "Difficulty": 500,
    "Distance": 1500,
    "Locations": 3,
    "SpawnOnEnable": true
  }
],

    // ===================================================
    // 在难度设置里，用EnemyDamageModifier修改虫群伤害
    // ===================================================

"DifficultySetting": {
  "EnemyDamageModifier": {
    "Mutate": "IfFloat",
    "Value": {
      "Mutate": "EnemyCount",
      "ED": "心石"
    },
    ">=": 3,   // 当 心石 数量 ≥3 时 输出 then，否则输出 else      
    "Then": 2
    "Else": 1
  }
}
  
    // ===================================================
    // 定义 心石 的实体
    // ===================================================

  "EnemiesNoSync": {                          
    "心石": {                      
      "Base": "ED_FlyingSmartRock",  // 用 飞石 的代码定义
      "Scale": 3, // 体型稍大一些，方便矮人击杀        
  }
}`,explanation:["用wavespawn，结合mutate的DuringMission字段直接触发心石","用wavespawn检测心石死亡情况，触发小虫潮","用wavespawn检测心石存在情况，触发大虫潮","在DifficultySetting的EnemyDamageModifier字段下，用Mutate的EnemyCount判断心石数量，决定输出 then=2 还是 else=1","定义 心石 敌人实体"]},{id:8,title:"将心石击破机制，用vars模块重做",difficulty:4,difficultyLabel:"⭐⭐⭐⭐ 困难",description:"用vars模块重做机制，方便后续修改代码，减少运行bug",hint:"定义相关变量，引用相关变量",answer:`"Vars": {
  "当前心石数量": {
    "Type": "Float",
    "Value": {
      "Mutate": "EnemyCount",
      "ED": "心石"
    },
    "Watch": true
  },
  "是否大虫潮条件": {
    "Type": "Boolean",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Var": "当前心石数量" },
      ">=": 3,
      "Then": true,
      "Else": false
    },
    "Watch": false
  },
  "攻击加成倍率": {
    "Type": "Float",
    "Value": {
      "Mutate": "If",
      "Condition": { "Var": "是否大虫潮条件" },
      "Then": 2,
      "Else": 1
    },
    "Watch": false
  }
},
"WaveSpawners": [
  {
    "Enabled": {
      "Mutate": "DuringMission",
      "StartingAt": 45
    },
    "Enemies": ["心石"],
    "Interval": 45,
    "Difficulty": 1,
    "Distance": 2000,
    "Locations": 1
  },
  {
    "Enabled": {
      "Mutate": "TriggerOnChange",
      "In": {
        "Mutate": "EnemiesKilled",
        "ED": "心石"
      }
    },
    "Enemies": ["ED_Spider_Grunt", "ED_Spider_Grunt_Guard"],
    "Interval": 0,
    "Difficulty": 100,
    "Distance": 1000,
    "Locations": 2,
    "SpawnOnEnable": true
  },
  {
    "Enabled": { "Var": "是否大虫潮条件" },
    "Enemies": [
      "ED_Spider_Tank", "ED_Spider_Stinger", "ED_Spider_Buffer",
      "ED_Mactera_TripleShooter", "ED_Bomber"
    ],
    "Interval": 0,
    "Difficulty": 500,
    "Distance": 1500,
    "Locations": 3,
    "SpawnOnEnable": true
  }
],
"DifficultySetting": {
  "EnemyDamageModifier": {
    "Mutate": "Multiply",
    "A": 1,
    "B": { "Var": "攻击加成倍率" }
  }
},
"EnemiesNoSync": {
  "心石": {
    "Base": "ED_FlyingSmartRock",
    "Scale": 3
  }
}`,explanation:["可以看到，vars系统，就是将一些固定的，可能会重复使用的模块封装成“var：...”的形式","这样能有效缩短代码的长度，也降低修改难度，使你的代码结构更清晰"]},{id:9,title:"时间停止（在星夜代码的基础上简化而来）",difficulty:5,difficultyLabel:"⭐⭐⭐⭐⭐ 专家",description:"每次杀死隐刀，都触发一次时间停止，要求能防止沙盒捣乱",hint:"使用LockFloat记录触发时间，多个变量协同工作。如果不用vars做会非常简单，但时停效果会被沙盒的kill指令中断。觉得难可以先不用vars做，然后再看答案转换成vars版本",answer:`"Vars": {
  // ==============================
  // 第一步：检测隐刀死亡并记录时间
  // ==============================
  
  "隐刀死亡标记": {
    "Type": "Float",
    "Value": {
      "Mutate": "EnemiesKilled",
      "ED": "ED_Spider_Grunt_Attacker"
    },
    "Watch": false
  },
  // 作用：记录隐刀累计死亡数量，用于TriggerOnChange检测
  
  "隐刀死亡时间点": {
    "Type": "Float",
    "Value": {
      "Mutate": "LockFloat",
      "Update": {
        "Mutate": "TriggerOnChange",
        "In": { "Var": "隐刀死亡标记" }
      },
      "Value": {
        "Mutate": "ByTime",
        "InitialValue": 0,
        "RateOfChange": 1,
        "StartDelay": 0
      }
    },
    "Watch": false
  },
  // 作用：每次隐刀死亡时，锁定当前的游戏时间
  
  // ==============================
  // 第二步：实时计算时停状态
  // ==============================
  
  "当前游戏时间": {
    "Type": "Float",
    "Value": {
      "Mutate": "ByTime",
      "InitialValue": 0,
      "RateOfChange": 1,
      "StartDelay": 0
    },
    "Watch": false
  },
  // 作用：获取实时的游戏时间（秒）
  
  "时停经过秒数": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Var": "当前游戏时间" },
      "B": { "Var": "隐刀死亡时间点" }
    },
    "Watch": false
  },
  // 作用：计算从上次隐刀死亡到现在经过了多少秒
  
  // ==============================
  // 第三步：判断是否处于时停状态
  // ==============================
  
  "是否时停激活中": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Var": "时停经过秒数" },
      ">": 0,
      "Then": {
        "Mutate": "IfFloat",
        "Value": { "Var": "时停经过秒数" },
        "<=": 25,
        "Then": 1,
        "Else": 0
      },
      "Else": 0
    },
    "Watch": true
  },
  // 作用：判断是否处于时停状态（1=激活，0=未激活）
  
  // ==============================
  // 第四步：时停效果应用
  // ==============================
  
  "时间膨胀系数": {
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": { "Var": "是否时停激活中" },
      ">=": 1,
      "Then": 0.25,
      "Else": 1
    },
    "Watch": false
  },
  // 作用：时停激活时怪物速度变为25%，否则正常速度
  
  "时停剩余时间": {
    "Type": "Float",
    "Value": {
      "Mutate": "Clamp",
      "Value": {
        "Mutate": "Subtract",
        "A": 25,
        "B": { "Var": "时停经过秒数" }
      },
      "Min": 0,
      "Max": 25
    },
    "Watch": true
  },
  // 作用：显示时停剩余时间（用于UI显示）
},

// ==============================
// WaveSpawner：检测隐刀死亡生成标记
// ==============================

"WaveSpawners": [
  {
    "Enabled": {
      "Mutate": "TriggerOnChange",
      "In": { "Var": "隐刀死亡标记" }
    },
    "Enemies": ["隐刀时停触发器"],
    "Interval": 0,
    "Difficulty": 1,
    "Distance": 0,
    "Locations": 1,
    "SpawnOnEnable": true
  }
],

// ==============================
// 定义隐刀时停触发器
// ==============================

"EnemiesNoSync": {
  "隐刀时停触发器": {
    "Base": "ED_Spider_Grunt_Attacker",
    "DisplayName": "时停触发器",
    "AttackDamageMultiplier": 0,
    "HealthRaw": 1,
    "Heal": -10000,
    "Scale": 0,
    "ShowHealthBar": false,
    "Resistances": {...},
    "Movement": {...}
  }
},

// ==============================
// 应用时停效果到游戏系统
// ==============================

"DifficultySetting": {
  "SpeedModifier": { "Var": "时间膨胀系数" },
  "ProjectileSpeedModifier": { "Var": "时间膨胀系数" },
  "AttackCooldownModifier": { "Var": "时间膨胀系数" }
},

"EnemiesNoSync": {
  "ED_Spider_Grunt": {
    "Base": "ED_Spider_Grunt",
    "TimeDilation": {
      "Var": "时间膨胀系数P"
    },
  }
  
  // ...
  // 每一个敌人都要如此加上TimeDilation的定义，以后如果要修改时停速度，就不用每个敌人单独修改了，而是直接改【时间膨胀系数P】变量就全部应用了！

// ==============================
// 时停提示消息
// ==============================

"Messages": [
  {
    "Send": {
      "Mutate": "TriggerOnChange",
      "RiseOnly": true,
      "In": { "Var": "是否时停激活中" }
    },
    "Type": "Delux",
    "Sender": "时间停止",
    "Message": "【时间停止：已激活，持续25秒】"
  },
  {
    "Send": {
      "Mutate": "TriggerOnChange",
      "FallOnly": true,
      "In": { "Var": "是否时停激活中" }
    },
    "Type": "Delux",
    "Sender": "时间停止",
    "Message": "【时间停止：已结束】"
  }
]`,explanation:["LockFloat是状态机核心：实现 事件触发时记录时间 的关键 ","变量链条设计：数据层→计算层→判断层→应用层","Watch属性使用：基础数据层设为true，计算层设为false","TriggerOnChange监听：确保每次杀死 隐刀 都触发 时间停止","同样的结构和思路，也能用在其他需要计时的机制上！"]}];function rh(){const[T,z]=I.useState(new Set),[A,f]=I.useState(new Set),[j,M]=I.useState(new Set),[v,w]=I.useState(null),m=q=>{const ae=new Set(T);ae.has(q)?ae.delete(q):ae.add(q),z(ae)},S=q=>{const ae=new Set(A);ae.has(q)?ae.delete(q):ae.add(q),f(ae)},L=q=>{const ae=new Set(j);ae.has(q)?ae.delete(q):ae.add(q),M(ae)},H=v?Yf.filter(q=>q.difficulty===v):Yf,he=q=>{switch(q){case 1:return"text-[#3fb950]";case 2:return"text-[#79c0ff]";case 3:return"text-[#ffd700]";case 4:return"text-[#f0883e]";case 5:return"text-[#da3633]";default:return"text-[#8b949e]"}};return i.jsx("section",{"code-path":"src\\sections\\ExercisesSection.tsx:58:5",id:"exercises",className:"py-20 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:59:7",className:"max-w-6xl mx-auto",children:[i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:61:9",className:"mb-12",children:[i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:62:11",className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{"code-path":"src\\sections\\ExercisesSection.tsx:63:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:i.jsx(Xs,{"code-path":"src\\sections\\ExercisesSection.tsx:64:15",className:"w-5 h-5 text-[#ffd700]"})}),i.jsx("h2",{"code-path":"src\\sections\\ExercisesSection.tsx:66:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"机制设计 - 例题练习"})]}),i.jsx("p",{"code-path":"src\\sections\\ExercisesSection.tsx:70:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"基于《星の綺麗な夜 v1.91γ》代码实例，从基础到困难，分为5个星级，每个星级三道练习题。 从直接调用Mutate修改动态值，到嵌套组合出复杂公式，逐步提升你的CD2开发能力。"})]}),i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:77:9",className:"flex flex-wrap gap-2 mb-8",children:[i.jsx("button",{"code-path":"src\\sections\\ExercisesSection.tsx:78:11",onClick:()=>w(null),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${v===null?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:"全部题目"}),[1,2,3,4,5].map(q=>i.jsx("button",{"code-path":"src\\sections\\ExercisesSection.tsx:89:13",onClick:()=>w(v===q?null:q),className:`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${v===q?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:"⭐".repeat(q)},q))]}),i.jsx("div",{"code-path":"src\\sections\\ExercisesSection.tsx:104:9",className:"space-y-4",children:H.map(q=>{const ae=T.has(q.id),je=A.has(q.id),ot=j.has(q.id);return i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:111:15",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-colors",children:[i.jsxs("button",{"code-path":"src\\sections\\ExercisesSection.tsx:116:17",onClick:()=>m(q.id),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:120:19",className:"flex items-center gap-4",children:[i.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:121:21",className:`text-lg ${he(q.difficulty)}`,children:q.difficultyLabel}),i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:124:21",children:[i.jsxs("h3",{"code-path":"src\\sections\\ExercisesSection.tsx:125:23",className:"text-lg font-semibold text-[#e6edf3]",children:["练习题 ",q.id,": ",q.title]}),q.relatedMechanism&&i.jsxs("p",{"code-path":"src\\sections\\ExercisesSection.tsx:129:25",className:"text-sm text-[#8b949e] mt-1",children:["相关机制: ",q.relatedMechanism]})]})]}),ae?i.jsx(Nt,{"code-path":"src\\sections\\ExercisesSection.tsx:136:21",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\ExercisesSection.tsx:138:21",className:"w-5 h-5 text-[#8b949e]"})]}),ae&&i.jsx("div",{"code-path":"src\\sections\\ExercisesSection.tsx:144:19",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:145:21",className:"pt-4 space-y-4",children:[i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:147:23",className:"p-4 bg-[#0d1117] rounded-lg",children:[i.jsx("h4",{"code-path":"src\\sections\\ExercisesSection.tsx:148:25",className:"text-sm font-medium text-[#ffd700] mb-2",children:"题目描述"}),i.jsx("p",{"code-path":"src\\sections\\ExercisesSection.tsx:149:25",className:"text-[#8b949e]",children:q.description})]}),i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:153:23",className:"flex gap-3",children:[i.jsxs("button",{"code-path":"src\\sections\\ExercisesSection.tsx:154:25",onClick:()=>S(q.id),className:"flex items-center gap-2 px-4 py-2 bg-[#21262d] text-[#8b949e] hover:text-[#ffd700] rounded-lg transition-colors",children:[i.jsx(Mu,{"code-path":"src\\sections\\ExercisesSection.tsx:158:27",className:"w-4 h-4"}),je?"隐藏提示":"显示提示"]}),i.jsxs("button",{"code-path":"src\\sections\\ExercisesSection.tsx:161:25",onClick:()=>L(q.id),className:"flex items-center gap-2 px-4 py-2 bg-[#21262d] text-[#8b949e] hover:text-[#3fb950] rounded-lg transition-colors",children:[i.jsx(gu,{"code-path":"src\\sections\\ExercisesSection.tsx:165:27",className:"w-4 h-4"}),ot?"隐藏答案":"显示答案"]})]}),je&&i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:172:25",className:"p-4 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg",children:[i.jsx("h4",{"code-path":"src\\sections\\ExercisesSection.tsx:173:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"提示"}),i.jsx("p",{"code-path":"src\\sections\\ExercisesSection.tsx:174:27",className:"text-[#8b949e]",children:q.hint})]}),ot&&i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:180:25",className:"space-y-4",children:[i.jsx(bt,{"code-path":"src\\sections\\ExercisesSection.tsx:181:27",code:q.answer}),i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:182:27",className:"p-4 bg-[#0d1117] rounded-lg",children:[i.jsx("h4",{"code-path":"src\\sections\\ExercisesSection.tsx:183:29",className:"text-sm font-medium text-[#ffd700] mb-2",children:"答案解析"}),i.jsx("ul",{"code-path":"src\\sections\\ExercisesSection.tsx:184:29",className:"space-y-1 text-sm text-[#8b949e]",children:q.explanation.map((qe,At)=>i.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:186:33",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:187:35",className:"text-[#ffd700]",children:"•"}),qe]},At))})]})]})]})})]},q.id)})}),i.jsxs("div",{"code-path":"src\\sections\\ExercisesSection.tsx:204:9",className:"mt-12 p-6 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-xl",children:[i.jsx("h3",{"code-path":"src\\sections\\ExercisesSection.tsx:205:11",className:"text-lg font-semibold text-[#ffd700] mb-3",children:"学习建议"}),i.jsxs("ul",{"code-path":"src\\sections\\ExercisesSection.tsx:206:11",className:"space-y-2 text-[#8b949e]",children:[i.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:207:13",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:208:15",className:"text-[#ffd700]",children:"1."}),"建议按顺序完成题目，从⭐入门开始，逐步提升到⭐⭐⭐⭐⭐专家"]}),i.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:211:13",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:212:15",className:"text-[#ffd700]",children:"2."}),"先尝试独立思考，遇到困难再看提示，最后再看答案（有可能你的代码和答案不一样，也许你的行数更少，更优秀！）"]}),i.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:215:13",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:216:15",className:"text-[#ffd700]",children:"3."}),"理解答案后，尝试修改参数，观察效果变化"]}),i.jsxs("li",{"code-path":"src\\sections\\ExercisesSection.tsx:219:13",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\ExercisesSection.tsx:220:15",className:"text-[#ffd700]",children:"4."}),"四星和五星题目可以直接参考《星の綺麗な夜》完整代码"]})]})]})]})})}const dh=[{id:1,title:"多个自定义变量之间不能循环依赖",description:"A变量依赖B，B依赖C，C依赖A，会导致循环错误，轻则变量无法检测，重则游戏崩溃！",wrongCode:`"Vars": {
  // ======================
  // 【错误示范】循环依赖
  // ======================
  
  "变量A": {
    "Type": "Float",
    "Value": {
      "Mutate": "Add",
      "A": { "Var": "变量B" },  // 依赖变量B
      "B": 10
    },
    "Watch": false
  },
  
  "变量B": {
    "Type": "Float",
    "Value": {
      "Mutate": "Multiply",
      "A": { "Var": "变量C" },  // 依赖变量C
      "B": 2
    },
    "Watch": false
  },
  
  "变量C": {
    "Type": "Float",
    "Value": {
      "Mutate": "Subtract",
      "A": { "Var": "变量A" },  // 依赖变量A ← 循环！
      "B": 5
    },
    "Watch": false
  }
}`,correctCode:`"Vars": {
  // ======================
  // 【正确示范】循环依赖
  // ======================
  
  "变量A": {
    "Type": "Float",
    "Value": {
      "Mutate": "Add",
      "A": { "Var": "变量B" },  // 依赖变量B
      "B": 10
    },
    "Watch": false
  },
  
  "变量B": {
    "Type": "Float",
    "Value": {
      "Mutate": "Multiply",
      "A": { "Var": "变量C" },  // 依赖变量C
      "B": 2
    },
    "Watch": false
  },
  
  "变量C": {
    "Type": "Float",
    "Value": {
          "Mutate": "EnemyCount",   // 依赖 Mutate 获取的原始数据
          "ED": "ED_ShootingPlant"
    },
    "Watch": false
  }
}`,analysis:["如何避免循环依赖？","永远不要创建循环依赖：A→B→C→A 是致命错误","采用分层设计：基础层→计算层→应用层","使用清晰的命名：表明变量所在的层级","先设计依赖关系图：写代码前先规划变量结构，不熟练时最好采取单向链","基础数据必须独立：所有mutate直接获取的数据不依赖其他变量","良好的变量结构是复杂系统稳定的基础"]},{id:2,title:"Vars不支持所有字段，heal值会导致报错",description:"游戏里的某些值不支持替换成Vars，目前测试发现所有敌人的heal值不支持将Vars填进去。",wrongCode:`"Vars": {
  "吐珠存在治疗战士": {  // 将以下逻辑封装成一个 变量名 → → 吐珠存在治疗战士
    "Type": "Float",
    "Value": {
      "Mutate": "IfFloat",
      "Value": {
        "Mutate": "EnemyCount",
        "ED": "ED_ShootingPlant"
      },
      ">=": 1,
      "Then": 10,  // 吐珠存在，则每秒给 战士异虫 回血 10点
      "Else": 0
    },
    "Watch": false
  }
}

  "ED_Spider_Grunt": {
    "Base": "ED_Spider_Grunt",
    "Heal": {
      "Var": "吐珠存在治疗战士" // 在Heal中 引用变量名
    },
  }

  // 这样，游戏将会提示错误！
  `,correctCode:`  
    "ED_Spider_Grunt": {
    "Base": "ED_Spider_Grunt",
    "Heal": {
      "Mutate": "IfFloat",
      "Value": {
        "Mutate": "EnemyCount",
        "ED": "ED_ShootingPlant"
      },
      ">=": 1,
      "Then": 10,  
      "Else": 0   // 不要封装成 vars 直接将复杂逻辑填入Heal即可
    },
  }`,analysis:["Heal字段支持动态改变，但不支持将Vars填进去","尝试使用Var会导致游戏报错","目前只测试到heal不支持，其他字段需要自行测试"]}],fh=[{id:1,content:"巢主ENE特性：巢主死亡后其ENE会短暂消失再重新生成，因此不要直接绑定巢主的数量进行任何逻辑控制"},{id:2,content:"敌人ENE残留：敌人死亡后其ENE会存在一段时间，这可能导致基于ENE的状态判断出现短暂延迟或不同步的问题"},{id:3,content:"触发器使用建议：对于巢主相关机制，建议使用触发器绑定巢主，并通过指示怪来实现复杂的逻辑操作，以避免ENE残留问题引起的BUG"},{id:4,content:"守点范围修改：在修改搜救守点范围时，必须提前引入一个变量（例如SpaceTime）使其先变化一次，才能激活后续的实时修改（如BossTime对范围的调整）"},{id:5,content:"冰冻增伤倍率：可以将冰冻增伤倍率设置为负数，从而让敌人获得冰冻免疫部分伤害的能力。倍率公式为：武器伤害×（1＋2×冰冻增伤倍率），无畏的话要在2后面额外×0.8几"},{id:6,content:"Spawner延迟：使用Spawner功能时，需添加delay词条延迟第一波敌人的生成，防止因敌人数量不为0而导致本体生成时立即产生新的敌人"},{id:7,content:"Spawner与固定单位：Spawner生成敌人的速度较慢，且固定单位不能作为Spawner来生成其他单位；但可以用移动单位的Spawner来生成固定单位"},{id:8,content:"苍蝇与机器人即死机制差异：苍蝇的冰冻即死效果由动画触发，而机器人的点燃即死则由词条触发。也就是说，苍蝇如果在被冻死的途中中断了动画，那么苍蝇将会卡在空中，不能动也打不死"},{id:9,content:"精英单位的冰冻/点燃难易不仅受燃点/冰点影响，更关键的是其温度变化比例——该值会缩放热量输入和等效燃点（如比例0.2 ≈ 燃点×5），调整时需与燃点配合使用"},{id:10,content:"作为状态机使用的敌人实体，不要base战士，因为战士会突变成刀锋，这样有可能导致你作为状态机的敌人实体不生效。同理，任何有可能突变的（比如禁卫）都不建议作为状态机使用"},{id:11,content:"CustomVeterans字段如果是空，那么该敌人有可能会突变为任意敌人"},{id:12,content:"如果你想让A敌人在有可能突变为B、C的情况下，仍保留部分不突变（保持还是A），应该在CustomVeterans字段后指明A的权重，如果只指明了B和C，那么A将必定按照权重，全部突变为B和C"}],mh=["立志成为gal糕手"];function ph(){const[T,z]=I.useState(new Set),[A,f]=I.useState(!0),j=M=>{const v=new Set(T);v.has(M)?v.delete(M):v.add(M),z(v)};return i.jsx("section",{"code-path":"src\\sections\\FeedbackSection.tsx:21:5",id:"feedback",className:"py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]",children:i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:22:7",className:"max-w-6xl mx-auto",children:[i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:24:9",className:"mb-12",children:[i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:25:11",className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:26:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:i.jsx(k1,{"code-path":"src\\sections\\FeedbackSection.tsx:27:15",className:"w-5 h-5 text-[#ffd700]"})}),i.jsx("h2",{"code-path":"src\\sections\\FeedbackSection.tsx:29:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"CD2特性反馈"})]}),i.jsx("p",{"code-path":"src\\sections\\FeedbackSection.tsx:33:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"CD2作者们在写作过程中发现的问题和小技巧，帮助你避免踩坑。"})]}),i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:39:9",className:"mb-12",children:[i.jsxs("h3",{"code-path":"src\\sections\\FeedbackSection.tsx:40:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[i.jsx(Z1,{"code-path":"src\\sections\\FeedbackSection.tsx:41:13",className:"w-5 h-5 text-[#da3633]"}),"复杂问题"]}),i.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:45:11",className:"space-y-4",children:dh.map(M=>{const v=T.has(M.id);return i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:50:17",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#da3633]/30 transition-colors",children:[i.jsxs("button",{"code-path":"src\\sections\\FeedbackSection.tsx:54:19",onClick:()=>j(M.id),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:58:21",className:"flex items-center gap-3",children:[i.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:59:23",className:"flex-shrink-0 w-8 h-8 bg-[#da3633]/20 text-[#da3633] rounded-lg flex items-center justify-center text-sm font-bold",children:M.id}),i.jsx("h4",{"code-path":"src\\sections\\FeedbackSection.tsx:62:23",className:"text-lg font-semibold text-[#e6edf3]",children:M.title})]}),v?i.jsx(Nt,{"code-path":"src\\sections\\FeedbackSection.tsx:65:23",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\FeedbackSection.tsx:67:23",className:"w-5 h-5 text-[#8b949e]"})]}),v&&i.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:72:21",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:73:23",className:"pt-4 space-y-4",children:[i.jsx("p",{"code-path":"src\\sections\\FeedbackSection.tsx:75:25",className:"text-[#8b949e]",children:M.description}),i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:78:25",className:"grid md:grid-cols-2 gap-4",children:[i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:79:27",children:[i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:80:29",className:"flex items-center gap-2 mb-2",children:[i.jsx(Qf,{"code-path":"src\\sections\\FeedbackSection.tsx:81:31",className:"w-4 h-4 text-[#da3633]"}),i.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:82:31",className:"text-sm font-medium text-[#da3633]",children:"错误代码"})]}),i.jsx(bt,{"code-path":"src\\sections\\FeedbackSection.tsx:84:29",code:M.wrongCode})]}),i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:86:27",children:[i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:87:29",className:"flex items-center gap-2 mb-2",children:[i.jsx(I1,{"code-path":"src\\sections\\FeedbackSection.tsx:88:31",className:"w-4 h-4 text-[#238636]"}),i.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:89:31",className:"text-sm font-medium text-[#238636]",children:"正确代码"})]}),i.jsx(bt,{"code-path":"src\\sections\\FeedbackSection.tsx:91:29",code:M.correctCode})]})]}),i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:96:25",className:"p-4 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded-lg",children:[i.jsx("h5",{"code-path":"src\\sections\\FeedbackSection.tsx:97:27",className:"text-sm font-medium text-[#ffd700] mb-2",children:"问题解析"}),i.jsx("ul",{"code-path":"src\\sections\\FeedbackSection.tsx:98:27",className:"space-y-1 text-sm text-[#8b949e]",children:M.analysis.map((w,m)=>i.jsxs("li",{"code-path":"src\\sections\\FeedbackSection.tsx:100:31",className:"flex items-start gap-2",children:[i.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:101:33",className:"text-[#ffd700]",children:"•"}),w]},m))})]})]})})]},M.id)})})]}),i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:117:9",className:"mb-12",children:[i.jsxs("h3",{"code-path":"src\\sections\\FeedbackSection.tsx:118:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[i.jsx(Mu,{"code-path":"src\\sections\\FeedbackSection.tsx:119:13",className:"w-5 h-5 text-[#ffd700]"}),"小技巧"]}),i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:123:11",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden",children:[i.jsxs("button",{"code-path":"src\\sections\\FeedbackSection.tsx:124:13",onClick:()=>f(!A),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:128:15",className:"text-[#8b949e]",children:"点击查看CD2写作小技巧"}),A?i.jsx(Nt,{"code-path":"src\\sections\\FeedbackSection.tsx:130:17",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\FeedbackSection.tsx:132:17",className:"w-5 h-5 text-[#8b949e]"})]}),A&&i.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:137:15",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:138:17",className:"pt-4",children:i.jsx("ol",{"code-path":"src\\sections\\FeedbackSection.tsx:139:19",className:"space-y-3",children:fh.map(M=>i.jsxs("li",{"code-path":"src\\sections\\FeedbackSection.tsx:141:23",className:"flex items-start gap-3 p-3 bg-[#0d1117] rounded-lg",children:[i.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:145:25",className:"flex-shrink-0 w-6 h-6 bg-[#ffd700]/20 text-[#ffd700] rounded flex items-center justify-center text-sm font-bold",children:M.id}),i.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:148:25",className:"text-[#e6edf3]",children:M.content})]},M.id))})})})]})]}),i.jsxs("div",{"code-path":"src\\sections\\FeedbackSection.tsx:159:9",className:"p-6 bg-[#161b22] border border-[#30363d] rounded-xl",children:[i.jsxs("h3",{"code-path":"src\\sections\\FeedbackSection.tsx:160:11",className:"flex items-center gap-2 text-lg font-semibold text-[#e6edf3] mb-4",children:[i.jsx(Kf,{"code-path":"src\\sections\\FeedbackSection.tsx:161:13",className:"w-5 h-5 text-[#ffd700]"}),"感谢名单"]}),i.jsx("p",{"code-path":"src\\sections\\FeedbackSection.tsx:164:11",className:"text-[#8b949e] mb-4",children:"以上特性测试来自于以下人员："}),i.jsx("div",{"code-path":"src\\sections\\FeedbackSection.tsx:167:11",className:"flex flex-wrap gap-2",children:mh.map(M=>i.jsx("span",{"code-path":"src\\sections\\FeedbackSection.tsx:169:15",className:"px-3 py-1.5 bg-[#21262d] text-[#e6edf3] rounded-full text-sm",children:M},M))})]})]})})}const hh=[{name:"战士异虫",edName:"ED_Spider_Grunt",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-30,unfreezeTemp:0,warmingRate:6},{name:"冰封岩层的战士异虫",edName:"ED_Spider_Grunt_Ice",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-45,unfreezeTemp:0,warmingRate:6},{name:"放射性禁区的战士异虫",edName:"ED_Spider_Grunt_Mutated",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-30,unfreezeTemp:0,warmingRate:6},{name:"典狱长召唤的战士异虫",edName:"ED_Spider_GruntTutorial",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-30,unfreezeTemp:0,warmingRate:6},{name:"护卫异虫",edName:"ED_Spider_Grunt_Guard",burnTemp:60,douseTemp:40,coolingRate:6,freezeTemp:-80,unfreezeTemp:-40,warmingRate:6},{name:"刀锋异虫",edName:"ED_Spider_Grunt_Attacker",burnTemp:30,douseTemp:10,coolingRate:6,freezeTemp:-30,unfreezeTemp:0,warmingRate:6},{name:"典狱长",edName:"ED_Spider_Buffer",burnTemp:50,douseTemp:25,coolingRate:6,freezeTemp:-70,unfreezeTemp:-30,warmingRate:6},{name:"蛭尾异虫",edName:"ED_Spider_Stinger",burnTemp:75,douseTemp:40,coolingRate:7,freezeTemp:-100,unfreezeTemp:-30,warmingRate:7},{name:"禁卫异虫",edName:"ED_Spider_Tank",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"氪化禁卫异虫",edName:"ED_Spider_Tank_Amber",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"寒霜禁卫异虫",edName:"ED_Spider_Tank_Ice",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"放射性禁卫异虫",edName:"ED_Spider_Tank_Mutated",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"暴君异虫",edName:"ED_Spider_ShieldTank",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-198,unfreezeTemp:-50,warmingRate:50},{name:"吐酸异虫",edName:"ED_Spider_Shooter",burnTemp:35,douseTemp:5,coolingRate:6,freezeTemp:-50,unfreezeTemp:0,warmingRate:6},{name:"吐丝异虫",edName:"ED_Spider_Spitter",burnTemp:30,douseTemp:0,coolingRate:6,freezeTemp:-75,unfreezeTemp:0,warmingRate:10},{name:"脓毒异虫",edName:"ED_Spider_Lobber",burnTemp:35,douseTemp:5,coolingRate:6,freezeTemp:-50,unfreezeTemp:0,warmingRate:6},{name:"速射酸虫",edName:"ED_Spider_RapidShooter",burnTemp:35,douseTemp:5,coolingRate:6,freezeTemp:-50,unfreezeTemp:0,warmingRate:6},{name:"吐刺蝇",edName:"ED_Mactera_Shooter_Normal",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-100,unfreezeTemp:0,warmingRate:40},{name:"氪化吐刺蝇",edName:"ED_Mactera_Shooter_Amber",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-100,unfreezeTemp:0,warmingRate:40},{name:"坚甲蝇",edName:"ED_Mactera_Shooter_HeavyVeteran",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-200,unfreezeTemp:0,warmingRate:40},{name:"三颚蝇",edName:"ED_Mactera_TripleShooter",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-100,unfreezeTemp:0,warmingRate:40},{name:"粘液轰炸蝇",edName:"ED_Bomber",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-320,unfreezeTemp:0,warmingRate:50},{name:"冰霜轰炸蝇",edName:"ED_Bomber_Ice",burnTemp:35,douseTemp:5,coolingRate:10,freezeTemp:-320,unfreezeTemp:0,warmingRate:50},{name:"捕手蝇",edName:"ED_Grabber",burnTemp:30,douseTemp:0,coolingRate:10,freezeTemp:-180,unfreezeTemp:0,warmingRate:40},{name:"岩痘禁卫异虫",edName:"ED_Spider_Tank_RockpoxPlague",burnTemp:100,douseTemp:40,coolingRate:10,freezeTemp:-150,unfreezeTemp:-100,warmingRate:10},{name:"匍行核岩孽生兽",edName:"ED_Crawler",burnTemp:60,douseTemp:40,coolingRate:6,freezeTemp:-150,unfreezeTemp:-100,warmingRate:6},{name:"潜影异虫",edName:"ED_Spider_Stalker",burnTemp:50,douseTemp:20,coolingRate:2,freezeTemp:-60,unfreezeTemp:-20,warmingRate:20}],xh=[{name:"M_Vanity_Headwear_Bavarian_Green",description:"迷彩绿（马桶专用）"},{name:"M_ScratchedPaint_DarkGreen01",description:"迷彩绿"},{name:"M_SpaceRig_MetalRed01_WS",description:"金属红"},{name:"M_ScratchedPaint_Yellow01",description:"迷彩黄"},{name:"M_RustedMetal_White01",description:"迷彩白"},{name:"M_Biome_AzureWeald_Flower_OrkidWhite",description:"典狱长的粉白色"},{name:"M_LushDownpour_LightPlant_Bulb",description:"黄绿渐变（偏淡）"},{name:"M_Mug_Metalic_Cyan",description:"蓝黄撞色"},{name:"M_BeachParty_Ball_Red",description:"火红色（熔岩主题）"},{name:"M_Facility_Vault_ShieldFailing",description:"淡黄幻影"},{name:"M_Facility_Vault_Shield",description:"棕色幻影"},{name:"M_DrillDozer_Wheels",description:"土黄色"},{name:"M_Biome_MagmaCaves_Rock01_Hot_Terrain",description:"熔岩色"},{name:"M_SwarmerTunnelsDirt_Particles",description:"核心岩暗紫"},{name:"M_CoreGem_Rock_Particles",description:"核心岩材质"},{name:"M_Biome_Azure_MagicRock",description:"守护石材质（光效蓝白，好看）"},{name:"M_Hydra_Weed_Heart_Body",description:"王草核心绿（有动效）"},{name:"M_Doretta_Flashing_Eye",description:"多蕾塔眼睛（黄色亮光闪烁）"},{name:"M_CoreGem_Rock",description:"另一种核心岩材质"},{name:"M_Light_BlueX20",description:"蓝色亮光"},{name:"M_Forge_EnergyLightRed",description:"黄色亮光"},{name:"M_BalancingBoard_Red",description:"橙色亮光（更通透）"},{name:"M_Facility_Light_PhasingPower",description:"暗金闪烁（条纹动效）"},{name:"M_RockCracksGlowing_Inst",description:"熔岩色（很亮）"},{name:"M_Lunar_LampRedPattern",description:"橙白（mc里的熔岩色）"},{name:"M_Facility_Metal02",description:"机器人的黑色纹路"},{name:"M_Bosco_PJ_AbyssalFrost",description:"蓝色石头"},{name:"M_Arcade_StaticLightRed",description:"发光黄色"},{name:"M_Flier_BomberRockpox_PlagueWobble40",description:"落叶黄（有动效，源自病毒轰炸机）"},{name:"M_Goal_Hologram_Blue",description:"蓝色科幻条纹"}],Sh=[{name:"PRJ_AcidDrop_C",description:"黏液轰炸机的屎"},{name:"PRJ_AcidDrop_Ice_C",description:"冰霜轰炸机的屎"},{name:"PRJ_BaseBigGooProjectile_C",description:"钻机的泥巴"},{name:"PRJ_Base_Spider_Lobber_Projectile_C",description:"番茄"},{name:"PRJ_BigGooProjectile_C",description:"钻机的分裂泥巴"},{name:"PRJ_BigGooProjectile_Trail_C",description:"钻机的直线泥巴"},{name:"BP_Bosco_Rocket_Ice_C",description:"bosc的冰冻火箭"},{name:"BP_ClusterFragment_MicroMissileLauncher_C",description:"枪手集束炸弹的分裂物"},{name:"PRJ_BomberGoo_C",description:"轰炸机的绿球"},{name:"PRJ_BomberIce_C",description:"轰炸机的冰球"},{name:"PRJ_Bomber_Fire_C",description:"轰炸机的火球"},{name:"PRJ_Boss_Twin_Stomp_C",description:"无畏的地裂波"},{name:"PRJ_Crossbow_IceProjectile_C",description:"冰箭"},{name:"PRJ_CactusSpike_C",description:"仙人掌的刺"},{name:"PRJ_CaretakerBarrier_C",description:"护盾"},{name:"PRJ_ChargedBlasterShot_C",description:"钻机的离子枪（蓄力）"},{name:"PRJ_Crawler_DeathProjectile2_C",description:"马喽的死亡掉落物"},{name:"PRJ_Crye_SnowBall_C",description:"钻机的雪球"},{name:"PRJ_Cryocannon_C",description:"钻机的冰锥"},{name:"PRJ_ExploderTankClusterBomb_C",description:"大自爆的死亡爆炸球"},{name:"PRJ_FacilityTentacleProjectile_C",description:"看守者的触手激光"},{name:"PRJ_FacilityTurretLaser_Sniper_C",description:"狙击炮塔的子弹"},{name:"PRJ_FlameWall_C",description:"无畏的散射火球"},{name:"PRJ_FlyingSmartRock_C",description:"心石"},{name:"PRJ_Foam_C",description:"泡沫枪（像打胶，但没伤害，可以整活）"},{name:"PRJ_FriendlyInfectedMuleGrenade_C",description:"betc的相位炸弹"},{name:"PRJ_GrenadeAxe_C",description:"斧头"},{name:"PRJ_GrenadeLauncher_C",description:"钻机的高爆手雷（秒人，范围21米）"},{name:"PRJ_Grenade_HackeShredder_C",description:"工程的蜂群（不伤害矮人）"},{name:"PRJ_Grenade_StickySmall_C",description:"枪手黏性雷（12米）"},{name:"PRJ_GuntowerLineProjectile_C",description:"除虫器的等离子射线"},{name:"PRJ_HomingDrone_C",description:"除虫器的自杀无人机"},{name:"PRJ_LineCutter2_C",description:"工程的等离子射线（16米）"},{name:"PRJ_MicroMissile_Buck_C",description:"枪手的火箭（末端加速）"},{name:"PRJ_MicroMissile_C",description:"枪手的火箭（匀速）"},{name:"PRJ_MicroMissile_PlasmaBurster_C",description:"贯穿爆破的子弹"},{name:"PRJ_Mortar_Autocannon_C",description:"迫击炮（17米）"},{name:"PRJ_NormalBlasterShot_C",description:"钻机的离子枪（小）"},{name:"PRJ_OmmoranEnergySprite_C",description:"黄色绕圈圈的东西，带追踪"},{name:"PRJ_PatrolBotLaser_Flying_C",description:"蓝色激光子弹"},{name:"PRJ_PatrolBotLaser_Flying_Hacked_C",description:"蓝色激光子弹更快"},{name:"PRJ_PatrolBotLaser_Hacked_C",description:"红色激光子弹"},{name:"PRJ_PatrolBotLaser_New_C",description:"红色激光子弹更慢"},{name:"PRJ_PatrolBotRocket_C",description:"很慢的石头，带追踪，伤害低"},{name:"PRJ_PlasmaCarbineShot_Big_C",description:"侦查的电浆枪（秒人）"},{name:"PRJ_PlasmaCarbineShot_C",description:"侦查的电浆枪（一般伤害）"},{name:"PRJ_PlatformMaker_C",description:"工程的板子（没伤害，整活专用）"},{name:"PRJ_PowerupSphere_C",description:"矿化爆发的重击药剂（能吃，就离谱）"},{name:"PRJ_ProjectileBarf_C",description:"小岩痘种子（飞得慢，没伤害，没啥用）"},{name:"PRJ_RockpoxBomber_PlagueDrop_C",description:"病毒轰炸机的屎"},{name:"PRJ_Rockpox_PlagueGlob_C",description:"岩痘怪物吐的岩痘子弹"},{name:"PRJ_SentryOvercharge_Projectile_C",description:"炮塔鞭策的绿色激光（秒人）"},{name:"PRJ_ShootingPlant_C",description:"普通吐珠的东西"},{name:"PRJ_Spider_Boss_Twin_Mine_C",description:"强弩双子的延迟地裂爆弹"},{name:"PRJ_Spider_Boss_Twin_Multifireball_C",description:"小无畏的慢速火球"},{name:"PRJ_Spider_Lobber_Projectile_C",description:"番茄酸液（13米）"},{name:"PRJ_Spider_Lobber_Projectile_Fragment_C",description:"番茄酸液（6米）"},{name:"PRJ_Spider_RapidShooter_C",description:"速射的子弹"},{name:"PRJ_Spider_Shooter_C",description:"吐酸的子弹"},{name:"PRJ_Spider_Shooter_Ground_C",description:"吐酸的抛物线子弹"},{name:"PRJ_Spider_Shooter_Queen_C",description:"吐酸皇后的子弹"},{name:"PRJ_Spider_Shooter_Rockpox_Plague_C",description:"病毒吐酸的子弹"},{name:"PRJ_Spider_Spitter_C",description:"吐丝"},{name:"PRJ_Spider_Tank_Boss_C",description:"无畏的火球"},{name:"PRJ_Spider_Tank_Boss_Eggshot_C",description:"无畏信息素"},{name:"PRJ_StaticBomber_C",description:"马桶的爆炸种子"},{name:"PRJ_TentaclePlant_New_C",description:"小王草子弹"},{name:"PRJ_Terminator_Barrier_C",description:"娃娃机的护盾（横）"},{name:"PRJ_Turret_Barrier_C",description:"护盾炮塔的护盾（竖，窄）"},{name:"PRJ_WoodlouseAttack_C",description:"滚滚的酸液"}],gh=[{name:"Hazard 5《 星の綺麗な夜》 v1.91γ-Normal平衡版",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"星夜标准版本 by--超蓝大人驾到"},{name:"Hazard 5《 星の綺麗な夜》 v1.91γ-OverLock超频版",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-OverLock%E8%B6%85%E9%A2%91%E7%89%88.txt",description:"星夜超频版本，难度更高 by--超蓝大人驾到"},{name:"Hazard 9-Seven Lab-1.6-Tier 1(beta3-d8)",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%209-Seven%20Lab-1.6-Tier%201(beta3-d8).txt",description:"916T1 -- by SEvEN"},{name:"Hazard 9-Polar-Night(beta1)",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%209-Polar-Night(beta1)%20.txt",description:"Version: beta_1a-20251230 BasedOn[CD2-v17]--by 豆豆"},{name:"Hazard 9-HawkesWorkSpring-EX",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%209-HawkesWorkSpring-EX.txt",description:"Version: 1.0-4  by 立志成为gal糕手"},{name:"Hazard8 Diversity-powerful current-1.3-V1.0-CD2",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard8%20Diversity-powerful%20current-1.3-V1.0-CD2.txt",description:"CD2洪流8级多样性--by Hong"},{name:"Hazard 9 Refuge(0402update1)xt",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%209%20Refuge(0402update1)xt.txt",description:"選別--by MiA_M3c 20250402 "},{name:"CD1 高难代码汇总",url:"https://github.com/AzurePen/-cd2-/blob/main/Hazard%205%E3%80%8A%20%E6%98%9F%E3%81%AE%E7%B6%BA%E9%BA%97%E3%81%AA%E5%A4%9C%E3%80%8B%20v1.91%CE%B3-Normal%E5%B9%B3%E8%A1%A1%E7%89%88.txt",description:"Xmind文件，需要下载Xmind--by 浣熊"}],yh=`{
  "Name": "超蓝的cd2代码模板 Beta v1.0",
  "Description": "
                  一个动态难度模板（基于5x3）
                  本模板已删除了以下字段：
                  1.UsesBiomeVariants（与CustomVeterans冲突，二选一）
                  2.HealthRaw（与HealthMultiplier冲突，二选一）
                  3.Projectile（需要正确的Mutator格式，为避免错误先删除）
                  4.CustomVeterans（由于为空时会使敌人突变为随机敌人，所以先删除，需要的可以自己加，注意与UsesBiomeVariants冲突，不能一起加）
                 ",
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
    "EnemyCountModifier": 4.5,
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
}`;function vh(){const[T,z]=I.useState(!0),[A,f]=I.useState(!1),[j,M]=I.useState("temperature");return i.jsx("section",{"code-path":"src\\sections\\AppendixSection.tsx:390:5",id:"appendix",className:"py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]",children:i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:391:7",className:"max-w-6xl mx-auto",children:[i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:393:9",className:"mb-12",children:[i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:394:11",className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:395:13",className:"w-10 h-10 bg-[#ffd700]/20 rounded-lg flex items-center justify-center",children:i.jsx(m0,{"code-path":"src\\sections\\AppendixSection.tsx:396:15",className:"w-5 h-5 text-[#ffd700]"})}),i.jsx("h2",{"code-path":"src\\sections\\AppendixSection.tsx:398:13",className:"text-3xl sm:text-4xl font-bold text-[#e6edf3]",children:"附录工具"})]}),i.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:402:11",className:"text-[#8b949e] text-lg max-w-3xl",children:"代码模板、社区代码下载、对照表查询、外部资源链接。"})]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:408:9",className:"mb-8",children:[i.jsxs("h3",{"code-path":"src\\sections\\AppendixSection.tsx:409:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[i.jsx(Qs,{"code-path":"src\\sections\\AppendixSection.tsx:410:13",className:"w-5 h-5 text-[#ffd700]"}),"代码模板"]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:415:11",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden mb-4",children:[i.jsxs("button",{"code-path":"src\\sections\\AppendixSection.tsx:416:13",onClick:()=>z(!T),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:420:15",className:"flex items-center gap-3",children:[i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:421:17",className:"w-10 h-10 bg-[#79c0ff]/20 rounded-lg flex items-center justify-center",children:i.jsx(Qs,{"code-path":"src\\sections\\AppendixSection.tsx:422:19",className:"w-5 h-5 text-[#79c0ff]"})}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:424:17",children:[i.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:425:19",className:"text-lg font-semibold text-[#e6edf3]",children:"超蓝的CD2代码模板 Beta v1.0"}),i.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:428:19",className:"text-sm text-[#8b949e]",children:"完整基础框架模板"})]})]}),T?i.jsx(Nt,{"code-path":"src\\sections\\AppendixSection.tsx:432:17",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\AppendixSection.tsx:434:17",className:"w-5 h-5 text-[#8b949e]"})]}),T&&i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:439:15",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:440:17",className:"pt-4",children:i.jsx(bt,{"code-path":"src\\sections\\AppendixSection.tsx:441:19",code:yh})})})]})]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:449:9",className:"mb-12",children:[i.jsxs("h3",{"code-path":"src\\sections\\AppendixSection.tsx:450:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[i.jsx(u0,{"code-path":"src\\sections\\AppendixSection.tsx:451:13",className:"w-5 h-5 text-[#ffd700]"}),"目前中文社区的cd2代码"]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:455:11",className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden",children:[i.jsxs("button",{"code-path":"src\\sections\\AppendixSection.tsx:456:13",onClick:()=>f(!A),className:"w-full flex items-center justify-between p-5 text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:460:15",className:"flex items-center gap-3",children:[i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:461:17",className:"w-10 h-10 bg-[#238636]/20 rounded-lg flex items-center justify-center",children:i.jsx(S0,{"code-path":"src\\sections\\AppendixSection.tsx:462:19",className:"w-5 h-5 text-[#238636]"})}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:464:17",children:[i.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:465:19",className:"text-lg font-semibold text-[#e6edf3]",children:"GitHub代码仓库"}),i.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:468:19",className:"text-sm text-[#8b949e]",children:"点击查看下载链接"})]})]}),A?i.jsx(Nt,{"code-path":"src\\sections\\AppendixSection.tsx:472:17",className:"w-5 h-5 text-[#8b949e]"}):i.jsx(ut,{"code-path":"src\\sections\\AppendixSection.tsx:474:17",className:"w-5 h-5 text-[#8b949e]"})]}),A&&i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:479:15",className:"px-5 pb-5 border-t border-[#30363d]",children:i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:480:17",className:"pt-4 space-y-2",children:gh.map((v,w)=>i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:482:21",href:v.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-3 bg-[#0d1117] hover:bg-[#21262d] rounded-lg transition-colors group",children:[i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:489:23",className:"flex items-center gap-3",children:[i.jsxs("span",{"code-path":"src\\sections\\AppendixSection.tsx:490:25",className:"text-[#8b949e] text-sm",children:[w+1,"."]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:491:25",children:[i.jsx("span",{"code-path":"src\\sections\\AppendixSection.tsx:492:27",className:"text-[#e6edf3] group-hover:text-[#79c0ff] transition-colors",children:v.name}),v.description&&i.jsxs("span",{"code-path":"src\\sections\\AppendixSection.tsx:496:29",className:"text-sm text-[#8b949e] ml-2",children:["(",v.description,")"]})]})]}),i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:502:23",className:"w-4 h-4 text-[#8b949e] group-hover:text-[#79c0ff]"})]},w))})})]})]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:512:9",className:"mb-12",children:[i.jsxs("h3",{"code-path":"src\\sections\\AppendixSection.tsx:513:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2 mb-4",children:[i.jsx(Gf,{"code-path":"src\\sections\\AppendixSection.tsx:514:13",className:"w-5 h-5 text-[#ffd700]"}),"对照表查询"]}),i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:519:11",className:"flex flex-wrap gap-2 mb-6",children:[{id:"temperature",label:"温度对照表",icon:Gf},{id:"material",label:"材质对照表",icon:Jf},{id:"projectile",label:"发射物对照表",icon:C0}].map(v=>i.jsxs("button",{"code-path":"src\\sections\\AppendixSection.tsx:525:15",onClick:()=>M(v.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${j===v.id?"bg-[#ffd700] text-black":"bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]"}`,children:[i.jsx(v.icon,{"code-path":"src\\sections\\AppendixSection.tsx:534:17",className:"w-4 h-4"}),v.label]},v.id))}),j==="temperature"&&i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:542:13",className:"overflow-x-auto",children:i.jsxs("table",{"code-path":"src\\sections\\AppendixSection.tsx:543:15",className:"w-full text-sm",children:[i.jsx("thead",{"code-path":"src\\sections\\AppendixSection.tsx:544:17",children:i.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:545:19",className:"bg-[#21262d]",children:[i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:546:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"敌人名称"}),i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:547:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"ED名称"}),i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:548:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"燃烧温度"}),i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:549:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"熄灭温度"}),i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:550:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"冷却速率"}),i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:551:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"冰冻温度"}),i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:552:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"解冻温度"}),i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:553:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"升温速率"})]})}),i.jsx("tbody",{"code-path":"src\\sections\\AppendixSection.tsx:556:17",children:hh.map((v,w)=>i.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:558:21",className:"border-b border-[#30363d] hover:bg-[#1f242c]",children:[i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:562:23",className:"px-4 py-3 text-[#e6edf3]",children:v.name}),i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:563:23",className:"px-4 py-3 text-[#a5d6ff] font-mono",children:v.edName}),i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:564:23",className:"px-4 py-3 text-[#f0883e]",children:v.burnTemp}),i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:565:23",className:"px-4 py-3 text-[#79c0ff]",children:v.douseTemp}),i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:566:23",className:"px-4 py-3 text-[#8b949e]",children:v.coolingRate}),i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:567:23",className:"px-4 py-3 text-[#79c0ff]",children:v.freezeTemp}),i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:568:23",className:"px-4 py-3 text-[#8b949e]",children:v.unfreezeTemp}),i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:569:23",className:"px-4 py-3 text-[#f0883e]",children:v.warmingRate})]},w))})]})}),j==="material"&&i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:579:13",className:"overflow-x-auto",children:i.jsxs("table",{"code-path":"src\\sections\\AppendixSection.tsx:580:15",className:"w-full text-sm",children:[i.jsx("thead",{"code-path":"src\\sections\\AppendixSection.tsx:581:17",children:i.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:582:19",className:"bg-[#21262d]",children:[i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:583:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"材质名称"}),i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:584:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"描述/用途"})]})}),i.jsx("tbody",{"code-path":"src\\sections\\AppendixSection.tsx:587:17",children:xh.map((v,w)=>i.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:589:21",className:"border-b border-[#30363d] hover:bg-[#1f242c]",children:[i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:593:23",className:"px-4 py-3 text-[#a5d6ff] font-mono",children:v.name}),i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:594:23",className:"px-4 py-3 text-[#e6edf3]",children:v.description})]},w))})]})}),j==="projectile"&&i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:604:13",className:"overflow-x-auto",children:i.jsxs("table",{"code-path":"src\\sections\\AppendixSection.tsx:605:15",className:"w-full text-sm",children:[i.jsx("thead",{"code-path":"src\\sections\\AppendixSection.tsx:606:17",children:i.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:607:19",className:"bg-[#21262d]",children:[i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:608:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"发射物名称"}),i.jsx("th",{"code-path":"src\\sections\\AppendixSection.tsx:609:21",className:"px-4 py-3 text-left text-[#ffd700] font-medium",children:"描述/效果"})]})}),i.jsx("tbody",{"code-path":"src\\sections\\AppendixSection.tsx:612:17",children:Sh.map((v,w)=>i.jsxs("tr",{"code-path":"src\\sections\\AppendixSection.tsx:614:21",className:"border-b border-[#30363d] hover:bg-[#1f242c]",children:[i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:618:23",className:"px-4 py-3 text-[#a5d6ff] font-mono",children:v.name}),i.jsx("td",{"code-path":"src\\sections\\AppendixSection.tsx:619:23",className:"px-4 py-3 text-[#e6edf3]",children:v.description})]},w))})]})})]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:629:9",className:"space-y-6",children:[i.jsxs("h3",{"code-path":"src\\sections\\AppendixSection.tsx:630:11",className:"text-xl font-semibold text-[#e6edf3] flex items-center gap-2",children:[i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:631:13",className:"w-5 h-5 text-[#ffd700]"}),"外部资源"]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:635:11",className:"grid md:grid-cols-2 gap-4",children:[i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:636:13",href:"https://seasonsc.github.io/CD2-reference-cn/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-4 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-[#ffd700]/30 transition-colors",children:[i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:642:15",className:"w-10 h-10 bg-[#238636]/20 rounded-lg flex items-center justify-center",children:i.jsx(Xs,{"code-path":"src\\sections\\AppendixSection.tsx:643:17",className:"w-5 h-5 text-[#238636]"})}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:645:15",children:[i.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:646:17",className:"font-medium text-[#e6edf3]",children:"在线版中文教程--by Elema4、苦瓜"}),i.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:647:17",className:"text-sm text-[#8b949e]",children:"seasonsc.github.io/CD2-reference-cn"})]}),i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:649:15",className:"w-4 h-4 text-[#8b949e] ml-auto"})]}),i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:652:13",href:"https://vonacht.github.io/cd2reference/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-4 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-[#ffd700]/30 transition-colors",children:[i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:658:15",className:"w-10 h-10 bg-[#79c0ff]/20 rounded-lg flex items-center justify-center",children:i.jsx(Xs,{"code-path":"src\\sections\\AppendixSection.tsx:659:17",className:"w-5 h-5 text-[#79c0ff]"})}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:661:15",children:[i.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:662:17",className:"font-medium text-[#e6edf3]",children:"在线版英文教程"}),i.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:663:17",className:"text-sm text-[#8b949e]",children:"vonacht.github.io/cd2reference"})]}),i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:665:15",className:"w-4 h-4 text-[#8b949e] ml-auto"})]})]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:670:11",className:"p-6 bg-[#161b22] border border-[#30363d] rounded-xl",children:[i.jsxs("h4",{"code-path":"src\\sections\\AppendixSection.tsx:671:13",className:"flex items-center gap-2 text-lg font-semibold text-[#e6edf3] mb-4",children:[i.jsx(Kf,{"code-path":"src\\sections\\AppendixSection.tsx:672:15",className:"w-5 h-5 text-[#ffd700]"}),"鸣谢"]}),i.jsx("p",{"code-path":"src\\sections\\AppendixSection.tsx:675:13",className:"text-[#8b949e] mb-4",children:"感谢以下CD2创作人员和文档翻译人员对本教学页面的支持："}),i.jsx("div",{"code-path":"src\\sections\\AppendixSection.tsx:678:13",className:"flex flex-wrap gap-2",children:["Brain","vonacht","carrot","spy","noskill","Elema4","苦瓜","立志成为gal糕手、豆豆...等cd2难度代码作者"].map(v=>i.jsx("span",{"code-path":"src\\sections\\AppendixSection.tsx:680:17",className:"px-3 py-1.5 bg-[#21262d] text-[#e6edf3] rounded-full text-sm",children:v},v))})]}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:691:11",className:"p-6 bg-[#161b22] border border-[#30363d] rounded-xl",children:[i.jsx("h4",{"code-path":"src\\sections\\AppendixSection.tsx:692:13",className:"text-lg font-semibold text-[#e6edf3] mb-4",children:"相关教程"}),i.jsxs("div",{"code-path":"src\\sections\\AppendixSection.tsx:693:13",className:"space-y-3",children:[i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:694:15",href:"https://www.bilibili.com/video/BV1Jk4y1h7La",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:700:17",className:"w-4 h-4"}),"lcyf166的CD1教程（上）"]}),i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:703:15",href:"https://www.bilibili.com/video/BV1r34y1w7SX",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:709:17",className:"w-4 h-4"}),"lcyf166的CD1教程（下）"]}),i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:712:15",href:"https://www.bilibili.com/read/cv24941919/?opus_fallback=1",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:718:17",className:"w-4 h-4"}),"mirror1900的CD1教程"]}),i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:721:15",href:"https://www.bilibili.com/read/cv19376707/?from=search&spm_id_from=333.337.0.0&opus_fallback=1",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:727:17",className:"w-4 h-4"}),"Koncin的CD1教程"]}),i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:730:15",href:"https://www.bilibili.com/read/cv24147071/?opus_fallback=1",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:736:17",className:"w-4 h-4"}),"装饰一杯咖啡的生物代码注释（cd1和cd2通用）"]}),i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:739:15",href:"https://www.bilibili.com/opus/1162290546289410051?spm_id_from=333.1387.0.0",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:745:17",className:"w-4 h-4"}),"超蓝的CD2教程基础篇"]}),i.jsxs("a",{"code-path":"src\\sections\\AppendixSection.tsx:748:15",href:"https://www.bilibili.com/video/BV1eBrPBMECW",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#8b949e] hover:text-[#ffd700] transition-colors",children:[i.jsx(Tt,{"code-path":"src\\sections\\AppendixSection.tsx:754:17",className:"w-4 h-4"}),"九五和希诺的mod管理器安装教程"]})]})]})]})]})})}function bh(){const T=()=>{window.scrollTo({top:0,behavior:"smooth"})};return i.jsx("footer",{"code-path":"src\\sections\\FooterSection.tsx:9:5",className:"py-12 px-4 sm:px-6 lg:px-8 border-t border-[#30363d]",children:i.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:10:7",className:"max-w-6xl mx-auto",children:[i.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:11:9",className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[i.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:13:11",className:"text-center md:text-left",children:[i.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:14:13",className:"flex items-center justify-center md:justify-start gap-2 mb-2",children:[i.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:15:15",className:"w-8 h-8 bg-[#ffd700] rounded flex items-center justify-center text-black text-sm font-bold",children:"CD2"}),i.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:16:15",className:"text-[#e6edf3] font-bold",children:"深岩银河CD2进阶教程"})]}),i.jsx("p",{"code-path":"src\\sections\\FooterSection.tsx:18:13",className:"text-sm text-[#8b949e]",children:"基于《星の綺麗な夜 v1.91γ》等cd2代码实例"})]}),i.jsxs("button",{"code-path":"src\\sections\\FooterSection.tsx:24:11",onClick:T,className:"group flex items-center gap-2 px-6 py-3 bg-[#21262d] hover:bg-[#ffd700] text-[#8b949e] hover:text-black rounded-lg transition-all",children:[i.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:28:13",className:"text-sm font-medium",children:"返回顶部"}),i.jsx(U1,{"code-path":"src\\sections\\FooterSection.tsx:29:13",className:"w-4 h-4 group-hover:-translate-y-1 transition-transform"})]})]}),i.jsx("div",{"code-path":"src\\sections\\FooterSection.tsx:34:9",className:"my-8 border-t border-[#30363d]"}),i.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:37:9",className:"flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8b949e]",children:[i.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:38:11",className:"flex items-center gap-1",children:[i.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:39:13",children:"Made with"}),i.jsx(y0,{"code-path":"src\\sections\\FooterSection.tsx:40:13",className:"w-4 h-4 text-[#da3633] fill-[#da3633]"}),i.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:41:13",children:"for Deep Rock Galactic community"})]}),i.jsx("div",{"code-path":"src\\sections\\FooterSection.tsx:44:11",className:"flex items-center gap-4",children:i.jsx("span",{"code-path":"src\\sections\\FooterSection.tsx:45:13",children:"作者: 超蓝大人驾到"})})]}),i.jsxs("div",{"code-path":"src\\sections\\FooterSection.tsx:50:9",className:"mt-6 text-center text-xs text-[#484f58]",children:[i.jsx("p",{"code-path":"src\\sections\\FooterSection.tsx:51:11",children:"本教程仅供学习交流使用，所有代码示例基于《深岩银河》CD2。"}),i.jsx("p",{"code-path":"src\\sections\\FooterSection.tsx:54:11",className:"mt-1",children:"CD2是The Brain开发的自定义难度mod。"})]})]})})}function _h(){const[T,z]=I.useState("hero");return I.useEffect(()=>{const A=()=>{const f=["hero","mutate","wavespawners","vars","messages","exercises","feedback","appendix"],j=window.scrollY+200;for(const M of f){const v=document.getElementById(M);if(v){const{offsetTop:w,offsetHeight:m}=v;if(j>=w&&j<w+m){z(M);break}}}};return window.addEventListener("scroll",A),()=>window.removeEventListener("scroll",A)},[]),i.jsxs("div",{"code-path":"src\\App.tsx:39:5",className:"min-h-screen bg-[#0a0a0a] text-[#e6edf3]",children:[i.jsx(Y0,{"code-path":"src\\App.tsx:40:7",activeSection:T}),i.jsxs("main",{"code-path":"src\\App.tsx:42:7",children:[i.jsx(X0,{"code-path":"src\\App.tsx:43:9"}),i.jsx(J0,{"code-path":"src\\App.tsx:44:9"}),i.jsx($0,{"code-path":"src\\App.tsx:45:9"}),i.jsx(lh,{"code-path":"src\\App.tsx:46:9"}),i.jsx(oh,{"code-path":"src\\App.tsx:47:9"}),i.jsx(rh,{"code-path":"src\\App.tsx:48:9"}),i.jsx(ph,{"code-path":"src\\App.tsx:49:9"}),i.jsx(vh,{"code-path":"src\\App.tsx:50:9"})]}),i.jsx(bh,{"code-path":"src\\App.tsx:53:7"})]})}j1.createRoot(document.getElementById("root")).render(i.jsx(I.StrictMode,{"code-path":"src\\main.tsx:7:3",children:i.jsx(_h,{"code-path":"src\\main.tsx:8:5"})}));
