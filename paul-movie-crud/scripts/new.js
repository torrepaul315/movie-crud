/*
new.js is does not appear to be linked yet to new html

writing out steps/things to tackle
1- get js file properly linked to the corresponding html!

how does this file reach out to app.js?


*/
// const routes = require('./routes.js');


// $('new.html').on('load', ()=> {
//   console.log('working');
//   //need to reach out to app.js for router.get function!
//
//   // .then(renderMovies)
// })
var movieArray
function renderMovies(moviesData) {
  movieArray = moviesData.movies
  moviesData.movies.map(creatMovieList);
}

function createMovieList(movie) {
  var movieItem =


  $()
}


// $.get('https://galvanize-eats-api.herokuapp.com/menu').then(renderMenu));


/*? what the heck is going on here! not only does this fire off when the page loads, but then when i click on add movie, it refreshes the page too! wtf?!*/
$(document).ready(function() {
  alert('page has loaded');

});




var newMovie = {}

$('.add-movie').on('click', (e)=> {
  e.preventDefault();
  // alert('button works');
  newMovie.title = $('.movie-title').val()
  // console.log(title);
  newMovie.director = $('.director').val()
  // console.log(director);
  newMovie.year = $('.year').val()
  // console.log(year);
  newMovie.rating = $('.my-rating').val()
  // console.log(rating);
  newMovie.poster = $('.poster-url').val()
  // console.log(poster);
  console.log(newMovie);

  $.post('/movies', newMovie, function (response) {
    console.log(response)
  })

  


});
