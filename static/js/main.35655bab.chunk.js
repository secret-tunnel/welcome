(window.webpackJsonpwelcome=window.webpackJsonpwelcome||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),l=(a(16),a(1)),o=a(2),i=a(4),u=a(3),m=a(6),d=a(5),p=a(10),f=(a(7),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300 300",width:"300px",height:"300px"},s.a.createElement("filter",{id:"blueGlow",height:"300%",width:"300%",x:"-75%",y:"-75%"},s.a.createElement("feMorphology",{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"}),s.a.createElement("feGaussianBlur",{in:"thicken",stdDeviation:"5",result:"blurred"}),s.a.createElement("feFlood",{floodColor:"rgb(0,186,255)",result:"glowColor"}),s.a.createElement("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlow_colored"}),s.a.createElement("feMerge",null,s.a.createElement("feMergeNode",{in:"softGlow_colored"}),s.a.createElement("feMergeNode",{in:"SourceGraphic"}))),s.a.createElement("path",{id:"path",className:"path",d:"M150,10 290,150 150,290 10,150 150,10z M150,13 13,150 150,287 287,150 150,13z",fill:"white",stroke:"white",strokeWidth:"3",filter:"url(#blueGlow)"}),s.a.createElement("path",{d:"M150,25 170,45 130,45 150,25z M150,275 170,255 130,255 150,275z",fill:"white",filter:"url(#blueGlow)"}))}}]),t}(s.a.Component));function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=a(17),E=function(e){function t(e){var a;Object(l.a)(this,t);var n=(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setStages({0:["textBG","p1"],500:["text","diamond","p2"],750:["p3"],800:["smallText01"],900:["smallText02"]});return console.log(n),a.state={stages:n,text:"JM5-XPZ-AW1-ZMP"},a.offset=1e3,setInterval((function(){a.offset-=1,a.offset<0&&(a.offset=1e3),document.getElementById("path").style["stroke-dashoffset"]=a.offset.toString()}),15),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"setStages",value:function(e){var t=this,a={};return Object.keys(e).forEach((function(t){e[t].forEach((function(e){a[e]=!(t>0)}))})),Object.keys(e).forEach((function(a){if(a>0){var n={};e[a].forEach((function(e){n[e]=!0})),setTimeout((function(){t.setState({stages:b({},t.state.stages,{},n)})}),a)}})),a}},{key:"render",value:function(){return s.a.createElement("div",{className:"token-wrapper"},s.a.createElement("div",{className:"component pulse-wrapper"},this.state.stages.p1&&s.a.createElement("div",{className:"pulse"}),this.state.stages.p2&&s.a.createElement("div",{className:"pulse"}),this.state.stages.p3&&s.a.createElement("div",{className:"pulse"})),s.a.createElement("div",{className:"component diamond-wrapper"},s.a.createElement("div",{className:v("big-diamond",{active:this.state.stages.diamond})},s.a.createElement(f,{className:"diamond"}))),s.a.createElement("div",{className:"component"},s.a.createElement("div",{className:"bonus-wrapper"},s.a.createElement("div",{class:v("small-text",{active:this.state.stages.smallText01})},"Friendship"),s.a.createElement("div",{class:"shadow-text"},"MiddleText"),s.a.createElement("div",{class:v("small-text",{active:this.state.stages.smallText02})},"Token"))),s.a.createElement("div",{className:"component text-bg-wrapper"},s.a.createElement("div",{className:v("text-bg",{active:this.state.stages.textBG})},s.a.createElement("div",{className:"shadow-text"},this.state.text))),s.a.createElement("div",{className:"component"},s.a.createElement("div",{className:"text-wrapper"},s.a.createElement("div",{className:v("text",{active:this.state.stages.text})},this.state.text))))}}]),t}(s.a.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).unlock=a.unlock.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"unlock",value:function(){this.props.unlock()}},{key:"render",value:function(){return s.a.createElement("div",{className:"lock",onClick:this.unlock},s.a.createElement("div",{className:"blink"}),s.a.createElement("div",{className:"blink-overlay"}))}}]),t}(s.a.Component),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={mode:"locked"},a.unlock=a.unlock.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"unlock",value:function(){var e=this;this.setState({mode:"unlocking"}),setTimeout((function(){e.setState({mode:"unlocked"})}),10)}},{key:"render",value:function(){return s.a.createElement("div",{className:"bg"},"unlocked"===this.state.mode&&s.a.createElement(E,null),"locked"===this.state.mode&&s.a.createElement(g,{unlock:this.unlock}))}}]),t}(s.a.Component);c.a.render(s.a.createElement(O,null),document.getElementById("root"))},7:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.35655bab.chunk.js.map