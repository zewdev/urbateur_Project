(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1276:function(e,t,a){"use strict";var n=a(300);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,n(a(923)).default)(o.default.createElement("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"Restore");t.default=i},1277:function(e,t,a){"use strict";var n=a(300);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,n(a(923)).default)(o.default.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");t.default=i},1451:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var n=a(16),o=a(0),i=a.n(o),l=a(926),r=a(2199),c=a(2200),s=a(1276),m=a.n(s),u=a(999),v=a.n(u),d=a(1277),f=a.n(d),p=Object(l.a)({root:{width:500}});function b(){var e=p(),t=i.a.useState(0),a=Object(n.a)(t,2),o=a[0],l=a[1];return i.a.createElement(r.a,{value:o,onChange:function(e,t){l(t)},showLabels:!0,className:e.root},i.a.createElement(c.a,{label:"Recents",icon:i.a.createElement(m.a,null)}),i.a.createElement(c.a,{label:"Favorites",icon:i.a.createElement(v.a,null)}),i.a.createElement(c.a,{label:"Nearby",icon:i.a.createElement(f.a,null)}))}},1452:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport BottomNavigation from '@material-ui/core/BottomNavigation';\nimport BottomNavigationAction from '@material-ui/core/BottomNavigationAction';\nimport RestoreIcon from '@material-ui/icons/Restore';\nimport FavoriteIcon from '@material-ui/icons/Favorite';\nimport LocationOnIcon from '@material-ui/icons/LocationOn';\n\nconst useStyles = makeStyles({\n  root: {\n    width: 500,\n  },\n});\n\nexport default function SimpleBottomNavigation() {\n  const classes = useStyles();\n  const [value, setValue] = React.useState(0);\n\n  return (\n    <BottomNavigation\n      value={value}\n      onChange={(event, newValue) => {\n        setValue(newValue);\n      }}\n      showLabels\n      className={classes.root}\n    >\n      <BottomNavigationAction label=\"Recents\" icon={<RestoreIcon />} />\n      <BottomNavigationAction label=\"Favorites\" icon={<FavoriteIcon />} />\n      <BottomNavigationAction label=\"Nearby\" icon={<LocationOnIcon />} />\n    </BottomNavigation>\n  );\n}\n"},1453:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(16),o=a(0),i=a.n(o),l=a(926),r=a(2199),c=a(2200),s=a(889),m=a(1276),u=a.n(m),v=a(999),d=a.n(v),f=a(1277),p=a.n(f),b=Object(l.a)({root:{width:500}});function h(){var e=b(),t=i.a.useState("recents"),a=Object(n.a)(t,2),o=a[0],l=a[1];return i.a.createElement(r.a,{value:o,onChange:function(e,t){l(t)},className:e.root},i.a.createElement(c.a,{label:"Recents",value:"recents",icon:i.a.createElement(u.a,null)}),i.a.createElement(c.a,{label:"Favorites",value:"favorites",icon:i.a.createElement(d.a,null)}),i.a.createElement(c.a,{label:"Nearby",value:"nearby",icon:i.a.createElement(p.a,null)}),i.a.createElement(c.a,{label:"Folder",value:"folder",icon:i.a.createElement(s.a,null,"folder")}))}},1454:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport BottomNavigation from '@material-ui/core/BottomNavigation';\nimport BottomNavigationAction from '@material-ui/core/BottomNavigationAction';\nimport Icon from '@material-ui/core/Icon';\nimport RestoreIcon from '@material-ui/icons/Restore';\nimport FavoriteIcon from '@material-ui/icons/Favorite';\nimport LocationOnIcon from '@material-ui/icons/LocationOn';\n\nconst useStyles = makeStyles({\n  root: {\n    width: 500,\n  },\n});\n\nexport default function LabelBottomNavigation() {\n  const classes = useStyles();\n  const [value, setValue] = React.useState('recents');\n\n  function handleChange(event, newValue) {\n    setValue(newValue);\n  }\n\n  return (\n    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>\n      <BottomNavigationAction label=\"Recents\" value=\"recents\" icon={<RestoreIcon />} />\n      <BottomNavigationAction label=\"Favorites\" value=\"favorites\" icon={<FavoriteIcon />} />\n      <BottomNavigationAction label=\"Nearby\" value=\"nearby\" icon={<LocationOnIcon />} />\n      <BottomNavigationAction label=\"Folder\" value=\"folder\" icon={<Icon>folder</Icon>} />\n    </BottomNavigation>\n  );\n}\n"},2198:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(20),l=a(889),r=a(131),c=a(899),s=a(470),m=Object(s.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});t.default=function(e){var t=m();return o.a.createElement(i.s,{classes:{root:t.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(l.a,{className:"text-18",color:"action"},"home"),o.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(r.a,{color:"textSecondary"},"Documentation"),o.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(r.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(r.a,{variant:"h6"},"Bottom Navigation")),o.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/bottom-navigation",target:"_blank",role:"button"},o.a.createElement(l.a,{className:"mr-4"},"link"),"Reference")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(r.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Bottom Navigation"),o.a.createElement(r.a,{className:"description"},"Bottom navigation bars allow movement between primary destinations in an app."),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement("a",{href:"https://material.io/design/components/bottom-navigation.html"},"Bottom navigation")," bars display three to five destinations at the bottom of a screen. Each destination is represented by an icon and an optional text label. When a bottom navigation icon is tapped, the user is taken to the top-level navigation destination associated with that icon."),o.a.createElement(r.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Bottom Navigation"),o.a.createElement(r.a,{className:"mb-16",component:"div"},"When there are only ",o.a.createElement("strong",null,"three")," actions, display both icons and text labels at all times."),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1451).default,raw:a(1452)})),o.a.createElement(r.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Bottom Navigation with no label"),o.a.createElement(r.a,{className:"mb-16",component:"div"},"If there are ",o.a.createElement("strong",null,"four")," or ",o.a.createElement("strong",null,"five")," actions, display inactive views as icons only."),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1453).default,raw:a(1454)})))})}},2199:function(e,t,a){"use strict";var n=a(2),o=a(5),i=a(0),l=a.n(i),r=(a(1),a(3)),c=(a(31),a(9)),s=l.a.forwardRef(function(e,t){var a=e.children,i=e.classes,c=e.className,s=e.component,m=void 0===s?"div":s,u=e.onChange,v=e.showLabels,d=void 0!==v&&v,f=e.value,p=Object(o.a)(e,["children","classes","className","component","onChange","showLabels","value"]);return l.a.createElement(m,Object(n.a)({className:Object(r.a)(i.root,c),ref:t},p),l.a.Children.map(a,function(e,t){if(!l.a.isValidElement(e))return null;var a=void 0===e.props.value?t:e.props.value;return l.a.cloneElement(e,{selected:a===f,showLabel:void 0!==e.props.showLabel?e.props.showLabel:d,value:a,onChange:u})}))});t.a=Object(c.a)(function(e){return{root:{display:"flex",justifyContent:"center",height:56,backgroundColor:e.palette.background.paper}}},{name:"MuiBottomNavigation"})(s)},2200:function(e,t,a){"use strict";var n=a(2),o=a(5),i=a(0),l=a.n(i),r=(a(1),a(3)),c=a(9),s=a(172),m=l.a.forwardRef(function(e,t){var a=e.classes,i=e.className,c=e.icon,m=e.label,u=e.onChange,v=e.onClick,d=e.selected,f=e.showLabel,p=e.value,b=Object(o.a)(e,["classes","className","icon","label","onChange","onClick","selected","showLabel","value"]);return l.a.createElement(s.a,Object(n.a)({ref:t,className:Object(r.a)(a.root,i,d?a.selected:!f&&a.iconOnly),focusRipple:!0,onClick:function(e){u&&u(e,p),v&&v(e)}},b),l.a.createElement("span",{className:a.wrapper},c,l.a.createElement("span",{className:Object(r.a)(a.label,d?a.selected:!f&&a.iconOnly)},m)))});t.a=Object(c.a)(function(e){return{root:{transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:e.palette.text.secondary,flex:"1","&$iconOnly":{paddingTop:16},"&$selected":{paddingTop:6,color:e.palette.primary.main}},selected:{},iconOnly:{},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"},label:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s","&$iconOnly":{opacity:0,transitionDelay:"0s"},"&$selected":{fontSize:e.typography.pxToRem(14)}}}},{name:"MuiBottomNavigationAction"})(m)},859:function(e,t,a){"use strict";a.r(t);var n=a(301);a.d(t,"default",function(){return n.a})},923:function(e,t,a){"use strict";var n=a(300);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=i.default.memo(i.default.forwardRef(function(t,a){return i.default.createElement(l.default,(0,o.default)({ref:a},t),e)}));0;return a.muiName=l.default.muiName,a};var o=n(a(102)),i=n(a(0)),l=n(a(859))},926:function(e,t,a){"use strict";var n=a(2),o=a(470),i=a(173);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(e,Object(n.a)({defaultTheme:i.a},t))}},999:function(e,t,a){"use strict";var n=a(300);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,n(a(923)).default)(o.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=i}}]);