(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1456:function(e,n,t){"use strict";var a=t(2),o=t(23),r=t(5),i=t(0),l=t.n(i),c=(t(1),t(3)),s=t(12),m=t(9),u=t(179),p=t(21),d=t(131),f=l.a.forwardRef(function(e,n){var t=e.classes,i=e.className,m=e.color,f=void 0===m?"primary":m,h=e.component,b=void 0===h?"a":h,k=e.onBlur,v=e.onFocus,E=e.TypographyClasses,g=e.underline,y=void 0===g?"hover":g,L=e.variant,w=void 0===L?"inherit":L,N=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),R=Object(u.a)(),x=R.isFocusVisible,j=R.onBlurVisible,T=R.ref,O=l.a.useState(!1),S=Object(o.a)(O,2),C=S[0],B=S[1],A=Object(p.c)(n,T);return l.a.createElement(d.a,Object(a.a)({className:Object(c.a)(t.root,t["underline".concat(Object(s.a)(y))],i,C&&t.focusVisible,{button:t.button}[b]),classes:E,color:f,component:b,onBlur:function(e){C&&(j(),B(!1)),k&&k(e)},onFocus:function(e){x(e)&&B(!0),v&&v(e)},ref:A,variant:w},N))});n.a=Object(m.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:"none",border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(f)},1639:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var a=t(0),o=t.n(a),r=t(926),i=t(1456),l=t(131),c=Object(r.a)(function(e){return{link:{margin:e.spacing(1)}}}),s="javascript:;";function m(){var e=c();return o.a.createElement(l.a,null,o.a.createElement(i.a,{href:s,className:e.link},"Link"),o.a.createElement(i.a,{href:s,color:"inherit",className:e.link},'color="inherit"'),o.a.createElement(i.a,{href:s,variant:"body2",className:e.link},'variant="body2"'))}},1640:function(e,n){e.exports="/* eslint-disable no-script-url */\nimport React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Link from '@material-ui/core/Link';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles(theme => ({\n  link: {\n    margin: theme.spacing(1),\n  },\n}));\n\n// This resolves to nothing and doesn't affect browser history\nconst dudUrl = 'javascript:;';\n\nexport default function Links() {\n  const classes = useStyles();\n\n  return (\n    <Typography>\n      <Link href={dudUrl} className={classes.link}>\n        Link\n      </Link>\n      <Link href={dudUrl} color=\"inherit\" className={classes.link}>\n        {'color=\"inherit\"'}\n      </Link>\n      <Link href={dudUrl} variant=\"body2\" className={classes.link}>\n        {'variant=\"body2\"'}\n      </Link>\n    </Typography>\n  );\n}\n"},1641:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return i});var a=t(0),o=t.n(a),r=t(1456);function i(){return o.a.createElement(r.a,{component:"button",variant:"body2",onClick:function(){alert("I'm a button.")}},"Button Link")}},1642:function(e,n){e.exports='/* eslint-disable jsx-a11y/anchor-is-valid */\n\nimport React from \'react\';\nimport Link from \'@material-ui/core/Link\';\n\nexport default function ButtonLink() {\n  return (\n    <Link\n      component="button"\n      variant="body2"\n      onClick={() => {\n        alert("I\'m a button.");\n      }}\n    >\n      Button Link\n    </Link>\n  );\n}\n'},1643:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var a=t(0),o=t.n(a),r=t(80),i=t(28),l=t(1456),c=o.a.forwardRef(function(e,n){return o.a.createElement(i.a,Object.assign({innerRef:n},e))}),s=o.a.forwardRef(function(e,n){return o.a.createElement(i.a,Object.assign({innerRef:n,to:"/getting-started/installation/"},e))});function m(){return o.a.createElement(r.a,null,o.a.createElement("div",null,o.a.createElement(l.a,{component:i.a,to:"/"},"Simple case"),o.a.createElement("br",null),o.a.createElement(l.a,{component:c,to:"/"},"Ref forwarding"),o.a.createElement("br",null),o.a.createElement(l.a,{component:s},"Avoids props collision")))}},1644:function(e,n){e.exports="/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from 'react';\nimport { MemoryRouter as Router } from 'react-router';\nimport { Link as RouterLink } from 'react-router-dom';\nimport Link from '@material-ui/core/Link';\n\n// The usage of React.forwardRef will no longer be required for react-router-dom v6.\n// see https://github.com/ReactTraining/react-router/issues/6056\nconst AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);\n\nconst CollisionLink = React.forwardRef((props, ref) => (\n  <RouterLink innerRef={ref} to=\"/getting-started/installation/\" {...props} />\n));\n\nexport default function LinkRouter() {\n  return (\n    <Router>\n      <div>\n        <Link component={RouterLink} to=\"/\">\n          Simple case\n        </Link>\n        <br />\n        <Link component={AdapterLink} to=\"/\">\n          Ref forwarding\n        </Link>\n        <br />\n        <Link component={CollisionLink}>Avoids props collision</Link>\n      </div>\n    </Router>\n  );\n}\n"},2220:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(20),i=t(889),l=t(131),c=t(899),s=t(470),m=Object(s.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});n.default=function(e){var n=m();return o.a.createElement(r.s,{classes:{root:n.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(i.a,{className:"text-18",color:"action"},"home"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Documentation"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(l.a,{variant:"h6"},"Links")),o.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/links",target:"_blank",role:"button"},o.a.createElement(i.a,{className:"mr-4"},"link"),"Reference")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(l.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Links"),o.a.createElement(l.a,{className:"description"},"The Link component allows you to easily customize anchor elements with your theme colors and typography styles."),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple links"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"The Link component is built on top of the ",o.a.createElement("a",{href:"/api/typography/"},"Typography")," component. You can leverage its properties."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.j,{className:"my-24",iframe:!1,component:t(1639).default,raw:t(1640)})),o.a.createElement(l.a,{className:"mb-16",component:"div"},"However, the Link component has different default properties than the Typography component:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("code",null,'color="primary"')," as the link needs to stand out."),o.a.createElement("li",null,o.a.createElement("code",null,'variant="inherit"')," as the link will, most of the time, be used as a child of a Typography component.")),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement("ul",null,o.a.createElement("li",null,'When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use ',o.a.createElement("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text"},"specific descriptions"),"."),o.a.createElement("li",null,"For the best user experience, links should stand out from the text on the page."),o.a.createElement("li",null,"If a link doesn't have a meaningful href, ",o.a.createElement("a",{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"},"it should be rendered using a ",o.a.createElement("code",null,"<button>")," element"),".")),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.j,{className:"my-24",iframe:!1,component:t(1641).default,raw:t(1642)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Security"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"When you use ",o.a.createElement("code",null,'target="_blank"')," with Links, it is ",o.a.createElement("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/noopener"},"recommended")," to always set ",o.a.createElement("code",null,'rel="noopener"')," or ",o.a.createElement("code",null,'rel="noreferrer"')," when linking to third party content."),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("code",null,'rel="noopener"')," prevents the new page from being able to access the ",o.a.createElement("code",null,"window.opener")," property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL."),o.a.createElement("li",null,o.a.createElement("code",null,'rel="noreferrer"')," has the same effect, but also prevents the ",o.a.createElement("em",null,"Referer")," header from being sent to the new page. \u26a0\ufe0f Removing the referrer header will affect analytics.")),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Third-party routing library"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"One common use case is to perform the navigation on the client only, without doing a .html round-trip with the server. The ",o.a.createElement("code",null,"Link")," component provides a property to handle this use case: ",o.a.createElement("code",null,"component"),"."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.j,{className:"my-24",iframe:!1,component:t(1643).default,raw:t(1644)})),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement("em",null,"Note: Creating the Link components is necessary to prevent unexpected unmounting. You can read more about it in our ",o.a.createElement("a",{href:"/guides/composition/#component-property"},"component property guide"),".")))})}},926:function(e,n,t){"use strict";var a=t(2),o=t(470),r=t(173);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(e,Object(a.a)({defaultTheme:r.a},n))}}}]);