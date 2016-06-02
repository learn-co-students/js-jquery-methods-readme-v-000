'use strict';
//class .
//id    #
function fancySchmancy(){
  return $('p#bacon').addClass("iAmFancy ");
}

function addText(string){
  return $('p:last').append(string);
}

function showDolphin () {
  //$('img[alt="smiling dolphin 2"]').show();
  $('#hidden').show();
}

function hideImage(){
  $('img[alt = "pie in face"]').hide();
}

function fadeIt(){
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut(){
  //$('p:nth-of-type(2)').fadeItOut();
  return $('p:last').fadeOut(0);
}

function findItByClass(selector){
  return $(selector).hasClass('flatironLink') ? true : false
}

function formValue(){
  return $('input:last-child').val();
}
