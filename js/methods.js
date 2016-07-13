'use strict';
 
function fancySchmancy(){
  return $('#bacon').addClass("iAmFancy");
}

function addText(string){
  if (string === undefined)
    string = 'undefined';
  return $('p:nth-child(2)').append(string);
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $('#favorite-snacks').fadeIn();
}

function fadeItOut(){
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(string) {
  if (string === undefined)
    string = 'a';
  return $(string).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
} 