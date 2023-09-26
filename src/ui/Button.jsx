import {Link} from "react-router-dom";

export default function Button({children, type, disabled, to, onClick}) {
    const base = `text-sm bg-yellow-400 transition-colors uppercase font-semibold text-stone-800
    inline-block tracking-wide rounded-full outline-none hover:bg-yellow-300
    duration-300 focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2
    disabled:cursor-not-allowed `

    const styles = {
        primary: base + 'py-3 px-4 md:px-6 md:py-4',
        small: base + 'py-2 px-4 sm:px-5 sm:py-2.5 text-xs',
        secondary: `text-sm border-2 border-stone-300 transition-colors uppercase font-semibold text-stone-400
    inline-block tracking-wide rounded-full outline-none hover:bg-stone-300 hover:text-stone-800
    duration-300 focus:ring focus:ring-stone-200 focus:text-stone-800 focus:bg-stone-300 focus:ring-offset-2
    disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5`
    }

    if (to) {
        return <Link to={to} className={styles[type]}>{children}</Link>
    }

    if (onClick) return <button onClick={onClick} disabled={disabled} className={styles[type]}>{children}</button>
    return <button disabled={disabled} className={styles[type]}>{children}</button>
}
