let scriptSrc = 'app.js';
if (window.outerWidth <= 700)
  scriptSrc = './js/mobile.js';
else if (window.outerWidth > 700)
  scriptSrc = './js/deskop.js';
let script = document.createElement('script');
script.src = scriptSrc;
let head = document.getElementsByTagName('head')[0];
head.appendChild(script);