'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('p#bacon');
}

function addText(string) {
  $('p:nth-of-type(2)').append('string');
  return $('p:nth-of-type(2)');
}

//working on following function 
function showDolphin() {
  $('img').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(string) {
  return $(string).hasClass('flatironLink');
}

function formValue() {
  return $('[type=checkbox]:last').val();
}
