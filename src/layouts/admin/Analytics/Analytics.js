import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsLineChartData from "layouts/admin/Analytics/data/reportsLineChartData";
import reportsBarChartData from "layouts/admin/Analytics/data/reportsBarChartData";
import { useEffect, useState } from "react";
import Api from "utils/Api";

// Dashboard components

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [data, setData] = useState([]);
  const [ticketStatusData, setTicketStatusData] = useState([]);
  var labels = [];
  var count = [];
  useEffect(() => {
    async function fetchData() {
      console.log("this is working");
      var id = 1;
      const res = await Api.get(`Employee/GetTicketStatusCountsForAdmin?emp_id=${id}`);
      console.log("token==>>", res.data);
      setData(res.data);

      res.data.map((d, i) => {
        labels[i] = d.status_title;
        count[i] = d.ticket_count;
      });
    }
    fetchData();
    setTicketStatusData({
      labels: labels,
      datasets: { label: "Status", data: count },
    });
  }, []);

  var currentDate = new Date();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="blindsRoundedIcon"
                title="Opened"
                count={"102"}
                percentage={{
                  // color: "success",
                  // amount: "+55%",
                  label: "102 Tickets are opened.",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="person"
                title="In Progress"
                count="105"
                percentage={{
                  // color: "success",
                  // amount: "+3%",
                  label: "105 Tickets are in progress.",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Resolved"
                count="700"
                percentage={{
                  // color: "success",
                  // amount: "+1%",
                  label: "700 Tickets were resolved.",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="closed"
                title="Closed"
                count="1.8k"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "1.8k Tickets were closed.",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="success"
                  title="Ticket Status"
                  description="Bar Chart analyzing the work completed based on Ticket Status"
                  date={
                    "Updated on " +
                    currentDate.getDate() +
                    " " +
                    currentDate.toLocaleString("default", { month: "long" }) +
                    " " +
                    currentDate.getFullYear()
                  }
                  chart={ticketStatusData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="Monthly Handled"
                  description="Line Chart displaying monthly resolved Tickets"
                  date={
                    "Updated on " +
                    currentDate.getDate() +
                    " " +
                    currentDate.toLocaleString("default", { month: "long" }) +
                    " " +
                    currentDate.getFullYear()
                  }
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Monthly Handled"
                  description="Line Chart displaying monthly resolved Tickets"
                  date={
                    "Updated on " +
                    currentDate.getDate() +
                    " " +
                    currentDate.toLocaleString("default", { month: "long" }) +
                    " " +
                    currentDate.getFullYear()
                  }
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DefaultDoughnutChart
                  color="dark"
                  title="Monthly Handled"
                  description="Line Chart displaying monthly resolved Tickets"
                  date={
                    "Updated on " +
                    currentDate.getDate() +
                    " " +
                    currentDate.toLocaleString("default", { month: "long" }) +
                    " " +
                    currentDate.getFullYear()
                  }
                  chart={ticketStatusData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
      {/* <Footer />   */}
    </DashboardLayout>
  );
}

export default Dashboard;
