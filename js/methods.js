'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('p#bacon')
}

function addText(string) {
  $('p:eq(1)').append(string);
  return $('p:eq(1)');
}

function showDolphin() {
  $('img#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('div').fadeIn();
}

function fadeItOut() {
  $('p:eq(1)').fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink')
}

function formValue() {
  return $('input:last').val();
}
