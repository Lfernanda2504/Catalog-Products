import Head from "next/head";
import Link from "next/link";
import { title } from "process";
import React, { FC, PropsWithChildren } from "react";
import{ Nav} from "../common/Nav";
import{  Footer} from "../common/Footer";


interface TProps {
  title: string;
  description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({ title, description, children}) => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Head>
        <title>{title} | Store Products </title>
        {description &&  <meta name="description"content={description}/>}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-[#19ac8a] text-white h-20">
        <Nav />
      </header>
      <main className="grow flex flex-col text-white ">
        {children}
      </main>
      <Footer />
    </div>
  );
};
