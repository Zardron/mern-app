import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  console.log(formData);

  const { name, email, password, password2 } = formData;

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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>

        <section className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={onChange}
                value={name}
              />
            </div>

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
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                placeholder="Confirm your password"
                onChange={onChange}
                value={password2}
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

export default Register;
