!function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";function n(t,e){if(1===arguments.length){for(var i=t[0],a=1;a<t.length;a++)i=n(i,t[a]);return i}for(var o in e)if("class"===o){var s=t[o]||[];t[o]=(Array.isArray(s)?s:[s]).concat(e[o]||[])}else if("style"===o){var s=r(t[o]),l=r(e[o]);t[o]=s+l}else t[o]=e[o];return t}function a(t,e){for(var i,n="",a="",o=Array.isArray(e),r=0;r<t.length;r++)(i=s(t[r]))&&(o&&e[r]&&(i=u(i)),n=n+a+i,a=" ");return n}function o(t){var e="",i="";for(var n in t)n&&t[n]&&d.call(t,n)&&(e=e+i+n,i=" ");return e}function s(t,e){return Array.isArray(t)?a(t,e):t&&"object"==typeof t?o(t):t||""}function r(t){if(!t)return"";if("object"==typeof t){var e="";for(var i in t)d.call(t,i)&&(e=e+i+":"+t[i]+";");return e}return t+="",";"!==t[t.length-1]?t+";":t}function l(t,e,i,n){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(n?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),i||-1===e.indexOf('"'))?(i&&(e=u(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}function c(t,e){var i="";for(var n in t)if(d.call(t,n)){var a=t[n];if("class"===n){a=s(a),i=l(n,a,!1,e)+i;continue}"style"===n&&(a=r(a)),i+=l(n,a,!1,e)}return i}function u(t){var e=""+t,i=m.exec(e);if(!i)return t;var n,a,o,s="";for(n=i.index,a=0;n<e.length;n++){switch(e.charCodeAt(n)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}a!==n&&(s+=e.substring(a,n)),a=n+1,s+=o}return a!==n?s+e.substring(a,n):s}function p(t,e,n,a){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||a))throw t.message+=" on line "+n,t;try{a=a||i(9).readFileSync(e,"utf8")}catch(e){p(t,null,n)}var o=3,s=a.split("\n"),r=Math.max(n-o,0),l=Math.min(s.length,n+o),o=s.slice(r,l).map(function(t,e){var i=e+r+1;return(i==n?"  > ":"    ")+i+"| "+t}).join("\n");throw t.path=e,t.message=(e||"Pug")+":"+n+"\n"+o+"\n\n"+t.message,t}var d=Object.prototype.hasOwnProperty;e.merge=n,e.classes=s,e.style=r,e.attr=l,e.attrs=c;var m=/["&<>]/;e.escape=u,e.rethrow=p},function(t,e,i){i(2),t.exports=i(8)},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}i(3);var a=i(4),o=n(a),s=i(5),r=n(s);t.exports=i(7),new o.default(".accordion__header",".accordion__panel",".accordion__content").init(),r.default.init()},function(t,e){},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e,i,a){n(this,t),this.listener=e,this.panel=i,this.content=a}return a(t,[{key:"handler",value:function(t){var e=t.parentNode,i=e.querySelector(""+this.content);if(e.classList.contains("active"))e.classList.remove("active"),i.removeAttribute("style");else{for(var n=0;n<this.accordions.length;n++)this.accordions[n].classList.remove("active"),this.accordions[n].querySelector(""+this.content).removeAttribute("style");e.classList.add("active"),i.style.maxHeight=1.2*this.getContentHeight(i)+"px"}}},{key:"getContentHeight",value:function(t){return t.children[0].offsetHeight}},{key:"init",value:function(){var t=this;this.accordionsHeader=document.querySelectorAll(""+this.listener),this.accordions=document.querySelectorAll(""+this.panel);for(var e=0;e<this.accordions.length;e++)!function(e){t.accordionsHeader[e].addEventListener("click",function(){return t.handler(t.accordionsHeader[e])})}(e)}}]),t}();e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(6);(function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e})(n).polyfill();var a={currentScroll:0,scrollDelay:300,currentAnswer:null,getAnwser:function(t){var e=this;if(t.target.matches?t.target.matches(".question__item"):event.target.msMatchesSelector(".question__item")){t.preventDefault();var i=t.target;this.saveCurrentScroll(i);var n=parseInt(i.dataset.category),a=parseInt(i.dataset.order);this.currentAnswer=document.getElementById("answer-"+n+"-"+a);var o=document.getElementById("mapp__wrapper");this.currentAnswer.classList.add("active"),o.classList.add("active"),void 0!==window.scroll&&setTimeout(function(){window.scroll({top:0,behavior:"smooth",duration:e.scrollDelay})},this.scrollDelay)}},saveCurrentScroll:function(){this.currentScroll=Math.max(document.body.scrollTop,document.documentElement.scrollTop,window.pageYOffset)},closeAnswer:function(t){var e=this;if(null!==this.currentAnswer){if(t.target.matches?t.target.matches(".answer__killer"):event.target.msMatchesSelector(".answer__killer")){t.preventDefault();var i=document.getElementById("mapp__wrapper");this.currentAnswer.classList.remove("active"),this.currentAnswer=null,i.classList.remove("active"),void 0!==window.scroll&&this.currentScroll>0&&setTimeout(function(){window.scroll({top:e.currentScroll,behavior:"smooth"})},this.scrollDelay)}}},init:function(){var t=this;document.addEventListener("click",function(e){return t.getAnwser(e)}),document.addEventListener("click",function(e){return t.closeAnswer(e)})}};e.default=a},function(t,e,i){!function(){"use strict";function e(t){var e=["MSIE ","Trident/","Edge/"];return new RegExp(e.join("|")).test(t)}function i(){function t(t,e){this.scrollLeft=t,this.scrollTop=e}function i(t){return.5*(1-Math.cos(Math.PI*t))}function o(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+h<t.scrollHeight:"X"===e?t.clientWidth+h<t.scrollWidth:void 0}function r(t,e){var i=n.getComputedStyle(t,null)["overflow"+e];return"auto"===i||"scroll"===i}function l(t){var e=s(t,"Y")&&r(t,"Y"),i=s(t,"X")&&r(t,"X");return e||i}function c(t){var e;do{t=t.parentNode,e=t===a.body}while(!1===e&&!1===l(t));return e=null,t}function u(t){var e,a,o,s=v(),r=(s-t.startTime)/m;r=r>1?1:r,e=i(r),a=t.startX+(t.x-t.startX)*e,o=t.startY+(t.y-t.startY)*e,t.method.call(t.scrollable,a,o),a===t.x&&o===t.y||n.requestAnimationFrame(u.bind(n,t))}function p(e,i,o){var s,r,l,c,p=v();e===a.body?(s=n,r=n.scrollX||n.pageXOffset,l=n.scrollY||n.pageYOffset,c=f.scroll):(s=e,r=e.scrollLeft,l=e.scrollTop,c=t),u({scrollable:s,method:c,startTime:p,startX:r,startY:l,x:i,y:o})}if(!("scrollBehavior"in a.documentElement.style&&!0!==n.__forceSmoothScrollPolyfill__)){var d=n.HTMLElement||n.Element,m=468,h=e(n.navigator.userAgent)?1:0,f={scroll:n.scroll||n.scrollTo,scrollBy:n.scrollBy,elementScroll:d.prototype.scroll||t,scrollIntoView:d.prototype.scrollIntoView},v=n.performance&&n.performance.now?n.performance.now.bind(n.performance):Date.now;n.scroll=n.scrollTo=function(){if(void 0!==arguments[0])return!0===o(arguments[0])?void f.scroll.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:n.scrollY||n.pageYOffset):void p.call(n,a.body,void 0!==arguments[0].left?~~arguments[0].left:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:n.scrollY||n.pageYOffset)},n.scrollBy=function(){if(void 0!==arguments[0])return o(arguments[0])?void f.scrollBy.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):void p.call(n,a.body,~~arguments[0].left+(n.scrollX||n.pageXOffset),~~arguments[0].top+(n.scrollY||n.pageYOffset))},d.prototype.scroll=d.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===o(arguments[0])){if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");return void f.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}var t=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}},d.prototype.scrollBy=function(){if(void 0!==arguments[0])return!0===o(arguments[0])?void f.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop):void this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})},d.prototype.scrollIntoView=function(){if(!0===o(arguments[0]))return void f.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);var t=c(this),e=t.getBoundingClientRect(),i=this.getBoundingClientRect();t!==a.body?(p.call(this,t,t.scrollLeft+i.left-e.left,t.scrollTop+i.top-e.top),"fixed"!==n.getComputedStyle(t).position&&n.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):n.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}}}var n=window,a=document;t.exports={polyfill:i}}()},function(t,e,i){"use strict";console.log("I am in production")},function(t,e,i){"use strict";function n(t){var e,n="",o={},s=[];n=n+'<!DOCTYPE html>\n<html lang="en">'+(null==(e=i(10).call(this,t))?"":e)+'\n  <body class="mapp">\n    <div class="container">\n      <article class="mapp__wrapper" id="mapp__wrapper">';var r=i(11);return o.category=e=function(t,i){this&&this.block,this&&this.attributes;n+="\n        ",n+=s.join(""),n=n+'<div class="accordion__panel"'+a.attr("data-category",""+(i+1),!0,!0)+">\n          ",n+=s.join(""),n+='<header class="accordion__header">\n            ',n+=s.join(""),n=n+'<div class="accordion__number">'+a.escape(null==(e=i+1+".")?"":e)+"</div>\n            ",n+=s.join(""),n=n+'<h2 class="accordion__label">'+a.escape(null==(e=t.title)?"":e)+"</h2>\n            ",n+=s.join(""),n+='<div class="accordion__arrow">\n              ',n+=s.join(""),n+='<div class="accordion__arrow-icon"></div>\n            ',n+=s.join(""),n+="</div>\n          ",n+=s.join(""),n+="</header>\n          ",n+=s.join(""),n+='<article class="accordion__content">\n            ',n+=s.join(""),n+='<ul class="question__list">',function(){var o=t.questions;if("number"==typeof o.length)for(var r=0,l=o.length;r<l;r++){var c=o[r];n+="\n              ",n+=s.join(""),n=n+'<li class="question__item"'+a.attr("id","question-"+(i+1)+"-"+(r+1),!0,!0)+a.attr("data-category",""+(i+1),!0,!0)+a.attr("data-order",""+(r+1),!0,!0)+">\n                ",n+=s.join(""),n=n+'<div class="question__number">'+a.escape(null==(e=i+1+"."+(r+1))?"":e)+"</div>\n                ",n+=s.join(""),n=n+'<div class="question">'+a.escape(null==(e=c.title)?"":e)+"</div>\n                ",n+=s.join(""),n+='<div class="question__arrow">\n                  ',n+=s.join(""),n+='<div class="question__arrow-icon"></div>\n                ',n+=s.join(""),n+="</div>\n              ",n+=s.join(""),n+="</li>"}else{var l=0;for(var r in o){l++;var c=o[r];n+="\n              ",n+=s.join(""),n=n+'<li class="question__item"'+a.attr("id","question-"+(i+1)+"-"+(r+1),!0,!0)+a.attr("data-category",""+(i+1),!0,!0)+a.attr("data-order",""+(r+1),!0,!0)+">\n                ",n+=s.join(""),n=n+'<div class="question__number">'+a.escape(null==(e=i+1+"."+(r+1))?"":e)+"</div>\n                ",n+=s.join(""),n=n+'<div class="question">'+a.escape(null==(e=c.title)?"":e)+"</div>\n                ",n+=s.join(""),n+='<div class="question__arrow">\n                  ',n+=s.join(""),n+='<div class="question__arrow-icon"></div>\n                ',n+=s.join(""),n+="</div>\n              ",n+=s.join(""),n+="</li>"}}}.call(this),n+="\n            ",n+=s.join(""),n+="</ul>\n          ",n+=s.join(""),n+="</article>\n        ",n+=s.join(""),n+="</div>"},o.answer=e=function(t,i){this&&this.block,this&&this.attributes;(function(){var o=t.questions;if("number"==typeof o.length)for(var r=0,l=o.length;r<l;r++){var c=o[r];n+="\n        ",n+=s.join(""),n=n+'<div class="answer__wrapper"'+a.attr("id","answer-"+(i+1)+"-"+(r+1),!0,!0)+a.attr("data-category",""+(i+1),!0,!0)+a.attr("data-order",""+(r+1),!0,!0)+">\n          ",n+=s.join(""),n+='<header class="answer__header">\n            ',n+=s.join(""),n=n+'<h4 class="answer__category">'+a.escape(null==(e=t.title)?"":e)+"</h4>\n            ",n+=s.join(""),n=n+'(<span class="answer__category-number">'+a.escape(null==(e=i+1+"."+(r+1))?"":e)+"</span>)\n            ",n+=s.join(""),n+="\n            ",n+=s.join(""),n=n+'<h2 class="answer__category-question">'+a.escape(null==(e=c.title)?"":e)+"</h2>\n            ",n+=s.join(""),n+='<div class="answer__close answer__killer"></div>\n          ',n+=s.join(""),n+="</header>\n          ",n+=s.join(""),n+='<hr class="answer__separator">\n          ',n+=s.join(""),n=n+'<article class="answer">'+(null==(e=c.answer)?"":e)+"</article>\n        ",n+=s.join(""),n+="</div>"}else{var l=0;for(var r in o){l++;var c=o[r];n+="\n        ",n+=s.join(""),n=n+'<div class="answer__wrapper"'+a.attr("id","answer-"+(i+1)+"-"+(r+1),!0,!0)+a.attr("data-category",""+(i+1),!0,!0)+a.attr("data-order",""+(r+1),!0,!0)+">\n          ",n+=s.join(""),n+='<header class="answer__header">\n            ',n+=s.join(""),n=n+'<h4 class="answer__category">'+a.escape(null==(e=t.title)?"":e)+"</h4>\n            ",n+=s.join(""),n=n+'(<span class="answer__category-number">'+a.escape(null==(e=i+1+"."+(r+1))?"":e)+"</span>)\n            ",n+=s.join(""),n+="\n            ",n+=s.join(""),n=n+'<h2 class="answer__category-question">'+a.escape(null==(e=c.title)?"":e)+"</h2>\n            ",n+=s.join(""),n+='<div class="answer__close answer__killer"></div>\n          ',n+=s.join(""),n+="</header>\n          ",n+=s.join(""),n+='<hr class="answer__separator">\n          ',n+=s.join(""),n=n+'<article class="answer">'+(null==(e=c.answer)?"":e)+"</article>\n        ",n+=s.join(""),n+="</div>"}}}).call(this)},n+='\n        <div class="questions" id="questions">',function(){var t=r;if("number"==typeof t.length)for(var e=0,i=t.length;e<i;e++){var n=t[e];s.push("          "),o.category(n,e),s.pop()}else{var i=0;for(var e in t){i++;var n=t[e];s.push("          "),o.category(n,e),s.pop()}}}.call(this),n+='\n        </div>\n        <div class="answers" id="answers">',function(){var t=r;if("number"==typeof t.length)for(var e=0,i=t.length;e<i;e++){var n=t[e];s.push("          "),o.answer(n,e),s.pop()}else{var i=0;for(var e in t){i++;var n=t[e];s.push("          "),o.answer(n,e),s.pop()}}}.call(this),n+="\n        </div>\n      </article>\n    </div>\n  </body>\n</html>"}var a=i(0);t.exports=n},function(t,e){},function(t,e,i){"use strict";function n(t){var e="";return e+='\n<meta charset="utf-8">\n<meta http-equiv="x-ua-compatible" content="ie=edge">\n<title>Mapp App</title>\n<meta name="description" content="Mapp app template">\n<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'}i(0);t.exports=n},function(t,e,i){"use strict";t.exports=[{title:"Transaction management",questions:[{title:"How to initiate a transaction",answer:"<p>You open your wallet</p>\n\t\t\t\t\t\t\t<p>You take out your card</p>\n\t\t\t\t\t\t\t<p>And you pay</p>\n\t\t\t\t\t\t\t<p>HC Pay is mobile and revolving credit wallet - customer gains credit limit after their\n\t\t\t\t\t\t\tfully online and paperless application is approved by HCC</p>\n\t\t\t\t\t\t\t<p>HC Pay is a universal credit purchase financing method - which can be used continuously for payments at supported POS</p>\n\t\t\t\t\t\t\t<p>HC Pay is a discount platform - customers can see discounts provided by merchants and rate them.</p>\n\t\t\t\t\t\t\t<p>HC Pay is mobile and revolving credit wallet - customer gains credit limit after their\n\t\t\t\t\t\t\tfully online and paperless application is approved by HCC</p>\n\t\t\t\t\t\t\t<p>HC Pay is a universal credit purchase financing method - which can be used continuously for payments at supported POS</p>\n\t\t\t\t\t\t\t<p>HC Pay is a discount platform - customers can see discounts provided by merchants and rate them.</p>\n\t\t\t\t\t\t\t<p>HC Pay is mobile and revolving credit wallet - customer gains credit limit after their\n\t\t\t\t\t\t\tfully online and paperless application is approved by HCC</p>\n\t\t\t\t\t\t\t<p>HC Pay is a universal credit purchase financing method - which can be used continuously for payments at supported POS</p>\n\t\t\t\t\t\t\t<p>HC Pay is a discount platform - customers can see discounts provided by merchants and rate them.</p>\n\t\t\t\t\t\t\t<p>HC Pay is mobile and revolving credit wallet - customer gains credit limit after their\n\t\t\t\t\t\t\tfully online and paperless application is approved by HCC</p>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<p>HC Pay is a universal credit purchase financing method - which can be used continuously for payments at supported POS</p>\n\t\t\t\t\t\t\t<p>HC Pay is a discount platform - customers can see discounts provided by merchants and rate them.</p>\n\t\t\t\t\t\t\t<p>HC Pay is mobile and revolving credit wallet - customer gains credit limit after their\n\t\t\t\t\t\t\tfully online and paperless application is approved by HCC</p>\n\t\t\t\t\t\t\t<p>HC Pay is a universal credit purchase financing method - which can be used continuously for payments at supported POS</p>\n\t\t\t\t\t\t\t<p>HC Pay is a discount platform - customers can see discounts provided by merchants and rate them.</p>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<p>HC Pay is mobile and revolving credit wallet - customer gains credit limit after their\n\t\t\t\t\t\t\tfully online and paperless application is approved by HCC</p>\n\t\t\t\t\t\t\t<p>HC Pay is a universal credit purchase financing method - which can be used continuously for payments at supported POS</p>\n\t\t\t\t\t\t\t<p>HC Pay is a discount platform - customers can see discounts provided by merchants and rate them.</p>"},{title:"What is HC Pay?",answer:"<p>HC Pay is mobile and revolving credit wallet - customer gains credit limit after their\n\t\t\t\t\t\t\tfully online and paperless application is approved by HCC</p>\n\t\t\t\t\t\t\t<p>HC Pay is a universal credit purchase financing method - which can be used continuously for payments at supported POS</p>\n\t\t\t\t\t\t\t<p>HC Pay is a discount platform - customers can see discounts provided by merchants and rate them.</p>"}]},{title:"Discount management",questions:[{title:"Why my discount dissapeard from the list?",answer:'<p>There are 3 possibilities why the disount is dissapeared from the list</p>\n\t\t\t\t\t\t<ol style="list-style-type: lower-alpha">\n\t\t\t\t\t\t\t<li>The discount is expired and only can be found in the expired list;</li>\n\t\t\t\t\t\t\t<li>The discount is deleted by merchants</li>\n\t\t\t\t\t\t\t<li>The discount is deleted by HCC</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<ul style="list-style-type: none">\n\t\t\t\t\t\t\t<li>For <em>a)</em>, please check the expired list</li>\n\t\t\t\t\t\t\t<li>For <em>b)</em>, please discuss whether the discount is deleted internally</li>\n\t\t\t\t\t\t\t<li>For <em>c)</em>. Deleted by HCC are because of the failed discount validation on operation side.\n\t\t\t\t\t\t\tPlease make sure no sensitive or illegal information contains in discount and submit again</li>\n\t\t\t\t\t\t</ul> '},{title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",answer:"<p>Ad aliquam beatae culpa, cumque dicta, eaque excepturi iusto magni nam necessitatibus nemo neque nostrum quod rem similique tempore voluptatem! Autem, ea.</p>"},{title:"Why am I so awesome?",answer:"Well here is a list\n\t\t\t\t\t\t<ol>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t</ol>"}]},{title:"Lorem ipsum dolor sit",questions:[{title:"Why my discount dissapeard from the gist?",answer:'<p>amet, consectetur adipisicing elit. A, accusantium aliquid aspernatur corporis </p>\n\t\t\t\t\t\t<ol style="list-style-type: lower-alpha">\n\t\t\t\t\t\t\t<li>eos eveniet ex hic id in maxime, nam praesentium quas, quos </li>\n\t\t\t\t\t\t\t<li>repellat reprehenderit soluta ut vel veritatis.</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<p>amet, consectetur adipisicing elit. A, accusantium aliquid aspernatur corporis </p> '},{title:"Consectetur adipisicing elit?",answer:"<p>Ad aliquam beatae culpa, cumque dicta, eaque excepturi iusto magni nam necessitatibus nemo neque nostrum quod rem similique tempore voluptatem! Autem, ea.</p>"},{title:"Why am I so awesome?",answer:"Well here is a list\n\t\t\t\t\t\t<ol>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t</ol>"}]},{title:"Lorem ipsum dolor sit",questions:[{title:"Why my discount dissapeard from the gist?",answer:'<p>amet, consectetur adipisicing elit. A, accusantium aliquid aspernatur corporis </p>\n\t\t\t\t\t\t<ol style="list-style-type: lower-alpha">\n\t\t\t\t\t\t\t<li>eos eveniet ex hic id in maxime, nam praesentium quas, quos </li>\n\t\t\t\t\t\t\t<li>repellat reprehenderit soluta ut vel veritatis.</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<p>amet, consectetur adipisicing elit. A, accusantium aliquid aspernatur corporis </p> '},{title:"Consectetur adipisicing elit?",answer:"<p>Ad aliquam beatae culpa, cumque dicta, eaque excepturi iusto magni nam necessitatibus nemo neque nostrum quod rem similique tempore voluptatem! Autem, ea.</p>"},{title:"Why am I so awesome?",answer:"Well here is a list\n\t\t\t\t\t\t<ol>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t</ol>"}]},{title:"Discount management",questions:[{title:"Why my discount dissapeard from the list?",answer:'<p>There are 3 possibilities why the disount is dissapeared from the list</p>\n\t\t\t\t\t\t<ol style="list-style-type: lower-alpha">\n\t\t\t\t\t\t\t<li>The discount is expired and only can be found in the expired list;</li>\n\t\t\t\t\t\t\t<li>The discount is deleted by merchants</li>\n\t\t\t\t\t\t\t<li>The discount is deleted by HCC</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<ul style="list-style-type: none">\n\t\t\t\t\t\t\t<li>For <em>a)</em>, please check the expired list</li>\n\t\t\t\t\t\t\t<li>For <em>b)</em>, please discuss whether the discount is deleted internally</li>\n\t\t\t\t\t\t\t<li>For <em>c)</em>. Deleted by HCC are because of the failed discount validation on operation side.\n\t\t\t\t\t\t\tPlease make sure no sensitive or illegal information contains in discount and submit again</li>\n\t\t\t\t\t\t</ul> '},{title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",answer:"<p>Ad aliquam beatae culpa, cumque dicta, eaque excepturi iusto magni nam necessitatibus nemo neque nostrum quod rem similique tempore voluptatem! Autem, ea.</p>"},{title:"Why am I so awesome?",answer:"Well here is a list\n\t\t\t\t\t\t<ol>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t</ol>"},{title:"Why my discount dissapeard from the list?",answer:'<p>There are 3 possibilities why the disount is dissapeared from the list</p>\n\t\t\t\t\t\t<ol style="list-style-type: lower-alpha">\n\t\t\t\t\t\t\t<li>The discount is expired and only can be found in the expired list;</li>\n\t\t\t\t\t\t\t<li>The discount is deleted by merchants</li>\n\t\t\t\t\t\t\t<li>The discount is deleted by HCC</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<ul style="list-style-type: none">\n\t\t\t\t\t\t\t<li>For <em>a)</em>, please check the expired list</li>\n\t\t\t\t\t\t\t<li>For <em>b)</em>, please discuss whether the discount is deleted internally</li>\n\t\t\t\t\t\t\t<li>For <em>c)</em>. Deleted by HCC are because of the failed discount validation on operation side.\n\t\t\t\t\t\t\tPlease make sure no sensitive or illegal information contains in discount and submit again</li>\n\t\t\t\t\t\t</ul> '},{title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",answer:"<p>Ad aliquam beatae culpa, cumque dicta, eaque excepturi iusto magni nam necessitatibus nemo neque nostrum quod rem similique tempore voluptatem! Autem, ea.</p>"},{title:"Why am I so awesome?",answer:"Well here is a list\n\t\t\t\t\t\t<ol>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t\t<li>Cause I can loop</li>\n\t\t\t\t\t\t</ol>"}]},{title:"Transaction management",questions:[{title:"How to initiate a transaction",answer:"<p>You open your wallet</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>You take out your card</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>And you pay</p>"},{title:"What is HC Pay?",answer:"<p>HC Pay is mobile and revolving credit wallet - customer gains credit limit after their\n\t\t\t\t\t\t\t\t\t\t\t\t\tfully online and paperless application is approved by HCC</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>HC Pay is a universal credit purchase financing method - which can be used continuously for payments at supported POS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>HC Pay is a discount platform - customers can see discounts provided by merchants and rate them.</p>"}]}]}]);
//# sourceMappingURL=bundle.js.map