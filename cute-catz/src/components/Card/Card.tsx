import Image from "next/image"
import styles from "./Card.module.scss"

export interface CardProps {
    info : string,
    pics : string[],
    title : string,
    id : string,
}

export default function Card(props : CardProps) : JSX.Element {


    return (
        <div className={styles.card}>
            <div>
                {props.pics && props.pics.map((pic) => {
                        return (<Image key={pic} src={pic} height={500} width={500} alt={props.info}></Image>)
                    } 
                )}
            </div>
            <div>
                <label>{props.title}</label>
            </div>
        </div>
    )
}