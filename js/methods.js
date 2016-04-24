'use strict';

function fancySchmancy () {
  $("p#bacon").addClass("iAmFancy");
  return $("p#bacon");
}

function addText (string) {
  $("p:eq(1)").append(string);
  return $("p:eq(1)");
}

function showDolphin () {
  $("img#hidden").show();
  return $("img#hidden");
}

function hideImage () {
  $("img[alt='pie in face']").hide();
  return $("img[alt='pie in face']");
}

function fadeIt () {
  $("#favorite-snacks").fadeIn();
}

function fadeItOut () {
  $("p:eq(1)").fadeOut(0);
}

function findItByClass (tag) {
  return $(tag).hasClass("flatironLink");
}

function formValue () {
  return $("input:last").val();
}