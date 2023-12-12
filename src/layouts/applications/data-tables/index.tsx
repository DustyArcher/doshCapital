// @mui material components
import Card from "@mui/material/Card";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//  React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/applications/data-tables/data/dataTableData";
import { useEffect, useState } from "react";
import { BASE_URL } from "config/config";

function DataTables(): JSX.Element {
  const [fetchData, setFetchData] = useState([]);

  const handleFetchData = () => {
    fetch(`${BASE_URL}/api/users`)
      .then((res) => res.json())
      .then((data) => setFetchData(data.data));
  };

  console.log(fetchData, "fskfjksf");

  const gg = { ...dataTableData, rows: fetchData };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <MDBox mb={3}>
          <Card>
            <MDBox p={3} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </MDTypography>
              <MDTypography variant="button" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </MDTypography>
            </MDBox>
            <DataTable table={gg} />
          </Card>
        </MDBox>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Datatable Search
            </MDTypography>
            <MDTypography variant="button" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </MDTypography>
          </MDBox>
          {/* <DataTable table={dataTableData} canSearch /> */}
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;
