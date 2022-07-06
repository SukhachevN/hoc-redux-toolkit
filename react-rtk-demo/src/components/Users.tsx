import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchUsers } from '../redux/user/userSlice';

const Users: React.FC = () => {
  const { data, isLoading, error } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {isLoading && <div>loading...</div>}
      {!isLoading && error && <div>{error}</div>}
      {!isLoading && (
        <ul>
          {data.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Users };
