'use strict';

function fancySchmancy(){
  $('#bacon').addClass("iAmFancy");
  return $('.iAmFancy');
}

function addText(words){
	$('p:last').append(words)
	return $('p:last')
}

function showDolphin(){
	$('#hidden').show()
}

function hideImage(){
	$('img:last').hide()
}

function fadeItOut(){
	$('p:last').fadeOut(0)
}

function findItByClass(select){
	return $(select).hasClass('flatironLink')
}

function formValue(){
	return $('input:last').val()
}

function fadeIt(){
	$('#favorite-snacks').fadeIn()
}
