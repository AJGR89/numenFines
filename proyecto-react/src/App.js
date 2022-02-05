import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Support from "./components/Support";
import EventOnClick from "./components/EventOnClick/EventOnClick";
import InfoCard from "./components/InfoCard/InfoCard";
import "@material-tailwind/react/tailwind.css";
import InfoCards from "./components/InfoCards/InfoCards";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";



function App() {
  return (
    <div className="container mt-8">
      <NavBar/>
      <InfoCards/>
      <SocialNetworks/>
      
    </div>

  );
}

export default App;
