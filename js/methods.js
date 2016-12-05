'use strict';

function fancySchmancy(){
  return $("p").addClass("iAmFancy");
}

function addText(sentence){
  $('p:first-child + p').append(sentence);
  return $('p:first-child + p');
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $("#favorite-snacks").fadeIn();
}

function fadeItOut(){
  // selects first child p and fades to 0
  $('p:first-child + p').fadeOut(0);
  return $('p:first-child + p');
}

function findItByClass(selector){
  // confirms selector class as flatironLink
  return $(selector).hasClass("flatironLink");
}

function formValue(){
    //returns value of last input tag
  return $('input:last').val()
}
