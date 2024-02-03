import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";

import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

// Dashboard components

function Dashboard() {
  const [activeDept, setActiveDept] = useState(1);

  const tasks = [
    {
      id: 1,
      dept: "Admin and Security Staff",
      icon: "weekend",
      color: "dark",
      count: 10,
      features: [
        {
          id: 1,
          feature: "Electrical",
          description: "Manage electrical equipment and issues.",
        },
        {
          id: 2,
          feature: "Travel Request",
          description: "Request and manage travel arrangements.",
        },
        {
          id: 3,
          feature: "Pantry Service",
          description: "Handle pantry and catering service requests.",
        },
        {
          id: 4,
          feature: "Raise Query",
          description: "Submit and address general queries.",
        },
        {
          id: 5,
          feature: "Give Feedback",
          description: "Provide feedback on services and experiences.",
        },
      ],
    },

    {
      id: 2,
      dept: "Human Resources and Payroll",
      icon: "leaderboard",
      color: "success",
      count: 5,
      features: [
        {
          id: 1,
          feature: "Salary Related Queries",
          description: "Address salary-related queries and concerns.",
        },
        {
          id: 2,
          feature: "Leaves and Absences",
          description: "Manage leave requests and absences.",
        },
        {
          id: 3,
          feature: "Update Profile and Skills",
          description: "Update employee profiles and skills.",
        },
        {
          id: 4,
          feature: "Mediclaim",
          description: "Handle medical insurance-related matters.",
        },
        {
          id: 5,
          feature: "Complaints",
          description: "Report and address HR-related complaints.",
        },
        {
          id: 6,
          feature: "Raise Query",
          description: "Submit and address general queries.",
        },
        {
          id: 7,
          feature: "Give Feedback",
          description: "Provide feedback on services and experiences.",
        },
      ],
    },

    {
      id: 3,
      dept: "Information Technology",
      icon: "store",
      color: "primary",
      count: 8,
      features: [
        {
          id: 1,
          feature: "Gen AI Tool",
          description: "Assistance with general IT tools.",
        },
        {
          id: 2,
          feature: "Hardware Request",
          description: "Request and manage hardware resources.",
        },
        {
          id: 3,
          feature: "Software Installation / Removal",
          description: "Install or remove software applications.",
        },
        {
          id: 4,
          feature: "Raise Query",
          description: "Submit and address general queries.",
        },
        {
          id: 5,
          feature: "Give Feedback",
          description: "Provide feedback on services and experiences.",
        },
      ],
    },
    {
      id: 4,
      dept: "Learning and Development",
      icon: "person_add",
      color: "warning",
      count: 15,
      features: [
        {
          id: 1,
          feature: "Training Request / Assistance",
          description: "Seek assistance for training-related matters.",
        },
        {
          id: 2,
          feature: "Course Enrollment",
          description: "Enroll in various courses and programs.",
        },
        {
          id: 3,
          feature: "Certification Assistance",
          description: "Get support for certification processes.",
        },
        {
          id: 4,
          feature: "Raise Query",
          description: "Submit and address general queries.",
        },
        {
          id: 5,
          feature: "Give Feedback",
          description: "Provide feedback on services and experiences.",
        },
      ],
    },
  ];

  const bull = (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
      •
    </Box>
  );

  const base64STR = `JVBERi0xLjMNCiX/////MTIzMA0KMSAwIG9iag0KPDwNCi9UeXBlIC9DYXRhbG9nDQovUGFnZXMgNSAwIFINCi9PdXRsaW5lcyAyIDAgUg0KPj4NCmVuZG9iag0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCjMgMCBvYmoNClsvUERGIC9UZXh0IC9JbWFnZUNdDQplbmRvYmoNCjQgMCBvYmoNCjw8L0ZpbHRlciAvU3RhbmRhcmQNCi9WIDINCi9MZW5ndGggNDANCi9SIDINCi9QDQotMjgNCi9PIDwwQzIwRDJDRUIwOTBBQ0E5MEJEQ0EzQTNDMzMwODFEODc4QjI5MDRBOENFNTU2NTE3MjJBRjAwNTI4MDZCNTdDPg0KL1UgPEUxODQzOUMyRDRCQkZBNDY3RUYwNTg5QkE0NDQ2MDNGRDZDN0I4RUQwMkZFOUY0NDJDNzA3QkU0NzVBNzM4QkM+ID4+DQplbmRvYmoNCjUgMCBvYmoNCjw8DQovVHlwZSAvUGFnZXMNCi9Db3VudCAxDQovS2lkcyBbMTIgMCBSXQ0KPj4NCmVuZG9iag0KNiAwIG9iag0KPDwNCi9UeXBlIC9Gb250DQovU3VidHlwZSAvVHJ1ZVR5cGUNCi9OYW1lIC9GMQ0KL0Jhc2VGb250IC9BcmlhbCxCb2xkDQovRmlyc3RDaGFyIDMyDQovTGFzdENoYXIgMTIxDQovV2lkdGhzIFsNCjI3NyAzMzMgNDc0IDU1NiA1NTYgODg5IDcyMiAyMzcgMzMzIA0KMzMzIDM4OSA1ODMgMjc3IDMzMyAyNzcgMjc3IDU1NiANCjU1NiA1NTYgNTU2IDU1NiA1NTYgNTU2IDU1NiA1NTYgDQo1NTYgMzMzIDMzMyA1ODMgNTgzIDU4MyA2MTAgOTc1IA0KNzIyIDcyMiA3MjIgNzIyIDY2NiA2MTAgNzc3IDcyMiANCjI3NyA1NTYgNzIyIDYxMCA4MzMgNzIyIDc3NyA2NjYgDQo3NzcgNzIyIDY2NiA2MTAgNzIyIDY2NiA5NDMgNjY2IA0KNjY2IDYxMCAzMzMgMjc3IDMzMyA1ODMgNTU2IDMzMyANCjU1NiA2MTAgNTU2IDYxMCA1NTYgMzMzIDYxMCA2MTAgDQoyNzcgMjc3IDU1NiAyNzcgODg5IDYxMCA2MTAgNjEwIA0KNjEwIDM4OSA1NTYgMzMzIDYxMCA1NTYgNzc3IDU1NiANCjU1NiBdDQovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZw0KL0ZvbnREZXNjcmlwdG9yIDcgMCBSDQo+Pg0KZW5kb2JqDQo3IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnREZXNjcmlwdG9yDQovRm9udE5hbWUgL0FyaWFsDQovRmxhZ3MgMzINCi9Gb250QkJveCBbIC0xMjg2IC03NzEgNDA5NiAyMTYyIF0NCi9JdGFsaWNBbmdsZSAwDQovQ2FwSGVpZ2h0IDEwMjQNCi9Bc2NlbnQgMTg1NA0KL0Rlc2NlbnQgNDM0DQo+Pg0KZW5kb2JqDQo4IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UcnVlVHlwZQ0KL05hbWUgL0YyDQovQmFzZUZvbnQgL0FyaWFsDQovRmlyc3RDaGFyIDMyDQovTGFzdENoYXIgMTIxDQovV2lkdGhzIFsNCjI3NyAyNzcgMzU0IDU1NiA1NTYgODg5IDY2NiAxOTAgMzMzIA0KMzMzIDM4OSA1ODMgMjc3IDMzMyAyNzcgMjc3IDU1NiANCjU1NiA1NTYgNTU2IDU1NiA1NTYgNTU2IDU1NiA1NTYgDQo1NTYgMjc3IDI3NyA1ODMgNTgzIDU4MyA1NTYgMTAxNSANCjY2NiA2NjYgNzIyIDcyMiA2NjYgNjEwIDc3NyA3MjIgDQoyNzcgNTAwIDY2NiA1NTYgODMzIDcyMiA3NzcgNjY2IA0KNzc3IDcyMiA2NjYgNjEwIDcyMiA2NjYgOTQzIDY2NiANCjY2NiA2MTAgMjc3IDI3NyAyNzcgNDY5IDU1NiAzMzMgDQo1NTYgNTU2IDUwMCA1NTYgNTU2IDI3NyA1NTYgNTU2IA0KMjIyIDIyMiA1MDAgMjIyIDgzMyA1NTYgNTU2IDU1NiANCjU1NiAzMzMgNTAwIDI3NyA1NTYgNTAwIDcyMiA1MDAgDQo1MDAgXQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCi9Gb250RGVzY3JpcHRvciA5IDAgUg0KPj4NCmVuZG9iag0KOSAwIG9iag0KPDwNCi9UeXBlIC9Gb250RGVzY3JpcHRvcg0KL0ZvbnROYW1lIC9BcmlhbA0KL0ZsYWdzIDMyDQovRm9udEJCb3ggWyAtMTM2MSAtNjY1IDQwOTYgMjEyOSBdDQovSXRhbGljQW5nbGUgMA0KL0NhcEhlaWdodCAxMDI0DQovQXNjZW50IDE4NTQNCi9EZXNjZW50IDQzNA0KPj4NCmVuZG9iag0KMTAgMCBvYmoNCjw8DQovVHlwZSAvRm9udA0KL1N1YnR5cGUgL1RydWVUeXBlDQovTmFtZSAvRjkNCi9CYXNlRm9udCAvQXJpYWwsSXRhbGljDQovRmlyc3RDaGFyIDMyDQovTGFzdENoYXIgMTIxDQovV2lkdGhzIFsNCjI3NyAyNzcgMzU0IDU1NiA1NTYgODg5IDY2NiAxOTAgMzMzIA0KMzMzIDM4OSA1ODMgMjc3IDMzMyAyNzcgMjc3IDU1NiANCjU1NiA1NTYgNTU2IDU1NiA1NTYgNTU2IDU1NiA1NTYgDQo1NTYgMjc3IDI3NyA1ODMgNTgzIDU4MyA1NTYgMTAxNSANCjY2NiA2NjYgNzIyIDcyMiA2NjYgNjEwIDc3NyA3MjIgDQoyNzcgNTAwIDY2NiA1NTYgODMzIDcyMiA3NzcgNjY2IA0KNzc3IDcyMiA2NjYgNjEwIDcyMiA2NjYgOTQzIDY2NiANCjY2NiA2MTAgMjc3IDI3NyAyNzcgNDY5IDU1NiAzMzMgDQo1NTYgNTU2IDUwMCA1NTYgNTU2IDI3NyA1NTYgNTU2IA0KMjIyIDIyMiA1MDAgMjIyIDgzMyA1NTYgNTU2IDU1NiANCjU1NiAzMzMgNTAwIDI3NyA1NTYgNTAwIDcyMiA1MDAgDQo1MDAgXQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCi9Gb250RGVzY3JpcHRvciAxMSAwIFINCj4+DQplbmRvYmoNCjExIDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnREZXNjcmlwdG9yDQovRm9udE5hbWUgL0FyaWFsDQovRmxhZ3MgOTYNCi9Gb250QkJveCBbIC0xMDU5IC02NjUgMjc4MyAyMDQzIF0NCi9JdGFsaWNBbmdsZSAtMTIwDQovQ2FwSGVpZ2h0IDEwMjQNCi9Bc2NlbnQgMTg1NA0KL0Rlc2NlbnQgNDM0DQo+Pg0KZW5kb2JqDQox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`;

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {/* <embed src={`data:application/pdf;base64,${base64STR}`} /> */}

      <MDBox py={3}>
        <Grid container spacing={3}>
          {tasks.map((item, key) => {
            console.log("item==>>", item);
            return (
              <Grid item xs={12} md={6} lg={3} key={item.id} onClick={() => setActiveDept(item.id)}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color={item.color}
                    icon={item.icon}
                    title={item.dept}
                    // count={281}
                    percentage={{
                      color: "success",
                      amount: item.count,
                      label: "Total tickets raised",
                    }}
                  />
                </MDBox>
              </Grid>
            );
          })}

          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid> */}
        </Grid>

        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {tasks[activeDept - 1].features.map((item) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={item.id}>
                  <MDBox mb={3}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Word of the Day
                        </Typography> */}
                        <Typography variant="h5" component="div">
                          {item.feature}
                        </Typography>
                        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          adjective
                        </Typography> */}
                        <Typography variant="body2">{item.description}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Raise Request</Button>
                      </CardActions>
                    </Card>
                  </MDBox>
                </Grid>
              );
            })}

            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid> */}
          </Grid>
        </MDBox>
      </MDBox>
      {/* <Footer />   */}
    </DashboardLayout>
  );
}

export default Dashboard;
