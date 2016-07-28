'use strict';

function fancySchmancy() {
  return $("p").addClass("iAmFancy");
}

function addText(string) {
  return $('p').append("${string}")
}
