'use strict';
function fancySchmancy(){
	return $('#bacon').addClass("iAmFancy");
}

function addText(string){
	return $('p:last').append(string);
}

function showDolphin(){
	$('#hidden').show();
}

function hideImage(){
	$('img[alt="pie in face"').hide();
}

function fadeIt(){
	$('#favorite-snacks').fadeIn();
}

function fadeItOut(){
	$('p:last').fadeOut(0);
}

function findItByClass(selector){
	return $(selector).hasClass('flatironLink');
}

function formValue(){
	return $('input:last').val();
}