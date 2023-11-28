
$(document).ready(function(){
    let totalPrice = 0;

    $("#showModal").on("click", function(){
        $("#modal").modal("show");
    });

    $(".closeModal").on("click", function(){
        $("#modal").modal("hide");
    });    

    $("#clothes1").on("click", function(){
        $("#modalBody").prepend('<p id="clothesData1" class="modal-text"><span id="clothesModal1" class="modal-text"> Pantalon suelto - </span><span id="price1">20</span></p>');
        totalPrice += 20;
        $("#totalPrice").html(totalPrice);
    });
    $("#clothes2").on("click", function(){
        $("#modalBody").prepend('<p id="clothesData1" class="modal-text"><span id="clothesModal2" class="modal-text"> Vestido Tunico - </span><span id="price2">18</span></p>');
        totalPrice += 18;
        $("#totalPrice").html(totalPrice);
    });
    $("#clothes3").on("click", function(){
        $("#modalBody").prepend('<p id="clothesData1" class="modal-text"><span id="clothesModal3" class="modal-text"> Falda Mid - </span><span id="price3">12</span></p>');
        totalPrice += 12;
        $("#totalPrice").html(totalPrice);
    });
    $("#clothes4").on("click", function(){
        $("#modalBody").prepend('<p id="clothesData1" class="modal-text"><span id="clothesModal4" class="modal-text"> Cardigan Largo - </span><span id="price4">22</span></p>');
        totalPrice += 22;
        $("#totalPrice").html(totalPrice);
    });
    $("#clothes5").on("click", function(){
        $("#modalBody").prepend('<p id="clothesData1" class="modal-text"><span id="clothesModal5" class="modal-text"> Falda Animal - </span><span id="price5">21</span></p>');
        totalPrice += 21;
        $("#totalPrice").html(totalPrice);
    });
    $("#clothes6").on("click", function(){
        $("#modalBody").prepend('<p id="clothesData1" class="modal-text"><span id="clothesModal6" class="modal-text"> Mono Beig - </span><span id="price6">25</span></p>');
        totalPrice += 25;
        $("#totalPrice").html(totalPrice);
    });
    $("#clothes7").on("click", function(){
        $("#modalBody").prepend('<p id="clothesData1" class="modal-text"><span id="clothesModal7" class="modal-text"> Vestido gris - </span><span id="price7">24</span></p>');
        totalPrice += 24;
        $("#totalPrice").html(totalPrice);
    });
    $("#clothes8").on("click", function(){
        $("#modalBody").prepend('<p id="clothesData1" class="modal-text"><span id="clothesModal8" class="modal-text"> Pantalón ancho - </span><span id="price8">20</span></p>');
        totalPrice += 20;
        $("#totalPrice").html(totalPrice);
    });
});