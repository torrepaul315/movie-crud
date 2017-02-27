$(document).ready(function() {
  console.log("hello");
  // alert('page has loaded');

  var editMovie = {};

  $('.edit-movie').on('click', (e)=> {
    e.preventDefault();
    // console.log('hello world');
    editMovie.title = $('.movie-title-edit').val()
    console.log(editMovie.title);
    editMovie.director = $('.director-edit').val()
    // console.log(director);
    editMovie.year = $('.year-edit').val()
    // console.log(year);
    editMovie.rating = $('.my-rating-edit').val()
    // console.log(Erating);
    editMovie.poster = $('.poster-url-edit').val()
    // console.log(poster);
    console.log(editMovie);

    var route = '/movies/:' + editMovie.title + ''
console.log(route);

    $.post(route, editMovie, (response) => {
      console.log(response)
    })
  });
});
