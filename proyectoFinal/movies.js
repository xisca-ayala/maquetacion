
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

  
} 


const movieGuardianes = new Movie('Guardianes de la Galaxia', 2014, 'EUA', 'ciencia-ficcion', ['James Gunn', 'Chris Patt', 'Zoë Saldaña', 'Vin Diesel'], 'James Gunn', 'James Gunn', 'inglés', 'Disney+', true, 'Peter Quill', 'Marvel Studios','Walt Disney Studios Motion Pictures', 'img/guardianes.jpg');
const movieBarbie = new Movie('Barbie', 2023, 'EUA', 'comedia', ['Margot Robbie', 'Ryan Gosling', 'Will Ferret', 'Emma Mackey'], 'Greta Gerwig', 'Greta Gerwig', 'inglés', 'HBO', true, 'Barbie', 	'LuckyChap Entertainment','Warner Bros Pictures', 'img/BARBIEPOSTER_.webp');
const movieDondeCabenDos = new Movie('Donde caben dos', 2021, 'España', 'comedia', ['Anna Castillo', 'Carlos Cuevas', 'Verónica Echegui', 'Pilar Castro'], 'Paco Caballero', 'Paco Caballero', 'español', 'Netflix',false , 'Clara','Filmax & Netflix', 'Filmax', 'img/Donde_caben_dos.jpg');
const movieLosJuegos = new Movie('Los juegos del hambre', 2012, 'EUA', 'ciencia-ficcion', ['Jennifer Lawrence', 'Josh Hutcherson', 'Liam Hemsworth', 'Elisabeth Banks'], 'Billy Ray' , 'Gary Ross', 'inglés', 'HBO', false, 'Katniss Everdeen', 'Lionsgate', 'Lionsgate', 'img/juegos.jpg');


$(document).ready(function(){
    $("#targetGuardianes").html('<div class="card mb-3" style="max-width: 750px;">' +
    '<div class="row g-0">' +
      '<div class="col-md-4">' +
        '<img src="' + movieGuardianes.img + '" class="img-fluid rounded-start" alt="...">' +
      '</div>' +
      '<div class="col-md-8">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + movieGuardianes.title + '</h5>' +
          '<p class="card-text">' + 'Año:' + movieGuardianes.releaseYear + '<br>' + 'Genero:' + movieGuardianes.genre + '<br>' + 'Nacionalidad:' + movieGuardianes.nacionality + '<br>' + 'Actores:' + movieGuardianes.actors +'<br>' + 'Director:' + movieGuardianes.director + '<br>' + 'Idioma:' + 
          movieGuardianes.language +'<br>' + 'Plataforma:' + movieGuardianes.plataforma +'<br>' + 'Es MCU:' + movieGuardianes.isMCU + '<br>' + 'Personaje Principal:' + movieGuardianes.mainCharacterName + '<br>' + 'Productor:' + movieGuardianes.producer + '<br>' + 'Distribuidor:' + movieGuardianes.distributor +'</p>' +
       '</div>' +
      '</div>' +
    '</div>' +
  '</div>');
});


$(document).ready(function(){
    $("#targetBarbie").html('<div class="card mb-3" style="max-width: 750px;">' +
    '<div class="row g-0">' +
      '<div class="col-md-4">' +
        '<img src="' + movieBarbie.img + '" class="img-fluid rounded-start" alt="...">' +
      '</div>' +
      '<div class="col-md-8">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + movieBarbie.title + '</h5>' +
          '<p class="card-text">' + 'Año:' + movieBarbie.releaseYear + '<br>' + 'Genero:' + movieBarbie.genre + '<br>' + 'Nacionalidad:' + movieBarbie.nacionality + '<br>' + 'Actores:' + movieBarbie.actors +'<br>' + 'Director:' + movieBarbie.director + '<br>' + 'Idioma:' + 
          movieBarbie.language +'<br>' + 'Plataforma:' + movieBarbie.plataforma +'<br>' + 'Es MCU:' + movieBarbie.isMCU + '<br>' + 'Personaje Principal:' + movieBarbie.mainCharacterName + '<br>' + 'Productor:' + movieBarbie.producer + '<br>' + 'Distribuidor:' + movieBarbie.distributor +'</p>' +
       '</div>' +
      '</div>' +
    '</div>' +
  '</div>');
});


