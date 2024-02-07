import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import ChatButton from "../chatButton";

const ViewInDetail = () => {
  const personEmail = "naveen_naik1@persistent.com";
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ChatButton email={personEmail} />
    </DashboardLayout>
  );
};

export default ViewInDetail;
