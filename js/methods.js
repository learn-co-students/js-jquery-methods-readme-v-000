'use strict';

function fancySchmancy() {
   $('#bacon').addClass("iAmFancy");
   return $('.iAmFancy');
}

function addText(string) {
  $('p:first-child + p').append(string);
  return $('p:first-child + p');
}

function showDolphin() {
  $('img').show();
}

function hideImage() {
  $('img').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:first-child + p').fadeOut(0);
}

function findItByClass(string) {
  return $(string).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
