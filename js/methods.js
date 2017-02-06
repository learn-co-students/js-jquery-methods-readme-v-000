'use strict';

function fancyShmancy() {
	return $('p#bacon').addClass("iAmFancy");
}

function addText(string) {
	return $('p:nth-of-type(2)').append(string);
}

function showDolphin() {
	$("img#hidden").show();
}

function hideImage() {
	return $("img[alt='pie in face']").hide();
}

function fadeIt() {
	$('#favorite-snacks').fadeIn();
}

function fadeItOut() {
	$('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(selector) {
	return $(selector).hasClass("flatironLink");
}

function formValue() {
	return $("input:checkbox:last").val();
}