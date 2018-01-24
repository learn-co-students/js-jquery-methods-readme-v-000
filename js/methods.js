'use strict';

function fancySchmancy(){
  $('#bacon').addClass('iAmFancy');
  return $('#bacon'); 
}

function addText(string){
  $('p:nth-of-type(2)').append(string);
  return $('p:nth-of-type(2)');
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
  $('img[alt*="pie"]').hide();
}

function fadeIt(){
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut(){
  $('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(selector){
  debugger;
  return $(selector).hasClass("flatironLink");
}

function formValue(){
  return $('input:last').val();
}