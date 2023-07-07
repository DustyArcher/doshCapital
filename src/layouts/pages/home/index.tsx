import { useState } from "react";
import "./index.css";

// @mui material components
import Container from "@mui/material/Container";

//  React TS examples components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Pricing page components
import Header from "layouts/pages/home/components/Header";
import Footer from "layouts/pages/home/components/Footer";
import Sell from "./components/Sell";
import ContactInfo from "./components/ContactInfo";
import Team from "./components/Team";
import Bots from "./components/Bots";
import Card from "@mui/material/Card";
import Configurator from "../../../examples/Configurator";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useMaterialUIController } from "context";
// import useMediaQuery from '@mui/material/useMediaQuery';

function HomePage(): JSX.Element {
  const [tabValue, setTabValue] = useState<number>(0);
  const [prices, setPrices] = useState<string[]>(["59", "89", "99"]);
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  const handleSetTabValue = (event: any, newValue: any) => {
    setTabValue(newValue);

    if (event.currentTarget.id === "annual") {
      setPrices(["119", "159", "399"]);
    } else {
      setPrices(["59", "89", "99"]);
    }
  };
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <PageLayout>
      <Header tabValue={tabValue} tabHandler={handleSetTabValue}>
        <></>
      </Header>
      <Box
        sx={{
          padding: isMobile ? "0 10px" : "0 40px",
          paddingTop: "180px",
          background: darkMode ? "#1A2035!important" : "#F0F2F5!important",
        }}
      >
        <Card sx={{ mt: -30, px: { lg: 5 } }}>
          <Container sx={{ px: { xs: 0 } }}>
            <Sell />
          </Container>
        </Card>
        <Container sx={{ px: { xs: 0 } }}>
          <Team />
        </Container>
        <ContactInfo />
      </Box>
      <Footer />
      <Configurator />
    </PageLayout>
  );
}

export default HomePage;
