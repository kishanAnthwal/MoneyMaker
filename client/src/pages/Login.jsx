// import "./platform.css";
// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('https://backend-drab-six-62.vercel.app/api/auth/login', formData);
//       localStorage.setItem('token', res.data.token); 
//       alert('Login successful');
//       navigate('/batting'); 
//     } catch (err) {
//       alert(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="platform flex center">
//       <div className="register">
//       <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             placeholder="Email"
//             autoComplete="OFF"
//           />
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             placeholder="Password"
//             autoComplete="OFF"
//           />
//             <input type="submit" value="Login" />
//         </form>
//         <p>
//           <Link to="/platform">I don't have an account</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
