(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function za(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Ga(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Re(s)?T_(s):Ga(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Re(t))return t;if(we(t))return t}}const E_=/;(?![^(]*\))/g,I_=/:([^]+)/,C_=/\/\*.*?\*\//gs;function T_(t){const e={};return t.replace(C_,"").split(E_).forEach(n=>{if(n){const s=n.split(I_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function hi(t){let e="";if(Re(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=hi(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const S_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",R_=za(S_);function Wd(t){return!!t||t===""}const st=t=>Re(t)?t:t==null?"":V(t)||we(t)&&(t.toString===Gd||!K(t.toString))?JSON.stringify(t,jd,2):String(t),jd=(t,e)=>e&&e.__v_isRef?jd(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Vd(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!V(e)&&!Kd(e)?String(e):e,be={},ps=[],gt=()=>{},A_=()=>!1,x_=/^on[^a-z]/,Kr=t=>x_.test(t),Ka=t=>t.startsWith("onUpdate:"),$e=Object.assign,qa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k_=Object.prototype.hasOwnProperty,ne=(t,e)=>k_.call(t,e),V=Array.isArray,_s=t=>qr(t)==="[object Map]",Vd=t=>qr(t)==="[object Set]",K=t=>typeof t=="function",Re=t=>typeof t=="string",Qa=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",zd=t=>we(t)&&K(t.then)&&K(t.catch),Gd=Object.prototype.toString,qr=t=>Gd.call(t),N_=t=>qr(t).slice(8,-1),Kd=t=>qr(t)==="[object Object]",Ya=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ar=za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},O_=/-(\w)/g,Ot=Qr(t=>t.replace(O_,(e,n)=>n?n.toUpperCase():"")),P_=/\B([A-Z])/g,Ms=Qr(t=>t.replace(P_,"-$1").toLowerCase()),Yr=Qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ro=Qr(t=>t?`on${Yr(t)}`:""),fi=(t,e)=>!Object.is(t,e),lr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},gr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ea=t=>{const e=parseFloat(t);return isNaN(e)?t:e},D_=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let Ic;const M_=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dt;class L_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function F_(t,e=dt){e&&e.active&&e.effects.push(t)}function U_(){return dt}const Ja=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qd=t=>(t.w&gn)>0,Qd=t=>(t.n&gn)>0,B_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gn},$_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];qd(i)&&!Qd(i)?i.delete(t):e[n++]=i,i.w&=~gn,i.n&=~gn}e.length=n}},ta=new WeakMap;let ei=0,gn=1;const na=30;let ht;const $n=Symbol(""),sa=Symbol("");class Xa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,F_(this,s)}run(){if(!this.active)return this.fn();let e=ht,n=dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ht,ht=this,dn=!0,gn=1<<++ei,ei<=na?B_(this):Cc(this),this.fn()}finally{ei<=na&&$_(this),gn=1<<--ei,ht=this.parent,dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(Cc(this),this.onStop&&this.onStop(),this.active=!1)}}function Cc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let dn=!0;const Yd=[];function Ls(){Yd.push(dn),dn=!1}function Fs(){const t=Yd.pop();dn=t===void 0?!0:t}function Ze(t,e,n){if(dn&&ht){let s=ta.get(t);s||ta.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ja()),Jd(i)}}function Jd(t,e){let n=!1;ei<=na?Qd(t)||(t.n|=gn,n=!qd(t)):n=!t.has(ht),n&&(t.add(ht),ht.deps.push(t))}function Vt(t,e,n,s,i,r){const o=ta.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Ya(n)&&a.push(o.get("length")):(a.push(o.get($n)),_s(t)&&a.push(o.get(sa)));break;case"delete":V(t)||(a.push(o.get($n)),_s(t)&&a.push(o.get(sa)));break;case"set":_s(t)&&a.push(o.get($n));break}if(a.length===1)a[0]&&ia(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ia(Ja(l))}}function ia(t,e){const n=V(t)?t:[...t];for(const s of n)s.computed&&Tc(s);for(const s of n)s.computed||Tc(s)}function Tc(t,e){(t!==ht||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const H_=za("__proto__,__v_isRef,__isVue"),Xd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qa)),W_=Za(),j_=Za(!1,!0),V_=Za(!0),Sc=z_();function z_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let r=0,o=this.length;r<o;r++)Ze(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ls();const s=re(this)[e].apply(this,n);return Fs(),s}}),t}function G_(t){const e=re(this);return Ze(e,"has",t),e.hasOwnProperty(t)}function Za(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?lm:sh:e?nh:th).get(s))return s;const o=V(s);if(!t){if(o&&ne(Sc,i))return Reflect.get(Sc,i,r);if(i==="hasOwnProperty")return G_}const a=Reflect.get(s,i,r);return(Qa(i)?Xd.has(i):H_(i))||(t||Ze(s,"get",i),e)?a:Ve(a)?o&&Ya(i)?a:a.value:we(a)?t?ih(a):vn(a):a}}const K_=Zd(),q_=Zd(!0);function Zd(t=!1){return function(n,s,i,r){let o=n[s];if(Ts(o)&&Ve(o)&&!Ve(i))return!1;if(!t&&(!vr(i)&&!Ts(i)&&(o=re(o),i=re(i)),!V(n)&&Ve(o)&&!Ve(i)))return o.value=i,!0;const a=V(n)&&Ya(s)?Number(s)<n.length:ne(n,s),l=Reflect.set(n,s,i,r);return n===re(r)&&(a?fi(i,o)&&Vt(n,"set",s,i):Vt(n,"add",s,i)),l}}function Q_(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vt(t,"delete",e,void 0),s}function Y_(t,e){const n=Reflect.has(t,e);return(!Qa(e)||!Xd.has(e))&&Ze(t,"has",e),n}function J_(t){return Ze(t,"iterate",V(t)?"length":$n),Reflect.ownKeys(t)}const eh={get:W_,set:K_,deleteProperty:Q_,has:Y_,ownKeys:J_},X_={get:V_,set(t,e){return!0},deleteProperty(t,e){return!0}},Z_=$e({},eh,{get:j_,set:q_}),el=t=>t,Jr=t=>Reflect.getPrototypeOf(t);function Yi(t,e,n=!1,s=!1){t=t.__v_raw;const i=re(t),r=re(e);n||(e!==r&&Ze(i,"get",e),Ze(i,"get",r));const{has:o}=Jr(i),a=s?el:n?sl:pi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ji(t,e=!1){const n=this.__v_raw,s=re(n),i=re(t);return e||(t!==i&&Ze(s,"has",t),Ze(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Xi(t,e=!1){return t=t.__v_raw,!e&&Ze(re(t),"iterate",$n),Reflect.get(t,"size",t)}function Rc(t){t=re(t);const e=re(this);return Jr(e).has.call(e,t)||(e.add(t),Vt(e,"add",t,t)),this}function Ac(t,e){e=re(e);const n=re(this),{has:s,get:i}=Jr(n);let r=s.call(n,t);r||(t=re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?fi(e,o)&&Vt(n,"set",t,e):Vt(n,"add",t,e),this}function xc(t){const e=re(this),{has:n,get:s}=Jr(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Vt(e,"delete",t,void 0),r}function kc(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Vt(t,"clear",void 0,void 0),n}function Zi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=re(o),l=e?el:t?sl:pi;return!t&&Ze(a,"iterate",$n),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function er(t,e,n){return function(...s){const i=this.__v_raw,r=re(i),o=_s(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?el:e?sl:pi;return!e&&Ze(r,"iterate",l?sa:$n),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...e){return t==="delete"?!1:this}}function em(){const t={get(r){return Yi(this,r)},get size(){return Xi(this)},has:Ji,add:Rc,set:Ac,delete:xc,clear:kc,forEach:Zi(!1,!1)},e={get(r){return Yi(this,r,!1,!0)},get size(){return Xi(this)},has:Ji,add:Rc,set:Ac,delete:xc,clear:kc,forEach:Zi(!1,!0)},n={get(r){return Yi(this,r,!0)},get size(){return Xi(this,!0)},has(r){return Ji.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:Zi(!0,!1)},s={get(r){return Yi(this,r,!0,!0)},get size(){return Xi(this,!0)},has(r){return Ji.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=er(r,!1,!1),n[r]=er(r,!0,!1),e[r]=er(r,!1,!0),s[r]=er(r,!0,!0)}),[t,n,e,s]}const[tm,nm,sm,im]=em();function tl(t,e){const n=e?t?im:sm:t?nm:tm;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ne(n,i)&&i in s?n:s,i,r)}const rm={get:tl(!1,!1)},om={get:tl(!1,!0)},am={get:tl(!0,!1)},th=new WeakMap,nh=new WeakMap,sh=new WeakMap,lm=new WeakMap;function cm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function um(t){return t.__v_skip||!Object.isExtensible(t)?0:cm(N_(t))}function vn(t){return Ts(t)?t:nl(t,!1,eh,rm,th)}function dm(t){return nl(t,!1,Z_,om,nh)}function ih(t){return nl(t,!0,X_,am,sh)}function nl(t,e,n,s,i){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=um(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ms(t){return Ts(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Ts(t){return!!(t&&t.__v_isReadonly)}function vr(t){return!!(t&&t.__v_isShallow)}function rh(t){return ms(t)||Ts(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function oh(t){return gr(t,"__v_skip",!0),t}const pi=t=>we(t)?vn(t):t,sl=t=>we(t)?ih(t):t;function ah(t){dn&&ht&&(t=re(t),Jd(t.dep||(t.dep=Ja())))}function lh(t,e){t=re(t);const n=t.dep;n&&ia(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function cs(t){return ch(t,!1)}function hm(t){return ch(t,!0)}function ch(t,e){return Ve(t)?t:new fm(t,e)}class fm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:pi(e)}get value(){return ah(this),this._value}set value(e){const n=this.__v_isShallow||vr(e)||Ts(e);e=n?e:re(e),fi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pi(e),lh(this))}}function gs(t){return Ve(t)?t.value:t}const pm={get:(t,e,n)=>gs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function uh(t){return ms(t)?t:new Proxy(t,pm)}var dh;class _m{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[dh]=!1,this._dirty=!0,this.effect=new Xa(e,()=>{this._dirty||(this._dirty=!0,lh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=re(this);return ah(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}dh="__v_isReadonly";function mm(t,e,n=!1){let s,i;const r=K(t);return r?(s=t,i=gt):(s=t.get,i=t.set),new _m(s,i,r||!i,n)}function hn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Xr(r,e,n)}return i}function ot(t,e,n,s){if(K(t)){const r=hn(t,e,n,s);return r&&zd(r)&&r.catch(o=>{Xr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ot(t[r],e,n,s));return i}function Xr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){hn(l,null,10,[t,o,a]);return}}gm(t,n,i,s)}function gm(t,e,n,s=!0){console.error(t)}let _i=!1,ra=!1;const je=[];let Rt=0;const vs=[];let Ft=null,Pn=0;const hh=Promise.resolve();let il=null;function fh(t){const e=il||hh;return t?e.then(this?t.bind(this):t):e}function vm(t){let e=Rt+1,n=je.length;for(;e<n;){const s=e+n>>>1;mi(je[s])<t?e=s+1:n=s}return e}function rl(t){(!je.length||!je.includes(t,_i&&t.allowRecurse?Rt+1:Rt))&&(t.id==null?je.push(t):je.splice(vm(t.id),0,t),ph())}function ph(){!_i&&!ra&&(ra=!0,il=hh.then(mh))}function ym(t){const e=je.indexOf(t);e>Rt&&je.splice(e,1)}function bm(t){V(t)?vs.push(...t):(!Ft||!Ft.includes(t,t.allowRecurse?Pn+1:Pn))&&vs.push(t),ph()}function Nc(t,e=_i?Rt+1:0){for(;e<je.length;e++){const n=je[e];n&&n.pre&&(je.splice(e,1),e--,n())}}function _h(t){if(vs.length){const e=[...new Set(vs)];if(vs.length=0,Ft){Ft.push(...e);return}for(Ft=e,Ft.sort((n,s)=>mi(n)-mi(s)),Pn=0;Pn<Ft.length;Pn++)Ft[Pn]();Ft=null,Pn=0}}const mi=t=>t.id==null?1/0:t.id,wm=(t,e)=>{const n=mi(t)-mi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mh(t){ra=!1,_i=!0,je.sort(wm);const e=gt;try{for(Rt=0;Rt<je.length;Rt++){const n=je[Rt];n&&n.active!==!1&&hn(n,null,14)}}finally{Rt=0,je.length=0,_h(),_i=!1,il=null,(je.length||vs.length)&&mh()}}function Em(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||be;h&&(i=n.map(p=>Re(p)?p.trim():p)),d&&(i=n.map(ea))}let a,l=s[a=Ro(e)]||s[a=Ro(Ot(e))];!l&&r&&(l=s[a=Ro(Ms(e))]),l&&ot(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ot(c,t,6,i)}}function gh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=gh(c,e,!0);u&&(a=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(we(t)&&s.set(t,null),null):(V(r)?r.forEach(l=>o[l]=null):$e(o,r),we(t)&&s.set(t,o),o)}function Zr(t,e){return!t||!Kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Ms(e))||ne(t,e))}let tt=null,eo=null;function yr(t){const e=tt;return tt=t,eo=t&&t.type.__scopeId||null,e}function vh(t){eo=t}function yh(){eo=null}function Le(t,e=tt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Hc(-1);const r=yr(e);let o;try{o=t(...i)}finally{yr(r),s._d&&Hc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ao(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:p,ctx:m,inheritAttrs:v}=t;let E,S;const M=yr(t);try{if(n.shapeFlag&4){const D=i||s;E=St(u.call(D,D,d,r,p,h,m)),S=l}else{const D=e;E=St(D.length>1?D(r,{attrs:l,slots:a,emit:c}):D(r,null)),S=e.props?l:Im(l)}}catch(D){ii.length=0,Xr(D,t,1),E=se(vt)}let C=E;if(S&&v!==!1){const D=Object.keys(S),{shapeFlag:G}=C;D.length&&G&7&&(o&&D.some(Ka)&&(S=Cm(S,o)),C=yn(C,S))}return n.dirs&&(C=yn(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),E=C,yr(M),E}const Im=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kr(n))&&((e||(e={}))[n]=t[n]);return e},Cm=(t,e)=>{const n={};for(const s in t)(!Ka(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Tm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Oc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Zr(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Oc(s,o,c):!0:!!o;return!1}function Oc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Zr(n,r))return!0}return!1}function Sm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Rm=t=>t.__isSuspense;function Am(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):bm(t)}function cr(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function At(t,e,n=!1){const s=Se||tt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s.proxy):e}}const tr={};function Hn(t,e,n){return bh(t,e,n)}function bh(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=be){const a=U_()===(Se==null?void 0:Se.scope)?Se:null;let l,c=!1,u=!1;if(Ve(t)?(l=()=>t.value,c=vr(t)):ms(t)?(l=()=>t,s=!0):V(t)?(u=!0,c=t.some(C=>ms(C)||vr(C)),l=()=>t.map(C=>{if(Ve(C))return C.value;if(ms(C))return Un(C);if(K(C))return hn(C,a,2)})):K(t)?e?l=()=>hn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),ot(t,a,3,[h])}:l=gt,e&&s){const C=l;l=()=>Un(C())}let d,h=C=>{d=S.onStop=()=>{hn(C,a,4)}},p;if(vi)if(h=gt,e?n&&ot(e,a,3,[l(),u?[]:void 0,h]):l(),i==="sync"){const C=Ig();p=C.__watcherHandles||(C.__watcherHandles=[])}else return gt;let m=u?new Array(t.length).fill(tr):tr;const v=()=>{if(S.active)if(e){const C=S.run();(s||c||(u?C.some((D,G)=>fi(D,m[G])):fi(C,m)))&&(d&&d(),ot(e,a,3,[C,m===tr?void 0:u&&m[0]===tr?[]:m,h]),m=C)}else S.run()};v.allowRecurse=!!e;let E;i==="sync"?E=v:i==="post"?E=()=>Je(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),E=()=>rl(v));const S=new Xa(l,E);e?n?v():m=S.run():i==="post"?Je(S.run.bind(S),a&&a.suspense):S.run();const M=()=>{S.stop(),a&&a.scope&&qa(a.scope.effects,S)};return p&&p.push(M),M}function xm(t,e,n){const s=this.proxy,i=Re(t)?t.includes(".")?wh(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Se;Ss(this);const a=bh(i,r.bind(s),n);return o?Ss(o):jn(),a}function wh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Un(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))Un(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)Un(t[n],e);else if(Vd(t)||_s(t))t.forEach(n=>{Un(n,e)});else if(Kd(t))for(const n in t)Un(t[n],e);return t}function km(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return al(()=>{t.isMounted=!0}),ll(()=>{t.isUnmounting=!0}),t}const nt=[Function,Array],Nm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nt,onEnter:nt,onAfterEnter:nt,onEnterCancelled:nt,onBeforeLeave:nt,onLeave:nt,onAfterLeave:nt,onLeaveCancelled:nt,onBeforeAppear:nt,onAppear:nt,onAfterAppear:nt,onAppearCancelled:nt},setup(t,{slots:e}){const n=_g(),s=km();let i;return()=>{const r=e.default&&Ch(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==vt){o=v;break}}const a=re(t),{mode:l}=a;if(s.isLeaving)return xo(o);const c=Pc(o);if(!c)return xo(o);const u=oa(c,a,s,n);aa(c,u);const d=n.subTree,h=d&&Pc(d);let p=!1;const{getTransitionKey:m}=c.type;if(m){const v=m();i===void 0?i=v:v!==i&&(i=v,p=!0)}if(h&&h.type!==vt&&(!Dn(c,h)||p)){const v=oa(h,a,s,n);if(aa(h,v),l==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},xo(o);l==="in-out"&&c.type!==vt&&(v.delayLeave=(E,S,M)=>{const C=Ih(s,h);C[String(h.key)]=h,E._leaveCb=()=>{S(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},Eh=Nm;function Ih(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function oa(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:v,onAppear:E,onAfterAppear:S,onAppearCancelled:M}=e,C=String(t.key),D=Ih(n,t),G=(H,le)=>{H&&ot(H,s,9,le)},ee=(H,le)=>{const oe=le[1];G(H,le),V(H)?H.every(xe=>xe.length<=1)&&oe():H.length<=1&&oe()},ae={mode:r,persisted:o,beforeEnter(H){let le=a;if(!n.isMounted)if(i)le=v||a;else return;H._leaveCb&&H._leaveCb(!0);const oe=D[C];oe&&Dn(t,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),G(le,[H])},enter(H){let le=l,oe=c,xe=u;if(!n.isMounted)if(i)le=E||l,oe=S||c,xe=M||u;else return;let L=!1;const ye=H._enterCb=Me=>{L||(L=!0,Me?G(xe,[H]):G(oe,[H]),ae.delayedLeave&&ae.delayedLeave(),H._enterCb=void 0)};le?ee(le,[H,ye]):ye()},leave(H,le){const oe=String(t.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return le();G(d,[H]);let xe=!1;const L=H._leaveCb=ye=>{xe||(xe=!0,le(),ye?G(m,[H]):G(p,[H]),H._leaveCb=void 0,D[oe]===t&&delete D[oe])};D[oe]=t,h?ee(h,[H,L]):L()},clone(H){return oa(H,e,n,s)}};return ae}function xo(t){if(to(t))return t=yn(t),t.children=null,t}function Pc(t){return to(t)?t.children?t.children[0]:void 0:t}function aa(t,e){t.shapeFlag&6&&t.component?aa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ch(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===De?(o.patchFlag&128&&i++,s=s.concat(Ch(o.children,e,a))):(e||o.type!==vt)&&s.push(a!=null?yn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ol(t){return K(t)?{setup:t,name:t.name}:t}const ur=t=>!!t.type.__asyncLoader,to=t=>t.type.__isKeepAlive;function Om(t,e){Th(t,"a",e)}function Pm(t,e){Th(t,"da",e)}function Th(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(no(e,s,n),n){let i=n.parent;for(;i&&i.parent;)to(i.parent.vnode)&&Dm(s,e,n,i),i=i.parent}}function Dm(t,e,n,s){const i=no(e,t,s,!0);cl(()=>{qa(s[e],i)},n)}function no(t,e,n=Se,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ls(),Ss(n);const a=ot(e,n,t,o);return jn(),Fs(),a});return s?i.unshift(r):i.push(r),r}}const Kt=t=>(e,n=Se)=>(!vi||t==="sp")&&no(t,(...s)=>e(...s),n),Mm=Kt("bm"),al=Kt("m"),Lm=Kt("bu"),Fm=Kt("u"),ll=Kt("bum"),cl=Kt("um"),Um=Kt("sp"),Bm=Kt("rtg"),$m=Kt("rtc");function Hm(t,e=Se){no("ec",t,e)}function Wm(t,e){const n=tt;if(n===null)return t;const s=ro(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=be]=e[r];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&Un(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Sn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ls(),ot(l,n,8,[t.el,a,t,e]),Fs())}}const ul="components";function Be(t,e){return Rh(ul,t,!0,e)||t}const Sh=Symbol();function jm(t){return Re(t)?Rh(ul,t,!1)||t:t||Sh}function Rh(t,e,n=!0,s=!1){const i=tt||Se;if(i){const r=i.type;if(t===ul){const a=bg(r,!1);if(a&&(a===e||a===Ot(e)||a===Yr(Ot(e))))return r}const o=Dc(i[t]||r[t],e)||Dc(i.appContext[t],e);return!o&&s?r:o}}function Dc(t,e){return t&&(t[e]||t[Ot(e)]||t[Yr(Ot(e))])}function br(t,e,n,s){let i;const r=n&&n[s];if(V(t)||Re(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(we(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const la=t=>t?Uh(t)?ro(t)||t.proxy:la(t.parent):null,si=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>la(t.parent),$root:t=>la(t.root),$emit:t=>t.emit,$options:t=>dl(t),$forceUpdate:t=>t.f||(t.f=()=>rl(t.update)),$nextTick:t=>t.n||(t.n=fh.bind(t.proxy)),$watch:t=>xm.bind(t)}),ko=(t,e)=>t!==be&&!t.__isScriptSetup&&ne(t,e),Vm={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ko(s,e))return o[e]=1,s[e];if(i!==be&&ne(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ne(c,e))return o[e]=3,r[e];if(n!==be&&ne(n,e))return o[e]=4,n[e];ca&&(o[e]=0)}}const u=si[e];let d,h;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==be&&ne(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ne(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ko(i,e)?(i[e]=n,!0):s!==be&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==be&&ne(t,o)||ko(e,o)||(a=r[0])&&ne(a,o)||ne(s,o)||ne(si,o)||ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ca=!0;function zm(t){const e=dl(t),n=t.proxy,s=t.ctx;ca=!1,e.beforeCreate&&Mc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:m,activated:v,deactivated:E,beforeDestroy:S,beforeUnmount:M,destroyed:C,unmounted:D,render:G,renderTracked:ee,renderTriggered:ae,errorCaptured:H,serverPrefetch:le,expose:oe,inheritAttrs:xe,components:L,directives:ye,filters:Me}=e;if(c&&Gm(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const _e in o){const ue=o[_e];K(ue)&&(s[_e]=ue.bind(n))}if(i){const _e=i.call(n,n);we(_e)&&(t.data=vn(_e))}if(ca=!0,r)for(const _e in r){const ue=r[_e],lt=K(ue)?ue.bind(n,n):K(ue.get)?ue.get.bind(n,n):gt,Tn=!K(ue)&&K(ue.set)?ue.set.bind(n):gt,ct=it({get:lt,set:Tn});Object.defineProperty(s,_e,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Ye=>ct.value=Ye})}if(a)for(const _e in a)Ah(a[_e],s,n,_e);if(l){const _e=K(l)?l.call(n):l;Reflect.ownKeys(_e).forEach(ue=>{cr(ue,_e[ue])})}u&&Mc(u,t,"c");function Ee(_e,ue){V(ue)?ue.forEach(lt=>_e(lt.bind(n))):ue&&_e(ue.bind(n))}if(Ee(Mm,d),Ee(al,h),Ee(Lm,p),Ee(Fm,m),Ee(Om,v),Ee(Pm,E),Ee(Hm,H),Ee($m,ee),Ee(Bm,ae),Ee(ll,M),Ee(cl,D),Ee(Um,le),V(oe))if(oe.length){const _e=t.exposed||(t.exposed={});oe.forEach(ue=>{Object.defineProperty(_e,ue,{get:()=>n[ue],set:lt=>n[ue]=lt})})}else t.exposed||(t.exposed={});G&&t.render===gt&&(t.render=G),xe!=null&&(t.inheritAttrs=xe),L&&(t.components=L),ye&&(t.directives=ye)}function Gm(t,e,n=gt,s=!1){V(t)&&(t=ua(t));for(const i in t){const r=t[i];let o;we(r)?"default"in r?o=At(r.from||i,r.default,!0):o=At(r.from||i):o=At(r),Ve(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Mc(t,e,n){ot(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ah(t,e,n,s){const i=s.includes(".")?wh(n,s):()=>n[s];if(Re(t)){const r=e[t];K(r)&&Hn(i,r)}else if(K(t))Hn(i,t.bind(n));else if(we(t))if(V(t))t.forEach(r=>Ah(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&Hn(i,r,t)}}function dl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>wr(l,c,o,!0)),wr(l,e,o)),we(e)&&r.set(e,l),l}function wr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&wr(t,r,n,!0),i&&i.forEach(o=>wr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Km[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Km={data:Lc,props:kn,emits:kn,methods:kn,computed:kn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:kn,directives:kn,watch:Qm,provide:Lc,inject:qm};function Lc(t,e){return e?t?function(){return $e(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function qm(t,e){return kn(ua(t),ua(e))}function ua(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function kn(t,e){return t?$e($e(Object.create(null),t),e):e}function Qm(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function Ym(t,e,n,s=!1){const i={},r={};gr(r,io,1),t.propsDefaults=Object.create(null),xh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:dm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Jm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=re(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Zr(t.emitsOptions,h))continue;const p=e[h];if(l)if(ne(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const m=Ot(h);i[m]=da(l,a,m,p,t,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{xh(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ne(e,d)&&((u=Ms(d))===d||!ne(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=da(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ne(e,d))&&(delete r[d],c=!0)}c&&Vt(t,"set","$attrs")}function xh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ar(l))continue;const c=e[l];let u;i&&ne(i,u=Ot(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Zr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=re(n),c=a||be;for(let u=0;u<r.length;u++){const d=r[u];n[d]=da(i,l,d,c[d],t,!ne(c,d))}}return o}function da(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&K(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ss(i),s=c[n]=l.call(null,e),jn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ms(n))&&(s=!0))}return s}function kh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=d=>{l=!0;const[h,p]=kh(d,e,!0);$e(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return we(t)&&s.set(t,ps),ps;if(V(r))for(let u=0;u<r.length;u++){const d=Ot(r[u]);Fc(d)&&(o[d]=be)}else if(r)for(const u in r){const d=Ot(u);if(Fc(d)){const h=r[u],p=o[d]=V(h)||K(h)?{type:h}:Object.assign({},h);if(p){const m=$c(Boolean,p.type),v=$c(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||ne(p,"default"))&&a.push(d)}}}const c=[o,a];return we(t)&&s.set(t,c),c}function Fc(t){return t[0]!=="$"}function Uc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Bc(t,e){return Uc(t)===Uc(e)}function $c(t,e){return V(e)?e.findIndex(n=>Bc(n,t)):K(e)&&Bc(e,t)?0:-1}const Nh=t=>t[0]==="_"||t==="$stable",hl=t=>V(t)?t.map(St):[St(t)],Xm=(t,e,n)=>{if(e._n)return e;const s=Le((...i)=>hl(e(...i)),n);return s._c=!1,s},Oh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Nh(i))continue;const r=t[i];if(K(r))e[i]=Xm(i,r,s);else if(r!=null){const o=hl(r);e[i]=()=>o}}},Ph=(t,e)=>{const n=hl(e);t.slots.default=()=>n},Zm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),gr(e,"_",n)):Oh(e,t.slots={})}else t.slots={},e&&Ph(t,e);gr(t.slots,io,1)},eg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:($e(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Oh(e,i)),o=e}else e&&(Ph(t,e),o={default:1});if(r)for(const a in i)!Nh(a)&&!(a in o)&&delete i[a]};function Dh(){return{app:null,config:{isNativeTag:A_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tg=0;function ng(t,e){return function(s,i=null){K(s)||(s=Object.assign({},s)),i!=null&&!we(i)&&(i=null);const r=Dh(),o=new Set;let a=!1;const l=r.app={_uid:tg++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Cg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=se(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,ro(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function ha(t,e,n,s,i=!1){if(V(t)){t.forEach((h,p)=>ha(h,e&&(V(e)?e[p]:e),n,s,i));return}if(ur(s)&&!i)return;const r=s.shapeFlag&4?ro(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,ne(d,c)&&(d[c]=null)):Ve(c)&&(c.value=null)),K(l))hn(l,a,12,[o,u]);else{const h=Re(l),p=Ve(l);if(h||p){const m=()=>{if(t.f){const v=h?ne(d,l)?d[l]:u[l]:l.value;i?V(v)&&qa(v,r):V(v)?v.includes(r)||v.push(r):h?(u[l]=[r],ne(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ne(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Je(m,n)):m()}}}const Je=Am;function sg(t){return ig(t)}function ig(t,e){const n=M_();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=gt,insertStaticContent:m}=t,v=(f,_,g,y=null,w=null,A=null,O=!1,R=null,k=!!_.dynamicChildren)=>{if(f===_)return;f&&!Dn(f,_)&&(y=N(f),Ye(f,w,A,!0),f=null),_.patchFlag===-2&&(k=!1,_.dynamicChildren=null);const{type:I,ref:B,shapeFlag:F}=_;switch(I){case so:E(f,_,g,y);break;case vt:S(f,_,g,y);break;case dr:f==null&&M(_,g,y,O);break;case De:L(f,_,g,y,w,A,O,R,k);break;default:F&1?G(f,_,g,y,w,A,O,R,k):F&6?ye(f,_,g,y,w,A,O,R,k):(F&64||F&128)&&I.process(f,_,g,y,w,A,O,R,k,te)}B!=null&&w&&ha(B,f&&f.ref,A,_||f,!_)},E=(f,_,g,y)=>{if(f==null)s(_.el=a(_.children),g,y);else{const w=_.el=f.el;_.children!==f.children&&c(w,_.children)}},S=(f,_,g,y)=>{f==null?s(_.el=l(_.children||""),g,y):_.el=f.el},M=(f,_,g,y)=>{[f.el,f.anchor]=m(f.children,_,g,y,f.el,f.anchor)},C=({el:f,anchor:_},g,y)=>{let w;for(;f&&f!==_;)w=h(f),s(f,g,y),f=w;s(_,g,y)},D=({el:f,anchor:_})=>{let g;for(;f&&f!==_;)g=h(f),i(f),f=g;i(_)},G=(f,_,g,y,w,A,O,R,k)=>{O=O||_.type==="svg",f==null?ee(_,g,y,w,A,O,R,k):le(f,_,w,A,O,R,k)},ee=(f,_,g,y,w,A,O,R)=>{let k,I;const{type:B,props:F,shapeFlag:$,transition:z,dirs:J}=f;if(k=f.el=o(f.type,A,F&&F.is,F),$&8?u(k,f.children):$&16&&H(f.children,k,null,y,w,A&&B!=="foreignObject",O,R),J&&Sn(f,null,y,"created"),ae(k,f,f.scopeId,O,y),F){for(const de in F)de!=="value"&&!ar(de)&&r(k,de,null,F[de],A,f.children,y,w,P);"value"in F&&r(k,"value",null,F.value),(I=F.onVnodeBeforeMount)&&Tt(I,y,f)}J&&Sn(f,null,y,"beforeMount");const me=(!w||w&&!w.pendingBranch)&&z&&!z.persisted;me&&z.beforeEnter(k),s(k,_,g),((I=F&&F.onVnodeMounted)||me||J)&&Je(()=>{I&&Tt(I,y,f),me&&z.enter(k),J&&Sn(f,null,y,"mounted")},w)},ae=(f,_,g,y,w)=>{if(g&&p(f,g),y)for(let A=0;A<y.length;A++)p(f,y[A]);if(w){let A=w.subTree;if(_===A){const O=w.vnode;ae(f,O,O.scopeId,O.slotScopeIds,w.parent)}}},H=(f,_,g,y,w,A,O,R,k=0)=>{for(let I=k;I<f.length;I++){const B=f[I]=R?nn(f[I]):St(f[I]);v(null,B,_,g,y,w,A,O,R)}},le=(f,_,g,y,w,A,O)=>{const R=_.el=f.el;let{patchFlag:k,dynamicChildren:I,dirs:B}=_;k|=f.patchFlag&16;const F=f.props||be,$=_.props||be;let z;g&&Rn(g,!1),(z=$.onVnodeBeforeUpdate)&&Tt(z,g,_,f),B&&Sn(_,f,g,"beforeUpdate"),g&&Rn(g,!0);const J=w&&_.type!=="foreignObject";if(I?oe(f.dynamicChildren,I,R,g,y,J,A):O||ue(f,_,R,null,g,y,J,A,!1),k>0){if(k&16)xe(R,_,F,$,g,y,w);else if(k&2&&F.class!==$.class&&r(R,"class",null,$.class,w),k&4&&r(R,"style",F.style,$.style,w),k&8){const me=_.dynamicProps;for(let de=0;de<me.length;de++){const Ae=me[de],ut=F[Ae],ss=$[Ae];(ss!==ut||Ae==="value")&&r(R,Ae,ut,ss,w,f.children,g,y,P)}}k&1&&f.children!==_.children&&u(R,_.children)}else!O&&I==null&&xe(R,_,F,$,g,y,w);((z=$.onVnodeUpdated)||B)&&Je(()=>{z&&Tt(z,g,_,f),B&&Sn(_,f,g,"updated")},y)},oe=(f,_,g,y,w,A,O)=>{for(let R=0;R<_.length;R++){const k=f[R],I=_[R],B=k.el&&(k.type===De||!Dn(k,I)||k.shapeFlag&70)?d(k.el):g;v(k,I,B,null,y,w,A,O,!0)}},xe=(f,_,g,y,w,A,O)=>{if(g!==y){if(g!==be)for(const R in g)!ar(R)&&!(R in y)&&r(f,R,g[R],null,O,_.children,w,A,P);for(const R in y){if(ar(R))continue;const k=y[R],I=g[R];k!==I&&R!=="value"&&r(f,R,I,k,O,_.children,w,A,P)}"value"in y&&r(f,"value",g.value,y.value)}},L=(f,_,g,y,w,A,O,R,k)=>{const I=_.el=f?f.el:a(""),B=_.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:$,slotScopeIds:z}=_;z&&(R=R?R.concat(z):z),f==null?(s(I,g,y),s(B,g,y),H(_.children,g,B,w,A,O,R,k)):F>0&&F&64&&$&&f.dynamicChildren?(oe(f.dynamicChildren,$,g,w,A,O,R),(_.key!=null||w&&_===w.subTree)&&Mh(f,_,!0)):ue(f,_,g,B,w,A,O,R,k)},ye=(f,_,g,y,w,A,O,R,k)=>{_.slotScopeIds=R,f==null?_.shapeFlag&512?w.ctx.activate(_,g,y,O,k):Me(_,g,y,w,A,O,k):Yt(f,_,k)},Me=(f,_,g,y,w,A,O)=>{const R=f.component=pg(f,y,w);if(to(f)&&(R.ctx.renderer=te),mg(R),R.asyncDep){if(w&&w.registerDep(R,Ee),!f.el){const k=R.subTree=se(vt);S(null,k,_,g)}return}Ee(R,f,_,g,w,A,O)},Yt=(f,_,g)=>{const y=_.component=f.component;if(Tm(f,_,g))if(y.asyncDep&&!y.asyncResolved){_e(y,_,g);return}else y.next=_,ym(y.update),y.update();else _.el=f.el,y.vnode=_},Ee=(f,_,g,y,w,A,O)=>{const R=()=>{if(f.isMounted){let{next:B,bu:F,u:$,parent:z,vnode:J}=f,me=B,de;Rn(f,!1),B?(B.el=J.el,_e(f,B,O)):B=J,F&&lr(F),(de=B.props&&B.props.onVnodeBeforeUpdate)&&Tt(de,z,B,J),Rn(f,!0);const Ae=Ao(f),ut=f.subTree;f.subTree=Ae,v(ut,Ae,d(ut.el),N(ut),f,w,A),B.el=Ae.el,me===null&&Sm(f,Ae.el),$&&Je($,w),(de=B.props&&B.props.onVnodeUpdated)&&Je(()=>Tt(de,z,B,J),w)}else{let B;const{el:F,props:$}=_,{bm:z,m:J,parent:me}=f,de=ur(_);if(Rn(f,!1),z&&lr(z),!de&&(B=$&&$.onVnodeBeforeMount)&&Tt(B,me,_),Rn(f,!0),F&&q){const Ae=()=>{f.subTree=Ao(f),q(F,f.subTree,f,w,null)};de?_.type.__asyncLoader().then(()=>!f.isUnmounted&&Ae()):Ae()}else{const Ae=f.subTree=Ao(f);v(null,Ae,g,y,f,w,A),_.el=Ae.el}if(J&&Je(J,w),!de&&(B=$&&$.onVnodeMounted)){const Ae=_;Je(()=>Tt(B,me,Ae),w)}(_.shapeFlag&256||me&&ur(me.vnode)&&me.vnode.shapeFlag&256)&&f.a&&Je(f.a,w),f.isMounted=!0,_=g=y=null}},k=f.effect=new Xa(R,()=>rl(I),f.scope),I=f.update=()=>k.run();I.id=f.uid,Rn(f,!0),I()},_e=(f,_,g)=>{_.component=f;const y=f.vnode.props;f.vnode=_,f.next=null,Jm(f,_.props,y,g),eg(f,_.children,g),Ls(),Nc(),Fs()},ue=(f,_,g,y,w,A,O,R,k=!1)=>{const I=f&&f.children,B=f?f.shapeFlag:0,F=_.children,{patchFlag:$,shapeFlag:z}=_;if($>0){if($&128){Tn(I,F,g,y,w,A,O,R,k);return}else if($&256){lt(I,F,g,y,w,A,O,R,k);return}}z&8?(B&16&&P(I,w,A),F!==I&&u(g,F)):B&16?z&16?Tn(I,F,g,y,w,A,O,R,k):P(I,w,A,!0):(B&8&&u(g,""),z&16&&H(F,g,y,w,A,O,R,k))},lt=(f,_,g,y,w,A,O,R,k)=>{f=f||ps,_=_||ps;const I=f.length,B=_.length,F=Math.min(I,B);let $;for($=0;$<F;$++){const z=_[$]=k?nn(_[$]):St(_[$]);v(f[$],z,g,null,w,A,O,R,k)}I>B?P(f,w,A,!0,!1,F):H(_,g,y,w,A,O,R,k,F)},Tn=(f,_,g,y,w,A,O,R,k)=>{let I=0;const B=_.length;let F=f.length-1,$=B-1;for(;I<=F&&I<=$;){const z=f[I],J=_[I]=k?nn(_[I]):St(_[I]);if(Dn(z,J))v(z,J,g,null,w,A,O,R,k);else break;I++}for(;I<=F&&I<=$;){const z=f[F],J=_[$]=k?nn(_[$]):St(_[$]);if(Dn(z,J))v(z,J,g,null,w,A,O,R,k);else break;F--,$--}if(I>F){if(I<=$){const z=$+1,J=z<B?_[z].el:y;for(;I<=$;)v(null,_[I]=k?nn(_[I]):St(_[I]),g,J,w,A,O,R,k),I++}}else if(I>$)for(;I<=F;)Ye(f[I],w,A,!0),I++;else{const z=I,J=I,me=new Map;for(I=J;I<=$;I++){const et=_[I]=k?nn(_[I]):St(_[I]);et.key!=null&&me.set(et.key,I)}let de,Ae=0;const ut=$-J+1;let ss=!1,bc=0;const Gs=new Array(ut);for(I=0;I<ut;I++)Gs[I]=0;for(I=z;I<=F;I++){const et=f[I];if(Ae>=ut){Ye(et,w,A,!0);continue}let Ct;if(et.key!=null)Ct=me.get(et.key);else for(de=J;de<=$;de++)if(Gs[de-J]===0&&Dn(et,_[de])){Ct=de;break}Ct===void 0?Ye(et,w,A,!0):(Gs[Ct-J]=I+1,Ct>=bc?bc=Ct:ss=!0,v(et,_[Ct],g,null,w,A,O,R,k),Ae++)}const wc=ss?rg(Gs):ps;for(de=wc.length-1,I=ut-1;I>=0;I--){const et=J+I,Ct=_[et],Ec=et+1<B?_[et+1].el:y;Gs[I]===0?v(null,Ct,g,Ec,w,A,O,R,k):ss&&(de<0||I!==wc[de]?ct(Ct,g,Ec,2):de--)}}},ct=(f,_,g,y,w=null)=>{const{el:A,type:O,transition:R,children:k,shapeFlag:I}=f;if(I&6){ct(f.component.subTree,_,g,y);return}if(I&128){f.suspense.move(_,g,y);return}if(I&64){O.move(f,_,g,te);return}if(O===De){s(A,_,g);for(let F=0;F<k.length;F++)ct(k[F],_,g,y);s(f.anchor,_,g);return}if(O===dr){C(f,_,g);return}if(y!==2&&I&1&&R)if(y===0)R.beforeEnter(A),s(A,_,g),Je(()=>R.enter(A),w);else{const{leave:F,delayLeave:$,afterLeave:z}=R,J=()=>s(A,_,g),me=()=>{F(A,()=>{J(),z&&z()})};$?$(A,J,me):me()}else s(A,_,g)},Ye=(f,_,g,y=!1,w=!1)=>{const{type:A,props:O,ref:R,children:k,dynamicChildren:I,shapeFlag:B,patchFlag:F,dirs:$}=f;if(R!=null&&ha(R,null,g,f,!0),B&256){_.ctx.deactivate(f);return}const z=B&1&&$,J=!ur(f);let me;if(J&&(me=O&&O.onVnodeBeforeUnmount)&&Tt(me,_,f),B&6)b(f.component,g,y);else{if(B&128){f.suspense.unmount(g,y);return}z&&Sn(f,null,_,"beforeUnmount"),B&64?f.type.remove(f,_,g,w,te,y):I&&(A!==De||F>0&&F&64)?P(I,_,g,!1,!0):(A===De&&F&384||!w&&B&16)&&P(k,_,g),y&&ns(f)}(J&&(me=O&&O.onVnodeUnmounted)||z)&&Je(()=>{me&&Tt(me,_,f),z&&Sn(f,null,_,"unmounted")},g)},ns=f=>{const{type:_,el:g,anchor:y,transition:w}=f;if(_===De){Qi(g,y);return}if(_===dr){D(f);return}const A=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:R}=w,k=()=>O(g,A);R?R(f.el,A,k):k()}else A()},Qi=(f,_)=>{let g;for(;f!==_;)g=h(f),i(f),f=g;i(_)},b=(f,_,g)=>{const{bum:y,scope:w,update:A,subTree:O,um:R}=f;y&&lr(y),w.stop(),A&&(A.active=!1,Ye(O,f,_,g)),R&&Je(R,_),Je(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},P=(f,_,g,y=!1,w=!1,A=0)=>{for(let O=A;O<f.length;O++)Ye(f[O],_,g,y,w)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),U=(f,_,g)=>{f==null?_._vnode&&Ye(_._vnode,null,null,!0):v(_._vnode||null,f,_,null,null,null,g),Nc(),_h(),_._vnode=f},te={p:v,um:Ye,m:ct,r:ns,mt:Me,mc:H,pc:ue,pbc:oe,n:N,o:t};let Ie,q;return e&&([Ie,q]=e(te)),{render:U,hydrate:Ie,createApp:ng(U,Ie)}}function Rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mh(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=nn(i[r]),a.el=o.el),n||Mh(o,a)),a.type===so&&(a.el=o.el)}}function rg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const og=t=>t.__isTeleport,De=Symbol(void 0),so=Symbol(void 0),vt=Symbol(void 0),dr=Symbol(void 0),ii=[];let pt=null;function X(t=!1){ii.push(pt=t?null:[])}function ag(){ii.pop(),pt=ii[ii.length-1]||null}let gi=1;function Hc(t){gi+=t}function Lh(t){return t.dynamicChildren=gi>0?pt||ps:null,ag(),gi>0&&pt&&pt.push(t),t}function pe(t,e,n,s,i,r){return Lh(x(t,e,n,s,i,r,!0))}function Bt(t,e,n,s,i){return Lh(se(t,e,n,s,i,!0))}function fa(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const io="__vInternal",Fh=({key:t})=>t??null,hr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Re(t)||Ve(t)||K(t)?{i:tt,r:t,k:e,f:!!n}:t:null;function x(t,e=null,n=null,s=0,i=null,r=t===De?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fh(e),ref:e&&hr(e),scopeId:eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tt};return a?(fl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),gi>0&&!o&&pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pt.push(l),l}const se=lg;function lg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Sh)&&(t=vt),fa(t)){const a=yn(t,e,!0);return n&&fl(a,n),gi>0&&!r&&pt&&(a.shapeFlag&6?pt[pt.indexOf(t)]=a:pt.push(a)),a.patchFlag|=-2,a}if(wg(t)&&(t=t.__vccOpts),e){e=cg(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=hi(a)),we(l)&&(rh(l)&&!V(l)&&(l=$e({},l)),e.style=Ga(l))}const o=Re(t)?1:Rm(t)?128:og(t)?64:we(t)?4:K(t)?2:0;return x(t,e,n,s,i,o,r,!0)}function cg(t){return t?rh(t)||io in t?$e({},t):t:null}function yn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?dg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Fh(a),ref:e&&e.ref?n&&i?V(i)?i.concat(hr(e)):[i,hr(e)]:hr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Fe(t=" ",e=0){return se(so,null,t,e)}function ug(t,e){const n=se(dr,null,t);return n.staticCount=e,n}function Wn(t="",e=!1){return e?(X(),Bt(vt,null,t)):se(vt,null,t)}function St(t){return t==null||typeof t=="boolean"?se(vt):V(t)?se(De,null,t.slice()):typeof t=="object"?nn(t):se(so,null,String(t))}function nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function fl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),fl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(io in e)?e._ctx=tt:i===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),s&64?(n=16,e=[Fe(e)]):n=8);t.children=e,t.shapeFlag|=n}function dg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=hi([e.class,s.class]));else if(i==="style")e.style=Ga([e.style,s.style]);else if(Kr(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Tt(t,e,n,s=null){ot(t,e,7,[n,s])}const hg=Dh();let fg=0;function pg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||hg,r={uid:fg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new L_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kh(s,i),emitsOptions:gh(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Em.bind(null,r),t.ce&&t.ce(r),r}let Se=null;const _g=()=>Se||tt,Ss=t=>{Se=t,t.scope.on()},jn=()=>{Se&&Se.scope.off(),Se=null};function Uh(t){return t.vnode.shapeFlag&4}let vi=!1;function mg(t,e=!1){vi=e;const{props:n,children:s}=t.vnode,i=Uh(t);Ym(t,n,i,e),Zm(t,s);const r=i?gg(t,e):void 0;return vi=!1,r}function gg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=oh(new Proxy(t.ctx,Vm));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?yg(t):null;Ss(t),Ls();const r=hn(s,t,0,[t.props,i]);if(Fs(),jn(),zd(r)){if(r.then(jn,jn),e)return r.then(o=>{Wc(t,o,e)}).catch(o=>{Xr(o,t,0)});t.asyncDep=r}else Wc(t,r,e)}else Bh(t,e)}function Wc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=uh(e)),Bh(t,n)}let jc;function Bh(t,e,n){const s=t.type;if(!t.render){if(!e&&jc&&!s.render){const i=s.template||dl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=$e($e({isCustomElement:r,delimiters:a},o),l);s.render=jc(i,c)}}t.render=s.render||gt}Ss(t),Ls(),zm(t),Fs(),jn()}function vg(t){return new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}})}function yg(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=vg(t))},slots:t.slots,emit:t.emit,expose:e}}function ro(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(uh(oh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}}))}function bg(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function wg(t){return K(t)&&"__vccOpts"in t}const it=(t,e)=>mm(t,e,vi);function ys(t,e,n){const s=arguments.length;return s===2?we(e)&&!V(e)?fa(e)?se(t,null,[e]):se(t,e):se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&fa(n)&&(n=[n]),se(t,e,n))}const Eg=Symbol(""),Ig=()=>At(Eg),Cg="3.2.47",Tg="http://www.w3.org/2000/svg",Mn=typeof document<"u"?document:null,Vc=Mn&&Mn.createElement("template"),Sg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Mn.createElementNS(Tg,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Vc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Vc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Rg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ag(t,e,n){const s=t.style,i=Re(n);if(n&&!i){if(e&&!Re(e))for(const r in e)n[r]==null&&pa(s,r,"");for(const r in n)pa(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const zc=/\s*!important$/;function pa(t,e,n){if(V(n))n.forEach(s=>pa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=xg(t,e);zc.test(n)?t.setProperty(Ms(s),n.replace(zc,""),"important"):t[s]=n}}const Gc=["Webkit","Moz","ms"],No={};function xg(t,e){const n=No[e];if(n)return n;let s=Ot(e);if(s!=="filter"&&s in t)return No[e]=s;s=Yr(s);for(let i=0;i<Gc.length;i++){const r=Gc[i]+s;if(r in t)return No[e]=r}return e}const Kc="http://www.w3.org/1999/xlink";function kg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Kc,e.slice(6,e.length)):t.setAttributeNS(Kc,e,n);else{const r=R_(e);n==null||r&&!Wd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ng(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Wd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function us(t,e,n,s){t.addEventListener(e,n,s)}function Og(t,e,n,s){t.removeEventListener(e,n,s)}function Pg(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Dg(e);if(s){const c=r[e]=Fg(s,i);us(t,a,c,l)}else o&&(Og(t,a,o,l),r[e]=void 0)}}const qc=/(?:Once|Passive|Capture)$/;function Dg(t){let e;if(qc.test(t)){e={};let s;for(;s=t.match(qc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ms(t.slice(2)),e]}let Oo=0;const Mg=Promise.resolve(),Lg=()=>Oo||(Mg.then(()=>Oo=0),Oo=Date.now());function Fg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ot(Ug(s,n.value),e,5,[s])};return n.value=t,n.attached=Lg(),n}function Ug(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Qc=/^on[a-z]/,Bg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Rg(t,s,i):e==="style"?Ag(t,n,s):Kr(e)?Ka(e)||Pg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$g(t,e,s,i))?Ng(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),kg(t,e,s,i))};function $g(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Qc.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qc.test(e)&&Re(n)?!1:e in t}const Xt="transition",Ks="animation",pl=(t,{slots:e})=>ys(Eh,Hg(t),e);pl.displayName="Transition";const $h={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};pl.props=$e({},Eh.props,$h);const An=(t,e=[])=>{V(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yc=t=>t?V(t)?t.some(e=>e.length>1):t.length>1:!1;function Hg(t){const e={};for(const L in t)L in $h||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=Wg(i),v=m&&m[0],E=m&&m[1],{onBeforeEnter:S,onEnter:M,onEnterCancelled:C,onLeave:D,onLeaveCancelled:G,onBeforeAppear:ee=S,onAppear:ae=M,onAppearCancelled:H=C}=e,le=(L,ye,Me)=>{xn(L,ye?u:a),xn(L,ye?c:o),Me&&Me()},oe=(L,ye)=>{L._isLeaving=!1,xn(L,d),xn(L,p),xn(L,h),ye&&ye()},xe=L=>(ye,Me)=>{const Yt=L?ae:M,Ee=()=>le(ye,L,Me);An(Yt,[ye,Ee]),Jc(()=>{xn(ye,L?l:r),Zt(ye,L?u:a),Yc(Yt)||Xc(ye,s,v,Ee)})};return $e(e,{onBeforeEnter(L){An(S,[L]),Zt(L,r),Zt(L,o)},onBeforeAppear(L){An(ee,[L]),Zt(L,l),Zt(L,c)},onEnter:xe(!1),onAppear:xe(!0),onLeave(L,ye){L._isLeaving=!0;const Me=()=>oe(L,ye);Zt(L,d),zg(),Zt(L,h),Jc(()=>{L._isLeaving&&(xn(L,d),Zt(L,p),Yc(D)||Xc(L,s,E,Me))}),An(D,[L,Me])},onEnterCancelled(L){le(L,!1),An(C,[L])},onAppearCancelled(L){le(L,!0),An(H,[L])},onLeaveCancelled(L){oe(L),An(G,[L])}})}function Wg(t){if(t==null)return null;if(we(t))return[Po(t.enter),Po(t.leave)];{const e=Po(t);return[e,e]}}function Po(t){return D_(t)}function Zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function xn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Jc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let jg=0;function Xc(t,e,n,s){const i=t._endId=++jg,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Vg(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Vg(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Xt}Delay`),r=s(`${Xt}Duration`),o=Zc(i,r),a=s(`${Ks}Delay`),l=s(`${Ks}Duration`),c=Zc(a,l);let u=null,d=0,h=0;e===Xt?o>0&&(u=Xt,d=o,h=r.length):e===Ks?c>0&&(u=Ks,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Xt:Ks:null,h=u?u===Xt?r.length:l.length:0);const p=u===Xt&&/\b(transform|all)(,|$)/.test(s(`${Xt}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:p}}function Zc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>eu(n)+eu(t[s])))}function eu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function zg(){return document.body.offsetHeight}const tu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>lr(e,n):e};function Gg(t){t.target.composing=!0}function nu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const NA={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=tu(i);const r=s||i.props&&i.props.type==="number";us(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ea(a)),t._assign(a)}),n&&us(t,"change",()=>{t.value=t.value.trim()}),e||(us(t,"compositionstart",Gg),us(t,"compositionend",nu),us(t,"change",nu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=tu(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ea(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Kg=["ctrl","shift","alt","meta"],qg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kg.some(n=>t[`${n}Key`]&&!e.includes(n))},_a=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=qg[e[i]];if(r&&r(n,e))return}return t(n,...s)},Qg={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):qs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),qs(t,!0),s.enter(t)):s.leave(t,()=>{qs(t,!1)}):qs(t,e))},beforeUnmount(t,{value:e}){qs(t,e)}};function qs(t,e){t.style.display=e?t._vod:"none"}const Yg=$e({patchProp:Bg},Sg);let su;function Jg(){return su||(su=sg(Yg))}const Xg=(...t)=>{const e=Jg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Zg(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Zg(t){return Re(t)?document.querySelector(t):t}const Et=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ev={},tv={class:"mt-0 flex min-h-screen w-full items-center justify-center bg-bg-auth bg-cover bg-center"},nv={class:"item-center relative flex w-[25rem] justify-center rounded-[20px] border-2 border-white border-opacity-50 bg-transparent py-[1em] backdrop-blur-[15px]"},sv={class:"form-value"};function iv(t,e){const n=Be("RouterView");return X(),pe("section",tv,[x("div",nv,[x("div",sv,[se(n)])])])}const rv=Et(ev,[["render",iv]]),Hh="/assets/logo-0be89b09.png",ov={},av={class:"mt-8 bg-primary-100 text-gray-400"},lv={class:"container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row"},cv=x("img",{src:Hh,alt:"",class:"w-[150px]"},null,-1),uv=ug('<p class="mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-primary-200 sm:py-2 sm:pl-4"> © 2023 </p><p class="mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:py-2"> Cyborg — <a href="https://vk.com/milleyz" class="ml-1 text-gray-500 transition-colors hover:text-primary-200" target="_blank" rel="noopener noreferrer">@milleyz</a></p><p class="mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:py-2"> Design — <a href="https://templatemo.com/" class="ml-1 text-gray-500 transition-colors hover:text-primary-200" target="_blank" rel="noopener noreferrer">TemplateMo</a></p><span class="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start"><a href="https://vk.com/milleyz" target="_blank" rel="noopener noreferrer" class="ml-3 text-gray-66 transition-colors hover:text-primary-200"><i class="bx bx-md bxl-vk"></i></a><a href="https://github.com/milley69" target="_blank" rel="noopener noreferrer" class="ml-3 text-gray-66 transition-colors hover:text-primary-200"><i class="bx bx-md bxl-github"></i></a></span>',4);function dv(t,e){const n=Be("router-link");return X(),pe("footer",av,[x("div",lv,[se(n,{to:"/",class:"flex items-center justify-center font-medium text-white md:justify-start"},{default:Le(()=>[cv]),_:1}),uv])])}const hv=Et(ov,[["render",dv]]);class iu{constructor(e,n=350){this._target=e,this._duration=n}show(){const e=this._target;if(e.classList.contains("collapsing")||e.classList.contains("collapse_show"))return;e.classList.remove("collapsed");const n=e.offsetHeight;e.style.height=0,e.style.overflow="hidden",e.style.transition=`height ${this._duration}ms ease`,e.classList.add("collapsing"),e.offsetHeight,e.style.height=`${n}px`,window.setTimeout(()=>{e.classList.remove("collapsing"),e.classList.add("collapsed"),e.classList.add("collapse_show"),e.style.height="",e.style.transition="",e.style.overflow=""},this._duration)}hide(){const e=this._target;e.classList.contains("collapsing")||!e.classList.contains("collapse_show")||(e.style.height=`${e.offsetHeight}px`,e.offsetHeight,e.style.height=0,e.style.overflow="hidden",e.style.transition=`height ${this._duration}ms ease`,e.classList.remove("collapsed"),e.classList.remove("collapse_show"),e.classList.add("collapsing"),window.setTimeout(()=>{e.classList.remove("collapsing"),e.classList.add("collapsed"),e.style.height="",e.style.transition="",e.style.overflow=""},this._duration))}toggle(){this._target.classList.contains("collapse_show")?this.hide():this.show()}}const fv={},pv={class:"search-input hidden lg:block"},_v=x("form",{id:"search",action:"#",class:"relative"},[x("input",{type:"text",placeholder:"Type Something",id:"searchText",name:"searchKeyword",class:"h-[46px] rounded-[23px] border-none bg-secondary py-0 pr-15px pl-[45px] text-sm text-gray-66 placeholder:text-gray-66 focus-visible:border focus-visible:border-solid focus-visible:border-primary-200 focus-visible:outline-0"}),x("i",{class:"bx bx-search absolute left-5 top-[14px] text-[20px] text-gray-66"})],-1),mv=[_v];function gv(t,e){return X(),pe("div",pv,mv)}const vv=Et(fv,[["render",gv]]);function yv(){return Wh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Wh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const bv=typeof Proxy=="function",wv="devtools-plugin:setup",Ev="plugin:settings:set";let is,ma;function Iv(){var t;return is!==void 0||(typeof window<"u"&&window.performance?(is=!0,ma=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(is=!0,ma=global.perf_hooks.performance):is=!1),is}function Cv(){return Iv()?ma.now():Date.now()}class Tv{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return Cv()}},n&&n.on(Ev,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Sv(t,e){const n=t,s=Wh(),i=yv(),r=bv&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(wv,t,e);else{const o=r?new Tv(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var _l="store";function Rv(t){return t===void 0&&(t=null),At(t!==null?t:_l)}function Av(t,e){return t.filter(e)[0]}function ga(t,e){if(e===void 0&&(e=[]),t===null||typeof t!="object")return t;var n=Av(e,function(i){return i.original===t});if(n)return n.copy;var s=Array.isArray(t)?[]:{};return e.push({original:t,copy:s}),Object.keys(t).forEach(function(i){s[i]=ga(t[i],e)}),s}function Us(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function jh(t){return t!==null&&typeof t=="object"}function xv(t){return t&&typeof t.then=="function"}function kv(t,e){return function(){return t(e)}}function Vh(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function zh(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;oo(t,n,[],t._modules.root,!0),ml(t,n,e)}function ml(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};Us(i,function(o,a){r[a]=kv(o,t),Object.defineProperty(t.getters,a,{get:function(){return r[a]()},enumerable:!0})}),t._state=vn({data:e}),t.strict&&Mv(t),s&&n&&t._withCommit(function(){s.data=null})}function oo(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=gl(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=Nv(t,o,n);s.forEachMutation(function(u,d){var h=o+d;Ov(t,h,u,c)}),s.forEachAction(function(u,d){var h=u.root?d:o+d,p=u.handler||u;Pv(t,h,p,c)}),s.forEachGetter(function(u,d){var h=o+d;Dv(t,h,u,c)}),s.forEachChild(function(u,d){oo(t,e,n.concat(d),u,i)})}function Nv(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var l=Er(r,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:s?t.commit:function(r,o,a){var l=Er(r,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return Gh(t,e)}},state:{get:function(){return gl(t.state,n)}}}),i}function Gh(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Ov(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function Pv(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return xv(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function Dv(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function Mv(t){Hn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function gl(t,e){return e.reduce(function(n,s){return n[s]},t)}function Er(t,e,n){return jh(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Lv="vuex bindings",ru="vuex:mutations",Do="vuex:actions",rs="vuex",Fv=0;function Uv(t,e){Sv({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Lv]},function(n){n.addTimelineLayer({id:ru,label:"Vuex Mutations",color:ou}),n.addTimelineLayer({id:Do,label:"Vuex Actions",color:ou}),n.addInspector({id:rs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===rs)if(s.filter){var i=[];Yh(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Qh(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===rs){var i=s.nodeId;Gh(e,i),s.state=Hv(jv(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===rs){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(rs),n.sendInspectorState(rs),n.addTimelineEvent({layerId:ru,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=Fv++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Do,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Do,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var ou=8702998,Bv=6710886,$v=16777215,Kh={label:"namespaced",textColor:$v,backgroundColor:Bv};function qh(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Qh(t,e){return{id:e||"root",label:qh(e),tags:t.namespaced?[Kh]:[],children:Object.keys(t._children).map(function(n){return Qh(t._children[n],e+n+"/")})}}function Yh(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Kh]:[]}),Object.keys(e._children).forEach(function(i){Yh(t,e._children[i],n,s+i+"/")})}function Hv(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=Wv(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?qh(o):o,editable:!1,value:va(function(){return r[o]})}})}return i}function Wv(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=va(function(){return t[n]})}else e[n]=va(function(){return t[n]})}),e}function jv(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function va(t){try{return t()}catch(e){return e}}var It=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Jh={namespaced:{configurable:!0}};Jh.namespaced.get=function(){return!!this._rawModule.namespaced};It.prototype.addChild=function(e,n){this._children[e]=n};It.prototype.removeChild=function(e){delete this._children[e]};It.prototype.getChild=function(e){return this._children[e]};It.prototype.hasChild=function(e){return e in this._children};It.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};It.prototype.forEachChild=function(e){Us(this._children,e)};It.prototype.forEachGetter=function(e){this._rawModule.getters&&Us(this._rawModule.getters,e)};It.prototype.forEachAction=function(e){this._rawModule.actions&&Us(this._rawModule.actions,e)};It.prototype.forEachMutation=function(e){this._rawModule.mutations&&Us(this._rawModule.mutations,e)};Object.defineProperties(It.prototype,Jh);var Zn=function(e){this.register([],e,!1)};Zn.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Zn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};Zn.prototype.update=function(e){Xh([],this.root,e)};Zn.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new It(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&Us(n.modules,function(a,l){i.register(e.concat(l),a,s)})};Zn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};Zn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Xh(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Xh(t.concat(s),e.getChild(s),n.modules[s])}}function Vv(t){return new Qe(t)}var Qe=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Zn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,p){return l.call(o,h,p)},this.commit=function(h,p,m){return c.call(o,h,p,m)},this.strict=i;var u=this._modules.root.state;oo(this,u,[],this._modules.root),ml(this,u),s.forEach(function(d){return d(n)})},vl={state:{configurable:!0}};Qe.prototype.install=function(e,n){e.provide(n||_l,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Uv(e,this)};vl.state.get=function(){return this._state.data};vl.state.set=function(t){};Qe.prototype.commit=function(e,n,s){var i=this,r=Er(e,n,s),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};Qe.prototype.dispatch=function(e,n){var s=this,i=Er(e,n),r=i.type,o=i.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(h){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}u(h)},function(h){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,h)})}catch{}d(h)})})}};Qe.prototype.subscribe=function(e,n){return Vh(e,this._subscribers,n)};Qe.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Vh(s,this._actionSubscribers,n)};Qe.prototype.watch=function(e,n,s){var i=this;return Hn(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Qe.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Qe.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),oo(this,this.state,e,this._modules.get(e),s.preserveState),ml(this,this.state)};Qe.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=gl(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),zh(this)};Qe.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Qe.prototype.hotUpdate=function(e){this._modules.update(e),zh(this,!0)};Qe.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Qe.prototype,vl);var Zh=lo(function(t,e){var n={};return ao(e).forEach(function(s){var i=s.key,r=s.val;n[i]=function(){var a=this.$store.state,l=this.$store.getters;if(t){var c=co(this.$store,"mapState",t);if(!c)return;a=c.context.state,l=c.context.getters}return typeof r=="function"?r.call(this,a,l):a[r]},n[i].vuex=!0}),n}),ef=lo(function(t,e){var n={};return ao(e).forEach(function(s){var i=s.key,r=s.val;n[i]=function(){for(var a=[],l=arguments.length;l--;)a[l]=arguments[l];var c=this.$store.commit;if(t){var u=co(this.$store,"mapMutations",t);if(!u)return;c=u.context.commit}return typeof r=="function"?r.apply(this,[c].concat(a)):c.apply(this.$store,[r].concat(a))}}),n}),Pi=lo(function(t,e){var n={};return ao(e).forEach(function(s){var i=s.key,r=s.val;r=t+r,n[i]=function(){if(!(t&&!co(this.$store,"mapGetters",t)))return this.$store.getters[r]},n[i].vuex=!0}),n}),tf=lo(function(t,e){var n={};return ao(e).forEach(function(s){var i=s.key,r=s.val;n[i]=function(){for(var a=[],l=arguments.length;l--;)a[l]=arguments[l];var c=this.$store.dispatch;if(t){var u=co(this.$store,"mapActions",t);if(!u)return;c=u.context.dispatch}return typeof r=="function"?r.apply(this,[c].concat(a)):c.apply(this.$store,[r].concat(a))}}),n}),zv=function(t){return{mapState:Zh.bind(null,t),mapGetters:Pi.bind(null,t),mapMutations:ef.bind(null,t),mapActions:tf.bind(null,t)}};function ao(t){return Gv(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function Gv(t){return Array.isArray(t)||jh(t)}function lo(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function co(t,e,n){var s=t._modulesNamespaceMap[n];return s}function Kv(t){t===void 0&&(t={});var e=t.collapsed;e===void 0&&(e=!0);var n=t.filter;n===void 0&&(n=function(u,d,h){return!0});var s=t.transformer;s===void 0&&(s=function(u){return u});var i=t.mutationTransformer;i===void 0&&(i=function(u){return u});var r=t.actionFilter;r===void 0&&(r=function(u,d){return!0});var o=t.actionTransformer;o===void 0&&(o=function(u){return u});var a=t.logMutations;a===void 0&&(a=!0);var l=t.logActions;l===void 0&&(l=!0);var c=t.logger;return c===void 0&&(c=console),function(u){var d=ga(u.state);typeof c>"u"||(a&&u.subscribe(function(h,p){var m=ga(p);if(n(h,d,m)){var v=cu(),E=i(h),S="mutation "+h.type+v;au(c,S,e),c.log("%c prev state","color: #9E9E9E; font-weight: bold",s(d)),c.log("%c mutation","color: #03A9F4; font-weight: bold",E),c.log("%c next state","color: #4CAF50; font-weight: bold",s(m)),lu(c)}d=m}),l&&u.subscribeAction(function(h,p){if(r(h,p)){var m=cu(),v=o(h),E="action "+h.type+m;au(c,E,e),c.log("%c action","color: #03A9F4; font-weight: bold",v),lu(c)}}))}}function au(t,e,n){var s=n?t.groupCollapsed:t.group;try{s.call(t,e)}catch{t.log(e)}}function lu(t){try{t.groupEnd()}catch{t.log("—— log end ——")}}function cu(){var t=new Date;return" @ "+nr(t.getHours(),2)+":"+nr(t.getMinutes(),2)+":"+nr(t.getSeconds(),2)+"."+nr(t.getMilliseconds(),3)}function qv(t,e){return new Array(e+1).join(t)}function nr(t,e){return qv("0",e-t.toString().length)+t}var Qv={version:"4.0.2",Store:Qe,storeKey:_l,createStore:Vv,useStore:Rv,mapState:Zh,mapMutations:ef,mapGetters:Pi,mapActions:tf,createNamespacedHelpers:zv,createLogger:Kv};const Yv=Qv,Jv="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRTNDRDZBQzA2Q0QxMUVEQjRFOUQ3QkM5REMwRDYyOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRTNDRDZBRDA2Q0QxMUVEQjRFOUQ3QkM5REMwRDYyOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNFM0NENkFBMDZDRDExRURCNEU5RDdCQzlEQzBENjI5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNFM0NENkFCMDZDRDExRURCNEU5RDdCQzlEQzBENjI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABAMDAwMDBAMDBAYEAwQGBwUEBAUHCAYGBwYGCAoICQkJCQgKCgwMDAwMCgwMDQ0MDBERERERFBQUFBQUFBQUFAEEBQUIBwgPCgoPFA4ODhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAJAAkAwERAAIRAQMRAf/EAJoAAQADAQEAAAAAAAAAAAAAAAYDBwgEBQEAAwACAwEAAAAAAAAAAAAABQYHAggBAwQJEAAABQIEBAQEBgMAAAAAAAABEQIDBBIFACETBjEiFAdRMkIVYXFiFoIjQ2OTJSRUFxEAAQIDBQQGCAcBAAAAAAAAARECABIDITFBEwRRYSIFcYGRoUIj8LHxMmIUFQbRUnKisjNjFv/aAAwDAQACEQMRAD8AzLP7WoZcEIVzNIcAeRmfgYYtP/Lte+VjyOkR53UXgKCEgtcbAm1rW2/doCnUAYtJeAXPlSB5/DC5q9Lp9O6XPY8jBsxI7AR3x0mnU2d8e5du1m6bdaIu4Igwr9YpQJAJ9gmM3JDTwtg4LL7bYg606lI+VaAP0ngbXDWDE+l+/qjmkwuJtRN34QSlRZlxjshDiqkLjo0VuRWxVUkzSKqQ8wHSJ/LAirLKSDfB+u2pWZTAYpptlmYLHNvaSmIUgk23RF9n7s6frPZJvTFVqaCyp8eGBWaxUmHaI7fomuys7JfJtSL3nWPcG548q2bWjqnXJcZ55YMqQnTjNFrvqUtSQBLaRNQnjYDmuqFHldV7DxHhB+J1lnUsDArngDxWCDFx2Te78O19kTZuytvNwVKhR5zUiJFdWt8hF65y2QcW6rkAAUsSSeQAeJDoQKvAhQDAEmzYNvRfGOp0L6QLyW9ojmkdtLx27v8AeIW4r3Et7cG0vXCLdrPPbkszHxSIwmGHGRGtbjyQ5FACkoAVZAQ4KuoNALVKOGIlPYdkDA54Ci5Yl7f3PcG49wQ71tcGWd/QnUNXyLytxrpbXBBKn1IKnUQOThBmYKDMBwj/AHAKFXRudUEpZ70v7XjZbYYYeT1KwrgUzacDiMRGqtAOqLPRPyHkXhiIzFN8UtSt57YoqJEZlRnIgIBLAoFiQKBEG3a0ksMiNKjJQcBxvfy+mzLNNzQWpKcWkxIWqW2QU3ZsyzWTb7z1ltjapjrqU3Ba3hDRjiBooSo8hWGZZ4nn3RoKPL6lF9HgD5gQtii0X2gXwY0ZnovBaCbLbrPbBuBYLe7EeWqKgRBlSkKInKsuAjkAjwPChU1dRxmJKxmNNTISUQg7aWZc3ufbLZtyIIPQgddvktsdNEeNSChSZ5igQIR9Q5AGPNqdfT0unfVODXAzJxTNQNaNq9eMY09Lm6hrKYuIUjDpjW2mHVVllUZfAzxAkMku6KV4lilXZdqtjIsy32IykgdDjiED8yETx9BZmUwQSBEdcQ1LQINuzLFuydNs6binQFhCpT8YAcpS2qpKjUFOQj44m33jqtJUpgl0z2JJLtN67kgrypxerQQmPRhBNcddvkPRJCtZUGQTgo9bbefKH1ZYnNHzADtgm/gcRsjQnaDZKdk2NKXH2pc7cDbl3mSmM2lazrYtNpUIAKgbTx+oRxLOe6w6iu4EFuU6VDfipTf6oZuW6T5dl6l4mPcnd64f0hqHhegokYBV1PWf2etRq/5X+xSfMVfr48cbdtzfGqLbt78Y1+4VthncfbdWF9gUe5abnUaZ6HRkGr1dfMRkR51cMLnPcuQTyqtkqr1/F6XQx8vWfyV3rd7Ina6jUerp90Ll1atMyAq6eYsAdJKm6GGqq7+6EXan/rnv0j7Z1NEv7Dr6faDqA9M8qPLTpc+CvOfofy4+qp7vBJ/cv+ctqfr4Ugfofquf5F2M/uJ6flt6o1H+f036Pueh+50nVF/Jpn+LGunlZ3jyZ/hzMv8AhP3RS+KXCZN8s3rReuP/2Q==";const Xv={name:"Header",components:{HeaderSearch:vv},data(){return{menubar:!1,login:!1,links:[{title:"Home",path:"/",class:!0},{title:"Browse",path:"/browse"},{title:"Streams",path:"/streams"}]}},computed:{...Pi(["getUser"])},mounted(){this.getUser.info?this.login=!0:this.login=!1},methods:{openNavbar(){this.menubar=!this.menubar,new iu(this.$refs.Navbar,450).toggle()},closeNavbar(){this.menubar=!this.menubar,new iu(this.$refs.Navbar,450).toggle()}}},yl=t=>(vh("data-v-182297a4"),t=t(),yh(),t),Zv={class:"absolute left-0 right-0 top-0 z-50 h-20 bg-[#f7f7f7] py-0 px-15px text-center shadow-none transition-all duration-500 ease-in lg:top-4 lg:h-[70px] lg:bg-transparent"},ey={class:"container p-0"},ty={class:"-mx-3 mt-0 flex flex-wrap"},ny={class:"mt-0 w-full max-w-full shrink-0 grow-0 basis-auto pr-3 pl-3"},sy={class:"flex min-h-[5rem] overflow-hidden rounded-none bg-transparent px-0 py-15px lg:rounded-[50px]","aria-label":"nav"},iy=yl(()=>x("img",{src:Hh,alt:"",class:"w-[191px]"},null,-1)),ry={class:"z-[999] mt-0 mr-0 hidden basis-[70%] justify-end text-right align-middle transition-all duration-300 lg:inline-flex"},oy={key:0,class:"inline-block px-[5px] xl:px-[10px]"},ay=yl(()=>x("img",{src:Jv,alt:"",class:"ml-[5px] inline w-full max-w-[30px] overflow-hidden rounded-full align-middle"},null,-1)),ly={key:1,class:"my-auto inline-block px-[5px] xl:px-[10px]"},cy={ref:"Navbar",class:"collapsed relative z-[999] float-none ml-0 !mt-[65px] mr-0 h-auto w-full basis-full text-center transition-all lg:hidden"},uy=yl(()=>x("span",null,"Menu",-1)),dy=[uy];function hy(t,e,n,s,i,r){const o=Be("router-link"),a=Be("HeaderSearch");return X(),pe("header",Zv,[x("div",ey,[x("div",ty,[x("div",ny,[x("nav",sy,[se(o,{to:"/",class:"absolute top-15px left-7/5 mr-7/5 basis-1/4 transition-all duration-300 lg:static xl:mr-[5%] xl:border-r xl:border-solid xl:border-secondary"},{default:Le(()=>[iy]),_:1}),se(a),x("ul",ry,[(X(!0),pe(De,null,br(i.links,(l,c)=>(X(),pe("li",{class:"inline-block px-[5px] xl:px-[10px]",key:l.path},[se(o,{to:l.path,class:"block rounded-[18px] border-transparent py-[13px] px-[10px] text-sm capitalize tracking-[.3px] text-gray-66 transition-all duration-300 hover:text-primary-200"},{default:Le(()=>[Fe(st(l.title),1)]),_:2},1032,["to"])]))),128)),i.login?(X(),pe("li",oy,[se(o,{class:"block rounded-[23px] border-transparent border-gray-50 bg-secondary py-2 pr-[10px] pl-5 text-sm capitalize tracking-[.3px] text-gray-66 transition-all duration-300 hover:text-primary-200",to:"/profile"},{default:Le(()=>[Fe("Profile "),ay]),_:1})])):(X(),pe("li",ly,[se(o,{class:"block rounded-[23px] border-transparent border-gray-50 bg-secondary py-2 px-5 text-sm capitalize tracking-[.3px] text-gray-66 transition-all duration-300 hover:text-primary-200",to:"/login"},{default:Le(()=>[Fe("Login")]),_:1})]))]),x("ul",cy,[(X(!0),pe(De,null,br(i.links,l=>(X(),pe("li",{class:hi(["inline-block w-full border-b-[1px] border-[#eee] bg-white",{"border-t-[1px]":l.class}]),key:l.path,onClick:e[0]||(e[0]=(...c)=>r.closeNavbar&&r.closeNavbar(...c))},[se(o,{class:"block h-[50px] rounded-[18px] border-none bg-white p-0 text-[14px] font-normal capitalize leading-[50px] text-[#1e1e1e]",to:l.path},{default:Le(()=>[Fe(st(l.title),1)]),_:2},1032,["to"])],2))),128)),i.login?(X(),pe("li",{key:0,class:"inline-block w-full border-b-[1px] border-[#eee] bg-white",onClick:e[1]||(e[1]=(...l)=>r.closeNavbar&&r.closeNavbar(...l))},[se(o,{class:"block h-[50px] rounded-[18px] border-none bg-white p-0 text-[14px] font-normal capitalize leading-[50px] text-[#1e1e1e]",to:"/profile"},{default:Le(()=>[Fe("Profile")]),_:1})])):(X(),pe("li",{key:1,class:"inline-block w-full border-b-[1px] border-[#eee] bg-white",onClick:e[2]||(e[2]=(...l)=>r.closeNavbar&&r.closeNavbar(...l))},[se(o,{class:"block h-[50px] rounded-[18px] border-none bg-white p-0 text-[14px] font-normal capitalize leading-[50px] text-[#1e1e1e]",to:"/login"},{default:Le(()=>[Fe("Login")]),_:1})]))],512),x("a",{class:hi(["menu-trigger",{active:i.menubar}]),onClick:e[3]||(e[3]=(...l)=>r.openNavbar&&r.openNavbar(...l))},dy,2)])])])])])}const fy=Et(Xv,[["render",hy],["__scopeId","data-v-182297a4"]]),py={components:{Footer:hv,Header:fy},data(){return{loader:!0}},async mounted(){Object.keys(this.$store.getters.getUser).length&&await this.$store.dispatch("fetchUser"),this.loader=!1}},_y={class:"container"},my={class:"-mx-3 mt-0 flex flex-wrap"},gy={class:"mt-0 w-full max-w-full shrink-0 grow-0 basis-auto px-3"},vy={class:"mt-28 rounded-3xl bg-secondary py-0 px-7/5 md:p-15"};function yy(t,e,n,s,i,r){const o=Be("Header"),a=Be("Loader"),l=Be("RouterView"),c=Be("Footer");return X(),pe(De,null,[i.loader?Wn("",!0):(X(),Bt(o,{key:0})),x("div",_y,[x("div",my,[x("div",gy,[x("div",vy,[i.loader?(X(),Bt(a,{key:0})):(X(),Bt(l,{key:t.$route.meta.useID?t.$route.path:void 0}))])])])]),i.loader?Wn("",!0):(X(),Bt(c,{key:1}))],64)}const by=Et(py,[["render",yy]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ds=typeof window<"u";function wy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Mo(t,e){const n={};for(const s in e){const i=e[s];n[s]=bt(i)?i.map(t):t(i)}return n}const ri=()=>{},bt=Array.isArray,Ey=/\/$/,Iy=t=>t.replace(Ey,"");function Lo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Ry(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Cy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function uu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ty(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Rs(e.matched[s],n.matched[i])&&nf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Sy(t[n],e[n]))return!1;return!0}function Sy(t,e){return bt(t)?du(t,e):bt(e)?du(e,t):t===e}function du(t,e){return bt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ry(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var yi;(function(t){t.pop="pop",t.push="push"})(yi||(yi={}));var oi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(oi||(oi={}));function Ay(t){if(!t)if(ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Iy(t)}const xy=/^[^#]+#/;function ky(t,e){return t.replace(xy,"#")+e}function Ny(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const uo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Oy(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Ny(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hu(t,e){return(history.state?history.state.position-e:-1)+t}const ya=new Map;function Py(t,e){ya.set(t,e)}function Dy(t){const e=ya.get(t);return ya.delete(t),e}let My=()=>location.protocol+"//"+location.host;function sf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),uu(l,"")}return uu(n,t)+s+i}function Ly(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const p=sf(t,location),m=n.value,v=e.value;let E=0;if(h){if(n.value=p,e.value=h,o&&o===m){o=null;return}E=v?h.position-v.position:0}else s(p);i.forEach(S=>{S(n.value,m,{delta:E,type:yi.pop,direction:E?E>0?oi.forward:oi.back:oi.unknown})})};function l(){o=n.value}function c(h){i.push(h);const p=()=>{const m=i.indexOf(h);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ce({},h.state,{scroll:uo()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function fu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?uo():null}}function Fy(t){const{history:e,location:n}=window,s={value:sf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:My()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=ce({},e.state,fu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ce({},i.value,e.state,{forward:l,scroll:uo()});r(u.current,u,!0);const d=ce({},fu(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Uy(t){t=Ay(t);const e=Fy(t),n=Ly(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ce({location:"",base:t,go:s,createHref:ky.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function By(t){return typeof t=="string"||t&&typeof t=="object"}function rf(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},of=Symbol("");var pu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pu||(pu={}));function As(t,e){return ce(new Error,{type:t,[of]:!0},e)}function Lt(t,e){return t instanceof Error&&of in t&&(e==null||!!(t.type&e))}const _u="[^/]+?",$y={sensitive:!1,strict:!1,start:!0,end:!0},Hy=/[.+*?^${}()[\]/\\]/g;function Wy(t,e){const n=ce({},$y,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let p=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(Hy,"\\$&"),p+=40;else if(h.type===1){const{value:m,repeatable:v,optional:E,regexp:S}=h;r.push({name:m,repeatable:v,optional:E});const M=S||_u;if(M!==_u){p+=10;try{new RegExp(`(${M})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${M}): `+D.message)}}let C=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(C=E&&c.length<2?`(?:/${C})`:"/"+C),E&&(C+="?"),i+=C,p+=20,E&&(p+=-8),v&&(p+=-20),M===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",m=r[h-1];d[m.name]=p&&m.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:E}=p,S=m in c?c[m]:"";if(bt(S)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const M=bt(S)?S.join("/"):S;if(!M)if(E)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function jy(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Vy(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=jy(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(mu(s))return 1;if(mu(i))return-1}return i.length-s.length}function mu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zy={type:0,value:""},Gy=/[a-zA-Z0-9_]/;function Ky(t){if(!t)return[[]];if(t==="/")return[[zy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:Gy.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function qy(t,e,n){const s=Wy(Ky(t.path),n),i=ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Qy(t,e){const n=[],s=new Map;e=yu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const p=!h,m=Yy(u);m.aliasOf=h&&h.record;const v=yu(e,u),E=[m];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of C)E.push(ce({},m,{components:h?h.record.components:m.components,path:D,aliasOf:h?h.record:m}))}let S,M;for(const C of E){const{path:D}=C;if(d&&D[0]!=="/"){const G=d.record.path,ee=G[G.length-1]==="/"?"":"/";C.path=d.record.path+(D&&ee+D)}if(S=qy(C,d,v),h?h.alias.push(S):(M=M||S,M!==S&&M.alias.push(S),p&&u.name&&!vu(S)&&o(u.name)),m.children){const G=m.children;for(let ee=0;ee<G.length;ee++)r(G[ee],S,h&&h.children[ee])}h=h||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return M?()=>{o(M)}:ri}function o(u){if(rf(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Vy(u,n[d])>=0&&(u.record.path!==n[d].record.path||!af(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!vu(u)&&s.set(u.record.name,u)}function c(u,d){let h,p={},m,v;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw As(1,{location:u});v=h.record.name,p=ce(gu(d.params,h.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&gu(u.params,h.keys.map(M=>M.name))),m=h.stringify(p)}else if("path"in u)m=u.path,h=n.find(M=>M.re.test(m)),h&&(p=h.parse(m),v=h.record.name);else{if(h=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!h)throw As(1,{location:u,currentLocation:d});v=h.record.name,p=ce({},d.params,u.params),m=h.stringify(p)}const E=[];let S=h;for(;S;)E.unshift(S.record),S=S.parent;return{name:v,path:m,params:p,matched:E,meta:Xy(E)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function gu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Yy(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Jy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Jy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function vu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xy(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function yu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function af(t,e){return e.children.some(n=>n===t||af(t,n))}const lf=/#/g,Zy=/&/g,eb=/\//g,tb=/=/g,nb=/\?/g,cf=/\+/g,sb=/%5B/g,ib=/%5D/g,uf=/%5E/g,rb=/%60/g,df=/%7B/g,ob=/%7C/g,hf=/%7D/g,ab=/%20/g;function bl(t){return encodeURI(""+t).replace(ob,"|").replace(sb,"[").replace(ib,"]")}function lb(t){return bl(t).replace(df,"{").replace(hf,"}").replace(uf,"^")}function ba(t){return bl(t).replace(cf,"%2B").replace(ab,"+").replace(lf,"%23").replace(Zy,"%26").replace(rb,"`").replace(df,"{").replace(hf,"}").replace(uf,"^")}function cb(t){return ba(t).replace(tb,"%3D")}function ub(t){return bl(t).replace(lf,"%23").replace(nb,"%3F")}function db(t){return t==null?"":ub(t).replace(eb,"%2F")}function Ir(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function hb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(cf," "),o=r.indexOf("="),a=Ir(o<0?r:r.slice(0,o)),l=o<0?null:Ir(r.slice(o+1));if(a in e){let c=e[a];bt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function bu(t){let e="";for(let n in t){const s=t[n];if(n=cb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(bt(s)?s.map(r=>r&&ba(r)):[s&&ba(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function fb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=bt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const pb=Symbol(""),wu=Symbol(""),wl=Symbol(""),ff=Symbol(""),wa=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function sn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(As(4,{from:n,to:e})):d instanceof Error?a(d):By(d)?a(As(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Fo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(_b(a)){const c=(a.__vccOpts||a)[e];c&&i.push(sn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=wy(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&sn(h,n,s,r,o)()}))}}return i}function _b(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Eu(t){const e=At(wl),n=At(ff),s=it(()=>e.resolve(gs(t.to))),i=it(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Rs.bind(null,u));if(h>-1)return h;const p=Iu(l[c-2]);return c>1&&Iu(u)===p&&d[d.length-1].path!==p?d.findIndex(Rs.bind(null,l[c-2])):h}),r=it(()=>i.value>-1&&yb(n.params,s.value.params)),o=it(()=>i.value>-1&&i.value===n.matched.length-1&&nf(n.params,s.value.params));function a(l={}){return vb(l)?e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(ri):Promise.resolve()}return{route:s,href:it(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const mb=ol({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Eu,setup(t,{slots:e}){const n=vn(Eu(t)),{options:s}=At(wl),i=it(()=>({[Cu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Cu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ys("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),gb=mb;function vb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yb(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!bt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Iu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cu=(t,e,n)=>t??e??n,bb=ol({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=At(wa),i=it(()=>t.route||s.value),r=At(wu,0),o=it(()=>{let c=gs(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=it(()=>i.value.matched[o.value]);cr(wu,it(()=>o.value+1)),cr(pb,a),cr(wa,i);const l=cs();return Hn(()=>[l.value,a.value,t.name],([c,u,d],[h,p,m])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Rs(u,p)||!h)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Tu(n.default,{Component:h,route:c});const p=d.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,E=ys(h,ce({},m,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Tu(n.default,{Component:E,route:c})||E}}});function Tu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wb=bb;function Eb(t){const e=Qy(t.routes,t),n=t.parseQuery||hb,s=t.stringifyQuery||bu,i=t.history,r=Qs(),o=Qs(),a=Qs(),l=hm(en);let c=en;ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Mo.bind(null,b=>""+b),d=Mo.bind(null,db),h=Mo.bind(null,Ir);function p(b,P){let N,U;return rf(b)?(N=e.getRecordMatcher(b),U=P):U=b,e.addRoute(U,N)}function m(b){const P=e.getRecordMatcher(b);P&&e.removeRoute(P)}function v(){return e.getRoutes().map(b=>b.record)}function E(b){return!!e.getRecordMatcher(b)}function S(b,P){if(P=ce({},P||l.value),typeof b=="string"){const f=Lo(n,b,P.path),_=e.resolve({path:f.path},P),g=i.createHref(f.fullPath);return ce(f,_,{params:h(_.params),hash:Ir(f.hash),redirectedFrom:void 0,href:g})}let N;if("path"in b)N=ce({},b,{path:Lo(n,b.path,P.path).path});else{const f=ce({},b.params);for(const _ in f)f[_]==null&&delete f[_];N=ce({},b,{params:d(b.params)}),P.params=d(P.params)}const U=e.resolve(N,P),te=b.hash||"";U.params=u(h(U.params));const Ie=Cy(s,ce({},b,{hash:lb(te),path:U.path})),q=i.createHref(Ie);return ce({fullPath:Ie,hash:te,query:s===bu?fb(b.query):b.query||{}},U,{redirectedFrom:void 0,href:q})}function M(b){return typeof b=="string"?Lo(n,b,l.value.path):ce({},b)}function C(b,P){if(c!==b)return As(8,{from:P,to:b})}function D(b){return ae(b)}function G(b){return D(ce(M(b),{replace:!0}))}function ee(b){const P=b.matched[b.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let U=typeof N=="function"?N(b):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),ce({query:b.query,hash:b.hash,params:"path"in U?{}:b.params},U)}}function ae(b,P){const N=c=S(b),U=l.value,te=b.state,Ie=b.force,q=b.replace===!0,f=ee(N);if(f)return ae(ce(M(f),{state:typeof f=="object"?ce({},te,f.state):te,force:Ie,replace:q}),P||N);const _=N;_.redirectedFrom=P;let g;return!Ie&&Ty(s,U,N)&&(g=As(16,{to:_,from:U}),Tn(U,U,!0,!1)),(g?Promise.resolve(g):le(_,U)).catch(y=>Lt(y)?Lt(y,2)?y:lt(y):_e(y,_,U)).then(y=>{if(y){if(Lt(y,2))return ae(ce({replace:q},M(y.to),{state:typeof y.to=="object"?ce({},te,y.to.state):te,force:Ie}),P||_)}else y=xe(_,U,!0,q,te);return oe(_,U,y),y})}function H(b,P){const N=C(b,P);return N?Promise.reject(N):Promise.resolve()}function le(b,P){let N;const[U,te,Ie]=Ib(b,P);N=Fo(U.reverse(),"beforeRouteLeave",b,P);for(const f of U)f.leaveGuards.forEach(_=>{N.push(sn(_,b,P))});const q=H.bind(null,b,P);return N.push(q),os(N).then(()=>{N=[];for(const f of r.list())N.push(sn(f,b,P));return N.push(q),os(N)}).then(()=>{N=Fo(te,"beforeRouteUpdate",b,P);for(const f of te)f.updateGuards.forEach(_=>{N.push(sn(_,b,P))});return N.push(q),os(N)}).then(()=>{N=[];for(const f of b.matched)if(f.beforeEnter&&!P.matched.includes(f))if(bt(f.beforeEnter))for(const _ of f.beforeEnter)N.push(sn(_,b,P));else N.push(sn(f.beforeEnter,b,P));return N.push(q),os(N)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),N=Fo(Ie,"beforeRouteEnter",b,P),N.push(q),os(N))).then(()=>{N=[];for(const f of o.list())N.push(sn(f,b,P));return N.push(q),os(N)}).catch(f=>Lt(f,8)?f:Promise.reject(f))}function oe(b,P,N){for(const U of a.list())U(b,P,N)}function xe(b,P,N,U,te){const Ie=C(b,P);if(Ie)return Ie;const q=P===en,f=ds?history.state:{};N&&(U||q?i.replace(b.fullPath,ce({scroll:q&&f&&f.scroll},te)):i.push(b.fullPath,te)),l.value=b,Tn(b,P,N,q),lt()}let L;function ye(){L||(L=i.listen((b,P,N)=>{if(!Qi.listening)return;const U=S(b),te=ee(U);if(te){ae(ce(te,{replace:!0}),U).catch(ri);return}c=U;const Ie=l.value;ds&&Py(hu(Ie.fullPath,N.delta),uo()),le(U,Ie).catch(q=>Lt(q,12)?q:Lt(q,2)?(ae(q.to,U).then(f=>{Lt(f,20)&&!N.delta&&N.type===yi.pop&&i.go(-1,!1)}).catch(ri),Promise.reject()):(N.delta&&i.go(-N.delta,!1),_e(q,U,Ie))).then(q=>{q=q||xe(U,Ie,!1),q&&(N.delta&&!Lt(q,8)?i.go(-N.delta,!1):N.type===yi.pop&&Lt(q,20)&&i.go(-1,!1)),oe(U,Ie,q)}).catch(ri)}))}let Me=Qs(),Yt=Qs(),Ee;function _e(b,P,N){lt(b);const U=Yt.list();return U.length?U.forEach(te=>te(b,P,N)):console.error(b),Promise.reject(b)}function ue(){return Ee&&l.value!==en?Promise.resolve():new Promise((b,P)=>{Me.add([b,P])})}function lt(b){return Ee||(Ee=!b,ye(),Me.list().forEach(([P,N])=>b?N(b):P()),Me.reset()),b}function Tn(b,P,N,U){const{scrollBehavior:te}=t;if(!ds||!te)return Promise.resolve();const Ie=!N&&Dy(hu(b.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return fh().then(()=>te(b,P,Ie)).then(q=>q&&Oy(q)).catch(q=>_e(q,b,P))}const ct=b=>i.go(b);let Ye;const ns=new Set,Qi={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:E,getRoutes:v,resolve:S,options:t,push:D,replace:G,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Yt.add,isReady:ue,install(b){const P=this;b.component("RouterLink",gb),b.component("RouterView",wb),b.config.globalProperties.$router=P,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(l)}),ds&&!Ye&&l.value===en&&(Ye=!0,D(i.location).catch(te=>{}));const N={};for(const te in en)N[te]=it(()=>l.value[te]);b.provide(wl,P),b.provide(ff,vn(N)),b.provide(wa,l);const U=b.unmount;ns.add(b),b.unmount=function(){ns.delete(b),ns.size<1&&(c=en,L&&L(),L=null,l.value=en,Ye=!1,Ee=!1),U()}}};return Qi}function os(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Ib(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Rs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Rs(c,l))||i.push(l))}return[n,s,i]}const Cb={components:{MainLayout:by,AuthLayout:rv},computed:{layout(){return(this.$route.meta.layout||"auth")+"-layout"}}};function Tb(t,e,n,s,i,r){const o=Be("RouterView");return X(),Bt(jm(r.layout),null,{default:Le(()=>[se(o)]),_:1})}const Sb=Et(Cb,[["render",Tb]]),Rb="modulepreload",Ab=function(t){return"/"+t},Su={},as=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Ab(r),r in Su)return;Su[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const d=i[u];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Rb,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
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
 */const pf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Bs(e)},Bs=function(t){return new Error("Firebase Database ("+pf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const _f=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),s.push(n[u],n[d],n[h],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_f(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new kb;const h=r<<2|a>>4;if(s.push(h),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mf=function(t){const e=_f(t);return El.encodeByteArray(e,!0)},Cr=function(t){return mf(t).replace(/\./g,"")},Tr=function(t){try{return El.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Nb(t){return gf(void 0,t)}function gf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ob(n)||(t[n]=gf(t[n],e[n]));return t}function Ob(t){return t!=="__proto__"}/**
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
 */function Pb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Db=()=>Pb().__FIREBASE_DEFAULTS__,Mb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tr(t[1]);return e&&JSON.parse(e)},Il=()=>{try{return Db()||Mb()||Lb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vf=t=>{var e,n;return(n=(e=Il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yf=t=>{const e=vf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Fb=()=>{var t;return(t=Il())===null||t===void 0?void 0:t.config},bf=t=>{var e;return(e=Il())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Di{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function wf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cr(JSON.stringify(n)),Cr(JSON.stringify(o)),a].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Ub(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bb(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function If(){return pf.NODE_ADMIN===!0}function $b(){try{return typeof indexedDB=="object"}catch{return!1}}function Hb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Wb="FirebaseError";class qt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Wb,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?jb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,s)}}function jb(t,e){return t.replace(Vb,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Vb=/\{\$([^}]+)}/g;/**
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
 */function bi(t){return JSON.parse(t)}function Ne(t){return JSON.stringify(t)}/**
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
 */const Cf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=bi(Tr(r[0])||""),n=bi(Tr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},zb=function(t){const e=Cf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Gb=function(t){const e=Cf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ea(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ru(r)&&Ru(o)){if(!Rr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ru(t){return t!==null&&typeof t=="object"}/**
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
 */function $s(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ni(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Kb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function qb(t,e){const n=new Qb(t,e);return n.subscribe.bind(n)}class Qb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Yb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Uo),i.error===void 0&&(i.error=Uo),i.complete===void 0&&(i.complete=Uo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uo(){}function ho(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Jb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nn="[DEFAULT]";/**
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
 */class Xb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Di;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ew(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Zb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zb(t){return t===Nn?void 0:t}function ew(t){return t.instantiationMode==="EAGER"}/**
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
 */class tw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const nw={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},sw=fe.INFO,iw={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},rw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=iw[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=sw,this._logHandler=rw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const ow=(t,e)=>e.some(n=>t instanceof n);let Au,xu;function aw(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lw(){return xu||(xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tf=new WeakMap,Ia=new WeakMap,Sf=new WeakMap,Bo=new WeakMap,Sl=new WeakMap;function cw(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(fn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tf.set(n,t)}).catch(()=>{}),Sl.set(e,t),e}function uw(t){if(Ia.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ia.set(t,e)}let Ca={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dw(t){Ca=t(Ca)}function hw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($o(this),e,...n);return Sf.set(s,e.sort?e.sort():[e]),fn(s)}:lw().includes(t)?function(...e){return t.apply($o(this),e),fn(Tf.get(this))}:function(...e){return fn(t.apply($o(this),e))}}function fw(t){return typeof t=="function"?hw(t):(t instanceof IDBTransaction&&uw(t),ow(t,aw())?new Proxy(t,Ca):t)}function fn(t){if(t instanceof IDBRequest)return cw(t);if(Bo.has(t))return Bo.get(t);const e=fw(t);return e!==t&&(Bo.set(t,e),Sl.set(e,t)),e}const $o=t=>Sl.get(t);function pw(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=fn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(fn(o.result),l.oldVersion,l.newVersion,fn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const _w=["get","getKey","getAll","getAllKeys","count"],mw=["put","add","delete","clear"],Ho=new Map;function ku(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ho.get(e))return Ho.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=mw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_w.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ho.set(e,r),r}dw(t=>({...t,get:(e,n,s)=>ku(e,n)||t.get(e,n,s),has:(e,n)=>!!ku(e,n)||t.has(e,n)}));/**
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
 */class gw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function vw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ta="@firebase/app",Nu="0.9.4";/**
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
 */const Gn=new Tl("@firebase/app"),yw="@firebase/app-compat",bw="@firebase/analytics-compat",ww="@firebase/analytics",Ew="@firebase/app-check-compat",Iw="@firebase/app-check",Cw="@firebase/auth",Tw="@firebase/auth-compat",Sw="@firebase/database",Rw="@firebase/database-compat",Aw="@firebase/functions",xw="@firebase/functions-compat",kw="@firebase/installations",Nw="@firebase/installations-compat",Ow="@firebase/messaging",Pw="@firebase/messaging-compat",Dw="@firebase/performance",Mw="@firebase/performance-compat",Lw="@firebase/remote-config",Fw="@firebase/remote-config-compat",Uw="@firebase/storage",Bw="@firebase/storage-compat",$w="@firebase/firestore",Hw="@firebase/firestore-compat",Ww="firebase",jw="9.17.2";/**
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
 */const Sa="[DEFAULT]",Vw={[Ta]:"fire-core",[yw]:"fire-core-compat",[ww]:"fire-analytics",[bw]:"fire-analytics-compat",[Iw]:"fire-app-check",[Ew]:"fire-app-check-compat",[Cw]:"fire-auth",[Tw]:"fire-auth-compat",[Sw]:"fire-rtdb",[Rw]:"fire-rtdb-compat",[Aw]:"fire-fn",[xw]:"fire-fn-compat",[kw]:"fire-iid",[Nw]:"fire-iid-compat",[Ow]:"fire-fcm",[Pw]:"fire-fcm-compat",[Dw]:"fire-perf",[Mw]:"fire-perf-compat",[Lw]:"fire-rc",[Fw]:"fire-rc-compat",[Uw]:"fire-gcs",[Bw]:"fire-gcs-compat",[$w]:"fire-fst",[Hw]:"fire-fst-compat","fire-js":"fire-js",[Ww]:"fire-js-all"};/**
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
 */const Ar=new Map,Ra=new Map;function zw(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(Ra.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;Ra.set(e,t);for(const n of Ar.values())zw(n,t);return!0}function po(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Gw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pn=new Mi("app","Firebase",Gw);/**
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
 */class Kw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=jw;function Rf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Sa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=Fb()),!n)throw pn.create("no-options");const r=Ar.get(i);if(r){if(Rr(n,r.options)&&Rr(s,r.config))return r;throw pn.create("duplicate-app",{appName:i})}const o=new tw(i);for(const l of Ra.values())o.addComponent(l);const a=new Kw(n,s,o);return Ar.set(i,a),a}function Rl(t=Sa){const e=Ar.get(t);if(!e&&t===Sa)return Rf();if(!e)throw pn.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let i=(s=Vw[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}Kn(new bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const qw="firebase-heartbeat-database",Qw=1,wi="firebase-heartbeat-store";let Wo=null;function Af(){return Wo||(Wo=pw(qw,Qw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),Wo}async function Yw(t){try{return(await Af()).transaction(wi).objectStore(wi).get(xf(t))}catch(e){if(e instanceof qt)Gn.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Ou(t,e){try{const s=(await Af()).transaction(wi,"readwrite");return await s.objectStore(wi).put(e,xf(t)),s.done}catch(n){if(n instanceof qt)Gn.warn(n.message);else{const s=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(s.message)}}}function xf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Jw=1024,Xw=30*24*60*60*1e3;class Zw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Xw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pu(),{heartbeatsToSend:n,unsentEntries:s}=eE(this._heartbeatsCache.heartbeats),i=Cr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pu(){return new Date().toISOString().substring(0,10)}function eE(t,e=Jw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Du(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Du(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $b()?Hb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Du(t){return Cr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nE(t){Kn(new bn("platform-logger",e=>new gw(e),"PRIVATE")),Kn(new bn("heartbeat",e=>new Zw(e),"PRIVATE")),xt(Ta,Nu,t),xt(Ta,Nu,"esm2017"),xt("fire-js","")}nE("");function Al(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function kf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sE=kf,Nf=new Mi("auth","Firebase",kf());/**
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
 */const Mu=new Tl("@firebase/auth");function fr(t,...e){Mu.logLevel<=fe.ERROR&&Mu.error(`Auth (${Hs}): ${t}`,...e)}/**
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
 */function wt(t,...e){throw xl(t,...e)}function kt(t,...e){return xl(t,...e)}function iE(t,e,n){const s=Object.assign(Object.assign({},sE()),{[e]:n});return new Mi("auth","Firebase",s).create(e,{appName:t.name})}function xl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Nf.create(t,...e)}function j(t,e,...n){if(!t)throw xl(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fr(e),new Error(e)}function zt(t,e){t||$t(e)}/**
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
 */const Lu=new Map;function Ht(t){zt(t instanceof Function,"Expected a class definition");let e=Lu.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lu.set(t,e),e)}/**
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
 */function rE(t,e){const n=po(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Rr(r,e??{}))return i;wt(i,"already-initialized")}return n.initialize({options:e})}function oE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Aa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aE(){return Fu()==="http:"||Fu()==="https:"}function Fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function lE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aE()||Ub()||"connection"in navigator)?navigator.onLine:!0}function cE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Cl()||Ef()}get(){return lE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kl(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Of{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const dE=new Li(3e4,6e4);function Fi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ui(t,e,n,s,i={}){return Pf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=$s(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Of.fetch()(Df(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Pf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},uE),e);try{const i=new hE(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw sr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw sr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw iE(t,u,c);wt(t,u)}}catch(i){if(i instanceof qt)throw i;wt(t,"internal-error",{message:String(i)})}}async function Bi(t,e,n,s,i={}){const r=await Ui(t,e,n,s,i);return"mfaPendingCredential"in r&&wt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Df(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?kl(t.config,i):`${t.config.apiScheme}://${i}`}class hE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(kt(this.auth,"network-request-failed")),dE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=kt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function fE(t,e){return Ui(t,"POST","/v1/accounts:delete",e)}async function pE(t,e){return Ui(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _E(t,e=!1){const n=We(t),s=await n.getIdToken(e),i=Nl(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ai(jo(i.auth_time)),issuedAtTime:ai(jo(i.iat)),expirationTime:ai(jo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function jo(t){return Number(t)*1e3}function Nl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return fr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tr(n);return i?JSON.parse(i):(fr("Failed to decode base64 JWT payload"),null)}catch(i){return fr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mE(t){const e=Nl(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof qt&&gE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function gE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ei(t,pE(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?wE(r.providerUserInfo):[],a=bE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Mf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function yE(t){const e=We(t);await xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function wE(t){return t.map(e=>{var{providerId:n}=e,s=Al(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function EE(t,e){const n=await Pf(t,{},async()=>{const s=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Df(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Of.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await EE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ii;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
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
 */function tn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Al(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Mf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _E(this,e)}reload(){return yE(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await xr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ei(this,fE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:D,isAnonymous:G,providerData:ee,stsTokenManager:ae}=n;j(C&&ae,e,"internal-error");const H=Ii.fromJSON(this.name,ae);j(typeof C=="string",e,"internal-error"),tn(d,e.name),tn(h,e.name),j(typeof D=="boolean",e,"internal-error"),j(typeof G=="boolean",e,"internal-error"),tn(p,e.name),tn(m,e.name),tn(v,e.name),tn(E,e.name),tn(S,e.name),tn(M,e.name);const le=new Vn({uid:C,auth:e,email:h,emailVerified:D,displayName:d,isAnonymous:G,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:H,createdAt:S,lastLoginAt:M});return ee&&Array.isArray(ee)&&(le.providerData=ee.map(oe=>Object.assign({},oe))),E&&(le._redirectEventId=E),le}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ii;i.updateFromServerResponse(n);const r=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await xr(r),r}}/**
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
 */class Lf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lf.type="NONE";const Uu=Lf;/**
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
 */function pr(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=pr(this.userKey,i.apiKey,r),this.fullPersistenceKey=pr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new bs(Ht(Uu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ht(Uu);const o=pr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Vn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new bs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new bs(r,e,s))}}/**
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
 */function Bu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ff(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hf(e))return"Blackberry";if(Wf(e))return"Webos";if(Ol(e))return"Safari";if((e.includes("chrome/")||Uf(e))&&!e.includes("edge/"))return"Chrome";if($f(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ff(t=ze()){return/firefox\//i.test(t)}function Ol(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uf(t=ze()){return/crios\//i.test(t)}function Bf(t=ze()){return/iemobile/i.test(t)}function $f(t=ze()){return/android/i.test(t)}function Hf(t=ze()){return/blackberry/i.test(t)}function Wf(t=ze()){return/webos/i.test(t)}function _o(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IE(t=ze()){var e;return _o(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CE(){return Bb()&&document.documentMode===10}function jf(t=ze()){return _o(t)||$f(t)||Wf(t)||Hf(t)||/windows phone/i.test(t)||Bf(t)}function TE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vf(t,e=[]){let n;switch(t){case"Browser":n=Bu(ze());break;case"Worker":n=`${Bu(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${s}`}/**
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
 */class SE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class RE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $u(this),this.idTokenSubscription=new $u(this),this.beforeStateQueue=new SE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function $i(t){return We(t)}class $u{constructor(e){this.auth=e,this.observer=null,this.addObserver=qb(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function AE(t,e,n){const s=$i(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=zf(e),{host:o,port:a}=xE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kE()}function zf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xE(t){const e=zf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Hu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Hu(o)}}}function Hu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Pl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function NE(t,e){return Ui(t,"POST","/v1/accounts:update",e)}/**
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
 */async function OE(t,e){return Bi(t,"POST","/v1/accounts:signInWithPassword",Fi(t,e))}/**
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
 */async function PE(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",Fi(t,e))}async function DE(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",Fi(t,e))}/**
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
 */class Ci extends Pl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ci(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return OE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PE(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return NE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return DE(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ws(t,e){return Bi(t,"POST","/v1/accounts:signInWithIdp",Fi(t,e))}/**
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
 */const ME="http://localhost";class qn extends Pl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Al(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new qn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ws(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:ME,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$s(n)}return e}}/**
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
 */function LE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FE(t){const e=ti(ni(t)).link,n=e?ti(ni(e)).deep_link_id:null,s=ti(ni(t)).deep_link_id;return(s?ti(ni(s)).link:null)||s||n||e||t}class Dl{constructor(e){var n,s,i,r,o,a;const l=ti(ni(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=LE((i=l.mode)!==null&&i!==void 0?i:null);j(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FE(e);try{return new Dl(n)}catch{return null}}}/**
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
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Dl.parseLink(n);return j(s,"argument-error"),Ci._fromEmailAndCode(e,s.code,s.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hi extends Gf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rn extends Hi{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
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
 */class on extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return on.credential(n,s)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
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
 */class an extends Hi{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
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
 */class ln extends Hi{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
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
 */async function UE(t,e){return Bi(t,"POST","/v1/accounts:signUp",Fi(t,e))}/**
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
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Vn._fromIdTokenResponse(e,s,i),o=Wu(s);return new Qn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Wu(s);return new Qn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Wu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class kr extends qt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,kr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new kr(e,n,s,i)}}function Kf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?kr._fromErrorAndOperation(t,r,e,s):r})}async function BE(t,e,n=!1){const s=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",s)}/**
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
 */async function $E(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Ei(t,Kf(s,i,e,t),n);j(r.idToken,s,"internal-error");const o=Nl(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),Qn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wt(s,"user-mismatch"),r}}/**
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
 */async function qf(t,e,n=!1){const s="signIn",i=await Kf(t,s,e),r=await Qn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function HE(t,e){return qf($i(t),e)}async function WE(t,e,n){const s=$i(t),i=await UE(s,{returnSecureToken:!0,email:e,password:n}),r=await Qn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function ju(t,e,n){return HE(We(t),Ws.credential(e,n))}/**
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
 */function Vu(t,e){return We(t).setPersistence(e)}function jE(t,e,n,s){return We(t).onIdTokenChanged(e,n,s)}function VE(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function Qf(t,e,n,s){return We(t).onAuthStateChanged(e,n,s)}function zE(t){return We(t).signOut()}const Nr="__sak";/**
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
 */class Yf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nr,"1"),this.storage.removeItem(Nr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function GE(){const t=ze();return Ol(t)||_o(t)}const KE=1e3,qE=10;class Jf extends Yf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GE()&&TE(),this.fallbackToPolling=jf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);CE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},KE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jf.type="LOCAL";const Xf=Jf;/**
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
 */class Zf extends Yf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zf.type="SESSION";const Ml=Zf;/**
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
 */function QE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new mo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await QE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mo.receivers=[];/**
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
 */function Ll(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class YE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ll("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nt(){return window}function JE(t){Nt().location.href=t}/**
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
 */function ep(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function XE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eI(){return ep()?self:null}/**
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
 */const tp="firebaseLocalStorageDb",tI=1,Or="firebaseLocalStorage",np="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function go(t,e){return t.transaction([Or],e?"readwrite":"readonly").objectStore(Or)}function nI(){const t=indexedDB.deleteDatabase(tp);return new Wi(t).toPromise()}function xa(){const t=indexedDB.open(tp,tI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Or,{keyPath:np})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Or)?e(s):(s.close(),await nI(),e(await xa()))})})}async function zu(t,e,n){const s=go(t,!0).put({[np]:e,value:n});return new Wi(s).toPromise()}async function sI(t,e){const n=go(t,!1).get(e),s=await new Wi(n).toPromise();return s===void 0?null:s.value}function Gu(t,e){const n=go(t,!0).delete(e);return new Wi(n).toPromise()}const iI=800,rI=3;class sp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>rI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mo._getInstance(eI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XE(),!this.activeServiceWorker)return;this.sender=new YE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xa();return await zu(e,Nr,"1"),await Gu(e,Nr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>zu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>sI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=go(i,!1).getAll();return new Wi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sp.type="LOCAL";const oI=sp;/**
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
 */function aI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=kt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",aI().appendChild(s)})}function cI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Li(3e4,6e4);/**
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
 */function uI(t,e){return e?Ht(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fl extends Pl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dI(t){return qf(t.auth,new Fl(t),t.bypassAuthState)}function hI(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),$E(n,new Fl(t),t.bypassAuthState)}async function fI(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),BE(n,new Fl(t),t.bypassAuthState)}/**
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
 */class ip{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dI;case"linkViaPopup":case"linkViaRedirect":return fI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:wt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pI=new Li(2e3,1e4);class hs extends ip{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,pI.get())};e()}}hs.currentPopupAction=null;/**
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
 */const _I="pendingRedirect",_r=new Map;class mI extends ip{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_r.get(this.auth._key());if(!e){try{const s=await gI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_r.set(this.auth._key(),e)}return this.bypassAuthState||_r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gI(t,e){const n=bI(e),s=yI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function vI(t,e){_r.set(t._key(),e)}function yI(t){return Ht(t._redirectPersistence)}function bI(t){return pr(_I,t.config.apiKey,t.name)}async function wI(t,e,n=!1){const s=$i(t),i=uI(s,e),o=await new mI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const EI=10*60*1e3;class II{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ku(e))}saveEventToCache(e){this.cachedEventUids.add(Ku(e)),this.lastProcessedEventTime=Date.now()}}function Ku(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rp(t);default:return!1}}/**
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
 */async function TI(t,e={}){return Ui(t,"GET","/v1/projects",e)}/**
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
 */const SI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RI=/^https?/;async function AI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TI(t);for(const n of e)try{if(xI(n))return}catch{}wt(t,"unauthorized-domain")}function xI(t){const e=Aa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!RI.test(n))return!1;if(SI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const kI=new Li(3e4,6e4);function qu(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NI(t){return new Promise((e,n)=>{var s,i,r;function o(){qu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qu(),n(kt(t,"network-request-failed"))},timeout:kI.get()})}if(!((i=(s=Nt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Nt().gapi)===null||r===void 0)&&r.load)o();else{const a=cI("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},lI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw mr=null,e})}let mr=null;function OI(t){return mr=mr||NI(t),mr}/**
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
 */const PI=new Li(5e3,15e3),DI="__/auth/iframe",MI="emulator/auth/iframe",LI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UI(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kl(e,MI):`https://${t.config.authDomain}/${DI}`,s={apiKey:e.apiKey,appName:t.name,v:Hs},i=FI.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${$s(s).slice(1)}`}async function BI(t){const e=await OI(t),n=Nt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:UI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=Nt().setTimeout(()=>{r(o)},PI.get());function l(){Nt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const $I={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HI=500,WI=600,jI="_blank",VI="http://localhost";class Qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zI(t,e,n,s=HI,i=WI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$I),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ze().toLowerCase();n&&(a=Uf(c)?jI:n),Ff(c)&&(e=e||VI,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(IE(c)&&a!=="_self")return GI(e||"",a),new Qu(null);const d=window.open(e||"",a,u);j(d,t,"popup-blocked");try{d.focus()}catch{}return new Qu(d)}function GI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const KI="__/auth/handler",qI="emulator/auth/handler";function Yu(t,e,n,s,i,r){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Hs,eventId:i};if(e instanceof Gf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ea(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Hi){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${QI(t)}?${$s(a).slice(1)}`}function QI({config:t}){return t.emulator?kl(t,qI):`https://${t.authDomain}/${KI}`}/**
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
 */const Vo="webStorageSupport";class YI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ml,this._completeRedirectFn=wI,this._overrideRedirectResult=vI}async _openPopup(e,n,s,i){var r;zt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Yu(e,n,s,Aa(),i);return zI(e,o,Ll())}async _openRedirect(e,n,s,i){return await this._originValidation(e),JE(Yu(e,n,s,Aa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(zt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await BI(e),s=new II(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vo,{type:Vo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Vo];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jf()||Ol()||_o()}}const JI=YI;var Ju="@firebase/auth",Xu="0.21.4";/**
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
 */class XI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eC(t){Kn(new bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{j(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vf(t)},u=new RE(a,l,c);return oE(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kn(new bn("auth-internal",e=>{const n=$i(e.getProvider("auth").getImmediate());return(s=>new XI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Ju,Xu,ZI(t)),xt(Ju,Xu,"esm2017")}/**
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
 */const tC=5*60,nC=bf("authIdTokenMaxAge")||tC;let Zu=null;const sC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nC)return;const i=n==null?void 0:n.token;Zu!==i&&(Zu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function iC(t=Rl()){const e=po(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rE(t,{popupRedirectResolver:JI,persistence:[oI,Xf,Ml]}),s=bf("authTokenSyncURL");if(s){const r=sC(s);VE(n,r,()=>r(n.currentUser)),jE(n,o=>r(o))}const i=vf("auth");return i&&AE(n,`http://${i}`),n}eC("Browser");const rC={name:"HomePopular",data(){return{games:[],loader:!0}},async mounted(){this.games=await this.$store.dispatch("fetchGames"),this.loader=!1}},oC={class:"mt-15 rounded-[23px] bg-primary-100 p-7/5"},aC={class:"mt-0 -mr-3 -ml-3 flex w-full flex-wrap"},lC={class:"mt-0 w-full max-w-full shrink-0 grow-0 basis-auto pr-3 pl-3"},cC=x("div",{class:"heading-section"},[x("h4",{class:"mb-7/5 text-[20px] font-bold text-primary-200 md:text-[34px]"},[x("em",{class:"not-italic text-white underline"},"Most Popular"),Fe(" Right Now ")])],-1),uC={class:"mt-0 -mr-3 -ml-3 flex flex-wrap"},dC={class:"relative h-[138.45px] w-[180px] overflow-hidden rounded-[23px]"},hC=["src","alt"],fC={class:"text-15px tr-300 mt-5 mb-0 inline-block w-[70%] font-bold text-white group-hover:text-primary-200"},pC=x("br",null,null,-1),_C={class:"mt-[7px] block font-normal text-gray-66"},mC={class:"float-right mt-5"},gC={class:"flex items-center justify-center text-right text-[14px] text-white"},vC=x("i",{class:"bx bx-xs bxs-star pr-1 text-yellow-400"},null,-1),yC={class:"flex items-center justify-center text-right text-[14px] text-white"},bC=x("i",{class:"bx bx-xs bxs-cloud-download pr-1 text-primary-200"},null,-1),wC={key:0,class:"mt-0 w-full max-w-full shrink-0 grow-0 basis-auto px-3"},EC={class:"-mb-[53px] text-center"};function IC(t,e,n,s,i,r){const o=Be("router-link");return X(),pe("section",oC,[x("div",aC,[x("div",lC,[cC,x("div",uC,[(X(!0),pe(De,null,br(i.games,a=>(X(),pe("div",{class:"mt-0 max-w-full shrink-0 grow-0 basis-auto px-3 sm:w-1/2 lg:w-1/4",key:a.gameID},[se(o,{to:`/details/${a.gameID}`,tag:"div",class:"item group mb-7/5 block rounded-[23px] bg-secondary py-7/5 px-15px"},{default:Le(()=>[x("div",dC,[x("img",{class:"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",src:a.images.imgMin,alt:a.title},null,8,hC)]),x("h4",fC,[Fe(st(a.title)+" ",1),pC,x("span",_C,st(a.genre),1)]),x("ul",mC,[x("li",gC,[vC,Fe(" "+st(a.rating),1)]),x("li",yC,[bC,Fe(" "+st(t.numForm(a.downloaded,"M")),1)])])]),_:2},1032,["to"])]))),128)),i.loader?Wn("",!0):(X(),pe("div",wC,[x("div",EC,[se(o,{class:"main-btn",to:"/browse"},{default:Le(()=>[Fe("Discover Popular")]),_:1})])]))])])])])}const CC=Et(rC,[["render",IC]]);const TC={props:["id"],emits:["close","delete"]},SC=t=>(vh("data-v-63169e4c"),t=t(),yh(),t),RC={class:"setting_modal container absolute left-0 right-0 z-[51] mx-10 -mt-24 rounded-[23px] bg-secondary p-0"},AC={class:"overflow-y-hidden p-[24px]"},xC=SC(()=>x("div",{class:"mb-8 flex items-center justify-center gap-3"},[x("h1",null,"Are you sure you want to delete this game?")],-1)),kC={class:"mt-2 flex content-end justify-center"},NC={class:"main-border-button"};function OC(t,e,n,s,i,r){return X(),pe(De,null,[x("div",{class:"setting_bg fixed left-0 right-0 top-0 bottom-0 z-50 h-screen w-full bg-primary-100 bg-opacity-80",onClick:e[0]||(e[0]=o=>t.$emit("close"))}),x("div",RC,[x("div",AC,[xC,x("div",kC,[x("div",NC,[x("button",{class:"mr-2",onClick:e[1]||(e[1]=_a(o=>t.$emit("delete",n.id),["prevent"]))},"Yes, of course"),x("button",{class:"mr-2",onClick:e[2]||(e[2]=_a(o=>t.$emit("close"),["prevent"]))},"It was an accident")])])])])],64)}const PC=Et(TC,[["render",OC],["__scopeId","data-v-63169e4c"]]);(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".v-dropdown-trigger{display:inline-block}.v-dropdown-trigger.v-dropdown-trigger--full-width{display:block}.v-dropdown-container{-webkit-font-smoothing:subpixel-antialiased;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;display:inline-block;margin:0;padding:0;position:absolute;top:0;left:0;border:1px solid #D6D7D7;box-sizing:border-box;background-color:#fff;border-radius:.3rem;overflow:hidden;z-index:3000;will-change:opacity,transform,top,left;-webkit-box-shadow:0 15px 25px rgba(0,0,0,.2);-moz-box-shadow:0 15px 25px rgba(0,0,0,.2);box-shadow:0 15px 25px #0003}.v-dropdown-container.v-dropdown-no-border{border:0;-webkit-box-shadow:0 3px 20px rgba(0,0,0,.2);-moz-box-shadow:0 3px 20px rgba(0,0,0,.2);box-shadow:0 3px 20px #0003}.animate-down-enter-from,.animate-down-leave-to{transform:perspective(1px) translateY(-6px) translateZ(0);opacity:0}.animate-up-enter-from,.animate-up-leave-to{transform:perspective(1px) translateY(6px) translateZ(0);opacity:0}.animate-down-enter-active,.animate-up-enter-active{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.animate-down-leave-active,.animate-up-leave-active{-webkit-transition:all .2s ease-out;transition:all .2s ease-out}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();function DC(){const t=window.pageXOffset!==void 0,e=(document.compatMode||"")==="CSS1Compat";return{x:t?window.pageXOffset:e?document.documentElement.scrollLeft:document.body.scrollLeft,y:t?window.pageYOffset:e?document.documentElement.scrollTop:document.body.scrollTop}}function MC(t){return window.getComputedStyle(t).display==="none"}function ed(t){if(MC(t)){t.style.visibility="hidden",t.style.display="inline-block";const e=t.getBoundingClientRect();return t.style.visibility="visible",t.style.display="none",e}return t.getBoundingClientRect()}const op="click",LC="hover",FC="contextmenu",td=150,zo=5;function UC(t,e){return typeof t.animated=="string"?t.animated:t.animated?e.value?"animate-up":"animate-down":""}function Ul(t){return{isTriggerByClick:t.trigger===op,isTriggerByHover:t.trigger===LC,isTriggerByContextmenu:t.trigger===FC}}function BC(t,e,n,s){const{isTriggerByContextmenu:i}=Ul(t),r=window.pageYOffset,o=document.documentElement.clientHeight,a=i?e:n.top+r;let l=i?e:n.top+n.height+zo+r,c=!1,u=!1,d=!1;return l+s.height>r+o&&(c=!0),a-zo-s.height<r&&(u=!0),!u&&c&&(l=a-zo-s.height,d=!0),{dropUp:d,top:l}}function $C(t,e,n,s){const{isTriggerByContextmenu:i}=Ul(t),r=window.pageXOffset,o=document.documentElement.clientWidth,a=i?0:n.width,l=i?e:n.left+r,c=l+a/2-s.width/2,u=l+a-s.width;switch(t.align){case"left":return l+s.width>r+o?u:l;case"center":return c+s.width>r+o?u:u<r?l:c;case"right":return u<r?l:u}}function HC(t){const e=DC();return{x:t.pageX||t.clientX+e.x,y:t.pageY||t.clientY+e.y}}function WC(t){return{"v-dropdown-container":!0,"v-dropdown-no-border":!t.border}}const jC=ol({name:"VDropdown",props:{align:{type:String,default:"left"},border:{type:Boolean,default:!0},toggle:{type:Boolean,default:!0},manual:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},animated:{type:[String,Boolean],default:!0},width:{type:Number,default:void 0},fullWidth:{type:Boolean,default:!1},trigger:{type:String,default:op}},emits:["visible-change"],setup(t,{slots:e,emit:n,expose:s}){const i=cs(!1),r=vn({top:"",left:"",width:""}),o=vn({x:null,y:null}),a=cs(!1),l=cs(null),c=cs(null),u=cs(null),{isTriggerByClick:d,isTriggerByHover:h,isTriggerByContextmenu:p}=Ul(t);Hn(i,C=>n("visible-change",C));function m(){t.disabled||("trigger"in e&&S(),h?(window.clearTimeout(l.value),l.value=window.setTimeout(()=>{i.value=!0},td)):i.value=!0)}function v(C=!1){t.disabled||!t.toggle&&!C||(h?(window.clearTimeout(l.value),l.value=window.setTimeout(()=>{i.value=!1},td)):i.value=!1)}function E(){i.value?v():m()}function S(){const C=ed(c.value),D=ed(u.value),G=BC(t,o.y,C,D),ee=$C(t,o.x,C,D);a.value=G.dropUp,r.top=`${G.top}px`,r.left=`${ee}px`}function M(C){if(!i.value)return;const D=C.composedPath().some(G=>G===c.value);D&&!t.toggle&&!p||(!D||D&&p)&&v(!0)}return al(()=>{typeof t.width<"u"&&(r.width=t.width+"px"),document.body.append(u.value),document.body.addEventListener("mousedown",M)}),ll(()=>{document.body.removeEventListener("mousedown",M),u.value&&u.value.remove()}),cl(()=>{c.value&&c.value.remove()}),s({display:m,close:v,toggleVisible:E,adjust:S,container:u,visible:i}),()=>{const C=[];"trigger"in e&&C.push(e.trigger({visible:i,disabled:t.disabled}));const D={class:WC(t),style:r,ref:u,onMousedown:ae=>ae.stopPropagation()};h&&(D.onMouseenter=m,D.onMouseleave=v);const G=Wm(ys("div",D,e.default&&e.default()),[[Qg,i.value]]);C.push(ys(pl,{name:UC(t,a)},()=>[G]));const ee={class:{"v-dropdown-trigger":!0,"v-dropdown-trigger--full-width":t.fullWidth},ref:c};return h?(ee.onMouseenter=m,ee.onMouseleave=v):d?ee.onClick=ae=>{t.manual||(ae.stopPropagation(),E())}:p&&(ee.onContextmenu=ae=>{if(t.manual)return;ae.stopPropagation(),ae.preventDefault();const H=HC(ae);o.x=H.x,o.y=H.y,m()}),ys("div",ee,C)}}});const VC={components:{Dropdown:jC,Modal:PC},data(){return{loader:!0,modal:{open:!1,id:0},user:{games:{}},games:[]}},methods:{openModal(t){this.modal.open=!0,this.modal.id=t},closeModal(){this.modal.open=!1,this.modal.id=0},getGameById(t){for(let e=0;e<this.games.length;e++)if(this.games[e].gameID===t)return e},async downloadGame(t){await this.$store.dispatch("downloadGame",t),this.user.games[t].download=!0},async deleteGame(t){await this.$store.dispatch("deleteGame",t),this.user.games[t].download=!1,this.closeModal()}},async mounted(){this.games=await this.$store.dispatch("fetchGames"),this.user.games=await this.getUser.games,this.loader=!1},computed:{...Pi(["getUser"])}},zC={class:"mt-15 rounded-23px bg-primary-100 p-7/5"},GC={class:"w-full"},KC=x("div",{class:"heading-section"},[x("h4",{class:"mb-7/5 text-[20px] font-bold text-primary-200 md:text-[34px]"},[x("em",{class:"not-italic text-white underline"},"Your Gaming"),Fe(" Library ")])],-1),qC={class:"mb-0 mt-15px flex items-center justify-around"},QC={class:"inline-block"},YC=["src","alt"],JC={class:"inline-block"},XC={class:"mb-[5px] max-w-[6rem] text-[15px] lg:max-w-[8rem]"},ZC={class:"text-[14px] text-gray-66"},e0={class:"inline-block"},t0=x("h4",{class:"mb-[5px] text-[15px]"},"Date Added",-1),n0={class:"text-[14px] text-gray-66"},s0={class:"inline-block"},i0=x("h4",{class:"mb-[5px] text-[15px]"},"Hours Played",-1),r0={class:"text-[14px] text-gray-66"},o0={class:"hidden md:inline-block"},a0=x("h4",{class:"mb-[5px] text-[15px]"},"Currently",-1),l0={class:"text-[14px] text-gray-66"},c0={class:"inline-block"},u0={class:"main-border-button"},d0={key:0,class:"mr-2 hidden lg:inline-block"},h0=["onClick"],f0=x("button",{class:"!px-2 !py-2",type:"button"},[x("i",{class:"bx bx-dots-horizontal-rounded bx-sm align-top"})],-1),p0=["onClick"],_0={key:0,class:"w-full"},m0={class:"-mb-[53px] text-center"};function g0(t,e,n,s,i,r){const o=Be("Loader"),a=Be("router-link"),l=Be("Dropdown"),c=Be("Modal");return X(),pe(De,null,[x("section",zC,[x("div",GC,[KC,i.loader?(X(),Bt(o,{key:0})):(X(!0),pe(De,{key:1},br(i.user.games,(u,d)=>(X(),pe("div",{class:"item mb-5 border-b border-solid border-secondary pb-5",key:u.gameID},[x("ul",qC,[x("li",QC,[x("img",{src:this.games[r.getGameById(u.gameID)].images.imgMin,alt:this.games[r.getGameById(u.gameID)].title,class:"w-full max-w-[80px] rounded-[23px]"},null,8,YC)]),x("li",JC,[x("h4",XC,st(this.games[r.getGameById(u.gameID)].title),1),x("span",ZC,st(this.games[r.getGameById(u.gameID)].genre),1)]),x("li",e0,[t0,x("span",n0,st(t.dateFilter(u.dateAdded,"toLib")),1)]),x("li",s0,[i0,x("span",r0,st(t.timeForm(u.hoursPlayed,"HM")),1)]),x("li",o0,[a0,x("span",l0,st(u.download?"Downloaded":"Added"),1)]),x("li",c0,[x("div",u0,[u.download?(X(),pe("button",d0,"Launch")):(X(),pe("button",{key:1,class:"mr-2 hidden lg:inline-block",onClick:h=>r.downloadGame(u.gameID)},"Donwload",8,h0)),se(l,{align:"center",border:!1,toggle:!0},{trigger:Le(()=>[f0]),default:Le(()=>[se(a,{type:"button",class:"tr-300 block w-full !bg-secondary p-2 capitalize text-primary-200 hover:!bg-white",to:`/details/${u.gameID}`},{default:Le(()=>[Fe(" detail ")]),_:2},1032,["to"]),u.download?(X(),pe("button",{key:0,onClick:_a(h=>r.openModal(u.gameID),["prevent"]),type:"button",class:"tr-300 hidden w-full !bg-secondary p-2 capitalize text-primary-200 hover:!bg-white lg:block"}," delete ",8,p0)):Wn("",!0)]),_:2},1024)])])])]))),128))]),this.$route.name!=="profile"&&!i.loader?(X(),pe("div",_0,[x("div",m0,[se(a,{class:"main-btn",to:"/profile"},{default:Le(()=>[Fe("View Your Library")]),_:1})])])):Wn("",!0)]),i.modal.open?(X(),Bt(c,{key:0,onClose:r.closeModal,onDelete:r.deleteGame,id:i.modal.id},null,8,["onClose","onDelete","id"])):Wn("",!0)],64)}const v0=Et(VC,[["render",g0]]),y0={name:"Home",components:{HomePopular:CC,Library:v0},data(){return{username:null}},computed:{...Pi(["getUser"])},mounted(){this.username=this.getUser.info}},b0={class:"min-h-[380px] rounded-3xl bg-main-banner bg-cover bg-center px-15 py-20 text-center md:text-left"},w0={class:"mt-0 -mr-3 -ml-3 flex w-full max-w-full flex-wrap lg:w-7/12"},E0={class:"mb-6 w-full text-xl font-normal capitalize text-white"},I0=x("h4",{class:"mb-6 w-full text-[35px] font-bold uppercase text-white md:text-[45px]"},[x("em",{class:"not-italic text-primary-200"},"Browse"),Fe(" Our Popular Games Here ")],-1);function C0(t,e,n,s,i,r){const o=Be("router-link"),a=Be("HomePopular"),l=Be("Library");return X(),pe(De,null,[x("section",b0,[x("div",w0,[x("h6",E0,"Welcome "+st(i.username)+" To Cyborg",1),I0,se(o,{to:"/profile",class:"main-btn mx-auto md:mx-0"},{default:Le(()=>[Fe("Browse Now")]),_:1})])]),se(a),i.username?(X(),Bt(l,{key:0})):Wn("",!0)],64)}const T0=Et(y0,[["render",C0]]),ap=Eb({history:Uy("/"),routes:[{path:"/",name:"home",meta:{layout:"main"},component:T0},{path:"/browse",name:"browse",meta:{layout:"main"},component:()=>as(()=>import("./Browse-e2892227.js"),["assets/Browse-e2892227.js","assets/Browse-463f60c5.css"])},{path:"/details/:id",name:"details",meta:{layout:"main",useID:!0},component:()=>as(()=>import("./Details-fd578eed.js"),["assets/Details-fd578eed.js","assets/Details-aa5a7c83.css"])},{path:"/streams",name:"streams",meta:{layout:"main"},component:()=>as(()=>import("./Streams-1fecdcda.js"),[])},{path:"/profile",name:"profile",meta:{layout:"main",requiresAuth:!0},component:()=>as(()=>import("./Profile-f4c85e31.js"),[])},{path:"/login",name:"login",meta:{layout:"auth"},component:()=>as(()=>import("./Login-68778109.js"),["assets/Login-68778109.js","assets/index.esm-af070118.js","assets/Login-0be3508d.css"])},{path:"/register",name:"register",meta:{layout:"auth"},component:()=>as(()=>import("./Register-d12696f0.js"),["assets/Register-d12696f0.js","assets/index.esm-af070118.js","assets/Register-91383b48.css"])}]});ap.beforeEach((t,e,n)=>{Qf(Ut,s=>{let i=null;if(s&&(i=s.uid),t.matched.some(o=>o.meta.requiresAuth)&&!i){n({path:"/login",query:{message:"login"}});return}n()})});const nd="@firebase/database",sd="0.14.4";/**
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
 */let lp="";function S0(t){lp=t}/**
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
 */class R0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class A0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const cp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new R0(e)}}catch{}return new A0},Bn=cp("localStorage"),ka=cp("sessionStorage");/**
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
 */const Es=new Tl("@firebase/database"),x0=function(){let t=1;return function(){return t++}}(),up=function(t){const e=Jb(t),n=new Kb;n.update(e);const s=n.digest();return El.encodeByteArray(s)},ji=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ji.apply(null,s):typeof s=="object"?e+=Ne(s):e+=s,e+=" "}return e};let zn=null,id=!0;const k0=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Es.logLevel=fe.VERBOSE,zn=Es.log.bind(Es),e&&ka.set("logging_enabled",!0)):typeof t=="function"?zn=t:(zn=null,ka.remove("logging_enabled"))},Ue=function(...t){if(id===!0&&(id=!1,zn===null&&ka.get("logging_enabled")===!0&&k0(!0)),zn){const e=ji.apply(null,t);zn(e)}},Vi=function(t){return function(...e){Ue(t,...e)}},Na=function(...t){const e="FIREBASE INTERNAL ERROR: "+ji(...t);Es.error(e)},Gt=function(...t){const e=`FIREBASE FATAL ERROR: ${ji(...t)}`;throw Es.error(e),new Error(e)},qe=function(...t){const e="FIREBASE WARNING: "+ji(...t);Es.warn(e)},N0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},O0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ks="[MIN_NAME]",Yn="[MAX_NAME]",es=function(t,e){if(t===e)return 0;if(t===ks||e===Yn)return-1;if(e===ks||t===Yn)return 1;{const n=rd(t),s=rd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},P0=function(t,e){return t===e?0:t<e?-1:1},Ys=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},$l=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ne(e[s]),n+=":",n+=$l(t[e[s]]);return n+="}",n},dp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hp=function(t){T(!Bl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},D0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},M0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function L0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const F0=new RegExp("^-?(0*)\\d{1,10}$"),U0=-2147483648,B0=2147483647,rd=function(t){if(F0.test(t)){const e=Number(t);if(e>=U0&&e<=B0)return e}return null},js=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},$0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},li=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class H0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class W0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class Is{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Is.OWNER="owner";/**
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
 */const Hl="5",fp="v",pp="s",_p="r",mp="f",gp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vp="ls",yp="p",Oa="ac",bp="websocket",wp="long_polling";/**
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
 */class Ep{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function j0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ip(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===bp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===wp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);j0(t)&&(n.ns=t.namespace);const i=[];return He(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class V0{constructor(){this.counters_={}}incrementCounter(e,n=1){Dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Nb(this.counters_)}}/**
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
 */const Go={},Ko={};function Wl(t){const e=t.toString();return Go[e]||(Go[e]=new V0),Go[e]}function z0(t,e){const n=t.toString();return Ko[n]||(Ko[n]=e()),Ko[n]}/**
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
 */class G0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&js(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const od="start",K0="close",q0="pLPCommand",Q0="pRTLPCB",Cp="id",Tp="pw",Sp="ser",Y0="cb",J0="seg",X0="ts",Z0="d",eT="dframe",Rp=1870,Ap=30,tT=Rp-Ap,nT=25e3,sT=3e4;class fs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vi(e),this.stats_=Wl(n),this.urlFn=l=>(this.appCheckToken&&(l[Oa]=this.appCheckToken),Ip(n,wp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new G0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sT)),O0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===od)this.id=a,this.password=l;else if(o===K0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[od]="t",s[Sp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Y0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[fp]=Hl,this.transportSessionId&&(s[pp]=this.transportSessionId),this.lastSessionId&&(s[vp]=this.lastSessionId),this.applicationId&&(s[yp]=this.applicationId),this.appCheckToken&&(s[Oa]=this.appCheckToken),typeof location<"u"&&location.hostname&&gp.test(location.hostname)&&(s[_p]=mp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fs.forceAllow_=!0}static forceDisallow(){fs.forceDisallow_=!0}static isAvailable(){return fs.forceAllow_?!0:!fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!D0()&&!M0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=mf(n),i=dp(s,tT);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[eT]="t",s[Cp]=e,s[Tp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=x0(),window[q0+this.uniqueCallbackIdentifier]=e,window[Q0+this.uniqueCallbackIdentifier]=n,this.myIFrame=jl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ue("frame writing exception"),a.stack&&Ue(a.stack),Ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cp]=this.myID,e[Tp]=this.myPW,e[Sp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ap+s.length<=Rp;){const o=this.pendingSegs.shift();s=s+"&"+J0+i+"="+o.seg+"&"+X0+i+"="+o.ts+"&"+Z0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(nT)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const iT=16384,rT=45e3;let Pr=null;typeof MozWebSocket<"u"?Pr=MozWebSocket:typeof WebSocket<"u"&&(Pr=WebSocket);class ft{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vi(this.connId),this.stats_=Wl(n),this.connURL=ft.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[fp]=Hl,typeof location<"u"&&location.hostname&&gp.test(location.hostname)&&(o[_p]=mp),n&&(o[pp]=n),s&&(o[vp]=s),i&&(o[Oa]=i),r&&(o[yp]=r),Ip(e,bp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let s;If(),this.mySock=new Pr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Pr!==null&&!ft.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=bi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=dp(n,iT);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
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
 */class Ti{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fs,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let s=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ft];else{const i=this.transports_=[];for(const r of Ti.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ti.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ti.globalTransportInitialized_=!1;/**
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
 */const oT=6e4,aT=5e3,lT=10*1024,cT=100*1024,qo="t",ad="d",uT="s",ld="r",dT="e",cd="o",ud="a",dd="n",hd="p",hT="h";class fT{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vi("c:"+this.id+":"),this.transportManager_=new Ti(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=li(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qo in e){const n=e[qo];n===ud?this.upgradeIfSecondaryHealthy_():n===ld?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ys("t",e),s=Ys("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ud,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ys("t",e),s=Ys("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ys(qo,e);if(ad in e){const s=e[ad];if(n===hT){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uT?this.onConnectionShutdown_(s):n===ld?this.onReset_(s):n===dT?Na("Server Error: "+s):n===cd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Na("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hl!==s&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),li(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):li(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(aT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class xp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class kp{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Dr extends kp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Dr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const fd=32,pd=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new he("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function Vl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Si(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Np(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function Ce(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof he)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new he(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return Ke(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _T(t,e){const n=Si(t,0),s=Si(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=es(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Op(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function rt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class mT{constructor(e,n){this.errorPrefix_=n,this.parts_=Si(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=fo(this.parts_[s]);Pp(this)}}function gT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fo(e),Pp(t)}function vT(t){const e=t.parts_.pop();t.byteLength_-=fo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pp(t){if(t.byteLength_>pd)throw new Error(t.errorPrefix_+"has a key path longer than "+pd+" bytes ("+t.byteLength_+").");if(t.parts_.length>fd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fd+") or object contains a cycle "+On(t))}function On(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class zl extends kp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new zl}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Js=1e3,yT=60*5*1e3,_d=30*1e3,bT=1.3,wT=3e4,ET="server_kill",md=3;class jt extends xp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=jt.nextPersistentConnectionId_++,this.log_=Vi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Js,this.maxReconnectDelay_=yT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!If())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ne(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Di,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;jt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dt(e,"w")){const s=xs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_d)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Na("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wT&&(this.reconnectDelay_=Js),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new fT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{qe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(ET)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&qe(d),l())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ea(this.interruptReasons_)&&(this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>$l(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new he(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=md&&(this.reconnectDelay_=_d,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=md&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lp.replace(/\./g,"-")]=1,Cl()?e["framework.cordova"]=1:Ef()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dr.getInstance().currentlyOnline();return Ea(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
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
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
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
 */class vo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Q(ks,e),i=new Q(ks,n);return this.compare(s,i)!==0}minPost(){return Q.MIN}}/**
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
 */let ir;class Dp extends vo{static get __EMPTY_NODE(){return ir}static set __EMPTY_NODE(e){ir=e}compare(e,n){return es(e.name,n.name)}isDefinedOn(e){throw Bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Yn,ir)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,ir)}toString(){return".key"}}const Cs=new Dp;/**
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
 */class rr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=i??Xe.EMPTY_NODE,this.right=r??Xe.EMPTY_NODE}copy(e,n,s,i,r){return new Pe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class IT{copy(e,n,s,i,r){return this}insert(e,n,s){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xe{constructor(e,n=Xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rr(this.root_,null,this.comparator_,!0,e)}}Xe.EMPTY_NODE=new IT;/**
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
 */function CT(t,e){return es(t.name,e.name)}function Gl(t,e){return es(t,e)}/**
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
 */let Pa;function TT(t){Pa=t}const Mp=function(t){return typeof t=="number"?"number:"+hp(t):"string:"+t},Lp=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dt(e,".sv"),"Priority must be a string or number.")}else T(t===Pa||t.isEmpty(),"priority of unexpected type.");T(t===Pa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let gd;class Oe{constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Lp(this.priorityNode_)}static set __childrenNodeConstructor(e){gd=e}static get __childrenNodeConstructor(){return gd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:Z(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hp(this.value_):e+=this.value_,this.lazyHash_=up(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Oe.VALUE_TYPE_ORDER.indexOf(n),r=Oe.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Fp,Up;function ST(t){Fp=t}function RT(t){Up=t}class AT extends vo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?es(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Yn,new Oe("[PRIORITY-POST]",Up))}makePost(e,n){const s=Fp(e);return new Q(n,new Oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new AT;/**
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
 */const xT=Math.log(2);class kT{constructor(e){const n=r=>parseInt(Math.log(r)/xT,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Pe(h,d.node,Pe.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),v=i(p+1,c);return d=t[p],h=n?n(d):d,new Pe(h,d.node,Pe.BLACK,m,v)}},r=function(l){let c=null,u=null,d=t.length;const h=function(m,v){const E=d-m,S=d;d-=m;const M=i(E+1,S),C=t[E],D=n?n(C):C;p(new Pe(D,C.node,v,null,M))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(m+1));v?h(E,Pe.BLACK):(h(E,Pe.BLACK),h(E,Pe.RED))}return u},o=new kT(t.length),a=r(o);return new Xe(s||e,a)};/**
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
 */let Qo;const ls={};class Wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(ls&&Te,"ChildrenNode.ts has not been loaded"),Qo=Qo||new Wt({".priority":ls},{".priority":Te}),Qo}get(e){const n=xs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xe?n:null}hasIndex(e){return Dt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Cs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Mr(s,e.getCompare()):a=ls;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wt(u,c)}addToIndexes(e,n){const s=Sr(this.indexes_,(i,r)=>{const o=xs(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===ls)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Mr(a,o.getCompare())}else return ls;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new Wt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Sr(this.indexes_,i=>{if(i===ls)return i;{const r=n.get(e.name);return r?i.remove(new Q(e.name,r)):i}});return new Wt(s,this.indexSet_)}}/**
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
 */let Xs;class W{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Lp(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xs||(Xs=new W(new Xe(Gl),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xs}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xs:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Xs:this.priorityNode_;return new W(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{T(Z(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),s++,r&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mp(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":up(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zi?-1:0}withIndex(e){if(e===Cs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),i=n.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cs?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class NT extends W{constructor(){super(new Xe(Gl),W.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const zi=new NT;Object.defineProperties(Q,{MIN:{value:new Q(ks,W.EMPTY_NODE)},MAX:{value:new Q(Yn,zi)}});Dp.__EMPTY_NODE=W.EMPTY_NODE;Oe.__childrenNodeConstructor=W;TT(zi);RT(zi);/**
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
 */const OT=!0;function ke(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,ke(e))}if(!(t instanceof Array)&&OT){const n=[];let s=!1;if(He(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ke(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return W.EMPTY_NODE;const r=Mr(n,CT,o=>o.name,Gl);if(s){const o=Mr(n,Te.getCompare());return new W(r,ke(e),new Wt({".priority":o},{".priority":Te}))}else return new W(r,ke(e),Wt.Default)}else{let n=W.EMPTY_NODE;return He(t,(s,i)=>{if(Dt(t,s)&&s.substring(0,1)!=="."){const r=ke(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ke(e))}}ST(ke);/**
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
 */class PT extends vo{constructor(e){super(),this.indexPath_=e,T(!Y(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?es(e.name,n.name):r}makePost(e,n){const s=ke(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new Q(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,zi);return new Q(Yn,e)}toString(){return Si(this.indexPath_,0).join("/")}}/**
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
 */class DT extends vo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?es(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const s=ke(e);return new Q(n,s)}toString(){return".value"}}const MT=new DT;/**
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
 */function Bp(t){return{type:"value",snapshotNode:t}}function Ns(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ri(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ai(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Kl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ri(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ns(n,s)):o.trackChildChange(Ai(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ri(i,r))}),n.isLeafNode()||n.forEachChild(Te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ai(i,r,o))}else s.trackChildChange(Ns(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class xi{constructor(e){this.indexedFilter_=new Kl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xi.getStartPost_(e),this.endPost_=xi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Q(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const r=this;return n.forEachChild(Te,(o,a)=>{r.matches(new Q(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class FT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new xi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Q(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Ai(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ri(n,d));const v=a.updateImmediateChild(n,W.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ns(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ri(c.name,c.node)),r.trackChildChange(Ns(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
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
 */class ql{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ks}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new ql;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UT(t){return t.loadsAllData()?new Kl(t.getIndex()):t.hasLimit()?new FT(t):new xi(t)}function vd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===MT?n="$value":t.index_===Cs?n="$key":(T(t.index_ instanceof PT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ne(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ne(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ne(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ne(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function yd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
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
 */class Lr extends xp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Vi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Lr.getListenId_(e,s),a={};this.listens_[o]=a;const l=vd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),xs(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Lr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=vd(e._queryParams),s=e._path.toString(),i=new Di;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$s(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bi(a.responseText)}catch{qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class BT{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Fr(){return{value:null,children:new Map}}function $p(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,Fr());const i=t.children.get(s);e=ve(e),$p(i,e,n)}}function Da(t,e,n){t.value!==null?n(e,t.value):$T(t,(s,i)=>{const r=new he(e.toString()+"/"+s);Da(i,r,n)})}function $T(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class HT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const bd=10*1e3,WT=30*1e3,jT=5*60*1e3;class VT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new HT(e);const s=bd+(WT-bd)*Math.random();li(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;He(e,(i,r)=>{r>0&&Dt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),li(this.reportStats_.bind(this),Math.floor(Math.random()*2*jT))}}/**
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
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function Ql(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ur{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=_t.ACK_USER_WRITE,this.source=Ql()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Ur(ie(),n,this.revert)}}else return T(Z(this.path)===e,"operationForChild called for unrelated child."),new Ur(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class ki{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new ki(this.source,ie()):new ki(this.source,ve(this.path))}}/**
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
 */class Jn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=_t.OVERWRITE}operationForChild(e){return Y(this.path)?new Jn(this.source,ie(),this.snap.getImmediateChild(e)):new Jn(this.source,ve(this.path),this.snap)}}/**
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
 */class Os{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=_t.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new Jn(this.source,ie(),n.value):new Os(this.source,ie(),n)}else return T(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Os(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class En{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function GT(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(LT(o.childName,o.snapshotNode))}),Zs(t,i,"child_removed",e,s,n),Zs(t,i,"child_added",e,s,n),Zs(t,i,"child_moved",r,s,n),Zs(t,i,"child_changed",e,s,n),Zs(t,i,"value",e,s,n),i}function Zs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>qT(t,a,l)),o.forEach(a=>{const l=KT(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function KT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function qT(t,e,n){if(e.childName==null||n.childName==null)throw Bs("Should only compare child_ events.");const s=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function yo(t,e){return{eventCache:t,serverCache:e}}function ci(t,e,n,s){return yo(new En(e,n,s),t.serverCache)}function Hp(t,e,n,s){return yo(t.eventCache,new En(e,n,s))}function Br(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yo;const QT=()=>(Yo||(Yo=new Xe(P0)),Yo);class ge{constructor(e,n=QT()){this.value=e,this.children=n}static fromObject(e){let n=new ge(null);return He(e,(s,i)=>{n=n.set(new he(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(Y(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ve(e),n);return r!=null?{path:Ce(new he(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new ge(null)}}set(e,n){if(Y(e))return new ge(n,this.children);{const s=Z(e),r=(this.children.get(s)||new ge(null)).set(ve(e),n),o=this.children.insert(s,r);return new ge(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ge(null):new ge(this.value,r)}else return this}}get(e){if(Y(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(Y(e))return n;{const s=Z(e),r=(this.children.get(s)||new ge(null)).setTree(ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ge(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ce(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Y(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),Ce(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,s){if(Y(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(ve(e),Ce(n,i),s):new ge(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new ge(null))}}function ui(t,e,n){if(Y(e))return new yt(new ge(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ke(i,e);return r=r.updateChild(o,n),new yt(t.writeTree_.set(i,r))}else{const i=new ge(n),r=t.writeTree_.setTree(e,i);return new yt(r)}}}function Ma(t,e,n){let s=t;return He(n,(i,r)=>{s=ui(s,Ce(e,i),r)}),s}function wd(t,e){if(Y(e))return yt.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new yt(n)}}function La(t,e){return ts(t,e)!=null}function ts(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function Ed(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,i)=>{e.push(new Q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Q(s,i.value))}),e}function _n(t,e){if(Y(e))return t;{const n=ts(t,e);return n!=null?new yt(new ge(n)):new yt(t.writeTree_.subtree(e))}}function Fa(t){return t.writeTree_.isEmpty()}function Ps(t,e){return Wp(ie(),t.writeTree_,e)}function Wp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Wp(Ce(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ce(t,".priority"),s)),n}}/**
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
 */function bo(t,e){return Gp(e,t)}function YT(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ui(t.visibleWrites,e,n)),t.lastWriteId=s}function JT(t,e,n,s){T(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Ma(t.visibleWrites,e,n),t.lastWriteId=s}function XT(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ZT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&eS(a,s.path)?i=!1:rt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return tS(t),!0;if(s.snap)t.visibleWrites=wd(t.visibleWrites,s.path);else{const a=s.children;He(a,l=>{t.visibleWrites=wd(t.visibleWrites,Ce(s.path,l))})}return!0}else return!1}function eS(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(Ce(t.path,n),e))return!0;return!1}function tS(t){t.visibleWrites=jp(t.allWrites,nS,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nS(t){return t.visible}function jp(t,e,n){let s=yt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)rt(n,o)?(a=Ke(n,o),s=ui(s,a,r.snap)):rt(o,n)&&(a=Ke(o,n),s=ui(s,ie(),r.snap.getChild(a)));else if(r.children){if(rt(n,o))a=Ke(n,o),s=Ma(s,a,r.children);else if(rt(o,n))if(a=Ke(o,n),Y(a))s=Ma(s,ie(),r.children);else{const l=xs(r.children,Z(a));if(l){const c=l.getChild(ve(a));s=ui(s,ie(),c)}}}else throw Bs("WriteRecord should have .snap or .children")}}return s}function Vp(t,e,n,s,i){if(!s&&!i){const r=ts(t.visibleWrites,e);if(r!=null)return r;{const o=_n(t.visibleWrites,e);if(Fa(o))return n;if(n==null&&!La(o,ie()))return null;{const a=n||W.EMPTY_NODE;return Ps(o,a)}}}else{const r=_n(t.visibleWrites,e);if(!i&&Fa(r))return n;if(!i&&n==null&&!La(r,ie()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(rt(c.path,e)||rt(e,c.path))},a=jp(t.allWrites,o,e),l=n||W.EMPTY_NODE;return Ps(a,l)}}}function sS(t,e,n){let s=W.EMPTY_NODE;const i=ts(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=_n(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=Ps(_n(r,new he(o)),a);s=s.updateImmediateChild(o,l)}),Ed(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=_n(t.visibleWrites,e);return Ed(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function iS(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(e,n);if(La(t.visibleWrites,r))return null;{const o=_n(t.visibleWrites,r);return Fa(o)?i.getChild(n):Ps(o,i.getChild(n))}}function rS(t,e,n,s){const i=Ce(e,n),r=ts(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Ps(o,s.getNode().getImmediateChild(n))}else return null}function oS(t,e){return ts(t.visibleWrites,e)}function aS(t,e,n,s,i,r,o){let a;const l=_n(t.visibleWrites,e),c=ts(l,ie());if(c!=null)a=c;else if(n!=null)a=Ps(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&u.length<i;)d(p,s)!==0&&u.push(p),p=h.getNext();return u}else return[]}function lS(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function $r(t,e,n,s){return Vp(t.writeTree,t.treePath,e,n,s)}function Xl(t,e){return sS(t.writeTree,t.treePath,e)}function Id(t,e,n,s){return iS(t.writeTree,t.treePath,e,n,s)}function Hr(t,e){return oS(t.writeTree,Ce(t.treePath,e))}function cS(t,e,n,s,i,r){return aS(t.writeTree,t.treePath,e,n,s,i,r)}function Zl(t,e,n){return rS(t.writeTree,t.treePath,e,n)}function zp(t,e){return Gp(Ce(t.treePath,e),t.writeTree)}function Gp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class uS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ai(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ri(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ns(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ai(s,e.snapshotNode,i.oldSnap));else throw Bs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class dS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Kp=new dS;class ec{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new En(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xn(this.viewCache_),r=cS(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function hS(t){return{filter:t}}function fS(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pS(t,e,n,s,i){const r=new uS;let o,a;if(n.type===_t.OVERWRITE){const c=n;c.source.fromUser?o=Ua(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=Wr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===_t.MERGE){const c=n;c.source.fromUser?o=mS(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ba(t,e,c.path,c.children,s,i,a,r))}else if(n.type===_t.ACK_USER_WRITE){const c=n;c.revert?o=yS(t,e,c.path,s,i,r):o=gS(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===_t.LISTEN_COMPLETE)o=vS(t,e,n.path,s,r);else throw Bs("Unknown operation type: "+n.type);const l=r.getChanges();return _S(e,o,l),{viewCache:o,changes:l}}function _S(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Br(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Bp(Br(e)))}}function qp(t,e,n,s,i,r){const o=e.eventCache;if(Hr(s,n)!=null)return e;{let a,l;if(Y(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xn(e),u=c instanceof W?c:W.EMPTY_NODE,d=Xl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=$r(s,Xn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){T(wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Id(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ve(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Id(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Zl(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return ci(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function Wr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Z(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return e;const m=ve(n),E=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),p,E,m,Kp,null)}const d=Hp(e,c,l.isFullyInitialized()||Y(n),u.filtersNodes()),h=new ec(i,d,r);return qp(t,d,n,i,h,a)}function Ua(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ec(i,e,r);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ci(e,c,!0,t.filter.filtersNodes());else{const d=Z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ci(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ve(n),p=a.getNode().getImmediateChild(d);let m;if(Y(h))m=s;else{const v=u.getCompleteChild(d);v!=null?Vl(h)===".priority"&&v.getChild(Np(h)).isEmpty()?m=v:m=v.updateChild(h,s):m=W.EMPTY_NODE}if(p.equals(m))l=e;else{const v=t.filter.updateChild(a.getNode(),d,m,h,u,o);l=ci(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Cd(t,e){return t.eventCache.isCompleteForChild(e)}function mS(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ce(n,l);Cd(e,Z(u))&&(a=Ua(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ce(n,l);Cd(e,Z(u))||(a=Ua(t,a,u,c,i,r,o))}),a}function Td(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ba(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(n)?c=s:c=new ge(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=Td(t,p,h);l=Wr(t,l,new he(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),v=Td(t,m,h);l=Wr(t,l,new he(d),v,i,r,o,a)}}),l}function gS(t,e,n,s,i,r,o){if(Hr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Y(n)){let c=new ge(null);return l.getNode().forEachChild(Cs,(u,d)=>{c=c.set(new he(u),d)}),Ba(t,e,n,c,i,r,a,o)}else return e}else{let c=new ge(null);return s.foreach((u,d)=>{const h=Ce(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ba(t,e,n,c,i,r,a,o)}}function vS(t,e,n,s,i){const r=e.serverCache,o=Hp(e,r.getNode(),r.isFullyInitialized()||Y(n),r.isFiltered());return qp(t,o,n,s,Kp,i)}function yS(t,e,n,s,i,r){let o;if(Hr(s,n)!=null)return e;{const a=new ec(s,e,i),l=e.eventCache.getNode();let c;if(Y(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$r(s,Xn(e));else{const d=e.serverCache.getNode();T(d instanceof W,"serverChildren would be complete if leaf node"),u=Xl(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Z(n);let d=Zl(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ve(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,W.EMPTY_NODE,ve(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$r(s,Xn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Hr(s,ie())!=null,ci(e,c,o,t.filter.filtersNodes())}}/**
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
 */class bS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Kl(s.getIndex()),r=UT(s);this.processor_=hS(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(W.EMPTY_NODE,a.getNode(),null),u=new En(l,o.isFullyInitialized(),i.filtersNodes()),d=new En(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=yo(d,u),this.eventGenerator_=new zT(this.query_)}get query(){return this.query_}}function wS(t){return t.viewCache_.serverCache.getNode()}function ES(t){return Br(t.viewCache_)}function IS(t,e){const n=Xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Sd(t){return t.eventRegistrations_.length===0}function CS(t,e){t.eventRegistrations_.push(e)}function Rd(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ad(t,e,n,s){e.type===_t.MERGE&&e.source.queryId!==null&&(T(Xn(t.viewCache_),"We should always have a full cache before handling merges"),T(Br(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=pS(t.processor_,i,e,n,s);return fS(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Qp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function TS(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(r,o)=>{s.push(Ns(r,o))}),n.isFullyInitialized()&&s.push(Bp(n.getNode())),Qp(t,s,n.getNode(),e)}function Qp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return GT(t.eventGenerator_,e,n,i)}/**
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
 */let jr;class Yp{constructor(){this.views=new Map}}function SS(t){T(!jr,"__referenceConstructor has already been defined"),jr=t}function RS(){return T(jr,"Reference.ts has not been loaded"),jr}function AS(t){return t.views.size===0}function tc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Ad(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ad(o,e,n,s));return r}}function Jp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=$r(n,i?s:null),l=!1;a?l=!0:s instanceof W?(a=Xl(n,s),l=!1):(a=W.EMPTY_NODE,l=!1);const c=yo(new En(a,l,!1),new En(s,i,!1));return new bS(e,c)}return o}function xS(t,e,n,s,i,r){const o=Jp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),CS(o,n),TS(o,n)}function kS(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=In(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Rd(c,n,s)),Sd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Rd(l,n,s)),Sd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!In(t)&&r.push(new(RS())(e._repo,e._path)),{removed:r,events:o}}function Xp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mn(t,e){let n=null;for(const s of t.views.values())n=n||IS(s,e);return n}function Zp(t,e){if(e._queryParams.loadsAllData())return wo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function e_(t,e){return Zp(t,e)!=null}function In(t){return wo(t)!=null}function wo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Vr;function NS(t){T(!Vr,"__referenceConstructor has already been defined"),Vr=t}function OS(){return T(Vr,"Reference.ts has not been loaded"),Vr}let PS=1;class xd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=lS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function t_(t,e,n,s,i){return YT(t.pendingWriteTree_,e,n,s,i),i?Vs(t,new Jn(Ql(),e,n)):[]}function DS(t,e,n,s){JT(t.pendingWriteTree_,e,n,s);const i=ge.fromObject(n);return Vs(t,new Os(Ql(),e,i))}function cn(t,e,n=!1){const s=XT(t.pendingWriteTree_,e);if(ZT(t.pendingWriteTree_,e)){let r=new ge(null);return s.snap!=null?r=r.set(ie(),!0):He(s.children,o=>{r=r.set(new he(o),!0)}),Vs(t,new Ur(s.path,r,n))}else return[]}function Gi(t,e,n){return Vs(t,new Jn(Yl(),e,n))}function MS(t,e,n){const s=ge.fromObject(n);return Vs(t,new Os(Yl(),e,s))}function LS(t,e){return Vs(t,new ki(Yl(),e))}function FS(t,e,n){const s=sc(t,n);if(s){const i=ic(s),r=i.path,o=i.queryId,a=Ke(r,e),l=new ki(Jl(o),a);return rc(t,r,l)}else return[]}function n_(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||e_(o,e))){const l=kS(o,e,n,s);AS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,p)=>In(p));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=HS(h);for(let m=0;m<p.length;++m){const v=p[m],E=v.query,S=o_(t,v);t.listenProvider_.startListening(di(E),Ni(t,E),S.hashFn,S.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(di(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(Eo(h));t.listenProvider_.stopListening(di(h),p)}))}WS(t,c)}return a}function s_(t,e,n,s){const i=sc(t,s);if(i!=null){const r=ic(i),o=r.path,a=r.queryId,l=Ke(o,e),c=new Jn(Jl(a),l,n);return rc(t,o,c)}else return[]}function US(t,e,n,s){const i=sc(t,s);if(i){const r=ic(i),o=r.path,a=r.queryId,l=Ke(o,e),c=ge.fromObject(n),u=new Os(Jl(a),l,c);return rc(t,o,u)}else return[]}function BS(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const m=Ke(h,i);r=r||mn(p,m),o=o||In(p)});let a=t.syncPointTree_.get(i);a?(o=o||In(a),r=r||mn(a,ie())):(a=new Yp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,m)=>{const v=mn(m,ie());v&&(r=r.updateImmediateChild(p,v))}));const c=e_(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Eo(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=jS();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const u=bo(t.pendingWriteTree_,i);let d=xS(a,e,n,u,r,l);if(!c&&!o&&!s){const h=Zp(a,e);d=d.concat(VS(t,e,h))}return d}function nc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ke(o,e),c=mn(a,l);if(c)return c});return Vp(i,e,r,n,!0)}function $S(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ke(c,n);s=s||mn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||mn(i,ie()):(i=new Yp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new En(s,!0,!1):null,a=bo(t.pendingWriteTree_,e._path),l=Jp(i,e,a,r?o.getNode():W.EMPTY_NODE,r);return ES(l)}function Vs(t,e){return i_(e,t.syncPointTree_,null,bo(t.pendingWriteTree_,ie()))}function i_(t,e,n,s){if(Y(t.path))return r_(t,e,n,s);{const i=e.get(ie());n==null&&i!=null&&(n=mn(i,ie()));let r=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=zp(s,o);r=r.concat(i_(a,l,c,u))}return i&&(r=r.concat(tc(i,t,s,n))),r}}function r_(t,e,n,s){const i=e.get(ie());n==null&&i!=null&&(n=mn(i,ie()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=zp(s,o),u=t.operationForChild(o);u&&(r=r.concat(r_(u,a,l,c)))}),i&&(r=r.concat(tc(i,t,s,n))),r}function o_(t,e){const n=e.query,s=Ni(t,n);return{hashFn:()=>(wS(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?FS(t,n._path,s):LS(t,n._path);{const r=L0(i,n);return n_(t,n,null,r)}}}}function Ni(t,e){const n=Eo(e);return t.queryToTagMap.get(n)}function Eo(t){return t._path.toString()+"$"+t._queryIdentifier}function sc(t,e){return t.tagToQueryMap.get(e)}function ic(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function rc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=bo(t.pendingWriteTree_,e);return tc(s,n,i,null)}function HS(t){return t.fold((e,n,s)=>{if(n&&In(n))return[wo(n)];{let i=[];return n&&(i=Xp(n)),He(s,(r,o)=>{i=i.concat(o)}),i}})}function di(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(OS())(t._repo,t._path):t}function WS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Eo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function jS(){return PS++}function VS(t,e,n){const s=e._path,i=Ni(t,e),r=o_(t,n),o=t.listenProvider_.startListening(di(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!In(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Y(c)&&u&&In(u))return[wo(u).query];{let h=[];return u&&(h=h.concat(Xp(u).map(p=>p.query))),He(d,(p,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(di(u),Ni(t,u))}}return o}/**
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
 */class oc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new oc(n)}node(){return this.node_}}class ac{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new ac(this.syncTree_,n)}node(){return nc(this.syncTree_,this.path_)}}const zS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},kd=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return GS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KS(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},GS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},KS=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},a_=function(t,e,n,s){return lc(e,new ac(n,t),s)},l_=function(t,e,n){return lc(t,new oc(e),n)};function lc(t,e,n){const s=t.getPriority().val(),i=kd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=kd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Oe(a,ke(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Oe(i))),o.forEachChild(Te,(a,l)=>{const c=lc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class cc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function uc(t,e){let n=e instanceof he?e:new he(e),s=t,i=Z(n);for(;i!==null;){const r=xs(s.node.children,i)||{children:{},childCount:0};s=new cc(i,s,r),n=ve(n),i=Z(n)}return s}function zs(t){return t.node.value}function c_(t,e){t.node.value=e,$a(t)}function u_(t){return t.node.childCount>0}function qS(t){return zs(t)===void 0&&!u_(t)}function Io(t,e){He(t.node.children,(n,s)=>{e(new cc(n,t,s))})}function d_(t,e,n,s){n&&!s&&e(t),Io(t,i=>{d_(i,e,!0,s)}),n&&s&&e(t)}function QS(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ki(t){return new he(t.parent===null?t.name:Ki(t.parent)+"/"+t.name)}function $a(t){t.parent!==null&&YS(t.parent,t.name,t)}function YS(t,e,n){const s=qS(n),i=Dt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,$a(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$a(t))}/**
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
 */const JS=/[\[\].#$\/\u0000-\u001F\u007F]/,XS=/[\[\].#$\u0000-\u001F\u007F]/,Jo=10*1024*1024,dc=function(t){return typeof t=="string"&&t.length!==0&&!JS.test(t)},h_=function(t){return typeof t=="string"&&t.length!==0&&!XS.test(t)},ZS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),h_(t)},eR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Bl(t)||t&&typeof t=="object"&&Dt(t,".sv")},tR=function(t,e,n,s){s&&e===void 0||Co(ho(t,"value"),e,n)},Co=function(t,e,n){const s=n instanceof he?new mT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+On(s));if(typeof e=="function")throw new Error(t+"contains a function "+On(s)+" with contents = "+e.toString());if(Bl(e))throw new Error(t+"contains "+e.toString()+" "+On(s));if(typeof e=="string"&&e.length>Jo/3&&fo(e)>Jo)throw new Error(t+"contains a string greater than "+Jo+" utf8 bytes "+On(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(He(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!dc(o)))throw new Error(t+" contains an invalid key ("+o+") "+On(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gT(s,o),Co(t,a,s),vT(s)}),i&&r)throw new Error(t+' contains ".value" child '+On(s)+" in addition to actual children.")}},nR=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Si(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!dc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_T);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&rt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},sR=function(t,e,n,s){if(s&&e===void 0)return;const i=ho(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];He(e,(o,a)=>{const l=new he(o);if(Co(i,a,Ce(n,l)),Vl(l)===".priority"&&!eR(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),nR(i,r)},f_=function(t,e,n,s){if(!(s&&n===void 0)&&!h_(n))throw new Error(ho(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iR=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),f_(t,e,n,s)},rR=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},oR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ZS(n))throw new Error(ho(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class aR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hc(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Op(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function at(t,e,n){hc(t,n),lR(t,s=>rt(s,e)||rt(e,s))}function lR(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(cR(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();zn&&Ue("event: "+n.toString()),js(s)}}}/**
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
 */const uR="repo_interrupt",dR=25;class hR{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fr(),this.transactionQueueTree_=new cc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fR(t,e,n){if(t.stats_=Wl(t.repoInfo_),t.forceRestClient_||$0())t.server_=new Lr(t.repoInfo_,(s,i,r,o)=>{Nd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Od(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new jt(t.repoInfo_,e,(s,i,r,o)=>{Nd(t,s,i,r,o)},s=>{Od(t,s)},s=>{_R(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=z0(t.repoInfo_,()=>new VT(t.stats_,t.server_)),t.infoData_=new BT,t.infoSyncTree_=new xd({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Gi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fc(t,"connected",!1),t.serverSyncTree_=new xd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);at(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function pR(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function To(t){return zS({timestamp:pR(t)})}function Nd(t,e,n,s,i){t.dataUpdateCount++;const r=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Sr(n,c=>ke(c));o=US(t.serverSyncTree_,r,l,i)}else{const l=ke(n);o=s_(t.serverSyncTree_,r,l,i)}else if(s){const l=Sr(n,c=>ke(c));o=MS(t.serverSyncTree_,r,l)}else{const l=ke(n);o=Gi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ds(t,r)),at(t.eventQueue_,a,o)}function Od(t,e){fc(t,"connected",e),e===!1&&yR(t)}function _R(t,e){He(e,(n,s)=>{fc(t,n,s)})}function fc(t,e,n){const s=new he("/.info/"+e),i=ke(n);t.infoData_.updateSnapshot(s,i);const r=Gi(t.infoSyncTree_,s,i);at(t.eventQueue_,s,r)}function pc(t){return t.nextWriteId_++}function mR(t,e,n){const s=$S(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ke(i).withIndex(e._queryParams.getIndex());BS(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Gi(t.serverSyncTree_,e._path,r);else{const a=Ni(t.serverSyncTree_,e);o=s_(t.serverSyncTree_,e._path,r,a)}return at(t.eventQueue_,e._path,o),n_(t.serverSyncTree_,e,n,null,!0),r},i=>(qi(t,"get for query "+Ne(e)+" failed: "+i),Promise.reject(new Error(i))))}function gR(t,e,n,s,i){qi(t,"set",{path:e.toString(),value:n,priority:s});const r=To(t),o=ke(n,s),a=nc(t.serverSyncTree_,e),l=l_(o,a,r),c=pc(t),u=t_(t.serverSyncTree_,e,l,c,!0);hc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const m=h==="ok";m||qe("set at "+e+" failed: "+h);const v=cn(t.serverSyncTree_,c,!m);at(t.eventQueue_,e,v),Ha(t,i,h,p)});const d=mc(t,e);Ds(t,d),at(t.eventQueue_,d,[])}function vR(t,e,n,s){qi(t,"update",{path:e.toString(),value:n});let i=!0;const r=To(t),o={};if(He(n,(a,l)=>{i=!1,o[a]=a_(Ce(e,a),ke(l),t.serverSyncTree_,r)}),i)Ue("update() called with empty data.  Don't do anything."),Ha(t,s,"ok",void 0);else{const a=pc(t),l=DS(t.serverSyncTree_,e,o,a);hc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||qe("update at "+e+" failed: "+c);const h=cn(t.serverSyncTree_,a,!d),p=h.length>0?Ds(t,e):e;at(t.eventQueue_,p,h),Ha(t,s,c,u)}),He(n,c=>{const u=mc(t,Ce(e,c));Ds(t,u)}),at(t.eventQueue_,e,[])}}function yR(t){qi(t,"onDisconnectEvents");const e=To(t),n=Fr();Da(t.onDisconnect_,ie(),(i,r)=>{const o=a_(i,r,t.serverSyncTree_,e);$p(n,i,o)});let s=[];Da(n,ie(),(i,r)=>{s=s.concat(Gi(t.serverSyncTree_,i,r));const o=mc(t,i);Ds(t,o)}),t.onDisconnect_=Fr(),at(t.eventQueue_,ie(),s)}function bR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uR)}function qi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function Ha(t,e,n,s){e&&js(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function p_(t,e,n){return nc(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function _c(t,e=t.transactionQueueTree_){if(e||So(t,e),zs(e)){const n=m_(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&wR(t,Ki(e),n)}else u_(e)&&Io(e,n=>{_c(t,n)})}function wR(t,e,n){const s=n.map(c=>c.currentWriteId),i=p_(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ke(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{qi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(cn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();So(t,uc(t.transactionQueueTree_,e)),_c(t,t.transactionQueueTree_),at(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)js(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{qe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ds(t,e)}},o)}function Ds(t,e){const n=__(t,e),s=Ki(n),i=m_(t,n);return ER(t,i,s),s}function ER(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ke(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(cn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dR)u=!0,d="maxretry",i=i.concat(cn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=p_(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Co("transaction failed: Data returned ",p,l.path);let m=ke(p);typeof p=="object"&&p!=null&&Dt(p,".priority")||(m=m.updatePriority(h.getPriority()));const E=l.currentWriteId,S=To(t),M=l_(m,h,S);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=M,l.currentWriteId=pc(t),o.splice(o.indexOf(E),1),i=i.concat(t_(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(cn(t.serverSyncTree_,E,!0))}else u=!0,d="nodata",i=i.concat(cn(t.serverSyncTree_,l.currentWriteId,!0))}at(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}So(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)js(s[a]);_c(t,t.transactionQueueTree_)}function __(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&zs(s)===void 0;)s=uc(s,n),e=ve(e),n=Z(e);return s}function m_(t,e){const n=[];return g_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function g_(t,e,n){const s=zs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Io(e,i=>{g_(t,i,n)})}function So(t,e){const n=zs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,c_(e,n.length>0?n:void 0)}Io(e,s=>{So(t,s)})}function mc(t,e){const n=Ki(__(t,e)),s=uc(t.transactionQueueTree_,e);return QS(s,i=>{Xo(t,i)}),Xo(t,s),d_(s,i=>{Xo(t,i)}),n}function Xo(t,e){const n=zs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(cn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?c_(e,void 0):n.length=r+1,at(t.eventQueue_,Ki(e),i);for(let o=0;o<s.length;o++)js(s[o])}}/**
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
 */function IR(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function CR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pd=function(t,e){const n=TR(t),s=n.namespace;n.domain==="firebase.com"&&Gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||N0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ep(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new he(n.pathString)}},TR=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=IR(t.substring(u,d)));const h=CR(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class SR{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class RR{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class AR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Y(this._path)?null:Vl(this._path)}get ref(){return new Qt(this._repo,this._path)}get _queryIdentifier(){const e=yd(this._queryParams),n=$l(e);return n==="{}"?"default":n}get _queryObject(){return yd(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof gc))return!1;const n=this._repo===e._repo,s=Op(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pT(this._path)}}class Qt extends gc{constructor(e,n){super(e,n,new ql,!1)}get parent(){const e=Np(this._path);return e===null?null:new Qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),s=un(this.ref,e);return new Oi(this._node.getChild(n),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Oi(i,un(this.ref,s),Te)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ln(t,e){return t=We(t),t._checkNotDeleted("ref"),e!==void 0?un(t._root,e):t._root}function un(t,e){return t=We(t),Z(t._path)===null?iR("child","path",e,!1):f_("child","path",e,!1),new Qt(t._repo,Ce(t._path,e))}function v_(t,e){t=We(t),rR("set",t._path),tR("set",e,t._path,!1);const n=new Di;return gR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Dd(t,e){sR("update",e,t._path,!1);const n=new Di;return vR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Wa(t){t=We(t);const e=new AR(()=>{}),n=new vc(e);return mR(t._repo,t,n).then(s=>new Oi(s,new Qt(t._repo,t._path),t._queryParams.getIndex()))}class vc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new SR("value",this,new Oi(e.snapshotNode,new Qt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RR(this,e,n):null}matches(e){return e instanceof vc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}SS(Qt);NS(Qt);/**
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
 */const xR="FIREBASE_DATABASE_EMULATOR_HOST",ja={};let kR=!1;function NR(t,e,n,s){t.repoInfo_=new Ep(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function OR(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pd(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[xR]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Pd(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Is(Is.OWNER):new W0(t.name,t.options,e);oR("Invalid Firebase Database URL",o),Y(o.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=DR(a,t,u,new H0(t.name,n));return new MR(d,t)}function PR(t,e){const n=ja[e];(!n||n[t.key]!==t)&&Gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),bR(t),delete n[t.key]}function DR(t,e,n,s){let i=ja[e.name];i||(i={},ja[e.name]=i);let r=i[t.toURLString()];return r&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hR(t,kR,n,s),i[t.toURLString()]=r,r}class MR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qt(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gt("Cannot call "+e+" on a deleted database.")}}function LR(t=Rl(),e){const n=po(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=yf("database");s&&FR(n,...s)}return n}function FR(t,e,n,s={}){t=We(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Gt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Is(Is.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:wf(s.mockUserToken,t.app.options.projectId);r=new Is(o)}NR(i,e,n,r)}/**
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
 */function UR(t){S0(Hs),Kn(new bn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return OR(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xt(nd,sd,t),xt(nd,sd,"esm2017")}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};UR();const BR={state:{games:[]},mutations:{setGames(t,e){t.games=e}},getters:{games:t=>t.games},actions:{async fetchGames({commit:t}){try{const e=(await Wa(un(Ln(Fn),"games/"))).val()||[];return e.sort((n,s)=>s.downloaded-n.downloaded),t("setGames",e),e}catch(e){console.log("error: ",e)}},async fetchGameByID({commit:t,getters:e},n){try{return((await Wa(un(Ln(Fn),"games/"))).val()||[]).find(i=>i.gameID===+n)}catch(s){console.log("error: ",s)}},async getGame({commit:t,dispatch:e},{gameID:n,dateAdded:s,download:i}){try{const r=await e("getUid");return r?await v_(Ln(Fn,`/users/${r}/games/${n}`),{gameID:n,dateAdded:s,download:i,hoursPlayed:Math.floor(Number(new Date)/4e3/(Math.random()*(Math.random()*5e3)))}):void 0}catch(r){console.log("error: ",r)}},async downloadGame({commit:t,dispatch:e},n){try{const s=await e("getUid");return s?await Dd(un(Ln(Fn),`users/${s}/games/${n}`),{download:!0}):void 0}catch(s){console.log("error: ",s)}},async deleteGame({commit:t,dispatch:e},n){try{const s=await e("getUid");return s?await Dd(un(Ln(Fn),`users/${s}/games/${n}`),{download:!1}):void 0}catch(s){console.log("error: ",s)}}}},$R={state:{user:{info:"",games:[]}},mutations:{setUser(t,e){t.user=e},clearUser(t){t.user={info:"",games:[]}}},getters:{getUser:t=>t.user,username:t=>t.user.info},actions:{async fetchUser({commit:t,dispatch:e}){try{t("clearUser");const n=await e("getUid"),s=(await Wa(un(Ln(Fn),`users/${n}`))).val()||{},i={info:s.info.username||"",games:s.games||[]};t("setUser",i)}catch{}},async Login({dispatch:t},{email:e,password:n,rememberMe:s}){try{s?Vu(Ut,Xf).then(()=>ju(Ut,e,n)):Vu(Ut,Ml).then(()=>ju(Ut,e,n)),await t("fetchUser")}catch(i){console.log(i.toString())}},async Register({dispatch:t},{email:e,username:n,password:s}){try{await WE(Ut,e,s);const i=await t("getUid");i&&await v_(Ln(Fn,`/users/${i}/info`),{username:n})}catch(i){console.log(i.toString())}},getUid(){const t=Ut.currentUser;return t?t.uid:null},async logout({commit:t}){await zE(Ut),t("clearUser")}}},HR=new Yv.Store({state:{},mutations:{},getters:{},actions:{},modules:{games:BR,users:$R}});function WR(t,e="date"){const n={};return e.includes("date")&&(n.day="2-digit",n.month="long",n.year="numeric"),e.includes("toLib")&&(n.day="numeric",n.month="numeric",n.year="numeric"),e.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit"),new Intl.DateTimeFormat("en-US",n).format(new Date(t))}function jR(t,e="K"){let n=0;switch(e){case"K":n=(t/1e3).toFixed(1);break;case"KK":n=(t/1e5).toFixed(1);break;case"M":n=(t/1e6).toFixed(1);break}return n+e}function VR(t,e="HMS"){const n=[];switch(e){case"HMS":n[0]=Math.floor(t/3600)+" H",n[1]=Math.floor(t%3600/60)+" Mins",n[2]=Math.floor(t%3600%60)+" S";break;case"HM":n[0]=Math.floor(t/3600)+" H",n[1]=Math.floor(t%3600/60)+" Mins";break;case"H":n[0]=Math.floor(t/3600)+" H";break}return n.join(" ")}var zR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Va={},GR={get exports(){return Va},set exports(t){Va=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(zR,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(E){E.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var d=this;o.addEventListener("mouseover",function(E){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){d.removeElement(o)},d.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(E){E.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(E){E.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var h=i("x",this.options),p=i("y",this.options),m=this.options.position=="left"?h:"-"+h,v=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+m+","+v+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,d=0;d<c.length;d++){r(c[d],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var h=c[d].offsetHeight;u=u.substr(9,u.length-1);var p=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(c[d].style[u]=l[u]+"px",l[u]+=h+p):r(c[d],"toastify-left")===!0?(c[d].style[u]=o[u]+"px",o[u]+=h+p):(c[d].style[u]=a[u]+"px",a[u]+=h+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(GR);const Md=Va,KR={install:(t,e)=>{t.config.globalProperties.$Toast=function(n,s="linear-gradient(to right, #00b09b, #96c93d)",i="white"){Md({text:n,duration:3e3,newWindow:!0,gravity:"top",position:"right",style:{background:s,color:i}}).showToast()},t.config.globalProperties.$ToastEr=function(n,s="linear-gradient(to right, red, orange)"){Md({text:`[Error]: ${n}`,duration:3e3,newWindow:!0,gravity:"top",position:"right",style:{background:s}}).showToast()}}};var qR="firebase",QR="9.17.2";/**
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
 */xt(qR,QR,"app");/**
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
 */const y_="firebasestorage.googleapis.com",YR="storageBucket",JR=2*60*1e3,XR=10*60*1e3;/**
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
 */class Mt extends qt{constructor(e,n,s=0){super(Zo(e),`Firebase Storage: ${n} (${Zo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pt||(Pt={}));function Zo(t){return"storage/"+t}function ZR(){const t="An unknown error occurred, please check the error payload for server response.";return new Mt(Pt.UNKNOWN,t)}function eA(){return new Mt(Pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tA(){return new Mt(Pt.CANCELED,"User canceled the upload/download.")}function nA(t){return new Mt(Pt.INVALID_URL,"Invalid URL '"+t+"'.")}function sA(t){return new Mt(Pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ld(t){return new Mt(Pt.INVALID_ARGUMENT,t)}function b_(){return new Mt(Pt.APP_DELETED,"The Firebase app was deleted.")}function iA(t){return new Mt(Pt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=mt.makeFromUrl(e,n)}catch{return new mt(e,"")}if(s.path==="")return s;throw sA(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${u}/b/${i}/o${h}`,"i"),m={bucket:1,path:3},v=n===y_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",S=new RegExp(`^https?://${v}/${i}/${E}`,"i"),C=[{regex:a,indices:l,postModify:r},{regex:p,indices:m,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<C.length;D++){const G=C[D],ee=G.regex.exec(e);if(ee){const ae=ee[G.indices.bucket];let H=ee[G.indices.path];H||(H=""),s=new mt(ae,H),G.postModify(s);break}}if(s==null)throw nA(e);return s}}class rA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function oA(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function d(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function h(){r&&clearTimeout(r)}function p(E,...S){if(c){h();return}if(E){h(),u.call(null,E,...S);return}if(l()||o){h(),u.call(null,E,...S);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,d(C)}let m=!1;function v(E){m||(m=!0,h(),!c&&(i!==null?(E||(a=2),clearTimeout(i),d(0)):E||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function aA(t){t(!1)}/**
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
 */function lA(t){return t!==void 0}function Fd(t,e,n,s){if(s<e)throw Ld(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Ld(`Invalid value for '${t}'. Expected ${n} or less.`)}function cA(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var zr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zr||(zr={}));/**
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
 */function uA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class dA{constructor(e,n,s,i,r,o,a,l,c,u,d,h=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new or(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===zr.NO_ERROR,l=r.getStatus();if(!a||uA(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===zr.ABORT;s(!1,new or(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new or(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lA(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=ZR();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?b_():tA();o(l)}else{const l=eA();o(l)}};this.canceled_?n(!1,new or(!1,null,!0)):this.backoffId_=oA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class or{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function hA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _A(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mA(t,e,n,s,i,r,o=!0){const a=cA(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return pA(c,e),hA(c,n),fA(c,r),_A(c,s),new dA(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function gA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Gr{constructor(e,n){this._service=e,n instanceof mt?this._location=n:this._location=mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Gr(e,n)}get root(){const e=new mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vA(this._location.path)}get storage(){return this._service}get parent(){const e=gA(this._location.path);if(e===null)return null;const n=new mt(this._location.bucket,e);return new Gr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iA(e)}}function Ud(t,e){const n=e==null?void 0:e[YR];return n==null?null:mt.makeFromBucketSpec(n,t)}function yA(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:wf(i,t.app.options.projectId))}class bA{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=y_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JR,this._maxUploadRetryTime=XR,this._requests=new Set,i!=null?this._bucket=mt.makeFromBucketSpec(i,this._host):this._bucket=Ud(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mt.makeFromBucketSpec(this._url,e):this._bucket=Ud(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gr(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new rA(b_());{const o=mA(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Bd="@firebase/storage",$d="0.11.2";/**
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
 */const w_="storage";function wA(t=Rl(),e){t=We(t);const s=po(t,w_).getImmediate({identifier:e}),i=yf("storage");return i&&EA(s,...i),s}function EA(t,e,n,s={}){yA(t,e,n,s)}function IA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new bA(n,s,i,e,Hs)}function CA(){Kn(new bn(w_,IA,"PUBLIC").setMultipleInstances(!0)),xt(Bd,$d,""),xt(Bd,$d,"esm2017")}CA();(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();const TA={},SA={id:"loader"};function RA(t,e){return X(),pe("div",SA)}const AA=Et(TA,[["render",RA],["__scopeId","data-v-a394fdda"]]),Cn=Xg(Sb),xA=document.getElementById("loaderApp");let Hd;const kA={apiKey:"AIzaSyC1B4ULE--Q99knblfveLsdoMa9m5vINp0",authDomain:"cyborg-milley.firebaseapp.com",databaseURL:"https://cyborg-milley-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"cyborg-milley",storageBucket:"cyborg-milley.appspot.com",messagingSenderId:"506053232563",appId:"1:506053232563:web:34bb0e751e356390d06dc6",measurementId:"G-RF1TMHLMSV"},yc=Rf(kA),Ut=iC(yc),Fn=LR(yc);wA(yc);Cn.use(ap);Cn.use(HR);Cn.component("Loader",AA);Cn.use(KR);Cn.config.globalProperties.numForm=(t,e)=>jR(t,e);Cn.config.globalProperties.dateFilter=(t,e)=>WR(t,e);Cn.config.globalProperties.timeForm=(t,e)=>VR(t,e);Qf(Ut,()=>{Hd||(xA.remove(),Hd=Cn.mount("#app"))});export{hi as A,Wm as B,NA as C,vh as D,yh as E,De as F,_g as G,Mm as H,Ve as I,ll as J,ms as K,v0 as L,Ts as M,gs as N,Et as _,x as a,Bt as b,pe as c,br as d,se as e,Fe as f,Wn as g,ol as h,At as i,cs as j,ys as k,vn as l,Pi as m,al as n,X as o,fh as p,cl as q,Be as r,it as s,st as t,Hn as u,yn as v,Le as w,cr as x,ug as y,_a as z};
