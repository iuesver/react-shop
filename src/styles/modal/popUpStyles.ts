import tw from 'tailwind-styled-components';

export const popUpStyles = {
  PopUpDiv: tw.div`
fixed bottom-0 md:top-1/3 md:left-1/3 w-full md:w-1/3 md:min-w-fit h-1/3 p-8 -ml-4 md:m-0 bg-white dark:bg-gray-700 rounded-lg shadow-xl
`,
  Title: tw.h1`
text-xl font-bold text-black dark:text-gray-400 pb-4
`,
  BtnDiv: tw.div`
absolute bottom-10 right-10
`,
};
