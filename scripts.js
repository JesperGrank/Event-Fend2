$(document).ready(function(){
       
    $("#trance").on("click", function(){
        $("#desc1").fadeToggle("fast")
    })

    $("#smashing").on("click", function(){
        $("#desc2").fadeToggle("fast")
    })

    $("#pearljam").on("click", function(){
        $("#desc3").fadeToggle("fast")
    })

    $("#orbital").on("click", function(){
        $("#desc4").fadeToggle("fast")
    })

    $("#techno").on("click", function(){
        $("#desc5").fadeToggle("fast")
    })

    $("#ultravox").on("click", function(){
        $("#desc6").fadeToggle("fast")
    })

    $("#beers").on("click", function(){
        $("#desc7").fadeToggle("fast")
    })

    $("#miles").on("click", function(){
        $("#desc8").fadeToggle("fast")
    })

    $("#slayer").on("click", function(){
        $("#desc9").fadeToggle("fast")
    })

    $("#northren").on("click", function(){
        $("#desc10").fadeToggle("fast")
    })

    $("#sendMessage").on("click", function(){
        event.preventDefault()
        $(".form").hide();
        alert("Tack för ditt meddelande. Vi återkopplar så fort vi kan");
    })

})