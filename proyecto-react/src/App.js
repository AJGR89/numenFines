import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Support from "./components/Support";
import EventOnClick from "./components/EventOnClick/EventOnClick";
import InfoCard from "./components/InfoCard/InfoCard";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <Support/>
      <Footer/>
      <EventOnClick/>
      <InfoCard/>
    </div>
  );
}

export default App;
