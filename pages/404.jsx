import Head from "next/head";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div
      id='layout-child'
      className='flex flex-col m-auto justify-center items-center error-content lg:px-0 xl:px-10'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href='/nabarun.png' />
      </Head>
      <div className='text-2xl mb-8'>You seem lost, fren.</div>
      <Link href='/'>
        <button className='text-white dark:text-night-white bg-blue-500 dark:bg-night-blue hover:bg-blue-900 dark:hover:bg-indigo-700 transition duration-300 rounded-lg font-semibold p-2'>
          Go Back Home?
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
