'use strict';
/* global $ */

const api = (function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ara/bookmarks';

  const getItems = function (callback) {

    $.getJSON(BASE_URL, callback);
  };

  const createItem = function (title, url, description, rating, callback) {
    let newItem = JSON.stringify({
      id: 0,
      title: title,
      url: url,
      desc: description,
      rating: rating,
    });

    $.ajax({
      url: BASE_URL,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,

    });
  };



  return {
    getItems: getItems,
    createItem: createItem,
  };

}());



