import { useContext } from "react";
import { ContextUseState } from "../../context/ContextUseState";

export default function useContextState() {
  const context = useContext(ContextUseState);
  if (context === undefined) {
    throw new Error("problem in context");
  }
  return context;
}
