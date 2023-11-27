import { ReactNode } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useMaterialUIController } from "context";

// Declaring props types for BookingCard
interface Props {
  image: string;
  title: string;
  description: string;
  action?: ReactNode | boolean;
  [key: string]: any;
}

function BookingCard({ image, title, header, nature, description, action }: Props): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card
      sx={{
        height: "100%",
        mx: { xs: 4, lg: 0 },
      }}
    >
      <MDBox
        position="relative"
        borderRadius="lg"
        mt={-3}
        mx={2}
        className="card-header"
        sx={{ transition: "transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)" }}
      >
        <MDBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="280px"
          position="relative"
          zIndex={1}
        />
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="0"
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MDBox>
      <MDBox textAlign="left" pt={3} px={3}>
        {/* <MDBox display="flex" justifyContent="center" alignItems="center" mt={action ? -8 : -4.25}>
          {action}
        </MDBox> */}
        <MDTypography
          variant="body2"
          align="center"
          fontWeight="regular"
          fontSize="10px"
          sx={{ mt: 4 }}
        >
          {header}
        </MDTypography>
        <MDTypography
          variant="h3"
          align="center"
          fontWeight="regular"
          style={{ fontFamily: "felix-titling-regular" }}
        >
          {title}
        </MDTypography>
        <MDTypography sx={{ fontSize: ".7rem" }} align="center" fontWeight="regular" fontSize="8px">
          {nature}
        </MDTypography>
        <MDBox
          style={{ fontFamily: "footlight-mt-light-regular" }}
          sx={{ fontSize: "1rem" }}
          px={2}
          pb={4}
          color={darkMode ? "white" : "black"}
          dangerouslySetInnerHTML={{ __html: description }}
        ></MDBox>
        {/* <MDTypography variant="body2" color="text" sx={{ mt: 1.5, mb: 1 }}>
          {description}
        </MDTypography> */}
      </MDBox>
    </Card>
  );
}

// Declaring default props for BookingCard
BookingCard.defaultProps = {
  action: false,
};

export default BookingCard;
