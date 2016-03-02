'use strict';

function fancySchmancy() {
  return $('#bacon').addClass('iAmFancy');
};

function addText(string) {
  return $('p:first-child').next().append(string);
};

function showDolphin() {
  return $('#hidden').show();
};

function hideImage() {
  $('img[alt="pie in face"]').hide();
};

function fadeIt() {
  $('#favorite-snacks').fadeIn();
};

function fadeItOut() {
  $('p:first-child').next().fadeOut(0);
};

function findItByClass(string) {
  return $(string).hasClass('flatironLink');
};

function formValue() {
  return $('input:last').val();
}
