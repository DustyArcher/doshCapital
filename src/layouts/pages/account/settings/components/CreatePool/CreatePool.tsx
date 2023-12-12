import React,{useContext, useState} from 'react';
// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from '@mui/material/Typography';

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

// Data
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import { DataContext } from 'context/DataContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from 'config/config';

const CreatePool = () => {

    const {userInfo}=useContext(DataContext)
    const [depositedAmount, setDepositedAmount]=useState(null)

    const [poolAmount, setPoolAmount]=useState(null)


    const navigate = useNavigate()

    const handleMaxPeopleChange = (e:any)=>{
      if(!e.target.value){
        setDepositedAmount(null)
        return
      }
if(poolAmount){
  const maxPeople= Number(e.target.value);
  const amountOfDeposite = (poolAmount/maxPeople).toFixed(2)
  setDepositedAmount(amountOfDeposite)

}
    }


    const handleSubmit=async(e:any)=>{
        e.preventDefault()

        const form= e.target;

        const name= form.name.value;
        const amount= Number(form.amount.value);
        const maxNumberPeople= Number(form.maxNumberPeople.value);
        const creatorInfo = userInfo?.userId

        const data = {
            creatorInfo, name,amount, maxNumberPeople
        }

        const res = await axios.post(`${BASE_URL}/api/pools/add`, data)
        navigate("/dashboards/portfolio")
        // const 
    }
    return (
        <Card id="create-pool" sx={{ overflow: "visible",  }}>
      <MDBox p={3}>
        <MDTypography variant="h5">Create Pool</MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3} onSubmit={handleSubmit}>
         <MDBox mb={2}>
              <MDInput type="text" label="Pool Name" fullWidth name="name" required />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="number" label="Pool Amount" fullWidth name="amount" required onChange={(e:any)=>setPoolAmount(Number(e.target.value))}/>
            </MDBox>
            {/* <MDBox mb={2}>
              <MDInput type="text" label="Pool Amount" fullWidth name="" required />
            </MDBox> */}
            <MDBox mb={2}>
              <MDInput type="number" label="Max Number People" fullWidth name="maxNumberPeople" required onChange={handleMaxPeopleChange}/>
              {depositedAmount&&<Typography sx={{textAlign:"end", fontSize:"12px", color:"green"}}>Per person can deposite ${depositedAmount}</Typography>}
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton size="small"  variant="gradient" color="info" fullWidth type="submit" >
                Create
              </MDButton>
            </MDBox>
      </MDBox>
    </Card>
    );
};

export default CreatePool;


