import React from "react";
import { BsGrid1X2Fill, BsPrinterFill } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import {
  MdElectricBolt,
  MdMonitor,
  MdSchool,
  MdSmartphone,
} from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";

export const sidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <BsGrid1X2Fill />,
  },
  {
    title: "Data",
    path: "/data",
    icon: <FaWifi />,
  },
  {
    title: "Airtime",
    path: "/airtime",
    icon: <MdSmartphone />,
  },
  {
    title: "Cards",
    path: "/cards",
    icon: <BsCreditCard />,
  },
  {
    title: "Recharge Card Printing",
    path: "/card-printing",
    icon: <BsPrinterFill />,
  },
  {
    title: "Cable TV",
    path: "/cabletv",
    icon: <MdMonitor />,
  },
  {
    title: "Electricity",
    path: "/electricity",
    icon: <MdElectricBolt />,
  },
  {
    title: "Examination Pin",
    path: "/exams",
    icon: <MdSchool />,
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <FaGear />,
  },
];
