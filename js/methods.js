'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass("iAmFancy")
}

function addText(text) {
  return $('p:eq(1)').append('str')
}

function showDolphin() {
   $('img').show()
}

function hideImage() {
   $('img[alt="pie in face"]').hide()
}

function fadeIt() {
  $('#favorite-snacks').fadeIn()
}

function fadeItOut() {
  $('p:eq(1)').hide()
}

function findItByClass(str){
  return $(str).hasClass('flatironLink')
}

function formValue(){
  return $("input:last-child").val()
}
