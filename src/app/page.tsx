import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Footer/Footer";
import MainScreen from "@/components/MainScreen/MainScreen";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";
import Subscribe from "@/components/Subscribe/Subscribe";



export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <MainScreen />
    </div>
      <ProductsSlider type="featured" />
      <Categories />
      <ProductsSlider type="tranding" />
      <Subscribe />
      <Footer />
    </>
  )
}
