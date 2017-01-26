'use strict';
function fancySchmancy() {
  return $("#bacon").addClass("iAmFancy");
}

function addText(string) {
  return $('p:nth-child(2)').append(string)
}

function showDolphin() {
  $('img').show();
}

function hideImage() {
  $('img').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val()
}
