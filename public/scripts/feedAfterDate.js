var parentEmail =  localStorage.parentEmail;

var ParentFavoriteCategory = React.createClass({

  render: function () {
    return (
      <section className="parent-favorite">
        <div className="icon star-container"></div>
        <div className="category">
          <h2>MY FAVORITES</h2>
          <a href="#">See all</a>
        </div>
        <div id="parent-favorite-list"></div>
      </section>
    );
  }
});

var TopRatedCategory = React.createClass({

  render: function () {
    return (
      <section className="top-rated">
        <div className="icon star-container"></div>
        <div className="category">
          <h2>TOP RATED</h2>
          <a href="#">See all</a>
        </div>
        <div id="top-rated-list"></div>
      </section>
    );
  }
});

var Sitter = React.createClass({

  render: function () {
    var css = {background: 'url('+this.props.imgUrl+') no-repeat center center', backgroundSize: 'cover'}
    return (
      <div className="sitter" style={css}>
        {this.props.children}
      </div>
    );
  }
});

var SittersList = React.createClass({
  render: function() {
    var sitterNodes = this.props.data.map(function (sitter) {
      return(
        <Sitter key={sitter._id} imgUrl={sitter.fullPictureURL}>
          <a href="sitter.html">
            <ul className="sitter-score">
              <li>
                <div className="star-container">
                </div>
              </li>
              <li>
                {sitter.rating}
              </li>
            </ul>
            <section className="sitter-info">
              <img className="profile large-profile" src={sitter.profilePictureURL}/>
              <h3 className="sitter-name">
                {sitter.name}
              </h3>
            </section>
          </a>
        </Sitter>
      );
    });
    return (
      <div className="sitterList">
        {sitterNodes}
      </div>
    );
  }
});

var SitterBox = React.createClass({

  getInitialState: function () {
    return {data: [] , data1 : []};
  },

  componentDidMount: function () {
    this.loadSittersFromServer();
    setInterval(this.loadSittersFromServer, this.props.pollInterval)
  },

  loadSittersFromServer: function () {
    $.ajax({
      url: this.props.url + 'getTopRatedSitters',
      dataType: 'json',
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    $.ajax({
      url: 'https://sitters-ws.herokuapp.com/getParentFavoriteSitters',
      dataType: 'json',
      type : 'post',
      contentType: 'application/json',
      data: JSON.stringify({ 'email': parentEmail}),
      success: function (data) {
        this.setState({data1: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render: function () {
    return (
      <div>
        <ParentFavoriteCategory/>
        <SittersList data={this.state.data1}/>
        <TopRatedCategory/>
        <SittersList data={this.state.data}/>
      </div>
    );
  }
});

ReactDOM.render(
  <SitterBox url="https://sitters-ws.herokuapp.com/" pollInterval={2000}/>,
  document.getElementById('content')
);
