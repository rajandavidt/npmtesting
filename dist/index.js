function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"loginForm":"_styles-module__loginForm__1VXj7","formGroup":"_styles-module__formGroup__3CEBj"};

var LoginForm = function LoginForm(_ref) {
  var className = _ref.className,
    onSubmit = _ref.onSubmit;
  var _useState = React.useState(''),
    email = _useState[0],
    setEmail = _useState[1];
  var _useState2 = React.useState(''),
    password = _useState2[0],
    setPassword = _useState2[1];
  var handleEmailChange = function handleEmailChange(e) {
    setEmail(e.target.value);
  };
  var handlePasswordChange = function handlePasswordChange(e) {
    setPassword(e.target.value);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      email: email,
      password: password
    });
  };
  return /*#__PURE__*/React__default.createElement("form", {
    className: styles.loginForm + " " + className,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.formGroup
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/React__default.createElement("input", {
    type: "email",
    id: "email",
    value: email,
    onChange: handleEmailChange
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles.formGroup
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "password"
  }, "Password:"), /*#__PURE__*/React__default.createElement("input", {
    type: "password",
    id: "password",
    value: password,
    onChange: handlePasswordChange
  })), /*#__PURE__*/React__default.createElement("button", {
    type: "submit"
  }, "Login"));
};

var ExampleComponent = function ExampleComponent(_ref) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.test
  }, /*#__PURE__*/React__default.createElement(LoginForm, null));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
