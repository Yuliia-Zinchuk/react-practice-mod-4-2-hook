import { useContext, useState } from 'react';
import { AuthContext } from 'authContext/AuthContext';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const AuthNav = () => {
  const [isRegFormShown, setIsRegFormShown] = useState(false);
  const [isLoginFormShown, setIsLoginFormShown] = useState(false);
  const { name, isAuth, logout } = useContext(AuthContext);

  const clickHandler = e => {
    logout();
    setIsLoginFormShown(false);
    setIsRegFormShown(false);
  };

  return (
    <>
      {isAuth ? (
        <>
          <p>{name}, welcome!</p>
          <button type="button" onClick={clickHandler}>
            Logout
          </button>
        </>
      ) : (
        <>
          <ul>
            <li>
              <button type="button" onClick={() => setIsLoginFormShown(true)}>
                Login
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setIsRegFormShown(true)}>
                Register
              </button>
            </li>
          </ul>
          {isRegFormShown && <RegisterForm />}
          {isLoginFormShown && <LoginForm />}
        </>
      )}
    </>
  );
};
