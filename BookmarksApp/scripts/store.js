'use strict';
/*global $*/

const store = (function () {
  let storedBookmarks = [];


  const addItem = function (item) {
    this.storedBookmarks.push(item);
  };


  // const createNewCondensed = function () {
  //   console.log('condensedStart');
  //   for (var i = 0; i < this.storedBookmarks.length; i++) {
  //     console.log('click');
  //     $('#sidebar').append(`
  //     <button id="condensed" class="w3-bar-item w3-button ">(${this.storedBookmarks[i].rating})${this.storedBookmarks[i].title}</button>
  //     `);
  //   }
  // };


  return {
    storedBookmarks,
    addItem,
    // createNewCondensed,


  };
})();