
// Small exercise to see how I can access information within an object
// I made an object with an array inside
// the instructor made an array with objects inside 

var movies = {
    movie: [
        {
            name: "Treasure Planet",
            rating: 4.5,
            hasWatched: "have watched"
        },
        {
            name: "Train to Busan",
            rating: 4.0,
            hasWatched: "have watched"
        },
        {
            name: "Steins Gate",
            rating: 5.0,
            hasWatched: "have watched"
        },
        {
            name: "Private Ryan",
            rating: 4.0,
            hasWatched: "have not seen"
        }

    ]
};


for(i = 0; i< movies.movie.length; i++){
    console.log("You " + movies.movie[i].hasWatched + " " + 
        movies.movie[i].name + " - " + movies.movie[i].rating + " stars");
}