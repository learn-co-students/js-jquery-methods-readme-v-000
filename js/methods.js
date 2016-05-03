'use strict';

function fancySchmancy() {
  $("p#bacon").addClass("iAmFancy");
  return $("p#bacon");
}

function addText(string) {
  $("p:last").append(string);
  return $("p:last");
}

function showDolphin() {
  $("#hidden").show(); 
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $("div#favorite-snacks").fadeIn(4000);
}

function fadeItOut() {
  $("p:last").fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass("flatironLink");
}

function formValue() {
  return $("input:last").val();
}