"use client";
import Card, { CardProps } from "./Card";
import styles from "./CardContainer.module.scss";

export type CardArrayProps = {
    cards: CardProps[];
}

export default function CardContainer(props : CardArrayProps) : JSX.Element {

    return (
    <div className={styles[`card-container`]}>
        {props.cards && props.cards.map(card => <Card 
        id={card.id}
        key={card.id}
        info={card.info}
        pics={card.pics}
        title={card.title}
         ></Card>)}
    </div>
    ) 
}