'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy') ;
}

function addText(string) {
  $('p:first-child + p').append(string) ;
  return $('p:first-child + p') ;
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $("img[alt='pie in face']").hide() ;
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(2000) ;
}

function fadeItOut() {
  $('p:first-child + p').fadeOut(0) ;
}

function findItByClass(selector) {
  return $(selector).hasClass("flatironLink") ;
}

function formValue() {
  return $('input:last').val() ;
}