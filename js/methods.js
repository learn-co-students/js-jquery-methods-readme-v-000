'use strict';

function fancySchmancy() {
  $("p").addClass("iAmFancy");
  return $("p");
 }

 function addText(string) {
   $('p:nth-of-type(2)').append(string);
   return $('p:nth-of-type(2)');
 }

 function showDolphin() {
   $('#hidden').show();
 }

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(2000);
}

function fadeItOut() {
  $('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
