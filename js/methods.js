'use strict';

function fancySchmancy() {
  return $("#bacon").addClass("iAmFancy");
}

function addText(str) {
  return $("p:nth-child(2)").append(str);
}

function showDolphin() {
  return $("img#hidden").show();
}

function hideImage() {
  return $("img[alt='pie in face']").hide()
}

function fadeIt() {
  return $("#favorite-snacks").fadeIn();
}

function fadeItOut() {
  return $("p:nth-child(2)").fadeOut(0);
}

function findItByClass(el) {
  return $(el).hasClass("flatironLink");
}

function formValue() {
  return $("input:last").val();
}
