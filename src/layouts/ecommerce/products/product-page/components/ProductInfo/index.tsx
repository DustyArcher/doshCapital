// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Autocomplete from "@mui/material/Autocomplete";
// stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";
import MDInput from "components/MDInput";

import CheckoutForm from "./CheckoutForm";
import { useState } from "react";

function ProductInfo({ product, productDatas }: any): JSX.Element {
  const public_key = "pk_test_Pq2BDpPTNhfsFHllBvY2GV6700TYOgJ1cD";
  const secret_key = "sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj";
  const stripePromise = loadStripe(public_key);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("White");
  const [material, setMaterial] = useState("steel");

  return (
    <MDBox>
      <MDBox mb={1}>
        <MDTypography variant="h3" fontWeight="bold">
          {product}
        </MDTypography>
      </MDBox>
      <MDTypography variant="h4" color="text">
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star_half</Icon>
      </MDTypography>
      <MDBox mt={1}>
        <MDTypography variant="h6" fontWeight="medium">
          Price
        </MDTypography>
      </MDBox>
      <MDBox mb={1}>
        <MDTypography variant="h5" fontWeight="medium">
          ${productDatas?.price}
        </MDTypography>
      </MDBox>
      <MDBadge variant="contained" color="success" badgeContent="in stock" container />
      <MDBox mt={3} mb={1} ml={0.5}>
        <MDTypography variant="button" fontWeight="regular" color="text">
          Description
        </MDTypography>
      </MDBox>
      <MDBox component="ul" m={0} pl={4} mb={2}>
        <MDBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <MDTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            The most beautiful curves of this swivel stool adds an elegant touch to any environment
          </MDTypography>
        </MDBox>
        <MDBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <MDTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Memory swivel seat returns to original seat position
          </MDTypography>
        </MDBox>
        <MDBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <MDTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Comfortable integrated layered chair seat cushion design
          </MDTypography>
        </MDBox>
        <MDBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <MDTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Fully assembled! No assembly required
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <MDBox mb={1.5} lineHeight={0} display="inline-block">
              <MDTypography component="label" variant="button" color="text" fontWeight="regular">
                Frame Material
              </MDTypography>
            </MDBox>
            <Autocomplete
              defaultValue={material}
              options={["Aluminium", "Carbon", "Steel", "Wood"]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
              onChange={(event, newValue) => setMaterial(newValue)}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <MDBox mb={1.5} lineHeight={0} display="inline-block">
              <MDTypography component="label" variant="button" color="text" fontWeight="regular">
                Color
              </MDTypography>
            </MDBox>
            <Autocomplete
              defaultValue={color}
              options={["Black", "Blue", "Grey", "Pink", "Red", "White"]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
              onChange={(event, newValue) => setColor(newValue)}
            />
          </Grid>
          <Grid item xs={12} lg={2}>
            <MDBox mb={1.5} lineHeight={0} display="inline-block">
              <MDTypography component="label" variant="button" color="text" fontWeight="regular">
                Quantity
              </MDTypography>
            </MDBox>
            <MDInput
              inputProps={{ type: "number" }}
              defaultValue={quantity}
              variant="standard"
              onChange={(e: any) => setQuantity(e.target.value)}
            />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={3}>
        <Grid item xs={12} lg={5} container>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              product={product}
              oldprice={productDatas?.price}
              quantity={quantity}
              color={color}
              material={material}
            />
          </Elements>
          {/* <MDButton variant="gradient" color="info" fullWidth>
            pay now
          </MDButton> */}
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default ProductInfo;
