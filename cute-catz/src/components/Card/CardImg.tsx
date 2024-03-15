import { useEffect, useState } from "react";
import { CardProps } from "./Card";
import styles from "./Card.module.scss";
import { useSwipeable } from "react-swipeable";

export type CardImgProps = {
  cardImgData: CardProps;
};

export default function CardImg(props: CardImgProps): JSX.Element {
  const [switchingSize, setSwitchingSize] = useState("000%");
  const [picsCount, setPicsCount] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => setSwitchingSize((prev) => {
      let number = Number(prev[0]) > picsCount - 2 ? picsCount -1 : Number(prev[0]) + 1;
      return ((`${number}00%`));
    }),
    onSwipedRight: (eventData) => setSwitchingSize((prev) => {
      let number = Number(prev[0]) === 0 ? 0 : Number(prev[0]) - 1;
      return ((`${number}00%`));
    }),
  });

  const changeRadioSwitchHandler = (event: any) => {
    setSwitchingSize(event.target.value);
  };

  const { id, title, info, pics } = props.cardImgData;

  useEffect(() => {
    pics.length > 5 ? (setPicsCount(5)) : (setPicsCount(pics.length));
  },[])

  return (
    <div
      style={{
        position: "relative",
      }}
      {...handlers}
    >
      <div
        className={styles["card__images"]}
        style={{
          transform: `translateX(-${switchingSize})`,
        }}  
      >
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
        {[...Array(picsCount)].map((e, i) => {
          return (
            <>
                <input
                  type="radio"
                  name={id}
                  value={`${i}00%`}
                  key={i}
                  defaultChecked
                  onChange={changeRadioSwitchHandler}
                  checked={i === Number(switchingSize[0]) ? true : false}
                ></input>
            </>
          );
        })}
      </div>
    </div>
  );
}
