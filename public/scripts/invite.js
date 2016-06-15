var InviteHeader = React.createClass({

  render: function () {
    return (
      <div className="inviteHeader" childName={this.props.bla.firstChild}>
        {this.props.children}
      </div>
    );
  }
});

var Sitter = React.createClass({

  render: function () {
    var css = {background: 'url('+this.props.imgUrl+') no-repeat center center'};
    return (
      <div className="sitter" style={css}>
        {this.props.children}
      </div>
    );
  }
});

var SittersList = React.createClass({
  render: function() {
    // var sitterNodes = this.props.data.map(function (sitter) {
    var child;
    var children = this.props.data.childes;


      return(
        <InviteHeader bla={children}></InviteHeader>
        // <Sitter key={sitter._id} imgUrl={sitter.fullPictureURL}>
        //     <ul className="sitter-score">
        //       <li>
        //         <div className="star-container">
        //         </div>
        //       </li>
        //       <li>
        //         {sitter.rating}
        //       </li>
        //     </ul>
        //   <section className="sitter-info">
        //     <img className="profile large-profile" src={sitter.profilePictureURL}/>
        //     <h3 className="sitter-name">
        //       {sitter.name}
        //     </h3>
        //   </section>
        // </Sitter>
      );
    // });
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
      contentType: "application/json",
      type: 'POST',
      data: JSON.stringify({email : "parent1@gmail.com"}),
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
  <SitterBox url="https://sitters-ws.herokuapp.com/getParentByEmail/" pollInterval={2000}/>,
  document.getElementById('wrapper')
);
