'use strict';

function fancySchmancy() {
    return $('p[id="bacon"]').addClass("iAmFancy");
}

function addText(string) {
  return $("p:nth-of-type(2)").append(string);
}
 function showDolphin() {
   $('img[id="hidden"]').show();
 }

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('div[id="favorite-snacks"]').fadeIn();
}

function fadeItOut() {
  $('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(string) {
  return $(string).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
