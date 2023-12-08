import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatIdo from "./components/WhatIdo";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <WhatIdo/>
      <Resume/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
