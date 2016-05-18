'use strict';
// Create a function fancySchmancy which does not accept any parameters. The function should use the addClass function to add the class iAmFancy (defined in css/style.css) to the p tag with the ID bacon. The function should return the p tag.
// Create a function addText which accepts a string as a parameter. The function should append the parameter to the 2nd paragraph. The function should return the p tag.
// Create a function showDolphin, which shows the hidden image of the dolphin, using the show function. The function does not need to have a return value.
// Create a function hideImage which hides the gif of a man getting hit in the face with a pie. The function does not need to have a return value.
// Create a function fadeIt which uses fadeIn to show the div with the list of favorite snacks. The function does not need to have a return value.
// Create a function fadeItOut which hides the second paragraph using the fadeOut function. You'll need to pass 0 to the fadeOut function so that the image fades immediately. Otherwise, you'll have issues with the tests. The function does not need to have a return value.
// Create a function called findItByClass which accepts a string of a jQuery selector as a parameter. The function should use the hasClass function to check if the a tag has the class flatironLink. The function should return the evaluation of the hasClass function.
// Create a function called formValue that does not accept any parameters. The function should use the val method to retrieve the value of the last input tag. The function should return the value of the value attribute

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy');
}

function addText(string) {
  return $('p:first-child + p').append(string);
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
   $('img[alt="pie in face"]').hide();
}

function fadeIt() {
   $("#favorite-snacks").fadeIn();
}

function fadeItOut() {
   $('p:first-child + p').fadeOut(0);
}

function findItByClass(string) {
    return $(string).hasClass("flatironLink");
}

function animateIt(){
  $('#box').animate({height: "500px"});
}

function formValue(){
  return $('input:last').val();
}
