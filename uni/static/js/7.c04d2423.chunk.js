(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{972:function(e,t,n){"use strict";var r=n(29),a=n(42),i=n(37),u=n(17),c=n(38),l=n(3),o=n(0),s=n.n(o),m=n(5),d=n(971),b=n.n(d),f=n(973),p=n.n(f);function h(){var e=Object(l.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  span {\n    margin-right: 12px;\n  }\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return h=function(){return e},e}function E(){var e=Object(l.a)(["\n  background-color: ",";\n  padding: 1.5rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin-top: 1rem;\n"]);return E=function(){return e},e}function v(){var e=Object(l.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return v=function(){return e},e}var g=m.d.div(v(),function(e){var t=e.error,n=e.theme;return t?n.salmonRed:n.doveGray}),y=m.d.div(E(),function(e){return e.theme.concreteGray}),j=m.d.div(h(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.royalBlue}),O=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={showDetails:!1},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"renderDetails",value:function(){return this.state.showDetails?s.a.createElement(y,null,this.props.renderTransactionDetails()):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.openDetailsText,r=t.closeDetailsText,a=t.contextualInfo,i=t.isError;return a?s.a.createElement(g,{error:i},a):s.a.createElement(s.a.Fragment,null,s.a.createElement(j,{onClick:function(){return e.setState(function(e){return{showDetails:!e.showDetails}})}},this.state.showDetails?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,r),s.a.createElement("img",{src:p.a,alt:"dropup"})):s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,n),s.a.createElement("img",{src:b.a,alt:"dropdown"}))),this.renderDetails())}}]),t}(o.Component);O.defaultProps={openDetailsText:"Transaction Details",closeDetailsText:"Hide Details",renderTransactionDetails:function(){},contextualInfo:"",isError:!1},t.a=O},973:function(e,t,n){e.exports=n.p+"static/media/dropup-blue.b96d70e1.svg"},978:function(e,t,n){e.exports=n.p+"static/media/plus-blue.e8021e51.svg"},979:function(e,t,n){e.exports=n.p+"static/media/plus-grey.d8e0be7d.svg"},982:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return ie});var r=n(15),a=n.n(r),i=n(28),u=n(12),c=n(14),l=n(3),o=n(0),s=n.n(o),m=n(58),d=n(9),b=n(16),f=n(118),p=n(5),h=n(25),E=n(969),v=n(966),g=n(972),y=n(978),j=n.n(y),O=n(979),N=n.n(O),T=n(69),w=n(6),x=n(86),D=n(103),U=n(168),A=n(169);function V(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return V=function(){return e},e}function k(){var e=Object(l.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return k=function(){return e},e}function C(){var e=Object(l.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return C=function(){return e},e}function P(){var e=Object(l.a)(["\n  ","\n  padding: 1rem 0;\n"]);return P=function(){return e},e}function L(){var e=Object(l.a)(["\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n"]);return L=function(){return e},e}function S(){var e=Object(l.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return e},e}function M(){var e=Object(l.a)(["\n  margin-top: 1rem;\n"]);return M=function(){return e},e}function _(){var e=Object(l.a)(["\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-align: center;\n\n  :first-child {\n    padding-bottom: 0.3rem;\n    font-weight: 500;\n  }\n"]);return _=function(){return e},e}function z(){var e=Object(l.a)(["\n  margin-top: 1rem;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  border: 1px solid rgba($pizazz-orange, 0.4);\n  background-color: rgba($pizazz-orange, 0.1);\n  border-radius: 1rem;\n"]);return z=function(){return e},e}function H(){var e=Object(l.a)(["\n  color: ",";\n"]);return H=function(){return e},e}var R=0,Z=1,W=b.ethers.utils.bigNumberify(200),q=900,F=b.ethers.utils.bigNumberify(1e3),B=p.d.span(H(),function(e){return e.theme.royalBlue}),I=p.d.div(z()),G=p.d.div(_()),J=p.d.div(M()),Y=p.d.div(S(),function(e){return e.theme.flexRowNoWrap}),$=p.d.img(L()),K=p.d.div(P(),function(e){return e.theme.flexColumnNoWrap}),Q=p.d.div(C(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.doveGray}),X=p.d.span(k(),function(e){return e.theme.chaliceGray}),ee=p.d.div(V());function te(e){if(e){var t=e.mul(W).div(b.ethers.utils.bigNumberify(1e4)),n=e.sub(t),r=e.add(t);return{minimum:n.lt(b.ethers.constants.Zero)?b.ethers.constants.Zero:n,maximum:r.gt(b.ethers.constants.MaxUint256)?b.ethers.constants.MaxUint256:r}}return{}}var ne={inputValue:"",outputValue:"",lastEditedField:R,outputCurrency:""};function re(e,t){switch(t.type){case"SELECT_CURRENCY":return Object(c.a)({},e,{outputCurrency:t.payload});case"UPDATE_VALUE":var n=e.inputValue,r=e.outputValue,a=t.payload,i=a.field,u=a.value;return Object(c.a)({},e,{inputValue:i===R?u:n,outputValue:i===Z?u:r,lastEditedField:i});case"UPDATE_DEPENDENT_VALUE":var l=e.inputValue,o=e.outputValue,s=t.payload,m=s.field,d=s.value;return Object(c.a)({},e,{inputValue:m===R?d:l,outputValue:m===Z?d:o});default:return ne}}function ae(e,t,n){return function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(t||0===t)&&n&&(r||0===r)){var i=b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18));return a?e.mul(i).div(n).mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(r))).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(t))):n.mul(i).div(e).mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(t))).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(r)))}}catch(u){}}(e,18,t,n,arguments.length>3&&void 0!==arguments[3]&&arguments[3])}function ie(){var e=Object(m.b)().t,t=Object(d.useWeb3Context)(),n=t.library,r=t.active,c=t.account,l=Object(o.useReducer)(re,ne),p=Object(u.a)(l,2),y=p[0],O=p[1],V=y.inputValue,k=y.outputValue,C=y.lastEditedField,P=y.outputCurrency,L="ETH",S=Object(o.useState)(),M=Object(u.a)(S,2),_=M[0],z=M[1],H=Object(o.useState)(),W=Object(u.a)(H,2),ie=W[0],ue=W[1],ce=Object(o.useState)(),le=Object(u.a)(ce,2),oe=le[0],se=le[1],me=Object(o.useState)(),de=Object(u.a)(me,2),be=de[0],fe=de[1],pe=Object(D.c)(P),he=pe.symbol,Ee=pe.decimals,ve=pe.exchangeAddress,ge=Object(T.e)(ve),ye=Object(o.useState)(),je=Object(u.a)(ye,2),Oe=je[0],Ne=je[1],Te=Object(o.useCallback)(function(){ge&&ge.totalSupply().then(function(e){Ne(e)})},[ge]);Object(o.useEffect)(function(){return Te(),n.on("block",Te),function(){n.removeListener("block",Te)}},[Te,n]);var we=Object(U.b)(c,ve),xe=Object(U.b)(ve,"ETH"),De=Object(U.b)(ve,P),Ue=Object(U.c)(P),Ae=Ue.reserveETH,Ve=Ue.reserveToken,ke=!!(Ae&&Ve&&Ae.isZero()&&Ve.isZero()),Ce=we&&Oe&&!1===ke&&!Oe.isZero()?we.mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(Oe):void 0,Pe=xe&&Ce?xe.mul(Ce).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))):void 0,Le=De&&Ce?De.mul(Ce).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))):void 0,Se=ke?_:Oe&&_&&xe&&!xe.isZero()?Oe.mul(_).div(xe):void 0,Me=Object(U.b)(c,L),_e=Object(U.b)(c,P),ze=xe&&Oe&&!1===ke&&!Oe.isZero()?xe.mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(Oe):void 0,He=De&&Oe&&!1===ke&&!Oe.isZero()?De.mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(Oe):void 0,Re=ie&&te(ie).maximum,Ze=Se&&te(Se).minimum,We=Object(o.useMemo)(function(){return ae(Ae,Ve,Ee)},[Ae,Ve,Ee]),qe=Object(o.useMemo)(function(){return ae(Ae,Ve,Ee,!0)},[Ae,Ve,Ee]);function Fe(){f.a.event({category:"TransactionDetail",action:"Open"});var t=function(e){return s.a.createElement(B,null,e)};return ke?s.a.createElement("div",null,s.a.createElement("div",null,e("youAreAdding")," ",t("".concat(V," ETH"))," ",e("and")," ",t("".concat(k," ").concat(he))," ",e("intoPool")),s.a.createElement(J,null,e("youAreSettingExRate")," ",t("1 ETH = ".concat(Object(w.a)(ae(_,ie,Ee),18,4,!1)," ").concat(he)),"."),s.a.createElement(J,null,e("youWillMint")," ",t("".concat(V))," ",e("liquidityTokens")),s.a.createElement(J,null,e("totalSupplyIs0"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,e("youAreAdding")," ",t("".concat(Object(w.a)(_,18,4)," ETH"))," ",e("and")," ","at most"," ",t("".concat(Object(w.a)(Re,Ee,4)," ").concat(he))," ",e("intoPool")),s.a.createElement(J,null,e("youWillMint")," ",t(Object(w.a)(Se,18,4))," ",e("liquidityTokens")),s.a.createElement(J,null,e("totalSupplyIs")," ",t(Object(w.a)(Oe,18,4))),s.a.createElement(J,null,e("tokenWorth")," ",t(Object(w.a)(ze,18,4))," ETH ",e("and")," ",t(Object(w.a)(He,Ee,Math.min(Ee,4)))," ",he))}var Be=Object(x.e)(),Ie=r&&c,Ge=null===oe||null===be;function Je(){return(Je=Object(i.a)(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f.a.event({category:"Pool",action:"AddLiquidity"}),t=Math.ceil(Date.now()/1e3)+q,e.next=4,ge.estimate.addLiquidity(ke?b.ethers.constants.Zero:Ze,ke?ie:Re,t,{value:_});case 4:n=e.sent,ge.addLiquidity(ke?b.ethers.constants.Zero:Ze,ke?ie:Re,t,{value:_,gasLimit:Object(w.b)(n,F)}).then(function(e){Be(e)});case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ye(e){return"Balance: ".concat(e)}Object(o.useEffect)(function(){if(ke){if(V){var e=b.ethers.utils.parseUnits(V,18);z(e)}if(k){var t=b.ethers.utils.parseUnits(k,Ee);ue(t)}}},[Ee,V,ke,k]),Object(o.useEffect)(function(){if(!1===ke&&V&&We&&C===R&&Ee)try{var t=b.ethers.utils.parseUnits(V,18);if(t.lte(b.ethers.constants.Zero)||t.gte(b.ethers.constants.MaxUint256))throw Error();z(t);var n=We.mul(t).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18-Ee)));return ue(n),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:Z,value:Object(w.a)(n,Ee,4,!1)}}),function(){fe(),z(),ue(),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:Z,value:""}})}}catch(r){fe(e("inputNotValid"))}},[V,ke,C,We,Ee,e]),Object(o.useEffect)(function(){if(!1===ke&&k&&qe&&C===Z&&Ee)try{var t=b.ethers.utils.parseUnits(k,Ee);if(t.lte(b.ethers.constants.Zero)||t.gte(b.ethers.constants.MaxUint256))throw Error();ue(t);var n=qe.mul(t).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(Ee)));return z(n),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:R,value:Object(w.a)(n,18,4,!1)}}),function(){se(),ue(),z(),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:R,value:""}})}}catch(r){se(e("inputNotValid"))}},[k,ke,C,qe,Ee,e]),Object(o.useEffect)(function(){_&&Me&&(_.gt(Me)?se(e("insufficientBalance")):se(null)),Re&&_e&&(Re.gt(_e)?fe(e("insufficientBalance")):fe(null))},[_,Me,Re,_e,e]);var $e=Object(A.b)(c,P,ve),Ke=Object(o.useState)(!1),Qe=Object(u.a)(Ke,2),Xe=Qe[0],et=Qe[1];return Object(o.useEffect)(function(){if(ie&&$e)return $e.lt(ie)&&(fe(e("unlockTokenCont")),et(!0)),function(){fe(),et(!1)}},[ie,$e,e]),s.a.createElement(s.a.Fragment,null,ke?s.a.createElement(I,null,s.a.createElement(G,null,s.a.createElement("span",{role:"img","aria-label":"first-liquidity"},"\ud83d\udeb0")," ",e("firstLiquidity")),s.a.createElement(G,null,e("initialExchangeRate",{symbol:he}))):null,s.a.createElement(E.a,{title:e("deposit"),extraText:Me&&Ye(Object(w.a)(Me,18,4)),onValueChange:function(e){O({type:"UPDATE_VALUE",payload:{value:e,field:R}})},selectedTokenAddress:"ETH",value:V,errorMessage:oe,disableTokenSelect:!0}),s.a.createElement(v.a,null,s.a.createElement(Y,null,s.a.createElement($,{src:Ie?j.a:N.a,alt:"plus"}))),s.a.createElement(E.a,{title:e("deposit"),description:ke?"":k?"(".concat(e("estimated"),")"):"",extraText:_e&&Ye(Object(w.a)(_e,Ee,Math.min(Ee,4))),selectedTokenAddress:P,onCurrencySelected:function(e){O({type:"SELECT_CURRENCY",payload:e})},onValueChange:function(e){O({type:"UPDATE_VALUE",payload:{value:e,field:Z}})},value:k,showUnlock:Xe,errorMessage:be}),s.a.createElement(v.a,{hideBottom:!0},s.a.createElement(K,null,s.a.createElement(Q,null,s.a.createElement(X,null,e("exchangeRate")),s.a.createElement("span",null,We?"1 ETH = ".concat(Object(w.a)(We,18,4)," ").concat(he):" - ")),s.a.createElement(Q,null,s.a.createElement(X,null,e("currentPoolSize")),s.a.createElement("span",null,xe&&De?"".concat(Object(w.a)(xe,18,4)," ETH + ").concat(Object(w.a)(De,Ee,Math.min(4,Ee))," ").concat(he):" - ")),s.a.createElement(Q,null,s.a.createElement(X,null,e("yourPoolShare")," (",xe&&Object(w.a)(Ce,16,2),"%)"),s.a.createElement("span",null,Pe&&Le?"".concat(Object(w.a)(Pe,18,4)," ETH + ").concat(Object(w.a)(Le,Ee,Math.min(4,Ee))," ").concat(he):" - ")))),function(){var t="",n=!1;return oe||be?(t=oe||be,n=!0):L&&P?V?c||(t=e("noWallet"),n=!0):t=e("enterValueCont"):t=e("selectTokenCont"),s.a.createElement(g.a,{openDetailsText:e("transactionDetails"),closeDetailsText:e("hideDetails"),contextualInfo:t,isError:n,renderTransactionDetails:Fe})}(),s.a.createElement(ee,null,s.a.createElement(h.b,{disabled:!Ge,onClick:function(){return Je.apply(this,arguments)}},e("addLiquidity"))))}}}]);
//# sourceMappingURL=7.c04d2423.chunk.js.map