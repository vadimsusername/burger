
$(function(){

    $(".submit-btn").on("click",function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-id").val().trim()
        };
        console.log(newBurger);
        $.ajax('/api/burgers',{type:'POST',data:newBurger}).then(function(response){
                console.log(response);
                location.reload();
        });
        
    });

});