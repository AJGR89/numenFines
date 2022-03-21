import Alert from "./components/Alert/Alert";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";
import InfoCards from "./components/InfoCards/InfoCards";
import Brands from "./components/Brands/Brands";
import TextImage from "./components/TextImage/TextImage";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import DataInforService from "./components/InfoService/DataInforService";
import { products } from "./components/Products/products";
// import { addToCart } from "./components/Products/ProductGrid";

function App() {
  const productsSale = products.filter((prod) => prod.id <= 4);
  const productsLatest = products.filter((prod) => prod.id > 6);

  return (
    <div className="font-sans">
      <Alert />
      <NavBar />
      <Slider />
      <Categories />

      <InfoCards
        textWhite="Now in "
        textViolet="Sale"
        pictures={productsSale}
        // addToCart={addToCart}
      />
      <InfoCards
        textWhite="Latest in "
        textViolet="Graphics Cards"
        pictures={productsLatest}
        // addToCart={addToCart}
      />

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
