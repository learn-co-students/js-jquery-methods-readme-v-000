'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy');
}

function addText(string) {
  return $('p:last').append(string);
}

function showDolphin() {
  $('#hidden').show()
}

function hideImage() {
  $('img[alt="pie in face"]').hide()
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(2000)
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
