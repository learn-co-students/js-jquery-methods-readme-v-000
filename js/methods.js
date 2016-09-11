'use strict';

function fancySchmancy() {
  return $('#bacon').addClass('iAmFancy');
}

function addText(string) {
  return $('p:nth-child(2)').append(string);
}

function showDolphin() {
  $('img#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn(2000);
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(selectorString) {
  return $(selectorString).hasClass("flatironLink");
}

function formValue() {
  return $('input:last').val()
}
