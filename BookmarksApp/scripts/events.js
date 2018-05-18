'use strict';
/*global create store api expand $*/
let filter = 0;

const events = (function () {

  const render = function () {
    api.getItems(function (listed) {
      store.storedBookmarks = listed;
      for (var i = 0; i < store.storedBookmarks.length; i++) {
        $('.condensed').remove();
        $('.delete').remove();
      }



      events.deleteBookmark();
      // handleExpand();


      for (var y = 0; y < store.storedBookmarks.length; y++) {
        console.log('click');

        if (store.storedBookmarks[y].rating > filter) {
          $('#sidebar').append(`
      <button id="${store.storedBookmarks[y].id}" class="condensed w3-bar-item w3-button ">(${store.storedBookmarks[y].rating})${store.storedBookmarks[y].title}<button id="${store.storedBookmarks[y].id}" class="delete w3-button">X</button></button>
      `);
        }
      }
    });




    console.log('render ran');

  };
  // function handleExpand() {
  //   let expansion = [];
  //   console.log('on');
  //   $('.condensed').click(function () {
  //     console.log('on');
  //     let expandId = $('.condensed').attr('id');
  //     console.log(expandId);

  //   });
  // }
  // handleExpand();
  function deleteBookmark() {
    console.log('check');
    api.getItems(function () {
      function getID(val) {
        let marks = store.storedBookmarks;
        return marks[val].id;
      }


      console.log('delete live');
      // ----------------------------------------------------------------------------------------

      // for (let p = 0; p < store.storedBookmarks.length; p++) {
      //   if (store.storedBookmarks)

      // }
      // ----------------------------------------------------------------------------------------

      // ----------------------------------------------------------------------------------------

      let expansion = {};
      $('.condensed').click(function () {
        let expandId = event.target.id;
        console.log(expandId);
        for (let i = 0; i < store.storedBookmarks.length; i++) {
          if (store.storedBookmarks[i].id === expandId) {
            expansion = store.storedBookmarks[i];
          }
          expand.displayOnExpand(expansion.title, expansion.url, expansion.desc, expansion.rating);
        }

      });
      // ----------------------------------------------------------------------------------------
      $('.delete').click(function () {
        console.log('pressed');
        let targetId = $('.delete').attr('id');
        $.ajax({
          url: 'https://thinkful-list-api.herokuapp.com/ara/bookmarks/' + targetId,
          type: 'DELETE',
          success: function (result) {
            console.log('delete successful');
            $(`#${targetId}`).remove();
            $(`#${targetId}`).remove();
            $('#log').remove();

            // Do something with the result
          }
        });
        events.render();
      });


    });


  }



  // function filterOut() {
  //   $('.filter').click(function () {
  //     for (let i = 0; i < array.length; i++) {


  //     }
  //   });
  // }


  function handleAddNewBookmark() {
    $('#add').click(function () {
      $('#log').remove();
      $('#list').append(create.form);
    });
  }

  function handleFilter() {
    $('#5').click(function () {
      filter = 4;
      render();
    });
    $('#4').click(function () {
      filter = 3;
      render();
    });
    $('#3').click(function () {
      filter = 2;
      render();
    });
    $('#2').click(function () {
      filter = 1;
      render();
    });
    $('#1').click(function () {
      filter = 0;
      render();
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
    //removeBookmark();
    handleFilter();
    //handleExpand();
    //handlePullFromForm();
    console.log('event listener live');
  };

  return {
    bindEventListener,
    render,
    deleteBookmark,

  };
})();
