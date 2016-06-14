class Sitter extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    var css = {background: 'url('+this.props.imgUrl+') no-repeat center center'};
    return (
      <div className="sitter" style={css}>
        {this.props.children}
      </div>
    );
  }
}

class SittersList extends React.Component {
  constructor() {
    super();
  }

  render() {
    var sitterNodes = this.props.data.map(function (sitter) {
      return (
        <Sitter key={sitter._id} imgUrl={sitter.fullPictureURL} email={sitter.email}>
         <!-- <ul className="sitter-score">
            <li>
              <div className="star-container">
              </div>
            </li>
            <li>
              {sitter.rating}
            </li>
          </ul>-->
          <section className="sitter-info">
            <img className="profile large-profile" src={sitter.profilePictureURL}/>
            <h3 className="sitter-name">
              {sitter.name}
            </h3>
          </section>
        </Sitter>
      );
    });
    return (
      <div className="sitterList">
        {sitterNodes}
      </div>
    );
  }
}

class SitterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.loadSittersFromServer();
    setInterval(this.loadSittersFromServer, this.props.pollInterval);
  }

  loadSittersFromServer() {
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
      <div className="top-rated-list">
        <SittersList data={this.state.data}/>
      </div>
    );
  }
};

ReactDOM.render(
  <SitterBox url="https://sitters-ws.herokuapp.com/getSitterByEmail/" pollInterval={2000}/>,
  document.getElementById('reviewsContent')
);
