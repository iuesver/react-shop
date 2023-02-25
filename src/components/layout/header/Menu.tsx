import { Link } from 'react-router-dom';
import { menuStyles } from '../../../styles/header/headerStyles';

export default function Menu(props: any) {
  return (
    <menuStyles.MenuDiv
      onClick={() => {
        props.setMenu(!props.menu);
        props.setClicked(!props.clicked);
      }}
    >
      <Link to="/fashion">
        <menuStyles.MenuSpan
          onClick={() => {
            props.setMenu(!props.menu);
            props.setClicked(!props.clicked);
          }}
        >
          패션
        </menuStyles.MenuSpan>
      </Link>
      <Link to="/accessory">
        <menuStyles.MenuSpan
          onClick={() => {
            props.setMenu(!props.menu);
            props.setClicked(!props.clicked);
          }}
        >
          악세서리
        </menuStyles.MenuSpan>
      </Link>
      <Link to="/digital">
        <menuStyles.MenuSpan
          onClick={() => {
            props.setMenu(!props.menu);
            props.setClicked(!props.clicked);
          }}
        >
          디지털
        </menuStyles.MenuSpan>
      </Link>
    </menuStyles.MenuDiv>
  );
}
