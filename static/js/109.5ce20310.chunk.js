(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{2260:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(889),l=a(131),c=a(899),m=a(20),r=a(22),s=a(7),p=a(58);t.default=function(e){var t=Object(s.c)();return o.a.createElement(m.s,{header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(i.a,{className:"text-18",color:"action"},"home"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Documentation"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Fuse Components")),o.a.createElement(l.a,{variant:"h6"},"FuseNavigation"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(l.a,{className:"mb-16",component:"p"},o.a.createElement("code",null,"FuseNavigation")," is a custom built Fuse component allows you to create a multi-level collapsable navigation."),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"[navigation]"),o.a.createElement(l.a,{className:"mb-16",component:"p"},o.a.createElement("code",null,"FuseNavigation")," uses a array to populate the entire navigation. It supports four different navigation items; Group, Collapse, Item. and Divider. These items can be mixed and matched to create unique and complex navigation layouts."),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"[layout]"),o.a.createElement(l.a,{className:"mb-16",component:"p"},'"vertical" or "horizontal" layout options.'),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"[active]"),o.a.createElement(l.a,{className:"mb-16",component:"p"},"You can set ",o.a.createElement("b",null,"active"),' to "square" for to use square active item style instead of rounded/circle for ',o.a.createElement("b",null,"vertical layout"),"."),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h5"},"Usage"),o.a.createElement(m.k,{component:"pre",className:"language-jsx"},'\n                                    <FuseNavigation navigation={navigation} layout="vertical" active="square"/>\n                                '),o.a.createElement(l.a,{className:"mt-48 mb-8",variant:"h4"},"Navigation item types"),o.a.createElement(l.a,{className:"mt-32 p-8 rounded-4 bg-yellow-100 border-1 border-yellow-700 text-black mb-8"},"Its mandatory to give a unique id to all of your navigation items."),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Group"),o.a.createElement(m.k,{component:"pre",className:"language-json"},"\n                                     {\n                                        'id'       : 'applications',\n                                        'title'    : 'Applications',\n                                        'type'     : 'group',\n                                        'icon'     : 'apps',\n                                        'children' : [\n                                             {\n                                                'id'       : 'calendar',\n                                                'title'    : 'Calendar',\n                                                'type'     : 'item',\n                                                'icon'     : 'today',\n                                                'url'      : '/apps/calendar'\n                                            }\n                                        ]\n                                     }\n                                "),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Collapse"),o.a.createElement(m.k,{component:"pre",className:"language-json"},"\n                                     {\n                                        'id'       : 'dashboards',\n                                        'title'    : 'Dashboards',\n                                        'type'     : 'collapse',\n                                        'icon'     : 'dashboard',\n                                        'children' : [\n                                            {\n                                                'id'   : 'project',\n                                                'title': 'Project',\n                                                'type' : 'item',\n                                                'url'  : '/apps/dashboards/project'\n                                            }\n                                        ]\n                                      }\n                                "),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Item"),o.a.createElement(m.k,{component:"pre",className:"language-json"},"\n                                {\n                                    'id'   : 'project',\n                                    'title': 'Project',\n                                    'type' : 'item',\n                                    'url'  : '/apps/dashboards/project'\n                                }\n                                "),o.a.createElement(l.a,{className:"text-20 mt-24 mb-8 font-semibold",component:"h2"},"exact: bool"),o.a.createElement(l.a,{className:"text-16 mb-8",component:"h2"},"When true, the active class/style will only be applied if the location is matched exactly."),o.a.createElement(m.k,{component:"pre",className:"language-json"},"\n                                {\n                                    'id'   : 'project',\n                                    'title': 'Project',\n                                    'type' : 'item',\n                                    'url'  : '/apps/dashboards/project',\n                                    'exact': true\n                                }\n                                "),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Link"),o.a.createElement(m.k,{component:"pre",className:"language-json"},"\n                                {\n                                    'id'    : 'test-link',\n                                    'title' : 'Test Link',\n                                    'type'  : 'link',\n                                    'icon'  : 'link',\n                                    'url'   : 'http://fusetheme.com',\n                                    'target': '_blank'\n                                },\n                               "),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Divider"),o.a.createElement(m.k,{component:"pre",className:"language-json"},"\n                                {\n                                    'id'   : 'project',\n                                    'title': 'Project',\n                                    'type' : 'item',\n                                    'url'  : '/apps/dashboards/project'\n                                }\n                                {\n                                    'type': 'divider\n                                },\n                                {\n                                    'id'   : 'project',\n                                    'title': 'Project',\n                                    'type' : 'item',\n                                    'url'  : '/apps/dashboards/project'\n                                }\n                                "),o.a.createElement(l.a,{className:"mt-48 mb-8",variant:"h4"},"Actions"),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.setNavigation"),o.a.createElement(l.a,{className:"text-16 mb-8",component:"h2"},"Use ",o.a.createElement("code",null,"setNavigation(navigation","<Array>",")")," action to set/change whole navigation."),o.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},o.a.createElement(l.a,{className:"text-16 mb-24",component:"h2"},"With the button below, whole navigation is changed."),o.a.createElement(c.a,{onClick:function(){t(r.n([{id:"auth",title:"Auth",type:"group",icon:"apps",children:[{id:"login",title:"Login",type:"item",url:"/connexion",auth:p.b.onlyGuest,icon:"lock"},{id:"register",title:"Register",type:"item",url:"/register",auth:p.b.onlyGuest,icon:"person_add"}]}]))},variant:"contained",color:"primary"},"Set Navigation"),o.a.createElement(m.k,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.setNavigation([\n                                            {\n                                                'id'      : 'auth',\n                                                'title'   : 'Auth',\n                                                'type'    : 'group',\n                                                'icon'    : 'apps',\n                                                'children': [\n                                                    {\n                                                        'id'   : 'login',\n                                                        'title': 'Login',\n                                                        'type' : 'item',\n                                                        'url'  : '/connexion',\n                                                        auth   : authRoles.onlyGuest,\n                                                        'icon' : 'lock'\n                                                    },\n                                                    {\n                                                        'id'   : 'register',\n                                                        'title': 'Register',\n                                                        'type' : 'item',\n                                                        'url'  : '/register',\n                                                        auth   : authRoles.onlyGuest,\n                                                        'icon' : 'person_add'\n                                                    },\n                                                ]\n                                            }\n                                        ]));\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Set Navigation\n                                </Button>\n                                ")),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.resetNavigation"),o.a.createElement(l.a,{className:"text-16 mb-8",component:"h2"},"Use ",o.a.createElement("code",null,"resetNavigation()")," action to reset navigation to initial state."),o.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},o.a.createElement(l.a,{className:"text-16 mb-24",component:"h2"},"With the button below, navigation is returned to config defaults."),o.a.createElement(c.a,{onClick:function(){t(r.k())},variant:"contained",color:"primary"},"Reset Navigation"),o.a.createElement(m.k,{component:"pre",className:"language-jsx mt-24"},'\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.resetNavigation());\n                                    }}\n                                    variant="contained"\n                                    color="primary"\n                                >\n                                    Reset Navigation\n                                </Button>\n                                ')),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.updateNavigationItem"),o.a.createElement(l.a,{className:"text-16 mb-8",component:"h2"},"Use ",o.a.createElement("code",null,"updateNavigationItem(id, ",o.a.createElement("i",null,"object"),")")," action to update a navigation item."),o.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},o.a.createElement(l.a,{className:"text-16 mb-24",component:"h2"},"With the button below, 'dashboards' title changes and a badge is added."),o.a.createElement(c.a,{onClick:function(){t(r.q("dashboards",{title:"All Dashboards",badge:{title:2,bg:"rgb(3, 155, 228)",fg:"#FFFFFF"}}))},variant:"contained",color:"primary"},"Update Navigation Item"),o.a.createElement(m.k,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.updateNavigationItem('dashboards',\n                                            {\n                                                'title': 'All Dashboards',\n                                                'badge': {\n                                                    'title': 2,\n                                                    'bg'   : 'rgb(3, 155, 228)',\n                                                    'fg'   : '#FFFFFF'\n                                                }\n                                            }\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                Update Navigation Item\n                                </Button>\n                            ")),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.removeNavigationItem"),o.a.createElement(l.a,{className:"text-16 mb-8",component:"h2"},"Use ",o.a.createElement("code",null,"removeNavigationItem(id)")," action to remove a navigation item."),o.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},o.a.createElement(l.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "Calendar" navigation item is removed.'),o.a.createElement(c.a,{onClick:function(){t(r.j("calendar"))},variant:"contained",color:"primary"},"Remove Navigation Item"),o.a.createElement(m.k,{component:"pre",className:"language-jsx mt-24"},'\n                                  <Button\n                                        onClick={()=> {\n                                            dispatch(Actions.removeNavigationItem(\'calendar\'))\n                                        }}\n                                        variant="contained"\n                                        color="primary"\n                                  >\n                                  Remove Navigation Item\n                                  </Button>\n                            ')),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.prependNavigationItem"),o.a.createElement(l.a,{className:"text-16 mb-8",component:"h2"},"Use ",o.a.createElement("code",null,"prependNavigationItem(",o.a.createElement("i",null,"object"),", ",o.a.createElement("i",null,"collapseId/groupId"),"?)")," action to prepend a navigation item into the navigation array."),o.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},o.a.createElement(l.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "fusetheme.com" navigation item is added at the top of the navigation array.'),o.a.createElement(c.a,{onClick:function(){t(r.i({id:"test-link-"+m.B.generateGUID(),title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"}))},variant:"contained",color:"primary"},"Prepend Navigation Item"),o.a.createElement(m.k,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.prependNavigationItem(\n                                            {\n                                                'id'    : 'test-link',\n                                                'title' : 'fusetheme.com',\n                                                'type'  : 'link',\n                                                'icon'  : 'link',\n                                                'url'   : 'http://fusetheme.com',\n                                                'target': '_blank'\n                                            }\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Prepend Navigation Item\n                                </Button>\n                                ")),o.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},o.a.createElement(l.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "fusetheme.com" navigation item is added into top of the "Dashboards" children.'),o.a.createElement(c.a,{onClick:function(){t(r.i({id:"test-link-"+m.B.generateGUID(),title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"},"dashboards"))},variant:"contained",color:"primary"},"Prepend Navigation Item"),o.a.createElement(m.k,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.prependNavigationItem(\n                                            {\n                                                'id'    : 'test-link',\n                                                'title' : 'fusetheme.com',\n                                                'type'  : 'link',\n                                                'icon'  : 'link',\n                                                'url'   : 'http://fusetheme.com',\n                                                'target': '_blank'\n                                            }, 'dashboards'\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Prepend Navigation Item\n                                </Button>\n                                ")),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.appendNavigationItem"),o.a.createElement(l.a,{className:"text-16 mb-8",component:"h2"},"Use ",o.a.createElement("code",null,"appendNavigationItem(",o.a.createElement("i",null,"object"),", ",o.a.createElement("i",null,"collapseId/groupId"),"?)")," action to append a navigation item into the navigation array."),o.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},o.a.createElement(l.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "fusetheme.com" navigation item is added at the bottom of the array.'),o.a.createElement(c.a,{onClick:function(){t(r.a({id:"test-link-"+m.B.generateGUID(),title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"}))},variant:"contained",color:"primary"},"Append Navigation Item"),o.a.createElement(m.k,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.appendNavigationItem(\n                                            {\n                                                'id'    : 'test-link',\n                                                'title' : 'fusetheme.com',\n                                                'type'  : 'link',\n                                                'icon'  : 'link',\n                                                'url'   : 'http://fusetheme.com',\n                                                'target': '_blank'\n                                            }\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Append Navigation Item\n                                </Button>\n                                ")),o.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},o.a.createElement(l.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "fusetheme.com" navigation item is added into bottom of the "Dashboards" children.'),o.a.createElement(c.a,{onClick:function(){t(r.a({id:"test-link-"+m.B.generateGUID(),title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"},"dashboards"))},variant:"contained",color:"primary"},"Append Navigation Item"),o.a.createElement(m.k,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.appendNavigationItem(\n                                            {\n                                                'id'    : 'test-link',\n                                                'title' : 'fusetheme.com',\n                                                'type'  : 'link',\n                                                'icon'  : 'link',\n                                                'url'   : 'http://fusetheme.com',\n                                                'target': '_blank'\n                                            }, 'dashboards'\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Append Navigation Item\n                                </Button>\n                                ")))})}}}]);