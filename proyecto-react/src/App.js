import "@material-tailwind/react/tailwind.css";
import Alert from "./components/Alert/Alert";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import InfoCards from "./components/InfoCards/InfoCards";
import picture1 from "./assets/images/carousel/redragon.png";
import picture2 from "./assets/images/carousel/z390.png";
import picture3 from "./assets/images/carousel/ssd.png";
import picture4 from "./assets/images/carousel/orange.png";
import graphics1 from "./assets/images/carousel/gtx1660.png";
import graphics2 from "./assets/images/carousel/gtx3060.png";
import Brands from "./components/Brands/Brands";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";

const pictures = [
  {
    url: picture1,
    name: "Teclado Redragon",
    price: "6.490",
  },
  {
    url: picture2,
    name: "Mother Gigabyte",
    price: "80.000",
  },
  {
    url: picture3,
    name: "Ssd 500 GB",
    price: "9.299",
  },
  {
    url: picture4,
    name: "Gabinete Gamer",
    price: "10.000",
  },
];
const graphics = [
  {
    url: graphics1,
    name: "GTX 1660 SUPER",
    price: "138.990",
  },
  {
    url: graphics2,
    name: "GTX 3060 TI",
    price: "193.999",
  },
  {
    url: graphics1,
    name: "GTX 1660 SUPER",
    price: "200",
  },
  {
    url: graphics2,
    name: "GTX 3060 TI",
    price: "325",
  },
];

function App() {
  return (
    <div>
      <Alert />
      <NavBar />
      <Banner />
      <Categories />
      <InfoCards textWhite="Now in " textViolet="Sale" pictures={pictures} />
      <InfoCards
        textWhite="Latest in "
        textViolet="Graphics Cards"
        pictures={graphics}
      />
      <Brands />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
