import { useState } from "react";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";
import { Theme } from "@mui/material/styles";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//  React TS exampless
import HomeNavbarDropdown from "examples/Navbars/HomeNavbar/HomeNavbarDropdown";
import { Icon, IconButton } from "@mui/material";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { navbarIconButton } from "../DashboardNavbar/styles";
import { grey } from "@mui/material/colors";
import { setOpenConfigurator, useMaterialUIController } from "../../../context";

// Declaring props types for HomeNavbarMobile
interface Props {
  routes: any;
  open: any;
}

function HomeNavbarMobile({ routes, open }: Props): JSX.Element {
  const [collapse, setCollapse] = useState<string | boolean>("");

  const handleSetCollapse = (name: string) =>
    collapse === name ? setCollapse(false) : setCollapse(name);

  const [controller, dispatch] = useMaterialUIController();
  const { openConfigurator } = controller;

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  const renderNavbarItems = routes.map(
    ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }: any) => (
      <HomeNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        collapse={Boolean(navCollapse)}
      >
        <MDBox sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
          {routeCollapses &&
            routeCollapses.map((item: any) => (
              <MDBox key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <MDTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                    >
                      {item.name}
                    </MDTypography>
                    {item.collapse.map((el: any) => (
                      <MDTypography
                        key={el.name}
                        component={el.route ? Link : MuiLink}
                        to={el.route ? el.route : ""}
                        href={el.href ? el.href : ""}
                        target={el.href ? "_blank" : ""}
                        rel={el.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }: Theme) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {el.name}
                      </MDTypography>
                    ))}
                  </>
                ) : (
                  <MDBox
                    key={item.key}
                    display="block"
                    component={item.route ? Link : MuiLink}
                    to={item.route ? item.route : ""}
                    href={item.href ? item.href : ""}
                    target={item.href ? "_blank" : ""}
                    rel={item.href ? "noreferrer" : "noreferrer"}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",
                      py: 1,
                      px: 1.625,

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: dark.main,

                        "& *": {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    <MDTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </MDTypography>
                    <MDTypography
                      display="block"
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={{ transition: "all 300ms linear" }}
                    >
                      {item.description}
                    </MDTypography>
                  </MDBox>
                )}
              </MDBox>
            ))}
        </MDBox>
      </HomeNavbarDropdown>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MDBox
        pl={8}
        sx={({ palette: { grey, dark } }: Theme) => ({
          position: "absolute",
          left: 0,
          top: "70px",
          background: dark.main,
          width: "100%",
        })}
      >
        <MDBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
          {renderNavbarItems}
        </MDBox>
        <MDBox pr={1}>
          <MDInput label="Search here" />
        </MDBox>
        <IconButton sx={navbarIconButton} size="small" disableRipple>
          <Icon sx={{ color: grey[50] }}>account_circle</Icon>
        </IconButton>
        <IconButton
          onClick={handleConfiguratorOpen}
          sx={navbarIconButton}
          size="small"
          disableRipple
        >
          <Icon sx={{ color: grey[50] }}>settings</Icon>
        </IconButton>
        <IconButton sx={navbarIconButton} size="small" disableRipple>
          <Icon sx={{ color: grey[50] }}>notifications</Icon>
        </IconButton>
      </MDBox>
    </Collapse>
  );
}

export default HomeNavbarMobile;
