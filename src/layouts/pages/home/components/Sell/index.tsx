import { useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";

import "./index.css";
import BookingCard from "examples/Cards/BookingCard";

// Images
import networkImage from "assets/images/dosh/network.png";
import doshCoainImage from "assets/images/dosh/doshcoin.png";
import robotsImage from "assets/images/dosh/robots.png";

function Sell(): JSX.Element {
  const [collapse, setCollapse] = useState<number | boolean>(false);
  return (
    <MDBox mt={8}>
      <MDBox mt={2} mb={3}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={6} lg={4} mb={4}>
            <MDBox mt={3} sx={{ height: "100%" }}>
              <BookingCard
                image={robotsImage}
                header="WHAT WE SELL"
                title="TRADING SOLUTIONS"
                nature="FULLY AUTOMATED  |  BACK TESTED  |  ROBUST"
                description="<br/><h3>Your Success is Our Success!</h3>
                At Dosh Capital, we sell Trading Solutions, Bots, Memberships and you earn Dosh Coin – choose to buy or just jump aboard. <br/>
                <ul>
                  <li class='text-justify'>You can get started with 100$ and join a pool of investors. Sign-up for a Yearly Subscription plan.</li>
                  <li class='text-justify'>Your Return on Investment is 50-100% per annum.</li>
                  <li class='text-justify'>Our Bots are back tested with over 5 years of test data, fined tuned and optimized for peak performance.</li>
                  <li class='text-justify'>You can Test drive and optimize any of Our Bots through the EA Performance Dashboard and find out more.</li>
                  <li class='text-justify'>Dosh will help you setup your Account if you are new to Trading. Refer to our PDS for more information.</li>
                </ul>"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} mb={4}>
            <MDBox mt={3} sx={{ height: "100%" }}>
              <BookingCard
                image={networkImage}
                header="HOW WE EARN"
                title="NETWORK"
                nature="MULTILEVEL  |  MULTI $ BAND  |  EQUAL PLAYING FIELD"
                description="<br/>As you become a member of the Dosh Capital you become a member of our Network.<br/>
                <ul>
                  <li class='text-justify'>Earn a commission of 5% for every member you introduce as an Associate.</li>
                  <li class='text-justify'>Subject to your plan, your trading account size and the account $ value, you will be placed in the Network.</li>
                  <li class='text-justify'>For an even playing field, every member will have two members below them and every member will pay 10% of their profits to the member above in their Network.</li>
                  <li class='text-justify'>Your trading account is linked to Dosh by our preferred brokers giving you an advantage, as an IB account. Refer to our PDS for more information.</li>
                </ul>"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} mb={4}>
            <MDBox mt={3} sx={{ height: "100%" }}>
              <BookingCard
                image={doshCoainImage}
                header="HOW WE CONNECT"
                title="DO$HCOIN"
                nature="SUBSCRIPTION PLAN  |  ALGORITHM  | PERFORMANCE"
                description="<br/>As you become a member of the Dosh family and enrol into our Network you become entitled to DoshCoin.<br/>
                <ul>
                  <li class='text-justify'>Twenty percent (20%) for your Subscription will go towards Mining Cryptocurrency & DoshCoin.</li>
                  <li class='text-justify'>The Algorithm will take into account your trading $$ value, your position in the Network and the performance of you Trading account/s linked to Dosh using our Bots and create DoshCoin for you.</li>
                  <li class='text-justify'>On the Client Dashboard in your portfolio are displayed our Trading Bots, your account performance, Network position & DoshCoin earned through the inbuilt Algorithm.</li>
                  <li class='text-justify'>You can place in you Wallet or Withdraw as ‘cash’ at your discretion. Refer to our PDS for more information!</li>
                </ul>"
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Sell;
