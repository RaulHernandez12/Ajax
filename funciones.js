
$(document).ready(function(){
    $("#mostrar").click(function(){
        $.ajax({
             type: "GET",
             url: "mostrarUsuarios.php",
             data: {'valor' : $("#recoger").val()},
             success: function(response){
                 $('#resultado').append("<li id='"+response+"'>"+ response +"</li>");
             },
             error:function(data) {
                console.log("Error" + data)
            }
        })
    })
    $("#ocultar").click(function(){
        $.ajax({
            type: "GET",
            url: "mostrarUsuarios.php",
            data: {'valor' : $("#recoger").val()},
            success: function(response){
                $("#"+response).remove();
            },
            error:function(data) {
               console.log("Error" + data)
           }
       })
    })
    
})