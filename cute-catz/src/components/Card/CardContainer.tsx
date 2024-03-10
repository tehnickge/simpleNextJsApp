import Card, { CardProps } from "./Card";


export type CardArrayProps = {
    cards: Array<CardProps>;
}

export default function CardContainer(props : CardArrayProps) : JSX.Element {

    return (
    <div>
        {props.cards.map(card => <Card 
        id={card.id}
        key={card.id}
        info={card.info}
        pics={card.pics}
        title={card.title}
         ></Card>)}
    </div>
    ) 
}