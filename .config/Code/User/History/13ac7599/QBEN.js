import Head from 'next/head';
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle,AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Portafolie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
    <section className="min-h-screen">
    <nav className="py-10 mb-12 flex justify-between">
    <h1 className='text-xl font-burtons'>developedyed</h1>
    <ul className='flex items-center'>
    <li>
      <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
      </li>
    <li> 
      <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>RESUME</a>  
      </li>
    </ul> 
    </nav>
    <div className='text-center p-10'>
      <h2 className='text-5xl py-2 text-teal-600 font-medium'>Luiggi Devs
      </h2>
      <h3 className='text-2xl py-2'>
        Develeped and desing systems
      </h3>
      <p className='text-md py-5 leading-8 text-gray-800'>
        front-end developer and Linux User.
        but you need me call me. 
      </p>
    </div>
    <div>
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
      <AiFillTwitterCircle/>
      <AiFillLinkedin/>
      <AiFillYoutube/>
    </div>
    <div className='relative  mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
      <Image src={deved} layout="fill" objectFit="cover" />
    </div>
      <div>
        <h3 className="text-3xl" py-1 >Services I offer</h3>
        <p className='text-md py-2 leading-8 text-gray-80'>
          Since the begining of my journey as freelance desing 
          developer, I've done remote work for
          <span className='text-teal-500'>agencies</span>
          consulted for <span className='text-teal-500'>startups</span>
          and collaboreted with talanted people to create digital products
          for both business and consumer use.
          </p>
          <p className='text-md py-2 leading-8 text-gray-80'>
            I offer from a wide range of services, including brand desing, programming and teaching.
          </p>
          </div>
          <div className="text-center">
              <Image src={design} width={200} height={200} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                creating elegant designs suited for you needs 
                following core design theory. </p>
              <h4 className='py-4 text-teal-600'>Desgin tools I use</h4>
              <p className='text-gray-800 py-1'>Noevide</p>
              <p className='text-gray-800 py-1'>vscode</p>
              <p className='text-gray-800 py-1'>git</p>
              <p className='text-gray-800 py-1'>Arch linux</p>
              <p className='text-gray-800 py-1'>Kitty term</p> 
              </div>
              </div>
    </section>
      </main>
    </>
  ); 
}
