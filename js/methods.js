

function fancySchmancy() {
  $('#bacon').addclass("iAmFancy");
  return $('p');
}
/* Create a function addText which accepts a string as a
parameter. The function should append the parameter to the
2nd paragraph. The function should return the p tag.*/
function addText(string) {
  $('body p:nth-child(2)').append('string');
  return $('body p:first-child');
}

function showDolphin() {
  $('#hidden').show();
}


function hideImage() {
  $("img[alt='pie in face']").hide()
}



function fadeIt() {
  $('#favorite-snacks').fadeIn();
}



function fadeItOut() {
  $('body p:nth-child(2)').fadeOut(0);
}


function findItByClass(flatironLink) {
  return $(flatironLink).hasClass('flatironLink');
}


function formValue() {
  return $('input:last').val();
}
