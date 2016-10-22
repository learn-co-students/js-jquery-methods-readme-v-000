'use strict';

function fancySchmancy(){
  return $('#bacon').addClass("iAmFancy");
}

function addText(text){
  return $('p:first-child + p').append(text);
}


function showDolphin(){
  return $("img[id=hidden]").show();
}


function hideImage() {
  return $('img[alt="pie in face"]').hide();

}

function fadeIt() {
  return $('#favorite-snacks').fadeIn(0).fadeTo(0, 0);
}


function fadeItOut(){
  return $('p:first-child + p').fadeOut(0,0);
}

function findItByClass(att){
  return $(att).hasClass('flatironLink');
}

function formValue(){
  return $('input:last').val();
}
$(document).ready(function () {
  //fancySchmancy()
  //fadeItOut();
});
