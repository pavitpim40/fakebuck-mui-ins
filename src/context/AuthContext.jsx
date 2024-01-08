import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {
    try {
      setUser({ firstName: 'pavit', lastName: 'pimchanagul' });
    } catch (error) {
      console.log('error');
    }
  };

  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
