import { useQuery } from "@tanstack/react-query"
import "./GoodCardList.css"
import { fetchGoods } from "../../api/good"
import GoodCard from "../GoodCard/GoodCard"


export default function GoodCardList() {
    const { data, status } = useQuery({
        queryKey: ["goods"],
        queryFn: fetchGoods
    })

    if (status === "pending") {
        return (
            <>Загрузка данных товаров с сервера...</>
        )
    }

    if (status === "error") {
        return (
            <>Ошибка при загрузку данных товаров с сервера!</>
        )
    }

    return (
        <div className="good_card_list">
            {data.map((good, index) => {
                return (
                    <GoodCard key={`good_${index}`} item={good}/>
                )
            })}
        </div>
    )
}