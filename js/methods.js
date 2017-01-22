'use strict';

function fancySchmancy() {
  var baconTag = $('p#bacon').addClass('iAmFancy');
  return baconTag;
}

function addText(words) {
  var addly = $('p:nth-child(2)').append(words);
  return addly;
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(selector) {
  var value = $(selector).hasClass("flatironLink"); 
  return value;
}

function formValue() {
  var lastInput = $('input:last').val();
  return lastInput;
}

