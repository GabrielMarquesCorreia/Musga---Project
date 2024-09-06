import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  id: string;
  name: string;
  profileImage: string; // Adiciona a propriedade profileImage
}

interface UserContextType {
  users: User[];
  setUserName: (userId: string, name: string) => void;
  setProfileImage: (userId: string, image: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  // Function to update the user name and save it to localStorage
  const setUserName = (userId: string, name: string) => {
    localStorage.setItem(`userName-${userId}`, name);
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, name } : user))
    );
  };

  // Function to update the user profile image and save it to localStorage
  const setProfileImage = (userId: string, image: string) => {
    localStorage.setItem(`profileImage-${userId}`, image);
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, profileImage: image } : user
      )
    );
  };

  // Initialize users from localStorage when the component mounts
  useEffect(() => {
    const storedUsers = Object.keys(localStorage)
      .filter(
        (key) => key.startsWith("userName-") || key.startsWith("profileImage-")
      )
      .map((key) => ({
        id: key.split("-")[1],
        name: localStorage.getItem(`userName-${key.split("-")[1]}`) || "",
        profileImage:
          localStorage.getItem(`profileImage-${key.split("-")[1]}`) ||
          "/images/default.jpg", // Adiciona a imagem de perfil
      }));
    setUsers(storedUsers);
  }, []);

  return (
    <UserContext.Provider value={{ users, setUserName, setProfileImage }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
