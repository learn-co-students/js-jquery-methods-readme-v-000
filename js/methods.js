'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy');
}

function addText(string) {
  //append the string param to the second-child p
  //thus, use the prev + next syntax to get the "next" as the DOM element
  return $('p:first-child + p').append(string);
}

function showDolphin() {
  $("#hidden").show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:first-child + p').fadeOut(0);
}

function findItByClass (selector) {
  return $(selector).hasClass("flatironLink");
}

function formValue () {
  return $('input:last-child').val();
}
