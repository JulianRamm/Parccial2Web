(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports={Name:"Nombre",Channel:"Canal",Seasons:"Temporadas",Description:"Descripci\xf3n"}},27:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),s=a(39),l=a(22),i=a(13),m=a(14),u=a(17),p=a(15),d=a(18),h=a(38),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},this.props.movie.id),r.a.createElement("td",null,this.props.movie.name),r.a.createElement("td",null,this.props.movie.channel),r.a.createElement("td",null,this.props.movie.description))}}]),t}(r.a.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json").then(function(e){return e.json()}).then(function(t){return e.setState({movies:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},r.a.createElement(h.a,{id:"Name"})),r.a.createElement("th",{scope:"col"},"C",r.a.createElement(h.a,{id:"Channel"})),r.a.createElement("th",{scope:"col"},r.a.createElement(h.a,{id:"Description"})))),r.a.createElement("tbody",null,this.state.movies.map(function(e,t){return r.a.createElement(b,{key:t,movie:e})}))))}}]),t}(r.a.Component);o.a.render(r.a.createElement(s.a,{locale:"es-Es",messages:l},r.a.createElement(E,null)),document.getElementById("root")),ServiceWorkerRegistration.register()}},[[27,1,2]]]);
//# sourceMappingURL=main.3c760f3f.chunk.js.map