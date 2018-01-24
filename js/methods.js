'use strict';
function fancySchmancy() {
  $('p#bacon').addClass("iAmFancy");
  return $('p#bacon');
}

function addText(str) {
  return $('p:last').append(str);
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $("#favorite-snacks").fadeIn();
}

function fadeItOut() {
  return $('p+p').fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue(){
  return $('input:last').val();
}