import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import { useParams } from "react-router-dom";

const TicketOverview = () => {
  const { id } = useParams();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h1>Ticket Details {id}</h1>
    </DashboardLayout>
  );
};

export default TicketOverview;
