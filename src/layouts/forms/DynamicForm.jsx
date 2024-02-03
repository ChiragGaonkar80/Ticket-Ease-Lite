import React from "react";
import FormControl from "@mui/material/FormControl";
import { Button, FormHelperText, Input, InputLabel, MenuItem, Select } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MDButton from "components/MDButton";

const DynamicForm = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const fields = [
    {
      key: "hostname",
      title: "Host Name",
    },
    {
      key: "requested",
      title: "Requested Software",
    },
    {
      key: "platform",
      title: "Installation Platform",
    },
    {
      key: "pname",
      title: "Project Name",
    },
    {
      key: "ownername",
      title: "Machine Owner Name",
    },
    {
      key: "location",
      title: "Location",
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Installation Form
        </Typography>
        <Grid container spacing={3}>
          {fields.map((field, i) => {
            return (
              <Grid item xs={12} sm={6} key={i}>
                <TextField
                  required
                  id={field.key}
                  name={field.key}
                  label={field.title}
                  fullWidth
                  variant="standard"
                  onChange={(e) => {
                    console.log(field.title + " ==>> " + e.target.value);
                    fields[i].input = e.target.value;
                  }}
                />
              </Grid>
            );
          })}
        </Grid>

        <Button onClick={() => console.log("all entries==>>", fields)}>Display</Button>
      </React.Fragment>
    </DashboardLayout>
  );
};

export default DynamicForm;
