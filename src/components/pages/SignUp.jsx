import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../services/authService";
import {
  FormBox,
  PageWrapper,
  StyledButton,
  SectionTitle,
} from "../styledComponents";
import InputField from "../ui/InputField";

export default function SignUp() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password2, setPassword2] = useState("");
  let [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      password: password,
      password2: password2,
    };
    await signup(data).then((res) => {
      if (res.status === 201) {
        navigate("/login", { replace: true });
      } else {
        console.log(res.response.data.error);
        console.log(res.data.error);
        console.log(res.data);
        setError(res.status);
      }
    });
  };
  const btnDisabled = email && name && password && password2 ? false : true;

  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <SectionTitle>Signup</SectionTitle>
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
            placeholder="Name"
            type="text"
            label="Email"
            id="email"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <InputField
            placeholder="Password"
            type="password"
            label="Password"
            id="password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />

          <InputField
            placeholder="Repeat Password"
            type="password"
            label="Repeat Password"
            id="password2"
            value={password2}
            handleChange={(e) => setPassword2(e.target.value)}
          />
          <StyledButton disabled={btnDisabled} primary>
            Signup
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
  // <Box>
  //   <Box align="center">
  //     <h2>Biobam Ventures</h2>
  //   </Box>
  //   <Paper
  //     component="form"
  //     onSubmit={handleSubmit}
  //     elevation={10}
  //     sx={paperStyle}
  //   >
  //     <Box align="center">
  //       <h2>Sign up</h2>
  //     </Box>
  //     <Typography variant="h6">{error}</Typography>
  //     <TextField
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //       label="Email"
  //       placeholder="Enter Email"
  //       type="email"
  //       fullWidth
  //       required
  //       style={inputStyle}
  //       size="small"
  //       variant="standard"
  //     />
  //     <TextField
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //       label="Name"
  //       placeholder="Enter your name"
  //       type="text"
  //       fullWidth
  //       required
  //       sx={inputStyle}
  //       variant="standard"
  //     />
  //     <TextField
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //       label="Password"
  //       placeholder="Enter Password"
  //       type="password"
  //       fullWidth
  //       required
  //       sx={inputStyle}
  //       variant="standard"
  //     />
  //     <TextField
  //       value={password2}
  //       onChange={(e) => setPassword2(e.target.value)}
  //       label="Confirm password"
  //       placeholder="Retype password"
  //       type="password"
  //       fullWidth
  //       required
  //       sx={inputStyle}
  //       variant="standard"
  //     />
  //     <Button
  //       sx={{ mb: 2 }}
  //       type="submit"
  //       fullWidth
  //       variant="contained"
  //       color="primary"
  //       disabled={btnDisabled}
  //     >
  //       Sign up
  //     </Button>
  //     <Typography variant="h5" align="center">
  //       or
  //     </Typography>

  //     <Typography variant="h5" align="center">
  //       <Link to="/login">Log in</Link>
  //     </Typography>
  //   </Paper>
  // </Box>
  // );
}
