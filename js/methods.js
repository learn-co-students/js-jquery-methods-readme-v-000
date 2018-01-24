'use strict';

function fancySchmancy() {
 var p = $("p").addClass("iAmFancy");
   return p;
}

function addText(string) {
  var par = $("p:nth-of-type(2)").append(string);
  return par;
}

function showDolphin() {
  $('img').show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $("p:nth-of-type(2)").fadeOut(0);
}

function findItByClass(a) {
  var has = $(a).hasClass('flatironLink');
  return has;
}

function formValue() {
  return $('input:last').val();

}
