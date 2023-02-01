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

            <div id='layout-child' className='md:max-w-4xl mt-3 md:mt-5'>
              <h1 className='text-3xl md:text-5xl font-bold cursor-default text-teal-700 dark:text-night-teal'>
                Software developer, web3 degen, and an amateur guitarist.
              </h1>
              <div className='md:text-justify font-semibold cursor-default mt-3 md:mt-5'>
                <span className='flex'>
                  <h3 className='text-xl md:text-3xl lg:text-2xl xl:text-3xl italic text-cyan-700 dark:text-purple-300'>
                    Hi fren
                  </h3>
                  <span className='self-center'>
                    <MdOutlineWavingHand className='h-5 w-5 md:h-7 md:w-7 ml-2 text-yellow-500 dark:text-yellow-300' />
                  </span>
                </span>
                <h3 className='flex text-xl md:text-3xl lg:text-2xl xl:text-3xl italic text-cyan-700 dark:text-purple-300 mb-3 md:mb-5'>
                  I'm Nabarun
                </h3>
                <p className='text-base md:text-xl lg:text-lg xl:text-xl text-night-gray dark:text-gray-300 mb-3 md:mb-5'>
                  A software developer and web3 autodidact based in India
                  currently. Along with taking keen interest in this space, I
                  truly believe that this is the next frontier and everyone
                  should be comfortable with it.
                </p>
                <Link href='/email'>
                  <button className='transition duration-300 transform bg-blue-500 dark:bg-night-blue hover:bg-blue-900 dark:hover:bg-indigo-700 inline-block text-base md:text-xl lg:text-lg xl:text-xl font-medium rounded-full text-white dark:text-night-white px-3 py-1 mt-2 cursor-pointer'>
                    Email Me!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 md:col-span-2 lg:col-span-1 hidden md:contents'>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
