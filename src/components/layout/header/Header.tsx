import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import Menu from './Menu';
import { headerStyles } from '../../../styles/header/headerStyles';
import {
  ShoppingBagIcon,
  SunIcon,
  MoonIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';

type item = {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
};

export default function Header() {
  const initialMode = useSelector((state: any) => state.mode);
  const [theme, setTheme] = useState(initialMode || 'light');
  const [menu, setMenu] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);
    if (width > 768) {
      setMenu(false);
      setClicked(false);
    }
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, [width]);

  const condition: item[] = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const count = condition.reduce((acc: number, cur: item) => {
    acc += cur.count;
    return acc;
  }, 0);
  return (
    <>
      <headerStyles.NavBar>
        {menu && (
          <Menu
            menu={menu}
            clicked={clicked}
            setMenu={setMenu}
            setClicked={setClicked}
          />
        )}
        <headerStyles.LeftBar>
          <headerStyles.MenuBtn>
            {clicked === false ? (
              <MenuIcon
                className="w-7 h-7 mx-2"
                onClick={() => {
                  setMenu(!menu);
                  setClicked(!clicked);
                }}
              />
            ) : (
              <XIcon
                className="w-7 h-7 mx-2"
                onClick={() => {
                  setMenu(!menu);
                  setClicked(!clicked);
                }}
              />
            )}
          </headerStyles.MenuBtn>
          <Link to="/">
            <headerStyles.HomeBtn>React Shop</headerStyles.HomeBtn>
          </Link>
          <Link to="/fashion">
            <headerStyles.NavBtn>패션</headerStyles.NavBtn>
          </Link>
          <Link to="/accessory">
            <headerStyles.NavBtn>악세서리</headerStyles.NavBtn>
          </Link>
          <Link to="/digital">
            <headerStyles.NavBtn>디지털</headerStyles.NavBtn>
          </Link>
        </headerStyles.LeftBar>
        <headerStyles.RightBar
          onClick={() => {
            setClicked(false);
            setMenu(false);
          }}
        >
          <headerStyles.NavBtn
            className="block"
            onClick={() => {
              setTheme(colorTheme);
              dispatch({ type: 'CHANGE', payload: colorTheme });
            }}
          >
            {colorTheme === 'light' ? (
              <SunIcon className="w-7 h-7 mx-2" />
            ) : (
              <MoonIcon className="w-7 h-7 mx-2" />
            )}
          </headerStyles.NavBtn>
          <SearchBar />
          <headerStyles.NavBtn className="block md:hidden">
            <SearchIcon
              className="w-7 h-7 mx-2"
              onClick={() => {
                const search = document.querySelector('input');
                if (search?.classList.contains('hidden')) {
                  search?.classList.remove('hidden');
                  search?.classList.add('block');
                } else {
                  search?.classList.remove('block');
                  search?.classList.add('hidden');
                }
              }}
            />
          </headerStyles.NavBtn>
          <Link to="/cart">
            <headerStyles.NavBtn className="block">
              <ShoppingBagIcon className="w-7 h-7 mx-2" />
              <headerStyles.CartCount className="blcok">
                {count}
              </headerStyles.CartCount>
            </headerStyles.NavBtn>
          </Link>
        </headerStyles.RightBar>
      </headerStyles.NavBar>
      <Outlet />
    </>
  );
}
