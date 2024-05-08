"use client";
import Card, { CardProps } from "./Card";
import styles from "./CardContainer.module.scss";

export type CardArrayProps = {
    cards: CardProps[];
}

export default function CardContainer({cards} : CardArrayProps) : JSX.Element {  
    return (
    <div className={styles[`card-container`]}>
        {cards && cards.map(({id,info,pics,title}) => <Card 
        id={id}
        key={id}
        info={info}
        pics={pics}
        title={title}
         ></Card>)}
    </div>
    ) 
}