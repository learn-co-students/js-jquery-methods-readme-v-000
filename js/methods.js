'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy')
}

function addText(string) {
  $('p:last').append(string)
  return $('p:last')
}

function showDolphin() {
  $('img#hidden').show()
}

function hideImage() {
  $('img[alt="pie in face"]').hide()
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn()
}

function fadeItOut() {
  $('p:last').fadeOut(0)
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink') ? true : false
}

function formValue() {
  return $('input:last').val()
}
