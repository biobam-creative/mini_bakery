import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsPersonFill,
  BsFileSpreadsheetFill,
  BsFillMortarboardFill,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

export const AdminSidbarData = [
  {
    title: "Dashboard",
    path: "/portal",
    icon: <BsGrid1X2Fill />,
  },
  {
    title: "Students",
    path: "#",
    icon: <BsPeopleFill />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "JSS1",
        path: "/students",
        icon: <BsPeopleFill />,
      },
      {
        title: "JSS2",
        path: "/students",
        icon: <BsGrid1X2Fill />,
      },
      {
        title: "JSS3",
        path: "/students",
        icon: <BsGrid1X2Fill />,
      },
    ],
  },
  {
    title: "Teachers",
    path: "/teachers",
    icon: <BsPersonFill />,
  },
  {
    title: "Academics",
    path: "/portal",
    icon: <BsFillMortarboardFill />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Results",
        path: "/portal",
        icon: <BsFillMortarboardFill />,
      },
      {
        title: "Lesson Note",
        path: "/portal",
        icon: <BsFillMortarboardFill />,
      },
    ],
  },
  {
    title: "Notices",
    path: "/portal",
    icon: <BsFileSpreadsheetFill />,
  },
  {
    title: "Logout",
    path: "/portal",
    icon: <BsBoxArrowInRight />,
  },
];

export const TeacherSidbarData = [
  {
    title: "Dashboard",
    path: "/portal",
    icon: <BsGrid1X2Fill />,
  },
  {
    title: "Students",
    path: "#",
    icon: <BsPeopleFill />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "JSS1",
        path: "/portal",
        icon: <BsPeopleFill />,
      },
      {
        title: "JSS2",
        path: "/portal",
        icon: <BsGrid1X2Fill />,
      },
      {
        title: "JSS3",
        path: "/portal",
        icon: <BsGrid1X2Fill />,
      },
    ],
  },
  {
    title: "Academics",
    path: "/portal",
    icon: <BsFillMortarboardFill />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Results",
        path: "/portal",
        icon: <BsFillMortarboardFill />,
      },
      {
        title: "Lesson Note",
        path: "/portal",
        icon: <BsFillMortarboardFill />,
      },
    ],
  },
  {
    title: "Notices",
    path: "/portal",
    icon: <BsFileSpreadsheetFill />,
  },
  {
    title: "Logout",
    path: "/portal",
    icon: <BsBoxArrowInRight />,
  },
];

export const StudentSidbarData = [
  {
    title: "Dashboard",
    path: "/portal",
    icon: <BsGrid1X2Fill />,
  },

  {
    title: "Academics",
    path: "/portal",
    icon: <BsFillMortarboardFill />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Results",
        path: "/portal",
        icon: <BsFillMortarboardFill />,
      },
    ],
  },
  {
    title: "Notices",
    path: "/portal",
    icon: <BsFileSpreadsheetFill />,
  },
  {
    title: "Logout",
    path: "/portal",
    icon: <BsBoxArrowInRight />,
  },
];
