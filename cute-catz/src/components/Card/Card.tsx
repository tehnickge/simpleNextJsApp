import Image from "next/image"
import styles from "./Card.module.scss"

export type CardProps = {
    info : string,
    pics : string[],
    title : string,
    id : string,
}

export default function Card(props : CardProps) : JSX.Element {


    return (
        <div className={styles.card}>
            <div className={styles[`card__images`]}>
                {props.pics && props.pics.map((pic) => {
                        return (<image 
                            key={pic}
                            href={pic} 
                            ></image>)
                    } 
                )}
            </div>
            <div>
                <label>{props.title}</label>
            </div>
        </div>
    )
}