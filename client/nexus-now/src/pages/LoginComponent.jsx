import "../App.css";

export default function LoginComponent() {
  return (
    <>
      <div className="d-flex login-back vh-100 justify-content-center col-12 align-items-center direction">
        <div>
          <h1 className="txt-font txt-color txt-lg"><strong>Sign in!</strong></h1>
        </div>
        <div className="col-7 mt-3">
          <form>
            <div className="form__group field col-12">
              <input id="txtUsername" type="text" className="form-control-lg mb-3 col-12 form__field" placeholder="Username" aria-label="username" />
              <label for="txtUsername" className="form__label">Username</label>
            </div>
            <div className="form__group field col-12">
              <input id="txtPassword" type="password" className="form-control-lg col-12 form__field" placeholder="Password" aria-label="password" />
              <label for="txtPassword" className="form__label">Password</label>
            </div>
            <a href="" className="link-forgot txt-font txt-color txt-sm mt-3">Forgot Password?</a>
            <button className="btn btn-lg btn-nexus-main-theme col-12 mt-5 txt-font text-white" type="button"><strong>Login</strong></button>
            <button className="btn btn-lg btn-secondary col-12 mt-5 txt-font text-white" type="button"><strong>Register an account</strong></button>
          </form>
        </div>
      </div>
    </>
  );
}
