(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{2273:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(131),s=t(20),c=t(7),m=t(10),o=t(16),d=t(899),i=t(470),p=t(211),u=t(891),f=t(229),E=t(8),w=Object(i.a)(function(e){return{root:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)"}}});var v=r.a.memo(function(e){var a=Object(c.d)(function(e){return e.fuse.settings.mainThemeDark}),t=w(e),i=Object(p.a)(),v=Object(l.useState)("2017"),x=Object(o.a)(v,2),b=x[0],N=x[1],g=E.a.merge({},e.data);return r.a.createElement(u.a,{theme:a},r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:"container relative p-16 sm:p-24 flex flex-row justify-between items-center"},r.a.createElement(s.d,{delay:100},r.a.createElement("div",{className:"flex-col"},r.a.createElement(n.a,{className:"h2",color:"textPrimary"},"Visitors"),r.a.createElement(n.a,{className:"h5",color:"textSecondary"},"Unique visitors by month"))),r.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(g.datasets).map(function(e){return r.a.createElement(d.a,{key:e,className:"py-8 px-12",size:"small",onClick:function(){return N(e)},disabled:e===b},e)}))),r.a.createElement("div",{className:"container relative h-200 sm:h-256 pb-16"},r.a.createElement(f.f,{data:{labels:g.labels,datasets:g.datasets[b].map(function(e){return Object(m.a)({},e,{borderColor:i.palette.secondary.main,backgroundColor:i.palette.secondary.main,pointBackgroundColor:i.palette.secondary.dark,pointHoverBackgroundColor:i.palette.secondary.main,pointBorderColor:i.palette.secondary.contrastText,pointHoverBorderColor:i.palette.secondary.contrastText})})},options:g.options}))))}),x=t(913),b=t(889);var N=r.a.memo(function(e){var a=Object(p.a)();return r.a.createElement(x.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},r.a.createElement("div",{className:"pr-16"},r.a.createElement(n.a,{className:"h3",color:"textSecondary"},"Conversion"),r.a.createElement(n.a,{className:"text-56 font-300 leading-none mt-8"},e.data.conversion.value)),r.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},r.a.createElement("div",{className:"flex flex-row items-center"},e.data.conversion.ofTarget>0&&r.a.createElement(b.a,{className:"text-green mr-4"},"trending_up"),e.data.conversion.ofTarget<0&&r.a.createElement(b.a,{className:"text-red mr-4"},"trending_down"),r.a.createElement(n.a,null,e.data.conversion.ofTarget,"%")),r.a.createElement(n.a,{className:"ml-4 whitespace-no-wrap"},"of target"))),r.a.createElement("div",{className:"h-96 w-100-p"},r.a.createElement(f.a,{data:{labels:e.data.labels,datasets:e.data.datasets.map(function(e){return Object(m.a)({},e,{borderColor:a.palette.secondary.main,backgroundColor:a.palette.secondary.main})})},options:e.data.options})))});var g=r.a.memo(function(e){var a=Object(p.a)();return r.a.createElement(x.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"p-16 pb-0 flex flex-row items-end flex-wrap"},r.a.createElement("div",{className:"pr-16"},r.a.createElement(n.a,{className:"h3",color:"textSecondary"},"Impressions"),r.a.createElement(n.a,{className:"text-56 font-300 leading-none mt-8"},e.data.impressions.value)),r.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},r.a.createElement("div",{className:"flex flex-row items-center"},e.data.impressions.ofTarget>0&&r.a.createElement(b.a,{className:"text-green mr-4"},"trending_up"),e.data.impressions.ofTarget<0&&r.a.createElement(b.a,{className:"text-red mr-4"},"trending_down"),r.a.createElement(n.a,null,e.data.impressions.ofTarget,"%")),r.a.createElement(n.a,{className:"ml-4 whitespace-no-wrap"},"of target"))),r.a.createElement("div",{className:"h-96 w-100-p"},r.a.createElement(f.f,{data:{labels:e.data.labels,datasets:e.data.datasets.map(function(e){return Object(m.a)({},e,{borderColor:a.palette.secondary.main})})},options:e.data.options})))});var y=r.a.memo(function(e){var a=Object(p.a)();return r.a.createElement(x.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"p-16 pb-0 flex flex-row items-end flex-wrap"},r.a.createElement("div",{className:"pr-16"},r.a.createElement(n.a,{className:"h3",color:"textSecondary"},"Visits"),r.a.createElement(n.a,{className:"text-56 font-300 leading-none mt-8"},e.data.visits.value)),r.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},r.a.createElement("div",{className:"flex flex-row items-center"},e.data.visits.ofTarget>0&&r.a.createElement(b.a,{className:"text-green mr-4"},"trending_up"),e.data.visits.ofTarget<0&&r.a.createElement(b.a,{className:"text-red mr-4"},"trending_down"),r.a.createElement(n.a,null,e.data.visits.ofTarget,"%")),r.a.createElement(n.a,{className:"ml-4 whitespace-no-wrap"},"of target"))),r.a.createElement("div",{className:"h-96 w-100-p"},r.a.createElement(f.a,{data:{labels:e.data.labels,datasets:e.data.datasets.map(function(e){return Object(m.a)({},e,{borderColor:a.palette.error.main,backgroundColor:a.palette.error.main})})},options:e.data.options})))});var h=r.a.memo(function(e){var a=Object(p.a)(),t=Object(l.useState)("today"),s=Object(o.a)(t,2),c=s[0],i=s[1],u=E.a.merge({},e.data);return r.a.createElement(x.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"relative p-24 flex flex-row items-center justify-between"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement(n.a,{className:"h3 sm:h2"},"Visitors & Page views")),r.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(u.datasets).map(function(e){return r.a.createElement(d.a,{key:e,className:"py-8 px-12",size:"small",onClick:function(){return i(e)},disabled:e===c},e)}))),r.a.createElement(n.a,{className:"relative h-200 sm:h-320 sm:pb-16"},r.a.createElement(f.f,{data:{labels:u.labels,datasets:u.datasets[c].map(function(e,t){var l=a.palette[0===t?"primary":"secondary"];return Object(m.a)({},e,{borderColor:l.main,backgroundColor:l.main,pointBackgroundColor:l.dark,pointHoverBackgroundColor:l.main,pointBorderColor:l.contrastText,pointHoverBorderColor:l.contrastText})})},options:u.options})))}),j=t(895),O=t(1159),k=t.n(O);function C(e){return r.a.createElement(j.a,{title:e.text,placement:"top"},r.a.createElement(b.a,{className:"text-red"},"place"))}var T=function(e){return r.a.createElement(x.a,{className:"w-full h-512 rounded-8 shadow-none border-1"},r.a.createElement(k.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:1,defaultCenter:[17.308688,7.03125],options:{styles:e.data.styles}},e.data.markers.map(function(e){return r.a.createElement(C,{key:e.label,text:e.label,lat:e.lat,lng:e.lng})})))},S=t(910),_=t(462),A=t(471),B=t(890);var D=r.a.memo(function(e){var a=Object(p.a)(),t=Object(l.useState)("Today"),s=Object(o.a)(t,2),c=s[0],i=s[1],u=E.a.merge({},e.data);return r.a.createElement(x.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"p-16"},r.a.createElement(n.a,{className:"h1 font-300"},"Sessions by device")),r.a.createElement("div",{className:"h-224 relative"},r.a.createElement(f.d,{data:{labels:u.labels,datasets:u.datasets[c].map(function(e){return Object(m.a)({},e,{borderColor:a.palette.divider,backgroundColor:[a.palette.primary.dark,a.palette.primary.main,a.palette.primary.light],hoverBackgroundColor:[a.palette.secondary.dark,a.palette.secondary.main,a.palette.secondary.light]})})},options:u.options})),r.a.createElement("div",{className:"p-16 flex flex-row items-center justify-center"},u.labels.map(function(e,a){return r.a.createElement("div",{key:e,className:"px-16 flex flex-col items-center"},r.a.createElement(n.a,{className:"h4",color:"textSecondary"},e),r.a.createElement(n.a,{className:"h2 font-300 py-8"},u.datasets[c][0].data[a],"%"),r.a.createElement("div",{className:"flex flex-row items-center justify-center"},u.datasets[c][0].change[a]<0&&r.a.createElement(b.a,{className:"text-18 pr-4 text-red"},"arrow_downward"),u.datasets[c][0].change[a]>0&&r.a.createElement(b.a,{className:"text-18 pr-4 text-green"},"arrow_upward"),r.a.createElement("div",{className:"h5"},u.datasets[c][0].change[a],"%")))})),r.a.createElement(S.a,{className:"mx-16"}),r.a.createElement("div",{className:"p-16 flex flex-row items-center justify-between"},r.a.createElement("div",null,r.a.createElement(_.a,{className:""},r.a.createElement(A.a,{value:c,onChange:function(e){return i(e.target.value)}},Object.keys(u.datasets).map(function(e){return r.a.createElement(B.a,{key:e,value:e},e)})))),r.a.createElement(d.a,{size:"small"},"OVERVIEW")))}),H=t(914),I=t(465),W=t(921),P=t(915);var J=r.a.memo(function(e){var a=Object(p.a)(),t=Object(l.useState)(0),s=Object(o.a)(t,2),c=s[0],d=s[1];return r.a.createElement(x.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement(H.a,{position:"static"},r.a.createElement("div",{className:"p-16 pr-4 flex flex-row items-center justify-between"},r.a.createElement("div",{className:"pr-16"},r.a.createElement(n.a,{className:"h1 font-300",color:"inherit"},"Sales"),r.a.createElement(n.a,{className:"h5",color:"inherit"},"Lifetime sum of your sales")),r.a.createElement("div",null,r.a.createElement(I.a,{"aria-label":"more",color:"inherit"},r.a.createElement(b.a,null,"more_vert")))),r.a.createElement("div",{className:"p-16 pt-8 flex flex-row justify-between items-end"},r.a.createElement(n.a,{className:"text-48 font-300 leading-none",color:"inherit"},e.data.today),r.a.createElement("div",{className:"flex flex-row items-center"},e.data.change.value>0&&r.a.createElement(b.a,{className:"text-green"},"trending_up"),e.data.change.value<0&&r.a.createElement(b.a,{className:"text-red"},"trending_down"),r.a.createElement("div",{className:"ml-8"},e.data.change.value,"(",e.data.change.percentage,"%)"))),r.a.createElement(W.a,{value:c,onChange:function(e,a){return d(a)},variant:"fullWidth"},r.a.createElement(P.a,{label:"1Day",className:"min-w-0"}),r.a.createElement(P.a,{label:"1Week",className:"min-w-0"}),r.a.createElement(P.a,{label:"1Month",className:"min-w-0"}))),r.a.createElement(f.f,{data:{labels:e.data.labels,datasets:e.data.datasets[c].map(function(e){return Object(m.a)({},e,{borderColor:a.palette.secondary.main})})},options:e.data.options}))});var V=r.a.memo(function(e){return r.a.createElement(x.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"p-16 pr-4 flex flex-row items-center justify-between"},r.a.createElement(n.a,{className:"h1 pr-16"},"Top campaigns"),r.a.createElement("div",null,r.a.createElement(I.a,{"aria-label":"more"},r.a.createElement(b.a,null,"more_vert")))),r.a.createElement("table",{className:"simple clickable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{className:"text-right"},"Clicks"),r.a.createElement("th",{className:"text-right"},"Conv"))),r.a.createElement("tbody",null,e.data.rows.map(function(e){return r.a.createElement("tr",{key:e.title},r.a.createElement("td",null,e.title),r.a.createElement("td",{className:"text-right"},e.clicks),r.a.createElement("td",{className:"text-right"},e.conversion))}))),r.a.createElement(S.a,{className:"card-divider w-full"}),r.a.createElement("div",{className:"p-8 pt-16 flex flex-row items-center"},r.a.createElement(d.a,null,"GO TO CAMPAIGNS")))}),z=t(174),G=t(41),U=t.n(G),L="[ANALYTICS DASHBOARD APP] GET WIDGETS";var M=t(46),R={data:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case L:return Object(m.a)({},e,{data:Object(m.a)({},a.payload)});default:return e}},Y=Object(M.d)({widgets:K});a.default=Object(z.a)("analyticsDashboardApp",Y)(function(){var e=Object(c.c)(),a=Object(c.d)(function(e){return e.analyticsDashboardApp.widgets.data});return Object(l.useEffect)(function(){e(function(){var e=U.a.get("/api/analytics-dashboard-app/widgets");return function(a){return e.then(function(e){return a({type:L,payload:e.data})})}}())},[e]),a?r.a.createElement("div",{className:"w-full"},r.a.createElement(v,{data:a.widget1}),r.a.createElement(s.d,{animation:"transition.slideUpIn",delay:200},r.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},r.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},r.a.createElement(s.d,{delay:600},r.a.createElement(n.a,{className:"p-16 pb-8 text-18 font-300"},"How are your active users trending over time?")),r.a.createElement("div",{className:"flex flex-col sm:flex sm:flex-row pb-32"},r.a.createElement("div",{className:"widget flex w-full sm:w-1/3 p-16"},r.a.createElement(N,{data:a.widget2})),r.a.createElement("div",{className:"widget flex w-full sm:w-1/3 p-16"},r.a.createElement(g,{data:a.widget3})),r.a.createElement("div",{className:"widget w-full sm:w-1/3 p-16"},r.a.createElement(y,{data:a.widget4}))),r.a.createElement(s.d,{delay:600},r.a.createElement(n.a,{className:"px-16 pb-8 text-18 font-300"},"How many pages your users visit?")),r.a.createElement("div",{className:"widget w-full p-16 pb-32"},r.a.createElement(h,{data:a.widget5})),r.a.createElement(s.d,{delay:600},r.a.createElement(n.a,{className:"px-16 pb-8 text-18 font-300"},"Where are your users?")),r.a.createElement("div",{className:"widget w-full p-16 pb-32"},r.a.createElement(T,{data:a.widget6}))),r.a.createElement("div",{className:"flex flex-wrap w-full md:w-320 pt-16"},r.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},r.a.createElement(s.d,{delay:600},r.a.createElement(n.a,{className:"px-16 pb-8 text-18 font-300"},"What are your top devices?")),r.a.createElement("div",{className:"widget w-full p-16"},r.a.createElement(D,{data:a.widget7}))),r.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},r.a.createElement(s.d,{delay:600},r.a.createElement("div",{className:"px-16 pb-8 text-18 font-300"},"How are your sales?")),r.a.createElement("div",{className:"widget w-full p-16"},r.a.createElement(J,{data:a.widget8}))),r.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},r.a.createElement(s.d,{delay:600},r.a.createElement(n.a,{className:"px-16 pb-8 text-18 font-300 lg:pt-0"},"What are your top campaigns?")),r.a.createElement("div",{className:"widget w-full p-16"},r.a.createElement(V,{data:a.widget9}))))))):null})}}]);