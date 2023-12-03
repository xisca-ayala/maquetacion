class Professionals{

    constructor( name, age, weight, height, isRetired, nationality, oscarNumber, profession, img ){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
        this.img =img;
    }
    
}


const JenniferLawrence = new Professionals ('Jennifer Lawrence', 33, 62, 165, false, 'estadounidense', 1 , 'actriz & productora', 'img/JenniferLaw.jpg');
const ZoeSaldana = new Professionals ('Zoë Saldaña', 45, 65, 172, false, 'estadounidense', 0, 'actriz', 'img/009-zoe-saldana.webp');
const AnnaCastillo = new Professionals ('Anna Castillo', 30, 56, 162, false, 'española', 0 , 'actriz', 'img/AnnaCastillo.webp');
const BradleyCooper = new Professionals ('Bradley Cooper', 48, 82, 190, false, 'estadounidense', 9 , 'actor', 'img/Bradley-Cooper.webp');


$(document).ready(function(){
    $('#targetZoe').html('<div class="card mb-3" style="max-width: 540px;">' +
   '<div class="row g-0">'+
      '<div class="col-md-4">' +
      '<img src="'+ ZoeSaldana.img +'"class="img-fluid rounded-start" alt="...">' +
      '</div>' +
     ' <div class="col-md-8">' + 
        '<div class="card-body">' +
          '<h5 class="card-title">' + ZoeSaldana.name + '</h5>' +
          '<p class="card-text">'+ 'Edad:' + ZoeSaldana.age + '<br>' + 'Peso:' + ZoeSaldana.weight + '<br>' + 'Altura:' + 
          ZoeSaldana.height + '<br>' + '¿Está retirada?:' + ZoeSaldana.isRetired + '<br>' + 'Nacionalidad:' + 
          ZoeSaldana.nationality + '<br>' + 'Número de Oscars:' + ZoeSaldana.oscarNumber + '<br>' + 'Profesion:' + ZoeSaldana.profession + '<br>' + '</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '</div>')
});

$(document).ready(function(){
    $('#targetJenniferLawrence').html('<div class="card mb-3" style="max-width: 540px;">' +
   '<div class="row g-0">'+
      '<div class="col-md-4">' +
        '<img src="'+ JenniferLawrence.img +'"class="img-fluid rounded-start" alt="...">' +
      '</div>' +
     ' <div class="col-md-8">' + 
        '<div class="card-body">' +
          '<h5 class="card-title">' + JenniferLawrence.name + '</h5>' +
          '<p class="card-text">'+ 'Edad:' + JenniferLawrence.age + '<br>' + 'Peso:' + JenniferLawrence.weight + '<br>' + 'Altura:' + 
          JenniferLawrence.height + '<br>' + '¿Está retirada?:' + JenniferLawrence.isRetired + '<br>' + 'Nacionalidad:' + 
          JenniferLawrence.nationality + '<br>' + 'Número de Oscars:' + JenniferLawrence.oscarNumber + '<br>' + 'Profesion:' +JenniferLawrence.profession + '<br>' + '</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '</div>')
});

$(document).ready(function(){
    $('#targetAnnaCastillo').html('<div class="card mb-3" style="max-width: 540px;">' +
   '<div class="row g-0">'+
      '<div class="col-md-4">' +
        '<img src="'+ AnnaCastillo.img +'"class="img-fluid rounded-start" alt="...">' +
      '</div>' +
     ' <div class="col-md-8">' + 
        '<div class="card-body">' +
          '<h5 class="card-title">' + AnnaCastillo.name + '</h5>' +
          '<p class="card-text">'+ 'Edad:' + AnnaCastillo.age + '<br>' + 'Peso:' + AnnaCastillo.weight + '<br>' + 'Altura:' + 
          AnnaCastillo.height + '<br>' + '¿Está retirada?:' + AnnaCastillo.isRetired + '<br>' + 'Nacionalidad:' + 
          AnnaCastillo.nationality + '<br>' + 'Número de Oscars:' + AnnaCastillo.oscarNumber + '<br>' + 'Profesion:' + AnnaCastillo.profession + '<br>' + '</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '</div>')
});

$(document).ready(function(){
    $('#targetBradleyCooper').html('<div class="card mb-3" style="max-width: 540px;">' +
   '<div class="row g-0">'+
      '<div class="col-md-4">' +
        '<img src="'+ BradleyCooper.img +'"class="img-fluid rounded-start" alt="...">' +
      '</div>' +
     ' <div class="col-md-8">' + 
        '<div class="card-body">' +
          '<h5 class="card-title">' + BradleyCooper.name + '</h5>' +
          '<p class="card-text">'+ 'Edad:' + BradleyCooper.age + '<br>' + 'Peso:' + BradleyCooper.weight + '<br>' + 'Altura:' + 
          BradleyCooper.height + '<br>' + '¿Está retirada?:' + BradleyCooper.isRetired + '<br>' + 'Nacionalidad:' + 
          BradleyCooper.nationality + '<br>' + 'Número de Oscars:' + BradleyCooper.oscarNumber + '<br>' + 'Profesion:' + BradleyCooper.profession + '<br>' + '</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '</div>')
});
