'use strict';

function fancySchmancy() {
  $("p#bacon").addClass("iAmFancy");
  return $("p#bacon");
}

function addText(string) {
  $("p:nth-child(2)").append(string);
  return $("p:nth-child(2)");
}

function showDolphin() {
  $("img#hidden").show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $("div#favorite-snacks").fadeIn(1000);
}

function fadeItOut() {
  $("p:nth-child(2)").hide(0);
}

function findItByClass(string) {
  return $(string).hasClass("flatironLink");
}

function formValue() {
  return $("input:last").val();
}
