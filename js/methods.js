'use strict';

function fancySchmancy(){
  return $('p#bacon').addClass('iAmFancy');
}

function addText(text){
  return $('p:last-of-type').append(text);
}

function showDolphin(){
  $('img#hidden').show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $('div#favorite-snacks').fadeIn(4000);
}

function fadeItOut(){
  $('p:last-of-type').fadeOut(0);
}

function findItByClass(selector){
  return $(selector).hasClass('flatironLink');
}

function formValue(){
  return $('input:last-of-type').val();
}