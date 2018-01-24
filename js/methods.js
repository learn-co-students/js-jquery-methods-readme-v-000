'use strict';

function fancySchmancy(){
  return $('p#bacon').addClass('iAmFancy');
}

function addText(text){
  return $('p:last').append(text);
}

function showDolphin(){
  $('#hidden').show();
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

function findItByClass(tag){
  return $(tag).hasClass('flatironLink');
}

function formValue(){
  return $('input:last').val();
}
