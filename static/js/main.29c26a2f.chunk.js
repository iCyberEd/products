(this["webpackJsonpproduct-filter"]=this["webpackJsonpproduct-filter"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),i=c(8),n=c.n(i),s=c(3),o=c(5),l=c(4),d=(c(26),c(0)),u=function(e){var t=e.product,c=e.clname;function r(e){var c=e;return t.hasOwnProperty(e)?t[c]:""}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.price;if(e>999){var c=new Intl.NumberFormat("ua",{style:"currency",currency:"UAH",minimumFractionDigits:0,currencyDisplay:"code"});return c.format(e).replace("UAH","")}return e}function i(){return+(100/(t.oldPrice/(t.oldPrice-t.price))).toFixed(0)}return Object(d.jsxs)("div",{className:"product-card "+(c?"product-card_big":"product-card_sm"),children:[Object(d.jsxs)("div",{className:"product-card__badges",children:[t.bought>20&&Object(d.jsx)("div",{className:"product-card__badge product-card__badge-top",children:"\u0422\u041e\u041f \u041f\u0420\u041e\u0414\u0410\u0416"}),i()>=20&&Object(d.jsxs)("div",{className:"product-card__badge product-card__badge-discount",children:["-",i(),"%"]}),t.added.getFullYear()===(new Date).getFullYear()&&Object(d.jsx)("div",{className:"product-card__badge product-card__badge-novelty",children:"\u041d\u041e\u0412\u0418\u041d\u041a\u0410"})]}),Object(d.jsx)("img",{className:"product-card__img",src:t.img,alt:""}),Object(d.jsx)("div",{className:"product-card__name",children:r("type")+" "+r("brand")+" "+r("model")+"("+r("serial")+") "+r("os")}),Object(d.jsxs)("div",{className:"rating","data-rating":t.rating,children:[function(){for(var e=[],c="rating__star",r=0,a=0;a<5;a++)a<t.rating?(c="rating__star_filled",t.rating-a>0&&t.rating-a<1&&(c="rating__star_partial",r=100*+(t.rating-a).toFixed(2))):c="rating__star",e.push(Object(d.jsxs)("svg",{height:"15",width:"15",viewBox:"0 0 12 12",className:c,children:["rating__star_partial"===c&&Object(d.jsxs)("linearGradient",{id:"rating__partial-brushing_"+t.id,children:[Object(d.jsx)("stop",{className:"rating__partial-brushing_main",offset:r+"%",stopOpacity:"1"}),Object(d.jsx)("stop",{className:"rating__color",offset:r+1+"%",stopOpacity:"1"}),Object(d.jsx)("stop",{className:"rating__color",offset:"100%",stopOpacity:"1"})]}),Object(d.jsx)("path",{fill:"rating__star_partial"===c?"url('#rating__partial-brushing_".concat(t.id,"')"):"",d:"m5.73433.173217c.10867-.2309559.42269-.2309559.53137 0l1.6246 3.452363c.04311.0917.12659.15527.22303.16998l3.63267.55361c.243.03703.34.35025.1642.53003l-2.62862 2.68729c-.06978.07139-.1017.17425-.08519.275l.62057 3.79451c.04148.2539-.21258.4475-.42991.3276l-3.24916-1.7915c-.08632-.0476-.18944-.0476-.27575 0l-3.24915 1.7915c-.21736.1199-.47141-.0737-.4299-.3276l.62054-3.79451c.01648-.10075-.01538-.20361-.08521-.275l-2.6286226-2.68729c-.1758488-.17978-.0788129-.493.1642076-.53003l3.632665-.55361c.0965-.01471.17992-.07828.22308-.16998z"})]},a));return e}(),Object(d.jsx)("span",{className:"rating__reviews",children:Object(d.jsxs)("a",{href:"#",children:[t.reviews," ",function(){var e=t.reviews.toString(),c=+e.slice(e.length-1)>1&&+e.slice(e.length-1)<5,r=t.reviews>4&&t.reviews<21;return 1!==+e.slice(e.length-1)||r?c&&!r?"\u043e\u0442\u0437\u044b\u0432\u0430":"\u043e\u0442\u0437\u044b\u0432\u043e\u0432":"\u043e\u0442\u0437\u044b\u0432"}()]})})]}),Object(d.jsxs)("div",{className:"product-card__price "+(t.price!=t.oldPrice?"product-card__price_discount ":" ")+(!t.stockQuantity&&"product-card__price_out-of-stock"),"data-old-price":t.oldPrice>t.price?a(t.oldPrice)+String.fromCharCode(8372):"",children:[a(),Object(d.jsx)("span",{className:"product-card__price__currency",children:String.fromCharCode(8372)}),Object(d.jsxs)("svg",{className:"product-card__price__basket",viewBox:"0 -13 456.75885 456",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"}),Object(d.jsx)("path",{d:"m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0"}),Object(d.jsx)("path",{d:"m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"})]})]}),Object(d.jsx)("div",{className:t.stockQuantity?"product-card__available":"product-card__out-of-stock",children:t.stockQuantity?"\u0415\u0441\u0442\u044c \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438":"\u0422\u043e\u0432\u0430\u0440 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"})]})},j="LOWER_PRICE",h="GET SELECTED POSTS",b="GET SELECTED RANGE",p="ADD_FILTER",m="REMOVE_FILTER",g=function(e){var t=e.sortItem,c=e.index,a=e.name,i=Object(r.useState)(!1),n=Object(o.a)(i,2),s=n[0],u=n[1],j=Object(l.b)();return Object(d.jsx)("li",{children:Object(d.jsxs)("label",{htmlFor:"sort"+t,children:[Object(d.jsx)("input",{type:"checkbox",name:"",checked:s,id:"sort"+t,onClick:function(e){return function(e,t,c){var r=!s;console.log("This is fname: "+e+" iname: "+t);var a=c.target;console.log(a.getAttribute("checked")),j(r?{type:p,payload:{fieldName:e,itemName:t}}:{type:m,payload:{fieldName:e,itemName:t}}),j({type:h,payload:{fieldName:e,itemName:t}}),u(r)}(a,t,e)}}),t]})},c)};function f(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",className:"sort-block__input",placeholder:"in developing"}),Object(d.jsx)("label",{className:"sort-block__subtitle",children:"\u0410\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u044b\u0439 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c"})]})}for(var v=function(e){var t=e.name,c=e.sortBlock,a=Object(r.useState)(!0),i=Object(o.a)(a,2),n=i[0],s=i[1],l=t;return Object(d.jsxs)("li",{className:"sort-block",children:[Object(d.jsx)("input",{className:"sort-block__switcher",type:"checkbox",name:"",id:t,checked:n,onClick:function(){return s(!n)}}),Object(d.jsxs)("div",{className:"sort-block__nested "+(n?"sort-block__nested_open":"sort-block__nested_closed"),"data-name":t,children:[Object(d.jsxs)("label",{className:"sort-block__header",htmlFor:t,children:[{seller:"\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446",ready:"\u0413\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435",type:"\u0412\u0438\u0434",brand:"\u0411\u0440\u0435\u043d\u0434",os:"\u041e\u0421",price:"\u0426\u0435\u043d\u0430",status:"\u0421\u0442\u0430\u0442\u0443\u0441"}[l],Object(d.jsx)("span",{className:"sort-block__header__quantity",children:c.length>0&&c.length})]}),c.length>5&&Object(d.jsx)(f,{}),Object(d.jsx)("ul",{className:"sort-block__list ssort-block__brands",children:c.map((function(e,c){return Object(d.jsx)(g,{sortItem:e,index:c,name:t})}))})]})]})},O=function(){var e=Object(l.c)((function(e){return e.products})),t=Object(l.c)((function(e){return e.filters})),c=Object(l.c)((function(e){return e.sort})),a=Object(r.useState)(!0),i=Object(o.a)(a,2),n=i[0],j=i[1],h=Object(r.useState)("rating"),b=Object(o.a)(h,2),p=b[0],m=b[1],g=Object(r.useState)(!1),f=Object(o.a)(g,2),O=f[0],x=f[1],_=Object(r.useMemo)((function(){switch(p){case"rating":e.sort((function(e,t){return-1*(e.rating-t.rating)}));break;case"lowest-price":e.sort((function(e,t){return e.price-t.price}));break;case"highest-price":e.sort((function(e,t){return-1*(e.price-t.price)}));break;case"most-bought":e.sort((function(e,t){return-1*(e.bought-t.bought)}));break;case"largest-discount":e.sort((function(e,t){return-1*(100/(e.oldPrice/(e.oldPrice-e.price))-100/(t.oldPrice/(t.oldPrice-t.price)))}));break;case"new-items":e.sort((function(e,t){return-1*(+e.added-+t.added)}));break;default:console.log("undefined quickSort option")}return e.map((function(e){return Object(d.jsx)(u,{product:e,clname:n},e.id)}))}),[e,p,n]);var y=[];for(var M in c){var k=M;y.push(Object(d.jsx)(v,{name:M,sortBlock:c[k]},y.length+1))}return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{className:"section-title",children:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b"}),Object(d.jsxs)("div",{className:"quick-sort",children:[Object(d.jsxs)("div",{className:"active-filters",children:["Active filters: ",function(){var e=[];for(var c in t){var r=t[c].map((function(e){return Object(d.jsx)("span",{className:"active-filters__item",children:e})}));e.push.apply(e,Object(s.a)(r)),console.log("Show filters"),console.dir(e)}return e}()]}),Object(d.jsxs)("label",{className:"quick-sort__select-label",htmlFor:"",children:[Object(d.jsx)("svg",{className:"quick-sort__select__arrow "+(O&&"quick-sort__select__arrow_active"),version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 16",fill:"#449de1",stroke:"#449de1",children:Object(d.jsxs)("g",{children:[Object(d.jsx)("line",{x1:"0",y1:"0",x2:"8",y2:"8",strokeWidth:"2"}),Object(d.jsx)("line",{x1:"8",y1:"8",x2:"0",y2:"16",strokeWidth:"2"})]})}),Object(d.jsxs)("select",{className:"quick-sort__select "+(O&&"quick-sort__select_active"),name:p,id:"",onChange:function(e){return m(e.target.value)},onClick:function(){return x(!O)},onBlur:function(){return x(!1)},children:[Object(d.jsx)("option",{value:"lowest-price",selected:"lowest-price"==p,children:"\u041e\u0442 \u0434\u0435\u0448\u0435\u0432\u044b\u0445 \u043a \u0434\u043e\u0440\u043e\u0433\u0438\u043c"}),Object(d.jsx)("option",{value:"highest-price",selected:"highest-price"==p,children:"\u041e\u0442 \u0434\u043e\u0440\u043e\u0433\u0438\u0445 \u043a \u0434\u0435\u0448\u0435\u0432\u044b\u043c"}),Object(d.jsx)("option",{value:"most-bought",selected:"most-bought"==p,children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"}),Object(d.jsx)("option",{value:"new-items",selected:"new-items"==p,children:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438"}),Object(d.jsx)("option",{value:"largest-discount",selected:"largest-discount"==p,children:"\u0410\u043a\u0446\u0438\u043e\u043d\u043d\u044b\u0435"}),Object(d.jsx)("option",{value:"rating",selected:"rating"==p,children:"\u041f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443"})]})]}),Object(d.jsxs)("label",{className:"quick-sort__radio-label",htmlFor:"",children:[Object(d.jsx)("input",{className:"quick-sort__radio quick-sort__radio_left",type:"radio",name:"quick-sort_size",id:"",value:"product-list_sm",checked:n,onChange:function(e){return j(!n)}}),Object(d.jsxs)("svg",{className:"radio-img-less",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 20",children:[Object(d.jsx)("circle",{cx:"10",cy:"5",r:"1"}),Object(d.jsx)("circle",{cx:"15",cy:"5",r:"1"}),Object(d.jsx)("circle",{cx:"20",cy:"5",r:"1"}),Object(d.jsx)("circle",{cx:"10",cy:"10",r:"1"}),Object(d.jsx)("circle",{cx:"15",cy:"10",r:"1"}),Object(d.jsx)("circle",{cx:"20",cy:"10",r:"1"}),Object(d.jsx)("circle",{cx:"10",cy:"15",r:"1"}),Object(d.jsx)("circle",{cx:"15",cy:"15",r:"1"}),Object(d.jsx)("circle",{cx:"20",cy:"15",r:"1"})]})]}),Object(d.jsxs)("label",{className:"quick-sort__radio-label",htmlFor:"",children:[Object(d.jsx)("input",{className:"quick-sort__radio quick-sort__radio_right",type:"radio",name:"quick-sort_size",id:"",value:"product-list_big",checked:!n,onChange:function(e){return j(!n)}}),Object(d.jsxs)("svg",{className:"radio-img-more",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 25",children:[Object(d.jsx)("circle",{cx:"10",cy:"5",r:"1"}),Object(d.jsx)("circle",{cx:"15",cy:"5",r:"1"}),Object(d.jsx)("circle",{cx:"20",cy:"5",r:"1"}),Object(d.jsx)("circle",{cx:"25",cy:"5",r:"1"}),Object(d.jsx)("circle",{cx:"10",cy:"10",r:"1"}),Object(d.jsx)("circle",{cx:"15",cy:"10",r:"1"}),Object(d.jsx)("circle",{cx:"20",cy:"10",r:"1"}),Object(d.jsx)("circle",{cx:"25",cy:"10",r:"1"}),Object(d.jsx)("circle",{cx:"10",cy:"15",r:"1"}),Object(d.jsx)("circle",{cx:"15",cy:"15",r:"1"}),Object(d.jsx)("circle",{cx:"20",cy:"15",r:"1"}),Object(d.jsx)("circle",{cx:"25",cy:"15",r:"1"}),Object(d.jsx)("circle",{cx:"10",cy:"20",r:"1"}),Object(d.jsx)("circle",{cx:"15",cy:"20",r:"1"}),Object(d.jsx)("circle",{cx:"20",cy:"20",r:"1"}),Object(d.jsx)("circle",{cx:"25",cy:"20",r:"1"})]})]})]}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("ul",{className:"sort-options",children:y}),Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"product-list ",children:_})})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),r(e),a(e),i(e),n(e)}))},_=c(10),y=c(2),M=[c.p+"static/media/card-img-1.67c5c1a1.png",c.p+"static/media/ThinkCentre M820z.e5f4e6c5.jpg",c.p+"static/media/Vivo AiO V222FAK-BA100D.b8a0067a.jpg",c.p+"static/media/ProDesk 600 G3 SFF.c6e7af34.jpg",c.p+"static/media/Overlord X83 v09.ae95142e.jpg",c.p+"static/media/OptiPlex 3080 MFF.a1b326f6.jpg",c.p+"static/media/Mac mini 2020.b80f1f8d.jpg",c.p+"static/media/IdeaCentre G5 Gaming 14IMB05.3af00d59.jpg",c.p+"static/media/IdeaCentre G5 Gaming 14AMR05.2f6feffd.png",c.p+"static/media/IdeaCentre AIO 3 24ARE05.c29ed3c3.jpg",c.p+"static/media/I94F.16.S9.166.356.0c9c6ab1.jpg",c.p+"static/media/Home 4090.7505f3bb.jpg",c.p+"static/media/Home 4080.bdd32929.jpg",c.p+"static/media/Home 4070.ee85ed38.jpg",c.p+"static/media/Gaming X51 v12.f60d17e8.jpg",c.p+"static/media/Game 9010.836ac37f.jpg",c.p+"static/media/Cobra I14F.32.H2S4.26.086.9f5d9bfc.jpg",c.p+"static/media/Business B25 v26.59f2d2d5.jpg",c.p+"static/media/Business M62 v12.6388f7a5.jpg"],k=["","DOS","Windows XP","Windows 8","Windows 10","Windows 10 Pro","Windows Server","Linux","Mac OS"],N=["AMD","ARTLINE","Acer","Apple","ASUS","Cobra","Dell","Everest","HP","Lenovo","Samsung"],w=["\u041c\u043e\u043d\u043e\u0431\u043b\u043e\u043a","\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440","\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0438\u0433\u0440\u043e\u0432\u043e\u0439","\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a","\u0422\u043e\u043d\u043a\u0438\u0439 \u043a\u043b\u0438\u0435\u043d\u0442"],F=["ThinkCentre M820z","Home 4090","290 G1 MT","Home 4070","Gaming X51 v12","IdeaCentre AIO 3 24ARE05","ProDesk 600 G3 SFF","IdeaCentre G5 Gaming 14IMB05","Vivo AiO V222FAK-BA100D","Business B25 v26","IdeaCentre G5 Gaming 14AMR05","Mac mini 2020","Game 9010","I94F.16.S9.166.356","OptiPlex 3080 MFF","Home 4080","Cobra I14F.32.H2S4.26.086","Business M62 v12","Overlord X83 v09"],S=["D-TOP","DonKarmani","! E v r i c a","Shop Stock","Vendedor","ALFA Render","SVIT integration","Sparch","Red2Shop","TechnoPromo","Aiver","Tigr","DIGITALFPS","BIG&FAST","Techno department"],A=1,C=[],I=new Array(50),P=0;P<I.length;P++)I[P]={id:A++,brand:z(),type:D(),model:H(),serial:L(),os:q(),rating:G(),price:E(),oldPrice:B(),reviews:T(),stockQuantity:R(),bought:W(),seller:V(),img:X(),added:new Date(Q())};function D(){var e=Math.ceil(0),t=Math.floor(w.length-1);return w[Math.floor(Math.random()*(t-e+1)+e)]}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e5;e=Math.ceil(e),t=Math.floor(t);var c=Math.floor(Math.random()*(t-e+1)+e);return C.push(c),c}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e5,t=Math.round(Math.random()),c=C[A-2];if(t){var r=Math.ceil(c);e=Math.floor(e),c=Math.floor(Math.random()*(e-r+1)+r)}return c}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return+(Math.random()*(t-e)+e).toFixed(2)}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}function q(){var e=Math.ceil(0),t=Math.floor(k.length);return k[Math.floor(Math.random()*(t-e)+e)]}function z(){var e=Math.ceil(0),t=Math.floor(N.length);return N[Math.floor(Math.random()*(t-e)+e)]}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}function L(){for(var e=Math.ceil(7),t=Math.floor(10),c=Math.floor(Math.random()*(t-e+1)+e),r=[["A","Z"],["0","9"]],a="";c--;){var i=Math.floor(Math.random()*r.length),n=r[i][0].charCodeAt(0),s=r[i][1].charCodeAt(0),o=Math.floor(Math.random()*(s-n+1))+n;a+=String.fromCharCode(o)}return a}function H(){var e=F.length;return F[Math.floor(Math.random()*(e-0)+0)]}function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Math.floor(Math.random()*(t-e+1)+e)}function V(){var e="Rozetka";if(!Math.round(5*Math.random()-Math.random())){var t=S.length-1;e=S[Math.floor(Math.random()*(t-0+1)+0)]}return e}function X(){var e=M.length-1;return M[Math.floor(Math.random()*(e-0+1)+0)]}function Q(){var e=+(new Date).getFullYear(),t=+new Date(2005,0,1),c=+new Date(e,12,31);return Math.floor(Math.random()*(c-t+1)+t)}function K(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(s.a)(I);case h:e.payload.fieldName,e.payload.itemName;var t=I.filter((function(t){var c=!0;for(var r in e.activeFilters){var a=r,i=r,n=e.activeFilters[a],s=t[i];if(n.length>0&&("string"==typeof s||"number"==typeof s)){var o=n.includes(s);c=!(!c||!o)}}return c}));return Object(s.a)(t);case b:return Object(s.a)(I);default:return console.log("unrecognized in cardReducer: ".concat(e.type)),Object(s.a)(I)}}var U={seller:["Rozetka","Other sellers"],ready:["\u0413\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435"],type:w,brand:N,os:k,price:[],status:["Are available","Not available","Ended up"]};function Y(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(y.a)({},U);default:return console.log("unrecognized ".concat(e.type)),Object(y.a)({},U)}}var J=c(7),Z={seller:[],type:[],brand:[],os:[],price:[]};function $(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case p:return(e=t[c.payload.fieldName].slice()).push(c.payload.itemName),Object(y.a)(Object(y.a)({},t),{},Object(J.a)({},c.payload.fieldName,Object(s.a)(e)));case m:return e=(e=t[c.payload.fieldName].slice()).filter((function(e){return e!==c.payload.itemName})),Object(y.a)(Object(y.a)({},t),{},Object(J.a)({},c.payload.fieldName,Object(s.a)(e)));default:return console.log("unrecognized ".concat(c.type)),Object(y.a)({},t)}}var ee={products:[],sort:{},filters:Z,reviews:{},favorites:{}},te=Object(_.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,c=e.filters;return{products:K(void 0,Object(y.a)(Object(y.a)({},t),{},{activeFilters:c})),sort:Y(void 0,t),filters:$(e.filters,t)}}));n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l.a,{store:te,children:Object(d.jsx)(O,{})})}),document.getElementById("root")),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.29c26a2f.chunk.js.map