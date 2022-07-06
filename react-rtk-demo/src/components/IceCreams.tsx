import { useState } from 'react';
import {
  orderIceCream,
  restockeIceCream,
} from '../redux/iceCream/iceCreamSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

const IceCreams: React.FC = () => {
  const { numOfIceCreams } = useAppSelector((state) => state.iceCream);

  const dispatch = useAppDispatch();

  const [value, setValue] = useState(1);

  return (
    <>
      <div>
        <h2>Number of ice creams - {numOfIceCreams}</h2>
        <button onClick={() => dispatch(orderIceCream())}>
          Order ice cream
        </button>
        <button onClick={() => dispatch(restockeIceCream(value))}>
          Restock ice creams
        </button>
      </div>
      <label>
        Enter restock number
        <input
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          type='number'
        />
      </label>
    </>
  );
};

export { IceCreams };
