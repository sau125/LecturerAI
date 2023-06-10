import "./App.css";
import HeaderComponent from "./Components/Header/Header.component";
import HomePageComponent from "./Pages/HomePage/HomePage.component";
import FooterComponent from "./Components/Footer/Footer.component";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomePageComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
