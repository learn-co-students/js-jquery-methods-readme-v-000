'use strict';

function fancySchmancy(){
  $('#bacon').addClass('iAmFancy')

  return $('.iAmFancy')
}

function addText(newText){
  $('p:first-child + p').append(newText)

  return $('p:first-child + p')
}

function showDolphin(){
  $('#hidden').show()

  return $('#hidden')
}

function hideImage(){
  $('img[alt="pie in face"]').hide()

  return $('img[alt="pie in face"]')
}

function fadeIt(){
  $('#favorite-snacks').fadeIn()

  return $('#favorite-snacks')
}

function fadeItOut(){
  $('p:first-child + p').hide().fadeOut()


  return $('p:first-child + p')
}

function findItByClass(selector){
  return $(selector).hasClass('flatironLink')
}

function formValue(){
  return $('input:last').val()
}
