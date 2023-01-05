import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className='container mx-auto px-10'>
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href='/nabarun.png' />
      </Head>
      <div className='flex flex-col md:p-9 md:pb-0'>
        <Image
          alt='Nabarun.eth'
          unoptimized
          height={100}
          width={100}
          className='align-middle h-20 w-20 md:h-32 md:w-32 float-left rounded-full'
          src='/nabarun.png'
        />

        <div className='md:max-w-4xl mt-5 md:mt-9'>
          <h1 className='text-2xl md:text-5xl font-bold'>
            Software developer, web3 degen, and an amateur guitarist.
          </h1>
          <p className='text-base md:text-justify font-bold mt-5 md:mt-9'>
            I'm Nabarun, a software developer and web3 autodidact based in India
            currently. Along with taking keen interest in this space, I truly
            believe that this is the next frontier and everyone should be
            comfortable with it. The programmable blockchain tech has already
            made huge dents out there and will continue doing so in all the
            industries we can possibly imagine rn. And it all starts with NFTs.
            I'm well aware of the fact that we're still early and there's a ton
            for me to learn both theoretically and practically at work, which
            makes me even more excited for the future opportunities where I can
            find my niche.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
