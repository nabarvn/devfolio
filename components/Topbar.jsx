import Link from "next/link";
import { Dropdown } from ".";
import ThemeSwitcher from "./ThemeSwitcher";

const Topbar = () => {
  return (
    <div className='container mx-auto px-9 lg:px-0 xl:px-9 mb-8'>
      <div className='flex justify-between border-b w-full py-3 px-1'>
        <div className='self-center float-start md:ml-3'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-3xl dark:text-night-white'>
              gm
            </span>
          </Link>
        </div>

        <div className='flex float-end'>
          {/* <div className='hidden md:contents lg:hidden'>
            <Link href='/about' className='self-center mx-2'>
              <span className='cursor-pointer font-bold text-lg dark:text-night-white'>
                "about"
              </span>
            </Link>
            <Link
              href='https://www.blog.nabarun.xyz'
              className='self-center mx-2'
            >
              <span className='cursor-pointer font-bold text-lg dark:text-night-white'>
                "blog"
              </span>
            </Link>
            <Link href='/projects' className='self-center mx-2'>
              <span className='cursor-pointer font-bold text-lg dark:text-night-white'>
                "projects"
              </span>
            </Link>
          </div> */}

          <div className='self-center hidden md:contents'>
            <ThemeSwitcher />
          </div>
          <div className='self-center ml-2 md:hidden'>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
