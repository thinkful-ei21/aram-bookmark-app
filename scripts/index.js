'use strict';
/*global store events $ */

$(document).ready(function () {
  events.render();
  events.bindEventListener();
  // store.createNewCondensed();

});


function removeBookmark(id) {
  let targetId = id;
  $.ajax({
    url: 'https://thinkful-list-api.herokuapp.com/luke/bookmarks/' + targetId,
    type: 'DELETE',
    success: function (result) {

      console.log(result);
      events.render();
      // Do something with the result
    }
  });

}

// displayOnExpand('title', 'facebook.com', 'This is a description of the title', '4');

