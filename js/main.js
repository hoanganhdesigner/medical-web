
$(document).ready(function(){
    $('#mobilenavi').hide();
    $('#blackscreen').hide();
    $('#icon3line .times').hide();
    

    $('.bars').click(function(){
        $('#mobilenavi').slideDown();
        $('#blackscreen').slideDown();
        $("#titlenavi p").hide();
        $(this).hide();
        $('.times').fadeIn();
        
        
    })

    $(".times").click(function(){
        $(this).hide();
        $('#mobilenavi').slideUp();
        $('#blackscreen').slideUp();
        $('.bars').fadeIn();
        $("#titlenavi p").fadeIn();
    })

    $('#blackscreen').click(function(){
        $('#mobilenavi').slideUp();
        $(this).slideUp();
        $(".times").hide();
        $(".bars").fadeIn();
        $("#titlenavi p").fadeIn();
    })

    $("#smallimg img").click(function(){
        var linkimg = $(this).attr("src")
        $("#bigimg img").attr("src",linkimg);
    })
    
})	
