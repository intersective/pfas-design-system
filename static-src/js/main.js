// Cookie utils

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  }
  else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

// CSS class utils

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


// Oven mode cookie

var oven = document.querySelectorAll("#now-baking .oven")[0];

if (document.body.contains(oven)) {

  if (readCookie('ovenMode') == "normal") {
    removeClass(oven, "oven-mode-compact");
    addClass(oven, "oven-mode-normal");
  } else if (readCookie('ovenMode') == "compact") {
    removeClass(oven, "oven-mode-normal");
    addClass(oven, "oven-mode-compact");
  }

  document.getElementsByClassName("oven-mode-toggle-normal")[0].onclick = function(e) {
    e.preventDefault();
    removeClass(oven, "oven-mode-compact");
    addClass(oven, "oven-mode-normal");
    createCookie('ovenMode', 'normal', 999);
  };

  document.getElementsByClassName("oven-mode-toggle-compact")[0].onclick = function(e) {
    e.preventDefault();
    removeClass(oven, "oven-mode-normal");
    addClass(oven, "oven-mode-compact");
    createCookie('ovenMode', 'compact', 999);
  };

}


// Click and load coin Ajax

var coinLinks = document.getElementsByClassName("oven-coin-name");
var coinModal = document.getElementById("coin-modal");
var coinModalContent = document.querySelectorAll('#coin-modal .modal-content')[0];
var modals = document.getElementsByClassName("modal");
var modalOverlay = document.getElementsByClassName("modal-overlay")[0];
var body = document.getElementsByTagName("body")[0];
var closeButtons = document.getElementsByClassName("close-button");

var loadCoin = function(coinUrl) {
  var request = new XMLHttpRequest();

  request.open('GET', coinUrl, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      addClass(coinModal, "open");
      var resp = request.responseText;
      var parser = new DOMParser();
      var doc = parser.parseFromString(resp, "text/html");
      coinModalContent.innerHTML = '';
      coinModalContent.innerHTML = doc.getElementsByTagName("main")[0].innerHTML;
      addClass(body, "modal-open");
    } else {
      // We reached our target server, but it returned an error
      console.log(request);
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log(request);
  };

  request.send();
};

if (document.body.contains(oven)) {

  for (var i = 0; i < coinLinks.length; i++) {
    coinLinks[i].onclick = function (e) {
      e.preventDefault();
      loadCoin("/coin");
    }
  }

  modalOverlay.onclick = function() {
    removeClass(document.getElementsByClassName("open")[0], "open");
    removeClass(body, "modal-open");
  }

  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function (e) {
      e.preventDefault();
      removeClass(document.getElementsByClassName("open")[0], "open");
      removeClass(body, "modal-open");
    }
  }

}


// Withdraw and deposit modals

var depositLinks = document.getElementsByClassName("oven-action-deposit");
var withdrawLinks = document.getElementsByClassName("oven-action-withdraw");
var pledgeLinks = document.getElementsByClassName("oven-action-pledge");
var depositModal = document.getElementById("deposit-modal");
var withdrawModal = document.getElementById("withdraw-modal");
var pledgeModal = document.getElementById("pledge-modal");

var depositModalOpen = function() {
  addClass(depositModal, "open");
  addClass(body, "modal-open");
}

var withdrawModalOpen = function () {
  addClass(withdrawModal, "open");
  addClass(body, "modal-open");
}

var pledgeModalOpen = function () {
  addClass(pledgeModal, "open");
  addClass(body, "modal-open");
}

if (document.body.contains(oven)) {

  for (var i = 0; i < depositLinks.length; i++) {
    depositLinks[i].onclick = function (e) {
      e.preventDefault();
      depositModalOpen();
    }
  }

  for (var i = 0; i < withdrawLinks.length; i++) {
    withdrawLinks[i].onclick = function (e) {
      e.preventDefault();
      withdrawModalOpen();
    }
  }

  for (var i = 0; i < pledgeLinks.length; i++) {
    pledgeLinks[i].onclick = function (e) {
      e.preventDefault();
      pledgeModalOpen();
    }
  }

}


// Password masking

var passwordMaskToggle = document.getElementsByClassName("password-mask-toggle")[0];
var passwordField = document.getElementById("password-field");
var eyeOpen = document.getElementsByClassName("icon-eye-open")[0];
var eyeClose = document.getElementsByClassName("icon-eye-close")[0];

if (document.body.contains(passwordMaskToggle)) {
  passwordMaskToggle.onclick = function (e) {
    e.preventDefault();
    if (passwordField.getAttribute("type") == "password") {
      passwordField.setAttribute('type', 'text');
      removeClass(eyeClose, "show");
      addClass(eyeClose, "hide");
      removeClass(eyeOpen, "hide");
      addClass(eyeOpen, "show");
    } else {
      passwordField.setAttribute('type', 'password');
      removeClass(eyeClose, "hide");
      addClass(eyeClose, "show");
      removeClass(eyeOpen, "show");
      addClass(eyeOpen, "hide");
    }
  }
}


// Oven Search

var ovenSearch = document.getElementsByClassName("oven-search")[0];
var ovenSearchLink = document.querySelectorAll(".oven-search a")[0];
var ovenSearchClear = document.querySelectorAll(".oven-search-field .icon-clear")[0];
var ovenSearchField = document.getElementsByClassName("oven-search-field")[0];

if (document.body.contains(ovenSearch)) {
  ovenSearchLink.onclick = function (e) {
    e.preventDefault();
    addClass(ovenSearch, "active");
  }
  ovenSearchClear.onclick = function (e) {
    e.preventDefault();
    removeClass(ovenSearch, "active");
  }
}