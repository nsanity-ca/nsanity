import ProductsContainer from "@/components/Products/ProductsContainer";
import { products } from "@/lib/data/products";

export const metadata = {
  title: "Products | nsanity",
  description: "Browse our collection of products",
};

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen nav-pad bg-[#fffbf8]">
      <div className="">
        <h1 className="text-black font-bold text-3xl text-center py-6 ">
          products
        </h1>
      </div>

      <ProductsContainer products={products} />
    </div>
  );
}
