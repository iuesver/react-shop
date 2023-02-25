import tw from 'tailwind-styled-components';

export const headerStyles = {
  NavBar: tw.nav`
  w-full h-16 p-2 bg-white dark:bg-gray-900 flex justify-between shadow-lg sticky z-40
  `,
  LeftBar: tw.div`
  flex items-center
  `,
  RightBar: tw.div`
  flex
  `,
  HomeBtn: tw.h1`
  text-black dark:text-white text-lg md:text-base lg:text-xl font-bold px-3 py-1
  `,
  NavBtn: tw.div`
  relative text-black dark:text-white hidden md:block md:text-sm lg:text-base font-semibold p-2 mx-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg
  `,
  MenuBtn: tw.div`
  relative text-black dark:text-white block md:hidden md:text-sm lg:text-base font-semibold px-1 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg
  `,
  CartCount: tw.div`
  absolute flex justify-center items-center text-white top-2 left-9 w-4 h-4 text-xs border-2 border-red-500 bg-red-500 rounded-full
  `,
};

export const menuStyles = {
  MenuDiv: tw.div`
w-screen h-screen flex flex-col justify-evenly items-center fixed -mt-2 -ml-2 bg-gray-100 dark:bg-gray-900 opacity-95
`,
  MenuSpan: tw.span`
text-2xl text-black dark:text-white
`,
};

export const searchBarStyles = {
  SearchContainer: tw.div`
flex items-center
`,
  Search: tw.input`
hidden md:block absolute md:static top-16 left-0 w-full md:w-42 h-5/6 px-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-sm outline-none
`,
  AutoCompleteContainer: tw.div`
absolute w-screen md:w-60 h-auto absolute z-10 top-28 md:top-16 left-0 md:left-auto p-1 bg-white dark:bg-gray-700 shadow-xl
`,
  SearchedList: tw.ul`
w-screen md:w-full h-fit
`,
  SearchedItem: tw.li<{ isFocus?: boolean }>`
p-1 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white ${(
    props: any
  ) =>
    props.isFocus
      ? 'bg-gray-100 dark:bg-gray-600'
      : 'bg-white dark:bg-gray-700'}
`,
};
