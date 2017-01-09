'use strict';

function fancySchmancy(  ) {
	return $('p#bacon').addClass("iAmFancy");
}

function addText(text) {
	return $('p:nth-of-type(2)').append(text);
}

function showDolphin() {
	$('img').show();
}

function hideImage(  ) {
	$('img:nth-of-type(2)').hide();
}

function fadeIt() {
	$('div').fadeIn(4000);
}

function fadeItOut(  ) {
	$('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(selector) {
	return $(selector).hasClass('flatironLink');
}


function formValue() {
	return $('input:last-of-type').val();
}
