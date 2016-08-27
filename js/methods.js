'use strict';

function fancySchmancy() {
  return $("p[id='bacon']").addClass('iAmFancy');
}

function addText(string) {
  return $('p').eq(1).append(string);
}

function showDolphin() {
  $('#hidden').show(0);
}

function hideImage() {
  $("img[alt='pie in face']").hide(0);
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(0);
}

function fadeItOut() {
  $('p').eq(1).fadeOut(0);
}

function findItByClass(string) {
  return $(string).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
