/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

// Fancy select

// Generated by CoffeeScript 1.4.0
(function() {
  var $;

  $ = window.jQuery || window.Zepto || window.$;

  $.fn.fancySelect = function(opts) {
    var isiOS, settings;
    if (opts == null) {
      opts = {};
    }
    settings = $.extend({
      forceiOS: false,
      includeBlank: false,
      optionTemplate: function(optionEl) {
        return optionEl.text();
      },
      triggerTemplate: function(optionEl) {
        return optionEl.text();
      }
    }, opts);
    isiOS = !!navigator.userAgent.match(/iP(hone|od|ad)/i);
    return this.each(function() {
      var copyOptionsToList, disabled, options, sel, trigger, updateTriggerText, wrapper;
      sel = $(this);
      if (sel.hasClass('fancified') || sel[0].tagName !== 'SELECT') {
        return;
      }
      sel.addClass('fancified');
      sel.css({
        width: 1,
        height: 1,
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0
      });
      sel.wrap('<div class="fancy-select">');
      wrapper = sel.parent();
      if (sel.data('class')) {
        wrapper.addClass(sel.data('class'));
      }
      wrapper.append('<div class="trigger">');
      if (!(isiOS && !settings.forceiOS)) {
        wrapper.append('<ul class="options">');
      }
      trigger = wrapper.find('.trigger');
      options = wrapper.find('.options');
      disabled = sel.prop('disabled');
      if (disabled) {
        wrapper.addClass('disabled');
      }
      updateTriggerText = function() {
        var triggerHtml;
        triggerHtml = settings.triggerTemplate(sel.find(':selected'));
        return trigger.html(triggerHtml);
      };
      sel.on('blur.fs', function() {
        if (trigger.hasClass('open')) {
          return setTimeout(function() {
            return trigger.trigger('close.fs');
          }, 120);
        }
      });
      trigger.on('close.fs', function() {
        trigger.removeClass('open');
        return options.removeClass('open');
      });
      trigger.on('click.fs', function() {
        var offParent, parent;
        if (!disabled) {
          trigger.toggleClass('open');
          if (isiOS && !settings.forceiOS) {
            if (trigger.hasClass('open')) {
              return sel.focus();
            }
          } else {
            if (trigger.hasClass('open')) {
              parent = trigger.parent();
              offParent = parent.offsetParent();
              if ((parent.offset().top + parent.outerHeight() + options.outerHeight() + 20) > $(window).height() + $(window).scrollTop()) {
                options.addClass('overflowing');
              } else {
                options.removeClass('overflowing');
              }
            }
            options.toggleClass('open');
            if (!isiOS) {
              return sel.focus();
            }
          }
        }
      });
      sel.on('enable', function() {
        sel.prop('disabled', false);
        wrapper.removeClass('disabled');
        disabled = false;
        return copyOptionsToList();
      });
      sel.on('disable', function() {
        sel.prop('disabled', true);
        wrapper.addClass('disabled');
        return disabled = true;
      });
      sel.on('change.fs', function(e) {
        if (e.originalEvent && e.originalEvent.isTrusted) {
          return e.stopPropagation();
        } else {
          return updateTriggerText();
        }
      });
      sel.on('keydown', function(e) {
        var hovered, newHovered, w;
        w = e.which;
        hovered = options.find('.hover');
        hovered.removeClass('hover');
        if (!options.hasClass('open')) {
          if (w === 13 || w === 32 || w === 38 || w === 40) {
            e.preventDefault();
            return trigger.trigger('click.fs');
          }
        } else {
          if (w === 38) {
            e.preventDefault();
            if (hovered.length && hovered.index() > 0) {
              hovered.prev().addClass('hover');
            } else {
              options.find('li:last-child').addClass('hover');
            }
          } else if (w === 40) {
            e.preventDefault();
            if (hovered.length && hovered.index() < options.find('li').length - 1) {
              hovered.next().addClass('hover');
            } else {
              options.find('li:first-child').addClass('hover');
            }
          } else if (w === 27) {
            e.preventDefault();
            trigger.trigger('click.fs');
          } else if (w === 13 || w === 32) {
            e.preventDefault();
            hovered.trigger('mousedown.fs');
          } else if (w === 9) {
            if (trigger.hasClass('open')) {
              trigger.trigger('close.fs');
            }
          }
          newHovered = options.find('.hover');
          if (newHovered.length) {
            options.scrollTop(0);
            return options.scrollTop(newHovered.position().top - 12);
          }
        }
      });
      options.on('mousedown.fs', 'li', function(e) {
        var clicked;
        clicked = $(this);
        sel.val(clicked.data('raw-value'));
        if (!isiOS) {
          sel.trigger('blur.fs').trigger('focus.fs');
        }
        options.find('.selected').removeClass('selected');
        clicked.addClass('selected');
        trigger.addClass('selected');
        return sel.val(clicked.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs');
      });
      options.on('mouseenter.fs', 'li', function() {
        var hovered, nowHovered;
        nowHovered = $(this);
        hovered = options.find('.hover');
        hovered.removeClass('hover');
        return nowHovered.addClass('hover');
      });
      options.on('mouseleave.fs', 'li', function() {
        return options.find('.hover').removeClass('hover');
      });
      copyOptionsToList = function() {
        var selOpts;
        updateTriggerText();
        if (isiOS && !settings.forceiOS) {
          return;
        }
        selOpts = sel.find('option');
        return sel.find('option').each(function(i, opt) {
          var optHtml;
          opt = $(opt);
          if (!opt.prop('disabled') && (opt.val() || settings.includeBlank)) {
            optHtml = settings.optionTemplate(opt);
            if (opt.prop('selected')) {
              return options.append("<li data-raw-value=\"" + (opt.val()) + "\" class=\"selected\">" + optHtml + "</li>");
            } else {
              return options.append("<li data-raw-value=\"" + (opt.val()) + "\">" + optHtml + "</li>");
            }
          }
        });
      };
      sel.on('update.fs', function() {
        wrapper.find('.options').empty();
        return copyOptionsToList();
      });
      return copyOptionsToList();
    });
  };

}).call(this);


(function($){$.extend({tablesorter:new
function(){var parsers=[],widgets=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:'/\.|\,/g',onRenderHeader:null,selectorHeaders:'thead th',debug:false};function benchmark(s,d){log(s+","+(new Date().getTime()-d.getTime())+"ms");}this.benchmark=benchmark;function log(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s);}else{alert(s);}}function buildParserCache(table,$headers){if(table.config.debug){var parsersDebug="";}if(table.tBodies.length==0)return;var rows=table.tBodies[0].rows;if(rows[0]){var list=[],cells=rows[0].cells,l=cells.length;for(var i=0;i<l;i++){var p=false;if($.metadata&&($($headers[i]).metadata()&&$($headers[i]).metadata().sorter)){p=getParserById($($headers[i]).metadata().sorter);}else if((table.config.headers[i]&&table.config.headers[i].sorter)){p=getParserById(table.config.headers[i].sorter);}if(!p){p=detectParserForColumn(table,rows,-1,i);}if(table.config.debug){parsersDebug+="column:"+i+" parser:"+p.id+"\n";}list.push(p);}}if(table.config.debug){log(parsersDebug);}return list;};function detectParserForColumn(table,rows,rowIndex,cellIndex){var l=parsers.length,node=false,nodeValue=false,keepLooking=true;while(nodeValue==''&&keepLooking){rowIndex++;if(rows[rowIndex]){node=getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex);nodeValue=trimAndGetNodeText(table.config,node);if(table.config.debug){log('Checking if value was empty on row:'+rowIndex);}}else{keepLooking=false;}}for(var i=1;i<l;i++){if(parsers[i].is(nodeValue,table,node)){return parsers[i];}}return parsers[0];}function getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex){return rows[rowIndex].cells[cellIndex];}function trimAndGetNodeText(config,node){return $.trim(getElementText(config,node));}function getParserById(name){var l=parsers.length;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==name.toLowerCase()){return parsers[i];}}return false;}function buildCache(table){if(table.config.debug){var cacheTime=new Date();}var totalRows=(table.tBodies[0]&&table.tBodies[0].rows.length)||0,totalCells=(table.tBodies[0].rows[0]&&table.tBodies[0].rows[0].cells.length)||0,parsers=table.config.parsers,cache={row:[],normalized:[]};for(var i=0;i<totalRows;++i){var c=$(table.tBodies[0].rows[i]),cols=[];if(c.hasClass(table.config.cssChildRow)){cache.row[cache.row.length-1]=cache.row[cache.row.length-1].add(c);continue;}cache.row.push(c);for(var j=0;j<totalCells;++j){cols.push(parsers[j].format(getElementText(table.config,c[0].cells[j]),table,c[0].cells[j]));}cols.push(cache.normalized.length);cache.normalized.push(cols);cols=null;};if(table.config.debug){benchmark("Building cache for "+totalRows+" rows:",cacheTime);}return cache;};function getElementText(config,node){var text="";if(!node)return"";if(!config.supportsTextContent)config.supportsTextContent=node.textContent||false;if(config.textExtraction=="simple"){if(config.supportsTextContent){text=node.textContent;}else{if(node.childNodes[0]&&node.childNodes[0].hasChildNodes()){text=node.childNodes[0].innerHTML;}else{text=node.innerHTML;}}}else{if(typeof(config.textExtraction)=="function"){text=config.textExtraction(node);}else{text=$(node).text();}}return text;}function appendToTable(table,cache){if(table.config.debug){var appendTime=new Date()}var c=cache,r=c.row,n=c.normalized,totalRows=n.length,checkCell=(n[0].length-1),tableBody=$(table.tBodies[0]),rows=[];for(var i=0;i<totalRows;i++){var pos=n[i][checkCell];rows.push(r[pos]);if(!table.config.appender){var l=r[pos].length;for(var j=0;j<l;j++){tableBody[0].appendChild(r[pos][j]);}}}if(table.config.appender){table.config.appender(table,rows);}rows=null;if(table.config.debug){benchmark("Rebuilt table:",appendTime);}applyWidget(table);setTimeout(function(){$(table).trigger("sortEnd");},0);};function buildHeaders(table){if(table.config.debug){var time=new Date();}var meta=($.metadata)?true:false;var header_index=computeTableHeaderCellIndexes(table);$tableHeaders=$(table.config.selectorHeaders,table).each(function(index){this.column=header_index[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=formatSortingOrder(table.config.sortInitialOrder);this.count=this.order;if(checkHeaderMetadata(this)||checkHeaderOptions(table,index))this.sortDisabled=true;if(checkHeaderOptionsSortingLocked(table,index))this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(table,index);if(!this.sortDisabled){var $th=$(this).addClass(table.config.cssHeader);if(table.config.onRenderHeader)table.config.onRenderHeader.apply($th);}table.config.headerList[index]=this;});if(table.config.debug){benchmark("Built headers:",time);log($tableHeaders);}return $tableHeaders;};function computeTableHeaderCellIndexes(t){var matrix=[];var lookup={};var thead=t.getElementsByTagName('THEAD')[0];var trs=thead.getElementsByTagName('TR');for(var i=0;i<trs.length;i++){var cells=trs[i].cells;for(var j=0;j<cells.length;j++){var c=cells[j];var rowIndex=c.parentNode.rowIndex;var cellId=rowIndex+"-"+c.cellIndex;var rowSpan=c.rowSpan||1;var colSpan=c.colSpan||1
var firstAvailCol;if(typeof(matrix[rowIndex])=="undefined"){matrix[rowIndex]=[];}for(var k=0;k<matrix[rowIndex].length+1;k++){if(typeof(matrix[rowIndex][k])=="undefined"){firstAvailCol=k;break;}}lookup[cellId]=firstAvailCol;for(var k=rowIndex;k<rowIndex+rowSpan;k++){if(typeof(matrix[k])=="undefined"){matrix[k]=[];}var matrixrow=matrix[k];for(var l=firstAvailCol;l<firstAvailCol+colSpan;l++){matrixrow[l]="x";}}}}return lookup;}function checkCellColSpan(table,rows,row){var arr=[],r=table.tHead.rows,c=r[row].cells;for(var i=0;i<c.length;i++){var cell=c[i];if(cell.colSpan>1){arr=arr.concat(checkCellColSpan(table,headerArr,row++));}else{if(table.tHead.length==1||(cell.rowSpan>1||!r[row+1])){arr.push(cell);}}}return arr;};function checkHeaderMetadata(cell){if(($.metadata)&&($(cell).metadata().sorter===false)){return true;};return false;}function checkHeaderOptions(table,i){if((table.config.headers[i])&&(table.config.headers[i].sorter===false)){return true;};return false;}function checkHeaderOptionsSortingLocked(table,i){if((table.config.headers[i])&&(table.config.headers[i].lockedOrder))return table.config.headers[i].lockedOrder;return false;}function applyWidget(table){var c=table.config.widgets;var l=c.length;for(var i=0;i<l;i++){getWidgetById(c[i]).format(table);}}function getWidgetById(name){var l=widgets.length;for(var i=0;i<l;i++){if(widgets[i].id.toLowerCase()==name.toLowerCase()){return widgets[i];}}};function formatSortingOrder(v){if(typeof(v)!="Number"){return(v.toLowerCase()=="desc")?1:0;}else{return(v==1)?1:0;}}function isValueInArray(v,a){var l=a.length;for(var i=0;i<l;i++){if(a[i][0]==v){return true;}}return false;}function setHeadersCss(table,$headers,list,css){$headers.removeClass(css[0]).removeClass(css[1]);var h=[];$headers.each(function(offset){if(!this.sortDisabled){h[this.column]=$(this);}});var l=list.length;for(var i=0;i<l;i++){h[list[i][0]].addClass(css[list[i][1]]);}}function fixColumnWidth(table,$headers){var c=table.config;if(c.widthFixed){var colgroup=$('<colgroup>');$("tr:first td",table.tBodies[0]).each(function(){colgroup.append($('<col>').css('width',$(this).width()));});$(table).prepend(colgroup);};}function updateHeaderSortCount(table,sortList){var c=table.config,l=sortList.length;for(var i=0;i<l;i++){var s=sortList[i],o=c.headerList[s[0]];o.count=s[1];o.count++;}}function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date();}var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;for(var i=0;i<l;i++){var c=sortList[i][0];var order=sortList[i][1];var s=(table.config.parsers[c].type=="text")?((order==0)?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c)):((order==0)?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c));var e="e"+i;dynamicExp+="var "+e+" = "+s;dynamicExp+="if("+e+") { return "+e+"; } ";dynamicExp+="else { ";}var orgOrderCol=cache.normalized[0].length-1;dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";for(var i=0;i<l;i++){dynamicExp+="}; ";}dynamicExp+="return 0; ";dynamicExp+="}; ";if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date());}eval(dynamicExp);cache.normalized.sort(sortWrapper);if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime);}return cache;};function makeSortFunction(type,direction,index){var a="a["+index+"]",b="b["+index+"]";if(type=='text'&&direction=='asc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+a+" < "+b+") ? -1 : 1 )));";}else if(type=='text'&&direction=='desc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+b+" < "+a+") ? -1 : 1 )));";}else if(type=='numeric'&&direction=='asc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+a+" - "+b+"));";}else if(type=='numeric'&&direction=='desc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+b+" - "+a+"));";}};function makeSortText(i){return"((a["+i+"] < b["+i+"]) ? -1 : ((a["+i+"] > b["+i+"]) ? 1 : 0));";};function makeSortTextDesc(i){return"((b["+i+"] < a["+i+"]) ? -1 : ((b["+i+"] > a["+i+"]) ? 1 : 0));";};function makeSortNumeric(i){return"a["+i+"]-b["+i+"];";};function makeSortNumericDesc(i){return"b["+i+"]-a["+i+"];";};function sortText(a,b){if(table.config.sortLocaleCompare)return a.localeCompare(b);return((a<b)?-1:((a>b)?1:0));};function sortTextDesc(a,b){if(table.config.sortLocaleCompare)return b.localeCompare(a);return((b<a)?-1:((b>a)?1:0));};function sortNumeric(a,b){return a-b;};function sortNumericDesc(a,b){return b-a;};function getCachedSortType(parsers,i){return parsers[i].type;};this.construct=function(settings){return this.each(function(){if(!this.tHead||!this.tBodies)return;var $this,$document,$headers,cache,config,shiftDown=0,sortOrder;this.config={};config=$.extend(this.config,$.tablesorter.defaults,settings);$this=$(this);$.data(this,"tablesorter",config);$headers=buildHeaders(this);this.config.parsers=buildParserCache(this,$headers);cache=buildCache(this);var sortCSS=[config.cssDesc,config.cssAsc];fixColumnWidth(this);$headers.click(function(e){var totalRows=($this[0].tBodies[0]&&$this[0].tBodies[0].rows.length)||0;if(!this.sortDisabled&&totalRows>0){$this.trigger("sortStart");var $cell=$(this);var i=this.column;this.order=this.count++%2;if(this.lockedOrder)this.order=this.lockedOrder;if(!e[config.sortMultiSortKey]){config.sortList=[];if(config.sortForce!=null){var a=config.sortForce;for(var j=0;j<a.length;j++){if(a[j][0]!=i){config.sortList.push(a[j]);}}}config.sortList.push([i,this.order]);}else{if(isValueInArray(i,config.sortList)){for(var j=0;j<config.sortList.length;j++){var s=config.sortList[j],o=config.headerList[s[0]];if(s[0]==i){o.count=s[1];o.count++;s[1]=o.count%2;}}}else{config.sortList.push([i,this.order]);}};setTimeout(function(){setHeadersCss($this[0],$headers,config.sortList,sortCSS);appendToTable($this[0],multisort($this[0],config.sortList,cache));},1);return false;}}).mousedown(function(){if(config.cancelSelection){this.onselectstart=function(){return false};return false;}});$this.bind("update",function(){var me=this;setTimeout(function(){me.config.parsers=buildParserCache(me,$headers);cache=buildCache(me);},1);}).bind("updateCell",function(e,cell){var config=this.config;var pos=[(cell.parentNode.rowIndex-1),cell.cellIndex];cache.normalized[pos[0]][pos[1]]=config.parsers[pos[1]].format(getElementText(config,cell),cell);}).bind("sorton",function(e,list){$(this).trigger("sortStart");config.sortList=list;var sortList=config.sortList;updateHeaderSortCount(this,sortList);setHeadersCss(this,$headers,sortList,sortCSS);appendToTable(this,multisort(this,sortList,cache));}).bind("appendCache",function(){appendToTable(this,cache);}).bind("applyWidgetId",function(e,id){getWidgetById(id).format(this);}).bind("applyWidgets",function(){applyWidget(this);});if($.metadata&&($(this).metadata()&&$(this).metadata().sortlist)){config.sortList=$(this).metadata().sortlist;}if(config.sortList.length>0){$this.trigger("sorton",[config.sortList]);}applyWidget(this);});};this.addParser=function(parser){var l=parsers.length,a=true;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==parser.id.toLowerCase()){a=false;}}if(a){parsers.push(parser);};};this.addWidget=function(widget){widgets.push(widget);};this.formatFloat=function(s){var i=parseFloat(s);return(isNaN(i))?0:i;};this.formatInt=function(s){var i=parseInt(s);return(isNaN(i))?0:i;};this.isDigit=function(s,config){return/^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g,'')));};this.clearTableBody=function(table){if($.browser.msie){function empty(){while(this.firstChild)this.removeChild(this.firstChild);}empty.apply(table.tBodies[0]);}else{table.tBodies[0].innerHTML="";}};}});$.fn.extend({tablesorter:$.tablesorter.construct});var ts=$.tablesorter;ts.addParser({id:"text",is:function(s){return true;},format:function(s){return $.trim(s.toLocaleLowerCase());},type:"text"});ts.addParser({id:"digit",is:function(s,table){var c=table.config;return $.tablesorter.isDigit(s,c);},format:function(s){return $.tablesorter.formatFloat(s);},type:"numeric"});ts.addParser({id:"currency",is:function(s){return/^[£$€?.]/.test(s);},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g),""));},type:"numeric"});ts.addParser({id:"ipAddress",is:function(s){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);},format:function(s){var a=s.split("."),r="",l=a.length;for(var i=0;i<l;i++){var item=a[i];if(item.length==2){r+="0"+item;}else{r+=item;}}return $.tablesorter.formatFloat(r);},type:"numeric"});ts.addParser({id:"url",is:function(s){return/^(https?|ftp|file):\/\/$/.test(s);},format:function(s){return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),''));},type:"text"});ts.addParser({id:"isoDate",is:function(s){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);},format:function(s){return $.tablesorter.formatFloat((s!="")?new Date(s.replace(new RegExp(/-/g),"/")).getTime():"0");},type:"numeric"});ts.addParser({id:"percent",is:function(s){return/\%$/.test($.trim(s));},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g),""));},type:"numeric"});ts.addParser({id:"usLongDate",is:function(s){return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));},format:function(s){return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"shortDate",is:function(s){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);},format:function(s,table){var c=table.config;s=s.replace(/\-/g,"/");if(c.dateFormat=="us"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");}else if(c.dateFormat=="uk"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");}else if(c.dateFormat=="dd/mm/yy"||c.dateFormat=="dd-mm-yy"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");}return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"time",is:function(s){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);},format:function(s){return $.tablesorter.formatFloat(new Date("2000/01/01 "+s).getTime());},type:"numeric"});ts.addParser({id:"metadata",is:function(s){return false;},format:function(s,table,cell){var c=table.config,p=(!c.parserMetadataName)?'sortValue':c.parserMetadataName;return $(cell).metadata()[p];},type:"numeric"});ts.addWidget({id:"zebra",format:function(table){if(table.config.debug){var time=new Date();}var $tr,row=-1,odd;$("tr:visible",table.tBodies[0]).each(function(i){$tr=$(this);if(!$tr.hasClass(table.config.cssChildRow))row++;odd=(row%2==0);$tr.removeClass(table.config.widgetZebra.css[odd?0:1]).addClass(table.config.widgetZebra.css[odd?1:0])});if(table.config.debug){$.tablesorter.benchmark("Applying Zebra widget",time);}}});})(jQuery);

