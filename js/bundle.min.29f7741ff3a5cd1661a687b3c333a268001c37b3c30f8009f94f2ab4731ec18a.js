function hasClass(el,className){if(el.classList){return el.classList.contains(className);}else{return!!el.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));}}
function addClass(el,className){if(el.classList){el.classList.add(className);}else if(!hasClass(el,className)){el.className+=" "+className;}}
function removeClass(el,className){if(el.classList){el.classList.remove(className)}else if(hasClass(el,className)){var reg=new RegExp('(\\s|^)'+className+'(\\s|$)')
el.className=el.className.replace(reg,' ')}}
var pjax=new Pjax({selectors:["title","main",".side-nav"]})
var menuToggle=document.getElementsByClassName('.menu-toggle')[0];var sideNav=document.getElementsByClassName('.side-nav')[0];menuToggle.onclick=function(e){e.preventDefault();if(hasClass(sideNav,'show-side-nav')){removeClass(sideNav,'show-side-nav');}else{addClass(sideNav,'show-side-nav');}};