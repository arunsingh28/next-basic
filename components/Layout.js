import style from '../styles/Navbar/layout.module.css'

import Navbar from './Navbar'


const Layout = ({ children }) => {
    return (
        <div>
            <nav className={style.navbar}>
            <Navbar />
            </nav>

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout

