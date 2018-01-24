'use strict';

  function fancySchmancy() {
      $("#bacon").addClass("iAmFancy");
      return $(".iAmFancy");
  }

  function addText(str) {
      $("p:nth-of-type(2)").append(str);
      return $("p:nth-of-type(2)");
  }

  function showDolphin() {
      return $("#hidden").show();
  }

  function hideImage() {
      return $("img:nth-of-type(2)").hide();
  }

  function fadeIt() {
      return $("#favorite-snacks").fadeIn();
  }

  function fadeItOut() {
      $("p:nth-of-type(2)").fadeOut(0);
      return $("p:nth-of-type(2)");
  }

  function findItByClass(element) {
      return $(element).hasClass("flatironLink");
  }

  function formValue() {
      return $("input:last").val();
  }

$(document).ready(function() {
  fancySchmancy();
  addText("string");
  showDolphin();
  hideImage();
  fadeIt();
  fadeItOut();
  findItByClass("a");
  formValue();
});
