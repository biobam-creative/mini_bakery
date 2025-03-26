import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { sidebarContext } from "../../../store/sidebarContext";

const SidebarLink = styled.div`
  display: "flex";
  // color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    border-left: 4px solid #e1e9fc;
  }
  ${(props) =>
    props.isSelected
      ? `background: #e1e9fc; color: #002063;`
      : `background: #002063; color: #e1e9fc`}
`;

const SidebarLabel = styled.span`
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

export default function SubMenu({ item, expandSidebar }) {
  const navigate = useNavigate();

  const [subnav, setSubnav] = useState(false);

  const { selectedNav, setSelectedNav } = useContext(sidebarContext);

  const showSubNav = () => setSubnav(!subnav);

  const handleSidebarLinkClick = (item) => {
    item.subNav && showSubNav();
    navigate(item.path);
    setSelectedNav(item.title);
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
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <OpenandCloseIcon openSidebar={expandSidebar}>
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
              openSidebar={expandSidebar}
              to={item.path}
              state={item.title}
              key={index}
            >
              {item.icon}
              <SidebarLabel openSidebar={expandSidebar}>
                {item.title}
              </SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}
