'use strict';

function fancySchmancy() {
  $('p#bacon').addClass("iAmFancy");
  return $('p#bacon');
}

function addText(str) {
  $('p:first + p').append(str);
  return $('p:first + p');
}

function showDolphin() {
  $('img#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn(4000);
}

function fadeItOut() {
  $('p:first + p').fadeOut(0);
}

function findItByClass(str) {
  return $(str).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
