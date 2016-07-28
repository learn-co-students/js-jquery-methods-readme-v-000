'use strict';


function fancySchmancy() {
  return $("p#bacon").addClass('iAmFancy')
}

function addText(string) {
  return $("body p:nth-child(2)").append(string)
}

function showDolphin() {
  $("#hidden").show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $("#favorite-snacks").fadeIn();
}

function fadeItOut() {
  $("body p:nth-child(2)").fadeOut(0)
}

function findItByClass(string) {
  return $(string).hasClass("flatironLink");
}

function formValue() {
  return $("input:last-child").val();
}
