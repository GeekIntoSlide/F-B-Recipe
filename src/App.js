import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import How from "./components/How";
import Features from "./components/Features";
import Meals from "./components/Meals";
import Testim from "./components/Testim";
import Price from "./components/Price";
function App() {
  return (
    <div className="App">
    <NavBar/>
     <Hero/>
     <Features/>
     <How/>
     <Meals/>
     <Testim/>
     <Price/>
    </div>
  );
}

export default App;
