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
                        <input type="text" name="url">
                        <br> Description:
                        <br>
                        <input type="text" name="description">
                        <br>


                        <input type="radio" name="rating" value="5" checked> 5
                        <br>
                        <input type="radio" name="rating" value="4"> 4
                        <br>
                        <input type="radio" name="rating" value="3"> 3
                        <br>
                        <input type="radio" name="rating" value="2"> 2
                        <br>
                        <input type="radio" name="rating" value="1"> 1
                        <br>

                        <input type="submit" value="Submit">
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