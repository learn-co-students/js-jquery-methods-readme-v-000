'use strict';

function fancySchmancy() {
    return $("p#bacon").addClass("iAmFancy");
}

function addText(text) {
  return $("p:nth-child(2)").append("text")

}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function showDolphin() {
  $("img#hidden").show();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $("p:nth-child(2)").fadeOut(0);
}

function findItByClass(jquerySelector) {
  return $(jquerySelector).hasClass("flatironLink");
}

function formValue() {
  return $("input:last").val()
}
