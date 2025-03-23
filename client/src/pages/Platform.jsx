import "./platform.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Platform = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [auth, setAuth] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Handle pre-authentication input changes
  const handleAuthChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  // Pre-authentication handler
  const handleAuthSubmit = (e) => {
    e.preventDefault();

    // ✅ Set your desired credentials here
    const correctUsername = "kishan";
    const correctPassword = "urbantrad44@";

    if (auth.username === correctUsername && auth.password === correctPassword) {
      alert("Authentication successful");
      setIsAuthenticated(true);
    } else {
      alert("Invalid username or password");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit registration form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password) {
      try {
        const res = await axios.post("https://backend-drab-six-62.vercel.app/api/auth/register", formData);
        alert(res.data.message || "Registration successful"); // ✅ Use the response message
        navigate("/login");
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("Enter all fields...");
    }
  };

  return (
    <div className="platform flex center">
      {!isAuthenticated ? (
        // ✅ Pre-Authentication Form
        <div className="register">
          <h2>Admin Authentication</h2>
          <form onSubmit={handleAuthSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={auth.username}
              onChange={handleAuthChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={auth.password}
              onChange={handleAuthChange}
              required
            />
            <input type="submit" value="Authenticate" />
          </form>
          <div className="user">
            <Link to="/login">User Login</Link>
          </div>
        </div>
      ) : (
        // ✅ Registration Form (Only shown after authentication)
        <div className="register">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input type="submit" value="Register" />
          </form>
          <p>
            <Link to="/login">I have an account</Link>
          </p>

        </div>
      )}
    </div>
  );
};

export default Platform;
