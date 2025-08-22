import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import httpServices from "../../services/httpServices";
import config from "../../config.json";
import QuickLink from "./QuickLink";
import {
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaMoneyBill,
  FaWallet,
  FaWifi,
} from "react-icons/fa";
import { IoMdCheckmark, IoIosSend } from "react-icons/io";
import { BsCreditCard, BsPrinter } from "react-icons/bs";

import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";
import {
  MdElectricBolt,
  MdMonitor,
  MdSchool,
  MdSmartphone,
  MdCreditCard,
  MdCardMembership,
} from "react-icons/md";
import { FaCirclePlus, FaMoneyBillTransfer } from "react-icons/fa6";
import {
  FormBox,
  WalletTop,
  WalletBottom,
  ServiceBox,
  HideIcon,
  SectionTitle,
  SectionBox,
  MainLeftSection,
  PageWrapper,
  RightDiv,
  WalletCard,
  BalanceAmount,
  SmallButton,
  TransactionCard,
  TransactionIcon,
  TransactionCardLeft,
  TransactionCardRight,
  TransactionTitle,
  TransactionNameDate,
  TransactionDate,
  TransactionAmount,
  AccountNumberSecion,
  StyledButton,
  LinkText,
} from "../styledComponents";
import { pageLoadingContext } from "../../store/PageLoadingContext";
import AdSlideshow from "../ui/AdSlideShow";

function Dashboard() {
  const name = localStorage.getItem("user_name");
  const email = localStorage.getItem("user_email");

  const [transactions, setTransactions] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [ads, setAds] = useState([]);

  let [hideBalance, setHideBalance] = useState(true);

  const navigate = useNavigate();

  const { setPageLoading } = useContext(pageLoadingContext);

  const formatDate = (date, formattomonth = false) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const fullDate = new Date(date);
    const year = fullDate.getFullYear();
    const month = months[fullDate.getMonth()];
    const transactionDate = fullDate.getDate();
    const hour = fullDate.getHours();
    const minute = fullDate.getMinutes();
    const seconds = fullDate.getSeconds();

    const time = `${hour}:${minute}:${seconds}`;

    if (formattomonth) {
      return `${year} ${month}`;
    } else {
      return `${year} ${month} ${
        transactionDate === 1
          ? "1st"
          : transactionDate == 2
          ? "2nd"
          : transactionDate === 3
          ? "3rd"
          : transactionDate + "th"
      }, ${time}`;
    }
  };

  useEffect(() => {
    // setUserInfo({ email: email, name: name, wallet_balance: wallet_balance });
    setPageLoading(true);

    async function getData() {
      const result = await httpServices.header.get(`user/dashboard`);
      if (result.data) {
        console.log(result.data);
        setTransactions(result.data.transactions);
        setUserInfo(result.data.user);
        setAds(result.data.ads);
        console.log(ads);
      }
    }
    setPageLoading(false);
    getData();
  }, [setUserInfo, setTransactions, setAds]);

  return (
    <PageWrapper>
      <MainLeftSection>
        <WalletCard>
          Available balance
          <WalletTop>
            <BalanceAmount>
              &#8358;
              {hideBalance
                ? " ******"
                : `  ${Number(userInfo.wallet).toLocaleString()}`}
              <HideIcon
                onClick={() => (hideBalance = setHideBalance(!hideBalance))}
              >
                {hideBalance ? <FaEye /> : <FaEyeSlash />}
              </HideIcon>
            </BalanceAmount>
            <SmallButton
              onClick={() => navigate("/fund-wallet")}
              type="button"
              style={{ fontSize: "18px" }}
            >
              <FaCirclePlus /> Add Money
            </SmallButton>
          </WalletTop>
          <WalletBottom>
            {/* <Link to="/transfer">
              <StyledButton style={{ fontSize: "18px" }}>
                <IoIosSend /> Transfer
              </StyledButton>
            </Link> */}
          </WalletBottom>
        </WalletCard>
        <SectionTitle>Services</SectionTitle>
        <SectionBox>
          <ServiceBox>
            <QuickLink icon={<FaWifi />} text={"Data"} link={"/data"} />
            <QuickLink
              icon={<MdSmartphone />}
              text={"Airtime"}
              link={"/airtime"}
            />
            <QuickLink
              icon={<BsCreditCard />}
              text={"USD Card"}
              link={"/cards"}
            />

            <QuickLink
              icon={<BsPrinter />}
              text={"Epins"}
              link={"/card-printing"}
            />
            <QuickLink
              icon={<MdMonitor />}
              text={"Cable TV"}
              link={"/cabletv"}
            />
            <QuickLink
              icon={<MdElectricBolt />}
              text={"Electricity"}
              link={"/electricity"}
            />
            <QuickLink icon={<MdSchool />} text={"Exams"} link={"/exams"} />
            {/* <QuickLink icon={<FaIdCard />} text={"NIN"} link={"/exams"} /> */}
            <QuickLink icon={<FaMoneyBill />} text={"Bets"} link={"/bets"} />
          </ServiceBox>
        </SectionBox>
        <SectionBox
          style={{
            height: "130px",
            width: "100%",
            marginTop: "20px",
            padding: "0",
          }}
        >
          <AdSlideshow ads={ads} />
        </SectionBox>
      </MainLeftSection>
      <RightDiv>
        <SectionTitle>Transaction History</SectionTitle>
        {transactions.map((monthTransaction) => (
          <div key={monthTransaction.index}>
            <SectionTitle>
              {formatDate(monthTransaction.month, true)}
            </SectionTitle>
            {monthTransaction.items.map((item) => (
              <TransactionCard key={item.id}>
                <TransactionCardLeft>
                  <TransactionIcon success={item.is_successful}>
                    {item.transaction_type !== "Fund Wallet" ? (
                      <GoArrowUpRight />
                    ) : (
                      <GoArrowDownLeft />
                    )}
                  </TransactionIcon>
                  <TransactionNameDate>
                    <TransactionTitle>{item.transaction_type}</TransactionTitle>
                    <TransactionDate>{formatDate(item.date)}</TransactionDate>
                  </TransactionNameDate>
                </TransactionCardLeft>
                <TransactionCardRight>
                  <TransactionAmount transaction_type={item.transaction_type}>
                    &#8358;{item.amount}
                  </TransactionAmount>
                </TransactionCardRight>
              </TransactionCard>
            ))}
          </div>
        ))}
      </RightDiv>
    </PageWrapper>
  );
}

export default Dashboard;
