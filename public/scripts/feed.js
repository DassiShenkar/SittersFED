var Sitter = React.createClass({
  render: function () {
    return (
      <div className="sitter">
        <h2 className="sitterMail">
          {this.props.email}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var SittersList = React.createClass({
  render: function() {
    var sitterNodes = this.props.data.map(function (sitter) {
      return(
        <Sitter key={sitter.id}>
          <h3>
            {sitter.name}
          </h3>
          <p>
            {sitter.email}
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

var CommentForm = React.createClass({
  getInitialState: function () {
    return {email: '', name: ''};
  },

  handleEmailChange: function (e) {
    this.setState({email: e.target.value});
  },

  handleNameChange: function (e) {
    this.setState({name: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var name = this.state.name.trim();
    if (!email || !name) {
      return;
    }
    this.props.onSitterSubmit({email: email, name: name});
    this.setState({email: '', name: ''});
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          type="text"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input type="submit" value="Post"/>
      </form>
    );
  }
});


var SitterBox = React.createClass({

  loadSittersFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleSitterSubmit: function (sitter) {
    var sitters = this.state.data;
    sitter.id = Date.now();
    var newSitters = sitters.concat([sitter]);
    this.setState({data: newSitters});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: sitter,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: sitters});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function () {
    return {data: []};
  },

  componentDidMount: function () {
    this.loadSittersFromServer();
    setInterval(this.loadSittersFromServer, this.props.pollInterval)
  },
  render: function () {
    return (
      <div className="sittersBox">
        <h1>Sitters</h1>
        <SittersList data={this.state.data}/>
        <CommentForm onSitterSubmit={this.handleSitterSubmit}/>
      </div>
    );
  }
});

ReactDOM.render(
  <SitterBox url="https://sitters-ws.herokuapp.com/getAllParents" pollInterval={2000}/>,
  document.getElementById('content')
);
