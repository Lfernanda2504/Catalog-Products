import type { NextPage } from "next";
import Head from "next/head";
import { ApplicationWrapper } from "../components/layout/ApplicationWrapper";


type HomeProps = {
  response: string;
};
const Home: NextPage<HomeProps> = () => {
  return (
    <div className='font-medium text-xl font-poppins'>
      <ApplicationWrapper title="Home" description="Home of the store products">
        <div className="grow flex flex-col justify-center items-center bg-[url('/images/banner.png')]">
          <div className="grow bg-black w-full justify-center items-center flex opacity-70">
          <h1 className="text-5xl font-bold underline text-white"> Bienvenid@ a Store Products </h1> 
          </div>
        </div>
      </ApplicationWrapper>
    </div>
  );
};

export default Home;

