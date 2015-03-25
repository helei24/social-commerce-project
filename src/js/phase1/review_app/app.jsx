var React = require('react/addons');
var ReviewApp = require('./components/ReviewApp.react.jsx');
//Called in the django template
var init = function init(data){
   var counter = 0; 

    //Rendering of root component
    React.render(
        React.createElement(ReviewApp, data),
        document.getElementById('reviewapp')
    );
    function preload(sources) {
        var imagesTemp = [];
        var imagesTempLg = [];
        for (var i = 0, l=sources.length; i < l; i++) {
            imagesTemp[i] = new Image();
	    imagesTemp[i].src = sources[i].sm_image_path;
            imagesTempLg[i] = new Image();
	    imagesTempLg[i].src = sources[i].image_path;
        }
    }
    preload(data.products);
}

module.exports = init;
