









//once you get a successful response from a delete request, the list of movies shown on the index page should get re-run to reflect the now shorter list - so either re-write a populate function, or summon the function that added the content in the first place!

//this function listens for the page load to make a request for the movie information
$(document).ready(function() {
  // alert('page has loaded');
  $.get('/movies')
   .then(renderMovies);


});
  //need to reach out to app.js for router.get function!

  // .then(renderMovies)
var movieArray

//this function breaks down the movie object into an array and then fires up the list building function
function renderMovies(moviesData) {

  console.log(moviesData);
  moviesData.forEach(function(film){
    console.log(film.title);
    console.log('function works');
     var movieItem = `<tr class="movie-item">
     <td>${film.title}</td>
     <td>${film.director}</td>
     <td>${film.year}</td>
     <td>${film.rating}</td>
     <td><button type="button" class="btn btn-primary delete ${film.title}">Delete Movie</button></td>
     <td><button type="button" class="btn btn-primary ${film.title}">Edit</button></td>`;

  // or refactor this with query formatting! the rj way build a contructor for each element, then use 2 appends- append all the td elements to the tr your'e building, and then append the appended tr to the actual table!
// '<tr><td>holler!</td></tr>'
  // var $currentMove

    $('.table').append($(movieItem));

  });
    deleteMovie();
}
//this creates each movie table line and pushes it onto the page
 {
  var movieItem = '<tr class="movie-item"><td>${movie.title}</td><td>${movie.director}</td><td>${movie.year}</td><td>${movie.rating}</td><td><button type="button" class="btn btn-primary delete ${movie.title}">Delete Movie</button></td><td><button type="button" class="btn btn-primary ${movie.title}">Edit</button></td>';

// or refactor this with query formatting! the rj way build a contructor for each element, then use 2 appends- append all the td elements to the tr your'e building, and then append the appended tr to the actual table!

var $currentMove

  $('.table table-hover').append(movieItem);


  // EditMovie();
}

function deleteMovie() {
  console.log('here')
  $('.delete').on('click', (e)=> {
    e.preventDefault();
    alert('button works');
  });

}
