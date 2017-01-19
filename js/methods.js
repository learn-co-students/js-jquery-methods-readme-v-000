'use strict';


function fancySchmancy(){
  $('p#bacon').addClass("iAmFancy");
  return $('p#bacon')
}

function addText(string){
  $('p:last').append(string)
  return $('p:last')
}

function showDolphin(){
  $('img#hidden').show(); 
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $('div#favorite-snacks').fadeIn(3000);
}

function fadeItOut(){
  $('p:last').fadeOut(0);
}

function findItByClass(string){
  $(`string`).hasClass('flatironLink') 
}

function formValue(){
  $('input:last').val();  
}