import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types";

const HomePage = async () => {
  const rawProducts = await getLatestProducts();
  const latestProducts: Product[] = rawProducts.map((product: any) => ({
    ...product,
    price: product.price.toString(),
  }));
  return (
    <div>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </div>
  );
};

export default HomePage;

// export const metadata = {
//   title: "Home",
// };
