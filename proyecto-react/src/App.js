
import Alert from "./components/Alert/Alert";
import InfoCards from "./components/InfoCards/InfoCards";
import Footer from "./components/Footer/Footer";
import "@material-tailwind/react/tailwind.css";
import picture1 from "./assets/images/treddragon.png";
import picture2 from "./assets/images/z390.png";
import picture3 from "./assets/images/ssd.png";
import picture4 from "./assets/images/orange.png";
import graphics1 from "./assets/images/gtx1660.png";
import graphics2 from "./assets/images/gtx3060.png";
import Categories from "./components/Categories/Categories";
import Carousel from "./components/Carousel/Carousel";
import Brands from "./components/Brands/Brands";
import CardBanner from "./components/CardBanner/CardBanner";


const pictures = [
  {
    url: picture1,
    name: "Teclado Redragon",
    price: "999",
  },
  {
    url: picture2,
    name: "Mother Z390",
    price: "1000",
  },
  {
    url: picture3,
    name: "Teclado Redragon",
    price: "200",
  },
  {
    url: picture4,
    name: "Teclado Redragon",
    price: "325",
  },
];
const graphics = [
  {
    url: graphics1,
    name: "GTX 1660 SUPER",
    price: "999",
  },
  {
    url: graphics2,
    name: "GTX 3060 TI",
    price: "1000",
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
      <CardBanner/>
      <Categories />
      <InfoCards textWhite="Now in " textViolet="sale" pictures={pictures} />
      <InfoCards
        textWhite="Latest in "
        textViolet="graphics cards"
        pictures={graphics}
      />
      <Brands/>
      <div className="p-10">
        <div className="flex justify-center items-center gap-2 ">
          <Carousel/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
