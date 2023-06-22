import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Card } from "@mui/material";
import MDBox from "../../../../../components/MDBox";
import Bot from "./Bot";
import MDTypography from "../../../../../components/MDTypography";
import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";
import { botsData } from "data/bots";

const Bots = () => {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;

  const initalData = botsData;

  const [bots, setBots] = useState([]);

  useEffect(() => {
    if (darkMode) {
      setBots(initalData.filter((bot) => bot.theme === "dark"));
    } else {
      setBots(initalData.filter((bot) => bot.theme === "light"));
    }
  }, [darkMode]);

  return (
    <div>
      <Card>
        <MDTypography variant="h2" align="center" fontWeight="medium" pt={5}>
          Our Bots
        </MDTypography>
        <MDTypography variant="subtitle1" align="center">
          Our Bots are very good.
        </MDTypography>
        <MDBox px={5} my={5}>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <MDBox sx={{ margin: "1rem" }}>
              {bots.map((bot, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Bot title={bot.title} subtitle={bot.subtitle} image={bot.image} />
                  </SwiperSlide>
                );
              })}
            </MDBox>
          </Swiper>
        </MDBox>
      </Card>
    </div>
  );
};

export default Bots;
