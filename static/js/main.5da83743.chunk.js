(this["webpackJsonpcounter-exam"]=this["webpackJsonpcounter-exam"]||[]).push([[0],[,,function(t,e,n){t.exports={settingsInfoAndButtonBlock:"CounterSettings_settingsInfoAndButtonBlock__mWkGi",counterSettings:"CounterSettings_counterSettings__7IXex",inputBlock:"CounterSettings_inputBlock__3Ppdp",valueInfo:"CounterSettings_valueInfo__3-2i9",input:"CounterSettings_input__2UrqR",buttonBlock:"CounterSettings_buttonBlock__2WwgD",inputError:"CounterSettings_inputError__1oVTZ"}},,function(t,e,n){t.exports={maxCountStyle:"Tablo_maxCountStyle__2pfCr",countStyle:"Tablo_countStyle__3_sPF",tabloBlock:"Tablo_tabloBlock__1zG0j",incorrectMessageStyle:"Tablo_incorrectMessageStyle__1Uv6O"}},,function(t,e,n){t.exports={buttonStyle:"Button_buttonStyle__1hg3C"}},,function(t,e,n){t.exports={buttonsStyle:"Buttons_buttonsStyle__1hUTh",buttonStyle:"Buttons_buttonStyle__hvrot"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(7),u=n.n(s),l=(n(14),n(3)),r=(n(15),n(4)),o=n.n(r),i=n(0);function b(t){return Object(i.jsx)("div",{className:o.a.tabloBlock,children:Object(i.jsx)("div",{className:t.inc===t.maxValue?o.a.maxCountStyle:"Incorrect value"===t.counterMessage||t.startValue<0?o.a.incorrectMessageStyle:o.a.countStyle,children:t.counterMessage?t.counterMessage:t.inc})})}var j=n(9),d=n(6),v=n.n(d);function _(t){var e=t.title,n=t.callback,c=t.disabled;Object(j.a)(t,["title","callback","disabled"]);return Object(i.jsx)("div",{className:v.a.buttonsStyle,children:Object(i.jsx)("button",{onClick:n,disabled:c,className:v.a.buttonStyle,children:e})})}var g=n(8),O=n.n(g),S=n(2),x=n.n(S);var m=function(){var t=Object(c.useState)(0),e=Object(l.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(5),u=Object(l.a)(s,2),r=u[0],o=u[1],j=Object(c.useState)(!1),d=Object(l.a)(j,2),v=d[0],g=d[1],S=Object(c.useState)(!1),m=Object(l.a)(S,2),f=m[0],h=m[1],p=Object(c.useState)(!1),k=Object(l.a)(p,2),y=k[0],B=k[1],C=Object(c.useState)(n),T=Object(l.a)(C,2),N=T[0],I=T[1],M=Object(c.useState)(null),P=Object(l.a)(M,2),F=P[0],V=P[1],E=r<=n||r<=0||n<0?x.a.inputError:x.a.input,w=y||N===r,A=f,U=0===n&&5===r||v||n<0||r<=0||n>=r;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:x.a.settingsInfoAndButtonBlock,children:[Object(i.jsx)("div",{className:x.a.counterSettings,children:Object(i.jsxs)("div",{className:x.a.inputBlock,children:[Object(i.jsxs)("div",{className:x.a.valueInfo,children:["max value",Object(i.jsx)("span",{children:Object(i.jsx)("input",{className:E,type:"number",value:r,onChange:function(t){g(!1),B(!0),h(!0),o(+t.currentTarget.value),(+t.currentTarget.value<=n||+t.currentTarget.value<=0)&&V("Incorrect value"),+t.currentTarget.value>n&&V("Press key")}})})]}),Object(i.jsxs)("div",{className:x.a.valueInfo,children:["start value",Object(i.jsx)("span",{children:Object(i.jsx)("input",{className:E,type:"number",value:n,onChange:function(t){console.log(+t.currentTarget.value),g(!1),B(!0),h(!0),a(+t.currentTarget.value),V("Press key"),+t.currentTarget.value>=r&&V("Incorrect value"),+t.currentTarget.value<r&&V("Press key"),+t.currentTarget.value<0&&V("Incorrect value")}})})]})]})}),Object(i.jsx)("div",{className:x.a.buttonBlock,children:Object(i.jsx)(_,{title:"set",callback:function(){V(null),I(n),g(!0),B(!1),h(!1)},disabled:U})})]}),Object(i.jsxs)("div",{className:"Counter",children:[Object(i.jsx)(b,{inc:N,maxValue:r,counterMessage:F,startValue:n}),Object(i.jsxs)("div",{className:O.a.buttonsStyle,children:[Object(i.jsx)(_,{title:"inc",callback:function(){if(N<r){var t=Number(N);I(++t)}},disabled:w}),Object(i.jsx)(_,{title:"reset",callback:function(){I(n)},disabled:A})]})]})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,u=e.getTTFB;n(t),c(t),a(t),s(t),u(t)}))};u.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.5da83743.chunk.js.map