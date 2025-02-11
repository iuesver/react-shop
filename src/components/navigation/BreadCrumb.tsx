import { useLocation } from 'react-router';
import tw from 'tailwind-styled-components';
import { ChevronRightIcon } from '@heroicons/react/outline';

const BreadCrumbDiv = tw.div`
flex items-center shrink-0
`;

export default function BreadCrumb(props: {
  category?: string;
  title?: string;
}) {
  const location = useLocation();
  const path = location.pathname;
  const getCategoryName = (name: string) => {
    switch (name) {
      case '/fashion':
        return '패션';
      case '/accessory':
        return '악세서리';
      case '/digital':
        return '디지털';
      case '/cart':
        return '장바구니';
      default:
        return '홈';
    }
  };

  const getProductCategory = (name?: string) => {
    switch (name) {
      case "men's clothing":
        return '패션';
      case "women's clothing":
        return '패션';
      case 'jewelery':
        return '악세서리';
      case 'electronics':
        return '디지털';
      default:
        break;
    }
  };
  return (
    <>
      {Object.keys(props).length < 1 ? (
        <BreadCrumbDiv>
          {getCategoryName('')}
          <ChevronRightIcon className="w-3 h-3 mx-2" />
          {getCategoryName(path)}
        </BreadCrumbDiv>
      ) : (
        <BreadCrumbDiv>
          <span className="shrink-0">{getProductCategory(props.category)}</span>
          <ChevronRightIcon className="w-3 h-3 mx-2" />
          <span>{props.title}</span>
        </BreadCrumbDiv>
      )}
    </>
  );
}
