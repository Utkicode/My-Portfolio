import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatIdo from "./components/WhatIdo";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import EducationExperience from "./components/EducationExperience";



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <WhatIdo/>
      <EducationExperience/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
