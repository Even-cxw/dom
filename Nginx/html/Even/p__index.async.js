"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{97937:function(ne,y,a){a.d(y,{Z:function(){return T}});var i=a(87462),S=a(67294),L={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},t=L,E=a(42135),o=function(U,A){return S.createElement(E.Z,(0,i.Z)({},U,{ref:A,icon:t}))},u=S.forwardRef(o),T=u},43611:function(ne,y,a){a.r(y),a.d(y,{default:function(){return Ae}});var i=a(67294),S=a.p+"static/yay.7d162f31.jpg",L=a(94393),t=a(50942),E=a(6277),o=a(6226),u=a(10932),T=a(93967),Z=a.n(T),U=a(98423),A=a(74902);const b=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],se=b.map(n=>`${n}-inverse`),re=["success","processing","error","default","warning"];function le(n){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat((0,A.Z)(se),(0,A.Z)(b)).includes(n):b.includes(n)}function oe(n){return re.includes(n)}var te=a(97937),ue=a(64217);function V(n){if(n)return{closable:n.closable,closeIcon:n.closeIcon}}function W(n){const{closable:r,closeIcon:d}=n||{};return i.useMemo(()=>{if(!r&&(r===!1||d===!1||d===null))return!1;if(r===void 0&&d===void 0)return null;let s={closeIcon:typeof d!="boolean"&&d!==null?d:void 0};return r&&typeof r=="object"&&(s=Object.assign(Object.assign({},s),r)),s},[r,d])}function X(){const n={};for(var r=arguments.length,d=new Array(r),s=0;s<r;s++)d[s]=arguments[s];return d.forEach(l=>{l&&Object.keys(l).forEach(h=>{l[h]!==void 0&&(n[h]=l[h])})}),n}const de={};function ae(n,r){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:de;const s=W(n),l=W(r),h=i.useMemo(()=>Object.assign({closeIcon:i.createElement(te.Z,null)},d),[d]),c=i.useMemo(()=>s===!1?!1:s?X(h,l,s):l===!1?!1:l?X(h,l):h.closable?h:!1,[s,l,h]);return i.useMemo(()=>{if(c===!1)return[!1,null];const{closeIconRender:x}=h,{closeIcon:p}=c;let m=p;if(m!=null){x&&(m=x(p));const j=(0,ue.Z)(c,!0);Object.keys(j).length&&(m=i.isValidElement(m)?i.cloneElement(m,j):i.createElement("span",Object.assign({},j),m))}return[!0,m]},[c,h])}var ce=a(96159),ie=a(6172),k=a(53124),G=a(861),he=a(10274),xe=a(14747),me=a(45503),O=a(27036);const pe=n=>{const{paddingXXS:r,lineWidth:d,tagPaddingHorizontal:s,componentCls:l,calc:h}=n,c=h(s).sub(d).equal(),x=h(r).sub(d).equal();return{[l]:Object.assign(Object.assign({},(0,xe.Wf)(n)),{display:"inline-block",height:"auto",marginInlineEnd:n.marginXS,paddingInline:c,fontSize:n.tagFontSize,lineHeight:n.tagLineHeight,whiteSpace:"nowrap",background:n.defaultBg,border:`${(0,G.bf)(n.lineWidth)} ${n.lineType} ${n.colorBorder}`,borderRadius:n.borderRadiusSM,opacity:1,transition:`all ${n.motionDurationMid}`,textAlign:"start",position:"relative",[`&${l}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:n.defaultColor},[`${l}-close-icon`]:{marginInlineStart:x,fontSize:n.tagIconSize,color:n.colorTextDescription,cursor:"pointer",transition:`all ${n.motionDurationMid}`,"&:hover":{color:n.colorTextHeading}},[`&${l}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${n.iconCls}-close, ${n.iconCls}-close:hover`]:{color:n.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${l}-checkable-checked):hover`]:{color:n.colorPrimary,backgroundColor:n.colorFillSecondary},"&:active, &-checked":{color:n.colorTextLightSolid},"&-checked":{backgroundColor:n.colorPrimary,"&:hover":{backgroundColor:n.colorPrimaryHover}},"&:active":{backgroundColor:n.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${n.iconCls} + span, > span + ${n.iconCls}`]:{marginInlineStart:c}}),[`${l}-borderless`]:{borderColor:"transparent",background:n.tagBorderlessBg}}},$=n=>{const{lineWidth:r,fontSizeIcon:d,calc:s}=n,l=n.fontSizeSM;return(0,me.TS)(n,{tagFontSize:l,tagLineHeight:(0,G.bf)(s(n.lineHeightSM).mul(l).equal()),tagIconSize:s(d).sub(s(r).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:n.defaultBg})},I=n=>({defaultBg:new he.C(n.colorFillQuaternary).onBackground(n.colorBgContainer).toHexString(),defaultColor:n.colorText});var Q=(0,O.I$)("Tag",n=>{const r=$(n);return pe(r)},I),je=function(n,r){var d={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&r.indexOf(s)<0&&(d[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(n);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(n,s[l])&&(d[s[l]]=n[s[l]]);return d},fe=i.forwardRef((n,r)=>{const{prefixCls:d,style:s,className:l,checked:h,onChange:c,onClick:x}=n,p=je(n,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:m,tag:j}=i.useContext(k.E_),F=P=>{c==null||c(!h),x==null||x(P)},g=m("tag",d),[N,R,C]=Q(g),z=Z()(g,`${g}-checkable`,{[`${g}-checkable-checked`]:h},j==null?void 0:j.className,l,R,C);return N(i.createElement("span",Object.assign({},p,{ref:r,style:Object.assign(Object.assign({},s),j==null?void 0:j.style),className:z,onClick:F})))});function Ce(n,r){return b.reduce((d,s)=>{const l=n[`${s}1`],h=n[`${s}3`],c=n[`${s}6`],x=n[`${s}7`];return Object.assign(Object.assign({},d),r(s,{lightColor:l,lightBorderColor:h,darkColor:c,textColor:x}))},{})}const ge=n=>Ce(n,(r,d)=>{let{textColor:s,lightBorderColor:l,lightColor:h,darkColor:c}=d;return{[`${n.componentCls}${n.componentCls}-${r}`]:{color:s,background:h,borderColor:l,"&-inverse":{color:n.colorTextLightSolid,background:c,borderColor:c},[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}});var ve=(0,O.bk)(["Tag","preset"],n=>{const r=$(n);return ge(r)},I);function Ee(n){return typeof n!="string"?n:n.charAt(0).toUpperCase()+n.slice(1)}const D=(n,r,d)=>{const s=Ee(d);return{[`${n.componentCls}${n.componentCls}-${r}`]:{color:n[`color${d}`],background:n[`color${s}Bg`],borderColor:n[`color${s}Border`],[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}};var Be=(0,O.bk)(["Tag","status"],n=>{const r=$(n);return[D(r,"success","Success"),D(r,"processing","Info"),D(r,"error","Error"),D(r,"warning","Warning")]},I),Fe=function(n,r){var d={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&r.indexOf(s)<0&&(d[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(n);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(n,s[l])&&(d[s[l]]=n[s[l]]);return d};const J=i.forwardRef((n,r)=>{const{prefixCls:d,className:s,rootClassName:l,style:h,children:c,icon:x,color:p,onClose:m,bordered:j=!0,visible:F}=n,g=Fe(n,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:N,direction:R,tag:C}=i.useContext(k.E_),[z,P]=i.useState(!0),be=(0,U.Z)(g,["closeIcon","closable"]);i.useEffect(()=>{F!==void 0&&P(F)},[F]);const Y=le(p),w=oe(p),M=Y||w,De=Object.assign(Object.assign({backgroundColor:p&&!M?p:void 0},C==null?void 0:C.style),h),f=N("tag",d),[Pe,Se,Te]=Q(f),Ue=Z()(f,C==null?void 0:C.className,{[`${f}-${p}`]:M,[`${f}-has-color`]:p&&!M,[`${f}-hidden`]:!z,[`${f}-rtl`]:R==="rtl",[`${f}-borderless`]:!j},s,l,Se,Te),K=B=>{B.stopPropagation(),m==null||m(B),!B.defaultPrevented&&P(!1)},[,Oe]=ae(V(n),V(C),{closable:!1,closeIconRender:B=>{const Ne=i.createElement("span",{className:`${f}-close-icon`,onClick:K},B);return(0,ce.wm)(B,Ne,v=>({onClick:ee=>{var H;(H=v==null?void 0:v.onClick)===null||H===void 0||H.call(v,ee),K(ee)},className:Z()(v==null?void 0:v.className,`${f}-close-icon`)}))}}),$e=typeof g.onClick=="function"||c&&c.type==="a",q=x||null,Ie=q?i.createElement(i.Fragment,null,q,c&&i.createElement("span",null,c)):c,_=i.createElement("span",Object.assign({},be,{ref:r,className:Ue,style:De}),Ie,Oe,Y&&i.createElement(ve,{key:"preset",prefixCls:f}),w&&i.createElement(Be,{key:"status",prefixCls:f}));return Pe($e?i.createElement(ie.Z,{component:"Tag"},_):_)});J.CheckableTag=fe;var ye=J,Ze=a(1154),e=a(85893);function Ae(){var n=["\u4E0A\u6D77","\u5965\u4F53","\u4E1C\u65B9","\u5357\u4EAC"],r=["\u5317\u4EAC\u5965\u4F53\u4E2D\u5FC3","\u957F\u6625\u4E1C\u65B9\u4F53\u80B2\u4E2D\u5FC3","\u5357\u4EAC\u8BC1\u5238","\u6D66\u4E1C\u4E0A\u6D77"],d=function(c){var x=n.find(function(p){return c.indexOf(p)>=1});console.log("aaa",x)};(0,i.useEffect)(function(){d("2018-02-18 13:00:00")},[]);var s=function(c){return c===void 0||c===null?"":c},l=[{key:"1",label:"antv",children:(0,e.jsxs)(E.Z,{children:[(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/docs",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"docs"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo1",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo1"})," \u4FEE\u6539canvas\u6574\u4F53\u753B\u5E03\u989C\u8272"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo2",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo2"})," \u6811\u5E03\u5C40"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo3",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo3"})," \u81EA\u5B9A\u4E49\u4EA4\u4E92\u4E8B\u4EF6mode"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo4",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo4"})," \u57FA\u7840\u4E8B\u4EF6"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo5",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo5"})," ","\u6D41\u6C34\u7EBF\u5B50\u56FE\u5E03\u5C40\uFF1A\u5B9E\u73B0\u516C\u53F8\u5E03\u5C40\u8981\u6C42"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo6",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo6"})," \u81EA\u5B9A\u4E49\u8282\u70B9"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo7",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo7"})," \u81EA\u5B9A\u4E49\u8282\u70B9\u52A8\u753B"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo8",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo8"})," \u81EA\u5B9A\u8FB9\u57FA\u7840\u914D\u7F6E"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo9",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo9"})," \u8BBE\u7F6E\u8FB9\u7684\u80CC\u666F"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo10",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo10"})," \u8282\u70B9\u4E2D\u5FC3\u8FDB\u884C\u8FDE\u7EBF + \u8FB9\u52A8\u753B\u6548\u679C"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo11",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo11"})," \u6DFB\u52A0\u8FB9\u7684\u201C\u900F\u660E-\u6E10\u53D8\u8272\u201D"]})}),(0,e.jsx)(o.Z,{span:24,className:"mb-12 mt-12",children:(0,e.jsx)(ye,{color:"red",children:"\u8DDF\u516C\u53F8\u76F8\u5173\u4E1A\u52A1\u903B\u8F91"})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo12",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo12"}),(0,e.jsx)("p",{children:"1.\u5207\u6362title\u4E3B\u9898"}),(0,e.jsx)("p",{children:"2.\u70B9\u51FB\u7EBF\u6709\u9AD8\u4EAE\u6548\u679C,\u5E76\u4E14\u6E05\u7A7A\u5176\u4ED6\u7EBF\u8DEF\u7EA2\u8272\u6807\u8BB0"}),(0,e.jsx)("p",{children:"3.\u6DFB\u52A0\u624B\u6307\u60AC\u6D6E\u6548\u679C"})]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo13",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo13"}),(0,e.jsx)("p",{children:"1. \u91CD\u65B0\u7F16\u519912\u7684\u903B\u8F91"}),(0,e.jsx)("p",{children:"2. \u91CD\u65B0\u81EA\u5B9A\u4E49node\u7EE7\u627Fsingle-node"}),(0,e.jsx)("p",{children:"3. \u6DFB\u52A0node\u8282\u70B9\u70B9\u51FB\u903B\u8F91"})]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo14",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo14"})," \u52A8\u6001\u4FEE\u6539canvas\u5BBD\u9AD8\u3001\u6700\u5C0F\u53EF\u64CD\u4F5C\u7684\u7F29\u653E\u6BD4\u4F8B\u3001control+1\u5BF9\u56FE\u8FDB\u884C\u9002\u5E94\u753B\u5E03"]})}),(0,e.jsx)(o.Z,{span:24,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo15",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo15"}),"\u591A\u4E2A\u8282\u70B9\u4E4B\u95F4\u8FDE\u7EBF\u4F7F\u7528G6.Util.processParallelEdges(data.edges); *\u6CE8\u610F\u26A0\uFE0F*\u4F1A\u5BFC\u81F4\u52A8\u753B\u6D88\u5931"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo16",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo16"})," \u6D4B\u8BD5\u5168\u5C40\u7F29\u653E\u95EE\u9898 - \u7EE7\u7EED13\u5F00\u53D1"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo17",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"antv-demo17"})," \u6D4B\u8BD5\u5168\u5C40\u7F29\u653E\u95EE\u98982\u3001\u663E\u793A\u67D0\u4E2A\u8282\u70B9\u6309\u94AE - \u7EE7\u7EED16\u5F00\u53D1"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo18",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"demo18"}),(0,e.jsx)("p",{children:"\u70B9\u51FB\u8282\u70B9+\u5B50\u8282\u70B9\u4FE1\u606F"}),(0,e.jsx)("p",{children:"\u521D\u59CB\u5316\u72B6\u6001\u65F6 - \u5206\u914D\u5B50\u8282\u70B9\u5E03\u5C40\uFF1A\u6709\u5F0A\u7AEF \u5F00\u59CB\u8BA1\u7B97\u91CF\u6BD4\u8F83\u5927\uFF0C\u4E0D\u80FD\u52A8\u6001\u751F\u6210"}),(0,e.jsx)("p",{children:"\u5B66\u4E60\u52A8\u6001\u5E03\u5C40\u65B9\u5F0F - \u7EE7\u7EED17\u5F00\u53D1"})]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo19",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"demo19"}),(0,e.jsx)("p",{children:"\u70B9\u51FB\u8282\u70B9\u65F6 - \u5206\u914D\u5B50\u8282\u70B9\u5E03\u5C40"}),(0,e.jsx)("p",{children:"\u70B9\u51FB\u8282\u70B9\u65F6 - \u6DFB\u52A0\u8282\u70B9\u4E4B\u95F4\u8FDE\u7EBF"}),(0,e.jsx)("p",{children:"\u7EE7\u7EED18\u5F00\u53D1"})]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo20",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"demo20"}),(0,e.jsx)("p",{children:"\u6DFB\u52A0\u70B9\u51FBcanvas\u4E8B\u4EF6"}),(0,e.jsx)("p",{children:"\u6DFB\u52A0\u7EBFline\u60AC\u6D6E\u5C55\u793A\u5185\u5BB9"}),(0,e.jsx)("p",{children:"\u6DFB\u52A0label\u5206\u6BB5"}),(0,e.jsx)("p",{children:"\u6DFB\u52A0\u7F51\u683C\u56FE grid"}),(0,e.jsx)("p",{children:"\u7EE7\u7EED19\u5F00\u53D1"})]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/Antv/demo21",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"demo21"}),(0,e.jsx)("p",{children:"\u6D4B\u8BD5changeData"}),(0,e.jsx)("p",{children:"\u6D4B\u8BD5refresh"})]})})]})},{key:"2",label:"React",children:(0,e.jsxs)(E.Z,{children:[(0,e.jsxs)(o.Z,{span:8,children:[(0,e.jsx)(t.rU,{to:"/React/demo1",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"hooks\u6982\u5FF5\u7406\u89E3"})})," useMemo\u3001useCallback\u3001useState"]}),(0,e.jsxs)(o.Z,{span:8,children:[(0,e.jsx)(t.rU,{to:"/React/demo2",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"useState\u5B9E\u8DF5"})})," \u7EC4\u4EF6\u91CD\u590D\u6E32\u67D3\u662F\u5426\u4F1A\uFF1A \u91CD\u65B0\u521D\u59CB\u5316useState\u91CC\u7684\u6570\u636E"]}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/React/demo1",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"hooks"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/React/demo1",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"hooks"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/React/demo1",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"hooks"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/React/demo1",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"hooks"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/React/demo1",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"hooks"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/React/demo1",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"hooks"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/React/demo1",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"hooks"})})})]})},{key:"3",label:"TS",children:(0,e.jsxs)(E.Z,{children:[(0,e.jsx)(o.Z,{span:8,children:(0,e.jsxs)(t.rU,{to:"/TS/demo1",children:[(0,e.jsx)(u.ZP,{type:"dashed",children:"TS-demo1"}),"\u5B66\u4E60\u6570\u7EC4\u63A5\u53E3"]})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/TS/demo2",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"TS-demo2"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/TS/demo3",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"TS-demo3"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/TS/demo4",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"TS-demo4"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/TS/demo5",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"TS-demo5"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/TS/demo6",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"TS-demo6"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/TS/demo7",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"TS-demo7"})})}),(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/TS/demo8",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"TS-demo8"})})})]})},{key:"4",label:"antd",children:(0,e.jsx)(E.Z,{children:(0,e.jsx)(o.Z,{span:8,children:(0,e.jsx)(t.rU,{to:"/antd/demo1",children:(0,e.jsx)(u.ZP,{type:"dashed",children:"antd-demo1"})})})})}];return(0,e.jsxs)("div",{className:"h-full flex items-center justify-center",children:[(0,e.jsx)(Ze.Z,{items:l,defaultActiveKey:["1"]}),";"]})}}}]);