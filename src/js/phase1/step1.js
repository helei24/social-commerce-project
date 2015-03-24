var $overlay = $("#overlay"),
    $infoPopup = $("#info-popup");

function dismissInfoPopup(){
    $infoPopup.addClass("animated bounceOut");
    $overlay.addClass("animated fadeOut");
    $infoPopup.one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function(){
            $(this).remove();
        });
    $overlay.one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function(){
            $(this).hide();
            $(this).removeClass();
        });
}

$(function(){
    var $infoButton = $("#info-button"),
        $infoButton_i = $("#info-button i"),
        $collapse = $("#collapse"),
        closing = true,
        $overlay = $("#base-overlay"),
        $infoPopup = $("#info-popup");
    // $.scrollUp({
    //     scrollDistance: 1 
    // });
        function imagesLoaded(){
            console.log("image preloaded");
        }
        var images = [];
        function preload(sources) {
            var imagesTemp = [];
	    for (i = 0; i < sources.length; i++) {
                imagesTemp[i] = new Image();
	        imagesTemp[i].src = sources[i];
                console.log(imagesTemp[i]);
	    }
        }
        for(var i=0; i<data.products.length; i++){
            images.push(data.products[i].image_path);
        }
        preload(images);

    });

    $infoButton.popover({
        placement: 'left'
    });
    //For the info box
    $infoButton.click(function(e){
        if(!closing){
            $infoButton_i.addClass("fa-question").removeClass("fa-times");
            closing = true;
        }
        else {
            $infoButton_i.addClass("fa-times").removeClass("fa-question");
            closing=false;
        }
    });
});
