'use strict';
/*global $*/

const create = (function () {


  const form =
    `
    <script>
    function handlePullFromForm() {
    console.log('Can pull');
    $('.submit').click(function (event) {
      event.preventDefault();
      let newRating = $("#radio:checked").val();
      let newUrl = $(".url").val();
      let newTitle = create.extractHostName($(".url").val())
      let newDescription = $("#description").val()

      api.createItem(newTitle, newUrl, newDescription, newRating, (newItem) => {
  
        events.render()
      });
      $('#log').remove();
    });

  }
  
  handlePullFromForm();
    </script>

           <form id="log">
                
                        <legend>New Bookmark</legend>
                        URL:
                        <br>
                        <input class="url" type="text" name="url">
                        <br> Description:
                        <br>
                        <input id="description" type="text" name="description">
                        <br>


                        <input id="radio" type="radio" name="rating" value="5"> 5
                        <br>
                        <input id="radio" type="radio" name="rating" value="4"> 4
                        <br>
                        <input id="radio" type="radio" name="rating" value="3"> 3
                        <br>
                        <input id="radio" type="radio" name="rating" value="2"> 2
                        <br>
                        <input id="radio" type="radio" name="rating" value="1"> 1
                        <br>

                        <button class="submit" type="button">Add</button>
                  
                    </form>



      `;




  //   $('#add').click(function () {
  //     $('#log').remove();

  //     $('#list').append(form);
  //   });
  const extractHostName = function (url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf('://') > -1) {
      hostname = url.split('/')[2];
    }
    else {
      hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
  };



  return {
    form,
    extractHostName,

  };
})();

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


