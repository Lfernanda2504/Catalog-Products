import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image';
import React from 'react'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'
import { IProduct } from '../../components/layout/productList/ProductList';

interface Tprops{
    product: IProduct;
}
 const ProductDetailPage: NextPage<Tprops> = ({product}) => {
    return (
    <ApplicationWrapper title={product.title}>
        
        <Image
          className="cursor-pointer rounded-t-lg"
          src={product.image}
          alt={`${product.title} Imagen`}
          width={250}
          height={300}
        />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <strong>{product.price}</strong>
        <h3>{product.category}</h3>
    </ApplicationWrapper>
  )
}
    export const getServerSideProps: GetServerSideProps= async(context) => {
        const res =await fetch(process.env.NEXT_PUBLIC_API_URL + '/products/' + context.params?.id)
        const product = await res.json();
        return {
            props:{
                product,
            }
        }
    }

    export default ProductDetailPage;