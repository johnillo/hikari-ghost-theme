$(function(t){var o=1,r=window.location.pathname,a=t(document),s=t(".gh-postfeed"),c=100,l=!1,w=!1,d=window.scrollY,v=window.innerHeight,u=a.height();function f(){d=window.scrollY,e()}function g(){v=window.innerHeight,u=a.height(),e()}function e(){l||requestAnimationFrame(n),l=!0}function n(){var e,n;if(n=/(?:page\/)(\d)(?:\/)$/i,(e=(e=r).replace(/#(.*)$/g,"").replace("////g","/")).match(n)&&(o=parseInt(e.match(n)[1]),e=e.replace(n,"")),r=e,!w)if(d+v<=u-c)l=!1;else{if(o>=maxPages)return window.removeEventListener("scroll",f,{passive:!0}),void window.removeEventListener("resize",g);w=!0;var i=r+"page/"+(o+=1)+"/";t.get(i,function(e){var n=document.createRange().createContextualFragment(e).querySelectorAll(".post");n.length&&[].forEach.call(n,function(e){s[0].appendChild(e)})}).fail(function(e){404===e.status&&(window.removeEventListener("scroll",f,{passive:!0}),window.removeEventListener("resize",g))}).always(function(){u=a.height(),l=w=!1})}}window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("resize",g),n()});
//# sourceMappingURL=infinitescroll.js.map