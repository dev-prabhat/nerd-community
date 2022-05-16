import "./login.css"

export const Login = () => {
    return(
        <main>
            <section>
                <form className="login-form border-radius-xs padding-sm">
                    <h1 className="head-lg text-center text-gray">Welcome to <span className="highlight">Nerdify</span> Social</h1>
                    <label class="form-label">Email Address:</label>
                    <input
                    type="email"
                    class="form-field border-radius-xs padding-xs"
                    placeholder="name@gmail.com"
                    required
                    />

                    <label class="form-label">Password: </label>
                    <input
                    type="password"
                    class="form-field border-radius-xs padding-xs"
                    placeholder="password"
                    required
                    />
                    <div className="option-container padding-xs">
                        <div className="remember-me__wrapper">
                            <input type="checkbox" id="remember-md"/>
                            <label className="padding-xs" htmlFor="remember-md">Remember me</label>
                        </div>
                        <p className="test-credentials highlight font-weight-semibold">Test User Credentials</p>
                    </div>
                    <button className="btn btn-primary d-100 text-sm border-radius-xs">Login</button>
                </form>
            </section>
        </main>
    )
}