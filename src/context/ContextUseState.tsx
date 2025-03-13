import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IDataUserAPI } from "../types/user";
import { IMainCategory } from "../types/category";
import { ISubCategory } from "../types/subCategory";
import { ICity } from "../types/cities";
import { IComments } from "../types/IComments";
import { IProduct } from "../types/IProduct";

interface ContextType {
  openModalForAction:
    | IDataUserAPI
    | IMainCategory
    | ISubCategory
    | ICity
    | IComments
    | IProduct
    | null;
  setOpenModalForAction: Dispatch<
    SetStateAction<
      | IDataUserAPI
      | IMainCategory
      | ISubCategory
      | ICity
      | IComments
      | IProduct
      | null
    >
  >;
}
const ContextUseState = createContext<ContextType | undefined>(undefined);
function ContextProvider({ children }: { children: ReactNode }) {
  const [openModalForAction, setOpenModalForAction] = useState<
    | IDataUserAPI
    | IMainCategory
    | ISubCategory
    | ICity
    | IComments
    | IProduct
    | null
  >(null);

  return (
    <ContextUseState.Provider
      value={{
        openModalForAction,
        setOpenModalForAction,
      }}
    >
      {children}
    </ContextUseState.Provider>
  );
}

export { ContextProvider, ContextUseState };
