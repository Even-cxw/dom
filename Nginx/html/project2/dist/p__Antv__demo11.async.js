"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[959],{19723:function(S,d,i){i.r(d);var o=i(67294),c=i(94393),v=i(72977),l=i(85893),g={nodes:[{id:"node0",size:50},{id:"node1",size:30}],edges:[{source:"node0",target:"node1",style:{stroke:"l(0) 0:rgba(255, 255, 255, 0) 0.5:#7ec2f3 1:rgba(255, 255, 255, 0)"}}]},n=function(){var e=o.useRef(null),t=null,w=(0,v.Z)(),r=w.width,a=w.height;(0,o.useEffect)(function(){f(),h()},[]);var f=function(){t||(t=new c.ZP.Graph({container:e.current,width:r,height:a,modes:{default:["drag-canvas","zoom-canvas","drag-node"]},defaultNode:{type:"circle",labelCfg:{style:{fill:"#000000A6",fontSize:10}},style:{stroke:"#72CC4A",width:150}},defaultEdge:{type:"line"},layout:{type:"force",preventOverlap:!0,linkDistance:function(E){return E.source.id==="node0"?100:30}},nodeStateStyles:{hover:{stroke:"red",lineWidth:3}},edgeStateStyles:{hover:{stroke:"blue",lineWidth:3}}}),t.data(g),t.render())},h=function(){t.on("node:mouseenter",function(u){t.setItemState(u.item,"hover",!0)}),t.on("node:mouseleave",function(u){t.setItemState(u.item,"hover",!1)}),t.on("edge:mouseenter",function(u){t.setItemState(u.item,"hover",!0)}),t.on("edge:mouseleave",function(u){t.setItemState(u.item,"hover",!1)})};return(0,l.jsx)("div",{ref:e,style:{width:r,height:a,backgroundColor:"black"}})};d.default=n},76362:function(S,d,i){i.d(d,{S1:function(){return v},ZT:function(){return o},jU:function(){return l},on:function(){return c}});var o=function(){};function c(n){for(var s=[],e=1;e<arguments.length;e++)s[e-1]=arguments[e];n&&n.addEventListener&&n.addEventListener.apply(n,s)}function v(n){for(var s=[],e=1;e<arguments.length;e++)s[e-1]=arguments[e];n&&n.removeEventListener&&n.removeEventListener.apply(n,s)}var l=typeof window!="undefined",g=typeof navigator!="undefined"},72977:function(S,d,i){i.d(d,{Z:function(){return w}});var o=i(67294),c=function(r){(0,o.useEffect)(r,[])},v=c,l=function(r){var a=(0,o.useRef)(r);a.current=r,v(function(){return function(){return a.current()}})},g=l,n=function(r){var a=(0,o.useRef)(0),f=(0,o.useState)(r),h=f[0],m=f[1],u=(0,o.useCallback)(function(E){cancelAnimationFrame(a.current),a.current=requestAnimationFrame(function(){m(E)})},[]);return g(function(){cancelAnimationFrame(a.current)}),[h,u]},s=n,e=i(76362),t=function(r,a){r===void 0&&(r=1/0),a===void 0&&(a=1/0);var f=s({width:e.jU?window.innerWidth:r,height:e.jU?window.innerHeight:a}),h=f[0],m=f[1];return(0,o.useEffect)(function(){if(e.jU){var u=function(){m({width:window.innerWidth,height:window.innerHeight})};return(0,e.on)(window,"resize",u),function(){(0,e.S1)(window,"resize",u)}}},[]),h},w=t}}]);