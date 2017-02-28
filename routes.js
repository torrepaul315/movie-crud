//this page is where the individual js pages reach out to, to process a request involving the database

const express = require('express');
const router = express.Router();
const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async');
const db = low('db/movie-database.json', {
  storage: fileAsync
});

//route populate index on load
router.get('/movies', (req, res) => {
  const movieReviews = db.get('movies');
  console.log('it might be working!');
  res.send(movieReviews);
});
//route for show page that displays movie info

//also should switch to id instead of title
router.get('/movies/:id', (req, res) => {
  // const movieId = parseInt(req.params.id)
  // const movieFile = db.get('movies.movieId').find([movieId]);

  const singleMovie = db.get('movies').nth(+req.params.id);

  res.send(singleMovie);
});

//route that goes with the new page and adds content to the database
router.post('/movies', (req, res) => {
  db.get('movies')
  .push(req.body)
  .last()
  .assign({id: Date.now()})
  .write()
  .then( newMovie => {
    res.status(201).send(newMovie);
    })
  .catch(err => {
    console.log(err);
  })
})

//route to use with the edit page! starting with patch, but may want it to be a put.  We'll see!

//as per tom! switch to IDs instead of.title
router.put('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  db.get('movies')
    .find({'id':movieId})
    .assign(req.body)
    .write()
    .then(updatedMovie => {
      res.send(updatedMovie)
    })
    .catch(err => {
    console.log(err);
    })
});


//you don't need to as part of hw, but it might be good to have some sort of sucess message


// route for the delete button on the index page
router.delete('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  db.get('movies')
    .remove({'id':movieId})
    .write()
    .then(deletedMovie => {
      res.status(204).send();
    })
    .catch(err => {
    console.log(err);
    })
})









module.exports = router;
