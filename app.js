"use strict";

const API_URL = 'http://api.giphy.com/v1/gifs/search';
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

/** gets a giphy image matching the search string */
async function getGiphy(searchString) {
  const response = await axios.get(
    API_URL,
    {
      params: {
        q: searchString,
        api_key: API_KEY
      }
    }
  );
  const randomPicNumber = Math.floor(Math.random() * (response.data.data.length - 1));
  const giphyUrl = response.data.data[randomPicNumber].images.original.url;
  addImage(giphyUrl);
}

/** handle search clicks and calls the getGiphy function */
async function searchGiphy(evt) {
  evt.preventDefault();
  const imageUrl = await getGiphy($("input").val());
}

/** adds image to our giphy-container */
function addImage(url) {
  $(".giphy-container").append(
    $(`<img src='${url}'>`)
  );
}

/** handles remove image clicks and empties the image container */
function clearImages(evt) {
  evt.preventDefault();
  $(".giphy-container").empty();
}

$(".search-button").on("click", searchGiphy);
$(".remove-button").on("click", clearImages);