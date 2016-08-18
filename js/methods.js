'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy');
};

function addText(string) {
  return $('p:first-child + p').append(string);
};

function showDolphin() {
  $('#hidden').show();
};

function hideImage(){
  $('img[alt="pie in face"]').hide();
};

function fadeIt(){
  $("#favorite-snacks").fadeIn();
};

function fadeItOut(){
  $('p:first-child + p').fadeOut(0);
  return $('p:first-child + p');
};

function findItByClass(selector){
  return $(selector).hasClass("flatironLink");
};

function animateIt(){
  $('#box').animate({height: "500px"});
};


function formValue(){
  return $('input:last').val();
};
