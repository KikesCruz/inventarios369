import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase, LinksArray } from "../index";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // comentario de rastro git
  // nueva prueba para que macos detecte mis cambios
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(event, session);
      },
    );
  }, []);
};
