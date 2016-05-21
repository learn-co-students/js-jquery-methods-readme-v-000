'use strict';

function fancySchmancy() {
  return $('#bacon').addClass("iAmFancy");
}

function addText(stringToAdd) {
  return $('p:nth-child(2)').append(stringToAdd);
}

function showDolphin() {
  $('#hidden').show(0);
}

function hideImage() {
  $('img[alt="pie in face"]').hide(0);
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(2000);
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(jqString) {
  return $(jqString).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
