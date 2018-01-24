'use strict';

function fancySchmancy() {
  return $("p#bacon").addClass("iAmFancy");
}

function addText(word) {
  return $("p:nth-child(2)").append("<p>" + word + "</p>");
}

function showDolphin() {
  $("img#hidden").show();
}

function hideImage() {
  $("img").hide();
}

function fadeIt() {
  $("#favorite-snacks").fadeIn(4000);
}

function fadeItOut() {
  $("p:nth-child(2)").fadeOut(0);
}

function findItByClass(element) {
  return $(element).hasClass("flatironLink");
}

function formValue() {
  return $("input:last").val();
}
