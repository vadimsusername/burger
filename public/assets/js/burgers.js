
$(function(){

    $(".submit-btn").on("click",function(event){
        event.preventDefault();
        var newBurger = $("#burger-id").val();
        console.log(newBurger);

    });

});