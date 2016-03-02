'use strict';

function fancySchmancy () {
  return $('p#bacon').addClass("iAmFancy");
}

function addText (string) {
  return $('body p:nth-child(2)').append(string);
}

function showDolphin () {
  $('img#hidden').show();
}

function hideImage () {
  $('img[alt="pie in face"]').hide();
}

function fadeIt () {
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut () {
  $('body p:nth-child(2)').fadeOut(0);
}

function findItByClass (selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue () {
  return $('input:last').val();
}