var React = require('react');
var ProductActions = require('../actions/ProductActions');
var ProductContainer = require('./ProductsContainer.react.jsx');
var ProductStore = require('../stores/ProductStore');

var Product = React.createClass({

    // Options for the popover
    popoverOptions: {
        trigger: 'hover',
        placement: 'auto',
        container: 'body'
    },

    // Do we need to crop the name
    cropName: false,

    // De maximum length before cropping
    cropLength: 13,
    componentDidMount: function(){
        // If the name is cropped, activate popover
        if(this.cropName){
            $(this.refs.name.getDOMNode())
                  .popover(this.popoverOptions);
        }
    },
    componentDidUpdate: function(){
        console.log("product updated");
        // If the name is cropped, activate popover
        if(this.cropName)
            $(this.refs.name.getDOMNode())
               .popover(this.popoverOptions);
    },
    componentWillUpdate: function(){

        // If the name was cropped, deactivate popover
        if(this.cropName)
            $(this.refs.name.getDOMNode())
               .popover('destroy');
    },
    componentWillUnmount: function(){
        // If the name was cropped, deactivate popover
        if(this.cropName)
            $(this.refs.name.getDOMNode()).popover('destroy');
    },

    shouldComponentUpdate: function(nextProps, nextState){

        if(nextProps.data.id === ProductStore.getLastReviewedId() ||
                                     nextProps.data.id != this.props.data.id){
            ProductStore.resetReviewedId();
            return true;
        }

        /* if(this.props.data.title === nextProps.data.title)
           return false; */
        return false;
        
    },
    // Review the product
    reviewIt: function(){
        ProductActions.review(this.props.data);
    },
    editReview: function(){
        console.log(this.props.data.review);
        ProductActions.review(this.props.data);
    },
    render: function(){

        // the name of the movie
        var name,
            // the class set on reviewed products
            imgReviewedClass,
            // We reduce the opacity of reviewed products
            opacityControl,
            // the check mark on reviewed products
            checkMark,
            // the review button
            button;

        // Do we crop the length?
        if(this.props.data.name.length>this.cropLength){
            this.cropName = true;
            name = this.props.data.name.substring(0,this.cropLength)+"...";
            
        }
        else {
            this.cropName = false;
            name = this.props.data.name;
        }

        // Check if the product was reviewed
        if(this.props.data.review){
            imgReviewedClass="reviewed";
            opacityControl = "low-opacity"
            checkMark = <i className="fa fa-check-circle"></i>;
            button = <button className="btn btn-success btn-sm" onClick={this.editReview}>Edit</button>;
        }
        else {
            checkMark= "";
            imgReviewedClass="";
            opacityControl = ""
            button = <button className="btn btn-info btn-sm" onClick={this.reviewIt}>I've seen it!</button>;
        }

        return(
            <div className="product animated fadeIn col-xs-15">
            <div className="product-inner effect6">
                <h5 className={opacityControl} ref="name" data-toggle="popover" data-content={this.props.data.name}>{name}</h5>
                <div className="checkmark-container">
                    {checkMark}
                <div className={opacityControl + " img-container"}>
                    <img src={this.props.data.sm_image_path} alt={this.props.data.name}/>
                </div>
                </div>
                <p className={opacityControl}>{this.props.data.caracteristic_1}</p>
                {button}
            </div>
            </div>
        );
    }
});

module.exports = Product;
