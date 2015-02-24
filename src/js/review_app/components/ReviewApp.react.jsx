var React = require('react');
var MovieStore = require('../stores/MovieStore');
var MovieActions = require('../actions/MovieActions');
var SideBar = require("./SideBar.react.jsx");
var MoviesContainer = require("./MoviesContainer.react.jsx");

function getMoviesState() {
    return {
        allMovies: MovieStore.getAllMovies()
    }
}

var ReviewApp = React.createClass({
    getInitialState: function(){
        return getMoviesState();
    },
    componentDidMount: function(){
        MovieStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        MovieStore.removeChangeListener(this._onChange);
    },
    render: function(){
        return(
            <div>
                <SideBar />
                <MoviesContainer />
            </div>
        );
    },
    _onChange: function(){
        this.setState(getMoviesState());
    }

});

module.exports = ReviewApp;
