import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import {
  Button,
  Divider,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MDButton from "components/MDButton";
import Api from "utils/Api";
import { useParams } from "react-router-dom";

const DynamicForm = () => {
  const [priority, setPriority] = React.useState("");

  const [data, setData] = useState([]);

  const { request_id } = useParams();

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      var res = await Api.get(`RequestType/GetRequestTypeById?request_type_id=${request_id}`);

      console.log("data==>>", JSON.parse(res.data.structure));

      setData(JSON.parse(res.data.structure));
    }
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
          {data.request_type}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {data.description}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="brief"
              name="Brief"
              label="Brief about the ticket"
              fullWidth
              variant="standard"
              onChange={(e) => {
                console.log(" brief==>> " + e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Priority Status</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={priority}
                onChange={handleChange}
                label="Business Unit"
                required
                defaultValue={10}
                fullWidth
              >
                <MenuItem value={10}>Low</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>High</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {data.map((field, i) => {
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
                    data[i].input = e.target.value;
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
        <br />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button onClick={() => console.log("all entries==>>", data)}>Display</Button>
        </div>
      </React.Fragment>
    </DashboardLayout>
  );
};

export default DynamicForm;
