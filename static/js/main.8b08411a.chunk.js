(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{24:function(e,t,o){},25:function(e,t,o){},31:function(e,t,o){"use strict";o.r(t);var s=o(0),c=o.n(s),n=o(4),i=o.n(n),a=(o(24),o(10)),r=o(11),l=o(7),u=o(18),h=o(17),p=o.p+"static/media/123.0e229f56.jpeg",d=(o(25),o(45)),j=o(1),b=["rock","paper","scissors"],S=function(e){Object(u.a)(o,e);var t=Object(h.a)(o);function o(e){var s;return Object(a.a)(this,o),(s=t.call(this,e)).state={count:4,playerSelection:"",computerSelection:"",result:""},s.clicked=s.clicked.bind(Object(l.a)(s)),s}return Object(r.a)(o,[{key:"Random",value:function(){return Math.floor(3*Math.random())}},{key:"clicked",value:function(){this.setState({playerSelection:"You have clicked "+b[this.state.count]}),console.log(this.options),console.log(this.state.count),console.log(this.state.playerSelection);var e=this.Random();this.setState({computerSelection:"The computer chooses "+b[e]}),console.log(this.state.playerSelection),this.state.count===e?this.setState({result:"It is a Draw!"}):this.state.count===(e+1)%3?this.setState({result:"You Win!"}):e===(this.state.count+1)%3&&this.setState({result:"The Computer Wins!"})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("h1",{children:"This is a Rock-Paper-Scissors game"}),Object(j.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(j.jsx)("p",{children:"Choose one of the following options:-"})]}),Object(j.jsx)(d.a,{variant:"contained",color:"primary",onMouseDown:function(){console.log("Rock"),e.setState({count:0})},onMouseUp:this.clicked,children:"Rock"}),Object(j.jsx)(d.a,{variant:"contained",color:"primary",onMouseDown:function(){console.log("Paper"),e.setState({count:1})},onMouseUp:this.clicked,children:"Paper"}),Object(j.jsx)(d.a,{variant:"contained",color:"primary",onMouseDown:function(){console.log("Scissor"),e.setState({count:2})},onMouseUp:this.clicked,children:"Scissor"}),Object(j.jsx)("p",{children:this.state.playerSelection}),Object(j.jsx)("p",{children:this.state.computerSelection}),Object(j.jsx)("p",{children:this.state.result})]})}}]),o}(c.a.Component),m=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,46)).then((function(t){var o=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;o(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),m()}},[[31,1,2]]]);
//# sourceMappingURL=main.8b08411a.chunk.js.map