'use strict';

function fancySchmancy(){
  $("p#bacon").addClass('iAmFancy');
  return $("p#bacon");
}

function addText(string){
  return $('p:nth-of-type(2)').append(string);
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
  $("img[alt='pie in face']").hide();
}

function fadeIt(){
  $("#favorite-snacks").fadeIn();
}

function fadeItOut(){
  $("p:nth-of-type(2)").fadeOut(0);
}

function findItByClass(selector){
  return $(selector).hasClass('flatironLink');
}

function formValue(){
  return  $('input').last().val();
}
