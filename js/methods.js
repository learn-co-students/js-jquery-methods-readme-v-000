'use strict';

function fancySchmancy(){
  $('#bacon').addClass('iAmFancy');
  return $('.iAmFancy');
}

function addText(str){
  $('#bacon').next().append(str);
  return $('#bacon').next();
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
  $('#bacon').next().fadeOut(0);
}

function findItByClass(str){
  return $(str).hasClass('flatironLink')
}

function formValue(){
  return $('input:last').val();
}