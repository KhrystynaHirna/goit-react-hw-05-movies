"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{148:function(t,n,e){e.d(n,{SU:function(){return f},bI:function(){return m},sR:function(){return v},sv:function(){return l},wR:function(){return d}});var r=e(861),c=e(757),i=e.n(c),o="https://api.themoviedb.org/3/",a="797c8d09920f943adb703c8d278f5556";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function t(){var n,e,r,c=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},t.next=4,fetch(n,e);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function f(){return u("".concat(o,"trending/movie/day?api_key=").concat(a))}function m(t){return u("".concat(o,"search/movie?api_key=").concat(a,"&query=").concat(t))}function d(t){return u("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(a))}function l(t){return u("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(a))}function v(t){return u("".concat(o,"movie/").concat(t,"/actors?api_key=").concat(a))}},814:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(885),c=e(791),i=e(148),o=e(332),a="Home_title__5a5H3",u=e(184);function s(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1];return(0,c.useEffect)((function(){i.SU().then((function(t){return s(t.results)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{className:a,children:"Trending today"}),(0,u.jsx)(o.Z,{movies:e})]})}},332:function(t,n,e){e.d(n,{Z:function(){return f}});var r=e(501),c=e(871),i="ListItem_item__P+b9d",o="ListItem_link__2EyRJ",a=e(184);function u(t){var n=t.movie,e=(0,c.TH)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{className:i,children:(0,a.jsx)(r.rU,{to:"/movies/$movie.id",state:{from:e},className:o,children:n.title})})})}var s="MovieList_list__pRTMg";function f(t){var n=t.movies;return(0,a.jsx)(a.Fragment,{children:n&&(0,a.jsx)("ul",{className:s,children:n.map((function(t){return(0,a.jsx)(u,{movie:t},t.id)}))})})}}}]);
//# sourceMappingURL=home-view.bfac178a.chunk.js.map