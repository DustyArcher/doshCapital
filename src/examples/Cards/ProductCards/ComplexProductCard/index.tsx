/* eslint-disable no-unused-vars */

import { ReactNode, useContext } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { useMaterialUIController } from "context";
import { dark } from "@mui/material/styles/createPalette";
import { Theme } from "@mui/material/styles";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataContext";

// Declaring prop types for the ComplexProjectCard
interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
  image: string;
  title: string;
  dateTime?: string;
  description: ReactNode;
  members?: string[];
  dropdown?: {
    action?: (...arg: any) => void;
    menu?: ReactNode;
  };
  [key: string]: any;
}

// Custom styles for ComplexProjectCard
function ComplexProductCard({
  color,
  image,
  title,
  dateTime,
  description,
  members,
  dropdown,
}: Props): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { setProductDatas } = useContext(DataContext);

  return (
    <Card sx={{ maxWidth: "20rem" }}>
      <MDBox p={2}>
        <MDBox display="flex" flexDirection="column" alignItems="center">
          <MDBox
            component="img"
            src={image}
            alt={title}
            width="100%"
            height="auto"
            position="relative"
            zIndex={1}
            mt={-5}
          />
          <MDBox lineHeight={0} mt={-1}>
            <MDTypography sx={{ fontSize: "1.6rem" }} textTransform="capitalize">
              {title}
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox my={1} lineHeight={1} px={2}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox display="flex" alignItems="center" justifyContent="space-between" mt={2} px={1}>
          <MDButton variant="outlined" color="info" size="small" sx={{ padding: ".5rem 1.2rem" }}>
            Test Drive
            <Icon sx={{ marginLeft: ".3rem" }}>query_stats</Icon>
          </MDButton>
          <MDBox>
            <MDTypography variant="subtitle2" fontWeight="bold" display="flex" alignItems="center">
              <span style={{ marginRight: "-5px" }}>⭐</span>
              <span style={{ marginRight: "-5px" }}>⭐</span>
              <span style={{ marginRight: "-5px" }}>⭐</span>
              <span style={{ marginRight: "-5px" }}>⭐</span>
              <span style={{ marginRight: "-5px" }}>⭐</span>
              <span style={{ paddingLeft: ".4rem" }}>5</span>
            </MDTypography>
          </MDBox>
        </MDBox>

        <MDBox
          display="flex"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          px={1}
        >
          <Link to={`/ecommerce/products/product-page/${title}`}>
            <MDButton
              variant="contained"
              color="info"
              size="small"
              sx={{ padding: ".5rem 1.9rem" }}
              onClick={() => setProductDatas({ image, title, description, price: "1000" })}
            >
              Buy: $1000
            </MDButton>
          </Link>
          <MDButton variant="contained" color="info" size="small" sx={{ padding: ".5rem 1.2rem" }}>
            Rent: $200/M
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Declaring default props for ComplexProductCard
ComplexProductCard.defaultProps = {
  color: "dark",
  dateTime: "",
  members: [],
  dropdown: false,
};

export default ComplexProductCard;
