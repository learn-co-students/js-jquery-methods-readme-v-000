'use strict';
function fancySchmancy() {
  return $("p#bacon").addClass("iAmFancy");
}

function addText(text) {
  $("p:nth-of-type(2)").append(text);
  return $("p:nth-of-type(2)");
};

function showDolphin(){
  $("img#hidden").show();
};

function hideImage() {
  $("img:nth-of-type(2)").hide();
};

function fadeIt() {
  $("#favorite-snacks").fadeIn();
};

function fadeItOut() {
  $("p:nth-of-type(2)").fadeOut(0);
};

function findItByClass(string) {
  return $(string).hasClass('flatironLink');
};

function formValue () {
   $('input:last').val();
   return  $('input:last').val();
};
