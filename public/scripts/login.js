
var LoginForm = React.createClass({

  render: function () {
    return (
      <div id="login-form">
        <img id="logo" src="./static/images/logo_sitters_blue.png" alt="sitters logo" title="sitters-logo"/>
        <h1>Sign In</h1>
        <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
      </div>
    );
  }
});

ReactDOM.render(
  <LoginForm/>,
  document.getElementById('login-box')
);
