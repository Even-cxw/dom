(self.webpackChunk=self.webpackChunk||[]).push([[137],{99230:function(t,c,e){"use strict";e.r(c);var n=e(5574),r=e.n(n),a=e(67294),f=e(94393),l=e(72977),d=e(33047),u=e(7561),s=e(10932),E=e(50942),m=e(85893),g={nodes:[{id:"node0",size:100,type:"region-image",label:"\u5409\u661F\u9AD8\u7167",imgOptions:{size:[120,80],img:u}},{id:"node1",size:100,type:"region-image",label:"\u6C89\u9C7C\u843D\u96C11",imgOptions:{size:[120,80],img:u}},{id:"node2",size:100,type:"region-image",label:"\u6C89\u9C7C\u843D\u96C12",imgOptions:{size:[120,80],img:u}}],edges:[{source:"node0",target:"node1",label:"123"},{source:"node1",target:"node2"}]},v={nodes:[{parent:"node0",id:"children2",type:"region-image",label:"\u5409\u661F\u9AD8\u7167-\u718A\u5B69\u5B501",size:100,imgOptions:{size:[120,80],img:u}},{parent:"node0",id:"children3",size:100,type:"region-image",label:"\u5409\u661F\u9AD8\u7167-\u718A\u5B69\u5B502",imgOptions:{size:[120,80],img:u}},{parent:"node0",id:"children21",type:"region-image",label:"\u5409\u661F\u9AD8\u7167-\u718A\u5B69\u5B5011",size:100,imgOptions:{size:[120,80],img:u}},{parent:"node0",id:"children31",size:100,type:"region-image",label:"\u5409\u661F\u9AD8\u7167-\u718A\u5B69\u5B5021",imgOptions:{size:[120,80],img:u}},{parent:"node1",id:"children4",size:100,type:"region-image",label:"\u6C89\u9C7C\u843D\u96C11-\u718A\u5B69\u5B502",imgOptions:{size:[120,80],img:u}},{parent:"node1",id:"children5",size:100,type:"region-image",label:"\u6C89\u9C7C\u843D\u96C11-\u718A\u5B69\u5B505",imgOptions:{size:[120,80],img:u}}]};v.nodes.forEach(function(h){return h.visible=!1});var x={nodes:g.nodes.concat(v.nodes),edges:g.edges},O=function(S){return Math.round(S*100)/100},w=function(){var S=(0,l.Z)(),A=S.width,C=S.height,b=(0,a.useRef)(null),D=(0,a.useRef)(null),P=(0,d.Z)(),L=r()(P,2),R=L[0],I=L[1],B=(0,a.useState)(30),k=r()(B,2),U=k[0],W=k[1];(0,a.useEffect)(function(){if(I.width!==0)if(b.current){var _=b.current;if(!_||_.get("destroyed"))return;console.log("leftStyle",I),console.log("width",A),_.changeSize(I.width,C)}else N(),Z(I.width,C)},[I.width,A]);var N=function(){var i=new f.ZP.Layout.grid({rows:1,width:A,sortBy:"id"});i.init(g),i.execute();var o=new f.ZP.Layout.grid({rows:1,width:A,sortBy:"id",begin:[0,400]});o.init(v),o.execute()},Z=function(i,o){b.current||(K(),b.current=new f.ZP.Graph({container:D.current,width:i,height:o,linkCenter:!0,modes:{default:["drag-canvas","zoom-canvas","drag-node","shortcuts-call"]},defaultNode:{type:"rect",labelCfg:{style:{fill:"#000000A6",fontSize:10}},style:{stroke:"#72CC4A",width:150}},defaultEdge:{style:{stroke:"l(0) 0:rgba(255, 255, 255, 0) 0.5:#7ec2f3 1:rgba(255, 255, 255, 0)",cursor:"pointer"},labelCfg:{autoRotate:!0,style:{fill:"#fff"}}},nodeStateStyles:{hover:{stroke:"red",lineWidth:3}},edgeStateStyles:{hover:{stroke:"blue",lineWidth:5},click:{stroke:"red",lineWidth:5}},fitView:!0,fitViewPadding:100}),b.current.data(x),b.current.render(),F(),V())},K=function(){f.ZP.registerNode("region-image",{options:{style:{},stateStyles:{hover:{},selected:{}}},draw:function(o,p){var y=o.imgOptions;p.addShape("rect",{attrs:{cursor:"pointer",x:-y.size[0]/2,y:-y.size[1]/2,width:y.size[0],height:y.size[1],stroke:"black",opacity:0,fill:"red"},draggable:!0,name:"rect-shape-Even"});var M=p.addShape("image",{attrs:{cursor:"pointer",x:-y.size[0]/2,y:-y.size[1]/2,width:y.size[0],height:y.size[1],img:y.img},draggable:!0,name:"region-image-shape"});return o.label&&p.addShape("text",{attrs:{cursor:"pointer",y:-y.size[1]/2-20,x:0,text:o.label,textAlign:"center",textBaseline:"middle",fontSize:26,fill:"#fff",draggable:!0},name:"region-image-label"}),M},update:void 0,setState:function(o,p,y){console.log("name, value, item =>>>",o,p,y);var M=y.get("group");if(o==="selected"&&p){var z=M.find(function(T){return T.get("name")==="rect-shape-Even"});z&&z.attr("opacity",.5)}else if(o==="selected"&&!p){var j=M.find(function(T){return T.get("name")==="rect-shape-Even"});j&&j.attr("opacity",0)}}},"single-node")},F=function(){var i=b.current;i.on("node:click",function(o){G(i),i.setItemState(o.item,"selected",!0)}),i.on("region-image-label:click",function(o){console.log("111111evt",o);var p=o.item.getID(),y=i.findById(p).getModel(),M=[];v.nodes.forEach(function(z){p===z.parent?(i.showItem(z.id),M.push(z)):i.hideItem(z.id)})})},G=function(i){var o=i.findAllByState("node","selected");o.forEach(function(p){i.setItemState(p,"selected",!1)})},H=function(i){var o=i.findAllByState("edge","click");o.forEach(function(p){i.setItemState(p,"click",!1)})},V=function(){var i=b.current;i.on("edge:click",function(o){H(i),console.log("evt",o),i.setItemState(o.item,"click",!0)}),i.on("edge:mouseenter",function(o){i.setItemState(o.item,"hover",!0)}),i.on("edge:mouseleave",function(o){i.setItemState(o.item,"hover",!1)})};return(0,m.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex"},children:[(0,m.jsx)("div",{ref:R,style:{backgroundColor:"black",width:"".concat(100-U,"%")},children:(0,m.jsx)("div",{ref:D,children:(0,m.jsxs)("div",{style:{position:"absolute"},children:[(0,m.jsx)(E.rU,{to:"/",children:(0,m.jsx)(s.ZP,{type:"dashed",children:"\u56DE\u5230\u9996\u9875"})}),(0,m.jsx)(s.ZP,{type:"dashed",onClick:function(){W(15)},children:"\u7F29\u653E\u53F3\u4FA7"}),(0,m.jsx)(s.ZP,{type:"dashed",onClick:function(){W(30)},children:"\u6269\u5C55\u53F3\u4FA7"})]})})}),(0,m.jsx)("div",{style:{width:"".concat(U,"%"),height:"100%"},children:"111233311223"})]})};c.default=w},76362:function(t,c,e){"use strict";e.d(c,{S1:function(){return a},ZT:function(){return n},jU:function(){return f},on:function(){return r}});var n=function(){};function r(d){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];d&&d.addEventListener&&d.addEventListener.apply(d,u)}function a(d){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];d&&d.removeEventListener&&d.removeEventListener.apply(d,u)}var f=typeof window!="undefined",l=typeof navigator!="undefined"},33047:function(t,c,e){"use strict";e.d(c,{Z:function(){return u}});var n=e(67294),r=e(76362),a=r.jU?n.useLayoutEffect:n.useEffect,f=a,l={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function d(){var s=(0,n.useState)(null),E=s[0],m=s[1],g=(0,n.useState)(l),v=g[0],x=g[1],O=(0,n.useMemo)(function(){return new window.ResizeObserver(function(w){if(w[0]){var h=w[0].contentRect,S=h.x,A=h.y,C=h.width,b=h.height,D=h.top,P=h.left,L=h.bottom,R=h.right;x({x:S,y:A,width:C,height:b,top:D,left:P,bottom:L,right:R})}})},[]);return f(function(){if(E)return O.observe(E),function(){O.disconnect()}},[E]),[m,v]}var u=r.jU&&typeof window.ResizeObserver!="undefined"?d:function(){return[r.ZT,l]}},72977:function(t,c,e){"use strict";e.d(c,{Z:function(){return m}});var n=e(67294),r=function(g){(0,n.useEffect)(g,[])},a=r,f=function(g){var v=(0,n.useRef)(g);v.current=g,a(function(){return function(){return v.current()}})},l=f,d=function(g){var v=(0,n.useRef)(0),x=(0,n.useState)(g),O=x[0],w=x[1],h=(0,n.useCallback)(function(S){cancelAnimationFrame(v.current),v.current=requestAnimationFrame(function(){w(S)})},[]);return l(function(){cancelAnimationFrame(v.current)}),[O,h]},u=d,s=e(76362),E=function(g,v){g===void 0&&(g=1/0),v===void 0&&(v=1/0);var x=u({width:s.jU?window.innerWidth:g,height:s.jU?window.innerHeight:v}),O=x[0],w=x[1];return(0,n.useEffect)(function(){if(s.jU){var h=function(){w({width:window.innerWidth,height:window.innerHeight})};return(0,s.on)(window,"resize",h),function(){(0,s.S1)(window,"resize",h)}}},[]),O},m=E},7561:function(t,c,e){"use strict";t.exports=e.p+"static/branch_base.7caa187d.png"},37923:function(t){function c(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,a=new Array(n);r<n;r++)a[r]=e[r];return a}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},82187:function(t){function c(e){if(Array.isArray(e))return e}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},73964:function(t){function c(e,n){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a,f,l,d,u=[],s=!0,E=!1;try{if(l=(r=r.call(e)).next,n===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=l.call(r)).done)&&(u.push(a.value),u.length!==n);s=!0);}catch(m){E=!0,f=m}finally{try{if(!s&&r.return!=null&&(d=r.return(),Object(d)!==d))return}finally{if(E)throw f}}return u}}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},69094:function(t){function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},5574:function(t,c,e){var n=e(82187),r=e(73964),a=e(96263),f=e(69094);function l(d,u){return n(d)||r(d,u)||a(d,u)||f()}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},96263:function(t,c,e){var n=e(37923);function r(a,f){if(a){if(typeof a=="string")return n(a,f);var l=Object.prototype.toString.call(a).slice(8,-1);if(l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set")return Array.from(a);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(a,f)}}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports}}]);