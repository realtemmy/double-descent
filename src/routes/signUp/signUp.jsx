import { useState } from "react";
import { Link } from "react-router-dom";

import ParticlesBg from "particles-bg";

import "./signUp.scss";

const defaultFields = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  role: "user",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, username, password, confirmPassword } = formFields;

  const [currentUser, setCurrentUser] = useState([]);
  console.log(currentUser)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 7) {
      alert("Password length must be greater than 6 characters");
      return;
    }
    fetch("/user/sign-up", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formFields),
    })
      .then((res) => res.json())
      .then(user => setCurrentUser(user)).catch(err => console.log(err))

    resetFormFields();
  };
  return (
    <div className="sign-up-container">
      <ParticlesBg type="cobweb" bg={true} />
      <div className="content">
        <h3>Don't have an account, Sign up</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              required
              value={username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
          <div>
            Already have an account? <Link to="/sign-in">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
