import LoginComponent from "./pages/LoginComponent";
import LoginBackground from "./pages/LoginBackground";
import "./App.css"
import Register from "./pages/Register";
//import components here

export default function App() {
  return (
    <>
      <div className="row col-12">
        <div className="col-7 p-0">
          <LoginBackground />
        </div>
        <div className="col-5 p-0">
          <LoginComponent />
        </div>
        <div className="col-5 p-0" style={{display: 'none'}}>
          <Register />
        </div>
      </div>
    </>
  );
}