/**
 * Tabs plugin for jQuery created by Òscar Casajuana < elboletaire at underave dot net >
 *
 * @copyright Copyright 2013-2015 Òscar Casajuana
 * @license   MIT
 * @author    Òscar Casajuana Alonso <elboletaire at underave dot net>
*/
!function(n,t,e,r){"use strict";var i=function(i,o){function s(n){return Boolean(m.filter(n).length)}function l(){return 0===q}function a(n){return n%1===0}function c(){return q===m.length-1}function u(t){return n(this).attr("href").match(new RegExp(t+"$"))}function h(t){return t instanceof n?{tab:t,link:o.links.eq(t.index())}:a(t)?{tab:m.eq(t),link:o.links.eq(t)}:m.filter(t).length?{tab:m.filter(t),link:o.links.filter(function(){return u.apply(this,[t])})}:{tab:m.filter("#"+t),link:o.links.filter(function(){return u.apply(this,["#"+t])})}}function f(){return o.links.parent().filter("."+o.currentClass).index()}function p(n){return++q,n===r&&(n=o.loop),q<m.length?g(q,!0):n&&q>=m.length?g(0,!0):!1}function d(n){return--q,n===r&&(n=o.loop),q>=0?g(q,!0):n&&0>q?g(m.length-1,!0):!1}function k(n){o.history&&y&&x!==r&&"pushState"in x&&(y=!1,e.setTimeout(function(){x.replaceState(null,"",n)},100)),q=f(),o.onSwitch&&"function"==typeof o.onSwitch&&o.onSwitch(n,b())}function g(n,t){return n.toString().match(/^#/)||(n="#"+h(n).tab.attr("id")),s(n)?(o.links.parent().removeClass(o.currentClass),o.links.filter(function(){return u.apply(this,[n])}).parent().addClass(o.currentClass),m.hide(),o.history&&t&&(x!==r&&"pushState"in x?x.pushState(null,"",n):e.location.hash=n),m.filter(n).show(o.speed,function(){o.speed&&k(n)}),o.speed||k(n),!0):!1}function w(n){return g(n,!0)}function S(n){g(I.hash)}function v(){if(s(I.hash)?g(I.hash):o.links.parent().filter("."+o.currentClass).length?g(o.links.parent().filter("."+o.currentClass).index()):o.errorSelector&&m.find(o.errorSelector).length?m.each(function(){return n(this).find(o.errorSelector).length?(g("#"+n(this).attr("id")),!1):void 0}):g("#"+m.filter(":first-child").attr("id")),o.errorSelector&&m.find(o.errorSelector).each(function(){var t=h(n(this).parent());t.link.parent().addClass(o.tabErrorClass)}),"onhashchange"in e)n(e).bind("hashchange",S);else{var t=I.href;e.setInterval(function(){t!==I.href&&(S.call(e.event),t=I.href)},100)}n(o.links).on("click",function(t){g(n(this).attr("href").replace(/^[^#]+/,""),o.history),t.preventDefault()}),o.onInit&&"function"==typeof o.onInit&&o.onInit(b())}function b(){return{"switch":w,switchTab:w,getCurrent:f,getTab:h,next:p,prev:d,isFirst:l,isLast:c}}var C={links:i.prev().find("a").length?i.prev().find("a"):".tabs a",errorSelector:".error-message",speed:!1,onSwitch:!1,onInit:!1,currentClass:"active",tabErrorClass:"has-errors",history:!0,loop:!1},y=!0,m=i.children(),x=e.history,I=t.location,q=null;return o=n.extend(C,o),o.links instanceof n||(o.links=n(o.links)),v(),b()};n.fn.tabbedContent=function(t){return this.each(function(){var e=new i(n(this),t);n(this).data("api",e)})}}(window.jQuery||window.Zepto||window.$,document,window);

/* scroll-up-bar v0.3.0 (https://github.com/eduardomb/scroll-up-bar) */
!function(a){"use strict";var b;a.scrollupbar=function(c,d){function e(){return h.scrollTop()<=c.offset().top}function f(){return h.scrollTop()<c.offset().top+c.outerHeight()}d=a.extend({enterViewport:a.noop,fullyEnterViewport:a.noop,exitViewport:a.noop,partiallyExitViewport:a.noop},d);var g,h=a(window),i=a(document),j="fixed"==c.css("position")?0:c.offset().top,k=h.scrollTop(),l=c.position().top,m=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);return a.scrollupbar.isInViewport=f(),a.scrollupbar.isFullyInViewport=e(),m?(h.on("touchstart.scrollupbar",function(){k=h.scrollTop()}),h.on("touchend.scrollupbar",function(){var b=h.scrollTop();k>b||b-c.outerHeight()<j?j>=b?(c.css({position:"absolute",top:l}),c.show(function(){a.scrollupbar.isInViewport=!0,a.scrollupbar.isFullyInViewport=!0,d.enterViewport(),d.fullyEnterViewport()})):(c.css({position:"fixed",top:0}),a.scrollupbar.isInViewport=!0,d.enterViewport(),c.slideDown(function(){a.scrollupbar.isFullyInViewport=!0,d.fullyEnterViewport()})):b>k&&(a.scrollupbar.isFullyInViewport=!1,d.partiallyExitViewport(),c.slideUp(function(){a.scrollupbar.isInViewport=!1,d.exitViewport()})),k=b})):h.on("scroll.scrollupbar",function(){var b=h.scrollTop(),m=c.outerHeight();0>b||b>i.height()-h.height()||(g&&clearTimeout(g),k>b?(!a.scrollupbar.isInViewport&&k-m>=j&&(c.css("top",k-m),a.scrollupbar.isInViewport=!0,d.enterViewport()),e()&&(c.css(b>=j?{position:"fixed",top:0}:{position:"absolute",top:l}),a.scrollupbar.isFullyInViewport||(a.scrollupbar.isFullyInViewport=!0,d.fullyEnterViewport())),g=setTimeout(function(){e()||(c.css({position:"fixed",top:c.offset().top-b}),c.animate({top:0},100,function(){a.scrollupbar.isFullyInViewport=!0,d.fullyEnterViewport()}))},400)):b>k&&(a.scrollupbar.isFullyInViewport&&(c.css({position:"absolute",top:k>j?k:l}),e()||(a.scrollupbar.isFullyInViewport=!1,d.partiallyExitViewport())),a.scrollupbar.isInViewport&&!f()&&(a.scrollupbar.isInViewport=!1,d.exitViewport()),g=setTimeout(function(){f()&&b-m>=j&&c.animate({top:b-m},100,function(){a.scrollupbar.isInViewport=!1,d.exitViewport()})},400)),k=b)}),b=function(){h.off(".scrollupbar"),c.css({position:"absolute",top:l})},c},a.scrollupbar.destroy=function(){return b?b():void 0},a.fn.scrollupbar=function(b){return a.scrollupbar(this,b)}}(jQuery);

// Sticky Plugin v1.0.3 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                newWidth = $(s.getWidthFrom).width() || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0);
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '');
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(wrapper);

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          stickyElement.addEventListener('DOMNodeInserted', function() {
            methods.setWrapperHeight(stickyElement);
          }, false);
          stickyElement.addEventListener('DOMNodeRemoved', function() {
            methods.setWrapperHeight(stickyElement);
          }, false);
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));

