(this["webpackJsonpreact-youtube"]=this["webpackJsonpreact-youtube"]||[]).push([[0],{1:function(e,c,s){e.exports={container:"side_menu_container__2Um71",iconCover:"side_menu_iconCover__37Y8c",icons:"side_menu_icons__29rJW",sideText:"side_menu_sideText__PwZ-m",sideIcons:"side_menu_sideIcons__2Mlux"}},10:function(e,c,s){e.exports={app:"App_app__360Wb",content:"App_content__2dJP6",detail:"App_detail__2KNrT",list:"App_list__dWKRa"}},12:function(e,c,s){e.exports={detail:"video_detail_detail__sHLy-",description:"video_detail_description__3kX6c"}},28:function(e,c,s){e.exports={video:"video_list_video__2UIYs"}},36:function(e,c,s){},6:function(e,c,s){e.exports={header:"search_header_header__3upRa",logo:"search_header_logo__1mUuF",img:"search_header_img__-pFyX",title:"search_header_title__3LCuE",center:"search_header_center__3I-sl",input:"search_header_input__3dz_i",button:"search_header_button__TRNA0",buttonImg:"search_header_buttonImg__3J75v",micDiv:"search_header_micDiv__3YZ8E",icons:"search_header_icons__TIiZo"}},60:function(e,c,s){"use strict";s.r(c);var i=s(3),a=s.n(i),t=s(27),n=s.n(t),r=(s(36),s(16)),l=s(6),d=s.n(l),o=s(5),j=s(4),b=s(0),h=Object(i.memo)((function(e){var c=e.onSearch,s=Object(i.useRef)(),a=function(){var e=s.current.value;c(e)};return Object(b.jsxs)("header",{className:d.a.header,children:[Object(b.jsxs)("div",{className:d.a.logo,onClick:function(){document.location.href="/"},children:[Object(b.jsx)("img",{className:d.a.img,src:"/images/logo.png",alt:"logo"}),Object(b.jsx)("h1",{className:d.a.title,children:"YouTube"})]}),Object(b.jsxs)("div",{className:d.a.center,children:[Object(b.jsx)("input",{ref:s,className:d.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&a()}}),Object(b.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){a()},children:Object(b.jsx)(j.a,{icon:o.j,className:d.a.buttonImg})}),Object(b.jsx)("div",{className:d.a.micDiv,children:Object(b.jsx)(j.a,{icon:o.h,className:d.a.micro})})]}),Object(b.jsxs)("div",{className:d.a.icons,children:[Object(b.jsx)("p",{children:Object(b.jsx)(j.a,{icon:o.p,className:d.a.video})}),Object(b.jsx)("p",{children:Object(b.jsx)(j.a,{icon:o.l,className:d.a.th})}),Object(b.jsx)("p",{children:Object(b.jsx)(j.a,{icon:o.b,className:d.a.bell})}),Object(b.jsx)("p",{children:Object(b.jsx)(j.a,{icon:o.n,className:d.a.bell})})]})]})})),m=s(8),u=s.n(m),x=Object(i.memo)((function(e){var c=e.video,s=e.video.snippet,i=e.onVideoClick,a="list"===e.display?u.a.list:u.a.grid;return Object(b.jsx)("li",{className:"".concat(u.a.container," ").concat(a),onClick:function(){return i(c)},children:Object(b.jsxs)("div",{className:u.a.video,children:[Object(b.jsx)("img",{className:u.a.thumbnail,src:s.thumbnails.medium.url,alt:"video thumbnail"}),Object(b.jsxs)("div",{className:u.a.metadata,children:[Object(b.jsx)("p",{className:u.a.title,children:s.title}),Object(b.jsx)("p",{className:u.a.channel,children:s.channelTitle})]})]})})})),O=s(28),_=s.n(O),v=function(e){var c=e.videos,s=e.onVideoClick,i=e.display;return Object(b.jsx)("ul",{className:_.a.video,children:c.map((function(e){return Object(b.jsx)(x,{video:e,onVideoClick:s,display:i},e.id)}))})},p=s(10),N=s.n(p),f=s(12),y=s.n(f),g=function(e){var c=e.video,s=e.video.snippet;return Object(b.jsxs)("section",{className:y.a.detail,children:[Object(b.jsx)("iframe",{title:c.title,className:y.a.video,type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(c.id),frameBorder:"0",allowFullScreen:!0}),Object(b.jsx)("h2",{children:s.title}),Object(b.jsx)("h3",{children:s.channelTitle}),Object(b.jsx)("pre",{className:y.a.description,children:s.description})]})},C=s(1),I=s.n(C),k=function(){return Object(b.jsx)("div",{className:I.a.container,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.g})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\ud648"})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.e})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\ud0d0\uc0c9"})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.c})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\uad6c\ub3c5"})})]})}),Object(b.jsx)("hr",{}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.a})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\ubcf4\uad00\ud568"})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.f})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\uc2dc\uccad\uae30\ub85d"})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.i})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\ub0b4 \ub3d9\uc601\uc0c1"})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.d})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\ub098\uc911\uc5d0 \ubcfc \ub3d9\uc601\uc0c1"})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.m})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\uc88b\uc544\uc694 \ud45c\uc2dc\ud55c \ub3d9\uc601\uc0c1"})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.k})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\uc0dd\ubc29\uc1a1 \uc911 \ub3d9\uc601\uc0c1"})})]})}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:I.a.iconCover,children:Object(b.jsx)("h3",{children:"\uad6c\ub3c5"})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:I.a.iconCover,children:[Object(b.jsx)("div",{className:I.a.icons,children:Object(b.jsx)(j.a,{className:I.a.sideIcons,icon:o.o})}),Object(b.jsx)("div",{className:I.a.sideText,children:Object(b.jsx)("p",{children:"\ub4dc\ub9bc \ucf54\ub529 by \uc5d8\ub9ac"})})]})})]})})},T=function(e){var c=e.youtube,s=Object(i.useState)([]),a=Object(r.a)(s,2),t=a[0],n=a[1],l=Object(i.useState)(null),d=Object(r.a)(l,2),o=d[0],j=d[1],m=Object(i.useCallback)((function(e){j(null),c.search(e).then((function(e){return n(e)}))}),[c]);return Object(i.useEffect)((function(){c.mostPopular().then((function(e){return n(e)}))}),[c]),Object(b.jsxs)("div",{className:N.a.app,children:[Object(b.jsx)(h,{onSearch:m}),Object(b.jsxs)("section",{className:N.a.content,children:[Object(b.jsx)(k,{}),o&&Object(b.jsx)("div",{className:N.a.detail,children:Object(b.jsx)(g,{video:o})}),Object(b.jsx)("div",{className:N.a.list,children:Object(b.jsx)(v,{videos:t,onVideoClick:function(e){j(e)},display:o?"list":"grid"})})]})]})},w=s(17),S=s(11),A=s.n(S),R=s(15),J=s(29),P=s(30),U=s(31),E=s.n(U),V=new(function(){function e(c){Object(J.a)(this,e),this.youtube=E.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:c}})}return Object(P.a)(e,[{key:"mostPopular",value:function(){var e=Object(R.a)(A.a.mark((function e(){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25,regionCode:"kr"}});case 2:return c=e.sent,e.abrupt("return",c.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(R.a)(A.a.mark((function e(c){var s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,q:c,type:"video"}});case 2:return s=e.sent,e.abrupt("return",s.data.items.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(c){return e.apply(this,arguments)}}()}]),e}())("AIzaSyCnl-WV_Uf54AlLXIRTa1AibphFX09RfVE");n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(T,{youtube:V})}),document.getElementById("root"))},8:function(e,c,s){e.exports={container:"video_item_container__34ZAJ",grid:"video_item_grid__1J8P7",list:"video_item_list__GUpnd",video:"video_item_video__34USQ",thumbnail:"video_item_thumbnail__3HOPl",metadata:"video_item_metadata__SHi_L",title:"video_item_title__2nJat",channel:"video_item_channel__1mzFf"}}},[[60,1,2]]]);
//# sourceMappingURL=main.edb83415.chunk.js.map