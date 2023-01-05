import Link from "next/link";

const Footer = () => {
  return (
    <footer className='flex items-center justify-center bottom-0 mx-auto px-10 p-5 bg-light-gray dark:bg-night-black'>
      <div>
        <span className='cursor-default'>An </span>
        <Link
          href='https://github.com/nabarvn/devfolio'
          className='hover:text-blue-500 dark:hover:text-blue-900'
          target='_blank'
        >
          Open Source
        </Link>
        <span className='cursor-default'> Project ❤️</span>
      </div>
    </footer>
  );
};

export default Footer;
