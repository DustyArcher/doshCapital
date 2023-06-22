import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

//  React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Project page components
import Header from "layouts/pages/profile/components/Header";

// Images
import Chaser from "assets/images/dosh/Chaser.png";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
// import team5 from "assets/images/team-5.jpg";
// import Chaser from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoInvision from "assets/images/small-logos/logo-invision.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import ComplexProductCard from "examples/Cards/ProductCards/ComplexProductCard";
import { botsData } from "data/bots";
import { useMaterialUIController } from "context";

function Products(): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;

  const initalData = botsData;

  const [bots, setBots] = useState([]);

  useEffect(() => {
    if (darkMode) {
      setBots(initalData.filter((bot) => bot.theme === "dark"));
    } else {
      setBots(initalData.filter((bot) => bot.theme === "light"));
    }
  }, [darkMode]);

  // ComplexProductCard dropdown menu state
  // const [slackBotMenu, setSlackBotMenu] = useState(null);
  // const [premiumSupportMenu, setPremiumSupportMenu] = useState(null);
  // const [designToolsMenu, setDesignToolsMenu] = useState(null);
  // const [lookingGreatMenu, setLookingGreatMenu] = useState(null);
  // const [developerFirstMenu, setDeveloperFirstMenu] = useState(null);

  // TeamProfileCard dropdown menu handlers
  // const openSlackBotMenu = (event: any) => setSlackBotMenu(event.currentTarget);
  // const closeSlackBotMenu = () => setSlackBotMenu(null);
  // const openPremiumSupportMenu = (event: any) => setPremiumSupportMenu(event.currentTarget);
  // const closePremiumSupportMenu = () => setPremiumSupportMenu(null);
  // const openDesignToolsMenu = (event: any) => setDesignToolsMenu(event.currentTarget);
  // const closeDesignToolsMenu = () => setDesignToolsMenu(null);
  // const openLookingGreatMenu = (event: any) => setLookingGreatMenu(event.currentTarget);
  // const closeLookingGreatMenu = () => setLookingGreatMenu(null);
  // const openDeveloperFirstMenu = (event: any) => setDeveloperFirstMenu(event.currentTarget);
  // const closeDeveloperFirstMenu = () => setDeveloperFirstMenu(null);

  // Dropdown menu template for the ComplexProductCard
  // const renderMenu = (state: any, close: any) => (
  //   <Menu
  //     anchorEl={state}
  //     anchorOrigin={{ vertical: "top", horizontal: "left" }}
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={Boolean(state)}
  //     onClose={close}
  //     keepMounted
  //   >
  //     <MenuItem onClick={close}>Action</MenuItem>
  //     <MenuItem onClick={close}>Another action</MenuItem>
  //     <MenuItem onClick={close}>Something else here</MenuItem>
  //   </Menu>
  // );

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {/* <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
        <DashboardNavbar light absolute />
      </MDBox> */}
      <Header />
      <MDBox pb={3}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={7}>
            <MDBox mb={1}>
              <MDTypography variant="h5">Some of Our Awesome Products</MDTypography>
            </MDBox>
            <MDBox mb={2}>
              <MDTypography variant="body2" color="text">
                This is the paragraph where you can write more details about your products. Keep you
                user engaged by providing meaningful information.
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={5} sx={{ textAlign: "right" }}>
            <MDButton variant="gradient" color="info">
              <Icon>add</Icon>&nbsp; Add New
            </MDButton>
          </Grid>
        </Grid>
        <MDBox mt={5}>
          <Grid container spacing={3}>
            {bots.map((product) => (
              <Grid key={product.title} item xs={12} md={4} lg={3}>
                <MDBox mb={1.5} mt={1.5}>
                  <ComplexProductCard
                    image={product.image}
                    title={product.title}
                    description="I do about 500 trades a year across 4 currency pairs. I will give you a 97% return on your investment and will do it while you sleep... I am the Chaser"
                    theme={product.theme}
                  />
                </MDBox>
              </Grid>
            ))}
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Products;
