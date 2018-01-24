'use strict';

function fancySchmancy() {
  var p = $('p#bacon');
  p.addClass('iAmFancy');
  return p;
}

function addText(text) {
  var p = $('p:nth-child(2)');
  p.append(text);

  return p;
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(query) {
  return $(query).hasClass('flatironLink');
}

function formValue () {
  return $('input:last').val();
}