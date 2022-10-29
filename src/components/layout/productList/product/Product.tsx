import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IProduct } from "../ProductList";
interface TProps{
    product: IProduct;
}
export const Product: FC<TProps> = ({ product }) => {
  return (
    <li>
        <Link href={`/products/${product.id}`}>
        <Image
          className="cursor-pointer rounded-lg "
          src={product.image}
          alt={`${product.title} Imagen`}
          width={500}
          height={700}
        />
        </Link>
      
      <strong className="text-lg">{product.title}</strong>
    </li>
  );
};
