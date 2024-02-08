import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import React, { useEffect, useState } from "react";
import Api from "utils/Api";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/admin/Incidents/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
function Tables() {
  const [tableData, setTableData] = useState([]);
  const [Priority1, setPrio1Data] = useState([]);
  const [Priority2, setPrio2Data] = useState([]);
  const [Priority3, setPrio3Data] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await Api.get(`Ticket/GetAllIncidentTicketsByEmpId?emp_id=emp_0983f5b6-5834-459b-94fc-2305a187ecc5`);
        // console.log("author", authorsTableData());
        console.log("Response:", res.data);
        setTableData(res.data);
        const Priority1 = [];
        const Priority2 = [];
        const Priority3 = [];

        for (const key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            const item = res.data[key];
            if (item.priority === 1) {
              Priority1.push(item);
            } else if (item.priority === 2) {
              Priority2.push(item);
            } else if (item.priority === 3) {
              Priority3.push(item);
            }
          }
          setPrio1Data(Priority1);
          setPrio2Data(Priority2);
          setPrio3Data(Priority3);
          console.log(Priority1);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const columns = [
    { Header: "Ticket Id", accessor: "ticket_id", align: "left" },
    { Header: "Name", accessor: "employee_firstname", align: "center" },
    { Header: "Manager", accessor: "manager_firstname", align: "center" },
    { Header: "Status", accessor: "status", align: "center" },
    { Header: "Date/Time", accessor: "created_on", align: "center" },
    { Header: "Action", accessor: "action", align: "center" },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="error"
                borderRadius="lg"
                coloredShadow="error"
              >
                <MDTypography variant="h6" color="white">
                  High Priority
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows: Priority1 }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="warning"
                borderRadius="lg"
                coloredShadow="warning"
              >
                <MDTypography variant="h6" color="white">
                  Mid Priority
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows: Priority2 }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="success"
              >
                <MDTypography variant="h6" color="white">
                  Low Priority
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows: Priority3 }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
