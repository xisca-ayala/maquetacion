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

  printProfessional() {
    return '<div class="col-md-6 targetMovie"><div class="card mb-3" style="max-width: 540px;">' +
    '<div class="row g-0">'+
       '<div class="col-md-4">' +
       '<img src="'+ this.img +'"class="img-fluid rounded-start" alt="...">' +
       '</div>' +
      ' <div class="col-md-8">' + 
         '<div class="card-body">' +
           '<h5 class="card-title">' + this.name + '</h5>' +
           '<p class="card-text">'+ 'Edad:' + this.age + '<br>' + 'Peso:' + this.weight + '<br>' + 'Altura:' + 
           this.height + '<br>' + '¿Está retirado/a?:' + this.isRetired + '<br>' + 'Nacionalidad:' + 
           this.nationality + '<br>' + 'Número de Oscars:' + this.oscarNumber + '<br>' + 'Profesion:' + this.profession + '<br>' + '</p>' +
    '</div></div></div></div></div>';
  }
    
}


const JenniferLawrence = new Professionals ('Jennifer Lawrence', 33, 62, 165, false, 'estadounidense', 1 , 'actriz & productora', 'img/JenniferLaw.jpg');
const ZoeSaldana = new Professionals ('Zoë Saldaña', 45, 65, 172, false, 'estadounidense', 0, 'actriz', 'img/009-zoe-saldana.webp');
const AnnaCastillo = new Professionals ('Anna Castillo', 30, 56, 162, false, 'española', 0 , 'actriz', 'img/AnnaCastillo.webp');
const BradleyCooper = new Professionals ('Bradley Cooper', 48, 82, 190, false, 'estadounidense', 9 , 'actor', 'img/Bradley-Cooper.webp');

let professionals = [JenniferLawrence, ZoeSaldana, AnnaCastillo, BradleyCooper]; 

$(document).ready(function(){
  let html = '';
  let index = 1;
  professionals.forEach(function(profesional) {
    if(index%2!=0){
      html += '<div class="row">' + profesional.printProfessional();
    } else {
      html += profesional.printProfessional() + '</div>';
    }
    index++;
  });
  if(index%2==0){
    html += '</div>';
  }
  $('#section2Movies').html(html);
});