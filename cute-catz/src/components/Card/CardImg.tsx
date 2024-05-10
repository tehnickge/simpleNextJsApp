// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Card.module.scss";

type CardImgProps = {
  cardImgData: string[];
};

export default function CardImg({cardImgData}: CardImgProps): JSX.Element {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={styles["card__images"]}
    >
      {cardImgData.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img}></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
