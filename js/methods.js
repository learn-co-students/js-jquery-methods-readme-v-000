'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass("iAmFancy");
};

function addText(string) {
  return $('p:last').append(string);
};

function showDolphin() {
  //$('img[alt="smiling dolphin 2"]').removeAttr('id');
  //$('img[alt="smiling dolphin 2"]').show();
  $('#hidden').show();
};

function hideImage() {
  $('img[alt="pie in face"]').hide();
  //$('img[alt="pie in face"]').attr('id', 'hidden');
};

function fadeIt() {
  $('div#favorite-snacks').fadeIn();
};

function fadeItOut() {
  return $('p:last').fadeOut(0);
};

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
};

function formValue() {
  return $('input:last').val()
};
