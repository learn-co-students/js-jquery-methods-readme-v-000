'use strict';

function fancySchmancy(){
  $("p#bacon").addClass("iAmFancy");
  return $("p#bacon")
}

function addText(string){
  $("p:eq( 1 )").append(string);
  return $("p:eq( 1 )");
}

function showDolphin(){
  $("#hidden").show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $("div#favorite-snacks").fadeIn(4000);
}

function fadeItOut(){
  $("p:eq( 1 )").fadeOut(0);
}

function findItByClass(string){
  return $(string).hasClass("flatironLink");
}

function formValue(){
  return $("input:last").val();
}