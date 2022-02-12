import NavBar from "./components/NavBar/NavBar";
import Support from "./components/Support/Support";
import Alert from "./components/Alert/Alert";
import InfoCards from "./components/InfoCards/InfoCards";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";
import Footer from "./components/Footer/Footer";
import "@material-tailwind/react/tailwind.css";
import picture1 from "./assets/images/treddragon.png"
import picture2 from "./assets/images/z390.png"
import picture3 from "./assets/images/ssd.png"
import picture4 from "./assets/images/orange.png"
import graphics1 from "./assets/images/gtx1660.png"
import graphics2 from "./assets/images/gtx3060.png"



const pictures = [
  {
      url: picture1,
      name: "Teclado Redragon",
      price: "999"
  },
  {
      url: picture2,
      name: "Mother Z390",
      price: "1000"
  },
  {
      url: picture3,
      name: "Teclado Redragon",
      price: "200"
  },
  {
      url: picture4,
      name: "Teclado Redragon",
      price: "325"
  }
];
const graphics = [
  {
      url: graphics1,
      name: "GTX 1660 SUPER",
      price: "999"
  },
  {
      url: graphics2,
      name: "GTX 3060 TI",
      price: "1000"
  },
  {
      url: graphics1,
      name: "GTX 1660 SUPER",
      price: "200"
  },
  {
      url: graphics2,
      name: "GTX 3060 TI",
      price: "325"
  }
];

function App() {
  return (
    <div>
      <Alert/>
      <hr/>
      <NavBar/>
      <hr/>
      <Support/>
      <hr/>
      <InfoCards textWhite="Now in " textViolet="sale" pictures={pictures}/>
      <hr/>
      <InfoCards textWhite="Latest in " textViolet="graphics cards" pictures={graphics}/>
      <hr/>
      <SocialNetworks/>
      <hr/>
      <Footer/>
    </div>

  );
}



export default App;

