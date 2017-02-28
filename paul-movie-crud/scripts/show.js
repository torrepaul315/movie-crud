
//so now we are getting the objec with the right data! just need to render it on the page! 
function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  var returner;

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
    })
    .catch((err) => {
      console.log(err)
    })


// return returner;
}

$(document).ready(function() {
    //  console.log('linked');

getUrlParameter('id');
// console.log(returner);
  // $.get('/movies')
  //  .then(renderMovies);
  //
  // var movieArray
});
