import "../App.css"

export default function LoginComponent() {
  return (
    <>
      <div className="d-flex login-back vh-100 align-items-center">
        <div className="card d-flex col-10 offset-1 login-card-back">
          <div className="card-header">
            <h3 className="d-flex justify-content-center">Login</h3>
          </div>
          <div className="card-body">
            <form > {/* Add 'action="" method=""' later when backend is in development! */}
              <label htmlFor="txtUsername" className="form-label">Username</label>
              <input id="txtUsername" type="email" className="form-control" placeholder="BlurryBackground" />
              <label htmlFor="txtPassword" className="form-label">Password</label>
              <input id="txtPassword" type="password" className="form-control" placeholder="BobbyDropTables!" />
              <button className="btn col-6 offset-3 mt-2 btn-nexus-theme text-white" type="submit"><strong>Login</strong></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
