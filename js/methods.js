'use strict';

function fancySchmancy(){
  return $("p#bacon").addClass("iAmFancy");
}

function addText(string){
  return $("p:last").append(string);
}

function showDolphin(){
  $('#hidden').show(); 
}

function fadeIt(){
  $('#favorite-snacks').fadeIn();
}

function fadeItOut(){
  return $('p:last').fadeOut(0);
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function findItByClass(selector){
  return $(selector).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}

