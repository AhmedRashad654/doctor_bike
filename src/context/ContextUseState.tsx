import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ContextType {
  openModalForAction: { id: string; status?: boolean } | null;
  setOpenModalForAction: Dispatch<
    SetStateAction<{ id: string; status?: boolean } | null>
  >;
}
const ContextUseState = createContext<ContextType | undefined>(undefined);
function ContextProvider({ children }: { children: ReactNode }) {
  const [openModalForAction, setOpenModalForAction] = useState<{
    id: string;
  } | null>(null);

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
