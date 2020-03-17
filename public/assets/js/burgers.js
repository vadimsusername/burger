
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

    $(".devour-btn").on("click",function(event){
        var id = $(this).data('id');
        console.log(`in devour-btn event listener, value of data-id is : ${id}`);
        $.ajax(`/api/devour/${id}`,{type:'PUT', data: true}).then(function(response){
            console.log(response);
            location.reload();
        });
    });

});