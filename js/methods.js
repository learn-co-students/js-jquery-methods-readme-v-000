'use strict';

function fancySchmancy(){
  return $('p#bacon').addClass("iAmFancy");
}

function addText(string){
  return $('p:nth-of-type(2)').append(string);
}

// another solution
// function addText(sentence){
//   $('p:first-child + p').append(sentence);
//   return $('p:first-child + p');
// }

function showDolphin(){
  $('img#hidden').show();
}

function hideImage(){
  $("img[alt='pie in face']").hide();
}

function fadeIt(){
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut(){
  $('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(string){
  return $(string).hasClass("flatironLink");
}

function formValue(){
  return $('input:last').val();
}