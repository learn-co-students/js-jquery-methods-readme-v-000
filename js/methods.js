'use strict';

function fancySchmancy() {
    return $("p#bacon").addClass("iAmFancy");
  }

function addText(string) {
    return $('p:last').append(string);
  }

function showDolphin() {
    $('img#hidden').show();
  }

function hideImage() {
    $('img:last').hide();
  }

function fadeIt() {
    $('#favorite-snacks').fadeIn(2000);
  }

function fadeItOut() {
    $('p:last').fadeOut(0);
  }

function findItByClass(selector) {
    return $(selector).hasClass('flatironLink');
  }

function formValue() {
    return $('input:last-child').val();
  }
