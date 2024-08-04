class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  
  let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log(casinoRoyale);
  
 
  let movies = [
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
    new Movie("Finding Nemo", "Pixar", "PG"),
    new Movie("The Dark Knight", "Warner Bros", "PG-13"),
    new Movie("Toy Story", "Pixar", "PG"),
  ];
  
  
  let pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  