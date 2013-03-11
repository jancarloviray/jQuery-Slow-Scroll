$("a[href^='#']").on('click',function(e){
        e.preventDefault();
        var target = $(this).attr("href").replace('#','');
        var position = $("[name*='" + target + "']").offset().top;
        $('html, body').animate({scrollTop: position}, 1500, function(){
            location.hash = "#" + target;
        })
 });