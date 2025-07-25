import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import logo from "../../static/logo.png";
import heroImage from "../../static/vtu_home_background.png";
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
  HomePageContentContainer,
  TextContainer,
  Subheading,
  Title,
} from "../styledComponents";
import { sidebarContext } from "../../store/sidebarContext";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");
  const handleSignupClick = () => navigate("/register");

  const { setExpandSidebar } = useContext(sidebarContext);
  setExpandSidebar(false);

  return (
    <PageWrapper home>
      <TopBar>
        <HomeLogo src={logo} alt="logo" />
      </TopBar>
      <ImageContainer background={heroImage}>
        <TextContainer>
          <Title>Instant VTU Top-Ups & Data Bundles</Title>
          <Subheading>
            Experience seamless and lightning-fast mobile top-ups and data
            bundle purchases. We provide reliable and convenient services for
            all major networks, ensuring you stay connected anytime, anywhere.
            Say hello to instant recharge!
          </Subheading>
          <HomeButtonContainer>
            <StyledButton onClick={handleSignupClick} primary>
              Get Started
            </StyledButton>
            <StyledButton secondary onClick={handleLoginClick}>
              Login
            </StyledButton>
          </HomeButtonContainer>
        </TextContainer>

        {/* <ImageContainer>
          <HeroImage src={heroImage} alt="Hero Image" />
        </ImageContainer> */}
      </ImageContainer>
    </PageWrapper>
  );
};

export default Home;
