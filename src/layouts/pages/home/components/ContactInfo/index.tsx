// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

// Data
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";
import { Container, TextField } from "@mui/material";
import MDButton from "../../../../../components/MDButton";

function ContactInfo(): JSX.Element {
  return (
    <Container>
      <MDBox p={3} mb={4}>
        <MDTypography align="center" variant="h2">
          Don&#39;t Miss out
        </MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} sx={{ px: { xs: 4, lg: 20 } }} mb={10}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField label="Name" placeholder="Alec" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="Email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />{" "}
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="standard-textarea"
              label="Your Message"
              placeholder="Message"
              multiline
              variant="standard"
              rows={4}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="end">
          <MDBox mt={4}>
            <MDButton variant="outlined" color="dark" size="large">
              Submit
            </MDButton>
          </MDBox>
        </Grid>
      </MDBox>
    </Container>
  );
}

export default ContactInfo;
