class SitterHeader extends React.Component {
  constructor() {
    super();
  }
  render() {
    var css = {background: 'url('+this.props.data.fullPictureURL+') no-repeat center center'};
    var children = this.props.data.childes;
    return (
      <div className="invite-header"  style={css}>
        <section>
          <p></p>
          <img src="" />
          <h3></h3>
        </section>

        <section>


        </section>
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
    this.loadParentFromServer();
    setInterval(this.loadParentFromServer, this.props.pollInterval);
  }

  loadParentFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      contentType: "application/json",
      type: 'POST',
      data: JSON.stringify({email : "parent1@gmail.com"}),
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
      </div>
    );
  }
};

ReactDOM.render(
  <SitterPage url="https://sitters-ws.herokuapp.com/getParentByEmail/" pollInterval={2000}/>,
  document.getElementById('wrapper')
);
