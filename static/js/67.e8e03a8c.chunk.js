(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{2075:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});var n=a(0),o=a.n(n),r=a(131),i=a(926),m=Object(i.a)({root:{width:"100%",maxWidth:500}});function l(){var e=m();return o.a.createElement("div",{className:e.root},o.a.createElement(r.a,{variant:"h1",component:"h2",gutterBottom:!0},"h1. Heading"),o.a.createElement(r.a,{variant:"h2",gutterBottom:!0},"h2. Heading"),o.a.createElement(r.a,{variant:"h3",gutterBottom:!0},"h3. Heading"),o.a.createElement(r.a,{variant:"h4",gutterBottom:!0},"h4. Heading"),o.a.createElement(r.a,{variant:"h5",gutterBottom:!0},"h5. Heading"),o.a.createElement(r.a,{variant:"h6",gutterBottom:!0},"h6. Heading"),o.a.createElement(r.a,{variant:"subtitle1",gutterBottom:!0},"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"),o.a.createElement(r.a,{variant:"subtitle2",gutterBottom:!0},"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"),o.a.createElement(r.a,{variant:"body1",gutterBottom:!0},"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."),o.a.createElement(r.a,{variant:"body2",gutterBottom:!0},"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."),o.a.createElement(r.a,{variant:"button",display:"block",gutterBottom:!0},"button text"),o.a.createElement(r.a,{variant:"caption",display:"block",gutterBottom:!0},"caption text"),o.a.createElement(r.a,{variant:"overline",display:"block",gutterBottom:!0},"overline text"))}},2076:function(e,t){e.exports='import React from \'react\';\nimport Typography from \'@material-ui/core/Typography\';\nimport { makeStyles } from \'@material-ui/core/styles\';\n\nconst useStyles = makeStyles({\n  root: {\n    width: \'100%\',\n    maxWidth: 500,\n  },\n});\n\nexport default function Types() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Typography variant="h1" component="h2" gutterBottom>\n        h1. Heading\n      </Typography>\n      <Typography variant="h2" gutterBottom>\n        h2. Heading\n      </Typography>\n      <Typography variant="h3" gutterBottom>\n        h3. Heading\n      </Typography>\n      <Typography variant="h4" gutterBottom>\n        h4. Heading\n      </Typography>\n      <Typography variant="h5" gutterBottom>\n        h5. Heading\n      </Typography>\n      <Typography variant="h6" gutterBottom>\n        h6. Heading\n      </Typography>\n      <Typography variant="subtitle1" gutterBottom>\n        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur\n      </Typography>\n      <Typography variant="subtitle2" gutterBottom>\n        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur\n      </Typography>\n      <Typography variant="body1" gutterBottom>\n        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur\n        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam\n        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.\n      </Typography>\n      <Typography variant="body2" gutterBottom>\n        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur\n        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam\n        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.\n      </Typography>\n      <Typography variant="button" display="block" gutterBottom>\n        button text\n      </Typography>\n      <Typography variant="caption" display="block" gutterBottom>\n        caption text\n      </Typography>\n      <Typography variant="overline" display="block" gutterBottom>\n        overline text\n      </Typography>\n    </div>\n  );\n}\n'},2077:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});var n=a(10),o=a(0),r=a.n(o),i=a(926),m=Object(i.a)(function(e){return{root:Object(n.a)({},e.typography.button,{backgroundColor:e.palette.background.paper,padding:e.spacing(1)})}});function l(){var e=m();return r.a.createElement("div",{className:e.root},"This div's text looks like that of a button.")}},2078:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    ...theme.typography.button,\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(1),\n  },\n}));\n\nexport default function TypographyTheme() {\n  const classes = useStyles();\n\n  return <div className={classes.root}>{\"This div's text looks like that of a button.\"}</div>;\n}\n"},2247:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),i=a(889),m=a(131),l=a(899),s=a(470),c=Object(s.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});t.default=function(e){var t=c();return o.a.createElement(r.s,{classes:{root:t.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(i.a,{className:"text-18",color:"action"},"home"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(m.a,{color:"textSecondary"},"Documentation"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(m.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(m.a,{variant:"h6"},"Typography")),o.a.createElement(l.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/typography",target:"_blank",role:"button"},o.a.createElement(i.a,{className:"mr-4"},"link"),"Reference")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(m.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Typography"),o.a.createElement(m.a,{className:"description"},"Use typography to present your design and content as clearly and efficiently as possible."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Too many type sizes and styles at once can spoil any layout. A ",o.a.createElement("a",{href:"https://material.io/design/typography/#type-scale"},"typographic scale")," has a limited set of type sizes that work well together along with the layout grid."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"General"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("em",null,"Roboto")," font will ",o.a.createElement("strong",null,"not")," be automatically loaded by Material-UI. The developer is responsible for loading all fonts used in their application. Roboto Font has a few easy ways to get started. For more advanced configuration, check out",o.a.createElement("a",{href:"/customization/typography/"},"the theme customization section"),"."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Roboto Font CDN"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Shown below is a sample link markup used to load the Roboto font from a CDN:"),o.a.createElement(r.k,{component:"pre",className:"language-html"},' \n<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />\n'),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Install with npm"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"You can ",o.a.createElement("a",{href:"https://www.npmjs.com/package/typeface-roboto"},"install it")," by typing the below command in your terminal:"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"npm install typeface-roboto --save")),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Then, you can import it in your entry-point."),o.a.createElement(r.k,{component:"pre",className:"language-js"}," \nimport 'typeface-roboto';\n"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"For more info check out the ",o.a.createElement("a",{href:"https://github.com/KyleAMathews/typefaces/tree/master/packages/roboto"},"typeface")," project."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f Be careful when using this approach. Make sure your bundler doesn't eager load all the font variations (100/300/400/500/700/900, italic/regular, SVG/woff). Inlining all the font files can significantly increase the size of your bundle. Material-UI default typography configuration only relies on 300, 400, 500, and 700 font weights."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Component"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.j,{className:"my-24",iframe:!1,component:a(2075).default,raw:a(2076)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Theme"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"In some situations you might not be able to use the ",o.a.createElement("code",null,"Typography")," component. Hopefully, you might be able to take advantage of the ",o.a.createElement("a",{href:"/customization/default-theme/?expend-path=$.typography"},o.a.createElement("code",null,"typography"))," keys of the theme."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.j,{className:"my-24",iframe:!1,component:a(2077).default,raw:a(2078)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Changing the semantic element"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The Typography component uses the ",o.a.createElement("code",null,"variantMapping")," property to associate a UI variant with a semantic element. It\u2019s important to realize that the style of a typography is independent from the semantic underlying element."),o.a.createElement("ul",null,o.a.createElement("li",null,"You can change the underlying element for a one time occasion with the ",o.a.createElement("code",null,"component")," property:")),o.a.createElement(r.k,{component:"pre",className:"language-jsx"},' \n{/* We already have an h1 in the page, let\'s not duplicate it. */}\n<Typography variant="h1" component="h2">\n  h1. Heading\n</Typography>\n'),o.a.createElement("ul",null,o.a.createElement("li",null,"You can change the mapping ",o.a.createElement("a",{href:"/customization/globals/#default-props"},"globally using the theme"),":")),o.a.createElement(r.k,{component:"pre",className:"language-js"}," \nconst theme = createMuiTheme({\n  props: {\n    MuiTypography: {\n      variantMapping: {\n        h1: 'h2',\n        h2: 'h2',\n        h3: 'h2',\n        h4: 'h2',\n        h5: 'h2',\n        h6: 'h2',\n        subtitle1: 'h2',\n        subtitle2: 'h2',\n        body1: 'span',\n        body2: 'span',\n      },\n    },\n  },\n});\n"))})}},926:function(e,t,a){"use strict";var n=a(2),o=a(470),r=a(173);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(e,Object(n.a)({defaultTheme:r.a},t))}}}]);