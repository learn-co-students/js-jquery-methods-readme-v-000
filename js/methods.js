'use strict';

function fancySchmancy() {
  $('#bacon').addClass('iAmFancy'); return $('#bacon');
}

function addText(text) {
  $('p:last').append(text); return $('p:last');
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $("#favorite-snacks").fadeIn();
}

function fadeItOut(){
  $('p:first-child + p').fadeOut(0);
  return $('p:first-child + p');
}

function findItByClass(selector) {
  return $(selector).hasClass("flatironLink");
}

function formValue() {
  return $('input:last').val();
}
