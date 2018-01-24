'use strict';
function fancySchmancy(){
  $("p#bacon").addClass("iAmFancy");
  return $("p#bacon");
}

function addText(text){
  $("p:first-child + p").append(text);
  return $("p:first-child + p");
}

function showDolphin(){
  $("#hidden").show();
}

function hideImage(){
  $("img[alt='pie in face']").hide();
}

function fadeIt(){
  $("div#favorite-snacks").fadeIn();
}

function fadeItOut(){
  $('p:first-child + p').fadeOut(0);
}

function findItByClass(selector){
  return $(selector).hasClass('flatironLink');
}

function formValue(){
  return $("input:last").val();
}