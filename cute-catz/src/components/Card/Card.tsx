import Image from "next/image";
import styles from "./Card.module.scss";
import CardImg from "./CardImg";
import { BIPs, JazzBallThin, JazzBallBold } from "./../common/fonts";

export type CardProps = {
  info: string;
  pics: string[];
  title: string;
  id: string;
};

export default function Card(props: CardProps): JSX.Element {
  return (
    <a>
      <div className={styles.card}>
        <CardImg cardImgData={props.pics}></CardImg>
        <div className={`${styles.card__info} ${JazzBallThin.className}`}>
          <div className={styles["card__info-wrapper"]}>
            <div className={styles.card__price}>
              <label>2000p</label>
            </div>
            <div className={styles.card__category}>
              <label>СвечasdasdasиСвечasdasdasи</label>
            </div>
          </div>
          <div className={`${styles.card__title}`}>
            <label>{props.title}</label>
          </div>
        </div>
      </div>
    </a>
  );
}
