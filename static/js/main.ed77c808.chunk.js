(this["webpackJsonpmarvel-characters-react"]=this["webpackJsonpmarvel-characters-react"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},42:function(e,t){},44:function(e,t){},53:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(18),i=c.n(s),h=(c(28),c(19)),o=c(20),u=c(22),l=c(21),b=(c.p,c(29),function(e){var t=e.name,c=e.description,n=e.image;c.length>100&&c.substring(0,100);return Object(a.jsxs)("div",{className:"tc m-width20 grow br3 pa3 ma2 dib bw2 shadow-5 Card",children:[Object(a.jsx)("img",{alt:t,src:n,width:"200px",className:"h5 w5"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)("h2",{children:t})})]})}),d=function(e){var t=e.characters;return Object(a.jsx)("div",{className:"pa2",children:t.map((function(e,c){return Object(a.jsx)(b,{name:t[c].name,description:t[c].description,image:t[c].thumbnail.path+"."+t[c].thumbnail.extension},c)}))})},j=(c(30),function(e){return Object(a.jsx)("div",{className:"Scrolls",children:e.children})}),m=(c(31),function(e){var t=e.searchChange;return Object(a.jsx)("div",{className:"pa2 mb3 db w-100",children:Object(a.jsx)("input",{type:"search",className:"w-30 pa3 br3",onChange:t,placeholder:"search characters"})})}),f=(c(32),"0aa6ecbbc4caee73283a6cc5ab268eab"),p=(0,c(33).getApiHash)(1,"9ccee295ccf708b89131e4d95ae450dafb954492",f),v="".concat("https://gateway.marvel.com/v1/public/characters?","limit=100&ts=").concat(1,"&apikey=").concat(f,"&hash=").concat(p),x=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(){var e;return Object(h.a)(this,c),(e=t.call(this)).onSearchChange=function(t){e.setState({searchText:t.target.value})},e.state={characters:[],searchText:""},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch(v).then((function(e){return e.json()})).then((function(t){e.setState({characters:t.data.results})}))}},{key:"render",value:function(){var e=this.state,t=e.characters,c=e.searchText,n=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return t?Object(a.jsxs)("div",{className:"tc center",children:[Object(a.jsx)("h1",{className:"mb2",children:"Marvel Characters"}),Object(a.jsx)(m,{searchChange:this.onSearchChange}),Object(a.jsx)(j,{children:Object(a.jsx)(d,{characters:n})})]}):Object(a.jsx)("h1",{children:"Loading.."})}}]),c}(r.a.Component),g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};c(52);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),g()}},[[53,1,2]]]);
//# sourceMappingURL=main.ed77c808.chunk.js.map