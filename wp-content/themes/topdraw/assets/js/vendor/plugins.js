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


/*! TableSorter (FORK) v2.29.5 *//*
* Client-side table sorting with ease!
* @requires jQuery v1.2.6+
*
* Copyright (c) 2007 Christian Bach
* fork maintained by Rob Garrison
*
* Examples and original docs at: http://tablesorter.com
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* @type jQuery
* @name tablesorter (FORK)
* @cat Plugins/Tablesorter
* @author Christian Bach - christian.bach@polyester.se
* @contributor Rob Garrison - https://github.com/Mottie/tablesorter
* @docs (fork) - https://mottie.github.io/tablesorter/docs/
*/
/*jshint browser:true, jquery:true, unused:false, expr: true */
;( function( $ ) {
  'use strict';
  var ts = $.tablesorter = {

    version : '2.29.5',

    parsers : [],
    widgets : [],
    defaults : {

      // *** appearance
      theme            : 'default',  // adds tablesorter-{theme} to the table for styling
      widthFixed       : false,      // adds colgroup to fix widths of columns
      showProcessing   : false,      // show an indeterminate timer icon in the header when the table is sorted or filtered.

      headerTemplate   : '{content}',// header layout template (HTML ok); {content} = innerHTML, {icon} = <i/> // class from cssIcon
      onRenderTemplate : null,       // function( index, template ){ return template; }, // template is a string
      onRenderHeader   : null,       // function( index ){}, // nothing to return

      // *** functionality
      cancelSelection  : true,       // prevent text selection in the header
      tabIndex         : true,       // add tabindex to header for keyboard accessibility
      dateFormat       : 'mmddyyyy', // other options: 'ddmmyyy' or 'yyyymmdd'
      sortMultiSortKey : 'shiftKey', // key used to select additional columns
      sortResetKey     : 'ctrlKey',  // key used to remove sorting on a column
      usNumberFormat   : true,       // false for German '1.234.567,89' or French '1 234 567,89'
      delayInit        : false,      // if false, the parsed table contents will not update until the first sort
      serverSideSorting: false,      // if true, server-side sorting should be performed because client-side sorting will be disabled, but the ui and events will still be used.
      resort           : true,       // default setting to trigger a resort after an 'update', 'addRows', 'updateCell', etc has completed

      // *** sort options
      headers          : {},         // set sorter, string, empty, locked order, sortInitialOrder, filter, etc.
      ignoreCase       : true,       // ignore case while sorting
      sortForce        : null,       // column(s) first sorted; always applied
      sortList         : [],         // Initial sort order; applied initially; updated when manually sorted
      sortAppend       : null,       // column(s) sorted last; always applied
      sortStable       : false,      // when sorting two rows with exactly the same content, the original sort order is maintained

      sortInitialOrder : 'asc',      // sort direction on first click
      sortLocaleCompare: false,      // replace equivalent character (accented characters)
      sortReset        : false,      // third click on the header will reset column to default - unsorted
      sortRestart      : false,      // restart sort to 'sortInitialOrder' when clicking on previously unsorted columns

      emptyTo          : 'bottom',   // sort empty cell to bottom, top, none, zero, emptyMax, emptyMin
      stringTo         : 'max',      // sort strings in numerical column as max, min, top, bottom, zero
      duplicateSpan    : true,       // colspan cells in the tbody will have duplicated content in the cache for each spanned column
      textExtraction   : 'basic',    // text extraction method/function - function( node, table, cellIndex ){}
      textAttribute    : 'data-text',// data-attribute that contains alternate cell text (used in default textExtraction function)
      textSorter       : null,       // choose overall or specific column sorter function( a, b, direction, table, columnIndex ) [alt: ts.sortText]
      numberSorter     : null,       // choose overall numeric sorter function( a, b, direction, maxColumnValue )

      // *** widget options
      initWidgets      : true,       // apply widgets on tablesorter initialization
      widgetClass      : 'widget-{name}', // table class name template to match to include a widget
      widgets          : [],         // method to add widgets, e.g. widgets: ['zebra']
      widgetOptions    : {
        zebra : [ 'even', 'odd' ]  // zebra widget alternating row class names
      },

      // *** callbacks
      initialized      : null,       // function( table ){},

      // *** extra css class names
      tableClass       : '',
      cssAsc           : '',
      cssDesc          : '',
      cssNone          : '',
      cssHeader        : '',
      cssHeaderRow     : '',
      cssProcessing    : '', // processing icon applied to header during sort/filter

      cssChildRow      : 'tablesorter-childRow', // class name indiciating that a row is to be attached to its parent
      cssInfoBlock     : 'tablesorter-infoOnly', // don't sort tbody with this class name (only one class name allowed here!)
      cssNoSort        : 'tablesorter-noSort',   // class name added to element inside header; clicking on it won't cause a sort
      cssIgnoreRow     : 'tablesorter-ignoreRow',// header row to ignore; cells within this row will not be added to c.$headers

      cssIcon          : 'tablesorter-icon', // if this class does not exist, the {icon} will not be added from the headerTemplate
      cssIconNone      : '', // class name added to the icon when there is no column sort
      cssIconAsc       : '', // class name added to the icon when the column has an ascending sort
      cssIconDesc      : '', // class name added to the icon when the column has a descending sort
      cssIconDisabled  : '', // class name added to the icon when the column has a disabled sort

      // *** events
      pointerClick     : 'click',
      pointerDown      : 'mousedown',
      pointerUp        : 'mouseup',

      // *** selectors
      selectorHeaders  : '> thead th, > thead td',
      selectorSort     : 'th, td', // jQuery selector of content within selectorHeaders that is clickable to trigger a sort
      selectorRemove   : '.remove-me',

      // *** advanced
      debug            : false,

      // *** Internal variables
      headerList: [],
      empties: {},
      strings: {},
      parsers: [],

      // *** parser options for validator; values must be falsy!
      globalize: 0,
      imgAttr: 0

      // removed: widgetZebra: { css: ['even', 'odd'] }

    },

    // internal css classes - these will ALWAYS be added to
    // the table and MUST only contain one class name - fixes #381
    css : {
      table      : 'tablesorter',
      cssHasChild: 'tablesorter-hasChildRow',
      childRow   : 'tablesorter-childRow',
      colgroup   : 'tablesorter-colgroup',
      header     : 'tablesorter-header',
      headerRow  : 'tablesorter-headerRow',
      headerIn   : 'tablesorter-header-inner',
      icon       : 'tablesorter-icon',
      processing : 'tablesorter-processing',
      sortAsc    : 'tablesorter-headerAsc',
      sortDesc   : 'tablesorter-headerDesc',
      sortNone   : 'tablesorter-headerUnSorted'
    },

    // labels applied to sortable headers for accessibility (aria) support
    language : {
      sortAsc      : 'Ascending sort applied, ',
      sortDesc     : 'Descending sort applied, ',
      sortNone     : 'No sort applied, ',
      sortDisabled : 'sorting is disabled',
      nextAsc      : 'activate to apply an ascending sort',
      nextDesc     : 'activate to apply a descending sort',
      nextNone     : 'activate to remove the sort'
    },

    regex : {
      templateContent : /\{content\}/g,
      templateIcon    : /\{icon\}/g,
      templateName    : /\{name\}/i,
      spaces          : /\s+/g,
      nonWord         : /\W/g,
      formElements    : /(input|select|button|textarea)/i,

      // *** sort functions ***
      // regex used in natural sort
      // chunk/tokenize numbers & letters
      chunk  : /(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
      // replace chunks @ ends
      chunks : /(^\\0|\\0$)/,
      hex    : /^0x[0-9a-f]+$/i,

      // *** formatFloat ***
      comma                : /,/g,
      digitNonUS           : /[\s|\.]/g,
      digitNegativeTest    : /^\s*\([.\d]+\)/,
      digitNegativeReplace : /^\s*\(([.\d]+)\)/,

      // *** isDigit ***
      digitTest    : /^[\-+(]?\d+[)]?$/,
      digitReplace : /[,.'"\s]/g

    },

    // digit sort, text location
    string : {
      max      : 1,
      min      : -1,
      emptymin : 1,
      emptymax : -1,
      zero     : 0,
      none     : 0,
      'null'   : 0,
      top      : true,
      bottom   : false
    },

    keyCodes : {
      enter : 13
    },

    // placeholder date parser data (globalize)
    dates : {},

    // These methods can be applied on table.config instance
    instanceMethods : {},

    /*
    ▄█████ ██████ ██████ ██  ██ █████▄
    ▀█▄    ██▄▄     ██   ██  ██ ██▄▄██
       ▀█▄ ██▀▀     ██   ██  ██ ██▀▀▀
    █████▀ ██████   ██   ▀████▀ ██
    */

    setup : function( table, c ) {
      // if no thead or tbody, or tablesorter is already present, quit
      if ( !table || !table.tHead || table.tBodies.length === 0 || table.hasInitialized === true ) {
        if ( c.debug ) {
          if ( table.hasInitialized ) {
            console.warn( 'Stopping initialization. Tablesorter has already been initialized' );
          } else {
            console.error( 'Stopping initialization! No table, thead or tbody', table );
          }
        }
        return;
      }

      var tmp = '',
        $table = $( table ),
        meta = $.metadata;
      // initialization flag
      table.hasInitialized = false;
      // table is being processed flag
      table.isProcessing = true;
      // make sure to store the config object
      table.config = c;
      // save the settings where they read
      $.data( table, 'tablesorter', c );
      if ( c.debug ) {
        console[ console.group ? 'group' : 'log' ]( 'Initializing tablesorter v' + ts.version );
        $.data( table, 'startoveralltimer', new Date() );
      }

      // removing this in version 3 (only supports jQuery 1.7+)
      c.supportsDataObject = ( function( version ) {
        version[ 0 ] = parseInt( version[ 0 ], 10 );
        return ( version[ 0 ] > 1 ) || ( version[ 0 ] === 1 && parseInt( version[ 1 ], 10 ) >= 4 );
      })( $.fn.jquery.split( '.' ) );
      // ensure case insensitivity
      c.emptyTo = c.emptyTo.toLowerCase();
      c.stringTo = c.stringTo.toLowerCase();
      c.last = { sortList : [], clickedIndex : -1 };
      // add table theme class only if there isn't already one there
      if ( !/tablesorter\-/.test( $table.attr( 'class' ) ) ) {
        tmp = ( c.theme !== '' ? ' tablesorter-' + c.theme : '' );
      }

      // give the table a unique id, which will be used in namespace binding
      if ( !c.namespace ) {
        c.namespace = '.tablesorter' + Math.random().toString( 16 ).slice( 2 );
      } else {
        // make sure namespace starts with a period & doesn't have weird characters
        c.namespace = '.' + c.namespace.replace( ts.regex.nonWord, '' );
      }

      c.table = table;
      c.$table = $table
        // add namespace to table to allow bindings on extra elements to target
        // the parent table (e.g. parser-input-select)
        .addClass( ts.css.table + ' ' + c.tableClass + tmp + ' ' + c.namespace.slice(1) )
        .attr( 'role', 'grid' );
      c.$headers = $table.find( c.selectorHeaders );

      c.$table.children().children( 'tr' ).attr( 'role', 'row' );
      c.$tbodies = $table.children( 'tbody:not(.' + c.cssInfoBlock + ')' ).attr({
        'aria-live' : 'polite',
        'aria-relevant' : 'all'
      });
      if ( c.$table.children( 'caption' ).length ) {
        tmp = c.$table.children( 'caption' )[ 0 ];
        if ( !tmp.id ) { tmp.id = c.namespace.slice( 1 ) + 'caption'; }
        c.$table.attr( 'aria-labelledby', tmp.id );
      }
      c.widgetInit = {}; // keep a list of initialized widgets
      // change textExtraction via data-attribute
      c.textExtraction = c.$table.attr( 'data-text-extraction' ) || c.textExtraction || 'basic';
      // build headers
      ts.buildHeaders( c );
      // fixate columns if the users supplies the fixedWidth option
      // do this after theme has been applied
      ts.fixColumnWidth( table );
      // add widgets from class name
      ts.addWidgetFromClass( table );
      // add widget options before parsing (e.g. grouping widget has parser settings)
      ts.applyWidgetOptions( table );
      // try to auto detect column type, and store in tables config
      ts.setupParsers( c );
      // start total row count at zero
      c.totalRows = 0;
      ts.validateOptions( c );
      // build the cache for the tbody cells
      // delayInit will delay building the cache until the user starts a sort
      if ( !c.delayInit ) { ts.buildCache( c ); }
      // bind all header events and methods
      ts.bindEvents( table, c.$headers, true );
      ts.bindMethods( c );
      // get sort list from jQuery data or metadata
      // in jQuery < 1.4, an error occurs when calling $table.data()
      if ( c.supportsDataObject && typeof $table.data().sortlist !== 'undefined' ) {
        c.sortList = $table.data().sortlist;
      } else if ( meta && ( $table.metadata() && $table.metadata().sortlist ) ) {
        c.sortList = $table.metadata().sortlist;
      }
      // apply widget init code
      ts.applyWidget( table, true );
      // if user has supplied a sort list to constructor
      if ( c.sortList.length > 0 ) {
        ts.sortOn( c, c.sortList, {}, !c.initWidgets );
      } else {
        ts.setHeadersCss( c );
        if ( c.initWidgets ) {
          // apply widget format
          ts.applyWidget( table, false );
        }
      }

      // show processesing icon
      if ( c.showProcessing ) {
        $table
        .unbind( 'sortBegin' + c.namespace + ' sortEnd' + c.namespace )
        .bind( 'sortBegin' + c.namespace + ' sortEnd' + c.namespace, function( e ) {
          clearTimeout( c.timerProcessing );
          ts.isProcessing( table );
          if ( e.type === 'sortBegin' ) {
            c.timerProcessing = setTimeout( function() {
              ts.isProcessing( table, true );
            }, 500 );
          }
        });
      }

      // initialized
      table.hasInitialized = true;
      table.isProcessing = false;
      if ( c.debug ) {
        console.log( 'Overall initialization time:' + ts.benchmark( $.data( table, 'startoveralltimer' ) ) );
        if ( c.debug && console.groupEnd ) { console.groupEnd(); }
      }
      $table.triggerHandler( 'tablesorter-initialized', table );
      if ( typeof c.initialized === 'function' ) {
        c.initialized( table );
      }
    },

    bindMethods : function( c ) {
      var $table = c.$table,
        namespace = c.namespace,
        events = ( 'sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete ' +
          'sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup ' +
          'mouseleave ' ).split( ' ' )
          .join( namespace + ' ' );
      // apply easy methods that trigger bound events
      $table
      .unbind( events.replace( ts.regex.spaces, ' ' ) )
      .bind( 'sortReset' + namespace, function( e, callback ) {
        e.stopPropagation();
        // using this.config to ensure functions are getting a non-cached version of the config
        ts.sortReset( this.config, function( table ) {
          if (table.isApplyingWidgets) {
            // multiple triggers in a row... filterReset, then sortReset - see #1361
            // wait to update widgets
            setTimeout( function() {
              ts.applyWidget( table, '', callback );
            }, 100 );
          } else {
            ts.applyWidget( table, '', callback );
          }
        });
      })
      .bind( 'updateAll' + namespace, function( e, resort, callback ) {
        e.stopPropagation();
        ts.updateAll( this.config, resort, callback );
      })
      .bind( 'update' + namespace + ' updateRows' + namespace, function( e, resort, callback ) {
        e.stopPropagation();
        ts.update( this.config, resort, callback );
      })
      .bind( 'updateHeaders' + namespace, function( e, callback ) {
        e.stopPropagation();
        ts.updateHeaders( this.config, callback );
      })
      .bind( 'updateCell' + namespace, function( e, cell, resort, callback ) {
        e.stopPropagation();
        ts.updateCell( this.config, cell, resort, callback );
      })
      .bind( 'addRows' + namespace, function( e, $row, resort, callback ) {
        e.stopPropagation();
        ts.addRows( this.config, $row, resort, callback );
      })
      .bind( 'updateComplete' + namespace, function() {
        this.isUpdating = false;
      })
      .bind( 'sorton' + namespace, function( e, list, callback, init ) {
        e.stopPropagation();
        ts.sortOn( this.config, list, callback, init );
      })
      .bind( 'appendCache' + namespace, function( e, callback, init ) {
        e.stopPropagation();
        ts.appendCache( this.config, init );
        if ( $.isFunction( callback ) ) {
          callback( this );
        }
      })
      // $tbodies variable is used by the tbody sorting widget
      .bind( 'updateCache' + namespace, function( e, callback, $tbodies ) {
        e.stopPropagation();
        ts.updateCache( this.config, callback, $tbodies );
      })
      .bind( 'applyWidgetId' + namespace, function( e, id ) {
        e.stopPropagation();
        ts.applyWidgetId( this, id );
      })
      .bind( 'applyWidgets' + namespace, function( e, callback ) {
        e.stopPropagation();
        // apply widgets (false = not initializing)
        ts.applyWidget( this, false, callback );
      })
      .bind( 'refreshWidgets' + namespace, function( e, all, dontapply ) {
        e.stopPropagation();
        ts.refreshWidgets( this, all, dontapply );
      })
      .bind( 'removeWidget' + namespace, function( e, name, refreshing ) {
        e.stopPropagation();
        ts.removeWidget( this, name, refreshing );
      })
      .bind( 'destroy' + namespace, function( e, removeClasses, callback ) {
        e.stopPropagation();
        ts.destroy( this, removeClasses, callback );
      })
      .bind( 'resetToLoadState' + namespace, function( e ) {
        e.stopPropagation();
        // remove all widgets
        ts.removeWidget( this, true, false );
        var tmp = $.extend( true, {}, c.originalSettings );
        // restore original settings; this clears out current settings, but does not clear
        // values saved to storage.
        c = $.extend( true, {}, ts.defaults, tmp );
        c.originalSettings = tmp;
        this.hasInitialized = false;
        // setup the entire table again
        ts.setup( this, c );
      });
    },

    bindEvents : function( table, $headers, core ) {
      table = $( table )[ 0 ];
      var tmp,
        c = table.config,
        namespace = c.namespace,
        downTarget = null;
      if ( core !== true ) {
        $headers.addClass( namespace.slice( 1 ) + '_extra_headers' );
        tmp = ts.getClosest( $headers, 'table' );
        if ( tmp.length && tmp[ 0 ].nodeName === 'TABLE' && tmp[ 0 ] !== table ) {
          $( tmp[ 0 ] ).addClass( namespace.slice( 1 ) + '_extra_table' );
        }
      }
      tmp = ( c.pointerDown + ' ' + c.pointerUp + ' ' + c.pointerClick + ' sort keyup ' )
        .replace( ts.regex.spaces, ' ' )
        .split( ' ' )
        .join( namespace + ' ' );
      // apply event handling to headers and/or additional headers (stickyheaders, scroller, etc)
      $headers
      // http://stackoverflow.com/questions/5312849/jquery-find-self;
      .find( c.selectorSort )
      .add( $headers.filter( c.selectorSort ) )
      .unbind( tmp )
      .bind( tmp, function( e, external ) {
        var $cell, cell, temp,
          $target = $( e.target ),
          // wrap event type in spaces, so the match doesn't trigger on inner words
          type = ' ' + e.type + ' ';
        // only recognize left clicks
        if ( ( ( e.which || e.button ) !== 1 && !type.match( ' ' + c.pointerClick + ' | sort | keyup ' ) ) ||
          // allow pressing enter
          ( type === ' keyup ' && e.which !== ts.keyCodes.enter ) ||
          // allow triggering a click event (e.which is undefined) & ignore physical clicks
          ( type.match( ' ' + c.pointerClick + ' ' ) && typeof e.which !== 'undefined' ) ) {
          return;
        }
        // ignore mouseup if mousedown wasn't on the same target
        if ( type.match( ' ' + c.pointerUp + ' ' ) && downTarget !== e.target && external !== true ) {
          return;
        }
        // set target on mousedown
        if ( type.match( ' ' + c.pointerDown + ' ' ) ) {
          downTarget = e.target;
          // preventDefault needed or jQuery v1.3.2 and older throws an
          // "Uncaught TypeError: handler.apply is not a function" error
          temp = $target.jquery.split( '.' );
          if ( temp[ 0 ] === '1' && temp[ 1 ] < 4 ) { e.preventDefault(); }
          return;
        }
        downTarget = null;
        // prevent sort being triggered on form elements
        if ( ts.regex.formElements.test( e.target.nodeName ) ||
          // nosort class name, or elements within a nosort container
          $target.hasClass( c.cssNoSort ) || $target.parents( '.' + c.cssNoSort ).length > 0 ||
          // elements within a button
          $target.parents( 'button' ).length > 0 ) {
          return !c.cancelSelection;
        }
        if ( c.delayInit && ts.isEmptyObject( c.cache ) ) {
          ts.buildCache( c );
        }
        $cell = ts.getClosest( $( this ), '.' + ts.css.header );
        // reference original table headers and find the same cell
        // don't use $headers or IE8 throws an error - see #987
        temp = $headers.index( $cell );
        c.last.clickedIndex = ( temp < 0 ) ? $cell.attr( 'data-column' ) : temp;
        // use column index if $headers is undefined
        cell = c.$headers[ c.last.clickedIndex ];
        if ( cell && !cell.sortDisabled ) {
          ts.initSort( c, cell, e );
        }
      });
      if ( c.cancelSelection ) {
        // cancel selection
        $headers
          .attr( 'unselectable', 'on' )
          .bind( 'selectstart', false )
          .css({
            'user-select' : 'none',
            'MozUserSelect' : 'none' // not needed for jQuery 1.8+
          });
      }
    },

    buildHeaders : function( c ) {
      var $temp, icon, timer, indx;
      c.headerList = [];
      c.headerContent = [];
      c.sortVars = [];
      if ( c.debug ) {
        timer = new Date();
      }
      // children tr in tfoot - see issue #196 & #547
      // don't pass table.config to computeColumnIndex here - widgets (math) pass it to "quickly" index tbody cells
      c.columns = ts.computeColumnIndex( c.$table.children( 'thead, tfoot' ).children( 'tr' ) );
      // add icon if cssIcon option exists
      icon = c.cssIcon ?
        '<i class="' + ( c.cssIcon === ts.css.icon ? ts.css.icon : c.cssIcon + ' ' + ts.css.icon ) + '"></i>' :
        '';
      // redefine c.$headers here in case of an updateAll that replaces or adds an entire header cell - see #683
      c.$headers = $( $.map( c.$table.find( c.selectorHeaders ), function( elem, index ) {
        var configHeaders, header, column, template, tmp,
          $elem = $( elem );
        // ignore cell (don't add it to c.$headers) if row has ignoreRow class
        if ( ts.getClosest( $elem, 'tr' ).hasClass( c.cssIgnoreRow ) ) { return; }
        // transfer data-column to element if not th/td - #1459
        if ( !/(th|td)/i.test( elem.nodeName ) ) {
          tmp = ts.getClosest( $elem, 'th, td' );
          $elem.attr( 'data-column', tmp.attr( 'data-column' ) );
        }
        // make sure to get header cell & not column indexed cell
        configHeaders = ts.getColumnData( c.table, c.headers, index, true );
        // save original header content
        c.headerContent[ index ] = $elem.html();
        // if headerTemplate is empty, don't reformat the header cell
        if ( c.headerTemplate !== '' && !$elem.find( '.' + ts.css.headerIn ).length ) {
          // set up header template
          template = c.headerTemplate
            .replace( ts.regex.templateContent, $elem.html() )
            .replace( ts.regex.templateIcon, $elem.find( '.' + ts.css.icon ).length ? '' : icon );
          if ( c.onRenderTemplate ) {
            header = c.onRenderTemplate.apply( $elem, [ index, template ] );
            // only change t if something is returned
            if ( header && typeof header === 'string' ) {
              template = header;
            }
          }
          $elem.html( '<div class="' + ts.css.headerIn + '">' + template + '</div>' ); // faster than wrapInner
        }
        if ( c.onRenderHeader ) {
          c.onRenderHeader.apply( $elem, [ index, c, c.$table ] );
        }
        column = parseInt( $elem.attr( 'data-column' ), 10 );
        elem.column = column;
        tmp = ts.getOrder( ts.getData( $elem, configHeaders, 'sortInitialOrder' ) || c.sortInitialOrder );
        // this may get updated numerous times if there are multiple rows
        c.sortVars[ column ] = {
          count : -1, // set to -1 because clicking on the header automatically adds one
          order:  tmp ?
            ( c.sortReset ? [ 1, 0, 2 ] : [ 1, 0 ] ) : // desc, asc, unsorted
            ( c.sortReset ? [ 0, 1, 2 ] : [ 0, 1 ] ),  // asc, desc, unsorted
          lockedOrder : false
        };
        tmp = ts.getData( $elem, configHeaders, 'lockedOrder' ) || false;
        if ( typeof tmp !== 'undefined' && tmp !== false ) {
          c.sortVars[ column ].lockedOrder = true;
          c.sortVars[ column ].order = ts.getOrder( tmp ) ? [ 1, 1 ] : [ 0, 0 ];
        }
        // add cell to headerList
        c.headerList[ index ] = elem;
        $elem.addClass( ts.css.header + ' ' + c.cssHeader );
        // add to parent in case there are multiple rows
        ts.getClosest( $elem, 'tr' )
          .addClass( ts.css.headerRow + ' ' + c.cssHeaderRow )
          .attr( 'role', 'row' );
        // allow keyboard cursor to focus on element
        if ( c.tabIndex ) {
          $elem.attr( 'tabindex', 0 );
        }
        return elem;
      }) );
      // cache headers per column
      c.$headerIndexed = [];
      for ( indx = 0; indx < c.columns; indx++ ) {
        // colspan in header making a column undefined
        if ( ts.isEmptyObject( c.sortVars[ indx ] ) ) {
          c.sortVars[ indx ] = {};
        }
        // Use c.$headers.parent() in case selectorHeaders doesn't point to the th/td
        $temp = c.$headers.filter( '[data-column="' + indx + '"]' );
        // target sortable column cells, unless there are none, then use non-sortable cells
        // .last() added in jQuery 1.4; use .filter(':last') to maintain compatibility with jQuery v1.2.6
        c.$headerIndexed[ indx ] = $temp.length ?
          $temp.not( '.sorter-false' ).length ?
            $temp.not( '.sorter-false' ).filter( ':last' ) :
            $temp.filter( ':last' ) :
          $();
      }
      c.$table.find( c.selectorHeaders ).attr({
        scope: 'col',
        role : 'columnheader'
      });
      // enable/disable sorting
      ts.updateHeader( c );
      if ( c.debug ) {
        console.log( 'Built headers:' + ts.benchmark( timer ) );
        console.log( c.$headers );
      }
    },

    // Use it to add a set of methods to table.config which will be available for all tables.
    // This should be done before table initialization
    addInstanceMethods : function( methods ) {
      $.extend( ts.instanceMethods, methods );
    },

    /*
    █████▄ ▄████▄ █████▄ ▄█████ ██████ █████▄ ▄█████
    ██▄▄██ ██▄▄██ ██▄▄██ ▀█▄    ██▄▄   ██▄▄██ ▀█▄
    ██▀▀▀  ██▀▀██ ██▀██     ▀█▄ ██▀▀   ██▀██     ▀█▄
    ██     ██  ██ ██  ██ █████▀ ██████ ██  ██ █████▀
    */
    setupParsers : function( c, $tbodies ) {
      var rows, list, span, max, colIndex, indx, header, configHeaders,
        noParser, parser, extractor, time, tbody, len,
        table = c.table,
        tbodyIndex = 0,
        debug = {};
      // update table bodies in case we start with an empty table
      c.$tbodies = c.$table.children( 'tbody:not(.' + c.cssInfoBlock + ')' );
      tbody = typeof $tbodies === 'undefined' ? c.$tbodies : $tbodies;
      len = tbody.length;
      if ( len === 0 ) {
        return c.debug ? console.warn( 'Warning: *Empty table!* Not building a parser cache' ) : '';
      } else if ( c.debug ) {
        time = new Date();
        console[ console.group ? 'group' : 'log' ]( 'Detecting parsers for each column' );
      }
      list = {
        extractors: [],
        parsers: []
      };
      while ( tbodyIndex < len ) {
        rows = tbody[ tbodyIndex ].rows;
        if ( rows.length ) {
          colIndex = 0;
          max = c.columns;
          for ( indx = 0; indx < max; indx++ ) {
            header = c.$headerIndexed[ colIndex ];
            if ( header && header.length ) {
              // get column indexed table cell; adding true parameter fixes #1362 but
              // it would break backwards compatibility...
              configHeaders = ts.getColumnData( table, c.headers, colIndex ); // , true );
              // get column parser/extractor
              extractor = ts.getParserById( ts.getData( header, configHeaders, 'extractor' ) );
              parser = ts.getParserById( ts.getData( header, configHeaders, 'sorter' ) );
              noParser = ts.getData( header, configHeaders, 'parser' ) === 'false';
              // empty cells behaviour - keeping emptyToBottom for backwards compatibility
              c.empties[colIndex] = (
                ts.getData( header, configHeaders, 'empty' ) ||
                c.emptyTo || ( c.emptyToBottom ? 'bottom' : 'top' ) ).toLowerCase();
              // text strings behaviour in numerical sorts
              c.strings[colIndex] = (
                ts.getData( header, configHeaders, 'string' ) ||
                c.stringTo ||
                'max' ).toLowerCase();
              if ( noParser ) {
                parser = ts.getParserById( 'no-parser' );
              }
              if ( !extractor ) {
                // For now, maybe detect someday
                extractor = false;
              }
              if ( !parser ) {
                parser = ts.detectParserForColumn( c, rows, -1, colIndex );
              }
              if ( c.debug ) {
                debug[ '(' + colIndex + ') ' + header.text() ] = {
                  parser : parser.id,
                  extractor : extractor ? extractor.id : 'none',
                  string : c.strings[ colIndex ],
                  empty  : c.empties[ colIndex ]
                };
              }
              list.parsers[ colIndex ] = parser;
              list.extractors[ colIndex ] = extractor;
              span = header[ 0 ].colSpan - 1;
              if ( span > 0 ) {
                colIndex += span;
                max += span;
                while ( span + 1 > 0 ) {
                  // set colspan columns to use the same parsers & extractors
                  list.parsers[ colIndex - span ] = parser;
                  list.extractors[ colIndex - span ] = extractor;
                  span--;
                }
              }
            }
            colIndex++;
          }
        }
        tbodyIndex += ( list.parsers.length ) ? len : 1;
      }
      if ( c.debug ) {
        if ( !ts.isEmptyObject( debug ) ) {
          console[ console.table ? 'table' : 'log' ]( debug );
        } else {
          console.warn( '  No parsers detected!' );
        }
        console.log( 'Completed detecting parsers' + ts.benchmark( time ) );
        if ( console.groupEnd ) { console.groupEnd(); }
      }
      c.parsers = list.parsers;
      c.extractors = list.extractors;
    },

    addParser : function( parser ) {
      var indx,
        len = ts.parsers.length,
        add = true;
      for ( indx = 0; indx < len; indx++ ) {
        if ( ts.parsers[ indx ].id.toLowerCase() === parser.id.toLowerCase() ) {
          add = false;
        }
      }
      if ( add ) {
        ts.parsers[ ts.parsers.length ] = parser;
      }
    },

    getParserById : function( name ) {
      /*jshint eqeqeq:false */
      if ( name == 'false' ) { return false; }
      var indx,
        len = ts.parsers.length;
      for ( indx = 0; indx < len; indx++ ) {
        if ( ts.parsers[ indx ].id.toLowerCase() === ( name.toString() ).toLowerCase() ) {
          return ts.parsers[ indx ];
        }
      }
      return false;
    },

    detectParserForColumn : function( c, rows, rowIndex, cellIndex ) {
      var cur, $node, row,
        indx = ts.parsers.length,
        node = false,
        nodeValue = '',
        keepLooking = true;
      while ( nodeValue === '' && keepLooking ) {
        rowIndex++;
        row = rows[ rowIndex ];
        // stop looking after 50 empty rows
        if ( row && rowIndex < 50 ) {
          if ( row.className.indexOf( ts.cssIgnoreRow ) < 0 ) {
            node = rows[ rowIndex ].cells[ cellIndex ];
            nodeValue = ts.getElementText( c, node, cellIndex );
            $node = $( node );
            if ( c.debug ) {
              console.log( 'Checking if value was empty on row ' + rowIndex + ', column: ' +
                cellIndex + ': "' + nodeValue + '"' );
            }
          }
        } else {
          keepLooking = false;
        }
      }
      while ( --indx >= 0 ) {
        cur = ts.parsers[ indx ];
        // ignore the default text parser because it will always be true
        if ( cur && cur.id !== 'text' && cur.is && cur.is( nodeValue, c.table, node, $node ) ) {
          return cur;
        }
      }
      // nothing found, return the generic parser (text)
      return ts.getParserById( 'text' );
    },

    getElementText : function( c, node, cellIndex ) {
      if ( !node ) { return ''; }
      var tmp,
        extract = c.textExtraction || '',
        // node could be a jquery object
        // http://jsperf.com/jquery-vs-instanceof-jquery/2
        $node = node.jquery ? node : $( node );
      if ( typeof extract === 'string' ) {
        // check data-attribute first when set to 'basic'; don't use node.innerText - it's really slow!
        // http://www.kellegous.com/j/2013/02/27/innertext-vs-textcontent/
        if ( extract === 'basic' && typeof ( tmp = $node.attr( c.textAttribute ) ) !== 'undefined' ) {
          return $.trim( tmp );
        }
        return $.trim( node.textContent || $node.text() );
      } else {
        if ( typeof extract === 'function' ) {
          return $.trim( extract( $node[ 0 ], c.table, cellIndex ) );
        } else if ( typeof ( tmp = ts.getColumnData( c.table, extract, cellIndex ) ) === 'function' ) {
          return $.trim( tmp( $node[ 0 ], c.table, cellIndex ) );
        }
      }
      // fallback
      return $.trim( $node[ 0 ].textContent || $node.text() );
    },

    // centralized function to extract/parse cell contents
    getParsedText : function( c, cell, colIndex, txt ) {
      if ( typeof txt === 'undefined' ) {
        txt = ts.getElementText( c, cell, colIndex );
      }
      // if no parser, make sure to return the txt
      var val = '' + txt,
        parser = c.parsers[ colIndex ],
        extractor = c.extractors[ colIndex ];
      if ( parser ) {
        // do extract before parsing, if there is one
        if ( extractor && typeof extractor.format === 'function' ) {
          txt = extractor.format( txt, c.table, cell, colIndex );
        }
        // allow parsing if the string is empty, previously parsing would change it to zero,
        // in case the parser needs to extract data from the table cell attributes
        val = parser.id === 'no-parser' ? '' :
          // make sure txt is a string (extractor may have converted it)
          parser.format( '' + txt, c.table, cell, colIndex );
        if ( c.ignoreCase && typeof val === 'string' ) {
          val = val.toLowerCase();
        }
      }
      return val;
    },

    /*
    ▄████▄ ▄████▄ ▄████▄ ██  ██ ██████
    ██  ▀▀ ██▄▄██ ██  ▀▀ ██▄▄██ ██▄▄
    ██  ▄▄ ██▀▀██ ██  ▄▄ ██▀▀██ ██▀▀
    ▀████▀ ██  ██ ▀████▀ ██  ██ ██████
    */
    buildCache : function( c, callback, $tbodies ) {
      var cache, val, txt, rowIndex, colIndex, tbodyIndex, $tbody, $row,
        cols, $cells, cell, cacheTime, totalRows, rowData, prevRowData,
        colMax, span, cacheIndex, hasParser, max, len, index,
        table = c.table,
        parsers = c.parsers;
      // update tbody variable
      c.$tbodies = c.$table.children( 'tbody:not(.' + c.cssInfoBlock + ')' );
      $tbody = typeof $tbodies === 'undefined' ? c.$tbodies : $tbodies,
      c.cache = {};
      c.totalRows = 0;
      // if no parsers found, return - it's an empty table.
      if ( !parsers ) {
        return c.debug ? console.warn( 'Warning: *Empty table!* Not building a cache' ) : '';
      }
      if ( c.debug ) {
        cacheTime = new Date();
      }
      // processing icon
      if ( c.showProcessing ) {
        ts.isProcessing( table, true );
      }
      for ( tbodyIndex = 0; tbodyIndex < $tbody.length; tbodyIndex++ ) {
        colMax = []; // column max value per tbody
        cache = c.cache[ tbodyIndex ] = {
          normalized: [] // array of normalized row data; last entry contains 'rowData' above
          // colMax: #   // added at the end
        };

        totalRows = ( $tbody[ tbodyIndex ] && $tbody[ tbodyIndex ].rows.length ) || 0;
        for ( rowIndex = 0; rowIndex < totalRows; ++rowIndex ) {
          rowData = {
            // order: original row order #
            // $row : jQuery Object[]
            child: [], // child row text (filter widget)
            raw: []    // original row text
          };
          /** Add the table data to main data array */
          $row = $( $tbody[ tbodyIndex ].rows[ rowIndex ] );
          cols = [];
          // ignore "remove-me" rows
          if ( $row.hasClass( c.selectorRemove.slice(1) ) ) {
            continue;
          }
          // if this is a child row, add it to the last row's children and continue to the next row
          // ignore child row class, if it is the first row
          if ( $row.hasClass( c.cssChildRow ) && rowIndex !== 0 ) {
            len = cache.normalized.length - 1;
            prevRowData = cache.normalized[ len ][ c.columns ];
            prevRowData.$row = prevRowData.$row.add( $row );
            // add 'hasChild' class name to parent row
            if ( !$row.prev().hasClass( c.cssChildRow ) ) {
              $row.prev().addClass( ts.css.cssHasChild );
            }
            // save child row content (un-parsed!)
            $cells = $row.children( 'th, td' );
            len = prevRowData.child.length;
            prevRowData.child[ len ] = [];
            // child row content does not account for colspans/rowspans; so indexing may be off
            cacheIndex = 0;
            max = c.columns;
            for ( colIndex = 0; colIndex < max; colIndex++ ) {
              cell = $cells[ colIndex ];
              if ( cell ) {
                prevRowData.child[ len ][ colIndex ] = ts.getParsedText( c, cell, colIndex );
                span = $cells[ colIndex ].colSpan - 1;
                if ( span > 0 ) {
                  cacheIndex += span;
                  max += span;
                }
              }
              cacheIndex++;
            }
            // go to the next for loop
            continue;
          }
          rowData.$row = $row;
          rowData.order = rowIndex; // add original row position to rowCache
          cacheIndex = 0;
          max = c.columns;
          for ( colIndex = 0; colIndex < max; ++colIndex ) {
            cell = $row[ 0 ].cells[ colIndex ];
            if ( cell && cacheIndex < c.columns ) {
              hasParser = typeof parsers[ cacheIndex ] !== 'undefined';
              if ( !hasParser && c.debug ) {
                console.warn( 'No parser found for row: ' + rowIndex + ', column: ' + colIndex +
                  '; cell containing: "' + $(cell).text() + '"; does it have a header?' );
              }
              val = ts.getElementText( c, cell, cacheIndex );
              rowData.raw[ cacheIndex ] = val; // save original row text
              // save raw column text even if there is no parser set
              txt = ts.getParsedText( c, cell, cacheIndex, val );
              cols[ cacheIndex ] = txt;
              if ( hasParser && ( parsers[ cacheIndex ].type || '' ).toLowerCase() === 'numeric' ) {
                // determine column max value (ignore sign)
                colMax[ cacheIndex ] = Math.max( Math.abs( txt ) || 0, colMax[ cacheIndex ] || 0 );
              }
              // allow colSpan in tbody
              span = cell.colSpan - 1;
              if ( span > 0 ) {
                index = 0;
                while ( index <= span ) {
                  // duplicate text (or not) to spanned columns
                  // instead of setting duplicate span to empty string, use textExtraction to try to get a value
                  // see http://stackoverflow.com/q/36449711/145346
                  txt = c.duplicateSpan || index === 0 ?
                    val :
                    typeof c.textExtraction !== 'string' ?
                      ts.getElementText( c, cell, cacheIndex + index ) || '' :
                      '';
                  rowData.raw[ cacheIndex + index ] = txt;
                  cols[ cacheIndex + index ] = txt;
                  index++;
                }
                cacheIndex += span;
                max += span;
              }
            }
            cacheIndex++;
          }
          // ensure rowData is always in the same location (after the last column)
          cols[ c.columns ] = rowData;
          cache.normalized[ cache.normalized.length ] = cols;
        }
        cache.colMax = colMax;
        // total up rows, not including child rows
        c.totalRows += cache.normalized.length;

      }
      if ( c.showProcessing ) {
        ts.isProcessing( table ); // remove processing icon
      }
      if ( c.debug ) {
        len = Math.min( 5, c.cache[ 0 ].normalized.length );
        console[ console.group ? 'group' : 'log' ]( 'Building cache for ' + c.totalRows +
          ' rows (showing ' + len + ' rows in log) and ' + c.columns + ' columns' +
          ts.benchmark( cacheTime ) );
        val = {};
        for ( colIndex = 0; colIndex < c.columns; colIndex++ ) {
          for ( cacheIndex = 0; cacheIndex < len; cacheIndex++ ) {
            if ( !val[ 'row: ' + cacheIndex ] ) {
              val[ 'row: ' + cacheIndex ] = {};
            }
            val[ 'row: ' + cacheIndex ][ c.$headerIndexed[ colIndex ].text() ] =
              c.cache[ 0 ].normalized[ cacheIndex ][ colIndex ];
          }
        }
        console[ console.table ? 'table' : 'log' ]( val );
        if ( console.groupEnd ) { console.groupEnd(); }
      }
      if ( $.isFunction( callback ) ) {
        callback( table );
      }
    },

    getColumnText : function( table, column, callback, rowFilter ) {
      table = $( table )[0];
      var tbodyIndex, rowIndex, cache, row, tbodyLen, rowLen, raw, parsed, $cell, result,
        hasCallback = typeof callback === 'function',
        allColumns = column === 'all',
        data = { raw : [], parsed: [], $cell: [] },
        c = table.config;
      if ( ts.isEmptyObject( c ) ) {
        if ( c.debug ) {
          console.warn( 'No cache found - aborting getColumnText function!' );
        }
      } else {
        tbodyLen = c.$tbodies.length;
        for ( tbodyIndex = 0; tbodyIndex < tbodyLen; tbodyIndex++ ) {
          cache = c.cache[ tbodyIndex ].normalized;
          rowLen = cache.length;
          for ( rowIndex = 0; rowIndex < rowLen; rowIndex++ ) {
            row = cache[ rowIndex ];
            if ( rowFilter && !row[ c.columns ].$row.is( rowFilter ) ) {
              continue;
            }
            result = true;
            parsed = ( allColumns ) ? row.slice( 0, c.columns ) : row[ column ];
            row = row[ c.columns ];
            raw = ( allColumns ) ? row.raw : row.raw[ column ];
            $cell = ( allColumns ) ? row.$row.children() : row.$row.children().eq( column );
            if ( hasCallback ) {
              result = callback({
                tbodyIndex : tbodyIndex,
                rowIndex : rowIndex,
                parsed : parsed,
                raw : raw,
                $row : row.$row,
                $cell : $cell
              });
            }
            if ( result !== false ) {
              data.parsed[ data.parsed.length ] = parsed;
              data.raw[ data.raw.length ] = raw;
              data.$cell[ data.$cell.length ] = $cell;
            }
          }
        }
        // return everything
        return data;
      }
    },

    /*
    ██  ██ █████▄ █████▄ ▄████▄ ██████ ██████
    ██  ██ ██▄▄██ ██  ██ ██▄▄██   ██   ██▄▄
    ██  ██ ██▀▀▀  ██  ██ ██▀▀██   ██   ██▀▀
    ▀████▀ ██     █████▀ ██  ██   ██   ██████
    */
    setHeadersCss : function( c ) {
      var indx, column,
        list = c.sortList,
        len = list.length,
        none = ts.css.sortNone + ' ' + c.cssNone,
        css = [ ts.css.sortAsc + ' ' + c.cssAsc, ts.css.sortDesc + ' ' + c.cssDesc ],
        cssIcon = [ c.cssIconAsc, c.cssIconDesc, c.cssIconNone ],
        aria = [ 'ascending', 'descending' ],
        updateColumnSort = function($el, index) {
          $el
            .removeClass( none )
            .addClass( css[ index ] )
            .attr( 'aria-sort', aria[ index ] )
            .find( '.' + ts.css.icon )
            .removeClass( cssIcon[ 2 ] )
            .addClass( cssIcon[ index ] );
        },
        // find the footer
        $extras = c.$table
          .find( 'tfoot tr' )
          .children( 'td, th' )
          .add( $( c.namespace + '_extra_headers' ) )
          .removeClass( css.join( ' ' ) ),
        // remove all header information
        $sorted = c.$headers
          .add( $( 'thead ' + c.namespace + '_extra_headers' ) )
          .removeClass( css.join( ' ' ) )
          .addClass( none )
          .attr( 'aria-sort', 'none' )
          .find( '.' + ts.css.icon )
          .removeClass( cssIcon.join( ' ' ) )
          .end();
      // add css none to all sortable headers
      $sorted
        .not( '.sorter-false' )
        .find( '.' + ts.css.icon )
        .addClass( cssIcon[ 2 ] );
      // add disabled css icon class
      if ( c.cssIconDisabled ) {
        $sorted
          .filter( '.sorter-false' )
          .find( '.' + ts.css.icon )
          .addClass( c.cssIconDisabled );
      }
      for ( indx = 0; indx < len; indx++ ) {
        // direction = 2 means reset!
        if ( list[ indx ][ 1 ] !== 2 ) {
          // multicolumn sorting updating - see #1005
          // .not(function(){}) needs jQuery 1.4
          // filter(function(i, el){}) <- el is undefined in jQuery v1.2.6
          $sorted = c.$headers.filter( function( i ) {
            // only include headers that are in the sortList (this includes colspans)
            var include = true,
              $el = c.$headers.eq( i ),
              col = parseInt( $el.attr( 'data-column' ), 10 ),
              end = col + ts.getClosest( $el, 'th, td' )[0].colSpan;
            for ( ; col < end; col++ ) {
              include = include ? include || ts.isValueInArray( col, c.sortList ) > -1 : false;
            }
            return include;
          });

          // choose the :last in case there are nested columns
          $sorted = $sorted
            .not( '.sorter-false' )
            .filter( '[data-column="' + list[ indx ][ 0 ] + '"]' + ( len === 1 ? ':last' : '' ) );
          if ( $sorted.length ) {
            for ( column = 0; column < $sorted.length; column++ ) {
              if ( !$sorted[ column ].sortDisabled ) {
                updateColumnSort( $sorted.eq( column ), list[ indx ][ 1 ] );
              }
            }
          }
          // add sorted class to footer & extra headers, if they exist
          if ( $extras.length ) {
            updateColumnSort( $extras.filter( '[data-column="' + list[ indx ][ 0 ] + '"]' ), list[ indx ][ 1 ] );
          }
        }
      }
      // add verbose aria labels
      len = c.$headers.length;
      for ( indx = 0; indx < len; indx++ ) {
        ts.setColumnAriaLabel( c, c.$headers.eq( indx ) );
      }
    },

    getClosest : function( $el, selector ) {
      // jQuery v1.2.6 doesn't have closest()
      if ( $.fn.closest ) {
        return $el.closest( selector );
      }
      return $el.is( selector ) ?
        $el :
        $el.parents( selector ).filter( ':first' );
    },

    // nextSort (optional), lets you disable next sort text
    setColumnAriaLabel : function( c, $header, nextSort ) {
      if ( $header.length ) {
        var column = parseInt( $header.attr( 'data-column' ), 10 ),
          vars = c.sortVars[ column ],
          tmp = $header.hasClass( ts.css.sortAsc ) ?
            'sortAsc' :
            $header.hasClass( ts.css.sortDesc ) ? 'sortDesc' : 'sortNone',
          txt = $.trim( $header.text() ) + ': ' + ts.language[ tmp ];
        if ( $header.hasClass( 'sorter-false' ) || nextSort === false ) {
          txt += ts.language.sortDisabled;
        } else {
          tmp = ( vars.count + 1 ) % vars.order.length;
          nextSort = vars.order[ tmp ];
          // if nextSort
          txt += ts.language[ nextSort === 0 ? 'nextAsc' : nextSort === 1 ? 'nextDesc' : 'nextNone' ];
        }
        $header.attr( 'aria-label', txt );
      }
    },

    updateHeader : function( c ) {
      var index, isDisabled, $header, col,
        table = c.table,
        len = c.$headers.length;
      for ( index = 0; index < len; index++ ) {
        $header = c.$headers.eq( index );
        col = ts.getColumnData( table, c.headers, index, true );
        // add 'sorter-false' class if 'parser-false' is set
        isDisabled = ts.getData( $header, col, 'sorter' ) === 'false' || ts.getData( $header, col, 'parser' ) === 'false';
        ts.setColumnSort( c, $header, isDisabled );
      }
    },

    setColumnSort : function( c, $header, isDisabled ) {
      var id = c.table.id;
      $header[ 0 ].sortDisabled = isDisabled;
      $header[ isDisabled ? 'addClass' : 'removeClass' ]( 'sorter-false' )
        .attr( 'aria-disabled', '' + isDisabled );
      // disable tab index on disabled cells
      if ( c.tabIndex ) {
        if ( isDisabled ) {
          $header.removeAttr( 'tabindex' );
        } else {
          $header.attr( 'tabindex', '0' );
        }
      }
      // aria-controls - requires table ID
      if ( id ) {
        if ( isDisabled ) {
          $header.removeAttr( 'aria-controls' );
        } else {
          $header.attr( 'aria-controls', id );
        }
      }
    },

    updateHeaderSortCount : function( c, list ) {
      var col, dir, group, indx, primary, temp, val, order,
        sortList = list || c.sortList,
        len = sortList.length;
      c.sortList = [];
      for ( indx = 0; indx < len; indx++ ) {
        val = sortList[ indx ];
        // ensure all sortList values are numeric - fixes #127
        col = parseInt( val[ 0 ], 10 );
        // prevents error if sorton array is wrong
        if ( col < c.columns ) {

          // set order if not already defined - due to colspan header without associated header cell
          // adding this check prevents a javascript error
          if ( !c.sortVars[ col ].order ) {
            if ( ts.getOrder( c.sortInitialOrder ) ) {
              order = c.sortReset ? [ 1, 0, 2 ] : [ 1, 0 ];
            } else {
              order = c.sortReset ? [ 0, 1, 2 ] : [ 0, 1 ];
            }
            c.sortVars[ col ].order = order;
            c.sortVars[ col ].count = 0;
          }

          order = c.sortVars[ col ].order;
          dir = ( '' + val[ 1 ] ).match( /^(1|d|s|o|n)/ );
          dir = dir ? dir[ 0 ] : '';
          // 0/(a)sc (default), 1/(d)esc, (s)ame, (o)pposite, (n)ext
          switch ( dir ) {
            case '1' : case 'd' : // descending
              dir = 1;
              break;
            case 's' : // same direction (as primary column)
              // if primary sort is set to 's', make it ascending
              dir = primary || 0;
              break;
            case 'o' :
              temp = order[ ( primary || 0 ) % order.length ];
              // opposite of primary column; but resets if primary resets
              dir = temp === 0 ? 1 : temp === 1 ? 0 : 2;
              break;
            case 'n' :
              dir = order[ ( ++c.sortVars[ col ].count ) % order.length ];
              break;
            default : // ascending
              dir = 0;
              break;
          }
          primary = indx === 0 ? dir : primary;
          group = [ col, parseInt( dir, 10 ) || 0 ];
          c.sortList[ c.sortList.length ] = group;
          dir = $.inArray( group[ 1 ], order ); // fixes issue #167
          c.sortVars[ col ].count = dir >= 0 ? dir : group[ 1 ] % order.length;
        }
      }
    },

    updateAll : function( c, resort, callback ) {
      var table = c.table;
      table.isUpdating = true;
      ts.refreshWidgets( table, true, true );
      ts.buildHeaders( c );
      ts.bindEvents( table, c.$headers, true );
      ts.bindMethods( c );
      ts.commonUpdate( c, resort, callback );
    },

    update : function( c, resort, callback ) {
      var table = c.table;
      table.isUpdating = true;
      // update sorting (if enabled/disabled)
      ts.updateHeader( c );
      ts.commonUpdate( c, resort, callback );
    },

    // simple header update - see #989
    updateHeaders : function( c, callback ) {
      c.table.isUpdating = true;
      ts.buildHeaders( c );
      ts.bindEvents( c.table, c.$headers, true );
      ts.resortComplete( c, callback );
    },

    updateCell : function( c, cell, resort, callback ) {
      // updateCell for child rows is a mess - we'll ignore them for now
      // eventually I'll break out the "update" row cache code to make everything consistent
      if ( $( cell ).closest( 'tr' ).hasClass( c.cssChildRow ) ) {
        console.warn('Tablesorter Warning! "updateCell" for child row content has been disabled, use "update" instead');
        return;
      }
      if ( ts.isEmptyObject( c.cache ) ) {
        // empty table, do an update instead - fixes #1099
        ts.updateHeader( c );
        ts.commonUpdate( c, resort, callback );
        return;
      }
      c.table.isUpdating = true;
      c.$table.find( c.selectorRemove ).remove();
      // get position from the dom
      var tmp, indx, row, icell, cache, len,
        $tbodies = c.$tbodies,
        $cell = $( cell ),
        // update cache - format: function( s, table, cell, cellIndex )
        // no closest in jQuery v1.2.6
        tbodyIndex = $tbodies.index( ts.getClosest( $cell, 'tbody' ) ),
        tbcache = c.cache[ tbodyIndex ],
        $row = ts.getClosest( $cell, 'tr' );
      cell = $cell[ 0 ]; // in case cell is a jQuery object
      // tbody may not exist if update is initialized while tbody is removed for processing
      if ( $tbodies.length && tbodyIndex >= 0 ) {
        row = $tbodies.eq( tbodyIndex ).find( 'tr' ).not( '.' + c.cssChildRow ).index( $row );
        cache = tbcache.normalized[ row ];
        len = $row[ 0 ].cells.length;
        if ( len !== c.columns ) {
          // colspan in here somewhere!
          icell = 0;
          tmp = false;
          for ( indx = 0; indx < len; indx++ ) {
            if ( !tmp && $row[ 0 ].cells[ indx ] !== cell ) {
              icell += $row[ 0 ].cells[ indx ].colSpan;
            } else {
              tmp = true;
            }
          }
        } else {
          icell = $cell.index();
        }
        tmp = ts.getElementText( c, cell, icell ); // raw
        cache[ c.columns ].raw[ icell ] = tmp;
        tmp = ts.getParsedText( c, cell, icell, tmp );
        cache[ icell ] = tmp; // parsed
        if ( ( c.parsers[ icell ].type || '' ).toLowerCase() === 'numeric' ) {
          // update column max value (ignore sign)
          tbcache.colMax[ icell ] = Math.max( Math.abs( tmp ) || 0, tbcache.colMax[ icell ] || 0 );
        }
        tmp = resort !== 'undefined' ? resort : c.resort;
        if ( tmp !== false ) {
          // widgets will be reapplied
          ts.checkResort( c, tmp, callback );
        } else {
          // don't reapply widgets is resort is false, just in case it causes
          // problems with element focus
          ts.resortComplete( c, callback );
        }
      } else {
        if ( c.debug ) {
          console.error( 'updateCell aborted, tbody missing or not within the indicated table' );
        }
        c.table.isUpdating = false;
      }
    },

    addRows : function( c, $row, resort, callback ) {
      var txt, val, tbodyIndex, rowIndex, rows, cellIndex, len, order,
        cacheIndex, rowData, cells, cell, span,
        // allow passing a row string if only one non-info tbody exists in the table
        valid = typeof $row === 'string' && c.$tbodies.length === 1 && /<tr/.test( $row || '' ),
        table = c.table;
      if ( valid ) {
        $row = $( $row );
        c.$tbodies.append( $row );
      } else if (
        !$row ||
        // row is a jQuery object?
        !( $row instanceof jQuery ) ||
        // row contained in the table?
        ( ts.getClosest( $row, 'table' )[ 0 ] !== c.table )
      ) {
        if ( c.debug ) {
          console.error( 'addRows method requires (1) a jQuery selector reference to rows that have already ' +
            'been added to the table, or (2) row HTML string to be added to a table with only one tbody' );
        }
        return false;
      }
      table.isUpdating = true;
      if ( ts.isEmptyObject( c.cache ) ) {
        // empty table, do an update instead - fixes #450
        ts.updateHeader( c );
        ts.commonUpdate( c, resort, callback );
      } else {
        rows = $row.filter( 'tr' ).attr( 'role', 'row' ).length;
        tbodyIndex = c.$tbodies.index( $row.parents( 'tbody' ).filter( ':first' ) );
        // fixes adding rows to an empty table - see issue #179
        if ( !( c.parsers && c.parsers.length ) ) {
          ts.setupParsers( c );
        }
        // add each row
        for ( rowIndex = 0; rowIndex < rows; rowIndex++ ) {
          cacheIndex = 0;
          len = $row[ rowIndex ].cells.length;
          order = c.cache[ tbodyIndex ].normalized.length;
          cells = [];
          rowData = {
            child : [],
            raw : [],
            $row : $row.eq( rowIndex ),
            order : order
          };
          // add each cell
          for ( cellIndex = 0; cellIndex < len; cellIndex++ ) {
            cell = $row[ rowIndex ].cells[ cellIndex ];
            txt = ts.getElementText( c, cell, cacheIndex );
            rowData.raw[ cacheIndex ] = txt;
            val = ts.getParsedText( c, cell, cacheIndex, txt );
            cells[ cacheIndex ] = val;
            if ( ( c.parsers[ cacheIndex ].type || '' ).toLowerCase() === 'numeric' ) {
              // update column max value (ignore sign)
              c.cache[ tbodyIndex ].colMax[ cacheIndex ] =
                Math.max( Math.abs( val ) || 0, c.cache[ tbodyIndex ].colMax[ cacheIndex ] || 0 );
            }
            span = cell.colSpan - 1;
            if ( span > 0 ) {
              cacheIndex += span;
            }
            cacheIndex++;
          }
          // add the row data to the end
          cells[ c.columns ] = rowData;
          // update cache
          c.cache[ tbodyIndex ].normalized[ order ] = cells;
        }
        // resort using current settings
        ts.checkResort( c, resort, callback );
      }
    },

    updateCache : function( c, callback, $tbodies ) {
      // rebuild parsers
      if ( !( c.parsers && c.parsers.length ) ) {
        ts.setupParsers( c, $tbodies );
      }
      // rebuild the cache map
      ts.buildCache( c, callback, $tbodies );
    },

    // init flag (true) used by pager plugin to prevent widget application
    // renamed from appendToTable
    appendCache : function( c, init ) {
      var parsed, totalRows, $tbody, $curTbody, rowIndex, tbodyIndex, appendTime,
        table = c.table,
        wo = c.widgetOptions,
        $tbodies = c.$tbodies,
        rows = [],
        cache = c.cache;
      // empty table - fixes #206/#346
      if ( ts.isEmptyObject( cache ) ) {
        // run pager appender in case the table was just emptied
        return c.appender ? c.appender( table, rows ) :
          table.isUpdating ? c.$table.triggerHandler( 'updateComplete', table ) : ''; // Fixes #532
      }
      if ( c.debug ) {
        appendTime = new Date();
      }
      for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
        $tbody = $tbodies.eq( tbodyIndex );
        if ( $tbody.length ) {
          // detach tbody for manipulation
          $curTbody = ts.processTbody( table, $tbody, true );
          parsed = cache[ tbodyIndex ].normalized;
          totalRows = parsed.length;
          for ( rowIndex = 0; rowIndex < totalRows; rowIndex++ ) {
            rows[rows.length] = parsed[ rowIndex ][ c.columns ].$row;
            // removeRows used by the pager plugin; don't render if using ajax - fixes #411
            if ( !c.appender || ( c.pager && ( !c.pager.removeRows || !wo.pager_removeRows ) && !c.pager.ajax ) ) {
              $curTbody.append( parsed[ rowIndex ][ c.columns ].$row );
            }
          }
          // restore tbody
          ts.processTbody( table, $curTbody, false );
        }
      }
      if ( c.appender ) {
        c.appender( table, rows );
      }
      if ( c.debug ) {
        console.log( 'Rebuilt table' + ts.benchmark( appendTime ) );
      }
      // apply table widgets; but not before ajax completes
      if ( !init && !c.appender ) {
        ts.applyWidget( table );
      }
      if ( table.isUpdating ) {
        c.$table.triggerHandler( 'updateComplete', table );
      }
    },

    commonUpdate : function( c, resort, callback ) {
      // remove rows/elements before update
      c.$table.find( c.selectorRemove ).remove();
      // rebuild parsers
      ts.setupParsers( c );
      // rebuild the cache map
      ts.buildCache( c );
      ts.checkResort( c, resort, callback );
    },

    /*
    ▄█████ ▄████▄ █████▄ ██████ ██ █████▄ ▄████▄
    ▀█▄    ██  ██ ██▄▄██   ██   ██ ██  ██ ██ ▄▄▄
       ▀█▄ ██  ██ ██▀██    ██   ██ ██  ██ ██ ▀██
    █████▀ ▀████▀ ██  ██   ██   ██ ██  ██ ▀████▀
    */
    initSort : function( c, cell, event ) {
      if ( c.table.isUpdating ) {
        // let any updates complete before initializing a sort
        return setTimeout( function(){
          ts.initSort( c, cell, event );
        }, 50 );
      }

      var arry, indx, headerIndx, dir, temp, tmp, $header,
        notMultiSort = !event[ c.sortMultiSortKey ],
        table = c.table,
        len = c.$headers.length,
        th = ts.getClosest( $( cell ), 'th, td' ),
        col = parseInt( th.attr( 'data-column' ), 10 ),
        order = c.sortVars[ col ].order;
      th = th[0];
      // Only call sortStart if sorting is enabled
      c.$table.triggerHandler( 'sortStart', table );
      // get current column sort order
      tmp = ( c.sortVars[ col ].count + 1 ) % order.length;
      c.sortVars[ col ].count = event[ c.sortResetKey ] ? 2 : tmp;
      // reset all sorts on non-current column - issue #30
      if ( c.sortRestart ) {
        for ( headerIndx = 0; headerIndx < len; headerIndx++ ) {
          $header = c.$headers.eq( headerIndx );
          tmp = parseInt( $header.attr( 'data-column' ), 10 );
          // only reset counts on columns that weren't just clicked on and if not included in a multisort
          if ( col !== tmp && ( notMultiSort || $header.hasClass( ts.css.sortNone ) ) ) {
            c.sortVars[ tmp ].count = -1;
          }
        }
      }
      // user only wants to sort on one column
      if ( notMultiSort ) {
        // flush the sort list
        c.sortList = [];
        c.last.sortList = [];
        if ( c.sortForce !== null ) {
          arry = c.sortForce;
          for ( indx = 0; indx < arry.length; indx++ ) {
            if ( arry[ indx ][ 0 ] !== col ) {
              c.sortList[ c.sortList.length ] = arry[ indx ];
            }
          }
        }
        // add column to sort list
        dir = order[ c.sortVars[ col ].count ];
        if ( dir < 2 ) {
          c.sortList[ c.sortList.length ] = [ col, dir ];
          // add other columns if header spans across multiple
          if ( th.colSpan > 1 ) {
            for ( indx = 1; indx < th.colSpan; indx++ ) {
              c.sortList[ c.sortList.length ] = [ col + indx, dir ];
              // update count on columns in colSpan
              c.sortVars[ col + indx ].count = $.inArray( dir, order );
            }
          }
        }
        // multi column sorting
      } else {
        // get rid of the sortAppend before adding more - fixes issue #115 & #523
        c.sortList = $.extend( [], c.last.sortList );

        // the user has clicked on an already sorted column
        if ( ts.isValueInArray( col, c.sortList ) >= 0 ) {
          // reverse the sorting direction
          for ( indx = 0; indx < c.sortList.length; indx++ ) {
            tmp = c.sortList[ indx ];
            if ( tmp[ 0 ] === col ) {
              // order.count seems to be incorrect when compared to cell.count
              tmp[ 1 ] = order[ c.sortVars[ col ].count ];
              if ( tmp[1] === 2 ) {
                c.sortList.splice( indx, 1 );
                c.sortVars[ col ].count = -1;
              }
            }
          }
        } else {
          // add column to sort list array
          dir = order[ c.sortVars[ col ].count ];
          if ( dir < 2 ) {
            c.sortList[ c.sortList.length ] = [ col, dir ];
            // add other columns if header spans across multiple
            if ( th.colSpan > 1 ) {
              for ( indx = 1; indx < th.colSpan; indx++ ) {
                c.sortList[ c.sortList.length ] = [ col + indx, dir ];
                // update count on columns in colSpan
                c.sortVars[ col + indx ].count = $.inArray( dir, order );
              }
            }
          }
        }
      }
      // save sort before applying sortAppend
      c.last.sortList = $.extend( [], c.sortList );
      if ( c.sortList.length && c.sortAppend ) {
        arry = $.isArray( c.sortAppend ) ? c.sortAppend : c.sortAppend[ c.sortList[ 0 ][ 0 ] ];
        if ( !ts.isEmptyObject( arry ) ) {
          for ( indx = 0; indx < arry.length; indx++ ) {
            if ( arry[ indx ][ 0 ] !== col && ts.isValueInArray( arry[ indx ][ 0 ], c.sortList ) < 0 ) {
              dir = arry[ indx ][ 1 ];
              temp = ( '' + dir ).match( /^(a|d|s|o|n)/ );
              if ( temp ) {
                tmp = c.sortList[ 0 ][ 1 ];
                switch ( temp[ 0 ] ) {
                  case 'd' :
                    dir = 1;
                    break;
                  case 's' :
                    dir = tmp;
                    break;
                  case 'o' :
                    dir = tmp === 0 ? 1 : 0;
                    break;
                  case 'n' :
                    dir = ( tmp + 1 ) % order.length;
                    break;
                  default:
                    dir = 0;
                    break;
                }
              }
              c.sortList[ c.sortList.length ] = [ arry[ indx ][ 0 ], dir ];
            }
          }
        }
      }
      // sortBegin event triggered immediately before the sort
      c.$table.triggerHandler( 'sortBegin', table );
      // setTimeout needed so the processing icon shows up
      setTimeout( function() {
        // set css for headers
        ts.setHeadersCss( c );
        ts.multisort( c );
        ts.appendCache( c );
        c.$table.triggerHandler( 'sortBeforeEnd', table );
        c.$table.triggerHandler( 'sortEnd', table );
      }, 1 );
    },

    // sort multiple columns
    multisort : function( c ) { /*jshint loopfunc:true */
      var tbodyIndex, sortTime, colMax, rows, tmp,
        table = c.table,
        sorter = [],
        dir = 0,
        textSorter = c.textSorter || '',
        sortList = c.sortList,
        sortLen = sortList.length,
        len = c.$tbodies.length;
      if ( c.serverSideSorting || ts.isEmptyObject( c.cache ) ) {
        // empty table - fixes #206/#346
        return;
      }
      if ( c.debug ) { sortTime = new Date(); }
      // cache textSorter to optimize speed
      if ( typeof textSorter === 'object' ) {
        colMax = c.columns;
        while ( colMax-- ) {
          tmp = ts.getColumnData( table, textSorter, colMax );
          if ( typeof tmp === 'function' ) {
            sorter[ colMax ] = tmp;
          }
        }
      }
      for ( tbodyIndex = 0; tbodyIndex < len; tbodyIndex++ ) {
        colMax = c.cache[ tbodyIndex ].colMax;
        rows = c.cache[ tbodyIndex ].normalized;

        rows.sort( function( a, b ) {
          var sortIndex, num, col, order, sort, x, y;
          // rows is undefined here in IE, so don't use it!
          for ( sortIndex = 0; sortIndex < sortLen; sortIndex++ ) {
            col = sortList[ sortIndex ][ 0 ];
            order = sortList[ sortIndex ][ 1 ];
            // sort direction, true = asc, false = desc
            dir = order === 0;

            if ( c.sortStable && a[ col ] === b[ col ] && sortLen === 1 ) {
              return a[ c.columns ].order - b[ c.columns ].order;
            }

            // fallback to natural sort since it is more robust
            num = /n/i.test( ts.getSortType( c.parsers, col ) );
            if ( num && c.strings[ col ] ) {
              // sort strings in numerical columns
              if ( typeof ( ts.string[ c.strings[ col ] ] ) === 'boolean' ) {
                num = ( dir ? 1 : -1 ) * ( ts.string[ c.strings[ col ] ] ? -1 : 1 );
              } else {
                num = ( c.strings[ col ] ) ? ts.string[ c.strings[ col ] ] || 0 : 0;
              }
              // fall back to built-in numeric sort
              // var sort = $.tablesorter['sort' + s]( a[col], b[col], dir, colMax[col], table );
              sort = c.numberSorter ? c.numberSorter( a[ col ], b[ col ], dir, colMax[ col ], table ) :
                ts[ 'sortNumeric' + ( dir ? 'Asc' : 'Desc' ) ]( a[ col ], b[ col ], num, colMax[ col ], col, c );
            } else {
              // set a & b depending on sort direction
              x = dir ? a : b;
              y = dir ? b : a;
              // text sort function
              if ( typeof textSorter === 'function' ) {
                // custom OVERALL text sorter
                sort = textSorter( x[ col ], y[ col ], dir, col, table );
              } else if ( typeof sorter[ col ] === 'function' ) {
                // custom text sorter for a SPECIFIC COLUMN
                sort = sorter[ col ]( x[ col ], y[ col ], dir, col, table );
              } else {
                // fall back to natural sort
                sort = ts[ 'sortNatural' + ( dir ? 'Asc' : 'Desc' ) ]( a[ col ], b[ col ], col, c );
              }
            }
            if ( sort ) { return sort; }
          }
          return a[ c.columns ].order - b[ c.columns ].order;
        });
      }
      if ( c.debug ) {
        console.log( 'Applying sort ' + sortList.toString() + ts.benchmark( sortTime ) );
      }
    },

    resortComplete : function( c, callback ) {
      if ( c.table.isUpdating ) {
        c.$table.triggerHandler( 'updateComplete', c.table );
      }
      if ( $.isFunction( callback ) ) {
        callback( c.table );
      }
    },

    checkResort : function( c, resort, callback ) {
      var sortList = $.isArray( resort ) ? resort : c.sortList,
        // if no resort parameter is passed, fallback to config.resort (true by default)
        resrt = typeof resort === 'undefined' ? c.resort : resort;
      // don't try to resort if the table is still processing
      // this will catch spamming of the updateCell method
      if ( resrt !== false && !c.serverSideSorting && !c.table.isProcessing ) {
        if ( sortList.length ) {
          ts.sortOn( c, sortList, function() {
            ts.resortComplete( c, callback );
          }, true );
        } else {
          ts.sortReset( c, function() {
            ts.resortComplete( c, callback );
            ts.applyWidget( c.table, false );
          } );
        }
      } else {
        ts.resortComplete( c, callback );
        ts.applyWidget( c.table, false );
      }
    },

    sortOn : function( c, list, callback, init ) {
      var table = c.table;
      c.$table.triggerHandler( 'sortStart', table );
      // update header count index
      ts.updateHeaderSortCount( c, list );
      // set css for headers
      ts.setHeadersCss( c );
      // fixes #346
      if ( c.delayInit && ts.isEmptyObject( c.cache ) ) {
        ts.buildCache( c );
      }
      c.$table.triggerHandler( 'sortBegin', table );
      // sort the table and append it to the dom
      ts.multisort( c );
      ts.appendCache( c, init );
      c.$table.triggerHandler( 'sortBeforeEnd', table );
      c.$table.triggerHandler( 'sortEnd', table );
      ts.applyWidget( table );
      if ( $.isFunction( callback ) ) {
        callback( table );
      }
    },

    sortReset : function( c, callback ) {
      c.sortList = [];
      ts.setHeadersCss( c );
      ts.multisort( c );
      ts.appendCache( c );
      var indx;
      for (indx = 0; indx < c.columns; indx++) {
        c.sortVars[ indx ].count = -1;
      }
      if ( $.isFunction( callback ) ) {
        callback( c.table );
      }
    },

    getSortType : function( parsers, column ) {
      return ( parsers && parsers[ column ] ) ? parsers[ column ].type || '' : '';
    },

    getOrder : function( val ) {
      // look for 'd' in 'desc' order; return true
      return ( /^d/i.test( val ) || val === 1 );
    },

    // Natural sort - https://github.com/overset/javascript-natural-sort (date sorting removed)
    sortNatural : function( a, b ) {
      if ( a === b ) { return 0; }
      a = a.toString();
      b = b.toString();
      var aNum, bNum, aFloat, bFloat, indx, max,
        regex = ts.regex;
      // first try and sort Hex codes
      if ( regex.hex.test( b ) ) {
        aNum = parseInt( ( a || '' ).match( regex.hex ), 16 );
        bNum = parseInt( ( b || '' ).match( regex.hex ), 16 );
        if ( aNum < bNum ) { return -1; }
        if ( aNum > bNum ) { return 1; }
      }
      // chunk/tokenize
      aNum = ( a || '' ).replace( regex.chunk, '\\0$1\\0' ).replace( regex.chunks, '' ).split( '\\0' );
      bNum = ( b || '' ).replace( regex.chunk, '\\0$1\\0' ).replace( regex.chunks, '' ).split( '\\0' );
      max = Math.max( aNum.length, bNum.length );
      // natural sorting through split numeric strings and default strings
      for ( indx = 0; indx < max; indx++ ) {
        // find floats not starting with '0', string or 0 if not defined
        aFloat = isNaN( aNum[ indx ] ) ? aNum[ indx ] || 0 : parseFloat( aNum[ indx ] ) || 0;
        bFloat = isNaN( bNum[ indx ] ) ? bNum[ indx ] || 0 : parseFloat( bNum[ indx ] ) || 0;
        // handle numeric vs string comparison - number < string - (Kyle Adams)
        if ( isNaN( aFloat ) !== isNaN( bFloat ) ) { return isNaN( aFloat ) ? 1 : -1; }
        // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
        if ( typeof aFloat !== typeof bFloat ) {
          aFloat += '';
          bFloat += '';
        }
        if ( aFloat < bFloat ) { return -1; }
        if ( aFloat > bFloat ) { return 1; }
      }
      return 0;
    },

    sortNaturalAsc : function( a, b, col, c ) {
      if ( a === b ) { return 0; }
      var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
      if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : -empty || -1; }
      if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : empty || 1; }
      return ts.sortNatural( a, b );
    },

    sortNaturalDesc : function( a, b, col, c ) {
      if ( a === b ) { return 0; }
      var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
      if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : empty || 1; }
      if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : -empty || -1; }
      return ts.sortNatural( b, a );
    },

    // basic alphabetical sort
    sortText : function( a, b ) {
      return a > b ? 1 : ( a < b ? -1 : 0 );
    },

    // return text string value by adding up ascii value
    // so the text is somewhat sorted when using a digital sort
    // this is NOT an alphanumeric sort
    getTextValue : function( val, num, max ) {
      if ( max ) {
        // make sure the text value is greater than the max numerical value (max)
        var indx,
          len = val ? val.length : 0,
          n = max + num;
        for ( indx = 0; indx < len; indx++ ) {
          n += val.charCodeAt( indx );
        }
        return num * n;
      }
      return 0;
    },

    sortNumericAsc : function( a, b, num, max, col, c ) {
      if ( a === b ) { return 0; }
      var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
      if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : -empty || -1; }
      if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : empty || 1; }
      if ( isNaN( a ) ) { a = ts.getTextValue( a, num, max ); }
      if ( isNaN( b ) ) { b = ts.getTextValue( b, num, max ); }
      return a - b;
    },

    sortNumericDesc : function( a, b, num, max, col, c ) {
      if ( a === b ) { return 0; }
      var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
      if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : empty || 1; }
      if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : -empty || -1; }
      if ( isNaN( a ) ) { a = ts.getTextValue( a, num, max ); }
      if ( isNaN( b ) ) { b = ts.getTextValue( b, num, max ); }
      return b - a;
    },

    sortNumeric : function( a, b ) {
      return a - b;
    },

    /*
    ██ ██ ██ ██ █████▄ ▄████▄ ██████ ██████ ▄█████
    ██ ██ ██ ██ ██  ██ ██ ▄▄▄ ██▄▄     ██   ▀█▄
    ██ ██ ██ ██ ██  ██ ██ ▀██ ██▀▀     ██      ▀█▄
    ███████▀ ██ █████▀ ▀████▀ ██████   ██   █████▀
    */
    addWidget : function( widget ) {
      if ( widget.id && !ts.isEmptyObject( ts.getWidgetById( widget.id ) ) ) {
        console.warn( '"' + widget.id + '" widget was loaded more than once!' );
      }
      ts.widgets[ ts.widgets.length ] = widget;
    },

    hasWidget : function( $table, name ) {
      $table = $( $table );
      return $table.length && $table[ 0 ].config && $table[ 0 ].config.widgetInit[ name ] || false;
    },

    getWidgetById : function( name ) {
      var indx, widget,
        len = ts.widgets.length;
      for ( indx = 0; indx < len; indx++ ) {
        widget = ts.widgets[ indx ];
        if ( widget && widget.id && widget.id.toLowerCase() === name.toLowerCase() ) {
          return widget;
        }
      }
    },

    applyWidgetOptions : function( table ) {
      var indx, widget, wo,
        c = table.config,
        len = c.widgets.length;
      if ( len ) {
        for ( indx = 0; indx < len; indx++ ) {
          widget = ts.getWidgetById( c.widgets[ indx ] );
          if ( widget && widget.options ) {
            wo = $.extend( true, {}, widget.options );
            c.widgetOptions = $.extend( true, wo, c.widgetOptions );
            // add widgetOptions to defaults for option validator
            $.extend( true, ts.defaults.widgetOptions, widget.options );
          }
        }
      }
    },

    addWidgetFromClass : function( table ) {
      var len, indx,
        c = table.config,
        // look for widgets to apply from table class
        // don't match from 'ui-widget-content'; use \S instead of \w to include widgets
        // with dashes in the name, e.g. "widget-test-2" extracts out "test-2"
        regex = '^' + c.widgetClass.replace( ts.regex.templateName, '(\\S+)+' ) + '$',
        widgetClass = new RegExp( regex, 'g' ),
        // split up table class (widget id's can include dashes) - stop using match
        // otherwise only one widget gets extracted, see #1109
        widgets = ( table.className || '' ).split( ts.regex.spaces );
      if ( widgets.length ) {
        len = widgets.length;
        for ( indx = 0; indx < len; indx++ ) {
          if ( widgets[ indx ].match( widgetClass ) ) {
            c.widgets[ c.widgets.length ] = widgets[ indx ].replace( widgetClass, '$1' );
          }
        }
      }
    },

    applyWidgetId : function( table, id, init ) {
      table = $(table)[0];
      var applied, time, name,
        c = table.config,
        wo = c.widgetOptions,
        widget = ts.getWidgetById( id );
      if ( widget ) {
        name = widget.id;
        applied = false;
        // add widget name to option list so it gets reapplied after sorting, filtering, etc
        if ( $.inArray( name, c.widgets ) < 0 ) {
          c.widgets[ c.widgets.length ] = name;
        }
        if ( c.debug ) { time = new Date(); }

        if ( init || !( c.widgetInit[ name ] ) ) {
          // set init flag first to prevent calling init more than once (e.g. pager)
          c.widgetInit[ name ] = true;
          if ( table.hasInitialized ) {
            // don't reapply widget options on tablesorter init
            ts.applyWidgetOptions( table );
          }
          if ( typeof widget.init === 'function' ) {
            applied = true;
            if ( c.debug ) {
              console[ console.group ? 'group' : 'log' ]( 'Initializing ' + name + ' widget' );
            }
            widget.init( table, widget, c, wo );
          }
        }
        if ( !init && typeof widget.format === 'function' ) {
          applied = true;
          if ( c.debug ) {
            console[ console.group ? 'group' : 'log' ]( 'Updating ' + name + ' widget' );
          }
          widget.format( table, c, wo, false );
        }
        if ( c.debug ) {
          if ( applied ) {
            console.log( 'Completed ' + ( init ? 'initializing ' : 'applying ' ) + name + ' widget' + ts.benchmark( time ) );
            if ( console.groupEnd ) { console.groupEnd(); }
          }
        }
      }
    },

    applyWidget : function( table, init, callback ) {
      table = $( table )[ 0 ]; // in case this is called externally
      var indx, len, names, widget, time,
        c = table.config,
        widgets = [];
      // prevent numerous consecutive widget applications
      if ( init !== false && table.hasInitialized && ( table.isApplyingWidgets || table.isUpdating ) ) {
        return;
      }
      if ( c.debug ) { time = new Date(); }
      ts.addWidgetFromClass( table );
      // prevent "tablesorter-ready" from firing multiple times in a row
      clearTimeout( c.timerReady );
      if ( c.widgets.length ) {
        table.isApplyingWidgets = true;
        // ensure unique widget ids
        c.widgets = $.grep( c.widgets, function( val, index ) {
          return $.inArray( val, c.widgets ) === index;
        });
        names = c.widgets || [];
        len = names.length;
        // build widget array & add priority as needed
        for ( indx = 0; indx < len; indx++ ) {
          widget = ts.getWidgetById( names[ indx ] );
          if ( widget && widget.id ) {
            // set priority to 10 if not defined
            if ( !widget.priority ) { widget.priority = 10; }
            widgets[ indx ] = widget;
          } else if ( c.debug ) {
            console.warn( '"' + names[ indx ] + '" was enabled, but the widget code has not been loaded!' );
          }
        }
        // sort widgets by priority
        widgets.sort( function( a, b ) {
          return a.priority < b.priority ? -1 : a.priority === b.priority ? 0 : 1;
        });
        // add/update selected widgets
        len = widgets.length;
        if ( c.debug ) {
          console[ console.group ? 'group' : 'log' ]( 'Start ' + ( init ? 'initializing' : 'applying' ) + ' widgets' );
        }
        for ( indx = 0; indx < len; indx++ ) {
          widget = widgets[ indx ];
          if ( widget && widget.id ) {
            ts.applyWidgetId( table, widget.id, init );
          }
        }
        if ( c.debug && console.groupEnd ) { console.groupEnd(); }
      }
      c.timerReady = setTimeout( function() {
        table.isApplyingWidgets = false;
        $.data( table, 'lastWidgetApplication', new Date() );
        c.$table.triggerHandler( 'tablesorter-ready' );
        // callback executed on init only
        if ( !init && typeof callback === 'function' ) {
          callback( table );
        }
        if ( c.debug ) {
          widget = c.widgets.length;
          console.log( 'Completed ' +
            ( init === true ? 'initializing ' : 'applying ' ) + widget +
            ' widget' + ( widget !== 1 ? 's' : '' ) + ts.benchmark( time ) );
        }
      }, 10 );
    },

    removeWidget : function( table, name, refreshing ) {
      table = $( table )[ 0 ];
      var index, widget, indx, len,
        c = table.config;
      // if name === true, add all widgets from $.tablesorter.widgets
      if ( name === true ) {
        name = [];
        len = ts.widgets.length;
        for ( indx = 0; indx < len; indx++ ) {
          widget = ts.widgets[ indx ];
          if ( widget && widget.id ) {
            name[ name.length ] = widget.id;
          }
        }
      } else {
        // name can be either an array of widgets names,
        // or a space/comma separated list of widget names
        name = ( $.isArray( name ) ? name.join( ',' ) : name || '' ).toLowerCase().split( /[\s,]+/ );
      }
      len = name.length;
      for ( index = 0; index < len; index++ ) {
        widget = ts.getWidgetById( name[ index ] );
        indx = $.inArray( name[ index ], c.widgets );
        // don't remove the widget from config.widget if refreshing
        if ( indx >= 0 && refreshing !== true ) {
          c.widgets.splice( indx, 1 );
        }
        if ( widget && widget.remove ) {
          if ( c.debug ) {
            console.log( ( refreshing ? 'Refreshing' : 'Removing' ) + ' "' + name[ index ] + '" widget' );
          }
          widget.remove( table, c, c.widgetOptions, refreshing );
          c.widgetInit[ name[ index ] ] = false;
        }
      }
      c.$table.triggerHandler( 'widgetRemoveEnd', table );
    },

    refreshWidgets : function( table, doAll, dontapply ) {
      table = $( table )[ 0 ]; // see issue #243
      var indx, widget,
        c = table.config,
        curWidgets = c.widgets,
        widgets = ts.widgets,
        len = widgets.length,
        list = [],
        callback = function( table ) {
          $( table ).triggerHandler( 'refreshComplete' );
        };
      // remove widgets not defined in config.widgets, unless doAll is true
      for ( indx = 0; indx < len; indx++ ) {
        widget = widgets[ indx ];
        if ( widget && widget.id && ( doAll || $.inArray( widget.id, curWidgets ) < 0 ) ) {
          list[ list.length ] = widget.id;
        }
      }
      ts.removeWidget( table, list.join( ',' ), true );
      if ( dontapply !== true ) {
        // call widget init if
        ts.applyWidget( table, doAll || false, callback );
        if ( doAll ) {
          // apply widget format
          ts.applyWidget( table, false, callback );
        }
      } else {
        callback( table );
      }
    },

    /*
    ██  ██ ██████ ██ ██     ██ ██████ ██ ██████ ▄█████
    ██  ██   ██   ██ ██     ██   ██   ██ ██▄▄   ▀█▄
    ██  ██   ██   ██ ██     ██   ██   ██ ██▀▀      ▀█▄
    ▀████▀   ██   ██ ██████ ██   ██   ██ ██████ █████▀
    */
    benchmark : function( diff ) {
      return ( ' (' + ( new Date().getTime() - diff.getTime() ) + ' ms)' );
    },
    // deprecated ts.log
    log : function() {
      console.log( arguments );
    },

    // $.isEmptyObject from jQuery v1.4
    isEmptyObject : function( obj ) {
      /*jshint forin: false */
      for ( var name in obj ) {
        return false;
      }
      return true;
    },

    isValueInArray : function( column, arry ) {
      var indx,
        len = arry && arry.length || 0;
      for ( indx = 0; indx < len; indx++ ) {
        if ( arry[ indx ][ 0 ] === column ) {
          return indx;
        }
      }
      return -1;
    },

    formatFloat : function( str, table ) {
      if ( typeof str !== 'string' || str === '' ) { return str; }
      // allow using formatFloat without a table; defaults to US number format
      var num,
        usFormat = table && table.config ? table.config.usNumberFormat !== false :
          typeof table !== 'undefined' ? table : true;
      if ( usFormat ) {
        // US Format - 1,234,567.89 -> 1234567.89
        str = str.replace( ts.regex.comma, '' );
      } else {
        // German Format = 1.234.567,89 -> 1234567.89
        // French Format = 1 234 567,89 -> 1234567.89
        str = str.replace( ts.regex.digitNonUS, '' ).replace( ts.regex.comma, '.' );
      }
      if ( ts.regex.digitNegativeTest.test( str ) ) {
        // make (#) into a negative number -> (10) = -10
        str = str.replace( ts.regex.digitNegativeReplace, '-$1' );
      }
      num = parseFloat( str );
      // return the text instead of zero
      return isNaN( num ) ? $.trim( str ) : num;
    },

    isDigit : function( str ) {
      // replace all unwanted chars and match
      return isNaN( str ) ?
        ts.regex.digitTest.test( str.toString().replace( ts.regex.digitReplace, '' ) ) :
        str !== '';
    },

    // computeTableHeaderCellIndexes from:
    // http://www.javascripttoolbox.com/lib/table/examples.php
    // http://www.javascripttoolbox.com/temp/table_cellindex.html
    computeColumnIndex : function( $rows, c ) {
      var i, j, k, l, cell, cells, rowIndex, rowSpan, colSpan, firstAvailCol,
        // total columns has been calculated, use it to set the matrixrow
        columns = c && c.columns || 0,
        matrix = [],
        matrixrow = new Array( columns );
      for ( i = 0; i < $rows.length; i++ ) {
        cells = $rows[ i ].cells;
        for ( j = 0; j < cells.length; j++ ) {
          cell = cells[ j ];
          rowIndex = i;
          rowSpan = cell.rowSpan || 1;
          colSpan = cell.colSpan || 1;
          if ( typeof matrix[ rowIndex ] === 'undefined' ) {
            matrix[ rowIndex ] = [];
          }
          // Find first available column in the first row
          for ( k = 0; k < matrix[ rowIndex ].length + 1; k++ ) {
            if ( typeof matrix[ rowIndex ][ k ] === 'undefined' ) {
              firstAvailCol = k;
              break;
            }
          }
          // jscs:disable disallowEmptyBlocks
          if ( columns && cell.cellIndex === firstAvailCol ) {
            // don't to anything
          } else if ( cell.setAttribute ) {
            // jscs:enable disallowEmptyBlocks
            // add data-column (setAttribute = IE8+)
            cell.setAttribute( 'data-column', firstAvailCol );
          } else {
            // remove once we drop support for IE7 - 1/12/2016
            $( cell ).attr( 'data-column', firstAvailCol );
          }
          for ( k = rowIndex; k < rowIndex + rowSpan; k++ ) {
            if ( typeof matrix[ k ] === 'undefined' ) {
              matrix[ k ] = [];
            }
            matrixrow = matrix[ k ];
            for ( l = firstAvailCol; l < firstAvailCol + colSpan; l++ ) {
              matrixrow[ l ] = 'x';
            }
          }
        }
      }
      ts.checkColumnCount($rows, matrix, matrixrow.length);
      return matrixrow.length;
    },

    checkColumnCount : function($rows, matrix, columns) {
      // this DOES NOT report any tbody column issues, except for the math and
      // and column selector widgets
      var i, len,
        valid = true,
        cells = [];
      for ( i = 0; i < matrix.length; i++ ) {
        // some matrix entries are undefined when testing the footer because
        // it is using the rowIndex property
        if ( matrix[i] ) {
          len = matrix[i].length;
          if ( matrix[i].length !== columns ) {
            valid = false;
            break;
          }
        }
      }
      if ( !valid ) {
        $rows.each( function( indx, el ) {
          var cell = el.parentElement.nodeName;
          if ( cells.indexOf( cell ) < 0 ) {
            cells.push( cell );
          }
        });
        console.error(
          'Invalid or incorrect number of columns in the ' +
          cells.join( ' or ' ) + '; expected ' + columns +
          ', but found ' + len + ' columns'
        );
      }
    },

    // automatically add a colgroup with col elements set to a percentage width
    fixColumnWidth : function( table ) {
      table = $( table )[ 0 ];
      var overallWidth, percent, $tbodies, len, index,
        c = table.config,
        $colgroup = c.$table.children( 'colgroup' );
      // remove plugin-added colgroup, in case we need to refresh the widths
      if ( $colgroup.length && $colgroup.hasClass( ts.css.colgroup ) ) {
        $colgroup.remove();
      }
      if ( c.widthFixed && c.$table.children( 'colgroup' ).length === 0 ) {
        $colgroup = $( '<colgroup class="' + ts.css.colgroup + '">' );
        overallWidth = c.$table.width();
        // only add col for visible columns - fixes #371
        $tbodies = c.$tbodies.find( 'tr:first' ).children( ':visible' );
        len = $tbodies.length;
        for ( index = 0; index < len; index++ ) {
          percent = parseInt( ( $tbodies.eq( index ).width() / overallWidth ) * 1000, 10 ) / 10 + '%';
          $colgroup.append( $( '<col>' ).css( 'width', percent ) );
        }
        c.$table.prepend( $colgroup );
      }
    },

    // get sorter, string, empty, etc options for each column from
    // jQuery data, metadata, header option or header class name ('sorter-false')
    // priority = jQuery data > meta > headers option > header class name
    getData : function( header, configHeader, key ) {
      var meta, cl4ss,
        val = '',
        $header = $( header );
      if ( !$header.length ) { return ''; }
      meta = $.metadata ? $header.metadata() : false;
      cl4ss = ' ' + ( $header.attr( 'class' ) || '' );
      if ( typeof $header.data( key ) !== 'undefined' ||
        typeof $header.data( key.toLowerCase() ) !== 'undefined' ) {
        // 'data-lockedOrder' is assigned to 'lockedorder'; but 'data-locked-order' is assigned to 'lockedOrder'
        // 'data-sort-initial-order' is assigned to 'sortInitialOrder'
        val += $header.data( key ) || $header.data( key.toLowerCase() );
      } else if ( meta && typeof meta[ key ] !== 'undefined' ) {
        val += meta[ key ];
      } else if ( configHeader && typeof configHeader[ key ] !== 'undefined' ) {
        val += configHeader[ key ];
      } else if ( cl4ss !== ' ' && cl4ss.match( ' ' + key + '-' ) ) {
        // include sorter class name 'sorter-text', etc; now works with 'sorter-my-custom-parser'
        val = cl4ss.match( new RegExp( '\\s' + key + '-([\\w-]+)' ) )[ 1 ] || '';
      }
      return $.trim( val );
    },

    getColumnData : function( table, obj, indx, getCell, $headers ) {
      if ( typeof obj !== 'object' || obj === null ) {
        return obj;
      }
      table = $( table )[ 0 ];
      var $header, key,
        c = table.config,
        $cells = ( $headers || c.$headers ),
        // c.$headerIndexed is not defined initially
        $cell = c.$headerIndexed && c.$headerIndexed[ indx ] ||
          $cells.find( '[data-column="' + indx + '"]:last' );
      if ( typeof obj[ indx ] !== 'undefined' ) {
        return getCell ? obj[ indx ] : obj[ $cells.index( $cell ) ];
      }
      for ( key in obj ) {
        if ( typeof key === 'string' ) {
          $header = $cell
            // header cell with class/id
            .filter( key )
            // find elements within the header cell with cell/id
            .add( $cell.find( key ) );
          if ( $header.length ) {
            return obj[ key ];
          }
        }
      }
      return;
    },

    // *** Process table ***
    // add processing indicator
    isProcessing : function( $table, toggle, $headers ) {
      $table = $( $table );
      var c = $table[ 0 ].config,
        // default to all headers
        $header = $headers || $table.find( '.' + ts.css.header );
      if ( toggle ) {
        // don't use sortList if custom $headers used
        if ( typeof $headers !== 'undefined' && c.sortList.length > 0 ) {
          // get headers from the sortList
          $header = $header.filter( function() {
            // get data-column from attr to keep compatibility with jQuery 1.2.6
            return this.sortDisabled ?
              false :
              ts.isValueInArray( parseFloat( $( this ).attr( 'data-column' ) ), c.sortList ) >= 0;
          });
        }
        $table.add( $header ).addClass( ts.css.processing + ' ' + c.cssProcessing );
      } else {
        $table.add( $header ).removeClass( ts.css.processing + ' ' + c.cssProcessing );
      }
    },

    // detach tbody but save the position
    // don't use tbody because there are portions that look for a tbody index (updateCell)
    processTbody : function( table, $tb, getIt ) {
      table = $( table )[ 0 ];
      if ( getIt ) {
        table.isProcessing = true;
        $tb.before( '<colgroup class="tablesorter-savemyplace"/>' );
        return $.fn.detach ? $tb.detach() : $tb.remove();
      }
      var holdr = $( table ).find( 'colgroup.tablesorter-savemyplace' );
      $tb.insertAfter( holdr );
      holdr.remove();
      table.isProcessing = false;
    },

    clearTableBody : function( table ) {
      $( table )[ 0 ].config.$tbodies.children().detach();
    },

    // used when replacing accented characters during sorting
    characterEquivalents : {
      'a' : '\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5', // áàâãäąå
      'A' : '\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5', // ÁÀÂÃÄĄÅ
      'c' : '\u00e7\u0107\u010d', // çćč
      'C' : '\u00c7\u0106\u010c', // ÇĆČ
      'e' : '\u00e9\u00e8\u00ea\u00eb\u011b\u0119', // éèêëěę
      'E' : '\u00c9\u00c8\u00ca\u00cb\u011a\u0118', // ÉÈÊËĚĘ
      'i' : '\u00ed\u00ec\u0130\u00ee\u00ef\u0131', // íìİîïı
      'I' : '\u00cd\u00cc\u0130\u00ce\u00cf', // ÍÌİÎÏ
      'o' : '\u00f3\u00f2\u00f4\u00f5\u00f6\u014d', // óòôõöō
      'O' : '\u00d3\u00d2\u00d4\u00d5\u00d6\u014c', // ÓÒÔÕÖŌ
      'ss': '\u00df', // ß (s sharp)
      'SS': '\u1e9e', // ẞ (Capital sharp s)
      'u' : '\u00fa\u00f9\u00fb\u00fc\u016f', // úùûüů
      'U' : '\u00da\u00d9\u00db\u00dc\u016e' // ÚÙÛÜŮ
    },

    replaceAccents : function( str ) {
      var chr,
        acc = '[',
        eq = ts.characterEquivalents;
      if ( !ts.characterRegex ) {
        ts.characterRegexArray = {};
        for ( chr in eq ) {
          if ( typeof chr === 'string' ) {
            acc += eq[ chr ];
            ts.characterRegexArray[ chr ] = new RegExp( '[' + eq[ chr ] + ']', 'g' );
          }
        }
        ts.characterRegex = new RegExp( acc + ']' );
      }
      if ( ts.characterRegex.test( str ) ) {
        for ( chr in eq ) {
          if ( typeof chr === 'string' ) {
            str = str.replace( ts.characterRegexArray[ chr ], chr );
          }
        }
      }
      return str;
    },

    validateOptions : function( c ) {
      var setting, setting2, typ, timer,
        // ignore options containing an array
        ignore = 'headers sortForce sortList sortAppend widgets'.split( ' ' ),
        orig = c.originalSettings;
      if ( orig ) {
        if ( c.debug ) {
          timer = new Date();
        }
        for ( setting in orig ) {
          typ = typeof ts.defaults[setting];
          if ( typ === 'undefined' ) {
            console.warn( 'Tablesorter Warning! "table.config.' + setting + '" option not recognized' );
          } else if ( typ === 'object' ) {
            for ( setting2 in orig[setting] ) {
              typ = ts.defaults[setting] && typeof ts.defaults[setting][setting2];
              if ( $.inArray( setting, ignore ) < 0 && typ === 'undefined' ) {
                console.warn( 'Tablesorter Warning! "table.config.' + setting + '.' + setting2 + '" option not recognized' );
              }
            }
          }
        }
        if ( c.debug ) {
          console.log( 'validate options time:' + ts.benchmark( timer ) );
        }
      }
    },

    // restore headers
    restoreHeaders : function( table ) {
      var index, $cell,
        c = $( table )[ 0 ].config,
        $headers = c.$table.find( c.selectorHeaders ),
        len = $headers.length;
      // don't use c.$headers here in case header cells were swapped
      for ( index = 0; index < len; index++ ) {
        $cell = $headers.eq( index );
        // only restore header cells if it is wrapped
        // because this is also used by the updateAll method
        if ( $cell.find( '.' + ts.css.headerIn ).length ) {
          $cell.html( c.headerContent[ index ] );
        }
      }
    },

    destroy : function( table, removeClasses, callback ) {
      table = $( table )[ 0 ];
      if ( !table.hasInitialized ) { return; }
      // remove all widgets
      ts.removeWidget( table, true, false );
      var events,
        $t = $( table ),
        c = table.config,
        debug = c.debug,
        $h = $t.find( 'thead:first' ),
        $r = $h.find( 'tr.' + ts.css.headerRow ).removeClass( ts.css.headerRow + ' ' + c.cssHeaderRow ),
        $f = $t.find( 'tfoot:first > tr' ).children( 'th, td' );
      if ( removeClasses === false && $.inArray( 'uitheme', c.widgets ) >= 0 ) {
        // reapply uitheme classes, in case we want to maintain appearance
        $t.triggerHandler( 'applyWidgetId', [ 'uitheme' ] );
        $t.triggerHandler( 'applyWidgetId', [ 'zebra' ] );
      }
      // remove widget added rows, just in case
      $h.find( 'tr' ).not( $r ).remove();
      // disable tablesorter - not using .unbind( namespace ) because namespacing was
      // added in jQuery v1.4.3 - see http://api.jquery.com/event.namespace/
      events = 'sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton ' +
        'appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave ' +
        'keypress sortBegin sortEnd resetToLoadState '.split( ' ' )
        .join( c.namespace + ' ' );
      $t
        .removeData( 'tablesorter' )
        .unbind( events.replace( ts.regex.spaces, ' ' ) );
      c.$headers
        .add( $f )
        .removeClass( [ ts.css.header, c.cssHeader, c.cssAsc, c.cssDesc, ts.css.sortAsc, ts.css.sortDesc, ts.css.sortNone ].join( ' ' ) )
        .removeAttr( 'data-column' )
        .removeAttr( 'aria-label' )
        .attr( 'aria-disabled', 'true' );
      $r
        .find( c.selectorSort )
        .unbind( ( 'mousedown mouseup keypress '.split( ' ' ).join( c.namespace + ' ' ) ).replace( ts.regex.spaces, ' ' ) );
      ts.restoreHeaders( table );
      $t.toggleClass( ts.css.table + ' ' + c.tableClass + ' tablesorter-' + c.theme, removeClasses === false );
      $t.removeClass(c.namespace.slice(1));
      // clear flag in case the plugin is initialized again
      table.hasInitialized = false;
      delete table.config.cache;
      if ( typeof callback === 'function' ) {
        callback( table );
      }
      if ( debug ) {
        console.log( 'tablesorter has been removed' );
      }
    }

  };

  $.fn.tablesorter = function( settings ) {
    return this.each( function() {
      var table = this,
      // merge & extend config options
      c = $.extend( true, {}, ts.defaults, settings, ts.instanceMethods );
      // save initial settings
      c.originalSettings = settings;
      // create a table from data (build table widget)
      if ( !table.hasInitialized && ts.buildTable && this.nodeName !== 'TABLE' ) {
        // return the table (in case the original target is the table's container)
        ts.buildTable( table, c );
      } else {
        ts.setup( table, c );
      }
    });
  };

  // set up debug logs
  if ( !( window.console && window.console.log ) ) {
    // access $.tablesorter.logs for browsers that don't have a console...
    ts.logs = [];
    /*jshint -W020 */
    console = {};
    console.log = console.warn = console.error = console.table = function() {
      var arg = arguments.length > 1 ? arguments : arguments[0];
      ts.logs[ ts.logs.length ] = { date: Date.now(), log: arg };
    };
  }

  // add default parsers
  ts.addParser({
    id : 'no-parser',
    is : function() {
      return false;
    },
    format : function() {
      return '';
    },
    type : 'text'
  });

  ts.addParser({
    id : 'text',
    is : function() {
      return true;
    },
    format : function( str, table ) {
      var c = table.config;
      if ( str ) {
        str = $.trim( c.ignoreCase ? str.toLocaleLowerCase() : str );
        str = c.sortLocaleCompare ? ts.replaceAccents( str ) : str;
      }
      return str;
    },
    type : 'text'
  });

  ts.regex.nondigit = /[^\w,. \-()]/g;
  ts.addParser({
    id : 'digit',
    is : function( str ) {
      return ts.isDigit( str );
    },
    format : function( str, table ) {
      var num = ts.formatFloat( ( str || '' ).replace( ts.regex.nondigit, '' ), table );
      return str && typeof num === 'number' ? num :
        str ? $.trim( str && table.config.ignoreCase ? str.toLocaleLowerCase() : str ) : str;
    },
    type : 'numeric'
  });

  ts.regex.currencyReplace = /[+\-,. ]/g;
  ts.regex.currencyTest = /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/;
  ts.addParser({
    id : 'currency',
    is : function( str ) {
      str = ( str || '' ).replace( ts.regex.currencyReplace, '' );
      // test for £$€¤¥¢
      return ts.regex.currencyTest.test( str );
    },
    format : function( str, table ) {
      var num = ts.formatFloat( ( str || '' ).replace( ts.regex.nondigit, '' ), table );
      return str && typeof num === 'number' ? num :
        str ? $.trim( str && table.config.ignoreCase ? str.toLocaleLowerCase() : str ) : str;
    },
    type : 'numeric'
  });

  // too many protocols to add them all https://en.wikipedia.org/wiki/URI_scheme
  // now, this regex can be updated before initialization
  ts.regex.urlProtocolTest = /^(https?|ftp|file):\/\//;
  ts.regex.urlProtocolReplace = /(https?|ftp|file):\/\/(www\.)?/;
  ts.addParser({
    id : 'url',
    is : function( str ) {
      return ts.regex.urlProtocolTest.test( str );
    },
    format : function( str ) {
      return str ? $.trim( str.replace( ts.regex.urlProtocolReplace, '' ) ) : str;
    },
    type : 'text'
  });

  ts.regex.dash = /-/g;
  ts.regex.isoDate = /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/;
  ts.addParser({
    id : 'isoDate',
    is : function( str ) {
      return ts.regex.isoDate.test( str );
    },
    format : function( str, table ) {
      var date = str ? new Date( str.replace( ts.regex.dash, '/' ) ) : str;
      return date instanceof Date && isFinite( date ) ? date.getTime() : str;
    },
    type : 'numeric'
  });

  ts.regex.percent = /%/g;
  ts.regex.percentTest = /(\d\s*?%|%\s*?\d)/;
  ts.addParser({
    id : 'percent',
    is : function( str ) {
      return ts.regex.percentTest.test( str ) && str.length < 15;
    },
    format : function( str, table ) {
      return str ? ts.formatFloat( str.replace( ts.regex.percent, '' ), table ) : str;
    },
    type : 'numeric'
  });

  // added image parser to core v2.17.9
  ts.addParser({
    id : 'image',
    is : function( str, table, node, $node ) {
      return $node.find( 'img' ).length > 0;
    },
    format : function( str, table, cell ) {
      return $( cell ).find( 'img' ).attr( table.config.imgAttr || 'alt' ) || str;
    },
    parsed : true, // filter widget flag
    type : 'text'
  });

  ts.regex.dateReplace = /(\S)([AP]M)$/i; // used by usLongDate & time parser
  ts.regex.usLongDateTest1 = /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i;
  ts.regex.usLongDateTest2 = /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i;
  ts.addParser({
    id : 'usLongDate',
    is : function( str ) {
      // two digit years are not allowed cross-browser
      // Jan 01, 2013 12:34:56 PM or 01 Jan 2013
      return ts.regex.usLongDateTest1.test( str ) || ts.regex.usLongDateTest2.test( str );
    },
    format : function( str, table ) {
      var date = str ? new Date( str.replace( ts.regex.dateReplace, '$1 $2' ) ) : str;
      return date instanceof Date && isFinite( date ) ? date.getTime() : str;
    },
    type : 'numeric'
  });

  // testing for ##-##-#### or ####-##-##, so it's not perfect; time can be included
  ts.regex.shortDateTest = /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/;
  // escaped "-" because JSHint in Firefox was showing it as an error
  ts.regex.shortDateReplace = /[\-.,]/g;
  // XXY covers MDY & DMY formats
  ts.regex.shortDateXXY = /(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/;
  ts.regex.shortDateYMD = /(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/;
  ts.convertFormat = function( dateString, format ) {
    dateString = ( dateString || '' )
      .replace( ts.regex.spaces, ' ' )
      .replace( ts.regex.shortDateReplace, '/' );
    if ( format === 'mmddyyyy' ) {
      dateString = dateString.replace( ts.regex.shortDateXXY, '$3/$1/$2' );
    } else if ( format === 'ddmmyyyy' ) {
      dateString = dateString.replace( ts.regex.shortDateXXY, '$3/$2/$1' );
    } else if ( format === 'yyyymmdd' ) {
      dateString = dateString.replace( ts.regex.shortDateYMD, '$1/$2/$3' );
    }
    var date = new Date( dateString );
    return date instanceof Date && isFinite( date ) ? date.getTime() : '';
  };

  ts.addParser({
    id : 'shortDate', // 'mmddyyyy', 'ddmmyyyy' or 'yyyymmdd'
    is : function( str ) {
      str = ( str || '' ).replace( ts.regex.spaces, ' ' ).replace( ts.regex.shortDateReplace, '/' );
      return ts.regex.shortDateTest.test( str );
    },
    format : function( str, table, cell, cellIndex ) {
      if ( str ) {
        var c = table.config,
          $header = c.$headerIndexed[ cellIndex ],
          format = $header.length && $header.data( 'dateFormat' ) ||
            ts.getData( $header, ts.getColumnData( table, c.headers, cellIndex ), 'dateFormat' ) ||
            c.dateFormat;
        // save format because getData can be slow...
        if ( $header.length ) {
          $header.data( 'dateFormat', format );
        }
        return ts.convertFormat( str, format ) || str;
      }
      return str;
    },
    type : 'numeric'
  });

  // match 24 hour time & 12 hours time + am/pm - see http://regexr.com/3c3tk
  ts.regex.timeTest = /^(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i;
  ts.regex.timeMatch = /(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i;
  ts.addParser({
    id : 'time',
    is : function( str ) {
      return ts.regex.timeTest.test( str );
    },
    format : function( str, table ) {
      // isolate time... ignore month, day and year
      var temp,
        timePart = ( str || '' ).match( ts.regex.timeMatch ),
        orig = new Date( str ),
        // no time component? default to 00:00 by leaving it out, but only if str is defined
        time = str && ( timePart !== null ? timePart[ 0 ] : '00:00 AM' ),
        date = time ? new Date( '2000/01/01 ' + time.replace( ts.regex.dateReplace, '$1 $2' ) ) : time;
      if ( date instanceof Date && isFinite( date ) ) {
        temp = orig instanceof Date && isFinite( orig ) ? orig.getTime() : 0;
        // if original string was a valid date, add it to the decimal so the column sorts in some kind of order
        // luckily new Date() ignores the decimals
        return temp ? parseFloat( date.getTime() + '.' + orig.getTime() ) : date.getTime();
      }
      return str;
    },
    type : 'numeric'
  });

  ts.addParser({
    id : 'metadata',
    is : function() {
      return false;
    },
    format : function( str, table, cell ) {
      var c = table.config,
      p = ( !c.parserMetadataName ) ? 'sortValue' : c.parserMetadataName;
      return $( cell ).metadata()[ p ];
    },
    type : 'numeric'
  });

  /*
    ██████ ██████ █████▄ █████▄ ▄████▄
      ▄█▀  ██▄▄   ██▄▄██ ██▄▄██ ██▄▄██
    ▄█▀    ██▀▀   ██▀▀██ ██▀▀█  ██▀▀██
    ██████ ██████ █████▀ ██  ██ ██  ██
    */
  // add default widgets
  ts.addWidget({
    id : 'zebra',
    priority : 90,
    format : function( table, c, wo ) {
      var $visibleRows, $row, count, isEven, tbodyIndex, rowIndex, len,
        child = new RegExp( c.cssChildRow, 'i' ),
        $tbodies = c.$tbodies.add( $( c.namespace + '_extra_table' ).children( 'tbody:not(.' + c.cssInfoBlock + ')' ) );
      for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
        // loop through the visible rows
        count = 0;
        $visibleRows = $tbodies.eq( tbodyIndex ).children( 'tr:visible' ).not( c.selectorRemove );
        len = $visibleRows.length;
        for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {
          $row = $visibleRows.eq( rowIndex );
          // style child rows the same way the parent row was styled
          if ( !child.test( $row[ 0 ].className ) ) { count++; }
          isEven = ( count % 2 === 0 );
          $row
            .removeClass( wo.zebra[ isEven ? 1 : 0 ] )
            .addClass( wo.zebra[ isEven ? 0 : 1 ] );
        }
      }
    },
    remove : function( table, c, wo, refreshing ) {
      if ( refreshing ) { return; }
      var tbodyIndex, $tbody,
        $tbodies = c.$tbodies,
        toRemove = ( wo.zebra || [ 'even', 'odd' ] ).join( ' ' );
      for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ){
        $tbody = ts.processTbody( table, $tbodies.eq( tbodyIndex ), true ); // remove tbody
        $tbody.children().removeClass( toRemove );
        ts.processTbody( table, $tbody, false ); // restore tbody
      }
    }
  });

})( jQuery );

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
  re

  //Stick Header and Column for Tables

})(jQuery);