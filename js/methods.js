'use strict';

function fancySchmancy(){
  return $("p#bacon").addClass("iAmFancy");
}

function addText(word){
  return $("p:nth-of-type(2)").append(word);
}

function showDolphin(){
  return $("img#hidden").show(); 
}

function hideImage(){
  return $("img[alt='pie in face']").hide();
}

function fadeIt(){
   return $("div#favorite-snacks").fadeIn(); 
}

function fadeItOut(){
  return $("p:nth-of-type(2)").fadeOut(0);  
}

function findItByClass(word){
  return $(word).hasClass('flatironLink');
}

function formValue(){
  return $("input:last").val();
}