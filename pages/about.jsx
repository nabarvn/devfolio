import Head from "next/head";
import Image from "next/image";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiMaterialui,
  SiFirebase,
  SiStyledcomponents,
  SiStripe,
  SiGraphql,
  SiSass,
} from "react-icons/si";
import { Navbar } from "../components";

const About = () => {
  return (
    <div
      id='layout-child'
      className='container mx-auto mb-auto px-10 lg:px-0 xl:px-10'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href='/nabarun.png' />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-1 md:col-span-10'>
          <div className='flex flex-col justify-center lg:flex-row md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:justify-between pb-9 md:p-9 lg:pr-0 xl:pr-9'>
            <div className='flex flex-col justify-center md:max-w-lg lg:max-w-sm xl:max-w-lg order-2 lg:order-1 mt-9 lg:mt-0'>
              <h1 className='text-2xl md:text-4xl xl:text-5xl font-bold text-center text-purple-700 dark:text-yellow-300'>
                An engineer who loves to code, travel, and meet buidlers across
                the globe.
              </h1>
              <div className='mt-9 text-lg font-semibold text-center'>
                <p className='lg:hidden'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis ultricies lacus sed turpis. Egestas purus viverra
                  accumsan in nisl. Accumsan lacus vel facilisis volutpat est
                  velit egestas. Risus nullam eget felis eget nunc. Varius sit
                  amet mattis vulputate enim. Commodo ullamcorper a lacus
                  vestibulum sed arcu. Volutpat lacus laoreet non curabitur
                  gravida arcu ac. Volutpat ac tincidunt vitae semper. Aliquet
                  porttitor lacus luctus accumsan tortor posuere ac ut. Nibh
                  tellus molestie nunc non blandit massa enim nec. Aliquet
                  porttitor lacus luctus accumsan tortor. Ridiculus mus mauris
                  vitae ultricies leo integer malesuada nunc vel. Quis enim
                  lobortis scelerisque fermentum dui faucibus. Nibh nisl
                  condimentum id venenatis a condimentum. Imperdiet sed euismod
                  nisi porta lorem mollis. Aliquam ultrices sagittis orci a
                  scelerisque. Vestibulum rhoncus est pellentesque elit
                  ullamcorper dignissim cras tincidunt lobortis. Duis ut diam
                  quam nulla porttitor massa id neque aliquam. Vitae ultricies
                  leo integer malesuada. Enim sit amet venenatis urna cursus
                  eget nunc. Dui accumsan sit amet nulla facilisi. Bibendum ut
                  tristique et egestas quis. Dolor sit amet consectetur
                  adipiscing elit ut. Nibh ipsum consequat nisl vel pretium
                  lectus quam. Consequat semper viverra nam libero justo. Ut
                  tortor pretium viverra suspendisse potenti. Fusce ut placerat
                  orci nulla pellentesque dignissim.
                </p>
                <p className='hidden lg:contents'>
                  Hello there! My name is Nabarun (call me Nick if you want). I
                  am a Software Developer from the most colorful country in the
                  whole wide world, India.
                </p>
              </div>
            </div>
            <div className='flex justify-center order-1 lg:order-2 lg:mr-9'>
              <Image
                alt='gmOfficer.eth'
                priority
                unoptimized
                height={100}
                width={100}
                className='h-52 w-52 h md:h-80 md:w-80 rotate-3 rounded-2xl'
                src='/gmOfficer.png'
              />
            </div>
          </div>
          <div className='hidden lg:contents'>
            <div className='text-lg font-semibold justify-center lg:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl pl-9 pr-9 pb-0'>
              <p className='mt-9'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                ultricies lacus sed turpis. Egestas purus viverra accumsan in
                nisl. Accumsan lacus vel facilisis volutpat est velit egestas.
                Risus nullam eget felis eget nunc. Varius sit amet mattis
                vulputate enim. Commodo ullamcorper a lacus vestibulum sed arcu.
                Volutpat lacus laoreet non curabitur gravida arcu ac. Volutpat
                ac tincidunt vitae semper. Aliquet porttitor lacus luctus
                accumsan tortor posuere ac ut. Nibh tellus molestie nunc non
                blandit massa enim nec. Aliquet porttitor lacus luctus accumsan
                tortor. Ridiculus mus mauris vitae ultricies leo integer
                malesuada nunc vel. Quis enim lobortis scelerisque fermentum dui
                faucibus. Nibh nisl condimentum id venenatis a condimentum.
                Imperdiet sed euismod nisi porta lorem mollis. Aliquam ultrices
                sagittis orci a scelerisque.
              </p>
              <p className='mt-9'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                ultricies lacus sed turpis. Egestas purus viverra accumsan in
                nisl. Accumsan lacus vel facilisis volutpat est velit egestas.
                Risus nullam eget felis eget nunc. Varius sit amet mattis
                vulputate enim. Commodo ullamcorper a lacus vestibulum sed arcu.
                Volutpat lacus laoreet non curabitur gravida arcu ac. Volutpat
                ac tincidunt vitae semper. Aliquet porttitor lacus luctus
                accumsan tortor posuere ac ut. Nibh tellus molestie nunc non
                blandit massa enim nec. Aliquet porttitor lacus luctus accumsan
                tortor. Ridiculus mus mauris vitae ultricies leo integer
                malesuada nunc vel. Quis enim lobortis scelerisque fermentum dui
                faucibus. Nibh nisl condimentum id venenatis a condimentum.
                Imperdiet sed euismod nisi porta lorem mollis. Aliquam ultrices
                sagittis orci a scelerisque.
              </p>
            </div>
          </div>
          {/* <div className='flex flex-col text-2xl font-semibold items-center md:max-w-5xl md:p-9 md:pb-0'>
            <h2 className='text-center mb-5'>Technologies I have used</h2>
            <div className='flex flex-wrap max-w-xl justify-center'>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiTypescript className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiReact className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiJavascript className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiNextdotjs className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiTailwindcss className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiBootstrap className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiHtml5 className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiCss3 className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiMaterialui className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiFirebase className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiStripe className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiGraphql className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
              <div className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'>
                <a href='/' target='_blank'>
                  <SiSass className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <div className='col-span-1 md:col-span-2 hidden md:contents'>
          <div className='flex flex-col md:col-start-11 md:col-end-13'>
            <div className='md:sticky top-9'>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
