
class Movie{

    constructor (title, releaseYear, nacionality, genre, actors, writer, director, language, plataforma, isMCU, mainCharacterName, producer, distributor, img){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = actors; 
        this.writer = writer;
        this.director = director;
        this.language = language;
        this.plataforma = plataforma;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.img = img;
    }

    printMovie(){
      const isMCU = this.isMCU ? "Si" : "No";
      return '<div class="col-md-6 targetMovie">' + '<div class="card mb-3" style="max-width: 750px;">' +
      '<div class="row g-0">' +
        '<div class="col-md-4">' +
          '<img src="' + this.img + '" class="img-fluid rounded-start" alt="...">' +
        '</div>' +
        '<div class="col-md-8">' +
          '<div class="card-body">' +
            '<h5 class="card-title">' + this.title + '</h5>' +
            '<p class="card-text">Año:' + this.releaseYear + '<br>Genero:' + this.genre + '<br>Nacionalidad:' + this.nacionality + '<br>Actores:' + this.actors +'<br>Director:' + this.director + '<br>Idioma:' + 
            this.language +'<br>Plataforma:' + this.plataforma + '<br>Es MCU:' + isMCU + '<br>Personaje Principal:' + this.mainCharacterName + '<br>Productor:' + this.producer + '<br>Distribuidor:' + this.distributor + '</p>' +
         '</div></div></div></div></div>';
    }
} 


const movieGuardianes = new Movie('Guardianes de la Galaxia', 2014, 'EUA', 'ciencia-ficcion', ['James Gunn', 'Chris Patt', 'Zoë Saldaña', 'Vin Diesel'], 'James Gunn', 'James Gunn', 'inglés', 'Disney+', true, 'Peter Quill', 'Marvel Studios','Walt Disney Studios Motion Pictures', 'img/guardianes.jpg');
const movieBarbie = new Movie('Barbie', 2023, 'EUA', 'comedia', ['Margot Robbie', 'Ryan Gosling', 'Will Ferret', 'Emma Mackey'], 'Greta Gerwig', 'Greta Gerwig', 'inglés', 'HBO', true, 'Barbie', 	'LuckyChap Entertainment','Warner Bros Pictures', 'img/BARBIEPOSTER_.webp');
const movieDondeCabenDos = new Movie('Donde caben dos', 2021, 'España', 'comedia', ['Anna Castillo', 'Carlos Cuevas', 'Verónica Echegui', 'Pilar Castro'], 'Paco Caballero', 'Paco Caballero', 'español', 'Netflix',false , 'Clara','Filmax & Netflix', 'Filmax', 'img/Donde_caben_dos.jpg');
const movieLosJuegos = new Movie('Los juegos del hambre', 2012, 'EUA', 'ciencia-ficcion', ['Jennifer Lawrence', 'Josh Hutcherson', 'Liam Hemsworth', 'Elisabeth Banks'], 'Billy Ray' , 'Gary Ross', 'inglés', 'HBO', false, 'Katniss Everdeen', 'Lionsgate', 'Lionsgate', 'img/juegos.jpg');

let movies = [movieGuardianes, movieBarbie, movieDondeCabenDos, movieLosJuegos];

$(document).ready(function(){
    printAllMovies();

    function printAllMovies() {
    let html = '';
        let index = 1;
        movies.forEach(function(movie){
          if (index %2!=0){
            html+= '<div class="row">' + movie.printMovie();
          }else{
            html += movie.printMovie() + '</div>';
          };
          index++;
          $("#section2Movies").html(html);
        });
    }

    $('#buttonForm').on("click", function(){
      const newMovie = new Movie($("#newTitle").val(), $("#newReleaseYear").val(), $("#newNacionality").val(), $("#newGenre").val(), [], $("#newWriter").val(), 
        $("#newDirector").val(), $("#newLanguage").val(), $("#newPlataform").val(), $("#newIsMCU").prop("checked") ? "Si" : "No", $("#newMainCharacter").val(), $("#newProducer").val(), 
        $("#newDistributor").val(), $("#newImg").val());
      movies.push(newMovie);
      printAllMovies();
    });
});


