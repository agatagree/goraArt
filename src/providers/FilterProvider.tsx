import { createContext, ReactNode, useMemo, useReducer } from "react";
import { FilterReducer } from "providers/FilterReducer";

export type FilterContextType = {
  selectedValues: string[];
  dispatch: React.Dispatch<any>;
};

const initialState: FilterContextType = {
  selectedValues: [],
  dispatch: () => {},
};
export const FilterContext = createContext<FilterContextType>(initialState);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedValues, dispatch] = useReducer(FilterReducer, []);

  const value = useMemo(() => ({
    selectedValues, dispatch
  }),[selectedValues])

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
