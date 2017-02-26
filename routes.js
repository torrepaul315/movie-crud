const express = require('express');
const router = express.Router();
const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async');
const db = low('db/movie-database.json', {
  storage: fileAsync
});


router.get('/movies', (req, res) => {
  const movieReviews = db.get('movies');
  console.log('it might be working!');
  res.send(movieReviews);
});





module.exports = router;
