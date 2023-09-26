import Button from "../../ui/Button.jsx";
import {deleteItem} from "./cartSlice.js";
import {useDispatch} from "react-redux";

export default function DeleteItem({children, pizzaId}) {
    const dispatch = useDispatch()
    
    return <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>{children}</Button>
}