'use strict';

function fancySchmancy(){
  return $('p#bacon').addClass('iAmFancy');
}

function addText(st){
  return $('p:nth-child(2)').append(st);
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
}

function findItByClass(st){
  return $(st).hasClass('flatironLink');
}

function formValue(){
  return $('input:last-child').val();
}
