'use strict';

function fancySchmancy(){
  return $('p#bacon').addClass('iAmFancy');
}

function addText(text) {
  return $('p:nth-child(2)').append(text);
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $('img').eq(1).hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p').eq(1).fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass("flatironLink");
}

function formValue() {
  return $('input:last-child').val();
}
