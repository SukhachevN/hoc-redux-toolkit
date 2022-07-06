import { useState } from 'react';
import { orderCake, restockeCake } from '../redux/cake/cakeSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

const Cakes: React.FC = () => {
  const { numOfCakes } = useAppSelector((state) => state.cake);

  const dispatch = useAppDispatch();

  const [value, setValue] = useState(1);

  return (
    <>
      <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(orderCake())}>Order cake</button>
        <button onClick={() => dispatch(restockeCake(value))}>
          Restock cakes
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

export { Cakes };
