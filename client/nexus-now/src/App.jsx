import LoginComponent from "./pages/LoginComponent";
import img from "./assets/network-bg.jpg"
import "./App.css"
import { ReactDOM } from "react-dom";
//import components here

function App() {
  return (
    <>
      <body className="vh-100 hero-image" style={{backgroundImage: `url(${img})`}}>
        <div className="col-5 offset-7">
          <LoginComponent />
        </div>
      </body>
    </>
  );
}

export default App;
