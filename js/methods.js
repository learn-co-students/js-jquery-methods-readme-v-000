'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy');
}

function addText(string) {
  return $('p:nth-child(2)').append(string);
}

function showDolphin() {
  $("#hidden").show();
}

function hideImage() {
  return $("img[alt='pie in face']").hide();
}

function fadeIt() {
  return $("#favorite-snacks").fadeIn(4000);
}

function fadeItOut() {
  return $("p:nth-child(2)").fadeOut(0);
}

function findItByClass(element) {
  return $(element).hasClass('flatironLink');
}

function formValue() {
  return $("input:last").val();
}
