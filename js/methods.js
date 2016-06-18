'use strict';


function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('.iAmFancy');
}

function addText(toadd) {
  $('p:eq(1)').append(toadd);
  return $('p:eq(1)');
}

function showDolphin() {
   $('img#hidden').show();
};


function hideImage() {
  $('img:eq(1)').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(2000);
}

function fadeItOut() {
  $('p:eq(1)').fadeOut(0);
}

function findItByClass(input) {
  return $(input).hasClass('flatironLink');
}

function formValue() {
  return $('form input:eq(1)').val();
}
