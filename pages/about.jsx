import Head from "next/head";
import Image from "next/image";
import { Navbar, Skillset } from "../components";

const About = () => {
  return (
    <div
      id='layout-child'
      className='container mx-auto mb-auto px-10 lg:px-0 xl:px-10'
    >
      <Head>
        <title>Nabarun.eth</title>
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
              <div className='text-night-gray dark:text-gray-300 text-base md:text-lg font-semibold text-center mt-9'>
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
            <div className='text-night-gray dark:text-gray-300 text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
              <h3 className='text-orange-500 dark:text-orange-300 text-xl md:text-2xl xl:text-3xl'>
                /story
              </h3>
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

            <div className='text-night-gray dark:text-gray-300 text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
              <h3 className='text-orange-500 dark:text-orange-300 text-xl md:text-2xl xl:text-3xl'>
                /today
              </h3>
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
                with DApps in a much better way. Hopefully, Maa would be really
                proud of me someday.
              </p>
            </div>

            <Skillset />

            <div className='text-night-gray dark:text-gray-300 text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
              <h3 className='text-orange-500 dark:text-orange-300 text-xl md:text-2xl xl:text-3xl'>
                /facts
              </h3>
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
