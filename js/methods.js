'use strict';

function fancySchmancy() {
	$('p').addClass('iAmFancy');
	return $('.iAmFancy');
}
function addText(string) {
	$('p:nth-child(2)').append(string);
	return $('p:nth-child(2)');
}

function showDolphin() {
	$('#hidden').show();
}

function hideImage() {
	$('img[alt="pie in face"]').hide();
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut();
}

function findItByClass(string) {
  return $(string).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}