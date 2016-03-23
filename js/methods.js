'use strict';

function fancySchmancy() {
  $('p').addClass("iAmFancy");
  return $('p');
}

function addText(string) {
  $('p:nth-child(2)').append(string);
  return $('p:nth-child(2)');
}

function showDolphin() {
  $('img#hidden').show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt(speed) {
  $('div#favorite-snacks').fadeIn(speed);
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(string) {
  return $(string).hasClass("flatironLink");
}

function formValue() {
  return $('input:last').val();
}