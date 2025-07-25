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
import Loader from "../ui/loader/Loader";
import CopyToClipboard from "../../services/CopyToClipboard";
import { pageLoadingContext } from "../../store/PageLoadingContext";
import AdSlideshow from "../ui/AdSlideShow";

import image1 from "../../static/14.png";
import image2 from "../../static/16.png";
import image3 from "../../static/8.png";
import image4 from "../../static/5d216e792de69.png";
import image5 from "../../static/5d991eed9ab45.png";
import image6 from "../../static/vtu_home_background.png";
import image7 from "../../static/background.jpg";

function Dashboard() {
  const name = localStorage.getItem("user_name");
  const email = localStorage.getItem("user_email");
  const [accountDetails, setAccountDetails] = useState({});

  const [transactions, setTransactions] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  let [hideBalance, setHideBalance] = useState(true);

  const navigate = useNavigate();

  const { setPageLoading } = useContext(pageLoadingContext);

  const images = [image1, image2, image3, image4, image5, image6, image7];

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
        console.log(result.data.transactions);
        setTransactions(result.data.transactions);
        setUserInfo(result.data.user);
        setAccountDetails(result.data.account_details);
      }
    }
    setPageLoading(false);
    getData();
  }, [setUserInfo, setTransactions, setAccountDetails]);

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
            <QuickLink icon={<FaIdCard />} text={"NIN"} link={"/exams"} />
            <QuickLink icon={<FaMoneyBill />} text={"Bet"} link={"/exams"} />
          </ServiceBox>
        </SectionBox>
        <SectionBox style={{ height: "100px", marginTop: "20px" }}>
          <AdSlideshow images={images} />
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
          // <TransactionCard key={transaction.id}>
          //   <TransactionCardLeft>
          //     <TransactionIcon success={transaction.is_successful}>
          //       {transaction.transaction_type !== "Fund Wallet" ? (
          //         <GoArrowUpRight />
          //       ) : (
          //         <GoArrowDownLeft />
          //       )}
          //     </TransactionIcon>
          //     <TransactionNameDate>
          //       <TransactionTitle>
          //         {transaction.transaction_type}
          //       </TransactionTitle>
          //       <TransactionDate>
          //         {formatDate(transaction.date)}
          //       </TransactionDate>
          //     </TransactionNameDate>
          //   </TransactionCardLeft>
          //   <TransactionCardRight>
          //     <TransactionAmount
          //       transaction_type={transaction.transaction_type}
          //     >
          //       &#8358;{transaction.amount}
          //     </TransactionAmount>
          //   </TransactionCardRight>
          // </TransactionCard>
        ))}
      </RightDiv>
    </PageWrapper>
  );
}

export default Dashboard;
