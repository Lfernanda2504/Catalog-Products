import React, { useEffect, useState } from 'react'
import { Product} from './product/Product';

export interface IProduct{
  id: string,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

interface Props {
  products: IProduct[]
}

export const ProductList = ({ products }: Props) => {
    return (
        <div className="flex flex-col justify-center text-white items-center p-6 ">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {products?.map((product) => (
            <Product key={product.id} product={product}/> 
          ))}
        </ul>
      </div>
  
  )
}
