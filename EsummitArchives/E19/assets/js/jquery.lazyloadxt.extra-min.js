!function($,e,t,o){function n(e,t){return e[t]===o?p[t]:e[t]}function a(){var t=e.pageYOffset;return t===o?g.scrollTop:t}function r(e,t){var o=p["on"+e];o&&(C(o)?o.call(t[0]):(o.addClass&&t.addClass(o.addClass),o.removeClass&&t.removeClass(o.removeClass))),t.trigger("lazy"+e,[t]),c()}function i(e){r(e.type,$(this).off(v,i))}function s(t){if(b.length){t=t||p.forceLoad,L=1/0;var o=a(),n=e.innerHeight||g.clientHeight,s=e.innerWidth||g.clientWidth,l,c;for(l=0,c=b.length;c>l;l++){var d=b[l],u=d[0],A=d[f],h=!1,m=t,y;if(T(g,u)){if(t||!A.visibleOnly||u.offsetWidth||u.offsetHeight){if(!m){var w=u.getBoundingClientRect(),z=A.edgeX,E=A.edgeY;y=w.top+o-E-n,m=o>=y&&w.bottom>-E&&w.left<=s+z&&w.right>-z}if(m){r("show",d);var I=A.srcAttr,X=C(I)?I(d):u.getAttribute(I);X&&(d.on(v,i),u.src=X),h=!0}else L>y&&(L=y)}}else h=!0;h&&(b.splice(l--,1),c--)}c||r("complete",$(g))}}function l(){I>1?(I=1,s(),setTimeout(l,p.throttle)):I=0}function c(t){b.length&&(t&&"scroll"===t.type&&t.currentTarget===e&&L>=a()||(I||setTimeout(l,0),I=2))}function d(){w.lazyLoadXT()}function u(){s(!0)}var f="lazyLoadXT",A="lazied",v="load error",h="lazy-hidden",g=t.documentElement||t.body,m=e.onscroll===o||!!e.operamini||!g.getBoundingClientRect,p={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:m,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:h},onload:{removeClass:h,addClass:"lazy-loaded"},onerror:{removeClass:h},checkDuplicates:!0},y={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},w=$(e),C=$.isFunction,z=$.extend,E=$.data||function(e,t){return $(e).data(t)},T=$.contains||function(e,t){for(;t=t.parentNode;)if(t===e)return!0;return!1},b=[],L=0,I=0;$[f]=z(p,y,$[f]),$.fn[f]=function(t){t=t||{};var o=n(t,"blankImage"),a=n(t,"checkDuplicates"),i=n(t,"scrollContainer"),s={},l;$(i).on("scroll",c);for(l in y)s[l]=n(t,l);return this.each(function(n,i){if(i===e)$(p.selector).lazyLoadXT(t);else{if(a&&E(i,A))return;var l=$(i).data(A,1);o&&"IMG"===i.tagName&&!i.src&&(i.src=o),l[f]=z({},s),r("init",l),b.push(l)}})},$(t).ready(function(){r("start",w),w.on(p.loadEvent,d).on(p.updateEvent,c).on(p.forceEvent,u),$(t).on(p.updateEvent,c),p.autoInit&&d()})}(window.jQuery||window.Zepto||window.$,window,document),function($){var e=$.lazyLoadXT;e.selector+=",video,iframe[data-src]",e.videoPoster="data-poster",$(document).on("lazyshow","video",function(t,o){var n=o.lazyLoadXT.srcAttr,a=$.isFunction(n);o.attr("poster",o.attr(e.videoPoster)).children("source,track").each(function(e,t){var o=$(t);o.attr("src",a?n(o):o.attr(n))}),this.load()})}(window.jQuery||window.Zepto||window.$);
//# sourceMappingURL=./jquery.lazyloadxt.extra-min.js.map