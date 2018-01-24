'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy')
  return $('p#bacon')
}

function addText(string) {
  $('p:nth-child(2)').append(string)
  return $('p:nth-child(2)')
}

function showDolphin() {
  $('#hidden').show()
}

function hideImage() {
  $('img[alt="pie in face"]').hide()
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn()
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0)
}

function findItByClass(string) {
  return $(string).hasClass("flatironLink")
}

function formValue() {
  return $('input:last').val()
}
