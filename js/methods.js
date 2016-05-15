'use strict';

function fancySchmancy() {
  $('#bacon').addClass('iAmFancy');
  return $('#bacon');
}

function addText(string) {
  $('p:nth-child(2)').append(string);
  return $('p:nth-child(2)');
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:first-child + p').fadeOut(0);
}

function findItByClass(element) {
  return element == 'a'
}

function formValue() {
  return $('input').last().val();
}
