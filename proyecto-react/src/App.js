import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Support from "./components/Support";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;
