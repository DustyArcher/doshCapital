import { Grid } from "@mui/material";
import React from "react";
import MDAvatar from "../../../../../components/MDAvatar";
import MDBox from "../../../../../components/MDBox";
import MDTypography from "../../../../../components/MDTypography";

const TeamMember = ({
  image,
  name,
  post,
  desc,
}: {
  image: string;
  name: string;
  post: string;
  desc: string;
}) => {
  return (
    <MDBox px={6} mb={4}>
      <Grid item alignItems="center" justifyContent="center">
        <MDAvatar
          src={image}
          alt="profile-image"
          sx={{ width: 145, height: 145, margin: "auto" }}
          shadow="sm"
        />
      </Grid>
      <Grid item>
        <MDBox
          height="100%"
          mt={0.5}
          lineHeight={1}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <MDTypography variant="h5" fontWeight="medium" align="center">
            {name}
          </MDTypography>
          <MDTypography variant="button" color="text" fontWeight="regular">
            {post}
          </MDTypography>
          <MDBox mt={4}>
            <MDTypography variant="body2" color="text" fontWeight="regular" align="center">
              {desc}
            </MDTypography>
          </MDBox>
        </MDBox>
      </Grid>
    </MDBox>
  );
};

export default TeamMember;
