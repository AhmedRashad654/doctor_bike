import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IDataUserAPI } from "../types/user";
import { IMainCategory } from "../types/category";

interface ContextType {
  openModalForAction: IDataUserAPI | IMainCategory | null;
  setOpenModalForAction: Dispatch<
    SetStateAction<IDataUserAPI | IMainCategory | null>
  >;
}
const ContextUseState = createContext<ContextType | undefined>(undefined);
function ContextProvider({ children }: { children: ReactNode }) {
  const [openModalForAction, setOpenModalForAction] = useState<
    IDataUserAPI | IMainCategory | null
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
