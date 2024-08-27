import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  const defineUser = (newUser) => {
    setUser((prevUser) => [...prevUser, newUser]);
    console.log(newUser);
  };

  return (
    <UserContext.Provider value={{ user, defineUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
