"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[4021],{8865:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"config/fonts","title":"fonts","description":"Configure fonts used by the terminal.","source":"@site/docs/config/fonts.md","sourceDirName":"config","slug":"/config/fonts","permalink":"/rio/pl/docs/config/fonts","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/config/fonts.md","tags":[],"version":"current","frontMatter":{"title":"fonts","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"env-vars","permalink":"/rio/pl/docs/config/env-vars"},"next":{"title":"ignore-selection-foreground-color","permalink":"/rio/pl/docs/config/ignore-selection-foreground-color"}}');var i=o(4848),s=o(8453);const l={title:"fonts",language:"en"},a=void 0,r={},c=[{value:"Extra fonts",id:"extra-fonts",level:2},{value:"Font features",id:"font-features",level:2},{value:"Default configuration",id:"default-configuration",level:2},{value:"Emojis",id:"emojis",level:2},{value:"Hinting",id:"hinting",level:2},{value:"User interface",id:"user-interface",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Configure fonts used by the terminal."}),"\n",(0,i.jsx)(n.p,{children:"Note: You can set different font families but Rio terminal\nwill always look for regular font bounds whene"}),"\n",(0,i.jsx)(n.p,{children:"You can also set family on root to overwrite all fonts."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[fonts]\nfamily = "cascadiacode"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"extra-fonts",children:"Extra fonts"}),"\n",(0,i.jsx)(n.p,{children:"You can also specify extra fonts to load:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[fonts]\nextras = [{ family = "Microsoft JhengHei" }]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"font-features",children:"Font features"}),"\n",(0,i.jsx)(n.p,{children:"In case you want to specify any font feature:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[fonts]\nfeatures = ["ss02", "ss03", "ss05", "ss19"]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note: Font features do not have support to live reload on configuration, so to reflect your changes, you will need to close and reopen Rio."}),"\n",(0,i.jsx)(n.h2,{id:"default-configuration",children:"Default configuration"}),"\n",(0,i.jsx)(n.p,{children:"The font configuration default:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[fonts]\nsize = 18\nfeatures = []\n\n[fonts.regular]\nfamily = "cascadiacode"\nstyle = "normal"\nwidth = "Normal"\nweight = 400\n\n[fonts.bold]\nfamily = "cascadiacode"\nstyle = "normal"\nwidth = "Normal"\nweight = 800\n\n[fonts.italic]\nfamily = "cascadiacode"\nstyle = "italic"\nwidth = "Normal"\nweight = 400\n\n[fonts.bold-italic]\nfamily = "cascadiacode"\nstyle = "italic"\nwidth = "Normal"\nweight = 800\n'})}),"\n",(0,i.jsx)(n.h2,{id:"emojis",children:"Emojis"}),"\n",(0,i.jsx)(n.p,{children:"You can also specify which emoji font you would like to use, by default will be loaded a built-in Twemoji color by Mozilla."}),"\n",(0,i.jsx)(n.p,{children:"In case you would like to change:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'# Apple\n# [fonts.emoji]\n# family = "Apple Color Emoji"\n\n# In case you have Noto Color Emoji installed\n# [fonts.emoji]\n# family = "Noto Color Emoji"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"hinting",children:"Hinting"}),"\n",(0,i.jsx)(n.p,{children:"Enable or disable font hinting. It is enabled by default."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[fonts]\nhinting = true\n"})}),"\n",(0,i.jsx)(n.h2,{id:"user-interface",children:"User interface"}),"\n",(0,i.jsx)(n.p,{children:"You can specify user interface font on Rio."}),"\n",(0,i.jsxs)(n.p,{children:["Note: ",(0,i.jsx)(n.code,{children:"fonts.ui"})," does not have live reload configuration update, you need to close and open Rio again."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[fonts.ui]\nfamily = "Departure Mono"\n'})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>a});var t=o(6540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);