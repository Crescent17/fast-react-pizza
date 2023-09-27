import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";
import {useSelector} from "react-redux";
import {getUsername} from "../features/user/userSlice.js";

export default function Header() {
    const username = useSelector(getUsername)
    return <header
        className='flex items-center justify-between bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 sm:px-6'>
        <Link to={username ? '/menu' : '/'} className='tracking-widest'>Fast React Pizza Co.</Link>
        <SearchOrder/>
        <Username/>
    </header>
}