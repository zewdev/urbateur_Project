(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1056:function(e,a,t){"use strict";var n=t(46),r=t(10),l=t(938),c={data:[],searchText:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.d:return Object(r.a)({},e,{data:a.payload});case l.h:return Object(r.a)({},e,{searchText:a.searchText});default:return e}},s={data:null},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.c:case l.f:return Object(r.a)({},e,{data:a.payload});default:return e}},o={data:[],searchText:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.b:return Object(r.a)({},e,{data:a.payload});case l.g:return Object(r.a)({},e,{searchText:a.searchText});default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.a:case l.e:return Object(r.a)({},a.payload);default:return e}},E=Object(n.d)({products:m,product:i,orders:d,order:u});a.a=E},1166:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(3),c=t(8),m=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];a.a=function(e){return r.a.createElement("div",{className:Object(l.a)("inline text-12 p-4 rounded truncate",c.a.find(m,{name:e.name}).color)},e.name)}},2283:function(e,a,t){"use strict";t.r(a);var n=t(16),r=t(0),l=t.n(r),c=t(895),m=t(889),s=t(131),i=t(921),o=t(915),d=t(746),u=t(1310),E=t(1266),p=t(1267),h=t(20),f=t(28),g=t(983),b=t.n(g),v=t(1159),N=t.n(v),y=t(174),x=t(1166),w=t(913),C=t(920),O=t(1028),S=t(1029),A=t(1030),T=t(1031),P=t(1032),R=t(470),D=t(3),k=Object(R.a)(function(e){return{root:{"& table ":{"& th:first-child, & td:first-child":{paddingLeft:"0!important"},"& th:last-child, & td:last-child":{paddingRight:"0!important"}}},divider:{width:1,backgroundColor:e.palette.divider,height:144},seller:{backgroundColor:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:e.palette.getContrastText(e.palette.primary.dark),opacity:.5}}}}),I=l.a.memo(function(e){var a=k(e),t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return l.a.createElement("div",{className:Object(D.a)(a.root,"flex-grow flex-shrink-0 p-0")},e.order&&l.a.createElement(w.a,{className:"w-xl mx-auto",elevation:0},l.a.createElement(C.a,{className:"p-88 print:p-0"},l.a.createElement(s.a,{color:"textSecondary",className:"mb-32"},e.order.date),l.a.createElement("div",{className:"flex justify-between"},l.a.createElement("div",null,l.a.createElement("table",{className:"mb-16"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"pr-16 pb-4"},l.a.createElement(s.a,{className:"font-light",variant:"h6",color:"textSecondary"},"INVOICE")),l.a.createElement("td",{className:"pb-4"},l.a.createElement(s.a,{className:"font-light",variant:"h6",color:"inherit"},e.order.reference))))),l.a.createElement(s.a,{color:"textSecondary"},e.order.customer.firstName+" "+e.order.customer.lastName),e.order.customer.invoiceAddress.address&&l.a.createElement(s.a,{color:"textSecondary"},e.order.customer.invoiceAddress.address),e.order.customer.phone&&l.a.createElement(s.a,{color:"textSecondary"},e.order.customer.phone),e.order.customer.email&&l.a.createElement(s.a,{color:"textSecondary"},e.order.customer.email)),l.a.createElement("div",{className:Object(D.a)(a.seller,"flex items-center p-16")},l.a.createElement("img",{className:"w-80",src:"assets/images/logos/fuse.svg",alt:"logo"}),l.a.createElement("div",{className:Object(D.a)(a.divider,"divider ml-8 mr-16 h-96")}),l.a.createElement("div",null,l.a.createElement(s.a,{color:"inherit"},"FUSE INC."),l.a.createElement(s.a,{color:"inherit"},"2810 Country Club Road Cranford, NJ 07016"),l.a.createElement(s.a,{color:"inherit"},"+66 123 455 87"),l.a.createElement(s.a,{color:"inherit"},"hello@fuseinc.com"),l.a.createElement(s.a,{color:"inherit"},"www.fuseinc.com")))),l.a.createElement("div",{className:"mt-64"},l.a.createElement(O.a,{className:"simple"},l.a.createElement(S.a,null,l.a.createElement(A.a,null,l.a.createElement(T.a,null,"PRODUCT"),l.a.createElement(T.a,null,"PRICE"),l.a.createElement(T.a,{align:"right"},"QUANTITY"),l.a.createElement(T.a,{align:"right"},"TOTAL"))),l.a.createElement(P.a,null,e.order.products.map(function(e){return l.a.createElement(A.a,{key:e.id},l.a.createElement(T.a,null,l.a.createElement(s.a,{variant:"subtitle1"},e.name)),l.a.createElement(T.a,{align:"right"},t.format(e.price)),l.a.createElement(T.a,{align:"right"},e.quantity),l.a.createElement(T.a,{align:"right"},t.format(e.price*e.quantity)))}))),l.a.createElement(O.a,{className:"simple mt-32"},l.a.createElement(P.a,null,l.a.createElement(A.a,null,l.a.createElement(T.a,null,l.a.createElement(s.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),l.a.createElement(T.a,{align:"right"},l.a.createElement(s.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},t.format(e.order.subtotal)))),l.a.createElement(A.a,null,l.a.createElement(T.a,null,l.a.createElement(s.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),l.a.createElement(T.a,{align:"right"},l.a.createElement(s.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},t.format(e.order.tax)))),l.a.createElement(A.a,null,l.a.createElement(T.a,null,l.a.createElement(s.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),l.a.createElement(T.a,{align:"right"},l.a.createElement(s.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},t.format(e.order.discount)))),l.a.createElement(A.a,null,l.a.createElement(T.a,null,l.a.createElement(s.a,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),l.a.createElement(T.a,{align:"right"},l.a.createElement(s.a,{className:"font-light",variant:"h4",color:"textSecondary"},t.format(e.order.total))))))),l.a.createElement("div",{className:"mt-96"},l.a.createElement(s.a,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"flex-shrink-0 mr-24"},l.a.createElement("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),l.a.createElement(s.a,{className:"font-medium mb-64",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."))))))}),j=t(938),M=t(1056),U=t(7);function q(e){return l.a.createElement(c.a,{title:e.text,placement:"top"},l.a.createElement(m.a,{className:"text-red"},"place"))}a.default=Object(y.a)("eCommerceApp",M.a)(function(e){var a=Object(U.c)(),t=Object(U.d)(function(e){return e.eCommerceApp.order}),c=Object(r.useState)(0),g=Object(n.a)(c,2),v=g[0],y=g[1],w=Object(r.useState)("shipping"),C=Object(n.a)(w,2),O=C[0],S=C[1];return Object(r.useEffect)(function(){a(j.i(e.match.params))},[a,e.match.params]),l.a.createElement(h.r,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:t&&l.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},l.a.createElement("div",{className:"flex flex-1 flex-col items-center sm:items-start"},l.a.createElement(h.d,{animation:"transition.slideRightIn",delay:300},l.a.createElement(s.a,{className:"normal-case flex items-center sm:mb-12",component:f.a,role:"button",to:"/apps/e-commerce/orders",color:"inherit"},l.a.createElement(m.a,{className:"mr-4 text-20"},"arrow_back"),"Orders")),l.a.createElement("div",{className:"flex flex-col min-w-0 items-center sm:items-start"},l.a.createElement(h.d,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(s.a,{className:"text-16 sm:text-20 truncate"},"Order "+t.reference)),l.a.createElement(h.d,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(s.a,{variant:"caption"},"From "+t.customer.firstName+" "+t.customer.lastName))))),contentToolbar:l.a.createElement(i.a,{value:v,onChange:function(e,a){y(a)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},l.a.createElement(o.a,{className:"h-64 normal-case",label:"Order Details"}),l.a.createElement(o.a,{className:"h-64 normal-case",label:"Products"}),l.a.createElement(o.a,{className:"h-64 normal-case",label:"Invoice"})),content:t&&l.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl w-full"},0===v&&l.a.createElement("div",null,l.a.createElement("div",{className:"pb-48"},l.a.createElement("div",{className:"pb-16 flex items-center"},l.a.createElement(m.a,{className:"mr-16",color:"action"},"account_circle"),l.a.createElement(s.a,{className:"h2",color:"textSecondary"},"Customer")),l.a.createElement("div",{className:"mb-24"},l.a.createElement("div",{className:"table-responsive mb-16"},l.a.createElement("table",{className:"simple"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Company"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{className:"flex items-center"},l.a.createElement(d.a,{className:"mr-8",src:t.customer.avatar}),l.a.createElement(s.a,{className:"truncate"},t.customer.firstName+" "+t.customer.lastName))),l.a.createElement("td",null,l.a.createElement(s.a,{className:"truncate"},t.customer.email)),l.a.createElement("td",null,l.a.createElement(s.a,{className:"truncate"},t.customer.phone)),l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},t.customer.company)))))),l.a.createElement(u.a,{elevation:1,expanded:"shipping"===O,onChange:function(){return S("shipping"!==O&&"shipping")}},l.a.createElement(E.a,{expandIcon:l.a.createElement(b.a,null)},l.a.createElement(s.a,{className:"font-600"},"Shipping Address")),l.a.createElement(p.a,{className:"flex flex-col md:flex-row"},l.a.createElement(s.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},t.customer.shippingAddress.address),l.a.createElement("div",{className:"w-full h-320"},l.a.createElement(N.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[t.customer.shippingAddress.lat,t.customer.shippingAddress.lng]},l.a.createElement(q,{text:t.customer.shippingAddress.address,lat:t.customer.shippingAddress.lat,lng:t.customer.shippingAddress.lng}))))),l.a.createElement(u.a,{elevation:1,expanded:"invoice"===O,onChange:function(){return S("invoice"!==O&&"invoice")}},l.a.createElement(E.a,{expandIcon:l.a.createElement(b.a,null)},l.a.createElement(s.a,{className:"font-600"},"Invoice Address")),l.a.createElement(p.a,{className:"flex flex-col md:flex-row"},l.a.createElement(s.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},t.customer.invoiceAddress.address),l.a.createElement("div",{className:"w-full h-320"},l.a.createElement(N.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[t.customer.invoiceAddress.lat,t.customer.invoiceAddress.lng]},l.a.createElement(q,{text:t.customer.invoiceAddress.address,lat:t.customer.invoiceAddress.lat,lng:t.customer.invoiceAddress.lng}))))))),l.a.createElement("div",{className:"pb-48"},l.a.createElement("div",{className:"pb-16 flex items-center"},l.a.createElement(m.a,{className:"mr-16",color:"action"},"access_time"),l.a.createElement(s.a,{className:"h2",color:"textSecondary"},"Order Status")),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"simple"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Updated On"))),l.a.createElement("tbody",null,t.status.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,l.a.createElement(x.a,{name:e.name})),l.a.createElement("td",null,e.date))}))))),l.a.createElement("div",{className:"pb-48"},l.a.createElement("div",{className:"pb-16 flex items-center"},l.a.createElement(m.a,{className:"mr-16",color:"action"},"attach_money"),l.a.createElement(s.a,{className:"h2",color:"textSecondary"},"Payment")),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"simple"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"TransactionID"),l.a.createElement("th",null,"Payment Method"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Date"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},t.payment.transactionId)),l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},t.payment.method)),l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},t.payment.amount)),l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},t.payment.date))))))),l.a.createElement("div",{className:"pb-48"},l.a.createElement("div",{className:"pb-16 flex items-center"},l.a.createElement(m.a,{className:"mr-16",color:"action"},"local_shipping"),l.a.createElement(s.a,{className:"h2",color:"textSecondary"},"Shipping")),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"simple"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Tracking Code"),l.a.createElement("th",null,"Carrier"),l.a.createElement("th",null,"Weight"),l.a.createElement("th",null,"Fee"),l.a.createElement("th",null,"Date"))),l.a.createElement("tbody",null,t.shippingDetails.map(function(e){return l.a.createElement("tr",{key:e.date},l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},e.tracking)),l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},e.carrier)),l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},e.weight)),l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},e.fee)),l.a.createElement("td",null,l.a.createElement("span",{className:"truncate"},e.date)))})))))),1===v&&l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"simple"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Quantity"))),l.a.createElement("tbody",null,t.products.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",{className:"w-64"},e.id),l.a.createElement("td",{className:"w-80"},l.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),l.a.createElement("td",null,l.a.createElement(s.a,{component:f.a,to:"/apps/e-commerce/products/"+e.id,className:"truncate",style:{color:"inherit",textDecoration:"underline"}},e.name)),l.a.createElement("td",{className:"w-64 text-right"},l.a.createElement("span",{className:"truncate"},"$",e.price)),l.a.createElement("td",{className:"w-64 text-right"},l.a.createElement("span",{className:"truncate"},e.quantity)))})))),2===v&&l.a.createElement(I,{order:t})),innerScroll:!0})})},938:function(e,a,t){"use strict";var n=t(41),r=t.n(n),l="[E-COMMERCE APP] GET PRODUCTS",c="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function m(){var e=r.a.get("/api/e-commerce-app/products");return function(a){return e.then(function(e){return a({type:l,payload:e.data})})}}function s(e){return{type:c,searchText:e.target.value}}var i=t(20),o=t(36),d="[E-COMMERCE APP] GET PRODUCT",u="[E-COMMERCE APP] SAVE PRODUCT";function E(e){var a=r.a.get("/api/e-commerce-app/product",{params:e});return function(e){return a.then(function(a){return e({type:d,payload:a.data})})}}function p(e){var a=r.a.post("/api/e-commerce-app/product/save",e);return function(e){return a.then(function(a){return e(Object(o.H)({message:"Product Saved"})),e({type:u,payload:a.data})})}}function h(){var e={id:i.B.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0};return{type:d,payload:e}}var f="[E-COMMERCE APP] GET ORDERS",g="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";function b(){var e=r.a.get("/api/e-commerce-app/orders");return function(a){return e.then(function(e){return a({type:f,payload:e.data})})}}function v(e){return{type:g,searchText:e.target.value}}var N="[E-COMMERCE APP] GET ORDER",y="[E-COMMERCE APP] SAVE ORDER";function x(e){var a=r.a.get("/api/e-commerce-app/order",{params:e});return function(e){return a.then(function(a){return e({type:N,payload:a.data})})}}t.d(a,"d",function(){return l}),t.d(a,"h",function(){return c}),t.d(a,"l",function(){return m}),t.d(a,"p",function(){return s}),t.d(a,"c",function(){return d}),t.d(a,"f",function(){return u}),t.d(a,"k",function(){return E}),t.d(a,"n",function(){return p}),t.d(a,"m",function(){return h}),t.d(a,"b",function(){return f}),t.d(a,"g",function(){return g}),t.d(a,"j",function(){return b}),t.d(a,"o",function(){return v}),t.d(a,"a",function(){return N}),t.d(a,"e",function(){return y}),t.d(a,"i",function(){return x})}}]);