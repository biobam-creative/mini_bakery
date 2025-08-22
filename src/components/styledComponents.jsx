import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorMessage = styled.p`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BelowLogin = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0.5rem;
`;

const TopBar = styled.div`
  display: flex;
  color: #7359c6;
  position: fixed;
  top: 0;
  padding: 0.2rem;
  justify-content: space-between;
  width: calc(100vw - ${(props) => (props.expandSidebar ? "250px" : "0px")});
  // margin-left: ${(props) => (props.expandSidebar ? "250px" : "0")};
  z-index: 1;
  background-color: #f5f5f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: margin-left 0.3s, width 0.3s;
  @media (max-width: 820px) {
    width: 100%;
    // justify-content: center;
  }
`;

const Welcome = styled.span`
  font-size: 14px;
  color: #7359c6;
  font-weight: bold;
  margin-right: 0.2rem;
`;

const TopBarLinks = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  @media (max-width: 550px) {
    ${(props) => (props.openNav ? `display:flex;` : `display:none;`)}
    flex-direction: column;
  }
`;

const NavLink = styled(Link)`
  color: #87a536;
  padding: 2rem;
  ${(props) =>
    props.isSelected
      ? `background-color: #87a536 ;  color: #fff; font-weight:700`
      : ` `};
  @media (max-width: 550px) {
    width: 100vw;
    text-align: center;
    padding-left: 0;
  }
`;

const HomePageContentContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-size: cover;
  background-position: center;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  width: calc(100vw - ${(props) => (props.expandSidebar ? "250px" : "0px")});
  margin-left: ${(props) => (props.expandSidebar ? "250px" : "0")};
  transition: margin-left 0.3s, width 0.3s;
`;

const HomeLogo = styled.img`
  margin: 0.2rem;
  height: 20px;

  @media (max-width: 820px) {
    display: none;
  }
`;
const SideBarLogo = styled.img`
  margin: 1rem;
  width: 150px;
`;

const LogoHeader = styled.img`
  width: 80px;
  display: none;
  @media (max-width: 820px) {
    display: flex;
  }
`;

const CurrentPage = styled.div`
  display: flex;
  font-size: 14px;
  color: #7359c6;
  @media (max-width: 820px) {
    display: none;
  }
`;

const BackButton = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 820px) {
    display: flex;
  }
`;

const ToggleButton = styled.div`
  display: flex;
  color: #7359c6;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  cursor: pointer;
  @media (max-width: 820px) {
    display: none;
  }
`;

const BottomNav = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 40px;
  z-index: 10;
  background-color: #f5f5f5;
  box-shadow: 10px 2px 8px rgba(0, 0, 0, 0.2);
  // border-top: 2px solid #7359c6;
  transition: margin-left 0.3s, width 0.3s;
  @media (max-width: 820px) {
    display: flex;
  }
`;

const BtnAndLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.5rem;
  @media (max-width: 550px) {
    // padding-left: 0.5rem;
    // padding-right: 0.5rem;
  }
`;

const SmallButton = styled.button`
  transition: all 0.2s ease-in-out;
  // margin: 0 0 0 0.5rem;
  border: none;
  color: #7359c6;
  border-radius: 50px;
  background-color: ${(props) => (props.bg ? props.bg : "#fff")};
  padding: 0.3rem 1rem;
  font-size: 20px;
  // font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-right: 0.5rem;
  width: 100%;

  ${(props) =>
    props.primary
      ? `background-color: #7359c6; color: #fff;`
      : `background-color: #fff; border: 1px solid #fobd2c; color: #7359c6;`}
  ${(props) =>
    props.disabled ? `background-color: rgba(0,0,0,0.1); color: grey;` : ``}

  &:hover {
    opacity: 0.8;
  }
`;
const ServiceBox = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
`;
const SectionBox = styled.div`
  background-color: #f5f5f5;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 95%;
  margin-top: 0.2rem;
  // margin-bottom: 1rem;
  border-radius: 10px;
  // box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h5`
  display: flex;
  // justify-content: center;
  align-items: center;
  color: #7359c6;
  margin-top: 5px;
  margin-bottom: 2px;
`;

const DeleteButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-right: 0.5rem;
  background-color: red;

  &:hover {
    opacity: 0.8;
  }
`;

const WalletTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 5px;
`;
const WalletBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BalanceAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: w600;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const AccountNumberSecion = styled.div``;

const WalletIcon = styled.span`
  // position: absolute;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  padding: 3px;
  color: #8eb169;
  // right: 0;
`;

const WalletCard = styled.div`
  padding: 0.5rem;
  background: #7359c6;
  width: 95%;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
`;

const HideIcon = styled.span`
  margin-left: 1rem;
  cursor: pointer;
`;

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100%;
  display: flex;
  ${(props) =>
    props.place === "center"
      ? `justify-content: center; align-items: center; margin: 0`
      : ``}
  ${(props) => (props.home ? `margin-top: 0;` : `margin-top: 40px;`)}
  flex-direction: row;
  // padding: 0.5rem;
  @media (max-width: 820px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 80px 0;
  }
`;

const FormBox = styled.div`
  padding: ${({ noPadding }) => (noPadding ? `0` : `1.2rem`)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "3rem")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: ${(props) => props.width};
  border-radius: 10px;
  height: ${(props) => (props.height ? props.height : `100%`)};
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 820px) {
    width: 90vw;
    margin: 0;
    height: 100vh;
  }
`;

const FormTitle = styled.h2`
  color: #7359c6;
  margin-top: 1rem;
  margin-bottom: 0;
`;

const SignUpWelcome = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #7359c6;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const SignUpWelcomeSub = styled.div`
  font-size: i8px;
  // color: #7359c6;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 1rem 0.5rem;
`;

const RecordSection = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 95vw;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;

  padding: 0.5rem;
  margin-right: 0.5rem;
  height: 50vh;
  overflow-y: auto;
`;

const ChartSection = styled.div`
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  min-width: 50vw;
  margin-left: 1rem;
  border-radius: 10px;
  height: 50vh;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

const Buttonstyle = styled.button`
  padding: 5px;
  ${({ disabled }) =>
    disabled
      ? `background:grey; color: #333; `
      : `background:#f0bd2c; color: #f5f5f5;`}
  border-radius: 5px;
  border: none;
`;

const RightDiv = styled.div`
  padding: 1.2rem;
  margin-left: 0.5rem;
  border-radius: 10px;
  height: 100%;
  background-color: #f5f5f5;
  overflow-y: auto;
  width: 50%;
  height: 90vh;
  @media (max-width: 820px) {
    display: none;
  }
`;

const TransactionCardLeft = styled.div`
  display: flex;
`;

const TransactionNameDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const TransactionDate = styled.div`
  font-size: 11px;
  color: grey;
`;

const TransactionAmount = styled.div`
  font-weight: 600;
  font-size: 12px;
  ${(props) =>
    props.transaction_type === "Fund Wallet" ? `color:#002063;` : `color: red;`}
`;

const TransactionCardRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransactionCard = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
`;
const TransactionIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: rgb(211, 211, 211);
  color: #000;
`;

const TransactionTitle = styled.div`
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 2px;
`;

const MainLeftSection = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  height: 100%;
  width: 50%;
  @media (max-width: 820px) {
    width: 90vw;
    margin-left: 0;
    height: 90vh;
  }
`;

const AdMainLeft = styled.div`
  display: flex;
  flex: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 95%;
  background-color: #fff;
  border-radius: 10px 10px 10px 10px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  @media (max-width: 820px) {
    width: 90vw;
    padding: 1rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    margin-left: 0;
  }
`;

