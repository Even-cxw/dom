(self.webpackChunk=self.webpackChunk||[]).push([[469],{48589:function(e,o,t){"use strict";t.r(o);var s=t(5574),r=t.n(s),n=t(67294),i=t(85893);function u(){var l=(0,n.useState)(!1),a=r()(l,2),f=a[0],_=a[1];return(0,n.useEffect)(function(){},[]),(0,i.jsx)("div",{children:"demo1"})}o.default=u},75251:function(e,o,t){"use strict";var s=t(67294),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(f,_,p){var c,y={},d=null,x=null;p!==void 0&&(d=""+p),_.key!==void 0&&(d=""+_.key),_.ref!==void 0&&(x=_.ref);for(c in _)i.call(_,c)&&!l.hasOwnProperty(c)&&(y[c]=_[c]);if(f&&f.defaultProps)for(c in _=f.defaultProps,_)y[c]===void 0&&(y[c]=_[c]);return{$$typeof:r,type:f,key:d,ref:x,props:y,_owner:u.current}}o.Fragment=n,o.jsx=a,o.jsxs=a},85893:function(e,o,t){"use strict";e.exports=t(75251)},37923:function(e){function o(t,s){(s==null||s>t.length)&&(s=t.length);for(var r=0,n=new Array(s);r<s;r++)n[r]=t[r];return n}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},82187:function(e){function o(t){if(Array.isArray(t))return t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},73964:function(e){function o(t,s){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,i,u,l,a=[],f=!0,_=!1;try{if(u=(r=r.call(t)).next,s===0){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=u.call(r)).done)&&(a.push(n.value),a.length!==s);f=!0);}catch(p){_=!0,i=p}finally{try{if(!f&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(_)throw i}}return a}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},69094:function(e){function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},5574:function(e,o,t){var s=t(82187),r=t(73964),n=t(96263),i=t(69094);function u(l,a){return s(l)||r(l,a)||n(l,a)||i()}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},96263:function(e,o,t){var s=t(37923);function r(n,i){if(n){if(typeof n=="string")return s(n,i);var u=Object.prototype.toString.call(n).slice(8,-1);if(u==="Object"&&n.constructor&&(u=n.constructor.name),u==="Map"||u==="Set")return Array.from(n);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return s(n,i)}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
