
$(document).ready(function(){
    $("#showModal").on("click", function(){
        $("#modal").modal("show");
    });
});

$(document).ready(function(){
    $("#showModal").on("click", function(){
        $("#modal").modal("show");
    });
});


 $(function(){
    $("#clothes1").on("click", function(){
        $("#modalBody").prepend('<p id="clothesData1" class="modal-text"><span id="clothesModal1" class="modal-text"> Pantalon suelto - </span><span id="price1">20</span></p>');
    });
    $("#clothes2").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal2" class="modal-text"> Vestido Tunico - </span><span id="price1">18</span>');
    });
    $("#clothes3").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal3" class="modal-text"> Falda Mid - </span><span id="price1">18</span>');
    });
    $("#clothes4").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal4" class="modal-text"> Cardigan Largo - </span><span id="price1">18</span>');
    });
    $("#clothes5").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal5" class="modal-text"> Falda Animal - </span><span id="price1">18</span>');
    });
    $("#clothes6").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal6" class="modal-text"> Mono Beig - </span><span id="price1">18</span>');
    });
    $("#clothes7").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal7" class="modal-text"> Vestido gris - </span><span id="price1">18</span>');
    });
    $("#clothes8").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal8" class="modal-text"> Pantalón ancho - </span><span id="price1">18</span>');
    });
    
});

{/* <h3 id="clothes1" class="mt-2"></h3>
<h3 id="clothes1" class="mt-2"></h3>
<h3 id="clothes1" class="mt-2"></h3>
<h3 id="clothes1" class="mt-2"></h3>
<h3 id="clothes1" class="mt-2"></h3>
<h3 id="clothes1" class="mt-2"></h3>
<h3 id="clothes1" class="mt-2"></h3>
<h3 id="clothes1" class="mt-2"></h3> */}


// let garment1 = new Clothes("Pantalón suelto",20);
// let garment2 = new Clothes("Vestido Túnico",18);
// let garment3 = new Clothes("Falda mid",12);
// let garment4 = new Clothes("Cárdigan",22);
// let garment5 = new Clothes("Falda animal",21);
// let garment6 = new Clothes("Mono Beig",25);
// let garment7 = new Clothes("Vestido gris",24);
// let garment8 = new Clothes("Pantalón ancho",20);