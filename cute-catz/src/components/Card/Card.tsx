import Image from "next/image"
import styles from "./Card.module.scss"
import CardImg from "./CardImg"

export type CardProps = {
    info : string,
    pics : string[],
    title : string,
    id : string,
}

export default function Card(props : CardProps) : JSX.Element {


    return (
        <div className={styles.card}>
                <CardImg cardImgData={props}></CardImg>
            <div className={styles.card__info}>
                <label>{props.title}</label>
            </div>
        </div>
    )
}