var Sitter = React.createClass({
  render: function () {
    return (
      <div className="sitter">
        {this.props.children}
      </div>
    );
  }
});

var SittersList = React.createClass({
  render: function() {
    var sitterNodes = this.props.data.map(function (sitter) {
      return(
        <Sitter key={sitter._id}>
          <img src={sitter.profilePictureURL}/>
          <h3 class="sitter-name">
            {sitter.name}
          </h3>
          <p>
            {sitter.rating}
          </p>
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
        <SittersList data={this.state.data}/>
      </div>
    );
  }
});

ReactDOM.render(
  <SitterBox url="https://sitters-ws.herokuapp.com/getTopRatedSitters" pollInterval={2000}/>,
  document.getElementById('content')
);
