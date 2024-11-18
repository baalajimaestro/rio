"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[1156],{3613:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});const d=JSON.parse('{"id":"config/window","title":"window","description":"- width - define the initial window width.","source":"@site/docs/config/window.md","sourceDirName":"config","slug":"/config/window","permalink":"/rio/zh-hant/docs/config/window","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/config/window.md","tags":[],"version":"current","frontMatter":{"title":"window","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"use-fork","permalink":"/rio/zh-hant/docs/config/use-fork"},"next":{"title":"Default colors","permalink":"/rio/zh-hant/docs/default-colors"}}');var s=i(4848),c=i(8453);const o={title:"window",language:"en"},r=void 0,l={},a=[{value:"Using blur and background opacity:",id:"using-blur-and-background-opacity",level:3},{value:"Using image as background:",id:"using-image-as-background",level:3},{value:"MacOS: Unified titlebar",id:"macos-unified-titlebar",level:3}];function t(e){const n={code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"width"})," - define the initial window width."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"600"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"height"})," - define the initial window height."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"400"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mode"})," - define how the window will be created"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Windowed"})," (default) is based on width and height"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Maximized"})," window is created with maximized"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Fullscreen"})," window is created with fullscreen"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"opacity"})," Set window background opacity."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"1.0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"blur"})," Set blur on the window background. Changing this config requires restarting Rio to take effect."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"background-image"})," Set an image as background."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"decorations"})," - Set window decorations"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Enabled"})," (default for Windows/Linux/BSD) enable window decorations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Disabled"})," disable all window decorations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Transparent"})," (default for MacOS) window decorations with transparency."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Buttonless"})," remove buttons from window decorations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[window]\nwidth = 600\nheight = 400\nmode = "Windowed"\nopacity = 1.0\nblur = false\ndecorations = "Enabled"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"using-blur-and-background-opacity",children:"Using blur and background opacity:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[window]\nopacity = 0.5\ndecorations = "enabled"\nblur = true\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo blur and background opacity",src:i(8429).A+"",width:"1592",height:"1152"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo blur and background opacity 2",src:i(6304).A+"",width:"1922",height:"1080"})}),"\n",(0,s.jsx)(n.h3,{id:"using-image-as-background",children:"Using image as background:"}),"\n",(0,s.jsxs)(n.p,{children:["If both properties ",(0,s.jsx)(n.code,{children:"width"})," and ",(0,s.jsx)(n.code,{children:"height"})," are occluded then background image will use the terminal width/height."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[window.background-image]\npath = "/Users/hugoamor/Desktop/musashi.png"\nopacity = 0.5\nx = 0.0\ny = -100.0\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo image as background",src:i(4122).A+"",width:"1538",height:"1064"})}),"\n",(0,s.jsxs)(n.p,{children:["If any property ",(0,s.jsx)(n.code,{children:"width"})," or ",(0,s.jsx)(n.code,{children:"height"})," are used then background image will be respected."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[window.background-image]\npath = "/Users/hugoamor/Desktop/harvest-moon.png"\nwidth = 1200\nheight = 800\nopacity = 0.5\nx = 0.0\ny = 0.0\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo image as background",src:i(9466).A+"",width:"1824",height:"1224"})}),"\n",(0,s.jsx)(n.h3,{id:"macos-unified-titlebar",children:"MacOS: Unified titlebar"}),"\n",(0,s.jsx)(n.p,{children:"You can use MacOS unified titlebar by config, it's disabled by default."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:"[window]\nmacos-use-unified-titlebar = false\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo unified titlebar",src:i(40).A+"",width:"1824",height:"1384"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},9466:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/demo-background-image-partial-3e5d1ddfde96fee290bd229149634fdb.png"},4122:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/demo-background-image-4d29d27b29f4e444761920928e691218.png"},8429:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/demo-macos-blur-ebfc5442d2e668dd82f6be67a561a4bd.png"},40:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/demo-macos-unified-titlebar-52c9a5823e21535283bac627dfb07d96.png"},6304:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/demos-nixos-blur-dfa4b67dda6acce0ed64d810d3276bac.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var d=i(6540);const s={},c=d.createContext(s);function o(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);