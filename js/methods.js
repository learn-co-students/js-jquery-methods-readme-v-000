'use strict';

function fancySchmancy() {
  return $('#bacon').addClass('iAmFancy')
}

function addText(str) {
  return $("p:nth-of-type(2)").append(str)
}

function showDolphin() {
  $('img#hidden').show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $("p:nth-of-type(2)").fadeOut(0);
}

function findItByClass(str) {
  return $(str).hasClass("flatironLink");
}

function formValue() {
  return $('input:checkbox:last').val();
}
