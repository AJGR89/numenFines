import "@material-tailwind/react/tailwind.css";
import Alert from "./components/Alert/Alert";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import TextImage from "./components/TextImage/TextImage";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import DataInforService from "./components/InfoService/DataInforService";
import InfoSale from "./components/InfoCards/InfoSale";
import InfoGraphics from "./components/InfoCards/InfoGraphics";

function App() {
  return (
    <div className="font-sans">
      <Alert />
      <NavBar />
      <Slider />
      <Categories />

      <InfoSale />
      <InfoGraphics />

      <TextImage />
      <Brands />
      <div className="p-10">
        <div className="flex items-center justify-center gap-2 ">
          <Carousel />
        </div>
      </div>
      <DataInforService />
      <Footer />
    </div>
  );
}

export default App;
