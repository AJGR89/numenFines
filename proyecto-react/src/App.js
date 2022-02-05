import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Support from "./components/Support";
import { socialmediaicons } from ".socialMedia"

function App() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <Support/>
      <Footer/>
      <socialmediaicons icons={socialmediaicons}/>
    </div>
  );
}

export default App;
