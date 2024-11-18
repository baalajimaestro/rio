"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[2433],{8682:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"features/vi-mode","title":"Vi mode","description":"Rio implements the Vi mode feature originally from Alacritty.","source":"@site/docs/features/vi-mode.md","sourceDirName":"features","slug":"/features/vi-mode","permalink":"/rio/ko/docs/features/vi-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/features/vi-mode.md","tags":[],"version":"current","frontMatter":{"title":"Vi mode","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"Split panels","permalink":"/rio/ko/docs/features/split-panels"},"next":{"title":"Frequently Asked Questions","permalink":"/rio/ko/docs/frequently-asked-questions/"}}');var d=l(4848),s=l(8453);const n={title:"Vi mode",language:"en"},c=void 0,r={},x=[];function o(e){const t={a:"a",code:"code",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:["Rio implements the Vi mode feature originally from ",(0,d.jsx)(t.a,{href:"https://github.com/alacritty/alacritty/blob/master/docs/features.md#vi-mode",children:"Alacritty"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:["By default you can launch Vi mode by using ",(0,d.jsx)(t.code,{children:"alt"})," + ",(0,d.jsx)(t.code,{children:"shift"})," + ",(0,d.jsx)(t.code,{children:"space"}),"."]}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.img,{alt:"Demo Vi mode",src:l(9825).A+"",width:"640",height:"462"})}),"\n",(0,d.jsxs)(t.p,{children:["Below you can see the list of all default key bindings related to Vi mode. If you don't like of any specified key binding you can always turn off or modify (check ",(0,d.jsx)(t.a,{href:"/docs/default-key-bindings",children:"key bindings documentation section"})," for more information)."]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Trigger"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Action"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Condition"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"alt"})," + ",(0,d.jsx)(t.code,{children:"shift"})," + ",(0,d.jsx)(t.code,{children:"space"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Toggle Vi Mode"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"No restriction"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"i"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Toggle Vi Mode"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"control"})," + ",(0,d.jsx)(t.code,{children:"c"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Toggle Vi Mode"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"y"})}),(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"Copy"})," or ",(0,d.jsx)(t.code,{children:"ClearSelection"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"v"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Start normal selection"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"v"})," + ",(0,d.jsx)(t.code,{children:"shift"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Start line selection"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"v"})," + ",(0,d.jsx)(t.code,{children:"control"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Start block selection"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"v"})," + ",(0,d.jsx)(t.code,{children:"alt"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Start semantic selection"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"z"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Center around Vi cursor"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"y"})," + ",(0,d.jsx)(t.code,{children:"control"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Scroll up 1 line"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"e"})," + ",(0,d.jsx)(t.code,{children:"control"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Scroll down 1 line"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"b"})," + ",(0,d.jsx)(t.code,{children:"control"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Scroll page up"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"u"})," + ",(0,d.jsx)(t.code,{children:"control"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Scroll half page up"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"d"})," + ",(0,d.jsx)(t.code,{children:"control"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Scroll half page down"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"e"})," + ",(0,d.jsx)(t.code,{children:"control"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Scroll down 1 line"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"k"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move cursor up"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"j"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move cursor down"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"h"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move cursor left"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"l"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move cursor right"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Arrow up"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move cursor up"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Arrow down"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move cursor down"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Arrow left"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move cursor left"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Arrow right"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move cursor right"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"0"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move first"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"4"})," + ",(0,d.jsx)(t.code,{children:"shift"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move last"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"6"})," + ",(0,d.jsx)(t.code,{children:"shift"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move first occupied"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"h"})," + ",(0,d.jsx)(t.code,{children:"shift"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move high"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"m"})," + ",(0,d.jsx)(t.code,{children:"shift"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move middle"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"l"})," + ",(0,d.jsx)(t.code,{children:"shift"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move low"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"b"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move semantic left"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"w"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move semantic right"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"e"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move semantic right end"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"b"})," + ",(0,d.jsx)(t.code,{children:"shift"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move word left"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"w"})," + ",(0,d.jsx)(t.code,{children:"shift"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move word right"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"e"})," + ",(0,d.jsx)(t.code,{children:"shift"})]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move word right end"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"5"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Move by bracket rule"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Vi mode is activated"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},9825:(e,t,l)=>{l.d(t,{A:()=>i});const i=l.p+"assets/images/demo-vi-mode-27a4264d4d1ffe0266336aafc2d40240.gif"},8453:(e,t,l)=>{l.d(t,{R:()=>n,x:()=>c});var i=l(6540);const d={},s=i.createContext(d);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);