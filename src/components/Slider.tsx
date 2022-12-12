import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import useInterval from '../hooks/useInterval';
import { PlayIcon, PauseIcon } from '@heroicons/react/outline';

interface IImage {
  url: string;
  title?: string;
  description?: string;
  category: string;
}

const delay = 5000;

const SliderSection = tw.section`
w-full max-h-96 relative overflow-x-hidden slidersection
`;

const SliderList = tw.ul` relative flex slider 
`;

const NextBtn = tw.button`
  absolute h-full w-8 top-0 right-0  bg-transparent hover:bg-gray-500 hover:bg-opacity-25 hover:ease-in duration-200
`;

const PrevBtn = tw.button`
absolute h-full w-8 top-0 left-0 bg-transparent hover:bg-gray-500 hover:bg-opacity-25 hover:ease-in duration-200
`;

const Slider = ({ images }: { images: IImage[] }) => {
  const [moveClass, setMoveClass] = useState('');
  const [moveAuto, setMoveAuto] = useState(true);
  const [carouselItems, setCarouselItems] = useState<IImage[]>(images);

  const handleAnimationEnd = useCallback(() => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('');
  }, [moveClass]);

  const shiftNext = useCallback(
    (copy: IImage[]) => {
      let firstcard = copy.shift();
      if (firstcard) {
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
      }
    },
    [carouselItems]
  );

  const shiftPrev = useCallback(
    (copy: IImage[]) => {
      let lastcard = copy.pop();
      if (lastcard) {
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
      }
    },
    [carouselItems]
  );

  useInterval(
    () => {
      setMoveClass('next');
    },
    moveAuto ? delay : null
  );

  const handleCheck = useCallback(() => {
    setMoveAuto(!moveAuto);
  }, [moveAuto]);

  const SliderImage = useCallback(
    ({ url, title, description, category }: IImage) => {
      return (
        <li className="relative min-w-full">
          <img
            src={url}
            alt={`${title}`}
            className="min-w-full max-h-96 object-cover"
          />
          <div className="absolute text-left top-[40%] left-[5%]">
            <p className="text-grey-800 font-bold text-4xl">{title}</p>
            <p className="text-grey-800 text-2xl">{description}</p>
            <button className="btn btn-md mt-3 text-lg">
              <Link to={`/${category}`}>바로가기</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </li>
      );
    },
    []
  );

  return (
    <SliderSection
      onMouseEnter={() => {
        if (moveAuto) handleCheck();
      }}
    >
      <SliderList
        className={`${moveClass}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {carouselItems.map((image, index) => (
          <SliderImage
            url={image.url}
            title={image.title}
            description={image.description}
            category={image.category}
            key={index}
          />
        ))}
      </SliderList>
      <label
        htmlFor="default-toggle"
        className="inline-flex absolute swap top-10 right-10 items-center cursor-pointer "
      >
        <input
          type="checkbox"
          checked={moveAuto}
          id="default-toggle"
          className=""
          onChange={handleCheck}
        />
        <PlayIcon className="swap-off absolute right-4 text-white w-11 h-11" />
        <PauseIcon className="swap-on absolute right-4 text-blue-500 w-11 h-11" />
      </label>
      <PrevBtn
        onClick={() => {
          if (moveAuto) handleCheck();
          setMoveClass('prev');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </PrevBtn>
      <NextBtn
        onClick={() => {
          if (moveAuto) handleCheck();
          setMoveClass('next');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </NextBtn>
    </SliderSection>
  );
};

export default React.memo(Slider);