$(document).ready(function(){
    $("#targetDondeCaben").html('<div class="card mb-3" style="max-width: 750px;">' +
    '<div class="row g-0">' +
      '<div class="col-md-4">' +
        '<img src="' + movieDondeCabenDos.img + '" class="img-fluid rounded-start" alt="...">' +
      '</div>' +
      '<div class="col-md-8">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + movieDondeCabenDos.title + '</h5>' +
          '<p class="card-text">' + 'Año:' + movieDondeCabenDos.releaseYear + '<br>' + 'Genero:' + movieDondeCabenDos.genre + '<br>' + 'Nacionalidad:' + movieDondeCabenDos.nacionality + '<br>' + 'Actores:' + movieDondeCabenDos.actors +'<br>' + 'Director:' + movieDondeCabenDos.director + '<br>' + 'Idioma:' + 
          movieDondeCabenDos.language +'<br>' + 'Plataforma:' + movieDondeCabenDos.plataforma +'<br>' + 'Es MCU:' + movieDondeCabenDos.isMCU + '<br>' + 'Personaje Principal:' + movieDondeCabenDos.mainCharacterName + '<br>' + 'Productor:' + movieDondeCabenDos.producer + '<br>' + 'Distribuidor:' + movieDondeCabenDos.distributor +'</p>' +
       '</div>' +
      '</div>' +
    '</div>' +
  '</div>');
});


$(document).ready(function(){
    $("#targetJuegos").html('<div class="card mb-3" style="max-width: 750px;">' +
    '<div class="row g-0">' +
      '<div class="col-md-4">' +
        '<img src="' + movieLosJuegos.img +'" class="img-fluid rounded-start" alt="...">' +
      '</div>' +
      '<div class="col-md-8">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + movieLosJuegos.title + '</h5>' +
          '<p class="card-text">' + 'Año:' + movieLosJuegos.releaseYear + '<br>' + 'Genero:' + movieLosJuegos.genre + '<br>' + 'Nacionalidad:' + movieLosJuegos.nacionality + '<br>' + 'Actores:' + movieLosJuegos.actors +'<br>' + 'Director:' + movieLosJuegos.director + '<br>' + 'Idioma:' + 
          movieLosJuegos.language +'<br>' + 'Plataforma:' + movieLosJuegos.plataforma +'<br>' + 'Es MCU:' + movieLosJuegos.isMCU + '<br>' + 'Personaje Principal:' + movieLosJuegos.mainCharacterName + '<br>' + 'Productor:' + movieLosJuegos.producer + '<br>' + 'Distribuidor:' + movieLosJuegos.distributor +'</p>' +
       '</div>' +
      '</div>' +
    '</div>' +
  '</div>');
});

$(document).ready(function(){
    $("#buttonForm").on("click", function(){
      let newTitle = $("#newTitle").val();
      let newReleaseYear = $("#newReleaseYear").val();
      let newNacionality = $("#newNacionality").val();
      let newGenre = $("#newGenre").val();
      let newWriter = $("#newWriter").val();
      let newDirector = $("#newDirector").val();
      let newLanguage = $("#newLanguage").val();
      let newPlataform = $("#newPlataform").val();
      let newProducer = $("#newProducer").val();
      let newDistributor = $("#newDistributor").val();
      let newIsMCU = "";
      if ($("#newIsMCU").prop("checked")){
        newIsMCU = "Si"
      }else{
        newIsMCU = "No"
      }
      const newImg = $("#newImg").val();


       $("#newTargetsMovies").html('<div class="card mb-3" style="max-width: 750px;">' +
       '<div class="row g-0">' +
         '<div class="col-md-4">' +
           '<img src="' + newImg + '" class="img-fluid rounded-start" alt="...">' +
         '</div>' +
         '<div class="col-md-8">' +
           '<div class="card-body">' +
             '<h5 class="card-title">' + newTitle + '</h5>' +
             '<p class="card-text">' + 'Año:' + newReleaseYear + '<br>' + 'Genero:' + newGenre + '<br>' + 'Nacionalidad:' +newNacionality+ '<br>' + 'Director:' + newDirector + '<br>' + 'Idioma:' + 
             newLanguage +'<br>' + 'Plataforma:' + newPlataform +'<br>' + 'Es MCU:' + newIsMCU + '<br>' + '<br>' + 'Productor:' + newProducer + '<br>' + 'Distribuidor:' + newDistributor +'</p>' +
          '</div>' +
         '</div>' +
       '</div>' +
     '</div>');
    })
});

