'use strict';

function fancySchmancy(){
  return $('p').addClass('iAmFancy')
}

function addText(string){
  return $('p:last').append(string);
}

function showDolphin(){
  $('img').show();
}

function hideImage(){
  $('img').hide();
}

function fadeIt(){
  $('div').fadeIn();
}

function fadeItOut(){
  $('p:last').fadeOut(0);
}

function findItByClass(string){
  return $(string).hasClass('flatironLink');
}

function formValue(){
  return $('input:last').val();
}