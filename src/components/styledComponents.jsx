import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopBar = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  width: calc(100vw - ${(props) => (props.expandSidebar ? "250px" : "0px")});
  margin-left: ${(props) => (props.expandSidebar ? "250px" : "0")};
  z-index: 1;
  background-color: #f5f5f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: margin-left 0.3s, width 0.3s;
  @media (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Welcome = styled.span`
  font-size: 14px;
  color: #f5f5f5;
  font-weight: bold;
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
  height: 30px;
  width: 30px;
`;

const ToggleButton = styled.div`
  display: flex;
  color: #002073;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  cursor: pointer;
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
  margin: 0.5rem;
  border: none;
  color: #002063;
  border-radius: 3px;
  background-color: #fff;
  padding: 0.3rem 1rem;
  font-weight: 600;

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
      ? `background-color: #002063; color: #fff;`
      : `background-color: #fff; border: 1px solid #002063; color: #002063;`}
  ${(props) =>
    props.disabled ? `background-color: rgba(0,0,0,0.1); color: grey;` : ``}

  &:hover {
    opacity: 0.8;
  }
`;
const ServiceBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SectionBox = styled.div`
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 93%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  // box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h5`
  color: #002063;
  margin-top: 3px;
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

const BalanceAmount = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: w600;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

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
  background: #002063;
  width: 95%;
  border-radius: 10px;
  color: #fff;
`;

const HideIcon = styled.span`
  margin-left: 1rem;
  cursor: pointer;
`;

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100%;
  display: flex;
  margin-top: 20px;
  ${(props) =>
    props.place === "center"
      ? `justify-content: center; align-items: center;`
      : ``}
  flex-direction: row;
  // padding: 0.5rem;
  @media (max-width: 820px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FormBox = styled.div`
  padding: 1.2rem;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "3rem")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: ${(props) => props.width};
  border-radius: 10px;
  height: ${(props) => props.height};
  background-color: white;

  @media (max-width: 820px) {
    width: 90vw;
    // margin-left: 3rem;
    // margin-right: 3rem;
  }
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

const RightDiv = styled.div`
  padding: 1.2rem;
  flex: 1;
  margin-left: 1rem;
  border-radius: 10px;
  height: 100vh;
  background-color: white;
  overflow-y: auto;
  @media (max-width: 820px) {
    width: 90vw;
    margin-left: 0;
    margin-top: 0.5rem;
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
  font-size: 12px;
  font-weight: 300;
  color: grey;
`;

const TransactionAmount = styled.div`
  font-weight: 600;
  ${(props) =>
    props.transaction_type === "Fund Wallet" ? `color:green;` : `color: red;`}
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
  background: #002053;
  color: white;
`;

const TransactionTitle = styled.div`
  font-weight: 500;
  font-size: 15px;
`;

const MainLeftSection = styled.div`
  // margin: 1.2rem;
  margin-top: 0;
  // padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  // width: 40px;
  // width: calc(
  //   100vw - ${(props) => (props.expandSidebar ? "250px" : "0px")}*0.4
  // );
  margin-left: 1rem;
  height: 100%;
  @media (max-width: 820px) {
    width: 90vw;
    margin-left: 0;
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
  // color: #fff;
  margin-bottom: 1rem;
  margin-top: 0;
  font-size: 1.2rem;
  font-weight: normal;
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
  margin-bottom: 0.7rem;
  margin-top: 0.4rem;
  @media (max-width: 820px) {
    width: 90vw;
  }
`;

const FilterButton = styled.button`
  border-radius: 5px;
  height: 30px;
  margin-right: 0.4rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  cursor: pointer;
  ${(props) =>
    props.isSelected
      ? `background-color: #87a536 ; border: none; color: #fff;`
      : `border: 2px solid #87a536; color: #87a536;`};
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
  // width: 100%;
  color: ${({ type }) => (type !== "submit" ? "#002063" : "#ffc107")};
  margin: 0.5rem;
  border: none;
  border-bottom: ${({ type }) =>
    type !== "submit" ? "1px solid #002063" : "none"};
  border-radius: ${({ type }) => (type !== "submit" ? "none" : "5px")};
  height: ${({ height }) => (height ? height : "25px")};
  &:focus {
    outline: none;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px; /* Adjust padding as needed */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; /* Center vertically on larger screens */

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Subheading = styled.p`
  font-size: 1.2rem; /* Adjust font size as needed */
  // font-family: "lato";
  line-height: 1.5;
  color: #3f6b42;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    display: none;
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
`;

const ProfileSideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;
const ProfileImage = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 50px;
  // margin: 0.2rem;
`;

const LogoutButton = styled.button`
  color: #1b5e20;
  font-size: 18px;
  background: none;
  border: 2px solid #1b5e20;
  border-radius: 5px;
  cursor: pointer;
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

export {
  ProfileSideBar,
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
  ProfileImage,
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
  ServiceBox,
  TopComponent,
  StyledButton,
  DeleteButton,
  TopBarLinks,
  BalanceAmount,
  NavLink,
  FormBox,
  ContentContainer,
  RecordSection,
  ChartSection,
  Title,
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
};
