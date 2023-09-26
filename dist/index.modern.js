import React, { useState } from 'react';

var styles = {"loginForm":"_styles-module__loginForm__1VXj7","formGroup":"_styles-module__formGroup__3CEBj"};

const LoginForm = ({
  className,
  onSubmit
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      email,
      password
    });
  };
  return /*#__PURE__*/React.createElement("form", {
    className: `${styles.loginForm} ${className}`,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.formGroup
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    value: email,
    onChange: handleEmailChange
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.formGroup
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password:"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    value: password,
    onChange: handlePasswordChange
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Login"));
};

const ExampleComponent = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, /*#__PURE__*/React.createElement(LoginForm, null));
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
