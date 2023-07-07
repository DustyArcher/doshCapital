import { useState, useEffect, ReactNode } from "react";
import "./index.css";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import homeDecor1 from "assets/images/new/Picture1.png";
import homeDecor2 from "assets/images/new/Picture2.png";
import homeDecor3 from "assets/images/new/Picture3.png";
import homeDecor4 from "assets/images/new/Picture4.png";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import mission from "assets/images/mission.png";
import vision from "assets/images/vision.png";
import value from "assets/images/values.png";
import logoAsana from "assets/images/small-logos/logo-asana.svg";
import logoInvision from "assets/images/small-logos/logo-invision.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";

//  React TS Base Styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import dusty from "assets/images/Me.jpg";
import backgroundImage from "assets/images/Sydney.jpg";
import { Avatar, AvatarGroup, Box, Container, Typography } from "@mui/material";
import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Header from "layouts/pages/profile/components/Header";
import Footer from "examples/Footer";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

function About({ children }: { children?: ReactNode }): JSX.Element {
  const [slackBotMenu, setSlackBotMenu] = useState(null);
  const [premiumSupportMenu, setPremiumSupportMenu] = useState(null);
  const [designToolsMenu, setDesignToolsMenu] = useState(null);
  const [lookingGreatMenu, setLookingGreatMenu] = useState(null);
  const [developerFirstMenu, setDeveloperFirstMenu] = useState(null);
  const [tabsOrientation, setTabsOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event: any, newValue: any) => setTabValue(newValue);
  const openSlackBotMenu = (event: any) => setSlackBotMenu(event.currentTarget);
  const closeSlackBotMenu = () => setSlackBotMenu(null);
  const openPremiumSupportMenu = (event: any) => setPremiumSupportMenu(event.currentTarget);
  const closePremiumSupportMenu = () => setPremiumSupportMenu(null);
  const openDesignToolsMenu = (event: any) => setDesignToolsMenu(event.currentTarget);
  const closeDesignToolsMenu = () => setDesignToolsMenu(null);
  const openLookingGreatMenu = (event: any) => setLookingGreatMenu(event.currentTarget);
  const closeLookingGreatMenu = () => setLookingGreatMenu(null);
  const openDeveloperFirstMenu = (event: any) => setDeveloperFirstMenu(event.currentTarget);
  const closeDeveloperFirstMenu = () => setDeveloperFirstMenu(null);
  const renderMenu = (state: any, close: any) => (
    <Menu
      anchorEl={state}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
    >
      <MenuItem onClick={close}>Action</MenuItem>
      <MenuItem onClick={close}>Another action</MenuItem>
      <MenuItem onClick={close}>Something else here</MenuItem>
    </Menu>
  );
  console.log(mission, "gggggg");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox position="relative" mb={5} mt={3}>
        <MDBox
          style={{
            position: "absolute",
            top: "50%",
            right: "20%",
            transform: "translate(-50%,-50%)",
            zIndex: 9,
          }}
          align="center"
          height="100%"
          // width="30%"
          mt={4}
          lineHeight={1}
          className="mmmmmmmm"
        >
          <MDTypography variant="h5" fontWeight="medium">
            About Us
          </MDTypography>
          <MDTypography variant="button" color="text" fontWeight="bold">
            “Helping Others, make money while you sleep”
          </MDTypography>{" "}
          <br />
          <MDTypography variant="button" color="text" fontWeight="regular">
            At Dosh we come together to fix one common problem by providing a Solution and Service
            to Financial Freedom. We provide this through Automated Trading, Networking & DoshCoin
          </MDTypography>{" "}
          <br />
          <MDTypography variant="button" color="text" fontWeight="regular">
            Ever hard of a company that provides great Service a Robust Product and Reliable steady
            Income through consistent profits? Its Dosh Capital Investment!
          </MDTypography>
        </MDBox>

        <MDBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="18.75rem"
          borderRadius="xl"
          sx={{
            backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
          }}
        />

        <Card
          sx={{
            position: "relative",
            mt: -8,
            mx: 3,
            py: 2,
            px: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center" style={{ padding: " 10px 0" }}>
            <Grid item>
              <MDAvatar src={dusty} alt="profile-image" size="xl" shadow="sm" />
            </Grid>
            <Grid item>
              <MDBox height="100%" mt={0.5} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  Duston Archer
                </MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Founder / Director
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
              <AppBar position="static">
                <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                  <Tab
                    label="App"
                    icon={
                      <Icon fontSize="small" sx={{ mt: -0.25 }}>
                        home
                      </Icon>
                    }
                  />
                  <Tab
                    label="Message"
                    icon={
                      <Icon fontSize="small" sx={{ mt: -0.25 }}>
                        email
                      </Icon>
                    }
                  />
                  <Tab
                    label="Settings"
                    icon={
                      <Icon fontSize="small" sx={{ mt: -0.25 }}>
                        settings
                      </Icon>
                    }
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>

          {children}
        </Card>
      </MDBox>
      <div style={{ padding: "0 30px " }}>
        <MDBox height="100%" mt={4} lineHeight={1}>
          <MDTypography variant="h5" fontWeight="medium">
            About the Author
          </MDTypography>
          <MDTypography variant="button" color="text" fontWeight="regular">
            “Greetings, I am Dusty as you may already know. It is my great pleasure to bring to you
            the beginning of a new era in Automated Trading using our Expert Advisors also known as
            EAs or Trading Bots. It has been my undying passion for over 13 years developing
            Strategies, coding, testing, & failing but never giving up to ultimately Win in the
            Forex markets. I can tell you without a shadow of a doubt, it’s hard, it’s bloody hard…
            but not Impossible” Dusty Archer
          </MDTypography>
        </MDBox>

        <MDBox mt={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={mission}
                  title="Our Mission"
                  subtitle="What we are"
                  description="Is to provide the best possible investment strategy trading with the goal to drive client investment growth like no other! 
                    "
                  dateTime="02.03.22"
                  members={[team1, team2, team3, team4, team5]}
                  dropdown={{
                    action: openSlackBotMenu,
                    menu: renderMenu(slackBotMenu, closeSlackBotMenu),
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={vision}
                  title="Our Vision"
                  subtitle="What we see"
                  description="Is to grow our client database and network to over one million in the next 5 years with an ROI of over 100% per annum. 
                    "
                  dateTime="22.11.21"
                  members={[team1, team2, team3]}
                  dropdown={{
                    action: openPremiumSupportMenu,
                    menu: renderMenu(premiumSupportMenu, closePremiumSupportMenu),
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={value}
                  title="Our Values"
                  subtitle="What we become"
                  description="We operate with the intension of our customer's satisfaction and growth through -integrity, excellence & trust."
                  dateTime="06.03.20"
                  members={[team1, team2, team3, team4]}
                  dropdown={{
                    action: openDesignToolsMenu,
                    menu: renderMenu(designToolsMenu, closeDesignToolsMenu),
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Card style={{ margin: "40px 0" }}>
          <MDBox pt={2} px={2} lineHeight={1.25}>
            <MDTypography variant="h6" fontWeight="medium">
              There’s a lot more you will find on Dustyz
            </MDTypography>
          </MDBox>
          <MDBox p={2}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="project #1"
                  // title="modern"
                  title="Dustyz.com"
                  description="Dustyz is a Digital Social Marketplace where we bring together services in one place
                "
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view website",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="project #2"
                  // title="scandinavian"
                  title="DustyzStore.com"
                  description="DustyzStore is a dropshipping store with over 3000 products to choose from for Australia.
                "
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view website",
                  }}
                  authors={[
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="project #3"
                  // title="minimalist"
                  title="Listings.Dustyz.com"
                  description="Dustyz Listings is a directory listing where you could list your business, Goods & Services
                "
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view website",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor4}
                  label="project #4"
                  title="Social.Dustyz.com"
                  description="Dustyz Social media is a place where anyone can come together, chat and advertise their Services
                "
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view website",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Grid>
            </Grid>
          </MDBox>
        </Card>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default About;
