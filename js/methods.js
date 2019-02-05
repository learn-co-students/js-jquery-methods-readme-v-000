'use strict';

function fancySchmancy(){
  $('#bacon').addClass('iAmFancy')
  return $('.iAmFancy')
}

function addText(sentence){
  $('p:first-child + p').append(sentence)
  return $('p:first-child + p')
}

function showDophin(){
  $('img[alt="smiling-dolphin 2"]').show()
}
