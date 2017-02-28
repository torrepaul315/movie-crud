var returner
var movieObject

$(document).ready(function() {
  console.log("hello");
  // alert('page has loaded');

getUrlParameter('id');




  var editMovie = {};

  $('.edit-movie').on('click', (e)=> {
    e.preventDefault();
    // console.log('hello world');
    editMovie.title = $('.movie-title-edit').val()
    // console.log(editMovie.title);
    editMovie.director = $('.director-edit').val()
    // console.log(director);
    editMovie.year = $('.year-edit').val()
    // console.log(year);
    editMovie.rating = $('.my-rating-edit').val()
    // console.log(Erating);
    editMovie.poster = $('.poster-url-edit').val()
    // console.log(poster);

    console.log(returner);
    console.log(editMovie);

    var route = '/movies/' + movieObject.id + ''
    console.log(route);



////pretty shure this should be a put request?
    // $.put('/movies/' + movieObject.id + '', editMovie, (response) => {
    //   console.log(response)
    $.ajax({
      url: '/movies/' + movieObject.id,
      type: 'PUT',
      data: editMovie
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
    console.log(err)
    })


  });
});


//all code mostly from Jeff below!


function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  // var returner;

  sURLVariables.forEach((paraName) => {
    const sParameterName = paraName.split('=');
    if (sParameterName[0] === sParam) {
      returner = sParameterName[1] === undefined ? false : sParameterName[1];
    }
  });
  console.log('id:', returner);


  $.ajax({
      method: 'GET',
      url: '/movies/' + returner,
    })
    .then((data) => {
      console.log(data)
      renderData(data);
    })
    .catch((err) => {
      console.log(err)
    })


// return returner;
}


function renderData(info) {
  movieObject = info;
  console.log(info);
  console.log(info.poster);
  $('.movie-title-edit').val(info.title);
  $('.director-edit').val(info.director);
  $('.year-edit').val(info.year);
  $('.my-rating-edit').val(info.rating);
  $('.poster-url-edit').val(info.poster);
  $('.poster-url-render').attr("src",info.poster);

  // editMovie.title = $('.movie-title-edit').
  // console.log(editMovie.title);
  // editMovie.director = $('.director-edit').val()
  // // console.log(director);
  // editMovie.year = $('.year-edit').val()
  // // console.log(year);
  // editMovie.rating = $('.my-rating-edit').val()
  // // console.log(Erating);
  // editMovie.poster = $('.poster-url-edit').val()




}

// $(document).ready(function() {
//     //  console.log('linked');
//
// getUrlParameter('id');
// // console.log(returner);
//   // $.get('/movies')
//   //  .then(renderMovies);
//   //
//   // var movieArray
// });
