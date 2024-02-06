import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import { Flex, Input, Typography } from "antd";
import { runes } from "runes2";

const CreateNewForms = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <Typography.Title level={5}>Not exceed max</Typography.Title>
        <Input
          count={{
            show: true,
            max: 6,
            strategy: (txt) => runes(txt).length,
            exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(""),
          }}
          defaultValue="Hello"
        />
      </div>
    </DashboardLayout>
  );
};

export default CreateNewForms;
