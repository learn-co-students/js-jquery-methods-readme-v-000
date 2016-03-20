'use strict';

function fancySchmancy() {
  return $('#bacon').addClass('iAmFancy');
}

function addText(text) {
  return $('p:nth-child(2)').append(text);
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  return $('#favorite-snacks').fadeIn(2000);
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass("flatironLink");
}

function formValue() {
  return $('input:last').val();
}


