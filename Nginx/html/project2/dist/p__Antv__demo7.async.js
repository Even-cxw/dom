"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[835],{3669:function(d,c,e){e.r(c);var r=e(67294),_=e(94393),E=e(72977),O=e(7561),z=e(87143),t=e(97918),f=e(95559),n=e(42570),x=e(85893),P={nodes:[{id:"node0",imgOptions:{size:[120,80],img:O},label:"\u4E92\u8054\u7F51\u8BBF\u95EE",type:"region-image"},{id:"node1",imgOptions:{size:[170,180],img:z},label:"\u673A\u6784\u5BA2\u6237\u63A5\u5165",cardOptions:{},type:"region-image"},{id:"node2",imgOptions:{size:[120,90],img:t},label:"\u673A\u6784\u5BA2\u6237\u63A5\u5165",cardOptions:{},type:"region-image"},{id:"node3",imgOptions:{size:[120,90],img:t},label:"\u673A\u6784\u5BA2\u6237",cardOptions:{},type:"region-image"},{id:"node4",imgOptions:{size:[120,90],img:t},label:"\u673A\u6784\u5BA2\u6237",cardOptions:{},type:"region-image"},{id:"center1",layoutType:"center",x:1200,y:1200,imgOptions:{size:[200,200],img:f},label:"\u603B\u5934",cardOptions:{},type:"region-image"}]},a=function(){var l=r.useRef(null),s=null,h=(0,E.Z)(),p=h.width,S=h.height;(0,r.useEffect)(function(){s||(M(),s=new _.ZP.Graph({container:l.current,width:p,height:S,renderer:"svg",modes:{default:["drag-canvas","zoom-canvas","drag-node"]},defaultNode:{type:"circle",labelCfg:{style:{fill:"#000000A6",fontSize:10}},style:{stroke:"#72CC4A",width:150}},defaultEdge:{type:"line"},layout:{pipes:[{type:"circular",radius:800,center:[1200,1200],nodesFilter:function(D){return D.layoutType!=="center"}}]},nodeStateStyles:{hover:{stroke:"red",lineWidth:3}},edgeStateStyles:{hover:{stroke:"blue",lineWidth:3}},fitView:!0,fitViewPadding:100})),s.data(P),s.render(),s.on("node:mouseenter",function(y){s.setItemState(y.item,"hover",!0)}),s.on("node:mouseleave",function(y){s.setItemState(y.item,"hover",!1)})},[]);var C=function(){return`
      <div class="G6_dom">
        <div class="item"><span>\u603B\u6570:</span><span>42</span></div>
        <div class="item"><span>\u901A:</span><span>12</span></div>
        <div class="item"><span>\u65AD:</span><span style="color: red">0</span></div>
      </div>
    `},M=function(){_.ZP.registerNode("region-image",{options:{style:{},stateStyles:{hover:{},selected:{}}},draw:function(u,g){var i=u.imgOptions,v=g.addShape("image",{attrs:{x:-i.size[0]/2,y:-i.size[1]/2,width:i.size[0],height:i.size[1],img:i.img},name:"region-image-shape"});return u.label&&g.addShape("text",{attrs:{y:-i.size[1]/2-20,x:0,text:u.label,textAlign:"center",textBaseline:"middle",fontSize:26,fill:"#fff"},name:"region-image-label"}),g.addShape("dom",{attrs:{x:-i.size[0]/2,y:i.size[1]/2+3,width:u.imgOptions.size[0],height:u.imgOptions.size[1],html:C()},name:"region-image-dom",draggable:!0}),v},afterDraw:function(u,g){var i=g.get("children")[0];u.layoutType==="center"&&i.animate(function(v){var w=v<=.5?1+v:2-v;return{matrix:[w,0,0,0,w,0,0,0,1]}},{repeat:!0,duration:2e3,easing:"easeCubic"})},setState:function(u,g,i){console.log("name, value, item",u,g,i);var v=i.getContainer(),w=v.get("children")[0],m=i.getModel().imgOptions;u==="hover"&&g?w.animate({width:m.size[0]*1.4,height:m.size[1]*1.4,x:-m.size[0]*1.4/2,y:-m.size[1]*1.4/2},{duration:200,easing:"easeCubic"}):u==="hover"&&!g&&w.animate({width:m.size[0],height:m.size[1],x:-m.size[0]/2,y:-m.size[1]/2},{duration:200,easing:"easeCubic"})}})};return(0,x.jsx)("div",{ref:l,style:{width:p,height:S,backgroundColor:"black"}})};c.default=a},42570:function(){},76362:function(d,c,e){e.d(c,{S1:function(){return E},ZT:function(){return r},jU:function(){return O},on:function(){return _}});var r=function(){};function _(t){for(var f=[],n=1;n<arguments.length;n++)f[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,f)}function E(t){for(var f=[],n=1;n<arguments.length;n++)f[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,f)}var O=typeof window!="undefined",z=typeof navigator!="undefined"},72977:function(d,c,e){e.d(c,{Z:function(){return P}});var r=e(67294),_=function(a){(0,r.useEffect)(a,[])},E=_,O=function(a){var o=(0,r.useRef)(a);o.current=a,E(function(){return function(){return o.current()}})},z=O,t=function(a){var o=(0,r.useRef)(0),l=(0,r.useState)(a),s=l[0],h=l[1],p=(0,r.useCallback)(function(S){cancelAnimationFrame(o.current),o.current=requestAnimationFrame(function(){h(S)})},[]);return z(function(){cancelAnimationFrame(o.current)}),[s,p]},f=t,n=e(76362),x=function(a,o){a===void 0&&(a=1/0),o===void 0&&(o=1/0);var l=f({width:n.jU?window.innerWidth:a,height:n.jU?window.innerHeight:o}),s=l[0],h=l[1];return(0,r.useEffect)(function(){if(n.jU){var p=function(){h({width:window.innerWidth,height:window.innerHeight})};return(0,n.on)(window,"resize",p),function(){(0,n.S1)(window,"resize",p)}}},[]),s},P=x},7561:function(d,c,e){d.exports=e.p+"static/branch_base.7caa187d.png"},87143:function(d,c,e){d.exports=e.p+"static/normal_base.6ddca331.png"},95559:function(d,c,e){d.exports=e.p+"static/ping_score.3f23904a.png"},97918:function(d,c,e){d.exports=e.p+"static/warning_base.0758a23a.png"}}]);