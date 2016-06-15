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
      <table>
        <tr>
          <td className="icon dollar"></td>
          <td className="icon star"></td>
          <td className="icon family"></td>
        </tr>
        <tr>
          <td>{fee}</td>
          <td>{this.props.data.rating}</td>
          <td>{age}</td>
        </tr>
        <tr>
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
            <div className="star-container"/>
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
    console.log("once");
    this.loadSitterFromServer();
    //setInterval(this.loadSittersFromServer, this.props.pollInterval);
  }

  loadSitterFromServer() {
    console.log("once1");
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      contentType: "application/json",
      type: 'POST',
      data: JSON.stringify({email : "sitter1@gmail.com"}),
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="sitter-page">
        <SitterHeader data={this.state.data}/>
        <SitterInfo data={this.state.data}/>
        <ReviewsList data={this.state.data}/>
      </div>
    );
  }
};

ReactDOM.render(
  <SitterPage url="https://sitters-ws.herokuapp.com/getSitterByEmail/" pollInterval={2000}/>,
  document.getElementById('wrapper')
);
