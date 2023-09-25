import {Link} from "react-router-dom";

export default function Button({children, type, disabled, to}) {
    const base = `bg-yellow-400 transition-colors uppercase font-semibold text-stone-800
    inline-block tracking-wide rounded-full outline-none hover:bg-yellow-300
    duration-300 focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2
    disabled:cursor-not-allowed `

    const styles = {
        primary: base + 'py-3 px-4 md:px-6 md:py-4',
        small: base + 'py-2 px-4 sm:px-5 sm:py-2.5 text-xs'
    }

    if (to) {
        return <Link to={to} className={styles[type]}>{children}</Link>
    }
    return <button disabled={disabled} className={styles[type]}>{children}</button>
}
