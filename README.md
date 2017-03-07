# MOVIE CRUD

### Make your own movie rating site.

1. Fork and Clone this repository
1. Create CRUD Routes.
1. Style your site. However, CRUD is the priority.
1. Deploy your site

## HOME PAGE
done
- Your homepage can be whatever you want.  Make sure it has a link to your index page.

![Home](/mockups/home.png)

## INDEX PAGE

- Your index page should list all your movies.  The titles of the movies should link to that movies show page. There should be a button that links to each movie's edit page and a button to delete each movie.
as of monday morning - files show up
delete- need to do! two major steps that I can see
1- make delete button actually work! on.click works, but on all elements not the one selected, had difficulties integrating this into making the button work

*several people mentioned ajax for the delete request as opposed to jquery? n/s why
2- need to fire up the delete crud call....this could be done by referencing the movie name referenced in the edit and delete class names?
3- upon a successful response,



-needs to
1- js file- on load with an on doc ready qjuery function, this function needs to talk to app.js which will make a get request to the movie-database
then, once the request comes back successful, and the info passed back to index.js, there will need to be an append to the table element inserting the info of the data pull(might also need to wipe the table each time? check on that)
![Index](/mockups/index.png)

## NEW PAGE
your new page is done!
- Your new page should have form fields for "title", "director", "year", "your rating", and "poster url".

![Index](/mockups/new.png)

## EDIT PAGE
started working on
- Your edit page should display the poster have form fields for "title", "director", "year", "your rating", and "poster url".

![Index](/mockups/edit.png)

## SHOW PAGE

- Your show page should display the poster and info for "title", "director", "year", and "your rating".

![Index](/mockups/show.png)


## ROUTES

Use the RESTful routes for each of your routes.

- GET /movies   _lists all movies_
- POST /movies  _creates a new movie_
- GET /movies/:id  _show one movie_
- GET /movies/:id/edit _form to edit a movie_
- ... etc

***********************************************
new.js is does not appear to be linked yet to new html

writing out steps/things to tackle
1- get js file properly linked to the corresponding html!

{
  "movies": [
    {
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "year": "2014",
      "rating": "9",
      "poster": "https://alternativemovieposters.com/wp-content/uploads/2015/12/edgar_interstellar.jpg",
      "id": 1488234530767
    },
    {
      "title": "Dune",
      "director": "David Lynch",
      "year": "1985",
      "rating": "6",
      "poster": "http://t0.gstatic.com/images?q=tbn:ANd9GcQwwPKgIxuvos4p0NuR8SEeaCou_hETH-q4KdRmsrxMaAPlhI6I",
      "id": 1488240908531
    },
    {
      "title": "Wu: the Story of the Wutang Clan",
      "director": "Gerald Barclay ",
      "year": "2007",
      "rating": "11",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzJlYzkwYTEtNWYyYi00N2EzLWFhMTAtNmEyY2MwZGE3MTk4XkEyXkFqcGdeQXVyMTM4NzA3NQ@@._V1_.jpg",
      "id": 1488241284924
    }
  ]
}
