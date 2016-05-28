'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('.iAmFancy');
}

function addText(string) {
  $('p:eq(1)').append(string);
  return $('p:eq(1)');
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(4000);
}

function fadeItOut() {
  $('p:eq(1)').fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}