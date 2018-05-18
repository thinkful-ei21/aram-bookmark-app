'use strict';
/*global create store api expand $*/


const events = (function () {

  const render = function () {
    api.getItems(function (listed) {
      store.storedBookmarks = listed;
      for (var i = 0; i < store.storedBookmarks.length; i++) {
        $('#condensed').remove();
      }
      for (var i = 0; i < store.storedBookmarks.length; i++) {
        console.log('click');
        $('#sidebar').append(`
      <button id="condensed" class="w3-bar-item w3-button ">(${store.storedBookmarks[i].rating})${store.storedBookmarks[i].title}<span><button id="${store.storedBookmarks[i].id}" class="delete w3-button">X</button></span></button>
      `);
      }
    });




    console.log('render ran');

  };

  function removeBookmark() {
    console.log('delete live');

    $('.delete').click(function () {
      console.log('deleted');
      let targetId = $('.delete').attr('id');
      $.ajax({
        url: 'https://thinkful-list-api.herokuapp.com/luke/bookmarks/' + targetId,
        type: 'DELETE',
        success: function (result) {
          this.render;
          // Do something with the result
        }
      });
    });
  }
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
    removeBookmark();
    handleExpand();
    //handlePullFromForm();
    console.log('event listener live');
  };

  return {
    bindEventListener,
    render,

  };
})();
