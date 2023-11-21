import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Resume/>
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
