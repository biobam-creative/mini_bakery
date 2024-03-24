import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../../services/authService";
import httpServices from "../../../services/httpServices";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { email: email, password: password };

    await login(data).then((res) => {
      if (res.data.teacher) {
        localStorage.setItem("name", res.data.teacher["first_name"]);
        localStorage.setItem("photo", res.data.teacher["photo"]);
      } else {
        localStorage.setItem("name", res.data.student["first_name"]);
        localStorage.setItem("photo", res.data.student["photo"]);
      }
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      localStorage.setItem("is_admin", res.data.is_superuser);
      localStorage.setItem("is_staff", res.data.is_staff);
      localStorage.setItem("email", res.data.email);
      console.log(res);

      // localStorage.setItem("teacher", res.data.teacher);
      // localStorage.setItem("student", res.data.student);
      httpServices.header.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");
      navigate("/portal");
    });
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-5 mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="">
              <input type="submit" className="btn btn-sm btn-warning" />
            </div>
            <div className="text-center">
              <p>
                Not a member? <Link to="/">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
