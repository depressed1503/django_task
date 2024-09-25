import { Axios } from "../utils/axiosConfig"
import { Good } from "../utils/types"


export async function fetchGoods() {
    return (await Axios.get<Good[]>("goods/")).data
}

export async function postGood(good: Good) {
    return (await Axios.post<Good>("goods/", good)).data
}