var React = require('react/addons');
var ReviewApp = require('./components/ReviewApp.react.jsx');
//Called in the django template
var init = function init(data){
   var counter = 0; 
    function preload(sources) {
        var imagesTemp = [];
        for (var i = 0, l=sources.length; i < l; i++) {
            imagesTemp[i] = new Image();
	    imagesTemp[i].src = sources[i].sm_image_path;
            imagesTemp[i].onload = function(){
                console.log("image loaded");
            }
        }
    }
    //Rendering of root component
    React.render(
        React.createElement(ReviewApp, data),
        document.getElementById('reviewapp')
    );
    preload(data.products);
}

module.exports = init;
