import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SearchOrder() {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!query) return
        navigate(`/order/${query}`)
        setQuery('')
    }

    return <form onSubmit={handleSubmit}>
        <input placeholder='Search order #' value={query} className='rounded-full px-4 py-2 text-sm
        bg-yellow-100 placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-yellow-500' onChange={e => setQuery(e.target.value)}/>
    </form>
}