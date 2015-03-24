var React = require('react/addons');
var ReviewApp = require('./components/ReviewApp.react.jsx');
//Called in the django template
var init = function init(data){
    
    $(function(){
        function imagesLoaded(){
            console.log("image preloaded");
        }
        var images = [];
        function preload(sources) {
            var imagesTemp = [];
	    for (i = 0; i < sources.length; i++) {
                imagesTemp[i] = new Image();
	        imagesTemp[i].src = sources[i];
                imagesTemp[i].onload = imagesLoaded;
	    }
        }
        for(var i=0; i<data.products.length; i++){
            images.push(data.products[i].image_path);
        }
        preload(images);

    });

    //Rendering of root component
    React.render(
        React.createElement(ReviewApp, data),
        document.getElementById('reviewapp')
    );
}

module.exports = init;
