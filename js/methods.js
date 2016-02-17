'use strict';

function fancySchmancy(){
  return $('p#bacon').addClass('iAmFancy');
}

function addText(){
  return $('p:nth-child(2)').append("string to add");
}

function showDolphin(){
  $('img#hidden').show();
}

function hideImage(){
  $('[alt="pie in face"]').hide();
}

function fadeIt(){
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut(){
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(selector){
  return $(selector).hasClass("flatironLink");
}

function formValue(){
  return $('input:last').val();
}