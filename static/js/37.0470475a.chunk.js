(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1145:function(e,t,a){"use strict";var n=a(300);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(923)).default)(r.default.createElement("path",{d:"M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"}),"BeachAccess");t.default=i},1205:function(e,t,a){"use strict";var n=a(2),r=a(5),i=a(0),o=a.n(i),c=(a(1),a(3)),s=a(9),l=a(99),m=o.a.forwardRef(function(e,t){var a=e.classes,i=e.className,s=Object(r.a)(e,["classes","className"]),m=o.a.useContext(l.a);return o.a.createElement("div",Object(n.a)({className:Object(c.a)(a.root,i,"flex-start"===m.alignItems&&a.alignItemsFlexStart),ref:t},s))});t.a=Object(s.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(m)},1209:function(e,t,a){"use strict";var n=a(300);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(923)).default)(r.default.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");t.default=i},1210:function(e,t,a){"use strict";var n=a(300);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(923)).default)(r.default.createElement("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work");t.default=i},1573:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a(0),r=a.n(n),i=a(926),o=a(848),c=a(849),s=a(893),l=a(910),m=Object(i.a)(function(e){return{root:{width:"100%",maxWidth:"360px",backgroundColor:e.palette.background.paper}}});function d(){var e=m();return r.a.createElement(o.a,{component:"nav",className:e.root,"aria-label":"mailbox folders"},r.a.createElement(c.a,{button:!0},r.a.createElement(s.a,{primary:"Inbox"})),r.a.createElement(l.a,null),r.a.createElement(c.a,{button:!0,divider:!0},r.a.createElement(s.a,{primary:"Drafts"})),r.a.createElement(c.a,{button:!0},r.a.createElement(s.a,{primary:"Trash"})),r.a.createElement(l.a,{light:!0}),r.a.createElement(c.a,{button:!0},r.a.createElement(s.a,{primary:"Spam"})))}},1574:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport List from '@material-ui/core/List';\nimport ListItem from '@material-ui/core/ListItem';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport Divider from '@material-ui/core/Divider';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n    maxWidth: '360px',\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function ListDividers() {\n  const classes = useStyles();\n\n  return (\n    <List component=\"nav\" className={classes.root} aria-label=\"mailbox folders\">\n      <ListItem button>\n        <ListItemText primary=\"Inbox\" />\n      </ListItem>\n      <Divider />\n      <ListItem button divider>\n        <ListItemText primary=\"Drafts\" />\n      </ListItem>\n      <ListItem button>\n        <ListItemText primary=\"Trash\" />\n      </ListItem>\n      <Divider light />\n      <ListItem button>\n        <ListItemText primary=\"Spam\" />\n      </ListItem>\n    </List>\n  );\n}\n"},1575:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g});var n=a(0),r=a.n(n),i=a(926),o=a(848),c=a(849),s=a(893),l=a(1205),m=a(746),d=a(1209),u=a.n(d),p=a(1210),f=a.n(p),v=a(1145),h=a.n(v),x=a(910),y=Object(i.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}});function g(){var e=y();return r.a.createElement(o.a,{className:e.root},r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,null))),r.a.createElement(s.a,{primary:"Photos",secondary:"Jan 9, 2014"})),r.a.createElement(x.a,{variant:"inset",component:"li"}),r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(m.a,null,r.a.createElement(f.a,null))),r.a.createElement(s.a,{primary:"Work",secondary:"Jan 7, 2014"})),r.a.createElement(x.a,{variant:"inset",component:"li"}),r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(m.a,null,r.a.createElement(h.a,null))),r.a.createElement(s.a,{primary:"Vacation",secondary:"July 20, 2014"})))}},1576:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport List from '@material-ui/core/List';\nimport ListItem from '@material-ui/core/ListItem';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport ListItemAvatar from '@material-ui/core/ListItemAvatar';\nimport Avatar from '@material-ui/core/Avatar';\nimport ImageIcon from '@material-ui/icons/Image';\nimport WorkIcon from '@material-ui/icons/Work';\nimport BeachAccessIcon from '@material-ui/icons/BeachAccess';\nimport Divider from '@material-ui/core/Divider';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n    maxWidth: 360,\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function InsetDividers() {\n  const classes = useStyles();\n\n  return (\n    <List className={classes.root}>\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <ImageIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary=\"Photos\" secondary=\"Jan 9, 2014\" />\n      </ListItem>\n      <Divider variant=\"inset\" component=\"li\" />\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <WorkIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary=\"Work\" secondary=\"Jan 7, 2014\" />\n      </ListItem>\n      <Divider variant=\"inset\" component=\"li\" />\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <BeachAccessIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary=\"Vacation\" secondary=\"July 20, 2014\" />\n      </ListItem>\n    </List>\n  );\n}\n"},1577:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(0),r=a.n(n),i=a(926),o=a(848),c=a(849),s=a(1205),l=a(893),m=a(746),d=a(1145),u=a.n(d),p=a(910),f=a(131),v=Object(i.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},dividerFullWidth:{margin:"5px 0 0 ".concat(e.spacing(2),"px")},dividerInset:{margin:"5px 0 0 ".concat(e.spacing(9),"px")}}});function h(){var e=v();return r.a.createElement(o.a,{className:e.root},r.a.createElement(c.a,null,r.a.createElement(l.a,{primary:"Photos",secondary:"Jan 9, 2014"})),r.a.createElement(p.a,{component:"li"}),r.a.createElement("li",null,r.a.createElement(f.a,{className:e.dividerFullWidth,color:"textSecondary",display:"block",variant:"caption"},"Divider")),r.a.createElement(c.a,null,r.a.createElement(l.a,{primary:"Work",secondary:"Jan 7, 2014"})),r.a.createElement(p.a,{component:"li",variant:"inset"}),r.a.createElement("li",null,r.a.createElement(f.a,{className:e.dividerInset,color:"textSecondary",display:"block",variant:"caption"},"Leisure")),r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,null))),r.a.createElement(l.a,{primary:"Vacation",secondary:"July 20, 2014"})))}},1578:function(e,t){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport List from \'@material-ui/core/List\';\nimport ListItem from \'@material-ui/core/ListItem\';\nimport ListItemAvatar from \'@material-ui/core/ListItemAvatar\';\nimport ListItemText from \'@material-ui/core/ListItemText\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport BeachAccessIcon from \'@material-ui/icons/BeachAccess\';\nimport Divider from \'@material-ui/core/Divider\';\nimport Typography from \'@material-ui/core/Typography\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: \'100%\',\n    maxWidth: 360,\n    backgroundColor: theme.palette.background.paper,\n  },\n  dividerFullWidth: {\n    margin: `5px 0 0 ${theme.spacing(2)}px`,\n  },\n  dividerInset: {\n    margin: `5px 0 0 ${theme.spacing(9)}px`,\n  },\n}));\n\nexport default function SubheaderDividers() {\n  const classes = useStyles();\n\n  return (\n    <List className={classes.root}>\n      <ListItem>\n        <ListItemText primary="Photos" secondary="Jan 9, 2014" />\n      </ListItem>\n      <Divider component="li" />\n      <li>\n        <Typography\n          className={classes.dividerFullWidth}\n          color="textSecondary"\n          display="block"\n          variant="caption"\n        >\n          Divider\n        </Typography>\n      </li>\n      <ListItem>\n        <ListItemText primary="Work" secondary="Jan 7, 2014" />\n      </ListItem>\n      <Divider component="li" variant="inset" />\n      <li>\n        <Typography\n          className={classes.dividerInset}\n          color="textSecondary"\n          display="block"\n          variant="caption"\n        >\n          Leisure\n        </Typography>\n      </li>\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <BeachAccessIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary="Vacation" secondary="July 20, 2014" />\n      </ListItem>\n    </List>\n  );\n}\n'},1579:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(0),r=a.n(n),i=a(926),o=a(903),c=a(899),s=a(997),l=a(910),m=a(131),d=Object(i.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},chip:{marginRight:e.spacing(1)},section1:{margin:e.spacing(3,2)},section2:{margin:e.spacing(2)},section3:{margin:e.spacing(3,1,1)}}});function u(){var e=d();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.section1},r.a.createElement(s.a,{container:!0,alignItems:"center"},r.a.createElement(s.a,{item:!0,xs:!0},r.a.createElement(m.a,{gutterBottom:!0,variant:"h4"},"Toothbrush")),r.a.createElement(s.a,{item:!0},r.a.createElement(m.a,{gutterBottom:!0,variant:"h6"},"$4.50"))),r.a.createElement(m.a,{color:"textSecondary",variant:"body2"},"Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.")),r.a.createElement(l.a,{variant:"middle"}),r.a.createElement("div",{className:e.section2},r.a.createElement(m.a,{gutterBottom:!0,variant:"body1"},"Select type"),r.a.createElement("div",null,r.a.createElement(o.a,{className:e.chip,label:"Extra Soft"}),r.a.createElement(o.a,{className:e.chip,color:"primary",label:"Soft"}),r.a.createElement(o.a,{className:e.chip,label:"Medium"}),r.a.createElement(o.a,{className:e.chip,label:"Hard"}))),r.a.createElement("div",{className:e.section3},r.a.createElement(c.a,{color:"primary"},"Add to cart")))}},1580:function(e,t){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Chip from \'@material-ui/core/Chip\';\nimport Button from \'@material-ui/core/Button\';\nimport Grid from \'@material-ui/core/Grid\';\nimport Divider from \'@material-ui/core/Divider\';\nimport Typography from \'@material-ui/core/Typography\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: \'100%\',\n    maxWidth: 360,\n    backgroundColor: theme.palette.background.paper,\n  },\n  chip: {\n    marginRight: theme.spacing(1),\n  },\n  section1: {\n    margin: theme.spacing(3, 2),\n  },\n  section2: {\n    margin: theme.spacing(2),\n  },\n  section3: {\n    margin: theme.spacing(3, 1, 1),\n  },\n}));\n\nexport default function MiddleDividers() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.section1}>\n        <Grid container alignItems="center">\n          <Grid item xs>\n            <Typography gutterBottom variant="h4">\n              Toothbrush\n            </Typography>\n          </Grid>\n          <Grid item>\n            <Typography gutterBottom variant="h6">\n              $4.50\n            </Typography>\n          </Grid>\n        </Grid>\n        <Typography color="textSecondary" variant="body2">\n          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the\n          hall.\n        </Typography>\n      </div>\n      <Divider variant="middle" />\n      <div className={classes.section2}>\n        <Typography gutterBottom variant="body1">\n          Select type\n        </Typography>\n        <div>\n          <Chip className={classes.chip} label="Extra Soft" />\n          <Chip className={classes.chip} color="primary" label="Soft" />\n          <Chip className={classes.chip} label="Medium" />\n          <Chip className={classes.chip} label="Hard" />\n        </div>\n      </div>\n      <div className={classes.section3}>\n        <Button color="primary">Add to cart</Button>\n      </div>\n    </div>\n  );\n}\n'},2214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),o=a(889),c=a(131),s=a(899),l=a(470),m=Object(l.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});t.default=function(e){var t=m();return r.a.createElement(i.s,{classes:{root:t.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(o.a,{className:"text-18",color:"action"},"home"),r.a.createElement(o.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(c.a,{color:"textSecondary"},"Documentation"),r.a.createElement(o.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(c.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(c.a,{variant:"h6"},"Dividers")),r.a.createElement(s.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/dividers",target:"_blank",role:"button"},r.a.createElement(o.a,{className:"mr-4"},"link"),"Reference")),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Dividers"),r.a.createElement(c.a,{className:"description"},"A divider is a thin line that groups content in lists and layouts."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement("a",{href:"https://material.io/design/components/dividers.html"},"Dividers")," separate content into clear groups."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"List Dividers"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"The divider renders as a ",r.a.createElement("code",null,"<hr>")," by default. You can save rendering this DOM element by using the ",r.a.createElement("code",null,"divider")," property on the ",r.a.createElement("code",null,"ListItem")," component."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1573).default,raw:a(1574)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"HTML5 Specification"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"We need to make sure the ",r.a.createElement("code",null,"Divider")," is rendered as a ",r.a.createElement("code",null,"li")," to match the HTML5 specification. The examples below show two ways of achieving this."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Inset Dividers"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1575).default,raw:a(1576)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Subheader Dividers"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1577).default,raw:a(1578)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Middle Dividers"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1579).default,raw:a(1580)})))})}},859:function(e,t,a){"use strict";a.r(t);var n=a(301);a.d(t,"default",function(){return n.a})},923:function(e,t,a){"use strict";var n=a(300);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=i.default.memo(i.default.forwardRef(function(t,a){return i.default.createElement(o.default,(0,r.default)({ref:a},t),e)}));0;return a.muiName=o.default.muiName,a};var r=n(a(102)),i=n(a(0)),o=n(a(859))},926:function(e,t,a){"use strict";var n=a(2),r=a(470),i=a(173);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(n.a)({defaultTheme:i.a},t))}},997:function(e,t,a){"use strict";var n=a(5),r=a(2),i=a(0),o=a.n(i),c=(a(1),a(3)),s=a(9),l=a(56),m=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var u=o.a.forwardRef(function(e,t){var a=e.alignContent,i=void 0===a?"stretch":a,s=e.alignItems,l=void 0===s?"stretch":s,m=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,f=e.container,v=void 0!==f&&f,h=e.direction,x=void 0===h?"row":h,y=e.item,g=void 0!==y&&y,b=e.justify,E=void 0===b?"flex-start":b,I=e.lg,L=void 0!==I&&I,N=e.md,w=void 0!==N&&N,S=e.sm,k=void 0!==S&&S,T=e.spacing,j=void 0===T?0:T,D=e.wrap,A=void 0===D?"wrap":D,W=e.xl,C=void 0!==W&&W,M=e.xs,O=void 0!==M&&M,B=e.zeroMinWidth,z=void 0!==B&&B,J=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(c.a)(m.root,d,v&&[m.container,0!==j&&m["spacing-xs-".concat(String(j))]],g&&m.item,z&&m.zeroMinWidth,"row"!==x&&m["direction-xs-".concat(String(x))],"wrap"!==A&&m["wrap-xs-".concat(String(A))],"stretch"!==l&&m["align-items-xs-".concat(String(l))],"stretch"!==i&&m["align-content-xs-".concat(String(i))],"flex-start"!==E&&m["justify-xs-".concat(String(E))],!1!==O&&m["grid-xs-".concat(String(O))],!1!==k&&m["grid-sm-".concat(String(k))],!1!==w&&m["grid-md-".concat(String(w))],!1!==L&&m["grid-lg-".concat(String(L))],!1!==C&&m["grid-xl-".concat(String(C))]);return o.a.createElement(p,Object(r.a)({className:G,ref:t},J))});var p=Object(s.a)(function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return m.forEach(function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:-r/2,width:"calc(100% + ".concat(r,"px)"),"& > $item":{padding:r/2}})}),a}(e,"xs"),{},l.b.reduce(function(t,a){return function(e,t,a){var n={};d.forEach(function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t},{}))},{name:"MuiGrid"})(u);t.a=p}}]);