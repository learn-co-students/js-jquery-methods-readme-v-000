'use strict';

function fancySchmancy(){
  $('#bacon').addClass("iAmFancy");
  return $('.iAmFancy');
}

function addText(string){
  $('p:nth-of-type(2)').append(string);
  return $('p:nth-of-type(2)');
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
  $('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(attr){
  return $(attr).hasClass('flatironLink');
}

function formValue(){
  return $('input:last-of-type').val();
}