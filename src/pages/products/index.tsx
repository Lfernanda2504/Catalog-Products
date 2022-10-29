import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { IProduct, ProductList } from "../../components/layout/productList/ProductList";

interface TProps{
  products: IProduct[],
  response: string
};
const Products: NextPage<TProps> = ({products}) => {
  return (
    <div>
      <ApplicationWrapper title="Products" description="Store of the products website">
      <h1 className="text-5xl font-bold ">Products</h1>
      <ProductList products={products}/>
      </ApplicationWrapper>
    </div>
  );
};

export default Products;

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    .then((res) => res.json())
    .then((data: IProduct[]) => data.slice(0, 20))
    .catch((error) => console.error(error));

  return {
    props: {
      products
    },

    // Incremental static regeneration
    revalidate: 10
  };
};
