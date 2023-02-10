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
          <div className='flex flex-col lg:flex-row md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:justify-between pt-4 xl:pt-5 md:px-4 lg:px-5 xl:px-9'>
            <div className='flex flex-col mx-auto md:max-w-lg lg:max-w-sm xl:max-w-lg order-2 lg:order-1 mt-9 lg:mt-0'>
              <h1 className='text-2xl md:text-4xl xl:text-5xl font-bold text-center text-purple-700 dark:text-yellow-300'>
                An engineer who loves to code, travel, and meet buidlers across
                the globe.
              </h1>
              <div className='mt-9 text-base md:text-lg font-semibold text-center'>
                <p className='lg:hidden'>
                  Howdy! My name is Nabarun (call me Nick if you&apos;d like)
                  and I&apos;m a Software Developer currently based in India. I
                  love being an autodidact as it enables my curious mind to
                  thrive. I&apos;m Dev #369 at Developer DAO and a member of
                  DAOpunks.
                </p>
                <p className='hidden lg:contents'>
                  Howdy! My name is Nabarun (call me Nick if you&apos;d like)
                  and I&apos;m a Software Developer currently based in India. I
                  love being an autodidact as it enables my curious mind to
                  thrive. I&apos;m Dev #369 at Developer DAO and a member of
                  DAOpunks.
                </p>
              </div>
            </div>
            <div className='flex justify-center order-1 lg:order-2 lg:mr-9 lg:mt-5 xl:mt-3'>
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
          <div className=''>
            <div className='text-base md:text-lg font-semibold justify-center text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0'>
              <p className='mt-9'>
                During my early childhood days, whenever I was asked about my
                aim in life, for some reason my consistent response used to be
                &quot;I aspire to become a Scientist&quot;. In retrospect, I
                think I just wanted to be like someone who&apos;d contribute
                significantly to the growth of science & technology. While
                growing up, my pool of interests began to take a better shape.
                Eventually, I discovered the inner engineer between building
                small objects and dismantling my toy cars in order to find out
                what was under the hood. And it was precisely this memory that
                really helped me understand certain things when it came to
                selecting a career path. As you can probably tell, I chose to
                pursue engineering. Partly because I loved breaking and making
                things, and partly because someone had told me that engineers
                don&apos;t have to study as much (not true!).
              </p>
              <p className='mt-9'>
                I studied Electrical Engineering in my bachelor&apos;s thinking
                that electricity is the basis for almost every technology we are
                familiar with; so why not learn more about it! While grinding in
                college I managed to work as an intern for multiple firms and 4
                years through the process I learned that software was my thing,
                not hardware; which was a fair enough transition for me given
                how fast the tech industry was evolving. After securing a decent
                score, I ended up getting a great job at an international IT
                Giant. Learned a ton during the Initial Learning Program and
                also enjoyed my time there as a corporate engineer. However, as
                fate would have it, I started feeling that something was missing
                (and many things in between). Dunno what to call it exactly,
                maybe a quarter-life crisis... but I genuinely felt the need to
                take a step back in order to figure things out for myself. Yes
                it wasn&apos;t easy but ultimately I decided to take a career
                break. It gave me the much needed space and then my life changed
                forever!
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
