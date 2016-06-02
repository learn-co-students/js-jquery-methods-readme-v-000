'use strict';
//class .
//id    #
function fancySchmancy(){
  return $('p#bacon').addClass("iAmFancy ");
}

function addText(string){
  return $('p:nth-of-type(2)').append(string);
}

function showDolphin() {
  //$("img[alt='smiling dolphin 2']").show();
  $('#hidden').show();
}

function hideImage(){
  $('img[alt = "pie in face"]').hide();
}

function fadeIt(){
    $('#favorite-snacks').fadeIn(0);
}

function formValue(){
  $('input:last-child').val();
}
