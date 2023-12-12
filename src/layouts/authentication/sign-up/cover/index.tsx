// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

import {  useContext, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import axios from "axios";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { DataContext } from "context/DataContext";
import { BASE_URL } from "config/config";

function Cover(): JSX.Element {
  const action = {
    type: "internal",
    route: "/authentication/sign-in/cover",
    label: "sign in",
    color: "info",
  };

  const {userInfo,setUserInfo}=useContext(DataContext)

  const [errorMessage, setErrorMessage]=useState<string>("")
  const [isLoading,setIsLoading]=useState<boolean>(false)



  const navigate = useNavigate();

  const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true)
    setErrorMessage("")
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = {
      name,
      email,
      password,
    };

    try {

      if (!passwordRegex.test(password)) {
        setErrorMessage(
          "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long."
        );
        setIsLoading(false);
        return;
      }
      else{
        const res = await axios.post(`${BASE_URL}/api/users/signup`, data);

        if (res?.data?.status === 200) {
          const userDetails = {
            name:res?.data?.user?.name,
            email: res?.data?.user?.email,
            userId: res?.data?.user?._id,
            accessToken: res?.data?.accessToken
          }
          
          setErrorMessage("")
          setIsLoading(false)
          
          setUserInfo(userDetails)
          localStorage.setItem("doshToken", JSON.stringify(userDetails));
          navigate("/");
        }
      } 
      
    }
    catch (error:any) {
      if (error.response) {
        setErrorMessage(`${error.response.data?.message}`);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error:', error);
      setIsLoading(false)
    }
   
  };

  return (
    <CoverLayout action={action} image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput type="text" label="Name" variant="standard" fullWidth name="name" required/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth name="email" required />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                name="password"
                required
                
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox>
              <MDTypography variant="button" color="error">{errorMessage}</MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit" disabled={isLoading}>
                sign up
              </MDButton>
            </MDBox>
          
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
