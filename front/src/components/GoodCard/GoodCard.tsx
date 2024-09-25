import { Good } from "../../utils/types"
import "./GoodCard.css"


type GoodCardProps = {
    item: Good
}

export default function GoodCard(props: GoodCardProps) {
    return (
        <div className="good_card">
            <div className="good_card__top"><span>{props.item.name}</span> - <span>{props.item.price}</span></div>
            <div className="good_card__description">{props.item.description}</div>
        </div>
    )
}