const QuickLinkSection = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 95%;
  border-radius: 10px;
  background-color: #fff;
  padding: 0.5rem;
  @media (max-width: 820px) {
    width: 90vw;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: left;
`;

const Title = styled.h4`
  color: #7359c6;
  margin-bottom: 1rem;
  margin-top: 0;
  font-size: 1.8em;
  font-weight: bold;
`;

const TableData = styled.td`
  padding: 0.3rem;
`;

const TableHeader = styled.th`
  padding: "290px";
`;

const TopComponent = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    margin: 0.5rem;
  }
`;

const FlockList = styled.div`
  overflow-y: auto;
  // width: 100%;
  @media (max-width: 820px) {
    // padding: 1rem;
`;

const NoFlock = styled.div`
  flex-direction: column;
  color: #87a536;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const FlockSection = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 20px 20px 0 0;
  padding: 0.6rem;
  padding-right: 0.9rem
  height: 100%;
  width: 50%;
  overflow-x: hidden;
  @media (max-width: 820px) {
    // flex-direction: column;
    border-radius: 20px;
    width: 90vw;
    padding: 1rem;
  }
`;

const Warning = styled.p`
  background: yellow;
  color: red;
  min-height: 35px;
  width: 96%;
  padding: 0.5rem;
  border-radius: 8px;
`;

const VaccineCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  width: 100%;
  margin: 0.1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  ${(props) =>
    props.given
      ? `background-color: #87a536; color: #fff;`
      : `background-color: #fff; color: #87a536;`};
`;
const VaccineCenter = styled.div`
  display: flex;
  margin-left: 0.9rem;
  flex-direction: column;
`;

const VaccineName = styled.div`
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
`;

const VaccineDates = styled.div`
  display: flex;
  font-size: 12px;
  margin-bottom: 0.2rem;
`;

const VaccineLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const VaccineAge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #87a536;
  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1rem;
`;

const VaccineButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

const CompareButton = styled.span`
  height: 50px;
  cursor: pointer;
  background-color: #87a536;
`;

const FlockTitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
  position: sticky;
  @media (max-width: 820px) {
    width: 90vw;
  }
`;

const AddButton = styled.button`
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  height: 30px;
  ${(props) =>
    props.background
      ? `background-color: ${props.background}; color: #fff;`
      : `background-color: #87a536; color: #fff;`};
`;

const FlockCard = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  border-top: 1px solid #87a536;
  border-bottom: 1px solid #87a536;
  @media (max-width: 820px) {
    width: 90vw;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0 0.4rem 0;
  justify-content: space-between;
`;

const FilterButton = styled.button`
  border-radius: 5px;
  height: 30px;
  margin-right: 0.4rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  cursor: pointer;
  flex: 1;
  ${(props) =>
    props.isSelected
      ? `background-color: #000 ; border: none; color: #fff;`
      : `border: 2px solid #000; color: #000;`};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  // background-color: white;
  // opacity: 0.5;
`;

const Detailscontainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  width: 95vw;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

const DetailsTitle = styled.div`
  font-size: 1rem;
  margin-right: 10rem;
  margin-bottom: 0.2rem;
`;

const DetailsParam = styled.div`
  color: #87a536;
  font-size: 1rem;
  font-weight: bold;
`;

const DetailsRow = styled.div`
  // border-bottom: 1px solid;
  width: 100vw;
  height: 3rem;
  margin-bottom: 0.5rem;
`;
const SelectLabel = styled.label`
  color: #87a536;
  weight: w500;
  margin-left: 0.5rem;
`;

const TopDashboard = styled.div`
  display: flex;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
const TopAd = styled.div`
  display: flex;
  flex: 1;
  background: #e06c47;
  border-radius: 10px;
  margin-right: 0.5rem;
  @media (max-width: 820px) {
    min-height: 5rem;
    width: 95vw;
  }
`;

const Picture = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 1.5rem;
  border-radius: 10px;
`;

const DetailPrimary = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 500;
`;

const DetailSecondary = styled.span`
  color: #000;
  font-size: 20px;
`;

const Select = styled.select`
  width: 100%;
  color: #333;
  margin: 5px 0 5px 0;
  border: none;
  height: ${({ height }) => (height ? height : "35px")};
  background: rgb(211, 211, 211);
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

const TextContainer = styled.div`
  padding: 20px; /* Adjust padding as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center; /* Center vertically on larger screens */

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Subheading = styled.p`
  font-size: 1.1em; /* Adjust font size as needed */
  // font-family: "lato";
  line-height: 1.6;
  color: #fff;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.background});
  display: flex;
  min-height: 100vh;
  width: 100vw;

  align-items: center;
  @media (max-width: 768px) {
    // display: none;
    justify-content: center;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  // opacity: 0.8; /* Adjust opacity as needed */
`;

const HomeButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;
const HeaderIcon = styled.div`
  display: flex;
  border-radius: 50%;
  margin: 0.2rem;
  cursor: pointer;
  margin: 0 5px;
  padding: 3px;
`;

const LogoutButton = styled.button`
  margin-left: 20px;
  background: none;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 820px) {
    display: none;
  }
`;

const QuickCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #87a536;
  padding: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin: 0.2rem;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const QuickLinkText = styled.p`
  display: flex;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: bold;
`;

const LinkText = styled(Link)`
  color: ${(props) => (props.color ? props.color : "#7359C6")};
  font-size: 0.8rem;
  font-weight: 550;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  flex: 1;
`;

const ProviderLogo = styled.img`
  border-radius: 5px;
  height: ${({ selected }) => (selected ? "70px" : "30px")};
  width: ${({ selected }) => (selected ? "70px" : "30px")};
  cursor: pointer;
  border: ${({ selected }) =>
    selected ? "5px solid #7359c6" : "2px solid #000"};
`;

const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  // width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #000;
  cursor: pointer;
  border-radius: 5px;
  ${({ selected }) =>
    !selected
      ? `border: 1px solid #7359c6;`
      : `background: #7359c6;border: 1px solid #7359c6; color: #fff`};
`;

const PlanValue = styled.div`
  font-weight: 600;
`;

const PlanTop = styled.div`
  padding: 10px 10px 0 10px;
`;

const PlanBottom = styled.div`
  font-size: 14px;
  bottom: "0";
  border-radius: 0 0 5px 5px;
  background: #7359c6;
  color: #fff;
  width: 97%;
  display: flex;
  justify-content: center;
  padding: 2px;
`;

const PlanPrice = styled.div`
  font-size: 14px;
`;

const PlanProvider = styled.div`
  font-size: 14px;
`;

const GroupButton = styled.button`
  border: 2px solid #7359c6;
  padding: 10px;
  ${({ selected }) =>
    selected
      ? `background: #7359c6; color: #fff;`
      : `background: #F5f5f5; color: #7359c6;`}
  ${({ placeButton }) =>
    placeButton === "right"
      ? `border-radius: 0 15px 15px 0;`
      : placeButton === "left"
      ? `border-radius: 15px 0 0 15px;`
      : ``}
`;

export {
  InputContainer,
  FormTitle,
  CurrentPage,
  LogoHeader,
  Buttonstyle,
  BackButton,
  GroupButton,
  HeaderMiddle,
  PlanTop,
  PlanBottom,
  PlanValue,
  PlanPrice,
  PlanProvider,
  PlanCard,
  LogoContainer,
  ProviderLogo,
  SideBarLogo,
  WalletBottom,
  AccountNumberSecion,
  LinkText,
  BelowLogin,
  ErrorMessage,
  Profile,
  TransactionAmount,
  TransactionDate,
  TransactionNameDate,
  TransactionCardLeft,
  TransactionCardRight,
  TransactionTitle,
  SmallButton,
  QuickLinkText,
  QuickCardLink,
  SectionBox,
  WalletCard,
  LogoutButton,
  HeaderLeft,
  HeaderRight,
  HeaderIcon,
  HomeButtonContainer,
  HeroImage,
  ImageContainer,
  Subheading,
  TextContainer,
  PageWrapper,
  Picture,
  DetailPrimary,
  DetailSecondary,
  Select,
  TopAd,
  HomeLogo,
  BtnAndLogo,
  TopDashboard,
  MainLeftSection,
  AdMainLeft,
  SelectLabel,
  DetailsRow,
  DetailsParam,
  DetailsTitle,
  Detailscontainer,
  LoadingContainer,
  SectionTitle,
  FlockList,
  QuickLinkSection,
  FilterButton,
  FilterGroup,
  FlockCard,
  NoFlock,
  AddButton,
  CompareButton,
  TableData,
  TableHeader,
  LinkGroup,
  SignUpWelcome,
  SignUpWelcomeSub,
  ServiceBox,
  TopComponent,
  StyledButton,
  DeleteButton,
  TopBarLinks,
  BalanceAmount,
  NavLink,
  FormBox,
  ContentContainer,
  HomePageContentContainer,
  RecordSection,
  ChartSection,
  Title,
  WalletTop,
  RightDiv,
  VaccineCard,
  VaccineName,
  TransactionCard,
  TransactionIcon,
  Welcome,
  VaccineButton,
  VaccineAge,
  VaccineCenter,
  HideIcon,
  VaccineDates,
  VaccineLeft,
  Warning,
  FlockTitleAndButton,
  FlockSection,
  TopBar,
  ToggleButton,
  WalletIcon,
  BottomNav,
};
