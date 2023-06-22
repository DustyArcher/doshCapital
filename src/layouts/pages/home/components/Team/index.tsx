import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
//  React TS components
import { useTheme } from "@emotion/react";
import MDBox from "components/MDBox";
import MDAvatar from "../../../../../components/MDAvatar";
import MDTypography from "../../../../../components/MDTypography";
import dusty from "assets/images/dosh/dusty.webp";
import TeamMember from "./TeamMember";
import { useMaterialUIController } from "context";

function Team(): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <MDBox
      mt={8}
      mb={6}
      sx={{
        background: darkMode ? "#1A2035!important" : "#F0F2F5!important",
      }}
    >
      <MDTypography mb={7} variant="h2" fontWeight="bold" align="center">
        Here is our team
      </MDTypography>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={4}>
          <TeamMember
            image={dusty}
            name="Dusty"
            post="CEO/Co-founder"
            desc="You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site."
          />
        </Grid>
        <Grid item md={4}>
          <TeamMember
            image={dusty}
            name="Dusty"
            post="CEO/Co-founder"
            desc="You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site."
          />
        </Grid>
        <Grid item md={4}>
          <TeamMember
            image={dusty}
            name="Dusty"
            post="CEO/Co-founder"
            desc="You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site."
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Team;
