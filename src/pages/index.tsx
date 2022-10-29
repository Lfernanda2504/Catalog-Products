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
        <div className="grow flex flex-col justify-center items-center bg-[url('https://res.cloudinary.com/academia/image/upload/v1667065646/banner_jrc31n.png')]">
          <div className="grow bg-black w-full justify-center items-center flex opacity-70">
          <h1 className="text-5xl font-bold  text-white"> Bienvenid@ a Store Products </h1> 
          </div>
          <span>Nombre: Luisa Fda Garcia </span>
          <span>Email: luizafernandaGarcia@gmail.com </span>
        </div>
      </ApplicationWrapper>
    </div>
  );
};

export default Home;

