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
import { Button } from "@mui/material";

// Dashboard components

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [ticketStatusData, setTicketStatusData] = useState([]);
  const [ticketPriorityData, setTicketPriorityData] = useState([]);
  var labelsForStatusCount = [];
  var countForStatusCount = [];
  var labelsForPriorityCount = [];
  var countForPriorityCount = [];

  const [totalStatusCount, setTotalStatusCount] = useState({});

  // const [totalCounts, setTotalCounts] = useState({});

  useEffect(() => {
    async function fetchData() {
      var id = "emp_20e73bb5-5474-40c4-badf-152422ffc7cf";
      const ticketStatusCount = await Api.get(
        `Employee/GetTicketStatusCountsForAdmin?emp_id=${id}`
      );

      setTotalStatusCount(ticketStatusCount.data);

      console.log("data==>>", ticketStatusCount.data);

      ticketStatusCount.data.map((d, i) => {
        labelsForStatusCount[i] = d.status_title;
        countForStatusCount[i] = d.ticket_count;
      });

      const ticketPriorityCount = await Api.get(
        `Employee/GetTicketPriorityCountsForAdmin?emp_id=${id}`
      );

      ticketPriorityCount.data.map((d, i) => {
        if (d.priority == 1) {
          labelsForPriorityCount[i] = "High";
        } else if (d.priority == 2) {
          labelsForPriorityCount[i] = "Mid";
        } else {
          labelsForPriorityCount[i] = "Low";
        }
        countForPriorityCount[i] = d.ticket_count;
      });

      console.log("labelsForPriorityCount" + labelsForPriorityCount);
      console.log("countForPriorityCount" + countForPriorityCount);
      console.log("labelsForStatusCount" + labelsForStatusCount);
      console.log("countForStatusCount" + countForStatusCount);

      setTicketStatusData({
        labels: labelsForStatusCount,
        datasets: { label: "Status", data: countForStatusCount },
      });

      setTicketPriorityData({
        labels: labelsForPriorityCount,
        datasets: { label: "Priority", data: countForPriorityCount },
      });
    }
    fetchData();
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
                title={totalStatusCount.length > 0 ? totalStatusCount[0].status_title : "Loading"}
                count={totalStatusCount.length > 0 ? totalStatusCount[0].ticket_count : "0"}
                percentage={{
                  // color: "success",
                  // amount: "+55%",
                  label: "Tickets Closed ",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="person"
                title={totalStatusCount.length > 0 ? totalStatusCount[1].status_title : "Loading"}
                count={totalStatusCount.length > 0 ? totalStatusCount[1].ticket_count : "0"}
                percentage={{
                  // color: "success",
                  // amount: "+3%",
                  label: "Tickets Opened",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title={totalStatusCount.length > 0 ? totalStatusCount[2]?.status_title : "Loading"}
                count={totalStatusCount.length > 0 ? totalStatusCount[2]?.ticket_count : "0"}
                percentage={{
                  // color: "success",
                  // amount: "+1%",
                  label: "Tickets Pending",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="closed"
                title={totalStatusCount.length > 0 ? totalStatusCount[3].status_title : "Loading"}
                count={totalStatusCount.length > 0 ? totalStatusCount[3].ticket_count : "0"}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Tickets Resolved.",
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
                  description="Bar Chart analyzing the Ticket Status"
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
                <ReportsBarChart
                  color="info"
                  title="Ticket Priority"
                  description="Bar Chart analyzing the Ticket Priorities"
                  date={
                    "Updated on " +
                    currentDate.getDate() +
                    " " +
                    currentDate.toLocaleString("default", { month: "long" }) +
                    " " +
                    currentDate.getFullYear()
                  }
                  chart={ticketPriorityData}
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
