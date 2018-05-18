'use strict';
/*global $*/

const expand = (function () {

  //Push to the DOM when the user expands for a more detailed view
  const displayOnExpand = function (title, url, description, rating) {
    console.log('start');
    $('#log').remove();
    const details = `
    <div id="log">
    <p>${title}</p>
    <p>Rating: ${rating}</p>
    <p>${description}</p>
    <a href="${url}" class="w3-button w3-circle w3-black">Visit</a>
    </div>
  `;


    $('#list').append(details);
    console.log('stop');
  };

  return {
    displayOnExpand,

  };
})();


