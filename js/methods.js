'use strict';

function fancySchmancy(){
  return $('#bacon').addClass('iAmFancy');
}

function addText(string) {
  return $('p:nth-child(2)').append(string);
}

function showDolphin() {
  return $("#hidden").show();
}

function hideImage() {
  return $("img[alt='pie in face']").hide();
}

function fadeIt() {
  return $("#favorite-snacks").fadeIn();
}

function fadeItOut() {
  return $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue() {
  return $("input:last").val();
}
