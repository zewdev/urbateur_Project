(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1028:function(e,a,t){"use strict";var n=t(2),r=t(5),l=t(0),c=t.n(l),i=(t(1),t(3)),o=t(9),s=t(955),m=c.a.forwardRef(function(e,a){var t=e.classes,l=e.className,o=e.component,m=void 0===o?"table":o,d=e.padding,u=void 0===d?"default":d,p=e.size,g=void 0===p?"medium":p,f=Object(r.a)(e,["classes","className","component","padding","size"]),E=c.a.useMemo(function(){return{padding:u,size:g}},[u,g]);return c.a.createElement(s.a.Provider,{value:E},c.a.createElement(m,Object(n.a)({ref:a,className:Object(i.a)(t.root,l)},f)))});a.a=Object(o.a)({root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0}},{name:"MuiTable"})(m)},1029:function(e,a,t){"use strict";var n=t(2),r=t(5),l=t(0),c=t.n(l),i=(t(1),t(3)),o=t(9),s=t(928),m={variant:"head"},d=c.a.forwardRef(function(e,a){var t=e.classes,l=e.className,o=e.component,d=void 0===o?"thead":o,u=Object(r.a)(e,["classes","className","component"]);return c.a.createElement(s.a.Provider,{value:m},c.a.createElement(d,Object(n.a)({className:Object(i.a)(t.root,l),ref:a},u)))});a.a=Object(o.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1030:function(e,a,t){"use strict";var n=t(2),r=t(5),l=t(0),c=t.n(l),i=(t(1),t(3)),o=t(9),s=t(928),m=c.a.forwardRef(function(e,a){var t=e.classes,l=e.className,o=e.component,m=void 0===o?"tr":o,d=e.hover,u=void 0!==d&&d,p=e.selected,g=void 0!==p&&p,f=Object(r.a)(e,["classes","className","component","hover","selected"]),E=c.a.useContext(s.a);return c.a.createElement(m,Object(n.a)({ref:a,className:Object(i.a)(t.root,l,E&&{head:t.head,footer:t.footer}[E.variant],u&&t.hover,g&&t.selected)},f))});a.a=Object(o.a)(function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:"none","&$selected":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.04)":"rgba(255, 255, 255, 0.08)"},"&$hover:hover":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.07)":"rgba(255, 255, 255, 0.14)"}},selected:{},hover:{},head:{},footer:{}}},{name:"MuiTableRow"})(m)},1031:function(e,a,t){"use strict";var n=t(5),r=t(2),l=t(0),c=t.n(l),i=(t(1),t(3)),o=t(9),s=t(12),m=t(15),d=t(955),u=t(928),p=c.a.forwardRef(function(e,a){var t,l=e.align,o=void 0===l?"inherit":l,m=e.classes,p=e.className,g=e.component,f=e.padding,E=e.scope,b=e.size,h=e.sortDirection,v=e.variant,y=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=c.a.useContext(d.a),N=c.a.useContext(u.a);t=g||(N&&"head"===N.variant?"th":"td");var O=E;!O&&N&&"head"===N.variant&&(O="col");var j=f||(x&&x.padding?x.padding:"default"),w=b||(x&&x.size?x.size:"medium"),S=null;return h&&(S="asc"===h?"ascending":"descending"),c.a.createElement(t,Object(r.a)({ref:a,className:Object(i.a)(m.root,p,(v?"head"===v:N&&"head"===N.variant)&&m.head,(v?"body"===v:N&&"body"===N.variant)&&m.body,(v?"footer"===v:N&&"footer"===N.variant)&&m.footer,"inherit"!==o&&m["align".concat(Object(s.a)(o))],"default"!==j&&m["padding".concat(Object(s.a)(j))],"medium"!==w&&m["size".concat(Object(s.a)(w))]),"aria-sort":S,scope:O},y))});a.a=Object(o.a)(function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(m.i)(Object(m.d)(e.palette.divider,1),.88):Object(m.a)(Object(m.d)(e.palette.divider,1),.68)),textAlign:"left",padding:"14px 40px 14px 16px","&:last-child":{paddingRight:16}}),head:{color:e.palette.text.secondary,fontSize:e.typography.pxToRem(12),lineHeight:e.typography.pxToRem(21),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary,fontWeight:e.typography.fontWeightRegular},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"}}},{name:"MuiTableCell"})(p)},1032:function(e,a,t){"use strict";var n=t(2),r=t(5),l=t(0),c=t.n(l),i=(t(1),t(3)),o=t(9),s=t(928),m={variant:"body"},d=c.a.forwardRef(function(e,a){var t=e.classes,l=e.className,o=e.component,d=void 0===o?"tbody":o,u=Object(r.a)(e,["classes","className","component"]);return c.a.createElement(s.a.Provider,{value:m},c.a.createElement(d,Object(n.a)({className:Object(i.a)(t.root,l),ref:a},u)))});a.a=Object(o.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},2146:function(e,a,t){"use strict";t.r(a);var n=t(16),r=t(0),l=t.n(r),c=t(913),i=t(920),o=t(131),s=t(1028),m=t(1029),d=t(1030),u=t(1031),p=t(1032),g=t(136),f=t(20),E=t(3),b=t(41),h=t.n(b),v=t(470),y=Object(v.a)(function(e){return{root:{background:"radial-gradient("+Object(g.darken)(e.palette.primary.dark,.5)+" 0%, "+e.palette.primary.dark+" 80%)"},divider:{backgroundColor:e.palette.getContrastText(e.palette.primary.dark)},seller:{backgroundColor:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),marginRight:-88,paddingRight:66,width:480}}});a.default=function(){var e=y(),a=Object(r.useState)(null),t=Object(n.a)(a,2),g=t[0],b=t[1],v=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return Object(r.useEffect)(function(){h.a.get("/api/invoices/get-invoice",{params:{id:"5725a6802d"}}).then(function(e){b(e.data)})},[]),l.a.createElement("div",{className:Object(E.a)(e.root,"flex-grow flex-shrink-0 p-0 sm:p-64 print:p-0")},g&&l.a.createElement(f.d,{animation:{translateY:[0,"100%"]},duration:600},l.a.createElement(c.a,{className:"mx-auto w-xl print:w-full print:p-8 print:shadow-none"},l.a.createElement(i.a,{className:"p-88 print:p-0"},l.a.createElement(o.a,{color:"textSecondary",className:"mb-32"},g.date),l.a.createElement("div",{className:"flex justify-between"},l.a.createElement("div",null,l.a.createElement("table",{className:"mb-16"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"pr-16 pb-4"},l.a.createElement(o.a,{className:"font-light",variant:"h6",color:"textSecondary"},"INVOICE")),l.a.createElement("td",{className:"pb-4"},l.a.createElement(o.a,{className:"font-light",variant:"h6"},g.number))),l.a.createElement("tr",null,l.a.createElement("td",{className:"pr-16"},l.a.createElement(o.a,{color:"textSecondary"},"INVOICE DATE")),l.a.createElement("td",null,l.a.createElement(o.a,null,g.date))),l.a.createElement("tr",null,l.a.createElement("td",{className:"pr-16"},l.a.createElement(o.a,{color:"textSecondary"},"DUE DATE")),l.a.createElement("td",null,l.a.createElement(o.a,null,g.dueDate))))),l.a.createElement(o.a,{color:"textSecondary"},g.client.title),g.client.address&&l.a.createElement(o.a,{color:"textSecondary"},g.client.address),g.client.phone&&l.a.createElement(o.a,{color:"textSecondary"},g.client.phone),g.client.email&&l.a.createElement(o.a,{color:"textSecondary"},g.client.email),g.client.website&&l.a.createElement(o.a,{color:"textSecondary"},g.client.website)),l.a.createElement("div",{className:Object(E.a)(e.seller,"flex items-center p-16")},l.a.createElement("img",{className:"w-80",src:"assets/images/logos/fuse.svg",alt:"logo"}),l.a.createElement("div",{className:Object(E.a)(e.divider,"w-px ml-8 mr-16 h-96 opacity-50")}),l.a.createElement("div",null,l.a.createElement(o.a,{color:"inherit"},g.from.title),g.from.address&&l.a.createElement(o.a,{color:"inherit"},g.from.address),g.from.phone&&l.a.createElement(o.a,{color:"inherit"},g.from.phone),g.from.email&&l.a.createElement(o.a,{color:"inherit"},g.from.email),g.from.website&&l.a.createElement(o.a,{color:"inherit"},g.from.website)))),l.a.createElement("div",{className:"mt-64"},l.a.createElement(s.a,{className:"simple"},l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(u.a,null,"SERVICE"),l.a.createElement(u.a,null,"UNIT"),l.a.createElement(u.a,{align:"right"},"UNIT PRICE"),l.a.createElement(u.a,{align:"right"},"QUANTITY"),l.a.createElement(u.a,{align:"right"},"TOTAL"))),l.a.createElement(p.a,null,g.services.map(function(e){return l.a.createElement(d.a,{key:e.id},l.a.createElement(u.a,null,l.a.createElement(o.a,{variant:"subtitle1"},e.title)),l.a.createElement(u.a,null,e.unit),l.a.createElement(u.a,{align:"right"},v.format(e.unitPrice)),l.a.createElement(u.a,{align:"right"},e.quantity),l.a.createElement(u.a,{align:"right"},v.format(e.total)))}))),l.a.createElement(s.a,{className:"simple mt-32"},l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(u.a,null,l.a.createElement(o.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),l.a.createElement(u.a,{align:"right"},l.a.createElement(o.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},v.format(g.subtotal)))),l.a.createElement(d.a,null,l.a.createElement(u.a,null,l.a.createElement(o.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),l.a.createElement(u.a,{align:"right"},l.a.createElement(o.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},v.format(g.tax)))),l.a.createElement(d.a,null,l.a.createElement(u.a,null,l.a.createElement(o.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),l.a.createElement(u.a,{align:"right"},l.a.createElement(o.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},v.format(g.discount)))),l.a.createElement(d.a,null,l.a.createElement(u.a,null,l.a.createElement(o.a,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),l.a.createElement(u.a,{align:"right"},l.a.createElement(o.a,{className:"font-light",variant:"h4",color:"textSecondary"},v.format(g.total))))))),l.a.createElement("div",{className:"mt-96"},l.a.createElement(o.a,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"flex-shrink-0 mr-24"},l.a.createElement("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),l.a.createElement(o.a,{className:"font-medium mb-64",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros.")))))))}},928:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext();a.a=r},955:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext();a.a=r}}]);