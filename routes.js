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
router.get('/movies/:title', (req, res) => {
  const movieName = req.params.title
  const movieFile = db.get('movies').find({title:movieName});
  res.send(movieFile);
});

//route that goes with the new page and adds content to the database
router.post('/movies', (req, res) => {
  db.get('movies')
  .push(req.body)
  .write()
  .then( newMovie => {
    res.status(201).send(newMovie);
    })
  .catch(err => {
    console.log(err);
  })
})

//route to use with the edit page! starting with patch, but may want it to be a put.  We'll see!
router.patch('movies/:title', (req, res) => {
  const movieName = req.params.title;
  db.get('movies')
    .find({title:movieName})
    .assign(req.body)
    .write()
    .then(updatedMovie => {
      res.send(updatedDog)
    })
    .catch(err => {
    console.log(err);
    })
});


//you don't need to as part of hw, but it might be good to have some sort of sucess message


// route for the delete button on the index page
router.delete('/movies/', (req, res) => {
  const movieName = req.params.title
  db.get('movies')
    .remove({title:movieName})
    .write()
    .then(deletedMovie => {
      res.status(204).send();
    })
})









module.exports = router;
