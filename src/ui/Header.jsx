import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

export default function Header() {
    return <header className='flex items-center justify-between bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 sm:px-6'>
        <Link to='/menu' className='tracking-widest'>Fast React Pizza Co.</Link>
        <SearchOrder/>
        <Username/>
    </header>
}