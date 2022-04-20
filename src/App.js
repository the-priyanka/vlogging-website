import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Life from "./components/life/Life";
import Navbar from "./components/navbar/Navbar";
import Vlog from "./components/vlog/Vlog";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Vlog />
      <Life />
      <Contact />
    </>
  );
}

export default App;
