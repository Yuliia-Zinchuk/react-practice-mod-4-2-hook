import { useState, useContext } from 'react';
import { AuthContext } from 'authContext/AuthContext';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { register } = useContext(AuthContext);

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    register({ name, password });
    setName('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input onChange={handleInput} name="name" type="text" value={name} />
      </label>
      <label>
        Password
        <input
          onChange={handleInput}
          type="text"
          name="password"
          value={password}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};
