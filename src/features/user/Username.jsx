import {useSelector} from "react-redux";

export default function Username() {
    const username = useSelector(state => state.user.username)
    if (!username) return null
    return <p className='text-sm font-semibold hidden md:block'>
        {username}
    </p>
}