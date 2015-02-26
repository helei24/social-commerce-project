var React = require('react');
var MovieStore = require('../stores/MovieStore');
var MovieActions = require('../actions/MovieActions');

var SideBar = React.createClass({

    shuffleMovies: function(){
        MovieActions.shuffleMovies();
    },
    search: function(){
        MovieActions.search(
            this.refs.searchInput.value,
            this.refs.selectedTags.value,
            this.refs.selectSort.value
        );
    },
    render: function(){
        var tags_checkbox = this.props.tags.map(function(t){
            return(
                <label className="btn btn-default">
                    <input type="checkbox" autocomplete="off"/>
                    {t}
                </label>
            )
        });
        return(
            <div className="side-bar col-xs-3">
                <h4><i className="fa fa-search"></i> Search</h4>
                <input id="input-search" ref="searchInput" type="text" value=""/>
                <h4><i className="fa fa-sort"></i> Sort by</h4>
                <select className="form-control" ref="selectSort">
                    <option>Random</option>
                    <option>Title</option>
                    <option>Release Year</option>
                </select>
                <h4><i className="fa fa-tags"></i> Tags</h4>
                <div className="tags-group" data-toggle="buttons" ref="selectedTags">
                {tags_checkbox}
                </div>
                <button className="btn btn-primary" id="shuffle-button" onClick={this.shuffleMovies}>Shuffle</button>
            </div>
        );
    }
});

module.exports = SideBar;
