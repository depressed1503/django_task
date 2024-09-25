import { useMutation, useQueryClient } from "@tanstack/react-query"
import "./GoodCardCreationForm.css"
import { postGood } from "../../api/good"
import { Good } from "../../utils/types"
import { useState } from "react"


export default function GoodCardCreationForm() {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: ({ item }: { item: Good}) => postGood(item),
        mutationKey: ["post_good"],
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["goods"]})
    })

    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    
    return (
        <div className="good_card_creation_form">
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <input type="number" value={price} onChange={(e) => {setPrice(Number(e.target.value))}} />
            <button className="create_good_button" onClick={() => mutation.mutate({item: {name,description, price}})}>Создать товар</button>
        </div>
    )
}