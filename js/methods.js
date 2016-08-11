'use strict';
function fancySchmancy() {
  $("#bacon").addClass("iAmFancy");
  return $('.iAmFancy');
}
function addText(addString) {
  $('p:nth-child(2)').appendTo('addString');
  return $('p:nth-child(2)');
}
function showDolphin() {
  $('#hidden').show();
}
function hideImage() {
  $('img[alt="pie in face"]').hide();
}
function fadeIt() {
  $('#favorite-snacks').fadeIn();
}
function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}
function findItByClass(jqSelector) {
  return $(jqSelector).hasClass("flatironLink");
}
function formValue() {
  return $('input:last').val();
}
