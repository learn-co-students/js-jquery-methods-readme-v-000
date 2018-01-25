'use strict';

function fancySchmancy(){
  return jQuery('p#bacon').addClass('iAmFancy');
}

function addText(str){
  return jQuery('p:nth-of-type(2)').append(str);
}

function showDolphin(){
  jQuery('#hidden').show();
}

function hideImage(){
  jQuery('img[alt="pie in face"]').hide();
}

function fadeIt(){
  jQuery('#favorite-snacks').fadeIn();
}

function fadeItOut(){
  jQuery('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(str){
  return jQuery(str + ':link').hasClass('flatironLink');
}

function formValue(){
  return jQuery('input:last').val();
}