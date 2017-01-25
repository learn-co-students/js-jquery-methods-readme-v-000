'use strict';

function fancySchmancy(){
  $('#bacon').addClass("iAmFancy");
  return $('#bacon');
}

function addText(str){
  return $('p:nth-child(2)').append(str);
}
function showDolphin(){
  $('#hidden').show();
}
function hideImage(){
  $('img[alt="pie in face"]').hide();
}
function fadeIt(){
  $('#favorite-snacks').fadeIn(2000);
}
function fadeItOut(){
  $('p:nth-child(2)').fadeOut(0)
}
function findItByClass(str){
  return $(str).hasClass('flatironLink');
}
function formValue(){
  return $('input:last').val()
}
