import "./App.css";
import Header from "./Components/header/Header";
import Nav from "./Components/Nav/Nav";
import { AboutMe } from "./Components/About/About";
import Experiance from "./Components/Experiances/Experiance";
import Service from "./Components/Services/Service";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonial from "./Components/testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <AboutMe />
      <Experiance />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
