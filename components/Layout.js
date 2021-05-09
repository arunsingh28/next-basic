import style from '../styles/Navbar/navbar.module.css'

const Navbar = ({ children }) => {
    return (
        <div>
            <nav className={style.navbar}>
            <h1>Navbar</h1>
            </nav>

            <main>
                {children}
            </main>
        </div>
    )
}

export default Navbar
