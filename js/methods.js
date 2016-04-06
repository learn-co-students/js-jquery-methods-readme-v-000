'use strict';
function fancySchmancy(){
  return $('p#bacon').addClass('iAmFancy');
}

function addText(text){
  return $('p:last').append(text);
}

function showDolphin(){
  $("img#hidden").show();
}

function hideImage(){
  $("img[alt='pie in face']").hide();
}

function fadeIt(){
  $('#favorite-snacks').fadeIn();
}

function fadeItOut(){
  $('p:last').fadeOut(0);
}

function findItByClass(selector){
  return $(selector).hasClass('flatironLink');
}

function fadeItOut(){
  $('p:last').fadeOut(0);
}

function formValue(){
  return $('input:last').val()
}