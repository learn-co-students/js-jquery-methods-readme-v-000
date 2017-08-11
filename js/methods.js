'use strict';

function fancySchmancy() {
  return $('#bacon').addClass("iAmFancy");
}

function addText(str) {
  return $('p:last').append(str)
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $('[alt="pie in face"]').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:last').fadeOut(0);
}

function findItByClass(str) {
  return $(str).hasClass('flatironLink');
}

function formValue() {
    return $('input:last').val();
}