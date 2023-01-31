import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineWavingHand } from "react-icons/md";
import { Navbar } from "../components";

const Home = () => {
  return (
    <div
      id='layout-child'
      className='container mx-auto mb-auto px-10 lg:px-0 xl:px-10 h-screen'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href='/nabarun.png' />
      </Head>
      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-1 md:col-span-10 lg:col-span-11'>
          <div className='flex flex-col md:px-9'>
            <Image
              alt='Nabarun.eth'
              unoptimized
              height={100}
              width={100}
              className='align-middle h-20 w-20 md:h-28 md:w-28 lg:h-24 lg:w-24 xl:h-28 xl:w-28 float-left rounded-full'
              src='/nabarun.png'
            />

            <div id='layout-child' className='md:max-w-4xl mt-5 md:mt-7'>
              <h1 className='text-xl md:text-5xl lg:text-3xl xl:text-5xl font-bold cursor-default text-teal-700 dark:text-night-teal'>
                Software developer, web3 degen, and an amateur guitarist.
              </h1>
              <div className='md:text-justify font-semibold cursor-default mt-5 md:mt-9'>
                <span className='flex'>
                  <span className='text-base md:text-3xl lg:text-xl xl:text-3xl italic text-cyan-700 dark:text-purple-300'>
                    Hi fren
                  </span>
                  <span className='self-center'>
                    <MdOutlineWavingHand className='h-4 w-4 md:h-7 md:w-7 ml-2 text-yellow-500 dark:text-yellow-300' />
                  </span>
                </span>
                <span className='flex text-base md:text-3xl lg:text-xl xl:text-3xl italic text-cyan-700 dark:text-purple-300 mb-5'>
                  I am Nabarun
                </span>
                <p className='text-base md:text-xl lg:text-base xl:text-xl text-night-gray dark:text-gray-300 mb-5'>
                  A software developer and web3 autodidact based in India
                  currently. Along with taking keen interest in this space, I
                  truly believe that this is the next frontier and everyone
                  should be comfortable with it. Programmable blockchain tech
                  has already made huge dents out there and will continue doing
                  so in all the industries we can possibly imagine rn. And it
                  all starts with NFTs.
                </p>
                <Link href='/email'>
                  <button className='transition duration-300 transform bg-blue-500 dark:bg-night-blue hover:bg-blue-900 dark:hover:bg-indigo-700 inline-block text-base md:text-lg font-medium rounded-full text-white px-3 py-1 cursor-pointer'>
                    Email Me!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 md:col-span-2 ld:col-span-1 hidden md:contents'>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
