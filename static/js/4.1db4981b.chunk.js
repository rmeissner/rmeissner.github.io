(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{967:function(e,n,t){"use strict";t.d(n,"a",function(){return m});var r=t(3),a=t(0),i=t.n(a),o=t(5);function c(){var e=Object(r.a)(["\n  position: absolute;\n  top: 80%;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  content: '';\n  position: absolute;\n  top: -0.5rem;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  position: relative;\n  background-color: ",";\n  width: calc(100% - 1rem);\n  margin: 0 auto;\n  border-radius: 0.625rem;\n"]);return l=function(){return e},e}var s=o.d.div(l(),function(e){return e.theme.concreteGray}),f=o.d.div(u(),function(e){return e.theme.concreteGray}),d=o.d.div(c(),function(e){return e.theme.concreteGray});function m(e){var n=e.hideTop,t=e.hideBottom,r=e.children;return i.a.createElement(s,null,n||i.a.createElement(f,null),r,t||i.a.createElement(d,null))}},968:function(e,n,t){e.exports=t.p+"static/media/arrow-down-blue.cd061363.svg"},969:function(e,n,t){e.exports=t.p+"static/media/arrow-down-grey.c0dedd2f.svg"},971:function(e,n,t){"use strict";t.d(n,"a",function(){return k});var r=t(12),a=t(3),i=t(0),o=t.n(i),c=t(5),u=t(58),l=t(9),s=t(19),f=t(6),d=t(69);function m(){var e=Object(a.a)(["\n  font-size: 1rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n  transition: color 200ms ease-in-out;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ::placeholder {\n    color: ",";\n  }\n"]);return m=function(){return e},e}function p(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  padding: 0.25rem 0.85rem 0.75rem;\n"]);return p=function(){return e},e}function h(){var e=Object(a.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return h=function(){return e},e}function b(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n"]);return b=function(){return e},e}function v(){var e=Object(a.a)(["\n  flex: 1;\n"]);return v=function(){return e},e}function g(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  box-shadow: 0 0 0 0.5px ",";\n  background-color: ",";\n  transition: box-shadow 200ms ease-in-out;\n"]);return g=function(){return e},e}function E(){var e=Object(a.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"]);return E=function(){return e},e}var y=c.d.div(E(),function(e){return e.theme.flexColumnNoWrap},function(e){var n=e.theme;return Object(s.b)(.9,n.royalBlue)},function(e){return e.theme.white}),O=c.d.div(g(),function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.mercuryGray},function(e){return e.theme.white}),j=c.d.div(v()),T=c.d.div(b(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.doveGray}),w=c.d.div(h()),N=c.d.div(p(),function(e){return e.theme.flexRowNoWrap}),x=c.d.input(m(),function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.royalBlue},function(e){return e.theme.chaliceGray});function k(e){var n=e.title,t=e.initialInput,a=void 0===t?"":t,c=e.onChange,s=void 0===c?function(){}:c,m=e.onError,p=void 0===m?function(){}:m,h=Object(u.b)().t,b=Object(l.useWeb3Context)().library,v=Object(i.useState)(a),g=Object(r.a)(v,2),E=g[0],k=g[1],D=Object(d.c)(E,150),C=Object(i.useState)({address:void 0,name:void 0}),S=Object(r.a)(C,2),P=S[0],R=S[1],W=Object(i.useState)(!1),I=Object(r.a)(W,2),U=I[0],A=I[1];return Object(i.useEffect)(function(){s({address:P.address,name:P.name})},[s,P.address,P.name]),Object(i.useEffect)(function(){p(U)},[p,U]),Object(i.useEffect)(function(){var e=!1;return Object(f.n)(D)?b.lookupAddress(D).then(function(n){e||(n?k(n):(R({address:D,name:""}),A(null)))}).catch(function(){R({address:D,name:""}),A(null)}):""!==D&&b.resolveName(D).then(function(n){e||(n?(R({address:n,name:D}),A(null)):A(!0))}).catch(function(){A(!0)}),function(){e=!0}},[D,b,s,p]),o.a.createElement(y,null,o.a.createElement(O,{error:""!==E&&U},o.a.createElement(j,null,o.a.createElement(T,null,o.a.createElement(w,null,o.a.createElement("span",null,n||h("recipientAddress")))),o.a.createElement(N,null,o.a.createElement(x,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"0x1234...",error:""!==E&&U,onChange:function(e){void 0===P.address&&void 0===P.name||R({address:void 0,name:void 0}),void 0!==U&&A();var n=e.target.value,t=Object(f.n)(n);k(t||n)},value:E})))))}},975:function(e,n,t){"use strict";var r=t(12),a=t(171),i=t(3),o=t(0),c=t.n(o),u=t(5),l=t(19);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=c.a.createElement("path",{d:"M11.4673 6L6.23364 1L0.999995 6",stroke:"#388DFF"}),m=function(e){var n=e.svgRef,t=f(e,["svgRef"]);return c.a.createElement("svg",s({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},t),d)},p=c.a.forwardRef(function(e,n){return c.a.createElement(m,s({svgRef:n},e))});t.p;function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var v=c.a.createElement("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#2F80ED"}),g=function(e){var n=e.svgRef,t=b(e,["svgRef"]);return c.a.createElement("svg",h({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},t),v)},E=c.a.forwardRef(function(e,n){return c.a.createElement(g,h({svgRef:n},e))});t.p;function y(){var e=Object(i.a)(["\n        stroke: ",";\n      "]);return y=function(){return e},e}function O(){var e=Object(i.a)(["\n  path {\n    stroke: ",";\n\n    ","\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(i.a)(["\n        stroke: ",";\n      "]);return j=function(){return e},e}function T(){var e=Object(i.a)(["\n  path {\n    stroke: ",";\n\n    ","\n  }\n"]);return T=function(){return e},e}function w(){var e=Object(i.a)(["\n          background-color: ",";\n          font-weight: 600;\n          padding: 0.25rem;\n        "]);return w=function(){return e},e}function N(){var e=Object(i.a)(["\n          color: ",";\n          font-weight: 600;\n        "]);return N=function(){return e},e}function x(){var e=Object(i.a)(["\n  margin-right: 12px;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n\n  color: ",";\n  ","\n"]);return x=function(){return e},e}function k(){var e=Object(i.a)(["\n  background-color: ",";\n  padding: 1.5rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin-top: 1rem;\n"]);return k=function(){return e},e}function D(){var e=Object(i.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return D=function(){return e},e}function C(){var e=Object(i.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return C=function(){return e},e}t.d(n,"a",function(){return A});var S=u.d.div(C(),function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.doveGray}),P=u.d.div(D(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.royalBlue}),R=u.d.div(k(),function(e){return e.theme.concreteGray}),W=u.d.span(x(),function(e){var n=e.isError,t=e.theme;return n&&t.salmonRed},function(e){var n=e.slippageWarning,t=e.highSlippageWarning,r=e.theme;return t?Object(u.c)(N(),r.salmonRed):n&&Object(u.c)(w(),Object(l.c)(.6,r.warningYellow))}),I=Object(u.d)(function(e){e.isError,e.highSlippageWarning;var n=Object(a.a)(e,["isError","highSlippageWarning"]);return c.a.createElement(p,n)})(T(),function(e){var n=e.isError,t=e.theme;return n&&t.salmonRed},function(e){var n=e.highSlippageWarning,t=e.theme;return n&&Object(u.c)(j(),t.salmonRed)}),U=Object(u.d)(function(e){e.isError,e.highSlippageWarning;var n=Object(a.a)(e,["isError","highSlippageWarning"]);return c.a.createElement(E,n)})(O(),function(e){var n=e.isError,t=e.theme;return n&&t.salmonRed},function(e){var n=e.highSlippageWarning,t=e.theme;return n&&Object(u.c)(y(),t.salmonRed)});function A(e){var n=e.openDetailsText,t=void 0===n?"Transaction Details":n,a=e.closeDetailsText,i=void 0===a?"Hide Details":a,u=e.contextualInfo,l=void 0===u?"":u,s=e.allowExpand,f=void 0!==s&&s,d=e.renderTransactionDetails,m=void 0===d?function(){}:d,p=e.isError,h=void 0!==p&&p,b=e.slippageWarning,v=e.highSlippageWarning,g=Object(o.useState)(!1),E=Object(r.a)(g,2),y=E[0],O=E[1];return f?c.a.createElement(c.a.Fragment,null,c.a.createElement(P,{onClick:function(){return O(function(e){return!e})}},c.a.createElement(c.a.Fragment,null,c.a.createElement(W,{isError:h,slippageWarning:b,highSlippageWarning:v},(b||v)&&c.a.createElement("span",{role:"img","aria-label":"warning"},"\u26a0\ufe0f"),l||(y?i:t)),y?c.a.createElement(I,{isError:h,highSlippageWarning:v}):c.a.createElement(U,{isError:h,highSlippageWarning:v}))),y&&c.a.createElement(R,null,m())):c.a.createElement(S,null,l)}},982:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return oe});var r=t(15),a=t.n(r),i=t(102),o=t(28),c=t(12),u=t(14),l=t(3),s=t(0),f=t.n(s),d=t(118),m=t(58),p=t(9),h=t(16),b=t(5),v=t(25),g=t(970),E=t(975),y=t(967),O=t(971),j=t(968),T=t.n(j),w=t(969),N=t.n(w),x=t(6),k=t(69),D=t(103),C=t(86),S=t(169),P=t(170);function R(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return R=function(){return e},e}function W(){var e=Object(l.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return W=function(){return e},e}function I(){var e=Object(l.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.5rem 1rem;\n"]);return I=function(){return e},e}function U(){var e=Object(l.a)(["\n  margin-top: 1rem;\n"]);return U=function(){return e},e}function A(){var e=Object(l.a)(["\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n  cursor: ",";\n"]);return A=function(){return e},e}function _(){var e=Object(l.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return _=function(){return e},e}function M(){var e=Object(l.a)(["\n  color: ",";\n"]);return M=function(){return e},e}var F=0,Z=1,L=0,V=1,B=2,G=h.ethers.utils.bigNumberify(200),H=h.ethers.utils.bigNumberify(400),z=900,Y=h.ethers.utils.bigNumberify(1e3),q=b.d.span(M(),function(e){return e.theme.royalBlue}),J=b.d.div(_(),function(e){return e.theme.flexRowNoWrap}),K=b.d.img(A(),function(e){return e.clickable&&"pointer"}),Q=b.d.div(U()),X=b.d.div(I(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.doveGray}),$=b.d.span(W(),function(e){return e.theme.chaliceGray}),ee=b.d.div(R());function ne(e,n,t){var r=e.mul(h.ethers.utils.bigNumberify(997)),a=r.mul(t),i=n.mul(h.ethers.utils.bigNumberify(1e3)).add(r);return a.div(i)}function te(e,n,t){var r=n.mul(e).mul(h.ethers.utils.bigNumberify(1e3)),a=t.sub(e).mul(h.ethers.utils.bigNumberify(997));return r.div(a).add(h.ethers.constants.One)}var re={independentValue:"",dependentValue:"",independentField:F,inputCurrency:"ETH",outputCurrency:""};function ae(e,n){switch(n.type){case"FLIP_INDEPENDENT":var t=e.independentField,r=e.inputCurrency,a=e.outputCurrency;return Object(u.a)({},e,{dependentValue:"",independentField:t===F?Z:F,inputCurrency:a,outputCurrency:r});case"SELECT_CURRENCY":var i=e.inputCurrency,o=e.outputCurrency,c=n.payload,l=c.field,s=c.currency,f=l===F?s:i,d=l===Z?s:o;return f===d?Object(u.a)({},e,{inputCurrency:l===F?s:"",outputCurrency:l===Z?s:""}):Object(u.a)({},e,{inputCurrency:f,outputCurrency:d});case"UPDATE_INDEPENDENT":var m=n.payload,p=m.field,h=m.value;return Object(u.a)({},e,{independentValue:h,dependentValue:"",independentField:p});case"UPDATE_DEPENDENT":return Object(u.a)({},e,{dependentValue:n.payload});default:return re}}function ie(e,n,t,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(n||0===n)&&t&&(r||0===r)){var i=h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(18));return a?e.mul(i).div(t).mul(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(r))).div(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(n))):t.mul(i).div(e).mul(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(n))).div(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(r)))}}catch(o){}}function oe(){var e=Object(m.b)().t,n=Object(p.useWeb3Context)().account,t=Object(C.e)();Object(s.useEffect)(function(){d.a.pageview(window.location.pathname+window.location.search)},[]);var r=Object(s.useReducer)(ae,re),u=Object(c.a)(r,2),l=u[0],b=u[1],j=l.independentValue,w=l.dependentValue,R=l.independentField,W=l.inputCurrency,I=l.outputCurrency,U=Object(s.useState)({address:"",name:""}),A=Object(c.a)(U,2),_=A[0],M=A[1],oe=Object(s.useState)(),ce=Object(c.a)(oe,2),ue=ce[0],le=ce[1],se=function(e,n){return e&&n?"ETH"===e?L:"ETH"===n?V:B:null}(W,I),fe=Object(D.c)(W),de=fe.symbol,me=fe.decimals,pe=fe.exchangeAddress,he=Object(D.c)(I),be=he.symbol,ve=he.decimals,ge=he.exchangeAddress,Ee=Object(k.e)(pe),ye=Object(k.e)(ge),Oe=se===L?ye:Ee,je=Object(P.b)(n,W,pe),Te=Object(S.c)(W),we=Te.reserveETH,Ne=Te.reserveToken,xe=Object(S.c)(I),ke=xe.reserveETH,De=xe.reserveToken,Ce=Object(S.b)(n,W),Se=Object(S.b)(n,I),Pe=Ce&&Number.isInteger(me)?Object(x.a)(Ce,me,Math.min(4,me)):"",Re=Se&&Number.isInteger(ve)?Object(x.a)(Se,ve,Math.min(4,ve)):"",We=R===F?me:ve,Ie=R===Z?me:ve,Ue=Object(s.useState)(),Ae=Object(c.a)(Ue,2),_e=Ae[0],Me=Ae[1],Fe=w&&Ie?Object(x.a)(w,Ie,Math.min(4,Ie),!1):"",Ze=R===F?_e:w,Le=R===F?j:Fe,Ve=R===Z?_e:w,Be=R===Z?j:Fe,Ge=Object(s.useState)(),He=Object(c.a)(Ge,2),ze=He[0],Ye=He[1];Object(s.useEffect)(function(){if(j&&We){try{var n=h.ethers.utils.parseUnits(j,We);if(n.lte(h.ethers.constants.Zero)||n.gte(h.ethers.constants.MaxUint256))throw Error();Me(n),Ye(null)}catch(t){Ye(e("inputNotValid"))}return function(){Me(),Ye()}}},[j,We,e]);var qe=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var t=e.mul(n?H:G).div(h.ethers.utils.bigNumberify(1e4)),r=e.sub(t),a=e.add(t);return{minimum:r.lt(h.ethers.constants.Zero)?h.ethers.constants.Zero:r,maximum:a.gt(h.ethers.constants.MaxUint256)?h.ethers.constants.MaxUint256:a}}return{}}(w,se===B),Je=qe.minimum,Ke=qe.maximum,Qe=Object(s.useState)(),Xe=Object(c.a)(Qe,2),$e=Xe[0],en=Xe[1],nn=Object(s.useState)(!1),tn=Object(c.a)(nn,2),rn=tn[0],an=tn[1];Object(s.useEffect)(function(){var n=R===F?_e:Ke;if(Ce&&(je||"ETH"===W)&&n)return Ce.lt(n)?en(e("insufficientBalance")):"ETH"!==W&&je.lt(n)?(en(e("unlockTokenCont")),an(!0)):(en(null),an(!1)),function(){en(),an(!1)}},[R,_e,Ke,Ce,W,je,e]),Object(s.useEffect)(function(){var n=_e;if(se===L){var t=ke,r=De;if(n&&t&&r){try{var a=R===F?ne(n,t,r):te(n,t,r);if(a.lte(h.ethers.constants.Zero))throw Error();b({type:"UPDATE_DEPENDENT",payload:a})}catch(g){Ye(e("insufficientLiquidity"))}return function(){b({type:"UPDATE_DEPENDENT",payload:""})}}}else if(se===V){var i=we,o=Ne;if(n&&i&&o){try{var c=R===F?ne(n,o,i):te(n,o,i);if(c.lte(h.ethers.constants.Zero))throw Error();b({type:"UPDATE_DEPENDENT",payload:c})}catch(E){Ye(e("insufficientLiquidity"))}return function(){b({type:"UPDATE_DEPENDENT",payload:""})}}}else if(se===B){var u=we,l=Ne,s=ke,f=De;if(n&&u&&l&&s&&f){try{if(R===F){var d=ne(n,l,u);if(d.lte(h.ethers.constants.Zero))throw Error();var m=ne(d,s,f);if(m.lte(h.ethers.constants.Zero))throw Error();b({type:"UPDATE_DEPENDENT",payload:m})}else{var p=te(n,s,f);if(p.lte(h.ethers.constants.Zero))throw Error();var v=te(p,l,u);if(v.lte(h.ethers.constants.Zero))throw Error();b({type:"UPDATE_DEPENDENT",payload:v})}}catch(y){Ye(e("insufficientLiquidity"))}return function(){b({type:"UPDATE_DEPENDENT",payload:""})}}}},[_e,se,ke,De,we,Ne,R,e]);var on=Object(s.useState)(!1),cn=Object(c.a)(on,2),un=cn[0],ln=cn[1],sn=ie(Ze,me,Ve,ve),fn=ie(Ze,me,Ve,ve,!0),dn=function(e,n,t,r,a,i,o){var c=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(e===L)return ie(a,18,i,o,c);if(e===V)return ie(t,r,n,18,c);if(e===B){var u=h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(18)),l=ie(t,r,n,18),s=ie(a,18,i,o);try{return l&&s?l.mul(s).div(u):void 0}catch(f){}}}(se,we,Ne,me,ke,De,ve),mn=sn&&dn?sn.sub(dn).abs().mul(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(18))).div(dn).sub(h.ethers.utils.bigNumberify(3).mul(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(15)))):void 0,pn=mn&&Object(x.a)(mn,16,2),hn=mn&&mn.gte(h.ethers.utils.parseEther(".05"))&&mn.lt(h.ethers.utils.parseEther(".2")),bn=mn&&mn.gte(h.ethers.utils.parseEther(".2")),vn=sn&&null===$e&&null===ze&&null===ue,gn="(".concat(e("estimated"),")");function En(e){return"Balance: ".concat(e)}function yn(){d.a.event({category:"TransactionDetail",action:"Open"});var n=function(e){return f.a.createElement(q,null,e)};return R===F?f.a.createElement("div",null,f.a.createElement("div",null,e("youAreSelling")," ",n("".concat(Object(x.a)(_e,We,Math.min(4,We))," ").concat(de)),"."),f.a.createElement(Q,null,n(_.address)," ",e("willReceive")," ",n("".concat(Object(x.a)(Je,Ie,Math.min(4,Ie))," ").concat(be))," ",e("orTransFail")),f.a.createElement(Q,null,(hn||bn)&&f.a.createElement("span",{role:"img","aria-label":"warning"},"\u26a0\ufe0f"),e("priceChange")," ",n("".concat(pn,"%")),".")):f.a.createElement("div",null,f.a.createElement("div",null,e("youAreSending")," ",n("".concat(Object(x.a)(_e,We,Math.min(4,We))," ").concat(be))," ",e("to")," ",n(_.address),"."),f.a.createElement(Q,null,e("itWillCost")," ",n("".concat(Object(x.a)(Ke,Ie,Math.min(4,Ie))," ").concat(de))," ",e("orTransFail")),f.a.createElement(Q,null,e("priceChange")," ",n("".concat(pn,"%")),"."))}function On(){return(On=Object(o.a)(a.a.mark(function e(){var n,r,o,c,u,l;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.ceil(Date.now()/1e3)+z,R===F?(d.a.event({category:"".concat(se),action:"TransferInput"}),se===L?(r=Oe.estimate.ethToTokenTransferInput,o=Oe.ethToTokenTransferInput,c=[Je,n,_.address],u=_e):se===V?(r=Oe.estimate.tokenToEthTransferInput,o=Oe.tokenToEthTransferInput,c=[_e,Je,n,_.address],u=h.ethers.constants.Zero):se===B&&(r=Oe.estimate.tokenToTokenTransferInput,o=Oe.tokenToTokenTransferInput,c=[_e,Je,h.ethers.constants.One,n,_.address,I],u=h.ethers.constants.Zero)):R===Z&&(d.a.event({category:"".concat(se),action:"TransferOutput"}),se===L?(r=Oe.estimate.ethToTokenTransferOutput,o=Oe.ethToTokenTransferOutput,c=[_e,n,_.address],u=Ke):se===V?(r=Oe.estimate.tokenToEthTransferOutput,o=Oe.tokenToEthTransferOutput,c=[_e,Ke,n,_.address],u=h.ethers.constants.Zero):se===B&&(r=Oe.estimate.tokenToTokenTransferOutput,o=Oe.tokenToTokenTransferOutput,c=[_e,Ke,h.ethers.constants.MaxUint256,n,_.address,I],u=h.ethers.constants.Zero)),e.next=4,r.apply(void 0,Object(i.a)(c).concat([{value:u}]));case 4:l=e.sent,o.apply(void 0,Object(i.a)(c).concat([{value:u,gasLimit:Object(x.b)(l,Y)}])).then(function(e){t(e)});case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}return f.a.createElement(f.a.Fragment,null,f.a.createElement(g.a,{title:e("input"),description:Le&&R===Z?gn:"",extraText:Pe&&En(Pe),extraTextClickHander:function(){if(Ce&&me){var e="ETH"===W?Ce.sub(h.ethers.utils.parseEther(".1")):Ce;e.gt(h.ethers.constants.Zero)&&b({type:"UPDATE_INDEPENDENT",payload:{value:Object(x.a)(e,me,me,!1),field:F}})}},onCurrencySelected:function(e){b({type:"SELECT_CURRENCY",payload:{currency:e,field:F}})},onValueChange:function(e){b({type:"UPDATE_INDEPENDENT",payload:{value:e,field:F}})},showUnlock:rn,selectedTokens:[W,I],selectedTokenAddress:W,value:Le,errorMessage:$e||(R===F?ze:"")}),f.a.createElement(y.a,null,f.a.createElement(J,null,f.a.createElement(K,{onClick:function(){b({type:"FLIP_INDEPENDENT"})},clickable:!0,alt:"swap",src:vn?T.a:N.a}))),f.a.createElement(g.a,{title:e("output"),description:Be&&R===F?gn:"",extraText:Re&&En(Re),onCurrencySelected:function(e){b({type:"SELECT_CURRENCY",payload:{currency:e,field:Z}})},onValueChange:function(e){b({type:"UPDATE_INDEPENDENT",payload:{value:e,field:Z}})},selectedTokens:[W,I],selectedTokenAddress:I,value:Be,errorMessage:R===Z?ze:"",disableUnlock:!0}),f.a.createElement(y.a,null,f.a.createElement(J,null,f.a.createElement(K,{src:vn?T.a:N.a,alt:"arrow"}))),f.a.createElement(O.a,{onChange:M,onError:le}),f.a.createElement(y.a,{hideBottom:!0},f.a.createElement(X,{onClick:function(){ln(function(e){return!e})}},f.a.createElement($,null,e("exchangeRate")),un?f.a.createElement("span",null,sn?"1 ".concat(be," = ").concat(Object(x.a)(fn,18,4,!1)," ").concat(de):" - "):f.a.createElement("span",null,sn?"1 ".concat(de," = ").concat(Object(x.a)(sn,18,4,!1)," ").concat(be):" - "))),function(){var t="",r=!1;$e||ze?(t=$e||ze,r=!0):W&&I?j?_.address?Object(x.n)(_.address)?n||(t=e("noWallet"),r=!0):t=e("invalidRecipient"):t=e("noRecipient"):t=e("enterValueCont"):t=e("selectTokenCont");var a=bn?e("highSlippageWarning"):hn?e("slippageWarning"):"";return f.a.createElement(E.a,{openDetailsText:e("transactionDetails"),closeDetailsText:e("hideDetails"),contextualInfo:t||a,allowExpand:!!(W&&I&&Ze&&Ve&&_.address),isError:r,slippageWarning:hn&&a,highSlippageWarning:bn&&a,renderTransactionDetails:yn})}(),f.a.createElement(ee,null,f.a.createElement(v.b,{disabled:!vn,onClick:function(){return On.apply(this,arguments)},warning:bn},e(bn?"sendAnyway":"send"))))}}}]);
//# sourceMappingURL=4.1db4981b.chunk.js.map