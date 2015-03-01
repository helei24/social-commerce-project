var React = require('react/addons');
var ReviewFormTab = require('./ReviewFormTab.react.jsx');

var ReviewForm = React.createClass({
    render: function(){
        var tabs = this.props.reviewElements.tabElements.map(function(re, i){
            var href = "#tab" + i;
            return (
                <li className={i===0? "active" : ""} key={i}>
                    <a href={href} data-toggle="tab">
                        {re.text}
                    </a>
                </li>
            );
        });
        console.log(tabs);
        var tabContent = this.props.reviewElements.tabElements.map(function(re, i){
            var id = "tab" + i;
            return(
                <ReviewFormTab active={i === 0 ? true : false} data={re.categories} id={id} key={i}/>
            );
        });
        return (
            <div>
                <div role="tabpanel" className="tab-panel">
                    <ul className="nav nav-tabs" role="tablist">
                        {tabs}
                    </ul>
                    <div className="tab-content">
                        {tabContent}
                    </div>
                </div>
                    <textarea className="form-comments" placeholder="Your comments" rows="3"></textarea>
                    <button className="btn btn-success submit-button">Submit</button>
            </div>
        )
    }
});

module.exports = ReviewForm;
