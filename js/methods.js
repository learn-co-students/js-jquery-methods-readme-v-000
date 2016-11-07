'use strict';

function fancySchmancy() {
  return $('#bacon').addClass('iAmFancy');
}

function addText(string) {
  return $('p + p').append(string);
}

function showDolphin() {
  $('img#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(1000);
}

function fadeItOut() {
  $('p + p').fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
