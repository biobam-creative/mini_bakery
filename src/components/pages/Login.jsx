import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/authService";
import httpServices from "../../services/httpServices";
import {
  FormBox,
  PageWrapper,
  SectionTitle,
  StyledButton,
  Title,
} from "../styledComponents";
import InputField from "../ui/InputField";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const btnDisabled = email && password ? false : true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { email: email, password: password };

    await login(data).then((res) => {
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      localStorage.setItem("user_email", res.data.user.email);
      localStorage.setItem("user_name", res.data.user.name);
      localStorage.setItem("is_superuser", res.data.user.is_superuser);
      localStorage.setItem("wallet_balance", res.data.user.wallet);
      httpServices.header.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");
      navigate("/dashboard", { replace: true });
    });
  };
  return (
    <>
      <PageWrapper place="center">
        <FormBox width="40%">
          <SectionTitle>Login</SectionTitle>
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
            <StyledButton disabled={btnDisabled} primary>
              Login
            </StyledButton>
            or <Link to="/register">SignUp</Link>
            <Link to="/password-reset">Forgot Password?</Link>
          </form>
        </FormBox>
      </PageWrapper>
    </>
  );
};

export default Login;
