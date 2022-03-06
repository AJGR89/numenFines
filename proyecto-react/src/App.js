import "@material-tailwind/react/tailwind.css";
import Alert from "./components/Alert/Alert";
import NavBar from "./components/NavBar/NavBar";
// import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import InfoCards from "./components/InfoCards/InfoCards";
import picture1 from "./assets/images/cards/teclado.png";
import picture2 from "./assets/images/cards/pad.png";
import picture3 from "./assets/images/cards/monitor.png";
import picture4 from "./assets/images/cards/fuente.png";
import graphics1 from "./assets/images/cards/placaAorus.jpg";
import graphics2 from "./assets/images/cards/placaMsi.jpg";
import graphics3 from "./assets/images/cards/placaEVGA.png";
import graphics4 from "./assets/images/cards/placaAsus.png";
import Brands from "./components/Brands/Brands";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
// import ImageAndText from "./components/TextAndImage/TextAndImage";

const pictures = [
  {
    url: picture1,
    name: "Keyboard Corsair",
    price: "35.000",
  },
  {
    url: picture2,
    name: "Pad RGB",
    price: "12.000",
  },
  {
    url: picture3,
    name: "Screen Gigabyte",
    price: "50.000",
  },
  {
    url: picture4,
    name: "Source 650W",
    price: "30.000",
  },
];
const graphics = [
  {
    url: graphics1,
    name: "Aorus 3070 TI",
    price: "670.000",
  },
  {
    url: graphics2,
    name: "MSI 3070 TI",
    price: "600.000",
  },
  {
    url: graphics3,
    name: "EVGA 3070 TI",
    price: "650.000",
  },
  {
    url: graphics4,
    name: "Asus 3090",
    price: "750.000",
  },
];

function App() {
  return (
    <div>
      <Alert />
      <NavBar />
      {/* <Banner /> */}
      <Slider />
      <Categories />
      <InfoCards textWhite="Now in " textViolet="Sale" pictures={pictures} />
      <InfoCards
        textWhite="Latest in "
        textViolet="Graphics Cards"
        pictures={graphics}
      />
      <Brands />
      {/* <ImageAndText /> */}
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
