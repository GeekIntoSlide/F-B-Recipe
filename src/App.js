import Home from "./components/FoodAppPages/Home";
import Blog from "./components/FoodAppPages/Blog"
import ContactPage from "./components/FoodAppPages/ContactPage";
import Profile from './components/FoodAppPages/Profile';
import Signin from './components/FoodAppPages/Signin';
import NavBar from "./components/NavBar";
import ForgotPassword from "./components/FoodAppPages/ForgotPassword";
import Contact from "./components/Contact";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
   <Router>
    <NavBar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/blog" element={<Blog/>}/>
     <Route path="/contact" element={<ContactPage/>}/>
     <Route path="/signin" element={<Signin/>}/>
     <Route path="/forgotpassword" element={<ForgotPassword/>}/>
     <Route path="/signup" element={<Contact/>}/>
      
    </Routes>
   </Router>
   
    </div>
  );
}

export default App;
