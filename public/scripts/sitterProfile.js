var Review = React.createClass({

  render: function () {
    return (
      <div className="review">
        {this.props.children}
      </div>
    );
  }
});

var ReviewsList = React.createClass({
  render: function() {
    var reviewNodes = this.props.data.map(function (review) {
      return(
        <Review key={review.rating}>
          <section className="review-container">
            <img className="parent-picture" src={review.pictureParent}/>
            <section className="sitterInfo">
              <div className="icon-container">
              </div>
              <section class="review-details">
                <p className="reviewRating">{review.rating} </p>
                <p className="reviewName">{review.parentName} </p>
                <p className="reviewDate">{review.date}</p>
              </section>
            </section>
          </section>
          <p className="review-text">{review.review}</p>
        </Review>
      );
    });
    return (
      <div className="reviewsList">
        {reviewNodes}
      </div>
    );
  }
});

var ReviewBox = React.createClass({

  getInitialState: function () {
    return {data: []};
  },

  componentDidMount: function () {
    this.loadSittersFromServer();
    setInterval(this.loadSittersFromServer, this.props.pollInterval)
  },

  loadSittersFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      contentType: "application/json",
      type: 'POST',
      data: JSON.stringify({email : "sitter1@gmail.com"}),
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="top-rated-list">
        <ReviewsList data={this.state.data}/>
      </div>
    );
  }
});

ReactDOM.render(

  <ReviewBox url="https://sitters-ws.herokuapp.com/getReviewsBySitterEmail" pollInterval={2000}/>,
  document.getElementById('content')
);

