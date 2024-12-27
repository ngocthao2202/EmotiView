import {BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import AppRoutes from "./Routes";

function App() {
  return (
   <Router>
    <Header />
    <AppRoutes/>
    <Footer />
   </Router>
  );
}

export default App;
