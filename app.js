console.log("Let's get this party started!");
const sampleUrl = 'http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

async function getGiphy() {
  let response = await axios.get(sampleUrl);
  console.log("raw giphy API response:", response);
  let giphyUrl = response.data.data[0].images.original.url;
  console.log("extracted URL:", giphyUrl);
  console.log("going to create this:", `<img src='${giphyUrl}'>`);
  $(".giphy-container").append(
    $(`<img src='${giphyUrl}'>`)
    )
}

function listenForClick(evt) {
  evt.preventDefault();
  getGiphy();
}

$("button").on("click", listenForClick);