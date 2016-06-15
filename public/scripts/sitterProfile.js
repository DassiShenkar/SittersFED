class SitterHeader extends React.Component {
  constructor() {
    super();
  }
  render() {
    var css = {background: 'url('+this.props.data.fullPictureURL+') no-repeat center center'};
    return (
      <div className="sitter-header"  style={css}>
        <header>
          <section id="profilePicture">
            <section className="profilePicture">
              <p className="greeting">Say Hello to {this.props.data.name}</p>
              <h3 className="name">{this.props.data.name}</h3>
              </section>
              <section className="knowMore">
                <p className="greeting">GET TO KNOW LINDA</p>
                <a href="#">See more</a>
              </section>
          </section>
        </header>
      </div>
    );
  }
}


class SitterInfo extends React.Component {
  constructor() {
    super();
  }
  render() {

    var fee = this.props.data.hourFee + "$";
    var age = this.props.data.minAge+'-'+this.props.data.maxAge;

    return(
      <table className="tableInfo">
        <tr>
          <td className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">  ><path fill="#f7a1a1" d="M44.8 82.1c-5-0.5-9.9-1.7-14.7-3.4 -4.7-1.7-9.1-4-12.9-6.8l9.2-13.6c3.3 2.3 6.5 4.2 9.6 5.5 3.1 1.4 6.3 2.3 9.5 2.9V54.4c-4.1-1-7.7-2-10.8-3.3 -3.1-1.2-5.7-2.7-7.8-4.5 -2.1-1.7-3.6-3.8-4.7-6.1 -1.1-2.3-1.6-5.1-1.6-8.3v-0.2c0-3 0.5-5.8 1.6-8.3 1.1-2.5 2.7-4.7 4.8-6.6 2.1-1.9 4.6-3.4 7.7-4.6 3-1.2 6.5-1.9 10.4-2.1V4.7h10.6v6.1c4.2 0.5 8.1 1.4 11.7 2.8 3.5 1.4 6.9 3.1 9.9 5.2L68.9 32.6c-2.1-1.5-4.3-2.8-6.7-3.8 -2.4-1-4.7-1.8-7-2.4v11.9c4.1 1 7.7 2.1 10.7 3.3 3 1.3 5.6 2.8 7.6 4.5 2 1.7 3.6 3.8 4.6 6.2 1 2.4 1.5 5.2 1.5 8.3v0.2c0 3.1-0.6 6-1.7 8.4 -1.2 2.5-2.8 4.7-4.9 6.5 -2.1 1.8-4.7 3.3-7.6 4.4 -3 1.1-6.3 1.8-9.9 2.1v10H44.8V82.1zM45.6 25.5c-2.5 0.2-4.3 0.8-5.4 1.7 -1.1 0.9-1.6 2.1-1.6 3.4v0.2c0 1.4 0.5 2.5 1.4 3.3 0.9 0.9 2.8 1.7 5.6 2.4V25.5zM55.1 67.3c4.6-0.5 6.9-2.2 6.9-5.2v-0.2c0-1.4-0.5-2.5-1.4-3.4 -1-0.9-2.8-1.7-5.4-2.5V67.3z"/></svg>
          </td>
          <td className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path fill="#f7a1a1"  d="M77 90.4L50 76.2 23 90.4l5.2-30L6.4 39.1l30.1-4.4L50 7.4l13.5 27.3 30.1 4.4L71.8 60.4 77 90.4zM27.9 46.1L38.9 56.9l-2.6 15.2L50 64.9l13.7 7.2L61.1 56.9l11.1-10.8-15.3-2.2L50 30l-6.8 13.9L27.9 46.1z"/></svg>
          </td>
          <td className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path fill="#f7a1a1" d="M78.2 58.2C81.1 55.8 83 52 83 48c0-6.9-5.6-13-12-13s-12 6.1-12 13c0 4 1.9 7.8 4.8 10.2 -1.3 0.5-2.5 1-3.7 1.7 -3.8-4.5-8.8-8-14.6-9.7C49.9 47.1 53 41.8 53 36c0-9.1-7.5-17-16-17s-16 7.9-16 17c0 5.8 3.1 11.1 7.5 14.2C16.1 53.9 7 65.4 7 79c0 1.1 0.9 2 2 2h82c1.1 0 2-0.9 2-2C93 69.4 86.8 61.2 78.2 58.2zM63 48c0-4.2 3.5-9 8-9s8 4.8 8 9c0 4.2-3.5 9-8 9S63 52.2 63 48zM25 36c0-6.1 5.1-13 12-13s12 6.9 12 13 -5.1 13-12 13S25 42.1 25 36zM11.1 77c1-13.4 12.3-24 25.9-24s24.9 10.6 25.9 24H11.1zM66.9 77c-0.3-5-1.9-9.8-4.5-13.8C65 61.8 67.9 61 71 61c9.2 0 16.9 7 17.9 16H66.9z"/></svg>
          </td>
        </tr>
        <tr class="middleRow">
          <td>{fee}</td>
          <td>{this.props.data.rating}</td>
          <td>{age}</td>
        </tr>
        <tr class="lastRow">
          <td>Hour fee</td>
          <td>Rating</td>
          <td>Years</td>
        </tr>
      </table>
    )
  }
}

class Review extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="review">
        {this.props.data.children}
      </div>
    );
  }
}


class ReviewsList extends React.Component {
  constructor() {
    super();
  }

  render() {
    var reviewNodes = this.props.data.map(function (review) {
      return (
        <Review key={review.uuid} imgUrl={review.pictureParent}>
          <section className="sitterInfo">
            <img src={review.pictureParent}/>
              <p className="reviewRating">{review.rating} </p>
              <p className="reviewName">{review.parentName} </p>
              <p className="reviewDate">{review.date}</p>
              <p className="review">{review.review}</p>
          </section>
        </Review>
      );
    });
    return (
      <div className="reviewList">
        {reviewNodes}
      </div>
    );
  }
}

class SitterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.loadSitterFromServer();
    //this.loadeviews();
    setInterval(this.loadSittersFromServer, this.props.pollInterval);
  }

  loadSitterFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      contentType: "application/json",
      type: 'POST',
      data: JSON.stringify({email : "sitter1@gmail.com"}),
      success: function(data) {
        this.setState({data: data, reviews: data.reviews});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  //
  // loadeviews(){
  //   $.ajax({
  //     url: "https://sitters-ws.herokuapp.com/getReviewsBySitterEmail",
  //     dataType: 'json',
  //     contentType: "application/json",
  //     type: 'POST',
  //     data: JSON.stringify({email : "sitter1@gmail.com"}),
  //     success: function(data) {
  //       this.setState({reviews: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // }

  render() {
    return (
      <div className="sitter-page">
        <SitterHeader data={this.state.data}/>
        <SitterInfo data={this.state.data}/>

      </div>
    );
  }
};

ReactDOM.render(
  <SitterPage url="https://sitters-ws.herokuapp.com/getSitterByEmail" pollInterval={2000}/>,
  document.getElementById('content1')
);
