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
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(event, session);
      },
    );
  }, []);
};
