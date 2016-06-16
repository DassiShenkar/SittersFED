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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path fill="#ffe754"  d="M77 90.4L50 76.2 23 90.4l5.2-30L6.4 39.1l30.1-4.4L50 7.4l13.5 27.3 30.1 4.4L71.8 60.4 77 90.4zM27.9 46.1L38.9 56.9l-2.6 15.2L50 64.9l13.7 7.2L61.1 56.9l11.1-10.8-15.3-2.2L50 30l-6.8 13.9L27.9 46.1z"/></svg>
              </div>
              <p className="reviewRating">{review.rating} </p>
              <p className="reviewName">{review.parentName} </p>
              <p className="reviewDate">{review.date}</p>
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

