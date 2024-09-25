import GoodCardCreationForm from "../../components/GoodCardCreationForm/GoodCardCreationForm";
import GoodCardList from "../../components/GoodCardList/GoodCardList";
import "./GoodPage.css"


export default function GoodPage() {
    return (
        <div className="good_page_block">
            <GoodCardCreationForm></GoodCardCreationForm>
            <GoodCardList></GoodCardList>
        </div>
    )
}