'use strict';
/*global create store api expand $*/


const events = (function () {

  const render = function () {
    api.getItems(function (listed) {
      store.storedBookmarks = listed;
    });
    store.createNewCondensed();


    console.log('render ran');

  };

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

  // function handlePullFromForm() {
  //   console.log('Can pull');
  //   $('.submit').click(function (event) {
  //     event.preventDefault();
  //     console.log('fired');
  //     console.log($('#radio').val());

  //   });

  // }

  const bindEventListener = function () {
    handleAddNewBookmark();

    handleExpand();
    //handlePullFromForm();
    console.log('event listener live');
  };

  return {
    bindEventListener,
    render,

  };
})();
