'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass("iAmFancy");
};

function addText(string) {
  return $('p:last').append(string);
};

function showDolphin() {
  $('img[alt="smiling dolphin 2"]').removeAttr('id')
};
