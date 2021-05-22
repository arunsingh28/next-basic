import style from '../styles/Navbar/navbar.module.css'

import Link from 'next/link'


const Navbar = () => {
    return (
        <div className={style.container}>
            <h1>Next.js</h1>
            <div className={style.div}>
                <ul className={style.ul}>
                    <li className={style.li}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={style.li}>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar
