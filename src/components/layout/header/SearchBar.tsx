import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { searchBarStyles } from '../../../styles/header/headerStyles';

interface autoDatas {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function SearchBar() {
  const [keyword, setKeyword] = useState<string>('');
  const [keyItems, setKeyItems] = useState<autoDatas[]>([]);
  const [index, setIndex] = useState<number>(-1);
  const autoRef = useRef<HTMLUListElement>(null);
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  const navigate = useNavigate();
  const ArrowDown = 'ArrowDown';
  const ArrowUp = 'ArrowUp';
  const Escape = 'Escape';
  const Selec = 'Enter';
  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if (keyItems.length > 0) {
      switch (e.key) {
        case ArrowDown:
          console.log(e);
          setIndex(index + 1);
          if (autoRef.current?.childElementCount === index + 1) setIndex(0);
          console.log(index);

          break;
        case ArrowUp:
          setIndex(index - 1);
          console.log(e);
          if (index <= 0) {
            setIndex(-1);
          }
          console.log(index);
          break;
        case Selec:
          setKeyword(``);
          setKeyItems([]);
          setIndex(-1);
          navigate(`/${keyItems[index].id}`);
          break;
        case Escape:
          console.log(index);
          setKeyItems([]);
          setIndex(-1);
          break;
      }
    }
  };

  const calledItems = useSelector((state: any) => state.itemList);
  let itemList = calledItems.state;

  interface ICity {
    includes(data: string): boolean;
    title?: any;
  }
  const updateData = async () => {
    const res = itemList;
    let b = res
      .filter(
        (list: ICity) =>
          list.title.toLowerCase().includes(keyword) === true ||
          list.title.toLowerCase().split(' ').join('').includes(keyword) ===
            true ||
          list.title.toUpperCase().includes(keyword) === true ||
          list.title.toUpperCase().split(' ').join('').includes(keyword) ===
            true
      )
      .slice(0, 10);
    setKeyItems(b);
  };
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
    }, 100);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);
  return (
    <searchBarStyles.SearchContainer>
      <searchBarStyles.Search
        value={keyword}
        placeholder="검색"
        onChange={onChangeData}
        onKeyDown={handleKeyArrow}
      />
      {keyItems.length > 0 && keyword && (
        <searchBarStyles.AutoCompleteContainer>
          <searchBarStyles.SearchedList ref={autoRef}>
            {keyItems.map((search, idx) => (
              <Link to={`${search.id}`} key={search.title}>
                <searchBarStyles.SearchedItem
                  isFocus={index === idx ? true : false}
                  onClick={() => {
                    setKeyword('');
                  }}
                >
                  {search.title}
                </searchBarStyles.SearchedItem>
              </Link>
            ))}
          </searchBarStyles.SearchedList>
        </searchBarStyles.AutoCompleteContainer>
      )}
    </searchBarStyles.SearchContainer>
  );
}
