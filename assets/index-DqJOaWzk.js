const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-C3WPLj9R.js","./webworkerAll-2A84WM4U.js","./colorToUniform-KTpA7KSL.js","./WebGPURenderer-Tv_n2q0v.js","./SharedSystems-0RX6IZBb.js","./WebGLRenderer-BUssdc9C.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const vl="modulepreload",yl=function(n,e){return new URL(n,e).href},Fi={},Cn=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=yl(u,r),u in Fi)return;Fi[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!r)for(let p=o.length-1;p>=0;p--){const g=o[p];if(g.href===u&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":vl,c||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var P=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n.ShapeBuilder="shape-builder",n.Batcher="batcher",n))(P||{});const _r=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},Zt=(n,e)=>_r(n).priority??e,le={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(_r).forEach(e=>{e.type.forEach(t=>{var r,i;return(i=(r=this._removeHandlers)[t])==null?void 0:i.call(r,e)})}),this},add(...n){return n.map(_r).forEach(e=>{e.type.forEach(t=>{var s,o;const r=this._addHandlers,i=this._queue;r[t]?(o=r[t])==null||o.call(r,e):(i[t]=i[t]||[],(s=i[t])==null||s.push(e))})}),this},handle(n,e,t){var o;const r=this._addHandlers,i=this._removeHandlers;if(r[n]||i[n])throw new Error(`Extension type ${n} already has a handler`);r[n]=e,i[n]=t;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(a=>e(a)),delete s[n]),this},handleByMap(n,e){return this.handle(n,t=>{t.name&&(e[t.name]=t.ref)},t=>{t.name&&delete e[t.name]})},handleByNamedList(n,e,t=-1){return this.handle(n,r=>{e.findIndex(s=>s.name===r.name)>=0||(e.push({name:r.name,value:r.ref}),e.sort((s,o)=>Zt(o.value,t)-Zt(s.value,t)))},r=>{const i=e.findIndex(s=>s.name===r.name);i!==-1&&e.splice(i,1)})},handleByList(n,e,t=-1){return this.handle(n,r=>{e.includes(r.ref)||(e.push(r.ref),e.sort((i,s)=>Zt(s,t)-Zt(i,t)))},r=>{const i=e.indexOf(r.ref);i!==-1&&e.splice(i,1)})}},_l={extension:{type:P.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Cn(()=>import("./browserAll-C3WPLj9R.js"),__vite__mapDeps([0,1,2]),import.meta.url)}},bl={extension:{type:P.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Cn(()=>import("./webworkerAll-2A84WM4U.js"),__vite__mapDeps([1,2]),import.meta.url)}};class ce{constructor(e,t,r){this._x=t||0,this._y=r||0,this._observer=e}clone(e){return new ce(e??this._observer,this._x,this._y)}set(e=0,t=e){return(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this._observer._onUpdate(this)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this._observer._onUpdate(this)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this._observer._onUpdate(this))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this._observer._onUpdate(this))}}function ti(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ds={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function s(l,u,c,h,d){if(typeof c!="function")throw new TypeError("The listener must be a function");var f=new i(c,h||l,d),p=t?t+u:u;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],f]:l._events[p].push(f):(l._events[p]=f,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,h;if(this._eventsCount===0)return u;for(h in c=this._events)e.call(c,h)&&u.push(t?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=t?t+u:u,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var d=0,f=h.length,p=new Array(f);d<f;d++)p[d]=h[d].fn;return p},a.prototype.listenerCount=function(u){var c=t?t+u:u,h=this._events[c];return h?h.fn?1:h.length:0},a.prototype.emit=function(u,c,h,d,f,p){var g=t?t+u:u;if(!this._events[g])return!1;var m=this._events[g],v=arguments.length,y,x;if(m.fn){switch(m.once&&this.removeListener(u,m.fn,void 0,!0),v){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,h),!0;case 4:return m.fn.call(m.context,c,h,d),!0;case 5:return m.fn.call(m.context,c,h,d,f),!0;case 6:return m.fn.call(m.context,c,h,d,f,p),!0}for(x=1,y=new Array(v-1);x<v;x++)y[x-1]=arguments[x];m.fn.apply(m.context,y)}else{var _=m.length,w;for(x=0;x<_;x++)switch(m[x].once&&this.removeListener(u,m[x].fn,void 0,!0),v){case 1:m[x].fn.call(m[x].context);break;case 2:m[x].fn.call(m[x].context,c);break;case 3:m[x].fn.call(m[x].context,c,h);break;case 4:m[x].fn.call(m[x].context,c,h,d);break;default:if(!y)for(w=1,y=new Array(v-1);w<v;w++)y[w-1]=arguments[w];m[x].fn.apply(m[x].context,y)}}return!0},a.prototype.on=function(u,c,h){return s(this,u,c,h,!1)},a.prototype.once=function(u,c,h){return s(this,u,c,h,!0)},a.prototype.removeListener=function(u,c,h,d){var f=t?t+u:u;if(!this._events[f])return this;if(!c)return o(this,f),this;var p=this._events[f];if(p.fn)p.fn===c&&(!d||p.once)&&(!h||p.context===h)&&o(this,f);else{for(var g=0,m=[],v=p.length;g<v;g++)(p[g].fn!==c||d&&!p[g].once||h&&p[g].context!==h)&&m.push(p[g]);m.length?this._events[f]=m.length===1?m[0]:m:o(this,f)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=t?t+u:u,this._events[c]&&o(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a})(Ds);var Sl=Ds.exports;const se=ti(Sl),Cl=Math.PI*2,wl=180/Math.PI,mt=Math.PI/180;class ae{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}clone(){return new ae(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,t=e){return this.x=e,this.y=t,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Gn.x=0,Gn.y=0,Gn}}const Gn=new ae;class D{constructor(e=1,t=0,r=0,i=1,s=0,o=0){this.array=null,this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=o}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,t,r,i,s,o){return this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=o,this}toArray(e,t){this.array||(this.array=new Float32Array(9));const r=t||this.array;return e?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(e,t){t=t||new ae;const r=e.x,i=e.y;return t.x=this.a*r+this.c*i+this.tx,t.y=this.b*r+this.d*i+this.ty,t}applyInverse(e,t){t=t||new ae;const r=this.a,i=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,u=1/(r*o+s*-i),c=e.x,h=e.y;return t.x=o*u*c+-s*u*h+(l*s-a*o)*u,t.y=r*u*h+-i*u*c+(-l*r+a*i)*u,t}translate(e,t){return this.tx+=e,this.ty+=t,this}scale(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),i=this.a,s=this.c,o=this.tx;return this.a=i*t-this.b*r,this.b=i*r+this.b*t,this.c=s*t-this.d*r,this.d=s*r+this.d*t,this.tx=o*t-this.ty*r,this.ty=o*r+this.ty*t,this}append(e){const t=this.a,r=this.b,i=this.c,s=this.d;return this.a=e.a*t+e.b*i,this.b=e.a*r+e.b*s,this.c=e.c*t+e.d*i,this.d=e.c*r+e.d*s,this.tx=e.tx*t+e.ty*i+this.tx,this.ty=e.tx*r+e.ty*s+this.ty,this}appendFrom(e,t){const r=e.a,i=e.b,s=e.c,o=e.d,a=e.tx,l=e.ty,u=t.a,c=t.b,h=t.c,d=t.d;return this.a=r*u+i*h,this.b=r*c+i*d,this.c=s*u+o*h,this.d=s*c+o*d,this.tx=a*u+l*h+t.tx,this.ty=a*c+l*d+t.ty,this}setTransform(e,t,r,i,s,o,a,l,u){return this.a=Math.cos(a+u)*s,this.b=Math.sin(a+u)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=e-(r*this.a+i*this.c),this.ty=t-(r*this.b+i*this.d),this}prepend(e){const t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const r=this.a,i=this.c;this.a=r*e.a+this.b*e.c,this.b=r*e.b+this.b*e.d,this.c=i*e.a+this.d*e.c,this.d=i*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this}decompose(e){const t=this.a,r=this.b,i=this.c,s=this.d,o=e.pivot,a=-Math.atan2(-i,s),l=Math.atan2(r,t),u=Math.abs(a+l);return u<1e-5||Math.abs(Cl-u)<1e-5?(e.rotation=l,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=a,e.skew.y=l),e.scale.x=Math.sqrt(t*t+r*r),e.scale.y=Math.sqrt(i*i+s*s),e.position.x=this.tx+(o.x*t+o.y*i),e.position.y=this.ty+(o.x*r+o.y*s),e}invert(){const e=this.a,t=this.b,r=this.c,i=this.d,s=this.tx,o=e*i-t*r;return this.a=i/o,this.b=-t/o,this.c=-r/o,this.d=e/o,this.tx=(r*this.ty-i*s)/o,this.ty=-(e*this.ty-t*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new D;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Tl.identity()}static get shared(){return Al.identity()}}const Al=new D,Tl=new D,Ne=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],$e=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Ve=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],We=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],br=[],Gs=[],Qt=Math.sign;function Pl(){for(let n=0;n<16;n++){const e=[];br.push(e);for(let t=0;t<16;t++){const r=Qt(Ne[n]*Ne[t]+Ve[n]*$e[t]),i=Qt($e[n]*Ne[t]+We[n]*$e[t]),s=Qt(Ne[n]*Ve[t]+Ve[n]*We[t]),o=Qt($e[n]*Ve[t]+We[n]*We[t]);for(let a=0;a<16;a++)if(Ne[a]===r&&$e[a]===i&&Ve[a]===s&&We[a]===o){e.push(a);break}}}for(let n=0;n<16;n++){const e=new D;e.set(Ne[n],$e[n],Ve[n],We[n],0,0),Gs.push(e)}}Pl();const Y={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Ne[n],uY:n=>$e[n],vX:n=>Ve[n],vY:n=>We[n],inv:n=>n&8?n&15:-n&7,add:(n,e)=>br[n][e],sub:(n,e)=>br[n][Y.inv(e)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,e)=>Math.abs(n)*2<=Math.abs(e)?e>=0?Y.S:Y.N:Math.abs(e)*2<=Math.abs(n)?n>0?Y.E:Y.W:e>0?n>0?Y.SE:Y.SW:n>0?Y.NE:Y.NW,matrixAppendRotationInv:(n,e,t=0,r=0)=>{const i=Gs[Y.inv(e)];i.tx=t,i.ty=r,n.append(i)}},Jt=[new ae,new ae,new ae,new ae];class Z{constructor(e=0,t=0,r=0,i=0){this.type="rectangle",this.x=Number(e),this.y=Number(t),this.width=Number(r),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Z(0,0,0,0)}clone(){return new Z(this.x,this.y,this.width,this.height)}copyFromBounds(e){return this.x=e.minX,this.y=e.minY,this.width=e.maxX-e.minX,this.height=e.maxY-e.minY,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}strokeContains(e,t,r){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-r/2,u=o+i+r/2,c=a-r/2,h=a+s+r/2,d=o+r/2,f=o+i-r/2,p=a+r/2,g=a+s-r/2;return e>=l&&e<=u&&t>=c&&t<=h&&!(e>d&&e<f&&t>p&&t<g)}intersects(e,t){if(!t){const M=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=M)return!1;const T=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>T}const r=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=r||o<=s)return!1;const a=Jt[0].set(e.left,e.top),l=Jt[1].set(e.left,e.bottom),u=Jt[2].set(e.right,e.top),c=Jt[3].set(e.right,e.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(t.a*t.d-t.b*t.c);if(h===0||(t.apply(a,a),t.apply(l,l),t.apply(u,u),t.apply(c,c),Math.max(a.x,l.x,u.x,c.x)<=r||Math.min(a.x,l.x,u.x,c.x)>=i||Math.max(a.y,l.y,u.y,c.y)<=s||Math.min(a.y,l.y,u.y,c.y)>=o))return!1;const d=h*(l.y-a.y),f=h*(a.x-l.x),p=d*r+f*s,g=d*i+f*s,m=d*r+f*o,v=d*i+f*o;if(Math.max(p,g,m,v)<=d*a.x+f*a.y||Math.min(p,g,m,v)>=d*c.x+f*c.y)return!1;const y=h*(a.y-u.y),x=h*(u.x-a.x),_=y*r+x*s,w=y*i+x*s,b=y*r+x*o,S=y*i+x*o;return!(Math.max(_,w,b,S)<=y*a.x+x*a.y||Math.min(_,w,b,S)>=y*c.x+x*c.y)}pad(e=0,t=e){return this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this}fit(e){const t=Math.max(this.x,e.x),r=Math.min(this.x+this.width,e.x+e.width),i=Math.max(this.y,e.y),s=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(r-t,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(e=1,t=.001){const r=Math.ceil((this.x+this.width-t)*e)/e,i=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=r-this.x,this.height=i-this.y,this}enlarge(e){const t=Math.min(this.x,e.x),r=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),s=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=r-t,this.y=i,this.height=s-i,this}getBounds(e){return e||(e=new Z),e.copyFrom(this),e}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Nn={default:-1};function Q(n="default"){return Nn[n]===void 0&&(Nn[n]=-1),++Nn[n]}const Ii={},K="8.0.0",Fl="8.3.4";function I(n,e,t=3){if(Ii[e])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${n}`):(r=r.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${e}
Deprecated since v${n}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${n}`),console.warn(r))),Ii[e]=!0}const Ns=()=>{};function wn(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function Mi(n){return!(n&n-1)&&!!n}function Il(n){const e={};for(const t in n)n[t]!==void 0&&(e[t]=n[t]);return e}const zi=Object.create(null);function Ml(n){const e=zi[n];return e===void 0&&(zi[n]=Q("resource")),e}const $s=class Vs extends se{constructor(e={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,e={...Vs.defaultOptions,...e},this.addressMode=e.addressMode,this.addressModeU=e.addressModeU??this.addressModeU,this.addressModeV=e.addressModeV??this.addressModeV,this.addressModeW=e.addressModeW??this.addressModeW,this.scaleMode=e.scaleMode,this.magFilter=e.magFilter??this.magFilter,this.minFilter=e.minFilter??this.minFilter,this.mipmapFilter=e.mipmapFilter??this.mipmapFilter,this.lodMinClamp=e.lodMinClamp,this.lodMaxClamp=e.lodMaxClamp,this.compare=e.compare,this.maxAnisotropy=e.maxAnisotropy??1}set addressMode(e){this.addressModeU=e,this.addressModeV=e,this.addressModeW=e}get addressMode(){return this.addressModeU}set wrapMode(e){I(K,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=e}get wrapMode(){return this.addressMode}set scaleMode(e){this.magFilter=e,this.minFilter=e,this.mipmapFilter=e}get scaleMode(){return this.magFilter}set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const e=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=Ml(e),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};$s.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let zl=$s;const Ws=class Xs extends se{constructor(e={}){super(),this.options=e,this.uid=Q("textureSource"),this._resourceType="textureSource",this._resourceId=Q("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,e={...Xs.defaultOptions,...e},this.label=e.label??"",this.resource=e.resource,this.autoGarbageCollect=e.autoGarbageCollect,this._resolution=e.resolution,e.width?this.pixelWidth=e.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,e.height?this.pixelHeight=e.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=e.format,this.dimension=e.dimensions,this.mipLevelCount=e.mipLevelCount,this.autoGenerateMipmaps=e.autoGenerateMipmaps,this.sampleCount=e.sampleCount,this.antialias=e.antialias,this.alphaMode=e.alphaMode,this.style=new zl(Il(e)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(e){var t,r;this.style!==e&&((t=this._style)==null||t.off("change",this._onStyleChange,this),this._style=e,(r=this._style)==null||r.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(e){this._style.addressMode=e}get repeatMode(){return this._style.addressMode}set repeatMode(e){this._style.addressMode=e}get magFilter(){return this._style.magFilter}set magFilter(e){this._style.magFilter=e}get minFilter(){return this._style.minFilter}set minFilter(e){this._style.minFilter=e}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(e){this._style.mipmapFilter=e}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(e){this._style.lodMinClamp=e}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(e){this._style.lodMaxClamp=e}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Q("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}get resourceHeight(){const{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this.width=this.pixelWidth/e,this.height=this.pixelHeight/e)}resize(e,t,r){r||(r=this._resolution),e||(e=this.width),t||(t=this.height);const i=Math.round(e*r),s=Math.round(t*r);return this.width=i/r,this.height=s/r,this._resolution=r,this.pixelWidth===i&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=s,this.emit("resize",this),this._resourceId=Q("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(e){this._style.wrapMode=e}get wrapMode(){return this._style.wrapMode}set scaleMode(e){this._style.scaleMode=e}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Mi(this.pixelWidth)&&Mi(this.pixelHeight)}static test(e){throw new Error("Unimplemented")}};Ws.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let me=Ws;class ni extends me{constructor(e){const t=e.resource||new Float32Array(e.width*e.height*4);let r=e.format;r||(t instanceof Float32Array?r="rgba32float":t instanceof Int32Array||t instanceof Uint32Array?r="rgba32uint":t instanceof Int16Array||t instanceof Uint16Array?r="rgba16uint":(t instanceof Int8Array,r="bgra8unorm")),super({...e,resource:t,format:r}),this.uploadMethodId="buffer"}static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}ni.extension=P.TextureSource;const Oi=new D;class Ol{constructor(e,t){this.mapCoord=new D,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof t>"u"?this.clampMargin=e.width<10?0:.5:this.clampMargin=t,this.isSimple=!1,this.texture=e}get texture(){return this._texture}set texture(e){var t;this.texture!==e&&((t=this._texture)==null||t.removeListener("update",this.update,this),this._texture=e,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(e,t){t===void 0&&(t=e);const r=this.mapCoord;for(let i=0;i<e.length;i+=2){const s=e[i],o=e[i+1];t[i]=s*r.a+o*r.c+r.tx,t[i+1]=s*r.b+o*r.d+r.ty}return t}update(){const e=this._texture;this._updateID++;const t=e.uvs;this.mapCoord.set(t.x1-t.x0,t.y1-t.y0,t.x3-t.x0,t.y3-t.y0,t.x0,t.y0);const r=e.orig,i=e.trim;i&&(Oi.set(r.width/i.width,0,0,r.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(Oi));const s=e.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset/s._resolution;return o[0]=(e.frame.x+a+l)/s.width,o[1]=(e.frame.y+a+l)/s.height,o[2]=(e.frame.x+e.frame.width-a+l)/s.width,o[3]=(e.frame.y+e.frame.height-a+l)/s.height,this.uClampOffset[0]=this.clampOffset/s.pixelWidth,this.uClampOffset[1]=this.clampOffset/s.pixelHeight,this.isSimple=e.frame.width===s.width&&e.frame.height===s.height&&e.rotate===0,!0}}class R extends se{constructor({source:e,label:t,frame:r,orig:i,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=Q("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Z,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=t,this.source=(e==null?void 0:e.source)??new me,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:c,height:h}=this._source;this.frame.width=c,this.frame.height=h}this.orig=i||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(e){this._source&&this._source.off("resize",this.update,this),this._source=e,e.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Ol(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:e,frame:t}=this,{width:r,height:i}=this._source,s=t.x/r,o=t.y/i,a=t.width/r,l=t.height/i;let u=this.rotate;if(u){const c=a/2,h=l/2,d=s+c,f=o+h;u=Y.add(u,Y.NW),e.x0=d+c*Y.uX(u),e.y0=f+h*Y.uY(u),u=Y.add(u,2),e.x1=d+c*Y.uX(u),e.y1=f+h*Y.uY(u),u=Y.add(u,2),e.x2=d+c*Y.uX(u),e.y2=f+h*Y.uY(u),u=Y.add(u,2),e.x3=d+c*Y.uX(u),e.y3=f+h*Y.uY(u)}else e.x0=s,e.y0=o,e.x1=s+a,e.y1=o,e.x2=s+a,e.y2=o+l,e.x3=s,e.y3=o+l}destroy(e=!1){this._source&&e&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return I(K,"Texture.baseTexture is now Texture.source"),this._source}}R.EMPTY=new R({label:"EMPTY",source:new me({label:"EMPTY"})});R.EMPTY.destroy=Ns;R.WHITE=new R({source:new ni({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});R.WHITE.destroy=Ns;function Rl(n,e,t,r){const{width:i,height:s}=t.orig,o=t.trim;if(o){const a=o.width,l=o.height;n.minX=o.x-e._x*i-r,n.maxX=n.minX+a,n.minY=o.y-e._y*s-r,n.maxY=n.minY+l}else n.minX=-e._x*i-r,n.maxX=n.minX+i,n.minY=-e._y*s-r,n.maxY=n.minY+s}const Ri=new D;class Ie{constructor(e=1/0,t=1/0,r=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Ri,this.minX=e,this.minY=t,this.maxX=r,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Z);const e=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(e.x=0,e.y=0,e.width=0,e.height=0):e.copyFromBounds(this),e}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Ri,this}set(e,t,r,i){this.minX=e,this.minY=t,this.maxX=r,this.maxY=i}addFrame(e,t,r,i,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,u=s.d,c=s.tx,h=s.ty;let d=this.minX,f=this.minY,p=this.maxX,g=this.maxY,m=o*e+l*t+c,v=a*e+u*t+h;m<d&&(d=m),v<f&&(f=v),m>p&&(p=m),v>g&&(g=v),m=o*r+l*t+c,v=a*r+u*t+h,m<d&&(d=m),v<f&&(f=v),m>p&&(p=m),v>g&&(g=v),m=o*e+l*i+c,v=a*e+u*i+h,m<d&&(d=m),v<f&&(f=v),m>p&&(p=m),v>g&&(g=v),m=o*r+l*i+c,v=a*r+u*i+h,m<d&&(d=m),v<f&&(f=v),m>p&&(p=m),v>g&&(g=v),this.minX=d,this.minY=f,this.maxX=p,this.maxY=g}addRect(e,t){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,t)}addBounds(e,t){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,t)}addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX,this.minY=this.minY>e.minY?this.minY:e.minY,this.maxX=this.maxX<e.maxX?this.maxX:e.maxX,this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}applyMatrix(e){const t=this.minX,r=this.minY,i=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:u,tx:c,ty:h}=e;let d=o*t+l*r+c,f=a*t+u*r+h;this.minX=d,this.minY=f,this.maxX=d,this.maxY=f,d=o*i+l*r+c,f=a*i+u*r+h,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY,d=o*t+l*s+c,f=a*t+u*s+h,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY,d=o*i+l*s+c,f=a*i+u*s+h,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY}fit(e){return this.minX<e.left&&(this.minX=e.left),this.maxX>e.right&&(this.maxX=e.right),this.minY<e.top&&(this.minY=e.top),this.maxY>e.bottom&&(this.maxY=e.bottom),this}fitBounds(e,t,r,i){return this.minX<e&&(this.minX=e),this.maxX>t&&(this.maxX=t),this.minY<r&&(this.minY=r),this.maxY>i&&(this.maxY=i),this}pad(e,t=e){return this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Ie(this.minX,this.minY,this.maxX,this.maxY)}scale(e,t=e){return this.minX*=e,this.minY*=t,this.maxX*=e,this.maxY*=t,this}get x(){return this.minX}set x(e){const t=this.maxX-this.minX;this.minX=e,this.maxX=e+t}get y(){return this.minY}set y(e){const t=this.maxY-this.minY;this.minY=e,this.maxY=e+t}get width(){return this.maxX-this.minX}set width(e){this.maxX=this.minX+e}get height(){return this.maxY-this.minY}set height(e){this.maxY=this.minY+e}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(e,t,r,i){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const u=i.a,c=i.b,h=i.c,d=i.d,f=i.tx,p=i.ty;for(let g=t;g<r;g+=2){const m=e[g],v=e[g+1],y=u*m+h*v+f,x=c*m+d*v+p;s=y<s?y:s,o=x<o?x:o,a=y>a?y:a,l=x>l?x:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(e,t){return this.minX<=e&&this.minY<=t&&this.maxX>=e&&this.maxY>=t}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(e){return this.minX=e.minX,this.minY=e.minY,this.maxX=e.maxX,this.maxY=e.maxY,this}}var El={grad:.9,turn:360,rad:360/(2*Math.PI)},Me=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},te=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*n)/t+0},Se=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),n>t?t:n>e?n:e},Hs=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},Ei=function(n){return{r:Se(n.r,0,255),g:Se(n.g,0,255),b:Se(n.b,0,255),a:Se(n.a)}},$n=function(n){return{r:te(n.r),g:te(n.g),b:te(n.b),a:te(n.a,3)}},Ul=/^#([0-9a-f]{3,8})$/i,en=function(n){var e=n.toString(16);return e.length<2?"0"+e:e},Ys=function(n){var e=n.r,t=n.g,r=n.b,i=n.a,s=Math.max(e,t,r),o=s-Math.min(e,t,r),a=o?s===e?(t-r)/o:s===t?2+(r-e)/o:4+(e-t)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:i}},js=function(n){var e=n.h,t=n.s,r=n.v,i=n.a;e=e/360*6,t/=100,r/=100;var s=Math.floor(e),o=r*(1-t),a=r*(1-(e-s)*t),l=r*(1-(1-e+s)*t),u=s%6;return{r:255*[r,a,o,o,l,r][u],g:255*[l,r,r,a,o,o][u],b:255*[o,o,l,r,r,a][u],a:i}},Ui=function(n){return{h:Hs(n.h),s:Se(n.s,0,100),l:Se(n.l,0,100),a:Se(n.a)}},ki=function(n){return{h:te(n.h),s:te(n.s),l:te(n.l),a:te(n.a,3)}},Bi=function(n){return js((t=(e=n).s,{h:e.h,s:(t*=((r=e.l)<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}));var e,t,r},Rt=function(n){return{h:(e=Ys(n)).h,s:(i=(200-(t=e.s))*(r=e.v)/100)>0&&i<200?t*r/100/(i<=100?i:200-i)*100:0,l:i/2,a:e.a};var e,t,r,i},kl=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Bl=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ll=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Dl=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Sr={string:[[function(n){var e=Ul.exec(n);return e?(n=e[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?te(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?te(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var e=Ll.exec(n)||Dl.exec(n);return e?e[2]!==e[4]||e[4]!==e[6]?null:Ei({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(n){var e=kl.exec(n)||Bl.exec(n);if(!e)return null;var t,r,i=Ui({h:(t=e[1],r=e[2],r===void 0&&(r="deg"),Number(t)*(El[r]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Bi(i)},"hsl"]],object:[[function(n){var e=n.r,t=n.g,r=n.b,i=n.a,s=i===void 0?1:i;return Me(e)&&Me(t)&&Me(r)?Ei({r:Number(e),g:Number(t),b:Number(r),a:Number(s)}):null},"rgb"],[function(n){var e=n.h,t=n.s,r=n.l,i=n.a,s=i===void 0?1:i;if(!Me(e)||!Me(t)||!Me(r))return null;var o=Ui({h:Number(e),s:Number(t),l:Number(r),a:Number(s)});return Bi(o)},"hsl"],[function(n){var e=n.h,t=n.s,r=n.v,i=n.a,s=i===void 0?1:i;if(!Me(e)||!Me(t)||!Me(r))return null;var o=function(a){return{h:Hs(a.h),s:Se(a.s,0,100),v:Se(a.v,0,100),a:Se(a.a)}}({h:Number(e),s:Number(t),v:Number(r),a:Number(s)});return js(o)},"hsv"]]},Li=function(n,e){for(var t=0;t<e.length;t++){var r=e[t][0](n);if(r)return[r,e[t][1]]}return[null,void 0]},Gl=function(n){return typeof n=="string"?Li(n.trim(),Sr.string):typeof n=="object"&&n!==null?Li(n,Sr.object):[null,void 0]},Vn=function(n,e){var t=Rt(n);return{h:t.h,s:Se(t.s+100*e,0,100),l:t.l,a:t.a}},Wn=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},Di=function(n,e){var t=Rt(n);return{h:t.h,s:t.s,l:Se(t.l+100*e,0,100),a:t.a}},Cr=function(){function n(e){this.parsed=Gl(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return te(Wn(this.rgba),2)},n.prototype.isDark=function(){return Wn(this.rgba)<.5},n.prototype.isLight=function(){return Wn(this.rgba)>=.5},n.prototype.toHex=function(){return e=$n(this.rgba),t=e.r,r=e.g,i=e.b,o=(s=e.a)<1?en(te(255*s)):"","#"+en(t)+en(r)+en(i)+o;var e,t,r,i,s,o},n.prototype.toRgb=function(){return $n(this.rgba)},n.prototype.toRgbString=function(){return e=$n(this.rgba),t=e.r,r=e.g,i=e.b,(s=e.a)<1?"rgba("+t+", "+r+", "+i+", "+s+")":"rgb("+t+", "+r+", "+i+")";var e,t,r,i,s},n.prototype.toHsl=function(){return ki(Rt(this.rgba))},n.prototype.toHslString=function(){return e=ki(Rt(this.rgba)),t=e.h,r=e.s,i=e.l,(s=e.a)<1?"hsla("+t+", "+r+"%, "+i+"%, "+s+")":"hsl("+t+", "+r+"%, "+i+"%)";var e,t,r,i,s},n.prototype.toHsv=function(){return e=Ys(this.rgba),{h:te(e.h),s:te(e.s),v:te(e.v),a:te(e.a,3)};var e},n.prototype.invert=function(){return Te({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},n.prototype.saturate=function(e){return e===void 0&&(e=.1),Te(Vn(this.rgba,e))},n.prototype.desaturate=function(e){return e===void 0&&(e=.1),Te(Vn(this.rgba,-e))},n.prototype.grayscale=function(){return Te(Vn(this.rgba,-1))},n.prototype.lighten=function(e){return e===void 0&&(e=.1),Te(Di(this.rgba,e))},n.prototype.darken=function(e){return e===void 0&&(e=.1),Te(Di(this.rgba,-e))},n.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},n.prototype.alpha=function(e){return typeof e=="number"?Te({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):te(this.rgba.a,3);var t},n.prototype.hue=function(e){var t=Rt(this.rgba);return typeof e=="number"?Te({h:e,s:t.s,l:t.l,a:t.a}):te(t.h)},n.prototype.isEqual=function(e){return this.toHex()===Te(e).toHex()},n}(),Te=function(n){return n instanceof Cr?n:new Cr(n)},Gi=[],Nl=function(n){n.forEach(function(e){Gi.indexOf(e)<0&&(e(Cr,Sr),Gi.push(e))})};function $l(n,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var i in t)r[t[i]]=i;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=r[this.toHex()];if(u)return u;if(o!=null&&o.closest){var c=this.toRgb(),h=1/0,d="black";if(!s.length)for(var f in t)s[f]=new n(t[f]).toRgb();for(var p in t){var g=(a=c,l=s[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<h&&(h=g,d=p)}return d}},e.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":t[a];return l?new n(l).toRgb():null},"name"])}Nl([$l]);const gt=class Mt{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof Mt)this._value=this._cloneSource(e._value),this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,e))&&(this._value=this._cloneSource(e),this._normalize(this._value))}}get value(){return this._value}_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?{...e}:e}_isSourceEqual(e,t){const r=typeof e;if(r!==typeof t)return!1;if(r==="number"||r==="string"||e instanceof Number)return e===t;if(Array.isArray(e)&&Array.isArray(t)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(t))return e.length!==t.length?!1:e.every((s,o)=>s===t[o]);if(e!==null&&t!==null){const s=Object.keys(e),o=Object.keys(t);return s.length!==o.length?!1:s.every(a=>e[a]===t[a])}return e===t}toRgba(){const[e,t,r,i]=this._components;return{r:e,g:t,b:r,a:i}}toRgb(){const[e,t,r]=this._components;return{r:e,g:t,b:r}}toRgbaString(){const[e,t,r]=this.toUint8RgbArray();return`rgba(${e},${t},${r},${this.alpha})`}toUint8RgbArray(e){const[t,r,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),e||(e=this._arrayRgb),e[0]=Math.round(t*255),e[1]=Math.round(r*255),e[2]=Math.round(i*255),e}toArray(e){this._arrayRgba||(this._arrayRgba=[]),e||(e=this._arrayRgba);const[t,r,i,s]=this._components;return e[0]=t,e[1]=r,e[2]=i,e[3]=s,e}toRgbArray(e){this._arrayRgb||(this._arrayRgb=[]),e||(e=this._arrayRgb);const[t,r,i]=this._components;return e[0]=t,e[1]=r,e[2]=i,e}toNumber(){return this._int}toBgrNumber(){const[e,t,r]=this.toUint8RgbArray();return(r<<16)+(t<<8)+e}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[t,r,i,s]=Mt._temp.setValue(e)._components;return this._components[0]*=t,this._components[1]*=r,this._components[2]*=i,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(e,t=!0){return t&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this._refreshInt(),this._value=null,this}toPremultiplied(e,t=!0){if(e===1)return(255<<24)+this._int;if(e===0)return t?0:this._int;let r=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return t&&(r=r*e+.5|0,i=i*e+.5|0,s=s*e+.5|0),(e*255<<24)+(r<<16)+(i<<8)+s}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(e){return this._components[3]=this._clamp(e),this}_normalize(e){let t,r,i,s;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const o=e;t=(o>>16&255)/255,r=(o>>8&255)/255,i=(o&255)/255,s=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4)e=this._clamp(e),[t,r,i,s=1]=e;else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4)e=this._clamp(e,0,255),[t,r,i,s=255]=e,t/=255,r/=255,i/=255,s/=255;else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const a=Mt.HEX_PATTERN.exec(e);a&&(e=`#${a[2]}`)}const o=Te(e);o.isValid()&&({r:t,g:r,b:i,a:s}=o.rgba,t/=255,r/=255,i/=255)}if(t!==void 0)this._components[0]=t,this._components[1]=r,this._components[2]=i,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${e}`)}_refreshInt(){this._clamp(this._components);const[e,t,r]=this._components;this._int=(e*255<<16)+(t*255<<8)+(r*255|0)}_clamp(e,t=0,r=1){return typeof e=="number"?Math.min(Math.max(e,t),r):(e.forEach((i,s)=>{e[s]=Math.min(Math.max(i,t),r)}),e)}static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof Mt||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==void 0&&e.g!==void 0&&e.b!==void 0||e.r!==void 0&&e.g!==void 0&&e.b!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0&&e.a!==void 0}};gt.shared=new gt;gt._temp=new gt;gt.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let L=gt;const Vl={cullArea:null,cullable:!1,cullableChildren:!0};class ri{constructor(e,t){this._pool=[],this._count=0,this._index=0,this._classType=e,t&&this.prepopulate(t)}prepopulate(e){for(let t=0;t<e;t++)this._pool[this._index++]=new this._classType;this._count+=e}get(e){var r;let t;return this._index>0?t=this._pool[--this._index]:t=new this._classType,(r=t.init)==null||r.call(t,e),t}return(e){var t;(t=e.reset)==null||t.call(e),this._pool[this._index++]=e}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class Wl{constructor(){this._poolsByClass=new Map}prepopulate(e,t){this.getPool(e).prepopulate(t)}get(e,t){return this.getPool(e).get(t)}return(e){this.getPool(e.constructor).return(e)}getPool(e){return this._poolsByClass.has(e)||this._poolsByClass.set(e,new ri(e)),this._poolsByClass.get(e)}stats(){const e={};return this._poolsByClass.forEach(t=>{const r=e[t._classType.name]?t._classType.name+t._classType.ID:t._classType.name;e[r]={free:t.totalFree,used:t.totalUsed,size:t.totalSize}}),e}}const Oe=new Wl,Xl={get isCachedAsTexture(){var n;return!!((n=this.renderGroup)!=null&&n.isCachedAsTexture)},cacheAsTexture(n){typeof n=="boolean"&&n===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(n===!0?{}:n))},updateCacheTexture(){var n;(n=this.renderGroup)==null||n.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(n){I("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(n)}};function Hl(n,e,t){const r=n.length;let i;if(e>=r||t===0)return;t=e+t>r?r-e:t;const s=r-t;for(i=e;i<s;++i)n[i]=n[i+t];n.length=s}const Yl={allowChildren:!0,removeChildren(n=0,e){const t=e??this.children.length,r=t-n,i=[];if(r>0&&r<=t){for(let o=t-1;o>=n;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}Hl(this.children,n,t);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(r===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const e=this.getChildAt(n);return this.removeChild(e)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,e)},getChildIndex(n){const e=this.children.indexOf(n);if(e===-1)throw new Error("The supplied Container must be a child of the caller");return e},addChildAt(n,e){this.allowChildren||I(K,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:t}=this;if(e<0||e>t.length)throw new Error(`${n}addChildAt: The index ${e} supplied is out of bounds ${t.length}`);if(n.parent){const i=n.parent.children.indexOf(n);if(n.parent===this&&i===e)return n;i!==-1&&n.parent.children.splice(i,1)}e===t.length?t.push(n):t.splice(e,0,n),n.parent=this,n.didChange=!0,n._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,e),n.emit("added",this),n},swapChildren(n,e){if(n===e)return;const t=this.getChildIndex(n),r=this.getChildIndex(e);this.children[t]=e,this.children[r]=n;const i=this.renderGroup||this.parentRenderGroup;i&&(i.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)},reparentChild(...n){return n.length===1?this.reparentChildAt(n[0],this.children.length):(n.forEach(e=>this.reparentChildAt(e,this.children.length)),n[0])},reparentChildAt(n,e){if(n.parent===this)return this.setChildIndex(n,e),n;const t=n.worldTransform.clone();n.removeFromParent(),this.addChildAt(n,e);const r=this.worldTransform.clone();return r.invert(),t.prepend(r),n.setFromMatrix(t),n}};class Ni{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let e=0;e<this.filters.length;e++)this.filters[e].destroy();this.filters=null,this.filterArea=null}}class jl{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})}))}add(e){this._tests.push(e)}getMaskEffect(e){this._initialized||this.init();for(let t=0;t<this._tests.length;t++){const r=this._tests[t];if(r.test(e))return Oe.get(r.maskClass,e)}return e}returnMaskEffect(e){Oe.return(e)}}const wr=new jl;le.handleByList(P.MaskEffect,wr._effectClasses);const ql={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const n=this.renderGroup||this.parentRenderGroup;n&&(n.structureDidChange=!0)},addEffect(n){this.effects.indexOf(n)===-1&&(this.effects.push(n),this.effects.sort((t,r)=>t.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(n){const e=this.effects.indexOf(n);e!==-1&&(this.effects.splice(e,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(n){const e=this._maskEffect;(e==null?void 0:e.mask)!==n&&(e&&(this.removeEffect(e),wr.returnMaskEffect(e),this._maskEffect=null),n!=null&&(this._maskEffect=wr.getMaskEffect(n),this.addEffect(this._maskEffect)))},setMask(n){this._maskOptions={...this._maskOptions,...n},n.mask&&(this.mask=n.mask),this._markStructureAsChanged()},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const e=this._filterEffect||(this._filterEffect=new Ni);n=n;const t=(n==null?void 0:n.length)>0,r=((s=e.filters)==null?void 0:s.length)>0,i=t!==r;n=Array.isArray(n)?n.slice(0):n,e.filters=Object.freeze(n),i&&(t?this.addEffect(e):(this.removeEffect(e),e.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new Ni),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},Kl={label:null,get name(){return I(K,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){I(K,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,e=!1){return this.getChildByLabel(n,e)},getChildByLabel(n,e=!1){const t=this.children;for(let r=0;r<t.length;r++){const i=t[r];if(i.label===n||n instanceof RegExp&&n.test(i.label))return i}if(e)for(let r=0;r<t.length;r++){const s=t[r].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,e=!1,t=[]){const r=this.children;for(let i=0;i<r.length;i++){const s=r[i];(s.label===n||n instanceof RegExp&&n.test(s.label))&&t.push(s)}if(e)for(let i=0;i<r.length;i++)r[i].getChildrenByLabel(n,!0,t);return t}},he=new ri(D),xt=new ri(Ie);function qs(n,e,t){t.clear();let r,i;return n.parent?e?r=n.parent.worldTransform:(i=he.get().identity(),r=ii(n,i)):r=D.IDENTITY,Ks(n,t,r,e),i&&he.return(i),t.isValid||t.set(0,0,0,0),t}function Ks(n,e,t,r){var a,l;if(!n.visible||!n.measurable)return;let i;r?i=n.worldTransform:(n.updateLocalTransform(),i=he.get(),i.appendFrom(n.localTransform,t));const s=e,o=!!n.effects.length;if(o&&(e=xt.get().clear()),n.boundsArea)e.addRect(n.boundsArea,i);else{n.bounds&&(e.matrix=i,e.addBounds(n.bounds));for(let u=0;u<n.children.length;u++)Ks(n.children[u],e,i,r)}if(o){for(let u=0;u<n.effects.length;u++)(l=(a=n.effects[u]).addBounds)==null||l.call(a,e);s.addBounds(e,D.IDENTITY),xt.return(e)}r||he.return(i)}function ii(n,e){const t=n.parent;return t&&(ii(t,e),t.updateLocalTransform(),e.append(t.localTransform)),e}function Zs(n,e){if(n===16777215||!e)return e;if(e===16777215||!n)return n;const t=n>>16&255,r=n>>8&255,i=n&255,s=e>>16&255,o=e>>8&255,a=e&255,l=t*s/255|0,u=r*o/255|0,c=i*a/255|0;return(l<<16)+(u<<8)+c}const $i=16777215;function Vi(n,e){return n===$i?e:e===$i?n:Zs(n,e)}function hn(n){return((n&255)<<16)+(n&65280)+(n>>16&255)}const Zl={getGlobalAlpha(n){if(n)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let e=this.alpha,t=this.parent;for(;t;)e*=t.alpha,t=t.parent;return e},getGlobalTransform(n,e){if(e)return n.copyFrom(this.worldTransform);this.updateLocalTransform();const t=ii(this,he.get().identity());return n.appendFrom(this.localTransform,t),he.return(t),n},getGlobalTint(n){if(n)return this.renderGroup?hn(this.renderGroup.worldColor):this.parentRenderGroup?hn(Vi(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let e=this.localColor,t=this.parent;for(;t;)e=Vi(e,t.localColor),t=t.parent;return hn(e)}};let Xn=0;const Wi=500;function J(...n){Xn!==Wi&&(Xn++,Xn===Wi?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function Qs(n,e,t){return e.clear(),t||(t=D.IDENTITY),Js(n,e,t,n,!0),e.isValid||e.set(0,0,0,0),e}function Js(n,e,t,r,i){var l,u;let s;if(i)s=he.get(),s=t.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const c=n.localTransform;s=he.get(),s.appendFrom(c,t)}const o=e,a=!!n.effects.length;if(a&&(e=xt.get().clear()),n.boundsArea)e.addRect(n.boundsArea,s);else{n.renderPipeId&&(e.matrix=s,e.addBounds(n.bounds));const c=n.children;for(let h=0;h<c.length;h++)Js(c[h],e,s,r,!1)}if(a){for(let c=0;c<n.effects.length;c++)(u=(l=n.effects[c]).addLocalBounds)==null||u.call(l,e,r);o.addBounds(e,D.IDENTITY),xt.return(e)}he.return(s)}function eo(n,e){const t=n.children;for(let r=0;r<t.length;r++){const i=t[r],s=i.uid,o=(i._didViewChangeTick&65535)<<16|i._didContainerChangeTick&65535,a=e.index;(e.data[a]!==s||e.data[a+1]!==o)&&(e.data[e.index]=s,e.data[e.index+1]=o,e.didChange=!0),e.index=a+2,i.children.length&&eo(i,e)}return e.didChange}const Ql=new D,Jl={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,e){const t=Math.sign(this.scale.x)||1;e!==0?this.scale.x=n/e*t:this.scale.x=t},_setHeight(n,e){const t=Math.sign(this.scale.y)||1;e!==0?this.scale.y=n/e*t:this.scale.y=t},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Ie});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didViewChangeTick&&(n.didChange=!0,n.data[0]=this._didViewChangeTick),eo(this,n),n.didChange&&Qs(this,n.localBounds,Ql),n.localBounds},getBounds(n,e){return qs(this,n,e||new Ie)}},eu={_onRender:null,set onRender(n){const e=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(e==null||e.removeOnRender(this)),this._onRender=null;return}this._onRender||e==null||e.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},tu={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(nu))}};function nu(n,e){return n._zIndex-e._zIndex}const ru={getGlobalPosition(n=new ae,e=!1){return this.parent?this.parent.toGlobal(this._position,n,e):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,e,t=!1){const r=this.getGlobalTransform(he.get(),t);return e=r.apply(n,e),he.return(r),e},toLocal(n,e,t,r){e&&(n=e.toGlobal(n,t,r));const i=this.getGlobalTransform(he.get(),r);return t=i.applyInverse(n,t),he.return(i),t}};let iu=0;class to{constructor(){this.uid=Q("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.tick=0}reset(){this.instructionSize=0,this.tick=iu++}add(e){this.instructions[this.instructionSize++]=e}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let su=0;class ou{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,r){const i=new me({...this.textureOptions,width:e,height:t,resolution:1,antialias:r,autoGarbageCollect:!0});return new R({source:i,label:`texturePool_${su++}`})}getOptimalTexture(e,t,r=1,i){let s=Math.ceil(e*r-1e-6),o=Math.ceil(t*r-1e-6);s=wn(s),o=wn(o);const a=(s<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,i)),l.source._resolution=r,l.source.width=s/r,l.source.height=o/r,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=e,l.frame.height=t,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(e,t=!1){const r=e.source;return this.getOptimalTexture(e.width,e.height,r._resolution,t)}returnTexture(e){const t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(const t in this._texturePool){const r=this._texturePool[t];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this._texturePool={}}}const _e=new ou;class au{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new D,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new to,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(e){this.root=e,e._onRender&&this.addOnRender(e),e.didChange=!0;const t=e.children;for(let r=0;r<t.length;r++)this.addChild(t[r])}enableCacheAsTexture(e={}){this.textureOptions=e,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(_e.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const e in this.childrenToUpdate){const t=this.childrenToUpdate[e];t.list.fill(null),t.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(e){e.renderGroupParent&&e.renderGroupParent._removeRenderGroupChild(e),e.renderGroupParent=this,this.renderGroupChildren.push(e)}_removeRenderGroupChild(e){const t=this.renderGroupChildren.indexOf(e);t>-1&&this.renderGroupChildren.splice(t,1),e.renderGroupParent=null}addChild(e){if(this.structureDidChange=!0,e.parentRenderGroup=this,e.updateTick=-1,e.parent===this.root?e.relativeRenderGroupDepth=1:e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1,e.didChange=!0,this.onChildUpdate(e),e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}e._onRender&&this.addOnRender(e);const t=e.children;for(let r=0;r<t.length;r++)this.addChild(t[r])}removeChild(e){if(this.structureDidChange=!0,e._onRender&&(e.renderGroup||this.removeOnRender(e)),e.parentRenderGroup=null,e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}const t=e.children;for(let r=0;r<t.length;r++)this.removeChild(t[r])}removeChildren(e){for(let t=0;t<e.length;t++)this.removeChild(e[t])}onChildUpdate(e){let t=this.childrenToUpdate[e.relativeRenderGroupDepth];t||(t=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}),t.list[t.index++]=e}updateRenderable(e){e.globalDisplayStatus<7||(this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e),e.didViewUpdate=!1)}onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(e){this._onRenderContainers.push(e)}removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}runOnRender(){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(e=[]){const t=this.root.children;for(let r=0;r<t.length;r++)this._getChildren(t[r],e);return e}_getChildren(e,t=[]){if(t.push(e),e.renderGroup)return t;const r=e.children;for(let i=0;i<r.length;i++)this._getChildren(r[i],t);return t}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new D),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new D),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const e=this._parentCacheAsTextureRenderGroup;return e?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new D),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(e.inverseWorldTransform).translate(-e._textureBounds.x,-e._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function lu(n,e,t={}){for(const r in e)!t[r]&&e[r]!==void 0&&(n[r]=e[r])}const Hn=new ce(null),Yn=new ce(null),jn=new ce(null,1,1),Xi=1,uu=2,qn=4;class ne extends se{constructor(e={}){var t,r;super(),this.uid=Q("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new D,this.relativeGroupTransform=new D,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new ce(this,0,0),this._scale=jn,this._pivot=Yn,this._skew=Hn,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],lu(this,e,{children:!0,parent:!0,effects:!0}),(t=e.children)==null||t.forEach(i=>this.addChild(i)),(r=e.parent)==null||r.addChild(this)}static mixin(e){Object.defineProperties(ne.prototype,Object.getOwnPropertyDescriptors(e))}set _didChangeId(e){this._didViewChangeTick=e>>12&4095,this._didContainerChangeTick=e&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...e){if(this.allowChildren||I(K,"addChild: Only Containers will be allowed to add children in v8.0.0"),e.length>1){for(let i=0;i<e.length;i++)this.addChild(e[i]);return e[0]}const t=e[0],r=this.renderGroup||this.parentRenderGroup;return t.parent===this?(this.children.splice(this.children.indexOf(t),1),this.children.push(t),r&&(r.structureDidChange=!0),t):(t.parent&&t.parent.removeChild(t),this.children.push(t),this.sortableChildren&&(this.sortDirty=!0),t.parent=this,t.didChange=!0,t._updateFlags=15,r&&r.addChild(t),this.emit("childAdded",t,this,this.children.length-1),t.emit("added",this),this._didViewChangeTick++,t._zIndex!==0&&t.depthOfChildModified(),t)}removeChild(...e){if(e.length>1){for(let i=0;i<e.length;i++)this.removeChild(e[i]);return e[0]}const t=e[0],r=this.children.indexOf(t);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(t):this.parentRenderGroup&&this.parentRenderGroup.removeChild(t),t.parent=null,this.emit("childRemoved",t,this,r),t.emit("removed",this)),t}_onUpdate(e){e&&e===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(e){!!this.renderGroup!==e&&(e?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),this.renderGroup=Oe.get(au,this),this.groupTransform=D.IDENTITY,e==null||e.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),Oe.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,e==null||e.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new D),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(e){this._position.x=e}get y(){return this._position.y}set y(e){this._position.y=e}get position(){return this._position}set position(e){this._position.copyFrom(e)}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this._skew))}get angle(){return this.rotation*wl}set angle(e){this.rotation=e*mt}get pivot(){return this._pivot===Yn&&(this._pivot=new ce(this,0,0)),this._pivot}set pivot(e){this._pivot===Yn&&(this._pivot=new ce(this,0,0)),typeof e=="number"?this._pivot.set(e):this._pivot.copyFrom(e)}get skew(){return this._skew===Hn&&(this._skew=new ce(this,0,0)),this._skew}set skew(e){this._skew===Hn&&(this._skew=new ce(this,0,0)),this._skew.copyFrom(e)}get scale(){return this._scale===jn&&(this._scale=new ce(this,1,1)),this._scale}set scale(e){this._scale===jn&&(this._scale=new ce(this,0,0)),typeof e=="number"?this._scale.set(e):this._scale.copyFrom(e)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(e){const t=this.getLocalBounds().width;this._setWidth(e,t)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(e){const t=this.getLocalBounds().height;this._setHeight(e,t)}getSize(e){e||(e={});const t=this.getLocalBounds();return e.width=Math.abs(this.scale.x*t.width),e.height=Math.abs(this.scale.y*t.height),e}setSize(e,t){const r=this.getLocalBounds();typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,r.width),t!==void 0&&this._setHeight(t,r.height)}_updateSkew(){const e=this._rotation,t=this._skew;this._cx=Math.cos(e+t._y),this._sx=Math.sin(e+t._y),this._cy=-Math.sin(e-t._x),this._sy=Math.cos(e-t._x)}updateTransform(e){return this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y),this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y),this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation,this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y),this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y),this}setFromMatrix(e){e.decompose(this)}updateLocalTransform(){const e=this._didContainerChangeTick;if(this._didLocalTransformChangeId===e)return;this._didLocalTransformChangeId=e;const t=this.localTransform,r=this._scale,i=this._pivot,s=this._position,o=r._x,a=r._y,l=i._x,u=i._y;t.a=this._cx*o,t.b=this._sx*o,t.c=this._cy*a,t.d=this._sy*a,t.tx=s._x-(l*t.a+u*t.c),t.ty=s._y-(l*t.b+u*t.d)}set alpha(e){e!==this.localAlpha&&(this.localAlpha=e,this._updateFlags|=Xi,this._onUpdate())}get alpha(){return this.localAlpha}set tint(e){const r=L.shared.setValue(e??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=Xi,this._onUpdate())}get tint(){return hn(this.localColor)}set blendMode(e){this.localBlendMode!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=uu,this.localBlendMode=e,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(e){const t=e?2:0;(this.localDisplayStatus&2)!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=qn,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(e){const t=e?0:4;(this.localDisplayStatus&4)!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=qn,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(e){const t=e?1:0;(this.localDisplayStatus&1)!==t&&(this._updateFlags|=qn,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(e=!1){var i;if(this.destroyed)return;this.destroyed=!0;let t;if(this.children.length&&(t=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof e=="boolean"?e:e==null?void 0:e.children)&&t)for(let s=0;s<t.length;++s)t[s].destroy(e);(i=this.renderGroup)==null||i.destroy(),this.renderGroup=null}}ne.mixin(Yl);ne.mixin(ru);ne.mixin(eu);ne.mixin(Jl);ne.mixin(ql);ne.mixin(Kl);ne.mixin(tu);ne.mixin(Vl);ne.mixin(Xl);ne.mixin(Zl);class no extends ne{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=0,this._lastInstructionTick=-1,this._bounds=new Ie(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}containsPoint(e){const t=this.bounds,{x:r,y:i}=e;return r>=t.minX&&r<=t.maxX&&i>=t.minY&&i<=t.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e){super.destroy(e),this._bounds=null}}class et extends no{constructor(e=R.EMPTY){e instanceof R&&(e={texture:e});const{texture:t=R.EMPTY,anchor:r,roundPixels:i,width:s,height:o,...a}=e;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new ce({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:t.defaultAnchor&&(this.anchor=t.defaultAnchor),this.texture=t,this.allowChildren=!1,this.roundPixels=i??!1,s!==void 0&&(this.width=s),o!==void 0&&(this.height=o)}static from(e,t=!1){return e instanceof R?new et(e):new et(R.from(e,t))}set texture(e){e||(e=R.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return Rl(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return I("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const e=this._anchor,t=this._texture,r=this._bounds,{width:i,height:s}=t.orig;r.minX=-e._x*i,r.maxX=r.minX+i,r.minY=-e._y*s,r.maxY=r.minY+s}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e==null?void 0:e.texture){const r=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this._setWidth(e,this._texture.orig.width),this._width=e}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this._setHeight(e,this._texture.orig.height),this._height=e}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this._texture.orig.width,e.height=Math.abs(this.scale.y)*this._texture.orig.height,e}setSize(e,t){typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,this._texture.orig.width),t!==void 0&&this._setHeight(t,this._texture.orig.height)}}const cu=new Ie;function ro(n,e,t){const r=cu;n.measurable=!0,qs(n,t,r),e.addBoundsMask(r),n.measurable=!1}function io(n,e,t){const r=xt.get();n.measurable=!0;const i=he.get().identity(),s=so(n,t,i);Qs(n,r,s),n.measurable=!1,e.addBoundsMask(r),he.return(i),xt.return(r)}function so(n,e,t){return n?(n!==e&&(so(n.parent,e,t),n.updateLocalTransform(),t.append(n.localTransform)),t):(J("Mask bounds, renderable is not inside the root container"),t)}class oo{constructor(e){this.priority=0,this.inverse=!1,this.pipe="alphaMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.renderMaskToTexture=!(e instanceof et),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(e,t){this.inverse||ro(this.mask,e,t)}addLocalBounds(e,t){io(this.mask,e,t)}containsPoint(e,t){const r=this.mask;return t(r,e)}destroy(){this.reset()}static test(e){return e instanceof et}}oo.extension=P.MaskEffect;class ao{constructor(e){this.priority=0,this.pipe="colorMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e}destroy(){}static test(e){return typeof e=="number"}}ao.extension=P.MaskEffect;class lo{constructor(e){this.priority=0,this.pipe="stencilMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(e,t){ro(this.mask,e,t)}addLocalBounds(e,t){io(this.mask,e,t)}containsPoint(e,t){const r=this.mask;return t(r,e)}destroy(){this.reset()}static test(e){return e instanceof ne}}lo.extension=P.MaskEffect;const hu={createCanvas:(n,e)=>{const t=document.createElement("canvas");return t.width=n,t.height=e,t},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,e)=>fetch(n,e),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let Hi=hu;const H={get(){return Hi},set(n){Hi=n}};class si extends me{constructor(e){e.resource||(e.resource=H.get().createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity,this.resizeCanvas(),this.transparent=!!e.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(e=this.width,t=this.height,r=this._resolution){const i=super.resize(e,t,r);return i&&this.resizeCanvas(),i}static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}si.extension=P.TextureSource;class nt extends me{constructor(e){if(e.resource&&globalThis.HTMLImageElement&&e.resource instanceof HTMLImageElement){const t=H.get().createCanvas(e.resource.width,e.resource.height);t.getContext("2d").drawImage(e.resource,0,0,e.resource.width,e.resource.height),e.resource=t,J("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||globalThis.VideoFrame&&e instanceof VideoFrame}}nt.extension=P.TextureSource;var An=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(An||{});class Kn{constructor(e,t=null,r=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=e,this._context=t,this.priority=r,this._once=i}match(e,t=null){return this._fn===e&&this._context===t}emit(e){this._fn&&(this._context?this._fn.call(this._context,e):this._fn(e));const t=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),t}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const t=this.next;return this.next=e?null:t,this.previous=null,t}}const uo=class ge{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Kn(null,null,1/0),this.deltaMS=1/ge.targetFPMS,this.elapsedMS=1/ge.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,t,r=An.NORMAL){return this._addListener(new Kn(e,t,r))}addOnce(e,t,r=An.NORMAL){return this._addListener(new Kn(e,t,r,!0))}_addListener(e){let t=this._head.next,r=this._head;if(!t)e.connect(r);else{for(;t;){if(e.priority>t.priority){e.connect(r);break}r=t,t=t.next}e.previous||e.connect(r)}return this._startIfPossible(),this}remove(e,t){let r=this._head.next;for(;r;)r.match(e,t)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,t=this._head;for(;t=t.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){const s=e-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=e-s%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*ge.targetFPMS;const r=this._head;let i=r.next;for(;i;)i=i.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const t=Math.min(this.maxFPS,e),r=Math.min(Math.max(0,t)/1e3,ge.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}}static get shared(){if(!ge._shared){const e=ge._shared=new ge;e.autoStart=!0,e._protected=!0}return ge._shared}static get system(){if(!ge._system){const e=ge._system=new ge;e.autoStart=!0,e._protected=!0}return ge._system}};uo.targetFPMS=.06;let be=uo,Zn;async function co(){return Zn??(Zn=(async()=>{var o;const e=document.createElement("canvas").getContext("webgl");if(!e)return"premultiply-alpha-on-upload";const t=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!t)return"premultiply-alpha-on-upload";const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);const i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t);const s=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,s),e.deleteFramebuffer(i),e.deleteTexture(r),(o=e.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Zn}const Rn=class ho extends me{constructor(e){super(e),this.isReady=!1,this.uploadMethodId="video",e={...ho.defaultOptions,...e},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this.alphaMode=e.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),e.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const e=be.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const e=this.resource,t=this.options;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(t.preload||e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlayThrough),e.addEventListener("error",this._onError,!0)),this.alphaMode=await co(),this._load=new Promise((r,i)=>{this.isValid?r(this):(this._resolve=r,this._reject=i,t.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${t.preloadTimeoutMs}ms`))})),e.load())}),this._load}_onError(e){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}_isSourcePlaying(){const e=this.resource;return!e.paused&&!e.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const e=this.resource;this.isValid&&(this.isReady=!0,this.resize(e.videoWidth,e.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const e=this.resource;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlayThrough),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(be.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(be.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(be.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement}};Rn.extension=P.TextureSource;Rn.defaultOptions={...me.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Rn.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let fn=Rn;const we=(n,e,t=!1)=>(Array.isArray(n)||(n=[n]),e?n.map(r=>typeof r=="string"||t?e(r):r):n);class fu{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const t=this._cache.get(e);return t||J(`[Assets] Asset id ${e} was not found in the Cache`),t}set(e,t){const r=we(e);let i;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(t)){i=u.getCacheableAssets(r,t);break}}const s=new Map(Object.entries(i||{}));i||r.forEach(l=>{s.set(l,t)});const o=[...s.keys()],a={cacheKeys:o,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const u=i?i[l]:t;this._cache.has(l)&&this._cache.get(l)!==u&&J("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(e){if(!this._cacheMap.has(e)){J(`[Assets] Asset id ${e} was not found in the Cache`);return}const t=this._cacheMap.get(e);t.cacheKeys.forEach(i=>{this._cache.delete(i)}),t.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const q=new fu,Ar=[];le.handleByList(P.TextureSource,Ar);function fo(n={}){const e=n&&n.resource,t=e?n.resource:n,r=e?n:{resource:n};for(let i=0;i<Ar.length;i++){const s=Ar[i];if(s.test(t))return new s(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function du(n={},e=!1){const t=n&&n.resource,r=t?n.resource:n,i=t?n:{resource:n};if(!e&&q.has(r))return q.get(r);const s=new R({source:fo(i)});return s.on("destroy",()=>{q.has(r)&&q.remove(r)}),e||q.set(r,s),s}function pu(n,e=!1){return typeof n=="string"?q.get(n):n instanceof me?new R({source:n}):du(n,e)}R.from=pu;me.from=fo;le.add(oo,ao,lo,fn,nt,si,ni);var Re=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(Re||{});function Ce(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function At(n){return n.split("?")[0].split("#")[0]}function mu(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function gu(n,e,t){return n.replace(new RegExp(mu(e),"g"),t)}function xu(n,e){let t="",r=0,i=-1,s=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(t.length<2||r!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){const l=t.lastIndexOf("/");if(l!==t.length-1){l===-1?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),i=a,s=0;continue}}else if(t.length===2||t.length===1){t="",r=0,i=a,s=0;continue}}}else t.length>0?t+=`/${n.slice(i+1,a)}`:t=n.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s!==-1?++s:s=-1}return t}const ie={toPosix(n){return gu(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){Ce(n),n=this.toPosix(n);const e=/^file:\/\/\//.exec(n);if(e)return e[0];const t=/^[^/:]+:\/{0,2}/.exec(n);return t?t[0]:""},toAbsolute(n,e,t){if(Ce(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const r=At(this.toPosix(e??H.get().getBaseUrl())),i=At(this.toPosix(t??this.rootname(r)));return n=this.toPosix(n),n.startsWith("/")?ie.join(i,n.slice(1)):this.isAbsolute(n)?n:this.join(r,n)},normalize(n){if(Ce(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let e="";const t=n.startsWith("/");this.hasProtocol(n)&&(e=this.rootname(n),n=n.slice(e.length));const r=n.endsWith("/");return n=xu(n),n.length>0&&r&&(n+="/"),t?`/${n}`:e+n},isAbsolute(n){return Ce(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let e;for(let t=0;t<n.length;++t){const r=n[t];if(Ce(r),r.length>0)if(e===void 0)e=r;else{const i=n[t-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?e+=`/../${r}`:e+=`/${r}`}}return e===void 0?".":this.normalize(e)},dirname(n){if(Ce(n),n.length===0)return".";n=this.toPosix(n);let e=n.charCodeAt(0);const t=e===47;let r=-1,i=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let a=n.length-1;a>=1;--a)if(e=n.charCodeAt(a),e===47){if(!i){r=a;break}}else i=!1;return r===-1?t?"/":this.isUrl(o)?s+n:s:t&&r===1?"//":s+n.slice(0,r)},rootname(n){Ce(n),n=this.toPosix(n);let e="";if(n.startsWith("/")?e="/":e=this.getProtocol(n),this.isUrl(n)){const t=n.indexOf("/",e.length);t!==-1?e=n.slice(0,t):e=n,e.endsWith("/")||(e+="/")}return e},basename(n,e){Ce(n),e&&Ce(e),n=At(this.toPosix(n));let t=0,r=-1,i=!0,s;if(e!==void 0&&e.length>0&&e.length<=n.length){if(e.length===n.length&&e===n)return"";let o=e.length-1,a=-1;for(s=n.length-1;s>=0;--s){const l=n.charCodeAt(s);if(l===47){if(!i){t=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===e.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=a))}return t===r?r=a:r===-1&&(r=n.length),n.slice(t,r)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!i){t=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":n.slice(t,r)},extname(n){Ce(n),n=At(this.toPosix(n));let e=-1,t=0,r=-1,i=!0,s=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!i){t=o+1;break}continue}r===-1&&(i=!1,r=o+1),a===46?e===-1?e=o:s!==1&&(s=1):e!==-1&&(s=-1)}return e===-1||r===-1||s===0||s===1&&e===r-1&&e===t+1?"":n.slice(e,r)},parse(n){Ce(n);const e={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return e;n=At(this.toPosix(n));let t=n.charCodeAt(0);const r=this.isAbsolute(n);let i;e.root=this.rootname(n),r||this.hasProtocol(n)?i=1:i=0;let s=-1,o=0,a=-1,l=!0,u=n.length-1,c=0;for(;u>=i;--u){if(t=n.charCodeAt(u),t===47){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),t===46?s===-1?s=u:c!==1&&(c=1):s!==-1&&(c=-1)}return s===-1||a===-1||c===0||c===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&r?e.base=e.name=n.slice(1,a):e.base=e.name=n.slice(o,a)):(o===0&&r?(e.name=n.slice(1,s),e.base=n.slice(1,a)):(e.name=n.slice(o,s),e.base=n.slice(o,a)),e.ext=n.slice(s,a)),e.dir=this.dirname(n),e},sep:"/",delimiter:":",joinExtensions:[".html"]};function po(n,e,t,r,i){const s=e[t];for(let o=0;o<s.length;o++){const a=s[o];t<e.length-1?po(n.replace(r[t],a),e,t+1,r,i):i.push(n.replace(r[t],a))}}function vu(n){const e=/\{(.*?)\}/g,t=n.match(e),r=[];if(t){const i=[];t.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),po(n,i,0,t,r)}else r.push(n);return r}const Tn=n=>!Array.isArray(n);class yt{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,t)=>`${e}${this._bundleIdConnector}${t}`,extractAssetIdFromBundle:(e,t)=>t.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(t=>{this._preferredOrder.push(t),t.priority||(t.priority=Object.keys(t.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const t=e;this._defaultSearchParams=Object.keys(t).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&")}}getAlias(e){const{alias:t,src:r}=e;return we(t||r,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(e){this._manifest&&J("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(t=>{this.addBundle(t.name,t.assets)})}addBundle(e,t){const r=[];let i=t;Array.isArray(t)||(i=Object.entries(t).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),i.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(e,a);r.push(u),l=[a,u]}else{const u=a.map(c=>this._createBundleAssetId(e,c));r.push(...u),l=[...a,...u]}this.add({...s,alias:l,src:o})}),this._bundles[e]=r}add(e){const t=[];Array.isArray(e)?t.push(...e):t.push(e);let r;r=s=>{this.hasKey(s)&&J(`[Resolver] already has key: ${s} overwriting`)},we(t).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:u}=s;const c=we(o).map(f=>typeof f=="string"?vu(f):Array.isArray(f)?f:[f]),h=this.getAlias(s);Array.isArray(h)?h.forEach(r):r(h);const d=[];c.forEach(f=>{f.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let m=0;m<this._parsers.length;m++){const v=this._parsers[m];if(v.test(p)){g=v.parse(p);break}}}else a=p.data??a,l=p.format??l,u=p.loadParser??u,g={...g,...p};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:h,data:a,format:l,loadParser:u}),d.push(g)})}),h.forEach(f=>{this._assetMap[f]=d})})}resolveBundle(e){const t=Tn(e);e=we(e);const r={};return e.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),a={};for(const l in o){const u=o[l];a[this._extractAssetIdFromBundle(i,l)]=u}r[i]=a}}),t?r[e[0]]:r}resolveUrl(e){const t=this.resolve(e);if(typeof e!="string"){const r={};for(const i in t)r[i]=t[i].src;return r}return t.src}resolve(e){const t=Tn(e);e=we(e);const r={};return e.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let s=this._assetMap[i];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const u=s.filter(c=>c[a]?c[a]===l:!1);u.length&&(s=u)})}),this._resolverHash[i]=s[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});r[i]=this._resolverHash[i]}),t?r[e[0]]:r}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let t=0;t<e.length;t++){const r=e[0],i=this._preferredOrder.find(s=>s.params.format.includes(r.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const t=/\?/.test(e)?"&":"?";return`${e}${t}${this._defaultSearchParams}`}_buildResolvedAsset(e,t){const{aliases:r,data:i,loadParser:s,format:o}=t;return(this._basePath||this._rootPath)&&(e.src=ie.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=r??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...i||{},...e.data},e.loadParser=s??e.loadParser,e.format=o??e.format??yu(e.src),e}}yt.RETINA_PREFIX=/@([0-9\.]+)x/;function yu(n){return n.split(".").pop().split("?").shift().split("#").shift()}const Tr=(n,e)=>{const t=e.split("?")[1];return t&&(n+=`?${t}`),n},mo=class zt{constructor(e,t){this.linkedSheets=[],this._texture=e instanceof R?e:null,this.textureSource=e.source,this.textures={},this.animations={},this.data=t;const r=parseFloat(t.meta.scale);r?(this.resolution=r,e.source.resolution=this.resolution):this.resolution=e.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=zt.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(e){let t=e;const r=zt.BATCH_SIZE;for(;t-e<r&&t<this._frameKeys.length;){const i=this._frameKeys[t],s=this._frames[i],o=s.frame;if(o){let a=null,l=null;const u=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,c=new Z(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);s.rotated?a=new Z(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new Z(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new Z(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new R({source:this.textureSource,frame:a,orig:c,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:i.toString()})}t++}}_processAnimations(){const e=this.data.animations||{};for(const t in e){this.animations[t]=[];for(let r=0;r<e[t].length;r++){const i=e[t][r];this.animations[t].push(this.textures[i])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*zt.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*zt.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){var t;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)==null||t.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};mo.BATCH_SIZE=1e3;let Yi=mo;const _u=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function go(n,e,t){const r={};if(n.forEach(i=>{r[i]=e}),Object.keys(e.textures).forEach(i=>{r[i]=e.textures[i]}),!t){const i=ie.dirname(n[0]);e.linkedSheets.forEach((s,o)=>{const a=go([`${i}/${e.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(r,a)})}return r}const bu={extension:P.Asset,cache:{test:n=>n instanceof Yi,getCacheableAssets:(n,e)=>go(n,e,!1)},resolver:{extension:{type:P.ResolveParser,name:"resolveSpritesheet"},test:n=>{const t=n.split("?")[0].split("."),r=t.pop(),i=t.pop();return r==="json"&&_u.includes(i)},parse:n=>{var t;const e=n.split(".");return{resolution:parseFloat(((t=yt.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:e[e.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:P.LoadParser,priority:Re.Normal,name:"spritesheetLoader"},async testParse(n,e){return ie.extname(e.src).toLowerCase()===".json"&&!!n.frames},async parse(n,e,t){var u,c;const{texture:r,imageFilename:i}=(e==null?void 0:e.data)??{};let s=ie.dirname(e.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(r instanceof R)o=r;else{const h=Tr(s+(i??n.meta.image),e.src);o=(await t.load([h]))[h]}const a=new Yi(o.source,n);await a.parse();const l=(u=n==null?void 0:n.meta)==null?void 0:u.related_multi_packs;if(Array.isArray(l)){const h=[];for(const f of l){if(typeof f!="string")continue;let p=s+f;(c=e.data)!=null&&c.ignoreMultiPack||(p=Tr(p,e.src),h.push(t.load({src:p,data:{ignoreMultiPack:!0}})))}const d=await Promise.all(h);a.linkedSheets=d,d.forEach(f=>{f.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==f))})}return a},async unload(n,e,t){await t.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};le.add(bu);const Qn=Object.create(null),ji=Object.create(null);function oi(n,e){let t=ji[n];return t===void 0&&(Qn[e]===void 0&&(Qn[e]=1),ji[n]=t=Qn[e]++),t}let it;function xo(){return(!it||it!=null&&it.isContextLost())&&(it=H.get().createCanvas().getContext("webgl",{})),it}let tn;function Su(){if(!tn){tn="mediump";const n=xo();n&&n.getShaderPrecisionFormat&&(tn=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return tn}function Cu(n,e,t){return e?n:t?(n=n.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function wu(n,e,t){const r=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let i=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;return i==="highp"&&r!=="highp"&&(i="mediump"),`precision ${i} float;
${n}`}else if(r!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function Au(n,e){return e?`#version 300 es
${n}`:n}const Tu={},Pu={};function Fu(n,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-"),e+=t?"-fragment":"-vertex";const r=t?Tu:Pu;return r[e]?(r[e]++,e+=`-${r[e]}`):r[e]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${e}`}
${n}`}function Iu(n,e){return e?n.replace("#version 300 es",""):n}const Jn={stripVersion:Iu,ensurePrecision:wu,addProgramDefines:Cu,setProgramName:Fu,insertVersion:Au},er=Object.create(null),vo=class Pr{constructor(e){e={...Pr.defaultOptions,...e};const t=e.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:t,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Su()},setProgramName:{name:e.name},addProgramDefines:t,insertVersion:t};let i=e.fragment,s=e.vertex;Object.keys(Jn).forEach(o=>{const a=r[o];i=Jn[o](i,a,!0),s=Jn[o](s,a,!1)}),this.fragment=i,this.vertex=s,this.transformFeedbackVaryings=e.transformFeedbackVaryings,this._key=oi(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(e){const t=`${e.vertex}:${e.fragment}`;return er[t]||(er[t]=new Pr(e)),er[t]}};vo.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let U=vo;const qi={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Mu(n){return qi[n]??qi.float32}const zu={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Ou({source:n,entryPoint:e}){const t={},r=n.indexOf(`fn ${e}`);if(r!==-1){const i=n.indexOf("->",r);if(i!==-1){const s=n.substring(r,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=zu[a[3]]??"float32";t[a[2]]={location:parseInt(a[1],10),format:l,stride:Mu(l).stride,offset:0,instance:!1,start:0}}}}return t}function tr(n){var h,d;const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,t=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(h=n.match(e))==null?void 0:h.map(f=>({group:parseInt(f.match(t)[1],10),binding:parseInt(f.match(r)[1],10),name:f.match(i)[2],isUniform:f.match(i)[1]==="<uniform>",type:f.match(s)[1]}));if(!u)return{groups:[],structs:[]};const c=((d=n.match(o))==null?void 0:d.map(f=>{const p=f.match(l)[1],g=f.match(a).reduce((m,v)=>{const[y,x]=v.split(":");return m[y.trim()]=x.trim(),m},{});return g?{name:p,members:g}:null}).filter(({name:f})=>u.some(p=>p.type===f)))??[];return{groups:u,structs:c}}var Ot=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Ot||{});function Ru({groups:n}){const e=[];for(let t=0;t<n.length;t++){const r=n[t];e[r.group]||(e[r.group]=[]),r.isUniform?e[r.group].push({binding:r.binding,visibility:Ot.VERTEX|Ot.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?e[r.group].push({binding:r.binding,visibility:Ot.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&e[r.group].push({binding:r.binding,visibility:Ot.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function Eu({groups:n}){const e=[];for(let t=0;t<n.length;t++){const r=n[t];e[r.group]||(e[r.group]={}),e[r.group][r.name]=r.binding}return e}function Uu(n,e){const t=new Set,r=new Set,i=[...n.structs,...e.structs].filter(o=>t.has(o.name)?!1:(t.add(o.name),!0)),s=[...n.groups,...e.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:i,groups:s}}const nr=Object.create(null);class E{constructor(e){var a,l;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:t,vertex:r,layout:i,gpuLayout:s,name:o}=e;if(this.name=o,this.fragment=t,this.vertex=r,t.source===r.source){const u=tr(t.source);this.structsAndGroups=u}else{const u=tr(r.source),c=tr(t.source);this.structsAndGroups=Uu(u,c)}this.layout=i??Eu(this.structsAndGroups),this.gpuLayout=s??Ru(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:t}=this,r=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=oi(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Ou(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){const t=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return nr[t]||(nr[t]=new E(e)),nr[t]}}const yo=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],ku=yo.reduce((n,e)=>(n[e]=!0,n),{});function Bu(n,e){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const _o=class bo{constructor(e,t){this._touched=0,this.uid=Q("uniform"),this._resourceType="uniformGroup",this._resourceId=Q("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,t={...bo.defaultOptions,...t},this.uniformStructures=e;const r={};for(const i in e){const s=e[i];if(s.name=i,s.size=s.size??1,!ku[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${yo.join(", ")}`);s.value??(s.value=Bu(s.type,s.size)),r[i]=s.value}this.uniforms=r,this._dirtyId=1,this.ubo=t.ubo,this.isStatic=t.isStatic,this._signature=oi(Object.keys(r).map(i=>`${i}-${e[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};_o.defaultOptions={ubo:!1,isStatic:!1};let ai=_o;class dn{constructor(e){this.resources=Object.create(null),this._dirty=!0;let t=0;for(const r in e){const i=e[r];this.setResource(i,t++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const e=[];let t=0;for(const r in this.resources)e[t++]=this.resources[r]._resourceId;this._key=e.join("|")}setResource(e,t){var i,s;const r=this.resources[t];e!==r&&(r&&((i=e.off)==null||i.call(e,"change",this.onResourceChange,this)),(s=e.on)==null||s.call(e,"change",this.onResourceChange,this),this.resources[t]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e){const t=this.resources;for(const r in t)t[r]._touched=e}destroy(){var t;const e=this.resources;for(const r in e){const i=e[r];(t=i.off)==null||t.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(e){if(this._dirty=!0,e.destroyed){const t=this.resources;for(const r in t)t[r]===e&&(t[r]=null)}else this._updateKey()}}var Pn=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))(Pn||{});class En extends se{constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:t,glProgram:r,groups:i,resources:s,compatibleRenderers:o,groupMap:a}=e;this.gpuProgram=t,this.glProgram=r,o===void 0&&(o=0,t&&(o|=Pn.WEBGPU),r&&(o|=Pn.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!i&&(s={}),s&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!t&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!t&&i&&a)for(const u in a)for(const c in a[u]){const h=a[u][c];l[h]={group:u,binding:c,name:h}}else if(t&&i&&!a){const u=t.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else if(s){i={},a={},t&&t.structsAndGroups.groups.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,l[h.name]=h});let u=0;for(const c in s)l[c]||(i[99]||(i[99]=new dn,this._ownedBindGroups.push(i[99])),l[c]={group:99,binding:u,name:c},a[99]=a[99]||{},a[99][u]=c,u++);for(const c in s){const h=c;let d=s[c];!d.source&&!d._resourceType&&(d=new ai(d));const f=l[h];f&&(i[f.group]||(i[f.group]=new dn,this._ownedBindGroups.push(i[f.group])),i[f.group].setResource(d,f.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(e,t,r){var i,s;(i=this._uniformBindMap)[t]||(i[t]={}),(s=this._uniformBindMap[t])[r]||(s[r]=e),this.groups[t]||(this.groups[t]=new dn,this._ownedBindGroups.push(this.groups[t]))}_buildResourceAccessor(e,t){const r={};for(const i in t){const s=t[i];Object.defineProperty(r,s.name,{get(){return e[s.group].getResource(s.binding)},set(o){e[s.group].setResource(o,s.binding)}})}return r}destroy(e=!1){var t,r;this.emit("destroy",this),e&&((t=this.gpuProgram)==null||t.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){const{gpu:t,gl:r,...i}=e;let s,o;return t&&(s=E.from(t)),r&&(o=U.from(r)),new En({gpuProgram:s,glProgram:o,...i})}}const Lu={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},rr=0,ir=1,sr=2,or=3,ar=4,lr=5,Fr=class So{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<rr)}set blend(e){!!(this.data&1<<rr)!==e&&(this.data^=1<<rr)}get offsets(){return!!(this.data&1<<ir)}set offsets(e){!!(this.data&1<<ir)!==e&&(this.data^=1<<ir)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<sr)}set culling(e){!!(this.data&1<<sr)!==e&&(this.data^=1<<sr)}get depthTest(){return!!(this.data&1<<or)}set depthTest(e){!!(this.data&1<<or)!==e&&(this.data^=1<<or)}get depthMask(){return!!(this.data&1<<lr)}set depthMask(e){!!(this.data&1<<lr)!==e&&(this.data^=1<<lr)}get clockwiseFrontFace(){return!!(this.data&1<<ar)}set clockwiseFrontFace(e){!!(this.data&1<<ar)!==e&&(this.data^=1<<ar)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=Lu[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new So;return e.depthTest=!1,e.blend=!0,e}};Fr.default2d=Fr.for2d();let Du=Fr;const Co=class Ir extends En{constructor(e){e={...Ir.defaultOptions,...e},super(e),this.enabled=!0,this._state=Du.for2d(),this.blendMode=e.blendMode,this.padding=e.padding,typeof e.antialias=="boolean"?this.antialias=e.antialias?"on":"off":this.antialias=e.antialias,this.resolution=e.resolution,this.blendRequired=e.blendRequired,this.clipToViewport=e.clipToViewport,this.addResource("uTexture",0,1)}apply(e,t,r,i){e.applyFilter(this,t,r,i)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(e){const{gpu:t,gl:r,...i}=e;let s,o;return t&&(s=E.from(t)),r&&(o=U.from(r)),new Ir({gpuProgram:s,glProgram:o,...i})}};Co.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let B=Co;const Mr=[];le.handleByNamedList(P.Environment,Mr);async function Gu(n){if(!n)for(let e=0;e<Mr.length;e++){const t=Mr[e];if(t.value.test()){await t.value.load();return}}}let Tt;function Nu(){if(typeof Tt=="boolean")return Tt;try{Tt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Tt=!1}return Tt}var li={exports:{}};li.exports=Un;li.exports.default=Un;function Un(n,e,t){t=t||2;var r=e&&e.length,i=r?e[0]*t:n.length,s=wo(n,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,u,c,h,d,f;if(r&&(s=Hu(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(var p=t;p<i;p+=t)h=n[p],d=n[p+1],h<a&&(a=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);f=Math.max(u-a,c-l),f=f!==0?32767/f:0}return Bt(s,o,t,a,l,f,0),o}function wo(n,e,t,r,i){var s,o;if(i===Rr(n,e,t,r)>0)for(s=e;s<t;s+=r)o=Ki(s,n[s],n[s+1],o);else for(s=t-r;s>=e;s-=r)o=Ki(s,n[s],n[s+1],o);return o&&kn(o,o.next)&&(Dt(o),o=o.next),o}function tt(n,e){if(!n)return n;e||(e=n);var t=n,r;do if(r=!1,!t.steiner&&(kn(t,t.next)||j(t.prev,t,t.next)===0)){if(Dt(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Bt(n,e,t,r,i,s,o){if(n){!o&&s&&Zu(n,r,i,s);for(var a=n,l,u;n.prev!==n.next;){if(l=n.prev,u=n.next,s?Vu(n,r,i,s):$u(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),Dt(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=Wu(tt(n),e,t),Bt(n,e,t,r,i,s,2)):o===2&&Xu(n,e,t,r,i,s):Bt(tt(n),e,t,r,i,s,1);break}}}}function $u(n){var e=n.prev,t=n,r=n.next;if(j(e,t,r)>=0)return!1;for(var i=e.x,s=t.x,o=r.x,a=e.y,l=t.y,u=r.y,c=i<s?i<o?i:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>u?a:u:l>u?l:u,p=r.next;p!==e;){if(p.x>=c&&p.x<=d&&p.y>=h&&p.y<=f&&ft(i,a,s,l,o,u,p.x,p.y)&&j(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vu(n,e,t,r){var i=n.prev,s=n,o=n.next;if(j(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,u=o.x,c=i.y,h=s.y,d=o.y,f=a<l?a<u?a:u:l<u?l:u,p=c<h?c<d?c:d:h<d?h:d,g=a>l?a>u?a:u:l>u?l:u,m=c>h?c>d?c:d:h>d?h:d,v=zr(f,p,e,t,r),y=zr(g,m,e,t,r),x=n.prevZ,_=n.nextZ;x&&x.z>=v&&_&&_.z<=y;){if(x.x>=f&&x.x<=g&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&ft(a,c,l,h,u,d,x.x,x.y)&&j(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=g&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&ft(a,c,l,h,u,d,_.x,_.y)&&j(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=v;){if(x.x>=f&&x.x<=g&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&ft(a,c,l,h,u,d,x.x,x.y)&&j(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&ft(a,c,l,h,u,d,_.x,_.y)&&j(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Wu(n,e,t){var r=n;do{var i=r.prev,s=r.next.next;!kn(i,s)&&Ao(i,r,r.next,s)&&Lt(i,s)&&Lt(s,i)&&(e.push(i.i/t|0),e.push(r.i/t|0),e.push(s.i/t|0),Dt(r),Dt(r.next),r=n=s),r=r.next}while(r!==n);return tt(r)}function Xu(n,e,t,r,i,s){var o=n;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&ec(o,a)){var l=To(o,a);o=tt(o,o.next),l=tt(l,l.next),Bt(o,e,t,r,i,s,0),Bt(l,e,t,r,i,s,0);return}a=a.next}o=o.next}while(o!==n)}function Hu(n,e,t,r){var i=[],s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*r,l=s<o-1?e[s+1]*r:n.length,u=wo(n,a,l,r,!1),u===u.next&&(u.steiner=!0),i.push(Ju(u));for(i.sort(Yu),s=0;s<i.length;s++)t=ju(i[s],t);return t}function Yu(n,e){return n.x-e.x}function ju(n,e){var t=qu(n,e);if(!t)return e;var r=To(t,n);return tt(r,r.next),tt(t,t.next)}function qu(n,e){var t=e,r=n.x,i=n.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=r&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===r))return o}t=t.next}while(t!==e);if(!o)return null;var l=o,u=o.x,c=o.y,h=1/0,d;t=o;do r>=t.x&&t.x>=u&&r!==t.x&&ft(i<c?r:s,i,u,c,i<c?s:r,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(r-t.x),Lt(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Ku(o,t)))&&(o=t,h=d)),t=t.next;while(t!==l);return o}function Ku(n,e){return j(n.prev,n,e.prev)<0&&j(e.next,n,n.next)<0}function Zu(n,e,t,r){var i=n;do i.z===0&&(i.z=zr(i.x,i.y,e,t,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,Qu(i)}function Qu(n){var e,t,r,i,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,r=t,a=0,e=0;e<u&&(a++,r=r.nextZ,!!r);e++);for(l=u;a>0||l>0&&r;)a!==0&&(l===0||!r||t.z<=r.z)?(i=t,t=t.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;t=r}s.nextZ=null,u*=2}while(o>1);return n}function zr(n,e,t,r,i){return n=(n-t)*i|0,e=(e-r)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ju(n){var e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ft(n,e,t,r,i,s,o,a){return(i-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(r-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(r-a)}function ec(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!tc(n,e)&&(Lt(n,e)&&Lt(e,n)&&nc(n,e)&&(j(n.prev,n,e.prev)||j(n,e.prev,e))||kn(n,e)&&j(n.prev,n,n.next)>0&&j(e.prev,e,e.next)>0)}function j(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function kn(n,e){return n.x===e.x&&n.y===e.y}function Ao(n,e,t,r){var i=rn(j(n,e,t)),s=rn(j(n,e,r)),o=rn(j(t,r,n)),a=rn(j(t,r,e));return!!(i!==s&&o!==a||i===0&&nn(n,t,e)||s===0&&nn(n,r,e)||o===0&&nn(t,n,r)||a===0&&nn(t,e,r))}function nn(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function rn(n){return n>0?1:n<0?-1:0}function tc(n,e){var t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ao(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Lt(n,e){return j(n.prev,n,n.next)<0?j(n,e,n.next)>=0&&j(n,n.prev,e)>=0:j(n,e,n.prev)<0||j(n,n.next,e)<0}function nc(n,e){var t=n,r=!1,i=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==n);return r}function To(n,e){var t=new Or(n.i,n.x,n.y),r=new Or(e.i,e.x,e.y),i=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=i,i.prev=t,r.next=t,t.prev=r,s.next=r,r.prev=s,r}function Ki(n,e,t,r){var i=new Or(n,e,t);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Dt(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Or(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Un.deviation=function(n,e,t,r){var i=e&&e.length,s=i?e[0]*t:n.length,o=Math.abs(Rr(n,0,s,t));if(i)for(var a=0,l=e.length;a<l;a++){var u=e[a]*t,c=a<l-1?e[a+1]*t:n.length;o-=Math.abs(Rr(n,u,c,t))}var h=0;for(a=0;a<r.length;a+=3){var d=r[a]*t,f=r[a+1]*t,p=r[a+2]*t;h+=Math.abs((n[d]-n[p])*(n[f+1]-n[d+1])-(n[d]-n[f])*(n[p+1]-n[d+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Rr(n,e,t,r){for(var i=0,s=e,o=t-r;s<t;s+=r)i+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return i}Un.flatten=function(n){for(var e=n[0][0].length,t={vertices:[],holes:[],dimensions:e},r=0,i=0;i<n.length;i++){for(var s=0;s<n[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(n[i][s][o]);i>0&&(r+=n[i-1].length,t.holes.push(r))}return t};var rc=li.exports;const ic=ti(rc);var Po=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(Po||{});class sc{constructor(e){this.items=[],this._name=e}emit(e,t,r,i,s,o,a,l){const{name:u,items:c}=this;for(let h=0,d=c.length;h<d;h++)c[h][u](e,t,r,i,s,o,a,l);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const oc=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Fo=class Io extends se{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const t=[...oc,...this.config.runners??[]];this._addRunners(...t),this._unsafeEvalCheck()}async init(e={}){const t=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Gu(t),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)e={...this._systemsHash[r].constructor.defaultOptions,...e};e={...Io.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(e);this._initOptions=e}render(e,t){let r=e;if(r instanceof ne&&(r={container:r},t&&(I(K,"passing a second argument is deprecated, please use render options instead"),r.target=t.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const i=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=i?r.clearColor:L.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(e,t,r){const i=this.view.resolution;this.view.resize(e,t,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==i&&this.runners.resolutionChange.emit(r)}clear(e={}){const t=this;e.target||(e.target=t.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Po.ALL);const{clear:r,clearColor:i,target:s}=e;L.shared.setValue(i??this.background.colorRgba),t.renderTarget.clear(s,r,L.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(t=>{this.runners[t]=new sc(t)})}_addSystems(e){let t;for(t in e){const r=e[t];this._addSystem(r.value,r.name)}}_addSystem(e,t){const r=new e(this);if(this[t])throw new Error(`Whoops! The name "${t}" is already in use`);this[t]=r,this._systemsHash[t]=r;for(const i in this.runners)this.runners[i].add(r);return this}_addPipes(e,t){const r=t.reduce((i,s)=>(i[s.name]=s.value,i),{});e.forEach(i=>{const s=i.value,o=i.name,a=r[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(t=>{t.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Nu())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Fo.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Mo=Fo,sn;function ac(n){return sn!==void 0||(sn=(()=>{var t;const e={stencil:!0,failIfMajorPerformanceCaveat:n??Mo.defaultOptions.failIfMajorPerformanceCaveat};try{if(!H.get().getWebGLRenderingContext())return!1;let i=H.get().createCanvas().getContext("webgl",e);const s=!!((t=i==null?void 0:i.getContextAttributes())!=null&&t.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}})()),sn}let on;async function lc(n={}){return on!==void 0||(on=await(async()=>{const e=H.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),on}const Zi=["webgl","webgpu","canvas"];async function uc(n){let e=[];n.preference?(e.push(n.preference),Zi.forEach(s=>{s!==n.preference&&e.push(s)})):e=Zi.slice();let t,r={};for(let s=0;s<e.length;s++){const o=e[s];if(o==="webgpu"&&await lc()){const{WebGPURenderer:a}=await Cn(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-Tv_n2q0v.js");return{WebGPURenderer:l}},__vite__mapDeps([3,2,4]),import.meta.url);t=a,r={...n,...n.webgpu};break}else if(o==="webgl"&&ac(n.failIfMajorPerformanceCaveat??Mo.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await Cn(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-BUssdc9C.js");return{WebGLRenderer:l}},__vite__mapDeps([5,2,4]),import.meta.url);t=a,r={...n,...n.webgl};break}else if(o==="canvas")throw r={...n},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!t)throw new Error("No available renderer for the current environment");const i=new t;return await i.init(r),i}const zo="8.6.4";class Oo{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,zo)}static destroy(){}}Oo.extension=P.Application;class cc{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,zo)}destroy(){this._renderer=null}}cc.extension={type:[P.WebGLSystem,P.WebGPUSystem],name:"initHook",priority:-10};const Ro=class Er{constructor(...e){this.stage=new ne,e[0]!==void 0&&I(K,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await uc(e),Er._plugins.forEach(t=>{t.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return I(K,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,t=!1){const r=Er._plugins.slice(0);r.reverse(),r.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Ro._plugins=[];let Eo=Ro;le.handleByList(P.Application,Eo._plugins);le.add(Oo);class Uo extends se{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.applyFillAsTint=!0,this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return I(K,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return I(K,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return I(K,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return I(K,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return I(K,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(e=!1){var t;this.emit("destroy",this),this.removeAllListeners();for(const r in this.chars)(t=this.chars[r].texture)==null||t.destroy();this.chars=null,e&&(this.pages.forEach(r=>r.texture.destroy(!0)),this.pages=null)}}const ko=class Ur{constructor(e,t,r,i){this.uid=Q("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=e,this.y0=t,this.x1=r,this.y1=i}addColorStop(e,t){return this.gradientStops.push({offset:e,color:L.shared.setValue(t).toHexa()}),this._styleKey=null,this}buildLinearGradient(){if(this.texture)return;const e=Ur.defaultTextureSize,{gradientStops:t}=this,r=H.get().createCanvas();r.width=e,r.height=e;const i=r.getContext("2d"),s=i.createLinearGradient(0,0,Ur.defaultTextureSize,1);for(let g=0;g<t.length;g++){const m=t[g];s.addColorStop(m.offset,m.color)}i.fillStyle=s,i.fillRect(0,0,e,e),this.texture=new R({source:new nt({resource:r,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:u}=this,c=new D,h=l-o,d=u-a,f=Math.sqrt(h*h+d*d),p=Math.atan2(d,h);c.translate(-o,-a),c.scale(1/e,1/e),c.rotate(-p),c.scale(256/f,1),this.transform=c,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const e=this.gradientStops.map(i=>`${i.offset}-${i.color}`).join("-"),t=this.texture.uid,r=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${e}-${t}-${r}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};ko.defaultTextureSize=256;let Gt=ko;const Qi={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class Bn{constructor(e,t){this.uid=Q("fillPattern"),this.transform=new D,this._styleKey=null,this.texture=e,this.transform.scale(1/e.frame.width,1/e.frame.height),t&&(e.source.style.addressModeU=Qi[t].addressModeU,e.source.style.addressModeV=Qi[t].addressModeV)}setTransform(e){const t=this.texture;this.transform.copyFrom(e),this.transform.invert(),this.transform.scale(1/t.frame.width,1/t.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var hc=dc,ur={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},fc=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function dc(n){var e=[];return n.replace(fc,function(t,r,i){var s=r.toLowerCase();for(i=mc(i),s=="m"&&i.length>2&&(e.push([r].concat(i.splice(0,2))),s="l",r=r=="m"?"l":"L");;){if(i.length==ur[s])return i.unshift(r),e.push(i);if(i.length<ur[s])throw new Error("malformed path data");e.push([r].concat(i.splice(0,ur[s])))}}),e}var pc=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function mc(n){var e=n.match(pc);return e?e.map(Number):[]}const gc=ti(hc);function xc(n,e){const t=gc(n),r=[];let i=null,s=0,o=0;for(let a=0;a<t.length;a++){const l=t[a],u=l[0],c=l;switch(u){case"M":s=c[1],o=c[2],e.moveTo(s,o);break;case"m":s+=c[1],o+=c[2],e.moveTo(s,o);break;case"H":s=c[1],e.lineTo(s,o);break;case"h":s+=c[1],e.lineTo(s,o);break;case"V":o=c[1],e.lineTo(s,o);break;case"v":o+=c[1],e.lineTo(s,o);break;case"L":s=c[1],o=c[2],e.lineTo(s,o);break;case"l":s+=c[1],o+=c[2],e.lineTo(s,o);break;case"C":s=c[5],o=c[6],e.bezierCurveTo(c[1],c[2],c[3],c[4],s,o);break;case"c":e.bezierCurveTo(s+c[1],o+c[2],s+c[3],o+c[4],s+c[5],o+c[6]),s+=c[5],o+=c[6];break;case"S":s=c[3],o=c[4],e.bezierCurveToShort(c[1],c[2],s,o);break;case"s":e.bezierCurveToShort(s+c[1],o+c[2],s+c[3],o+c[4]),s+=c[3],o+=c[4];break;case"Q":s=c[3],o=c[4],e.quadraticCurveTo(c[1],c[2],s,o);break;case"q":e.quadraticCurveTo(s+c[1],o+c[2],s+c[3],o+c[4]),s+=c[3],o+=c[4];break;case"T":s=c[1],o=c[2],e.quadraticCurveToShort(s,o);break;case"t":s+=c[1],o+=c[2],e.quadraticCurveToShort(s,o);break;case"A":s=c[6],o=c[7],e.arcToSvg(c[1],c[2],c[3],c[4],c[5],s,o);break;case"a":s+=c[6],o+=c[7],e.arcToSvg(c[1],c[2],c[3],c[4],c[5],s,o);break;case"Z":case"z":e.closePath(),r.length>0&&(i=r.pop(),i?(s=i.startX,o=i.startY):(s=0,o=0)),i=null;break;default:J(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&i===null&&(i={startX:s,startY:o},r.push(i))}return e}class ui{constructor(e=0,t=0,r=0){this.type="circle",this.x=e,this.y=t,this.radius=r}clone(){return new ui(this.x,this.y,this.radius)}contains(e,t){if(this.radius<=0)return!1;const r=this.radius*this.radius;let i=this.x-e,s=this.y-t;return i*=i,s*=s,i+s<=r}strokeContains(e,t,r){if(this.radius===0)return!1;const i=this.x-e,s=this.y-t,o=this.radius,a=r/2,l=Math.sqrt(i*i+s*s);return l<o+a&&l>o-a}getBounds(e){return e||(e=new Z),e.x=this.x-this.radius,e.y=this.y-this.radius,e.width=this.radius*2,e.height=this.radius*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.radius=e.radius,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class ci{constructor(e=0,t=0,r=0,i=0){this.type="ellipse",this.x=e,this.y=t,this.halfWidth=r,this.halfHeight=i}clone(){return new ci(this.x,this.y,this.halfWidth,this.halfHeight)}contains(e,t){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let r=(e-this.x)/this.halfWidth,i=(t-this.y)/this.halfHeight;return r*=r,i*=i,r+i<=1}strokeContains(e,t,r){const{halfWidth:i,halfHeight:s}=this;if(i<=0||s<=0)return!1;const o=r/2,a=i-o,l=s-o,u=i+o,c=s+o,h=e-this.x,d=t-this.y,f=h*h/(a*a)+d*d/(l*l),p=h*h/(u*u)+d*d/(c*c);return f>1&&p<=1}getBounds(e){return e||(e=new Z),e.x=this.x-this.halfWidth,e.y=this.y-this.halfHeight,e.width=this.halfWidth*2,e.height=this.halfHeight*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.halfWidth=e.halfWidth,this.halfHeight=e.halfHeight,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function vc(n,e,t,r,i,s){const o=n-t,a=e-r,l=i-t,u=s-r,c=o*l+a*u,h=l*l+u*u;let d=-1;h!==0&&(d=c/h);let f,p;d<0?(f=t,p=r):d>1?(f=i,p=s):(f=t+d*l,p=r+d*u);const g=n-f,m=e-p;return g*g+m*m}class Et{constructor(...e){this.type="polygon";let t=Array.isArray(e[0])?e[0]:e;if(typeof t[0]!="number"){const r=[];for(let i=0,s=t.length;i<s;i++)r.push(t[i].x,t[i].y);t=r}this.points=t,this.closePath=!0}clone(){const e=this.points.slice(),t=new Et(e);return t.closePath=this.closePath,t}contains(e,t){let r=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const a=this.points[s*2],l=this.points[s*2+1],u=this.points[o*2],c=this.points[o*2+1];l>t!=c>t&&e<(u-a)*((t-l)/(c-l))+a&&(r=!r)}return r}strokeContains(e,t,r){const i=r/2,s=i*i,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const u=o[l],c=o[l+1],h=o[(l+2)%o.length],d=o[(l+3)%o.length];if(vc(e,t,u,c,h,d)<=s)return!0}return!1}getBounds(e){e||(e=new Z);const t=this.points;let r=1/0,i=-1/0,s=1/0,o=-1/0;for(let a=0,l=t.length;a<l;a+=2){const u=t[a],c=t[a+1];r=u<r?u:r,i=u>i?u:i,s=c<s?c:s,o=c>o?c:o}return e.x=r,e.width=i-r,e.y=s,e.height=o-s,e}copyFrom(e){return this.points=e.points.slice(),this.closePath=e.closePath,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((e,t)=>`${e}, ${t}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const an=(n,e,t,r,i,s)=>{const o=n-t,a=e-r,l=Math.sqrt(o*o+a*a);return l>=i-s&&l<=i+s};class hi{constructor(e=0,t=0,r=0,i=0,s=20){this.type="roundedRectangle",this.x=e,this.y=t,this.width=r,this.height=i,this.radius=s}getBounds(e){return e||(e=new Z),e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}clone(){return new hi(this.x,this.y,this.width,this.height,this.radius)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){const r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+r&&t<=this.y+this.height-r||e>=this.x+r&&e<=this.x+this.width-r)return!0;let i=e-(this.x+r),s=t-(this.y+r);const o=r*r;if(i*i+s*s<=o||(i=e-(this.x+this.width-r),i*i+s*s<=o)||(s=t-(this.y+this.height-r),i*i+s*s<=o)||(i=e-(this.x+r),i*i+s*s<=o))return!0}return!1}strokeContains(e,t,r){const{x:i,y:s,width:o,height:a,radius:l}=this,u=r/2,c=i+l,h=s+l,d=o-l*2,f=a-l*2,p=i+o,g=s+a;return(e>=i-u&&e<=i+u||e>=p-u&&e<=p+u)&&t>=h&&t<=h+f||(t>=s-u&&t<=s+u||t>=g-u&&t<=g+u)&&e>=c&&e<=c+d?!0:e<c&&t<h&&an(e,t,c,h,l,u)||e>p-l&&t<h&&an(e,t,p-l,h,l,u)||e>p-l&&t>g-l&&an(e,t,p-l,g-l,l,u)||e<c&&t>g-l&&an(e,t,c,g-l,l,u)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const yc=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function _c(n){let e="";for(let t=0;t<n;++t)t>0&&(e+=`
else `),t<n-1&&(e+=`if(test == ${t}.0){}`);return e}function bc(n,e){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const t=e.createShader(e.FRAGMENT_SHADER);try{for(;;){const r=yc.replace(/%forloop%/gi,_c(n));if(e.shaderSource(t,r),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))n=n/2|0;else break}}finally{e.deleteShader(t)}return n}let st=null;function Bo(){var e;if(st)return st;const n=xo();return st=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),st=bc(st,n),(e=n.getExtension("WEBGL_lose_context"))==null||e.loseContext(),st}const Lo={};function Sc(n,e){let t=2166136261;for(let r=0;r<e;r++)t^=n[r].uid,t=Math.imul(t,16777619),t>>>=0;return Lo[t]||Cc(n,e,t)}let cr=0;function Cc(n,e,t){const r={};let i=0;cr||(cr=Bo());for(let o=0;o<cr;o++){const a=o<e?n[o]:R.EMPTY.source;r[i++]=a.source,r[i++]=a.style}const s=new dn(r);return Lo[t]=s,s}class Ji{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function es(n,e){const t=n.byteLength/8|0,r=new Float64Array(n,0,t);new Float64Array(e,0,t).set(r);const s=n.byteLength-t*8;if(s>0){const o=new Uint8Array(n,t*8,s);new Uint8Array(e,t*8,s).set(o)}}const wc={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Ac=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",n[n.NONE=5]="NONE",n))(Ac||{});function ts(n,e){return e.alphaMode==="no-premultiply-alpha"&&wc[n]||n}class Tc{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){const t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}class Pc{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new Tc,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const Do=[];let kr=0;function ns(){return kr>0?Do[--kr]:new Pc}function rs(n){Do[kr++]=n}let Pt=0;const Go=class pn{constructor(e={}){this.uid=Q("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],pn.defaultOptions.maxTextures=pn.defaultOptions.maxTextures??Bo(),e={...pn.defaultOptions,...e};const{maxTextures:t,attributesInitialSize:r,indicesInitialSize:i}=e;this.attributeBuffer=new Ji(r*4),this.indexBuffer=new Uint16Array(i),this.maxTextures=t}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)rs(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e._indexStart=this.indexSize,e._attributeStart=this.attributeSize,e._batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.attributeSize*this.vertexSize}checkAndUpdateTexture(e,t){const r=e._batch.textures.ids[t._source.uid];return!r&&r!==0?!1:(e._textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0;const t=this.attributeBuffer;e.packAsQuad?this.packQuadAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId):this.packAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}break(e){const t=this._elements;if(!t[this.elementStart])return;let r=ns(),i=r.textures;i.clear();const s=t[this.elementStart];let o=ts(s.blendMode,s.texture._source),a=s.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const l=this.attributeBuffer.float32View,u=this.attributeBuffer.uint32View,c=this.indexBuffer;let h=this._batchIndexSize,d=this._batchIndexStart,f="startBatch";const p=this.maxTextures;for(let g=this.elementStart;g<this.elementSize;++g){const m=t[g];t[g]=null;const y=m.texture._source,x=ts(m.blendMode,y),_=o!==x||a!==m.topology;if(y._batchTick===Pt&&!_){m._textureId=y._textureBindLocation,h+=m.indexSize,m.packAsQuad?(this.packQuadAttributes(m,l,u,m._attributeStart,m._textureId),this.packQuadIndex(c,m._indexStart,m._attributeStart/this.vertexSize)):(this.packAttributes(m,l,u,m._attributeStart,m._textureId),this.packIndex(m,c,m._indexStart,m._attributeStart/this.vertexSize)),m._batch=r;continue}y._batchTick=Pt,(i.count>=p||_)&&(this._finishBatch(r,d,h-d,i,o,a,e,f),f="renderBatch",d=h,o=x,a=m.topology,r=ns(),i=r.textures,i.clear(),++Pt),m._textureId=y._textureBindLocation=i.count,i.ids[y.uid]=i.count,i.textures[i.count++]=y,m._batch=r,h+=m.indexSize,m.packAsQuad?(this.packQuadAttributes(m,l,u,m._attributeStart,m._textureId),this.packQuadIndex(c,m._indexStart,m._attributeStart/this.vertexSize)):(this.packAttributes(m,l,u,m._attributeStart,m._textureId),this.packIndex(m,c,m._indexStart,m._attributeStart/this.vertexSize))}i.count>0&&(this._finishBatch(r,d,h-d,i,o,a,e,f),d=h,++Pt),this.elementStart=this.elementSize,this._batchIndexStart=d,this._batchIndexSize=h}_finishBatch(e,t,r,i,s,o,a,l){e.gpuBindGroup=null,e.bindGroup=null,e.action=l,e.batcher=this,e.textures=i,e.blendMode=s,e.topology=o,e.start=t,e.size=r,++Pt,this.batches[this.batchIndex++]=e,a.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const t=Math.max(e,this.attributeBuffer.size*2),r=new Ji(t);es(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(e){const t=this.indexBuffer;let r=Math.max(e,t.length*1.5);r+=r%2;const i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let s=0;s<t.length;s++)i[s]=t[s];else es(t.buffer,i.buffer);this.indexBuffer=i}packQuadIndex(e,t,r){e[t]=r+0,e[t+1]=r+1,e[t+2]=r+2,e[t+3]=r+0,e[t+4]=r+2,e[t+5]=r+3}packIndex(e,t,r,i){const s=e.indices,o=e.indexSize,a=e.indexOffset,l=e.attributeOffset;for(let u=0;u<o;u++)t[r++]=i+s[u+a]-l}destroy(){for(let e=0;e<this.batches.length;e++)rs(this.batches[e]);this.batches=null;for(let e=0;e<this._elements.length;e++)this._elements[e]._batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Go.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let Fc=Go;var pe=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(pe||{});class Nt extends se{constructor(e){let{data:t,size:r}=e;const{usage:i,label:s,shrinkToFit:o}=e;super(),this.uid=Q("buffer"),this._resourceType="buffer",this._resourceId=Q("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,t instanceof Array&&(t=new Float32Array(t)),this._data=t,r??(r=t==null?void 0:t.byteLength);const a=!!t;this.descriptor={size:r,usage:i,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(e){this.setDataWithSize(e,e.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&pe.STATIC)}set static(e){e?this.descriptor.usage|=pe.STATIC:this.descriptor.usage&=~pe.STATIC}setDataWithSize(e,t,r){if(this._updateID++,this._updateSize=t*e.BYTES_PER_ELEMENT,this._data===e){r&&this.emit("update",this);return}const i=this._data;if(this._data=e,this._dataInt32=null,!i||i.length!==e.length){!this.shrinkToFit&&i&&e.byteLength<i.byteLength?r&&this.emit("update",this):(this.descriptor.size=e.byteLength,this._resourceId=Q("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(e){this._updateSize=e??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function No(n,e){if(!(n instanceof Nt)){let t=e?pe.INDEX:pe.VERTEX;n instanceof Array&&(e?(n=new Uint32Array(n),t=pe.INDEX|pe.COPY_DST):(n=new Float32Array(n),t=pe.VERTEX|pe.COPY_DST)),n=new Nt({data:n,label:e?"index-mesh-buffer":"vertex-mesh-buffer",usage:t})}return n}function Ic(n,e,t){const r=n.getAttribute(e);if(!r)return t.minX=0,t.minY=0,t.maxX=0,t.maxY=0,t;const i=r.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const u=i.BYTES_PER_ELEMENT,c=(r.offset||0)/u,h=(r.stride||2*4)/u;for(let d=c;d<i.length;d+=h){const f=i[d],p=i[d+1];f>a&&(a=f),p>l&&(l=p),f<s&&(s=f),p<o&&(o=p)}return t.minX=s,t.minY=o,t.maxX=a,t.maxY=l,t}function Mc(n){return(n instanceof Nt||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=No(n.buffer,!1),n}class zc extends se{constructor(e={}){super(),this.uid=Q("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Ie,this._boundsDirty=!0;const{attributes:t,indexBuffer:r,topology:i}=e;if(this.buffers=[],this.attributes={},t)for(const s in t)this.addAttribute(s,t[s]);this.instanceCount=e.instanceCount??1,r&&this.addIndex(r),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(const e in this.attributes){const t=this.attributes[e];return t.buffer.data.length/(t.stride/4||t.size)}return 0}addAttribute(e,t){const r=Mc(t);this.buffers.indexOf(r.buffer)===-1&&(this.buffers.push(r.buffer),r.buffer.on("update",this.onBufferUpdate,this),r.buffer.on("change",this.onBufferUpdate,this)),this.attributes[e]=r}addIndex(e){this.indexBuffer=No(e,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Ic(this,"aPosition",this._bounds)):this._bounds}destroy(e=!1){this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(t=>t.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Oc=new Float32Array(1),Rc=new Uint32Array(1);class Ec extends zc{constructor(){const t=new Nt({data:Oc,label:"attribute-batch-buffer",usage:pe.VERTEX|pe.COPY_DST,shrinkToFit:!1}),r=new Nt({data:Rc,label:"index-batch-buffer",usage:pe.INDEX|pe.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:t,format:"float32x2",stride:i,offset:0},aUV:{buffer:t,format:"float32x2",stride:i,offset:2*4},aColor:{buffer:t,format:"unorm8x4",stride:i,offset:4*4},aTextureIdAndRound:{buffer:t,format:"uint16x2",stride:i,offset:5*4}},indexBuffer:r})}}function is(n,e,t){if(n)for(const r in n){const i=r.toLocaleLowerCase(),s=e[i];if(s){let o=n[r];r==="header"&&(o=o.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),t&&s.push(`//----${t}----//`),s.push(o)}else J(`${r} placement hook does not exist in shader`)}}const Uc=/\{\{(.*?)\}\}/g;function ss(n){var r;const e={};return(((r=n.match(Uc))==null?void 0:r.map(i=>i.replace(/[{()}]/g,"")))??[]).forEach(i=>{e[i]=[]}),e}function os(n,e){let t;const r=/@in\s+([^;]+);/g;for(;(t=r.exec(n))!==null;)e.push(t[1])}function as(n,e,t=!1){const r=[];os(e,r),n.forEach(a=>{a.header&&os(a.header,r)});const i=r;t&&i.sort();const s=i.map((a,l)=>`       @location(${l}) ${a},`).join(`
`);let o=e.replace(/@in\s+[^;]+;\s*/g,"");return o=o.replace("{{in}}",`
${s}
`),o}function ls(n,e){let t;const r=/@out\s+([^;]+);/g;for(;(t=r.exec(n))!==null;)e.push(t[1])}function kc(n){const t=/\b(\w+)\s*:/g.exec(n);return t?t[1]:""}function Bc(n){const e=/@.*?\s+/g;return n.replace(e,"")}function Lc(n,e){const t=[];ls(e,t),n.forEach(l=>{l.header&&ls(l.header,t)});let r=0;const i=t.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${r++}) ${l}`).join(`,
`),s=t.sort().map(l=>`       var ${Bc(l)};`).join(`
`),o=`return VSOutput(
            ${t.sort().map(l=>` ${kc(l)}`).join(`,
`)});`;let a=e.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${i}
`),a=a.replace("{{start}}",`
${s}
`),a=a.replace("{{return}}",`
${o}
`),a}function us(n,e){let t=n;for(const r in e){const i=e[r];i.join(`
`).length?t=t.replace(`{{${r}}}`,`//-----${r} START-----//
${i.join(`
`)}
//----${r} FINISH----//`):t=t.replace(`{{${r}}}`,"")}return t}const Ue=Object.create(null),hr=new Map;let Dc=0;function Gc({template:n,bits:e}){const t=$o(n,e);if(Ue[t])return Ue[t];const{vertex:r,fragment:i}=$c(n,e);return Ue[t]=Vo(r,i,e),Ue[t]}function Nc({template:n,bits:e}){const t=$o(n,e);return Ue[t]||(Ue[t]=Vo(n.vertex,n.fragment,e)),Ue[t]}function $c(n,e){const t=e.map(o=>o.vertex).filter(o=>!!o),r=e.map(o=>o.fragment).filter(o=>!!o);let i=as(t,n.vertex,!0);i=Lc(t,i);const s=as(r,n.fragment,!0);return{vertex:i,fragment:s}}function $o(n,e){return e.map(t=>(hr.has(t)||hr.set(t,Dc++),hr.get(t))).sort((t,r)=>t-r).join("-")+n.vertex+n.fragment}function Vo(n,e,t){const r=ss(n),i=ss(e);return t.forEach(s=>{is(s.vertex,r,s.name),is(s.fragment,i,s.name)}),{vertex:us(n,r),fragment:us(e,i)}}const Vc=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,Wc=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,Xc=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,Hc=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,Yc={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},jc={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function qc({bits:n,name:e}){const t=Gc({template:{fragment:Wc,vertex:Vc},bits:[Yc,...n]});return E.from({name:e,vertex:{source:t.vertex,entryPoint:"main"},fragment:{source:t.fragment,entryPoint:"main"}})}function Kc({bits:n,name:e}){return new U({name:e,...Nc({template:{vertex:Xc,fragment:Hc},bits:[jc,...n]})})}const Zc={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Qc={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},fr={};function Jc(n){const e=[];if(n===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let t=0;for(let r=0;r<n;r++)e.push(`@group(1) @binding(${t++}) var textureSource${r+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${t++}) var textureSampler${r+1}: sampler;`)}return e.join(`
`)}function eh(n){const e=[];if(n===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{e.push("switch vTextureId {");for(let t=0;t<n;t++)t===n-1?e.push("  default:{"):e.push(`  case ${t}:{`),e.push(`      outColor = textureSampleGrad(textureSource${t+1}, textureSampler${t+1}, vUV, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function th(n){return fr[n]||(fr[n]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${Jc(n)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${eh(n)}
            `}}),fr[n]}const dr={};function nh(n){const e=[];for(let t=0;t<n;t++)t>0&&e.push("else"),t<n-1&&e.push(`if(vTextureId < ${t}.5)`),e.push("{"),e.push(`	outColor = texture(uTextures[${t}], vUV);`),e.push("}");return e.join(`
`)}function rh(n){return dr[n]||(dr[n]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${n}];

            `,main:`

                ${nh(n)}
            `}}),dr[n]}const ih={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},sh={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},cs={};function oh(n){let e=cs[n];if(e)return e;const t=new Int32Array(n);for(let r=0;r<n;r++)t[r]=r;return e=cs[n]=new ai({uTextures:{value:t,type:"i32",size:n}},{isStatic:!0}),e}class ah extends En{constructor(e){const t=Kc({name:"batch",bits:[Qc,rh(e),sh]}),r=qc({name:"batch",bits:[Zc,th(e),ih]});super({glProgram:t,gpuProgram:r,resources:{batchSamplers:oh(e)}})}}let hs=null;const Wo=class Xo extends Fc{constructor(){super(...arguments),this.geometry=new Ec,this.shader=hs||(hs=new ah(this.maxTextures)),this.name=Xo.extension.name,this.vertexSize=6}packAttributes(e,t,r,i,s){const o=s<<16|e.roundPixels&65535,a=e.transform,l=a.a,u=a.b,c=a.c,h=a.d,d=a.tx,f=a.ty,{positions:p,uvs:g}=e,m=e.color,v=e.attributeOffset,y=v+e.attributeSize;for(let x=v;x<y;x++){const _=x*2,w=p[_],b=p[_+1];t[i++]=l*w+c*b+d,t[i++]=h*b+u*w+f,t[i++]=g[_],t[i++]=g[_+1],r[i++]=m,r[i++]=o}}packQuadAttributes(e,t,r,i,s){const o=e.texture,a=e.transform,l=a.a,u=a.b,c=a.c,h=a.d,d=a.tx,f=a.ty,p=e.bounds,g=p.maxX,m=p.minX,v=p.maxY,y=p.minY,x=o.uvs,_=e.color,w=s<<16|e.roundPixels&65535;t[i+0]=l*m+c*y+d,t[i+1]=h*y+u*m+f,t[i+2]=x.x0,t[i+3]=x.y0,r[i+4]=_,r[i+5]=w,t[i+6]=l*g+c*y+d,t[i+7]=h*y+u*g+f,t[i+8]=x.x1,t[i+9]=x.y1,r[i+10]=_,r[i+11]=w,t[i+12]=l*g+c*v+d,t[i+13]=h*v+u*g+f,t[i+14]=x.x2,t[i+15]=x.y2,r[i+16]=_,r[i+17]=w,t[i+18]=l*m+c*v+d,t[i+19]=h*v+u*m+f,t[i+20]=x.x3,t[i+21]=x.y3,r[i+22]=_,r[i+23]=w}};Wo.extension={type:[P.Batcher],name:"default"};let lh=Wo;function uh(n,e,t,r,i,s,o,a=null){let l=0;t*=e,i*=s;const u=a.a,c=a.b,h=a.c,d=a.d,f=a.tx,p=a.ty;for(;l<o;){const g=n[t],m=n[t+1];r[i]=u*g+h*m+f,r[i+1]=c*g+d*m+p,i+=s,t+=e,l++}}function ch(n,e,t,r){let i=0;for(e*=t;i<r;)n[e]=0,n[e+1]=0,e+=t,i++}function Ho(n,e,t,r,i){const s=e.a,o=e.b,a=e.c,l=e.d,u=e.tx,c=e.ty;t||(t=0),r||(r=2),i||(i=n.length/r-t);let h=t*r;for(let d=0;d<i;d++){const f=n[h],p=n[h+1];n[h]=s*f+a*p+u,n[h+1]=o*f+l*p+c,h+=r}}const hh=new D;class Yo{constructor(){this.packAsQuad=!1,this.batcherName="default",this.topology="triangle-list",this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}get color(){const e=this.baseColor,t=e>>16|e&65280|(e&255)<<16,r=this.renderable;return r?Zs(t,r.groupColor)+(this.alpha*r.groupAlpha*255<<24):t+(this.alpha*255<<24)}get transform(){var e;return((e=this.renderable)==null?void 0:e.groupTransform)||hh}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.attributeOffset=this.attributeOffset,e.attributeSize=this.attributeSize,e.baseColor=this.baseColor,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData,e.topology=this.topology}reset(){this.applyTransform=!0,this.renderable=null,this.topology="triangle-list"}}const $t={extension:{type:P.ShapeBuilder,name:"circle"},build(n,e){let t,r,i,s,o,a;if(n.type==="circle"){const _=n;t=_.x,r=_.y,o=a=_.radius,i=s=0}else if(n.type==="ellipse"){const _=n;t=_.x,r=_.y,o=_.halfWidth,a=_.halfHeight,i=s=0}else{const _=n,w=_.width/2,b=_.height/2;t=_.x+w,r=_.y+b,o=a=Math.max(0,Math.min(_.radius,Math.min(w,b))),i=w-o,s=b-a}if(!(o>=0&&a>=0&&i>=0&&s>=0))return e;const l=Math.ceil(2.3*Math.sqrt(o+a)),u=l*8+(i?4:0)+(s?4:0);if(u===0)return e;if(l===0)return e[0]=e[6]=t+i,e[1]=e[3]=r+s,e[2]=e[4]=t-i,e[5]=e[7]=r-s,e;let c=0,h=l*4+(i?2:0)+2,d=h,f=u,p=i+o,g=s,m=t+p,v=t-p,y=r+g;if(e[c++]=m,e[c++]=y,e[--h]=y,e[--h]=v,s){const _=r-g;e[d++]=v,e[d++]=_,e[--f]=_,e[--f]=m}for(let _=1;_<l;_++){const w=Math.PI/2*(_/l),b=i+Math.cos(w)*o,S=s+Math.sin(w)*a,M=t+b,k=t-b,T=r+S,A=r-S;e[c++]=M,e[c++]=T,e[--h]=T,e[--h]=k,e[d++]=k,e[d++]=A,e[--f]=A,e[--f]=M}p=i,g=s+a,m=t+p,v=t-p,y=r+g;const x=r-g;return e[c++]=m,e[c++]=y,e[--f]=x,e[--f]=m,i&&(e[c++]=v,e[c++]=y,e[--f]=x,e[--f]=v),e},triangulate(n,e,t,r,i,s){if(n.length===0)return;let o=0,a=0;for(let c=0;c<n.length;c+=2)o+=n[c],a+=n[c+1];o/=n.length/2,a/=n.length/2;let l=r;e[l*t]=o,e[l*t+1]=a;const u=l++;for(let c=0;c<n.length;c+=2)e[l*t]=n[c],e[l*t+1]=n[c+1],c>0&&(i[s++]=l,i[s++]=u,i[s++]=l-1),l++;i[s++]=u+1,i[s++]=u,i[s++]=l-1}},fh={...$t,extension:{...$t.extension,name:"ellipse"}},dh={...$t,extension:{...$t.extension,name:"roundedRectangle"}},jo=1e-4,fs=1e-4;function ph(n){const e=n.length;if(e<6)return 1;let t=0;for(let r=0,i=n[e-2],s=n[e-1];r<e;r+=2){const o=n[r],a=n[r+1];t+=(o-i)*(a+s),i=o,s=a}return t<0?-1:1}function ds(n,e,t,r,i,s,o,a){const l=n-t*i,u=e-r*i,c=n+t*s,h=e+r*s;let d,f;o?(d=r,f=-t):(d=-r,f=t);const p=l+d,g=u+f,m=c+d,v=h+f;return a.push(p,g),a.push(m,v),2}function Ge(n,e,t,r,i,s,o,a){const l=t-n,u=r-e;let c=Math.atan2(l,u),h=Math.atan2(i-n,s-e);a&&c<h?c+=Math.PI*2:!a&&c>h&&(h+=Math.PI*2);let d=c;const f=h-c,p=Math.abs(f),g=Math.sqrt(l*l+u*u),m=(15*p*Math.sqrt(g)/Math.PI>>0)+1,v=f/m;if(d+=v,a){o.push(n,e),o.push(t,r);for(let y=1,x=d;y<m;y++,x+=v)o.push(n,e),o.push(n+Math.sin(x)*g,e+Math.cos(x)*g);o.push(n,e),o.push(i,s)}else{o.push(t,r),o.push(n,e);for(let y=1,x=d;y<m;y++,x+=v)o.push(n+Math.sin(x)*g,e+Math.cos(x)*g),o.push(n,e);o.push(i,s),o.push(n,e)}return m*2}function mh(n,e,t,r,i,s){const o=jo;if(n.length===0)return;const a=e;let l=a.alignment;if(e.alignment!==.5){let O=ph(n);l=(l-.5)*O+.5}const u=new ae(n[0],n[1]),c=new ae(n[n.length-2],n[n.length-1]),h=r,d=Math.abs(u.x-c.x)<o&&Math.abs(u.y-c.y)<o;if(h){n=n.slice(),d&&(n.pop(),n.pop(),c.set(n[n.length-2],n[n.length-1]));const O=(u.x+c.x)*.5,re=(c.y+u.y)*.5;n.unshift(O,re),n.push(O,re)}const f=i,p=n.length/2;let g=n.length;const m=f.length/2,v=a.width/2,y=v*v,x=a.miterLimit*a.miterLimit;let _=n[0],w=n[1],b=n[2],S=n[3],M=0,k=0,T=-(w-S),A=_-b,V=0,W=0,X=Math.sqrt(T*T+A*A);T/=X,A/=X,T*=v,A*=v;const fe=l,z=(1-fe)*2,C=fe*2;h||(a.cap==="round"?g+=Ge(_-T*(z-C)*.5,w-A*(z-C)*.5,_-T*z,w-A*z,_+T*C,w+A*C,f,!0)+2:a.cap==="square"&&(g+=ds(_,w,T,A,z,C,!0,f))),f.push(_-T*z,w-A*z),f.push(_+T*C,w+A*C);for(let O=1;O<p-1;++O){_=n[(O-1)*2],w=n[(O-1)*2+1],b=n[O*2],S=n[O*2+1],M=n[(O+1)*2],k=n[(O+1)*2+1],T=-(w-S),A=_-b,X=Math.sqrt(T*T+A*A),T/=X,A/=X,T*=v,A*=v,V=-(S-k),W=b-M,X=Math.sqrt(V*V+W*W),V/=X,W/=X,V*=v,W*=v;const re=b-_,Ee=w-S,St=b-M,Ct=k-S,wi=re*St+Ee*Ct,jt=Ee*St-Ct*re,wt=jt<0;if(Math.abs(jt)<.001*Math.abs(wi)){f.push(b-T*z,S-A*z),f.push(b+T*C,S+A*C),wi>=0&&(a.join==="round"?g+=Ge(b,S,b-T*z,S-A*z,b-V*z,S-W*z,f,!1)+4:g+=2,f.push(b-V*C,S-W*C),f.push(b+V*z,S+W*z));continue}const Ai=(-T+_)*(-A+S)-(-T+b)*(-A+w),Ti=(-V+M)*(-W+S)-(-V+b)*(-W+k),qt=(re*Ti-St*Ai)/jt,Kt=(Ct*Ai-Ee*Ti)/jt,Dn=(qt-b)*(qt-b)+(Kt-S)*(Kt-S),ke=b+(qt-b)*z,Be=S+(Kt-S)*z,Le=b-(qt-b)*C,De=S-(Kt-S)*C,gl=Math.min(re*re+Ee*Ee,St*St+Ct*Ct),Pi=wt?z:C,xl=gl+Pi*Pi*y;Dn<=xl?a.join==="bevel"||Dn/y>x?(wt?(f.push(ke,Be),f.push(b+T*C,S+A*C),f.push(ke,Be),f.push(b+V*C,S+W*C)):(f.push(b-T*z,S-A*z),f.push(Le,De),f.push(b-V*z,S-W*z),f.push(Le,De)),g+=2):a.join==="round"?wt?(f.push(ke,Be),f.push(b+T*C,S+A*C),g+=Ge(b,S,b+T*C,S+A*C,b+V*C,S+W*C,f,!0)+4,f.push(ke,Be),f.push(b+V*C,S+W*C)):(f.push(b-T*z,S-A*z),f.push(Le,De),g+=Ge(b,S,b-T*z,S-A*z,b-V*z,S-W*z,f,!1)+4,f.push(b-V*z,S-W*z),f.push(Le,De)):(f.push(ke,Be),f.push(Le,De)):(f.push(b-T*z,S-A*z),f.push(b+T*C,S+A*C),a.join==="round"?wt?g+=Ge(b,S,b+T*C,S+A*C,b+V*C,S+W*C,f,!0)+2:g+=Ge(b,S,b-T*z,S-A*z,b-V*z,S-W*z,f,!1)+2:a.join==="miter"&&Dn/y<=x&&(wt?(f.push(Le,De),f.push(Le,De)):(f.push(ke,Be),f.push(ke,Be)),g+=2),f.push(b-V*z,S-W*z),f.push(b+V*C,S+W*C),g+=2)}_=n[(p-2)*2],w=n[(p-2)*2+1],b=n[(p-1)*2],S=n[(p-1)*2+1],T=-(w-S),A=_-b,X=Math.sqrt(T*T+A*A),T/=X,A/=X,T*=v,A*=v,f.push(b-T*z,S-A*z),f.push(b+T*C,S+A*C),h||(a.cap==="round"?g+=Ge(b-T*(z-C)*.5,S-A*(z-C)*.5,b-T*z,S-A*z,b+T*C,S+A*C,f,!1)+2:a.cap==="square"&&(g+=ds(b,S,T,A,z,C,!1,f)));const $=fs*fs;for(let O=m;O<g+m-2;++O)_=f[O*2],w=f[O*2+1],b=f[(O+1)*2],S=f[(O+1)*2+1],M=f[(O+2)*2],k=f[(O+2)*2+1],!(Math.abs(_*(S-k)+b*(k-w)+M*(w-S))<$)&&s.push(O,O+1,O+2)}function gh(n,e,t,r){const i=jo;if(n.length===0)return;const s=n[0],o=n[1],a=n[n.length-2],l=n[n.length-1],u=e||Math.abs(s-a)<i&&Math.abs(o-l)<i,c=t,h=n.length/2,d=c.length/2;for(let f=0;f<h;f++)c.push(n[f*2]),c.push(n[f*2+1]);for(let f=0;f<h-1;f++)r.push(d+f,d+f+1);u&&r.push(d+h-1,d)}function qo(n,e,t,r,i,s,o){const a=ic(n,e,2);if(!a)return;for(let u=0;u<a.length;u+=3)s[o++]=a[u]+i,s[o++]=a[u+1]+i,s[o++]=a[u+2]+i;let l=i*r;for(let u=0;u<n.length;u+=2)t[l]=n[u],t[l+1]=n[u+1],l+=r}const xh=[],vh={extension:{type:P.ShapeBuilder,name:"polygon"},build(n,e){for(let t=0;t<n.points.length;t++)e[t]=n.points[t];return e},triangulate(n,e,t,r,i,s){qo(n,xh,e,t,r,i,s)}},yh={extension:{type:P.ShapeBuilder,name:"rectangle"},build(n,e){const t=n,r=t.x,i=t.y,s=t.width,o=t.height;return s>=0&&o>=0&&(e[0]=r,e[1]=i,e[2]=r+s,e[3]=i,e[4]=r+s,e[5]=i+o,e[6]=r,e[7]=i+o),e},triangulate(n,e,t,r,i,s){let o=0;r*=t,e[r+o]=n[0],e[r+o+1]=n[1],o+=t,e[r+o]=n[2],e[r+o+1]=n[3],o+=t,e[r+o]=n[6],e[r+o+1]=n[7],o+=t,e[r+o]=n[4],e[r+o+1]=n[5],o+=t;const a=r/t;i[s++]=a,i[s++]=a+1,i[s++]=a+2,i[s++]=a+1,i[s++]=a+3,i[s++]=a+2}},_h={extension:{type:P.ShapeBuilder,name:"triangle"},build(n,e){return e[0]=n.x,e[1]=n.y,e[2]=n.x2,e[3]=n.y2,e[4]=n.x3,e[5]=n.y3,e},triangulate(n,e,t,r,i,s){let o=0;r*=t,e[r+o]=n[0],e[r+o+1]=n[1],o+=t,e[r+o]=n[2],e[r+o+1]=n[3],o+=t,e[r+o]=n[4],e[r+o+1]=n[5];const a=r/t;i[s++]=a,i[s++]=a+1,i[s++]=a+2}},Ln={};le.handleByMap(P.ShapeBuilder,Ln);le.add(yh,vh,_h,$t,fh,dh);const bh=new Z;function Sh(n,e){const{geometryData:t,batches:r}=e;r.length=0,t.indices.length=0,t.vertices.length=0,t.uvs.length=0;for(let i=0;i<n.instructions.length;i++){const s=n.instructions[i];if(s.action==="texture")Ch(s.data,r,t);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,u=s.data.hole;o&&u&&ps(u.shapePath,l,null,!0,r,t),ps(a,l,u,o,r,t)}}}function Ch(n,e,t){const{vertices:r,uvs:i,indices:s}=t,o=s.length,a=r.length/2,l=[],u=Ln.rectangle,c=bh,h=n.image;c.x=n.dx,c.y=n.dy,c.width=n.dw,c.height=n.dh;const d=n.transform;u.build(c,l),d&&Ho(l,d),u.triangulate(l,r,2,a,s,o);const f=h.uvs;i.push(f.x0,f.y0,f.x1,f.y1,f.x3,f.y3,f.x2,f.y2);const p=Oe.get(Yo);p.indexOffset=o,p.indexSize=s.length-o,p.attributeOffset=a,p.attributeSize=r.length/2-a,p.baseColor=n.style,p.alpha=n.alpha,p.texture=h,p.geometryData=t,e.push(p)}function ps(n,e,t,r,i,s){const{vertices:o,uvs:a,indices:l}=s,u=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:c,transform:h},d)=>{const f=l.length,p=o.length/2,g=[],m=Ln[c.type];let v="triangle-list";if(m.build(c,g),h&&Ho(g,h),r){const w=c.closePath??!0,b=e;b.pixelLine?(gh(g,w,o,l),v="line-list"):mh(g,b,!1,w,o,l)}else if(t&&u===d){u!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const w=[],b=g.slice();wh(t.shapePath).forEach(M=>{w.push(b.length/2),b.push(...M)}),qo(b,w,o,2,p,l,f)}else m.triangulate(g,o,2,p,l,f);const y=a.length/2,x=e.texture;if(x!==R.WHITE){const w=e.matrix;w&&(h&&w.append(h.clone().invert()),uh(o,2,p,a,y,2,o.length/2-p,w))}else ch(a,y,2,o.length/2-p);const _=Oe.get(Yo);_.indexOffset=f,_.indexSize=l.length-f,_.attributeOffset=p,_.attributeSize=o.length/2-p,_.baseColor=e.color,_.alpha=e.alpha,_.texture=x,_.geometryData=s,_.topology=v,i.push(_)})}function wh(n){if(!n)return[];const e=n.shapePrimitives,t=[];for(let r=0;r<e.length;r++){const i=e[r].shape,s=[];Ln[i.type].build(i,s),t.push(s)}return t}class Ah{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class Th{constructor(){this.batcher=new lh,this.instructions=new to}init(){this.instructions.reset()}get geometry(){return I(Fl,"GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),this.batcher.geometry}}const fi=class Br{constructor(e){this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null),e.renderableGC.addManagedHash(this,"_gpuContextHash"),e.renderableGC.addManagedHash(this,"_graphicsDataContextHash")}init(e){Br.defaultOptions.bezierSmoothness=(e==null?void 0:e.bezierSmoothness)??Br.defaultOptions.bezierSmoothness}getContextRenderData(e){return this._graphicsDataContextHash[e.uid]||this._initContextRenderData(e)}updateGpuContext(e){let t=this._gpuContextHash[e.uid]||this._initContext(e);if(e.dirty){t?this._cleanGraphicsContextData(e):t=this._initContext(e),Sh(e,t);const r=e.batchMode;e.customShader||r==="no-batch"?t.isBatchable=!1:r==="auto"&&(t.isBatchable=t.geometryData.vertices.length<400),e.dirty=!1}return t}getGpuContext(e){return this._gpuContextHash[e.uid]||this._initContext(e)}_initContextRenderData(e){const t=Oe.get(Th),{batches:r,geometryData:i}=this._gpuContextHash[e.uid],s=i.vertices.length,o=i.indices.length;for(let c=0;c<r.length;c++)r[c].applyTransform=!1;const a=t.batcher;a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let c=0;c<r.length;c++){const h=r[c];a.add(h)}a.finish(t.instructions);const l=a.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const u=a.batches;for(let c=0;c<u.length;c++){const h=u[c];h.bindGroup=Sc(h.textures.textures,h.textures.count)}return this._graphicsDataContextHash[e.uid]=t,t}_initContext(e){const t=new Ah;return t.context=e,this._gpuContextHash[e.uid]=t,e.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]}onGraphicsContextDestroy(e){this._cleanGraphicsContextData(e),e.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]=null}_cleanGraphicsContextData(e){const t=this._gpuContextHash[e.uid];t.isBatchable||this._graphicsDataContextHash[e.uid]&&(Oe.return(this.getContextRenderData(e)),this._graphicsDataContextHash[e.uid]=null),t.batches&&t.batches.forEach(r=>{Oe.return(r)})}destroy(){for(const e in this._gpuContextHash)this._gpuContextHash[e]&&this.onGraphicsContextDestroy(this._gpuContextHash[e].context)}};fi.extension={type:[P.WebGLSystem,P.WebGPUSystem,P.CanvasSystem],name:"graphicsContext"};fi.defaultOptions={bezierSmoothness:.5};let Ko=fi;const Ph=8,ln=11920929e-14,Fh=1;function Zo(n,e,t,r,i,s,o,a,l,u){const h=Math.min(.99,Math.max(0,u??Ko.defaultOptions.bezierSmoothness));let d=(Fh-h)/1;return d*=d,Ih(e,t,r,i,s,o,a,l,n,d),n}function Ih(n,e,t,r,i,s,o,a,l,u){Lr(n,e,t,r,i,s,o,a,l,u,0),l.push(o,a)}function Lr(n,e,t,r,i,s,o,a,l,u,c){if(c>Ph)return;const h=(n+t)/2,d=(e+r)/2,f=(t+i)/2,p=(r+s)/2,g=(i+o)/2,m=(s+a)/2,v=(h+f)/2,y=(d+p)/2,x=(f+g)/2,_=(p+m)/2,w=(v+x)/2,b=(y+_)/2;if(c>0){let S=o-n,M=a-e;const k=Math.abs((t-o)*M-(r-a)*S),T=Math.abs((i-o)*M-(s-a)*S);if(k>ln&&T>ln){if((k+T)*(k+T)<=u*(S*S+M*M)){l.push(w,b);return}}else if(k>ln){if(k*k<=u*(S*S+M*M)){l.push(w,b);return}}else if(T>ln){if(T*T<=u*(S*S+M*M)){l.push(w,b);return}}else if(S=w-(n+o)/2,M=b-(e+a)/2,S*S+M*M<=u){l.push(w,b);return}}Lr(n,e,h,d,v,y,w,b,l,u,c+1),Lr(w,b,x,_,g,m,o,a,l,u,c+1)}const Mh=8,zh=11920929e-14,Oh=1;function Rh(n,e,t,r,i,s,o,a){const u=Math.min(.99,Math.max(0,a??Ko.defaultOptions.bezierSmoothness));let c=(Oh-u)/1;return c*=c,Eh(e,t,r,i,s,o,n,c),n}function Eh(n,e,t,r,i,s,o,a){Dr(o,n,e,t,r,i,s,a,0),o.push(i,s)}function Dr(n,e,t,r,i,s,o,a,l){if(l>Mh)return;const u=(e+r)/2,c=(t+i)/2,h=(r+s)/2,d=(i+o)/2,f=(u+h)/2,p=(c+d)/2;let g=s-e,m=o-t;const v=Math.abs((r-s)*m-(i-o)*g);if(v>zh){if(v*v<=a*(g*g+m*m)){n.push(f,p);return}}else if(g=f-(e+s)/2,m=p-(t+o)/2,g*g+m*m<=a){n.push(f,p);return}Dr(n,e,t,u,c,f,p,a,l+1),Dr(n,f,p,h,d,s,o,a,l+1)}function Qo(n,e,t,r,i,s,o,a){let l=Math.abs(i-s);(!o&&i>s||o&&s>i)&&(l=2*Math.PI-l),a||(a=Math.max(6,Math.floor(6*Math.pow(r,1/3)*(l/Math.PI)))),a=Math.max(a,3);let u=l/a,c=i;u*=o?-1:1;for(let h=0;h<a+1;h++){const d=Math.cos(c),f=Math.sin(c),p=e+d*r,g=t+f*r;n.push(p,g),c+=u}}function Uh(n,e,t,r,i,s){const o=n[n.length-2],l=n[n.length-1]-t,u=o-e,c=i-t,h=r-e,d=Math.abs(l*h-u*c);if(d<1e-8||s===0){(n[n.length-2]!==e||n[n.length-1]!==t)&&n.push(e,t);return}const f=l*l+u*u,p=c*c+h*h,g=l*c+u*h,m=s*Math.sqrt(f)/d,v=s*Math.sqrt(p)/d,y=m*g/f,x=v*g/p,_=m*h+v*u,w=m*c+v*l,b=u*(v+y),S=l*(v+y),M=h*(m+x),k=c*(m+x),T=Math.atan2(S-w,b-_),A=Math.atan2(k-w,M-_);Qo(n,_+e,w+t,s,T,A,u*c>h*l)}const Ut=Math.PI*2,pr={centerX:0,centerY:0,ang1:0,ang2:0},mr=({x:n,y:e},t,r,i,s,o,a,l)=>{n*=t,e*=r;const u=i*n-s*e,c=s*n+i*e;return l.x=u+o,l.y=c+a,l};function kh(n,e){const t=e===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(e/4),r=e===1.5707963267948966?.551915024494:t,i=Math.cos(n),s=Math.sin(n),o=Math.cos(n+e),a=Math.sin(n+e);return[{x:i-s*r,y:s+i*r},{x:o+a*r,y:a-o*r},{x:o,y:a}]}const ms=(n,e,t,r)=>{const i=n*r-e*t<0?-1:1;let s=n*t+e*r;return s>1&&(s=1),s<-1&&(s=-1),i*Math.acos(s)},Bh=(n,e,t,r,i,s,o,a,l,u,c,h,d)=>{const f=Math.pow(i,2),p=Math.pow(s,2),g=Math.pow(c,2),m=Math.pow(h,2);let v=f*p-f*m-p*g;v<0&&(v=0),v/=f*m+p*g,v=Math.sqrt(v)*(o===a?-1:1);const y=v*i/s*h,x=v*-s/i*c,_=u*y-l*x+(n+t)/2,w=l*y+u*x+(e+r)/2,b=(c-y)/i,S=(h-x)/s,M=(-c-y)/i,k=(-h-x)/s,T=ms(1,0,b,S);let A=ms(b,S,M,k);a===0&&A>0&&(A-=Ut),a===1&&A<0&&(A+=Ut),d.centerX=_,d.centerY=w,d.ang1=T,d.ang2=A};function Lh(n,e,t,r,i,s,o,a=0,l=0,u=0){if(s===0||o===0)return;const c=Math.sin(a*Ut/360),h=Math.cos(a*Ut/360),d=h*(e-r)/2+c*(t-i)/2,f=-c*(e-r)/2+h*(t-i)/2;if(d===0&&f===0)return;s=Math.abs(s),o=Math.abs(o);const p=Math.pow(d,2)/Math.pow(s,2)+Math.pow(f,2)/Math.pow(o,2);p>1&&(s*=Math.sqrt(p),o*=Math.sqrt(p)),Bh(e,t,r,i,s,o,l,u,c,h,d,f,pr);let{ang1:g,ang2:m}=pr;const{centerX:v,centerY:y}=pr;let x=Math.abs(m)/(Ut/4);Math.abs(1-x)<1e-7&&(x=1);const _=Math.max(Math.ceil(x),1);m/=_;let w=n[n.length-2],b=n[n.length-1];const S={x:0,y:0};for(let M=0;M<_;M++){const k=kh(g,m),{x:T,y:A}=mr(k[0],s,o,h,c,v,y,S),{x:V,y:W}=mr(k[1],s,o,h,c,v,y,S),{x:X,y:fe}=mr(k[2],s,o,h,c,v,y,S);Zo(n,w,b,T,A,V,W,X,fe),w=X,b=fe,g+=m}}function Dh(n,e,t){const r=(o,a)=>{const l=a.x-o.x,u=a.y-o.y,c=Math.sqrt(l*l+u*u),h=l/c,d=u/c;return{len:c,nx:h,ny:d}},i=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let s=e[e.length-1];for(let o=0;o<e.length;o++){const a=e[o%e.length],l=a.radius??t;if(l<=0){i(o,a),s=a;continue}const u=e[(o+1)%e.length],c=r(a,s),h=r(a,u);if(c.len<1e-4||h.len<1e-4){i(o,a),s=a;continue}let d=Math.asin(c.nx*h.ny-c.ny*h.nx),f=1,p=!1;c.nx*h.nx-c.ny*-h.ny<0?d<0?d=Math.PI+d:(d=Math.PI-d,f=-1,p=!0):d>0&&(f=-1,p=!0);const g=d/2;let m,v=Math.abs(Math.cos(g)*l/Math.sin(g));v>Math.min(c.len/2,h.len/2)?(v=Math.min(c.len/2,h.len/2),m=Math.abs(v*Math.sin(g)/Math.cos(g))):m=l;const y=a.x+h.nx*v+-h.ny*m*f,x=a.y+h.ny*v+h.nx*m*f,_=Math.atan2(c.ny,c.nx)+Math.PI/2*f,w=Math.atan2(h.ny,h.nx)-Math.PI/2*f;o===0&&n.moveTo(y+Math.cos(_)*m,x+Math.sin(_)*m),n.arc(y,x,m,_,w,p),s=a}}function Gh(n,e,t,r){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,u)=>({x:a.x+(l.x-a.x)*u,y:a.y+(l.y-a.y)*u}),o=e.length;for(let a=0;a<o;a++){const l=e[(a+1)%o],u=l.radius??t;if(u<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const c=e[a],h=e[(a+2)%o],d=i(c,l);let f;if(d<1e-4)f=l;else{const m=Math.min(d/2,u);f=s(l,c,m/d)}const p=i(h,l);let g;if(p<1e-4)g=l;else{const m=Math.min(p/2,u);g=s(l,h,m/p)}a===0?n.moveTo(f.x,f.y):n.lineTo(f.x,f.y),n.quadraticCurveTo(l.x,l.y,g.x,g.y,r)}}const Nh=new Z;class $h{constructor(e){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Ie,this._graphicsPath2D=e}moveTo(e,t){return this.startPoly(e,t),this}lineTo(e,t){this._ensurePoly();const r=this._currentPoly.points,i=r[r.length-2],s=r[r.length-1];return(i!==e||s!==t)&&r.push(e,t),this}arc(e,t,r,i,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Qo(a,e,t,r,i,s,o),this}arcTo(e,t,r,i,s){this._ensurePoly();const o=this._currentPoly.points;return Uh(o,e,t,r,i,s),this}arcToSvg(e,t,r,i,s,o,a){const l=this._currentPoly.points;return Lh(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,e,t,r,i,s),this}bezierCurveTo(e,t,r,i,s,o,a){this._ensurePoly();const l=this._currentPoly;return Zo(this._currentPoly.points,l.lastX,l.lastY,e,t,r,i,s,o,a),this}quadraticCurveTo(e,t,r,i,s){this._ensurePoly();const o=this._currentPoly;return Rh(this._currentPoly.points,o.lastX,o.lastY,e,t,r,i,s),this}closePath(){return this.endPoly(!0),this}addPath(e,t){this.endPoly(),t&&!t.isIdentity()&&(e=e.clone(!0),e.transform(t));for(let r=0;r<e.instructions.length;r++){const i=e.instructions[r];this[i.action](...i.data)}return this}finish(e=!1){this.endPoly(e)}rect(e,t,r,i,s){return this.drawShape(new Z(e,t,r,i),s),this}circle(e,t,r,i){return this.drawShape(new ui(e,t,r),i),this}poly(e,t,r){const i=new Et(e);return i.closePath=t,this.drawShape(i,r),this}regularPoly(e,t,r,i,s=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/i,u=[];for(let c=0;c<i;c++){const h=c*l+a;u.push(e+r*Math.cos(h),t+r*Math.sin(h))}return this.poly(u,!0,o),this}roundPoly(e,t,r,i,s,o=0,a){if(i=Math.max(i|0,3),s<=0)return this.regularPoly(e,t,r,i,o);const l=r*Math.sin(Math.PI/i)-.001;s=Math.min(s,l);const u=-1*Math.PI/2+o,c=Math.PI*2/i,h=(i-2)*Math.PI/i/2;for(let d=0;d<i;d++){const f=d*c+u,p=e+r*Math.cos(f),g=t+r*Math.sin(f),m=f+Math.PI+h,v=f-Math.PI-h,y=p+s*Math.cos(m),x=g+s*Math.sin(m),_=p+s*Math.cos(v),w=g+s*Math.sin(v);d===0?this.moveTo(y,x):this.lineTo(y,x),this.quadraticCurveTo(p,g,_,w,a)}return this.closePath()}roundShape(e,t,r=!1,i){return e.length<3?this:(r?Gh(this,e,t,i):Dh(this,e,t),this.closePath())}filletRect(e,t,r,i,s){if(s===0)return this.rect(e,t,r,i);const o=Math.min(r,i)/2,a=Math.min(o,Math.max(-o,s)),l=e+r,u=t+i,c=a<0?-a:0,h=Math.abs(a);return this.moveTo(e,t+h).arcTo(e+c,t+c,e+h,t,h).lineTo(l-h,t).arcTo(l-c,t+c,l,t+h,h).lineTo(l,u-h).arcTo(l-c,u-c,e+r-h,u,h).lineTo(e+h,u).arcTo(e+c,u-c,e,u-h,h).closePath()}chamferRect(e,t,r,i,s,o){if(s<=0)return this.rect(e,t,r,i);const a=Math.min(s,Math.min(r,i)/2),l=e+r,u=t+i,c=[e+a,t,l-a,t,l,t+a,l,u-a,l-a,u,e+a,u,e,u-a,e,t+a];for(let h=c.length-1;h>=2;h-=2)c[h]===c[h-2]&&c[h-1]===c[h-3]&&c.splice(h-1,2);return this.poly(c,!0,o)}ellipse(e,t,r,i,s){return this.drawShape(new ci(e,t,r,i),s),this}roundRect(e,t,r,i,s,o){return this.drawShape(new hi(e,t,r,i,s),o),this}drawShape(e,t){return this.endPoly(),this.shapePrimitives.push({shape:e,transform:t}),this}startPoly(e,t){let r=this._currentPoly;return r&&this.endPoly(),r=new Et,r.points.push(e,t),this._currentPoly=r,this}endPoly(e=!1){const t=this._currentPoly;return t&&t.points.length>2&&(t.closePath=e,this.shapePrimitives.push({shape:t})),this._currentPoly=null,this}_ensurePoly(e=!0){if(!this._currentPoly&&(this._currentPoly=new Et,e)){const t=this.shapePrimitives[this.shapePrimitives.length-1];if(t){let r=t.shape.x,i=t.shape.y;if(t.transform&&!t.transform.isIdentity()){const s=t.transform,o=r;r=s.a*r+s.c*i+s.tx,i=s.b*o+s.d*i+s.ty}this._currentPoly.points.push(r,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const e=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let t=0;t<e.instructions.length;t++){const r=e.instructions[t];this[r.action](...r.data)}this.finish()}get bounds(){const e=this._bounds;e.clear();const t=this.shapePrimitives;for(let r=0;r<t.length;r++){const i=t[r],s=i.shape.getBounds(Nh);i.transform?e.addRect(s,i.transform):e.addRect(s)}return e}}class vt{constructor(e){this.instructions=[],this.uid=Q("graphicsPath"),this._dirty=!0,typeof e=="string"?xc(e,this):this.instructions=(e==null?void 0:e.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new $h(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(e,t){return e=e.clone(),this.instructions.push({action:"addPath",data:[e,t]}),this._dirty=!0,this}arc(...e){return this.instructions.push({action:"arc",data:e}),this._dirty=!0,this}arcTo(...e){return this.instructions.push({action:"arcTo",data:e}),this._dirty=!0,this}arcToSvg(...e){return this.instructions.push({action:"arcToSvg",data:e}),this._dirty=!0,this}bezierCurveTo(...e){return this.instructions.push({action:"bezierCurveTo",data:e}),this._dirty=!0,this}bezierCurveToShort(e,t,r,i,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(ae.shared);let l=0,u=0;if(!o||o.action!=="bezierCurveTo")l=a.x,u=a.y;else{l=o.data[2],u=o.data[3];const c=a.x,h=a.y;l=c+(c-l),u=h+(h-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,e,t,r,i,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...e){return this.instructions.push({action:"ellipse",data:e}),this._dirty=!0,this}lineTo(...e){return this.instructions.push({action:"lineTo",data:e}),this._dirty=!0,this}moveTo(...e){return this.instructions.push({action:"moveTo",data:e}),this}quadraticCurveTo(...e){return this.instructions.push({action:"quadraticCurveTo",data:e}),this._dirty=!0,this}quadraticCurveToShort(e,t,r){const i=this.instructions[this.instructions.length-1],s=this.getLastPoint(ae.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=i.data[0],a=i.data[1];const l=s.x,u=s.y;o=l+(l-o),a=u+(u-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,e,t,r]}),this._dirty=!0,this}rect(e,t,r,i,s){return this.instructions.push({action:"rect",data:[e,t,r,i,s]}),this._dirty=!0,this}circle(e,t,r,i){return this.instructions.push({action:"circle",data:[e,t,r,i]}),this._dirty=!0,this}roundRect(...e){return this.instructions.push({action:"roundRect",data:e}),this._dirty=!0,this}poly(...e){return this.instructions.push({action:"poly",data:e}),this._dirty=!0,this}regularPoly(...e){return this.instructions.push({action:"regularPoly",data:e}),this._dirty=!0,this}roundPoly(...e){return this.instructions.push({action:"roundPoly",data:e}),this._dirty=!0,this}roundShape(...e){return this.instructions.push({action:"roundShape",data:e}),this._dirty=!0,this}filletRect(...e){return this.instructions.push({action:"filletRect",data:e}),this._dirty=!0,this}chamferRect(...e){return this.instructions.push({action:"chamferRect",data:e}),this._dirty=!0,this}star(e,t,r,i,s,o,a){s||(s=i/2);const l=-1*Math.PI/2+o,u=r*2,c=Math.PI*2/u,h=[];for(let d=0;d<u;d++){const f=d%2?s:i,p=d*c+l;h.push(e+f*Math.cos(p),t+f*Math.sin(p))}return this.poly(h,!0,a),this}clone(e=!1){const t=new vt;if(!e)t.instructions=this.instructions.slice();else for(let r=0;r<this.instructions.length;r++){const i=this.instructions[r];t.instructions.push({action:i.action,data:i.data.slice()})}return t}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(e){if(e.isIdentity())return this;const t=e.a,r=e.b,i=e.c,s=e.d,o=e.tx,a=e.ty;let l=0,u=0,c=0,h=0,d=0,f=0,p=0,g=0;for(let m=0;m<this.instructions.length;m++){const v=this.instructions[m],y=v.data;switch(v.action){case"moveTo":case"lineTo":l=y[0],u=y[1],y[0]=t*l+i*u+o,y[1]=r*l+s*u+a;break;case"bezierCurveTo":c=y[0],h=y[1],d=y[2],f=y[3],l=y[4],u=y[5],y[0]=t*c+i*h+o,y[1]=r*c+s*h+a,y[2]=t*d+i*f+o,y[3]=r*d+s*f+a,y[4]=t*l+i*u+o,y[5]=r*l+s*u+a;break;case"quadraticCurveTo":c=y[0],h=y[1],l=y[2],u=y[3],y[0]=t*c+i*h+o,y[1]=r*c+s*h+a,y[2]=t*l+i*u+o,y[3]=r*l+s*u+a;break;case"arcToSvg":l=y[5],u=y[6],p=y[0],g=y[1],y[0]=t*p+i*g,y[1]=r*p+s*g,y[5]=t*l+i*u+o,y[6]=r*l+s*u+a;break;case"circle":y[4]=Ft(y[3],e);break;case"rect":y[4]=Ft(y[4],e);break;case"ellipse":y[8]=Ft(y[8],e);break;case"roundRect":y[5]=Ft(y[5],e);break;case"addPath":y[0].transform(e);break;case"poly":y[2]=Ft(y[2],e);break;default:J("unknown transform action",v.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(e){let t=this.instructions.length-1,r=this.instructions[t];if(!r)return e.x=0,e.y=0,e;for(;r.action==="closePath";){if(t--,t<0)return e.x=0,e.y=0,e;r=this.instructions[t]}switch(r.action){case"moveTo":case"lineTo":e.x=r.data[0],e.y=r.data[1];break;case"quadraticCurveTo":e.x=r.data[2],e.y=r.data[3];break;case"bezierCurveTo":e.x=r.data[4],e.y=r.data[5];break;case"arc":case"arcToSvg":e.x=r.data[5],e.y=r.data[6];break;case"addPath":r.data[0].getLastPoint(e);break}return e}}function Ft(n,e){return n?n.prepend(e):e.clone()}function Vh(n,e){if(typeof n=="string"){const r=document.createElement("div");r.innerHTML=n.trim(),n=r.querySelector("svg")}const t={context:e,path:new vt};return Jo(n,t,null,null),e}function Jo(n,e,t,r){const i=n.children,{fillStyle:s,strokeStyle:o}=Wh(n);s&&t?t={...t,...s}:s&&(t=s),o&&r?r={...r,...o}:o&&(r=o),e.context.fillStyle=t,e.context.strokeStyle=r;let a,l,u,c,h,d,f,p,g,m,v,y,x,_,w,b,S;switch(n.nodeName.toLowerCase()){case"path":_=n.getAttribute("d"),w=new vt(_),e.context.path(w),t&&e.context.fill(),r&&e.context.stroke();break;case"circle":f=ee(n,"cx",0),p=ee(n,"cy",0),g=ee(n,"r",0),e.context.ellipse(f,p,g,g),t&&e.context.fill(),r&&e.context.stroke();break;case"rect":a=ee(n,"x",0),l=ee(n,"y",0),b=ee(n,"width",0),S=ee(n,"height",0),m=ee(n,"rx",0),v=ee(n,"ry",0),m||v?e.context.roundRect(a,l,b,S,m||v):e.context.rect(a,l,b,S),t&&e.context.fill(),r&&e.context.stroke();break;case"ellipse":f=ee(n,"cx",0),p=ee(n,"cy",0),m=ee(n,"rx",0),v=ee(n,"ry",0),e.context.beginPath(),e.context.ellipse(f,p,m,v),t&&e.context.fill(),r&&e.context.stroke();break;case"line":u=ee(n,"x1",0),c=ee(n,"y1",0),h=ee(n,"x2",0),d=ee(n,"y2",0),e.context.beginPath(),e.context.moveTo(u,c),e.context.lineTo(h,d),r&&e.context.stroke();break;case"polygon":x=n.getAttribute("points"),y=x.match(/\d+/g).map(M=>parseInt(M,10)),e.context.poly(y,!0),t&&e.context.fill(),r&&e.context.stroke();break;case"polyline":x=n.getAttribute("points"),y=x.match(/\d+/g).map(M=>parseInt(M,10)),e.context.poly(y,!1),r&&e.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let M=0;M<i.length;M++)Jo(i[M],e,t,r)}function ee(n,e,t){const r=n.getAttribute(e);return r?Number(r):t}function Wh(n){const e=n.getAttribute("style"),t={},r={};let i=!1,s=!1;if(e){const o=e.split(";");for(let a=0;a<o.length;a++){const l=o[a],[u,c]=l.split(":");switch(u){case"stroke":c!=="none"&&(t.color=L.shared.setValue(c).toNumber(),s=!0);break;case"stroke-width":t.width=Number(c);break;case"fill":c!=="none"&&(i=!0,r.color=L.shared.setValue(c).toNumber());break;case"fill-opacity":r.alpha=Number(c);break;case"stroke-opacity":t.alpha=Number(c);break;case"opacity":r.alpha=Number(c),t.alpha=Number(c);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,t.color=L.shared.setValue(o).toNumber(),t.width=ee(n,"stroke-width",1));const a=n.getAttribute("fill");a&&a!=="none"&&(i=!0,r.color=L.shared.setValue(a).toNumber())}return{strokeStyle:s?t:null,fillStyle:i?r:null}}function Xh(n){return L.isColorLike(n)}function gs(n){return n instanceof Bn}function xs(n){return n instanceof Gt}function Hh(n,e,t){const r=L.shared.setValue(e??0);return n.color=r.toNumber(),n.alpha=r.alpha===1?t.alpha:r.alpha,n.texture=R.WHITE,{...t,...n}}function vs(n,e,t){return n.fill=e,n.color=16777215,n.texture=e.texture,n.matrix=e.transform,{...t,...n}}function ys(n,e,t){return e.buildLinearGradient(),n.fill=e,n.color=16777215,n.texture=e.texture,n.matrix=e.transform,{...t,...n}}function Yh(n,e){var i;const t={...e,...n};if(t.texture){if(t.texture!==R.WHITE){const o=((i=t.matrix)==null?void 0:i.clone().invert())||new D;o.translate(t.texture.frame.x,t.texture.frame.y),o.scale(1/t.texture.source.width,1/t.texture.source.height),t.matrix=o}const s=t.texture.source.style;s.addressMode==="clamp-to-edge"&&(s.addressMode="repeat",s.update())}const r=L.shared.setValue(t.color);return t.alpha*=r.alpha,t.color=r.toNumber(),t.matrix=t.matrix?t.matrix.clone():null,t}function je(n,e){if(n==null)return null;const t={},r=n;return Xh(n)?Hh(t,n,e):gs(n)?vs(t,n,e):xs(n)?ys(t,n,e):r.fill&&gs(r.fill)?vs(r,r.fill,e):r.fill&&xs(r.fill)?ys(r,r.fill,e):Yh(r,e)}function Fn(n,e){const{width:t,alignment:r,miterLimit:i,cap:s,join:o,pixelLine:a,...l}=e,u=je(n,l);return u?{width:t,alignment:r,miterLimit:i,cap:s,join:o,pixelLine:a,...u}:null}const jh=new ae,_s=new D,di=class Pe extends se{constructor(){super(...arguments),this.uid=Q("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new vt,this._transform=new D,this._fillStyle={...Pe.defaultFillStyle},this._strokeStyle={...Pe.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Ie,this._boundsDirty=!0}clone(){const e=new Pe;return e.batchMode=this.batchMode,e.instructions=this.instructions.slice(),e._activePath=this._activePath.clone(),e._transform=this._transform.clone(),e._fillStyle={...this._fillStyle},e._strokeStyle={...this._strokeStyle},e._stateStack=this._stateStack.slice(),e._bounds=this._bounds.clone(),e._boundsDirty=!0,e}get fillStyle(){return this._fillStyle}set fillStyle(e){this._fillStyle=je(e,Pe.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(e){this._strokeStyle=Fn(e,Pe.defaultStrokeStyle)}setFillStyle(e){return this._fillStyle=je(e,Pe.defaultFillStyle),this}setStrokeStyle(e){return this._strokeStyle=je(e,Pe.defaultStrokeStyle),this}texture(e,t,r,i,s,o){return this.instructions.push({action:"texture",data:{image:e,dx:r||0,dy:i||0,dw:s||e.frame.width,dh:o||e.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:t?L.shared.setValue(t).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new vt,this}fill(e,t){let r;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?r=i.data.path:r=this._activePath.clone(),r?(e!=null&&(t!==void 0&&typeof e=="number"&&(I(K,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),e={color:e,alpha:t}),this._fillStyle=je(e,Pe.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:e,y:t}=this._activePath.getLastPoint(ae.shared);this._activePath.clear(),this._activePath.moveTo(e,t)}stroke(e){let t;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="fill"?t=r.data.path:t=this._activePath.clone(),t?(e!=null&&(this._strokeStyle=Fn(e,Pe.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:t}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let e=0;e<2;e++){const t=this.instructions[this.instructions.length-1-e],r=this._activePath.clone();if(t&&(t.action==="stroke"||t.action==="fill"))if(t.data.hole)t.data.hole.addPath(r);else{t.data.hole=r;break}}return this._initNextPathLocation(),this}arc(e,t,r,i,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*e+a.c*t+a.tx,a.b*e+a.d*t+a.ty,r,i,s,o),this}arcTo(e,t,r,i,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}arcToSvg(e,t,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(e,t,r,i,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(e,t,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*e+l.c*t+l.tx,l.b*e+l.d*t+l.ty,l.a*r+l.c*i+l.tx,l.b*r+l.d*i+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var e;return this._tick++,(e=this._activePath)==null||e.closePath(),this}ellipse(e,t,r,i){return this._tick++,this._activePath.ellipse(e,t,r,i,this._transform.clone()),this}circle(e,t,r){return this._tick++,this._activePath.circle(e,t,r,this._transform.clone()),this}path(e){return this._tick++,this._activePath.addPath(e,this._transform.clone()),this}lineTo(e,t){this._tick++;const r=this._transform;return this._activePath.lineTo(r.a*e+r.c*t+r.tx,r.b*e+r.d*t+r.ty),this}moveTo(e,t){this._tick++;const r=this._transform,i=this._activePath.instructions,s=r.a*e+r.c*t+r.tx,o=r.b*e+r.d*t+r.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=s,i[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(e,t,r,i,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}rect(e,t,r,i){return this._tick++,this._activePath.rect(e,t,r,i,this._transform.clone()),this}roundRect(e,t,r,i,s){return this._tick++,this._activePath.roundRect(e,t,r,i,s,this._transform.clone()),this}poly(e,t){return this._tick++,this._activePath.poly(e,t,this._transform.clone()),this}regularPoly(e,t,r,i,s=0,o){return this._tick++,this._activePath.regularPoly(e,t,r,i,s,o),this}roundPoly(e,t,r,i,s,o){return this._tick++,this._activePath.roundPoly(e,t,r,i,s,o),this}roundShape(e,t,r,i){return this._tick++,this._activePath.roundShape(e,t,r,i),this}filletRect(e,t,r,i,s){return this._tick++,this._activePath.filletRect(e,t,r,i,s),this}chamferRect(e,t,r,i,s,o){return this._tick++,this._activePath.chamferRect(e,t,r,i,s,o),this}star(e,t,r,i,s=0,o=0){return this._tick++,this._activePath.star(e,t,r,i,s,o,this._transform.clone()),this}svg(e){return this._tick++,Vh(e,this),this}restore(){const e=this._stateStack.pop();return e&&(this._transform=e.transform,this._fillStyle=e.fillStyle,this._strokeStyle=e.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(e){return this._transform.rotate(e),this}scale(e,t=e){return this._transform.scale(e,t),this}setTransform(e,t,r,i,s,o){return e instanceof D?(this._transform.set(e.a,e.b,e.c,e.d,e.tx,e.ty),this):(this._transform.set(e,t,r,i,s,o),this)}transform(e,t,r,i,s,o){return e instanceof D?(this._transform.append(e),this):(_s.set(e,t,r,i,s,o),this._transform.append(_s),this)}translate(e,t=e){return this._transform.translate(e,t),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const e=this._bounds;e.clear();for(let t=0;t<this.instructions.length;t++){const r=this.instructions[t],i=r.action;if(i==="fill"){const s=r.data;e.addBounds(s.path.bounds)}else if(i==="texture"){const s=r.data;e.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(i==="stroke"){const s=r.data,o=s.style.alignment,a=s.style.width*(1-o),l=s.path.bounds;e.addFrame(l.minX-a,l.minY-a,l.maxX+a,l.maxY+a)}}return e}containsPoint(e){var i;if(!this.bounds.containsPoint(e.x,e.y))return!1;const t=this.instructions;let r=!1;for(let s=0;s<t.length;s++){const o=t[s],a=o.data,l=a.path;if(!o.action||!l)continue;const u=a.style,c=l.shapePath.shapePrimitives;for(let h=0;h<c.length;h++){const d=c[h].shape;if(!u||!d)continue;const f=c[h].transform,p=f?f.applyInverse(e,jh):e;o.action==="fill"?r=d.contains(p.x,p.y):r=d.strokeContains(p.x,p.y,u.width);const g=a.hole;if(g){const m=(i=g.shapePath)==null?void 0:i.shapePrimitives;if(m)for(let v=0;v<m.length;v++)m[v].shape.contains(p.x,p.y)&&(r=!1)}if(r)return!0}}return r}destroy(e=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const r=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(r),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(r)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};di.defaultFillStyle={color:16777215,alpha:1,texture:R.WHITE,matrix:null,fill:null};di.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:R.WHITE,matrix:null,fill:null,pixelLine:!1};let Xe=di;const bs=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function qh(n){const e=[];let t=0;for(let r=0;r<bs.length;r++){const i=`_${bs[r]}`;e[t++]=n[i]}return t=ea(n._fill,e,t),t=Kh(n._stroke,e,t),t=Zh(n.dropShadow,e,t),e.join("-")}function ea(n,e,t){var r;return n&&(e[t++]=n.color,e[t++]=n.alpha,e[t++]=(r=n.fill)==null?void 0:r.styleKey),t}function Kh(n,e,t){return n&&(t=ea(n,e,t),e[t++]=n.width,e[t++]=n.alignment,e[t++]=n.cap,e[t++]=n.join,e[t++]=n.miterLimit),t}function Zh(n,e,t){return n&&(e[t++]=n.alpha,e[t++]=n.angle,e[t++]=n.blur,e[t++]=n.distance,e[t++]=L.shared.setValue(n.color).toNumber()),t}const pi=class ot extends se{constructor(e={}){super(),Qh(e);const t={...ot.defaultTextStyle,...e};for(const r in t){const i=r;this[i]=t[r]}this.update()}get align(){return this._align}set align(e){this._align=e,this.update()}get breakWords(){return this._breakWords}set breakWords(e){this._breakWords=e,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(e){e!==null&&typeof e=="object"?this._dropShadow=this._createProxy({...ot.defaultDropShadow,...e}):this._dropShadow=e?this._createProxy({...ot.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(e){this._fontFamily=e,this.update()}get fontSize(){return this._fontSize}set fontSize(e){typeof e=="string"?this._fontSize=parseInt(e,10):this._fontSize=e,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(e){this._fontStyle=e.toLowerCase(),this.update()}get fontVariant(){return this._fontVariant}set fontVariant(e){this._fontVariant=e,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(e){this._fontWeight=e,this.update()}get leading(){return this._leading}set leading(e){this._leading=e,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(e){this._letterSpacing=e,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(e){this._lineHeight=e,this.update()}get padding(){return this._padding}set padding(e){this._padding=e,this.update()}get trim(){return this._trim}set trim(e){this._trim=e,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(e){this._textBaseline=e,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(e){this._whiteSpace=e,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(e){this._wordWrap=e,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(e){this._wordWrapWidth=e,this.update()}get fill(){return this._originalFill}set fill(e){e!==this._originalFill&&(this._originalFill=e,this._isFillStyle(e)&&(this._originalFill=this._createProxy({...Xe.defaultFillStyle,...e},()=>{this._fill=je({...this._originalFill},Xe.defaultFillStyle)})),this._fill=je(e===0?"black":e,Xe.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(e){e!==this._originalStroke&&(this._originalStroke=e,this._isFillStyle(e)&&(this._originalStroke=this._createProxy({...Xe.defaultStrokeStyle,...e},()=>{this._stroke=Fn({...this._originalStroke},Xe.defaultStrokeStyle)})),this._stroke=Fn(e,Xe.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=qh(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const e=ot.defaultTextStyle;for(const t in e)this[t]=e[t]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new ot({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(e=!1){var r,i,s,o;if(this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const a=typeof e=="boolean"?e:e==null?void 0:e.textureSource;(r=this._fill)!=null&&r.texture&&this._fill.texture.destroy(a),(i=this._originalFill)!=null&&i.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(e,t){return new Proxy(e,{set:(r,i,s)=>(r[i]=s,t==null||t(i,s),this.update(),!0)})}_isFillStyle(e){return(e??null)!==null&&!(L.isColorLike(e)||e instanceof Gt||e instanceof Bn)}};pi.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};pi.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let oe=pi;function Qh(n){const e=n;if(typeof e.dropShadow=="boolean"&&e.dropShadow){const t=oe.defaultDropShadow;n.dropShadow={alpha:e.dropShadowAlpha??t.alpha,angle:e.dropShadowAngle??t.angle,blur:e.dropShadowBlur??t.blur,color:e.dropShadowColor??t.color,distance:e.dropShadowDistance??t.distance}}if(e.strokeThickness!==void 0){I(K,"strokeThickness is now a part of stroke");const t=e.stroke;let r={};if(L.isColorLike(t))r.color=t;else if(t instanceof Gt||t instanceof Bn)r.fill=t;else if(Object.hasOwnProperty.call(t,"color")||Object.hasOwnProperty.call(t,"fill"))r=t;else throw new Error("Invalid stroke value.");n.stroke={...r,width:e.strokeThickness}}if(Array.isArray(e.fillGradientStops)){I(K,"gradient fill is now a fill pattern: `new FillGradient(...)`");let t;n.fontSize==null?n.fontSize=oe.defaultTextStyle.fontSize:typeof n.fontSize=="string"?t=parseInt(n.fontSize,10):t=n.fontSize;const r=new Gt(0,0,0,t*1.7),i=e.fillGradientStops.map(s=>L.shared.setValue(s).toNumber());i.forEach((s,o)=>{const a=o/(i.length-1);r.addColorStop(a,s)}),n.fill={fill:r}}}class Jh{constructor(e){this._canvasPool=Object.create(null),this.canvasOptions=e||{},this.enableFullScreen=!1}_createCanvasAndContext(e,t){const r=H.get().createCanvas();r.width=e,r.height=t;const i=r.getContext("2d");return{canvas:r,context:i}}getOptimalCanvasAndContext(e,t,r=1){e=Math.ceil(e*r-1e-6),t=Math.ceil(t*r-1e-6),e=wn(e),t=wn(t);const i=(e<<17)+(t<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let s=this._canvasPool[i].pop();return s||(s=this._createCanvasAndContext(e,t)),s}returnCanvasAndContext(e){const t=e.canvas,{width:r,height:i}=t,s=(r<<17)+(i<<1);e.context.clearRect(0,0,r,i),this._canvasPool[s].push(e)}clear(){this._canvasPool={}}}const Ss=new Jh,ef=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Gr(n){const e=typeof n.fontSize=="number"?`${n.fontSize}px`:n.fontSize;let t=n.fontFamily;Array.isArray(n.fontFamily)||(t=n.fontFamily.split(","));for(let r=t.length-1;r>=0;r--){let i=t[r].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!ef.includes(i)&&(i=`"${i}"`),t[r]=i}return`${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${e} ${t.join(",")}`}const gr={willReadFrequently:!0},Ae=class F{static get experimentalLetterSpacingSupported(){let e=F._experimentalLetterSpacingSupported;if(e!==void 0){const t=H.get().getCanvasRenderingContext2D().prototype;e=F._experimentalLetterSpacingSupported="letterSpacing"in t||"textLetterSpacing"in t}return e}constructor(e,t,r,i,s,o,a,l,u){this.text=e,this.style=t,this.width=r,this.height=i,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=u}static measureText(e=" ",t,r=F._canvas,i=t.wordWrap){var y;const s=`${e}:${t.styleKey}`;if(F._measurementCache[s])return F._measurementCache[s];const o=Gr(t),a=F.measureFont(o);a.fontSize===0&&(a.fontSize=t.fontSize,a.ascent=t.fontSize);const l=F.__context;l.font=o;const c=(i?F._wordWrap(e,t,r):e).split(/(?:\r\n|\r|\n)/),h=new Array(c.length);let d=0;for(let x=0;x<c.length;x++){const _=F._measureText(c[x],t.letterSpacing,l);h[x]=_,d=Math.max(d,_)}const f=((y=t._stroke)==null?void 0:y.width)||0;let p=d+f;t.dropShadow&&(p+=t.dropShadow.distance);const g=t.lineHeight||a.fontSize;let m=Math.max(g,a.fontSize+f)+(c.length-1)*(g+t.leading);return t.dropShadow&&(m+=t.dropShadow.distance),new F(e,t,p,m,c,h,g+t.leading,d,a)}static _measureText(e,t,r){let i=!1;F.experimentalLetterSpacingSupported&&(F.experimentalLetterSpacing?(r.letterSpacing=`${t}px`,r.textLetterSpacing=`${t}px`,i=!0):(r.letterSpacing="0px",r.textLetterSpacing="0px"));const s=r.measureText(e);let o=s.width;const a=-s.actualBoundingBoxLeft;let u=s.actualBoundingBoxRight-a;if(o>0)if(i)o-=t,u-=t;else{const c=(F.graphemeSegmenter(e).length-1)*t;o+=c,u+=c}return Math.max(o,u)}static _wordWrap(e,t,r=F._canvas){const i=r.getContext("2d",gr);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:u,whiteSpace:c}=t,h=F._collapseSpaces(c),d=F._collapseNewlines(c);let f=!h;const p=t.wordWrapWidth+u,g=F._tokenize(e);for(let m=0;m<g.length;m++){let v=g[m];if(F._isNewline(v)){if(!d){a+=F._addLine(o),f=!h,o="",s=0;continue}v=" "}if(h){const x=F.isBreakingSpace(v),_=F.isBreakingSpace(o[o.length-1]);if(x&&_)continue}const y=F._getFromCache(v,u,l,i);if(y>p)if(o!==""&&(a+=F._addLine(o),o="",s=0),F.canBreakWords(v,t.breakWords)){const x=F.wordWrapSplit(v);for(let _=0;_<x.length;_++){let w=x[_],b=w,S=1;for(;x[_+S];){const k=x[_+S];if(!F.canBreakChars(b,k,v,_,t.breakWords))w+=k;else break;b=k,S++}_+=S-1;const M=F._getFromCache(w,u,l,i);M+s>p&&(a+=F._addLine(o),f=!1,o="",s=0),o+=w,s+=M}}else{o.length>0&&(a+=F._addLine(o),o="",s=0);const x=m===g.length-1;a+=F._addLine(v,!x),f=!1,o="",s=0}else y+s>p&&(f=!1,a+=F._addLine(o),o="",s=0),(o.length>0||!F.isBreakingSpace(v)||f)&&(o+=v,s+=y)}return a+=F._addLine(o,!1),a}static _addLine(e,t=!0){return e=F._trimRight(e),e=t?`${e}
`:e,e}static _getFromCache(e,t,r,i){let s=r[e];return typeof s!="number"&&(s=F._measureText(e,t,i)+t,r[e]=s),s}static _collapseSpaces(e){return e==="normal"||e==="pre-line"}static _collapseNewlines(e){return e==="normal"}static _trimRight(e){if(typeof e!="string")return"";for(let t=e.length-1;t>=0;t--){const r=e[t];if(!F.isBreakingSpace(r))break;e=e.slice(0,-1)}return e}static _isNewline(e){return typeof e!="string"?!1:F._newlines.includes(e.charCodeAt(0))}static isBreakingSpace(e,t){return typeof e!="string"?!1:F._breakingSpaces.includes(e.charCodeAt(0))}static _tokenize(e){const t=[];let r="";if(typeof e!="string")return t;for(let i=0;i<e.length;i++){const s=e[i],o=e[i+1];if(F.isBreakingSpace(s,o)||F._isNewline(s)){r!==""&&(t.push(r),r=""),t.push(s);continue}r+=s}return r!==""&&t.push(r),t}static canBreakWords(e,t){return t}static canBreakChars(e,t,r,i,s){return!0}static wordWrapSplit(e){return F.graphemeSegmenter(e)}static measureFont(e){if(F._fonts[e])return F._fonts[e];const t=F._context;t.font=e;const r=t.measureText(F.METRICS_STRING+F.BASELINE_SYMBOL),i={ascent:r.actualBoundingBoxAscent,descent:r.actualBoundingBoxDescent,fontSize:r.actualBoundingBoxAscent+r.actualBoundingBoxDescent};return F._fonts[e]=i,i}static clearMetrics(e=""){e?delete F._fonts[e]:F._fonts={}}static get _canvas(){if(!F.__canvas){let e;try{const t=new OffscreenCanvas(0,0),r=t.getContext("2d",gr);if(r!=null&&r.measureText)return F.__canvas=t,t;e=H.get().createCanvas()}catch{e=H.get().createCanvas()}e.width=e.height=10,F.__canvas=e}return F.__canvas}static get _context(){return F.__context||(F.__context=F._canvas.getContext("2d",gr)),F.__context}};Ae.METRICS_STRING="|ÉqÅ";Ae.BASELINE_SYMBOL="M";Ae.BASELINE_MULTIPLIER=1.4;Ae.HEIGHT_MULTIPLIER=2;Ae.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const n=new Intl.Segmenter;return e=>[...n.segment(e)].map(t=>t.segment)}return n=>[...n]})();Ae.experimentalLetterSpacing=!1;Ae._fonts={};Ae._newlines=[10,13];Ae._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];Ae._measurementCache={};let Nr=Ae;function Cs(n,e){if(n.texture===R.WHITE&&!n.fill)return L.shared.setValue(n.color).setAlpha(n.alpha??1).toHexa();if(n.fill){if(n.fill instanceof Bn){const t=n.fill,r=e.createPattern(t.texture.source.resource,"repeat"),i=t.transform.copyTo(D.shared);return i.scale(t.texture.frame.width,t.texture.frame.height),r.setTransform(i),r}else if(n.fill instanceof Gt){const t=n.fill;if(t.type==="linear"){const r=e.createLinearGradient(t.x0,t.y0,t.x1,t.y1);return t.gradientStops.forEach(i=>{r.addColorStop(i.offset,L.shared.setValue(i.color).toHex())}),r}}}else{const t=e.createPattern(n.texture.source.resource,"repeat"),r=n.matrix.copyTo(D.shared);return r.scale(n.texture.frame.width,n.texture.frame.height),t.setTransform(r),t}return J("FillStyle not recognised",n),"red"}function ta(n){if(n==="")return[];typeof n=="string"&&(n=[n]);const e=[];for(let t=0,r=n.length;t<r;t++){const i=n[t];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const s=i[0].charCodeAt(0),o=i[1].charCodeAt(0);if(o<s)throw new Error("[BitmapFont]: Invalid character range.");for(let a=s,l=o;a<=l;a++)e.push(String.fromCharCode(a))}else e.push(...Array.from(i))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}const na=class ra extends Uo{constructor(e){super(),this.resolution=1,this.pages=[],this._padding=0,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const t={...ra.defaultOptions,...e};this._textureSize=t.textureSize,this._mipmap=t.mipmap;const r=t.style.clone();t.overrideFill&&(r._fill.color=16777215,r._fill.alpha=1,r._fill.texture=R.WHITE,r._fill.fill=null),this.applyFillAsTint=t.overrideFill;const i=r.fontSize;r.fontSize=this.baseMeasurementFontSize;const s=Gr(r);t.overrideSize?r._stroke&&(r._stroke.width*=this.baseRenderedFontSize/i):r.fontSize=this.baseRenderedFontSize=i,this._style=r,this._skipKerning=t.skipKerning??!1,this.resolution=t.resolution??1,this._padding=t.padding??4,this.fontMetrics=Nr.measureFont(s),this.lineHeight=r.lineHeight||this.fontMetrics.fontSize||r.fontSize}ensureCharacters(e){var m,v;const t=ta(e).filter(y=>!this._currentChars.includes(y)).filter((y,x,_)=>_.indexOf(y)===x);if(!t.length)return;this._currentChars=[...this._currentChars,...t];let r;this._currentPageIndex===-1?r=this._nextPage():r=this.pages[this._currentPageIndex];let{canvas:i,context:s}=r.canvasAndContext,o=r.texture.source;const a=this._style;let l=this._currentX,u=this._currentY;const c=this.baseRenderedFontSize/this.baseMeasurementFontSize,h=this._padding*c;let d=0,f=!1;const p=i.width/this.resolution,g=i.height/this.resolution;for(let y=0;y<t.length;y++){const x=t[y],_=Nr.measureText(x,a,i,!1);_.lineHeight=_.height;const w=_.width*c,b=Math.ceil((a.fontStyle==="italic"?2:1)*w),S=_.height*c,M=b+h*2,k=S+h*2;if(f=!1,x!==`
`&&x!=="\r"&&x!=="	"&&x!==" "&&(f=!0,d=Math.ceil(Math.max(k,d))),l+M>p&&(u+=d,d=k,l=0,u+d>g)){o.update();const A=this._nextPage();i=A.canvasAndContext.canvas,s=A.canvasAndContext.context,o=A.texture.source,u=0}const T=w/c-(((m=a.dropShadow)==null?void 0:m.distance)??0)-(((v=a._stroke)==null?void 0:v.width)??0);if(this.chars[x]={id:x.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:T,kerning:{}},f){this._drawGlyph(s,_,l+h,u+h,c,a);const A=o.width*c,V=o.height*c,W=new Z(l/A*o.width,u/V*o.height,M/A*o.width,k/V*o.height);this.chars[x].texture=new R({source:o,frame:W}),l+=Math.ceil(M)}}o.update(),this._currentX=l,this._currentY=u,this._skipKerning&&this._applyKerning(t,s)}get pageTextures(){return I(K,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(e,t){const r=this._measureCache;for(let i=0;i<e.length;i++){const s=e[i];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=r[s];l||(l=r[s]=t.measureText(s).width);let u=r[a];u||(u=r[a]=t.measureText(a).width);let c=t.measureText(s+a).width,h=c-(l+u);h&&(this.chars[s].kerning[a]=h),c=t.measureText(s+a).width,h=c-(l+u),h&&(this.chars[a].kerning[s]=h)}}}_nextPage(){this._currentPageIndex++;const e=this.resolution,t=Ss.getOptimalCanvasAndContext(this._textureSize,this._textureSize,e);this._setupContext(t.context,this._style,e);const r=e*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new R({source:new nt({resource:t.canvas,resolution:r,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})}),s={canvasAndContext:t,texture:i};return this.pages[this._currentPageIndex]=s,s}_setupContext(e,t,r){t.fontSize=this.baseRenderedFontSize,e.scale(r,r),e.font=Gr(t),t.fontSize=this.baseMeasurementFontSize,e.textBaseline=t.textBaseline;const i=t._stroke,s=(i==null?void 0:i.width)??0;if(i&&(e.lineWidth=s,e.lineJoin=i.join,e.miterLimit=i.miterLimit,e.strokeStyle=Cs(i,e)),t._fill&&(e.fillStyle=Cs(t._fill,e)),t.dropShadow){const o=t.dropShadow,a=L.shared.setValue(o.color).toArray(),l=o.blur*r,u=o.distance*r;e.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,e.shadowBlur=l,e.shadowOffsetX=Math.cos(o.angle)*u,e.shadowOffsetY=Math.sin(o.angle)*u}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}_drawGlyph(e,t,r,i,s,o){const a=t.text,l=t.fontProperties,u=o._stroke,c=((u==null?void 0:u.width)??0)*s,h=r+c/2,d=i-c/2,f=l.descent*s,p=t.lineHeight*s;o.stroke&&c&&e.strokeText(a,h,d+p-f),o._fill&&e.fillText(a,h,d+p-f)}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{canvasAndContext:t,texture:r}=this.pages[e];Ss.returnCanvasAndContext(t),r.destroy(!0)}this.pages=null}};na.defaultOptions={textureSize:512,style:new oe,mipmap:!0};let ws=na;function tf(n,e,t,r){const i={width:0,height:0,offsetY:0,scale:e.fontSize/t.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};i.offsetY=t.baseLineOffset;let s=i.lines[0],o=null,a=!0;const l={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},u=p=>{const g=s.width;for(let m=0;m<l.index;m++){const v=p.positions[m];s.chars.push(p.chars[m]),s.charPositions.push(v+g)}s.width+=p.width,a=!1,l.width=0,l.index=0,l.chars.length=0},c=()=>{let p=s.chars.length-1;if(r){let g=s.chars[p];for(;g===" ";)s.width-=t.chars[g].xAdvance,g=s.chars[--p]}i.width=Math.max(i.width,s.width),s={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},a=!0,i.lines.push(s),i.height+=t.lineHeight},h=t.baseMeasurementFontSize/e.fontSize,d=e.letterSpacing*h,f=e.wordWrapWidth*h;for(let p=0;p<n.length+1;p++){let g;const m=p===n.length;m||(g=n[p]);const v=t.chars[g]||t.chars[" "];if(/(?:\s)/.test(g)||g==="\r"||g===`
`||m){if(!a&&e.wordWrap&&s.width+l.width-d>f?(c(),u(l),m||s.charPositions.push(0)):(l.start=s.width,u(l),m||s.charPositions.push(0)),g==="\r"||g===`
`)s.width!==0&&c();else if(!m){const w=v.xAdvance+(v.kerning[o]||0)+d;s.width+=w,s.spaceWidth=w,s.spacesIndex.push(s.charPositions.length),s.chars.push(g)}}else{const _=v.kerning[o]||0,w=v.xAdvance+_+d;l.positions[l.index++]=l.width+_,l.chars.push(g),l.width+=w}o=g}return c(),e.align==="center"?nf(i):e.align==="right"?rf(i):e.align==="justify"&&sf(i),i}function nf(n){for(let e=0;e<n.lines.length;e++){const t=n.lines[e],r=n.width/2-t.width/2;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=r}}function rf(n){for(let e=0;e<n.lines.length;e++){const t=n.lines[e],r=n.width-t.width;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=r}}function sf(n){const e=n.width;for(let t=0;t<n.lines.length;t++){const r=n.lines[t];let i=0,s=r.spacesIndex[i++],o=0;const a=r.spacesIndex.length,u=(e-r.width)/a;for(let c=0;c<r.charPositions.length;c++)c===s&&(s=r.spacesIndex[i++],o+=u),r.charPositions[c]+=o}}let un=0;class of{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(e,t){var o;let r=`${t.fontFamily}-bitmap`,i=!0;if(t._fill.fill&&!t._stroke)r+=t._fill.fill.styleKey,i=!1;else if(t._stroke||t.dropShadow){let a=t.styleKey;a=a.substring(0,a.lastIndexOf("-")),r=`${a}-bitmap`,i=!1}if(!q.has(r)){const a=new ws({style:t,overrideFill:i,overrideSize:!0,...this.defaultOptions});un++,un>50&&J("BitmapText",`You have dynamically created ${un} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),a.once("destroy",()=>{un--,q.remove(r)}),q.set(r,a)}const s=q.get(r);return(o=s.ensureCharacters)==null||o.call(s,e),s}getLayout(e,t,r=!0){const i=this.getFont(e,t);return tf([...e],t,i,r)}measureText(e,t,r=!0){return this.getLayout(e,t,r)}install(...e){var u,c,h,d;let t=e[0];typeof t=="string"&&(t={name:t,style:e[1],chars:(u=e[2])==null?void 0:u.chars,resolution:(c=e[2])==null?void 0:c.resolution,padding:(h=e[2])==null?void 0:h.padding,skipKerning:(d=e[2])==null?void 0:d.skipKerning},I(K,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const r=t==null?void 0:t.name;if(!r)throw new Error("[BitmapFontManager] Property `name` is required.");t={...this.defaultOptions,...t};const i=t.style,s=i instanceof oe?i:new oe(i),o=s._fill.fill!==null&&s._fill.fill!==void 0,a=new ws({style:s,overrideFill:o,skipKerning:t.skipKerning,padding:t.padding,resolution:t.resolution,overrideSize:!1}),l=ta(t.chars);return a.ensureCharacters(l.join("")),q.set(`${r}-bitmap`,a),a.once("destroy",()=>q.remove(`${r}-bitmap`)),a}uninstall(e){const t=`${e}-bitmap`,r=q.get(t);r&&r.destroy()}}const As=new of;class ia extends Uo{constructor(e,t){super();const{textures:r,data:i}=e;Object.keys(i.pages).forEach(s=>{const o=i.pages[parseInt(s,10)],a=r[o.id];this.pages.push({texture:a})}),Object.keys(i.chars).forEach(s=>{const o=i.chars[s],{frame:a,source:l}=r[o.page],u=new Z(o.x+a.x,o.y+a.y,o.width,o.height),c=new R({source:l,frame:u});this.chars[s]={id:s.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:c}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=t}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:t}=this.pages[e];t.destroy(!0)}this.pages=null}static install(e){As.install(e)}static uninstall(e){As.uninstall(e)}}const xr={test(n){return typeof n=="string"&&n.startsWith("info face=")},parse(n){const e=n.match(/^[a-z]+\s+.+$/gm),t={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const d=e[h].match(/^[a-z]+/gm)[0],f=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),p={};for(const g in f){const m=f[g].split("="),v=m[0],y=m[1].replace(/"/gm,""),x=parseFloat(y),_=isNaN(x)?y:x;p[v]=_}t[d].push(p)}const r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=t.info,[s]=t.common,[o]=t.distanceField??[];o&&(r.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),r.fontSize=parseInt(i.size,10),r.fontFamily=i.face,r.lineHeight=parseInt(s.lineHeight,10);const a=t.page;for(let h=0;h<a.length;h++)r.pages.push({id:parseInt(a[h].id,10)||0,file:a[h].file});const l={};r.baseLineOffset=r.lineHeight-parseInt(s.base,10);const u=t.char;for(let h=0;h<u.length;h++){const d=u[h],f=parseInt(d.id,10);let p=d.letter??d.char??String.fromCharCode(f);p==="space"&&(p=" "),l[f]=p,r.chars[p]={id:f,page:parseInt(d.page,10)||0,x:parseInt(d.x,10),y:parseInt(d.y,10),width:parseInt(d.width,10),height:parseInt(d.height,10),xOffset:parseInt(d.xoffset,10),yOffset:parseInt(d.yoffset,10),xAdvance:parseInt(d.xadvance,10),kerning:{}}}const c=t.kerning||[];for(let h=0;h<c.length;h++){const d=parseInt(c[h].first,10),f=parseInt(c[h].second,10),p=parseInt(c[h].amount,10);r.chars[l[f]].kerning[l[d]]=p}return r}},Ts={test(n){const e=n;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(n){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},t=n.getElementsByTagName("info")[0],r=n.getElementsByTagName("common")[0],i=n.getElementsByTagName("distanceField")[0];i&&(e.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const s=n.getElementsByTagName("page"),o=n.getElementsByTagName("char"),a=n.getElementsByTagName("kerning");e.fontSize=parseInt(t.getAttribute("size"),10),e.fontFamily=t.getAttribute("face"),e.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let u=0;u<s.length;u++)e.pages.push({id:parseInt(s[u].getAttribute("id"),10)||0,file:s[u].getAttribute("file")});const l={};e.baseLineOffset=e.lineHeight-parseInt(r.getAttribute("base"),10);for(let u=0;u<o.length;u++){const c=o[u],h=parseInt(c.getAttribute("id"),10);let d=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);d==="space"&&(d=" "),l[h]=d,e.chars[d]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<a.length;u++){const c=parseInt(a[u].getAttribute("first"),10),h=parseInt(a[u].getAttribute("second"),10),d=parseInt(a[u].getAttribute("amount"),10);e.chars[l[h]].kerning[l[c]]=d}return e}},Ps={test(n){return typeof n=="string"&&n.includes("<font>")?Ts.test(H.get().parseXML(n)):!1},parse(n){return Ts.parse(H.get().parseXML(n))}},af=[".xml",".fnt"],lf={extension:{type:P.CacheParser,name:"cacheBitmapFont"},test:n=>n instanceof ia,getCacheableAssets(n,e){const t={};return n.forEach(r=>{t[r]=e,t[`${r}-bitmap`]=e}),t[`${e.fontFamily}-bitmap`]=e,t}},uf={extension:{type:P.LoadParser,priority:Re.Normal},name:"loadBitmapFont",test(n){return af.includes(ie.extname(n).toLowerCase())},async testParse(n){return xr.test(n)||Ps.test(n)},async parse(n,e,t){const r=xr.test(n)?xr.parse(n):Ps.parse(n),{src:i}=e,{pages:s}=r,o=[],a=r.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<s.length;++h){const d=s[h].file;let f=ie.join(ie.dirname(i),d);f=Tr(f,i),o.push({src:f,data:a})}const l=await t.load(o),u=o.map(h=>l[h.src]);return new ia({data:r,textures:u},i)},async load(n,e){return await(await H.get().fetch(n)).text()},async unload(n,e,t){await Promise.all(n.pages.map(r=>t.unload(r.texture.source._sourceOrigin))),n.destroy()}};class cf{constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e){e.forEach(t=>{this._assetList.push(t)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<t;r++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const hf={extension:{type:P.CacheParser,name:"cacheTextureArray"},test:n=>Array.isArray(n)&&n.every(e=>e instanceof R),getCacheableAssets:(n,e)=>{const t={};return n.forEach(r=>{e.forEach((i,s)=>{t[r+(s===0?"":s+1)]=i})}),t}};async function sa(n){if("Image"in globalThis)return new Promise(e=>{const t=new Image;t.onload=()=>{e(!0)},t.onerror=()=>{e(!1)},t.src=n});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(n)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ff={extension:{type:P.DetectionParser,priority:1},test:async()=>sa("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async n=>[...n,"avif"],remove:async n=>n.filter(e=>e!=="avif")},Fs=["png","jpg","jpeg"],df={extension:{type:P.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async n=>[...n,...Fs],remove:async n=>n.filter(e=>!Fs.includes(e))},pf="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function mi(n){return pf?!1:document.createElement("video").canPlayType(n)!==""}const mf={extension:{type:P.DetectionParser,priority:0},test:async()=>mi("video/mp4"),add:async n=>[...n,"mp4","m4v"],remove:async n=>n.filter(e=>e!=="mp4"&&e!=="m4v")},gf={extension:{type:P.DetectionParser,priority:0},test:async()=>mi("video/ogg"),add:async n=>[...n,"ogv"],remove:async n=>n.filter(e=>e!=="ogv")},xf={extension:{type:P.DetectionParser,priority:0},test:async()=>mi("video/webm"),add:async n=>[...n,"webm"],remove:async n=>n.filter(e=>e!=="webm")},vf={extension:{type:P.DetectionParser,priority:0},test:async()=>sa("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async n=>[...n,"webp"],remove:async n=>n.filter(e=>e!=="webp")};class yf{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,r)=>(this._parsersValidated=!1,e[t]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,t){const r={promise:null,parser:null};return r.promise=(async()=>{var o,a;let i=null,s=null;if(t.loadParser&&(s=this._parserHash[t.loadParser],s||J(`[Assets] specified load parser "${t.loadParser}" not found while loading ${e}`)),!s){for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.load&&((o=u.test)!=null&&o.call(u,e,t,this))){s=u;break}}if(!s)return J(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(e,t,this),r.parser=s;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];u.parse&&u.parse&&await((a=u.testParse)==null?void 0:a.call(u,i,t,this))&&(i=await u.parse(i,t,this)||i,r.parser=u)}return i})(),r}async load(e,t){this._parsersValidated||this._validateParsers();let r=0;const i={},s=Tn(e),o=we(e,u=>({alias:[u],src:u,data:{}})),a=o.length,l=o.map(async u=>{const c=ie.toAbsolute(u.src);if(!i[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),i[u.src]=await this.promiseCache[c].promise,t&&t(++r/a)}catch(h){throw delete this.promiseCache[c],delete i[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(l),s?i[o[0].src]:i}async unload(e){const r=we(e,i=>({alias:[i],src:i})).map(async i=>{var a,l;const s=ie.toAbsolute(i.src),o=this.promiseCache[s];if(o){const u=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,u,i,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,t)=>(t.name?e[t.name]&&J(`[Assets] loadParser name conflict "${t.name}"`):J("[Assets] loadParser should have a name"),{...e,[t.name]:t}),{})}}function _t(n,e){if(Array.isArray(e)){for(const t of e)if(n.startsWith(`data:${t}`))return!0;return!1}return n.startsWith(`data:${e}`)}function bt(n,e){const t=n.split("?")[0],r=ie.extname(t).toLowerCase();return Array.isArray(e)?e.includes(r):r===e}const _f=".json",bf="application/json",Sf={extension:{type:P.LoadParser,priority:Re.Low},name:"loadJson",test(n){return _t(n,bf)||bt(n,_f)},async load(n){return await(await H.get().fetch(n)).json()}},Cf=".txt",wf="text/plain",Af={name:"loadTxt",extension:{type:P.LoadParser,priority:Re.Low,name:"loadTxt"},test(n){return _t(n,wf)||bt(n,Cf)},async load(n){return await(await H.get().fetch(n)).text()}},Tf=["normal","bold","100","200","300","400","500","600","700","800","900"],Pf=[".ttf",".otf",".woff",".woff2"],Ff=["font/ttf","font/otf","font/woff","font/woff2"],If=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Mf(n){const e=ie.extname(n),i=ie.basename(n,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=i.length>0;for(const a of i)if(!a.match(If)){s=!1;break}let o=i.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const zf=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Of(n){return zf.test(n)?n:encodeURI(n)}const Rf={extension:{type:P.LoadParser,priority:Re.Low},name:"loadWebFont",test(n){return _t(n,Ff)||bt(n,Pf)},async load(n,e){var r,i,s;const t=H.get().getFontFaceSet();if(t){const o=[],a=((r=e.data)==null?void 0:r.family)??Mf(n),l=((s=(i=e.data)==null?void 0:i.weights)==null?void 0:s.filter(c=>Tf.includes(c)))??["normal"],u=e.data??{};for(let c=0;c<l.length;c++){const h=l[c],d=new FontFace(a,`url(${Of(n)})`,{...u,weight:h});await d.load(),t.add(d),o.push(d)}return q.set(`${a}-and-url`,{url:n,fontFaces:o}),o.length===1?o[0]:o}return J("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(n){(Array.isArray(n)?n:[n]).forEach(e=>{q.remove(e.family),H.get().getFontFaceSet().delete(e)})}};function gi(n,e=1){var r;const t=(r=yt.RETINA_PREFIX)==null?void 0:r.exec(n);return t?parseFloat(t[1]):e}function xi(n,e,t){n.label=t,n._sourceOrigin=t;const r=new R({source:n,label:t}),i=()=>{delete e.promiseCache[t],q.has(t)&&q.remove(t)};return r.source.once("destroy",()=>{e.promiseCache[t]&&(J("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),r.once("destroy",()=>{n.destroyed||(J("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),r}const Ef=".svg",Uf="image/svg+xml",kf={extension:{type:P.LoadParser,priority:Re.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(n){return _t(n,Uf)||bt(n,Ef)},async load(n,e,t){return e.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Lf(n):Bf(n,e,t,this.config.crossOrigin)},unload(n){n.destroy(!0)}};async function Bf(n,e,t,r){var m,v,y;const s=await(await H.get().fetch(n)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=r,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),u=l.getContext("2d"),c=((m=e.data)==null?void 0:m.resolution)||gi(n),h=((v=e.data)==null?void 0:v.width)??a.width,d=((y=e.data)==null?void 0:y.height)??a.height;l.width=h*c,l.height=d*c,u.drawImage(a,0,0,h*c,d*c);const{parseAsGraphicsContext:f,...p}=e.data,g=new nt({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:c,...p});return xi(g,t,n)}async function Lf(n){const t=await(await H.get().fetch(n)).text(),r=new Xe;return r.svg(t),r}const Df=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let dt=null,$r=class{constructor(){dt||(dt=URL.createObjectURL(new Blob([Df],{type:"application/javascript"}))),this.worker=new Worker(dt)}};$r.revokeObjectURL=function(){dt&&(URL.revokeObjectURL(dt),dt=null)};const Gf=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let pt=null;class oa{constructor(){pt||(pt=URL.createObjectURL(new Blob([Gf],{type:"application/javascript"}))),this.worker=new Worker(pt)}}oa.revokeObjectURL=function(){pt&&(URL.revokeObjectURL(pt),pt=null)};let Is=0,vr;class Nf{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:t}=new $r;t.addEventListener("message",r=>{t.terminate(),$r.revokeObjectURL(),e(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,t){var r;return this._run("loadImageBitmap",[e,(r=t==null?void 0:t.data)==null?void 0:r.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){vr===void 0&&(vr=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<vr&&(this._createdWorkers++,e=new oa().worker,e.addEventListener("message",t=>{this._complete(t.data),this._returnWorker(t.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,t){await this._initWorkers();const r=new Promise((i,s)=>{this._queue.push({id:e,arguments:t,resolve:i,reject:s})});return this._next(),r}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const t=this._queue.pop(),r=t.id;this._resolveHash[Is]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:Is++,id:r})}}const Ms=new Nf,$f=[".jpeg",".jpg",".png",".webp",".avif"],Vf=["image/jpeg","image/png","image/webp","image/avif"];async function Wf(n,e){var i;const t=await H.get().fetch(n);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${t.status} ${t.statusText}`);const r=await t.blob();return((i=e==null?void 0:e.data)==null?void 0:i.alphaMode)==="premultiplied-alpha"?createImageBitmap(r,{premultiplyAlpha:"none"}):createImageBitmap(r)}const aa={name:"loadTextures",extension:{type:P.LoadParser,priority:Re.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(n){return _t(n,Vf)||bt(n,$f)},async load(n,e,t){var s;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Ms.isImageBitmapSupported()?r=await Ms.loadImageBitmap(n,e):r=await Wf(n,e):r=await new Promise(o=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=n,r.complete?o(r):r.onload=()=>{o(r)}});const i=new nt({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((s=e.data)==null?void 0:s.resolution)||gi(n),...e.data});return xi(i,t,n)},unload(n){n.destroy(!0)}},la=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Xf=la.map(n=>`video/${n.substring(1)}`);function Hf(n,e,t){t===void 0&&!e.startsWith("data:")?n.crossOrigin=jf(e):t!==!1&&(n.crossOrigin=typeof t=="string"?t:"anonymous")}function Yf(n){return new Promise((e,t)=>{n.addEventListener("canplaythrough",r),n.addEventListener("error",i),n.load();function r(){s(),e()}function i(o){s(),t(o)}function s(){n.removeEventListener("canplaythrough",r),n.removeEventListener("error",i)}})}function jf(n,e=globalThis.location){if(n.startsWith("data:"))return"";e||(e=globalThis.location);const t=new URL(n,document.baseURI);return t.hostname!==e.hostname||t.port!==e.port||t.protocol!==e.protocol?"anonymous":""}const qf={name:"loadVideo",extension:{type:P.LoadParser,name:"loadVideo"},test(n){const e=_t(n,Xf),t=bt(n,la);return e||t},async load(n,e,t){var l,u;const r={...fn.defaultOptions,resolution:((l=e.data)==null?void 0:l.resolution)||gi(n),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await co(),...e.data},i=document.createElement("video"),s={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(s).forEach(c=>{const h=s[c];h!==void 0&&i.setAttribute(c,h)}),r.muted===!0&&(i.muted=!0),Hf(i,n,r.crossorigin);const o=document.createElement("source");let a;if(n.startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){const c=n.split("?")[0].slice(n.lastIndexOf(".")+1).toLowerCase();a=fn.MIME_TYPES[c]||`video/${c}`}return o.src=n,a&&(o.type=a),new Promise(c=>{const h=async()=>{const d=new fn({...r,resource:i});i.removeEventListener("canplay",h),e.data.preload&&await Yf(i),c(xi(d,t,n))};i.addEventListener("canplay",h),i.appendChild(o)})},unload(n){n.destroy(!0)}},ua={extension:{type:P.ResolveParser,name:"resolveTexture"},test:aa.test,parse:n=>{var e;return{resolution:parseFloat(((e=yt.RETINA_PREFIX.exec(n))==null?void 0:e[1])??"1"),format:n.split(".").pop(),src:n}}},Kf={extension:{type:P.ResolveParser,priority:-2,name:"resolveJson"},test:n=>yt.RETINA_PREFIX.test(n)&&n.endsWith(".json"),parse:ua.parse};class Zf{constructor(){this._detections=[],this._initialized=!1,this.resolver=new yt,this.loader=new yf,this.cache=q,this._backgroundLoader=new cf(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var s,o;if(this._initialized){J("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let a=e.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const t=((s=e.texturePreference)==null?void 0:s.resolution)??1,r=typeof t=="number"?[t]:t,i=await this._detectFormats({preferredFormats:(o=e.texturePreference)==null?void 0:o.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:r}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,t){this._initialized||await this.init();const r=Tn(e),i=we(e).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(u=>!this.resolver.hasKey(u))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(i),o=await this._mapLoadToResolve(s,t);return r?o[i[0]]:o}addBundle(e,t){this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let r=!1;typeof e=="string"&&(r=!0,e=[e]);const i=this.resolver.resolveBundle(e),s={},o=Object.keys(i);let a=0,l=0;const u=()=>{t==null||t(++a/l)},c=o.map(h=>{const d=i[h];return l+=Object.keys(d).length,this._mapLoadToResolve(d,u).then(f=>{s[h]=f})});return await Promise.all(c),r?s[e[0]]:s}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolveBundle(e);Object.values(t).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return q.get(e);const t={};for(let r=0;r<e.length;r++)t[r]=q.get(e[r]);return t}async _mapLoadToResolve(e,t){const r=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const i=await this.loader.load(r,t);this._backgroundLoader.active=!0;const s={};return r.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(u=>{s[u]=a}),q.set(l,a)}),s}async unload(e){this._initialized||await this.init();const t=we(e).map(i=>typeof i!="string"?i.src:i),r=this.resolver.resolve(t);await this._unloadFromResolved(r)}async unloadBundle(e){this._initialized||await this.init(),e=we(e);const t=this.resolver.resolveBundle(e),r=Object.keys(t).map(i=>this._unloadFromResolved(t[i]));await Promise.all(r)}async _unloadFromResolved(e){const t=Object.values(e);t.forEach(r=>{q.remove(r.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const r of e.detections)e.skipDetections||await r.test()?t=await r.add(t):e.skipDetections||(t=await r.remove(t));return t=t.filter((r,i)=>t.indexOf(r)===i),t}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(r=>r in e).forEach(r=>{t.config[r]=e[r]})})}}const ve=new Zf;le.handleByList(P.LoadParser,ve.loader.parsers).handleByList(P.ResolveParser,ve.resolver.parsers).handleByList(P.CacheParser,ve.cache.parsers).handleByList(P.DetectionParser,ve.detections);le.add(hf,df,ff,vf,mf,gf,xf,Sf,Af,Rf,kf,aa,qf,uf,lf,ua,Kf);const zs={loader:P.LoadParser,resolver:P.ResolveParser,cache:P.CacheParser,detection:P.DetectionParser};le.handle(P.Asset,n=>{const e=n.ref;Object.entries(zs).filter(([t])=>!!e[t]).forEach(([t,r])=>le.add(Object.assign(e[t],{extension:e[t].extension??r})))},n=>{const e=n.ref;Object.keys(zs).filter(t=>!!e[t]).forEach(t=>le.remove(e[t]))});var Qf=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Jf=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Os=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const ca=class ha extends B{constructor(e){e={...ha.defaultOptions,...e};const t=E.from({vertex:{source:Os,entryPoint:"mainVertex"},fragment:{source:Os,entryPoint:"mainFragment"}}),r=U.from({vertex:Qf,fragment:Jf,name:"alpha-filter"}),{alpha:i,...s}=e,o=new ai({uAlpha:{value:i,type:"f32"}});super({...s,gpuProgram:t,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};ca.defaultOptions={alpha:1};let ed=ca;const fa={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},td=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function nd(n){const e=fa[n],t=e.length;let r=td,i="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<n;a++){let l=s.replace("%index%",a.toString());o=a,a>=t&&(o=n-a-1),l=l.replace("%value%",e[o].toString()),i+=l,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r}const rd=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function id(n,e){const t=Math.ceil(n/2);let r=rd,i="",s;e?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(t-1)}.0`),i+=a,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r=r.replace("%dimension%",e?"z":"w"),r}function sd(n,e){const t=id(e,n),r=nd(e);return U.from({vertex:t,fragment:r,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var od=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function ad(n,e){const t=fa[e],r=t.length,i=[],s=[],o=[];for(let h=0;h<e;h++){i[h]=`@location(${h}) offset${h}: vec2<f32>,`,n?s[h]=`filteredCord + vec2(${h-r+1} * pixelStrength, 0.0),`:s[h]=`filteredCord + vec2(0.0, ${h-r+1} * pixelStrength),`;const d=h<r?h:e-h-1,f=t[d].toString();o[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${f};`}const a=i.join(`
`),l=s.join(`
`),u=o.join(`
`),c=od.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",u).replace("%dimension%",n?"z":"w");return E.from({vertex:{source:c,entryPoint:"mainVertex"},fragment:{source:c,entryPoint:"mainFragment"}})}const da=class pa extends B{constructor(e){e={...pa.defaultOptions,...e};const t=sd(e.horizontal,e.kernelSize),r=ad(e.horizontal,e.kernelSize);super({glProgram:t,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...e}),this.horizontal=e.horizontal,this._quality=0,this.quality=e.quality,this.blur=e.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(e,t,r,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,t,r,i);else{const s=_e.getSameSizeTexture(t);let o=t,a=s;this._state.blend=!1;const l=e.renderer.type===Pn.WEBGPU;for(let u=0;u<this.passes-1;u++){e.applyFilter(this,o,a,u===0?!0:l);const c=a;a=o,o=c}this._state.blend=!0,e.applyFilter(this,o,r,i),_e.returnTexture(s)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};da.defaultOptions={strength:8,quality:4,kernelSize:5};let Rs=da;class In extends et{constructor(...e){let t=e[0];Array.isArray(e[0])&&(t={textures:e[0],autoUpdate:e[1]});const{textures:r,autoUpdate:i,...s}=t,[o]=r;super({...s,texture:o instanceof R?o:o.texture}),this._textures=null,this._durations=null,this._autoUpdate=i??!0,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=r}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(be.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(be.shared.add(this.update,this,An.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(e){this.stop(),this.currentFrame=e}gotoAndPlay(e){this.currentFrame=e,this.play()}update(e){if(!this._playing)return;const t=e.deltaTime,r=this.animationSpeed*t,i=this.currentFrame;if(this._durations!==null){let s=this._currentTime%1*this._durations[this.currentFrame];for(s+=r/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];const o=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=r;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):i!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<i||this.animationSpeed<0&&this.currentFrame>i)&&this.onLoop(),this._updateTexture())}_updateTexture(){const e=this.currentFrame;this._previousFrame!==e&&(this._previousFrame=e,this.texture=this._textures[e],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(e){const t=[];for(let r=0;r<e.length;++r)t.push(R.from(e[r]));return new In(t)}static fromImages(e){const t=[];for(let r=0;r<e.length;++r)t.push(R.from(e[r]));return new In(t)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(e){if(e[0]instanceof R)this._textures=e,this._durations=null;else{this._textures=[],this._durations=[];for(let t=0;t<e.length;t++)this._textures.push(e[t].texture),this._durations.push(e[t].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let e=Math.floor(this._currentTime)%this._textures.length;return e<0&&(e+=this._textures.length),e}set currentFrame(e){if(e<0||e>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const t=this.currentFrame;this._currentTime=e,t!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(be.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(be.shared.add(this.update,this),this._isConnectedToTicker=!0))}}class ld extends no{constructor(e,t){const{text:r,resolution:i,style:s,anchor:o,width:a,height:l,roundPixels:u,...c}=e;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=t,this.text=r??"",this.style=s,this.resolution=i??null,this.allowChildren=!1,this._anchor=new ce({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=u??!1,a!==void 0&&(this.width=a),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var t;e||(e={}),(t=this._style)==null||t.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,t){typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,this.bounds.width),t!==void 0&&this._setHeight(t,this.bounds.height)}containsPoint(e){const t=this.bounds.width,r=this.bounds.height,i=-t*this.anchor.x;let s=0;return e.x>=i&&e.x<=i+t&&(s=-r*this.anchor.y,e.y>=s&&e.y<=s+r)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function ud(n,e){let t=n[0]??{};return(typeof t=="string"||n[1])&&(I(K,`use new ${e}({ text: "hi!", style }) instead`),t={text:t,style:n[1]}),t}class cd extends ld{constructor(...e){const t=ud(e,"Text");super(t,oe),this.renderPipeId="text"}updateBounds(){const e=this._bounds,t=this._anchor,r=Nr.measureText(this._text,this._style),{width:i,height:s}=r;e.minX=-t._x*i,e.maxX=e.minX+i,e.minY=-t._y*s,e.maxY=e.minY+s}}const It=new Map;function hd(n,e){if(!It.has(n)){const t=new R({source:new si({resource:n,...e})}),r=()=>{It.get(n)===t&&It.delete(n)};t.once("destroy",r),t.source.once("destroy",r),It.set(n,t)}return It.get(n)}const ma=class ga{constructor(e={}){if(this.uid=Q("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,e={...ga.defaultOptions,...e},this.stencil=e.stencil,this.depth=e.depth,this.isRoot=e.isRoot,typeof e.colorTextures=="number"){this._managedColorTextures=!0;for(let t=0;t<e.colorTextures;t++)this.colorTextures.push(new me({width:e.width,height:e.height,resolution:e.resolution,antialias:e.antialias}))}else{this.colorTextures=[...e.colorTextures.map(r=>r.source)];const t=this.colorTexture.source;this.resize(t.width,t.height,t._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(e.depthStencilTexture||this.stencil)&&(e.depthStencilTexture instanceof R||e.depthStencilTexture instanceof me?this.depthStencilTexture=e.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const e=this._size;return e[0]=this.pixelWidth,e[1]=this.pixelHeight,e}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(e){this.resize(e.width,e.height,e._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new me({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(e,t,r=this.resolution,i=!1){this.dirtyId++,this.colorTextures.forEach((s,o)=>{i&&o===0||s.source.resize(e,t,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(e,t,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(e=>{e.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};ma.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let fd=ma;const vi=class xa{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(e){this.texture.source.autoDensity=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}init(e){e={...xa.defaultOptions,...e},e.view&&(I(K,"ViewSystem.view has been renamed to ViewSystem.canvas"),e.canvas=e.view),this.screen=new Z(0,0,e.width,e.height),this.canvas=e.canvas||H.get().createCanvas(),this.antialias=!!e.antialias,this.texture=hd(this.canvas,e),this.renderTarget=new fd({colorTextures:[this.texture],depth:!!e.depth,isRoot:!0}),this.texture.source.transparent=e.backgroundAlpha<1,this.resolution=e.resolution}resize(e,t,r){this.texture.source.resize(e,t,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(e=!1){(typeof e=="boolean"?e:!!(e!=null&&e.removeView))&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};vi.extension={type:[P.WebGLSystem,P.WebGPUSystem,P.CanvasSystem],name:"view",priority:0};vi.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let dd=vi;le.add(_l,bl);let va=null;function pd(){va={loading:new oe({fontFamily:ue.light,fontSize:80,fill:"#00ff00",dropShadow:!0,dropShadowColor:"#777777",dropShadowBlur:4,dropShadowAngle:0,dropShadowDistance:0}),level:new oe({fontFamily:ue.normal,fontSize:32,fill:"#ffff00",align:"center"}),score:new oe({fontFamily:ue.normal,fontSize:38,fill:"#00ff00",align:"center"}),infoBonus:new oe({fontFamily:ue.normal,fontSize:24,fill:"#00ff00",align:"center"}),label:new oe({fontFamily:ue.light,fontSize:26,fill:"#ffff00",align:"center"}),infoPrice:new oe({fontFamily:ue.normal,fontSize:20,fill:"#ffffff",align:"center"}),message:new oe({fontFamily:ue.normal,fontSize:36,fill:"#ff0000",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:6,dropShadowAngle:0,dropShadowDistance:0}),mobileMessage:new oe({fontFamily:ue.normal,fontSize:32,fill:"#ff0000",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:4,dropShadowAngle:0,dropShadowDistance:0}),adResultMessage:new oe({fontFamily:ue.normal,fontSize:24,fill:"#000000",align:"center",dropShadow:!0,dropShadowColor:"#00ff00",dropShadowBlur:6,dropShadowAngle:0,dropShadowDistance:0,wordWrap:!0,wordWrapWidth:300}),adResultButton:new oe({fontFamily:ue.normal,fontSize:24,fill:"#ffffff",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:6,dropShadowAngle:0,dropShadowDistance:0})}}let ya;function md(n){return ya=n,n}function Vt(){return ya}class Vr{static setParamValue(e,t){if(e.setValueAtTime){const r=Vt().context;e.setValueAtTime(t,r.audioContext.currentTime)}else e.value=t;return t}}class gd extends se{constructor(){super(...arguments),this.speed=1,this.muted=!1,this.volume=1,this.paused=!1}refresh(){this.emit("refresh")}refreshPaused(){this.emit("refreshPaused")}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(e){console.warn("HTML Audio does not support filters")}get audioContext(){return console.warn("HTML Audio does not support audioContext"),null}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this.paused}destroy(){this.removeAllListeners()}}let xd=0;const Wr=class extends se{constructor(n){super(),this.id=xd++,this.init(n)}set(n,e){if(this[n]===void 0)throw new Error(`Property with name ${n} does not exist.`);switch(n){case"speed":this.speed=e;break;case"volume":this.volume=e;break;case"paused":this.paused=e;break;case"loop":this.loop=e;break;case"muted":this.muted=e;break}return this}get progress(){const{currentTime:n}=this._source;return n/this._duration}get paused(){return this._paused}set paused(n){this._paused=n,this.refreshPaused()}_onPlay(){this._playing=!0}_onPause(){this._playing=!1}init(n){this._playing=!1,this._duration=n.source.duration;const e=this._source=n.source.cloneNode(!1);e.src=n.parent.url,e.onplay=this._onPlay.bind(this),e.onpause=this._onPause.bind(this),n.context.on("refresh",this.refresh,this),n.context.on("refreshPaused",this.refreshPaused,this),this._media=n}_internalStop(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())}stop(){this._internalStop(),this._source&&this.emit("stop")}get speed(){return this._speed}set speed(n){this._speed=n,this.refresh()}get volume(){return this._volume}set volume(n){this._volume=n,this.refresh()}get loop(){return this._loop}set loop(n){this._loop=n,this.refresh()}get muted(){return this._muted}set muted(n){this._muted=n,this.refresh()}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(n){console.warn("HTML Audio does not support filters")}refresh(){const n=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;const t=n.volume*(n.muted?0:1),r=e.volume*(e.muted?0:1),i=this._volume*(this._muted?0:1);this._source.volume=i*t*r,this._source.playbackRate=this._speed*n.speed*e.speed}refreshPaused(){const n=this._media.context,e=this._media.parent,t=this._paused||e.paused||n.paused;t!==this._pausedReal&&(this._pausedReal=t,t?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",t))}play(n){const{start:e,end:t,speed:r,loop:i,volume:s,muted:o}=n;t&&console.assert(t>e,"End time is before start time"),this._speed=r,this._volume=s,this._loop=!!i,this._muted=o,this.refresh(),this.loop&&t!==null&&(console.warn('Looping not support when specifying an "end" time'),this.loop=!1),this._start=e,this._end=t||this._duration,this._start=Math.max(0,this._start-Wr.PADDING),this._end=Math.min(this._end+Wr.PADDING,this._duration),this._source.onloadedmetadata=()=>{this._source&&(this._source.currentTime=e,this._source.onloadedmetadata=null,this.emit("progress",e/this._duration,this._duration),be.shared.add(this._onUpdate,this))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")}_onUpdate(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()}_onComplete(){be.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)}destroy(){be.shared.remove(this._onUpdate,this),this.removeAllListeners();const n=this._source;n&&(n.onended=null,n.onplay=null,n.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)}toString(){return`[HTMLAudioInstance id=${this.id}]`}};let _a=Wr;_a.PADDING=.1;class vd extends se{init(e){this.parent=e,this._source=e.options.source||new Audio,e.url&&(this._source.src=e.url)}create(){return new _a(this)}get isPlayable(){return!!this._source&&this._source.readyState===4}get duration(){return this._source.duration}get context(){return this.parent.context}get filters(){return null}set filters(e){console.warn("HTML Audio does not support filters")}destroy(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)}get source(){return this._source}load(e){const t=this._source,r=this.parent;if(t.readyState===4){r.isLoaded=!0;const l=r.autoPlayStart();e&&setTimeout(()=>{e(null,r,l)},0);return}if(!r.url){e(new Error("sound.url or sound.source must be set"));return}t.src=r.url;const i=()=>{a(),r.isLoaded=!0;const l=r.autoPlayStart();e&&e(null,r,l)},s=()=>{a(),e&&e(new Error("Sound loading has been aborted"))},o=()=>{a();const l=`Failed to load audio element (code: ${t.error.code})`;e?e(new Error(l)):console.error(l)},a=()=>{t.removeEventListener("canplaythrough",i),t.removeEventListener("load",i),t.removeEventListener("abort",s),t.removeEventListener("error",o)};t.addEventListener("canplaythrough",i,!1),t.addEventListener("load",i,!1),t.addEventListener("abort",s,!1),t.addEventListener("error",o,!1),t.load()}}class yd{constructor(e,t){this.parent=e,Object.assign(this,t),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}play(e){return this.parent.play({complete:e,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})}destroy(){this.parent=null}}const Mn=["ogg","oga","opus","m4a","mp3","mpeg","wav","aiff","wma","mid","caf"],_d=["audio/mpeg","audio/ogg"],zn={};function bd(n){const e={m4a:"audio/mp4",oga:"audio/ogg",opus:'audio/ogg; codecs="opus"',caf:'audio/x-caf; codecs="opus"'},t=document.createElement("audio"),r={},i=/^no$/;Mn.forEach(s=>{const o=t.canPlayType(`audio/${s}`).replace(i,""),a=e[s]?t.canPlayType(e[s]).replace(i,""):"";r[s]=!!o||!!a}),Object.assign(zn,r)}bd();let Sd=0;class Cd extends se{constructor(e){super(),this.id=Sd++,this._media=null,this._paused=!1,this._muted=!1,this._elapsed=0,this.init(e)}set(e,t){if(this[e]===void 0)throw new Error(`Property with name ${e} does not exist.`);switch(e){case"speed":this.speed=t;break;case"volume":this.volume=t;break;case"muted":this.muted=t;break;case"loop":this.loop=t;break;case"paused":this.paused=t;break}return this}stop(){this._source&&(this._internalStop(),this.emit("stop"))}get speed(){return this._speed}set speed(e){this._speed=e,this.refresh(),this._update(!0)}get volume(){return this._volume}set volume(e){this._volume=e,this.refresh()}get muted(){return this._muted}set muted(e){this._muted=e,this.refresh()}get loop(){return this._loop}set loop(e){this._loop=e,this.refresh()}get filters(){return this._filters}set filters(e){var t;this._filters&&((t=this._filters)==null||t.filter(r=>r).forEach(r=>r.disconnect()),this._filters=null,this._source.connect(this._gain)),this._filters=e!=null&&e.length?e.slice(0):null,this.refresh()}refresh(){if(!this._source)return;const e=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;const r=e.volume*(e.muted?0:1),i=t.volume*(t.muted?0:1),s=this._volume*(this._muted?0:1);Vr.setParamValue(this._gain.gain,s*i*r),Vr.setParamValue(this._source.playbackRate,this._speed*t.speed*e.speed),this.applyFilters()}applyFilters(){var e;if((e=this._filters)!=null&&e.length){this._source.disconnect();let t=this._source;this._filters.forEach(r=>{t.connect(r.destination),t=r}),t.connect(this._gain)}}refreshPaused(){const e=this._media.context,t=this._media.parent,r=this._paused||t.paused||e.paused;r!==this._pausedReal&&(this._pausedReal=r,r?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",r))}play(e){const{start:t,end:r,speed:i,loop:s,volume:o,muted:a,filters:l}=e;r&&console.assert(r>t,"End time is before start time"),this._paused=!1;const{source:u,gain:c}=this._media.nodes.cloneBufferSource();this._source=u,this._gain=c,this._speed=i,this._volume=o,this._loop=!!s,this._muted=a,this._filters=l,this.refresh();const h=this._source.buffer.duration;this._duration=h,this._end=r,this._lastUpdate=this._now(),this._elapsed=t,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=r,this._source.loopStart=t,this._source.start(0,t)):r?this._source.start(0,t,r-t):this._source.start(0,t),this.emit("start"),this._update(!0),this.enableTicker(!0)}enableTicker(e){be.shared.remove(this._updateListener,this),e&&be.shared.add(this._updateListener,this)}get progress(){return this._progress}get paused(){return this._paused}set paused(e){this._paused=e,this.refreshPaused()}destroy(){var e;this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),(e=this._filters)==null||e.forEach(t=>t.disconnect()),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1}toString(){return`[WebAudioInstance id=${this.id}]`}_now(){return this._media.context.audioContext.currentTime}_updateListener(){this._update()}_update(e=!1){if(this._source){const t=this._now(),r=t-this._lastUpdate;if(r>0||e){const i=this._source.playbackRate.value;this._elapsed+=r*i,this._lastUpdate=t;const s=this._duration;let o;if(this._source.loopStart){const a=this._source.loopEnd-this._source.loopStart;o=(this._source.loopStart+this._elapsed%a)/s}else o=this._elapsed%s/s;this._progress=o,this.emit("progress",this._progress,s)}}}init(e){this._media=e,e.context.events.on("refresh",this.refresh,this),e.context.events.on("refreshPaused",this.refreshPaused,this)}_internalStop(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null}}_onComplete(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}}this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)}}class ba{constructor(e,t){this._output=t,this._input=e}get destination(){return this._input}get filters(){return this._filters}set filters(e){if(this._filters&&(this._filters.forEach(t=>{t&&t.disconnect()}),this._filters=null,this._input.connect(this._output)),e&&e.length){this._filters=e.slice(0),this._input.disconnect();let t=null;e.forEach(r=>{t===null?this._input.connect(r.destination):t.connect(r.destination),t=r}),t.connect(this._output)}}destroy(){this.filters=null,this._input=null,this._output=null}}const Sa=class extends ba{constructor(n){const e=n.audioContext,t=e.createBufferSource(),r=e.createGain(),i=e.createAnalyser();t.connect(i),i.connect(r),r.connect(n.destination),super(i,r),this.context=n,this.bufferSource=t,this.gain=r,this.analyser=i}get script(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(Sa.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script}destroy(){super.destroy(),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null}cloneBufferSource(){const n=this.bufferSource,e=this.context.audioContext.createBufferSource();e.buffer=n.buffer,Vr.setParamValue(e.playbackRate,n.playbackRate.value),e.loop=n.loop;const t=this.context.audioContext.createGain();return e.connect(t),t.connect(this.destination),{source:e,gain:t}}get bufferSize(){return this.script.bufferSize}};let Ca=Sa;Ca.BUFFER_SIZE=0;class wd{init(e){this.parent=e,this._nodes=new Ca(this.context),this._source=this._nodes.bufferSource,this.source=e.options.source}destroy(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null,this.source=null}create(){return new Cd(this)}get context(){return this.parent.context}get isPlayable(){return!!this._source&&!!this._source.buffer}get filters(){return this._nodes.filters}set filters(e){this._nodes.filters=e}get duration(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration}get buffer(){return this._source.buffer}set buffer(e){this._source.buffer=e}get nodes(){return this._nodes}load(e){this.source?this._decode(this.source,e):this.parent.url?this._loadUrl(e):e?e(new Error("sound.url or sound.source must be set")):console.error("sound.url or sound.source must be set")}async _loadUrl(e){const t=this.parent.url,r=await H.get().fetch(t);this._decode(await r.arrayBuffer(),e)}_decode(e,t){const r=(i,s)=>{if(i)t&&t(i);else{this.parent.isLoaded=!0,this.buffer=s;const o=this.parent.autoPlayStart();t&&t(null,this.parent,o)}};e instanceof AudioBuffer?r(null,e):this.parent.context.decode(e,r)}}const at=class{static from(n){let e={};typeof n=="string"?e.url=n:n instanceof ArrayBuffer||n instanceof AudioBuffer||n instanceof HTMLAudioElement?e.source=n:Array.isArray(n)?e.url=n:e=n,e={autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,...e},Object.freeze(e);const t=Vt().useLegacy?new vd:new wd;return new at(t,e)}constructor(n,e){this.media=n,this.options=e,this._instances=[],this._sprites={},this.media.init(this);const t=e.complete;this._autoPlayOptions=t?{complete:t}:null,this.isLoaded=!1,this._preloadQueue=null,this.isPlaying=!1,this.autoPlay=e.autoPlay,this.singleInstance=e.singleInstance,this.preload=e.preload||this.autoPlay,this.url=Array.isArray(e.url)?this.preferUrl(e.url):e.url,this.speed=e.speed,this.volume=e.volume,this.loop=e.loop,e.sprites&&this.addSprites(e.sprites),this.preload&&this._preload(e.loaded)}preferUrl(n){const[e]=n.map(t=>({url:t,ext:ie.extname(t).slice(1)})).filter(({ext:t})=>zn[t]).sort((t,r)=>Mn.indexOf(t.ext)-Mn.indexOf(r.ext));if(!e)throw new Error("No supported file type found");return e.url}get context(){return Vt().context}pause(){return this.isPlaying=!1,this.paused=!0,this}resume(){return this.isPlaying=this._instances.length>0,this.paused=!1,this}get paused(){return this._paused}set paused(n){this._paused=n,this.refreshPaused()}get speed(){return this._speed}set speed(n){this._speed=n,this.refresh()}get filters(){return this.media.filters}set filters(n){this.media.filters=n}addSprites(n,e){if(typeof n=="object"){const r={};for(const i in n)r[i]=this.addSprites(i,n[i]);return r}console.assert(!this._sprites[n],`Alias ${n} is already taken`);const t=new yd(this,e);return this._sprites[n]=t,t}destroy(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null}removeSprites(n){if(n){const e=this._sprites[n];e!==void 0&&(e.destroy(),delete this._sprites[n])}else for(const e in this._sprites)this.removeSprites(e);return this}get isPlayable(){return this.isLoaded&&this.media&&this.media.isPlayable}stop(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(let n=this._instances.length-1;n>=0;n--)this._instances[n].stop();return this}play(n,e){let t;if(typeof n=="string"?t={sprite:n,loop:this.loop,complete:e}:typeof n=="function"?(t={},t.complete=n):t=n,t={complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1,...t||{}},t.sprite){const i=t.sprite;console.assert(!!this._sprites[i],`Alias ${i} is not available`);const s=this._sprites[i];t.start=s.start+(t.start||0),t.end=s.end,t.speed=s.speed||1,t.loop=s.loop||t.loop,delete t.sprite}if(t.offset&&(t.start=t.offset),!this.isLoaded)return this._preloadQueue?new Promise(i=>{this._preloadQueue.push(()=>{i(this.play(t))})}):(this._preloadQueue=[],this.autoPlay=!0,this._autoPlayOptions=t,new Promise((i,s)=>{this._preload((o,a,l)=>{this._preloadQueue.forEach(u=>u()),this._preloadQueue=null,o?s(o):(t.loaded&&t.loaded(o,a,l),i(l))})}));(this.singleInstance||t.singleInstance)&&this._removeInstances();const r=this._createInstance();return this._instances.push(r),this.isPlaying=!0,r.once("end",()=>{t.complete&&t.complete(this),this._onComplete(r)}),r.once("stop",()=>{this._onComplete(r)}),r.play(t),r}refresh(){const n=this._instances.length;for(let e=0;e<n;e++)this._instances[e].refresh()}refreshPaused(){const n=this._instances.length;for(let e=0;e<n;e++)this._instances[e].refreshPaused()}get volume(){return this._volume}set volume(n){this._volume=n,this.refresh()}get muted(){return this._muted}set muted(n){this._muted=n,this.refresh()}get loop(){return this._loop}set loop(n){this._loop=n,this.refresh()}_preload(n){this.media.load(n)}get instances(){return this._instances}get sprites(){return this._sprites}get duration(){return this.media.duration}autoPlayStart(){let n;return this.autoPlay&&(n=this.play(this._autoPlayOptions)),n}_removeInstances(){for(let n=this._instances.length-1;n>=0;n--)this._poolInstance(this._instances[n]);this._instances.length=0}_onComplete(n){if(this._instances){const e=this._instances.indexOf(n);e>-1&&this._instances.splice(e,1),this.isPlaying=this._instances.length>0}this._poolInstance(n)}_createInstance(){if(at._pool.length>0){const n=at._pool.pop();return n.init(this.media),n}return this.media.create()}_poolInstance(n){n.destroy(),at._pool.indexOf(n)<0&&at._pool.push(n)}};let On=at;On._pool=[];class Wt extends ba{constructor(){const e=window,t=new Wt.AudioContext,r=t.createDynamicsCompressor(),i=t.createAnalyser();i.connect(r),r.connect(t.destination),super(i,r),this.autoPause=!0,this._ctx=t,this._offlineCtx=new Wt.OfflineAudioContext(1,2,e.OfflineAudioContext?Math.max(8e3,Math.min(96e3,t.sampleRate)):44100),this.compressor=r,this.analyser=i,this.events=new se,this.volume=1,this.speed=1,this.muted=!1,this.paused=!1,this._locked=t.state==="suspended"&&("ontouchstart"in globalThis||"onclick"in globalThis),this._locked&&(this._unlock(),this._unlock=this._unlock.bind(this),document.addEventListener("mousedown",this._unlock,!0),document.addEventListener("touchstart",this._unlock,!0),document.addEventListener("touchend",this._unlock,!0)),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),globalThis.addEventListener("focus",this.onFocus),globalThis.addEventListener("blur",this.onBlur)}onFocus(){if(!this.autoPause)return;const e=this._ctx.state;(e==="suspended"||e==="interrupted"||!this._locked)&&(this.paused=this._pausedOnBlur,this.refreshPaused())}onBlur(){this.autoPause&&(this._locked||(this._pausedOnBlur=this._paused,this.paused=!0,this.refreshPaused()))}_unlock(){this._locked&&(this.playEmptySound(),this._ctx.state==="running"&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._locked=!1))}playEmptySound(){const e=this._ctx.createBufferSource();e.buffer=this._ctx.createBuffer(1,1,22050),e.connect(this._ctx.destination),e.start(0,0,0),e.context.state==="suspended"&&e.context.resume()}static get AudioContext(){const e=window;return e.AudioContext||e.webkitAudioContext||null}static get OfflineAudioContext(){const e=window;return e.OfflineAudioContext||e.webkitOfflineAudioContext||null}destroy(){super.destroy();const e=this._ctx;typeof e.close<"u"&&e.close(),globalThis.removeEventListener("focus",this.onFocus),globalThis.removeEventListener("blur",this.onBlur),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null}get audioContext(){return this._ctx}get offlineContext(){return this._offlineCtx}set paused(e){e&&this._ctx.state==="running"?this._ctx.suspend():!e&&this._ctx.state==="suspended"&&this._ctx.resume(),this._paused=e}get paused(){return this._paused}refresh(){this.events.emit("refresh")}refreshPaused(){this.events.emit("refreshPaused")}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this._paused}decode(e,t){const r=s=>{t(new Error((s==null?void 0:s.message)||"Unable to decode file"))},i=this._offlineCtx.decodeAudioData(e,s=>{t(null,s)},r);i&&i.catch(r)}}class Ad{constructor(){this.init()}init(){return this.supported&&(this._webAudioContext=new Wt),this._htmlAudioContext=new gd,this._sounds={},this.useLegacy=!this.supported,this}get context(){return this._context}get filtersAll(){return this.useLegacy?[]:this._context.filters}set filtersAll(e){this.useLegacy||(this._context.filters=e)}get supported(){return Wt.AudioContext!==null}add(e,t){if(typeof e=="object"){const s={};for(const o in e){const a=this._getOptions(e[o],t);s[o]=this.add(o,a)}return s}if(console.assert(!this._sounds[e],`Sound with alias ${e} already exists.`),t instanceof On)return this._sounds[e]=t,t;const r=this._getOptions(t),i=On.from(r);return this._sounds[e]=i,i}_getOptions(e,t){let r;return typeof e=="string"?r={url:e}:Array.isArray(e)?r={url:e}:e instanceof ArrayBuffer||e instanceof AudioBuffer||e instanceof HTMLAudioElement?r={source:e}:r=e,r={...r,...t||{}},r}get useLegacy(){return this._useLegacy}set useLegacy(e){this._useLegacy=e,this._context=!e&&this.supported?this._webAudioContext:this._htmlAudioContext}get disableAutoPause(){return!this._webAudioContext.autoPause}set disableAutoPause(e){this._webAudioContext.autoPause=!e}remove(e){return this.exists(e,!0),this._sounds[e].destroy(),delete this._sounds[e],this}get volumeAll(){return this._context.volume}set volumeAll(e){this._context.volume=e,this._context.refresh()}get speedAll(){return this._context.speed}set speedAll(e){this._context.speed=e,this._context.refresh()}togglePauseAll(){return this._context.togglePause()}pauseAll(){return this._context.paused=!0,this._context.refreshPaused(),this}resumeAll(){return this._context.paused=!1,this._context.refreshPaused(),this}toggleMuteAll(){return this._context.toggleMute()}muteAll(){return this._context.muted=!0,this._context.refresh(),this}unmuteAll(){return this._context.muted=!1,this._context.refresh(),this}removeAll(){for(const e in this._sounds)this._sounds[e].destroy(),delete this._sounds[e];return this}stopAll(){for(const e in this._sounds)this._sounds[e].stop();return this}exists(e,t=!1){const r=!!this._sounds[e];return t&&console.assert(r,`No sound matching alias '${e}'.`),r}isPlaying(){for(const e in this._sounds)if(this._sounds[e].isPlaying)return!0;return!1}find(e){return this.exists(e,!0),this._sounds[e]}play(e,t){return this.find(e).play(t)}stop(e){return this.find(e).stop()}pause(e){return this.find(e).pause()}resume(e){return this.find(e).resume()}volume(e,t){const r=this.find(e);return t!==void 0&&(r.volume=t),r.volume}speed(e,t){const r=this.find(e);return t!==void 0&&(r.speed=t),r.speed}duration(e){return this.find(e).duration}close(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this}}const Es=n=>{var r;const e=n.src;let t=(r=n==null?void 0:n.alias)==null?void 0:r[0];return(!t||n.src===t)&&(t=ie.basename(e,ie.extname(e))),t},Td={extension:P.Asset,detection:{test:async()=>!0,add:async n=>[...n,...Mn.filter(e=>zn[e])],remove:async n=>n.filter(e=>n.includes(e))},loader:{name:"sound",extension:{type:[P.LoadParser],priority:Re.High},test(n){const e=ie.extname(n).slice(1);return!!zn[e]||_d.some(t=>n.startsWith(`data:${t}`))},async load(n,e){const t=await new Promise((r,i)=>On.from({...e.data,url:n,preload:!0,loaded(s,o){var a,l;s?i(s):r(o),(l=(a=e.data)==null?void 0:a.loaded)==null||l.call(a,s,o)}}));return Vt().add(Es(e),t),t},async unload(n,e){Vt().remove(Es(e))}}};le.add(Td);const wa=md(new Ad);let Us=!0,Xt=null,kt=0,Ke=null;function Aa(){Ke&&Ke.pause()}function yi(){if(Ke)return Ke.isPlaying?null:Ke.resume();Xt||(Xt=Object.values(mn)),Ta()}function Ta(){Us&&(Us=!1,kt=Math.floor(Math.random()*Xt.length)),Ke=wa.add("bgm",Xt[kt]),Ke.play({volume:.36}).then(n=>n.on("end",Pd))}function Pd(){kt++,kt===Xt.length&&(kt=0),wa.remove("bgm"),Ta()}const _i=new se,bi={screenResize:"screenResize",clearSnow:"clearSnow",needVoiceDoIt:"needVoiceDoIt",getClick:"getClick",setAutoCharge:"setAutoCharge",setTurboCharge:"setTurboCharge",requestAD:"requestAD",requestUpgradeClick:"requestUpgradeClick",requestUpgradeAuto:"requestUpgradeAuto",requestStartTurbo:"requestStartTurbo",responseStopTurbo:"responseStopTurbo",updateUILevel:"updateUILevel",updateUIPoints:"updateUIPoints",updateUIClickPanel:"updateUIClickPanel",updateUIAutoPanel:"updateUIAutoPanel",updateUITurboPanel:"updateUITurboPanel",updateUITurboTimeout:"updateUITurboTimeout",updateBuildingAuto:"updateBuildingAuto",updateBuildingTurbo:"updateBuildingTurbo",updateTowerTurbo:"updateTowerTurbo",updateTowerAuto:"updateTowerAuto",updateTowerClick:"updateTowerClick",spyBotGetDamage:"spyBotGetDamage",showBonusUI:"showBonusUI",drawCharge:"drawCharge",drawSkyCharge:"drawSkyCharge",timeAcceleration:"timeAcceleration",setAdButtonAvailable:"setAdButtonAvailable",getADBonusUI:"getADBonusUI"};function Fd(n){_i.emit(bi.screenResize,n)}function Id(){_i.emit(bi.clearSnow)}const de=new Eo,Md={background:0,antialias:!0,resolution:2,resizeTo:window};Promise.all([de.init(Md)]).then(zd);function zd(){de.ticker.add(n=>Ud(n)),document.body.append(de.canvas),de.canvas.oncontextmenu=n=>n.preventDefault(),Si()}let Pa=[];const xe={};function Si(){xe.width=de.screen.width,xe.height=de.screen.height,xe.centerX=de.screen.width/2,xe.centerY=de.screen.height/2,xe.minSize=de.screen.width>de.screen.height?de.screen.height:de.screen.width,xe.offsetX=(xe.width-xe.minSize)/2,xe.offsetY=(xe.height-xe.minSize)/2,Fd(xe)}function Fa(){return xe}function Xr(n){de.stage.addChild(n)}function Od(n){de.stage.removeChild(n)}let Rd=window.matchMedia("(orientation: portrait)");Rd.addEventListener("change",()=>setTimeout(Si,0));window.addEventListener("resize",()=>setTimeout(Si,0));window.addEventListener("focus",yi);window.addEventListener("focus",Id);window.addEventListener("blur",Aa);"hidden"in document&&document.addEventListener("visibilitychange",Ed);function Ed(n){n?Aa():yi()}function Ud(n){Pa.forEach(e=>e.tick(n))}function kd(n){"tick"in n?Pa.push(n):console.warn("TRY TO ADD ELEMENT IN TICKER WITHOUT .tick() METHOD:",n)}class Bd extends ne{constructor(){super(),this.text=new cd({text:"0 %",style:va.loading}),this.text.anchor.set(.5,1),this.text.position.y=10,this.addChild(this.text),this.screenResize(Fa()),Xr(this)}delete(){this.removeAllListeners(),Od(this),this.destroy()}screenResize(e){this.position.x=e.centerX,this.position.y=e.centerY}update(e){const t=Math.round(e);this.text.text=t+" %"}}const Yt={sprites:"./sprites/",sounds:"./sounds/",music:"./music/",voices:"./voices/",fonts:"./fonts/"},ye={bg:"bg_1920x1080px.webp",z1_1:"z1_382x638px_5x3_15frames-0.json"},Ld=Object.keys(ye).length;for(let n in ye)ye[n]=Yt.sprites+ye[n];const Ze={upgrade:"se_upgrade.mp3"},Dd=Object.keys(Ze).length;for(let n in Ze)Ze[n]=Yt.sounds+Ze[n];const Qe={en_start_first:"voice_en_start_first.mp3",ru_start_first:"voice_ru_start_first.mp3"},Gd=Object.keys(Qe).length;for(let n in Qe)Qe[n]=Yt.voices+Qe[n];const mn={bgm0:"bgm_0.mp3"};for(let n in mn)mn[n]=Yt.music+mn[n];const ue={light:"Handjet-Light.ttf",normal:"Handjet-Regular.ttf"};for(let n in ue)ue[n]=Yt.fonts+ue[n];function Nd(n){const e=Ld+Dd+Gd;let t=0,r=100/e;const i=new Bd,s=new Map;function o(l,u){for(let c in ye[l].animations)ye[l].animations[c].forEach((h,d)=>{if(h)return;const f=ve.cache.get(u[c][d]);ye[l].animations[c][d]=f})}const a=()=>{t++,i.update(r*t),t===e&&(s.forEach((l,u)=>o(u,l)),s.clear(),i.delete(),n())};for(let l in ye)ve.add({alias:l,src:ye[l]}),ve.load(l).then(u=>{"data"in u&&"related_multi_packs"in u.data.meta&&"animations"in u.data&&s.set(l,u.data.animations),ye[l]=u,a()});for(let l in Ze)ve.add({alias:l,src:Ze[l]}),ve.load(l).then(u=>{Ze[l]=u,a()});for(let l in Qe)ve.add({alias:l,src:Qe[l]}),ve.load(l).then(u=>{Qe[l]=u,a()})}var G=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,N=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,$d=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,Vd=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,Wd=Object.defineProperty,Xd=(n,e,t)=>e in n?Wd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ia=(n,e,t)=>(Xd(n,typeof e!="symbol"?e+"":e,t),t);const Ma=class za extends B{constructor(e){e={...za.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Vd,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:$d,name:"adjustment-filter"});super({gpuProgram:t,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:e.gamma,type:"f32"},uContrast:{value:e.contrast,type:"f32"},uSaturation:{value:e.saturation,type:"f32"},uBrightness:{value:e.brightness,type:"f32"},uColor:{value:[e.red,e.green,e.blue,e.alpha],type:"vec4<f32>"}}}}),Ia(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(e){this.uniforms.uGamma=e}get contrast(){return this.uniforms.uContrast}set contrast(e){this.uniforms.uContrast=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}get brightness(){return this.uniforms.uBrightness}set brightness(e){this.uniforms.uBrightness=e}get red(){return this.uniforms.uColor[0]}set red(e){this.uniforms.uColor[0]=e}get green(){return this.uniforms.uColor[1]}set green(e){this.uniforms.uColor[1]=e}get blue(){return this.uniforms.uColor[2]}set blue(e){this.uniforms.uColor[2]=e}get alpha(){return this.uniforms.uColor[3]}set alpha(e){this.uniforms.uColor[3]=e}};Ia(Ma,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});let Hd=Ma;var Yd=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,jd=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,qd=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,Kd=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,Zd=Object.defineProperty,Qd=(n,e,t)=>e in n?Zd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,He=(n,e,t)=>(Qd(n,typeof e!="symbol"?e+"":e,t),t);const Oa=class Ra extends B{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t))&&(I("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.clamp=e[2])),t={...Ra.DEFAULT_OPTIONS,...t};const r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:t!=null&&t.clamp?Kd:jd,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:t!=null&&t.clamp?qd:Yd,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),He(this,"uniforms"),He(this,"_pixelSize",{x:0,y:0}),He(this,"_clamp"),He(this,"_kernels",[]),He(this,"_blur"),He(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=t.pixelSize??{x:1,y:1},Array.isArray(t.strength)?this.kernels=t.strength:typeof t.strength=="number"&&(this._blur=t.strength,this.quality=t.quality??3),this._clamp=!!t.clamp}apply(e,t,r,i){const s=this.pixelSizeX/t.source.width,o=this.pixelSizeY/t.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,t,r,i);else{const l=_e.getSameSizeTexture(t);let u=t,c=l,h;const d=this._quality-1;for(let f=0;f<d;f++)a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,u,c,!0),h=u,u=c,c=h;a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,u,r,i),_e.returnTexture(l)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e=="number"){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,t)=>e+t+.5,0))}_generateKernels(){const e=this._blur,t=this._quality,r=[e];if(e>0){let i=e;const s=e/t;for(let o=1;o<t;o++)i-=s,r.push(i)}this._kernels=r,this._updatePadding()}};He(Oa,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Ea=Oa;var Jd=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,ep=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,tp=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,np=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,rp=Object.defineProperty,ip=(n,e,t)=>e in n?rp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ua=(n,e,t)=>(ip(n,typeof e!="symbol"?e+"":e,t),t);const ka=class Ba extends B{constructor(e){e={...Ba.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:np,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:tp,name:"extract-brightness-filter"});super({gpuProgram:t,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:e.threshold,type:"f32"}}}}),Ua(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(e){this.uniforms.uThreshold=e}};Ua(ka,"DEFAULT_OPTIONS",{threshold:.5});let sp=ka;var op=Object.defineProperty,ap=(n,e,t)=>e in n?op(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,lt=(n,e,t)=>(ap(n,typeof e!="symbol"?e+"":e,t),t);const lp=class La extends B{constructor(e){e={...La.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:ep,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Jd,name:"advanced-bloom-filter"});super({gpuProgram:t,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:e.bloomScale,type:"f32"},uBrightness:{value:e.brightness,type:"f32"}},uMapTexture:R.WHITE}}),lt(this,"uniforms"),lt(this,"bloomScale",1),lt(this,"brightness",1),lt(this,"_extractFilter"),lt(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new sp({threshold:e.threshold}),this._blurFilter=new Ea({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),Object.assign(this,e)}apply(e,t,r,i){const s=_e.getSameSizeTexture(t);this._extractFilter.apply(e,t,s,!0);const o=_e.getSameSizeTexture(t);this._blurFilter.apply(e,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,e.applyFilter(this,t,r,i),_e.returnTexture(o),_e.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}};lt(lp,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var up=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,cp=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,hp=Object.defineProperty,fp=(n,e,t)=>e in n?hp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Hr=(n,e,t)=>(fp(n,typeof e!="symbol"?e+"":e,t),t);const dp=class Da extends B{constructor(...e){let t=e[0]??{};typeof t=="number"&&(I("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),t={size:t});const r=(t==null?void 0:t.color)&&t.replaceColor!==!1;t={...Da.DEFAULT_OPTIONS,...t};const i=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:cp,entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:up,name:"ascii-filter"});super({gpuProgram:i,glProgram:s,resources:{asciiUniforms:{uSize:{value:t.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Hr(this,"uniforms"),Hr(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new L,this.color=t.color??16777215}get size(){return this.uniforms.uSize}set size(e){this.uniforms.uSize=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(e){this.uniforms.uReplaceColor=e?1:0}};Hr(dp,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var pp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,mp=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,gp=Object.defineProperty,xp=(n,e,t)=>e in n?gp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ut=(n,e,t)=>(xp(n,typeof e!="symbol"?e+"":e,t),t);const vp=class Ga extends B{constructor(e){e={...Ga.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:mp,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:pp,name:"bevel-filter"});super({gpuProgram:t,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:e.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:e.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),ut(this,"uniforms"),ut(this,"_thickness"),ut(this,"_rotation"),ut(this,"_lightColor"),ut(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new L,this._shadowColor=new L,this.lightColor=e.lightColor??16777215,this.shadowColor=e.shadowColor??0,Object.assign(this,e)}get rotation(){return this._rotation/mt}set rotation(e){this._rotation=e*mt,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(e){this._lightColor.setValue(e);const[t,r,i]=this._lightColor.toArray();this.uniforms.uLightColor[0]=t,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=i}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(e){this.uniforms.uLightAlpha=e}get shadowColor(){return this._shadowColor.value}set shadowColor(e){this._shadowColor.setValue(e);const[t,r,i]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=t,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=i}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(e){this.uniforms.uShadowAlpha=e}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};ut(vp,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var yp=Object.defineProperty,_p=(n,e,t)=>e in n?yp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,gn=(n,e,t)=>(_p(n,typeof e!="symbol"?e+"":e,t),t);const bp=class Na extends ed{constructor(...e){let t=e[0]??{};if(typeof t=="number"||Array.isArray(t)||"x"in t&&"y"in t){I("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=t;Array.isArray(r)&&(r={x:r[0],y:r[1]}),t={strength:r},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]),e[3]!==void 0&&(t.kernelSize=e[3])}t={...Na.DEFAULT_OPTIONS,...t},super(),gn(this,"_blurXFilter"),gn(this,"_blurYFilter"),gn(this,"_strength"),this._strength={x:2,y:2},t.strength&&(typeof t.strength=="number"?(this._strength.x=t.strength,this._strength.y=t.strength):(this._strength.x=t.strength.x,this._strength.y=t.strength.y)),this._blurXFilter=new Rs({...t,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Rs({...t,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,t)}apply(e,t,r,i){const s=_e.getSameSizeTexture(t);e.applyFilter(this,t,r,i),this._blurXFilter.apply(e,t,s,!0),this._blurYFilter.apply(e,s,r,!1),_e.returnTexture(s)}get strength(){return this._strength}set strength(e){this._strength=typeof e=="number"?{x:e,y:e}:e,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(e){this.strength.x=e,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(e){this.strength.y=e,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return I("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(e){I("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=e}get blurX(){return I("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(e){I("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=e}get blurY(){return I("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(e){I("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=e}};gn(bp,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Sp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,Cp=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,wp=Object.defineProperty,Ap=(n,e,t)=>e in n?wp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,$a=(n,e,t)=>(Ap(n,typeof e!="symbol"?e+"":e,t),t);const Tp=class Va extends B{constructor(e){e={...Va.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Cp,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Sp,name:"bulge-pinch-filter"});super({gpuProgram:t,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:e.center,type:"vec2<f32>"},uRadius:{value:e.radius,type:"f32"},uStrength:{value:e.strength,type:"f32"}}}}),$a(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,r,i)}get center(){return this.uniforms.uCenter}set center(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}};$a(Tp,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Pp=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,Fp=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,ks=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,rt=rt||{};rt.stringify=function(){var n={"visit_linear-gradient":function(e){return n.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return n.visit_gradient(e)},"visit_radial-gradient":function(e){return n.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return n.visit_gradient(e)},visit_gradient:function(e){var t=n.visit(e.orientation);return t&&(t+=", "),e.type+"("+t+n.visit(e.colorStops)+")"},visit_shape:function(e){var t=e.value,r=n.visit(e.at),i=n.visit(e.style);return i&&(t+=" "+i),r&&(t+=" at "+r),t},"visit_default-radial":function(e){var t="",r=n.visit(e.at);return r&&(t+=r),t},"visit_extent-keyword":function(e){var t=e.value,r=n.visit(e.at);return r&&(t+=" at "+r),t},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return n.visit(e.value.x)+" "+n.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return n.visit_color(e.value,e)},visit_hex:function(e){return n.visit_color("#"+e.value,e)},visit_rgb:function(e){return n.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return n.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,t){var r=e,i=n.visit(t.length);return i&&(r+=" "+i),r},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var t="",r=e.length;return e.forEach(function(i,s){t+=n.visit(i),s<r-1&&(t+=", ")}),t},visit:function(e){if(!e)return"";var t="";if(e instanceof Array)return n.visit_array(e,t);if(e.type){var r=n["visit_"+e.type];if(r)return r(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return n.visit(e)}}();var rt=rt||{};rt.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function t(C){var $=new Error(e+": "+C);throw $.source=e,$}function r(){var C=i();return e.length>0&&t("Invalid input not EOF"),C}function i(){return x(s)}function s(){return o("linear-gradient",n.linearGradient,l)||o("repeating-linear-gradient",n.repeatingLinearGradient,l)||o("radial-gradient",n.radialGradient,h)||o("repeating-radial-gradient",n.repeatingRadialGradient,h)}function o(C,$,O){return a($,function(re){var Ee=O();return Ee&&(fe(n.comma)||t("Missing comma before color stops")),{type:C,orientation:Ee,colorStops:x(_)}})}function a(C,$){var O=fe(C);if(O){fe(n.startCall)||t("Missing (");var re=$(O);return fe(n.endCall)||t("Missing )"),re}}function l(){return u()||c()}function u(){return X("directional",n.sideOrCorner,1)}function c(){return X("angular",n.angleValue,1)}function h(){var C,$=d(),O;return $&&(C=[],C.push($),O=e,fe(n.comma)&&($=d(),$?C.push($):e=O)),C}function d(){var C=f()||p();if(C)C.at=m();else{var $=g();if($){C=$;var O=m();O&&(C.at=O)}else{var re=v();re&&(C={type:"default-radial",at:re})}}return C}function f(){var C=X("shape",/^(circle)/i,0);return C&&(C.style=W()||g()),C}function p(){var C=X("shape",/^(ellipse)/i,0);return C&&(C.style=A()||g()),C}function g(){return X("extent-keyword",n.extentKeywords,1)}function m(){if(X("position",/^at/,0)){var C=v();return C||t("Missing positioning value"),C}}function v(){var C=y();if(C.x||C.y)return{type:"position",value:C}}function y(){return{x:A(),y:A()}}function x(C){var $=C(),O=[];if($)for(O.push($);fe(n.comma);)$=C(),$?O.push($):t("One extra comma");return O}function _(){var C=w();return C||t("Expected color definition"),C.length=A(),C}function w(){return S()||k()||M()||b()}function b(){return X("literal",n.literalColor,0)}function S(){return X("hex",n.hexColor,1)}function M(){return a(n.rgbColor,function(){return{type:"rgb",value:x(T)}})}function k(){return a(n.rgbaColor,function(){return{type:"rgba",value:x(T)}})}function T(){return fe(n.number)[1]}function A(){return X("%",n.percentageValue,1)||V()||W()}function V(){return X("position-keyword",n.positionKeywords,1)}function W(){return X("px",n.pixelValue,1)||X("em",n.emValue,1)}function X(C,$,O){var re=fe($);if(re)return{type:C,value:re[O]}}function fe(C){var $,O;return O=/^[\n\r\t\s]+/.exec(e),O&&z(O[0].length),$=C.exec(e),$&&z($[0].length),$}function z(C){e=e.substr(C)}return function(C){return e=C.toString(),r()}}();var Ip=rt.parse;rt.stringify;function Mp(n){const e=Ip(Lp(n));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const t=e[0],r=zp(t.type),i=Op(t.colorStops),s=kp(t.orientation);return{type:r,stops:i,angle:s}}function zp(n){const e={"linear-gradient":0,"radial-gradient":1};if(!(n in e))throw new Error(`Unsupported gradient type "${n}"`);return e[n]}function Op(n){const e=Ep(n),t=[],r=new L;for(let i=0;i<n.length;i++){const s=Rp(n[i]),o=r.setValue(s).toArray();t.push({offset:e[i],color:o.slice(0,3),alpha:o[3]})}return t}function Rp(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function Ep(n){const e=[];for(let s=0;s<n.length;s++){const o=n[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),e.push(a)}const r=s=>{for(let o=s;o<e.length;o++)if(e[o]!==-1)return{indexDelta:o-s,offset:e[o]};return{indexDelta:e.length-1-s,offset:1}};let i=0;for(let s=0;s<e.length;s++){const o=e[s];if(o!==-1)i=o;else if(s===0)e[s]=0;else if(s+1===e.length)e[s]=1;else{const a=r(s),u=(a.offset-i)/(1+a.indexDelta);for(let c=0;c<=a.indexDelta;c++)e[s+c]=i+(c+1)*u;s+=a.indexDelta,i=e[s]}}return e.map(Up)}function Up(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function kp(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return Bp(n.value)}return 0}function Bp(n){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in e))throw new Error(`Unsupported directional value "${n}"`);return e[n]}function Lp(n){let e=n.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var Dp=Object.defineProperty,Gp=(n,e,t)=>e in n?Dp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Je=(n,e,t)=>(Gp(n,typeof e!="symbol"?e+"":e,t),t);const yr=90;function Np(n){return[...n].sort((e,t)=>e.offset-t.offset)}const Ht=class xn extends B{constructor(e){if(e&&"css"in e?e={...Mp(e.css||""),alpha:e.alpha??xn.defaults.alpha,maxColors:e.maxColors??xn.defaults.maxColors}:e={...xn.defaults,...e},!e.stops||e.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const t=E.from({vertex:{source:ks,entryPoint:"mainVertex"},fragment:{source:ks,entryPoint:"mainFragment"}}),r=U.from({vertex:Fp,fragment:Pp,name:"color-gradient-filter"}),i=32;super({gpuProgram:t,glProgram:r,resources:{baseUniforms:{uOptions:{value:[e.type,e.angle??yr,e.alpha,e.replace?1:0],type:"vec4<f32>"},uCounts:{value:[e.stops.length,e.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(i*3),type:"vec3<f32>",size:i},uStops:{value:new Float32Array(i*4),type:"vec4<f32>",size:i}}}}),Je(this,"baseUniforms"),Je(this,"stopsUniforms"),Je(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,e)}get stops(){return this._stops}set stops(e){const t=Np(e),r=new L;let i,s,o;for(let a=0;a<t.length;a++){r.setValue(t[a].color);const l=a*3;[i,s,o]=r.toArray(),this.stopsUniforms.uColors[l]=i,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=t[a].offset,this.stopsUniforms.uStops[a*4+1]=t[a].alpha}this.baseUniforms.uCounts[0]=t.length,this._stops=t}get type(){return this.baseUniforms.uOptions[0]}set type(e){this.baseUniforms.uOptions[0]=e}get angle(){return this.baseUniforms.uOptions[1]+yr}set angle(e){this.baseUniforms.uOptions[1]=e-yr}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(e){this.baseUniforms.uOptions[2]=e}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(e){this.baseUniforms.uCounts[1]=e}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(e){this.baseUniforms.uOptions[3]=e?1:0}};Je(Ht,"LINEAR",0);Je(Ht,"RADIAL",1);Je(Ht,"CONIC",2);Je(Ht,"defaults",{type:Ht.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var $p=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,Vp=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,Wp=Object.defineProperty,Xp=(n,e,t)=>e in n?Wp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ze=(n,e,t)=>(Xp(n,typeof e!="symbol"?e+"":e,t),t);const Hp=class Wa extends B{constructor(...e){let t=e[0]??{};if((t instanceof R||t instanceof me)&&(I("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),t={colorMap:t},e[1]!==void 0&&(t.nearest=e[1]),e[2]!==void 0&&(t.mix=e[2])),t={...Wa.DEFAULT_OPTIONS,...t},!t.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Vp,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:$p,name:"color-map-filter"});super({gpuProgram:r,glProgram:i,resources:{colorMapUniforms:{uMix:{value:t.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:t.colorMap.source,uMapSampler:t.colorMap.source.style}}),ze(this,"uniforms"),ze(this,"_size",0),ze(this,"_sliceSize",0),ze(this,"_slicePixelSize",0),ze(this,"_sliceInnerSize",0),ze(this,"_nearest",!1),ze(this,"_scaleMode","linear"),ze(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,t)}get mix(){return this.uniforms.uMix}set mix(e){this.uniforms.uMix=e}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){if(!e||e===this.colorMap)return;const t=e instanceof R?e.source:e;t.style.scaleMode=this._scaleMode,t.autoGenerateMipmaps=!1,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=t,this._colorMap=e}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?"nearest":"linear";const t=this._colorMap;t&&t.source&&(t.source.scaleMode=this._scaleMode,t.source.autoGenerateMipmaps=!1,t.source.style.update(),t.source.update())}updateColorMap(){const e=this._colorMap;e!=null&&e.source&&(e.source.update(),this.colorMap=e)}destroy(){var e;(e=this._colorMap)==null||e.destroy(),super.destroy()}};ze(Hp,"DEFAULT_OPTIONS",{colorMap:R.WHITE,nearest:!1,mix:1});var Yp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,jp=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,qp=Object.defineProperty,Kp=(n,e,t)=>e in n?qp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Yr=(n,e,t)=>(Kp(n,typeof e!="symbol"?e+"":e,t),t);const Zp=class Xa extends B{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(I("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),t={color:t},e[1]!==void 0&&(t.alpha=e[1])),t={...Xa.DEFAULT_OPTIONS,...t};const r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:jp,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:Yp,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"}}}}),Yr(this,"uniforms"),Yr(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new L,this.color=t.color??0}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};Yr(Zp,"DEFAULT_OPTIONS",{color:0,alpha:1});var Qp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,Jp=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,em=Object.defineProperty,tm=(n,e,t)=>e in n?em(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,vn=(n,e,t)=>(tm(n,typeof e!="symbol"?e+"":e,t),t);const nm=class Ha extends B{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(I("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),t={originalColor:t},e[1]!==void 0&&(t.targetColor=e[1]),e[2]!==void 0&&(t.tolerance=e[2])),t={...Ha.DEFAULT_OPTIONS,...t};const r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Jp,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:Qp,name:"color-replace-filter"});super({gpuProgram:r,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:t.tolerance,type:"f32"}}}}),vn(this,"uniforms"),vn(this,"_originalColor"),vn(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new L,this._targetColor=new L,this.originalColor=t.originalColor??16711680,this.targetColor=t.targetColor??0,Object.assign(this,t)}get originalColor(){return this._originalColor.value}set originalColor(e){this._originalColor.setValue(e);const[t,r,i]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=t,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=i}get targetColor(){return this._targetColor.value}set targetColor(e){this._targetColor.setValue(e);const[t,r,i]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=t,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=i}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set newColor(e){I("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=e}get newColor(){return I("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(e){I("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return I("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};vn(nm,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var rm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,im=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,sm=Object.defineProperty,om=(n,e,t)=>e in n?sm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ya=(n,e,t)=>(om(n,typeof e!="symbol"?e+"":e,t),t);const am=class ja extends B{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(I("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),t={matrix:t},e[1]!==void 0&&(t.width=e[1]),e[2]!==void 0&&(t.height=e[2])),t={...ja.DEFAULT_OPTIONS,...t};const r=t.width??200,i=t.height??200,s=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:im,entryPoint:"mainFragment"}}),o=U.from({vertex:G,fragment:rm,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:t.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/i},type:"vec2<f32>"}}}}),Ya(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(e){e.forEach((t,r)=>{this.uniforms.uMatrix[r]=t})}get width(){return 1/this.uniforms.uTexelSize.x}set width(e){this.uniforms.uTexelSize.x=1/e}get height(){return 1/this.uniforms.uTexelSize.y}set height(e){this.uniforms.uTexelSize.y=1/e}};Ya(am,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var lm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,um=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,cm=Object.defineProperty,hm=(n,e,t)=>e in n?cm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,yn=(n,e,t)=>(hm(n,typeof e!="symbol"?e+"":e,t),t);const fm=class qa extends B{constructor(e){e={...qa.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:um,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:lm,name:"crt-filter"});super({gpuProgram:t,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),yn(this,"uniforms"),yn(this,"seed"),yn(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=e?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}};yn(fm,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var dm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,pm=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,mm=Object.defineProperty,gm=(n,e,t)=>e in n?mm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,xm=(n,e,t)=>(gm(n,e+"",t),t);const vm=class Ka extends B{constructor(...e){let t=e[0]??{};typeof t=="number"&&(I("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),t={scale:t},e[1]!==void 0&&(t.angle=e[1]),e[2]!==void 0&&(t.grayscale=e[2])),t={...Ka.DEFAULT_OPTIONS,...t};const r={uScale:{value:t.scale,type:"f32"},uAngle:{value:t.angle,type:"f32"},uGrayScale:{value:t.grayscale?1:0,type:"f32"}},i=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:pm,entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:dm,name:"dot-filter"});super({gpuProgram:i,glProgram:s,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(e){this.resources.dotUniforms.uniforms.uScale=e}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(e){this.resources.dotUniforms.uniforms.uAngle=e}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(e){this.resources.dotUniforms.uniforms.uGrayScale=e?1:0}};xm(vm,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var ym=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,_m=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,bm=Object.defineProperty,Sm=(n,e,t)=>e in n?bm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ct=(n,e,t)=>(Sm(n,typeof e!="symbol"?e+"":e,t),t);const Cm=class Za extends B{constructor(e){e={...Za.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:_m,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:ym,name:"drop-shadow-filter"});super({gpuProgram:t,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:e.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},resolution:e.resolution}),ct(this,"uniforms"),ct(this,"shadowOnly",!1),ct(this,"_color"),ct(this,"_blurFilter"),ct(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new L,this.color=e.color??0,this._blurFilter=new Ea({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),this._basePass=new B({gpuProgram:E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:U.from({vertex:G,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,e)}apply(e,t,r,i){const s=_e.getSameSizeTexture(t);e.applyFilter(this,t,s,!0),this._blurFilter.apply(e,s,r,i),this.shadowOnly||e.applyFilter(this._basePass,t,r,!1),_e.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){const e=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=e+this.blur*2+this.quality*4}};ct(Cm,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var wm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,Am=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,Tm=Object.defineProperty,Pm=(n,e,t)=>e in n?Tm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Fe=(n,e,t)=>(Pm(n,typeof e!="symbol"?e+"":e,t),t);const Fm=class Qa extends B{constructor(e){e={...Qa.defaults,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Am,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:wm,name:"glitch-filter"}),i=document.createElement("canvas");i.width=4,i.height=e.sampleSize??512;const s=new R({source:new nt({resource:i})});super({gpuProgram:t,glProgram:r,resources:{glitchUniforms:{uSeed:{value:(e==null?void 0:e.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(e==null?void 0:e.fillMode)??0,type:"f32"},uOffset:{value:(e==null?void 0:e.offset)??100,type:"f32"},uDirection:{value:(e==null?void 0:e.direction)??0,type:"f32"},uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),Fe(this,"uniforms"),Fe(this,"average",!1),Fe(this,"minSize",8),Fe(this,"sampleSize",512),Fe(this,"_canvas"),Fe(this,"texture"),Fe(this,"_slices",0),Fe(this,"_sizes",new Float32Array(1)),Fe(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=i,this.texture=s,Object.assign(this,e)}apply(e,t,r,i){const{width:s,height:o}=t.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,e.applyFilter(this,t,r,i)}_randomizeSizes(){const e=this._sizes,t=this._slices-1,r=this.sampleSize,i=Math.min(this.minSize/r,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<t;a++){const l=o/(s-a),u=Math.max(l*(1-Math.random()*.6),i);e[a]=u,o-=u}e[t]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<t;a++){const l=Math.max(o*s*Math.random(),i);e[a]=l,s-=l}e[t]=s}this.shuffle()}shuffle(){const e=this._sizes,t=this._slices-1;for(let r=t;r>0;r--){const i=Math.random()*r>>0,s=e[r];e[r]=e[i],e[i]=s}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,t=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,e);let i,s=0;for(let o=0;o<this._slices;o++){i=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*e,l=i>0?i:0,u=i<0?-i:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,s>>0,e,a+1>>0),s+=a}t.source.update()}set sizes(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._sizes[r]=e[r]}get sizes(){return this._sizes}set offsets(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._offsets[r]=e[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this._sizes=new Float32Array(e),this._offsets=new Float32Array(e),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}get fillMode(){return this.uniforms.uFillMode}set fillMode(e){this.uniforms.uFillMode=e}get direction(){return this.uniforms.uDirection/mt}set direction(e){this.uniforms.uDirection=e*mt}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}destroy(){var e;(e=this.texture)==null||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Fe(Fm,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var Im=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,Mm=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,zm=Object.defineProperty,Om=(n,e,t)=>e in n?zm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,jr=(n,e,t)=>(Om(n,typeof e!="symbol"?e+"":e,t),t);const Rm=class Ja extends B{constructor(e){e={...Ja.DEFAULT_OPTIONS,...e};const t=e.distance??10,r=e.quality??.1,i=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Mm,entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:Im.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/t).toFixed(7)}`).replace(/__DIST__/gi,`${t.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:i,glProgram:s,resources:{glowUniforms:{uDistance:{value:t,type:"f32"},uStrength:{value:[e.innerStrength,e.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:(e==null?void 0:e.knockout)??!1?1:0,type:"f32"}}},padding:t}),jr(this,"uniforms"),jr(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new L,this.color=e.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};jr(Rm,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Em=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,Um=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,km=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,Bm=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,Lm=Object.defineProperty,Dm=(n,e,t)=>e in n?Lm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ht=(n,e,t)=>(Dm(n,typeof e!="symbol"?e+"":e,t),t);const Gm=class el extends B{constructor(e){e={...el.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Um.replace("${PERLIN}",Bm),entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Em.replace("${PERLIN}",km),name:"god-ray-filter"});super({gpuProgram:t,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:e.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ht(this,"uniforms"),ht(this,"time",0),ht(this,"_angleLight",[0,0]),ht(this,"_angle",0),ht(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){const s=t.frame.width,o=t.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get angle(){return this._angle}set angle(e){this._angle=e;const t=e*mt;this._angleLight[0]=Math.cos(t),this._angleLight[1]=Math.sin(t)}get parallel(){return this.uniforms.uParallel>.5}set parallel(e){this.uniforms.uParallel=e?1:0}get center(){return this._center}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._center=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get gain(){return this.uniforms.uRay[0]}set gain(e){this.uniforms.uRay[0]=e}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(e){this.uniforms.uRay[1]=e}get alpha(){return this.uniforms.uRay[2]}set alpha(e){this.uniforms.uRay[2]=e}};ht(Gm,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var Nm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,$m=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,Vm=Object.defineProperty,Wm=(n,e,t)=>e in n?Vm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,qr=(n,e,t)=>(Wm(n,typeof e!="symbol"?e+"":e,t),t);const Xm=class tl extends B{constructor(e){e={...tl.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:$m,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Nm,name:"hsl-adjustment-filter"});super({gpuProgram:t,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:e.colorize?1:0,type:"f32"},uAlpha:{value:e.alpha,type:"f32"}}}}),qr(this,"uniforms"),qr(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,e)}get hue(){return this._hue}set hue(e){this._hue=e,this.uniforms.uHsl[0]=e*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(e){this.uniforms.uHsl[1]=e}get lightness(){return this.uniforms.uHsl[2]}set lightness(e){this.uniforms.uHsl[2]=e}get colorize(){return this.uniforms.uColorize===1}set colorize(e){this.uniforms.uColorize=e?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};qr(Xm,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var Hm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,Ym=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,jm=Object.defineProperty,qm=(n,e,t)=>e in n?jm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Kr=(n,e,t)=>(qm(n,typeof e!="symbol"?e+"":e,t),t);const Km=class nl extends B{constructor(...e){let t=e[0]??{};if(Array.isArray(t)||"x"in t&&"y"in t||t instanceof ce){I("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in t?t.x:t[0],o="y"in t?t.y:t[1];t={velocity:{x:s,y:o}},e[1]!==void 0&&(t.kernelSize=e[1]),e[2]!==void 0&&(t.offset=e[2])}t={...nl.DEFAULT_OPTIONS,...t};const r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Ym,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:Hm,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:t.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(t.kernelSize??5),type:"i32"},uOffset:{value:t.offset,type:"f32"}}}}),Kr(this,"uniforms"),Kr(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,t)}get velocity(){return this.uniforms.uVelocity}set velocity(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uVelocity=e,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(e){this.velocity.x=e,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(e){this.velocity.y=e,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Kr(Km,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var Zm=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,Qm=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,Jm=Object.defineProperty,eg=(n,e,t)=>e in n?Jm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_n=(n,e,t)=>(eg(n,typeof e!="symbol"?e+"":e,t),t);const tg=class rl extends B{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(I("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),t={replacements:t},e[1]&&(t.tolerance=e[1]),e[2]&&(t.maxColors=e[2])),t={...rl.DEFAULT_OPTIONS,...t};const r=t.maxColors??t.replacements.length,i=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Qm.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:Zm.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:i,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:t.tolerance,type:"f32"}}}}),_n(this,"uniforms"),_n(this,"_replacements",[]),_n(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=t.replacements}set replacements(e){const t=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,i=e.length,s=new L;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);t[i*3]=-1;let o,a,l;for(let u=0;u<i;u++){const c=e[u];s.setValue(c[0]),[o,a,l]=s.toArray(),t[u*3]=o,t[u*3+1]=a,t[u*3+2]=l,s.setValue(c[1]),[o,a,l]=s.toArray(),r[u*3]=o,r[u*3+1]=a,r[u*3+2]=l}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set epsilon(e){I("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return I("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};_n(tg,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var ng=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,rg=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,ig=Object.defineProperty,sg=(n,e,t)=>e in n?ig(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Zr=(n,e,t)=>(sg(n,typeof e!="symbol"?e+"":e,t),t);const og=class il extends B{constructor(e){e={...il.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:rg,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:ng,name:"old-film-filter"});super({gpuProgram:t,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:e.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Zr(this,"uniforms"),Zr(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,e.applyFilter(this,t,r,i)}get sepia(){return this.uniforms.uSepia}set sepia(e){this.uniforms.uSepia=e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get scratch(){return this.uniforms.uScratch[0]}set scratch(e){this.uniforms.uScratch[0]=e}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(e){this.uniforms.uScratch[1]=e}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(e){this.uniforms.uScratch[2]=e}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(e){this.uniforms.uVignetting[0]=e}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(e){this.uniforms.uVignetting[1]=e}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(e){this.uniforms.uVignetting[2]=e}};Zr(og,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var ag=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,lg=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,ug=Object.defineProperty,cg=(n,e,t)=>e in n?ug(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,qe=(n,e,t)=>(cg(n,typeof e!="symbol"?e+"":e,t),t);const Ci=class Ye extends B{constructor(...e){let t=e[0]??{};typeof t=="number"&&(I("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),t={thickness:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.quality=e[2]),e[3]!==void 0&&(t.alpha=e[3]),e[4]!==void 0&&(t.knockout=e[4])),t={...Ye.DEFAULT_OPTIONS,...t};const r=t.quality??.1,i=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:lg,entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:ag.replace(/\$\{ANGLE_STEP\}/,Ye.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:i,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:t.knockout?1:0,type:"f32"}}}}),qe(this,"uniforms"),qe(this,"_thickness"),qe(this,"_quality"),qe(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Ye.getAngleStep(r),this._color=new L,this.color=t.color??0,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uThickness[0]=this.thickness/t.source.width,this.uniforms.uThickness[1]=this.thickness/t.source.height,e.applyFilter(this,t,r,i)}static getAngleStep(e){return parseFloat((Math.PI*2/Math.max(e*Ye.MAX_SAMPLES,Ye.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(e){this._quality=e,this.uniforms.uAngleStep=Ye.getAngleStep(e)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};qe(Ci,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});qe(Ci,"MIN_SAMPLES",1);qe(Ci,"MAX_SAMPLES",100);var hg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,fg=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,dg=Object.defineProperty,pg=(n,e,t)=>e in n?dg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,bn=(n,e,t)=>(pg(n,typeof e!="symbol"?e+"":e,t),t);const mg=class sl extends B{constructor(...e){let t=e[0]??{};if(typeof t=="number"){if(I("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),t={angle:t},e[1]){const s="x"in e[1]?e[1].x:e[1][0],o="y"in e[1]?e[1].y:e[1][1];t.center={x:s,y:o}}e[2]&&(t.kernelSize=e[2]),e[3]&&(t.radius=e[3])}t={...sl.DEFAULT_OPTIONS,...t};const r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:fg,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:hg,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uKernelSize:{value:t.kernelSize,type:"i32"},uRadius:{value:t.radius,type:"f32"}}}}),bn(this,"uniforms"),bn(this,"_angle"),bn(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,t)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e<0||e===1/0?-1:e}};bn(mg,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var gg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,xg=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,vg=Object.defineProperty,yg=(n,e,t)=>e in n?vg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Qr=(n,e,t)=>(yg(n,typeof e!="symbol"?e+"":e,t),t);const _g=class ol extends B{constructor(e){e={...ol.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:xg,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:gg,name:"reflection-filter"});super({gpuProgram:t,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:e.mirror?1:0,type:"f32"},uBoundary:{value:e.boundary,type:"f32"},uAmplitude:{value:e.amplitude,type:"vec2<f32>"},uWavelength:{value:e.waveLength,type:"vec2<f32>"},uAlpha:{value:e.alpha,type:"vec2<f32>"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Qr(this,"uniforms"),Qr(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get mirror(){return this.uniforms.uMirror>.5}set mirror(e){this.uniforms.uMirror=e?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(e){this.uniforms.uBoundary=e}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(e){this.uniforms.uAmplitude[0]=e[0],this.uniforms.uAmplitude[1]=e[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(e){this.uniforms.uAmplitude[0]=e}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(e){this.uniforms.uAmplitude[1]=e}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(e){this.uniforms.uWavelength[0]=e[0],this.uniforms.uWavelength[1]=e[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(e){this.uniforms.uWavelength[0]=e}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(e){this.uniforms.uWavelength[1]=e}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(e){this.uniforms.uAlpha[0]=e[0],this.uniforms.uAlpha[1]=e[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(e){this.uniforms.uAlpha[0]=e}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(e){this.uniforms.uAlpha[1]=e}};Qr(_g,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var bg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,Sg=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,Cg=Object.defineProperty,wg=(n,e,t)=>e in n?Cg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,al=(n,e,t)=>(wg(n,typeof e!="symbol"?e+"":e,t),t);const Ag=class ll extends B{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(I("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),t={red:t},e[1]!==void 0&&(t.green=e[1]),e[2]!==void 0&&(t.blue=e[2])),t={...ll.DEFAULT_OPTIONS,...t};const r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Sg,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:bg,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}}}}),al(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,t)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}};al(Ag,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Tg=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,Pg=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,Fg=Object.defineProperty,Ig=(n,e,t)=>e in n?Fg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Jr=(n,e,t)=>(Ig(n,typeof e!="symbol"?e+"":e,t),t);const Mg=class ul extends B{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(I("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),t={center:t,...e[1]},e[2]!==void 0&&(t.time=e[2])),t={...ul.DEFAULT_OPTIONS,...t};const r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Pg,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:Tg,name:"shockwave-filter"});super({gpuProgram:r,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:t.time,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uSpeed:{value:t.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Jr(this,"uniforms"),Jr(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get speed(){return this.uniforms.uSpeed}set speed(e){this.uniforms.uSpeed=e}get amplitude(){return this.uniforms.uWave[0]}set amplitude(e){this.uniforms.uWave[0]=e}get wavelength(){return this.uniforms.uWave[1]}set wavelength(e){this.uniforms.uWave[1]=e}get brightness(){return this.uniforms.uWave[2]}set brightness(e){this.uniforms.uWave[2]=e}get radius(){return this.uniforms.uWave[3]}set radius(e){this.uniforms.uWave[3]=e}};Jr(Mg,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var zg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,Og=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,Rg=Object.defineProperty,Eg=(n,e,t)=>e in n?Rg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Sn=(n,e,t)=>(Eg(n,typeof e!="symbol"?e+"":e,t),t);const Ug=class cl extends B{constructor(...e){let t=e[0]??{};if(t instanceof R&&(I("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),t={lightMap:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.alpha=e[2])),t={...cl.DEFAULT_OPTIONS,...t},!t.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Og,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:zg,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:i,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:t.lightMap.source,uMapSampler:t.lightMap.source.style}}),Sn(this,"uniforms"),Sn(this,"_color"),Sn(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new L,this.color=t.color??0,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,r,i)}get lightMap(){return this._lightMap}set lightMap(e){this._lightMap=e,this.resources.uMapTexture=e.source,this.resources.uMapSampler=e.source.style}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};Sn(Ug,"DEFAULT_OPTIONS",{lightMap:R.WHITE,color:0,alpha:1});var kg=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uDimensions;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uDimensions - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uDimensions * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,Bg=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uDimensions: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uDimensions = tiltShiftUniforms.uDimensions;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uDimensions - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uDimensions * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,Lg=Object.defineProperty,Dg=(n,e,t)=>e in n?Lg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ei=(n,e,t)=>(Dg(n,typeof e!="symbol"?e+"":e,t),t);const Gg=class hl extends B{constructor(e){const{width:t,height:r}=dd.defaultOptions;e={...hl.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:t,y:r/2},...e};const i=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Bg,entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:kg,name:"tilt-shift-axis-filter"});super({gpuProgram:i,glProgram:s,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([e.blur,e.gradientBlur]),type:"vec2<f32>"},uStart:{value:e.start,type:"vec2<f32>"},uEnd:{value:e.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([t,r]),type:"vec2<f32>"}}}}),ei(this,"uniforms"),ei(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=e.axis}updateDimensions(e){const{uDimensions:t}=this.uniforms;t[0]=e.frame.width,t[1]=e.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const e=this.uniforms.uEnd,t=this.uniforms.uStart,r=e.x-t.x,i=e.y-t.y,s=Math.sqrt(r*r+i*i),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-i/s:r/s,this.uniforms.uDelta[1]=o?r/s:i/s}};ei(Gg,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var Ng=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,$g=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,Vg=Object.defineProperty,Wg=(n,e,t)=>e in n?Vg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,fl=(n,e,t)=>(Wg(n,typeof e!="symbol"?e+"":e,t),t);const Xg=class dl extends B{constructor(e){e={...dl.DEFAULT_OPTIONS,...e};const t=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:$g,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Ng,name:"twist-filter"});super({gpuProgram:t,glProgram:r,resources:{twistUniforms:{uTwist:{value:[e.radius??0,e.angle??0],type:"vec2<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},...e}),fl(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(e){this.uniforms.uTwist[0]=e}get angle(){return this.uniforms.uTwist[1]}set angle(e){this.uniforms.uTwist[1]=e}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e}};fl(Xg,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var Hg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,Yg=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,jg=Object.defineProperty,qg=(n,e,t)=>e in n?jg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,pl=(n,e,t)=>(qg(n,typeof e!="symbol"?e+"":e,t),t);const Kg=class ml extends B{constructor(e){e={...ml.DEFAULT_OPTIONS,...e};const t=e.maxKernelSize??32,r=E.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Yg.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:Hg.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:e.strength,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),pl(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,e)}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(e){this.uniforms.uRadii[0]=e}get radius(){return this.uniforms.uRadii[1]}set radius(e){this.uniforms.uRadii[1]=e<0||e===1/0?-1:e}};pl(Kg,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});const Zg=.5,Bs=.5*1e3,Ls=.1*1e3,Qg=1920,Jg=1080;class ex extends ne{constructor(e){super(),this.lightFilter=new Hd({brightness:1}),this.filters=[this.lightFilter],this.isDark=!1,this.timeout=Math.ceil(Math.random()*this.isDark?Ls:Bs),this.image=new et(ye.bg),this.image.anchor.set(.5,.5),this.addChild(this.image),kd(this),this.screenResize(e),_i.on(bi.screenResize,this.screenResize.bind(this))}screenResize(e){this.position.x=e.centerX,this.position.y=e.centerY;let t=e.width/Qg,r=e.height/Jg,i=t>r?t:r;this.image.scale.set(i)}tick(e){if(this.timeout>0)return this.timeout-=e.elapsedMS;this.isDark?(this.lightFilter.brightness=1,this.isDark=!1,this.timeout=Math.ceil(Math.random()*Bs)):(this.lightFilter.brightness=Zg,this.isDark=!0,this.timeout=Math.ceil(Math.random()*Ls))}}const cn=1.44,tx=-46,nx=94;class rx extends In{constructor(e,t){super(ye.z1_1.animations.go),this.textures=ye.z1_1.animations.go,this.anchor.set(.5,1),this.scale.set(1/(cn*7)),this.position.set(e,t+this.height),this.startX=e,this.startY=t+this.height,this.animationSpeed=1,this.play(),this.onLoop=()=>{this.scale.set(this.scale.x*cn),this.position.x+=tx*this.scale.x,this.position.y+=nx*this.scale.y,this.scale.x>cn&&(this.scale.set(1/(cn*7)),this.position.set(this.startX,this.startY))}}}const ix=navigator.language||navigator.userLanguage;~ix.indexOf("ru");function sx(){const n=Fa();Xr(new ex(n)),Xr(new rx(n.centerX,n.centerY)),yi()}ve.addBundle("fonts",ue);ve.loadBundle("fonts").then(n=>{for(let e in n)ue[e]=n[e].family;pd(),Nd(sx)});export{uu as $,Mo as A,pe as B,ne as C,H as D,P as E,B as F,E as G,qs as H,_e as I,Ie as J,Ni as K,et as L,D as M,Mu as N,Nu as O,ae as P,Z as Q,Pn as R,Du as S,be as T,An as U,sc as V,hd as W,fd as X,Q as Y,Vi as Z,Xi as _,se as a,qn as a0,L as a1,Qs as a2,zo as a3,dd as a4,cc as a5,zc as a6,Kc as a7,Qc as a8,rh as a9,sh as aa,oh as ab,xt as ac,no as ad,Xe as ae,I as af,K as ag,oe as ah,qh as ai,Yo as aj,ts as ak,Ji as al,zl as am,As as an,tf as ao,q as ap,Rl as aq,Nr as ar,Gr as as,Cs as at,wn as au,Ko as av,Ac as b,Nt as c,dn as d,le as e,es as f,Sc as g,oi as h,Po as i,si as j,me as k,ai as l,Ss as m,qc as n,Zc as o,th as p,Bo as q,Hl as r,ih as s,En as t,R as u,Ol as v,J as w,U as x,lh as y,Oe as z};
