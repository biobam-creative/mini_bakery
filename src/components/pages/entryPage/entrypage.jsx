import { useState } from "react";

import Sidebar from "../../ui/sidebar/sideBar";
import Portal from "../dashboard/dashboard";
import Header from "../../ui/header/header";
import "./style.css";
import Dashboard from "../dashboard/dashboard";

function EntryPage() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  function OpenSidebarFunction() {
    setSidebarToggle(!sidebarToggle);
  }

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebarFunction} />
      <Sidebar
        openSidebarToggle={sidebarToggle}
        OpenSidebar={OpenSidebarFunction}
      />
      <Dashboard />
    </div>
  );
}

export default EntryPage;
