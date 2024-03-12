import { useState } from "react";
import { CardProps } from "./Card";
import styles from "./Card.module.scss";

export type CardImgProps = {
  cardImgData: CardProps;
};

export default function CardImg(props: CardImgProps): JSX.Element {
  const [switchingSize, setSwitchingSize] = useState("0");

  const changeRadioSwitchHandler = (event : any) => {
    console.log(event.target.value);
    setSwitchingSize(event.target.value);
  }

  const { id, title, info, pics } = props.cardImgData;
  let picsCount: number;
  
  pics.length > 5 ? (picsCount = 5) : (picsCount = pics.length);

  return (
    <div style={{
      position: "relative",
    }}>
    <div className={styles["card__images"]} style={{
                transform: `translateX(-${switchingSize})`,
              }}>
      {pics &&
        pics.map((image: string) => {
          return (
            <>
              <img key={image} src={image} alt={title}></img>
            </>
          );
        })}
    </div>
    <div className={styles["card__switchers"]}>
          {[...Array(picsCount)].map((e,i) => {
            return (
              <>
                { i === 0 ? (<input type="radio" name={id} value={`${i}00%`} key={i} defaultChecked onChange={changeRadioSwitchHandler}></input> ) : (
                <input type="radio" key={i} name={id} onChange={changeRadioSwitchHandler} value={`${i}00%`}></input>  )}
              </>
            );
          })}
      </div>
    </div>
  );
}
