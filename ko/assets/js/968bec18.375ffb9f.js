"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[2999],{8221:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"config/bindings","title":"bindings","description":"You can see the default default key bindings","source":"@site/docs/config/bindings.md","sourceDirName":"config","slug":"/config/bindings","permalink":"/rio/ko/docs/config/bindings","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/config/bindings.md","tags":[],"version":"current","frontMatter":{"title":"bindings","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"Configuration file","permalink":"/rio/ko/docs/config/"},"next":{"title":"colors","permalink":"/rio/ko/docs/config/colors"}}');var i=l(4848),s=l(8453);const d={title:"bindings",language:"en"},c=void 0,r={},h=[{value:"Key",id:"key",level:2},{value:"Action",id:"action",level:2},{value:"Basic Actions",id:"basic-actions",level:3},{value:"Split Actions",id:"split-actions",level:3},{value:"Tab Actions",id:"tab-actions",level:3},{value:"Scroll Actions",id:"scroll-actions",level:3},{value:"Search Actions",id:"search-actions",level:3},{value:"Bytes",id:"bytes",level:2},{value:"With",id:"with",level:2},{value:"Mode",id:"mode",level:2},{value:"Text",id:"text",level:2},{value:"Overwriting",id:"overwriting",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["You can see the default ",(0,i.jsx)(t.a,{href:"/docs/default-key-bindings",children:"default key bindings"})]}),"\n",(0,i.jsx)(t.p,{children:"Rio allows you to add new keybindings and overwrite any default key bindings."}),"\n",(0,i.jsx)(t.p,{children:"Bindings are built using the following trigger fields:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#key",children:"key"})}),(0,i.jsx)(t.td,{children:"The key pressed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#with",children:"with"})}),(0,i.jsx)(t.td,{children:"Modifier keys"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#mode",children:"mode"})}),(0,i.jsx)(t.td,{children:"Terminal mode"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Whom can be be combined with the following effect fields:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#action",children:"action"})}),(0,i.jsx)(t.td,{children:"Predefined Rio actions"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#bytes",children:"bytes"})}),(0,i.jsx)(t.td,{children:"Write byte sequence"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#text",children:"text"})}),(0,i.jsx)(t.td,{children:"Write text sequence"})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:'[bindings]\nkeys = [\n  { key = "q", with = "super", action = "Quit" },\n  # Bytes[27, 91, 53, 126] is equivalent to "\\x1b[5~"\n  { key = "home", with = "super | shift", bytes = [27, 91, 53, 126] },\n  # Remove existing keybind\n  { key = "v", with = "control | shift", action = "none" },\n]\n'})}),"\n",(0,i.jsx)(t.h2,{id:"key",children:(0,i.jsx)(t.a,{href:"#key",children:"Key"})}),"\n",(0,i.jsx)(t.p,{children:"Each value in key binding will specify an identifier of the key pressed:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"a-z"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"0-9"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"F1-F24"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tab"})," ",(0,i.jsx)(t.code,{children:"esc"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"home"})," ",(0,i.jsx)(t.code,{children:"space"})," ",(0,i.jsx)(t.code,{children:"delete"})," ",(0,i.jsx)(t.code,{children:"insert"})," ",(0,i.jsx)(t.code,{children:"pageup"})," ",(0,i.jsx)(t.code,{children:"pagedown"})," ",(0,i.jsx)(t.code,{children:"end"})," ",(0,i.jsx)(t.code,{children:"back"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"up"})," ",(0,i.jsx)(t.code,{children:"down"})," ",(0,i.jsx)(t.code,{children:"left"})," ",(0,i.jsx)(t.code,{children:"right"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@"})," ",(0,i.jsx)(t.code,{children:"colon"})," ",(0,i.jsx)(t.code,{children:"."})," ",(0,i.jsx)(t.code,{children:"return"})," ",(0,i.jsx)(t.code,{children:"["})," ",(0,i.jsx)(t.code,{children:"]"})," ",(0,i.jsx)(t.code,{children:";"})," ",(0,i.jsx)(t.code,{children:"\\\\"})," ",(0,i.jsx)(t.code,{children:"+"})," ",(0,i.jsx)(t.code,{children:","})," ",(0,i.jsx)(t.code,{children:"/"})," ",(0,i.jsx)(t.code,{children:"="})," ",(0,i.jsx)(t.code,{children:"-"})," ",(0,i.jsx)(t.code,{children:"*"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"numpadenter"})," ",(0,i.jsx)(t.code,{children:"numpadadd"})," ",(0,i.jsx)(t.code,{children:"numpadcomma"})," ",(0,i.jsx)(t.code,{children:"numpaddivide"})," ",(0,i.jsx)(t.code,{children:"numpadequals"})," ",(0,i.jsx)(t.code,{children:"numpadsubtract"})," ",(0,i.jsx)(t.code,{children:"numpadmultiply"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"numpad1"})," ",(0,i.jsx)(t.code,{children:"numpad2"})," ",(0,i.jsx)(t.code,{children:"numpad3"})," ",(0,i.jsx)(t.code,{children:"numpad4"})," ",(0,i.jsx)(t.code,{children:"numpad5"})," ",(0,i.jsx)(t.code,{children:"numpad6"})," ",(0,i.jsx)(t.code,{children:"numpad7"})," ",(0,i.jsx)(t.code,{children:"numpad8"})," ",(0,i.jsx)(t.code,{children:"numpad9"})," ",(0,i.jsx)(t.code,{children:"numpad0"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"action",children:(0,i.jsx)(t.a,{href:"#action",children:"Action"})}),"\n",(0,i.jsx)(t.p,{children:"Execute a predefined action in Rio terminal."}),"\n",(0,i.jsx)(t.h3,{id:"basic-actions",children:(0,i.jsx)(t.a,{href:"#basic-actions",children:"Basic Actions"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Action"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"None"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ReceiveChar"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ToggleVIMode"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Paste"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Paste command"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Copy"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Copy command"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"OpenConfigEditor"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Open configuration file on configured editor property"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ResetFontSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IncreaseFontSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DecreaseFontSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Run(string)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Example: Running command ",(0,i.jsx)(t.code,{children:"Run(code)"})," or ",(0,i.jsx)(t.code,{children:"Run(code ~/.config/rio/config.toml)"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"PasteSelection"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ClearSelection"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CreateWindow"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Create a Rio window instance"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Quit"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Exit Rio"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"split-actions",children:(0,i.jsx)(t.a,{href:"#split-actions",children:"Split Actions"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Action"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SplitRigh"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Create a split by right side"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SplitDown"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Create a split by under current pane"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SelectNextSplit"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Select next split"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SelectPrevSplit"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Select previous split"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CloseSplitOrTab"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Close split, if split is the last then will close the tab"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"tab-actions",children:(0,i.jsx)(t.a,{href:"#tab-actions",children:"Tab Actions"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Action"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CreateTab"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CloseTab"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CloseUnfocusedTabs"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SelectPrevTab"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SelectNextTab"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SelectLastTab"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SelectTab(tab_index)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Example: Select first tab ",(0,i.jsx)(t.code,{children:"SelectTab(0)"}),", second tab ",(0,i.jsx)(t.code,{children:"SelectTab(1)"})]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"scroll-actions",children:(0,i.jsx)(t.a,{href:"#scroll-actions",children:"Scroll Actions"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Action"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Scroll(int)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Example: Scroll up 8 lines ",(0,i.jsx)(t.code,{children:"Scroll(8)"})," or scroll down 5 lines ",(0,i.jsx)(t.code,{children:"Scroll(-5)"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ScrollPageUp"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ScrollPageDown"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ScrollHalfPageUp"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ScrollHalfPageDown"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ScrollToTop"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ScrollToBottom"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"search-actions",children:(0,i.jsx)(t.a,{href:"#search-actions",children:"Search Actions"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Action"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SearchForward"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SearchBackward"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SearchConfirm"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SearchClear"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SearchFocusNext"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SearchFocusPrevious"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SearchDeleteWord"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SearchHistoryNext"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SearchHistoryPrevious"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"bytes",children:(0,i.jsx)(t.a,{href:"#bytes",children:"Bytes"})}),"\n",(0,i.jsx)(t.p,{children:"Send a byte sequence to the running application."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"bytes"})," field writes the specified string to the terminal. This makes\nit possible to pass escape sequences, like ",(0,i.jsx)(t.code,{children:"PageUp"}),' ("\\x1b[5~"). Note that applications use terminfo to map escape sequences back\nto keys. It is therefore required to update the terminfo when changing an escape sequence.']}),"\n",(0,i.jsx)(t.h2,{id:"with",children:(0,i.jsx)(t.a,{href:"#with",children:"With"})}),"\n",(0,i.jsx)(t.p,{children:"Key modifiers to filter binding actions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"none"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"control"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"option"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"super"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"shift"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"alt"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Multiple modifiers can be combined using ",(0,i.jsx)(t.code,{children:"|"})," like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:'with = "control | shift"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"mode",children:(0,i.jsx)(t.a,{href:"#mode",children:"Mode"})}),"\n",(0,i.jsx)(t.p,{children:"There is currently four different modes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"vi"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"alt"})," (Alt screen)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"appcursor"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"appkeypad"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"~"})," can be prefixed to disable the keybind while in that mode."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:'[bindings]\nkeys = [\n  # Enable VI mode on escape, when not in VI mode.\n  { key = "esc", mode = "~vi", action = "ToggleVIMode" },\n]\n'})}),"\n",(0,i.jsx)(t.h2,{id:"text",children:(0,i.jsx)(t.a,{href:"#text",children:"Text"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"text"})," can be used to write specific text on key press:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:'[bindings]\nkeys = [\n  # Write `Rio is awesome!` on `Control + r`\n  { key = "r", with = "control", text = "Rio is awesome!" },\n]\n'})}),"\n",(0,i.jsx)(t.h2,{id:"overwriting",children:(0,i.jsx)(t.a,{href:"#overwriting",children:"Overwriting"})}),"\n",(0,i.jsxs)(t.p,{children:["Bindings are always filled by default, but will be replaced when a new binding with the same triggers is defined. To unset a default binding, it can be mapped to the ",(0,i.jsx)(t.code,{children:"ReceiveChar"})," action. Alternatively, you can use ",(0,i.jsx)(t.code,{children:"None"})," for a no-op if you do not wish to receive input characters for that binding."]}),"\n",(0,i.jsx)(t.p,{children:"The example below will disable window creation binding in the macos:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:'[bindings]\nkeys = [\n  { key = "n", with = "super", action = "ReceiveChar" }\n]\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ReceiveChar"})," will treat the binding as non existent and simply receive the input and put the character into the terminal."]}),"\n",(0,i.jsxs)(t.p,{children:["Optionally you can ignore/disable completely a binding using ",(0,i.jsx)(t.code,{children:"None"}),'. In the example below, whenever you use key "n" along with "super" key nothing will happen.']}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:'[bindings]\nkeys = [\n  { key = "n", with = "super", action = "None" }\n]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If you are missing a key binding that you believe that should be a default in the platform that you are using, feel free to ",(0,i.jsx)(t.a,{href:"https://github.com/raphamorim/rio",children:"open an issue"}),"."]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>c});var n=l(6540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);