(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5003:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1630)}])},3304:function(e,r){"use strict";r.Z={src:"/_next/static/media/logo.9fc5c374.png",height:1e3,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42h3Kv0rDUBQH4N+5uTFRTHWQkiGLD+DsE6hBJd19AIuToFj8two+h4Obg60Uig/gorh0c1IQi4ZcorVoknOuttO3fAQAp/E9jYL5ExJOIAwr0qHcnAEQ2m2NyBt8dG3FMSwDIgAzCNLznc917byZo+ydYjAV1RdpVIDrUfXvWhDWjrXj6WRly0c6KPVqI1CKLHpXmV4IFR5uh4kyKcGf0Wju1+E4CiCF7VaE6VkX2Qusnqvr685lsfx4l/Jzv4QtGYtLxK/9QtUit00AcLBjbn6+ecObEkAYv0OG70s3v3janIS9Zg5FfCilNMZBQdomCs8B2D9xcGuDxn2zJAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},8636:function(e,r,n){"use strict";var i=n(2676);n(5271);var s=n(4238),a=n.n(s);r.Z=e=>{let r=a().base;e.cta&&(r=a().cta),e.cta2&&(r=a().ctaSecondary),e.square&&(r+=" ".concat(a().square)),e.size&&(r+=" ".concat(a()[e.size])),e.icon&&(r+=" ".concat(a().icon));let n=(0,i.jsxs)(i.Fragment,{children:[e.prefix?(0,i.jsx)("div",{className:a().prefix,children:e.prefix}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{children:e.children})]});return e.asDiv?(0,i.jsx)("div",{className:r,"aria-label":e["aria-label"],children:n}):(0,i.jsx)("button",{className:r,onClick:e.onClick,"aria-label":e["aria-label"],children:n})}},2954:function(e,r,n){"use strict";var i=n(2676);n(5271);var s=n(8636),a=n(6200),c=n(3082),t=n(7284),o=n.n(t),d=n(4606);let A=[{key:"github",name:"GitHub",link:"https://github.com/ferdium/ferdium-app",icon:c.LcO},{key:"discord",name:"Discord",link:"https://discord.gg/jVv4Qns8pP",icon:c.Vrx},{key:"reddit",name:"Reddit",link:"https://www.reddit.com/r/ferdium",icon:c.J1f},{key:"twitter",name:"Twitter",link:"https://twitter.com/ferdiumteam",icon:c.SGh}];r.Z=e=>e.icons?(0,i.jsx)("div",{className:o().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let r=A.find(r=>r.key===e);return r?(0,i.jsx)(d.Z,{href:r.link,"aria-label":"".concat(r.name," link"),neutral:!0,children:(0,i.jsx)(a.Z,{size:1,icon:r.icon})},e):(0,i.jsx)(i.Fragment,{})})})}):(0,i.jsx)("div",{className:o().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let r=A.find(r=>r.key===e);return r?(0,i.jsx)(d.Z,{href:r.link,neutral:!0,children:(0,i.jsx)(s.Z,{asDiv:!0,prefix:(0,i.jsx)(a.Z,{icon:r.icon,size:1}),children:r.name})},e):(0,i.jsx)(i.Fragment,{})})})})},4606:function(e,r,n){"use strict";var i=n(2676);n(5271);var s=n(8452),a=n.n(s);r.Z=e=>(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer noopener","aria-label":e["aria-label"],className:e.neutral?a().neutral:"",children:e.children})},2901:function(e,r,n){"use strict";var i=n(2676),s=n(1480),a=n.n(s);n(5271),r.Z=e=>(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:e.title||"Ferdium | The home for all your services"}),(0,i.jsx)("meta",{name:"description",content:"Introducing a great productivity tool to keep all messaging, productivity, and online services in one place"})]})},6200:function(e,r,n){"use strict";var i=n(2676);n(5271);var s=n(6882),a=n.n(s);r.Z=e=>(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:(0,i.jsx)(a(),{size:e.size,path:e.icon,style:{margin:"auto"},color:e.color})})},6760:function(e,r,n){"use strict";n.d(r,{Z:function(){return components_Layout}});var i=n(2676),s=n(5271),a=n(3082),c=n(7262),t=n.n(c),o=n(8636),d=n(2954),A=n(6200),l=n(9271),components_Footer=e=>{function switchTheme(e){e?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"))}return(0,s.useEffect)(()=>{document.documentElement.getAttribute("data-theme")&&switchTheme("dark"===document.documentElement.getAttribute("data-theme"))},[]),(0,i.jsxs)("footer",{id:t().footer,children:[(0,i.jsx)("div",{className:t().links,children:(0,i.jsx)(d.Z,{services:["discord","github","reddit","twitter"],icons:!0})}),(0,i.jsxs)("div",{className:t().legal,children:[(0,i.jsx)(l.Z,{href:"/terms-of-service",children:"Terms of Service"}),(0,i.jsx)("div",{children:"\xa0&\xa0"}),(0,i.jsx)(l.Z,{href:"/privacy-policy",children:"Privacy Policy"})]}),(0,i.jsx)("div",{className:t().darkmode,children:(0,i.jsx)(o.Z,{onClick:()=>switchTheme("dark"!==document.documentElement.getAttribute("data-theme")),icon:!0,"aria-label":"Switch theme",children:(0,i.jsx)(A.Z,{size:1,icon:a.xEd})})})]})},u=n(3730),h=n.n(u),_=n(3304),m=n(8749),components_Header=e=>(0,i.jsx)("header",{id:h().header,children:(0,i.jsxs)("nav",{id:h().nav,children:[(0,i.jsx)(l.Z,{href:"/","aria-label":"Home link",children:(0,i.jsx)("div",{children:(0,i.jsx)(m.Z,{id:h().logo,src:_.Z,alt:"",width:46,height:46})})}),(0,i.jsxs)("div",{className:h().links,children:[(0,i.jsx)(l.Z,{href:"/faq",neutral:!0,children:"FAQ"}),(0,i.jsx)(l.Z,{href:"/download",children:(0,i.jsx)(o.Z,{cta:!0,asDiv:!0,size:"large",children:"Get Ferdium"})})]})]})}),x=n(8149),g=n.n(x),components_Layout=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(components_Header,{}),(0,i.jsx)("main",{id:g().main,children:e.children}),(0,i.jsx)(components_Footer,{})]})},9271:function(e,r,n){"use strict";var i=n(2676),s=n(1885),a=n.n(s);n(5271);var c=n(2833),t=n.n(c);r.Z=e=>(0,i.jsx)(a(),{href:e.href,"aria-label":e["aria-label"],className:e.neutral?t().neutral:void 0,children:e.children})},8749:function(e,r,n){"use strict";n.d(r,{Z:function(){return NonOptimizedImage}});var i=n(2676),s=n(1653),a=n.n(s);let customLoader=e=>{let{src:r}=e;return r};function NonOptimizedImage(e){return(0,i.jsx)(a(),{...e,loader:customLoader,unoptimized:!e.width&&!e.height})}},9405:function(e,r,n){"use strict";var i=n(2676);n(5271);var s=n(1210),a=n.n(s);r.Z=e=>{let r=[a().content,e.className];return e.wide&&r.push(a().wide),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:a().section,children:[e.brand&&(0,i.jsx)("div",{className:a().brand}),(0,i.jsx)("div",{style:{flexDirection:e.row?"row":"column"},className:r.join(" "),children:e.children})]})})}},1630:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return pages}});var i=n(2676),s=n(6760),a=n(9405),c=n(8157),t=n.n(c),o={src:"/_next/static/media/General.95cb3d9b.jpg",height:1077,width:1916,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAmAAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAG/9oADAMBAAIQAxAAAAAFZf8A/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREAAwISIf/aAAgBAQABPwCizPQB8bn/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/AHT/2Q==",blurWidth:8,blurHeight:4},d={src:"/_next/static/media/Workspaces.a23418e6.jpg",height:1077,width:1916,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQb/2gAMAwEAAhADEAAAAJYqT//EABsQAAIBBQAAAAAAAAAAAAAAAAECBAARFCFB/9oACAEBAAE/AIKDCgPc7RgRw1//xAAZEQEAAgMAAAAAAAAAAAAAAAABAAMCITL/2gAIAQIBAT8AoUqw28k//8QAFhEAAwAAAAAAAAAAAAAAAAAAAALB/9oACAEDAQE/AFp//9k=",blurWidth:8,blurHeight:4},A=n(5271),l=n(6635),u=n.n(l),components_Background=e=>{let[r,n]=(0,A.useState)(90);return(0,A.useEffect)(()=>{n(window.innerHeight/64*10+20)},[]),(0,i.jsx)("div",{id:u().wrapper,children:(0,i.jsx)("div",{id:u().background,children:(0,i.jsx)("div",{id:u().grid,children:Array(Math.ceil(r)).fill(1).map((e,r)=>(0,i.jsx)("div",{className:"".concat(u().square," ").concat(u()["square-".concat(r%10)]," ").concat(u()["fade-".concat(Math.trunc(10*Math.random()))])},r))})})})},h=n(3304),_=n(2228),m=n.n(_),x=n(2954),g=n(8749),components_Hero=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{id:m().backgroundWrapper,children:(0,i.jsx)(components_Background,{})}),(0,i.jsxs)(a.Z,{className:m().hero,wide:!0,children:[(0,i.jsx)("div",{children:(0,i.jsx)(g.Z,{id:m().logo,src:h.Z,alt:"",width:256,height:256})}),(0,i.jsx)("h1",{children:"Ferdium"}),(0,i.jsxs)("h2",{id:m().subtitle,children:["All your services in one place",(0,i.jsx)("br",{})," built by the community"]}),(0,i.jsx)(x.Z,{services:["discord","github","reddit"]})]})]}),j=n(4034),p=n.n(j),components_Card=e=>(0,i.jsxs)("div",{className:p().card,children:[e.icon&&(0,i.jsx)("div",{className:p().icon,children:e.icon}),(0,i.jsxs)("div",{className:p().content,children:[" ",e.children]})]}),f=n(9035),v=n.n(f),k=n(3082),w=n(6200),components_CardGrid=e=>(0,i.jsxs)("div",{className:v().cards,children:[(0,i.jsx)("div",{className:v().cardWrapper,children:(0,i.jsxs)(components_Card,{icon:(0,i.jsx)(w.Z,{icon:k.D4N,size:2,color:"#7367f0"}),children:[(0,i.jsx)("h3",{children:"Todo"}),(0,i.jsx)("p",{children:"Ferdium has a built in Todo panel that is available at any time and can be viewed in tandem with your other services."})]})}),(0,i.jsx)("div",{className:v().cardWrapper,children:(0,i.jsxs)(components_Card,{icon:(0,i.jsx)(w.Z,{icon:k.$Z0,size:2,color:"#7367f0"}),children:[(0,i.jsx)("h3",{children:"Custom Services"}),(0,i.jsx)("p",{children:"Can't find the service you are looking for in Ferdium? Add your own custom service without any extra steps!"})]})}),(0,i.jsx)("div",{className:v().cardWrapper,children:(0,i.jsxs)(components_Card,{icon:(0,i.jsx)(w.Z,{icon:k.OWE,size:2,color:"#7367f0"}),children:[(0,i.jsx)("h3",{children:"Anonymous Access"}),(0,i.jsx)("p",{children:"Ferdium can be used without an account without hassle and all your Ferdium app data stays with you."})]})}),(0,i.jsx)("div",{className:v().cardWrapper,children:(0,i.jsxs)(components_Card,{icon:(0,i.jsx)(w.Z,{icon:k.NIq,size:2,color:"#7367f0"}),children:[(0,i.jsx)("h3",{children:"Cloud Sync"}),(0,i.jsx)("p",{children:"Access your services and workspaces on all your computers with an account through Ferdium."})]})}),(0,i.jsx)("div",{className:v().cardWrapper,children:(0,i.jsxs)(components_Card,{icon:(0,i.jsx)(w.Z,{icon:k.d1j,size:2,color:"#7367f0"}),children:[(0,i.jsx)("h3",{children:"Save Resources"}),(0,i.jsx)("p",{children:"Ferdium will hibernate services to save resources to prevent computer slow downs."})]})}),(0,i.jsx)("div",{className:v().cardWrapper,children:(0,i.jsxs)(components_Card,{icon:(0,i.jsx)(w.Z,{icon:k.qV_,size:2,color:"#7367f0"}),children:[(0,i.jsx)("h3",{children:"Privacy"}),(0,i.jsx)("p",{children:"Prevent notifications from showing information whilst still notifying you when needed."})]})})]}),b=n(8636),B=n(9271),C=n(2901),pages=()=>(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(C.Z,{}),(0,i.jsx)(components_Hero,{}),(0,i.jsx)(a.Z,{wide:!0,children:(0,i.jsx)("div",{children:(0,i.jsx)("h2",{children:"The place to work with... "})})}),(0,i.jsxs)(a.Z,{row:!0,wide:!0,children:[(0,i.jsxs)("div",{className:t().description,children:[(0,i.jsx)("h2",{children:"Services"}),(0,i.jsx)("p",{children:"Add all your services in one place for quick and easy access and never search your tabs or bookmarks again! You can also add the same service twice or more to be able to login into multiple accounts!"})]}),(0,i.jsx)("div",{className:t().image,children:(0,i.jsx)(g.Z,{src:o,alt:"The Ferdium app displaying web services as icons on a sidebar to the left."})})]}),(0,i.jsxs)(a.Z,{row:!0,wide:!0,children:[(0,i.jsx)("div",{className:t().image,children:(0,i.jsx)(g.Z,{src:d,alt:"A drawer menu has opened on the left side of the app revealing the option tho choose between workspaces"})}),(0,i.jsxs)("div",{className:t().description,children:[(0,i.jsx)("h2",{children:"Workspaces"}),(0,i.jsxs)("p",{children:["Only keep what is relevant in front of you or separate your work and private time by using workspaces!"," "]})]})]}),(0,i.jsxs)(a.Z,{wide:!0,children:[(0,i.jsx)("div",{children:(0,i.jsx)("h2",{children:"...and much more!"})}),(0,i.jsx)(components_CardGrid,{})]}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(B.Z,{href:"/download",children:(0,i.jsx)(b.Z,{cta:!0,asDiv:!0,size:"huge",children:"Get Ferdium"})})})]})},6635:function(e){e.exports={wrapper:"Background_wrapper__6gBZi",background:"Background_background__SemZ2",grid:"Background_grid__52ZSe",square:"Background_square__15Nwp","square-0":"Background_square-0__588Lj","square-9":"Background_square-9__9w_r_","square-1":"Background_square-1__dMCn9","square-8":"Background_square-8__VOOgt","square-2":"Background_square-2__cIhE4","square-7":"Background_square-7__cgRke","square-3":"Background_square-3__zL2TP","square-6":"Background_square-6__myvos","fade-2":"Background_fade-2__D9RQs",fade:"Background_fade__0QdoI","fade-3":"Background_fade-3__kelGN","fade-4":"Background_fade-4__beRYv","fade-5":"Background_fade-5___VaMH","fade-6":"Background_fade-6__Dfoon","fade-7":"Background_fade-7__M892r","fade-8":"Background_fade-8__O6Qxs","fade-9":"Background_fade-9__UeTLM","fade-10":"Background_fade-10__M0Loc"}},4238:function(e){e.exports={ctaSecondary:"Button_ctaSecondary__ncnmd",cta:"Button_cta___4KTX",base:"Button_base__7_tCN",large:"Button_large__chkvi",huge:"Button_huge__cFxyv",icon:"Button_icon__71oEZ",prefix:"Button_prefix__kkXiw",square:"Button_square__4QPYs"}},4034:function(e){e.exports={card:"Card_card__pn9_Z",content:"Card_content__Bu428",icon:"Card_icon__HP7bU"}},9035:function(e){e.exports={cards:"CardGrid_cards__K12ZP",cardWrapper:"CardGrid_cardWrapper__VAps9"}},7284:function(e){e.exports={links:"CommunityLinks_links___6PtI"}},8452:function(e){e.exports={neutral:"ExternalLink_neutral__GSVpj"}},7262:function(e){e.exports={footer:"Footer_footer__lD3vi",links:"Footer_links__C0oRR",legal:"Footer_legal__3uAQy",darkmode:"Footer_darkmode__rij5T"}},3730:function(e){e.exports={header:"Header_header__nSemd",links:"Header_links__6NhQ_",nav:"Header_nav__Fn39o",logo:"Header_logo__m4H7B"}},2228:function(e){e.exports={backgroundWrapper:"Hero_backgroundWrapper__AlC6P",logo:"Hero_logo__hlBzX",subtitle:"Hero_subtitle__mqh_y",hero:"Hero_hero__P9343"}},8149:function(){},2833:function(e){e.exports={neutral:"Link_neutral__2yL07"}},1210:function(e){e.exports={section:"Section_section__Eq0Zc",brand:"Section_brand__W0fM9",content:"Section_content__btQE_",wide:"Section_wide__jb0oQ"}},8157:function(e){e.exports={image:"Home_image__yRWXK",description:"Home_description__mI005"}},1480:function(e,r,n){e.exports=n(2310)}},function(e){e.O(0,[531,555,774,888,179],function(){return e(e.s=5003)}),_N_E=e.O()}]);