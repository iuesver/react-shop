import tw from 'tailwind-styled-components/dist/tailwind';

export const productDescStyles = {
  Product: tw.article`
    flex flex-col min-h-screen lg:flex-row px-10 pt-16 bg-white dark:bg-gray-800
    `,
  BreadCrumbDiv: tw.div`
    bg-white dark:bg-gray-800 p-4
    `,
  ProductFigure: tw.figure`
    w-full h-80 lg:w-96 bg-white p-4 pb-4 lg:mb-0 rounded-2xl
    `,
  ProductImg: tw.img`
    img-primary w-full h-72
    `,
  ProductDescDiv: tw.div`
    w-full lg:px-8 flex flex-col
    `,
  ProductTitle: tw.h1`
    pt-4 lg:pb-4 text-2xl font-bold text-black dark:text-gray-400
    `,
  ProductDesc: tw.p`
    py-4 lg:py-0 text-black dark:text-gray-400
    `,
  ProductRating: tw.div`
    py-0 lg:py-4
    `,
  ProductPrice: tw.p`
    text-xl font-semibold py-4 lg:py-0 text-black dark:text-gray-400
    `,
  ProductBtnDiv: tw.div`
    py-4
    `,
  ProductAddBtn: tw.button`
    btn-primary mr-4
    `,
  ProductCartBtn: tw.button`
    btn-primary text-black dark:text-white bg-inherit border-solid border-2 border-black dark:border-gray-100 hover:text-white hover:bg-black hover:border-black dark:hover:bg-gray-500 dark:hover:border-gray-500
    `,
};
