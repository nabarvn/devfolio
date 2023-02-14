import { Tooltip } from "react-tooltip";

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

const Skillset = () => {
  return (
    <div className='text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
      <h3 className='text-teal-700 dark:text-night-teal text-xl md:text-2xl xl:text-3xl'>
        /skillset
      </h3>
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
        <Tooltip anchorId='javascript' content='JavaScript' place='bottom' />

        <div
          id='react'
          className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
        >
          <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
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
        <Tooltip anchorId='typescript' content='TypeScript' place='bottom' />

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
          <a href='https://tailwindcss.com' target='_blank' rel='noreferrer'>
            <SiTailwindcss className='fill-[#38BDF8] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
          </a>
        </div>
        <Tooltip anchorId='tailwind' content='Tailwind' place='bottom' />

        <div
          id='bootstrap'
          className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
        >
          <a href='https://getbootstrap.com' target='_blank' rel='noreferrer'>
            <SiBootstrap className='fill-[#563D7C] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
          </a>
        </div>
        <Tooltip anchorId='bootstrap' content='Bootstrap' place='bottom' />

        <div
          id='html'
          className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
        >
          <a href='https://html.com/html5' target='_blank' rel='noreferrer'>
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
        <Tooltip anchorId='firebase' content='Firebase' place='bottom' />

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
          <a href='https://graphql.org' target='_blank' rel='noreferrer'>
            <SiGraphql className='fill-[#E535AB] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
          </a>
        </div>
        <Tooltip anchorId='gql' content='GraphQL' place='bottom' />

        <div
          id='sass'
          className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
        >
          <a href='https://sass-lang.com' target='_blank' rel='noreferrer'>
            <SiSass className='fill-[#CD6799] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
          </a>
        </div>
        <Tooltip anchorId='sass' content='SASS' place='bottom' />
      </div>
    </div>
  );
};

export default Skillset;
