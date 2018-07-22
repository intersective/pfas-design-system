/*  CONTENTS
    Tip:  Find to jump
    Gulp-replace change "%23" (in color codes, invalid svg) into %23".
    ----------------------------
    =1.0  CSS Class Utilities
    =2.0  PJAX
    =3.0  Responsive Menu Toggle
    --------------------------*/


/*  =1.0  CSS CLASS UTILITIES        
    --------------------------*/

function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
}

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    el.className += " " + className;
  }
}

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className)
  } else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className = el.className.replace(reg, ' ')
  }
}


/*  =2.0  PJAX     
    --------------------------*/

var pjax = new Pjax({
  selectors: ["title", "main", ".side-nav"]
})


/*  =3.0  RESPONSIVE MENU TOGGLE  
    --------------------------*/

var menuToggle = document.getElementsByClassName('.menu-toggle')[0];
var sideNav = document.getElementsByClassName('.side-nav')[0];

menuToggle.onclick = function(e) {
  e.preventDefault();
  if (hasClass(sideNav, 'show-side-nav')) {
    removeClass(sideNav, 'show-side-nav');
  } else {
    addClass(sideNav, 'show-side-nav');
  }
};