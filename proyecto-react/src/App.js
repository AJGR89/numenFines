import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Support from "./components/Support";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <Support/>
      <Footer/>
      <SocialNetworks/>
    </div>
  );
}

export default App;
