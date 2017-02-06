'use strict';

function fancySchmancy() {
  $('#bacon').addClass('iAmFancy');
  return $('.iAmFancy');
}

function addText(string) {
  $('p:nth-child(2)').append(string);
  return $('p:nth-child(2)');
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(1000);
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(string) {
  return $(string).hasClass('flatironLink');
}

function formValue() {
  return $('input:last-child').val();
}