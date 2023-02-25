import tw from 'tailwind-styled-components/dist/tailwind';

export const cartStyle = {
  CartSection: tw.section`
    flex flex-col w-full min-h-screen bg-white dark:bg-gray-800 box-border p-4 lg:flex-row justify-between
    `,
  CartItems: tw.section`
    flex flex-col m-4
    `,
  CartItem: tw.article`
    flex flex-col lg:flex-row mt-4
    `,
  ItemTitle: tw.h2`
    text-xl text-black dark:text-gray-400 font-semibold hover:underline underline-offset-2
`,
  ItemPrice: tw.p`
text-3xl my-4 text-black dark:text-gray-400
`,
  ItemInfo: tw.div`
    flex flex-col justify-evenly pb-12 lg:px-12
    `,
  ItemCount: tw.span`
    mx-4 text-black dark:text-gray-400
`,
  ItemRemoveBtn: tw.button`
    bg-violet-700 rounded-l-lg px-4 h-12 text-white font-semibold hover:bg-violet-800
`,
  ItemAddBtn: tw.button`
    bg-violet-700 rounded-r-lg px-4 h-12 text-white font-semibold hover:bg-violet-800
`,
  BuyBtnLabel: tw.label`
text-2xl lg:text-xl text-center text-black dark:text-gray-400
`,
  BuyBtnDiv: tw.div`
flex items-center mt-10 w-72 h-fit
`,
  BreadCrumbDiv: tw.div`
    p-4 bg-white dark:bg-gray-800
`,
  EmptyTitle: tw.h1`
text-2xl text-black dark:text-gray-400
`,
};
