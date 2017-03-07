
//once you get a successful response from a delete request, the list of movies shown on the index page should get re-run to reflect the now shorter list - so either re-write a populate function, or summon the function that added the content in the first place!

//this function listens for the page load to make a request for the movie information
$(document).ready(function() {
  // alert('page has loaded');
  $.get('/movies')
   .then(renderMovies);

  var movieArray

  //this function breaks down the movie object into an array and then fires up the list building function
  function renderMovies(moviesData) {
//as per jeff, add the index with the for each, so that each href in the generated list is unique! that way it loads the page with the additional info
    // console.log(moviesData);
    moviesData.forEach(function(film, i){
      // console.log(film.title);
      // console.log('function works');
       var movieItem = `<tr class="movie-item" id=${film.id}>
       <td class='movie-show'><a href="./show.html?id=${i}">${film.title}</a></td>
       <td>${film.director}</td>
       <td>${film.year}</td>
       <td>${film.rating}</td>
       <td><button type="button" class="btn btn-primary delete ${film.title}">Delete Movie</button></td>
       <td><a type="button" class="btn btn-primary edit ${film.title}" href="./edit.html?id=${i}">Edit</a></td></tr>`;

    // or refactor this with query formatting! the rj way build a contructor for each element, then use 2 appends- append all the td elements to the tr your'e building, and then append the appended tr to the actual table!



      $('.table').append($(movieItem));

    });

  }
  var $currentMovie
    // EditMovie();
                /*Q for later- these on clicks work, but not '.delete' on click...why not?/what am I missing about this?*/
  // this is where you will put your delete route!
  // $(document).on('click',         '.movie-show', function (e) {
  //   console.log('click works');
  //   e.preventDefault();
  //   var movie = $(this).closest(".movie-item");
  //   console.log(movie);
  //   var id = movie.attr('id');
  //   console.log(id);
  //   $.ajax({
  //     method: 'GET',
  //     url: '/movies/' + id
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     location.replace('./show.html');
  //     //now, to
  //   })
  //   .catch((err) => {
  //   console.log(err)
  //   })
  // })



  $(document).on('click' , '.delete', function (e) {
    // console.log('button works 2');
    e.preventDefault();

    var movie = $(this).closest(".movie-item");
    console.log(movie);
    var id = movie.attr('id');
    console.log(id);
    $.ajax({
      method: 'DELETE',
      url: '/movies/' + id
    })
      .then((data) => {
        console.log(data);
          movie.remove()
      })
      .catch((err) => {
      console.log(err)
      })




  });

  $(document).on('click', '.edit', function (e) {
    e.preventDefault();
    // console.log('edit button works');
    var movie = $(this).closest(".movie-item");
    console.log(movie);
    var id = movie.attr('id');
    console.log(id);
    $.ajax({
      method: 'GET',
      url: '/movies/' + id
    })
    .then((response) => {
      console.log(response);
      //need to move to the edit page
      location.replace('./edit.html')
      //need to move to




    })
    .catch((err) => {
      ALERT(err);
    })
  })

});



//this creates each movie table line and pushes it onto the page
//  {
//   var movieItem = '<tr class="movie-item"><td>${movie.title}</td><td>${movie.director}</td><td>${movie.year}</td><td>${movie.rating}</td><td><button type="button" class="btn btn-primary delete ${movie.title}">Delete Movie</button></td><td><button type="button" class="btn btn-primary ${movie.title}">Edit</button></td>';

// or refactor this with query formatting! the rj way build a contructor for each element, then use 2 appends- append all the td elements to the tr your'e building, and then append the appended tr to the actual table!
