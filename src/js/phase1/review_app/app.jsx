var React = require('react/addons');
var ReviewApp = require('./components/ReviewApp.react.jsx');
//Called in the django template
var init = function init(data){
    
    function preload(sources) {
        var imagesTemp = [];
        for (var i = 0, l=sources.length; i < l; i++) {
            imagesTemp[i] = new Image();
	    imagesTemp[i].src = sources[i].image_path;
        }
    }
    preload(data.products);

    //Rendering of root component
    React.render(
        React.createElement(ReviewApp, data),
        document.getElementById('reviewapp')
    );
}

module.exports = init;
