import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Support from "./components/Support";
import EventOnClick from "./components/EventOnClick/EventOnClick";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <Support/>
      <Footer/>
      <EventOnClick/>
    </div>
  );
}

export default App;
