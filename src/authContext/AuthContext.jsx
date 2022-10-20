import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const register = data => {
    setUsers(prevUsers => [...prevUsers, data]);
    setName(data.name);
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
    setName('');
  };

  const login = password => {
    const user = users.find(user => user.password === password);
    if (user) {
      setIsAuth(true);
      setName(user.name);
    }
  };

  return (
    <AuthContext.Provider
      value={{ name, users, isAuth, register, logout, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
