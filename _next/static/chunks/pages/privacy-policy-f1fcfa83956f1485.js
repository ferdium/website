(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{6458:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return i(6475)}])},5813:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.9fc5c374.png",height:1e3,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42h3Kv0rDUBQH4N+5uTFRTHWQkiGLD+DsE6hBJd19AIuToFj8two+h4Obg60Uig/gorh0c1IQi4ZcorVoknOuttO3fAQAp/E9jYL5ExJOIAwr0qHcnAEQ2m2NyBt8dG3FMSwDIgAzCNLznc917byZo+ydYjAV1RdpVIDrUfXvWhDWjrXj6WRly0c6KPVqI1CKLHpXmV4IFR5uh4kyKcGf0Wju1+E4CiCF7VaE6VkX2Qusnqvr685lsfx4l/Jzv4QtGYtLxK/9QtUit00AcLBjbn6+ecObEkAYv0OG70s3v3janIS9Zg5FfCilNMZBQdomCs8B2D9xcGuDxn2zJAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},3877:function(e,t,i){"use strict";var r=i(1527);i(959);var n=i(3838),o=i.n(n);t.Z=e=>{let t=o().base;e.cta&&(t=o().cta),e.cta2&&(t=o().ctaSecondary),e.square&&(t+=" ".concat(o().square)),e.size&&(t+=" ".concat(o()[e.size])),e.icon&&(t+=" ".concat(o().icon));let i=(0,r.jsxs)(r.Fragment,{children:[e.prefix?(0,r.jsx)("div",{className:o().prefix,children:e.prefix}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("div",{children:e.children})]});return e.asDiv?(0,r.jsx)("div",{className:t,"aria-label":e["aria-label"],children:i}):(0,r.jsx)("button",{className:t,onClick:e.onClick,"aria-label":e["aria-label"],children:i})}},8218:function(e,t,i){"use strict";var r=i(1527);i(959);var n=i(3877),o=i(9783),s=i(7325),a=i(936),c=i.n(a),l=i(4443);let d=[{key:"github",name:"GitHub",link:"https://github.com/ferdium/ferdium-app",icon:s.LcO},{key:"discord",name:"Discord",link:"https://discord.gg/jVv4Qns8pP",icon:s.Vrx},{key:"reddit",name:"Reddit",link:"https://www.reddit.com/r/ferdium",icon:s.J1f},{key:"twitter",name:"Twitter",link:"https://twitter.com/ferdiumteam",icon:s.SGh}];t.Z=e=>e.icons?(0,r.jsx)("div",{className:c().links,children:(0,r.jsx)(r.Fragment,{children:e.services.map(e=>{let t=d.find(t=>t.key===e);return t?(0,r.jsx)(l.Z,{href:t.link,"aria-label":"".concat(t.name," link"),neutral:!0,children:(0,r.jsx)(o.Z,{size:1,icon:t.icon})},e):(0,r.jsx)(r.Fragment,{})})})}):(0,r.jsx)("div",{className:c().links,children:(0,r.jsx)(r.Fragment,{children:e.services.map(e=>{let t=d.find(t=>t.key===e);return t?(0,r.jsx)(l.Z,{href:t.link,neutral:!0,children:(0,r.jsx)(n.Z,{asDiv:!0,prefix:(0,r.jsx)(o.Z,{icon:t.icon,size:1}),children:t.name})},e):(0,r.jsx)(r.Fragment,{})})})})},4443:function(e,t,i){"use strict";var r=i(1527);i(959);var n=i(9699),o=i.n(n);t.Z=e=>(0,r.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer noopener","aria-label":e["aria-label"],className:e.neutral?o().neutral:"",children:e.children})},2501:function(e,t,i){"use strict";var r=i(1527),n=i(5561),o=i.n(n);i(959),t.Z=e=>(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:e.title||"Ferdium | The home for all your services"}),(0,r.jsx)("meta",{name:"description",content:"Introducing a great productivity tool to keep all messaging, productivity, and online services in one place"})]})},9783:function(e,t,i){"use strict";var r=i(1527);i(959);var n=i(880),o=i.n(n);t.Z=e=>(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:(0,r.jsx)(o(),{size:e.size,path:e.icon,style:{margin:"auto"},color:e.color})})},2161:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var r=i(1527),n=i(959),o=i(7325),s=i(3868),a=i.n(s),c=i(3877),l=i(8218),d=i(9783),h=i(2956),u=e=>{function t(e){e?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"))}return(0,n.useEffect)(()=>{document.documentElement.getAttribute("data-theme")&&t("dark"===document.documentElement.getAttribute("data-theme"))},[]),(0,r.jsxs)("footer",{id:a().footer,children:[(0,r.jsx)("div",{className:a().links,children:(0,r.jsx)(l.Z,{services:["discord","github","reddit","twitter"],icons:!0})}),(0,r.jsxs)("div",{className:a().legal,children:[(0,r.jsx)(h.Z,{href:"/terms-of-service",children:"Terms of Service"}),(0,r.jsx)("div",{children:"\xa0&\xa0"}),(0,r.jsx)(h.Z,{href:"/privacy-policy",children:"Privacy Policy"})]}),(0,r.jsx)("div",{className:a().darkmode,children:(0,r.jsx)(c.Z,{onClick:()=>t("dark"!==document.documentElement.getAttribute("data-theme")),icon:!0,"aria-label":"Switch theme",children:(0,r.jsx)(d.Z,{size:1,icon:o.xEd})})})]})},m=i(9913),f=i.n(m),p=i(5813),y=i(9478),v=e=>(0,r.jsx)("header",{id:f().header,children:(0,r.jsxs)("nav",{id:f().nav,children:[(0,r.jsx)(h.Z,{href:"/","aria-label":"Home link",children:(0,r.jsx)("div",{children:(0,r.jsx)(y.Z,{id:f().logo,src:p.Z,alt:"",width:46,height:46})})}),(0,r.jsxs)("div",{className:f().links,children:[(0,r.jsx)(h.Z,{href:"/faq",neutral:!0,children:"FAQ"}),(0,r.jsx)(h.Z,{href:"/download",children:(0,r.jsx)(c.Z,{cta:!0,asDiv:!0,size:"large",children:"Get Ferdium"})})]})]})}),x=i(923),g=i.n(x),j=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{}),(0,r.jsx)("main",{id:g().main,children:e.children}),(0,r.jsx)(u,{})]})},2956:function(e,t,i){"use strict";var r=i(1527),n=i(3525),o=i.n(n);i(959);var s=i(9930),a=i.n(s);t.Z=e=>(0,r.jsx)(o(),{href:e.href,"aria-label":e["aria-label"],className:e.neutral?a().neutral:void 0,children:e.children})},9478:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var r=i(1527),n=i(6826),o=i.n(n);let s=e=>{let{src:t}=e;return t};function a(e){return(0,r.jsx)(o(),{...e,loader:s,unoptimized:!e.width&&!e.height})}},3405:function(e,t,i){"use strict";var r=i(1527);i(959);var n=i(828),o=i.n(n);t.Z=e=>{let t=[o().content,e.className];return e.wide&&t.push(o().wide),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("section",{className:o().section,children:[e.brand&&(0,r.jsx)("div",{className:o().brand}),(0,r.jsx)("div",{style:{flexDirection:e.row?"row":"column"},className:t.join(" "),children:e.children})]})})}},6475:function(e,t,i){"use strict";i.r(t);var r=i(1527),n=i(2501),o=i(2161),s=i(3405);i(959),t.default=e=>(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(n.Z,{title:"Ferdium | Privacy Policy"}),(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Privacy Policy for Ferdium"}),(0,r.jsx)("p",{children:"At Ferdium, accessible from www.ferdium.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Ferdium and how we use it."}),(0,r.jsx)("p",{children:"If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."}),(0,r.jsxs)("p",{children:["This Privacy Policy applies only to our online activities and is valid for visitors to our website and service with regards to the information that they shared and/or collect in Ferdium. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the"," ",(0,r.jsx)("a",{href:"https://www.generateprivacypolicy.com/",children:"Free Privacy Policy Generator"}),"."]}),(0,r.jsx)("h2",{children:"Consent"}),(0,r.jsx)("p",{children:"By using our website and service, you hereby consent to our Privacy Policy and agree to its terms."}),(0,r.jsx)("h2",{children:"Information we collect"}),(0,r.jsx)("p",{children:"The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information."}),(0,r.jsx)("p",{children:"If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide."}),(0,r.jsx)("p",{children:"When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."}),(0,r.jsx)("h2",{children:"How we use your information"}),(0,r.jsx)("p",{children:"We use the information we collect in various ways, including to:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Provide, operate, and maintain our website and service"}),(0,r.jsx)("li",{children:"Improve, personalize, and expand our website and service"}),(0,r.jsx)("li",{children:"Understand and analyze how you use our website and service"}),(0,r.jsx)("li",{children:"Develop new products, services, features, and functionality"}),(0,r.jsx)("li",{children:"Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes"}),(0,r.jsx)("li",{children:"Send you emails"}),(0,r.jsx)("li",{children:"Find and prevent fraud"})]}),(0,r.jsx)("h2",{children:"Log Files"}),(0,r.jsx)("p",{children:"Ferdium follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."}),(0,r.jsx)("h2",{children:"Advertising Partners Privacy Policies"}),(0,r.jsx)("p",{children:"You may consult this list to find the Privacy Policy for each of the advertising partners of Ferdium."}),(0,r.jsx)("p",{children:"Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Ferdium, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."}),(0,r.jsx)("p",{children:"Note that Ferdium has no access to or control over these cookies that are used by third-party advertisers."}),(0,r.jsx)("h2",{children:"Third Party Privacy Policies"}),(0,r.jsxs)("p",{children:["Ferdium's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options."," "]}),(0,r.jsx)("p",{children:"You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."}),(0,r.jsx)("h2",{children:"CCPA Privacy Rights (Do Not Sell My Personal Information)"}),(0,r.jsx)("p",{children:"Under the CCPA, among other rights, California consumers have the right to:"}),(0,r.jsx)("p",{children:"Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers."}),(0,r.jsx)("p",{children:"Request that a business delete any personal data about the consumer that a business has collected."}),(0,r.jsx)("p",{children:"Request that a business that sells a consumer's personal data, not sell the consumer's personal data."}),(0,r.jsx)("p",{children:"If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."}),(0,r.jsx)("h2",{children:"GDPR Data Protection Rights"}),(0,r.jsx)("p",{children:"We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:"}),(0,r.jsx)("p",{children:"The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service."}),(0,r.jsx)("p",{children:"The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete."}),(0,r.jsx)("p",{children:"The right to erasure – You have the right to request that we erase your personal data, under certain conditions."}),(0,r.jsx)("p",{children:"The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions."}),(0,r.jsx)("p",{children:"The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions."}),(0,r.jsx)("p",{children:"The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions."}),(0,r.jsx)("p",{children:"If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."}),(0,r.jsx)("h2",{children:"Children's Information"}),(0,r.jsx)("p",{children:"Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."}),(0,r.jsx)("p",{children:"Ferdium does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website and service, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."})]})})]})},3838:function(e){e.exports={ctaSecondary:"Button_ctaSecondary__ncnmd",cta:"Button_cta___4KTX",base:"Button_base__7_tCN",large:"Button_large__chkvi",huge:"Button_huge__cFxyv",icon:"Button_icon__71oEZ",prefix:"Button_prefix__kkXiw",square:"Button_square__4QPYs"}},936:function(e){e.exports={links:"CommunityLinks_links___6PtI"}},9699:function(e){e.exports={neutral:"ExternalLink_neutral__GSVpj"}},3868:function(e){e.exports={footer:"Footer_footer__lD3vi",links:"Footer_links__C0oRR",legal:"Footer_legal__3uAQy",darkmode:"Footer_darkmode__rij5T"}},9913:function(e){e.exports={header:"Header_header__nSemd",links:"Header_links__6NhQ_",nav:"Header_nav__Fn39o",logo:"Header_logo__m4H7B"}},923:function(){},9930:function(e){e.exports={neutral:"Link_neutral__2yL07"}},828:function(e){e.exports={section:"Section_section__Eq0Zc",brand:"Section_brand__W0fM9",content:"Section_content__btQE_",wide:"Section_wide__jb0oQ"}},5561:function(e,t,i){e.exports=i(655)}},function(e){e.O(0,[928,580,774,888,179],function(){return e(e.s=6458)}),_N_E=e.O()}]);