import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/authService";
import httpServices from "../../services/httpServices";
import { FormBox, PageWrapper, Title } from "../styledComponents";
import InputField from "../ui/InputField";

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
      httpServices.header.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");
      navigate("/portal");
    });
  };
  return (
    <>
      <PageWrapper>
        <FormBox width="50vw">
          <Title>Login</Title>
          <form onSubmit={handleSubmit}>
            <InputField
              placeholder="Email"
              type="email"
              label="Email"
              id="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              placeholder="Password"
              type="password"
              label="Password"
              id="password"
              value={password}
              handleChange={(e) => setPassword(e.target.value)}
            />
            <div className="">
              <InputField type="submit" />
            </div>
          </form>
        </FormBox>
      </PageWrapper>
    </>
  );
};

export default Login;
