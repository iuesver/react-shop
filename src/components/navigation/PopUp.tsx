import React from 'react';
import { useDispatch } from 'react-redux';
import { popUpStyles } from '../../styles/modal/popUpStyles';

export default function PopUp(props: {
  state: boolean;
  func: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  return (
    <popUpStyles.PopUpDiv>
      <popUpStyles.Title>정말로 구매하시겠습니까?</popUpStyles.Title>
      <p>장바구니의 모든 상품이 삭제됩니다.</p>
      <popUpStyles.BtnDiv>
        <button
          type="submit"
          className="btn-primary mr-4"
          onClick={() => {
            dispatch({ type: 'RESET' });
            location.reload();
          }}
        >
          네
        </button>
        <button
          type="reset"
          className="btn-primary"
          onClick={() => props.func(!props.state)}
        >
          아니오
        </button>
      </popUpStyles.BtnDiv>
    </popUpStyles.PopUpDiv>
  );
}
