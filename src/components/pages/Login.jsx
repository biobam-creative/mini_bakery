import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { login } from "../../services/authService";
import httpServices from "../../services/httpServices";
import {
  FormBox,
  PageWrapper,
  SectionTitle,
  StyledButton,
  BelowLogin,
  LinkText,
  FormTitle,
} from "../styledComponents";
import InputField from "../ui/InputField";
import { sidebarContext } from "../../store/sidebarContext";
import loginImage from "../../static/login.svg";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const { setUserData } = useContext(userInfoContext);

  const { setExpandSidebar } = useContext(sidebarContext);
  setExpandSidebar(false);

  const btnDisabled = email && password.length >= 6 ? false : true;

  const handleError = () => {
    if (password.length >= 6) {
      let { passwordError } = inputError;
      setInputError();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { email: email, password: password };
    setLoading(true);

    await login(data)
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);

        localStorage.setItem("user_email", res.data.user.email);
        localStorage.setItem("user_name", res.data.user.name);
        localStorage.setItem("is_superuser", res.data.user.is_superuser);
        localStorage.setItem("wallet_balance", res.data.user.wallet);
        localStorage.setItem(
          "pin_setup",
          res.data.user.transaction_pin ? true : false
        );

        httpServices.header.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        setLoading(false);
        if (res.data.user.transaction_pin) {
          navigate("/dashboard", { replace: true });
        } else {
          navigate("/pin-setup", { replace: true });
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          navigate("/verification", { replace: true });
        } else {
          setError(err.response.data.message);
          setLoading(false);
        }
      });
  };
  return (
    <>
      <PageWrapper place="center">
        <FormBox width="40%">
          <FormTitle>Login</FormTitle>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={loginImage} style={{ height: "200px" }} />
          </div>

          <div style={{ flex: "1" }}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <InputField
                placeholder="Email"
                type="email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                placeholder="Password"
                type="password"
                value={password}
                eye
                handleChange={(e) => setPassword(e.target.value)}
              />

              <StyledButton disabled={btnDisabled || loading} primary>
                {loading ? "Loading..." : "Login"}
              </StyledButton>
            </form>
            <div style={{ display: "flex", justifyContent: "center" }}>or</div>
            <StyledButton onClick={() => navigate("/register")} type="button">
              signup
            </StyledButton>
            <BelowLogin>
              <StyledButton
                onClick={() => navigate("/password-reset")}
                type="button"
              >
                Forgot Password?
              </StyledButton>
            </BelowLogin>
          </div>
        </FormBox>
      </PageWrapper>
    </>
  );
};

export default Login;
