import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import httpServices from "../../services/httpServices";
import config from "../../config.json";
import QuickLink from "./QuickLink";
import {
  FaEye,
  FaEyeSlash,
  FaMoneyBill,
  FaWallet,
  FaWifi,
} from "react-icons/fa";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";
import {
  MdElectricBolt,
  MdMonitor,
  MdSchool,
  MdSmartphone,
} from "react-icons/md";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
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
} from "../styledComponents";
import SideBar from "../ui/sidebar/sideBar";

function Dashboard() {
  const name = localStorage.getItem("user_name");
  const email = localStorage.getItem("user_email");

  const [transactions, setTransactions] = useState([]);
  const [loading, setloading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  let [hideBalance, setHideBalance] = useState(true);

  useEffect(() => {
    // setUserInfo({ email: email, name: name, wallet_balance: wallet_balance });
    async function getData() {
      const result = await httpServices.header.get(`user/dashboard`);
      if (result.data) {
        setTransactions(result.data.transactions);
        setUserInfo(result.data.user);
        setloading(false);
      }
    }

    getData();
  }, [setUserInfo, setTransactions]);

  return (
    <PageWrapper>
      <MainLeftSection>
        <WalletCard>
          Available balance
          <BalanceAmount>
            <div>
              &#8358;
              {hideBalance
                ? " ******"
                : `  ${Number(userInfo.wallet).toLocaleString()}`}
              <HideIcon
                onClick={() => (hideBalance = setHideBalance(!hideBalance))}
              >
                {hideBalance ? <FaEye /> : <FaEyeSlash />}
              </HideIcon>
            </div>
            <Link to="/fund-wallet">
              <SmallButton onClick={() => console.log("/Fund Wallet")}>
                <FaWallet /> Fund Wallet
              </SmallButton>
            </Link>
          </BalanceAmount>
        </WalletCard>
        <SectionBox>
          <SectionTitle>Services</SectionTitle>
          <ServiceBox>
            <QuickLink icon={<FaWifi />} text={"Data"} link={"/data"} />
            <QuickLink
              icon={<MdSmartphone />}
              text={"Airtime"}
              link={"/airtime"}
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
            <QuickLink
              icon={<MdSchool />}
              text={"Education Pin"}
              link={"/exams"}
            />
            <QuickLink
              icon={<FaMoneyBill />}
              text={"Fund Bet Account"}
              link={"/exams"}
            />
          </ServiceBox>
        </SectionBox>
      </MainLeftSection>
      <RightDiv>
        <SectionTitle>Transactions</SectionTitle>
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id}>
            <TransactionCardLeft>
              <TransactionIcon success={transaction.is_successful}>
                {transaction.transaction_type !== "Fund Wallet" ? (
                  <GoArrowUpRight />
                ) : (
                  <GoArrowDownLeft />
                )}
              </TransactionIcon>
              <TransactionNameDate>
                <TransactionTitle>
                  {transaction.transaction_type}
                </TransactionTitle>
                <TransactionDate>{transaction.date}</TransactionDate>
              </TransactionNameDate>
            </TransactionCardLeft>
            <TransactionCardRight>
              <TransactionAmount
                transaction_type={transaction.transaction_type}
              >
                &#8358;{transaction.amount}
              </TransactionAmount>
            </TransactionCardRight>
          </TransactionCard>
        ))}
      </RightDiv>
    </PageWrapper>
  );
}

export default Dashboard;
