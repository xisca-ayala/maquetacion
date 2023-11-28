
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
        $("#modalBody").prepend('<span id="clothesModal2" class="modal-text"> Vestido Tunico - </span><span id="price2">18</span>');
    });
    $("#clothes3").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal3" class="modal-text"> Falda Mid - </span><span id="price3">18</span>');
    });
    $("#clothes4").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal4" class="modal-text"> Cardigan Largo - </span><span id="price4">18</span>');
    });
    $("#clothes5").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal5" class="modal-text"> Falda Animal - </span><span id="price5">18</span>');
    });
    $("#clothes6").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal6" class="modal-text"> Mono Beig - </span><span id="price6">18</span>');
    });
    $("#clothes7").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal7" class="modal-text"> Vestido gris - </span><span id="price7">18</span>');
    });
    $("#clothes8").on("click", function(){
        $("#modalBody").prepend('<span id="clothesModal8" class="modal-text"> Pantalón ancho - </span><span id="price8">18</span>');
    });
    
});

