import style from '../styles/Layout/global.module.scss'

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

