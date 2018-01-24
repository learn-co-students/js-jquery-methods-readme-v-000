'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('p#bacon');
}

function addText(string) {
  return $('p:nth-child(2)').append(string);
}

function showDolphin() {
  $('#hidden').show(0).css("display", "inline");
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(select) {
  return $(select).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
