(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return w},L:function(){return u},LL:function(){return N},P0:function(){return g},Pz:function(){return v},Sg:function(){return _},ZR:function(){return A},aH:function(){return y},b$:function(){return I},eu:function(){return k},hl:function(){return C},m9:function(){return V},ne:function(){return M},pd:function(){return L},q4:function(){return m},ru:function(){return T},tV:function(){return h},uI:function(){return b},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],a=n[s];if(D(r)&&D(a)){if(!e(r,a))return!1}else if(r!==a)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},w1:function(){return S},xO:function(){return P},xb:function(){return O},z$:function(){return E},zd:function(){return x}});var r=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},s=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,h=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),r.push(n[u],n[h],n[c],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,a=++t<e.length?n[e.charAt(t)]:64,l=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==l)throw new o;let u=i<<2|s>>4;if(r.push(u),64!==a){let e=s<<4&240|a>>2;if(r.push(e),64!==l){let e=a<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return a.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},c=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&h(e[1]);return t&&JSON.parse(t)},p=()=>{try{return c()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=e=>{let t=m(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function T(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function I(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function S(){let e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){try{return"object"==typeof indexedDB}catch(e){return!1}}function k(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(R,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new A(r,a,n)}}let R=/\{\$([^}]+)}/g;function O(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function x(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function L(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function M(e,t){let n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return e&&e._delegate?e._delegate:e}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1940)}])},9586:function(e,t,n){"use strict";n.d(t,{I:function(){return o},db:function(){return a}});var r=n(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,r.KN)("firebase","10.7.1","app");var i=n(6100),s=n(316);(0,r.ZF)({apiKey:"AIzaSyCG1t6Enqzxebym249RT0B_u2DWpL-tnFw",authDomain:"expense-tracker-firebase-e1f7e.firebaseapp.com",projectId:"expense-tracker-firebase-e1f7e",storageBucket:"expense-tracker-firebase-e1f7e.appspot.com",messagingSenderId:"976972881204",appId:"1:976972881204:web:aa972ffda7d8b69ca85961",measurementId:"G-SJFKPGRL14"});let a=(0,i.ad)(),o=(0,s.v0)()},9371:function(e,t,n){"use strict";n.d(t,{H:function(){return u},a:function(){return l}});var r=n(5893),i=n(7294),s=n(316),a=n(9586);let o=(0,i.createContext)({}),l=()=>(0,i.useContext)(o),u=e=>{let{children:t}=e,[n,l]=(0,i.useState)(null),[u,h]=(0,i.useState)(!0);(0,i.useEffect)(()=>{let e=(0,s.Aj)(a.I,e=>{e?l({uid:e.uid,email:e.email,displayName:e.displayName}):l(null),h(!1)});return()=>e()},[]);let c=async()=>{l(null),await (0,s.w7)(a.I)};return(0,r.jsx)(o.Provider,{value:{user:n,logout:c},children:u?null:t})}},9720:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return s},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return o},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return h},isThenable:function(){return c}});let i="refresh",s="navigate",a="restore",o="server-patch",l="prefetch",u="fast-refresh",h="server-action";function c(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(9082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let r=n(8754),i=n(1757)._(n(7294)),s=r._(n(3935)),a=r._(n(4764)),o=n(8484),l=n(2666),u=n(4845);n(9982);let h=n(4167),c=r._(n(4148)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,t,n,r,i,s){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function p(e){let[t,n]=i.version.split(".",2),r=parseInt(t,10),s=parseInt(n,10);return r>18||18===r&&s>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,i.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:s,height:a,width:o,decoding:l,className:u,style:h,fetchPriority:c,placeholder:d,loading:m,unoptimized:g,fill:y,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:E,onLoad:b,onError:T,...I}=e;return i.default.createElement("img",{...I,...p(c),loading:m,width:o,height:a,decoding:l,"data-nimg":y?"fill":"1",className:u,style:h,sizes:s,srcSet:r,src:n,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(T&&(e.src=e.src),e.complete&&f(e,d,v,w,_,g))},[n,d,v,w,_,T,g,t]),onLoad:e=>{f(e.currentTarget,d,v,w,_,g)},onError:e=>{E(!0),"empty"!==d&&_(!0),T&&T(e)}})});function g(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...p(n.fetchPriority)};return t&&s.default.preload?(s.default.preload(n.src,r),null):i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let y=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(h.RouterContext),r=(0,i.useContext)(u.ImageConfigContext),s=(0,i.useMemo)(()=>{let e=d||r||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:f}=e,p=(0,i.useRef)(a);(0,i.useEffect)(()=>{p.current=a},[a]);let y=(0,i.useRef)(f);(0,i.useEffect)(()=>{y.current=f},[f]);let[v,w]=(0,i.useState)(!1),[_,E]=(0,i.useState)(!1),{props:b,meta:T}=(0,o.getImgProps)(e,{defaultLoader:c.default,imgConf:s,blurComplete:v,showAltText:_});return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,{...b,unoptimized:T.unoptimized,placeholder:T.placeholder,fill:T.fill,onLoadRef:p,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:E,ref:t}),T.priority?i.default.createElement(g,{isAppRouter:!n,imgAttributes:b}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1032:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=n(8754)._(n(7294)),i=n(4879),s=n(1572),a=n(8373),o=n(6221),l=n(5933),u=n(4167),h=n(8874),c=n(6342),d=n(245),f=n(6015),p=n(9720),m=new Set;function g(e,t,n,r,i,a){if(a||(0,s.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(i))return;m.add(i)}Promise.resolve(a?e.prefetch(t,i):e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=r.default.forwardRef(function(e,t){let n,a;let{href:m,as:v,children:w,prefetch:_=null,passHref:E,replace:b,shallow:T,scroll:I,locale:S,onClick:C,onMouseEnter:k,onTouchStart:A,legacyBehavior:N=!1,...R}=e;n=w,N&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let O=r.default.useContext(u.RouterContext),D=r.default.useContext(h.AppRouterContext),P=null!=O?O:D,x=!O,L=!1!==_,M=null===_?p.PrefetchKind.AUTO:p.PrefetchKind.FULL,{href:U,as:F}=r.default.useMemo(()=>{if(!O){let e=y(m);return{href:e,as:v?y(v):e}}let[e,t]=(0,i.resolveHref)(O,m,!0);return{href:e,as:v?(0,i.resolveHref)(O,v):t||e}},[O,m,v]),V=r.default.useRef(U),j=r.default.useRef(F);N&&(a=r.default.Children.only(n));let B=N?a&&"object"==typeof a&&a.ref:t,[z,$,q]=(0,c.useIntersection)({rootMargin:"200px"}),H=r.default.useCallback(e=>{(j.current!==F||V.current!==U)&&(q(),j.current=F,V.current=U),z(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[F,B,U,q,z]);r.default.useEffect(()=>{P&&$&&L&&g(P,U,F,{locale:S},{kind:M},x)},[F,U,$,S,L,null==O?void 0:O.locale,P,x,M]);let K={ref:H,onClick(e){N||"function"!=typeof C||C(e),N&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,i,a,o,l,u,h){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!h&&!(0,s.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==l||l;"beforePopState"in t?t[a?"replace":"push"](n,i,{shallow:o,locale:u,scroll:e}):t[a?"replace":"push"](i||n,{scroll:e})};h?r.default.startTransition(d):d()}(e,P,U,F,b,T,I,S,x)},onMouseEnter(e){N||"function"!=typeof k||k(e),N&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),P&&(L||!x)&&g(P,U,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:M},x)},onTouchStart(e){N||"function"!=typeof A||A(e),N&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),P&&(L||!x)&&g(P,U,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:M},x)}};if((0,o.isAbsoluteUrl)(F))K.href=F;else if(!N||E||"a"===a.type&&!("href"in a.props)){let e=void 0!==S?S:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&(0,d.getDomainLocale)(F,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);K.href=t||(0,f.addBasePath)((0,l.addLocale)(F,e,null==O?void 0:O.defaultLocale))}return N?r.default.cloneElement(a,K):r.default.createElement("a",{...R,...K},n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(7294),i=n(6231),s="function"==typeof IntersectionObserver,a=new Map,o=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,u=l||!s,[h,c]=(0,r.useState)(!1),d=(0,r.useRef)(null),f=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(s){if(u||h)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:i,elements:s}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},o.push(n),a.set(n,t),t}(n);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),a.delete(r);let e=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!h){let e=(0,i.requestIdleCallback)(()=>c(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,n,t,h,d.current]),[f,h,(0,r.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),n(9982);let r=n(2528),i=n(2666);function s(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var n;let o,l,u,{src:h,sizes:c,unoptimized:d=!1,priority:f=!1,loading:p,className:m,quality:g,width:y,height:v,fill:w=!1,style:_,onLoad:E,onLoadingComplete:b,placeholder:T="empty",blurDataURL:I,fetchPriority:S,layout:C,objectFit:k,objectPosition:A,lazyBoundary:N,lazyRoot:R,...O}=e,{imgConf:D,showAltText:P,blurComplete:x,defaultLoader:L}=t,M=D||i.imageConfigDefault;if("allSizes"in M)o=M;else{let e=[...M.deviceSizes,...M.imageSizes].sort((e,t)=>e-t),t=M.deviceSizes.sort((e,t)=>e-t);o={...M,allSizes:e,deviceSizes:t}}let U=O.loader||L;delete O.loader,delete O.srcSet;let F="__next_img_default"in U;if(F){if("custom"===o.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:n,...r}=t;return e(r)}}if(C){"fill"===C&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let V="",j=a(y),B=a(v);if("object"==typeof(n=h)&&(s(n)||void 0!==n.src)){let e=s(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,I=I||e.blurDataURL,V=e.src,!w){if(j||B){if(j&&!B){let t=j/e.width;B=Math.round(e.height*t)}else if(!j&&B){let t=B/e.height;j=Math.round(e.width*t)}}else j=e.width,B=e.height}}let z=!f&&("lazy"===p||void 0===p);(!(h="string"==typeof h?h:V)||h.startsWith("data:")||h.startsWith("blob:"))&&(d=!0,z=!1),o.unoptimized&&(d=!0),F&&h.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(d=!0),f&&(S="high");let $=a(g),q=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:A}:{},P?{}:{color:"transparent"},_),H=x||"empty"===T?null:"blur"===T?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:j,heightInt:B,blurWidth:l,blurHeight:u,blurDataURL:I||"",objectFit:q.objectFit})+'")':'url("'+T+'")',K=H?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},G=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:s,sizes:a,loader:o}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),h=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((e,r)=>o({config:t,src:n,quality:s,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:o({config:t,src:n,quality:s,width:l[h]})}}({config:o,src:h,unoptimized:d,width:j,quality:$,sizes:c,loader:U});return{props:{...O,loading:z?"lazy":p,fetchPriority:S,width:j,height:B,decoding:"async",className:m,style:{...q,...K},sizes:G.sizes,srcSet:G.srcSet,src:G.src},meta:{unoptimized:d,priority:f,placeholder:T,fill:w}}}},2528:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:s,objectFit:a}=e,o=r?40*r:t,l=i?40*i:n,u=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return l},default:function(){return u}});let r=n(8754),i=n(8484),s=n(9982),a=n(1100),o=r._(n(4148)),l=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},u=a.Image},4148:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},3378:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),s=n(1163),a=n(9371);t.default=e=>{let{children:t}=e,{user:n}=(0,a.a)(),o=(0,s.useRouter)();return(0,i.useEffect)(()=>{n||o.push("/login")},[o,n]),(0,r.jsx)(r.Fragment,{children:n?t:null})}},1940:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=n(9371);n(7133);var s=n(1163),a=n(3378),o=n(2920),l=n(8384),u=n(4681);let h=["/","/login","/register"];function c(e){let{Component:t,pageProps:n}=e,c=(0,s.useRouter)();return(0,r.jsxs)(i.H,{children:[(0,r.jsx)(u.default,{}),(0,r.jsx)(o.Ix,{}),h.includes(c.pathname)?(0,r.jsx)(t,{...n}):(0,r.jsx)(a.default,{children:(0,r.jsx)(t,{...n})}),(0,r.jsx)(l.default,{})]})}},8384:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(7294);var i=n(5675),s=n.n(i);t.default=function(){return(0,r.jsx)("footer",{className:"text-gray-600 body-font",children:(0,r.jsxs)("div",{className:"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col",children:[(0,r.jsxs)("a",{className:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",children:[(0,r.jsx)(s(),{src:"/expenso.png",width:30,height:30,alt:"Picture of the author",className:"rounded-full"}),(0,r.jsx)("span",{className:"ml-3 text-xl",children:"Expenso"})]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",children:["\xa9 2023 Expense Tracker —",(0,r.jsx)("a",{href:"https://twitter.com/knyttneve",className:"text-gray-600 ml-1",rel:"noopener noreferrer",target:"_blank",children:"@tcecse"})]}),(0,r.jsxs)("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",children:[(0,r.jsx)("a",{className:"text-gray-500",children:(0,r.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),(0,r.jsx)("a",{className:"ml-3 text-gray-500",children:(0,r.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),(0,r.jsx)("a",{className:"ml-3 text-gray-500",children:(0,r.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,r.jsx)("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),(0,r.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})}),(0,r.jsx)("a",{className:"ml-3 text-gray-500",children:(0,r.jsxs)("svg",{fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"0",className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),(0,r.jsx)("circle",{cx:"4",cy:"4",r:"2",stroke:"none"})]})})]})]})})}},4681:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),s=n(9371),a=n(1163),o=n(5675),l=n.n(o),u=n(1664),h=n.n(u);t.default=function(){let{user:e,logout:t}=(0,s.a)(),n=(0,a.useRouter)(),[o,u]=(0,i.useState)(!1);return(0,r.jsx)("header",{className:"text-gray-600 body-font",children:(0,r.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[(0,r.jsxs)("div",{className:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:[(0,r.jsx)(l(),{src:"/expenso.png",width:30,height:30,alt:"Picture of the author",className:"rounded-full"}),(0,r.jsx)("span",{className:"ml-3 text-xl",children:"Expenso"})]}),(0,r.jsxs)("nav",{className:"md:ml-auto flex flex-wrap items-center text-base justify-center",children:[(0,r.jsx)(h(),{href:"/dashboard",className:"mr-5 hover:text-gray-900",children:"Dashboard"}),(0,r.jsx)(h(),{href:"/income",className:"mr-5 hover:text-gray-900",children:"Income"}),(0,r.jsx)(h(),{href:"/expense",className:"mr-5 hover:text-gray-900",children:"Expense"})]}),(0,r.jsx)("div",{className:"flex items-end mt-4 md:mt-0",children:e?(0,r.jsxs)("div",{className:"relative inline-block text-left",children:[(0,r.jsxs)("button",{className:"justify-end inline-flex items-center bg-blue-100 border-0 py-1 px-5 focus:outline-none hover:bg-blue-200 rounded text-base sm:text-sm",onClick:()=>{u(!o)},children:[(0,r.jsx)(l(),{src:"/user.png",width:30,height:30,alt:"Picture of the author",className:"rounded-full mr-2"}),(0,r.jsx)("span",{className:"mr-3",children:e.displayName}),(0,r.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4",className:"w-4 h-4 ".concat(o?"transform rotate-180":""),viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),o&&(0,r.jsx)("div",{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg",children:(0,r.jsx)("div",{className:"rounded-md bg-white shadow-xs",children:(0,r.jsx)("div",{className:"py-1",children:(0,r.jsx)("button",{onClick:()=>{t(),n.push("/login")},className:"block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",children:"Logout"})})})})]}):(0,r.jsx)(h(),{href:"/login",className:"md:ml-auto flex flex-wrap items-center   justify-center mr-5 text-gray-700 hover:text-gray-900 ",children:"Sign in"})})]})})}},7133:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l=[],u=!1,h=-1;function c(){u&&r&&(u=!1,r.length?l=r.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=o(c);u=!0;for(var t=l.length;t;){for(r=l,l=[];++h<t;)r&&r[h].run();h=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},a=!0;try{t[e](s,s.exports,r),a=!1}finally{a&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},5675:function(e,t,n){e.exports=n(256)},1664:function(e,t,n){e.exports=n(1032)},1163:function(e,t,n){e.exports=n(2937)},5816:function(e,t,n){"use strict";let r,i;n.d(t,{Jn:function(){return x},qX:function(){return O},Xd:function(){return R},Mq:function(){return M},ZF:function(){return L},KN:function(){return U}});var s,a=n(8463),o=n(3333),l=n(4444);let u=(e,t)=>t.some(t=>e instanceof t),h=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),g(h.get(this))}:function(...e){return g(t.apply(y(this),e))}:function(e,...n){let r=t.call(y(this),e,...n);return d.set(r,e.sort?e.sort():[e]),g(r)}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});c.set(e,t)}(t),u(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,m):t;return n!==e&&(f.set(e,n),p.set(n,e)),n}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],_=new Map;function E(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(_.get(t))return _.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return _.set(t,s),s}m={...s=m,get:(e,t,n)=>E(e,t)||s.get(e,t,n),has:(e,t)=>!!E(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let T="@firebase/app",I="0.9.25",S=new o.Yd("@firebase/app"),C="[DEFAULT]",k={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,N=new Map;function R(e){let t=e.name;if(N.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(N.set(t,e),A.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function O(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let D=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x="10.7.1";function L(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:C,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw D.create("bad-app-name",{appName:String(i)});if(n||(n=(0,l.aH)()),!n)throw D.create("no-options");let s=A.get(i);if(s){if((0,l.vZ)(n,s.options)&&(0,l.vZ)(r,s.config))return s;throw D.create("duplicate-app",{appName:i})}let o=new a.H0(i);for(let e of N.values())o.addComponent(e);let u=new P(n,r,o);return A.set(i,u),u}function M(e=C){let t=A.get(e);if(!t&&e===C&&(0,l.aH)())return L();if(!t)throw D.create("no-app",{appName:e});return t}function U(e,t,n){var r;let i=null!==(r=k[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(e.join(" "));return}R(new a.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let F="firebase-heartbeat-store",V=null;function j(){return V||(V=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=g(a);return r&&a.addEventListener("upgradeneeded",e=>{r(g(a.result),e.oldVersion,e.newVersion,g(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(F)}}).catch(e=>{throw D.create("idb-open",{originalErrorMessage:e.message})})),V}async function B(e){try{let t=await j();return await t.transaction(F).objectStore(F).get($(e))}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=D.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}async function z(e,t){try{let n=(await j()).transaction(F,"readwrite"),r=n.objectStore(F);await r.put(t,$(e)),await n.done}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=D.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}function $(e){return`${e.name}!${e.options.appId}`}class q{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new K(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=H();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=H(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),G(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),G(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,l.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function H(){return new Date().toISOString().substring(0,10)}class K{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await B(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function G(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}R(new a.wA("platform-logger",e=>new b(e),"PRIVATE")),R(new a.wA("heartbeat",e=>new q(e),"PRIVATE")),U(T,I,""),U(T,I,"esm2017"),U("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return o},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return h},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let a={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},316:function(e,t,n){"use strict";n.d(t,{Xb:function(){return e9},v0:function(){return nt},Aj:function(){return e6},e5:function(){return e5},w7:function(){return e3}});var r,i=n(4444),s=n(5816),a=n(3333);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}"function"==typeof SuppressedError&&SuppressedError;var l=n(8463);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let h=new i.LL("auth","Firebase",u()),c=new a.Yd("@firebase/auth");function d(e,...t){c.logLevel<=a.in.ERROR&&c.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function m(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return h.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function y(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function w(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||y("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===w()||"https:"===w()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){e.emulator||y("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},I=new _(3e4,6e4);function S(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function C(e,t,n,r,s={}){return k(e,s,async()=>{let s={},a={};r&&("GET"===t?a=r:s={body:JSON.stringify(r)});let o=(0,i.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),b.fetch()(N(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function k(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},T),t);try{let t=new R(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw O(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let[t,n]=(s.ok?a.errorMessage:a.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw O(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===t)throw O(e,"email-already-in-use",a);if("USER_DISABLED"===t)throw O(e,"user-disabled",a);let o=r[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(n)throw function(e,t,n){let r=Object.assign(Object.assign({},u()),{[t]:n});return new i.LL("auth","Firebase",r).create(t,{appName:e.name})}(e,o,n);f(e,o)}}catch(t){if(t instanceof i.ZR)throw t;f(e,"network-request-failed",{message:String(t)})}}async function A(e,t,n,r,i={}){let s=await C(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function N(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?E(e.config,i):`${e.config.apiScheme}://${i}`}class R{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),I.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function O(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=p(e,t,r);return i.customData._tokenResponse=n,i}function D(e){return void 0!==e&&void 0!==e.enterprise}class P{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function x(e,t){return C(e,"GET","/v2/recaptchaConfig",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L(e,t){return C(e,"POST","/v1/accounts:delete",t)}async function M(e,t){return C(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function F(e,t=!1){let n=(0,i.m9)(e),r=await n.getIdToken(t),s=j(r);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let a="object"==typeof s.firebase?s.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:U(V(s.auth_time)),issuedAtTime:U(V(s.iat)),expirationTime:U(V(s.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function V(e){return 1e3*Number(e)}function j(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(n);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e){var t;let n=e.auth,r=await e.getIdToken(),i=await B(e,M(n,{idToken:r}));g(null==i?void 0:i.users.length,n,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],l=[...e.providerData.filter(e=>!a.some(t=>t.providerId===e.providerId)),...a],u=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new $(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&h})}async function H(e){let t=(0,i.m9)(e);await q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t){let n=await k(e,{},async()=>{let n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=N(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",b.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function G(e,t){return C(e,"POST","/v2/accounts:revokeToken",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(void 0!==e.idToken,"internal-error"),g(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=j(e);return g(t,"internal-error"),g(void 0!==t.exp,"internal-error"),g(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await K(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new W;return n&&(g("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(g("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(g("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new W,this.toJSON())}_performRefresh(){return y("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t){g("string"==typeof e||void 0===e,"internal-error",{appName:t})}class X{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await B(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F(this,e)}reload(){return H(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new X(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await B(this,L(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;let h=null!==(n=t.displayName)&&void 0!==n?n:void 0,c=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,y=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:_,isAnonymous:E,providerData:b,stsTokenManager:T}=t;g(w&&T,e,"internal-error");let I=W.fromJSON(this.name,T);g("string"==typeof w,e,"internal-error"),Q(h,e.name),Q(c,e.name),g("boolean"==typeof _,e,"internal-error"),g("boolean"==typeof E,e,"internal-error"),Q(d,e.name),Q(f,e.name),Q(p,e.name),Q(m,e.name),Q(y,e.name),Q(v,e.name);let S=new X({uid:w,auth:e,email:c,emailVerified:_,displayName:h,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:y,lastLoginAt:v});return b&&Array.isArray(b)&&(S.providerData=b.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){let r=new W;r.updateFromServerResponse(t);let i=new X({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await q(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J=new Map;function Y(e){e instanceof Function||y("Expected a class definition");let t=J.get(e);return t?t instanceof e||y("Instance stored in cache mismatched with class"):(t=new e,J.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t,n){return`firebase:${e}:${t}:${n}`}Z.type="NONE";class et{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=ee(this.userKey,r.apiKey,i),this.fullPersistenceKey=ee("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?X._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new et(Y(Z),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||Y(Z),s=ee(n,e.config.apiKey,e.name),a=null;for(let n of t)try{let t=await n._get(s);if(t){let r=X._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}let o=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length&&(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new et(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ea(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(er(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(el(t))return"Blackberry";if(eu(t))return"Webos";if(ei(t))return"Safari";if((t.includes("chrome/")||es(t))&&!t.includes("edge/"))return"Chrome";if(eo(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function er(e=(0,i.z$)()){return/firefox\//i.test(e)}function ei(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function es(e=(0,i.z$)()){return/crios\//i.test(e)}function ea(e=(0,i.z$)()){return/iemobile/i.test(e)}function eo(e=(0,i.z$)()){return/android/i.test(e)}function el(e=(0,i.z$)()){return/blackberry/i.test(e)}function eu(e=(0,i.z$)()){return/webos/i.test(e)}function eh(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ec(e=(0,i.z$)()){return eh(e)||eo(e)||eu(e)||el(e)||/windows phone/i.test(e)||ea(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e,t=[]){let n;switch(e){case"Browser":n=en((0,i.z$)());break;case"Worker":n=`${en((0,i.z$)())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let r=e(t);n(r)}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(e,t={}){return C(e,"GET","/v2/passwordPolicy",S(e,t))}class em{constructor(e){var t,n,r,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,a;let o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ev(this),this.idTokenSubscription=new ev(this),this.beforeStateQueue=new ef(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Y(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await et.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!n||n===s)&&(null==a?void 0:a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await q(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Y(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new em(await ep(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await G(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Y(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await et.create(this,[Y(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{let n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ed(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){c.logLevel<=a.in.WARN&&c.warn(`Auth (${s.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ey(e){return(0,i.m9)(e)}class ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ew(e){return new Promise((t,n)=>{var r,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=p("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)})}function e_(e){return`__${e}${Math.floor(1e6*Math.random())}`}class eE{constructor(e){this.type="recaptcha-enterprise",this.auth=ey(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{x(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0===r.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let n=new P(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;D(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&D(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}ew("https://www.google.com/recaptcha/enterprise.js?render="+n).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function eb(e,t,n,r=!1){let i;let s=new eE(e);try{i=await s.verify(n)}catch(e){i=await s.verify(n,!0)}let a=Object.assign({},t);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function eT(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await eb(e,t,n,"getOobCode"===n);return r(e,i)}});{let i=await eb(e,t,n,"getOobCode"===n);return r(e,i)}}function eI(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eS(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}async function ek(e,t){return C(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(e,t){return A(e,"POST","/v1/accounts:signInWithPassword",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",S(e,t))}async function eR(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO extends eC{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new eO(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new eO(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eT(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",eA);case"emailLink":return eN(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eT(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ek);case"emailLink":return eR(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(e,t){return A(e,"POST","/v1/accounts:signInWithIdp",S(e,t))}class eP extends eC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eP(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new eP(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return eD(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,eD(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eD(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(e,t){return C(e,"POST","/v1/accounts:sendVerificationCode",S(e,t))}async function eL(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",S(e,t))}async function eM(e,t){let n=await A(e,"POST","/v1/accounts:signInWithPhoneNumber",S(e,t));if(n.temporaryProof)throw O(e,"account-exists-with-different-credential",n);return n}let eU={USER_NOT_FOUND:"user-not-found"};async function eF(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",S(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),eU)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV extends eC{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eV({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eV({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eL(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eM(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eF(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new eV({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class ej{constructor(e){var t,n,r,s,a,o;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,h=null!==(n=l.oobCode)&&void 0!==n?n:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);g(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(a=l.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,n=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,r=(0,i.zd)((0,i.pd)(e)).deep_link_id;return(r?(0,i.zd)((0,i.pd)(r)).link:null)||r||n||t||e}(e);try{return new ej(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(){this.providerId=eB.PROVIDER_ID}static credential(e,t){return eO._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=ej.parseLink(t);return g(n,"argument-error"),eO._fromEmailAndCode(e,n.code,n.tenantId)}}eB.PROVIDER_ID="password",eB.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eB.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e$ extends ez{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq extends e${constructor(){super("facebook.com")}static credential(e){return eP._fromParams({providerId:eq.PROVIDER_ID,signInMethod:eq.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eq.credentialFromTaggedObject(e)}static credentialFromError(e){return eq.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eq.credential(e.oauthAccessToken)}catch(e){return null}}}eq.FACEBOOK_SIGN_IN_METHOD="facebook.com",eq.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH extends e${constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eP._fromParams({providerId:eH.PROVIDER_ID,signInMethod:eH.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eH.credentialFromTaggedObject(e)}static credentialFromError(e){return eH.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return eH.credential(t,n)}catch(e){return null}}}eH.GOOGLE_SIGN_IN_METHOD="google.com",eH.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK extends e${constructor(){super("github.com")}static credential(e){return eP._fromParams({providerId:eK.PROVIDER_ID,signInMethod:eK.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eK.credentialFromTaggedObject(e)}static credentialFromError(e){return eK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eK.credential(e.oauthAccessToken)}catch(e){return null}}}eK.GITHUB_SIGN_IN_METHOD="github.com",eK.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG extends e${constructor(){super("twitter.com")}static credential(e,t){return eP._fromParams({providerId:eG.PROVIDER_ID,signInMethod:eG.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eG.credentialFromTaggedObject(e)}static credentialFromError(e){return eG.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eG.credential(t,n)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eW(e,t){return A(e,"POST","/v1/accounts:signUp",S(e,t))}eG.TWITTER_SIGN_IN_METHOD="twitter.com",eG.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){return new eQ({user:await X._fromIdTokenResponse(e,n,r),providerId:eX(n),_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){return await e._updateTokensIfNecessary(n,!0),new eQ({user:e,providerId:eX(n),_tokenResponse:n,operationType:t})}}function eX(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,eJ.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new eJ(e,t,n,r)}}function eY(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw eJ._fromErrorAndOperation(e,n,t,r);throw n})}async function eZ(e,t,n=!1){let r=await B(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return eQ._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(e,t,n=!1){let{auth:r}=e,i="reauthenticate";try{let s=await B(e,eY(r,i,t,e),n);g(s.idToken,r,"internal-error");let a=j(s.idToken);g(a,r,"internal-error");let{sub:o}=a;return g(e.uid===o,r,"user-mismatch"),eQ._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&f(r,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(e,t,n=!1){let r="signIn",i=await eY(e,r,t),s=await eQ._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function e2(e,t){return e1(ey(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e4(e){let t=ey(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function e9(e,t,n){let r=ey(e),i=eT(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eW),s=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e4(e),t}),a=await eQ._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function e5(e,t,n){return e2((0,i.m9)(e),eB.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e4(e),t})}function e6(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}function e3(e){return(0,i.m9)(e).signOut()}new WeakMap;let e7="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e7,"1"),this.storage.removeItem(e7),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class te extends e8{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return ei(e)||eh(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}te.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends e8{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tt.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new tn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(i).map(async t=>t(e.origin,r)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}tn.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((a,o)=>{let l=tr("",20);s.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},n);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(e.data.response);break;default:clearTimeout(u),clearTimeout(r),o(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){return void 0!==ts().WorkerGlobalScope&&"function"==typeof ts().importScripts}async function to(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl="firebaseLocalStorageDb",tu="firebaseLocalStorage",th="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function td(e,t){return e.transaction([tu],t?"readwrite":"readonly").objectStore(tu)}function tf(){let e=indexedDB.open(tl,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(tu,{keyPath:th})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(tu)?t(n):(n.close(),await new tc(indexedDB.deleteDatabase(tl)).toPromise(),t(await tf()))})})}async function tp(e,t,n){return new tc(td(e,!0).put({[th]:t,value:n})).toPromise()}async function tm(e,t){let n=td(e,!1).get(t),r=await new tc(n).toPromise();return void 0===r?null:r.value}function tg(e,t){return new tc(td(e,!0).delete(t)).toPromise()}class ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tf()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ta()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(ta()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await to(),!this.activeServiceWorker)return;this.sender=new ti(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tf();return await tp(e,e7,"1"),await tg(e,e7),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>tp(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tm(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new tc(td(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;if(0!==e.length)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function tv(e,t,n){var r,i,s;let a=await n.verify();try{let o;if(g("string"==typeof a,e,"argument-error"),g("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o)return g("enroll"===t.type,e,"internal-error"),(await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},C(e,"POST","/v2/accounts/mfaEnrollment:start",S(e,i)))).phoneSessionInfo.sessionInfo;{g("signin"===t.type,e,"internal-error");let n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;return g(n,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:a}},C(e,"POST","/v2/accounts/mfaSignIn:start",S(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await ex(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{n._reset()}}ty.type="LOCAL",e_("rcb"),new _(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.providerId=tw.PROVIDER_ID,this.auth=ey(e)}verifyPhoneNumber(e,t){return tv(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eV._fromVerification(e,t)}static credentialFromResult(e){return tw.credentialFromTaggedObject(e)}static credentialFromError(e){return tw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?eV._fromTokenResponse(t,n):null}}tw.PROVIDER_ID="phone",tw.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends eC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eD(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eD(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eD(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tE(e){return e1(e.auth,new t_(e),e.bypassAuthState)}function tb(e){let{auth:t,user:n}=e;return g(n,t,"internal-error"),e0(n,new t_(e),e.bypassAuthState)}async function tT(e){let{auth:t,user:n}=e;return g(n,t,"internal-error"),eZ(n,new t_(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tE;case"linkViaPopup":case"linkViaRedirect":return tT;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tS=new _(2e3,1e4);class tC extends tI{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tC.currentPopupAction&&tC.currentPopupAction.cancel(),tC.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||y("Popup operations only handle one event");let e=tr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tC.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tS.get())};e()}}tC.currentPopupAction=null;let tk=new Map;class tA extends tI{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=tk.get(this.auth._key());if(!e){try{let t=await tN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}tk.set(this.auth._key(),e)}return this.bypassAuthState||tk.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tN(e,t){let n=ee("pendingRedirect",t.config.apiKey,t.name),r=Y(e._redirectPersistence);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function tR(e,t){tk.set(e._key(),t)}async function tO(e,t,n=!1){let r=ey(e),i=t?Y(t):(g(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver),s=new tA(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class tD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tx(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tx(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tP(e))}saveEventToCache(e){this.cachedEventUids.add(tP(e)),this.lastProcessedEventTime=Date.now()}}function tP(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tx({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(e,t={}){return C(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tU=/^https?/;async function tF(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tL(e);for(let e of t)try{if(function(e){let t=v(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tU.test(n))return!1;if(tM.test(e))return r===e;let i=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}(e))return}catch(e){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tV=new _(3e4,6e4);function tj(){let e=ts().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tB=null,tz=new _(5e3,15e3),t$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tq=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tH(e){let t=await (tB=tB||new Promise((t,n)=>{var r,i,s;function a(){tj(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tj(),n(p(e,"network-request-failed"))},timeout:tV.get()})}if(null===(i=null===(r=ts().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=ts().gapi)||void 0===s?void 0:s.load)a();else{let t=e_("iframefcb");return ts()[t]=()=>{gapi.load?a():n(p(e,"network-request-failed"))},ew(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>n(e))}}).catch(e=>{throw tB=null,e})),n=ts().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;g(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?E(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.Jn},a=tq.get(e.config.apiHost);a&&(r.eid=a);let o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t$,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=ts().setTimeout(()=>{r(i)},tz.get());function a(){ts().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tK={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tG{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let tW=encodeURIComponent("fac");async function tQ(e,t,n,r,a,o){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.Jn,eventId:a};if(t instanceof ez)for(let[n,r]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))l[n]=r;if(t instanceof e$){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),h=u?`#${tW}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?E(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(l).slice(1)}${h}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tX="webStorageSupport";class tJ{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tt,this._completeRedirectFn=tO,this._overrideRedirectResult=tR}async _openPopup(e,t,n,r){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||y("_initialize() not called before _openPopup()");let a=await tQ(e,t,n,v(),r);return function(e,t,n,r=500,s=600){let a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),l="",u=Object.assign(Object.assign({},tK),{width:r.toString(),height:s.toString(),top:a,left:o}),h=(0,i.z$)().toLowerCase();n&&(l=es(h)?"_blank":n),er(h)&&(t=t||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,i.z$)()){var t;return eh(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new tG(null);let d=window.open(t||"",l,c);g(d,e,"popup-blocked");try{d.focus()}catch(e){}return new tG(d)}(e,a,tr())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=await tQ(e,t,n,v(),r),ts().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(n||y("If manager is not set, promise should be"),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await tH(e),n=new tD(e);return t.register("authEvent",t=>(g(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tX,{type:tX},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[tX];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tF(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ec()||ei()||eh()}}class tY{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class tZ extends tY{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tZ(e)}_finalizeEnroll(e,t,n){return C(e,"POST","/v2/accounts/mfaEnrollment:finalize",S(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return C(e,"POST","/v2/accounts/mfaSignIn:finalize",S(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class t0{constructor(){}static assertion(e){return tZ._fromCredential(e)}}t0.FACTOR_ID="phone";class t1{static assertionForEnrollment(e,t){return t2._fromSecret(e,t)}static assertionForSignIn(e,t){return t2._fromEnrollmentId(e,t)}static async generateSecret(e){var t,n;g(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let r=await C(n=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",S(n,{idToken:e.credential,totpEnrollmentInfo:{}}));return t4._fromStartTotpMfaEnrollmentResponse(r,e.user.auth)}}t1.FACTOR_ID="totp";class t2 extends tY{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new t2(t,void 0,e)}static _fromEnrollmentId(e,t){return new t2(t,e)}async _finalizeEnroll(e,t,n){return g(void 0!==this.secret,e,"argument-error"),C(e,"POST","/v2/accounts/mfaEnrollment:finalize",S(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){g(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let n={verificationCode:this.otp};return C(e,"POST","/v2/accounts/mfaSignIn:finalize",S(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}class t4{constructor(e,t,n,r,i,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new t4(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(t9(e)||t9(t))&&(r=!0),r&&(t9(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),t9(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function t9(e){return void 0===e||(null==e?void 0:e.length)===0}var t5="@firebase/auth",t6="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let t7=(0,i.Pz)("authIdTokenMaxAge")||300,t8=null,ne=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>t7)return;let i=null==n?void 0:n.token;t8!==i&&(t8=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nt(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=(0,s.qX)(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!=t?t:{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:tJ,persistence:[ty,te,tt]}),r=(0,i.Pz)("authTokenSyncURL");if(r){let e=ne(r);(0,i.m9)(n).beforeAuthStateChanged(e,()=>e(n.currentUser)),(0,i.m9)(n).onIdTokenChanged(t=>e(t),void 0,void 0)}let a=(0,i.q4)("auth");return a&&function(e,t,n){let r=ey(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");let i=!!(null==n?void 0:n.disableWarnings),s=eI(t),{host:a,port:o}=function(e){let t=eI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:eS(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:eS(t)}}}(t),l=null===o?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${a}`),n}r="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;g(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});let l=new eg(n,i,s,{apiKey:a,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ed(r)});return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Y);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>new t3(ey(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(t5,t6,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(r)),(0,s.KN)(t5,t6,"esm2017")},6100:function(e,t,n){"use strict";n.d(t,{vr:function(){return lb},JU:function(){return oK},QT:function(){return ly},ad:function(){return oQ},pl:function(){return lw},r7:function(){return l_}});var r,i,s,a,o,l,u,h=n(5816),c=n(8463),d=n(3333),f=n(4444),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m={},g=g||{},y=p||self;function v(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function w(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function _(e,t,n){return e.call.apply(e.bind,arguments)}function E(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:E).apply(null,arguments)}function T(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function S(){this.s=this.s,this.o=this.o}S.prototype.s=!1,S.prototype.sa=function(){this.s||(this.s=!0,this.N())},S.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let C=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function k(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function A(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(v(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function N(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};y.addEventListener("test",e,t),y.removeEventListener("test",e,t)}catch(e){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}function D(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return -1!=D().indexOf(e)}function x(e){return x[" "](e),e}x[" "]=function(){};var L=P("Opera"),M=P("Trident")||P("MSIE"),U=P("Edge"),F=U||M,V=P("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),j=-1!=D().toLowerCase().indexOf("webkit")&&!P("Edge");function B(){var e=y.document;return e?e.documentMode:void 0}e:{var z,$="",q=(z=D(),V?/rv:([^\);]+)(\)|;)/.exec(z):U?/Edge\/([\d\.]+)/.exec(z):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(z):j?/WebKit\/(\S+)/.exec(z):L?/(?:Version)[ \/]?(\S+)/.exec(z):void 0);if(q&&($=q?q[1]:""),M){var H=B();if(null!=H&&H>parseFloat($)){i=String(H);break e}}i=$}var K=y.document&&M&&(B()||parseInt(i,10))||void 0;function G(e,t){if(N.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V){e:{try{x(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:W[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.$.h.call(this)}}I(G,N);var W={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function Y(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Z(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function ee(e){let t={};for(let n in e)t[n]=e[n];return t}let et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function en(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<et.length;t++)n=et[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function er(e){this.src=e,this.g={},this.h=0}function ei(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=C(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Y(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function es(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==r)return i}return -1}er.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=es(e,t,r,i);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new J(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var ea="closure_lm_"+(1e6*Math.random()|0),eo={};function el(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=w(i)?!!i.capture:!!i,o=ed(e);if(o||(e[ea]=o=new er(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return ec.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(eh(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eu(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Q])ei(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(eh(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ed(t))?(ei(n,e),0==n.h&&(n.src=null,t[ea]=null)):Y(e)}}}function eh(e){return e in eo?eo[e]:eo[e]="on"+e}function ec(e,t){if(e.fa)e=!0;else{t=new G(t,this);var n=e.listener,r=e.la||e.src;e.ia&&eu(e),e=n.call(r,t)}return e}function ed(e){return(e=e[ea])instanceof er?e:null}var ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function ep(e){return"function"==typeof e?e:(e[ef]||(e[ef]=function(t){return e.handleEvent(t)}),e[ef])}function em(){S.call(this),this.i=new er(this),this.S=this,this.J=null}function eg(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new N(t,e);else if(t instanceof N)t.target=t.target||e;else{var i=t;en(t=new N(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ey(a,r,!0,t)&&i}if(i=ey(a=t.g=e,r,!0,t)&&i,i=ey(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ey(a=t.g=n[s],r,!1,t)&&i}function ey(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&ei(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}I(em,S),em.prototype[Q]=!0,em.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=w(i)?!!i.capture:!!i,r=ep(r),t&&t[Q])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=es(a=t.g[n],r,i,s))&&(Y(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=ed(t))&&(n=t.g[n.toString()],t=-1,n&&(t=es(n,r,i,s)),(r=-1<t?n[t]:null)&&eu(r))}(this,e,t,n,r)},em.prototype.N=function(){if(em.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Y(n[r]);delete t.g[e],t.h--}}this.J=null},em.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},em.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ev=y.JSON.stringify;class ew{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}class e_{constructor(){this.h=this.g=null}add(e,t){let n=eE.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var eE=new ew(()=>new eb,e=>e.reset());class eb{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let eT,eI=!1,eS=new e_,eC=()=>{let e=y.Promise.resolve(void 0);eT=()=>{e.then(ek)}};var ek=()=>{let e;for(var t;e=null,eS.g&&(e=eS.g,eS.g=eS.g.next,eS.g||(eS.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){y.setTimeout(()=>{throw e},0)}(e)}eE.j(t),100>eE.h&&(eE.h++,t.next=eE.g,eE.g=t)}eI=!1};function eA(e,t){em.call(this),this.h=e||1,this.g=t||y,this.j=b(this.qb,this),this.l=Date.now()}function eN(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function eR(e,t,n){if("function"==typeof e)n&&(e=b(e,n));else if(e&&"function"==typeof e.handleEvent)e=b(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}I(eA,em),(u=eA.prototype).ga=!1,u.T=null,u.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),eg(this,"tick"),this.ga&&(eN(this),this.start()))}},u.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},u.N=function(){eA.$.N.call(this),eN(this),delete this.g};class eO extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eR(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eD(e){S.call(this),this.h=e,this.g={}}I(eD,S);var eP=[];function ex(e,t,n,r){Array.isArray(n)||(n&&(eP[0]=n.toString()),n=eP);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=ep(r),t&&t[Q]?t.P(n,r,w(i)?!!i.capture:!!i,s):el(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=ep(r),t&&t[Q]?t.O(n,r,w(i)?!!i.capture:!!i,s):el(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eL(e){Z(e.g,function(e,t){this.g.hasOwnProperty(t)&&eu(e)},e),e.g={}}function eM(){this.g=!0}function eU(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ev(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eD.prototype.N=function(){eD.$.N.call(this),eL(this)},eD.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eM.prototype.Ea=function(){this.g=!1},eM.prototype.info=function(){};var eF={},eV=null;function ej(){return eV=eV||new em}function eB(e){N.call(this,eF.Ta,e)}function ez(e){let t=ej();eg(t,new eB(t))}function e$(e,t){N.call(this,eF.STAT_EVENT,e),this.stat=t}function eq(e){let t=ej();eg(t,new e$(t,e))}function eH(e,t){N.call(this,eF.Ua,e),this.size=t}function eK(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}eF.Ta="serverreachability",I(eB,N),eF.STAT_EVENT="statevent",I(e$,N),eF.Ua="timingevent",I(eH,N);var eG={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eW={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eQ(){}function eX(e){return e.h||(e.h=e.i())}function eJ(){}eQ.prototype.h=null;var eY={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eZ(){N.call(this,"d")}function e0(){N.call(this,"c")}function e1(){}function e2(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new eD(this),this.P=e9,e=F?125:void 0,this.V=new eA(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new e4}function e4(){this.i=null,this.g="",this.h=!1}I(eZ,N),I(e0,N),I(e1,eQ),e1.prototype.g=function(){return new XMLHttpRequest},e1.prototype.i=function(){return{}},a=new e1;var e9=45e3,e5={},e6={};function e3(e,t,n){e.L=1,e.A=tm(th(t)),e.u=n,e.S=!0,e7(e,null)}function e7(e,t){e.G=Date.now(),tt(e),e.B=th(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),tA(n.i,"t",r),e.o=0,n=e.l.J,e.h=new e4,e.g=ny(e.l,n?t:null,!e.u),0<e.O&&(e.M=new eO(b(e.Pa,e,e.g),e.O)),ex(e.U,e.g,"readystatechange",e.nb),t=e.I?ee(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ez(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.v,e.B,e.m,e.W,e.u)}function e8(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function te(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if((i=function(e,t){var n=e.o,r=t.indexOf("\n",n);return -1==r?e6:isNaN(n=Number(t.substring(n,r)))?e5:(r+=1)+n>t.length?e6:(t=t.slice(r,r+n),e.o=r+n,t)}(e,n))==e6){4==t&&(e.s=4,eq(14),r=!1),eU(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e5){e.s=4,eq(15),eU(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else eU(e.j,e.m,i,null),ta(e,i);e8(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,eq(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nu(t),t.M=!0,eq(11))):(eU(e.j,e.m,n,"[Invalid Chunked Response]"),ts(e),ti(e))}function tt(e){e.Y=Date.now()+e.P,tn(e,e.P)}function tn(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=eK(b(e.lb,e),t)}function tr(e){e.C&&(y.clearTimeout(e.C),e.C=null)}function ti(e){0==e.l.H||e.J||nd(e.l,e)}function ts(e){tr(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,eN(e.V),eL(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ta(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||tL(n.i,e))){if(!e.K&&tL(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)nc(n),nt(n);else break e}nl(n),eq(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=eK(b(n.ib,n),6e3));if(1>=tx(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else np(n,11)}else if((e.K||n.g==e)&&nc(n),!O(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let t=o[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));let i=o[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tM(s,s.h),s.h=null))}if(r.F){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,tp(r.I,r.F,e))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(r=n).wa=ng(r,r.J?r.pa:null,r.Y),e.K){tU(r.i,e);var a=r.L;a&&e.setTimeout(a),e.C&&(tr(e),tt(e)),r.g=e}else no(r);0<n.j.length&&nr(n)}else"stop"!=o[0]&&"close"!=o[0]||np(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?np(n,7):ne(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}ez(4)}catch(e){}}function to(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(v(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(v(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(v(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(u=e2.prototype).setTimeout=function(e){this.P=e},u.nb=function(e){e=e.target;let t=this.M;t&&3==t9(e)?t.l():this.Pa(e)},u.Pa=function(e){try{if(e==this.g)e:{let h=t9(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>h)&&(3!=h||F||this.g&&(this.h.h||this.g.ja()||t5(this.g)))){this.J||4!=h||7==t||(8==t||0>=c?ez(3):ez(2)),tr(this);var n=this.g.da();this.ca=n;t:if(e8(this)){var r=t5(this.g);e="";var i=r.length,s=4==t9(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ts(this),ti(this);var a="";break t}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(o)){var u=o;break t}}u=null}if(n=u)eU(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,n);else{this.i=!1,this.s=3,eq(12),ts(this),ti(this);break e}}this.S?(te(this,h,a),F&&this.i&&3==h&&(ex(this.U,this.V,"tick",this.mb),this.V.start())):(eU(this.j,this.m,a,null),ta(this,a)),4==h&&ts(this),this.i&&!this.J&&(4==h?nd(this.l,this):(this.i=!1,tt(this)))}else(function(e){let t={};e=(e.g&&2<=t9(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(O(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,eq(12)):(this.s=0,eq(13)),ts(this),ti(this)}}}catch(e){}finally{}},u.mb=function(){if(this.g){var e=t9(this.g),t=this.g.ja();this.o<t.length&&(tr(this),te(this,e,t),this.i&&4!=e&&tt(this))}},u.cancel=function(){this.J=!0,ts(this)},u.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(ez(),eq(17)),ts(this),this.s=2,ti(this)):tn(this,this.Y-e)};var tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tu(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tu){this.h=e.h,tc(this,e.j),this.s=e.s,this.g=e.g,td(this,e.m),this.l=e.l;var t=e.i,n=new tI;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tf(this,n),this.o=e.o}else e&&(t=String(e).match(tl))?(this.h=!1,tc(this,t[1]||"",!0),this.s=tg(t[2]||""),this.g=tg(t[3]||"",!0),td(this,t[4]),this.l=tg(t[5]||"",!0),tf(this,t[6]||"",!0),this.o=tg(t[7]||"")):(this.h=!1,this.i=new tI(null,this.h))}function th(e){return new tu(e)}function tc(e,t,n){e.j=n?tg(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function td(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tf(e,t,n){var r,i;t instanceof tI?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tS(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tC(this,t),tA(this,n,e))},r)),r.j=i):(n||(t=ty(t,tb)),e.i=new tI(t,e.h))}function tp(e,t,n){e.i.set(t,n)}function tm(e){return tp(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tg(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ty(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tv),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tv(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tu.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ty(t,tw,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ty(t,tw,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ty(n,"/"==n.charAt(0)?tE:t_,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ty(n,tT)),e.join("")};var tw=/[#\/\?@]/g,t_=/[#\?:]/g,tE=/[#\?]/g,tb=/[#\?@]/g,tT=/#/g;function tI(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tS(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tC(e,t){tS(e),t=tN(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tk(e,t){return tS(e),t=tN(e,t),e.g.has(t)}function tA(e,t,n){tC(e,t),0<n.length&&(e.i=null,e.g.set(tN(e,t),k(n)),e.h+=n.length)}function tN(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(u=tI.prototype).add=function(e,t){tS(this),this.i=null,e=tN(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},u.forEach=function(e,t){tS(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},u.ta=function(){tS(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},u.Z=function(e){tS(this);let t=[];if("string"==typeof e)tk(this,e)&&(t=t.concat(this.g.get(tN(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},u.set=function(e,t){return tS(this),this.i=null,tk(this,e=tN(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},u.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},u.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};var tR=class{constructor(e,t){this.g=e,this.map=t}};function tO(e){this.l=e||tD,e=y.PerformanceNavigationTiming?0<(e=y.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(y.g&&y.g.Ka&&y.g.Ka()&&y.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tD=10;function tP(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tx(e){return e.h?1:e.g?e.g.size:0}function tL(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tM(e,t){e.g?e.g.add(t):e.h=t}function tU(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tF(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return k(e.i)}tO.prototype.cancel=function(){if(this.i=tF(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tV=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function tj(){this.g=new tV}function tB(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tz(e){this.l=e.ec||null,this.j=e.ob||!1}function t$(e,t){em.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=tq,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}I(tz,eQ),tz.prototype.g=function(){return new t$(this.l,this.j)},tz.prototype.i=(r={},function(){return r}),I(t$,em);var tq=0;function tH(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tK(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tG(e)}function tG(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(u=t$.prototype).open=function(e,t){if(this.readyState!=tq)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tG(this)},u.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},u.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tK(this)),this.readyState=tq},u.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tG(this)),this.g&&(this.readyState=3,tG(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==y.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tH(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},u.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tK(this):tG(this),3==this.readyState&&tH(this)}},u.Za=function(e){this.g&&(this.response=this.responseText=e,tK(this))},u.Ya=function(e){this.g&&(this.response=e,tK(this))},u.ka=function(){this.g&&tK(this)},u.setRequestHeader=function(e,t){this.v.append(e,t)},u.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},u.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(t$.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tW=y.JSON.parse;function tQ(e){em.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tX,this.L=this.M=!1}I(tQ,em);var tX="",tJ=/^https?$/i,tY=["POST","PUT"];function tZ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t0(e),t2(e)}function t0(e){e.F||(e.F=!0,eg(e,"complete"),eg(e,"error"))}function t1(e){if(e.h&&void 0!==g&&(!e.C[1]||4!=t9(e)||2!=e.da())){if(e.v&&4==t9(e))eR(e.La,0,e);else if(eg(e,"readystatechange"),4==t9(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===a){var i=String(e.I).match(tl)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),n=!tJ.test(i?i.toLowerCase():"")}t=n}if(t)eg(e,"complete"),eg(e,"success");else{e.m=6;try{var s=2<t9(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",t0(e)}}finally{t2(e)}}}}function t2(e,t){if(e.g){t4(e);let n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||eg(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function t4(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function t9(e){return e.g?e.g.readyState:0}function t5(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tX:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function t6(e){let t="";return Z(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function t3(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=t6(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tp(e,t,n))}function t7(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function t8(e){this.Ga=0,this.j=[],this.l=new eM,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=t7("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=t7("baseRetryDelayMs",5e3,e),this.hb=t7("retryDelaySeedMs",1e4,e),this.eb=t7("forwardChannelMaxRetries",2,e),this.xa=t7("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tO(e&&e.concurrentRequestLimit),this.Ja=new tj,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ne(e){if(nn(e),3==e.H){var t=e.W++,n=th(e.I);if(tp(n,"SID",e.K),tp(n,"RID",t),tp(n,"TYPE","terminate"),ns(e,n),(t=new e2(e,e.l,t)).L=2,t.A=tm(th(n)),n=!1,y.navigator&&y.navigator.sendBeacon)try{n=y.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&y.Image&&((new Image).src=t.A,n=!0),n||(t.g=ny(t.l,null),t.g.ha(t.A)),t.G=Date.now(),tt(t)}nm(e)}function nt(e){e.g&&(nu(e),e.g.cancel(),e.g=null)}function nn(e){nt(e),e.u&&(y.clearTimeout(e.u),e.u=null),nc(e),e.i.cancel(),e.m&&("number"==typeof e.m&&y.clearTimeout(e.m),e.m=null)}function nr(e){if(!tP(e.i)&&!e.m){e.m=!0;var t=e.Na;eT||eC(),eI||(eT(),eI=!0),eS.add(t,e),e.C=0}}function ni(e,t){var n;n=t?t.m:e.W++;let r=th(e.I);tp(r,"SID",e.K),tp(r,"RID",n),tp(r,"AID",e.V),ns(e,r),e.o&&e.s&&t3(r,e.o,e.s),n=new e2(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=na(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tM(e.i,n),e3(n,r,t)}function ns(e,t){e.na&&Z(e.na,function(e,n){tp(t,n,e)}),e.h&&to({},function(e,n){tp(t,n,e)})}function na(e,t,n){n=Math.min(e.j.length,n);var r=e.h?b(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g,o=i[a].map;if(0>(n-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{to(e,function(e,n){let i=e;w(e)&&(i=ev(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function no(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;eT||eC(),eI||(eT(),eI=!0),eS.add(t,e),e.A=0}}function nl(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=eK(b(e.Ma,e),nf(e,e.A)),e.A++,!0)}function nu(e){null!=e.B&&(y.clearTimeout(e.B),e.B=null)}function nh(e){e.g=new e2(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=th(e.wa);tp(t,"RID","rpc"),tp(t,"SID",e.K),tp(t,"AID",e.V),tp(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&tp(t,"TO",e.qa),tp(t,"TYPE","xmlhttp"),ns(e,t),e.o&&e.s&&t3(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=tm(th(t)),n.u=null,n.S=!0,e7(n,e)}function nc(e){null!=e.v&&(y.clearTimeout(e.v),e.v=null)}function nd(e,t){var n=null;if(e.g==t){nc(e),nu(e),e.g=null;var r=2}else{if(!tL(e.i,t))return;n=t.F,tU(e.i,t),r=1}if(0!=e.H){if(t.i){if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i,s=e.C;eg(r=ej(),new eH(r,n)),nr(e)}else no(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==r&&(i=t,!(tx(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=eK(b(e.Na,e,i),nf(e,e.C)),e.C++,!0)))||2==r&&nl(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),s){case 1:np(e,5);break;case 4:np(e,10);break;case 3:np(e,6);break;default:np(e,2)}}}function nf(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function np(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=b(e.pb,e);n||(n=new tu("//www.google.com/images/cleardot.gif"),y.location&&"http"==y.location.protocol||tc(n,"https"),tm(n)),function(e,t){let n=new eM;if(y.Image){let r=new Image;r.onload=T(tB,n,r,"TestLoadImage: loaded",!0,t),r.onerror=T(tB,n,r,"TestLoadImage: error",!1,t),r.onabort=T(tB,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=T(tB,n,r,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else eq(2);e.H=0,e.h&&e.h.za(t),nm(e),nn(e)}function nm(e){if(e.H=0,e.ma=[],e.h){let t=tF(e.i);(0!=t.length||0!=e.j.length)&&(A(e.ma,t),A(e.ma,e.j),e.i.i.length=0,k(e.j),e.j.length=0),e.h.ya()}}function ng(e,t,n){var r=n instanceof tu?th(n):new tu(n);if(""!=r.g)t&&(r.g=t+"."+r.g),td(r,r.m);else{var i=y.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new tu(null);r&&tc(s,r),t&&(s.g=t),i&&td(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&tp(r,n,t),tp(r,"VER",e.ra),ns(e,r),r}function ny(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tQ(e.Ha&&!e.va?new tz({ob:n}):e.va)).Oa(e.J),t}function nv(){}function nw(){if(M&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function n_(e,t){em.call(this),this.g=new t8(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nT(this)}function nE(e){eZ.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nb(){e0.call(this),this.status=1}function nT(e){this.g=e}function nI(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nS(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[3]+3250441966&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[4]+4118548399&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[7]+4249261313&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[8]+1770035416&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[11]+2304563134&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[12]+1804603682&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[15]+1236535329&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^s)+r[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[11]+1839030562&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[7]+4139469664&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[3]+3572445317&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[15]+530742520&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[2]+3299628645&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function nC(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(u=tQ.prototype).Oa=function(e){this.M=e},u.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?eX(this.u):eX(a),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){tZ(this,e);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())n.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[s,a]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=y.FormData&&e instanceof y.FormData,!(0<=C(tY,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;t4(this),0<this.B&&((this.L=(s=this.g,M&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=eR(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){tZ(this,e)}},u.ua=function(){void 0!==g&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eg(this,"timeout"),this.abort(8))},u.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eg(this,"complete"),eg(this,"abort"),t2(this))},u.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t2(this,!0)),tQ.$.N.call(this)},u.La=function(){this.s||(this.G||this.v||this.l?t1(this):this.kb())},u.kb=function(){t1(this)},u.isActive=function(){return!!this.g},u.da=function(){try{return 2<t9(this)?this.g.status:-1}catch(e){return -1}},u.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},u.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tW(t)}},u.Ia=function(){return this.m},u.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(u=t8.prototype).ra=8,u.H=1,u.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new e2(this,this.l,e),s=this.s;if(this.U&&(s?en(s=ee(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=na(this,i,t),tp(n=th(this.I),"RID",e),tp(n,"CVER",22),this.F&&tp(n,"X-HTTP-Session-Id",this.F),ns(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(t6(s)))+"&"+t:this.o&&t3(n,this.o,s)),tM(this.i,i),this.bb&&tp(n,"TYPE","init"),this.P?(tp(n,"$req",t),tp(n,"SID","null"),i.aa=!0,e3(i,n,null)):e3(i,n,t),this.H=2}}else 3==this.H&&(e?ni(this,e):0==this.j.length||tP(this.i)||ni(this))}},u.Ma=function(){if(this.u=null,nh(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=eK(b(this.jb,this),e)}},u.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,eq(10),nt(this),nh(this))},u.ib=function(){null!=this.v&&(this.v=null,nt(this),nl(this),eq(19))},u.pb=function(e){e?(this.l.info("Successfully pinged google.com"),eq(2)):(this.l.info("Failed to ping google.com"),eq(1))},u.isActive=function(){return!!this.h&&this.h.isActive(this)},(u=nv.prototype).Ba=function(){},u.Aa=function(){},u.za=function(){},u.ya=function(){},u.isActive=function(){return!0},u.Va=function(){},nw.prototype.g=function(e,t){return new n_(e,t)},I(n_,em),n_.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;eq(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ng(e,null,e.Y),nr(e)},n_.prototype.close=function(){ne(this.g)},n_.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ev(e),e=n);t.j.push(new tR(t.fb++,e)),3==t.H&&nr(t)},n_.prototype.N=function(){this.g.h=null,delete this.j,ne(this.g),delete this.g,n_.$.N.call(this)},I(nE,eZ),I(nb,e0),I(nT,nv),nT.prototype.Ba=function(){eg(this.g,"a")},nT.prototype.Aa=function(e){eg(this.g,new nE(e))},nT.prototype.za=function(e){eg(this.g,new nb)},nT.prototype.ya=function(){eg(this.g,"b")},I(nI,function(){this.blockSize=-1}),nI.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},nI.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)nS(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){nS(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){nS(this,r),i=0;break}}this.h=i,this.i+=t},nI.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var nk={};function nA(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(nk,e)?nk[e]:nk[e]=new nC([0|e],0>e?-1:0):new nC([0|e],0>e?-1:0)}function nN(e){if(isNaN(e)||!isFinite(e))return nO;if(0>e)return nM(nN(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=nR;return new nC(t,0)}var nR=4294967296,nO=nA(0),nD=nA(1),nP=nA(16777216);function nx(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function nL(e){return -1==e.h}function nM(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new nC(n,~e.h).add(nD)}function nU(e,t){return e.add(nM(t))}function nF(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function nV(e,t){this.g=e,this.h=t}function nj(e,t){if(nx(t))throw Error("division by zero");if(nx(e))return new nV(nO,nO);if(nL(e))return t=nj(nM(e),t),new nV(nM(t.g),nM(t.h));if(nL(t))return t=nj(e,nM(t)),new nV(nM(t.g),t.h);if(30<e.g.length){if(nL(e)||nL(t))throw Error("slowDivide_ only works with positive integers.");for(var n=nD,r=t;0>=r.X(e);)n=nB(n),r=nB(r);var i=nz(n,1),s=nz(r,1);for(r=nz(r,2),n=nz(n,2);!nx(r);){var a=s.add(r);0>=a.X(e)&&(i=i.add(n),s=a),r=nz(r,1),n=nz(n,1)}return t=nU(e,i.R(t)),new nV(i,t)}for(i=nO;0<=e.X(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,r-48),a=(s=nN(n)).R(t);nL(a)||0<a.X(e);)n-=r,a=(s=nN(n)).R(t);nx(s)&&(s=nD),i=i.add(s),e=nU(e,a)}return new nV(i,e)}function nB(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new nC(n,e.h)}function nz(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new nC(i,e.h)}(u=nC.prototype).ea=function(){if(nL(this))return-nM(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:nR+r)*t,t*=nR}return e},u.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(nx(this))return"0";if(nL(this))return"-"+nM(this).toString(e);for(var t=nN(Math.pow(e,6)),n=this,r="";;){var i=nj(n,t).g,s=((0<(n=nU(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(nx(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},u.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},u.X=function(e){return nL(e=nU(this,e))?-1:nx(e)?0:1},u.abs=function(){return nL(this)?nM(this):this},u.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=a>>>16,s&=65535,a&=65535,n[i]=a<<16|s}return new nC(n,-2147483648&n[n.length-1]?-1:0)},u.R=function(e){if(nx(this)||nx(e))return nO;if(nL(this))return nL(e)?nM(this).R(nM(e)):nM(nM(this).R(e));if(nL(e))return nM(this.R(nM(e)));if(0>this.X(nP)&&0>e.X(nP))return nN(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,a=65535&this.D(r),o=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=a*l,nF(n,2*r+2*i),n[2*r+2*i+1]+=s*l,nF(n,2*r+2*i+1),n[2*r+2*i+1]+=a*o,nF(n,2*r+2*i+1),n[2*r+2*i+2]+=s*o,nF(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new nC(n,0)},u.gb=function(e){return nj(this,e).h},u.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new nC(n,this.h&e.h)},u.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new nC(n,this.h|e.h)},u.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new nC(n,this.h^e.h)},nw.prototype.createWebChannel=nw.prototype.g,n_.prototype.send=n_.prototype.u,n_.prototype.open=n_.prototype.m,n_.prototype.close=n_.prototype.close,eG.NO_ERROR=0,eG.TIMEOUT=8,eG.HTTP_ERROR=6,eW.COMPLETE="complete",eJ.EventType=eY,eY.OPEN="a",eY.CLOSE="b",eY.ERROR="c",eY.MESSAGE="d",em.prototype.listen=em.prototype.O,tQ.prototype.listenOnce=tQ.prototype.P,tQ.prototype.getLastError=tQ.prototype.Sa,tQ.prototype.getLastErrorCode=tQ.prototype.Ia,tQ.prototype.getStatus=tQ.prototype.da,tQ.prototype.getResponseJson=tQ.prototype.Wa,tQ.prototype.getResponseText=tQ.prototype.ja,tQ.prototype.send=tQ.prototype.ha,tQ.prototype.setWithCredentials=tQ.prototype.Oa,nI.prototype.digest=nI.prototype.l,nI.prototype.reset=nI.prototype.reset,nI.prototype.update=nI.prototype.j,nC.prototype.add=nC.prototype.add,nC.prototype.multiply=nC.prototype.R,nC.prototype.modulo=nC.prototype.gb,nC.prototype.compare=nC.prototype.X,nC.prototype.toNumber=nC.prototype.ea,nC.prototype.toString=nC.prototype.toString,nC.prototype.getBits=nC.prototype.D,nC.fromNumber=nN,nC.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return nM(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=nN(Math.pow(n,8)),i=nO,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=nN(Math.pow(n,a)),i=i.R(a).add(nN(o))):i=(i=i.R(r)).add(nN(o))}return i};var n$=m.createWebChannelTransport=function(){return new nw},nq=m.getStatEventTarget=function(){return ej()},nH=m.ErrorCode=eG,nK=m.EventType=eW,nG=m.Event=eF,nW=m.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};m.FetchXmlHttpFactory=tz;var nQ=m.WebChannel=eJ,nX=m.XhrIo=tQ,nJ=m.Md5=nI,nY=m.Integer=nC;n(3454);let nZ="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}n0.UNAUTHENTICATED=new n0(null),n0.GOOGLE_CREDENTIALS=new n0("google-credentials-uid"),n0.FIRST_PARTY=new n0("first-party-uid"),n0.MOCK_USER=new n0("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n1="10.7.0",n2=new d.Yd("@firebase/firestore");function n4(){return n2.logLevel}function n9(e,...t){if(n2.logLevel<=d.in.DEBUG){let n=t.map(n3);n2.debug(`Firestore (${n1}): ${e}`,...n)}}function n5(e,...t){if(n2.logLevel<=d.in.ERROR){let n=t.map(n3);n2.error(`Firestore (${n1}): ${e}`,...n)}}function n6(e,...t){if(n2.logLevel<=d.in.WARN){let n=t.map(n3);n2.warn(`Firestore (${n1}): ${e}`,...n)}}function n3(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n7(e="Unexpected state"){let t=`FIRESTORE (${n1}) INTERNAL ASSERTION FAILED: `+e;throw n5(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n8={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends f.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(n0.UNAUTHENTICATED))}shutdown(){}}class ri{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rs{constructor(e){this.t=e,this.currentUser=n0.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rt,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{n9("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(n9("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rt)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(n9("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||n7(),new rn(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||n7(),new n0(e)}}class ra{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=n0.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ro{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new ra(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(n0.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ru{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&n9("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,n9("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{n9("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):n9("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||n7(),this.R=e.token,new rl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function rc(e,t){return e<t?-1:e>t?1:0}function rd(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new re(n8.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new re(n8.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rf.fromMillis(Date.now())}static fromDate(e){return rf.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new rf(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?rc(this.nanoseconds,e.nanoseconds):rc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rp(e)}static min(){return new rp(new rf(0,0))}static max(){return new rp(new rf(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,n){void 0===t?t=0:t>e.length&&n7(),void 0===n?n=e.length-t:n>e.length-t&&n7(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rm.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rm?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rg extends rm{construct(e,t,n){return new rg(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new re(n8.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new rg(t)}static emptyPath(){return new rg([])}}let ry=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rv extends rm{construct(e,t,n){return new rv(e,t,n)}static isValidIdentifier(e){return ry.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rv.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rv(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new re(n8.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new re(n8.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new re(n8.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new re(n8.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rv(t)}static emptyPath(){return new rv([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.path=e}static fromPath(e){return new rw(rg.fromString(e))}static fromName(e){return new rw(rg.fromString(e).popFirst(5))}static empty(){return new rw(rg.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rg.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rg.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rw(new rg(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}r_.UNKNOWN_ID=-1;class rE{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rE(rp.min(),rw.empty(),-1)}static max(){return new rE(rp.max(),rw.empty(),-1)}}class rb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(e){if(e.code!==n8.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;n9("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&n7(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rI((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rI?t:rI.resolve(t)}catch(e){return rI.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rI.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rI.reject(t)}static resolve(e){return new rI((t,n)=>{t(e)})}static reject(e){return new rI((t,n)=>{n(e)})}static waitFor(e){return new rI((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=rI.resolve(!1);for(let n of e)t=t.next(e=>e?rI.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new rI((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new rI((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function rS(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function rk(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rN(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rR(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}rC._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,t){this.comparator=e,this.root=t||rP.EMPTY}insert(e,t){return new rO(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rP.BLACK,null,null))}remove(e){return new rO(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rP.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rD(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rD(this.root,e,this.comparator,!1)}getReverseIterator(){return new rD(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rD(this.root,e,this.comparator,!0)}}class rD{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rP{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:rP.RED,this.left=null!=r?r:rP.EMPTY,this.right=null!=i?i:rP.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new rP(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rP.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return rP.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rP.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rP.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw n7();let e=this.left.check();if(e!==this.right.check())throw n7();return e+(this.isRed()?0:1)}}rP.EMPTY=null,rP.RED=!0,rP.BLACK=!1,rP.EMPTY=new class{constructor(){this.size=0}get key(){throw n7()}get value(){throw n7()}get color(){throw n7()}get left(){throw n7()}get right(){throw n7()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rP(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.comparator=e,this.data=new rO(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rL(this.data.getIterator())}getIteratorFrom(e){return new rL(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rx)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rx(this.comparator);return t.data=e,t}}class rL{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.fields=e,e.sort(rv.comparator)}static empty(){return new rM([])}unionWith(e){let t=new rx(rv.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new rM(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rd(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e){this.binaryString=e}static fromBase64String(e){return new rF(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new rU("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new rF(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return rc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rF.EMPTY_BYTE_STRING=new rF("");let rV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rj(e){if(e||n7(),"string"==typeof e){let t=0,n=rV.exec(e);if(n||n7(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:rB(e.seconds),nanos:rB(e.nanos)}}function rB(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rz(e){return"string"==typeof e?rF.fromBase64String(e):rF.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r$(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rq(e){let t=e.mapValue.fields.__previous_value__;return r$(t)?rq(t):t}function rH(e){let t=rj(e.mapValue.fields.__local_write_time__.timestampValue);return new rf(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class rG{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rG("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rG&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rW={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rQ(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?r$(e)?4:r3(e)?9007199254740991:10:n7()}function rX(e,t){if(e===t)return!0;let n=rQ(e);if(n!==rQ(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rH(e).isEqual(rH(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rj(e.timestampValue),r=rj(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rz(e.bytesValue).isEqual(rz(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rB(e.geoPointValue.latitude)===rB(t.geoPointValue.latitude)&&rB(e.geoPointValue.longitude)===rB(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rB(e.integerValue)===rB(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=rB(e.doubleValue),r=rB(t.doubleValue);return n===r?rk(n)===rk(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return rd(e.arrayValue.values||[],t.arrayValue.values||[],rX);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rA(n)!==rA(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!rX(n[e],r[e])))return!1;return!0}(e,t);default:return n7()}}function rJ(e,t){return void 0!==(e.values||[]).find(e=>rX(e,t))}function rY(e,t){if(e===t)return 0;let n=rQ(e),r=rQ(t);if(n!==r)return rc(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return rc(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=rB(e.integerValue||e.doubleValue),r=rB(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return rZ(e.timestampValue,t.timestampValue);case 4:return rZ(rH(e),rH(t));case 5:return rc(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rz(e),r=rz(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=rc(n[e],r[e]);if(0!==t)return t}return rc(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=rc(rB(e.latitude),rB(t.latitude));return 0!==n?n:rc(rB(e.longitude),rB(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=rY(n[e],r[e]);if(t)return t}return rc(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===rW.mapValue&&t===rW.mapValue)return 0;if(e===rW.mapValue)return 1;if(t===rW.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=rc(r[e],s[e]);if(0!==t)return t;let a=rY(n[r[e]],i[s[e]]);if(0!==a)return a}return rc(r.length,s.length)}(e.mapValue,t.mapValue);default:throw n7()}}function rZ(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return rc(e,t);let n=rj(e),r=rj(t),i=rc(n.seconds,r.seconds);return 0!==i?i:rc(n.nanos,r.nanos)}function r0(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rj(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rz(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,rw.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=r0(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${r0(e.fields[i])}`;return n+"}"}(e.mapValue):n7()}function r1(e){return!!e&&"integerValue"in e}function r2(e){return!!e&&"arrayValue"in e}function r4(e){return!!e&&"nullValue"in e}function r9(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function r5(e){return!!e&&"mapValue"in e}function r6(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rN(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=r6(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=r6(e.arrayValue.values[n]);return t}return Object.assign({},e)}function r3(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(e){this.value=e}static empty(){return new r7({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!r5(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=r6(t)}setAll(e){let t=rv.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=r6(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());r5(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rX(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];r5(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(rN(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new r7(r6(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new r8(e,0,rp.min(),rp.min(),rp.min(),r7.empty(),0)}static newFoundDocument(e,t,n,r){return new r8(e,1,t,rp.min(),n,r,0)}static newNoDocument(e,t){return new r8(e,2,t,rp.min(),rp.min(),r7.empty(),0)}static newUnknownDocument(e,t){return new r8(e,3,t,rp.min(),rp.min(),r7.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(rp.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=r7.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=r7.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rp.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof r8&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r8(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.position=e,this.inclusive=t}}function it(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?rw.comparator(rw.fromName(a.referenceValue),n.key):rY(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ir(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rX(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{}class ia extends is{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ih(e,t,n):"array-contains"===t?new im(e,n):"in"===t?new ig(e,n):"not-in"===t?new iy(e,n):"array-contains-any"===t?new iv(e,n):new ia(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ic(e,n):new id(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rY(t,this.value)):null!==t&&rQ(this.value)===rQ(t)&&this.matchesComparison(rY(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return n7()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class io extends is{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new io(e,t)}matches(e){return il(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function il(e){return"and"===e.op}function iu(e){for(let t of e.filters)if(t instanceof io)return!1;return!0}class ih extends ia{constructor(e,t,n){super(e,t,n),this.key=rw.fromName(n.referenceValue)}matches(e){let t=rw.comparator(e.key,this.key);return this.matchesComparison(t)}}class ic extends ia{constructor(e,t){super(e,"in",t),this.keys=ip("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class id extends ia{constructor(e,t){super(e,"not-in",t),this.keys=ip("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ip(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>rw.fromName(e.referenceValue))}class im extends ia{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return r2(t)&&rJ(t.arrayValue,this.value)}}class ig extends ia{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rJ(this.value.arrayValue,t)}}class iy extends ia{constructor(e,t){super(e,"not-in",t)}matches(e){if(rJ(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rJ(this.value.arrayValue,t)}}class iv extends ia{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!r2(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rJ(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}function i_(e,t=null,n=[],r=[],i=null,s=null,a=null){return new iw(e,t,n,r,i,s,a)}function iE(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof ia)return t.field.canonicalString()+t.op.toString()+r0(t.value);if(iu(t)&&il(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>r0(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>r0(e)).join(",")),e.ce=t}return e.ce}function ib(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof ia?n instanceof ia&&t.op===n.op&&t.field.isEqual(n.field)&&rX(t.value,n.value):t instanceof io?n instanceof io&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void n7()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ir(e.startAt,t.startAt)&&ir(e.endAt,t.endAt)}function iT(e){return rw.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function iS(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function iC(e){if(null===e.le){let t;e.le=[];let n=new Set;for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new rx(rv.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new ii(t,r))}),n.has(rv.keyField().canonicalString())||e.le.push(new ii(rv.keyField(),r))}return e.le}function ik(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return i_(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new ii(e.field,t)});let n=e.endAt?new ie(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ie(e.startAt.position,e.startAt.inclusive):null;return i_(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,iC(e))),e.he}function iA(e,t,n){return new iI(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function iN(e,t){return ib(ik(e),ik(t))&&e.limitType===t.limitType}function iR(e){return`${iE(ik(e))}|lt:${e.limitType}`}function iO(e){var t;let n;return`Query(target=${n=(t=ik(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ia?`${t.field.canonicalString()} ${t.op} ${r0(t.value)}`:t instanceof io?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>r0(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>r0(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function iD(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rw.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of iC(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=it(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,iC(e),t))&&(!e.endAt||!!function(e,t,n){let r=it(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,iC(e),t))}function iP(e){return(t,n)=>{let r=!1;for(let i of iC(e)){let e=function(e,t,n){let r=e.field.isKeyField()?rw.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rY(r,i):n7()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return n7()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rN(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return rR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iL=new rO(rw.comparator),iM=new rO(rw.comparator);function iU(...e){let t=iM;for(let n of e)t=t.insert(n.key,n);return t}function iF(e){let t=iM;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function iV(){return new ix(e=>e.toString(),(e,t)=>e.isEqual(t))}let ij=new rO(rw.comparator),iB=new rx(rw.comparator);function iz(...e){let t=iB;for(let n of e)t=t.add(n);return t}let i$=new rx(rc);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iq(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rk(t)?"-0":t}}function iH(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iK{constructor(){this._=void 0}}function iG(e,t){return e instanceof iZ?r1(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class iW extends iK{}class iQ extends iK{constructor(e){super(),this.elements=e}}function iX(e,t){let n=i1(t);for(let t of e.elements)n.some(e=>rX(e,t))||n.push(t);return{arrayValue:{values:n}}}class iJ extends iK{constructor(e){super(),this.elements=e}}function iY(e,t){let n=i1(t);for(let t of e.elements)n=n.filter(e=>!rX(e,t));return{arrayValue:{values:n}}}class iZ extends iK{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function i0(e){return rB(e.integerValue||e.doubleValue)}function i1(e){return r2(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,t){this.field=e,this.transform=t}}class i4{constructor(e,t){this.version=e,this.transformResults=t}}class i9{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new i9}static exists(e){return new i9(void 0,e)}static updateTime(e){return new i9(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function i5(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class i6{}function i3(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ss(e.key,i9.none()):new se(e.key,e.data,i9.none());{let n=e.data,r=r7.empty(),i=new rx(rv.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new st(e.key,r,new rM(i.toArray()),i9.none())}}function i7(e,t,n,r){return e instanceof se?function(e,t,n,r){if(!i5(e.precondition,t))return n;let i=e.value.clone(),s=si(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof st?function(e,t,n,r){if(!i5(e.precondition,t))return n;let i=si(e.fieldTransforms,r,t),s=t.data;return(s.setAll(sn(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):i5(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function i8(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&rd(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof iQ&&r instanceof iQ||n instanceof iJ&&r instanceof iJ?rd(n.elements,r.elements,rX):n instanceof iZ&&r instanceof iZ?rX(n.Ie,r.Ie):n instanceof iW&&r instanceof iW)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class se extends i6{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class st extends i6{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sn(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function sr(e,t,n){var r;let i=new Map;e.length===n.length||n7();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof iQ?iX(o,l):o instanceof iJ?iY(o,l):r))}return i}function si(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof iW?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&r$(t)&&(t=rq(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof iQ?iX(e,s):e instanceof iJ?iY(e,s):function(e,t){let n=iG(e,t),r=i0(n)+i0(e.Ie);return r1(n)&&r1(e.Ie)?iH(r):iq(e.serializer,r)}(e,s))}return r}class ss extends i6{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sa extends i6{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof se?function(e,t,n){let r=e.value.clone(),i=sr(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof st?function(e,t,n){if(!i5(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=sr(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(sn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=i7(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=i7(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iV();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=i3(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(rp.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),iz())}isEqual(e){return this.batchId===e.batchId&&rd(this.mutations,e.mutations,(e,t)=>i8(e,t))&&rd(this.baseMutations,e.baseMutations,(e,t)=>i8(e,t))}}class sl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||n7();let r=ij,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new sl(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.count=e,this.unchangedNames=t}}function sc(e){if(void 0===e)return n5("GRPC error has no .code"),n8.UNKNOWN;switch(e){case o.OK:return n8.OK;case o.CANCELLED:return n8.CANCELLED;case o.UNKNOWN:return n8.UNKNOWN;case o.DEADLINE_EXCEEDED:return n8.DEADLINE_EXCEEDED;case o.RESOURCE_EXHAUSTED:return n8.RESOURCE_EXHAUSTED;case o.INTERNAL:return n8.INTERNAL;case o.UNAVAILABLE:return n8.UNAVAILABLE;case o.UNAUTHENTICATED:return n8.UNAUTHENTICATED;case o.INVALID_ARGUMENT:return n8.INVALID_ARGUMENT;case o.NOT_FOUND:return n8.NOT_FOUND;case o.ALREADY_EXISTS:return n8.ALREADY_EXISTS;case o.PERMISSION_DENIED:return n8.PERMISSION_DENIED;case o.FAILED_PRECONDITION:return n8.FAILED_PRECONDITION;case o.ABORTED:return n8.ABORTED;case o.OUT_OF_RANGE:return n8.OUT_OF_RANGE;case o.UNIMPLEMENTED:return n8.UNIMPLEMENTED;case o.DATA_LOSS:return n8.DATA_LOSS;default:return n7()}}(l=o||(o={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sd=new nY([4294967295,4294967295],0);function sf(e){let t=(new TextEncoder).encode(e),n=new nJ;return n.update(t),new Uint8Array(n.digest())}function sp(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new nY([n,r],0),new nY([i,s],0)]}class sm{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new sg(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new sg(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new sg(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=nY.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(nY.fromNumber(n)));return 1===r.compare(sd)&&(r=new nY([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=sp(sf(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);if(!this.Ae(r))return!1}return!0}static create(e,t,n){let r=new sm(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;let[t,n]=sp(sf(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);this.Re(r)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class sg extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,sv.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new sy(rp.min(),r,new rO(rc),iL,iz())}}class sv{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new sv(n,t,iz(),iz(),iz())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class s_{constructor(e,t){this.targetId=e,this.fe=t}}class sE{constructor(e,t,n=rF.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class sb{constructor(){this.ge=0,this.pe=sS(),this.ye=rF.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=iz(),t=iz(),n=iz();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:n7()}}),new sv(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=sS()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||n7()}Be(){this.Se=!0,this.we=!0}}class sT{constructor(e){this.Le=e,this.ke=new Map,this.qe=iL,this.Qe=sI(),this.Ke=new rO(rc)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:n7()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){let i=r.target;if(iT(i)){if(0===n){let e=new rw(i.path);this.We(t,e,r8.newNoDocument(e,rp.min()))}else 1===n||n7()}else{let r=this.Ze(t);if(r!==n){let n=this.Xe(e),i=n?this.et(n,e,r):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let r=e.fe.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=rz(i).toUint8Array()}catch(e){if(e instanceof rU)return n6("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new sm(t,s,a)}catch(e){return n6(e instanceof sg?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)}),r}it(e){let t=new Map;this.ke.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&iT(i.target)){let t=new rw(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,r8.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}});let n=iz();this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let r=new sy(e,t,this.Ke,this.qe,n);return this.qe=iL,this.Qe=sI(),this.Ke=new rO(rc),r}Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new sb,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new rx(rc),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||n9("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new sb),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function sI(){return new rO(rw.comparator)}function sS(){return new rO(rw.comparator)}let sC={asc:"ASCENDING",desc:"DESCENDING"},sk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sA={and:"AND",or:"OR"};class sN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sR(e,t){return e.useProto3Json||null==t?t:{value:t}}function sO(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sD(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sP(e){return e||n7(),rp.fromTimestamp(function(e){let t=rj(e);return new rf(t.seconds,t.nanos)}(e))}function sx(e,t){return new rg(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function sL(e){let t=rg.fromString(e);return sq(t)||n7(),t}function sM(e,t){return sx(e.databaseId,t.path)}function sU(e,t){let n=sL(t);if(n.get(1)!==e.databaseId.projectId)throw new re(n8.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new re(n8.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rw(sj(n))}function sF(e,t){return sx(e.databaseId,t)}function sV(e){return new rg(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sj(e){return e.length>4&&"documents"===e.get(4)||n7(),e.popFirst(5)}function sB(e,t,n){return{name:sM(e,t),fields:n.value.mapValue.fields}}function sz(e){return{fieldPath:e.canonicalString()}}function s$(e){return rv.fromServerFormat(e.fieldPath)}function sq(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(e,t,n,r,i=rp.min(),s=rp.min(),a=rF.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new sH(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sH(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sH(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sH(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sK{constructor(e){this.ut=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(rB(e.integerValue));else if("doubleValue"in e){let n=rB(e.doubleValue);isNaN(n)?this.Tt(t,13):(this.Tt(t,15),rk(n)?t.Et(0):t.Et(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Tt(t,20),"string"==typeof n?t.dt(n):(t.dt(`${n.seconds||""}`),t.Et(n.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(rz(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Tt(t,45),t.Et(n.latitude||0),t.Et(n.longitude||0)}else"mapValue"in e?r3(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):n7()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let n=e.fields||{};for(let e of(this.Tt(t,55),Object.keys(n)))this.At(e,t),this.Pt(n[e],t)}yt(e,t){let n=e.values||[];for(let e of(this.Tt(t,50),n))this.Pt(e,t)}ft(e,t){this.Tt(t,37),rw.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}sG.St=new sG;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sW{constructor(){this.on=new sQ}addToCollectionParentIndex(e,t){return this.on.add(t),rI.resolve()}getCollectionParents(e,t){return rI.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return rI.resolve()}deleteFieldIndex(e,t){return rI.resolve()}deleteAllFieldIndexes(e){return rI.resolve()}createTargetIndexes(e,t){return rI.resolve()}getDocumentsMatchingTarget(e,t){return rI.resolve(null)}getIndexType(e,t){return rI.resolve(0)}getFieldIndexes(e,t){return rI.resolve([])}getNextCollectionGroupToUpdate(e){return rI.resolve(null)}getMinOffset(e,t){return rI.resolve(rE.min())}getMinOffsetFromCollectionGroup(e,t){return rI.resolve(rE.min())}updateCollectionGroup(e,t,n){return rI.resolve()}updateIndexEntries(e,t){return rI.resolve()}}class sQ{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new rx(rg.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new rx(rg.comparator)).toArray()}}new Uint8Array(0);class sX{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new sX(e,sX.DEFAULT_COLLECTION_PERCENTILE,sX.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sX.DEFAULT_COLLECTION_PERCENTILE=10,sX.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sX.DEFAULT=new sX(41943040,sX.DEFAULT_COLLECTION_PERCENTILE,sX.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sX.DISABLED=new sX(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sJ{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new sJ(0)}static Nn(){return new sJ(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sY{constructor(){this.changes=new ix(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,r8.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rI.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&i7(n.mutation,e,rM.empty(),rf.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,iz()).next(()=>t))}getLocalViewOfDocuments(e,t,n=iz()){let r=iV();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=iU();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=iV();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,iz()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=iL,s=iV(),a=iV();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof st)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),i7(a.mutation,t,a.mutation.getFieldMask(),rf.now())):s.set(t.key,rM.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new sZ(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=iV(),r=new rO((e,t)=>e-t),i=iz();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||rM.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||iz()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=iV();l.forEach(e=>{if(!i.has(e)){let r=i3(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return rI.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return rw.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):rI.resolve(iV()),a=-1,o=i;return s.next(t=>rI.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?rI.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,iz())).next(e=>({batchId:a,changes:iF(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rw(t)).next(e=>{let t=iU();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=iU();return this.indexManager.getCollectionParents(e,i).next(a=>rI.forEach(a,a=>{let o=new iI(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,r8.newInvalidDocument(r)))});let n=iU();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&i7(s.mutation,r,rM.empty(),rf.now()),iD(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return rI.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,{id:t.id,version:t.version,createTime:sP(t.createTime)}),rI.resolve()}getNamedQuery(e,t){return rI.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=sL(e);return 4===t.length?rg.emptyPath():sj(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||n7();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=s$(e.unaryFilter.field);return ia.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=s$(e.unaryFilter.field);return ia.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=s$(e.unaryFilter.field);return ia.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=s$(e.unaryFilter.field);return ia.create(i,"!=",{nullValue:"NULL_VALUE"});default:return n7()}}(t):void 0!==t.fieldFilter?ia.create(s$(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return n7()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?io.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return n7()}}(t.compositeFilter.op)):n7()}(e);return n instanceof io&&iu(t=n)&&il(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new ii(s$(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new ie(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new ie(e.values||[],t)}(i.endAt)),new iI(r,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?iA(t,t.limit,"L"):t}(t.bundledQuery),readTime:sP(t.readTime)}),rI.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.overlays=new rO(rw.comparator),this.lr=new Map}getOverlay(e,t){return rI.resolve(this.overlays.get(t))}getOverlays(e,t){let n=iV();return rI.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.lt(e,t,r)}),rI.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.lr.delete(n)),rI.resolve()}getOverlaysForCollection(e,t,n){let r=iV(),i=t.length+1,s=new rw(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return rI.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new rO((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=iV(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=iV(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return rI.resolve(a)}lt(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new su(t,n));let i=this.lr.get(t);void 0===i&&(i=iz(),this.lr.set(t,i)),this.lr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(){this.hr=new rx(s9.Pr),this.Ir=new rx(s9.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){let n=new s9(e,t);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.dr(new s9(e,t))}Ar(e,t){e.forEach(e=>this.removeReference(e,t))}Rr(e){let t=new rw(new rg([])),n=new s9(t,e),r=new s9(t,e+1),i=[];return this.Ir.forEachInRange([n,r],e=>{this.dr(e),i.push(e.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){let t=new rw(new rg([])),n=new s9(t,e),r=new s9(t,e+1),i=iz();return this.Ir.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new s9(e,0),n=this.hr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class s9{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return rw.comparator(e.key,t.key)||rc(e.gr,t.gr)}static Tr(e,t){return rc(e.gr,t.gr)||rw.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new rx(s9.Pr)}checkEmpty(e){return rI.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new so(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.yr=this.yr.add(new s9(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rI.resolve(s)}lookupMutationBatch(e,t){return rI.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Sr(t+1),r=n<0?0:n;return rI.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return rI.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return rI.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new s9(t,0),r=new s9(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],e=>{let t=this.wr(e.gr);i.push(t)}),rI.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rx(rc);return t.forEach(e=>{let t=new s9(e,0),r=new s9(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,r],e=>{n=n.add(e.gr)})}),rI.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;rw.isDocumentKey(i)||(i=i.child(""));let s=new s9(new rw(i),0),a=new rx(rc);return this.yr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.gr)),!0)},s),rI.resolve(this.br(a))}br(e){let t=[];return e.forEach(e=>{let n=this.wr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Dr(t.batchId,"removed")||n7(),this.mutationQueue.shift();let n=this.yr;return rI.forEach(t.mutations,r=>{let i=new s9(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=n})}Fn(e){}containsKey(e,t){let n=new s9(t,0),r=this.yr.firstAfterOrEqual(n);return rI.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,rI.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){let t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e){this.Cr=e,this.docs=new rO(rw.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rI.resolve(n?n.document.mutableCopy():r8.newInvalidDocument(t))}getEntries(e,t){let n=iL;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():r8.newInvalidDocument(e))}),rI.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=iL,s=t.path,a=new rw(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=rw.comparator(e.documentKey,t.documentKey))?n:rc(e.largestBatchId,t.largestBatchId)}(new rE(a.readTime,a.key,-1),n)||(r.has(a.key)||iD(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return rI.resolve(i)}getAllFromCollectionGroup(e,t,n,r){n7()}vr(e,t){return rI.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new s3(this)}getSize(e){return rI.resolve(this.size)}}class s3 extends sY{constructor(e){super(),this._r=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this._r.addEntry(e,r)):this._r.removeEntry(n)}),rI.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(e){this.persistence=e,this.Fr=new ix(e=>iE(e),ib),this.lastRemoteSnapshotVersion=rp.min(),this.highestTargetId=0,this.Mr=0,this.Or=new s4,this.targetCount=0,this.Nr=sJ.On()}forEachTarget(e,t){return this.Fr.forEach((e,n)=>t(n)),rI.resolve()}getLastRemoteSnapshotVersion(e){return rI.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rI.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),rI.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Mr&&(this.Mr=t),rI.resolve()}kn(e){this.Fr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Nr=new sJ(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,rI.resolve()}updateTargetData(e,t){return this.kn(t),rI.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,rI.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),rI.waitFor(i).next(()=>r)}getTargetCount(e){return rI.resolve(this.targetCount)}getTargetData(e,t){let n=this.Fr.get(t)||null;return rI.resolve(n)}addMatchingKeys(e,t,n){return this.Or.Er(t,n),rI.resolve()}removeMatchingKeys(e,t,n){this.Or.Ar(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),rI.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),rI.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Or.mr(t);return rI.resolve(n)}containsKey(e,t){return rI.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e,t){this.Br={},this.overlays={},this.Lr=new rC(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new s7(this),this.indexManager=new sW,this.remoteDocumentCache=new s6(e=>this.referenceDelegate.Qr(e)),this.serializer=new sK(t),this.Kr=new s1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new s5(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,n){n9("MemoryPersistence","Starting transaction:",e);let r=new ae(this.Lr.next());return this.referenceDelegate.$r(),n(r).next(e=>this.referenceDelegate.Ur(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Wr(e,t){return rI.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)))}}class ae extends rb{constructor(e){super(),this.currentSequenceNumber=e}}class at{constructor(e){this.persistence=e,this.Gr=new s4,this.zr=null}static jr(e){return new at(e)}get Hr(){if(this.zr)return this.zr;throw n7()}addReference(e,t,n){return this.Gr.addReference(n,t),this.Hr.delete(n.toString()),rI.resolve()}removeReference(e,t,n){return this.Gr.removeReference(n,t),this.Hr.add(n.toString()),rI.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),rI.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(e=>this.Hr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Hr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rI.forEach(this.Hr,n=>{let r=rw.fromPath(n);return this.Jr(e,r).next(e=>{e||t.removeEntry(r,rp.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return rI.or([()=>rI.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ki=n,this.qi=r}static Qi(e,t){let n=iz(),r=iz();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new an(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.zi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ji(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new ar;return this.Hi(e,t,n).next(r=>{if(i.result=r,this.$i)return this.Ji(e,t,n,r.size)})}).next(()=>i.result)}Ji(e,t,n,r){return n.documentReadCount<this.Ui?(n4()<=d.in.DEBUG&&n9("QueryEngine","SDK will not create cache indexes for query:",iO(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),rI.resolve()):(n4()<=d.in.DEBUG&&n9("QueryEngine","Query:",iO(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(n4()<=d.in.DEBUG&&n9("QueryEngine","The SDK decides to create cache indexes for query:",iO(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ik(t))):rI.resolve())}zi(e,t){if(iS(t))return rI.resolve(null);let n=ik(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=ik(t=iA(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=iz(...r);return this.Gi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Yi(t,r);return this.Zi(t,s,i,n.readTime)?this.zi(e,iA(t,null,"F")):this.Xi(e,s,t,n)}))})))}ji(e,t,n,r){return iS(t)||r.isEqual(rp.min())?rI.resolve(null):this.Gi.getDocuments(e,n).next(i=>{let s=this.Yi(t,i);return this.Zi(t,s,n,r)?rI.resolve(null):(n4()<=d.in.DEBUG&&n9("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),iO(t)),this.Xi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new rE(rp.fromTimestamp(1e9===r?new rf(n+1,0):new rf(n,r)),rw.empty(),-1)}(r,0)).next(e=>e))})}Yi(e,t){let n=new rx(iP(e));return t.forEach((t,r)=>{iD(e,r)&&(n=n.add(r))}),n}Zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,t,n){return n4()<=d.in.DEBUG&&n9("QueryEngine","Using full collection scan to execute query:",iO(t)),this.Gi.getDocumentsMatchingQuery(e,t,rE.min(),n)}Xi(e,t,n,r){return this.Gi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,n,r){this.persistence=e,this.es=t,this.serializer=r,this.ts=new rO(rc),this.ns=new ix(e=>iE(e),ib),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(n)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s0(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}async function aa(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.os(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=iz();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({_s:e,removedBatchIds:i,addedBatchIds:s}))})})}function ao(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}async function al(e,t,n){let r=e.ts.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!rS(e))throw e;n9("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ts=e.ts.remove(t),e.ns.delete(r.target)}function au(e,t,n){let r=rp.min(),i=iz();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.ns.get(n);return void 0!==r?rI.resolve(e.ts.get(r)):e.qr.getTargetData(t,n)})(e,s,ik(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.es.getDocumentsMatchingQuery(s,t,n?r:rp.min(),n?i:iz())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.rs.get(r)||rp.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.rs.set(r,s),{documents:n,ls:i}}))}class ah{constructor(){this.activeTargetIds=i$}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class ac{constructor(){this.eo=new ah,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,n){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new ah,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){for(let e of(n9("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ao))e(0)}_o(){for(let e of(n9("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ao))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ap=null;function am(){return null===ap?ap=268435456+Math.round(2147483648*Math.random()):ap++,"0x"+ap.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ag={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let av="WebChannelConnection";class aw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=t+"://"+e.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){return!1}wo(e,t,n,r,i){let s=am(),a=this.So(e,t);n9("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(o,r,i),this.Do(e,a,o,n).then(t=>(n9("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw n6("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Co(e,t,n,r,i,s){return this.wo(e,t,n,r,i)}bo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+n1}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}So(e,t){let n=ag[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,n,r){let i=am();return new Promise((s,a)=>{let o=new nX;o.setWithCredentials(!0),o.listenOnce(nK.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case nH.NO_ERROR:let t=o.getResponseJson();n9(av,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case nH.TIMEOUT:n9(av,`RPC '${e}' ${i} timed out`),a(new re(n8.DEADLINE_EXCEEDED,"Request time out"));break;case nH.HTTP_ERROR:let n=o.getStatus();if(n9(av,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(n8).indexOf(t)>=0?t:n8.UNKNOWN}(t.status);a(new re(e,t.message))}else a(new re(n8.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new re(n8.UNAVAILABLE,"Connection failed."));break;default:n7()}}finally{n9(av,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);n9(av,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}vo(e,t,n){let r=am(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=n$(),a=nq(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=i.join("");n9(av,`Creating RPC '${e}' stream ${r}: ${h}`,l);let c=s.createWebChannel(h,l),d=!1,f=!1,p=new ay({co:t=>{f?n9(av,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(n9(av,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),n9(av,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},lo:()=>c.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(c,nQ.EventType.OPEN,()=>{f||n9(av,`RPC '${e}' stream ${r} transport opened.`)}),m(c,nQ.EventType.CLOSE,()=>{f||(f=!0,n9(av,`RPC '${e}' stream ${r} transport closed`),p.Ro())}),m(c,nQ.EventType.ERROR,t=>{f||(f=!0,n6(av,`RPC '${e}' stream ${r} transport errored:`,t),p.Ro(new re(n8.UNAVAILABLE,"The operation could not be completed")))}),m(c,nQ.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||n7();let s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){n9(av,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=o[e];if(void 0!==t)return sc(t)}(t),i=s.message;void 0===n&&(n=n8.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.Ro(new re(n,i)),c.close()}else n9(av,`RPC '${e}' stream ${r} received:`,i),p.Vo(i)}}),m(a,nG.STAT_EVENT,t=>{t.stat===nW.PROXY?n9(av,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===nW.NOPROXY&&n9(av,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function a_(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(e){return new sN(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.Fo=n,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();let t=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-n);r>0&&n9("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t,n,r,i,s,a,o){this.si=e,this.Ko=n,this.$o=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ab(e,t)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==e?this.zo.reset():t&&t.code===n8.RESOURCE_EXHAUSTED?(n5(t.toString()),n5("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===n8.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;let e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Uo===t&&this.s_(e,n)},t=>{e(()=>{let e=new re(n8.UNKNOWN,"Fetching auth token failed: "+t.message);return this.o_(e)})})}s_(e,t){let n=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{n(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(e=>{n(()=>this.o_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return n9("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(n9("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aI extends aT{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:n7(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||n7(),rF.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||n7(),rF.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new sE(s,a,o,l&&new re(void 0===l.code?n8.UNKNOWN:sc(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=sU(e,r.document.name),s=sP(r.document.updateTime),a=r.document.createTime?sP(r.document.createTime):rp.min(),o=new r7({mapValue:{fields:r.document.fields}}),l=r8.newFoundDocument(i,s,a,o);n=new sw(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=sU(e,r.document),s=r.readTime?sP(r.readTime):rp.min(),a=r8.newNoDocument(i,s);n=new sw([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=sU(e,r.document);n=new sw([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return n7();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new sh(r,i);n=new s_(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return rp.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rp.min():t.readTime?sP(t.readTime):rp.min()}(e);return this.listener.a_(t,n)}u_(e){let t={};t.database=sV(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=iT(r)?{documents:{documents:[sF(e,r.path)]}}:{query:function(e,t){var n,r;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=sF(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=sF(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof ia?function(e){if("=="===e.op){if(r9(e.value))return{unaryFilter:{field:sz(e.field),op:"IS_NAN"}};if(r4(e.value))return{unaryFilter:{field:sz(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(r9(e.value))return{unaryFilter:{field:sz(e.field),op:"IS_NOT_NAN"}};if(r4(e.value))return{unaryFilter:{field:sz(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sz(e.field),op:sk[e.op],value:e.value}}}(t):t instanceof io?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:sA[t.op],filters:n}}}(t):n7()}(io.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:sz(e.field),direction:sC[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=sR(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=sD(e,t.resumeToken);let r=sR(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(rp.min())>0){n.readTime=sO(e,t.snapshotVersion.toTimestamp());let r=sR(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return n7()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.e_(t)}c_(e){let t={};t.database=sV(this.serializer),t.removeTarget=e,this.e_(t)}}class aS extends aT{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||n7(),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||n7(),t.map(e=>{let t;return(t=e.updateTime?sP(e.updateTime):sP(n)).isEqual(rp.min())&&(t=sP(n)),new i4(t,e.transformResults||[])})):[]),i=sP(e.commitTime);return this.listener.I_(i,r)}return e.writeResults&&0!==e.writeResults.length&&n7(),this.l_=!0,this.listener.T_()}E_(){let e={};e.database=sV(this.serializer),this.e_(e)}P_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof se)r={update:sB(e,t.key,t.value)};else if(t instanceof ss)r={delete:sM(e,t.key)};else if(t instanceof st)r={update:sB(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof sa))return n7();r={verify:sM(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof iW)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof iQ)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof iJ)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof iZ)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw n7()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:sO(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:n7()),r})(this.serializer,e))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new re(n8.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.wo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===n8.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new re(n8.UNKNOWN,e.toString())})}Co(e,t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Co(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===n8.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new re(n8.UNKNOWN,e.toString())})}terminate(){this.d_=!0}}class ak{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,"Online"===e&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(n5(t),this.f_=!1):n9("OnlineStateTracker",t)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(e=>{n.enqueueAndForget(async()=>{aU(this)&&(n9("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.C_.add(4),await aR(e),e.M_.set("Unknown"),e.C_.delete(4),await aN(e)}(this))})}),this.M_=new ak(n,r)}}async function aN(e){if(aU(e))for(let t of e.v_)await t(!0)}async function aR(e){for(let t of e.v_)await t(!1)}function aO(e,t){e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),aM(e)?aL(e):aY(e).Ho()&&aP(e,t))}function aD(e,t){let n=aY(e);e.D_.delete(t),n.Ho()&&ax(e,t),0===e.D_.size&&(n.Ho()?n.Zo():aU(e)&&e.M_.set("Unknown"))}function aP(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rp.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}aY(e).u_(t)}function ax(e,t){e.x_.Oe(t),aY(e).c_(t)}function aL(e){e.x_=new sT({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),aY(e).start(),e.M_.g_()}function aM(e){return aU(e)&&!aY(e).jo()&&e.D_.size>0}function aU(e){return 0===e.C_.size}async function aF(e){e.D_.forEach((t,n)=>{aP(e,t)})}async function aV(e,t){e.x_=void 0,aM(e)?(e.M_.w_(t),aL(e)):e.M_.set("Unknown")}async function aj(e,t,n){if(e.M_.set("Online"),t instanceof sE&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.D_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.D_.delete(r),e.x_.removeTarget(r))}(e,t)}catch(n){n9("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await aB(e,n)}else if(t instanceof sw?e.x_.$e(t):t instanceof s_?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(rp.min()))try{let t=await ao(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.x_.it(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.D_.get(r);i&&e.D_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.D_.get(t);if(!r)return;e.D_.set(t,r.withResumeToken(rF.EMPTY_BYTE_STRING,r.snapshotVersion)),ax(e,t);let i=new sH(r.target,t,n,r.sequenceNumber);aP(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){n9("RemoteStore","Failed to raise snapshot:",t),await aB(e,t)}}async function aB(e,t,n){if(!rS(t))throw t;e.C_.add(1),await aR(e),e.M_.set("Offline"),n||(n=()=>ao(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{n9("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await aN(e)})}function az(e,t){return t().catch(n=>aB(e,n,t))}async function a$(e){let t=aZ(e),n=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;aU(e)&&e.b_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.b_.length&&t.Zo();break}n=r.batchId,function(e,t){e.b_.push(t);let n=aZ(e);n.Ho()&&n.h_&&n.P_(t.mutations)}(e,r)}catch(t){await aB(e,t)}aq(e)&&aH(e)}function aq(e){return aU(e)&&!aZ(e).jo()&&e.b_.length>0}function aH(e){aZ(e).start()}async function aK(e){aZ(e).E_()}async function aG(e){let t=aZ(e);for(let n of e.b_)t.P_(n.mutations)}async function aW(e,t,n){let r=e.b_.shift(),i=sl.from(r,t,n);await az(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await a$(e)}async function aQ(e,t){t&&aZ(e).h_&&await async function(e,t){var n;if(function(e){switch(e){default:return n7();case n8.CANCELLED:case n8.UNKNOWN:case n8.DEADLINE_EXCEEDED:case n8.RESOURCE_EXHAUSTED:case n8.INTERNAL:case n8.UNAVAILABLE:case n8.UNAUTHENTICATED:return!1;case n8.INVALID_ARGUMENT:case n8.NOT_FOUND:case n8.ALREADY_EXISTS:case n8.PERMISSION_DENIED:case n8.FAILED_PRECONDITION:case n8.ABORTED:case n8.OUT_OF_RANGE:case n8.UNIMPLEMENTED:case n8.DATA_LOSS:return!0}}(n=t.code)&&n!==n8.ABORTED){let n=e.b_.shift();aZ(e).Yo(),await az(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await a$(e)}}(e,t),aq(e)&&aH(e)}async function aX(e,t){e.asyncQueue.verifyOperationInProgress(),n9("RemoteStore","RemoteStore received new credentials");let n=aU(e);e.C_.add(3),await aR(e),n&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await aN(e)}async function aJ(e,t){t?(e.C_.delete(2),await aN(e)):t||(e.C_.add(2),await aR(e),e.M_.set("Unknown"))}function aY(e){var t,n,r;return e.O_||(e.O_=(t=e.datastore,n=e.asyncQueue,r={ho:aF.bind(null,e),Io:aV.bind(null,e),a_:aj.bind(null,e)},t.A_(),new aI(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.v_.push(async t=>{t?(e.O_.Yo(),aM(e)?aL(e):e.M_.set("Unknown")):(await e.O_.stop(),e.x_=void 0)})),e.O_}function aZ(e){var t,n,r;return e.N_||(e.N_=(t=e.datastore,n=e.asyncQueue,r={ho:aK.bind(null,e),Io:aQ.bind(null,e),T_:aG.bind(null,e),I_:aW.bind(null,e)},t.A_(),new aS(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.v_.push(async t=>{t?(e.N_.Yo(),await a$(e)):(await e.N_.stop(),e.b_.length>0&&(n9("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new a0(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new re(n8.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function a1(e,t){if(n5("AsyncQueue",`${t}: ${e}`),rS(e))return new re(n8.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.comparator=e?(t,n)=>e(t,n)||rw.comparator(t.key,n.key):(e,t)=>rw.comparator(e.key,t.key),this.keyedMap=iU(),this.sortedSet=new rO(this.comparator)}static emptySet(e){return new a2(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof a2)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new a2;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(){this.B_=new rO(rw.comparator)}track(e){let t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):n7():this.B_=this.B_.insert(t,e)}L_(){let e=[];return this.B_.inorderTraversal((t,n)=>{e.push(n)}),e}}class a9{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new a9(e,t,a2.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&iN(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(){this.k_=void 0,this.listeners=[]}}class a6{constructor(){this.queries=new ix(e=>iR(e),iN),this.onlineState="Unknown",this.q_=new Set}}async function a3(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new a5),r)try{i.k_=await e.onListen(n)}catch(n){let e=a1(n,`Initialization of query '${iO(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.Q_(e.onlineState),i.k_&&t.K_(i.k_)&&ot(e)}async function a7(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function a8(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.K_(r)&&(n=!0);i.k_=r}}n&&ot(e)}function oe(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function ot(e){e.q_.forEach(e=>{e.next()})}class on{constructor(e,t,n){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new a9(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){return!e.fromCache||(!this.options.J_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}z_(e){if(e.docChanges.length>0)return!0;let t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}H_(e){e=a9.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.key=e}}class oi{constructor(e){this.key=e}}class os{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=iz(),this.mutatedKeys=iz(),this._a=iP(e),this.aa=new a2(this._a)}get ua(){return this.ia}ca(e,t){let n=t?t.la:new a4,r=t?t.aa:this.aa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=iD(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.ha(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this._a(h,o)>0||l&&0>this._a(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{aa:s,la:n,Zi:a,mutatedKeys:i}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;let s=e.la.L_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return n7()}};return n(e)-n(t)})(e.type,t.type)||this._a(e.doc,t.doc)),this.Pa(n),r=null!=r&&r;let a=t&&!r?this.Ia():[],o=0===this.oa.size&&this.current&&!r?1:0,l=o!==this.sa;return(this.sa=o,0!==s.length||l)?{snapshot:new a9(this.query,e.aa,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({aa:this.aa,la:new a4,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=e.current)}Ia(){if(!this.current)return[];let e=this.oa;this.oa=iz(),this.aa.forEach(e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))});let t=[];return e.forEach(e=>{this.oa.has(e)||t.push(new oi(e))}),this.oa.forEach(n=>{e.has(n)||t.push(new or(n))}),t}da(e){this.ia=e.ls,this.oa=iz();let t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return a9.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class oa{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oo{constructor(e){this.key=e,this.Ra=!1}}class ol{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new ix(e=>iR(e),iN),this.fa=new Map,this.ga=new Set,this.pa=new rO(rw.comparator),this.ya=new Map,this.wa=new s4,this.Sa={},this.ba=new Map,this.Da=sJ.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function ou(e,t){var n,r;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=of.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=om.bind(null,e),e.Va.a_=a8.bind(null,e.eventManager),e.Va.Fa=oe.bind(null,e.eventManager),e),o=a.ma.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Aa();else{let e=await (n=a.localStore,r=ik(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.qr.getTargetData(e,r).next(i=>i?(t=i,rI.resolve(t)):n.qr.allocateTargetId(e).next(i=>(t=new sH(r,i,"TargetPurposeListen",e.currentSequenceNumber),n.qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=n.ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.ts=n.ts.insert(e.targetId,e),n.ns.set(r,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await oh(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&aO(a.remoteStore,e)}return s}async function oh(e,t,n,r,i){e.va=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ca(n);i.Zi&&(i=await au(e.localStore,t.query,!1).then(({documents:e})=>t.view.ca(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return ob(e,t.targetId,o.Ta),o.snapshot})(e,t,n,r);let s=await au(e.localStore,t,!0),a=new os(t,s.ls),o=a.ca(s.documents),l=sv.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);ob(e,n,u.Ta);let h=new oa(t,n,a);return e.ma.set(t,h),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function oc(e,t){let n=e.ma.get(t),r=e.fa.get(n.targetId);if(r.length>1)return e.fa.set(n.targetId,r.filter(e=>!iN(e,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await al(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),aD(e.remoteStore,n.targetId),o_(e,n.targetId)}).catch(rT)):(o_(e,n.targetId),await al(e.localStore,n.targetId,!0))}async function od(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=og.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oy.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=rf.now(),s=t.reduce((e,t)=>e.add(t.key),iz());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=iL,l=iz();return e.ss.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=iG(r.transform,e||null);null!=i&&(null===n&&(n=r7.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new st(e.key,t,function e(t){let n=[];return rN(t.fields,(t,r)=>{let i=new rv([t]);if(r5(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new rM(n)}(t.value.mapValue),i9.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:iF(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Sa[i.currentUser.toKey()])||(e=new rO(rc)),e=e.insert(r,n),i.Sa[i.currentUser.toKey()]=e,await oI(i,s.changes),await a$(i.remoteStore)}catch(t){let e=a1(t,"Failed to persist write");n.reject(e)}}async function of(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.ss.newChangeBuffer({trackRemovals:!0});r=e.ts;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.qr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(rF.EMPTY_BYTE_STRING,rp.min()).withLastLimboFreeSnapshotVersion(rp.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.qr.updateTargetData(i,h))});let h=iL,c=iz();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=iz(),o=iz(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=iL;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(rp.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):n9("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{us:t,cs:o}})).next(e=>{h=e.us,c=e.cs})),!n.isEqual(rp.min())){let t=e.qr.getLastRemoteSnapshotVersion(i).next(t=>e.qr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return rI.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.ts=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.ya.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||n7(),t.addedDocuments.size>0?r.Ra=!0:t.modifiedDocuments.size>0?r.Ra||n7():t.removedDocuments.size>0&&(r.Ra||n7(),r.Ra=!1))}),await oI(e,n,t)}catch(e){await rT(e)}}function op(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ma.forEach((e,n)=>{let r=n.view.Q_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.Q_(t)&&(n=!0)}),n&&ot(r),i.length&&e.Va.a_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function om(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.ya.get(t),i=r&&r.key;if(i){let n=new rO(rw.comparator);n=n.insert(i,r8.newNoDocument(i,rp.min()));let r=iz().add(i),s=new sy(rp.min(),new Map,new rO(rc),n,r);await of(e,s),e.pa=e.pa.remove(i),e.ya.delete(t),oT(e)}else await al(e.localStore,t,!1).then(()=>o_(e,t,n)).catch(rT)}async function og(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=rI.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||n7(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=iz();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});ow(e,r,null),ov(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await oI(e,i)}catch(e){await rT(e)}}async function oy(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||n7(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});ow(e,t,n),ov(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await oI(e,i)}catch(e){await rT(e)}}function ov(e,t){(e.ba.get(t)||[]).forEach(e=>{e.resolve()}),e.ba.delete(t)}function ow(e,t,n){let r=e.Sa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Sa[e.currentUser.toKey()]=r}}function o_(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.fa.get(t)))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(t=>{e.wa.containsKey(t)||oE(e,t)})}function oE(e,t){e.ga.delete(t.path.canonicalString());let n=e.pa.get(t);null!==n&&(aD(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),oT(e))}function ob(e,t,n){for(let r of n)r instanceof or?(e.wa.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(n9("SyncEngine","New document in limbo: "+n),e.ga.add(r),oT(e))}(e,r)):r instanceof oi?(n9("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||oE(e,r.key)):n7()}function oT(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){let t=e.ga.values().next().value;e.ga.delete(t);let n=new rw(rg.fromString(t)),r=e.Da.next();e.ya.set(r,new oo(n)),e.pa=e.pa.insert(n,r),aO(e.remoteStore,new sH(ik(new iI(n.path)),r,"TargetPurposeLimboResolution",rC._e))}}async function oI(e,t,n){let r=[],i=[],s=[];e.ma.isEmpty()||(e.ma.forEach((a,o)=>{s.push(e.va(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=an.Qi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Va.a_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>rI.forEach(t,t=>rI.forEach(t.ki,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>rI.forEach(t.qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!rS(e))throw e;n9("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ts.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ts=e.ts.insert(t,i)}}}(e.localStore,i))}async function oS(e,t){if(!e.currentUser.isEqual(t)){n9("SyncEngine","User change. New user:",t.toKey());let n=await aa(e.localStore,t);e.currentUser=t,e.ba.forEach(e=>{e.forEach(e=>{e.reject(new re(n8.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.ba.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await oI(e,n._s)}}function oC(e,t){let n=e.ya.get(t);if(n&&n.Ra)return iz().add(n.key);{let n=iz(),r=e.fa.get(t);if(!r)return n;for(let t of r){let r=e.ma.get(t);n=n.unionWith(r.view.ua)}return n}}class ok{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=aE(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new as(t,new ai,e.initialUser,this.serializer)}createPersistence(e){return new s8(at.jr,this.serializer)}createSharedClientState(e){return new ac}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oA{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>op(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=oS.bind(null,this.syncEngine),await aJ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a6}createDatastore(e){let t=aE(e.databaseInfo.databaseId),n=new aw(e.databaseInfo);return new aC(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new aA(t,this.datastore,e.asyncQueue,e=>op(this.syncEngine,e,0),af.D()?new af:new ad)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new ol(e,t,n,r,i,s);return a&&(o.Ca=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){n9("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await aR(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):n5("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=n0.UNAUTHENTICATED,this.clientId=rh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{n9("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(n9("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(n8.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=a1(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function oO(e,t){e.asyncQueue.verifyOperationInProgress(),n9("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await aa(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function oD(e,t){e.asyncQueue.verifyOperationInProgress();let n=await oP(e);n9("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>aX(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>aX(t.remoteStore,n)),e._onlineComponents=t}async function oP(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){n9("FirestoreClient","Using user provided OfflineComponentProvider");try{await oO(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===n8.FAILED_PRECONDITION||t.code===n8.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;n6("Error using user provided cache. Falling back to memory cache: "+t),await oO(e,new ok)}}else n9("FirestoreClient","Using default OfflineComponentProvider"),await oO(e,new ok)}return e._offlineComponents}async function ox(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(n9("FirestoreClient","Using user provided OnlineComponentProvider"),await oD(e,e._uninitializedComponentsProvider._online)):(n9("FirestoreClient","Using default OnlineComponentProvider"),await oD(e,new oA))),e._onlineComponents}async function oL(e){let t=await ox(e),n=t.eventManager;return n.onListen=ou.bind(null,t.syncEngine),n.onUnlisten=oc.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oU=new Map;function oF(e){if(!rw.isDocumentKey(e))throw new re(n8.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oV(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":n7()}function oj(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new re(n8.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oV(e);throw new re(n8.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new re(n8.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new re(n8.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new re(n8.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oM(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new re(n8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new re(n8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new re(n8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oz{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oB({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(n8.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new re(n8.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oB(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new rr;switch(e.type){case"firstParty":return new ro(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new re(n8.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=oU.get(e);t&&(n9("ComponentProvider","Removing Datastore"),oU.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new o$(this.firestore,e,this._query)}}class oq{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oH(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oq(this.firestore,e,this._key)}}class oH extends o${constructor(e,t,n){super(e,t,new iI(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new oq(this.firestore,null,new rw(e))}withConverter(e){return new oH(this.firestore,e,this._path)}}function oK(e,t,...n){if(e=(0,f.m9)(e),1==arguments.length&&(t=rh.newId()),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){if(!n)throw new re(n8.INVALID_ARGUMENT,`Function doc() cannot be called with an empty ${t}.`)}(0,"path",t),e instanceof oz){let r=rg.fromString(t,...n);return oF(r),new oq(e,null,new rw(r))}{if(!(e instanceof oq||e instanceof oH))throw new re(n8.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(rg.fromString(t,...n));return oF(r),new oq(e.firestore,e instanceof oH?e.converter:null,new rw(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ab(this,"async_queue_retry"),this.iu=()=>{let e=a_();e&&n9("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};let e=a_();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;let t=a_();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});let t=new rt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!rS(e))throw e;n9("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){let t=this.Ja.then(()=>(this.tu=!0,e().catch(e=>{let t;throw this.eu=e,this.tu=!1,n5("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.tu=!1,e))));return this.Ja=t,t}enqueueAfterDelay(e,t,n){this.su(),this.ru.indexOf(e)>-1&&(t=0);let r=a0.createAndSchedule(this,e,t,n,e=>this.au(e));return this.Xa.push(r),r}su(){this.eu&&n7()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(let t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{for(let t of(this.Xa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Xa))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){let t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}class oW extends oz{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oG,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oJ(this),this._firestoreClient.terminate()}}function oQ(e,t){let n="object"==typeof e?e:(0,h.Mq)(),r=(0,h.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,f.P0)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=oj(e,oz))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&n6("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=n0.MOCK_USER;else{t=(0,f.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new re(n8.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new n0(s)}e._authCredentials=new ri(new rn(t,n))}}(r,...e)}return r}function oX(e){return e._firestoreClient||oJ(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oJ(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new rK(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oM(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new oR(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oY(rF.fromBase64String(e))}catch(e){throw new re(n8.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oY(rF.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oZ{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new re(n8.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rv(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(n8.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(n8.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return rc(this._lat,e._lat)||rc(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o2=/^__.*__$/;class o4{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new st(e,this.data,this.fieldMask,t,this.fieldTransforms):new se(e,this.data,t,this.fieldTransforms)}}class o9{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new st(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function o5(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw n7()}}class o6{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new o6(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:n,du:!1});return r.Au(e),r}Ru(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return ll(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(0===e.length)throw this.mu("Document fields must not be empty");if(o5(this.Iu)&&o2.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class o3{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||aE(e)}pu(e,t,n,r=!1){return new o6({Iu:e,methodName:t,gu:n,path:rv.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o7(e){let t=e._freezeSettings(),n=aE(e._databaseId);return new o3(e._databaseId,!!t.ignoreUndefinedProperties,n)}class o8 extends o0{_toFieldTransform(e){if(2!==e.Iu)throw 1===e.Iu?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof o8}}class le extends o0{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){let t=new o6({Iu:3,gu:e.settings.gu,methodName:this._methodName,du:!0},e.databaseId,e.serializer,e.ignoreUndefinedProperties),n=new iQ(this.yu.map(e=>lt(e,t)));return new i2(e.path,n)}isEqual(e){return this===e}}function lt(e,t){if(lr(e=(0,f.m9)(e)))return li("Unsupported field value:",t,e),ln(e,t);if(e instanceof o0)return function(e,t){if(!o5(t.Iu))throw t.mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.mu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&4!==t.Iu)throw t.mu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=lt(i,t.Vu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,f.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!rk(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iH(r):iq(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=rf.fromDate(e);return{timestampValue:sO(t.serializer,n)}}if(e instanceof rf){let n=new rf(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sO(t.serializer,n)}}if(e instanceof o1)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oY)return{bytesValue:sD(t.serializer,e._byteString)};if(e instanceof oq){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sx(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.mu(`Unsupported field value: ${oV(e)}`)}(e,t)}function ln(e,t){let n={};return rR(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rN(e,(e,r)=>{let i=lt(r,t.Eu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function lr(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rf||e instanceof o1||e instanceof oY||e instanceof oq||e instanceof o0)}function li(e,t,n){if(!lr(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=oV(n);throw"an object"===r?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function ls(e,t,n){if((t=(0,f.m9)(t))instanceof oZ)return t._internalPath;if("string"==typeof t)return lo(e,t);throw ll("Field path arguments must be of type string or ",e,!1,void 0,n)}let la=RegExp("[~\\*/\\[\\]]");function lo(e,t,n){if(t.search(la)>=0)throw ll(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oZ(...t.split("."))._internalPath}catch(r){throw ll(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ll(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new re(n8.INVALID_ARGUMENT,o+e+l)}function lu(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oq(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ld("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lc extends lh{data(){return super.data()}}function ld(e,t){return"string"==typeof t?lo(e,t):t instanceof oZ?t._internalPath:t._delegate._internalPath}class lf{convertValue(e,t="none"){switch(rQ(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rB(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rz(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw n7()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return rN(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new o1(rB(e.latitude),rB(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=rq(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rH(e));default:return null}}convertTimestamp(e){let t=rj(e);return new rf(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=rg.fromString(e);sq(n)||n7();let r=new rG(n.get(1),n.get(3)),i=new rw(n.popFirst(5));return r.isEqual(t)||n5(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lm extends lh{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(ld("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lg extends lm{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(e){e=oj(e,oq);let t=oj(e.firestore,oW);return(function(e,t,n={}){let r=new rt;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new oN({next:s=>{t.enqueueAndForget(()=>a7(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new re(n8.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new re(n8.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new on(new iI(n.path),s,{includeMetadataChanges:!0,J_:!0});return a3(e,a)})(await oL(e),e.asyncQueue,t,n,r)),r.promise})(oX(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),i=new lv(e);return new lm(e,i,t._key,r,new lp(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}class lv extends lf{constructor(e){super(),this.firestore=e}convertBytes(e){return new oY(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new oq(this.firestore,null,t)}}function lw(e,t,n){var r;e=oj(e,oq);let i=oj(e.firestore,oW),s=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return lE(i,[(function(e,t,n,r,i,s={}){let a,o;let l=e.pu(s.merge||s.mergeFields?2:0,t,n,i);li("Data must be an object, but it was:",l,r);let u=ln(r,l);if(s.merge)a=new rM(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=ls(t,r,n);if(!l.contains(i))throw new re(n8.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lu(e,i)||e.push(i)}a=new rM(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new o4(new r7(u),a,o)})(o7(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,i9.none())])}function l_(e,t,n,...r){e=oj(e,oq);let i=oj(e.firestore,oW),s=o7(i);return lE(i,[("string"==typeof(t=(0,f.m9)(t))||t instanceof oZ?function(e,t,n,r,i,s){let a=e.pu(1,t,n),o=[ls(t,r,n)],l=[i];if(s.length%2!=0)throw new re(n8.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(ls(t,s[e])),l.push(s[e+1]);let u=[],h=r7.empty();for(let e=o.length-1;e>=0;--e)if(!lu(u,o[e])){let t=o[e],n=l[e];n=(0,f.m9)(n);let r=a.Ru(t);if(n instanceof o8)u.push(t);else{let e=lt(n,r);null!=e&&(u.push(t),h.set(t,e))}}return new o9(h,new rM(u),a.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.pu(1,t,n);li("Data must be an object, but it was:",i,r);let s=[],a=r7.empty();return rN(r,(e,r)=>{let o=lo(t,e,n);r=(0,f.m9)(r);let l=i.Ru(o);if(r instanceof o8)s.push(o);else{let e=lt(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new o9(a,new rM(s),i.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,i9.exists(!0))])}function lE(e,t){return function(e,t){let n=new rt;return e.asyncQueue.enqueueAndForget(async()=>od(await ox(e).then(e=>e.syncEngine),t,n)),n.promise}(oX(e),t)}function lb(...e){return new le("arrayUnion",e)}new WeakMap,function(e=!0){n1=h.Jn,(0,h.Xd)(new c.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new oW(new rs(t.getProvider("auth-internal")),new ru(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new re(n8.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rG(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(nZ,"4.4.0",void 0),(0,h.KN)(nZ,"4.4.0","esm2017")}()},2920:function(e,t,n){"use strict";n.d(t,{Ix:function(){return b},Am:function(){return R}});var r=n(7294),i=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r};let s=e=>"number"==typeof e&&!isNaN(e),a=e=>"string"==typeof e,o=e=>"function"==typeof e,l=e=>a(e)||o(e)?e:null,u=e=>(0,r.isValidElement)(e)||a(e)||o(e)||s(e);function h(e){let{enter:t,exit:n,appendPosition:i=!1,collapse:s=!0,collapseDuration:a=300}=e;return function(e){let{children:o,position:l,preventExitTransition:u,done:h,nodeRef:c,isIn:d}=e,f=i?`${t}--${l}`:t,p=i?`${n}--${l}`:n,m=(0,r.useRef)(0);return(0,r.useLayoutEffect)(()=>{let e=c.current,t=f.split(" "),n=r=>{r.target===c.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===m.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,r.useEffect)(()=>{let e=c.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}(e,h,a):h()};d||(u?t():(m.current=1,e.className+=` ${p}`,e.addEventListener("animationend",t)))},[d]),r.createElement(r.Fragment,null,o)}}function c(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let d={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},f=e=>{let{theme:t,type:n,...i}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...i})},p={info:function(e){return r.createElement(f,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(f,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(f,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(f,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function m(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function y(e){let{closeToast:t,theme:n,ariaLabel:i="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":i},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function v(e){let{delay:t,isRunning:n,closeToast:s,type:a="default",hide:l,className:u,style:h,controlledProgress:c,progress:d,rtl:f,isIn:p,theme:m}=e,g=l||c&&0===d,y={...h,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};c&&(y.transform=`scaleX(${d})`);let v=i("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":f}),w=o(u)?u({rtl:f,type:a,defaultClassName:v}):i(v,u);return r.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:w,style:y,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{p&&s()}})}let w=e=>{let{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:a}=function(e){let[t,n]=(0,r.useState)(!1),[i,s]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=(0,r.useRef)(e),{autoClose:h,pauseOnHover:c,closeToast:d,onClick:f,closeOnClick:p}=e;function y(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",b),document.addEventListener("touchmove",E),document.addEventListener("touchend",b);let n=a.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=m(t.nativeEvent),l.y=g(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(t){if(l.boundingRect){let{top:n,bottom:r,left:i,right:s}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=i&&l.x<=s&&l.y>=n&&l.y<=r?_():w()}}function w(){n(!0)}function _(){n(!1)}function E(n){let r=a.current;l.canDrag&&r&&(l.didMove=!0,t&&_(),l.x=m(n),l.y=g(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),r.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,r.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function b(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",b);let t=a.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return s(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,r.useEffect)(()=>{u.current=e}),(0,r.useEffect)(()=>(a.current&&a.current.addEventListener("d",w,{once:!0}),o(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),()=>{let e=u.current;o(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}),[]),(0,r.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",w),window.addEventListener("blur",_)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",_))}),[e.pauseOnFocusLoss]);let T={onMouseDown:y,onTouchStart:y,onMouseUp:v,onTouchEnd:v};return h&&c&&(T.onMouseEnter=_,T.onMouseLeave=w),p&&(T.onClick=e=>{f&&f(e),l.canCloseOnClick&&d()}),{playToast:w,pauseToast:_,isRunning:t,preventExitTransition:i,toastRef:a,eventHandlers:T}}(e),{closeButton:l,children:u,autoClose:h,onClick:c,type:d,hideProgressBar:f,closeToast:p,transition:w,position:_,className:E,style:b,bodyClassName:T,bodyStyle:I,progressClassName:S,progressStyle:C,updateId:k,role:A,progress:N,rtl:R,toastId:O,deleteToast:D,isIn:P,isLoading:x,iconOut:L,closeOnClick:M,theme:U}=e,F=i("Toastify__toast",`Toastify__toast-theme--${U}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":M}),V=o(E)?E({rtl:R,position:_,type:d,defaultClassName:F}):i(F,E),j=!!N||!h,B={closeToast:p,type:d,theme:U},z=null;return!1===l||(z=o(l)?l(B):(0,r.isValidElement)(l)?(0,r.cloneElement)(l,B):y(B)),r.createElement(w,{isIn:P,done:D,position:_,preventExitTransition:n,nodeRef:s},r.createElement("div",{id:O,onClick:c,className:V,...a,style:b,ref:s},r.createElement("div",{...P&&{role:A},className:o(T)?T({type:d}):i("Toastify__toast-body",T),style:I},null!=L&&r.createElement("div",{className:i("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!x})},L),r.createElement("div",null,u)),z,r.createElement(v,{...k&&!j?{key:`pb-${k}`}:{},rtl:R,theme:U,delay:h,isRunning:t,isIn:P,closeToast:p,hide:f,type:d,style:C,className:S,controlledProgress:j,progress:N||0})))},_=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},E=h(_("bounce",!0)),b=(h(_("slide",!0)),h(_("zoom")),h(_("flip")),(0,r.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:h,isToastActive:f}=function(e){let[,t]=(0,r.useReducer)(e=>e+1,0),[n,i]=(0,r.useState)([]),h=(0,r.useRef)(null),f=(0,r.useRef)(new Map).current,m=e=>-1!==n.indexOf(e),g=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:e=>f.get(e)}).current;function y(e){let{containerId:t}=e,{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function v(e){i(t=>null==e?[]:t.filter(t=>t!==e))}function w(){let{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();E(e,t,n)}function _(e,n){var i,m;let{delay:y,staleId:_,...b}=n;if(!u(e)||!h.current||g.props.enableMultiContainer&&b.containerId!==g.props.containerId||f.has(b.toastId)&&null==b.updateId)return;let{toastId:T,updateId:I,data:S}=b,{props:C}=g,k=()=>v(T),A=null==I;A&&g.count++;let N={...C,style:C.toastStyle,key:g.toastKey++,...Object.fromEntries(Object.entries(b).filter(e=>{let[t,n]=e;return null!=n})),toastId:T,updateId:I,data:S,closeToast:k,isIn:!1,className:l(b.className||C.toastClassName),bodyClassName:l(b.bodyClassName||C.bodyClassName),progressClassName:l(b.progressClassName||C.progressClassName),autoClose:!b.isLoading&&(i=b.autoClose,m=C.autoClose,!1===i||s(i)&&i>0?i:m),deleteToast(){let e=c(f.get(T),"removed");f.delete(T),d.emit(4,e);let n=g.queue.length;if(g.count=null==T?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){let e=null==T?g.props.limit:1;if(1===n||1===e)g.displayedToast++,w();else{let t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)w()}}else t()}};N.iconOut=function(e){let{theme:t,type:n,isLoading:i,icon:l}=e,u=null,h={theme:t,type:n};return!1===l||(o(l)?u=l(h):(0,r.isValidElement)(l)?u=(0,r.cloneElement)(l,h):a(l)||s(l)?u=l:i?u=p.spinner():n in p&&(u=p[n](h))),u}(N),o(b.onOpen)&&(N.onOpen=b.onOpen),o(b.onClose)&&(N.onClose=b.onClose),N.closeButton=C.closeButton,!1===b.closeButton||u(b.closeButton)?N.closeButton=b.closeButton:!0===b.closeButton&&(N.closeButton=!u(C.closeButton)||C.closeButton);let R=e;(0,r.isValidElement)(e)&&!a(e.type)?R=(0,r.cloneElement)(e,{closeToast:k,toastProps:N,data:S}):o(e)&&(R=e({closeToast:k,toastProps:N,data:S})),C.limit&&C.limit>0&&g.count>C.limit&&A?g.queue.push({toastContent:R,toastProps:N,staleId:_}):s(y)?setTimeout(()=>{E(R,N,_)},y):E(R,N,_)}function E(e,t,n){let{toastId:r}=t;n&&f.delete(n);let s={content:e,props:t};f.set(r,s),i(e=>[...e,r].filter(e=>e!==n)),d.emit(4,c(s,null==s.props.updateId?"added":"updated"))}return(0,r.useEffect)(()=>(g.containerId=e.containerId,d.cancelEmit(3).on(0,_).on(1,e=>h.current&&v(e)).on(5,y).emit(2,g),()=>{f.clear(),d.emit(3,g)}),[]),(0,r.useEffect)(()=>{g.props=e,g.isToastActive=m,g.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,r=Array.from(f.values());return e.newestOnTop&&r.reverse(),r.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:h,isToastActive:m}}(e),{className:m,style:g,rtl:y,containerId:v}=e;return(0,r.useEffect)(()=>{t&&(t.current=h.current)},[]),r.createElement("div",{ref:h,className:"Toastify",id:v},n((e,t)=>{let n=t.length?{...g}:{...g,pointerEvents:"none"};return r.createElement("div",{className:function(e){let t=i("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":y});return o(m)?m({position:e,rtl:y,defaultClassName:t}):i(t,l(m))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:i,props:s}=e;return r.createElement(w,{...s,isIn:f(s.toastId),style:{...s.style,"--nth":n+1,"--len":t.length},key:`toast-${s.key}`},i)}))}))}));b.displayName="ToastContainer",b.defaultProps={position:"top-right",transition:E,autoClose:5e3,closeButton:y,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let T,I=new Map,S=[],C=1;function k(e,t){return I.size>0?d.emit(0,e,t):S.push({content:e,options:t}),t.toastId}function A(e,t){return{...t,type:t&&t.type||e,toastId:t&&(a(t.toastId)||s(t.toastId))?t.toastId:""+C++}}function N(e){return(t,n)=>k(t,A(e,n))}function R(e,t){return k(e,A("default",t))}R.loading=(e,t)=>k(e,A("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),R.promise=function(e,t,n){let r,{pending:i,error:s,success:l}=t;i&&(r=a(i)?R.loading(i,n):R.loading(i.render,{...n,...i}));let u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(e,t,i)=>{if(null==t)return void R.dismiss(r);let s={type:e,...u,...n,data:i},o=a(t)?{render:t}:t;return r?R.update(r,{...s,...o}):R(o.render,{...s,...o}),i},c=o(e)?e():e;return c.then(e=>h("success",l,e)).catch(e=>h("error",s,e)),c},R.success=N("success"),R.info=N("info"),R.error=N("error"),R.warning=N("warning"),R.warn=R.warning,R.dark=(e,t)=>k(e,A("default",{theme:"dark",...t})),R.dismiss=e=>{I.size>0?d.emit(1,e):S=S.filter(t=>null!=e&&t.options.toastId!==e)},R.clearWaitingQueue=function(e){return void 0===e&&(e={}),d.emit(5,e)},R.isActive=e=>{let t=!1;return I.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},R.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,r=I.get(n||T);return r&&r.getToast(e)}(e,t);if(n){let{props:r,content:i}=n,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:""+C++};s.toastId!==e&&(s.staleId=e);let a=s.render||i;delete s.render,k(a,s)}},0)},R.done=e=>{R.update(e,{progress:1})},R.onChange=e=>(d.on(4,e),()=>{d.off(4,e)}),R.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},R.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},d.on(2,e=>{T=e.containerId||e,I.set(T,e),S.forEach(e=>{d.emit(0,e.content,e.options)}),S=[]}).on(3,e=>{I.delete(e.containerId||e),0===I.size&&d.off(0).off(1).off(5)})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(2937)}),_N_E=e.O()}]);