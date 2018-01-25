'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('p');
}

function addText(string) {
  $('p:nth-child(2n)').append(string)
  return $('p:nth-child(2n)');
}

function showDolphin() {
  $('#hidden').show()
}

function hideImage() {
  $('img[alt ="pie in face"]').hide()
}

function fadeIt() {
  $('#favorite-snacks').fadeIn()
}


function fadeItOut() {
  $('p:nth-child(2n)').fadeOut(0)
}

function findItByClass(string) {
  return $(string).hasClass('flatironLink')
}

function formValue() {
  return $('input:last').val()
}