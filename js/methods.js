'use strict';

function fancySchmancy(){
return $('p:#bacon').addClass(“iAmFancy”);
}

function addText(string){
 return $('p:nth-child(2)').append(string);
}

function showDolphin(){
  $('img[alt=‘smiling dolphin 2’]').show();
}

function hideImage(){
 $('img[alt=‘pie in face’]').hide();
}

function fadeIt(){
   $('#favoritesnacks').fadeIn();
}

function fadeItOut(){
   $('p:nth-child(2)').fadeOut(-1000);
}

function findItByClass(string) {
  return $('a').hasClass("flatironLink");
}

function formValue() {
  return $('input:last').val();
}