(this["webpackJsonprecreate-shiseihanbai"]=this["webpackJsonprecreate-shiseihanbai"]||[]).push([[0],{2:function(e,t,c){e.exports={inputField:"Navbar_inputField__3BgSs",container:"Navbar_container__1qX7k",cards:"Navbar_cards__JGLDe",printCheck:"Navbar_printCheck___FoLl",iconYen:"Navbar_iconYen__3d-C1",borderField:"Navbar_borderField__1pQ3Z"}},27:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(12),s=c.n(n),r=(c(27),c(7)),i=c.n(r),l=c(10),d=c(4),o=c(6),j=c(5),u=c.n(j),x=Object(a.createContext)();function b(){return Object(a.useContext)(x)}var h=c(2),m=c.n(h),p=function(e,t,c){var a=[];e.forEach((function(e){"ALL"===t.cat&&(null!==t.name?(e.name.indexOf(t.name)>-1||String(e.productId).indexOf(t.name)>-1)&&e.price>=t.priceL&&e.price<=t.priceH&&a.push(e):e.price>=t.priceL&&e.price<=t.priceH&&a.push(e)),t.cat===e.category&&(null!==t.name?(e.name.indexOf(t.name)>-1||String(e.productId).indexOf(t.name)>-1)&&e.price>=t.priceL&&e.price<=t.priceH&&a.push(e):e.price>=t.priceL&&e.price<=t.priceH&&a.push(e))})),c(a)},O=c(0),f=function(){var e=b(),t=e.data,c=(e.setData,e.newData,e.setNewData),n=Object(a.useState)(!1),s=Object(d.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(),j=Object(d.a)(l,2),x=j[0],h=j[1],f=Object(a.useState)({name:null,cat:"ALL",priceL:1e3,priceH:1e5}),v=Object(d.a)(f,2),N=v[0],g=v[1];return Object(a.useEffect)((function(){window.onscroll=function(){h(window.scrollY)},p(t,N,c)}),[N]),Object(O.jsxs)("nav",{children:[Object(O.jsx)("div",{className:"flex justify-center",children:Object(O.jsx)("div",{className:u()(m.a.container),children:Object(O.jsxs)("div",{className:"flex justify-start items-center space-x-2 py-10",style:{color:"rgb(96, 91, 166)"},children:[Object(O.jsx)("h1",{className:"text-6xl font-medium font xs:text-xl xs:text-center xs:w-full",children:"2021"}),Object(O.jsxs)("h2",{className:"text-2xl font-semibold xs:hidden sm:hidden md:hidden",children:["autumn ",Object(O.jsx)("br",{})," &winter"]}),Object(O.jsx)("h1",{className:"text-6xl font-medium xs:hidden sm:hidden md:hidden",children:"SHISEI STOCK BOOK"})]})})}),Object(O.jsx)("div",{className:" flex justify-center bg-gray-200 ".concat(x>162?"fixed left-0 right-0 top-0 z-10":"relative"),children:Object(O.jsxs)("div",{className:u()(m.a.container),children:[Object(O.jsx)("div",{className:"text-center mb-5 hidden xs:block sm:block md:block cursor-pointer py-2",onClick:function(){return i(!r)},children:"\u691c\u7d22\u3059\u308b"}),Object(O.jsxs)("div",{className:"flex justify-between items-center xs:flex-col ".concat(r?"xs:flex":"xs:hidden"),children:[Object(O.jsxs)("div",{className:"flex space-x-2 py-5 xs:flex-col xs:space-x-0 xs:items-center xs:space-y-2 xs:px-5",children:[Object(O.jsx)("input",{type:"text",name:"searchName",id:"searchName",className:u()(m.a.inputField),placeholder:"\u5546\u54c1\u540d\u30fb\u30b3\u30fc\u30c9\u3067\u691c\u7d22...",onChange:function(e){return g((function(t){return Object(o.a)(Object(o.a)({},t),{},{name:e.target.value})}))}}),Object(O.jsx)("input",{type:"text",name:"tag",id:"tag",placeholder:"\u30b7\u30fc\u30ba\u30f3",className:u()(m.a.inputField)}),Object(O.jsxs)("select",{id:"category",className:u()(m.a.inputField),onChange:function(e){return g((function(t){return Object(o.a)(Object(o.a)({},t),{},{cat:e.target.value})}))},children:[Object(O.jsx)("option",{defaultValue:"CLOTHES",children:"CLOTHES"}),Object(O.jsx)("option",{defaultValue:"FASHION",children:"FASHION"}),Object(O.jsx)("option",{defaultValue:"ALL",selected:!0,children:"ALL"})]}),Object(O.jsxs)("div",{className:"flex items-center",children:[Object(O.jsxs)("div",{className:"flex items-center",children:[Object(O.jsx)("h1",{className:"".concat(m.a.iconYen),children:"\xa5"}),Object(O.jsx)("input",{type:"number",name:"lowPriceBound",id:"lowPriceBound",value:"".concat(N.priceL),onChange:function(e){return g((function(t){return Object(o.a)(Object(o.a)({},t),{},{priceL:Number(e.target.value)})}))},className:u()(m.a.inputField,m.a.borderField)})]}),"~",Object(O.jsxs)("div",{className:"flex items-center",children:[Object(O.jsx)("h1",{className:"".concat(m.a.iconYen),children:"\xa5"}),Object(O.jsx)("input",{type:"number",name:"highPriceBound",id:"highPriceBound",value:"".concat(N.priceH),onChange:function(e){return g((function(t){return Object(o.a)(Object(o.a)({},t),{},{priceH:Number(e.target.value)})}))},className:u()(m.a.inputField,m.a.borderField)})]})]})]}),Object(O.jsx)("div",{className:"border-2 max-w-max p-2 xs:hidden rounded-md bg-white cursor-pointer",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-printer",viewBox:"0 0 16 16",children:[Object(O.jsx)("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),Object(O.jsx)("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})]})})]})]})})]})},v=c(21),N=c.n(v),g=function(e){var t=e.data,c=Object(a.useState)(!1),n=Object(d.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(!1),l=Object(d.a)(i,2),o=l[0],j=l[1],u=Object(a.useState)({status:!1,data:[]}),x=Object(d.a)(u,2),b=x[0],h=x[1];return Object(O.jsxs)("div",{className:"cursor-pointer relative",onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:[Object(O.jsx)("input",{type:"checkbox",id:"print",name:"print",value:"print",className:" ".concat(m.a.printCheck," ").concat(o||b.status?"block":"hidden"),onClick:function(){h((function(e){return{status:!e.status,data:[t]}}))}}),Object(O.jsx)(N.a,{visible:s,onClose:function(){return r(!1)},images:[{src:t.imgUrl,alt:"img"}]}),Object(O.jsxs)("div",{className:" ".concat(m.a.cards),onClick:function(){return r(!0)},children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:t.imgUrl,alt:"image"})}),Object(O.jsxs)("div",{className:"mb-10",children:[Object(O.jsxs)("div",{className:"my-5",children:[Object(O.jsx)("h1",{style:{color:"rgb(160, 30, 35)"},className:"font-bold",children:t.productId}),Object(O.jsx)("h1",{children:t.name})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{className:"text-sm",children:["Price_ ",t.price]}),Object(O.jsxs)("h1",{className:"text-sm",children:["CT_ ",t.ct]}),Object(O.jsxs)("h1",{className:"text-sm",children:["Size_ ",t.size]}),Object(O.jsxs)("h1",{className:"text-sm",children:["Material_ ",t.material.replace("\uff1c\uff43\uff48\uff1e","")]}),Object(O.jsxs)("h1",{className:"text-sm",children:["Stock_ ",t.stocks]})]})]})]})]})},w=function(){var e=b(),t=(e.data,e.setData,e.newData);e.setNewData;return console.log(t,"INI DI PRODUCT.JSX"),Object(O.jsx)("section",{className:"flex justify-center",children:Object(O.jsxs)("div",{className:u()(m.a.container),children:[Object(O.jsx)("div",{className:"py-5 mb-5",children:Object(O.jsxs)("h1",{children:["Total: ",t.length]})}),Object(O.jsx)("div",{className:"xs:flex-col xs:items-center xs:justify-center xs:flex grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3",children:t.map((function(e,t){return Object(O.jsx)(g,{data:e},t)}))})]})})},y=function(){return Object(O.jsxs)("section",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(w,{})]})},_=c(22),C=c.n(_);function S(){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://script.google.com/macros/s/AKfycbzv0oZrg2-tfgsCV74iNI0KrOfNoVn8YI6dHJPWTr-xKqJ47E0p/exec");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(d.a)(s,2),o=r[0],j=r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,n(t),j(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),console.log(c,o)}),[]),Object(O.jsx)(x.Provider,{value:{data:c,setData:n,newData:o,setNewData:j},children:Object(O.jsx)(y,{})})};s.a.render(Object(O.jsx)(H,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.8e1346ea.chunk.js.map