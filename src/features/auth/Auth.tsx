import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Login } from '../../pages';
import Products from '../../pages/Products';
import { restoreTokens, selectIsLoggedIn } from '../../store/authSlice';

const Auth = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(restoreTokens());
    }
  }, [dispatch, isLoggedIn]);

  return isLoggedIn ? <Products /> : <Login />;
};

export default Auth;
