const Register=()=>{
    return(
        <div>
            <h1>Register</h1>
            <form>
                <label>Email</label>
                <input type="email" name="email" />
                <label>Password</label>
                <input type="password" name="password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register;