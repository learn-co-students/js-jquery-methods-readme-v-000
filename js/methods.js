'use strict';

function fancySchmancy(){
  var $p = $('p');
  $p.addClass('iAmFancy');
  return $p;
};

function addText(s){
  var $p = $('p:last');
  $p.append(s);
  return $p;
};

function showDolphin(){
  $('#hidden').show();
};

function hideImage(){
  $('img[alt="pie in face"]').hide();
};

function fadeIt(){
  $('#favorite-snacks').fadeIn(2000);
};

function fadeItOut(){
  $('p:first-child + p').fadeOut(0);
};

function findItByClass(selector_input){
  return $(selector_input).hasClass("flatironLink");
};

function formValue(){
  return $(':input:last').val();
};
