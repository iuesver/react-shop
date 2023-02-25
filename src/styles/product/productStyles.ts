import tw from 'tailwind-styled-components/dist/tailwind';

export const productStyles = {
  Section: tw.section`
    min-h-full bg-white dark:bg-gray-800
    `,
  Article: tw.article`
    grid md:grid-cols-2 lg:grid-cols-4 px-2 pb-20
    `,
  Title: tw.h1`
  text-3xl font-bold pb-6 text-center text-black dark:text-white
  `,
  BreadCrumbDiv: tw.div`
  p-4
  `,
  ProductDiv: tw.div`
  m-4 border dark:border-none rounded-lg
  `,
  ProductFigure: tw.figure`
  h-80 bg-white flex justify-center items-center rounded-t-lg
  `,
  ProductImg: tw.img`
  img-primary
  `,
  ProductIntro: tw.div`
  h-36 text-black dark:text-gray-400 bg-gray-200 dark:bg-gray-700 flex flex-col p-4 justify-between items-start dark:rounded-b-lg overflow-auto
  `,
};
