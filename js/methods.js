'use strict';

function fancySchmancy (){
  var classes = $('p#bacon').addClass("iAmFancy");
  return classes
}

function addText (string) {
var str = $('p:nth-of-type(2)').append(string)
return str
}

function showDolphin(){
$('img').show()
}

function hideImage () {
$("img[alt='pie in face']").hide()
}

function fadeIt () {
  $('#favorite-snacks').fadeIn()
}


function fadeItOut (){
$('p:nth-of-type(2)').fadeOut(0)
}

function findItByClass (str) {
var links = $(str).hasClass('flatironLink')
return links
}


function formValue () {
var vals = $('input:last-of-type').val()
return vals
}

//remember you can use the debugger
