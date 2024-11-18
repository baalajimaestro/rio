"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[8509],{5079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var i=t(5432),o=t(4848),a=t(8453);const s={layout:"post",title:"New font configuration API and native tabs",date:"2023-08-29 17:53",description:"Rio terminal release: New font configuration API, native tabs, kitty keyboard protocol and other stuff.",categories:"windows macos linux webassembly"},l=void 0,r={authorsImageUrls:[]},c=[{value:"Highlights",id:"highlights",level:2},{value:"Breaking change: New font API",id:"breaking-change-new-font-api",level:2},{value:"Native Tabs (macOs only)",id:"native-tabs-macos-only",level:2},{value:"Changelog of v0.0.17 along with v0.0.16",id:"changelog-of-v0017-along-with-v0016",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This post also includes changes from v0.0.16 and v0.0.17."}),"\n",(0,o.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"New font configuration API."}),"\n",(0,o.jsx)(n.li,{children:"Native Tabs for MacOS."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"breaking-change-new-font-api",children:"Breaking change: New font API"}),"\n",(0,o.jsx)(n.p,{children:"If you don't use Rio default font configuration you will be affected by this change."}),"\n",(0,o.jsx)(n.p,{children:'A new API has been introduced to select fonts, now you can configure even different font families for "regular", "bold", "italic" and "bold-italic".'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[fonts]\nsize = 18\n\n[fonts.regular]\nfamily = "cascadiamono"\nstyle = "normal"\nweight = 400\n\n[fonts.bold]\nfamily = "cascadiamono"\nstyle = "normal"\nweight = 800\n\n[fonts.italic]\nfamily = "cascadiamono"\nstyle = "italic"\nweight = 400\n\n[fonts.bold-italic]\nfamily = "cascadiamono"\nstyle = "italic"\nweight = 800\n'})}),"\n",(0,o.jsx)(n.h2,{id:"native-tabs-macos-only",children:"Native Tabs (macOs only)"}),"\n",(0,o.jsx)(n.p,{children:"Native tabs have arrived for MacOS users."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"native tab example",src:t(6658).A+"",width:"748",height:"579"})}),"\n",(0,o.jsx)(n.p,{children:'To configure it you will need to update the configuration file and set navigation mode as "NativeTab":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "NativeTab"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"changelog-of-v0017-along-with-v0016",children:"Changelog of v0.0.17 along with v0.0.16"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Configuration "font" does not work anymore, a new configuration API of font selection has been introduced.'}),"\n",(0,o.jsx)(n.li,{children:'Action "TabSwitchNext" and "TabSwitchPrev" has been renamed to "SelectNextTab" and "SelectPrevTab".'}),"\n",(0,o.jsx)(n.li,{children:'Support to "NativeTab" (MacOS only).'}),"\n",(0,o.jsxs)(n.li,{children:['Support for kitty\'s keyboard protocol ("CSI u"). Ref: ',(0,o.jsx)(n.a,{href:"https://sw.kovidgoyal.net/kitty/keyboard-protocol/",children:"https://sw.kovidgoyal.net/kitty/keyboard-protocol/"})]}),"\n",(0,o.jsx)(n.li,{children:'Added new actions for tab selection: "SelectTab1", "SelectTab2", "SelectTab3", "SelectTab4", "SelectTab5", "SelectTab6", "SelectTab7", "SelectTab8", "SelectTab9", "SelectLastTab".'}),"\n",(0,o.jsx)(n.li,{children:"Support lowercased action and fix overwrite for actions in custom key bindings."}),"\n",(0,o.jsx)(n.li,{children:'Added action "Minimize" for minimize Rio terminal window.'}),"\n",(0,o.jsx)(n.li,{children:'Added action "ClearHistory" for clear terminal saved history.'}),"\n",(0,o.jsx)(n.li,{children:'Added action "ReceiveChar" for custom key bindings.'}),"\n",(0,o.jsx)(n.li,{children:"New default key bindings for Linux and Windows so that conflicts with readline key bindings are removed."}),"\n",(0,o.jsx)(n.li,{children:"Winit Version 0.29.1-beta."}),"\n",(0,o.jsxs)(n.li,{children:["Allow paste with the middle mouse of the button (fixes ",(0,o.jsx)(n.a,{href:"https://github.com/raphamorim/rio/issues/123",children:"https://github.com/raphamorim/rio/issues/123"}),")."]}),"\n",(0,o.jsx)(n.li,{children:"Support startup notify protocol to raise initial window on Wayland/X11."}),"\n",(0,o.jsx)(n.li,{children:"Fix Double-tap by touchpad on the titlebar doesn't maximize/unmaximize the window in GNOME 44, Wayland."}),"\n",(0,o.jsx)(n.li,{children:"Fix tab/breadcrumb bug introduced in 0.0.15"}),"\n",(0,o.jsx)(n.li,{children:'Introduce new configuration property: "navigation.macos-hide-window-button".'}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6658:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/demo-native-tabs-663d9555fa1db6e9400021fd83a8f2a9.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}},5432:e=>{e.exports=JSON.parse('{"permalink":"/rio/es/blog/2023/08/29/release-0.0.17","editUrl":"https://github.com/raphamorim/rio/tree/main/docs/blog/2023-08-29-release-0.0.17.md","source":"@site/blog/2023-08-29-release-0.0.17.md","title":"New font configuration API and native tabs","description":"Rio terminal release: New font configuration API, native tabs, kitty keyboard protocol and other stuff.","date":"2023-08-29T17:53:00.000Z","tags":[],"readingTime":1.655,"hasTruncateMarker":false,"authors":[],"frontMatter":{"layout":"post","title":"New font configuration API and native tabs","date":"2023-08-29 17:53","description":"Rio terminal release: New font configuration API, native tabs, kitty keyboard protocol and other stuff.","categories":"windows macos linux webassembly"},"unlisted":false,"prevItem":{"title":"Settings UI, Welcome UI, Adaptive theme, crates.io and more","permalink":"/rio/es/blog/2023/09/19/release-0.0.19"},"nextItem":{"title":"Support to tabs, custom key bindings, performance improvements and other updates","permalink":"/rio/es/blog/2023/08/02/release-0.0.15"}}')}}]);