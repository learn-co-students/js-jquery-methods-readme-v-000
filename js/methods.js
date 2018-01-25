'use strict';

function fancySchmancy(){
  return $("p#bacon").addClass("iAmFancy");
}

function addText(string){
  return $('p:nth-child(2)').append(string);
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
   $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $('div').fadeIn(2000);
}

function fadeItOut(){
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(selector){
  return $(selector).hasClass('flatironLink');
}

function formValue(){
  return $('input:last').val();
}