/*! jQuery UI - v1.11.4 - 2015-12-13
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=e.widget.extend.apply(null,[a].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))})),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var a=!1;e(document).mouseup(function(){a=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),a=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n
})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable});

/**
 * LiquidMetal, version: 1.2.1 (2012-04-21)
 *
 * A mimetic poly-alloy of Quicksilver's scoring algorithm, essentially
 * LiquidMetal.
 *
 * For usage and examples, visit:
 * http://github.com/rmm5t/liquidmetal
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2009-2012, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
var LiquidMetal = (function() {
  var SCORE_NO_MATCH = 0.0;
  var SCORE_MATCH = 1.0;
  var SCORE_TRAILING = 0.8;
  var SCORE_TRAILING_BUT_STARTED = 0.9;
  var SCORE_BUFFER = 0.85;
  var WORD_SEPARATORS = " \t_-";

  return {
    lastScore: null,
    lastScoreArray: null,

    score: function(string, abbrev) {
      // short circuits
      if (abbrev.length === 0) return SCORE_TRAILING;
      if (abbrev.length > string.length) return SCORE_NO_MATCH;

      // match & score all
      var allScores = [];
      var search = string.toLowerCase();
      abbrev = abbrev.toLowerCase();
      this._scoreAll(string, search, abbrev, -1, 0, [], allScores);

      // complete miss
      if (allScores.length == 0) return 0;

      // sum per-character scores into overall scores,
      // selecting the maximum score
      var maxScore = 0.0, maxArray = [];
      for (var i = 0; i < allScores.length; i++) {
        var scores = allScores[i];
        var scoreSum = 0.0;
        for (var j = 0; j < string.length; j++) { scoreSum += scores[j]; }
        if (scoreSum > maxScore) {
          maxScore = scoreSum;
          maxArray = scores;
        }
      }

      // normalize max score by string length
      // s. t. the perfect match score = 1
      maxScore /= string.length;

      // record maximum score & score array, return
      this.lastScore = maxScore;
      this.lastScoreArray = maxArray;
      return maxScore;
    },

    _scoreAll: function(string, search, abbrev, searchIndex, abbrIndex, scores, allScores) {
      // save completed match scores at end of search
      if (abbrIndex == abbrev.length) {
        // add trailing score for the remainder of the match
        var started = (search.charAt(0) == abbrev.charAt(0));
        var trailScore = started ? SCORE_TRAILING_BUT_STARTED : SCORE_TRAILING;
        fillArray(scores, trailScore, scores.length, string.length);
        // save score clone (since reference is persisted in scores)
        allScores.push(scores.slice(0));
        return;
      }

      // consume current char to match
      var c = abbrev.charAt(abbrIndex);
      abbrIndex++;

      // cancel match if a character is missing
      var index = search.indexOf(c, searchIndex);
      if (index == -1) return;

      // match all instances of the abbreviaton char
      var scoreIndex = searchIndex; // score section to update
      while ((index = search.indexOf(c, searchIndex+1)) != -1) {
        // score this match according to context
        if (isNewWord(string, index)) {
          scores[index-1] = 1;
          fillArray(scores, SCORE_BUFFER, scoreIndex+1, index-1);
        }
        else if (isUpperCase(string, index)) {
          fillArray(scores, SCORE_BUFFER, scoreIndex+1, index);
        }
        else {
          fillArray(scores, SCORE_NO_MATCH, scoreIndex+1, index);
        }
        scores[index] = SCORE_MATCH;

        // consume matched string and continue search
        searchIndex = index;
        this._scoreAll(string, search, abbrev, searchIndex, abbrIndex, scores, allScores);
      }
    }
  };

  function isUpperCase(string, index) {
    var c = string.charAt(index);
    return ("A" <= c && c <= "Z");
  }

   function isNewWord(string, index) {
    var c = string.charAt(index-1);
    return (WORD_SEPARATORS.indexOf(c) != -1);
  }

  function fillArray(array, value, from, to) {
    for (var i = from; i < to; i++) { array[i] = value; }
    return array;
  }
})();


/**
 * flexselect: a jQuery plugin, version: 0.7.0 (2015-03-31)
 * @requires jQuery v1.3 or later
 *
 * FlexSelect is a jQuery plugin that makes it easy to convert a select box into
 * a Quicksilver-style, autocompleting, flex matching selection tool.
 *
 * For usage and examples, visit:
 * http://rmm5t.github.io/jquery-flexselect/
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2009-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
(function($) {
  $.flexselect = function(select, options) { this.init(select, options); };

  $.extend($.flexselect.prototype, {
    settings: {
      allowMismatch: false,
      allowMismatchBlank: true, // If "true" a user can backspace such that the value is nothing (even if no blank value was provided in the original criteria)
      sortBy: 'score', // 'score' || 'name'
      preSelection: true,
      hideDropdownOnEmptyInput: false,
      selectedClass: "flexselect_selected",
      dropdownClass: "flexselect_dropdown",
      showDisabledOptions: false,
      inputIdTransform:    function(id)   { return id + "_flexselect"; },
      inputNameTransform:  function(name) { return; },
      dropdownIdTransform: function(id)   { return id + "_flexselect_dropdown"; }
    },
    select: null,
    input: null,
    dropdown: null,
    dropdownList: null,
    cache: [],
    results: [],
    lastAbbreviation: null,
    abbreviationBeforeFocus: null,
    selectedIndex: 0,
    picked: false,
    allowMouseMove: true,
    dropdownMouseover: false, // Workaround for poor IE behaviors
    indexOptgroupLabels: false,

    init: function(select, options) {
      this.settings = $.extend({}, this.settings, options);
      this.select = $(select);
      this.reloadCache();
      this.renderControls();
      this.wire();
    },

    reloadCache: function() {
      var name, group, text, disabled;
      var indexGroup = this.settings.indexOptgroupLabels;
      this.cache = this.select.find("option").map(function() {
        name = $(this).text();
        group = $(this).parent("optgroup").attr("label");
        text = indexGroup ? [name, group].join(" ") : name;
        disabled = $(this).parent("optgroup").attr("disabled") || $(this).attr('disabled');
        return { text: $.trim(text), name: $.trim(name), value: $(this).val(), disabled: disabled, score: 0.0 };
      });
    },

    renderControls: function() {
      var selected = this.settings.preSelection ? this.select.find("option:selected") : null;

      this.input = $("<input type='text' autocomplete='off' />").attr({
        id: this.settings.inputIdTransform(this.select.attr("id")),
        name: this.settings.inputNameTransform(this.select.attr("name")),
        accesskey: this.select.attr("accesskey"),
        tabindex: this.select.attr("tabindex"),
        style: this.select.attr("style"),
        placeholder: this.select.attr("data-placeholder")
      }).addClass(this.select.attr("class")).val($.trim(selected ? selected.text():  '')).css({
        visibility: 'visible'
      });

      this.dropdown = $("<div></div>").attr({
        id: this.settings.dropdownIdTransform(this.select.attr("id"))
      }).addClass(this.settings.dropdownClass);
      this.dropdownList = $("<ul></ul>");
      this.dropdown.append(this.dropdownList);

      this.select.after(this.input).hide();
      $("body").append(this.dropdown);
    },

    wire: function() {
      var self = this;

      this.input.click(function() {
        self.lastAbbreviation = null;
        self.focus();
      });

      this.input.mouseup(function(event) {
        // This is so Safari selection actually occurs.
        event.preventDefault();
      });

      this.input.focus(function() {
        self.abbreviationBeforeFocus = self.input.val();
        self.input.select();
        if (!self.picked) self.filterResults();
      });

      this.input.blur(function() {
        if (!self.dropdownMouseover) {
          self.hide();
          if (self.settings.allowMismatchBlank && $.trim($(this).val()) == '')
            self.setValue('');
          if (!self.settings.allowMismatch && !self.picked)
            self.reset();
        }
        if (self.settings.hideDropdownOnEmptyInput)
          self.dropdownList.show();
      });

      this.dropdownList.mouseover(function(event) {
        if (!self.allowMouseMove) {
          self.allowMouseMove = true;
          return;
        }

        if (event.target.tagName == "LI") {
          var rows = self.dropdown.find("li");
          self.markSelected(rows.index($(event.target)));
        }
      });
      this.dropdownList.mouseleave(function() {
        self.markSelected(-1);
      });
      this.dropdownList.mouseup(function(event) {
        self.pickSelected();
        self.focusAndHide();
      });
      this.dropdown.mouseover(function(event) {
        self.dropdownMouseover = true;
      });
      this.dropdown.mouseleave(function(event) {
        self.dropdownMouseover = false;
      });
      this.dropdown.mousedown(function(event) {
        event.preventDefault();
      });

      this.input.keyup(function(event) {
        switch (event.keyCode) {
          case 13: // return
            event.preventDefault();
            self.pickSelected();
            self.focusAndHide();
            break;
          case 27: // esc
            event.preventDefault();
            self.reset();
            self.focusAndHide();
            break;
          default:
            self.filterResults();
            break;
        }
        if (self.settings.hideDropdownOnEmptyInput){
          if(self.input.val() == "")
            self.dropdownList.hide();
          else
            self.dropdownList.show();
        }
      });

      this.input.keydown(function(event) {
        switch (event.keyCode) {
          case 9:  // tab
            self.pickSelected();
            self.hide();
            break;
          case 33: // pgup
            event.preventDefault();
            self.markFirst();
            break;
          case 34: // pgedown
            event.preventDefault();
            self.markLast();
            break;
          case 38: // up
            event.preventDefault();
            self.moveSelected(-1);
            break;
          case 40: // down
            event.preventDefault();
            self.moveSelected(1);
            break;
          case 13: // return
          case 27: // esc
            event.preventDefault();
            event.stopPropagation();
            break;
        }
      });

      var input = this.input;
      this.select.change(function () {
        input.val($.trim($(this).find('option:selected').text()));
      });
    },

    filterResults: function() {
      var showDisabled = this.settings.showDisabledOptions;
      var abbreviation = this.input.val();
      if (abbreviation == this.lastAbbreviation) return;

      var results = [];
      $.each(this.cache, function() {
        if (this.disabled && !showDisabled) return;
        this.score = LiquidMetal.score(this.text, abbreviation);
        if (this.score > 0.0) results.push(this);
      });
      this.results = results;

      if (this.settings.sortBy == 'score')
        this.sortResultsByScore();
      else if (this.settings.sortBy == 'name')
        this.sortResultsByName();

      this.renderDropdown();
      this.markFirst();
      this.lastAbbreviation = abbreviation;
      this.picked = false;
      this.allowMouseMove = false;
    },

    sortResultsByScore: function() {
      this.results.sort(function(a, b) { return b.score - a.score; });
    },

    sortResultsByName: function() {
      this.results.sort(function(a, b) { return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0); });
    },

    renderDropdown: function() {
      var showDisabled = this.settings.showDisabledOptions;
      var dropdownBorderWidth = this.dropdown.outerWidth() - this.dropdown.innerWidth();
      var inputOffset = this.input.offset();
      this.dropdown.css({
        width: (this.input.outerWidth() - dropdownBorderWidth) + "px",
        top: (inputOffset.top + this.input.outerHeight()) + "px",
        left: inputOffset.left + "px",
        maxHeight: ''
      });

      var html = '';
      var disabledAttribute = '';
      $.each(this.results, function() {
        if (this.disabled && !showDisabled) return;
        disabledAttribute = this.disabled ? ' class="disabled"' : '';
        html += '<li' + disabledAttribute + '>' + this.name + '</li>';
      });
      this.dropdownList.html(html);
      this.adjustMaxHeight();
      this.dropdown.show();
    },

    adjustMaxHeight: function() {
      var maxTop = $(window).height() + $(window).scrollTop() - this.dropdown.outerHeight();
      var top = parseInt(this.dropdown.css('top'), 10);
      this.dropdown.css('max-height', top > maxTop ? (Math.max(0, maxTop - top + this.dropdown.innerHeight()) + 'px') : '');
    },

    markSelected: function(n) {
      if (n < 0 || n >= this.results.length) return;

      var rows = this.dropdown.find("li");
      rows.removeClass(this.settings.selectedClass);

      var row = $(rows[n]);
      if (row.hasClass('disabled')) {
        this.selectedIndex = null;
        return;
      }

      this.selectedIndex = n;
      row.addClass(this.settings.selectedClass);
      var top = row.position().top;
      var delta = top + row.outerHeight() - this.dropdown.height();
      if (delta > 0) {
        this.allowMouseMove = false;
        this.dropdown.scrollTop(this.dropdown.scrollTop() + delta);
      } else if (top < 0) {
        this.allowMouseMove = false;
        this.dropdown.scrollTop(Math.max(0, this.dropdown.scrollTop() + top));
      }
    },

    pickSelected: function() {
      var selected = this.results[this.selectedIndex];
      if (selected && !selected.disabled) {
        this.input.val(selected.name);
        this.setValue(selected.value);
        this.picked = true;
      } else if (this.settings.allowMismatch) {
        this.setValue.val("");
      } else {
        this.reset();
      }
    },

    setValue: function(val) {
      if (this.select.val() === val) return;
      this.select.val(val).change();
    },

    hide: function() {
      this.dropdown.hide();
      this.lastAbbreviation = null;
    },

    moveSelected: function(n) { this.markSelected(this.selectedIndex+n); },
    markFirst:    function()  { this.markSelected(0); },
    markLast:     function()  { this.markSelected(this.results.length - 1); },
    reset:        function()  { this.input.val(this.abbreviationBeforeFocus); },
    focus:        function()  { this.input.focus(); },
    focusAndHide: function()  { this.focus(); this.hide(); }
  });

  $.fn.flexselect = function(options) {
    this.each(function() {
      if ($(this).data("flexselect")) {
        $(this).data("flexselect").reloadCache();
      } else if (this.tagName == "SELECT") {
        $(this).data("flexselect", new $.flexselect(this, options));
      }
    });
    return this;
  };
})(jQuery);


// Calculator Stuff

// numeral.js
// version : 1.4.5
// author : Adam Draper
// license : MIT
// http://adamwdraper.github.com/Numeral-js/
(function(){function o(e){this._n=e}function u(e,t,n){var r=Math.pow(10,t),i;i=(Math.round(e*r)/r).toFixed(t);if(n){var s=new RegExp("0{1,"+n+"}$");i=i.replace(s,"")}return i}function a(e,t){var n;t.indexOf("$")>-1?n=l(e,t):t.indexOf("%")>-1?n=c(e,t):t.indexOf(":")>-1?n=h(e,t):n=d(e,t);return n}function f(e,t){if(t.indexOf(":")>-1)e._n=p(t);else if(t===i)e._n=0;else{var s=t;n[r].delimiters.decimal!=="."&&(t=t.replace(/\./g,"").replace(n[r].delimiters.decimal,"."));var o=new RegExp(n[r].abbreviations.thousand+"(?:\\)|(\\"+n[r].currency.symbol+")?(?:\\))?)?$"),u=new RegExp(n[r].abbreviations.million+"(?:\\)|(\\"+n[r].currency.symbol+")?(?:\\))?)?$"),a=new RegExp(n[r].abbreviations.billion+"(?:\\)|(\\"+n[r].currency.symbol+")?(?:\\))?)?$"),f=new RegExp(n[r].abbreviations.trillion+"(?:\\)|(\\"+n[r].currency.symbol+")?(?:\\))?)?$"),l=["KB","MB","GB","TB","PB","EB","ZB","YB"],c=!1;for(var h=0;h<=l.length;h++){c=t.indexOf(l[h])>-1?Math.pow(1024,h+1):!1;if(c)break}e._n=(c?c:1)*(s.match(o)?Math.pow(10,3):1)*(s.match(u)?Math.pow(10,6):1)*(s.match(a)?Math.pow(10,9):1)*(s.match(f)?Math.pow(10,12):1)*(t.indexOf("%")>-1?.01:1)*Number((t.indexOf("(")>-1?"-":"")+t.replace(/[^0-9\.'-]+/g,""));e._n=c?Math.ceil(e._n):e._n}return e._n}function l(e,t){var i=t.indexOf("$")<=1?!0:!1,s="";if(t.indexOf(" $")>-1){s=" ";t=t.replace(" $","")}else if(t.indexOf("$ ")>-1){s=" ";t=t.replace("$ ","")}else t=t.replace("$","");var o=a(e,t);if(i)if(o.indexOf("(")>-1||o.indexOf("-")>-1){o=o.split("");o.splice(1,0,n[r].currency.symbol+s);o=o.join("")}else o=n[r].currency.symbol+s+o;else if(o.indexOf(")")>-1){o=o.split("");o.splice(-1,0,s+n[r].currency.symbol);o=o.join("")}else o=o+s+n[r].currency.symbol;return o}function c(e,t){var n="";if(t.indexOf(" %")>-1){n=" ";t=t.replace(" %","")}else t=t.replace("%","");e._n=e._n*100;var r=a(e,t);if(r.indexOf(")")>-1){r=r.split("");r.splice(-1,0,n+"%");r=r.join("")}else r=r+n+"%";return r}function h(e,t){var n=Math.floor(e._n/60/60),r=Math.floor((e._n-n*60*60)/60),i=Math.round(e._n-n*60*60-r*60);return n+":"+(r<10?"0"+r:r)+":"+(i<10?"0"+i:i)}function p(e){var t=e.split(":"),n=0;if(t.length===3){n+=Number(t[0])*60*60;n+=Number(t[1])*60;n+=Number(t[2])}else if(t.lenght===2){n+=Number(t[0])*60;n+=Number(t[1])}return Number(n)}function d(e,t){var s=!1,o=!1,a="",f="",l="",c=Math.abs(e._n);if(e._n===0&&i!==null)return i;if(t.indexOf("(")>-1){s=!0;t=t.slice(1,-1)}if(t.indexOf("a")>-1){if(t.indexOf(" a")>-1){a=" ";t=t.replace(" a","")}else t=t.replace("a","");if(c>=Math.pow(10,12)){a+=n[r].abbreviations.tillion;e._n=e._n/Math.pow(10,12)}else if(c<Math.pow(10,12)&&c>=Math.pow(10,9)){a+=n[r].abbreviations.billion;e._n=e._n/Math.pow(10,9)}else if(c<Math.pow(10,9)&&c>=Math.pow(10,6)){a+=n[r].abbreviations.million;e._n=e._n/Math.pow(10,6)}else if(c<Math.pow(10,6)&&c>=Math.pow(10,3)){a+=n[r].abbreviations.thousand;e._n=e._n/Math.pow(10,3)}}if(t.indexOf("b")>-1){if(t.indexOf(" b")>-1){f=" ";t=t.replace(" b","")}else t=t.replace("b","");var h=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],p,d;for(var v=0;v<=h.length;v++){p=Math.pow(1024,v);d=Math.pow(1024,v+1);if(e._n>=p&&e._n<d){f+=h[v];p>0&&(e._n=e._n/p);break}}}if(t.indexOf("o")>-1){if(t.indexOf(" o")>-1){l=" ";t=t.replace(" o","")}else t=t.replace("o","");l+=n[r].ordinal(e._n)}if(t.indexOf("[.]")>-1){o=!0;t=t.replace("[.]",".")}var m=e._n.toString().split(".")[0],g=t.split(".")[1],y=t.indexOf(","),b="",w=!1;if(g){if(g.indexOf("[")>-1){g=g.replace("]","");g=g.split("[");b=u(e._n,g[0].length+g[1].length,g[1].length)}else b=u(e._n,g.length);m=b.split(".")[0];b.split(".")[1].length?b=n[r].delimiters.decimal+b.split(".")[1]:b="";o&&Number(b)===0&&(b="")}else m=u(e._n,null);if(m.indexOf("-")>-1){m=m.slice(1);w=!0}y>-1&&(m=m.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+n[r].delimiters.thousands));t.indexOf(".")===0&&(m="");return(s&&w?"(":"")+(!s&&w?"-":"")+m+b+(l?l:"")+(a?a:"")+(f?f:"")+(s&&w?")":"")}function v(e,t){n[e]=t}var e,t="1.4.5",n={},r="en",i=null,s=typeof module!="undefined"&&module.exports;e=function(t){e.isNumeral(t)?t=t.value():Number(t)||(t=0);return new o(Number(t))};e.version=t;e.isNumeral=function(e){return e instanceof o};e.language=function(t,i){if(!t)return r;t&&!i&&(r=t);(i||!n[t])&&v(t,i);return e};e.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th"},currency:{symbol:"$"}});e.zeroFormat=function(e){typeof e=="string"?i=e:i=null};e.fn=o.prototype={clone:function(){return e(this)},format:function(t){return a(this,t?t:e.defaultFormat)},unformat:function(t){return f(this,t?t:e.defaultFormat)},value:function(){return this._n},valueOf:function(){return this._n},set:function(e){this._n=Number(e);return this},add:function(e){this._n=this._n+Number(e);return this},subtract:function(e){this._n=this._n-Number(e);return this},multiply:function(e){this._n=this._n*Number(e);return this},divide:function(e){this._n=this._n/Number(e);return this},difference:function(e){var t=this._n-Number(e);t<0&&(t=-t);return t}};s&&(module.exports=e);typeof ender=="undefined"&&(this.numeral=e);typeof define=="function"&&define.amd&&define([],function(){return e})}).call(this);

"undefined"==typeof Zepto&&(Zepto=void 0);"undefined"==typeof jQuery&&(jQuery=Zepto);"undefined"==typeof numeral&&(numeral=void 0);"undefined"==typeof moment&&(moment=void 0);"undefined"==typeof jStat&&(jStat=void 0);
(function(r,z,h,g){function F(a){function b(){this.yy={}}var c={trace:function(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,variableSequence:6,TRUE:7,FALSE:8,NULL:9,TIME_AMPM:10,TIME_24:11,number:12,STRING:13,"&":14,"=":15,"+":16,"(":17,")":18,"[":19,expseq:20,"]":21,"<":22,">":23,NOT:24,"-":25,"*":26,"/":27,"^":28,E:29,FUNCTION:30,cell:31,FIXEDCELL:32,":":33,CELL:34,SHEET:35,"!":36,";":37,",":38,VARIABLE:39,DECIMAL:40,NUMBER:41,"%":42,"#":43,$accept:0,$end:1},terminals_:{5:"EOF",7:"TRUE",
8:"FALSE",9:"NULL",10:"TIME_AMPM",11:"TIME_24",13:"STRING",14:"&",15:"=",16:"+",17:"(",18:")",19:"[",21:"]",22:"<",23:">",24:"NOT",25:"-",26:"*",27:"/",28:"^",29:"E",30:"FUNCTION",32:"FIXEDCELL",33:":",34:"CELL",35:"SHEET",36:"!",37:";",38:",",39:"VARIABLE",40:"DECIMAL",41:"NUMBER",42:"%",43:"#"},productions_:[0,[3,2],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,3],[4,3],[4,3],[4,3],[4,3],[4,4],[4,4],[4,4],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,1],[4,3],[4,4],[4,1],[4,1],[4,
2],[31,1],[31,3],[31,1],[31,3],[31,3],[31,5],[20,1],[20,3],[20,3],[6,1],[6,3],[12,1],[12,3],[12,2],[2,3],[2,4]],performAction:function(b,c,d,n,l,p,g){b=p.length-1;switch(l){case 1:return p[b-1];case 2:this.$=a.getVariable(p[b]);break;case 3:this.$=!0;break;case 4:this.$=!1;break;case 5:this.$=null;break;case 6:this.$=a.time(p[b]);break;case 7:this.$=a.time(p[b]);break;case 8:this.$=1*p[b];isNaN(this.$)&&(this.$=0);break;case 9:this.$=p[b].substring(1,p[b].length-1);break;case 10:this.$=""+p[b-2]+
p[b];break;case 11:this.$=a.comparator.equal.call(a,p[b-2],p[b]);break;case 12:this.$=e.math.SUM.call(a,p[b-2],p[b]);break;case 13:this.$=1*p[b-1];break;case 14:this.$=p[b-1];break;case 15:this.$=a.comparator.lessEqual.call(a,p[b-3],p[b]);break;case 16:this.$=a.comparator.greaterEqual.call(a,p[b-3],p[b]);break;case 17:this.$=a.comparator.notEqual.call(a,p[b-3],p[b]);break;case 18:this.$=p[b-2]!=p[b];break;case 19:this.$=a.comparator.greater.call(a,p[b-2],p[b]);break;case 20:this.$=a.comparator.less.call(a,
p[b-2],p[b]);break;case 21:this.$=e.math.SUBTRACT.call(a,p[b-2],p[b]);break;case 22:this.$=e.math.MULTIPLY.call(a,p[b-2],p[b]);break;case 23:this.$=e.math.DIVIDE.call(a,p[b-2],p[b]);break;case 24:this.$=e.math.POWER.call(a,p[b-2],p[b]);break;case 25:this.$=-1*p[b];isNaN(this.$)&&(this.$=0);break;case 26:this.$=1*p[b];isNaN(this.$)&&(this.$=0);break;case 27:this.$=Math.E;break;case 28:this.$=a.callFunction(p[b-2]);break;case 29:this.$=a.callFunction(p[b-3],p[b-1]);break;case 33:this.$=a.getCellValue(p[b]);
break;case 34:this.$=a.getCellRangeValue(p[b-2],p[b]);break;case 35:this.$=a.getCellValue(p[b]);break;case 36:this.$=a.getCellRangeValue(p[b-2],p[b]);break;case 37:this.$=a.getRemoteCellValue(p[b-2],p[b]);break;case 38:this.$=a.getRemoteCellRangeValue(p[b-4],p[b-2],p[b]);break;case 39:this.$=[p[b]];break;case 40:p[b-2].push(p[b]);this.$=p[b-2];break;case 41:p[b-2].push(p[b]);this.$=p[b-2];break;case 42:this.$=[p[b]];break;case 43:this.$=r.isArray(p[b-2])?p[b-2]:[p[b-2]];this.$.push(p[b]);break;case 44:this.$=
1*p[b];break;case 45:this.$=1*(p[b-2]+"."+p[b]);break;case 46:this.$=.01*p[b-1];break;case 47:this.$=p[b-2]+p[b-1]+p[b];break;case 48:this.$=p[b-2]+p[b-1]+p[b]}},table:[{2:18,3:1,4:2,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{1:[3]},{5:[1,25],14:[1,26],15:[1,27],16:[1,28],22:[1,29],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35]},{5:[2,2],14:[2,
2],15:[2,2],16:[2,2],18:[2,2],21:[2,2],22:[2,2],23:[2,2],24:[2,2],25:[2,2],26:[2,2],27:[2,2],28:[2,2],37:[2,2],38:[2,2],40:[1,36]},{5:[2,3],14:[2,3],15:[2,3],16:[2,3],18:[2,3],21:[2,3],22:[2,3],23:[2,3],24:[2,3],25:[2,3],26:[2,3],27:[2,3],28:[2,3],37:[2,3],38:[2,3]},{5:[2,4],14:[2,4],15:[2,4],16:[2,4],18:[2,4],21:[2,4],22:[2,4],23:[2,4],24:[2,4],25:[2,4],26:[2,4],27:[2,4],28:[2,4],37:[2,4],38:[2,4]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],18:[2,5],21:[2,5],22:[2,5],23:[2,5],24:[2,5],25:[2,5],26:[2,5],
27:[2,5],28:[2,5],37:[2,5],38:[2,5]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],18:[2,6],21:[2,6],22:[2,6],23:[2,6],24:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6],37:[2,6],38:[2,6]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],18:[2,7],21:[2,7],22:[2,7],23:[2,7],24:[2,7],25:[2,7],26:[2,7],27:[2,7],28:[2,7],37:[2,7],38:[2,7]},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],18:[2,8],21:[2,8],22:[2,8],23:[2,8],24:[2,8],25:[2,8],26:[2,8],27:[2,8],28:[2,8],37:[2,8],38:[2,8],42:[1,37]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],18:[2,9],21:[2,
9],22:[2,9],23:[2,9],24:[2,9],25:[2,9],26:[2,9],27:[2,9],28:[2,9],37:[2,9],38:[2,9]},{2:18,4:38,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:40,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],20:39,25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:41,6:3,
7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:42,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{5:[2,27],14:[2,27],15:[2,27],16:[2,27],18:[2,27],21:[2,27],22:[2,27],23:[2,27],24:[2,27],25:[2,27],26:[2,27],27:[2,27],
28:[2,27],37:[2,27],38:[2,27]},{17:[1,43]},{5:[2,30],14:[2,30],15:[2,30],16:[2,30],18:[2,30],21:[2,30],22:[2,30],23:[2,30],24:[2,30],25:[2,30],26:[2,30],27:[2,30],28:[2,30],37:[2,30],38:[2,30]},{2:44,5:[2,31],14:[2,31],15:[2,31],16:[2,31],18:[2,31],21:[2,31],22:[2,31],23:[2,31],24:[2,31],25:[2,31],26:[2,31],27:[2,31],28:[2,31],37:[2,31],38:[2,31],39:[1,45],43:[1,24]},{5:[2,42],14:[2,42],15:[2,42],16:[2,42],18:[2,42],21:[2,42],22:[2,42],23:[2,42],24:[2,42],25:[2,42],26:[2,42],27:[2,42],28:[2,42],37:[2,
42],38:[2,42],40:[2,42],43:[1,46]},{5:[2,44],14:[2,44],15:[2,44],16:[2,44],18:[2,44],21:[2,44],22:[2,44],23:[2,44],24:[2,44],25:[2,44],26:[2,44],27:[2,44],28:[2,44],37:[2,44],38:[2,44],40:[1,47],42:[2,44]},{5:[2,33],14:[2,33],15:[2,33],16:[2,33],18:[2,33],21:[2,33],22:[2,33],23:[2,33],24:[2,33],25:[2,33],26:[2,33],27:[2,33],28:[2,33],33:[1,48],37:[2,33],38:[2,33]},{5:[2,35],14:[2,35],15:[2,35],16:[2,35],18:[2,35],21:[2,35],22:[2,35],23:[2,35],24:[2,35],25:[2,35],26:[2,35],27:[2,35],28:[2,35],33:[1,
49],37:[2,35],38:[2,35]},{36:[1,50]},{39:[1,51]},{1:[2,1]},{2:18,4:52,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:53,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:54,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,
7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:57,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],15:[1,55],16:[1,14],17:[1,11],19:[1,12],23:[1,56],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:59,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],15:[1,58],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,
15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:60,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:61,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:62,6:3,7:[1,4],
8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:63,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:64,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,
16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{39:[1,65]},{5:[2,46],14:[2,46],15:[2,46],16:[2,46],18:[2,46],21:[2,46],22:[2,46],23:[2,46],24:[2,46],25:[2,46],26:[2,46],27:[2,46],28:[2,46],37:[2,46],38:[2,46],42:[2,46]},{14:[1,26],15:[1,27],16:[1,28],18:[1,66],22:[1,29],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35]},{21:[1,67],37:[1,68],38:[1,69]},{14:[1,26],15:[1,27],16:[1,28],18:[2,39],21:[2,39],22:[1,29],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,
35],37:[2,39],38:[2,39]},{5:[2,25],14:[2,25],15:[2,25],16:[2,25],18:[2,25],21:[2,25],22:[2,25],23:[2,25],24:[2,25],25:[2,25],26:[1,33],27:[1,34],28:[1,35],37:[2,25],38:[2,25]},{5:[2,26],14:[2,26],15:[2,26],16:[2,26],18:[2,26],21:[2,26],22:[2,26],23:[2,26],24:[2,26],25:[2,26],26:[1,33],27:[1,34],28:[1,35],37:[2,26],38:[2,26]},{2:18,4:40,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],18:[1,70],19:[1,12],20:71,25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],
35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{5:[2,32],14:[2,32],15:[2,32],16:[2,32],18:[2,32],21:[2,32],22:[2,32],23:[2,32],24:[2,32],25:[2,32],26:[2,32],27:[2,32],28:[2,32],37:[2,32],38:[2,32]},{43:[1,46]},{39:[1,72]},{41:[1,73]},{32:[1,74]},{34:[1,75]},{34:[1,76]},{36:[1,77]},{5:[2,10],14:[2,10],15:[2,10],16:[1,28],18:[2,10],21:[2,10],22:[1,29],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,10],38:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[1,28],18:[2,11],21:[2,11],22:[1,29],23:[1,
30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,11],38:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12],21:[2,12],22:[2,12],23:[2,12],24:[2,12],25:[2,12],26:[1,33],27:[1,34],28:[1,35],37:[2,12],38:[2,12]},{2:18,4:78,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{2:18,4:79,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,
14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{5:[2,20],14:[2,20],15:[2,20],16:[1,28],18:[2,20],21:[2,20],22:[2,20],23:[2,20],24:[2,20],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,20],38:[2,20]},{2:18,4:80,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{5:[2,19],14:[2,19],15:[2,19],
16:[1,28],18:[2,19],21:[2,19],22:[2,19],23:[2,19],24:[2,19],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,19],38:[2,19]},{5:[2,18],14:[2,18],15:[2,18],16:[1,28],18:[2,18],21:[2,18],22:[1,29],23:[1,30],24:[2,18],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,18],38:[2,18]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],18:[2,21],21:[2,21],22:[2,21],23:[2,21],24:[2,21],25:[2,21],26:[1,33],27:[1,34],28:[1,35],37:[2,21],38:[2,21]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],18:[2,22],21:[2,22],22:[2,22],23:[2,22],
24:[2,22],25:[2,22],26:[2,22],27:[2,22],28:[1,35],37:[2,22],38:[2,22]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],18:[2,23],21:[2,23],22:[2,23],23:[2,23],24:[2,23],25:[2,23],26:[2,23],27:[2,23],28:[1,35],37:[2,23],38:[2,23]},{5:[2,24],14:[2,24],15:[2,24],16:[2,24],18:[2,24],21:[2,24],22:[2,24],23:[2,24],24:[2,24],25:[2,24],26:[2,24],27:[2,24],28:[2,24],37:[2,24],38:[2,24]},{5:[2,43],14:[2,43],15:[2,43],16:[2,43],18:[2,43],21:[2,43],22:[2,43],23:[2,43],24:[2,43],25:[2,43],26:[2,43],27:[2,43],28:[2,43],
37:[2,43],38:[2,43],40:[2,43]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13],21:[2,13],22:[2,13],23:[2,13],24:[2,13],25:[2,13],26:[2,13],27:[2,13],28:[2,13],37:[2,13],38:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14],21:[2,14],22:[2,14],23:[2,14],24:[2,14],25:[2,14],26:[2,14],27:[2,14],28:[2,14],37:[2,14],38:[2,14]},{2:18,4:81,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],
39:[1,19],41:[1,20],43:[1,24]},{2:18,4:82,6:3,7:[1,4],8:[1,5],9:[1,6],10:[1,7],11:[1,8],12:9,13:[1,10],16:[1,14],17:[1,11],19:[1,12],25:[1,13],29:[1,15],30:[1,16],31:17,32:[1,21],34:[1,22],35:[1,23],39:[1,19],41:[1,20],43:[1,24]},{5:[2,28],14:[2,28],15:[2,28],16:[2,28],18:[2,28],21:[2,28],22:[2,28],23:[2,28],24:[2,28],25:[2,28],26:[2,28],27:[2,28],28:[2,28],37:[2,28],38:[2,28]},{18:[1,83],37:[1,68],38:[1,69]},{36:[1,84]},{5:[2,45],14:[2,45],15:[2,45],16:[2,45],18:[2,45],21:[2,45],22:[2,45],23:[2,
45],24:[2,45],25:[2,45],26:[2,45],27:[2,45],28:[2,45],37:[2,45],38:[2,45],42:[2,45]},{5:[2,34],14:[2,34],15:[2,34],16:[2,34],18:[2,34],21:[2,34],22:[2,34],23:[2,34],24:[2,34],25:[2,34],26:[2,34],27:[2,34],28:[2,34],37:[2,34],38:[2,34]},{5:[2,36],14:[2,36],15:[2,36],16:[2,36],18:[2,36],21:[2,36],22:[2,36],23:[2,36],24:[2,36],25:[2,36],26:[2,36],27:[2,36],28:[2,36],37:[2,36],38:[2,36]},{5:[2,37],14:[2,37],15:[2,37],16:[2,37],18:[2,37],21:[2,37],22:[2,37],23:[2,37],24:[2,37],25:[2,37],26:[2,37],27:[2,
37],28:[2,37],33:[1,85],37:[2,37],38:[2,37]},{5:[2,47],14:[2,47],15:[2,47],16:[2,47],18:[2,47],21:[2,47],22:[2,47],23:[2,47],24:[2,47],25:[2,47],26:[2,47],27:[2,47],28:[2,47],37:[2,47],38:[2,47],39:[2,47],43:[2,47]},{5:[2,15],14:[2,15],15:[2,15],16:[1,28],18:[2,15],21:[2,15],22:[2,15],23:[2,15],24:[2,15],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,15],38:[2,15]},{5:[2,17],14:[2,17],15:[2,17],16:[1,28],18:[2,17],21:[2,17],22:[2,17],23:[2,17],24:[2,17],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,
17],38:[2,17]},{5:[2,16],14:[2,16],15:[2,16],16:[1,28],18:[2,16],21:[2,16],22:[2,16],23:[2,16],24:[2,16],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,16],38:[2,16]},{14:[1,26],15:[1,27],16:[1,28],18:[2,40],21:[2,40],22:[1,29],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,40],38:[2,40]},{14:[1,26],15:[1,27],16:[1,28],18:[2,41],21:[2,41],22:[1,29],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],37:[2,41],38:[2,41]},{5:[2,29],14:[2,29],15:[2,29],16:[2,29],18:[2,29],21:[2,
29],22:[2,29],23:[2,29],24:[2,29],25:[2,29],26:[2,29],27:[2,29],28:[2,29],37:[2,29],38:[2,29]},{5:[2,48],14:[2,48],15:[2,48],16:[2,48],18:[2,48],21:[2,48],22:[2,48],23:[2,48],24:[2,48],25:[2,48],26:[2,48],27:[2,48],28:[2,48],37:[2,48],38:[2,48],39:[2,48],43:[2,48]},{34:[1,86]},{5:[2,38],14:[2,38],15:[2,38],16:[2,38],18:[2,38],21:[2,38],22:[2,38],23:[2,38],24:[2,38],25:[2,38],26:[2,38],27:[2,38],28:[2,38],37:[2,38],38:[2,38]}],defaultActions:{25:[2,1]},parseError:function(a,b){if(b.recoverable)this.trace(a);
else throw Error(a);},parse:function(a){function b(a){e.length-=2*a;p.length-=a;g.length-=a}function c(){var a;a=d.lexer.lex()||1;"number"!==typeof a&&(a=d.symbols_[a]||a);return a}var d=this,e=[0],p=[null],g=[],h=this.table,m="",q=0,r=0,s=0,t=g.slice.call(arguments,1);this.lexer.setInput(a);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var v=this.lexer.yylloc;g.push(v);var z=this.lexer.options&&this.lexer.options.ranges;
this.parseError="function"===typeof this.yy.parseError?this.yy.parseError:Object.getPrototypeOf(this).parseError;for(var w,B,y,x,C={},E,A;;){y=e[e.length-1];if(this.defaultActions[y])x=this.defaultActions[y];else{if(null===w||"undefined"==typeof w)w=c();x=h[y]&&h[y][w]}if("undefined"===typeof x||!x.length||!x[0]){A=function(a){for(var b=e.length-1,c=0;;){if((2).toString()in h[a])return c;if(0===a||2>b)return!1;b-=2;a=e[b];++c}};var D;x="";if(s)1!==B&&(D=A(y));else{D=A(y);A=[];for(E in h[y])this.terminals_[E]&&
2<E&&A.push("'"+this.terminals_[E]+"'");x=this.lexer.showPosition?"Parse error on line "+(q+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[w]||w)+"'":"Parse error on line "+(q+1)+": Unexpected "+(1==w?"end of input":"'"+(this.terminals_[w]||w)+"'");this.parseError(x,{text:this.lexer.match,token:this.terminals_[w]||w,line:this.lexer.yylineno,loc:v,expected:A,recoverable:!1!==D})}if(3==s){if(1===w||1===B)throw Error(x||"Parsing halted while starting to recover from another error.");
r=this.lexer.yyleng;m=this.lexer.yytext;q=this.lexer.yylineno;v=this.lexer.yylloc;w=c()}if(!1===D)throw Error(x||"Parsing halted. No suitable error recovery rule available.");b(D);B=2==w?null:w;w=2;y=e[e.length-1];x=h[y]&&h[y][2];s=3}if(x[0]instanceof Array&&1<x.length)throw Error("Parse Error: multiple actions possible at state: "+y+", token: "+w);switch(x[0]){case 1:e.push(w);p.push(this.lexer.yytext);g.push(this.lexer.yylloc);e.push(x[1]);w=null;B?(w=B,B=null):(r=this.lexer.yyleng,m=this.lexer.yytext,
q=this.lexer.yylineno,v=this.lexer.yylloc,0<s&&s--);break;case 2:A=this.productions_[x[1]][1];C.$=p[p.length-A];C._$={first_line:g[g.length-(A||1)].first_line,last_line:g[g.length-1].last_line,first_column:g[g.length-(A||1)].first_column,last_column:g[g.length-1].last_column};z&&(C._$.range=[g[g.length-(A||1)].range[0],g[g.length-1].range[1]]);y=this.performAction.apply(C,[m,r,q,this.yy,x[1],p,g].concat(t));if("undefined"!==typeof y)return y;A&&(e=e.slice(0,-2*A),p=p.slice(0,-1*A),g=g.slice(0,-1*
A));e.push(this.productions_[x[1]][0]);p.push(C.$);g.push(C._$);y=h[e[e.length-2]][e[e.length-1]];e.push(y);break;case 3:return!0}}}},d=function(){return{EOF:1,parseError:function(a,b){if(this.yy.parser)this.yy.parser.parseError(a,b);else throw Error(a);},setInput:function(a){this._input=a;this._more=this._backtrack=this.done=!1;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};this.options.ranges&&
(this.yylloc.range=[0,0]);this.offset=0;return this},input:function(){var a=this._input[0];this.yytext+=a;this.yyleng++;this.offset++;this.match+=a;this.matched+=a;a.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++;this.options.ranges&&this.yylloc.range[1]++;this._input=this._input.slice(1);return a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-b-1);this.offset-=
b;a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);c.length-1&&(this.yylineno-=c.length-1);var d=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===a.length?this.yylloc.first_column:0)+a[a.length-c.length].length-c[0].length:this.yylloc.first_column-b};this.options.ranges&&(this.yylloc.range=[d[0],d[0]+
this.yyleng-b]);this.yyleng=this.yytext.length;return this},more:function(){this._more=!0;return this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=
this.matched.substr(0,this.matched.length-this.match.length);return(20<a.length?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;20>a.length&&(a+=this._input.substr(0,20-a.length));return(a.substr(0,20)+(20<a.length?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},test_match:function(a,b){var c,d;this.options.backtrack_lexer&&(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,
last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0)));if(c=a[0].match(/(?:\r\n?|\n).*/g))this.yylineno+=c.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+
1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length};this.yytext+=a[0];this.match+=a[0];this.matches=a;this.yyleng=this.yytext.length;this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]);this._backtrack=this._more=!1;this._input=this._input.slice(a[0].length);this.matched+=a[0];c=this.performAction.call(this,this.yy,this,b,this.conditionStack[this.conditionStack.length-1]);
this.done&&this._input&&(this.done=!1);if(c)return c;if(this._backtrack)for(var e in d)this[e]=d[e];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c;this._more||(this.match=this.yytext="");for(var d=this._currentRules(),e=0;e<d.length;e++)if((b=this._input.match(this.rules[d[e]]))&&(!a||b[0].length>a[0].length))if(a=b,c=e,this.options.backtrack_lexer){a=this.test_match(b,d[e]);if(!1!==a)return a;if(this._backtrack)a=!1;else return!1}else if(!this.options.flex)break;
return a?(a=this.test_match(a,d[c]),!1!==a?a:!1):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return 0<this.conditionStack.length-1?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-
1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){a=this.conditionStack.length-1-Math.abs(a||0);return 0<=a?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(b,c,d,e){switch(d){case 1:return 13;case 2:return 13;case 3:return 35;case 4:return 30;case 5:return 10;case 6:return 11;case 7:return"cell"==a.obj.type?
32:39;case 8:return"cell"==a.obj.type?34:39;case 9:return 30;case 10:return 39;case 11:return 39;case 12:return 41;case 14:return" ";case 15:return 40;case 16:return 33;case 17:return 37;case 18:return 38;case 19:return 26;case 20:return 27;case 21:return 25;case 22:return 16;case 23:return 28;case 24:return 17;case 25:return 18;case 26:return 19;case 27:return 21;case 28:return 23;case 29:return 22;case 30:return 24;case 31:return"PI";case 32:return 29;case 33:return 7;case 34:return 8;case 35:return 9;
case 36:return'"';case 37:return"'";case 38:return"!";case 39:return 15;case 40:return 42;case 41:return 43;case 42:return 14;case 43:return 5}},rules:[/^(?:\s+)/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:#[A-Za-z0-9_]+)/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9]+(?=[(]))/,/^(?:([0]?[1-9]|1[0-2])[:][0-5][0-9]([:][0-5][0-9])?[ ]?(AM|am|aM|Am|PM|pm|pM|Pm))/,/^(?:([0]?[0-9]|1[0-9]|2[0-3])[:][0-5][0-9]([:][0-5][0-9])?)/,/^(?:\$[A-Za-z]+\$[0-9]+)/,/^(?:[A-Za-z]+[0-9]+)/,/^(?:[A-Za-z]+(?=[(]))/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9]+)/,
/^(?:[A-Za-z_]+)/,/^(?:[0-9]+)/,/^(?:\$)/,/^(?: )/,/^(?:[.])/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:>)/,/^(?:<)/,/^(?:NOT\b)/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:TRUE\b)/,/^(?:FALSE\b)/,/^(?:NULL\b)/,/^(?:")/,/^(?:')/,/^(?:!)/,/^(?:=)/,/^(?:%)/,/^(?:[#])/,/^(?:[&])/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],
inclusive:!0}}}}();c.lexer=d;b.prototype=c;c.Parser=b;return new b}function v(a,b){this.sheet=a;this.el="undefined"!=typeof b?r(b):!1;this.floatValue=this.computedValue=this.formattedValue=this.value=null;this.processed=this.affected=!1;this.dependencies={};this.dependant={};this.conditionalStyle=!1;this.address="";this.isCheckbox=this.remoteDependency=!1;this.init()}function t(a,b,c){this.identifier=a;this.el=r(b);this.lang="en";this.cells={};this.variables={};this.config=r.extend({},G,c);this.counter=
1;this.relatedSheet=!1;this.elementId=this.el.attr("id");this.dependant={};this.dependencies={};this.calculating=this.calculated=!1;this.activeCell=null;this.totalCell=0;this.affectedCell=[];this.init()}if("undefined"==typeof r)return!1;"function"!==typeof Array.indexOf&&(Array.prototype.indexOf=function(a,b){for(var c=b||0;c<this.length;c++)if(this[c]==a)return c;return-1});"function"!==typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===typeof"test".__proto__?function(a){return a.__proto__}:
function(a){return a.constructor.prototype});var G={autoCalculate:!0,autoCalculateTrigger:"blur",onBeforeCalculate:null,onAfterCalculate:null,onBeforeRender:null,onAfterRender:null,defaultFormat:!1,ajaxUrl:null,ajaxMethod:"get",graphHandler:"flot",checkCircularReference:!1,data:{}},e={custom:{},date:{DATE:function(a,b,c){return"undefined"==typeof h?m.ERRKEY.momentRequired:"undefined"==typeof b?h(a):new Date(a,b-1,c)},DATEDIFF:function(a,b,c){return"undefined"==typeof h?m.ERRKEY.momentRequired:h(b).diff(h.utc(a),
c)},DATEFORMAT:function(a,b){return"undefined"==typeof h?m.ERRKEY.momentRequired:h(a).format(b)},DATEVALUE:function(a){return"undefined"==typeof h?m.ERRKEY.momentRequired:Math.ceil((h(a)-h("1900-1-1"))/864E5)+2},DAY:function(a){return"undefined"==typeof h?m.ERRKEY.momentRequired:h(new Date(a)).date()},DAYNAME:function(a){return m.DAY_NAME[e.date.WEEKDAY(a)-1]},DAYS:function(a,b){return"undefined"==typeof h?m.ERRKEY.momentRequired:h(new Date(a)).diff(h(new Date(b)),"days")},DAYS360:function(a,b,c){if("undefined"==
typeof h)return m.ERRKEY.momentRequired;a=h(new Date(a));b=h(new Date(b));var d=31,f=31,k=a.date(),e=b.date();if(c)k=31===k?30:k,e=31===e?30:e;else if(1===a.month()&&(d=a.daysInMonth()),1===b.month()&&(f=b.daysInMonth()),k=k===d?30:k,30===k||k===d)e=e===f?30:e;return 360*(b.year()-a.year())+30*(b.month()-a.month())+(e-k)},EDATE:function(a,b){return"undefined"==typeof h?m.ERRKEY.momentRequired:h(new Date(a)).add("months",b).toDate()},EOMONTH:function(a,b){if("undefined"==typeof h)return m.ERRKEY.momentRequired;
var c=h(new Date(a)).add("months",b);return new Date(c.year(),c.month(),c.daysInMonth())},FROMNOW:function(a,b){return"undefined"==typeof h?m.ERRKEY.momentRequired:h(new Date(a)).fromNow(b)},HOUR:function(a){return"undefined"==typeof h?m.ERRKEY.momentRequired:1>=a?Math.floor(24*a):h(new Date(a)).hours()},MINUTE:function(a){return"undefined"==typeof h?m.ERRKEY.momentRequired:1>=a?Math.floor(1440*a)-60*Math.floor(24*a):h(new Date(a)).minutes()},ISOWEEKNUM:function(a){return"undefined"==typeof h?m.ERRKEY.momentRequired:
h(new Date(a)).format("w")},MONTH:function(a){return"undefined"==typeof h?m.ERRKEY.momentRequired:h(new Date(a)).month()+1},NETWORKDAYS:function(a,b,c){return e.date.NETWORKDAYSINTL(a,b,1,c)},NETWORKDAYSINTL:function(a,b,c,d){if("undefined"==typeof h)return m.ERRKEY.momentRequired;c=m.WEEKEND_TYPES["undefined"===typeof c?1:c];var f=h(a);a=b=h(b).diff(f,"days")+1;var k="",e=[];if("undefined"!==typeof d)for(k=0;k<d.length;k++)e[k]=h(new Date(d[k])).format("MM-DD-YYYY");for(d=0;d<b;)k=f.format("d"),
0<=c.indexOf(parseInt(k,10))?a--:0<=e.indexOf(f.format("MM-DD-YYYY"))&&a--,f=f.add("days",1),d++;return a},NOW:function(){return new Date},SECOND:function(a){return"undefined"==typeof h?m.ERRKEY.momentRequired:h(new Date(a)).seconds()},TIME:function(a,b,c){return(3600*a+60*b+c)/86400},TIMEVALUE:function(a){if("undefined"==typeof h)return m.ERRKEY.momentRequired;a=h(new Date(a));return(3600*a.hours()+60*a.minutes()+a.seconds())/86400},TODAY:function(){return new Date},WEEKDAY:function(a,b){if("undefined"==
typeof h)return m.ERRKEY.momentRequired;var c=h(new Date(a)).format("d");return m.WEEK_TYPES["undefined"===typeof b?1:b][c]},WEEKNUM:function(a,b){if("undefined"==typeof h)return m.ERRKEY.momentRequired;var c=h(new Date(a)),d=h(new Date(c.year(),0,1)),f="undefined"===typeof b?1:b,k=m.WEEK_STARTS[f],u=d.format("d"),k=u<k?k-u+1:u-k;return 21===f?e.date.ISOWEEKNUM(a):Math.floor(c.diff(d.subtract("days",k),"days")/7)+1},WORKDAY:function(a,b,c){return e.date.WORKDAYINTL(a,b,1,c)},WORKDAYINTL:function(a,
b,c,d){if("undefined"==typeof h)return m.ERRKEY.momentRequired;c=m.WEEKEND_TYPES["undefined"===typeof c?1:c];a=h(new Date(a));var f="",k=[];if("undefined"!==typeof d)for(f=0;f<d.length;f++)k[f]=h(new Date(d[f])).format("MM-DD-YYYY");for(d=0;d<b;)a=a.add("days",1),f=a.format("d"),0>c.indexOf(parseInt(f,10))&&0>k.indexOf(a.format("MM-DD-YYYY"))&&d++;return a.toDate()},YEAR:function(a){return"undefined"==typeof h?m.ERRKEY.momentRequired:h(new Date(a)).year()},YEARFRAC:function(a,b,c){if("undefined"==
typeof h)return m.ERRKEY.momentRequired;c="undefined"===typeof c?0:c;var d=h(new Date(a)),f=h(new Date(b));if(!d.isValid()||!f.isValid())return"#VALUE!";if(-1===[0,1,2,3,4].indexOf(c))return"#NUM!";if(d===f)return 0;0<d.diff(f)&&(f=h(new Date(a)),d=h(new Date(b)));var k=d.year(),e=d.month(),n=d.date(),l=f.year();a=f.month();b=f.date();switch(c){case 0:return 31===n&&31===b?b=n=30:31===n?n=30:30===n&&31===b?b=30:1===e&&1===a&&d.daysInMonth()===n&&f.daysInMonth()===b?b=n=30:1===e&&d.daysInMonth()===
n&&(n=30),(b+30*a+360*l-(n+30*e+360*k))/360;case 1:c=365;if(k===l||k+1===l&&(e>a||e===a&&n>=b)){if(k===l&&h([k]).isLeapYear())c=366;else if(k=d,l=f,e=h(new Date(k.year(),2,1)),h([k.year()]).isLeapYear()&&0>k.diff(e)&&0<=l.diff(e)?k=!0:(e=h(new Date(l.year(),2,1)),k=h([l.year()]).isLeapYear()&&0<=l.diff(e)&&0>k.diff(e)?!0:!1),k||1===a&&29===b)c=366;return f.diff(d,"days")/c}a=l-k+1;a=h(new Date(l+1,0,1)).diff(h(new Date(k,0,1)),"days")/a;return f.diff(d,"days")/a;case 2:return f.diff(d,"days")/360;
case 3:return f.diff(d,"days")/365;case 4:return 31===n&&(n=30),31===b&&(b=30),(b+30*a+360*l-(n+30*e+360*k))/360}}},math:{ABS:function(a){return Math.abs(a)},ACOS:function(a){return Math.acos(a)},ACOSH:function(a){return Math.log(a+Math.sqrt(a*a-1))},ACOT:function(a){return Math.atan(1/a)},ACOTH:function(a){return.5*Math.log((a+1)/(a-1))},AGGREGATE:function(a,b){for(var c=[],d=2;d<arguments.length;d++)switch(a){case 1:c[d-2]=e.statistic.AVERAGE(arguments[d]);break;case 2:c[d-2]=e.statistic.COUNT(arguments[d]);
break;case 3:c[d-2]=e.statistic.COUNTA(arguments[d]);break;case 4:c[d-2]=e.statistic.MAX(arguments[d]);break;case 5:c[d-2]=e.statistic.MIN(arguments[d]);break;case 6:c[d-2]=e.statistic.PRODUCT(arguments[d]);break;case 7:c[d-2]=e.statistic.STDEVS(arguments[d]);break;case 8:c[d-2]=e.statistic.STDEVP(arguments[d]);break;case 9:c[d-2]=e.math.SUM(arguments[d]);break;case 10:c[d-2]=e.statistic.VARS(arguments[d]);break;case 11:c[d-2]=e.statistic.VARP(arguments[d]);break;case 12:c[d-2]=e.statistic.MEDIAN(arguments[d]);
break;case 13:c[d-2]=e.statistic.MODESNGL(arguments[d]);break;case 14:c[d-2]=e.statistic.LARGE(arguments[d]);break;case 15:c[d-2]=e.statistic.SMALL(arguments[d]);break;case 16:c[d-2]=e.statistic.PERCENTILEINC(arguments[d]);break;case 17:c[d-2]=e.statistic.QUARTILEINC(arguments[d]);break;case 18:c[d-2]=e.statistic.PERCENTILEEXC(arguments[d]);break;case 19:c[d-2]=e.statistic.QUARTILEEXC(arguments[d])}return c},ARABIC:function(a){if(!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(a))return"#VALUE!";
var b=0;a.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,function(a){b+={M:1E3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}[a]});return b},ASIN:function(a){return Math.asin(a)},ASINH:function(a){return Math.log(a+Math.sqrt(a*a+1))},ATAN:function(a){return Math.atan(a)},ATAN2:function(a,b){return Math.atan2(a,b)},ATANH:function(a){return Math.log((1+a)/(1-a))/2},BASE:function(a,b,c){c="undefined"===typeof c?0:c;a=a.toString(b);return Array(Math.max(c+1-a.length,0)).join("0")+a},CEILING:function(a,
b,c){if(0===b)return 0;b="undefined"===typeof b?1:Math.abs(b);c="undefined"===typeof c?0:c;var d=-Math.floor(Math.log(b)/Math.log(10));return 0<=a?e.math.ROUND(Math.ceil(a/b)*b,d):0===c?-e.math.ROUND(Math.floor(Math.abs(a)/b)*b,d):-e.math.ROUND(Math.ceil(Math.abs(a)/b)*b,d)},CEILINGMATH:function(a,b,c){return e.math.CEILING(a,b,c)},CEILINGPRECISE:function(a,b,c){return e.math.CEILING(a,b,c)},COMBIN:function(a,b){return e.math.FACT(a)/(e.math.FACT(b)*e.math.FACT(a-b))},COMBINA:function(a,b){return 0===
a&&0===b?1:e.math.COMBIN(a+b-1,a-1)},COS:function(a){return Math.cos(a)},COSH:function(a){return(Math.exp(a)+Math.exp(-a))/2},COT:function(a){return 1/Math.tan(a)},COTH:function(a){a=Math.exp(2*a);return(a+1)/(a-1)},CSC:function(a){return 1/Math.sin(a)},CSCH:function(a){return 2/(Math.exp(a)-Math.exp(-a))},DECIMAL:function(a,b){return parseInt(a,b)},DEGREES:function(a){return 180*a/Math.PI},DIVIDE:function(a,b){return""===a||""===b?"":0==b?"#DIV/0":parseFloat(a)/parseFloat(b)},EVEN:function(a){return e.math.CEILING(a,
-2,-1)},EXP:function(a){return Math.exp(a)},FACT:function(a){a=Math.floor(a);if(0===a||1===a)return 1;0<m.MEMOIZED_FACT[a]||(m.MEMOIZED_FACT[a]=e.math.FACT(a-1)*a);return m.MEMOIZED_FACT[a]},FACTDOUBLE:function(a){a=Math.floor(a);return 0>=a?1:a*e.math.FACTDOUBLE(a-2)},FLOOR:function(a,b,c){if(0===b)return 0;b="undefined"===typeof b?1:Math.abs(b);c="undefined"===typeof c?0:c;var d=-Math.floor(Math.log(b)/Math.log(10));return 0<=a?e.math.ROUND(Math.floor(a/b)*b,d):0===c?-e.math.ROUND(Math.ceil(Math.abs(a)/
b)*b,d):-e.math.ROUND(Math.floor(Math.abs(a)/b)*b,d)},FLOORMATH:function(a,b,c){return e.math.FLOOR(a,b,c)},FLOORPRECISE:function(a,b,c){return e.math.FLOOR(a,b,c)},GCD:function(){for(var a,b,c=arguments.length-1,d=arguments[c];c;)for(b=arguments[--c];a=b%d;b=d,d=a);return d},INT:function(a){return Math.floor(a)},ISEVEN:function(a){return Math.floor(Math.abs(a))&1?!1:!0},ISOCEILING:function(a,b,c){return e.math.CEILING(a,b,c)},ISODD:function(a){return Math.floor(Math.abs(a))&1?!0:!1},LCM:function(){for(var a=
q.toArray(arguments),b,c,d,f=1;void 0!==(d=a.pop());)for(;1<d;){if(d%2){b=3;for(c=Math.floor(Math.sqrt(d));b<=c&&d%b;b+=2);c=b<=c?b:d}else c=2;d/=c;f*=c;for(b=a.length;b;0===a[--b]%c&&1===(a[b]/=c)&&a.splice(b,1));}return f},LN:function(a){return Math.log(a)},LOG:function(a,b){b="undefined"===typeof b?10:b;return Math.log(a)/Math.log(b)},LOG10:function(a){return Math.log(a)/Math.log(10)},MOD:function(a,b){var c=Math.abs(a%b);return 0<b?c:-c},MROUND:function(a,b){if(0>a*b)throw Error("Number and multiple must have the same sign.");
return Math.round(a/b)*b},MULTINOMIAL:function(){for(var a=0,b=1,c=0;c<arguments.length;c++)a+=arguments[c],b*=e.math.FACT(arguments[c]);return e.math.FACT(a)/b},MULTIPLY:function(a,b){if(""===a||""===b)return"";a=isNaN(parseFloat(a))?0:parseFloat(a);b=isNaN(parseFloat(b))?0:parseFloat(b);return a*b},ODD:function(a){var b=Math.ceil(Math.abs(a)),b=b&1?b:b+1;return 0<a?b:-b},PI:function(){return Math.PI},POWER:function(a,b){return Math.pow(a,b)},PRODUCT:function(){for(var a=1,b=0;b<arguments.length;b++)a*=
arguments[b];return a},QUOTIENT:function(a,b){return(a/b).toFixed(0)},RADIANS:function(a){return a*Math.PI/180},RAND:function(){return Math.random()},RANDBETWEEN:function(a,b){return a+Math.ceil((b-a+1)*Math.random())-1},ROUND:function(a,b){return Math.round(a*Math.pow(10,b))/Math.pow(10,b)},ROUNDDOWN:function(a,b){return(0<a?1:-1)*Math.floor(Math.abs(a)*Math.pow(10,b))/Math.pow(10,b)},ROUNDUP:function(a,b){return(0<a?1:-1)*Math.ceil(Math.abs(a)*Math.pow(10,b))/Math.pow(10,b)},SERIESSUM:function(a,
b,c,d){for(var f=d[0]*Math.pow(a,b),k=1;k<d.length;k++)f+=d[k]*Math.pow(a,b+k*c);return f},SEC:function(a){return 1/Math.cos(a)},SECH:function(a){return 2/(Math.exp(a)+Math.exp(-a))},SIGN:function(a){return 0>a?-1:0===a?0:1},SIN:function(a){return Math.sin(a)},SINH:function(a){return(Math.exp(a)-Math.exp(-a))/2},SQRT:function(a){return Math.sqrt(a)},SQRTPI:function(a){return Math.sqrt(a*Math.PI)},SUBTOTAL:function(a){for(var b=[],c=1;c<arguments.length;c++)switch(a){case 1:b[c-1]=e.statistic.AVERAGE(arguments[c]);
break;case 2:b[c-1]=e.statistic.COUNT(arguments[c]);break;case 3:b[c-1]=e.statistic.COUNTA(arguments[c]);break;case 4:b[c-1]=e.statistic.MAX(arguments[c]);break;case 5:b[c-1]=e.statistic.MIN(arguments[c]);break;case 6:b[c-1]=e.statistic.PRODUCT(arguments[c]);break;case 7:b[c-1]=e.statistic.STDEV(arguments[c]);break;case 8:b[c-1]=e.statistic.STDEVP(arguments[c]);break;case 9:b[c-1]=e.math.SUM(arguments[c]);break;case 10:b[c-1]=e.statistic.VAR(arguments[c]);break;case 11:b[c-1]=e.statistic.VARP(arguments[c])}return b},
SUBTRACT:function(a,b){if(""===a&&""===b)return"";a=isNaN(parseFloat(a))?0:parseFloat(a);b=isNaN(parseFloat(b))?0:parseFloat(b);return a-b},SUM:function(){var a,b,c,d="",f=0;for(b=0;b<arguments.length;b++)if("object"==typeof arguments[b])for(a in arguments[b])d+="undefined"!=typeof arguments[b][a]?arguments[b][a]:"",c=isNaN(parseFloat(arguments[b][a],10))?0:parseFloat(arguments[b][a],10),f+=c;else d+="undefined"!=typeof arguments[b]?arguments[b]:"",c=isNaN(parseFloat(arguments[b],10))?0:parseFloat(arguments[b],
10),f+=c;return 0===f&&""===r.trim(d)?"":f},SUMIF:function(a,b){for(var c=0,d=0;d<a.length;d++)c+=eval(a[d]+b)?a[d]:0;return c},SUMIFS:function(){for(var a=(arguments.length-1)/2,b=arguments[0],c=0,d=0;d<b.length;d++){for(var f=!0,k=0;k<a;k++)eval(arguments[2*k+1][d]+arguments[2*k+2])||(f=!1);c+=f?b[d]:0}return c},SUMPRODUCT:function(){for(var a in arguments)if(arguments[a]=q.objectToArray(arguments[a]),0<a&&arguments[a-1].length!==arguments[a].length)return"#VALUE!";a=[];for(var b=0;b<arguments.length;b++)for(var c=
0;c<arguments[b].length;c++)a[c]=0==b?arguments[b][c]:e.math.MULTIPLY(a[c],arguments[b][c]);return e.math.SUM(a)},SUMSQ:function(){for(var a=q.toArray(arguments),b=0,c=0;c<a.length;c++)b+=r.isNumeric(a[c])?a[c]*a[c]:0;return b},SUMX2MY2:function(a,b){for(var c=0,d=0;d<a.length;d++)c+=a[d]*a[d]-b[d]*b[d];return c},SUMX2PY2:function(a,b){for(var c=0,d=0;d<a.length;d++)c+=a[d]*a[d]+b[d]*b[d];return c},SUMXMY2:function(a,b){for(var c=0,d=0;d<a.length;d++)c+=Math.pow(a[d]-b[d],2);return c},TAN:function(a){return Math.tan(a)},
TANH:function(a){a=Math.exp(2*a);return(a-1)/(a+1)},TRUNC:function(a,b){b="undefined"===typeof b?0:b;return(0<a?1:-1)*Math.floor(Math.abs(a)*Math.pow(10,b))/Math.pow(10,b)}},financial:{ACCRINT:function(a,b,c,d,f,k,u,n){if("undefined"==typeof h)return"#NAME?";if(!h(a).isValid()||!h(b).isValid()||!h(c).isValid())return"#VALUE!";if(0>=d||0>=f||-1===[1,2,4].indexOf(k)||-1===[0,1,2,3,4].indexOf(u)||0<=h(a).diff(h(c)))return"#NUM!";f="undefined"===typeof f?0:f;u="undefined"===typeof u?0:u;k=0;n=h(new Date(a));
h(new Date(b));h(new Date(c));h([n.year()]).isLeapYear();switch(u){case 0:k=e.date.YEARFRAC(a,c,u);break;case 1:k=e.date.YEARFRAC(a,c,u);break;case 2:k=e.date.YEARFRAC(a,c,u);break;case 3:k=e.date.YEARFRAC(a,c,u);break;case 4:k=e.date.YEARFRAC(a,c,u)}return f*d*k},ACCRINTM:function(){},AMORDEGRC:function(){},AMORLINC:function(){},COUPDAYBS:function(){},COUPDAYS:function(){},COUPDAYSNC:function(){},COUPNCD:function(){},COUPNUM:function(){},COUPPCD:function(){},CUMIPMT:function(a,b,c,d,f,k){if(0>=a||
0>=b||0>=c||1>d||1>f||d>f||0!==k&&1!==k)return"#NUM!";b=e.financial.PMT(a,b,c,0,k);var u=0;1===d&&0===k&&(u=-c,d++);for(;d<=f;d++)u=1===k?u+(e.financial.FV(a,d-2,b,c,1)-b):u+e.financial.FV(a,d-1,b,c,0);return u*a},CUMPRINC:function(a,b,c,d,f,k){if(0>=a||0>=b||0>=c||1>d||1>f||d>f||0!==k&&1!==k)return"#NUM!";b=e.financial.PMT(a,b,c,0,k);var u=0;1===d&&(u=0===k?b+c*a:b,d++);for(;d<=f;d++)u=0<k?u+(b-(e.financial.FV(a,d-2,b,c,1)-b)*a):u+(b-e.financial.FV(a,d-1,b,c,0)*a);return u},DB:function(a,b,c,d,f){f=
"undefined"===typeof f?12:f;if(isNaN(a)||isNaN(b)||isNaN(c)||isNaN(d)||isNaN(f))return"#VALUE!";if(0>a||0>b||0>c||0>d||-1===[1,2,3,4,5,6,7,8,9,10,11,12].indexOf(f)||d>c)return"#NUM!";if(b>=a)return 0;b=(1-Math.pow(b/a,1/c)).toFixed(3);for(var k=f=a*b*f/12,e=0,n=d===c?c-1:d,l=2;l<=n;l++)e=(a-k)*b,k+=e;return 1===d?f:d===c?(a-k)*b:e},DDB:function(a,b,c,d,f){f="undefined"===typeof f?2:f;if(isNaN(a)||isNaN(b)||isNaN(c)||isNaN(d)||isNaN(f))return"#VALUE!";if(0>a||0>b||0>c||0>d||0>=f||d>c)return"#NUM!";
if(b>=a)return 0;for(var k=0,e=0,n=1;n<=d;n++)e=Math.min(f/c*(a-k),a-b-k),k+=e;return e},DISC:function(){},DOLLARDE:function(a,b){if(isNaN(a)||isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";if(0<=b&&1>b)return"#DIV/0!";b=parseInt(b,10);var c=parseInt(a,10),c=c+a%1*Math.pow(10,Math.ceil(Math.log(b)/Math.LN10))/b,d=Math.pow(10,Math.ceil(Math.log(b)/Math.LN2)+1);return c=Math.round(c*d)/d},DOLLARFR:function(a,b){if(isNaN(a)||isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";if(0<=b&&1>b)return"#DIV/0!";b=
parseInt(b,10);var c=parseInt(a,10);return c+=a%1*Math.pow(10,-Math.ceil(Math.log(b)/Math.LN10))*b},DURATION:function(){},EFFECT:function(a,b){if(isNaN(a)||isNaN(b))return"#VALUE!";if(0>=a||1>b)return"#NUM!";b=parseInt(b,10);return Math.pow(1+a/b,b)-1},FV:function(a,b,c,d,f){f="undefined"===typeof f?0:f;0===a?a=d+c*b:(b=Math.pow(1+a,b),a=1===f?d*b+c*(1+a)*(b-1)/a:d*b+c*(b-1)/a);return-a},FVSCHEDULE:function(a,b){for(var c=a,d=0;d<b.length;d++){if(isNaN(b[d]))return"#VALUE!";c*=1+b[d]}return c},INTRATE:function(){},
IPMT:function(a,b,c,d,f,k){k="undefined"===typeof k?0:k;c=e.financial.PMT(a,c,d,f,k);return(1===b?1===k?0:-d:1===k?e.financial.FV(a,b-2,c,d,1)-c:e.financial.FV(a,b-1,c,d,0))*a},IRR:function(a,b){var c,d=[],f;for(f in a)c=parseFloat(a[f],10),c=isNaN(c)?0:c,d.push(c);c=function(a,b,c){c+=1;for(var d=a[0],f=1;f<a.length;f++)d+=a[f]/Math.pow(c,(b[f]-b[0])/365);return d};f=function(a,b,c){c+=1;for(var d=0,f=1;f<a.length;f++)var k=(b[f]-b[0])/365,d=d-k*a[f]/Math.pow(c,k+1);return d};for(var k=[],e=!1,n=
!1,l=0;l<d.length;l++)k[l]=0===l?0:k[l-1]+365,0<d[l]&&(e=!0),0>d[l]&&(n=!0);if(!e||!n)return"#NUM!";var e="undefined"===typeof b?.1:b,p,g,n=0,l=!0;do g=c(d,k,e),l=e-g/f(d,k,e),p=Math.abs(l-e),e=l,l=1E-10<p&&1E-10<Math.abs(g);while(l&&50>++n);return l?"#NUM!":e},ISPMT:function(a,b,c,d){return d*a*(b/c-1)},MDURATION:function(){},MIRR:function(a,b,c){var d=[],f;for(f in a)d.push(a[f]);a=d.length;f=[];for(var k=[],u=0;u<a;u++)0>d[u]?f.push(d[u]):k.push(d[u]);c=-e.financial.NPV(c,k)*Math.pow(1+c,a-1);
b=e.financial.NPV(b,f)*(1+b);return Math.pow(c/b,1/(a-1))-1},NOMINAL:function(a,b){if(isNaN(a)||isNaN(b))return"#VALUE!";if(0>=a||1>b)return"#NUM!";b=parseInt(b,10);return(Math.pow(a+1,1/b)-1)*b},NPER:function(a,b,c,d,f){f="undefined"===typeof f?0:f;return Math.log((b*(1+a*f)-("undefined"===typeof d?0:d)*a)/(c*a+b*(1+a*f)))/Math.log(1+a)},NPV:function(){for(var a,b=[],c=0;c<arguments.length;c++)if("object"==typeof arguments[c])for(var d in arguments[c])a=parseFloat(arguments[c][d],10),a=isNaN(a)?
0:a,b=b.concat([a]);else a=parseFloat(arguments[c],10),a=isNaN(a)?0:a,b=b.concat([a]);a=b[0];c=0;for(d=1;d<b.length;d++)c+=b[d]/Math.pow(1+a,d);return c},ODDFPRICE:function(){},ODDFYIELD:function(){},ODDLPRICE:function(){},ODDLYIELD:function(){},PDURATION:function(a,b,c){return isNaN(a)||isNaN(b)||isNaN(c)?"#VALUE!":0>=a?"#NUM!":(Math.log(c)-Math.log(b))/Math.log(1+a)},PMT:function(a,b,c,d,f){f="undefined"===typeof f?0:f;d="undefined"===typeof d?0:d;0===a?a=(c+d)/b:(b=Math.pow(1+a,b),a=1===f?(d*a/
(b-1)+c*a/(1-1/b))/(1+a):d*a/(b-1)+c*a/(1-1/b));return-a},PPMT:function(a,b,c,d,f,k){return e.financial.PMT(a,c,d,f,k)-e.financial.IPMT(a,b,c,d,f,k)},PRICE:function(){},PRICEDISC:function(){},PRICEMAT:function(){},PV:function(a,b,c,d,f){f="undefined"===typeof f?0:f;d="undefined"===typeof d?0:d;return 0===a?-c*b-d:((1-Math.pow(1+a,b))/a*c*(1+a*f)-d)/Math.pow(1+a,b)},RATE:function(a,b,c,d,f,k){d="undefined"===typeof d?0:d;f="undefined"===typeof f?0:f;var e,n,l,p=0,g=e=0,h="undefined"===typeof k?.01:
k;1E-10>Math.abs(h)||(e=Math.exp(a*Math.log(1+h)));k=c+b*a+d;n=c*e+b*(1/h+f)*(e-1)+d;g=l=0;for(p=h;1E-10<Math.abs(k-n)&&50>g;)h=(n*l-k*p)/(n-k),l=p,p=h,1E-10>Math.abs(h)?e=c*(1+a*h)+b*(1+h*f)*a+d:(e=Math.exp(a*Math.log(1+h)),e=c*e+b*(1/h+f)*(e-1)+d),k=n,n=e,++g;return h},RECEIVED:function(){},RRI:function(a,b,c){return isNaN(a)||isNaN(b)||isNaN(c)?"#VALUE!":0===a||0===b?"#NUM!":Math.pow(c/b,1/a)-1},SLN:function(a,b,c){return isNaN(a)||isNaN(b)||isNaN(c)?"#VALUE!":0===c?"#NUM!":(a-b)/c},SYD:function(a,
b,c,d){if(isNaN(a)||isNaN(b)||isNaN(c)||isNaN(d))return"#VALUE!";if(0===c||1>d||d>c)return"#NUM!";d=parseInt(d,10);return(a-b)*(c-d+1)*2/(c*(c+1))},TBILLEQ:function(a,b,c){return h(a).isValid()&&h(b).isValid()?0>=c||0<h(a).diff(h(b))||1<h(b).diff(h(a),"years")?"#NUM!":365*c/(360-c*e.date.DAYS360(a,b)):"#VALUE!"},TBILLPRICE:function(a,b,c){return h(a).isValid()&&h(b).isValid()?0>=c||0<h(a).diff(h(b))||1<h(b).diff(h(a),"years")?"#NUM!":100*(1-c*e.date.DAYS360(a,b)/360):"#VALUE!"},TBILLYIELD:function(a,
b,c){return h(a).isValid()&&h(b).isValid()?0>=c||0<h(a).diff(h(b))||1<h(b).diff(h(a),"years")?"#NUM!":360*(100-c)/(c*e.date.DAYS360(a,b)):"#VALUE!"},VDB:function(){},XIRR:function(a,b,c){var d=[],f;for(f in a)d.push(a[f]);a=function(a,b,c){c+=1;for(var d=a[0],f=1;f<a.length;f++)d+=a[f]/Math.pow(c,h(b[f]).diff(h(b[0]),"days")/365);return d};f=function(a,b,c){c+=1;for(var d=0,f=1;f<a.length;f++)var k=h(b[f]).diff(h(b[0]),"days")/365,d=d-k*a[f]/Math.pow(c,k+1);return d};for(var k=!1,e=!1,n=0;n<d.length;n++)0<
d[n]&&(k=!0),0>d[n]&&(e=!0);if(!k||!e)return"#NUM!";c=c||.1;var l,k=0,e=!0;do l=a(d,b,c),e=c-l/f(d,b,c),n=Math.abs(e-c),c=e,e=1E-10<n&&1E-10<Math.abs(l);while(e&&50>++k);return e?"#NUM!":c},XNPV:function(a,b,c){for(var d=0,f=0;f<b.length;f++)d+=b[f]/Math.pow(1+a,h(c[f]).diff(h(c[0]),"days")/365);return d},YIELD:function(){},YIELDDISC:function(){},YIELDMAT:function(){}},statistic:{AVEDEV:function(){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;var a=q.arrayMerge(arguments);return g.sum(g(a).subtract(g.mean(a)).abs()[0])/
a.length},AVERAGE:function(){for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=0,f=0,k=0;k<b;k++)!0!==a[k]&&!1!==a[k]&&(f=parseFloat(a[k]),d+=isNaN(f)?0:f,c++);return d/c},AVERAGEA:function(){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.mean(q.arrayMerge(arguments))},AVERAGEIF:function(a,b,c){c="undefined"===typeof c?a:c;for(var d=0,f=0,k=0;k<a.length;k++)eval(a[k]+b)&&(f+=c[k],d++);return f/d},AVERAGEIFS:function(){for(var a=(arguments.length-1)/2,b=arguments[0],c=0,d=0,f=0;f<b.length;f++){for(var k=
!0,e=0;e<a;e++)eval(arguments[2*e+1][f]+arguments[2*e+2])||(k=!1);k&&(d+=b[f],c++)}return d/c},BETADIST:function(a,b,c,d,f,k){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;f="undefined"===typeof f?0:f;a=(a-f)/(("undefined"===typeof k?1:k)-f);return d?g.beta.cdf(a,b,c):g.beta.pdf(a,b,c)},BETAINV:function(a,b,c,d,f){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;d="undefined"===typeof d?0:d;f="undefined"===typeof f?1:f;return g.beta.inv(a,b,c)*(f-d)+d},BINOMDIST:function(a,b,c,d){return"undefined"==
typeof g?m.ERRKEY.jStatRequired:d?g.binomial.cdf(a,b,c):g.binomial.pdf(a,b,c)},BINOMDISTRANGE:function(a,b,c,d){d="undefined"===typeof d?c:d;for(var f=0;c<=d;c++)f+=e.math.COMBIN(a,c)*Math.pow(b,c)*Math.pow(1-b,a-c);return f},BINOMINV:function(a,b,c){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var d=0;d<=a;){if(g.binomial.cdf(d,a,b)>=c)return d;d++}},CHISQDIST:function(a,b,c){return"undefined"==typeof g?m.ERRKEY.jStatRequired:c?g.chisquare.cdf(a,b):g.chisquare.pdf(a,b)},CHISQDISTRT:function(a,
b){},CHISQINV:function(a,b){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.chisquare.inv(a,b)},CHISQINVRT:function(){},CHISQTEST:function(){},CONFIDENCENORM:function(a,b,c){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.normalci(1,a,b,c)[1]-1},CONFIDENCET:function(a,b,c){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.tci(1,a,b,c)[1]-1},CORREL:function(){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.corrcoeff.apply(this,arguments)},COUNT:function(){return q.arrayMerge(arguments).length},
COUNTA:function(){var a=q.arrayMerge(arguments);return a.length-e.statistic.COUNTBLANK(a)},COUNTBLANK:function(){for(var a=q.arrayMerge(arguments),b=0,c=0;c<a.length;c++)null!==a[c]&&""!==a[c]||b++;return b},COUNTIF:function(a,b){var c=0,d;for(d in a)a[d].match(new RegExp(b))&&c++;return c},COUNTIFS:function(){var a=(arguments.length-1)/2,b=arguments[0],c=0,d;for(d in b){for(var b=!0,f=0;f<a;f++)eval(arguments[2*f+1][d]+arguments[2*f+2])||(b=!1);c+=b?1:0}return c},COUNTUNIQUE:function(){return q.unique(q.arrayMerge(arguments)).length},
COVARIANCEP:function(a,b){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var c=g.mean(a),d=g.mean(b),f=0,k=a.length,e=0;e<k;e++)f+=(a[e]-c)*(b[e]-d);return f/k},COVARIANCES:function(){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.covariance.apply(this,arguments)},DEVSQ:function(){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var a=q.arrayMerge(arguments),b=g.mean(a),c=0,d=0;d<a.length;d++)c+=Math.pow(a[d]-b,2);return c},EXPONDIST:function(a,b,c){return"undefined"==
typeof g?m.ERRKEY.jStatRequired:c?g.exponential.cdf(a,b):g.exponential.pdf(a,b)},FDIST:function(a,b,c,d){return"undefined"==typeof g?m.ERRKEY.jStatRequired:d?g.centralF.cdf(a,b,c):g.centralF.pdf(a,b,c)},FDISTRT:function(){},FINV:function(a,b,c){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.centralF.inv(a,b,c)},FINVRT:function(){},FTEST:function(){},FISHER:function(a){return Math.log((1+a)/(1-a))/2},FISHERINV:function(a){a=Math.exp(2*a);return(a-1)/(a+1)},FORECAST:function(a,b,c){if("undefined"==
typeof g)return m.ERRKEY.jStatRequired;for(var d=g.mean(c),f=g.mean(b),k=c.length,e=0,n=0,l=0;l<k;l++)e+=(c[l]-d)*(b[l]-f),n+=Math.pow(c[l]-d,2);b=e/n;return f-b*d+b*a},FREQUENCY:function(a,b){for(var c=a.length,d=b.length,f=[],k=0;k<=d;k++)for(var e=f[k]=0;e<c;e++)0===k?a[e]<=b[0]&&(f[0]+=1):k<d?a[e]>b[k-1]&&a[e]<=b[k]&&(f[k]+=1):k===d&&a[e]>b[d-1]&&(f[d]+=1);return f},GAMMA:function(){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.gammafn.apply(this,arguments)},GAMMADIST:function(a,b,c,d){},
GAMMAINV:function(a,b,c){},GAMMALN:function(){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.gammaln.apply(this,arguments)},GAMMALNPRECISE:function(){},GAUSS:function(a){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.normal.cdf(a,0,1)-.5},GEOMEAN:function(){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.geomean(q.arrayMerge(arguments))},GROWTH:function(a,b,c,d){var f;if("undefined"===typeof b)for(b=[],f=1;f<=a.length;f++)b.push(f);if("undefined"===typeof c)for(c=[],f=1;f<=a.length;f++)c.push(f);
"undefined"===typeof d&&(d=!0);var k=a.length,e=0,n=0,l=0,g=0;for(f=0;f<k;f++)var h=b[f],m=Math.log(a[f]),e=e+h,n=n+m,l=l+h*m,g=g+h*h;e/=k;n/=k;l/=k;g/=k;d?(a=(l-e*n)/(g-e*e),e=n-a*e):(a=l/g,e=0);n=[];for(f=0;f<c.length;f++)n.push(Math.exp(e+a*c[f]));return n},HARMEAN:function(){for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=0;d<b;d++)c+=1/a[d];return b/c},HYPGEOMDIST:function(a,b,c,d,f){function k(a,b,c,d){return e.math.COMBIN(c,a)*e.math.COMBIN(d-c,b-a)/e.math.COMBIN(d,b)}function g(a,b,c,d){for(var f=
0,e=0;e<=a;e++)f+=k(e,b,c,d);return f}return f?g(a,b,c,d):k(a,b,c,d)},INTERCEPT:function(a,b){return e.statistic.FORECAST(0,a,b)},KURT:function(){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var a=q.arrayMerge(arguments),b=g.mean(a),c=a.length,d=0,f=0;f<c;f++)d+=Math.pow(a[f]-b,4);d/=Math.pow(g.stdev(a,!0),4);return c*(c+1)/((c-1)*(c-2)*(c-3))*d-3*(c-1)*(c-1)/((c-2)*(c-3))},LARGE:function(a,b){a=q.objectToArray(a);return a.sort(function(a,b){return b-a})[b-1]},LINEST:function(a,b){if("undefined"==
typeof g)return m.ERRKEY.jStatRequired;for(var c=g.mean(b),d=g.mean(a),f=b.length,e=0,u=0,n=0;n<f;n++)e+=(b[n]-c)*(a[n]-d),u+=Math.pow(b[n]-c,2);f=e/u;return[f,d-f*c]},LOGEST:function(){},LOGNORMDIST:function(a,b,c,d){return"undefined"==typeof g?m.ERRKEY.jStatRequired:d?g.lognormal.cdf(a,b,c):g.lognormal.pdf(a,b,c)},LOGNORMINV:function(a,b,c){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.lognormal.inv(a,b,c)},MAX:function(){for(var a=q.arrayMerge(arguments),b=a.length,c=0<b?a[0]:0,d=0;d<b;d++)c=
a[d]>c&&!0!==a[d]&&!1!==a[d]?a[d]:c;return c},MAXA:function(){var a=q.arrayMerge(arguments);return 0<a.length?Math.max.apply(Math,a):0},MEDIAN:function(){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.median(q.arrayMerge(arguments))},MIN:function(){for(var a=q.arrayMerge(arguments),b=a.length,c=0<b?a[0]:0,d=0;d<b;d++)c=a[d]<c&&!0!==a[d]&&!1!==a[d]?a[d]:c;return c},MINA:function(){var a=q.arrayMerge(arguments);return 0<a.length?Math.min.apply(Math,a):0},MODEMULT:function(){for(var a=q.arrayMerge(arguments),
b=a.length,c={},d=[],f=0,e,g=0;g<b;g++)e=a[g],c[e]=c[e]?c[e]+1:1,c[e]>f&&(f=c[e],d=[]),c[e]===f&&(d[d.length]=e);return d},MODESNGL:function(){return e.statistic.MODEMULT(q.arrayMerge(arguments)).sort(function(a,b){return a-b})[0]},NEGBINOMDIST:function(a,b,c,d){return"undefined"==typeof g?m.ERRKEY.jStatRequired:d?g.negbin.cdf(a,b,c):g.negbin.pdf(a,b,c)},NORMDIST:function(a,b,c,d){return"undefined"==typeof g?m.ERRKEY.jStatRequired:isNaN(a)||isNaN(b)||isNaN(c)?"#VALUE!":0>=c?"#NUM!":d?g.normal.cdf(a,
b,c):g.normal.pdf(a,b,c)},NORMINV:function(a,b,c){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.normal.inv(a,b,c)},NORMSDIST:function(a,b){return"undefined"==typeof g?m.ERRKEY.jStatRequired:b?g.normal.cdf(a,0,1):g.normal.pdf(a,0,1)},NORMSINV:function(a){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.normal.inv(a,0,1)},PEARSON:function(a,b){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var c=g.mean(a),d=g.mean(b),f=a.length,e=0,u=0,n=0,l=0;l<f;l++)e+=(a[l]-c)*(b[l]-d),u+=
Math.pow(a[l]-c,2),n+=Math.pow(b[l]-d,2);return e/Math.sqrt(u*n)},PERCENTILEEXC:function(a,b){a=a.sort(function(a,b){return a-b});var c=a.length;if(b<1/(c+1)||b>1-1/(c+1))return"#NUM!";var c=b*(c+1)-1,d=Math.floor(c);return q.cleanFloat(c===d?a[c]:a[d]+(c-d)*(a[d+1]-a[d]))},PERCENTILEINC:function(a,b){a=a.sort(function(a,b){return a-b});var c=b*(a.length-1),d=Math.floor(c);return q.cleanFloat(c===d?a[c]:a[d]+(c-d)*(a[d+1]-a[d]))},PERCENTRANKEXC:function(a,b,c){a=a.sort(function(a,b){return a-b});
var d=q.unique(a),f=a.length,e=d.length;c=Math.pow(10,"undefined"===typeof c?3:c);for(var g=0,n=!1,l=0;!n&&l<e;)b===d[l]?(g=(a.indexOf(d[l])+1)/(f+1),n=!0):b>=d[l]&&(b<d[l+1]||l===e-1)&&(g=(a.indexOf(d[l])+1+(b-d[l])/(d[l+1]-d[l]))/(f+1),n=!0),l++;return Math.floor(g*c)/c},PERCENTRANKINC:function(a,b,c){a=a.sort(function(a,b){return a-b});var d=q.unique(a),f=a.length,e=d.length;c=Math.pow(10,"undefined"===typeof c?3:c);for(var g=0,n=!1,l=0;!n&&l<e;)b===d[l]?(g=a.indexOf(d[l])/(f-1),n=!0):b>=d[l]&&
(b<d[l+1]||l===e-1)&&(g=(a.indexOf(d[l])+(b-d[l])/(d[l+1]-d[l]))/(f-1),n=!0),l++;return Math.floor(g*c)/c},PERMUT:function(a,b){return e.math.FACT(a)/e.math.FACT(a-b)},PERMUTATIONA:function(a,b){return Math.pow(a,b)},PHI:function(a){return Math.exp(-.5*a*a)/m.SQRT2PI},POISSONDIST:function(a,b,c){return"undefined"==typeof g?m.ERRKEY.jStatRequired:c?g.poisson.cdf(a,b):g.poisson.pdf(a,b)},PROB:function(a,b,c,d){if("undefined"===typeof c)return 0;d="undefined"===typeof d?c:d;if(c===d)return 0<=a.indexOf(c)?
b[a.indexOf(c)]:0;for(var f=a.sort(function(a,b){return a-b}),e=f.length,g=0,n=0;n<e;n++)f[n]>=c&&f[n]<=d&&(g+=b[a.indexOf(f[n])]);return g},QUARTILEEXC:function(a,b){switch(b){case 1:return e.statistic.PERCENTILEEXC(a,.25);case 2:return e.statistic.PERCENTILEEXC(a,.5);case 3:return e.statistic.PERCENTILEEXC(a,.75);default:return"#NUM!"}},QUARTILEINC:function(a,b){switch(b){case 1:return e.statistic.PERCENTILEINC(a,.25);case 2:return e.statistic.PERCENTILEINC(a,.5);case 3:return e.statistic.PERCENTILEINC(a,
.75);default:return"#NUM!"}},RANKAVG:function(a,b,c){b=b.sort(("undefined"===typeof c?0:c)?function(a,b){return a-b}:function(a,b){return b-a});c=q.countIn(b,a);return 1<c?(2*b.indexOf(a)+c+1)/2:b.indexOf(a)+1},RANKEQ:function(a,b,c){b=b.sort(("undefined"===typeof c?0:c)?function(a,b){return a-b}:function(a,b){return b-a});return b.indexOf(a)+1},RSQ:function(a,b){return Math.pow(e.statistic.PEARSON(a,b),2)},SKEW:function(){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var a=q.arrayMerge(arguments),
b=g.mean(a),c=a.length,d=0,f=0;f<c;f++)d+=Math.pow(a[f]-b,3);return c*d/((c-1)*(c-2)*Math.pow(g.stdev(a,!0),3))},SKEWP:function(){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var a=q.arrayMerge(arguments),b=g.mean(a),c=a.length,d=0,f=0,e=0;e<c;e++)f+=Math.pow(a[e]-b,3),d+=Math.pow(a[e]-b,2);return f/c/Math.pow(d/c,1.5)},SLOPE:function(a,b){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var c=g.mean(b),d=g.mean(a),f=b.length,e=0,h=0,n=0;n<f;n++)e+=(b[n]-c)*(a[n]-d),h+=Math.pow(b[n]-
c,2);return e/h},SMALL:function(a,b){return a.sort(function(a,b){return a-b})[b-1]},STANDARDIZE:function(a,b,c){return(a-b)/c},STDEVA:function(){for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=g.mean(a),f=0;f<b;f++)c+=Math.pow(a[f]-d,2);return Math.sqrt(c/(b-1))},STDEVP:function(){for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=0,f=e.statistic.AVERAGE(a),k=0;k<b;k++)!0!==a[k]&&!1!==a[k]&&(c+=Math.pow(a[k]-f,2),d++);return Math.sqrt(c/d)},STDEVPA:function(){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;
for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=g.mean(a),f=0;f<b;f++)c+=Math.pow(a[f]-d,2);return Math.sqrt(c/b)},STDEVS:function(){for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=0,f=e.statistic.AVERAGE(a),k=0;k<b;k++)!0!==a[k]&&!1!==a[k]&&(c+=Math.pow(a[k]-f,2),d++);return Math.sqrt(c/(d-1))},STEYX:function(a,b){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var c=g.mean(b),d=g.mean(a),f=b.length,e=0,h=0,n=0,l=0;l<f;l++)e+=Math.pow(a[l]-d,2),h+=(b[l]-c)*(a[l]-d),n+=Math.pow(b[l]-
c,2);return Math.sqrt((e-h*h/n)/(f-2))},TDIST:function(a,b,c){return"undefined"==typeof g?m.ERRKEY.jStatRequired:c?g.studentt.cdf(a,b):g.studentt.pdf(a,b)},TDIST2T:function(){},TDISTRT:function(){},TINV:function(a,b){return"undefined"==typeof g?m.ERRKEY.jStatRequired:g.studentt.inv(a,b)},TINV2T:function(){},TTEST:function(){},TREND:function(){},TRIMMEAN:function(a,b){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;var c=e.math.FLOOR(a.length*b,2)/2;return g.mean(q.initial(q.rest(a.sort(function(a,
b){return a-b}),c),c))},VARA:function(){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=g.mean(a),f=0;f<b;f++)c+=Math.pow(a[f]-d,2);return c/(b-1)},VARP:function(){for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=0,f=e.statistic.AVERAGE(a),k=0;k<b;k++)!0!==a[k]&&!1!==a[k]&&(c+=Math.pow(a[k]-f,2),d++);return c/d},VARPA:function(){if("undefined"==typeof g)return m.ERRKEY.jStatRequired;for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=g.mean(a),
f=0;f<b;f++)c+=Math.pow(a[f]-d,2);return c/b},VARS:function(){for(var a=q.arrayMerge(arguments),b=a.length,c=0,d=0,f=e.statistic.AVERAGE(a),k=0;k<b;k++)!0!==a[k]&&!1!==a[k]&&(c+=Math.pow(a[k]-f,2),d++);return c/(d-1)},WEIBULLDIST:function(a,b,c,d){return d?1-Math.exp(-Math.pow(a/c,b)):Math.pow(a,b-1)*Math.exp(-Math.pow(a/c,b))*b/Math.pow(c,b)},ZTEST:function(a,b,c){var d=a.length;c="undefined"===typeof c?e.statistic.STDEVS(a):c;return 1-e.statistic.NORMSDIST((e.statistic.AVERAGE(a)-b)/(c/Math.sqrt(d)),
e.logical.TRUE)}},logical:{AND:function(){for(var a=!0,b=0;b<arguments.length;b++)arguments[b]||(a=!1);return a},CHOOSE:function(){var a=arguments[0];return"undefined"==typeof arguments[a]?"#NUM!":arguments[a]},FALSE:function(){return!1},IF:function(a,b,c){return a?"undefined"===typeof b?!0:b:"undefined"===typeof c?!0:c},IFERROR:function(a,b){return 0<=m.ERROR.indexOf(a)?b:a},IFNA:function(a,b){return"#N/A"===a?b:a},NOT:function(a){return!a},OR:function(){for(var a=!1,b=0;b<arguments.length;b++)arguments[b]&&
(a=!0);return a},SWITCH:function(){var a;if(0<arguments.length){var b=arguments[0],c=arguments.length-1,d=Math.floor(c/2),f=!1,c=0===c%2?null:arguments[arguments.length-1];if(d)for(var e=0;e<d;e++)if(b==arguments[2*e+1]){a=arguments[2*e+2];f=!0;break}!f&&c&&(a=c)}return a},TRUE:function(){return!0},XOR:function(){for(var a=0,b=0;b<arguments.length;b++)arguments[b]&&a++;return Math.floor(Math.abs(a))&1?!0:!1},NULL:function(){return null}},geometry:{},text:{CONCAT:function(){var a="",b;for(b in arguments)a=
"object"==typeof arguments[b]?a+e.text.CONCAT.apply(this,arguments[b]):a+arguments[b];return a},CHAR:function(a){return String.fromCharCode(a)},CLEAN:function(a){return a.replace(/[\0-\x1F]/g,"")},CODE:function(a){return a.charCodeAt(0)},CONCATENATE:function(){for(var a="",b=0;b<arguments.length;b++)null!==arguments[b]&&void 0!==arguments[b]&&(a+=arguments[b]);return a},DOLLAR:function(a,b){if("undefined"==typeof z)return"#NAME?";b="undefined"===typeof b?2:b;var c="";0>=b?(a=Math.round(a*Math.pow(10,
b))/Math.pow(10,b),c="($0,0)"):0<b&&(c="($0,0."+Array(b+1).join("0")+")");return z(a).format(c)},EXACT:function(a,b){return a===b},FIND:function(a,b,c){return b?b.indexOf(a,("undefined"===typeof c?0:c)-1)+1:null},FIXED:function(a,b,c){if("undefined"==typeof z)return"#NAME?";b="undefined"===typeof b?2:b;c=("undefined"===typeof c?0:c)?"0":"0,0";0>=b?a=Math.round(a*Math.pow(10,b))/Math.pow(10,b):0<b&&(c+="."+Array(b+1).join("0"));return z(a).format(c)},HTML2TEXT:function(a){var b="";a&&(a instanceof
Array?a.forEach(function(a){""!==b&&(b+="\n");b+=a.replace(/<(?:.|\n)*?>/gm,"")}):b=a.replace(/<(?:.|\n)*?>/gm,""));return b},HUMANIZE:function(a){return a instanceof Date?(a=h(a),a.hours()||a.minutes()||a.seconds()?a.format("dddd, MMMM Do YYYY, h:mm:ss"):a.format("dddd, MMMM Do YYYY")):a},JOIN:function(a,b){return a.join(b)},LEFT:function(a,b){return a?a.substring(0,"undefined"===typeof b?1:b):null},LEN:function(a){return(a+"").length},LOWER:function(a){return a?a.toLowerCase():a},MID:function(a,
b,c){return a.substring(b-1,c)},NUMBERVALUE:function(a,b,c){c="undefined"===typeof c?",":c;return Number(a.replace("undefined"===typeof b?".":b,".").replace(c,""))},PROPER:function(a){return a.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()})},REGEXEXTRACT:function(a,b){var c=a.match(new RegExp(b));return c?c[0]:null},REGEXMATCH:function(a,b,c){var d=a.match(new RegExp(b));return c?d:a.match(new RegExp(b))?!0:!1},REGEXREPLACE:function(a,b,c){return a.replace(new RegExp(b),
c)},REPLACE:function(a,b,c,d){return a.substr(0,b-1)+d+a.substr(b-1+c)},REPT:function(a,b){return Array(b+1).join(a)},RIGHT:function(a,b){return a?a.substring(a.length-("undefined"===typeof b?1:b)):null},ROMAN:function(a){a=String(a).split("");for(var b=" C CC CCC CD D DC DCC DCCC CM  X XX XXX XL L LX LXX LXXX XC  I II III IV V VI VII VIII IX".split(" "),c="",d=3;d--;)c=(b[+a.pop()+10*d]||"")+c;return Array(+a.join("")+1).join("M")+c},SEARCH:function(a,b,c){c="undefined"===typeof c?0:c;return b.toLowerCase().indexOf(a.toLowerCase(),
c-1)+1},SPLIT:function(a,b){a=r.trim(a);return a.split(a,b||/\s+/)},SUBSTITUTE:function(a,b,c,d){if(a&&b&&c){if("undefined"===typeof d)return a.replace(new RegExp(b,"g"),c);for(var f=0,e=0;0<a.indexOf(b,f);)if(f=a.indexOf(b,f+1),e++,e===d)return a.substring(0,f)+c+a.substring(f+b.length)}else return a},T:function(a){return"string"===typeof a?a:null},TEXT:function(a,b){if("undefined"==typeof z)return"#NAME?";var c="";if(a)if(a instanceof Object)try{c=JSON.stringify(a)}catch(d){}else"string"===typeof a?
c=b?0<=b.indexOf("0")?z(a).format(b):h(new Date(a)).format(b):a:a.toString&&"function"===typeof a.toString&&(c=a.toString());return c},TRIM:function(a){return r.trim(a)},UNICHAR:function(a){return e.text.CHAR(a)},UNICODE:function(a){return e.text.CODE(a)},UPPER:function(a){return a.toUpperCase()},VALUE:function(a){return"undefined"==typeof z?"#NAME?":z().unformat(a)}},trigonometry:{},general:{VLOOKUP:function(a,b,c,d){var f,e;typeof("object"==b)&&"Object"==b.constructor.name&&(b=q.rangeToTable(b));
e=b.length;f=b[0].length;c-=1;if(c>f-1)return"#REF!";if(0>c)return"#VALUE!";if(0==("undefined"==typeof d?!1:d)){for(f=0;f<e;f++)if(a==b[f][0])return b[f][c];return"#N/A!"}d=[];for(f=0;f<e;f++){if(a==b[f][0])return b[f][c];d[f]=Math.abs(b[f][0]-a);isNaN(d[f])&&(d[f]=-1)}e=d.length;a=null;for(f=0;f<e;f++)0<=d[f]&&(a=null===a?d[f]:a<d[f]?a:d[f]);d=d.indexOf(a);return 0>d?"#N/A!":b[d][c]},HLOOKUP:function(a,b,c,d){typeof("object"==b)&&(b=q.rangeToTable(b));b=q.transposeTable(b);return e.general.VLOOKUP(a,
b,c,d)},LOOKUP:function(a,b,c){var d,f,e=[];c="undefined"==typeof c?!1:c;typeof("object"==b)&&"Object"==b.constructor.name&&(b=q.objectToArray(b),f=b.length);typeof("object"==c)&&"Object"==c.constructor.name&&(c=q.objectToArray(c));if(a<Math.min.apply(Math,b))return"#N/A!";for(d=0;d<f;d++){if(a==b[d])return c?c[d]:b[d];e[d]=a-b[d]}a=e.length;f=Math.max.apply(Math,e);for(d=0;d<a;d++)0>e[d]&&(e[d]=f);a=Math.min.apply(Math,e);d=e.indexOf(a);return c?c[d]:b[d]},SERVER:function(){if(null==this.config.ajaxUrl)return m.ERRKEY.ajaxUrlRequired;
for(var a,b=arguments[0],c={},d=1;d<arguments.length;d++)c["params["+d+"]"]=arguments[d];c["function"]=b;r.ajax({url:this.config.ajaxUrl,method:this.config.ajaxMethod,data:c,async:!1,success:function(b){a=b},error:function(b){a=m.ERRKEY.sendRequestError}});return a},GRAPH:function(a,b){var c={},d=this.getActiveCell().el,f={};b="undefined"==typeof b?[]:b;for(var e,g,n=0;n<b.length;n++)e=b[n].split("="),c[e[0]]=e[1];d.height()||d.css("height","300px");d.width||d.css("width","300px");switch(c.type){case "bar":g=
q.rangeToTable(a);typeof("undefined"!=c.reverse)&&"true"==c.reverse&&g.reverse();f.series={bars:{show:!0,barWidth:.6,align:"center"},stack:!0};"undefined"!=typeof c.bar_orientation&&"horizontal"==c.bar_orientation&&(f.series.bars.horizontal=!0);break;case "pie":g=q.objectToArray(a);f.series={pie:{show:!0,radius:.8}};f.legend={show:!1};break;case "doughnut":case "donut":g=q.objectToArray(a);f.series={pie:{show:!0,innerRadius:.5,radius:.8}};f.legend={show:!1};break;default:g=q.rangeToTable(a),typeof("undefined"!=
c.reverse)&&"true"==c.reverse&&g.reverse()}"undefined"!=typeof c.orientation&&"vertical"==c.orientation&&(g=q.transposeTable(g));if("undefined"!=typeof c.label){e=this.evaluate(c.label);e=q.objectToArray(e);var n=g.length,l,h,m;for(h=0;h<n;h++)for(l=g[h].length,m=0;m<l;m++)a=g[h][m],g[h][m]=[e[m],a];f.xaxis={mode:"categories",tickLength:0}}else for(n=g.length,h=0;h<n;h++)for(l=g[h].length,m=0;m<l;m++)a=g[h][m],g[h][m]="undefined"!=typeof c.bar_orientation&&"horizontal"==c.bar_orientation?[a,m]:[m,
a];if("undefined"!=typeof c.legend){e=this.evaluate(c.legend);e=q.objectToArray(e);n=[];for(l=0;l<g.length;l++)n.push({label:e[l],data:g[l]});g=n}"undefined"!=typeof c.show_x_axis&&"false"==c.show_x_axis&&(f.xaxis=f.xaxis||{},f.xaxis.show=!1);"undefined"!=typeof c.show_y_axis&&"false"==c.show_y_axis&&(f.yaxis=f.yaxis||{},f.yaxis.show=!1);f.grid={backgroundColor:{colors:["#fff","#eee"]},borderWidth:{top:0,right:0,bottom:0,left:0}};setTimeout(function(){r.plot(d,g,f)},100);return!1}},engineering:{BIN2DEC:function(a){if(!q.isValidBinary(a))return"#NUM!";
var b=parseInt(a,2);a=a.toString();return 10===a.length&&"1"===a.substring(0,1)?parseInt(a.substring(1),2)-512:b},BIN2HEX:function(a,b){if(!q.isValidBinary(a))return"#NUM!";var c=a.toString();if(10===c.length&&"1"===c.substring(0,1))return(0xfffffffe00+parseInt(c.substring(1),2)).toString(16);c=parseInt(a,2).toString(16);if("undefined"===typeof b)return c;if(isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";b=Math.floor(b);return b>=c.length?q.repeat("0",b-c.length)+c:"#NUM!"},BIN2OCT:function(a,b){if(!q.isValidBinary(a))return"#NUM!";
var c=a.toString();if(10===c.length&&"1"===c.substring(0,1))return(1073741312+parseInt(c.substring(1),2)).toString(8);c=parseInt(a,2).toString(8);if("undefined"===typeof b)return c;if(isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";b=Math.floor(b);return b>=c.length?q.repeat("0",b-c.length)+c:"#NUM!"},BITAND:function(a,b){a=parseFloat(a,10);b=parseFloat(b,10);return isNaN(a)||isNaN(b)?"#VALUE!":0>a||0>b||Math.floor(a)!==a||Math.floor(b)!==b||0xffffffffffff<a||0xffffffffffff<b?"#NUM!":a&b},BITLSHIFT:function(a,
b){a=parseFloat(a,10);b=parseFloat(b,10);return isNaN(a)||isNaN(b)?"#VALUE!":0>a||Math.floor(a)!==a||0xffffffffffff<a||53<Math.abs(b)?"#NUM!":0<=b?a<<b:a>>-b},BITOR:function(a,b){a=parseFloat(a,10);b=parseFloat(b,10);return isNaN(a)||isNaN(b)?"#VALUE!":0>a||0>b||Math.floor(a)!==a||Math.floor(b)!==b||0xffffffffffff<a||0xffffffffffff<b?"#NUM!":a|b},BITRSHIFT:function(a,b){a=parseFloat(a,10);b=parseFloat(b,10);return isNaN(a)||isNaN(b)?"#VALUE!":0>a||Math.floor(a)!==a||0xffffffffffff<a||53<Math.abs(b)?
"#NUM!":0<=b?a>>b:a<<-b},BITXOR:function(a,b){a=parseFloat(a,10);b=parseFloat(b,10);return isNaN(a)||isNaN(b)?"#VALUE!":0>a||0>b||Math.floor(a)!==a||Math.floor(b)!==b||0xffffffffffff<a||0xffffffffffff<b?"#NUM!":a^b},COMPLEX:function(a,b,c){if(isNaN(a)||isNaN(b))return"#VALUE!";c="undefined"===typeof c?"i":c;return"i"!==c&&"j"!==c?"#VALUE!":0===a&&0===b?0:0===a?1===b?c:b.toString()+c:0===b?a.toString():a.toString()+(0<b?"+":"")+(1===b?c:b.toString()+c)},CONVERT:function(a,b,c){if(isNaN(a))return"#VALUE!";
for(var d=[["a.u. of action","?",null,"action",!1,!1,1.05457168181818E-34],["a.u. of charge","e",null,"electric_charge",!1,!1,1.60217653141414E-19],["a.u. of energy","Eh",null,"energy",!1,!1,4.35974417757576E-18],["a.u. of length","a?",null,"length",!1,!1,5.29177210818182E-11],["a.u. of mass","m?",null,"mass",!1,!1,9.10938261616162E-31],["a.u. of time","?/Eh",null,"time",!1,!1,2.41888432650516E-17],["admiralty knot","admkn",null,"speed",!1,!0,.514773333],["ampere","A",null,"electric_current",!0,!1,
1],["ampere per meter","A/m",null,"magnetic_field_intensity",!0,!1,1],["\u00e5ngstr\u00f6m","\u00c5",["ang"],"length",!1,!0,1E-10],["are","ar",null,"area",!1,!0,100],["astronomical unit","ua",null,"length",!1,!1,1.49597870691667E-11],["bar","bar",null,"pressure",!1,!1,1E5],["barn","b",null,"area",!1,!1,1E-28],["becquerel","Bq",null,"radioactivity",!0,!1,1],["bit","bit",["b"],"information",!1,!0,1],["btu","BTU",["btu"],"energy",!1,!0,1055.05585262],["byte","byte",null,"information",!1,!0,8],["candela",
"cd",null,"luminous_intensity",!0,!1,1],["candela per square metre","cd/m?",null,"luminance",!0,!1,1],["coulomb","C",null,"electric_charge",!0,!1,1],["cubic \u00e5ngstr\u00f6m","ang3",["ang^3"],"volume",!1,!0,1E-30],["cubic foot","ft3",["ft^3"],"volume",!1,!0,.028316846592],["cubic inch","in3",["in^3"],"volume",!1,!0,1.6387064E-5],["cubic light-year","ly3",["ly^3"],"volume",!1,!0,8.46786664623715E-47],["cubic metre","m?",null,"volume",!0,!0,1],["cubic mile","mi3",["mi^3"],"volume",!1,!0,4.16818182544058E9],
["cubic nautical mile","Nmi3",["Nmi^3"],"volume",!1,!0,6352182208],["cubic Pica","Pica3",["Picapt3","Pica^3","Picapt^3"],"volume",!1,!0,7.58660370370369E-8],["cubic yard","yd3",["yd^3"],"volume",!1,!0,.764554857984],["cup","cup",null,"volume",!1,!0,2.365882365E-4],["dalton","Da",["u"],"mass",!1,!1,1.66053886282828E-27],["day","d",["day"],"time",!1,!0,86400],["degree","\u00b0",null,"angle",!1,!1,.0174532925199433],["degrees Rankine","Rank",null,"temperature",!1,!0,.555555555555556],["dyne","dyn",["dy"],
"force",!1,!0,1E-5],["electronvolt","eV",["ev"],"energy",!1,!0,1.60217656514141],["ell","ell",null,"length",!1,!0,1.143],["erg","erg",["e"],"energy",!1,!0,1E-7],["farad","F",null,"electric_capacitance",!0,!1,1],["fluid ounce","oz",null,"volume",!1,!0,2.95735295625E-5],["foot","ft",null,"length",!1,!0,.3048],["foot-pound","flb",null,"energy",!1,!0,1.3558179483314],["gal","Gal",null,"acceleration",!1,!1,.01],["gallon","gal",null,"volume",!1,!0,.003785411784],["gauss","G",["ga"],"magnetic_flux_density",
!1,!0,1],["grain","grain",null,"mass",!1,!0,6.47989E-5],["gram","g",null,"mass",!1,!0,.001],["gray","Gy",null,"absorbed_dose",!0,!1,1],["gross registered ton","GRT",["regton"],"volume",!1,!0,2.8316846592],["hectare","ha",null,"area",!1,!0,1E4],["henry","H",null,"inductance",!0,!1,1],["hertz","Hz",null,"frequency",!0,!1,1],["horsepower","HP",["h"],"power",!1,!0,745.69987158227],["horsepower-hour","HPh",["hh","hph"],"energy",!1,!0,2684519.538],["hour","h",["hr"],"time",!1,!0,3600],["imperial gallon (U.K.)",
"uk_gal",null,"volume",!1,!0,.00454609],["imperial hundredweight","lcwt",["uk_cwt","hweight"],"mass",!1,!0,50.802345],["imperial quart (U.K)","uk_qt",null,"volume",!1,!0,.0011365225],["imperial ton","brton",["uk_ton","LTON"],"mass",!1,!0,1016.046909],["inch","in",null,"length",!1,!0,.0254],["international acre","uk_acre",null,"area",!1,!0,4046.8564224],["IT calorie","cal",null,"energy",!1,!0,4.1868],["joule","J",null,"energy",!0,!0,1],["katal","kat",null,"catalytic_activity",!0,!1,1],["kelvin","K",
["kel"],"temperature",!0,!0,1],["kilogram","kg",null,"mass",!0,!0,1],["knot","kn",null,"speed",!1,!0,.514444444444444],["light-year","ly",null,"length",!1,!0,9460730472580800],["litre","L",["l","lt"],"volume",!1,!0,.001],["lumen","lm",null,"luminous_flux",!0,!1,1],["lux","lx",null,"illuminance",!0,!1,1],["maxwell","Mx",null,"magnetic_flux",!1,!1,1E-18],["measurement ton","MTON",null,"volume",!1,!0,1.13267386368],["meter per hour","m/h",["m/hr"],"speed",!1,!0,2.7777777777778E-4],["meter per second",
"m/s",["m/sec"],"speed",!0,!0,1],["meter per second squared","m?s??",null,"acceleration",!0,!1,1],["parsec","pc",["parsec"],"length",!1,!0,0x6da012f958ee1c],["meter squared per second","m?/s",null,"kinematic_viscosity",!0,!1,1],["metre","m",null,"length",!0,!0,1],["miles per hour","mph",null,"speed",!1,!0,.44704],["millimetre of mercury","mmHg",null,"pressure",!1,!1,133.322],["minute","?",null,"angle",!1,!1,2.90888208665722E-4],["minute","min",["mn"],"time",!1,!0,60],["modern teaspoon","tspm",null,
"volume",!1,!0,5E-6],["mole","mol",null,"amount_of_substance",!0,!1,1],["morgen","Morgen",null,"area",!1,!0,2500],["n.u. of action","?",null,"action",!1,!1,1.05457168181818E-34],["n.u. of mass","m?",null,"mass",!1,!1,9.10938261616162E-31],["n.u. of speed","c?",null,"speed",!1,!1,299792458],["n.u. of time","?/(me?c??)",null,"time",!1,!1,1.28808866778687E-21],["nautical mile","M",["Nmi"],"length",!1,!0,1852],["newton","N",null,"force",!0,!0,1],["\u0153rsted","Oe ",null,"magnetic_field_intensity",!1,
!1,79.5774715459477],["ohm","\u03a9",null,"electric_resistance",!0,!1,1],["ounce mass","ozm",null,"mass",!1,!0,.028349523125],["pascal","Pa",null,"pressure",!0,!1,1],["pascal second","Pa?s",null,"dynamic_viscosity",!0,!1,1],["pferdest\u00e4rke","PS",null,"power",!1,!0,735.49875],["phot","ph",null,"illuminance",!1,!1,1E-4],["pica (1/6 inch)","pica",null,"length",!1,!0,3.5277777777778E-4],["pica (1/72 inch)","Pica",["Picapt"],"length",!1,!0,.00423333333333333],["poise","P",null,"dynamic_viscosity",
!1,!1,.1],["pond","pond",null,"force",!1,!0,.00980665],["pound force","lbf",null,"force",!1,!0,4.4482216152605],["pound mass","lbm",null,"mass",!1,!0,.45359237],["quart","qt",null,"volume",!1,!0,9.46352946E-4],["radian","rad",null,"angle",!0,!1,1],["second","?",null,"angle",!1,!1,4.84813681109536E-6],["second","s",["sec"],"time",!0,!0,1],["short hundredweight","cwt",["shweight"],"mass",!1,!0,45.359237],["siemens","S",null,"electrical_conductance",!0,!1,1],["sievert","Sv",null,"equivalent_dose",!0,
!1,1],["slug","sg",null,"mass",!1,!0,14.59390294],["square \u00e5ngstr\u00f6m","ang2",["ang^2"],"area",!1,!0,1E-20],["square foot","ft2",["ft^2"],"area",!1,!0,.09290304],["square inch","in2",["in^2"],"area",!1,!0,6.4516E-4],["square light-year","ly2",["ly^2"],"area",!1,!0,8.95054210748189E31],["square meter","m?",null,"area",!0,!0,1],["square mile","mi2",["mi^2"],"area",!1,!0,2589988.110336],["square nautical mile","Nmi2",["Nmi^2"],"area",!1,!0,3429904],["square Pica","Pica2",["Picapt2","Pica^2",
"Picapt^2"],"area",!1,!0,1.792111111111E-5],["square yard","yd2",["yd^2"],"area",!1,!0,.83612736],["statute mile","mi",null,"length",!1,!0,1609.344],["steradian","sr",null,"solid_angle",!0,!1,1],["stilb","sb",null,"luminance",!1,!1,1E-4],["stokes","St",null,"kinematic_viscosity",!1,!1,1E-4],["stone","stone",null,"mass",!1,!0,6.35029318],["tablespoon","tbs",null,"volume",!1,!0,1.47868E-5],["teaspoon","tsp",null,"volume",!1,!0,4.92892E-6],["tesla","T",null,"magnetic_flux_density",!0,!0,1],["thermodynamic calorie",
"c",null,"energy",!1,!0,4.184],["ton","ton",null,"mass",!1,!0,907.18474],["tonne","t",null,"mass",!1,!1,1E3],["U.K. pint","uk_pt",null,"volume",!1,!0,5.6826125E-4],["U.S. bushel","bushel",null,"volume",!1,!0,.03523907],["U.S. oil barrel","barrel",null,"volume",!1,!0,.158987295],["U.S. pint","pt",["us_pt"],"volume",!1,!0,4.73176473E-4],["U.S. survey mile","survey_mi",null,"length",!1,!0,1609.347219],["U.S. survey/statute acre","us_acre",null,"area",!1,!0,4046.87261],["volt","V",null,"voltage",!0,!1,
1],["watt","W",null,"power",!0,!0,1],["watt-hour","Wh",["wh"],"energy",!1,!0,3600],["weber","Wb",null,"magnetic_flux",!0,!1,1],["yard","yd",null,"length",!1,!0,.9144],["year","yr",null,"time",!1,!0,31557600]],f={Yi:["yobi",80,1.2089258196146292E24,"Yi","yotta"],Zi:["zebi",70,1.1805916207174113E21,"Zi","zetta"],Ei:["exbi",60,0x1000000000000000,"Ei","exa"],Pi:["pebi",50,0x4000000000000,"Pi","peta"],Ti:["tebi",40,1099511627776,"Ti","tera"],Gi:["gibi",30,1073741824,"Gi","giga"],Mi:["mebi",20,1048576,
"Mi","mega"],ki:["kibi",10,1024,"ki","kilo"]},e={Y:["yotta",1E24,"Y"],Z:["zetta",1E21,"Z"],E:["exa",1E18,"E"],P:["peta",1E15,"P"],T:["tera",1E12,"T"],G:["giga",1E9,"G"],M:["mega",1E6,"M"],k:["kilo",1E3,"k"],h:["hecto",100,"h"],e:["dekao",10,"e"],d:["deci",.1,"d"],c:["centi",.01,"c"],m:["milli",.001,"m"],u:["micro",1E-6,"u"],n:["nano",1E-9,"n"],p:["pico",1E-12,"p"],f:["femto",1E-15,"f"],a:["atto",1E-18,"a"],z:["zepto",1E-21,"z"],y:["yocto",1E-24,"y"]},g=null,n=null,h=b,p=c,m=1,q=1,r,s=0;s<d.length;s++){r=
null===d[s][2]?[]:d[s][2];if(d[s][1]===h||0<=r.indexOf(h))g=d[s];if(d[s][1]===p||0<=r.indexOf(p))n=d[s]}if(null===g)for(r=f[b.substring(0,2)],s=e[b.substring(0,1)],"da"===b.substring(0,2)&&(s=["dekao",10,"da"]),r?(m=r[2],h=b.substring(2)):s&&(m=s[1],h=b.substring(s[2].length)),b=0;b<d.length;b++)if(r=null===d[b][2]?[]:d[b][2],d[b][1]===h||0<=r.indexOf(h))g=d[b];if(null===n)for(f=f[c.substring(0,2)],e=e[c.substring(0,1)],"da"===c.substring(0,2)&&(e=["dekao",10,"da"]),f?(q=f[2],p=c.substring(2)):e&&
(q=e[1],p=c.substring(e[2].length)),c=0;c<d.length;c++)if(r=null===d[c][2]?[]:d[c][2],d[c][1]===p||0<=r.indexOf(p))n=d[c];return null===g||null===n||g[3]!==n[3]?"#N/A":a*g[6]*m/(n[6]*q)},DEC2BIN:function(a,b){if(isNaN(a))return"#VALUE!";if(!/^-?[0-9]{1,3}$/.test(a)||-512>a||511<a)return"#NUM!";if(0>a)return"1"+q.repeat("0",9-(512+a).toString(2).length)+(512+a).toString(2);var c=parseInt(a,10).toString(2);if("undefined"===typeof b)return c;if(isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";b=Math.floor(b);
return b>=c.length?q.repeat("0",b-c.length)+c:"#NUM!"},DEC2HEX:function(a,b){if(isNaN(a))return"#VALUE!";if(!/^-?[0-9]{1,12}$/.test(a)||-549755813888>a||549755813887<a)return"#NUM!";if(0>a)return(1099511627776+a).toString(16);var c=parseInt(a,10).toString(16);if("undefined"===typeof b)return c;if(isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";b=Math.floor(b);return b>=c.length?q.repeat("0",b-c.length)+c:"#NUM!"},DEC2OCT:function(a,b){if(isNaN(a))return"#VALUE!";if(!/^-?[0-9]{1,9}$/.test(a)||-536870912>
a||536870911<a)return"#NUM!";if(0>a)return(1073741824+a).toString(8);var c=parseInt(a,10).toString(8);if("undefined"===typeof b)return c;if(isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";b=Math.floor(b);return b>=c.length?q.repeat("0",b-c.length)+c:"#NUM!"},DELTA:function(a,b){b="undefined"===typeof b?0:b;return isNaN(a)||isNaN(b)?"#VALUE!":a===b?1:0},ERF:function(a,b){b="undefined"===typeof b?0:b;return isNaN(a)||isNaN(b)?"#VALUE!":g.erf(a)},ERFC:function(a){return isNaN(a)?"#VALUE!":g.erfc(a)},ERFCPRECISE:function(){},
ERFPRECISE:function(){},GESTEP:function(a,b){b="undefined"===typeof b?0:b;return isNaN(a)||isNaN(b)?"#VALUE!":a>=b?1:0},HEX2BIN:function(a,b){if(!/^[0-9A-Fa-f]{1,10}$/.test(a))return"#NUM!";var c=10===a.length&&"f"===a.substring(0,1).toLowerCase()?!0:!1,d=c?parseInt(a,16)-1099511627776:parseInt(a,16);if(-512>d||511<d)return"#NUM!";if(c)return"1"+q.repeat("0",9-(512+d).toString(2).length)+(512+d).toString(2);c=d.toString(2);if("undefined"===typeof b)return c;if(isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";
b=Math.floor(b);return b>=c.length?q.repeat("0",b-c.length)+c:"#NUM!"},HEX2DEC:function(a){if(!/^[0-9A-Fa-f]{1,10}$/.test(a))return"#NUM!";a=parseInt(a,16);return 549755813888<=a?a-1099511627776:a},HEX2OCT:function(a,b){if(!/^[0-9A-Fa-f]{1,10}$/.test(a))return"#NUM!";var c=parseInt(a,16);if(536870911<c&&0xffe0000000>c)return"#NUM!";if(0xffe0000000<=c)return(c-0xffc0000000).toString(8);c=c.toString(8);if("undefined"===typeof b)return c;if(isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";b=Math.floor(b);
return b>=c.length?q.repeat("0",b-c.length)+c:"#NUM!"},IMABS:function(a){var b=e.engineering.IMREAL(a);a=e.engineering.IMAGINARY(a);return"#NUM!"===b||"#NUM!"===a?"#NUM!":Math.sqrt(Math.pow(b,2)+Math.pow(a,2))},IMAGINARY:function(a){if(0===a||"0"===a)return 0;if(0<=["i","j"].indexOf(a))return 1;a=a.replace("+i","+1i").replace("-i","-1i").replace("+j","+1j").replace("-j","-1j");var b=a.indexOf("+"),c=a.indexOf("-");0===b&&(b=a.indexOf("+",1));0===c&&(c=a.indexOf("-",1));var d=a.substring(a.length-
1,a.length),d="i"===d||"j"===d;return 0<=b||0<=c?d?0<=b?isNaN(a.substring(0,b))||isNaN(a.substring(b+1,a.length-1))?"#NUM!":Number(a.substring(b+1,a.length-1)):isNaN(a.substring(0,c))||isNaN(a.substring(c+1,a.length-1))?"#NUM!":-Number(a.substring(c+1,a.length-1)):"#NUM!":d?isNaN(a.substring(0,a.length-1))?"#NUM!":a.substring(0,a.length-1):isNaN(a)?"#NUM!":0},IMARGUMENT:function(a){var b=e.engineering.IMREAL(a);a=e.engineering.IMAGINARY(a);return"#NUM!"===b||"#NUM!"===a?"#NUM!":0===b&&0===a?"#DIV/0!":
0===b&&0<a?Math.PI/2:0===b&&0>a?-Math.PI/2:0===a&&0<b?0:0===a&&0>b?-Math.PI:0<b?Math.atan(a/b):0>b&&0<=a?Math.atan(a/b)+Math.PI:Math.atan(a/b)-Math.PI},IMCONJUGATE:function(a){var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a),d=a.substring(a.length-1);return"#NUM!"===b||"#NUM!"===c?"#NUM!":0!==c?e.engineering.COMPLEX(b,-c,"i"===d||"j"===d?d:"i"):a},IMCOS:function(a){if(!0===a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);a=a.substring(a.length-1);a="i"===
a||"j"===a?a:"i";return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.COMPLEX(Math.cos(b)*(Math.exp(c)+Math.exp(-c))/2,-Math.sin(b)*(Math.exp(c)-Math.exp(-c))/2,a)},IMCOSH:function(a){if(!0===a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);a=a.substring(a.length-1);a="i"===a||"j"===a?a:"i";return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.COMPLEX(Math.cos(c)*(Math.exp(b)+Math.exp(-b))/2,Math.sin(c)*(Math.exp(b)-Math.exp(-b))/2,a)},IMCOT:function(a){if(!0===
a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.IMDIV(e.engineering.IMCOS(a),e.engineering.IMSIN(a))},IMCSC:function(a){if(!0===a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.IMDIV("1",e.engineering.IMSIN(a))},IMCSCH:function(a){if(!0===a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);
return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.IMDIV("1",e.engineering.IMSINH(a))},IMDIV:function(a,b){var c=e.engineering.IMREAL(a),d=e.engineering.IMAGINARY(a),f=e.engineering.IMREAL(b),k=e.engineering.IMAGINARY(b),g=a.substring(a.length-1),n=a.substring(a.length-1),h="i";"j"===g?h="j":"j"===n&&(h="j");if("#NUM!"===c||"#NUM!"===d||"#NUM!"===f||"#NUM!"===k||0===f&&0===k)return"#NUM!";g=f*f+k*k;return e.engineering.COMPLEX((c*f+d*k)/g,(d*f-c*k)/g,h)},IMEXP:function(a){var b=e.engineering.IMREAL(a),
c=e.engineering.IMAGINARY(a);a=a.substring(a.length-1);a="i"===a||"j"===a?a:"i";if("#NUM!"===b||"#NUM!"===c)return"#NUM!";b=Math.exp(b);return e.engineering.COMPLEX(b*Math.cos(c),b*Math.sin(c),a)},IMLN:function(a){var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);a=a.substring(a.length-1);a="i"===a||"j"===a?a:"i";return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.COMPLEX(Math.log(Math.sqrt(b*b+c*c)),Math.atan(c/b),a)},IMLOG10:function(a){var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);
a=a.substring(a.length-1);a="i"===a||"j"===a?a:"i";return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.COMPLEX(Math.log(Math.sqrt(b*b+c*c))/Math.log(10),Math.atan(c/b)/Math.log(10),a)},IMLOG2:function(a){var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);a=a.substring(a.length-1);a="i"===a||"j"===a?a:"i";return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.COMPLEX(Math.log(Math.sqrt(b*b+c*c))/Math.log(2),Math.atan(c/b)/Math.log(2),a)},IMPOWER:function(a,b){if(isNaN(b))return"#VALUE!";var c=
e.engineering.IMREAL(a),d=e.engineering.IMAGINARY(a),f=a.substring(a.length-1),f="i"===f||"j"===f?f:"i";if("#NUM!"===c||"#NUM!"===d)return"#NUM!";c=Math.pow(e.engineering.IMABS(a),b);d=e.engineering.IMARGUMENT(a);return e.engineering.COMPLEX(c*Math.cos(b*d),c*Math.sin(b*d),f)},IMPRODUCT:function(){for(var a=arguments[0],b=1;b<arguments.length;b++){var c=e.engineering.IMREAL(a),a=e.engineering.IMAGINARY(a),d=e.engineering.IMREAL(arguments[b]),f=e.engineering.IMAGINARY(arguments[b]);if("#NUM!"===c||
"#NUM!"===a||"#NUM!"===d||"#NUM!"===f)return"#NUM!";a=e.engineering.COMPLEX(c*d-a*f,c*f+a*d)}return a},IMREAL:function(a){if(0===a||"0"===a||0<="i +i 1i +1i -i -1i j +j 1j +1j -j -1j".split(" ").indexOf(a))return 0;var b=a.indexOf("+"),c=a.indexOf("-");0===b&&(b=a.indexOf("+",1));0===c&&(c=a.indexOf("-",1));var d=a.substring(a.length-1,a.length),d="i"===d||"j"===d;return 0<=b||0<=c?d?0<=b?isNaN(a.substring(0,b))||isNaN(a.substring(b+1,a.length-1))?"#NUM!":Number(a.substring(0,b)):isNaN(a.substring(0,
c))||isNaN(a.substring(c+1,a.length-1))?"#NUM!":Number(a.substring(0,c)):"#NUM!":d?isNaN(a.substring(0,a.length-1))?"#NUM!":0:isNaN(a)?"#NUM!":a},IMSEC:function(a){if(!0===a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.IMDIV("1",e.engineering.IMCOS(a))},IMSECH:function(a){if(!0===a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.IMDIV("1",
e.engineering.IMCOSH(a))},IMSIN:function(a){if(!0===a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);a=a.substring(a.length-1);a="i"===a||"j"===a?a:"i";return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.COMPLEX(Math.sin(b)*(Math.exp(c)+Math.exp(-c))/2,Math.cos(b)*(Math.exp(c)-Math.exp(-c))/2,a)},IMSINH:function(a){if(!0===a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);a=a.substring(a.length-1);a="i"===a||"j"===a?a:"i";return"#NUM!"===
b||"#NUM!"===c?"#NUM!":e.engineering.COMPLEX(Math.cos(c)*(Math.exp(b)-Math.exp(-b))/2,Math.sin(c)*(Math.exp(b)+Math.exp(-b))/2,a)},IMSQRT:function(a){var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a),d=a.substring(a.length-1),d="i"===d||"j"===d?d:"i";if("#NUM!"===b||"#NUM!"===c)return"#NUM!";b=Math.sqrt(e.engineering.IMABS(a));a=e.engineering.IMARGUMENT(a);return e.engineering.COMPLEX(b*Math.cos(a/2),b*Math.sin(a/2),d)},IMSUB:function(a,b){var c=e.engineering.IMREAL(a),d=e.engineering.IMAGINARY(a),
f=e.engineering.IMREAL(b),k=e.engineering.IMAGINARY(b),g=a.substring(a.length-1),n=a.substring(a.length-1),h="i";"j"===g?h="j":"j"===n&&(h="j");return"#NUM!"===c||"#NUM!"===d||"#NUM!"===f||"#NUM!"===k?"#NUM!":e.engineering.COMPLEX(c-f,d-k,h)},IMSUM:function(){for(var a=arguments[0],b=1;b<arguments.length;b++){var c=e.engineering.IMREAL(a),a=e.engineering.IMAGINARY(a),d=e.engineering.IMREAL(arguments[b]),f=e.engineering.IMAGINARY(arguments[b]);if("#NUM!"===c||"#NUM!"===a||"#NUM!"===d||"#NUM!"===f)return"#NUM!";
a=e.engineering.COMPLEX(c+d,a+f)}return a},IMTAN:function(a){if(!0===a||!1===a)return"#VALUE!";var b=e.engineering.IMREAL(a),c=e.engineering.IMAGINARY(a);return"#NUM!"===b||"#NUM!"===c?"#NUM!":e.engineering.IMDIV(e.engineering.IMSIN(a),e.engineering.IMCOS(a))},OCT2BIN:function(a,b){if(!/^[0-7]{1,10}$/.test(a))return"#NUM!";var c=10===a.length&&"7"===a.substring(0,1)?!0:!1,d=c?parseInt(a,8)-1073741824:parseInt(a,8);if(-512>d||511<d)return"#NUM!";if(c)return"1"+q.repeat("0",9-(512+d).toString(2).length)+
(512+d).toString(2);c=d.toString(2);if("undefined"===typeof b)return c;if(isNaN(b))return"#VALUE!";if(0>b)return"#NUM!";b=Math.floor(b);return b>=c.length?q.repeat("0",b-c.length)+c:"#NUM!"},OCT2DEC:function(a){if(!/^[0-7]{1,10}$/.test(a))return"#NUM!";a=parseInt(a,8);return 536870912<=a?a-1073741824:a},OCT2HEX:function(a,b){if(!/^[0-7]{1,10}$/.test(a))return"#NUM!";var c=parseInt(a,8);if(536870912<=c)return"ff"+(c+3221225472).toString(16);c=c.toString(16);if("undefined"===typeof b)return c;if(isNaN(b))return"#VALUE!";
if(0>b)return"#NUM!";b=Math.floor(b);return b>=c.length?q.repeat("0",b-c.length)+c:"#NUM!"}},user_defined:{}},q={toChr:function(a){var b="";for(a-=1;0<=a;)b=String.fromCharCode(a%26+97)+b,a=Math.floor(a/26)-1;return b.toUpperCase()},toNum:function(a){a=a.split("");var b="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),c,d,f=0;c=0;for(d=a.length-1;c<a.length;c+=1,d-=1)f+=Math.pow(b.length,d)*(b.indexOf(a[c])+1);return f},cellRange:function(a,b){var c=/[A-Z]+/,d=/[0-9]+/,f=a.toUpperCase(),e=b.toUpperCase(),g=
this.toNum(f.match(c)[0]),c=this.toNum(e.match(c)[0]),f=parseInt(f.match(d)[0],10),d=parseInt(e.match(d)[0],10),e=[],h,l;if(g<c)for(l=g;l<=c;l++)if(f<d)for(h=f;h<=d;h++)g=this.toChr(l)+h,e.push(g);else for(h=f;h>=d;h--)g=this.toChr(l)+h,e.push(g);else for(l=g;l>=c;l--)if(f<d)for(h=f;h<=d;h++)g=this.toChr(l)+h,e.push(g);else for(h=f;h>=d;h--)g=this.toChr(l)+h,e.push(g);return e},isValidBinary:function(a){return/^[01]{1,10}$/.test(a)},strRepeat:function(a,b){if(1>b)return"";for(var c="";0<b;)b&1&&(c+=
a),b>>=1,a+=a;return c},repeat:function(a,b,c){if(null==a)return"";b=~~b;if(null==c)return this.strRepeat(String(a),b);for(var d=[];0<b;d[--b]=a);return d.join(c)},unique:function(a){return a.reduce(function(a,c){0>a.indexOf(c)&&a.push(c);return a},[])},initial:function(a,b,c){return Array.prototype.slice.call(a,0,Math.max(0,a.length-(null==b||c?1:b)))},rest:function(a,b,c){return Array.prototype.slice.call(a,null==b||c?1:b)},arrayMerge:function(a){var b,c,d=[];for(c=0;c<a.length;c++)if("object"==
typeof a[c])for(b in a[c])""!==r.trim(a[c][b])&&(d=d.concat(a[c][b]));else""!==r.trim(d.concat(a[c]))&&(d=d.concat(a[c]));return d},toArray:function(a){return Array.prototype.slice.call(a,0)},objectToArray:function(a){var b=[],c;for(c in a)b.push(a[c]);return b},trimEmptyCell:function(a){var b={},c;for(c in a)""!==r.trim(a[c])&&(b[c]=a[c]);return b},cleanFloat:function(a){var b=Math.pow(10,14);return Math.round(a*b)/b},countIn:function(a,b){for(var c=0,d=0;d<a.length;d++)a[d]===b&&c++;return c},rangeToTable:function(a){var b,
c,d=0,f=/[A-Z]+/,e=/[0-9]+/,g=[],h=[];for(b in a)c=this.toNum(b.match(f)[0])-1,d=parseInt(b.match(e)[0],10)-1,"undefined"==typeof g[d]&&(g[d]=[]),g[d][c]=a[b];a=0;b=g.length;for(d=0;d<b;d++)if("undefined"!=typeof g[d]){f=g[d].length;"undefined"==typeof h[a]&&(h[a]=[]);for(c=0;c<f;c++)"undefined"!=typeof g[d][c]&&h[a].push(g[d][c]);a++}return h},transposeTable:function(a){var b,c,d,f,e;d=a.length;e=[];for(b=0;b<d;b++)for(f=a[b].length,c=0;c<f;c++)"undefined"==typeof e[c]&&(e[c]=[]),e[c].push(a[b][c]);
return e}},m={MEMOIZED_FACT:[],SQRT2PI:2.5066282746310002,WEEK_STARTS:[void 0,0,1,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,1,2,3,4,5,6,0],WEEK_TYPES:[[],[1,2,3,4,5,6,7],[7,1,2,3,4,5,6],[6,0,1,2,3,4,5],[],[],[],[],[],[],[],[7,1,2,3,4,5,6],[6,7,1,2,3,4,5],[5,6,7,1,2,3,4],[4,5,6,7,1,2,3],[3,4,5,6,7,1,2],[2,3,4,5,6,7,1],[1,2,3,4,5,6,7]],WEEKEND_TYPES:[[],[6,0],[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],void 0,void 0,void 0,[0],[1],[2],[3],[4],[5],[6]],DAY_NAME:"Sunday Monday Thuesday Wednesday Thursday Friday Saturday".split(" "),
ERROR:"#DIV/0! #N/A #NAME? #NUM! #NULL! #REF! #VALUE! #ERROR! #ERROR_MOMENT_JS_REQUIRED! #ERROR_JSTAT_JS_REQUIRED! #ERROR_AJAX_URL_REQUIRED! #ERROR_SEND_REQUEST! #UNDEFINED_VARIABLE!".split(" "),ERRKEY:{jStatRequired:"#ERROR_JSTAT_JS_REQUIRED!",momentRequired:"#ERROR_MOMENT_JS_REQUIRED!",ajaxUrlRequired:"#ERROR_AJAX_URL_REQUIRED!",sendRequestError:"#ERROR_SEND_REQUEST!"},VARIABLE:{},SELF_RENDER_FORMULA:["GRAPH"]};v.fx=v.prototype;v.fx.init=function(){var a=this.el?this.el.attr("data-cell"):"",b=this.el?
this.el.attr("data-formula"):"",c=this.el?this.el.attr("data-format"):!1,d=this.el?this.el.val():null,f=this.el.prop("tagName").toLowerCase();a&&""!=r.trim(a)?a=a.toUpperCase():(a="CALX"+this.sheet.counter,this.el&&this.el.attr("data-cell",a),this.sheet.counter++);b=b&&""!=r.trim(b)?b.replace("&quot;",'"').replace("&#39;","'").replace("&#34;",'"'):!1;"input"!=f||"checkbox"!=this.el.attr("type")&&"radio"!=this.el.attr("type")||(d=this.el.attr("data-unchecked"),d="undefined"==typeof d?"":d,d=this.el.prop("checked")?
this.el.val():d,this.isCheckbox=!0);-1==this.formTags.indexOf(f)&&(d=this.el.text());if(!1===c||"undefined"===typeof c)c=this.sheet.config.defaultFormat;this.formula=b;this.format=c;this.address=a;this.setValue(d);""!=r.trim(d)&&r.isNumeric(d)&&this.renderComputedValue()};v.fx.calculate=function(a,b){a="undefined"==typeof a?!0:a;b="undefined"==typeof b?!0:b;this.sheet.clearAffectedCell();this.sheet.config.autoCalculate&&a&&"function"==typeof this.sheet.config.onBeforeCalculate&&this.sheet.config.onBeforeCalculate.call(this.sheet);
s.isCalculating=!0;this.evaluateFormula();for(var c in this.dependant)this.dependant[c].processDependant();for(c in this.sheet.dependant)this.sheet.dependant[c].calculate(!1,!1);s.isCalculating=!1;if(this.sheet.hasRelatedSheet())for(c in this.sheet.cells)this.sheet.cells[c].hasRemoteDependency()&&(this.sheet.cells[c].evaluateFormula(),this.sheet.cells[c].processDependant(),this.sheet.cells[c].renderComputedValue());this.sheet.config.autoCalculate&&a&&"function"==typeof this.sheet.config.onAfterCalculate&&
this.sheet.config.onAfterCalculate.call(this.sheet);this.sheet.config.autoCalculate&&a&&"function"==typeof this.sheet.config.onBeforeRender&&this.sheet.config.onBeforeRender.call(this.sheet);b&&this.renderComputedValue();this.sheet.config.autoCalculate&&a&&"function"==typeof this.sheet.config.onAfterRender&&this.sheet.config.onAfterRender.call(this.sheet);return this};v.fx.buildDependency=function(){var a={remoteCellRange:/\#[A-Za-z0-9_]+\s*!\s*[A-Za-z]+[0-9]+\s*:\s*[A-Za-z]+[0-9]+/g,remoteCell:/\#[A-Za-z0-9_]+\s*!\s*[A-Za-z]+[0-9]+/g,
cellRange:/[A-Za-z]+[0-9]+\s*:\s*[A-Za-z]+[0-9]+/g,cell:/[A-Z]+[0-9]+/g},b=this.formula,c="#"+this.sheet.el.attr("id"),d=this.address,f,e,g,h,l,m,q;for(e in this.dependencies)-1===e.indexOf("#")?this.dependencies[e].removeDependant(d):this.dependencies[e].removeDependant(c+"!"+d),delete this.dependencies[e];if(b)for(e in a)if(l=b.match(a[e]),b=b.replace(a[e],""),null!==l)switch(e){case "remoteCellRange":for(d=0;d<l.length;d++){f=l[d].split("!");m=r.trim(f[0]);h=f[1].split(":");f=r.trim(h[0]);h=r.trim(h[1]);
f=this.sheet.getRemoteCellRange(m,f,h);q=r(m).attr("data-calx-identifier");if("undefined"==typeof q||"undefined"==typeof s.sheetRegistry[q])r(m).calx(),q=r(m).attr("data-calx-identifier");"undefined"!=typeof q&&"undefined"!=typeof s.sheetRegistry[q]&&(s.sheetRegistry[q].registerDependant(this.sheet),this.sheet.registerDependency(s.sheetRegistry[q]));for(g in f)h=m+"!"+g,"undefined"==typeof this.dependencies[h]&&!1!==f[g]&&(this.hasRemoteDependency(!0),this.dependencies[h]=f[g],f[g].registerDependant(c+
"!"+this.getAddress(),this))}break;case "remoteCell":for(d=0;d<l.length;d++)f=l[d].split("!"),m=r.trim(f[0]),h=r.trim(f[1]),f=this.sheet.getRemoteCell(m,h),q=r(m).attr("data-calx-identifier"),"undefined"!=typeof q&&"undefined"!=typeof s.sheetRegistry[q]||r(m).calx(),"undefined"!=typeof q&&"undefined"!=typeof s.sheetRegistry[q]&&(s.sheetRegistry[q].registerDependant(this.sheet),this.sheet.registerDependency(s.sheetRegistry[q])),h=m+"!"+h,"undefined"==typeof this.dependencies[h]&&!1!==f&&(this.hasRemoteDependency(!0),
this.dependencies[h]=f,f.registerDependant(c+"!"+this.getAddress(),this));break;case "cellRange":for(d=0;d<l.length;d++)for(g in h=l[d].split(":"),f=r.trim(h[0]),h=r.trim(h[1]),f=this.sheet.getCellRange(f,h),f)"undefined"==typeof this.dependencies[g]&&!1!==f[g]&&(this.dependencies[g]=f[g],f[g].registerDependant(this.getAddress(),this));break;case "cell":for(d=0;d<l.length;d++)h=l[d],f=this.sheet.getCell(h),"undefined"==typeof this.dependencies[h]&&!1!==f&&(this.dependencies[h]=f,f.registerDependant(this.getAddress(),
this))}return this};v.fx.removeDependency=function(a){"undefined"!=typeof this.dependencies[a]&&delete this.dependencies[a]};v.fx.processDependency=function(){if(0==this.isProcessed()){for(var a in this.dependencies)0==this.dependencies[a].isProcessed()&&this.dependencies[a].processDependency();this.evaluateFormula();this.setProcessed(!0);-1==this.sheet.affectedCell.indexOf(this.address)&&this.sheet.affectedCell.push(this.address)}};v.fx.registerDependant=function(a,b){"undefined"==typeof this.dependant[a]&&
b&&(this.dependant[a]=b)};v.fx.removeDependant=function(a){"undefined"!=typeof this.dependant[a]&&delete this.dependant[a]};v.fx.processDependant=function(){var a;if(!1===this.isProcessed()||!0===s.isCalculating){this.processDependency();for(var b in this.dependant)if(!this.dependant[b].isProcessed()&&(a=this.dependant[b].processDependant(),!1===a))return a;this.setAffected(!1);this.setProcessed(!0);-1==this.sheet.affectedCell.indexOf(this.address)&&this.sheet.affectedCell.push(this.address)}else return!1};
v.fx.hasRemoteDependency=function(a){if("undefined"==typeof a)return this.remoteDependency;this.remoteDependency=a};v.fx.renderComputedValue=function(){if(this.formula&&"graph"==this.formula.substring(0,5).toLowerCase())return this;if(!1!==this.el){var a=this.el.prop("tagName").toLowerCase(),b=-1<this.formTags.indexOf(a),c=this.formula?this.computedValue:this.value,d=""!=this.format&&"undefined"!=typeof z&&""!==c&&!1!==c&&null!==c&&-1==m.ERROR.indexOf(c)&&r.isNumeric(c)?z(c).format(this.format):c;
b?this.isCheckbox?this.el.prop("checked",c==this.el.val()):"select"==a?this.el.val(c):"input"!=a&&"textarea"!=a||this.el.val(d):this.el.html(d)}"function"==typeof this.conditionalStyle&&(a=this.conditionalStyle.apply(null,[this.getValue(),this.el]),"object"==typeof a&&this.el.css(a));return this};v.fx.resyncValue=function(){if(!1!==this.el){var a=this.el.prop("tagName").toLowerCase(),a=-1<this.formTags.indexOf(a)?this.el.val():this.el.text();this.isCheckbox&&!this.el.prop("checked")&&(a=this.el.attr("data-unchecked-value")||
"");this.setValue(a)}};v.fx.resyncFormula=function(){this.el&&this.el.attr("data-formula")!=this.formula&&(this.formula=this.el.attr("data-formula"),this.buildDependency())};v.fx.checkCircularReference=function(a){var b,c=!1;"undefined"==typeof a&&(a=this.getAddress());if(!1!==this.formula){for(b in this.dependencies)if(c=c||b==a)return!0;for(b in this.dependencies)if(c=c||this.dependencies[b].checkCircularReference(a))return!0}return c};v.fx.evaluateFormula=function(){if(this.formula)try{return this.sheet.setActiveCell(this),
this.computedValue=this.sheet.evaluate(this.formula)}catch(a){this.computedValue="#ERROR!"}return!1};v.fx.formTags=["input","select","textarea","button"];v.fx.setConditionalStyle=function(a){"function"==typeof a&&(this.conditionalStyle=a)};v.fx.setFormat=function(a){this.format=a;!1!==this.el&&(this.el.attr("data-format",a),this.renderComputedValue());-1==this.sheet.affectedCell.indexOf(this.address)&&this.sheet.affectedCell.push(this.address);return this};v.fx.getFormat=function(){return this.format};
v.fx.setFormula=function(a){if("string"!==typeof a)return!1;this.formula=a;!1!==this.el&&this.el.attr("data-formula",a);this.buildDependency();-1==this.sheet.affectedCell.indexOf(this.address)&&this.sheet.affectedCell.push(this.address);return this};v.fx.getFormula=function(){return this.formula};v.fx.getAddress=function(){return this.address};v.fx.getFormattedValue=function(){var a=this.formula?this.computedValue:this.value;return""!=this.format&&"undefined"!=typeof z&&""!==a&&!1!==a&&null!==a&&
-1==m.ERROR.indexOf(a)&&r.isNumeric(a)?z(a).format(this.format):a};v.fx.setValue=function(a,b){this.format&&"undefined"!=typeof z&&""!==r.trim(a)?(this.value=z().unformat(a+""),-1<this.format.indexOf("%")&&-1==(a+"").indexOf("%")&&(this.value/=100)):this.value=r.isNumeric(a)?parseFloat(a):a;-1==this.sheet.affectedCell.indexOf(this.address)&&this.sheet.affectedCell.push(this.address);return this};v.fx.getValue=function(){return this.formula?this.computedValue:this.value};v.fx.setAffected=function(a){this.affected=
"undefined"==typeof a?!0:a;return this};v.fx.isAffected=function(){return this.affected};v.fx.setProcessed=function(a){this.processed="undefined"==typeof a?!0:a;return this};v.fx.isProcessed=function(){return this.processed};v.fx.highlightDependant=function(){for(var a in this.dependant)this.dependant[a].el.css("border","solid 1px blue")};v.fx.highlightDependency=function(){for(var a in this.dependencies)this.dependencies[a].el.css("border","solid 1px red")};t.fx=t.prototype;t.fx.init=function(){var a=
this.el.find("[data-cell],[data-formula],[data-format]"),b=this,c;this.totalCell=a.length;this.parser=F(this);this.el.attr("data-calx-identifier",this.identifier);a.each(function(){c=new v(b,this);b.registerCell(c)});b.attachEvent()};t.fx.checkCircularReference=function(){var a,b={isCircular:!1,cell:null};for(a in this.cells)if(b.isCircular=this.cells[a].checkCircularReference(),!0===b.isCircular){b.cell=this.cells[a];break}return b};t.fx.clearProcessedFlag=function(){for(var a in this.cells)!1!==
this.cells[a].formula?(this.cells[a].setProcessed(!1),this.cells[a].setAffected(!0)):(this.cells[a].setProcessed(!0),this.cells[a].setAffected(!1))};t.fx.buildCellDependency=function(){for(var a in this.cells)this.cells[a].buildDependency()};t.fx.renderComputedValue=function(){for(var a=0;a<this.affectedCell.length;a++)this.cells[this.affectedCell[a]].renderComputedValue();this.clearAffectedCell()};t.fx.clearAffectedCell=function(){this.affectedCell=[]};t.fx.hasRelatedSheet=function(){return this.relatedSheet};
t.fx.clearCalculatedFlag=function(){for(var a in this.dependant)this.dependant[a].setCalculated(!1);for(a in this.dependencies)this.dependencies[a].setCalculated(!1)};t.fx.isCalculated=function(){return this.calculated};t.fx.setCalculated=function(a){this.calculated="undefined"==typeof a?!0:a};t.fx.clearDependencies=function(){};t.fx.registerDependant=function(a){this.relatedSheet=!0;"undefined"==typeof this.dependant[a.identifier]&&(this.dependant[a.identifier]=a)};t.fx.registerDependency=function(a){this.relatedSheet=
!0;"undefined"==typeof this.dependencies[a.identifier]&&(this.dependencies[a.identifier]=a)};t.fx.obj={type:"cell"};t.fx.comparator={greater:function(a,b){return a>b},greaterEqual:function(a,b){return a>=b},less:function(a,b){return a<b},lessEqual:function(a,b){return a<=b},equal:function(a,b){return a==b},notEqual:function(a,b){return a!=b}};t.fx.getVariable=function(a){a=a[0];var b=a.toUpperCase();return"TRUE"==b?!0:"FALSE"==b?!1:"NULL"==b?null:"undefined"==typeof this.variables[a]?"undefined"==
typeof m.VARIABLE[a]?"#UNDEFINED_VARIABLE!":"function"==typeof m.VARIABLE[a]?m.VARIABLE[a].call(this):m.VARIABLE[a]:"function"==typeof this.variables[a]?this.variables[a].call(this):this.variables[a]};t.fx.time=function(a){var b=a.split(":");a=new Date;var c="undefined"==typeof b[0]?0:b[0],d="undefined"==typeof b[1]?0:b[1],b="undefined"==typeof b[2]?0:b[2];return new Date(a.getFullYear(),a.getMonth(),a.getDate(),c,d,b)};t.fx.callFunction=function(a,b){var c,d;d=a.toUpperCase();if("function"==typeof e[d])return e[d].apply(this,
b);for(c in e)if("function"==typeof e[c][d])return e[c][d].apply(this,b);return"#NAME?"};t.fx.getRemoteCell=function(a,b){var c=r(a).attr("data-calx-identifier");return c&&"undefined"!=typeof s.sheetRegistry[c]?s.sheetRegistry[c].getCell(b):!1};t.fx.getRemoteCellRange=function(a,b,c){return(a=r(a).attr("data-calx-identifier"))&&"undefined"!=typeof s.sheetRegistry[a]?s.sheetRegistry[a].getCellRange(b,c):!1};t.fx.getRemoteCellValue=function(a,b){var c=r(a).attr("data-calx-identifier");return c&&"undefined"!=
typeof s.sheetRegistry[c]?s.sheetRegistry[c].getCellValue(b):!1};t.fx.getRemoteCellRangeValue=function(a,b,c){return(a=r(a).attr("data-calx-identifier"))&&"undefined"!=typeof s.sheetRegistry[a]?s.sheetRegistry[a].getCellRangeValue(b,c):!1};t.fx.getCellRangeValue=function(a,b){a=a.toUpperCase();b=b.toUpperCase();var c=q.cellRange(a,b),d=c.length,f={},e;for(e=0;e<d;e++)f[c[e]]=this.getCellValue(c[e]);return f};t.fx.getCellValue=function(a){a=a.toUpperCase();return"undefined"==typeof this.cells[a]?!1:
this.cells[a].getValue()};t.fx.evaluate=function(a){return this.parser.parse(a)};t.fx.update=function(){var a=this.el.find("[data-cell],[data-formula],[data-format]"),b=this,c;this.totalCell=a.length;for(var d in this.cells)this.cells[d].el&&!r.contains(document,this.cells[d].el[0])&&delete this.cells[d];a.each(function(){var a=r(this).attr("data-cell");a&&"undefined"==typeof b.cells[a]?(c=new v(b,this),b.registerCell(c)):(b.cells[a].resyncValue(),b.cells[a].resyncFormula())});this.buildCellDependency()};
t.fx.calculate=function(){this.clearAffectedCell();"function"==typeof this.config.onBeforeCalculate&&this.config.onBeforeCalculate.call(this);var a;this.calculateDependency(this.identifier);this.clearProcessedFlag();for(a in this.cells)this.cells[a].processDependency();this.setCalculated();for(a in this.cells)this.cells[a].hasRemoteDependency()&&this.cells[a].evaluateFormula();this.calculateDependant(this.identifier);"function"==typeof this.config.onAfterCalculate&&this.config.onAfterCalculate.call(this);
"function"==typeof this.config.onBeforeRender&&this.config.onBeforeRender.call(this);this.renderComputedValue();"function"==typeof this.config.onAfterRender&&this.config.onAfterRender.call(this);return this};t.fx.calculateDependant=function(a){};t.fx.calculateDependency=function(a){};t.fx.registerCell=function(a){var b=a.getAddress();this.cells[b]=a;"undefined"!=typeof this.config.data[b]&&(b=this.config.data[b],"undefined"!=typeof b.value&&(a.setValue(b.value),a.renderComputedValue()),"undefined"!=
typeof b.format&&a.setFormat(b.format),"undefined"!=typeof b.formula&&a.setFormula(b.formula));-1==this.affectedCell.indexOf(a.getAddress())&&this.affectedCell.push(a.getAddress())};t.fx.registerVariable=function(a,b){if("object"==typeof a)for(var c in a)this.variables[c]=a[c];else this.variables[a]=b};t.fx.getCell=function(a){a=a.toUpperCase();return"undefined"!=typeof this.cells[a]?this.cells[a]:!1};t.fx.getCellRange=function(a,b){a=a.toUpperCase();b=b.toUpperCase();var c=q.cellRange(a,b),d=c.length,
e={},g;for(g=0;g<d;g++)e[c[g]]=this.getCell(c[g]);return e};t.fx.applyChange=function(){for(var a in this.cells)this.cells[a].processDependency(!1,!1);for(a in this.cells)this.cells[a].renderComputedValue();return this};t.fx.scan=function(){};t.fx.refresh=function(){var a=this.el.find("[data-cell],[data-formula],[data-format]"),b=this,c;this.totalCell=a.length;this.cells={};a.each(function(){c=new v(b,this);b.registerCell(c)});this.buildCellDependency()};t.fx.reset=function(){("form"==this.el.prop("tagName").toLowerCase()?
this.el:this.el.find("form")).each(function(){this.reset()});for(var a in this.cells)this.cells[a].resyncValue();this.calculate()};t.fx.setActiveCell=function(a){this.activeCell=a};t.fx.getActiveCell=function(){return this.activeCell};t.fx.attachEvent=function(){var a=this;this.el.on("calx.getValue","input[data-cell]",function(){var b=r(this).attr("data-cell"),b=a.cells[b],c=b.getValue(),d=b.getFormat();d&&-1<d.indexOf("%")&&(c=100*c+" %");b.isCheckbox||b.el.val(c)});this.el.on("calx.renderComputedValue",
"input[data-cell]",function(){var b=r(this).attr("data-cell");a.cells[b].renderComputedValue()});this.el.on("calx.setValue","input[data-cell], select[data-cell]",function(){var b=r(this).attr("data-cell"),b=a.cells[b],c=b.getValue(),d=b.el.val();if(b.isCheckbox&&"checkbox"==b.el.attr("type"))if(b.el.prop("checked"))b.setValue(d);else{var e=b.el.attr("data-unchecked"),d=e="undefined"==typeof e?"":e;b.setValue(e)}else b.isCheckbox&&"radio"==b.el.attr("type")?(b.setValue(d),a.el.find("[name="+b.el.attr("name")+
"]").not(b.el).each(function(){var b=r(this),c=b.attr("data-unchecked"),b=b.attr("data-cell");a.cells[b].setValue("undefined"==typeof c?"":c)})):b.setValue(d);c!=d&&b.setAffected(!0)});this.el.on("calx.calculateSheet","input[data-cell]",function(){a.calculate()});this.el.on("calx.calculateCellDependant","input[data-cell], select[data-cell]",function(){var b=r(this).attr("data-cell"),b=a.cells[b];b.isAffected()&&(!0===s.isCalculating&&(s.isCalculating=!1),a.clearProcessedFlag(),b.calculate(!0,!1),
a.hasRelatedSheet()?a.calculate():a.renderComputedValue())});this.el.on(a.config.autoCalculateTrigger,"input[data-cell]",function(){var b=r(this);b.attr("data-formula")||a.config.autoCalculate&&setTimeout(function(){b.trigger("calx.calculateCellDependant")},50)});this.el.on("blur","input[data-cell]",function(){r(this).trigger("calx.renderComputedValue")});this.el.on("change","select[data-cell]",function(){r(this).trigger("calx.setValue");a.config.autoCalculate&&r(this).trigger("calx.calculateCellDependant")});
this.el.on("click","input[data-cell][type=checkbox], input[data-cell][type=radio]",function(){r(this).trigger("calx.setValue");a.config.autoCalculate&&r(this).trigger("calx.calculateCellDependant")});this.el.on("focus","input[data-cell]",function(){r(this).trigger("calx.getValue")});this.el.on("keyup","input[data-cell]",function(a){if(r(this).attr("data-formula"))return a.preventDefault(),!1;r(this).trigger("calx.setValue")})};t.fx.detachEvent=function(){this.el.off("calx.getValue");this.el.off("calx.setValue");
this.el.off("calx.renderComputedValue");this.el.off("calx.calculateSheet");this.el.off("calx.calculateCellDependant")};var s={isCalculating:!1,sheetRegistry:{},init:function(a){var b;this.each(function(){(b=r(this).attr("data-calx-identifier"))&&"undefined"!=typeof s.sheetRegistry[b]?s.sheetRegistry[b].refresh():(b="CALX"+(new Date).valueOf(),s.sheetRegistry[b]=new t(b,this,a))});for(b in s.sheetRegistry)s.sheetRegistry[b].buildCellDependency();for(b in s.sheetRegistry){if(s.sheetRegistry[b].config.checkCircularReference){var c=
s.sheetRegistry[b].checkCircularReference();c.isCircular&&(c="Circular reference detected, this may cause calx to stop working.\ncell : "+c.cell.getAddress()+"\nformula : "+c.cell.getFormula()+"\n\nPlease check each cells involved in the formula that has direct or indirect reference to "+c.cell.getAddress(),alert(c),r.error(c))}s.sheetRegistry[b].config.autoCalculate&&s.sheetRegistry[b].calculate();s.sheetRegistry[b].renderComputedValue()}return this},registerFunction:function(a,b,c){if("undefined"==
typeof c?0:c)for(var d in e)"undefined"!=typeof e[d][a]&&delete e[d][a];e.user_defined[a]=b},registerVariable:function(a,b,c){c="undefined"==typeof c?!1:c;0===this.length&&(c=!0);if(c)if("object"==typeof a)for(var d in a)m.VARIABLE[d]=a[d];else m.VARIABLE[a]=b;else this.each(function(){var c=r(this).attr("data-calx-identifier");c&&"undefined"!=typeof s.sheetRegistry[c]&&(s.sheetRegistry[c].registerVariable(a,b),s.sheetRegistry[c].calculate())});return this},refresh:function(){return this.each(function(){var a=
r(this).attr("data-calx-identifier");a&&"undefined"==typeof s.sheetRegistry[a]&&s.sheetRegistry[a].refresh()})},update:function(){return this.each(function(){var a=r(this).attr("data-calx-identifier");a&&"undefined"!=typeof s.sheetRegistry[a]&&s.sheetRegistry[a].update()})},getSheet:function(){var a=r(this).attr("data-calx-identifier");return"undefined"==typeof s.sheetRegistry[a]?!1:s.sheetRegistry[a]},getCell:function(a){var b=r(this).attr("data-calx-identifier");return s.sheetRegistry[b].getCell(a)},
getUtility:function(){return q},evaluate:function(a){var b=r(this).attr("data-calx-identifier");return s.sheetRegistry[b].evaluate(a)},destroy:function(){this.each(function(){var a=r(this),b=a.attr("data-calx-identifier");a.removeAttr("data-calx-identifier");"undefined"!=typeof s.sheetRegistry[b]&&(s.sheetRegistry[b].detachEvent(),s.sheetRegistry[b].clearDependencies(),delete s.sheetRegistry[b])});return this},reset:function(){return this.each(function(){var a=r(this).attr("data-calx-identifier");
a&&"undefined"!=typeof s.sheetRegistry[a]&&s.sheetRegistry[a].reset()})},calculate:function(){return this.each(function(){var a=r(this).attr("data-calx-identifier");a&&"undefined"!=typeof s.sheetRegistry[a]&&s.sheetRegistry[a].calculate()})},setValue:function(a,b){var c=r(this).attr("data-calx-identifier"),c=s.sheetRegistry[c];c.getCell(a).setValue(b).renderComputedValue();c.config.autoCalculate&&c.calculate()}};r.fn.calx=function(a,b){if(s[a])return s[a].apply(this,Array.prototype.slice.call(arguments,
1));if("object"==typeof a||"undefined"==typeof a)return s.init.apply(this,arguments);r.error("Method "+a+" does not exist on jQuery.calx")}})(jQuery,numeral,moment,jStat);
