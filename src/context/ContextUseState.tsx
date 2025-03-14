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
import { IAdvertisement } from "../types/IAdvertisement";

interface ContextType {
  openModalForAction:
    | IDataUserAPI
    | IMainCategory
    | ISubCategory
    | ICity
    | IComments
    | IProduct
    | IAdvertisement
    | null;
  setOpenModalForAction: Dispatch<
    SetStateAction<
      | IDataUserAPI
      | IMainCategory
      | ISubCategory
      | ICity
      | IComments
      | IProduct
      | IAdvertisement
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
    | IAdvertisement
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
