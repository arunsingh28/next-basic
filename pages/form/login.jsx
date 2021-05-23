
const Login = (props) => {
    return (
        <>
            <form action="/api/login" method="post">
                <input type="text" placeholder="username" name="username"/><br/>
                <input type="password" placeholder="Password" name="password"/><br/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login
