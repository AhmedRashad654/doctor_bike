import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IDataUserAPI } from "../types/user";

interface ContextType {
  openModalForAction: IDataUserAPI | null;
  setOpenModalForAction: Dispatch<SetStateAction<IDataUserAPI | null>>;
}
const ContextUseState = createContext<ContextType | undefined>(undefined);
function ContextProvider({ children }: { children: ReactNode }) {
  const [openModalForAction, setOpenModalForAction] =
    useState<IDataUserAPI | null>(null);

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
