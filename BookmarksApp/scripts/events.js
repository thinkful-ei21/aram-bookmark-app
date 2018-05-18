'use strict';
/*global create expand $*/

$('#add').click(function () {
  $('#log').remove();

  $('#list').append(create.form);
});

$('#button-one').click(function () {
  expand.displayOnExpand('title', 'https://thinkful.com', 'This is a description of the title', '4');
});

$('#button-two').click(function () {
  expand.displayOnExpand('title2', 'https://thinkful.com', 'This is a description of the title', '4');
});