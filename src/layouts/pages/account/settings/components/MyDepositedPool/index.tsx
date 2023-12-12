import React, { useContext, useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import SalesTable from 'examples/Tables/SalesTable';
import salesTableData from 'layouts/dashboards/sales/data/salesTableData';
import { DataContext } from 'context/DataContext';
import axios from 'axios';
import { formatDate } from 'utils/formateDate';
import { BASE_URL } from 'config/config';

const MyDepositedPool = () => {
    const {userInfo}=useContext(DataContext)
    const [userDepositedPool, setUserDepositedPool]=useState([])

const getUserDeposites = async()=>{
const response = await axios.get(`${BASE_URL}/api/pools/userDeposites/${userInfo?.userId}`)


if(response?.data){

    const poolInfoArray = response?.data?.map((i:any)=>{
        const newItem = {
            Pool: i?.pool?.name,
            Amount: i?.amount,
            Date:formatDate(i?.createdAt)
        }
        return newItem
    })

    setUserDepositedPool(poolInfoArray)
}
}


    useEffect(()=>{
getUserDeposites()
    },[])
    return (
        <Card id="myDeposite" sx={{ overflow: "visible" }}>
        <MDBox p={3}>
          <MDTypography variant="h5">My Deposited Pool</MDTypography>
        </MDBox>
       
  
       <Box sx={{
        pb:3, 
        px:3
       }}>
      <SalesTable title="Pools" rows={userDepositedPool} />
      
       </Box>
        
      </Card>
    );
};

export default MyDepositedPool;