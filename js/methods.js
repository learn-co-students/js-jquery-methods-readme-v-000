'use strict';

function fancySchmancy(){return $('p#bacon').addClass('iAmFancy');}

function addText(str){return $('p:nth-of-type(2)').append(str);}

function showDolphin(){ $('#hidden').show(); }

function hideImage(){ $('img[alt="pie in face"]').hide(); }

function fadeIt(){ $('#favorite-snacks').fadeIn(1000); }

function fadeItOut(){ $('p:nth-child(2)').fadeOut(0); }

function findItByClass(elementClass){ return $(elementClass).hasClass('flatironLink'); }

function formValue(){ return $('input:last').val(); }