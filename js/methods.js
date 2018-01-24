'use strict';
function fancySchmancy(){
   $('#bacon').addClass("iAmFancy");
  return $('.iAmFancy');
}

function addText(para){
   $('p:first-child +p').append(para)
   return $('p:first-child +p')
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide()
}

function fadeIt(){
  $('#favorite-snacks').fadeIn(2000)
}

function fadeItOut(){
  $('p:first-child +p').fadeOut(0)
}

function findItByClass(jq){
  return $(jq).hasClass("flatironLink")
}

function formValue(){
  return $('input:last').val()
}