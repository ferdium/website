(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3087:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(9462)}])},5348:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.9fc5c374.png",height:1e3,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42h3Kv0rDUBQH4N+5uTFRTHWQkiGLD+DsE6hBJd19AIuToFj8two+h4Obg60Uig/gorh0c1IQi4ZcorVoknOuttO3fAQAp/E9jYL5ExJOIAwr0qHcnAEQ2m2NyBt8dG3FMSwDIgAzCNLznc917byZo+ydYjAV1RdpVIDrUfXvWhDWjrXj6WRly0c6KPVqI1CKLHpXmV4IFR5uh4kyKcGf0Wju1+E4CiCF7VaE6VkX2Qusnqvr685lsfx4l/Jzv4QtGYtLxK/9QtUit00AcLBjbn6+ecObEkAYv0OG70s3v3janIS9Zg5FfCilNMZBQdomCs8B2D9xcGuDxn2zJAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},7352:function(e,t,n){"use strict";var i=n(2676);n(5271);var r=n(5405),s=n.n(r);t.Z=e=>{let t=s().base;e.cta&&(t=s().cta),e.cta2&&(t=s().ctaSecondary),e.square&&(t+=" ".concat(s().square)),e.size&&(t+=" ".concat(s()[e.size])),e.icon&&(t+=" ".concat(s().icon));let n=(0,i.jsxs)(i.Fragment,{children:[e.prefix?(0,i.jsx)("div",{className:s().prefix,children:e.prefix}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{children:e.children})]});return e.asDiv?(0,i.jsx)("div",{className:t,"aria-label":e["aria-label"],children:n}):(0,i.jsx)("button",{className:t,onClick:e.onClick,"aria-label":e["aria-label"],children:n})}},3343:function(e,t,n){"use strict";var i=n(2676);n(5271);var r=n(7352),s=n(5573),a=n(3082),o=n(206),c=n.n(o),l=n(1818);let d=[{key:"github",name:"GitHub",link:"https://github.com/ferdium/ferdium-app",icon:a.LcO},{key:"discord",name:"Discord",link:"https://discord.gg/jVv4Qns8pP",icon:a.Vrx},{key:"reddit",name:"Reddit",link:"https://www.reddit.com/r/ferdium",icon:a.J1f},{key:"twitter",name:"Twitter",link:"https://twitter.com/ferdiumteam",icon:a.SGh}];t.Z=e=>e.icons?(0,i.jsx)("div",{className:c().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let t=d.find(t=>t.key===e);return t?(0,i.jsx)(l.Z,{href:t.link,"aria-label":"".concat(t.name," link"),neutral:!0,children:(0,i.jsx)(s.Z,{size:1,icon:t.icon})},e):(0,i.jsx)(i.Fragment,{})})})}):(0,i.jsx)("div",{className:c().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let t=d.find(t=>t.key===e);return t?(0,i.jsx)(l.Z,{href:t.link,neutral:!0,children:(0,i.jsx)(r.Z,{asDiv:!0,prefix:(0,i.jsx)(s.Z,{icon:t.icon,size:1}),children:t.name})},e):(0,i.jsx)(i.Fragment,{})})})})},1818:function(e,t,n){"use strict";var i=n(2676);n(5271);var r=n(5547),s=n.n(r);t.Z=e=>(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer noopener","aria-label":e["aria-label"],className:e.neutral?s().neutral:"",children:e.children})},5386:function(e,t,n){"use strict";var i=n(2676),r=n(4229),s=n.n(r);n(5271),t.Z=e=>(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:e.title||"Ferdium | The home for all your services"}),(0,i.jsx)("meta",{name:"description",content:"Introducing a great productivity tool to keep all messaging, productivity, and online services in one place"})]})},5573:function(e,t,n){"use strict";var i=n(2676);n(5271);var r=n(6882),s=n.n(r);t.Z=e=>(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:(0,i.jsx)(s(),{size:e.size,path:e.icon,style:{margin:"auto"},color:e.color})})},9253:function(e,t,n){"use strict";n.d(t,{Z:function(){return components_Layout}});var i=n(2676),r=n(5271),s=n(3082),a=n(7500),o=n.n(a),c=n(7352),l=n(3343),d=n(5573),u=n(3597),components_Footer=e=>{function switchTheme(e){e?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"))}return(0,r.useEffect)(()=>{document.documentElement.getAttribute("data-theme")&&switchTheme("dark"===document.documentElement.getAttribute("data-theme"))},[]),(0,i.jsxs)("footer",{id:o().footer,children:[(0,i.jsx)("div",{className:o().links,children:(0,i.jsx)(l.Z,{services:["discord","github","reddit","twitter"],icons:!0})}),(0,i.jsxs)("div",{className:o().legal,children:[(0,i.jsx)(u.Z,{href:"/terms-of-service",children:"Terms of Service"}),(0,i.jsx)("div",{children:"\xa0&\xa0"}),(0,i.jsx)(u.Z,{href:"/privacy-policy",children:"Privacy Policy"})]}),(0,i.jsx)("div",{className:o().darkmode,children:(0,i.jsx)(c.Z,{onClick:()=>switchTheme("dark"!==document.documentElement.getAttribute("data-theme")),icon:!0,"aria-label":"Switch theme",children:(0,i.jsx)(d.Z,{size:1,icon:s.xEd})})})]})},h=n(9776),m=n.n(h),f=n(5348),x=n(8619),components_Header=e=>(0,i.jsx)("header",{id:m().header,children:(0,i.jsxs)("nav",{id:m().nav,children:[(0,i.jsx)(u.Z,{href:"/","aria-label":"Home link",children:(0,i.jsx)("div",{children:(0,i.jsx)(x.Z,{id:m().logo,src:f.Z,alt:"",width:46,height:46})})}),(0,i.jsxs)("div",{className:m().links,children:[(0,i.jsx)(u.Z,{href:"/faq",neutral:!0,children:"FAQ"}),(0,i.jsx)(u.Z,{href:"/download",children:(0,i.jsx)(c.Z,{cta:!0,asDiv:!0,size:"large",children:"Get Ferdium"})})]})]})}),_=n(6862),p=n.n(_),components_Layout=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(components_Header,{}),(0,i.jsx)("main",{id:p().main,children:e.children}),(0,i.jsx)(components_Footer,{})]})},3597:function(e,t,n){"use strict";var i=n(2676),r=n(9303),s=n.n(r);n(5271);var a=n(5857),o=n.n(a);t.Z=e=>(0,i.jsx)(s(),{href:e.href,"aria-label":e["aria-label"],className:e.neutral?o().neutral:void 0,children:e.children})},8619:function(e,t,n){"use strict";n.d(t,{Z:function(){return NonOptimizedImage}});var i=n(2676),r=n(563),s=n.n(r);let customLoader=e=>{let{src:t}=e;return t};function NonOptimizedImage(e){return(0,i.jsx)(s(),{...e,loader:customLoader,unoptimized:!e.width&&!e.height})}},4759:function(e,t,n){"use strict";var i=n(2676);n(5271);var r=n(3238),s=n.n(r);t.Z=e=>{let t=[s().content,e.className];return e.wide&&t.push(s().wide),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:s().section,children:[e.brand&&(0,i.jsx)("div",{className:s().brand}),(0,i.jsx)("div",{style:{flexDirection:e.row?"row":"column"},className:t.join(" "),children:e.children})]})})}},9462:function(e,t,n){"use strict";n.r(t);var i=n(2676),r=n(5386),s=n(9253),a=n(4759);n(5271),t.default=e=>(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{title:"Ferdium | Contact and support"}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"Contact and support"})}),(0,i.jsx)("h3",{children:(0,i.jsx)("strong",{children:"Having issues with Ferdium? We can help you out!"})}),(0,i.jsxs)("p",{children:["Ferdium, like any open source project, is maintained by a bunch of volunteers. If you are having some issues with the software, you can always try to contact the team. The easiest way to do this, is by"," ",(0,i.jsx)("a",{href:"https://discord.com/invite/jVv4Qns8pP",children:"joining our Discord server"}),"."]}),(0,i.jsxs)("p",{children:["If you have found a bug in the Ferdium application itself, or have an idea for a possible improvement, open an issue on the"," ",(0,i.jsx)("a",{href:"https://github.com/ferdium/ferdium-app/issues",children:"GitHub bug tracker"}),". When doing so, be sure to follow the guidelines in the description of the new issue when creating it. In case of any questions, come and chat in"," ",(0,i.jsx)("a",{href:"https://discord.gg/jVv4Qns8pP",children:"Discord"})," and we'll gladly help you."]}),(0,i.jsxs)("p",{children:["If you wish to participate in the Ferdium project, you are always welcome to join. We can use help in the areas of application development, website design and development, or even just people willing to test Ferdium and report issues they've found. You are free to create a"," ",(0,i.jsx)("a",{href:"https://github.com/ferdium/ferdium-app/pulls",children:"pull request on GitHub"})," and we will evaluate it."]})]})})]})},5405:function(e){e.exports={ctaSecondary:"Button_ctaSecondary__ncnmd",cta:"Button_cta___4KTX",base:"Button_base__7_tCN",large:"Button_large__chkvi",huge:"Button_huge__cFxyv",icon:"Button_icon__71oEZ",prefix:"Button_prefix__kkXiw",square:"Button_square__4QPYs"}},206:function(e){e.exports={links:"CommunityLinks_links___6PtI"}},5547:function(e){e.exports={neutral:"ExternalLink_neutral__GSVpj"}},7500:function(e){e.exports={footer:"Footer_footer__lD3vi",links:"Footer_links__C0oRR",legal:"Footer_legal__3uAQy",darkmode:"Footer_darkmode__rij5T"}},9776:function(e){e.exports={header:"Header_header__nSemd",links:"Header_links__6NhQ_",nav:"Header_nav__Fn39o",logo:"Header_logo__m4H7B"}},6862:function(){},5857:function(e){e.exports={neutral:"Link_neutral__2yL07"}},3238:function(e){e.exports={section:"Section_section__Eq0Zc",brand:"Section_brand__W0fM9",content:"Section_content__btQE_",wide:"Section_wide__jb0oQ"}},4229:function(e,t,n){e.exports=n(5899)}},function(e){e.O(0,[531,303,774,888,179],function(){return e(e.s=3087)}),_N_E=e.O()}]);