import style from '../styles/Layout/layout.module.css'

import Navbar from './Navbar'


const Layout = ({ children }) => {
    return (
        <div>
            <nav className={style.navbar}>
            <Navbar />
            </nav>

            <main className={style.container}>
                {children}
            </main>
            
        </div>
    )
}

export default Layout

