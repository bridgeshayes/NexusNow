import LoginComponent from "./pages/LoginComponent";
import img from "./assets/node-bg.jpg"
import "./App.css"
//import components here

function App() {
  return (
    <div className="vh-100 hero-image" style={{ backgroundImage: `url(${img})` }}>
      <div className="col-5 offset-7">
        <LoginComponent />
      </div>
    </div>
  );
}

export default App;
