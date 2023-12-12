import React,{useContext, useEffect, useState} from 'react';
// @material-ui core components
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from 'components/Payment/PaymentForm';
import { Typography } from '@mui/material';
import { BASE_URL, STRIP_PK } from 'config/config';

const Deposite = () => {

    const {userInfo}=useContext(DataContext)


    // const stripePromise = loadStripe("pk_test_51NFZaOLLDUmTZxUmkDuDcasoN5JOWe1Q4aPJXUqqURoA9fd2cS4Vcx7rooYsmfivbLhojg1vM1uzegRpZ7MNl52700t9DowwUF");
    const stripePromise = loadStripe(STRIP_PK);


    const [allPools, setAllPools]=useState([])
    const [selectPoolName, setSelectPoolName] = useState('');
    const[selectedPoolInfo, setSelectedPoolInfo]=useState<any>(null)
    const [selectedAmount, setSelectedAmount]=useState<any>(null)



  const handleChange = (event: SelectChangeEvent) => {
    setSelectPoolName(event.target.value as string);

    const filteredPool = allPools?.find(i=>i.name===event.target.value)
    setSelectedPoolInfo(filteredPool)
    const amount = (filteredPool?.amount/filteredPool?.maxNumberPeople).toFixed(2)
    setSelectedAmount(amount)

  };

    const navigate = useNavigate()


  

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleSubmit=async()=>{

    const amount = selectedAmount;
    const depositor= userInfo?.userId
    const pool= selectedPoolInfo?._id


        const data = {
          depositor,
          pool,
          amount, 
        }

        const res = await axios.post(`${BASE_URL}/api/deposite/add`, data)
        if(res?.data?.status===200){
          navigate("/dashboards/portfolio")
        }
        console.log(res,"ress")
        
    }

    const getAllPools = async()=>{
        const res = await axios.get(`${BASE_URL}/api/pools`)
        setAllPools(res?.data)
    }
  

  

    useEffect(()=>{
        getAllPools()
    },[])



    return (
       <>
        <Card id="deposite" sx={{ overflow: "visible" }}>
      <MDBox p={3}>
        <MDTypography variant="h5">Deposite</MDTypography>
      </MDBox>
      {/* <MDBox component="form" pb={3} px={3} onSubmit={handleSubmit}> */}

     <Box sx={{
      pb:3, 
      px:3
     }}>
     <MDBox mb={2}>
    <FormControl fullWidth  sx={{height:"45px"}}>
        <InputLabel id="demo-simple-select-label">Select Pool</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectPoolName}
            label="Age"
            sx={{height:"100%"}}
            onChange={handleChange}
  >
    {allPools?.map((i,idx)=><MenuItem key={idx} value={i?.name} >{i?.name}</MenuItem>)}
            
        </Select>
            </FormControl>
            </MDBox>
            <MDBox mb={2}>
            <TextField
            fullWidth
            id="outlined-read-only-input"
            label=""
            value={selectedAmount?`${selectedAmount} $`:""}
          InputProps={{
            readOnly: true,
          }}
        />
            </MDBox>
           
           
            <MDBox mt={4} mb={1}>
              <MDButton size="small"  variant="gradient" color="info" fullWidth type="button" onClick={handleClickOpen} disabled={!selectedPoolInfo}>
                Deposite
              </MDButton>
            </MDBox>
     </Box>
      {/* </MDBox> */}
    </Card>

        <Dialog open={open} onClose={handleClose} >
          <Box sx={{backgroundColor:"#202940"}}>
          <DialogTitle>Deposite</DialogTitle>
          <DialogContent>
            <Typography>Pool: {selectPoolName}</Typography>
            <Typography sx={{mb:1}}>Amount: ${selectedAmount}</Typography>
            <Box sx={{border:"1px solid blue", p:2, borderRadius:"5px"}}>
                <Elements stripe={stripePromise}>
                    <PaymentForm amount={selectedAmount} userInfo={userInfo} handleSubmit={handleSubmit}/>
                </Elements>
            </Box>
          </DialogContent>
          </Box>
          
         
        </Dialog> 
       </>
    );
};

export default Deposite;


