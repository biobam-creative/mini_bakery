import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../../static/logo.png";
import heroImage from "../../../static/background.jpg";
import {
  StyledButton,
  PageWrapper,
  HomeButtonContainer,
  HeroImage,
  ImageContainer,
  TopBar,
  BtnAndLogo,
  HomeLogo,
  ToggleButton,
  TopBarLinks,
  NavLink,
  ContentContainer,
  TextContainer,
  Subheading,
  Title,
} from "../../styledComponents";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");
  return (
    <PageWrapper>
      <TopBar>
        <HomeLogo src={logo} alt="logo" />
      </TopBar>
      <ContentContainer>
        <TextContainer>
          <Title>Welcome to Freedemia Group of Schools</Title>
          <Subheading>
            We are commited to giving your ward the best of education
          </Subheading>
          <HomeButtonContainer>
            <StyledButton onClick={handleLoginClick} primary>
              Login
            </StyledButton>
          </HomeButtonContainer>
        </TextContainer>

        <ImageContainer>
          <HeroImage src={heroImage} alt="Hero Image" />
        </ImageContainer>
      </ContentContainer>
    </PageWrapper>
  );
};

export default Home;
