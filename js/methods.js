'use strict';

function fancySchmancy() {
    return $('p#bacon').addClass('iAmFancy');
}

function addText(string) {
  return $('p + p').append('string')
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn(500);
}

function fadeItOut () {
  $('p + p').fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
