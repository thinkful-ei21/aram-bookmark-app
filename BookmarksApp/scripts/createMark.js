'use strict';
/*global $*/

const create = (function () {
  const form =
    `
           <form id="log">
                        <fieldset>
                        <legend>New Bookmark</legend>
                        URL:
                        <br>
                        <input id="url" type="text" name="url">
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

                        <input id="submit" type="submit" value="Submit">
                        </fieldset>
                    </form>



      `;




  //   $('#add').click(function () {
  //     $('#log').remove();

  //     $('#list').append(form);
  //   });

  return {
    form,

  };
})();