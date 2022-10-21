/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*! jQuery UI - v1.11.4 - 2015-12-21
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, sortable.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */


// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "1.11.4",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	scrollParent: function( includeHidden ) {
		var position = this.css( "position" ),
			excludeStaticParent = position === "absolute",
			overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
			scrollParent = this.parents().filter( function() {
				var parent = $( this );
				if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
					return false;
				}
				return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
			}).eq( 0 );

		return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
	},

	uniqueId: (function() {
		var uuid = 0;

		return function() {
			return this.each(function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			});
		};
	})(),

	removeUniqueId: function() {
		return this.each(function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap='#" + mapName + "']" )[ 0 ];
		return !!img && visible( img );
	}
	return ( /^(input|select|textarea|button|object)$/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}

// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	disableSelection: (function() {
		var eventType = "onselectstart" in document.createElement( "div" ) ?
			"selectstart" :
			"mousedown";

		return function() {
			return this.bind( eventType + ".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
		};
	})(),

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	}
});

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
$.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};


/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat(args) );
			}

			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;


/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */


var mouseHandled = false;
$( document ).mouseup( function() {
	mouseHandled = false;
});

var mouse = $.widget("ui.mouse", {
	version: "1.11.4",
	options: {
		cancel: "input,textarea,button,select,option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.bind("mousedown." + this.widgetName, function(event) {
				return that._mouseDown(event);
			})
			.bind("click." + this.widgetName, function(event) {
				if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
					$.removeData(event.target, that.widgetName + ".preventClickEvent");
					event.stopImmediatePropagation();
					return false;
				}
			});

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.unbind("." + this.widgetName);
		if ( this._mouseMoveDelegate ) {
			this.document
				.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
				.unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
		}
	},

	_mouseDown: function(event) {
		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// we may have missed mouseup (out of window)
		(this._mouseStarted && this._mouseUp(event));

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = (event.which === 1),
			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
		if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if (!this.mouseDelayMet) {
			this._mouseDelayTimer = setTimeout(function() {
				that.mouseDelayMet = true;
			}, this.options.delay);
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted = (this._mouseStart(event) !== false);
			if (!this._mouseStarted) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
			$.removeData(event.target, this.widgetName + ".preventClickEvent");
		}

		// these delegates are required to keep context
		this._mouseMoveDelegate = function(event) {
			return that._mouseMove(event);
		};
		this._mouseUpDelegate = function(event) {
			return that._mouseUp(event);
		};

		this.document
			.bind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.bind( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function(event) {
		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {
			// IE mouseup check - mouseup happened when mouse was out of window
			if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
				return this._mouseUp(event);

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {
				return this._mouseUp( event );
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if (this._mouseStarted) {
			this._mouseDrag(event);
			return event.preventDefault();
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted =
				(this._mouseStart(this._mouseDownEvent, event) !== false);
			(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
		}

		return !this._mouseStarted;
	},

	_mouseUp: function(event) {
		this.document
			.unbind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.unbind( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if (this._mouseStarted) {
			this._mouseStarted = false;

			if (event.target === this._mouseDownEvent.target) {
				$.data(event.target, this.widgetName + ".preventClickEvent", true);
			}

			this._mouseStop(event);
		}

		mouseHandled = false;
		return false;
	},

	_mouseDistanceMet: function(event) {
		return (Math.max(
				Math.abs(this._mouseDownEvent.pageX - event.pageX),
				Math.abs(this._mouseDownEvent.pageY - event.pageY)
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function(/* event */) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function(/* event */) {},
	_mouseDrag: function(/* event */) {},
	_mouseStop: function(/* event */) {},
	_mouseCapture: function(/* event */) { return true; }
});


/*!
 * jQuery UI Sortable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */


var sortable = $.widget("ui.sortable", $.ui.mouse, {
	version: "1.11.4",
	widgetEventPrefix: "sort",
	ready: false,
	options: {
		appendTo: "parent",
		axis: false,
		connectWith: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		dropOnEmpty: true,
		forcePlaceholderSize: false,
		forceHelperSize: false,
		grid: false,
		handle: false,
		helper: "original",
		items: "> *",
		opacity: false,
		placeholder: false,
		revert: false,
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		scope: "default",
		tolerance: "intersect",
		zIndex: 1000,

		// callbacks
		activate: null,
		beforeStop: null,
		change: null,
		deactivate: null,
		out: null,
		over: null,
		receive: null,
		remove: null,
		sort: null,
		start: null,
		stop: null,
		update: null
	},

	_isOverAxis: function( x, reference, size ) {
		return ( x >= reference ) && ( x < ( reference + size ) );
	},

	_isFloating: function( item ) {
		return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
	},

	_create: function() {
		this.containerCache = {};
		this.element.addClass("ui-sortable");

		//Get the items
		this.refresh();

		//Let's determine the parent's offset
		this.offset = this.element.offset();

		//Initialize mouse events for interaction
		this._mouseInit();

		this._setHandleClassName();

		//We're ready to go
		this.ready = true;

	},

	_setOption: function( key, value ) {
		this._super( key, value );

		if ( key === "handle" ) {
			this._setHandleClassName();
		}
	},

	_setHandleClassName: function() {
		this.element.find( ".ui-sortable-handle" ).removeClass( "ui-sortable-handle" );
		$.each( this.items, function() {
			( this.instance.options.handle ?
				this.item.find( this.instance.options.handle ) : this.item )
				.addClass( "ui-sortable-handle" );
		});
	},

	_destroy: function() {
		this.element
			.removeClass( "ui-sortable ui-sortable-disabled" )
			.find( ".ui-sortable-handle" )
				.removeClass( "ui-sortable-handle" );
		this._mouseDestroy();

		for ( var i = this.items.length - 1; i >= 0; i-- ) {
			this.items[i].item.removeData(this.widgetName + "-item");
		}

		return this;
	},

	_mouseCapture: function(event, overrideHandle) {
		var currentItem = null,
			validHandle = false,
			that = this;

		if (this.reverting) {
			return false;
		}

		if(this.options.disabled || this.options.type === "static") {
			return false;
		}

		//We have to refresh the items data once first
		this._refreshItems(event);

		//Find out if the clicked node (or one of its parents) is a actual item in this.items
		$(event.target).parents().each(function() {
			if($.data(this, that.widgetName + "-item") === that) {
				currentItem = $(this);
				return false;
			}
		});
		if($.data(event.target, that.widgetName + "-item") === that) {
			currentItem = $(event.target);
		}

		if(!currentItem) {
			return false;
		}
		if(this.options.handle && !overrideHandle) {
			$(this.options.handle, currentItem).find("*").addBack().each(function() {
				if(this === event.target) {
					validHandle = true;
				}
			});
			if(!validHandle) {
				return false;
			}
		}

		this.currentItem = currentItem;
		this._removeCurrentsFromItems();
		return true;

	},

	_mouseStart: function(event, overrideHandle, noActivation) {

		var i, body,
			o = this.options;

		this.currentContainer = this;

		//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
		this.refreshPositions();

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		//Cache the helper size
		this._cacheHelperProportions();

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Get the next scrolling parent
		this.scrollParent = this.helper.scrollParent();

		//The element's absolute position on the page minus margins
		this.offset = this.currentItem.offset();
		this.offset = {
			top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		$.extend(this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
		});

		// Only after we got the offset, we can change the helper's position to absolute
		// TODO: Still need to figure out a way to make relative sorting possible
		this.helper.css("position", "absolute");
		this.cssPosition = this.helper.css("position");

		//Generate the original position
		this.originalPosition = this._generatePosition(event);
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Cache the former DOM position
		this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

		//If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
		if(this.helper[0] !== this.currentItem[0]) {
			this.currentItem.hide();
		}

		//Create the placeholder
		this._createPlaceholder();

		//Set a containment if given in the options
		if(o.containment) {
			this._setContainment();
		}

		if( o.cursor && o.cursor !== "auto" ) { // cursor option
			body = this.document.find( "body" );

			// support: IE
			this.storedCursor = body.css( "cursor" );
			body.css( "cursor", o.cursor );

			this.storedStylesheet = $( "<style>*{ cursor: "+o.cursor+" !important; }</style>" ).appendTo( body );
		}

		if(o.opacity) { // opacity option
			if (this.helper.css("opacity")) {
				this._storedOpacity = this.helper.css("opacity");
			}
			this.helper.css("opacity", o.opacity);
		}

		if(o.zIndex) { // zIndex option
			if (this.helper.css("zIndex")) {
				this._storedZIndex = this.helper.css("zIndex");
			}
			this.helper.css("zIndex", o.zIndex);
		}

		//Prepare scrolling
		if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
			this.overflowOffset = this.scrollParent.offset();
		}

		//Call callbacks
		this._trigger("start", event, this._uiHash());

		//Recache the helper size
		if(!this._preserveHelperProportions) {
			this._cacheHelperProportions();
		}


		//Post "activate" events to possible containers
		if( !noActivation ) {
			for ( i = this.containers.length - 1; i >= 0; i-- ) {
				this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
			}
		}

		//Prepare possible droppables
		if($.ui.ddmanager) {
			$.ui.ddmanager.current = this;
		}

		if ($.ui.ddmanager && !o.dropBehaviour) {
			$.ui.ddmanager.prepareOffsets(this, event);
		}

		this.dragging = true;

		this.helper.addClass("ui-sortable-helper");
		this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
		return true;

	},

	_mouseDrag: function(event) {
		var i, item, itemElement, intersection,
			o = this.options,
			scrolled = false;

		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");

		if (!this.lastPositionAbs) {
			this.lastPositionAbs = this.positionAbs;
		}

		//Do scrolling
		if(this.options.scroll) {
			if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {

				if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
				} else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
				}

				if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
				} else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
				}

			} else {

				if(event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
					scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
				} else if(this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
					scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
				}

				if(event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
					scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
				} else if(this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
					scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
				}

			}

			if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(this, event);
			}
		}

		//Regenerate the absolute position used for position checks
		this.positionAbs = this._convertPositionTo("absolute");

		//Set the helper position
		if(!this.options.axis || this.options.axis !== "y") {
			this.helper[0].style.left = this.position.left+"px";
		}
		if(!this.options.axis || this.options.axis !== "x") {
			this.helper[0].style.top = this.position.top+"px";
		}

		//Rearrange
		for (i = this.items.length - 1; i >= 0; i--) {

			//Cache variables and intersection, continue if no intersection
			item = this.items[i];
			itemElement = item.item[0];
			intersection = this._intersectsWithPointer(item);
			if (!intersection) {
				continue;
			}

			// Only put the placeholder inside the current Container, skip all
			// items from other containers. This works because when moving
			// an item from one container to another the
			// currentContainer is switched before the placeholder is moved.
			//
			// Without this, moving items in "sub-sortables" can cause
			// the placeholder to jitter between the outer and inner container.
			if (item.instance !== this.currentContainer) {
				continue;
			}

			// cannot intersect with itself
			// no useless actions that have been done before
			// no action if the item moved is the parent of the item checked
			if (itemElement !== this.currentItem[0] &&
				this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement &&
				!$.contains(this.placeholder[0], itemElement) &&
				(this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)
			) {

				this.direction = intersection === 1 ? "down" : "up";

				if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
					this._rearrange(event, item);
				} else {
					break;
				}

				this._trigger("change", event, this._uiHash());
				break;
			}
		}

		//Post events to containers
		this._contactContainers(event);

		//Interconnect with droppables
		if($.ui.ddmanager) {
			$.ui.ddmanager.drag(this, event);
		}

		//Call callbacks
		this._trigger("sort", event, this._uiHash());

		this.lastPositionAbs = this.positionAbs;
		return false;

	},

	_mouseStop: function(event, noPropagation) {

		if(!event) {
			return;
		}

		//If we are using droppables, inform the manager about the drop
		if ($.ui.ddmanager && !this.options.dropBehaviour) {
			$.ui.ddmanager.drop(this, event);
		}

		if(this.options.revert) {
			var that = this,
				cur = this.placeholder.offset(),
				axis = this.options.axis,
				animation = {};

			if ( !axis || axis === "x" ) {
				animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
			}
			if ( !axis || axis === "y" ) {
				animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
			}
			this.reverting = true;
			$(this.helper).animate( animation, parseInt(this.options.revert, 10) || 500, function() {
				that._clear(event);
			});
		} else {
			this._clear(event, noPropagation);
		}

		return false;

	},

	cancel: function() {

		if(this.dragging) {

			this._mouseUp({ target: null });

			if(this.options.helper === "original") {
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
			} else {
				this.currentItem.show();
			}

			//Post deactivating events to containers
			for (var i = this.containers.length - 1; i >= 0; i--){
				this.containers[i]._trigger("deactivate", null, this._uiHash(this));
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", null, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		if (this.placeholder) {
			//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
			if(this.placeholder[0].parentNode) {
				this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			}
			if(this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
				this.helper.remove();
			}

			$.extend(this, {
				helper: null,
				dragging: false,
				reverting: false,
				_noFinalSort: null
			});

			if(this.domPosition.prev) {
				$(this.domPosition.prev).after(this.currentItem);
			} else {
				$(this.domPosition.parent).prepend(this.currentItem);
			}
		}

		return this;

	},

	serialize: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected),
			str = [];
		o = o || {};

		$(items).each(function() {
			var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
			if (res) {
				str.push((o.key || res[1]+"[]")+"="+(o.key && o.expression ? res[1] : res[2]));
			}
		});

		if(!str.length && o.key) {
			str.push(o.key + "=");
		}

		return str.join("&");

	},

	toArray: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected),
			ret = [];

		o = o || {};

		items.each(function() { ret.push($(o.item || this).attr(o.attribute || "id") || ""); });
		return ret;

	},

	/* Be careful with the following core functions */
	_intersectsWith: function(item) {

		var x1 = this.positionAbs.left,
			x2 = x1 + this.helperProportions.width,
			y1 = this.positionAbs.top,
			y2 = y1 + this.helperProportions.height,
			l = item.left,
			r = l + item.width,
			t = item.top,
			b = t + item.height,
			dyClick = this.offset.click.top,
			dxClick = this.offset.click.left,
			isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t && ( y1 + dyClick ) < b ),
			isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l && ( x1 + dxClick ) < r ),
			isOverElement = isOverElementHeight && isOverElementWidth;

		if ( this.options.tolerance === "pointer" ||
			this.options.forcePointerForContainers ||
			(this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])
		) {
			return isOverElement;
		} else {

			return (l < x1 + (this.helperProportions.width / 2) && // Right Half
				x2 - (this.helperProportions.width / 2) < r && // Left Half
				t < y1 + (this.helperProportions.height / 2) && // Bottom Half
				y2 - (this.helperProportions.height / 2) < b ); // Top Half

		}
	},

	_intersectsWithPointer: function(item) {

		var isOverElementHeight = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
			isOverElementWidth = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
			isOverElement = isOverElementHeight && isOverElementWidth,
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (!isOverElement) {
			return false;
		}

		return this.floating ?
			( ((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1 )
			: ( verticalDirection && (verticalDirection === "down" ? 2 : 1) );

	},

	_intersectsWithSides: function(item) {

		var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
			isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (this.floating && horizontalDirection) {
			return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
		} else {
			return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
		}

	},

	_getDragVerticalDirection: function() {
		var delta = this.positionAbs.top - this.lastPositionAbs.top;
		return delta !== 0 && (delta > 0 ? "down" : "up");
	},

	_getDragHorizontalDirection: function() {
		var delta = this.positionAbs.left - this.lastPositionAbs.left;
		return delta !== 0 && (delta > 0 ? "right" : "left");
	},

	refresh: function(event) {
		this._refreshItems(event);
		this._setHandleClassName();
		this.refreshPositions();
		return this;
	},

	_connectWith: function() {
		var options = this.options;
		return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
	},

	_getItemsAsjQuery: function(connected) {

		var i, j, cur, inst,
			items = [],
			queries = [],
			connectWith = this._connectWith();

		if(connectWith && connected) {
			for (i = connectWith.length - 1; i >= 0; i--){
				cur = $(connectWith[i], this.document[0]);
				for ( j = cur.length - 1; j >= 0; j--){
					inst = $.data(cur[j], this.widgetFullName);
					if(inst && inst !== this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
					}
				}
			}
		}

		queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

		function addItems() {
			items.push( this );
		}
		for (i = queries.length - 1; i >= 0; i--){
			queries[i][0].each( addItems );
		}

		return $(items);

	},

	_removeCurrentsFromItems: function() {

		var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

		this.items = $.grep(this.items, function (item) {
			for (var j=0; j < list.length; j++) {
				if(list[j] === item.item[0]) {
					return false;
				}
			}
			return true;
		});

	},

	_refreshItems: function(event) {

		this.items = [];
		this.containers = [this];

		var i, j, cur, inst, targetData, _queries, item, queriesLength,
			items = this.items,
			queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]],
			connectWith = this._connectWith();

		if(connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
			for (i = connectWith.length - 1; i >= 0; i--){
				cur = $(connectWith[i], this.document[0]);
				for (j = cur.length - 1; j >= 0; j--){
					inst = $.data(cur[j], this.widgetFullName);
					if(inst && inst !== this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
						this.containers.push(inst);
					}
				}
			}
		}

		for (i = queries.length - 1; i >= 0; i--) {
			targetData = queries[i][1];
			_queries = queries[i][0];

			for (j=0, queriesLength = _queries.length; j < queriesLength; j++) {
				item = $(_queries[j]);

				item.data(this.widgetName + "-item", targetData); // Data for target checking (mouse manager)

				items.push({
					item: item,
					instance: targetData,
					width: 0, height: 0,
					left: 0, top: 0
				});
			}
		}

	},

	refreshPositions: function(fast) {

		// Determine whether items are being displayed horizontally
		this.floating = this.items.length ?
			this.options.axis === "x" || this._isFloating( this.items[ 0 ].item ) :
			false;

		//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
		if(this.offsetParent && this.helper) {
			this.offset.parent = this._getParentOffset();
		}

		var i, item, t, p;

		for (i = this.items.length - 1; i >= 0; i--){
			item = this.items[i];

			//We ignore calculating positions of all connected containers when we're not over them
			if(item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
				continue;
			}

			t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

			if (!fast) {
				item.width = t.outerWidth();
				item.height = t.outerHeight();
			}

			p = t.offset();
			item.left = p.left;
			item.top = p.top;
		}

		if(this.options.custom && this.options.custom.refreshContainers) {
			this.options.custom.refreshContainers.call(this);
		} else {
			for (i = this.containers.length - 1; i >= 0; i--){
				p = this.containers[i].element.offset();
				this.containers[i].containerCache.left = p.left;
				this.containers[i].containerCache.top = p.top;
				this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
				this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			}
		}

		return this;
	},

	_createPlaceholder: function(that) {
		that = that || this;
		var className,
			o = that.options;

		if(!o.placeholder || o.placeholder.constructor === String) {
			className = o.placeholder;
			o.placeholder = {
				element: function() {

					var nodeName = that.currentItem[0].nodeName.toLowerCase(),
						element = $( "<" + nodeName + ">", that.document[0] )
							.addClass(className || that.currentItem[0].className+" ui-sortable-placeholder")
							.removeClass("ui-sortable-helper");

					if ( nodeName === "tbody" ) {
						that._createTrPlaceholder(
							that.currentItem.find( "tr" ).eq( 0 ),
							$( "<tr>", that.document[ 0 ] ).appendTo( element )
						);
					} else if ( nodeName === "tr" ) {
						that._createTrPlaceholder( that.currentItem, element );
					} else if ( nodeName === "img" ) {
						element.attr( "src", that.currentItem.attr( "src" ) );
					}

					if ( !className ) {
						element.css( "visibility", "hidden" );
					}

					return element;
				},
				update: function(container, p) {

					// 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
					// 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
					if(className && !o.forcePlaceholderSize) {
						return;
					}

					//If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
					if(!p.height()) { p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop")||0, 10) - parseInt(that.currentItem.css("paddingBottom")||0, 10)); }
					if(!p.width()) { p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft")||0, 10) - parseInt(that.currentItem.css("paddingRight")||0, 10)); }
				}
			};
		}

		//Create the placeholder
		that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

		//Append it after the actual current item
		that.currentItem.after(that.placeholder);

		//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
		o.placeholder.update(that, that.placeholder);

	},

	_createTrPlaceholder: function( sourceTr, targetTr ) {
		var that = this;

		sourceTr.children().each(function() {
			$( "<td>&#160;</td>", that.document[ 0 ] )
				.attr( "colspan", $( this ).attr( "colspan" ) || 1 )
				.appendTo( targetTr );
		});
	},

	_contactContainers: function(event) {
		var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis,
			innermostContainer = null,
			innermostIndex = null;

		// get innermost container that intersects with item
		for (i = this.containers.length - 1; i >= 0; i--) {

			// never consider a container that's located within the item itself
			if($.contains(this.currentItem[0], this.containers[i].element[0])) {
				continue;
			}

			if(this._intersectsWith(this.containers[i].containerCache)) {

				// if we've already found a container and it's more "inner" than this, then continue
				if(innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
					continue;
				}

				innermostContainer = this.containers[i];
				innermostIndex = i;

			} else {
				// container doesn't intersect. trigger "out" event if necessary
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", event, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		// if no intersecting containers found, return
		if(!innermostContainer) {
			return;
		}

		// move the item into the container if it's not there already
		if(this.containers.length === 1) {
			if (!this.containers[innermostIndex].containerCache.over) {
				this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
				this.containers[innermostIndex].containerCache.over = 1;
			}
		} else {

			//When entering a new container, we will find the item with the least distance and append our item near it
			dist = 10000;
			itemWithLeastDistance = null;
			floating = innermostContainer.floating || this._isFloating(this.currentItem);
			posProperty = floating ? "left" : "top";
			sizeProperty = floating ? "width" : "height";
			axis = floating ? "clientX" : "clientY";

			for (j = this.items.length - 1; j >= 0; j--) {
				if(!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
					continue;
				}
				if(this.items[j].item[0] === this.currentItem[0]) {
					continue;
				}

				cur = this.items[j].item.offset()[posProperty];
				nearBottom = false;
				if ( event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2 ) {
					nearBottom = true;
				}

				if ( Math.abs( event[ axis ] - cur ) < dist ) {
					dist = Math.abs( event[ axis ] - cur );
					itemWithLeastDistance = this.items[ j ];
					this.direction = nearBottom ? "up": "down";
				}
			}

			//Check if dropOnEmpty is enabled
			if(!itemWithLeastDistance && !this.options.dropOnEmpty) {
				return;
			}

			if(this.currentContainer === this.containers[innermostIndex]) {
				if ( !this.currentContainer.containerCache.over ) {
					this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash() );
					this.currentContainer.containerCache.over = 1;
				}
				return;
			}

			itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
			this._trigger("change", event, this._uiHash());
			this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
			this.currentContainer = this.containers[innermostIndex];

			//Update the placeholder
			this.options.placeholder.update(this.currentContainer, this.placeholder);

			this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
			this.containers[innermostIndex].containerCache.over = 1;
		}


	},

	_createHelper: function(event) {

		var o = this.options,
			helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

		//Add the helper to the DOM if that didn't happen already
		if(!helper.parents("body").length) {
			$(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
		}

		if(helper[0] === this.currentItem[0]) {
			this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };
		}

		if(!helper[0].style.width || o.forceHelperSize) {
			helper.width(this.currentItem.width());
		}
		if(!helper[0].style.height || o.forceHelperSize) {
			helper.height(this.currentItem.height());
		}

		return helper;

	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj === "string") {
			obj = obj.split(" ");
		}
		if ($.isArray(obj)) {
			obj = {left: +obj[0], top: +obj[1] || 0};
		}
		if ("left" in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ("right" in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ("top" in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ("bottom" in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {


		//Get the offsetParent and cache its position
		this.offsetParent = this.helper.offsetParent();
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if(this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		// This needs to be actually done for all browsers, since pageX/pageY includes this information
		// with an ugly IE fix
		if( this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
		};

	},

	_getRelativeOffset: function() {

		if(this.cssPosition === "relative") {
			var p = this.currentItem.position();
			return {
				top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
				left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
			top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var ce, co, over,
			o = this.options;
		if(o.containment === "parent") {
			o.containment = this.helper[0].parentNode;
		}
		if(o.containment === "document" || o.containment === "window") {
			this.containment = [
				0 - this.offset.relative.left - this.offset.parent.left,
				0 - this.offset.relative.top - this.offset.parent.top,
				o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
				(o.containment === "document" ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
			];
		}

		if(!(/^(document|window|parent)$/).test(o.containment)) {
			ce = $(o.containment)[0];
			co = $(o.containment).offset();
			over = ($(ce).css("overflow") !== "hidden");

			this.containment = [
				co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
				co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
				co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
				co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
			];
		}

	},

	_convertPositionTo: function(d, pos) {

		if(!pos) {
			pos = this.position;
		}
		var mod = d === "absolute" ? 1 : -1,
			scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
			scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		return {
			top: (
				pos.top	+																// The absolute mouse position
				this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top * mod -											// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
			),
			left: (
				pos.left +																// The absolute mouse position
				this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
			)
		};

	},

	_generatePosition: function(event) {

		var top, left,
			o = this.options,
			pageX = event.pageX,
			pageY = event.pageY,
			scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		// This is another very weird special case that only happens for relative elements:
		// 1. If the css position is relative
		// 2. and the scroll parent is the document or similar to the offset parent
		// we have to refresh the relative offset during the scroll so there are no jumps
		if(this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
			this.offset.relative = this._getRelativeOffset();
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		if(this.originalPosition) { //If we are not dragging yet, we won't check for options

			if(this.containment) {
				if(event.pageX - this.offset.click.left < this.containment[0]) {
					pageX = this.containment[0] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top < this.containment[1]) {
					pageY = this.containment[1] + this.offset.click.top;
				}
				if(event.pageX - this.offset.click.left > this.containment[2]) {
					pageX = this.containment[2] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top > this.containment[3]) {
					pageY = this.containment[3] + this.offset.click.top;
				}
			}

			if(o.grid) {
				top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
				pageY = this.containment ? ( (top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
				pageX = this.containment ? ( (left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

		}

		return {
			top: (
				pageY -																// The absolute mouse position
				this.offset.click.top -													// Click offset (relative to the element)
				this.offset.relative.top	-											// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
			),
			left: (
				pageX -																// The absolute mouse position
				this.offset.click.left -												// Click offset (relative to the element)
				this.offset.relative.left	-											// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
			)
		};

	},

	_rearrange: function(event, i, a, hardRefresh) {

		a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

		//Various things done here to improve the performance:
		// 1. we create a setTimeout, that calls refreshPositions
		// 2. on the instance, we have a counter variable, that get's higher after every append
		// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
		// 4. this lets only the last addition to the timeout stack through
		this.counter = this.counter ? ++this.counter : 1;
		var counter = this.counter;

		this._delay(function() {
			if(counter === this.counter) {
				this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
			}
		});

	},

	_clear: function(event, noPropagation) {

		this.reverting = false;
		// We delay all events that have to be triggered to after the point where the placeholder has been removed and
		// everything else normalized again
		var i,
			delayedTriggers = [];

		// We first have to update the dom position of the actual currentItem
		// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
		if(!this._noFinalSort && this.currentItem.parent().length) {
			this.placeholder.before(this.currentItem);
		}
		this._noFinalSort = null;

		if(this.helper[0] === this.currentItem[0]) {
			for(i in this._storedCSS) {
				if(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
					this._storedCSS[i] = "";
				}
			}
			this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
		} else {
			this.currentItem.show();
		}

		if(this.fromOutside && !noPropagation) {
			delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
		}
		if((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
			delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed
		}

		// Check if the items Container has Changed and trigger appropriate
		// events.
		if (this !== this.currentContainer) {
			if(!noPropagation) {
				delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
				delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.currentContainer));
				delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.currentContainer));
			}
		}


		//Post events to containers
		function delayEvent( type, instance, container ) {
			return function( event ) {
				container._trigger( type, event, instance._uiHash( instance ) );
			};
		}
		for (i = this.containers.length - 1; i >= 0; i--){
			if (!noPropagation) {
				delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
			}
			if(this.containers[i].containerCache.over) {
				delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
				this.containers[i].containerCache.over = 0;
			}
		}

		//Do what was originally in plugins
		if ( this.storedCursor ) {
			this.document.find( "body" ).css( "cursor", this.storedCursor );
			this.storedStylesheet.remove();
		}
		if(this._storedOpacity) {
			this.helper.css("opacity", this._storedOpacity);
		}
		if(this._storedZIndex) {
			this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
		}

		this.dragging = false;

		if(!noPropagation) {
			this._trigger("beforeStop", event, this._uiHash());
		}

		//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
		this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

		if ( !this.cancelHelperRemoval ) {
			if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
				this.helper.remove();
			}
			this.helper = null;
		}

		if(!noPropagation) {
			for (i=0; i < delayedTriggers.length; i++) {
				delayedTriggers[i].call(this, event);
			} //Trigger all delayed events
			this._trigger("stop", event, this._uiHash());
		}

		this.fromOutside = false;
		return !this.cancelHelperRemoval;

	},

	_trigger: function() {
		if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
			this.cancel();
		}
	},

	_uiHash: function(_inst) {
		var inst = _inst || this;
		return {
			helper: inst.helper,
			placeholder: inst.placeholder || $([]),
			position: inst.position,
			originalPosition: inst.originalPosition,
			offset: inst.positionAbs,
			item: inst.currentItem,
			sender: _inst ? _inst.element : null
		};
	}

});



}));
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);
/**
 * Trumbowyg v2.25.1 - A lightweight WYSIWYG editor
 * Trumbowyg core file
 * ------------------------
 * @link http://alex-d.github.io/Trumbowyg
 * @license MIT
 * @author Alexandre Demode (Alex-D)
 *         Twitter : @AlexandreDemode
 *         Website : alex-d.fr
 */

jQuery.trumbowyg = {
    langs: {
        en: {
            viewHTML: 'View HTML',

            undo: 'Undo',
            redo: 'Redo',

            formatting: 'Formatting',
            p: 'Paragraph',
            blockquote: 'Quote',
            code: 'Code',
            header: 'Header',

            bold: 'Bold',
            italic: 'Italic',
            strikethrough: 'Strikethrough',
            underline: 'Underline',

            strong: 'Strong',
            em: 'Emphasis',
            del: 'Deleted',

            superscript: 'Superscript',
            subscript: 'Subscript',

            unorderedList: 'Unordered list',
            orderedList: 'Ordered list',

            insertImage: 'Insert Image',
            link: 'Link',
            createLink: 'Insert link',
            unlink: 'Remove link',

            justifyLeft: 'Align Left',
            justifyCenter: 'Align Center',
            justifyRight: 'Align Right',
            justifyFull: 'Align Justify',

            horizontalRule: 'Insert horizontal rule',
            removeformat: 'Remove format',

            fullscreen: 'Fullscreen',

            close: 'Close',

            submit: 'Confirm',
            reset: 'Cancel',

            required: 'Required',
            description: 'Description',
            title: 'Title',
            text: 'Text',
            target: 'Target',
            width: 'Width'
        }
    },

    // Plugins
    plugins: {},

    // SVG Path globally
    svgPath: null,
    svgAbsoluteUseHref: false,

    hideButtonTexts: null
};

// Makes default options read-only
Object.defineProperty(jQuery.trumbowyg, 'defaultOptions', {
    value: {
        lang: 'en',

        fixedBtnPane: false,
        fixedFullWidth: false,
        autogrow: false,
        autogrowOnEnter: false,
        imageWidthModalEdit: false,
        hideButtonTexts: null,

        prefix: 'trumbowyg-',
        tagClasses: {},
        semantic: true,
        semanticKeepAttributes: false,
        resetCss: false,
        removeformatPasted: false,
        tabToIndent: false,
        tagsToRemove: [],
        tagsToKeep: ['hr', 'img', 'embed', 'iframe', 'input'],
        btns: [
            ['viewHTML'],
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['superscript', 'subscript'],
            ['link'],
            ['insertImage'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat'],
            ['fullscreen']
        ],
        // For custom button definitions
        btnsDef: {},
        changeActiveDropdownIcon: false,

        inlineElementsSelector: 'a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u',

        pasteHandlers: [],

        // imgDblClickHandler: default is defined in constructor

        plugins: {},

        urlProtocol: false,
        minimalLinks: false,
        defaultLinkTarget: undefined,

        svgPath: null
    },
    writable: false,
    enumerable: true,
    configurable: false
});

(function (navigator, window, document, $) {
    'use strict';

    var CONFIRM_EVENT = 'tbwconfirm',
        CANCEL_EVENT = 'tbwcancel';

    $.fn.trumbowyg = function (options, params) {
        var trumbowygDataName = 'trumbowyg';
        if (options === Object(options) || !options) {
            return this.each(function () {
                if (!$(this).data(trumbowygDataName)) {
                    $(this).data(trumbowygDataName, new Trumbowyg(this, options));
                }
            });
        }
        if (this.length === 1) {
            try {
                var t = $(this).data(trumbowygDataName);
                switch (options) {
                    // Exec command
                    case 'execCmd':
                        return t.execCmd(params.cmd, params.param, params.forceCss, params.skipTrumbowyg);

                    // Modal box
                    case 'openModal':
                        return t.openModal(params.title, params.content);
                    case 'closeModal':
                        return t.closeModal();
                    case 'openModalInsert':
                        return t.openModalInsert(params.title, params.fields, params.callback);

                    // Range
                    case 'saveRange':
                        return t.saveRange();
                    case 'getRange':
                        return t.range;
                    case 'getRangeText':
                        return t.getRangeText();
                    case 'restoreRange':
                        return t.restoreRange();

                    // Enable/disable
                    case 'enable':
                        return t.setDisabled(false);
                    case 'disable':
                        return t.setDisabled(true);

                    // Toggle
                    case 'toggle':
                        return t.toggle();

                    // Destroy
                    case 'destroy':
                        return t.destroy();

                    // Empty
                    case 'empty':
                        return t.empty();

                    // HTML
                    case 'html':
                        return t.html(params);
                }
            } catch (c) {
            }
        }

        return false;
    };

    // @param: editorElem is the DOM element
    var Trumbowyg = function (editorElem, options) {
        var t = this,
            trumbowygIconsId = 'trumbowyg-icons',
            $trumbowyg = $.trumbowyg;

        // Get the document of the element. It use to makes the plugin
        // compatible on iframes.
        t.doc = editorElem.ownerDocument || document;

        // jQuery object of the editor
        t.$ta = $(editorElem); // $ta : Textarea
        t.$c = $(editorElem); // $c : creator

        options = options || {};

        // Localization management
        if (options.lang != null || $trumbowyg.langs[options.lang] != null) {
            t.lang = $.extend(true, {}, $trumbowyg.langs.en, $trumbowyg.langs[options.lang]);
        } else {
            t.lang = $trumbowyg.langs.en;
        }

        t.hideButtonTexts = $trumbowyg.hideButtonTexts != null ? $trumbowyg.hideButtonTexts : options.hideButtonTexts;

        // SVG path
        var svgPathOption = $trumbowyg.svgPath != null ? $trumbowyg.svgPath : options.svgPath;
        t.hasSvg = svgPathOption !== false;

        if (svgPathOption !== false && ($trumbowyg.svgAbsoluteUseHref || $('#' + trumbowygIconsId, t.doc).length === 0)) {
            if (svgPathOption == null) {
                // Hack to get svgPathOption based on trumbowyg.js path
                var $scriptElements = $('script[src]');
                $scriptElements.each(function (i, scriptElement) {
                    var source = scriptElement.src;
                    var matches = source.match('trumbowyg(\.min)?\.js');
                    if (matches != null) {
                        svgPathOption = source.substring(0, source.indexOf(matches[0])) + 'ui/icons.svg';
                    }
                });
            }

            // Do not merge with previous if block: svgPathOption can be redefined in it.
            // Here we are checking that we find a match
            if (svgPathOption == null) {
                console.warn('You must define svgPath: https://goo.gl/CfTY9U'); // jshint ignore:line
            } else if (!$trumbowyg.svgAbsoluteUseHref) {
                var div = t.doc.createElement('div');
                div.id = trumbowygIconsId;
                t.doc.body.insertBefore(div, t.doc.body.childNodes[0]);
                $.ajax({
                    async: true,
                    type: 'GET',
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    dataType: 'xml',
                    crossDomain: true,
                    url: svgPathOption,
                    data: null,
                    beforeSend: null,
                    complete: null,
                    success: function (data) {
                        div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
                    }
                });
            }
        }

        var baseHref = !!t.doc.querySelector('base') ? window.location.href.split(/[?#]/)[0] : '';
        t.svgPath = $trumbowyg.svgAbsoluteUseHref ? svgPathOption : baseHref;


        /**
         * When the button is associated to a empty object
         * fn and title attributes are defined from the button key value
         *
         * For example
         *      foo: {}
         * is equivalent to :
         *      foo: {
         *          fn: 'foo',
         *          title: this.lang.foo
         *      }
         */
        var h = t.lang.header, // Header translation
            isBlinkFunction = function () {
                return (window.chrome || (window.Intl && Intl.v8BreakIterator)) && 'CSS' in window;
            };
        t.btnsDef = {
            viewHTML: {
                fn: 'toggle',
                class: 'trumbowyg-not-disable',
            },

            undo: {
                isSupported: isBlinkFunction,
                key: 'Z'
            },
            redo: {
                isSupported: isBlinkFunction,
                key: 'Y'
            },

            p: {
                fn: 'formatBlock'
            },
            blockquote: {
                fn: 'formatBlock'
            },
            h1: {
                fn: 'formatBlock',
                title: h + ' 1'
            },
            h2: {
                fn: 'formatBlock',
                title: h + ' 2'
            },
            h3: {
                fn: 'formatBlock',
                title: h + ' 3'
            },
            h4: {
                fn: 'formatBlock',
                title: h + ' 4'
            },
            h5: {
                fn: 'formatBlock',
                title: h + ' 5'
            },
            h6: {
                fn: 'formatBlock',
                title: h + ' 6'
            },
            subscript: {
                tag: 'sub'
            },
            superscript: {
                tag: 'sup'
            },

            bold: {
                key: 'B',
                tag: 'b'
            },
            italic: {
                key: 'I',
                tag: 'i'
            },
            underline: {
                tag: 'u'
            },
            strikethrough: {
                tag: 'strike'
            },

            strong: {
                fn: 'bold',
                key: 'B'
            },
            em: {
                fn: 'italic',
                key: 'I'
            },
            del: {
                fn: 'strikethrough'
            },

            createLink: {
                key: 'K',
                tag: 'a'
            },
            unlink: {},

            insertImage: {},

            justifyLeft: {
                tag: 'left',
                forceCss: true
            },
            justifyCenter: {
                tag: 'center',
                forceCss: true
            },
            justifyRight: {
                tag: 'right',
                forceCss: true
            },
            justifyFull: {
                tag: 'justify',
                forceCss: true
            },

            unorderedList: {
                fn: 'insertUnorderedList',
                tag: 'ul'
            },
            orderedList: {
                fn: 'insertOrderedList',
                tag: 'ol'
            },

            horizontalRule: {
                fn: 'insertHorizontalRule'
            },

            removeformat: {},

            fullscreen: {
                class: 'trumbowyg-not-disable'
            },
            close: {
                fn: 'destroy',
                class: 'trumbowyg-not-disable'
            },

            // Dropdowns
            formatting: {
                dropdown: ['p', 'blockquote', 'h1', 'h2', 'h3', 'h4'],
                ico: 'p'
            },
            link: {
                dropdown: ['createLink', 'unlink']
            }
        };

        // Default Options
        t.o = $.extend(true, {}, $trumbowyg.defaultOptions, options);
        if (!t.o.hasOwnProperty('imgDblClickHandler')) {
            t.o.imgDblClickHandler = t.getDefaultImgDblClickHandler();
        }

        t.urlPrefix = t.setupUrlPrefix();

        t.disabled = t.o.disabled || (editorElem.nodeName === 'TEXTAREA' && editorElem.disabled);

        if (options.btns) {
            t.o.btns = options.btns;
        } else if (!t.o.semantic) {
            t.o.btns[3] = ['bold', 'italic', 'underline', 'strikethrough'];
        }

        $.each(t.o.btnsDef, function (btnName, btnDef) {
            t.addBtnDef(btnName, btnDef);
        });

        // put this here in the event it would be merged in with options
        t.eventNamespace = 'trumbowyg-event';

        // Keyboard shortcuts are load in this array
        t.keys = [];

        // Tag to button dynamically hydrated
        t.tagToButton = {};
        t.tagHandlers = [];

        // Admit multiple paste handlers
        t.pasteHandlers = [].concat(t.o.pasteHandlers);

        // Check if browser is IE
        t.isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') !== -1;

        // Check if we are on macOs
        t.isMac = navigator.platform.toUpperCase().indexOf('MAC') !== -1;

        t.init();
    };

    Trumbowyg.prototype = {
        DEFAULT_SEMANTIC_MAP: {
            'b': 'strong',
            'i': 'em',
            's': 'del',
            'strike': 'del',
            'div': 'p'
        },

        init: function () {
            var t = this;
            t.height = t.$ta.height();

            t.initPlugins();

            try {
                // Disable image resize, try-catch for old IE
                t.doc.execCommand('enableObjectResizing', false, false);
                t.doc.execCommand('defaultParagraphSeparator', false, 'p');
            } catch (e) {
            }

            t.buildEditor();
            t.buildBtnPane();

            t.fixedBtnPaneEvents();

            t.buildOverlay();

            setTimeout(function () {
                if (t.disabled) {
                    t.setDisabled(true);
                }
                t.$c.trigger('tbwinit');
            });
        },

        addBtnDef: function (btnName, btnDef) {
            this.btnsDef[btnName] = $.extend(btnDef, this.btnsDef[btnName] || {});
        },

        setupUrlPrefix: function () {
            var protocol = this.o.urlProtocol;
            if (!protocol) {
                return;
            }

            if (typeof (protocol) !== 'string') {
                return 'https://';
            }
            return protocol.replace('://', '') + '://';
        },

        buildEditor: function () {
            var t = this,
                prefix = t.o.prefix,
                html = '';

            t.$box = $('<div/>', {
                class: prefix + 'box ' + prefix + 'editor-visible ' + prefix + t.o.lang + ' trumbowyg'
            });

            // $ta = Textarea
            // $ed = Editor
            t.isTextarea = t.$ta.is('textarea');
            if (t.isTextarea) {
                html = t.$ta.val();
                t.$ed = $('<div/>');
                t.$box
                    .insertAfter(t.$ta)
                    .append(t.$ed, t.$ta);
            } else {
                t.$ed = t.$ta;
                html = t.$ed.html();

                t.$ta = $('<textarea/>', {
                    name: t.$ta.attr('id'),
                    height: t.height
                }).val(html);

                t.$box
                    .insertAfter(t.$ed)
                    .append(t.$ta, t.$ed);
                t.syncCode();
            }

            t.$ta
                .addClass(prefix + 'textarea')
                .attr('tabindex', -1)
            ;

            t.$ed
                .addClass(prefix + 'editor')
                .attr({
                    contenteditable: true,
                    dir: t.lang._dir || 'ltr'
                })
                .html(html)
            ;

            if (t.o.tabindex) {
                t.$ed.attr('tabindex', t.o.tabindex);
            }

            if (t.$c.is('[placeholder]')) {
                t.$ed.attr('placeholder', t.$c.attr('placeholder'));
            }

            if (t.$c.is('[spellcheck]')) {
                t.$ed.attr('spellcheck', t.$c.attr('spellcheck'));
            }

            if (t.o.resetCss) {
                t.$ed.addClass(prefix + 'reset-css');
            }

            if (!t.o.autogrow) {
                t.$ta.add(t.$ed).css({
                    height: t.height
                });
            }

            t.semanticCode();

            if (t.o.autogrowOnEnter) {
                t.$ed.addClass(prefix + 'autogrow-on-enter');
            }

            var ctrl = false,
                composition = false,
                debounceButtonPaneStatus;

            t.$ed
                .on('dblclick', 'img', t.o.imgDblClickHandler)
                .on('keydown', function (e) {
                    // append flags to differentiate Chrome spans
                    var keyCode = e.which;
                    if (keyCode === 8 || keyCode === 13 || keyCode === 46) {
                        t.toggleSpan(true);
                    }
                    if ((e.ctrlKey || e.metaKey) && !e.altKey) {
                        ctrl = true;
                        var key = t.keys[String.fromCharCode(e.which).toUpperCase()];

                        try {
                            t.execCmd(key.fn, key.param);
                            return false;
                        } catch (c) {
                        }
                    } else {
                        if (t.o.tabToIndent && e.key === 'Tab') {
                            try {
                                if (e.shiftKey) {
                                    t.execCmd('outdent', true, null);
                                } else {
                                    t.execCmd('indent', true, null);
                                }
                                return false;
                            } catch (c) {
                            }
                        }
                    }
                })
                .on('compositionstart compositionupdate', function () {
                    composition = true;
                })
                .on('keyup compositionend', function (e) {
                    if (e.type === 'compositionend') {
                        composition = false;
                    } else if (composition) {
                        return;
                    }

                    var keyCode = e.which;

                    if (keyCode >= 37 && keyCode <= 40) {
                        return;
                    }

                    // remove Chrome generated span tags
                    if (keyCode === 8 || keyCode === 13 || keyCode === 46) {
                        t.toggleSpan();
                    }

                    if ((e.ctrlKey || e.metaKey) && (keyCode === 89 || keyCode === 90)) {
                        t.semanticCode(false, true);
                        t.$c.trigger('tbwchange');
                    } else if (!ctrl && keyCode !== 17) {
                        var compositionEndIE = t.isIE ? e.type === 'compositionend' : true;
                        t.semanticCode(false, compositionEndIE && keyCode === 13);
                        t.$c.trigger('tbwchange');
                    } else if (typeof e.which === 'undefined') {
                        t.semanticCode(false, false, true);
                    }

                    setTimeout(function () {
                        ctrl = false;
                    }, 50);
                })
                .on('mouseup keydown keyup', function (e) {
                    if ((!e.ctrlKey && !e.metaKey) || e.altKey) {
                        setTimeout(function () { // "hold on" to the ctrl key for 50ms
                            ctrl = false;
                        }, 50);
                    }
                    clearTimeout(debounceButtonPaneStatus);
                    debounceButtonPaneStatus = setTimeout(function () {
                        t.updateButtonPaneStatus();
                    }, 50);
                })
                .on('focus blur', function (e) {
                    if (e.type === 'blur') {
                        t.clearButtonPaneStatus();
                    }
                    t.$c.trigger('tbw' + e.type);
                    if (t.o.autogrowOnEnter) {
                        if (t.autogrowOnEnterDontClose) {
                            return;
                        }
                        if (e.type === 'focus') {
                            t.autogrowOnEnterWasFocused = true;
                            t.autogrowEditorOnEnter();
                        } else if (!t.o.autogrow) {
                            t.$ed.css({height: t.$ed.css('min-height')});
                            t.$c.trigger('tbwresize');
                        }
                    }
                })
                .on('keyup focus', function () {
                  if (!t.$ta.val().match(/<.*>/) && !t.$ed.html().match(/<.*>/)) {
                        setTimeout(function () {
                            var block = t.isIE ? '<p>' : 'p';
                            t.doc.execCommand('formatBlock', false, block);
                            t.syncCode();
                        }, 0);
                    }
                })
                .on('cut drop', function () {
                    setTimeout(function () {
                        t.semanticCode(false, true);
                        t.$c.trigger('tbwchange');
                    }, 0);
                })
                .on('paste', function (e) {
                    if (t.o.removeformatPasted) {
                        e.preventDefault();

                        if (window.getSelection && window.getSelection().deleteFromDocument) {
                            window.getSelection().deleteFromDocument();
                        }

                        try {
                            // IE
                            var text = window.clipboardData.getData('Text');

                            try {
                                // <= IE10
                                t.doc.selection.createRange().pasteHTML(text);
                            } catch (c) {
                                // IE 11
                                t.doc.getSelection().getRangeAt(0).insertNode(t.doc.createTextNode(text));
                            }
                            t.$c.trigger('tbwchange', e);
                        } catch (d) {
                            // Not IE
                            t.execCmd('insertText', (e.originalEvent || e).clipboardData.getData('text/plain'));
                        }
                    }

                    // Call pasteHandlers
                    $.each(t.pasteHandlers, function (i, pasteHandler) {
                        pasteHandler(e);
                    });

                    setTimeout(function () {
                        t.semanticCode(false, true);
                        t.$c.trigger('tbwpaste', e);
                        t.$c.trigger('tbwchange');
                    }, 0);
                });

            t.$ta
                .on('keyup', function () {
                    t.$c.trigger('tbwchange');
                })
                .on('paste', function () {
                    setTimeout(function () {
                        t.$c.trigger('tbwchange');
                    }, 0);
                });

            $(t.doc.body).on('keydown.' + t.eventNamespace, function (e) {
                if (e.which === 27 && $('.' + prefix + 'modal-box').length >= 1) {
                    t.closeModal();
                    return false;
                }
            });
        },

        //autogrow when entering logic
        autogrowEditorOnEnter: function () {
            var t = this;
            t.$ed.removeClass('autogrow-on-enter');
            var oldHeight = t.$ed[0].clientHeight;
            t.$ed.height('auto');
            var totalHeight = t.$ed[0].scrollHeight;
            t.$ed.addClass('autogrow-on-enter');
            if (oldHeight !== totalHeight) {
                t.$ed.height(oldHeight);
                setTimeout(function () {
                    t.$ed.css({height: totalHeight});
                    t.$c.trigger('tbwresize');
                }, 0);
            }
        },


        // Build button pane, use o.btns option
        buildBtnPane: function () {
            var t = this,
                prefix = t.o.prefix;

            var $btnPane = t.$btnPane = $('<div/>', {
                class: prefix + 'button-pane'
            });

            $.each(t.o.btns, function (i, btnGrp) {
                if (!$.isArray(btnGrp)) {
                    btnGrp = [btnGrp];
                }

                var $btnGroup = $('<div/>', {
                    class: prefix + 'button-group ' + ((btnGrp.indexOf('fullscreen') >= 0) ? prefix + 'right' : '')
                });
                $.each(btnGrp, function (i, btn) {
                    try { // Prevent buildBtn error
                        if (t.isSupportedBtn(btn)) { // It's a supported button
                            $btnGroup.append(t.buildBtn(btn));
                        }
                    } catch (c) {
                    }
                });

                if ($btnGroup.html().trim().length > 0) {
                    $btnPane.append($btnGroup);
                }
            });

            t.$box.prepend($btnPane);
        },


        // Build a button and his action
        buildBtn: function (btnName) { // btnName is name of the button
            var t = this,
                prefix = t.o.prefix,
                btn = t.btnsDef[btnName],
                isDropdown = btn.dropdown,
                hasIcon = btn.hasIcon != null ? btn.hasIcon : true,
                textDef = t.lang[btnName] || btnName,

                $btn = $('<button/>', {
                    type: 'button',
                    class: prefix + btnName + '-button ' + (btn.class || '') + (!hasIcon ? ' ' + prefix + 'textual-button' : ''),
                    html: t.hasSvg && hasIcon ?
                        '<svg><use xlink:href="' + t.svgPath + '#' + prefix + (btn.ico || btnName).replace(/([A-Z]+)/g, '-$1').toLowerCase() + '"/></svg>' :
                        t.hideButtonTexts ? '' : (btn.text || btn.title || t.lang[btnName] || btnName),
                    title: (btn.title || btn.text || textDef) + (btn.key ? ' (' + (t.isMac ? 'Cmd' : 'Ctrl') + ' + ' + btn.key + ')' : ''),
                    tabindex: -1,
                    mousedown: function () {
                        if (!isDropdown || $('.' + btnName + '-' + prefix + 'dropdown', t.$box).is(':hidden')) {
                            $('body', t.doc).trigger('mousedown');
                        }

                        if ((t.$btnPane.hasClass(prefix + 'disable') || t.$box.hasClass(prefix + 'disabled')) &&
                            !$(this).hasClass(prefix + 'active') &&
                            !$(this).hasClass(prefix + 'not-disable')) {
                            return false;
                        }

                        t.execCmd((isDropdown ? 'dropdown' : false) || btn.fn || btnName, btn.param || btnName, btn.forceCss);

                        return false;
                    }
                });

            if (isDropdown) {
                $btn.addClass(prefix + 'open-dropdown');
                var dropdownPrefix = prefix + 'dropdown',
                    dropdownOptions = { // the dropdown
                        class: dropdownPrefix + '-' + btnName + ' ' + dropdownPrefix + ' ' + prefix + 'fixed-top ' + (btn.dropdownClass || '')
                    };
                dropdownOptions['data-' + dropdownPrefix] = btnName;
                var $dropdown = $('<div/>', dropdownOptions);
                $.each(isDropdown, function (i, def) {
                    if (t.btnsDef[def] && t.isSupportedBtn(def)) {
                        $dropdown.append(t.buildSubBtn(def));
                    }
                });
                t.$box.append($dropdown.hide());
            } else if (btn.key) {
                t.keys[btn.key] = {
                    fn: btn.fn || btnName,
                    param: btn.param || btnName
                };
            }

            if (!isDropdown) {
                t.tagToButton[(btn.tag || btnName).toLowerCase()] = btnName;
            }

            return $btn;
        },
        // Build a button for dropdown menu
        // @param n : name of the subbutton
        buildSubBtn: function (btnName) {
            var t = this,
                prefix = t.o.prefix,
                btn = t.btnsDef[btnName],
                hasIcon = btn.hasIcon != null ? btn.hasIcon : true;

            if (btn.key) {
                t.keys[btn.key] = {
                    fn: btn.fn || btnName,
                    param: btn.param || btnName
                };
            }

            t.tagToButton[(btn.tag || btnName).toLowerCase()] = btnName;

            return $('<button/>', {
                type: 'button',
                class: prefix + btnName + '-dropdown-button ' + (btn.class || '') + (btn.ico ? ' ' + prefix + btn.ico + '-button' : ''),
                html: t.hasSvg && hasIcon ?
                    '<svg><use xlink:href="' + t.svgPath + '#' + prefix + (btn.ico || btnName).replace(/([A-Z]+)/g, '-$1').toLowerCase() + '"/></svg>' + (btn.text || btn.title || t.lang[btnName] || btnName) :
                    (btn.text || btn.title || t.lang[btnName] || btnName),
                title: (btn.key ? '(' + (t.isMac ? 'Cmd' : 'Ctrl') + ' + ' + btn.key + ')' : null),
                style: btn.style || null,
                mousedown: function () {
                    $('body', t.doc).trigger('mousedown');

                    t.execCmd(btn.fn || btnName, btn.param || btnName, btn.forceCss);

                    return false;
                }
            });
        },
        // Check if button is supported
        isSupportedBtn: function (btnName) {
            try {
                return this.btnsDef[btnName].isSupported();
            } catch (e) {
            }
            return true;
        },

        // Build overlay for modal box
        buildOverlay: function () {
            var t = this;
            t.$overlay = $('<div/>', {
                class: t.o.prefix + 'overlay'
            }).appendTo(t.$box);
            return t.$overlay;
        },
        showOverlay: function () {
            var t = this;
            $(window).trigger('scroll');
            t.$overlay.fadeIn(200);
            t.$box.addClass(t.o.prefix + 'box-blur');
        },
        hideOverlay: function () {
            var t = this;
            t.$overlay.fadeOut(50);
            t.$box.removeClass(t.o.prefix + 'box-blur');
        },

        // Management of fixed button pane
        fixedBtnPaneEvents: function () {
            var t = this,
                fixedFullWidth = t.o.fixedFullWidth,
                $box = t.$box;

            if (!t.o.fixedBtnPane) {
                return;
            }

            t.isFixed = false;

            $(window)
                .on('scroll.' + t.eventNamespace + ' resize.' + t.eventNamespace, function () {
                    if (!$box) {
                        return;
                    }

                    t.syncCode();

                    var scrollTop = $(window).scrollTop(),
                        offset = $box.offset().top + 1,
                        $buttonPane = t.$btnPane,
                        buttonPaneOuterHeight = $buttonPane.outerHeight() - 2;

                    if ((scrollTop - offset > 0) && ((scrollTop - offset - t.height) < 0)) {
                        if (!t.isFixed) {
                            t.isFixed = true;
                            $buttonPane.css({
                                position: 'fixed',
                                top: 0,
                                left: fixedFullWidth ? 0 : 'auto',
                                zIndex: 7
                            });
                            t.$box.css({paddingTop: $buttonPane.height()});
                        }
                        $buttonPane.css({
                            width: fixedFullWidth ? '100%' : (($box.width() - 1))
                        });

                        $('.' + t.o.prefix + 'fixed-top', $box).css({
                            position: fixedFullWidth ? 'fixed' : 'absolute',
                            top: fixedFullWidth ? buttonPaneOuterHeight : buttonPaneOuterHeight + (scrollTop - offset),
                            zIndex: 15
                        });
                    } else if (t.isFixed) {
                        t.isFixed = false;
                        $buttonPane.removeAttr('style');
                        t.$box.css({paddingTop: 0});
                        $('.' + t.o.prefix + 'fixed-top', $box).css({
                            position: 'absolute',
                            top: buttonPaneOuterHeight
                        });
                    }
                });
        },

        // Disable editor
        setDisabled: function (disable) {
            var t = this,
                prefix = t.o.prefix;

            t.disabled = disable;

            if (disable) {
                t.$ta.attr('disabled', true);
            } else {
                t.$ta.removeAttr('disabled');
            }
            t.$box.toggleClass(prefix + 'disabled', disable);
            t.$ed.attr('contenteditable', !disable);
        },

        // Destroy the editor
        destroy: function () {
            var t = this,
                prefix = t.o.prefix;

            if (t.isTextarea) {
                t.$box.after(
                    t.$ta
                        .css({height: ''})
                        .val(t.html())
                        .removeClass(prefix + 'textarea')
                        .show()
                );
            } else {
                t.$box.after(
                    t.$ed
                        .css({height: ''})
                        .removeClass(prefix + 'editor')
                        .removeAttr('contenteditable')
                        .removeAttr('dir')
                        .html(t.html())
                        .show()
                );
            }

            t.$ed.off('dblclick', 'img');

            t.destroyPlugins();

            t.$box.remove();
            t.$c.removeData('trumbowyg');
            $('body').removeClass(prefix + 'body-fullscreen');
            t.$c.trigger('tbwclose');
            $(window).off('scroll.' + t.eventNamespace + ' resize.' + t.eventNamespace);
            $(t.doc.body).off('keydown.' + t.eventNamespace);
        },


        // Empty the editor
        empty: function () {
            this.$ta.val('');
            this.syncCode(true);
        },


        // Function call when click on viewHTML button
        toggle: function () {
            var t = this,
                prefix = t.o.prefix;

            if (t.o.autogrowOnEnter) {
                t.autogrowOnEnterDontClose = !t.$box.hasClass(prefix + 'editor-hidden');
            }

            t.semanticCode(false, true);
            t.$c.trigger('tbwchange');

            setTimeout(function () {
                t.doc.activeElement.blur();
                t.$box.toggleClass(prefix + 'editor-hidden ' + prefix + 'editor-visible');
                t.$btnPane.toggleClass(prefix + 'disable');
                $('.' + prefix + 'viewHTML-button', t.$btnPane).toggleClass(prefix + 'active');
                if (t.$box.hasClass(prefix + 'editor-visible')) {
                    t.$ta.attr('tabindex', -1);
                } else {
                    t.$ta.removeAttr('tabindex');
                }

                if (t.o.autogrowOnEnter && !t.autogrowOnEnterDontClose) {
                    t.autogrowEditorOnEnter();
                }
            }, 0);
        },

        // Remove or add flags to span tags to remove Chrome generated spans
        toggleSpan: function (addFlag) {
            var t = this;
            t.$ed.find('span').each(function () {
                if (addFlag === true) {
                    $(this).attr('data-tbw-flag', true);
                } else {
                    if ($(this).attr('data-tbw-flag')) {
                        $(this).removeAttr('data-tbw-flag');
                    } else {
                        $(this).contents().unwrap();
                    }
                }
            });
        },

        // Open dropdown when click on a button which open that
        dropdown: function (name) {
            var t = this,
                $body = $('body', t.doc),
                prefix = t.o.prefix,
                $dropdown = $('[data-' + prefix + 'dropdown=' + name + ']', t.$box),
                $btn = $('.' + prefix + name + '-button', t.$btnPane),
                show = $dropdown.is(':hidden');

            $body.trigger('mousedown');

            if (show) {
                var btnOffsetLeft = $btn.offset().left;
                $btn.addClass(prefix + 'active');

                $dropdown.css({
                    position: 'absolute',
                    top: $btn.offset().top - t.$btnPane.offset().top + $btn.outerHeight(),
                    left: (t.o.fixedFullWidth && t.isFixed) ? btnOffsetLeft : (btnOffsetLeft - t.$btnPane.offset().left)
                }).show();

                $(window).trigger('scroll');

                $body.on('mousedown.' + t.eventNamespace, function (e) {
                    if (!$dropdown.is(e.target)) {
                        $('.' + prefix + 'dropdown', t.$box).hide();
                        $('.' + prefix + 'active', t.$btnPane).removeClass(prefix + 'active');
                        $body.off('mousedown.' + t.eventNamespace);
                    }
                });
            }
        },


        // HTML Code management
        html: function (html) {
            var t = this;

            if (html != null) {
                t.$ta.val(html);
                t.syncCode(true);
                t.$c.trigger('tbwchange');
                return t;
            }

            return t.$ta.val();
        },
        syncTextarea: function () {
            var t = this;
            t.$ta.val(t.$ed.text().trim().length > 0 || t.$ed.find(t.o.tagsToKeep.join(',')).length > 0 ? t.$ed.html() : '');
        },
        syncCode: function (force) {
            var t = this;
            if (!force && t.$ed.is(':visible')) {
                t.syncTextarea();
            } else {
                // wrap the content in a div it's easier to get the inner html
                var html = $('<div>').html(t.$ta.val());
                // scrub the html before loading into the doc
                var safe = $('<div>').append(html);
                $(t.o.tagsToRemove.join(','), safe).remove();
                t.$ed.html(safe.contents().html());
            }

            if (t.o.autogrow) {
                t.height = t.$ed.height();
                if (t.height !== t.$ta.css('height')) {
                    t.$ta.css({height: t.height});
                    t.$c.trigger('tbwresize');
                }
            }
            if (t.o.autogrowOnEnter) {
                t.$ed.height('auto');
                var totalHeight = t.autogrowOnEnterWasFocused ? t.$ed[0].scrollHeight : t.$ed.css('min-height');
                if (totalHeight !== t.$ta.css('height')) {
                    t.$ed.css({height: totalHeight});
                    t.$c.trigger('tbwresize');
                }
            }
        },

        // Analyse and update to semantic code
        // @param force : force to sync code from textarea
        // @param full  : wrap text nodes in <p>
        // @param keepRange  : leave selection range as it is
        semanticCode: function (force, full, keepRange) {
            var t = this;
            t.saveRange();
            t.syncCode(force);

            var restoreRange = true;
            if (t.range && t.range.collapsed) {
                restoreRange = false;
            }

            if (t.o.semantic) {
                t.semanticTag('b', t.o.semanticKeepAttributes);
                t.semanticTag('i', t.o.semanticKeepAttributes);
                t.semanticTag('s', t.o.semanticKeepAttributes);
                t.semanticTag('strike', t.o.semanticKeepAttributes);

                if (full) {
                    var inlineElementsSelector = t.o.inlineElementsSelector,
                        blockElementsSelector = ':not(' + inlineElementsSelector + ')';

                    // Wrap text nodes in span for easier processing
                    t.$ed.contents().filter(function () {
                        return this.nodeType === 3 && this.nodeValue.trim().length > 0;
                    }).wrap('<span data-tbw/>');

                    // Wrap groups of inline elements in paragraphs (recursive)
                    var wrapInlinesInParagraphsFrom = function ($from) {
                        if ($from.length !== 0) {
                            var $finalParagraph = $from.nextUntil(blockElementsSelector).addBack().wrapAll('<p/>').parent(),
                                $nextElement = $finalParagraph.nextAll(inlineElementsSelector).first();
                            $finalParagraph.next('br').remove();
                            wrapInlinesInParagraphsFrom($nextElement);
                        }
                    };
                    wrapInlinesInParagraphsFrom(t.$ed.children(inlineElementsSelector).first());

                    t.semanticTag('div', true);

                    // Get rid of temporary span's
                    $('[data-tbw]', t.$ed).contents().unwrap();

                    // Remove empty <p>
                    t.$ed.find('p:empty').remove();
                }

                if (!keepRange && restoreRange) {
                    t.restoreRange();
                }

                t.syncTextarea();
            }
        },

        semanticTag: function (oldTag, copyAttributes, revert) {
            var newTag, t = this;
            var tmpTag = oldTag;

            if (this.o.semantic != null && typeof this.o.semantic === 'object' && this.o.semantic.hasOwnProperty(oldTag)) {
                newTag = this.o.semantic[oldTag];
            } else if (this.o.semantic === true && this.DEFAULT_SEMANTIC_MAP.hasOwnProperty(oldTag)) {
                newTag = this.DEFAULT_SEMANTIC_MAP[oldTag];
            } else {
                return;
            }

            if(revert) {
                oldTag = newTag;
                newTag = tmpTag;
            }

            $(oldTag, this.$ed).each(function () {
                var resetRange = false;
                var $oldTag = $(this);
                if ($oldTag.contents().length === 0) {
                    return false;
                }

                if (t.range && t.range.startContainer.parentNode === this) {
                    resetRange = true;
                }
                var $newTag = $('<' + newTag + '/>');
                $newTag.insertBefore($oldTag);
                if (copyAttributes) {
                    $.each($oldTag.prop('attributes'), function () {
                        $newTag.attr(this.name, this.value);
                    });
                }
                $newTag.html($oldTag.html());
                $oldTag.remove();
                if(resetRange === true) {
                    t.range.selectNodeContents($newTag.get(0));
                    t.range.collapse(false);
                }
            });
        },

        // Function call when user click on "Insert Link"
        createLink: function () {
            var t = this,
                documentSelection = t.doc.getSelection(),
                selectedRange = documentSelection.getRangeAt(0),
                node = documentSelection.focusNode,
                text = new XMLSerializer().serializeToString(selectedRange.cloneContents()) || selectedRange + '',
                url,
                title,
                target;

            while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
                node = node.parentNode;
            }

            if (node && node.nodeName === 'A') {
                var $a = $(node);
                text = $a.text();
                url = $a.attr('href');
                if (!t.o.minimalLinks) {
                    title = $a.attr('title');
                    target = $a.attr('target') || t.o.defaultLinkTarget;
                }
                var range = t.doc.createRange();
                range.selectNode(node);
                documentSelection.removeAllRanges();
                documentSelection.addRange(range);
            }

            t.saveRange();

            var options = {
                url: {
                    label: t.lang.linkUrl || 'URL',
                    required: true,
                    value: url
                },
                text: {
                    label: t.lang.text,
                    value: text
                }
            };
            if (!t.o.minimalLinks) {
                $.extend(options, {
                    title: {
                        label: t.lang.title,
                        value: title
                    },
                    target: {
                        label: t.lang.target,
                        value: target
                    }
                });
            }

            t.openModalInsert(t.lang.createLink, options, function (v) { // v is value
                var url = t.prependUrlPrefix(v.url);
                if (!url.length) {
                    return false;
                }

                var link = $(['<a href="', url, '">', v.text || v.url, '</a>'].join(''));

                if (v.title) {
                    link.attr('title', v.title);
                }
                if (v.target || t.o.defaultLinkTarget) {
                    link.attr('target', v.target || t.o.defaultLinkTarget);
                }
                t.range.deleteContents();
                t.range.insertNode(link[0]);
                t.syncCode();
                t.$c.trigger('tbwchange');
                return true;
            });
        },
        prependUrlPrefix: function (url) {
            var t = this;
            if (!t.urlPrefix) {
                return url;
            }

            var VALID_LINK_PREFIX = /^([a-z][-+.a-z0-9]*:|\/|#)/i;
            if (VALID_LINK_PREFIX.test(url)) {
                return url;
            }

            var SIMPLE_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (SIMPLE_EMAIL_REGEX.test(url)) {
                return 'mailto:' + url;
            }

            return t.urlPrefix + url;
        },
        unlink: function () {
            var t = this,
                documentSelection = t.doc.getSelection(),
                node = documentSelection.focusNode;

            if (documentSelection.isCollapsed) {
                while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
                    node = node.parentNode;
                }

                if (node && node.nodeName === 'A') {
                    var range = t.doc.createRange();
                    range.selectNode(node);
                    documentSelection.removeAllRanges();
                    documentSelection.addRange(range);
                }
            }
            t.execCmd('unlink', undefined, undefined, true);
        },
        insertImage: function () {
            var t = this;
            t.saveRange();

            var options = {
                url: {
                    label: 'URL',
                    required: true
                },
                alt: {
                    label: t.lang.description,
                    value: t.getRangeText()
                }
            };

            if (t.o.imageWidthModalEdit) {
                options.width = {};
            }

            t.openModalInsert(t.lang.insertImage, options, function (v) { // v are values
                t.execCmd('insertImage', v.url, false, true);
                var $img = $('img[src="' + v.url + '"]:not([alt])', t.$box);
                $img.attr('alt', v.alt);

                if (t.o.imageWidthModalEdit) {
                    $img.attr({
                        width: v.width
                    });
                }

                t.syncCode();
                t.$c.trigger('tbwchange');

                return true;
            });
        },
        fullscreen: function () {
            var t = this,
                prefix = t.o.prefix,
                fullscreenCssClass = prefix + 'fullscreen',
                fullscreenPlaceholderClass = fullscreenCssClass + '-placeholder',
                isFullscreen,
                editorHeight = t.$box.outerHeight();

            t.$box.toggleClass(fullscreenCssClass);
            isFullscreen = t.$box.hasClass(fullscreenCssClass);

            if (isFullscreen) {
                t.$box.before(
                    $('<div/>', {
                        class: fullscreenPlaceholderClass
                    }).css({
                        height: editorHeight
                    })
                );
            } else {
                $('.' + fullscreenPlaceholderClass).remove();
            }

            $('body').toggleClass(prefix + 'body-fullscreen', isFullscreen);
            $(window).trigger('scroll');
            t.$c.trigger('tbw' + (isFullscreen ? 'open' : 'close') + 'fullscreen');
        },


        /*
         * Call method of trumbowyg if exist
         * else try to call anonymous function
         * and finally native execCommand
         */
        execCmd: function (cmd, param, forceCss, skipTrumbowyg) {
            var t = this;
            skipTrumbowyg = !!skipTrumbowyg || '';

            if (cmd !== 'dropdown') {
                t.$ed.focus();
            }

            if(cmd === 'strikethrough' && t.o.semantic) {
                t.semanticTag('strike', t.o.semanticKeepAttributes, true); // browsers cannot undo e.g. <del> as they expect <strike>
            }

            try {
                t.doc.execCommand('styleWithCSS', false, forceCss || false);
            } catch (c) {
            }

            try {
                t[cmd + skipTrumbowyg](param);
            } catch (c) {
                try {
                    cmd(param);
                } catch (e2) {
                    if (cmd === 'insertHorizontalRule') {
                        param = undefined;
                    } else if (cmd === 'formatBlock' && t.isIE) {
                        param = '<' + param + '>';
                    }

                    t.doc.execCommand(cmd, false, param);

                    t.syncCode();
                    t.semanticCode(false, true);
                    try {
                        var listId = window.getSelection().focusNode;
                        if(!$(window.getSelection().focusNode.parentNode).hasClass('trumbowyg-editor')){
                            listId = window.getSelection().focusNode.parentNode;
                        }
                        var classes = t.o.tagClasses[param];
                        if (classes) {
                            $(listId).addClass(classes);
                        }
                    } catch (e) {

                    }

                }

                if (cmd !== 'dropdown') {
                    t.updateButtonPaneStatus();
                    t.$c.trigger('tbwchange');
                }
            }
        },


        // Open a modal box
        openModal: function (title, content, buildForm) {
            var t = this,
                prefix = t.o.prefix;

            buildForm = buildForm !== false;

            // No open a modal box when exist other modal box
            if ($('.' + prefix + 'modal-box', t.$box).length > 0) {
                return false;
            }
            if (t.o.autogrowOnEnter) {
                t.autogrowOnEnterDontClose = true;
            }

            t.saveRange();
            t.showOverlay();

            // Disable all btnPane btns
            t.$btnPane.addClass(prefix + 'disable');

            // Build out of ModalBox, it's the mask for animations
            var $modal = $('<div/>', {
                class: prefix + 'modal ' + prefix + 'fixed-top'
            }).css({
                top: t.$box.offset().top + t.$btnPane.height(),
                zIndex: 99999
            }).appendTo($(t.doc.body));

            // Click on overlay close modal by cancelling them
            t.$overlay.one('click', function () {
                $modal.trigger(CANCEL_EVENT);
                return false;
            });

            // Build the form
            var formOrContent;
            if (buildForm) {
                formOrContent = $('<form/>', {
                    action: '',
                    html: content
                })
                    .on('submit', function () {
                        $modal.trigger(CONFIRM_EVENT);
                        return false;
                    })
                    .on('reset', function () {
                        $modal.trigger(CANCEL_EVENT);
                        return false;
                    })
                    .on('submit reset', function () {
                        if (t.o.autogrowOnEnter) {
                            t.autogrowOnEnterDontClose = false;
                        }
                    });
            } else {
                formOrContent = content;
            }


            // Build ModalBox and animate to show them
            var $box = $('<div/>', {
                class: prefix + 'modal-box',
                html: formOrContent
            })
                .css({
                    top: '-' + t.$btnPane.outerHeight(),
                    opacity: 0,
                    paddingBottom: buildForm ? null : '5%',
                })
                .appendTo($modal)
                .animate({
                    top: 0,
                    opacity: 1
                }, 100);


            // Append title
            if (title) {
                $('<span/>', {
                    text: title,
                    class: prefix + 'modal-title'
                }).prependTo($box);
            }

            if (buildForm) {
                // Focus in modal box
                $(':input:first', $box).focus();

                // Append Confirm and Cancel buttons
                t.buildModalBtn('submit', $box);
                t.buildModalBtn('reset', $box);

                $modal.height($box.outerHeight() + 10);
            }

            $(window).trigger('scroll');
            t.$c.trigger('tbwmodalopen');

            return $modal;
        },
        // @param n is name of modal
        buildModalBtn: function (n, $modal) {
            var t = this,
                prefix = t.o.prefix;

            return $('<button/>', {
                class: prefix + 'modal-button ' + prefix + 'modal-' + n,
                type: n,
                text: t.lang[n] || n
            }).appendTo($('form', $modal));
        },
        // close current modal box
        closeModal: function () {
            var t = this,
                prefix = t.o.prefix;

            t.$btnPane.removeClass(prefix + 'disable');
            t.$overlay.off();

            // Find the modal box
            var $modalBox = $('.' + prefix + 'modal-box', $(t.doc.body));

            $modalBox.animate({
                top: '-' + $modalBox.height()
            }, 100, function () {
                $modalBox.parent().remove();
                t.hideOverlay();
                t.$c.trigger('tbwmodalclose');
            });

            t.restoreRange();
        },
        // Pre-formatted build and management modal
        openModalInsert: function (title, fields, cmd) {
            var t = this,
                prefix = t.o.prefix,
                lg = t.lang,
                html = '',
                idPrefix = prefix + 'form-' + Date.now() + '-';

            $.each(fields, function (fieldName, field) {
                var l = field.label || fieldName,
                    n = field.name || fieldName,
                    a = field.attributes || {},
                    fieldId = idPrefix + fieldName;

                var attr = Object.keys(a).map(function (prop) {
                    return prop + '="' + a[prop] + '"';
                }).join(' ');

                if (typeof field.type === 'function') {
                  if (!field.name) {
                    field.name = n;
                  }
                  html += field.type(field, fieldId, prefix, lg);
                } else {
                  html += '<div class="' + prefix + 'input-row">' +
                    '<div class="' + prefix + 'input-infos"><label for="' + fieldId + '"><span>' + (lg[l] ? lg[l] : l) + '</span></label></div>' +
                    '<div class="' + prefix + 'input-html"><input id="' + fieldId + '" type="' + (field.type || 'text') + '" name="' + n + '" ' + attr;
                    html += (field.type === 'checkbox' && field.value ? ' checked="checked"' : '') + ' value="' + (field.value || '').replace(/"/g, '&quot;') + '"></div>';
                  html += '</div>';
                }
            });

            return t.openModal(title, html)
                .on(CONFIRM_EVENT, function () {
                    var $form = $('form', $(this)),
                        valid = true,
                        values = {};

                    $.each(fields, function (fieldName, field) {
                        var n = field.name || fieldName;

                        var $field = $(':input[name="' + n + '"]', $form),
                            inputType = $field[0].type;

                        switch (inputType.toLowerCase()) {
                            case 'checkbox':
                                values[n] = $field.is(':checked');
                                break;
                            case 'radio':
                                values[n] = $field.filter(':checked').val();
                                break;
                            default:
                                values[n] = $.trim($field.val());
                                break;
                        }
                        // Validate value
                        if (field.required && values[n] === '') {
                            valid = false;
                            t.addErrorOnModalField($field, t.lang.required);
                        } else if (field.pattern && !field.pattern.test(values[n])) {
                            valid = false;
                            t.addErrorOnModalField($field, field.patternError);
                        }
                    });

                    if (valid) {
                        t.restoreRange();

                        if (cmd(values, fields)) {
                            t.syncCode();
                            t.$c.trigger('tbwchange');
                            t.closeModal();
                            $(this).off(CONFIRM_EVENT);
                        }
                    }
                })
                .one(CANCEL_EVENT, function () {
                    $(this).off(CONFIRM_EVENT);
                    t.closeModal();
                });
        },
        addErrorOnModalField: function ($field, err) {
            var prefix = this.o.prefix,
                spanErrorClass = prefix + 'msg-error',
                $row = $field.closest('.' + prefix + 'input-row');

            $field
                .on('change keyup', function () {
                    $row.removeClass(prefix + 'input-error');
                    setTimeout(function () {
                        $row.find('.' + spanErrorClass).remove();
                    }, 150);
                });

            $row
                .addClass(prefix + 'input-error')
                .find('.' + prefix + 'input-infos label')
                .append(
                    $('<span/>', {
                        class: spanErrorClass,
                        text: err
                    })
                );
        },

        getDefaultImgDblClickHandler: function () {
            var t = this;

            return function () {
                var $img = $(this),
                    src = $img.attr('src'),
                    base64 = '(Base64)';

                if (src.indexOf('data:image') === 0) {
                    src = base64;
                }

                var options = {
                    url: {
                        label: 'URL',
                        value: src,
                        required: true
                    },
                    alt: {
                        label: t.lang.description,
                        value: $img.attr('alt')
                    }
                };

                if (t.o.imageWidthModalEdit) {
                    options.width = {
                        value: $img.attr('width') ? $img.attr('width') : ''
                    };
                }

                t.openModalInsert(t.lang.insertImage, options, function (v) {
                    if (v.url !== base64) {
                        $img.attr({
                            src: v.url
                        });
                    }
                    $img.attr({
                        alt: v.alt
                    });

                    if (t.o.imageWidthModalEdit) {
                        if (parseInt(v.width) > 0) {
                            $img.attr({
                                width: v.width
                            });
                        } else {
                            $img.removeAttr('width');
                        }
                    }

                    return true;
                });
                return false;
            };
        },

        // Range management
        saveRange: function () {
            var t = this,
                documentSelection = t.doc.getSelection();

            t.range = null;

            if (!documentSelection || !documentSelection.rangeCount) {
                return;
            }

            var savedRange = t.range = documentSelection.getRangeAt(0),
                range = t.doc.createRange(),
                rangeStart;
            range.selectNodeContents(t.$ed[0]);
            range.setEnd(savedRange.startContainer, savedRange.startOffset);
            rangeStart = (range + '').length;
            t.metaRange = {
                start: rangeStart,
                end: rangeStart + (savedRange + '').length
            };
        },
        restoreRange: function () {
            var t = this,
                metaRange = t.metaRange,
                savedRange = t.range,
                documentSelection = t.doc.getSelection(),
                range;

            if (!savedRange) {
                return;
            }

            if (metaRange && metaRange.start !== metaRange.end) { // Algorithm from http://jsfiddle.net/WeWy7/3/
                var charIndex = 0,
                    nodeStack = [t.$ed[0]],
                    node,
                    foundStart = false,
                    stop = false;

                range = t.doc.createRange();

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType === 3) {
                        var nextCharIndex = charIndex + node.length;
                        if (!foundStart && metaRange.start >= charIndex && metaRange.start <= nextCharIndex) {
                            range.setStart(node, metaRange.start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && metaRange.end >= charIndex && metaRange.end <= nextCharIndex) {
                            range.setEnd(node, metaRange.end - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        var cn = node.childNodes,
                            i = cn.length;

                        while (i > 0) {
                            i -= 1;
                            nodeStack.push(cn[i]);
                        }
                    }
                }
            }

            // Fix IE11 Error 'Could not complete the operation due to error 800a025e'.
            // https://stackoverflow.com/questions/16160996/could-not-complete-the-operation-due-to-error-800a025e
            try {
                documentSelection.removeAllRanges();
            } catch (e) {
            }

            documentSelection.addRange(range || savedRange);
        },
        getRangeText: function () {
            return this.range + '';
        },

        clearButtonPaneStatus: function () {
            var t = this,
                prefix = t.o.prefix,
                activeClasses = prefix + 'active-button ' + prefix + 'active',
                originalIconClass = prefix + 'original-icon';

            // Reset all buttons and dropdown state
            $('.' + prefix + 'active-button', t.$btnPane).removeClass(activeClasses);
            $('.' + originalIconClass, t.$btnPane).each(function () {
                $(this).find('svg use').attr('xlink:href', $(this).data(originalIconClass));
            });
        },
        updateButtonPaneStatus: function () {
            var t = this,
                prefix = t.o.prefix,
                activeClasses = prefix + 'active-button ' + prefix + 'active',
                originalIconClass = prefix + 'original-icon',
                tags = t.getTagsRecursive(t.doc.getSelection().focusNode);

            t.clearButtonPaneStatus();

            $.each(tags, function (i, tag) {
                var btnName = t.tagToButton[tag.toLowerCase()],
                    $btn = $('.' + prefix + btnName + '-button', t.$btnPane);

                if ($btn.length > 0) {
                    $btn.addClass(activeClasses);
                } else {
                    try {
                        $btn = $('.' + prefix + 'dropdown .' + prefix + btnName + '-dropdown-button', t.$box);
                        var $btnSvgUse = $btn.find('svg use'),
                            dropdownBtnName = $btn.parent().data(prefix + 'dropdown'),
                            $dropdownBtn = $('.' + prefix + dropdownBtnName + '-button', t.$box),
                            $dropdownBtnSvgUse = $dropdownBtn.find('svg use');

                        // Highlight the dropdown button
                        $dropdownBtn.addClass(activeClasses);

                        // Switch dropdown icon to the active sub-icon one
                        if (t.o.changeActiveDropdownIcon && $btnSvgUse.length > 0) {
                            // Save original icon
                            $dropdownBtn
                                .addClass(originalIconClass)
                                .data(originalIconClass, $dropdownBtnSvgUse.attr('xlink:href'));

                            // Put the active sub-button's icon
                            $dropdownBtnSvgUse
                                .attr('xlink:href', $btnSvgUse.attr('xlink:href'));
                        }
                    } catch (e) {
                    }
                }
            });
        },
        getTagsRecursive: function (element, tags) {
            var t = this;
            tags = tags || (element && element.tagName ? [element.tagName] : []);

            if (element && element.parentNode) {
                element = element.parentNode;
            } else {
                return tags;
            }

            var tag = element.tagName;
            if (tag === 'DIV') {
                return tags;
            }
            if (tag === 'P' && element.style.textAlign !== '') {
                tags.push(element.style.textAlign);
            }

            $.each(t.tagHandlers, function (i, tagHandler) {
                tags = tags.concat(tagHandler(element, t));
            });

            tags.push(tag);

            return t.getTagsRecursive(element, tags).filter(function (tag) {
                return tag != null;
            });
        },

        // Plugins
        initPlugins: function () {
            var t = this;
            t.loadedPlugins = [];
            $.each($.trumbowyg.plugins, function (name, plugin) {
                if (!plugin.shouldInit || plugin.shouldInit(t)) {
                    plugin.init(t);
                    if (plugin.tagHandler) {
                        t.tagHandlers.push(plugin.tagHandler);
                    }
                    t.loadedPlugins.push(plugin);
                }
            });
        },
        destroyPlugins: function () {
            var t = this;
            $.each(this.loadedPlugins, function (i, plugin) {
                if (plugin.destroy) {
                    plugin.destroy(t);
                }
            });
        }
    };
})(navigator, window, document, jQuery);

(function ($) {
    'use strict';

    // My plugin default options
    var defaultOptions = {};

    function zm_imageButtonDef(trumbowyg) {
        return {
            fn: function () {
                var output = document.createElement("input");
                output.setAttribute("data-folder", "images");
                output.setAttribute("data-thumbnail", "thumbs");
                output.setAttribute("data-format", "");

                var thisMediaLibary = new mediaLibraryObj($(output));

                $(output).on('change', function () {
                    trumbowyg.execCmd('insertHTML', "<img src='/" + $(this).val() + "'>");
                    return true;
                });
            }
        }
    }

    function zm_imageLinkedButtonDef(trumbowyg) {
        return {
            fn: function () {
                var output = document.createElement("input");
                output.setAttribute("data-folder", "images");
                output.setAttribute("data-thumbnail", "small");
                output.setAttribute("data-format", "");

                var thisMediaLibary = new mediaLibraryObj($(output));

                $(output).on('change', function () {
                    var thumbnail = $(this).val().replace(/^.*[\\\/]/, '');
                    trumbowyg.execCmd('insertHTML', "<a href='/" + $(this).val() + "'><img src='/uploads/images/thumbs/" + thumbnail + "'></a>");
                    return true;
                });
            }
        }
    }

    function zm_galleryButtonDef(trumbowyg) {
        return {
            ico: 'insert-image',
            title: 'Gallery',
            tag: 'div',
            fn: function () {
                trumbowyg.saveRange();
                var text = trumbowyg.getRangeText();
                if (text.replace(/\s/g, '') !== '') {
                    try {
                        //var curtag = getSelectionParentElement().tagName.toLowerCase();
                        //alert(curtag);
                        /*if (curtag === 'div') {
                            return unwrapCode();
                        }
                        else {*/
                        trumbowyg.execCmd('insertHTML', '<div class="gallery">' + text + '</div>');
                        //}
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }
    }

    function zm_colsButtonDef(trumbowyg) {
        return {
            ico: 'insert-image',
            title: 'Columns',
            tag: 'p',
            fn: function () {
                trumbowyg.saveRange();
                var text = trumbowyg.getRangeText();
                if (text.replace(/\s/g, '') !== '') {
                    try {
                        //var curtag = getSelectionParentElement().tagName.toLowerCase();
                        //alert(curtag);
                        /*if (curtag === 'div') {
                            return unwrapCode();
                        }
                        else {*/
                        if (text == "")
                            text = "Col 1";
                        trumbowyg.execCmd('insertHTML', '<section class="wide"><div class="col-half">' + text + '</div><div class="col-half">Col 2</div></section>');
                        //}
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }
    }

    $.extend(true, $.trumbowyg, {
        // Add some translations
        langs: {
            en: {
                zm_image: 'Add an image',
                zm_imageLinked: 'Add a thumbnail that links to the original image'
            }
        },
        // Add our plugin to Trumbowyg registred plugins
        plugins: {
            zeusmoose: {
                init: function (trumbowyg) {

                    // Fill current Trumbowyg instance with my plugin default options
                    trumbowyg.o.plugins.zeusmoose = $.extend(true, {},
                        defaultOptions,
                        trumbowyg.o.plugins.zeusmoose || {}
                    );

                    // If my plugin is a paste handler, register it
                    trumbowyg.pasteHandlers.push(function (pasteEvent) {
                        // My plugin paste logic
                    });

                    trumbowyg.addBtnDef('gallery', zm_galleryButtonDef(trumbowyg));
                    trumbowyg.addBtnDef('columns', zm_colsButtonDef(trumbowyg));
                    trumbowyg.addBtnDef('zm_image', zm_imageButtonDef(trumbowyg));
                    trumbowyg.addBtnDef('zm_imageLinked', zm_imageLinkedButtonDef(trumbowyg));
                },
                tagHandler: function (element, trumbowyg) {
                    return [];
                },
                destroy: function () {
                }
            }
        }
    })
})(jQuery);

/* jqplot 1.0.9 | (c) 2009-2016 Chris Leonello | jplot.com
   jsDate | (c) 2010-2016 Chris Leonello
 */
!function(a){function b(b){a.jqplot.ElemContainer.call(this),this.name=b,this._series=[],this.show=!1,this.tickRenderer=a.jqplot.AxisTickRenderer,this.tickOptions={},this.labelRenderer=a.jqplot.AxisLabelRenderer,this.labelOptions={},this.label=null,this.showLabel=!0,this.min=null,this.max=null,this.autoscale=!1,this.pad=1.2,this.padMax=null,this.padMin=null,this.ticks=[],this.numberTicks,this.tickInterval,this.renderer=a.jqplot.LinearAxisRenderer,this.rendererOptions={},this.showTicks=!0,this.showTickMarks=!0,this.showMinorTicks=!0,this.drawMajorGridlines=!0,this.drawMinorGridlines=!1,this.drawMajorTickMarks=!0,this.drawMinorTickMarks=!0,this.useSeriesColor=!1,this.borderWidth=null,this.borderColor=null,this.scaleToHiddenSeries=!1,this._dataBounds={min:null,max:null},this._intervalStats=[],this._offsets={min:null,max:null},this._ticks=[],this._label=null,this.syncTicks=null,this.tickSpacing=75,this._min=null,this._max=null,this._tickInterval=null,this._numberTicks=null,this.__ticks=null,this._options={}}function c(b){a.jqplot.ElemContainer.call(this),this.show=!1,this.location="ne",this.labels=[],this.showLabels=!0,this.showSwatches=!0,this.placement="insideGrid",this.xoffset=0,this.yoffset=0,this.border,this.background,this.textColor,this.fontFamily,this.fontSize,this.rowSpacing="0.5em",this.renderer=a.jqplot.TableLegendRenderer,this.rendererOptions={},this.preDraw=!1,this.marginTop=null,this.marginRight=null,this.marginBottom=null,this.marginLeft=null,this.escapeHtml=!1,this._series=[],a.extend(!0,this,b)}function d(b){a.jqplot.ElemContainer.call(this),this.text=b,this.show=!0,this.fontFamily,this.fontSize,this.textAlign,this.textColor,this.renderer=a.jqplot.DivTitleRenderer,this.rendererOptions={},this.escapeHtml=!1}function e(b){b=b||{},a.jqplot.ElemContainer.call(this),this.show=!0,this.xaxis="xaxis",this._xaxis,this.yaxis="yaxis",this._yaxis,this.gridBorderWidth=2,this.renderer=a.jqplot.LineRenderer,this.rendererOptions={},this.data=[],this.gridData=[],this.label="",this.showLabel=!0,this.color,this.negativeColor,this.lineWidth=2.5,this.lineJoin="round",this.lineCap="round",this.linePattern="solid",this.shadow=!0,this.shadowAngle=45,this.shadowOffset=1.25,this.shadowDepth=3,this.shadowAlpha="0.1",this.breakOnNull=!1,this.markerRenderer=a.jqplot.MarkerRenderer,this.markerOptions={},this.showLine=!0,this.showMarker=!0,this.index,this.fill=!1,this.fillColor,this.fillAlpha,this.fillAndStroke=!1,this.disableStack=!1,this._stack=!1,this.neighborThreshold=4,this.fillToZero=!1,this.fillToValue=0,this.fillAxis="y",this.useNegativeColors=!0,this._stackData=[],this._plotData=[],this._plotValues={x:[],y:[]},this._intervals={x:{},y:{}},this._prevPlotData=[],this._prevGridData=[],this._stackAxis="y",this._primaryAxis="_xaxis",this.canvas=new a.jqplot.GenericCanvas,this.shadowCanvas=new a.jqplot.GenericCanvas,this.plugins={},this._sumy=0,this._sumx=0,this._type="",this.step=!1}function f(){a.jqplot.ElemContainer.call(this),this.drawGridlines=!0,this.gridLineColor="#cccccc",this.gridLineWidth=1,this.background="#fffdf6",this.borderColor="#999999",this.borderWidth=2,this.drawBorder=!0,this.shadow=!0,this.shadowAngle=45,this.shadowOffset=1.5,this.shadowWidth=3,this.shadowDepth=3,this.shadowColor=null,this.shadowAlpha="0.07",this._left,this._top,this._right,this._bottom,this._width,this._height,this._axes=[],this.renderer=a.jqplot.CanvasGridRenderer,this.rendererOptions={},this._offsets={top:null,bottom:null,left:null,right:null}}function g(){function h(a){for(var b,c=0;c<a.length;c++)for(var d,e=[a[c].data,a[c]._stackData,a[c]._plotData,a[c]._prevPlotData],f=0;4>f;f++)if(d=!0,b=e[f],"x"==a[c]._stackAxis){for(var g=0;g<b.length;g++)if("number"!=typeof b[g][1]){d=!1;break}d&&b.sort(function(a,b){return a[1]-b[1]})}else{for(var g=0;g<b.length;g++)if("number"!=typeof b[g][0]){d=!1;break}d&&b.sort(function(a,b){return a[0]-b[0]})}}function i(a){var b,c,d=a.data.plot,e=d.eventCanvas._elem.offset(),f={x:a.pageX-e.left,y:a.pageY-e.top},g={xaxis:null,yaxis:null,x2axis:null,y2axis:null,y3axis:null,y4axis:null,y5axis:null,y6axis:null,y7axis:null,y8axis:null,y9axis:null,yMidAxis:null},h=["xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis","yMidAxis"],i=d.axes;for(b=11;b>0;b--)c=h[b-1],i[c].show&&(g[c]=i[c].series_p2u(f[c.charAt(0)]));return{offsets:e,gridPos:f,dataPos:g}}function j(b,c){function d(a,b,c){var d=(b[1]-c[1])/(b[0]-c[0]),e=b[1]-d*b[0],f=a+b[1];return[(f-e)/d,f]}var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x=c.series;for(g=c.seriesStack.length-1;g>=0;g--)switch(e=c.seriesStack[g],h=x[e],u=h._highlightThreshold,h.renderer.constructor){case a.jqplot.BarRenderer:for(j=b.x,k=b.y,f=0;f<h._barPoints.length;f++)if(t=h._barPoints[f],s=h.gridData[f],j>t[0][0]&&j<t[2][0]&&(k>t[2][1]&&k<t[0][1]||k<t[2][1]&&k>t[0][1]))return{seriesIndex:h.index,pointIndex:f,gridData:s,data:h.data[f],points:h._barPoints[f]};break;case a.jqplot.PyramidRenderer:for(j=b.x,k=b.y,f=0;f<h._barPoints.length;f++)if(t=h._barPoints[f],s=h.gridData[f],j>t[0][0]+u[0][0]&&j<t[2][0]+u[2][0]&&k>t[2][1]&&k<t[0][1])return{seriesIndex:h.index,pointIndex:f,gridData:s,data:h.data[f],points:h._barPoints[f]};break;case a.jqplot.DonutRenderer:if(n=h.startAngle/180*Math.PI,j=b.x-h._center[0],k=b.y-h._center[1],i=Math.sqrt(Math.pow(j,2)+Math.pow(k,2)),j>0&&-k>=0?l=2*Math.PI-Math.atan(-k/j):j>0&&0>-k?l=-Math.atan(-k/j):0>j?l=Math.PI-Math.atan(-k/j):0==j&&-k>0?l=3*Math.PI/2:0==j&&0>-k?l=Math.PI/2:0==j&&0==k&&(l=0),n&&(l-=n,0>l?l+=2*Math.PI:l>2*Math.PI&&(l-=2*Math.PI)),m=h.sliceMargin/180*Math.PI,i<h._radius&&i>h._innerRadius)for(f=0;f<h.gridData.length;f++)if(o=f>0?h.gridData[f-1][1]+m:m,p=h.gridData[f][1],l>o&&p>l)return{seriesIndex:h.index,pointIndex:f,gridData:[b.x,b.y],data:h.data[f]};break;case a.jqplot.PieRenderer:if(n=h.startAngle/180*Math.PI,j=b.x-h._center[0],k=b.y-h._center[1],i=Math.sqrt(Math.pow(j,2)+Math.pow(k,2)),j>0&&-k>=0?l=2*Math.PI-Math.atan(-k/j):j>0&&0>-k?l=-Math.atan(-k/j):0>j?l=Math.PI-Math.atan(-k/j):0==j&&-k>0?l=3*Math.PI/2:0==j&&0>-k?l=Math.PI/2:0==j&&0==k&&(l=0),n&&(l-=n,0>l?l+=2*Math.PI:l>2*Math.PI&&(l-=2*Math.PI)),m=h.sliceMargin/180*Math.PI,i<h._radius)for(f=0;f<h.gridData.length;f++)if(o=f>0?h.gridData[f-1][1]+m:m,p=h.gridData[f][1],l>o&&p>l)return{seriesIndex:h.index,pointIndex:f,gridData:[b.x,b.y],data:h.data[f]};break;case a.jqplot.BubbleRenderer:j=b.x,k=b.y;var y=null;if(h.show){for(var f=0;f<h.gridData.length;f++)s=h.gridData[f],r=Math.sqrt((j-s[0])*(j-s[0])+(k-s[1])*(k-s[1])),r<=s[2]&&(q>=r||null==q)&&(q=r,y={seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]});if(null!=y)return y}break;case a.jqplot.FunnelRenderer:j=b.x,k=b.y;var z,A,B,C=h._vertices,D=C[0],E=C[C.length-1];for(z=d(k,D[0],E[3]),A=d(k,D[1],E[2]),f=0;f<C.length;f++)if(B=C[f],k>=B[0][1]&&k<=B[3][1]&&j>=z[0]&&j<=A[0])return{seriesIndex:h.index,pointIndex:f,gridData:null,data:h.data[f]};break;case a.jqplot.LineRenderer:if(j=b.x,k=b.y,i=h.renderer,h.show){if(!(!(h.fill||h.renderer.bands.show&&h.renderer.bands.fill)||c.plugins.highlighter&&c.plugins.highlighter.show)){var F=!1;if(j>h._boundingBox[0][0]&&j<h._boundingBox[1][0]&&k>h._boundingBox[1][1]&&k<h._boundingBox[0][1])for(var G,H=h._areaPoints.length,f=H-1,G=0;H>G;G++){var I=[h._areaPoints[G][0],h._areaPoints[G][1]],J=[h._areaPoints[f][0],h._areaPoints[f][1]];(I[1]<k&&J[1]>=k||J[1]<k&&I[1]>=k)&&I[0]+(k-I[1])/(J[1]-I[1])*(J[0]-I[0])<j&&(F=!F),f=G}if(F)return{seriesIndex:e,pointIndex:null,gridData:h.gridData,data:h.data,points:h._areaPoints};break}w=h.markerRenderer.size/2+h.neighborThreshold,v=w>0?w:0;for(var f=0;f<h.gridData.length;f++)if(s=h.gridData[f],i.constructor==a.jqplot.OHLCRenderer)if(i.candleStick){var K=h._yaxis.series_u2p;if(j>=s[0]-i._bodyWidth/2&&j<=s[0]+i._bodyWidth/2&&k>=K(h.data[f][2])&&k<=K(h.data[f][3]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else if(i.hlc){var K=h._yaxis.series_u2p;if(j>=s[0]-i._tickLength&&j<=s[0]+i._tickLength&&k>=K(h.data[f][1])&&k<=K(h.data[f][2]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else{var K=h._yaxis.series_u2p;if(j>=s[0]-i._tickLength&&j<=s[0]+i._tickLength&&k>=K(h.data[f][2])&&k<=K(h.data[f][3]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else if(null!=s[0]&&null!=s[1]&&(r=Math.sqrt((j-s[0])*(j-s[0])+(k-s[1])*(k-s[1])),v>=r&&(q>=r||null==q)))return q=r,{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}break;default:if(j=b.x,k=b.y,i=h.renderer,h.show){w=h.markerRenderer.size/2+h.neighborThreshold,v=w>0?w:0;for(var f=0;f<h.gridData.length;f++)if(s=h.gridData[f],i.constructor==a.jqplot.OHLCRenderer)if(i.candleStick){var K=h._yaxis.series_u2p;if(j>=s[0]-i._bodyWidth/2&&j<=s[0]+i._bodyWidth/2&&k>=K(h.data[f][2])&&k<=K(h.data[f][3]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else if(i.hlc){var K=h._yaxis.series_u2p;if(j>=s[0]-i._tickLength&&j<=s[0]+i._tickLength&&k>=K(h.data[f][1])&&k<=K(h.data[f][2]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else{var K=h._yaxis.series_u2p;if(j>=s[0]-i._tickLength&&j<=s[0]+i._tickLength&&k>=K(h.data[f][2])&&k<=K(h.data[f][3]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else if(r=Math.sqrt((j-s[0])*(j-s[0])+(k-s[1])*(k-s[1])),v>=r&&(q>=r||null==q))return q=r,{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}}return null}this.animate=!1,this.animateReplot=!1,this.axes={xaxis:new b("xaxis"),yaxis:new b("yaxis"),x2axis:new b("x2axis"),y2axis:new b("y2axis"),y3axis:new b("y3axis"),y4axis:new b("y4axis"),y5axis:new b("y5axis"),y6axis:new b("y6axis"),y7axis:new b("y7axis"),y8axis:new b("y8axis"),y9axis:new b("y9axis"),yMidAxis:new b("yMidAxis")},this.baseCanvas=new a.jqplot.GenericCanvas,this.captureRightClick=!1,this.data=[],this.dataRenderer,this.dataRendererOptions,this.defaults={axesDefaults:{},axes:{xaxis:{},yaxis:{},x2axis:{},y2axis:{},y3axis:{},y4axis:{},y5axis:{},y6axis:{},y7axis:{},y8axis:{},y9axis:{},yMidAxis:{}},seriesDefaults:{},series:[]},this.defaultAxisStart=1,this.drawIfHidden=!1,this.eventCanvas=new a.jqplot.GenericCanvas,this.fillBetween={series1:null,series2:null,color:null,baseSeries:0,fill:!0},this.fontFamily,this.fontSize,this.grid=new f,this.legend=new c,this.noDataIndicator={show:!1,indicator:"Loading Data...",axes:{xaxis:{min:0,max:10,tickInterval:2,show:!0},yaxis:{min:0,max:12,tickInterval:3,show:!0}}},this.negativeSeriesColors=a.jqplot.config.defaultNegativeColors,this.options={},this.previousSeriesStack=[],this.plugins={},this.series=[],this.seriesStack=[],this.seriesColors=a.jqplot.config.defaultColors,this.sortData=!0,this.stackSeries=!1,this.syncXTicks=!0,this.syncYTicks=!0,this.target=null,this.targetId=null,this.textColor,this.title=new d,this._drawCount=0,this._sumy=0,this._sumx=0,this._stackData=[],this._plotData=[],this._width=null,this._height=null,this._plotDimensions={height:null,width:null},this._gridPadding={top:null,right:null,bottom:null,left:null},this._defaultGridPadding={top:10,right:10,bottom:23,left:10},this._addDomReference=a.jqplot.config.addDomReference,this.preInitHooks=new a.jqplot.HooksManager,this.postInitHooks=new a.jqplot.HooksManager,this.preParseOptionsHooks=new a.jqplot.HooksManager,this.postParseOptionsHooks=new a.jqplot.HooksManager,this.preDrawHooks=new a.jqplot.HooksManager,this.postDrawHooks=new a.jqplot.HooksManager,this.preDrawSeriesHooks=new a.jqplot.HooksManager,this.postDrawSeriesHooks=new a.jqplot.HooksManager,this.preDrawLegendHooks=new a.jqplot.HooksManager,this.addLegendRowHooks=new a.jqplot.HooksManager,this.preSeriesInitHooks=new a.jqplot.HooksManager,this.postSeriesInitHooks=new a.jqplot.HooksManager,this.preParseSeriesOptionsHooks=new a.jqplot.HooksManager,this.postParseSeriesOptionsHooks=new a.jqplot.HooksManager,this.eventListenerHooks=new a.jqplot.EventListenerManager,this.preDrawSeriesShadowHooks=new a.jqplot.HooksManager,this.postDrawSeriesShadowHooks=new a.jqplot.HooksManager,this.colorGenerator=new a.jqplot.ColorGenerator,this.negativeColorGenerator=new a.jqplot.ColorGenerator,this.canvasManager=new a.jqplot.CanvasManager,this.themeEngine=new a.jqplot.ThemeEngine;this.init=function(c,d,e){e=e||{};for(var f=0;f<a.jqplot.preInitHooks.length;f++)a.jqplot.preInitHooks[f].call(this,c,d,e);for(var f=0;f<this.preInitHooks.hooks.length;f++)this.preInitHooks.hooks[f].call(this,c,d,e);if(this.targetId="#"+c,this.target=a("#"+c),this._addDomReference&&this.target.data("jqplot",this),this.target.removeClass("jqplot-error"),!this.target.get(0))throw new Error("No plot target specified");if("static"==this.target.css("position")&&this.target.css("position","relative"),this.target.hasClass("jqplot-target")||this.target.addClass("jqplot-target"),this.target.height())this._height=g=this.target.height();else{var g;g=e&&e.height?parseInt(e.height,10):this.target.attr("data-height")?parseInt(this.target.attr("data-height"),10):parseInt(a.jqplot.config.defaultHeight,10),this._height=g,this.target.css("height",g+"px")}if(this.target.width())this._width=i=this.target.width();else{var i;i=e&&e.width?parseInt(e.width,10):this.target.attr("data-width")?parseInt(this.target.attr("data-width"),10):parseInt(a.jqplot.config.defaultWidth,10),this._width=i,this.target.css("width",i+"px")}for(var f=0,j=G.length;j>f;f++)this.axes[G[f]]=new b(G[f]);if(this._plotDimensions.height=this._height,this._plotDimensions.width=this._width,this.grid._plotDimensions=this._plotDimensions,this.title._plotDimensions=this._plotDimensions,this.baseCanvas._plotDimensions=this._plotDimensions,this.eventCanvas._plotDimensions=this._plotDimensions,this.legend._plotDimensions=this._plotDimensions,this._height<=0||this._width<=0||!this._height||!this._width)throw new Error("Canvas dimension not set");if(e.dataRenderer&&a.isFunction(e.dataRenderer)&&(e.dataRendererOptions&&(this.dataRendererOptions=e.dataRendererOptions),this.dataRenderer=e.dataRenderer,d=this.dataRenderer(d,this,this.dataRendererOptions)),e.noDataIndicator&&a.isPlainObject(e.noDataIndicator)&&a.extend(!0,this.noDataIndicator,e.noDataIndicator),null==d||0==a.isArray(d)||0==d.length||0==a.isArray(d[0])||0==d[0].length){if(0==this.noDataIndicator.show)throw new Error("No data specified");for(var k in this.noDataIndicator.axes)for(var l in this.noDataIndicator.axes[k])this.axes[k][l]=this.noDataIndicator.axes[k][l];this.postDrawHooks.add(function(){var b=this.eventCanvas.getHeight(),c=this.eventCanvas.getWidth(),d=a('<div class="jqplot-noData-container" style="position:absolute;"></div>');this.target.append(d),d.height(b),d.width(c),d.css("top",this.eventCanvas._offsets.top),d.css("left",this.eventCanvas._offsets.left);var e=a('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');d.append(e),e.html(this.noDataIndicator.indicator);var f=e.height(),g=e.width();e.height(f),e.width(g),e.css("top",(b-f)/2+"px")})}this.data=a.extend(!0,[],d),this.parseOptions(e),this.textColor&&this.target.css("color",this.textColor),this.fontFamily&&this.target.css("font-family",this.fontFamily),this.fontSize&&this.target.css("font-size",this.fontSize),this.title.init(),this.legend.init(),this._sumy=0,this._sumx=0,this.computePlotData();for(var f=0;f<this.series.length;f++){this.seriesStack.push(f),this.previousSeriesStack.push(f),this.series[f].shadowCanvas._plotDimensions=this._plotDimensions,this.series[f].canvas._plotDimensions=this._plotDimensions;for(var m=0;m<a.jqplot.preSeriesInitHooks.length;m++)a.jqplot.preSeriesInitHooks[m].call(this.series[f],c,this.data,this.options.seriesDefaults,this.options.series[f],this);for(var m=0;m<this.preSeriesInitHooks.hooks.length;m++)this.preSeriesInitHooks.hooks[m].call(this.series[f],c,this.data,this.options.seriesDefaults,this.options.series[f],this);this.series[f]._plotDimensions=this._plotDimensions,this.series[f].init(f,this.grid.borderWidth,this);for(var m=0;m<a.jqplot.postSeriesInitHooks.length;m++)a.jqplot.postSeriesInitHooks[m].call(this.series[f],c,this.data,this.options.seriesDefaults,this.options.series[f],this);for(var m=0;m<this.postSeriesInitHooks.hooks.length;m++)this.postSeriesInitHooks.hooks[m].call(this.series[f],c,this.data,this.options.seriesDefaults,this.options.series[f],this);this._sumy+=this.series[f]._sumy,this._sumx+=this.series[f]._sumx}for(var n,o,f=0,j=G.length;j>f;f++)n=G[f],o=this.axes[n],o._plotDimensions=this._plotDimensions,o.init(),null==this.axes[n].borderColor&&("x"!==n.charAt(0)&&o.useSeriesColor===!0&&o.show?o.borderColor=o._series[0].color:o.borderColor=this.grid.borderColor);this.sortData&&h(this.series),this.grid.init(),this.grid._axes=this.axes,this.legend._series=this.series;for(var f=0;f<a.jqplot.postInitHooks.length;f++)a.jqplot.postInitHooks[f].call(this,c,this.data,e);for(var f=0;f<this.postInitHooks.hooks.length;f++)this.postInitHooks.hooks[f].call(this,c,this.data,e)},this.resetAxesScale=function(b,c){var d=c||{},e=b||this.axes;if(e===!0&&(e=this.axes),a.isArray(e))for(var f=0;f<e.length;f++)this.axes[e[f]].resetScale(d[e[f]]);else if("object"==typeof e)for(var g in e)this.axes[g].resetScale(d[g])},this.reInitialize=function(c,d){for(var e=a.extend(!0,{},this.options,d),f=this.targetId.substr(1),g=null==c?this.data:c,i=0;i<a.jqplot.preInitHooks.length;i++)a.jqplot.preInitHooks[i].call(this,f,g,e);for(var i=0;i<this.preInitHooks.hooks.length;i++)this.preInitHooks.hooks[i].call(this,f,g,e);if(this._height=this.target.height(),this._width=this.target.width(),this._height<=0||this._width<=0||!this._height||!this._width)throw new Error("Target dimension not set");this._plotDimensions.height=this._height,this._plotDimensions.width=this._width,this.grid._plotDimensions=this._plotDimensions,this.title._plotDimensions=this._plotDimensions,this.baseCanvas._plotDimensions=this._plotDimensions,this.eventCanvas._plotDimensions=this._plotDimensions,this.legend._plotDimensions=this._plotDimensions;for(var j,k,l,m,i=0,n=G.length;n>i;i++){j=G[i],m=this.axes[j],k=m._ticks;for(var l=0,o=k.length;o>l;l++){var p=k[l]._elem;p&&(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F&&window.G_vmlCanvasManager.uninitElement(p.get(0)),p.emptyForce(),p=null,k._elem=null)}k=null,delete m.ticks,delete m._ticks,this.axes[j]=new b(j),this.axes[j]._plotWidth=this._width,this.axes[j]._plotHeight=this._height}c&&(e.dataRenderer&&a.isFunction(e.dataRenderer)&&(e.dataRendererOptions&&(this.dataRendererOptions=e.dataRendererOptions),this.dataRenderer=e.dataRenderer,c=this.dataRenderer(c,this,this.dataRendererOptions)),this.data=a.extend(!0,[],c)),d&&this.parseOptions(e),this.title._plotWidth=this._width,this.textColor&&this.target.css("color",this.textColor),this.fontFamily&&this.target.css("font-family",this.fontFamily),this.fontSize&&this.target.css("font-size",this.fontSize),this.title.init(),this.legend.init(),this._sumy=0,this._sumx=0,this.seriesStack=[],this.previousSeriesStack=[],this.computePlotData();for(var i=0,n=this.series.length;n>i;i++){this.seriesStack.push(i),this.previousSeriesStack.push(i),this.series[i].shadowCanvas._plotDimensions=this._plotDimensions,this.series[i].canvas._plotDimensions=this._plotDimensions;for(var l=0;l<a.jqplot.preSeriesInitHooks.length;l++)a.jqplot.preSeriesInitHooks[l].call(this.series[i],f,this.data,this.options.seriesDefaults,this.options.series[i],this);for(var l=0;l<this.preSeriesInitHooks.hooks.length;l++)this.preSeriesInitHooks.hooks[l].call(this.series[i],f,this.data,this.options.seriesDefaults,this.options.series[i],this);this.series[i]._plotDimensions=this._plotDimensions,this.series[i].init(i,this.grid.borderWidth,this);for(var l=0;l<a.jqplot.postSeriesInitHooks.length;l++)a.jqplot.postSeriesInitHooks[l].call(this.series[i],f,this.data,this.options.seriesDefaults,this.options.series[i],this);for(var l=0;l<this.postSeriesInitHooks.hooks.length;l++)this.postSeriesInitHooks.hooks[l].call(this.series[i],f,this.data,this.options.seriesDefaults,this.options.series[i],this);this._sumy+=this.series[i]._sumy,this._sumx+=this.series[i]._sumx}for(var i=0,n=G.length;n>i;i++)j=G[i],m=this.axes[j],m._plotDimensions=this._plotDimensions,m.init(),null==m.borderColor&&("x"!==j.charAt(0)&&m.useSeriesColor===!0&&m.show?m.borderColor=m._series[0].color:m.borderColor=this.grid.borderColor);this.sortData&&h(this.series),this.grid.init(),this.grid._axes=this.axes,this.legend._series=this.series;for(var i=0,n=a.jqplot.postInitHooks.length;n>i;i++)a.jqplot.postInitHooks[i].call(this,f,this.data,e);for(var i=0,n=this.postInitHooks.hooks.length;n>i;i++)this.postInitHooks.hooks[i].call(this,f,this.data,e)},this.quickInit=function(){if(this._height=this.target.height(),this._width=this.target.width(),this._height<=0||this._width<=0||!this._height||!this._width)throw new Error("Target dimension not set");this._plotDimensions.height=this._height,this._plotDimensions.width=this._width,this.grid._plotDimensions=this._plotDimensions,this.title._plotDimensions=this._plotDimensions,this.baseCanvas._plotDimensions=this._plotDimensions,this.eventCanvas._plotDimensions=this._plotDimensions,this.legend._plotDimensions=this._plotDimensions;for(var b in this.axes)this.axes[b]._plotWidth=this._width,this.axes[b]._plotHeight=this._height;this.title._plotWidth=this._width,this.textColor&&this.target.css("color",this.textColor),this.fontFamily&&this.target.css("font-family",this.fontFamily),this.fontSize&&this.target.css("font-size",this.fontSize),this._sumy=0,this._sumx=0,this.computePlotData();for(var c=0;c<this.series.length;c++)"line"===this.series[c]._type&&this.series[c].renderer.bands.show&&this.series[c].renderer.initBands.call(this.series[c],this.series[c].renderer.options,this),this.series[c]._plotDimensions=this._plotDimensions,this.series[c].canvas._plotDimensions=this._plotDimensions,this._sumy+=this.series[c]._sumy,this._sumx+=this.series[c]._sumx;for(var d,e=0;12>e;e++){d=G[e];for(var f=this.axes[d]._ticks,c=0;c<f.length;c++){var g=f[c]._elem;g&&(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F&&window.G_vmlCanvasManager.uninitElement(g.get(0)),g.emptyForce(),g=null,f._elem=null)}f=null,this.axes[d]._plotDimensions=this._plotDimensions,this.axes[d]._ticks=[]}this.sortData&&h(this.series),this.grid._axes=this.axes,this.legend._series=this.series},this.computePlotData=function(){this._plotData=[],this._stackData=[];var b,c,d;for(c=0,d=this.series.length;d>c;c++){b=this.series[c],this._plotData.push([]),this._stackData.push([]);var e=b.data;this._plotData[c]=a.extend(!0,[],e),this._stackData[c]=a.extend(!0,[],e),b._plotData=this._plotData[c],b._stackData=this._stackData[c];var f={x:[],y:[]};if(this.stackSeries&&!b.disableStack){b._stack=!0;for(var g="x"===b._stackAxis?0:1,h=0,i=e.length;i>h;h++){var j=e[h][g];if(null==j&&(j=0),this._plotData[c][h][g]=j,this._stackData[c][h][g]=j,c>0)for(var k=c;k--;){var l=this._plotData[k][h][g];if(j*l>=0){this._plotData[c][h][g]+=l,this._stackData[c][h][g]+=l;break}}}}else{for(var m=0;m<b.data.length;m++)f.x.push(b.data[m][0]),f.y.push(b.data[m][1]);this._stackData.push(b.data),this.series[c]._stackData=b.data,this._plotData.push(b.data),b._plotData=b.data,b._plotValues=f}for(c>0&&(b._prevPlotData=this.series[c-1]._plotData),b._sumy=0,b._sumx=0,m=b.data.length-1;m>-1;m--)b._sumy+=b.data[m][1],b._sumx+=b.data[m][0]}},this.populatePlotData=function(b,c){this._plotData=[],this._stackData=[],b._stackData=[],b._plotData=[];var d={x:[],y:[]};if(this.stackSeries&&!b.disableStack){b._stack=!0;for(var e,f,g,h,i="x"===b._stackAxis?0:1,j=a.extend(!0,[],b.data),k=a.extend(!0,[],b.data),l=0;c>l;l++)for(var m=this.series[l].data,n=0;n<m.length;n++)g=m[n],e=null!=g[0]?g[0]:0,f=null!=g[1]?g[1]:0,j[n][0]+=e,j[n][1]+=f,h=i?f:e,b.data[n][i]*h>=0&&(k[n][i]+=h);for(var o=0;o<k.length;o++)d.x.push(k[o][0]),d.y.push(k[o][1]);this._plotData.push(k),this._stackData.push(j),b._stackData=j,b._plotData=k,b._plotValues=d}else{for(var o=0;o<b.data.length;o++)d.x.push(b.data[o][0]),d.y.push(b.data[o][1]);this._stackData.push(b.data),this.series[c]._stackData=b.data,this._plotData.push(b.data),b._plotData=b.data,b._plotValues=d}for(c>0&&(b._prevPlotData=this.series[c-1]._plotData),b._sumy=0,b._sumx=0,o=b.data.length-1;o>-1;o--)b._sumy+=b.data[o][1],b._sumx+=b.data[o][0]},this.getNextSeriesColor=function(a){var b=0,c=a.seriesColors;return function(){return b<c.length?c[b++]:(b=0,c[b++])}}(this),this.parseOptions=function(b){for(var c=0;c<this.preParseOptionsHooks.hooks.length;c++)this.preParseOptionsHooks.hooks[c].call(this,b);for(var c=0;c<a.jqplot.preParseOptionsHooks.length;c++)a.jqplot.preParseOptionsHooks[c].call(this,b);this.options=a.extend(!0,{},this.defaults,b);var d=this.options;if(this.animate=d.animate,this.animateReplot=d.animateReplot,this.stackSeries=d.stackSeries,a.isPlainObject(d.fillBetween))for(var f,g=["series1","series2","color","baseSeries","fill"],c=0,h=g.length;h>c;c++)f=g[c],null!=d.fillBetween[f]&&(this.fillBetween[f]=d.fillBetween[f]);d.seriesColors&&(this.seriesColors=d.seriesColors),d.negativeSeriesColors&&(this.negativeSeriesColors=d.negativeSeriesColors),d.captureRightClick&&(this.captureRightClick=d.captureRightClick),this.defaultAxisStart=b&&null!=b.defaultAxisStart?b.defaultAxisStart:this.defaultAxisStart,this.colorGenerator.setColors(this.seriesColors),this.negativeColorGenerator.setColors(this.negativeSeriesColors),a.extend(!0,this._gridPadding,d.gridPadding),this.sortData=null!=d.sortData?d.sortData:this.sortData;for(var c=0;12>c;c++){var i=G[c],j=this.axes[i];j._options=a.extend(!0,{},d.axesDefaults,d.axes[i]),a.extend(!0,j,d.axesDefaults,d.axes[i]),j._plotWidth=this._width,j._plotHeight=this._height}var k=function(b,c,d){var e,f,g=[];if(c=c||"vertical",a.isArray(b[0]))a.extend(!0,g,b);else for(e=0,f=b.length;f>e;e++)"vertical"==c?g.push([d+e,b[e]]):g.push([b[e],d+e]);return g};this.series=[];for(var c=0;c<this.data.length;c++){for(var l=a.extend(!0,{index:c},{seriesColors:this.seriesColors,negativeSeriesColors:this.negativeSeriesColors},this.options.seriesDefaults,this.options.series[c],{rendererOptions:{animation:{show:this.animate}}}),g=new e(l),m=0;m<a.jqplot.preParseSeriesOptionsHooks.length;m++)a.jqplot.preParseSeriesOptionsHooks[m].call(g,this.options.seriesDefaults,this.options.series[c]);for(var m=0;m<this.preParseSeriesOptionsHooks.hooks.length;m++)this.preParseSeriesOptionsHooks.hooks[m].call(g,this.options.seriesDefaults,this.options.series[c]);a.extend(!0,g,l);var n="vertical";switch(g.renderer===a.jqplot.BarRenderer&&g.rendererOptions&&"horizontal"==g.rendererOptions.barDirection&&(n="horizontal",g._stackAxis="x",g._primaryAxis="_yaxis"),g.data=k(this.data[c],n,this.defaultAxisStart),g.xaxis){case"xaxis":g._xaxis=this.axes.xaxis;break;case"x2axis":g._xaxis=this.axes.x2axis}g._yaxis=this.axes[g.yaxis],g._xaxis._series.push(g),g._yaxis._series.push(g),g.show?(g._xaxis.show=!0,g._yaxis.show=!0):(g._xaxis.scaleToHiddenSeries&&(g._xaxis.show=!0),g._yaxis.scaleToHiddenSeries&&(g._yaxis.show=!0)),g.label||(g.label="Series "+(c+1).toString()),this.series.push(g);for(var m=0;m<a.jqplot.postParseSeriesOptionsHooks.length;m++)a.jqplot.postParseSeriesOptionsHooks[m].call(this.series[c],this.options.seriesDefaults,this.options.series[c]);for(var m=0;m<this.postParseSeriesOptionsHooks.hooks.length;m++)this.postParseSeriesOptionsHooks.hooks[m].call(this.series[c],this.options.seriesDefaults,this.options.series[c])}a.extend(!0,this.grid,this.options.grid);for(var c=0,h=G.length;h>c;c++){var i=G[c],j=this.axes[i];null==j.borderWidth&&(j.borderWidth=this.grid.borderWidth)}"string"==typeof this.options.title?this.title.text=this.options.title:"object"==typeof this.options.title&&a.extend(!0,this.title,this.options.title),this.title._plotWidth=this._width,this.legend.setOptions(this.options.legend);for(var c=0;c<a.jqplot.postParseOptionsHooks.length;c++)a.jqplot.postParseOptionsHooks[c].call(this,b);for(var c=0;c<this.postParseOptionsHooks.hooks.length;c++)this.postParseOptionsHooks.hooks[c].call(this,b)},this.destroy=function(){this.canvasManager.freeAllCanvases(),this.eventCanvas&&this.eventCanvas._elem&&this.eventCanvas._elem.unbind(),this.target.empty(),this.target[0].innerHTML=""},this.replot=function(b){var c=b||{},d=c.data||null,e=c.clear===!1?!1:!0,f=c.resetAxes||!1;delete c.data,delete c.clear,delete c.resetAxes,this.target.trigger("jqplotPreReplot"),e&&this.destroy(),d||!a.isEmptyObject(c)?this.reInitialize(d,c):this.quickInit(),f&&this.resetAxesScale(f,c.axes),this.draw(),this.target.trigger("jqplotPostReplot")},this.redraw=function(a){a=null!=a?a:!0,this.target.trigger("jqplotPreRedraw"),a&&(this.canvasManager.freeAllCanvases(),this.eventCanvas._elem.unbind(),this.target.empty());for(var b in this.axes)this.axes[b]._ticks=[];this.computePlotData(),this._sumy=0,this._sumx=0;for(var c=0,d=this.series.length;d>c;c++)this._sumy+=this.series[c]._sumy,this._sumx+=this.series[c]._sumx;this.draw(),this.target.trigger("jqplotPostRedraw")},this.draw=function(){if(this.drawIfHidden||this.target.is(":visible")){this.target.trigger("jqplotPreDraw");var b,c,d;for(b=0,d=a.jqplot.preDrawHooks.length;d>b;b++)a.jqplot.preDrawHooks[b].call(this);for(b=0,d=this.preDrawHooks.hooks.length;d>b;b++)this.preDrawHooks.hooks[b].apply(this,this.preDrawSeriesHooks.args[b]);this.target.append(this.baseCanvas.createElement({left:0,right:0,top:0,bottom:0},"jqplot-base-canvas",null,this)),this.baseCanvas.setContext(),this.target.append(this.title.draw()),this.title.pack({top:0,left:0});var e=this.legend.draw({},this),f={top:0,left:0,bottom:0,right:0};if("outsideGrid"==this.legend.placement){switch(this.target.append(e),this.legend.location){case"n":f.top+=this.legend.getHeight();break;case"s":f.bottom+=this.legend.getHeight();break;case"ne":case"e":case"se":f.right+=this.legend.getWidth();break;case"nw":case"w":case"sw":f.left+=this.legend.getWidth();break;default:f.right+=this.legend.getWidth()}e=e.detach()}var g,h=this.axes;for(b=0;12>b;b++)g=G[b],this.target.append(h[g].draw(this.baseCanvas._ctx,this)),h[g].set();h.yaxis.show&&(f.left+=h.yaxis.getWidth());var i,j=["y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"],k=[0,0,0,0,0,0,0,0],l=0;for(i=0;8>i;i++)h[j[i]].show&&(l+=h[j[i]].getWidth(),k[i]=l);if(f.right+=l,h.x2axis.show&&(f.top+=h.x2axis.getHeight()),this.title.show&&(f.top+=this.title.getHeight()),h.xaxis.show&&(f.bottom+=h.xaxis.getHeight()),this.options.gridDimensions&&a.isPlainObject(this.options.gridDimensions)){var m=parseInt(this.options.gridDimensions.width,10)||0,n=parseInt(this.options.gridDimensions.height,10)||0,o=(this._width-f.left-f.right-m)/2,p=(this._height-f.top-f.bottom-n)/2;p>=0&&o>=0&&(f.top+=p,f.bottom+=p,f.left+=o,f.right+=o)}var q=["top","bottom","left","right"];for(var i in q)null==this._gridPadding[q[i]]&&f[q[i]]>0?this._gridPadding[q[i]]=f[q[i]]:null==this._gridPadding[q[i]]&&(this._gridPadding[q[i]]=this._defaultGridPadding[q[i]]);var r=this._gridPadding;for("outsideGrid"===this.legend.placement&&(r={top:this.title.getHeight(),left:0,right:0,bottom:0},"s"===this.legend.location&&(r.left=this._gridPadding.left,r.right=this._gridPadding.right)),h.xaxis.pack({position:"absolute",bottom:this._gridPadding.bottom-h.xaxis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right}),h.yaxis.pack({position:"absolute",top:0,left:this._gridPadding.left-h.yaxis.getWidth(),height:this._height},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top}),h.x2axis.pack({position:"absolute",top:this._gridPadding.top-h.x2axis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right}),b=8;b>0;b--)h[j[b-1]].pack({position:"absolute",top:0,right:this._gridPadding.right-k[b-1]},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});var s=(this._width-this._gridPadding.left-this._gridPadding.right)/2+this._gridPadding.left-h.yMidAxis.getWidth()/2;h.yMidAxis.pack({position:"absolute",top:0,left:s,zIndex:9,textAlign:"center"},{min:this._height-this._gridPadding.bottom,
max:this._gridPadding.top}),this.target.append(this.grid.createElement(this._gridPadding,this)),this.grid.draw();var t=this.series,u=t.length;for(b=0,d=u;d>b;b++)c=this.seriesStack[b],this.target.append(t[c].shadowCanvas.createElement(this._gridPadding,"jqplot-series-shadowCanvas",null,this)),t[c].shadowCanvas.setContext(),t[c].shadowCanvas._elem.data("seriesIndex",c);for(b=0,d=u;d>b;b++)c=this.seriesStack[b],this.target.append(t[c].canvas.createElement(this._gridPadding,"jqplot-series-canvas",null,this)),t[c].canvas.setContext(),t[c].canvas._elem.data("seriesIndex",c);this.target.append(this.eventCanvas.createElement(this._gridPadding,"jqplot-event-canvas",null,this)),this.eventCanvas.setContext(),this.eventCanvas._ctx.fillStyle="rgba(0,0,0,0)",this.eventCanvas._ctx.fillRect(0,0,this.eventCanvas._ctx.canvas.width,this.eventCanvas._ctx.canvas.height),this.bindCustomEvents(),this.legend.preDraw?(this.eventCanvas._elem.before(e),this.legend.pack(r),this.legend._elem?this.drawSeries({legendInfo:{location:this.legend.location,placement:this.legend.placement,width:this.legend.getWidth(),height:this.legend.getHeight(),xoffset:this.legend.xoffset,yoffset:this.legend.yoffset}}):this.drawSeries()):(this.drawSeries(),u&&a(t[u-1].canvas._elem).after(e),this.legend.pack(r));for(var b=0,d=a.jqplot.eventListenerHooks.length;d>b;b++)this.eventCanvas._elem.bind(a.jqplot.eventListenerHooks[b][0],{plot:this},a.jqplot.eventListenerHooks[b][1]);for(var b=0,d=this.eventListenerHooks.hooks.length;d>b;b++)this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[b][0],{plot:this},this.eventListenerHooks.hooks[b][1]);var v=this.fillBetween;if("number"==typeof v.series1)v.fill&&v.series1!==v.series2&&v.series1<u&&v.series2<u&&"line"===t[v.series1]._type&&"line"===t[v.series2]._type&&this.doFillBetweenLines();else if(null!=v.series1&&null!=v.series2){var w=!1;if(v.series1.length===v.series2.length)for(var x=0,y=0,z=0;z<v.series1.length;z++){if(x=v.series1[z],y=v.series2[z],!(x!==y&&u>x&&u>y&&"line"===t[x]._type&&"line"===t[y]._type)){w=!1;break}w=!0}v.fill&&w&&this.doFillBetweenLines()}for(var b=0,d=a.jqplot.postDrawHooks.length;d>b;b++)a.jqplot.postDrawHooks[b].call(this);for(var b=0,d=this.postDrawHooks.hooks.length;d>b;b++)this.postDrawHooks.hooks[b].apply(this,this.postDrawHooks.args[b]);this.target.is(":visible")&&(this._drawCount+=1);var A,B,C,D;for(b=0,d=u;d>b;b++)A=t[b],B=A.renderer,C=".jqplot-point-label.jqplot-series-"+b,B.animation&&B.animation._supported&&B.animation.show&&(this._drawCount<2||this.animateReplot)&&(D=this.target.find(C),D.stop(!0,!0).hide(),A.canvas._elem.stop(!0,!0).hide(),A.shadowCanvas._elem.stop(!0,!0).hide(),A.canvas._elem.jqplotEffect("blind",{mode:"show",direction:B.animation.direction},B.animation.speed),A.shadowCanvas._elem.jqplotEffect("blind",{mode:"show",direction:B.animation.direction},B.animation.speed),D.fadeIn(.8*B.animation.speed));D=null,this.target.trigger("jqplotPostDraw",[this])}},g.prototype.doFillBetweenLines=function(){function a(a,e){var f=c[a],g=c[e];if(g.renderer.smooth)var h=g.renderer._smoothedData.slice(0).reverse();else var h=g.gridData.slice(0).reverse();if(f.renderer.smooth)var i=f.renderer._smoothedData.concat(h);else var i=f.gridData.concat(h);var j=null!==b.color?b.color:c[d].fillColor,k=null!==b.baseSeries?b.baseSeries:a,l=c[k].renderer.shapeRenderer,m={fillStyle:j,fill:!0,closePath:!0};l.draw(f.shadowCanvas._ctx,i,m)}var b=this.fillBetween,c=this.series,d=b.series1,e=b.series2,f=0,g=0;if("number"==typeof d&&"number"==typeof e)f=e>d?d:e,g=e>d?e:d,a(f,g);else for(var h=0;h<d.length;h++)f=d[h]<e[h]?d[h]:e[h],g=e[h]>d[h]?e[h]:d[h],a(f,g)},this.bindCustomEvents=function(){this.eventCanvas._elem.bind("click",{plot:this},this.onClick),this.eventCanvas._elem.bind("dblclick",{plot:this},this.onDblClick),this.eventCanvas._elem.bind("mousedown",{plot:this},this.onMouseDown),this.eventCanvas._elem.bind("mousemove",{plot:this},this.onMouseMove),this.eventCanvas._elem.bind("mouseenter",{plot:this},this.onMouseEnter),this.eventCanvas._elem.bind("mouseleave",{plot:this},this.onMouseLeave),this.captureRightClick?(this.eventCanvas._elem.bind("mouseup",{plot:this},this.onRightClick),this.eventCanvas._elem.get(0).oncontextmenu=function(){return!1}):this.eventCanvas._elem.bind("mouseup",{plot:this},this.onMouseUp)},this.onClick=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d),f=a.Event("jqplotClick");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])},this.onDblClick=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d),f=a.Event("jqplotDblClick");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])},this.onMouseDown=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d),f=a.Event("jqplotMouseDown");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])},this.onMouseUp=function(b){var c=i(b),d=a.Event("jqplotMouseUp");d.pageX=b.pageX,d.pageY=b.pageY,a(this).trigger(d,[c.gridPos,c.dataPos,null,b.data.plot])},this.onRightClick=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d);if(d.captureRightClick)if(3==b.which){var f=a.Event("jqplotRightClick");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])}else{var f=a.Event("jqplotMouseUp");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])}},this.onMouseMove=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d),f=a.Event("jqplotMouseMove");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])},this.onMouseEnter=function(b){var c=i(b),d=b.data.plot,e=a.Event("jqplotMouseEnter");e.pageX=b.pageX,e.pageY=b.pageY,e.relatedTarget=b.relatedTarget,a(this).trigger(e,[c.gridPos,c.dataPos,null,d])},this.onMouseLeave=function(b){var c=i(b),d=b.data.plot,e=a.Event("jqplotMouseLeave");e.pageX=b.pageX,e.pageY=b.pageY,e.relatedTarget=b.relatedTarget,a(this).trigger(e,[c.gridPos,c.dataPos,null,d])},this.drawSeries=function(b,c){var d,e,f;if(c="number"==typeof b&&null==c?b:c,b="object"==typeof b?b:{},c!=F)e=this.series[c],f=e.shadowCanvas._ctx,f.clearRect(0,0,f.canvas.width,f.canvas.height),e.drawShadow(f,b,this),f=e.canvas._ctx,f.clearRect(0,0,f.canvas.width,f.canvas.height),e.draw(f,b,this),e.renderer.constructor==a.jqplot.BezierCurveRenderer&&c<this.series.length-1&&this.drawSeries(c+1);else for(d=0;d<this.series.length;d++)e=this.series[d],f=e.shadowCanvas._ctx,f.clearRect(0,0,f.canvas.width,f.canvas.height),e.drawShadow(f,b,this),f=e.canvas._ctx,f.clearRect(0,0,f.canvas.width,f.canvas.height),e.draw(f,b,this);b=c=d=e=f=null},this.moveSeriesToFront=function(b){b=parseInt(b,10);var c=a.inArray(b,this.seriesStack);if(-1!=c){if(c==this.seriesStack.length-1)return void(this.previousSeriesStack=this.seriesStack.slice(0));var d=this.seriesStack[this.seriesStack.length-1],e=this.series[b].canvas._elem.detach(),f=this.series[b].shadowCanvas._elem.detach();this.series[d].shadowCanvas._elem.after(f),this.series[d].canvas._elem.after(e),this.previousSeriesStack=this.seriesStack.slice(0),this.seriesStack.splice(c,1),this.seriesStack.push(b)}},this.moveSeriesToBack=function(b){b=parseInt(b,10);var c=a.inArray(b,this.seriesStack);if(0!=c&&-1!=c){var d=this.seriesStack[0],e=this.series[b].canvas._elem.detach(),f=this.series[b].shadowCanvas._elem.detach();this.series[d].shadowCanvas._elem.before(f),this.series[d].canvas._elem.before(e),this.previousSeriesStack=this.seriesStack.slice(0),this.seriesStack.splice(c,1),this.seriesStack.unshift(b)}},this.restorePreviousSeriesOrder=function(){var a,b,c,d,e,f;if(this.seriesStack!=this.previousSeriesStack){for(a=1;a<this.previousSeriesStack.length;a++)e=this.previousSeriesStack[a],f=this.previousSeriesStack[a-1],b=this.series[e].canvas._elem.detach(),c=this.series[e].shadowCanvas._elem.detach(),this.series[f].shadowCanvas._elem.after(c),this.series[f].canvas._elem.after(b);d=this.seriesStack.slice(0),this.seriesStack=this.previousSeriesStack.slice(0),this.previousSeriesStack=d}},this.restoreOriginalSeriesOrder=function(){var a,b,c,d=[];for(a=0;a<this.series.length;a++)d.push(a);if(this.seriesStack!=d)for(this.previousSeriesStack=this.seriesStack.slice(0),this.seriesStack=d,a=1;a<this.seriesStack.length;a++)b=this.series[a].canvas._elem.detach(),c=this.series[a].shadowCanvas._elem.detach(),this.series[a-1].shadowCanvas._elem.after(c),this.series[a-1].canvas._elem.after(b)},this.activateTheme=function(a){this.themeEngine.activate(this,a)}}function h(a,b){return(3.4182054+b)*Math.pow(a,-.3534992)}function i(a){var b=(Math.exp(2*a)-1)/(Math.exp(2*a)+1);return b}function j(a){function b(a,b){return a-b==0?Math.pow(10,10):a-b}var c=this.renderer.smooth,d=this.canvas.getWidth(),e=this._xaxis.series_p2u,f=this._yaxis.series_p2u,g=null,i=a.length/d,j=[],k=[];g=isNaN(parseFloat(c))?h(i,.5):parseFloat(c);for(var l=[],m=[],n=0,o=a.length;o>n;n++)l.push(a[n][1]),m.push(a[n][0]);for(var p,q,r,s,t=a.length-1,u=1,v=a.length;v>u;u++){for(var w=[],x=[],y=0;2>y;y++){var n=u-1+y;0==n||n==t?w[y]=Math.pow(10,10):l[n+1]-l[n]==0||l[n]-l[n-1]==0?w[y]=0:(m[n+1]-m[n])/(l[n+1]-l[n])+(m[n]-m[n-1])/(l[n]-l[n-1])==0?w[y]=0:(l[n+1]-l[n])*(l[n]-l[n-1])<0?w[y]=0:w[y]=2/(b(m[n+1],m[n])/(l[n+1]-l[n])+b(m[n],m[n-1])/(l[n]-l[n-1]))}1==u?w[0]=1.5*(l[1]-l[0])/b(m[1],m[0])-w[1]/2:u==t&&(w[1]=1.5*(l[t]-l[t-1])/b(m[t],m[t-1])-w[0]/2),x[0]=-2*(w[1]+2*w[0])/b(m[u],m[u-1])+6*(l[u]-l[u-1])/Math.pow(b(m[u],m[u-1]),2),x[1]=2*(2*w[1]+w[0])/b(m[u],m[u-1])-6*(l[u]-l[u-1])/Math.pow(b(m[u],m[u-1]),2),s=1/6*(x[1]-x[0])/b(m[u],m[u-1]),r=.5*(m[u]*x[0]-m[u-1]*x[1])/b(m[u],m[u-1]),q=(l[u]-l[u-1]-r*(Math.pow(m[u],2)-Math.pow(m[u-1],2))-s*(Math.pow(m[u],3)-Math.pow(m[u-1],3)))/b(m[u],m[u-1]),p=l[u-1]-q*m[u-1]-r*Math.pow(m[u-1],2)-s*Math.pow(m[u-1],3);for(var z,A,B=(m[u]-m[u-1])/g,y=0,o=g;o>y;y++)z=[],A=m[u-1]+y*B,z.push(A),z.push(p+q*A+r*Math.pow(A,2)+s*Math.pow(A,3)),j.push(z),k.push([e(z[0]),f(z[1])])}return j.push(a[n]),k.push([e(a[n][0]),f(a[n][1])]),[j,k]}function k(a){var b,c,d,e,f,g,j,k,l,m,n,o,p,q,r,s,t,u,v=this.renderer.smooth,w=this.renderer.tension,x=this.canvas.getWidth(),y=this._xaxis.series_p2u,z=this._yaxis.series_p2u,A=null,B=null,C=null,D=null,E=null,F=null,G=null,H=a.length/x,I=[],J=[];A=isNaN(parseFloat(v))?h(H,.5):parseFloat(v),isNaN(parseFloat(w))||(w=parseFloat(w));for(var K=0,L=a.length-1;L>K;K++)for(null===w?(E=Math.abs((a[K+1][1]-a[K][1])/(a[K+1][0]-a[K][0])),q=.3,r=.6,s=(r-q)/2,t=2.5,u=-1.4,G=E/t+u,C=s*i(G)-s*i(u)+q,K>0&&(F=Math.abs((a[K][1]-a[K-1][1])/(a[K][0]-a[K-1][0]))),G=F/t+u,D=s*i(G)-s*i(u)+q,B=(C+D)/2):B=w,b=0;A>b;b++)c=b/A,d=(1+2*c)*Math.pow(1-c,2),e=c*Math.pow(1-c,2),f=Math.pow(c,2)*(3-2*c),g=Math.pow(c,2)*(c-1),a[K-1]?(j=B*(a[K+1][0]-a[K-1][0]),k=B*(a[K+1][1]-a[K-1][1])):(j=B*(a[K+1][0]-a[K][0]),k=B*(a[K+1][1]-a[K][1])),a[K+2]?(l=B*(a[K+2][0]-a[K][0]),m=B*(a[K+2][1]-a[K][1])):(l=B*(a[K+1][0]-a[K][0]),m=B*(a[K+1][1]-a[K][1])),n=d*a[K][0]+f*a[K+1][0]+e*j+g*l,o=d*a[K][1]+f*a[K+1][1]+e*k+g*m,p=[n,o],I.push(p),J.push([y(n),z(o)]);return I.push(a[L]),J.push([y(a[L][0]),z(a[L][1])]),[I,J]}function l(b,c,d){for(var e=0;e<this.series.length;e++)this.series[e].renderer.constructor==a.jqplot.LineRenderer&&this.series[e].highlightMouseOver&&(this.series[e].highlightMouseDown=!1)}function m(){this.plugins.lineRenderer&&this.plugins.lineRenderer.highlightCanvas&&(this.plugins.lineRenderer.highlightCanvas.resetCanvas(),this.plugins.lineRenderer.highlightCanvas=null),this.plugins.lineRenderer.highlightedSeriesIndex=null,this.plugins.lineRenderer.highlightCanvas=new a.jqplot.GenericCanvas,this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-lineRenderer-highlight-canvas",this._plotDimensions,this)),this.plugins.lineRenderer.highlightCanvas.setContext(),this.eventCanvas._elem.bind("mouseleave",{plot:this},function(a){o(a.data.plot)})}function n(a,b,c,d){var e=a.series[b],f=a.plugins.lineRenderer.highlightCanvas;f._ctx.clearRect(0,0,f._ctx.canvas.width,f._ctx.canvas.height),e._highlightedPoint=c,a.plugins.lineRenderer.highlightedSeriesIndex=b;var g={fillStyle:e.highlightColor};"line"===e.type&&e.renderer.bands.show&&(g.fill=!0,g.closePath=!0),e.renderer.shapeRenderer.draw(f._ctx,d,g),f=null}function o(a){var b=a.plugins.lineRenderer.highlightCanvas;b._ctx.clearRect(0,0,b._ctx.canvas.width,b._ctx.canvas.height);for(var c=0;c<a.series.length;c++)a.series[c]._highlightedPoint=null;a.plugins.lineRenderer.highlightedSeriesIndex=null,a.target.trigger("jqplotDataUnhighlight"),b=null}function p(a,b,c,d,e){if(d){var f=[d.seriesIndex,d.pointIndex,d.data],g=jQuery.Event("jqplotDataMouseOver");if(g.pageX=a.pageX,g.pageY=a.pageY,e.target.trigger(g,f),e.series[f[0]].highlightMouseOver&&f[0]!=e.plugins.lineRenderer.highlightedSeriesIndex){var h=jQuery.Event("jqplotDataHighlight");h.which=a.which,h.pageX=a.pageX,h.pageY=a.pageY,e.target.trigger(h,f),n(e,d.seriesIndex,d.pointIndex,d.points)}}else null==d&&o(e)}function q(a,b,c,d,e){if(d){var f=[d.seriesIndex,d.pointIndex,d.data];if(e.series[f[0]].highlightMouseDown&&f[0]!=e.plugins.lineRenderer.highlightedSeriesIndex){var g=jQuery.Event("jqplotDataHighlight");g.which=a.which,g.pageX=a.pageX,g.pageY=a.pageY,e.target.trigger(g,f),n(e,d.seriesIndex,d.pointIndex,d.points)}}else null==d&&o(e)}function r(a,b,c,d,e){var f=e.plugins.lineRenderer.highlightedSeriesIndex;null!=f&&e.series[f].highlightMouseDown&&o(e)}function s(a,b,c,d,e){if(d){var f=[d.seriesIndex,d.pointIndex,d.data],g=jQuery.Event("jqplotDataClick");g.which=a.which,g.pageX=a.pageX,g.pageY=a.pageY,e.target.trigger(g,f)}}function t(a,b,c,d,e){if(d){var f=[d.seriesIndex,d.pointIndex,d.data],g=e.plugins.lineRenderer.highlightedSeriesIndex;null!=g&&e.series[g].highlightMouseDown&&o(e);var h=jQuery.Event("jqplotDataRightClick");h.which=a.which,h.pageX=a.pageX,h.pageY=a.pageY,e.target.trigger(h,f)}}function u(a){var b;if(a=Math.abs(a),a>=10)b="%d";else if(a>1)b=a===parseInt(a,10)?"%d":"%.1f";else{var c=-Math.floor(Math.log(a)/Math.LN10);b="%."+c+"f"}return b}function v(b,c,d){for(var e,f,g,h,i,j,k,l=Math.floor(d/2),m=Math.ceil(1.5*d),n=Number.MAX_VALUE,o=c-b,p=a.jqplot.getSignificantFigures,q=0,r=m-l+1;r>q;q++)j=l+q,e=o/(j-1),f=p(e),e=Math.abs(d-j)+f.digitsRight,n>e?(n=e,g=j,k=f.digitsRight):e===n&&f.digitsRight<k&&(g=j,k=f.digitsRight);return h=Math.max(k,Math.max(p(b).digitsRight,p(c).digitsRight)),i=0===h?"%d":"%."+h+"f",e=o/(g-1),[b,c,g,i,e]}function w(a,b){b=b||7;var c,d=a/(b-1),e=Math.pow(10,Math.floor(Math.log(d)/Math.LN10)),f=d/e;return c=1>e?f>5?10*e:f>2?5*e:f>1?2*e:e:f>5?10*e:f>4?5*e:f>3?4*e:f>2?3*e:f>1?2*e:e}function x(a,b){b=b||1;var c,d=Math.floor(Math.log(a)/Math.LN10),e=Math.pow(10,d),f=a/e;return f/=b,c=.38>=f?.1:1.6>=f?.2:4>=f?.5:8>=f?1:16>=f?2:5,c*e}function y(a,b){var c,d,e=Math.floor(Math.log(a)/Math.LN10),f=Math.pow(10,e),g=a/f;return g/=b,d=.38>=g?.1:1.6>=g?.2:4>=g?.5:8>=g?1:16>=g?2:5,c=d*f,[c,d,f]}function z(a,b){return a-b}function A(a){if(null==a||"object"!=typeof a)return a;var b=new a.constructor;for(var c in a)b[c]=A(a[c]);return b}function B(a,b){if(null!=b&&"object"==typeof b)for(var c in b)"highlightColors"==c&&(a[c]=A(b[c])),null!=b[c]&&"object"==typeof b[c]?(a.hasOwnProperty(c)||(a[c]={}),B(a[c],b[c])):a[c]=b[c]}function C(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1}function D(a){return null===a?"[object Null]":Object.prototype.toString.call(a)}function E(b,c,d,e){return a.isPlainObject(b)?b:(b={effect:b},c===F&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"===a.type(c)||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b)}var F;a.fn.emptyForce=function(){for(var b,c=0;null!=(b=a(this)[c]);c++){if(1===b.nodeType&&a.cleanData(b.getElementsByTagName("*")),a.jqplot.use_excanvas)b.outerHTML="";else for(;b.firstChild;)b.removeChild(b.firstChild);b=null}return a(this)},a.fn.removeChildForce=function(a){for(;a.firstChild;)this.removeChildForce(a.firstChild),a.removeChild(a.firstChild)},a.fn.jqplot=function(){for(var b=[],c=[],d=0,e=arguments.length;e>d;d++)a.isArray(arguments[d])?b.push(arguments[d]):a.isPlainObject(arguments[d])&&c.push(arguments[d]);return this.each(function(d){var e,f,g,h,i=a(this),j=b.length,k=c.length;g=j>d?b[d]:j?b[j-1]:null,h=k>d?c[d]:k?c[k-1]:null,e=i.attr("id"),e===F&&(e="jqplot_target_"+a.jqplot.targetCounter++,i.attr("id",e)),f=a.jqplot(e,g,h),i.data("jqplot",f)})},a.jqplot=function(b,c,d){var e=null,f=null;3===arguments.length?(e=c,f=d):2===arguments.length&&(a.isArray(c)?e=c:a.isPlainObject(c)&&(f=c)),null===e&&null!==f&&f.data&&(e=f.data);var h=new g;if(a("#"+b).removeClass("jqplot-error"),!a.jqplot.config.catchErrors)return h.init(b,e,f),h.draw(),h.themeEngine.init.call(h),h;try{return h.init(b,e,f),h.draw(),h.themeEngine.init.call(h),h}catch(i){var j=a.jqplot.config.errorMessage||i.message;a("#"+b).append('<div class="jqplot-error-message">'+j+"</div>"),a("#"+b).addClass("jqplot-error"),document.getElementById(b).style.background=a.jqplot.config.errorBackground,document.getElementById(b).style.border=a.jqplot.config.errorBorder,document.getElementById(b).style.fontFamily=a.jqplot.config.errorFontFamily,document.getElementById(b).style.fontSize=a.jqplot.config.errorFontSize,document.getElementById(b).style.fontStyle=a.jqplot.config.errorFontStyle,document.getElementById(b).style.fontWeight=a.jqplot.config.errorFontWeight}},a.jqplot.version="1.0.9",a.jqplot.revision="d96a669",a.jqplot.targetCounter=1,a.jqplot.CanvasManager=function(){"undefined"==typeof a.jqplot.CanvasManager.canvases&&(a.jqplot.CanvasManager.canvases=[],a.jqplot.CanvasManager.free=[]);var b=[];this.getCanvas=function(){var c,d=!0;if(!a.jqplot.use_excanvas)for(var e=0,f=a.jqplot.CanvasManager.canvases.length;f>e;e++)if(a.jqplot.CanvasManager.free[e]===!0){d=!1,c=a.jqplot.CanvasManager.canvases[e],a.jqplot.CanvasManager.free[e]=!1,b.push(e);break}return d&&(c=document.createElement("canvas"),b.push(a.jqplot.CanvasManager.canvases.length),a.jqplot.CanvasManager.canvases.push(c),a.jqplot.CanvasManager.free.push(!1)),c},this.initCanvas=function(b){if(a.jqplot.use_excanvas)return window.G_vmlCanvasManager.initElement(b);var c=b.getContext("2d"),d=1;window.devicePixelRatio>1&&(c.webkitBackingStorePixelRatio===F||c.webkitBackingStorePixelRatio<2)&&(d=window.devicePixelRatio);var e=b.width,f=b.height;return b.width=d*b.width,b.height=d*b.height,b.style.width=e+"px",b.style.height=f+"px",c.save(),c.scale(d,d),b},this.freeAllCanvases=function(){for(var a=0,c=b.length;c>a;a++)this.freeCanvas(b[a]);b=[]},this.freeCanvas=function(b){if(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F)window.G_vmlCanvasManager.uninitElement(a.jqplot.CanvasManager.canvases[b]),a.jqplot.CanvasManager.canvases[b]=null;else{var c=a.jqplot.CanvasManager.canvases[b];c.getContext("2d").clearRect(0,0,c.width,c.height),a(c).unbind().removeAttr("class").removeAttr("style"),a(c).css({left:"",top:"",position:""}),c.width=0,c.height=0,a.jqplot.CanvasManager.free[b]=!0}}},a.jqplot.log=function(){window.console&&window.console.log.apply(window.console,arguments)},a.jqplot.config={addDomReference:!1,enablePlugins:!1,defaultHeight:300,defaultWidth:400,UTCAdjust:!1,timezoneOffset:new Date(6e4*(new Date).getTimezoneOffset()),errorMessage:"",errorBackground:"",errorBorder:"",errorFontFamily:"",errorFontSize:"",errorFontStyle:"",errorFontWeight:"",catchErrors:!1,defaultTickFormatString:"%.1f",defaultColors:["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"],defaultNegativeColors:["#498991","#C08840","#9F9274","#546D61","#646C4A","#6F6621","#6E3F5F","#4F64B0","#A89050","#C45923","#187399","#945381","#959E5C","#C7AF7B","#478396","#907294"],dashLength:4,gapLength:4,dotGapLength:2.5,srcLocation:"jqplot/src/",pluginLocation:"jqplot/src/plugins/"},a.jqplot.arrayMax=function(a){return Math.max.apply(Math,a)},a.jqplot.arrayMin=function(a){return Math.min.apply(Math,a)},a.jqplot.enablePlugins=a.jqplot.config.enablePlugins,a.jqplot.support_canvas=function(){return"undefined"==typeof a.jqplot.support_canvas.result&&(a.jqplot.support_canvas.result=!!document.createElement("canvas").getContext),a.jqplot.support_canvas.result},a.jqplot.support_canvas_text=function(){return"undefined"==typeof a.jqplot.support_canvas_text.result&&(window.G_vmlCanvasManager!==F&&window.G_vmlCanvasManager._version>887?a.jqplot.support_canvas_text.result=!0:a.jqplot.support_canvas_text.result=!(!document.createElement("canvas").getContext||"function"!=typeof document.createElement("canvas").getContext("2d").fillText)),a.jqplot.support_canvas_text.result},a.jqplot.use_excanvas=a.support.boxModel&&a.support.objectAll&&$support.leadingWhitespace||a.jqplot.support_canvas()?!1:!0,a.jqplot.preInitHooks=[],a.jqplot.postInitHooks=[],a.jqplot.preParseOptionsHooks=[],a.jqplot.postParseOptionsHooks=[],a.jqplot.preDrawHooks=[],a.jqplot.postDrawHooks=[],a.jqplot.preDrawSeriesHooks=[],a.jqplot.postDrawSeriesHooks=[],a.jqplot.preDrawLegendHooks=[],a.jqplot.addLegendRowHooks=[],a.jqplot.preSeriesInitHooks=[],a.jqplot.postSeriesInitHooks=[],a.jqplot.preParseSeriesOptionsHooks=[],a.jqplot.postParseSeriesOptionsHooks=[],a.jqplot.eventListenerHooks=[],a.jqplot.preDrawSeriesShadowHooks=[],a.jqplot.postDrawSeriesShadowHooks=[],a.jqplot.ElemContainer=function(){this._elem,this._plotWidth,this._plotHeight,this._plotDimensions={height:null,width:null}},a.jqplot.ElemContainer.prototype.createElement=function(b,c,d,e,f){this._offsets=c;var g=d||"jqplot",h=document.createElement(b);return this._elem=a(h),this._elem.addClass(g),this._elem.css(e),this._elem.attr(f),h=null,this._elem},a.jqplot.ElemContainer.prototype.getWidth=function(){return this._elem?this._elem.outerWidth(!0):null},a.jqplot.ElemContainer.prototype.getHeight=function(){return this._elem?this._elem.outerHeight(!0):null},a.jqplot.ElemContainer.prototype.getPosition=function(){return this._elem?this._elem.position():{top:null,left:null,bottom:null,right:null}},a.jqplot.ElemContainer.prototype.getTop=function(){return this.getPosition().top},a.jqplot.ElemContainer.prototype.getLeft=function(){return this.getPosition().left},a.jqplot.ElemContainer.prototype.getBottom=function(){return this._elem.css("bottom")},a.jqplot.ElemContainer.prototype.getRight=function(){return this._elem.css("right")},b.prototype=new a.jqplot.ElemContainer,b.prototype.constructor=b,b.prototype.init=function(){a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.tickOptions.axis=this.name,null==this.tickOptions.showMark&&(this.tickOptions.showMark=this.showTicks),null==this.tickOptions.showMark&&(this.tickOptions.showMark=this.showTickMarks),null==this.tickOptions.showLabel&&(this.tickOptions.showLabel=this.showTicks),null==this.label||""==this.label?this.showLabel=!1:this.labelOptions.label=this.label,0==this.showLabel&&(this.labelOptions.show=!1),0==this.pad&&(this.pad=1),0==this.padMax&&(this.padMax=1),0==this.padMin&&(this.padMin=1),null==this.padMax&&(this.padMax=(this.pad-1)/2+1),null==this.padMin&&(this.padMin=(this.pad-1)/2+1),this.pad=this.padMax+this.padMin-1,(null!=this.min||null!=this.max)&&(this.autoscale=!1),null==this.syncTicks&&this.name.indexOf("y")>-1?this.syncTicks=!0:null==this.syncTicks&&(this.syncTicks=!1),this.renderer.init.call(this,this.rendererOptions)},b.prototype.draw=function(a,b){return this.__ticks&&(this.__ticks=null),this.renderer.draw.call(this,a,b)},b.prototype.set=function(){this.renderer.set.call(this)},b.prototype.pack=function(a,b){this.show&&this.renderer.pack.call(this,a,b),null==this._min&&(this._min=this.min,this._max=this.max,this._tickInterval=this.tickInterval,this._numberTicks=this.numberTicks,this.__ticks=this._ticks)},b.prototype.reset=function(){this.renderer.reset.call(this)},b.prototype.resetScale=function(b){a.extend(!0,this,{min:null,max:null,numberTicks:null,tickInterval:null,_ticks:[],ticks:[]},b),this.resetDataBounds()},b.prototype.resetDataBounds=function(){var b=this._dataBounds;b.min=null,b.max=null;for(var c,d,e,f=this.show?!0:!1,g=0;g<this._series.length;g++)if(d=this._series[g],d.show||this.scaleToHiddenSeries){e=d._plotData,"line"===d._type&&d.renderer.bands.show&&"x"!==this.name.charAt(0)&&(e=[[0,d.renderer.bands._min],[1,d.renderer.bands._max]]);var h=1,i=1;null!=d._type&&"ohlc"==d._type&&(h=3,i=2);for(var j=0,c=e.length;c>j;j++)"xaxis"==this.name||"x2axis"==this.name?((null!=e[j][0]&&e[j][0]<b.min||null==b.min)&&(b.min=e[j][0]),(null!=e[j][0]&&e[j][0]>b.max||null==b.max)&&(b.max=e[j][0])):((null!=e[j][h]&&e[j][h]<b.min||null==b.min)&&(b.min=e[j][h]),(null!=e[j][i]&&e[j][i]>b.max||null==b.max)&&(b.max=e[j][i]));f&&d.renderer.constructor!==a.jqplot.BarRenderer?f=!1:f&&this._options.hasOwnProperty("forceTickAt0")&&0==this._options.forceTickAt0?f=!1:f&&d.renderer.constructor===a.jqplot.BarRenderer&&("vertical"==d.barDirection&&"xaxis"!=this.name&&"x2axis"!=this.name?(null!=this._options.pad||null!=this._options.padMin)&&(f=!1):"horizontal"!=d.barDirection||"xaxis"!=this.name&&"x2axis"!=this.name||(null!=this._options.pad||null!=this._options.padMin)&&(f=!1))}f&&this.renderer.constructor===a.jqplot.LinearAxisRenderer&&b.min>=0&&(this.padMin=1,this.forceTickAt0=!0)},c.prototype=new a.jqplot.ElemContainer,c.prototype.constructor=c,c.prototype.setOptions=function(b){if(a.extend(!0,this,b),"inside"==this.placement&&(this.placement="insideGrid"),this.xoffset>0){if("insideGrid"==this.placement)switch(this.location){case"nw":case"w":case"sw":null==this.marginLeft&&(this.marginLeft=this.xoffset+"px"),this.marginRight="0px";break;case"ne":case"e":case"se":default:null==this.marginRight&&(this.marginRight=this.xoffset+"px"),this.marginLeft="0px"}else if("outside"==this.placement)switch(this.location){case"nw":case"w":case"sw":null==this.marginRight&&(this.marginRight=this.xoffset+"px"),this.marginLeft="0px";break;case"ne":case"e":case"se":default:null==this.marginLeft&&(this.marginLeft=this.xoffset+"px"),this.marginRight="0px"}this.xoffset=0}if(this.yoffset>0){if("outside"==this.placement)switch(this.location){case"sw":case"s":case"se":null==this.marginTop&&(this.marginTop=this.yoffset+"px"),this.marginBottom="0px";break;case"ne":case"n":case"nw":default:null==this.marginBottom&&(this.marginBottom=this.yoffset+"px"),this.marginTop="0px"}else if("insideGrid"==this.placement)switch(this.location){case"sw":case"s":case"se":null==this.marginBottom&&(this.marginBottom=this.yoffset+"px"),this.marginTop="0px";break;case"ne":case"n":case"nw":default:null==this.marginTop&&(this.marginTop=this.yoffset+"px"),this.marginBottom="0px"}this.yoffset=0}},c.prototype.init=function(){a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.renderer.init.call(this,this.rendererOptions)},c.prototype.draw=function(b,c){for(var d=0;d<a.jqplot.preDrawLegendHooks.length;d++)a.jqplot.preDrawLegendHooks[d].call(this,b);return this.renderer.draw.call(this,b,c)},c.prototype.pack=function(a){this.renderer.pack.call(this,a)},d.prototype=new a.jqplot.ElemContainer,d.prototype.constructor=d,d.prototype.init=function(){a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.renderer.init.call(this,this.rendererOptions)},d.prototype.draw=function(a){return this.renderer.draw.call(this,a)},d.prototype.pack=function(){this.renderer.pack.call(this)},e.prototype=new a.jqplot.ElemContainer,e.prototype.constructor=e,e.prototype.init=function(b,c,d){this.index=b,this.gridBorderWidth=c;var e,f,g=this.data,h=[];for(e=0,f=g.length;f>e;e++)if(this.breakOnNull)h.push(g[e]);else{if(null==g[e]||null==g[e][0]||null==g[e][1])continue;h.push(g[e])}if(this.data=h,this.color||(this.color=d.colorGenerator.get(this.index)),this.negativeColor||(this.negativeColor=d.negativeColorGenerator.get(this.index)),this.fillColor||(this.fillColor=this.color),this.fillAlpha){var i=a.jqplot.normalize2rgb(this.fillColor),i=a.jqplot.getColorComponents(i);this.fillColor="rgba("+i[0]+","+i[1]+","+i[2]+","+this.fillAlpha+")"}a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.renderer.init.call(this,this.rendererOptions,d),this.markerRenderer=new this.markerRenderer,this.markerOptions.color||(this.markerOptions.color=this.color),null==this.markerOptions.show&&(this.markerOptions.show=this.showMarker),this.showMarker=this.markerOptions.show,this.markerRenderer.init(this.markerOptions)},e.prototype.draw=function(b,c,d){var e=c==F?{}:c;b=b==F?this.canvas._ctx:b;var f,g,h;for(f=0;f<a.jqplot.preDrawSeriesHooks.length;f++)a.jqplot.preDrawSeriesHooks[f].call(this,b,e);for(this.show&&(this.renderer.setGridData.call(this,d),e.preventJqPlotSeriesDrawTrigger||a(b.canvas).trigger("jqplotSeriesDraw",[this.data,this.gridData]),g=[],g=e.data?e.data:this._stack?this._plotData:this.data,h=e.gridData||this.renderer.makeGridData.call(this,g,d),"line"===this._type&&this.renderer.smooth&&this.renderer._smoothedData.length&&(h=this.renderer._smoothedData),this.renderer.draw.call(this,b,h,e,d)),f=0;f<a.jqplot.postDrawSeriesHooks.length;f++)a.jqplot.postDrawSeriesHooks[f].call(this,b,e,d);b=c=d=f=g=h=null},e.prototype.drawShadow=function(b,c,d){var e=c==F?{}:c;b=b==F?this.shadowCanvas._ctx:b;var f,g,h;for(f=0;f<a.jqplot.preDrawSeriesShadowHooks.length;f++)a.jqplot.preDrawSeriesShadowHooks[f].call(this,b,e);for(this.shadow&&(this.renderer.setGridData.call(this,d),g=[],g=e.data?e.data:this._stack?this._plotData:this.data,h=e.gridData||this.renderer.makeGridData.call(this,g,d),this.renderer.drawShadow.call(this,b,h,e,d)),f=0;f<a.jqplot.postDrawSeriesShadowHooks.length;f++)a.jqplot.postDrawSeriesShadowHooks[f].call(this,b,e);b=c=d=f=g=h=null},e.prototype.toggleDisplay=function(a,b){var c,d;c=a.data.series?a.data.series:this,a.data.speed&&(d=a.data.speed),d?c.canvas._elem.is(":hidden")||!c.show?(c.show=!0,c.canvas._elem.removeClass("jqplot-series-hidden"),c.shadowCanvas._elem&&c.shadowCanvas._elem.fadeIn(d),c.canvas._elem.fadeIn(d,b),c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+c.index).fadeIn(d)):(c.show=!1,c.canvas._elem.addClass("jqplot-series-hidden"),c.shadowCanvas._elem&&c.shadowCanvas._elem.fadeOut(d),c.canvas._elem.fadeOut(d,b),c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+c.index).fadeOut(d)):c.canvas._elem.is(":hidden")||!c.show?(c.show=!0,c.canvas._elem.removeClass("jqplot-series-hidden"),c.shadowCanvas._elem&&c.shadowCanvas._elem.show(),c.canvas._elem.show(0,b),c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+c.index).show()):(c.show=!1,c.canvas._elem.addClass("jqplot-series-hidden"),c.shadowCanvas._elem&&c.shadowCanvas._elem.hide(),c.canvas._elem.hide(0,b),c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+c.index).hide())},f.prototype=new a.jqplot.ElemContainer,f.prototype.constructor=f,f.prototype.init=function(){a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.renderer.init.call(this,this.rendererOptions)},f.prototype.createElement=function(a,b){return this._offsets=a,this.renderer.createElement.call(this,b)},f.prototype.draw=function(){this.renderer.draw.call(this)},a.jqplot.GenericCanvas=function(){a.jqplot.ElemContainer.call(this),this._ctx},a.jqplot.GenericCanvas.prototype=new a.jqplot.ElemContainer,a.jqplot.GenericCanvas.prototype.constructor=a.jqplot.GenericCanvas,a.jqplot.GenericCanvas.prototype.createElement=function(b,c,d,e){this._offsets=b;var f="jqplot";c!=F&&(f=c);var g;return g=e.canvasManager.getCanvas(),null!=d&&(this._plotDimensions=d),g.width=this._plotDimensions.width-this._offsets.left-this._offsets.right,g.height=this._plotDimensions.height-this._offsets.top-this._offsets.bottom,this._elem=a(g),this._elem.css({position:"absolute",left:this._offsets.left,top:this._offsets.top}),this._elem.addClass(f),g=e.canvasManager.initCanvas(g),g=null,this._elem},a.jqplot.GenericCanvas.prototype.setContext=function(){return this._ctx=this._elem.get(0).getContext("2d"),this._ctx;
},a.jqplot.GenericCanvas.prototype.resetCanvas=function(){this._elem&&(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F&&window.G_vmlCanvasManager.uninitElement(this._elem.get(0)),this._elem.emptyForce()),this._ctx=null},a.jqplot.HooksManager=function(){this.hooks=[],this.args=[]},a.jqplot.HooksManager.prototype.addOnce=function(a,b){b=b||[];for(var c=!1,d=0,e=this.hooks.length;e>d;d++)this.hooks[d]==a&&(c=!0);c||(this.hooks.push(a),this.args.push(b))},a.jqplot.HooksManager.prototype.add=function(a,b){b=b||[],this.hooks.push(a),this.args.push(b)},a.jqplot.EventListenerManager=function(){this.hooks=[]},a.jqplot.EventListenerManager.prototype.addOnce=function(a,b){for(var c,d,e=!1,d=0,f=this.hooks.length;f>d;d++)c=this.hooks[d],c[0]==a&&c[1]==b&&(e=!0);e||this.hooks.push([a,b])},a.jqplot.EventListenerManager.prototype.add=function(a,b){this.hooks.push([a,b])};var G=["yMidAxis","xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];a.jqplot.computeHighlightColors=function(b){var c;if(a.isArray(b)){c=[];for(var d=0;d<b.length;d++){for(var e=a.jqplot.getColorComponents(b[d]),f=[e[0],e[1],e[2]],g=f[0]+f[1]+f[2],h=0;3>h;h++)f[h]=g>660?.85*f[h]:.73*f[h]+90,f[h]=parseInt(f[h],10),f[h]>255?255:f[h];f[3]=.3+.35*e[3],c.push("rgba("+f[0]+","+f[1]+","+f[2]+","+f[3]+")")}}else{for(var e=a.jqplot.getColorComponents(b),f=[e[0],e[1],e[2]],g=f[0]+f[1]+f[2],h=0;3>h;h++)f[h]=g>660?.85*f[h]:.73*f[h]+90,f[h]=parseInt(f[h],10),f[h]>255?255:f[h];f[3]=.3+.35*e[3],c="rgba("+f[0]+","+f[1]+","+f[2]+","+f[3]+")"}return c},a.jqplot.ColorGenerator=function(b){b=b||a.jqplot.config.defaultColors;var c=0;this.next=function(){return c<b.length?b[c++]:(c=0,b[c++])},this.previous=function(){return c>0?b[c--]:(c=b.length-1,b[c])},this.get=function(a){var c=a-b.length*Math.floor(a/b.length);return b[c]},this.setColors=function(a){b=a},this.reset=function(){c=0},this.getIndex=function(){return c},this.setIndex=function(a){c=a}},a.jqplot.hex2rgb=function(a,b){a=a.replace("#",""),3==a.length&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2));var c;return c="rgba("+parseInt(a.slice(0,2),16)+", "+parseInt(a.slice(2,4),16)+", "+parseInt(a.slice(4,6),16),b&&(c+=", "+b),c+=")"},a.jqplot.rgb2hex=function(a){for(var b=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/,c=a.match(b),d="#",e=1;4>e;e++){var f;-1!=c[e].search(/%/)?(f=parseInt(255*c[e]/100,10).toString(16),1==f.length&&(f="0"+f)):(f=parseInt(c[e],10).toString(16),1==f.length&&(f="0"+f)),d+=f}return d},a.jqplot.normalize2rgb=function(b,c){if(-1!=b.search(/^ *rgba?\(/))return b;if(-1!=b.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/))return a.jqplot.hex2rgb(b,c);throw new Error("Invalid color spec")},a.jqplot.getColorComponents=function(b){b=a.jqplot.colorKeywordMap[b]||b;for(var c=a.jqplot.normalize2rgb(b),d=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/,e=c.match(d),f=[],g=1;4>g;g++)-1!=e[g].search(/%/)?f[g-1]=parseInt(255*e[g]/100,10):f[g-1]=parseInt(e[g],10);return f[3]=parseFloat(e[4])?parseFloat(e[4]):1,f},a.jqplot.colorKeywordMap={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb( 0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb( 0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb( 0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb( 95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(220, 20, 60)",cyan:"rgb( 0, 255, 255)",darkblue:"rgb( 0, 0, 139)",darkcyan:"rgb( 0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgreen:"rgb( 0, 100, 0)",darkgrey:"rgb(169, 169, 169)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb( 85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb( 72, 61, 139)",darkslategray:"rgb( 47, 79, 79)",darkslategrey:"rgb( 47, 79, 79)",darkturquoise:"rgb( 0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb( 0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb( 30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb( 34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb( 0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb( 75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgray:"rgb(211, 211, 211)",lightgreen:"rgb(144, 238, 144)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb( 32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb( 0, 255, 0)",limegreen:"rgb( 50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb( 0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb( 60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb( 0, 250, 154)",mediumturquoise:"rgb( 72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb( 25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb( 0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb( 65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb( 46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb( 0, 255, 127)",steelblue:"rgb( 70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb( 0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb( 64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)"},a.jqplot.AxisLabelRenderer=function(b){a.jqplot.ElemContainer.call(this),this.axis,this.show=!0,this.label="",this.fontFamily=null,this.fontSize=null,this.textColor=null,this._elem,this.escapeHTML=!1,a.extend(!0,this,b)},a.jqplot.AxisLabelRenderer.prototype=new a.jqplot.ElemContainer,a.jqplot.AxisLabelRenderer.prototype.constructor=a.jqplot.AxisLabelRenderer,a.jqplot.AxisLabelRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.AxisLabelRenderer.prototype.draw=function(b,c){return this._elem&&(this._elem.emptyForce(),this._elem=null),this._elem=a('<div style="position:absolute;" class="jqplot-'+this.axis+'-label"></div>'),Number(this.label)&&this._elem.css("white-space","nowrap"),this.escapeHTML?this._elem.text(this.label):this._elem.html(this.label),this.fontFamily&&this._elem.css("font-family",this.fontFamily),this.fontSize&&this._elem.css("font-size",this.fontSize),this.textColor&&this._elem.css("color",this.textColor),this._elem},a.jqplot.AxisLabelRenderer.prototype.pack=function(){},a.jqplot.AxisTickRenderer=function(b){a.jqplot.ElemContainer.call(this),this.mark="outside",this.axis,this.showMark=!0,this.showGridline=!0,this.isMinorTick=!1,this.size=4,this.markSize=6,this.show=!0,this.showLabel=!0,this.label=null,this.value=null,this._styles={},this.formatter=a.jqplot.DefaultTickFormatter,this.prefix="",this.suffix="",this.formatString="",this.fontFamily,this.fontSize,this.textColor,this.escapeHTML=!1,this._elem,this._breakTick=!1,a.extend(!0,this,b)},a.jqplot.AxisTickRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.AxisTickRenderer.prototype=new a.jqplot.ElemContainer,a.jqplot.AxisTickRenderer.prototype.constructor=a.jqplot.AxisTickRenderer,a.jqplot.AxisTickRenderer.prototype.setTick=function(a,b,c){return this.value=a,this.axis=b,c&&(this.isMinorTick=!0),this},a.jqplot.AxisTickRenderer.prototype.draw=function(){null===this.label&&(this.label=this.prefix+this.formatter(this.formatString,this.value)+this.suffix);var b={position:"absolute"};Number(this.label)&&(b.whitSpace="nowrap"),this._elem&&(this._elem.emptyForce(),this._elem=null),this._elem=a(document.createElement("div")),this._elem.addClass("jqplot-"+this.axis+"-tick"),this.escapeHTML?this._elem.text(this.label):this._elem.html(this.label),this._elem.css(b);for(var c in this._styles)this._elem.css(c,this._styles[c]);return this.fontFamily&&this._elem.css("font-family",this.fontFamily),this.fontSize&&this._elem.css("font-size",this.fontSize),this.textColor&&this._elem.css("color",this.textColor),this._breakTick&&this._elem.addClass("jqplot-breakTick"),this._elem},a.jqplot.DefaultTickFormatter=function(b,c){return"number"==typeof c?(b||(b=a.jqplot.config.defaultTickFormatString),a.jqplot.sprintf(b,c)):String(c)},a.jqplot.PercentTickFormatter=function(b,c){return"number"==typeof c?(c=100*c,b||(b=a.jqplot.config.defaultTickFormatString),a.jqplot.sprintf(b,c)):String(c)},a.jqplot.AxisTickRenderer.prototype.pack=function(){},a.jqplot.CanvasGridRenderer=function(){this.shadowRenderer=new a.jqplot.ShadowRenderer},a.jqplot.CanvasGridRenderer.prototype.init=function(b){this._ctx,a.extend(!0,this,b);var c={lineJoin:"miter",lineCap:"round",fill:!1,isarc:!1,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.shadowWidth,closePath:!1,strokeStyle:this.shadowColor};this.renderer.shadowRenderer.init(c)},a.jqplot.CanvasGridRenderer.prototype.createElement=function(b){var c;this._elem&&(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F&&(c=this._elem.get(0),window.G_vmlCanvasManager.uninitElement(c),c=null),this._elem.emptyForce(),this._elem=null),c=b.canvasManager.getCanvas();var d=this._plotDimensions.width,e=this._plotDimensions.height;return c.width=d,c.height=e,this._elem=a(c),this._elem.addClass("jqplot-grid-canvas"),this._elem.css({position:"absolute",left:0,top:0}),c=b.canvasManager.initCanvas(c),this._top=this._offsets.top,this._bottom=e-this._offsets.bottom,this._left=this._offsets.left,this._right=d-this._offsets.right,this._width=this._right-this._left,this._height=this._bottom-this._top,c=null,this._elem},a.jqplot.CanvasGridRenderer.prototype.draw=function(){function b(b,d,e,f,g){c.save(),g=g||{},(null==g.lineWidth||0!=g.lineWidth)&&(a.extend(!0,c,g),c.beginPath(),c.moveTo(b,d),c.lineTo(e,f),c.stroke(),c.restore())}this._ctx=this._elem.get(0).getContext("2d");var c=this._ctx,d=this._axes;c.save(),c.clearRect(0,0,this._plotDimensions.width,this._plotDimensions.height),c.fillStyle=this.backgroundColor||this.background,c.fillRect(this._left,this._top,this._width,this._height),c.save(),c.lineJoin="miter",c.lineCap="butt",c.lineWidth=this.gridLineWidth,c.strokeStyle=this.gridLineColor;for(var e,f,g,h,i=["xaxis","yaxis","x2axis","y2axis"],j=4;j>0;j--){var k=i[j-1],l=d[k],m=l._ticks,n=m.length;if(l.show){if(l.drawBaseline){var o={};switch(null!==l.baselineWidth&&(o.lineWidth=l.baselineWidth),null!==l.baselineColor&&(o.strokeStyle=l.baselineColor),k){case"xaxis":b(this._left,this._bottom,this._right,this._bottom,o);break;case"yaxis":b(this._left,this._bottom,this._left,this._top,o);break;case"x2axis":b(this._left,this._bottom,this._right,this._bottom,o);break;case"y2axis":b(this._right,this._bottom,this._right,this._top,o)}}for(var p=n;p>0;p--){var q=m[p-1];if(q.show){var r=Math.round(l.u2p(q.value))+.5;switch(k){case"xaxis":if(q.showGridline&&this.drawGridlines&&(!q.isMinorTick&&l.drawMajorGridlines||q.isMinorTick&&l.drawMinorGridlines)&&b(r,this._top,r,this._bottom),q.showMark&&q.mark&&(!q.isMinorTick&&l.drawMajorTickMarks||q.isMinorTick&&l.drawMinorTickMarks)){g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;switch(h){case"outside":e=this._bottom,f=this._bottom+g;break;case"inside":e=this._bottom-g,f=this._bottom;break;case"cross":e=this._bottom-g,f=this._bottom+g;break;default:e=this._bottom,f=this._bottom+g}this.shadow&&this.renderer.shadowRenderer.draw(c,[[r,e],[r,f]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:.75*this.gridLineWidth,depth:2,fill:!1,closePath:!1}),b(r,e,r,f)}break;case"yaxis":if(q.showGridline&&this.drawGridlines&&(!q.isMinorTick&&l.drawMajorGridlines||q.isMinorTick&&l.drawMinorGridlines)&&b(this._right,r,this._left,r),q.showMark&&q.mark&&(!q.isMinorTick&&l.drawMajorTickMarks||q.isMinorTick&&l.drawMinorTickMarks)){g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;switch(h){case"outside":e=this._left-g,f=this._left;break;case"inside":e=this._left,f=this._left+g;break;case"cross":e=this._left-g,f=this._left+g;break;default:e=this._left-g,f=this._left}this.shadow&&this.renderer.shadowRenderer.draw(c,[[e,r],[f,r]],{lineCap:"butt",lineWidth:1.5*this.gridLineWidth,offset:.75*this.gridLineWidth,fill:!1,closePath:!1}),b(e,r,f,r,{strokeStyle:l.borderColor})}break;case"x2axis":if(q.showGridline&&this.drawGridlines&&(!q.isMinorTick&&l.drawMajorGridlines||q.isMinorTick&&l.drawMinorGridlines)&&b(r,this._bottom,r,this._top),q.showMark&&q.mark&&(!q.isMinorTick&&l.drawMajorTickMarks||q.isMinorTick&&l.drawMinorTickMarks)){g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;switch(h){case"outside":e=this._top-g,f=this._top;break;case"inside":e=this._top,f=this._top+g;break;case"cross":e=this._top-g,f=this._top+g;break;default:e=this._top-g,f=this._top}this.shadow&&this.renderer.shadowRenderer.draw(c,[[r,e],[r,f]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:.75*this.gridLineWidth,depth:2,fill:!1,closePath:!1}),b(r,e,r,f)}break;case"y2axis":if(q.showGridline&&this.drawGridlines&&(!q.isMinorTick&&l.drawMajorGridlines||q.isMinorTick&&l.drawMinorGridlines)&&b(this._left,r,this._right,r),q.showMark&&q.mark&&(!q.isMinorTick&&l.drawMajorTickMarks||q.isMinorTick&&l.drawMinorTickMarks)){g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;switch(h){case"outside":e=this._right,f=this._right+g;break;case"inside":e=this._right-g,f=this._right;break;case"cross":e=this._right-g,f=this._right+g;break;default:e=this._right,f=this._right+g}this.shadow&&this.renderer.shadowRenderer.draw(c,[[e,r],[f,r]],{lineCap:"butt",lineWidth:1.5*this.gridLineWidth,offset:.75*this.gridLineWidth,fill:!1,closePath:!1}),b(e,r,f,r,{strokeStyle:l.borderColor})}}}}q=null}l=null,m=null}i=["y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis","yMidAxis"];for(var j=7;j>0;j--){var l=d[i[j-1]],m=l._ticks;if(l.show){var s=m[l.numberTicks-1],t=m[0],u=l.getLeft(),v=[[u,s.getTop()+s.getHeight()/2],[u,t.getTop()+t.getHeight()/2+1]];this.shadow&&this.renderer.shadowRenderer.draw(c,v,{lineCap:"butt",fill:!1,closePath:!1}),b(v[0][0],v[0][1],v[1][0],v[1][1],{lineCap:"butt",strokeStyle:l.borderColor,lineWidth:l.borderWidth});for(var p=m.length;p>0;p--){var q=m[p-1];g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;if(q.showMark&&q.mark){switch(h){case"outside":e=u,f=u+g;break;case"inside":e=u-g,f=u;break;case"cross":e=u-g,f=u+g;break;default:e=u,f=u+g}v=[[e,r],[f,r]],this.shadow&&this.renderer.shadowRenderer.draw(c,v,{lineCap:"butt",lineWidth:1.5*this.gridLineWidth,offset:.75*this.gridLineWidth,fill:!1,closePath:!1}),b(e,r,f,r,{strokeStyle:l.borderColor})}q=null}t=null}l=null,m=null}if(c.restore(),this.shadow){var v=[[this._left,this._bottom],[this._right,this._bottom],[this._right,this._top]];this.renderer.shadowRenderer.draw(c,v)}0!=this.borderWidth&&this.drawBorder&&(b(this._left,this._top,this._right,this._top,{lineCap:"round",strokeStyle:d.x2axis.borderColor,lineWidth:d.x2axis.borderWidth}),b(this._right,this._top,this._right,this._bottom,{lineCap:"round",strokeStyle:d.y2axis.borderColor,lineWidth:d.y2axis.borderWidth}),b(this._right,this._bottom,this._left,this._bottom,{lineCap:"round",strokeStyle:d.xaxis.borderColor,lineWidth:d.xaxis.borderWidth}),b(this._left,this._bottom,this._left,this._top,{lineCap:"round",strokeStyle:d.yaxis.borderColor,lineWidth:d.yaxis.borderWidth})),c.restore(),c=null,d=null},a.jqplot.DivTitleRenderer=function(){},a.jqplot.DivTitleRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.DivTitleRenderer.prototype.draw=function(){this._elem&&(this._elem.emptyForce(),this._elem=null);var b=(this.renderer,document.createElement("div"));if(this._elem=a(b),this._elem.addClass("jqplot-title"),this.text){if(this.text){var c;this.color?c=this.color:this.textColor&&(c=this.textColor);var d={position:"absolute",top:"0px",left:"0px"};this._plotWidth&&(d.width=this._plotWidth+"px"),this.fontSize&&(d.fontSize=this.fontSize),"string"==typeof this.textAlign?d.textAlign=this.textAlign:d.textAlign="center",c&&(d.color=c),this.paddingBottom&&(d.paddingBottom=this.paddingBottom),this.fontFamily&&(d.fontFamily=this.fontFamily),this._elem.css(d),this.escapeHtml?this._elem.text(this.text):this._elem.html(this.text)}}else this.show=!1,this._elem.height(0),this._elem.width(0);return b=null,this._elem},a.jqplot.DivTitleRenderer.prototype.pack=function(){};var H=.1;a.jqplot.LinePattern=function(b,c){var d={dotted:[H,a.jqplot.config.dotGapLength],dashed:[a.jqplot.config.dashLength,a.jqplot.config.gapLength],solid:null};if("string"==typeof c)if("."===c[0]||"-"===c[0]){var e=c;c=[];for(var f=0,g=e.length;g>f;f++){if("."===e[f])c.push(H);else{if("-"!==e[f])continue;c.push(a.jqplot.config.dashLength)}c.push(a.jqplot.config.gapLength)}}else c=d[c];if(!c||!c.length)return b;var h=0,i=c[0],j=0,k=0,l=0,m=0,n=function(a,c){b.moveTo(a,c),j=a,k=c,l=a,m=c},o=function(a,d){var e=b.lineWidth,f=a-j,g=d-k,l=Math.sqrt(f*f+g*g);if(l>0&&e>0)for(f/=l,g/=l;;){var m=e*i;if(!(l>m)){j=a,k=d,0==(1&h)?b.lineTo(j,k):b.moveTo(j,k),i-=l/e;break}j+=m*f,k+=m*g,0==(1&h)?b.lineTo(j,k):b.moveTo(j,k),l-=m,h++,h>=c.length&&(h=0),i=c[h]}},p=function(){b.beginPath()},q=function(){o(l,m)};return{moveTo:n,lineTo:o,beginPath:p,closePath:q}},a.jqplot.LineRenderer=function(){this.shapeRenderer=new a.jqplot.ShapeRenderer,this.shadowRenderer=new a.jqplot.ShadowRenderer},a.jqplot.LineRenderer.prototype.init=function(b,c){b=b||{},this._type="line",this.renderer.animation={show:!1,direction:"left",speed:2500,_supported:!0},this.renderer.smooth=!1,this.renderer.tension=null,this.renderer.constrainSmoothing=!0,this.renderer._smoothedData=[],this.renderer._smoothedPlotData=[],this.renderer._hiBandGridData=[],this.renderer._lowBandGridData=[],this.renderer._hiBandSmoothedData=[],this.renderer._lowBandSmoothedData=[],this.renderer.bandData=[],this.renderer.bands={show:!1,hiData:[],lowData:[],color:this.color,showLines:!1,fill:!0,fillColor:null,_min:null,_max:null,interval:"3%"};var d={highlightMouseOver:b.highlightMouseOver,highlightMouseDown:b.highlightMouseDown,highlightColor:b.highlightColor};delete b.highlightMouseOver,delete b.highlightMouseDown,delete b.highlightColor,a.extend(!0,this.renderer,b),this.renderer.options=b,this.renderer.bandData.length>1&&(!b.bands||null==b.bands.show)?this.renderer.bands.show=!0:b.bands&&null==b.bands.show&&null!=b.bands.interval&&(this.renderer.bands.show=!0),this.fill&&(this.renderer.bands.show=!1),this.renderer.bands.show&&this.renderer.initBands.call(this,this.renderer.options,c),this._stack&&(this.renderer.smooth=!1);var e={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:!1,strokeStyle:this.color,fillStyle:this.fillColor,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};this.renderer.shapeRenderer.init(e);var f=b.shadowOffset;null==f&&(f=this.lineWidth>2.5?1.25*(1+.6*(Math.atan(this.lineWidth/2.5)/.785398163-1)):1.25*Math.atan(this.lineWidth/2.5)/.785398163);var g={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:!1,angle:this.shadowAngle,offset:f,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};if(this.renderer.shadowRenderer.init(g),this._areaPoints=[],this._boundingBox=[[],[]],!this.isTrendline&&this.fill||this.renderer.bands.show){if(this.highlightMouseOver=!0,this.highlightMouseDown=!1,this.highlightColor=null,d.highlightMouseDown&&null==d.highlightMouseOver&&(d.highlightMouseOver=!1),a.extend(!0,this,{highlightMouseOver:d.highlightMouseOver,highlightMouseDown:d.highlightMouseDown,highlightColor:d.highlightColor}),!this.highlightColor){var h=this.renderer.bands.show?this.renderer.bands.fillColor:this.fillColor;this.highlightColor=a.jqplot.computeHighlightColors(h)}this.highlighter&&(this.highlighter.show=!1)}!this.isTrendline&&c&&(c.plugins.lineRenderer={},c.postInitHooks.addOnce(l),c.postDrawHooks.addOnce(m),c.eventListenerHooks.addOnce("jqplotMouseMove",p),c.eventListenerHooks.addOnce("jqplotMouseDown",q),c.eventListenerHooks.addOnce("jqplotMouseUp",r),c.eventListenerHooks.addOnce("jqplotClick",s),c.eventListenerHooks.addOnce("jqplotRightClick",t))},a.jqplot.LineRenderer.prototype.initBands=function(b,c){var d=b.bandData||[],e=this.renderer.bands;e.hiData=[],e.lowData=[];var f=this.data;if(e._max=null,e._min=null,2==d.length)if(a.isArray(d[0][0])){for(var g,h=0,i=0,j=0,k=d[0].length;k>j;j++)g=d[0][j],(null!=g[1]&&g[1]>e._max||null==e._max)&&(e._max=g[1]),(null!=g[1]&&g[1]<e._min||null==e._min)&&(e._min=g[1]);for(var j=0,k=d[1].length;k>j;j++)g=d[1][j],(null!=g[1]&&g[1]>e._max||null==e._max)&&(e._max=g[1],i=1),(null!=g[1]&&g[1]<e._min||null==e._min)&&(e._min=g[1],h=1);i===h&&(e.show=!1),e.hiData=d[i],e.lowData=d[h]}else if(d[0].length===f.length&&d[1].length===f.length)for(var l=d[0][0]>d[1][0]?0:1,m=l?0:1,j=0,k=f.length;k>j;j++)e.hiData.push([f[j][0],d[l][j]]),e.lowData.push([f[j][0],d[m][j]]);else e.show=!1;else if(d.length>2&&!a.isArray(d[0][0]))for(var l=d[0][0]>d[0][1]?0:1,m=l?0:1,j=0,k=d.length;k>j;j++)e.hiData.push([f[j][0],d[j][l]]),e.lowData.push([f[j][0],d[j][m]]);else{var n=e.interval,o=null,p=null,q=null,r=null;if(a.isArray(n)?(o=n[0],p=n[1]):o=n,isNaN(o)?"%"===o.charAt(o.length-1)&&(q="multiply",o=parseFloat(o)/100+1):(o=parseFloat(o),q="add"),null!==p&&isNaN(p)?"%"===p.charAt(p.length-1)&&(r="multiply",p=parseFloat(p)/100+1):null!==p&&(p=parseFloat(p),r="add"),null!==o){if(null===p&&(p=-o,r=q,"multiply"===r&&(p+=2)),p>o){var s=o;o=p,p=s,s=q,q=r,r=s}for(var j=0,k=f.length;k>j;j++){switch(q){case"add":e.hiData.push([f[j][0],f[j][1]+o]);break;case"multiply":e.hiData.push([f[j][0],f[j][1]*o])}switch(r){case"add":e.lowData.push([f[j][0],f[j][1]+p]);break;case"multiply":e.lowData.push([f[j][0],f[j][1]*p])}}}else e.show=!1}for(var t=e.hiData,u=e.lowData,j=0,k=t.length;k>j;j++)(null!=t[j][1]&&t[j][1]>e._max||null==e._max)&&(e._max=t[j][1]);for(var j=0,k=u.length;k>j;j++)(null!=u[j][1]&&u[j][1]<e._min||null==e._min)&&(e._min=u[j][1]);if(null===e.fillColor){var v=a.jqplot.getColorComponents(e.color);v[3]=.5*v[3],e.fillColor="rgba("+v[0]+", "+v[1]+", "+v[2]+", "+v[3]+")"}},a.jqplot.LineRenderer.prototype.setGridData=function(a){var b=this._xaxis.series_u2p,c=this._yaxis.series_u2p,d=this._plotData,e=this._prevPlotData;this.gridData=[],this._prevGridData=[],this.renderer._smoothedData=[],this.renderer._smoothedPlotData=[],this.renderer._hiBandGridData=[],this.renderer._lowBandGridData=[],this.renderer._hiBandSmoothedData=[],this.renderer._lowBandSmoothedData=[];for(var f=this.renderer.bands,g=!1,h=0,i=d.length;i>h;h++)null!=d[h][0]&&null!=d[h][1]?this.gridData.push([b.call(this._xaxis,d[h][0]),c.call(this._yaxis,d[h][1])]):null==d[h][0]?(g=!0,this.gridData.push([null,c.call(this._yaxis,d[h][1])])):null==d[h][1]&&(g=!0,this.gridData.push([b.call(this._xaxis,d[h][0]),null])),null!=e[h]&&null!=e[h][0]&&null!=e[h][1]?this._prevGridData.push([b.call(this._xaxis,e[h][0]),c.call(this._yaxis,e[h][1])]):null!=e[h]&&null==e[h][0]?this._prevGridData.push([null,c.call(this._yaxis,e[h][1])]):null!=e[h]&&null!=e[h][0]&&null==e[h][1]&&this._prevGridData.push([b.call(this._xaxis,e[h][0]),null]);if(g&&(this.renderer.smooth=!1,"line"===this._type&&(f.show=!1)),"line"===this._type&&f.show){for(var h=0,i=f.hiData.length;i>h;h++)this.renderer._hiBandGridData.push([b.call(this._xaxis,f.hiData[h][0]),c.call(this._yaxis,f.hiData[h][1])]);for(var h=0,i=f.lowData.length;i>h;h++)this.renderer._lowBandGridData.push([b.call(this._xaxis,f.lowData[h][0]),c.call(this._yaxis,f.lowData[h][1])])}if("line"===this._type&&this.renderer.smooth&&this.gridData.length>2){var l;this.renderer.constrainSmoothing?(l=j.call(this,this.gridData),this.renderer._smoothedData=l[0],this.renderer._smoothedPlotData=l[1],f.show&&(l=j.call(this,this.renderer._hiBandGridData),this.renderer._hiBandSmoothedData=l[0],l=j.call(this,this.renderer._lowBandGridData),this.renderer._lowBandSmoothedData=l[0]),l=null):(l=k.call(this,this.gridData),this.renderer._smoothedData=l[0],this.renderer._smoothedPlotData=l[1],f.show&&(l=k.call(this,this.renderer._hiBandGridData),this.renderer._hiBandSmoothedData=l[0],l=k.call(this,this.renderer._lowBandGridData),this.renderer._lowBandSmoothedData=l[0]),l=null)}},a.jqplot.LineRenderer.prototype.makeGridData=function(a,b){var c=this._xaxis.series_u2p,d=this._yaxis.series_u2p,e=[];this.renderer._smoothedData=[],this.renderer._smoothedPlotData=[],this.renderer._hiBandGridData=[],this.renderer._lowBandGridData=[],this.renderer._hiBandSmoothedData=[],this.renderer._lowBandSmoothedData=[];for(var f=this.renderer.bands,g=!1,h=0;h<a.length;h++)null!=a[h][0]&&null!=a[h][1]?(this.step&&h>0&&e.push([c.call(this._xaxis,a[h][0]),d.call(this._yaxis,a[h-1][1])]),e.push([c.call(this._xaxis,a[h][0]),d.call(this._yaxis,a[h][1])])):null==a[h][0]?(g=!0,e.push([null,d.call(this._yaxis,a[h][1])])):null==a[h][1]&&(g=!0,e.push([c.call(this._xaxis,a[h][0]),null]));if(g&&(this.renderer.smooth=!1,"line"===this._type&&(f.show=!1)),"line"===this._type&&f.show){for(var h=0,i=f.hiData.length;i>h;h++)this.renderer._hiBandGridData.push([c.call(this._xaxis,f.hiData[h][0]),d.call(this._yaxis,f.hiData[h][1])]);for(var h=0,i=f.lowData.length;i>h;h++)this.renderer._lowBandGridData.push([c.call(this._xaxis,f.lowData[h][0]),d.call(this._yaxis,f.lowData[h][1])])}if("line"===this._type&&this.renderer.smooth&&e.length>2){var l;this.renderer.constrainSmoothing?(l=j.call(this,e),this.renderer._smoothedData=l[0],this.renderer._smoothedPlotData=l[1],f.show&&(l=j.call(this,this.renderer._hiBandGridData),this.renderer._hiBandSmoothedData=l[0],l=j.call(this,this.renderer._lowBandGridData),this.renderer._lowBandSmoothedData=l[0]),l=null):(l=k.call(this,e),this.renderer._smoothedData=l[0],this.renderer._smoothedPlotData=l[1],f.show&&(l=k.call(this,this.renderer._hiBandGridData),this.renderer._hiBandSmoothedData=l[0],l=k.call(this,this.renderer._lowBandGridData),this.renderer._lowBandSmoothedData=l[0]),l=null)}return e},a.jqplot.LineRenderer.prototype.draw=function(b,c,d,e){var f,g,h,i,j,k=a.extend(!0,{},d),l=k.shadow!=F?k.shadow:this.shadow,m=k.showLine!=F?k.showLine:this.showLine,n=k.fill!=F?k.fill:this.fill,o=k.fillAndStroke!=F?k.fillAndStroke:this.fillAndStroke;if(b.save(),c.length){if(m)if(n){if(this.fillToZero){var p=this.negativeColor;this.useNegativeColors||(p=k.fillStyle);var q=!1,r=k.fillStyle;if(o)var s=c.slice(0);if(0!=this.index&&this._stack){for(var t=this._prevGridData,f=t.length;f>0;f--)c.push(t[f-1]);l&&this.renderer.shadowRenderer.draw(b,c,k),this._areaPoints=c,this.renderer.shapeRenderer.draw(b,c,k)}else{var u=[],v=this.renderer.smooth?this.renderer._smoothedPlotData:this._plotData;this._areaPoints=[];var w=this._yaxis.series_u2p(this.fillToValue);this._xaxis.series_u2p(this.fillToValue);if(k.closePath=!0,"y"==this.fillAxis){u.push([c[0][0],w]),this._areaPoints.push([c[0][0],w]);for(var f=0;f<c.length-1;f++)if(u.push(c[f]),this._areaPoints.push(c[f]),v[f][1]*v[f+1][1]<=0){v[f][1]<0?(q=!0,k.fillStyle=p):(q=!1,k.fillStyle=r);var x=c[f][0]+(c[f+1][0]-c[f][0])*(w-c[f][1])/(c[f+1][1]-c[f][1]);u.push([x,w]),this._areaPoints.push([x,w]),l&&this.renderer.shadowRenderer.draw(b,u,k),this.renderer.shapeRenderer.draw(b,u,k),u=[[x,w]]}v[c.length-1][1]<0?(q=!0,k.fillStyle=p):(q=!1,k.fillStyle=r),u.push(c[c.length-1]),this._areaPoints.push(c[c.length-1]),u.push([c[c.length-1][0],w]),this._areaPoints.push([c[c.length-1][0],w])}l&&this.renderer.shadowRenderer.draw(b,u,k),this.renderer.shapeRenderer.draw(b,u,k)}}else{if(o)var s=c.slice(0);if(0!=this.index&&this._stack)for(var t=this._prevGridData,f=t.length;f>0;f--)c.push(t[f-1]);else{var y=b.canvas.height;c.unshift([c[0][0],y]);var z=c.length;c.push([c[z-1][0],y])}this._areaPoints=c,l&&this.renderer.shadowRenderer.draw(b,c,k),this.renderer.shapeRenderer.draw(b,c,k)}if(o){var A=a.extend(!0,{},k,{fill:!1,closePath:!1});if(this.renderer.shapeRenderer.draw(b,s,A),this.markerRenderer.show)for(this.renderer.smooth&&(s=this.gridData),f=0;f<s.length;f++)this.markerRenderer.draw(s[f][0],s[f][1],b,k.markerOptions)}}else{if(this.renderer.bands.show){var B,C=a.extend(!0,{},k);this.renderer.bands.showLines&&(B=this.renderer.smooth?this.renderer._hiBandSmoothedData:this.renderer._hiBandGridData,this.renderer.shapeRenderer.draw(b,B,k),B=this.renderer.smooth?this.renderer._lowBandSmoothedData:this.renderer._lowBandGridData,this.renderer.shapeRenderer.draw(b,B,C)),this.renderer.bands.fill&&(B=this.renderer.smooth?this.renderer._hiBandSmoothedData.concat(this.renderer._lowBandSmoothedData.reverse()):this.renderer._hiBandGridData.concat(this.renderer._lowBandGridData.reverse()),this._areaPoints=B,C.closePath=!0,C.fill=!0,C.fillStyle=this.renderer.bands.fillColor,this.renderer.shapeRenderer.draw(b,B,C))}l&&this.renderer.shadowRenderer.draw(b,c,k),this.renderer.shapeRenderer.draw(b,c,k)}var g=i=h=j=null;for(f=0;f<this._areaPoints.length;f++){var D=this._areaPoints[f];(g>D[0]||null==g)&&(g=D[0]),(j<D[1]||null==j)&&(j=D[1]),(i<D[0]||null==i)&&(i=D[0]),(h>D[1]||null==h)&&(h=D[1])}if("line"===this.type&&this.renderer.bands.show&&(j=this._yaxis.series_u2p(this.renderer.bands._min),h=this._yaxis.series_u2p(this.renderer.bands._max)),this._boundingBox=[[g,j],[i,h]],this.markerRenderer.show&&!n)for(this.renderer.smooth&&(c=this.gridData),f=0;f<c.length;f++)null!=c[f][0]&&null!=c[f][1]&&this.markerRenderer.draw(c[f][0],c[f][1],b,k.markerOptions)}b.restore()},a.jqplot.LineRenderer.prototype.drawShadow=function(a,b,c){},a.jqplot.LinearAxisRenderer=function(){},a.jqplot.LinearAxisRenderer.prototype.init=function(b){this.breakPoints=null,this.breakTickLabel="&asymp;",this.drawBaseline=!0,this.baselineWidth=null,this.baselineColor=null,this.forceTickAt0=!1,this.forceTickAt100=!1,this.tickInset=0,this.minorTicks=0,this.alignTicks=!1,this._autoFormatString="",this._overrideFormatString=!1,this._scalefact=1,a.extend(!0,this,b),this.breakPoints&&(a.isArray(this.breakPoints)?(this.breakPoints.length<2||this.breakPoints[1]<=this.breakPoints[0])&&(this.breakPoints=null):this.breakPoints=null),
null!=this.numberTicks&&this.numberTicks<2&&(this.numberTicks=2),this.resetDataBounds()},a.jqplot.LinearAxisRenderer.prototype.draw=function(b,c){if(this.show){this.renderer.createTicks.call(this,c);if(this._elem&&(this._elem.emptyForce(),this._elem=null),this._elem=a(document.createElement("div")),this._elem.addClass("jqplot-axis jqplot-"+this.name),this._elem.css("position","absolute"),"xaxis"==this.name||"x2axis"==this.name?this._elem.width(this._plotDimensions.width):this._elem.height(this._plotDimensions.height),this.labelOptions.axis=this.name,this._label=new this.labelRenderer(this.labelOptions),this._label.show){var d=this._label.draw(b,c);d.appendTo(this._elem),d=null}for(var e,f=this._ticks,g=0;g<f.length;g++)e=f[g],e.show&&e.showLabel&&(!e.isMinorTick||this.showMinorTicks)&&this._elem.append(e.draw(b,c));e=null,f=null}return this._elem},a.jqplot.LinearAxisRenderer.prototype.reset=function(){this.min=this._options.min,this.max=this._options.max,this.tickInterval=this._options.tickInterval,this.numberTicks=this._options.numberTicks,this._autoFormatString="",this._overrideFormatString&&this.tickOptions&&this.tickOptions.formatString&&(this.tickOptions.formatString="")},a.jqplot.LinearAxisRenderer.prototype.set=function(){var b,c=0,d=0,e=0,f=null==this._label?!1:this._label.show;if(this.show){for(var g,h=this._ticks,i=0;i<h.length;i++)g=h[i],g._breakTick||!g.show||!g.showLabel||g.isMinorTick&&!this.showMinorTicks||(b="xaxis"==this.name||"x2axis"==this.name?g._elem.outerHeight(!0):g._elem.outerWidth(!0),b>c&&(c=b));g=null,h=null,f&&(d=this._label._elem.outerWidth(!0),e=this._label._elem.outerHeight(!0)),"xaxis"==this.name?(c+=e,this._elem.css({height:c+"px",left:"0px",bottom:"0px"})):"x2axis"==this.name?(c+=e,this._elem.css({height:c+"px",left:"0px",top:"0px"})):"yaxis"==this.name?(c+=d,this._elem.css({width:c+"px",left:"0px",top:"0px"}),f&&this._label.constructor==a.jqplot.AxisLabelRenderer&&this._label._elem.css("width",d+"px")):(c+=d,this._elem.css({width:c+"px",right:"0px",top:"0px"}),f&&this._label.constructor==a.jqplot.AxisLabelRenderer&&this._label._elem.css("width",d+"px"))}},a.jqplot.LinearAxisRenderer.prototype.createTicks=function(b){var c,d,e,f,g=this._ticks,h=this.ticks,i=this.name,j=this._dataBounds,k="x"===this.name.charAt(0)?this._plotDimensions.width:this._plotDimensions.height,l=this.min,m=this.max,n=this.numberTicks,o=this.tickInterval,p=30;if(this._scalefact=(Math.max(k,p+1)-p)/300,h.length){for(f=0;f<h.length;f++){var q=h[f],r=new this.tickRenderer(this.tickOptions);a.isArray(q)?(r.value=q[0],this.breakPoints?q[0]==this.breakPoints[0]?(r.label=this.breakTickLabel,r._breakTick=!0,r.showGridline=!1,r.showMark=!1):q[0]>this.breakPoints[0]&&q[0]<=this.breakPoints[1]?(r.show=!1,r.showGridline=!1,r.label=q[1]):r.label=q[1]:r.label=q[1],r.setTick(q[0],this.name),this._ticks.push(r)):a.isPlainObject(q)?(a.extend(!0,r,q),r.axis=this.name,this._ticks.push(r)):(r.value=q,this.breakPoints&&(q==this.breakPoints[0]?(r.label=this.breakTickLabel,r._breakTick=!0,r.showGridline=!1,r.showMark=!1):q>this.breakPoints[0]&&q<=this.breakPoints[1]&&(r.show=!1,r.showGridline=!1)),r.setTick(q,this.name),this._ticks.push(r))}this.numberTicks=h.length,this.min=this._ticks[0].value,this.max=this._ticks[this.numberTicks-1].value,this.tickInterval=(this.max-this.min)/(this.numberTicks-1)}else{k="xaxis"==i||"x2axis"==i?this._plotDimensions.width:this._plotDimensions.height;var s=this.numberTicks;this.alignTicks&&("x2axis"===this.name&&b.axes.xaxis.show?s=b.axes.xaxis.numberTicks:"y"===this.name.charAt(0)&&"yaxis"!==this.name&&"yMidAxis"!==this.name&&b.axes.yaxis.show&&(s=b.axes.yaxis.numberTicks)),c=null!=this.min?this.min:j.min,d=null!=this.max?this.max:j.max;var t,u,v,w=d-c;if(null!=this.tickOptions&&this.tickOptions.formatString||(this._overrideFormatString=!0),null==this.min||null==this.max&&null==this.tickInterval&&!this.autoscale){this.forceTickAt0&&(c>0&&(c=0),0>d&&(d=0)),this.forceTickAt100&&(c>100&&(c=100),100>d&&(d=100));var x=!1,y=!1;null!=this.min?x=!0:null!=this.max&&(y=!0);var z=a.jqplot.LinearTickGenerator(c,d,this._scalefact,s,x,y),A=null!=this.min?c:c+w*(this.padMin-1),B=null!=this.max?d:d-w*(this.padMax-1);(A>c||d>B)&&(A=null!=this.min?c:c-w*(this.padMin-1),B=null!=this.max?d:d+w*(this.padMax-1),z=a.jqplot.LinearTickGenerator(A,B,this._scalefact,s,x,y)),this.min=z[0],this.max=z[1],this.numberTicks=z[2],this._autoFormatString=z[3],this.tickInterval=z[4]}else{if(c==d){var C=.05;c>0&&(C=Math.max(Math.log(c)/Math.LN10,.05)),c-=C,d+=C}if(this.autoscale&&null==this.min&&null==this.max){for(var D,E,F,G=!1,H=!1,f=0;f<this._series.length;f++){var I=this._series[f],J="x"==I.fillAxis?I._xaxis.name:I._yaxis.name;if(this.name==J){for(var K=I._plotValues[I.fillAxis],L=K[0],M=K[0],N=1;N<K.length;N++)K[N]<L?L=K[N]:K[N]>M&&(M=K[N]);var O=(M-L)/M;I.renderer.constructor==a.jqplot.BarRenderer?L>=0&&(I.fillToZero||O>.1)?G=!0:(G=!1,H=I.fill&&I.fillToZero&&0>L&&M>0?!0:!1):I.fill?L>=0&&(I.fillToZero||O>.1)?G=!0:0>L&&M>0&&I.fillToZero?(G=!1,H=!0):(G=!1,H=!1):0>L&&(G=!1)}}if(G)this.numberTicks=2+Math.ceil((k-(this.tickSpacing-1))/this.tickSpacing),this.min=0,l=0,E=d/(this.numberTicks-1),v=Math.pow(10,Math.abs(Math.floor(Math.log(E)/Math.LN10))),E/v==parseInt(E/v,10)&&(E+=v),this.tickInterval=Math.ceil(E/v)*v,this.max=this.tickInterval*(this.numberTicks-1);else if(H){this.numberTicks=2+Math.ceil((k-(this.tickSpacing-1))/this.tickSpacing);var P=Math.ceil(Math.abs(c)/w*(this.numberTicks-1)),Q=this.numberTicks-1-P;E=Math.max(Math.abs(c/P),Math.abs(d/Q)),v=Math.pow(10,Math.abs(Math.floor(Math.log(E)/Math.LN10))),this.tickInterval=Math.ceil(E/v)*v,this.max=this.tickInterval*Q,this.min=-this.tickInterval*P}else null==this.numberTicks&&(this.tickInterval?this.numberTicks=3+Math.ceil(w/this.tickInterval):this.numberTicks=2+Math.ceil((k-(this.tickSpacing-1))/this.tickSpacing)),null==this.tickInterval?(E=w/(this.numberTicks-1),v=1>E?Math.pow(10,Math.abs(Math.floor(Math.log(E)/Math.LN10))):1,this.tickInterval=Math.ceil(E*v*this.pad)/v):v=1/this.tickInterval,D=this.tickInterval*(this.numberTicks-1),F=(D-w)/2,null==this.min&&(this.min=Math.floor(v*(c-F))/v),null==this.max&&(this.max=this.min+D);var R,S=a.jqplot.getSignificantFigures(this.tickInterval);if(S.digitsLeft>=S.significantDigits)R="%d";else{var v=Math.max(0,5-S.digitsLeft);v=Math.min(v,S.digitsRight),R="%."+v+"f"}this._autoFormatString=R}else{t=null!=this.min?this.min:c-w*(this.padMin-1),u=null!=this.max?this.max:d+w*(this.padMax-1),w=u-t,null==this.numberTicks&&(null!=this.tickInterval?this.numberTicks=Math.ceil((u-t)/this.tickInterval)+1:k>100?this.numberTicks=parseInt(3+(k-100)/75,10):this.numberTicks=2),null==this.tickInterval&&(this.tickInterval=w/(this.numberTicks-1)),null==this.max&&(u=t+this.tickInterval*(this.numberTicks-1)),null==this.min&&(t=u-this.tickInterval*(this.numberTicks-1));var R,S=a.jqplot.getSignificantFigures(this.tickInterval);if(S.digitsLeft>=S.significantDigits)R="%d";else{var v=Math.max(0,5-S.digitsLeft);v=Math.min(v,S.digitsRight),R="%."+v+"f"}this._autoFormatString=R,this.min=t,this.max=u}if(this.renderer.constructor==a.jqplot.LinearAxisRenderer&&""==this._autoFormatString){w=this.max-this.min;var T=new this.tickRenderer(this.tickOptions),U=T.formatString||a.jqplot.config.defaultTickFormatString,U=U.match(a.jqplot.sprintf.regex)[0],V=0;if(U){if(U.search(/[fFeEgGpP]/)>-1){var W=U.match(/\%\.(\d{0,})?[eEfFgGpP]/);V=W?parseInt(W[1],10):6}else U.search(/[di]/)>-1&&(V=0);var X=Math.pow(10,-V);if(this.tickInterval<X&&null==n&&null==o)if(this.tickInterval=X,null==m&&null==l){this.min=Math.floor(this._dataBounds.min/X)*X,this.min==this._dataBounds.min&&(this.min=this._dataBounds.min-this.tickInterval),this.max=Math.ceil(this._dataBounds.max/X)*X,this.max==this._dataBounds.max&&(this.max=this._dataBounds.max+this.tickInterval);var Y=(this.max-this.min)/this.tickInterval;Y=Y.toFixed(11),Y=Math.ceil(Y),this.numberTicks=Y+1}else if(null==m){var Y=(this._dataBounds.max-this.min)/this.tickInterval;Y=Y.toFixed(11),this.numberTicks=Math.ceil(Y)+2,this.max=this.min+this.tickInterval*(this.numberTicks-1)}else if(null==l){var Y=(this.max-this._dataBounds.min)/this.tickInterval;Y=Y.toFixed(11),this.numberTicks=Math.ceil(Y)+2,this.min=this.max-this.tickInterval*(this.numberTicks-1)}else this.numberTicks=Math.ceil((m-l)/this.tickInterval)+1,this.min=Math.floor(l*Math.pow(10,V))/Math.pow(10,V),this.max=Math.ceil(m*Math.pow(10,V))/Math.pow(10,V),this.numberTicks=Math.ceil((this.max-this.min)/this.tickInterval)+1}}}this._overrideFormatString&&""!=this._autoFormatString&&(this.tickOptions=this.tickOptions||{},this.tickOptions.formatString=this._autoFormatString);for(var r,Z,f=0;f<this.numberTicks;f++){if(e=this.min+f*this.tickInterval,r=new this.tickRenderer(this.tickOptions),r.setTick(e,this.name),this._ticks.push(r),f<this.numberTicks-1)for(var N=0;N<this.minorTicks;N++)e+=this.tickInterval/(this.minorTicks+1),Z=a.extend(!0,{},this.tickOptions,{name:this.name,value:e,label:"",isMinorTick:!0}),r=new this.tickRenderer(Z),this._ticks.push(r);r=null}}this.tickInset&&(this.min=this.min-this.tickInset*this.tickInterval,this.max=this.max+this.tickInset*this.tickInterval),g=null},a.jqplot.LinearAxisRenderer.prototype.resetTickValues=function(b){if(a.isArray(b)&&b.length==this._ticks.length){for(var c,d=0;d<b.length;d++)c=this._ticks[d],c.value=b[d],c.label=c.formatter(c.formatString,b[d]),c.label=c.prefix+c.label,c._elem.html(c.label);c=null,this.min=a.jqplot.arrayMin(b),this.max=a.jqplot.arrayMax(b),this.pack()}},a.jqplot.LinearAxisRenderer.prototype.pack=function(b,c){b=b||{},c=c||this._offsets;var d=this._ticks,e=this.max,f=this.min,g=c.max,h=c.min,i=null==this._label?!1:this._label.show;for(var j in b)this._elem.css(j,b[j]);this._offsets=c;var k=g-h,l=e-f;if(this.breakPoints?(l=l-this.breakPoints[1]+this.breakPoints[0],this.p2u=function(a){return(a-h)*l/k+f},this.u2p=function(a){return a>this.breakPoints[0]&&a<this.breakPoints[1]&&(a=this.breakPoints[0]),a<=this.breakPoints[0]?(a-f)*k/l+h:(a-this.breakPoints[1]+this.breakPoints[0]-f)*k/l+h},"x"==this.name.charAt(0)?(this.series_u2p=function(a){return a>this.breakPoints[0]&&a<this.breakPoints[1]&&(a=this.breakPoints[0]),a<=this.breakPoints[0]?(a-f)*k/l:(a-this.breakPoints[1]+this.breakPoints[0]-f)*k/l},this.series_p2u=function(a){return a*l/k+f}):(this.series_u2p=function(a){return a>this.breakPoints[0]&&a<this.breakPoints[1]&&(a=this.breakPoints[0]),a>=this.breakPoints[1]?(a-e)*k/l:(a+this.breakPoints[1]-this.breakPoints[0]-e)*k/l},this.series_p2u=function(a){return a*l/k+e})):(this.p2u=function(a){return(a-h)*l/k+f},this.u2p=function(a){return(a-f)*k/l+h},"xaxis"==this.name||"x2axis"==this.name?(this.series_u2p=function(a){return(a-f)*k/l},this.series_p2u=function(a){return a*l/k+f}):(this.series_u2p=function(a){return(a-e)*k/l},this.series_p2u=function(a){return a*l/k+e})),this.show)if("xaxis"==this.name||"x2axis"==this.name){for(var m=0;m<d.length;m++){var n=d[m];if(n.show&&n.showLabel){var o;if(n.constructor==a.jqplot.CanvasAxisTickRenderer&&n.angle){var p="xaxis"==this.name?1:-1;switch(n.labelPosition){case"auto":o=p*n.angle<0?-n.getWidth()+n._textRenderer.height*Math.sin(-n._textRenderer.angle)/2:-n._textRenderer.height*Math.sin(n._textRenderer.angle)/2;break;case"end":o=-n.getWidth()+n._textRenderer.height*Math.sin(-n._textRenderer.angle)/2;break;case"start":o=-n._textRenderer.height*Math.sin(n._textRenderer.angle)/2;break;case"middle":o=-n.getWidth()/2+n._textRenderer.height*Math.sin(-n._textRenderer.angle)/2;break;default:o=-n.getWidth()/2+n._textRenderer.height*Math.sin(-n._textRenderer.angle)/2}}else o=-n.getWidth()/2;var q=this.u2p(n.value)+o+"px";n._elem.css("left",q),n.pack()}}if(i){var r=this._label._elem.outerWidth(!0);this._label._elem.css("left",h+k/2-r/2+"px"),"xaxis"==this.name?this._label._elem.css("bottom","0px"):this._label._elem.css("top","0px"),this._label.pack()}}else{for(var m=0;m<d.length;m++){var n=d[m];if(n.show&&n.showLabel){var o;if(n.constructor==a.jqplot.CanvasAxisTickRenderer&&n.angle){var p="yaxis"==this.name?1:-1;switch(n.labelPosition){case"auto":case"end":o=p*n.angle<0?-n._textRenderer.height*Math.cos(-n._textRenderer.angle)/2:-n.getHeight()+n._textRenderer.height*Math.cos(n._textRenderer.angle)/2;break;case"start":o=n.angle>0?-n._textRenderer.height*Math.cos(-n._textRenderer.angle)/2:-n.getHeight()+n._textRenderer.height*Math.cos(n._textRenderer.angle)/2;break;case"middle":o=-n.getHeight()/2;break;default:o=-n.getHeight()/2}}else o=-n.getHeight()/2;var q=this.u2p(n.value)+o+"px";n._elem.css("top",q),n.pack()}}if(i){var s=this._label._elem.outerHeight(!0);this._label._elem.css("top",g-k/2-s/2+"px"),"yaxis"==this.name?this._label._elem.css("left","0px"):this._label._elem.css("right","0px"),this._label.pack()}}d=null};a.jqplot.LinearTickGenerator=function(b,c,d,e,f,g){if(f=null===f?!1:f,g=null===g||f?!1:g,b===c&&(c=c?0:1),d=d||1,b>c){var h=c;c=b,b=h}var i=[],j=x(c-b,d),k=a.jqplot.getSignificantFigures;if(null==e)if(f||g){if(f){i[0]=b,i[2]=Math.ceil((c-b)/j+1),i[1]=b+(i[2]-1)*j;var l=k(b).digitsRight,m=k(j).digitsRight;m>l?i[3]=u(j):i[3]="%."+l+"f",i[4]=j}else if(g){i[1]=c,i[2]=Math.ceil((c-b)/j+1),i[0]=c-(i[2]-1)*j;var n=k(c).digitsRight,m=k(j).digitsRight;m>n?i[3]=u(j):i[3]="%."+n+"f",i[4]=j}}else i[0]=Math.floor(b/j)*j,i[1]=Math.ceil(c/j)*j,i[2]=Math.round((i[1]-i[0])/j+1),i[3]=u(j),i[4]=j;else{var o=[];if(o[0]=Math.floor(b/j)*j,o[1]=Math.ceil(c/j)*j,o[2]=Math.round((o[1]-o[0])/j+1),o[3]=u(j),o[4]=j,o[2]===e)i=o;else{var p=w(o[1]-o[0],e);i[0]=o[0],i[2]=e,i[4]=p,i[3]=u(p),i[1]=i[0]+(i[2]-1)*i[4]}}return i},a.jqplot.LinearTickGenerator.bestLinearInterval=x,a.jqplot.LinearTickGenerator.bestInterval=w,a.jqplot.LinearTickGenerator.bestLinearComponents=y,a.jqplot.LinearTickGenerator.bestConstrainedInterval=v,a.jqplot.MarkerRenderer=function(b){this.show=!0,this.style="filledCircle",this.lineWidth=2,this.size=9,this.color="#666666",this.shadow=!0,this.shadowAngle=45,this.shadowOffset=1,this.shadowDepth=3,this.shadowAlpha="0.07",this.shadowRenderer=new a.jqplot.ShadowRenderer,this.shapeRenderer=new a.jqplot.ShapeRenderer,a.extend(!0,this,b)},a.jqplot.MarkerRenderer.prototype.init=function(b){a.extend(!0,this,b);var c={angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,lineWidth:this.lineWidth,depth:this.shadowDepth,closePath:!0};-1!=this.style.indexOf("filled")&&(c.fill=!0),-1!=this.style.indexOf("ircle")&&(c.isarc=!0,c.closePath=!1),this.shadowRenderer.init(c);var d={fill:!1,isarc:!1,strokeStyle:this.color,fillStyle:this.color,lineWidth:this.lineWidth,closePath:!0};-1!=this.style.indexOf("filled")&&(d.fill=!0),-1!=this.style.indexOf("ircle")&&(d.isarc=!0,d.closePath=!1),this.shapeRenderer.init(d)},a.jqplot.MarkerRenderer.prototype.drawDiamond=function(a,b,c,d,e){var f=1.2,g=this.size/2/f,h=this.size/2*f,i=[[a-g,b],[a,b+h],[a+g,b],[a,b-h]];this.shadow&&this.shadowRenderer.draw(c,i),this.shapeRenderer.draw(c,i,e)},a.jqplot.MarkerRenderer.prototype.drawPlus=function(b,c,d,e,f){var g=1,h=this.size/2*g,i=this.size/2*g,j=[[b,c-i],[b,c+i]],k=[[b+h,c],[b-h,c]],l=a.extend(!0,{},this.options,{closePath:!1});this.shadow&&(this.shadowRenderer.draw(d,j,{closePath:!1}),this.shadowRenderer.draw(d,k,{closePath:!1})),this.shapeRenderer.draw(d,j,l),this.shapeRenderer.draw(d,k,l)},a.jqplot.MarkerRenderer.prototype.drawX=function(b,c,d,e,f){var g=1,h=this.size/2*g,i=this.size/2*g,j=a.extend(!0,{},this.options,{closePath:!1}),k=[[b-h,c-i],[b+h,c+i]],l=[[b-h,c+i],[b+h,c-i]];this.shadow&&(this.shadowRenderer.draw(d,k,{closePath:!1}),this.shadowRenderer.draw(d,l,{closePath:!1})),this.shapeRenderer.draw(d,k,j),this.shapeRenderer.draw(d,l,j)},a.jqplot.MarkerRenderer.prototype.drawDash=function(a,b,c,d,e){var f=1,g=this.size/2*f,h=(this.size/2*f,[[a-g,b],[a+g,b]]);this.shadow&&this.shadowRenderer.draw(c,h),this.shapeRenderer.draw(c,h,e)},a.jqplot.MarkerRenderer.prototype.drawLine=function(a,b,c,d,e){var f=[a,b];this.shadow&&this.shadowRenderer.draw(c,f),this.shapeRenderer.draw(c,f,e)},a.jqplot.MarkerRenderer.prototype.drawSquare=function(a,b,c,d,e){var f=1,g=this.size/2/f,h=this.size/2*f,i=[[a-g,b-h],[a-g,b+h],[a+g,b+h],[a+g,b-h]];this.shadow&&this.shadowRenderer.draw(c,i),this.shapeRenderer.draw(c,i,e)},a.jqplot.MarkerRenderer.prototype.drawCircle=function(a,b,c,d,e){var f=this.size/2,g=2*Math.PI,h=[a,b,f,0,g,!0];this.shadow&&this.shadowRenderer.draw(c,h),this.shapeRenderer.draw(c,h,e)},a.jqplot.MarkerRenderer.prototype.draw=function(a,b,c,d){if(d=d||{},null==d.show||0!=d.show)switch(d.color&&!d.fillStyle&&(d.fillStyle=d.color),d.color&&!d.strokeStyle&&(d.strokeStyle=d.color),this.style){case"diamond":this.drawDiamond(a,b,c,!1,d);break;case"filledDiamond":this.drawDiamond(a,b,c,!0,d);break;case"circle":this.drawCircle(a,b,c,!1,d);break;case"filledCircle":this.drawCircle(a,b,c,!0,d);break;case"square":this.drawSquare(a,b,c,!1,d);break;case"filledSquare":this.drawSquare(a,b,c,!0,d);break;case"x":this.drawX(a,b,c,!0,d);break;case"plus":this.drawPlus(a,b,c,!0,d);break;case"dash":this.drawDash(a,b,c,!0,d);break;case"line":this.drawLine(a,b,c,!1,d);break;default:this.drawDiamond(a,b,c,!1,d)}},a.jqplot.ShadowRenderer=function(b){this.angle=45,this.offset=1,this.alpha=.07,this.lineWidth=1.5,this.lineJoin="miter",this.lineCap="round",this.closePath=!1,this.fill=!1,this.depth=3,this.strokeStyle="rgba(0,0,0,0.1)",this.isarc=!1,a.extend(!0,this,b)},a.jqplot.ShadowRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.ShadowRenderer.prototype.draw=function(b,c,d){b.save();var e=null!=d?d:{},f=null!=e.fill?e.fill:this.fill,g=null!=e.fillRect?e.fillRect:this.fillRect,h=null!=e.closePath?e.closePath:this.closePath,i=null!=e.offset?e.offset:this.offset,j=null!=e.alpha?e.alpha:this.alpha,k=null!=e.depth?e.depth:this.depth,l=null!=e.isarc?e.isarc:this.isarc,m=null!=e.linePattern?e.linePattern:this.linePattern;b.lineWidth=null!=e.lineWidth?e.lineWidth:this.lineWidth,b.lineJoin=null!=e.lineJoin?e.lineJoin:this.lineJoin,b.lineCap=null!=e.lineCap?e.lineCap:this.lineCap,b.strokeStyle=e.strokeStyle||this.strokeStyle||"rgba(0,0,0,"+j+")",b.fillStyle=e.fillStyle||this.fillStyle||"rgba(0,0,0,"+j+")";for(var n=0;k>n;n++){var o=a.jqplot.LinePattern(b,m);if(b.translate(Math.cos(this.angle*Math.PI/180)*i,Math.sin(this.angle*Math.PI/180)*i),o.beginPath(),l)b.arc(c[0],c[1],c[2],c[3],c[4],!0);else if(g)g&&b.fillRect(c[0],c[1],c[2],c[3]);else if(c&&c.length)for(var p=!0,q=0;q<c.length;q++)null!=c[q][0]&&null!=c[q][1]?p?(o.moveTo(c[q][0],c[q][1]),p=!1):o.lineTo(c[q][0],c[q][1]):p=!0;h&&o.closePath(),f?b.fill():b.stroke()}b.restore()},a.jqplot.ShapeRenderer=function(b){this.lineWidth=1.5,this.linePattern="solid",this.lineJoin="miter",this.lineCap="round",this.closePath=!1,this.fill=!1,this.isarc=!1,this.fillRect=!1,this.strokeRect=!1,this.clearRect=!1,this.strokeStyle="#999999",this.fillStyle="#999999",a.extend(!0,this,b)},a.jqplot.ShapeRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.ShapeRenderer.prototype.draw=function(b,c,d){b.save();var e=null!=d?d:{},f=null!=e.fill?e.fill:this.fill,g=null!=e.closePath?e.closePath:this.closePath,h=null!=e.fillRect?e.fillRect:this.fillRect,i=null!=e.strokeRect?e.strokeRect:this.strokeRect,j=null!=e.clearRect?e.clearRect:this.clearRect,k=null!=e.isarc?e.isarc:this.isarc,l=null!=e.linePattern?e.linePattern:this.linePattern,m=a.jqplot.LinePattern(b,l);if(b.lineWidth=e.lineWidth||this.lineWidth,b.lineJoin=e.lineJoin||this.lineJoin,b.lineCap=e.lineCap||this.lineCap,b.strokeStyle=e.strokeStyle||e.color||this.strokeStyle,b.fillStyle=e.fillStyle||this.fillStyle,b.beginPath(),k)return b.arc(c[0],c[1],c[2],c[3],c[4],!0),g&&b.closePath(),f?b.fill():b.stroke(),void b.restore();if(j)return b.clearRect(c[0],c[1],c[2],c[3]),void b.restore();if(h||i){if(h&&b.fillRect(c[0],c[1],c[2],c[3]),i)return b.strokeRect(c[0],c[1],c[2],c[3]),void b.restore()}else if(c&&c.length){for(var n=!0,o=0;o<c.length;o++)null!=c[o][0]&&null!=c[o][1]?n?(m.moveTo(c[o][0],c[o][1]),n=!1):m.lineTo(c[o][0],c[o][1]):n=!0;g&&m.closePath(),f?b.fill():b.stroke()}b.restore()},a.jqplot.TableLegendRenderer=function(){},a.jqplot.TableLegendRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.TableLegendRenderer.prototype.addrow=function(b,c,d,e){var f,g,h,i,j,k=d?this.rowSpacing+"px":"0px";h=document.createElement("tr"),f=a(h),f.addClass("jqplot-table-legend"),h=null,e?f.prependTo(this._elem):f.appendTo(this._elem),this.showSwatches&&(g=a(document.createElement("td")),g.addClass("jqplot-table-legend jqplot-table-legend-swatch"),g.css({textAlign:"center",paddingTop:k}),i=a(document.createElement("div")),i.addClass("jqplot-table-legend-swatch-outline"),j=a(document.createElement("div")),j.addClass("jqplot-table-legend-swatch"),j.css({backgroundColor:c,borderColor:c}),f.append(g.append(i.append(j)))),this.showLabels&&(g=a(document.createElement("td")),g.addClass("jqplot-table-legend jqplot-table-legend-label"),g.css("paddingTop",k),f.append(g),this.escapeHtml?g.text(b):g.html(b)),g=null,i=null,j=null,f=null,h=null},a.jqplot.TableLegendRenderer.prototype.draw=function(){if(this._elem&&(this._elem.emptyForce(),this._elem=null),this.show){var b=this._series,c=document.createElement("table");this._elem=a(c),this._elem.addClass("jqplot-table-legend");var d={position:"absolute"};this.background&&(d.background=this.background),this.border&&(d.border=this.border),this.fontSize&&(d.fontSize=this.fontSize),this.fontFamily&&(d.fontFamily=this.fontFamily),this.textColor&&(d.textColor=this.textColor),null!=this.marginTop&&(d.marginTop=this.marginTop),null!=this.marginBottom&&(d.marginBottom=this.marginBottom),null!=this.marginLeft&&(d.marginLeft=this.marginLeft),null!=this.marginRight&&(d.marginRight=this.marginRight);for(var e,f=!1,g=!1,h=0;h<b.length;h++)if(e=b[h],(e._stack||e.renderer.constructor==a.jqplot.BezierCurveRenderer)&&(g=!0),e.show&&e.showLabel){var i=this.labels[h]||e.label.toString();if(i){var j=e.color;g&&h<b.length-1?f=!0:g&&h==b.length-1&&(f=!1),this.renderer.addrow.call(this,i,j,f,g),f=!0}for(var k=0;k<a.jqplot.addLegendRowHooks.length;k++){var l=a.jqplot.addLegendRowHooks[k].call(this,e);l&&(this.renderer.addrow.call(this,l.label,l.color,f),f=!0)}i=null}}return this._elem},a.jqplot.TableLegendRenderer.prototype.pack=function(a){if(this.show)if("insideGrid"==this.placement)switch(this.location){case"nw":var b=a.left,c=a.top;this._elem.css("left",b),this._elem.css("top",c);break;case"n":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2,c=a.top;this._elem.css("left",b),this._elem.css("top",c);break;case"ne":var b=a.right,c=a.top;this._elem.css({right:b,top:c});break;case"e":var b=a.right,c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({right:b,top:c});break;case"se":var b=a.right,c=a.bottom;this._elem.css({right:b,bottom:c});break;case"s":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2,c=a.bottom;this._elem.css({left:b,bottom:c});break;case"sw":var b=a.left,c=a.bottom;this._elem.css({left:b,bottom:c});break;case"w":var b=a.left,c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({left:b,top:c});break;default:var b=a.right,c=a.bottom;this._elem.css({right:b,bottom:c})}else if("outside"==this.placement)switch(this.location){case"nw":var b=this._plotDimensions.width-a.left,c=a.top;this._elem.css("right",b),this._elem.css("top",c);break;case"n":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2,c=this._plotDimensions.height-a.top;this._elem.css("left",b),this._elem.css("bottom",c);break;case"ne":var b=this._plotDimensions.width-a.right,c=a.top;this._elem.css({left:b,top:c});break;case"e":var b=this._plotDimensions.width-a.right,c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({left:b,top:c});break;case"se":var b=this._plotDimensions.width-a.right,c=a.bottom;this._elem.css({left:b,bottom:c});break;case"s":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2,c=this._plotDimensions.height-a.bottom;this._elem.css({left:b,top:c});break;case"sw":var b=this._plotDimensions.width-a.left,c=a.bottom;this._elem.css({right:b,bottom:c});break;case"w":var b=this._plotDimensions.width-a.left,c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({right:b,top:c});break;default:var b=a.right,c=a.bottom;this._elem.css({right:b,bottom:c})}else switch(this.location){case"nw":this._elem.css({left:0,top:a.top});break;case"n":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2;this._elem.css({left:b,top:a.top});break;case"ne":this._elem.css({right:0,top:a.top});break;case"e":var c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({right:a.right,top:c});break;case"se":this._elem.css({right:a.right,bottom:a.bottom});break;case"s":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2;this._elem.css({left:b,bottom:a.bottom});break;case"sw":this._elem.css({left:a.left,bottom:a.bottom});break;case"w":var c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({left:a.left,top:c});break;default:this._elem.css({right:a.right,bottom:a.bottom})}},a.jqplot.ThemeEngine=function(){this.themes={},this.activeTheme=null},a.jqplot.ThemeEngine.prototype.init=function(){var b,c,d,e=new a.jqplot.Theme({_name:"Default"});for(b in e.target)"textColor"==b?e.target[b]=this.target.css("color"):e.target[b]=this.target.css(b);if(this.title.show&&this.title._elem)for(b in e.title)"textColor"==b?e.title[b]=this.title._elem.css("color"):e.title[b]=this.title._elem.css(b);for(b in e.grid)e.grid[b]=this.grid[b];if(null==e.grid.backgroundColor&&null!=this.grid.background&&(e.grid.backgroundColor=this.grid.background),this.legend.show&&this.legend._elem)for(b in e.legend)"textColor"==b?e.legend[b]=this.legend._elem.css("color"):e.legend[b]=this.legend._elem.css(b);var f;for(c=0;c<this.series.length;c++){f=this.series[c],f.renderer.constructor==a.jqplot.LineRenderer?e.series.push(new L):f.renderer.constructor==a.jqplot.BarRenderer?e.series.push(new N):f.renderer.constructor==a.jqplot.PieRenderer?e.series.push(new O):f.renderer.constructor==a.jqplot.DonutRenderer?e.series.push(new P):f.renderer.constructor==a.jqplot.FunnelRenderer?e.series.push(new Q):f.renderer.constructor==a.jqplot.MeterGaugeRenderer?e.series.push(new R):e.series.push({});for(b in e.series[c])e.series[c][b]=f[b]}var g,h;for(b in this.axes){if(h=this.axes[b],g=e.axes[b]=new I,g.borderColor=h.borderColor,g.borderWidth=h.borderWidth,h._ticks&&h._ticks[0])for(d in g.ticks)h._ticks[0].hasOwnProperty(d)?g.ticks[d]=h._ticks[0][d]:h._ticks[0]._elem&&(g.ticks[d]=h._ticks[0]._elem.css(d));if(h._label&&h._label.show)for(d in g.label)h._label[d]?g.label[d]=h._label[d]:h._label._elem&&("textColor"==d?g.label[d]=h._label._elem.css("color"):g.label[d]=h._label._elem.css(d))}this.themeEngine._add(e),this.themeEngine.activeTheme=this.themeEngine.themes[e._name]},a.jqplot.ThemeEngine.prototype.get=function(a){return a?this.themes[a]:this.activeTheme},a.jqplot.ThemeEngine.prototype.getThemeNames=function(){var a=[];for(var b in this.themes)a.push(b);return a.sort(z)},a.jqplot.ThemeEngine.prototype.getThemes=function(){var a=[],b=[];for(var c in this.themes)a.push(c);a.sort(z);for(var d=0;d<a.length;d++)b.push(this.themes[a[d]]);return b},a.jqplot.ThemeEngine.prototype.activate=function(b,c){var d=!1;if(!c&&this.activeTheme&&this.activeTheme._name&&(c=this.activeTheme._name),!this.themes.hasOwnProperty(c))throw new Error("No theme of that name");var e=this.themes[c];this.activeTheme=e;var f,g=["xaxis","x2axis","yaxis","y2axis"];for(p=0;p<g.length;p++){var h=g[p];null!=e.axesStyles.borderColor&&(b.axes[h].borderColor=e.axesStyles.borderColor),null!=e.axesStyles.borderWidth&&(b.axes[h].borderWidth=e.axesStyles.borderWidth)}for(var i in b.axes){var j=b.axes[i];if(j.show){var k=e.axes[i]||{},l=e.axesStyles,m=a.jqplot.extend(!0,{},k,l);if(f=null!=e.axesStyles.borderColor?e.axesStyles.borderColor:m.borderColor,null!=m.borderColor&&(j.borderColor=m.borderColor,d=!0),f=null!=e.axesStyles.borderWidth?e.axesStyles.borderWidth:m.borderWidth,null!=m.borderWidth&&(j.borderWidth=m.borderWidth,d=!0),j._ticks&&j._ticks[0])for(var n in m.ticks)f=m.ticks[n],null!=f&&(j.tickOptions[n]=f,j._ticks=[],d=!0);if(j._label&&j._label.show)for(var n in m.label)f=m.label[n],null!=f&&(j.labelOptions[n]=f,d=!0)}}for(var o in e.grid)null!=e.grid[o]&&(b.grid[o]=e.grid[o]);if(d||b.grid.draw(),b.legend.show)for(o in e.legend)null!=e.legend[o]&&(b.legend[o]=e.legend[o]);if(b.title.show)for(o in e.title)null!=e.title[o]&&(b.title[o]=e.title[o]);var p;for(p=0;p<e.series.length;p++){var q={};for(o in e.series[p])f=null!=e.seriesStyles[o]?e.seriesStyles[o]:e.series[p][o],null!=f&&(q[o]=f,"color"==o?(b.series[p].renderer.shapeRenderer.fillStyle=f,b.series[p].renderer.shapeRenderer.strokeStyle=f,b.series[p][o]=f):"lineWidth"==o||"linePattern"==o?(b.series[p].renderer.shapeRenderer[o]=f,b.series[p][o]=f):"markerOptions"==o?(B(b.series[p].markerOptions,f),B(b.series[p].markerRenderer,f)):b.series[p][o]=f,d=!0)}d&&(b.target.empty(),b.draw());for(o in e.target)null!=e.target[o]&&b.target.css(o,e.target[o])},a.jqplot.ThemeEngine.prototype._add=function(a,b){if(b&&(a._name=b),a._name||(a._name=Date.parse(new Date)),this.themes.hasOwnProperty(a._name))throw new Error("jqplot.ThemeEngine Error: Theme already in use");this.themes[a._name]=a},a.jqplot.ThemeEngine.prototype.remove=function(a){return"Default"==a?!1:delete this.themes[a]},a.jqplot.ThemeEngine.prototype.newTheme=function(b,c){"object"==typeof b&&(c=c||b,b=null),b=c&&c._name?c._name:b||Date.parse(new Date);var d=this.copy(this.themes.Default._name,b);return a.jqplot.extend(d,c),d},a.jqplot.clone=A,a.jqplot.merge=B,a.jqplot.extend=function(){var b,c=arguments[0]||{},d=1,e=arguments.length,f=!1;for("boolean"==typeof c&&(f=c,c=arguments[1]||{},d=2),"object"!=typeof c&&"[object Function]"===!toString.call(c)&&(c={});e>d;d++)if(null!=(b=arguments[d]))for(var g in b){var h=c[g],i=b[g];c!==i&&(f&&i&&"object"==typeof i&&!i.nodeType?c[g]=a.jqplot.extend(f,h||(null!=i.length?[]:{}),i):i!==F&&(c[g]=i))}return c},a.jqplot.ThemeEngine.prototype.rename=function(a,b){if("Default"==a||"Default"==b)throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default");if(this.themes.hasOwnProperty(b))throw new Error("jqplot.ThemeEngine Error: New name already in use.");if(this.themes.hasOwnProperty(a)){var c=this.copy(a,b);return this.remove(a),c}throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid")},a.jqplot.ThemeEngine.prototype.copy=function(b,c,d){if("Default"==c)throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme");if(!this.themes.hasOwnProperty(b)){var e="jqplot.ThemeEngine Error: Source name invalid";throw new Error(e)}if(this.themes.hasOwnProperty(c)){var e="jqplot.ThemeEngine Error: Target name invalid";throw new Error(e)}var f=A(this.themes[b]);return f._name=c,a.jqplot.extend(!0,f,d),this._add(f),f},a.jqplot.Theme=function(b,c){"object"==typeof b&&(c=c||b,b=null),b=b||Date.parse(new Date),this._name=b,this.target={backgroundColor:null},this.legend={textColor:null,fontFamily:null,fontSize:null,border:null,background:null},this.title={textColor:null,fontFamily:null,fontSize:null,textAlign:null},this.seriesStyles={},this.series=[],this.grid={drawGridlines:null,gridLineColor:null,gridLineWidth:null,backgroundColor:null,borderColor:null,borderWidth:null,shadow:null},this.axesStyles={label:{},ticks:{}},this.axes={},"string"==typeof c?this._name=c:"object"==typeof c&&a.jqplot.extend(!0,this,c)};var I=function(){this.borderColor=null,this.borderWidth=null,this.ticks=new J,this.label=new K},J=function(){this.show=null,this.showGridline=null,this.showLabel=null,this.showMark=null,this.size=null,this.textColor=null,this.whiteSpace=null,this.fontSize=null,this.fontFamily=null},K=function(){this.textColor=null,this.whiteSpace=null,this.fontSize=null,
this.fontFamily=null,this.fontWeight=null},L=function(){this.color=null,this.lineWidth=null,this.linePattern=null,this.shadow=null,this.fillColor=null,this.showMarker=null,this.markerOptions=new M},M=function(){this.show=null,this.style=null,this.lineWidth=null,this.size=null,this.color=null,this.shadow=null},N=function(){this.color=null,this.seriesColors=null,this.lineWidth=null,this.shadow=null,this.barPadding=null,this.barMargin=null,this.barWidth=null,this.highlightColors=null},O=function(){this.seriesColors=null,this.padding=null,this.sliceMargin=null,this.fill=null,this.shadow=null,this.startAngle=null,this.lineWidth=null,this.highlightColors=null},P=function(){this.seriesColors=null,this.padding=null,this.sliceMargin=null,this.fill=null,this.shadow=null,this.startAngle=null,this.lineWidth=null,this.innerDiameter=null,this.thickness=null,this.ringMargin=null,this.highlightColors=null},Q=function(){this.color=null,this.lineWidth=null,this.shadow=null,this.padding=null,this.sectionMargin=null,this.seriesColors=null,this.highlightColors=null},R=function(){this.padding=null,this.backgroundColor=null,this.ringColor=null,this.tickColor=null,this.ringWidth=null,this.intervalColors=null,this.intervalInnerRadius=null,this.intervalOuterRadius=null,this.hubRadius=null,this.needleThickness=null,this.needlePad=null};a.fn.jqplotChildText=function(){return a(this).contents().filter(function(){return 3==this.nodeType}).text()},a.fn.jqplotGetComputedFontStyle=function(){for(var a=window.getComputedStyle?window.getComputedStyle(this[0],""):this[0].currentStyle,b=a["font-style"]?["font-style","font-weight","font-size","font-family"]:["fontStyle","fontWeight","fontSize","fontFamily"],c=[],d=0;d<b.length;++d){var e=String(a[b[d]]);e&&"normal"!=e&&c.push(e)}return c.join(" ")},a.fn.jqplotToImageCanvas=function(b){function c(b){var c=parseInt(a(b).css("line-height"),10);return isNaN(c)&&(c=1.2*parseInt(a(b).css("font-size"),10)),c}function d(b,d,e,f,g,h){for(var i=c(b),j=a(b).innerWidth(),k=(a(b).innerHeight(),e.split(/\s+/)),l=k.length,m="",n=[],o=g,p=f,q=0;l>q;q++)m+=k[q],d.measureText(m).width>j&&m.length>k[q].length&&(n.push(q),m="",q--);if(0===n.length)"center"===a(b).css("textAlign")&&(p=f+(h-d.measureText(m).width)/2-s),d.fillText(e,p,g);else{m=k.slice(0,n[0]).join(" "),"center"===a(b).css("textAlign")&&(p=f+(h-d.measureText(m).width)/2-s),d.fillText(m,p,o),o+=i;for(var q=1,r=n.length;r>q;q++)m=k.slice(n[q-1],n[q]).join(" "),"center"===a(b).css("textAlign")&&(p=f+(h-d.measureText(m).width)/2-s),d.fillText(m,p,o),o+=i;m=k.slice(n[q-1],k.length).join(" "),"center"===a(b).css("textAlign")&&(p=f+(h-d.measureText(m).width)/2-s),d.fillText(m,p,o)}}function e(b,c,f){var g=b.tagName.toLowerCase(),h=a(b).position(),i=window.getComputedStyle?window.getComputedStyle(b,""):b.currentStyle,j=c+h.left+parseInt(i.marginLeft,10)+parseInt(i.borderLeftWidth,10)+parseInt(i.paddingLeft,10),k=f+h.top+parseInt(i.marginTop,10)+parseInt(i.borderTopWidth,10)+parseInt(i.paddingTop,10),l=m.width;if("div"!=g&&"span"!=g||a(b).hasClass("jqplot-highlighter-tooltip"))if("table"===g&&a(b).hasClass("jqplot-table-legend")){w.strokeStyle=a(b).css("border-top-color"),w.fillStyle=a(b).css("background-color"),w.fillRect(j,k,a(b).innerWidth(),a(b).innerHeight()),parseInt(a(b).css("border-top-width"),10)>0&&w.strokeRect(j,k,a(b).innerWidth(),a(b).innerHeight()),a(b).find("div.jqplot-table-legend-swatch-outline").each(function(){var b=a(this);w.strokeStyle=b.css("border-top-color");var c=j+b.position().left,d=k+b.position().top;w.strokeRect(c,d,b.innerWidth(),b.innerHeight()),c+=parseInt(b.css("padding-left"),10),d+=parseInt(b.css("padding-top"),10);var e=b.innerHeight()-2*parseInt(b.css("padding-top"),10),f=b.innerWidth()-2*parseInt(b.css("padding-left"),10),g=b.children("div.jqplot-table-legend-swatch");w.fillStyle=g.css("background-color"),w.fillRect(c,d,f,e)}),a(b).find("td.jqplot-table-legend-label").each(function(){var b=a(this),c=j+b.position().left,e=k+b.position().top+parseInt(b.css("padding-top"),10);w.font=b.jqplotGetComputedFontStyle(),w.fillStyle=b.css("color"),d(b,w,b.text(),c,e,l)})}else"canvas"==g&&w.drawImage(b,j,k);else{a(b).children().each(function(){e(this,j,k)});var n=a(b).jqplotChildText();n&&(w.font=a(b).jqplotGetComputedFontStyle(),w.fillStyle=a(b).css("color"),d(b,w,n,j,k,l))}}b=b||{};var f=null==b.x_offset?0:b.x_offset,g=null==b.y_offset?0:b.y_offset,h=null==b.backgroundColor?"rgb(255,255,255)":b.backgroundColor;if(0==a(this).width()||0==a(this).height())return null;if(a.jqplot.use_excanvas)return null;for(var i,j,k,l,m=document.createElement("canvas"),n=a(this).outerHeight(!0),o=a(this).outerWidth(!0),p=a(this).offset(),q=p.left,r=p.top,s=0,t=0,u=["jqplot-table-legend","jqplot-xaxis-tick","jqplot-x2axis-tick","jqplot-yaxis-tick","jqplot-y2axis-tick","jqplot-y3axis-tick","jqplot-y4axis-tick","jqplot-y5axis-tick","jqplot-y6axis-tick","jqplot-y7axis-tick","jqplot-y8axis-tick","jqplot-y9axis-tick","jqplot-xaxis-label","jqplot-x2axis-label","jqplot-yaxis-label","jqplot-y2axis-label","jqplot-y3axis-label","jqplot-y4axis-label","jqplot-y5axis-label","jqplot-y6axis-label","jqplot-y7axis-label","jqplot-y8axis-label","jqplot-y9axis-label"],v=0;v<u.length;v++)a(this).find("."+u[v]).each(function(){i=a(this).offset().top-r,j=a(this).offset().left-q,l=j+a(this).outerWidth(!0)+s,k=i+a(this).outerHeight(!0)+t,-s>j&&(o=o-s-j,s=-j),-t>i&&(n=n-t-i,t=-i),l>o&&(o=l),k>n&&(n=k)});m.width=o+Number(f),m.height=n+Number(g);var w=m.getContext("2d");return w.save(),w.fillStyle=h,w.fillRect(0,0,m.width,m.height),w.restore(),w.translate(s,t),w.textAlign="left",w.textBaseline="top",a(this).children().each(function(){e(this,f,g)}),m},a.fn.jqplotToImageStr=function(b){var c=a(this).jqplotToImageCanvas(b);return c?c.toDataURL("image/png"):null},a.fn.jqplotToImageElem=function(b){var c=document.createElement("img"),d=a(this).jqplotToImageStr(b);return c.src=d,c},a.fn.jqplotToImageElemStr=function(b){var c="<img src="+a(this).jqplotToImageStr(b)+" />";return c},a.fn.jqplotSaveImage=function(){var b=a(this).jqplotToImageStr({});b&&(window.location.href=b.replace("image/png","image/octet-stream"))},a.fn.jqplotViewImage=function(){var b=a(this).jqplotToImageElemStr({});a(this).jqplotToImageStr({});if(b){var c=window.open("");c.document.open("image/png"),c.document.write(b),c.document.close(),c=null}};var S=function(){switch(this.syntax=S.config.syntax,this._type="jsDate",this.proxy=new Date,this.options={},this.locale=S.regional.getLocale(),this.formatString="",this.defaultCentury=S.config.defaultCentury,arguments.length){case 0:break;case 1:if("[object Object]"==D(arguments[0])&&"jsDate"!=arguments[0]._type){var a=this.options=arguments[0];this.syntax=a.syntax||this.syntax,this.defaultCentury=a.defaultCentury||this.defaultCentury,this.proxy=S.createDate(a.date)}else this.proxy=S.createDate(arguments[0]);break;default:for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c]);this.proxy=new Date,this.proxy.setFullYear.apply(this.proxy,b.slice(0,3)),b.slice(3).length&&this.proxy.setHours.apply(this.proxy,b.slice(3))}};S.config={defaultLocale:"en",syntax:"perl",defaultCentury:1900},S.prototype.add=function(a,b){var c=V[b]||V.day;return"number"==typeof c?this.proxy.setTime(this.proxy.getTime()+c*a):c.add(this,a),this},S.prototype.clone=function(){return new S(this.proxy.getTime())},S.prototype.getUtcOffset=function(){return 6e4*this.proxy.getTimezoneOffset()},S.prototype.diff=function(a,b,c){if(a=new S(a),null===a)return null;var d=V[b]||V.day;if("number"==typeof d)var e=(this.proxy.getTime()-a.proxy.getTime())/d;else var e=d.diff(this.proxy,a.proxy);return c?e:Math[e>0?"floor":"ceil"](e)},S.prototype.getAbbrDayName=function(){return S.regional[this.locale].dayNamesShort[this.proxy.getDay()]},S.prototype.getAbbrMonthName=function(){return S.regional[this.locale].monthNamesShort[this.proxy.getMonth()]},S.prototype.getAMPM=function(){return this.proxy.getHours()>=12?"PM":"AM"},S.prototype.getAmPm=function(){return this.proxy.getHours()>=12?"pm":"am"},S.prototype.getCentury=function(){return parseInt(this.proxy.getFullYear()/100,10)},S.prototype.getDate=function(){return this.proxy.getDate()},S.prototype.getDay=function(){return this.proxy.getDay()},S.prototype.getDayOfWeek=function(){var a=this.proxy.getDay();return 0===a?7:a},S.prototype.getDayOfYear=function(){var a=this.proxy,b=a-new Date(""+a.getFullYear()+"/1/1 GMT");return b+=6e4*a.getTimezoneOffset(),a=null,parseInt(b/6e4/60/24,10)+1},S.prototype.getDayName=function(){return S.regional[this.locale].dayNames[this.proxy.getDay()]},S.prototype.getFullWeekOfYear=function(){var a=this.proxy,b=this.getDayOfYear(),c=6-a.getDay(),d=parseInt((b+c)/7,10);return d},S.prototype.getFullYear=function(){return this.proxy.getFullYear()},S.prototype.getGmtOffset=function(){var a=this.proxy.getTimezoneOffset()/60,b=0>a?"+":"-";return a=Math.abs(a),b+U(Math.floor(a),2)+":"+U(a%1*60,2)},S.prototype.getHours=function(){return this.proxy.getHours()},S.prototype.getHours12=function(){var a=this.proxy.getHours();return a>12?a-12:0==a?12:a},S.prototype.getIsoWeek=function(){var a=this.proxy,b=this.getWeekOfYear(),c=new Date(""+a.getFullYear()+"/1/1").getDay(),d=b+(c>4||1>=c?0:1);return 53==d&&new Date(""+a.getFullYear()+"/12/31").getDay()<4?d=1:0===d&&(a=new S(new Date(""+(a.getFullYear()-1)+"/12/31")),d=a.getIsoWeek()),a=null,d},S.prototype.getMilliseconds=function(){return this.proxy.getMilliseconds()},S.prototype.getMinutes=function(){return this.proxy.getMinutes()},S.prototype.getMonth=function(){return this.proxy.getMonth()},S.prototype.getMonthName=function(){return S.regional[this.locale].monthNames[this.proxy.getMonth()]},S.prototype.getMonthNumber=function(){return this.proxy.getMonth()+1},S.prototype.getSeconds=function(){return this.proxy.getSeconds()},S.prototype.getShortYear=function(){return this.proxy.getYear()%100},S.prototype.getTime=function(){return this.proxy.getTime()},S.prototype.getTimezoneAbbr=function(){return this.proxy.toString().replace(/^.*\(([^)]+)\)$/,"$1")},S.prototype.getTimezoneName=function(){var a=/(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());return a[1]||a[2]||"GMT"+this.getGmtOffset()},S.prototype.getTimezoneOffset=function(){return this.proxy.getTimezoneOffset()},S.prototype.getWeekOfYear=function(){var a=this.getDayOfYear(),b=7-this.getDayOfWeek(),c=parseInt((a+b)/7,10);return c},S.prototype.getUnix=function(){return Math.round(this.proxy.getTime()/1e3,0)},S.prototype.getYear=function(){return this.proxy.getYear()},S.prototype.next=function(a){return a=a||"day",this.clone().add(1,a)},S.prototype.set=function(){switch(arguments.length){case 0:this.proxy=new Date;break;case 1:if("[object Object]"==D(arguments[0])&&"jsDate"!=arguments[0]._type){var a=this.options=arguments[0];this.syntax=a.syntax||this.syntax,this.defaultCentury=a.defaultCentury||this.defaultCentury,this.proxy=S.createDate(a.date)}else this.proxy=S.createDate(arguments[0]);break;default:for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c]);this.proxy=new Date,this.proxy.setFullYear.apply(this.proxy,b.slice(0,3)),b.slice(3).length&&this.proxy.setHours.apply(this.proxy,b.slice(3))}return this},S.prototype.setDate=function(a){return this.proxy.setDate(a),this},S.prototype.setFullYear=function(){return this.proxy.setFullYear.apply(this.proxy,arguments),this},S.prototype.setHours=function(){return this.proxy.setHours.apply(this.proxy,arguments),this},S.prototype.setMilliseconds=function(a){return this.proxy.setMilliseconds(a),this},S.prototype.setMinutes=function(){return this.proxy.setMinutes.apply(this.proxy,arguments),this},S.prototype.setMonth=function(){return this.proxy.setMonth.apply(this.proxy,arguments),this},S.prototype.setSeconds=function(){return this.proxy.setSeconds.apply(this.proxy,arguments),this},S.prototype.setTime=function(a){return this.proxy.setTime(a),this},S.prototype.setYear=function(){return this.proxy.setYear.apply(this.proxy,arguments),this},S.prototype.strftime=function(a){return a=a||this.formatString||S.regional[this.locale].formatString,S.strftime(this,a,this.syntax)},S.prototype.toString=function(){return this.proxy.toString()},S.prototype.toYmdInt=function(){return 1e4*this.proxy.getFullYear()+100*this.getMonthNumber()+this.proxy.getDate()},S.regional={en:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],formatString:"%Y-%m-%d %H:%M:%S"},fr:{monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthNamesShort:["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],formatString:"%Y-%m-%d %H:%M:%S"},de:{monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],formatString:"%Y-%m-%d %H:%M:%S"},es:{monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],dayNames:["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"],dayNamesShort:["Dom","Lun","Mar","Mi&eacute;","Juv","Vie","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},ru:{monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],formatString:"%Y-%m-%d %H:%M:%S"},ar:{monthNames:["كانون الثاني","شباط","آذار","نيسان","آذار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"],dayNamesShort:["سبت","أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة"],formatString:"%Y-%m-%d %H:%M:%S"},pt:{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},"pt-BR":{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},pl:{monthNames:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],monthNamesShort:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],dayNames:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],dayNamesShort:["Ni","Pn","Wt","Śr","Cz","Pt","Sb"],formatString:"%Y-%m-%d %H:%M:%S"},nl:{monthNames:["Januari","Februari","Maart","April","Mei","Juni","July","Augustus","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:",".Zaterdag,dayNamesShort:["Zo","Ma","Di","Wo","Do","Vr","Za"],formatString:"%Y-%m-%d %H:%M:%S"},sv:{monthNames:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],monthNamesShort:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],dayNames:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],dayNamesShort:["sön","mån","tis","ons","tor","fre","lör"],formatString:"%Y-%m-%d %H:%M:%S"},it:{monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],formatString:"%d-%m-%Y %H:%M:%S"}},S.regional["en-US"]=S.regional["en-GB"]=S.regional.en,S.regional.getLocale=function(){var a=S.config.defaultLocale;return document&&document.getElementsByTagName("html")&&document.getElementsByTagName("html")[0].lang&&(a=document.getElementsByTagName("html")[0].lang,S.regional.hasOwnProperty(a)||(a=S.config.defaultLocale)),a};var T=864e5,U=function(a,b){a=String(a);var c=b-a.length,d=String(Math.pow(10,c)).slice(1);return d.concat(a)},V={millisecond:1,second:1e3,minute:6e4,hour:36e5,day:T,week:7*T,month:{add:function(a,b){V.year.add(a,Math[b>0?"floor":"ceil"](b/12));var c=a.getMonth()+b%12;12==c?(c=0,a.setYear(a.getFullYear()+1)):-1==c&&(c=11,a.setYear(a.getFullYear()-1)),a.setMonth(c)},diff:function(a,b){var c=a.getFullYear()-b.getFullYear(),d=a.getMonth()-b.getMonth()+12*c,e=a.getDate()-b.getDate();return d+e/30}},year:{add:function(a,b){a.setYear(a.getFullYear()+Math[b>0?"floor":"ceil"](b))},diff:function(a,b){return V.month.diff(a,b)/12}}};for(var W in V)"s"!=W.substring(W.length-1)&&(V[W+"s"]=V[W]);var X=function(a,b,c){if(S.formats[c].shortcuts[b])return S.strftime(a,S.formats[c].shortcuts[b],c);var d=(S.formats[c].codes[b]||"").split("."),e=a["get"+d[0]]?a["get"+d[0]]():"";return d[1]&&(e=U(e,d[1])),e};S.strftime=function(a,b,c,d){var e="perl",f=S.regional.getLocale();c&&S.formats.hasOwnProperty(c)?e=c:c&&S.regional.hasOwnProperty(c)&&(f=c),d&&S.formats.hasOwnProperty(d)?e=d:d&&S.regional.hasOwnProperty(d)&&(f=d),("[object Object]"!=D(a)||"jsDate"!=a._type)&&(a=new S(a),a.locale=f),b||(b=a.formatString||S.regional[f].formatString);for(var g,h=b||"%Y-%m-%d",i="";h.length>0;)(g=h.match(S.formats[e].codes.matcher))?(i+=h.slice(0,g.index),i+=(g[1]||"")+X(a,g[2],e),h=h.slice(g.index+g[0].length)):(i+=h,h="");return i},S.formats={ISO:"%Y-%m-%dT%H:%M:%S.%N%G",SQL:"%Y-%m-%d %H:%M:%S"},S.formats.perl={codes:{matcher:/()%(#?(%|[a-z]))/i,Y:"FullYear",y:"ShortYear.2",m:"MonthNumber.2","#m":"MonthNumber",B:"MonthName",b:"AbbrMonthName",d:"Date.2","#d":"Date",e:"Date",A:"DayName",a:"AbbrDayName",w:"Day",H:"Hours.2","#H":"Hours",I:"Hours12.2","#I":"Hours12",p:"AMPM",M:"Minutes.2","#M":"Minutes",S:"Seconds.2","#S":"Seconds",s:"Unix",N:"Milliseconds.3","#N":"Milliseconds",O:"TimezoneOffset",Z:"TimezoneName",G:"GmtOffset"},shortcuts:{F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",D:"%m/%d/%y","#c":"%a %b %e %H:%M:%S %Y",v:"%e-%b-%Y",R:"%H:%M",r:"%I:%M:%S %p",t:"	",n:"\n","%":"%"}},S.formats.php={codes:{matcher:/()%((%|[a-z]))/i,a:"AbbrDayName",A:"DayName",d:"Date.2",e:"Date",j:"DayOfYear.3",u:"DayOfWeek",w:"Day",U:"FullWeekOfYear.2",V:"IsoWeek.2",W:"WeekOfYear.2",b:"AbbrMonthName",B:"MonthName",m:"MonthNumber.2",h:"AbbrMonthName",C:"Century.2",y:"ShortYear.2",Y:"FullYear",H:"Hours.2",I:"Hours12.2",l:"Hours12",p:"AMPM",P:"AmPm",M:"Minutes.2",S:"Seconds.2",s:"Unix",O:"TimezoneOffset",z:"GmtOffset",Z:"TimezoneAbbr"},shortcuts:{D:"%m/%d/%y",F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",R:"%H:%M",r:"%I:%M:%S %p",t:"	",n:"\n","%":"%"}},S.createDate=function(a){function b(a,b){var c,d,e,f,g=parseFloat(b[1]),h=parseFloat(b[2]),i=parseFloat(b[3]),j=S.config.defaultCentury;return g>31?(d=i,e=h,c=j+g):(d=h,e=g,c=j+i),f=e+"/"+d+"/"+c,a.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/,f)}if(null==a)return new Date;if(a instanceof Date)return a;if("number"==typeof a)return new Date(a);var c=String(a).replace(/^\s*(.+)\s*$/g,"$1");c=c.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/,"$1/$2/$3"),c=c.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i,"$1 $2 $3");var d=c.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);if(d&&d.length>3){var e=parseFloat(d[3]),f=S.config.defaultCentury+e;f=String(f),c=c.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i,d[1]+" "+d[2]+" "+f)}d=c.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/),d&&d.length>3&&(c=b(c,d));var d=c.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);d&&d.length>3&&(c=b(c,d));for(var g,h,i,j=0,k=S.matchers.length,l=c;k>j;){if(h=Date.parse(l),!isNaN(h))return new Date(h);if(g=S.matchers[j],"function"==typeof g){if(i=g.call(S,l),i instanceof Date)return i}else l=c.replace(g[0],g[1]);j++}return NaN},S.daysInMonth=function(a,b){return 2==b?29==new Date(a,1,29).getDate()?29:28:[F,31,F,31,30,31,30,31,31,30,31,30,31][b]},S.matchers=[[/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/,"$2/$1/$3"],[/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/,"$2/$3/$1"],function(a){var b=a.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);if(b){if(b[1]){var c=this.createDate(b[1]);if(isNaN(c))return}else{var c=new Date;c.setMilliseconds(0)}var d=parseFloat(b[2]);return b[6]&&(d="am"==b[6].toLowerCase()?12==d?0:d:12==d?12:d+12),c.setHours(d,parseInt(b[3]||0,10),parseInt(b[4]||0,10),1e3*(parseFloat(b[5]||0)||0)),c}return a},function(a){var b=a.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);if(b){if(b[1]){var c=this.createDate(b[1]);if(isNaN(c))return}else{var c=new Date;c.setMilliseconds(0)}var d=parseFloat(b[2]);return c.setHours(d,parseInt(b[3],10),parseInt(b[4],10),1e3*parseFloat(b[5])),c}return a},function(a){var b=a.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);if(b){var c,d,e,f=new Date,g=S.config.defaultCentury,h=parseFloat(b[1]),i=parseFloat(b[3]);h>31?(d=i,c=g+h):(d=h,c=g+i);var e=C(b[2],S.regional[S.regional.getLocale()].monthNamesShort);return-1==e&&(e=C(b[2],S.regional[S.regional.getLocale()].monthNames)),f.setFullYear(c,e,d),f.setHours(0,0,0,0),f}return a}],a.jsDate=S,a.jqplot.sprintf=function(){function b(a,b,c,d){var e=a.length>=b?"":Array(1+b-a.length>>>0).join(c);return d?a+e:e+a}function c(b){for(var c=new String(b),d=10;d>0&&c!=(c=c.replace(/^(\d+)(\d{3})/,"$1"+a.jqplot.sprintf.thousandsSeparator+"$2"));d--);return c}function d(a,c,d,e,f,g){var h=e-a.length;if(h>0){var i=" ";g&&(i="&nbsp;"),a=d||!f?b(a,e,i,d):a.slice(0,c.length)+b("",h,"0",!0)+a.slice(c.length)}return a}function e(a,c,e,f,g,h,i,j){var k=a>>>0;return e=e&&k&&{2:"0b",8:"0",16:"0x"}[c]||"",a=e+b(k.toString(c),h||0,"0",!1),d(a,e,f,g,i,j)}function f(a,b,c,e,f,g){return null!=e&&(a=a.slice(0,e)),d(a,"",b,c,f,g)}var g=arguments,h=0,i=g[h++];return i.replace(a.jqplot.sprintf.regex,function(i,j,k,l,m,n,o){if("%%"==i)return"%";for(var p=!1,q="",r=!1,s=!1,t=!1,u=!1,v=0;k&&v<k.length;v++)switch(k.charAt(v)){case" ":q=" ";break;case"+":q="+";break;case"-":p=!0;break;case"0":r=!0;break;case"#":s=!0;break;case"&":t=!0;break;case"'":u=!0}if(l=l?"*"==l?+g[h++]:"*"==l.charAt(0)?+g[l.slice(1,-1)]:+l:0,0>l&&(l=-l,p=!0),!isFinite(l))throw new Error("$.jqplot.sprintf: (minimum-)width must be finite");n=n?"*"==n?+g[h++]:"*"==n.charAt(0)?+g[n.slice(1,-1)]:+n:"fFeE".indexOf(o)>-1?6:"d"==o?0:void 0;var w=j?g[j.slice(0,-1)]:g[h++];switch(o){case"s":return null==w?"":f(String(w),p,l,n,r,t);case"c":return f(String.fromCharCode(+w),p,l,n,r,t);case"b":return e(w,2,s,p,l,n,r,t);case"o":return e(w,8,s,p,l,n,r,t);case"x":return e(w,16,s,p,l,n,r,t);case"X":return e(w,16,s,p,l,n,r,t).toUpperCase();case"u":return e(w,10,s,p,l,n,r,t);case"i":var x=parseInt(+w,10);if(isNaN(x))return"";var y=0>x?"-":q,z=u?c(String(Math.abs(x))):String(Math.abs(x));return w=y+b(z,n,"0",!1),d(w,y,p,l,r,t);case"d":var x=Math.round(+w);if(isNaN(x))return"";var y=0>x?"-":q,z=u?c(String(Math.abs(x))):String(Math.abs(x));return w=y+b(z,n,"0",!1),d(w,y,p,l,r,t);case"e":case"E":case"f":case"F":case"g":case"G":var x=+w;if(isNaN(x))return"";var y=0>x?"-":q,A=["toExponential","toFixed","toPrecision"]["efg".indexOf(o.toLowerCase())],B=["toString","toUpperCase"]["eEfFgG".indexOf(o)%2],z=Math.abs(x)[A](n),C=z.toString().split(".");C[0]=u?c(C[0]):C[0],z=C.join(a.jqplot.sprintf.decimalMark),w=y+z;var D=d(w,y,p,l,r,t)[B]();return D;case"p":case"P":var x=+w;if(isNaN(x))return"";var y=0>x?"-":q,C=String(Number(Math.abs(x)).toExponential()).split(/e|E/),E=-1!=C[0].indexOf(".")?C[0].length-1:String(x).length,F=C[1]<0?-C[1]-1:0;if(Math.abs(x)<1)w=n>=E+F?y+Math.abs(x).toPrecision(E):n-1>=E?y+Math.abs(x).toExponential(E-1):y+Math.abs(x).toExponential(n-1);else{var G=n>=E?E:n;w=y+Math.abs(x).toPrecision(G)}var B=["toString","toUpperCase"]["pP".indexOf(o)%2];return d(w,y,p,l,r,t)[B]();case"n":return"";default:return i}})},a.jqplot.sprintf.thousandsSeparator=",",a.jqplot.sprintf.decimalMark=".",a.jqplot.sprintf.regex=/%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g,a.jqplot.getSignificantFigures=function(a){var b=String(Number(Math.abs(a)).toExponential()).split(/e|E/),c=-1!=b[0].indexOf(".")?b[0].length-1:b[0].length,d=b[1]<0?-b[1]-1:0,e=parseInt(b[1],10),f=e+1>0?e+1:0,g=f>=c?0:c-e-1;return{significantDigits:c,digitsLeft:f,digitsRight:g,zeros:d,exponent:e}},a.jqplot.getPrecision=function(b){return a.jqplot.getSignificantFigures(b).digitsRight};var Y=a.uiBackCompat!==!1;a.jqplot.effects={effect:{}};var Z="jqplot.storage.";a.extend(a.jqplot.effects,{version:"1.9pre",save:function(a,b){for(var c=0;c<b.length;c++)null!==b[c]&&a.data(Z+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)null!==b[c]&&a.css(b[c],a.data(Z+b[c]))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b}}),a.fn.extend({jqplotEffect:function(b,c,d,e){function f(b){function c(){a.isFunction(e)&&e.call(d[0]),a.isFunction(b)&&b()}var d=a(this),e=g.complete,f=g.mode;(d.is(":hidden")?"hide"===f:"show"===f)?c():j.call(d[0],g,c)}var g=E.apply(this,arguments),h=g.mode,i=g.queue,j=a.jqplot.effects.effect[g.effect],k=!j&&Y&&a.jqplot.effects[g.effect];return a.fx.off||!j&&!k?h?this[h](g.duration,g.complete):this.each(function(){g.complete&&g.complete.call(this)}):j?i===!1?this.each(f):this.queue(i||"fx",f):k.call(this,{options:g,duration:g.duration,callback:g.complete,mode:g.mode})}});var $=/up|down|vertical/,_=/up|left|vertical|horizontal/;a.jqplot.effects.effect.blind=function(b,c){var d,e,f,g=a(this),h=["position","top","bottom","left","right","height","width"],i=a.jqplot.effects.setMode(g,b.mode||"hide"),j=b.direction||"up",k=$.test(j),l=k?"height":"width",m=k?"top":"left",n=_.test(j),o={},p="show"===i;g.parent().is(".ui-effects-wrapper")?a.jqplot.effects.save(g.parent(),h):a.jqplot.effects.save(g,h),g.show(),f=parseInt(g.css("top"),10),d=a.jqplot.effects.createWrapper(g).css({overflow:"hidden"}),e=k?d[l]()+f:d[l](),o[l]=p?String(e):"0",n||(g.css(k?"bottom":"right",0).css(k?"top":"left","").css({position:"absolute"}),o[m]=p?"0":String(e)),p&&(d.css(l,0),n||d.css(m,e)),d.animate(o,{duration:b.duration,easing:b.easing,queue:!1,complete:function(){"hide"===i&&g.hide(),a.jqplot.effects.restore(g,h),a.jqplot.effects.removeWrapper(g),c()}})}}(jQuery);
/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.9
 * Revision: d96a669
 *
 * Copyright (c) 2009-2016 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function($) {
    
    /**
     * Class: $.jqplot.Cursor
     * Plugin class representing the cursor as displayed on the plot.
     */
    $.jqplot.Cursor = function(options) {
        // Group: Properties
        //
        // prop: style
        // CSS spec for cursor style
        this.style = 'crosshair';
        this.previousCursor = 'auto';
        // prop: show
        // whether to show the cursor or not.
        this.show = $.jqplot.config.enablePlugins;
        // prop: showTooltip
        // show a cursor position tooltip.  Location of the tooltip
        // will be controlled by followMouse and tooltipLocation.
        this.showTooltip = true;
        // prop: followMouse
        // Tooltip follows the mouse, it is not at a fixed location.
        // Tooltip will show on the grid at the location given by
        // tooltipLocation, offset from the grid edge by tooltipOffset.
        this.followMouse = false;
        // prop: tooltipLocation
        // Where to position tooltip.  If followMouse is true, this is
        // relative to the cursor, otherwise, it is relative to the grid.
        // One of 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'
        this.tooltipLocation = 'se';
        // prop: tooltipOffset
        // Pixel offset of tooltip from the grid boudaries or cursor center.
        this.tooltipOffset = 6;
        // prop: showTooltipGridPosition
        // show the grid pixel coordinates of the mouse.
        this.showTooltipGridPosition = false;
        // prop: showTooltipUnitPosition
        // show the unit (data) coordinates of the mouse.
        this.showTooltipUnitPosition = true;
        // prop: showTooltipDataPosition
        // Used with showVerticalLine to show intersecting data points in the tooltip.
        this.showTooltipDataPosition = false;
        // prop: tooltipFormatString
        // sprintf format string for the tooltip.
        // Uses Ash Searle's javascript sprintf implementation
        // found here: http://hexmen.com/blog/2007/03/printf-sprintf/
        // See http://perldoc.perl.org/functions/sprintf.html for reference
        // Note, if showTooltipDataPosition is true, the default tooltipFormatString
        // will be set to the cursorLegendFormatString, not the default given here.
        this.tooltipFormatString = '%.4P, %.4P';
        // prop: useAxesFormatters
        // Use the x and y axes formatters to format the text in the tooltip.
        this.useAxesFormatters = true;
        // prop: tooltipAxisGroups
        // Show position for the specified axes.
        // This is an array like [['xaxis', 'yaxis'], ['xaxis', 'y2axis']]
        // Default is to compute automatically for all visible axes.
        this.tooltipAxisGroups = [];
        // prop: zoom
        // Enable plot zooming.
        this.zoom = false;
        // zoomProxy and zoomTarget properties are not directly set by user.  
        // They Will be set through call to zoomProxy method.
        this.zoomProxy = false;
        this.zoomTarget = false;
        // prop: looseZoom
        // Will expand zoom range to provide more rounded tick values.
        // Works only with linear, log and date axes.
        this.looseZoom = true;
        // prop: clickReset
        // Will reset plot zoom if single click on plot without drag.
        this.clickReset = false;
        // prop: dblClickReset
        // Will reset plot zoom if double click on plot without drag.
        this.dblClickReset = true;
        // prop: showVerticalLine
        // draw a vertical line across the plot which follows the cursor.
        // When the line is near a data point, a special legend and/or tooltip can
        // be updated with the data values.
        this.showVerticalLine = false;
        // prop: showHorizontalLine
        // draw a horizontal line across the plot which follows the cursor.
        this.showHorizontalLine = false;
        // prop: constrainZoomTo
        // 'none', 'x' or 'y'
        this.constrainZoomTo = 'none';
        // // prop: autoscaleConstraint
        // // when a constrained axis is specified, true will
        // // auatoscale the adjacent axis.
        // this.autoscaleConstraint = true;
        this.shapeRenderer = new $.jqplot.ShapeRenderer();
        this._zoom = {start:[], end:[], started: false, zooming:false, isZoomed:false, axes:{start:{}, end:{}}, gridpos:{}, datapos:{}};
        this._tooltipElem;
        this.zoomCanvas;
        this.cursorCanvas;
        // prop: intersectionThreshold
        // pixel distance from data point or marker to consider cursor lines intersecting with point.
        // If data point markers are not shown, this should be >= 1 or will often miss point intersections.
        this.intersectionThreshold = 2;
        // prop: showCursorLegend
        // Replace the plot legend with an enhanced legend displaying intersection information.
        this.showCursorLegend = false;
        // prop: cursorLegendFormatString
        // Format string used in the cursor legend.  If showTooltipDataPosition is true,
        // this will also be the default format string used by tooltipFormatString.
        this.cursorLegendFormatString = $.jqplot.Cursor.cursorLegendFormatString;
        // whether the cursor is over the grid or not.
        this._oldHandlers = {onselectstart: null, ondrag: null, onmousedown: null};
        // prop: constrainOutsideZoom
        // True to limit actual zoom area to edges of grid, even when zooming
        // outside of plot area.  That is, can't zoom out by mousing outside plot.
        this.constrainOutsideZoom = true;
        // prop: showTooltipOutsideZoom
        // True will keep updating the tooltip when zooming of the grid.
        this.showTooltipOutsideZoom = false;
        // true if mouse is over grid, false if not.
        this.onGrid = false;
        $.extend(true, this, options);
    };
    
    $.jqplot.Cursor.cursorLegendFormatString = '%s x:%s, y:%s';
    
    // called with scope of plot
    $.jqplot.Cursor.init = function (target, data, opts){
        // add a cursor attribute to the plot
        var options = opts || {};
        this.plugins.cursor = new $.jqplot.Cursor(options.cursor);
        var c = this.plugins.cursor;

        if (c.show) {
            $.jqplot.eventListenerHooks.push(['jqplotMouseEnter', handleMouseEnter]);
            $.jqplot.eventListenerHooks.push(['jqplotMouseLeave', handleMouseLeave]);
            $.jqplot.eventListenerHooks.push(['jqplotMouseMove', handleMouseMove]);
            
            if (c.showCursorLegend) {              
                opts.legend = opts.legend || {};
                opts.legend.renderer =  $.jqplot.CursorLegendRenderer;
                opts.legend.formatString = this.plugins.cursor.cursorLegendFormatString;
                opts.legend.show = true;
            }
            
            if (c.zoom) {
                $.jqplot.eventListenerHooks.push(['jqplotMouseDown', handleMouseDown]);
                
                if (c.clickReset) {
                    $.jqplot.eventListenerHooks.push(['jqplotClick', handleClick]);
                }
                
                if (c.dblClickReset) {
                    $.jqplot.eventListenerHooks.push(['jqplotDblClick', handleDblClick]);
                }             
            }
    
            this.resetZoom = function() {
                var axes = this.axes;
                if (!c.zoomProxy) {
                    for (var ax in axes) {
                        axes[ax].reset();
                        axes[ax]._ticks = [];
                        // fake out tick creation algorithm to make sure original auto
                        // computed format string is used if _overrideFormatString is true
                        if (c._zoom.axes[ax] !== undefined) {
                            axes[ax]._autoFormatString = c._zoom.axes[ax].tickFormatString;
                        }
                    }
                    this.redraw();
                }
                else {
                    var ctx = this.plugins.cursor.zoomCanvas._ctx;
                    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
                    ctx = null;
                }
                this.plugins.cursor._zoom.isZoomed = false;
                this.target.trigger('jqplotResetZoom', [this, this.plugins.cursor]);
            };
            

            if (c.showTooltipDataPosition) {
                c.showTooltipUnitPosition = false;
                c.showTooltipGridPosition = false;
                if (options.cursor.tooltipFormatString == undefined) {
                    c.tooltipFormatString = $.jqplot.Cursor.cursorLegendFormatString;
                }
            }
        }
    };
    
    // called with context of plot
    $.jqplot.Cursor.postDraw = function() {
        var c = this.plugins.cursor;
        
        // Memory Leaks patch
        if (c.zoomCanvas) {
            c.zoomCanvas.resetCanvas();
            c.zoomCanvas = null;
        }
        
        if (c.cursorCanvas) {
            c.cursorCanvas.resetCanvas();
            c.cursorCanvas = null;
        }
        
        if (c._tooltipElem) {
            c._tooltipElem.emptyForce();
            c._tooltipElem = null;
        }

        
        if (c.zoom) {
            c.zoomCanvas = new $.jqplot.GenericCanvas();
            this.eventCanvas._elem.before(c.zoomCanvas.createElement(this._gridPadding, 'jqplot-zoom-canvas', this._plotDimensions, this));
            c.zoomCanvas.setContext();
        }

        var elem = document.createElement('div');
        c._tooltipElem = $(elem);
        elem = null;
        c._tooltipElem.addClass('jqplot-cursor-tooltip');
        c._tooltipElem.css({position:'absolute', display:'none'});
        
        
        if (c.zoomCanvas) {
            c.zoomCanvas._elem.before(c._tooltipElem);
        }

        else {
            this.eventCanvas._elem.before(c._tooltipElem);
        }

        if (c.showVerticalLine || c.showHorizontalLine) {
            c.cursorCanvas = new $.jqplot.GenericCanvas();
            this.eventCanvas._elem.before(c.cursorCanvas.createElement(this._gridPadding, 'jqplot-cursor-canvas', this._plotDimensions, this));
            c.cursorCanvas.setContext();
        }

        // if we are showing the positions in unit coordinates, and no axes groups
        // were specified, create a default set.
        if (c.showTooltipUnitPosition){
            if (c.tooltipAxisGroups.length === 0) {
                var series = this.series;
                var s;
                var temp = [];
                for (var i=0; i<series.length; i++) {
                    s = series[i];
                    var ax = s.xaxis+','+s.yaxis;
                    if ($.inArray(ax, temp) == -1) {
                        temp.push(ax);
                    }
                }
                for (var i=0; i<temp.length; i++) {
                    c.tooltipAxisGroups.push(temp[i].split(','));
                }
            }
        }
    };
    
    // Group: methods
    //
    // method: $.jqplot.Cursor.zoomProxy
    // links targetPlot to controllerPlot so that plot zooming of
    // targetPlot will be controlled by zooming on the controllerPlot.
    // controllerPlot will not actually zoom, but acts as an
    // overview plot.  Note, the zoom options must be set to true for
    // zoomProxy to work.
    $.jqplot.Cursor.zoomProxy = function(targetPlot, controllerPlot) {
        var tc = targetPlot.plugins.cursor;
        var cc = controllerPlot.plugins.cursor;
        tc.zoomTarget = true;
        tc.zoom = true;
        tc.style = 'auto';
        tc.dblClickReset = false;
        cc.zoom = true;
        cc.zoomProxy = true;
              
        controllerPlot.target.bind('jqplotZoom', plotZoom);
        controllerPlot.target.bind('jqplotResetZoom', plotReset);

        function plotZoom(ev, gridpos, datapos, plot, cursor) {
            tc.doZoom(gridpos, datapos, targetPlot, cursor);
        } 

        function plotReset(ev, plot, cursor) {
            targetPlot.resetZoom();
        }
    };
    
    $.jqplot.Cursor.prototype.resetZoom = function(plot, cursor) {
        var axes = plot.axes;
        var cax = cursor._zoom.axes;
        if (!plot.plugins.cursor.zoomProxy && cursor._zoom.isZoomed) {
            for (var ax in axes) {
                // axes[ax]._ticks = [];
                // axes[ax].min = cax[ax].min;
                // axes[ax].max = cax[ax].max;
                // axes[ax].numberTicks = cax[ax].numberTicks; 
                // axes[ax].tickInterval = cax[ax].tickInterval;
                // // for date axes
                // axes[ax].daTickInterval = cax[ax].daTickInterval;
                axes[ax].reset();
                axes[ax]._ticks = [];
                // fake out tick creation algorithm to make sure original auto
                // computed format string is used if _overrideFormatString is true
                axes[ax]._autoFormatString = cax[ax].tickFormatString;
            }
            plot.redraw();
            cursor._zoom.isZoomed = false;
        }
        else {
            var ctx = cursor.zoomCanvas._ctx;
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            ctx = null;
        }
        plot.target.trigger('jqplotResetZoom', [plot, cursor]);
    };
    
    $.jqplot.Cursor.resetZoom = function(plot) {
        plot.resetZoom();
    };
    
    $.jqplot.Cursor.prototype.doZoom = function (gridpos, datapos, plot, cursor) {
        var c = cursor;
        var axes = plot.axes;
        var zaxes = c._zoom.axes;
        var start = zaxes.start;
        var end = zaxes.end;
        var min, max, dp, span,
            newmin, newmax, curax, _numberTicks, ret;
        var ctx = plot.plugins.cursor.zoomCanvas._ctx;
        // don't zoom if zoom area is too small (in pixels)
        if ((c.constrainZoomTo == 'none' && Math.abs(gridpos.x - c._zoom.start[0]) > 6 && Math.abs(gridpos.y - c._zoom.start[1]) > 6) || (c.constrainZoomTo == 'x' && Math.abs(gridpos.x - c._zoom.start[0]) > 6) ||  (c.constrainZoomTo == 'y' && Math.abs(gridpos.y - c._zoom.start[1]) > 6)) {
            if (!plot.plugins.cursor.zoomProxy) {
                for (var ax in datapos) {
                    // make a copy of the original axes to revert back.
                    if (c._zoom.axes[ax] == undefined) {
                        c._zoom.axes[ax] = {};
                        c._zoom.axes[ax].numberTicks = axes[ax].numberTicks;
                        c._zoom.axes[ax].tickInterval = axes[ax].tickInterval;
                        // for date axes...
                        c._zoom.axes[ax].daTickInterval = axes[ax].daTickInterval;
                        c._zoom.axes[ax].min = axes[ax].min;
                        c._zoom.axes[ax].max = axes[ax].max;
                        c._zoom.axes[ax].tickFormatString = (axes[ax].tickOptions != null) ? axes[ax].tickOptions.formatString :  '';
                    }


                    if ((c.constrainZoomTo == 'none') || (c.constrainZoomTo == 'x' && ax.charAt(0) == 'x') || (c.constrainZoomTo == 'y' && ax.charAt(0) == 'y')) {   
                        dp = datapos[ax];
                        if (dp != null) {           
                            if (dp > start[ax]) { 
                                newmin = start[ax];
                                newmax = dp;
                            }
                            else {
                                span = start[ax] - dp;
                                newmin = dp;
                                newmax = start[ax];
                            }

                            curax = axes[ax];

                            _numberTicks = null;

                            // if aligning this axis, use number of ticks from previous axis.
                            // Do I need to reset somehow if alignTicks is changed and then graph is replotted??
                            if (curax.alignTicks) {
                                if (curax.name === 'x2axis' && plot.axes.xaxis.show) {
                                    _numberTicks = plot.axes.xaxis.numberTicks;
                                }
                                else if (curax.name.charAt(0) === 'y' && curax.name !== 'yaxis' && curax.name !== 'yMidAxis' && plot.axes.yaxis.show) {
                                    _numberTicks = plot.axes.yaxis.numberTicks;
                                }
                            }
                            
                            if (this.looseZoom && (axes[ax].renderer.constructor === $.jqplot.LinearAxisRenderer || axes[ax].renderer.constructor === $.jqplot.LogAxisRenderer )) { //} || axes[ax].renderer.constructor === $.jqplot.DateAxisRenderer)) {

                                ret = $.jqplot.LinearTickGenerator(newmin, newmax, curax._scalefact, _numberTicks);

                                // if new minimum is less than "true" minimum of axis display, adjust it
                                if (axes[ax].tickInset && ret[0] < axes[ax].min + axes[ax].tickInset * axes[ax].tickInterval) {
                                    ret[0] += ret[4];
                                    ret[2] -= 1;
                                }

                                // if new maximum is greater than "true" max of axis display, adjust it
                                if (axes[ax].tickInset && ret[1] > axes[ax].max - axes[ax].tickInset * axes[ax].tickInterval) {
                                    ret[1] -= ret[4];
                                    ret[2] -= 1;
                                }

                                // for log axes, don't fall below current minimum, this will look bad and can't have 0 in range anyway.
                                if (axes[ax].renderer.constructor === $.jqplot.LogAxisRenderer && ret[0] < axes[ax].min) {
                                    // remove a tick and shift min up
                                    ret[0] += ret[4];
                                    ret[2] -= 1;
                                }

                                axes[ax].min = ret[0];
                                axes[ax].max = ret[1];
                                axes[ax]._autoFormatString = ret[3];
                                axes[ax].numberTicks = ret[2];
                                axes[ax].tickInterval = ret[4];
                                // for date axes...
                                axes[ax].daTickInterval = [ret[4]/1000, 'seconds'];
                            }
                            else {
                                axes[ax].min = newmin;
                                axes[ax].max = newmax;
                                axes[ax].tickInterval = null;
                                axes[ax].numberTicks = null;
                                // for date axes...
                                axes[ax].daTickInterval = null;
                            }

                            axes[ax]._ticks = [];
                        }
                    }
                            
                    // if ((c.constrainZoomTo == 'x' && ax.charAt(0) == 'y' && c.autoscaleConstraint) || (c.constrainZoomTo == 'y' && ax.charAt(0) == 'x' && c.autoscaleConstraint)) {
                    //     dp = datapos[ax];
                    //     if (dp != null) {
                    //         axes[ax].max == null;
                    //         axes[ax].min = null;
                    //     }
                    // }
                }
                ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
                plot.redraw();
                c._zoom.isZoomed = true;
                ctx = null;
            }
            plot.target.trigger('jqplotZoom', [gridpos, datapos, plot, cursor]);
        }
    };
    
    $.jqplot.preInitHooks.push($.jqplot.Cursor.init);
    $.jqplot.postDrawHooks.push($.jqplot.Cursor.postDraw);
    
    function updateTooltip(gridpos, datapos, plot) {
        var c = plot.plugins.cursor;
        var s = '';
        var addbr = false;
        if (c.showTooltipGridPosition) {
            s = gridpos.x+', '+gridpos.y;
            addbr = true;
        }
        if (c.showTooltipUnitPosition) {
            var g;
            for (var i=0; i<c.tooltipAxisGroups.length; i++) {
                g = c.tooltipAxisGroups[i];
                if (addbr) {
                    s += '<br />';
                }
                if (c.useAxesFormatters) {
                    for (var j=0; j<g.length; j++) {
                        if (j) {
                            s += ', ';
                        }
                        var af = plot.axes[g[j]]._ticks[0].formatter;
                        var afstr = plot.axes[g[j]]._ticks[0].formatString;
                        s += af(afstr, datapos[g[j]]);
                    }
                }
                else {
                    s += $.jqplot.sprintf(c.tooltipFormatString, datapos[g[0]], datapos[g[1]]);
                }
                addbr = true;
            }
        }
        
        if (c.showTooltipDataPosition) {
            var series = plot.series; 
            var ret = getIntersectingPoints(plot, gridpos.x, gridpos.y);
            var addbr = false;
        
            for (var i = 0; i< series.length; i++) {
                if (series[i].show) {
                    var idx = series[i].index;
                    var label = series[i].label.toString();
                    var cellid = $.inArray(idx, ret.indices);
                    var sx = undefined;
                    var sy = undefined;
                    if (cellid != -1) {
                        var data = ret.data[cellid].data;
                        if (c.useAxesFormatters) {
                            var xf = series[i]._xaxis._ticks[0].formatter;
                            var yf = series[i]._yaxis._ticks[0].formatter;
                            var xfstr = series[i]._xaxis._ticks[0].formatString;
                            var yfstr = series[i]._yaxis._ticks[0].formatString;
                            sx = xf(xfstr, data[0]);
                            sy = yf(yfstr, data[1]);
                        }
                        else {
                            sx = data[0];
                            sy = data[1];
                        }
                        if (addbr) {
                            s += '<br />';
                        }
                        s += $.jqplot.sprintf(c.tooltipFormatString, label, sx, sy);
                        addbr = true;
                    }
                }
            }
            
        }
        c._tooltipElem.html(s);
    }
    
    function moveLine(gridpos, plot) {
        var c = plot.plugins.cursor;
        var ctx = c.cursorCanvas._ctx;
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        if (c.showVerticalLine) {
            c.shapeRenderer.draw(ctx, [[gridpos.x, 0], [gridpos.x, ctx.canvas.height]]);
        }
        if (c.showHorizontalLine) {
            c.shapeRenderer.draw(ctx, [[0, gridpos.y], [ctx.canvas.width, gridpos.y]]);
        }
        var ret = getIntersectingPoints(plot, gridpos.x, gridpos.y);
        if (c.showCursorLegend) {
            var cells = $(plot.targetId + ' td.jqplot-cursor-legend-label');
            for (var i=0; i<cells.length; i++) {
                var idx = $(cells[i]).data('seriesIndex');
                var series = plot.series[idx];
                var label = series.label.toString();
                var cellid = $.inArray(idx, ret.indices);
                var sx = undefined;
                var sy = undefined;
                if (cellid != -1) {
                    var data = ret.data[cellid].data;
                    if (c.useAxesFormatters) {
                        var xf = series._xaxis._ticks[0].formatter;
                        var yf = series._yaxis._ticks[0].formatter;
                        var xfstr = series._xaxis._ticks[0].formatString;
                        var yfstr = series._yaxis._ticks[0].formatString;
                        sx = xf(xfstr, data[0]);
                        sy = yf(yfstr, data[1]);
                    }
                    else {
                        sx = data[0];
                        sy = data[1];
                    }
                }
                if (plot.legend.escapeHtml) {
                    $(cells[i]).text($.jqplot.sprintf(c.cursorLegendFormatString, label, sx, sy));
                }
                else {
                    $(cells[i]).html($.jqplot.sprintf(c.cursorLegendFormatString, label, sx, sy));
                }
            }        
        }
        ctx = null;
    }
        
    function getIntersectingPoints(plot, x, y) {
        var ret = {indices:[], data:[]};
        var s, i, d0, d, j, r, p;
        var threshold;
        var c = plot.plugins.cursor;
        for (var i=0; i<plot.series.length; i++) {
            s = plot.series[i];
            r = s.renderer;
            if (s.show) {
                threshold = c.intersectionThreshold;
                if (s.showMarker) {
                    threshold += s.markerRenderer.size/2;
                }
                for (var j=0; j<s.gridData.length; j++) {
                    p = s.gridData[j];
                    // check vertical line
                    if (c.showVerticalLine) {
                        if (Math.abs(x-p[0]) <= threshold) {
                            ret.indices.push(i);
                            ret.data.push({seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]});
                        }
                    }
                } 
            }
        }
        return ret;
    }
    
    function moveTooltip(gridpos, plot) {
        var c = plot.plugins.cursor;  
        var elem = c._tooltipElem;
        switch (c.tooltipLocation) {
            case 'nw':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true) - c.tooltipOffset;
                var y = gridpos.y + plot._gridPadding.top - c.tooltipOffset - elem.outerHeight(true);
                break;
            case 'n':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true)/2;
                var y = gridpos.y + plot._gridPadding.top - c.tooltipOffset - elem.outerHeight(true);
                break;
            case 'ne':
                var x = gridpos.x + plot._gridPadding.left + c.tooltipOffset;
                var y = gridpos.y + plot._gridPadding.top - c.tooltipOffset - elem.outerHeight(true);
                break;
            case 'e':
                var x = gridpos.x + plot._gridPadding.left + c.tooltipOffset;
                var y = gridpos.y + plot._gridPadding.top - elem.outerHeight(true)/2;
                break;
            case 'se':
                var x = gridpos.x + plot._gridPadding.left + c.tooltipOffset;
                var y = gridpos.y + plot._gridPadding.top + c.tooltipOffset;
                break;
            case 's':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true)/2;
                var y = gridpos.y + plot._gridPadding.top + c.tooltipOffset;
                break;
            case 'sw':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true) - c.tooltipOffset;
                var y = gridpos.y + plot._gridPadding.top + c.tooltipOffset;
                break;
            case 'w':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true) - c.tooltipOffset;
                var y = gridpos.y + plot._gridPadding.top - elem.outerHeight(true)/2;
                break;
            default:
                var x = gridpos.x + plot._gridPadding.left + c.tooltipOffset;
                var y = gridpos.y + plot._gridPadding.top + c.tooltipOffset;
                break;
        }
            
        elem.css('left', x);
        elem.css('top', y);
        elem = null;
    }
    
    function positionTooltip(plot) { 
        // fake a grid for positioning
        var grid = plot._gridPadding; 
        var c = plot.plugins.cursor;
        var elem = c._tooltipElem;  
        switch (c.tooltipLocation) {
            case 'nw':
                var a = grid.left + c.tooltipOffset;
                var b = grid.top + c.tooltipOffset;
                elem.css('left', a);
                elem.css('top', b);
                break;
            case 'n':
                var a = (grid.left + (plot._plotDimensions.width - grid.right))/2 - elem.outerWidth(true)/2;
                var b = grid.top + c.tooltipOffset;
                elem.css('left', a);
                elem.css('top', b);
                break;
            case 'ne':
                var a = grid.right + c.tooltipOffset;
                var b = grid.top + c.tooltipOffset;
                elem.css({right:a, top:b});
                break;
            case 'e':
                var a = grid.right + c.tooltipOffset;
                var b = (grid.top + (plot._plotDimensions.height - grid.bottom))/2 - elem.outerHeight(true)/2;
                elem.css({right:a, top:b});
                break;
            case 'se':
                var a = grid.right + c.tooltipOffset;
                var b = grid.bottom + c.tooltipOffset;
                elem.css({right:a, bottom:b});
                break;
            case 's':
                var a = (grid.left + (plot._plotDimensions.width - grid.right))/2 - elem.outerWidth(true)/2;
                var b = grid.bottom + c.tooltipOffset;
                elem.css({left:a, bottom:b});
                break;
            case 'sw':
                var a = grid.left + c.tooltipOffset;
                var b = grid.bottom + c.tooltipOffset;
                elem.css({left:a, bottom:b});
                break;
            case 'w':
                var a = grid.left + c.tooltipOffset;
                var b = (grid.top + (plot._plotDimensions.height - grid.bottom))/2 - elem.outerHeight(true)/2;
                elem.css({left:a, top:b});
                break;
            default:  // same as 'se'
                var a = grid.right - c.tooltipOffset;
                var b = grid.bottom + c.tooltipOffset;
                elem.css({right:a, bottom:b});
                break;
        }
        elem = null;
    }
    
    function handleClick (ev, gridpos, datapos, neighbor, plot) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        var c = plot.plugins.cursor;
        if (c.clickReset) {
            c.resetZoom(plot, c);
        }
        var sel = window.getSelection;
        if (document.selection && document.selection.empty)
        {
            document.selection.empty();
        }
        else if (sel && !sel().isCollapsed) {
            sel().collapse();
        }
        return false;
    }
    
    function handleDblClick (ev, gridpos, datapos, neighbor, plot) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        var c = plot.plugins.cursor;
        if (c.dblClickReset) {
            c.resetZoom(plot, c);
        }
        var sel = window.getSelection;
        if (document.selection && document.selection.empty)
        {
            document.selection.empty();
        }
        else if (sel && !sel().isCollapsed) {
            sel().collapse();
        }
        return false;
    }
    
    function handleMouseLeave(ev, gridpos, datapos, neighbor, plot) {
        var c = plot.plugins.cursor;
        c.onGrid = false;
        if (c.show) {
            $(ev.target).css('cursor', c.previousCursor);
            if (c.showTooltip && !(c._zoom.zooming && c.showTooltipOutsideZoom && !c.constrainOutsideZoom)) {
                c._tooltipElem.empty();
                c._tooltipElem.hide();
            }
            if (c.zoom) {
                c._zoom.gridpos = gridpos;
                c._zoom.datapos = datapos;
            }
            if (c.showVerticalLine || c.showHorizontalLine) {
                var ctx = c.cursorCanvas._ctx;
                ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
                ctx = null;
            }
            if (c.showCursorLegend) {
                var cells = $(plot.targetId + ' td.jqplot-cursor-legend-label');
                for (var i=0; i<cells.length; i++) {
                    var idx = $(cells[i]).data('seriesIndex');
                    var series = plot.series[idx];
                    var label = series.label.toString();
                    if (plot.legend.escapeHtml) {
                        $(cells[i]).text($.jqplot.sprintf(c.cursorLegendFormatString, label, undefined, undefined));
                    }
                    else {
                        $(cells[i]).html($.jqplot.sprintf(c.cursorLegendFormatString, label, undefined, undefined));
                    }
                
                }        
            }
        }
    }
    
    function handleMouseEnter(ev, gridpos, datapos, neighbor, plot) {
        var c = plot.plugins.cursor;
        c.onGrid = true;
        if (c.show) {
            c.previousCursor = ev.target.style.cursor;
            ev.target.style.cursor = c.style;
            if (c.showTooltip) {
                updateTooltip(gridpos, datapos, plot);
                if (c.followMouse) {
                    moveTooltip(gridpos, plot);
                }
                else {
                    positionTooltip(plot);
                }
                c._tooltipElem.show();
            }
            if (c.showVerticalLine || c.showHorizontalLine) {
                moveLine(gridpos, plot);
            }
        }

    }    
    
    function handleMouseMove(ev, gridpos, datapos, neighbor, plot) {
        var c = plot.plugins.cursor;
        if (c.show) {
            if (c.showTooltip) {
                updateTooltip(gridpos, datapos, plot);
                if (c.followMouse) {
                    moveTooltip(gridpos, plot);
                }
            }
            if (c.showVerticalLine || c.showHorizontalLine) {
                moveLine(gridpos, plot);
            }
        }
    }
            
    function getEventPosition(ev) {
        var plot = ev.data.plot;
        var go = plot.eventCanvas._elem.offset();
        var gridPos = {x:ev.pageX - go.left, y:ev.pageY - go.top};
        //////
        // TO DO: handle yMidAxis
        //////
        var dataPos = {xaxis:null, yaxis:null, x2axis:null, y2axis:null, y3axis:null, y4axis:null, y5axis:null, y6axis:null, y7axis:null, y8axis:null, y9axis:null, yMidAxis:null};
        var an = ['xaxis', 'yaxis', 'x2axis', 'y2axis', 'y3axis', 'y4axis', 'y5axis', 'y6axis', 'y7axis', 'y8axis', 'y9axis', 'yMidAxis'];
        var ax = plot.axes;
        var n, axis;
        for (n=11; n>0; n--) {
            axis = an[n-1];
            if (ax[axis].show) {
                dataPos[axis] = ax[axis].series_p2u(gridPos[axis.charAt(0)]);
            }
        }

        return {offsets:go, gridPos:gridPos, dataPos:dataPos};
    }    
    
    function handleZoomMove(ev) {
        var plot = ev.data.plot;
        var c = plot.plugins.cursor;
        // don't do anything if not on grid.
        if (c.show && c.zoom && c._zoom.started && !c.zoomTarget) {
            ev.preventDefault();
            var ctx = c.zoomCanvas._ctx;
            var positions = getEventPosition(ev);
            var gridpos = positions.gridPos;
            var datapos = positions.dataPos;
            c._zoom.gridpos = gridpos;
            c._zoom.datapos = datapos;
            c._zoom.zooming = true;
            var xpos = gridpos.x;
            var ypos = gridpos.y;
            var height = ctx.canvas.height;
            var width = ctx.canvas.width;
            if (c.showTooltip && !c.onGrid && c.showTooltipOutsideZoom) {
                updateTooltip(gridpos, datapos, plot);
                if (c.followMouse) {
                    moveTooltip(gridpos, plot);
                }
            }
            if (c.constrainZoomTo == 'x') {
                c._zoom.end = [xpos, height];
            }
            else if (c.constrainZoomTo == 'y') {
                c._zoom.end = [width, ypos];
            }
            else {
                c._zoom.end = [xpos, ypos];
            }
            var sel = window.getSelection;
            if (document.selection && document.selection.empty)
            {
                document.selection.empty();
            }
            else if (sel && !sel().isCollapsed) {
                sel().collapse();
            }
            drawZoomBox.call(c);
            ctx = null;
        }
    }
    
    function handleMouseDown(ev, gridpos, datapos, neighbor, plot) {
        var c = plot.plugins.cursor;
        if(plot.plugins.mobile){
            $(document).one('vmouseup.jqplot_cursor', {plot:plot}, handleMouseUp);
        } else {
            $(document).one('mouseup.jqplot_cursor', {plot:plot}, handleMouseUp);
        }
        var axes = plot.axes;
        if (document.onselectstart != undefined) {
            c._oldHandlers.onselectstart = document.onselectstart;
            document.onselectstart = function () { return false; };
        }
        if (document.ondrag != undefined) {
            c._oldHandlers.ondrag = document.ondrag;
            document.ondrag = function () { return false; };
        }
        if (document.onmousedown != undefined) {
            c._oldHandlers.onmousedown = document.onmousedown;
            document.onmousedown = function () { return false; };
        }
        if (c.zoom) {
            if (!c.zoomProxy) {
                var ctx = c.zoomCanvas._ctx;
                ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
                ctx = null;
            }
            if (c.constrainZoomTo == 'x') {
                c._zoom.start = [gridpos.x, 0];
            }
            else if (c.constrainZoomTo == 'y') {
                c._zoom.start = [0, gridpos.y];
            }
            else {
                c._zoom.start = [gridpos.x, gridpos.y];
            }
            c._zoom.started = true;
            for (var ax in datapos) {
                // get zoom starting position.
                c._zoom.axes.start[ax] = datapos[ax];
            }  
           if(plot.plugins.mobile){
                $(document).bind('vmousemove.jqplotCursor', {plot:plot}, handleZoomMove);              
            } else {
                $(document).bind('mousemove.jqplotCursor', {plot:plot}, handleZoomMove);              
            }

        }
    }
    
    function handleMouseUp(ev) {
        var plot = ev.data.plot;
        var c = plot.plugins.cursor;
        if (c.zoom && c._zoom.zooming && !c.zoomTarget) {
            var xpos = c._zoom.gridpos.x;
            var ypos = c._zoom.gridpos.y;
            var datapos = c._zoom.datapos;
            var height = c.zoomCanvas._ctx.canvas.height;
            var width = c.zoomCanvas._ctx.canvas.width;
            var axes = plot.axes;
            
            if (c.constrainOutsideZoom && !c.onGrid) {
                if (xpos < 0) { xpos = 0; }
                else if (xpos > width) { xpos = width; }
                if (ypos < 0) { ypos = 0; }
                else if (ypos > height) { ypos = height; }
                
                for (var axis in datapos) {
                    if (datapos[axis]) {
                        if (axis.charAt(0) == 'x') {
                            datapos[axis] = axes[axis].series_p2u(xpos);
                        }
                        else {
                            datapos[axis] = axes[axis].series_p2u(ypos);
                        }
                    }
                }
            }
            
            if (c.constrainZoomTo == 'x') {
                ypos = height;
            }
            else if (c.constrainZoomTo == 'y') {
                xpos = width;
            }
            c._zoom.end = [xpos, ypos];
            c._zoom.gridpos = {x:xpos, y:ypos};
            
            c.doZoom(c._zoom.gridpos, datapos, plot, c);
        }
        c._zoom.started = false;
        c._zoom.zooming = false;
        
        $(document).unbind('mousemove.jqplotCursor', handleZoomMove);
        
        if (document.onselectstart != undefined && c._oldHandlers.onselectstart != null){
            document.onselectstart = c._oldHandlers.onselectstart;
            c._oldHandlers.onselectstart = null;
        }
        if (document.ondrag != undefined && c._oldHandlers.ondrag != null){
            document.ondrag = c._oldHandlers.ondrag;
            c._oldHandlers.ondrag = null;
        }
        if (document.onmousedown != undefined && c._oldHandlers.onmousedown != null){
            document.onmousedown = c._oldHandlers.onmousedown;
            c._oldHandlers.onmousedown = null;
        }

    }
    
    function drawZoomBox() {
        var start = this._zoom.start;
        var end = this._zoom.end;
        var ctx = this.zoomCanvas._ctx;
        var l, t, h, w;
        if (end[0] > start[0]) {
            l = start[0];
            w = end[0] - start[0];
        }
        else {
            l = end[0];
            w = start[0] - end[0];
        }
        if (end[1] > start[1]) {
            t = start[1];
            h = end[1] - start[1];
        }
        else {
            t = end[1];
            h = start[1] - end[1];
        }
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.strokeStyle = '#999999';
        ctx.lineWidth = 1.0;
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.clearRect(l, t, w, h);
        // IE won't show transparent fill rect, so stroke a rect also.
        ctx.strokeRect(l,t,w,h);
        ctx = null;
    }
    
    $.jqplot.CursorLegendRenderer = function(options) {
        $.jqplot.TableLegendRenderer.call(this, options);
        this.formatString = '%s';
    };
    
    $.jqplot.CursorLegendRenderer.prototype = new $.jqplot.TableLegendRenderer();
    $.jqplot.CursorLegendRenderer.prototype.constructor = $.jqplot.CursorLegendRenderer;
    
    // called in context of a Legend
    $.jqplot.CursorLegendRenderer.prototype.draw = function() {
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null;
        }
        if (this.show) {
            var series = this._series, s;
            // make a table.  one line label per row.
            var elem = document.createElement('table');
            this._elem = $(elem);
            elem = null;
            this._elem.addClass('jqplot-legend jqplot-cursor-legend');
            this._elem.css('position', 'absolute');
        
            var pad = false;
            for (var i = 0; i< series.length; i++) {
                s = series[i];
                if (s.show && s.showLabel) {
                    var lt = $.jqplot.sprintf(this.formatString, s.label.toString());
                    if (lt) {
                        var color = s.color;
                        if (s._stack && !s.fill) {
                            color = '';
                        }
                        addrow.call(this, lt, color, pad, i);
                        pad = true;
                    }
                    // let plugins add more rows to legend.  Used by trend line plugin.
                    for (var j=0; j<$.jqplot.addLegendRowHooks.length; j++) {
                        var item = $.jqplot.addLegendRowHooks[j].call(this, s);
                        if (item) {
                            addrow.call(this, item.label, item.color, pad);
                            pad = true;
                        } 
                    }
                }
            }
            series = s = null;
            delete series;
            delete s;
        }
        
        function addrow(label, color, pad, idx) {
            var rs = (pad) ? this.rowSpacing : '0';
            var tr = $('<tr class="jqplot-legend jqplot-cursor-legend"></tr>').appendTo(this._elem);
            tr.data('seriesIndex', idx);
            $('<td class="jqplot-legend jqplot-cursor-legend-swatch" style="padding-top:'+rs+';">'+
                '<div style="border:1px solid #cccccc;padding:0.2em;">'+
                '<div class="jqplot-cursor-legend-swatch" style="background-color:'+color+';"></div>'+
                '</div></td>').appendTo(tr);
            var td = $('<td class="jqplot-legend jqplot-cursor-legend-label" style="vertical-align:middle;padding-top:'+rs+';"></td>');
            td.appendTo(tr);
            td.data('seriesIndex', idx);
            if (this.escapeHtml) {
                td.text(label);
            }
            else {
                td.html(label);
            }
            tr = null;
            td = null;
        }
        return this._elem;
    };
    
})(jQuery);

/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.9
 * Revision: d96a669
 *
 * Copyright (c) 2009-2016 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function($) {
    $.jqplot.eventListenerHooks.push(['jqplotMouseMove', handleMove]);
    
    /**
     * Class: $.jqplot.Highlighter
     * Plugin which will highlight data points when they are moused over.
     * 
     * To use this plugin, include the js
     * file in your source:
     * 
     * > <script type="text/javascript" src="plugins/jqplot.highlighter.js"></script>
     * 
     * A tooltip providing information about the data point is enabled by default.
     * To disable the tooltip, set "showTooltip" to false.
     * 
     * You can control what data is displayed in the tooltip with various
     * options.  The "tooltipAxes" option controls whether the x, y or both
     * data values are displayed.
     * 
     * Some chart types (e.g. hi-low-close) have more than one y value per
     * data point. To display the additional values in the tooltip, set the
     * "yvalues" option to the desired number of y values present (3 for a hlc chart).
     * 
     * By default, data values will be formatted with the same formatting
     * specifiers as used to format the axis ticks.  A custom format code
     * can be supplied with the tooltipFormatString option.  This will apply 
     * to all values in the tooltip.  
     * 
     * For more complete control, the "formatString" option can be set.  This
     * Allows conplete control over tooltip formatting.  Values are passed to
     * the format string in an order determined by the "tooltipAxes" and "yvalues"
     * options.  So, if you have a hi-low-close chart and you just want to display 
     * the hi-low-close values in the tooltip, you could set a formatString like:
     * 
     * > highlighter: {
     * >     tooltipAxes: 'y',
     * >     yvalues: 3,
     * >     formatString:'<table class="jqplot-highlighter">
     * >         <tr><td>hi:</td><td>%s</td></tr>
     * >         <tr><td>low:</td><td>%s</td></tr>
     * >         <tr><td>close:</td><td>%s</td></tr></table>'
     * > }
     * 
     */
    $.jqplot.Highlighter = function(options) {
        // Group: Properties
        //
        //prop: show
        // true to show the highlight.
        this.show = $.jqplot.config.enablePlugins;
        // prop: markerRenderer
        // Renderer used to draw the marker of the highlighted point.
        // Renderer will assimilate attributes from the data point being highlighted,
        // so no attributes need set on the renderer directly.
        // Default is to turn off shadow drawing on the highlighted point.
        this.markerRenderer = new $.jqplot.MarkerRenderer({shadow:false});
        // prop: showMarker
        // true to show the marker
        this.showMarker  = true;
        // prop: lineWidthAdjust
        // Pixels to add to the lineWidth of the highlight.
        this.lineWidthAdjust = 2.5;
        // prop: sizeAdjust
        // Pixels to add to the overall size of the highlight.
        this.sizeAdjust = 5;
        // prop: showTooltip
        // Show a tooltip with data point values.
        this.showTooltip = true;
        // prop: tooltipLocation
        // Where to position tooltip, 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'
        this.tooltipLocation = 'nw';
        // prop: fadeTooltip
        // true = fade in/out tooltip, flase = show/hide tooltip
        this.fadeTooltip = true;
        // prop: tooltipFadeSpeed
        // 'slow', 'def', 'fast', or number of milliseconds.
        this.tooltipFadeSpeed = "fast";
        // prop: tooltipOffset
        // Pixel offset of tooltip from the highlight.
        this.tooltipOffset = 2;
        // prop: tooltipAxes
        // Which axes to display in tooltip, 'x', 'y' or 'both', 'xy' or 'yx'
        // 'both' and 'xy' are equivalent, 'yx' reverses order of labels.
        this.tooltipAxes = 'both';
        // prop; tooltipSeparator
        // String to use to separate x and y axes in tooltip.
        this.tooltipSeparator = ', ';
        // prop; tooltipContentEditor
        // Function used to edit/augment/replace the formatted tooltip contents.
        // Called as str = tooltipContentEditor(str, seriesIndex, pointIndex)
        // where str is the generated tooltip html and seriesIndex and pointIndex identify
        // the data point being highlighted. Should return the html for the tooltip contents.
        this.tooltipContentEditor = null;
        // prop: useAxesFormatters
        // Use the x and y axes formatters to format the text in the tooltip.
        this.useAxesFormatters = true;
        // prop: tooltipFormatString
        // sprintf format string for the tooltip.
        // Uses Ash Searle's javascript sprintf implementation
        // found here: http://hexmen.com/blog/2007/03/printf-sprintf/
        // See http://perldoc.perl.org/functions/sprintf.html for reference.
        // Additional "p" and "P" format specifiers added by Chris Leonello.
        this.tooltipFormatString = '%.5P';
        // prop: formatString
        // alternative to tooltipFormatString
        // will format the whole tooltip text, populating with x, y values as
        // indicated by tooltipAxes option.  So, you could have a tooltip like:
        // 'Date: %s, number of cats: %d' to format the whole tooltip at one go.
        // If useAxesFormatters is true, values will be formatted according to
        // Axes formatters and you can populate your tooltip string with 
        // %s placeholders.
        this.formatString = null;
        // prop: yvalues
        // Number of y values to expect in the data point array.
        // Typically this is 1.  Certain plots, like OHLC, will
        // have more y values in each data point array.
        this.yvalues = 1;
        // prop: bringSeriesToFront
        // This option requires jQuery 1.4+
        // True to bring the series of the highlighted point to the front
        // of other series.
        this.bringSeriesToFront = false;
        this._tooltipElem;
        this.isHighlighting = false;
        this.currentNeighbor = null;

        $.extend(true, this, options);
    };
    
    var locations = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
    var locationIndicies = {'nw':0, 'n':1, 'ne':2, 'e':3, 'se':4, 's':5, 'sw':6, 'w':7};
    var oppositeLocations = ['se', 's', 'sw', 'w', 'nw', 'n', 'ne', 'e'];
    
    // axis.renderer.tickrenderer.formatter
    
    // called with scope of plot
    $.jqplot.Highlighter.init = function (target, data, opts){
        var options = opts || {};
        // add a highlighter attribute to the plot
        this.plugins.highlighter = new $.jqplot.Highlighter(options.highlighter);
    };
    
    // called within scope of series
    $.jqplot.Highlighter.parseOptions = function (defaults, options) {
        // Add a showHighlight option to the series 
        // and set it to true by default.
        this.showHighlight = true;
    };
    
    // called within context of plot
    // create a canvas which we can draw on.
    // insert it before the eventCanvas, so eventCanvas will still capture events.
    $.jqplot.Highlighter.postPlotDraw = function() {
        // Memory Leaks patch    
        if (this.plugins.highlighter && this.plugins.highlighter.highlightCanvas) {
            this.plugins.highlighter.highlightCanvas.resetCanvas();
            this.plugins.highlighter.highlightCanvas = null;
        }

        if (this.plugins.highlighter && this.plugins.highlighter._tooltipElem) {
            this.plugins.highlighter._tooltipElem.emptyForce();
            this.plugins.highlighter._tooltipElem = null;
        }

        this.plugins.highlighter.highlightCanvas = new $.jqplot.GenericCanvas();
        
        this.eventCanvas._elem.before(this.plugins.highlighter.highlightCanvas.createElement(this._gridPadding, 'jqplot-highlight-canvas', this._plotDimensions, this));
        this.plugins.highlighter.highlightCanvas.setContext();

        var elem = document.createElement('div');
        this.plugins.highlighter._tooltipElem = $(elem);
        elem = null;
        this.plugins.highlighter._tooltipElem.addClass('jqplot-highlighter-tooltip');
        this.plugins.highlighter._tooltipElem.css({position:'absolute', display:'none'});
        
        this.eventCanvas._elem.before(this.plugins.highlighter._tooltipElem);
    };
    
    $.jqplot.preInitHooks.push($.jqplot.Highlighter.init);
    $.jqplot.preParseSeriesOptionsHooks.push($.jqplot.Highlighter.parseOptions);
    $.jqplot.postDrawHooks.push($.jqplot.Highlighter.postPlotDraw);
    
    function draw(plot, neighbor) {
        var hl = plot.plugins.highlighter;
        var s = plot.series[neighbor.seriesIndex];
        var smr = s.markerRenderer;
        var mr = hl.markerRenderer;
        mr.style = smr.style;
        mr.lineWidth = smr.lineWidth + hl.lineWidthAdjust;
        mr.size = smr.size + hl.sizeAdjust;
        var rgba = $.jqplot.getColorComponents(smr.color);
        var newrgb = [rgba[0], rgba[1], rgba[2]];
        var alpha = (rgba[3] >= 0.6) ? rgba[3]*0.6 : rgba[3]*(2-rgba[3]);
        mr.color = 'rgba('+newrgb[0]+','+newrgb[1]+','+newrgb[2]+','+alpha+')';
        mr.init();
        mr.draw(s.gridData[neighbor.pointIndex][0], s.gridData[neighbor.pointIndex][1], hl.highlightCanvas._ctx);
    }
    
    function showTooltip(plot, series, neighbor) {
        // neighbor looks like: {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]}
        // gridData should be x,y pixel coords on the grid.
        // add the plot._gridPadding to that to get x,y in the target.
        var hl = plot.plugins.highlighter;
        var elem = hl._tooltipElem;
        var serieshl = series.highlighter || {};

        var opts = $.extend(true, {}, hl, serieshl);

        if (opts.useAxesFormatters) {
            var xf = series._xaxis._ticks[0].formatter;
            var yf = series._yaxis._ticks[0].formatter;
            var xfstr = series._xaxis._ticks[0].formatString;
            var yfstr = series._yaxis._ticks[0].formatString;
            var str;
            var xstr = xf(xfstr, neighbor.data[0]);
            var ystrs = [];
            for (var i=1; i<opts.yvalues+1; i++) {
                ystrs.push(yf(yfstr, neighbor.data[i]));
            }
            if (typeof opts.formatString === 'string') {
                switch (opts.tooltipAxes) {
                    case 'both':
                    case 'xy':
                        ystrs.unshift(xstr);
                        ystrs.unshift(opts.formatString);
                        str = $.jqplot.sprintf.apply($.jqplot.sprintf, ystrs);
                        break;
                    case 'yx':
                        ystrs.push(xstr);
                        ystrs.unshift(opts.formatString);
                        str = $.jqplot.sprintf.apply($.jqplot.sprintf, ystrs);
                        break;
                    case 'x':
                        str = $.jqplot.sprintf.apply($.jqplot.sprintf, [opts.formatString, xstr]);
                        break;
                    case 'y':
                        ystrs.unshift(opts.formatString);
                        str = $.jqplot.sprintf.apply($.jqplot.sprintf, ystrs);
                        break;
                    default: // same as xy
                        ystrs.unshift(xstr);
                        ystrs.unshift(opts.formatString);
                        str = $.jqplot.sprintf.apply($.jqplot.sprintf, ystrs);
                        break;
                } 
            }
            else {
                switch (opts.tooltipAxes) {
                    case 'both':
                    case 'xy':
                        str = xstr;
                        for (var i=0; i<ystrs.length; i++) {
                            str += opts.tooltipSeparator + ystrs[i];
                        }
                        break;
                    case 'yx':
                        str = '';
                        for (var i=0; i<ystrs.length; i++) {
                            str += ystrs[i] + opts.tooltipSeparator;
                        }
                        str += xstr;
                        break;
                    case 'x':
                        str = xstr;
                        break;
                    case 'y':
                        str = ystrs.join(opts.tooltipSeparator);
                        break;
                    default: // same as 'xy'
                        str = xstr;
                        for (var i=0; i<ystrs.length; i++) {
                            str += opts.tooltipSeparator + ystrs[i];
                        }
                        break;
                    
                }                
            }
        }
        else {
            var str;
            if (typeof opts.formatString ===  'string') {
                str = $.jqplot.sprintf.apply($.jqplot.sprintf, [opts.formatString].concat(neighbor.data));
            }

            else {
                if (opts.tooltipAxes == 'both' || opts.tooltipAxes == 'xy') {
                    str = $.jqplot.sprintf(opts.tooltipFormatString, neighbor.data[0]) + opts.tooltipSeparator + $.jqplot.sprintf(opts.tooltipFormatString, neighbor.data[1]);
                }
                else if (opts.tooltipAxes == 'yx') {
                    str = $.jqplot.sprintf(opts.tooltipFormatString, neighbor.data[1]) + opts.tooltipSeparator + $.jqplot.sprintf(opts.tooltipFormatString, neighbor.data[0]);
                }
                else if (opts.tooltipAxes == 'x') {
                    str = $.jqplot.sprintf(opts.tooltipFormatString, neighbor.data[0]);
                }
                else if (opts.tooltipAxes == 'y') {
                    str = $.jqplot.sprintf(opts.tooltipFormatString, neighbor.data[1]);
                } 
            }
        }
        if ($.isFunction(opts.tooltipContentEditor)) {
            // args str, seriesIndex, pointIndex are essential so the hook can look up
            // extra data for the point.
            str = opts.tooltipContentEditor(str, neighbor.seriesIndex, neighbor.pointIndex, plot);
        }
        elem.html(str);
        var gridpos = {x:neighbor.gridData[0], y:neighbor.gridData[1]};
        var ms = 0;
        var fact = 0.707;
        if (series.markerRenderer.show == true) { 
            ms = (series.markerRenderer.size + opts.sizeAdjust)/2;
        }

        var loc = locations;
        if (series.fillToZero && series.fill && neighbor.data[1] < 0) {
          loc = oppositeLocations;
        }

        switch (loc[locationIndicies[opts.tooltipLocation]]) {
            case 'nw':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true) - opts.tooltipOffset - fact * ms;
                var y = gridpos.y + plot._gridPadding.top - opts.tooltipOffset - elem.outerHeight(true) - fact * ms;
                break;
            case 'n':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true)/2;
                var y = gridpos.y + plot._gridPadding.top - opts.tooltipOffset - elem.outerHeight(true) - ms;
                break;
            case 'ne':
                var x = gridpos.x + plot._gridPadding.left + opts.tooltipOffset + fact * ms;
                var y = gridpos.y + plot._gridPadding.top - opts.tooltipOffset - elem.outerHeight(true) - fact * ms;
                break;
            case 'e':
                var x = gridpos.x + plot._gridPadding.left + opts.tooltipOffset + ms;
                var y = gridpos.y + plot._gridPadding.top - elem.outerHeight(true)/2;
                break;
            case 'se':
                var x = gridpos.x + plot._gridPadding.left + opts.tooltipOffset + fact * ms;
                var y = gridpos.y + plot._gridPadding.top + opts.tooltipOffset + fact * ms;
                break;
            case 's':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true)/2;
                var y = gridpos.y + plot._gridPadding.top + opts.tooltipOffset + ms;
                break;
            case 'sw':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true) - opts.tooltipOffset - fact * ms;
                var y = gridpos.y + plot._gridPadding.top + opts.tooltipOffset + fact * ms;
                break;
            case 'w':
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true) - opts.tooltipOffset - ms;
                var y = gridpos.y + plot._gridPadding.top - elem.outerHeight(true)/2;
                break;
            default: // same as 'nw'
                var x = gridpos.x + plot._gridPadding.left - elem.outerWidth(true) - opts.tooltipOffset - fact * ms;
                var y = gridpos.y + plot._gridPadding.top - opts.tooltipOffset - elem.outerHeight(true) - fact * ms;
                break;
        }
        elem.css('left', x);
        elem.css('top', y);
        if (opts.fadeTooltip) {
            // Fix for stacked up animations.  Thnanks Trevor!
            elem.stop(true,true).fadeIn(opts.tooltipFadeSpeed);
        }
        else {
            elem.show();
        }
        elem = null;
        
    }
    
    function handleMove(ev, gridpos, datapos, neighbor, plot) {
        var hl = plot.plugins.highlighter;
        var c = plot.plugins.cursor;
        if (hl.show) {
            if (neighbor == null && hl.isHighlighting) {
                var evt = jQuery.Event('jqplotHighlighterUnhighlight');
                plot.target.trigger(evt);

                var ctx = hl.highlightCanvas._ctx;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                if (hl.fadeTooltip) {
                    hl._tooltipElem.fadeOut(hl.tooltipFadeSpeed);
                }
                else {
                    hl._tooltipElem.hide();
                }
                if (hl.bringSeriesToFront) {
                    plot.restorePreviousSeriesOrder();
                }
                hl.isHighlighting = false;
                hl.currentNeighbor = null;
                ctx = null;
            }
            else if (neighbor != null && plot.series[neighbor.seriesIndex].showHighlight && !hl.isHighlighting) {
                var evt = jQuery.Event('jqplotHighlighterHighlight');
                evt.which = ev.which;
                evt.pageX = ev.pageX;
                evt.pageY = ev.pageY;
                var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data, plot];
                plot.target.trigger(evt, ins);

                hl.isHighlighting = true;
                hl.currentNeighbor = neighbor;
                if (hl.showMarker) {
                    draw(plot, neighbor);
                }
                if (plot.series[neighbor.seriesIndex].show && hl.showTooltip && (!c || !c._zoom.started)) {
                    showTooltip(plot, plot.series[neighbor.seriesIndex], neighbor);
                }
                if (hl.bringSeriesToFront) {
                    plot.moveSeriesToFront(neighbor.seriesIndex);
                }
            }
            // check to see if we're highlighting the wrong point.
            else if (neighbor != null && hl.isHighlighting && hl.currentNeighbor != neighbor) {
                // highlighting the wrong point.

                // if new series allows highlighting, highlight new point.
                if (plot.series[neighbor.seriesIndex].showHighlight) {
                    var ctx = hl.highlightCanvas._ctx;
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    hl.isHighlighting = true;
                    hl.currentNeighbor = neighbor;
                    if (hl.showMarker) {
                        draw(plot, neighbor);
                    }
                    if (plot.series[neighbor.seriesIndex].show && hl.showTooltip && (!c || !c._zoom.started)) {
                        showTooltip(plot, plot.series[neighbor.seriesIndex], neighbor);
                    }
                    if (hl.bringSeriesToFront) {
                        plot.moveSeriesToFront(neighbor.seriesIndex);
                    }                    
                }                
            }
        }
    }
})(jQuery);
/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.9
 * Revision: d96a669
 *
 * Copyright (c) 2009-2016 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function($) {  
    /**
     * Class: $.jqplot.DateAxisRenderer
     * A plugin for a jqPlot to render an axis as a series of date values.
     * This renderer has no options beyond those supplied by the <Axis> class.
     * It supplies its own tick formatter, so the tickOptions.formatter option
     * should not be overridden.
     * 
     * Thanks to Ken Synder for his enhanced Date instance methods which are
     * included with this code <http://kendsnyder.com/sandbox/date/>.
     * 
     * To use this renderer, include the plugin in your source
     * > <script type="text/javascript" language="javascript" src="plugins/jqplot.dateAxisRenderer.js"></script>
     * 
     * and supply the appropriate options to your plot
     * 
     * > {axes:{xaxis:{renderer:$.jqplot.DateAxisRenderer}}}
     * 
     * Dates can be passed into the axis in almost any recognizable value and 
     * will be parsed.  They will be rendered on the axis in the format
     * specified by tickOptions.formatString.  e.g. tickOptions.formatString = '%Y-%m-%d'.
     * 
     * Accecptable format codes 
     * are:
     * 
     * > Code    Result                  Description
     * >             == Years ==
     * > %Y      2008                Four-digit year
     * > %y      08                  Two-digit year
     * >             == Months ==
     * > %m      09                  Two-digit month
     * > %#m     9                   One or two-digit month
     * > %B      September           Full month name
     * > %b      Sep                 Abbreviated month name
     * >             == Days ==
     * > %d      05                  Two-digit day of month
     * > %#d     5                   One or two-digit day of month
     * > %e      5                   One or two-digit day of month
     * > %A      Sunday              Full name of the day of the week
     * > %a      Sun                 Abbreviated name of the day of the week
     * > %w      0                   Number of the day of the week (0 = Sunday, 6 = Saturday)
     * > %o      th                  The ordinal suffix string following the day of the month
     * >             == Hours ==
     * > %H      23                  Hours in 24-hour format (two digits)
     * > %#H     3                   Hours in 24-hour integer format (one or two digits)
     * > %I      11                  Hours in 12-hour format (two digits)
     * > %#I     3                   Hours in 12-hour integer format (one or two digits)
     * > %p      PM                  AM or PM
     * >             == Minutes ==
     * > %M      09                  Minutes (two digits)
     * > %#M     9                   Minutes (one or two digits)
     * >             == Seconds ==
     * > %S      02                  Seconds (two digits)
     * > %#S     2                   Seconds (one or two digits)
     * > %s      1206567625723       Unix timestamp (Seconds past 1970-01-01 00:00:00)
     * >             == Milliseconds ==
     * > %N      008                 Milliseconds (three digits)
     * > %#N     8                   Milliseconds (one to three digits)
     * >             == Timezone ==
     * > %O      360                 difference in minutes between local time and GMT
     * > %Z      Mountain Standard Time  Name of timezone as reported by browser
     * > %G      -06:00              Hours and minutes between GMT
     * >             == Shortcuts ==
     * > %F      2008-03-26          %Y-%m-%d
     * > %T      05:06:30            %H:%M:%S
     * > %X      05:06:30            %H:%M:%S
     * > %x      03/26/08            %m/%d/%y
     * > %D      03/26/08            %m/%d/%y
     * > %#c     Wed Mar 26 15:31:00 2008  %a %b %e %H:%M:%S %Y
     * > %v      3-Sep-2008          %e-%b-%Y
     * > %R      15:31               %H:%M
     * > %r      3:31:00 PM          %I:%M:%S %p
     * >             == Characters ==
     * > %n      \n                  Newline
     * > %t      \t                  Tab
     * > %%      %                   Percent Symbol 
     */
    $.jqplot.DateAxisRenderer = function() {
        $.jqplot.LinearAxisRenderer.call(this);
        this.date = new $.jsDate();
    };

    var second = 1000;
    var minute = 60 * second;
    var hour = 60 * minute;
    var day = 24 * hour;
    var week = 7 * day;

    // these are less definitive
    var month = 30.4368499 * day;
    var year = 365.242199 * day;

    var daysInMonths = [31,28,31,30,31,30,31,30,31,30,31,30];
    // array of consistent nice intervals.  Longer intervals
    // will depend on days in month, days in year, etc.
    var niceFormatStrings = ['%M:%S.%#N', '%M:%S.%#N', '%M:%S.%#N', '%M:%S', '%M:%S', '%M:%S', '%M:%S', '%H:%M:%S', '%H:%M:%S', '%H:%M', '%H:%M', '%H:%M', '%H:%M', '%H:%M', '%H:%M', '%a %H:%M', '%a %H:%M', '%b %e %H:%M', '%b %e %H:%M', '%b %e %H:%M', '%b %e %H:%M', '%v', '%v', '%v', '%v', '%v', '%v', '%v'];
    var niceIntervals = [0.1*second, 0.2*second, 0.5*second, second, 2*second, 5*second, 10*second, 15*second, 30*second, minute, 2*minute, 5*minute, 10*minute, 15*minute, 30*minute, hour, 2*hour, 4*hour, 6*hour, 8*hour, 12*hour, day, 2*day, 3*day, 4*day, 5*day, week, 2*week];

    var niceMonthlyIntervals = [];

    function bestDateInterval(min, max, titarget) {
        // iterate through niceIntervals to find one closest to titarget
        var badness = Number.MAX_VALUE;
        var temp, bestTi, bestfmt;
        for (var i=0, l=niceIntervals.length; i < l; i++) {
            temp = Math.abs(titarget - niceIntervals[i]);
            if (temp < badness) {
                badness = temp;
                bestTi = niceIntervals[i];
                bestfmt = niceFormatStrings[i];
            }
        }

        return [bestTi, bestfmt];
    }
    
    $.jqplot.DateAxisRenderer.prototype = new $.jqplot.LinearAxisRenderer();
    $.jqplot.DateAxisRenderer.prototype.constructor = $.jqplot.DateAxisRenderer;
    
    $.jqplot.DateTickFormatter = function(format, val) {
        if (!format) {
            format = '%Y/%m/%d';
        }
        return $.jsDate.strftime(val, format);
    };
    
    $.jqplot.DateAxisRenderer.prototype.init = function(options){
        // prop: tickRenderer
        // A class of a rendering engine for creating the ticks labels displayed on the plot, 
        // See <$.jqplot.AxisTickRenderer>.
        // this.tickRenderer = $.jqplot.AxisTickRenderer;
        // this.labelRenderer = $.jqplot.AxisLabelRenderer;
        this.tickOptions.formatter = $.jqplot.DateTickFormatter;
        // prop: tickInset
        // Controls the amount to inset the first and last ticks from 
        // the edges of the grid, in multiples of the tick interval.
        // 0 is no inset, 0.5 is one half a tick interval, 1 is a full
        // tick interval, etc.
        this.tickInset = 0;
        // prop: drawBaseline
        // True to draw the axis baseline.
        this.drawBaseline = true;
        // prop: baselineWidth
        // width of the baseline in pixels.
        this.baselineWidth = null;
        // prop: baselineColor
        // CSS color spec for the baseline.
        this.baselineColor = null;
        this.daTickInterval = null;
        this._daTickInterval = null;
        
        $.extend(true, this, options);
        
        var db = this._dataBounds,
            stats, 
            sum,
            s,
            d,
            pd,
            sd,
            intv;
        
        // Go through all the series attached to this axis and find
        // the min/max bounds for this axis.
        for (var i=0; i<this._series.length; i++) {
            stats = {intervals:[], frequencies:{}, sortedIntervals:[], min:null, max:null, mean:null};
            sum = 0;
            s = this._series[i];
            d = s.data;
            pd = s._plotData;
            sd = s._stackData;
            intv = 0;
            
            for (var j=0; j<d.length; j++) { 
                if (this.name == 'xaxis' || this.name == 'x2axis') {
                    d[j][0] = new $.jsDate(d[j][0]).getTime();
                    pd[j][0] = new $.jsDate(d[j][0]).getTime();
                    sd[j][0] = new $.jsDate(d[j][0]).getTime();
                    if ((d[j][0] != null && d[j][0] < db.min) || db.min == null) {
                        db.min = d[j][0];
                    }
                    if ((d[j][0] != null && d[j][0] > db.max) || db.max == null) {
                        db.max = d[j][0];
                    }
                    if (j>0) {
                        intv = Math.abs(d[j][0] - d[j-1][0]);
                        stats.intervals.push(intv);
                        if (stats.frequencies.hasOwnProperty(intv)) {
                            stats.frequencies[intv] += 1;
                        }
                        else {
                            stats.frequencies[intv] = 1;
                        }
                    }
                    sum += intv;
                    
                }              
                else {
                    d[j][1] = new $.jsDate(d[j][1]).getTime();
                    pd[j][1] = new $.jsDate(d[j][1]).getTime();
                    sd[j][1] = new $.jsDate(d[j][1]).getTime();
                    if ((d[j][1] != null && d[j][1] < db.min) || db.min == null) {
                        db.min = d[j][1];
                    }
                    if ((d[j][1] != null && d[j][1] > db.max) || db.max == null) {
                        db.max = d[j][1];
                    }
                    if (j>0) {
                        intv = Math.abs(d[j][1] - d[j-1][1]);
                        stats.intervals.push(intv);
                        if (stats.frequencies.hasOwnProperty(intv)) {
                            stats.frequencies[intv] += 1;
                        }
                        else {
                            stats.frequencies[intv] = 1;
                        }
                    }
                }
                sum += intv;              
            }

            if (s.renderer.bands) {
                if (s.renderer.bands.hiData.length) {
                    var bd = s.renderer.bands.hiData;
                    for (var j=0, l=bd.length; j < l; j++) {
                        if (this.name === 'xaxis' || this.name === 'x2axis') {
                            bd[j][0] = new $.jsDate(bd[j][0]).getTime();
                            if ((bd[j][0] != null && bd[j][0] > db.max) || db.max == null) {
                                db.max = bd[j][0];
                            }                        
                        }              
                        else {
                            bd[j][1] = new $.jsDate(bd[j][1]).getTime();
                            if ((bd[j][1] != null && bd[j][1] > db.max) || db.max == null) {
                                db.max = bd[j][1];
                            }
                        }
                    }
                }
                if (s.renderer.bands.lowData.length) {
                    var bd = s.renderer.bands.lowData;
                    for (var j=0, l=bd.length; j < l; j++) {
                        if (this.name === 'xaxis' || this.name === 'x2axis') {
                            bd[j][0] = new $.jsDate(bd[j][0]).getTime();
                            if ((bd[j][0] != null && bd[j][0] < db.min) || db.min == null) {
                                db.min = bd[j][0];
                            }                       
                        }              
                        else {
                            bd[j][1] = new $.jsDate(bd[j][1]).getTime();
                            if ((bd[j][1] != null && bd[j][1] < db.min) || db.min == null) {
                                db.min = bd[j][1];
                            }
                        }
                    }
                }
            }
            
            var tempf = 0,
                tempn=0;
            for (var n in stats.frequencies) {
                stats.sortedIntervals.push({interval:n, frequency:stats.frequencies[n]});
            }
            stats.sortedIntervals.sort(function(a, b){
                return b.frequency - a.frequency;
            });
            
            stats.min = $.jqplot.arrayMin(stats.intervals);
            stats.max = $.jqplot.arrayMax(stats.intervals);
            stats.mean = sum/d.length;
            this._intervalStats.push(stats);
            stats = sum = s = d = pd = sd = null;
        }
        db = null;
        
    };
    
    // called with scope of an axis
    $.jqplot.DateAxisRenderer.prototype.reset = function() {
        this.min = this._options.min;
        this.max = this._options.max;
        this.tickInterval = this._options.tickInterval;
        this.numberTicks = this._options.numberTicks;
        this._autoFormatString = '';
        if (this._overrideFormatString && this.tickOptions && this.tickOptions.formatString) {
            this.tickOptions.formatString = '';
        }
        this.daTickInterval = this._daTickInterval;
        // this._ticks = this.__ticks;
    };
    
    $.jqplot.DateAxisRenderer.prototype.createTicks = function(plot) {
        // we're are operating on an axis here
        var ticks = this._ticks;
        var userTicks = this.ticks;
        var name = this.name;
        // databounds were set on axis initialization.
        var db = this._dataBounds;
        var iv = this._intervalStats;
        var dim = (this.name.charAt(0) === 'x') ? this._plotDimensions.width : this._plotDimensions.height;
        var interval;
        var min, max;
        var pos1, pos2;
        var tt, i;
        var threshold = 30;
        var insetMult = 1;
        var daTickInterval = null;
        
        // if user specified a tick interval, convert to usable.
        if (this.tickInterval != null)
        {
            // if interval is a number or can be converted to one, use it.
            // Assume it is in SECONDS!!!
            if (Number(this.tickInterval)) {
                daTickInterval = [Number(this.tickInterval), 'seconds'];
            }
            // else, parse out something we can build from.
            else if (typeof this.tickInterval == "string") {
                var parts = this.tickInterval.split(' ');
                if (parts.length == 1) {
                    daTickInterval = [1, parts[0]];
                }
                else if (parts.length == 2) {
                    daTickInterval = [parts[0], parts[1]];
                }
            }
        }

        var tickInterval = this.tickInterval;
        
        // if we already have ticks, use them.
        // ticks must be in order of increasing value.
        
        min = new $.jsDate((this.min != null) ? this.min : db.min).getTime();
        max = new $.jsDate((this.max != null) ? this.max : db.max).getTime();

        // see if we're zooming.  if we are, don't use the min and max we're given,
        // but compute some nice ones.  They will be reset later.

        var cursor = plot.plugins.cursor;

        if (cursor && cursor._zoom && cursor._zoom.zooming) {
            this.min = null;
            this.max = null;
        }

        var range = max - min;

        if (this.tickOptions == null || !this.tickOptions.formatString) {
            this._overrideFormatString = true;
        }
        
        if (userTicks.length) {
            // ticks could be 1D or 2D array of [val, val, ,,,] or [[val, label], [val, label], ...] or mixed
            for (i=0; i<userTicks.length; i++){
                var ut = userTicks[i];
                var t = new this.tickRenderer(this.tickOptions);
                if (ut.constructor == Array) {
                    t.value = new $.jsDate(ut[0]).getTime();
                    t.label = ut[1];
                    if (!this.showTicks) {
                        t.showLabel = false;
                        t.showMark = false;
                    }
                    else if (!this.showTickMarks) {
                        t.showMark = false;
                    }
                    t.setTick(t.value, this.name);
                    this._ticks.push(t);
                }
                
                else {
                    t.value = new $.jsDate(ut).getTime();
                    if (!this.showTicks) {
                        t.showLabel = false;
                        t.showMark = false;
                    }
                    else if (!this.showTickMarks) {
                        t.showMark = false;
                    }
                    t.setTick(t.value, this.name);
                    this._ticks.push(t);
                }
            }
            this.numberTicks = userTicks.length;
            this.min = this._ticks[0].value;
            this.max = this._ticks[this.numberTicks-1].value;
            this.daTickInterval = [(this.max - this.min) / (this.numberTicks - 1)/1000, 'seconds'];
        }

        ////////
        // We don't have any ticks yet, let's make some!
        ////////

        // special case when there is only one point, make three tick marks to center the point
        else if (this.min == null && this.max == null && db.min == db.max)
        {
             var onePointOpts = $.extend(true, {}, this.tickOptions, {name: this.name, value: null});
             var delta = 300000;
             this.min = db.min - delta;
             this.max = db.max + delta;
             this.numberTicks = 3;

             for(var i=this.min;i<=this.max;i+= delta)
             {
                 onePointOpts.value = i;

                 var t = new this.tickRenderer(onePointOpts);

                 if (this._overrideFormatString && this._autoFormatString != '') {
                    t.formatString = this._autoFormatString;
                 }

                 t.showLabel = false;
                 t.showMark = false;

                 this._ticks.push(t);
             }

             if(this.showTicks) {
                 this._ticks[1].showLabel = true;
             }
             if(this.showTickMarks) {
                 this._ticks[1].showTickMarks = true;
             }                   
        }
        // if user specified min and max are null, we set those to make best ticks.
        else if (this.min == null && this.max == null) {

            var opts = $.extend(true, {}, this.tickOptions, {name: this.name, value: null});

            // want to find a nice interval 
            var nttarget,
                titarget;

            // if no tickInterval or numberTicks options specified,  make a good guess.
            if (!this.tickInterval && !this.numberTicks) {
                var tdim = Math.max(dim, threshold+1);
                // how many ticks to put on the axis?
                // date labels tend to be long.  If ticks not rotated,
                // don't use too many and have a high spacing factor.
                // If we are rotating ticks, use a lower factor.
                var spacingFactor = 115;
                if (this.tickRenderer === $.jqplot.CanvasAxisTickRenderer && this.tickOptions.angle) {
                    spacingFactor = 115 - 40 * Math.abs(Math.sin(this.tickOptions.angle/180*Math.PI));
                }

                nttarget =  Math.ceil((tdim-threshold)/spacingFactor + 1);
                titarget = (max - min) / (nttarget - 1);
            }

            // If tickInterval is specified, we'll try to honor it.
            // Not guaranteed to get this interval, but we'll get as close as
            // we can.
            // tickInterval will be used before numberTicks, that is if
            // both are specified, numberTicks will be ignored.
            else if (this.tickInterval) {
                titarget = new $.jsDate(0).add(daTickInterval[0], daTickInterval[1]).getTime();
            }

            // if numberTicks specified, try to honor it.
            // Not guaranteed, but will try to get close.
            else if (this.numberTicks) {
                nttarget = this.numberTicks;
                titarget = (max - min) / (nttarget - 1);
            }

            // If we can use an interval of 2 weeks or less, pick best one
            if (titarget <= 19*day) {
                var ret = bestDateInterval(min, max, titarget);
                var tempti = ret[0];
                this._autoFormatString = ret[1];

                min = new $.jsDate(min);
                min = Math.floor((min.getTime() - min.getUtcOffset())/tempti) * tempti + min.getUtcOffset();

                nttarget = Math.ceil((max - min) / tempti) + 1;
                this.min = min;
                this.max = min + (nttarget - 1) * tempti;

                // if max is less than max, add an interval
                if (this.max < max) {
                    this.max += tempti;
                    nttarget += 1;
                }
                this.tickInterval = tempti;
                this.numberTicks = nttarget;

                for (var i=0; i<nttarget; i++) {
                    opts.value = this.min + i * tempti;
                    t = new this.tickRenderer(opts);
                    
                    if (this._overrideFormatString && this._autoFormatString != '') {
                        t.formatString = this._autoFormatString;
                    }
                    if (!this.showTicks) {
                        t.showLabel = false;
                        t.showMark = false;
                    }
                    else if (!this.showTickMarks) {
                        t.showMark = false;
                    }
                    this._ticks.push(t);
                }

                insetMult = this.tickInterval;
            }

            // should we use a monthly interval?
            else if (titarget <= 9 * month) {

                this._autoFormatString = '%v';

                // how many months in an interval?
                var intv = Math.round(titarget/month);
                if (intv < 1) {
                    intv = 1;
                }
                else if (intv > 6) {
                    intv = 6;
                }

                // figure out the starting month and ending month.
                var mstart = new $.jsDate(min).setDate(1).setHours(0,0,0,0);

                // See if max ends exactly on a month
                var tempmend = new $.jsDate(max);
                var mend = new $.jsDate(max).setDate(1).setHours(0,0,0,0);

                if (tempmend.getTime() !== mend.getTime()) {
                    mend = mend.add(1, 'month');
                }

                var nmonths = mend.diff(mstart, 'month');

                nttarget = Math.ceil(nmonths/intv) + 1;

                this.min = mstart.getTime();
                this.max = mstart.clone().add((nttarget - 1) * intv, 'month').getTime();
                this.numberTicks = nttarget;

                for (var i=0; i<nttarget; i++) {
                    if (i === 0) {
                        opts.value = mstart.getTime();
                    }
                    else {
                        opts.value = mstart.add(intv, 'month').getTime();
                    }
                    t = new this.tickRenderer(opts);
                    
                    if (this._overrideFormatString && this._autoFormatString != '') {
                        t.formatString = this._autoFormatString;
                    }
                    if (!this.showTicks) {
                        t.showLabel = false;
                        t.showMark = false;
                    }
                    else if (!this.showTickMarks) {
                        t.showMark = false;
                    }
                    this._ticks.push(t);
                }

                insetMult = intv * month;
            }

            // use yearly intervals
            else {

                this._autoFormatString = '%v';

                // how many years in an interval?
                var intv = Math.round(titarget/year);
                if (intv < 1) {
                    intv = 1;
                }

                // figure out the starting and ending years.
                var mstart = new $.jsDate(min).setMonth(0, 1).setHours(0,0,0,0);
                var mend = new $.jsDate(max).add(1, 'year').setMonth(0, 1).setHours(0,0,0,0);

                var nyears = mend.diff(mstart, 'year');

                nttarget = Math.ceil(nyears/intv) + 1;

                this.min = mstart.getTime();
                this.max = mstart.clone().add((nttarget - 1) * intv, 'year').getTime();
                this.numberTicks = nttarget;

                for (var i=0; i<nttarget; i++) {
                    if (i === 0) {
                        opts.value = mstart.getTime();
                    }
                    else {
                        opts.value = mstart.add(intv, 'year').getTime();
                    }
                    t = new this.tickRenderer(opts);
                    
                    if (this._overrideFormatString && this._autoFormatString != '') {
                        t.formatString = this._autoFormatString;
                    }
                    if (!this.showTicks) {
                        t.showLabel = false;
                        t.showMark = false;
                    }
                    else if (!this.showTickMarks) {
                        t.showMark = false;
                    }
                    this._ticks.push(t);
                }

                insetMult = intv * year;
            }
        }

        ////////
        // Some option(s) specified, work around that.
        ////////
        
        else {      
            if (name == 'xaxis' || name == 'x2axis') {
                dim = this._plotDimensions.width;
            }
            else {
                dim = this._plotDimensions.height;
            }
            
            // if min, max and number of ticks specified, user can't specify interval.
            if (this.min != null && this.max != null && this.numberTicks != null) {
                this.tickInterval = null;
            }
            
            if (this.tickInterval != null && daTickInterval != null) {
                this.daTickInterval = daTickInterval;
            }
            
            // if min and max are same, space them out a bit
            if (min == max) {
                var adj = 24*60*60*500;  // 1/2 day
                min -= adj;
                max += adj;
            }

            range = max - min;
            
            var optNumTicks = 2 + parseInt(Math.max(0, dim-100)/100, 10);
            
            
            var rmin, rmax;
            
            rmin = (this.min != null) ? new $.jsDate(this.min).getTime() : min - range/2*(this.padMin - 1);
            rmax = (this.max != null) ? new $.jsDate(this.max).getTime() : max + range/2*(this.padMax - 1);
            this.min = rmin;
            this.max = rmax;
            range = this.max - this.min;
            
            if (this.numberTicks == null){
                // if tickInterval is specified by user, we will ignore computed maximum.
                // max will be equal or greater to fit even # of ticks.
                if (this.daTickInterval != null) {
                    var nc = new $.jsDate(this.max).diff(this.min, this.daTickInterval[1], true);
                    this.numberTicks = Math.ceil(nc/this.daTickInterval[0]) +1;
                    // this.max = new $.jsDate(this.min).add(this.numberTicks-1, this.daTickInterval[1]).getTime();
                    this.max = new $.jsDate(this.min).add((this.numberTicks-1) * this.daTickInterval[0], this.daTickInterval[1]).getTime();
                }
                else if (dim > 200) {
                    this.numberTicks = parseInt(3+(dim-200)/100, 10);
                }
                else {
                    this.numberTicks = 2;
                }
            }
            
            insetMult = range / (this.numberTicks-1)/1000;

            if (this.daTickInterval == null) {
                this.daTickInterval = [insetMult, 'seconds'];
            }


            for (var i=0; i<this.numberTicks; i++){
                var min = new $.jsDate(this.min);
                tt = min.add(i*this.daTickInterval[0], this.daTickInterval[1]).getTime();
                var t = new this.tickRenderer(this.tickOptions);
                // var t = new $.jqplot.AxisTickRenderer(this.tickOptions);
                if (!this.showTicks) {
                    t.showLabel = false;
                    t.showMark = false;
                }
                else if (!this.showTickMarks) {
                    t.showMark = false;
                }
                t.setTick(tt, this.name);
                this._ticks.push(t);
            }
        }

        if (this.tickInset) {
            this.min = this.min - this.tickInset * insetMult;
            this.max = this.max + this.tickInset * insetMult;
        }

        if (this._daTickInterval == null) {
            this._daTickInterval = this.daTickInterval;    
        }

        ticks = null;
    };
   
})(jQuery);


var warnOnLeave = false;

window.onbeforeunload = confirmExit;

function confirmExit() {
    if (warnOnLeave)
        return "Changes have been made, are you sure you want to leave without saving?";
}

var inIframe = (parent !== window);
var visitsLoaded = 0;
var finished = false;
var busy = false;

function zmDisplayLoader() {
    $('#admin-ajax-loading').show();
    //$('#admin-loading .loader').show();
}

$(document).ready(function () {

    $('.mediaUpload').change(function () {
        $(this).closest('form').submit().prepend('<div class="loader" style="display: block;"></div>');
        $(this).hide();
    })

    if ($('#admin').length) {
        $('.edit-link').html('<i class="ti-pencil"></i>');
        if (inIframe) {
            $('.admin-button.cloud-icon').hide();
        }
        $('#admin').after("<div id='aside-buttons'></div>").find('aside').each(function (k, asideObj) {
            $(this).append("<a class='aside-close'><i class='ti-angle-down'></i></a>").find('.aside-close').on('click', function () {
                $(this).parent().slideUp();
            });
            $('#aside-buttons').append("<a class='aside-button' title='" + $(this).find('h3').html() + "'><i class='" + $(this).find('h3').data('icon') + "'></i></a>").find('.aside-button').last().on('click', function () {
                $(asideObj).slideDown();
            });
            $(asideObj).find('h3').prepend("<i class='" + $(asideObj).find('h3').data('icon') + "'></i> ");
        });
        // This needs to only be fired on mobile
        //$('#aside-buttons').slideDown();

        $("#admin a").on('click', function () {
            if ($(this).attr('href') != undefined && $(this).attr('target') != '_blank')
                zmDisplayLoader();
        });
        $('form').on('submit', function () {
            zmDisplayLoader();
        });
    }

    $(".admin-menu").append("<div id='admin-ajax-loading' class='loader'></div>");

    $(document).ready(function () {

        /*
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register(baseRoot + '/assets/js/service-worker.js')
                .then(function() { console.log('Service Worker Registered'); });
        }
        */

        $("input[type=text],input[type=date],input[type=email],input[type=password]").each(function () {
            $(this).css("padding-right", $(this).closest("label").find(".monkey").width() + 18);
        });

        $('.stupid-autocomplete-fix').removeAttr('readonly');

        // When any changes are made to a form with the class .checkChanged the page will prompt if you try to leave without submitting the form
        if ($('form.checkChanged').length > 0) {
            $(this).submit(function () {
                warnOnLeave = false;
            });
            $(this).find('input[type=text],textarea').each(function () {
                $(this).change(function () {
                    warnOnLeave = true;
                });
            });
        }

        if ($('input[name="show_in_menu"]').attr("checked") != "checked")
            $('#page_menu').parent().hide();

        $('input[name="show_in_menu"]').change(function () {
            if ($('input[name="show_in_menu"]').attr("checked") != "checked")
                $('#page_menu').parent().hide();
            else
                $('#page_menu').parent().show();
        });

        $('.delete-button').click(function () {
            if (!confirm('Are you sure you want to delete this?')) {
                return false;
            }
        });

        /*  if ($("#ugraphaside").length) {
            $.get(baseRoot+"ajax/ajax-admin.php?a=ugraphaside", function(data) {
                alert(data);
              $("#ugraphaside").html(data).height('auto');
            });
          }*/

        $(window).scroll(function () {
            if ($("#visits-table").length) {
                load_anal("a=visits", "#visits-table");
            } else if ($("#visits-table-page").length) {
                load_anal("a=visits&vis-page=" + Vpage, "#visits-table-page");
            } else if ($("#visits-table-ip").length) {
                load_anal("a=visits&ip=" + ip, "#visits-table-ip");
            }

            $('.trumbowyg-box').each(function () {
                if ($(window).scrollTop() > $(this).offset().top - 48) {
                    $(this).addClass('trumbowyg-box-fixed-buttons');
                } else {
                    $(this).removeClass('trumbowyg-box-fixed-buttons');
                }
            });
        });

        if ($("#emails").length) {
            $("<div>").load(baseRoot + "ajax/emails.php", function () {
                $("#emails").html($(this).html());
            });
        }

        $(".task-box input").change(function () {
            $("#admin-ajax-loading").show();
            if ($(this).is(':checked')) {
                $(this).parent().addClass('checked');
                $.ajax({
                    type: 'POST',
                    url: baseRoot + "ajax/ajax-admin.php?a=check",
                    data: {
                        id: this.id.replace("task_", ""),
                        toke: token
                    },
                    fail: function () {
                        alert("AJAX error");
                        $("#admin-ajax-loading").hide();
                    },
                    success: function () {
                        $("#admin-ajax-loading").hide();
                    },
                })
            } else {
                $(this).parent().removeClass('checked');
                $.ajax({
                    type: 'POST',
                    url: baseRoot + "ajax/ajax-admin.php?a=uncheck",
                    data: {
                        id: this.id.replace("task_", ""),
                        toke: token
                    },
                    fail: function () {
                        alert("AJAX error");
                        $("#admin-ajax-loading").hide();
                    },
                    success: function () {
                        $("#admin-ajax-loading").hide();
                    },
                })
            }
        });
        $(".task-box .isimporant").click(function () {
            $("#admin-ajax-loading").show();
            if ($(this).hasClass("yesitis")) {
                $(this).removeClass('yesitis');
                $.ajax({
                    type: 'POST',
                    url: baseRoot + "ajax/ajax-admin.php?a=notimportant",
                    data: {
                        id: this.id.replace("taskImp_", ""),
                        toke: token
                    },
                    fail: function () {
                        alert("AJAX error");
                        $("#admin-ajax-loading").hide();
                    },
                    success: function () {
                        $("#admin-ajax-loading").hide();
                    },
                })
            } else {
                $(this).addClass('yesitis');
                $.ajax({
                    type: 'POST',
                    url: baseRoot + "ajax/ajax-admin.php?a=important",
                    data: {
                        id: this.id.replace("taskImp_", ""),
                        toke: token
                    },
                    fail: function () {
                        alert("AJAX error");
                        $("#admin-ajax-loading").hide();
                    },
                    success: function () {
                        $("#admin-ajax-loading").hide();
                    },
                })
            }
        });

        if ($(".sortable").length > 0) {
            $(".sortable").sortable({
                handle: ".handle",
                axis: 'y',
                placeholder: "sortable-highlight",
                start: function (e, ui) {
                    ui.placeholder.height(ui.item.height());
                },
                update: function (event, ui) {
                    $("#admin-ajax-loading").show();
                    $.ajax({
                        type: 'POST',
                        url: baseRoot + "ajax/ajax-admin.php?a=sortable",
                        data: {
                            type: $(this).data('type'),
                            t: $(this).sortable('toArray'),
                            toke: token,
                        },
                        success: function () {
                            $("#admin-ajax-loading").hide();
                        },
                    })
                }
            });
        }
        $(".link-table tr").click(function () {
            var href = $(this).attr("href");
            if (href) {
                window.location = href;
            }
        });

        $('.task-box').each(function () {
            if ($(this).children('.task-details').height() > 90) {
                $(this).addClass('overflow');
                $(this).append('<div class="overflow-toggle"></div>');
            }
        });
        $(document).on("click", ".overflow-toggle", function () {
            $(this).parent().toggleClass('overflow-toggled');

        });

        showPasswords();
        if (window.crypto && window.crypto.getRandomValues) {
            $('#shhhh-security').html('Full Crypto');
        } else if (window.msCrypto && window.msCrypto.getRandomValues) {
            $('#shhhh-security').html('MS Crypto');
        } else {
            $('#shhhh-security').addClass('warning').html('No Crypto');
        }

        $('#moreShhh').click(function () {
            showPasswords();
        });

        $(window).scroll();

        $('.texteditor').each(function () {
            $(this).trumbowyg({
                svgPath: '/assets/img/trumbowyg-icons.svg',
                btns: [
                    ['viewHTML'],
                    ['undo', 'redo'], // Only supported in Blink browsers
                    ['formatting'],
                    ['strong', 'em', 'del'],
                    ['superscript', 'subscript'],
                    ['link'],
                    ['zm_image'],
                    ['zm_imageLinked'],
                    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                    ['unorderedList', 'orderedList'],
                    ['horizontalRule'],
                    ['removeformat'],
                    ['fullscreen']
                ],
                btnsDef: {
                    formatting: {
                        dropdown: ['p', 'blockquote', 'h2', 'h3', 'h4', 'gallery', 'columns'],
                        ico: 'p'
                    }
                },
                removeformatPasted: true,
                autogrow: true,
                semantic: false,
                tagsToKeep: ['hr', 'img', 'embed', 'iframe', 'input', 'section', 'div']
            }).on('tbwchange', function () {
                warnOnLeave = true;
            })
        });

        $('.full-size-iframe').on('load', function () {
            iFrame = $(this);

            resizeIframe(iFrame);
            var iframeWin = iFrame[0].contentWindow;
            iframeWin.addEventListener('resize', function () {
                resizeIframe(iFrame);
            });
        });

        function resizeIframe(iFrame) {
            if (!iFrame.is(":visible")) {
                iFrame.show();
                $('#admin .loader').remove();
            }
            iFrame.height(iFrame.contents().find('html').height());
        }

    });


    $('.media-select').on('change', function () {
        var src = baseRoot + '/' + $(this).val();
        var preview = $('.prev-' + $(this).attr('name'));
        if (src.match(/.(jpg|jpeg|png|gif)$/i)) {
            preview.attr('src', src);
            preview.show();
        } else {
            preview.hide();
        }


    });
    $('.media-browser').on('click', function () {
        var thisMediaLibary = new mediaLibraryObj($(this).next());
    });


    var Upload = function (file) {
        this.file = file;
    };

    Upload.prototype.getType = function () {
        return this.file.type;
    };
    Upload.prototype.getSize = function () {
        return this.file.size;
    };
    Upload.prototype.getName = function () {
        return this.file.name;
    };
    Upload.prototype.doUpload = function ($folder) {
        var that = this;
        var formData = new FormData();

        // add assoc key values, this will be posts values
        formData.append("toke", $('.media-browser-window input[name=toke]').val());
        formData.append("m", "ZM_fileUpload");
        formData.append("a", "uploadFile");
        formData.append("folder", $folder);
        formData.append("file", this.file, this.getName());

        $.ajax({
            type: "POST",
            url: baseRoot + "ajax/ajax-admin.php",
            xhr: function () {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    myXhr.upload.addEventListener('progress', that.progressHandling, false);
                }
                return myXhr;
            },
            success: function (data) {
                $('.dialog-content').find('loader').remove();
                if (data['error'] !== undefined) {
                    $('.dialog-content').prepend("<div onClick='$(this).remove();' class='message error'>" + data['error'] + "</div>");
                } else if (data['success'] !== undefined) {
                    $('.dialog-content').prepend("<div onClick='$(this).remove();' class='message'>" + data['success'] + "</div>");
                }
                $('.mediaUploadAjax').val('').prop('disabled', false);
            },
            error: function (error) {
                console.log(error);
                alert("Error! Sorry.");
            },
            async: true,
            data: formData,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            timeout: 60000
        });
    };

    Upload.prototype.progressHandling = function (event) {
        var percent = 0;
        var position = event.loaded || event.position;
        var total = event.total;
        var progress_bar_id = "#progress-wrp";
        if (event.lengthComputable) {
            percent = Math.ceil(position / total * 100);
        }
        // update progressbars classes so it fits your code
        $(progress_bar_id + " .progress-bar").css("width", +percent + "%");
        $(progress_bar_id + " .status").text(percent + "%");
        if (percent == 100) {
            $(progress_bar_id).addClass('complete');
        }
    };

    function mediaLibraryObj(output) {
        var mediaLibraryDialog = new dialog();
        mediaLibraryDialog.title = "Media";
        mediaLibraryDialog.parent = this;
        mediaLibraryDialog.menuItems = [
            {
                title: "Browse", cssClass: "media-libray-select-image", callback: function () {
                    mediaLibraryDialog.setContent('<div class="loader" style="display: block;"></div>');
                    $.ajax({
                        type: "POST",
                        url: baseRoot + "ajax/ajax-admin.php",
                        data: {
                            m: "ZM_fileUpload",
                            a: "browseMedia",
                            folder: $(output).data('folder'),
                            format: $(output).data('format'),
                            thumbnail: $(output).data('thumbnail'),
                            toke: token,
                        },
                        success: function (data) {
                            mediaLibraryDialog.setContent(data);
                            $('.browse-media-thumbnail').on('click', function () {
                                output.val($(this).data('url'));
                                output.change();
                                mediaLibraryDialog.hide();
                            });
                            $('.browse-media-thumbnail-video').on('mouseenter', function () {
                                $(this).find('video')[0].play();
                            }).on('mouseleave', function () {
                                $(this).find('video')[0].pause();
                            });
                        }
                    })
                }
            },
            {
                title: "Upload", cssClass: "media-libray-upload", callback: function () {
                    mediaLibraryDialog.setContent('<div class="loader" style="display: block;"></div>');
                    $.ajax({
                        type: "POST",
                        url: baseRoot + "ajax/ajax-admin.php",
                        data: {
                            m: "ZM_fileUpload",
                            a: "uploadMedia",
                            folder: output.data('folder'),
                            //toke: $('.media-browser-window input[name=toke]').val()
                            toke: token,
                        },
                        success: function (data) {
                            mediaLibraryDialog.setContent(data);
                            $(".mediaUploadAjax").on("change", function (e) {
                                $(this).prepend('<div class="loader" style="display: block;"></div>');
                                var file = $(this)[0].files[0];
                                var upload = new Upload(file);

                                // maby check size or type here with upload.getSize() and upload.getType()
                                $(this).prop('disabled', true);
                                upload.doUpload(output.data('folder'));
                            });
                        }
                    })
                }
            }
        ];
        mediaLibraryDialog.display();
    }

    function dialog() {
        var curDialog = this;
        this.title = "";
        this.jquery = null;
        this.menuItems = [];
        this.parent = null;
        this.display = function () {
            $('#body').append("<div class='media-browser-wrapper'><div class='media-browser-window'><div class='dialog-title-bar'><div class='dialog-title'>" + curDialog.title + "</div><div class='dialog-close'></div></div><div class='dialog-content'></div></div></div>");
            curDialog.jquery = $('.media-browser-wrapper');
            for (var i = 0; i < curDialog.menuItems.length; i++) {
                var item = curDialog.jquery.find('.dialog-title-bar').append('<a class="' + curDialog.menuItems[i].cssClass + '">' + curDialog.menuItems[i].title + '</a>');
                var button = item.find('a').last();
                button.on('click', curDialog.menuItems[i].callback);
                button.on('click', function () {
                    curDialog.jquery.find('a.active').removeClass('active');
                    $(this).addClass('active');
                });
            }


            //mediaLibraryDialog.jquery.find('.dialog-title-bar .active').removeClass('.active');

            curDialog.jquery.on('click', function () {
                curDialog.hide();
            });
            $('.dialog-close').on('click', function () {
                curDialog.hide();
            });
            $('.media-browser-window').click(function (evt) {
                evt.stopPropagation();
            });
            curDialog.jquery.find('.dialog-title-bar a').first().click();
        };

        this.setContent = function (content) {
            curDialog.jquery.find('.dialog-content').html(content);
        };
        this.hide = function () {
            curDialog.jquery.remove();
        };
    }


    function showPasswords() {
        var chars = $('#shhhNumber').val();
        $('#shhh').html(
            "<p><code>" + randomPassword(chars) + "</code></p>" +
            "<p><code>" + randomPassword(chars) + "</code></p>" +
            "<p><code>" + randomPassword(chars) + "</code></p>" +
            "<p><code>" + randomPassword(chars) + "</code></p>" +
            "<p><code>" + randomPassword(chars) + "</code></p>" +
            "<p><code>" + randomPassword(chars) + "</code></p>"
        );
    }

    function randomPassword(length) {
        chars = $('#shhhChars').val();
        pass = "";
        for (x = 0; x < length; x++) {
            rand = getRandomByte() / 256;
            i = Math.floor(rand * chars.length);
            pass += chars.charAt(i);
        }
        var entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        return String(pass).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    }

    function getRandomByte() {
        // http://caniuse.com/#feat=getrandomvalues
        if (window.crypto && window.crypto.getRandomValues) {
            var result = new Uint8Array(1);
            window.crypto.getRandomValues(result);
            return result[0];
        }
        else if (window.msCrypto && window.msCrypto.getRandomValues) {
            var result = new Uint8Array(1);
            window.msCrypto.getRandomValues(result);
            return result[0];
        }
        else {
            return Math.floor(Math.random() * 256);
        }
    }

    var dest = '';

});

$(document).ready(function () {
    if ($("#ugraphaside").length) {
        var plot1 = $.jqplot('chart1', [line1], {
            animate: true,
            animateReplot: true,
            axes: {
                xaxis: {
                    renderer: $.jqplot.DateAxisRenderer,
                    tickOptions: {
                        formatString: '%b&nbsp;%#d'
                    },
                    min: graph_min
                },
                yaxis: {
                    tickOptions: {
                        formatString: '%d'
                    },
                    min: 0
                }
            },
            series: [{lineWidth: 4, smooth: true, color: 'rgb(247, 59, 115)'}],
            highlighter: {
                show: true,
                sizeAdjust: 7
            },
            cursor: {
                show: false
            }
        });
    }
});