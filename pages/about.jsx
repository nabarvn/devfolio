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
  SiStripe,
  SiGraphql,
  SiSass,
} from "react-icons/si";

import { Navbar } from "../components";
import { Tooltip } from "react-tooltip";

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
          <div className='flex flex-col lg:flex-row md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:justify-between cursor-default pt-4 xl:pt-5 md:px-4 lg:px-5 xl:px-9'>
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
          <div>
            <div className='text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
              <h3 className='text-xl md:text-2xl xl:text-3xl'>/story</h3>
              <p className='mt-5'>
                During my early childhood days, whenever I was asked about my
                aim in life, for some reason my consistent response used to be
                &quot;I aspire to become a Scientist&quot;. In retrospect, I
                think I just wanted to be like someone who&apos;d contribute
                significantly to the growth of science & technology. While
                growing up, my pool of interests had begun to take a better
                shape. Eventually, I discovered the inner engineer between
                building small objects and dismantling my toy cars in order to
                find out what was under the hood. And it was precisely this
                memory that really helped me understand certain things when it
                came to selecting a career path. As you can probably tell, I
                chose to pursue engineering. Partly because I loved breaking and
                making things, and partly because someone had told me that
                engineers don&apos;t have to study as much (not true).
              </p>
              <p className='mt-5'>
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
                fate would have it, I started feeling that something (and many
                things in between) was missing. Dunno what to call it exactly,
                maybe a quarter-life crisis... but I genuinely felt the need to
                take a step back in order to figure things out for myself. Yes
                it wasn&apos;t easy and ultimately, I decided to take a career
                break. With the much needed space my life changed forever!
              </p>
              <p className='mt-5'>
                The best thing that happened to me in 2019 was coding. I simply
                fell in love with the notion of being able to translate ideas
                into something really meaningful. With the little programming
                knowledge that I had from high school and college, I decided to
                jump right into it, only to find out the immense level of
                efforts I&apos;d have to put in order to reach the next
                checkpoint. From where I was standing, it looked like a huge
                mountain to be climbed but I didn&apos;t fear because my
                &quot;motive&quot; was even bigger! Applying the first
                principles method, I started my long journey with Data
                Structures and Algorithms using C++. After building a stronger
                base, I moved on to initiate the development part. The best way
                I believed was to learn JavaScript, language of the internet.
                Although I felt overwhelmed quite often during this whole
                process, I successfully managed to learn (still learning) all
                the relevant technologies from scratch while building some cool
                projects along the way, one at a time.
              </p>
              {/* <p className='mt-5'>
                A major life lesson I learned was that developing web
                applications and solving coding problems are two very different
                things. To achieve both, we must make patience, consistency, and
                resilience our best friends. Also, taking breaks every now and
                then is equally important as coding, if not more.
              </p> */}
            </div>
            <div className='text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
              <h3 className='text-xl md:text-2xl xl:text-3xl'>/today</h3>
              <p className='mt-5'>
                I&apos;m super comfortable with learning things on the internet
                as I&apos;ve been in the self-taught journey for a few years
                now. I take keen interest in learning cutting-edge technologies
                in the hopes that these will one day have a direct impact on our
                lives and Blockchain is definitely one such innovation. When I
                came across NFTs for the first time in early 2021, somehow it
                was super evident to me from day one itself, that non-fungible
                tokens are going to shape the future of our online worlds.
                Gradually, almost everything in the digital space is going to
                get tokenized. Thinking about the potential of web3 as a whole
                (including DeFi, social protocols, audio tokens etc.) makes me
                really excited and now I want to be a significant contributor in
                the metaverse. Currently, I&apos;m working on taking my web2
                coding skills to the next level and learning blockchain
                development is the way to go; will help explore my fascination
                with DApps in a much better way. Hopefully, one day my mom would
                be really proud of me.
              </p>
            </div>
            <div className='text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
              <h3 className='text-xl md:text-2xl xl:text-3xl'>/skillset</h3>
              <div className='flex flex-wrap justify-center mt-5'>
                <div
                  id='javascript'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://developer.mozilla.org/en-us/docs/web/javascript'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiJavascript className='fill-[#F0DB4F] dark:fill-slate-400 bg-[#323330] dark:bg-night-black h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip
                  anchorId='javascript'
                  content='JavaScript'
                  place='bottom'
                />

                <div
                  id='react'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiReact className='fill-[#61DBFB] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip anchorId='react' content='React' place='bottom' />

                <div
                  id='typescript'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://www.typescriptlang.org'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiTypescript className='fill-[#3178C6] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip
                  anchorId='typescript'
                  content='TypeScript'
                  place='bottom'
                />

                <div
                  id='nextjs'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a href='https://nextjs.org' target='_blank' rel='noreferrer'>
                    <SiNextdotjs className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip anchorId='nextjs' content='Next.js' place='bottom' />

                <div
                  id='tailwind'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://tailwindcss.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiTailwindcss className='fill-[#38BDF8] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip
                  anchorId='tailwind'
                  content='Tailwind'
                  place='bottom'
                />

                <div
                  id='bootstrap'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://getbootstrap.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiBootstrap className='fill-[#563D7C] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip
                  anchorId='bootstrap'
                  content='Bootstrap'
                  place='bottom'
                />

                <div
                  id='html'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://html.com/html5'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiHtml5 className='fill-[#E44D26] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip anchorId='html' content='HTML5' place='bottom' />

                <div
                  id='css'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://www.w3schools.com/css'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiCss3 className='fill-[#264DE4] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip anchorId='css' content='CSS3' place='bottom' />

                <div
                  id='mui'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a href='https://mui.com' target='_blank' rel='noreferrer'>
                    <SiMaterialui className='fill-[#007FFF] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip anchorId='mui' content='Material UI' place='bottom' />

                <div
                  id='firebase'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://firebase.google.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiFirebase className='fill-[#FFA611] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip
                  anchorId='firebase'
                  content='Firebase'
                  place='bottom'
                />

                <div
                  id='stripe'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://stripe.com/docs/development'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiStripe className='fill-[#4379FF] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip anchorId='stripe' content='Stripe' place='bottom' />

                <div
                  id='gql'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://graphql.org'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiGraphql className='fill-[#E535AB] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip anchorId='gql' content='GraphQL' place='bottom' />

                <div
                  id='sass'
                  className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
                >
                  <a
                    href='https://sass-lang.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiSass className='fill-[#CD6799] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
                  </a>
                </div>
                <Tooltip anchorId='sass' content='SASS' place='bottom' />
              </div>
            </div>
            <div className='text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
              <h3 className='text-xl md:text-2xl xl:text-3xl'>/facts</h3>
              <ul
                className='mt-5 ml-5'
                style={{
                  listStyleType: "square",
                }}
              >
                <li>
                  I can speak five languages; 4 with professional proficiency
                  and 1 as a beginner.
                </li>
                <li className='mt-2'>
                  I was recognized amongst the Top 10 School Toppers who brought
                  laurels by securing a score of more than 90% in CBSE India
                  Senior School Certificate Examination.
                </li>
                <li className='mt-2'>
                  I won Badminton Championship 2013 which was held for the
                  freshmans in college.
                </li>
                <li className='mt-2'>
                  I can play &quot;Nothing Else Matters&quot; intro by plucking
                  strings on my acoustic guitar.
                </li>
                <li className='mt-2'>
                  I was awarded with a Certificate of Appreciation by my first
                  employer, for maintaining best professional practices at
                  office.
                </li>
              </ul>
            </div>
          </div>
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
