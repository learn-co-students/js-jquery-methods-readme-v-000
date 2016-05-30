'use strict';

function fancySchmancy(){
  $('#bacon').addClass("iAmFancy");
  return $('.iAmFancy');
}

function addText(myString){
  $('p:first-child + p').append(myString);
  return $('p:first-child + p');
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $('div #favorite-snacks').fadeIn();
}

function fadeItOut(){
  $('p:first-child + p').fadeOut(0);
}

function findItByClass(myString){
  return $(myString).hasClass("flatironLink");
}

function formValue(){
  return $('input:last').val()
}