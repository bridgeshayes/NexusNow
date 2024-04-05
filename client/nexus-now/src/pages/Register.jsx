import "../App.css";

export default function Register() {
    return (
        <div className="d-flex login-back vh-100 justify-content-center col-12 align-items-center direction">
            <div>
                <h1 className="txt-font txt-color txt-lg"><strong>Register now!</strong></h1>
            </div>
            <div className="col-7 mt-3">
                <form>
                    <div className="form__group field col-12">
                        <input id="txtFirstName" type="text" className="form-control-lg mb-3 col-12 form__field" placeholder="First Name" aria-label="First Name" />
                        <label for="txtFirstName" className="form__label">First Name</label>
                    </div>
                    <div className="form__group field col-12">
                        <input id="txtLastName" type="text" className="form-control-lg mb-3 col-12 form__field" placeholder="Last Name" aria-label="Last Name" />
                        <label for="txtLastName" className="form__label">Last Name</label>
                    </div>
                    <div className="form__group field col-12">
                        <input id="txtEmail" type="text" className="form-control-lg mb-3 col-12 form__field" placeholder="Email" aria-label="email" />
                        <label for="txtEmail" className="form__label">Email</label>
                    </div>
                    <div className="form__group field col-12">
                        <input id="txtPassword" type="password" className="form-control-lg col-12 form__field" placeholder="Password" aria-label="password" />
                        <label for="txtPassword" className="form__label">Password</label>
                    </div>
                    <a href="" className="link-forgot txt-font txt-color txt-sm mt-3">Forgot Password?</a>
                    <button className="btn btn-lg btn-nexus-theme col-12 mt-5 txt-font text-white" type="button"><strong>Login</strong></button>
                </form>
            </div>
        </div>
    )
}