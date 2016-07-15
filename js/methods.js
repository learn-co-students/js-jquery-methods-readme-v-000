'use strict';
function fancySchmancy() {
  return $("p[id='bacon']").addClass('iAmFancy');
}

function addText(string) {
  return $('p:eq(1)').append(string);
}

function showDolphin() {
  $("#hidden").show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $("div[id='favorite-snacks']").fadeIn();
}

function fadeItOut() {
  $("p:eq(1)").fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
