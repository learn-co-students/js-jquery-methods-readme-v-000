'use strict';



function fancySchmancy(){
  $('#bacon').addClass("iAmFancy");
  return $('.iAmFancy');
}

function addText(sentence){
  $('p:first-child + p').append(sentence);
  return $('p:first-child + p');
}

function showDolphin(){
  $('#hidden').show();
  return $('#hidden');
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
  return $('img[alt="pie in face"]');
}

function findItByClass(selector){
  return $(selector).hasClass("flatironLink");
}

function fadeIt(){
  $('#favorite-snacks').fadeIn(2000);
  return $('#favorite-snacks');
}

function fadeItOut(){
  $('p:first-child + p').fadeOut(3000);
    return $('p:first-child + p');
}

function formValue(){
  return $('input:last').val();
}
