'use strict';
/*global create expand $*/


const events = (function () {

  function handleAddNewBookmark() {
    $('#add').click(function () {
      $('#log').remove();

      $('#list').append(create.form);
    });
  }

  function handleExpand() {
    //TEST CALLS
    $('#button-one').click(function () {
      expand.displayOnExpand('title', 'https://thinkful.com', 'This is a description of the title', '4');
    });

    $('#button-two').click(function () {
      expand.displayOnExpand('title2', 'https://thinkful.com', 'This is a description of the title', '4');
    });
  }

  function handlePullFromForm() {
    $('#submit').submit(function () {
      console.log('fired');
      console.log($('#url').text());
    });

  }

  const bindEventListener = function () {
    handleAddNewBookmark();

    handleExpand();
    handlePullFromForm();
    console.log('event listener live');
  };

  return {
    bindEventListener,

  };
})();
