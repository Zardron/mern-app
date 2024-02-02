import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting your goals</p>

        <section className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={onChange}
                value={email}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
