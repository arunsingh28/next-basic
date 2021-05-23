import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
            <Navbar />
            </nav>

            <main style={{padding:'10px 50px'}}>
                {children}
            </main>

            <style jsx>
                {`
                    nav{
                        background:#0f2560;
                        color:#fdc857;
                        height:50px;
                        line-height:50px;
                    }
                `}
            </style>
        </div>
    )
}

export default Layout

