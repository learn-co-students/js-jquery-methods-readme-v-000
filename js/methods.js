'use strict';

function fancySchmancy(){
  $('p#bacon').addClass('iAmFancy');
  return $('p#bacon');
}

function addText(string){
  $('p:nth-child(2)').append(string);
  return $('p:nth-child(2)');
}

function showDolphin(){
  $('img#hidden').show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $('div#favorite-snacks').fadeIn(2000);
}


function fadeItOut(){
  $('p:nth-child(2)').fadeOut(0);
  return $('p:nth-child(2)');
}

function findItByClass(selector){
  return $(selector).hasClass(flatironLink);
}

function formValue(){
  return $('input:last').val();
}
