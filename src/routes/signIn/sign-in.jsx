import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import ParticlesBg from "particles-bg";
import "./sign-in.scss";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user/sign-in", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formFields),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    resetFormFields();
  };
  return (
    <div className="sign-in-container">
      <ParticlesBg type="tadpole" bg={true} />
      <div className="content">
        <h3>Already have an account, Sign in.</h3>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
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
              value={password}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Button value="Login" styleType="sign-in" />
          </div>
          <div>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
