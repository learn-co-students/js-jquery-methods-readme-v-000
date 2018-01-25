'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy')
}

function addText(string) {
  return $('p:nth-of-type(2)').append(string)
}

function showDolphin() {
  $('img#hidden').show()
}

function hideImage() {
  $("img[alt='pie in face']").hide()
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn(1000) 
}

function fadeItOut(fade) {
  var f = (typeof fade === 'undefined' ? 0 : fade);
  $('p:nth-of-type(2)').hide(f)
}

function findItByClass(selectorString) {
  return $(selectorString).hasClass('flatironLink')
}

function formValue() {
  debugger;
  return $('input').last().val()
}