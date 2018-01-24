'use strict';

function fancySchmancy(){
  return $('p#bacon').addClass('iAmFancy');
}

function addText(string){
  return $('p:last').append(string);
}

function showDolphin(){
  $('img#hidden').show();
}

function hideImage(){
  $('img:last').hide();
}

function fadeIt(){
  $('div#favorite-snacks').fadeIn(2000);
}

function fadeItOut(){
   $('p:last').fadeOut(0);
}

function findItByClass(paramString){
  return $(paramString).hasClass('flatironLink');
}

function formValue(){
  return $('input:last').val();
}