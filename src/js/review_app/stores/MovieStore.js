var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MovieConstants = require('../constants/MovieConstants');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

// movies_data is passed from global object
var _perPage = 8;
var _movies = getPaginatedMovies(window.movies_data, _perPage);
var _tags = window.tags_data;
var _moviesAndTags = {
    movies: _movies,
    tags: _tags
};

/**
* Takes an array of movies and a number and
* returns the paginated array
*/
function getPaginatedMovies(movies, perPage){
    var result = [];
    for(var i=0, l= movies.length ;i<l;i+= perPage){
        var inner = [];
        for(var j = 0; j < perPage; j++){
            if(movies[i+j])
                inner.push(movies[i+j]);
        }
        result.push(inner);
    } 
    return result;
}

function createReview(data){
    // AJAX CALL TO CREATE A NEW REVIEW
}

function updateMovie(id, updates){
    
    _movies[id] = assign({}, _movies[id], updates);
}

function updateAllMovies(updates){
    for(var id in _movies){
        update(id, updates);
    }
}

var MovieStore = assign({}, EventEmitter.prototype, {
    getAllMoviesAndTags: function() {
        return _moviesAndTags;
    },
    shuffleMovies: function(){
        var flattenArray = _.flatten(_moviesAndTags.movies);
        _moviesAndTags.movies = getPaginatedMovies(_.shuffle(flattenArray), _perPage);       
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action){
    switch(action.actionType) {
    case MovieConstants.SHUFFLE_MOVIES:
        MovieStore.shuffleMovies();
        MovieStore.emitChange();
        break;
    default:
        break;
    }
});
module.exports = MovieStore;
