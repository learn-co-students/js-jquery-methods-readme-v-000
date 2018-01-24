'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('.iAmFancy');
};

function addText(string) {
  $('p:nth-child(2)').append(string);
  return $('p:nth-child(2)');
};

function showDolphin() {
  $('#hidden').show();
};

function hideImage() {
  $('img[alt="pie in face"]').hide();
};

function fadeIt() {
  $('#favorite-snacks').fadeIn();
};

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
  return $('p:nth-child(2)');
};

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
};

function formValue() {
  return $('input').last().val();
};
