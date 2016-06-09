'use strict';

function fancySchmancy() {
   return $('p#bacon').addClass('iAmFancy');
 };

 function addText(string) {
   return $('p:first-child + p').append(string);
 };

 function showDolphin() {
   $('img#hidden').show();
 };

 function hideImage() {
   $('img[alt="pie in face"]').hide();
 };

 function fadeIt() {
   $('div#favorite-snacks').fadeIn(4000);
 };

 function fadeItOut() {
   $('p:last').fadeOut(0);
 };

 function findItByClass(string) {
   return $(string).hasClass('flatironLink');
 };

 function formValue() {
   return $('input:last').val();
 };
