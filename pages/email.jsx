import Head from "next/head";
import { Form, Navbar } from "../components";

const Email = () => {
  return (
    <div
      id='layout-child'
      className='container mx-auto mb-auto justify-center items-center min-h-screen px-10 lg:px-0 xl:px-10'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href='/nabarun.png' />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-1 md:col-span-11'>
          <div className='flex flex-col md:p-9 md:pb-0'>
            <div className='md:px-5 md:max-w-lg lg:max-w-4xl'>
              <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center cursor-default text-cyan-700 dark:text-cyan-300 mb-9'>
                Get in Touch
              </h1>
              <p className='text-base text-justify font-semibold cursor-default text-night-gray dark:text-gray-300 mb-9'>
                Please feel free to message me, even if it&apos;s just to say
                hi; I&apos;d appreciate it a ton. I&apos;m always open to new
                opportunities and making awesome frens. Leave a message and I
                shall get back to you ASAP. Thanks a bunch for stopping by. Talk
                soon!
              </p>
              <div>
                <Form />
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 md:col-span-1 ml-auto hidden md:contents'>
          <div className='flex flex-col items-end'>
            <div className='top-9'>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 9,
  };
};

export default Email;
