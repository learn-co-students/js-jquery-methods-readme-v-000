'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('.iAmFancy');
}

function addText(sentence) {
  $('p:first-child + p').append(sentence);
  return $('p:first-child + p');
}

function showDolphin() {
  return $('#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  return $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:first-child + p').fadeOut(0);
  return $('p:first-child + p');
}

function findItByClass(selector) {
  return $(selector).hasClass("flatironLink");
}

function formValue() {
  return $('input:last').val();
}
