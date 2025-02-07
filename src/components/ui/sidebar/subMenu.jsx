import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled.div`
  display: flex;
  // color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  font-size: 14px;
  ${(props) =>
    props.isSelected
      ? `background: #e1e9fc; color: #1b5e20;`
      : `background: #1b5e20; color: #e1e9fc`}

  &:hover {
    background: #3f6b42;
    border-left: 4px solid #ffc107;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  ${(props) => (props.openSidebar ? `display: "";` : `display: none;`)}
  margin-left: 16px;
  font-weight: bold;
`;
const DropdownLink = styled(Link)`
  background: #3f6b42;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;
  font-weight: bold;
  ${(props) => (props.openSidebar ? `display: "";` : `display: none;`)}

  &:hover {
    background: #ffc107;
    cursor: pointer;
  }
`;

const OpenandCloseIcon = styled.div`
  ${(props) => (props.openSidebar ? `display: flex;` : `display: none;`)}
`;

export default function SubMenu({ item, bigSidebar }) {
  const navigate = useNavigate();

  const [subnav, setSubnav] = useState(false);

  const [selectedNav, setSelectedNav] = useState(null);

  const showSubNav = () => setSubnav(!subnav);

  const handleSidebarLinkClick = (item) => {
    item.subNav && showSubNav();
    navigate(item.path);
    // console.log(item, selectedNav);
    // setSelectedNav(null);
    setSelectedNav(item.title);
    // console.log(selectedNav);
  };

  return (
    <>
      <SidebarLink
        to={item.path ? item.path : null}
        isSelected={selectedNav === item.title}
        onClick={() => handleSidebarLinkClick(item)}
        key={item.title}
      >
        <div>
          {item.icon}
          <SidebarLabel openSidebar={bigSidebar}>{item.title}</SidebarLabel>
        </div>
        <OpenandCloseIcon openSidebar={bigSidebar}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </OpenandCloseIcon>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              openSidebar={bigSidebar}
              to={item.path}
              state={item.title}
              key={index}
            >
              {item.icon}
              <SidebarLabel openSidebar={bigSidebar}>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}
