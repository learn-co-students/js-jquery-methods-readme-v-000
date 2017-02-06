'use strict';
function fancySchmancy()
{
  $('#bacon').addClass("iAmFancy");
  return $('#bacon').addClass("iAmFancy");
}

/*function addText(string)
{
  $('p:nth-of-type(2)').append(string);
return $('p:nth-of-type(2)').append(string);
}*/

function addText(sentence){
  $('p:first-child + p').append(sentence);
  return $('p:first-child + p');
}

function showDolphin()
{
  $('#hidden').show();
}

function hideImage()
{
  $('img[alt="pie in face"]').hide();
}

function fadeIt()
{
  $('#favorite-snacks').fadeIn() ;
}

function fadeItOut()
{
  $('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(string)
{
  return $('a').hasClass("flatironLink");
}

function formValue()
{
   return $('input:last').val();
}
