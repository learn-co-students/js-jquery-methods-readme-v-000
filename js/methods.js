'use strict';

function fancySchmancy(){
  $("p#bacon").addClass("iAmFancy");
  return $('.iAmFancy');
}

function addText(str){
  $('p:nth-child(2)').append(str);
  return $('p:nth-child(2)');
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $("p:nth-child(2)").fadeOut(0);
}

function findItByClass(str) {
  return $(str).hasClass("flatironLink");
}

function formValue() {
  return $('input:nth-child(2)').val();
}