(this.webpackJsonphackernews=this.webpackJsonphackernews||[]).push([[0],{22:function(e,t,n){e.exports=n(49)},27:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),s=n.n(o),c=(n(27),n(11)),i=n(2),u=n(10),l=n(4),h=n(5),m=n(7),S=n(6),p=n(8),v=n(19),f=n.n(v),y=n(3),d=(n(48),function e(t){var n=t.onClick,a=t.className,o=t.children;return e.defaultProps={className:""},r.a.createElement("button",{onClick:n,className:a,type:"button"},o)}),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.searchTerm,a=t.onTextChange,o=t.onSubmit,s=t.children;return r.a.createElement("form",{onSubmit:o},r.a.createElement("input",{type:"text",value:n,onChange:a,ref:function(t){return e.input=t}}),r.a.createElement("button",{type:"submit"},s))}}]),t}(a.Component),b=n(20),g=n.n(b),O=function(e){var t=e.sortKey,n=e.activeSortKey,a=e.onSort,o=e.children,s=g()("button-inline",{"button-active":t===n});return r.a.createElement(d,{onClick:function(){return a(t)},className:s},o)},T=function(e){var t=e.list,n=e.SORTS,a=e.sortKey,o=e.isSortReverse,s=e.onSort,c=e.onDismiss,i=n[a](t),u=o?i.reverse():i,l={width:"40%"},h={width:"30%"},m={width:"10%"};return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-header"},r.a.createElement("span",{style:l},r.a.createElement(O,{sortKey:"TITLE",onSort:s,activeSortKey:a},"Title")),r.a.createElement("span",{style:h},r.a.createElement(O,{sortKey:"AUTHOR",onSort:s,activeSortKey:a},"Author")),r.a.createElement("span",{style:m},r.a.createElement(O,{sortKey:"COMMENTS",onSort:s,activeSortKey:a},"Comments")),r.a.createElement("span",{style:m},r.a.createElement(O,{sortKey:"POINTS",onSort:s,activeSortKey:a},"Points")),r.a.createElement("span",{style:m},"Archive")),u.map((function(e){return r.a.createElement("div",{key:e.objectID,className:"table-row"},r.a.createElement("span",{style:l},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("span",{style:h},e.author),r.a.createElement("span",{style:m},e.num_comments),r.a.createElement("span",{style:m},e.points),r.a.createElement("span",{style:m},r.a.createElement(d,{onClick:function(){return c(e.objectID)},className:"button-inline"},"Dismiss")))})))},j=n(21),K=function(){return r.a.createElement("div",null,"Loading...")},N=function(e){return function(t){var n=t.isLoading,a=Object(j.a)(t,["isLoading"]);return n?r.a.createElement(K,null):r.a.createElement(e,a)}},k="https://hn.algolia.com/api/v1",w=("".concat(k).concat("/search","?").concat("query=").concat("redux","&").concat("page="),{NONE:function(e){return e},TITLE:function(e){return Object(y.sortBy)(e,"title")},AUTHOR:function(e){return Object(y.sortBy)(e,"author")},COMMENTS:function(e){return Object(y.sortBy)(e,"num_comments").reverse()},POINTS:function(e){return Object(y.sortBy)(e,"points").reverse()}}),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(S.a)(t).call(this)))._isMounted=!1,e.onDismiss=function(t){var n=e.state,a=n.searchKey,r=n.results,o=r[a],s=o.hits,c=o.page,l=s.filter((function(e){return e.objectID!==t}));e.setState({results:Object(u.a)({},r,Object(i.a)({},a,{hits:l,page:c}))})},e.onSort=function(t){var n=e.state.sortKey===t&&!e.state.isSortReverse;e.setState({sortKey:t,isSortReverse:n})},e.onSearchChange=function(t){e.setState({searchTerm:t.target.value})},e.onSearchSubmit=function(t){var n=e.state.searchTerm;e.setState({searchKey:n}),e.needsToSearchTopStories(n)&&e.fetchSearchTopStories(n),t.preventDefault()},e.setSearchTopStories=function(t){var n=t.hits,a=t.page,r=e.state,o=r.searchKey,s=r.results,l=s&&t[o]?s[o].hits:[],h=[].concat(Object(c.a)(l),Object(c.a)(n));e.setState({results:Object(u.a)({},s,Object(i.a)({},o,{hits:h,page:a})),isLoading:!1})},e.fetchSearchTopStories=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.setState({isLoading:!0}),f()("".concat(k).concat("/search","?").concat("query=").concat(t,"&").concat("page=").concat(n,"&").concat("hitsPerPage=").concat("100")).then((function(t){return e._isMounted&&e.setSearchTopStories(t.data)})).catch((function(t){return e._isMounted&&e.setState({error:t})}))},e.needsToSearchTopStories=function(t){return!e.state.results[t]},e.state={results:null,searchKey:"",searchTerm:"redux",error:null,isLoading:!1,sortKey:"NONE",isSortReverse:!1},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopStories(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state,n=t.results,a=t.searchTerm,o=t.searchKey,s=t.error,c=t.isLoading,i=t.sortKey,u=t.isSortReverse,l=n&&n[o]?n[o].page:0,h=n&&n[o]?n[o].hits:[],m=N(d);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"interactions"},r.a.createElement(E,{value:a,onTextChange:this.onSearchChange,onSubmit:this.onSearchSubmit},"Search")),s?r.a.createElement("div",{className:"interactions"},r.a.createElement("p",{style:{color:"red"}},"Something went wrong!")):r.a.createElement(T,{list:h,SORTS:w,sortKey:i,isSortReverse:u,onSort:this.onSort,onDismiss:this.onDismiss}),r.a.createElement("div",{className:"interactions"},r.a.createElement(m,{isLoading:c,onClick:function(){return e.fetchSearchTopStories(o,l+1)}},"More")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.6a8a3969.chunk.js.map