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
// import graphics1 from "./assets/images/cards/.png";
// import graphics2 from "./assets/images/cards/.png";
// import graphics3 from "./assets/images/cards/.png";
import graphics4 from "./assets/images/cards/placaAsus.jpg";
import Brands from "./components/Brands/Brands";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import textAndImage from "./components/TextAndImage/TextAndImage";
import TextAndImage from "./components/TextAndImage/TextAndImage";

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
  // {
  //   url: graphics1,
  //   name: "GTX 1660 SUPER",
  //   price: "140.000",
  // },
  // {
  //   url: graphics2,
  //   name: "GTX 3060 TI",
  //   price: "170.000",
  // },
  // {
  //   url: graphics3,
  //   name: "GTX 1660 SUPER",
  //   price: "200.000",
  // },
  {
    url: graphics4,
    name: "Asus Rog Strix",
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
      <TextAndImage />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
