(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1009:function(e,a,t){"use strict";var n=t(2),l=t(5),r=t(0),c=t.n(r),i=(t(1),t(3)),o=t(9),s=c.a.forwardRef(function(e,a){var t=e.classes,r=e.className,o=e.dividers,s=void 0!==o&&o,m=Object(l.a)(e,["classes","className","dividers"]);return c.a.createElement("div",Object(n.a)({className:Object(i.a)(t.root,r,s&&t.dividers),ref:a},m))});a.a=Object(o.a)(function(e){return{root:{flex:"1 1 auto",padding:"8px 24px",WebkitOverflowScrolling:"touch",overflowY:"auto"},dividers:{borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}},{name:"MuiDialogContent"})(s)},1021:function(e,a,t){"use strict";var n=t(2),l=t(5),r=t(0),c=t.n(r),i=(t(1),t(3)),o=t(9),s=c.a.forwardRef(function(e,a){var t=e.disableSpacing,r=void 0!==t&&t,o=e.classes,s=e.className,m=Object(l.a)(e,["disableSpacing","classes","className"]);return c.a.createElement("div",Object(n.a)({className:Object(i.a)(o.root,s,!r&&o.spacing),ref:a},m))});a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},1250:function(e,a){e.exports=m,e.exports.parse=l,e.exports.compile=function(e,a){return r(l(e,a))},e.exports.tokensToFunction=r,e.exports.tokensToRegExp=s;var t="/",n=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function l(e,a){for(var l,r=[],o=0,s=0,m="",u=a&&a.delimiter||t,d=a&&a.whitelist||void 0,p=!1;null!==(l=n.exec(e));){var f=l[0],E=l[1],b=l.index;if(m+=e.slice(s,b),s=b+f.length,E)m+=E[1],p=!0;else{var v="",h=l[2],g=l[3],y=l[4],x=l[5];if(!p&&m.length){var j=m.length-1,N=m[j];(!d||d.indexOf(N)>-1)&&(v=N,m=m.slice(0,j))}m&&(r.push(m),m="",p=!1);var O="+"===x||"*"===x,A="?"===x||"*"===x,I=g||y,w=v||u;r.push({name:h||o++,prefix:v,delimiter:w,optional:A,repeat:O,pattern:I?i(I):"[^"+c(w===u?w:w+u)+"]+?"})}}return(m||s<e.length)&&r.push(m+e.substr(s)),r}function r(e){for(var a=new Array(e.length),t=0;t<e.length;t++)"object"===typeof e[t]&&(a[t]=new RegExp("^(?:"+e[t].pattern+")$"));return function(t,n){for(var l="",r=n&&n.encode||encodeURIComponent,c=0;c<e.length;c++){var i=e[c];if("string"!==typeof i){var o,s=t?t[i.name]:void 0;if(Array.isArray(s)){if(!i.repeat)throw new TypeError('Expected "'+i.name+'" to not repeat, but got array');if(0===s.length){if(i.optional)continue;throw new TypeError('Expected "'+i.name+'" to not be empty')}for(var m=0;m<s.length;m++){if(o=r(s[m],i),!a[c].test(o))throw new TypeError('Expected all "'+i.name+'" to match "'+i.pattern+'"');l+=(0===m?i.prefix:i.delimiter)+o}}else if("string"!==typeof s&&"number"!==typeof s&&"boolean"!==typeof s){if(!i.optional)throw new TypeError('Expected "'+i.name+'" to be '+(i.repeat?"an array":"a string"))}else{if(o=r(String(s),i),!a[c].test(o))throw new TypeError('Expected "'+i.name+'" to match "'+i.pattern+'", but got "'+o+'"');l+=i.prefix+o}}else l+=i}return l}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function s(e,a,n){for(var l=(n=n||{}).strict,r=!1!==n.start,i=!1!==n.end,s=n.delimiter||t,m=[].concat(n.endsWith||[]).map(c).concat("$").join("|"),u=r?"^":"",d=0;d<e.length;d++){var p=e[d];if("string"===typeof p)u+=c(p);else{var f=p.repeat?"(?:"+p.pattern+")(?:"+c(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;a&&a.push(p),p.optional?p.prefix?u+="(?:"+c(p.prefix)+"("+f+"))?":u+="("+f+")?":u+=c(p.prefix)+"("+f+")"}}if(i)l||(u+="(?:"+c(s)+")?"),u+="$"===m?"$":"(?="+m+")";else{var E=e[e.length-1],b="string"===typeof E?E[E.length-1]===s:void 0===E;l||(u+="(?:"+c(s)+"(?="+m+"))?"),b||(u+="(?="+c(s)+"|"+m+")")}return new RegExp(u,o(n))}function m(e,a,t){return e instanceof RegExp?function(e,a){if(!a)return e;var t=e.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)a.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return e}(e,a):Array.isArray(e)?function(e,a,t){for(var n=[],l=0;l<e.length;l++)n.push(m(e[l],a,t).source);return new RegExp("(?:"+n.join("|")+")",o(t))}(e,a,t):function(e,a,t){return s(l(e,t),a,t)}(e,a,t)}},2269:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t(7),i=t(174),o=t(16),s=t(131),m=t(848),u=t(80),d=t(41),p=t.n(d),f="[MAIL APP] GET MAILS",E="[MAIL APP] UPDATE MAILS",b="[MAILS] SELECT ALL MAILS",v="[MAILS] DESELECT ALL MAILS",h="[MAILS] TOGGLE IN SELECTED MAILS",g="[MAILS] SELECT MAILS BY PARAMETER",y="[MAILS] SET FOLDER ON SELECTED MAILS",x="[MAILS] TOGGLE LABEL ON SELECTED MAILS",j="[MAILS] SET SEARCH TEXT";function N(){return function(e,a){var t=a().mailApp.mails.routeParams;return p.a.get("/api/mail-app/mails",{params:t}).then(function(a){return e({type:E,payload:a.data})})}}function O(){return{type:b}}function A(){return{type:v}}function I(e,a){return{type:g,payload:{parameter:e,value:a}}}function w(e){return function(a,t){var n=t().mailApp.mails.selectedMailIds;return p.a.post("/api/mail-app/set-folder",{selectedMailIds:n,folderId:e}).then(function(e){return a({type:y}),a(N())})}}var S=t(10),C="[MAIL APP] GET MAIL",k="[MAIL APP] UPDATE MAIL",L="[MAIL APP] TOGGLE STAR MAIL",M="[MAIL APP] TOGGLE IMPORTANT MAIL";function T(e){var a=p.a.post("/api/mail-app/update-mail",e);return function(e){return a.then(function(a){return e({type:k,payload:a.data})})}}var P="[MAIL APP] GET FOLDERS";var R="[MAIL APP] GET LABELS";var D="[MAIL APP] GET FILTERS";var B=t(849),G=t(901),U=t(746),W=t(470),F=t(3),z=t(8),_=Object(W.a)(function(e){return{root:{display:"flex",alignItems:"center",height:21,borderRadius:2,padding:"0 6px",fontSize:11,backgroundColor:"rgba(0,0,0,.08);"},color:{width:8,height:8,marginRight:4,borderRadius:"50%"}}});var $=function(e){var a=_();return l.a.createElement("div",{className:Object(F.a)(a.root,e.className)},l.a.createElement("div",{className:a.color,style:{backgroundColor:e.color}}),l.a.createElement("div",null,e.title))},H=t(1250),J=Object(W.a)(function(e){return{mailItem:{borderBottom:"1px solid  "+e.palette.divider,"&.unread":{background:"rgba(0,0,0,0.03)"},"&.selected":{"&::after":{content:'""',position:"absolute",left:0,display:"block",height:"100%",width:3,backgroundColor:e.palette.primary.main}}},avatar:{backgroundColor:e.palette.primary[500]}}}),V=Object(u.h)(function(e){var a=Object(c.c)(),t=Object(c.d)(function(e){return e.mailApp.mails.selectedMailIds}),n=Object(c.d)(function(e){return e.mailApp.labels}),r=J(e),i=H.compile(e.match.path),o=t.length>0&&void 0!==t.find(function(a){return a===e.mail.id});return l.a.createElement(B.a,{dense:!0,button:!0,onClick:function(){return e.history.push(i(Object(S.a)({},e.match.params,{mailId:e.mail.id})))},className:Object(F.a)(r.mailItem,o&&"selected",!e.mail.read&&"unread","py-16 pl-0 pr-8 sm:pl-8 sm:pr-24")},l.a.createElement(G.a,{tabIndex:-1,disableRipple:!0,checked:o,onChange:function(){return a((t=e.mail.id,{type:h,mailId:t}));var t},onClick:function(e){return e.stopPropagation()}}),l.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden"},l.a.createElement("div",{className:"flex items-center justify-between px-16 pb-8"},l.a.createElement("div",{className:"flex items-center"},e.mail.from.avatar?l.a.createElement(U.a,{className:"mr-8",alt:e.mail.from.name,src:e.mail.from.avatar}):l.a.createElement(U.a,{className:Object(F.a)(r.avatar,"mr-8")},e.mail.from.name[0]),l.a.createElement(s.a,{variant:"subtitle1"},e.mail.from.name)),l.a.createElement(s.a,{variant:"subtitle1"},e.mail.time)),l.a.createElement("div",{className:"flex flex-col px-16 py-0"},l.a.createElement(s.a,{className:"truncate"},e.mail.subject),l.a.createElement(s.a,{color:"textSecondary",className:"truncate"},z.a.truncate(e.mail.message.replace(/<(?:.|\n)*?>/gm,""),{length:180}))),l.a.createElement("div",{className:"flex justify-end"},n&&e.mail.labels.map(function(e){return l.a.createElement($,{className:"mr-4",title:z.a.find(n,{id:e}).title,color:z.a.find(n,{id:e}).color,key:e})}))))});var Y=Object(u.h)(function(e){var a=Object(c.c)(),t=Object(c.d)(function(e){return e.mailApp.mails.entities}),i=Object(c.d)(function(e){return e.mailApp.mails.searchText}),u=Object(n.useState)(null),d=Object(o.a)(u,2),E=d[0],b=d[1];return Object(n.useEffect)(function(){a(function(e){var a=p.a.get("/api/mail-app/mails",{params:e});return function(t){return a.then(function(a){return t({type:f,routeParams:e,payload:a.data})})}}(e.match.params))},[a,e.match.params]),Object(n.useEffect)(function(){t&&b(function(){var e=Object.keys(t).map(function(e){return t[e]});return 0===i.length?e:r.B.filterArrayByString(e,i)}())},[t,i]),E?0===E.length?l.a.createElement(r.d,{delay:100},l.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},l.a.createElement(s.a,{color:"textSecondary",variant:"h5"},"There are no messages!"))):l.a.createElement(m.a,{className:"p-0"},l.a.createElement(r.e,{enter:{animation:"transition.slideUpBigIn"}},E.map(function(e){return l.a.createElement(V,{mail:e,key:e.id})}))):null}),q=t(910),X=t(465),K=t(889);var Q=Object(u.h)(function(e){var a=Object(c.c)(),t=Object(c.d)(function(e){return e.mailApp.mail}),i=Object(c.d)(function(e){return e.mailApp.labels}),m=Object(n.useState)(!1),u=Object(o.a)(m,2),d=u[0],f=u[1];return Object(n.useEffect)(function(){a(function(e){var a=p.a.get("/api/mail-app/mail",{params:e});return function(t){return a.then(function(a){return t({type:C,routeParams:e,payload:a.data})})}}(e.match.params))},[a,e.match.params]),t?l.a.createElement("div",{className:"p-16 sm:p-24"},l.a.createElement("div",{className:"flex items-center justify-between overflow-hidden"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement(r.d,{delay:100},l.a.createElement(s.a,{variant:"subtitle1",className:"flex"},t.subject)),i&&t.labels.length>0&&l.a.createElement("div",{className:"flex flex-wrap mt-8"},t.labels.map(function(e){return l.a.createElement($,{className:"mt-4 mr-4",title:z.a.find(i,{id:e}).title,color:z.a.find(i,{id:e}).color,key:e})})))),l.a.createElement(q.a,{className:"my-16"}),l.a.createElement(r.d,{animation:"transition.slideUpIn",delay:200},l.a.createElement("div",null,l.a.createElement("div",{className:"flex items-start justify-between"},l.a.createElement("div",{className:"flex items-center justify-start"},t.from.avatar?l.a.createElement(U.a,{className:"mr-8",alt:t.from.name,src:t.from.avatar}):l.a.createElement(U.a,{className:"mr-8"},t.from.name[0]),l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("span",null,t.from.name),l.a.createElement(s.a,{component:"div",color:"textSecondary",variant:"body1",className:"flex items-center justify-start"},l.a.createElement("div",null,"to"),l.a.createElement("div",{className:"ml-4"},t.to[0].name)))),l.a.createElement(X.a,null,l.a.createElement(K.a,null,"more_vert"))),l.a.createElement("div",{className:"my-16"},l.a.createElement(s.a,{color:"primary",className:"cursor-pointer underline mb-8",onClick:function(){f(!d)}},d?l.a.createElement("span",null,"Hide Details"):l.a.createElement("span",null,"Show Details")),d&&l.a.createElement("div",{className:"flex"},l.a.createElement(s.a,{variant:"body2",className:"flex flex-col"},l.a.createElement("span",null,"From:"),l.a.createElement("span",null,"To:"),l.a.createElement("span",null,"Date:")),l.a.createElement(s.a,{variant:"body2",color:"textSecondary",className:"pl-4 flex flex-col"},l.a.createElement("span",null,t.from.email),l.a.createElement("span",null,t.to[0].email),l.a.createElement("span",null,t.time)))),l.a.createElement(s.a,{variant:"body2",dangerouslySetInnerHTML:{__html:t.message}}),l.a.createElement(q.a,{className:"my-16"}),t.attachments&&l.a.createElement("div",null,l.a.createElement(s.a,{variant:"subtitle1",className:"mb-16"},l.a.createElement("span",null,"Attachments"),l.a.createElement("span",{className:"ml-4"},"(",t.attachments.length,")")),l.a.createElement("div",{className:"flex flex-wrap"},t.attachments.map(function(e){return l.a.createElement("div",{className:"w-192 pr-16 pb-16",key:e.fileName},l.a.createElement("img",{className:"w-full rounded-4",src:e.preview,alt:e.fileName}),l.a.createElement("div",{className:"flex flex-col"},l.a.createElement(s.a,{color:"primary",className:"underline cursor-pointer",onClick:function(e){return e.preventDefault()}},"View"),l.a.createElement(s.a,{color:"primary",className:"underline cursor-pointer",onClick:function(e){return e.preventDefault()}},"Download"),l.a.createElement(s.a,null,"(",e.size,")")))})))))):null}),Z=t(30),ee=t(314),ae=t(890);var te=function(e){var a=Object(c.c)(),t=Object(c.d)(function(e){return e.mailApp.mails.selectedMailIds}),r=Object(c.d)(function(e){return e.mailApp.mails.entities}),i=Object(c.d)(function(e){return e.mailApp.labels}),s=Object(c.d)(function(e){return e.mailApp.folders}),m=Object(n.useState)({selectMenu:null,foldersMenu:null,labelsMenu:null}),u=Object(o.a)(m,2),d=u[0],f=u[1];function E(e,a){f(Object(S.a)({},a,Object(Z.a)({},a,e.currentTarget)))}function b(e,a){f(Object(S.a)({},a,Object(Z.a)({},a,null)))}return l.a.createElement("div",{className:"flex flex-1 items-center sm:px-8"},l.a.createElement(G.a,{onChange:function(e){e.target.checked?a(O()):a(A())},checked:t.length===Object.keys(r).length&&t.length>0,indeterminate:t.length!==Object.keys(r).length&&t.length>0}),l.a.createElement(X.a,{className:"w-24","aria-label":"More","aria-owns":d.select?"select-menu":null,"aria-haspopup":"true",onClick:function(e){return E(e,"select")}},l.a.createElement(K.a,null,"arrow_drop_down")),l.a.createElement(ee.a,{id:"select-menu",anchorEl:d.select,open:Boolean(d.select),onClose:function(e){return b(0,"select")}},l.a.createElement(ae.a,{onClick:function(e){a(O()),b(0,"select")}},"All"),l.a.createElement(ae.a,{onClick:function(e){a(A()),b(0,"select")}},"None"),l.a.createElement(ae.a,{onClick:function(e){a(I("read",!0)),b(0,"select")}},"Read"),l.a.createElement(ae.a,{onClick:function(e){a(I("read",!1)),b(0,"select")}},"Unread"),l.a.createElement(ae.a,{onClick:function(e){a(I("starred",!0)),b(0,"select")}},"Starred"),l.a.createElement(ae.a,{onClick:function(e){a(I("starred",!1)),b(0,"select")}},"Unstarred"),l.a.createElement(ae.a,{onClick:function(e){a(I("important",!0)),b(0,"select")}},"Important"),l.a.createElement(ae.a,{onClick:function(e){a(I("important",!1)),b(0,"select")}},"Unimportant")),t.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"border-r-1 h-48 w-1 mx-12 my-0"}),l.a.createElement(X.a,{onClick:function(e){return a(w(4))},"aria-label":"Delete"},l.a.createElement(K.a,null,"delete")),l.a.createElement(X.a,{"aria-label":"More","aria-owns":d.folders?"folders-menu":null,"aria-haspopup":"true",onClick:function(e){return E(e,"folders")}},l.a.createElement(K.a,null,"folder")),l.a.createElement(ee.a,{id:"folders-menu",anchorEl:d.folders,open:Boolean(d.folders),onClose:function(e){return b(0,"folders")}},s.length>0&&s.map(function(e){return l.a.createElement(ae.a,{onClick:function(t){a(w(e.id)),b(0,"folders")},key:e.id},e.title)})),l.a.createElement(X.a,{"aria-label":"More","aria-owns":d.labels?"labels-menu":null,"aria-haspopup":"true",onClick:function(e){return E(e,"labels")}},l.a.createElement(K.a,null,"label")),l.a.createElement(ee.a,{id:"folders-menu",anchorEl:d.labels,open:Boolean(d.labels),onClose:function(e){return b(0,"labels")}},i.length>0&&i.map(function(e){return l.a.createElement(ae.a,{onClick:function(t){var n;a((n=e.id,function(e,a){var t=a().mailApp.mails.selectedMailIds;return p.a.post("/api/mail-app/toggle-label",{selectedMailIds:t,labelId:n}).then(function(a){return e({type:x}),e(N())})})),b(0,"labels")},key:e.id},e.title)}))))},ne=t(1250);var le=Object(u.h)(function(e){var a=Object(c.c)(),t=Object(c.d)(function(e){return e.mailApp.mail}),n=ne.compile(e.match.path),i=Object(S.a)({},e.match.params);delete i.mailId;var o=n(i);return t?l.a.createElement("div",{className:"flex flex-1 items-center justify-between overflow-hidden sm:px-16"},l.a.createElement(X.a,{onClick:function(){return e.history.push(o)}},l.a.createElement(K.a,null,"arrow_back")),l.a.createElement("div",{className:"flex items-center justify-start","aria-label":"Toggle star"},l.a.createElement(r.d,{animation:"transition.expandIn",delay:100},l.a.createElement(X.a,{onClick:function(){return a(function(e){var a=Object(S.a)({},e,{starred:!e.starred});return function(e){return e({type:L}),e(T(a))}}(t))}},t.starred?l.a.createElement(K.a,null,"star"):l.a.createElement(K.a,null,"star_border"))),l.a.createElement(r.d,{animation:"transition.expandIn",delay:100},l.a.createElement(X.a,{onClick:function(){return a(function(e){var a=Object(S.a)({},e,{important:!e.important});return function(e){return e({type:M}),e(T(a))}}(t))}},t.important?l.a.createElement(K.a,null,"label"):l.a.createElement(K.a,null,"label_outline"))))):null}),re=t(153),ce=t(902),ie=t(320),oe=t(891);var se=function(e){var a=Object(c.c)(),t=Object(c.d)(function(e){return e.mailApp.mails.searchText}),n=Object(c.d)(function(e){return e.fuse.settings.mainTheme});return l.a.createElement(oe.a,{theme:n},l.a.createElement("div",{className:"flex flex-1"},l.a.createElement(re.a,{className:"flex items-center w-full h-48 sm:h-56 p-16 pl-4 md:pl-16 rounded-8 ",elevation:1},l.a.createElement(ce.a,{lgUp:!0},l.a.createElement(X.a,{onClick:function(a){return e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},l.a.createElement(K.a,null,"menu"))),l.a.createElement(K.a,{color:"action"},"search"),l.a.createElement(ie.a,{placeholder:"Search",className:"pl-16",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return a({type:j,searchText:e.target.value.toLowerCase()})}}))))},me=t(896),ue={creapond:"johndoe@creapond.com",withinpixels:"johndoe@withinpixels.com"};var de=function(e){var a=Object(n.useState)("creapond"),t=Object(o.a)(a,2),c=t[0],i=t[1];return l.a.createElement("div",{className:"flex flex-col justify-center h-full p-24"},l.a.createElement("div",{className:"flex items-center flex-1"},l.a.createElement(r.d,{animation:"transition.expandIn",delay:300},l.a.createElement(K.a,{className:"mr-16 text-32"},"mail")),l.a.createElement(r.d,{animation:"transition.slideLeftIn",delay:300},l.a.createElement("span",{className:"text-24"},"Mailbox"))),l.a.createElement(r.d,{animation:"transition.slideUpIn",delay:300},l.a.createElement(me.a,{id:"account-selection",select:!0,label:c,value:c,onChange:function(e){i(e.target.value)},placeholder:"Select Account",margin:"normal"},Object.keys(ue).map(function(e,a){return l.a.createElement(ae.a,{key:e,value:e},ue[e])}))))},pe=t(909),fe=t(893),Ee=t(899),be=t(917),ve=t(914),he=t(900),ge=t(1009),ye=t(1021),xe=t(134),je=Object(W.a)({root:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.08)",border:"1px solid rgba(0, 0, 0, 0.16)",paddingLeft:16,marginBottom:8,borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center"},filename:{fontWeight:600},size:{marginLeft:8,fontWeight:300}});var Ne=function(e){var a=je();return l.a.createElement("div",{className:Object(F.a)(a.root,e.className)},l.a.createElement("div",{className:"flex"},l.a.createElement(s.a,{variant:"caption",className:a.filename},e.fileName),l.a.createElement(s.a,{variant:"caption",className:a.size},"(",e.size,")")),l.a.createElement(X.a,null,l.a.createElement(K.a,{className:"text-16"},"close")))};var Oe=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(xe.b)({from:"johndoe@creapond.com",to:"",cc:"",bcc:"",subject:"",message:""}),i=c.form,m=c.handleChange;return l.a.createElement("div",{className:"p-24"},l.a.createElement(Ee.a,{variant:"contained",color:"primary",className:"w-full",onClick:function(){r(!0)}},"COMPOSE"),l.a.createElement(be.a,{open:t,onClose:function(){r(!1)},"aria-labelledby":"form-dialog-title"},l.a.createElement(ve.a,{position:"static"},l.a.createElement(he.a,{className:"flex w-full"},l.a.createElement(s.a,{variant:"subtitle1",color:"inherit"},"New Message"))),l.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),r(!1)},className:"flex flex-col"},l.a.createElement(ge.a,{classes:{root:"p-16 pb-0 sm:p-24 sm:pb-0"}},l.a.createElement(me.a,{className:"mt-8 mb-16",label:"From",id:"from",name:"from",value:i.from,onChange:m,variant:"outlined",fullWidth:!0,disabled:!0}),l.a.createElement(me.a,{className:"mt-8 mb-16",label:"To",autoFocus:!0,id:"to",name:"to",value:i.to,onChange:m,variant:"outlined",fullWidth:!0,required:!0}),l.a.createElement(me.a,{className:"mt-8 mb-16",label:"Cc",id:"cc",name:"cc",value:i.cc,onChange:m,variant:"outlined",fullWidth:!0}),l.a.createElement(me.a,{className:"mt-8 mb-16",label:"Bcc",id:"bcc",name:"bcc",value:i.bcc,onChange:m,variant:"outlined",fullWidth:!0}),l.a.createElement(me.a,{className:"mt-8 mb-16",label:"Subject",id:"subject",name:"subject",value:i.subject,onChange:m,variant:"outlined",fullWidth:!0}),l.a.createElement(me.a,{className:"mt-8 mb-16",id:"message",name:"message",onChange:m,value:i.message,label:"Message",type:"text",multiline:!0,rows:5,variant:"outlined",fullWidth:!0}),l.a.createElement("div",{className:"pt-8"},l.a.createElement(Ne,{fileName:"attachment-2.doc",size:"12 kb"}),l.a.createElement(Ne,{fileName:"attachment-1.jpg",size:"350 kb"}))),l.a.createElement(ye.a,{className:"justify-between pl-8 sm:pl-16"},l.a.createElement("div",null,l.a.createElement(Ee.a,{variant:"contained",color:"primary",type:"submit"},"Send"),l.a.createElement(X.a,null,l.a.createElement(K.a,null,"attach_file"))),l.a.createElement(X.a,{onClick:function(){r(!1)}},l.a.createElement(K.a,null,"delete"))))))},Ae=Object(W.a)(function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText+"!important",pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16,marginRight:16}}}});var Ie=function(e){var a=Object(c.d)(function(e){return e.mailApp.folders}),t=Object(c.d)(function(e){return e.mailApp.labels}),n=Object(c.d)(function(e){return e.mailApp.filters}),i=Ae();return l.a.createElement(r.d,{animation:"transition.slideUpIn",delay:400},l.a.createElement("div",{className:"flex-auto border-l-1"},l.a.createElement(Oe,null),l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(pe.a,{className:i.listSubheader,disableSticky:!0},"FOLDERS"),a.length>0&&a.map(function(e){return l.a.createElement(B.a,{button:!0,component:r.C,to:"/apps/mail/"+e.handle,key:e.id,activeClassName:"active",className:i.listItem},l.a.createElement(K.a,{className:"list-item-icon",color:"action"},e.icon),l.a.createElement(fe.a,{primary:e.title,disableTypography:!0}))})),l.a.createElement(m.a,null,l.a.createElement(pe.a,{className:i.listSubheader,disableSticky:!0},"FILTERS"),n.length>0&&n.map(function(e){return l.a.createElement(B.a,{button:!0,component:r.C,to:"/apps/mail/filter/"+e.handle,activeClassName:"active",className:i.listItem,key:e.id},l.a.createElement(K.a,{className:"list-item-icon",color:"action"},e.icon),l.a.createElement(fe.a,{primary:e.title,disableTypography:!0}))})),l.a.createElement(m.a,null,l.a.createElement(pe.a,{className:"pr-24 pl-24",disableSticky:!0},"LABELS"),t&&t.map(function(e){return l.a.createElement(B.a,{button:!0,component:r.C,to:"/apps/mail/label/"+e.handle,key:e.id,className:i.listItem},l.a.createElement(K.a,{className:"list-item-icon",style:{color:e.color},color:"action"},"label"),l.a.createElement(fe.a,{primary:e.title,disableTypography:!0}))})))))},we=t(46),Se=t(11),Ce={entities:[],routeParams:{},selectedMailIds:[],searchText:""},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case f:return Object(S.a)({},e,{entities:z.a.keyBy(a.payload,"id"),searchText:"",routeParams:a.routeParams});case E:return Object(S.a)({},e,{entities:z.a.keyBy(a.payload,"id")});case b:var t=Object.keys(e.entities).map(function(a){return e.entities[a]}).map(function(e){return e.id});return Object(S.a)({},e,{selectedMailIds:t});case v:return Object(S.a)({},e,{selectedMailIds:[]});case g:var n=a.payload,l=Object.keys(e.entities).map(function(a){return e.entities[a]}).filter(function(e){return e[n.parameter]===n.value}).map(function(e){return e.id});return Object(S.a)({},e,{selectedMailIds:l});case h:var r=a.mailId,c=Object(Se.a)(e.selectedMailIds);return c=void 0!==c.find(function(e){return e===r})?c.filter(function(e){return e!==r}):[].concat(Object(Se.a)(c),[r]),Object(S.a)({},e,{selectedMailIds:c});case j:return Object(S.a)({},e,{searchText:a.searchText});default:return e}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"[MAIL APP] GET MAIL":case k:return Object(S.a)({},a.payload);default:return e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case P:return Object(Se.a)(a.payload);default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R:return Object(Se.a)(a.payload);default:return e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case D:return Object(Se.a)(a.payload);default:return e}},Re=Object(we.d)({mails:ke,mail:Le,folders:Me,labels:Te,filters:Pe});a.default=Object(i.a)("mailApp",Re)(function(e){var a=Object(c.c)(),t=Object(n.useRef)(null);return Object(n.useEffect)(function(){a(function(){var e=p.a.get("/api/mail-app/filters");return function(a){return e.then(function(e){return a({type:D,payload:e.data})})}}()),a(function(){var e=p.a.get("/api/mail-app/folders");return function(a){return e.then(function(e){return a({type:P,payload:e.data})})}}()),a(function(){var e=p.a.get("/api/mail-app/labels");return function(a){return e.then(function(e){return a({type:R,payload:e.data})})}}())},[a]),l.a.createElement(r.r,{classes:{root:"w-full",content:"flex flex-col",header:"items-center min-h-72 h-72 sm:h-136 sm:min-h-136"},header:l.a.createElement(se,{pageLayout:t}),contentToolbar:e.match.params.mailId?l.a.createElement(le,null):l.a.createElement(te,null),content:e.match.params.mailId?l.a.createElement(Q,null):l.a.createElement(Y,null),leftSidebarHeader:l.a.createElement(de,null),leftSidebarContent:l.a.createElement(Ie,null),ref:t,innerScroll:!0})})}}]);