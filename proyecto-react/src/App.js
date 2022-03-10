import "@material-tailwind/react/tailwind.css";
import Alert from "./components/Alert/Alert";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";
import InfoCards from "./components/InfoCards/InfoCards";
import Brands from "./components/Brands/Brands";
import TextImage from "./components/TextImage/TextImage";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import { pictures, graphics } from "./api/data-api";

function App() {
  return (
    <div>
      <Alert />
      <NavBar />
      <Slider />
      <Categories />
      
      <InfoCards textWhite="Now in " textViolet="Sale" pictures={pictures} />
      <InfoCards
        textWhite="Latest in "
        textViolet="Graphics Cards"
        pictures={graphics}
      />
      <Brands />
      <TextImage />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
