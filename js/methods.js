'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('p#bacon');
}

function addText(newText) {
  $('p:nth-child(2)').append(newText);
  return $('p:nth-child(2)');
}

function showDolphin() {
  $('img#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

// function findItByClass(selector) {
//   return $('a').hasClass('flatironLink');
// }

// function formValue() {

// }

