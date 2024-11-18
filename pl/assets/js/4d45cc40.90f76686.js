"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[5884],{1440:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"features/sixel-protocol","title":"Sixel protocol","description":"Sixel, short for \\"six pixels\\", is a bitmap graphics format supported by terminals and printers from DEC. It consists of a pattern six pixels high and one wide, resulting in 64 possible patterns. Each possible pattern is assigned an ASCII character, making the sixels easy to transmit on 7-bit serial links.","source":"@site/docs/features/sixel-protocol.md","sourceDirName":"features","slug":"/features/sixel-protocol","permalink":"/rio/pl/docs/features/sixel-protocol","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/features/sixel-protocol.md","tags":[],"version":"current","frontMatter":{"title":"Sixel protocol","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"Rio is Fast","permalink":"/rio/pl/docs/features/rio-is-fast"},"next":{"title":"Spawn or Fork","permalink":"/rio/pl/docs/features/spawn-or-fork"}}');var o=s(4848),r=s(8453);const n={title:"Sixel protocol",language:"en"},a=void 0,l={},c=[];function p(e){const t={a:"a",blockquote:"blockquote",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:'Sixel, short for "six pixels", is a bitmap graphics format supported by terminals and printers from DEC. It consists of a pattern six pixels high and one wide, resulting in 64 possible patterns. Each possible pattern is assigned an ASCII character, making the sixels easy to transmit on 7-bit serial links.'}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Demo of sixel on Rio."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Demo sixel as gif",src:s(627).A+"",width:"800",height:"565"})}),"\n",(0,o.jsx)(t.p,{children:'Sixel was first introduced as a way of sending bitmap graphics to DEC dot matrix printers like the LA50. After being put into "sixel mode" the following data was interpreted to directly control six of the pins in the nine-pin print head. A string of sixel characters encodes a single 6-pixel high row of the image.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Demo sixel with timg",src:s(161).A+"",width:"1156",height:"826"})}),"\n",(0,o.jsx)(t.p,{children:"The system was later re-used as a way to send bitmap data to the VT200 series and VT320 terminals when defining custom character sets. A series of sixels are used to transfer the bitmap for each character. This feature is known as soft character sets or dynamically redefinable character sets (DRCS). With the VT240, VT241, VT330, and VT340, the terminals could decode a complete sixel image to the screen, like those previously sent to printers."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Demo sixel",src:s(7700).A+"",width:"2810",height:"1960"})}),"\n",(0,o.jsxs)(t.p,{children:["For more information on Sixel: ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Sixel",children:"en.wikipedia.org/wiki/Sixel"})]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},161:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/demo-sixel-2-a4997b091c40f3eb9fc9ddd648f9a859.png"},627:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/demo-sixel-cb1f23c1c25a508d38889253607d4514.gif"},7700:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/demo-sixel-1004e7736a31fafb4461edac9b567dfa.png"},8453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>a});var i=s(6540);const o={},r=i.createContext(o);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);