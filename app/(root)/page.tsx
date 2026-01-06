import ProductList from "@/components/shared/product/product-list";
import {
  getLatestProducts,
  getFeaturedProduts,
} from "@/lib/actions/product.actions";
import { Product } from "@/types";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ViewAllProductsButton from "@/components/view-all-products-button";
import IconBoxes from "@/components/icon-boxes";
import DealCountdown from "@/components/deal-countdown";

const HomePage = async () => {
  const rawProducts = await getLatestProducts();
  const latestProducts: Product[] = rawProducts.map((product: Product) => ({
    ...product,
    price: product.price.toString(),
  }));
  const featuredProducts = await getFeaturedProduts();
  return (
    <div>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProductsButton />
      <DealCountdown />
      <IconBoxes />
    </div>
  );
};

export default HomePage;
