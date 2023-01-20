import Link from "next/link";

const Navbar = () => {
  return (
    <div className='mt-52 mr-4 pt-0'>
      <div className='text-lg md:text-end font-semibold transition duration-300 mb-3'>
        <Link
          href='/about'
          className='hover:text-blue-500 dark:hover:text-indigo-500 transition duration-300'
        >
          ABOUT
        </Link>
      </div>
      <div className='text-lg md:text-end font-semibold transition duration-300 mb-3'>
        <Link
          href='https://supercoder.vercel.app/'
          className='hover:text-blue-500 dark:hover:text-indigo-500 transition duration-300'
          target='_blank'
        >
          BLOG
        </Link>
      </div>
      <div className='text-lg md:text-end font-semibold transition duration-300 mb-3'>
        <Link
          href='/projects'
          className='hover:text-blue-500 dark:hover:text-indigo-500 transition duration-300'
        >
          PROJECTS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
