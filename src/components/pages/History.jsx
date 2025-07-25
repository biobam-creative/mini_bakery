import React, { useState, useEffect } from "react";
import httpServices from "../../services/httpServices";
import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";
import {
  PageWrapper,
  RightDiv,
  TransactionAmount,
  TransactionCard,
  TransactionCardLeft,
  TransactionCardRight,
  TransactionDate,
  TransactionIcon,
  TransactionNameDate,
  TransactionTitle,
  SectionTitle,
  SectionBox,
} from "../styledComponents";

const History = () => {
  const [transactions, setTransactions] = useState([]);
  //   const [pageLoading, setPageLoading] = useState();
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
    // setPageLoading(true);

    async function getData() {
      const result = await httpServices.header.get(`user/dashboard`);
      if (result.data) {
        console.log(result.data);
        setTransactions(result.data.transactions);
        console.log(transactions);
      }
    }
    // setPageLoading(false);
    getData();
  }, [setTransactions]);
  return (
    <PageWrapper>
      <SectionBox>
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
      </SectionBox>
    </PageWrapper>
  );
};

export default History;
